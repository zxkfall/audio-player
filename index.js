require('./index.css')
let miniMode = 'audio-player-mini'
const util = require('./src/util')
const volumeControl = require('./src/volumeControl')
const switchAudio = require('./src/switchAudio')
let args = {}




const createAudioPlayer = async ({position = 'fixed', items = []} = {}) => {
    args = {position, items}
    util.createPlayerLayoutByMode(miniMode);
    const audio = util.createAudio();
    const musics = args.items;
    switchAudio.changeAudio(audio, musics, items,miniMode);
    util.pauseOrPlayAudio(audio, miniMode);
    volumeControl(audio, miniMode, 0.2);
    util.updateProgress(audio, miniMode);
};
const AudioPlayer = function () {
    this.createAPlayer = createAudioPlayer
}
window.$AudidoPlayer = AudioPlayer
module.exports = AudioPlayer
