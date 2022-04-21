require('./index.css')
const createAudioPlayer = async () => {
    let body = document.querySelector('body');
    let section = document.createElement('section');
    section.innerHTML = `
    <section class="audio-player-mini">
        <section class="audio-player-mini-title">
            <button class="audio-player-mini-sound">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-down" viewBox="0 0 16 16">
                    <path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12V4zM6.312 6.39 8 5.04v5.92L6.312 9.61A.5.5 0 0 0 6 9.5H4v-3h2a.5.5 0 0 0 .312-.11zM12.025 8a4.486 4.486 0 0 1-1.318 3.182L10 10.475A3.489 3.489 0 0 0 11.025 8 3.49 3.49 0 0 0 10 5.525l.707-.707A4.486 4.486 0 0 1 12.025 8z"/>
                </svg>
            </button>
            <input class="audio-player-mini-voice" type="range" min="0" max="100">
        </section>
        <section class="audio-player-mini-content">
            <button class="audio-player-mini-pre">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                </svg>
            </button>
            <button class="audio-player-mini-play">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                    <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                </svg>
            </button>
            <button class="audio-player-mini-next">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                </svg>
            </button>
        </section>
        <section class="audio-player-mini-bottom">
            <div class="audio-player-mini-progress"></div>
        </section>
    </section>
    `
    const url = args.items[0].url;

    // const AudioContext = window.AudioContext || window.webkitAudioContext;
    // const audioCtx = new AudioContext();
    // const audioData = await fetch(url).then(r => r.arrayBuffer());
    // const decodeAudioData = await audioCtx.decodeAudioData(audioData);
    // const sourceNode = audioCtx.createBufferSource();
    // sourceNode.buffer = decodeAudioData;
    // sourceNode.connect(audioCtx.destination)

    const audio = document.createElement('audio');

    body.appendChild(section)
    const element = document.querySelector('.audio-player-mini-play');
    audio.src = url
    element.addEventListener('click',function (){
        if (audio.paused) {
            audio.play()
        }else {
            audio.pause()
        }
    })

    document.querySelector(".audio-player-mini-voice").oninput = function () {
        console.log('sdsd')
        console.log(this.min)
        let value = (this.value - this.min) / (this.max - this.min) * 100
        this.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + value + '%, #fff ' + value + '%, white 100%)'
    };

    let bottom = document.querySelector(".audio-player-mini-bottom");
    const progress = document.querySelector(".audio-player-mini-progress");

    // setInterval(() => {
    //     console.log("length:" + bottom.clientWidth)
    //     console.log("inner:" + progress.clientWidth)
    // }, 1000)

    document.getElementsByTagName('body')[0].style.setProperty('--audio-player-totalSize', '84px');

};
let args = {}

const AudioPlayer = function ({position = 'fixed', items = []} = {}) {
    args = {position, items}
    this.createAPlayer = createAudioPlayer
}

window.$AudidoPlayer = AudioPlayer

module.exports = AudioPlayer
