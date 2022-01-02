import{j as w,D as I,G as R,a as E,r as f,h as T,S as b,R as O,b as _}from"./vendor.6883c9da.js";const k=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const e of i)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const e={};return i.integrity&&(e.integrity=i.integrity),i.referrerpolicy&&(e.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?e.credentials="include":i.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(i){if(i.ep)return;i.ep=!0;const e=s(i);fetch(i.href,e)}};k();var h={LITTERBOX_API_URL:"https://jiftoo.dev/gif/litterbox",CORS_PROXY_URL:"https://jiftoo.dev/gif/cors",DEFAULT_WORKERS:2,GIF_QUALITY:14,CAPTION_FONT_SIZE_MIN:.25,CAPTION_FONT_SIZE_MAX:3};const o=w.exports.jsx,g=w.exports.jsxs,v=w.exports.Fragment;function x(){return o("a",{id:"github-link",target:"_blank",title:"Github repository",href:"https://github.com/jiftoo/gif/",children:o(I,{size:38})})}function A(){return function(t){return!!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))}(navigator.userAgent||navigator.vendor||window.opera)}async function D(t){const l=await(await(await fetch(t)).blob()).arrayBuffer(),i=new Uint8Array(l),e=new E(i),r=e.frameInfo(0);return new Array(e.numFrames()).fill(0).map((u,d)=>{const n=new ImageData(r.width,r.height);e.decodeAndBlitFrameRGBA(d,n.data);let c=document.createElement("canvas");return c.width=r.width,c.height=r.height,c.getContext("2d").putImageData(n,0,0),[c,e.frameInfo(d).delay]})}async function F(t,a){const s=new Image,l=new Image,i=Promise.all([new Promise(m=>{s.onload=m}),new Promise(m=>{l.onload=m})]);s.src=t,l.src=a,await i;const e=l.width/l.height,r=s.width*(1/e)+1,u=document.createElement("canvas");u.width=s.width,u.height=s.height+r;const d=u.getContext("2d");if(!d)throw Error("No 2d context");let n=null;t.startsWith("data:image/gif")?n=await N(l,s,u,r,d):n=await C(l,s,u,r,d);const c=await fetch(h.LITTERBOX_API_URL,{method:"POST",mode:"cors",body:n});return c.ok?await c.text():null}async function N(t,a,s,l,i){const e=await D(a.src);let r=h.DEFAULT_WORKERS;A()||(r=Math.max(window.navigator.hardwareConcurrency-1,r)),console.log("Using",r,"workers");const d=new R({workers:r,quality:h.GIF_QUALITY,width:s.width,height:s.height});return e.forEach(([n,c],m)=>{console.log("Painting gif frames:",m,"/",e.length),i.drawImage(t,0,0,s.width,Math.round(l)),i.drawImage(n,0,l-1),d.addFrame(i,{copy:!0,delay:c*10})}),new Promise(n=>{d.on("progress",c=>console.log("Building gif:",(c*100).toFixed(1))),d.on("finished",c=>{n(c)}),d.render()})}async function C(t,a,s,l,i){return i.drawImage(t,0,0,s.width,l),i.drawImage(a,0,l-1),await new Promise(r=>s.toBlob(u=>r(u)))}function P(t){let a;try{a=new URL(t)}catch{return!1}return a.protocol==="http:"||a.protocol==="https:"}var p;(function(t){t[t.NONE=0]="NONE",t.INVALID="This doesn't look like a valid url",t.NOT_AN_IMAGE="This url doesn't link to an valid image",t.FORBIDDEN="Forbidden (403)",t.TIMEOUT="Request timeout",t.ERROR="Unknown error while fetching url"})(p||(p={}));function L({onImageSelected:t}){const[a,s]=f.exports.useState(0),l=({target:e})=>{if(!e.files)return;const r=new FileReader;r.addEventListener("load",()=>t(r.result)),r.readAsDataURL(e.files[0])},i=async e=>{var u;let r=0;if(P(e)){const d=await fetch(`${h.CORS_PROXY_URL}?url=${e}`,{method:"GET"}).catch(n=>(console.log(`${h.CORS_PROXY_URL}?url=${e}`),n.name==="AbortError"?r=p.TIMEOUT:r=p.ERROR,null));if(console.log(d),d!==null)if(d.status===b.FORBIDDEN)r=p.FORBIDDEN;else if(d.status===b.BAD_REQUEST)r=p.INVALID;else if(d.status===b.NOT_ACCEPTABLE||!((u=d.headers.get("Content-Type"))==null?void 0:u.startsWith("image")))r=p.NOT_AN_IMAGE;else{const n=await d.blob(),c=new FileReader;c.addEventListener("load",()=>t(c.result)),c.readAsDataURL(n)}}else r=p.INVALID;s(r)};return g("label",{htmlFor:"file-select-onclick",id:"drop-area",onDragOver:e=>{e.preventDefault()},onDrop:e=>{e.preventDefault(),e.dataTransfer.files.length&&e.dataTransfer.files[0].type.startsWith("image/")&&l({target:{files:e.dataTransfer.files}})},children:[g("div",{id:"drop-area-caption",children:[o("div",{children:"Drop your gif here"}),o("div",{children:"or click to open file"}),o("input",{onPaste:e=>{const r=e.clipboardData||window.clipboardData;i(r.getData("text"))},onKeyDown:e=>{e.key==="Enter"&&i(e.currentTarget.value)},id:"gif-url",placeholder:"or paste the url (supports tenor)",type:"url"}),a!==0&&o("div",{id:"url-error",children:a})]}),o("input",{id:"file-select-onclick",type:"file",accept:"image/jpeg, image/png, image/gif",onClick:e=>console.log(e.target),onChange:e=>{console.log(e.target),l(e)},style:{display:"none"}})]})}var y;(function(t){t[t.EMPTY=0]="EMPTY",t[t.PROCESSING=1]="PROCESSING",t[t.OK=2]="OK",t[t.ERR=3]="ERR"})(y||(y={}));function z({image:t,imageLink:a,imageLinkState:s,onTextChange:l,resetImage:i,saveImage:e}){const[r,u]=[h.CAPTION_FONT_SIZE_MIN,h.CAPTION_FONT_SIZE_MAX].map(m=>m.toFixed(2)),d=((+r+ +u)/2).toFixed(2),[n,c]=f.exports.useState(parseFloat(d));return g("div",{id:"edit-area",children:[o("div",{contentEditable:!0,suppressContentEditableWarning:!0,style:{"--caption-font-size":`calc(var(--caption-font-size-initial) * ${n})`},id:"caption",onInput:l,children:"Caption"}),o("img",{id:"image",src:t}),g("div",{id:"controls",children:[o("div",{style:{textAlign:"center"},children:"Font size multiplier"}),o("input",{type:"range",min:r,max:u,step:.01,value:n,onChange:m=>c(+m.currentTarget.value)}),g("div",{id:"range-labels",children:[o("div",{children:r}),o("div",{children:d}),o("div",{children:u})]}),g("div",{id:"control-buttons",children:[o("button",{id:"reset-button",onClick:i,children:"Reset"}),o("button",{id:"save-button",onClick:e,children:"Generate"})]}),s===1&&o("div",{id:"result-link",children:"Generating image..."}),s!==0&&s!==1&&g(v,{children:[o("div",{id:"result-link",children:a?g(v,{children:["Link to result: ",o("a",{target:"_blank",referrerPolicy:"no-referrer",href:a,children:a})]}):"Error while creating image"}),a&&g("div",{id:"ezgif-buttons",children:[o("a",{target:"_blank",rel:"noopener",href:`https://ezgif.com/optimize?url=${a}`,children:"Optimize"}),o("a",{target:"_blank",rel:"noopener",href:`https://ezgif.com/resize?url=${a}`,children:"Resize"})]})]})]})]})}function S(){const[t,a]=f.exports.useState(null),[s,l]=f.exports.useState(null),[i,e]=f.exports.useState(0),r=t!==null;return g("div",{id:"frame",className:r?"editor":"selector",onDragOver:n=>{n.preventDefault(),n.dataTransfer.types.includes("Files")&&n.currentTarget.classList.add("drag")},onDragLeave:n=>{n.currentTarget.classList.remove("drag")},onDrop:n=>{n.currentTarget.classList.remove("drag")},children:[r?o(z,{imageLinkState:i,imageLink:s,image:t,onTextChange:n=>{const c=n.target;console.log(c.innerText);const m=document.getElementById("image");console.log(m.clientWidth,m.clientHeight)},resetImage:()=>(a(null),e(0)),saveImage:()=>{e(1),T(document.getElementById("caption"),{logging:!1,scale:3,windowWidth:1e3,windowHeight:565}).then(async n=>{const c=await F(t,n.toDataURL());e(c?2:3),l(c)})}}):o(L,{onImageSelected:a}),o(x,{})]})}function B(){return o("div",{id:"app",children:o(S,{})})}O.render(o(_.StrictMode,{children:o(B,{})}),document.body);
