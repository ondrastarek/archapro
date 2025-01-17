import{_,o as i,c as d,a as r,F as v,r as p,b as I,p as S,d as f,u as x,e as w,f as u,g as k,h as b,t as j,i as T,n as E}from"./index-Bmu17APN.js";const X="/vectors/left.svg",C="/vectors/right.svg",O="/vectors/cross.svg",P={name:"ImageSlider",props:{images:Array,startIndex:Number,isOpen:Boolean},data(){return{currentIndex:this.startIndex,touchStartX:0,touchEndX:0}},computed:{currentImage(){return this.images[this.currentIndex]}},mounted(){window.addEventListener("keydown",this.handleKeydown)},beforeUnmount(){window.removeEventListener("keydown",this.handleKeydown)},methods:{prevImage(){this.currentIndex>0?this.currentIndex--:this.currentIndex=this.images.length-1},nextImage(){this.currentIndex<this.images.length-1?this.currentIndex++:this.currentIndex=0},handleKeydown(e){e.key==="ArrowLeft"?this.prevImage():e.key==="ArrowRight"?this.nextImage():e.key==="Escape"&&this.closeSlider()},handleTouchStart(e){this.touchStartX=e.touches[0].clientX},handleTouchMove(e){this.touchEndX=e.touches[0].clientX},handleTouchEnd(){this.touchEndX<this.touchStartX-50?this.nextImage():this.touchEndX>this.touchStartX+50&&this.prevImage(),this.touchStartX=0,this.touchEndX=0},closeSlider(){this.$emit("close")}}},m=e=>(S("data-v-bf0051bd"),e=e(),f(),e),B={key:0,class:"slider-container"},L=["src"],D={class:"slider-controls"},M=m(()=>r("img",{src:X,alt:"Previous"},null,-1)),N=[M],A=m(()=>r("img",{src:C,alt:"Next"},null,-1)),K=[A],V=m(()=>r("img",{src:O,alt:"Close"},null,-1)),F=[V];function R(e,t,h,n,a,o){return h.isOpen?(i(),d("div",B,[r("div",{class:"slider-blurred-background",onClick:t[0]||(t[0]=(...s)=>o.closeSlider&&o.closeSlider(...s))}),r("div",{class:"slider-content",onTouchstart:t[1]||(t[1]=(...s)=>o.handleTouchStart&&o.handleTouchStart(...s)),onTouchmove:t[2]||(t[2]=(...s)=>o.handleTouchMove&&o.handleTouchMove(...s)),onTouchend:t[3]||(t[3]=(...s)=>o.handleTouchEnd&&o.handleTouchEnd(...s))},[(i(!0),d(v,null,p([o.currentImage],(s,l)=>(i(),d("img",{key:l+a.currentIndex,src:s,class:"slider-image",alt:""},null,8,L))),128))],32),r("div",D,[r("button",{class:"vector arrow left-arrow",onClick:t[4]||(t[4]=(...s)=>o.prevImage&&o.prevImage(...s))},N),r("button",{class:"vector arrow right-arrow",onClick:t[5]||(t[5]=(...s)=>o.nextImage&&o.nextImage(...s))},K),r("button",{class:"vector close-button",onClick:t[6]||(t[6]=(...s)=>o.closeSlider&&o.closeSlider(...s))},F)])])):I("",!0)}const z=_(P,[["render",R],["__scopeId","data-v-bf0051bd"]]),G={name:"ProjectDetails",components:{ImageSlider:z},setup(){const e=x(),t=w(),h=u(!1),n=u(0),a=u(null),o=()=>{const l=parseInt(t.params.id,10),c=e.getters.selectedProject;if(c&&c.id===l)a.value=c;else{const g=e.getters.projects;a.value=g.find(y=>y.id===l)}a.value||console.error("Project not found!")},s=l=>{n.value=l,h.value=!0};return k(()=>{o()}),{project:a,isSliderOpen:h,selectedIndex:n,openSlider:s}}},U=e=>(S("data-v-8b0a7778"),e=e(),f(),e),q={key:0,class:"project-details"},H={class:"text-container"},J={class:"gallery-container-wrapper"},Q={class:"gallery-container"},W=["onClick"],Y=["src","alt"],Z={key:1},$=U(()=>r("p",null,"Loading...",-1)),ee=[$];function te(e,t,h,n,a,o){const s=b("ImageSlider");return n.project?(i(),d("div",q,[r("div",H,[r("h2",null,j(n.project.name),1)]),r("div",J,[r("div",Q,[(i(!0),d(v,null,p(n.project.gallery,(l,c)=>(i(),d("div",{key:c,class:"gallery-item",style:E({animationDelay:`${c*.1}s`}),onClick:g=>n.openSlider(c)},[r("img",{src:l,alt:`Gallery image ${c+1}`},null,8,Y)],12,W))),128))])]),n.isSliderOpen?(i(),T(s,{key:0,images:n.project.gallery,startIndex:n.selectedIndex,isOpen:n.isSliderOpen,onClose:t[0]||(t[0]=l=>n.isSliderOpen=!1)},null,8,["images","startIndex","isOpen"])):I("",!0)])):(i(),d("div",Z,ee))}const oe=_(G,[["render",te],["__scopeId","data-v-8b0a7778"]]);export{oe as default};