import{r as o,j as e,a as f,L as u,b as p}from"./index-2c3f717a.js";import{F as h}from"./Footer-0ac9a995.js";import{E as j,S as g,T as w,C as N,a as S,u as y,L as b}from"./index-26b099eb.js";import{S as t}from"./skeleton-b8246398.js";import"./BalaodWhiteOutFull@3x-2d14f875.js";const v=j.create({name:"fontSize",addOptions(){return{types:["textStyle"]}},addGlobalAttributes(){return[{types:this.options.types,attributes:{fontSize:{default:null,parseHTML:s=>({fontSize:s.style.fontSize.replace("px","")}),renderHTML:s=>s.fontSize?{style:`font-size: ${s.fontSize}px`}:{}}}}]},addCommands(){return{setFontSize:s=>({chain:n})=>n().setMark("textStyle",{fontSize:s}).run()}}});const z=[g,w,N,S.configure({types:["heading","paragraph"]}),v],L=({con:s})=>{const[n,r]=o.useState(16),[a,i]=o.useState(s);if(o.useEffect(()=>{i(`${s}`)},[s]),!y({extensions:z,content:a,onUpdate({editor:l}){console.log(l.getHTML()),i(l.getHTML());const m=l.getAttributes("textStyle");r(m.fontSize||16)}}))return null;const c=l=>({__html:l.replace(/<p><\/p>/g,"<p><br></p>").replace(/\n/g,"<br>").replace(/<p>/g,"<p>")});return e.jsx("div",{className:"",children:e.jsx("div",{className:"tiptap outline-none ",dangerouslySetInnerHTML:c(a)})})},C=()=>{const s=f(),[n,r]=o.useState(!1),[a,i]=o.useState({});async function x(){r(!0),await p.get(`posting/${s.uid}`).then(l=>{i(l.data.activity),console.log(l.data.activity.content),setTimeout(()=>{r(!1)},1e3)}),setTimeout(()=>{r(!1)},1e4)}o.useEffect(()=>{x()},[]);function c(l){const m=new Date(l),d={year:"numeric",month:"long",day:"2-digit"};return new Intl.DateTimeFormat("en-US",d).format(m)}return e.jsxs("div",{className:" min-h-0 w-full max-w-full  flex flex-col justify-center",children:[n?e.jsx(t,{className:" h-[50vh] w-full"}):e.jsx("img",{src:a.imageURL,className:" mt-5 text-xl mb-5 object-cover h-[50vh]",alt:""}),e.jsxs("div",{className:" mt-5 px-[10vw] md:px-5",children:[e.jsxs(u,{to:"/kudlit",className:" w-[90px] font-fmedium flex items-center justify-between px-2 py-2 bg-background text-black font-bold border border-gray-300 hover:bg-[#e4e4e4]",children:[e.jsx("svg",{className:"w-4 h-4 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})}),"Kudlit"]}),e.jsxs("div",{className:" flex justify-between border border-x-0 py-5 text-base font-fmedium mt-4 ",children:[n?e.jsx(t,{className:" h-6 w-[200px]"}):e.jsx("p",{children:a.showDate?c(a.date):""}),n?e.jsx(t,{className:" h-6 w-[200px]"}):e.jsx(e.Fragment,{children:a.showLocation?e.jsxs("p",{className:" flex gap-3 items-center",children:[" ",a.location," ",e.jsx(b,{className:" h-4 w-4"})]}):e.jsx("p",{})})]}),e.jsxs("div",{className:" flex flex-col  mt-5 font-fmedium text-lg gap-5 min-h-[30vh] mb-36",children:[e.jsxs("div",{children:[n?e.jsx(t,{className:" h-9 w-full"}):e.jsx("h1",{className:" text-primary text-3xl font-fbold",children:a.title}),e.jsx("p",{className:" font-fmedium"})]}),e.jsxs("div",{className:n?" flex flex-col gap-5":" hidden",children:[e.jsx(t,{className:" h-2 w-full"}),e.jsx(t,{className:" h-2 w-full"}),e.jsx(t,{className:" h-2 w-full"}),e.jsx(t,{className:" h-32 w-full"}),e.jsx(t,{className:"  h-12 w-full"}),e.jsx(t,{className:"  h-12 w-full"}),e.jsx(t,{className:" h-2 w-full"}),e.jsx(t,{className:" h-2 w-full"}),e.jsx(t,{className:" h-2 w-full"})]}),e.jsx(L,{className:n?"hidden":"flex",con:a.content})]})]}),e.jsx(h,{})]})};export{C as default};
