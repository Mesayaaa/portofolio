"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[482],{9482:function(e,t,r){r.r(t),r.d(t,{default:function(){return a}});var n=r(7437),i=r(6522),s=r(3622),u=r(2530);function a(){let{scrollYProgress:e}=(0,i.v)(),t=(0,s.q)(e,{stiffness:100,damping:30,restDelta:.001});return(0,n.jsx)(u.E.div,{className:"fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left z-50",style:{scaleX:t}})}},3622:function(e,t,r){r.d(t,{q:function(){return l}});var n=r(2265),i=r(5735),s=r(609),u=r(5968),a=r(538),f=r(123),o=r(1356),c=r(2363);function l(e,t={}){let{isStatic:r}=(0,n.useContext)(u._),l=(0,n.useRef)(null),p=(0,s.c)((0,i.i)(e)?e.get():e),g=()=>{l.current&&l.current.stop()};return(0,n.useInsertionEffect)(()=>p.attach((e,n)=>{if(r)return n(e);if(g(),l.current=(0,f.y)({keyframes:[p.get(),e],velocity:p.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:n}),!c.frameData.isProcessing){let e=performance.now()-c.frameData.timestamp;e<30&&(l.current.time=(0,o.X)(e))}return p.get()},g),[JSON.stringify(t)]),(0,a.L)(()=>{if((0,i.i)(e))return e.on("change",e=>p.set(parseFloat(e)))},[p]),p}}}]);