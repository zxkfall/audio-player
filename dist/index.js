(()=>{var e={10:(e,t,n)=>{n(895);let o="audio-player-mini";const r=n(891),a=n(593),s=n(48);let i={};const l=async({position:e="fixed",items:t=[]}={})=>{r.isSupportedCssVar(),i={position:e,items:t},r.createPlayerLayoutByMode(o);const n=r.createAudio(),l=i.items;s.changeAudio(n,l,t,o),r.pauseOrPlayAudio(n,o),r.changePlayIcon(n,o),a(n,o,.2),r.updateProgress(n,o)},c=function(){this.createAPlayer=l};window.$AudidoPlayer=c,e.exports=c},895:(e,t,n)=>{"use strict";n.r(t)},104:e=>{e.exports=e=>`\n    <section class="${e}">\n        <section class="${e}-mask">\n            <section class="${e}-title">\n                <button class="${e}-sound">\n                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-down" viewBox="0 0 16 16">\n                        <path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12V4zM6.312 6.39 8 5.04v5.92L6.312 9.61A.5.5 0 0 0 6 9.5H4v-3h2a.5.5 0 0 0 .312-.11zM12.025 8a4.486 4.486 0 0 1-1.318 3.182L10 10.475A3.489 3.489 0 0 0 11.025 8 3.49 3.49 0 0 0 10 5.525l.707-.707A4.486 4.486 0 0 1 12.025 8z"/>\n                    </svg>\n                </button>\n                <input class="${e}-voice" type="range" min="0" max="100">\n            </section>\n            <section class="${e}-content">\n                <button class="${e}-pre">\n                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">\n                        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>\n                    </svg>\n                </button>\n                <button class="${e}-play">\n                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">\n                        <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>\n                    </svg>\n                </button>\n                <button class="${e}-next">\n                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">\n                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>\n                    </svg>\n                </button>\n            </section>\n            <section class="${e}-bottom">\n                <div class="${e}-progress"></div>\n            </section>\n        </section>\n    </section>\n    `},17:e=>{e.exports={getUnMuted:()=>'\n           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-down" viewBox="0 0 16 16"> \n                <path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12V4zM6.312 6.39 8 5.04v5.92L6.312 9.61A.5.5 0 0 0 6 9.5H4v-3h2a.5.5 0 0 0 .312-.11zM12.025 8a4.486 4.486 0 0 1-1.318 3.182L10 10.475A3.489 3.489 0 0 0 11.025 8 3.49 3.49 0 0 0 10 5.525l.707-.707A4.486 4.486 0 0 1 12.025 8z"/>              \n           </svg>',getMute:()=>'\n            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-mute" viewBox="0 0 16 16">\n              <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zM6 5.04 4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96V5.04zm7.854.606a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/>\n            </svg>\n',getPlay:()=>'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause" viewBox="0 0 16 16">\n  <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>\n</svg>',getPause:()=>'               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">\n                    <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>\n                </svg>'}},48:(e,t,n)=>{const{getElSize:o,getContentSize:r}=n(891);let a,s,i=0;const l=async e=>{if(e.cover)return e.cover;const t=e.url;let n=0;if(t.endsWith(".flac")){const e=await fetch(t,{method:"GET"}),a=await e.arrayBuffer(),s=new Uint8Array(a);if(n+=4,"fLaC"===String.fromCharCode.apply(null,s.slice(0,4))){let e,t=0;do{t=127&s[n],e=(255&s[0])>>7,n++;const a=r(s,n);if(n+=3,6===t){n+=4;let e=o(s,n);n+=4;const t=String.fromCharCode.apply(null,s.slice(n,n+e));n+=e;let r=o(s,n);n+=4,n+=r,n+=16;let a=o(s,n);n+=4;let i=s.slice(n,n+a);return`data:${t};base64,${window.btoa(String.fromCharCode(...i))}`}n+=a}while(1!==e)}}},c=async(e,t)=>{e.src=t[i].url;const n=await l(t[i]);e.play(),u(n)},u=e=>{e?document.documentElement.style.setProperty("--background-image",`url('${e}')`):document.documentElement.style.setProperty("--background-image","url('https://avatars.githubusercontent.com/u/42455616?v=4')")},d=(e,t,n,o)=>{document.querySelector(n).addEventListener("click",(()=>{let r=i;const l=((e,t)=>{let n=0;return e===s&&(n=-1),e===a&&(n=t.length),n})(n,t);r=((e,t)=>(e===s&&t--,e===a&&t++,t))(n,r),r!==l?(i=r,c(e,t)):alert(o)}))};e.exports={changeAudio:(e,t,n,o)=>{a=`.${o}-next`,s=`.${o}-pre`,(async(e,t)=>{e.src=t[0].url;let n=t[i].cover;n&&0!==n.length||(n=await l(t[i])),u(n),e.addEventListener("ended",(()=>{console.log(i),i<t.length-1&&(i++,c(e,t))}))})(e,t),d(e,t,a,"already last"),d(e,t,s,"already first")}}},891:(e,t,n)=>{const o=n(104),{getPlay:r,getPause:a}=n(17);e.exports={updateProgress:(e,t)=>{let n=document.querySelector(`.${t}-bottom`);const o=document.querySelector(`.${t}-progress`);e.addEventListener("timeupdate",(function(){let t=e.currentTime/e.duration;const r=n.clientWidth*t;o.style.width=r+"px"}))},createAudio:()=>{const e=document.createElement("audio");return document.body.append(e),e},createPlayerLayoutByMode:e=>{let t=document.querySelector("body"),n=document.createElement("section");n.innerHTML=o(e),t.appendChild(n)},pauseOrPlayAudio:(e,t)=>{document.querySelector(`.${t}-play`).addEventListener("click",(()=>{e.currentTime>0&&!e.paused&&!e.ended&&e.readyState>e.HAVE_CURRENT_DATA?e.pause():e.play()}))},changePlayIcon:(e,t)=>{const n=document.querySelector(`.${t}-play`);e.addEventListener("play",(()=>{n.innerHTML=r()})),e.addEventListener("pause",(()=>{n.innerHTML=a()}))},isSupportedCssVar:()=>{window.CSS&&window.CSS.supports&&window.CSS.supports("--background-image","./images/flower.jpg")?console.log("support CSS var"):console.log("not support CSS var")},getElSize:(e,t)=>(e[t]<<24)+(e[t+1]<<16)+(e[t+2]<<8)+e[t+3],getContentSize:(e,t)=>(e[t]<<16)+(e[t+1]<<8)+e[t+2]}},593:(e,t,n)=>{const o=n(17);let r,a;const s=e=>{r.style.background="linear-gradient(to right, #82CFD0 0%, #82CFD0 "+e+"%, #fff "+e+"%, white 100%)"};e.exports=(e,t,n=.2)=>{((e,t,n)=>{r=document.querySelector(`.${e}-voice`),a=document.querySelector(`.${e}-sound`),r.value=100*t,n.volume=t,s(r.value)})(t,n,e),r.addEventListener("input",(()=>{!function(e){e.muted=!1;const t=(r.value-r.min)/(r.max-r.min)*100;e.volume=t/100,s(t),a.innerHTML=o.getUnMuted()}(e)})),a.addEventListener("click",(()=>{!function(e){if(e.muted=!e.muted,e.muted)return r.value=0,s(r.value),void(a.innerHTML=o.getMute());r.value=100*e.volume,r.dispatchEvent(new Event("input")),a.innerHTML=o.getUnMuted()}(e)}))}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(10)})();