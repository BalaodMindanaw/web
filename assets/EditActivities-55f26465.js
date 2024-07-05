import{a as N,u as S,r as i,j as e,L as C,B as k,b as p}from"./index-2c3f717a.js";import{F as L}from"./Footer-0ac9a995.js";import{S as x,T as E}from"./TiptapEdit-f39745c8.js";import{S as c}from"./sweetalert2.all-b68cd363.js";import{i as B}from"./browser-image-compression-a3ab6596.js";import{L as D}from"./index-26b099eb.js";import{L as T}from"./loader-2-d28011c7.js";import"./BalaodWhiteOutFull@3x-2d14f875.js";import"./styles-50c6ccf0.js";const A=()=>{const d=N(),g=S(),[m,r]=i.useState(!1),w=t=>{const s=new Date(t),n=s.getFullYear(),l=(s.getMonth()+1).toString().padStart(2,"0"),y=s.getDate().toString().padStart(2,"0");return`${n}-${l}-${y}`},[a,o]=i.useState(JSON.parse(localStorage.getItem("saveEdit")||""));async function v(){await p.get(`posting/${d.uid}`).then(t=>{o(t.data.activity)})}const[u,f]=i.useState(null),b=async t=>{const s=t.target.files[0];if(s){const n=URL.createObjectURL(s),l=await j(s);f(n),o({...a,photo:l})}};i.useEffect(()=>{v(),f(a.imageURL)},[]);const j=async t=>await B(t,{maxSizeMB:1,maxWidthOrHeight:2048,useWebWorker:!0,fileType:"image/webp"});i.useEffect(()=>{localStorage.setItem("saveEdit",JSON.stringify(a)),o({...a,date:w(a.date)}),console.log(a)},[a]);function h(t){return!t.title||!t.content}return e.jsxs("div",{className:" min-h-0 w-full max-w-full  flex flex-col justify-center",children:[e.jsxs("div",{className:" relative w-full flex  justify-center items-center h-[60vh] bg-black overflow-hidden",children:[e.jsx("div",{className:" cursor-pointer z-20 absolute grid w-full max-w-xs items-center gap-1.5",children:e.jsx("input",{id:"picture",className:" cursor-pointer flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium",required:!0,placeholder:"Photo",type:"file",onChange:b})}),u&&e.jsx("img",{src:u,className:" relative w-full mt-5 text-xl mb-5 object-cover h-[60vh]",alt:""})]}),e.jsxs("div",{className:" mt-5 px-[10vw] md:px-5",children:[e.jsxs(C,{to:"/editable/kudlit",className:" w-[90px] font-fmedium flex items-center justify-between px-2 py-2 bg-background text-black font-bold border border-gray-300 hover:bg-[#e4e4e4]",children:[e.jsx("svg",{className:"w-4 h-4 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})}),"Kudlit"]}),e.jsxs("div",{className:" flex justify-between border border-x-0 py-5 text-base font-fmedium mt-4 ",children:[e.jsxs("div",{className:" flex items-center gap-4",children:[e.jsx("input",{value:a.date,onChange:t=>{o({...a,date:t.target.value})},className:" text-right border border-border",type:"date"}),e.jsx(x,{checked:a.showDate,onCheckedChange:t=>{o({...a,showDate:t})}})]}),e.jsxs("div",{className:" flex items-center gap-4",children:[e.jsx("input",{value:a.location,onChange:t=>{o({...a,location:t.target.value})},placeholder:" Cagayan de Oro, 9000",type:"text",className:" w-[400px] text-right border border-border"}),e.jsx(D,{className:" h-4 w-4"}),e.jsx(x,{checked:a.showLocation,onCheckedChange:t=>{o({...a,showLocation:t})}})]})]}),e.jsxs("div",{className:" flex flex-col  mt-5 font-fmedium text-lg gap-5 mb-36",children:[e.jsx("div",{children:e.jsx("textarea",{value:a.title,onChange:t=>{o({...a,title:t.target.value})},required:!0,className:" w-full outline-none text-primary text-3xl font-fbold",placeholder:"Title e.g Community Engagement: Local Citizens Participate in Process "})}),e.jsx(E,{data:a.content,setData:o}),e.jsxs(k,{className:m?" font-fbold pointer-events-none flex gap-3 ":" font-fbold pointer-events-auto",onClick:async t=>{if(t.preventDefault(),console.log(h(a)),h(a))c.fire({title:"Empty Field (Photo,title,content)!",text:"Some Fields are Empty please fill it up",icon:"error",showConfirmButton:!1,timer:2e3});else{r(!0);try{await p.put(`posting/activity/${d.uid}`,a,{headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`,"Content-Type":"multipart/form-data"}}).then(s=>{r(!1),c.fire({title:"Updated!",text:"The Activity has been Updated",icon:"success",showConfirmButton:!1,timer:2e3}),o({title:"",content:"",highlight:!1,photo:null,location:"",date:null,showDate:!0,showLocation:!0}),localStorage.setItem("saveEdit",JSON.stringify({title:"",content:"",highlight:!1,photo:{},location:"",date:null,showDate:!0,showLocation:!0})),g("/editable/kudlit")})}catch{c.fire({title:"Error",text:"Something is wrong, please contact the creator",icon:"error",showConfirmButton:!1,timer:2e3})}setTimeout(()=>{r(!1)},5e3)}},children:[" ",e.jsx(T,{className:m?" animate-spin ":" hidden"})," Update Blog"]})]})]}),e.jsx(L,{})]})};export{A as default};
