const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./B3ezNVg-.js","./BB6cQ59w.js","./create.CTHTF24C.css","./CTnZO9C8.js","./index.DhvuUMC2.css","./yU5TEoeG.js","./_id_.DrLFcv7a.css","./BosOAewW.js","./search.B_52YSs3.css","./BjerXEGu.js","./error-404.CoZKRZXM.css","./CW1sH1lq.js","./error-500.D6506J9O.css"])))=>i.map(i=>d[i]);
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Dh(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Me={},Ms=[],gn=()=>{},Yw=()=>!1,Io=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Mh=t=>t.startsWith("onUpdate:"),Ze=Object.assign,Vh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Xw=Object.prototype.hasOwnProperty,ke=(t,e)=>Xw.call(t,e),he=Array.isArray,Vs=t=>Ao(t)==="[object Map]",f_=t=>Ao(t)==="[object Set]",Jw=t=>Ao(t)==="[object RegExp]",de=t=>typeof t=="function",He=t=>typeof t=="string",xr=t=>typeof t=="symbol",Le=t=>t!==null&&typeof t=="object",d_=t=>(Le(t)||de(t))&&de(t.then)&&de(t.catch),p_=Object.prototype.toString,Ao=t=>p_.call(t),Zw=t=>Ao(t).slice(8,-1),m_=t=>Ao(t)==="[object Object]",Lh=t=>He(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ls=Dh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Rl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},eT=/-(\w)/g,Xt=Rl(t=>t.replace(eT,(e,n)=>n?n.toUpperCase():"")),tT=/\B([A-Z])/g,Or=Rl(t=>t.replace(tT,"-$1").toLowerCase()),Sl=Rl(t=>t.charAt(0).toUpperCase()+t.slice(1)),Sc=Rl(t=>t?`on${Sl(t)}`:""),gr=(t,e)=>!Object.is(t,e),Fs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},g_=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},fu=t=>{const e=parseFloat(t);return isNaN(e)?t:e},__=t=>{const e=He(t)?Number(t):NaN;return isNaN(e)?t:e};let Jd;const Pl=()=>Jd||(Jd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Cl(t){if(he(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=He(r)?iT(r):Cl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(He(t)||Le(t))return t}const nT=/;(?![^(]*\))/g,rT=/:([^]+)/,sT=/\/\*[^]*?\*\//g;function iT(t){const e={};return t.replace(sT,"").split(nT).forEach(n=>{if(n){const r=n.split(rT);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ro(t){let e="";if(He(t))e=t;else if(he(t))for(let n=0;n<t.length;n++){const r=Ro(t[n]);r&&(e+=r+" ")}else if(Le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function oT(t){if(!t)return null;let{class:e,style:n}=t;return e&&!He(e)&&(t.class=Ro(e)),n&&(t.style=Cl(n)),t}const aT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",lT=Dh(aT);function y_(t){return!!t||t===""}const v_=t=>!!(t&&t.__v_isRef===!0),cT=t=>He(t)?t:t==null?"":he(t)||Le(t)&&(t.toString===p_||!de(t.toString))?v_(t)?cT(t.value):JSON.stringify(t,E_,2):String(t),E_=(t,e)=>v_(e)?E_(t,e.value):Vs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Pc(r,i)+" =>"]=s,n),{})}:f_(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Pc(n))}:xr(e)?Pc(e):Le(e)&&!he(e)&&!m_(e)?String(e):e,Pc=(t,e="")=>{var n;return xr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ut;class w_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ut,!e&&Ut&&(this.index=(Ut.scopes||(Ut.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ut;try{return Ut=this,e()}finally{Ut=n}}}on(){Ut=this}off(){Ut=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function uT(t){return new w_(t)}function T_(){return Ut}let Ve;const Cc=new WeakSet;class b_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ut&&Ut.active&&Ut.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Cc.has(this)&&(Cc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||A_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Zd(this),R_(this);const e=Ve,n=sn;Ve=this,sn=!0;try{return this.fn()}finally{S_(this),Ve=e,sn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Bh(e);this.deps=this.depsTail=void 0,Zd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Cc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){du(this)&&this.run()}get dirty(){return du(this)}}let I_=0,$i,Hi;function A_(t,e=!1){if(t.flags|=8,e){t.next=Hi,Hi=t;return}t.next=$i,$i=t}function Fh(){I_++}function Uh(){if(--I_>0)return;if(Hi){let e=Hi;for(Hi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;$i;){let e=$i;for($i=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function R_(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function S_(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Bh(r),hT(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function du(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(P_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function P_(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ro))return;t.globalVersion=ro;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!du(t)){t.flags&=-3;return}const n=Ve,r=sn;Ve=t,sn=!0;try{R_(t);const s=t.fn(t._value);(e.version===0||gr(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ve=n,sn=r,S_(t),t.flags&=-3}}function Bh(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Bh(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function hT(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let sn=!0;const C_=[];function Nr(){C_.push(sn),sn=!1}function Dr(){const t=C_.pop();sn=t===void 0?!0:t}function Zd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ve;Ve=void 0;try{e()}finally{Ve=n}}}let ro=0;class fT{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class jh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ve||!sn||Ve===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ve)n=this.activeLink=new fT(Ve,this),Ve.deps?(n.prevDep=Ve.depsTail,Ve.depsTail.nextDep=n,Ve.depsTail=n):Ve.deps=Ve.depsTail=n,k_(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ve.depsTail,n.nextDep=void 0,Ve.depsTail.nextDep=n,Ve.depsTail=n,Ve.deps===n&&(Ve.deps=r)}return n}trigger(e){this.version++,ro++,this.notify(e)}notify(e){Fh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Uh()}}}function k_(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)k_(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const $a=new WeakMap,Xr=Symbol(""),pu=Symbol(""),so=Symbol("");function vt(t,e,n){if(sn&&Ve){let r=$a.get(t);r||$a.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new jh),s.map=r,s.key=n),s.track()}}function kn(t,e,n,r,s,i){const o=$a.get(t);if(!o){ro++;return}const a=c=>{c&&c.trigger()};if(Fh(),e==="clear")o.forEach(a);else{const c=he(t),h=c&&Lh(n);if(c&&n==="length"){const u=Number(r);o.forEach((d,m)=>{(m==="length"||m===so||!xr(m)&&m>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),h&&a(o.get(so)),e){case"add":c?h&&a(o.get("length")):(a(o.get(Xr)),Vs(t)&&a(o.get(pu)));break;case"delete":c||(a(o.get(Xr)),Vs(t)&&a(o.get(pu)));break;case"set":Vs(t)&&a(o.get(Xr));break}}Uh()}function dT(t,e){const n=$a.get(t);return n&&n.get(e)}function ws(t){const e=Se(t);return e===t?e:(vt(e,"iterate",so),Yt(t)?e:e.map(Et))}function kl(t){return vt(t=Se(t),"iterate",so),t}const pT={__proto__:null,[Symbol.iterator](){return kc(this,Symbol.iterator,Et)},concat(...t){return ws(this).concat(...t.map(e=>he(e)?ws(e):e))},entries(){return kc(this,"entries",t=>(t[1]=Et(t[1]),t))},every(t,e){return Rn(this,"every",t,e,void 0,arguments)},filter(t,e){return Rn(this,"filter",t,e,n=>n.map(Et),arguments)},find(t,e){return Rn(this,"find",t,e,Et,arguments)},findIndex(t,e){return Rn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Rn(this,"findLast",t,e,Et,arguments)},findLastIndex(t,e){return Rn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Rn(this,"forEach",t,e,void 0,arguments)},includes(...t){return xc(this,"includes",t)},indexOf(...t){return xc(this,"indexOf",t)},join(t){return ws(this).join(t)},lastIndexOf(...t){return xc(this,"lastIndexOf",t)},map(t,e){return Rn(this,"map",t,e,void 0,arguments)},pop(){return Oi(this,"pop")},push(...t){return Oi(this,"push",t)},reduce(t,...e){return ep(this,"reduce",t,e)},reduceRight(t,...e){return ep(this,"reduceRight",t,e)},shift(){return Oi(this,"shift")},some(t,e){return Rn(this,"some",t,e,void 0,arguments)},splice(...t){return Oi(this,"splice",t)},toReversed(){return ws(this).toReversed()},toSorted(t){return ws(this).toSorted(t)},toSpliced(...t){return ws(this).toSpliced(...t)},unshift(...t){return Oi(this,"unshift",t)},values(){return kc(this,"values",Et)}};function kc(t,e,n){const r=kl(t),s=r[e]();return r!==t&&!Yt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const mT=Array.prototype;function Rn(t,e,n,r,s,i){const o=kl(t),a=o!==t&&!Yt(t),c=o[e];if(c!==mT[e]){const d=c.apply(t,i);return a?Et(d):d}let h=n;o!==t&&(a?h=function(d,m){return n.call(this,Et(d),m,t)}:n.length>2&&(h=function(d,m){return n.call(this,d,m,t)}));const u=c.call(o,h,r);return a&&s?s(u):u}function ep(t,e,n,r){const s=kl(t);let i=n;return s!==t&&(Yt(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,Et(a),c,t)}),s[e](i,...r)}function xc(t,e,n){const r=Se(t);vt(r,"iterate",so);const s=r[e](...n);return(s===-1||s===!1)&&qh(n[0])?(n[0]=Se(n[0]),r[e](...n)):s}function Oi(t,e,n=[]){Nr(),Fh();const r=Se(t)[e].apply(t,n);return Uh(),Dr(),r}const gT=Dh("__proto__,__v_isRef,__isVue"),x_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(xr));function _T(t){xr(t)||(t=String(t));const e=Se(this);return vt(e,"has",t),e.hasOwnProperty(t)}class O_{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?ST:V_:i?M_:D_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=he(e);if(!s){let c;if(o&&(c=pT[n]))return c;if(n==="hasOwnProperty")return _T}const a=Reflect.get(e,n,ot(e)?e:r);return(xr(n)?x_.has(n):gT(n))||(s||vt(e,"get",n),i)?a:ot(a)?o&&Lh(n)?a:a.value:Le(a)?s?L_(a):Mr(a):a}}class N_ extends O_{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Tr(i);if(!Yt(r)&&!Tr(r)&&(i=Se(i),r=Se(r)),!he(e)&&ot(i)&&!ot(r))return c?!1:(i.value=r,!0)}const o=he(e)&&Lh(n)?Number(n)<e.length:ke(e,n),a=Reflect.set(e,n,r,ot(e)?e:s);return e===Se(s)&&(o?gr(r,i)&&kn(e,"set",n,r):kn(e,"add",n,r)),a}deleteProperty(e,n){const r=ke(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&kn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!xr(n)||!x_.has(n))&&vt(e,"has",n),r}ownKeys(e){return vt(e,"iterate",he(e)?"length":Xr),Reflect.ownKeys(e)}}class yT extends O_{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const vT=new N_,ET=new yT,wT=new N_(!0);const mu=t=>t,ia=t=>Reflect.getPrototypeOf(t);function TT(t,e,n){return function(...r){const s=this.__v_raw,i=Se(s),o=Vs(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,h=s[t](...r),u=n?mu:e?gu:Et;return!e&&vt(i,"iterate",c?pu:Xr),{next(){const{value:d,done:m}=h.next();return m?{value:d,done:m}:{value:a?[u(d[0]),u(d[1])]:u(d),done:m}},[Symbol.iterator](){return this}}}}function oa(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function bT(t,e){const n={get(s){const i=this.__v_raw,o=Se(i),a=Se(s);t||(gr(s,a)&&vt(o,"get",s),vt(o,"get",a));const{has:c}=ia(o),h=e?mu:t?gu:Et;if(c.call(o,s))return h(i.get(s));if(c.call(o,a))return h(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&vt(Se(s),"iterate",Xr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Se(i),a=Se(s);return t||(gr(s,a)&&vt(o,"has",s),vt(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=Se(a),h=e?mu:t?gu:Et;return!t&&vt(c,"iterate",Xr),a.forEach((u,d)=>s.call(i,h(u),h(d),o))}};return Ze(n,t?{add:oa("add"),set:oa("set"),delete:oa("delete"),clear:oa("clear")}:{add(s){!e&&!Yt(s)&&!Tr(s)&&(s=Se(s));const i=Se(this);return ia(i).has.call(i,s)||(i.add(s),kn(i,"add",s,s)),this},set(s,i){!e&&!Yt(i)&&!Tr(i)&&(i=Se(i));const o=Se(this),{has:a,get:c}=ia(o);let h=a.call(o,s);h||(s=Se(s),h=a.call(o,s));const u=c.call(o,s);return o.set(s,i),h?gr(i,u)&&kn(o,"set",s,i):kn(o,"add",s,i),this},delete(s){const i=Se(this),{has:o,get:a}=ia(i);let c=o.call(i,s);c||(s=Se(s),c=o.call(i,s)),a&&a.call(i,s);const h=i.delete(s);return c&&kn(i,"delete",s,void 0),h},clear(){const s=Se(this),i=s.size!==0,o=s.clear();return i&&kn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=TT(s,t,e)}),n}function $h(t,e){const n=bT(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ke(n,s)&&s in r?n:r,s,i)}const IT={get:$h(!1,!1)},AT={get:$h(!1,!0)},RT={get:$h(!0,!1)};const D_=new WeakMap,M_=new WeakMap,V_=new WeakMap,ST=new WeakMap;function PT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function CT(t){return t.__v_skip||!Object.isExtensible(t)?0:PT(Zw(t))}function Mr(t){return Tr(t)?t:Hh(t,!1,vT,IT,D_)}function Nn(t){return Hh(t,!1,wT,AT,M_)}function L_(t){return Hh(t,!0,ET,RT,V_)}function Hh(t,e,n,r,s){if(!Le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=CT(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Jr(t){return Tr(t)?Jr(t.__v_raw):!!(t&&t.__v_isReactive)}function Tr(t){return!!(t&&t.__v_isReadonly)}function Yt(t){return!!(t&&t.__v_isShallow)}function qh(t){return t?!!t.__v_raw:!1}function Se(t){const e=t&&t.__v_raw;return e?Se(e):t}function kT(t){return!ke(t,"__v_skip")&&Object.isExtensible(t)&&g_(t,"__v_skip",!0),t}const Et=t=>Le(t)?Mr(t):t,gu=t=>Le(t)?L_(t):t;function ot(t){return t?t.__v_isRef===!0:!1}function Mt(t){return F_(t,!1)}function io(t){return F_(t,!0)}function F_(t,e){return ot(t)?t:new xT(t,e)}class xT{constructor(e,n){this.dep=new jh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Se(e),this._value=n?e:Et(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Yt(e)||Tr(e);e=r?e:Se(e),gr(e,n)&&(this._rawValue=e,this._value=r?e:Et(e),this.dep.trigger())}}function $e(t){return ot(t)?t.value:t}const OT={get:(t,e,n)=>e==="__v_raw"?t:$e(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ot(s)&&!ot(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function U_(t){return Jr(t)?t:new Proxy(t,OT)}class NT{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return dT(Se(this._object),this._key)}}class DT{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function MT(t,e,n){return ot(t)?t:de(t)?new DT(t):Le(t)&&arguments.length>1?VT(t,e,n):Mt(t)}function VT(t,e,n){const r=t[e];return ot(r)?r:new NT(t,e,n)}class LT{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new jh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ro-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ve!==this)return A_(this,!0),!0}get value(){const e=this.dep.track();return P_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function FT(t,e,n=!1){let r,s;return de(t)?r=t:(r=t.get,s=t.set),new LT(r,s,n)}const aa={},Ha=new WeakMap;let qr;function UT(t,e=!1,n=qr){if(n){let r=Ha.get(n);r||Ha.set(n,r=[]),r.push(t)}}function BT(t,e,n=Me){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,h=S=>s?S:Yt(S)||s===!1||s===0?xn(S,1):xn(S);let u,d,m,g,A=!1,x=!1;if(ot(t)?(d=()=>t.value,A=Yt(t)):Jr(t)?(d=()=>h(t),A=!0):he(t)?(x=!0,A=t.some(S=>Jr(S)||Yt(S)),d=()=>t.map(S=>{if(ot(S))return S.value;if(Jr(S))return h(S);if(de(S))return c?c(S,2):S()})):de(t)?e?d=c?()=>c(t,2):t:d=()=>{if(m){Nr();try{m()}finally{Dr()}}const S=qr;qr=u;try{return c?c(t,3,[g]):t(g)}finally{qr=S}}:d=gn,e&&s){const S=d,D=s===!0?1/0:s;d=()=>xn(S(),D)}const N=T_(),O=()=>{u.stop(),N&&N.active&&Vh(N.effects,u)};if(i&&e){const S=e;e=(...D)=>{S(...D),O()}}let P=x?new Array(t.length).fill(aa):aa;const y=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const D=u.run();if(s||A||(x?D.some((L,b)=>gr(L,P[b])):gr(D,P))){m&&m();const L=qr;qr=u;try{const b=[D,P===aa?void 0:x&&P[0]===aa?[]:P,g];c?c(e,3,b):e(...b),P=D}finally{qr=L}}}else u.run()};return a&&a(y),u=new b_(d),u.scheduler=o?()=>o(y,!1):y,g=S=>UT(S,!1,u),m=u.onStop=()=>{const S=Ha.get(u);if(S){if(c)c(S,4);else for(const D of S)D();Ha.delete(u)}},e?r?y(!0):P=u.run():o?o(y.bind(null,!0),!0):u.run(),O.pause=u.pause.bind(u),O.resume=u.resume.bind(u),O.stop=O,O}function xn(t,e=1/0,n){if(e<=0||!Le(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ot(t))xn(t.value,e,n);else if(he(t))for(let r=0;r<t.length;r++)xn(t[r],e,n);else if(f_(t)||Vs(t))t.forEach(r=>{xn(r,e,n)});else if(m_(t)){for(const r in t)xn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&xn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function So(t,e,n,r){try{return r?t(...r):t()}catch(s){ui(s,e,n)}}function on(t,e,n,r){if(de(t)){const s=So(t,e,n,r);return s&&d_(s)&&s.catch(i=>{ui(i,e,n)}),s}if(he(t)){const s=[];for(let i=0;i<t.length;i++)s.push(on(t[i],e,n,r));return s}}function ui(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Me;if(e){let a=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,c,h)===!1)return}a=a.parent}if(i){Nr(),So(i,null,10,[t,c,h]),Dr();return}}jT(t,n,s,r,o)}function jT(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const St=[];let hn=-1;const Us=[];let sr=null,bs=0;const B_=Promise.resolve();let qa=null;function Po(t){const e=qa||B_;return t?e.then(this?t.bind(this):t):e}function $T(t){let e=hn+1,n=St.length;for(;e<n;){const r=e+n>>>1,s=St[r],i=oo(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function zh(t){if(!(t.flags&1)){const e=oo(t),n=St[St.length-1];!n||!(t.flags&2)&&e>=oo(n)?St.push(t):St.splice($T(e),0,t),t.flags|=1,j_()}}function j_(){qa||(qa=B_.then($_))}function _u(t){he(t)?Us.push(...t):sr&&t.id===-1?sr.splice(bs+1,0,t):t.flags&1||(Us.push(t),t.flags|=1),j_()}function tp(t,e,n=hn+1){for(;n<St.length;n++){const r=St[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;St.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function za(t){if(Us.length){const e=[...new Set(Us)].sort((n,r)=>oo(n)-oo(r));if(Us.length=0,sr){sr.push(...e);return}for(sr=e,bs=0;bs<sr.length;bs++){const n=sr[bs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}sr=null,bs=0}}const oo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function $_(t){try{for(hn=0;hn<St.length;hn++){const e=St[hn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),So(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;hn<St.length;hn++){const e=St[hn];e&&(e.flags&=-2)}hn=-1,St.length=0,za(),qa=null,(St.length||Us.length)&&$_()}}let Pt=null,H_=null;function Wa(t){const e=Pt;return Pt=t,H_=t&&t.type.__scopeId||null,e}function ir(t,e=Pt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&pp(-1);const i=Wa(e);let o;try{o=t(...s)}finally{Wa(i),r._d&&pp(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function HT(t,e){if(Pt===null)return t;const n=Vl(Pt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=Me]=e[s];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&xn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function fn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Nr(),on(c,n,8,[t.el,a,t,e]),Dr())}}const qT=Symbol("_vte"),q_=t=>t.__isTeleport,or=Symbol("_leaveCb"),la=Symbol("_enterCb");function zT(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ol(()=>{t.isMounted=!0}),ko(()=>{t.isUnmounting=!0}),t}const Kt=[Function,Array],z_={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Kt,onEnter:Kt,onAfterEnter:Kt,onEnterCancelled:Kt,onBeforeLeave:Kt,onLeave:Kt,onAfterLeave:Kt,onLeaveCancelled:Kt,onBeforeAppear:Kt,onAppear:Kt,onAfterAppear:Kt,onAppearCancelled:Kt},W_=t=>{const e=t.subTree;return e.component?W_(e.component):e},WT={name:"BaseTransition",props:z_,setup(t,{slots:e}){const n=Ml(),r=zT();return()=>{const s=e.default&&Q_(e.default(),!0);if(!s||!s.length)return;const i=K_(s),o=Se(t),{mode:a}=o;if(r.isLeaving)return Oc(i);const c=np(i);if(!c)return Oc(i);let h=yu(c,o,r,n,d=>h=d);c.type!==it&&Gs(c,h);let u=n.subTree&&np(n.subTree);if(u&&u.type!==it&&!nn(c,u)&&W_(n).type!==it){let d=yu(u,o,r,n);if(Gs(u,d),a==="out-in"&&c.type!==it)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},Oc(i);a==="in-out"&&c.type!==it?d.delayLeave=(m,g,A)=>{const x=G_(r,u);x[String(u.key)]=u,m[or]=()=>{g(),m[or]=void 0,delete h.delayedLeave,u=void 0},h.delayedLeave=()=>{A(),delete h.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return i}}};function K_(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==it){e=n;break}}return e}const KT=WT;function G_(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function yu(t,e,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:h,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:m,onLeave:g,onAfterLeave:A,onLeaveCancelled:x,onBeforeAppear:N,onAppear:O,onAfterAppear:P,onAppearCancelled:y}=e,S=String(t.key),D=G_(n,t),L=(v,w)=>{v&&on(v,r,9,w)},b=(v,w)=>{const k=w[1];L(v,w),he(v)?v.every(R=>R.length<=1)&&k():v.length<=1&&k()},E={mode:o,persisted:a,beforeEnter(v){let w=c;if(!n.isMounted)if(i)w=N||c;else return;v[or]&&v[or](!0);const k=D[S];k&&nn(t,k)&&k.el[or]&&k.el[or](),L(w,[v])},enter(v){let w=h,k=u,R=d;if(!n.isMounted)if(i)w=O||h,k=P||u,R=y||d;else return;let T=!1;const _e=v[la]=ve=>{T||(T=!0,ve?L(R,[v]):L(k,[v]),E.delayedLeave&&E.delayedLeave(),v[la]=void 0)};w?b(w,[v,_e]):_e()},leave(v,w){const k=String(t.key);if(v[la]&&v[la](!0),n.isUnmounting)return w();L(m,[v]);let R=!1;const T=v[or]=_e=>{R||(R=!0,w(),_e?L(x,[v]):L(A,[v]),v[or]=void 0,D[k]===t&&delete D[k])};D[k]=t,g?b(g,[v,T]):T()},clone(v){const w=yu(v,e,n,r,s);return s&&s(w),w}};return E}function Oc(t){if(Co(t))return t=Fn(t),t.children=null,t}function np(t){if(!Co(t))return q_(t.type)&&t.children?K_(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&de(n.default))return n.default()}}function Gs(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Gs(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Q_(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Bt?(o.patchFlag&128&&s++,r=r.concat(Q_(o.children,e,a))):(e||o.type!==it)&&r.push(a!=null?Fn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function bn(t,e){return de(t)?Ze({name:t.name},e,{setup:t}):t}function Wh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ao(t,e,n,r,s=!1){if(he(t)){t.forEach((A,x)=>ao(A,e&&(he(e)?e[x]:e),n,r,s));return}if(Zr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ao(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Vl(r.component):r.el,o=s?null:i,{i:a,r:c}=t,h=e&&e.r,u=a.refs===Me?a.refs={}:a.refs,d=a.setupState,m=Se(d),g=d===Me?()=>!1:A=>ke(m,A);if(h!=null&&h!==c&&(He(h)?(u[h]=null,g(h)&&(d[h]=null)):ot(h)&&(h.value=null)),de(c))So(c,a,12,[o,u]);else{const A=He(c),x=ot(c);if(A||x){const N=()=>{if(t.f){const O=A?g(c)?d[c]:u[c]:c.value;s?he(O)&&Vh(O,i):he(O)?O.includes(i)||O.push(i):A?(u[c]=[i],g(c)&&(d[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else A?(u[c]=o,g(c)&&(d[c]=o)):x&&(c.value=o,t.k&&(u[t.k]=o))};o?(N.id=-1,ct(N,n)):N()}}}let rp=!1;const Ts=()=>{rp||(console.error("Hydration completed but contains mismatches."),rp=!0)},GT=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",QT=t=>t.namespaceURI.includes("MathML"),ca=t=>{if(t.nodeType===1){if(GT(t))return"svg";if(QT(t))return"mathml"}},ks=t=>t.nodeType===8;function YT(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:c,createComment:h}}=t,u=(y,S)=>{if(!S.hasChildNodes()){n(null,y,S),za(),S._vnode=y;return}d(S.firstChild,y,null,null,null),za(),S._vnode=y},d=(y,S,D,L,b,E=!1)=>{E=E||!!S.dynamicChildren;const v=ks(y)&&y.data==="[",w=()=>x(y,S,D,L,b,v),{type:k,ref:R,shapeFlag:T,patchFlag:_e}=S;let ve=y.nodeType;S.el=y,_e===-2&&(E=!1,S.dynamicChildren=null);let re=null;switch(k){case ts:ve!==3?S.children===""?(c(S.el=s(""),o(y),y),re=y):re=w():(y.data!==S.children&&(Ts(),y.data=S.children),re=i(y));break;case it:P(y)?(re=i(y),O(S.el=y.content.firstChild,y,D)):ve!==8||v?re=w():re=i(y);break;case Ia:if(v&&(y=i(y),ve=y.nodeType),ve===1||ve===3){re=y;const fe=!S.children.length;for(let ne=0;ne<S.staticCount;ne++)fe&&(S.children+=re.nodeType===1?re.outerHTML:re.data),ne===S.staticCount-1&&(S.anchor=re),re=i(re);return v?i(re):re}else w();break;case Bt:v?re=A(y,S,D,L,b,E):re=w();break;default:if(T&1)(ve!==1||S.type.toLowerCase()!==y.tagName.toLowerCase())&&!P(y)?re=w():re=m(y,S,D,L,b,E);else if(T&6){S.slotScopeIds=b;const fe=o(y);if(v?re=N(y):ks(y)&&y.data==="teleport start"?re=N(y,y.data,"teleport end"):re=i(y),e(S,fe,null,D,L,ca(fe),E),Zr(S)&&!S.type.__asyncResolved){let ne;v?(ne=Ce(Bt),ne.anchor=re?re.previousSibling:fe.lastChild):ne=y.nodeType===3?Gr(""):Ce("div"),ne.el=y,S.component.subTree=ne}}else T&64?ve!==8?re=w():re=S.type.hydrate(y,S,D,L,b,E,t,g):T&128&&(re=S.type.hydrate(y,S,D,L,ca(o(y)),b,E,t,d))}return R!=null&&ao(R,null,L,S),re},m=(y,S,D,L,b,E)=>{E=E||!!S.dynamicChildren;const{type:v,props:w,patchFlag:k,shapeFlag:R,dirs:T,transition:_e}=S,ve=v==="input"||v==="option";if(ve||k!==-1){T&&fn(S,null,D,"created");let re=!1;if(P(y)){re=yy(null,_e)&&D&&D.vnode.props&&D.vnode.props.appear;const ne=y.content.firstChild;re&&_e.beforeEnter(ne),O(ne,y,D),S.el=y=ne}if(R&16&&!(w&&(w.innerHTML||w.textContent))){let ne=g(y.firstChild,S,y,D,L,b,E);for(;ne;){ua(y,1)||Ts();const qe=ne;ne=ne.nextSibling,a(qe)}}else if(R&8){let ne=S.children;ne[0]===`
`&&(y.tagName==="PRE"||y.tagName==="TEXTAREA")&&(ne=ne.slice(1)),y.textContent!==ne&&(ua(y,0)||Ts(),y.textContent=S.children)}if(w){if(ve||!E||k&48){const ne=y.tagName.includes("-");for(const qe in w)(ve&&(qe.endsWith("value")||qe==="indeterminate")||Io(qe)&&!Ls(qe)||qe[0]==="."||ne)&&r(y,qe,null,w[qe],void 0,D)}else if(w.onClick)r(y,"onClick",null,w.onClick,void 0,D);else if(k&4&&Jr(w.style))for(const ne in w.style)w.style[ne]}let fe;(fe=w&&w.onVnodeBeforeMount)&&Ot(fe,D,S),T&&fn(S,null,D,"beforeMount"),((fe=w&&w.onVnodeMounted)||T||re)&&Ay(()=>{fe&&Ot(fe,D,S),re&&_e.enter(y),T&&fn(S,null,D,"mounted")},L)}return y.nextSibling},g=(y,S,D,L,b,E,v)=>{v=v||!!S.dynamicChildren;const w=S.children,k=w.length;for(let R=0;R<k;R++){const T=v?w[R]:w[R]=jt(w[R]),_e=T.type===ts;y?(_e&&!v&&R+1<k&&jt(w[R+1]).type===ts&&(c(s(y.data.slice(T.children.length)),D,i(y)),y.data=T.children),y=d(y,T,L,b,E,v)):_e&&!T.children?c(T.el=s(""),D):(ua(D,1)||Ts(),n(null,T,D,null,L,b,ca(D),E))}return y},A=(y,S,D,L,b,E)=>{const{slotScopeIds:v}=S;v&&(b=b?b.concat(v):v);const w=o(y),k=g(i(y),S,w,D,L,b,E);return k&&ks(k)&&k.data==="]"?i(S.anchor=k):(Ts(),c(S.anchor=h("]"),w,k),k)},x=(y,S,D,L,b,E)=>{if(ua(y.parentElement,1)||Ts(),S.el=null,E){const k=N(y);for(;;){const R=i(y);if(R&&R!==k)a(R);else break}}const v=i(y),w=o(y);return a(y),n(null,S,w,v,D,L,ca(w),b),D&&(D.vnode.el=S.el,Dl(D,S.el)),v},N=(y,S="[",D="]")=>{let L=0;for(;y;)if(y=i(y),y&&ks(y)&&(y.data===S&&L++,y.data===D)){if(L===0)return i(y);L--}return y},O=(y,S,D)=>{const L=S.parentNode;L&&L.replaceChild(y,S);let b=D;for(;b;)b.vnode.el===S&&(b.vnode.el=b.subTree.el=y),b=b.parent},P=y=>y.nodeType===1&&y.tagName==="TEMPLATE";return[u,d]}const sp="data-allow-mismatch",XT={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function ua(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(sp);)t=t.parentElement;const n=t&&t.getAttribute(sp);if(n==null)return!1;if(n==="")return!0;{const r=n.split(",");return e===0&&r.includes("children")?!0:n.split(",").includes(XT[e])}}Pl().requestIdleCallback;Pl().cancelIdleCallback;function JT(t,e){if(ks(t)&&t.data==="["){let n=1,r=t.nextSibling;for(;r;){if(r.nodeType===1){if(e(r)===!1)break}else if(ks(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else e(t)}const Zr=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function ip(t){de(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,hydrate:i,timeout:o,suspensible:a=!0,onError:c}=t;let h=null,u,d=0;const m=()=>(d++,h=null,g()),g=()=>{let A;return h||(A=h=e().catch(x=>{if(x=x instanceof Error?x:new Error(String(x)),c)return new Promise((N,O)=>{c(x,()=>N(m()),()=>O(x),d+1)});throw x}).then(x=>A!==h&&h?h:(x&&(x.__esModule||x[Symbol.toStringTag]==="Module")&&(x=x.default),u=x,x)))};return bn({name:"AsyncComponentWrapper",__asyncLoader:g,__asyncHydrate(A,x,N){const O=i?()=>{const P=i(N,y=>JT(A,y));P&&(x.bum||(x.bum=[])).push(P)}:N;u?O():g().then(()=>!x.isUnmounted&&O())},get __asyncResolved(){return u},setup(){const A=et;if(Wh(A),u)return()=>Nc(u,A);const x=y=>{h=null,ui(y,A,13,!r)};if(a&&A.suspense||Xs)return g().then(y=>()=>Nc(y,A)).catch(y=>(x(y),()=>r?Ce(r,{error:y}):null));const N=Mt(!1),O=Mt(),P=Mt(!!s);return s&&setTimeout(()=>{P.value=!1},s),o!=null&&setTimeout(()=>{if(!N.value&&!O.value){const y=new Error(`Async component timed out after ${o}ms.`);x(y),O.value=y}},o),g().then(()=>{N.value=!0,A.parent&&Co(A.parent.vnode)&&A.parent.update()}).catch(y=>{x(y),O.value=y}),()=>{if(N.value&&u)return Nc(u,A);if(O.value&&r)return Ce(r,{error:O.value});if(n&&!P.value)return Ce(n)}}})}function Nc(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=Ce(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const Co=t=>t.type.__isKeepAlive,ZT={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Ml(),r=n.ctx;if(!r.renderer)return()=>{const P=e.default&&e.default();return P&&P.length===1?P[0]:P};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:c,m:h,um:u,o:{createElement:d}}}=r,m=d("div");r.activate=(P,y,S,D,L)=>{const b=P.component;h(P,y,S,0,a),c(b.vnode,P,y,S,b,a,D,P.slotScopeIds,L),ct(()=>{b.isDeactivated=!1,b.a&&Fs(b.a);const E=P.props&&P.props.onVnodeMounted;E&&Ot(E,b.parent,P)},a)},r.deactivate=P=>{const y=P.component;Ga(y.m),Ga(y.a),h(P,m,null,1,a),ct(()=>{y.da&&Fs(y.da);const S=P.props&&P.props.onVnodeUnmounted;S&&Ot(S,y.parent,P),y.isDeactivated=!0},a)};function g(P){Dc(P),u(P,n,a,!0)}function A(P){s.forEach((y,S)=>{const D=Su(y.type);D&&!P(D)&&x(S)})}function x(P){const y=s.get(P);y&&(!o||!nn(y,o))?g(y):o&&Dc(o),s.delete(P),i.delete(P)}_r(()=>[t.include,t.exclude],([P,y])=>{P&&A(S=>Mi(P,S)),y&&A(S=>!Mi(y,S))},{flush:"post",deep:!0});let N=null;const O=()=>{N!=null&&(Qa(n.subTree.type)?ct(()=>{s.set(N,ha(n.subTree))},n.subTree.suspense):s.set(N,ha(n.subTree)))};return Ol(O),Z_(O),ko(()=>{s.forEach(P=>{const{subTree:y,suspense:S}=n,D=ha(y);if(P.type===D.type&&P.key===D.key){Dc(D);const L=D.component.da;L&&ct(L,S);return}g(P)})}),()=>{if(N=null,!e.default)return o=null;const P=e.default(),y=P[0];if(P.length>1)return o=null,P;if(!Ys(y)||!(y.shapeFlag&4)&&!(y.shapeFlag&128))return o=null,y;let S=ha(y);if(S.type===it)return o=null,S;const D=S.type,L=Su(Zr(S)?S.type.__asyncResolved||{}:D),{include:b,exclude:E,max:v}=t;if(b&&(!L||!Mi(b,L))||E&&L&&Mi(E,L))return S.shapeFlag&=-257,o=S,y;const w=S.key==null?D:S.key,k=s.get(w);return S.el&&(S=Fn(S),y.shapeFlag&128&&(y.ssContent=S)),N=w,k?(S.el=k.el,S.component=k.component,S.transition&&Gs(S,S.transition),S.shapeFlag|=512,i.delete(w),i.add(w)):(i.add(w),v&&i.size>parseInt(v,10)&&x(i.values().next().value)),S.shapeFlag|=256,o=S,Qa(y.type)?y:S}}},eb=ZT;function Mi(t,e){return he(t)?t.some(n=>Mi(n,e)):He(t)?t.split(",").includes(e):Jw(t)?(t.lastIndex=0,t.test(e)):!1}function Y_(t,e){J_(t,"a",e)}function X_(t,e){J_(t,"da",e)}function J_(t,e,n=et){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(xl(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Co(s.parent.vnode)&&tb(r,e,n,s),s=s.parent}}function tb(t,e,n,r){const s=xl(e,t,r,!0);ey(()=>{Vh(r[e],s)},n)}function Dc(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function ha(t){return t.shapeFlag&128?t.ssContent:t}function xl(t,e,n=et,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Nr();const a=xo(n),c=on(e,n,t,o);return a(),Dr(),c});return r?s.unshift(i):s.push(i),i}}const Wn=t=>(e,n=et)=>{(!Xs||t==="sp")&&xl(t,(...r)=>e(...r),n)},nb=Wn("bm"),Ol=Wn("m"),rb=Wn("bu"),Z_=Wn("u"),ko=Wn("bum"),ey=Wn("um"),sb=Wn("sp"),ib=Wn("rtg"),ob=Wn("rtc");function ty(t,e=et){xl("ec",t,e)}const ny="components";function vu(t,e){return sy(ny,t,!0,e)||t}const ry=Symbol.for("v-ndc");function ab(t){return He(t)?sy(ny,t,!1)||t:t||ry}function sy(t,e,n=!0,r=!1){const s=Pt||et;if(s){const i=s.type;{const a=Su(i,!1);if(a&&(a===e||a===Xt(e)||a===Sl(Xt(e))))return i}const o=op(s[t]||i[t],e)||op(s.appContext[t],e);return!o&&r?i:o}}function op(t,e){return t&&(t[e]||t[Xt(e)]||t[Sl(Xt(e))])}function pL(t,e,n,r){let s;const i=n,o=he(t);if(o||He(t)){const a=o&&Jr(t);let c=!1;a&&(c=!Yt(t),t=kl(t)),s=new Array(t.length);for(let h=0,u=t.length;h<u;h++)s[h]=e(c?Et(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(Le(t))if(t[Symbol.iterator])s=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let c=0,h=a.length;c<h;c++){const u=a[c];s[c]=e(t[u],u,c,i)}}else s=[];return s}const Eu=t=>t?xy(t)?Vl(t):Eu(t.parent):null,qi=Ze(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Eu(t.parent),$root:t=>Eu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Kh(t),$forceUpdate:t=>t.f||(t.f=()=>{zh(t.update)}),$nextTick:t=>t.n||(t.n=Po.bind(t.proxy)),$watch:t=>Pb.bind(t)}),Mc=(t,e)=>t!==Me&&!t.__isScriptSetup&&ke(t,e),lb={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let h;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Mc(r,e))return o[e]=1,r[e];if(s!==Me&&ke(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&ke(h,e))return o[e]=3,i[e];if(n!==Me&&ke(n,e))return o[e]=4,n[e];wu&&(o[e]=0)}}const u=qi[e];let d,m;if(u)return e==="$attrs"&&vt(t.attrs,"get",""),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Me&&ke(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,ke(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Mc(s,e)?(s[e]=n,!0):r!==Me&&ke(r,e)?(r[e]=n,!0):ke(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Me&&ke(t,o)||Mc(e,o)||(a=i[0])&&ke(a,o)||ke(r,o)||ke(qi,o)||ke(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ke(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ap(t){return he(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let wu=!0;function cb(t){const e=Kh(t),n=t.proxy,r=t.ctx;wu=!1,e.beforeCreate&&lp(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:h,created:u,beforeMount:d,mounted:m,beforeUpdate:g,updated:A,activated:x,deactivated:N,beforeDestroy:O,beforeUnmount:P,destroyed:y,unmounted:S,render:D,renderTracked:L,renderTriggered:b,errorCaptured:E,serverPrefetch:v,expose:w,inheritAttrs:k,components:R,directives:T,filters:_e}=e;if(h&&ub(h,r,null),o)for(const fe in o){const ne=o[fe];de(ne)&&(r[fe]=ne.bind(n))}if(s){const fe=s.call(n,n);Le(fe)&&(t.data=Mr(fe))}if(wu=!0,i)for(const fe in i){const ne=i[fe],qe=de(ne)?ne.bind(n,n):de(ne.get)?ne.get.bind(n,n):gn,Zt=!de(ne)&&de(ne.set)?ne.set.bind(n):gn,zt=Ue({get:qe,set:Zt});Object.defineProperty(r,fe,{enumerable:!0,configurable:!0,get:()=>zt.value,set:ze=>zt.value=ze})}if(a)for(const fe in a)iy(a[fe],r,n,fe);if(c){const fe=de(c)?c.call(n):c;Reflect.ownKeys(fe).forEach(ne=>{Bs(ne,fe[ne])})}u&&lp(u,t,"c");function re(fe,ne){he(ne)?ne.forEach(qe=>fe(qe.bind(n))):ne&&fe(ne.bind(n))}if(re(nb,d),re(Ol,m),re(rb,g),re(Z_,A),re(Y_,x),re(X_,N),re(ty,E),re(ob,L),re(ib,b),re(ko,P),re(ey,S),re(sb,v),he(w))if(w.length){const fe=t.exposed||(t.exposed={});w.forEach(ne=>{Object.defineProperty(fe,ne,{get:()=>n[ne],set:qe=>n[ne]=qe})})}else t.exposed||(t.exposed={});D&&t.render===gn&&(t.render=D),k!=null&&(t.inheritAttrs=k),R&&(t.components=R),T&&(t.directives=T),v&&Wh(t)}function ub(t,e,n=gn){he(t)&&(t=Tu(t));for(const r in t){const s=t[r];let i;Le(s)?"default"in s?i=Ct(s.from||r,s.default,!0):i=Ct(s.from||r):i=Ct(s),ot(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function lp(t,e,n){on(he(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function iy(t,e,n,r){let s=r.includes(".")?wy(n,r):()=>n[r];if(He(t)){const i=e[t];de(i)&&_r(s,i)}else if(de(t))_r(s,t.bind(n));else if(Le(t))if(he(t))t.forEach(i=>iy(i,e,n,r));else{const i=de(t.handler)?t.handler.bind(n):e[t.handler];de(i)&&_r(s,i,t)}}function Kh(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>Ka(c,h,o,!0)),Ka(c,e,o)),Le(e)&&i.set(e,c),c}function Ka(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ka(t,i,n,!0),s&&s.forEach(o=>Ka(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=hb[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const hb={data:cp,props:up,emits:up,methods:Vi,computed:Vi,beforeCreate:Rt,created:Rt,beforeMount:Rt,mounted:Rt,beforeUpdate:Rt,updated:Rt,beforeDestroy:Rt,beforeUnmount:Rt,destroyed:Rt,unmounted:Rt,activated:Rt,deactivated:Rt,errorCaptured:Rt,serverPrefetch:Rt,components:Vi,directives:Vi,watch:db,provide:cp,inject:fb};function cp(t,e){return e?t?function(){return Ze(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function fb(t,e){return Vi(Tu(t),Tu(e))}function Tu(t){if(he(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Rt(t,e){return t?[...new Set([].concat(t,e))]:e}function Vi(t,e){return t?Ze(Object.create(null),t,e):e}function up(t,e){return t?he(t)&&he(e)?[...new Set([...t,...e])]:Ze(Object.create(null),ap(t),ap(e??{})):e}function db(t,e){if(!t)return e;if(!e)return t;const n=Ze(Object.create(null),t);for(const r in e)n[r]=Rt(t[r],e[r]);return n}function oy(){return{app:null,config:{isNativeTag:Yw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pb=0;function mb(t,e){return function(r,s=null){de(r)||(r=Ze({},r)),s!=null&&!Le(s)&&(s=null);const i=oy(),o=new WeakSet,a=[];let c=!1;const h=i.app={_uid:pb++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Ny,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&de(u.install)?(o.add(u),u.install(h,...d)):de(u)&&(o.add(u),u(h,...d))),h},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),h},component(u,d){return d?(i.components[u]=d,h):i.components[u]},directive(u,d){return d?(i.directives[u]=d,h):i.directives[u]},mount(u,d,m){if(!c){const g=h._ceVNode||Ce(r,s);return g.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),d&&e?e(g,u):t(g,u,m),c=!0,h._container=u,u.__vue_app__=h,Vl(g.component)}},onUnmount(u){a.push(u)},unmount(){c&&(on(a,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(u,d){return i.provides[u]=d,h},runWithContext(u){const d=es;es=h;try{return u()}finally{es=d}}};return h}}let es=null;function Bs(t,e){if(et){let n=et.provides;const r=et.parent&&et.parent.provides;r===n&&(n=et.provides=Object.create(r)),n[t]=e}}function Ct(t,e,n=!1){const r=et||Pt;if(r||es){const s=es?es._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&de(e)?e.call(r&&r.proxy):e}}function ay(){return!!(et||Pt||es)}const ly={},cy=()=>Object.create(ly),uy=t=>Object.getPrototypeOf(t)===ly;function gb(t,e,n,r=!1){const s={},i=cy();t.propsDefaults=Object.create(null),hy(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Nn(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function _b(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Se(s),[c]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let m=u[d];if(Nl(t.emitsOptions,m))continue;const g=e[m];if(c)if(ke(i,m))g!==i[m]&&(i[m]=g,h=!0);else{const A=Xt(m);s[A]=bu(c,a,A,g,t,!1)}else g!==i[m]&&(i[m]=g,h=!0)}}}else{hy(t,e,s,i)&&(h=!0);let u;for(const d in a)(!e||!ke(e,d)&&((u=Or(d))===d||!ke(e,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=bu(c,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!ke(e,d))&&(delete i[d],h=!0)}h&&kn(t.attrs,"set","")}function hy(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ls(c))continue;const h=e[c];let u;s&&ke(s,u=Xt(c))?!i||!i.includes(u)?n[u]=h:(a||(a={}))[u]=h:Nl(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,o=!0)}if(i){const c=Se(n),h=a||Me;for(let u=0;u<i.length;u++){const d=i[u];n[d]=bu(s,c,d,h[d],t,!ke(h,d))}}return o}function bu(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ke(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&de(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const u=xo(s);r=h[n]=c.call(null,e),u()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Or(n))&&(r=!0))}return r}const yb=new WeakMap;function fy(t,e,n=!1){const r=n?yb:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!de(t)){const u=d=>{c=!0;const[m,g]=fy(d,e,!0);Ze(o,m),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Le(t)&&r.set(t,Ms),Ms;if(he(i))for(let u=0;u<i.length;u++){const d=Xt(i[u]);hp(d)&&(o[d]=Me)}else if(i)for(const u in i){const d=Xt(u);if(hp(d)){const m=i[u],g=o[d]=he(m)||de(m)?{type:m}:Ze({},m),A=g.type;let x=!1,N=!0;if(he(A))for(let O=0;O<A.length;++O){const P=A[O],y=de(P)&&P.name;if(y==="Boolean"){x=!0;break}else y==="String"&&(N=!1)}else x=de(A)&&A.name==="Boolean";g[0]=x,g[1]=N,(x||ke(g,"default"))&&a.push(d)}}const h=[o,a];return Le(t)&&r.set(t,h),h}function hp(t){return t[0]!=="$"&&!Ls(t)}const dy=t=>t[0]==="_"||t==="$stable",Gh=t=>he(t)?t.map(jt):[jt(t)],vb=(t,e,n)=>{if(e._n)return e;const r=ir((...s)=>Gh(e(...s)),n);return r._c=!1,r},py=(t,e,n)=>{const r=t._ctx;for(const s in t){if(dy(s))continue;const i=t[s];if(de(i))e[s]=vb(s,i,r);else if(i!=null){const o=Gh(i);e[s]=()=>o}}},my=(t,e)=>{const n=Gh(e);t.slots.default=()=>n},gy=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Eb=(t,e,n)=>{const r=t.slots=cy();if(t.vnode.shapeFlag&32){const s=e._;s?(gy(r,e,n),n&&g_(r,"_",s,!0)):py(e,r)}else e&&my(t,e)},wb=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Me;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:gy(s,e,n):(i=!e.$stable,py(e,s)),o=e}else e&&(my(t,e),o={default:1});if(i)for(const a in s)!dy(a)&&o[a]==null&&delete s[a]},ct=Ay;function Tb(t){return _y(t)}function bb(t){return _y(t,YT)}function _y(t,e){const n=Pl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:h,setElementText:u,parentNode:d,nextSibling:m,setScopeId:g=gn,insertStaticContent:A}=t,x=(I,C,V,H=null,U=null,q=null,Y=void 0,G=null,K=!!C.dynamicChildren)=>{if(I===C)return;I&&!nn(I,C)&&(H=B(I),ze(I,U,q,!0),I=null),C.patchFlag===-2&&(K=!1,C.dynamicChildren=null);const{type:z,ref:ce,shapeFlag:J}=C;switch(z){case ts:N(I,C,V,H);break;case it:O(I,C,V,H);break;case Ia:I==null&&P(C,V,H,Y);break;case Bt:R(I,C,V,H,U,q,Y,G,K);break;default:J&1?D(I,C,V,H,U,q,Y,G,K):J&6?T(I,C,V,H,U,q,Y,G,K):(J&64||J&128)&&z.process(I,C,V,H,U,q,Y,G,K,se)}ce!=null&&U&&ao(ce,I&&I.ref,q,C||I,!C)},N=(I,C,V,H)=>{if(I==null)r(C.el=a(C.children),V,H);else{const U=C.el=I.el;C.children!==I.children&&h(U,C.children)}},O=(I,C,V,H)=>{I==null?r(C.el=c(C.children||""),V,H):C.el=I.el},P=(I,C,V,H)=>{[I.el,I.anchor]=A(I.children,C,V,H,I.el,I.anchor)},y=({el:I,anchor:C},V,H)=>{let U;for(;I&&I!==C;)U=m(I),r(I,V,H),I=U;r(C,V,H)},S=({el:I,anchor:C})=>{let V;for(;I&&I!==C;)V=m(I),s(I),I=V;s(C)},D=(I,C,V,H,U,q,Y,G,K)=>{C.type==="svg"?Y="svg":C.type==="math"&&(Y="mathml"),I==null?L(C,V,H,U,q,Y,G,K):v(I,C,U,q,Y,G,K)},L=(I,C,V,H,U,q,Y,G)=>{let K,z;const{props:ce,shapeFlag:J,transition:oe,dirs:ie}=I;if(K=I.el=o(I.type,q,ce&&ce.is,ce),J&8?u(K,I.children):J&16&&E(I.children,K,null,H,U,Vc(I,q),Y,G),ie&&fn(I,null,H,"created"),b(K,I,I.scopeId,Y,H),ce){for(const Pe in ce)Pe!=="value"&&!Ls(Pe)&&i(K,Pe,null,ce[Pe],q,H);"value"in ce&&i(K,"value",null,ce.value,q),(z=ce.onVnodeBeforeMount)&&Ot(z,H,I)}ie&&fn(I,null,H,"beforeMount");const ue=yy(U,oe);ue&&oe.beforeEnter(K),r(K,C,V),((z=ce&&ce.onVnodeMounted)||ue||ie)&&ct(()=>{z&&Ot(z,H,I),ue&&oe.enter(K),ie&&fn(I,null,H,"mounted")},U)},b=(I,C,V,H,U)=>{if(V&&g(I,V),H)for(let q=0;q<H.length;q++)g(I,H[q]);if(U){let q=U.subTree;if(C===q||Qa(q.type)&&(q.ssContent===C||q.ssFallback===C)){const Y=U.vnode;b(I,Y,Y.scopeId,Y.slotScopeIds,U.parent)}}},E=(I,C,V,H,U,q,Y,G,K=0)=>{for(let z=K;z<I.length;z++){const ce=I[z]=G?ar(I[z]):jt(I[z]);x(null,ce,C,V,H,U,q,Y,G)}},v=(I,C,V,H,U,q,Y)=>{const G=C.el=I.el;let{patchFlag:K,dynamicChildren:z,dirs:ce}=C;K|=I.patchFlag&16;const J=I.props||Me,oe=C.props||Me;let ie;if(V&&Br(V,!1),(ie=oe.onVnodeBeforeUpdate)&&Ot(ie,V,C,I),ce&&fn(C,I,V,"beforeUpdate"),V&&Br(V,!0),(J.innerHTML&&oe.innerHTML==null||J.textContent&&oe.textContent==null)&&u(G,""),z?w(I.dynamicChildren,z,G,V,H,Vc(C,U),q):Y||ne(I,C,G,null,V,H,Vc(C,U),q,!1),K>0){if(K&16)k(G,J,oe,V,U);else if(K&2&&J.class!==oe.class&&i(G,"class",null,oe.class,U),K&4&&i(G,"style",J.style,oe.style,U),K&8){const ue=C.dynamicProps;for(let Pe=0;Pe<ue.length;Pe++){const Ae=ue[Pe],dt=J[Ae],rt=oe[Ae];(rt!==dt||Ae==="value")&&i(G,Ae,dt,rt,U,V)}}K&1&&I.children!==C.children&&u(G,C.children)}else!Y&&z==null&&k(G,J,oe,V,U);((ie=oe.onVnodeUpdated)||ce)&&ct(()=>{ie&&Ot(ie,V,C,I),ce&&fn(C,I,V,"updated")},H)},w=(I,C,V,H,U,q,Y)=>{for(let G=0;G<C.length;G++){const K=I[G],z=C[G],ce=K.el&&(K.type===Bt||!nn(K,z)||K.shapeFlag&70)?d(K.el):V;x(K,z,ce,null,H,U,q,Y,!0)}},k=(I,C,V,H,U)=>{if(C!==V){if(C!==Me)for(const q in C)!Ls(q)&&!(q in V)&&i(I,q,C[q],null,U,H);for(const q in V){if(Ls(q))continue;const Y=V[q],G=C[q];Y!==G&&q!=="value"&&i(I,q,G,Y,U,H)}"value"in V&&i(I,"value",C.value,V.value,U)}},R=(I,C,V,H,U,q,Y,G,K)=>{const z=C.el=I?I.el:a(""),ce=C.anchor=I?I.anchor:a("");let{patchFlag:J,dynamicChildren:oe,slotScopeIds:ie}=C;ie&&(G=G?G.concat(ie):ie),I==null?(r(z,V,H),r(ce,V,H),E(C.children||[],V,ce,U,q,Y,G,K)):J>0&&J&64&&oe&&I.dynamicChildren?(w(I.dynamicChildren,oe,V,U,q,Y,G),(C.key!=null||U&&C===U.subTree)&&vy(I,C,!0)):ne(I,C,V,ce,U,q,Y,G,K)},T=(I,C,V,H,U,q,Y,G,K)=>{C.slotScopeIds=G,I==null?C.shapeFlag&512?U.ctx.activate(C,V,H,Y,K):_e(C,V,H,U,q,Y,K):ve(I,C,K)},_e=(I,C,V,H,U,q,Y)=>{const G=I.component=zb(I,H,U);if(Co(I)&&(G.ctx.renderer=se),Wb(G,!1,Y),G.asyncDep){if(U&&U.registerDep(G,re,Y),!I.el){const K=G.subTree=Ce(it);O(null,K,C,V)}}else re(G,I,C,V,U,q,Y)},ve=(I,C,V)=>{const H=C.component=I.component;if(Db(I,C,V))if(H.asyncDep&&!H.asyncResolved){fe(H,C,V);return}else H.next=C,H.update();else C.el=I.el,H.vnode=C},re=(I,C,V,H,U,q,Y)=>{const G=()=>{if(I.isMounted){let{next:J,bu:oe,u:ie,parent:ue,vnode:Pe}=I;{const pt=Ey(I);if(pt){J&&(J.el=Pe.el,fe(I,J,Y)),pt.asyncDep.then(()=>{I.isUnmounted||G()});return}}let Ae=J,dt;Br(I,!1),J?(J.el=Pe.el,fe(I,J,Y)):J=Pe,oe&&Fs(oe),(dt=J.props&&J.props.onVnodeBeforeUpdate)&&Ot(dt,ue,J,Pe),Br(I,!0);const rt=Lc(I),at=I.subTree;I.subTree=rt,x(at,rt,d(at.el),B(at),I,U,q),J.el=rt.el,Ae===null&&Dl(I,rt.el),ie&&ct(ie,U),(dt=J.props&&J.props.onVnodeUpdated)&&ct(()=>Ot(dt,ue,J,Pe),U)}else{let J;const{el:oe,props:ie}=C,{bm:ue,m:Pe,parent:Ae,root:dt,type:rt}=I,at=Zr(C);if(Br(I,!1),ue&&Fs(ue),!at&&(J=ie&&ie.onVnodeBeforeMount)&&Ot(J,Ae,C),Br(I,!0),oe&&Ne){const pt=()=>{I.subTree=Lc(I),Ne(oe,I.subTree,I,U,null)};at&&rt.__asyncHydrate?rt.__asyncHydrate(oe,I,pt):pt()}else{dt.ce&&dt.ce._injectChildStyle(rt);const pt=I.subTree=Lc(I);x(null,pt,V,H,I,U,q),C.el=pt.el}if(Pe&&ct(Pe,U),!at&&(J=ie&&ie.onVnodeMounted)){const pt=C;ct(()=>Ot(J,Ae,pt),U)}(C.shapeFlag&256||Ae&&Zr(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&I.a&&ct(I.a,U),I.isMounted=!0,C=V=H=null}};I.scope.on();const K=I.effect=new b_(G);I.scope.off();const z=I.update=K.run.bind(K),ce=I.job=K.runIfDirty.bind(K);ce.i=I,ce.id=I.uid,K.scheduler=()=>zh(ce),Br(I,!0),z()},fe=(I,C,V)=>{C.component=I;const H=I.vnode.props;I.vnode=C,I.next=null,_b(I,C.props,H,V),wb(I,C.children,V),Nr(),tp(I),Dr()},ne=(I,C,V,H,U,q,Y,G,K=!1)=>{const z=I&&I.children,ce=I?I.shapeFlag:0,J=C.children,{patchFlag:oe,shapeFlag:ie}=C;if(oe>0){if(oe&128){Zt(z,J,V,H,U,q,Y,G,K);return}else if(oe&256){qe(z,J,V,H,U,q,Y,G,K);return}}ie&8?(ce&16&&kt(z,U,q),J!==z&&u(V,J)):ce&16?ie&16?Zt(z,J,V,H,U,q,Y,G,K):kt(z,U,q,!0):(ce&8&&u(V,""),ie&16&&E(J,V,H,U,q,Y,G,K))},qe=(I,C,V,H,U,q,Y,G,K)=>{I=I||Ms,C=C||Ms;const z=I.length,ce=C.length,J=Math.min(z,ce);let oe;for(oe=0;oe<J;oe++){const ie=C[oe]=K?ar(C[oe]):jt(C[oe]);x(I[oe],ie,V,null,U,q,Y,G,K)}z>ce?kt(I,U,q,!0,!1,J):E(C,V,H,U,q,Y,G,K,J)},Zt=(I,C,V,H,U,q,Y,G,K)=>{let z=0;const ce=C.length;let J=I.length-1,oe=ce-1;for(;z<=J&&z<=oe;){const ie=I[z],ue=C[z]=K?ar(C[z]):jt(C[z]);if(nn(ie,ue))x(ie,ue,V,null,U,q,Y,G,K);else break;z++}for(;z<=J&&z<=oe;){const ie=I[J],ue=C[oe]=K?ar(C[oe]):jt(C[oe]);if(nn(ie,ue))x(ie,ue,V,null,U,q,Y,G,K);else break;J--,oe--}if(z>J){if(z<=oe){const ie=oe+1,ue=ie<ce?C[ie].el:H;for(;z<=oe;)x(null,C[z]=K?ar(C[z]):jt(C[z]),V,ue,U,q,Y,G,K),z++}}else if(z>oe)for(;z<=J;)ze(I[z],U,q,!0),z++;else{const ie=z,ue=z,Pe=new Map;for(z=ue;z<=oe;z++){const It=C[z]=K?ar(C[z]):jt(C[z]);It.key!=null&&Pe.set(It.key,z)}let Ae,dt=0;const rt=oe-ue+1;let at=!1,pt=0;const Xn=new Array(rt);for(z=0;z<rt;z++)Xn[z]=0;for(z=ie;z<=J;z++){const It=I[z];if(dt>=rt){ze(It,U,q,!0);continue}let Wt;if(It.key!=null)Wt=Pe.get(It.key);else for(Ae=ue;Ae<=oe;Ae++)if(Xn[Ae-ue]===0&&nn(It,C[Ae])){Wt=Ae;break}Wt===void 0?ze(It,U,q,!0):(Xn[Wt-ue]=z+1,Wt>=pt?pt=Wt:at=!0,x(It,C[Wt],V,null,U,q,Y,G,K),dt++)}const ms=at?Ib(Xn):Ms;for(Ae=ms.length-1,z=rt-1;z>=0;z--){const It=ue+z,Wt=C[It],gs=It+1<ce?C[It+1].el:H;Xn[z]===0?x(null,Wt,V,gs,U,q,Y,G,K):at&&(Ae<0||z!==ms[Ae]?zt(Wt,V,gs,2):Ae--)}}},zt=(I,C,V,H,U=null)=>{const{el:q,type:Y,transition:G,children:K,shapeFlag:z}=I;if(z&6){zt(I.component.subTree,C,V,H);return}if(z&128){I.suspense.move(C,V,H);return}if(z&64){Y.move(I,C,V,se);return}if(Y===Bt){r(q,C,V);for(let J=0;J<K.length;J++)zt(K[J],C,V,H);r(I.anchor,C,V);return}if(Y===Ia){y(I,C,V);return}if(H!==2&&z&1&&G)if(H===0)G.beforeEnter(q),r(q,C,V),ct(()=>G.enter(q),U);else{const{leave:J,delayLeave:oe,afterLeave:ie}=G,ue=()=>r(q,C,V),Pe=()=>{J(q,()=>{ue(),ie&&ie()})};oe?oe(q,ue,Pe):Pe()}else r(q,C,V)},ze=(I,C,V,H=!1,U=!1)=>{const{type:q,props:Y,ref:G,children:K,dynamicChildren:z,shapeFlag:ce,patchFlag:J,dirs:oe,cacheIndex:ie}=I;if(J===-2&&(U=!1),G!=null&&ao(G,null,V,I,!0),ie!=null&&(C.renderCache[ie]=void 0),ce&256){C.ctx.deactivate(I);return}const ue=ce&1&&oe,Pe=!Zr(I);let Ae;if(Pe&&(Ae=Y&&Y.onVnodeBeforeUnmount)&&Ot(Ae,C,I),ce&6)un(I.component,V,H);else{if(ce&128){I.suspense.unmount(V,H);return}ue&&fn(I,null,C,"beforeUnmount"),ce&64?I.type.remove(I,C,V,se,H):z&&!z.hasOnce&&(q!==Bt||J>0&&J&64)?kt(z,C,V,!1,!0):(q===Bt&&J&384||!U&&ce&16)&&kt(K,C,V),H&&We(I)}(Pe&&(Ae=Y&&Y.onVnodeUnmounted)||ue)&&ct(()=>{Ae&&Ot(Ae,C,I),ue&&fn(I,null,C,"unmounted")},V)},We=I=>{const{type:C,el:V,anchor:H,transition:U}=I;if(C===Bt){Yn(V,H);return}if(C===Ia){S(I);return}const q=()=>{s(V),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(I.shapeFlag&1&&U&&!U.persisted){const{leave:Y,delayLeave:G}=U,K=()=>Y(V,q);G?G(I.el,q,K):K()}else q()},Yn=(I,C)=>{let V;for(;I!==C;)V=m(I),s(I),I=V;s(C)},un=(I,C,V)=>{const{bum:H,scope:U,job:q,subTree:Y,um:G,m:K,a:z}=I;Ga(K),Ga(z),H&&Fs(H),U.stop(),q&&(q.flags|=8,ze(Y,I,C,V)),G&&ct(G,C),ct(()=>{I.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&I.asyncDep&&!I.asyncResolved&&I.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},kt=(I,C,V,H=!1,U=!1,q=0)=>{for(let Y=q;Y<I.length;Y++)ze(I[Y],C,V,H,U)},B=I=>{if(I.shapeFlag&6)return B(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const C=m(I.anchor||I.el),V=C&&C[qT];return V?m(V):C};let Z=!1;const X=(I,C,V)=>{I==null?C._vnode&&ze(C._vnode,null,null,!0):x(C._vnode||null,I,C,null,null,null,V),C._vnode=I,Z||(Z=!0,tp(),za(),Z=!1)},se={p:x,um:ze,m:zt,r:We,mt:_e,mc:E,pc:ne,pbc:w,n:B,o:t};let Te,Ne;return e&&([Te,Ne]=e(se)),{render:X,hydrate:Te,createApp:mb(X,Te)}}function Vc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Br({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function yy(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function vy(t,e,n=!1){const r=t.children,s=e.children;if(he(r)&&he(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=ar(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&vy(o,a)),a.type===ts&&(a.el=o.el)}}function Ib(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<h?i=a+1:o=a;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Ey(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ey(e)}function Ga(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Ab=Symbol.for("v-scx"),Rb=()=>Ct(Ab);function Sb(t,e){return Qh(t,null,e)}function _r(t,e,n){return Qh(t,e,n)}function Qh(t,e,n=Me){const{immediate:r,deep:s,flush:i,once:o}=n,a=Ze({},n),c=e&&r||!e&&i!=="post";let h;if(Xs){if(i==="sync"){const g=Rb();h=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=gn,g.resume=gn,g.pause=gn,g}}const u=et;a.call=(g,A,x)=>on(g,u,A,x);let d=!1;i==="post"?a.scheduler=g=>{ct(g,u&&u.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(g,A)=>{A?g():zh(g)}),a.augmentJob=g=>{e&&(g.flags|=4),d&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const m=BT(t,e,a);return Xs&&(h?h.push(m):c&&m()),m}function Pb(t,e,n){const r=this.proxy,s=He(t)?t.includes(".")?wy(r,t):()=>r[t]:t.bind(r,r);let i;de(e)?i=e:(i=e.handler,n=e);const o=xo(this),a=Qh(s,i.bind(r),n);return o(),a}function wy(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Cb=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Xt(e)}Modifiers`]||t[`${Or(e)}Modifiers`];function kb(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Me;let s=n;const i=e.startsWith("update:"),o=i&&Cb(r,e.slice(7));o&&(o.trim&&(s=n.map(u=>He(u)?u.trim():u)),o.number&&(s=n.map(fu)));let a,c=r[a=Sc(e)]||r[a=Sc(Xt(e))];!c&&i&&(c=r[a=Sc(Or(e))]),c&&on(c,t,6,s);const h=r[a+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,on(h,t,6,s)}}function Ty(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!de(t)){const c=h=>{const u=Ty(h,e,!0);u&&(a=!0,Ze(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Le(t)&&r.set(t,null),null):(he(i)?i.forEach(c=>o[c]=null):Ze(o,i),Le(t)&&r.set(t,o),o)}function Nl(t,e){return!t||!Io(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(t,e[0].toLowerCase()+e.slice(1))||ke(t,Or(e))||ke(t,e))}function Lc(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:h,renderCache:u,props:d,data:m,setupState:g,ctx:A,inheritAttrs:x}=t,N=Wa(t);let O,P;try{if(n.shapeFlag&4){const S=s||r,D=S;O=jt(h.call(D,S,u,d,g,m,A)),P=a}else{const S=e;O=jt(S.length>1?S(d,{attrs:a,slots:o,emit:c}):S(d,null)),P=e.props?a:Ob(a)}}catch(S){zi.length=0,ui(S,t,1),O=Ce(it)}let y=O;if(P&&x!==!1){const S=Object.keys(P),{shapeFlag:D}=y;S.length&&D&7&&(i&&S.some(Mh)&&(P=Nb(P,i)),y=Fn(y,P,!1,!0))}return n.dirs&&(y=Fn(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&Gs(y,n.transition),O=y,Wa(N),O}function xb(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(Ys(s)){if(s.type!==it||s.children==="v-if"){if(n)return;n=s}}else return}return n}const Ob=t=>{let e;for(const n in t)(n==="class"||n==="style"||Io(n))&&((e||(e={}))[n]=t[n]);return e},Nb=(t,e)=>{const n={};for(const r in t)(!Mh(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Db(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?fp(r,o,h):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const m=u[d];if(o[m]!==r[m]&&!Nl(h,m))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?fp(r,o,h):!0:!!o;return!1}function fp(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Nl(n,i))return!0}return!1}function Dl({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Qa=t=>t.__isSuspense;let Iu=0;const Mb={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,c,h){if(t==null)Vb(e,n,r,s,i,o,a,c,h);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}Lb(t,e,n,r,s,o,a,c,h)}},hydrate:Fb,normalize:Ub},by=Mb;function lo(t,e){const n=t.props&&t.props[e];de(n)&&n()}function Vb(t,e,n,r,s,i,o,a,c){const{p:h,o:{createElement:u}}=c,d=u("div"),m=t.suspense=Iy(t,s,r,e,d,n,i,o,a,c);h(null,m.pendingBranch=t.ssContent,d,null,r,m,i,o),m.deps>0?(lo(t,"onPending"),lo(t,"onFallback"),h(null,t.ssFallback,e,n,r,null,i,o),js(m,t.ssFallback)):m.resolve(!1,!0)}function Lb(t,e,n,r,s,i,o,a,{p:c,um:h,o:{createElement:u}}){const d=e.suspense=t.suspense;d.vnode=e,e.el=t.el;const m=e.ssContent,g=e.ssFallback,{activeBranch:A,pendingBranch:x,isInFallback:N,isHydrating:O}=d;if(x)d.pendingBranch=m,nn(m,x)?(c(x,m,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0?d.resolve():N&&(O||(c(A,g,n,r,s,null,i,o,a),js(d,g)))):(d.pendingId=Iu++,O?(d.isHydrating=!1,d.activeBranch=x):h(x,s,d),d.deps=0,d.effects.length=0,d.hiddenContainer=u("div"),N?(c(null,m,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0?d.resolve():(c(A,g,n,r,s,null,i,o,a),js(d,g))):A&&nn(m,A)?(c(A,m,n,r,s,d,i,o,a),d.resolve(!0)):(c(null,m,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0&&d.resolve()));else if(A&&nn(m,A))c(A,m,n,r,s,d,i,o,a),js(d,m);else if(lo(e,"onPending"),d.pendingBranch=m,m.shapeFlag&512?d.pendingId=m.component.suspenseId:d.pendingId=Iu++,c(null,m,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0)d.resolve();else{const{timeout:P,pendingId:y}=d;P>0?setTimeout(()=>{d.pendingId===y&&d.fallback(g)},P):P===0&&d.fallback(g)}}function Iy(t,e,n,r,s,i,o,a,c,h,u=!1){const{p:d,m,um:g,n:A,o:{parentNode:x,remove:N}}=h;let O;const P=Bb(t);P&&e&&e.pendingBranch&&(O=e.pendingId,e.deps++);const y=t.props?__(t.props.timeout):void 0,S=i,D={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:Iu++,timeout:typeof y=="number"?y:-1,activeBranch:null,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(L=!1,b=!1){const{vnode:E,activeBranch:v,pendingBranch:w,pendingId:k,effects:R,parentComponent:T,container:_e}=D;let ve=!1;D.isHydrating?D.isHydrating=!1:L||(ve=v&&w.transition&&w.transition.mode==="out-in",ve&&(v.transition.afterLeave=()=>{k===D.pendingId&&(m(w,_e,i===S?A(v):i,0),_u(R))}),v&&(x(v.el)===_e&&(i=A(v)),g(v,T,D,!0)),ve||m(w,_e,i,0)),js(D,w),D.pendingBranch=null,D.isInFallback=!1;let re=D.parent,fe=!1;for(;re;){if(re.pendingBranch){re.effects.push(...R),fe=!0;break}re=re.parent}!fe&&!ve&&_u(R),D.effects=[],P&&e&&e.pendingBranch&&O===e.pendingId&&(e.deps--,e.deps===0&&!b&&e.resolve()),lo(E,"onResolve")},fallback(L){if(!D.pendingBranch)return;const{vnode:b,activeBranch:E,parentComponent:v,container:w,namespace:k}=D;lo(b,"onFallback");const R=A(E),T=()=>{D.isInFallback&&(d(null,L,w,R,v,null,k,a,c),js(D,L))},_e=L.transition&&L.transition.mode==="out-in";_e&&(E.transition.afterLeave=T),D.isInFallback=!0,g(E,v,null,!0),_e||T()},move(L,b,E){D.activeBranch&&m(D.activeBranch,L,b,E),D.container=L},next(){return D.activeBranch&&A(D.activeBranch)},registerDep(L,b,E){const v=!!D.pendingBranch;v&&D.deps++;const w=L.vnode.el;L.asyncDep.catch(k=>{ui(k,L,0)}).then(k=>{if(L.isUnmounted||D.isUnmounted||D.pendingId!==L.suspenseId)return;L.asyncResolved=!0;const{vnode:R}=L;Ru(L,k,!1),w&&(R.el=w);const T=!w&&L.subTree.el;b(L,R,x(w||L.subTree.el),w?null:A(L.subTree),D,o,E),T&&N(T),Dl(L,R.el),v&&--D.deps===0&&D.resolve()})},unmount(L,b){D.isUnmounted=!0,D.activeBranch&&g(D.activeBranch,n,L,b),D.pendingBranch&&g(D.pendingBranch,n,L,b)}};return D}function Fb(t,e,n,r,s,i,o,a,c){const h=e.suspense=Iy(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),u=c(t,h.pendingBranch=e.ssContent,n,h,i,o);return h.deps===0&&h.resolve(!1,!0),u}function Ub(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=dp(r?n.default:n),t.ssFallback=r?dp(n.fallback):Ce(it)}function dp(t){let e;if(de(t)){const n=Qs&&t._c;n&&(t._d=!1,dn()),t=t(),n&&(t._d=!0,e=Dt,Ry())}return he(t)&&(t=xb(t)),t=jt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Ay(t,e){e&&e.pendingBranch?he(t)?e.effects.push(...t):e.effects.push(t):_u(t)}function js(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,Dl(r,s))}function Bb(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const Bt=Symbol.for("v-fgt"),ts=Symbol.for("v-txt"),it=Symbol.for("v-cmt"),Ia=Symbol.for("v-stc"),zi=[];let Dt=null;function dn(t=!1){zi.push(Dt=t?null:[])}function Ry(){zi.pop(),Dt=zi[zi.length-1]||null}let Qs=1;function pp(t,e=!1){Qs+=t,t<0&&Dt&&e&&(Dt.hasOnce=!0)}function Sy(t){return t.dynamicChildren=Qs>0?Dt||Ms:null,Ry(),Qs>0&&Dt&&Dt.push(t),t}function Py(t,e,n,r,s,i){return Sy(Ft(t,e,n,r,s,i,!0))}function Kr(t,e,n,r,s){return Sy(Ce(t,e,n,r,s,!0))}function Ys(t){return t?t.__v_isVNode===!0:!1}function nn(t,e){return t.type===e.type&&t.key===e.key}const Cy=({key:t})=>t??null,Aa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?He(t)||ot(t)||de(t)?{i:Pt,r:t,k:e,f:!!n}:t:null);function Ft(t,e=null,n=null,r=0,s=null,i=t===Bt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Cy(e),ref:e&&Aa(e),scopeId:H_,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Pt};return a?(Yh(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=He(n)?8:16),Qs>0&&!o&&Dt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Dt.push(c),c}const Ce=jb;function jb(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===ry)&&(t=it),Ys(t)){const a=Fn(t,e,!0);return n&&Yh(a,n),Qs>0&&!i&&Dt&&(a.shapeFlag&6?Dt[Dt.indexOf(t)]=a:Dt.push(a)),a.patchFlag=-2,a}if(Yb(t)&&(t=t.__vccOpts),e){e=ky(e);let{class:a,style:c}=e;a&&!He(a)&&(e.class=Ro(a)),Le(c)&&(qh(c)&&!he(c)&&(c=Ze({},c)),e.style=Cl(c))}const o=He(t)?1:Qa(t)?128:q_(t)?64:Le(t)?4:de(t)?2:0;return Ft(t,e,n,r,s,o,i,!0)}function ky(t){return t?qh(t)||uy(t)?Ze({},t):t:null}function Fn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,h=e?$b(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Cy(h),ref:e&&e.ref?n&&i?he(i)?i.concat(Aa(e)):[i,Aa(e)]:Aa(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Bt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Fn(t.ssContent),ssFallback:t.ssFallback&&Fn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Gs(u,c.clone(u)),u}function Gr(t=" ",e=0){return Ce(ts,null,t,e)}function mL(t="",e=!1){return e?(dn(),Kr(it,null,t)):Ce(it,null,t)}function jt(t){return t==null||typeof t=="boolean"?Ce(it):he(t)?Ce(Bt,null,t.slice()):Ys(t)?ar(t):Ce(ts,null,String(t))}function ar(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Fn(t)}function Yh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(he(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Yh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!uy(e)?e._ctx=Pt:s===3&&Pt&&(Pt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:Pt},n=32):(e=String(e),r&64?(n=16,e=[Gr(e)]):n=8);t.children=e,t.shapeFlag|=n}function $b(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ro([e.class,r.class]));else if(s==="style")e.style=Cl([e.style,r.style]);else if(Io(s)){const i=e[s],o=r[s];o&&i!==o&&!(he(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ot(t,e,n,r=null){on(t,e,7,[n,r])}const Hb=oy();let qb=0;function zb(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Hb,i={uid:qb++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new w_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fy(r,s),emitsOptions:Ty(r,s),emit:null,emitted:null,propsDefaults:Me,inheritAttrs:r.inheritAttrs,ctx:Me,data:Me,props:Me,attrs:Me,slots:Me,refs:Me,setupState:Me,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=kb.bind(null,i),t.ce&&t.ce(i),i}let et=null;const Ml=()=>et||Pt;let Ya,Au;{const t=Pl(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ya=e("__VUE_INSTANCE_SETTERS__",n=>et=n),Au=e("__VUE_SSR_SETTERS__",n=>Xs=n)}const xo=t=>{const e=et;return Ya(t),t.scope.on(),()=>{t.scope.off(),Ya(e)}},mp=()=>{et&&et.scope.off(),Ya(null)};function xy(t){return t.vnode.shapeFlag&4}let Xs=!1;function Wb(t,e=!1,n=!1){e&&Au(e);const{props:r,children:s}=t.vnode,i=xy(t);gb(t,r,i,e),Eb(t,s,n);const o=i?Kb(t,e):void 0;return e&&Au(!1),o}function Kb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,lb);const{setup:r}=n;if(r){Nr();const s=t.setupContext=r.length>1?Qb(t):null,i=xo(t),o=So(r,t,0,[t.props,s]),a=d_(o);if(Dr(),i(),(a||t.sp)&&!Zr(t)&&Wh(t),a){if(o.then(mp,mp),e)return o.then(c=>{Ru(t,c,e)}).catch(c=>{ui(c,t,0)});t.asyncDep=o}else Ru(t,o,e)}else Oy(t,e)}function Ru(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Le(e)&&(t.setupState=U_(e)),Oy(t,n)}let gp;function Oy(t,e,n){const r=t.type;if(!t.render){if(!e&&gp&&!r.render){const s=r.template||Kh(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,h=Ze(Ze({isCustomElement:i,delimiters:a},o),c);r.render=gp(s,h)}}t.render=r.render||gn}{const s=xo(t);Nr();try{cb(t)}finally{Dr(),s()}}}const Gb={get(t,e){return vt(t,"get",""),t[e]}};function Qb(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Gb),slots:t.slots,emit:t.emit,expose:e}}function Vl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(U_(kT(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in qi)return qi[n](t)},has(e,n){return n in e||n in qi}})):t.proxy}function Su(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function Yb(t){return de(t)&&"__vccOpts"in t}const Ue=(t,e)=>FT(t,e,Xs);function $t(t,e,n){const r=arguments.length;return r===2?Le(e)&&!he(e)?Ys(e)?Ce(t,null,[e]):Ce(t,e):Ce(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ys(n)&&(n=[n]),Ce(t,e,n))}const Ny="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pu;const _p=typeof window<"u"&&window.trustedTypes;if(_p)try{Pu=_p.createPolicy("vue",{createHTML:t=>t})}catch{}const Dy=Pu?t=>Pu.createHTML(t):t=>t,Xb="http://www.w3.org/2000/svg",Jb="http://www.w3.org/1998/Math/MathML",Cn=typeof document<"u"?document:null,yp=Cn&&Cn.createElement("template"),Zb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Cn.createElementNS(Xb,t):e==="mathml"?Cn.createElementNS(Jb,t):n?Cn.createElement(t,{is:n}):Cn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Cn.createTextNode(t),createComment:t=>Cn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Cn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{yp.innerHTML=Dy(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=yp.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},tr="transition",Ni="animation",co=Symbol("_vtc"),My={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},eI=Ze({},z_,My),tI=t=>(t.displayName="Transition",t.props=eI,t),nI=tI((t,{slots:e})=>$t(KT,rI(t),e)),jr=(t,e=[])=>{he(t)?t.forEach(n=>n(...e)):t&&t(...e)},vp=t=>t?he(t)?t.some(e=>e.length>1):t.length>1:!1;function rI(t){const e={};for(const R in t)R in My||(e[R]=t[R]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:h=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,A=sI(s),x=A&&A[0],N=A&&A[1],{onBeforeEnter:O,onEnter:P,onEnterCancelled:y,onLeave:S,onLeaveCancelled:D,onBeforeAppear:L=O,onAppear:b=P,onAppearCancelled:E=y}=e,v=(R,T,_e,ve)=>{R._enterCancelled=ve,$r(R,T?u:a),$r(R,T?h:o),_e&&_e()},w=(R,T)=>{R._isLeaving=!1,$r(R,d),$r(R,g),$r(R,m),T&&T()},k=R=>(T,_e)=>{const ve=R?b:P,re=()=>v(T,R,_e);jr(ve,[T,re]),Ep(()=>{$r(T,R?c:i),Sn(T,R?u:a),vp(ve)||wp(T,r,x,re)})};return Ze(e,{onBeforeEnter(R){jr(O,[R]),Sn(R,i),Sn(R,o)},onBeforeAppear(R){jr(L,[R]),Sn(R,c),Sn(R,h)},onEnter:k(!1),onAppear:k(!0),onLeave(R,T){R._isLeaving=!0;const _e=()=>w(R,T);Sn(R,d),R._enterCancelled?(Sn(R,m),Ip()):(Ip(),Sn(R,m)),Ep(()=>{R._isLeaving&&($r(R,d),Sn(R,g),vp(S)||wp(R,r,N,_e))}),jr(S,[R,_e])},onEnterCancelled(R){v(R,!1,void 0,!0),jr(y,[R])},onAppearCancelled(R){v(R,!0,void 0,!0),jr(E,[R])},onLeaveCancelled(R){w(R),jr(D,[R])}})}function sI(t){if(t==null)return null;if(Le(t))return[Fc(t.enter),Fc(t.leave)];{const e=Fc(t);return[e,e]}}function Fc(t){return __(t)}function Sn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[co]||(t[co]=new Set)).add(e)}function $r(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[co];n&&(n.delete(e),n.size||(t[co]=void 0))}function Ep(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let iI=0;function wp(t,e,n,r){const s=t._endId=++iI,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=oI(t,e);if(!o)return r();const h=o+"end";let u=0;const d=()=>{t.removeEventListener(h,m),i()},m=g=>{g.target===t&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},a+1),t.addEventListener(h,m)}function oI(t,e){const n=window.getComputedStyle(t),r=A=>(n[A]||"").split(", "),s=r(`${tr}Delay`),i=r(`${tr}Duration`),o=Tp(s,i),a=r(`${Ni}Delay`),c=r(`${Ni}Duration`),h=Tp(a,c);let u=null,d=0,m=0;e===tr?o>0&&(u=tr,d=o,m=i.length):e===Ni?h>0&&(u=Ni,d=h,m=c.length):(d=Math.max(o,h),u=d>0?o>h?tr:Ni:null,m=u?u===tr?i.length:c.length:0);const g=u===tr&&/\b(transform|all)(,|$)/.test(r(`${tr}Property`).toString());return{type:u,timeout:d,propCount:m,hasTransform:g}}function Tp(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>bp(n)+bp(t[r])))}function bp(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Ip(){return document.body.offsetHeight}function aI(t,e,n){const r=t[co];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ap=Symbol("_vod"),lI=Symbol("_vsh"),cI=Symbol(""),uI=/(^|;)\s*display\s*:/;function hI(t,e,n){const r=t.style,s=He(n);let i=!1;if(n&&!s){if(e)if(He(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ra(r,a,"")}else for(const o in e)n[o]==null&&Ra(r,o,"");for(const o in n)o==="display"&&(i=!0),Ra(r,o,n[o])}else if(s){if(e!==n){const o=r[cI];o&&(n+=";"+o),r.cssText=n,i=uI.test(n)}}else e&&t.removeAttribute("style");Ap in t&&(t[Ap]=i?r.display:"",t[lI]&&(r.display="none"))}const Rp=/\s*!important$/;function Ra(t,e,n){if(he(n))n.forEach(r=>Ra(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=fI(t,e);Rp.test(n)?t.setProperty(Or(r),n.replace(Rp,""),"important"):t[r]=n}}const Sp=["Webkit","Moz","ms"],Uc={};function fI(t,e){const n=Uc[e];if(n)return n;let r=Xt(e);if(r!=="filter"&&r in t)return Uc[e]=r;r=Sl(r);for(let s=0;s<Sp.length;s++){const i=Sp[s]+r;if(i in t)return Uc[e]=i}return e}const Pp="http://www.w3.org/1999/xlink";function Cp(t,e,n,r,s,i=lT(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Pp,e.slice(6,e.length)):t.setAttributeNS(Pp,e,n):n==null||i&&!y_(n)?t.removeAttribute(e):t.setAttribute(e,i?"":xr(n)?String(n):n)}function kp(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Dy(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=y_(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Is(t,e,n,r){t.addEventListener(e,n,r)}function dI(t,e,n,r){t.removeEventListener(e,n,r)}const xp=Symbol("_vei");function pI(t,e,n,r,s=null){const i=t[xp]||(t[xp]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=mI(e);if(r){const h=i[e]=yI(r,s);Is(t,a,h,c)}else o&&(dI(t,a,o,c),i[e]=void 0)}}const Op=/(?:Once|Passive|Capture)$/;function mI(t){let e;if(Op.test(t)){e={};let r;for(;r=t.match(Op);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Or(t.slice(2)),e]}let Bc=0;const gI=Promise.resolve(),_I=()=>Bc||(gI.then(()=>Bc=0),Bc=Date.now());function yI(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;on(vI(r,n.value),e,5,[r])};return n.value=t,n.attached=_I(),n}function vI(t,e){if(he(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Np=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,EI=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?aI(t,r,o):e==="style"?hI(t,n,r):Io(e)?Mh(e)||pI(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):wI(t,e,r,o))?(kp(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Cp(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!He(r))?kp(t,Xt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Cp(t,e,r,o))};function wI(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Np(e)&&de(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Np(e)&&He(n)?!1:e in t}const Dp=t=>{const e=t.props["onUpdate:modelValue"]||!1;return he(e)?n=>Fs(e,n):e};function TI(t){t.target.composing=!0}function Mp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const jc=Symbol("_assign"),bI={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[jc]=Dp(s);const i=r||s.props&&s.props.type==="number";Is(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=fu(a)),t[jc](a)}),n&&Is(t,"change",()=>{t.value=t.value.trim()}),e||(Is(t,"compositionstart",TI),Is(t,"compositionend",Mp),Is(t,"change",Mp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[jc]=Dp(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?fu(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},II=["ctrl","shift","alt","meta"],AI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>II.some(n=>t[`${n}Key`]&&!e.includes(n))},gL=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=AI[e[o]];if(a&&a(s,e))return}return t(s,...i)})},RI={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},SI=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=Or(s.key);if(e.some(o=>o===i||RI[o]===i))return t(s)})},Vy=Ze({patchProp:EI},Zb);let Wi,Vp=!1;function PI(){return Wi||(Wi=Tb(Vy))}function CI(){return Wi=Vp?Wi:bb(Vy),Vp=!0,Wi}const kI=(...t)=>{const e=PI().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Fy(r);if(!s)return;const i=e._component;!de(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Ly(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},xI=(...t)=>{const e=CI().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Fy(r);if(s)return n(s,!0,Ly(s))},e};function Ly(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Fy(t){return He(t)?document.querySelector(t):t}const OI=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,NI=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,DI=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function MI(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){VI(t);return}return e}function VI(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function Xa(t,e={}){if(typeof t!="string")return t;const n=t.trim();if(t[0]==='"'&&t.endsWith('"')&&!t.includes("\\"))return n.slice(1,-1);if(n.length<=9){const r=n.toLowerCase();if(r==="true")return!0;if(r==="false")return!1;if(r==="undefined")return;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r==="-infinity")return Number.NEGATIVE_INFINITY}if(!DI.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(OI.test(t)||NI.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,MI)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const LI=/#/g,FI=/&/g,UI=/\//g,BI=/=/g,Xh=/\+/g,jI=/%5e/gi,$I=/%60/gi,HI=/%7c/gi,qI=/%20/gi;function zI(t){return encodeURI(""+t).replace(HI,"|")}function Cu(t){return zI(typeof t=="string"?t:JSON.stringify(t)).replace(Xh,"%2B").replace(qI,"+").replace(LI,"%23").replace(FI,"%26").replace($I,"`").replace(jI,"^").replace(UI,"%2F")}function $c(t){return Cu(t).replace(BI,"%3D")}function Ja(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function WI(t){return Ja(t.replace(Xh," "))}function KI(t){return Ja(t.replace(Xh," "))}function Uy(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=WI(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=KI(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function GI(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${$c(t)}=${Cu(n)}`).join("&"):`${$c(t)}=${Cu(e)}`:$c(t)}function QI(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>GI(e,t[e])).filter(Boolean).join("&")}const YI=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,XI=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,JI=/^([/\\]\s*){2,}[^/\\]/,ZI=/^[\s\0]*(blob|data|javascript|vbscript):$/i,eA=/\/$|\/\?|\/#/,tA=/^\.?\//;function Kn(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?YI.test(t):XI.test(t)||(e.acceptRelative?JI.test(t):!1)}function nA(t){return!!t&&ZI.test(t)}function ku(t="",e){return e?eA.test(t):t.endsWith("/")}function Ll(t="",e){if(!e)return(ku(t)?t.slice(0,-1):t)||"/";if(!ku(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");s>=0&&(n=t.slice(0,s),r=t.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function Za(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(ku(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");if(s>=0&&(n=t.slice(0,s),r=t.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function rA(t=""){return t.startsWith("/")}function Lp(t=""){return rA(t)?t:"/"+t}function sA(t,e){if(jy(e)||Kn(t))return t;const n=Ll(e);return t.startsWith(n)?t:Fl(n,t)}function Fp(t,e){if(jy(e))return t;const n=Ll(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function By(t,e){const n=aA(t),r={...Uy(n.search),...e};return n.search=QI(r),lA(n)}function jy(t){return!t||t==="/"}function iA(t){return t&&t!=="/"}function Fl(t,...e){let n=t||"";for(const r of e.filter(s=>iA(s)))if(n){const s=r.replace(tA,"");n=Za(n)+s}else n=r;return n}function $y(...t){var o,a,c,h;const e=/\/(?!\/)/,n=t.filter(Boolean),r=[];let s=0;for(const u of n)if(!(!u||u==="/")){for(const[d,m]of u.split(e).entries())if(!(!m||m===".")){if(m===".."){if(r.length===1&&Kn(r[0]))continue;r.pop(),s--;continue}if(d===1&&((o=r[r.length-1])!=null&&o.endsWith(":/"))){r[r.length-1]+="/"+m;continue}r.push(m),s++}}let i=r.join("/");return s>=0?(a=n[0])!=null&&a.startsWith("/")&&!i.startsWith("/")?i="/"+i:(c=n[0])!=null&&c.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,(h=n[n.length-1])!=null&&h.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function oA(t,e,n={}){return n.trailingSlash||(t=Za(t),e=Za(e)),n.leadingSlash||(t=Lp(t),e=Lp(e)),n.encoding||(t=Ja(t),e=Ja(e)),t===e}const Hy=Symbol.for("ufo:protocolRelative");function aA(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,d,m=""]=n;return{protocol:d.toLowerCase(),pathname:m,href:d+m,auth:"",host:"",search:"",hash:""}}if(!Kn(t,{acceptRelative:!0}))return Up(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:c,search:h,hash:u}=Up(a);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:c,search:h,hash:u,[Hy]:!r}}function Up(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function lA(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[Hy]?(t.protocol||"")+"//":"")+s+i+e+n+r}class cA extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function uA(t){var c,h,u,d,m;const e=((c=t.error)==null?void 0:c.message)||((h=t.error)==null?void 0:h.toString())||"",n=((u=t.request)==null?void 0:u.method)||((d=t.options)==null?void 0:d.method)||"GET",r=((m=t.request)==null?void 0:m.url)||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,a=new cA(o,t.error?{cause:t.error}:void 0);for(const g of["request","options","response"])Object.defineProperty(a,g,{get(){return t[g]}});for(const[g,A]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,g,{get(){return t.response&&t.response[A]}});return a}const hA=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Bp(t="GET"){return hA.has(t.toUpperCase())}function fA(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const dA=new Set(["image/svg","application/xml","application/xhtml","application/html"]),pA=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function mA(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return pA.test(e)?"json":dA.has(e)||e.startsWith("text/")?"text":"blob"}function gA(t,e,n,r){const s=_A((e==null?void 0:e.headers)??(t==null?void 0:t.headers),n==null?void 0:n.headers,r);let i;return(n!=null&&n.query||n!=null&&n.params||e!=null&&e.params||e!=null&&e.query)&&(i={...n==null?void 0:n.params,...n==null?void 0:n.query,...e==null?void 0:e.params,...e==null?void 0:e.query}),{...n,...e,query:i,params:i,headers:s}}function _A(t,e,n){if(!e)return new n(t);const r=new n(e);if(t)for(const[s,i]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))r.set(s,i);return r}async function fa(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const yA=new Set([408,409,425,429,500,502,503,504]),vA=new Set([101,204,205,304]);function qy(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(a){const c=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!c){let u;typeof a.options.retry=="number"?u=a.options.retry:u=Bp(a.options.method)?0:1;const d=a.response&&a.response.status||500;if(u>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(d):yA.has(d))){const m=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return m>0&&await new Promise(g=>setTimeout(g,m)),i(a.request,{...a.options,retry:u-1})}}const h=uA(a);throw Error.captureStackTrace&&Error.captureStackTrace(h,i),h}const i=async function(c,h={}){const u={request:c,options:gA(c,h,t.defaults,n),response:void 0,error:void 0};u.options.method&&(u.options.method=u.options.method.toUpperCase()),u.options.onRequest&&await fa(u,u.options.onRequest),typeof u.request=="string"&&(u.options.baseURL&&(u.request=sA(u.request,u.options.baseURL)),u.options.query&&(u.request=By(u.request,u.options.query),delete u.options.query),"query"in u.options&&delete u.options.query,"params"in u.options&&delete u.options.params),u.options.body&&Bp(u.options.method)&&(fA(u.options.body)?(u.options.body=typeof u.options.body=="string"?u.options.body:JSON.stringify(u.options.body),u.options.headers=new n(u.options.headers||{}),u.options.headers.has("content-type")||u.options.headers.set("content-type","application/json"),u.options.headers.has("accept")||u.options.headers.set("accept","application/json")):("pipeTo"in u.options.body&&typeof u.options.body.pipeTo=="function"||typeof u.options.body.pipe=="function")&&("duplex"in u.options||(u.options.duplex="half")));let d;if(!u.options.signal&&u.options.timeout){const g=new r;d=setTimeout(()=>{const A=new Error("[TimeoutError]: The operation was aborted due to timeout");A.name="TimeoutError",A.code=23,g.abort(A)},u.options.timeout),u.options.signal=g.signal}try{u.response=await e(u.request,u.options)}catch(g){return u.error=g,u.options.onRequestError&&await fa(u,u.options.onRequestError),await s(u)}finally{d&&clearTimeout(d)}if((u.response.body||u.response._bodyInit)&&!vA.has(u.response.status)&&u.options.method!=="HEAD"){const g=(u.options.parseResponse?"json":u.options.responseType)||mA(u.response.headers.get("content-type")||"");switch(g){case"json":{const A=await u.response.text(),x=u.options.parseResponse||Xa;u.response._data=x(A);break}case"stream":{u.response._data=u.response.body||u.response._bodyInit;break}default:u.response._data=await u.response[g]()}}return u.options.onResponse&&await fa(u,u.options.onResponse),!u.options.ignoreResponseError&&u.response.status>=400&&u.response.status<600?(u.options.onResponseError&&await fa(u,u.options.onResponseError),await s(u)):u.response},o=async function(c,h){return(await i(c,h))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={},c={})=>qy({...t,...c,defaults:{...t.defaults,...c.defaults,...a}}),o}const el=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),EA=el.fetch?(...t)=>el.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),wA=el.Headers,TA=el.AbortController,bA=qy({fetch:EA,Headers:wA,AbortController:TA}),IA=bA,AA=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},tl=AA().app,RA=()=>tl.baseURL,SA=()=>tl.buildAssetsDir,Jh=(...t)=>$y(zy(),SA(),...t),zy=(...t)=>{const e=tl.cdnURL||tl.baseURL;return t.length?$y(e,...t):e};globalThis.__buildAssetsURL=Jh,globalThis.__publicAssetsURL=zy;globalThis.$fetch||(globalThis.$fetch=IA.create({baseURL:RA()}));function xu(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?xu(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const PA={run:t=>t()},CA=()=>PA,Wy=typeof console.createTask<"u"?console.createTask:CA;function kA(t,e){const n=e.shift(),r=Wy(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function xA(t,e){const n=e.shift(),r=Wy(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function Hc(t,e){for(const n of[...t])n(e)}class OA{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=xu(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=xu(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(kA,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(xA,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&Hc(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&Hc(this._after,s)}):(this._after&&s&&Hc(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function Ky(){return new OA}function NA(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s&&e===void 0){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{r(o),e=o;try{return s?s.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const c=()=>{e=o},h=()=>e===o?c:void 0;Ou.add(h);try{const u=s?s.run(o,a):a();return n||(e=void 0),await u}finally{Ou.delete(h)}}}}function DA(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=NA({...t,...r})),e[n],e[n]}}}const nl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},jp="__unctx__",MA=nl[jp]||(nl[jp]=DA()),VA=(t,e={})=>MA.get(t,e),$p="__unctx_async_handlers__",Ou=nl[$p]||(nl[$p]=new Set);function $s(t){const e=[];for(const s of Ou){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const Nu=!1,LA=!1,FA={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},UA=null,BA="#__nuxt",Gy="nuxt-app",Hp=36e5,jA="vite:preloadError";function Qy(t=Gy){return VA(t,{asyncContext:!1})}const $A="__nuxt_plugin";function HA(t){var s;let e=0;const n={_id:t.id||Gy||"nuxt-app",_scope:uT(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.14.1592"},get vue(){return n.vueApp.version}},payload:Nn({...((s=t.ssrContext)==null?void 0:s.payload)||{},data:Nn({}),state:Mr({}),once:new Set,_errors:Nn({})}),static:{data:{}},runWithContext(i){return n._scope.active&&!T_()?n._scope.run(()=>qp(n,i)):qp(n,i)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let i=!1;return()=>{if(!i&&(i=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:Nn({}),_payloadRevivers:{},...t};{const i=window.__NUXT__;if(i)for(const o in i)switch(o){case"data":case"state":case"_errors":Object.assign(n.payload[o],i[o]);break;default:n.payload[o]=i[o]}}n.hooks=Ky(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(i,o)=>{const a="$"+i;da(n,a,o),da(n.vueApp.config.globalProperties,a,o)},da(n.vueApp,"$nuxt",n),da(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(jA,o=>{n.callHook("app:chunkError",{error:o.payload}),(n.isHydrating||o.payload.message.includes("Unable to preload CSS"))&&o.preventDefault()}),window.useNuxtApp=window.useNuxtApp||Ke;const i=n.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});n.hook("app:mounted",i)}const r=n.payload.config;return n.provide("config",r),n}function qA(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function zA(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function WA(t,e){const n=[],r=[],s=[],i=[];let o=0;async function a(c){var u;const h=((u=c.dependsOn)==null?void 0:u.filter(d=>e.some(m=>m._name===d)&&!n.includes(d)))??[];if(h.length>0)r.push([new Set(h),c]);else{const d=zA(t,c).then(async()=>{c._name&&(n.push(c._name),await Promise.all(r.map(async([m,g])=>{m.has(c._name)&&(m.delete(c._name),m.size===0&&(o++,await a(g)))})))});c.parallel?s.push(d.catch(m=>i.push(m))):await d}}for(const c of e)qA(t,c);for(const c of e)await a(c);if(await Promise.all(s),o)for(let c=0;c<o;c++)await Promise.all(s);if(i.length)throw i[0]}function cn(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[$A]:!0,_name:e})}function qp(t,e,n){const r=()=>e();return Qy(t._id).set(t),t.vueApp.runWithContext(r)}function KA(t){var n;let e;return ay()&&(e=(n=Ml())==null?void 0:n.appContext.app.$nuxt),e=e||Qy(t).tryUse(),e||null}function Ke(t){const e=KA(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function hi(t){return Ke().$config}function da(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function GA(t,e){return{ctx:{table:t},matchAll:n=>Xy(n,t)}}function Yy(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,s])=>[r,Yy(s)])):new Map(Object.entries(t[n]));return e}function QA(t){return GA(Yy(t))}function Xy(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const r=[];for(const[i,o]of zp(e.wildcard))(t===i||t.startsWith(i+"/"))&&r.push(o);for(const[i,o]of zp(e.dynamic))if(t.startsWith(i+"/")){const a="/"+t.slice(i.length).split("/").splice(2).join("/");r.push(...Xy(a,o))}const s=e.static.get(t);return s&&r.push(s),r.filter(Boolean)}function zp(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function qc(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function Du(t,e,n=".",r){if(!qc(e))return Du(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:qc(o)&&qc(s[i])?s[i]=Du(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function YA(t){return(...e)=>e.reduce((n,r)=>Du(n,r,"",t),{})}const Jy=YA();function XA(t,e){try{return e in t}catch{return!1}}var JA=Object.defineProperty,ZA=(t,e,n)=>e in t?JA(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,zr=(t,e,n)=>(ZA(t,typeof e!="symbol"?e+"":e,n),n);class Mu extends Error{constructor(e,n={}){super(e,n),zr(this,"statusCode",500),zr(this,"fatal",!1),zr(this,"unhandled",!1),zr(this,"statusMessage"),zr(this,"data"),zr(this,"cause"),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const e={message:this.message,statusCode:Lu(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=Zy(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}zr(Mu,"__h3_error__",!0);function Vu(t){if(typeof t=="string")return new Mu(t);if(eR(t))return t;const e=new Mu(t.message??t.statusMessage??"",{cause:t.cause||t});if(XA(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=Lu(t.statusCode,e.statusCode):t.status&&(e.statusCode=Lu(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;Zy(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function eR(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const tR=/[^\u0009\u0020-\u007E]/g;function Zy(t=""){return t.replace(tR,"")}function Lu(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const nR=Symbol("layout-meta"),Ul=Symbol("route"),Vt=()=>{var t;return(t=Ke())==null?void 0:t.$router},ev=()=>ay()?Ct(Ul,Ke()._route):Ke()._route;const rR=()=>{try{if(Ke()._processingMiddleware)return!0}catch{return!1}return!1},sR=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:"path"in t?Fu(t):Vt().resolve(t).href;if(e!=null&&e.open){const{target:c="_blank",windowFeatures:h={}}=e.open,u=Object.entries(h).filter(([d,m])=>m!==void 0).map(([d,m])=>`${d.toLowerCase()}=${m}`).join(", ");return open(n,c,u),Promise.resolve()}const r=Kn(n,{acceptRelative:!0}),s=(e==null?void 0:e.external)||r;if(s){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:c}=new URL(n,window.location.href);if(c&&nA(c))throw new Error(`Cannot navigate to a URL with '${c}' protocol.`)}const i=rR();if(!s&&i)return t;const o=Vt(),a=Ke();return s?(a._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(t):o.push(t)};function Fu(t){return By(t.path||"",t.query||{})+(t.hash||"")}const tv="__nuxt_error",Bl=()=>MT(Ke().payload,"error"),xs=t=>{const e=jl(t);try{const n=Ke(),r=Bl();n.hooks.callHook("app:error",e),r.value=r.value||e}catch{throw e}return e},iR=async(t={})=>{const e=Ke(),n=Bl();e.callHook("app:error:cleared",t),t.redirect&&await Vt().replace(t.redirect),n.value=UA},oR=t=>!!t&&typeof t=="object"&&tv in t,jl=t=>{const e=Vu(t);return Object.defineProperty(e,tv,{value:!0,configurable:!1,writable:!1}),e};function Wp(t){const e=lR(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let s=0;s<n.byteLength;s++)r.setUint8(s,e.charCodeAt(s));return n}const aR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function lR(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let s=0;s<t.length;s++)n<<=6,n|=aR.indexOf(t[s]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const cR=-1,uR=-2,hR=-3,fR=-4,dR=-5,pR=-6;function mR(t,e){return gR(JSON.parse(t),e)}function gR(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===cR)return;if(i===hR)return NaN;if(i===fR)return 1/0;if(i===dR)return-1/0;if(i===pR)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const a=n[i];if(!a||typeof a!="object")r[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const c=a[0],h=e==null?void 0:e[c];if(h)return r[i]=h(s(a[1]));switch(c){case"Date":r[i]=new Date(a[1]);break;case"Set":const u=new Set;r[i]=u;for(let g=1;g<a.length;g+=1)u.add(s(a[g]));break;case"Map":const d=new Map;r[i]=d;for(let g=1;g<a.length;g+=2)d.set(s(a[g]),s(a[g+1]));break;case"RegExp":r[i]=new RegExp(a[1],a[2]);break;case"Object":r[i]=Object(a[1]);break;case"BigInt":r[i]=BigInt(a[1]);break;case"null":const m=Object.create(null);r[i]=m;for(let g=1;g<a.length;g+=2)m[a[g]]=s(a[g+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const g=globalThis[c],A=a[1],x=Wp(A),N=new g(x);r[i]=N;break}case"ArrayBuffer":{const g=a[1],A=Wp(g);r[i]=A;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(a.length);r[i]=c;for(let h=0;h<a.length;h+=1){const u=a[h];u!==uR&&(c[h]=s(u))}}else{const c={};r[i]=c;for(const h in a){const u=a[h];c[h]=s(u)}}return r[i]}return s(0)}const _R=new Set(["title","titleTemplate","script","style","noscript"]),Sa=new Set(["base","meta","link","style","script","noscript"]),yR=new Set(["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),vR=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),nv=new Set(["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"]),ER=typeof window<"u";function rl(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Uu(t){if(t._h)return t._h;if(t._d)return rl(t._d);let e=`${t.tag}:${t.textContent||t.innerHTML||""}:`;for(const n in t.props)e+=`${n}:${String(t.props[n])},`;return rl(e)}function wR(t,e){return t instanceof Promise?t.then(e):e(t)}function Bu(t,e,n,r){const s=r||sv(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},t==="templateParams"||t==="titleTemplate");if(s instanceof Promise)return s.then(o=>Bu(t,e,n,o));const i={tag:t,props:s};for(const o of nv){const a=i.props[o]!==void 0?i.props[o]:n[o];a!==void 0&&((!(o==="innerHTML"||o==="textContent"||o==="children")||_R.has(i.tag))&&(i[o==="children"?"innerHTML":o]=a),delete i.props[o])}return i.props.body&&(i.tagPosition="bodyClose",delete i.props.body),i.tag==="script"&&typeof i.innerHTML=="object"&&(i.innerHTML=JSON.stringify(i.innerHTML),i.props.type=i.props.type||"application/json"),Array.isArray(i.props.content)?i.props.content.map(o=>({...i,props:{...i.props,content:o}})):i}function TR(t,e){var r;const n=t==="class"?" ":";";return e&&typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,s])=>s).map(([s,i])=>t==="style"?`${s}:${i}`:s)),(r=String(Array.isArray(e)?e.join(n):e))==null?void 0:r.split(n).filter(s=>!!s.trim()).join(n)}function rv(t,e,n,r){for(let s=r;s<n.length;s+=1){const i=n[s];if(i==="class"||i==="style"){t[i]=TR(i,t[i]);continue}if(t[i]instanceof Promise)return t[i].then(o=>(t[i]=o,rv(t,e,n,s)));if(!e&&!nv.has(i)){const o=String(t[i]),a=i.startsWith("data-");o==="true"||o===""?t[i]=a?"true":!0:t[i]||(a&&o==="false"?t[i]="false":delete t[i])}}}function sv(t,e=!1){const n=rv(t,e,Object.keys(t),0);return n instanceof Promise?n.then(()=>t):t}const bR=10;function iv(t,e,n){for(let r=n;r<e.length;r+=1){const s=e[r];if(s instanceof Promise)return s.then(i=>(e[r]=i,iv(t,e,r)));Array.isArray(s)?t.push(...s):t.push(s)}}function IR(t){const e=[],n=t.resolvedInput;for(const s in n){if(!Object.prototype.hasOwnProperty.call(n,s))continue;const i=n[s];if(!(i===void 0||!yR.has(s))){if(Array.isArray(i)){for(const o of i)e.push(Bu(s,o,t));continue}e.push(Bu(s,i,t))}}if(e.length===0)return[];const r=[];return wR(iv(r,e,0),()=>r.map((s,i)=>(s._e=t._i,t.mode&&(s._m=t.mode),s._p=(t._i<<bR)+i,s)))}const Kp=new Set(["onload","onerror","onabort","onprogress","onloadstart"]),Gp={base:-10,title:10},Qp={critical:-80,high:-10,low:20};function sl(t){const e=t.tagPriority;if(typeof e=="number")return e;let n=100;return t.tag==="meta"?t.props["http-equiv"]==="content-security-policy"?n=-30:t.props.charset?n=-20:t.props.name==="viewport"&&(n=-15):t.tag==="link"&&t.props.rel==="preconnect"?n=20:t.tag in Gp&&(n=Gp[t.tag]),e&&e in Qp?n+Qp[e]:n}const AR=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],RR=["name","property","http-equiv"];function ov(t){const{props:e,tag:n}=t;if(vR.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(e.id)return`${n}:id:${e.id}`;for(const r of RR)if(e[r]!==void 0)return`${n}:${r}:${e[r]}`;return!1}const lr="%separator";function SR(t,e,n=!1){var s;let r;if(e==="s"||e==="pageTitle")r=t.pageTitle;else if(e.includes(".")){const i=e.indexOf(".");r=(s=t[e.substring(0,i)])==null?void 0:s[e.substring(i+1)]}else r=t[e];if(r!==void 0)return n?(r||"").replace(/"/g,'\\"'):r||""}const PR=new RegExp(`${lr}(?:\\s*${lr})*`,"g");function pa(t,e,n,r=!1){if(typeof t!="string"||!t.includes("%"))return t;let s=t;try{s=decodeURI(t)}catch{}const i=s.match(/%\w+(?:\.\w+)?/g);if(!i)return t;const o=t.includes(lr);return t=t.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===lr||!i.includes(a))return a;const c=SR(e,a.slice(1),r);return c!==void 0?c:a}).trim(),o&&(t.endsWith(lr)&&(t=t.slice(0,-lr.length)),t.startsWith(lr)&&(t=t.slice(lr.length)),t=t.replace(PR,n).trim()),t}function Yp(t,e){return t==null?e||null:typeof t=="function"?t(e):t}async function av(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!!r.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async s=>{var d;const i=(await t.resolveTags()).map(m=>({tag:m,id:Sa.has(m.tag)?Uu(m):m.tag,shouldRender:!0}));let o=t._dom;if(!o){o={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};const m=new Set;for(const g of["body","head"]){const A=(d=n[g])==null?void 0:d.children;for(const x of A){const N=x.tagName.toLowerCase();if(!Sa.has(N))continue;const O={tag:N,props:await sv(x.getAttributeNames().reduce((D,L)=>({...D,[L]:x.getAttribute(L)}),{})),innerHTML:x.innerHTML},P=ov(O);let y=P,S=1;for(;y&&m.has(y);)y=`${P}:${S++}`;y&&(O._d=y,m.add(y)),o.elMap[x.getAttribute("data-hid")||Uu(O)]=x}}}o.pendingSideEffects={...o.sideEffects},o.sideEffects={};function a(m,g,A){const x=`${m}:${g}`;o.sideEffects[x]=A,delete o.pendingSideEffects[x]}function c({id:m,$el:g,tag:A}){const x=A.tag.endsWith("Attrs");if(o.elMap[m]=g,x||(A.textContent&&A.textContent!==g.textContent&&(g.textContent=A.textContent),A.innerHTML&&A.innerHTML!==g.innerHTML&&(g.innerHTML=A.innerHTML),a(m,"el",()=>{var N;(N=o.elMap[m])==null||N.remove(),delete o.elMap[m]})),A._eventHandlers)for(const N in A._eventHandlers)Object.prototype.hasOwnProperty.call(A._eventHandlers,N)&&g.getAttribute(`data-${N}`)!==""&&((A.tag==="bodyAttrs"?n.defaultView:g).addEventListener(N.substring(2),A._eventHandlers[N].bind(g)),g.setAttribute(`data-${N}`,""));for(const N in A.props){if(!Object.prototype.hasOwnProperty.call(A.props,N))continue;const O=A.props[N],P=`attr:${N}`;if(N==="class"){if(!O)continue;for(const y of O.split(" "))x&&a(m,`${P}:${y}`,()=>g.classList.remove(y)),!g.classList.contains(y)&&g.classList.add(y)}else if(N==="style"){if(!O)continue;for(const y of O.split(";")){const S=y.indexOf(":"),D=y.substring(0,S).trim(),L=y.substring(S+1).trim();a(m,`${P}:${D}`,()=>{g.style.removeProperty(D)}),g.style.setProperty(D,L)}}else g.getAttribute(N)!==O&&g.setAttribute(N,O===!0?"":String(O)),x&&a(m,P,()=>g.removeAttribute(N))}}const h=[],u={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const m of i){const{tag:g,shouldRender:A,id:x}=m;if(A){if(g.tag==="title"){n.title=g.textContent;continue}m.$el=m.$el||o.elMap[x],m.$el?c(m):Sa.has(g.tag)&&h.push(m)}}for(const m of h){const g=m.tag.tagPosition||"head";m.$el=n.createElement(m.tag.tag),c(m),u[g]=u[g]||n.createDocumentFragment(),u[g].appendChild(m.$el)}for(const m of i)await t.hooks.callHook("dom:renderTag",m,n,a);u.head&&n.head.appendChild(u.head),u.bodyOpen&&n.body.insertBefore(u.bodyOpen,n.body.firstChild),u.bodyClose&&n.body.appendChild(u.bodyClose);for(const m in o.pendingSideEffects)o.pendingSideEffects[m]();t._dom=o,await t.hooks.callHook("dom:rendered",{renders:i}),s()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function CR(t,e={}){const n=e.delayFn||(r=>setTimeout(r,10));return t._domDebouncedUpdatePromise=t._domDebouncedUpdatePromise||new Promise(r=>n(()=>av(t,e).then(()=>{delete t._domDebouncedUpdatePromise,r()})))}function kR(t){return e=>{var r,s;const n=((s=(r=e.resolvedOptions.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:s.innerHTML)||!1;return n&&e.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":i=>{CR(i,t)}}}}}const xR=new Set(["templateParams","htmlAttrs","bodyAttrs"]),OR={hooks:{"tag:normalise":({tag:t})=>{t.props.hid&&(t.key=t.props.hid,delete t.props.hid),t.props.vmid&&(t.key=t.props.vmid,delete t.props.vmid),t.props.key&&(t.key=t.props.key,delete t.props.key);const e=ov(t);e&&!e.startsWith("meta:og:")&&!e.startsWith("meta:twitter:")&&delete t.key;const n=e||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":t=>{const e=Object.create(null);for(const r of t.tags){const s=(r.key?`${r.tag}:${r.key}`:r._d)||Uu(r),i=e[s];if(i){let a=r==null?void 0:r.tagDuplicateStrategy;if(!a&&xR.has(r.tag)&&(a="merge"),a==="merge"){const c=i.props;c.style&&r.props.style&&(c.style[c.style.length-1]!==";"&&(c.style+=";"),r.props.style=`${c.style} ${r.props.style}`),c.class&&r.props.class?r.props.class=`${c.class} ${r.props.class}`:c.class&&(r.props.class=c.class),e[s].props={...c,...r.props};continue}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);continue}else if(sl(r)>sl(i))continue}if(!(r.innerHTML||r.textContent||Object.keys(r.props).length!==0)&&Sa.has(r.tag)){delete e[s];continue}e[s]=r}const n=[];for(const r in e){const s=e[r],i=s._duped;n.push(s),i&&(delete s._duped,n.push(...i))}t.tags=n,t.tags=t.tags.filter(r=>!(r.tag==="meta"&&(r.props.name||r.props.property)&&!r.props.content))}}},NR=new Set(["script","link","bodyAttrs"]),DR=t=>({hooks:{"tags:resolve":e=>{for(const n of e.tags){if(!NR.has(n.tag))continue;const r=n.props;for(const s in r){if(s[0]!=="o"||s[1]!=="n"||!Object.prototype.hasOwnProperty.call(r,s))continue;const i=r[s];typeof i=="function"&&(t.ssr&&Kp.has(s)?r[s]=`this.dataset.${s}fired = true`:delete r[s],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[s]=i)}t.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||rl(n.props.src||n.props.href))}},"dom:renderTag":({$el:e,tag:n})=>{var s,i;const r=e==null?void 0:e.dataset;if(r)for(const o in r){if(!o.endsWith("fired"))continue;const a=o.slice(0,-5);Kp.has(a)&&((i=(s=n._eventHandlers)==null?void 0:s[a])==null||i.call(e,new Event(a.substring(2))))}}}}),MR=new Set(["link","style","script","noscript"]),VR={hooks:{"tag:normalise":({tag:t})=>{t.key&&MR.has(t.tag)&&(t.props["data-hid"]=t._h=rl(t.key))}}},LR={mode:"server",hooks:{"tags:beforeResolve":t=>{const e={};let n=!1;for(const r of t.tags)r._m!=="server"||r.tag!=="titleTemplate"&&r.tag!=="templateParams"&&r.tag!=="title"||(e[r.tag]=r.tag==="title"||r.tag==="titleTemplate"?r.textContent:r.props,n=!0);n&&t.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},FR={hooks:{"tags:resolve":t=>{var e;for(const n of t.tags)if(typeof n.tagPriority=="string")for(const{prefix:r,offset:s}of AR){if(!n.tagPriority.startsWith(r))continue;const i=n.tagPriority.substring(r.length),o=(e=t.tags.find(a=>a._d===i))==null?void 0:e._p;if(o!==void 0){n._p=o+s;break}}t.tags.sort((n,r)=>{const s=sl(n),i=sl(r);return s<i?-1:s>i?1:n._p-r._p})}}},UR={meta:"content",link:"href",htmlAttrs:"lang"},BR=["innerHTML","textContent"],jR=t=>({hooks:{"tags:resolve":e=>{var o;const{tags:n}=e;let r;for(let a=0;a<n.length;a+=1)n[a].tag==="templateParams"&&(r=e.tags.splice(a,1)[0].props,a-=1);const s=r||{},i=s.separator||"|";delete s.separator,s.pageTitle=pa(s.pageTitle||((o=n.find(a=>a.tag==="title"))==null?void 0:o.textContent)||"",s,i);for(const a of n){if(a.processTemplateParams===!1)continue;const c=UR[a.tag];if(c&&typeof a.props[c]=="string")a.props[c]=pa(a.props[c],s,i);else if(a.processTemplateParams||a.tag==="titleTemplate"||a.tag==="title")for(const h of BR)typeof a[h]=="string"&&(a[h]=pa(a[h],s,i,a.tag==="script"&&a.props.type.endsWith("json")))}t._templateParams=s,t._separator=i},"tags:afterResolve":({tags:e})=>{let n;for(let r=0;r<e.length;r+=1){const s=e[r];s.tag==="title"&&s.processTemplateParams!==!1&&(n=s)}n!=null&&n.textContent&&(n.textContent=pa(n.textContent,t._templateParams,t._separator))}}}),$R={hooks:{"tags:resolve":t=>{const{tags:e}=t;let n,r;for(let s=0;s<e.length;s+=1){const i=e[s];i.tag==="title"?n=i:i.tag==="titleTemplate"&&(r=i)}if(r&&n){const s=Yp(r.textContent,n.textContent);s!==null?n.textContent=s||n.textContent:t.tags.splice(t.tags.indexOf(n),1)}else if(r){const s=Yp(r.textContent);s!==null&&(r.textContent=s,r.tag="title",r=void 0)}r&&t.tags.splice(t.tags.indexOf(r),1)}}},HR={hooks:{"tags:afterResolve":t=>{for(const e of t.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&(e.props.type==="application/ld+json"||e.props.type==="application/json")?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};let lv;function qR(t={}){const e=zR(t);return e.use(kR()),lv=e}function Xp(t,e){return!t||t==="server"&&e||t==="client"&&!e}function zR(t={}){const e=Ky();e.addHooks(t.hooks||{}),t.document=t.document||(ER?document:void 0);const n=!t.document,r=()=>{a.dirty=!0,e.callHook("entries:updated",a)};let s=0,i=[];const o=[],a={plugins:o,dirty:!1,resolvedOptions:t,hooks:e,headEntries(){return i},use(c){const h=typeof c=="function"?c(a):c;(!h.key||!o.some(u=>u.key===h.key))&&(o.push(h),Xp(h.mode,n)&&e.addHooks(h.hooks||{}))},push(c,h){h==null||delete h.head;const u={_i:s++,input:c,...h};return Xp(u.mode,n)&&(i.push(u),r()),{dispose(){i=i.filter(d=>d._i!==u._i),r()},patch(d){for(const m of i)m._i===u._i&&(m.input=u.input=d);r()}}},async resolveTags(){const c={tags:[],entries:[...i]};await e.callHook("entries:resolve",c);for(const h of c.entries){const u=h.resolvedInput||h.input;if(h.resolvedInput=await(h.transform?h.transform(u):u),h.resolvedInput)for(const d of await IR(h)){const m={tag:d,entry:h,resolvedOptions:a.resolvedOptions};await e.callHook("tag:normalise",m),c.tags.push(m.tag)}}return await e.callHook("tags:beforeResolve",c),await e.callHook("tags:resolve",c),await e.callHook("tags:afterResolve",c),c.tags},ssr:n};return[OR,LR,DR,VR,FR,jR,$R,HR,...(t==null?void 0:t.plugins)||[]].forEach(c=>a.use(c)),a.hooks.callHook("init",a),a}function WR(){return lv}const KR=Ny[0]==="3";function GR(t){return typeof t=="function"?t():$e(t)}function il(t){if(t instanceof Promise||t instanceof Date||t instanceof RegExp)return t;const e=GR(t);if(!t||!e)return e;if(Array.isArray(e))return e.map(n=>il(n));if(typeof e=="object"){const n={};for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(r==="titleTemplate"||r[0]==="o"&&r[1]==="n"){n[r]=$e(e[r]);continue}n[r]=il(e[r])}return n}return e}const QR={hooks:{"entries:resolve":t=>{for(const e of t.entries)e.resolvedInput=il(e.input)}}},cv="usehead";function YR(t){return{install(n){KR&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(cv,t))}}.install}function XR(t={}){t.domDelayFn=t.domDelayFn||(n=>Po(()=>setTimeout(()=>n(),0)));const e=qR(t);return e.use(QR),e.install=YR(e),e}const ju=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$u="__unhead_injection_handler__";function JR(t){ju[$u]=t}function ZR(){if($u in ju)return ju[$u]();const t=Ct(cv);return t||WR()}function eS(t,e={}){const n=e.head||ZR();if(n)return n.ssr?n.push(t,e):tS(n,t,e)}function tS(t,e,n={}){const r=Mt(!1),s=Mt({});Sb(()=>{s.value=r.value?{}:il(e)});const i=t.push(s.value,n);return _r(s,a=>{i.patch(a)}),Ml()&&(ko(()=>{i.dispose()}),X_(()=>{r.value=!0}),Y_(()=>{r.value=!1})),i}let Pa,Ca;function nS(){return Pa=$fetch(Jh(`builds/meta/${hi().app.buildId}.json`),{responseType:"json"}),Pa.then(t=>{Ca=QA(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),Pa}function $l(){return Pa||nS()}async function Zh(t){if(await $l(),!Ca)return console.error("[nuxt] Error creating app manifest matcher.",Ca),{};try{return Jy({},...Ca.matchAll(t).reverse())}catch(e){return console.error("[nuxt] Error matching route rules.",e),{}}}async function Jp(t,e={}){const n=await sS(t,e),r=Ke(),s=r._payloadCache=r._payloadCache||{};return n in s?s[n]||null:(s[n]=hv(t).then(i=>i?uv(n).then(o=>o||(delete s[n],null)):(s[n]=null,null)),s[n])}const rS="_payload.json";async function sS(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||Kn(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=hi(),s=e.hash||(e.fresh?Date.now():r.app.buildId),i=r.app.cdnURL,o=i&&await hv(t)?i:r.app.baseURL;return Fl(o,n.pathname,rS+(s?`?${s}`:""))}async function uv(t){const e=fetch(t).then(n=>n.text().then(fv));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function hv(t=ev().path){if(t=Ll(t),(await $l()).prerendered.includes(t))return!0;const n=await Zh(t);return!!n.prerender&&!n.redirect}let Hr=null;async function iS(){var r;if(Hr)return Hr;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await fv(t.textContent||""),n=t.dataset.src?await uv(t.dataset.src):void 0;return Hr={...e,...n,...window.__NUXT__},(r=Hr.config)!=null&&r.public&&(Hr.config.public=Mr(Hr.config.public)),Hr}async function fv(t){return await mR(t,Ke()._payloadRevivers)}function oS(t,e){Ke()._payloadRevivers[t]=e}const aS=[["NuxtError",t=>jl(t)],["EmptyShallowRef",t=>io(t==="_"?void 0:t==="0n"?BigInt(0):Xa(t))],["EmptyRef",t=>Mt(t==="_"?void 0:t==="0n"?BigInt(0):Xa(t))],["ShallowRef",t=>io(t)],["ShallowReactive",t=>Nn(t)],["Ref",t=>Mt(t)],["Reactive",t=>Mr(t)]],lS=cn({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const[r,s]of aS)oS(r,s);Object.assign(t.payload,([e,n]=$s(()=>t.runWithContext(iS)),e=await e,n(),e)),window.__NUXT__=t.payload}}),cS=[],uS=cn({name:"nuxt:head",enforce:"pre",setup(t){const e=XR({plugins:cS});JR(()=>Ke().vueApp._context.provides.usehead),t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await av(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||r()}),t.hooks.hook("app:error",r),t.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const As=typeof document<"u";function dv(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function hS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&dv(t.default)}const Oe=Object.assign;function zc(t,e){const n={};for(const r in e){const s=e[r];n[r]=an(s)?s.map(t):t(s)}return n}const Ki=()=>{},an=Array.isArray,pv=/#/g,fS=/&/g,dS=/\//g,pS=/=/g,mS=/\?/g,mv=/\+/g,gS=/%5B/g,_S=/%5D/g,gv=/%5E/g,yS=/%60/g,_v=/%7B/g,vS=/%7C/g,yv=/%7D/g,ES=/%20/g;function ef(t){return encodeURI(""+t).replace(vS,"|").replace(gS,"[").replace(_S,"]")}function wS(t){return ef(t).replace(_v,"{").replace(yv,"}").replace(gv,"^")}function Hu(t){return ef(t).replace(mv,"%2B").replace(ES,"+").replace(pv,"%23").replace(fS,"%26").replace(yS,"`").replace(_v,"{").replace(yv,"}").replace(gv,"^")}function TS(t){return Hu(t).replace(pS,"%3D")}function bS(t){return ef(t).replace(pv,"%23").replace(mS,"%3F")}function IS(t){return t==null?"":bS(t).replace(dS,"%2F")}function uo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const AS=/\/$/,RS=t=>t.replace(AS,"");function Wc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=kS(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:uo(o)}}function SS(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Zp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function PS(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Js(e.matched[r],n.matched[s])&&vv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Js(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function vv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!CS(t[n],e[n]))return!1;return!0}function CS(t,e){return an(t)?em(t,e):an(e)?em(e,t):t===e}function em(t,e){return an(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function kS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const tn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ho;(function(t){t.pop="pop",t.push="push"})(ho||(ho={}));var Gi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Gi||(Gi={}));function xS(t){if(!t)if(As){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),RS(t)}const OS=/^[^#]+#/;function NS(t,e){return t.replace(OS,"#")+e}function DS(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Hl=()=>({left:window.scrollX,top:window.scrollY});function MS(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=DS(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function tm(t,e){return(history.state?history.state.position-e:-1)+t}const qu=new Map;function VS(t,e){qu.set(t,e)}function LS(t){const e=qu.get(t);return qu.delete(t),e}let FS=()=>location.protocol+"//"+location.host;function Ev(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Zp(c,"")}return Zp(n,t)+r+s}function US(t,e,n,r){let s=[],i=[],o=null;const a=({state:m})=>{const g=Ev(t,location),A=n.value,x=e.value;let N=0;if(m){if(n.value=g,e.value=m,o&&o===A){o=null;return}N=x?m.position-x.position:0}else r(g);s.forEach(O=>{O(n.value,A,{delta:N,type:ho.pop,direction:N?N>0?Gi.forward:Gi.back:Gi.unknown})})};function c(){o=n.value}function h(m){s.push(m);const g=()=>{const A=s.indexOf(m);A>-1&&s.splice(A,1)};return i.push(g),g}function u(){const{history:m}=window;m.state&&m.replaceState(Oe({},m.state,{scroll:Hl()}),"")}function d(){for(const m of i)m();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:h,destroy:d}}function nm(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Hl():null}}function BS(t){const{history:e,location:n}=window,r={value:Ev(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,u){const d=t.indexOf("#"),m=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:FS()+t+c;try{e[u?"replaceState":"pushState"](h,"",m),s.value=h}catch(g){console.error(g),n[u?"replace":"assign"](m)}}function o(c,h){const u=Oe({},e.state,nm(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,h){const u=Oe({},s.value,e.state,{forward:c,scroll:Hl()});i(u.current,u,!0);const d=Oe({},nm(r.value,c,null),{position:u.position+1},h);i(c,d,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function wv(t){t=xS(t);const e=BS(t),n=US(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Oe({location:"",base:t,go:r,createHref:NS.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function jS(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),wv(t)}function $S(t){return typeof t=="string"||t&&typeof t=="object"}function Tv(t){return typeof t=="string"||typeof t=="symbol"}const bv=Symbol("");var rm;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(rm||(rm={}));function Zs(t,e){return Oe(new Error,{type:t,[bv]:!0},e)}function Pn(t,e){return t instanceof Error&&bv in t&&(e==null||!!(t.type&e))}const sm="[^/]+?",HS={sensitive:!1,strict:!1,start:!0,end:!0},qS=/[.+*?^${}()[\]/\\]/g;function zS(t,e){const n=Oe({},HS,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const u=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let d=0;d<h.length;d++){const m=h[d];let g=40+(n.sensitive?.25:0);if(m.type===0)d||(s+="/"),s+=m.value.replace(qS,"\\$&"),g+=40;else if(m.type===1){const{value:A,repeatable:x,optional:N,regexp:O}=m;i.push({name:A,repeatable:x,optional:N});const P=O||sm;if(P!==sm){g+=10;try{new RegExp(`(${P})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${A}" (${P}): `+S.message)}}let y=x?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;d||(y=N&&h.length<2?`(?:/${y})`:"/"+y),N&&(y+="?"),s+=y,g+=20,N&&(g+=-8),x&&(g+=-20),P===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(h){const u=h.match(o),d={};if(!u)return null;for(let m=1;m<u.length;m++){const g=u[m]||"",A=i[m-1];d[A.name]=g&&A.repeatable?g.split("/"):g}return d}function c(h){let u="",d=!1;for(const m of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const g of m)if(g.type===0)u+=g.value;else if(g.type===1){const{value:A,repeatable:x,optional:N}=g,O=A in h?h[A]:"";if(an(O)&&!x)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const P=an(O)?O.join("/"):O;if(!P)if(N)m.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);u+=P}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function WS(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Iv(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=WS(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(im(r))return 1;if(im(s))return-1}return s.length-r.length}function im(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const KS={type:0,value:""},GS=/[a-zA-Z0-9_]/;function QS(t){if(!t)return[[]];if(t==="/")return[[KS]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${h}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,h="",u="";function d(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&d(),o()):c===":"?(d(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:GS.test(c)?m():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),d(),o(),s}function YS(t,e,n){const r=zS(QS(t.path),n),s=Oe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function XS(t,e){const n=[],r=new Map;e=cm({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,m,g){const A=!g,x=am(d);x.aliasOf=g&&g.record;const N=cm(e,d),O=[x];if("alias"in d){const S=typeof d.alias=="string"?[d.alias]:d.alias;for(const D of S)O.push(am(Oe({},x,{components:g?g.record.components:x.components,path:D,aliasOf:g?g.record:x})))}let P,y;for(const S of O){const{path:D}=S;if(m&&D[0]!=="/"){const L=m.record.path,b=L[L.length-1]==="/"?"":"/";S.path=m.record.path+(D&&b+D)}if(P=YS(S,m,N),g?g.alias.push(P):(y=y||P,y!==P&&y.alias.push(P),A&&d.name&&!lm(P)&&o(d.name)),Av(P)&&c(P),x.children){const L=x.children;for(let b=0;b<L.length;b++)i(L[b],P,g&&g.children[b])}g=g||P}return y?()=>{o(y)}:Ki}function o(d){if(Tv(d)){const m=r.get(d);m&&(r.delete(d),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(d);m>-1&&(n.splice(m,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function c(d){const m=eP(d,n);n.splice(m,0,d),d.record.name&&!lm(d)&&r.set(d.record.name,d)}function h(d,m){let g,A={},x,N;if("name"in d&&d.name){if(g=r.get(d.name),!g)throw Zs(1,{location:d});N=g.record.name,A=Oe(om(m.params,g.keys.filter(y=>!y.optional).concat(g.parent?g.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),d.params&&om(d.params,g.keys.map(y=>y.name))),x=g.stringify(A)}else if(d.path!=null)x=d.path,g=n.find(y=>y.re.test(x)),g&&(A=g.parse(x),N=g.record.name);else{if(g=m.name?r.get(m.name):n.find(y=>y.re.test(m.path)),!g)throw Zs(1,{location:d,currentLocation:m});N=g.record.name,A=Oe({},m.params,d.params),x=g.stringify(A)}const O=[];let P=g;for(;P;)O.unshift(P.record),P=P.parent;return{name:N,path:x,params:A,matched:O,meta:ZS(O)}}t.forEach(d=>i(d));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function om(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function am(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:JS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function JS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function lm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ZS(t){return t.reduce((e,n)=>Oe(e,n.meta),{})}function cm(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function eP(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Iv(t,e[i])<0?r=i:n=i+1}const s=tP(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function tP(t){let e=t;for(;e=e.parent;)if(Av(e)&&Iv(t,e)===0)return e}function Av({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function nP(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(mv," "),o=i.indexOf("="),a=uo(o<0?i:i.slice(0,o)),c=o<0?null:uo(i.slice(o+1));if(a in e){let h=e[a];an(h)||(h=e[a]=[h]),h.push(c)}else e[a]=c}return e}function um(t){let e="";for(let n in t){const r=t[n];if(n=TS(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(an(r)?r.map(i=>i&&Hu(i)):[r&&Hu(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function rP(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=an(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const sP=Symbol(""),hm=Symbol(""),ql=Symbol(""),tf=Symbol(""),zu=Symbol("");function Di(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function cr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const h=m=>{m===!1?c(Zs(4,{from:n,to:e})):m instanceof Error?c(m):$S(m)?c(Zs(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),a())},u=i(()=>t.call(r&&r.instances[s],e,n,h));let d=Promise.resolve(u);t.length<3&&(d=d.then(h)),d.catch(m=>c(m))})}function Kc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(dv(c)){const u=(c.__vccOpts||c)[e];u&&i.push(cr(u,n,r,o,a,s))}else{let h=c();i.push(()=>h.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=hS(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const g=(d.__vccOpts||d)[e];return g&&cr(g,n,r,o,a,s)()}))}}return i}function fm(t){const e=Ct(ql),n=Ct(tf),r=Ue(()=>{const c=$e(t.to);return e.resolve(c)}),s=Ue(()=>{const{matched:c}=r.value,{length:h}=c,u=c[h-1],d=n.matched;if(!u||!d.length)return-1;const m=d.findIndex(Js.bind(null,u));if(m>-1)return m;const g=dm(c[h-2]);return h>1&&dm(u)===g&&d[d.length-1].path!==g?d.findIndex(Js.bind(null,c[h-2])):m}),i=Ue(()=>s.value>-1&&lP(n.params,r.value.params)),o=Ue(()=>s.value>-1&&s.value===n.matched.length-1&&vv(n.params,r.value.params));function a(c={}){return aP(c)?e[$e(t.replace)?"replace":"push"]($e(t.to)).catch(Ki):Promise.resolve()}return{route:r,href:Ue(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const iP=bn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:fm,setup(t,{slots:e}){const n=Mr(fm(t)),{options:r}=Ct(ql),s=Ue(()=>({[pm(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[pm(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:$t("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),oP=iP;function aP(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function lP(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!an(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function dm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const pm=(t,e,n)=>t??e??n,cP=bn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ct(zu),s=Ue(()=>t.route||r.value),i=Ct(hm,0),o=Ue(()=>{let h=$e(i);const{matched:u}=s.value;let d;for(;(d=u[h])&&!d.components;)h++;return h}),a=Ue(()=>s.value.matched[o.value]);Bs(hm,Ue(()=>o.value+1)),Bs(sP,a),Bs(zu,s);const c=Mt();return _r(()=>[c.value,a.value,t.name],([h,u,d],[m,g,A])=>{u&&(u.instances[d]=h,g&&g!==u&&h&&h===m&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),h&&u&&(!g||!Js(u,g)||!m)&&(u.enterCallbacks[d]||[]).forEach(x=>x(h))},{flush:"post"}),()=>{const h=s.value,u=t.name,d=a.value,m=d&&d.components[u];if(!m)return mm(n.default,{Component:m,route:h});const g=d.props[u],A=g?g===!0?h.params:typeof g=="function"?g(h):g:null,N=$t(m,Oe({},A,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return mm(n.default,{Component:N,route:h})||N}}});function mm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Rv=cP;function uP(t){const e=XS(t.routes,t),n=t.parseQuery||nP,r=t.stringifyQuery||um,s=t.history,i=Di(),o=Di(),a=Di(),c=io(tn);let h=tn;As&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=zc.bind(null,B=>""+B),d=zc.bind(null,IS),m=zc.bind(null,uo);function g(B,Z){let X,se;return Tv(B)?(X=e.getRecordMatcher(B),se=Z):se=B,e.addRoute(se,X)}function A(B){const Z=e.getRecordMatcher(B);Z&&e.removeRoute(Z)}function x(){return e.getRoutes().map(B=>B.record)}function N(B){return!!e.getRecordMatcher(B)}function O(B,Z){if(Z=Oe({},Z||c.value),typeof B=="string"){const C=Wc(n,B,Z.path),V=e.resolve({path:C.path},Z),H=s.createHref(C.fullPath);return Oe(C,V,{params:m(V.params),hash:uo(C.hash),redirectedFrom:void 0,href:H})}let X;if(B.path!=null)X=Oe({},B,{path:Wc(n,B.path,Z.path).path});else{const C=Oe({},B.params);for(const V in C)C[V]==null&&delete C[V];X=Oe({},B,{params:d(C)}),Z.params=d(Z.params)}const se=e.resolve(X,Z),Te=B.hash||"";se.params=u(m(se.params));const Ne=SS(r,Oe({},B,{hash:wS(Te),path:se.path})),I=s.createHref(Ne);return Oe({fullPath:Ne,hash:Te,query:r===um?rP(B.query):B.query||{}},se,{redirectedFrom:void 0,href:I})}function P(B){return typeof B=="string"?Wc(n,B,c.value.path):Oe({},B)}function y(B,Z){if(h!==B)return Zs(8,{from:Z,to:B})}function S(B){return b(B)}function D(B){return S(Oe(P(B),{replace:!0}))}function L(B){const Z=B.matched[B.matched.length-1];if(Z&&Z.redirect){const{redirect:X}=Z;let se=typeof X=="function"?X(B):X;return typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=P(se):{path:se},se.params={}),Oe({query:B.query,hash:B.hash,params:se.path!=null?{}:B.params},se)}}function b(B,Z){const X=h=O(B),se=c.value,Te=B.state,Ne=B.force,I=B.replace===!0,C=L(X);if(C)return b(Oe(P(C),{state:typeof C=="object"?Oe({},Te,C.state):Te,force:Ne,replace:I}),Z||X);const V=X;V.redirectedFrom=Z;let H;return!Ne&&PS(r,se,X)&&(H=Zs(16,{to:V,from:se}),zt(se,se,!0,!1)),(H?Promise.resolve(H):w(V,se)).catch(U=>Pn(U)?Pn(U,2)?U:Zt(U):ne(U,V,se)).then(U=>{if(U){if(Pn(U,2))return b(Oe({replace:I},P(U.to),{state:typeof U.to=="object"?Oe({},Te,U.to.state):Te,force:Ne}),Z||V)}else U=R(V,se,!0,I,Te);return k(V,se,U),U})}function E(B,Z){const X=y(B,Z);return X?Promise.reject(X):Promise.resolve()}function v(B){const Z=Yn.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(B):B()}function w(B,Z){let X;const[se,Te,Ne]=hP(B,Z);X=Kc(se.reverse(),"beforeRouteLeave",B,Z);for(const C of se)C.leaveGuards.forEach(V=>{X.push(cr(V,B,Z))});const I=E.bind(null,B,Z);return X.push(I),kt(X).then(()=>{X=[];for(const C of i.list())X.push(cr(C,B,Z));return X.push(I),kt(X)}).then(()=>{X=Kc(Te,"beforeRouteUpdate",B,Z);for(const C of Te)C.updateGuards.forEach(V=>{X.push(cr(V,B,Z))});return X.push(I),kt(X)}).then(()=>{X=[];for(const C of Ne)if(C.beforeEnter)if(an(C.beforeEnter))for(const V of C.beforeEnter)X.push(cr(V,B,Z));else X.push(cr(C.beforeEnter,B,Z));return X.push(I),kt(X)}).then(()=>(B.matched.forEach(C=>C.enterCallbacks={}),X=Kc(Ne,"beforeRouteEnter",B,Z,v),X.push(I),kt(X))).then(()=>{X=[];for(const C of o.list())X.push(cr(C,B,Z));return X.push(I),kt(X)}).catch(C=>Pn(C,8)?C:Promise.reject(C))}function k(B,Z,X){a.list().forEach(se=>v(()=>se(B,Z,X)))}function R(B,Z,X,se,Te){const Ne=y(B,Z);if(Ne)return Ne;const I=Z===tn,C=As?history.state:{};X&&(se||I?s.replace(B.fullPath,Oe({scroll:I&&C&&C.scroll},Te)):s.push(B.fullPath,Te)),c.value=B,zt(B,Z,X,I),Zt()}let T;function _e(){T||(T=s.listen((B,Z,X)=>{if(!un.listening)return;const se=O(B),Te=L(se);if(Te){b(Oe(Te,{replace:!0}),se).catch(Ki);return}h=se;const Ne=c.value;As&&VS(tm(Ne.fullPath,X.delta),Hl()),w(se,Ne).catch(I=>Pn(I,12)?I:Pn(I,2)?(b(I.to,se).then(C=>{Pn(C,20)&&!X.delta&&X.type===ho.pop&&s.go(-1,!1)}).catch(Ki),Promise.reject()):(X.delta&&s.go(-X.delta,!1),ne(I,se,Ne))).then(I=>{I=I||R(se,Ne,!1),I&&(X.delta&&!Pn(I,8)?s.go(-X.delta,!1):X.type===ho.pop&&Pn(I,20)&&s.go(-1,!1)),k(se,Ne,I)}).catch(Ki)}))}let ve=Di(),re=Di(),fe;function ne(B,Z,X){Zt(B);const se=re.list();return se.length?se.forEach(Te=>Te(B,Z,X)):console.error(B),Promise.reject(B)}function qe(){return fe&&c.value!==tn?Promise.resolve():new Promise((B,Z)=>{ve.add([B,Z])})}function Zt(B){return fe||(fe=!B,_e(),ve.list().forEach(([Z,X])=>B?X(B):Z()),ve.reset()),B}function zt(B,Z,X,se){const{scrollBehavior:Te}=t;if(!As||!Te)return Promise.resolve();const Ne=!X&&LS(tm(B.fullPath,0))||(se||!X)&&history.state&&history.state.scroll||null;return Po().then(()=>Te(B,Z,Ne)).then(I=>I&&MS(I)).catch(I=>ne(I,B,Z))}const ze=B=>s.go(B);let We;const Yn=new Set,un={currentRoute:c,listening:!0,addRoute:g,removeRoute:A,clearRoutes:e.clearRoutes,hasRoute:N,getRoutes:x,resolve:O,options:t,push:S,replace:D,go:ze,back:()=>ze(-1),forward:()=>ze(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:re.add,isReady:qe,install(B){const Z=this;B.component("RouterLink",oP),B.component("RouterView",Rv),B.config.globalProperties.$router=Z,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>$e(c)}),As&&!We&&c.value===tn&&(We=!0,S(s.location).catch(Te=>{}));const X={};for(const Te in tn)Object.defineProperty(X,Te,{get:()=>c.value[Te],enumerable:!0});B.provide(ql,Z),B.provide(tf,Nn(X)),B.provide(zu,c);const se=B.unmount;Yn.add(B),B.unmount=function(){Yn.delete(B),Yn.size<1&&(h=tn,T&&T(),T=null,c.value=tn,We=!1,fe=!1),se()}}};function kt(B){return B.reduce((Z,X)=>Z.then(()=>v(X)),Promise.resolve())}return un}function hP(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(h=>Js(h,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(h=>Js(h,c))||s.push(c))}return[n,r,s]}function fP(){return Ct(ql)}function _L(t){return Ct(tf)}const dP=/(:\w+)\([^)]+\)/g,pP=/(:\w+)[?+*]/g,mP=/:\w+/g,gP=(t,e)=>e.path.replace(dP,"$1").replace(pP,"$1").replace(mP,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""}),Wu=(t,e)=>{const n=t.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===t.Component.type}),r=e??(n==null?void 0:n.meta.key)??(n&&gP(t.route,n));return typeof r=="function"?r(t.route):r},_P=(t,e)=>({default:()=>t?$t(eb,t===!0?{}:t,e):e});function nf(t){return Array.isArray(t)?t:[t]}const yP="modulepreload",vP=function(t,e){return new URL(t,e).href},gm={},Os=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(n.map(h=>{if(h=vP(h,r),h in gm)return;gm[h]=!0;const u=h.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(!!r)for(let A=o.length-1;A>=0;A--){const x=o[A];if(x.href===h&&(!u||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${d}`))return;const g=document.createElement("link");if(g.rel=u?"stylesheet":yP,u||(g.as="script"),g.crossOrigin="",g.href=h,c&&g.setAttribute("nonce",c),document.head.appendChild(g),u)return new Promise((A,x)=>{g.addEventListener("load",A),g.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})},Gc=[{name:"create",path:"/create",component:()=>Os(()=>import("./B3ezNVg-.js"),__vite__mapDeps([0,1,2]),import.meta.url)},{name:"index",path:"/",component:()=>Os(()=>import("./CTnZO9C8.js"),__vite__mapDeps([3,1,4]),import.meta.url)},{name:"posts-id",path:"/posts/:id()",component:()=>Os(()=>import("./yU5TEoeG.js"),__vite__mapDeps([5,1,6]),import.meta.url)},{name:"search",path:"/search",component:()=>Os(()=>import("./BosOAewW.js"),__vite__mapDeps([7,1,8]),import.meta.url)}],EP=(t,e,n)=>(e=e===!0?{}:e,{default:()=>{var r;return e?$t(t,e,n):(r=n.default)==null?void 0:r.call(n)}}),wP=/(:\w+)\([^)]+\)/g,TP=/(:\w+)[?+*]/g,bP=/:\w+/g;function _m(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(wP,"$1").replace(TP,"$1").replace(bP,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""});return typeof e=="function"?e(t):e}function IP(t,e){return t===e||e===tn?!1:_m(t)!==_m(e)?!0:!t.matched.every((r,s)=>{var i,o;return r.components&&r.components.default===((o=(i=e.matched[s])==null?void 0:i.components)==null?void 0:o.default)})}const AP={scrollBehavior(t,e,n){var h;const r=Ke(),s=((h=Vt().options)==null?void 0:h.scrollBehaviorType)??"auto";let i=n||void 0;const o=typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop;if(!i&&e&&t&&o!==!1&&IP(t,e)&&(i={left:0,top:0}),t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:ym(t.hash),behavior:s}:!1;const a=u=>!!(u.meta.pageTransition??Nu),c=a(e)&&a(t)?"page:transition:finish":"page:finish";return new Promise(u=>{r.hooks.hookOnce(c,async()=>{await new Promise(d=>setTimeout(d,0)),t.hash&&(i={el:t.hash,top:ym(t.hash),behavior:s}),u(i)})})}};function ym(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}const RP={hashMode:!1,scrollBehaviorType:"auto"},Gt={...RP,...AP},SP=async t=>{var c;let e,n;if(!((c=t.meta)!=null&&c.validate))return;const r=Ke(),s=Vt(),i=([e,n]=$s(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e);if(i===!0)return;const o=jl({statusCode:i&&i.statusCode||404,statusMessage:i&&i.statusMessage||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}}),a=s.beforeResolve(h=>{if(a(),h===t){const u=s.afterEach(async()=>{u(),await r.runWithContext(()=>xs(o)),window==null||window.history.pushState({},"",t.fullPath)});return!1}})},PP=async t=>{let e,n;const r=([e,n]=$s(()=>Zh(t.path)),e=await e,n(),e);if(r.redirect)return Kn(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},CP=[SP,PP],Qi={};function kP(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const h=i.includes(t.slice(o))?t.slice(o).length:1;let u=i.slice(h);return u[0]!=="/"&&(u="/"+u),Fp(u,"")}const a=Fp(r,t),c=!n||oA(a,n,{trailingSlash:!0})?a:n;return c+(c.includes("?")?"":s)+i}const xP=cn({name:"nuxt:router",enforce:"pre",async setup(t){var N;let e,n,r=hi().app.baseURL;Gt.hashMode&&!r.includes("#")&&(r+="#");const s=((N=Gt.history)==null?void 0:N.call(Gt,r))??(Gt.hashMode?jS(r):wv(r)),i=Gt.routes?([e,n]=$s(()=>Gt.routes(Gc)),e=await e,n(),e??Gc):Gc;let o;const a=uP({...Gt,scrollBehavior:(O,P,y)=>{if(P===tn){o=y;return}if(Gt.scrollBehavior){if(a.options.scrollBehavior=Gt.scrollBehavior,"scrollRestoration"in window.history){const S=a.beforeEach(()=>{S(),window.history.scrollRestoration="manual"})}return Gt.scrollBehavior(O,tn,o||y)}},history:s,routes:i});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const c=io(a.currentRoute.value);a.afterEach((O,P)=>{c.value=P}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>c.value});const h=kP(r,window.location,t.payload.path),u=io(a.currentRoute.value),d=()=>{u.value=a.currentRoute.value};t.hook("page:finish",d),a.afterEach((O,P)=>{var y,S,D,L;((S=(y=O.matched[0])==null?void 0:y.components)==null?void 0:S.default)===((L=(D=P.matched[0])==null?void 0:D.components)==null?void 0:L.default)&&d()});const m={};for(const O in u.value)Object.defineProperty(m,O,{get:()=>u.value[O],enumerable:!0});t._route=Nn(m),t._middleware=t._middleware||{global:[],named:{}};const g=Bl();a.afterEach(async(O,P,y)=>{delete t._processingMiddleware,!t.isHydrating&&g.value&&await t.runWithContext(iR),y&&await t.callHook("page:loading:end")});try{[e,n]=$s(()=>a.isReady()),await e,n()}catch(O){[e,n]=$s(()=>t.runWithContext(()=>xs(O))),await e,n()}const A=h!==a.currentRoute.value.fullPath?a.resolve(h):a.currentRoute.value;d();const x=t.payload.state._layout;return a.beforeEach(async(O,P)=>{var y;await t.callHook("page:loading:start"),O.meta=Mr(O.meta),t.isHydrating&&x&&!Tr(O.meta.layout)&&(O.meta.layout=x),t._processingMiddleware=!0;{const S=new Set([...CP,...t._middleware.global]);for(const D of O.matched){const L=D.meta.middleware;if(L)for(const b of nf(L))S.add(b)}{const D=await t.runWithContext(()=>Zh(O.path));if(D.appMiddleware)for(const L in D.appMiddleware)D.appMiddleware[L]?S.add(L):S.delete(L)}for(const D of S){const L=typeof D=="string"?t._middleware.named[D]||await((y=Qi[D])==null?void 0:y.call(Qi).then(E=>E.default||E)):D;if(!L)throw new Error(`Unknown route middleware: '${D}'.`);const b=await t.runWithContext(()=>L(O,P));if(!t.payload.serverRendered&&t.isHydrating&&(b===!1||b instanceof Error)){const E=b||Vu({statusCode:404,statusMessage:`Page Not Found: ${h}`});return await t.runWithContext(()=>xs(E)),!1}if(b!==!0&&(b||b===!1))return b}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),a.afterEach(async(O,P)=>{O.matched.length===0&&await t.runWithContext(()=>xs(Vu({statusCode:404,fatal:!1,statusMessage:`Page not found: ${O.fullPath}`,data:{path:O.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{"name"in A&&(A.name=void 0),await a.replace({...A,force:!0}),a.options.scrollBehavior=Gt.scrollBehavior}catch(O){await t.runWithContext(()=>xs(O))}}),{provide:{router:a}}}}),Ku=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),OP=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),zl=t=>{const e=Ke();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{Ku(()=>t())}):Ku(()=>t())},NP=cn({name:"nuxt:payload",setup(t){Vt().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const r=await Jp(e.path);r&&Object.assign(t.static.data,r.data)}),zl(()=>{var e;t.hooks.hook("link:prefetch",async n=>{const{hostname:r}=new URL(n,window.location.href);r===window.location.hostname&&await Jp(n)}),((e=navigator.connection)==null?void 0:e.effectiveType)!=="slow-2g"&&setTimeout($l,1e3)})}}),DP=cn(()=>{const t=Vt();zl(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),MP=cn(t=>{let e;async function n(){const r=await $l();e&&clearTimeout(e),e=setTimeout(n,Hp);try{const s=await $fetch(Jh("builds/latest.json")+`?${Date.now()}`);s.id!==r.id&&t.hooks.callHook("app:manifest:update",s)}catch{}}zl(()=>{e=setTimeout(n,Hp)})});function VP(t={}){const e=t.path||window.location.pathname;let n={};try{n=Xa(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Ke().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const LP=cn({name:"nuxt:chunk-reload",setup(t){const e=Vt(),n=hi(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const a="href"in i&&i.href[0]==="#"?n.app.baseURL+i.href:Fl(n.app.baseURL,i.fullPath);VP({path:a,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((i,o)=>{r.has(i)&&s(o)})}}),FP=cn({name:"nuxt:global-components"}),ma={},UP=cn({name:"nuxt:prefetch",setup(t){const e=Vt();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof ma[r]=="function"&&await ma[r]()})}),t.hooks.hook("link:prefetch",n=>{if(Kn(n))return;const r=e.resolve(n);if(!r)return;const s=r.meta.layout;let i=nf(r.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof Qi[o]=="function"&&Qi[o]();s&&typeof ma[s]=="function"&&ma[s]()})}});async function Sv(t,e=Vt()){const{path:n,matched:r}=e.resolve(t);if(!r.length||(e._routePreloaded||(e._routePreloaded=new Set),e._routePreloaded.has(n)))return;const s=e._preloadPromises=e._preloadPromises||[];if(s.length>4)return Promise.all(s).then(()=>Sv(t,e));e._routePreloaded.add(n);const i=r.map(o=>{var a;return(a=o.components)==null?void 0:a.default}).filter(o=>typeof o=="function");for(const o of i){const a=Promise.resolve(o()).catch(()=>{}).finally(()=>s.splice(s.indexOf(a)));s.push(a)}await Promise.all(s)}const BP=(...t)=>t.find(e=>e!==void 0);function jP(t){const e=t.componentName||"NuxtLink";function n(s,i){if(!s||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return s;if(typeof s=="string")return vm(s,t.trailingSlash);const o="path"in s&&s.path!==void 0?s.path:i(s).path;return{...s,name:void 0,path:vm(o,t.trailingSlash)}}function r(s){const i=Vt(),o=hi(),a=Ue(()=>!!s.target&&s.target!=="_self"),c=Ue(()=>{const x=s.to||s.href||"";return typeof x=="string"&&Kn(x,{acceptRelative:!0})}),h=vu("RouterLink"),u=h&&typeof h!="string"?h.useLink:void 0,d=Ue(()=>{if(s.external)return!0;const x=s.to||s.href||"";return typeof x=="object"?!1:x===""||c.value}),m=Ue(()=>{const x=s.to||s.href||"";return d.value?x:n(x,i.resolve)}),g=d.value||u==null?void 0:u({...s,to:m}),A=Ue(()=>{var x;if(!m.value||c.value)return m.value;if(d.value){const N=typeof m.value=="object"&&"path"in m.value?Fu(m.value):m.value,O=typeof N=="object"?i.resolve(N).href:N;return n(O,i.resolve)}return typeof m.value=="object"?((x=i.resolve(m.value))==null?void 0:x.href)??null:n(Fl(o.app.baseURL,m.value),i.resolve)});return{to:m,hasTarget:a,isAbsoluteUrl:c,isExternal:d,href:A,isActive:(g==null?void 0:g.isActive)??Ue(()=>m.value===i.currentRoute.value.path),isExactActive:(g==null?void 0:g.isExactActive)??Ue(()=>m.value===i.currentRoute.value.path),route:(g==null?void 0:g.route)??Ue(()=>i.resolve(m.value)),async navigate(){await sR(A.value,{replace:s.replace,external:d.value||a.value})}}}return bn({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:r,setup(s,{slots:i}){const o=Vt(),{to:a,href:c,navigate:h,isExternal:u,hasTarget:d,isAbsoluteUrl:m}=r(s),g=Mt(!1),A=Mt(null),x=P=>{var y;A.value=s.custom?(y=P==null?void 0:P.$el)==null?void 0:y.nextElementSibling:P==null?void 0:P.$el};function N(P){var y,S;return!g.value&&(typeof s.prefetchOn=="string"?s.prefetchOn===P:((y=s.prefetchOn)==null?void 0:y[P])??((S=t.prefetchOn)==null?void 0:S[P]))&&(s.prefetch??t.prefetch)!==!1&&s.noPrefetch!==!0&&s.target!=="_blank"&&!zP()}async function O(P=Ke()){if(g.value)return;g.value=!0;const y=typeof a.value=="string"?a.value:u.value?Fu(a.value):o.resolve(a.value).fullPath,S=u.value?new URL(y,window.location.href).href:y;await Promise.all([P.hooks.callHook("link:prefetch",S).catch(()=>{}),!u.value&&!d.value&&Sv(a.value,o).catch(()=>{})])}if(N("visibility")){const P=Ke();let y,S=null;Ol(()=>{const D=HP();zl(()=>{y=Ku(()=>{var L;(L=A==null?void 0:A.value)!=null&&L.tagName&&(S=D.observe(A.value,async()=>{S==null||S(),S=null,await O(P)}))})})}),ko(()=>{y&&OP(y),S==null||S(),S=null})}return()=>{var S;if(!u.value&&!d.value){const D={ref:x,to:a.value,activeClass:s.activeClass||t.activeClass,exactActiveClass:s.exactActiveClass||t.exactActiveClass,replace:s.replace,ariaCurrentValue:s.ariaCurrentValue,custom:s.custom};return s.custom||(N("interaction")&&(D.onPointerenter=O.bind(null,void 0),D.onFocus=O.bind(null,void 0)),g.value&&(D.class=s.prefetchedClass||t.prefetchedClass),D.rel=s.rel||void 0),$t(vu("RouterLink"),D,i.default)}const P=s.target||null,y=BP(s.noRel?"":s.rel,t.externalRelAttribute,m.value||d.value?"noopener noreferrer":"")||null;return s.custom?i.default?i.default({href:c.value,navigate:h,prefetch:O,get route(){if(!c.value)return;const D=new URL(c.value,window.location.href);return{path:D.pathname,fullPath:D.pathname,get query(){return Uy(D.search)},hash:D.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:c.value}},rel:y,target:P,isExternal:u.value||d.value,isActive:!1,isExactActive:!1}):null:$t("a",{ref:A,href:c.value||null,rel:y,target:P},(S=i.default)==null?void 0:S.call(i))}}})}const $P=jP(FA);function vm(t,e){const n=e==="append"?Za:Ll;return Kn(t)&&!t.startsWith("http")?t:n(t,!0)}function HP(){const t=Ke();if(t._observer)return t._observer;let e=null;const n=new Map,r=(i,o)=>(e||(e=new IntersectionObserver(a=>{for(const c of a){const h=n.get(c.target);(c.isIntersecting||c.intersectionRatio>0)&&h&&h()}})),n.set(i,o),e.observe(i),()=>{n.delete(i),e.unobserve(i),n.size===0&&(e.disconnect(),e=null)});return t._observer={observe:r}}const qP=/2g/;function zP(){const t=navigator.connection;return!!(t&&(t.saveData||qP.test(t.effectiveType)))}/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function WP(t,e,n){return(e=GP(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Em(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function W(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Em(Object(n),!0).forEach(function(r){WP(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Em(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function KP(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function GP(t){var e=KP(t,"string");return typeof e=="symbol"?e:e+""}const wm=()=>{};let rf={},Pv={},Cv=null,kv={mark:wm,measure:wm};try{typeof window<"u"&&(rf=window),typeof document<"u"&&(Pv=document),typeof MutationObserver<"u"&&(Cv=MutationObserver),typeof performance<"u"&&(kv=performance)}catch{}const{userAgent:Tm=""}=rf.navigator||{},br=rf,je=Pv,bm=Cv,ga=kv;br.document;const Gn=!!je.documentElement&&!!je.head&&typeof je.addEventListener=="function"&&typeof je.createElement=="function",xv=~Tm.indexOf("MSIE")||~Tm.indexOf("Trident/");var QP=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,YP=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Ov={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},XP={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Nv=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Tt="classic",Wl="duotone",JP="sharp",ZP="sharp-duotone",Dv=[Tt,Wl,JP,ZP],e1={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},t1={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},n1=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),r1={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},s1=["fak","fa-kit","fakd","fa-kit-duotone"],Im={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},i1=["kit"],o1={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},a1=["fak","fakd"],l1={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Am={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},_a={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},c1=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],u1=["fak","fa-kit","fakd","fa-kit-duotone"],h1={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},f1={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},d1={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Gu={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},p1=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Qu=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...c1,...p1],m1=["solid","regular","light","thin","duotone","brands"],Mv=[1,2,3,4,5,6,7,8,9,10],g1=Mv.concat([11,12,13,14,15,16,17,18,19,20]),_1=[...Object.keys(d1),...m1,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",_a.GROUP,_a.SWAP_OPACITY,_a.PRIMARY,_a.SECONDARY].concat(Mv.map(t=>"".concat(t,"x"))).concat(g1.map(t=>"w-".concat(t))),y1={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Un="___FONT_AWESOME___",Yu=16,Vv="fa",Lv="svg-inline--fa",ss="data-fa-i2svg",Xu="data-fa-pseudo-element",v1="data-fa-pseudo-element-pending",sf="data-prefix",of="data-icon",Rm="fontawesome-i2svg",E1="async",w1=["HTML","HEAD","STYLE","SCRIPT"],Fv=(()=>{try{return!0}catch{return!1}})();function Oo(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Tt]}})}const Uv=W({},Ov);Uv[Tt]=W(W(W(W({},{"fa-duotone":"duotone"}),Ov[Tt]),Im.kit),Im["kit-duotone"]);const T1=Oo(Uv),Ju=W({},r1);Ju[Tt]=W(W(W(W({},{duotone:"fad"}),Ju[Tt]),Am.kit),Am["kit-duotone"]);const Sm=Oo(Ju),Zu=W({},Gu);Zu[Tt]=W(W({},Zu[Tt]),l1.kit);const af=Oo(Zu),eh=W({},f1);eh[Tt]=W(W({},eh[Tt]),o1.kit);Oo(eh);const b1=QP,Bv="fa-layers-text",I1=YP,A1=W({},e1);Oo(A1);const R1=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Qc=XP,S1=[...i1,..._1],Yi=br.FontAwesomeConfig||{};function P1(t){var e=je.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function C1(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}je&&typeof je.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const s=C1(P1(n));s!=null&&(Yi[r]=s)});const jv={styleDefault:"solid",familyDefault:Tt,cssPrefix:Vv,replacementClass:Lv,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Yi.familyPrefix&&(Yi.cssPrefix=Yi.familyPrefix);const ei=W(W({},jv),Yi);ei.autoReplaceSvg||(ei.observeMutations=!1);const ae={};Object.keys(jv).forEach(t=>{Object.defineProperty(ae,t,{enumerable:!0,set:function(e){ei[t]=e,Xi.forEach(n=>n(ae))},get:function(){return ei[t]}})});Object.defineProperty(ae,"familyPrefix",{enumerable:!0,set:function(t){ei.cssPrefix=t,Xi.forEach(e=>e(ae))},get:function(){return ei.cssPrefix}});br.FontAwesomeConfig=ae;const Xi=[];function k1(t){return Xi.push(t),()=>{Xi.splice(Xi.indexOf(t),1)}}const nr=Yu,pn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function x1(t){if(!t||!Gn)return;const e=je.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=je.head.childNodes;let r=null;for(let s=n.length-1;s>-1;s--){const i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return je.head.insertBefore(e,r),t}const O1="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function fo(){let t=12,e="";for(;t-- >0;)e+=O1[Math.random()*62|0];return e}function fi(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function lf(t){return t.classList?fi(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function $v(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function N1(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat($v(t[n]),'" '),"").trim()}function Kl(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function cf(t){return t.size!==pn.size||t.x!==pn.x||t.y!==pn.y||t.rotate!==pn.rotate||t.flipX||t.flipY}function D1(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(a)},h={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:c,path:h}}function M1(t){let{transform:e,width:n=Yu,height:r=Yu,startCentered:s=!1}=t,i="";return s&&xv?i+="translate(".concat(e.x/nr-n/2,"em, ").concat(e.y/nr-r/2,"em) "):s?i+="translate(calc(-50% + ".concat(e.x/nr,"em), calc(-50% + ").concat(e.y/nr,"em)) "):i+="translate(".concat(e.x/nr,"em, ").concat(e.y/nr,"em) "),i+="scale(".concat(e.size/nr*(e.flipX?-1:1),", ").concat(e.size/nr*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var V1=`:root, :host {
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
}`;function Hv(){const t=Vv,e=Lv,n=ae.cssPrefix,r=ae.replacementClass;let s=V1;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return s}let Pm=!1;function Yc(){ae.autoAddCss&&!Pm&&(x1(Hv()),Pm=!0)}var L1={mixout(){return{dom:{css:Hv,insertCss:Yc}}},hooks(){return{beforeDOMElementCreation(){Yc()},beforeI2svg(){Yc()}}}};const Bn=br||{};Bn[Un]||(Bn[Un]={});Bn[Un].styles||(Bn[Un].styles={});Bn[Un].hooks||(Bn[Un].hooks={});Bn[Un].shims||(Bn[Un].shims=[]);var mn=Bn[Un];const qv=[],zv=function(){je.removeEventListener("DOMContentLoaded",zv),ol=1,qv.map(t=>t())};let ol=!1;Gn&&(ol=(je.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(je.readyState),ol||je.addEventListener("DOMContentLoaded",zv));function F1(t){Gn&&(ol?setTimeout(t,0):qv.push(t))}function No(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?$v(t):"<".concat(e," ").concat(N1(n),">").concat(r.map(No).join(""),"</").concat(e,">")}function Cm(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Xc=function(e,n,r,s){var i=Object.keys(e),o=i.length,a=n,c,h,u;for(r===void 0?(c=1,u=e[i[0]]):(c=0,u=r);c<o;c++)h=i[c],u=a(u,e[h],h,e);return u};function U1(t){const e=[];let n=0;const r=t.length;for(;n<r;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function th(t){const e=U1(t);return e.length===1?e[0].toString(16):null}function B1(t,e){const n=t.length;let r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function km(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function nh(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,s=km(e);typeof mn.hooks.addPack=="function"&&!r?mn.hooks.addPack(t,km(e)):mn.styles[t]=W(W({},mn.styles[t]||{}),s),t==="fas"&&nh("fa",e)}const{styles:po,shims:j1}=mn,Wv=Object.keys(af),$1=Wv.reduce((t,e)=>(t[e]=Object.keys(af[e]),t),{});let uf=null,Kv={},Gv={},Qv={},Yv={},Xv={};function H1(t){return~S1.indexOf(t)}function q1(t,e){const n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!H1(s)?s:null}const Jv=()=>{const t=r=>Xc(po,(s,i,o)=>(s[o]=Xc(i,r,{}),s),{});Kv=t((r,s,i)=>(s[3]&&(r[s[3]]=i),s[2]&&s[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=i}),r)),Gv=t((r,s,i)=>(r[i]=i,s[2]&&s[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=i}),r)),Xv=t((r,s,i)=>{const o=s[2];return r[i]=i,o.forEach(a=>{r[a]=i}),r});const e="far"in po||ae.autoFetchSvg,n=Xc(j1,(r,s)=>{const i=s[0];let o=s[1];const a=s[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:a}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});Qv=n.names,Yv=n.unicodes,uf=Gl(ae.styleDefault,{family:ae.familyDefault})};k1(t=>{uf=Gl(t.styleDefault,{family:ae.familyDefault})});Jv();function hf(t,e){return(Kv[t]||{})[e]}function z1(t,e){return(Gv[t]||{})[e]}function Qr(t,e){return(Xv[t]||{})[e]}function Zv(t){return Qv[t]||{prefix:null,iconName:null}}function W1(t){const e=Yv[t],n=hf("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ir(){return uf}const eE=()=>({prefix:null,iconName:null,rest:[]});function K1(t){let e=Tt;const n=Wv.reduce((r,s)=>(r[s]="".concat(ae.cssPrefix,"-").concat(s),r),{});return Dv.forEach(r=>{(t.includes(n[r])||t.some(s=>$1[r].includes(s)))&&(e=r)}),e}function Gl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Tt}=e,r=T1[n][t];if(n===Wl&&!t)return"fad";const s=Sm[n][t]||Sm[n][r],i=t in mn.styles?t:null;return s||i||null}function G1(t){let e=[],n=null;return t.forEach(r=>{const s=q1(ae.cssPrefix,r);s?n=s:r&&e.push(r)}),{iconName:n,rest:e}}function xm(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function Ql(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const s=Qu.concat(u1),i=xm(t.filter(d=>s.includes(d))),o=xm(t.filter(d=>!Qu.includes(d))),a=i.filter(d=>(r=d,!Nv.includes(d))),[c=null]=a,h=K1(i),u=W(W({},G1(o)),{},{prefix:Gl(c,{family:h})});return W(W(W({},u),J1({values:t,family:h,styles:po,config:ae,canonical:u,givenPrefix:r})),Q1(n,r,u))}function Q1(t,e,n){let{prefix:r,iconName:s}=n;if(t||!r||!s)return{prefix:r,iconName:s};const i=e==="fa"?Zv(s):{},o=Qr(r,s);return s=i.iconName||o||s,r=i.prefix||r,r==="far"&&!po.far&&po.fas&&!ae.autoFetchSvg&&(r="fas"),{prefix:r,iconName:s}}const Y1=Dv.filter(t=>t!==Tt||t!==Wl),X1=Object.keys(Gu).filter(t=>t!==Tt).map(t=>Object.keys(Gu[t])).flat();function J1(t){const{values:e,family:n,canonical:r,givenPrefix:s="",styles:i={},config:o={}}=t,a=n===Wl,c=e.includes("fa-duotone")||e.includes("fad"),h=o.familyDefault==="duotone",u=r.prefix==="fad"||r.prefix==="fa-duotone";if(!a&&(c||h||u)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&Y1.includes(n)&&(Object.keys(i).find(m=>X1.includes(m))||o.autoFetchSvg)){const m=n1.get(n).defaultShortPrefixId;r.prefix=m,r.iconName=Qr(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||s==="fa")&&(r.prefix=Ir()||"fas"),r}class Z1{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]=W(W({},this.definitions[i]||{}),s[i]),nh(i,s[i]);const o=af[Tt][i];o&&nh(o,s[i]),Jv()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(s=>{const{prefix:i,iconName:o,icon:a}=r[s],c=a[2];e[i]||(e[i]={}),c.length>0&&c.forEach(h=>{typeof h=="string"&&(e[i][h]=a)}),e[i][o]=a}),e}}let Om=[],Ns={};const Hs={},eC=Object.keys(Hs);function tC(t,e){let{mixoutsTo:n}=e;return Om=t,Ns={},Object.keys(Hs).forEach(r=>{eC.indexOf(r)===-1&&delete Hs[r]}),Om.forEach(r=>{const s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(n[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=s[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{Ns[o]||(Ns[o]=[]),Ns[o].push(i[o])})}r.provides&&r.provides(Hs)}),n}function rh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return(Ns[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function is(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(Ns[t]||[]).forEach(i=>{i.apply(null,n)})}function Ar(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Hs[t]?Hs[t].apply(null,e):void 0}function sh(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Ir();if(e)return e=Qr(n,e)||e,Cm(tE.definitions,n,e)||Cm(mn.styles,n,e)}const tE=new Z1,nC=()=>{ae.autoReplaceSvg=!1,ae.observeMutations=!1,is("noAuto")},rC={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Gn?(is("beforeI2svg",t),Ar("pseudoElements2svg",t),Ar("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;ae.autoReplaceSvg===!1&&(ae.autoReplaceSvg=!0),ae.observeMutations=!0,F1(()=>{iC({autoReplaceSvgRoot:e}),is("watch",t)})}},sC={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Qr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Gl(t[0]);return{prefix:n,iconName:Qr(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(ae.cssPrefix,"-"))>-1||t.match(b1))){const e=Ql(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Ir(),iconName:Qr(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Ir();return{prefix:e,iconName:Qr(e,t)||t}}}},qt={noAuto:nC,config:ae,dom:rC,parse:sC,library:tE,findIconDefinition:sh,toHtml:No},iC=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=je}=t;(Object.keys(mn.styles).length>0||ae.autoFetchSvg)&&Gn&&ae.autoReplaceSvg&&qt.dom.i2svg({node:e})};function Yl(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>No(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Gn)return;const n=je.createElement("div");return n.innerHTML=t.html,n.children}}),t}function oC(t){let{children:e,main:n,mask:r,attributes:s,styles:i,transform:o}=t;if(cf(o)&&n.found&&!r.found){const{width:a,height:c}=n,h={x:a/c/2,y:.5};s.style=Kl(W(W({},i),{},{"transform-origin":"".concat(h.x+o.x/16,"em ").concat(h.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function aC(t){let{prefix:e,iconName:n,children:r,attributes:s,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(ae.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:W(W({},s),{},{id:o}),children:r}]}]}function ff(t){const{icons:{main:e,mask:n},prefix:r,iconName:s,transform:i,symbol:o,title:a,maskId:c,titleId:h,extra:u,watchable:d=!1}=t,{width:m,height:g}=n.found?n:e,A=a1.includes(r),x=[ae.replacementClass,s?"".concat(ae.cssPrefix,"-").concat(s):""].filter(D=>u.classes.indexOf(D)===-1).filter(D=>D!==""||!!D).concat(u.classes).join(" ");let N={children:[],attributes:W(W({},u.attributes),{},{"data-prefix":r,"data-icon":s,class:x,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(g)})};const O=A&&!~u.classes.indexOf("fa-fw")?{width:"".concat(m/g*16*.0625,"em")}:{};d&&(N.attributes[ss]=""),a&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(h||fo())},children:[a]}),delete N.attributes.title);const P=W(W({},N),{},{prefix:r,iconName:s,main:e,mask:n,maskId:c,transform:i,symbol:o,styles:W(W({},O),u.styles)}),{children:y,attributes:S}=n.found&&e.found?Ar("generateAbstractMask",P)||{children:[],attributes:{}}:Ar("generateAbstractIcon",P)||{children:[],attributes:{}};return P.children=y,P.attributes=S,o?aC(P):oC(P)}function Nm(t){const{content:e,width:n,height:r,transform:s,title:i,extra:o,watchable:a=!1}=t,c=W(W(W({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});a&&(c[ss]="");const h=W({},o.styles);cf(s)&&(h.transform=M1({transform:s,startCentered:!0,width:n,height:r}),h["-webkit-transform"]=h.transform);const u=Kl(h);u.length>0&&(c.style=u);const d=[];return d.push({tag:"span",attributes:c,children:[e]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function lC(t){const{content:e,title:n,extra:r}=t,s=W(W(W({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Kl(r.styles);i.length>0&&(s.style=i);const o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Jc}=mn;function ih(t){const e=t[0],n=t[1],[r]=t.slice(4);let s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(ae.cssPrefix,"-").concat(Qc.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ae.cssPrefix,"-").concat(Qc.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(ae.cssPrefix,"-").concat(Qc.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:s}}const cC={found:!1,width:512,height:512};function uC(t,e){!Fv&&!ae.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function oh(t,e){let n=e;return e==="fa"&&ae.styleDefault!==null&&(e=Ir()),new Promise((r,s)=>{if(n==="fa"){const i=Zv(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Jc[e]&&Jc[e][t]){const i=Jc[e][t];return r(ih(i))}uC(t,e),r(W(W({},cC),{},{icon:ae.showMissingIcons&&t?Ar("missingIconAbstract")||{}:{}}))})}const Dm=()=>{},ah=ae.measurePerformance&&ga&&ga.mark&&ga.measure?ga:{mark:Dm,measure:Dm},Li='FA "6.7.1"',hC=t=>(ah.mark("".concat(Li," ").concat(t," begins")),()=>nE(t)),nE=t=>{ah.mark("".concat(Li," ").concat(t," ends")),ah.measure("".concat(Li," ").concat(t),"".concat(Li," ").concat(t," begins"),"".concat(Li," ").concat(t," ends"))};var df={begin:hC,end:nE};const ka=()=>{};function Mm(t){return typeof(t.getAttribute?t.getAttribute(ss):null)=="string"}function fC(t){const e=t.getAttribute?t.getAttribute(sf):null,n=t.getAttribute?t.getAttribute(of):null;return e&&n}function dC(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(ae.replacementClass)}function pC(){return ae.autoReplaceSvg===!0?xa.replace:xa[ae.autoReplaceSvg]||xa.replace}function mC(t){return je.createElementNS("http://www.w3.org/2000/svg",t)}function gC(t){return je.createElement(t)}function rE(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?mC:gC}=e;if(typeof t=="string")return je.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild(rE(i,{ceFn:n}))}),r}function _C(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const xa={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(rE(n),e)}),e.getAttribute(ss)===null&&ae.keepOriginalSource){let n=je.createComment(_C(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~lf(e).indexOf(ae.replacementClass))return xa.replace(t);const r=new RegExp("".concat(ae.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,a)=>(a===ae.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const s=n.map(i=>No(i)).join(`
`);e.setAttribute(ss,""),e.innerHTML=s}};function Vm(t){t()}function sE(t,e){const n=typeof e=="function"?e:ka;if(t.length===0)n();else{let r=Vm;ae.mutateApproach===E1&&(r=br.requestAnimationFrame||Vm),r(()=>{const s=pC(),i=df.begin("mutate");t.map(s),i(),n()})}}let pf=!1;function iE(){pf=!0}function lh(){pf=!1}let al=null;function Lm(t){if(!bm||!ae.observeMutations)return;const{treeCallback:e=ka,nodeCallback:n=ka,pseudoElementsCallback:r=ka,observeMutationsRoot:s=je}=t;al=new bm(i=>{if(pf)return;const o=Ir();fi(i).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!Mm(a.addedNodes[0])&&(ae.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&ae.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&Mm(a.target)&&~R1.indexOf(a.attributeName))if(a.attributeName==="class"&&fC(a.target)){const{prefix:c,iconName:h}=Ql(lf(a.target));a.target.setAttribute(sf,c||o),h&&a.target.setAttribute(of,h)}else dC(a.target)&&n(a.target)})}),Gn&&al.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function yC(){al&&al.disconnect()}function vC(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,s)=>{const i=s.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function EC(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let s=Ql(lf(t));return s.prefix||(s.prefix=Ir()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=z1(s.prefix,t.innerText)||hf(s.prefix,th(t.innerText))),!s.iconName&&ae.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function wC(t){const e=fi(t.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return ae.autoA11y&&(n?e["aria-labelledby"]="".concat(ae.replacementClass,"-title-").concat(r||fo()):(e["aria-hidden"]="true",e.focusable="false")),e}function TC(){return{iconName:null,title:null,titleId:null,prefix:null,transform:pn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Fm(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:s}=EC(t),i=wC(t),o=rh("parseNodeAttributes",{},t);let a=e.styleParser?vC(t):[];return W({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:pn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:a,attributes:i}},o)}const{styles:bC}=mn;function oE(t){const e=ae.autoReplaceSvg==="nest"?Fm(t,{styleParser:!1}):Fm(t);return~e.extra.classes.indexOf(Bv)?Ar("generateLayersText",t,e):Ar("generateSvgReplacementMutation",t,e)}function IC(){return[...s1,...Qu]}function Um(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Gn)return Promise.resolve();const n=je.documentElement.classList,r=u=>n.add("".concat(Rm,"-").concat(u)),s=u=>n.remove("".concat(Rm,"-").concat(u)),i=ae.autoFetchSvg?IC():Nv.concat(Object.keys(bC));i.includes("fa")||i.push("fa");const o=[".".concat(Bv,":not([").concat(ss,"])")].concat(i.map(u=>".".concat(u,":not([").concat(ss,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=fi(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),s("complete");else return Promise.resolve();const c=df.begin("onTree"),h=a.reduce((u,d)=>{try{const m=oE(d);m&&u.push(m)}catch(m){Fv||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise((u,d)=>{Promise.all(h).then(m=>{sE(m,()=>{r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),c(),u()})}).catch(m=>{c(),d(m)})})}function AC(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;oE(t).then(n=>{n&&sE([n],e)})}function RC(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:sh(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:sh(s||{})),t(r,W(W({},n),{},{mask:s}))}}const SC=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=pn,symbol:r=!1,mask:s=null,maskId:i=null,title:o=null,titleId:a=null,classes:c=[],attributes:h={},styles:u={}}=e;if(!t)return;const{prefix:d,iconName:m,icon:g}=t;return Yl(W({type:"icon"},t),()=>(is("beforeDOMElementCreation",{iconDefinition:t,params:e}),ae.autoA11y&&(o?h["aria-labelledby"]="".concat(ae.replacementClass,"-title-").concat(a||fo()):(h["aria-hidden"]="true",h.focusable="false")),ff({icons:{main:ih(g),mask:s?ih(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:m,transform:W(W({},pn),n),symbol:r,title:o,maskId:i,titleId:a,extra:{attributes:h,styles:u,classes:c}})))};var PC={mixout(){return{icon:RC(SC)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Um,t.nodeCallback=AC,t}}},provides(t){t.i2svg=function(e){const{node:n=je,callback:r=()=>{}}=e;return Um(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:s,titleId:i,prefix:o,transform:a,symbol:c,mask:h,maskId:u,extra:d}=n;return new Promise((m,g)=>{Promise.all([oh(r,o),h.iconName?oh(h.iconName,h.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(A=>{let[x,N]=A;m([e,ff({icons:{main:x,mask:N},prefix:o,iconName:r,transform:a,symbol:c,maskId:u,title:s,titleId:i,extra:d,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:s,transform:i,styles:o}=e;const a=Kl(o);a.length>0&&(r.style=a);let c;return cf(i)&&(c=Ar("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(c||s.icon),{children:n,attributes:r}}}},CC={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Yl({type:"layer"},()=>{is("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(s=>{Array.isArray(s)?s.map(i=>{r=r.concat(i.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(ae.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},kC={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:s={},styles:i={}}=e;return Yl({type:"counter",content:t},()=>(is("beforeDOMElementCreation",{content:t,params:e}),lC({content:t.toString(),title:n,extra:{attributes:s,styles:i,classes:["".concat(ae.cssPrefix,"-layers-counter"),...r]}})))}}}},xC={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=pn,title:r=null,classes:s=[],attributes:i={},styles:o={}}=e;return Yl({type:"text",content:t},()=>(is("beforeDOMElementCreation",{content:t,params:e}),Nm({content:t,transform:W(W({},pn),n),title:r,extra:{attributes:i,styles:o,classes:["".concat(ae.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:s,extra:i}=n;let o=null,a=null;if(xv){const c=parseInt(getComputedStyle(e).fontSize,10),h=e.getBoundingClientRect();o=h.width/c,a=h.height/c}return ae.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Nm({content:e.innerHTML,width:o,height:a,transform:s,title:r,extra:i,watchable:!0})])}}};const OC=new RegExp('"',"ug"),Bm=[1105920,1112319],jm=W(W(W(W({},{FontAwesome:{normal:"fas",400:"fas"}}),t1),y1),h1),ch=Object.keys(jm).reduce((t,e)=>(t[e.toLowerCase()]=jm[e],t),{}),NC=Object.keys(ch).reduce((t,e)=>{const n=ch[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function DC(t){const e=t.replace(OC,""),n=B1(e,0),r=n>=Bm[0]&&n<=Bm[1],s=e.length===2?e[0]===e[1]:!1;return{value:th(s?e[0]:e),isSecondary:r||s}}function MC(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(ch[n]||{})[s]||NC[n]}function $m(t,e){const n="".concat(v1).concat(e.replace(":","-"));return new Promise((r,s)=>{if(t.getAttribute(n)!==null)return r();const o=fi(t.children).filter(m=>m.getAttribute(Xu)===e)[0],a=br.getComputedStyle(t,e),c=a.getPropertyValue("font-family"),h=c.match(I1),u=a.getPropertyValue("font-weight"),d=a.getPropertyValue("content");if(o&&!h)return t.removeChild(o),r();if(h&&d!=="none"&&d!==""){const m=a.getPropertyValue("content");let g=MC(c,u);const{value:A,isSecondary:x}=DC(m),N=h[0].startsWith("FontAwesome");let O=hf(g,A),P=O;if(N){const y=W1(A);y.iconName&&y.prefix&&(O=y.iconName,g=y.prefix)}if(O&&!x&&(!o||o.getAttribute(sf)!==g||o.getAttribute(of)!==P)){t.setAttribute(n,P),o&&t.removeChild(o);const y=TC(),{extra:S}=y;S.attributes[Xu]=e,oh(O,g).then(D=>{const L=ff(W(W({},y),{},{icons:{main:D,mask:eE()},prefix:g,iconName:P,extra:S,watchable:!0})),b=je.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(b,t.firstChild):t.appendChild(b),b.outerHTML=L.map(E=>No(E)).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function VC(t){return Promise.all([$m(t,"::before"),$m(t,"::after")])}function LC(t){return t.parentNode!==document.head&&!~w1.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Xu)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Hm(t){if(Gn)return new Promise((e,n)=>{const r=fi(t.querySelectorAll("*")).filter(LC).map(VC),s=df.begin("searchPseudoElements");iE(),Promise.all(r).then(()=>{s(),lh(),e()}).catch(()=>{s(),lh(),n()})})}var FC={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Hm,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=je}=e;ae.searchPseudoElements&&Hm(n)}}};let qm=!1;var UC={mixout(){return{dom:{unwatch(){iE(),qm=!0}}}},hooks(){return{bootstrap(){Lm(rh("mutationObserverCallbacks",{}))},noAuto(){yC()},watch(t){const{observeMutationsRoot:e}=t;qm?lh():Lm(rh("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const zm=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const s=r.toLowerCase().split("-"),i=s[0];let o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var BC={mixout(){return{parse:{transform:t=>zm(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=zm(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:s,iconWidth:i}=e;const o={transform:"translate(".concat(s/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),h="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(a," ").concat(c," ").concat(h)},d={transform:"translate(".concat(i/2*-1," -256)")},m={outer:o,inner:u,path:d};return{tag:"g",attributes:W({},m.outer),children:[{tag:"g",attributes:W({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:W(W({},n.icon.attributes),m.path)}]}]}}}};const Zc={x:0,y:0,width:"100%",height:"100%"};function Wm(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function jC(t){return t.tag==="g"?t.children:[t]}var $C={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Ql(n.split(" ").map(s=>s.trim())):eE();return r.prefix||(r.prefix=Ir()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:s,mask:i,maskId:o,transform:a}=e;const{width:c,icon:h}=s,{width:u,icon:d}=i,m=D1({transform:a,containerWidth:u,iconWidth:c}),g={tag:"rect",attributes:W(W({},Zc),{},{fill:"white"})},A=h.children?{children:h.children.map(Wm)}:{},x={tag:"g",attributes:W({},m.inner),children:[Wm(W({tag:h.tag,attributes:W(W({},h.attributes),m.path)},A))]},N={tag:"g",attributes:W({},m.outer),children:[x]},O="mask-".concat(o||fo()),P="clip-".concat(o||fo()),y={tag:"mask",attributes:W(W({},Zc),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,N]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:jC(d)},y]};return n.push(S,{tag:"rect",attributes:W({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(O,")")},Zc)}),{children:n,attributes:r}}}},HC={provides(t){let e=!1;br.matchMedia&&(e=br.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:W(W({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=W(W({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:W(W({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:W(W({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:W(W({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:W(W({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:W(W({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:W(W({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:W(W({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},qC={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},zC=[L1,PC,CC,kC,xC,FC,UC,BC,$C,HC,qC];tC(zC,{mixoutsTo:qt});qt.noAuto;qt.config;const WC=qt.library;qt.dom;const uh=qt.parse;qt.findIconDefinition;qt.toHtml;const KC=qt.icon;qt.layer;qt.text;qt.counter;function Km(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function On(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Km(Object(n),!0).forEach(function(r){xt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Km(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function GC(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function QC(t){var e=GC(t,"string");return typeof e=="symbol"?e:e+""}function ll(t){"@babel/helpers - typeof";return ll=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ll(t)}function xt(t,e,n){return e=QC(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function YC(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function XC(t,e){if(t==null)return{};var n=YC(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var JC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},aE={exports:{}};(function(t){(function(e){var n=function(O,P,y){if(!h(P)||d(P)||m(P)||g(P)||c(P))return P;var S,D=0,L=0;if(u(P))for(S=[],L=P.length;D<L;D++)S.push(n(O,P[D],y));else{S={};for(var b in P)Object.prototype.hasOwnProperty.call(P,b)&&(S[O(b,y)]=n(O,P[b],y))}return S},r=function(O,P){P=P||{};var y=P.separator||"_",S=P.split||/(?=[A-Z])/;return O.split(S).join(y)},s=function(O){return A(O)?O:(O=O.replace(/[\-_\s]+(.)?/g,function(P,y){return y?y.toUpperCase():""}),O.substr(0,1).toLowerCase()+O.substr(1))},i=function(O){var P=s(O);return P.substr(0,1).toUpperCase()+P.substr(1)},o=function(O,P){return r(O,P).toLowerCase()},a=Object.prototype.toString,c=function(O){return typeof O=="function"},h=function(O){return O===Object(O)},u=function(O){return a.call(O)=="[object Array]"},d=function(O){return a.call(O)=="[object Date]"},m=function(O){return a.call(O)=="[object RegExp]"},g=function(O){return a.call(O)=="[object Boolean]"},A=function(O){return O=O-0,O===O},x=function(O,P){var y=P&&"process"in P?P.process:P;return typeof y!="function"?O:function(S,D){return y(S,O,D)}},N={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(O,P){return n(x(s,P),O)},decamelizeKeys:function(O,P){return n(x(o,P),O,P)},pascalizeKeys:function(O,P){return n(x(i,P),O)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=N:e.humps=N})(JC)})(aE);var ZC=aE.exports,ek=["class","style"];function tk(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=ZC.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function nk(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function lE(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return lE(c)}),s=Object.keys(t.attributes||{}).reduce(function(c,h){var u=t.attributes[h];switch(h){case"class":c.class=nk(u);break;case"style":c.style=tk(u);break;default:c.attrs[h]=u}return c},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,a=XC(n,ek);return $t(t.tag,On(On(On({},e),{},{class:s.class,style:On(On({},s.style),o)},s.attrs),a),r)}var cE=!1;try{cE=!0}catch{}function rk(){if(!cE&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function eu(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?xt({},t,e):{}}function sk(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},xt(xt(xt(xt(xt(xt(xt(xt(xt(xt(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),xt(xt(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Gm(t){if(t&&ll(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(uh.icon)return uh.icon(t);if(t===null)return null;if(ll(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var ik=bn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=Ue(function(){return Gm(e.icon)}),i=Ue(function(){return eu("classes",sk(e))}),o=Ue(function(){return eu("transform",typeof e.transform=="string"?uh.transform(e.transform):e.transform)}),a=Ue(function(){return eu("mask",Gm(e.mask))}),c=Ue(function(){return KC(s.value,On(On(On(On({},i.value),o.value),a.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});_r(c,function(u){if(!u)return rk("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var h=Ue(function(){return c.value?lE(c.value.abstract[0],{},r):null});return function(){return h.value}}});/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const ok={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},ak=cn(t=>{WC.add(ok),t.vueApp.component("font-awesome-icon",ik)});var Qm={};/**
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
 */const uE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},lk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},hE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let m=(a&15)<<2|h>>6,g=h&63;c||(g=64,o||(m=64)),r.push(n[u],n[d],n[m],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(uE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):lk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||h==null||d==null)throw new ck;const m=i<<2|a>>4;if(r.push(m),h!==64){const g=a<<4&240|h>>2;if(r.push(g),d!==64){const A=h<<6&192|d;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ck extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uk=function(t){const e=uE(t);return hE.encodeByteArray(e,!0)},cl=function(t){return uk(t).replace(/\./g,"")},fE=function(t){try{return hE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function hk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const fk=()=>hk().__FIREBASE_DEFAULTS__,dk=()=>{if(typeof process>"u"||typeof Qm>"u")return;const t=Qm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},pk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fE(t[1]);return e&&JSON.parse(e)},Xl=()=>{try{return fk()||dk()||pk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},dE=t=>{var e,n;return(n=(e=Xl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},mk=t=>{const e=dE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},pE=()=>{var t;return(t=Xl())===null||t===void 0?void 0:t.config},mE=t=>{var e;return(e=Xl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class gk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function _k(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[cl(JSON.stringify(n)),cl(JSON.stringify(o)),""].join(".")}/**
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
 */function bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bt())}function vk(){var t;const e=(t=Xl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function Ek(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function wk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Tk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bk(){const t=bt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ik(){return!vk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ak(){try{return typeof indexedDB=="object"}catch{return!1}}function Rk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Sk="FirebaseError";class Qn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Sk,Object.setPrototypeOf(this,Qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Do.prototype.create)}}class Do{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Pk(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Qn(s,a,r)}}function Pk(t,e){return t.replace(Ck,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Ck=/\{\$([^}]+)}/g;function kk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ul(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ym(i)&&Ym(o)){if(!ul(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ym(t){return t!==null&&typeof t=="object"}/**
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
 */function Mo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xk(t,e){const n=new Ok(t,e);return n.subscribe.bind(n)}class Ok{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Nk(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=tu),s.error===void 0&&(s.error=tu),s.complete===void 0&&(s.complete=tu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Nk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function tu(){}/**
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
 */function Jt(t){return t&&t._delegate?t._delegate:t}class os{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Wr="[DEFAULT]";/**
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
 */class Dk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new gk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Vk(e))try{this.getOrInitializeService({instanceIdentifier:Wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wr){return this.instances.has(e)}getOptions(e=Wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Mk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wr){return this.component?this.component.multipleInstances?e:Wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Mk(t){return t===Wr?void 0:t}function Vk(t){return t.instantiationMode==="EAGER"}/**
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
 */class Lk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Dk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const Fk={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},Uk=Ee.INFO,Bk={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},jk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Bk[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mf{constructor(e){this.name=e,this._logLevel=Uk,this._logHandler=jk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Fk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const $k=(t,e)=>e.some(n=>t instanceof n);let Xm,Jm;function Hk(){return Xm||(Xm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qk(){return Jm||(Jm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gE=new WeakMap,hh=new WeakMap,_E=new WeakMap,nu=new WeakMap,gf=new WeakMap;function zk(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(yr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&gE.set(n,t)}).catch(()=>{}),gf.set(e,t),e}function Wk(t){if(hh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});hh.set(t,e)}let fh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_E.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Kk(t){fh=t(fh)}function Gk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ru(this),e,...n);return _E.set(r,e.sort?e.sort():[e]),yr(r)}:qk().includes(t)?function(...e){return t.apply(ru(this),e),yr(gE.get(this))}:function(...e){return yr(t.apply(ru(this),e))}}function Qk(t){return typeof t=="function"?Gk(t):(t instanceof IDBTransaction&&Wk(t),$k(t,Hk())?new Proxy(t,fh):t)}function yr(t){if(t instanceof IDBRequest)return zk(t);if(nu.has(t))return nu.get(t);const e=Qk(t);return e!==t&&(nu.set(t,e),gf.set(e,t)),e}const ru=t=>gf.get(t);function Yk(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=yr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(yr(o.result),c.oldVersion,c.newVersion,yr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const Xk=["get","getKey","getAll","getAllKeys","count"],Jk=["put","add","delete","clear"],su=new Map;function Zm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(su.get(e))return su.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Jk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Xk.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),s&&c.done]))[0]};return su.set(e,i),i}Kk(t=>({...t,get:(e,n,r)=>Zm(e,n)||t.get(e,n,r),has:(e,n)=>!!Zm(e,n)||t.has(e,n)}));/**
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
 */class Zk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ex(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ex(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dh="@firebase/app",eg="0.10.16";/**
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
 */const jn=new mf("@firebase/app"),tx="@firebase/app-compat",nx="@firebase/analytics-compat",rx="@firebase/analytics",sx="@firebase/app-check-compat",ix="@firebase/app-check",ox="@firebase/auth",ax="@firebase/auth-compat",lx="@firebase/database",cx="@firebase/data-connect",ux="@firebase/database-compat",hx="@firebase/functions",fx="@firebase/functions-compat",dx="@firebase/installations",px="@firebase/installations-compat",mx="@firebase/messaging",gx="@firebase/messaging-compat",_x="@firebase/performance",yx="@firebase/performance-compat",vx="@firebase/remote-config",Ex="@firebase/remote-config-compat",wx="@firebase/storage",Tx="@firebase/storage-compat",bx="@firebase/firestore",Ix="@firebase/vertexai",Ax="@firebase/firestore-compat",Rx="firebase",Sx="11.0.2";/**
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
 */const ph="[DEFAULT]",Px={[dh]:"fire-core",[tx]:"fire-core-compat",[rx]:"fire-analytics",[nx]:"fire-analytics-compat",[ix]:"fire-app-check",[sx]:"fire-app-check-compat",[ox]:"fire-auth",[ax]:"fire-auth-compat",[lx]:"fire-rtdb",[cx]:"fire-data-connect",[ux]:"fire-rtdb-compat",[hx]:"fire-fn",[fx]:"fire-fn-compat",[dx]:"fire-iid",[px]:"fire-iid-compat",[mx]:"fire-fcm",[gx]:"fire-fcm-compat",[_x]:"fire-perf",[yx]:"fire-perf-compat",[vx]:"fire-rc",[Ex]:"fire-rc-compat",[wx]:"fire-gcs",[Tx]:"fire-gcs-compat",[bx]:"fire-fst",[Ax]:"fire-fst-compat",[Ix]:"fire-vertex","fire-js":"fire-js",[Rx]:"fire-js-all"};/**
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
 */const hl=new Map,Cx=new Map,mh=new Map;function tg(t,e){try{t.container.addComponent(e)}catch(n){jn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ti(t){const e=t.name;if(mh.has(e))return jn.debug(`There were multiple attempts to register component ${e}.`),!1;mh.set(e,t);for(const n of hl.values())tg(n,t);for(const n of Cx.values())tg(n,t);return!0}function _f(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function pr(t){return t.settings!==void 0}/**
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
 */const kx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vr=new Do("app","Firebase",kx);/**
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
 */class xx{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new os("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vr.create("app-deleted",{appName:this._name})}}/**
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
 */const di=Sx;function yE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ph,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw vr.create("bad-app-name",{appName:String(s)});if(n||(n=pE()),!n)throw vr.create("no-options");const i=hl.get(s);if(i){if(ul(n,i.options)&&ul(r,i.config))return i;throw vr.create("duplicate-app",{appName:s})}const o=new Lk(s);for(const c of mh.values())o.addComponent(c);const a=new xx(n,r,o);return hl.set(s,a),a}function vE(t=ph){const e=hl.get(t);if(!e&&t===ph&&pE())return yE();if(!e)throw vr.create("no-app",{appName:t});return e}function Er(t,e,n){var r;let s=(r=Px[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jn.warn(a.join(" "));return}ti(new os(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Ox="firebase-heartbeat-database",Nx=1,mo="firebase-heartbeat-store";let iu=null;function EE(){return iu||(iu=Yk(Ox,Nx,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(mo)}catch(n){console.warn(n)}}}}).catch(t=>{throw vr.create("idb-open",{originalErrorMessage:t.message})})),iu}async function Dx(t){try{const n=(await EE()).transaction(mo),r=await n.objectStore(mo).get(wE(t));return await n.done,r}catch(e){if(e instanceof Qn)jn.warn(e.message);else{const n=vr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jn.warn(n.message)}}}async function ng(t,e){try{const r=(await EE()).transaction(mo,"readwrite");await r.objectStore(mo).put(e,wE(t)),await r.done}catch(n){if(n instanceof Qn)jn.warn(n.message);else{const r=vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});jn.warn(r.message)}}}function wE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Mx=1024,Vx=30*24*60*60*1e3;class Lx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ux(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=rg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Vx}),this._storage.overwrite(this._heartbeatsCache))}catch(r){jn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=rg(),{heartbeatsToSend:r,unsentEntries:s}=Fx(this._heartbeatsCache.heartbeats),i=cl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return jn.warn(n),""}}}function rg(){return new Date().toISOString().substring(0,10)}function Fx(t,e=Mx){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),sg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),sg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ux{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ak()?Rk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Dx(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ng(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ng(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function sg(t){return cl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Bx(t){ti(new os("platform-logger",e=>new Zk(e),"PRIVATE")),ti(new os("heartbeat",e=>new Lx(e),"PRIVATE")),Er(dh,eg,t),Er(dh,eg,"esm2017"),Er("fire-js","")}Bx("");var jx="firebase",$x="11.0.2";/**
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
 */Er(jx,$x,"app");var ig=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ns,TE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,E){function v(){}v.prototype=E.prototype,b.D=E.prototype,b.prototype=new v,b.prototype.constructor=b,b.C=function(w,k,R){for(var T=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)T[_e-2]=arguments[_e];return E.prototype[k].apply(w,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,E,v){v||(v=0);var w=Array(16);if(typeof E=="string")for(var k=0;16>k;++k)w[k]=E.charCodeAt(v++)|E.charCodeAt(v++)<<8|E.charCodeAt(v++)<<16|E.charCodeAt(v++)<<24;else for(k=0;16>k;++k)w[k]=E[v++]|E[v++]<<8|E[v++]<<16|E[v++]<<24;E=b.g[0],v=b.g[1],k=b.g[2];var R=b.g[3],T=E+(R^v&(k^R))+w[0]+3614090360&4294967295;E=v+(T<<7&4294967295|T>>>25),T=R+(k^E&(v^k))+w[1]+3905402710&4294967295,R=E+(T<<12&4294967295|T>>>20),T=k+(v^R&(E^v))+w[2]+606105819&4294967295,k=R+(T<<17&4294967295|T>>>15),T=v+(E^k&(R^E))+w[3]+3250441966&4294967295,v=k+(T<<22&4294967295|T>>>10),T=E+(R^v&(k^R))+w[4]+4118548399&4294967295,E=v+(T<<7&4294967295|T>>>25),T=R+(k^E&(v^k))+w[5]+1200080426&4294967295,R=E+(T<<12&4294967295|T>>>20),T=k+(v^R&(E^v))+w[6]+2821735955&4294967295,k=R+(T<<17&4294967295|T>>>15),T=v+(E^k&(R^E))+w[7]+4249261313&4294967295,v=k+(T<<22&4294967295|T>>>10),T=E+(R^v&(k^R))+w[8]+1770035416&4294967295,E=v+(T<<7&4294967295|T>>>25),T=R+(k^E&(v^k))+w[9]+2336552879&4294967295,R=E+(T<<12&4294967295|T>>>20),T=k+(v^R&(E^v))+w[10]+4294925233&4294967295,k=R+(T<<17&4294967295|T>>>15),T=v+(E^k&(R^E))+w[11]+2304563134&4294967295,v=k+(T<<22&4294967295|T>>>10),T=E+(R^v&(k^R))+w[12]+1804603682&4294967295,E=v+(T<<7&4294967295|T>>>25),T=R+(k^E&(v^k))+w[13]+4254626195&4294967295,R=E+(T<<12&4294967295|T>>>20),T=k+(v^R&(E^v))+w[14]+2792965006&4294967295,k=R+(T<<17&4294967295|T>>>15),T=v+(E^k&(R^E))+w[15]+1236535329&4294967295,v=k+(T<<22&4294967295|T>>>10),T=E+(k^R&(v^k))+w[1]+4129170786&4294967295,E=v+(T<<5&4294967295|T>>>27),T=R+(v^k&(E^v))+w[6]+3225465664&4294967295,R=E+(T<<9&4294967295|T>>>23),T=k+(E^v&(R^E))+w[11]+643717713&4294967295,k=R+(T<<14&4294967295|T>>>18),T=v+(R^E&(k^R))+w[0]+3921069994&4294967295,v=k+(T<<20&4294967295|T>>>12),T=E+(k^R&(v^k))+w[5]+3593408605&4294967295,E=v+(T<<5&4294967295|T>>>27),T=R+(v^k&(E^v))+w[10]+38016083&4294967295,R=E+(T<<9&4294967295|T>>>23),T=k+(E^v&(R^E))+w[15]+3634488961&4294967295,k=R+(T<<14&4294967295|T>>>18),T=v+(R^E&(k^R))+w[4]+3889429448&4294967295,v=k+(T<<20&4294967295|T>>>12),T=E+(k^R&(v^k))+w[9]+568446438&4294967295,E=v+(T<<5&4294967295|T>>>27),T=R+(v^k&(E^v))+w[14]+3275163606&4294967295,R=E+(T<<9&4294967295|T>>>23),T=k+(E^v&(R^E))+w[3]+4107603335&4294967295,k=R+(T<<14&4294967295|T>>>18),T=v+(R^E&(k^R))+w[8]+1163531501&4294967295,v=k+(T<<20&4294967295|T>>>12),T=E+(k^R&(v^k))+w[13]+2850285829&4294967295,E=v+(T<<5&4294967295|T>>>27),T=R+(v^k&(E^v))+w[2]+4243563512&4294967295,R=E+(T<<9&4294967295|T>>>23),T=k+(E^v&(R^E))+w[7]+1735328473&4294967295,k=R+(T<<14&4294967295|T>>>18),T=v+(R^E&(k^R))+w[12]+2368359562&4294967295,v=k+(T<<20&4294967295|T>>>12),T=E+(v^k^R)+w[5]+4294588738&4294967295,E=v+(T<<4&4294967295|T>>>28),T=R+(E^v^k)+w[8]+2272392833&4294967295,R=E+(T<<11&4294967295|T>>>21),T=k+(R^E^v)+w[11]+1839030562&4294967295,k=R+(T<<16&4294967295|T>>>16),T=v+(k^R^E)+w[14]+4259657740&4294967295,v=k+(T<<23&4294967295|T>>>9),T=E+(v^k^R)+w[1]+2763975236&4294967295,E=v+(T<<4&4294967295|T>>>28),T=R+(E^v^k)+w[4]+1272893353&4294967295,R=E+(T<<11&4294967295|T>>>21),T=k+(R^E^v)+w[7]+4139469664&4294967295,k=R+(T<<16&4294967295|T>>>16),T=v+(k^R^E)+w[10]+3200236656&4294967295,v=k+(T<<23&4294967295|T>>>9),T=E+(v^k^R)+w[13]+681279174&4294967295,E=v+(T<<4&4294967295|T>>>28),T=R+(E^v^k)+w[0]+3936430074&4294967295,R=E+(T<<11&4294967295|T>>>21),T=k+(R^E^v)+w[3]+3572445317&4294967295,k=R+(T<<16&4294967295|T>>>16),T=v+(k^R^E)+w[6]+76029189&4294967295,v=k+(T<<23&4294967295|T>>>9),T=E+(v^k^R)+w[9]+3654602809&4294967295,E=v+(T<<4&4294967295|T>>>28),T=R+(E^v^k)+w[12]+3873151461&4294967295,R=E+(T<<11&4294967295|T>>>21),T=k+(R^E^v)+w[15]+530742520&4294967295,k=R+(T<<16&4294967295|T>>>16),T=v+(k^R^E)+w[2]+3299628645&4294967295,v=k+(T<<23&4294967295|T>>>9),T=E+(k^(v|~R))+w[0]+4096336452&4294967295,E=v+(T<<6&4294967295|T>>>26),T=R+(v^(E|~k))+w[7]+1126891415&4294967295,R=E+(T<<10&4294967295|T>>>22),T=k+(E^(R|~v))+w[14]+2878612391&4294967295,k=R+(T<<15&4294967295|T>>>17),T=v+(R^(k|~E))+w[5]+4237533241&4294967295,v=k+(T<<21&4294967295|T>>>11),T=E+(k^(v|~R))+w[12]+1700485571&4294967295,E=v+(T<<6&4294967295|T>>>26),T=R+(v^(E|~k))+w[3]+2399980690&4294967295,R=E+(T<<10&4294967295|T>>>22),T=k+(E^(R|~v))+w[10]+4293915773&4294967295,k=R+(T<<15&4294967295|T>>>17),T=v+(R^(k|~E))+w[1]+2240044497&4294967295,v=k+(T<<21&4294967295|T>>>11),T=E+(k^(v|~R))+w[8]+1873313359&4294967295,E=v+(T<<6&4294967295|T>>>26),T=R+(v^(E|~k))+w[15]+4264355552&4294967295,R=E+(T<<10&4294967295|T>>>22),T=k+(E^(R|~v))+w[6]+2734768916&4294967295,k=R+(T<<15&4294967295|T>>>17),T=v+(R^(k|~E))+w[13]+1309151649&4294967295,v=k+(T<<21&4294967295|T>>>11),T=E+(k^(v|~R))+w[4]+4149444226&4294967295,E=v+(T<<6&4294967295|T>>>26),T=R+(v^(E|~k))+w[11]+3174756917&4294967295,R=E+(T<<10&4294967295|T>>>22),T=k+(E^(R|~v))+w[2]+718787259&4294967295,k=R+(T<<15&4294967295|T>>>17),T=v+(R^(k|~E))+w[9]+3951481745&4294967295,b.g[0]=b.g[0]+E&4294967295,b.g[1]=b.g[1]+(k+(T<<21&4294967295|T>>>11))&4294967295,b.g[2]=b.g[2]+k&4294967295,b.g[3]=b.g[3]+R&4294967295}r.prototype.u=function(b,E){E===void 0&&(E=b.length);for(var v=E-this.blockSize,w=this.B,k=this.h,R=0;R<E;){if(k==0)for(;R<=v;)s(this,b,R),R+=this.blockSize;if(typeof b=="string"){for(;R<E;)if(w[k++]=b.charCodeAt(R++),k==this.blockSize){s(this,w),k=0;break}}else for(;R<E;)if(w[k++]=b[R++],k==this.blockSize){s(this,w),k=0;break}}this.h=k,this.o+=E},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var E=1;E<b.length-8;++E)b[E]=0;var v=8*this.o;for(E=b.length-8;E<b.length;++E)b[E]=v&255,v/=256;for(this.u(b),b=Array(16),E=v=0;4>E;++E)for(var w=0;32>w;w+=8)b[v++]=this.g[E]>>>w&255;return b};function i(b,E){var v=a;return Object.prototype.hasOwnProperty.call(v,b)?v[b]:v[b]=E(b)}function o(b,E){this.h=E;for(var v=[],w=!0,k=b.length-1;0<=k;k--){var R=b[k]|0;w&&R==E||(v[k]=R,w=!1)}this.g=v}var a={};function c(b){return-128<=b&&128>b?i(b,function(E){return new o([E|0],0>E?-1:0)}):new o([b|0],0>b?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return d;if(0>b)return N(h(-b));for(var E=[],v=1,w=0;b>=v;w++)E[w]=b/v|0,v*=4294967296;return new o(E,0)}function u(b,E){if(b.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(b.charAt(0)=="-")return N(u(b.substring(1),E));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(E,8)),w=d,k=0;k<b.length;k+=8){var R=Math.min(8,b.length-k),T=parseInt(b.substring(k,k+R),E);8>R?(R=h(Math.pow(E,R)),w=w.j(R).add(h(T))):(w=w.j(v),w=w.add(h(T)))}return w}var d=c(0),m=c(1),g=c(16777216);t=o.prototype,t.m=function(){if(x(this))return-N(this).m();for(var b=0,E=1,v=0;v<this.g.length;v++){var w=this.i(v);b+=(0<=w?w:4294967296+w)*E,E*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(A(this))return"0";if(x(this))return"-"+N(this).toString(b);for(var E=h(Math.pow(b,6)),v=this,w="";;){var k=S(v,E).g;v=O(v,k.j(E));var R=((0<v.g.length?v.g[0]:v.h)>>>0).toString(b);if(v=k,A(v))return R+w;for(;6>R.length;)R="0"+R;w=R+w}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function A(b){if(b.h!=0)return!1;for(var E=0;E<b.g.length;E++)if(b.g[E]!=0)return!1;return!0}function x(b){return b.h==-1}t.l=function(b){return b=O(this,b),x(b)?-1:A(b)?0:1};function N(b){for(var E=b.g.length,v=[],w=0;w<E;w++)v[w]=~b.g[w];return new o(v,~b.h).add(m)}t.abs=function(){return x(this)?N(this):this},t.add=function(b){for(var E=Math.max(this.g.length,b.g.length),v=[],w=0,k=0;k<=E;k++){var R=w+(this.i(k)&65535)+(b.i(k)&65535),T=(R>>>16)+(this.i(k)>>>16)+(b.i(k)>>>16);w=T>>>16,R&=65535,T&=65535,v[k]=T<<16|R}return new o(v,v[v.length-1]&-2147483648?-1:0)};function O(b,E){return b.add(N(E))}t.j=function(b){if(A(this)||A(b))return d;if(x(this))return x(b)?N(this).j(N(b)):N(N(this).j(b));if(x(b))return N(this.j(N(b)));if(0>this.l(g)&&0>b.l(g))return h(this.m()*b.m());for(var E=this.g.length+b.g.length,v=[],w=0;w<2*E;w++)v[w]=0;for(w=0;w<this.g.length;w++)for(var k=0;k<b.g.length;k++){var R=this.i(w)>>>16,T=this.i(w)&65535,_e=b.i(k)>>>16,ve=b.i(k)&65535;v[2*w+2*k]+=T*ve,P(v,2*w+2*k),v[2*w+2*k+1]+=R*ve,P(v,2*w+2*k+1),v[2*w+2*k+1]+=T*_e,P(v,2*w+2*k+1),v[2*w+2*k+2]+=R*_e,P(v,2*w+2*k+2)}for(w=0;w<E;w++)v[w]=v[2*w+1]<<16|v[2*w];for(w=E;w<2*E;w++)v[w]=0;return new o(v,0)};function P(b,E){for(;(b[E]&65535)!=b[E];)b[E+1]+=b[E]>>>16,b[E]&=65535,E++}function y(b,E){this.g=b,this.h=E}function S(b,E){if(A(E))throw Error("division by zero");if(A(b))return new y(d,d);if(x(b))return E=S(N(b),E),new y(N(E.g),N(E.h));if(x(E))return E=S(b,N(E)),new y(N(E.g),E.h);if(30<b.g.length){if(x(b)||x(E))throw Error("slowDivide_ only works with positive integers.");for(var v=m,w=E;0>=w.l(b);)v=D(v),w=D(w);var k=L(v,1),R=L(w,1);for(w=L(w,2),v=L(v,2);!A(w);){var T=R.add(w);0>=T.l(b)&&(k=k.add(v),R=T),w=L(w,1),v=L(v,1)}return E=O(b,k.j(E)),new y(k,E)}for(k=d;0<=b.l(E);){for(v=Math.max(1,Math.floor(b.m()/E.m())),w=Math.ceil(Math.log(v)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),R=h(v),T=R.j(E);x(T)||0<T.l(b);)v-=w,R=h(v),T=R.j(E);A(R)&&(R=m),k=k.add(R),b=O(b,T)}return new y(k,b)}t.A=function(b){return S(this,b).h},t.and=function(b){for(var E=Math.max(this.g.length,b.g.length),v=[],w=0;w<E;w++)v[w]=this.i(w)&b.i(w);return new o(v,this.h&b.h)},t.or=function(b){for(var E=Math.max(this.g.length,b.g.length),v=[],w=0;w<E;w++)v[w]=this.i(w)|b.i(w);return new o(v,this.h|b.h)},t.xor=function(b){for(var E=Math.max(this.g.length,b.g.length),v=[],w=0;w<E;w++)v[w]=this.i(w)^b.i(w);return new o(v,this.h^b.h)};function D(b){for(var E=b.g.length+1,v=[],w=0;w<E;w++)v[w]=b.i(w)<<1|b.i(w-1)>>>31;return new o(v,b.h)}function L(b,E){var v=E>>5;E%=32;for(var w=b.g.length-v,k=[],R=0;R<w;R++)k[R]=0<E?b.i(R+v)>>>E|b.i(R+v+1)<<32-E:b.i(R+v);return new o(k,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,TE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=u,ns=o}).apply(typeof ig<"u"?ig:typeof self<"u"?self:typeof window<"u"?window:{});var ya=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bE,Fi,IE,Oa,gh,AE,RE,SE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,p){return l==Array.prototype||l==Object.prototype||(l[f]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof ya=="object"&&ya];for(var f=0;f<l.length;++f){var p=l[f];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(l,f){if(f)e:{var p=r;l=l.split(".");for(var _=0;_<l.length-1;_++){var M=l[_];if(!(M in p))break e;p=p[M]}l=l[l.length-1],_=p[l],f=f(_),f!=_&&f!=null&&e(p,l,{configurable:!0,writable:!0,value:f})}}function i(l,f){l instanceof String&&(l+="");var p=0,_=!1,M={next:function(){if(!_&&p<l.length){var F=p++;return{value:f(F,l[F]),done:!1}}return _=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}s("Array.prototype.values",function(l){return l||function(){return i(this,function(f,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function h(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function u(l,f,p){return l.call.apply(l.bind,arguments)}function d(l,f,p){if(!l)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,_),l.apply(f,M)}}return function(){return l.apply(f,arguments)}}function m(l,f,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?u:d,m.apply(null,arguments)}function g(l,f){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),l.apply(this,_)}}function A(l,f){function p(){}p.prototype=f.prototype,l.aa=f.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(_,M,F){for(var Q=Array(arguments.length-2),De=2;De<arguments.length;De++)Q[De-2]=arguments[De];return f.prototype[M].apply(_,Q)}}function x(l){const f=l.length;if(0<f){const p=Array(f);for(let _=0;_<f;_++)p[_]=l[_];return p}return[]}function N(l,f){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(c(_)){const M=l.length||0,F=_.length||0;l.length=M+F;for(let Q=0;Q<F;Q++)l[M+Q]=_[Q]}else l.push(_)}}class O{constructor(f,p){this.i=f,this.j=p,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function P(l){return/^[\s\xa0]*$/.test(l)}function y(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function S(l){return S[" "](l),l}S[" "]=function(){};var D=y().indexOf("Gecko")!=-1&&!(y().toLowerCase().indexOf("webkit")!=-1&&y().indexOf("Edge")==-1)&&!(y().indexOf("Trident")!=-1||y().indexOf("MSIE")!=-1)&&y().indexOf("Edge")==-1;function L(l,f,p){for(const _ in l)f.call(p,l[_],_,l)}function b(l,f){for(const p in l)f.call(void 0,l[p],p,l)}function E(l){const f={};for(const p in l)f[p]=l[p];return f}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(l,f){let p,_;for(let M=1;M<arguments.length;M++){_=arguments[M];for(p in _)l[p]=_[p];for(let F=0;F<v.length;F++)p=v[F],Object.prototype.hasOwnProperty.call(_,p)&&(l[p]=_[p])}}function k(l){var f=1;l=l.split(":");const p=[];for(;0<f&&l.length;)p.push(l.shift()),f--;return l.length&&p.push(l.join(":")),p}function R(l){a.setTimeout(()=>{throw l},0)}function T(){var l=qe;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class _e{constructor(){this.h=this.g=null}add(f,p){const _=ve.get();_.set(f,p),this.h?this.h.next=_:this.g=_,this.h=_}}var ve=new O(()=>new re,l=>l.reset());class re{constructor(){this.next=this.g=this.h=null}set(f,p){this.h=f,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let fe,ne=!1,qe=new _e,Zt=()=>{const l=a.Promise.resolve(void 0);fe=()=>{l.then(zt)}};var zt=()=>{for(var l;l=T();){try{l.h.call(l.g)}catch(p){R(p)}var f=ve;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}ne=!1};function ze(){this.s=this.s,this.C=this.C}ze.prototype.s=!1,ze.prototype.ma=function(){this.s||(this.s=!0,this.N())},ze.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function We(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}We.prototype.h=function(){this.defaultPrevented=!0};var Yn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,f),a.removeEventListener("test",p,f)}catch{}return l}();function un(l,f){if(We.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,_=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(D){e:{try{S(f.nodeName);var M=!0;break e}catch{}M=!1}M||(f=null)}}else p=="mouseover"?f=l.fromElement:p=="mouseout"&&(f=l.toElement);this.relatedTarget=f,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:kt[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&un.aa.h.call(this)}}A(un,We);var kt={2:"touch",3:"pen",4:"mouse"};un.prototype.h=function(){un.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var B="closure_listenable_"+(1e6*Math.random()|0),Z=0;function X(l,f,p,_,M){this.listener=l,this.proxy=null,this.src=f,this.type=p,this.capture=!!_,this.ha=M,this.key=++Z,this.da=this.fa=!1}function se(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Te(l){this.src=l,this.g={},this.h=0}Te.prototype.add=function(l,f,p,_,M){var F=l.toString();l=this.g[F],l||(l=this.g[F]=[],this.h++);var Q=I(l,f,_,M);return-1<Q?(f=l[Q],p||(f.fa=!1)):(f=new X(f,this.src,F,!!_,M),f.fa=p,l.push(f)),f};function Ne(l,f){var p=f.type;if(p in l.g){var _=l.g[p],M=Array.prototype.indexOf.call(_,f,void 0),F;(F=0<=M)&&Array.prototype.splice.call(_,M,1),F&&(se(f),l.g[p].length==0&&(delete l.g[p],l.h--))}}function I(l,f,p,_){for(var M=0;M<l.length;++M){var F=l[M];if(!F.da&&F.listener==f&&F.capture==!!p&&F.ha==_)return M}return-1}var C="closure_lm_"+(1e6*Math.random()|0),V={};function H(l,f,p,_,M){if(Array.isArray(f)){for(var F=0;F<f.length;F++)H(l,f[F],p,_,M);return null}return p=oe(p),l&&l[B]?l.K(f,p,h(_)?!!_.capture:!!_,M):U(l,f,p,!1,_,M)}function U(l,f,p,_,M,F){if(!f)throw Error("Invalid event type");var Q=h(M)?!!M.capture:!!M,De=ce(l);if(De||(l[C]=De=new Te(l)),p=De.add(f,p,_,Q,F),p.proxy)return p;if(_=q(),p.proxy=_,_.src=l,_.listener=p,l.addEventListener)Yn||(M=Q),M===void 0&&(M=!1),l.addEventListener(f.toString(),_,M);else if(l.attachEvent)l.attachEvent(K(f.toString()),_);else if(l.addListener&&l.removeListener)l.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function q(){function l(p){return f.call(l.src,l.listener,p)}const f=z;return l}function Y(l,f,p,_,M){if(Array.isArray(f))for(var F=0;F<f.length;F++)Y(l,f[F],p,_,M);else _=h(_)?!!_.capture:!!_,p=oe(p),l&&l[B]?(l=l.i,f=String(f).toString(),f in l.g&&(F=l.g[f],p=I(F,p,_,M),-1<p&&(se(F[p]),Array.prototype.splice.call(F,p,1),F.length==0&&(delete l.g[f],l.h--)))):l&&(l=ce(l))&&(f=l.g[f.toString()],l=-1,f&&(l=I(f,p,_,M)),(p=-1<l?f[l]:null)&&G(p))}function G(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[B])Ne(f.i,l);else{var p=l.type,_=l.proxy;f.removeEventListener?f.removeEventListener(p,_,l.capture):f.detachEvent?f.detachEvent(K(p),_):f.addListener&&f.removeListener&&f.removeListener(_),(p=ce(f))?(Ne(p,l),p.h==0&&(p.src=null,f[C]=null)):se(l)}}}function K(l){return l in V?V[l]:V[l]="on"+l}function z(l,f){if(l.da)l=!0;else{f=new un(f,this);var p=l.listener,_=l.ha||l.src;l.fa&&G(l),l=p.call(_,f)}return l}function ce(l){return l=l[C],l instanceof Te?l:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function oe(l){return typeof l=="function"?l:(l[J]||(l[J]=function(f){return l.handleEvent(f)}),l[J])}function ie(){ze.call(this),this.i=new Te(this),this.M=this,this.F=null}A(ie,ze),ie.prototype[B]=!0,ie.prototype.removeEventListener=function(l,f,p,_){Y(this,l,f,p,_)};function ue(l,f){var p,_=l.F;if(_)for(p=[];_;_=_.F)p.push(_);if(l=l.M,_=f.type||f,typeof f=="string")f=new We(f,l);else if(f instanceof We)f.target=f.target||l;else{var M=f;f=new We(_,l),w(f,M)}if(M=!0,p)for(var F=p.length-1;0<=F;F--){var Q=f.g=p[F];M=Pe(Q,_,!0,f)&&M}if(Q=f.g=l,M=Pe(Q,_,!0,f)&&M,M=Pe(Q,_,!1,f)&&M,p)for(F=0;F<p.length;F++)Q=f.g=p[F],M=Pe(Q,_,!1,f)&&M}ie.prototype.N=function(){if(ie.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var p=l.g[f],_=0;_<p.length;_++)se(p[_]);delete l.g[f],l.h--}}this.F=null},ie.prototype.K=function(l,f,p,_){return this.i.add(String(l),f,!1,p,_)},ie.prototype.L=function(l,f,p,_){return this.i.add(String(l),f,!0,p,_)};function Pe(l,f,p,_){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var M=!0,F=0;F<f.length;++F){var Q=f[F];if(Q&&!Q.da&&Q.capture==p){var De=Q.listener,lt=Q.ha||Q.src;Q.fa&&Ne(l.i,Q),M=De.call(lt,_)!==!1&&M}}return M&&!_.defaultPrevented}function Ae(l,f,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(l,f||0)}function dt(l){l.g=Ae(()=>{l.g=null,l.i&&(l.i=!1,dt(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class rt extends ze{constructor(f,p){super(),this.m=f,this.l=p,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:dt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function at(l){ze.call(this),this.h=l,this.g={}}A(at,ze);var pt=[];function Xn(l){L(l.g,function(f,p){this.g.hasOwnProperty(p)&&G(f)},l),l.g={}}at.prototype.N=function(){at.aa.N.call(this),Xn(this)},at.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ms=a.JSON.stringify,It=a.JSON.parse,Wt=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function gs(){}gs.prototype.h=null;function ad(l){return l.h||(l.h=l.i())}function ld(){}var Ei={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function dc(){We.call(this,"d")}A(dc,We);function pc(){We.call(this,"c")}A(pc,We);var Vr={},cd=null;function qo(){return cd=cd||new ie}Vr.La="serverreachability";function ud(l){We.call(this,Vr.La,l)}A(ud,We);function wi(l){const f=qo();ue(f,new ud(f))}Vr.STAT_EVENT="statevent";function hd(l,f){We.call(this,Vr.STAT_EVENT,l),this.stat=f}A(hd,We);function At(l){const f=qo();ue(f,new hd(f,l))}Vr.Ma="timingevent";function fd(l,f){We.call(this,Vr.Ma,l),this.size=f}A(fd,We);function Ti(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},f)}function bi(){this.g=!0}bi.prototype.xa=function(){this.g=!1};function Sw(l,f,p,_,M,F){l.info(function(){if(l.g)if(F)for(var Q="",De=F.split("&"),lt=0;lt<De.length;lt++){var Re=De[lt].split("=");if(1<Re.length){var mt=Re[0];Re=Re[1];var gt=mt.split("_");Q=2<=gt.length&&gt[1]=="type"?Q+(mt+"="+Re+"&"):Q+(mt+"=redacted&")}}else Q=null;else Q=F;return"XMLHTTP REQ ("+_+") [attempt "+M+"]: "+f+`
`+p+`
`+Q})}function Pw(l,f,p,_,M,F,Q){l.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+M+"]: "+f+`
`+p+`
`+F+" "+Q})}function _s(l,f,p,_){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+kw(l,p)+(_?" "+_:"")})}function Cw(l,f){l.info(function(){return"TIMEOUT: "+f})}bi.prototype.info=function(){};function kw(l,f){if(!l.g)return f;if(!f)return null;try{var p=JSON.parse(f);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var _=p[l];if(!(2>_.length)){var M=_[1];if(Array.isArray(M)&&!(1>M.length)){var F=M[0];if(F!="noop"&&F!="stop"&&F!="close")for(var Q=1;Q<M.length;Q++)M[Q]=""}}}}return ms(p)}catch{return f}}var zo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},dd={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},mc;function Wo(){}A(Wo,gs),Wo.prototype.g=function(){return new XMLHttpRequest},Wo.prototype.i=function(){return{}},mc=new Wo;function Jn(l,f,p,_){this.j=l,this.i=f,this.l=p,this.R=_||1,this.U=new at(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new pd}function pd(){this.i=null,this.g="",this.h=!1}var md={},gc={};function _c(l,f,p){l.L=1,l.v=Yo(In(f)),l.m=p,l.P=!0,gd(l,null)}function gd(l,f){l.F=Date.now(),Ko(l),l.A=In(l.v);var p=l.A,_=l.R;Array.isArray(_)||(_=[String(_)]),kd(p.i,"t",_),l.C=0,p=l.j.J,l.h=new pd,l.g=Gd(l.j,p?f:null,!l.m),0<l.O&&(l.M=new rt(m(l.Y,l,l.g),l.O)),f=l.U,p=l.g,_=l.ca;var M="readystatechange";Array.isArray(M)||(M&&(pt[0]=M.toString()),M=pt);for(var F=0;F<M.length;F++){var Q=H(p,M[F],_||f.handleEvent,!1,f.h||f);if(!Q)break;f.g[Q.key]=Q}f=l.H?E(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),wi(),Sw(l.i,l.u,l.A,l.l,l.R,l.m)}Jn.prototype.ca=function(l){l=l.target;const f=this.M;f&&An(l)==3?f.j():this.Y(l)},Jn.prototype.Y=function(l){try{if(l==this.g)e:{const gt=An(this.g);var f=this.g.Ba();const Es=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||Ld(this.g)))){this.J||gt!=4||f==7||(f==8||0>=Es?wi(3):wi(2)),yc(this);var p=this.g.Z();this.X=p;t:if(_d(this)){var _=Ld(this.g);l="";var M=_.length,F=An(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Lr(this),Ii(this);var Q="";break t}this.h.i=new a.TextDecoder}for(f=0;f<M;f++)this.h.h=!0,l+=this.h.i.decode(_[f],{stream:!(F&&f==M-1)});_.length=0,this.h.g+=l,this.C=0,Q=this.h.g}else Q=this.g.oa();if(this.o=p==200,Pw(this.i,this.u,this.A,this.l,this.R,gt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var De,lt=this.g;if((De=lt.g?lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!P(De)){var Re=De;break t}}Re=null}if(p=Re)_s(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vc(this,p);else{this.o=!1,this.s=3,At(12),Lr(this),Ii(this);break e}}if(this.P){p=!0;let en;for(;!this.J&&this.C<Q.length;)if(en=xw(this,Q),en==gc){gt==4&&(this.s=4,At(14),p=!1),_s(this.i,this.l,null,"[Incomplete Response]");break}else if(en==md){this.s=4,At(15),_s(this.i,this.l,Q,"[Invalid Chunk]"),p=!1;break}else _s(this.i,this.l,en,null),vc(this,en);if(_d(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||Q.length!=0||this.h.h||(this.s=1,At(16),p=!1),this.o=this.o&&p,!p)_s(this.i,this.l,Q,"[Invalid Chunked Response]"),Lr(this),Ii(this);else if(0<Q.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+Q.length),Ac(mt),mt.M=!0,At(11))}}else _s(this.i,this.l,Q,null),vc(this,Q);gt==4&&Lr(this),this.o&&!this.J&&(gt==4?qd(this.j,this):(this.o=!1,Ko(this)))}else Gw(this.g),p==400&&0<Q.indexOf("Unknown SID")?(this.s=3,At(12)):(this.s=0,At(13)),Lr(this),Ii(this)}}}catch{}finally{}};function _d(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function xw(l,f){var p=l.C,_=f.indexOf(`
`,p);return _==-1?gc:(p=Number(f.substring(p,_)),isNaN(p)?md:(_+=1,_+p>f.length?gc:(f=f.slice(_,_+p),l.C=_+p,f)))}Jn.prototype.cancel=function(){this.J=!0,Lr(this)};function Ko(l){l.S=Date.now()+l.I,yd(l,l.I)}function yd(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Ti(m(l.ba,l),f)}function yc(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Jn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Cw(this.i,this.A),this.L!=2&&(wi(),At(17)),Lr(this),this.s=2,Ii(this)):yd(this,this.S-l)};function Ii(l){l.j.G==0||l.J||qd(l.j,l)}function Lr(l){yc(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Xn(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function vc(l,f){try{var p=l.j;if(p.G!=0&&(p.g==l||Ec(p.h,l))){if(!l.K&&Ec(p.h,l)&&p.G==3){try{var _=p.Da.g.parse(f)}catch{_=null}if(Array.isArray(_)&&_.length==3){var M=_;if(M[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)na(p),ea(p);else break e;Ic(p),At(18)}}else p.za=M[1],0<p.za-p.T&&37500>M[2]&&p.F&&p.v==0&&!p.C&&(p.C=Ti(m(p.Za,p),6e3));if(1>=wd(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Ur(p,11)}else if((l.K||p.g==l)&&na(p),!P(f))for(M=p.Da.g.parse(f),f=0;f<M.length;f++){let Re=M[f];if(p.T=Re[0],Re=Re[1],p.G==2)if(Re[0]=="c"){p.K=Re[1],p.ia=Re[2];const mt=Re[3];mt!=null&&(p.la=mt,p.j.info("VER="+p.la));const gt=Re[4];gt!=null&&(p.Aa=gt,p.j.info("SVER="+p.Aa));const Es=Re[5];Es!=null&&typeof Es=="number"&&0<Es&&(_=1.5*Es,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const en=l.g;if(en){const sa=en.g?en.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(sa){var F=_.h;F.g||sa.indexOf("spdy")==-1&&sa.indexOf("quic")==-1&&sa.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(wc(F,F.h),F.h=null))}if(_.D){const Rc=en.g?en.g.getResponseHeader("X-HTTP-Session-Id"):null;Rc&&(_.ya=Rc,Fe(_.I,_.D,Rc))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var Q=l;if(_.qa=Kd(_,_.J?_.ia:null,_.W),Q.K){Td(_.h,Q);var De=Q,lt=_.L;lt&&(De.I=lt),De.B&&(yc(De),Ko(De)),_.g=Q}else $d(_);0<p.i.length&&ta(p)}else Re[0]!="stop"&&Re[0]!="close"||Ur(p,7);else p.G==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?Ur(p,7):bc(p):Re[0]!="noop"&&p.l&&p.l.ta(Re),p.v=0)}}wi(4)}catch{}}var Ow=class{constructor(l,f){this.g=l,this.map=f}};function vd(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ed(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function wd(l){return l.h?1:l.g?l.g.size:0}function Ec(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function wc(l,f){l.g?l.g.add(f):l.h=f}function Td(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}vd.prototype.cancel=function(){if(this.i=bd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function bd(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const p of l.g.values())f=f.concat(p.D);return f}return x(l.i)}function Nw(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var f=[],p=l.length,_=0;_<p;_++)f.push(l[_]);return f}f=[],p=0;for(_ in l)f[p++]=l[_];return f}function Dw(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var f=[];l=l.length;for(var p=0;p<l;p++)f.push(p);return f}f=[],p=0;for(const _ in l)f[p++]=_;return f}}}function Id(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var p=Dw(l),_=Nw(l),M=_.length,F=0;F<M;F++)f.call(void 0,_[F],p&&p[F],l)}var Ad=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Mw(l,f){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var _=l[p].indexOf("="),M=null;if(0<=_){var F=l[p].substring(0,_);M=l[p].substring(_+1)}else F=l[p];f(F,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function Fr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Fr){this.h=l.h,Go(this,l.j),this.o=l.o,this.g=l.g,Qo(this,l.s),this.l=l.l;var f=l.i,p=new Si;p.i=f.i,f.g&&(p.g=new Map(f.g),p.h=f.h),Rd(this,p),this.m=l.m}else l&&(f=String(l).match(Ad))?(this.h=!1,Go(this,f[1]||"",!0),this.o=Ai(f[2]||""),this.g=Ai(f[3]||"",!0),Qo(this,f[4]),this.l=Ai(f[5]||"",!0),Rd(this,f[6]||"",!0),this.m=Ai(f[7]||"")):(this.h=!1,this.i=new Si(null,this.h))}Fr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Ri(f,Sd,!0),":");var p=this.g;return(p||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Ri(f,Sd,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(Ri(p,p.charAt(0)=="/"?Fw:Lw,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",Ri(p,Bw)),l.join("")};function In(l){return new Fr(l)}function Go(l,f,p){l.j=p?Ai(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Qo(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Rd(l,f,p){f instanceof Si?(l.i=f,jw(l.i,l.h)):(p||(f=Ri(f,Uw)),l.i=new Si(f,l.h))}function Fe(l,f,p){l.i.set(f,p)}function Yo(l){return Fe(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Ai(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Ri(l,f,p){return typeof l=="string"?(l=encodeURI(l).replace(f,Vw),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Vw(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Sd=/[#\/\?@]/g,Lw=/[#\?:]/g,Fw=/[#\?]/g,Uw=/[#\?@]/g,Bw=/#/g;function Si(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function Zn(l){l.g||(l.g=new Map,l.h=0,l.i&&Mw(l.i,function(f,p){l.add(decodeURIComponent(f.replace(/\+/g," ")),p)}))}t=Si.prototype,t.add=function(l,f){Zn(this),this.i=null,l=ys(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(f),this.h+=1,this};function Pd(l,f){Zn(l),f=ys(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Cd(l,f){return Zn(l),f=ys(l,f),l.g.has(f)}t.forEach=function(l,f){Zn(this),this.g.forEach(function(p,_){p.forEach(function(M){l.call(f,M,_,this)},this)},this)},t.na=function(){Zn(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),p=[];for(let _=0;_<f.length;_++){const M=l[_];for(let F=0;F<M.length;F++)p.push(f[_])}return p},t.V=function(l){Zn(this);let f=[];if(typeof l=="string")Cd(this,l)&&(f=f.concat(this.g.get(ys(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)f=f.concat(l[p])}return f},t.set=function(l,f){return Zn(this),this.i=null,l=ys(this,l),Cd(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},t.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function kd(l,f,p){Pd(l,f),0<p.length&&(l.i=null,l.g.set(ys(l,f),x(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var p=0;p<f.length;p++){var _=f[p];const F=encodeURIComponent(String(_)),Q=this.V(_);for(_=0;_<Q.length;_++){var M=F;Q[_]!==""&&(M+="="+encodeURIComponent(String(Q[_]))),l.push(M)}}return this.i=l.join("&")};function ys(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function jw(l,f){f&&!l.j&&(Zn(l),l.i=null,l.g.forEach(function(p,_){var M=_.toLowerCase();_!=M&&(Pd(this,_),kd(this,M,p))},l)),l.j=f}function $w(l,f){const p=new bi;if(a.Image){const _=new Image;_.onload=g(er,p,"TestLoadImage: loaded",!0,f,_),_.onerror=g(er,p,"TestLoadImage: error",!1,f,_),_.onabort=g(er,p,"TestLoadImage: abort",!1,f,_),_.ontimeout=g(er,p,"TestLoadImage: timeout",!1,f,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=l}else f(!1)}function Hw(l,f){const p=new bi,_=new AbortController,M=setTimeout(()=>{_.abort(),er(p,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:_.signal}).then(F=>{clearTimeout(M),F.ok?er(p,"TestPingServer: ok",!0,f):er(p,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(M),er(p,"TestPingServer: error",!1,f)})}function er(l,f,p,_,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),_(p)}catch{}}function qw(){this.g=new Wt}function zw(l,f,p){const _=p||"";try{Id(l,function(M,F){let Q=M;h(M)&&(Q=ms(M)),f.push(_+F+"="+encodeURIComponent(Q))})}catch(M){throw f.push(_+"type="+encodeURIComponent("_badmap")),M}}function Xo(l){this.l=l.Ub||null,this.j=l.eb||!1}A(Xo,gs),Xo.prototype.g=function(){return new Jo(this.l,this.j)},Xo.prototype.i=function(l){return function(){return l}}({});function Jo(l,f){ie.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(Jo,ie),t=Jo.prototype,t.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Ci(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pi(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Ci(this)),this.g&&(this.readyState=3,Ci(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;xd(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function xd(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Pi(this):Ci(this),this.readyState==3&&xd(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Pi(this))},t.Qa=function(l){this.g&&(this.response=l,Pi(this))},t.ga=function(){this.g&&Pi(this)};function Pi(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Ci(l)}t.setRequestHeader=function(l,f){this.u.append(l,f)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var p=f.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=f.next();return l.join(`\r
`)};function Ci(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Jo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Od(l){let f="";return L(l,function(p,_){f+=_,f+=":",f+=p,f+=`\r
`}),f}function Tc(l,f,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=Od(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):Fe(l,f,p))}function Qe(l){ie.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Qe,ie);var Ww=/^https?$/i,Kw=["POST","PUT"];t=Qe.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,f,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():mc.g(),this.v=this.o?ad(this.o):ad(mc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(F){Nd(this,F);return}if(l=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var M in _)p.set(M,_[M]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const F of _.keys())p.set(F,_.get(F));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(F=>F.toLowerCase()=="content-type"),M=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(Kw,f,void 0))||_||M||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,Q]of p)this.g.setRequestHeader(F,Q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Vd(this),this.u=!0,this.g.send(l),this.u=!1}catch(F){Nd(this,F)}};function Nd(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,Dd(l),Zo(l)}function Dd(l){l.A||(l.A=!0,ue(l,"complete"),ue(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ue(this,"complete"),ue(this,"abort"),Zo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Zo(this,!0)),Qe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Md(this):this.bb())},t.bb=function(){Md(this)};function Md(l){if(l.h&&typeof o<"u"&&(!l.v[1]||An(l)!=4||l.Z()!=2)){if(l.u&&An(l)==4)Ae(l.Ea,0,l);else if(ue(l,"readystatechange"),An(l)==4){l.h=!1;try{const Q=l.Z();e:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var p;if(!(p=f)){var _;if(_=Q===0){var M=String(l.D).match(Ad)[1]||null;!M&&a.self&&a.self.location&&(M=a.self.location.protocol.slice(0,-1)),_=!Ww.test(M?M.toLowerCase():"")}p=_}if(p)ue(l,"complete"),ue(l,"success");else{l.m=6;try{var F=2<An(l)?l.g.statusText:""}catch{F=""}l.l=F+" ["+l.Z()+"]",Dd(l)}}finally{Zo(l)}}}}function Zo(l,f){if(l.g){Vd(l);const p=l.g,_=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||ue(l,"ready");try{p.onreadystatechange=_}catch{}}}function Vd(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function An(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<An(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),It(f)}};function Ld(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Gw(l){const f={};l=(l.g&&2<=An(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<l.length;_++){if(P(l[_]))continue;var p=k(l[_]);const M=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const F=f[M]||[];f[M]=F,F.push(p)}b(f,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ki(l,f,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||f}function Fd(l){this.Aa=0,this.i=[],this.j=new bi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ki("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ki("baseRetryDelayMs",5e3,l),this.cb=ki("retryDelaySeedMs",1e4,l),this.Wa=ki("forwardChannelMaxRetries",2,l),this.wa=ki("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new vd(l&&l.concurrentRequestLimit),this.Da=new qw,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Fd.prototype,t.la=8,t.G=1,t.connect=function(l,f,p,_){At(0),this.W=l,this.H=f||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=Kd(this,null,this.W),ta(this)};function bc(l){if(Ud(l),l.G==3){var f=l.U++,p=In(l.I);if(Fe(p,"SID",l.K),Fe(p,"RID",f),Fe(p,"TYPE","terminate"),xi(l,p),f=new Jn(l,l.j,f),f.L=2,f.v=Yo(In(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=f.v,p=!0),p||(f.g=Gd(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Ko(f)}Wd(l)}function ea(l){l.g&&(Ac(l),l.g.cancel(),l.g=null)}function Ud(l){ea(l),l.u&&(a.clearTimeout(l.u),l.u=null),na(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function ta(l){if(!Ed(l.h)&&!l.s){l.s=!0;var f=l.Ga;fe||Zt(),ne||(fe(),ne=!0),qe.add(f,l),l.B=0}}function Qw(l,f){return wd(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Ti(m(l.Ga,l,f),zd(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const M=new Jn(this,this.j,l);let F=this.o;if(this.S&&(F?(F=E(F),w(F,this.S)):F=this.S),this.m!==null||this.O||(M.H=F,F=null),this.P)e:{for(var f=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(f+=_,4096<f){f=p;break e}if(f===4096||p===this.i.length-1){f=p+1;break e}}f=1e3}else f=1e3;f=jd(this,M,f),p=In(this.I),Fe(p,"RID",l),Fe(p,"CVER",22),this.D&&Fe(p,"X-HTTP-Session-Id",this.D),xi(this,p),F&&(this.O?f="headers="+encodeURIComponent(String(Od(F)))+"&"+f:this.m&&Tc(p,this.m,F)),wc(this.h,M),this.Ua&&Fe(p,"TYPE","init"),this.P?(Fe(p,"$req",f),Fe(p,"SID","null"),M.T=!0,_c(M,p,null)):_c(M,p,f),this.G=2}}else this.G==3&&(l?Bd(this,l):this.i.length==0||Ed(this.h)||Bd(this))};function Bd(l,f){var p;f?p=f.l:p=l.U++;const _=In(l.I);Fe(_,"SID",l.K),Fe(_,"RID",p),Fe(_,"AID",l.T),xi(l,_),l.m&&l.o&&Tc(_,l.m,l.o),p=new Jn(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),f&&(l.i=f.D.concat(l.i)),f=jd(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),wc(l.h,p),_c(p,_,f)}function xi(l,f){l.H&&L(l.H,function(p,_){Fe(f,_,p)}),l.l&&Id({},function(p,_){Fe(f,_,p)})}function jd(l,f,p){p=Math.min(l.i.length,p);var _=l.l?m(l.l.Na,l.l,l):null;e:{var M=l.i;let F=-1;for(;;){const Q=["count="+p];F==-1?0<p?(F=M[0].g,Q.push("ofs="+F)):F=0:Q.push("ofs="+F);let De=!0;for(let lt=0;lt<p;lt++){let Re=M[lt].g;const mt=M[lt].map;if(Re-=F,0>Re)F=Math.max(0,M[lt].g-100),De=!1;else try{zw(mt,Q,"req"+Re+"_")}catch{_&&_(mt)}}if(De){_=Q.join("&");break e}}}return l=l.i.splice(0,p),f.D=l,_}function $d(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;fe||Zt(),ne||(fe(),ne=!0),qe.add(f,l),l.v=0}}function Ic(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Ti(m(l.Fa,l),zd(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Hd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Ti(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,At(10),ea(this),Hd(this))};function Ac(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Hd(l){l.g=new Jn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=In(l.qa);Fe(f,"RID","rpc"),Fe(f,"SID",l.K),Fe(f,"AID",l.T),Fe(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&Fe(f,"TO",l.ja),Fe(f,"TYPE","xmlhttp"),xi(l,f),l.m&&l.o&&Tc(f,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=Yo(In(f)),p.m=null,p.P=!0,gd(p,l)}t.Za=function(){this.C!=null&&(this.C=null,ea(this),Ic(this),At(19))};function na(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function qd(l,f){var p=null;if(l.g==f){na(l),Ac(l),l.g=null;var _=2}else if(Ec(l.h,f))p=f.D,Td(l.h,f),_=1;else return;if(l.G!=0){if(f.o)if(_==1){p=f.m?f.m.length:0,f=Date.now()-f.F;var M=l.B;_=qo(),ue(_,new fd(_,p)),ta(l)}else $d(l);else if(M=f.s,M==3||M==0&&0<f.X||!(_==1&&Qw(l,f)||_==2&&Ic(l)))switch(p&&0<p.length&&(f=l.h,f.i=f.i.concat(p)),M){case 1:Ur(l,5);break;case 4:Ur(l,10);break;case 3:Ur(l,6);break;default:Ur(l,2)}}}function zd(l,f){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*f}function Ur(l,f){if(l.j.info("Error code "+f),f==2){var p=m(l.fb,l),_=l.Xa;const M=!_;_=new Fr(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Go(_,"https"),Yo(_),M?$w(_.toString(),p):Hw(_.toString(),p)}else At(2);l.G=0,l.l&&l.l.sa(f),Wd(l),Ud(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function Wd(l){if(l.G=0,l.ka=[],l.l){const f=bd(l.h);(f.length!=0||l.i.length!=0)&&(N(l.ka,f),N(l.ka,l.i),l.h.i.length=0,x(l.i),l.i.length=0),l.l.ra()}}function Kd(l,f,p){var _=p instanceof Fr?In(p):new Fr(p);if(_.g!="")f&&(_.g=f+"."+_.g),Qo(_,_.s);else{var M=a.location;_=M.protocol,f=f?f+"."+M.hostname:M.hostname,M=+M.port;var F=new Fr(null);_&&Go(F,_),f&&(F.g=f),M&&Qo(F,M),p&&(F.l=p),_=F}return p=l.D,f=l.ya,p&&f&&Fe(_,p,f),Fe(_,"VER",l.la),xi(l,_),_}function Gd(l,f,p){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Qe(new Xo({eb:p})):new Qe(l.pa),f.Ha(l.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Qd(){}t=Qd.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ra(){}ra.prototype.g=function(l,f){return new Lt(l,f)};function Lt(l,f){ie.call(this),this.g=new Fd(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!P(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!P(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new vs(this)}A(Lt,ie),Lt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Lt.prototype.close=function(){bc(this.g)},Lt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=ms(l),l=p);f.i.push(new Ow(f.Ya++,l)),f.G==3&&ta(f)},Lt.prototype.N=function(){this.g.l=null,delete this.j,bc(this.g),delete this.g,Lt.aa.N.call(this)};function Yd(l){dc.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const p in f){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}A(Yd,dc);function Xd(){pc.call(this),this.status=1}A(Xd,pc);function vs(l){this.g=l}A(vs,Qd),vs.prototype.ua=function(){ue(this.g,"a")},vs.prototype.ta=function(l){ue(this.g,new Yd(l))},vs.prototype.sa=function(l){ue(this.g,new Xd)},vs.prototype.ra=function(){ue(this.g,"b")},ra.prototype.createWebChannel=ra.prototype.g,Lt.prototype.send=Lt.prototype.o,Lt.prototype.open=Lt.prototype.m,Lt.prototype.close=Lt.prototype.close,SE=function(){return new ra},RE=function(){return qo()},AE=Vr,gh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},zo.NO_ERROR=0,zo.TIMEOUT=8,zo.HTTP_ERROR=6,Oa=zo,dd.COMPLETE="complete",IE=dd,ld.EventType=Ei,Ei.OPEN="a",Ei.CLOSE="b",Ei.ERROR="c",Ei.MESSAGE="d",ie.prototype.listen=ie.prototype.K,Fi=ld,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,bE=Qe}).apply(typeof ya<"u"?ya:typeof self<"u"?self:typeof window<"u"?window:{});const og="@firebase/firestore";/**
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
 */let pi="11.0.2";/**
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
 */const as=new mf("@firebase/firestore");function Rs(){return as.logLevel}function ee(t,...e){if(as.logLevel<=Ee.DEBUG){const n=e.map(yf);as.debug(`Firestore (${pi}): ${t}`,...n)}}function $n(t,...e){if(as.logLevel<=Ee.ERROR){const n=e.map(yf);as.error(`Firestore (${pi}): ${t}`,...n)}}function ni(t,...e){if(as.logLevel<=Ee.WARN){const n=e.map(yf);as.warn(`Firestore (${pi}): ${t}`,...n)}}function yf(t){if(typeof t=="string")return t;try{/**
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
 */function pe(t="Unexpected state"){const e=`FIRESTORE (${pi}) INTERNAL ASSERTION FAILED: `+t;throw $n(e),new Error(e)}function xe(t,e){t||pe()}function ye(t,e){return t}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends Qn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ln{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class PE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Hx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class qx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class zx{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){xe(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Ln;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ln,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ln)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(xe(typeof r.accessToken=="string"),new PE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return xe(e===null||typeof e=="string"),new yt(e)}}class Wx{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Kx{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Wx(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Gx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Qx{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){xe(this.o===void 0);const r=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(xe(typeof n.token=="string"),this.R=n.token,new Gx(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Yx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class CE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Yx(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function be(t,e){return t<e?-1:t>e?1:0}function ri(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class tt{static now(){return tt.fromMillis(Date.now())}static fromDate(e){return tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new tt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new te($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new te($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new te($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ge{static fromTimestamp(e){return new ge(e)}static min(){return new ge(new tt(0,0))}static max(){return new ge(new tt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class go{constructor(e,n,r){n===void 0?n=0:n>e.length&&pe(),r===void 0?r=e.length-n:r>e.length-n&&pe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return go.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof go?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Be extends go{construct(e,n,r){return new Be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new te($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Be(n)}static emptyPath(){return new Be([])}}const Xx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends go{construct(e,n,r){return new ht(e,n,r)}static isValidIdentifier(e){return Xx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ht(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new te($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new te($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new te($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new te($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(n)}static emptyPath(){return new ht([])}}/**
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
 */class le{constructor(e){this.path=e}static fromPath(e){return new le(Be.fromString(e))}static fromName(e){return new le(Be.fromString(e).popFirst(5))}static empty(){return new le(Be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new le(new Be(e.slice()))}}function Jx(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ge.fromTimestamp(r===1e9?new tt(n+1,0):new tt(n,r));return new Rr(s,le.empty(),e)}function Zx(t){return new Rr(t.readTime,t.key,-1)}class Rr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Rr(ge.min(),le.empty(),-1)}static max(){return new Rr(ge.max(),le.empty(),-1)}}function eO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=le.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
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
 */const tO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function mi(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==tO)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&pe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(s=>s?j.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new j((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(u=>{o[h]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new j((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function rO(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function gi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Jl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Jl.oe=-1;function Zl(t){return t==null}function fl(t){return t===0&&1/t==-1/0}function sO(t){return typeof t=="number"&&Number.isInteger(t)&&!fl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function iO(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ag(e)),e=oO(t.get(n),e);return ag(e)}function oO(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function ag(t){return t+""}/**
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
 */function lg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function us(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function kE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ge{constructor(e,n){this.comparator=e,this.root=n||ut.EMPTY}insert(e,n){return new Ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(e){return new Ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ut.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new va(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new va(this.root,e,this.comparator,!1)}getReverseIterator(){return new va(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new va(this.root,e,this.comparator,!0)}}class va{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ut{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ut.RED,this.left=s??ut.EMPTY,this.right=i??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ut(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ut.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw pe();const e=this.left.check();if(e!==this.right.check())throw pe();return e+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw pe()}get value(){throw pe()}get color(){throw pe()}get left(){throw pe()}get right(){throw pe()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ut(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class nt{constructor(e){this.comparator=e,this.data=new Ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new cg(this.data.getIterator())}getIteratorFrom(e){return new cg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new nt(this.comparator);return n.data=e,n}}class cg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class rn{constructor(e){this.fields=e,e.sort(ht.comparator)}static empty(){return new rn([])}unionWith(e){let n=new nt(ht.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new rn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ri(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class xE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new xE("Invalid base64 string: "+i):i}}(e);return new ft(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const aO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Sr(t){if(xe(!!t),typeof t=="string"){let e=0;const n=aO.exec(t);if(xe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ye(t.seconds),nanos:Ye(t.nanos)}}function Ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Pr(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
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
 */function vf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ec(t){const e=t.mapValue.fields.__previous_value__;return vf(e)?ec(e):e}function _o(t){const e=Sr(t.mapValue.fields.__local_write_time__.timestampValue);return new tt(e.seconds,e.nanos)}/**
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
 */class lO{constructor(e,n,r,s,i,o,a,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=h}}class yo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new yo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof yo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ea={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Cr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?vf(t)?4:uO(t)?9007199254740991:cO(t)?10:11:pe()}function Tn(t,e){if(t===e)return!0;const n=Cr(t);if(n!==Cr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _o(t).isEqual(_o(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Sr(s.timestampValue),a=Sr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Pr(s.bytesValue).isEqual(Pr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ye(s.geoPointValue.latitude)===Ye(i.geoPointValue.latitude)&&Ye(s.geoPointValue.longitude)===Ye(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ye(s.integerValue)===Ye(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ye(s.doubleValue),a=Ye(i.doubleValue);return o===a?fl(o)===fl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ri(t.arrayValue.values||[],e.arrayValue.values||[],Tn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(lg(o)!==lg(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Tn(o[c],a[c])))return!1;return!0}(t,e);default:return pe()}}function vo(t,e){return(t.values||[]).find(n=>Tn(n,e))!==void 0}function si(t,e){if(t===e)return 0;const n=Cr(t),r=Cr(e);if(n!==r)return be(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ye(i.integerValue||i.doubleValue),c=Ye(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return ug(t.timestampValue,e.timestampValue);case 4:return ug(_o(t),_o(e));case 5:return be(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Pr(i),c=Pr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let h=0;h<a.length&&h<c.length;h++){const u=be(a[h],c[h]);if(u!==0)return u}return be(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=be(Ye(i.latitude),Ye(o.latitude));return a!==0?a:be(Ye(i.longitude),Ye(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return hg(t.arrayValue,e.arrayValue);case 10:return function(i,o){var a,c,h,u;const d=i.fields||{},m=o.fields||{},g=(a=d.value)===null||a===void 0?void 0:a.arrayValue,A=(c=m.value)===null||c===void 0?void 0:c.arrayValue,x=be(((h=g==null?void 0:g.values)===null||h===void 0?void 0:h.length)||0,((u=A==null?void 0:A.values)===null||u===void 0?void 0:u.length)||0);return x!==0?x:hg(g,A)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ea.mapValue&&o===Ea.mapValue)return 0;if(i===Ea.mapValue)return 1;if(o===Ea.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),h=o.fields||{},u=Object.keys(h);c.sort(),u.sort();for(let d=0;d<c.length&&d<u.length;++d){const m=be(c[d],u[d]);if(m!==0)return m;const g=si(a[c[d]],h[u[d]]);if(g!==0)return g}return be(c.length,u.length)}(t.mapValue,e.mapValue);default:throw pe()}}function ug(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=Sr(t),r=Sr(e),s=be(n.seconds,r.seconds);return s!==0?s:be(n.nanos,r.nanos)}function hg(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=si(n[s],r[s]);if(i)return i}return be(n.length,r.length)}function ii(t){return _h(t)}function _h(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Sr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Pr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return le.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=_h(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${_h(n.fields[o])}`;return s+"}"}(t.mapValue):pe()}function Na(t){switch(Cr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ec(t);return e?16+Na(e):16;case 5:return 2*t.stringValue.length;case 6:return Pr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Na(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return us(r.fields,(i,o)=>{s+=i.length+Na(o)}),s}(t.mapValue);default:throw pe()}}function fg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function yh(t){return!!t&&"integerValue"in t}function Ef(t){return!!t&&"arrayValue"in t}function dg(t){return!!t&&"nullValue"in t}function pg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Da(t){return!!t&&"mapValue"in t}function cO(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ji(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return us(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ji(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ji(t.arrayValue.values[n]);return e}return Object.assign({},t)}function uO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Qt{constructor(e){this.value=e}static empty(){return new Qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Da(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ji(n)}setAll(e){let n=ht.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ji(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Da(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Da(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){us(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Qt(Ji(this.value))}}function OE(t){const e=[];return us(t.fields,(n,r)=>{const s=new ht([n]);if(Da(r)){const i=OE(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new rn(e)}/**
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
 */class wt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new wt(e,0,ge.min(),ge.min(),ge.min(),Qt.empty(),0)}static newFoundDocument(e,n,r,s){return new wt(e,1,n,ge.min(),r,s,0)}static newNoDocument(e,n){return new wt(e,2,n,ge.min(),ge.min(),Qt.empty(),0)}static newUnknownDocument(e,n){return new wt(e,3,n,ge.min(),ge.min(),Qt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class dl{constructor(e,n){this.position=e,this.inclusive=n}}function mg(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=le.comparator(le.fromName(o.referenceValue),n.key):r=si(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function gg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Tn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Eo{constructor(e,n="asc"){this.field=e,this.dir=n}}function hO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class NE{}class Je extends NE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new dO(e,n,r):n==="array-contains"?new gO(e,r):n==="in"?new _O(e,r):n==="not-in"?new yO(e,r):n==="array-contains-any"?new vO(e,r):new Je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new pO(e,r):new mO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(si(n,this.value)):n!==null&&Cr(this.value)===Cr(n)&&this.matchesComparison(si(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ln extends NE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new ln(e,n)}matches(e){return DE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function DE(t){return t.op==="and"}function ME(t){return fO(t)&&DE(t)}function fO(t){for(const e of t.filters)if(e instanceof ln)return!1;return!0}function vh(t){if(t instanceof Je)return t.field.canonicalString()+t.op.toString()+ii(t.value);if(ME(t))return t.filters.map(e=>vh(e)).join(",");{const e=t.filters.map(n=>vh(n)).join(",");return`${t.op}(${e})`}}function VE(t,e){return t instanceof Je?function(r,s){return s instanceof Je&&r.op===s.op&&r.field.isEqual(s.field)&&Tn(r.value,s.value)}(t,e):t instanceof ln?function(r,s){return s instanceof ln&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&VE(o,s.filters[a]),!0):!1}(t,e):void pe()}function LE(t){return t instanceof Je?function(n){return`${n.field.canonicalString()} ${n.op} ${ii(n.value)}`}(t):t instanceof ln?function(n){return n.op.toString()+" {"+n.getFilters().map(LE).join(" ,")+"}"}(t):"Filter"}class dO extends Je{constructor(e,n,r){super(e,n,r),this.key=le.fromName(r.referenceValue)}matches(e){const n=le.comparator(e.key,this.key);return this.matchesComparison(n)}}class pO extends Je{constructor(e,n){super(e,"in",n),this.keys=FE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class mO extends Je{constructor(e,n){super(e,"not-in",n),this.keys=FE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function FE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>le.fromName(r.referenceValue))}class gO extends Je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ef(n)&&vo(n.arrayValue,this.value)}}class _O extends Je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&vo(this.value.arrayValue,n)}}class yO extends Je{constructor(e,n){super(e,"not-in",n)}matches(e){if(vo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!vo(this.value.arrayValue,n)}}class vO extends Je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ef(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>vo(this.value.arrayValue,r))}}/**
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
 */class EO{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function _g(t,e=null,n=[],r=[],s=null,i=null,o=null){return new EO(t,e,n,r,s,i,o)}function wf(t){const e=ye(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>vh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Zl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ii(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ii(r)).join(",")),e.ue=n}return e.ue}function Tf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!hO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!VE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!gg(t.startAt,e.startAt)&&gg(t.endAt,e.endAt)}function Eh(t){return le.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class _i{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function wO(t,e,n,r,s,i,o,a){return new _i(t,e,n,r,s,i,o,a)}function bf(t){return new _i(t)}function yg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function UE(t){return t.collectionGroup!==null}function Zi(t){const e=ye(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new nt(ht.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(a=a.add(h.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Eo(i,r))}),n.has(ht.keyField().canonicalString())||e.ce.push(new Eo(ht.keyField(),r))}return e.ce}function _n(t){const e=ye(t);return e.le||(e.le=TO(e,Zi(t))),e.le}function TO(t,e){if(t.limitType==="F")return _g(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Eo(s.field,i)});const n=t.endAt?new dl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new dl(t.startAt.position,t.startAt.inclusive):null;return _g(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function wh(t,e){const n=t.filters.concat([e]);return new _i(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Th(t,e,n){return new _i(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function tc(t,e){return Tf(_n(t),_n(e))&&t.limitType===e.limitType}function BE(t){return`${wf(_n(t))}|lt:${t.limitType}`}function Ss(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>LE(s)).join(", ")}]`),Zl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ii(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ii(s)).join(",")),`Target(${r})`}(_n(t))}; limitType=${t.limitType})`}function nc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):le.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Zi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const h=mg(o,a,c);return o.inclusive?h<=0:h<0}(r.startAt,Zi(r),s)||r.endAt&&!function(o,a,c){const h=mg(o,a,c);return o.inclusive?h>=0:h>0}(r.endAt,Zi(r),s))}(t,e)}function bO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function jE(t){return(e,n)=>{let r=!1;for(const s of Zi(t)){const i=IO(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function IO(t,e,n){const r=t.field.isKeyField()?le.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),h=a.data.field(i);return c!==null&&h!==null?si(c,h):pe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return pe()}}/**
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
 */class hs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){us(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return kE(this.inner)}size(){return this.innerSize}}/**
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
 */const AO=new Ge(le.comparator);function Hn(){return AO}const $E=new Ge(le.comparator);function Ui(...t){let e=$E;for(const n of t)e=e.insert(n.key,n);return e}function HE(t){let e=$E;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Yr(){return eo()}function qE(){return eo()}function eo(){return new hs(t=>t.toString(),(t,e)=>t.isEqual(e))}const RO=new Ge(le.comparator),SO=new nt(le.comparator);function we(...t){let e=SO;for(const n of t)e=e.add(n);return e}const PO=new nt(be);function CO(){return PO}/**
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
 */function If(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fl(e)?"-0":e}}function zE(t){return{integerValue:""+t}}function kO(t,e){return sO(e)?zE(e):If(t,e)}/**
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
 */class rc{constructor(){this._=void 0}}function xO(t,e,n){return t instanceof pl?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&vf(i)&&(i=ec(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof wo?KE(t,e):t instanceof To?GE(t,e):function(s,i){const o=WE(s,i),a=vg(o)+vg(s.Pe);return yh(o)&&yh(s.Pe)?zE(a):If(s.serializer,a)}(t,e)}function OO(t,e,n){return t instanceof wo?KE(t,e):t instanceof To?GE(t,e):n}function WE(t,e){return t instanceof ml?function(r){return yh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class pl extends rc{}class wo extends rc{constructor(e){super(),this.elements=e}}function KE(t,e){const n=QE(e);for(const r of t.elements)n.some(s=>Tn(s,r))||n.push(r);return{arrayValue:{values:n}}}class To extends rc{constructor(e){super(),this.elements=e}}function GE(t,e){let n=QE(e);for(const r of t.elements)n=n.filter(s=>!Tn(s,r));return{arrayValue:{values:n}}}class ml extends rc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function vg(t){return Ye(t.integerValue||t.doubleValue)}function QE(t){return Ef(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function NO(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof wo&&s instanceof wo||r instanceof To&&s instanceof To?ri(r.elements,s.elements,Tn):r instanceof ml&&s instanceof ml?Tn(r.Pe,s.Pe):r instanceof pl&&s instanceof pl}(t.transform,e.transform)}class DO{constructor(e,n){this.version=e,this.transformResults=n}}class yn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new yn}static exists(e){return new yn(void 0,e)}static updateTime(e){return new yn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ma(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class sc{}function YE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Af(t.key,yn.none()):new Vo(t.key,t.data,yn.none());{const n=t.data,r=Qt.empty();let s=new nt(ht.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new fs(t.key,r,new rn(s.toArray()),yn.none())}}function MO(t,e,n){t instanceof Vo?function(s,i,o){const a=s.value.clone(),c=wg(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof fs?function(s,i,o){if(!Ma(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=wg(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(XE(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function to(t,e,n,r){return t instanceof Vo?function(i,o,a,c){if(!Ma(i.precondition,o))return a;const h=i.value.clone(),u=Tg(i.fieldTransforms,c,o);return h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof fs?function(i,o,a,c){if(!Ma(i.precondition,o))return a;const h=Tg(i.fieldTransforms,c,o),u=o.data;return u.setAll(XE(i)),u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,a){return Ma(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function VO(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=WE(r.transform,s||null);i!=null&&(n===null&&(n=Qt.empty()),n.set(r.field,i))}return n||null}function Eg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ri(r,s,(i,o)=>NO(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Vo extends sc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class fs extends sc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function XE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function wg(t,e,n){const r=new Map;xe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,OO(o,a,n[s]))}return r}function Tg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,xO(i,o,e))}return r}class Af extends sc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class LO extends sc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class FO{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&MO(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=to(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=to(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=qE();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=YE(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ge.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),we())}isEqual(e){return this.batchId===e.batchId&&ri(this.mutations,e.mutations,(n,r)=>Eg(n,r))&&ri(this.baseMutations,e.baseMutations,(n,r)=>Eg(n,r))}}class Rf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){xe(e.mutations.length===r.length);let s=function(){return RO}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Rf(e,n,r,s)}}/**
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
 */class UO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class BO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Xe,Ie;function jO(t){switch(t){default:return pe();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function JE(t){if(t===void 0)return $n("GRPC error has no .code"),$.UNKNOWN;switch(t){case Xe.OK:return $.OK;case Xe.CANCELLED:return $.CANCELLED;case Xe.UNKNOWN:return $.UNKNOWN;case Xe.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Xe.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Xe.INTERNAL:return $.INTERNAL;case Xe.UNAVAILABLE:return $.UNAVAILABLE;case Xe.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Xe.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Xe.NOT_FOUND:return $.NOT_FOUND;case Xe.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Xe.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Xe.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Xe.ABORTED:return $.ABORTED;case Xe.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Xe.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Xe.DATA_LOSS:return $.DATA_LOSS;default:return pe()}}(Ie=Xe||(Xe={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function $O(){return new TextEncoder}/**
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
 */const HO=new ns([4294967295,4294967295],0);function bg(t){const e=$O().encode(t),n=new TE;return n.update(e),new Uint8Array(n.digest())}function Ig(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ns([n,r],0),new ns([s,i],0)]}class Sf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Bi(`Invalid padding: ${n}`);if(r<0)throw new Bi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Bi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Bi(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=ns.fromNumber(this.Te)}Ee(e,n,r){let s=e.add(n.multiply(ns.fromNumber(r)));return s.compare(HO)===1&&(s=new ns([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=bg(e),[r,s]=Ig(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Sf(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=bg(e),[r,s]=Ig(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Bi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ic{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Lo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ic(ge.min(),s,new Ge(be),Hn(),we())}}class Lo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Lo(r,n,we(),we(),we())}}/**
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
 */class Va{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class ZE{constructor(e,n){this.targetId=e,this.me=n}}class e0{constructor(e,n,r=ft.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ag{constructor(){this.fe=0,this.ge=Rg(),this.pe=ft.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=we(),n=we(),r=we();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:pe()}}),new Lo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Rg()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,xe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class qO{constructor(e){this.Le=e,this.Be=new Map,this.ke=Hn(),this.qe=wa(),this.Qe=wa(),this.Ke=new Ge(be)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:pe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.me.count,s=this.Ye(n);if(s){const i=s.target;if(Eh(i))if(r===0){const o=new le(i.path);this.We(n,o,wt.newNoDocument(o,ge.min()))}else xe(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,h)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Pr(r).toUint8Array()}catch(c){if(c instanceof xE)return ni("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Sf(o,s,i)}catch(c){return ni(c instanceof Bi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.Be.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Eh(a.target)){const c=new le(a.target.path);this.st(c).has(o)||this.ot(o,c)||this.We(o,c,wt.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=we();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const h=this.Ye(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new ic(e,n,this.Ke,this.ke,r);return this.ke=Hn(),this.qe=wa(),this.Qe=wa(),this.Ke=new Ge(be),s}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,n)?s.Fe(n,1):s.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new Ag,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new nt(be),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new nt(be),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Ag),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function wa(){return new Ge(le.comparator)}function Rg(){return new Ge(le.comparator)}const zO={asc:"ASCENDING",desc:"DESCENDING"},WO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},KO={and:"AND",or:"OR"};class GO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function bh(t,e){return t.useProto3Json||Zl(e)?e:{value:e}}function gl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function t0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function QO(t,e){return gl(t,e.toTimestamp())}function vn(t){return xe(!!t),ge.fromTimestamp(function(n){const r=Sr(n);return new tt(r.seconds,r.nanos)}(t))}function Pf(t,e){return Ih(t,e).canonicalString()}function Ih(t,e){const n=function(s){return new Be(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function n0(t){const e=Be.fromString(t);return xe(a0(e)),e}function Ah(t,e){return Pf(t.databaseId,e.path)}function ou(t,e){const n=n0(e);if(n.get(1)!==t.databaseId.projectId)throw new te($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new te($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new le(s0(n))}function r0(t,e){return Pf(t.databaseId,e)}function YO(t){const e=n0(t);return e.length===4?Be.emptyPath():s0(e)}function Rh(t){return new Be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function s0(t){return xe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Sg(t,e,n){return{name:Ah(t,e),fields:n.value.mapValue.fields}}function XO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:pe()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,u){return h.useProto3Json?(xe(u===void 0||typeof u=="string"),ft.fromBase64String(u||"")):(xe(u===void 0||u instanceof Buffer||u instanceof Uint8Array),ft.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(h){const u=h.code===void 0?$.UNKNOWN:JE(h.code);return new te(u,h.message||"")}(o);n=new e0(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ou(t,r.document.name),i=vn(r.document.updateTime),o=r.document.createTime?vn(r.document.createTime):ge.min(),a=new Qt({mapValue:{fields:r.document.fields}}),c=wt.newFoundDocument(s,i,o,a),h=r.targetIds||[],u=r.removedTargetIds||[];n=new Va(h,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ou(t,r.document),i=r.readTime?vn(r.readTime):ge.min(),o=wt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Va([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ou(t,r.document),i=r.removedTargetIds||[];n=new Va([],i,s,null)}else{if(!("filter"in e))return pe();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new BO(s,i),a=r.targetId;n=new ZE(a,o)}}return n}function JO(t,e){let n;if(e instanceof Vo)n={update:Sg(t,e.key,e.value)};else if(e instanceof Af)n={delete:Ah(t,e.key)};else if(e instanceof fs)n={update:Sg(t,e.key,e.data),updateMask:aN(e.fieldMask)};else{if(!(e instanceof LO))return pe();n={verify:Ah(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof pl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof wo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof To)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ml)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw pe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:QO(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:pe()}(t,e.precondition)),n}function ZO(t,e){return t&&t.length>0?(xe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?vn(s.updateTime):vn(i);return o.isEqual(ge.min())&&(o=vn(i)),new DO(o,s.transformResults||[])}(n,e))):[]}function eN(t,e){return{documents:[r0(t,e.path)]}}function tN(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=r0(t,s);const i=function(h){if(h.length!==0)return o0(ln.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(u=>function(m){return{field:Ps(m.field),direction:sN(m.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=bh(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ct:n,parent:s}}function nN(t){let e=YO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){xe(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(d){const m=i0(d);return m instanceof ln&&ME(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(m=>function(A){return new Eo(Cs(A.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(d){let m;return m=typeof d=="object"?d.value:d,Zl(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(d){const m=!!d.before,g=d.values||[];return new dl(g,m)}(n.startAt));let h=null;return n.endAt&&(h=function(d){const m=!d.before,g=d.values||[];return new dl(g,m)}(n.endAt)),wO(e,s,o,i,a,"F",c,h)}function rN(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function i0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Cs(n.unaryFilter.field);return Je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Cs(n.unaryFilter.field);return Je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Cs(n.unaryFilter.field);return Je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Cs(n.unaryFilter.field);return Je.create(o,"!=",{nullValue:"NULL_VALUE"});default:return pe()}}(t):t.fieldFilter!==void 0?function(n){return Je.create(Cs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return pe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ln.create(n.compositeFilter.filters.map(r=>i0(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return pe()}}(n.compositeFilter.op))}(t):pe()}function sN(t){return zO[t]}function iN(t){return WO[t]}function oN(t){return KO[t]}function Ps(t){return{fieldPath:t.canonicalString()}}function Cs(t){return ht.fromServerFormat(t.fieldPath)}function o0(t){return t instanceof Je?function(n){if(n.op==="=="){if(pg(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NAN"}};if(dg(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(pg(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NOT_NAN"}};if(dg(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ps(n.field),op:iN(n.op),value:n.value}}}(t):t instanceof ln?function(n){const r=n.getFilters().map(s=>o0(s));return r.length===1?r[0]:{compositeFilter:{op:oN(n.op),filters:r}}}(t):pe()}function aN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function a0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class mr{constructor(e,n,r,s,i=ge.min(),o=ge.min(),a=ft.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new mr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class lN{constructor(e){this.ht=e}}function cN(t){const e=nN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Th(e,e.limit,"L"):e}/**
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
 */class uN{constructor(){this.ln=new hN}addToCollectionParentIndex(e,n){return this.ln.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(Rr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(Rr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class hN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new nt(Be.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new nt(Be.comparator)).toArray()}}/**
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
 */const Pg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Nt{static withCacheSize(e){return new Nt(e,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Nt.DEFAULT_COLLECTION_PERCENTILE=10,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Nt.DEFAULT=new Nt(41943040,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Nt.DISABLED=new Nt(-1,0,0);/**
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
 */class oi{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new oi(0)}static Qn(){return new oi(-1)}}/**
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
 */function Cg([t,e],[n,r]){const s=be(t,n);return s===0?be(e,r):s}class fN{constructor(e){this.Gn=e,this.buffer=new nt(Cg),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Cg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class dN{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ee("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){gi(n)?ee("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await mi(n)}await this.Yn(3e5)})}}class pN{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return j.resolve(Jl.oe);const r=new fN(n);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ee("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(Pg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Pg):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,s,i,o,a,c,h;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,o=Date.now(),this.nthSequenceNumber(e,s))).next(d=>(r=d,a=Date.now(),this.removeTargets(e,r,n))).next(d=>(i=d,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(h=Date.now(),Rs()<=Ee.DEBUG&&ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-u}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${d} documents in `+(h-c)+`ms
Total Duration: ${h-u}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:d})))}}function mN(t,e){return new pN(t,e)}/**
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
 */class gN{constructor(){this.changes=new hs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,wt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class _N{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class yN{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&to(r.mutation,s,rn.empty(),tt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,we()).next(()=>r))}getLocalViewOfDocuments(e,n,r=we()){const s=Yr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ui();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Yr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,we()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Hn();const o=eo(),a=function(){return eo()}();return n.forEach((c,h)=>{const u=r.get(h.key);s.has(h.key)&&(u===void 0||u.mutation instanceof fs)?i=i.insert(h.key,h):u!==void 0?(o.set(h.key,u.mutation.getFieldMask()),to(u.mutation,h,u.mutation.getFieldMask(),tt.now())):o.set(h.key,rn.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,u)=>o.set(h,u)),n.forEach((h,u)=>{var d;return a.set(h,new _N(u,(d=o.get(h))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=eo();let s=new Ge((o,a)=>o-a),i=we();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let u=r.get(c)||rn.empty();u=a.applyToLocalView(h,u),r.set(c,u);const d=(s.get(a.batchId)||we()).add(c);s=s.insert(a.batchId,d)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),h=c.key,u=c.value,d=qE();u.forEach(m=>{if(!i.has(m)){const g=YE(n.get(m),r.get(m));g!==null&&d.set(m,g),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,d))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return le.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):UE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):j.resolve(Yr());let a=-1,c=i;return o.next(h=>j.forEach(h,(u,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(u)?j.resolve():this.remoteDocumentCache.getEntry(e,u).next(m=>{c=c.insert(u,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,we())).next(u=>({batchId:a,changes:HE(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new le(n)).next(r=>{let s=Ui();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ui();return this.indexManager.getCollectionParents(e,i).next(a=>j.forEach(a,c=>{const h=function(d,m){return new _i(m,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(u=>{u.forEach((d,m)=>{o=o.insert(d,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,h)=>{const u=h.getKey();o.get(u)===null&&(o=o.insert(u,wt.newInvalidDocument(u)))});let a=Ui();return o.forEach((c,h)=>{const u=i.get(c);u!==void 0&&to(u.mutation,h,rn.empty(),tt.now()),nc(n,h)&&(a=a.insert(c,h))}),a})}}/**
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
 */class vN{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return j.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:vn(s.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(s){return{name:s.name,query:cN(s.bundledQuery),readTime:vn(s.readTime)}}(n)),j.resolve()}}/**
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
 */class EN{constructor(){this.overlays=new Ge(le.comparator),this.Er=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Yr();return j.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Tt(e,n,i)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Er.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const s=Yr(),i=n.length+1,o=new le(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return j.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ge((h,u)=>h-u);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let u=i.get(h.largestBatchId);u===null&&(u=Yr(),i=i.insert(h.largestBatchId,u)),u.set(h.getKey(),h)}}const a=Yr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,u)=>a.set(h,u)),!(a.size()>=s)););return j.resolve(a)}Tt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Er.get(s.largestBatchId).delete(r.key);this.Er.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new UO(n,r));let i=this.Er.get(n);i===void 0&&(i=we(),this.Er.set(n,i)),this.Er.set(n,i.add(r.key))}}/**
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
 */class wN{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
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
 */class Cf{constructor(){this.dr=new nt(st.Ar),this.Rr=new nt(st.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new st(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new st(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new le(new Be([])),r=new st(n,e),s=new st(n,e+1),i=[];return this.Rr.forEachInRange([r,s],o=>{this.gr(o),i.push(o.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new le(new Be([])),r=new st(n,e),s=new st(n,e+1);let i=we();return this.Rr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new st(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class st{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return le.comparator(e.key,n.key)||be(e.br,n.br)}static Vr(e,n){return be(e.br,n.br)||le.comparator(e.key,n.key)}}/**
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
 */class TN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new nt(st.Ar)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new FO(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.vr=this.vr.add(new st(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Fr(r),i=s<0?0:s;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new st(n,0),s=new st(n,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,s],o=>{const a=this.Cr(o.br);i.push(a)}),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new nt(be);return n.forEach(s=>{const i=new st(s,0),o=new st(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],a=>{r=r.add(a.br)})}),j.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;le.isDocumentKey(i)||(i=i.child(""));const o=new st(new le(i),0);let a=new nt(be);return this.vr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(a=a.add(c.br)),!0)},o),j.resolve(this.Mr(a))}Mr(e){const n=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){xe(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return j.forEach(n.mutations,s=>{const i=new st(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new st(n,0),s=this.vr.firstAfterOrEqual(r);return j.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class bN{constructor(e){this.Nr=e,this.docs=function(){return new Ge(le.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():wt.newInvalidDocument(n))}getEntries(e,n){let r=Hn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():wt.newInvalidDocument(s))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Hn();const o=n.path,a=new le(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:h,value:{document:u}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||eO(Zx(u),r)<=0||(s.has(u.key)||nc(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,r,s){pe()}Lr(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new IN(this)}getSize(e){return j.resolve(this.size)}}class IN extends gN{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
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
 */class AN{constructor(e){this.persistence=e,this.Br=new hs(n=>wf(n),Tf),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.kr=0,this.qr=new Cf,this.targetCount=0,this.Qr=oi.qn()}forEachTarget(e,n){return this.Br.forEach((r,s)=>n(s)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),j.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new oi(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Un(n),j.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Br.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Br.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),j.waitFor(i).next(()=>s)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.qr.containsKey(n))}}/**
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
 */class l0{constructor(e,n){this.Kr={},this.overlays={},this.$r=new Jl(0),this.Ur=!1,this.Ur=!0,this.Wr=new wN,this.referenceDelegate=e(this),this.Gr=new AN(this),this.indexManager=new uN,this.remoteDocumentCache=function(s){return new bN(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new lN(n),this.jr=new vN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new EN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new TN(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const s=new RN(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,n){return j.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class RN extends nO{constructor(e){super(),this.currentSequenceNumber=e}}class kf{constructor(e){this.persistence=e,this.Zr=new Cf,this.Xr=null}static ei(e){return new kf(e)}get ti(){if(this.Xr)return this.Xr;throw pe()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),j.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.ti,r=>{const s=le.fromPath(r);return this.ni(e,s).next(i=>{i||n.removeEntry(s,ge.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return j.or([()=>j.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class _l{constructor(e,n){this.persistence=e,this.ri=new hs(r=>iO(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=mN(this,n)}static ei(e,n){return new _l(e,n)}Hr(){}Jr(e){return j.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return j.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(i=>i?j.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Lr(e,o=>this.ir(e,o,n).next(a=>{a||(r++,i.removeEntry(o,ge.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),j.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),j.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Na(e.data.value)),n}ir(e,n,r){return j.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.ri.get(n);return j.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class xf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=s}static zi(e,n){let r=we(),s=we();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new xf(e,n.fromCache,r,s)}}/**
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
 */class SN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class PN{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return Ik()?8:rO(bt())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Xi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.es(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new SN;return this.ts(e,n,o).next(a=>{if(i.result=a,this.Hi)return this.ns(e,n,o,a.size)})}).next(()=>i.result)}ns(e,n,r,s){return r.documentReadCount<this.Ji?(Rs()<=Ee.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",Ss(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),j.resolve()):(Rs()<=Ee.DEBUG&&ee("QueryEngine","Query:",Ss(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(Rs()<=Ee.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",Ss(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_n(n))):j.resolve())}Xi(e,n){if(yg(n))return j.resolve(null);let r=_n(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Th(n,null,"F"),r=_n(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=we(...i);return this.Zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.rs(n,a);return this.ss(n,h,o,c.readTime)?this.Xi(e,Th(n,null,"F")):this.os(e,h,n,c)}))})))}es(e,n,r,s){return yg(n)||s.isEqual(ge.min())?j.resolve(null):this.Zi.getDocuments(e,r).next(i=>{const o=this.rs(n,i);return this.ss(n,o,r,s)?j.resolve(null):(Rs()<=Ee.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ss(n)),this.os(e,o,n,Jx(s,-1)).next(a=>a))})}rs(e,n){let r=new nt(jE(e));return n.forEach((s,i)=>{nc(e,i)&&(r=r.add(i))}),r}ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,n,r){return Rs()<=Ee.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",Ss(n)),this.Zi.getDocumentsMatchingQuery(e,n,Rr.min(),r)}os(e,n,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class CN{constructor(e,n,r,s){this.persistence=e,this._s=n,this.serializer=s,this.us=new Ge(be),this.cs=new hs(i=>wf(i),Tf),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yN(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function kN(t,e,n,r){return new CN(t,e,n,r)}async function c0(t,e){const n=ye(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=we();for(const h of s){o.push(h.batchId);for(const u of h.mutations)c=c.add(u.key)}for(const h of i){a.push(h.batchId);for(const u of h.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(h=>({Ts:h,removedBatchIds:o,addedBatchIds:a}))})})}function xN(t,e){const n=ye(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.hs.newChangeBuffer({trackRemovals:!0});return function(a,c,h,u){const d=h.batch,m=d.keys();let g=j.resolve();return m.forEach(A=>{g=g.next(()=>u.getEntry(c,A)).next(x=>{const N=h.docVersions.get(A);xe(N!==null),x.version.compareTo(N)<0&&(d.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),u.addEntry(x)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(c,d))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=we();for(let h=0;h<a.mutationResults.length;++h)a.mutationResults[h].transformResults.length>0&&(c=c.add(a.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function u0(t){const e=ye(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function ON(t,e){const n=ye(t),r=e.snapshotVersion;let s=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});s=n.us;const a=[];e.targetChanges.forEach((u,d)=>{const m=s.get(d);if(!m)return;a.push(n.Gr.removeMatchingKeys(i,u.removedDocuments,d).next(()=>n.Gr.addMatchingKeys(i,u.addedDocuments,d)));let g=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(ft.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,r)),s=s.insert(d,g),function(x,N,O){return x.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(m,g,u)&&a.push(n.Gr.updateTargetData(i,g))});let c=Hn(),h=we();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(NN(i,o,e.documentUpdates).next(u=>{c=u.Is,h=u.Es})),!r.isEqual(ge.min())){const u=n.Gr.getLastRemoteSnapshotVersion(i).next(d=>n.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return j.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.us=s,i))}function NN(t,e,n){let r=we(),s=we();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Hn();return n.forEach((a,c)=>{const h=i.get(a);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(ge.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):ee("LocalStore","Ignoring outdated watch update for ",a,". Current version:",h.version," Watch version:",c.version)}),{Is:o,Es:s}})}function DN(t,e){const n=ye(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function MN(t,e){const n=ye(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Gr.getTargetData(r,e).next(i=>i?(s=i,j.resolve(s)):n.Gr.allocateTargetId(r).next(o=>(s=new mr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function Sh(t,e,n){const r=ye(t),s=r.us.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!gi(o))throw o;ee("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function kg(t,e,n){const r=ye(t);let s=ge.min(),i=we();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,u){const d=ye(c),m=d.cs.get(u);return m!==void 0?j.resolve(d.us.get(m)):d.Gr.getTargetData(h,u)}(r,o,_n(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?s:ge.min(),n?i:we())).next(a=>(VN(r,bO(e),a),{documents:a,ds:i})))}function VN(t,e,n){let r=t.ls.get(e)||ge.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ls.set(e,r)}class xg{constructor(){this.activeTargetIds=CO()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class LN{constructor(){this._o=new xg,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new xg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class FN{uo(e){}shutdown(){}}/**
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
 */class Og{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ee("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ee("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ta=null;function au(){return Ta===null?Ta=function(){return 268435456+Math.round(2147483648*Math.random())}():Ta++,"0x"+Ta.toString(16)}/**
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
 */const UN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class BN{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const _t="WebChannelConnection";class jN extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(n,r,s,i,o){const a=au(),c=this.No(n,r.toUriEncodedString());ee("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const h={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(h,i,o),this.Bo(n,c,h,s).then(u=>(ee("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw ni("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}ko(n,r,s,i,o,a){return this.Oo(n,r,s,i,o)}Lo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+pi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}No(n,r){const s=UN[n];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,s){const i=au();return new Promise((o,a)=>{const c=new bE;c.setWithCredentials(!0),c.listenOnce(IE.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Oa.NO_ERROR:const u=c.getResponseJson();ee(_t,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Oa.TIMEOUT:ee(_t,`RPC '${e}' ${i} timed out`),a(new te($.DEADLINE_EXCEEDED,"Request time out"));break;case Oa.HTTP_ERROR:const d=c.getStatus();if(ee(_t,`RPC '${e}' ${i} failed with status:`,d,"response text:",c.getResponseText()),d>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const g=m==null?void 0:m.error;if(g&&g.status&&g.message){const A=function(N){const O=N.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(O)>=0?O:$.UNKNOWN}(g.status);a(new te(A,g.message))}else a(new te($.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new te($.UNAVAILABLE,"Connection failed."));break;default:pe()}}finally{ee(_t,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);ee(_t,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",h,r,15)})}qo(e,n,r){const s=au(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=SE(),a=RE(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");ee(_t,`Creating RPC '${e}' stream ${s}: ${u}`,c);const d=o.createWebChannel(u,c);let m=!1,g=!1;const A=new BN({Eo:N=>{g?ee(_t,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(m||(ee(_t,`Opening RPC '${e}' stream ${s} transport.`),d.open(),m=!0),ee(_t,`RPC '${e}' stream ${s} sending:`,N),d.send(N))},Ao:()=>d.close()}),x=(N,O,P)=>{N.listen(O,y=>{try{P(y)}catch(S){setTimeout(()=>{throw S},0)}})};return x(d,Fi.EventType.OPEN,()=>{g||(ee(_t,`RPC '${e}' stream ${s} transport opened.`),A.So())}),x(d,Fi.EventType.CLOSE,()=>{g||(g=!0,ee(_t,`RPC '${e}' stream ${s} transport closed`),A.Do())}),x(d,Fi.EventType.ERROR,N=>{g||(g=!0,ni(_t,`RPC '${e}' stream ${s} transport errored:`,N),A.Do(new te($.UNAVAILABLE,"The operation could not be completed")))}),x(d,Fi.EventType.MESSAGE,N=>{var O;if(!g){const P=N.data[0];xe(!!P);const y=P,S=(y==null?void 0:y.error)||((O=y[0])===null||O===void 0?void 0:O.error);if(S){ee(_t,`RPC '${e}' stream ${s} received error:`,S);const D=S.status;let L=function(v){const w=Xe[v];if(w!==void 0)return JE(w)}(D),b=S.message;L===void 0&&(L=$.INTERNAL,b="Unknown error status: "+D+" with message "+S.message),g=!0,A.Do(new te(L,b)),d.close()}else ee(_t,`RPC '${e}' stream ${s} received:`,P),A.vo(P)}}),x(a,AE.STAT_EVENT,N=>{N.stat===gh.PROXY?ee(_t,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===gh.NOPROXY&&ee(_t,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{A.bo()},0),A}}function lu(){return typeof document<"u"?document:null}/**
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
 */function oc(t){return new GO(t,!0)}/**
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
 */class h0{constructor(e,n,r=1e3,s=1.5,i=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,n-r);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class f0{constructor(e,n,r,s,i,o,a,c){this.li=e,this.Yo=r,this.Zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new h0(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?($n(n.toString()),$n("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===n&&this.I_(r,s)},r=>{e(()=>{const s=new te($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(s)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.E_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return ee("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(ee("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $N extends f0{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=XO(this.serializer,e),r=function(i){if(!("targetChange"in i))return ge.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ge.min():o.readTime?vn(o.readTime):ge.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=Rh(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Eh(c)?{documents:eN(i,c)}:{query:tN(i,c).ct},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=t0(i,o.resumeToken);const h=bh(i,o.expectedCount);h!==null&&(a.expectedCount=h)}else if(o.snapshotVersion.compareTo(ge.min())>0){a.readTime=gl(i,o.snapshotVersion.toTimestamp());const h=bh(i,o.expectedCount);h!==null&&(a.expectedCount=h)}return a}(this.serializer,e);const r=rN(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=Rh(this.serializer),n.removeTarget=e,this.c_(n)}}class HN extends f0{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return xe(!!e.streamToken),this.lastStreamToken=e.streamToken,xe(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){xe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=ZO(e.writeResults,e.commitTime),r=vn(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=Rh(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>JO(this.serializer,r))};this.c_(n)}}/**
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
 */class qN extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new te($.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Oo(e,Ih(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new te($.UNKNOWN,i.toString())})}ko(e,n,r,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.ko(e,Ih(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new te($.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class zN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?($n(n),this.C_=!1):ee("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class WN{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{ds(this)&&(ee("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=ye(c);h.k_.add(4),await Fo(h),h.K_.set("Unknown"),h.k_.delete(4),await ac(h)}(this))})}),this.K_=new zN(r,s)}}async function ac(t){if(ds(t))for(const e of t.q_)await e(!0)}async function Fo(t){for(const e of t.q_)await e(!1)}function d0(t,e){const n=ye(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),Mf(n)?Df(n):yi(n).s_()&&Nf(n,e))}function Of(t,e){const n=ye(t),r=yi(n);n.B_.delete(e),r.s_()&&p0(n,e),n.B_.size===0&&(r.s_()?r.a_():ds(n)&&n.K_.set("Unknown"))}function Nf(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}yi(t).V_(e)}function p0(t,e){t.U_.xe(e),yi(t).m_(e)}function Df(t){t.U_=new qO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),yi(t).start(),t.K_.F_()}function Mf(t){return ds(t)&&!yi(t).i_()&&t.B_.size>0}function ds(t){return ye(t).k_.size===0}function m0(t){t.U_=void 0}async function KN(t){t.K_.set("Online")}async function GN(t){t.B_.forEach((e,n)=>{Nf(t,e)})}async function QN(t,e){m0(t),Mf(t)?(t.K_.O_(e),Df(t)):t.K_.set("Unknown")}async function YN(t,e,n){if(t.K_.set("Online"),e instanceof e0&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.B_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.B_.delete(a),s.U_.removeTarget(a))}(t,e)}catch(r){ee("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await yl(t,r)}else if(e instanceof Va?t.U_.$e(e):e instanceof ZE?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(ge.min()))try{const r=await u0(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.U_.it(o);return a.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.B_.get(h);u&&i.B_.set(h,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,h)=>{const u=i.B_.get(c);if(!u)return;i.B_.set(c,u.withResumeToken(ft.EMPTY_BYTE_STRING,u.snapshotVersion)),p0(i,c);const d=new mr(u.target,c,h,u.sequenceNumber);Nf(i,d)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){ee("RemoteStore","Failed to raise snapshot:",r),await yl(t,r)}}async function yl(t,e,n){if(!gi(e))throw e;t.k_.add(1),await Fo(t),t.K_.set("Offline"),n||(n=()=>u0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await ac(t)})}function g0(t,e){return e().catch(n=>yl(t,n,e))}async function lc(t){const e=ye(t),n=kr(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;XN(e);)try{const s=await DN(e.localStore,r);if(s===null){e.L_.length===0&&n.a_();break}r=s.batchId,JN(e,s)}catch(s){await yl(e,s)}_0(e)&&y0(e)}function XN(t){return ds(t)&&t.L_.length<10}function JN(t,e){t.L_.push(e);const n=kr(t);n.s_()&&n.f_&&n.g_(e.mutations)}function _0(t){return ds(t)&&!kr(t).i_()&&t.L_.length>0}function y0(t){kr(t).start()}async function ZN(t){kr(t).w_()}async function eD(t){const e=kr(t);for(const n of t.L_)e.g_(n.mutations)}async function tD(t,e,n){const r=t.L_.shift(),s=Rf.from(r,e,n);await g0(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await lc(t)}async function nD(t,e){e&&kr(t).f_&&await async function(r,s){if(function(o){return jO(o)&&o!==$.ABORTED}(s.code)){const i=r.L_.shift();kr(r).__(),await g0(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await lc(r)}}(t,e),_0(t)&&y0(t)}async function Ng(t,e){const n=ye(t);n.asyncQueue.verifyOperationInProgress(),ee("RemoteStore","RemoteStore received new credentials");const r=ds(n);n.k_.add(3),await Fo(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await ac(n)}async function rD(t,e){const n=ye(t);e?(n.k_.delete(2),await ac(n)):e||(n.k_.add(2),await Fo(n),n.K_.set("Unknown"))}function yi(t){return t.W_||(t.W_=function(n,r,s){const i=ye(n);return i.b_(),new $N(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:KN.bind(null,t),mo:GN.bind(null,t),po:QN.bind(null,t),R_:YN.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),Mf(t)?Df(t):t.K_.set("Unknown")):(await t.W_.stop(),m0(t))})),t.W_}function kr(t){return t.G_||(t.G_=function(n,r,s){const i=ye(n);return i.b_(),new HN(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:ZN.bind(null,t),po:nD.bind(null,t),p_:eD.bind(null,t),y_:tD.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await lc(t)):(await t.G_.stop(),t.L_.length>0&&(ee("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
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
 */class Vf{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ln,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Vf(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Lf(t,e){if($n("AsyncQueue",`${e}: ${t}`),gi(t))return new te($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class qs{static emptySet(e){return new qs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||le.comparator(n.key,r.key):(n,r)=>le.comparator(n.key,r.key),this.keyedMap=Ui(),this.sortedSet=new Ge(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof qs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new qs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Dg{constructor(){this.z_=new Ge(le.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):pe():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ai{constructor(e,n,r,s,i,o,a,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ai(e,n,qs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&tc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class sD{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class iD{constructor(){this.queries=Mg(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const s=ye(n),i=s.queries;s.queries=Mg(),i.forEach((o,a)=>{for(const c of a.J_)c.onError(r)})})(this,new te($.ABORTED,"Firestore shutting down"))}}function Mg(){return new hs(t=>BE(t),tc)}async function v0(t,e){const n=ye(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Y_()&&e.Z_()&&(r=2):(i=new sD,r=e.Z_()?0:1);try{switch(r){case 0:i.H_=await n.onListen(s,!0);break;case 1:i.H_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Lf(o,`Initialization of query '${Ss(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.J_.push(e),e.ea(n.onlineState),i.H_&&e.ta(i.H_)&&Ff(n)}async function E0(t,e){const n=ye(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.J_.indexOf(e);o>=0&&(i.J_.splice(o,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function oD(t,e){const n=ye(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.J_)a.ta(s)&&(r=!0);o.H_=s}}r&&Ff(n)}function aD(t,e,n){const r=ye(t),s=r.queries.get(e);if(s)for(const i of s.J_)i.onError(n);r.queries.delete(e)}function Ff(t){t.X_.forEach(e=>{e.next()})}var Ph,Vg;(Vg=Ph||(Ph={})).na="default",Vg.Cache="cache";class w0{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ai(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=ai.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Ph.Cache}}/**
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
 */class T0{constructor(e){this.key=e}}class b0{constructor(e){this.key=e}}class lD{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=we(),this.mutatedKeys=we(),this.Va=jE(e),this.ma=new qs(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new Dg,s=n?n.ma:this.ma;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,d)=>{const m=s.get(u),g=nc(this.query,d)?d:null,A=!!m&&this.mutatedKeys.has(m.key),x=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let N=!1;m&&g?m.data.isEqual(g.data)?A!==x&&(r.track({type:3,doc:g}),N=!0):this.ya(m,g)||(r.track({type:2,doc:g}),N=!0,(c&&this.Va(g,c)>0||h&&this.Va(g,h)<0)&&(a=!0)):!m&&g?(r.track({type:0,doc:g}),N=!0):m&&!g&&(r.track({type:1,doc:m}),N=!0,(c||h)&&(a=!0)),N&&(g?(o=o.add(g),i=x?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ma:o,pa:r,ss:a,mutatedKeys:i}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((u,d)=>function(g,A){const x=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe()}};return x(g)-x(A)}(u.type,d.type)||this.Va(u.doc,d.doc)),this.wa(r),s=s!=null&&s;const a=n&&!s?this.Sa():[],c=this.Ra.size===0&&this.current&&!s?1:0,h=c!==this.Aa;return this.Aa=c,o.length!==0||h?{snapshot:new ai(this.query,e.ma,i,o,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:a}:{ba:a}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Dg,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=we(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new b0(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new T0(r))}),n}va(e){this.da=e.ds,this.Ra=we();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return ai.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class cD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class uD{constructor(e){this.key=e,this.Fa=!1}}class hD{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new hs(a=>BE(a),tc),this.Oa=new Map,this.Na=new Set,this.La=new Ge(le.comparator),this.Ba=new Map,this.ka=new Cf,this.qa={},this.Qa=new Map,this.Ka=oi.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function fD(t,e,n=!0){const r=C0(t);let s;const i=r.xa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await I0(r,e,n,!0),s}async function dD(t,e){const n=C0(t);await I0(n,e,!0,!1)}async function I0(t,e,n,r){const s=await MN(t.localStore,_n(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await pD(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&d0(t.remoteStore,s),a}async function pD(t,e,n,r,s){t.Ua=(d,m,g)=>async function(x,N,O,P){let y=N.view.ga(O);y.ss&&(y=await kg(x.localStore,N.query,!1).then(({documents:b})=>N.view.ga(b,y)));const S=P&&P.targetChanges.get(N.targetId),D=P&&P.targetMismatches.get(N.targetId)!=null,L=N.view.applyChanges(y,x.isPrimaryClient,S,D);return Fg(x,N.targetId,L.ba),L.snapshot}(t,d,m,g);const i=await kg(t.localStore,e,!0),o=new lD(e,i.ds),a=o.ga(i.documents),c=Lo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(a,t.isPrimaryClient,c);Fg(t,n,h.ba);const u=new cD(e,n,o);return t.xa.set(e,u),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),h.snapshot}async function mD(t,e,n){const r=ye(t),s=r.xa.get(e),i=r.Oa.get(s.targetId);if(i.length>1)return r.Oa.set(s.targetId,i.filter(o=>!tc(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Sh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Of(r.remoteStore,s.targetId),Ch(r,s.targetId)}).catch(mi)):(Ch(r,s.targetId),await Sh(r.localStore,s.targetId,!0))}async function gD(t,e){const n=ye(t),r=n.xa.get(e),s=n.Oa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Of(n.remoteStore,r.targetId))}async function _D(t,e,n){const r=ID(t);try{const s=await function(o,a){const c=ye(o),h=tt.now(),u=a.reduce((g,A)=>g.add(A.key),we());let d,m;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let A=Hn(),x=we();return c.hs.getEntries(g,u).next(N=>{A=N,A.forEach((O,P)=>{P.isValidDocument()||(x=x.add(O))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,A)).next(N=>{d=N;const O=[];for(const P of a){const y=VO(P,d.get(P.key).overlayedDocument);y!=null&&O.push(new fs(P.key,y,OE(y.value.mapValue),yn.exists(!0)))}return c.mutationQueue.addMutationBatch(g,h,O,a)}).next(N=>{m=N;const O=N.applyToLocalDocumentSet(d,x);return c.documentOverlayCache.saveOverlays(g,N.batchId,O)})}).then(()=>({batchId:m.batchId,changes:HE(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let h=o.qa[o.currentUser.toKey()];h||(h=new Ge(be)),h=h.insert(a,c),o.qa[o.currentUser.toKey()]=h}(r,s.batchId,n),await Uo(r,s.changes),await lc(r.remoteStore)}catch(s){const i=Lf(s,"Failed to persist write");n.reject(i)}}async function A0(t,e){const n=ye(t);try{const r=await ON(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ba.get(i);o&&(xe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Fa=!0:s.modifiedDocuments.size>0?xe(o.Fa):s.removedDocuments.size>0&&(xe(o.Fa),o.Fa=!1))}),await Uo(n,r,e)}catch(r){await mi(r)}}function Lg(t,e,n){const r=ye(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.xa.forEach((i,o)=>{const a=o.view.ea(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=ye(o);c.onlineState=a;let h=!1;c.queries.forEach((u,d)=>{for(const m of d.J_)m.ea(a)&&(h=!0)}),h&&Ff(c)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function yD(t,e,n){const r=ye(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ba.get(e),i=s&&s.key;if(i){let o=new Ge(le.comparator);o=o.insert(i,wt.newNoDocument(i,ge.min()));const a=we().add(i),c=new ic(ge.min(),new Map,new Ge(be),o,a);await A0(r,c),r.La=r.La.remove(i),r.Ba.delete(e),Uf(r)}else await Sh(r.localStore,e,!1).then(()=>Ch(r,e,n)).catch(mi)}async function vD(t,e){const n=ye(t),r=e.batch.batchId;try{const s=await xN(n.localStore,e);S0(n,r,null),R0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Uo(n,s)}catch(s){await mi(s)}}async function ED(t,e,n){const r=ye(t);try{const s=await function(o,a){const c=ye(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let u;return c.mutationQueue.lookupMutationBatch(h,a).next(d=>(xe(d!==null),u=d.keys(),c.mutationQueue.removeMutationBatch(h,d))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,u)).next(()=>c.localDocuments.getDocuments(h,u))})}(r.localStore,e);S0(r,e,n),R0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Uo(r,s)}catch(s){await mi(s)}}function R0(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function S0(t,e,n){const r=ye(t);let s=r.qa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function Ch(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||P0(t,r)})}function P0(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(Of(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),Uf(t))}function Fg(t,e,n){for(const r of n)r instanceof T0?(t.ka.addReference(r.key,e),wD(t,r)):r instanceof b0?(ee("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||P0(t,r.key)):pe()}function wD(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(ee("SyncEngine","New document in limbo: "+n),t.Na.add(r),Uf(t))}function Uf(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new le(Be.fromString(e)),r=t.Ka.next();t.Ba.set(r,new uD(n)),t.La=t.La.insert(n,r),d0(t.remoteStore,new mr(_n(bf(n.path)),r,"TargetPurposeLimboResolution",Jl.oe))}}async function Uo(t,e,n){const r=ye(t),s=[],i=[],o=[];r.xa.isEmpty()||(r.xa.forEach((a,c)=>{o.push(r.Ua(c,e,n).then(h=>{var u;if((h||n)&&r.isPrimaryClient){const d=h?!h.fromCache:(u=n==null?void 0:n.targetChanges.get(c.targetId))===null||u===void 0?void 0:u.current;r.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(h){s.push(h);const d=xf.zi(c.targetId,h);i.push(d)}}))}),await Promise.all(o),r.Ma.R_(s),await async function(c,h){const u=ye(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>j.forEach(h,m=>j.forEach(m.Wi,g=>u.persistence.referenceDelegate.addReference(d,m.targetId,g)).next(()=>j.forEach(m.Gi,g=>u.persistence.referenceDelegate.removeReference(d,m.targetId,g)))))}catch(d){if(!gi(d))throw d;ee("LocalStore","Failed to update sequence numbers: "+d)}for(const d of h){const m=d.targetId;if(!d.fromCache){const g=u.us.get(m),A=g.snapshotVersion,x=g.withLastLimboFreeSnapshotVersion(A);u.us=u.us.insert(m,x)}}}(r.localStore,i))}async function TD(t,e){const n=ye(t);if(!n.currentUser.isEqual(e)){ee("SyncEngine","User change. New user:",e.toKey());const r=await c0(n.localStore,e);n.currentUser=e,function(i,o){i.Qa.forEach(a=>{a.forEach(c=>{c.reject(new te($.CANCELLED,o))})}),i.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Uo(n,r.Ts)}}function bD(t,e){const n=ye(t),r=n.Ba.get(e);if(r&&r.Fa)return we().add(r.key);{let s=we();const i=n.Oa.get(e);if(!i)return s;for(const o of i){const a=n.xa.get(o);s=s.unionWith(a.view.fa)}return s}}function C0(t){const e=ye(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=A0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yD.bind(null,e),e.Ma.R_=oD.bind(null,e.eventManager),e.Ma.Wa=aD.bind(null,e.eventManager),e}function ID(t){const e=ye(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ED.bind(null,e),e}class vl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=oc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return kN(this.persistence,new PN,e.initialUser,this.serializer)}ja(e){return new l0(kf.ei,this.serializer)}za(e){return new LN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vl.provider={build:()=>new vl};class AD extends vl{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){xe(this.persistence.referenceDelegate instanceof _l);const r=this.persistence.referenceDelegate.garbageCollector;return new dN(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?Nt.withCacheSize(this.cacheSizeBytes):Nt.DEFAULT;return new l0(r=>_l.ei(r,n),this.serializer)}}class kh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Lg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=TD.bind(null,this.syncEngine),await rD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new iD}()}createDatastore(e){const n=oc(e.databaseInfo.databaseId),r=function(i){return new jN(i)}(e.databaseInfo);return function(i,o,a,c){return new qN(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new WN(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Lg(this.syncEngine,n,0),function(){return Og.p()?new Og:new FN}())}createSyncEngine(e,n){return function(s,i,o,a,c,h,u){const d=new hD(s,i,o,a,c,h);return u&&(d.$a=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ye(s);ee("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await Fo(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}kh.provider={build:()=>new kh};/**
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
 */class k0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):$n("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class RD{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=yt.UNAUTHENTICATED,this.clientId=CE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ee("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ee("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ln;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Lf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function cu(t,e){t.asyncQueue.verifyOperationInProgress(),ee("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await c0(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ug(t,e){t.asyncQueue.verifyOperationInProgress();const n=await SD(t);ee("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Ng(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Ng(e.remoteStore,s)),t._onlineComponents=e}async function SD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee("FirestoreClient","Using user provided OfflineComponentProvider");try{await cu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===$.FAILED_PRECONDITION||s.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ni("Error using user provided cache. Falling back to memory cache: "+n),await cu(t,new vl)}}else ee("FirestoreClient","Using default OfflineComponentProvider"),await cu(t,new AD(void 0));return t._offlineComponents}async function x0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee("FirestoreClient","Using user provided OnlineComponentProvider"),await Ug(t,t._uninitializedComponentsProvider._online)):(ee("FirestoreClient","Using default OnlineComponentProvider"),await Ug(t,new kh))),t._onlineComponents}function PD(t){return x0(t).then(e=>e.syncEngine)}async function O0(t){const e=await x0(t),n=e.eventManager;return n.onListen=fD.bind(null,e.syncEngine),n.onUnlisten=mD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=dD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=gD.bind(null,e.syncEngine),n}function CD(t,e,n={}){const r=new Ln;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,h){const u=new k0({next:m=>{u.eu(),o.enqueueAndForget(()=>E0(i,d));const g=m.docs.has(a);!g&&m.fromCache?h.reject(new te($.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&m.fromCache&&c&&c.source==="server"?h.reject(new te($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),d=new w0(bf(a.path),u,{includeMetadataChanges:!0,ua:!0});return v0(i,d)}(await O0(t),t.asyncQueue,e,n,r)),r.promise}function kD(t,e,n={}){const r=new Ln;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,h){const u=new k0({next:m=>{u.eu(),o.enqueueAndForget(()=>E0(i,d)),m.fromCache&&c.source==="server"?h.reject(new te($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),d=new w0(a,u,{includeMetadataChanges:!0,ua:!0});return v0(i,d)}(await O0(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function N0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Bg=new Map;/**
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
 */function D0(t,e,n){if(!n)throw new te($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function xD(t,e,n,r){if(e===!0&&r===!0)throw new te($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function jg(t){if(!le.isDocumentKey(t))throw new te($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function $g(t){if(le.isDocumentKey(t))throw new te($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function cc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":pe()}function ls(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new te($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=cc(t);throw new te($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Hg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new te($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new te($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}xD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=N0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new te($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new te($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new te($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class uc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Hx;switch(r.type){case"firstParty":return new Kx(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Bg.get(n);r&&(ee("ComponentProvider","Removing Datastore"),Bg.delete(n),r.terminate())}(this),Promise.resolve()}}function OD(t,e,n,r={}){var s;const i=(t=ls(t,uc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ni("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=yt.MOCK_USER;else{a=_k(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new te($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new yt(h)}t._authCredentials=new qx(new PE(a,c))}}/**
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
 */class ps{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ps(this.firestore,e,this._query)}}class Ht{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ht(this.firestore,e,this._key)}}class wr extends ps{constructor(e,n,r){super(e,n,bf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ht(this.firestore,null,new le(e))}withConverter(e){return new wr(this.firestore,e,this._path)}}function wL(t,e,...n){if(t=Jt(t),D0("collection","path",e),t instanceof uc){const r=Be.fromString(e,...n);return $g(r),new wr(t,null,r)}{if(!(t instanceof Ht||t instanceof wr))throw new te($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Be.fromString(e,...n));return $g(r),new wr(t.firestore,null,r)}}function ND(t,e,...n){if(t=Jt(t),arguments.length===1&&(e=CE.newId()),D0("doc","path",e),t instanceof uc){const r=Be.fromString(e,...n);return jg(r),new Ht(t,null,new le(r))}{if(!(t instanceof Ht||t instanceof wr))throw new te($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Be.fromString(e,...n));return jg(r),new Ht(t.firestore,t instanceof wr?t.converter:null,new le(r))}}/**
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
 */class qg{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new h0(this,"async_queue_retry"),this.fu=()=>{const r=lu();r&&ee("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=lu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=lu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new Ln;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!gi(e))throw e;ee("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw $n("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const s=Vf.createAndSchedule(this,e,n,r,i=>this.Su(i));return this.du.push(s),s}pu(){this.Au&&pe()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class Bo extends uc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new qg,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new qg(e),this._firestoreClient=void 0,await e}}}function DD(t,e){const n=typeof t=="object"?t:vE(),r=typeof t=="string"?t:"(default)",s=_f(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=mk("firestore");i&&OD(s,...i)}return s}function Bf(t){if(t._terminated)throw new te($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||MD(t),t._firestoreClient}function MD(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,h,u){return new lO(a,c,h,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,N0(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new RD(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class li{constructor(e){this._byteString=e}static fromBase64String(e){try{return new li(ft.fromBase64String(e))}catch(n){throw new te($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new li(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class jf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new te($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class M0{constructor(e){this._methodName=e}}/**
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
 */class $f{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new te($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new te($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
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
 */class Hf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const VD=/^__.*__$/;class LD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new fs(e,this.data,this.fieldMask,n,this.fieldTransforms):new Vo(e,this.data,n,this.fieldTransforms)}}function V0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe()}}class qf{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new qf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Lu(e),s}Bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return El(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(V0(this.Mu)&&VD.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class FD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||oc(e)}$u(e,n,r,s=!1){return new qf({Mu:e,methodName:n,Ku:r,path:ht.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function L0(t){const e=t._freezeSettings(),n=oc(t._databaseId);return new FD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function UD(t,e,n,r,s,i={}){const o=t.$u(i.merge||i.mergeFields?2:0,e,n,s);B0("Data must be an object, but it was:",o,r);const a=F0(r,o);let c,h;if(i.merge)c=new rn(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const d of i.mergeFields){const m=jD(e,d,n);if(!o.contains(m))throw new te($.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);HD(u,m)||u.push(m)}c=new rn(u),h=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,h=o.fieldTransforms;return new LD(new Qt(a),c,h)}function BD(t,e,n,r=!1){return zf(n,t.$u(r?4:3,e))}function zf(t,e){if(U0(t=Jt(t)))return B0("Unsupported field value:",e,t),F0(t,e);if(t instanceof M0)return function(r,s){if(!V0(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=zf(a,s.ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Jt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return kO(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=tt.fromDate(r);return{timestampValue:gl(s.serializer,i)}}if(r instanceof tt){const i=new tt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:gl(s.serializer,i)}}if(r instanceof $f)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof li)return{bytesValue:t0(s.serializer,r._byteString)};if(r instanceof Ht){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Pf(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Hf)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.qu("VectorValues must only contain numeric values.");return If(a.serializer,c)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${cc(r)}`)}(t,e)}function F0(t,e){const n={};return kE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):us(t,(r,s)=>{const i=zf(s,e.Ou(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function U0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof tt||t instanceof $f||t instanceof li||t instanceof Ht||t instanceof M0||t instanceof Hf)}function B0(t,e,n){if(!U0(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=cc(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function jD(t,e,n){if((e=Jt(e))instanceof jf)return e._internalPath;if(typeof e=="string")return j0(t,e);throw El("Field path arguments must be of type string or ",t,!1,void 0,n)}const $D=new RegExp("[~\\*/\\[\\]]");function j0(t,e,n){if(e.search($D)>=0)throw El(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new jf(...e.split("."))._internalPath}catch{throw El(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function El(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new te($.INVALID_ARGUMENT,a+t+c)}function HD(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class $0{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Wf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class qD extends $0{data(){return super.data()}}function Wf(t,e){return typeof e=="string"?j0(t,e):e instanceof jf?e._internalPath:e._delegate._internalPath}/**
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
 */function zD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new te($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Kf{}class H0 extends Kf{}function TL(t,e,...n){let r=[];e instanceof Kf&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Qf).length,a=i.filter(c=>c instanceof Gf).length;if(o>1||o>0&&a>0)throw new te($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Gf extends H0{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Gf(e,n,r)}_apply(e){const n=this._parse(e);return q0(e._query,n),new ps(e.firestore,e.converter,wh(e._query,n))}_parse(e){const n=L0(e.firestore);return function(i,o,a,c,h,u,d){let m;if(h.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new te($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Wg(d,u);const g=[];for(const A of d)g.push(zg(c,i,A));m={arrayValue:{values:g}}}else m=zg(c,i,d)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Wg(d,u),m=BD(a,o,d,u==="in"||u==="not-in");return Je.create(h,u,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Qf extends Kf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Qf(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ln.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)q0(o,c),o=wh(o,c)}(e._query,n),new ps(e.firestore,e.converter,wh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Yf extends H0{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Yf(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new te($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new te($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Eo(i,o)}(e._query,this._field,this._direction);return new ps(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new _i(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function bL(t,e="asc"){const n=e,r=Wf("orderBy",t);return Yf._create(r,n)}function zg(t,e,n){if(typeof(n=Jt(n))=="string"){if(n==="")throw new te($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!UE(e)&&n.indexOf("/")!==-1)throw new te($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Be.fromString(n));if(!le.isDocumentKey(r))throw new te($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return fg(t,new le(r))}if(n instanceof Ht)return fg(t,n._key);throw new te($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${cc(n)}.`)}function Wg(t,e){if(!Array.isArray(t)||t.length===0)throw new te($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function q0(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new te($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class WD{convertValue(e,n="none"){switch(Cr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Pr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw pe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return us(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ye(o.doubleValue));return new Hf(i)}convertGeoPoint(e){return new $f(Ye(e.latitude),Ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ec(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(_o(e));default:return null}}convertTimestamp(e){const n=Sr(e);return new tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Be.fromString(e);xe(a0(r));const s=new yo(r.get(1),r.get(3)),i=new le(r.popFirst(5));return s.isEqual(n)||$n(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function KD(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class ji{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class z0 extends $0{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new La(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Wf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class La extends z0{data(e={}){return super.data(e)}}class GD{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ji(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new La(this._firestore,this._userDataWriter,r.key,r,new ji(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new te($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new La(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ji(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new La(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ji(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,u=-1;return a.type!==0&&(h=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:QD(a.type),doc:c,oldIndex:h,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function QD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe()}}/**
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
 */function IL(t){t=ls(t,Ht);const e=ls(t.firestore,Bo);return CD(Bf(e),t._key).then(n=>YD(e,t,n))}class W0 extends WD{constructor(e){super(),this.firestore=e}convertBytes(e){return new li(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ht(this.firestore,null,n)}}function AL(t){t=ls(t,ps);const e=ls(t.firestore,Bo),n=Bf(e),r=new W0(e);return zD(t._query),kD(n,t._query).then(s=>new GD(e,r,t,s))}function RL(t){return K0(ls(t.firestore,Bo),[new Af(t._key,yn.none())])}function SL(t,e){const n=ls(t.firestore,Bo),r=ND(t),s=KD(t.converter,e);return K0(n,[UD(L0(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,yn.exists(!1))]).then(()=>r)}function K0(t,e){return function(r,s){const i=new Ln;return r.asyncQueue.enqueueAndForget(async()=>_D(await PD(r),s,i)),i.promise}(Bf(t),e)}function YD(t,e,n){const r=n.docs.get(e._key),s=new W0(t);return new z0(t,s,e._key,r,new ji(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){pi=s})(di),ti(new os("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Bo(new zx(r.getProvider("auth-internal")),new Qx(r.getProvider("app-check-internal")),function(h,u){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new te($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yo(h.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Er(og,"4.7.5",e),Er(og,"4.7.5","esm2017")})();function Xf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function G0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const XD=G0,Q0=new Do("auth","Firebase",G0());/**
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
 */const wl=new mf("@firebase/auth");function JD(t,...e){wl.logLevel<=Ee.WARN&&wl.warn(`Auth (${di}): ${t}`,...e)}function Fa(t,...e){wl.logLevel<=Ee.ERROR&&wl.error(`Auth (${di}): ${t}`,...e)}/**
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
 */function qn(t,...e){throw Jf(t,...e)}function En(t,...e){return Jf(t,...e)}function Y0(t,e,n){const r=Object.assign(Object.assign({},XD()),{[e]:n});return new Do("auth","Firebase",r).create(e,{appName:t.name})}function rs(t){return Y0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Jf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Q0.create(t,...e)}function me(t,e,...n){if(!t)throw Jf(e,...n)}function Dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Fa(e),new Error(e)}function zn(t,e){t||Dn(e)}/**
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
 */function xh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ZD(){return Kg()==="http:"||Kg()==="https:"}function Kg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function eM(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ZD()||wk()||"connection"in navigator)?navigator.onLine:!0}function tM(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class jo{constructor(e,n){this.shortDelay=e,this.longDelay=n,zn(n>e,"Short delay should be less than long delay!"),this.isMobile=yk()||Tk()}get(){return eM()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Zf(t,e){zn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class X0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const nM={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const rM=new jo(3e4,6e4);function ed(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function vi(t,e,n,r,s={}){return J0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Mo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return Ek()||(h.referrerPolicy="no-referrer"),X0.fetch()(Z0(t,t.config.apiHost,n,a),h)})}async function J0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},nM),e);try{const s=new iM(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ba(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,h]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ba(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ba(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ba(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Y0(t,u,h);qn(t,u)}}catch(s){if(s instanceof Qn)throw s;qn(t,"network-request-failed",{message:String(s)})}}async function sM(t,e,n,r,s={}){const i=await vi(t,e,n,r,s);return"mfaPendingCredential"in i&&qn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Z0(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Zf(t.config,s):`${t.config.apiScheme}://${s}`}class iM{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(En(this.auth,"network-request-failed")),rM.get())})}}function ba(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=En(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function oM(t,e){return vi(t,"POST","/v1/accounts:delete",e)}async function ew(t,e){return vi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function no(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function aM(t,e=!1){const n=Jt(t),r=await n.getIdToken(e),s=td(r);me(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:no(uu(s.auth_time)),issuedAtTime:no(uu(s.iat)),expirationTime:no(uu(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function uu(t){return Number(t)*1e3}function td(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Fa("JWT malformed, contained fewer than 3 sections"),null;try{const s=fE(n);return s?JSON.parse(s):(Fa("Failed to decode base64 JWT payload"),null)}catch(s){return Fa("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Gg(t){const e=td(t);return me(e,"internal-error"),me(typeof e.exp<"u","internal-error"),me(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function bo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Qn&&lM(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function lM({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class cM{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Oh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=no(this.lastLoginAt),this.creationTime=no(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Tl(t){var e;const n=t.auth,r=await t.getIdToken(),s=await bo(t,ew(n,{idToken:r}));me(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?tw(i.providerUserInfo):[],a=hM(t.providerData,o),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?h:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Oh(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function uM(t){const e=Jt(t);await Tl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hM(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function tw(t){return t.map(e=>{var{providerId:n}=e,r=Xf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function fM(t,e){const n=await J0(t,{},async()=>{const r=Mo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Z0(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",X0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function dM(t,e){return vi(t,"POST","/v2/accounts:revokeToken",ed(t,e))}/**
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
 */class zs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){me(e.idToken,"internal-error"),me(typeof e.idToken<"u","internal-error"),me(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){me(e.length!==0,"internal-error");const n=Gg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(me(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await fM(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new zs;return r&&(me(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(me(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(me(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zs,this.toJSON())}_performRefresh(){return Dn("not implemented")}}/**
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
 */function rr(t,e){me(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Mn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Xf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cM(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Oh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await bo(this,this.stsTokenManager.getToken(this.auth,e));return me(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return aM(this,e)}reload(){return uM(this)}_assign(e){this!==e&&(me(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){me(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Tl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pr(this.auth.app))return Promise.reject(rs(this.auth));const e=await this.getIdToken();return await bo(this,oM(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,h,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,O=(h=n.createdAt)!==null&&h!==void 0?h:void 0,P=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:y,emailVerified:S,isAnonymous:D,providerData:L,stsTokenManager:b}=n;me(y&&b,e,"internal-error");const E=zs.fromJSON(this.name,b);me(typeof y=="string",e,"internal-error"),rr(d,e.name),rr(m,e.name),me(typeof S=="boolean",e,"internal-error"),me(typeof D=="boolean",e,"internal-error"),rr(g,e.name),rr(A,e.name),rr(x,e.name),rr(N,e.name),rr(O,e.name),rr(P,e.name);const v=new Mn({uid:y,auth:e,email:m,emailVerified:S,displayName:d,isAnonymous:D,photoURL:A,phoneNumber:g,tenantId:x,stsTokenManager:E,createdAt:O,lastLoginAt:P});return L&&Array.isArray(L)&&(v.providerData=L.map(w=>Object.assign({},w))),N&&(v._redirectEventId=N),v}static async _fromIdTokenResponse(e,n,r=!1){const s=new zs;s.updateFromServerResponse(n);const i=new Mn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Tl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];me(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?tw(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new zs;a.updateFromIdToken(r);const c=new Mn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Oh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
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
 */const Qg=new Map;function Vn(t){zn(t instanceof Function,"Expected a class definition");let e=Qg.get(t);return e?(zn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Qg.set(t,e),e)}/**
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
 */class nw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}nw.type="NONE";const Yg=nw;/**
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
 */function Ua(t,e,n){return`firebase:${t}:${e}:${n}`}class Ws{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ua(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ua("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ws(Vn(Yg),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Vn(Yg);const o=Ua(r,e.config.apiKey,e.name);let a=null;for(const h of n)try{const u=await h._get(o);if(u){const d=Mn._fromJSON(e,u);h!==i&&(a=d),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ws(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Ws(i,e,r))}}/**
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
 */function Xg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ow(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lw(e))return"Blackberry";if(cw(e))return"Webos";if(sw(e))return"Safari";if((e.includes("chrome/")||iw(e))&&!e.includes("edge/"))return"Chrome";if(aw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function rw(t=bt()){return/firefox\//i.test(t)}function sw(t=bt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function iw(t=bt()){return/crios\//i.test(t)}function ow(t=bt()){return/iemobile/i.test(t)}function aw(t=bt()){return/android/i.test(t)}function lw(t=bt()){return/blackberry/i.test(t)}function cw(t=bt()){return/webos/i.test(t)}function nd(t=bt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function pM(t=bt()){var e;return nd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mM(){return bk()&&document.documentMode===10}function uw(t=bt()){return nd(t)||aw(t)||cw(t)||lw(t)||/windows phone/i.test(t)||ow(t)}/**
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
 */function hw(t,e=[]){let n;switch(t){case"Browser":n=Xg(bt());break;case"Worker":n=`${Xg(bt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${di}/${r}`}/**
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
 */class gM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function _M(t,e={}){return vi(t,"GET","/v2/passwordPolicy",ed(t,e))}/**
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
 */const yM=6;class vM{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:yM,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class EM{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jg(this),this.idTokenSubscription=new Jg(this),this.beforeStateQueue=new gM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Q0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ws.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ew(this,{idToken:e}),r=await Mn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(pr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return me(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Tl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tM()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pr(this.app))return Promise.reject(rs(this));const n=e?Jt(e):null;return n&&me(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&me(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pr(this.app)?Promise.reject(rs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pr(this.app)?Promise.reject(rs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _M(this),n=new vM(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Do("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await dM(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vn(e)||this._popupRedirectResolver;me(n,this,"argument-error"),this.redirectPersistenceManager=await Ws.create(this,[Vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(me(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return me(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&JD(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function rd(t){return Jt(t)}class Jg{constructor(e){this.auth=e,this.observer=null,this.addObserver=xk(n=>this.observer=n)}get next(){return me(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let sd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wM(t){sd=t}function TM(t){return sd.loadJS(t)}function bM(){return sd.gapiScript}function IM(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function AM(t,e){const n=_f(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ul(i,e??{}))return s;qn(s,"already-initialized")}return n.initialize({options:e})}function RM(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Vn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function SM(t,e,n){const r=rd(t);me(r._canInitEmulator,r,"emulator-config-failed"),me(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=fw(e),{host:o,port:a}=PM(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),CM()}function fw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function PM(t){const e=fw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Zg(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Zg(o)}}}function Zg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function CM(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class dw{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Dn("not implemented")}_getIdTokenResponse(e){return Dn("not implemented")}_linkToIdToken(e,n){return Dn("not implemented")}_getReauthenticationResolver(e){return Dn("not implemented")}}/**
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
 */async function Ks(t,e){return sM(t,"POST","/v1/accounts:signInWithIdp",ed(t,e))}/**
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
 */const kM="http://localhost";class cs extends dw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new cs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Xf(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new cs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ks(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ks(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ks(e,n)}buildRequest(){const e={requestUri:kM,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Mo(n)}return e}}/**
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
 */class pw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class $o extends pw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ur extends $o{constructor(){super("facebook.com")}static credential(e){return cs._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.FACEBOOK_SIGN_IN_METHOD="facebook.com";ur.PROVIDER_ID="facebook.com";/**
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
 */class hr extends $o{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return cs._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return hr.credential(n,r)}catch{return null}}}hr.GOOGLE_SIGN_IN_METHOD="google.com";hr.PROVIDER_ID="google.com";/**
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
 */class fr extends $o{constructor(){super("github.com")}static credential(e){return cs._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.GITHUB_SIGN_IN_METHOD="github.com";fr.PROVIDER_ID="github.com";/**
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
 */class dr extends $o{constructor(){super("twitter.com")}static credential(e,n){return cs._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.TWITTER_SIGN_IN_METHOD="twitter.com";dr.PROVIDER_ID="twitter.com";/**
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
 */class ci{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Mn._fromIdTokenResponse(e,r,s),o=e_(r);return new ci({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=e_(r);return new ci({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function e_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class bl extends Qn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,bl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new bl(e,n,r,s)}}function mw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?bl._fromErrorAndOperation(t,i,e,r):i})}async function xM(t,e,n=!1){const r=await bo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ci._forOperation(t,"link",r)}/**
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
 */async function OM(t,e,n=!1){const{auth:r}=t;if(pr(r.app))return Promise.reject(rs(r));const s="reauthenticate";try{const i=await bo(t,mw(r,s,e,t),n);me(i.idToken,r,"internal-error");const o=td(i.idToken);me(o,r,"internal-error");const{sub:a}=o;return me(t.uid===a,r,"user-mismatch"),ci._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&qn(r,"user-mismatch"),i}}/**
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
 */async function NM(t,e,n=!1){if(pr(t.app))return Promise.reject(rs(t));const r="signIn",s=await mw(t,r,e),i=await ci._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function DM(t,e,n,r){return Jt(t).onIdTokenChanged(e,n,r)}function MM(t,e,n){return Jt(t).beforeAuthStateChanged(e,n)}const Il="__sak";/**
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
 */class gw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Il,"1"),this.storage.removeItem(Il),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const VM=1e3,LM=10;class _w extends gw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=uw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);mM()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,LM):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},VM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_w.type="LOCAL";const FM=_w;/**
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
 */class yw extends gw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}yw.type="SESSION";const vw=yw;/**
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
 */function UM(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class hc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new hc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async h=>h(n.origin,i)),c=await UM(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hc.receivers=[];/**
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
 */function id(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class BM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const h=id("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const m=d;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(m.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function wn(){return window}function jM(t){wn().location.href=t}/**
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
 */function Ew(){return typeof wn().WorkerGlobalScope<"u"&&typeof wn().importScripts=="function"}async function $M(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function HM(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function qM(){return Ew()?self:null}/**
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
 */const ww="firebaseLocalStorageDb",zM=1,Al="firebaseLocalStorage",Tw="fbase_key";class Ho{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fc(t,e){return t.transaction([Al],e?"readwrite":"readonly").objectStore(Al)}function WM(){const t=indexedDB.deleteDatabase(ww);return new Ho(t).toPromise()}function Nh(){const t=indexedDB.open(ww,zM);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Al,{keyPath:Tw})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Al)?e(r):(r.close(),await WM(),e(await Nh()))})})}async function t_(t,e,n){const r=fc(t,!0).put({[Tw]:e,value:n});return new Ho(r).toPromise()}async function KM(t,e){const n=fc(t,!1).get(e),r=await new Ho(n).toPromise();return r===void 0?null:r.value}function n_(t,e){const n=fc(t,!0).delete(e);return new Ho(n).toPromise()}const GM=800,QM=3;class bw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>QM)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ew()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hc._getInstance(qM()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $M(),!this.activeServiceWorker)return;this.sender=new BM(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||HM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nh();return await t_(e,Il,"1"),await n_(e,Il),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>t_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>KM(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>n_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=fc(s,!1).getAll();return new Ho(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),GM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bw.type="LOCAL";const YM=bw;new jo(3e4,6e4);/**
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
 */function XM(t,e){return e?Vn(e):(me(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class od extends dw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ks(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ks(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ks(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function JM(t){return NM(t.auth,new od(t),t.bypassAuthState)}function ZM(t){const{auth:e,user:n}=t;return me(n,e,"internal-error"),OM(n,new od(t),t.bypassAuthState)}async function eV(t){const{auth:e,user:n}=t;return me(n,e,"internal-error"),xM(n,new od(t),t.bypassAuthState)}/**
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
 */class Iw{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return JM;case"linkViaPopup":case"linkViaRedirect":return eV;case"reauthViaPopup":case"reauthViaRedirect":return ZM;default:qn(this.auth,"internal-error")}}resolve(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const tV=new jo(2e3,1e4);class Ds extends Iw{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ds.currentPopupAction&&Ds.currentPopupAction.cancel(),Ds.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return me(e,this.auth,"internal-error"),e}async onExecution(){zn(this.filter.length===1,"Popup operations only handle one event");const e=id();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(En(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(En(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ds.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(En(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tV.get())};e()}}Ds.currentPopupAction=null;/**
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
 */const nV="pendingRedirect",Ba=new Map;class rV extends Iw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ba.get(this.auth._key());if(!e){try{const r=await sV(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ba.set(this.auth._key(),e)}return this.bypassAuthState||Ba.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sV(t,e){const n=aV(e),r=oV(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function iV(t,e){Ba.set(t._key(),e)}function oV(t){return Vn(t._redirectPersistence)}function aV(t){return Ua(nV,t.config.apiKey,t.name)}async function lV(t,e,n=!1){if(pr(t.app))return Promise.reject(rs(t));const r=rd(t),s=XM(r,e),o=await new rV(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const cV=10*60*1e3;class uV{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hV(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Aw(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(En(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cV&&this.cachedEventUids.clear(),this.cachedEventUids.has(r_(e))}saveEventToCache(e){this.cachedEventUids.add(r_(e)),this.lastProcessedEventTime=Date.now()}}function r_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Aw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hV(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Aw(t);default:return!1}}/**
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
 */async function fV(t,e={}){return vi(t,"GET","/v1/projects",e)}/**
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
 */const dV=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pV=/^https?/;async function mV(t){if(t.config.emulator)return;const{authorizedDomains:e}=await fV(t);for(const n of e)try{if(gV(n))return}catch{}qn(t,"unauthorized-domain")}function gV(t){const e=xh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!pV.test(n))return!1;if(dV.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const _V=new jo(3e4,6e4);function s_(){const t=wn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function yV(t){return new Promise((e,n)=>{var r,s,i;function o(){s_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{s_(),n(En(t,"network-request-failed"))},timeout:_V.get()})}if(!((s=(r=wn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=wn().gapi)===null||i===void 0)&&i.load)o();else{const a=IM("iframefcb");return wn()[a]=()=>{gapi.load?o():n(En(t,"network-request-failed"))},TM(`${bM()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ja=null,e})}let ja=null;function vV(t){return ja=ja||yV(t),ja}/**
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
 */const EV=new jo(5e3,15e3),wV="__/auth/iframe",TV="emulator/auth/iframe",bV={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},IV=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function AV(t){const e=t.config;me(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Zf(e,TV):`https://${t.config.authDomain}/${wV}`,r={apiKey:e.apiKey,appName:t.name,v:di},s=IV.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Mo(r).slice(1)}`}async function RV(t){const e=await vV(t),n=wn().gapi;return me(n,t,"internal-error"),e.open({where:document.body,url:AV(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bV,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=En(t,"network-request-failed"),a=wn().setTimeout(()=>{i(o)},EV.get());function c(){wn().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const SV={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},PV=500,CV=600,kV="_blank",xV="http://localhost";class i_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function OV(t,e,n,r=PV,s=CV){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},SV),{width:r.toString(),height:s.toString(),top:i,left:o}),h=bt().toLowerCase();n&&(a=iw(h)?kV:n),rw(h)&&(e=e||xV,c.scrollbars="yes");const u=Object.entries(c).reduce((m,[g,A])=>`${m}${g}=${A},`,"");if(pM(h)&&a!=="_self")return NV(e||"",a),new i_(null);const d=window.open(e||"",a,u);me(d,t,"popup-blocked");try{d.focus()}catch{}return new i_(d)}function NV(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const DV="__/auth/handler",MV="emulator/auth/handler",VV=encodeURIComponent("fac");async function o_(t,e,n,r,s,i){me(t.config.authDomain,t,"auth-domain-config-required"),me(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:di,eventId:s};if(e instanceof pw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",kk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof $o){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),h=c?`#${VV}=${encodeURIComponent(c)}`:"";return`${LV(t)}?${Mo(a).slice(1)}${h}`}function LV({config:t}){return t.emulator?Zf(t,MV):`https://${t.authDomain}/${DV}`}/**
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
 */const hu="webStorageSupport";class FV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vw,this._completeRedirectFn=lV,this._overrideRedirectResult=iV}async _openPopup(e,n,r,s){var i;zn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await o_(e,n,r,xh(),s);return OV(e,o,id())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await o_(e,n,r,xh(),s);return jM(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(zn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await RV(e),r=new uV(e);return n.register("authEvent",s=>(me(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(hu,{type:hu},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[hu];o!==void 0&&n(!!o),qn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mV(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return uw()||sw()||nd()}}const UV=FV;var a_="@firebase/auth",l_="1.8.1";/**
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
 */class BV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){me(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function jV(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $V(t){ti(new os("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;me(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hw(t)},h=new EM(r,s,i,c);return RM(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ti(new os("auth-internal",e=>{const n=rd(e.getProvider("auth").getImmediate());return(r=>new BV(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Er(a_,l_,jV(t)),Er(a_,l_,"esm2017")}/**
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
 */const HV=5*60,qV=mE("authIdTokenMaxAge")||HV;let c_=null;const zV=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>qV)return;const s=n==null?void 0:n.token;c_!==s&&(c_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function WV(t=vE()){const e=_f(t,"auth");if(e.isInitialized())return e.getImmediate();const n=AM(t,{popupRedirectResolver:UV,persistence:[YM,FM,vw]}),r=mE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=zV(i.toString());MM(n,o,()=>o(n.currentUser)),DM(n,a=>o(a))}}const s=dE("auth");return s&&SM(n,`http://${s}`),n}function KV(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}wM({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=En("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",KV().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$V("Browser");const GV=cn(()=>{const t=hi().public.firebase,e=yE({apiKey:t.apiKey,authDomain:t.authDomain,projectId:t.projectId,storageBucket:t.storageBucket,messagingSenderId:t.messagingSenderId,appId:t.appId}),n=DD(e),r=WV(e);return{provide:{firebase:e,firestore:n,auth:r}}}),QV=[lS,uS,xP,NP,DP,MP,LP,FP,UP,ak,GV],YV=t=>{const e=Object.create(null);for(const n in t){const r=t[n];r!==void 0&&(e[n]=r)}return e},Rw=(t,e)=>(n,r)=>(eS(()=>t({...YV(n),...r.attrs},r)),()=>{var s,i;return e?(i=(s=r.slots).default)==null?void 0:i.call(s):null}),XV={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},JV=bn({name:"Title",inheritAttrs:!1,setup:Rw((t,{slots:e})=>{var n,r,s;return{title:((s=(r=(n=e.default)==null?void 0:n.call(e))==null?void 0:r[0])==null?void 0:s.children)||null}})}),ZV=bn({name:"Meta",inheritAttrs:!1,props:{...XV,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:Rw(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})}),eL=bn({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var n,r;return(r=(n=e.slots).default)==null?void 0:r.call(n)}}),tL=bn({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(t){const e=t.renderKey,n=t.route,r={};for(const s in t.route)Object.defineProperty(r,s,{get:()=>e===t.renderKey?t.route[s]:n[s],enumerable:!0});return Bs(Ul,Nn(r)),()=>$t(t.vnode,{ref:t.vnodeRef})}}),nL=bn({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:r}){const s=Ke(),i=Mt(),o=Ct(Ul,null);let a;r({pageRef:i});const c=Ct(nR,null);let h;const u=s.deferHydration();if(s.isHydrating){const d=s.hooks.hookOnce("app:error",u);Vt().beforeEach(d)}return t.pageKey&&_r(()=>t.pageKey,(d,m)=>{d!==m&&s.callHook("page:loading:start")}),()=>$t(Rv,{name:t.name,route:t.route,...e},{default:d=>{const m=sL(o,d.route,d.Component),g=o&&o.matched.length===d.route.matched.length;if(!d.Component){if(h&&!g)return h;u();return}if(h&&c&&!c.isCurrent(d.route))return h;if(m&&o&&(!c||c!=null&&c.isCurrent(o)))return g?h:null;const A=Wu(d,t.pageKey);!s.isHydrating&&!iL(o,d.route,d.Component)&&a===A&&s.callHook("page:loading:end"),a=A;const x=!!(t.transition??d.route.meta.pageTransition??Nu),N=x&&rL([t.transition,d.route.meta.pageTransition,Nu,{onAfterLeave:()=>{s.callHook("page:transition:finish",d.Component)}}].filter(Boolean)),O=t.keepalive??d.route.meta.keepalive??LA;return h=EP(nI,x&&N,_P(O,$t(by,{suspensible:!0,onPending:()=>s.callHook("page:start",d.Component),onResolve:()=>{Po(()=>s.callHook("page:finish",d.Component).then(()=>s.callHook("page:loading:end")).finally(u))}},{default:()=>{const P=$t(tL,{key:A||void 0,vnode:n.default?$t(Bt,void 0,n.default(d)):d.Component,route:d.route,renderKey:A||void 0,trackRootNodes:x,vnodeRef:i});return O&&(P.type.name=d.Component.type.name||d.Component.type.__name||"RouteProvider"),P}}))).default(),h}})}});function rL(t){const e=t.map(n=>({...n,onAfterLeave:n.onAfterLeave?nf(n.onAfterLeave):void 0}));return Jy(...e)}function sL(t,e,n){if(!t)return!1;const r=e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!r||r===-1?!1:e.matched.slice(0,r).some((s,i)=>{var o,a,c;return((o=s.components)==null?void 0:o.default)!==((c=(a=t.matched[i])==null?void 0:a.components)==null?void 0:c.default)})||n&&Wu({route:e,Component:n})!==Wu({route:t,Component:n})}function iL(t,e,n){return t?e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)})<e.matched.length-1:!1}const oL=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},aL={class:"navbar"},lL={class:"logo"},cL={class:"search-container"},uL={__name:"app",setup(t){const e=Mt(""),n=Mt(!1),r=fP(),s=()=>{e.value.trim()?r.push(`/search?query=${encodeURIComponent(e.value)}`):r.push("/search")},i=()=>{n.value=!n.value};return(o,a)=>{const c=JV,h=ZV,u=eL,d=$P,m=vu("font-awesome-icon"),g=nL;return dn(),Py("div",null,[Ce(u,null,{default:ir(()=>[Ce(c,null,{default:ir(()=>a[1]||(a[1]=[Gr("쁠로그")])),_:1}),Ce(h,{property:"og:title",content:"쁠로그"}),Ce(h,{property:"og:description",content:"이것은 쁠로그다"}),Ce(h,{property:"og:type",content:"website"})]),_:1}),Ft("header",aL,[Ft("div",lL,[Ce(d,{to:"/"},{default:ir(()=>a[2]||(a[2]=[Gr("Bblog(쁠로그)")])),_:1})]),Ft("div",cL,[HT(Ft("input",{"onUpdate:modelValue":a[0]||(a[0]=A=>e.value=A),type:"text",placeholder:"검색어를 입력하세요...",class:"search-input",onKeydown:SI(s,["enter"])},null,544),[[bI,e.value]])]),Ft("nav",null,[Ce(m,{class:"search",icon:"magnifying-glass",onClick:s}),Ft("button",{class:"menu-toggle",onClick:i},"메뉴"),Ft("ul",{class:Ro({show:n.value})},[Ft("li",null,[Ce(d,{to:"/"},{default:ir(()=>a[3]||(a[3]=[Gr("홈")])),_:1})]),Ft("li",null,[Ce(d,{to:"/page1"},{default:ir(()=>a[4]||(a[4]=[Gr("하하")])),_:1})]),Ft("li",null,[Ce(d,{to:"/page2"},{default:ir(()=>a[5]||(a[5]=[Gr("ㄱㄱㄱ")])),_:1})])],2)])]),Ft("main",null,[Ce(g)])])}}},hL=oL(uL,[["__scopeId","data-v-c0e0be41"]]),fL={__name:"nuxt-error-page",props:{error:Object},setup(t){const n=t.error;n.stack&&n.stack.split(`
`).splice(1).map(d=>({text:d.replace("webpack:/","").replace(".vue",".js").trim(),internal:d.includes("node_modules")&&!d.includes(".cache")||d.includes("internal")||d.includes("new Promise")})).map(d=>`<span class="stack${d.internal?" internal":""}">${d.text}</span>`).join(`
`);const r=Number(n.statusCode||500),s=r===404,i=n.statusMessage??(s?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),a=void 0,u=s?ip(()=>Os(()=>import("./BjerXEGu.js"),__vite__mapDeps([9,10]),import.meta.url)):ip(()=>Os(()=>import("./CW1sH1lq.js"),__vite__mapDeps([11,12]),import.meta.url));return(d,m)=>(dn(),Kr($e(u),oT(ky({statusCode:$e(r),statusMessage:$e(i),description:$e(o),stack:$e(a)})),null,16))}},dL={key:0},u_={__name:"nuxt-root",setup(t){const e=()=>null,n=Ke(),r=n.deferHydration();if(n.isHydrating){const c=n.hooks.hookOnce("app:error",r);Vt().beforeEach(c)}const s=!1;Bs(Ul,ev()),n.hooks.callHookWith(c=>c.map(h=>h()),"vue:setup");const i=Bl(),o=!1;ty((c,h,u)=>{if(n.hooks.callHook("vue:error",c,h,u).catch(d=>console.error("[nuxt] Error in `vue:error` hook",d)),oR(c)&&(c.fatal||c.unhandled))return n.runWithContext(()=>xs(c)),!1});const a=!1;return(c,h)=>(dn(),Kr(by,{onResolve:$e(r)},{default:ir(()=>[$e(o)?(dn(),Py("div",dL)):$e(i)?(dn(),Kr($e(fL),{key:1,error:$e(i)},null,8,["error"])):$e(a)?(dn(),Kr($e(e),{key:2,context:$e(a)},null,8,["context"])):$e(s)?(dn(),Kr(ab($e(s)),{key:3})):(dn(),Kr($e(hL),{key:4}))]),_:1},8,["onResolve"]))}};let h_;{let t;h_=async function(){var o,a;if(t)return t;const r=!!(((o=window.__NUXT__)==null?void 0:o.serverRendered)??((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?xI(u_):kI(u_),s=HA({vueApp:r});async function i(c){await s.callHook("app:error",c),s.payload.error=s.payload.error||jl(c)}r.config.errorHandler=i,s.hook("app:suspense:resolve",()=>{r.config.errorHandler===i&&(r.config.errorHandler=void 0)});try{await WA(s,QV)}catch(c){i(c)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(BA),await s.hooks.callHook("app:mounted",r),await Po()}catch(c){i(c)}return r},t=h_().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{TL as A,bL as B,wL as C,AL as D,SL as E,Bt as F,tt as G,eL as H,RL as I,ZV as M,JV as T,oL as _,Ft as a,Ce as b,Py as c,Gr as d,$P as e,fP as f,Ol as g,HT as h,gL as i,pL as j,Kr as k,Ke as l,_L as m,Po as n,dn as o,mL as p,ND as q,Mt as r,IL as s,cT as t,eS as u,bI as v,ir as w,Ue as x,_r as y,SI as z};
