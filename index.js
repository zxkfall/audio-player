require('./index.css')
let miniMode = 'audio-player-mini'
const {init} = require('./src/init')
const {isSupportedCssVar} = require("./src/util");


const createAudioPlayer = async ({position = 'fixed', items = []} = {}) => {
    isSupportedCssVar()
    init(miniMode,items);
};
const AudioPlayer = function () {
    this.createAPlayer = createAudioPlayer
}
window.$AudidoPlayer = AudioPlayer
module.exports = AudioPlayer
