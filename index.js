require('./index.css')
let miniMode = 'audio-player-mini'
const util = require('./src/util')
const volumeControl = require('./src/volumeControl')
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
    volumeControl(audio, miniMode, 0.2);
    util.updateProgress(audio, miniMode);
};
const AudioPlayer = function () {
    this.createAPlayer = createAudioPlayer
}
window.$AudidoPlayer = AudioPlayer
module.exports = AudioPlayer
