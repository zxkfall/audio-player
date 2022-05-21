const parseCover = require('./cover')
let index = 0;
let myAudio;
let items;
let modePre;

const nextButton = () => document.querySelector(`.${modePre}-next`)
const preButton = () => document.querySelector(`.${modePre}-pre`)

const playByIndex = () => {
    const music = items[index];
    myAudio.src = music.url
    const cover = music.cover
    checkCover(cover, music);
    myAudio.play()
};

const setMusicCover = (cover) => {
    if (cover) {
        document.documentElement.style.setProperty('--background-image', `url('${cover}')`)
    } else {
        document.documentElement.style.setProperty('--background-image', `url('https://avatars.githubusercontent.com/u/42455616?v=4')`)
    }
};

const checkCover = (cover, music) => {
    if (cover && cover.length > 0) {
        setMusicCover(cover);
    } else {
        parseCover(music).then((res) => {
            setMusicCover(res);
        })
    }
};

const initPlay = () => {
    myAudio.src = items[index].url
    let cover = items[index].cover;
    checkCover(cover, items[index]);
}

const autoNext = () => {
    myAudio.addEventListener('ended', () => {
        if (index < items.length - 1) {
            index++;
            playByIndex();
        }
    })
}

const next = () => {
    nextButton().addEventListener('click', () => {
        if (index + 1 >= items.length) {
            alert('already last')
        } else {
            index++;
            playByIndex();
        }
    })
}

const previous = () => {
    preButton().addEventListener('click', () => {
        if (index - 1 < 0) {
            alert('already first')
        } else {
            index--;
            playByIndex();
        }
    })
}

const changeAudio = (audio, musics, mode) => {
    items = musics;
    myAudio = audio;
    modePre = mode;
    initPlay();
    autoNext();
    previous();
    next();
};


module.exports = {changeAudio}
