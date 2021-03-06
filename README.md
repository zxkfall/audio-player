# @zxkfall/audio-player

This is a HTML Audio Player

## Import

You can use it by CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@zxkfall/audio-player/dist/style.css">

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@zxkfall/audio-player/dist/index.js"></script>
```

Or you can install it by npm

```bash
$ npm install @zxkfall/audio-player
```

then use it

```js
import AudioPlayer from '@zxkfall/audio-player'
import '@zxkfall/audio-player/index.css'
```

## Usage

For NPM，you can use it like this

```js
const audioPlayer = new AudidoPlayer()
const items = [{url: 'localMusic.flac',cover:'image.jpg'},{url:'https://me.mp3',cover:'https://image.png'}];
audioPlayer.createAPlayer({items: items});
```

Or

```bash
const audioPlayer = new window.$AudidoPlayer()
const items = [{url: 'localMusic.flac',cover:'image.jpg'},{url:'https://me.mp3',cover:'https://image.png'}];
audioPlayer.createAPlayer({items: items});
```

For CDN,you can use it like this

```bash
const audioPlayer = new window.$AudidoPlayer()
const items = [{url: 'localMusic.flac',cover:'image.jpg'},{url:'https://me.mp3',cover:'https://image.png'}];
audioPlayer.createAPlayer({items: items});
```

If your are use react,you need to import image or music like this

```js
import Me from './me.flac';
```

## Future feats

- [x] support next or pre audio
- [x] show cover
- [x] extract picture from audio if it has cover
  - [x] will get cover from FLAC music if not cover attribute，if music has not inner cover and item not cover attribute，it will show default image
  - [x] get cover from mp3 music
- [ ] more styles
- [ ] ...



## Contract

If you have any questions,you can add your question to My Github issues.

[issues](https://github.com/zxkfall/audio-player)

I will deal with it when I am free.
