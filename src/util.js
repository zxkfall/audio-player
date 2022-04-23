const getPlayerLayout = require("./playerLayout");
const svgStore = require('./svgStore')
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
        } else {
            audio.pause()
        }
    })
};

const getAudio = () => {
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

module.exports = {updateProgress, createAudio: getAudio, createPlayerLayoutByMode, pauseOrPlayAudio}
