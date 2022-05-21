const {getContentSize, getElSize, uint8ToBase64} = require("./util");

const parseCover = async (item) => {
    const cover = item.cover;
    if (cover) {
        return item.cover;
    }
    const sourceUrl = item.url;
    let pos = 0;
    if (sourceUrl.endsWith('.flac')) {
        const response = await fetch(sourceUrl, {method: 'GET'})
        const responseData = await response.arrayBuffer()
        const array = new Uint8Array(responseData);
        const tag = String.fromCharCode.apply(null, array.slice(0, 4));
        pos = pos + 4;
        if (tag === 'fLaC') {
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
    }
}

module.exports = parseCover
