"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[625],{9550:function(e,t,r){r.r(t);var n=r(7437),a=r(2265),s=r(6522),i=r(3622),c=r(1502),u=r(2530);t.default=(0,a.memo)(function(){let e=(0,a.useRef)(null),{scrollYProgress:t}=(0,s.v)({target:e,offset:["start start","end start"]}),r={mass:1,stiffness:100,damping:30,restDelta:.001},l=(0,i.q)((0,c.H)(t,[0,1],["0%","50%"]),r),o=(0,i.q)((0,c.H)(t,[0,1],["0%","30%"]),r),f=(0,i.q)((0,c.H)(t,[0,1],["0%","20%"]),r),d=(0,c.H)(t,[0,.5,1],[.6,.4,.2]);return(0,a.useEffect)(()=>{var t;let r=null===(t=e.current)||void 0===t?void 0:t.getContext("2d");if(!r)return;let n=new ResizeObserver(t=>{for(let n of t)if(n.target===e.current){let{width:e,height:t}=n.contentRect;r.canvas.width=e,r.canvas.height=t}});return e.current&&n.observe(e.current),()=>{n.disconnect()}},[]),(0,n.jsxs)("div",{className:"fixed inset-0 -z-10 overflow-hidden",children:[(0,n.jsx)("canvas",{ref:e,className:"absolute inset-0"}),(0,n.jsx)(u.E.div,{className:"absolute inset-0 bg-gradient-to-b from-background/5 to-background/20",style:{opacity:d}}),(0,n.jsx)(u.E.div,{className:"absolute inset-0",style:{y:l},children:(0,n.jsx)("div",{className:"absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,rgba(var(--primary-rgb),0.1),transparent)]"})}),(0,n.jsx)(u.E.div,{className:"absolute inset-0",style:{y:o},children:(0,n.jsx)("div",{className:"absolute inset-0 bg-[radial-gradient(circle_700px_at_80%_40%,rgba(var(--primary-rgb),0.15),transparent)]"})}),(0,n.jsx)(u.E.div,{className:"absolute inset-0",style:{y:f},children:(0,n.jsx)("div",{className:"absolute inset-0 bg-[radial-gradient(circle_600px_at_20%_60%,rgba(var(--primary-rgb),0.1),transparent)]"})})]})})},3622:function(e,t,r){r.d(t,{q:function(){return f}});var n=r(2265),a=r(5735),s=r(609),i=r(5968),c=r(538),u=r(123),l=r(1356),o=r(2363);function f(e,t={}){let{isStatic:r}=(0,n.useContext)(i._),f=(0,n.useRef)(null),d=(0,s.c)((0,a.i)(e)?e.get():e),g=()=>{f.current&&f.current.stop()};return(0,n.useInsertionEffect)(()=>d.attach((e,n)=>{if(r)return n(e);if(g(),f.current=(0,u.y)({keyframes:[d.get(),e],velocity:d.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:n}),!o.frameData.isProcessing){let e=performance.now()-o.frameData.timestamp;e<30&&(f.current.time=(0,l.X)(e))}return d.get()},g),[JSON.stringify(t)]),(0,c.L)(()=>{if((0,a.i)(e))return e.on("change",e=>d.set(parseFloat(e)))},[d]),d}},1502:function(e,t,r){r.d(t,{H:function(){return d}});var n=r(3245);let a=e=>e&&"object"==typeof e&&e.mix,s=e=>a(e)?e.mix:void 0;var i=r(609),c=r(538),u=r(2363);function l(e,t){let r=(0,i.c)(t()),n=()=>r.set(t());return n(),(0,c.L)(()=>{let t=()=>u.Wi.update(n,!1,!0),r=e.map(e=>e.on("change",t));return()=>{r.forEach(e=>e()),(0,u.Pn)(n)}}),r}var o=r(961),f=r(5818);function d(e,t,r,a){if("function"==typeof e)return function(e){f.S1.current=[],e();let t=l(f.S1.current,e);return f.S1.current=void 0,t}(e);let i="function"==typeof t?t:function(...e){let t=!Array.isArray(e[0]),r=t?0:-1,a=e[0+r],i=e[1+r],c=e[2+r],u=e[3+r],l=(0,n.s)(i,c,{mixer:s(c[0]),...u});return t?l(a):l}(t,r,a);return Array.isArray(e)?g(e,i):g([e],([e])=>i(e))}function g(e,t){let r=(0,o.h)(()=>[]);return l(e,()=>{r.length=0;let n=e.length;for(let t=0;t<n;t++)r[t]=e[t].get();return t(r)})}}}]);