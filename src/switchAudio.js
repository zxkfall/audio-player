const {getElSize, getContentSize} = require('./util')
let index = 0;
let nextButtonClass;
let preButtonClass;

const parseCover = async (item) => {
    const cover = item.src;
    if (cover) {
        return item.src;
    }
    const sourceUrl = item.url;
    let pos = 0;
    if (sourceUrl.endsWith('.flac')) {
        const response = await fetch(sourceUrl, {method: 'GET'})
        const data = await response.arrayBuffer()
        const array = new Uint8Array(data);
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
                    pos = pos + 4;
                    pos += descriptionSize;
                    pos = pos + 4 * 4;
                    let imageSize = getElSize(array, pos);
                    pos = pos + 4;
                    let imageData = array.slice(pos, pos + imageSize);
                    return `data:${imageType};base64,${window.btoa(String.fromCharCode(...imageData))}`
                }
                pos += size;
            } while (lastFlag !== 1)
        }

    }
}

const playByIndex = async (audio, musics) => {
    audio.src = musics[index].url
    const cover = await parseCover(musics[index])
    audio.play()
    setMusicCover(cover)
};

const setMusicCover = (cover) => {
    if (cover) {
        document.documentElement.style.setProperty('--background-image', `url('${cover}')`)
    } else {
        document.documentElement.style.setProperty('--background-image', `url('https://avatars.githubusercontent.com/u/42455616?v=4')`)
    }
};

const naturalSwitch = async (audio, musics) => {
    audio.src = musics[0].url
    let cover = musics[index].cover;
    if (!cover || cover.length === 0) {
        cover = await parseCover(musics[index])
    }
    setMusicCover(cover);
    audio.addEventListener('ended', () => {
        console.log(index)
        if (index < musics.length - 1) {
            index++;
            playByIndex(audio, musics);
        }
    })
};

const changeAudio = (audio, musics, items, mode) => {
    nextButtonClass = `.${mode}-next`;
    preButtonClass = `.${mode}-pre`;
    naturalSwitch(audio, musics);
    preOrNextAudio(audio, musics, nextButtonClass, 'already last')
    preOrNextAudio(audio, musics, preButtonClass, 'already first')
};

const getSide = (className, musics) => {
    let side = 0;
    if (className === preButtonClass) {
        side = -1;
    }
    if (className === nextButtonClass) {
        side = musics.length;
    }
    return side;
};

const getTempIndex = (className, tempIndex) => {
    if (className === preButtonClass) {
        tempIndex--;
    }
    if (className === nextButtonClass) {
        tempIndex++;
    }
    return tempIndex;
};

const preOrNextAudio = (audio, musics, className, message) => {
    const switchButton = document.querySelector(className);
    switchButton.addEventListener('click', () => {
        let tempIndex = index;
        const side = getSide(className, musics);
        tempIndex = getTempIndex(className, tempIndex);
        if (tempIndex === side) {
            alert(message)
            return
        }
        index = tempIndex;
        playByIndex(audio, musics);
    })
}

module.exports = {changeAudio}
