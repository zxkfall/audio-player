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
const items = [{url: 'localMusic.flac'},{url:'https://me.mp3'}];
audioPlayer.createAPlayer({items: items});
```

Or

```bash
const audioPlayer = new window.$AudidoPlayer()
const items = [{url: 'localMusic.flac'},{url:'https://me.mp3'}];
audioPlayer.createAPlayer({items: items});
```



For CDN,you can use it like this

```bash
const audioPlayer = new window.$AudidoPlayer()
const items = [{url: 'localMusic.flac'},{url:'https://me.mp3'}];
audioPlayer.createAPlayer({items: items});
```



## Future feats

- [ ] support next or pre audio
- [ ] more styles
- [ ] ...



## Contract

If you have any questions,you can add your question to My Github issues.

[issues](https://github.com/zxkfall/audio-player)

I will deal with it when I am free.
