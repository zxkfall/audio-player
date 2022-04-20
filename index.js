const createAudioPlayer = () => {
    console.log('CreateAudioPlayer')
    let audio = document.createElement('audio');
    let body = document.querySelector('body');
    body.appendChild(audio)
    let section = document.createElement('section');
    section.textContent = 'sdsds'
    body.appendChild(section)

};

const AudioPlayer = function () {
    console.log('new')
    this.createAPlayer = createAudioPlayer
}

module.exports = AudioPlayer
