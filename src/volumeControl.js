const svgStore = require("./svgStore");
let voice;
let sound;
const changeBackground = (initLength) => {
    voice.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + initLength + '%, #fff ' + initLength + '%, white 100%)'
};

const initVolumeAndBindElement = (modePre, initLevel, audio) => {
    voice = document.querySelector(`.${modePre}-voice`);
    sound = document.querySelector(`.${modePre}-sound`);
    voice.value = initLevel * 100
    audio.volume = initLevel
    changeBackground(voice.value);
};

const updateVolume = audio => {
    audio.muted = false
    const value = (voice.value - voice.min) / (voice.max - voice.min) * 100
    audio.volume = value / 100
    changeBackground(value);
    sound.innerHTML = svgStore.getUnMuted()
};

const updateMute = (audio) => {
    audio.muted = !audio.muted
    if (audio.muted) {
        voice.value = 0
        changeBackground(voice.value);
        sound.innerHTML = svgStore.getMute()
        return
    }
    voice.value = audio.volume * 100
    voice.dispatchEvent(new Event('input'))
    sound.innerHTML = svgStore.getUnMuted()
};

const volumeControl = (audio, modePre, initLevel = 0.2) => {
    initVolumeAndBindElement(modePre, initLevel, audio);
    voice.addEventListener('input', () => {
        updateVolume(audio);
    })

    sound.addEventListener('click', () => {
        updateMute(audio);
    })
};
module.exports = volumeControl
