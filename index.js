require('./index.css')
let miniMode = 'audio-player-mini'
const util = require('./src/util')

let args = {}
const createAudioPlayer = async ({position = 'fixed', items = []} = {}) => {
    args = {position, items}
    util.createPlayerLayoutByMode(miniMode);
    const audio = util.getAudio();
    const musics = args.items;
    let index = 0;
    audio.src = musics[0].url
    audio.addEventListener('ended', () => {
        index++;
        audio.src = musics[index].url
        audio.play()
    })
    util.pauseOrPlayAudio(audio, miniMode);
    document.querySelector(".audio-player-mini-voice").oninput = function () {
        let value = (this.value - this.min) / (this.max - this.min) * 100
        this.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + value + '%, #fff ' + value + '%, white 100%)'
    };
    util.updateProgress(audio, miniMode);
};
const AudioPlayer = function () {
    this.createAPlayer = createAudioPlayer
}
window.$AudidoPlayer = AudioPlayer
module.exports = AudioPlayer
