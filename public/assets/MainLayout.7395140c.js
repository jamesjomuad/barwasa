import{v as St,c as Re,g as Tt,a as _t,u as xt,b as Et,Q as Bt,d as $t}from"./QBtn.6c2ea7ae.js";import{c as P,h as I,a as ot,b as zt,d as We,e as Pt}from"./render.bd54a63b.js";import{c as v,h as C,r as T,i as it,o as U,a as N,n as $e,d as Y,g as M,l as V,e as ze,f as H,w as k,j as ce,H as Fe,k as O,s as Pe,m as Ot,p as Vt,P as Mt,q as Dt,t as oe,u as ye,v as Ne,x as ge,y as _e,z as we,A as Ht,B as lt,C as Qt,D as ie,E as At,F as Rt,G as at,_ as rt,I as ee,J as ue,K as $,L as B,M as Wt,N as se,O as xe,Q as Ie,R as Ft,S as Nt,T as It,U as Xt,V as jt}from"./index.ae028f10.js";var Ut=P({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:n}){const o=v(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>C("div",{class:o.value},I(n.default))}}),Yt=P({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:n}){const o=v(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>C("div",{class:o.value,role:"toolbar"},I(n.default))}});function Kt(){const e=T(!it.value);return e.value===!1&&U(()=>{e.value=!0}),e}const ut=typeof ResizeObserver!="undefined",Xe=ut===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Ee=P({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:n}){let o=null,l,t={width:-1,height:-1};function i(d){d===!0||e.debounce===0||e.debounce==="0"?s():o===null&&(o=setTimeout(s,e.debounce))}function s(){if(o!==null&&(clearTimeout(o),o=null),l){const{offsetWidth:d,offsetHeight:c}=l;(d!==t.width||c!==t.height)&&(t={width:d,height:c},n("resize",t))}}const{proxy:f}=M();if(ut===!0){let d;const c=a=>{l=f.$el.parentNode,l?(d=new ResizeObserver(i),d.observe(l),s()):a!==!0&&Y(()=>{c(!0)})};return U(()=>{c()}),N(()=>{o!==null&&clearTimeout(o),d!==void 0&&(d.disconnect!==void 0?d.disconnect():l&&d.unobserve(l))}),$e}else{let a=function(){o!==null&&(clearTimeout(o),o=null),c!==void 0&&(c.removeEventListener!==void 0&&c.removeEventListener("resize",i,V.passive),c=void 0)},w=function(){a(),l&&l.contentDocument&&(c=l.contentDocument.defaultView,c.addEventListener("resize",i,V.passive),s())};const d=Kt();let c;return U(()=>{Y(()=>{l=f.$el,l&&w()})}),N(a),f.trigger=i,()=>{if(d.value===!0)return C("object",{style:Xe.style,tabindex:-1,type:"text/html",data:Xe.url,"aria-hidden":"true",onLoad:w})}}}}),Gt=P({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:n,emit:o}){const{proxy:{$q:l}}=M(),t=ze(ce,H);if(t===H)return console.error("QHeader needs to be child of QLayout"),H;const i=T(parseInt(e.heightHint,10)),s=T(!0),f=v(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||l.platform.is.ios&&t.isContainer.value===!0),d=v(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return s.value===!0?i.value:0;const u=i.value-t.scroll.value.position;return u>0?u:0}),c=v(()=>e.modelValue!==!0||f.value===!0&&s.value!==!0),a=v(()=>e.modelValue===!0&&c.value===!0&&e.reveal===!0),w=v(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(c.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),q=v(()=>{const u=t.rows.value.top,p={};return u[0]==="l"&&t.left.space===!0&&(p[l.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),u[2]==="r"&&t.right.space===!0&&(p[l.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),p});function m(u,p){t.update("header",u,p)}function h(u,p){u.value!==p&&(u.value=p)}function _({height:u}){h(i,u),m("size",u)}function L(u){a.value===!0&&h(s,!0),o("focusin",u)}k(()=>e.modelValue,u=>{m("space",u),h(s,!0),t.animate()}),k(d,u=>{m("offset",u)}),k(()=>e.reveal,u=>{u===!1&&h(s,e.modelValue)}),k(s,u=>{t.animate(),o("reveal",u)}),k(t.scroll,u=>{e.reveal===!0&&h(s,u.direction==="up"||u.position<=e.revealOffset||u.position-u.inflectionPoint<100)});const g={};return t.instances.header=g,e.modelValue===!0&&m("size",i.value),m("space",e.modelValue),m("offset",d.value),N(()=>{t.instances.header===g&&(t.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const u=ot(n.default,[]);return e.elevated===!0&&u.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(C(Ee,{debounce:0,onResize:_})),C("header",{class:w.value,style:q.value,onFocusin:L},u)}}}),Be=P({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:n}){const o=v(()=>parseInt(e.lines,10)),l=v(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(o.value===1?" ellipsis":"")),t=v(()=>e.lines!==void 0&&o.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":o.value}:null);return()=>C("div",{style:t.value,class:l.value},I(n.default))}});const Oe={dark:{type:Boolean,default:null}};function Ve(e,n){return v(()=>e.dark===null?n.dark.isActive:e.dark)}var Jt=P({name:"QList",props:{...Oe,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:n}){const o=M(),l=Ve(e,o.proxy.$q),t=v(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(l.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>C(e.tag,{class:t.value},I(n.default))}});function Zt(e,n,o){let l;function t(){l!==void 0&&(Fe.remove(l),l=void 0)}return N(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){l={condition:()=>o.value===!0,handler:n},Fe.add(l)}}}const en={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},tn=["beforeShow","show","beforeHide","hide"];function nn({showing:e,canShow:n,hideOnRouteChange:o,handleShow:l,handleHide:t,processOnMount:i}){const s=M(),{props:f,emit:d,proxy:c}=s;let a;function w(u){e.value===!0?h(u):q(u)}function q(u){if(f.disable===!0||u!==void 0&&u.qAnchorHandled===!0||n!==void 0&&n(u)!==!0)return;const p=f["onUpdate:modelValue"]!==void 0;p===!0&&(d("update:modelValue",!0),a=u,Y(()=>{a===u&&(a=void 0)})),(f.modelValue===null||p===!1)&&m(u)}function m(u){e.value!==!0&&(e.value=!0,d("beforeShow",u),l!==void 0?l(u):d("show",u))}function h(u){if(f.disable===!0)return;const p=f["onUpdate:modelValue"]!==void 0;p===!0&&(d("update:modelValue",!1),a=u,Y(()=>{a===u&&(a=void 0)})),(f.modelValue===null||p===!1)&&_(u)}function _(u){e.value!==!1&&(e.value=!1,d("beforeHide",u),t!==void 0?t(u):d("hide",u))}function L(u){f.disable===!0&&u===!0?f["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!1):u===!0!==e.value&&(u===!0?m:_)(a)}k(()=>f.modelValue,L),o!==void 0&&St(s)===!0&&k(()=>c.$route.fullPath,()=>{o.value===!0&&e.value===!0&&h()}),i===!0&&U(()=>{L(f.modelValue)});const g={show:q,hide:h,toggle:w};return Object.assign(c,g),g}const on=[null,document,document.body,document.scrollingElement,document.documentElement];function ln(e,n){let o=Tt(n);if(o===void 0){if(e==null)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return on.includes(o)?window:o}function st(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function ct(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let le;function qe(){if(le!==void 0)return le;const e=document.createElement("p"),n=document.createElement("div");Re(e,{width:"100%",height:"200px"}),Re(n,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),n.appendChild(e),document.body.appendChild(n);const o=e.offsetWidth;n.style.overflow="scroll";let l=e.offsetWidth;return o===l&&(l=n.clientWidth),n.remove(),le=o-l,le}function an(e,n=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:n?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let J=0,ke,Ce,Z,Le=!1,je,Ue,Ye,F=null;function rn(e){un(e)&&Pe(e)}function un(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const n=Ot(e),o=e.shiftKey&&!e.deltaX,l=!o&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=o||l?e.deltaY:e.deltaX;for(let i=0;i<n.length;i++){const s=n[i];if(an(s,l))return l?t<0&&s.scrollTop===0?!0:t>0&&s.scrollTop+s.clientHeight===s.scrollHeight:t<0&&s.scrollLeft===0?!0:t>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function Ke(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function ae(e){Le!==!0&&(Le=!0,requestAnimationFrame(()=>{Le=!1;const{height:n}=e.target,{clientHeight:o,scrollTop:l}=document.scrollingElement;(Z===void 0||n!==window.innerHeight)&&(Z=o-n,document.scrollingElement.scrollTop=l),l>Z&&(document.scrollingElement.scrollTop-=Math.ceil((l-Z)/8))}))}function Ge(e){const n=document.body,o=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:t}=window.getComputedStyle(n);ke=ct(window),Ce=st(window),je=n.style.left,Ue=n.style.top,Ye=window.location.href,n.style.left=`-${ke}px`,n.style.top=`-${Ce}px`,t!=="hidden"&&(t==="scroll"||n.scrollWidth>window.innerWidth)&&n.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||n.scrollHeight>window.innerHeight)&&n.classList.add("q-body--force-scrollbar-y"),n.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,O.is.ios===!0&&(o===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",ae,V.passiveCapture),window.visualViewport.addEventListener("scroll",ae,V.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Ke,V.passiveCapture))}O.is.desktop===!0&&O.is.mac===!0&&window[`${e}EventListener`]("wheel",rn,V.notPassive),e==="remove"&&(O.is.ios===!0&&(o===!0?(window.visualViewport.removeEventListener("resize",ae,V.passiveCapture),window.visualViewport.removeEventListener("scroll",ae,V.passiveCapture)):window.removeEventListener("scroll",Ke,V.passiveCapture)),n.classList.remove("q-body--prevent-scroll"),n.classList.remove("q-body--force-scrollbar-x"),n.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,n.style.left=je,n.style.top=Ue,window.location.href===Ye&&window.scrollTo(ke,Ce),Z=void 0)}function sn(e){let n="add";if(e===!0){if(J++,F!==null){clearTimeout(F),F=null;return}if(J>1)return}else{if(J===0||(J--,J>0))return;if(n="remove",O.is.ios===!0&&O.is.nativeMobile===!0){F!==null&&clearTimeout(F),F=setTimeout(()=>{Ge(n),F=null},100);return}}Ge(n)}function cn(){let e;return{preventBodyScroll(n){n!==e&&(e!==void 0||n===!0)&&(e=n,sn(n))}}}function dn(){let e=null;const n=M();function o(){e!==null&&(clearTimeout(e),e=null)}return Vt(o),N(o),{removeTimeout:o,registerTimeout(l,t){o(),_t(n)===!1&&(e=setTimeout(l,t))}}}const Me={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},fn=Object.keys(Me);Me.all=!0;function Je(e){const n={};for(const o of fn)e[o]===!0&&(n[o]=!0);return Object.keys(n).length===0?Me:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}const vn=["INPUT","TEXTAREA"];function Ze(e,n){return n.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof n.handler=="function"&&vn.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(n.uid)===-1)}function mn(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Mt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Se(e,n,o){const l=_e(e);let t,i=l.left-n.event.x,s=l.top-n.event.y,f=Math.abs(i),d=Math.abs(s);const c=n.direction;c.horizontal===!0&&c.vertical!==!0?t=i<0?"left":"right":c.horizontal!==!0&&c.vertical===!0?t=s<0?"up":"down":c.up===!0&&s<0?(t="up",f>d&&(c.left===!0&&i<0?t="left":c.right===!0&&i>0&&(t="right"))):c.down===!0&&s>0?(t="down",f>d&&(c.left===!0&&i<0?t="left":c.right===!0&&i>0&&(t="right"))):c.left===!0&&i<0?(t="left",f<d&&(c.up===!0&&s<0?t="up":c.down===!0&&s>0&&(t="down"))):c.right===!0&&i>0&&(t="right",f<d&&(c.up===!0&&s<0?t="up":c.down===!0&&s>0&&(t="down")));let a=!1;if(t===void 0&&o===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};t=n.event.lastDir,a=!0,t==="left"||t==="right"?(l.left-=i,f=0,i=0):(l.top-=s,d=0,s=0)}return{synthetic:a,payload:{evt:e,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:l,direction:t,isFirst:n.event.isFirst,isFinal:o===!0,duration:Date.now()-n.event.time,distance:{x:f,y:d},offset:{x:i,y:s},delta:{x:l.left-n.event.lastX,y:l.top-n.event.lastY}}}}let hn=0;var Te=zt({name:"touch-pan",beforeMount(e,{value:n,modifiers:o}){if(o.mouse!==!0&&O.has.touch!==!0)return;function l(i,s){o.mouse===!0&&s===!0?Pe(i):(o.stop===!0&&ge(i),o.prevent===!0&&Ne(i))}const t={uid:"qvtp_"+hn++,handler:n,modifiers:o,direction:Je(o),noop:$e,mouseStart(i){Ze(i,t)&&Dt(i)&&(oe(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(i,!0))},touchStart(i){if(Ze(i,t)){const s=i.target;oe(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(i)}},start(i,s){if(O.is.firefox===!0&&ye(e,!0),t.lastEvt=i,s===!0||o.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const c=i.type.indexOf("mouse")>-1?new MouseEvent(i.type,i):new TouchEvent(i.type,i);i.defaultPrevented===!0&&Ne(c),i.cancelBubble===!0&&ge(c),Object.assign(c,{qKeyEvent:i.qKeyEvent,qClickOutside:i.qClickOutside,qAnchorHandled:i.qAnchorHandled,qClonedBy:i.qClonedBy===void 0?[t.uid]:i.qClonedBy.concat(t.uid)}),t.initialEvent={target:i.target,event:c}}ge(i)}const{left:f,top:d}=_e(i);t.event={x:f,y:d,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:d}},move(i){if(t.event===void 0)return;const s=_e(i),f=s.left-t.event.x,d=s.top-t.event.y;if(f===0&&d===0)return;t.lastEvt=i;const c=t.event.mouse===!0,a=()=>{l(i,c);let m;o.preserveCursor!==!0&&o.preservecursor!==!0&&(m=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),c===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),mn(),t.styleCleanup=h=>{if(t.styleCleanup=void 0,m!==void 0&&(document.documentElement.style.cursor=m),document.body.classList.remove("non-selectable"),c===!0){const _=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{_(),h()},50):_()}else h!==void 0&&h()}};if(t.event.detected===!0){t.event.isFirst!==!0&&l(i,t.event.mouse);const{payload:m,synthetic:h}=Se(i,t,!1);m!==void 0&&(t.handler(m)===!1?t.end(i):(t.styleCleanup===void 0&&t.event.isFirst===!0&&a(),t.event.lastX=m.position.left,t.event.lastY=m.position.top,t.event.lastDir=h===!0?void 0:m.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||c===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){a(),t.event.detected=!0,t.move(i);return}const w=Math.abs(f),q=Math.abs(d);w!==q&&(t.direction.horizontal===!0&&w>q||t.direction.vertical===!0&&w<q||t.direction.up===!0&&w<q&&d<0||t.direction.down===!0&&w<q&&d>0||t.direction.left===!0&&w>q&&f<0||t.direction.right===!0&&w>q&&f>0?(t.event.detected=!0,t.move(i)):t.end(i,!0))},end(i,s){if(t.event!==void 0){if(we(t,"temp"),O.is.firefox===!0&&ye(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Se(i===void 0?t.lastEvt:i,t).payload);const{payload:f}=Se(i===void 0?t.lastEvt:i,t,!0),d=()=>{t.handler(f)};t.styleCleanup!==void 0?t.styleCleanup(d):d()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,o.mouse===!0){const i=o.mouseCapture===!0||o.mousecapture===!0?"Capture":"";oe(t,"main",[[e,"mousedown","mouseStart",`passive${i}`]])}O.has.touch===!0&&oe(t,"main",[[e,"touchstart","touchStart",`passive${o.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const o=e.__qtouchpan;o!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&o.end(),o.handler=n.value),o.direction=Je(n.modifiers))},beforeUnmount(e){const n=e.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),we(n,"main"),we(n,"temp"),O.is.firefox===!0&&ye(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchpan)}});function re(e,n,o){return o<=n?n:Math.min(o,Math.max(n,e))}const et=150;var pn=P({name:"QDrawer",inheritAttrs:!1,props:{...en,...Oe,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...tn,"onLayout","miniState"],setup(e,{slots:n,emit:o,attrs:l}){const t=M(),{proxy:{$q:i}}=t,s=Ve(e,i),{preventBodyScroll:f}=cn(),{registerTimeout:d,removeTimeout:c}=dn(),a=ze(ce,H);if(a===H)return console.error("QDrawer needs to be child of QLayout"),H;let w,q=null,m;const h=T(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),_=v(()=>e.mini===!0&&h.value!==!0),L=v(()=>_.value===!0?e.miniWidth:e.width),g=T(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),u=v(()=>e.persistent!==!0&&(h.value===!0||dt.value===!0));function p(r,y){if(R(),r!==!1&&a.animate(),z(0),h.value===!0){const x=a.instances[te.value];x!==void 0&&x.belowBreakpoint===!0&&x.hide(!1),Q(1),a.isContainer.value!==!0&&f(!0)}else Q(0),r!==!1&&he(!1);d(()=>{r!==!1&&he(!0),y!==!0&&o("show",r)},et)}function b(r,y){K(),r!==!1&&a.animate(),Q(0),z(X.value*L.value),pe(),y!==!0?d(()=>{o("hide",r)},et):c()}const{show:S,hide:E}=nn({showing:g,hideOnRouteChange:u,handleShow:p,handleHide:b}),{addToHistory:R,removeFromHistory:K}=Zt(g,E,u),W={belowBreakpoint:h,hide:E},D=v(()=>e.side==="right"),X=v(()=>(i.lang.rtl===!0?-1:1)*(D.value===!0?1:-1)),De=T(0),j=T(!1),de=T(!1),He=T(L.value*X.value),te=v(()=>D.value===!0?"left":"right"),fe=v(()=>g.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:L.value:0),ve=v(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(D.value?"R":"L")>-1||i.platform.is.ios===!0&&a.isContainer.value===!0),G=v(()=>e.overlay===!1&&g.value===!0&&h.value===!1),dt=v(()=>e.overlay===!0&&g.value===!0&&h.value===!1),ft=v(()=>"fullscreen q-drawer__backdrop"+(g.value===!1&&j.value===!1?" hidden":"")),vt=v(()=>({backgroundColor:`rgba(0,0,0,${De.value*.4})`})),Qe=v(()=>D.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),mt=v(()=>D.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),ht=v(()=>{const r={};return a.header.space===!0&&Qe.value===!1&&(ve.value===!0?r.top=`${a.header.offset}px`:a.header.space===!0&&(r.top=`${a.header.size}px`)),a.footer.space===!0&&mt.value===!1&&(ve.value===!0?r.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(r.bottom=`${a.footer.size}px`)),r}),pt=v(()=>{const r={width:`${L.value}px`,transform:`translateX(${He.value}px)`};return h.value===!0?r:Object.assign(r,ht.value)}),bt=v(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),yt=v(()=>`q-drawer q-drawer--${e.side}`+(de.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(j.value===!0?" no-transition":g.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${_.value===!0?"mini":"standard"}`+(ve.value===!0||G.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Qe.value===!0?" q-drawer--top-padding":""))),gt=v(()=>{const r=i.lang.rtl===!0?e.side:te.value;return[[Te,Ct,void 0,{[r]:!0,mouse:!0}]]}),wt=v(()=>{const r=i.lang.rtl===!0?te.value:e.side;return[[Te,Ae,void 0,{[r]:!0,mouse:!0}]]}),qt=v(()=>{const r=i.lang.rtl===!0?te.value:e.side;return[[Te,Ae,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function me(){Lt(h,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}k(h,r=>{r===!0?(w=g.value,g.value===!0&&E(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(g.value===!0?(z(0),Q(0),pe()):S(!1))}),k(()=>e.side,(r,y)=>{a.instances[y]===W&&(a.instances[y]=void 0,a[y].space=!1,a[y].offset=0),a.instances[r]=W,a[r].size=L.value,a[r].space=G.value,a[r].offset=fe.value}),k(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&me()}),k(()=>e.behavior+e.breakpoint,me),k(a.isContainer,r=>{g.value===!0&&f(r!==!0),r===!0&&me()}),k(a.scrollbarWidth,()=>{z(g.value===!0?0:void 0)}),k(fe,r=>{A("offset",r)}),k(G,r=>{o("onLayout",r),A("space",r)}),k(D,()=>{z()}),k(L,r=>{z(),be(e.miniToOverlay,r)}),k(()=>e.miniToOverlay,r=>{be(r,L.value)}),k(()=>i.lang.rtl,()=>{z()}),k(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(kt(),a.animate())}),k(_,r=>{o("miniState",r)});function z(r){r===void 0?Y(()=>{r=g.value===!0?0:L.value,z(X.value*r)}):(a.isContainer.value===!0&&D.value===!0&&(h.value===!0||Math.abs(r)===L.value)&&(r+=X.value*a.scrollbarWidth.value),He.value=r)}function Q(r){De.value=r}function he(r){const y=r===!0?"remove":a.isContainer.value!==!0?"add":"";y!==""&&document.body.classList[y]("q-body--drawer-toggle")}function kt(){q!==null&&clearTimeout(q),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),de.value=!0,q=setTimeout(()=>{q=null,de.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ct(r){if(g.value!==!1)return;const y=L.value,x=re(r.distance.x,0,y);if(r.isFinal===!0){x>=Math.min(75,y)===!0?S():(a.animate(),Q(0),z(X.value*y)),j.value=!1;return}z((i.lang.rtl===!0?D.value!==!0:D.value)?Math.max(y-x,0):Math.min(0,x-y)),Q(re(x/y,0,1)),r.isFirst===!0&&(j.value=!0)}function Ae(r){if(g.value!==!0)return;const y=L.value,x=r.direction===e.side,ne=(i.lang.rtl===!0?x!==!0:x)?re(r.distance.x,0,y):0;if(r.isFinal===!0){Math.abs(ne)<Math.min(75,y)===!0?(a.animate(),Q(1),z(0)):E(),j.value=!1;return}z(X.value*ne),Q(re(1-ne/y,0,1)),r.isFirst===!0&&(j.value=!0)}function pe(){f(!1),he(!0)}function A(r,y){a.update(e.side,r,y)}function Lt(r,y){r.value!==y&&(r.value=y)}function be(r,y){A("size",r===!0?e.miniWidth:y)}return a.instances[e.side]=W,be(e.miniToOverlay,L.value),A("space",G.value),A("offset",fe.value),e.showIfAbove===!0&&e.modelValue!==!0&&g.value===!0&&e["onUpdate:modelValue"]!==void 0&&o("update:modelValue",!0),U(()=>{o("onLayout",G.value),o("miniState",_.value),w=e.showIfAbove===!0;const r=()=>{(g.value===!0?p:b)(!1,!0)};if(a.totalWidth.value!==0){Y(r);return}m=k(a.totalWidth,()=>{m(),m=void 0,g.value===!1&&e.showIfAbove===!0&&h.value===!1?S(!1):r()})}),N(()=>{m!==void 0&&m(),q!==null&&(clearTimeout(q),q=null),g.value===!0&&pe(),a.instances[e.side]===W&&(a.instances[e.side]=void 0,A("size",0),A("offset",0),A("space",!1))}),()=>{const r=[];h.value===!0&&(e.noSwipeOpen===!1&&r.push(Ht(C("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),gt.value)),r.push(We("div",{ref:"backdrop",class:ft.value,style:vt.value,"aria-hidden":"true",onClick:E},void 0,"backdrop",e.noSwipeBackdrop!==!0&&g.value===!0,()=>qt.value)));const y=_.value===!0&&n.mini!==void 0,x=[C("div",{...l,key:""+y,class:[bt.value,l.class]},y===!0?n.mini():I(n.default))];return e.elevated===!0&&g.value===!0&&x.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(We("aside",{ref:"content",class:yt.value,style:pt.value},x,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>wt.value)),C("div",{class:"q-drawer-container"},r)}}}),bn=P({name:"QPageContainer",setup(e,{slots:n}){const{proxy:{$q:o}}=M(),l=ze(ce,H);if(l===H)return console.error("QPageContainer needs to be child of QLayout"),H;lt(Qt,!0);const t=v(()=>{const i={};return l.header.space===!0&&(i.paddingTop=`${l.header.size}px`),l.right.space===!0&&(i[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${l.right.size}px`),l.footer.space===!0&&(i.paddingBottom=`${l.footer.size}px`),l.left.space===!0&&(i[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${l.left.size}px`),i});return()=>C("div",{class:"q-page-container",style:t.value},I(n.default))}});const{passive:tt}=V,yn=["both","horizontal","vertical"];var gn=P({name:"QScrollObserver",props:{axis:{type:String,validator:e=>yn.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:n}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let l=null,t,i;k(()=>e.scrollTarget,()=>{d(),f()});function s(){l!==null&&l();const w=Math.max(0,st(t)),q=ct(t),m={top:w-o.position.top,left:q-o.position.left};if(e.axis==="vertical"&&m.top===0||e.axis==="horizontal"&&m.left===0)return;const h=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";o.position={top:w,left:q},o.directionChanged=o.direction!==h,o.delta=m,o.directionChanged===!0&&(o.direction=h,o.inflectionPoint=o.position),n("scroll",{...o})}function f(){t=ln(i,e.scrollTarget),t.addEventListener("scroll",c,tt),c(!0)}function d(){t!==void 0&&(t.removeEventListener("scroll",c,tt),t=void 0)}function c(w){if(w===!0||e.debounce===0||e.debounce==="0")s();else if(l===null){const[q,m]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];l=()=>{m(q),l=null}}}const{proxy:a}=M();return k(()=>a.$q.lang.rtl,s),U(()=>{i=a.$el.parentNode,f()}),N(()=>{l!==null&&l(),d()}),Object.assign(a,{trigger:c,getPosition:()=>o}),$e}}),wn=P({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:n,emit:o}){const{proxy:{$q:l}}=M(),t=T(null),i=T(l.screen.height),s=T(e.container===!0?0:l.screen.width),f=T({position:0,direction:"down",inflectionPoint:0}),d=T(0),c=T(it.value===!0?0:qe()),a=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),w=v(()=>e.container===!1?{minHeight:l.screen.height+"px"}:null),q=v(()=>c.value!==0?{[l.lang.rtl===!0?"left":"right"]:`${c.value}px`}:null),m=v(()=>c.value!==0?{[l.lang.rtl===!0?"right":"left"]:0,[l.lang.rtl===!0?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null);function h(b){if(e.container===!0||document.qScrollPrevented!==!0){const S={position:b.position.top,direction:b.direction,directionChanged:b.directionChanged,inflectionPoint:b.inflectionPoint.top,delta:b.delta.top};f.value=S,e.onScroll!==void 0&&o("scroll",S)}}function _(b){const{height:S,width:E}=b;let R=!1;i.value!==S&&(R=!0,i.value=S,e.onScrollHeight!==void 0&&o("scrollHeight",S),g()),s.value!==E&&(R=!0,s.value=E),R===!0&&e.onResize!==void 0&&o("resize",b)}function L({height:b}){d.value!==b&&(d.value=b,g())}function g(){if(e.container===!0){const b=i.value>d.value?qe():0;c.value!==b&&(c.value=b)}}let u=null;const p={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:t,height:i,containerHeight:d,scrollbarWidth:c,totalWidth:v(()=>s.value+c.value),rows:v(()=>{const b=e.view.toLowerCase().split(" ");return{top:b[0].split(""),middle:b[1].split(""),bottom:b[2].split("")}}),header:ie({size:0,offset:0,space:!1}),right:ie({size:300,offset:0,space:!1}),footer:ie({size:0,offset:0,space:!1}),left:ie({size:300,offset:0,space:!1}),scroll:f,animate(){u!==null?clearTimeout(u):document.body.classList.add("q-body--layout-animate"),u=setTimeout(()=>{u=null,document.body.classList.remove("q-body--layout-animate")},155)},update(b,S,E){p[b][S]=E}};if(lt(ce,p),qe()>0){let E=function(){b=null,S.classList.remove("hide-scrollbar")},R=function(){if(b===null){if(S.scrollHeight>l.screen.height)return;S.classList.add("hide-scrollbar")}else clearTimeout(b);b=setTimeout(E,300)},K=function(W){b!==null&&W==="remove"&&(clearTimeout(b),E()),window[`${W}EventListener`]("resize",R)},b=null;const S=document.body;k(()=>e.container!==!0?"add":"remove",K),e.container!==!0&&K("add"),At(()=>{K("remove")})}return()=>{const b=Pt(n.default,[C(gn,{onScroll:h}),C(Ee,{onResize:_})]),S=C("div",{class:a.value,style:w.value,ref:e.container===!0?void 0:t,tabindex:-1},b);return e.container===!0?C("div",{class:"q-layout-container overflow-hidden",ref:t},[C(Ee,{onResize:L}),C("div",{class:"absolute-full",style:q.value},[C("div",{class:"scroll",style:m.value},[S])])]):S}}}),nt=P({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:n}){const o=v(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>C("div",{class:o.value},I(n.default))}}),qn=P({name:"QItem",props:{...Oe,...xt,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:n,emit:o}){const{proxy:{$q:l}}=M(),t=Ve(e,l),{hasLink:i,linkAttrs:s,linkClass:f,linkTag:d,navigateOnClick:c}=Et(),a=T(null),w=T(null),q=v(()=>e.clickable===!0||i.value===!0||e.tag==="label"),m=v(()=>e.disable!==!0&&q.value===!0),h=v(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(i.value===!0&&e.active===null?f.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(m.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),_=v(()=>{if(e.insetLevel===void 0)return null;const p=l.lang.rtl===!0?"Right":"Left";return{["padding"+p]:16+e.insetLevel*56+"px"}});function L(p){m.value===!0&&(w.value!==null&&(p.qKeyEvent!==!0&&document.activeElement===a.value?w.value.focus():document.activeElement===w.value&&a.value.focus()),c(p))}function g(p){if(m.value===!0&&Rt(p,13)===!0){Pe(p),p.qKeyEvent=!0;const b=new MouseEvent("click",p);b.qKeyEvent=!0,a.value.dispatchEvent(b)}o("keyup",p)}function u(){const p=ot(n.default,[]);return m.value===!0&&p.unshift(C("div",{class:"q-focus-helper",tabindex:-1,ref:w})),p}return()=>{const p={ref:a,class:h.value,style:_.value,role:"listitem",onClick:L,onKeyup:g};return m.value===!0?(p.tabindex=e.tabindex||"0",Object.assign(p,s.value)):q.value===!0&&(p["aria-disabled"]="true"),C(d.value,p,u())}}});const kn=at({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function Cn(e,n,o,l,t,i){return ee(),ue(qn,{clickable:"",tag:"a",target:"_blank",href:e.link},{default:$(()=>[e.icon?(ee(),ue(nt,{key:0,avatar:""},{default:$(()=>[B(Bt,{name:e.icon},null,8,["name"])]),_:1})):Wt("",!0),B(nt,null,{default:$(()=>[B(Be,null,{default:$(()=>[se(xe(e.title),1)]),_:1}),B(Be,{caption:""},{default:$(()=>[se(xe(e.caption),1)]),_:1})]),_:1})]),_:1},8,["href"])}var Ln=rt(kn,[["render",Cn]]);const Sn=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],Tn=at({name:"MainLayout",components:{EssentialLink:Ln},setup(){const e=T(!1);return{essentialLinks:Sn,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}});function _n(e,n,o,l,t,i){const s=Ie("EssentialLink"),f=Ie("router-view");return ee(),ue(wn,{view:"lHh Lpr lFf"},{default:$(()=>[B(Gt,{elevated:""},{default:$(()=>[B(Yt,null,{default:$(()=>[B($t,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),B(Ut,null,{default:$(()=>[se(" Quasar App ")]),_:1}),Ft("div",null,"Quasar v"+xe(e.$q.version),1)]),_:1})]),_:1}),B(pn,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":n[0]||(n[0]=d=>e.leftDrawerOpen=d),"show-if-above":"",bordered:""},{default:$(()=>[B(Jt,null,{default:$(()=>[B(Be,{header:""},{default:$(()=>[se(" Essential Links ")]),_:1}),(ee(!0),Nt(Xt,null,It(e.essentialLinks,d=>(ee(),ue(s,jt({key:d.title},d),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),B(bn,null,{default:$(()=>[B(f)]),_:1})]),_:1})}var zn=rt(Tn,[["render",_n]]);export{zn as default};