(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2679:function(e,t,r){Promise.resolve().then(r.bind(r,5620)),Promise.resolve().then(r.t.bind(r,3385,23)),Promise.resolve().then(r.t.bind(r,9512,23))},5620:function(e,t,r){"use strict";r.r(t),r.d(t,{ClientLayout:function(){return C}});var a=r(7437),n=r(2265),s=r(8170),i=r(8627),l=r(2167),o=r(4930),c=r.n(o),d=r(6834);class m extends n.Component{static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){}render(){return this.state.hasError?(0,a.jsx)("div",{className:"min-h-screen flex items-center justify-center p-4",children:(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)("h2",{className:"text-2xl font-bold mb-4",children:"Oops, something went wrong!"}),(0,a.jsx)("button",{className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",onClick:()=>window.location.reload(),children:"Refresh Page"})]})}):this.props.children}constructor(...e){super(...e),this.state={hasError:!1}}}var u=r(2530);function h(e){let{progress:t=0,onLoadingComplete:r}=e,[s,i]=(0,n.useState)(0),[l,o]=(0,n.useState)(!0);return(0,n.useEffect)(()=>{let e=setTimeout(()=>{i(Math.min(t+20*Math.random(),100))},500);return()=>clearTimeout(e)},[t]),(0,n.useEffect)(()=>{if(s>=100){let e=setTimeout(()=>{o(!1),null==r||r()},500);return()=>clearTimeout(e)}},[s,r]),(0,a.jsxs)(u.E.div,{initial:{opacity:1},animate:{opacity:l?1:0},exit:{opacity:0},transition:{duration:.5},className:"fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800",children:[(0,a.jsx)(u.E.div,{initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.5},className:"mb-8",children:(0,a.jsxs)("div",{className:"w-24 h-24 relative",children:[(0,a.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow blur-md"}),(0,a.jsx)("div",{className:"absolute inset-1 bg-white dark:bg-gray-900 rounded-full"}),(0,a.jsx)("div",{className:"absolute inset-0 flex items-center justify-center",children:(0,a.jsx)("span",{className:"text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",children:"CM"})})]})}),(0,a.jsx)("div",{className:"w-64 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden",children:(0,a.jsx)(u.E.div,{className:"h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500",initial:{width:"0%"},animate:{width:"".concat(s,"%")},transition:{duration:.5}})}),(0,a.jsx)(u.E.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.2},className:"mt-4 text-sm text-gray-600 dark:text-gray-400",children:s<100?(0,a.jsxs)("span",{children:["Loading... ",Math.round(s),"%"]}):(0,a.jsx)("span",{children:"Welcome!"})}),(0,a.jsx)(u.E.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5},className:"mt-8 text-center text-gray-500 dark:text-gray-400",children:(0,a.jsx)(x,{progress:s})})]})}function x(e){let{progress:t}=e,r=["Preparing your experience...","Loading assets...","Setting up the environment...","Almost there...","Final touches..."],n=Math.min(Math.floor(t/20),r.length-1);return(0,a.jsx)(u.E.p,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.5},children:r[n]},r[n])}var f=r(1396),g=r.n(f),p=r(1034);function b(e){let{href:t,children:r,className:n,...s}=e,i=t.startsWith("http")?t:(0,p.b)(t);return(0,a.jsx)(g(),{href:i,className:n,...s,children:r})}var v=r(9261),y=r(6461);let j=(0,n.memo)(function(e){let{href:t,label:r,isActive:n,className:s}=e;return(0,a.jsxs)(b,{href:t,className:"relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ".concat(n?"text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20":"text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"," ").concat(s||""),children:[r,n&&(0,a.jsx)(u.E.div,{layoutId:"activeNavItem",className:"absolute -bottom-px left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400",transition:{type:"spring",stiffness:380,damping:30}})]})});j.displayName="MemoizedLink",(0,n.memo)(function(e){let{href:t,Icon:r,label:n}=e;return(0,a.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:"p-2 text-muted-foreground transition-colors duration-200 hover:text-foreground","aria-label":n,children:(0,a.jsx)(r,{})})}).displayName="MemoizedSocialLink";var k=(0,n.memo)(function(e){let{navigationItems:t,socialLinks:r}=e,[s,i]=(0,n.useState)(!1),[o,c]=(0,n.useState)(!1),[m,h]=(0,n.useState)("home"),{theme:x,toggleTheme:f}=(0,d.F)(),g=(0,y.E)();return(0,n.useEffect)(()=>{if(!g)return;let e=()=>{i(window.scrollY>50);let e=t.map(e=>e.href.replace("#","")).find(e=>{let t=document.getElementById(e);if(t){let e=t.getBoundingClientRect();return e.top<=100&&e.bottom>=100}return!1});e&&h(e)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[g,t]),(0,a.jsxs)("nav",{className:"fixed top-0 left-0 right-0 z-50 transition-all duration-300 ".concat(s?"bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg":"bg-transparent"),children:[(0,a.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,a.jsxs)("div",{className:"flex justify-between items-center h-16",children:[(0,a.jsx)(b,{href:"/",className:"flex items-center space-x-2",children:(0,a.jsx)("span",{className:"font-bold text-xl",children:"Portfolio"})}),(0,a.jsx)("div",{className:"hidden md:flex items-center space-x-8",children:t.map(e=>(0,a.jsx)(j,{href:e.href,label:e.name,isActive:m===e.href.replace("#","")},e.href))}),(0,a.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,a.jsx)(u.E.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:f,className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800",children:"dark"===x?"\uD83C\uDF1E":"\uD83C\uDF19"}),(0,a.jsx)("button",{className:"md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800",onClick:()=>c(!o),children:o?(0,a.jsx)(v.q5L,{className:"w-6 h-6"}):(0,a.jsx)(v.cur,{className:"w-6 h-6"})})]})]})}),(0,a.jsx)(l.M,{children:o&&(0,a.jsx)(u.E.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800",children:(0,a.jsx)("div",{className:"px-4 py-2 space-y-1",children:t.map(e=>(0,a.jsx)(u.E.a,{href:e.href,className:"block px-4 py-2 text-sm rounded-lg ".concat(m===e.href.replace("#","")?"text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20":"text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"),onClick:()=>c(!1),whileHover:{x:10},transition:{type:"spring",stiffness:300},children:e.name},e.href))})})})]})});let w={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.5}}};function N(){let[e,t]=(0,n.useState)(!1);return((0,n.useEffect)(()=>{t(!0)},[]),e)?(0,a.jsxs)("footer",{className:"relative mt-25",role:"contentinfo","aria-label":"Footer",children:[(0,a.jsx)("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent"}),(0,a.jsx)(u.E.div,{variants:w,initial:"hidden",whileInView:"visible",viewport:{once:!0},className:"container mx-auto px-4 sm:px-6 lg:px-8 py-8",children:(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center text-center space-y-4",children:[(0,a.jsxs)(u.E.div,{className:"flex items-center justify-center space-x-2 text-sm sm:text-base text-gray-600 dark:text-gray-400",whileHover:{scale:1.02},transition:{duration:.2},children:[(0,a.jsx)("span",{children:"Made with"}),(0,a.jsx)(u.E.span,{animate:{scale:[1,1.2,1]},transition:{duration:2,repeat:1/0,ease:"easeInOut"},className:"inline-block text-red-500 dark:text-red-400",children:(0,a.jsx)(v.$aX,{className:"w-4 h-4 sm:w-5 sm:h-5 fill-current"})}),(0,a.jsx)("span",{children:"by Christopher Mesaya"})]}),(0,a.jsxs)("p",{className:"text-xs sm:text-sm text-gray-500 dark:text-gray-400",children:["\xa9 ",new Date().getFullYear()," All rights reserved"]}),(0,a.jsx)("div",{className:"w-12 h-1 mt-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-80"})]})})]}):null}var E=r(7482),S=r(5925);let T=c()(()=>Promise.all([r.e(516),r.e(625)]).then(r.bind(r,9550)),{loadableGenerated:{webpack:()=>[9550]},ssr:!1}),I=c()(()=>Promise.all([r.e(516),r.e(482)]).then(r.bind(r,9482)),{loadableGenerated:{webpack:()=>[9482]},ssr:!1});function C(e){let{children:t}=e,{isLoading:r,progress:o}=function(){let[e,t]=(0,n.useState)(!0),[r,a]=(0,n.useState)(0);return(0,n.useEffect)(()=>{let e=setInterval(()=>{a(r=>100===r?(clearInterval(e),setTimeout(()=>t(!1),500),100):Math.min(r+10*Math.random(),100))},100),r=setTimeout(()=>{a(100)},2e3);return()=>{clearInterval(e),clearTimeout(r)}},[]),{isLoading:e,progress:r}}(),[c,u]=(0,n.useState)(!1),[x,f]=(0,n.useState)(!1);return((0,n.useEffect)(()=>{u(!0);let e=setTimeout(()=>{f(!0)},2e3);return()=>clearTimeout(e)},[]),c)?(0,a.jsx)(d.f,{children:(0,a.jsx)(m,{children:(0,a.jsx)(s.X,{features:i.H,children:r||!x?(0,a.jsx)(h,{progress:o,onLoadingComplete:()=>f(!0)}):(0,a.jsx)(l.M,{mode:"wait",children:(0,a.jsxs)("main",{className:"relative",children:[(0,a.jsx)(T,{}),(0,a.jsx)(I,{}),(0,a.jsx)(k,{navigationItems:E.T,socialLinks:E.K}),t,(0,a.jsx)(N,{}),(0,a.jsx)(S.x7,{position:"bottom-right",toastOptions:{className:"bg-toaster-bg text-toaster-color"}})]})})})})}):(0,a.jsx)("div",{className:"min-h-screen flex items-center justify-center",children:(0,a.jsx)("div",{className:"animate-pulse bg-gray-200 dark:bg-gray-700 h-16 w-3/4 mx-auto rounded"})})}},7482:function(e,t,r){"use strict";r.d(t,{K:function(){return s},T:function(){return n}});var a=r(9261);let n=[{name:"Home",href:"#home"},{name:"About",href:"#about"},{name:"Skills",href:"#skills"},{name:"Projects",href:"#projects"},{name:"Experience",href:"#experience"},{name:"Contact",href:"#contact"}],s=[{label:"GitHub",icon:a.uOf,href:"https://github.com/Mesayaaa"},{label:"LinkedIn",icon:a.qOw,href:"https://www.linkedin.com/in/christopher-mesaya/"},{label:"Instagram",icon:a.JID,href:"https://instagram.com/cmesayaa"},{label:"Email",icon:a.Imn,href:"mailto:mesayachristopher2112@gmail.com"}]},6834:function(e,t,r){"use strict";r.d(t,{F:function(){return o},f:function(){return l}});var a=r(7437),n=r(2265),s=r(6461);let i=(0,n.createContext)(void 0);function l(e){let{children:t}=e,[r,l]=(0,n.useState)("light"),[o,c]=(0,n.useState)(!0),d=(0,s.E)(),m=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];l(e),c(t),d&&(t?(localStorage.removeItem("theme"),localStorage.setItem("useSystemTheme","true")):(localStorage.setItem("theme",e),localStorage.setItem("useSystemTheme","false")),document.documentElement.classList.remove("light","dark"),document.documentElement.classList.add(e))},u=e=>{o&&m(e.matches?"dark":"light",!0)};return(0,n.useEffect)(()=>{if(!d)return;let e=localStorage.getItem("theme"),t="true"===localStorage.getItem("useSystemTheme"),r=window.matchMedia("(prefers-color-scheme: dark)");t?(c(!0),u(r)):e?m(e,!1):(c(!0),u(r));let a=window.matchMedia("(prefers-color-scheme: dark)");return a.addEventListener("change",u),()=>{a.removeEventListener("change",u)}},[d]),(0,a.jsx)(i.Provider,{value:{theme:r,toggleTheme:()=>{m("light"===r?"dark":"light",!1)},setTheme:e=>{m(e,!1)},isSystemTheme:o,useSystemTheme:()=>{u(window.matchMedia("(prefers-color-scheme: dark)"))}},children:t})}function o(){let e=(0,n.useContext)(i);if(void 0===e)throw Error("useTheme must be used within a ThemeProvider");return e}},6461:function(e,t,r){"use strict";r.d(t,{E:function(){return n}});var a=r(2265);function n(){let[e,t]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{t(!0)},[]),e}},1034:function(e,t,r){"use strict";function a(e){return"".concat("/portofolio").concat(e)}r.d(t,{b:function(){return a}})},3385:function(){}},function(e){e.O(0,[530,261,778,459,971,938,744],function(){return e(e.s=2679)}),_N_E=e.O()}]);