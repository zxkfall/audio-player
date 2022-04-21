# @zxkfall/audio-player

This is a HTML Audio Player

## Import

You can use it by CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@zxkfall/audio-player@1.0.0/dist/style.css">

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@zxkfall/audio-player@1.0.0/dist/index.js"></script>
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



