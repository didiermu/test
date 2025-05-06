var K={exports:{}},U={exports:{}},V={exports:{}};/*!
  * Bootstrap data.js v5.3.5 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Mt=V.exports,ut;function It(){return ut||(ut=1,function(b,g){(function(r,a){b.exports=a()})(Mt,function(){const r=new Map;return{set(u,s,n){r.has(u)||r.set(u,new Map);const i=r.get(u);if(!i.has(s)&&i.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`);return}i.set(s,n)},get(u,s){return r.has(u)&&r.get(u).get(s)||null},remove(u,s){if(!r.has(u))return;const n=r.get(u);n.delete(s),n.size===0&&r.delete(u)}}})}(V)),V.exports}var W={exports:{}},F={exports:{}};/*!
  * Bootstrap index.js v5.3.5 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Rt=F.exports,dt;function H(){return dt||(dt=1,function(b,g){(function(r,a){a(g)})(Rt,function(r){const s="transitionend",n=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,(p,o)=>`#${CSS.escape(o)}`)),e),i=e=>e==null?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),E=e=>{do e+=Math.floor(Math.random()*1e6);while(document.getElementById(e));return e},h=e=>{if(!e)return 0;let{transitionDuration:p,transitionDelay:o}=window.getComputedStyle(e);const m=Number.parseFloat(p),A=Number.parseFloat(o);return!m&&!A?0:(p=p.split(",")[0],o=o.split(",")[0],(Number.parseFloat(p)+Number.parseFloat(o))*1e3)},v=e=>{e.dispatchEvent(new Event(s))},C=e=>!e||typeof e!="object"?!1:(typeof e.jquery<"u"&&(e=e[0]),typeof e.nodeType<"u"),R=e=>C(e)?e.jquery?e[0]:e:typeof e=="string"&&e.length>0?document.querySelector(n(e)):null,P=e=>{if(!C(e)||e.getClientRects().length===0)return!1;const p=getComputedStyle(e).getPropertyValue("visibility")==="visible",o=e.closest("details:not([open])");if(!o)return p;if(o!==e){const m=e.closest("summary");if(m&&m.parentNode!==o||m===null)return!1}return p},M=e=>!e||e.nodeType!==Node.ELEMENT_NODE||e.classList.contains("disabled")?!0:typeof e.disabled<"u"?e.disabled:e.hasAttribute("disabled")&&e.getAttribute("disabled")!=="false",T=e=>{if(!document.documentElement.attachShadow)return null;if(typeof e.getRootNode=="function"){const p=e.getRootNode();return p instanceof ShadowRoot?p:null}return e instanceof ShadowRoot?e:e.parentNode?T(e.parentNode):null},D=()=>{},S=e=>{e.offsetHeight},q=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,N=[],$=e=>{document.readyState==="loading"?(N.length||document.addEventListener("DOMContentLoaded",()=>{for(const p of N)p()}),N.push(e)):e()},O=()=>document.documentElement.dir==="rtl",l=e=>{$(()=>{const p=q();if(p){const o=e.NAME,m=p.fn[o];p.fn[o]=e.jQueryInterface,p.fn[o].Constructor=e,p.fn[o].noConflict=()=>(p.fn[o]=m,e.jQueryInterface)}})},c=(e,p=[],o=e)=>typeof e=="function"?e.call(...p):o,t=(e,p,o=!0)=>{if(!o){c(e);return}const A=h(p)+5;let _=!1;const y=({target:L})=>{L===p&&(_=!0,p.removeEventListener(s,y),c(e))};p.addEventListener(s,y),setTimeout(()=>{_||v(p)},A)},d=(e,p,o,m)=>{const A=e.length;let _=e.indexOf(p);return _===-1?!o&&m?e[A-1]:e[0]:(_+=o?1:-1,m&&(_=(_+A)%A),e[Math.max(0,Math.min(_,A-1))])};r.defineJQueryPlugin=l,r.execute=c,r.executeAfterTransition=t,r.findShadowRoot=T,r.getElement=R,r.getNextActiveElement=d,r.getTransitionDurationFromElement=h,r.getUID=E,r.getjQuery=q,r.isDisabled=M,r.isElement=C,r.isRTL=O,r.isVisible=P,r.noop=D,r.onDOMContentLoaded=$,r.parseSelector=n,r.reflow=S,r.toType=i,r.triggerTransitionEnd=v,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})})}(F,F.exports)),F.exports}/*!
  * Bootstrap event-handler.js v5.3.5 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var qt=W.exports,pt;function xt(){return pt||(pt=1,function(b,g){(function(r,a){b.exports=a(H())})(qt,function(r){const a=/[^.]*(?=\..*)\.|.*/,u=/\..*/,s=/::\d+$/,n={};let i=1;const E={mouseenter:"mouseover",mouseleave:"mouseout"},h=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function v(l,c){return c&&`${c}::${i++}`||l.uidEvent||i++}function C(l){const c=v(l);return l.uidEvent=c,n[c]=n[c]||{},n[c]}function R(l,c){return function t(d){return O(d,{delegateTarget:l}),t.oneOff&&$.off(l,d.type,c),c.apply(l,[d])}}function P(l,c,t){return function d(e){const p=l.querySelectorAll(c);for(let{target:o}=e;o&&o!==this;o=o.parentNode)for(const m of p)if(m===o)return O(e,{delegateTarget:o}),d.oneOff&&$.off(l,e.type,c,t),t.apply(o,[e])}}function M(l,c,t=null){return Object.values(l).find(d=>d.callable===c&&d.delegationSelector===t)}function T(l,c,t){const d=typeof c=="string",e=d?t:c||t;let p=N(l);return h.has(p)||(p=l),[d,e,p]}function D(l,c,t,d,e){if(typeof c!="string"||!l)return;let[p,o,m]=T(c,t,d);c in E&&(o=(j=>function(f){if(!f.relatedTarget||f.relatedTarget!==f.delegateTarget&&!f.delegateTarget.contains(f.relatedTarget))return j.call(this,f)})(o));const A=C(l),_=A[m]||(A[m]={}),y=M(_,o,p?t:null);if(y){y.oneOff=y.oneOff&&e;return}const L=v(o,c.replace(a,"")),k=p?P(l,t,o):R(l,o);k.delegationSelector=p?t:null,k.callable=o,k.oneOff=e,k.uidEvent=L,_[L]=k,l.addEventListener(m,k,p)}function S(l,c,t,d,e){const p=M(c[t],d,e);p&&(l.removeEventListener(t,p,!!e),delete c[t][p.uidEvent])}function q(l,c,t,d){const e=c[t]||{};for(const[p,o]of Object.entries(e))p.includes(d)&&S(l,c,t,o.callable,o.delegationSelector)}function N(l){return l=l.replace(u,""),E[l]||l}const $={on(l,c,t,d){D(l,c,t,d,!1)},one(l,c,t,d){D(l,c,t,d,!0)},off(l,c,t,d){if(typeof c!="string"||!l)return;const[e,p,o]=T(c,t,d),m=o!==c,A=C(l),_=A[o]||{},y=c.startsWith(".");if(typeof p<"u"){if(!Object.keys(_).length)return;S(l,A,o,p,e?t:null);return}if(y)for(const L of Object.keys(A))q(l,A,L,c.slice(1));for(const[L,k]of Object.entries(_)){const I=L.replace(s,"");(!m||c.includes(I))&&S(l,A,o,k.callable,k.delegationSelector)}},trigger(l,c,t){if(typeof c!="string"||!l)return null;const d=r.getjQuery(),e=N(c),p=c!==e;let o=null,m=!0,A=!0,_=!1;p&&d&&(o=d.Event(c,t),d(l).trigger(o),m=!o.isPropagationStopped(),A=!o.isImmediatePropagationStopped(),_=o.isDefaultPrevented());const y=O(new Event(c,{bubbles:m,cancelable:!0}),t);return _&&y.preventDefault(),A&&l.dispatchEvent(y),y.defaultPrevented&&o&&o.preventDefault(),y}};function O(l,c={}){for(const[t,d]of Object.entries(c))try{l[t]=d}catch{Object.defineProperty(l,t,{configurable:!0,get(){return d}})}return l}return $})}(W)),W.exports}var z={exports:{}},Q={exports:{}};/*!
  * Bootstrap manipulator.js v5.3.5 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Pt=Q.exports,ft;function jt(){return ft||(ft=1,function(b,g){(function(r,a){b.exports=a()})(Pt,function(){function r(s){if(s==="true")return!0;if(s==="false")return!1;if(s===Number(s).toString())return Number(s);if(s===""||s==="null")return null;if(typeof s!="string")return s;try{return JSON.parse(decodeURIComponent(s))}catch{return s}}function a(s){return s.replace(/[A-Z]/g,n=>`-${n.toLowerCase()}`)}return{setDataAttribute(s,n,i){s.setAttribute(`data-bs-${a(n)}`,i)},removeDataAttribute(s,n){s.removeAttribute(`data-bs-${a(n)}`)},getDataAttributes(s){if(!s)return{};const n={},i=Object.keys(s.dataset).filter(E=>E.startsWith("bs")&&!E.startsWith("bsConfig"));for(const E of i){let h=E.replace(/^bs/,"");h=h.charAt(0).toLowerCase()+h.slice(1),n[h]=r(s.dataset[E])}return n},getDataAttribute(s,n){return r(s.getAttribute(`data-bs-${a(n)}`))}}})}(Q)),Q.exports}/*!
  * Bootstrap config.js v5.3.5 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Bt=z.exports,gt;function Ft(){return gt||(gt=1,function(b,g){(function(r,a){b.exports=a(jt(),H())})(Bt,function(r,a){class u{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(n){return n=this._mergeConfigObj(n),n=this._configAfterMerge(n),this._typeCheckConfig(n),n}_configAfterMerge(n){return n}_mergeConfigObj(n,i){const E=a.isElement(i)?r.getDataAttribute(i,"config"):{};return{...this.constructor.Default,...typeof E=="object"?E:{},...a.isElement(i)?r.getDataAttributes(i):{},...typeof n=="object"?n:{}}}_typeCheckConfig(n,i=this.constructor.DefaultType){for(const[E,h]of Object.entries(i)){const v=n[E],C=a.isElement(v)?"element":a.toType(v);if(!new RegExp(h).test(C))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${E}" provided type "${C}" but expected type "${h}".`)}}}return u})}(z)),z.exports}/*!
  * Bootstrap base-component.js v5.3.5 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Ht=U.exports,ht;function Yt(){return ht||(ht=1,function(b,g){(function(r,a){b.exports=a(It(),xt(),Ft(),H())})(Ht,function(r,a,u,s){const n="5.3.5";class i extends u{constructor(h,v){super(),h=s.getElement(h),h&&(this._element=h,this._config=this._getConfig(v),r.set(this._element,this.constructor.DATA_KEY,this))}dispose(){r.remove(this._element,this.constructor.DATA_KEY),a.off(this._element,this.constructor.EVENT_KEY);for(const h of Object.getOwnPropertyNames(this))this[h]=null}_queueCallback(h,v,C=!0){s.executeAfterTransition(h,v,C)}_getConfig(h){return h=this._mergeConfigObj(h,this._element),h=this._configAfterMerge(h),this._typeCheckConfig(h),h}static getInstance(h){return r.get(s.getElement(h),this.DATA_KEY)}static getOrCreateInstance(h,v={}){return this.getInstance(h)||new this(h,typeof v=="object"?v:null)}static get VERSION(){return n}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(h){return`${h}${this.EVENT_KEY}`}}return i})}(U)),U.exports}var G={exports:{}};/*!
  * Bootstrap selector-engine.js v5.3.5 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Kt=G.exports,mt;function Ut(){return mt||(mt=1,function(b,g){(function(r,a){b.exports=a(H())})(Kt,function(r){const a=s=>{let n=s.getAttribute("data-bs-target");if(!n||n==="#"){let i=s.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),n=i&&i!=="#"?i.trim():null}return n?n.split(",").map(i=>r.parseSelector(i)).join(","):null},u={find(s,n=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(n,s))},findOne(s,n=document.documentElement){return Element.prototype.querySelector.call(n,s)},children(s,n){return[].concat(...s.children).filter(i=>i.matches(n))},parents(s,n){const i=[];let E=s.parentNode.closest(n);for(;E;)i.push(E),E=E.parentNode.closest(n);return i},prev(s,n){let i=s.previousElementSibling;for(;i;){if(i.matches(n))return[i];i=i.previousElementSibling}return[]},next(s,n){let i=s.nextElementSibling;for(;i;){if(i.matches(n))return[i];i=i.nextElementSibling}return[]},focusableChildren(s){const n=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(i=>`${i}:not([tabindex^="-"])`).join(",");return this.find(n,s).filter(i=>!r.isDisabled(i)&&r.isVisible(i))},getSelectorFromElement(s){const n=a(s);return n&&u.findOne(n)?n:null},getElementFromSelector(s){const n=a(s);return n?u.findOne(n):null},getMultipleElementsFromSelector(s){const n=a(s);return n?u.find(n):[]}};return u})}(G)),G.exports}/*!
  * Bootstrap tab.js v5.3.5 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Vt=K.exports,bt;function Wt(){return bt||(bt=1,function(b,g){(function(r,a){b.exports=a(Yt(),xt(),Ut(),H())})(Vt,function(r,a,u,s){const n="tab",E=".bs.tab",h=`hide${E}`,v=`hidden${E}`,C=`show${E}`,R=`shown${E}`,P=`click${E}`,M=`keydown${E}`,T=`load${E}`,D="ArrowLeft",S="ArrowRight",q="ArrowUp",N="ArrowDown",$="Home",O="End",l="active",c="fade",t="show",d="dropdown",e=".dropdown-toggle",p=".dropdown-menu",o=`:not(${e})`,m='.list-group, .nav, [role="tablist"]',A=".nav-item, .list-group-item",_=`.nav-link${o}, .list-group-item${o}, [role="tab"]${o}`,y='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',L=`${_}, ${y}`,k=`.${l}[data-bs-toggle="tab"], .${l}[data-bs-toggle="pill"], .${l}[data-bs-toggle="list"]`;class I extends r{constructor(f){super(f),this._parent=this._element.closest(m),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),a.on(this._element,M,w=>this._keydown(w)))}static get NAME(){return n}show(){const f=this._element;if(this._elemIsActive(f))return;const w=this._getActiveElem(),x=w?a.trigger(w,h,{relatedTarget:f}):null;a.trigger(f,C,{relatedTarget:w}).defaultPrevented||x&&x.defaultPrevented||(this._deactivate(w,f),this._activate(f,w))}_activate(f,w){if(!f)return;f.classList.add(l),this._activate(u.getElementFromSelector(f));const x=()=>{if(f.getAttribute("role")!=="tab"){f.classList.add(t);return}f.removeAttribute("tabindex"),f.setAttribute("aria-selected",!0),this._toggleDropDown(f,!0),a.trigger(f,R,{relatedTarget:w})};this._queueCallback(x,f,f.classList.contains(c))}_deactivate(f,w){if(!f)return;f.classList.remove(l),f.blur(),this._deactivate(u.getElementFromSelector(f));const x=()=>{if(f.getAttribute("role")!=="tab"){f.classList.remove(t);return}f.setAttribute("aria-selected",!1),f.setAttribute("tabindex","-1"),this._toggleDropDown(f,!1),a.trigger(f,v,{relatedTarget:w})};this._queueCallback(x,f,f.classList.contains(c))}_keydown(f){if(![D,S,q,N,$,O].includes(f.key))return;f.stopPropagation(),f.preventDefault();const w=this._getChildren().filter(B=>!s.isDisabled(B));let x;if([$,O].includes(f.key))x=w[f.key===$?0:w.length-1];else{const B=[S,N].includes(f.key);x=s.getNextActiveElement(w,f.target,B,!0)}x&&(x.focus({preventScroll:!0}),I.getOrCreateInstance(x).show())}_getChildren(){return u.find(L,this._parent)}_getActiveElem(){return this._getChildren().find(f=>this._elemIsActive(f))||null}_setInitialAttributes(f,w){this._setAttributeIfNotExists(f,"role","tablist");for(const x of w)this._setInitialAttributesOnChild(x)}_setInitialAttributesOnChild(f){f=this._getInnerElement(f);const w=this._elemIsActive(f),x=this._getOuterElement(f);f.setAttribute("aria-selected",w),x!==f&&this._setAttributeIfNotExists(x,"role","presentation"),w||f.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(f,"role","tab"),this._setInitialAttributesOnTargetPanel(f)}_setInitialAttributesOnTargetPanel(f){const w=u.getElementFromSelector(f);w&&(this._setAttributeIfNotExists(w,"role","tabpanel"),f.id&&this._setAttributeIfNotExists(w,"aria-labelledby",`${f.id}`))}_toggleDropDown(f,w){const x=this._getOuterElement(f);if(!x.classList.contains(d))return;const B=(Dt,Nt)=>{const ct=u.findOne(Dt,x);ct&&ct.classList.toggle(Nt,w)};B(e,l),B(p,t),x.setAttribute("aria-expanded",w)}_setAttributeIfNotExists(f,w,x){f.hasAttribute(w)||f.setAttribute(w,x)}_elemIsActive(f){return f.classList.contains(l)}_getInnerElement(f){return f.matches(L)?f:u.findOne(L,f)}_getOuterElement(f){return f.closest(A)||f}static jQueryInterface(f){return this.each(function(){const w=I.getOrCreateInstance(this);if(typeof f=="string"){if(w[f]===void 0||f.startsWith("_")||f==="constructor")throw new TypeError(`No method named "${f}"`);w[f]()}})}}return a.on(document,P,y,function(j){["A","AREA"].includes(this.tagName)&&j.preventDefault(),!s.isDisabled(this)&&I.getOrCreateInstance(this).show()}),a.on(window,T,()=>{for(const j of u.find(k))I.getOrCreateInstance(j)}),s.defineJQueryPlugin(I),I})}(K)),K.exports}Wt();class zt extends HTMLElement{constructor(){super()}connectedCallback(){let g=this.getAttribute("path");g==null&&(g=""),this.innerHTML=`
        <footer class="footerBancoppel">
            <div class="custom-container">
                <a href="https://www.bancoppel.com/main/index.html" target="_blank" rel='noopener noreferrer' id="link-logo">
                    <picture class="logo">
                        <img src="${g}img/logo-blanco-2025.png" alt="Logo BanCoppel" class="logo-bancoppel-footer" />
                    </picture>
        
                </a>
        
                <div class="row">
                    <div class="col-12 col-xl-4" id="col-acerca">
                        <div class="footerBancoppel--acordeon">
        
                            <h3 class="accordion-button collapsed" data-bs-target="#accordion-acerca" data-bs-toggle="collapse" aria-expanded="false">Acerca de BanCoppel</h3>
        
                            <div id="accordion-acerca" class="accordion-collapse collapse">
                                <ul>
                                    <li><a href="https://www.bancoppel.com/acerca_bancoppel/quienes_somos.html?v=2" data-name="¿Quiénes somos?">¿Quiénes somos?</a></li>
        
                                    <li><a href="https://www.bancoppel.com/acerca_bancoppel/info_corp.html?v=2" data-name="Información Corporativa">Información Corporativa</a></li>
        
                                    <li><a href="http://www.bancoppel.com/imagenes/1001/pdf.php?id=4836a6a5" data-name="Costos y comisiones">Costos y comisiones</a></li>
        
                                    <li><a href="https://www.bancoppel.com/pdf/unidad_especializada_bancoppel_condusef.pdf" data-name="Unidad Especializada de Atención a Usuarios (UNE) BanCoppel">Unidad Especializada de Atención a Usuarios (UNE) BanCoppel</a></li>
        
                                    <li><a href="https://www.bancoppel.com/acerca_bancoppel/despachos_cobranza.html" data-name="Despachos de cobranza">Despachos de cobranza</a></li>
        
                                    <li><a href="https://www.bancoppel.com/acerca_bancoppel/ipab.html" data-name="Productos garantizados por el IPAB">Productos garantizados por el IPAB</a></li>
        
                                    <li><a href="https://www.bancoppelapimarket.com/" data-name="API Market">API Market</a></li>
        
                                    <li><a href="https://mejoratusfinanzas.mx/" data-name="Educación Financiera">Educación Financiera</a></li>
        
                                    <li><a href="https://www.bancoppel.com/pdf/aviso_robo_de_identidad.pdf" data-name="Robo de Identidad">Robo de Identidad</a></li>
        
        
                                </ul>
                            </div>
        
                        </div>
        
                    </div>
        
                    <div class="col-12 col-xl-4" id="col-corresponsal">
                        <ul>
                            <li><a href="https://www.bancoppel.com/corresponsales/index.html?v=2" data-name="Corresponsales">Corresponsales</a></li>
        
                            <li><a href="https://www.bancoppel.com/preguntas_frecuentes/" data-name="Centro de ayuda">Centro de ayuda</a></li>
        
                            <li><a href="https://www.bancoppel.com/geolocalizacion/index.html" data-name="Sucursales y cajeros">Sucursales y cajeros</a></li>
                        </ul>
        
                    </div>
                    <div class="col-12 col-xl-4" id="col-contacto">
                        <h3>Contacto</h3>
        
                        <ul>
                            <li>
                                Lada sin costo en México<br />
                                <a href="tel:8001226773" rel="noopener noreferrer" target="_blank" data-name="Lada sin costo en México"> 800 122 6773 </a>
                            </li>
                            <li>
                                Desde Estados Unidos y Canadá<br />
                                <a href="tel:8662543790" target="_blank" rel="noopener noreferrer" data-name="Estados Unidos y Canadá">866 254 3790</a>
                            </li>
                        </ul>
                        <div class="footerBancoppel--socials">
                            <a href="https://www.facebook.com/BanCoppel/" target="_blank" rel='noopener noreferrer' data-name="Facebook">
                                <picture>
                                    <img src="${g}img/icon-facebook.png" title="Facebook" alt="Logo Facebook" id="link-fb" />
                                </picture>
                            </a>
        
                            <a href="https://www.linkedin.com/company/bancoppel/" target="_blank" rel='noopener noreferrer' data-name="Linkedin">
                                <picture>
                                    <img src="${g}img/icon-linkedin.png" title="Linkedin" alt="Logo Linkedin" id="link-linkedin" />
                                </picture>
                            </a>
        
                            <a href="https://www.youtube.com/channel/UCiLO44Yr96fpdkv-ZN-duqg" target="_blank" rel='noopener noreferrer' data-name="Youtube">
                                <picture>
                                    <img src="${g}img/icon-youtube.png" title="Youtube" alt="Logo Youtube" id="link-youtube" />
                                </picture>
                            </a>
        
                            <a href="https://wa.me/5215530559922" target="_blank" rel='noopener noreferrer' data-name="Whatsapp">
                                <picture>
                                    <img src="${g}img/whatsapp.png" title="Whatsapp" alt="Logo wa" id="link-wa" />
                                </picture>
                            </a>
        
                            <a href="https://www.tiktok.com/@bancoppel" target="_blank" rel='noopener noreferrer' data-name="Tiktok">
                                <picture>
                                    <img src="${g}img/icon-tiktok.png" title="Tiktok" alt="Logo tiktok" id="link-tiktok" />
                                </picture>
                            </a>
        
                        </div>
                        <div class="footerBancoppel--sponsors">
        
        
                            <a data-bs-target="#modal-salida" data-bs-toggle="modal" data-bs-dismiss="modal" data-link="https://www.gob.mx/ipab" data-id-boton="btn-modal-coppel" data-name="IPAB">
                                <picture>
                                    <img src="${g}img/logo-ipab.png" alt="Logo IPAB" />
                                </picture>
                            </a>
                            <a href="https://www.bancoppel.com/modal_bcopp/buro.html" target="_blank" rel='noopener noreferrer' data-name="Buro">
                                <picture>
                                    <img src="${g}img/buro.png" alt="Logo Bur" />
                                </picture>
                            </a>
                        </div>
                    </div>
        
                </div>
            </div>
            <div class="container-fluid footerBancoppel--legales">
                <div class="custom-container">
                    <div class="col-12 footerBancoppel--legales--conoce">
                        <div class="footerBancoppel--legales--conoce-info">
        
                            <h4><strong>Conoce más de las empresas del Grupo empresarial Coppel</strong></h4>
                            <p>"Afore Coppel S.A. de C.V., BanCoppel S.A. Institución de Banca Múltiple, Fundación Coppel A.C. y Coppel S.A. de C.V. son personas morales distintas e independientes entre sí, así como de cualquiera de sus negocios asociados o vinculados".</p>
        
                        </div>
        
                        <div class="footerBancoppel--legales--logos">
                            <a href="https://www.fundacioncoppel.org/" target="_blank" rel="noopener noreferrer" id="link-fundacion">
                                <picture>
        
                                    <img class="logo-fundacion" src="${g}img/footer-fundacion.png" alt="">
                                </picture>
                            </a>
        
                            <a id="link-coppel" data-bs-target="#modal-salida" data-bs-toggle="modal" data-bs-dismiss="modal" data-link="https://www.coppel.com/" data-id-boton="btn-modal-coppel" data-name="Coppel.com">
                                <picture>
                                    <img src="${g}img/logo-coppel-2025.png" alt="">
                                </picture>
                            </a>
        
                            <a id="link-afore" data-bs-target="#modal-salida" data-bs-toggle="modal" data-bs-dismiss="modal" data-link="https://aforecoppel.com/" data-id-boton="btn-modal-afore-coppel" data-name="Afore Coppel">
                                <picture>
                                    <img src="${g}img/logo-afore-2025.png" alt="">
                                </picture>
        
                            </a>
                        </div>
                    </div>
        
                    <div class="col-12 footerBancoppel--legales--copy">
                        <p>Consulta costos y comisiones de nuestros productos más destacados:
                            <a href="https://www.bancoppel.com/personas/tarjeta-de-credito-gratis/" target="_blank" rel="noopener noreferrer">Solicita tu Tarjeta de Crédito BanCoppel</a>
        
                            <a href="https://www.bancoppel.com/personas/tarjeta-de-credito-en-linea/" target="_blank" rel="noopener noreferrer">Tramita tu Tarjeta de Crédito BanCoppel en línea</a>
        
                            <a href="https://www.bancoppel.com/personas/credito-bancoppel/" target="_blank" rel="noopener noreferrer">Pide tu Crédito BanCoppel</a>
        
                            <a href="https://www.bancoppel.com/personas/credito-bancario/" target="_blank" rel="noopener noreferrer">Comienza tu vida crediticia</a>
                        </p>
        
                        <p>
                            <a href="https://www.bancoppel.com/acerca_bancoppel/terminos.html" target="_blank" rel="noopener noreferrer">Términos y Condiciones de Uso</a>
        
                            <a href="https://www.bancoppel.com/acerca_bancoppel/aviso.html" target="_blank" rel="noopener noreferrer"> Aviso de Privacidad</a>
        
                            <a href="https://www.bancoppel.com/acerca_bancoppel/mapa.html" target="_blank" rel="noopener noreferrer"> Mapa de sitio</a>
        
                            <a href="https://www.bancoppel.com/acerca_bancoppel/repositorio-historico.html" target="_blank" rel="noopener noreferrer"> Repositorio Histórico</a>
                        </p>
        
                        <h4 id="copyright"><strong>Copyrigth 2022 Bancoppel S.A Institución de Banca Múltiple - Todos los derechos reservados</strong><br><a href="https://www.bancoppel.com/imagenes/1001/pdf.php?id=4836a6a5">Consulta los costos y las comisiones de nuestros productos</a></h4>
                    </div>
                </div>
            </div>
        
        </footer>
        `}}window.customElements.define("custom-footer",zt);const Z=window.matchMedia("(max-width:1279px)"),Lt=()=>{const b=document.querySelectorAll(".footerBancoppel .accordion-button");if(Z.matches===!0)for(const g of b)g.setAttribute("data-bs-toggle","collapse");else if(Z.matches===!1)for(const g of b)g.setAttribute("data-bs-toggle","")};Z.addListener(Lt);Lt();const Qt=document.querySelectorAll("#col-acerca a");for(const b of Qt)b.addEventListener("click",()=>{let g=b.getAttribute("data-name");dataLayer.push({nd1:"Menu inferior",nd2:"Acerca de Bancoppel",nd3:g,nd4:"",event:"clicMenuInferior"})});const Gt=document.querySelectorAll("#col-corresponsal a");for(const b of Gt)b.addEventListener("click",()=>{let g=b.getAttribute("data-name");dataLayer.push({nd1:"Menu inferior",nd2:"Acerca de Bancoppel",nd3:g,nd4:"",event:"clicMenuInferior"})});const Jt=document.querySelectorAll("#col-contacto a");for(const b of Jt)b.addEventListener("click",()=>{let g=b.getAttribute("data-name");dataLayer.push({nd1:"Menu inferior",nd2:"Contacto",nd3:g,nd4:"",event:"clicMenuInferior"})});const Zt=document.querySelectorAll(".footerBancoppel--legales--copy a");for(const b of Zt)b.addEventListener("click",()=>{let g=b.innerText;dataLayer.push({nd1:"Menu inferior",nd2:"Conoce más de las empresas",nd3:g,nd4:"",event:"clicMenuInferior"})});const Xt=document.querySelector("#link-fundacion");Xt.addEventListener("click",()=>{dataLayer.push({nd1:"Menu inferior",nd2:"Conoce más de las empresas",nd3:"Fundación Coppel",nd4:"",event:"clicMenuInferior"})});const te=document.querySelector("#link-coppel");te.addEventListener("click",()=>{dataLayer.push({nd1:"Menu inferior",nd2:"Conoce más de las empresas",nd3:"Coppel.com",nd4:"",event:"clicMenuInferior"})});const ee=document.querySelector("#link-afore");ee.addEventListener("click",()=>{dataLayer.push({nd1:"Menu inferior",nd2:"Conoce más de las empresas",nd3:"Afore Coppel",nd4:"",event:"clicMenuInferior"})});var X={exports:{}},tt={exports:{}},et={exports:{}};/*!
  * Bootstrap data.js v5.3.5 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ne=et.exports,Et;function oe(){return Et||(Et=1,function(b,g){(function(r,a){b.exports=a()})(ne,function(){const r=new Map;return{set(a,u,s){r.has(a)||r.set(a,new Map);const n=r.get(a);if(!n.has(u)&&n.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`);return}n.set(u,s)},get(a,u){return r.has(a)&&r.get(a).get(u)||null},remove(a,u){if(!r.has(a))return;const s=r.get(a);s.delete(u),s.size===0&&r.delete(a)}}})}(et)),et.exports}var nt={exports:{}},J={exports:{}};/*!
  * Bootstrap index.js v5.3.5 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var re=J.exports,At;function Y(){return At||(At=1,function(b,g){(function(r,a){a(g)})(re,function(r){const a="transitionend",u=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,(d,e)=>`#${CSS.escape(e)}`)),t),s=t=>t==null?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),n=t=>{do t+=Math.floor(Math.random()*1e6);while(document.getElementById(t));return t},i=t=>{if(!t)return 0;let{transitionDuration:d,transitionDelay:e}=window.getComputedStyle(t);const p=Number.parseFloat(d),o=Number.parseFloat(e);return!p&&!o?0:(d=d.split(",")[0],e=e.split(",")[0],(Number.parseFloat(d)+Number.parseFloat(e))*1e3)},E=t=>{t.dispatchEvent(new Event(a))},h=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u"),v=t=>h(t)?t.jquery?t[0]:t:typeof t=="string"&&t.length>0?document.querySelector(u(t)):null,C=t=>{if(!h(t)||t.getClientRects().length===0)return!1;const d=getComputedStyle(t).getPropertyValue("visibility")==="visible",e=t.closest("details:not([open])");if(!e)return d;if(e!==t){const p=t.closest("summary");if(p&&p.parentNode!==e||p===null)return!1}return d},R=t=>!t||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")?!0:typeof t.disabled<"u"?t.disabled:t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false",P=t=>{if(!document.documentElement.attachShadow)return null;if(typeof t.getRootNode=="function"){const d=t.getRootNode();return d instanceof ShadowRoot?d:null}return t instanceof ShadowRoot?t:t.parentNode?P(t.parentNode):null},M=()=>{},T=t=>{t.offsetHeight},D=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,S=[],q=t=>{document.readyState==="loading"?(S.length||document.addEventListener("DOMContentLoaded",()=>{for(const d of S)d()}),S.push(t)):t()},N=()=>document.documentElement.dir==="rtl",$=t=>{q(()=>{const d=D();if(d){const e=t.NAME,p=d.fn[e];d.fn[e]=t.jQueryInterface,d.fn[e].Constructor=t,d.fn[e].noConflict=()=>(d.fn[e]=p,t.jQueryInterface)}})},O=(t,d=[],e=t)=>typeof t=="function"?t.call(...d):e,l=(t,d,e=!0)=>{if(!e){O(t);return}const p=i(d)+5;let o=!1;const m=({target:A})=>{A===d&&(o=!0,d.removeEventListener(a,m),O(t))};d.addEventListener(a,m),setTimeout(()=>{o||E(d)},p)},c=(t,d,e,p)=>{const o=t.length;let m=t.indexOf(d);return m===-1?!e&&p?t[o-1]:t[0]:(m+=e?1:-1,p&&(m=(m+o)%o),t[Math.max(0,Math.min(m,o-1))])};r.defineJQueryPlugin=$,r.execute=O,r.executeAfterTransition=l,r.findShadowRoot=P,r.getElement=v,r.getNextActiveElement=c,r.getTransitionDurationFromElement=i,r.getUID=n,r.getjQuery=D,r.isDisabled=R,r.isElement=h,r.isRTL=N,r.isVisible=C,r.noop=M,r.onDOMContentLoaded=q,r.parseSelector=u,r.reflow=T,r.toType=s,r.triggerTransitionEnd=E,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})})}(J,J.exports)),J.exports}/*!
  * Bootstrap event-handler.js v5.3.5 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ie=nt.exports,vt;function Tt(){return vt||(vt=1,function(b,g){(function(r,a){b.exports=a(Y())})(ie,function(r){const a=/[^.]*(?=\..*)\.|.*/,u=/\..*/,s=/::\d+$/,n={};let i=1;const E={mouseenter:"mouseover",mouseleave:"mouseout"},h=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function v(l,c){return c&&`${c}::${i++}`||l.uidEvent||i++}function C(l){const c=v(l);return l.uidEvent=c,n[c]=n[c]||{},n[c]}function R(l,c){return function t(d){return O(d,{delegateTarget:l}),t.oneOff&&$.off(l,d.type,c),c.apply(l,[d])}}function P(l,c,t){return function d(e){const p=l.querySelectorAll(c);for(let{target:o}=e;o&&o!==this;o=o.parentNode)for(const m of p)if(m===o)return O(e,{delegateTarget:o}),d.oneOff&&$.off(l,e.type,c,t),t.apply(o,[e])}}function M(l,c,t=null){return Object.values(l).find(d=>d.callable===c&&d.delegationSelector===t)}function T(l,c,t){const d=typeof c=="string",e=d?t:c||t;let p=N(l);return h.has(p)||(p=l),[d,e,p]}function D(l,c,t,d,e){if(typeof c!="string"||!l)return;let[p,o,m]=T(c,t,d);c in E&&(o=(I=>function(j){if(!j.relatedTarget||j.relatedTarget!==j.delegateTarget&&!j.delegateTarget.contains(j.relatedTarget))return I.call(this,j)})(o));const A=C(l),_=A[m]||(A[m]={}),y=M(_,o,p?t:null);if(y){y.oneOff=y.oneOff&&e;return}const L=v(o,c.replace(a,"")),k=p?P(l,t,o):R(l,o);k.delegationSelector=p?t:null,k.callable=o,k.oneOff=e,k.uidEvent=L,_[L]=k,l.addEventListener(m,k,p)}function S(l,c,t,d,e){const p=M(c[t],d,e);p&&(l.removeEventListener(t,p,!!e),delete c[t][p.uidEvent])}function q(l,c,t,d){const e=c[t]||{};for(const[p,o]of Object.entries(e))p.includes(d)&&S(l,c,t,o.callable,o.delegationSelector)}function N(l){return l=l.replace(u,""),E[l]||l}const $={on(l,c,t,d){D(l,c,t,d,!1)},one(l,c,t,d){D(l,c,t,d,!0)},off(l,c,t,d){if(typeof c!="string"||!l)return;const[e,p,o]=T(c,t,d),m=o!==c,A=C(l),_=A[o]||{},y=c.startsWith(".");if(typeof p<"u"){if(!Object.keys(_).length)return;S(l,A,o,p,e?t:null);return}if(y)for(const L of Object.keys(A))q(l,A,L,c.slice(1));for(const[L,k]of Object.entries(_)){const I=L.replace(s,"");(!m||c.includes(I))&&S(l,A,o,k.callable,k.delegationSelector)}},trigger(l,c,t){if(typeof c!="string"||!l)return null;const d=r.getjQuery(),e=N(c),p=c!==e;let o=null,m=!0,A=!0,_=!1;p&&d&&(o=d.Event(c,t),d(l).trigger(o),m=!o.isPropagationStopped(),A=!o.isImmediatePropagationStopped(),_=o.isDefaultPrevented());const y=O(new Event(c,{bubbles:m,cancelable:!0}),t);return _&&y.preventDefault(),A&&l.dispatchEvent(y),y.defaultPrevented&&o&&o.preventDefault(),y}};function O(l,c={}){for(const[t,d]of Object.entries(c))try{l[t]=d}catch{Object.defineProperty(l,t,{configurable:!0,get(){return d}})}return l}return $})}(nt)),nt.exports}var ot={exports:{}},rt={exports:{}};/*!
  * Bootstrap manipulator.js v5.3.5 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var se=rt.exports,_t;function ae(){return _t||(_t=1,function(b,g){(function(r,a){b.exports=a()})(se,function(){function r(u){if(u==="true")return!0;if(u==="false")return!1;if(u===Number(u).toString())return Number(u);if(u===""||u==="null")return null;if(typeof u!="string")return u;try{return JSON.parse(decodeURIComponent(u))}catch{return u}}function a(u){return u.replace(/[A-Z]/g,s=>`-${s.toLowerCase()}`)}return{setDataAttribute(u,s,n){u.setAttribute(`data-bs-${a(s)}`,n)},removeDataAttribute(u,s){u.removeAttribute(`data-bs-${a(s)}`)},getDataAttributes(u){if(!u)return{};const s={},n=Object.keys(u.dataset).filter(i=>i.startsWith("bs")&&!i.startsWith("bsConfig"));for(const i of n){let E=i.replace(/^bs/,"");E=E.charAt(0).toLowerCase()+E.slice(1),s[E]=r(u.dataset[i])}return s},getDataAttribute(u,s){return r(u.getAttribute(`data-bs-${a(s)}`))}}})}(rt)),rt.exports}/*!
  * Bootstrap config.js v5.3.5 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var le=ot.exports,yt;function ce(){return yt||(yt=1,function(b,g){(function(r,a){b.exports=a(ae(),Y())})(le,function(r,a){class u{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(n){return n=this._mergeConfigObj(n),n=this._configAfterMerge(n),this._typeCheckConfig(n),n}_configAfterMerge(n){return n}_mergeConfigObj(n,i){const E=a.isElement(i)?r.getDataAttribute(i,"config"):{};return{...this.constructor.Default,...typeof E=="object"?E:{},...a.isElement(i)?r.getDataAttributes(i):{},...typeof n=="object"?n:{}}}_typeCheckConfig(n,i=this.constructor.DefaultType){for(const[E,h]of Object.entries(i)){const v=n[E],C=a.isElement(v)?"element":a.toType(v);if(!new RegExp(h).test(C))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${E}" provided type "${C}" but expected type "${h}".`)}}}return u})}(ot)),ot.exports}/*!
  * Bootstrap base-component.js v5.3.5 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ue=tt.exports,wt;function de(){return wt||(wt=1,function(b,g){(function(r,a){b.exports=a(oe(),Tt(),ce(),Y())})(ue,function(r,a,u,s){const n="5.3.5";class i extends u{constructor(h,v){super(),h=s.getElement(h),h&&(this._element=h,this._config=this._getConfig(v),r.set(this._element,this.constructor.DATA_KEY,this))}dispose(){r.remove(this._element,this.constructor.DATA_KEY),a.off(this._element,this.constructor.EVENT_KEY);for(const h of Object.getOwnPropertyNames(this))this[h]=null}_queueCallback(h,v,C=!0){s.executeAfterTransition(h,v,C)}_getConfig(h){return h=this._mergeConfigObj(h,this._element),h=this._configAfterMerge(h),this._typeCheckConfig(h),h}static getInstance(h){return r.get(s.getElement(h),this.DATA_KEY)}static getOrCreateInstance(h,v={}){return this.getInstance(h)||new this(h,typeof v=="object"?v:null)}static get VERSION(){return n}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(h){return`${h}${this.EVENT_KEY}`}}return i})}(tt)),tt.exports}var it={exports:{}};/*!
  * Bootstrap selector-engine.js v5.3.5 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var pe=it.exports,Ct;function fe(){return Ct||(Ct=1,function(b,g){(function(r,a){b.exports=a(Y())})(pe,function(r){const a=s=>{let n=s.getAttribute("data-bs-target");if(!n||n==="#"){let i=s.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),n=i&&i!=="#"?i.trim():null}return n?n.split(",").map(i=>r.parseSelector(i)).join(","):null},u={find(s,n=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(n,s))},findOne(s,n=document.documentElement){return Element.prototype.querySelector.call(n,s)},children(s,n){return[].concat(...s.children).filter(i=>i.matches(n))},parents(s,n){const i=[];let E=s.parentNode.closest(n);for(;E;)i.push(E),E=E.parentNode.closest(n);return i},prev(s,n){let i=s.previousElementSibling;for(;i;){if(i.matches(n))return[i];i=i.previousElementSibling}return[]},next(s,n){let i=s.nextElementSibling;for(;i;){if(i.matches(n))return[i];i=i.nextElementSibling}return[]},focusableChildren(s){const n=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(i=>`${i}:not([tabindex^="-"])`).join(",");return this.find(n,s).filter(i=>!r.isDisabled(i)&&r.isVisible(i))},getSelectorFromElement(s){const n=a(s);return n&&u.findOne(n)?n:null},getElementFromSelector(s){const n=a(s);return n?u.findOne(n):null},getMultipleElementsFromSelector(s){const n=a(s);return n?u.find(n):[]}};return u})}(it)),it.exports}/*!
  * Bootstrap collapse.js v5.3.5 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ge=X.exports,kt;function he(){return kt||(kt=1,function(b,g){(function(r,a){b.exports=a(de(),Tt(),fe(),Y())})(ge,function(r,a,u,s){const n="collapse",i=".bs.collapse",E=".data-api",h=`show${i}`,v=`shown${i}`,C=`hide${i}`,R=`hidden${i}`,P=`click${i}${E}`,M="show",T="collapse",D="collapsing",S="collapsed",q=`:scope .${T} .${T}`,N="collapse-horizontal",$="width",O="height",l=".collapse.show, .collapse.collapsing",c='[data-bs-toggle="collapse"]',t={parent:null,toggle:!0},d={parent:"(null|element)",toggle:"boolean"};class e extends r{constructor(o,m){super(o,m),this._isTransitioning=!1,this._triggerArray=[];const A=u.find(c);for(const _ of A){const y=u.getSelectorFromElement(_),L=u.find(y).filter(k=>k===this._element);y!==null&&L.length&&this._triggerArray.push(_)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return t}static get DefaultType(){return d}static get NAME(){return n}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let o=[];if(this._config.parent&&(o=this._getFirstLevelChildren(l).filter(y=>y!==this._element).map(y=>e.getOrCreateInstance(y,{toggle:!1}))),o.length&&o[0]._isTransitioning||a.trigger(this._element,h).defaultPrevented)return;for(const y of o)y.hide();const m=this._getDimension();this._element.classList.remove(T),this._element.classList.add(D),this._element.style[m]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const A=()=>{this._isTransitioning=!1,this._element.classList.remove(D),this._element.classList.add(T,M),this._element.style[m]="",a.trigger(this._element,v)},_=`scroll${m[0].toUpperCase()+m.slice(1)}`;this._queueCallback(A,this._element,!0),this._element.style[m]=`${this._element[_]}px`}hide(){if(this._isTransitioning||!this._isShown()||a.trigger(this._element,C).defaultPrevented)return;const o=this._getDimension();this._element.style[o]=`${this._element.getBoundingClientRect()[o]}px`,s.reflow(this._element),this._element.classList.add(D),this._element.classList.remove(T,M);for(const A of this._triggerArray){const _=u.getElementFromSelector(A);_&&!this._isShown(_)&&this._addAriaAndCollapsedClass([A],!1)}this._isTransitioning=!0;const m=()=>{this._isTransitioning=!1,this._element.classList.remove(D),this._element.classList.add(T),a.trigger(this._element,R)};this._element.style[o]="",this._queueCallback(m,this._element,!0)}_isShown(o=this._element){return o.classList.contains(M)}_configAfterMerge(o){return o.toggle=!!o.toggle,o.parent=s.getElement(o.parent),o}_getDimension(){return this._element.classList.contains(N)?$:O}_initializeChildren(){if(!this._config.parent)return;const o=this._getFirstLevelChildren(c);for(const m of o){const A=u.getElementFromSelector(m);A&&this._addAriaAndCollapsedClass([m],this._isShown(A))}}_getFirstLevelChildren(o){const m=u.find(q,this._config.parent);return u.find(o,this._config.parent).filter(A=>!m.includes(A))}_addAriaAndCollapsedClass(o,m){if(o.length)for(const A of o)A.classList.toggle(S,!m),A.setAttribute("aria-expanded",m)}static jQueryInterface(o){const m={};return typeof o=="string"&&/show|hide/.test(o)&&(m.toggle=!1),this.each(function(){const A=e.getOrCreateInstance(this,m);if(typeof o=="string"){if(typeof A[o]>"u")throw new TypeError(`No method named "${o}"`);A[o]()}})}}return a.on(document,P,c,function(p){(p.target.tagName==="A"||p.delegateTarget&&p.delegateTarget.tagName==="A")&&p.preventDefault();for(const o of u.getMultipleElementsFromSelector(this))e.getOrCreateInstance(o,{toggle:!1}).toggle()}),s.defineJQueryPlugin(e),e})}(X)),X.exports}he();class me extends HTMLElement{constructor(){super()}connectedCallback(){let g=this.getAttribute("title"),r=this.getAttribute("content"),a=crypto.randomUUID(),u=this.closest(".accordion").id;this.innerHTML=`
                <div class="accordion-item">
                    <h2 class="accordion-button collapsed" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#accordion-${a}">
                        ${g}
                    </h2>
                    <div id="accordion-${a}" class="accordion-collapse collapse" data-bs-parent="#${u}"><p>
                        ${r}
                        </p>
                    </div>
                </div>
                `}attributeChangesCallback(g,r,a){}static get observedAttributes(){}}class be extends HTMLElement{constructor(){super()}connectedCallback(){let g=this.getAttribute("icono"),r=this.getAttribute("titulo-alert"),a=this.getAttribute("texto-alert"),u=this.getAttribute("variante");this.innerHTML=`
          <div class="col-12 col-lg-10 col-xl-8 alert--card ${u||""}">
                <picture class="alert--image">
                    <img src="${g}" alt="Icono Idea" />
                </picture>
                
                <div class="contenido">
                    ${r==null?"":'<h4 class="strong-circular">${titulo}</h4>'}
                    ${a}
                </div>
            </div>
        `}}class Ee extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}set onClick(g){if(typeof g!="function"){console.warn("El manejador debe ser una función.");return}this.removeEventListener("click",this._eventHandler),this._eventHandler=g,this.addEventListener("click",this._eventHandler)}render(){let g=this.getAttribute("id-boton");const r=this.getAttribute("texto-boton"),a=this.getAttribute("variante")||this.getAttribute("tipo"),u=this.getAttribute("icono");g==null&&(g=""),this.innerHTML=`
      
         ${u==null?'<button class="btn '+a+'" id="'+g+'">'+r+"</buton>":'<button class="btn '+a+'" id="'+g+'">'+r+"</buton><img src='"+u+"'></img>"}`,this.querySelector("button").classList.contains("inactivo")?this.querySelector("button").setAttribute("disabled",!0):this.querySelector("button").removeAttribute("disabled")}}class Ae extends HTMLElement{constructor(){super()}connectedCallback(){let g=this.getAttribute("variante"),r=this.getAttribute("alineacion"),a=this.getAttribute("flujo"),u=this.getAttribute("icono"),s=this.getAttribute("titulo-card"),n=this.getAttribute("contenido-card"),i=this.getAttribute("link-card"),E=this.getAttribute("texto-link"),h=this.getAttribute("target-link"),v=this.getAttribute("link-modal"),C=this.getAttribute("data-id");r==""&&(r="start"),a==""&&(a="fila"),this.innerHTML=`        
			<div class="card card-icon ${g} ${r} ${a}">
				<picture>
					<img src="${u}" alt="" />
				</picture>
			
			    <div class="contenido">
                    ${a&&s?"<h5>"+s+"</h5>":""}
                
			
                    ${n==null?"":"<p>"+n+"</p>"} 
                    
                    ${E==null?"":h!=null?'<a id="'+C+'" class="link-icon" href="'+i+'" target="'+h+'" rel="noopener noreferrer">'+E+"</a></div>":i=="#modal-salida"?'<a id="'+C+'" class="link-icon" data-bs-target="'+i+'" data-bs-toggle="modal" data-bs-dismiss="modal" data-link="'+v+'" >'+E+"</a>":'<a id="'+C+'" class="link-icon" href="'+i+'">'+E+"</a></div>"} 
                </div>
		`}}class ve extends HTMLElement{constructor(){super()}connectedCallback(){let g=this.getAttribute("titulo"),r=this.getAttribute("subtitulo"),a=this.getAttribute("texto-boton"),u=this.getAttribute("link-boton"),s=this.getAttribute("target-link"),n=this.getAttribute("link-salida"),i=this.getAttribute("id-boton"),E=this.getAttribute("imagen-mobile"),h=this.getAttribute("imagen-portrait"),v=this.getAttribute("imagen-desktop"),C=this.getAttribute("icon"),R=this.getAttribute("texto-badge");this.innerHTML=`
         
                <div class="hero"> 
                    <div class="hero--info">
                        <h1 class="title-underline">${g}</h1>
                        <p>${r}</p>
        
                        ${a==null?"":u.startsWith("http://")||u.startsWith("https://")?'<a href="'+u+'" target="'+s+'"  rel="noopener noreferrer"><custom-boton variante="secundario" texto-boton="'+a+'" id-boton="'+i+'"><custom-boton></a>':'<a class="btn-link-salida" data-bs-target="'+u+'" data-bs-toggle="modal" data-bs-dismiss="modal" data-link="'+n+'" data-id-boton="'+i+'" data-name="'+a+'"><custom-boton variante="secundario" texto-boton="'+a+'" id-boton="'+i+'"><custom-boton></a>'}

                    </div>
                    
                    <figure class="hero--img">
                        <picture class="hero--fondo">
                               
                                
                                 ${v==null?"":'<source srcset="'+v+'" media="(min-width:1279px)">'}
                                 ${h==null?"":'<source srcset="'+h+'" media="(min-width:767px)">'}
                                
                                <img
                                    class="w-100"
                                    src="${E}"
                                    alt="Imagen Hero" fetchpriority="high"
                                />
                            </picture>
                        
                        ${C==null?"":'<div class="hero--badge"><custom-badge icon="'+C+'" texto-badge="'+R+'"></custom-badge></div>'}    
                    </figure>
                    
                </div>
                
            
            `}}class _e extends HTMLElement{constructor(){super()}static get observedAttributes(){return["link-btn-salida"]}attributeChangedCallback(g,r,a){}connectedCallback(){this.addEventListener("shown.bs.modal",g=>{this.querySelector(".modal").style.display="flex";const r=g.relatedTarget.getAttribute("data-link");this.setAttribute("link-btn-salida",r),this.querySelector(".btn-modal-continuar").setAttribute("href",r);const a=g.relatedTarget.getAttribute("data-name");this.setAttribute("data-name",a),setTimeout(()=>{metricas.metrica6A(document.querySelector("#modal-salidaLabel").innerText,a)},200)}),this.render(),document.body.addEventListener("click",g=>{g.target.matches(".modal")&&metricas.metrica6D(document.querySelector("#modal-salidaLabel").innerText)}),this.querySelector("#btn-continuar-salida").addEventListener("click",()=>{metricas.metrica6B(document.querySelector("#modal-salidaLabel").innerText)}),this.querySelector("#modal-salida .btn-close").addEventListener("click",()=>{metricas.metrica6C(document.querySelector("#modal-salidaLabel").innerText)})}render(){let g=this.getAttribute("id-modal"),r=this.getAttribute("id-btn-salida"),a=this.getAttribute("link-btn-salida"),u=this.getAttribute("titulo-modal"),s=this.getAttribute("contenido-modal"),n=this.getAttribute("path");document.querySelectorAll("[data-bs-target='#modal-salida']").forEach(i=>{i.hasAttribute("data-titulo-modal")&&(u=i.getAttribute("data-titulo-modal")),i.hasAttribute("data-contenido-modal")&&(s=i.getAttribute("data-contenido-modal"))}),n=n??"",this.innerHTML=`
        <div
           class="modal fade"
           id="${g}"
           tabindex="-1"
           aria-labelledby="modal-salidaLabel"
       >
           <div class="modal-dialog">
               <div class="modal-body">
                   <button
                       type="button"
                       class="btn-close"
                       data-bs-dismiss="modal"
                       aria-label="Close"
                   ></button>
                   <h2 id="modal-salidaLabel">
                  ${u}
                           
                   </h2>
                   <p>
                       ${s}
                   </p>
                   <a
                       href="${a}"
                       class="btn-modal-continuar"
                       target="_blank"
                       rel="noopener noreferrer"
                       id="${r}"
                   >
                       <custom-boton  data-bs-dismiss="modal"
                           variante="secundario-icon"
                           texto-boton="Continuar"
                           icono="${n}img/chevrons.png" id-boton='btn-continuar-salida'
                       ></custom-boton
                   ></a>
               </div>
           </div>
       </div>

   `}}class ye extends HTMLElement{constructor(){super()}connectedCallback(){let g=this.getAttribute("texto-tooltip"),r=this.getAttribute("icono");this.innerHTML=`
             <div class="custom-tooltip">
                 <img
                    class="custom-tooltip--icon"
                    src="${r}"
                 />
                 <div class="custom-tooltip--content">
                    <p>${g}
                    </p>
                 </div>
              </div>`;const a=this.querySelector(".custom-tooltip--icon"),u=()=>{const s=a.getBoundingClientRect(),n=window.innerWidth/2;s.left<n?this.querySelector(".custom-tooltip").classList.add("left"):this.querySelector(".custom-tooltip").classList.remove("left")};window.addEventListener("resize",u),u()}}class we extends HTMLElement{constructor(){super()}connectedCallback(){let g=this.getAttribute("banner-mobile"),r=this.getAttribute("banner-desktop"),a=this.getAttribute("titulo-app"),u=this.getAttribute("contenido-app"),s=this.getAttribute("texto-boton-app");this.innerHTML=`
             <section class="app">
                <div class="section-wrapper">
                    <div class="custom-container">
                        <div class="row">
                            <div class="col-12 col-lg-10 col-xl-12 app--mockup">
                            <div class="img--container">

                                <picture class="image">
                                    <source
                                        media='(min-width:1280px)' srcset='${r}'
                                    />
                                    <source
                                        media='(min-width:768px)' srcset='${g}'
                                    />
                                    <img
                                        loading="lazy"                      
                                        srcset="${g}"
                                        alt="imagen App Bancoppel"
                                    />
                                </picture>

                                <picture class="qr">
                                    <img src="img/qr.jpg" loading="lazy">
                                </picture>

                                <custom-alert icono='img/icon-foco.png' texto-alert='Pon la cámara de tu celular frente al código QR para descargar la App.'></custom-alert>
                                
                            </div>
                            </div>
                        
                            <div class="col-12 col-lg-10 col-xl-6 app--info">
                                <div class='app--info--contenido'>
                                    <h2 class="title-underline">${a}</h2>
                                    <div>${u}</div>
                                </div>
                                
                                <a href="https://bancoppel.onelink.me/YK9R/pjxpkcjd" target="_blank" class="text-decoration-none" rel="noopener noreferrer" id='link-desc-app'><custom-boton variante="primario" texto-boton="${s}" id-boton='btn-app'></custom-boton></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `}}const st=window.matchMedia("(max-width:1279px)"),St=()=>{const b=document.querySelectorAll(".footerBancoppel .accordion-button");if(st.matches===!0)for(const g of b)g.setAttribute("data-bs-toggle","collapse");else if(st.matches===!1)for(const g of b)g.setAttribute("data-bs-toggle","")};st.addListener(St);St();const at=window.matchMedia("(max-width:1279px)"),$t=()=>{const b=document.querySelectorAll(".footerBancoppel .accordion-button");if(at.matches===!0)for(const g of b)g.setAttribute("data-bs-toggle","collapse");else if(at.matches===!1)for(const g of b)g.setAttribute("data-bs-toggle","")};at.addListener($t);$t();const lt=window.matchMedia("(max-width:1279px)"),Ot=()=>{const b=document.querySelectorAll(".footerBancoppel .accordion-button");if(lt.matches===!0)for(const g of b)g.setAttribute("data-bs-toggle","collapse");else if(lt.matches===!1)for(const g of b)g.setAttribute("data-bs-toggle","")};lt.addListener(Ot);Ot();customElements.define("custom-hero",ve);customElements.define("custom-card-icon",Ae);customElements.define("custom-boton",Ee);customElements.define("custom-tooltip",ye);customElements.define("custom-alert",be);customElements.define("custom-accordion",me);customElements.define("app-bancoppel",we);customElements.define("modal-salida",_e);
