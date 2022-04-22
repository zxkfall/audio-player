const getPlayerLayout = require("./playerLayout");
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

const getBackground = (value) => 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + value + '%, #fff ' + value + '%, white 100%)';

function getMute() {
    return `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-mute" viewBox="0 0 16 16">
              <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zM6 5.04 4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96V5.04zm7.854.606a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/>
            </svg>
`;
}

function getUnMuted() {
    return `
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-down" viewBox="0 0 16 16"> 
                <path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12V4zM6.312 6.39 8 5.04v5.92L6.312 9.61A.5.5 0 0 0 6 9.5H4v-3h2a.5.5 0 0 0 .312-.11zM12.025 8a4.486 4.486 0 0 1-1.318 3.182L10 10.475A3.489 3.489 0 0 0 11.025 8 3.49 3.49 0 0 0 10 5.525l.707-.707A4.486 4.486 0 0 1 12.025 8z"/>              
           </svg>`;
}

const changeVolume = (audio, modePre, initLevel = 0.2) => {
    const voice = document.querySelector(`.${modePre}-voice`);
    const initLength = initLevel * 100;
    voice.value = initLength
    audio.volume = initLevel
    voice.style.background = getBackground(initLength)
    voice.oninput = function () {
        audio.muted = false
        let value = (this.value - this.min) / (this.max - this.min) * 100
        audio.volume = value / 100
        this.style.background = getBackground(value)
        sound.innerHTML = getUnMuted()
    };

    const sound = document.querySelector(`.${modePre}-sound`);
    sound.addEventListener('click', () => {
        audio.muted = !audio.muted
        if (audio.muted) {
            sound.innerHTML = getMute()
            voice.value = 0
            voice.style.background = getBackground(0)
        } else {
            voice.value = audio.volume*100
            const event = document.createEvent('HTMLEvents');
            event.initEvent('input',true,true)
            voice.dispatchEvent(event)
            sound.innerHTML = getUnMuted()
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

module.exports = {updateProgress, getAudio, createPlayerLayoutByMode, pauseOrPlayAudio, initVoiceBar: changeVolume}
