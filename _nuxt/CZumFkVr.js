const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./amiT64oB.js","./TJmhZ0Py.js","./SMci92GT.js","./create.C8SjZR9j.css","./DICLOxM5.js","./index.DPHN4xaE.css","./DLSfAOFS.js","./login.DDcE7twK.css","./BkK4lIwS.js","./_id_.DrLFcv7a.css","./BZlBB3Q8.js","./search.C98hrwb5.css","./D_dKX9bf.js","./settings.DZlQTZ8C.css","./ShXXRfnw.js","./signup.C60Wb_YA.css","./ChiW-Fdi.js","./error-404.CoZKRZXM.css","./BuIR4lRC.js","./error-500.D6506J9O.css"])))=>i.map(i=>d[i]);
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Gh(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const De={},Us=[],vn=()=>{},IT=()=>!1,xo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Qh=t=>t.startsWith("onUpdate:"),Ze=Object.assign,Yh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},AT=Object.prototype.hasOwnProperty,Ce=(t,e)=>AT.call(t,e),he=Array.isArray,js=t=>No(t)==="[object Map]",k_=t=>No(t)==="[object Set]",RT=t=>No(t)==="[object RegExp]",pe=t=>typeof t=="function",He=t=>typeof t=="string",Dr=t=>typeof t=="symbol",Me=t=>t!==null&&typeof t=="object",O_=t=>(Me(t)||pe(t))&&pe(t.then)&&pe(t.catch),x_=Object.prototype.toString,No=t=>x_.call(t),ST=t=>No(t).slice(8,-1),N_=t=>No(t)==="[object Object]",Xh=t=>He(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Bs=Gh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},PT=/-(\w)/g,en=Vc(t=>t.replace(PT,(e,n)=>n?n.toUpperCase():"")),CT=/\B([A-Z])/g,Lr=Vc(t=>t.replace(CT,"-$1").toLowerCase()),Fc=Vc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Fl=Vc(t=>t?`on${Fc(t)}`:""),vr=(t,e)=>!Object.is(t,e),$s=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},D_=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Iu=t=>{const e=parseFloat(t);return isNaN(e)?t:e},L_=t=>{const e=He(t)?Number(t):NaN;return isNaN(e)?t:e};let dp;const Uc=()=>dp||(dp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function jc(t){if(he(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=He(r)?NT(r):jc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(He(t)||Me(t))return t}const kT=/;(?![^(]*\))/g,OT=/:([^]+)/,xT=/\/\*[^]*?\*\//g;function NT(t){const e={};return t.replace(xT,"").split(kT).forEach(n=>{if(n){const r=n.split(OT);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Do(t){let e="";if(He(t))e=t;else if(he(t))for(let n=0;n<t.length;n++){const r=Do(t[n]);r&&(e+=r+" ")}else if(Me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function DT(t){if(!t)return null;let{class:e,style:n}=t;return e&&!He(e)&&(t.class=Do(e)),n&&(t.style=jc(n)),t}const LT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",MT=Gh(LT);function M_(t){return!!t||t===""}const V_=t=>!!(t&&t.__v_isRef===!0),F_=t=>He(t)?t:t==null?"":he(t)||Me(t)&&(t.toString===x_||!pe(t.toString))?V_(t)?F_(t.value):JSON.stringify(t,U_,2):String(t),U_=(t,e)=>V_(e)?U_(t,e.value):js(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ul(r,i)+" =>"]=s,n),{})}:k_(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ul(n))}:Dr(e)?Ul(e):Me(e)&&!he(e)&&!N_(e)?String(e):e,Ul=(t,e="")=>{var n;return Dr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bt;class j_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Bt,!e&&Bt&&(this.index=(Bt.scopes||(Bt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Bt;try{return Bt=this,e()}finally{Bt=n}}}on(){Bt=this}off(){Bt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function VT(t){return new j_(t)}function B_(){return Bt}let Le;const jl=new WeakSet;class $_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Bt&&Bt.active&&Bt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,jl.has(this)&&(jl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||q_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,pp(this),z_(this);const e=Le,n=cn;Le=this,cn=!0;try{return this.fn()}finally{W_(this),Le=e,cn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ef(e);this.deps=this.depsTail=void 0,pp(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?jl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Au(this)&&this.run()}get dirty(){return Au(this)}}let H_=0,Qi,Yi;function q_(t,e=!1){if(t.flags|=8,e){t.next=Yi,Yi=t;return}t.next=Qi,Qi=t}function Jh(){H_++}function Zh(){if(--H_>0)return;if(Yi){let e=Yi;for(Yi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Qi;){let e=Qi;for(Qi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function z_(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function W_(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),ef(r),FT(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Au(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(K_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function K_(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ho))return;t.globalVersion=ho;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Au(t)){t.flags&=-3;return}const n=Le,r=cn;Le=t,cn=!0;try{z_(t);const s=t.fn(t._value);(e.version===0||vr(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Le=n,cn=r,W_(t),t.flags&=-3}}function ef(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)ef(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function FT(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let cn=!0;const G_=[];function Mr(){G_.push(cn),cn=!1}function Vr(){const t=G_.pop();cn=t===void 0?!0:t}function pp(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Le;Le=void 0;try{e()}finally{Le=n}}}let ho=0;class UT{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class tf{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Le||!cn||Le===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Le)n=this.activeLink=new UT(Le,this),Le.deps?(n.prevDep=Le.depsTail,Le.depsTail.nextDep=n,Le.depsTail=n):Le.deps=Le.depsTail=n,Q_(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Le.depsTail,n.nextDep=void 0,Le.depsTail.nextDep=n,Le.depsTail=n,Le.deps===n&&(Le.deps=r)}return n}trigger(e){this.version++,ho++,this.notify(e)}notify(e){Jh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Zh()}}}function Q_(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Q_(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ja=new WeakMap,es=Symbol(""),Ru=Symbol(""),fo=Symbol("");function vt(t,e,n){if(cn&&Le){let r=Ja.get(t);r||Ja.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new tf),s.map=r,s.key=n),s.track()}}function Nn(t,e,n,r,s,i){const o=Ja.get(t);if(!o){ho++;return}const a=l=>{l&&l.trigger()};if(Jh(),e==="clear")o.forEach(a);else{const l=he(t),u=l&&Xh(n);if(l&&n==="length"){const h=Number(r);o.forEach((d,m)=>{(m==="length"||m===fo||!Dr(m)&&m>=h)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(fo)),e){case"add":l?u&&a(o.get("length")):(a(o.get(es)),js(t)&&a(o.get(Ru)));break;case"delete":l||(a(o.get(es)),js(t)&&a(o.get(Ru)));break;case"set":js(t)&&a(o.get(es));break}}Zh()}function jT(t,e){const n=Ja.get(t);return n&&n.get(e)}function Rs(t){const e=Se(t);return e===t?e:(vt(e,"iterate",fo),Zt(t)?e:e.map(Et))}function Bc(t){return vt(t=Se(t),"iterate",fo),t}const BT={__proto__:null,[Symbol.iterator](){return Bl(this,Symbol.iterator,Et)},concat(...t){return Rs(this).concat(...t.map(e=>he(e)?Rs(e):e))},entries(){return Bl(this,"entries",t=>(t[1]=Et(t[1]),t))},every(t,e){return Pn(this,"every",t,e,void 0,arguments)},filter(t,e){return Pn(this,"filter",t,e,n=>n.map(Et),arguments)},find(t,e){return Pn(this,"find",t,e,Et,arguments)},findIndex(t,e){return Pn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Pn(this,"findLast",t,e,Et,arguments)},findLastIndex(t,e){return Pn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Pn(this,"forEach",t,e,void 0,arguments)},includes(...t){return $l(this,"includes",t)},indexOf(...t){return $l(this,"indexOf",t)},join(t){return Rs(this).join(t)},lastIndexOf(...t){return $l(this,"lastIndexOf",t)},map(t,e){return Pn(this,"map",t,e,void 0,arguments)},pop(){return Mi(this,"pop")},push(...t){return Mi(this,"push",t)},reduce(t,...e){return mp(this,"reduce",t,e)},reduceRight(t,...e){return mp(this,"reduceRight",t,e)},shift(){return Mi(this,"shift")},some(t,e){return Pn(this,"some",t,e,void 0,arguments)},splice(...t){return Mi(this,"splice",t)},toReversed(){return Rs(this).toReversed()},toSorted(t){return Rs(this).toSorted(t)},toSpliced(...t){return Rs(this).toSpliced(...t)},unshift(...t){return Mi(this,"unshift",t)},values(){return Bl(this,"values",Et)}};function Bl(t,e,n){const r=Bc(t),s=r[e]();return r!==t&&!Zt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const $T=Array.prototype;function Pn(t,e,n,r,s,i){const o=Bc(t),a=o!==t&&!Zt(t),l=o[e];if(l!==$T[e]){const d=l.apply(t,i);return a?Et(d):d}let u=n;o!==t&&(a?u=function(d,m){return n.call(this,Et(d),m,t)}:n.length>2&&(u=function(d,m){return n.call(this,d,m,t)}));const h=l.call(o,u,r);return a&&s?s(h):h}function mp(t,e,n,r){const s=Bc(t);let i=n;return s!==t&&(Zt(t)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,t)}):i=function(o,a,l){return n.call(this,o,Et(a),l,t)}),s[e](i,...r)}function $l(t,e,n){const r=Se(t);vt(r,"iterate",fo);const s=r[e](...n);return(s===-1||s===!1)&&sf(n[0])?(n[0]=Se(n[0]),r[e](...n)):s}function Mi(t,e,n=[]){Mr(),Jh();const r=Se(t)[e].apply(t,n);return Zh(),Vr(),r}const HT=Gh("__proto__,__v_isRef,__isVue"),Y_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Dr));function qT(t){Dr(t)||(t=String(t));const e=Se(this);return vt(e,"has",t),e.hasOwnProperty(t)}class X_{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?eb:ty:i?ey:Z_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=he(e);if(!s){let l;if(o&&(l=BT[n]))return l;if(n==="hasOwnProperty")return qT}const a=Reflect.get(e,n,tt(e)?e:r);return(Dr(n)?Y_.has(n):HT(n))||(s||vt(e,"get",n),i)?a:tt(a)?o&&Xh(n)?a:a.value:Me(a)?s?ny(a):Fr(a):a}}class J_ extends X_{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Ar(i);if(!Zt(r)&&!Ar(r)&&(i=Se(i),r=Se(r)),!he(e)&&tt(i)&&!tt(r))return l?!1:(i.value=r,!0)}const o=he(e)&&Xh(n)?Number(n)<e.length:Ce(e,n),a=Reflect.set(e,n,r,tt(e)?e:s);return e===Se(s)&&(o?vr(r,i)&&Nn(e,"set",n,r):Nn(e,"add",n,r)),a}deleteProperty(e,n){const r=Ce(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Nn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Dr(n)||!Y_.has(n))&&vt(e,"has",n),r}ownKeys(e){return vt(e,"iterate",he(e)?"length":es),Reflect.ownKeys(e)}}class zT extends X_{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const WT=new J_,KT=new zT,GT=new J_(!0);const Su=t=>t,ma=t=>Reflect.getPrototypeOf(t);function QT(t,e,n){return function(...r){const s=this.__v_raw,i=Se(s),o=js(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),h=n?Su:e?Pu:Et;return!e&&vt(i,"iterate",l?Ru:es),{next(){const{value:d,done:m}=u.next();return m?{value:d,done:m}:{value:a?[h(d[0]),h(d[1])]:h(d),done:m}},[Symbol.iterator](){return this}}}}function ga(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function YT(t,e){const n={get(s){const i=this.__v_raw,o=Se(i),a=Se(s);t||(vr(s,a)&&vt(o,"get",s),vt(o,"get",a));const{has:l}=ma(o),u=e?Su:t?Pu:Et;if(l.call(o,s))return u(i.get(s));if(l.call(o,a))return u(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&vt(Se(s),"iterate",es),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Se(i),a=Se(s);return t||(vr(s,a)&&vt(o,"has",s),vt(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,l=Se(a),u=e?Su:t?Pu:Et;return!t&&vt(l,"iterate",es),a.forEach((h,d)=>s.call(i,u(h),u(d),o))}};return Ze(n,t?{add:ga("add"),set:ga("set"),delete:ga("delete"),clear:ga("clear")}:{add(s){!e&&!Zt(s)&&!Ar(s)&&(s=Se(s));const i=Se(this);return ma(i).has.call(i,s)||(i.add(s),Nn(i,"add",s,s)),this},set(s,i){!e&&!Zt(i)&&!Ar(i)&&(i=Se(i));const o=Se(this),{has:a,get:l}=ma(o);let u=a.call(o,s);u||(s=Se(s),u=a.call(o,s));const h=l.call(o,s);return o.set(s,i),u?vr(i,h)&&Nn(o,"set",s,i):Nn(o,"add",s,i),this},delete(s){const i=Se(this),{has:o,get:a}=ma(i);let l=o.call(i,s);l||(s=Se(s),l=o.call(i,s)),a&&a.call(i,s);const u=i.delete(s);return l&&Nn(i,"delete",s,void 0),u},clear(){const s=Se(this),i=s.size!==0,o=s.clear();return i&&Nn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=QT(s,t,e)}),n}function nf(t,e){const n=YT(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ce(n,s)&&s in r?n:r,s,i)}const XT={get:nf(!1,!1)},JT={get:nf(!1,!0)},ZT={get:nf(!0,!1)};const Z_=new WeakMap,ey=new WeakMap,ty=new WeakMap,eb=new WeakMap;function tb(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nb(t){return t.__v_skip||!Object.isExtensible(t)?0:tb(ST(t))}function Fr(t){return Ar(t)?t:rf(t,!1,WT,XT,Z_)}function Mn(t){return rf(t,!1,GT,JT,ey)}function ny(t){return rf(t,!0,KT,ZT,ty)}function rf(t,e,n,r,s){if(!Me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=nb(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function ts(t){return Ar(t)?ts(t.__v_raw):!!(t&&t.__v_isReactive)}function Ar(t){return!!(t&&t.__v_isReadonly)}function Zt(t){return!!(t&&t.__v_isShallow)}function sf(t){return t?!!t.__v_raw:!1}function Se(t){const e=t&&t.__v_raw;return e?Se(e):t}function rb(t){return!Ce(t,"__v_skip")&&Object.isExtensible(t)&&D_(t,"__v_skip",!0),t}const Et=t=>Me(t)?Fr(t):t,Pu=t=>Me(t)?ny(t):t;function tt(t){return t?t.__v_isRef===!0:!1}function Tt(t){return ry(t,!1)}function po(t){return ry(t,!0)}function ry(t,e){return tt(t)?t:new sb(t,e)}class sb{constructor(e,n){this.dep=new tf,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Se(e),this._value=n?e:Et(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Zt(e)||Ar(e);e=r?e:Se(e),vr(e,n)&&(this._rawValue=e,this._value=r?e:Et(e),this.dep.trigger())}}function Be(t){return tt(t)?t.value:t}const ib={get:(t,e,n)=>e==="__v_raw"?t:Be(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return tt(s)&&!tt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function sy(t){return ts(t)?t:new Proxy(t,ib)}class ob{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return jT(Se(this._object),this._key)}}class ab{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function iy(t,e,n){return tt(t)?t:pe(t)?new ab(t):Me(t)&&arguments.length>1?cb(t,e,n):Tt(t)}function cb(t,e,n){const r=t[e];return tt(r)?r:new ob(t,e,n)}class lb{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new tf(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ho-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Le!==this)return q_(this,!0),!0}get value(){const e=this.dep.track();return K_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ub(t,e,n=!1){let r,s;return pe(t)?r=t:(r=t.get,s=t.set),new lb(r,s,n)}const _a={},Za=new WeakMap;let Gr;function hb(t,e=!1,n=Gr){if(n){let r=Za.get(n);r||Za.set(n,r=[]),r.push(t)}}function fb(t,e,n=De){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:l}=n,u=S=>s?S:Zt(S)||s===!1||s===0?Dn(S,1):Dn(S);let h,d,m,g,A=!1,O=!1;if(tt(t)?(d=()=>t.value,A=Zt(t)):ts(t)?(d=()=>u(t),A=!0):he(t)?(O=!0,A=t.some(S=>ts(S)||Zt(S)),d=()=>t.map(S=>{if(tt(S))return S.value;if(ts(S))return u(S);if(pe(S))return l?l(S,2):S()})):pe(t)?e?d=l?()=>l(t,2):t:d=()=>{if(m){Mr();try{m()}finally{Vr()}}const S=Gr;Gr=h;try{return l?l(t,3,[g]):t(g)}finally{Gr=S}}:d=vn,e&&s){const S=d,D=s===!0?1/0:s;d=()=>Dn(S(),D)}const N=B_(),x=()=>{h.stop(),N&&N.active&&Yh(N.effects,h)};if(i&&e){const S=e;e=(...D)=>{S(...D),x()}}let P=O?new Array(t.length).fill(_a):_a;const y=S=>{if(!(!(h.flags&1)||!h.dirty&&!S))if(e){const D=h.run();if(s||A||(O?D.some((V,b)=>vr(V,P[b])):vr(D,P))){m&&m();const V=Gr;Gr=h;try{const b=[D,P===_a?void 0:O&&P[0]===_a?[]:P,g];l?l(e,3,b):e(...b),P=D}finally{Gr=V}}}else h.run()};return a&&a(y),h=new $_(d),h.scheduler=o?()=>o(y,!1):y,g=S=>hb(S,!1,h),m=h.onStop=()=>{const S=Za.get(h);if(S){if(l)l(S,4);else for(const D of S)D();Za.delete(h)}},e?r?y(!0):P=h.run():o?o(y.bind(null,!0),!0):h.run(),x.pause=h.pause.bind(h),x.resume=h.resume.bind(h),x.stop=x,x}function Dn(t,e=1/0,n){if(e<=0||!Me(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,tt(t))Dn(t.value,e,n);else if(he(t))for(let r=0;r<t.length;r++)Dn(t[r],e,n);else if(k_(t)||js(t))t.forEach(r=>{Dn(r,e,n)});else if(N_(t)){for(const r in t)Dn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Dn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Lo(t,e,n,r){try{return r?t(...r):t()}catch(s){pi(s,e,n)}}function ln(t,e,n,r){if(pe(t)){const s=Lo(t,e,n,r);return s&&O_(s)&&s.catch(i=>{pi(i,e,n)}),s}if(he(t)){const s=[];for(let i=0;i<t.length;i++)s.push(ln(t[i],e,n,r));return s}}function pi(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||De;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const h=a.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,l,u)===!1)return}a=a.parent}if(i){Mr(),Lo(i,null,10,[t,l,u]),Vr();return}}db(t,n,s,r,o)}function db(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Ct=[];let pn=-1;const Hs=[];let lr=null,Ps=0;const oy=Promise.resolve();let ec=null;function Mo(t){const e=ec||oy;return t?e.then(this?t.bind(this):t):e}function pb(t){let e=pn+1,n=Ct.length;for(;e<n;){const r=e+n>>>1,s=Ct[r],i=mo(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function of(t){if(!(t.flags&1)){const e=mo(t),n=Ct[Ct.length-1];!n||!(t.flags&2)&&e>=mo(n)?Ct.push(t):Ct.splice(pb(e),0,t),t.flags|=1,ay()}}function ay(){ec||(ec=oy.then(cy))}function Cu(t){he(t)?Hs.push(...t):lr&&t.id===-1?lr.splice(Ps+1,0,t):t.flags&1||(Hs.push(t),t.flags|=1),ay()}function gp(t,e,n=pn+1){for(;n<Ct.length;n++){const r=Ct[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ct.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function tc(t){if(Hs.length){const e=[...new Set(Hs)].sort((n,r)=>mo(n)-mo(r));if(Hs.length=0,lr){lr.push(...e);return}for(lr=e,Ps=0;Ps<lr.length;Ps++){const n=lr[Ps];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}lr=null,Ps=0}}const mo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function cy(t){try{for(pn=0;pn<Ct.length;pn++){const e=Ct[pn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Lo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;pn<Ct.length;pn++){const e=Ct[pn];e&&(e.flags&=-2)}pn=-1,Ct.length=0,tc(),ec=null,(Ct.length||Hs.length)&&cy()}}let kt=null,ly=null;function nc(t){const e=kt;return kt=t,ly=t&&t.type.__scopeId||null,e}function rc(t,e=kt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Cp(-1);const i=nc(e);let o;try{o=t(...s)}finally{nc(i),r._d&&Cp(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function mb(t,e){if(kt===null)return t;const n=Wc(kt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=De]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&Dn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function mn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Mr(),ln(l,n,8,[t.el,a,t,e]),Vr())}}const gb=Symbol("_vte"),uy=t=>t.__isTeleport,ur=Symbol("_leaveCb"),ya=Symbol("_enterCb");function _b(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Fo(()=>{t.isMounted=!0}),Uo(()=>{t.isUnmounting=!0}),t}const Yt=[Function,Array],hy={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Yt,onEnter:Yt,onAfterEnter:Yt,onEnterCancelled:Yt,onBeforeLeave:Yt,onLeave:Yt,onAfterLeave:Yt,onLeaveCancelled:Yt,onBeforeAppear:Yt,onAppear:Yt,onAfterAppear:Yt,onAppearCancelled:Yt},fy=t=>{const e=t.subTree;return e.component?fy(e.component):e},yb={name:"BaseTransition",props:hy,setup(t,{slots:e}){const n=zc(),r=_b();return()=>{const s=e.default&&my(e.default(),!0);if(!s||!s.length)return;const i=dy(s),o=Se(t),{mode:a}=o;if(r.isLeaving)return Hl(i);const l=_p(i);if(!l)return Hl(i);let u=ku(l,o,r,n,d=>u=d);l.type!==ot&&Js(l,u);let h=n.subTree&&_p(n.subTree);if(h&&h.type!==ot&&!on(l,h)&&fy(n).type!==ot){let d=ku(h,o,r,n);if(Js(h,d),a==="out-in"&&l.type!==ot)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,h=void 0},Hl(i);a==="in-out"&&l.type!==ot?d.delayLeave=(m,g,A)=>{const O=py(r,h);O[String(h.key)]=h,m[ur]=()=>{g(),m[ur]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{A(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function dy(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==ot){e=n;break}}return e}const vb=yb;function py(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ku(t,e,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:m,onLeave:g,onAfterLeave:A,onLeaveCancelled:O,onBeforeAppear:N,onAppear:x,onAfterAppear:P,onAppearCancelled:y}=e,S=String(t.key),D=py(n,t),V=(v,w)=>{v&&ln(v,r,9,w)},b=(v,w)=>{const k=w[1];V(v,w),he(v)?v.every(R=>R.length<=1)&&k():v.length<=1&&k()},E={mode:o,persisted:a,beforeEnter(v){let w=l;if(!n.isMounted)if(i)w=N||l;else return;v[ur]&&v[ur](!0);const k=D[S];k&&on(t,k)&&k.el[ur]&&k.el[ur](),V(w,[v])},enter(v){let w=u,k=h,R=d;if(!n.isMounted)if(i)w=x||u,k=P||h,R=y||d;else return;let T=!1;const _e=v[ya]=ve=>{T||(T=!0,ve?V(R,[v]):V(k,[v]),E.delayedLeave&&E.delayedLeave(),v[ya]=void 0)};w?b(w,[v,_e]):_e()},leave(v,w){const k=String(t.key);if(v[ya]&&v[ya](!0),n.isUnmounting)return w();V(m,[v]);let R=!1;const T=v[ur]=_e=>{R||(R=!0,w(),_e?V(O,[v]):V(A,[v]),v[ur]=void 0,D[k]===t&&delete D[k])};D[k]=t,g?b(g,[v,T]):T()},clone(v){const w=ku(v,e,n,r,s);return s&&s(w),w}};return E}function Hl(t){if(Vo(t))return t=Hn(t),t.children=null,t}function _p(t){if(!Vo(t))return uy(t.type)&&t.children?dy(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&pe(n.default))return n.default()}}function Js(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Js(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function my(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===$t?(o.patchFlag&128&&s++,r=r.concat(my(o.children,e,a))):(e||o.type!==ot)&&r.push(a!=null?Hn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function ds(t,e){return pe(t)?Ze({name:t.name},e,{setup:t}):t}function af(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function go(t,e,n,r,s=!1){if(he(t)){t.forEach((A,O)=>go(A,e&&(he(e)?e[O]:e),n,r,s));return}if(ns(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&go(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Wc(r.component):r.el,o=s?null:i,{i:a,r:l}=t,u=e&&e.r,h=a.refs===De?a.refs={}:a.refs,d=a.setupState,m=Se(d),g=d===De?()=>!1:A=>Ce(m,A);if(u!=null&&u!==l&&(He(u)?(h[u]=null,g(u)&&(d[u]=null)):tt(u)&&(u.value=null)),pe(l))Lo(l,a,12,[o,h]);else{const A=He(l),O=tt(l);if(A||O){const N=()=>{if(t.f){const x=A?g(l)?d[l]:h[l]:l.value;s?he(x)&&Yh(x,i):he(x)?x.includes(i)||x.push(i):A?(h[l]=[i],g(l)&&(d[l]=h[l])):(l.value=[i],t.k&&(h[t.k]=l.value))}else A?(h[l]=o,g(l)&&(d[l]=o)):O&&(l.value=o,t.k&&(h[t.k]=o))};o?(N.id=-1,lt(N,n)):N()}}}let yp=!1;const Ss=()=>{yp||(console.error("Hydration completed but contains mismatches."),yp=!0)},Eb=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",wb=t=>t.namespaceURI.includes("MathML"),va=t=>{if(t.nodeType===1){if(Eb(t))return"svg";if(wb(t))return"mathml"}},Ls=t=>t.nodeType===8;function Tb(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:l,createComment:u}}=t,h=(y,S)=>{if(!S.hasChildNodes()){n(null,y,S),tc(),S._vnode=y;return}d(S.firstChild,y,null,null,null),tc(),S._vnode=y},d=(y,S,D,V,b,E=!1)=>{E=E||!!S.dynamicChildren;const v=Ls(y)&&y.data==="[",w=()=>O(y,S,D,V,b,v),{type:k,ref:R,shapeFlag:T,patchFlag:_e}=S;let ve=y.nodeType;S.el=y,_e===-2&&(E=!1,S.dynamicChildren=null);let re=null;switch(k){case ss:ve!==3?S.children===""?(l(S.el=s(""),o(y),y),re=y):re=w():(y.data!==S.children&&(Ss(),y.data=S.children),re=i(y));break;case ot:P(y)?(re=i(y),x(S.el=y.content.firstChild,y,D)):ve!==8||v?re=w():re=i(y);break;case Da:if(v&&(y=i(y),ve=y.nodeType),ve===1||ve===3){re=y;const fe=!S.children.length;for(let ne=0;ne<S.staticCount;ne++)fe&&(S.children+=re.nodeType===1?re.outerHTML:re.data),ne===S.staticCount-1&&(S.anchor=re),re=i(re);return v?i(re):re}else w();break;case $t:v?re=A(y,S,D,V,b,E):re=w();break;default:if(T&1)(ve!==1||S.type.toLowerCase()!==y.tagName.toLowerCase())&&!P(y)?re=w():re=m(y,S,D,V,b,E);else if(T&6){S.slotScopeIds=b;const fe=o(y);if(v?re=N(y):Ls(y)&&y.data==="teleport start"?re=N(y,y.data,"teleport end"):re=i(y),e(S,fe,null,D,V,va(fe),E),ns(S)&&!S.type.__asyncResolved){let ne;v?(ne=$e($t),ne.anchor=re?re.previousSibling:fe.lastChild):ne=y.nodeType===3?Zi(""):$e("div"),ne.el=y,S.component.subTree=ne}}else T&64?ve!==8?re=w():re=S.type.hydrate(y,S,D,V,b,E,t,g):T&128&&(re=S.type.hydrate(y,S,D,V,va(o(y)),b,E,t,d))}return R!=null&&go(R,null,V,S),re},m=(y,S,D,V,b,E)=>{E=E||!!S.dynamicChildren;const{type:v,props:w,patchFlag:k,shapeFlag:R,dirs:T,transition:_e}=S,ve=v==="input"||v==="option";if(ve||k!==-1){T&&mn(S,null,D,"created");let re=!1;if(P(y)){re=Fy(null,_e)&&D&&D.vnode.props&&D.vnode.props.appear;const ne=y.content.firstChild;re&&_e.beforeEnter(ne),x(ne,y,D),S.el=y=ne}if(R&16&&!(w&&(w.innerHTML||w.textContent))){let ne=g(y.firstChild,S,y,D,V,b,E);for(;ne;){Ea(y,1)||Ss();const ze=ne;ne=ne.nextSibling,a(ze)}}else if(R&8){let ne=S.children;ne[0]===`
`&&(y.tagName==="PRE"||y.tagName==="TEXTAREA")&&(ne=ne.slice(1)),y.textContent!==ne&&(Ea(y,0)||Ss(),y.textContent=S.children)}if(w){if(ve||!E||k&48){const ne=y.tagName.includes("-");for(const ze in w)(ve&&(ze.endsWith("value")||ze==="indeterminate")||xo(ze)&&!Bs(ze)||ze[0]==="."||ne)&&r(y,ze,null,w[ze],void 0,D)}else if(w.onClick)r(y,"onClick",null,w.onClick,void 0,D);else if(k&4&&ts(w.style))for(const ne in w.style)w.style[ne]}let fe;(fe=w&&w.onVnodeBeforeMount)&&Mt(fe,D,S),T&&mn(S,null,D,"beforeMount"),((fe=w&&w.onVnodeMounted)||T||re)&&zy(()=>{fe&&Mt(fe,D,S),re&&_e.enter(y),T&&mn(S,null,D,"mounted")},V)}return y.nextSibling},g=(y,S,D,V,b,E,v)=>{v=v||!!S.dynamicChildren;const w=S.children,k=w.length;for(let R=0;R<k;R++){const T=v?w[R]:w[R]=qt(w[R]),_e=T.type===ss;y?(_e&&!v&&R+1<k&&qt(w[R+1]).type===ss&&(l(s(y.data.slice(T.children.length)),D,i(y)),y.data=T.children),y=d(y,T,V,b,E,v)):_e&&!T.children?l(T.el=s(""),D):(Ea(D,1)||Ss(),n(null,T,D,null,V,b,va(D),E))}return y},A=(y,S,D,V,b,E)=>{const{slotScopeIds:v}=S;v&&(b=b?b.concat(v):v);const w=o(y),k=g(i(y),S,w,D,V,b,E);return k&&Ls(k)&&k.data==="]"?i(S.anchor=k):(Ss(),l(S.anchor=u("]"),w,k),k)},O=(y,S,D,V,b,E)=>{if(Ea(y.parentElement,1)||Ss(),S.el=null,E){const k=N(y);for(;;){const R=i(y);if(R&&R!==k)a(R);else break}}const v=i(y),w=o(y);return a(y),n(null,S,w,v,D,V,va(w),b),D&&(D.vnode.el=S.el,qc(D,S.el)),v},N=(y,S="[",D="]")=>{let V=0;for(;y;)if(y=i(y),y&&Ls(y)&&(y.data===S&&V++,y.data===D)){if(V===0)return i(y);V--}return y},x=(y,S,D)=>{const V=S.parentNode;V&&V.replaceChild(y,S);let b=D;for(;b;)b.vnode.el===S&&(b.vnode.el=b.subTree.el=y),b=b.parent},P=y=>y.nodeType===1&&y.tagName==="TEMPLATE";return[h,d]}const vp="data-allow-mismatch",bb={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function Ea(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(vp);)t=t.parentElement;const n=t&&t.getAttribute(vp);if(n==null)return!1;if(n==="")return!0;{const r=n.split(",");return e===0&&r.includes("children")?!0:n.split(",").includes(bb[e])}}Uc().requestIdleCallback;Uc().cancelIdleCallback;function Ib(t,e){if(Ls(t)&&t.data==="["){let n=1,r=t.nextSibling;for(;r;){if(r.nodeType===1){if(e(r)===!1)break}else if(Ls(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else e(t)}const ns=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Ep(t){pe(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,hydrate:i,timeout:o,suspensible:a=!0,onError:l}=t;let u=null,h,d=0;const m=()=>(d++,u=null,g()),g=()=>{let A;return u||(A=u=e().catch(O=>{if(O=O instanceof Error?O:new Error(String(O)),l)return new Promise((N,x)=>{l(O,()=>N(m()),()=>x(O),d+1)});throw O}).then(O=>A!==u&&u?u:(O&&(O.__esModule||O[Symbol.toStringTag]==="Module")&&(O=O.default),h=O,O)))};return ds({name:"AsyncComponentWrapper",__asyncLoader:g,__asyncHydrate(A,O,N){const x=i?()=>{const P=i(N,y=>Ib(A,y));P&&(O.bum||(O.bum=[])).push(P)}:N;h?x():g().then(()=>!O.isUnmounted&&x())},get __asyncResolved(){return h},setup(){const A=et;if(af(A),h)return()=>ql(h,A);const O=y=>{u=null,pi(y,A,13,!r)};if(a&&A.suspense||ti)return g().then(y=>()=>ql(y,A)).catch(y=>(O(y),()=>r?$e(r,{error:y}):null));const N=Tt(!1),x=Tt(),P=Tt(!!s);return s&&setTimeout(()=>{P.value=!1},s),o!=null&&setTimeout(()=>{if(!N.value&&!x.value){const y=new Error(`Async component timed out after ${o}ms.`);O(y),x.value=y}},o),g().then(()=>{N.value=!0,A.parent&&Vo(A.parent.vnode)&&A.parent.update()}).catch(y=>{O(y),x.value=y}),()=>{if(N.value&&h)return ql(h,A);if(x.value&&r)return $e(r,{error:x.value});if(n&&!P.value)return $e(n)}}})}function ql(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=$e(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const Vo=t=>t.type.__isKeepAlive,Ab={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=zc(),r=n.ctx;if(!r.renderer)return()=>{const P=e.default&&e.default();return P&&P.length===1?P[0]:P};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:u,um:h,o:{createElement:d}}}=r,m=d("div");r.activate=(P,y,S,D,V)=>{const b=P.component;u(P,y,S,0,a),l(b.vnode,P,y,S,b,a,D,P.slotScopeIds,V),lt(()=>{b.isDeactivated=!1,b.a&&$s(b.a);const E=P.props&&P.props.onVnodeMounted;E&&Mt(E,b.parent,P)},a)},r.deactivate=P=>{const y=P.component;ic(y.m),ic(y.a),u(P,m,null,1,a),lt(()=>{y.da&&$s(y.da);const S=P.props&&P.props.onVnodeUnmounted;S&&Mt(S,y.parent,P),y.isDeactivated=!0},a)};function g(P){zl(P),h(P,n,a,!0)}function A(P){s.forEach((y,S)=>{const D=Uu(y.type);D&&!P(D)&&O(S)})}function O(P){const y=s.get(P);y&&(!o||!on(y,o))?g(y):o&&zl(o),s.delete(P),i.delete(P)}Er(()=>[t.include,t.exclude],([P,y])=>{P&&A(S=>Ui(P,S)),y&&A(S=>!Ui(y,S))},{flush:"post",deep:!0});let N=null;const x=()=>{N!=null&&(oc(n.subTree.type)?lt(()=>{s.set(N,wa(n.subTree))},n.subTree.suspense):s.set(N,wa(n.subTree)))};return Fo(x),vy(x),Uo(()=>{s.forEach(P=>{const{subTree:y,suspense:S}=n,D=wa(y);if(P.type===D.type&&P.key===D.key){zl(D);const V=D.component.da;V&&lt(V,S);return}g(P)})}),()=>{if(N=null,!e.default)return o=null;const P=e.default(),y=P[0];if(P.length>1)return o=null,P;if(!ei(y)||!(y.shapeFlag&4)&&!(y.shapeFlag&128))return o=null,y;let S=wa(y);if(S.type===ot)return o=null,S;const D=S.type,V=Uu(ns(S)?S.type.__asyncResolved||{}:D),{include:b,exclude:E,max:v}=t;if(b&&(!V||!Ui(b,V))||E&&V&&Ui(E,V))return S.shapeFlag&=-257,o=S,y;const w=S.key==null?D:S.key,k=s.get(w);return S.el&&(S=Hn(S),y.shapeFlag&128&&(y.ssContent=S)),N=w,k?(S.el=k.el,S.component=k.component,S.transition&&Js(S,S.transition),S.shapeFlag|=512,i.delete(w),i.add(w)):(i.add(w),v&&i.size>parseInt(v,10)&&O(i.values().next().value)),S.shapeFlag|=256,o=S,oc(y.type)?y:S}}},Rb=Ab;function Ui(t,e){return he(t)?t.some(n=>Ui(n,e)):He(t)?t.split(",").includes(e):RT(t)?(t.lastIndex=0,t.test(e)):!1}function gy(t,e){yy(t,"a",e)}function _y(t,e){yy(t,"da",e)}function yy(t,e,n=et){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if($c(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Vo(s.parent.vnode)&&Sb(r,e,n,s),s=s.parent}}function Sb(t,e,n,r){const s=$c(e,t,r,!0);Ey(()=>{Yh(r[e],s)},n)}function zl(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function wa(t){return t.shapeFlag&128?t.ssContent:t}function $c(t,e,n=et,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Mr();const a=jo(n),l=ln(e,n,t,o);return a(),Vr(),l});return r?s.unshift(i):s.push(i),i}}const Yn=t=>(e,n=et)=>{(!ti||t==="sp")&&$c(t,(...r)=>e(...r),n)},Pb=Yn("bm"),Fo=Yn("m"),Cb=Yn("bu"),vy=Yn("u"),Uo=Yn("bum"),Ey=Yn("um"),kb=Yn("sp"),Ob=Yn("rtg"),xb=Yn("rtc");function wy(t,e=et){$c("ec",t,e)}const Ty="components";function Ou(t,e){return Iy(Ty,t,!0,e)||t}const by=Symbol.for("v-ndc");function Nb(t){return He(t)?Iy(Ty,t,!1)||t:t||by}function Iy(t,e,n=!0,r=!1){const s=kt||et;if(s){const i=s.type;{const a=Uu(i,!1);if(a&&(a===e||a===en(e)||a===Fc(en(e))))return i}const o=wp(s[t]||i[t],e)||wp(s.appContext[t],e);return!o&&r?i:o}}function wp(t,e){return t&&(t[e]||t[en(e)]||t[Fc(en(e))])}function o2(t,e,n,r){let s;const i=n,o=he(t);if(o||He(t)){const a=o&&ts(t);let l=!1;a&&(l=!Zt(t),t=Bc(t)),s=new Array(t.length);for(let u=0,h=t.length;u<h;u++)s[u]=e(l?Et(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(Me(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const h=a[l];s[l]=e(t[h],h,l,i)}}else s=[];return s}const xu=t=>t?Yy(t)?Wc(t):xu(t.parent):null,Xi=Ze(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>xu(t.parent),$root:t=>xu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>cf(t),$forceUpdate:t=>t.f||(t.f=()=>{of(t.update)}),$nextTick:t=>t.n||(t.n=Mo.bind(t.proxy)),$watch:t=>eI.bind(t)}),Wl=(t,e)=>t!==De&&!t.__isScriptSetup&&Ce(t,e),Db={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Wl(r,e))return o[e]=1,r[e];if(s!==De&&Ce(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Ce(u,e))return o[e]=3,i[e];if(n!==De&&Ce(n,e))return o[e]=4,n[e];Nu&&(o[e]=0)}}const h=Xi[e];let d,m;if(h)return e==="$attrs"&&vt(t.attrs,"get",""),h(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==De&&Ce(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,Ce(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Wl(s,e)?(s[e]=n,!0):r!==De&&Ce(r,e)?(r[e]=n,!0):Ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==De&&Ce(t,o)||Wl(e,o)||(a=i[0])&&Ce(a,o)||Ce(r,o)||Ce(Xi,o)||Ce(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Tp(t){return he(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Nu=!0;function Lb(t){const e=cf(t),n=t.proxy,r=t.ctx;Nu=!1,e.beforeCreate&&bp(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:u,created:h,beforeMount:d,mounted:m,beforeUpdate:g,updated:A,activated:O,deactivated:N,beforeDestroy:x,beforeUnmount:P,destroyed:y,unmounted:S,render:D,renderTracked:V,renderTriggered:b,errorCaptured:E,serverPrefetch:v,expose:w,inheritAttrs:k,components:R,directives:T,filters:_e}=e;if(u&&Mb(u,r,null),o)for(const fe in o){const ne=o[fe];pe(ne)&&(r[fe]=ne.bind(n))}if(s){const fe=s.call(n,n);Me(fe)&&(t.data=Fr(fe))}if(Nu=!0,i)for(const fe in i){const ne=i[fe],ze=pe(ne)?ne.bind(n,n):pe(ne.get)?ne.get.bind(n,n):vn,nn=!pe(ne)&&pe(ne.set)?ne.set.bind(n):vn,Gt=Fe({get:ze,set:nn});Object.defineProperty(r,fe,{enumerable:!0,configurable:!0,get:()=>Gt.value,set:We=>Gt.value=We})}if(a)for(const fe in a)Ay(a[fe],r,n,fe);if(l){const fe=pe(l)?l.call(n):l;Reflect.ownKeys(fe).forEach(ne=>{qs(ne,fe[ne])})}h&&bp(h,t,"c");function re(fe,ne){he(ne)?ne.forEach(ze=>fe(ze.bind(n))):ne&&fe(ne.bind(n))}if(re(Pb,d),re(Fo,m),re(Cb,g),re(vy,A),re(gy,O),re(_y,N),re(wy,E),re(xb,V),re(Ob,b),re(Uo,P),re(Ey,S),re(kb,v),he(w))if(w.length){const fe=t.exposed||(t.exposed={});w.forEach(ne=>{Object.defineProperty(fe,ne,{get:()=>n[ne],set:ze=>n[ne]=ze})})}else t.exposed||(t.exposed={});D&&t.render===vn&&(t.render=D),k!=null&&(t.inheritAttrs=k),R&&(t.components=R),T&&(t.directives=T),v&&af(t)}function Mb(t,e,n=vn){he(t)&&(t=Du(t));for(const r in t){const s=t[r];let i;Me(s)?"default"in s?i=Ot(s.from||r,s.default,!0):i=Ot(s.from||r):i=Ot(s),tt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function bp(t,e,n){ln(he(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ay(t,e,n,r){let s=r.includes(".")?By(n,r):()=>n[r];if(He(t)){const i=e[t];pe(i)&&Er(s,i)}else if(pe(t))Er(s,t.bind(n));else if(Me(t))if(he(t))t.forEach(i=>Ay(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&Er(s,i,t)}}function cf(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>sc(l,u,o,!0)),sc(l,e,o)),Me(e)&&i.set(e,l),l}function sc(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&sc(t,i,n,!0),s&&s.forEach(o=>sc(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Vb[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Vb={data:Ip,props:Ap,emits:Ap,methods:ji,computed:ji,beforeCreate:Pt,created:Pt,beforeMount:Pt,mounted:Pt,beforeUpdate:Pt,updated:Pt,beforeDestroy:Pt,beforeUnmount:Pt,destroyed:Pt,unmounted:Pt,activated:Pt,deactivated:Pt,errorCaptured:Pt,serverPrefetch:Pt,components:ji,directives:ji,watch:Ub,provide:Ip,inject:Fb};function Ip(t,e){return e?t?function(){return Ze(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function Fb(t,e){return ji(Du(t),Du(e))}function Du(t){if(he(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Pt(t,e){return t?[...new Set([].concat(t,e))]:e}function ji(t,e){return t?Ze(Object.create(null),t,e):e}function Ap(t,e){return t?he(t)&&he(e)?[...new Set([...t,...e])]:Ze(Object.create(null),Tp(t),Tp(e??{})):e}function Ub(t,e){if(!t)return e;if(!e)return t;const n=Ze(Object.create(null),t);for(const r in e)n[r]=Pt(t[r],e[r]);return n}function Ry(){return{app:null,config:{isNativeTag:IT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jb=0;function Bb(t,e){return function(r,s=null){pe(r)||(r=Ze({},r)),s!=null&&!Me(s)&&(s=null);const i=Ry(),o=new WeakSet,a=[];let l=!1;const u=i.app={_uid:jb++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Jy,get config(){return i.config},set config(h){},use(h,...d){return o.has(h)||(h&&pe(h.install)?(o.add(h),h.install(u,...d)):pe(h)&&(o.add(h),h(u,...d))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,d){return d?(i.components[h]=d,u):i.components[h]},directive(h,d){return d?(i.directives[h]=d,u):i.directives[h]},mount(h,d,m){if(!l){const g=u._ceVNode||$e(r,s);return g.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),d&&e?e(g,h):t(g,h,m),l=!0,u._container=h,h.__vue_app__=u,Wc(g.component)}},onUnmount(h){a.push(h)},unmount(){l&&(ln(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,d){return i.provides[h]=d,u},runWithContext(h){const d=rs;rs=u;try{return h()}finally{rs=d}}};return u}}let rs=null;function qs(t,e){if(et){let n=et.provides;const r=et.parent&&et.parent.provides;r===n&&(n=et.provides=Object.create(r)),n[t]=e}}function Ot(t,e,n=!1){const r=et||kt;if(r||rs){const s=rs?rs._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}function Sy(){return!!(et||kt||rs)}const Py={},Cy=()=>Object.create(Py),ky=t=>Object.getPrototypeOf(t)===Py;function $b(t,e,n,r=!1){const s={},i=Cy();t.propsDefaults=Object.create(null),Oy(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Mn(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Hb(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Se(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let m=h[d];if(Hc(t.emitsOptions,m))continue;const g=e[m];if(l)if(Ce(i,m))g!==i[m]&&(i[m]=g,u=!0);else{const A=en(m);s[A]=Lu(l,a,A,g,t,!1)}else g!==i[m]&&(i[m]=g,u=!0)}}}else{Oy(t,e,s,i)&&(u=!0);let h;for(const d in a)(!e||!Ce(e,d)&&((h=Lr(d))===d||!Ce(e,h)))&&(l?n&&(n[d]!==void 0||n[h]!==void 0)&&(s[d]=Lu(l,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!Ce(e,d))&&(delete i[d],u=!0)}u&&Nn(t.attrs,"set","")}function Oy(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Bs(l))continue;const u=e[l];let h;s&&Ce(s,h=en(l))?!i||!i.includes(h)?n[h]=u:(a||(a={}))[h]=u:Hc(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Se(n),u=a||De;for(let h=0;h<i.length;h++){const d=i[h];n[d]=Lu(s,l,d,u[d],t,!Ce(u,d))}}return o}function Lu(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Ce(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&pe(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=jo(s);r=u[n]=l.call(null,e),h()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Lr(n))&&(r=!0))}return r}const qb=new WeakMap;function xy(t,e,n=!1){const r=n?qb:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!pe(t)){const h=d=>{l=!0;const[m,g]=xy(d,e,!0);Ze(o,m),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!l)return Me(t)&&r.set(t,Us),Us;if(he(i))for(let h=0;h<i.length;h++){const d=en(i[h]);Rp(d)&&(o[d]=De)}else if(i)for(const h in i){const d=en(h);if(Rp(d)){const m=i[h],g=o[d]=he(m)||pe(m)?{type:m}:Ze({},m),A=g.type;let O=!1,N=!0;if(he(A))for(let x=0;x<A.length;++x){const P=A[x],y=pe(P)&&P.name;if(y==="Boolean"){O=!0;break}else y==="String"&&(N=!1)}else O=pe(A)&&A.name==="Boolean";g[0]=O,g[1]=N,(O||Ce(g,"default"))&&a.push(d)}}const u=[o,a];return Me(t)&&r.set(t,u),u}function Rp(t){return t[0]!=="$"&&!Bs(t)}const Ny=t=>t[0]==="_"||t==="$stable",lf=t=>he(t)?t.map(qt):[qt(t)],zb=(t,e,n)=>{if(e._n)return e;const r=rc((...s)=>lf(e(...s)),n);return r._c=!1,r},Dy=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ny(s))continue;const i=t[s];if(pe(i))e[s]=zb(s,i,r);else if(i!=null){const o=lf(i);e[s]=()=>o}}},Ly=(t,e)=>{const n=lf(e);t.slots.default=()=>n},My=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Wb=(t,e,n)=>{const r=t.slots=Cy();if(t.vnode.shapeFlag&32){const s=e._;s?(My(r,e,n),n&&D_(r,"_",s,!0)):Dy(e,r)}else e&&Ly(t,e)},Kb=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=De;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:My(s,e,n):(i=!e.$stable,Dy(e,s)),o=e}else e&&(Ly(t,e),o={default:1});if(i)for(const a in s)!Ny(a)&&o[a]==null&&delete s[a]},lt=zy;function Gb(t){return Vy(t)}function Qb(t){return Vy(t,Tb)}function Vy(t,e){const n=Uc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:h,parentNode:d,nextSibling:m,setScopeId:g=vn,insertStaticContent:A}=t,O=(I,C,M,H=null,U=null,q=null,Y=void 0,G=null,K=!!C.dynamicChildren)=>{if(I===C)return;I&&!on(I,C)&&(H=j(I),We(I,U,q,!0),I=null),C.patchFlag===-2&&(K=!1,C.dynamicChildren=null);const{type:z,ref:le,shapeFlag:J}=C;switch(z){case ss:N(I,C,M,H);break;case ot:x(I,C,M,H);break;case Da:I==null&&P(C,M,H,Y);break;case $t:R(I,C,M,H,U,q,Y,G,K);break;default:J&1?D(I,C,M,H,U,q,Y,G,K):J&6?T(I,C,M,H,U,q,Y,G,K):(J&64||J&128)&&z.process(I,C,M,H,U,q,Y,G,K,se)}le!=null&&U&&go(le,I&&I.ref,q,C||I,!C)},N=(I,C,M,H)=>{if(I==null)r(C.el=a(C.children),M,H);else{const U=C.el=I.el;C.children!==I.children&&u(U,C.children)}},x=(I,C,M,H)=>{I==null?r(C.el=l(C.children||""),M,H):C.el=I.el},P=(I,C,M,H)=>{[I.el,I.anchor]=A(I.children,C,M,H,I.el,I.anchor)},y=({el:I,anchor:C},M,H)=>{let U;for(;I&&I!==C;)U=m(I),r(I,M,H),I=U;r(C,M,H)},S=({el:I,anchor:C})=>{let M;for(;I&&I!==C;)M=m(I),s(I),I=M;s(C)},D=(I,C,M,H,U,q,Y,G,K)=>{C.type==="svg"?Y="svg":C.type==="math"&&(Y="mathml"),I==null?V(C,M,H,U,q,Y,G,K):v(I,C,U,q,Y,G,K)},V=(I,C,M,H,U,q,Y,G)=>{let K,z;const{props:le,shapeFlag:J,transition:oe,dirs:ie}=I;if(K=I.el=o(I.type,q,le&&le.is,le),J&8?h(K,I.children):J&16&&E(I.children,K,null,H,U,Kl(I,q),Y,G),ie&&mn(I,null,H,"created"),b(K,I,I.scopeId,Y,H),le){for(const Pe in le)Pe!=="value"&&!Bs(Pe)&&i(K,Pe,null,le[Pe],q,H);"value"in le&&i(K,"value",null,le.value,q),(z=le.onVnodeBeforeMount)&&Mt(z,H,I)}ie&&mn(I,null,H,"beforeMount");const ue=Fy(U,oe);ue&&oe.beforeEnter(K),r(K,C,M),((z=le&&le.onVnodeMounted)||ue||ie)&&lt(()=>{z&&Mt(z,H,I),ue&&oe.enter(K),ie&&mn(I,null,H,"mounted")},U)},b=(I,C,M,H,U)=>{if(M&&g(I,M),H)for(let q=0;q<H.length;q++)g(I,H[q]);if(U){let q=U.subTree;if(C===q||oc(q.type)&&(q.ssContent===C||q.ssFallback===C)){const Y=U.vnode;b(I,Y,Y.scopeId,Y.slotScopeIds,U.parent)}}},E=(I,C,M,H,U,q,Y,G,K=0)=>{for(let z=K;z<I.length;z++){const le=I[z]=G?hr(I[z]):qt(I[z]);O(null,le,C,M,H,U,q,Y,G)}},v=(I,C,M,H,U,q,Y)=>{const G=C.el=I.el;let{patchFlag:K,dynamicChildren:z,dirs:le}=C;K|=I.patchFlag&16;const J=I.props||De,oe=C.props||De;let ie;if(M&&qr(M,!1),(ie=oe.onVnodeBeforeUpdate)&&Mt(ie,M,C,I),le&&mn(C,I,M,"beforeUpdate"),M&&qr(M,!0),(J.innerHTML&&oe.innerHTML==null||J.textContent&&oe.textContent==null)&&h(G,""),z?w(I.dynamicChildren,z,G,M,H,Kl(C,U),q):Y||ne(I,C,G,null,M,H,Kl(C,U),q,!1),K>0){if(K&16)k(G,J,oe,M,U);else if(K&2&&J.class!==oe.class&&i(G,"class",null,oe.class,U),K&4&&i(G,"style",J.style,oe.style,U),K&8){const ue=C.dynamicProps;for(let Pe=0;Pe<ue.length;Pe++){const Ae=ue[Pe],dt=J[Ae],st=oe[Ae];(st!==dt||Ae==="value")&&i(G,Ae,dt,st,U,M)}}K&1&&I.children!==C.children&&h(G,C.children)}else!Y&&z==null&&k(G,J,oe,M,U);((ie=oe.onVnodeUpdated)||le)&&lt(()=>{ie&&Mt(ie,M,C,I),le&&mn(C,I,M,"updated")},H)},w=(I,C,M,H,U,q,Y)=>{for(let G=0;G<C.length;G++){const K=I[G],z=C[G],le=K.el&&(K.type===$t||!on(K,z)||K.shapeFlag&70)?d(K.el):M;O(K,z,le,null,H,U,q,Y,!0)}},k=(I,C,M,H,U)=>{if(C!==M){if(C!==De)for(const q in C)!Bs(q)&&!(q in M)&&i(I,q,C[q],null,U,H);for(const q in M){if(Bs(q))continue;const Y=M[q],G=C[q];Y!==G&&q!=="value"&&i(I,q,G,Y,U,H)}"value"in M&&i(I,"value",C.value,M.value,U)}},R=(I,C,M,H,U,q,Y,G,K)=>{const z=C.el=I?I.el:a(""),le=C.anchor=I?I.anchor:a("");let{patchFlag:J,dynamicChildren:oe,slotScopeIds:ie}=C;ie&&(G=G?G.concat(ie):ie),I==null?(r(z,M,H),r(le,M,H),E(C.children||[],M,le,U,q,Y,G,K)):J>0&&J&64&&oe&&I.dynamicChildren?(w(I.dynamicChildren,oe,M,U,q,Y,G),(C.key!=null||U&&C===U.subTree)&&Uy(I,C,!0)):ne(I,C,M,le,U,q,Y,G,K)},T=(I,C,M,H,U,q,Y,G,K)=>{C.slotScopeIds=G,I==null?C.shapeFlag&512?U.ctx.activate(C,M,H,Y,K):_e(C,M,H,U,q,Y,K):ve(I,C,K)},_e=(I,C,M,H,U,q,Y)=>{const G=I.component=yI(I,H,U);if(Vo(I)&&(G.ctx.renderer=se),vI(G,!1,Y),G.asyncDep){if(U&&U.registerDep(G,re,Y),!I.el){const K=G.subTree=$e(ot);x(null,K,C,M)}}else re(G,I,C,M,U,q,Y)},ve=(I,C,M)=>{const H=C.component=I.component;if(oI(I,C,M))if(H.asyncDep&&!H.asyncResolved){fe(H,C,M);return}else H.next=C,H.update();else C.el=I.el,H.vnode=C},re=(I,C,M,H,U,q,Y)=>{const G=()=>{if(I.isMounted){let{next:J,bu:oe,u:ie,parent:ue,vnode:Pe}=I;{const pt=jy(I);if(pt){J&&(J.el=Pe.el,fe(I,J,Y)),pt.asyncDep.then(()=>{I.isUnmounted||G()});return}}let Ae=J,dt;qr(I,!1),J?(J.el=Pe.el,fe(I,J,Y)):J=Pe,oe&&$s(oe),(dt=J.props&&J.props.onVnodeBeforeUpdate)&&Mt(dt,ue,J,Pe),qr(I,!0);const st=Gl(I),at=I.subTree;I.subTree=st,O(at,st,d(at.el),j(at),I,U,q),J.el=st.el,Ae===null&&qc(I,st.el),ie&&lt(ie,U),(dt=J.props&&J.props.onVnodeUpdated)&&lt(()=>Mt(dt,ue,J,Pe),U)}else{let J;const{el:oe,props:ie}=C,{bm:ue,m:Pe,parent:Ae,root:dt,type:st}=I,at=ns(C);if(qr(I,!1),ue&&$s(ue),!at&&(J=ie&&ie.onVnodeBeforeMount)&&Mt(J,Ae,C),qr(I,!0),oe&&xe){const pt=()=>{I.subTree=Gl(I),xe(oe,I.subTree,I,U,null)};at&&st.__asyncHydrate?st.__asyncHydrate(oe,I,pt):pt()}else{dt.ce&&dt.ce._injectChildStyle(st);const pt=I.subTree=Gl(I);O(null,pt,M,H,I,U,q),C.el=pt.el}if(Pe&&lt(Pe,U),!at&&(J=ie&&ie.onVnodeMounted)){const pt=C;lt(()=>Mt(J,Ae,pt),U)}(C.shapeFlag&256||Ae&&ns(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&I.a&&lt(I.a,U),I.isMounted=!0,C=M=H=null}};I.scope.on();const K=I.effect=new $_(G);I.scope.off();const z=I.update=K.run.bind(K),le=I.job=K.runIfDirty.bind(K);le.i=I,le.id=I.uid,K.scheduler=()=>of(le),qr(I,!0),z()},fe=(I,C,M)=>{C.component=I;const H=I.vnode.props;I.vnode=C,I.next=null,Hb(I,C.props,H,M),Kb(I,C.children,M),Mr(),gp(I),Vr()},ne=(I,C,M,H,U,q,Y,G,K=!1)=>{const z=I&&I.children,le=I?I.shapeFlag:0,J=C.children,{patchFlag:oe,shapeFlag:ie}=C;if(oe>0){if(oe&128){nn(z,J,M,H,U,q,Y,G,K);return}else if(oe&256){ze(z,J,M,H,U,q,Y,G,K);return}}ie&8?(le&16&&Nt(z,U,q),J!==z&&h(M,J)):le&16?ie&16?nn(z,J,M,H,U,q,Y,G,K):Nt(z,U,q,!0):(le&8&&h(M,""),ie&16&&E(J,M,H,U,q,Y,G,K))},ze=(I,C,M,H,U,q,Y,G,K)=>{I=I||Us,C=C||Us;const z=I.length,le=C.length,J=Math.min(z,le);let oe;for(oe=0;oe<J;oe++){const ie=C[oe]=K?hr(C[oe]):qt(C[oe]);O(I[oe],ie,M,null,U,q,Y,G,K)}z>le?Nt(I,U,q,!0,!1,J):E(C,M,H,U,q,Y,G,K,J)},nn=(I,C,M,H,U,q,Y,G,K)=>{let z=0;const le=C.length;let J=I.length-1,oe=le-1;for(;z<=J&&z<=oe;){const ie=I[z],ue=C[z]=K?hr(C[z]):qt(C[z]);if(on(ie,ue))O(ie,ue,M,null,U,q,Y,G,K);else break;z++}for(;z<=J&&z<=oe;){const ie=I[J],ue=C[oe]=K?hr(C[oe]):qt(C[oe]);if(on(ie,ue))O(ie,ue,M,null,U,q,Y,G,K);else break;J--,oe--}if(z>J){if(z<=oe){const ie=oe+1,ue=ie<le?C[ie].el:H;for(;z<=oe;)O(null,C[z]=K?hr(C[z]):qt(C[z]),M,ue,U,q,Y,G,K),z++}}else if(z>oe)for(;z<=J;)We(I[z],U,q,!0),z++;else{const ie=z,ue=z,Pe=new Map;for(z=ue;z<=oe;z++){const At=C[z]=K?hr(C[z]):qt(C[z]);At.key!=null&&Pe.set(At.key,z)}let Ae,dt=0;const st=oe-ue+1;let at=!1,pt=0;const nr=new Array(st);for(z=0;z<st;z++)nr[z]=0;for(z=ie;z<=J;z++){const At=I[z];if(dt>=st){We(At,U,q,!0);continue}let Qt;if(At.key!=null)Qt=Pe.get(At.key);else for(Ae=ue;Ae<=oe;Ae++)if(nr[Ae-ue]===0&&on(At,C[Ae])){Qt=Ae;break}Qt===void 0?We(At,U,q,!0):(nr[Qt-ue]=z+1,Qt>=pt?pt=Qt:at=!0,O(At,C[Qt],M,null,U,q,Y,G,K),dt++)}const Es=at?Yb(nr):Us;for(Ae=Es.length-1,z=st-1;z>=0;z--){const At=ue+z,Qt=C[At],ws=At+1<le?C[At+1].el:H;nr[z]===0?O(null,Qt,M,ws,U,q,Y,G,K):at&&(Ae<0||z!==Es[Ae]?Gt(Qt,M,ws,2):Ae--)}}},Gt=(I,C,M,H,U=null)=>{const{el:q,type:Y,transition:G,children:K,shapeFlag:z}=I;if(z&6){Gt(I.component.subTree,C,M,H);return}if(z&128){I.suspense.move(C,M,H);return}if(z&64){Y.move(I,C,M,se);return}if(Y===$t){r(q,C,M);for(let J=0;J<K.length;J++)Gt(K[J],C,M,H);r(I.anchor,C,M);return}if(Y===Da){y(I,C,M);return}if(H!==2&&z&1&&G)if(H===0)G.beforeEnter(q),r(q,C,M),lt(()=>G.enter(q),U);else{const{leave:J,delayLeave:oe,afterLeave:ie}=G,ue=()=>r(q,C,M),Pe=()=>{J(q,()=>{ue(),ie&&ie()})};oe?oe(q,ue,Pe):Pe()}else r(q,C,M)},We=(I,C,M,H=!1,U=!1)=>{const{type:q,props:Y,ref:G,children:K,dynamicChildren:z,shapeFlag:le,patchFlag:J,dirs:oe,cacheIndex:ie}=I;if(J===-2&&(U=!1),G!=null&&go(G,null,M,I,!0),ie!=null&&(C.renderCache[ie]=void 0),le&256){C.ctx.deactivate(I);return}const ue=le&1&&oe,Pe=!ns(I);let Ae;if(Pe&&(Ae=Y&&Y.onVnodeBeforeUnmount)&&Mt(Ae,C,I),le&6)dn(I.component,M,H);else{if(le&128){I.suspense.unmount(M,H);return}ue&&mn(I,null,C,"beforeUnmount"),le&64?I.type.remove(I,C,M,se,H):z&&!z.hasOnce&&(q!==$t||J>0&&J&64)?Nt(z,C,M,!1,!0):(q===$t&&J&384||!U&&le&16)&&Nt(K,C,M),H&&Ke(I)}(Pe&&(Ae=Y&&Y.onVnodeUnmounted)||ue)&&lt(()=>{Ae&&Mt(Ae,C,I),ue&&mn(I,null,C,"unmounted")},M)},Ke=I=>{const{type:C,el:M,anchor:H,transition:U}=I;if(C===$t){tr(M,H);return}if(C===Da){S(I);return}const q=()=>{s(M),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(I.shapeFlag&1&&U&&!U.persisted){const{leave:Y,delayLeave:G}=U,K=()=>Y(M,q);G?G(I.el,q,K):K()}else q()},tr=(I,C)=>{let M;for(;I!==C;)M=m(I),s(I),I=M;s(C)},dn=(I,C,M)=>{const{bum:H,scope:U,job:q,subTree:Y,um:G,m:K,a:z}=I;ic(K),ic(z),H&&$s(H),U.stop(),q&&(q.flags|=8,We(Y,I,C,M)),G&&lt(G,C),lt(()=>{I.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&I.asyncDep&&!I.asyncResolved&&I.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},Nt=(I,C,M,H=!1,U=!1,q=0)=>{for(let Y=q;Y<I.length;Y++)We(I[Y],C,M,H,U)},j=I=>{if(I.shapeFlag&6)return j(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const C=m(I.anchor||I.el),M=C&&C[gb];return M?m(M):C};let Z=!1;const X=(I,C,M)=>{I==null?C._vnode&&We(C._vnode,null,null,!0):O(C._vnode||null,I,C,null,null,null,M),C._vnode=I,Z||(Z=!0,gp(),tc(),Z=!1)},se={p:O,um:We,m:Gt,r:Ke,mt:_e,mc:E,pc:ne,pbc:w,n:j,o:t};let Te,xe;return e&&([Te,xe]=e(se)),{render:X,hydrate:Te,createApp:Bb(X,Te)}}function Kl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function qr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Fy(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Uy(t,e,n=!1){const r=t.children,s=e.children;if(he(r)&&he(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=hr(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Uy(o,a)),a.type===ss&&(a.el=o.el)}}function Yb(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function jy(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:jy(e)}function ic(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Xb=Symbol.for("v-scx"),Jb=()=>Ot(Xb);function Zb(t,e){return uf(t,null,e)}function Er(t,e,n){return uf(t,e,n)}function uf(t,e,n=De){const{immediate:r,deep:s,flush:i,once:o}=n,a=Ze({},n),l=e&&r||!e&&i!=="post";let u;if(ti){if(i==="sync"){const g=Jb();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!l){const g=()=>{};return g.stop=vn,g.resume=vn,g.pause=vn,g}}const h=et;a.call=(g,A,O)=>ln(g,h,A,O);let d=!1;i==="post"?a.scheduler=g=>{lt(g,h&&h.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(g,A)=>{A?g():of(g)}),a.augmentJob=g=>{e&&(g.flags|=4),d&&(g.flags|=2,h&&(g.id=h.uid,g.i=h))};const m=fb(t,e,a);return ti&&(u?u.push(m):l&&m()),m}function eI(t,e,n){const r=this.proxy,s=He(t)?t.includes(".")?By(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=jo(this),a=uf(s,i.bind(r),n);return o(),a}function By(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const tI=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${en(e)}Modifiers`]||t[`${Lr(e)}Modifiers`];function nI(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||De;let s=n;const i=e.startsWith("update:"),o=i&&tI(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>He(h)?h.trim():h)),o.number&&(s=n.map(Iu)));let a,l=r[a=Fl(e)]||r[a=Fl(en(e))];!l&&i&&(l=r[a=Fl(Lr(e))]),l&&ln(l,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ln(u,t,6,s)}}function $y(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!pe(t)){const l=u=>{const h=$y(u,e,!0);h&&(a=!0,Ze(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Me(t)&&r.set(t,null),null):(he(i)?i.forEach(l=>o[l]=null):Ze(o,i),Me(t)&&r.set(t,o),o)}function Hc(t,e){return!t||!xo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ce(t,e[0].toLowerCase()+e.slice(1))||Ce(t,Lr(e))||Ce(t,e))}function Gl(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:u,renderCache:h,props:d,data:m,setupState:g,ctx:A,inheritAttrs:O}=t,N=nc(t);let x,P;try{if(n.shapeFlag&4){const S=s||r,D=S;x=qt(u.call(D,S,h,d,g,m,A)),P=a}else{const S=e;x=qt(S.length>1?S(d,{attrs:a,slots:o,emit:l}):S(d,null)),P=e.props?a:sI(a)}}catch(S){Ji.length=0,pi(S,t,1),x=$e(ot)}let y=x;if(P&&O!==!1){const S=Object.keys(P),{shapeFlag:D}=y;S.length&&D&7&&(i&&S.some(Qh)&&(P=iI(P,i)),y=Hn(y,P,!1,!0))}return n.dirs&&(y=Hn(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&Js(y,n.transition),x=y,nc(N),x}function rI(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(ei(s)){if(s.type!==ot||s.children==="v-if"){if(n)return;n=s}}else return}return n}const sI=t=>{let e;for(const n in t)(n==="class"||n==="style"||xo(n))&&((e||(e={}))[n]=t[n]);return e},iI=(t,e)=>{const n={};for(const r in t)(!Qh(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function oI(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Sp(r,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const m=h[d];if(o[m]!==r[m]&&!Hc(u,m))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Sp(r,o,u):!0:!!o;return!1}function Sp(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Hc(n,i))return!0}return!1}function qc({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const oc=t=>t.__isSuspense;let Mu=0;const aI={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,l,u){if(t==null)cI(e,n,r,s,i,o,a,l,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}lI(t,e,n,r,s,o,a,l,u)}},hydrate:uI,normalize:hI},Hy=aI;function _o(t,e){const n=t.props&&t.props[e];pe(n)&&n()}function cI(t,e,n,r,s,i,o,a,l){const{p:u,o:{createElement:h}}=l,d=h("div"),m=t.suspense=qy(t,s,r,e,d,n,i,o,a,l);u(null,m.pendingBranch=t.ssContent,d,null,r,m,i,o),m.deps>0?(_o(t,"onPending"),_o(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),zs(m,t.ssFallback)):m.resolve(!1,!0)}function lI(t,e,n,r,s,i,o,a,{p:l,um:u,o:{createElement:h}}){const d=e.suspense=t.suspense;d.vnode=e,e.el=t.el;const m=e.ssContent,g=e.ssFallback,{activeBranch:A,pendingBranch:O,isInFallback:N,isHydrating:x}=d;if(O)d.pendingBranch=m,on(m,O)?(l(O,m,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0?d.resolve():N&&(x||(l(A,g,n,r,s,null,i,o,a),zs(d,g)))):(d.pendingId=Mu++,x?(d.isHydrating=!1,d.activeBranch=O):u(O,s,d),d.deps=0,d.effects.length=0,d.hiddenContainer=h("div"),N?(l(null,m,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0?d.resolve():(l(A,g,n,r,s,null,i,o,a),zs(d,g))):A&&on(m,A)?(l(A,m,n,r,s,d,i,o,a),d.resolve(!0)):(l(null,m,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0&&d.resolve()));else if(A&&on(m,A))l(A,m,n,r,s,d,i,o,a),zs(d,m);else if(_o(e,"onPending"),d.pendingBranch=m,m.shapeFlag&512?d.pendingId=m.component.suspenseId:d.pendingId=Mu++,l(null,m,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0)d.resolve();else{const{timeout:P,pendingId:y}=d;P>0?setTimeout(()=>{d.pendingId===y&&d.fallback(g)},P):P===0&&d.fallback(g)}}function qy(t,e,n,r,s,i,o,a,l,u,h=!1){const{p:d,m,um:g,n:A,o:{parentNode:O,remove:N}}=u;let x;const P=fI(t);P&&e&&e.pendingBranch&&(x=e.pendingId,e.deps++);const y=t.props?L_(t.props.timeout):void 0,S=i,D={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:Mu++,timeout:typeof y=="number"?y:-1,activeBranch:null,pendingBranch:null,isInFallback:!h,isHydrating:h,isUnmounted:!1,effects:[],resolve(V=!1,b=!1){const{vnode:E,activeBranch:v,pendingBranch:w,pendingId:k,effects:R,parentComponent:T,container:_e}=D;let ve=!1;D.isHydrating?D.isHydrating=!1:V||(ve=v&&w.transition&&w.transition.mode==="out-in",ve&&(v.transition.afterLeave=()=>{k===D.pendingId&&(m(w,_e,i===S?A(v):i,0),Cu(R))}),v&&(O(v.el)===_e&&(i=A(v)),g(v,T,D,!0)),ve||m(w,_e,i,0)),zs(D,w),D.pendingBranch=null,D.isInFallback=!1;let re=D.parent,fe=!1;for(;re;){if(re.pendingBranch){re.effects.push(...R),fe=!0;break}re=re.parent}!fe&&!ve&&Cu(R),D.effects=[],P&&e&&e.pendingBranch&&x===e.pendingId&&(e.deps--,e.deps===0&&!b&&e.resolve()),_o(E,"onResolve")},fallback(V){if(!D.pendingBranch)return;const{vnode:b,activeBranch:E,parentComponent:v,container:w,namespace:k}=D;_o(b,"onFallback");const R=A(E),T=()=>{D.isInFallback&&(d(null,V,w,R,v,null,k,a,l),zs(D,V))},_e=V.transition&&V.transition.mode==="out-in";_e&&(E.transition.afterLeave=T),D.isInFallback=!0,g(E,v,null,!0),_e||T()},move(V,b,E){D.activeBranch&&m(D.activeBranch,V,b,E),D.container=V},next(){return D.activeBranch&&A(D.activeBranch)},registerDep(V,b,E){const v=!!D.pendingBranch;v&&D.deps++;const w=V.vnode.el;V.asyncDep.catch(k=>{pi(k,V,0)}).then(k=>{if(V.isUnmounted||D.isUnmounted||D.pendingId!==V.suspenseId)return;V.asyncResolved=!0;const{vnode:R}=V;Fu(V,k,!1),w&&(R.el=w);const T=!w&&V.subTree.el;b(V,R,O(w||V.subTree.el),w?null:A(V.subTree),D,o,E),T&&N(T),qc(V,R.el),v&&--D.deps===0&&D.resolve()})},unmount(V,b){D.isUnmounted=!0,D.activeBranch&&g(D.activeBranch,n,V,b),D.pendingBranch&&g(D.pendingBranch,n,V,b)}};return D}function uI(t,e,n,r,s,i,o,a,l){const u=e.suspense=qy(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),h=l(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),h}function hI(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=Pp(r?n.default:n),t.ssFallback=r?Pp(n.fallback):$e(ot)}function Pp(t){let e;if(pe(t)){const n=Zs&&t._c;n&&(t._d=!1,Ht()),t=t(),n&&(t._d=!0,e=Ft,Wy())}return he(t)&&(t=rI(t)),t=qt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function zy(t,e){e&&e.pendingBranch?he(t)?e.effects.push(...t):e.effects.push(t):Cu(t)}function zs(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,qc(r,s))}function fI(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const $t=Symbol.for("v-fgt"),ss=Symbol.for("v-txt"),ot=Symbol.for("v-cmt"),Da=Symbol.for("v-stc"),Ji=[];let Ft=null;function Ht(t=!1){Ji.push(Ft=t?null:[])}function Wy(){Ji.pop(),Ft=Ji[Ji.length-1]||null}let Zs=1;function Cp(t,e=!1){Zs+=t,t<0&&Ft&&e&&(Ft.hasOnce=!0)}function Ky(t){return t.dynamicChildren=Zs>0?Ft||Us:null,Wy(),Zs>0&&Ft&&Ft.push(t),t}function Bi(t,e,n,r,s,i){return Ky(Dt(t,e,n,r,s,i,!0))}function Xr(t,e,n,r,s){return Ky($e(t,e,n,r,s,!0))}function ei(t){return t?t.__v_isVNode===!0:!1}function on(t,e){return t.type===e.type&&t.key===e.key}const Gy=({key:t})=>t??null,La=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?He(t)||tt(t)||pe(t)?{i:kt,r:t,k:e,f:!!n}:t:null);function Dt(t,e=null,n=null,r=0,s=null,i=t===$t?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Gy(e),ref:e&&La(e),scopeId:ly,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:kt};return a?(hf(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=He(n)?8:16),Zs>0&&!o&&Ft&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ft.push(l),l}const $e=dI;function dI(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===by)&&(t=ot),ei(t)){const a=Hn(t,e,!0);return n&&hf(a,n),Zs>0&&!i&&Ft&&(a.shapeFlag&6?Ft[Ft.indexOf(t)]=a:Ft.push(a)),a.patchFlag=-2,a}if(bI(t)&&(t=t.__vccOpts),e){e=Qy(e);let{class:a,style:l}=e;a&&!He(a)&&(e.class=Do(a)),Me(l)&&(sf(l)&&!he(l)&&(l=Ze({},l)),e.style=jc(l))}const o=He(t)?1:oc(t)?128:uy(t)?64:Me(t)?4:pe(t)?2:0;return Dt(t,e,n,r,s,o,i,!0)}function Qy(t){return t?sf(t)||ky(t)?Ze({},t):t:null}function Hn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=t,u=e?mI(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Gy(u),ref:e&&e.ref?n&&i?he(i)?i.concat(La(e)):[i,La(e)]:La(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==$t?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Hn(t.ssContent),ssFallback:t.ssFallback&&Hn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Js(h,l.clone(h)),h}function Zi(t=" ",e=0){return $e(ss,null,t,e)}function pI(t="",e=!1){return e?(Ht(),Xr(ot,null,t)):$e(ot,null,t)}function qt(t){return t==null||typeof t=="boolean"?$e(ot):he(t)?$e($t,null,t.slice()):ei(t)?hr(t):$e(ss,null,String(t))}function hr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Hn(t)}function hf(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(he(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),hf(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!ky(e)?e._ctx=kt:s===3&&kt&&(kt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:kt},n=32):(e=String(e),r&64?(n=16,e=[Zi(e)]):n=8);t.children=e,t.shapeFlag|=n}function mI(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Do([e.class,r.class]));else if(s==="style")e.style=jc([e.style,r.style]);else if(xo(s)){const i=e[s],o=r[s];o&&i!==o&&!(he(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Mt(t,e,n,r=null){ln(t,e,7,[n,r])}const gI=Ry();let _I=0;function yI(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||gI,i={uid:_I++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new j_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xy(r,s),emitsOptions:$y(r,s),emit:null,emitted:null,propsDefaults:De,inheritAttrs:r.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=nI.bind(null,i),t.ce&&t.ce(i),i}let et=null;const zc=()=>et||kt;let ac,Vu;{const t=Uc(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ac=e("__VUE_INSTANCE_SETTERS__",n=>et=n),Vu=e("__VUE_SSR_SETTERS__",n=>ti=n)}const jo=t=>{const e=et;return ac(t),t.scope.on(),()=>{t.scope.off(),ac(e)}},kp=()=>{et&&et.scope.off(),ac(null)};function Yy(t){return t.vnode.shapeFlag&4}let ti=!1;function vI(t,e=!1,n=!1){e&&Vu(e);const{props:r,children:s}=t.vnode,i=Yy(t);$b(t,r,i,e),Wb(t,s,n);const o=i?EI(t,e):void 0;return e&&Vu(!1),o}function EI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Db);const{setup:r}=n;if(r){Mr();const s=t.setupContext=r.length>1?TI(t):null,i=jo(t),o=Lo(r,t,0,[t.props,s]),a=O_(o);if(Vr(),i(),(a||t.sp)&&!ns(t)&&af(t),a){if(o.then(kp,kp),e)return o.then(l=>{Fu(t,l,e)}).catch(l=>{pi(l,t,0)});t.asyncDep=o}else Fu(t,o,e)}else Xy(t,e)}function Fu(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Me(e)&&(t.setupState=sy(e)),Xy(t,n)}let Op;function Xy(t,e,n){const r=t.type;if(!t.render){if(!e&&Op&&!r.render){const s=r.template||cf(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,u=Ze(Ze({isCustomElement:i,delimiters:a},o),l);r.render=Op(s,u)}}t.render=r.render||vn}{const s=jo(t);Mr();try{Lb(t)}finally{Vr(),s()}}}const wI={get(t,e){return vt(t,"get",""),t[e]}};function TI(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,wI),slots:t.slots,emit:t.emit,expose:e}}function Wc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(sy(rb(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Xi)return Xi[n](t)},has(e,n){return n in e||n in Xi}})):t.proxy}function Uu(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function bI(t){return pe(t)&&"__vccOpts"in t}const Fe=(t,e)=>ub(t,e,ti);function zt(t,e,n){const r=arguments.length;return r===2?Me(e)&&!he(e)?ei(e)?$e(t,null,[e]):$e(t,e):$e(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ei(n)&&(n=[n]),$e(t,e,n))}const Jy="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ju;const xp=typeof window<"u"&&window.trustedTypes;if(xp)try{ju=xp.createPolicy("vue",{createHTML:t=>t})}catch{}const Zy=ju?t=>ju.createHTML(t):t=>t,II="http://www.w3.org/2000/svg",AI="http://www.w3.org/1998/Math/MathML",On=typeof document<"u"?document:null,Np=On&&On.createElement("template"),RI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?On.createElementNS(II,t):e==="mathml"?On.createElementNS(AI,t):n?On.createElement(t,{is:n}):On.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>On.createTextNode(t),createComment:t=>On.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>On.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Np.innerHTML=Zy(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Np.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},or="transition",Vi="animation",yo=Symbol("_vtc"),ev={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},SI=Ze({},hy,ev),PI=t=>(t.displayName="Transition",t.props=SI,t),CI=PI((t,{slots:e})=>zt(vb,kI(t),e)),zr=(t,e=[])=>{he(t)?t.forEach(n=>n(...e)):t&&t(...e)},Dp=t=>t?he(t)?t.some(e=>e.length>1):t.length>1:!1;function kI(t){const e={};for(const R in t)R in ev||(e[R]=t[R]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:h=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,A=OI(s),O=A&&A[0],N=A&&A[1],{onBeforeEnter:x,onEnter:P,onEnterCancelled:y,onLeave:S,onLeaveCancelled:D,onBeforeAppear:V=x,onAppear:b=P,onAppearCancelled:E=y}=e,v=(R,T,_e,ve)=>{R._enterCancelled=ve,Wr(R,T?h:a),Wr(R,T?u:o),_e&&_e()},w=(R,T)=>{R._isLeaving=!1,Wr(R,d),Wr(R,g),Wr(R,m),T&&T()},k=R=>(T,_e)=>{const ve=R?b:P,re=()=>v(T,R,_e);zr(ve,[T,re]),Lp(()=>{Wr(T,R?l:i),Cn(T,R?h:a),Dp(ve)||Mp(T,r,O,re)})};return Ze(e,{onBeforeEnter(R){zr(x,[R]),Cn(R,i),Cn(R,o)},onBeforeAppear(R){zr(V,[R]),Cn(R,l),Cn(R,u)},onEnter:k(!1),onAppear:k(!0),onLeave(R,T){R._isLeaving=!0;const _e=()=>w(R,T);Cn(R,d),R._enterCancelled?(Cn(R,m),Up()):(Up(),Cn(R,m)),Lp(()=>{R._isLeaving&&(Wr(R,d),Cn(R,g),Dp(S)||Mp(R,r,N,_e))}),zr(S,[R,_e])},onEnterCancelled(R){v(R,!1,void 0,!0),zr(y,[R])},onAppearCancelled(R){v(R,!0,void 0,!0),zr(E,[R])},onLeaveCancelled(R){w(R),zr(D,[R])}})}function OI(t){if(t==null)return null;if(Me(t))return[Ql(t.enter),Ql(t.leave)];{const e=Ql(t);return[e,e]}}function Ql(t){return L_(t)}function Cn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[yo]||(t[yo]=new Set)).add(e)}function Wr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[yo];n&&(n.delete(e),n.size||(t[yo]=void 0))}function Lp(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let xI=0;function Mp(t,e,n,r){const s=t._endId=++xI,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=NI(t,e);if(!o)return r();const u=o+"end";let h=0;const d=()=>{t.removeEventListener(u,m),i()},m=g=>{g.target===t&&++h>=l&&d()};setTimeout(()=>{h<l&&d()},a+1),t.addEventListener(u,m)}function NI(t,e){const n=window.getComputedStyle(t),r=A=>(n[A]||"").split(", "),s=r(`${or}Delay`),i=r(`${or}Duration`),o=Vp(s,i),a=r(`${Vi}Delay`),l=r(`${Vi}Duration`),u=Vp(a,l);let h=null,d=0,m=0;e===or?o>0&&(h=or,d=o,m=i.length):e===Vi?u>0&&(h=Vi,d=u,m=l.length):(d=Math.max(o,u),h=d>0?o>u?or:Vi:null,m=h?h===or?i.length:l.length:0);const g=h===or&&/\b(transform|all)(,|$)/.test(r(`${or}Property`).toString());return{type:h,timeout:d,propCount:m,hasTransform:g}}function Vp(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Fp(n)+Fp(t[r])))}function Fp(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Up(){return document.body.offsetHeight}function DI(t,e,n){const r=t[yo];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const jp=Symbol("_vod"),LI=Symbol("_vsh"),MI=Symbol(""),VI=/(^|;)\s*display\s*:/;function FI(t,e,n){const r=t.style,s=He(n);let i=!1;if(n&&!s){if(e)if(He(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ma(r,a,"")}else for(const o in e)n[o]==null&&Ma(r,o,"");for(const o in n)o==="display"&&(i=!0),Ma(r,o,n[o])}else if(s){if(e!==n){const o=r[MI];o&&(n+=";"+o),r.cssText=n,i=VI.test(n)}}else e&&t.removeAttribute("style");jp in t&&(t[jp]=i?r.display:"",t[LI]&&(r.display="none"))}const Bp=/\s*!important$/;function Ma(t,e,n){if(he(n))n.forEach(r=>Ma(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=UI(t,e);Bp.test(n)?t.setProperty(Lr(r),n.replace(Bp,""),"important"):t[r]=n}}const $p=["Webkit","Moz","ms"],Yl={};function UI(t,e){const n=Yl[e];if(n)return n;let r=en(e);if(r!=="filter"&&r in t)return Yl[e]=r;r=Fc(r);for(let s=0;s<$p.length;s++){const i=$p[s]+r;if(i in t)return Yl[e]=i}return e}const Hp="http://www.w3.org/1999/xlink";function qp(t,e,n,r,s,i=MT(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Hp,e.slice(6,e.length)):t.setAttributeNS(Hp,e,n):n==null||i&&!M_(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Dr(n)?String(n):n)}function zp(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Zy(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=M_(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Cs(t,e,n,r){t.addEventListener(e,n,r)}function jI(t,e,n,r){t.removeEventListener(e,n,r)}const Wp=Symbol("_vei");function BI(t,e,n,r,s=null){const i=t[Wp]||(t[Wp]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=$I(e);if(r){const u=i[e]=zI(r,s);Cs(t,a,u,l)}else o&&(jI(t,a,o,l),i[e]=void 0)}}const Kp=/(?:Once|Passive|Capture)$/;function $I(t){let e;if(Kp.test(t)){e={};let r;for(;r=t.match(Kp);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Lr(t.slice(2)),e]}let Xl=0;const HI=Promise.resolve(),qI=()=>Xl||(HI.then(()=>Xl=0),Xl=Date.now());function zI(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ln(WI(r,n.value),e,5,[r])};return n.value=t,n.attached=qI(),n}function WI(t,e){if(he(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Gp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,KI=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?DI(t,r,o):e==="style"?FI(t,n,r):xo(e)?Qh(e)||BI(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):GI(t,e,r,o))?(zp(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&qp(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!He(r))?zp(t,en(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),qp(t,e,r,o))};function GI(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Gp(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Gp(e)&&He(n)?!1:e in t}const Qp=t=>{const e=t.props["onUpdate:modelValue"]||!1;return he(e)?n=>$s(e,n):e};function QI(t){t.target.composing=!0}function Yp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Jl=Symbol("_assign"),YI={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Jl]=Qp(s);const i=r||s.props&&s.props.type==="number";Cs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Iu(a)),t[Jl](a)}),n&&Cs(t,"change",()=>{t.value=t.value.trim()}),e||(Cs(t,"compositionstart",QI),Cs(t,"compositionend",Yp),Cs(t,"change",Yp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Jl]=Qp(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Iu(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},XI=["ctrl","shift","alt","meta"],JI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>XI.some(n=>t[`${n}Key`]&&!e.includes(n))},a2=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=JI[e[o]];if(a&&a(s,e))return}return t(s,...i)})},ZI={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},eA=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=Lr(s.key);if(e.some(o=>o===i||ZI[o]===i))return t(s)})},tv=Ze({patchProp:KI},RI);let eo,Xp=!1;function tA(){return eo||(eo=Gb(tv))}function nA(){return eo=Xp?eo:Qb(tv),Xp=!0,eo}const rA=(...t)=>{const e=tA().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=rv(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,nv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},sA=(...t)=>{const e=nA().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=rv(r);if(s)return n(s,!0,nv(s))},e};function nv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function rv(t){return He(t)?document.querySelector(t):t}const iA=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,oA=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,aA=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function cA(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){lA(t);return}return e}function lA(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function cc(t,e={}){if(typeof t!="string")return t;const n=t.trim();if(t[0]==='"'&&t.endsWith('"')&&!t.includes("\\"))return n.slice(1,-1);if(n.length<=9){const r=n.toLowerCase();if(r==="true")return!0;if(r==="false")return!1;if(r==="undefined")return;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r==="-infinity")return Number.NEGATIVE_INFINITY}if(!aA.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(iA.test(t)||oA.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,cA)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const uA=/#/g,hA=/&/g,fA=/\//g,dA=/=/g,ff=/\+/g,pA=/%5e/gi,mA=/%60/gi,gA=/%7c/gi,_A=/%20/gi;function yA(t){return encodeURI(""+t).replace(gA,"|")}function Bu(t){return yA(typeof t=="string"?t:JSON.stringify(t)).replace(ff,"%2B").replace(_A,"+").replace(uA,"%23").replace(hA,"%26").replace(mA,"`").replace(pA,"^").replace(fA,"%2F")}function Zl(t){return Bu(t).replace(dA,"%3D")}function lc(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function vA(t){return lc(t.replace(ff," "))}function EA(t){return lc(t.replace(ff," "))}function sv(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=vA(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=EA(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function wA(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${Zl(t)}=${Bu(n)}`).join("&"):`${Zl(t)}=${Bu(e)}`:Zl(t)}function TA(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>wA(e,t[e])).filter(Boolean).join("&")}const bA=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,IA=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,AA=/^([/\\]\s*){2,}[^/\\]/,RA=/^[\s\0]*(blob|data|javascript|vbscript):$/i,SA=/\/$|\/\?|\/#/,PA=/^\.?\//;function Xn(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?bA.test(t):IA.test(t)||(e.acceptRelative?AA.test(t):!1)}function CA(t){return!!t&&RA.test(t)}function $u(t="",e){return e?SA.test(t):t.endsWith("/")}function Kc(t="",e){if(!e)return($u(t)?t.slice(0,-1):t)||"/";if(!$u(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");s>=0&&(n=t.slice(0,s),r=t.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function uc(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if($u(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");if(s>=0&&(n=t.slice(0,s),r=t.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function kA(t=""){return t.startsWith("/")}function Jp(t=""){return kA(t)?t:"/"+t}function OA(t,e){if(ov(e)||Xn(t))return t;const n=Kc(e);return t.startsWith(n)?t:Gc(n,t)}function Zp(t,e){if(ov(e))return t;const n=Kc(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function iv(t,e){const n=DA(t),r={...sv(n.search),...e};return n.search=TA(r),LA(n)}function ov(t){return!t||t==="/"}function xA(t){return t&&t!=="/"}function Gc(t,...e){let n=t||"";for(const r of e.filter(s=>xA(s)))if(n){const s=r.replace(PA,"");n=uc(n)+s}else n=r;return n}function av(...t){var o,a,l,u;const e=/\/(?!\/)/,n=t.filter(Boolean),r=[];let s=0;for(const h of n)if(!(!h||h==="/")){for(const[d,m]of h.split(e).entries())if(!(!m||m===".")){if(m===".."){if(r.length===1&&Xn(r[0]))continue;r.pop(),s--;continue}if(d===1&&((o=r[r.length-1])!=null&&o.endsWith(":/"))){r[r.length-1]+="/"+m;continue}r.push(m),s++}}let i=r.join("/");return s>=0?(a=n[0])!=null&&a.startsWith("/")&&!i.startsWith("/")?i="/"+i:(l=n[0])!=null&&l.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,(u=n[n.length-1])!=null&&u.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function NA(t,e,n={}){return n.trailingSlash||(t=uc(t),e=uc(e)),n.leadingSlash||(t=Jp(t),e=Jp(e)),n.encoding||(t=lc(t),e=lc(e)),t===e}const cv=Symbol.for("ufo:protocolRelative");function DA(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,d,m=""]=n;return{protocol:d.toLowerCase(),pathname:m,href:d+m,auth:"",host:"",search:"",hash:""}}if(!Xn(t,{acceptRelative:!0}))return em(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:u,hash:h}=em(a);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:l,search:u,hash:h,[cv]:!r}}function em(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function LA(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[cv]?(t.protocol||"")+"//":"")+s+i+e+n+r}class MA extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function VA(t){var l,u,h,d,m;const e=((l=t.error)==null?void 0:l.message)||((u=t.error)==null?void 0:u.toString())||"",n=((h=t.request)==null?void 0:h.method)||((d=t.options)==null?void 0:d.method)||"GET",r=((m=t.request)==null?void 0:m.url)||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,a=new MA(o,t.error?{cause:t.error}:void 0);for(const g of["request","options","response"])Object.defineProperty(a,g,{get(){return t[g]}});for(const[g,A]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,g,{get(){return t.response&&t.response[A]}});return a}const FA=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function tm(t="GET"){return FA.has(t.toUpperCase())}function UA(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const jA=new Set(["image/svg","application/xml","application/xhtml","application/html"]),BA=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function $A(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return BA.test(e)?"json":jA.has(e)||e.startsWith("text/")?"text":"blob"}function HA(t,e,n,r){const s=qA((e==null?void 0:e.headers)??(t==null?void 0:t.headers),n==null?void 0:n.headers,r);let i;return(n!=null&&n.query||n!=null&&n.params||e!=null&&e.params||e!=null&&e.query)&&(i={...n==null?void 0:n.params,...n==null?void 0:n.query,...e==null?void 0:e.params,...e==null?void 0:e.query}),{...n,...e,query:i,params:i,headers:s}}function qA(t,e,n){if(!e)return new n(t);const r=new n(e);if(t)for(const[s,i]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))r.set(s,i);return r}async function Ta(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const zA=new Set([408,409,425,429,500,502,503,504]),WA=new Set([101,204,205,304]);function lv(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let h;typeof a.options.retry=="number"?h=a.options.retry:h=tm(a.options.method)?0:1;const d=a.response&&a.response.status||500;if(h>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(d):zA.has(d))){const m=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return m>0&&await new Promise(g=>setTimeout(g,m)),i(a.request,{...a.options,retry:h-1})}}const u=VA(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,i),u}const i=async function(l,u={}){const h={request:l,options:HA(l,u,t.defaults,n),response:void 0,error:void 0};h.options.method&&(h.options.method=h.options.method.toUpperCase()),h.options.onRequest&&await Ta(h,h.options.onRequest),typeof h.request=="string"&&(h.options.baseURL&&(h.request=OA(h.request,h.options.baseURL)),h.options.query&&(h.request=iv(h.request,h.options.query),delete h.options.query),"query"in h.options&&delete h.options.query,"params"in h.options&&delete h.options.params),h.options.body&&tm(h.options.method)&&(UA(h.options.body)?(h.options.body=typeof h.options.body=="string"?h.options.body:JSON.stringify(h.options.body),h.options.headers=new n(h.options.headers||{}),h.options.headers.has("content-type")||h.options.headers.set("content-type","application/json"),h.options.headers.has("accept")||h.options.headers.set("accept","application/json")):("pipeTo"in h.options.body&&typeof h.options.body.pipeTo=="function"||typeof h.options.body.pipe=="function")&&("duplex"in h.options||(h.options.duplex="half")));let d;if(!h.options.signal&&h.options.timeout){const g=new r;d=setTimeout(()=>{const A=new Error("[TimeoutError]: The operation was aborted due to timeout");A.name="TimeoutError",A.code=23,g.abort(A)},h.options.timeout),h.options.signal=g.signal}try{h.response=await e(h.request,h.options)}catch(g){return h.error=g,h.options.onRequestError&&await Ta(h,h.options.onRequestError),await s(h)}finally{d&&clearTimeout(d)}if((h.response.body||h.response._bodyInit)&&!WA.has(h.response.status)&&h.options.method!=="HEAD"){const g=(h.options.parseResponse?"json":h.options.responseType)||$A(h.response.headers.get("content-type")||"");switch(g){case"json":{const A=await h.response.text(),O=h.options.parseResponse||cc;h.response._data=O(A);break}case"stream":{h.response._data=h.response.body||h.response._bodyInit;break}default:h.response._data=await h.response[g]()}}return h.options.onResponse&&await Ta(h,h.options.onResponse),!h.options.ignoreResponseError&&h.response.status>=400&&h.response.status<600?(h.options.onResponseError&&await Ta(h,h.options.onResponseError),await s(h)):h.response},o=async function(l,u){return(await i(l,u))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={},l={})=>lv({...t,...l,defaults:{...t.defaults,...l.defaults,...a}}),o}const hc=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),KA=hc.fetch?(...t)=>hc.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),GA=hc.Headers,QA=hc.AbortController,YA=lv({fetch:KA,Headers:GA,AbortController:QA}),XA=YA,JA=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},fc=JA().app,ZA=()=>fc.baseURL,eR=()=>fc.buildAssetsDir,df=(...t)=>av(uv(),eR(),...t),uv=(...t)=>{const e=fc.cdnURL||fc.baseURL;return t.length?av(e,...t):e};globalThis.__buildAssetsURL=df,globalThis.__publicAssetsURL=uv;globalThis.$fetch||(globalThis.$fetch=XA.create({baseURL:ZA()}));function Hu(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?Hu(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const tR={run:t=>t()},nR=()=>tR,hv=typeof console.createTask<"u"?console.createTask:nR;function rR(t,e){const n=e.shift(),r=hv(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function sR(t,e){const n=e.shift(),r=hv(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function eu(t,e){for(const n of[...t])n(e)}class iR{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Hu(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=Hu(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(rR,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(sR,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&eu(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&eu(this._after,s)}):(this._after&&s&&eu(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function fv(){return new iR}function oR(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s&&e===void 0){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{r(o),e=o;try{return s?s.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},u=()=>e===o?l:void 0;qu.add(u);try{const h=s?s.run(o,a):a();return n||(e=void 0),await h}finally{qu.delete(u)}}}}function aR(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=oR({...t,...r})),e[n],e[n]}}}const dc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},nm="__unctx__",cR=dc[nm]||(dc[nm]=aR()),lR=(t,e={})=>cR.get(t,e),rm="__unctx_async_handlers__",qu=dc[rm]||(dc[rm]=new Set);function Ws(t){const e=[];for(const s of qu){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const zu=!1,uR=!1,hR={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},fR=null,dR="#__nuxt",dv="nuxt-app",sm=36e5,pR="vite:preloadError";function pv(t=dv){return lR(t,{asyncContext:!1})}const mR="__nuxt_plugin";function gR(t){var s;let e=0;const n={_id:t.id||dv||"nuxt-app",_scope:VT(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.14.1592"},get vue(){return n.vueApp.version}},payload:Mn({...((s=t.ssrContext)==null?void 0:s.payload)||{},data:Mn({}),state:Fr({}),once:new Set,_errors:Mn({})}),static:{data:{}},runWithContext(i){return n._scope.active&&!B_()?n._scope.run(()=>im(n,i)):im(n,i)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let i=!1;return()=>{if(!i&&(i=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:Mn({}),_payloadRevivers:{},...t};{const i=window.__NUXT__;if(i)for(const o in i)switch(o){case"data":case"state":case"_errors":Object.assign(n.payload[o],i[o]);break;default:n.payload[o]=i[o]}}n.hooks=fv(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(i,o)=>{const a="$"+i;ba(n,a,o),ba(n.vueApp.config.globalProperties,a,o)},ba(n.vueApp,"$nuxt",n),ba(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(pR,o=>{n.callHook("app:chunkError",{error:o.payload}),(n.isHydrating||o.payload.message.includes("Unable to preload CSS"))&&o.preventDefault()}),window.useNuxtApp=window.useNuxtApp||qe;const i=n.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});n.hook("app:mounted",i)}const r=n.payload.config;return n.provide("config",r),n}function _R(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function yR(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function vR(t,e){const n=[],r=[],s=[],i=[];let o=0;async function a(l){var h;const u=((h=l.dependsOn)==null?void 0:h.filter(d=>e.some(m=>m._name===d)&&!n.includes(d)))??[];if(u.length>0)r.push([new Set(u),l]);else{const d=yR(t,l).then(async()=>{l._name&&(n.push(l._name),await Promise.all(r.map(async([m,g])=>{m.has(l._name)&&(m.delete(l._name),m.size===0&&(o++,await a(g)))})))});l.parallel?s.push(d.catch(m=>i.push(m))):await d}}for(const l of e)_R(t,l);for(const l of e)await a(l);if(await Promise.all(s),o)for(let l=0;l<o;l++)await Promise.all(s);if(i.length)throw i[0]}function tn(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[mR]:!0,_name:e})}function im(t,e,n){const r=()=>e();return pv(t._id).set(t),t.vueApp.runWithContext(r)}function ER(t){var n;let e;return Sy()&&(e=(n=zc())==null?void 0:n.appContext.app.$nuxt),e=e||pv(t).tryUse(),e||null}function qe(t){const e=ER(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function mi(t){return qe().$config}function ba(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function wR(t,e){return{ctx:{table:t},matchAll:n=>gv(n,t)}}function mv(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,s])=>[r,mv(s)])):new Map(Object.entries(t[n]));return e}function TR(t){return wR(mv(t))}function gv(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const r=[];for(const[i,o]of om(e.wildcard))(t===i||t.startsWith(i+"/"))&&r.push(o);for(const[i,o]of om(e.dynamic))if(t.startsWith(i+"/")){const a="/"+t.slice(i.length).split("/").splice(2).join("/");r.push(...gv(a,o))}const s=e.static.get(t);return s&&r.push(s),r.filter(Boolean)}function om(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function tu(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function Wu(t,e,n=".",r){if(!tu(e))return Wu(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:tu(o)&&tu(s[i])?s[i]=Wu(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function bR(t){return(...e)=>e.reduce((n,r)=>Wu(n,r,"",t),{})}const _v=bR();function IR(t,e){try{return e in t}catch{return!1}}var AR=Object.defineProperty,RR=(t,e,n)=>e in t?AR(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Qr=(t,e,n)=>(RR(t,typeof e!="symbol"?e+"":e,n),n);class Ku extends Error{constructor(e,n={}){super(e,n),Qr(this,"statusCode",500),Qr(this,"fatal",!1),Qr(this,"unhandled",!1),Qr(this,"statusMessage"),Qr(this,"data"),Qr(this,"cause"),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const e={message:this.message,statusCode:Qu(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=yv(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}Qr(Ku,"__h3_error__",!0);function Gu(t){if(typeof t=="string")return new Ku(t);if(SR(t))return t;const e=new Ku(t.message??t.statusMessage??"",{cause:t.cause||t});if(IR(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=Qu(t.statusCode,e.statusCode):t.status&&(e.statusCode=Qu(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;yv(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function SR(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const PR=/[^\u0009\u0020-\u007E]/g;function yv(t=""){return t.replace(PR,"")}function Qu(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const CR=Symbol("layout-meta"),Qc=Symbol("route"),Ut=()=>{var t;return(t=qe())==null?void 0:t.$router},vv=()=>Sy()?Ot(Qc,qe()._route):qe()._route;const kR=()=>{try{if(qe()._processingMiddleware)return!0}catch{return!1}return!1},OR=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:"path"in t?Yu(t):Ut().resolve(t).href;if(e!=null&&e.open){const{target:l="_blank",windowFeatures:u={}}=e.open,h=Object.entries(u).filter(([d,m])=>m!==void 0).map(([d,m])=>`${d.toLowerCase()}=${m}`).join(", ");return open(n,l,h),Promise.resolve()}const r=Xn(n,{acceptRelative:!0}),s=(e==null?void 0:e.external)||r;if(s){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:l}=new URL(n,window.location.href);if(l&&CA(l))throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)}const i=kR();if(!s&&i)return t;const o=Ut(),a=qe();return s?(a._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(t):o.push(t)};function Yu(t){return iv(t.path||"",t.query||{})+(t.hash||"")}const Ev="__nuxt_error",Yc=()=>iy(qe().payload,"error"),Ms=t=>{const e=Xc(t);try{const n=qe(),r=Yc();n.hooks.callHook("app:error",e),r.value=r.value||e}catch{throw e}return e},xR=async(t={})=>{const e=qe(),n=Yc();e.callHook("app:error:cleared",t),t.redirect&&await Ut().replace(t.redirect),n.value=fR},NR=t=>!!t&&typeof t=="object"&&Ev in t,Xc=t=>{const e=Gu(t);return Object.defineProperty(e,Ev,{value:!0,configurable:!1,writable:!1}),e};function am(t){const e=LR(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let s=0;s<n.byteLength;s++)r.setUint8(s,e.charCodeAt(s));return n}const DR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function LR(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let s=0;s<t.length;s++)n<<=6,n|=DR.indexOf(t[s]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const MR=-1,VR=-2,FR=-3,UR=-4,jR=-5,BR=-6;function $R(t,e){return HR(JSON.parse(t),e)}function HR(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===MR)return;if(i===FR)return NaN;if(i===UR)return 1/0;if(i===jR)return-1/0;if(i===BR)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const a=n[i];if(!a||typeof a!="object")r[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],u=e==null?void 0:e[l];if(u)return r[i]=u(s(a[1]));switch(l){case"Date":r[i]=new Date(a[1]);break;case"Set":const h=new Set;r[i]=h;for(let g=1;g<a.length;g+=1)h.add(s(a[g]));break;case"Map":const d=new Map;r[i]=d;for(let g=1;g<a.length;g+=2)d.set(s(a[g]),s(a[g+1]));break;case"RegExp":r[i]=new RegExp(a[1],a[2]);break;case"Object":r[i]=Object(a[1]);break;case"BigInt":r[i]=BigInt(a[1]);break;case"null":const m=Object.create(null);r[i]=m;for(let g=1;g<a.length;g+=2)m[a[g]]=s(a[g+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const g=globalThis[l],A=a[1],O=am(A),N=new g(O);r[i]=N;break}case"ArrayBuffer":{const g=a[1],A=am(g);r[i]=A;break}default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);r[i]=l;for(let u=0;u<a.length;u+=1){const h=a[u];h!==VR&&(l[u]=s(h))}}else{const l={};r[i]=l;for(const u in a){const h=a[u];l[u]=s(h)}}return r[i]}return s(0)}const qR=new Set(["title","titleTemplate","script","style","noscript"]),Va=new Set(["base","meta","link","style","script","noscript"]),zR=new Set(["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),WR=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),wv=new Set(["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"]),KR=typeof window<"u";function pc(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Xu(t){if(t._h)return t._h;if(t._d)return pc(t._d);let e=`${t.tag}:${t.textContent||t.innerHTML||""}:`;for(const n in t.props)e+=`${n}:${String(t.props[n])},`;return pc(e)}function Tv(t,e){const n=[],r=e.resolveKeyData||(i=>i.key),s=e.resolveValueData||(i=>i.value);for(const[i,o]of Object.entries(t))n.push(...(Array.isArray(o)?o:[o]).map(a=>{const l={key:i,value:a},u=s(l);return typeof u=="object"?Tv(u,e):Array.isArray(u)?u:{[typeof e.key=="function"?e.key(l):e.key]:r(l),[typeof e.value=="function"?e.value(l):e.value]:u}}).flat());return n}function bv(t,e){return Object.entries(t).map(([n,r])=>{if(typeof r=="object"&&(r=bv(r,e)),e.resolve){const s=e.resolve({key:n,value:r});if(typeof s<"u")return s}return typeof r=="number"&&(r=r.toString()),typeof r=="string"&&e.wrapValue&&(r=r.replace(new RegExp(e.wrapValue,"g"),`\\${e.wrapValue}`),r=`${e.wrapValue}${r}${e.wrapValue}`),`${n}${e.keyValueSeparator||""}${r}`}).join(e.entrySeparator||"")}const St=t=>({keyValue:t,metaKey:"property"}),nu=t=>({keyValue:t}),pf={appleItunesApp:{unpack:{entrySeparator:", ",resolve({key:t,value:e}){return`${Vn(t)}=${e}`}}},articleExpirationTime:St("article:expiration_time"),articleModifiedTime:St("article:modified_time"),articlePublishedTime:St("article:published_time"),bookReleaseDate:St("book:release_date"),charset:{metaKey:"charset"},contentSecurityPolicy:{unpack:{entrySeparator:"; ",resolve({key:t,value:e}){return`${Vn(t)} ${e}`}},metaKey:"http-equiv"},contentType:{metaKey:"http-equiv"},defaultStyle:{metaKey:"http-equiv"},fbAppId:St("fb:app_id"),msapplicationConfig:nu("msapplication-Config"),msapplicationTileColor:nu("msapplication-TileColor"),msapplicationTileImage:nu("msapplication-TileImage"),ogAudioSecureUrl:St("og:audio:secure_url"),ogAudioUrl:St("og:audio"),ogImageSecureUrl:St("og:image:secure_url"),ogImageUrl:St("og:image"),ogSiteName:St("og:site_name"),ogVideoSecureUrl:St("og:video:secure_url"),ogVideoUrl:St("og:video"),profileFirstName:St("profile:first_name"),profileLastName:St("profile:last_name"),profileUsername:St("profile:username"),refresh:{metaKey:"http-equiv",unpack:{entrySeparator:";",resolve({key:t,value:e}){if(t==="seconds")return`${e}`}}},robots:{unpack:{entrySeparator:", ",resolve({key:t,value:e}){return typeof e=="boolean"?`${Vn(t)}`:`${Vn(t)}:${e}`}}},xUaCompatible:{metaKey:"http-equiv"}},Iv=new Set(["og","book","article","profile"]);function Av(t){var r;const e=Vn(t),n=e.indexOf(":");return Iv.has(e.substring(0,n))?"property":((r=pf[t])==null?void 0:r.metaKey)||"name"}function GR(t){var e;return((e=pf[t])==null?void 0:e.keyValue)||Vn(t)}function Vn(t){const e=t.replace(/([A-Z])/g,"-$1").toLowerCase(),n=e.indexOf("-"),r=e.substring(0,n);return r==="twitter"||Iv.has(r)?t.replace(/([A-Z])/g,":$1").toLowerCase():e}function Ju(t){if(Array.isArray(t))return t.map(n=>Ju(n));if(typeof t!="object"||Array.isArray(t))return t;const e={};for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[Vn(n)]=Ju(t[n]));return e}function QR(t,e){const n=pf[e];return e==="refresh"?`${t.seconds};url=${t.url}`:bv(Ju(t),{keyValueSeparator:"=",entrySeparator:", ",resolve({value:r,key:s}){if(r===null)return"";if(typeof r=="boolean")return`${s}`},...n==null?void 0:n.unpack})}const Rv=new Set(["og:image","og:video","og:audio","twitter:image"]);function Sv(t){const e={};for(const n in t){if(!Object.prototype.hasOwnProperty.call(t,n))continue;const r=t[n];String(r)!=="false"&&n&&(e[n]=r)}return e}function cm(t,e){const n=Sv(e),r=Vn(t),s=Av(r);if(Rv.has(r)){const i={};for(const o in n)Object.prototype.hasOwnProperty.call(n,o)&&(i[`${t}${o==="url"?"":`${o[0].toUpperCase()}${o.slice(1)}`}`]=n[o]);return mf(i).sort((o,a)=>{var l,u;return(((l=o[s])==null?void 0:l.length)||0)-(((u=a[s])==null?void 0:u.length)||0)})}return[{[s]:r,...n}]}function mf(t){const e=[],n={};for(const s in t){if(!Object.prototype.hasOwnProperty.call(t,s))continue;const i=t[s];if(!Array.isArray(i)){if(typeof i=="object"&&i){if(Rv.has(Vn(s))){e.push(...cm(s,i));continue}n[s]=Sv(i)}else n[s]=i;continue}for(const o of i)e.push(...typeof o=="string"?mf({[s]:o}):cm(s,o))}const r=Tv(n,{key({key:s}){return Av(s)},value({key:s}){return s==="charset"?"charset":"content"},resolveKeyData({key:s}){return GR(s)},resolveValueData({value:s,key:i}){return s===null?"_null":typeof s=="object"?QR(s,i):typeof s=="number"?s.toString():s}});return[...e,...r].map(s=>(s.content==="_null"&&(s.content=null),s))}function YR(t,e){return t instanceof Promise?t.then(e):e(t)}function Zu(t,e,n,r){const s=r||Cv(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},t==="templateParams"||t==="titleTemplate");if(s instanceof Promise)return s.then(o=>Zu(t,e,n,o));const i={tag:t,props:s};for(const o of wv){const a=i.props[o]!==void 0?i.props[o]:n[o];a!==void 0&&((!(o==="innerHTML"||o==="textContent"||o==="children")||qR.has(i.tag))&&(i[o==="children"?"innerHTML":o]=a),delete i.props[o])}return i.props.body&&(i.tagPosition="bodyClose",delete i.props.body),i.tag==="script"&&typeof i.innerHTML=="object"&&(i.innerHTML=JSON.stringify(i.innerHTML),i.props.type=i.props.type||"application/json"),Array.isArray(i.props.content)?i.props.content.map(o=>({...i,props:{...i.props,content:o}})):i}function XR(t,e){var r;const n=t==="class"?" ":";";return e&&typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,s])=>s).map(([s,i])=>t==="style"?`${s}:${i}`:s)),(r=String(Array.isArray(e)?e.join(n):e))==null?void 0:r.split(n).filter(s=>!!s.trim()).join(n)}function Pv(t,e,n,r){for(let s=r;s<n.length;s+=1){const i=n[s];if(i==="class"||i==="style"){t[i]=XR(i,t[i]);continue}if(t[i]instanceof Promise)return t[i].then(o=>(t[i]=o,Pv(t,e,n,s)));if(!e&&!wv.has(i)){const o=String(t[i]),a=i.startsWith("data-");o==="true"||o===""?t[i]=a?"true":!0:t[i]||(a&&o==="false"?t[i]="false":delete t[i])}}}function Cv(t,e=!1){const n=Pv(t,e,Object.keys(t),0);return n instanceof Promise?n.then(()=>t):t}const JR=10;function kv(t,e,n){for(let r=n;r<e.length;r+=1){const s=e[r];if(s instanceof Promise)return s.then(i=>(e[r]=i,kv(t,e,r)));Array.isArray(s)?t.push(...s):t.push(s)}}function ZR(t){const e=[],n=t.resolvedInput;for(const s in n){if(!Object.prototype.hasOwnProperty.call(n,s))continue;const i=n[s];if(!(i===void 0||!zR.has(s))){if(Array.isArray(i)){for(const o of i)e.push(Zu(s,o,t));continue}e.push(Zu(s,i,t))}}if(e.length===0)return[];const r=[];return YR(kv(r,e,0),()=>r.map((s,i)=>(s._e=t._i,t.mode&&(s._m=t.mode),s._p=(t._i<<JR)+i,s)))}const lm=new Set(["onload","onerror","onabort","onprogress","onloadstart"]),um={base:-10,title:10},hm={critical:-80,high:-10,low:20};function mc(t){const e=t.tagPriority;if(typeof e=="number")return e;let n=100;return t.tag==="meta"?t.props["http-equiv"]==="content-security-policy"?n=-30:t.props.charset?n=-20:t.props.name==="viewport"&&(n=-15):t.tag==="link"&&t.props.rel==="preconnect"?n=20:t.tag in um&&(n=um[t.tag]),e&&e in hm?n+hm[e]:n}const eS=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],tS=["name","property","http-equiv"];function Ov(t){const{props:e,tag:n}=t;if(WR.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(e.id)return`${n}:id:${e.id}`;for(const r of tS)if(e[r]!==void 0)return`${n}:${r}:${e[r]}`;return!1}const fr="%separator";function nS(t,e,n=!1){var s;let r;if(e==="s"||e==="pageTitle")r=t.pageTitle;else if(e.includes(".")){const i=e.indexOf(".");r=(s=t[e.substring(0,i)])==null?void 0:s[e.substring(i+1)]}else r=t[e];if(r!==void 0)return n?(r||"").replace(/"/g,'\\"'):r||""}const rS=new RegExp(`${fr}(?:\\s*${fr})*`,"g");function Ia(t,e,n,r=!1){if(typeof t!="string"||!t.includes("%"))return t;let s=t;try{s=decodeURI(t)}catch{}const i=s.match(/%\w+(?:\.\w+)?/g);if(!i)return t;const o=t.includes(fr);return t=t.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===fr||!i.includes(a))return a;const l=nS(e,a.slice(1),r);return l!==void 0?l:a}).trim(),o&&(t.endsWith(fr)&&(t=t.slice(0,-fr.length)),t.startsWith(fr)&&(t=t.slice(fr.length)),t=t.replace(rS,n).trim()),t}function fm(t,e){return t==null?e||null:typeof t=="function"?t(e):t}async function xv(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!!r.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async s=>{var d;const i=(await t.resolveTags()).map(m=>({tag:m,id:Va.has(m.tag)?Xu(m):m.tag,shouldRender:!0}));let o=t._dom;if(!o){o={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};const m=new Set;for(const g of["body","head"]){const A=(d=n[g])==null?void 0:d.children;for(const O of A){const N=O.tagName.toLowerCase();if(!Va.has(N))continue;const x={tag:N,props:await Cv(O.getAttributeNames().reduce((D,V)=>({...D,[V]:O.getAttribute(V)}),{})),innerHTML:O.innerHTML},P=Ov(x);let y=P,S=1;for(;y&&m.has(y);)y=`${P}:${S++}`;y&&(x._d=y,m.add(y)),o.elMap[O.getAttribute("data-hid")||Xu(x)]=O}}}o.pendingSideEffects={...o.sideEffects},o.sideEffects={};function a(m,g,A){const O=`${m}:${g}`;o.sideEffects[O]=A,delete o.pendingSideEffects[O]}function l({id:m,$el:g,tag:A}){const O=A.tag.endsWith("Attrs");if(o.elMap[m]=g,O||(A.textContent&&A.textContent!==g.textContent&&(g.textContent=A.textContent),A.innerHTML&&A.innerHTML!==g.innerHTML&&(g.innerHTML=A.innerHTML),a(m,"el",()=>{var N;(N=o.elMap[m])==null||N.remove(),delete o.elMap[m]})),A._eventHandlers)for(const N in A._eventHandlers)Object.prototype.hasOwnProperty.call(A._eventHandlers,N)&&g.getAttribute(`data-${N}`)!==""&&((A.tag==="bodyAttrs"?n.defaultView:g).addEventListener(N.substring(2),A._eventHandlers[N].bind(g)),g.setAttribute(`data-${N}`,""));for(const N in A.props){if(!Object.prototype.hasOwnProperty.call(A.props,N))continue;const x=A.props[N],P=`attr:${N}`;if(N==="class"){if(!x)continue;for(const y of x.split(" "))O&&a(m,`${P}:${y}`,()=>g.classList.remove(y)),!g.classList.contains(y)&&g.classList.add(y)}else if(N==="style"){if(!x)continue;for(const y of x.split(";")){const S=y.indexOf(":"),D=y.substring(0,S).trim(),V=y.substring(S+1).trim();a(m,`${P}:${D}`,()=>{g.style.removeProperty(D)}),g.style.setProperty(D,V)}}else g.getAttribute(N)!==x&&g.setAttribute(N,x===!0?"":String(x)),O&&a(m,P,()=>g.removeAttribute(N))}}const u=[],h={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const m of i){const{tag:g,shouldRender:A,id:O}=m;if(A){if(g.tag==="title"){n.title=g.textContent;continue}m.$el=m.$el||o.elMap[O],m.$el?l(m):Va.has(g.tag)&&u.push(m)}}for(const m of u){const g=m.tag.tagPosition||"head";m.$el=n.createElement(m.tag.tag),l(m),h[g]=h[g]||n.createDocumentFragment(),h[g].appendChild(m.$el)}for(const m of i)await t.hooks.callHook("dom:renderTag",m,n,a);h.head&&n.head.appendChild(h.head),h.bodyOpen&&n.body.insertBefore(h.bodyOpen,n.body.firstChild),h.bodyClose&&n.body.appendChild(h.bodyClose);for(const m in o.pendingSideEffects)o.pendingSideEffects[m]();t._dom=o,await t.hooks.callHook("dom:rendered",{renders:i}),s()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function sS(t,e={}){const n=e.delayFn||(r=>setTimeout(r,10));return t._domDebouncedUpdatePromise=t._domDebouncedUpdatePromise||new Promise(r=>n(()=>xv(t,e).then(()=>{delete t._domDebouncedUpdatePromise,r()})))}function iS(t){return e=>{var r,s;const n=((s=(r=e.resolvedOptions.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:s.innerHTML)||!1;return n&&e.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":i=>{sS(i,t)}}}}}const oS=new Set(["templateParams","htmlAttrs","bodyAttrs"]),aS={hooks:{"tag:normalise":({tag:t})=>{t.props.hid&&(t.key=t.props.hid,delete t.props.hid),t.props.vmid&&(t.key=t.props.vmid,delete t.props.vmid),t.props.key&&(t.key=t.props.key,delete t.props.key);const e=Ov(t);e&&!e.startsWith("meta:og:")&&!e.startsWith("meta:twitter:")&&delete t.key;const n=e||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":t=>{const e=Object.create(null);for(const r of t.tags){const s=(r.key?`${r.tag}:${r.key}`:r._d)||Xu(r),i=e[s];if(i){let a=r==null?void 0:r.tagDuplicateStrategy;if(!a&&oS.has(r.tag)&&(a="merge"),a==="merge"){const l=i.props;l.style&&r.props.style&&(l.style[l.style.length-1]!==";"&&(l.style+=";"),r.props.style=`${l.style} ${r.props.style}`),l.class&&r.props.class?r.props.class=`${l.class} ${r.props.class}`:l.class&&(r.props.class=l.class),e[s].props={...l,...r.props};continue}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);continue}else if(mc(r)>mc(i))continue}if(!(r.innerHTML||r.textContent||Object.keys(r.props).length!==0)&&Va.has(r.tag)){delete e[s];continue}e[s]=r}const n=[];for(const r in e){const s=e[r],i=s._duped;n.push(s),i&&(delete s._duped,n.push(...i))}t.tags=n,t.tags=t.tags.filter(r=>!(r.tag==="meta"&&(r.props.name||r.props.property)&&!r.props.content))}}},cS=new Set(["script","link","bodyAttrs"]),lS=t=>({hooks:{"tags:resolve":e=>{for(const n of e.tags){if(!cS.has(n.tag))continue;const r=n.props;for(const s in r){if(s[0]!=="o"||s[1]!=="n"||!Object.prototype.hasOwnProperty.call(r,s))continue;const i=r[s];typeof i=="function"&&(t.ssr&&lm.has(s)?r[s]=`this.dataset.${s}fired = true`:delete r[s],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[s]=i)}t.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||pc(n.props.src||n.props.href))}},"dom:renderTag":({$el:e,tag:n})=>{var s,i;const r=e==null?void 0:e.dataset;if(r)for(const o in r){if(!o.endsWith("fired"))continue;const a=o.slice(0,-5);lm.has(a)&&((i=(s=n._eventHandlers)==null?void 0:s[a])==null||i.call(e,new Event(a.substring(2))))}}}}),uS=new Set(["link","style","script","noscript"]),hS={hooks:{"tag:normalise":({tag:t})=>{t.key&&uS.has(t.tag)&&(t.props["data-hid"]=t._h=pc(t.key))}}},fS={mode:"server",hooks:{"tags:beforeResolve":t=>{const e={};let n=!1;for(const r of t.tags)r._m!=="server"||r.tag!=="titleTemplate"&&r.tag!=="templateParams"&&r.tag!=="title"||(e[r.tag]=r.tag==="title"||r.tag==="titleTemplate"?r.textContent:r.props,n=!0);n&&t.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},dS={hooks:{"tags:resolve":t=>{var e;for(const n of t.tags)if(typeof n.tagPriority=="string")for(const{prefix:r,offset:s}of eS){if(!n.tagPriority.startsWith(r))continue;const i=n.tagPriority.substring(r.length),o=(e=t.tags.find(a=>a._d===i))==null?void 0:e._p;if(o!==void 0){n._p=o+s;break}}t.tags.sort((n,r)=>{const s=mc(n),i=mc(r);return s<i?-1:s>i?1:n._p-r._p})}}},pS={meta:"content",link:"href",htmlAttrs:"lang"},mS=["innerHTML","textContent"],gS=t=>({hooks:{"tags:resolve":e=>{var o;const{tags:n}=e;let r;for(let a=0;a<n.length;a+=1)n[a].tag==="templateParams"&&(r=e.tags.splice(a,1)[0].props,a-=1);const s=r||{},i=s.separator||"|";delete s.separator,s.pageTitle=Ia(s.pageTitle||((o=n.find(a=>a.tag==="title"))==null?void 0:o.textContent)||"",s,i);for(const a of n){if(a.processTemplateParams===!1)continue;const l=pS[a.tag];if(l&&typeof a.props[l]=="string")a.props[l]=Ia(a.props[l],s,i);else if(a.processTemplateParams||a.tag==="titleTemplate"||a.tag==="title")for(const u of mS)typeof a[u]=="string"&&(a[u]=Ia(a[u],s,i,a.tag==="script"&&a.props.type.endsWith("json")))}t._templateParams=s,t._separator=i},"tags:afterResolve":({tags:e})=>{let n;for(let r=0;r<e.length;r+=1){const s=e[r];s.tag==="title"&&s.processTemplateParams!==!1&&(n=s)}n!=null&&n.textContent&&(n.textContent=Ia(n.textContent,t._templateParams,t._separator))}}}),_S={hooks:{"tags:resolve":t=>{const{tags:e}=t;let n,r;for(let s=0;s<e.length;s+=1){const i=e[s];i.tag==="title"?n=i:i.tag==="titleTemplate"&&(r=i)}if(r&&n){const s=fm(r.textContent,n.textContent);s!==null?n.textContent=s||n.textContent:t.tags.splice(t.tags.indexOf(n),1)}else if(r){const s=fm(r.textContent);s!==null&&(r.textContent=s,r.tag="title",r=void 0)}r&&t.tags.splice(t.tags.indexOf(r),1)}}},yS={hooks:{"tags:afterResolve":t=>{for(const e of t.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&(e.props.type==="application/ld+json"||e.props.type==="application/json")?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};let Nv;function vS(t={}){const e=ES(t);return e.use(iS()),Nv=e}function dm(t,e){return!t||t==="server"&&e||t==="client"&&!e}function ES(t={}){const e=fv();e.addHooks(t.hooks||{}),t.document=t.document||(KR?document:void 0);const n=!t.document,r=()=>{a.dirty=!0,e.callHook("entries:updated",a)};let s=0,i=[];const o=[],a={plugins:o,dirty:!1,resolvedOptions:t,hooks:e,headEntries(){return i},use(l){const u=typeof l=="function"?l(a):l;(!u.key||!o.some(h=>h.key===u.key))&&(o.push(u),dm(u.mode,n)&&e.addHooks(u.hooks||{}))},push(l,u){u==null||delete u.head;const h={_i:s++,input:l,...u};return dm(h.mode,n)&&(i.push(h),r()),{dispose(){i=i.filter(d=>d._i!==h._i),r()},patch(d){for(const m of i)m._i===h._i&&(m.input=h.input=d);r()}}},async resolveTags(){const l={tags:[],entries:[...i]};await e.callHook("entries:resolve",l);for(const u of l.entries){const h=u.resolvedInput||u.input;if(u.resolvedInput=await(u.transform?u.transform(h):h),u.resolvedInput)for(const d of await ZR(u)){const m={tag:d,entry:u,resolvedOptions:a.resolvedOptions};await e.callHook("tag:normalise",m),l.tags.push(m.tag)}}return await e.callHook("tags:beforeResolve",l),await e.callHook("tags:resolve",l),await e.callHook("tags:afterResolve",l),l.tags},ssr:n};return[aS,fS,lS,hS,dS,gS,_S,yS,...(t==null?void 0:t.plugins)||[]].forEach(l=>a.use(l)),a.hooks.callHook("init",a),a}function wS(){return Nv}const TS=Jy[0]==="3";function bS(t){return typeof t=="function"?t():Be(t)}function gc(t){if(t instanceof Promise||t instanceof Date||t instanceof RegExp)return t;const e=bS(t);if(!t||!e)return e;if(Array.isArray(e))return e.map(n=>gc(n));if(typeof e=="object"){const n={};for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(r==="titleTemplate"||r[0]==="o"&&r[1]==="n"){n[r]=Be(e[r]);continue}n[r]=gc(e[r])}return n}return e}const IS={hooks:{"entries:resolve":t=>{for(const e of t.entries)e.resolvedInput=gc(e.input)}}},Dv="usehead";function AS(t){return{install(n){TS&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(Dv,t))}}.install}function RS(t={}){t.domDelayFn=t.domDelayFn||(n=>Mo(()=>setTimeout(()=>n(),0)));const e=vS(t);return e.use(IS),e.install=AS(e),e}const eh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},th="__unhead_injection_handler__";function SS(t){eh[th]=t}function PS(){if(th in eh)return eh[th]();const t=Ot(Dv);return t||wS()}function CS(t,e={}){const n=e.head||PS();if(n)return n.ssr?n.push(t,e):kS(n,t,e)}function kS(t,e,n={}){const r=Tt(!1),s=Tt({});Zb(()=>{s.value=r.value?{}:gc(e)});const i=t.push(s.value,n);return Er(s,a=>{i.patch(a)}),zc()&&(Uo(()=>{i.dispose()}),_y(()=>{r.value=!0}),gy(()=>{r.value=!1})),i}function OS(t,e){const{title:n,titleTemplate:r,...s}=t;return CS({title:n,titleTemplate:r,_flatMeta:s},{...e,transform(i){const o=mf({...i._flatMeta});return delete i._flatMeta,{...i,meta:o}}})}let Fa,Ua;function xS(){return Fa=$fetch(df(`builds/meta/${mi().app.buildId}.json`),{responseType:"json"}),Fa.then(t=>{Ua=TR(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),Fa}function Jc(){return Fa||xS()}async function gf(t){if(await Jc(),!Ua)return console.error("[nuxt] Error creating app manifest matcher.",Ua),{};try{return _v({},...Ua.matchAll(t).reverse())}catch(e){return console.error("[nuxt] Error matching route rules.",e),{}}}async function pm(t,e={}){const n=await DS(t,e),r=qe(),s=r._payloadCache=r._payloadCache||{};return n in s?s[n]||null:(s[n]=Mv(t).then(i=>i?Lv(n).then(o=>o||(delete s[n],null)):(s[n]=null,null)),s[n])}const NS="_payload.json";async function DS(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||Xn(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=mi(),s=e.hash||(e.fresh?Date.now():r.app.buildId),i=r.app.cdnURL,o=i&&await Mv(t)?i:r.app.baseURL;return Gc(o,n.pathname,NS+(s?`?${s}`:""))}async function Lv(t){const e=fetch(t).then(n=>n.text().then(Vv));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function Mv(t=vv().path){if(t=Kc(t),(await Jc()).prerendered.includes(t))return!0;const n=await gf(t);return!!n.prerender&&!n.redirect}let Kr=null;async function LS(){var r;if(Kr)return Kr;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await Vv(t.textContent||""),n=t.dataset.src?await Lv(t.dataset.src):void 0;return Kr={...e,...n,...window.__NUXT__},(r=Kr.config)!=null&&r.public&&(Kr.config.public=Fr(Kr.config.public)),Kr}async function Vv(t){return await $R(t,qe()._payloadRevivers)}function MS(t,e){qe()._payloadRevivers[t]=e}const VS=[["NuxtError",t=>Xc(t)],["EmptyShallowRef",t=>po(t==="_"?void 0:t==="0n"?BigInt(0):cc(t))],["EmptyRef",t=>Tt(t==="_"?void 0:t==="0n"?BigInt(0):cc(t))],["ShallowRef",t=>po(t)],["ShallowReactive",t=>Mn(t)],["Ref",t=>Tt(t)],["Reactive",t=>Fr(t)]],FS=tn({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const[r,s]of VS)MS(r,s);Object.assign(t.payload,([e,n]=Ws(()=>t.runWithContext(LS)),e=await e,n(),e)),window.__NUXT__=t.payload}}),US=[],jS=tn({name:"nuxt:head",enforce:"pre",setup(t){const e=RS({plugins:US});SS(()=>qe().vueApp._context.provides.usehead),t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await xv(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||r()}),t.hooks.hook("app:error",r),t.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ks=typeof document<"u";function Fv(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function BS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Fv(t.default)}const Oe=Object.assign;function ru(t,e){const n={};for(const r in e){const s=e[r];n[r]=un(s)?s.map(t):t(s)}return n}const to=()=>{},un=Array.isArray,Uv=/#/g,$S=/&/g,HS=/\//g,qS=/=/g,zS=/\?/g,jv=/\+/g,WS=/%5B/g,KS=/%5D/g,Bv=/%5E/g,GS=/%60/g,$v=/%7B/g,QS=/%7C/g,Hv=/%7D/g,YS=/%20/g;function _f(t){return encodeURI(""+t).replace(QS,"|").replace(WS,"[").replace(KS,"]")}function XS(t){return _f(t).replace($v,"{").replace(Hv,"}").replace(Bv,"^")}function nh(t){return _f(t).replace(jv,"%2B").replace(YS,"+").replace(Uv,"%23").replace($S,"%26").replace(GS,"`").replace($v,"{").replace(Hv,"}").replace(Bv,"^")}function JS(t){return nh(t).replace(qS,"%3D")}function ZS(t){return _f(t).replace(Uv,"%23").replace(zS,"%3F")}function eP(t){return t==null?"":ZS(t).replace(HS,"%2F")}function vo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const tP=/\/$/,nP=t=>t.replace(tP,"");function su(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=oP(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:vo(o)}}function rP(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function mm(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function sP(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ni(e.matched[r],n.matched[s])&&qv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ni(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function qv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!iP(t[n],e[n]))return!1;return!0}function iP(t,e){return un(t)?gm(t,e):un(e)?gm(e,t):t===e}function gm(t,e){return un(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function oP(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const sn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Eo;(function(t){t.pop="pop",t.push="push"})(Eo||(Eo={}));var no;(function(t){t.back="back",t.forward="forward",t.unknown=""})(no||(no={}));function aP(t){if(!t)if(ks){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),nP(t)}const cP=/^[^#]+#/;function lP(t,e){return t.replace(cP,"#")+e}function uP(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Zc=()=>({left:window.scrollX,top:window.scrollY});function hP(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=uP(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function _m(t,e){return(history.state?history.state.position-e:-1)+t}const rh=new Map;function fP(t,e){rh.set(t,e)}function dP(t){const e=rh.get(t);return rh.delete(t),e}let pP=()=>location.protocol+"//"+location.host;function zv(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),mm(l,"")}return mm(n,t)+r+s}function mP(t,e,n,r){let s=[],i=[],o=null;const a=({state:m})=>{const g=zv(t,location),A=n.value,O=e.value;let N=0;if(m){if(n.value=g,e.value=m,o&&o===A){o=null;return}N=O?m.position-O.position:0}else r(g);s.forEach(x=>{x(n.value,A,{delta:N,type:Eo.pop,direction:N?N>0?no.forward:no.back:no.unknown})})};function l(){o=n.value}function u(m){s.push(m);const g=()=>{const A=s.indexOf(m);A>-1&&s.splice(A,1)};return i.push(g),g}function h(){const{history:m}=window;m.state&&m.replaceState(Oe({},m.state,{scroll:Zc()}),"")}function d(){for(const m of i)m();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:d}}function ym(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Zc():null}}function gP(t){const{history:e,location:n}=window,r={value:zv(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,h){const d=t.indexOf("#"),m=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:pP()+t+l;try{e[h?"replaceState":"pushState"](u,"",m),s.value=u}catch(g){console.error(g),n[h?"replace":"assign"](m)}}function o(l,u){const h=Oe({},e.state,ym(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,h,!0),r.value=l}function a(l,u){const h=Oe({},s.value,e.state,{forward:l,scroll:Zc()});i(h.current,h,!0);const d=Oe({},ym(r.value,l,null),{position:h.position+1},u);i(l,d,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function Wv(t){t=aP(t);const e=gP(t),n=mP(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Oe({location:"",base:t,go:r,createHref:lP.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function _P(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Wv(t)}function yP(t){return typeof t=="string"||t&&typeof t=="object"}function Kv(t){return typeof t=="string"||typeof t=="symbol"}const Gv=Symbol("");var vm;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(vm||(vm={}));function ri(t,e){return Oe(new Error,{type:t,[Gv]:!0},e)}function kn(t,e){return t instanceof Error&&Gv in t&&(e==null||!!(t.type&e))}const Em="[^/]+?",vP={sensitive:!1,strict:!1,start:!0,end:!0},EP=/[.+*?^${}()[\]/\\]/g;function wP(t,e){const n=Oe({},vP,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const m=u[d];let g=40+(n.sensitive?.25:0);if(m.type===0)d||(s+="/"),s+=m.value.replace(EP,"\\$&"),g+=40;else if(m.type===1){const{value:A,repeatable:O,optional:N,regexp:x}=m;i.push({name:A,repeatable:O,optional:N});const P=x||Em;if(P!==Em){g+=10;try{new RegExp(`(${P})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${A}" (${P}): `+S.message)}}let y=O?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;d||(y=N&&u.length<2?`(?:/${y})`:"/"+y),N&&(y+="?"),s+=y,g+=20,N&&(g+=-8),O&&(g+=-20),P===".*"&&(g+=-50)}h.push(g)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const h=u.match(o),d={};if(!h)return null;for(let m=1;m<h.length;m++){const g=h[m]||"",A=i[m-1];d[A.name]=g&&A.repeatable?g.split("/"):g}return d}function l(u){let h="",d=!1;for(const m of t){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const g of m)if(g.type===0)h+=g.value;else if(g.type===1){const{value:A,repeatable:O,optional:N}=g,x=A in u?u[A]:"";if(un(x)&&!O)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const P=un(x)?x.join("/"):x;if(!P)if(N)m.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);h+=P}}return h||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function TP(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Qv(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=TP(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(wm(r))return 1;if(wm(s))return-1}return s.length-r.length}function wm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const bP={type:0,value:""},IP=/[a-zA-Z0-9_]/;function AP(t){if(!t)return[[]];if(t==="/")return[[bP]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,u="",h="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&d(),o()):l===":"?(d(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:IP.test(l)?m():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=3:h+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}function RP(t,e,n){const r=wP(AP(t.path),n),s=Oe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function SP(t,e){const n=[],r=new Map;e=Am({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,m,g){const A=!g,O=bm(d);O.aliasOf=g&&g.record;const N=Am(e,d),x=[O];if("alias"in d){const S=typeof d.alias=="string"?[d.alias]:d.alias;for(const D of S)x.push(bm(Oe({},O,{components:g?g.record.components:O.components,path:D,aliasOf:g?g.record:O})))}let P,y;for(const S of x){const{path:D}=S;if(m&&D[0]!=="/"){const V=m.record.path,b=V[V.length-1]==="/"?"":"/";S.path=m.record.path+(D&&b+D)}if(P=RP(S,m,N),g?g.alias.push(P):(y=y||P,y!==P&&y.alias.push(P),A&&d.name&&!Im(P)&&o(d.name)),Yv(P)&&l(P),O.children){const V=O.children;for(let b=0;b<V.length;b++)i(V[b],P,g&&g.children[b])}g=g||P}return y?()=>{o(y)}:to}function o(d){if(Kv(d)){const m=r.get(d);m&&(r.delete(d),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(d);m>-1&&(n.splice(m,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const m=kP(d,n);n.splice(m,0,d),d.record.name&&!Im(d)&&r.set(d.record.name,d)}function u(d,m){let g,A={},O,N;if("name"in d&&d.name){if(g=r.get(d.name),!g)throw ri(1,{location:d});N=g.record.name,A=Oe(Tm(m.params,g.keys.filter(y=>!y.optional).concat(g.parent?g.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),d.params&&Tm(d.params,g.keys.map(y=>y.name))),O=g.stringify(A)}else if(d.path!=null)O=d.path,g=n.find(y=>y.re.test(O)),g&&(A=g.parse(O),N=g.record.name);else{if(g=m.name?r.get(m.name):n.find(y=>y.re.test(m.path)),!g)throw ri(1,{location:d,currentLocation:m});N=g.record.name,A=Oe({},m.params,d.params),O=g.stringify(A)}const x=[];let P=g;for(;P;)x.unshift(P.record),P=P.parent;return{name:N,path:O,params:A,matched:x,meta:CP(x)}}t.forEach(d=>i(d));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function Tm(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function bm(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:PP(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function PP(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Im(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function CP(t){return t.reduce((e,n)=>Oe(e,n.meta),{})}function Am(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function kP(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Qv(t,e[i])<0?r=i:n=i+1}const s=OP(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function OP(t){let e=t;for(;e=e.parent;)if(Yv(e)&&Qv(t,e)===0)return e}function Yv({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function xP(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(jv," "),o=i.indexOf("="),a=vo(o<0?i:i.slice(0,o)),l=o<0?null:vo(i.slice(o+1));if(a in e){let u=e[a];un(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function Rm(t){let e="";for(let n in t){const r=t[n];if(n=JS(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(un(r)?r.map(i=>i&&nh(i)):[r&&nh(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function NP(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=un(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const DP=Symbol(""),Sm=Symbol(""),el=Symbol(""),yf=Symbol(""),sh=Symbol("");function Fi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function dr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const u=m=>{m===!1?l(ri(4,{from:n,to:e})):m instanceof Error?l(m):yP(m)?l(ri(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),a())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(h);t.length<3&&(d=d.then(u)),d.catch(m=>l(m))})}function iu(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Fv(l)){const h=(l.__vccOpts||l)[e];h&&i.push(dr(h,n,r,o,a,s))}else{let u=l();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=BS(h)?h.default:h;o.mods[a]=h,o.components[a]=d;const g=(d.__vccOpts||d)[e];return g&&dr(g,n,r,o,a,s)()}))}}return i}function Pm(t){const e=Ot(el),n=Ot(yf),r=Fe(()=>{const l=Be(t.to);return e.resolve(l)}),s=Fe(()=>{const{matched:l}=r.value,{length:u}=l,h=l[u-1],d=n.matched;if(!h||!d.length)return-1;const m=d.findIndex(ni.bind(null,h));if(m>-1)return m;const g=Cm(l[u-2]);return u>1&&Cm(h)===g&&d[d.length-1].path!==g?d.findIndex(ni.bind(null,l[u-2])):m}),i=Fe(()=>s.value>-1&&FP(n.params,r.value.params)),o=Fe(()=>s.value>-1&&s.value===n.matched.length-1&&qv(n.params,r.value.params));function a(l={}){return VP(l)?e[Be(t.replace)?"replace":"push"](Be(t.to)).catch(to):Promise.resolve()}return{route:r,href:Fe(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const LP=ds({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Pm,setup(t,{slots:e}){const n=Fr(Pm(t)),{options:r}=Ot(el),s=Fe(()=>({[km(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[km(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:zt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),MP=LP;function VP(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function FP(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!un(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Cm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const km=(t,e,n)=>t??e??n,UP=ds({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ot(sh),s=Fe(()=>t.route||r.value),i=Ot(Sm,0),o=Fe(()=>{let u=Be(i);const{matched:h}=s.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),a=Fe(()=>s.value.matched[o.value]);qs(Sm,Fe(()=>o.value+1)),qs(DP,a),qs(sh,s);const l=Tt();return Er(()=>[l.value,a.value,t.name],([u,h,d],[m,g,A])=>{h&&(h.instances[d]=u,g&&g!==h&&u&&u===m&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),u&&h&&(!g||!ni(h,g)||!m)&&(h.enterCallbacks[d]||[]).forEach(O=>O(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,d=a.value,m=d&&d.components[h];if(!m)return Om(n.default,{Component:m,route:u});const g=d.props[h],A=g?g===!0?u.params:typeof g=="function"?g(u):g:null,N=zt(m,Oe({},A,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(d.instances[h]=null)},ref:l}));return Om(n.default,{Component:N,route:u})||N}}});function Om(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Xv=UP;function jP(t){const e=SP(t.routes,t),n=t.parseQuery||xP,r=t.stringifyQuery||Rm,s=t.history,i=Fi(),o=Fi(),a=Fi(),l=po(sn);let u=sn;ks&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=ru.bind(null,j=>""+j),d=ru.bind(null,eP),m=ru.bind(null,vo);function g(j,Z){let X,se;return Kv(j)?(X=e.getRecordMatcher(j),se=Z):se=j,e.addRoute(se,X)}function A(j){const Z=e.getRecordMatcher(j);Z&&e.removeRoute(Z)}function O(){return e.getRoutes().map(j=>j.record)}function N(j){return!!e.getRecordMatcher(j)}function x(j,Z){if(Z=Oe({},Z||l.value),typeof j=="string"){const C=su(n,j,Z.path),M=e.resolve({path:C.path},Z),H=s.createHref(C.fullPath);return Oe(C,M,{params:m(M.params),hash:vo(C.hash),redirectedFrom:void 0,href:H})}let X;if(j.path!=null)X=Oe({},j,{path:su(n,j.path,Z.path).path});else{const C=Oe({},j.params);for(const M in C)C[M]==null&&delete C[M];X=Oe({},j,{params:d(C)}),Z.params=d(Z.params)}const se=e.resolve(X,Z),Te=j.hash||"";se.params=h(m(se.params));const xe=rP(r,Oe({},j,{hash:XS(Te),path:se.path})),I=s.createHref(xe);return Oe({fullPath:xe,hash:Te,query:r===Rm?NP(j.query):j.query||{}},se,{redirectedFrom:void 0,href:I})}function P(j){return typeof j=="string"?su(n,j,l.value.path):Oe({},j)}function y(j,Z){if(u!==j)return ri(8,{from:Z,to:j})}function S(j){return b(j)}function D(j){return S(Oe(P(j),{replace:!0}))}function V(j){const Z=j.matched[j.matched.length-1];if(Z&&Z.redirect){const{redirect:X}=Z;let se=typeof X=="function"?X(j):X;return typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=P(se):{path:se},se.params={}),Oe({query:j.query,hash:j.hash,params:se.path!=null?{}:j.params},se)}}function b(j,Z){const X=u=x(j),se=l.value,Te=j.state,xe=j.force,I=j.replace===!0,C=V(X);if(C)return b(Oe(P(C),{state:typeof C=="object"?Oe({},Te,C.state):Te,force:xe,replace:I}),Z||X);const M=X;M.redirectedFrom=Z;let H;return!xe&&sP(r,se,X)&&(H=ri(16,{to:M,from:se}),Gt(se,se,!0,!1)),(H?Promise.resolve(H):w(M,se)).catch(U=>kn(U)?kn(U,2)?U:nn(U):ne(U,M,se)).then(U=>{if(U){if(kn(U,2))return b(Oe({replace:I},P(U.to),{state:typeof U.to=="object"?Oe({},Te,U.to.state):Te,force:xe}),Z||M)}else U=R(M,se,!0,I,Te);return k(M,se,U),U})}function E(j,Z){const X=y(j,Z);return X?Promise.reject(X):Promise.resolve()}function v(j){const Z=tr.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(j):j()}function w(j,Z){let X;const[se,Te,xe]=BP(j,Z);X=iu(se.reverse(),"beforeRouteLeave",j,Z);for(const C of se)C.leaveGuards.forEach(M=>{X.push(dr(M,j,Z))});const I=E.bind(null,j,Z);return X.push(I),Nt(X).then(()=>{X=[];for(const C of i.list())X.push(dr(C,j,Z));return X.push(I),Nt(X)}).then(()=>{X=iu(Te,"beforeRouteUpdate",j,Z);for(const C of Te)C.updateGuards.forEach(M=>{X.push(dr(M,j,Z))});return X.push(I),Nt(X)}).then(()=>{X=[];for(const C of xe)if(C.beforeEnter)if(un(C.beforeEnter))for(const M of C.beforeEnter)X.push(dr(M,j,Z));else X.push(dr(C.beforeEnter,j,Z));return X.push(I),Nt(X)}).then(()=>(j.matched.forEach(C=>C.enterCallbacks={}),X=iu(xe,"beforeRouteEnter",j,Z,v),X.push(I),Nt(X))).then(()=>{X=[];for(const C of o.list())X.push(dr(C,j,Z));return X.push(I),Nt(X)}).catch(C=>kn(C,8)?C:Promise.reject(C))}function k(j,Z,X){a.list().forEach(se=>v(()=>se(j,Z,X)))}function R(j,Z,X,se,Te){const xe=y(j,Z);if(xe)return xe;const I=Z===sn,C=ks?history.state:{};X&&(se||I?s.replace(j.fullPath,Oe({scroll:I&&C&&C.scroll},Te)):s.push(j.fullPath,Te)),l.value=j,Gt(j,Z,X,I),nn()}let T;function _e(){T||(T=s.listen((j,Z,X)=>{if(!dn.listening)return;const se=x(j),Te=V(se);if(Te){b(Oe(Te,{replace:!0}),se).catch(to);return}u=se;const xe=l.value;ks&&fP(_m(xe.fullPath,X.delta),Zc()),w(se,xe).catch(I=>kn(I,12)?I:kn(I,2)?(b(I.to,se).then(C=>{kn(C,20)&&!X.delta&&X.type===Eo.pop&&s.go(-1,!1)}).catch(to),Promise.reject()):(X.delta&&s.go(-X.delta,!1),ne(I,se,xe))).then(I=>{I=I||R(se,xe,!1),I&&(X.delta&&!kn(I,8)?s.go(-X.delta,!1):X.type===Eo.pop&&kn(I,20)&&s.go(-1,!1)),k(se,xe,I)}).catch(to)}))}let ve=Fi(),re=Fi(),fe;function ne(j,Z,X){nn(j);const se=re.list();return se.length?se.forEach(Te=>Te(j,Z,X)):console.error(j),Promise.reject(j)}function ze(){return fe&&l.value!==sn?Promise.resolve():new Promise((j,Z)=>{ve.add([j,Z])})}function nn(j){return fe||(fe=!j,_e(),ve.list().forEach(([Z,X])=>j?X(j):Z()),ve.reset()),j}function Gt(j,Z,X,se){const{scrollBehavior:Te}=t;if(!ks||!Te)return Promise.resolve();const xe=!X&&dP(_m(j.fullPath,0))||(se||!X)&&history.state&&history.state.scroll||null;return Mo().then(()=>Te(j,Z,xe)).then(I=>I&&hP(I)).catch(I=>ne(I,j,Z))}const We=j=>s.go(j);let Ke;const tr=new Set,dn={currentRoute:l,listening:!0,addRoute:g,removeRoute:A,clearRoutes:e.clearRoutes,hasRoute:N,getRoutes:O,resolve:x,options:t,push:S,replace:D,go:We,back:()=>We(-1),forward:()=>We(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:re.add,isReady:ze,install(j){const Z=this;j.component("RouterLink",MP),j.component("RouterView",Xv),j.config.globalProperties.$router=Z,Object.defineProperty(j.config.globalProperties,"$route",{enumerable:!0,get:()=>Be(l)}),ks&&!Ke&&l.value===sn&&(Ke=!0,S(s.location).catch(Te=>{}));const X={};for(const Te in sn)Object.defineProperty(X,Te,{get:()=>l.value[Te],enumerable:!0});j.provide(el,Z),j.provide(yf,Mn(X)),j.provide(sh,l);const se=j.unmount;tr.add(j),j.unmount=function(){tr.delete(j),tr.size<1&&(u=sn,T&&T(),T=null,l.value=sn,Ke=!1,fe=!1),se()}}};function Nt(j){return j.reduce((Z,X)=>Z.then(()=>v(X)),Promise.resolve())}return dn}function BP(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>ni(u,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>ni(u,l))||s.push(l))}return[n,r,s]}function $P(){return Ot(el)}function c2(t){return Ot(yf)}const HP=/(:\w+)\([^)]+\)/g,qP=/(:\w+)[?+*]/g,zP=/:\w+/g,WP=(t,e)=>e.path.replace(HP,"$1").replace(qP,"$1").replace(zP,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""}),ih=(t,e)=>{const n=t.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===t.Component.type}),r=e??(n==null?void 0:n.meta.key)??(n&&WP(t.route,n));return typeof r=="function"?r(t.route):r},KP=(t,e)=>({default:()=>t?zt(Rb,t===!0?{}:t,e):e});function vf(t){return Array.isArray(t)?t:[t]}const GP="modulepreload",QP=function(t,e){return new URL(t,e).href},xm={},xn=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(n.map(u=>{if(u=QP(u,r),u in xm)return;xm[u]=!0;const h=u.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(!!r)for(let A=o.length-1;A>=0;A--){const O=o[A];if(O.href===u&&(!h||O.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const g=document.createElement("link");if(g.rel=h?"stylesheet":GP,h||(g.as="script"),g.crossOrigin="",g.href=u,l&&g.setAttribute("nonce",l),document.head.appendChild(g),h)return new Promise((A,O)=>{g.addEventListener("load",A),g.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})},ou=[{name:"create",path:"/create",component:()=>xn(()=>import("./amiT64oB.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)},{name:"index",path:"/",component:()=>xn(()=>import("./DICLOxM5.js"),__vite__mapDeps([4,2,5]),import.meta.url)},{name:"login",path:"/login",component:()=>xn(()=>import("./DLSfAOFS.js"),__vite__mapDeps([6,2,7]),import.meta.url)},{name:"posts-id",path:"/posts/:id()",component:()=>xn(()=>import("./BkK4lIwS.js"),__vite__mapDeps([8,1,2,9]),import.meta.url)},{name:"search",path:"/search",component:()=>xn(()=>import("./BZlBB3Q8.js"),__vite__mapDeps([10,1,2,11]),import.meta.url)},{name:"settings",path:"/settings",component:()=>xn(()=>import("./D_dKX9bf.js"),__vite__mapDeps([12,13]),import.meta.url)},{name:"signup",path:"/signup",component:()=>xn(()=>import("./ShXXRfnw.js"),__vite__mapDeps([14,2,15]),import.meta.url)}],YP=(t,e,n)=>(e=e===!0?{}:e,{default:()=>{var r;return e?zt(t,e,n):(r=n.default)==null?void 0:r.call(n)}}),XP=/(:\w+)\([^)]+\)/g,JP=/(:\w+)[?+*]/g,ZP=/:\w+/g;function Nm(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(XP,"$1").replace(JP,"$1").replace(ZP,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""});return typeof e=="function"?e(t):e}function eC(t,e){return t===e||e===sn?!1:Nm(t)!==Nm(e)?!0:!t.matched.every((r,s)=>{var i,o;return r.components&&r.components.default===((o=(i=e.matched[s])==null?void 0:i.components)==null?void 0:o.default)})}const tC={scrollBehavior(t,e,n){var u;const r=qe(),s=((u=Ut().options)==null?void 0:u.scrollBehaviorType)??"auto";let i=n||void 0;const o=typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop;if(!i&&e&&t&&o!==!1&&eC(t,e)&&(i={left:0,top:0}),t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:Dm(t.hash),behavior:s}:!1;const a=h=>!!(h.meta.pageTransition??zu),l=a(e)&&a(t)?"page:transition:finish":"page:finish";return new Promise(h=>{r.hooks.hookOnce(l,async()=>{await new Promise(d=>setTimeout(d,0)),t.hash&&(i={el:t.hash,top:Dm(t.hash),behavior:s}),h(i)})})}};function Dm(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}const nC={hashMode:!1,scrollBehaviorType:"auto"},Xt={...nC,...tC},rC=async t=>{var l;let e,n;if(!((l=t.meta)!=null&&l.validate))return;const r=qe(),s=Ut(),i=([e,n]=Ws(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e);if(i===!0)return;const o=Xc({statusCode:i&&i.statusCode||404,statusMessage:i&&i.statusMessage||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}}),a=s.beforeResolve(u=>{if(a(),u===t){const h=s.afterEach(async()=>{h(),await r.runWithContext(()=>Ms(o)),window==null||window.history.pushState({},"",t.fullPath)});return!1}})},sC=async t=>{let e,n;const r=([e,n]=Ws(()=>gf(t.path)),e=await e,n(),e);if(r.redirect)return Xn(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},iC=[rC,sC],ro={};function oC(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const u=i.includes(t.slice(o))?t.slice(o).length:1;let h=i.slice(u);return h[0]!=="/"&&(h="/"+h),Zp(h,"")}const a=Zp(r,t),l=!n||NA(a,n,{trailingSlash:!0})?a:n;return l+(l.includes("?")?"":s)+i}const aC=tn({name:"nuxt:router",enforce:"pre",async setup(t){var N;let e,n,r=mi().app.baseURL;Xt.hashMode&&!r.includes("#")&&(r+="#");const s=((N=Xt.history)==null?void 0:N.call(Xt,r))??(Xt.hashMode?_P(r):Wv(r)),i=Xt.routes?([e,n]=Ws(()=>Xt.routes(ou)),e=await e,n(),e??ou):ou;let o;const a=jP({...Xt,scrollBehavior:(x,P,y)=>{if(P===sn){o=y;return}if(Xt.scrollBehavior){if(a.options.scrollBehavior=Xt.scrollBehavior,"scrollRestoration"in window.history){const S=a.beforeEach(()=>{S(),window.history.scrollRestoration="manual"})}return Xt.scrollBehavior(x,sn,o||y)}},history:s,routes:i});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const l=po(a.currentRoute.value);a.afterEach((x,P)=>{l.value=P}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const u=oC(r,window.location,t.payload.path),h=po(a.currentRoute.value),d=()=>{h.value=a.currentRoute.value};t.hook("page:finish",d),a.afterEach((x,P)=>{var y,S,D,V;((S=(y=x.matched[0])==null?void 0:y.components)==null?void 0:S.default)===((V=(D=P.matched[0])==null?void 0:D.components)==null?void 0:V.default)&&d()});const m={};for(const x in h.value)Object.defineProperty(m,x,{get:()=>h.value[x],enumerable:!0});t._route=Mn(m),t._middleware=t._middleware||{global:[],named:{}};const g=Yc();a.afterEach(async(x,P,y)=>{delete t._processingMiddleware,!t.isHydrating&&g.value&&await t.runWithContext(xR),y&&await t.callHook("page:loading:end")});try{[e,n]=Ws(()=>a.isReady()),await e,n()}catch(x){[e,n]=Ws(()=>t.runWithContext(()=>Ms(x))),await e,n()}const A=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value;d();const O=t.payload.state._layout;return a.beforeEach(async(x,P)=>{var y;await t.callHook("page:loading:start"),x.meta=Fr(x.meta),t.isHydrating&&O&&!Ar(x.meta.layout)&&(x.meta.layout=O),t._processingMiddleware=!0;{const S=new Set([...iC,...t._middleware.global]);for(const D of x.matched){const V=D.meta.middleware;if(V)for(const b of vf(V))S.add(b)}{const D=await t.runWithContext(()=>gf(x.path));if(D.appMiddleware)for(const V in D.appMiddleware)D.appMiddleware[V]?S.add(V):S.delete(V)}for(const D of S){const V=typeof D=="string"?t._middleware.named[D]||await((y=ro[D])==null?void 0:y.call(ro).then(E=>E.default||E)):D;if(!V)throw new Error(`Unknown route middleware: '${D}'.`);const b=await t.runWithContext(()=>V(x,P));if(!t.payload.serverRendered&&t.isHydrating&&(b===!1||b instanceof Error)){const E=b||Gu({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>Ms(E)),!1}if(b!==!0&&(b||b===!1))return b}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),a.afterEach(async(x,P)=>{x.matched.length===0&&await t.runWithContext(()=>Ms(Gu({statusCode:404,fatal:!1,statusMessage:`Page not found: ${x.fullPath}`,data:{path:x.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{"name"in A&&(A.name=void 0),await a.replace({...A,force:!0}),a.options.scrollBehavior=Xt.scrollBehavior}catch(x){await t.runWithContext(()=>Ms(x))}}),{provide:{router:a}}}}),oh=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),cC=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),tl=t=>{const e=qe();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{oh(()=>t())}):oh(()=>t())},lC="$s";function uC(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,r]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(r!==void 0&&typeof r!="function")throw new Error("[nuxt] [useState] init must be a function: "+r);const s=lC+n,i=qe(),o=iy(i.payload.state,s);if(o.value===void 0&&r){const a=r();if(tt(a))return i.payload.state[s]=a,a;o.value=a}return o}async function Jv(t,e=Ut()){const{path:n,matched:r}=e.resolve(t);if(!r.length||(e._routePreloaded||(e._routePreloaded=new Set),e._routePreloaded.has(n)))return;const s=e._preloadPromises=e._preloadPromises||[];if(s.length>4)return Promise.all(s).then(()=>Jv(t,e));e._routePreloaded.add(n);const i=r.map(o=>{var a;return(a=o.components)==null?void 0:a.default}).filter(o=>typeof o=="function");for(const o of i){const a=Promise.resolve(o()).catch(()=>{}).finally(()=>s.splice(s.indexOf(a)));s.push(a)}await Promise.all(s)}function hC(t={}){const e=t.path||window.location.pathname;let n={};try{n=cc(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:qe().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const fC=(...t)=>t.find(e=>e!==void 0);function dC(t){const e=t.componentName||"NuxtLink";function n(s,i){if(!s||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return s;if(typeof s=="string")return Lm(s,t.trailingSlash);const o="path"in s&&s.path!==void 0?s.path:i(s).path;return{...s,name:void 0,path:Lm(o,t.trailingSlash)}}function r(s){const i=Ut(),o=mi(),a=Fe(()=>!!s.target&&s.target!=="_self"),l=Fe(()=>{const O=s.to||s.href||"";return typeof O=="string"&&Xn(O,{acceptRelative:!0})}),u=Ou("RouterLink"),h=u&&typeof u!="string"?u.useLink:void 0,d=Fe(()=>{if(s.external)return!0;const O=s.to||s.href||"";return typeof O=="object"?!1:O===""||l.value}),m=Fe(()=>{const O=s.to||s.href||"";return d.value?O:n(O,i.resolve)}),g=d.value||h==null?void 0:h({...s,to:m}),A=Fe(()=>{var O;if(!m.value||l.value)return m.value;if(d.value){const N=typeof m.value=="object"&&"path"in m.value?Yu(m.value):m.value,x=typeof N=="object"?i.resolve(N).href:N;return n(x,i.resolve)}return typeof m.value=="object"?((O=i.resolve(m.value))==null?void 0:O.href)??null:n(Gc(o.app.baseURL,m.value),i.resolve)});return{to:m,hasTarget:a,isAbsoluteUrl:l,isExternal:d,href:A,isActive:(g==null?void 0:g.isActive)??Fe(()=>m.value===i.currentRoute.value.path),isExactActive:(g==null?void 0:g.isExactActive)??Fe(()=>m.value===i.currentRoute.value.path),route:(g==null?void 0:g.route)??Fe(()=>i.resolve(m.value)),async navigate(){await OR(A.value,{replace:s.replace,external:d.value||a.value})}}}return ds({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:r,setup(s,{slots:i}){const o=Ut(),{to:a,href:l,navigate:u,isExternal:h,hasTarget:d,isAbsoluteUrl:m}=r(s),g=Tt(!1),A=Tt(null),O=P=>{var y;A.value=s.custom?(y=P==null?void 0:P.$el)==null?void 0:y.nextElementSibling:P==null?void 0:P.$el};function N(P){var y,S;return!g.value&&(typeof s.prefetchOn=="string"?s.prefetchOn===P:((y=s.prefetchOn)==null?void 0:y[P])??((S=t.prefetchOn)==null?void 0:S[P]))&&(s.prefetch??t.prefetch)!==!1&&s.noPrefetch!==!0&&s.target!=="_blank"&&!_C()}async function x(P=qe()){if(g.value)return;g.value=!0;const y=typeof a.value=="string"?a.value:h.value?Yu(a.value):o.resolve(a.value).fullPath,S=h.value?new URL(y,window.location.href).href:y;await Promise.all([P.hooks.callHook("link:prefetch",S).catch(()=>{}),!h.value&&!d.value&&Jv(a.value,o).catch(()=>{})])}if(N("visibility")){const P=qe();let y,S=null;Fo(()=>{const D=mC();tl(()=>{y=oh(()=>{var V;(V=A==null?void 0:A.value)!=null&&V.tagName&&(S=D.observe(A.value,async()=>{S==null||S(),S=null,await x(P)}))})})}),Uo(()=>{y&&cC(y),S==null||S(),S=null})}return()=>{var S;if(!h.value&&!d.value){const D={ref:O,to:a.value,activeClass:s.activeClass||t.activeClass,exactActiveClass:s.exactActiveClass||t.exactActiveClass,replace:s.replace,ariaCurrentValue:s.ariaCurrentValue,custom:s.custom};return s.custom||(N("interaction")&&(D.onPointerenter=x.bind(null,void 0),D.onFocus=x.bind(null,void 0)),g.value&&(D.class=s.prefetchedClass||t.prefetchedClass),D.rel=s.rel||void 0),zt(Ou("RouterLink"),D,i.default)}const P=s.target||null,y=fC(s.noRel?"":s.rel,t.externalRelAttribute,m.value||d.value?"noopener noreferrer":"")||null;return s.custom?i.default?i.default({href:l.value,navigate:u,prefetch:x,get route(){if(!l.value)return;const D=new URL(l.value,window.location.href);return{path:D.pathname,fullPath:D.pathname,get query(){return sv(D.search)},hash:D.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:l.value}},rel:y,target:P,isExternal:h.value||d.value,isActive:!1,isExactActive:!1}):null:zt("a",{ref:A,href:l.value||null,rel:y,target:P},(S=i.default)==null?void 0:S.call(i))}}})}const pC=dC(hR);function Lm(t,e){const n=e==="append"?uc:Kc;return Xn(t)&&!t.startsWith("http")?t:n(t,!0)}function mC(){const t=qe();if(t._observer)return t._observer;let e=null;const n=new Map,r=(i,o)=>(e||(e=new IntersectionObserver(a=>{for(const l of a){const u=n.get(l.target);(l.isIntersecting||l.intersectionRatio>0)&&u&&u()}})),n.set(i,o),e.observe(i),()=>{n.delete(i),e.unobserve(i),n.size===0&&(e.disconnect(),e=null)});return t._observer={observe:r}}const gC=/2g/;function _C(){const t=navigator.connection;return!!(t&&(t.saveData||gC.test(t.effectiveType)))}const yC=tn({name:"nuxt-site-config:init",enforce:"pre",async setup(t){const e=uC("site-config");let n={};return n=e.value||window.__NUXT_SITE_CONFIG__,{provide:{nuxtSiteConfig:n}}}}),vC=tn({name:"nuxt:payload",setup(t){Ut().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const r=await pm(e.path);r&&Object.assign(t.static.data,r.data)}),tl(()=>{var e;t.hooks.hook("link:prefetch",async n=>{const{hostname:r}=new URL(n,window.location.href);r===window.location.hostname&&await pm(n)}),((e=navigator.connection)==null?void 0:e.effectiveType)!=="slow-2g"&&setTimeout(Jc,1e3)})}}),EC=tn(()=>{const t=Ut();tl(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),wC=tn(t=>{let e;async function n(){const r=await Jc();e&&clearTimeout(e),e=setTimeout(n,sm);try{const s=await $fetch(df("builds/latest.json")+`?${Date.now()}`);s.id!==r.id&&t.hooks.callHook("app:manifest:update",s)}catch{}}tl(()=>{e=setTimeout(n,sm)})}),TC=tn({name:"nuxt:chunk-reload",setup(t){const e=Ut(),n=mi(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const a="href"in i&&i.href[0]==="#"?n.app.baseURL+i.href:Gc(n.app.baseURL,i.fullPath);hC({path:a,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((i,o)=>{r.has(i)&&s(o)})}}),bC=tn({name:"nuxt:global-components"}),Aa={},IC=tn({name:"nuxt:prefetch",setup(t){const e=Ut();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof Aa[r]=="function"&&await Aa[r]()})}),t.hooks.hook("link:prefetch",n=>{if(Xn(n))return;const r=e.resolve(n);if(!r)return;const s=r.meta.layout;let i=vf(r.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof ro[o]=="function"&&ro[o]();s&&typeof Aa[s]=="function"&&Aa[s]()})}});/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function AC(t,e,n){return(e=SC(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Mm(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function W(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Mm(Object(n),!0).forEach(function(r){AC(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Mm(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function RC(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function SC(t){var e=RC(t,"string");return typeof e=="symbol"?e:e+""}const Vm=()=>{};let Ef={},Zv={},eE=null,tE={mark:Vm,measure:Vm};try{typeof window<"u"&&(Ef=window),typeof document<"u"&&(Zv=document),typeof MutationObserver<"u"&&(eE=MutationObserver),typeof performance<"u"&&(tE=performance)}catch{}const{userAgent:Fm=""}=Ef.navigator||{},Rr=Ef,je=Zv,Um=eE,Ra=tE;Rr.document;const Jn=!!je.documentElement&&!!je.head&&typeof je.addEventListener=="function"&&typeof je.createElement=="function",nE=~Fm.indexOf("MSIE")||~Fm.indexOf("Trident/");var PC=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,CC=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,rE={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},kC={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},sE=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],bt="classic",nl="duotone",OC="sharp",xC="sharp-duotone",iE=[bt,nl,OC,xC],NC={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},DC={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},LC=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),MC={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},VC=["fak","fa-kit","fakd","fa-kit-duotone"],jm={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},FC=["kit"],UC={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},jC=["fak","fakd"],BC={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Bm={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Sa={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},$C=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],HC=["fak","fa-kit","fakd","fa-kit-duotone"],qC={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},zC={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},WC={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},ah={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},KC=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],ch=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...$C,...KC],GC=["solid","regular","light","thin","duotone","brands"],oE=[1,2,3,4,5,6,7,8,9,10],QC=oE.concat([11,12,13,14,15,16,17,18,19,20]),YC=[...Object.keys(WC),...GC,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Sa.GROUP,Sa.SWAP_OPACITY,Sa.PRIMARY,Sa.SECONDARY].concat(oE.map(t=>"".concat(t,"x"))).concat(QC.map(t=>"w-".concat(t))),XC={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const qn="___FONT_AWESOME___",lh=16,aE="fa",cE="svg-inline--fa",os="data-fa-i2svg",uh="data-fa-pseudo-element",JC="data-fa-pseudo-element-pending",wf="data-prefix",Tf="data-icon",$m="fontawesome-i2svg",ZC="async",e1=["HTML","HEAD","STYLE","SCRIPT"],lE=(()=>{try{return!0}catch{return!1}})();function Bo(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[bt]}})}const uE=W({},rE);uE[bt]=W(W(W(W({},{"fa-duotone":"duotone"}),rE[bt]),jm.kit),jm["kit-duotone"]);const t1=Bo(uE),hh=W({},MC);hh[bt]=W(W(W(W({},{duotone:"fad"}),hh[bt]),Bm.kit),Bm["kit-duotone"]);const Hm=Bo(hh),fh=W({},ah);fh[bt]=W(W({},fh[bt]),BC.kit);const bf=Bo(fh),dh=W({},zC);dh[bt]=W(W({},dh[bt]),UC.kit);Bo(dh);const n1=PC,hE="fa-layers-text",r1=CC,s1=W({},NC);Bo(s1);const i1=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],au=kC,o1=[...FC,...YC],so=Rr.FontAwesomeConfig||{};function a1(t){var e=je.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function c1(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}je&&typeof je.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const s=c1(a1(n));s!=null&&(so[r]=s)});const fE={styleDefault:"solid",familyDefault:bt,cssPrefix:aE,replacementClass:cE,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};so.familyPrefix&&(so.cssPrefix=so.familyPrefix);const si=W(W({},fE),so);si.autoReplaceSvg||(si.observeMutations=!1);const ae={};Object.keys(fE).forEach(t=>{Object.defineProperty(ae,t,{enumerable:!0,set:function(e){si[t]=e,io.forEach(n=>n(ae))},get:function(){return si[t]}})});Object.defineProperty(ae,"familyPrefix",{enumerable:!0,set:function(t){si.cssPrefix=t,io.forEach(e=>e(ae))},get:function(){return si.cssPrefix}});Rr.FontAwesomeConfig=ae;const io=[];function l1(t){return io.push(t),()=>{io.splice(io.indexOf(t),1)}}const ar=lh,gn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function u1(t){if(!t||!Jn)return;const e=je.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=je.head.childNodes;let r=null;for(let s=n.length-1;s>-1;s--){const i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return je.head.insertBefore(e,r),t}const h1="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function wo(){let t=12,e="";for(;t-- >0;)e+=h1[Math.random()*62|0];return e}function gi(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function If(t){return t.classList?gi(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function dE(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function f1(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(dE(t[n]),'" '),"").trim()}function rl(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Af(t){return t.size!==gn.size||t.x!==gn.x||t.y!==gn.y||t.rotate!==gn.rotate||t.flipX||t.flipY}function d1(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:u}}function p1(t){let{transform:e,width:n=lh,height:r=lh,startCentered:s=!1}=t,i="";return s&&nE?i+="translate(".concat(e.x/ar-n/2,"em, ").concat(e.y/ar-r/2,"em) "):s?i+="translate(calc(-50% + ".concat(e.x/ar,"em), calc(-50% + ").concat(e.y/ar,"em)) "):i+="translate(".concat(e.x/ar,"em, ").concat(e.y/ar,"em) "),i+="scale(".concat(e.size/ar*(e.flipX?-1:1),", ").concat(e.size/ar*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var m1=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function pE(){const t=aE,e=cE,n=ae.cssPrefix,r=ae.replacementClass;let s=m1;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return s}let qm=!1;function cu(){ae.autoAddCss&&!qm&&(u1(pE()),qm=!0)}var g1={mixout(){return{dom:{css:pE,insertCss:cu}}},hooks(){return{beforeDOMElementCreation(){cu()},beforeI2svg(){cu()}}}};const zn=Rr||{};zn[qn]||(zn[qn]={});zn[qn].styles||(zn[qn].styles={});zn[qn].hooks||(zn[qn].hooks={});zn[qn].shims||(zn[qn].shims=[]);var _n=zn[qn];const mE=[],gE=function(){je.removeEventListener("DOMContentLoaded",gE),_c=1,mE.map(t=>t())};let _c=!1;Jn&&(_c=(je.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(je.readyState),_c||je.addEventListener("DOMContentLoaded",gE));function _1(t){Jn&&(_c?setTimeout(t,0):mE.push(t))}function $o(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?dE(t):"<".concat(e," ").concat(f1(n),">").concat(r.map($o).join(""),"</").concat(e,">")}function zm(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var lu=function(e,n,r,s){var i=Object.keys(e),o=i.length,a=n,l,u,h;for(r===void 0?(l=1,h=e[i[0]]):(l=0,h=r);l<o;l++)u=i[l],h=a(h,e[u],u,e);return h};function y1(t){const e=[];let n=0;const r=t.length;for(;n<r;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function ph(t){const e=y1(t);return e.length===1?e[0].toString(16):null}function v1(t,e){const n=t.length;let r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function Wm(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function mh(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,s=Wm(e);typeof _n.hooks.addPack=="function"&&!r?_n.hooks.addPack(t,Wm(e)):_n.styles[t]=W(W({},_n.styles[t]||{}),s),t==="fas"&&mh("fa",e)}const{styles:To,shims:E1}=_n,_E=Object.keys(bf),w1=_E.reduce((t,e)=>(t[e]=Object.keys(bf[e]),t),{});let Rf=null,yE={},vE={},EE={},wE={},TE={};function T1(t){return~o1.indexOf(t)}function b1(t,e){const n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!T1(s)?s:null}const bE=()=>{const t=r=>lu(To,(s,i,o)=>(s[o]=lu(i,r,{}),s),{});yE=t((r,s,i)=>(s[3]&&(r[s[3]]=i),s[2]&&s[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=i}),r)),vE=t((r,s,i)=>(r[i]=i,s[2]&&s[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=i}),r)),TE=t((r,s,i)=>{const o=s[2];return r[i]=i,o.forEach(a=>{r[a]=i}),r});const e="far"in To||ae.autoFetchSvg,n=lu(E1,(r,s)=>{const i=s[0];let o=s[1];const a=s[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:a}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});EE=n.names,wE=n.unicodes,Rf=sl(ae.styleDefault,{family:ae.familyDefault})};l1(t=>{Rf=sl(t.styleDefault,{family:ae.familyDefault})});bE();function Sf(t,e){return(yE[t]||{})[e]}function I1(t,e){return(vE[t]||{})[e]}function Jr(t,e){return(TE[t]||{})[e]}function IE(t){return EE[t]||{prefix:null,iconName:null}}function A1(t){const e=wE[t],n=Sf("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Sr(){return Rf}const AE=()=>({prefix:null,iconName:null,rest:[]});function R1(t){let e=bt;const n=_E.reduce((r,s)=>(r[s]="".concat(ae.cssPrefix,"-").concat(s),r),{});return iE.forEach(r=>{(t.includes(n[r])||t.some(s=>w1[r].includes(s)))&&(e=r)}),e}function sl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=bt}=e,r=t1[n][t];if(n===nl&&!t)return"fad";const s=Hm[n][t]||Hm[n][r],i=t in _n.styles?t:null;return s||i||null}function S1(t){let e=[],n=null;return t.forEach(r=>{const s=b1(ae.cssPrefix,r);s?n=s:r&&e.push(r)}),{iconName:n,rest:e}}function Km(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function il(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const s=ch.concat(HC),i=Km(t.filter(d=>s.includes(d))),o=Km(t.filter(d=>!ch.includes(d))),a=i.filter(d=>(r=d,!sE.includes(d))),[l=null]=a,u=R1(i),h=W(W({},S1(o)),{},{prefix:sl(l,{family:u})});return W(W(W({},h),O1({values:t,family:u,styles:To,config:ae,canonical:h,givenPrefix:r})),P1(n,r,h))}function P1(t,e,n){let{prefix:r,iconName:s}=n;if(t||!r||!s)return{prefix:r,iconName:s};const i=e==="fa"?IE(s):{},o=Jr(r,s);return s=i.iconName||o||s,r=i.prefix||r,r==="far"&&!To.far&&To.fas&&!ae.autoFetchSvg&&(r="fas"),{prefix:r,iconName:s}}const C1=iE.filter(t=>t!==bt||t!==nl),k1=Object.keys(ah).filter(t=>t!==bt).map(t=>Object.keys(ah[t])).flat();function O1(t){const{values:e,family:n,canonical:r,givenPrefix:s="",styles:i={},config:o={}}=t,a=n===nl,l=e.includes("fa-duotone")||e.includes("fad"),u=o.familyDefault==="duotone",h=r.prefix==="fad"||r.prefix==="fa-duotone";if(!a&&(l||u||h)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&C1.includes(n)&&(Object.keys(i).find(m=>k1.includes(m))||o.autoFetchSvg)){const m=LC.get(n).defaultShortPrefixId;r.prefix=m,r.iconName=Jr(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||s==="fa")&&(r.prefix=Sr()||"fas"),r}class x1{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]=W(W({},this.definitions[i]||{}),s[i]),mh(i,s[i]);const o=bf[bt][i];o&&mh(o,s[i]),bE()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(s=>{const{prefix:i,iconName:o,icon:a}=r[s],l=a[2];e[i]||(e[i]={}),l.length>0&&l.forEach(u=>{typeof u=="string"&&(e[i][u]=a)}),e[i][o]=a}),e}}let Gm=[],Vs={};const Ks={},N1=Object.keys(Ks);function D1(t,e){let{mixoutsTo:n}=e;return Gm=t,Vs={},Object.keys(Ks).forEach(r=>{N1.indexOf(r)===-1&&delete Ks[r]}),Gm.forEach(r=>{const s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(n[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=s[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{Vs[o]||(Vs[o]=[]),Vs[o].push(i[o])})}r.provides&&r.provides(Ks)}),n}function gh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return(Vs[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function as(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(Vs[t]||[]).forEach(i=>{i.apply(null,n)})}function Pr(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ks[t]?Ks[t].apply(null,e):void 0}function _h(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Sr();if(e)return e=Jr(n,e)||e,zm(RE.definitions,n,e)||zm(_n.styles,n,e)}const RE=new x1,L1=()=>{ae.autoReplaceSvg=!1,ae.observeMutations=!1,as("noAuto")},M1={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Jn?(as("beforeI2svg",t),Pr("pseudoElements2svg",t),Pr("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;ae.autoReplaceSvg===!1&&(ae.autoReplaceSvg=!0),ae.observeMutations=!0,_1(()=>{F1({autoReplaceSvgRoot:e}),as("watch",t)})}},V1={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Jr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=sl(t[0]);return{prefix:n,iconName:Jr(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(ae.cssPrefix,"-"))>-1||t.match(n1))){const e=il(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Sr(),iconName:Jr(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Sr();return{prefix:e,iconName:Jr(e,t)||t}}}},Kt={noAuto:L1,config:ae,dom:M1,parse:V1,library:RE,findIconDefinition:_h,toHtml:$o},F1=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=je}=t;(Object.keys(_n.styles).length>0||ae.autoFetchSvg)&&Jn&&ae.autoReplaceSvg&&Kt.dom.i2svg({node:e})};function ol(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>$o(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Jn)return;const n=je.createElement("div");return n.innerHTML=t.html,n.children}}),t}function U1(t){let{children:e,main:n,mask:r,attributes:s,styles:i,transform:o}=t;if(Af(o)&&n.found&&!r.found){const{width:a,height:l}=n,u={x:a/l/2,y:.5};s.style=rl(W(W({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function j1(t){let{prefix:e,iconName:n,children:r,attributes:s,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(ae.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:W(W({},s),{},{id:o}),children:r}]}]}function Pf(t){const{icons:{main:e,mask:n},prefix:r,iconName:s,transform:i,symbol:o,title:a,maskId:l,titleId:u,extra:h,watchable:d=!1}=t,{width:m,height:g}=n.found?n:e,A=jC.includes(r),O=[ae.replacementClass,s?"".concat(ae.cssPrefix,"-").concat(s):""].filter(D=>h.classes.indexOf(D)===-1).filter(D=>D!==""||!!D).concat(h.classes).join(" ");let N={children:[],attributes:W(W({},h.attributes),{},{"data-prefix":r,"data-icon":s,class:O,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(g)})};const x=A&&!~h.classes.indexOf("fa-fw")?{width:"".concat(m/g*16*.0625,"em")}:{};d&&(N.attributes[os]=""),a&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(u||wo())},children:[a]}),delete N.attributes.title);const P=W(W({},N),{},{prefix:r,iconName:s,main:e,mask:n,maskId:l,transform:i,symbol:o,styles:W(W({},x),h.styles)}),{children:y,attributes:S}=n.found&&e.found?Pr("generateAbstractMask",P)||{children:[],attributes:{}}:Pr("generateAbstractIcon",P)||{children:[],attributes:{}};return P.children=y,P.attributes=S,o?j1(P):U1(P)}function Qm(t){const{content:e,width:n,height:r,transform:s,title:i,extra:o,watchable:a=!1}=t,l=W(W(W({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});a&&(l[os]="");const u=W({},o.styles);Af(s)&&(u.transform=p1({transform:s,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const h=rl(u);h.length>0&&(l.style=h);const d=[];return d.push({tag:"span",attributes:l,children:[e]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function B1(t){const{content:e,title:n,extra:r}=t,s=W(W(W({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=rl(r.styles);i.length>0&&(s.style=i);const o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:uu}=_n;function yh(t){const e=t[0],n=t[1],[r]=t.slice(4);let s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(ae.cssPrefix,"-").concat(au.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ae.cssPrefix,"-").concat(au.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(ae.cssPrefix,"-").concat(au.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:s}}const $1={found:!1,width:512,height:512};function H1(t,e){!lE&&!ae.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function vh(t,e){let n=e;return e==="fa"&&ae.styleDefault!==null&&(e=Sr()),new Promise((r,s)=>{if(n==="fa"){const i=IE(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&uu[e]&&uu[e][t]){const i=uu[e][t];return r(yh(i))}H1(t,e),r(W(W({},$1),{},{icon:ae.showMissingIcons&&t?Pr("missingIconAbstract")||{}:{}}))})}const Ym=()=>{},Eh=ae.measurePerformance&&Ra&&Ra.mark&&Ra.measure?Ra:{mark:Ym,measure:Ym},$i='FA "6.7.1"',q1=t=>(Eh.mark("".concat($i," ").concat(t," begins")),()=>SE(t)),SE=t=>{Eh.mark("".concat($i," ").concat(t," ends")),Eh.measure("".concat($i," ").concat(t),"".concat($i," ").concat(t," begins"),"".concat($i," ").concat(t," ends"))};var Cf={begin:q1,end:SE};const ja=()=>{};function Xm(t){return typeof(t.getAttribute?t.getAttribute(os):null)=="string"}function z1(t){const e=t.getAttribute?t.getAttribute(wf):null,n=t.getAttribute?t.getAttribute(Tf):null;return e&&n}function W1(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(ae.replacementClass)}function K1(){return ae.autoReplaceSvg===!0?Ba.replace:Ba[ae.autoReplaceSvg]||Ba.replace}function G1(t){return je.createElementNS("http://www.w3.org/2000/svg",t)}function Q1(t){return je.createElement(t)}function PE(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?G1:Q1}=e;if(typeof t=="string")return je.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild(PE(i,{ceFn:n}))}),r}function Y1(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Ba={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(PE(n),e)}),e.getAttribute(os)===null&&ae.keepOriginalSource){let n=je.createComment(Y1(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~If(e).indexOf(ae.replacementClass))return Ba.replace(t);const r=new RegExp("".concat(ae.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,a)=>(a===ae.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const s=n.map(i=>$o(i)).join(`
`);e.setAttribute(os,""),e.innerHTML=s}};function Jm(t){t()}function CE(t,e){const n=typeof e=="function"?e:ja;if(t.length===0)n();else{let r=Jm;ae.mutateApproach===ZC&&(r=Rr.requestAnimationFrame||Jm),r(()=>{const s=K1(),i=Cf.begin("mutate");t.map(s),i(),n()})}}let kf=!1;function kE(){kf=!0}function wh(){kf=!1}let yc=null;function Zm(t){if(!Um||!ae.observeMutations)return;const{treeCallback:e=ja,nodeCallback:n=ja,pseudoElementsCallback:r=ja,observeMutationsRoot:s=je}=t;yc=new Um(i=>{if(kf)return;const o=Sr();gi(i).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!Xm(a.addedNodes[0])&&(ae.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&ae.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&Xm(a.target)&&~i1.indexOf(a.attributeName))if(a.attributeName==="class"&&z1(a.target)){const{prefix:l,iconName:u}=il(If(a.target));a.target.setAttribute(wf,l||o),u&&a.target.setAttribute(Tf,u)}else W1(a.target)&&n(a.target)})}),Jn&&yc.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function X1(){yc&&yc.disconnect()}function J1(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,s)=>{const i=s.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function Z1(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let s=il(If(t));return s.prefix||(s.prefix=Sr()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=I1(s.prefix,t.innerText)||Sf(s.prefix,ph(t.innerText))),!s.iconName&&ae.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function ek(t){const e=gi(t.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return ae.autoA11y&&(n?e["aria-labelledby"]="".concat(ae.replacementClass,"-title-").concat(r||wo()):(e["aria-hidden"]="true",e.focusable="false")),e}function tk(){return{iconName:null,title:null,titleId:null,prefix:null,transform:gn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function eg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:s}=Z1(t),i=ek(t),o=gh("parseNodeAttributes",{},t);let a=e.styleParser?J1(t):[];return W({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:gn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:a,attributes:i}},o)}const{styles:nk}=_n;function OE(t){const e=ae.autoReplaceSvg==="nest"?eg(t,{styleParser:!1}):eg(t);return~e.extra.classes.indexOf(hE)?Pr("generateLayersText",t,e):Pr("generateSvgReplacementMutation",t,e)}function rk(){return[...VC,...ch]}function tg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Jn)return Promise.resolve();const n=je.documentElement.classList,r=h=>n.add("".concat($m,"-").concat(h)),s=h=>n.remove("".concat($m,"-").concat(h)),i=ae.autoFetchSvg?rk():sE.concat(Object.keys(nk));i.includes("fa")||i.push("fa");const o=[".".concat(hE,":not([").concat(os,"])")].concat(i.map(h=>".".concat(h,":not([").concat(os,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=gi(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),s("complete");else return Promise.resolve();const l=Cf.begin("onTree"),u=a.reduce((h,d)=>{try{const m=OE(d);m&&h.push(m)}catch(m){lE||m.name==="MissingIcon"&&console.error(m)}return h},[]);return new Promise((h,d)=>{Promise.all(u).then(m=>{CE(m,()=>{r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),l(),h()})}).catch(m=>{l(),d(m)})})}function sk(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;OE(t).then(n=>{n&&CE([n],e)})}function ik(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:_h(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:_h(s||{})),t(r,W(W({},n),{},{mask:s}))}}const ok=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=gn,symbol:r=!1,mask:s=null,maskId:i=null,title:o=null,titleId:a=null,classes:l=[],attributes:u={},styles:h={}}=e;if(!t)return;const{prefix:d,iconName:m,icon:g}=t;return ol(W({type:"icon"},t),()=>(as("beforeDOMElementCreation",{iconDefinition:t,params:e}),ae.autoA11y&&(o?u["aria-labelledby"]="".concat(ae.replacementClass,"-title-").concat(a||wo()):(u["aria-hidden"]="true",u.focusable="false")),Pf({icons:{main:yh(g),mask:s?yh(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:m,transform:W(W({},gn),n),symbol:r,title:o,maskId:i,titleId:a,extra:{attributes:u,styles:h,classes:l}})))};var ak={mixout(){return{icon:ik(ok)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=tg,t.nodeCallback=sk,t}}},provides(t){t.i2svg=function(e){const{node:n=je,callback:r=()=>{}}=e;return tg(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:s,titleId:i,prefix:o,transform:a,symbol:l,mask:u,maskId:h,extra:d}=n;return new Promise((m,g)=>{Promise.all([vh(r,o),u.iconName?vh(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(A=>{let[O,N]=A;m([e,Pf({icons:{main:O,mask:N},prefix:o,iconName:r,transform:a,symbol:l,maskId:h,title:s,titleId:i,extra:d,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:s,transform:i,styles:o}=e;const a=rl(o);a.length>0&&(r.style=a);let l;return Af(i)&&(l=Pr("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(l||s.icon),{children:n,attributes:r}}}},ck={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return ol({type:"layer"},()=>{as("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(s=>{Array.isArray(s)?s.map(i=>{r=r.concat(i.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(ae.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},lk={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:s={},styles:i={}}=e;return ol({type:"counter",content:t},()=>(as("beforeDOMElementCreation",{content:t,params:e}),B1({content:t.toString(),title:n,extra:{attributes:s,styles:i,classes:["".concat(ae.cssPrefix,"-layers-counter"),...r]}})))}}}},uk={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=gn,title:r=null,classes:s=[],attributes:i={},styles:o={}}=e;return ol({type:"text",content:t},()=>(as("beforeDOMElementCreation",{content:t,params:e}),Qm({content:t,transform:W(W({},gn),n),title:r,extra:{attributes:i,styles:o,classes:["".concat(ae.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:s,extra:i}=n;let o=null,a=null;if(nE){const l=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/l,a=u.height/l}return ae.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Qm({content:e.innerHTML,width:o,height:a,transform:s,title:r,extra:i,watchable:!0})])}}};const hk=new RegExp('"',"ug"),ng=[1105920,1112319],rg=W(W(W(W({},{FontAwesome:{normal:"fas",400:"fas"}}),DC),XC),qC),Th=Object.keys(rg).reduce((t,e)=>(t[e.toLowerCase()]=rg[e],t),{}),fk=Object.keys(Th).reduce((t,e)=>{const n=Th[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function dk(t){const e=t.replace(hk,""),n=v1(e,0),r=n>=ng[0]&&n<=ng[1],s=e.length===2?e[0]===e[1]:!1;return{value:ph(s?e[0]:e),isSecondary:r||s}}function pk(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(Th[n]||{})[s]||fk[n]}function sg(t,e){const n="".concat(JC).concat(e.replace(":","-"));return new Promise((r,s)=>{if(t.getAttribute(n)!==null)return r();const o=gi(t.children).filter(m=>m.getAttribute(uh)===e)[0],a=Rr.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),u=l.match(r1),h=a.getPropertyValue("font-weight"),d=a.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&d!=="none"&&d!==""){const m=a.getPropertyValue("content");let g=pk(l,h);const{value:A,isSecondary:O}=dk(m),N=u[0].startsWith("FontAwesome");let x=Sf(g,A),P=x;if(N){const y=A1(A);y.iconName&&y.prefix&&(x=y.iconName,g=y.prefix)}if(x&&!O&&(!o||o.getAttribute(wf)!==g||o.getAttribute(Tf)!==P)){t.setAttribute(n,P),o&&t.removeChild(o);const y=tk(),{extra:S}=y;S.attributes[uh]=e,vh(x,g).then(D=>{const V=Pf(W(W({},y),{},{icons:{main:D,mask:AE()},prefix:g,iconName:P,extra:S,watchable:!0})),b=je.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(b,t.firstChild):t.appendChild(b),b.outerHTML=V.map(E=>$o(E)).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function mk(t){return Promise.all([sg(t,"::before"),sg(t,"::after")])}function gk(t){return t.parentNode!==document.head&&!~e1.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(uh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function ig(t){if(Jn)return new Promise((e,n)=>{const r=gi(t.querySelectorAll("*")).filter(gk).map(mk),s=Cf.begin("searchPseudoElements");kE(),Promise.all(r).then(()=>{s(),wh(),e()}).catch(()=>{s(),wh(),n()})})}var _k={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=ig,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=je}=e;ae.searchPseudoElements&&ig(n)}}};let og=!1;var yk={mixout(){return{dom:{unwatch(){kE(),og=!0}}}},hooks(){return{bootstrap(){Zm(gh("mutationObserverCallbacks",{}))},noAuto(){X1()},watch(t){const{observeMutationsRoot:e}=t;og?wh():Zm(gh("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const ag=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const s=r.toLowerCase().split("-"),i=s[0];let o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var vk={mixout(){return{parse:{transform:t=>ag(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=ag(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:s,iconWidth:i}=e;const o={transform:"translate(".concat(s/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(a," ").concat(l," ").concat(u)},d={transform:"translate(".concat(i/2*-1," -256)")},m={outer:o,inner:h,path:d};return{tag:"g",attributes:W({},m.outer),children:[{tag:"g",attributes:W({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:W(W({},n.icon.attributes),m.path)}]}]}}}};const hu={x:0,y:0,width:"100%",height:"100%"};function cg(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Ek(t){return t.tag==="g"?t.children:[t]}var wk={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?il(n.split(" ").map(s=>s.trim())):AE();return r.prefix||(r.prefix=Sr()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:s,mask:i,maskId:o,transform:a}=e;const{width:l,icon:u}=s,{width:h,icon:d}=i,m=d1({transform:a,containerWidth:h,iconWidth:l}),g={tag:"rect",attributes:W(W({},hu),{},{fill:"white"})},A=u.children?{children:u.children.map(cg)}:{},O={tag:"g",attributes:W({},m.inner),children:[cg(W({tag:u.tag,attributes:W(W({},u.attributes),m.path)},A))]},N={tag:"g",attributes:W({},m.outer),children:[O]},x="mask-".concat(o||wo()),P="clip-".concat(o||wo()),y={tag:"mask",attributes:W(W({},hu),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,N]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:Ek(d)},y]};return n.push(S,{tag:"rect",attributes:W({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(x,")")},hu)}),{children:n,attributes:r}}}},Tk={provides(t){let e=!1;Rr.matchMedia&&(e=Rr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:W(W({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=W(W({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:W(W({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:W(W({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:W(W({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:W(W({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:W(W({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:W(W({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:W(W({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},bk={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},Ik=[g1,ak,ck,lk,uk,_k,yk,vk,wk,Tk,bk];D1(Ik,{mixoutsTo:Kt});Kt.noAuto;Kt.config;const Ak=Kt.library;Kt.dom;const bh=Kt.parse;Kt.findIconDefinition;Kt.toHtml;const Rk=Kt.icon;Kt.layer;Kt.text;Kt.counter;function lg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Ln(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?lg(Object(n),!0).forEach(function(r){Lt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):lg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Sk(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Pk(t){var e=Sk(t,"string");return typeof e=="symbol"?e:e+""}function vc(t){"@babel/helpers - typeof";return vc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},vc(t)}function Lt(t,e,n){return e=Pk(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ck(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function kk(t,e){if(t==null)return{};var n=Ck(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var Ok=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},xE={exports:{}};(function(t){(function(e){var n=function(x,P,y){if(!u(P)||d(P)||m(P)||g(P)||l(P))return P;var S,D=0,V=0;if(h(P))for(S=[],V=P.length;D<V;D++)S.push(n(x,P[D],y));else{S={};for(var b in P)Object.prototype.hasOwnProperty.call(P,b)&&(S[x(b,y)]=n(x,P[b],y))}return S},r=function(x,P){P=P||{};var y=P.separator||"_",S=P.split||/(?=[A-Z])/;return x.split(S).join(y)},s=function(x){return A(x)?x:(x=x.replace(/[\-_\s]+(.)?/g,function(P,y){return y?y.toUpperCase():""}),x.substr(0,1).toLowerCase()+x.substr(1))},i=function(x){var P=s(x);return P.substr(0,1).toUpperCase()+P.substr(1)},o=function(x,P){return r(x,P).toLowerCase()},a=Object.prototype.toString,l=function(x){return typeof x=="function"},u=function(x){return x===Object(x)},h=function(x){return a.call(x)=="[object Array]"},d=function(x){return a.call(x)=="[object Date]"},m=function(x){return a.call(x)=="[object RegExp]"},g=function(x){return a.call(x)=="[object Boolean]"},A=function(x){return x=x-0,x===x},O=function(x,P){var y=P&&"process"in P?P.process:P;return typeof y!="function"?x:function(S,D){return y(S,x,D)}},N={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(x,P){return n(O(s,P),x)},decamelizeKeys:function(x,P){return n(O(o,P),x,P)},pascalizeKeys:function(x,P){return n(O(i,P),x)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=N:e.humps=N})(Ok)})(xE);var xk=xE.exports,Nk=["class","style"];function Dk(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=xk.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function Lk(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function NE(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return NE(l)}),s=Object.keys(t.attributes||{}).reduce(function(l,u){var h=t.attributes[u];switch(u){case"class":l.class=Lk(h);break;case"style":l.style=Dk(h);break;default:l.attrs[u]=h}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,a=kk(n,Nk);return zt(t.tag,Ln(Ln(Ln({},e),{},{class:s.class,style:Ln(Ln({},s.style),o)},s.attrs),a),r)}var DE=!1;try{DE=!0}catch{}function Mk(){if(!DE&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function fu(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Lt({},t,e):{}}function Vk(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Lt(Lt(Lt(Lt(Lt(Lt(Lt(Lt(Lt(Lt(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),Lt(Lt(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function ug(t){if(t&&vc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(bh.icon)return bh.icon(t);if(t===null)return null;if(vc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Fk=ds({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=Fe(function(){return ug(e.icon)}),i=Fe(function(){return fu("classes",Vk(e))}),o=Fe(function(){return fu("transform",typeof e.transform=="string"?bh.transform(e.transform):e.transform)}),a=Fe(function(){return fu("mask",ug(e.mask))}),l=Fe(function(){return Rk(s.value,Ln(Ln(Ln(Ln({},i.value),o.value),a.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});Er(l,function(h){if(!h)return Mk("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var u=Fe(function(){return l.value?NE(l.value.abstract[0],{},r):null});return function(){return u.value}}});/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Uk={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},jk=tn(t=>{Ak.add(Uk),t.vueApp.component("font-awesome-icon",Fk)});var hg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Bk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ME={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,h=i>>2,d=(i&3)<<4|a>>4;let m=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(m=64)),r.push(n[h],n[d],n[m],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(LE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Bk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||d==null)throw new $k;const m=i<<2|a>>4;if(r.push(m),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const A=u<<6&192|d;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $k extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hk=function(t){const e=LE(t);return ME.encodeByteArray(e,!0)},Ec=function(t){return Hk(t).replace(/\./g,"")},VE=function(t){try{return ME.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk=()=>qk().__FIREBASE_DEFAULTS__,Wk=()=>{if(typeof process>"u"||typeof hg>"u")return;const t=hg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Kk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&VE(t[1]);return e&&JSON.parse(e)},al=()=>{try{return zk()||Wk()||Kk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},FE=t=>{var e,n;return(n=(e=al())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Gk=t=>{const e=FE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},UE=()=>{var t;return(t=al())===null||t===void 0?void 0:t.config},jE=t=>{var e;return(e=al())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ec(JSON.stringify(n)),Ec(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function Jk(){var t;const e=(t=al())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function Zk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function eO(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tO(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nO(){const t=It();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function rO(){return!Jk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sO(){try{return typeof indexedDB=="object"}catch{return!1}}function iO(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oO="FirebaseError";class Zn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=oO,Object.setPrototypeOf(this,Zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ho.prototype.create)}}class Ho{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?aO(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Zn(s,a,r)}}function aO(t,e){return t.replace(cO,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const cO=/\{\$([^}]+)}/g;function lO(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(fg(i)&&fg(o)){if(!wc(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function fg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Hi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function qi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function uO(t,e){const n=new hO(t,e);return n.subscribe.bind(n)}class hO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");fO(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=du),s.error===void 0&&(s.error=du),s.complete===void 0&&(s.complete=du);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fO(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function du(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t){return t&&t._delegate?t._delegate:t}class cs{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dO{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Qk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mO(e))try{this.getOrInitializeService({instanceIdentifier:Yr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yr){return this.instances.has(e)}getOptions(e=Yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pO(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yr){return this.component?this.component.multipleInstances?e:Yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pO(t){return t===Yr?void 0:t}function mO(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new dO(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const _O={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},yO=Ee.INFO,vO={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},EO=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=vO[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Of{constructor(e){this.name=e,this._logLevel=yO,this._logHandler=EO,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_O[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const wO=(t,e)=>e.some(n=>t instanceof n);let dg,pg;function TO(){return dg||(dg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bO(){return pg||(pg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const BE=new WeakMap,Ih=new WeakMap,$E=new WeakMap,pu=new WeakMap,xf=new WeakMap;function IO(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(wr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&BE.set(n,t)}).catch(()=>{}),xf.set(e,t),e}function AO(t){if(Ih.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ih.set(t,e)}let Ah={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ih.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$E.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function RO(t){Ah=t(Ah)}function SO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(mu(this),e,...n);return $E.set(r,e.sort?e.sort():[e]),wr(r)}:bO().includes(t)?function(...e){return t.apply(mu(this),e),wr(BE.get(this))}:function(...e){return wr(t.apply(mu(this),e))}}function PO(t){return typeof t=="function"?SO(t):(t instanceof IDBTransaction&&AO(t),wO(t,TO())?new Proxy(t,Ah):t)}function wr(t){if(t instanceof IDBRequest)return IO(t);if(pu.has(t))return pu.get(t);const e=PO(t);return e!==t&&(pu.set(t,e),xf.set(e,t)),e}const mu=t=>xf.get(t);function CO(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=wr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(wr(o.result),l.oldVersion,l.newVersion,wr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const kO=["get","getKey","getAll","getAllKeys","count"],OO=["put","add","delete","clear"],gu=new Map;function mg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(gu.get(e))return gu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=OO.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||kO.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&l.done]))[0]};return gu.set(e,i),i}RO(t=>({...t,get:(e,n,r)=>mg(e,n)||t.get(e,n,r),has:(e,n)=>!!mg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(NO(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function NO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rh="@firebase/app",gg="0.10.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=new Of("@firebase/app"),DO="@firebase/app-compat",LO="@firebase/analytics-compat",MO="@firebase/analytics",VO="@firebase/app-check-compat",FO="@firebase/app-check",UO="@firebase/auth",jO="@firebase/auth-compat",BO="@firebase/database",$O="@firebase/data-connect",HO="@firebase/database-compat",qO="@firebase/functions",zO="@firebase/functions-compat",WO="@firebase/installations",KO="@firebase/installations-compat",GO="@firebase/messaging",QO="@firebase/messaging-compat",YO="@firebase/performance",XO="@firebase/performance-compat",JO="@firebase/remote-config",ZO="@firebase/remote-config-compat",ex="@firebase/storage",tx="@firebase/storage-compat",nx="@firebase/firestore",rx="@firebase/vertexai",sx="@firebase/firestore-compat",ix="firebase",ox="11.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh="[DEFAULT]",ax={[Rh]:"fire-core",[DO]:"fire-core-compat",[MO]:"fire-analytics",[LO]:"fire-analytics-compat",[FO]:"fire-app-check",[VO]:"fire-app-check-compat",[UO]:"fire-auth",[jO]:"fire-auth-compat",[BO]:"fire-rtdb",[$O]:"fire-data-connect",[HO]:"fire-rtdb-compat",[qO]:"fire-fn",[zO]:"fire-fn-compat",[WO]:"fire-iid",[KO]:"fire-iid-compat",[GO]:"fire-fcm",[QO]:"fire-fcm-compat",[YO]:"fire-perf",[XO]:"fire-perf-compat",[JO]:"fire-rc",[ZO]:"fire-rc-compat",[ex]:"fire-gcs",[tx]:"fire-gcs-compat",[nx]:"fire-fst",[sx]:"fire-fst-compat",[rx]:"fire-vertex","fire-js":"fire-js",[ix]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc=new Map,cx=new Map,Ph=new Map;function _g(t,e){try{t.container.addComponent(e)}catch(n){Wn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ii(t){const e=t.name;if(Ph.has(e))return Wn.debug(`There were multiple attempts to register component ${e}.`),!1;Ph.set(e,t);for(const n of Tc.values())_g(n,t);for(const n of cx.values())_g(n,t);return!0}function Nf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function yn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tr=new Ho("app","Firebase",lx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=ox;function HE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Sh,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Tr.create("bad-app-name",{appName:String(s)});if(n||(n=UE()),!n)throw Tr.create("no-options");const i=Tc.get(s);if(i){if(wc(n,i.options)&&wc(r,i.config))return i;throw Tr.create("duplicate-app",{appName:s})}const o=new gO(s);for(const l of Ph.values())o.addComponent(l);const a=new ux(n,r,o);return Tc.set(s,a),a}function qE(t=Sh){const e=Tc.get(t);if(!e&&t===Sh&&UE())return HE();if(!e)throw Tr.create("no-app",{appName:t});return e}function br(t,e,n){var r;let s=(r=ax[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wn.warn(a.join(" "));return}ii(new cs(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hx="firebase-heartbeat-database",fx=1,bo="firebase-heartbeat-store";let _u=null;function zE(){return _u||(_u=CO(hx,fx,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(bo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Tr.create("idb-open",{originalErrorMessage:t.message})})),_u}async function dx(t){try{const n=(await zE()).transaction(bo),r=await n.objectStore(bo).get(WE(t));return await n.done,r}catch(e){if(e instanceof Zn)Wn.warn(e.message);else{const n=Tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wn.warn(n.message)}}}async function yg(t,e){try{const r=(await zE()).transaction(bo,"readwrite");await r.objectStore(bo).put(e,WE(t)),await r.done}catch(n){if(n instanceof Zn)Wn.warn(n.message);else{const r=Tr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Wn.warn(r.message)}}}function WE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const px=1024,mx=30*24*60*60*1e3;class gx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=vg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=mx}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Wn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=vg(),{heartbeatsToSend:r,unsentEntries:s}=_x(this._heartbeatsCache.heartbeats),i=Ec(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Wn.warn(n),""}}}function vg(){return new Date().toISOString().substring(0,10)}function _x(t,e=px){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Eg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Eg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class yx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sO()?iO().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await dx(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return yg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return yg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Eg(t){return Ec(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vx(t){ii(new cs("platform-logger",e=>new xO(e),"PRIVATE")),ii(new cs("heartbeat",e=>new gx(e),"PRIVATE")),br(Rh,gg,t),br(Rh,gg,"esm2017"),br("fire-js","")}vx("");var Ex="firebase",wx="11.0.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */br(Ex,wx,"app");var wg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var is,KE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,E){function v(){}v.prototype=E.prototype,b.D=E.prototype,b.prototype=new v,b.prototype.constructor=b,b.C=function(w,k,R){for(var T=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)T[_e-2]=arguments[_e];return E.prototype[k].apply(w,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,E,v){v||(v=0);var w=Array(16);if(typeof E=="string")for(var k=0;16>k;++k)w[k]=E.charCodeAt(v++)|E.charCodeAt(v++)<<8|E.charCodeAt(v++)<<16|E.charCodeAt(v++)<<24;else for(k=0;16>k;++k)w[k]=E[v++]|E[v++]<<8|E[v++]<<16|E[v++]<<24;E=b.g[0],v=b.g[1],k=b.g[2];var R=b.g[3],T=E+(R^v&(k^R))+w[0]+3614090360&4294967295;E=v+(T<<7&4294967295|T>>>25),T=R+(k^E&(v^k))+w[1]+3905402710&4294967295,R=E+(T<<12&4294967295|T>>>20),T=k+(v^R&(E^v))+w[2]+606105819&4294967295,k=R+(T<<17&4294967295|T>>>15),T=v+(E^k&(R^E))+w[3]+3250441966&4294967295,v=k+(T<<22&4294967295|T>>>10),T=E+(R^v&(k^R))+w[4]+4118548399&4294967295,E=v+(T<<7&4294967295|T>>>25),T=R+(k^E&(v^k))+w[5]+1200080426&4294967295,R=E+(T<<12&4294967295|T>>>20),T=k+(v^R&(E^v))+w[6]+2821735955&4294967295,k=R+(T<<17&4294967295|T>>>15),T=v+(E^k&(R^E))+w[7]+4249261313&4294967295,v=k+(T<<22&4294967295|T>>>10),T=E+(R^v&(k^R))+w[8]+1770035416&4294967295,E=v+(T<<7&4294967295|T>>>25),T=R+(k^E&(v^k))+w[9]+2336552879&4294967295,R=E+(T<<12&4294967295|T>>>20),T=k+(v^R&(E^v))+w[10]+4294925233&4294967295,k=R+(T<<17&4294967295|T>>>15),T=v+(E^k&(R^E))+w[11]+2304563134&4294967295,v=k+(T<<22&4294967295|T>>>10),T=E+(R^v&(k^R))+w[12]+1804603682&4294967295,E=v+(T<<7&4294967295|T>>>25),T=R+(k^E&(v^k))+w[13]+4254626195&4294967295,R=E+(T<<12&4294967295|T>>>20),T=k+(v^R&(E^v))+w[14]+2792965006&4294967295,k=R+(T<<17&4294967295|T>>>15),T=v+(E^k&(R^E))+w[15]+1236535329&4294967295,v=k+(T<<22&4294967295|T>>>10),T=E+(k^R&(v^k))+w[1]+4129170786&4294967295,E=v+(T<<5&4294967295|T>>>27),T=R+(v^k&(E^v))+w[6]+3225465664&4294967295,R=E+(T<<9&4294967295|T>>>23),T=k+(E^v&(R^E))+w[11]+643717713&4294967295,k=R+(T<<14&4294967295|T>>>18),T=v+(R^E&(k^R))+w[0]+3921069994&4294967295,v=k+(T<<20&4294967295|T>>>12),T=E+(k^R&(v^k))+w[5]+3593408605&4294967295,E=v+(T<<5&4294967295|T>>>27),T=R+(v^k&(E^v))+w[10]+38016083&4294967295,R=E+(T<<9&4294967295|T>>>23),T=k+(E^v&(R^E))+w[15]+3634488961&4294967295,k=R+(T<<14&4294967295|T>>>18),T=v+(R^E&(k^R))+w[4]+3889429448&4294967295,v=k+(T<<20&4294967295|T>>>12),T=E+(k^R&(v^k))+w[9]+568446438&4294967295,E=v+(T<<5&4294967295|T>>>27),T=R+(v^k&(E^v))+w[14]+3275163606&4294967295,R=E+(T<<9&4294967295|T>>>23),T=k+(E^v&(R^E))+w[3]+4107603335&4294967295,k=R+(T<<14&4294967295|T>>>18),T=v+(R^E&(k^R))+w[8]+1163531501&4294967295,v=k+(T<<20&4294967295|T>>>12),T=E+(k^R&(v^k))+w[13]+2850285829&4294967295,E=v+(T<<5&4294967295|T>>>27),T=R+(v^k&(E^v))+w[2]+4243563512&4294967295,R=E+(T<<9&4294967295|T>>>23),T=k+(E^v&(R^E))+w[7]+1735328473&4294967295,k=R+(T<<14&4294967295|T>>>18),T=v+(R^E&(k^R))+w[12]+2368359562&4294967295,v=k+(T<<20&4294967295|T>>>12),T=E+(v^k^R)+w[5]+4294588738&4294967295,E=v+(T<<4&4294967295|T>>>28),T=R+(E^v^k)+w[8]+2272392833&4294967295,R=E+(T<<11&4294967295|T>>>21),T=k+(R^E^v)+w[11]+1839030562&4294967295,k=R+(T<<16&4294967295|T>>>16),T=v+(k^R^E)+w[14]+4259657740&4294967295,v=k+(T<<23&4294967295|T>>>9),T=E+(v^k^R)+w[1]+2763975236&4294967295,E=v+(T<<4&4294967295|T>>>28),T=R+(E^v^k)+w[4]+1272893353&4294967295,R=E+(T<<11&4294967295|T>>>21),T=k+(R^E^v)+w[7]+4139469664&4294967295,k=R+(T<<16&4294967295|T>>>16),T=v+(k^R^E)+w[10]+3200236656&4294967295,v=k+(T<<23&4294967295|T>>>9),T=E+(v^k^R)+w[13]+681279174&4294967295,E=v+(T<<4&4294967295|T>>>28),T=R+(E^v^k)+w[0]+3936430074&4294967295,R=E+(T<<11&4294967295|T>>>21),T=k+(R^E^v)+w[3]+3572445317&4294967295,k=R+(T<<16&4294967295|T>>>16),T=v+(k^R^E)+w[6]+76029189&4294967295,v=k+(T<<23&4294967295|T>>>9),T=E+(v^k^R)+w[9]+3654602809&4294967295,E=v+(T<<4&4294967295|T>>>28),T=R+(E^v^k)+w[12]+3873151461&4294967295,R=E+(T<<11&4294967295|T>>>21),T=k+(R^E^v)+w[15]+530742520&4294967295,k=R+(T<<16&4294967295|T>>>16),T=v+(k^R^E)+w[2]+3299628645&4294967295,v=k+(T<<23&4294967295|T>>>9),T=E+(k^(v|~R))+w[0]+4096336452&4294967295,E=v+(T<<6&4294967295|T>>>26),T=R+(v^(E|~k))+w[7]+1126891415&4294967295,R=E+(T<<10&4294967295|T>>>22),T=k+(E^(R|~v))+w[14]+2878612391&4294967295,k=R+(T<<15&4294967295|T>>>17),T=v+(R^(k|~E))+w[5]+4237533241&4294967295,v=k+(T<<21&4294967295|T>>>11),T=E+(k^(v|~R))+w[12]+1700485571&4294967295,E=v+(T<<6&4294967295|T>>>26),T=R+(v^(E|~k))+w[3]+2399980690&4294967295,R=E+(T<<10&4294967295|T>>>22),T=k+(E^(R|~v))+w[10]+4293915773&4294967295,k=R+(T<<15&4294967295|T>>>17),T=v+(R^(k|~E))+w[1]+2240044497&4294967295,v=k+(T<<21&4294967295|T>>>11),T=E+(k^(v|~R))+w[8]+1873313359&4294967295,E=v+(T<<6&4294967295|T>>>26),T=R+(v^(E|~k))+w[15]+4264355552&4294967295,R=E+(T<<10&4294967295|T>>>22),T=k+(E^(R|~v))+w[6]+2734768916&4294967295,k=R+(T<<15&4294967295|T>>>17),T=v+(R^(k|~E))+w[13]+1309151649&4294967295,v=k+(T<<21&4294967295|T>>>11),T=E+(k^(v|~R))+w[4]+4149444226&4294967295,E=v+(T<<6&4294967295|T>>>26),T=R+(v^(E|~k))+w[11]+3174756917&4294967295,R=E+(T<<10&4294967295|T>>>22),T=k+(E^(R|~v))+w[2]+718787259&4294967295,k=R+(T<<15&4294967295|T>>>17),T=v+(R^(k|~E))+w[9]+3951481745&4294967295,b.g[0]=b.g[0]+E&4294967295,b.g[1]=b.g[1]+(k+(T<<21&4294967295|T>>>11))&4294967295,b.g[2]=b.g[2]+k&4294967295,b.g[3]=b.g[3]+R&4294967295}r.prototype.u=function(b,E){E===void 0&&(E=b.length);for(var v=E-this.blockSize,w=this.B,k=this.h,R=0;R<E;){if(k==0)for(;R<=v;)s(this,b,R),R+=this.blockSize;if(typeof b=="string"){for(;R<E;)if(w[k++]=b.charCodeAt(R++),k==this.blockSize){s(this,w),k=0;break}}else for(;R<E;)if(w[k++]=b[R++],k==this.blockSize){s(this,w),k=0;break}}this.h=k,this.o+=E},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var E=1;E<b.length-8;++E)b[E]=0;var v=8*this.o;for(E=b.length-8;E<b.length;++E)b[E]=v&255,v/=256;for(this.u(b),b=Array(16),E=v=0;4>E;++E)for(var w=0;32>w;w+=8)b[v++]=this.g[E]>>>w&255;return b};function i(b,E){var v=a;return Object.prototype.hasOwnProperty.call(v,b)?v[b]:v[b]=E(b)}function o(b,E){this.h=E;for(var v=[],w=!0,k=b.length-1;0<=k;k--){var R=b[k]|0;w&&R==E||(v[k]=R,w=!1)}this.g=v}var a={};function l(b){return-128<=b&&128>b?i(b,function(E){return new o([E|0],0>E?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return d;if(0>b)return N(u(-b));for(var E=[],v=1,w=0;b>=v;w++)E[w]=b/v|0,v*=4294967296;return new o(E,0)}function h(b,E){if(b.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(b.charAt(0)=="-")return N(h(b.substring(1),E));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(E,8)),w=d,k=0;k<b.length;k+=8){var R=Math.min(8,b.length-k),T=parseInt(b.substring(k,k+R),E);8>R?(R=u(Math.pow(E,R)),w=w.j(R).add(u(T))):(w=w.j(v),w=w.add(u(T)))}return w}var d=l(0),m=l(1),g=l(16777216);t=o.prototype,t.m=function(){if(O(this))return-N(this).m();for(var b=0,E=1,v=0;v<this.g.length;v++){var w=this.i(v);b+=(0<=w?w:4294967296+w)*E,E*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(A(this))return"0";if(O(this))return"-"+N(this).toString(b);for(var E=u(Math.pow(b,6)),v=this,w="";;){var k=S(v,E).g;v=x(v,k.j(E));var R=((0<v.g.length?v.g[0]:v.h)>>>0).toString(b);if(v=k,A(v))return R+w;for(;6>R.length;)R="0"+R;w=R+w}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function A(b){if(b.h!=0)return!1;for(var E=0;E<b.g.length;E++)if(b.g[E]!=0)return!1;return!0}function O(b){return b.h==-1}t.l=function(b){return b=x(this,b),O(b)?-1:A(b)?0:1};function N(b){for(var E=b.g.length,v=[],w=0;w<E;w++)v[w]=~b.g[w];return new o(v,~b.h).add(m)}t.abs=function(){return O(this)?N(this):this},t.add=function(b){for(var E=Math.max(this.g.length,b.g.length),v=[],w=0,k=0;k<=E;k++){var R=w+(this.i(k)&65535)+(b.i(k)&65535),T=(R>>>16)+(this.i(k)>>>16)+(b.i(k)>>>16);w=T>>>16,R&=65535,T&=65535,v[k]=T<<16|R}return new o(v,v[v.length-1]&-2147483648?-1:0)};function x(b,E){return b.add(N(E))}t.j=function(b){if(A(this)||A(b))return d;if(O(this))return O(b)?N(this).j(N(b)):N(N(this).j(b));if(O(b))return N(this.j(N(b)));if(0>this.l(g)&&0>b.l(g))return u(this.m()*b.m());for(var E=this.g.length+b.g.length,v=[],w=0;w<2*E;w++)v[w]=0;for(w=0;w<this.g.length;w++)for(var k=0;k<b.g.length;k++){var R=this.i(w)>>>16,T=this.i(w)&65535,_e=b.i(k)>>>16,ve=b.i(k)&65535;v[2*w+2*k]+=T*ve,P(v,2*w+2*k),v[2*w+2*k+1]+=R*ve,P(v,2*w+2*k+1),v[2*w+2*k+1]+=T*_e,P(v,2*w+2*k+1),v[2*w+2*k+2]+=R*_e,P(v,2*w+2*k+2)}for(w=0;w<E;w++)v[w]=v[2*w+1]<<16|v[2*w];for(w=E;w<2*E;w++)v[w]=0;return new o(v,0)};function P(b,E){for(;(b[E]&65535)!=b[E];)b[E+1]+=b[E]>>>16,b[E]&=65535,E++}function y(b,E){this.g=b,this.h=E}function S(b,E){if(A(E))throw Error("division by zero");if(A(b))return new y(d,d);if(O(b))return E=S(N(b),E),new y(N(E.g),N(E.h));if(O(E))return E=S(b,N(E)),new y(N(E.g),E.h);if(30<b.g.length){if(O(b)||O(E))throw Error("slowDivide_ only works with positive integers.");for(var v=m,w=E;0>=w.l(b);)v=D(v),w=D(w);var k=V(v,1),R=V(w,1);for(w=V(w,2),v=V(v,2);!A(w);){var T=R.add(w);0>=T.l(b)&&(k=k.add(v),R=T),w=V(w,1),v=V(v,1)}return E=x(b,k.j(E)),new y(k,E)}for(k=d;0<=b.l(E);){for(v=Math.max(1,Math.floor(b.m()/E.m())),w=Math.ceil(Math.log(v)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),R=u(v),T=R.j(E);O(T)||0<T.l(b);)v-=w,R=u(v),T=R.j(E);A(R)&&(R=m),k=k.add(R),b=x(b,T)}return new y(k,b)}t.A=function(b){return S(this,b).h},t.and=function(b){for(var E=Math.max(this.g.length,b.g.length),v=[],w=0;w<E;w++)v[w]=this.i(w)&b.i(w);return new o(v,this.h&b.h)},t.or=function(b){for(var E=Math.max(this.g.length,b.g.length),v=[],w=0;w<E;w++)v[w]=this.i(w)|b.i(w);return new o(v,this.h|b.h)},t.xor=function(b){for(var E=Math.max(this.g.length,b.g.length),v=[],w=0;w<E;w++)v[w]=this.i(w)^b.i(w);return new o(v,this.h^b.h)};function D(b){for(var E=b.g.length+1,v=[],w=0;w<E;w++)v[w]=b.i(w)<<1|b.i(w-1)>>>31;return new o(v,b.h)}function V(b,E){var v=E>>5;E%=32;for(var w=b.g.length-v,k=[],R=0;R<w;R++)k[R]=0<E?b.i(R+v)>>>E|b.i(R+v+1)<<32-E:b.i(R+v);return new o(k,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,KE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,is=o}).apply(typeof wg<"u"?wg:typeof self<"u"?self:typeof window<"u"?window:{});var Pa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var GE,zi,QE,$a,Ch,YE,XE,JE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,f,p){return c==Array.prototype||c==Object.prototype||(c[f]=p.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Pa=="object"&&Pa];for(var f=0;f<c.length;++f){var p=c[f];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(c,f){if(f)e:{var p=r;c=c.split(".");for(var _=0;_<c.length-1;_++){var L=c[_];if(!(L in p))break e;p=p[L]}c=c[c.length-1],_=p[c],f=f(_),f!=_&&f!=null&&e(p,c,{configurable:!0,writable:!0,value:f})}}function i(c,f){c instanceof String&&(c+="");var p=0,_=!1,L={next:function(){if(!_&&p<c.length){var F=p++;return{value:f(F,c[F]),done:!1}}return _=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}s("Array.prototype.values",function(c){return c||function(){return i(this,function(f,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(c){var f=typeof c;return f=f!="object"?f:c?Array.isArray(c)?"array":f:"null",f=="array"||f=="object"&&typeof c.length=="number"}function u(c){var f=typeof c;return f=="object"&&c!=null||f=="function"}function h(c,f,p){return c.call.apply(c.bind,arguments)}function d(c,f,p){if(!c)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,_),c.apply(f,L)}}return function(){return c.apply(f,arguments)}}function m(c,f,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,m.apply(null,arguments)}function g(c,f){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),c.apply(this,_)}}function A(c,f){function p(){}p.prototype=f.prototype,c.aa=f.prototype,c.prototype=new p,c.prototype.constructor=c,c.Qb=function(_,L,F){for(var Q=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)Q[Ne-2]=arguments[Ne];return f.prototype[L].apply(_,Q)}}function O(c){const f=c.length;if(0<f){const p=Array(f);for(let _=0;_<f;_++)p[_]=c[_];return p}return[]}function N(c,f){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(l(_)){const L=c.length||0,F=_.length||0;c.length=L+F;for(let Q=0;Q<F;Q++)c[L+Q]=_[Q]}else c.push(_)}}class x{constructor(f,p){this.i=f,this.j=p,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function P(c){return/^[\s\xa0]*$/.test(c)}function y(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function S(c){return S[" "](c),c}S[" "]=function(){};var D=y().indexOf("Gecko")!=-1&&!(y().toLowerCase().indexOf("webkit")!=-1&&y().indexOf("Edge")==-1)&&!(y().indexOf("Trident")!=-1||y().indexOf("MSIE")!=-1)&&y().indexOf("Edge")==-1;function V(c,f,p){for(const _ in c)f.call(p,c[_],_,c)}function b(c,f){for(const p in c)f.call(void 0,c[p],p,c)}function E(c){const f={};for(const p in c)f[p]=c[p];return f}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(c,f){let p,_;for(let L=1;L<arguments.length;L++){_=arguments[L];for(p in _)c[p]=_[p];for(let F=0;F<v.length;F++)p=v[F],Object.prototype.hasOwnProperty.call(_,p)&&(c[p]=_[p])}}function k(c){var f=1;c=c.split(":");const p=[];for(;0<f&&c.length;)p.push(c.shift()),f--;return c.length&&p.push(c.join(":")),p}function R(c){a.setTimeout(()=>{throw c},0)}function T(){var c=ze;let f=null;return c.g&&(f=c.g,c.g=c.g.next,c.g||(c.h=null),f.next=null),f}class _e{constructor(){this.h=this.g=null}add(f,p){const _=ve.get();_.set(f,p),this.h?this.h.next=_:this.g=_,this.h=_}}var ve=new x(()=>new re,c=>c.reset());class re{constructor(){this.next=this.g=this.h=null}set(f,p){this.h=f,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let fe,ne=!1,ze=new _e,nn=()=>{const c=a.Promise.resolve(void 0);fe=()=>{c.then(Gt)}};var Gt=()=>{for(var c;c=T();){try{c.h.call(c.g)}catch(p){R(p)}var f=ve;f.j(c),100>f.h&&(f.h++,c.next=f.g,f.g=c)}ne=!1};function We(){this.s=this.s,this.C=this.C}We.prototype.s=!1,We.prototype.ma=function(){this.s||(this.s=!0,this.N())},We.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ke(c,f){this.type=c,this.g=this.target=f,this.defaultPrevented=!1}Ke.prototype.h=function(){this.defaultPrevented=!0};var tr=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,f=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const p=()=>{};a.addEventListener("test",p,f),a.removeEventListener("test",p,f)}catch{}return c}();function dn(c,f){if(Ke.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var p=this.type=c.type,_=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=f,f=c.relatedTarget){if(D){e:{try{S(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else p=="mouseover"?f=c.fromElement:p=="mouseout"&&(f=c.toElement);this.relatedTarget=f,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Nt[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&dn.aa.h.call(this)}}A(dn,Ke);var Nt={2:"touch",3:"pen",4:"mouse"};dn.prototype.h=function(){dn.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var j="closure_listenable_"+(1e6*Math.random()|0),Z=0;function X(c,f,p,_,L){this.listener=c,this.proxy=null,this.src=f,this.type=p,this.capture=!!_,this.ha=L,this.key=++Z,this.da=this.fa=!1}function se(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Te(c){this.src=c,this.g={},this.h=0}Te.prototype.add=function(c,f,p,_,L){var F=c.toString();c=this.g[F],c||(c=this.g[F]=[],this.h++);var Q=I(c,f,_,L);return-1<Q?(f=c[Q],p||(f.fa=!1)):(f=new X(f,this.src,F,!!_,L),f.fa=p,c.push(f)),f};function xe(c,f){var p=f.type;if(p in c.g){var _=c.g[p],L=Array.prototype.indexOf.call(_,f,void 0),F;(F=0<=L)&&Array.prototype.splice.call(_,L,1),F&&(se(f),c.g[p].length==0&&(delete c.g[p],c.h--))}}function I(c,f,p,_){for(var L=0;L<c.length;++L){var F=c[L];if(!F.da&&F.listener==f&&F.capture==!!p&&F.ha==_)return L}return-1}var C="closure_lm_"+(1e6*Math.random()|0),M={};function H(c,f,p,_,L){if(Array.isArray(f)){for(var F=0;F<f.length;F++)H(c,f[F],p,_,L);return null}return p=oe(p),c&&c[j]?c.K(f,p,u(_)?!!_.capture:!!_,L):U(c,f,p,!1,_,L)}function U(c,f,p,_,L,F){if(!f)throw Error("Invalid event type");var Q=u(L)?!!L.capture:!!L,Ne=le(c);if(Ne||(c[C]=Ne=new Te(c)),p=Ne.add(f,p,_,Q,F),p.proxy)return p;if(_=q(),p.proxy=_,_.src=c,_.listener=p,c.addEventListener)tr||(L=Q),L===void 0&&(L=!1),c.addEventListener(f.toString(),_,L);else if(c.attachEvent)c.attachEvent(K(f.toString()),_);else if(c.addListener&&c.removeListener)c.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function q(){function c(p){return f.call(c.src,c.listener,p)}const f=z;return c}function Y(c,f,p,_,L){if(Array.isArray(f))for(var F=0;F<f.length;F++)Y(c,f[F],p,_,L);else _=u(_)?!!_.capture:!!_,p=oe(p),c&&c[j]?(c=c.i,f=String(f).toString(),f in c.g&&(F=c.g[f],p=I(F,p,_,L),-1<p&&(se(F[p]),Array.prototype.splice.call(F,p,1),F.length==0&&(delete c.g[f],c.h--)))):c&&(c=le(c))&&(f=c.g[f.toString()],c=-1,f&&(c=I(f,p,_,L)),(p=-1<c?f[c]:null)&&G(p))}function G(c){if(typeof c!="number"&&c&&!c.da){var f=c.src;if(f&&f[j])xe(f.i,c);else{var p=c.type,_=c.proxy;f.removeEventListener?f.removeEventListener(p,_,c.capture):f.detachEvent?f.detachEvent(K(p),_):f.addListener&&f.removeListener&&f.removeListener(_),(p=le(f))?(xe(p,c),p.h==0&&(p.src=null,f[C]=null)):se(c)}}}function K(c){return c in M?M[c]:M[c]="on"+c}function z(c,f){if(c.da)c=!0;else{f=new dn(f,this);var p=c.listener,_=c.ha||c.src;c.fa&&G(c),c=p.call(_,f)}return c}function le(c){return c=c[C],c instanceof Te?c:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function oe(c){return typeof c=="function"?c:(c[J]||(c[J]=function(f){return c.handleEvent(f)}),c[J])}function ie(){We.call(this),this.i=new Te(this),this.M=this,this.F=null}A(ie,We),ie.prototype[j]=!0,ie.prototype.removeEventListener=function(c,f,p,_){Y(this,c,f,p,_)};function ue(c,f){var p,_=c.F;if(_)for(p=[];_;_=_.F)p.push(_);if(c=c.M,_=f.type||f,typeof f=="string")f=new Ke(f,c);else if(f instanceof Ke)f.target=f.target||c;else{var L=f;f=new Ke(_,c),w(f,L)}if(L=!0,p)for(var F=p.length-1;0<=F;F--){var Q=f.g=p[F];L=Pe(Q,_,!0,f)&&L}if(Q=f.g=c,L=Pe(Q,_,!0,f)&&L,L=Pe(Q,_,!1,f)&&L,p)for(F=0;F<p.length;F++)Q=f.g=p[F],L=Pe(Q,_,!1,f)&&L}ie.prototype.N=function(){if(ie.aa.N.call(this),this.i){var c=this.i,f;for(f in c.g){for(var p=c.g[f],_=0;_<p.length;_++)se(p[_]);delete c.g[f],c.h--}}this.F=null},ie.prototype.K=function(c,f,p,_){return this.i.add(String(c),f,!1,p,_)},ie.prototype.L=function(c,f,p,_){return this.i.add(String(c),f,!0,p,_)};function Pe(c,f,p,_){if(f=c.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,F=0;F<f.length;++F){var Q=f[F];if(Q&&!Q.da&&Q.capture==p){var Ne=Q.listener,ct=Q.ha||Q.src;Q.fa&&xe(c.i,Q),L=Ne.call(ct,_)!==!1&&L}}return L&&!_.defaultPrevented}function Ae(c,f,p){if(typeof c=="function")p&&(c=m(c,p));else if(c&&typeof c.handleEvent=="function")c=m(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(c,f||0)}function dt(c){c.g=Ae(()=>{c.g=null,c.i&&(c.i=!1,dt(c))},c.l);const f=c.h;c.h=null,c.m.apply(null,f)}class st extends We{constructor(f,p){super(),this.m=f,this.l=p,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:dt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function at(c){We.call(this),this.h=c,this.g={}}A(at,We);var pt=[];function nr(c){V(c.g,function(f,p){this.g.hasOwnProperty(p)&&G(f)},c),c.g={}}at.prototype.N=function(){at.aa.N.call(this),nr(this)},at.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Es=a.JSON.stringify,At=a.JSON.parse,Qt=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function ws(){}ws.prototype.h=null;function Td(c){return c.h||(c.h=c.i())}function bd(){}var Ii={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Il(){Ke.call(this,"d")}A(Il,Ke);function Al(){Ke.call(this,"c")}A(Al,Ke);var jr={},Id=null;function ea(){return Id=Id||new ie}jr.La="serverreachability";function Ad(c){Ke.call(this,jr.La,c)}A(Ad,Ke);function Ai(c){const f=ea();ue(f,new Ad(f))}jr.STAT_EVENT="statevent";function Rd(c,f){Ke.call(this,jr.STAT_EVENT,c),this.stat=f}A(Rd,Ke);function Rt(c){const f=ea();ue(f,new Rd(f,c))}jr.Ma="timingevent";function Sd(c,f){Ke.call(this,jr.Ma,c),this.size=f}A(Sd,Ke);function Ri(c,f){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},f)}function Si(){this.g=!0}Si.prototype.xa=function(){this.g=!1};function tT(c,f,p,_,L,F){c.info(function(){if(c.g)if(F)for(var Q="",Ne=F.split("&"),ct=0;ct<Ne.length;ct++){var Re=Ne[ct].split("=");if(1<Re.length){var mt=Re[0];Re=Re[1];var gt=mt.split("_");Q=2<=gt.length&&gt[1]=="type"?Q+(mt+"="+Re+"&"):Q+(mt+"=redacted&")}}else Q=null;else Q=F;return"XMLHTTP REQ ("+_+") [attempt "+L+"]: "+f+`
`+p+`
`+Q})}function nT(c,f,p,_,L,F,Q){c.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+L+"]: "+f+`
`+p+`
`+F+" "+Q})}function Ts(c,f,p,_){c.info(function(){return"XMLHTTP TEXT ("+f+"): "+sT(c,p)+(_?" "+_:"")})}function rT(c,f){c.info(function(){return"TIMEOUT: "+f})}Si.prototype.info=function(){};function sT(c,f){if(!c.g)return f;if(!f)return null;try{var p=JSON.parse(f);if(p){for(c=0;c<p.length;c++)if(Array.isArray(p[c])){var _=p[c];if(!(2>_.length)){var L=_[1];if(Array.isArray(L)&&!(1>L.length)){var F=L[0];if(F!="noop"&&F!="stop"&&F!="close")for(var Q=1;Q<L.length;Q++)L[Q]=""}}}}return Es(p)}catch{return f}}var ta={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Pd={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Rl;function na(){}A(na,ws),na.prototype.g=function(){return new XMLHttpRequest},na.prototype.i=function(){return{}},Rl=new na;function rr(c,f,p,_){this.j=c,this.i=f,this.l=p,this.R=_||1,this.U=new at(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Cd}function Cd(){this.i=null,this.g="",this.h=!1}var kd={},Sl={};function Pl(c,f,p){c.L=1,c.v=oa(Rn(f)),c.m=p,c.P=!0,Od(c,null)}function Od(c,f){c.F=Date.now(),ra(c),c.A=Rn(c.v);var p=c.A,_=c.R;Array.isArray(_)||(_=[String(_)]),zd(p.i,"t",_),c.C=0,p=c.j.J,c.h=new Cd,c.g=lp(c.j,p?f:null,!c.m),0<c.O&&(c.M=new st(m(c.Y,c,c.g),c.O)),f=c.U,p=c.g,_=c.ca;var L="readystatechange";Array.isArray(L)||(L&&(pt[0]=L.toString()),L=pt);for(var F=0;F<L.length;F++){var Q=H(p,L[F],_||f.handleEvent,!1,f.h||f);if(!Q)break;f.g[Q.key]=Q}f=c.H?E(c.H):{},c.m?(c.u||(c.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,f)):(c.u="GET",c.g.ea(c.A,c.u,null,f)),Ai(),tT(c.i,c.u,c.A,c.l,c.R,c.m)}rr.prototype.ca=function(c){c=c.target;const f=this.M;f&&Sn(c)==3?f.j():this.Y(c)},rr.prototype.Y=function(c){try{if(c==this.g)e:{const gt=Sn(this.g);var f=this.g.Ba();const As=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||Jd(this.g)))){this.J||gt!=4||f==7||(f==8||0>=As?Ai(3):Ai(2)),Cl(this);var p=this.g.Z();this.X=p;t:if(xd(this)){var _=Jd(this.g);c="";var L=_.length,F=Sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Br(this),Pi(this);var Q="";break t}this.h.i=new a.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,c+=this.h.i.decode(_[f],{stream:!(F&&f==L-1)});_.length=0,this.h.g+=c,this.C=0,Q=this.h.g}else Q=this.g.oa();if(this.o=p==200,nT(this.i,this.u,this.A,this.l,this.R,gt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Ne,ct=this.g;if((Ne=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!P(Ne)){var Re=Ne;break t}}Re=null}if(p=Re)Ts(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,kl(this,p);else{this.o=!1,this.s=3,Rt(12),Br(this),Pi(this);break e}}if(this.P){p=!0;let rn;for(;!this.J&&this.C<Q.length;)if(rn=iT(this,Q),rn==Sl){gt==4&&(this.s=4,Rt(14),p=!1),Ts(this.i,this.l,null,"[Incomplete Response]");break}else if(rn==kd){this.s=4,Rt(15),Ts(this.i,this.l,Q,"[Invalid Chunk]"),p=!1;break}else Ts(this.i,this.l,rn,null),kl(this,rn);if(xd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||Q.length!=0||this.h.h||(this.s=1,Rt(16),p=!1),this.o=this.o&&p,!p)Ts(this.i,this.l,Q,"[Invalid Chunked Response]"),Br(this),Pi(this);else if(0<Q.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+Q.length),Ml(mt),mt.M=!0,Rt(11))}}else Ts(this.i,this.l,Q,null),kl(this,Q);gt==4&&Br(this),this.o&&!this.J&&(gt==4?ip(this.j,this):(this.o=!1,ra(this)))}else TT(this.g),p==400&&0<Q.indexOf("Unknown SID")?(this.s=3,Rt(12)):(this.s=0,Rt(13)),Br(this),Pi(this)}}}catch{}finally{}};function xd(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function iT(c,f){var p=c.C,_=f.indexOf(`
`,p);return _==-1?Sl:(p=Number(f.substring(p,_)),isNaN(p)?kd:(_+=1,_+p>f.length?Sl:(f=f.slice(_,_+p),c.C=_+p,f)))}rr.prototype.cancel=function(){this.J=!0,Br(this)};function ra(c){c.S=Date.now()+c.I,Nd(c,c.I)}function Nd(c,f){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Ri(m(c.ba,c),f)}function Cl(c){c.B&&(a.clearTimeout(c.B),c.B=null)}rr.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(rT(this.i,this.A),this.L!=2&&(Ai(),Rt(17)),Br(this),this.s=2,Pi(this)):Nd(this,this.S-c)};function Pi(c){c.j.G==0||c.J||ip(c.j,c)}function Br(c){Cl(c);var f=c.M;f&&typeof f.ma=="function"&&f.ma(),c.M=null,nr(c.U),c.g&&(f=c.g,c.g=null,f.abort(),f.ma())}function kl(c,f){try{var p=c.j;if(p.G!=0&&(p.g==c||Ol(p.h,c))){if(!c.K&&Ol(p.h,c)&&p.G==3){try{var _=p.Da.g.parse(f)}catch{_=null}if(Array.isArray(_)&&_.length==3){var L=_;if(L[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<c.F)fa(p),ua(p);else break e;Ll(p),Rt(18)}}else p.za=L[1],0<p.za-p.T&&37500>L[2]&&p.F&&p.v==0&&!p.C&&(p.C=Ri(m(p.Za,p),6e3));if(1>=Md(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Hr(p,11)}else if((c.K||p.g==c)&&fa(p),!P(f))for(L=p.Da.g.parse(f),f=0;f<L.length;f++){let Re=L[f];if(p.T=Re[0],Re=Re[1],p.G==2)if(Re[0]=="c"){p.K=Re[1],p.ia=Re[2];const mt=Re[3];mt!=null&&(p.la=mt,p.j.info("VER="+p.la));const gt=Re[4];gt!=null&&(p.Aa=gt,p.j.info("SVER="+p.Aa));const As=Re[5];As!=null&&typeof As=="number"&&0<As&&(_=1.5*As,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const rn=c.g;if(rn){const pa=rn.g?rn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(pa){var F=_.h;F.g||pa.indexOf("spdy")==-1&&pa.indexOf("quic")==-1&&pa.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(xl(F,F.h),F.h=null))}if(_.D){const Vl=rn.g?rn.g.getResponseHeader("X-HTTP-Session-Id"):null;Vl&&(_.ya=Vl,Ve(_.I,_.D,Vl))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-c.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var Q=c;if(_.qa=cp(_,_.J?_.ia:null,_.W),Q.K){Vd(_.h,Q);var Ne=Q,ct=_.L;ct&&(Ne.I=ct),Ne.B&&(Cl(Ne),ra(Ne)),_.g=Q}else rp(_);0<p.i.length&&ha(p)}else Re[0]!="stop"&&Re[0]!="close"||Hr(p,7);else p.G==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?Hr(p,7):Dl(p):Re[0]!="noop"&&p.l&&p.l.ta(Re),p.v=0)}}Ai(4)}catch{}}var oT=class{constructor(c,f){this.g=c,this.map=f}};function Dd(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ld(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Md(c){return c.h?1:c.g?c.g.size:0}function Ol(c,f){return c.h?c.h==f:c.g?c.g.has(f):!1}function xl(c,f){c.g?c.g.add(f):c.h=f}function Vd(c,f){c.h&&c.h==f?c.h=null:c.g&&c.g.has(f)&&c.g.delete(f)}Dd.prototype.cancel=function(){if(this.i=Fd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Fd(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let f=c.i;for(const p of c.g.values())f=f.concat(p.D);return f}return O(c.i)}function aT(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var f=[],p=c.length,_=0;_<p;_++)f.push(c[_]);return f}f=[],p=0;for(_ in c)f[p++]=c[_];return f}function cT(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var f=[];c=c.length;for(var p=0;p<c;p++)f.push(p);return f}f=[],p=0;for(const _ in c)f[p++]=_;return f}}}function Ud(c,f){if(c.forEach&&typeof c.forEach=="function")c.forEach(f,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,f,void 0);else for(var p=cT(c),_=aT(c),L=_.length,F=0;F<L;F++)f.call(void 0,_[F],p&&p[F],c)}var jd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lT(c,f){if(c){c=c.split("&");for(var p=0;p<c.length;p++){var _=c[p].indexOf("="),L=null;if(0<=_){var F=c[p].substring(0,_);L=c[p].substring(_+1)}else F=c[p];f(F,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function $r(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof $r){this.h=c.h,sa(this,c.j),this.o=c.o,this.g=c.g,ia(this,c.s),this.l=c.l;var f=c.i,p=new Oi;p.i=f.i,f.g&&(p.g=new Map(f.g),p.h=f.h),Bd(this,p),this.m=c.m}else c&&(f=String(c).match(jd))?(this.h=!1,sa(this,f[1]||"",!0),this.o=Ci(f[2]||""),this.g=Ci(f[3]||"",!0),ia(this,f[4]),this.l=Ci(f[5]||"",!0),Bd(this,f[6]||"",!0),this.m=Ci(f[7]||"")):(this.h=!1,this.i=new Oi(null,this.h))}$r.prototype.toString=function(){var c=[],f=this.j;f&&c.push(ki(f,$d,!0),":");var p=this.g;return(p||f=="file")&&(c.push("//"),(f=this.o)&&c.push(ki(f,$d,!0),"@"),c.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&c.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&c.push("/"),c.push(ki(p,p.charAt(0)=="/"?fT:hT,!0))),(p=this.i.toString())&&c.push("?",p),(p=this.m)&&c.push("#",ki(p,pT)),c.join("")};function Rn(c){return new $r(c)}function sa(c,f,p){c.j=p?Ci(f,!0):f,c.j&&(c.j=c.j.replace(/:$/,""))}function ia(c,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);c.s=f}else c.s=null}function Bd(c,f,p){f instanceof Oi?(c.i=f,mT(c.i,c.h)):(p||(f=ki(f,dT)),c.i=new Oi(f,c.h))}function Ve(c,f,p){c.i.set(f,p)}function oa(c){return Ve(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Ci(c,f){return c?f?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function ki(c,f,p){return typeof c=="string"?(c=encodeURI(c).replace(f,uT),p&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function uT(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var $d=/[#\/\?@]/g,hT=/[#\?:]/g,fT=/[#\?]/g,dT=/[#\?@]/g,pT=/#/g;function Oi(c,f){this.h=this.g=null,this.i=c||null,this.j=!!f}function sr(c){c.g||(c.g=new Map,c.h=0,c.i&&lT(c.i,function(f,p){c.add(decodeURIComponent(f.replace(/\+/g," ")),p)}))}t=Oi.prototype,t.add=function(c,f){sr(this),this.i=null,c=bs(this,c);var p=this.g.get(c);return p||this.g.set(c,p=[]),p.push(f),this.h+=1,this};function Hd(c,f){sr(c),f=bs(c,f),c.g.has(f)&&(c.i=null,c.h-=c.g.get(f).length,c.g.delete(f))}function qd(c,f){return sr(c),f=bs(c,f),c.g.has(f)}t.forEach=function(c,f){sr(this),this.g.forEach(function(p,_){p.forEach(function(L){c.call(f,L,_,this)},this)},this)},t.na=function(){sr(this);const c=Array.from(this.g.values()),f=Array.from(this.g.keys()),p=[];for(let _=0;_<f.length;_++){const L=c[_];for(let F=0;F<L.length;F++)p.push(f[_])}return p},t.V=function(c){sr(this);let f=[];if(typeof c=="string")qd(this,c)&&(f=f.concat(this.g.get(bs(this,c))));else{c=Array.from(this.g.values());for(let p=0;p<c.length;p++)f=f.concat(c[p])}return f},t.set=function(c,f){return sr(this),this.i=null,c=bs(this,c),qd(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[f]),this.h+=1,this},t.get=function(c,f){return c?(c=this.V(c),0<c.length?String(c[0]):f):f};function zd(c,f,p){Hd(c,f),0<p.length&&(c.i=null,c.g.set(bs(c,f),O(p)),c.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],f=Array.from(this.g.keys());for(var p=0;p<f.length;p++){var _=f[p];const F=encodeURIComponent(String(_)),Q=this.V(_);for(_=0;_<Q.length;_++){var L=F;Q[_]!==""&&(L+="="+encodeURIComponent(String(Q[_]))),c.push(L)}}return this.i=c.join("&")};function bs(c,f){return f=String(f),c.j&&(f=f.toLowerCase()),f}function mT(c,f){f&&!c.j&&(sr(c),c.i=null,c.g.forEach(function(p,_){var L=_.toLowerCase();_!=L&&(Hd(this,_),zd(this,L,p))},c)),c.j=f}function gT(c,f){const p=new Si;if(a.Image){const _=new Image;_.onload=g(ir,p,"TestLoadImage: loaded",!0,f,_),_.onerror=g(ir,p,"TestLoadImage: error",!1,f,_),_.onabort=g(ir,p,"TestLoadImage: abort",!1,f,_),_.ontimeout=g(ir,p,"TestLoadImage: timeout",!1,f,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=c}else f(!1)}function _T(c,f){const p=new Si,_=new AbortController,L=setTimeout(()=>{_.abort(),ir(p,"TestPingServer: timeout",!1,f)},1e4);fetch(c,{signal:_.signal}).then(F=>{clearTimeout(L),F.ok?ir(p,"TestPingServer: ok",!0,f):ir(p,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),ir(p,"TestPingServer: error",!1,f)})}function ir(c,f,p,_,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),_(p)}catch{}}function yT(){this.g=new Qt}function vT(c,f,p){const _=p||"";try{Ud(c,function(L,F){let Q=L;u(L)&&(Q=Es(L)),f.push(_+F+"="+encodeURIComponent(Q))})}catch(L){throw f.push(_+"type="+encodeURIComponent("_badmap")),L}}function aa(c){this.l=c.Ub||null,this.j=c.eb||!1}A(aa,ws),aa.prototype.g=function(){return new ca(this.l,this.j)},aa.prototype.i=function(c){return function(){return c}}({});function ca(c,f){ie.call(this),this.D=c,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(ca,ie),t=ca.prototype,t.open=function(c,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=f,this.readyState=1,Ni(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(f.body=c),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xi(this)),this.readyState=0},t.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Ni(this)),this.g&&(this.readyState=3,Ni(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Wd(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Wd(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}t.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var f=c.value?c.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!c.done}))&&(this.response=this.responseText+=f)}c.done?xi(this):Ni(this),this.readyState==3&&Wd(this)}},t.Ra=function(c){this.g&&(this.response=this.responseText=c,xi(this))},t.Qa=function(c){this.g&&(this.response=c,xi(this))},t.ga=function(){this.g&&xi(this)};function xi(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Ni(c)}t.setRequestHeader=function(c,f){this.u.append(c,f)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],f=this.h.entries();for(var p=f.next();!p.done;)p=p.value,c.push(p[0]+": "+p[1]),p=f.next();return c.join(`\r
`)};function Ni(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(ca.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Kd(c){let f="";return V(c,function(p,_){f+=_,f+=":",f+=p,f+=`\r
`}),f}function Nl(c,f,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=Kd(p),typeof c=="string"?p!=null&&encodeURIComponent(String(p)):Ve(c,f,p))}function Qe(c){ie.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Qe,ie);var ET=/^https?$/i,wT=["POST","PUT"];t=Qe.prototype,t.Ha=function(c){this.J=c},t.ea=function(c,f,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);f=f?f.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Rl.g(),this.v=this.o?Td(this.o):Td(Rl),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(f,String(c),!0),this.B=!1}catch(F){Gd(this,F);return}if(c=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var L in _)p.set(L,_[L]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const F of _.keys())p.set(F,_.get(F));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(F=>F.toLowerCase()=="content-type"),L=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(wT,f,void 0))||_||L||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,Q]of p)this.g.setRequestHeader(F,Q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Xd(this),this.u=!0,this.g.send(c),this.u=!1}catch(F){Gd(this,F)}};function Gd(c,f){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=f,c.m=5,Qd(c),la(c)}function Qd(c){c.A||(c.A=!0,ue(c,"complete"),ue(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,ue(this,"complete"),ue(this,"abort"),la(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),la(this,!0)),Qe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Yd(this):this.bb())},t.bb=function(){Yd(this)};function Yd(c){if(c.h&&typeof o<"u"&&(!c.v[1]||Sn(c)!=4||c.Z()!=2)){if(c.u&&Sn(c)==4)Ae(c.Ea,0,c);else if(ue(c,"readystatechange"),Sn(c)==4){c.h=!1;try{const Q=c.Z();e:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var p;if(!(p=f)){var _;if(_=Q===0){var L=String(c.D).match(jd)[1]||null;!L&&a.self&&a.self.location&&(L=a.self.location.protocol.slice(0,-1)),_=!ET.test(L?L.toLowerCase():"")}p=_}if(p)ue(c,"complete"),ue(c,"success");else{c.m=6;try{var F=2<Sn(c)?c.g.statusText:""}catch{F=""}c.l=F+" ["+c.Z()+"]",Qd(c)}}finally{la(c)}}}}function la(c,f){if(c.g){Xd(c);const p=c.g,_=c.v[0]?()=>{}:null;c.g=null,c.v=null,f||ue(c,"ready");try{p.onreadystatechange=_}catch{}}}function Xd(c){c.I&&(a.clearTimeout(c.I),c.I=null)}t.isActive=function(){return!!this.g};function Sn(c){return c.g?c.g.readyState:0}t.Z=function(){try{return 2<Sn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(c){if(this.g){var f=this.g.responseText;return c&&f.indexOf(c)==0&&(f=f.substring(c.length)),At(f)}};function Jd(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function TT(c){const f={};c=(c.g&&2<=Sn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<c.length;_++){if(P(c[_]))continue;var p=k(c[_]);const L=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const F=f[L]||[];f[L]=F,F.push(p)}b(f,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Di(c,f,p){return p&&p.internalChannelParams&&p.internalChannelParams[c]||f}function Zd(c){this.Aa=0,this.i=[],this.j=new Si,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Di("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Di("baseRetryDelayMs",5e3,c),this.cb=Di("retryDelaySeedMs",1e4,c),this.Wa=Di("forwardChannelMaxRetries",2,c),this.wa=Di("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Dd(c&&c.concurrentRequestLimit),this.Da=new yT,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Zd.prototype,t.la=8,t.G=1,t.connect=function(c,f,p,_){Rt(0),this.W=c,this.H=f||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=cp(this,null,this.W),ha(this)};function Dl(c){if(ep(c),c.G==3){var f=c.U++,p=Rn(c.I);if(Ve(p,"SID",c.K),Ve(p,"RID",f),Ve(p,"TYPE","terminate"),Li(c,p),f=new rr(c,c.j,f),f.L=2,f.v=oa(Rn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=f.v,p=!0),p||(f.g=lp(f.j,null),f.g.ea(f.v)),f.F=Date.now(),ra(f)}ap(c)}function ua(c){c.g&&(Ml(c),c.g.cancel(),c.g=null)}function ep(c){ua(c),c.u&&(a.clearTimeout(c.u),c.u=null),fa(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function ha(c){if(!Ld(c.h)&&!c.s){c.s=!0;var f=c.Ga;fe||nn(),ne||(fe(),ne=!0),ze.add(f,c),c.B=0}}function bT(c,f){return Md(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=f.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Ri(m(c.Ga,c,f),op(c,c.B)),c.B++,!0)}t.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const L=new rr(this,this.j,c);let F=this.o;if(this.S&&(F?(F=E(F),w(F,this.S)):F=this.S),this.m!==null||this.O||(L.H=F,F=null),this.P)e:{for(var f=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(f+=_,4096<f){f=p;break e}if(f===4096||p===this.i.length-1){f=p+1;break e}}f=1e3}else f=1e3;f=np(this,L,f),p=Rn(this.I),Ve(p,"RID",c),Ve(p,"CVER",22),this.D&&Ve(p,"X-HTTP-Session-Id",this.D),Li(this,p),F&&(this.O?f="headers="+encodeURIComponent(String(Kd(F)))+"&"+f:this.m&&Nl(p,this.m,F)),xl(this.h,L),this.Ua&&Ve(p,"TYPE","init"),this.P?(Ve(p,"$req",f),Ve(p,"SID","null"),L.T=!0,Pl(L,p,null)):Pl(L,p,f),this.G=2}}else this.G==3&&(c?tp(this,c):this.i.length==0||Ld(this.h)||tp(this))};function tp(c,f){var p;f?p=f.l:p=c.U++;const _=Rn(c.I);Ve(_,"SID",c.K),Ve(_,"RID",p),Ve(_,"AID",c.T),Li(c,_),c.m&&c.o&&Nl(_,c.m,c.o),p=new rr(c,c.j,p,c.B+1),c.m===null&&(p.H=c.o),f&&(c.i=f.D.concat(c.i)),f=np(c,p,1e3),p.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),xl(c.h,p),Pl(p,_,f)}function Li(c,f){c.H&&V(c.H,function(p,_){Ve(f,_,p)}),c.l&&Ud({},function(p,_){Ve(f,_,p)})}function np(c,f,p){p=Math.min(c.i.length,p);var _=c.l?m(c.l.Na,c.l,c):null;e:{var L=c.i;let F=-1;for(;;){const Q=["count="+p];F==-1?0<p?(F=L[0].g,Q.push("ofs="+F)):F=0:Q.push("ofs="+F);let Ne=!0;for(let ct=0;ct<p;ct++){let Re=L[ct].g;const mt=L[ct].map;if(Re-=F,0>Re)F=Math.max(0,L[ct].g-100),Ne=!1;else try{vT(mt,Q,"req"+Re+"_")}catch{_&&_(mt)}}if(Ne){_=Q.join("&");break e}}}return c=c.i.splice(0,p),f.D=c,_}function rp(c){if(!c.g&&!c.u){c.Y=1;var f=c.Fa;fe||nn(),ne||(fe(),ne=!0),ze.add(f,c),c.v=0}}function Ll(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Ri(m(c.Fa,c),op(c,c.v)),c.v++,!0)}t.Fa=function(){if(this.u=null,sp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Ri(m(this.ab,this),c)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Rt(10),ua(this),sp(this))};function Ml(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function sp(c){c.g=new rr(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var f=Rn(c.qa);Ve(f,"RID","rpc"),Ve(f,"SID",c.K),Ve(f,"AID",c.T),Ve(f,"CI",c.F?"0":"1"),!c.F&&c.ja&&Ve(f,"TO",c.ja),Ve(f,"TYPE","xmlhttp"),Li(c,f),c.m&&c.o&&Nl(f,c.m,c.o),c.L&&(c.g.I=c.L);var p=c.g;c=c.ia,p.L=1,p.v=oa(Rn(f)),p.m=null,p.P=!0,Od(p,c)}t.Za=function(){this.C!=null&&(this.C=null,ua(this),Ll(this),Rt(19))};function fa(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function ip(c,f){var p=null;if(c.g==f){fa(c),Ml(c),c.g=null;var _=2}else if(Ol(c.h,f))p=f.D,Vd(c.h,f),_=1;else return;if(c.G!=0){if(f.o)if(_==1){p=f.m?f.m.length:0,f=Date.now()-f.F;var L=c.B;_=ea(),ue(_,new Sd(_,p)),ha(c)}else rp(c);else if(L=f.s,L==3||L==0&&0<f.X||!(_==1&&bT(c,f)||_==2&&Ll(c)))switch(p&&0<p.length&&(f=c.h,f.i=f.i.concat(p)),L){case 1:Hr(c,5);break;case 4:Hr(c,10);break;case 3:Hr(c,6);break;default:Hr(c,2)}}}function op(c,f){let p=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(p*=2),p*f}function Hr(c,f){if(c.j.info("Error code "+f),f==2){var p=m(c.fb,c),_=c.Xa;const L=!_;_=new $r(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||sa(_,"https"),oa(_),L?gT(_.toString(),p):_T(_.toString(),p)}else Rt(2);c.G=0,c.l&&c.l.sa(f),ap(c),ep(c)}t.fb=function(c){c?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function ap(c){if(c.G=0,c.ka=[],c.l){const f=Fd(c.h);(f.length!=0||c.i.length!=0)&&(N(c.ka,f),N(c.ka,c.i),c.h.i.length=0,O(c.i),c.i.length=0),c.l.ra()}}function cp(c,f,p){var _=p instanceof $r?Rn(p):new $r(p);if(_.g!="")f&&(_.g=f+"."+_.g),ia(_,_.s);else{var L=a.location;_=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var F=new $r(null);_&&sa(F,_),f&&(F.g=f),L&&ia(F,L),p&&(F.l=p),_=F}return p=c.D,f=c.ya,p&&f&&Ve(_,p,f),Ve(_,"VER",c.la),Li(c,_),_}function lp(c,f,p){if(f&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=c.Ca&&!c.pa?new Qe(new aa({eb:p})):new Qe(c.pa),f.Ha(c.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function up(){}t=up.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function da(){}da.prototype.g=function(c,f){return new jt(c,f)};function jt(c,f){ie.call(this),this.g=new Zd(f),this.l=c,this.h=f&&f.messageUrlParams||null,c=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(c?c["X-WebChannel-Content-Type"]=f.messageContentType:c={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(c?c["X-WebChannel-Client-Profile"]=f.va:c={"X-WebChannel-Client-Profile":f.va}),this.g.S=c,(c=f&&f.Sb)&&!P(c)&&(this.g.m=c),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!P(f)&&(this.g.D=f,c=this.h,c!==null&&f in c&&(c=this.h,f in c&&delete c[f])),this.j=new Is(this)}A(jt,ie),jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},jt.prototype.close=function(){Dl(this.g)},jt.prototype.o=function(c){var f=this.g;if(typeof c=="string"){var p={};p.__data__=c,c=p}else this.u&&(p={},p.__data__=Es(c),c=p);f.i.push(new oT(f.Ya++,c)),f.G==3&&ha(f)},jt.prototype.N=function(){this.g.l=null,delete this.j,Dl(this.g),delete this.g,jt.aa.N.call(this)};function hp(c){Il.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var f=c.__sm__;if(f){e:{for(const p in f){c=p;break e}c=void 0}(this.i=c)&&(c=this.i,f=f!==null&&c in f?f[c]:void 0),this.data=f}else this.data=c}A(hp,Il);function fp(){Al.call(this),this.status=1}A(fp,Al);function Is(c){this.g=c}A(Is,up),Is.prototype.ua=function(){ue(this.g,"a")},Is.prototype.ta=function(c){ue(this.g,new hp(c))},Is.prototype.sa=function(c){ue(this.g,new fp)},Is.prototype.ra=function(){ue(this.g,"b")},da.prototype.createWebChannel=da.prototype.g,jt.prototype.send=jt.prototype.o,jt.prototype.open=jt.prototype.m,jt.prototype.close=jt.prototype.close,JE=function(){return new da},XE=function(){return ea()},YE=jr,Ch={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ta.NO_ERROR=0,ta.TIMEOUT=8,ta.HTTP_ERROR=6,$a=ta,Pd.COMPLETE="complete",QE=Pd,bd.EventType=Ii,Ii.OPEN="a",Ii.CLOSE="b",Ii.ERROR="c",Ii.MESSAGE="d",ie.prototype.listen=ie.prototype.K,zi=bd,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,GE=Qe}).apply(typeof Pa<"u"?Pa:typeof self<"u"?self:typeof window<"u"?window:{});const Tg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yi="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=new Of("@firebase/firestore");function Os(){return ls.logLevel}function ee(t,...e){if(ls.logLevel<=Ee.DEBUG){const n=e.map(Df);ls.debug(`Firestore (${yi}): ${t}`,...n)}}function Kn(t,...e){if(ls.logLevel<=Ee.ERROR){const n=e.map(Df);ls.error(`Firestore (${yi}): ${t}`,...n)}}function oi(t,...e){if(ls.logLevel<=Ee.WARN){const n=e.map(Df);ls.warn(`Firestore (${yi}): ${t}`,...n)}}function Df(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(t="Unexpected state"){const e=`FIRESTORE (${yi}) INTERNAL ASSERTION FAILED: `+t;throw Kn(e),new Error(e)}function ke(t,e){t||me()}function ye(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends Zn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Tx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class bx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Ix{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ke(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Bn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Bn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Bn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ke(typeof r.accessToken=="string"),new ZE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ke(e===null||typeof e=="string"),new yt(e)}}class Ax{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Rx{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Ax(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Sx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Px{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ke(this.o===void 0);const r=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ke(typeof n.token=="string"),this.R=n.token,new Sx(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Cx(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function be(t,e){return t<e?-1:t>e?1:0}function ai(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{static now(){return nt.fromMillis(Date.now())}static fromDate(e){return nt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new nt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new te($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new te($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new te($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{static fromTimestamp(e){return new ge(e)}static min(){return new ge(new nt(0,0))}static max(){return new ge(new nt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,n,r){n===void 0?n=0:n>e.length&&me(),r===void 0?r=e.length-n:r>e.length-n&&me(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Io.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Io?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ue extends Io{construct(e,n,r){return new Ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new te($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ue(n)}static emptyPath(){return new Ue([])}}const kx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends Io{construct(e,n,r){return new ht(e,n,r)}static isValidIdentifier(e){return kx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ht(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new te($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new te($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new te($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new te($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(n)}static emptyPath(){return new ht([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(Ue.fromString(e))}static fromName(e){return new ce(Ue.fromString(e).popFirst(5))}static empty(){return new ce(Ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ce(new Ue(e.slice()))}}function Ox(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ge.fromTimestamp(r===1e9?new nt(n+1,0):new nt(n,r));return new Cr(s,ce.empty(),e)}function xx(t){return new Cr(t.readTime,t.key,-1)}class Cr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Cr(ge.min(),ce.empty(),-1)}static max(){return new Cr(ge.max(),ce.empty(),-1)}}function Nx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ce.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Lx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vi(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==Dx)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&me(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(s=>s?B.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new B((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new B((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Mx(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ei(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}cl.oe=-1;function ll(t){return t==null}function bc(t){return t===0&&1/t==-1/0}function Vx(t){return typeof t=="number"&&Number.isInteger(t)&&!bc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fx(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=bg(e)),e=Ux(t.get(n),e);return bg(e)}function Ux(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function bg(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ps(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function t0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n){this.comparator=e,this.root=n||ut.EMPTY}insert(e,n){return new Ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(e){return new Ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ut.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ca(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ca(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ca(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ca(this.root,e,this.comparator,!0)}}class Ca{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ut{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ut.RED,this.left=s??ut.EMPTY,this.right=i??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ut(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ut.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw me();const e=this.left.check();if(e!==this.right.check())throw me();return e+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw me()}get value(){throw me()}get color(){throw me()}get left(){throw me()}get right(){throw me()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ut(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.comparator=e,this.data=new Ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ag(this.data.getIterator())}getIteratorFrom(e){return new Ag(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new rt(this.comparator);return n.data=e,n}}class Ag{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.fields=e,e.sort(ht.comparator)}static empty(){return new an([])}unionWith(e){let n=new rt(ht.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new an(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ai(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new n0("Invalid base64 string: "+i):i}}(e);return new ft(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const jx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kr(t){if(ke(!!t),typeof t=="string"){let e=0;const n=jx.exec(t);if(ke(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ye(t.seconds),nanos:Ye(t.nanos)}}function Ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Or(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ul(t){const e=t.mapValue.fields.__previous_value__;return Lf(e)?ul(e):e}function Ao(t){const e=kr(t.mapValue.fields.__local_write_time__.timestampValue);return new nt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(e,n,r,s,i,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Ro{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ro("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ro&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function xr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Lf(t)?4:Hx(t)?9007199254740991:$x(t)?10:11:me()}function An(t,e){if(t===e)return!0;const n=xr(t);if(n!==xr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ao(t).isEqual(Ao(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=kr(s.timestampValue),a=kr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Or(s.bytesValue).isEqual(Or(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ye(s.geoPointValue.latitude)===Ye(i.geoPointValue.latitude)&&Ye(s.geoPointValue.longitude)===Ye(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ye(s.integerValue)===Ye(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ye(s.doubleValue),a=Ye(i.doubleValue);return o===a?bc(o)===bc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ai(t.arrayValue.values||[],e.arrayValue.values||[],An);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Ig(o)!==Ig(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!An(o[l],a[l])))return!1;return!0}(t,e);default:return me()}}function So(t,e){return(t.values||[]).find(n=>An(n,e))!==void 0}function ci(t,e){if(t===e)return 0;const n=xr(t),r=xr(e);if(n!==r)return be(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ye(i.integerValue||i.doubleValue),l=Ye(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Rg(t.timestampValue,e.timestampValue);case 4:return Rg(Ao(t),Ao(e));case 5:return be(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Or(i),l=Or(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=be(a[u],l[u]);if(h!==0)return h}return be(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=be(Ye(i.latitude),Ye(o.latitude));return a!==0?a:be(Ye(i.longitude),Ye(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Sg(t.arrayValue,e.arrayValue);case 10:return function(i,o){var a,l,u,h;const d=i.fields||{},m=o.fields||{},g=(a=d.value)===null||a===void 0?void 0:a.arrayValue,A=(l=m.value)===null||l===void 0?void 0:l.arrayValue,O=be(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0);return O!==0?O:Sg(g,A)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===ka.mapValue&&o===ka.mapValue)return 0;if(i===ka.mapValue)return 1;if(o===ka.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const m=be(l[d],h[d]);if(m!==0)return m;const g=ci(a[l[d]],u[h[d]]);if(g!==0)return g}return be(l.length,h.length)}(t.mapValue,e.mapValue);default:throw me()}}function Rg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=kr(t),r=kr(e),s=be(n.seconds,r.seconds);return s!==0?s:be(n.nanos,r.nanos)}function Sg(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ci(n[s],r[s]);if(i)return i}return be(n.length,r.length)}function li(t){return kh(t)}function kh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=kr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Or(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ce.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=kh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${kh(n.fields[o])}`;return s+"}"}(t.mapValue):me()}function Ha(t){switch(xr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ul(t);return e?16+Ha(e):16;case 5:return 2*t.stringValue.length;case 6:return Or(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ha(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return ps(r.fields,(i,o)=>{s+=i.length+Ha(o)}),s}(t.mapValue);default:throw me()}}function Pg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Oh(t){return!!t&&"integerValue"in t}function Mf(t){return!!t&&"arrayValue"in t}function Cg(t){return!!t&&"nullValue"in t}function kg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function qa(t){return!!t&&"mapValue"in t}function $x(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function oo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ps(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=oo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=oo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Hx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.value=e}static empty(){return new Jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!qa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=oo(n)}setAll(e){let n=ht.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=oo(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());qa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return An(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];qa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ps(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Jt(oo(this.value))}}function r0(t){const e=[];return ps(t.fields,(n,r)=>{const s=new ht([n]);if(qa(r)){const i=r0(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new an(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new wt(e,0,ge.min(),ge.min(),ge.min(),Jt.empty(),0)}static newFoundDocument(e,n,r,s){return new wt(e,1,n,ge.min(),r,s,0)}static newNoDocument(e,n){return new wt(e,2,n,ge.min(),ge.min(),Jt.empty(),0)}static newUnknownDocument(e,n){return new wt(e,3,n,ge.min(),ge.min(),Jt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,n){this.position=e,this.inclusive=n}}function Og(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ce.comparator(ce.fromName(o.referenceValue),n.key):r=ci(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function xg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!An(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,n="asc"){this.field=e,this.dir=n}}function qx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{}class Je extends s0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Wx(e,n,r):n==="array-contains"?new Qx(e,r):n==="in"?new Yx(e,r):n==="not-in"?new Xx(e,r):n==="array-contains-any"?new Jx(e,r):new Je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Kx(e,r):new Gx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ci(n,this.value)):n!==null&&xr(this.value)===xr(n)&&this.matchesComparison(ci(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hn extends s0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new hn(e,n)}matches(e){return i0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function i0(t){return t.op==="and"}function o0(t){return zx(t)&&i0(t)}function zx(t){for(const e of t.filters)if(e instanceof hn)return!1;return!0}function xh(t){if(t instanceof Je)return t.field.canonicalString()+t.op.toString()+li(t.value);if(o0(t))return t.filters.map(e=>xh(e)).join(",");{const e=t.filters.map(n=>xh(n)).join(",");return`${t.op}(${e})`}}function a0(t,e){return t instanceof Je?function(r,s){return s instanceof Je&&r.op===s.op&&r.field.isEqual(s.field)&&An(r.value,s.value)}(t,e):t instanceof hn?function(r,s){return s instanceof hn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&a0(o,s.filters[a]),!0):!1}(t,e):void me()}function c0(t){return t instanceof Je?function(n){return`${n.field.canonicalString()} ${n.op} ${li(n.value)}`}(t):t instanceof hn?function(n){return n.op.toString()+" {"+n.getFilters().map(c0).join(" ,")+"}"}(t):"Filter"}class Wx extends Je{constructor(e,n,r){super(e,n,r),this.key=ce.fromName(r.referenceValue)}matches(e){const n=ce.comparator(e.key,this.key);return this.matchesComparison(n)}}class Kx extends Je{constructor(e,n){super(e,"in",n),this.keys=l0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Gx extends Je{constructor(e,n){super(e,"not-in",n),this.keys=l0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function l0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ce.fromName(r.referenceValue))}class Qx extends Je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Mf(n)&&So(n.arrayValue,this.value)}}class Yx extends Je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&So(this.value.arrayValue,n)}}class Xx extends Je{constructor(e,n){super(e,"not-in",n)}matches(e){if(So(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!So(this.value.arrayValue,n)}}class Jx extends Je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Mf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>So(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function Ng(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Zx(t,e,n,r,s,i,o)}function Vf(t){const e=ye(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>xh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ll(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>li(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>li(r)).join(",")),e.ue=n}return e.ue}function Ff(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!qx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!a0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!xg(t.startAt,e.startAt)&&xg(t.endAt,e.endAt)}function Nh(t){return ce.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function eN(t,e,n,r,s,i,o,a){return new wi(t,e,n,r,s,i,o,a)}function Uf(t){return new wi(t)}function Dg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function u0(t){return t.collectionGroup!==null}function ao(t){const e=ye(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new rt(ht.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Po(i,r))}),n.has(ht.keyField().canonicalString())||e.ce.push(new Po(ht.keyField(),r))}return e.ce}function En(t){const e=ye(t);return e.le||(e.le=tN(e,ao(t))),e.le}function tN(t,e){if(t.limitType==="F")return Ng(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Po(s.field,i)});const n=t.endAt?new Ic(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ic(t.startAt.position,t.startAt.inclusive):null;return Ng(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Dh(t,e){const n=t.filters.concat([e]);return new wi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Lh(t,e,n){return new wi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function hl(t,e){return Ff(En(t),En(e))&&t.limitType===e.limitType}function h0(t){return`${Vf(En(t))}|lt:${t.limitType}`}function xs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>c0(s)).join(", ")}]`),ll(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>li(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>li(s)).join(",")),`Target(${r})`}(En(t))}; limitType=${t.limitType})`}function fl(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ce.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ao(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const u=Og(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,ao(r),s)||r.endAt&&!function(o,a,l){const u=Og(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,ao(r),s))}(t,e)}function nN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function f0(t){return(e,n)=>{let r=!1;for(const s of ao(t)){const i=rN(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function rN(t,e,n){const r=t.field.isKeyField()?ce.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?ci(l,u):me()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return me()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ps(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return t0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sN=new Ge(ce.comparator);function Gn(){return sN}const d0=new Ge(ce.comparator);function Wi(...t){let e=d0;for(const n of t)e=e.insert(n.key,n);return e}function p0(t){let e=d0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Zr(){return co()}function m0(){return co()}function co(){return new ms(t=>t.toString(),(t,e)=>t.isEqual(e))}const iN=new Ge(ce.comparator),oN=new rt(ce.comparator);function we(...t){let e=oN;for(const n of t)e=e.add(n);return e}const aN=new rt(be);function cN(){return aN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bc(e)?"-0":e}}function g0(t){return{integerValue:""+t}}function lN(t,e){return Vx(e)?g0(e):jf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(){this._=void 0}}function uN(t,e,n){return t instanceof Ac?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Lf(i)&&(i=ul(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Co?y0(t,e):t instanceof ko?v0(t,e):function(s,i){const o=_0(s,i),a=Lg(o)+Lg(s.Pe);return Oh(o)&&Oh(s.Pe)?g0(a):jf(s.serializer,a)}(t,e)}function hN(t,e,n){return t instanceof Co?y0(t,e):t instanceof ko?v0(t,e):n}function _0(t,e){return t instanceof Rc?function(r){return Oh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ac extends dl{}class Co extends dl{constructor(e){super(),this.elements=e}}function y0(t,e){const n=E0(e);for(const r of t.elements)n.some(s=>An(s,r))||n.push(r);return{arrayValue:{values:n}}}class ko extends dl{constructor(e){super(),this.elements=e}}function v0(t,e){let n=E0(e);for(const r of t.elements)n=n.filter(s=>!An(s,r));return{arrayValue:{values:n}}}class Rc extends dl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Lg(t){return Ye(t.integerValue||t.doubleValue)}function E0(t){return Mf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function fN(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Co&&s instanceof Co||r instanceof ko&&s instanceof ko?ai(r.elements,s.elements,An):r instanceof Rc&&s instanceof Rc?An(r.Pe,s.Pe):r instanceof Ac&&s instanceof Ac}(t.transform,e.transform)}class dN{constructor(e,n){this.version=e,this.transformResults=n}}class wn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new wn}static exists(e){return new wn(void 0,e)}static updateTime(e){return new wn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function za(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class pl{}function w0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Bf(t.key,wn.none()):new zo(t.key,t.data,wn.none());{const n=t.data,r=Jt.empty();let s=new rt(ht.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new gs(t.key,r,new an(s.toArray()),wn.none())}}function pN(t,e,n){t instanceof zo?function(s,i,o){const a=s.value.clone(),l=Vg(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof gs?function(s,i,o){if(!za(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Vg(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(T0(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function lo(t,e,n,r){return t instanceof zo?function(i,o,a,l){if(!za(i.precondition,o))return a;const u=i.value.clone(),h=Fg(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof gs?function(i,o,a,l){if(!za(i.precondition,o))return a;const u=Fg(i.fieldTransforms,l,o),h=o.data;return h.setAll(T0(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,a){return za(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function mN(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=_0(r.transform,s||null);i!=null&&(n===null&&(n=Jt.empty()),n.set(r.field,i))}return n||null}function Mg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ai(r,s,(i,o)=>fN(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class zo extends pl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class gs extends pl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function T0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Vg(t,e,n){const r=new Map;ke(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,hN(o,a,n[s]))}return r}function Fg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,uN(i,o,e))}return r}class Bf extends pl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gN extends pl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&pN(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=lo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=lo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=m0();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=w0(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ge.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),we())}isEqual(e){return this.batchId===e.batchId&&ai(this.mutations,e.mutations,(n,r)=>Mg(n,r))&&ai(this.baseMutations,e.baseMutations,(n,r)=>Mg(n,r))}}class $f{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ke(e.mutations.length===r.length);let s=function(){return iN}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new $f(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xe,Ie;function EN(t){switch(t){default:return me();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function b0(t){if(t===void 0)return Kn("GRPC error has no .code"),$.UNKNOWN;switch(t){case Xe.OK:return $.OK;case Xe.CANCELLED:return $.CANCELLED;case Xe.UNKNOWN:return $.UNKNOWN;case Xe.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Xe.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Xe.INTERNAL:return $.INTERNAL;case Xe.UNAVAILABLE:return $.UNAVAILABLE;case Xe.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Xe.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Xe.NOT_FOUND:return $.NOT_FOUND;case Xe.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Xe.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Xe.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Xe.ABORTED:return $.ABORTED;case Xe.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Xe.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Xe.DATA_LOSS:return $.DATA_LOSS;default:return me()}}(Ie=Xe||(Xe={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wN(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN=new is([4294967295,4294967295],0);function Ug(t){const e=wN().encode(t),n=new KE;return n.update(e),new Uint8Array(n.digest())}function jg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new is([n,r],0),new is([s,i],0)]}class Hf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ki(`Invalid padding: ${n}`);if(r<0)throw new Ki(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ki(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ki(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=is.fromNumber(this.Te)}Ee(e,n,r){let s=e.add(n.multiply(is.fromNumber(r)));return s.compare(TN)===1&&(s=new is([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Ug(e),[r,s]=jg(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Hf(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Ug(e),[r,s]=jg(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ki extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Wo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ml(ge.min(),s,new Ge(be),Gn(),we())}}class Wo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Wo(r,n,we(),we(),we())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class I0{constructor(e,n){this.targetId=e,this.me=n}}class A0{constructor(e,n,r=ft.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Bg{constructor(){this.fe=0,this.ge=$g(),this.pe=ft.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=we(),n=we(),r=we();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:me()}}),new Wo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=$g()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ke(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class bN{constructor(e){this.Le=e,this.Be=new Map,this.ke=Gn(),this.qe=Oa(),this.Qe=Oa(),this.Ke=new Ge(be)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:me()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.me.count,s=this.Ye(n);if(s){const i=s.target;if(Nh(i))if(r===0){const o=new ce(i.path);this.We(n,o,wt.newNoDocument(o,ge.min()))}else ke(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Or(r).toUint8Array()}catch(l){if(l instanceof n0)return oi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Hf(o,s,i)}catch(l){return oi(l instanceof Ki?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.Be.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Nh(a.target)){const l=new ce(a.target.path);this.st(l).has(o)||this.ot(o,l)||this.We(o,l,wt.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=we();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new ml(e,n,this.Ke,this.ke,r);return this.ke=Gn(),this.qe=Oa(),this.Qe=Oa(),this.Ke=new Ge(be),s}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,n)?s.Fe(n,1):s.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new Bg,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new rt(be),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new rt(be),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Bg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Oa(){return new Ge(ce.comparator)}function $g(){return new Ge(ce.comparator)}const IN={asc:"ASCENDING",desc:"DESCENDING"},AN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},RN={and:"AND",or:"OR"};class SN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Mh(t,e){return t.useProto3Json||ll(e)?e:{value:e}}function Sc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function R0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function PN(t,e){return Sc(t,e.toTimestamp())}function Tn(t){return ke(!!t),ge.fromTimestamp(function(n){const r=kr(n);return new nt(r.seconds,r.nanos)}(t))}function qf(t,e){return Vh(t,e).canonicalString()}function Vh(t,e){const n=function(s){return new Ue(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function S0(t){const e=Ue.fromString(t);return ke(x0(e)),e}function Fh(t,e){return qf(t.databaseId,e.path)}function yu(t,e){const n=S0(e);if(n.get(1)!==t.databaseId.projectId)throw new te($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new te($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ce(C0(n))}function P0(t,e){return qf(t.databaseId,e)}function CN(t){const e=S0(t);return e.length===4?Ue.emptyPath():C0(e)}function Uh(t){return new Ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function C0(t){return ke(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Hg(t,e,n){return{name:Fh(t,e),fields:n.value.mapValue.fields}}function kN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:me()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(ke(h===void 0||typeof h=="string"),ft.fromBase64String(h||"")):(ke(h===void 0||h instanceof Buffer||h instanceof Uint8Array),ft.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?$.UNKNOWN:b0(u.code);return new te(h,u.message||"")}(o);n=new A0(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=yu(t,r.document.name),i=Tn(r.document.updateTime),o=r.document.createTime?Tn(r.document.createTime):ge.min(),a=new Jt({mapValue:{fields:r.document.fields}}),l=wt.newFoundDocument(s,i,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new Wa(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=yu(t,r.document),i=r.readTime?Tn(r.readTime):ge.min(),o=wt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Wa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=yu(t,r.document),i=r.removedTargetIds||[];n=new Wa([],i,s,null)}else{if(!("filter"in e))return me();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new vN(s,i),a=r.targetId;n=new I0(a,o)}}return n}function ON(t,e){let n;if(e instanceof zo)n={update:Hg(t,e.key,e.value)};else if(e instanceof Bf)n={delete:Fh(t,e.key)};else if(e instanceof gs)n={update:Hg(t,e.key,e.data),updateMask:jN(e.fieldMask)};else{if(!(e instanceof gN))return me();n={verify:Fh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Ac)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Co)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ko)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Rc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw me()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:PN(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:me()}(t,e.precondition)),n}function xN(t,e){return t&&t.length>0?(ke(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Tn(s.updateTime):Tn(i);return o.isEqual(ge.min())&&(o=Tn(i)),new dN(o,s.transformResults||[])}(n,e))):[]}function NN(t,e){return{documents:[P0(t,e.path)]}}function DN(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=P0(t,s);const i=function(u){if(u.length!==0)return O0(hn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(m){return{field:Ns(m.field),direction:VN(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Mh(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:n,parent:s}}function LN(t){let e=CN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ke(r===1);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(d){const m=k0(d);return m instanceof hn&&o0(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(m=>function(A){return new Po(Ds(A.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(d){let m;return m=typeof d=="object"?d.value:d,ll(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(d){const m=!!d.before,g=d.values||[];return new Ic(g,m)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const m=!d.before,g=d.values||[];return new Ic(g,m)}(n.endAt)),eN(e,s,o,i,a,"F",l,u)}function MN(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function k0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ds(n.unaryFilter.field);return Je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ds(n.unaryFilter.field);return Je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ds(n.unaryFilter.field);return Je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ds(n.unaryFilter.field);return Je.create(o,"!=",{nullValue:"NULL_VALUE"});default:return me()}}(t):t.fieldFilter!==void 0?function(n){return Je.create(Ds(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return me()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return hn.create(n.compositeFilter.filters.map(r=>k0(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return me()}}(n.compositeFilter.op))}(t):me()}function VN(t){return IN[t]}function FN(t){return AN[t]}function UN(t){return RN[t]}function Ns(t){return{fieldPath:t.canonicalString()}}function Ds(t){return ht.fromServerFormat(t.fieldPath)}function O0(t){return t instanceof Je?function(n){if(n.op==="=="){if(kg(n.value))return{unaryFilter:{field:Ns(n.field),op:"IS_NAN"}};if(Cg(n.value))return{unaryFilter:{field:Ns(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(kg(n.value))return{unaryFilter:{field:Ns(n.field),op:"IS_NOT_NAN"}};if(Cg(n.value))return{unaryFilter:{field:Ns(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ns(n.field),op:FN(n.op),value:n.value}}}(t):t instanceof hn?function(n){const r=n.getFilters().map(s=>O0(s));return r.length===1?r[0]:{compositeFilter:{op:UN(n.op),filters:r}}}(t):me()}function jN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function x0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,n,r,s,i=ge.min(),o=ge.min(),a=ft.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new yr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(e){this.ht=e}}function $N(t){const e=LN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Lh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(){this.ln=new qN}addToCollectionParentIndex(e,n){return this.ln.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(Cr.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(Cr.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class qN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new rt(Ue.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new rt(Ue.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Vt{static withCacheSize(e){return new Vt(e,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vt.DEFAULT_COLLECTION_PERCENTILE=10,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Vt.DEFAULT=new Vt(41943040,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Vt.DISABLED=new Vt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new ui(0)}static Qn(){return new ui(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg([t,e],[n,r]){const s=be(t,n);return s===0?be(e,r):s}class zN{constructor(e){this.Gn=e,this.buffer=new rt(zg),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();zg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class WN{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ee("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ei(n)?ee("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await vi(n)}await this.Yn(3e5)})}}class KN{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return B.resolve(cl.oe);const r=new zN(n);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ee("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(qg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),qg):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,s,i,o,a,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,o=Date.now(),this.nthSequenceNumber(e,s))).next(d=>(r=d,a=Date.now(),this.removeTargets(e,r,n))).next(d=>(i=d,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(u=Date.now(),Os()<=Ee.DEBUG&&ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(l-a)+`ms
	Removed ${d} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:d})))}}function GN(t,e){return new KN(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(){this.changes=new ms(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,wt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&lo(r.mutation,s,an.empty(),nt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,we()).next(()=>r))}getLocalViewOfDocuments(e,n,r=we()){const s=Zr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Wi();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Zr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,we()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Gn();const o=co(),a=function(){return co()}();return n.forEach((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof gs)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),lo(h.mutation,u,h.mutation.getFieldMask(),nt.now())):o.set(u.key,an.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var d;return a.set(u,new YN(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=co();let s=new Ge((o,a)=>o-a),i=we();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||an.empty();h=a.applyToLocalView(u,h),r.set(l,h);const d=(s.get(a.batchId)||we()).add(l);s=s.insert(a.batchId,d)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,d=m0();h.forEach(m=>{if(!i.has(m)){const g=w0(n.get(m),r.get(m));g!==null&&d.set(m,g),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ce.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):u0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):B.resolve(Zr());let a=-1,l=i;return o.next(u=>B.forEach(u,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(h)?B.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{l=l.insert(h,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,we())).next(h=>({batchId:a,changes:p0(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ce(n)).next(r=>{let s=Wi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Wi();return this.indexManager.getCollectionParents(e,i).next(a=>B.forEach(a,l=>{const u=function(d,m){return new wi(m,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((d,m)=>{o=o.insert(d,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,wt.newInvalidDocument(h)))});let a=Wi();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&lo(h.mutation,u,an.empty(),nt.now()),fl(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return B.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Tn(s.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(s){return{name:s.name,query:$N(s.bundledQuery),readTime:Tn(s.readTime)}}(n)),B.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(){this.overlays=new Ge(ce.comparator),this.Er=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Zr();return B.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Tt(e,n,i)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Er.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const s=Zr(),i=n.length+1,o=new ce(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return B.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ge((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=Zr(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Zr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=s)););return B.resolve(a)}Tt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Er.get(s.largestBatchId).delete(r.key);this.Er.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new yN(n,r));let i=this.Er.get(n);i===void 0&&(i=we(),this.Er.set(n,i)),this.Er.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(){this.dr=new rt(it.Ar),this.Rr=new rt(it.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new it(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new it(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new ce(new Ue([])),r=new it(n,e),s=new it(n,e+1),i=[];return this.Rr.forEachInRange([r,s],o=>{this.gr(o),i.push(o.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new ce(new Ue([])),r=new it(n,e),s=new it(n,e+1);let i=we();return this.Rr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new it(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return ce.comparator(e.key,n.key)||be(e.br,n.br)}static Vr(e,n){return be(e.br,n.br)||ce.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new rt(it.Ar)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new _N(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.vr=this.vr.add(new it(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Fr(r),i=s<0?0:s;return B.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new it(n,0),s=new it(n,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,s],o=>{const a=this.Cr(o.br);i.push(a)}),B.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new rt(be);return n.forEach(s=>{const i=new it(s,0),o=new it(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],a=>{r=r.add(a.br)})}),B.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ce.isDocumentKey(i)||(i=i.child(""));const o=new it(new ce(i),0);let a=new rt(be);return this.vr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.br)),!0)},o),B.resolve(this.Mr(a))}Mr(e){const n=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ke(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return B.forEach(n.mutations,s=>{const i=new it(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new it(n,0),s=this.vr.firstAfterOrEqual(r);return B.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e){this.Nr=e,this.docs=function(){return new Ge(ce.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():wt.newInvalidDocument(n))}getEntries(e,n){let r=Gn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():wt.newInvalidDocument(s))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Gn();const o=n.path,a=new ce(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Nx(xx(h),r)<=0||(s.has(h.key)||fl(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return B.resolve(i)}getAllFromCollectionGroup(e,n,r,s){me()}Lr(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new rD(this)}getSize(e){return B.resolve(this.size)}}class rD extends QN{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(e){this.persistence=e,this.Br=new ms(n=>Vf(n),Ff),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.kr=0,this.qr=new zf,this.targetCount=0,this.Qr=ui.qn()}forEachTarget(e,n){return this.Br.forEach((r,s)=>n(s)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),B.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new ui(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.Un(n),B.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Br.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Br.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),B.waitFor(i).next(()=>s)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),B.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e,n){this.Kr={},this.overlays={},this.$r=new cl(0),this.Ur=!1,this.Ur=!0,this.Wr=new eD,this.referenceDelegate=e(this),this.Gr=new sD(this),this.indexManager=new HN,this.remoteDocumentCache=function(s){return new nD(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new BN(n),this.jr=new JN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ZN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new tD(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const s=new iD(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,n){return B.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class iD extends Lx{constructor(e){super(),this.currentSequenceNumber=e}}class Wf{constructor(e){this.persistence=e,this.Zr=new zf,this.Xr=null}static ei(e){return new Wf(e)}get ti(){if(this.Xr)return this.Xr;throw me()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),B.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.ti,r=>{const s=ce.fromPath(r);return this.ni(e,s).next(i=>{i||n.removeEntry(s,ge.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return B.or([()=>B.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class Pc{constructor(e,n){this.persistence=e,this.ri=new ms(r=>Fx(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=GN(this,n)}static ei(e,n){return new Pc(e,n)}Hr(){}Jr(e){return B.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return B.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(i=>i?B.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Lr(e,o=>this.ir(e,o,n).next(a=>{a||(r++,i.removeEntry(o,ge.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),B.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),B.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),B.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ha(e.data.value)),n}ir(e,n,r){return B.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.ri.get(n);return B.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=s}static zi(e,n){let r=we(),s=we();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Kf(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return rO()?8:Mx(It())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Xi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.es(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new oD;return this.ts(e,n,o).next(a=>{if(i.result=a,this.Hi)return this.ns(e,n,o,a.size)})}).next(()=>i.result)}ns(e,n,r,s){return r.documentReadCount<this.Ji?(Os()<=Ee.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",xs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),B.resolve()):(Os()<=Ee.DEBUG&&ee("QueryEngine","Query:",xs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(Os()<=Ee.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",xs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,En(n))):B.resolve())}Xi(e,n){if(Dg(n))return B.resolve(null);let r=En(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Lh(n,null,"F"),r=En(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=we(...i);return this.Zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.rs(n,a);return this.ss(n,u,o,l.readTime)?this.Xi(e,Lh(n,null,"F")):this.os(e,u,n,l)}))})))}es(e,n,r,s){return Dg(n)||s.isEqual(ge.min())?B.resolve(null):this.Zi.getDocuments(e,r).next(i=>{const o=this.rs(n,i);return this.ss(n,o,r,s)?B.resolve(null):(Os()<=Ee.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),xs(n)),this.os(e,o,n,Ox(s,-1)).next(a=>a))})}rs(e,n){let r=new rt(f0(e));return n.forEach((s,i)=>{fl(e,i)&&(r=r.add(i))}),r}ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,n,r){return Os()<=Ee.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",xs(n)),this.Zi.getDocumentsMatchingQuery(e,n,Cr.min(),r)}os(e,n,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(e,n,r,s){this.persistence=e,this._s=n,this.serializer=s,this.us=new Ge(be),this.cs=new ms(i=>Vf(i),Ff),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new XN(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function lD(t,e,n,r){return new cD(t,e,n,r)}async function D0(t,e){const n=ye(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=we();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function uD(t,e){const n=ye(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.hs.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const d=u.batch,m=d.keys();let g=B.resolve();return m.forEach(A=>{g=g.next(()=>h.getEntry(l,A)).next(O=>{const N=u.docVersions.get(A);ke(N!==null),O.version.compareTo(N)<0&&(d.applyToRemoteDocument(O,u),O.isValidDocument()&&(O.setReadTime(u.commitVersion),h.addEntry(O)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=we();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function L0(t){const e=ye(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function hD(t,e){const n=ye(t),r=e.snapshotVersion;let s=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});s=n.us;const a=[];e.targetChanges.forEach((h,d)=>{const m=s.get(d);if(!m)return;a.push(n.Gr.removeMatchingKeys(i,h.removedDocuments,d).next(()=>n.Gr.addMatchingKeys(i,h.addedDocuments,d)));let g=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(ft.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),s=s.insert(d,g),function(O,N,x){return O.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(m,g,h)&&a.push(n.Gr.updateTargetData(i,g))});let l=Gn(),u=we();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(fD(i,o,e.documentUpdates).next(h=>{l=h.Is,u=h.Es})),!r.isEqual(ge.min())){const h=n.Gr.getLastRemoteSnapshotVersion(i).next(d=>n.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return B.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.us=s,i))}function fD(t,e,n){let r=we(),s=we();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Gn();return n.forEach((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(ge.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):ee("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Is:o,Es:s}})}function dD(t,e){const n=ye(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function pD(t,e){const n=ye(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Gr.getTargetData(r,e).next(i=>i?(s=i,B.resolve(s)):n.Gr.allocateTargetId(r).next(o=>(s=new yr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function jh(t,e,n){const r=ye(t),s=r.us.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ei(o))throw o;ee("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function Wg(t,e,n){const r=ye(t);let s=ge.min(),i=we();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const d=ye(l),m=d.cs.get(h);return m!==void 0?B.resolve(d.us.get(m)):d.Gr.getTargetData(u,h)}(r,o,En(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?s:ge.min(),n?i:we())).next(a=>(mD(r,nN(e),a),{documents:a,ds:i})))}function mD(t,e,n){let r=t.ls.get(e)||ge.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ls.set(e,r)}class Kg{constructor(){this.activeTargetIds=cN()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class gD{constructor(){this._o=new Kg,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Kg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _D{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ee("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ee("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xa=null;function vu(){return xa===null?xa=function(){return 268435456+Math.round(2147483648*Math.random())}():xa++,"0x"+xa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="WebChannelConnection";class ED extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(n,r,s,i,o){const a=vu(),l=this.No(n,r.toUriEncodedString());ee("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(u,i,o),this.Bo(n,l,u,s).then(h=>(ee("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw oi("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",s),h})}ko(n,r,s,i,o,a){return this.Oo(n,r,s,i,o)}Lo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+yi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}No(n,r){const s=yD[n];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,s){const i=vu();return new Promise((o,a)=>{const l=new GE;l.setWithCredentials(!0),l.listenOnce(QE.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case $a.NO_ERROR:const h=l.getResponseJson();ee(_t,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case $a.TIMEOUT:ee(_t,`RPC '${e}' ${i} timed out`),a(new te($.DEADLINE_EXCEEDED,"Request time out"));break;case $a.HTTP_ERROR:const d=l.getStatus();if(ee(_t,`RPC '${e}' ${i} failed with status:`,d,"response text:",l.getResponseText()),d>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const g=m==null?void 0:m.error;if(g&&g.status&&g.message){const A=function(N){const x=N.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(x)>=0?x:$.UNKNOWN}(g.status);a(new te(A,g.message))}else a(new te($.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new te($.UNAVAILABLE,"Connection failed."));break;default:me()}}finally{ee(_t,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);ee(_t,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}qo(e,n,r){const s=vu(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=JE(),a=XE(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Lo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");ee(_t,`Creating RPC '${e}' stream ${s}: ${h}`,l);const d=o.createWebChannel(h,l);let m=!1,g=!1;const A=new vD({Eo:N=>{g?ee(_t,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(m||(ee(_t,`Opening RPC '${e}' stream ${s} transport.`),d.open(),m=!0),ee(_t,`RPC '${e}' stream ${s} sending:`,N),d.send(N))},Ao:()=>d.close()}),O=(N,x,P)=>{N.listen(x,y=>{try{P(y)}catch(S){setTimeout(()=>{throw S},0)}})};return O(d,zi.EventType.OPEN,()=>{g||(ee(_t,`RPC '${e}' stream ${s} transport opened.`),A.So())}),O(d,zi.EventType.CLOSE,()=>{g||(g=!0,ee(_t,`RPC '${e}' stream ${s} transport closed`),A.Do())}),O(d,zi.EventType.ERROR,N=>{g||(g=!0,oi(_t,`RPC '${e}' stream ${s} transport errored:`,N),A.Do(new te($.UNAVAILABLE,"The operation could not be completed")))}),O(d,zi.EventType.MESSAGE,N=>{var x;if(!g){const P=N.data[0];ke(!!P);const y=P,S=(y==null?void 0:y.error)||((x=y[0])===null||x===void 0?void 0:x.error);if(S){ee(_t,`RPC '${e}' stream ${s} received error:`,S);const D=S.status;let V=function(v){const w=Xe[v];if(w!==void 0)return b0(w)}(D),b=S.message;V===void 0&&(V=$.INTERNAL,b="Unknown error status: "+D+" with message "+S.message),g=!0,A.Do(new te(V,b)),d.close()}else ee(_t,`RPC '${e}' stream ${s} received:`,P),A.vo(P)}}),O(a,YE.STAT_EVENT,N=>{N.stat===Ch.PROXY?ee(_t,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===Ch.NOPROXY&&ee(_t,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{A.bo()},0),A}}function Eu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(t){return new SN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e,n,r=1e3,s=1.5,i=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,n-r);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e,n,r,s,i,o,a,l){this.li=e,this.Yo=r,this.Zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new M0(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(Kn(n.toString()),Kn("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===n&&this.I_(r,s)},r=>{e(()=>{const s=new te($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(s)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.E_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return ee("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(ee("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wD extends V0{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=kN(this.serializer,e),r=function(i){if(!("targetChange"in i))return ge.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ge.min():o.readTime?Tn(o.readTime):ge.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=Uh(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=Nh(l)?{documents:NN(i,l)}:{query:DN(i,l).ct},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=R0(i,o.resumeToken);const u=Mh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ge.min())>0){a.readTime=Sc(i,o.snapshotVersion.toTimestamp());const u=Mh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=MN(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=Uh(this.serializer),n.removeTarget=e,this.c_(n)}}class TD extends V0{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return ke(!!e.streamToken),this.lastStreamToken=e.streamToken,ke(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){ke(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=xN(e.writeResults,e.commitTime),r=Tn(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=Uh(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ON(this.serializer,r))};this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new te($.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Oo(e,Vh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new te($.UNKNOWN,i.toString())})}ko(e,n,r,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.ko(e,Vh(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new te($.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class ID{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Kn(n),this.C_=!1):ee("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AD{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{_s(this)&&(ee("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=ye(l);u.k_.add(4),await Ko(u),u.K_.set("Unknown"),u.k_.delete(4),await _l(u)}(this))})}),this.K_=new ID(r,s)}}async function _l(t){if(_s(t))for(const e of t.q_)await e(!0)}async function Ko(t){for(const e of t.q_)await e(!1)}function F0(t,e){const n=ye(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),Xf(n)?Yf(n):Ti(n).s_()&&Qf(n,e))}function Gf(t,e){const n=ye(t),r=Ti(n);n.B_.delete(e),r.s_()&&U0(n,e),n.B_.size===0&&(r.s_()?r.a_():_s(n)&&n.K_.set("Unknown"))}function Qf(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ti(t).V_(e)}function U0(t,e){t.U_.xe(e),Ti(t).m_(e)}function Yf(t){t.U_=new bN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Ti(t).start(),t.K_.F_()}function Xf(t){return _s(t)&&!Ti(t).i_()&&t.B_.size>0}function _s(t){return ye(t).k_.size===0}function j0(t){t.U_=void 0}async function RD(t){t.K_.set("Online")}async function SD(t){t.B_.forEach((e,n)=>{Qf(t,e)})}async function PD(t,e){j0(t),Xf(t)?(t.K_.O_(e),Yf(t)):t.K_.set("Unknown")}async function CD(t,e,n){if(t.K_.set("Online"),e instanceof A0&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.B_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.B_.delete(a),s.U_.removeTarget(a))}(t,e)}catch(r){ee("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Cc(t,r)}else if(e instanceof Wa?t.U_.$e(e):e instanceof I0?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(ge.min()))try{const r=await L0(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.U_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.B_.get(u);h&&i.B_.set(u,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const h=i.B_.get(l);if(!h)return;i.B_.set(l,h.withResumeToken(ft.EMPTY_BYTE_STRING,h.snapshotVersion)),U0(i,l);const d=new yr(h.target,l,u,h.sequenceNumber);Qf(i,d)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){ee("RemoteStore","Failed to raise snapshot:",r),await Cc(t,r)}}async function Cc(t,e,n){if(!Ei(e))throw e;t.k_.add(1),await Ko(t),t.K_.set("Offline"),n||(n=()=>L0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await _l(t)})}function B0(t,e){return e().catch(n=>Cc(t,n,e))}async function yl(t){const e=ye(t),n=Nr(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;kD(e);)try{const s=await dD(e.localStore,r);if(s===null){e.L_.length===0&&n.a_();break}r=s.batchId,OD(e,s)}catch(s){await Cc(e,s)}$0(e)&&H0(e)}function kD(t){return _s(t)&&t.L_.length<10}function OD(t,e){t.L_.push(e);const n=Nr(t);n.s_()&&n.f_&&n.g_(e.mutations)}function $0(t){return _s(t)&&!Nr(t).i_()&&t.L_.length>0}function H0(t){Nr(t).start()}async function xD(t){Nr(t).w_()}async function ND(t){const e=Nr(t);for(const n of t.L_)e.g_(n.mutations)}async function DD(t,e,n){const r=t.L_.shift(),s=$f.from(r,e,n);await B0(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await yl(t)}async function LD(t,e){e&&Nr(t).f_&&await async function(r,s){if(function(o){return EN(o)&&o!==$.ABORTED}(s.code)){const i=r.L_.shift();Nr(r).__(),await B0(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await yl(r)}}(t,e),$0(t)&&H0(t)}async function Qg(t,e){const n=ye(t);n.asyncQueue.verifyOperationInProgress(),ee("RemoteStore","RemoteStore received new credentials");const r=_s(n);n.k_.add(3),await Ko(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await _l(n)}async function MD(t,e){const n=ye(t);e?(n.k_.delete(2),await _l(n)):e||(n.k_.add(2),await Ko(n),n.K_.set("Unknown"))}function Ti(t){return t.W_||(t.W_=function(n,r,s){const i=ye(n);return i.b_(),new wD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:RD.bind(null,t),mo:SD.bind(null,t),po:PD.bind(null,t),R_:CD.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),Xf(t)?Yf(t):t.K_.set("Unknown")):(await t.W_.stop(),j0(t))})),t.W_}function Nr(t){return t.G_||(t.G_=function(n,r,s){const i=ye(n);return i.b_(),new TD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:xD.bind(null,t),po:LD.bind(null,t),p_:ND.bind(null,t),y_:DD.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await yl(t)):(await t.G_.stop(),t.L_.length>0&&(ee("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Jf(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zf(t,e){if(Kn("AsyncQueue",`${e}: ${t}`),Ei(t))return new te($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{static emptySet(e){return new Gs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ce.comparator(n.key,r.key):(n,r)=>ce.comparator(n.key,r.key),this.keyedMap=Wi(),this.sortedSet=new Ge(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Gs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Gs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(){this.z_=new Ge(ce.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):me():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class hi{constructor(e,n,r,s,i,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new hi(e,n,Gs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class FD{constructor(){this.queries=Xg(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const s=ye(n),i=s.queries;s.queries=Xg(),i.forEach((o,a)=>{for(const l of a.J_)l.onError(r)})})(this,new te($.ABORTED,"Firestore shutting down"))}}function Xg(){return new ms(t=>h0(t),hl)}async function q0(t,e){const n=ye(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Y_()&&e.Z_()&&(r=2):(i=new VD,r=e.Z_()?0:1);try{switch(r){case 0:i.H_=await n.onListen(s,!0);break;case 1:i.H_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Zf(o,`Initialization of query '${xs(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.J_.push(e),e.ea(n.onlineState),i.H_&&e.ta(i.H_)&&ed(n)}async function z0(t,e){const n=ye(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.J_.indexOf(e);o>=0&&(i.J_.splice(o,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function UD(t,e){const n=ye(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.J_)a.ta(s)&&(r=!0);o.H_=s}}r&&ed(n)}function jD(t,e,n){const r=ye(t),s=r.queries.get(e);if(s)for(const i of s.J_)i.onError(n);r.queries.delete(e)}function ed(t){t.X_.forEach(e=>{e.next()})}var Bh,Jg;(Jg=Bh||(Bh={})).na="default",Jg.Cache="cache";class W0{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new hi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=hi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Bh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e){this.key=e}}class G0{constructor(e){this.key=e}}class BD{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=we(),this.mutatedKeys=we(),this.Va=f0(e),this.ma=new Gs(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new Yg,s=n?n.ma:this.ma;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,d)=>{const m=s.get(h),g=fl(this.query,d)?d:null,A=!!m&&this.mutatedKeys.has(m.key),O=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let N=!1;m&&g?m.data.isEqual(g.data)?A!==O&&(r.track({type:3,doc:g}),N=!0):this.ya(m,g)||(r.track({type:2,doc:g}),N=!0,(l&&this.Va(g,l)>0||u&&this.Va(g,u)<0)&&(a=!0)):!m&&g?(r.track({type:0,doc:g}),N=!0):m&&!g&&(r.track({type:1,doc:m}),N=!0,(l||u)&&(a=!0)),N&&(g?(o=o.add(g),i=O?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{ma:o,pa:r,ss:a,mutatedKeys:i}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((h,d)=>function(g,A){const O=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me()}};return O(g)-O(A)}(h.type,d.type)||this.Va(h.doc,d.doc)),this.wa(r),s=s!=null&&s;const a=n&&!s?this.Sa():[],l=this.Ra.size===0&&this.current&&!s?1:0,u=l!==this.Aa;return this.Aa=l,o.length!==0||u?{snapshot:new hi(this.query,e.ma,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:a}:{ba:a}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Yg,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=we(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new G0(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new K0(r))}),n}va(e){this.da=e.ds,this.Ra=we();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return hi.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class $D{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class HD{constructor(e){this.key=e,this.Fa=!1}}class qD{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new ms(a=>h0(a),hl),this.Oa=new Map,this.Na=new Set,this.La=new Ge(ce.comparator),this.Ba=new Map,this.ka=new zf,this.qa={},this.Qa=new Map,this.Ka=ui.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function zD(t,e,n=!0){const r=ew(t);let s;const i=r.xa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await Q0(r,e,n,!0),s}async function WD(t,e){const n=ew(t);await Q0(n,e,!0,!1)}async function Q0(t,e,n,r){const s=await pD(t.localStore,En(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await KD(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&F0(t.remoteStore,s),a}async function KD(t,e,n,r,s){t.Ua=(d,m,g)=>async function(O,N,x,P){let y=N.view.ga(x);y.ss&&(y=await Wg(O.localStore,N.query,!1).then(({documents:b})=>N.view.ga(b,y)));const S=P&&P.targetChanges.get(N.targetId),D=P&&P.targetMismatches.get(N.targetId)!=null,V=N.view.applyChanges(y,O.isPrimaryClient,S,D);return e_(O,N.targetId,V.ba),V.snapshot}(t,d,m,g);const i=await Wg(t.localStore,e,!0),o=new BD(e,i.ds),a=o.ga(i.documents),l=Wo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,l);e_(t,n,u.ba);const h=new $D(e,n,o);return t.xa.set(e,h),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),u.snapshot}async function GD(t,e,n){const r=ye(t),s=r.xa.get(e),i=r.Oa.get(s.targetId);if(i.length>1)return r.Oa.set(s.targetId,i.filter(o=>!hl(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await jh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Gf(r.remoteStore,s.targetId),$h(r,s.targetId)}).catch(vi)):($h(r,s.targetId),await jh(r.localStore,s.targetId,!0))}async function QD(t,e){const n=ye(t),r=n.xa.get(e),s=n.Oa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Gf(n.remoteStore,r.targetId))}async function YD(t,e,n){const r=rL(t);try{const s=await function(o,a){const l=ye(o),u=nt.now(),h=a.reduce((g,A)=>g.add(A.key),we());let d,m;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let A=Gn(),O=we();return l.hs.getEntries(g,h).next(N=>{A=N,A.forEach((x,P)=>{P.isValidDocument()||(O=O.add(x))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,A)).next(N=>{d=N;const x=[];for(const P of a){const y=mN(P,d.get(P.key).overlayedDocument);y!=null&&x.push(new gs(P.key,y,r0(y.value.mapValue),wn.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,x,a)}).next(N=>{m=N;const x=N.applyToLocalDocumentSet(d,O);return l.documentOverlayCache.saveOverlays(g,N.batchId,x)})}).then(()=>({batchId:m.batchId,changes:p0(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let u=o.qa[o.currentUser.toKey()];u||(u=new Ge(be)),u=u.insert(a,l),o.qa[o.currentUser.toKey()]=u}(r,s.batchId,n),await Go(r,s.changes),await yl(r.remoteStore)}catch(s){const i=Zf(s,"Failed to persist write");n.reject(i)}}async function Y0(t,e){const n=ye(t);try{const r=await hD(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ba.get(i);o&&(ke(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Fa=!0:s.modifiedDocuments.size>0?ke(o.Fa):s.removedDocuments.size>0&&(ke(o.Fa),o.Fa=!1))}),await Go(n,r,e)}catch(r){await vi(r)}}function Zg(t,e,n){const r=ye(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.xa.forEach((i,o)=>{const a=o.view.ea(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=ye(o);l.onlineState=a;let u=!1;l.queries.forEach((h,d)=>{for(const m of d.J_)m.ea(a)&&(u=!0)}),u&&ed(l)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function XD(t,e,n){const r=ye(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ba.get(e),i=s&&s.key;if(i){let o=new Ge(ce.comparator);o=o.insert(i,wt.newNoDocument(i,ge.min()));const a=we().add(i),l=new ml(ge.min(),new Map,new Ge(be),o,a);await Y0(r,l),r.La=r.La.remove(i),r.Ba.delete(e),td(r)}else await jh(r.localStore,e,!1).then(()=>$h(r,e,n)).catch(vi)}async function JD(t,e){const n=ye(t),r=e.batch.batchId;try{const s=await uD(n.localStore,e);J0(n,r,null),X0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Go(n,s)}catch(s){await vi(s)}}async function ZD(t,e,n){const r=ye(t);try{const s=await function(o,a){const l=ye(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(ke(d!==null),h=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);J0(r,e,n),X0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Go(r,s)}catch(s){await vi(s)}}function X0(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function J0(t,e,n){const r=ye(t);let s=r.qa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function $h(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||Z0(t,r)})}function Z0(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(Gf(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),td(t))}function e_(t,e,n){for(const r of n)r instanceof K0?(t.ka.addReference(r.key,e),eL(t,r)):r instanceof G0?(ee("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||Z0(t,r.key)):me()}function eL(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(ee("SyncEngine","New document in limbo: "+n),t.Na.add(r),td(t))}function td(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new ce(Ue.fromString(e)),r=t.Ka.next();t.Ba.set(r,new HD(n)),t.La=t.La.insert(n,r),F0(t.remoteStore,new yr(En(Uf(n.path)),r,"TargetPurposeLimboResolution",cl.oe))}}async function Go(t,e,n){const r=ye(t),s=[],i=[],o=[];r.xa.isEmpty()||(r.xa.forEach((a,l)=>{o.push(r.Ua(l,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const d=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){s.push(u);const d=Kf.zi(l.targetId,u);i.push(d)}}))}),await Promise.all(o),r.Ma.R_(s),await async function(l,u){const h=ye(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>B.forEach(u,m=>B.forEach(m.Wi,g=>h.persistence.referenceDelegate.addReference(d,m.targetId,g)).next(()=>B.forEach(m.Gi,g=>h.persistence.referenceDelegate.removeReference(d,m.targetId,g)))))}catch(d){if(!Ei(d))throw d;ee("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const m=d.targetId;if(!d.fromCache){const g=h.us.get(m),A=g.snapshotVersion,O=g.withLastLimboFreeSnapshotVersion(A);h.us=h.us.insert(m,O)}}}(r.localStore,i))}async function tL(t,e){const n=ye(t);if(!n.currentUser.isEqual(e)){ee("SyncEngine","User change. New user:",e.toKey());const r=await D0(n.localStore,e);n.currentUser=e,function(i,o){i.Qa.forEach(a=>{a.forEach(l=>{l.reject(new te($.CANCELLED,o))})}),i.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Go(n,r.Ts)}}function nL(t,e){const n=ye(t),r=n.Ba.get(e);if(r&&r.Fa)return we().add(r.key);{let s=we();const i=n.Oa.get(e);if(!i)return s;for(const o of i){const a=n.xa.get(o);s=s.unionWith(a.view.fa)}return s}}function ew(t){const e=ye(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Y0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=XD.bind(null,e),e.Ma.R_=UD.bind(null,e.eventManager),e.Ma.Wa=jD.bind(null,e.eventManager),e}function rL(t){const e=ye(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=JD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ZD.bind(null,e),e}class kc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=gl(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return lD(this.persistence,new aD,e.initialUser,this.serializer)}ja(e){return new N0(Wf.ei,this.serializer)}za(e){return new gD}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}kc.provider={build:()=>new kc};class sL extends kc{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){ke(this.persistence.referenceDelegate instanceof Pc);const r=this.persistence.referenceDelegate.garbageCollector;return new WN(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?Vt.withCacheSize(this.cacheSizeBytes):Vt.DEFAULT;return new N0(r=>Pc.ei(r,n),this.serializer)}}class Hh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Zg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=tL.bind(null,this.syncEngine),await MD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new FD}()}createDatastore(e){const n=gl(e.databaseInfo.databaseId),r=function(i){return new ED(i)}(e.databaseInfo);return function(i,o,a,l){return new bD(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new AD(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Zg(this.syncEngine,n,0),function(){return Gg.p()?new Gg:new _D}())}createSyncEngine(e,n){return function(s,i,o,a,l,u,h){const d=new qD(s,i,o,a,l,u);return h&&(d.$a=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ye(s);ee("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await Ko(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Hh.provider={build:()=>new Hh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Kn("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iL{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=yt.UNAUTHENTICATED,this.clientId=e0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ee("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ee("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Zf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function wu(t,e){t.asyncQueue.verifyOperationInProgress(),ee("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await D0(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function t_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await oL(t);ee("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Qg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Qg(e.remoteStore,s)),t._onlineComponents=e}async function oL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee("FirestoreClient","Using user provided OfflineComponentProvider");try{await wu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===$.FAILED_PRECONDITION||s.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;oi("Error using user provided cache. Falling back to memory cache: "+n),await wu(t,new kc)}}else ee("FirestoreClient","Using default OfflineComponentProvider"),await wu(t,new sL(void 0));return t._offlineComponents}async function nw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee("FirestoreClient","Using user provided OnlineComponentProvider"),await t_(t,t._uninitializedComponentsProvider._online)):(ee("FirestoreClient","Using default OnlineComponentProvider"),await t_(t,new Hh))),t._onlineComponents}function aL(t){return nw(t).then(e=>e.syncEngine)}async function rw(t){const e=await nw(t),n=e.eventManager;return n.onListen=zD.bind(null,e.syncEngine),n.onUnlisten=GD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=WD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=QD.bind(null,e.syncEngine),n}function cL(t,e,n={}){const r=new Bn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const h=new tw({next:m=>{h.eu(),o.enqueueAndForget(()=>z0(i,d));const g=m.docs.has(a);!g&&m.fromCache?u.reject(new te($.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&m.fromCache&&l&&l.source==="server"?u.reject(new te($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),d=new W0(Uf(a.path),h,{includeMetadataChanges:!0,ua:!0});return q0(i,d)}(await rw(t),t.asyncQueue,e,n,r)),r.promise}function lL(t,e,n={}){const r=new Bn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const h=new tw({next:m=>{h.eu(),o.enqueueAndForget(()=>z0(i,d)),m.fromCache&&l.source==="server"?u.reject(new te($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),d=new W0(a,h,{includeMetadataChanges:!0,ua:!0});return q0(i,d)}(await rw(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw(t,e,n){if(!n)throw new te($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function uL(t,e,n,r){if(e===!0&&r===!0)throw new te($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function r_(t){if(!ce.isDocumentKey(t))throw new te($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function s_(t){if(ce.isDocumentKey(t))throw new te($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function vl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":me()}function us(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new te($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vl(t);throw new te($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new te($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new te($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}uL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new te($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new te($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new te($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class El{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new i_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new i_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Tx;switch(r.type){case"firstParty":return new Rx(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=n_.get(n);r&&(ee("ComponentProvider","Removing Datastore"),n_.delete(n),r.terminate())}(this),Promise.resolve()}}function hL(t,e,n,r={}){var s;const i=(t=us(t,El))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&oi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=yt.MOCK_USER;else{a=Yk(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new te($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new yt(u)}t._authCredentials=new bx(new ZE(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ys(this.firestore,e,this._query)}}class Wt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Wt(this.firestore,e,this._key)}}class Ir extends ys{constructor(e,n,r){super(e,n,Uf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Wt(this.firestore,null,new ce(e))}withConverter(e){return new Ir(this.firestore,e,this._path)}}function f2(t,e,...n){if(t=xt(t),iw("collection","path",e),t instanceof El){const r=Ue.fromString(e,...n);return s_(r),new Ir(t,null,r)}{if(!(t instanceof Wt||t instanceof Ir))throw new te($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ue.fromString(e,...n));return s_(r),new Ir(t.firestore,null,r)}}function fL(t,e,...n){if(t=xt(t),arguments.length===1&&(e=e0.newId()),iw("doc","path",e),t instanceof El){const r=Ue.fromString(e,...n);return r_(r),new Wt(t,null,new ce(r))}{if(!(t instanceof Wt||t instanceof Ir))throw new te($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ue.fromString(e,...n));return r_(r),new Wt(t.firestore,t instanceof Ir?t.converter:null,new ce(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new M0(this,"async_queue_retry"),this.fu=()=>{const r=Eu();r&&ee("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=Eu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=Eu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new Bn;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Ei(e))throw e;ee("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Kn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const s=Jf.createAndSchedule(this,e,n,r,i=>this.Su(i));return this.du.push(s),s}pu(){this.Au&&me()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class Qo extends El{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new o_,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new o_(e),this._firestoreClient=void 0,await e}}}function dL(t,e){const n=typeof t=="object"?t:qE(),r=typeof t=="string"?t:"(default)",s=Nf(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Gk("firestore");i&&hL(s,...i)}return s}function nd(t){if(t._terminated)throw new te($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||pL(t),t._firestoreClient}function pL(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,u,h){return new Bx(a,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,sw(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new iL(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fi(ft.fromBase64String(e))}catch(n){throw new te($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new fi(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new te($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new te($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new te($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mL=/^__.*__$/;class gL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new gs(e,this.data,this.fieldMask,n,this.fieldTransforms):new zo(e,this.data,n,this.fieldTransforms)}}function aw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me()}}class od{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new od(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Lu(e),s}Bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Oc(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(aw(this.Mu)&&mL.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class _L{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||gl(e)}$u(e,n,r,s=!1){return new od({Mu:e,methodName:n,Ku:r,path:ht.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cw(t){const e=t._freezeSettings(),n=gl(t._databaseId);return new _L(t._databaseId,!!e.ignoreUndefinedProperties,n)}function yL(t,e,n,r,s,i={}){const o=t.$u(i.merge||i.mergeFields?2:0,e,n,s);hw("Data must be an object, but it was:",o,r);const a=lw(r,o);let l,u;if(i.merge)l=new an(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const m=EL(e,d,n);if(!o.contains(m))throw new te($.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);TL(h,m)||h.push(m)}l=new an(h),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new gL(new Jt(a),l,u)}function vL(t,e,n,r=!1){return ad(n,t.$u(r?4:3,e))}function ad(t,e){if(uw(t=xt(t)))return hw("Unsupported field value:",e,t),lw(t,e);if(t instanceof ow)return function(r,s){if(!aw(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=ad(a,s.ku(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=xt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return lN(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=nt.fromDate(r);return{timestampValue:Sc(s.serializer,i)}}if(r instanceof nt){const i=new nt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Sc(s.serializer,i)}}if(r instanceof sd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof fi)return{bytesValue:R0(s.serializer,r._byteString)};if(r instanceof Wt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:qf(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof id)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.qu("VectorValues must only contain numeric values.");return jf(a.serializer,l)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${vl(r)}`)}(t,e)}function lw(t,e){const n={};return t0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ps(t,(r,s)=>{const i=ad(s,e.Ou(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function uw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof nt||t instanceof sd||t instanceof fi||t instanceof Wt||t instanceof ow||t instanceof id)}function hw(t,e,n){if(!uw(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=vl(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function EL(t,e,n){if((e=xt(e))instanceof rd)return e._internalPath;if(typeof e=="string")return fw(t,e);throw Oc("Field path arguments must be of type string or ",t,!1,void 0,n)}const wL=new RegExp("[~\\*/\\[\\]]");function fw(t,e,n){if(e.search(wL)>=0)throw Oc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new rd(...e.split("."))._internalPath}catch{throw Oc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Oc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new te($.INVALID_ARGUMENT,a+t+l)}function TL(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(cd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class bL extends dw{data(){return super.data()}}function cd(t,e){return typeof e=="string"?fw(t,e):e instanceof rd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IL(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new te($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ld{}class pw extends ld{}function d2(t,e,...n){let r=[];e instanceof ld&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof hd).length,a=i.filter(l=>l instanceof ud).length;if(o>1||o>0&&a>0)throw new te($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class ud extends pw{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ud(e,n,r)}_apply(e){const n=this._parse(e);return mw(e._query,n),new ys(e.firestore,e.converter,Dh(e._query,n))}_parse(e){const n=cw(e.firestore);return function(i,o,a,l,u,h,d){let m;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new te($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){c_(d,h);const g=[];for(const A of d)g.push(a_(l,i,A));m={arrayValue:{values:g}}}else m=a_(l,i,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||c_(d,h),m=vL(a,o,d,h==="in"||h==="not-in");return Je.create(u,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class hd extends ld{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new hd(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:hn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)mw(o,l),o=Dh(o,l)}(e._query,n),new ys(e.firestore,e.converter,Dh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class fd extends pw{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new fd(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new te($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new te($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Po(i,o)}(e._query,this._field,this._direction);return new ys(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new wi(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function p2(t,e="asc"){const n=e,r=cd("orderBy",t);return fd._create(r,n)}function a_(t,e,n){if(typeof(n=xt(n))=="string"){if(n==="")throw new te($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!u0(e)&&n.indexOf("/")!==-1)throw new te($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ue.fromString(n));if(!ce.isDocumentKey(r))throw new te($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Pg(t,new ce(r))}if(n instanceof Wt)return Pg(t,n._key);throw new te($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vl(n)}.`)}function c_(t,e){if(!Array.isArray(t)||t.length===0)throw new te($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function mw(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new te($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class AL{convertValue(e,n="none"){switch(xr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Or(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw me()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ps(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ye(o.doubleValue));return new id(i)}convertGeoPoint(e){return new sd(Ye(e.latitude),Ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ul(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ao(e));default:return null}}convertTimestamp(e){const n=kr(e);return new nt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ue.fromString(e);ke(x0(r));const s=new Ro(r.get(1),r.get(3)),i=new ce(r.popFirst(5));return s.isEqual(n)||Kn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RL(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gw extends dw{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ka(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(cd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ka extends gw{data(e={}){return super.data(e)}}class SL{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Gi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ka(this._firestore,this._userDataWriter,r.key,r,new Gi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new te($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new Ka(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Gi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new Ka(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Gi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:PL(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function PL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m2(t){t=us(t,Wt);const e=us(t.firestore,Qo);return cL(nd(e),t._key).then(n=>CL(e,t,n))}class _w extends AL{constructor(e){super(),this.firestore=e}convertBytes(e){return new fi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Wt(this.firestore,null,n)}}function g2(t){t=us(t,ys);const e=us(t.firestore,Qo),n=nd(e),r=new _w(e);return IL(t._query),lL(n,t._query).then(s=>new SL(e,r,t,s))}function _2(t){return yw(us(t.firestore,Qo),[new Bf(t._key,wn.none())])}function y2(t,e){const n=us(t.firestore,Qo),r=fL(t),s=RL(t.converter,e);return yw(n,[yL(cw(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,wn.exists(!1))]).then(()=>r)}function yw(t,e){return function(r,s){const i=new Bn;return r.asyncQueue.enqueueAndForget(async()=>YD(await aL(r),s,i)),i.promise}(nd(t),e)}function CL(t,e,n){const r=n.docs.get(e._key),s=new _w(t);return new gw(t,s,e._key,r,new Gi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){yi=s})(_i),ii(new cs("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Qo(new Ix(r.getProvider("auth-internal")),new Px(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new te($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ro(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),br(Tg,"4.7.5",e),br(Tg,"4.7.5","esm2017")})();function dd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function vw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kL=vw,Ew=new Ho("auth","Firebase",vw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc=new Of("@firebase/auth");function OL(t,...e){xc.logLevel<=Ee.WARN&&xc.warn(`Auth (${_i}): ${t}`,...e)}function Ga(t,...e){xc.logLevel<=Ee.ERROR&&xc.error(`Auth (${_i}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t,...e){throw pd(t,...e)}function bn(t,...e){return pd(t,...e)}function ww(t,e,n){const r=Object.assign(Object.assign({},kL()),{[e]:n});return new Ho("auth","Firebase",r).create(e,{appName:t.name})}function $n(t){return ww(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ew.create(t,...e)}function de(t,e,...n){if(!t)throw pd(e,...n)}function Fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ga(e),new Error(e)}function Qn(t,e){t||Fn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function xL(){return l_()==="http:"||l_()==="https:"}function l_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NL(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xL()||eO()||"connection"in navigator)?navigator.onLine:!0}function DL(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qn(n>e,"Short delay should be less than long delay!"),this.isMobile=Xk()||tO()}get(){return NL()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(t,e){Qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LL={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ML=new Yo(3e4,6e4);function Ur(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function er(t,e,n,r,s={}){return bw(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=qo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},i);return Zk()||(u.referrerPolicy="no-referrer"),Tw.fetch()(Iw(t,t.config.apiHost,n,a),u)})}async function bw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},LL),e);try{const s=new FL(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Na(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Na(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Na(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Na(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ww(t,h,u);fn(t,h)}}catch(s){if(s instanceof Zn)throw s;fn(t,"network-request-failed",{message:String(s)})}}async function Xo(t,e,n,r,s={}){const i=await er(t,e,n,r,s);return"mfaPendingCredential"in i&&fn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Iw(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?md(t.config,s):`${t.config.apiScheme}://${s}`}function VL(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class FL{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(bn(this.auth,"network-request-failed")),ML.get())})}}function Na(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=bn(t,e,r);return s.customData._tokenResponse=n,s}function u_(t){return t!==void 0&&t.enterprise!==void 0}class UL{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return VL(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function jL(t,e){return er(t,"GET","/v2/recaptchaConfig",Ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BL(t,e){return er(t,"POST","/v1/accounts:delete",e)}async function Aw(t,e){return er(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $L(t,e=!1){const n=xt(t),r=await n.getIdToken(e),s=gd(r);de(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:uo(Tu(s.auth_time)),issuedAtTime:uo(Tu(s.iat)),expirationTime:uo(Tu(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Tu(t){return Number(t)*1e3}function gd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ga("JWT malformed, contained fewer than 3 sections"),null;try{const s=VE(n);return s?JSON.parse(s):(Ga("Failed to decode base64 JWT payload"),null)}catch(s){return Ga("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function h_(t){const e=gd(t);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function di(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Zn&&HL(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function HL({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qL{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=uo(this.lastLoginAt),this.creationTime=uo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nc(t){var e;const n=t.auth,r=await t.getIdToken(),s=await di(t,Aw(n,{idToken:r}));de(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Rw(i.providerUserInfo):[],a=WL(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new zh(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function zL(t){const e=xt(t);await Nc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function WL(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Rw(t){return t.map(e=>{var{providerId:n}=e,r=dd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KL(t,e){const n=await bw(t,{},async()=>{const r=qo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Iw(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Tw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function GL(t,e){return er(t,"POST","/v2/accounts:revokeToken",Ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):h_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){de(e.length!==0,"internal-error");const n=h_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await KL(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Qs;return r&&(de(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(de(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(de(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qs,this.toJSON())}_performRefresh(){return Fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t,e){de(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Un{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=dd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qL(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new zh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await di(this,this.stsTokenManager.getToken(this.auth,e));return de(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $L(this,e)}reload(){return zL(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Un(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Nc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yn(this.auth.app))return Promise.reject($n(this.auth));const e=await this.getIdToken();return await di(this,BL(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,u,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,x=(u=n.createdAt)!==null&&u!==void 0?u:void 0,P=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:y,emailVerified:S,isAnonymous:D,providerData:V,stsTokenManager:b}=n;de(y&&b,e,"internal-error");const E=Qs.fromJSON(this.name,b);de(typeof y=="string",e,"internal-error"),cr(d,e.name),cr(m,e.name),de(typeof S=="boolean",e,"internal-error"),de(typeof D=="boolean",e,"internal-error"),cr(g,e.name),cr(A,e.name),cr(O,e.name),cr(N,e.name),cr(x,e.name),cr(P,e.name);const v=new Un({uid:y,auth:e,email:m,emailVerified:S,displayName:d,isAnonymous:D,photoURL:A,phoneNumber:g,tenantId:O,stsTokenManager:E,createdAt:x,lastLoginAt:P});return V&&Array.isArray(V)&&(v.providerData=V.map(w=>Object.assign({},w))),N&&(v._redirectEventId=N),v}static async _fromIdTokenResponse(e,n,r=!1){const s=new Qs;s.updateFromServerResponse(n);const i=new Un({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Nc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];de(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Rw(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Qs;a.updateFromIdToken(r);const l=new Un({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new zh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_=new Map;function jn(t){Qn(t instanceof Function,"Expected a class definition");let e=f_.get(t);return e?(Qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,f_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Sw.type="NONE";const d_=Sw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(t,e,n){return`firebase:${t}:${e}:${n}`}class Ys{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Qa(this.userKey,s.apiKey,i),this.fullPersistenceKey=Qa("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Un._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ys(jn(d_),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||jn(d_);const o=Qa(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const d=Un._fromJSON(e,h);u!==i&&(a=d),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Ys(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ys(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ow(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Nw(e))return"Blackberry";if(Dw(e))return"Webos";if(Cw(e))return"Safari";if((e.includes("chrome/")||kw(e))&&!e.includes("edge/"))return"Chrome";if(xw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Pw(t=It()){return/firefox\//i.test(t)}function Cw(t=It()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kw(t=It()){return/crios\//i.test(t)}function Ow(t=It()){return/iemobile/i.test(t)}function xw(t=It()){return/android/i.test(t)}function Nw(t=It()){return/blackberry/i.test(t)}function Dw(t=It()){return/webos/i.test(t)}function _d(t=It()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function QL(t=It()){var e;return _d(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function YL(){return nO()&&document.documentMode===10}function Lw(t=It()){return _d(t)||xw(t)||Dw(t)||Nw(t)||/windows phone/i.test(t)||Ow(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(t,e=[]){let n;switch(t){case"Browser":n=p_(It());break;case"Worker":n=`${p_(It())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${_i}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XL{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JL(t,e={}){return er(t,"GET","/v2/passwordPolicy",Ur(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZL=6;class eM{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ZL,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new m_(this),this.idTokenSubscription=new m_(this),this.beforeStateQueue=new XL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ew,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=jn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ys.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Aw(this,{idToken:e}),r=await Un._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(yn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Nc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=DL()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(yn(this.app))return Promise.reject($n(this));const n=e?xt(e):null;return n&&de(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return yn(this.app)?Promise.reject($n(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return yn(this.app)?Promise.reject($n(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await JL(this),n=new eM(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ho("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await GL(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&jn(e)||this._popupRedirectResolver;de(n,this,"argument-error"),this.redirectPersistenceManager=await Ys.create(this,[jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&OL(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function vs(t){return xt(t)}class m_{constructor(e){this.auth=e,this.observer=null,this.addObserver=uO(n=>this.observer=n)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function nM(t){wl=t}function Vw(t){return wl.loadJS(t)}function rM(){return wl.recaptchaEnterpriseScript}function sM(){return wl.gapiScript}function iM(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class oM{constructor(){this.enterprise=new aM}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class aM{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const cM="recaptcha-enterprise",Fw="NO_RECAPTCHA";class lM{constructor(e){this.type=cM,this.auth=vs(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{jL(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new UL(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;u_(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Fw)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new oM().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&u_(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=rM();l.length!==0&&(l+=a),Vw(l).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function g_(t,e,n,r=!1,s=!1){const i=new lM(t);let o;if(s)o=Fw;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Wh(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await g_(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await g_(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uM(t,e){const n=Nf(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(wc(i,e??{}))return s;fn(s,"already-initialized")}return n.initialize({options:e})}function hM(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(jn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function fM(t,e,n){const r=vs(t);de(r._canInitEmulator,r,"emulator-config-failed"),de(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Uw(e),{host:o,port:a}=dM(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),pM()}function Uw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function dM(t){const e=Uw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:__(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:__(o)}}}function __(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function pM(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Fn("not implemented")}_getIdTokenResponse(e){return Fn("not implemented")}_linkToIdToken(e,n){return Fn("not implemented")}_getReauthenticationResolver(e){return Fn("not implemented")}}async function mM(t,e){return er(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gM(t,e){return Xo(t,"POST","/v1/accounts:signInWithPassword",Ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _M(t,e){return Xo(t,"POST","/v1/accounts:signInWithEmailLink",Ur(t,e))}async function yM(t,e){return Xo(t,"POST","/v1/accounts:signInWithEmailLink",Ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo extends yd{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Oo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Oo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wh(e,n,"signInWithPassword",gM);case"emailLink":return _M(e,{email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wh(e,r,"signUpPassword",mM);case"emailLink":return yM(e,{idToken:n,email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xs(t,e){return Xo(t,"POST","/v1/accounts:signInWithIdp",Ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vM="http://localhost";class hs extends yd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=dd(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new hs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Xs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Xs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xs(e,n)}buildRequest(){const e={requestUri:vM,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EM(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function wM(t){const e=Hi(qi(t)).link,n=e?Hi(qi(e)).deep_link_id:null,r=Hi(qi(t)).deep_link_id;return(r?Hi(qi(r)).link:null)||r||n||e||t}class vd{constructor(e){var n,r,s,i,o,a;const l=Hi(qi(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,d=EM((s=l.mode)!==null&&s!==void 0?s:null);de(u&&h&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=h,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=wM(e);try{return new vd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(){this.providerId=bi.PROVIDER_ID}static credential(e,n){return Oo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=vd.parseLink(n);return de(r,"argument-error"),Oo._fromEmailAndCode(e,r.code,r.tenantId)}}bi.PROVIDER_ID="password";bi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";bi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo extends jw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends Jo{constructor(){super("facebook.com")}static credential(e){return hs._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pr.credential(e.oauthAccessToken)}catch{return null}}}pr.FACEBOOK_SIGN_IN_METHOD="facebook.com";pr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends Jo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hs._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return mr.credential(n,r)}catch{return null}}}mr.GOOGLE_SIGN_IN_METHOD="google.com";mr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends Jo{constructor(){super("github.com")}static credential(e){return hs._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gr.credential(e.oauthAccessToken)}catch{return null}}}gr.GITHUB_SIGN_IN_METHOD="github.com";gr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends Jo{constructor(){super("twitter.com")}static credential(e,n){return hs._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return _r.credential(n,r)}catch{return null}}}_r.TWITTER_SIGN_IN_METHOD="twitter.com";_r.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TM(t,e){return Xo(t,"POST","/v1/accounts:signUp",Ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Un._fromIdTokenResponse(e,r,s),o=y_(r);return new fs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=y_(r);return new fs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function y_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc extends Zn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Dc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Dc(e,n,r,s)}}function Bw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Dc._fromErrorAndOperation(t,i,e,r):i})}async function bM(t,e,n=!1){const r=await di(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IM(t,e,n=!1){const{auth:r}=t;if(yn(r.app))return Promise.reject($n(r));const s="reauthenticate";try{const i=await di(t,Bw(r,s,e,t),n);de(i.idToken,r,"internal-error");const o=gd(i.idToken);de(o,r,"internal-error");const{sub:a}=o;return de(t.uid===a,r,"user-mismatch"),fs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&fn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $w(t,e,n=!1){if(yn(t.app))return Promise.reject($n(t));const r="signIn",s=await Bw(t,r,e),i=await fs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function AM(t,e){return $w(vs(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hw(t){const e=vs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function v2(t,e,n){if(yn(t.app))return Promise.reject($n(t));const r=vs(t),o=await Wh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",TM).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Hw(t),l}),a=await fs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function E2(t,e,n){return yn(t.app)?Promise.reject($n(t)):AM(xt(t),bi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Hw(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RM(t,e){return er(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w2(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=xt(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await di(r,RM(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function SM(t,e,n,r){return xt(t).onIdTokenChanged(e,n,r)}function PM(t,e,n){return xt(t).beforeAuthStateChanged(e,n)}function CM(t){return xt(t).signOut()}const Lc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Lc,"1"),this.storage.removeItem(Lc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kM=1e3,OM=10;class zw extends qw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Lw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);YL()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,OM):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},kM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}zw.type="LOCAL";const xM=zw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww extends qw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ww.type="SESSION";const Kw=Ww;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NM(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Tl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await NM(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Tl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=Ed("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const m=d;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(m.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(){return window}function LM(t){In().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(){return typeof In().WorkerGlobalScope<"u"&&typeof In().importScripts=="function"}async function MM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function VM(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function FM(){return Gw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw="firebaseLocalStorageDb",UM=1,Mc="firebaseLocalStorage",Yw="fbase_key";class Zo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bl(t,e){return t.transaction([Mc],e?"readwrite":"readonly").objectStore(Mc)}function jM(){const t=indexedDB.deleteDatabase(Qw);return new Zo(t).toPromise()}function Kh(){const t=indexedDB.open(Qw,UM);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Mc,{keyPath:Yw})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Mc)?e(r):(r.close(),await jM(),e(await Kh()))})})}async function v_(t,e,n){const r=bl(t,!0).put({[Yw]:e,value:n});return new Zo(r).toPromise()}async function BM(t,e){const n=bl(t,!1).get(e),r=await new Zo(n).toPromise();return r===void 0?null:r.value}function E_(t,e){const n=bl(t,!0).delete(e);return new Zo(n).toPromise()}const $M=800,HM=3;class Xw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Kh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>HM)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Tl._getInstance(FM()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await MM(),!this.activeServiceWorker)return;this.sender=new DM(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||VM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Kh();return await v_(e,Lc,"1"),await E_(e,Lc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>v_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>BM(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>E_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=bl(s,!1).getAll();return new Zo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$M)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xw.type="LOCAL";const qM=Xw;new Yo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zM(t,e){return e?jn(e):(de(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd extends yd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function WM(t){return $w(t.auth,new wd(t),t.bypassAuthState)}function KM(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),IM(n,new wd(t),t.bypassAuthState)}async function GM(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),bM(n,new wd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return WM;case"linkViaPopup":case"linkViaRedirect":return GM;case"reauthViaPopup":case"reauthViaRedirect":return KM;default:fn(this.auth,"internal-error")}}resolve(e){Qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QM=new Yo(2e3,1e4);class Fs extends Jw{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Fs.currentPopupAction&&Fs.currentPopupAction.cancel(),Fs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){Qn(this.filter.length===1,"Popup operations only handle one event");const e=Ed();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,QM.get())};e()}}Fs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YM="pendingRedirect",Ya=new Map;class XM extends Jw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ya.get(this.auth._key());if(!e){try{const r=await JM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ya.set(this.auth._key(),e)}return this.bypassAuthState||Ya.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function JM(t,e){const n=tV(e),r=eV(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function ZM(t,e){Ya.set(t._key(),e)}function eV(t){return jn(t._redirectPersistence)}function tV(t){return Qa(YM,t.config.apiKey,t.name)}async function nV(t,e,n=!1){if(yn(t.app))return Promise.reject($n(t));const r=vs(t),s=zM(r,e),o=await new XM(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rV=10*60*1e3;class sV{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!iV(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Zw(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(bn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rV&&this.cachedEventUids.clear(),this.cachedEventUids.has(w_(e))}saveEventToCache(e){this.cachedEventUids.add(w_(e)),this.lastProcessedEventTime=Date.now()}}function w_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Zw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function iV(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oV(t,e={}){return er(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aV=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cV=/^https?/;async function lV(t){if(t.config.emulator)return;const{authorizedDomains:e}=await oV(t);for(const n of e)try{if(uV(n))return}catch{}fn(t,"unauthorized-domain")}function uV(t){const e=qh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!cV.test(n))return!1;if(aV.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hV=new Yo(3e4,6e4);function T_(){const t=In().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function fV(t){return new Promise((e,n)=>{var r,s,i;function o(){T_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{T_(),n(bn(t,"network-request-failed"))},timeout:hV.get()})}if(!((s=(r=In().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=In().gapi)===null||i===void 0)&&i.load)o();else{const a=iM("iframefcb");return In()[a]=()=>{gapi.load?o():n(bn(t,"network-request-failed"))},Vw(`${sM()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Xa=null,e})}let Xa=null;function dV(t){return Xa=Xa||fV(t),Xa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pV=new Yo(5e3,15e3),mV="__/auth/iframe",gV="emulator/auth/iframe",_V={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yV=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vV(t){const e=t.config;de(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?md(e,gV):`https://${t.config.authDomain}/${mV}`,r={apiKey:e.apiKey,appName:t.name,v:_i},s=yV.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${qo(r).slice(1)}`}async function EV(t){const e=await dV(t),n=In().gapi;return de(n,t,"internal-error"),e.open({where:document.body,url:vV(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_V,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=bn(t,"network-request-failed"),a=In().setTimeout(()=>{i(o)},pV.get());function l(){In().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wV={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},TV=500,bV=600,IV="_blank",AV="http://localhost";class b_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function RV(t,e,n,r=TV,s=bV){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},wV),{width:r.toString(),height:s.toString(),top:i,left:o}),u=It().toLowerCase();n&&(a=kw(u)?IV:n),Pw(u)&&(e=e||AV,l.scrollbars="yes");const h=Object.entries(l).reduce((m,[g,A])=>`${m}${g}=${A},`,"");if(QL(u)&&a!=="_self")return SV(e||"",a),new b_(null);const d=window.open(e||"",a,h);de(d,t,"popup-blocked");try{d.focus()}catch{}return new b_(d)}function SV(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PV="__/auth/handler",CV="emulator/auth/handler",kV=encodeURIComponent("fac");async function I_(t,e,n,r,s,i){de(t.config.authDomain,t,"auth-domain-config-required"),de(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:_i,eventId:s};if(e instanceof jw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",lO(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof Jo){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),u=l?`#${kV}=${encodeURIComponent(l)}`:"";return`${OV(t)}?${qo(a).slice(1)}${u}`}function OV({config:t}){return t.emulator?md(t,CV):`https://${t.authDomain}/${PV}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu="webStorageSupport";class xV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kw,this._completeRedirectFn=nV,this._overrideRedirectResult=ZM}async _openPopup(e,n,r,s){var i;Qn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await I_(e,n,r,qh(),s);return RV(e,o,Ed())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await I_(e,n,r,qh(),s);return LM(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Qn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await EV(e),r=new sV(e);return n.register("authEvent",s=>(de(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(bu,{type:bu},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[bu];o!==void 0&&n(!!o),fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=lV(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Lw()||Cw()||_d()}}const NV=xV;var A_="@firebase/auth",R_="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LV(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function MV(t){ii(new cs("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;de(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mw(t)},u=new tM(r,s,i,l);return hM(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ii(new cs("auth-internal",e=>{const n=vs(e.getProvider("auth").getImmediate());return(r=>new DV(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),br(A_,R_,LV(t)),br(A_,R_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VV=5*60,FV=jE("authIdTokenMaxAge")||VV;let S_=null;const UV=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>FV)return;const s=n==null?void 0:n.token;S_!==s&&(S_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function eT(t=qE()){const e=Nf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=uM(t,{popupRedirectResolver:NV,persistence:[qM,xM,Kw]}),r=jE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=UV(i.toString());PM(n,o,()=>o(n.currentUser)),SM(n,a=>o(a))}}const s=FE("auth");return s&&fM(n,`http://${s}`),n}function jV(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}nM({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=bn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",jV().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});MV("Browser");const BV=tn(()=>{const t=mi().public.firebase,e=HE({apiKey:t.apiKey,authDomain:t.authDomain,projectId:t.projectId,storageBucket:t.storageBucket,messagingSenderId:t.messagingSenderId,appId:t.appId}),n=dL(e),r=eT(e);return{provide:{firebase:e,firestore:n,auth:r}}}),$V=[FS,jS,aC,yC,vC,EC,wC,TC,bC,IC,jk,BV],HV=ds({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(t){const e=t.renderKey,n=t.route,r={};for(const s in t.route)Object.defineProperty(r,s,{get:()=>e===t.renderKey?t.route[s]:n[s],enumerable:!0});return qs(Qc,Mn(r)),()=>zt(t.vnode,{ref:t.vnodeRef})}}),qV=ds({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:r}){const s=qe(),i=Tt(),o=Ot(Qc,null);let a;r({pageRef:i});const l=Ot(CR,null);let u;const h=s.deferHydration();if(s.isHydrating){const d=s.hooks.hookOnce("app:error",h);Ut().beforeEach(d)}return t.pageKey&&Er(()=>t.pageKey,(d,m)=>{d!==m&&s.callHook("page:loading:start")}),()=>zt(Xv,{name:t.name,route:t.route,...e},{default:d=>{const m=WV(o,d.route,d.Component),g=o&&o.matched.length===d.route.matched.length;if(!d.Component){if(u&&!g)return u;h();return}if(u&&l&&!l.isCurrent(d.route))return u;if(m&&o&&(!l||l!=null&&l.isCurrent(o)))return g?u:null;const A=ih(d,t.pageKey);!s.isHydrating&&!KV(o,d.route,d.Component)&&a===A&&s.callHook("page:loading:end"),a=A;const O=!!(t.transition??d.route.meta.pageTransition??zu),N=O&&zV([t.transition,d.route.meta.pageTransition,zu,{onAfterLeave:()=>{s.callHook("page:transition:finish",d.Component)}}].filter(Boolean)),x=t.keepalive??d.route.meta.keepalive??uR;return u=YP(CI,O&&N,KP(x,zt(Hy,{suspensible:!0,onPending:()=>s.callHook("page:start",d.Component),onResolve:()=>{Mo(()=>s.callHook("page:finish",d.Component).then(()=>s.callHook("page:loading:end")).finally(h))}},{default:()=>{const P=zt(HV,{key:A||void 0,vnode:n.default?zt($t,void 0,n.default(d)):d.Component,route:d.route,renderKey:A||void 0,trackRootNodes:O,vnodeRef:i});return x&&(P.type.name=d.Component.type.name||d.Component.type.__name||"RouteProvider"),P}}))).default(),u}})}});function zV(t){const e=t.map(n=>({...n,onAfterLeave:n.onAfterLeave?vf(n.onAfterLeave):void 0}));return _v(...e)}function WV(t,e,n){if(!t)return!1;const r=e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!r||r===-1?!1:e.matched.slice(0,r).some((s,i)=>{var o,a,l;return((o=s.components)==null?void 0:o.default)!==((l=(a=t.matched[i])==null?void 0:a.components)==null?void 0:l.default)})||n&&ih({route:e,Component:n})!==ih({route:t,Component:n})}function KV(t,e,n){return t?e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)})<e.matched.length-1:!1}const GV=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},QV={class:"navbar"},YV={class:"logo"},XV={class:"search-container"},JV={key:0},ZV={key:1},e2={class:"user-name"},t2={key:0,class:"dropdown-menu"},n2={__name:"app",setup(t){OS({title:"쁠로그",ogTitle:"쁠로그",description:"평화롭고 재밌는 쁠로그 사이트",ogDescription:"블로그."});const e=Tt(""),n=Tt(!1),r=Tt(!1),s=Tt(null),i=$P(),o=eT(),a=()=>{e.value.trim()?i.push(`/search?query=${encodeURIComponent(e.value)}`):i.push("/search"),menucheck()},l=()=>{r.value=!r.value},u=async()=>{try{await CM(o),alert("로그아웃되었습니다."),s.value=null,localStorage.removeItem("Login"),i.push("/")}catch{alert("로그아웃 중 문제가 발생했습니다.")}},h=()=>{i.push("/settings"),l()},d=()=>{i.push("/create"),l()};return Fo(()=>{localStorage.getItem("reload")&&setTimeout(()=>{i.push("/"),localStorage.removeItem("reload")},1e3),localStorage.getItem("Login")&&(s.value=JSON.parse(localStorage.getItem("Login")))}),(m,g)=>{const A=pC,O=Ou("font-awesome-icon"),N=qV;return Ht(),Bi("div",null,[Dt("header",QV,[Dt("div",YV,[$e(A,{to:"/",onClick:m.menucheck},{default:rc(()=>g[1]||(g[1]=[Zi("Bblog(쁠로그)")])),_:1},8,["onClick"])]),Dt("div",XV,[mb(Dt("input",{"onUpdate:modelValue":g[0]||(g[0]=x=>e.value=x),type:"text",placeholder:"검색어를 입력하세요...",class:"search-input",onKeydown:eA(a,["enter"])},null,544),[[YI,e.value]])]),$e(O,{class:"search",icon:"magnifying-glass",onClick:a}),Dt("nav",null,[Dt("ul",{class:Do({show:n.value})},[s.value?(Ht(),Bi("li",ZV,[Dt("span",e2,[Zi(F_(s.value.name)+" ",1),Dt("button",{class:"dropdown-toggle",onClick:l}," v ")]),r.value?(Ht(),Bi("div",t2,[Dt("button",{onClick:h},"설정"),Dt("button",{onClick:d},"게시물 작성"),Dt("button",{onClick:u,class:"logout-button"},"로그아웃")])):pI("",!0)])):(Ht(),Bi("li",JV,[$e(A,{to:"/login",onClick:m.toggleMenu},{default:rc(()=>g[2]||(g[2]=[Zi("로그인")])),_:1},8,["onClick"])]))],2)])]),Dt("main",null,[$e(N)])])}}},r2=GV(n2,[["__scopeId","data-v-a423bcbf"]]),s2={__name:"nuxt-error-page",props:{error:Object},setup(t){const n=t.error;n.stack&&n.stack.split(`
`).splice(1).map(d=>({text:d.replace("webpack:/","").replace(".vue",".js").trim(),internal:d.includes("node_modules")&&!d.includes(".cache")||d.includes("internal")||d.includes("new Promise")})).map(d=>`<span class="stack${d.internal?" internal":""}">${d.text}</span>`).join(`
`);const r=Number(n.statusCode||500),s=r===404,i=n.statusMessage??(s?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),a=void 0,h=s?Ep(()=>xn(()=>import("./ChiW-Fdi.js"),__vite__mapDeps([16,17]),import.meta.url)):Ep(()=>xn(()=>import("./BuIR4lRC.js"),__vite__mapDeps([18,19]),import.meta.url));return(d,m)=>(Ht(),Xr(Be(h),DT(Qy({statusCode:Be(r),statusMessage:Be(i),description:Be(o),stack:Be(a)})),null,16))}},i2={key:0},P_={__name:"nuxt-root",setup(t){const e=()=>null,n=qe(),r=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",r);Ut().beforeEach(l)}const s=!1;qs(Qc,vv()),n.hooks.callHookWith(l=>l.map(u=>u()),"vue:setup");const i=Yc(),o=!1;wy((l,u,h)=>{if(n.hooks.callHook("vue:error",l,u,h).catch(d=>console.error("[nuxt] Error in `vue:error` hook",d)),NR(l)&&(l.fatal||l.unhandled))return n.runWithContext(()=>Ms(l)),!1});const a=!1;return(l,u)=>(Ht(),Xr(Hy,{onResolve:Be(r)},{default:rc(()=>[Be(o)?(Ht(),Bi("div",i2)):Be(i)?(Ht(),Xr(Be(s2),{key:1,error:Be(i)},null,8,["error"])):Be(a)?(Ht(),Xr(Be(e),{key:2,context:Be(a)},null,8,["context"])):Be(s)?(Ht(),Xr(Nb(Be(s)),{key:3})):(Ht(),Xr(Be(r2),{key:4}))]),_:1},8,["onResolve"]))}};let C_;{let t;C_=async function(){var o,a;if(t)return t;const r=!!(((o=window.__NUXT__)==null?void 0:o.serverRendered)??((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?sA(P_):rA(P_),s=gR({vueApp:r});async function i(l){await s.callHook("app:error",l),s.payload.error=s.payload.error||Xc(l)}r.config.errorHandler=i,s.hook("app:suspense:resolve",()=>{r.config.errorHandler===i&&(r.config.errorHandler=void 0)});try{await vR(s,$V)}catch(l){i(l)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(dR),await s.hooks.callHook("app:mounted",r),await Mo()}catch(l){i(l)}return r},t=C_().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{Er as A,eA as B,ds as C,eT as D,CM as E,$t as F,v2 as G,w2 as H,E2 as I,d2 as J,p2 as K,f2 as L,g2 as M,y2 as N,_2 as O,nt as T,GV as _,Dt as a,$e as b,Bi as c,Zi as d,pC as e,$P as f,Fo as g,Uo as h,mb as i,a2 as j,o2 as k,Xr as l,Ou as m,Mo as n,Ht as o,pI as p,qe as q,Tt as r,c2 as s,F_ as t,CS as u,YI as v,rc as w,fL as x,m2 as y,Fe as z};
