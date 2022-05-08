const getPlayerLayout = require("./playerLayout");
const {getPlay, getPause} = require("./svgStore");
const createPlayerLayoutByMode = (mode) => {
    let body = document.querySelector('body');
    let section = document.createElement('section');
    section.innerHTML = getPlayerLayout(mode)
    body.appendChild(section)
};

const pauseOrPlayAudio = (audio, modePre) => {
    const playBtn = document.querySelector(`.${modePre}-play`);
    playBtn.addEventListener('click', () => {
        let isPlaying = audio.currentTime > 0 && !audio.paused && !audio.ended
            && audio.readyState > audio.HAVE_CURRENT_DATA;
        if (!isPlaying) {
            audio.play()
            return
        }
        audio.pause()
    })
};

const changePlayIcon = (audio, modePre) => {
    const playBtn = document.querySelector(`.${modePre}-play`);
    audio.addEventListener('play', () => {
        playBtn.innerHTML = getPlay()

    })
    audio.addEventListener('pause', () => {
        playBtn.innerHTML = getPause()

    })
}

const createAudio = () => {
    const audio = document.createElement('audio');
    document.body.append(audio)
    return audio;
};

const updateProgress = (audio, modePre) => {
    let bottom = document.querySelector(`.${modePre}-bottom`);
    const progress = document.querySelector(`.${modePre}-progress`);

    audio.addEventListener('timeupdate', function () {
        let percent = audio.currentTime / audio.duration
        const number = bottom.clientWidth * percent;
        progress.style.width = number + 'px'
    })
};

const isSupportedCssVar = () => {
    const b = window.CSS && window.CSS.supports && window.CSS.supports('--background-image', "./images/flower.jpg");
    if (b) {
        console.log('support CSS var')
    } else {
        console.log('not support CSS var')
    }
}

const getElSize = (array, pos) => (array[pos] << 24) +
    (array[pos + 1] << 16) +
    (array[pos + 2] << 8) +
    array[pos + 3];

const getContentSize = (array, pos) => (array[pos] << 16) +
    (array[pos + 1] << 8) +
    array[pos + 2];

module.exports = {
    updateProgress,
    createAudio,
    createPlayerLayoutByMode,
    pauseOrPlayAudio,
    changePlayIcon,
    isSupportedCssVar,
    getElSize,
    getContentSize
}
