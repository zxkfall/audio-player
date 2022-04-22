(()=>{var t={10:(t,e,n)=>{n(895);let o="audio-player-mini";const i=n(891);let s={};const r=async({position:t="fixed",items:e=[]}={})=>{s={position:t,items:e},i.createPlayerLayoutByMode(o);const n=i.getAudio(),r=s.items;let l=0;n.src=r[0].url,n.addEventListener("ended",(()=>{l++,n.src=r[l].url,n.play()})),i.pauseOrPlayAudio(n,o),i.initVoiceBar(n,o,.2),i.updateProgress(n,o)},l=function(){this.createAPlayer=r};window.$AudidoPlayer=l,t.exports=l},895:(t,e,n)=>{"use strict";n.r(e)},104:t=>{t.exports=t=>`\n    <section class="${t}">\n        <section class="${t}-title">\n            <button class="${t}-sound">\n                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-down" viewBox="0 0 16 16">\n                    <path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12V4zM6.312 6.39 8 5.04v5.92L6.312 9.61A.5.5 0 0 0 6 9.5H4v-3h2a.5.5 0 0 0 .312-.11zM12.025 8a4.486 4.486 0 0 1-1.318 3.182L10 10.475A3.489 3.489 0 0 0 11.025 8 3.49 3.49 0 0 0 10 5.525l.707-.707A4.486 4.486 0 0 1 12.025 8z"/>\n                </svg>\n            </button>\n            <input class="${t}-voice" type="range" min="0" max="100">\n        </section>\n        <section class="${t}-content">\n            <button class="${t}-pre">\n                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">\n                    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>\n                </svg>\n            </button>\n            <button class="${t}-play">\n                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">\n                    <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>\n                </svg>\n            </button>\n            <button class="${t}-next">\n                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">\n                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>\n                </svg>\n            </button>\n        </section>\n        <section class="${t}-bottom">\n            <div class="${t}-progress"></div>\n        </section>\n    </section>\n    `},891:(t,e,n)=>{const o=n(104),i=t=>"linear-gradient(to right, #82CFD0 0%, #82CFD0 "+t+"%, #fff "+t+"%, white 100%)";t.exports={updateProgress:(t,e)=>{let n=document.querySelector(`.${e}-bottom`);const o=document.querySelector(`.${e}-progress`);t.addEventListener("timeupdate",(function(){let e=t.currentTime/t.duration;const i=n.clientWidth*e;o.style.width=i+"px"}))},getAudio:()=>{const t=document.createElement("audio");return document.body.append(t),t},createPlayerLayoutByMode:t=>{let e=document.querySelector("body"),n=document.createElement("section");n.innerHTML=o(t),e.appendChild(n)},pauseOrPlayAudio:(t,e)=>{document.querySelector(`.${e}-play`).addEventListener("click",(()=>{t.currentTime>0&&!t.paused&&!t.ended&&t.readyState>t.HAVE_CURRENT_DATA?t.pause():t.play()}))},initVoiceBar:function(t,e,n=.2){const o=document.querySelector(`.${e}-voice`),s=100*n;o.value=s,t.volume=n,o.style.background=i(s),o.oninput=function(){let e=(this.value-this.min)/(this.max-this.min)*100;t.volume=e/100,this.style.background=i(e)}}}}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,n),s.exports}n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n(10)})();