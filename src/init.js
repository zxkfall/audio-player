const getLayout = require("./layout");
const {getPlay, getPause} = require("./svg");
const volume = require('./volume')
const {changeAudio} = require('./audio')

let myAudio
let modePre
let items = []

const playButton = () => document.querySelector(`.${modePre}-play`);
const bottomLayout = () => document.querySelector(`.${modePre}-bottom`);
const progress = () => document.querySelector(`.${modePre}-progress`);


const playAudio = () => {
    playButton().addEventListener('click', () => {
        let isPlaying = myAudio.currentTime > 0 && !myAudio.paused && !myAudio.ended
            && myAudio.readyState > myAudio.HAVE_CURRENT_DATA;
        if (!isPlaying) {
            myAudio.play()
            return
        }
        myAudio.pause()
    })
};

const changePlayIcon = () => {
    myAudio.addEventListener('play', () => {
        playButton().innerHTML = getPlay()

    })
    myAudio.addEventListener('pause', () => {
        playButton().innerHTML = getPause()

    })
}

const updateProgress = () => {
    myAudio.addEventListener('timeupdate', () => {
        let percent = myAudio.currentTime / myAudio.duration
        const number = bottomLayout().clientWidth * percent;
        progress().style.width = number + 'px'
    })
};

const createLayout = () => {
    const body = document.querySelector('body');
    const audio = document.createElement('audio');
    const section = document.createElement('section');
    section.innerHTML = getLayout(modePre)
    myAudio = audio
    body.append(section, audio)
}
const mountEvent = () => {
    updateProgress()
    changePlayIcon()
    playAudio()
    volume(myAudio, modePre, 0.2);
    changeAudio(myAudio, items, modePre);

}

const init = (mode, musics) => {
    modePre = mode
    items = musics;
    createLayout()
    mountEvent()
};

module.exports = {
    init
}
