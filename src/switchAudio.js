let index = 0;
let nextButtonClass;
let preButtonClass;
const playByIndex = (audio, musics) => {
    audio.src = musics[index].url
    const cover = musics[index].cover;
    audio.play()
    setMusicCover(cover)
    // let priority = getComputedStyle(document.documentElement).getPropertyValue('--background-image');
};

function setMusicCover(cover) {
    if (cover) {
        document.documentElement.style.setProperty('--background-image', `url('${cover}')`)
    } else {
        document.documentElement.style.setProperty('--background-image', `url('https://avatars.githubusercontent.com/u/42455616?v=4')`)
    }
}

const naturalSwitch = (audio, musics) => {
    audio.src = musics[0].url
    const cover = musics[index].cover;
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
