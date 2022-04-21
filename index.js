const createAudioPlayer = () => {
    console.log('CreateAudioPlayer')
    let audio = document.createElement('audio');
    let body = document.querySelector('body');
    body.appendChild(audio)
    let section = document.createElement('section');
    section.textContent = 'sdsds'
    section.innerHTML = `
    <h1> 测试</h1>
    `
    console.log('sss')
    console.log('sss')
    console.log('sss')
    body.appendChild(section)

};

const AudioPlayer = function () {
    console.log('new')
    this.createAPlayer = createAudioPlayer
}

window.$AudidoPlayer = AudioPlayer

module.exports = AudioPlayer
