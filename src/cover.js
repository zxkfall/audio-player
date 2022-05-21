const {
    getContentSize,
    getElSize,
    uint8ToBase64,
    getID3TotalSize,
    getID3FrameSize,
    getArrayData,
    getTextSize
} = require("./util");

const parseCover = async (item) => {
    const cover = item.cover;
    if (cover) {
        return item.cover;
    }
    const sourceUrl = item.url;
    let pos = 0;
    if (sourceUrl.endsWith('.flac')) {
        const array = await getArrayData(sourceUrl);
        const tagFLAC = String.fromCharCode.apply(null, array.slice(0, 4));
        if (tagFLAC === 'fLaC') {
            pos = pos + 4;
            let flag = 0;
            let lastFlag
            do {
                flag = array[pos] & 0x7f
                lastFlag = (array[0] & 0xff) >> 7;
                pos++;
                const size = getContentSize(array, pos);
                pos += 3;
                if (flag === 6) {
                    pos = pos + 4;
                    let mimeSize = getElSize(array, pos);
                    pos = pos + 4;
                    const imageType = String.fromCharCode.apply(null, array.slice(pos, pos + mimeSize));
                    pos += mimeSize;
                    let descriptionSize = getElSize(array, pos);
                    pos = pos + 4 + descriptionSize;
                    pos = pos + 4 * 4;
                    let imageSize = getElSize(array, pos);
                    pos = pos + 4;
                    let imageData = array.slice(pos, pos + imageSize);
                    return uint8ToBase64(imageData, imageType);
                }
                pos += size;
            } while (lastFlag !== 1)
        }
    } else if (sourceUrl.endsWith('.mp3')) {
        const array = await getArrayData(sourceUrl);
        const tagID3v2 = String.fromCharCode.apply(null, array.slice(0, 3));
        if (tagID3v2 === 'ID3') {
            pos = pos + 6;
            const totalSize = getID3TotalSize(array, pos);
            pos = pos + 4;
            do {
                let contentHeadSize = 0;
                const frameID = String.fromCharCode.apply(null, array.slice(pos, pos + 4));
                const frameSize = getID3FrameSize(array, pos + 4);
                if (frameSize === 0) {
                    break;
                }
                contentHeadSize += 10;
                if (frameID === "APIC") {
                    let size = getTextSize(pos, contentHeadSize, array);
                    let start = pos + contentHeadSize + 1;
                    const mimeType = String.fromCharCode.apply(null, array.slice(start, start + size));
                    contentHeadSize = contentHeadSize + 1 + size;
                    size = getTextSize(pos, contentHeadSize, array);
                    contentHeadSize = contentHeadSize + 1 + size;
                    start = pos + contentHeadSize + 1;
                    let imageData = array.slice(start, start + frameSize);
                    return uint8ToBase64(imageData, mimeType);
                }
                pos = pos + frameSize + 10;
            } while (pos < totalSize + 10)
        }
    }
}

module.exports = parseCover
