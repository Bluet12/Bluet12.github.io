const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CwKFfe_Z.js","./IStFmxWh.js","./DTiZrW7I.js","./create.CTHTF24C.css","./DpNPlgur.js","./index.DhvuUMC2.css","./BMzo0rHF.js","./_id_.DrLFcv7a.css","./CKAjh0K7.js","./search.C98hrwb5.css","./BjTJGypI.js","./error-404.CoZKRZXM.css","./CCI6Ksk5.js","./error-500.D6506J9O.css"])))=>i.map(i=>d[i]);
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Fh(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const De={},Ls=[],yn=()=>{},lT=()=>!1,Ro=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Uh=t=>t.startsWith("onUpdate:"),Ze=Object.assign,jh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},cT=Object.prototype.hasOwnProperty,Ce=(t,e)=>cT.call(t,e),he=Array.isArray,Fs=t=>So(t)==="[object Map]",vy=t=>So(t)==="[object Set]",uT=t=>So(t)==="[object RegExp]",de=t=>typeof t=="function",He=t=>typeof t=="string",xr=t=>typeof t=="symbol",Le=t=>t!==null&&typeof t=="object",Ey=t=>(Le(t)||de(t))&&de(t.then)&&de(t.catch),wy=Object.prototype.toString,So=t=>wy.call(t),hT=t=>So(t).slice(8,-1),Ty=t=>So(t)==="[object Object]",Bh=t=>He(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Us=Fh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},fT=/-(\w)/g,Jt=Pl(t=>t.replace(fT,(e,n)=>n?n.toUpperCase():"")),dT=/\B([A-Z])/g,Or=Pl(t=>t.replace(dT,"-$1").toLowerCase()),Cl=Pl(t=>t.charAt(0).toUpperCase()+t.slice(1)),Cc=Pl(t=>t?`on${Cl(t)}`:""),gr=(t,e)=>!Object.is(t,e),js=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},by=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},mu=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Iy=t=>{const e=He(t)?Number(t):NaN;return isNaN(e)?t:e};let sp;const kl=()=>sp||(sp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xl(t){if(he(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=He(r)?yT(r):xl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(He(t)||Le(t))return t}const pT=/;(?![^(]*\))/g,mT=/:([^]+)/,gT=/\/\*[^]*?\*\//g;function yT(t){const e={};return t.replace(gT,"").split(pT).forEach(n=>{if(n){const r=n.split(mT);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Po(t){let e="";if(He(t))e=t;else if(he(t))for(let n=0;n<t.length;n++){const r=Po(t[n]);r&&(e+=r+" ")}else if(Le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function _T(t){if(!t)return null;let{class:e,style:n}=t;return e&&!He(e)&&(t.class=Po(e)),n&&(t.style=xl(n)),t}const vT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ET=Fh(vT);function Ay(t){return!!t||t===""}const Ry=t=>!!(t&&t.__v_isRef===!0),wT=t=>He(t)?t:t==null?"":he(t)||Le(t)&&(t.toString===wy||!de(t.toString))?Ry(t)?wT(t.value):JSON.stringify(t,Sy,2):String(t),Sy=(t,e)=>Ry(e)?Sy(t,e.value):Fs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[kc(r,i)+" =>"]=s,n),{})}:vy(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>kc(n))}:xr(e)?kc(e):Le(e)&&!he(e)&&!Ty(e)?String(e):e,kc=(t,e="")=>{var n;return xr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let jt;class Py{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=jt,!e&&jt&&(this.index=(jt.scopes||(jt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=jt;try{return jt=this,e()}finally{jt=n}}}on(){jt=this}off(){jt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function TT(t){return new Py(t)}function Cy(){return jt}let Me;const xc=new WeakSet;class ky{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,jt&&jt.active&&jt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,xc.has(this)&&(xc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Oy(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ip(this),Ny(this);const e=Me,n=on;Me=this,on=!0;try{return this.fn()}finally{Dy(this),Me=e,on=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)qh(e);this.deps=this.depsTail=void 0,ip(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?xc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){gu(this)&&this.run()}get dirty(){return gu(this)}}let xy=0,qi,zi;function Oy(t,e=!1){if(t.flags|=8,e){t.next=zi,zi=t;return}t.next=qi,qi=t}function $h(){xy++}function Hh(){if(--xy>0)return;if(zi){let e=zi;for(zi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;qi;){let e=qi;for(qi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Ny(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Dy(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),qh(r),bT(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function gu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(My(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function My(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===io))return;t.globalVersion=io;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!gu(t)){t.flags&=-3;return}const n=Me,r=on;Me=t,on=!0;try{Ny(t);const s=t.fn(t._value);(e.version===0||gr(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Me=n,on=r,Dy(t),t.flags&=-3}}function qh(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)qh(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function bT(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let on=!0;const Vy=[];function Nr(){Vy.push(on),on=!1}function Dr(){const t=Vy.pop();on=t===void 0?!0:t}function ip(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Me;Me=void 0;try{e()}finally{Me=n}}}let io=0;class IT{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class zh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Me||!on||Me===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Me)n=this.activeLink=new IT(Me,this),Me.deps?(n.prevDep=Me.depsTail,Me.depsTail.nextDep=n,Me.depsTail=n):Me.deps=Me.depsTail=n,Ly(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Me.depsTail,n.nextDep=void 0,Me.depsTail.nextDep=n,Me.depsTail=n,Me.deps===n&&(Me.deps=r)}return n}trigger(e){this.version++,io++,this.notify(e)}notify(e){$h();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Hh()}}}function Ly(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Ly(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const qa=new WeakMap,Yr=Symbol(""),yu=Symbol(""),oo=Symbol("");function vt(t,e,n){if(on&&Me){let r=qa.get(t);r||qa.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new zh),s.map=r,s.key=n),s.track()}}function kn(t,e,n,r,s,i){const o=qa.get(t);if(!o){io++;return}const a=c=>{c&&c.trigger()};if($h(),e==="clear")o.forEach(a);else{const c=he(t),u=c&&Bh(n);if(c&&n==="length"){const h=Number(r);o.forEach((d,m)=>{(m==="length"||m===oo||!xr(m)&&m>=h)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(oo)),e){case"add":c?u&&a(o.get("length")):(a(o.get(Yr)),Fs(t)&&a(o.get(yu)));break;case"delete":c||(a(o.get(Yr)),Fs(t)&&a(o.get(yu)));break;case"set":Fs(t)&&a(o.get(Yr));break}}Hh()}function AT(t,e){const n=qa.get(t);return n&&n.get(e)}function ws(t){const e=Se(t);return e===t?e:(vt(e,"iterate",oo),Xt(t)?e:e.map(Et))}function Ol(t){return vt(t=Se(t),"iterate",oo),t}const RT={__proto__:null,[Symbol.iterator](){return Oc(this,Symbol.iterator,Et)},concat(...t){return ws(this).concat(...t.map(e=>he(e)?ws(e):e))},entries(){return Oc(this,"entries",t=>(t[1]=Et(t[1]),t))},every(t,e){return Rn(this,"every",t,e,void 0,arguments)},filter(t,e){return Rn(this,"filter",t,e,n=>n.map(Et),arguments)},find(t,e){return Rn(this,"find",t,e,Et,arguments)},findIndex(t,e){return Rn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Rn(this,"findLast",t,e,Et,arguments)},findLastIndex(t,e){return Rn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Rn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Nc(this,"includes",t)},indexOf(...t){return Nc(this,"indexOf",t)},join(t){return ws(this).join(t)},lastIndexOf(...t){return Nc(this,"lastIndexOf",t)},map(t,e){return Rn(this,"map",t,e,void 0,arguments)},pop(){return Di(this,"pop")},push(...t){return Di(this,"push",t)},reduce(t,...e){return op(this,"reduce",t,e)},reduceRight(t,...e){return op(this,"reduceRight",t,e)},shift(){return Di(this,"shift")},some(t,e){return Rn(this,"some",t,e,void 0,arguments)},splice(...t){return Di(this,"splice",t)},toReversed(){return ws(this).toReversed()},toSorted(t){return ws(this).toSorted(t)},toSpliced(...t){return ws(this).toSpliced(...t)},unshift(...t){return Di(this,"unshift",t)},values(){return Oc(this,"values",Et)}};function Oc(t,e,n){const r=Ol(t),s=r[e]();return r!==t&&!Xt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const ST=Array.prototype;function Rn(t,e,n,r,s,i){const o=Ol(t),a=o!==t&&!Xt(t),c=o[e];if(c!==ST[e]){const d=c.apply(t,i);return a?Et(d):d}let u=n;o!==t&&(a?u=function(d,m){return n.call(this,Et(d),m,t)}:n.length>2&&(u=function(d,m){return n.call(this,d,m,t)}));const h=c.call(o,u,r);return a&&s?s(h):h}function op(t,e,n,r){const s=Ol(t);let i=n;return s!==t&&(Xt(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,Et(a),c,t)}),s[e](i,...r)}function Nc(t,e,n){const r=Se(t);vt(r,"iterate",oo);const s=r[e](...n);return(s===-1||s===!1)&&Gh(n[0])?(n[0]=Se(n[0]),r[e](...n)):s}function Di(t,e,n=[]){Nr(),$h();const r=Se(t)[e].apply(t,n);return Hh(),Dr(),r}const PT=Fh("__proto__,__v_isRef,__isVue"),Fy=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(xr));function CT(t){xr(t)||(t=String(t));const e=Se(this);return vt(e,"has",t),e.hasOwnProperty(t)}class Uy{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?UT:Hy:i?$y:By).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=he(e);if(!s){let c;if(o&&(c=RT[n]))return c;if(n==="hasOwnProperty")return CT}const a=Reflect.get(e,n,ot(e)?e:r);return(xr(n)?Fy.has(n):PT(n))||(s||vt(e,"get",n),i)?a:ot(a)?o&&Bh(n)?a:a.value:Le(a)?s?qy(a):Mr(a):a}}class jy extends Uy{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Tr(i);if(!Xt(r)&&!Tr(r)&&(i=Se(i),r=Se(r)),!he(e)&&ot(i)&&!ot(r))return c?!1:(i.value=r,!0)}const o=he(e)&&Bh(n)?Number(n)<e.length:Ce(e,n),a=Reflect.set(e,n,r,ot(e)?e:s);return e===Se(s)&&(o?gr(r,i)&&kn(e,"set",n,r):kn(e,"add",n,r)),a}deleteProperty(e,n){const r=Ce(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&kn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!xr(n)||!Fy.has(n))&&vt(e,"has",n),r}ownKeys(e){return vt(e,"iterate",he(e)?"length":Yr),Reflect.ownKeys(e)}}class kT extends Uy{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const xT=new jy,OT=new kT,NT=new jy(!0);const _u=t=>t,aa=t=>Reflect.getPrototypeOf(t);function DT(t,e,n){return function(...r){const s=this.__v_raw,i=Se(s),o=Fs(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),h=n?_u:e?vu:Et;return!e&&vt(i,"iterate",c?yu:Yr),{next(){const{value:d,done:m}=u.next();return m?{value:d,done:m}:{value:a?[h(d[0]),h(d[1])]:h(d),done:m}},[Symbol.iterator](){return this}}}}function la(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function MT(t,e){const n={get(s){const i=this.__v_raw,o=Se(i),a=Se(s);t||(gr(s,a)&&vt(o,"get",s),vt(o,"get",a));const{has:c}=aa(o),u=e?_u:t?vu:Et;if(c.call(o,s))return u(i.get(s));if(c.call(o,a))return u(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&vt(Se(s),"iterate",Yr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Se(i),a=Se(s);return t||(gr(s,a)&&vt(o,"has",s),vt(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=Se(a),u=e?_u:t?vu:Et;return!t&&vt(c,"iterate",Yr),a.forEach((h,d)=>s.call(i,u(h),u(d),o))}};return Ze(n,t?{add:la("add"),set:la("set"),delete:la("delete"),clear:la("clear")}:{add(s){!e&&!Xt(s)&&!Tr(s)&&(s=Se(s));const i=Se(this);return aa(i).has.call(i,s)||(i.add(s),kn(i,"add",s,s)),this},set(s,i){!e&&!Xt(i)&&!Tr(i)&&(i=Se(i));const o=Se(this),{has:a,get:c}=aa(o);let u=a.call(o,s);u||(s=Se(s),u=a.call(o,s));const h=c.call(o,s);return o.set(s,i),u?gr(i,h)&&kn(o,"set",s,i):kn(o,"add",s,i),this},delete(s){const i=Se(this),{has:o,get:a}=aa(i);let c=o.call(i,s);c||(s=Se(s),c=o.call(i,s)),a&&a.call(i,s);const u=i.delete(s);return c&&kn(i,"delete",s,void 0),u},clear(){const s=Se(this),i=s.size!==0,o=s.clear();return i&&kn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=DT(s,t,e)}),n}function Wh(t,e){const n=MT(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ce(n,s)&&s in r?n:r,s,i)}const VT={get:Wh(!1,!1)},LT={get:Wh(!1,!0)},FT={get:Wh(!0,!1)};const By=new WeakMap,$y=new WeakMap,Hy=new WeakMap,UT=new WeakMap;function jT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function BT(t){return t.__v_skip||!Object.isExtensible(t)?0:jT(hT(t))}function Mr(t){return Tr(t)?t:Kh(t,!1,xT,VT,By)}function Nn(t){return Kh(t,!1,NT,LT,$y)}function qy(t){return Kh(t,!0,OT,FT,Hy)}function Kh(t,e,n,r,s){if(!Le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=BT(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Xr(t){return Tr(t)?Xr(t.__v_raw):!!(t&&t.__v_isReactive)}function Tr(t){return!!(t&&t.__v_isReadonly)}function Xt(t){return!!(t&&t.__v_isShallow)}function Gh(t){return t?!!t.__v_raw:!1}function Se(t){const e=t&&t.__v_raw;return e?Se(e):t}function $T(t){return!Ce(t,"__v_skip")&&Object.isExtensible(t)&&by(t,"__v_skip",!0),t}const Et=t=>Le(t)?Mr(t):t,vu=t=>Le(t)?qy(t):t;function ot(t){return t?t.__v_isRef===!0:!1}function Vt(t){return zy(t,!1)}function ao(t){return zy(t,!0)}function zy(t,e){return ot(t)?t:new HT(t,e)}class HT{constructor(e,n){this.dep=new zh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Se(e),this._value=n?e:Et(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Xt(e)||Tr(e);e=r?e:Se(e),gr(e,n)&&(this._rawValue=e,this._value=r?e:Et(e),this.dep.trigger())}}function $e(t){return ot(t)?t.value:t}const qT={get:(t,e,n)=>e==="__v_raw"?t:$e(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ot(s)&&!ot(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Wy(t){return Xr(t)?t:new Proxy(t,qT)}class zT{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return AT(Se(this._object),this._key)}}class WT{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function KT(t,e,n){return ot(t)?t:de(t)?new WT(t):Le(t)&&arguments.length>1?GT(t,e,n):Vt(t)}function GT(t,e,n){const r=t[e];return ot(r)?r:new zT(t,e,n)}class QT{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new zh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=io-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Me!==this)return Oy(this,!0),!0}get value(){const e=this.dep.track();return My(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function YT(t,e,n=!1){let r,s;return de(t)?r=t:(r=t.get,s=t.set),new QT(r,s,n)}const ca={},za=new WeakMap;let qr;function XT(t,e=!1,n=qr){if(n){let r=za.get(n);r||za.set(n,r=[]),r.push(t)}}function JT(t,e,n=De){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,u=S=>s?S:Xt(S)||s===!1||s===0?xn(S,1):xn(S);let h,d,m,g,A=!1,x=!1;if(ot(t)?(d=()=>t.value,A=Xt(t)):Xr(t)?(d=()=>u(t),A=!0):he(t)?(x=!0,A=t.some(S=>Xr(S)||Xt(S)),d=()=>t.map(S=>{if(ot(S))return S.value;if(Xr(S))return u(S);if(de(S))return c?c(S,2):S()})):de(t)?e?d=c?()=>c(t,2):t:d=()=>{if(m){Nr();try{m()}finally{Dr()}}const S=qr;qr=h;try{return c?c(t,3,[g]):t(g)}finally{qr=S}}:d=yn,e&&s){const S=d,D=s===!0?1/0:s;d=()=>xn(S(),D)}const N=Cy(),O=()=>{h.stop(),N&&N.active&&jh(N.effects,h)};if(i&&e){const S=e;e=(...D)=>{S(...D),O()}}let P=x?new Array(t.length).fill(ca):ca;const _=S=>{if(!(!(h.flags&1)||!h.dirty&&!S))if(e){const D=h.run();if(s||A||(x?D.some((L,b)=>gr(L,P[b])):gr(D,P))){m&&m();const L=qr;qr=h;try{const b=[D,P===ca?void 0:x&&P[0]===ca?[]:P,g];c?c(e,3,b):e(...b),P=D}finally{qr=L}}}else h.run()};return a&&a(_),h=new ky(d),h.scheduler=o?()=>o(_,!1):_,g=S=>XT(S,!1,h),m=h.onStop=()=>{const S=za.get(h);if(S){if(c)c(S,4);else for(const D of S)D();za.delete(h)}},e?r?_(!0):P=h.run():o?o(_.bind(null,!0),!0):h.run(),O.pause=h.pause.bind(h),O.resume=h.resume.bind(h),O.stop=O,O}function xn(t,e=1/0,n){if(e<=0||!Le(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ot(t))xn(t.value,e,n);else if(he(t))for(let r=0;r<t.length;r++)xn(t[r],e,n);else if(vy(t)||Fs(t))t.forEach(r=>{xn(r,e,n)});else if(Ty(t)){for(const r in t)xn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&xn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Co(t,e,n,r){try{return r?t(...r):t()}catch(s){fi(s,e,n)}}function an(t,e,n,r){if(de(t)){const s=Co(t,e,n,r);return s&&Ey(s)&&s.catch(i=>{fi(i,e,n)}),s}if(he(t)){const s=[];for(let i=0;i<t.length;i++)s.push(an(t[i],e,n,r));return s}}function fi(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||De;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const h=a.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,c,u)===!1)return}a=a.parent}if(i){Nr(),Co(i,null,10,[t,c,u]),Dr();return}}ZT(t,n,s,r,o)}function ZT(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Pt=[];let fn=-1;const Bs=[];let ir=null,bs=0;const Ky=Promise.resolve();let Wa=null;function ko(t){const e=Wa||Ky;return t?e.then(this?t.bind(this):t):e}function eb(t){let e=fn+1,n=Pt.length;for(;e<n;){const r=e+n>>>1,s=Pt[r],i=lo(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Qh(t){if(!(t.flags&1)){const e=lo(t),n=Pt[Pt.length-1];!n||!(t.flags&2)&&e>=lo(n)?Pt.push(t):Pt.splice(eb(e),0,t),t.flags|=1,Gy()}}function Gy(){Wa||(Wa=Ky.then(Qy))}function Eu(t){he(t)?Bs.push(...t):ir&&t.id===-1?ir.splice(bs+1,0,t):t.flags&1||(Bs.push(t),t.flags|=1),Gy()}function ap(t,e,n=fn+1){for(;n<Pt.length;n++){const r=Pt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Pt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ka(t){if(Bs.length){const e=[...new Set(Bs)].sort((n,r)=>lo(n)-lo(r));if(Bs.length=0,ir){ir.push(...e);return}for(ir=e,bs=0;bs<ir.length;bs++){const n=ir[bs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ir=null,bs=0}}const lo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Qy(t){try{for(fn=0;fn<Pt.length;fn++){const e=Pt[fn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Co(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;fn<Pt.length;fn++){const e=Pt[fn];e&&(e.flags&=-2)}fn=-1,Pt.length=0,Ka(),Wa=null,(Pt.length||Bs.length)&&Qy()}}let Ct=null,Yy=null;function Ga(t){const e=Ct;return Ct=t,Yy=t&&t.type.__scopeId||null,e}function ks(t,e=Ct,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ep(-1);const i=Ga(e);let o;try{o=t(...s)}finally{Ga(i),r._d&&Ep(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function tb(t,e){if(Ct===null)return t;const n=Fl(Ct),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=De]=e[s];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&xn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function dn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Nr(),an(c,n,8,[t.el,a,t,e]),Dr())}}const nb=Symbol("_vte"),Xy=t=>t.__isTeleport,or=Symbol("_leaveCb"),ua=Symbol("_enterCb");function rb(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Dl(()=>{t.isMounted=!0}),Oo(()=>{t.isUnmounting=!0}),t}const Gt=[Function,Array],Jy={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Gt,onEnter:Gt,onAfterEnter:Gt,onEnterCancelled:Gt,onBeforeLeave:Gt,onLeave:Gt,onAfterLeave:Gt,onLeaveCancelled:Gt,onBeforeAppear:Gt,onAppear:Gt,onAfterAppear:Gt,onAppearCancelled:Gt},Zy=t=>{const e=t.subTree;return e.component?Zy(e.component):e},sb={name:"BaseTransition",props:Jy,setup(t,{slots:e}){const n=Ll(),r=rb();return()=>{const s=e.default&&n_(e.default(),!0);if(!s||!s.length)return;const i=e_(s),o=Se(t),{mode:a}=o;if(r.isLeaving)return Dc(i);const c=lp(i);if(!c)return Dc(i);let u=wu(c,o,r,n,d=>u=d);c.type!==it&&Ys(c,u);let h=n.subTree&&lp(n.subTree);if(h&&h.type!==it&&!rn(c,h)&&Zy(n).type!==it){let d=wu(h,o,r,n);if(Ys(h,d),a==="out-in"&&c.type!==it)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,h=void 0},Dc(i);a==="in-out"&&c.type!==it?d.delayLeave=(m,g,A)=>{const x=t_(r,h);x[String(h.key)]=h,m[or]=()=>{g(),m[or]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{A(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function e_(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==it){e=n;break}}return e}const ib=sb;function t_(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function wu(t,e,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:m,onLeave:g,onAfterLeave:A,onLeaveCancelled:x,onBeforeAppear:N,onAppear:O,onAfterAppear:P,onAppearCancelled:_}=e,S=String(t.key),D=t_(n,t),L=(v,w)=>{v&&an(v,r,9,w)},b=(v,w)=>{const k=w[1];L(v,w),he(v)?v.every(R=>R.length<=1)&&k():v.length<=1&&k()},E={mode:o,persisted:a,beforeEnter(v){let w=c;if(!n.isMounted)if(i)w=N||c;else return;v[or]&&v[or](!0);const k=D[S];k&&rn(t,k)&&k.el[or]&&k.el[or](),L(w,[v])},enter(v){let w=u,k=h,R=d;if(!n.isMounted)if(i)w=O||u,k=P||h,R=_||d;else return;let T=!1;const ye=v[ua]=ve=>{T||(T=!0,ve?L(R,[v]):L(k,[v]),E.delayedLeave&&E.delayedLeave(),v[ua]=void 0)};w?b(w,[v,ye]):ye()},leave(v,w){const k=String(t.key);if(v[ua]&&v[ua](!0),n.isUnmounting)return w();L(m,[v]);let R=!1;const T=v[or]=ye=>{R||(R=!0,w(),ye?L(x,[v]):L(A,[v]),v[or]=void 0,D[k]===t&&delete D[k])};D[k]=t,g?b(g,[v,T]):T()},clone(v){const w=wu(v,e,n,r,s);return s&&s(w),w}};return E}function Dc(t){if(xo(t))return t=Un(t),t.children=null,t}function lp(t){if(!xo(t))return Xy(t.type)&&t.children?e_(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&de(n.default))return n.default()}}function Ys(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ys(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function n_(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Bt?(o.patchFlag&128&&s++,r=r.concat(n_(o.children,e,a))):(e||o.type!==it)&&r.push(a!=null?Un(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function cs(t,e){return de(t)?Ze({name:t.name},e,{setup:t}):t}function Yh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function co(t,e,n,r,s=!1){if(he(t)){t.forEach((A,x)=>co(A,e&&(he(e)?e[x]:e),n,r,s));return}if(Jr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&co(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Fl(r.component):r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,h=a.refs===De?a.refs={}:a.refs,d=a.setupState,m=Se(d),g=d===De?()=>!1:A=>Ce(m,A);if(u!=null&&u!==c&&(He(u)?(h[u]=null,g(u)&&(d[u]=null)):ot(u)&&(u.value=null)),de(c))Co(c,a,12,[o,h]);else{const A=He(c),x=ot(c);if(A||x){const N=()=>{if(t.f){const O=A?g(c)?d[c]:h[c]:c.value;s?he(O)&&jh(O,i):he(O)?O.includes(i)||O.push(i):A?(h[c]=[i],g(c)&&(d[c]=h[c])):(c.value=[i],t.k&&(h[t.k]=c.value))}else A?(h[c]=o,g(c)&&(d[c]=o)):x&&(c.value=o,t.k&&(h[t.k]=o))};o?(N.id=-1,ct(N,n)):N()}}}let cp=!1;const Ts=()=>{cp||(console.error("Hydration completed but contains mismatches."),cp=!0)},ob=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",ab=t=>t.namespaceURI.includes("MathML"),ha=t=>{if(t.nodeType===1){if(ob(t))return"svg";if(ab(t))return"mathml"}},xs=t=>t.nodeType===8;function lb(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:c,createComment:u}}=t,h=(_,S)=>{if(!S.hasChildNodes()){n(null,_,S),Ka(),S._vnode=_;return}d(S.firstChild,_,null,null,null),Ka(),S._vnode=_},d=(_,S,D,L,b,E=!1)=>{E=E||!!S.dynamicChildren;const v=xs(_)&&_.data==="[",w=()=>x(_,S,D,L,b,v),{type:k,ref:R,shapeFlag:T,patchFlag:ye}=S;let ve=_.nodeType;S.el=_,ye===-2&&(E=!1,S.dynamicChildren=null);let re=null;switch(k){case es:ve!==3?S.children===""?(c(S.el=s(""),o(_),_),re=_):re=w():(_.data!==S.children&&(Ts(),_.data=S.children),re=i(_));break;case it:P(_)?(re=i(_),O(S.el=_.content.firstChild,_,D)):ve!==8||v?re=w():re=i(_);break;case Ra:if(v&&(_=i(_),ve=_.nodeType),ve===1||ve===3){re=_;const fe=!S.children.length;for(let ne=0;ne<S.staticCount;ne++)fe&&(S.children+=re.nodeType===1?re.outerHTML:re.data),ne===S.staticCount-1&&(S.anchor=re),re=i(re);return v?i(re):re}else w();break;case Bt:v?re=A(_,S,D,L,b,E):re=w();break;default:if(T&1)(ve!==1||S.type.toLowerCase()!==_.tagName.toLowerCase())&&!P(_)?re=w():re=m(_,S,D,L,b,E);else if(T&6){S.slotScopeIds=b;const fe=o(_);if(v?re=N(_):xs(_)&&_.data==="teleport start"?re=N(_,_.data,"teleport end"):re=i(_),e(S,fe,null,D,L,ha(fe),E),Jr(S)&&!S.type.__asyncResolved){let ne;v?(ne=Ve(Bt),ne.anchor=re?re.previousSibling:fe.lastChild):ne=_.nodeType===3?Os(""):Ve("div"),ne.el=_,S.component.subTree=ne}}else T&64?ve!==8?re=w():re=S.type.hydrate(_,S,D,L,b,E,t,g):T&128&&(re=S.type.hydrate(_,S,D,L,ha(o(_)),b,E,t,d))}return R!=null&&co(R,null,L,S),re},m=(_,S,D,L,b,E)=>{E=E||!!S.dynamicChildren;const{type:v,props:w,patchFlag:k,shapeFlag:R,dirs:T,transition:ye}=S,ve=v==="input"||v==="option";if(ve||k!==-1){T&&dn(S,null,D,"created");let re=!1;if(P(_)){re=A_(null,ye)&&D&&D.vnode.props&&D.vnode.props.appear;const ne=_.content.firstChild;re&&ye.beforeEnter(ne),O(ne,_,D),S.el=_=ne}if(R&16&&!(w&&(w.innerHTML||w.textContent))){let ne=g(_.firstChild,S,_,D,L,b,E);for(;ne;){fa(_,1)||Ts();const qe=ne;ne=ne.nextSibling,a(qe)}}else if(R&8){let ne=S.children;ne[0]===`
`&&(_.tagName==="PRE"||_.tagName==="TEXTAREA")&&(ne=ne.slice(1)),_.textContent!==ne&&(fa(_,0)||Ts(),_.textContent=S.children)}if(w){if(ve||!E||k&48){const ne=_.tagName.includes("-");for(const qe in w)(ve&&(qe.endsWith("value")||qe==="indeterminate")||Ro(qe)&&!Us(qe)||qe[0]==="."||ne)&&r(_,qe,null,w[qe],void 0,D)}else if(w.onClick)r(_,"onClick",null,w.onClick,void 0,D);else if(k&4&&Xr(w.style))for(const ne in w.style)w.style[ne]}let fe;(fe=w&&w.onVnodeBeforeMount)&&Nt(fe,D,S),T&&dn(S,null,D,"beforeMount"),((fe=w&&w.onVnodeMounted)||T||re)&&O_(()=>{fe&&Nt(fe,D,S),re&&ye.enter(_),T&&dn(S,null,D,"mounted")},L)}return _.nextSibling},g=(_,S,D,L,b,E,v)=>{v=v||!!S.dynamicChildren;const w=S.children,k=w.length;for(let R=0;R<k;R++){const T=v?w[R]:w[R]=$t(w[R]),ye=T.type===es;_?(ye&&!v&&R+1<k&&$t(w[R+1]).type===es&&(c(s(_.data.slice(T.children.length)),D,i(_)),_.data=T.children),_=d(_,T,L,b,E,v)):ye&&!T.children?c(T.el=s(""),D):(fa(D,1)||Ts(),n(null,T,D,null,L,b,ha(D),E))}return _},A=(_,S,D,L,b,E)=>{const{slotScopeIds:v}=S;v&&(b=b?b.concat(v):v);const w=o(_),k=g(i(_),S,w,D,L,b,E);return k&&xs(k)&&k.data==="]"?i(S.anchor=k):(Ts(),c(S.anchor=u("]"),w,k),k)},x=(_,S,D,L,b,E)=>{if(fa(_.parentElement,1)||Ts(),S.el=null,E){const k=N(_);for(;;){const R=i(_);if(R&&R!==k)a(R);else break}}const v=i(_),w=o(_);return a(_),n(null,S,w,v,D,L,ha(w),b),D&&(D.vnode.el=S.el,Vl(D,S.el)),v},N=(_,S="[",D="]")=>{let L=0;for(;_;)if(_=i(_),_&&xs(_)&&(_.data===S&&L++,_.data===D)){if(L===0)return i(_);L--}return _},O=(_,S,D)=>{const L=S.parentNode;L&&L.replaceChild(_,S);let b=D;for(;b;)b.vnode.el===S&&(b.vnode.el=b.subTree.el=_),b=b.parent},P=_=>_.nodeType===1&&_.tagName==="TEMPLATE";return[h,d]}const up="data-allow-mismatch",cb={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function fa(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(up);)t=t.parentElement;const n=t&&t.getAttribute(up);if(n==null)return!1;if(n==="")return!0;{const r=n.split(",");return e===0&&r.includes("children")?!0:n.split(",").includes(cb[e])}}kl().requestIdleCallback;kl().cancelIdleCallback;function ub(t,e){if(xs(t)&&t.data==="["){let n=1,r=t.nextSibling;for(;r;){if(r.nodeType===1){if(e(r)===!1)break}else if(xs(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else e(t)}const Jr=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function hp(t){de(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,hydrate:i,timeout:o,suspensible:a=!0,onError:c}=t;let u=null,h,d=0;const m=()=>(d++,u=null,g()),g=()=>{let A;return u||(A=u=e().catch(x=>{if(x=x instanceof Error?x:new Error(String(x)),c)return new Promise((N,O)=>{c(x,()=>N(m()),()=>O(x),d+1)});throw x}).then(x=>A!==u&&u?u:(x&&(x.__esModule||x[Symbol.toStringTag]==="Module")&&(x=x.default),h=x,x)))};return cs({name:"AsyncComponentWrapper",__asyncLoader:g,__asyncHydrate(A,x,N){const O=i?()=>{const P=i(N,_=>ub(A,_));P&&(x.bum||(x.bum=[])).push(P)}:N;h?O():g().then(()=>!x.isUnmounted&&O())},get __asyncResolved(){return h},setup(){const A=et;if(Yh(A),h)return()=>Mc(h,A);const x=_=>{u=null,fi(_,A,13,!r)};if(a&&A.suspense||Zs)return g().then(_=>()=>Mc(_,A)).catch(_=>(x(_),()=>r?Ve(r,{error:_}):null));const N=Vt(!1),O=Vt(),P=Vt(!!s);return s&&setTimeout(()=>{P.value=!1},s),o!=null&&setTimeout(()=>{if(!N.value&&!O.value){const _=new Error(`Async component timed out after ${o}ms.`);x(_),O.value=_}},o),g().then(()=>{N.value=!0,A.parent&&xo(A.parent.vnode)&&A.parent.update()}).catch(_=>{x(_),O.value=_}),()=>{if(N.value&&h)return Mc(h,A);if(O.value&&r)return Ve(r,{error:O.value});if(n&&!P.value)return Ve(n)}}})}function Mc(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=Ve(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const xo=t=>t.type.__isKeepAlive,hb={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Ll(),r=n.ctx;if(!r.renderer)return()=>{const P=e.default&&e.default();return P&&P.length===1?P[0]:P};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:c,m:u,um:h,o:{createElement:d}}}=r,m=d("div");r.activate=(P,_,S,D,L)=>{const b=P.component;u(P,_,S,0,a),c(b.vnode,P,_,S,b,a,D,P.slotScopeIds,L),ct(()=>{b.isDeactivated=!1,b.a&&js(b.a);const E=P.props&&P.props.onVnodeMounted;E&&Nt(E,b.parent,P)},a)},r.deactivate=P=>{const _=P.component;Ya(_.m),Ya(_.a),u(P,m,null,1,a),ct(()=>{_.da&&js(_.da);const S=P.props&&P.props.onVnodeUnmounted;S&&Nt(S,_.parent,P),_.isDeactivated=!0},a)};function g(P){Vc(P),h(P,n,a,!0)}function A(P){s.forEach((_,S)=>{const D=ku(_.type);D&&!P(D)&&x(S)})}function x(P){const _=s.get(P);_&&(!o||!rn(_,o))?g(_):o&&Vc(o),s.delete(P),i.delete(P)}yr(()=>[t.include,t.exclude],([P,_])=>{P&&A(S=>Li(P,S)),_&&A(S=>!Li(_,S))},{flush:"post",deep:!0});let N=null;const O=()=>{N!=null&&(Xa(n.subTree.type)?ct(()=>{s.set(N,da(n.subTree))},n.subTree.suspense):s.set(N,da(n.subTree)))};return Dl(O),o_(O),Oo(()=>{s.forEach(P=>{const{subTree:_,suspense:S}=n,D=da(_);if(P.type===D.type&&P.key===D.key){Vc(D);const L=D.component.da;L&&ct(L,S);return}g(P)})}),()=>{if(N=null,!e.default)return o=null;const P=e.default(),_=P[0];if(P.length>1)return o=null,P;if(!Js(_)||!(_.shapeFlag&4)&&!(_.shapeFlag&128))return o=null,_;let S=da(_);if(S.type===it)return o=null,S;const D=S.type,L=ku(Jr(S)?S.type.__asyncResolved||{}:D),{include:b,exclude:E,max:v}=t;if(b&&(!L||!Li(b,L))||E&&L&&Li(E,L))return S.shapeFlag&=-257,o=S,_;const w=S.key==null?D:S.key,k=s.get(w);return S.el&&(S=Un(S),_.shapeFlag&128&&(_.ssContent=S)),N=w,k?(S.el=k.el,S.component=k.component,S.transition&&Ys(S,S.transition),S.shapeFlag|=512,i.delete(w),i.add(w)):(i.add(w),v&&i.size>parseInt(v,10)&&x(i.values().next().value)),S.shapeFlag|=256,o=S,Xa(_.type)?_:S}}},fb=hb;function Li(t,e){return he(t)?t.some(n=>Li(n,e)):He(t)?t.split(",").includes(e):uT(t)?(t.lastIndex=0,t.test(e)):!1}function r_(t,e){i_(t,"a",e)}function s_(t,e){i_(t,"da",e)}function i_(t,e,n=et){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Nl(e,r,n),n){let s=n.parent;for(;s&&s.parent;)xo(s.parent.vnode)&&db(r,e,n,s),s=s.parent}}function db(t,e,n,r){const s=Nl(e,t,r,!0);a_(()=>{jh(r[e],s)},n)}function Vc(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function da(t){return t.shapeFlag&128?t.ssContent:t}function Nl(t,e,n=et,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Nr();const a=No(n),c=an(e,n,t,o);return a(),Dr(),c});return r?s.unshift(i):s.push(i),i}}const Kn=t=>(e,n=et)=>{(!Zs||t==="sp")&&Nl(t,(...r)=>e(...r),n)},pb=Kn("bm"),Dl=Kn("m"),mb=Kn("bu"),o_=Kn("u"),Oo=Kn("bum"),a_=Kn("um"),gb=Kn("sp"),yb=Kn("rtg"),_b=Kn("rtc");function l_(t,e=et){Nl("ec",t,e)}const c_="components";function Tu(t,e){return h_(c_,t,!0,e)||t}const u_=Symbol.for("v-ndc");function vb(t){return He(t)?h_(c_,t,!1)||t:t||u_}function h_(t,e,n=!0,r=!1){const s=Ct||et;if(s){const i=s.type;{const a=ku(i,!1);if(a&&(a===e||a===Jt(e)||a===Cl(Jt(e))))return i}const o=fp(s[t]||i[t],e)||fp(s.appContext[t],e);return!o&&r?i:o}}function fp(t,e){return t&&(t[e]||t[Jt(e)]||t[Cl(Jt(e))])}function IL(t,e,n,r){let s;const i=n,o=he(t);if(o||He(t)){const a=o&&Xr(t);let c=!1;a&&(c=!Xt(t),t=Ol(t)),s=new Array(t.length);for(let u=0,h=t.length;u<h;u++)s[u]=e(c?Et(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(Le(t))if(t[Symbol.iterator])s=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const h=a[c];s[c]=e(t[h],h,c,i)}}else s=[];return s}const bu=t=>t?F_(t)?Fl(t):bu(t.parent):null,Wi=Ze(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>bu(t.parent),$root:t=>bu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Xh(t),$forceUpdate:t=>t.f||(t.f=()=>{Qh(t.update)}),$nextTick:t=>t.n||(t.n=ko.bind(t.proxy)),$watch:t=>jb.bind(t)}),Lc=(t,e)=>t!==De&&!t.__isScriptSetup&&Ce(t,e),Eb={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Lc(r,e))return o[e]=1,r[e];if(s!==De&&Ce(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Ce(u,e))return o[e]=3,i[e];if(n!==De&&Ce(n,e))return o[e]=4,n[e];Iu&&(o[e]=0)}}const h=Wi[e];let d,m;if(h)return e==="$attrs"&&vt(t.attrs,"get",""),h(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==De&&Ce(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,Ce(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Lc(s,e)?(s[e]=n,!0):r!==De&&Ce(r,e)?(r[e]=n,!0):Ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==De&&Ce(t,o)||Lc(e,o)||(a=i[0])&&Ce(a,o)||Ce(r,o)||Ce(Wi,o)||Ce(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function dp(t){return he(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Iu=!0;function wb(t){const e=Xh(t),n=t.proxy,r=t.ctx;Iu=!1,e.beforeCreate&&pp(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:h,beforeMount:d,mounted:m,beforeUpdate:g,updated:A,activated:x,deactivated:N,beforeDestroy:O,beforeUnmount:P,destroyed:_,unmounted:S,render:D,renderTracked:L,renderTriggered:b,errorCaptured:E,serverPrefetch:v,expose:w,inheritAttrs:k,components:R,directives:T,filters:ye}=e;if(u&&Tb(u,r,null),o)for(const fe in o){const ne=o[fe];de(ne)&&(r[fe]=ne.bind(n))}if(s){const fe=s.call(n,n);Le(fe)&&(t.data=Mr(fe))}if(Iu=!0,i)for(const fe in i){const ne=i[fe],qe=de(ne)?ne.bind(n,n):de(ne.get)?ne.get.bind(n,n):yn,en=!de(ne)&&de(ne.set)?ne.set.bind(n):yn,Wt=Ue({get:qe,set:en});Object.defineProperty(r,fe,{enumerable:!0,configurable:!0,get:()=>Wt.value,set:ze=>Wt.value=ze})}if(a)for(const fe in a)f_(a[fe],r,n,fe);if(c){const fe=de(c)?c.call(n):c;Reflect.ownKeys(fe).forEach(ne=>{$s(ne,fe[ne])})}h&&pp(h,t,"c");function re(fe,ne){he(ne)?ne.forEach(qe=>fe(qe.bind(n))):ne&&fe(ne.bind(n))}if(re(pb,d),re(Dl,m),re(mb,g),re(o_,A),re(r_,x),re(s_,N),re(l_,E),re(_b,L),re(yb,b),re(Oo,P),re(a_,S),re(gb,v),he(w))if(w.length){const fe=t.exposed||(t.exposed={});w.forEach(ne=>{Object.defineProperty(fe,ne,{get:()=>n[ne],set:qe=>n[ne]=qe})})}else t.exposed||(t.exposed={});D&&t.render===yn&&(t.render=D),k!=null&&(t.inheritAttrs=k),R&&(t.components=R),T&&(t.directives=T),v&&Yh(t)}function Tb(t,e,n=yn){he(t)&&(t=Au(t));for(const r in t){const s=t[r];let i;Le(s)?"default"in s?i=kt(s.from||r,s.default,!0):i=kt(s.from||r):i=kt(s),ot(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function pp(t,e,n){an(he(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function f_(t,e,n,r){let s=r.includes(".")?P_(n,r):()=>n[r];if(He(t)){const i=e[t];de(i)&&yr(s,i)}else if(de(t))yr(s,t.bind(n));else if(Le(t))if(he(t))t.forEach(i=>f_(i,e,n,r));else{const i=de(t.handler)?t.handler.bind(n):e[t.handler];de(i)&&yr(s,i,t)}}function Xh(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Qa(c,u,o,!0)),Qa(c,e,o)),Le(e)&&i.set(e,c),c}function Qa(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Qa(t,i,n,!0),s&&s.forEach(o=>Qa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=bb[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const bb={data:mp,props:gp,emits:gp,methods:Fi,computed:Fi,beforeCreate:St,created:St,beforeMount:St,mounted:St,beforeUpdate:St,updated:St,beforeDestroy:St,beforeUnmount:St,destroyed:St,unmounted:St,activated:St,deactivated:St,errorCaptured:St,serverPrefetch:St,components:Fi,directives:Fi,watch:Ab,provide:mp,inject:Ib};function mp(t,e){return e?t?function(){return Ze(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function Ib(t,e){return Fi(Au(t),Au(e))}function Au(t){if(he(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function St(t,e){return t?[...new Set([].concat(t,e))]:e}function Fi(t,e){return t?Ze(Object.create(null),t,e):e}function gp(t,e){return t?he(t)&&he(e)?[...new Set([...t,...e])]:Ze(Object.create(null),dp(t),dp(e??{})):e}function Ab(t,e){if(!t)return e;if(!e)return t;const n=Ze(Object.create(null),t);for(const r in e)n[r]=St(t[r],e[r]);return n}function d_(){return{app:null,config:{isNativeTag:lT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Rb=0;function Sb(t,e){return function(r,s=null){de(r)||(r=Ze({},r)),s!=null&&!Le(s)&&(s=null);const i=d_(),o=new WeakSet,a=[];let c=!1;const u=i.app={_uid:Rb++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:j_,get config(){return i.config},set config(h){},use(h,...d){return o.has(h)||(h&&de(h.install)?(o.add(h),h.install(u,...d)):de(h)&&(o.add(h),h(u,...d))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,d){return d?(i.components[h]=d,u):i.components[h]},directive(h,d){return d?(i.directives[h]=d,u):i.directives[h]},mount(h,d,m){if(!c){const g=u._ceVNode||Ve(r,s);return g.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),d&&e?e(g,h):t(g,h,m),c=!0,u._container=h,h.__vue_app__=u,Fl(g.component)}},onUnmount(h){a.push(h)},unmount(){c&&(an(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,d){return i.provides[h]=d,u},runWithContext(h){const d=Zr;Zr=u;try{return h()}finally{Zr=d}}};return u}}let Zr=null;function $s(t,e){if(et){let n=et.provides;const r=et.parent&&et.parent.provides;r===n&&(n=et.provides=Object.create(r)),n[t]=e}}function kt(t,e,n=!1){const r=et||Ct;if(r||Zr){const s=Zr?Zr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&de(e)?e.call(r&&r.proxy):e}}function p_(){return!!(et||Ct||Zr)}const m_={},g_=()=>Object.create(m_),y_=t=>Object.getPrototypeOf(t)===m_;function Pb(t,e,n,r=!1){const s={},i=g_();t.propsDefaults=Object.create(null),__(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Nn(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Cb(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Se(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let m=h[d];if(Ml(t.emitsOptions,m))continue;const g=e[m];if(c)if(Ce(i,m))g!==i[m]&&(i[m]=g,u=!0);else{const A=Jt(m);s[A]=Ru(c,a,A,g,t,!1)}else g!==i[m]&&(i[m]=g,u=!0)}}}else{__(t,e,s,i)&&(u=!0);let h;for(const d in a)(!e||!Ce(e,d)&&((h=Or(d))===d||!Ce(e,h)))&&(c?n&&(n[d]!==void 0||n[h]!==void 0)&&(s[d]=Ru(c,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!Ce(e,d))&&(delete i[d],u=!0)}u&&kn(t.attrs,"set","")}function __(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Us(c))continue;const u=e[c];let h;s&&Ce(s,h=Jt(c))?!i||!i.includes(h)?n[h]=u:(a||(a={}))[h]=u:Ml(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Se(n),u=a||De;for(let h=0;h<i.length;h++){const d=i[h];n[d]=Ru(s,c,d,u[d],t,!Ce(u,d))}}return o}function Ru(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Ce(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&de(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=No(s);r=u[n]=c.call(null,e),h()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Or(n))&&(r=!0))}return r}const kb=new WeakMap;function v_(t,e,n=!1){const r=n?kb:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!de(t)){const h=d=>{c=!0;const[m,g]=v_(d,e,!0);Ze(o,m),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!c)return Le(t)&&r.set(t,Ls),Ls;if(he(i))for(let h=0;h<i.length;h++){const d=Jt(i[h]);yp(d)&&(o[d]=De)}else if(i)for(const h in i){const d=Jt(h);if(yp(d)){const m=i[h],g=o[d]=he(m)||de(m)?{type:m}:Ze({},m),A=g.type;let x=!1,N=!0;if(he(A))for(let O=0;O<A.length;++O){const P=A[O],_=de(P)&&P.name;if(_==="Boolean"){x=!0;break}else _==="String"&&(N=!1)}else x=de(A)&&A.name==="Boolean";g[0]=x,g[1]=N,(x||Ce(g,"default"))&&a.push(d)}}const u=[o,a];return Le(t)&&r.set(t,u),u}function yp(t){return t[0]!=="$"&&!Us(t)}const E_=t=>t[0]==="_"||t==="$stable",Jh=t=>he(t)?t.map($t):[$t(t)],xb=(t,e,n)=>{if(e._n)return e;const r=ks((...s)=>Jh(e(...s)),n);return r._c=!1,r},w_=(t,e,n)=>{const r=t._ctx;for(const s in t){if(E_(s))continue;const i=t[s];if(de(i))e[s]=xb(s,i,r);else if(i!=null){const o=Jh(i);e[s]=()=>o}}},T_=(t,e)=>{const n=Jh(e);t.slots.default=()=>n},b_=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Ob=(t,e,n)=>{const r=t.slots=g_();if(t.vnode.shapeFlag&32){const s=e._;s?(b_(r,e,n),n&&by(r,"_",s,!0)):w_(e,r)}else e&&T_(t,e)},Nb=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=De;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:b_(s,e,n):(i=!e.$stable,w_(e,s)),o=e}else e&&(T_(t,e),o={default:1});if(i)for(const a in s)!E_(a)&&o[a]==null&&delete s[a]},ct=O_;function Db(t){return I_(t)}function Mb(t){return I_(t,lb)}function I_(t,e){const n=kl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:h,parentNode:d,nextSibling:m,setScopeId:g=yn,insertStaticContent:A}=t,x=(I,C,V,H=null,U=null,q=null,Y=void 0,G=null,K=!!C.dynamicChildren)=>{if(I===C)return;I&&!rn(I,C)&&(H=j(I),ze(I,U,q,!0),I=null),C.patchFlag===-2&&(K=!1,C.dynamicChildren=null);const{type:z,ref:ce,shapeFlag:J}=C;switch(z){case es:N(I,C,V,H);break;case it:O(I,C,V,H);break;case Ra:I==null&&P(C,V,H,Y);break;case Bt:R(I,C,V,H,U,q,Y,G,K);break;default:J&1?D(I,C,V,H,U,q,Y,G,K):J&6?T(I,C,V,H,U,q,Y,G,K):(J&64||J&128)&&z.process(I,C,V,H,U,q,Y,G,K,se)}ce!=null&&U&&co(ce,I&&I.ref,q,C||I,!C)},N=(I,C,V,H)=>{if(I==null)r(C.el=a(C.children),V,H);else{const U=C.el=I.el;C.children!==I.children&&u(U,C.children)}},O=(I,C,V,H)=>{I==null?r(C.el=c(C.children||""),V,H):C.el=I.el},P=(I,C,V,H)=>{[I.el,I.anchor]=A(I.children,C,V,H,I.el,I.anchor)},_=({el:I,anchor:C},V,H)=>{let U;for(;I&&I!==C;)U=m(I),r(I,V,H),I=U;r(C,V,H)},S=({el:I,anchor:C})=>{let V;for(;I&&I!==C;)V=m(I),s(I),I=V;s(C)},D=(I,C,V,H,U,q,Y,G,K)=>{C.type==="svg"?Y="svg":C.type==="math"&&(Y="mathml"),I==null?L(C,V,H,U,q,Y,G,K):v(I,C,U,q,Y,G,K)},L=(I,C,V,H,U,q,Y,G)=>{let K,z;const{props:ce,shapeFlag:J,transition:oe,dirs:ie}=I;if(K=I.el=o(I.type,q,ce&&ce.is,ce),J&8?h(K,I.children):J&16&&E(I.children,K,null,H,U,Fc(I,q),Y,G),ie&&dn(I,null,H,"created"),b(K,I,I.scopeId,Y,H),ce){for(const Pe in ce)Pe!=="value"&&!Us(Pe)&&i(K,Pe,null,ce[Pe],q,H);"value"in ce&&i(K,"value",null,ce.value,q),(z=ce.onVnodeBeforeMount)&&Nt(z,H,I)}ie&&dn(I,null,H,"beforeMount");const ue=A_(U,oe);ue&&oe.beforeEnter(K),r(K,C,V),((z=ce&&ce.onVnodeMounted)||ue||ie)&&ct(()=>{z&&Nt(z,H,I),ue&&oe.enter(K),ie&&dn(I,null,H,"mounted")},U)},b=(I,C,V,H,U)=>{if(V&&g(I,V),H)for(let q=0;q<H.length;q++)g(I,H[q]);if(U){let q=U.subTree;if(C===q||Xa(q.type)&&(q.ssContent===C||q.ssFallback===C)){const Y=U.vnode;b(I,Y,Y.scopeId,Y.slotScopeIds,U.parent)}}},E=(I,C,V,H,U,q,Y,G,K=0)=>{for(let z=K;z<I.length;z++){const ce=I[z]=G?ar(I[z]):$t(I[z]);x(null,ce,C,V,H,U,q,Y,G)}},v=(I,C,V,H,U,q,Y)=>{const G=C.el=I.el;let{patchFlag:K,dynamicChildren:z,dirs:ce}=C;K|=I.patchFlag&16;const J=I.props||De,oe=C.props||De;let ie;if(V&&jr(V,!1),(ie=oe.onVnodeBeforeUpdate)&&Nt(ie,V,C,I),ce&&dn(C,I,V,"beforeUpdate"),V&&jr(V,!0),(J.innerHTML&&oe.innerHTML==null||J.textContent&&oe.textContent==null)&&h(G,""),z?w(I.dynamicChildren,z,G,V,H,Fc(C,U),q):Y||ne(I,C,G,null,V,H,Fc(C,U),q,!1),K>0){if(K&16)k(G,J,oe,V,U);else if(K&2&&J.class!==oe.class&&i(G,"class",null,oe.class,U),K&4&&i(G,"style",J.style,oe.style,U),K&8){const ue=C.dynamicProps;for(let Pe=0;Pe<ue.length;Pe++){const Ae=ue[Pe],dt=J[Ae],rt=oe[Ae];(rt!==dt||Ae==="value")&&i(G,Ae,dt,rt,U,V)}}K&1&&I.children!==C.children&&h(G,C.children)}else!Y&&z==null&&k(G,J,oe,V,U);((ie=oe.onVnodeUpdated)||ce)&&ct(()=>{ie&&Nt(ie,V,C,I),ce&&dn(C,I,V,"updated")},H)},w=(I,C,V,H,U,q,Y)=>{for(let G=0;G<C.length;G++){const K=I[G],z=C[G],ce=K.el&&(K.type===Bt||!rn(K,z)||K.shapeFlag&70)?d(K.el):V;x(K,z,ce,null,H,U,q,Y,!0)}},k=(I,C,V,H,U)=>{if(C!==V){if(C!==De)for(const q in C)!Us(q)&&!(q in V)&&i(I,q,C[q],null,U,H);for(const q in V){if(Us(q))continue;const Y=V[q],G=C[q];Y!==G&&q!=="value"&&i(I,q,G,Y,U,H)}"value"in V&&i(I,"value",C.value,V.value,U)}},R=(I,C,V,H,U,q,Y,G,K)=>{const z=C.el=I?I.el:a(""),ce=C.anchor=I?I.anchor:a("");let{patchFlag:J,dynamicChildren:oe,slotScopeIds:ie}=C;ie&&(G=G?G.concat(ie):ie),I==null?(r(z,V,H),r(ce,V,H),E(C.children||[],V,ce,U,q,Y,G,K)):J>0&&J&64&&oe&&I.dynamicChildren?(w(I.dynamicChildren,oe,V,U,q,Y,G),(C.key!=null||U&&C===U.subTree)&&R_(I,C,!0)):ne(I,C,V,ce,U,q,Y,G,K)},T=(I,C,V,H,U,q,Y,G,K)=>{C.slotScopeIds=G,I==null?C.shapeFlag&512?U.ctx.activate(C,V,H,Y,K):ye(C,V,H,U,q,Y,K):ve(I,C,K)},ye=(I,C,V,H,U,q,Y)=>{const G=I.component=rI(I,H,U);if(xo(I)&&(G.ctx.renderer=se),sI(G,!1,Y),G.asyncDep){if(U&&U.registerDep(G,re,Y),!I.el){const K=G.subTree=Ve(it);O(null,K,C,V)}}else re(G,I,C,V,U,q,Y)},ve=(I,C,V)=>{const H=C.component=I.component;if(Wb(I,C,V))if(H.asyncDep&&!H.asyncResolved){fe(H,C,V);return}else H.next=C,H.update();else C.el=I.el,H.vnode=C},re=(I,C,V,H,U,q,Y)=>{const G=()=>{if(I.isMounted){let{next:J,bu:oe,u:ie,parent:ue,vnode:Pe}=I;{const pt=S_(I);if(pt){J&&(J.el=Pe.el,fe(I,J,Y)),pt.asyncDep.then(()=>{I.isUnmounted||G()});return}}let Ae=J,dt;jr(I,!1),J?(J.el=Pe.el,fe(I,J,Y)):J=Pe,oe&&js(oe),(dt=J.props&&J.props.onVnodeBeforeUpdate)&&Nt(dt,ue,J,Pe),jr(I,!0);const rt=Uc(I),at=I.subTree;I.subTree=rt,x(at,rt,d(at.el),j(at),I,U,q),J.el=rt.el,Ae===null&&Vl(I,rt.el),ie&&ct(ie,U),(dt=J.props&&J.props.onVnodeUpdated)&&ct(()=>Nt(dt,ue,J,Pe),U)}else{let J;const{el:oe,props:ie}=C,{bm:ue,m:Pe,parent:Ae,root:dt,type:rt}=I,at=Jr(C);if(jr(I,!1),ue&&js(ue),!at&&(J=ie&&ie.onVnodeBeforeMount)&&Nt(J,Ae,C),jr(I,!0),oe&&Oe){const pt=()=>{I.subTree=Uc(I),Oe(oe,I.subTree,I,U,null)};at&&rt.__asyncHydrate?rt.__asyncHydrate(oe,I,pt):pt()}else{dt.ce&&dt.ce._injectChildStyle(rt);const pt=I.subTree=Uc(I);x(null,pt,V,H,I,U,q),C.el=pt.el}if(Pe&&ct(Pe,U),!at&&(J=ie&&ie.onVnodeMounted)){const pt=C;ct(()=>Nt(J,Ae,pt),U)}(C.shapeFlag&256||Ae&&Jr(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&I.a&&ct(I.a,U),I.isMounted=!0,C=V=H=null}};I.scope.on();const K=I.effect=new ky(G);I.scope.off();const z=I.update=K.run.bind(K),ce=I.job=K.runIfDirty.bind(K);ce.i=I,ce.id=I.uid,K.scheduler=()=>Qh(ce),jr(I,!0),z()},fe=(I,C,V)=>{C.component=I;const H=I.vnode.props;I.vnode=C,I.next=null,Cb(I,C.props,H,V),Nb(I,C.children,V),Nr(),ap(I),Dr()},ne=(I,C,V,H,U,q,Y,G,K=!1)=>{const z=I&&I.children,ce=I?I.shapeFlag:0,J=C.children,{patchFlag:oe,shapeFlag:ie}=C;if(oe>0){if(oe&128){en(z,J,V,H,U,q,Y,G,K);return}else if(oe&256){qe(z,J,V,H,U,q,Y,G,K);return}}ie&8?(ce&16&&xt(z,U,q),J!==z&&h(V,J)):ce&16?ie&16?en(z,J,V,H,U,q,Y,G,K):xt(z,U,q,!0):(ce&8&&h(V,""),ie&16&&E(J,V,H,U,q,Y,G,K))},qe=(I,C,V,H,U,q,Y,G,K)=>{I=I||Ls,C=C||Ls;const z=I.length,ce=C.length,J=Math.min(z,ce);let oe;for(oe=0;oe<J;oe++){const ie=C[oe]=K?ar(C[oe]):$t(C[oe]);x(I[oe],ie,V,null,U,q,Y,G,K)}z>ce?xt(I,U,q,!0,!1,J):E(C,V,H,U,q,Y,G,K,J)},en=(I,C,V,H,U,q,Y,G,K)=>{let z=0;const ce=C.length;let J=I.length-1,oe=ce-1;for(;z<=J&&z<=oe;){const ie=I[z],ue=C[z]=K?ar(C[z]):$t(C[z]);if(rn(ie,ue))x(ie,ue,V,null,U,q,Y,G,K);else break;z++}for(;z<=J&&z<=oe;){const ie=I[J],ue=C[oe]=K?ar(C[oe]):$t(C[oe]);if(rn(ie,ue))x(ie,ue,V,null,U,q,Y,G,K);else break;J--,oe--}if(z>J){if(z<=oe){const ie=oe+1,ue=ie<ce?C[ie].el:H;for(;z<=oe;)x(null,C[z]=K?ar(C[z]):$t(C[z]),V,ue,U,q,Y,G,K),z++}}else if(z>oe)for(;z<=J;)ze(I[z],U,q,!0),z++;else{const ie=z,ue=z,Pe=new Map;for(z=ue;z<=oe;z++){const It=C[z]=K?ar(C[z]):$t(C[z]);It.key!=null&&Pe.set(It.key,z)}let Ae,dt=0;const rt=oe-ue+1;let at=!1,pt=0;const Jn=new Array(rt);for(z=0;z<rt;z++)Jn[z]=0;for(z=ie;z<=J;z++){const It=I[z];if(dt>=rt){ze(It,U,q,!0);continue}let Kt;if(It.key!=null)Kt=Pe.get(It.key);else for(Ae=ue;Ae<=oe;Ae++)if(Jn[Ae-ue]===0&&rn(It,C[Ae])){Kt=Ae;break}Kt===void 0?ze(It,U,q,!0):(Jn[Kt-ue]=z+1,Kt>=pt?pt=Kt:at=!0,x(It,C[Kt],V,null,U,q,Y,G,K),dt++)}const ms=at?Vb(Jn):Ls;for(Ae=ms.length-1,z=rt-1;z>=0;z--){const It=ue+z,Kt=C[It],gs=It+1<ce?C[It+1].el:H;Jn[z]===0?x(null,Kt,V,gs,U,q,Y,G,K):at&&(Ae<0||z!==ms[Ae]?Wt(Kt,V,gs,2):Ae--)}}},Wt=(I,C,V,H,U=null)=>{const{el:q,type:Y,transition:G,children:K,shapeFlag:z}=I;if(z&6){Wt(I.component.subTree,C,V,H);return}if(z&128){I.suspense.move(C,V,H);return}if(z&64){Y.move(I,C,V,se);return}if(Y===Bt){r(q,C,V);for(let J=0;J<K.length;J++)Wt(K[J],C,V,H);r(I.anchor,C,V);return}if(Y===Ra){_(I,C,V);return}if(H!==2&&z&1&&G)if(H===0)G.beforeEnter(q),r(q,C,V),ct(()=>G.enter(q),U);else{const{leave:J,delayLeave:oe,afterLeave:ie}=G,ue=()=>r(q,C,V),Pe=()=>{J(q,()=>{ue(),ie&&ie()})};oe?oe(q,ue,Pe):Pe()}else r(q,C,V)},ze=(I,C,V,H=!1,U=!1)=>{const{type:q,props:Y,ref:G,children:K,dynamicChildren:z,shapeFlag:ce,patchFlag:J,dirs:oe,cacheIndex:ie}=I;if(J===-2&&(U=!1),G!=null&&co(G,null,V,I,!0),ie!=null&&(C.renderCache[ie]=void 0),ce&256){C.ctx.deactivate(I);return}const ue=ce&1&&oe,Pe=!Jr(I);let Ae;if(Pe&&(Ae=Y&&Y.onVnodeBeforeUnmount)&&Nt(Ae,C,I),ce&6)hn(I.component,V,H);else{if(ce&128){I.suspense.unmount(V,H);return}ue&&dn(I,null,C,"beforeUnmount"),ce&64?I.type.remove(I,C,V,se,H):z&&!z.hasOnce&&(q!==Bt||J>0&&J&64)?xt(z,C,V,!1,!0):(q===Bt&&J&384||!U&&ce&16)&&xt(K,C,V),H&&We(I)}(Pe&&(Ae=Y&&Y.onVnodeUnmounted)||ue)&&ct(()=>{Ae&&Nt(Ae,C,I),ue&&dn(I,null,C,"unmounted")},V)},We=I=>{const{type:C,el:V,anchor:H,transition:U}=I;if(C===Bt){Xn(V,H);return}if(C===Ra){S(I);return}const q=()=>{s(V),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(I.shapeFlag&1&&U&&!U.persisted){const{leave:Y,delayLeave:G}=U,K=()=>Y(V,q);G?G(I.el,q,K):K()}else q()},Xn=(I,C)=>{let V;for(;I!==C;)V=m(I),s(I),I=V;s(C)},hn=(I,C,V)=>{const{bum:H,scope:U,job:q,subTree:Y,um:G,m:K,a:z}=I;Ya(K),Ya(z),H&&js(H),U.stop(),q&&(q.flags|=8,ze(Y,I,C,V)),G&&ct(G,C),ct(()=>{I.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&I.asyncDep&&!I.asyncResolved&&I.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},xt=(I,C,V,H=!1,U=!1,q=0)=>{for(let Y=q;Y<I.length;Y++)ze(I[Y],C,V,H,U)},j=I=>{if(I.shapeFlag&6)return j(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const C=m(I.anchor||I.el),V=C&&C[nb];return V?m(V):C};let Z=!1;const X=(I,C,V)=>{I==null?C._vnode&&ze(C._vnode,null,null,!0):x(C._vnode||null,I,C,null,null,null,V),C._vnode=I,Z||(Z=!0,ap(),Ka(),Z=!1)},se={p:x,um:ze,m:Wt,r:We,mt:ye,mc:E,pc:ne,pbc:w,n:j,o:t};let Te,Oe;return e&&([Te,Oe]=e(se)),{render:X,hydrate:Te,createApp:Sb(X,Te)}}function Fc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function jr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function A_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function R_(t,e,n=!1){const r=t.children,s=e.children;if(he(r)&&he(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=ar(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&R_(o,a)),a.type===es&&(a.el=o.el)}}function Vb(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function S_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:S_(e)}function Ya(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Lb=Symbol.for("v-scx"),Fb=()=>kt(Lb);function Ub(t,e){return Zh(t,null,e)}function yr(t,e,n){return Zh(t,e,n)}function Zh(t,e,n=De){const{immediate:r,deep:s,flush:i,once:o}=n,a=Ze({},n),c=e&&r||!e&&i!=="post";let u;if(Zs){if(i==="sync"){const g=Fb();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=yn,g.resume=yn,g.pause=yn,g}}const h=et;a.call=(g,A,x)=>an(g,h,A,x);let d=!1;i==="post"?a.scheduler=g=>{ct(g,h&&h.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(g,A)=>{A?g():Qh(g)}),a.augmentJob=g=>{e&&(g.flags|=4),d&&(g.flags|=2,h&&(g.id=h.uid,g.i=h))};const m=JT(t,e,a);return Zs&&(u?u.push(m):c&&m()),m}function jb(t,e,n){const r=this.proxy,s=He(t)?t.includes(".")?P_(r,t):()=>r[t]:t.bind(r,r);let i;de(e)?i=e:(i=e.handler,n=e);const o=No(this),a=Zh(s,i.bind(r),n);return o(),a}function P_(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Bb=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Jt(e)}Modifiers`]||t[`${Or(e)}Modifiers`];function $b(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||De;let s=n;const i=e.startsWith("update:"),o=i&&Bb(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>He(h)?h.trim():h)),o.number&&(s=n.map(mu)));let a,c=r[a=Cc(e)]||r[a=Cc(Jt(e))];!c&&i&&(c=r[a=Cc(Or(e))]),c&&an(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,an(u,t,6,s)}}function C_(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!de(t)){const c=u=>{const h=C_(u,e,!0);h&&(a=!0,Ze(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Le(t)&&r.set(t,null),null):(he(i)?i.forEach(c=>o[c]=null):Ze(o,i),Le(t)&&r.set(t,o),o)}function Ml(t,e){return!t||!Ro(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ce(t,e[0].toLowerCase()+e.slice(1))||Ce(t,Or(e))||Ce(t,e))}function Uc(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:u,renderCache:h,props:d,data:m,setupState:g,ctx:A,inheritAttrs:x}=t,N=Ga(t);let O,P;try{if(n.shapeFlag&4){const S=s||r,D=S;O=$t(u.call(D,S,h,d,g,m,A)),P=a}else{const S=e;O=$t(S.length>1?S(d,{attrs:a,slots:o,emit:c}):S(d,null)),P=e.props?a:qb(a)}}catch(S){Ki.length=0,fi(S,t,1),O=Ve(it)}let _=O;if(P&&x!==!1){const S=Object.keys(P),{shapeFlag:D}=_;S.length&&D&7&&(i&&S.some(Uh)&&(P=zb(P,i)),_=Un(_,P,!1,!0))}return n.dirs&&(_=Un(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&Ys(_,n.transition),O=_,Ga(N),O}function Hb(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(Js(s)){if(s.type!==it||s.children==="v-if"){if(n)return;n=s}}else return}return n}const qb=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ro(n))&&((e||(e={}))[n]=t[n]);return e},zb=(t,e)=>{const n={};for(const r in t)(!Uh(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Wb(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?_p(r,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const m=h[d];if(o[m]!==r[m]&&!Ml(u,m))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?_p(r,o,u):!0:!!o;return!1}function _p(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ml(n,i))return!0}return!1}function Vl({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Xa=t=>t.__isSuspense;let Su=0;const Kb={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,c,u){if(t==null)Gb(e,n,r,s,i,o,a,c,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}Qb(t,e,n,r,s,o,a,c,u)}},hydrate:Yb,normalize:Xb},k_=Kb;function uo(t,e){const n=t.props&&t.props[e];de(n)&&n()}function Gb(t,e,n,r,s,i,o,a,c){const{p:u,o:{createElement:h}}=c,d=h("div"),m=t.suspense=x_(t,s,r,e,d,n,i,o,a,c);u(null,m.pendingBranch=t.ssContent,d,null,r,m,i,o),m.deps>0?(uo(t,"onPending"),uo(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),Hs(m,t.ssFallback)):m.resolve(!1,!0)}function Qb(t,e,n,r,s,i,o,a,{p:c,um:u,o:{createElement:h}}){const d=e.suspense=t.suspense;d.vnode=e,e.el=t.el;const m=e.ssContent,g=e.ssFallback,{activeBranch:A,pendingBranch:x,isInFallback:N,isHydrating:O}=d;if(x)d.pendingBranch=m,rn(m,x)?(c(x,m,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0?d.resolve():N&&(O||(c(A,g,n,r,s,null,i,o,a),Hs(d,g)))):(d.pendingId=Su++,O?(d.isHydrating=!1,d.activeBranch=x):u(x,s,d),d.deps=0,d.effects.length=0,d.hiddenContainer=h("div"),N?(c(null,m,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0?d.resolve():(c(A,g,n,r,s,null,i,o,a),Hs(d,g))):A&&rn(m,A)?(c(A,m,n,r,s,d,i,o,a),d.resolve(!0)):(c(null,m,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0&&d.resolve()));else if(A&&rn(m,A))c(A,m,n,r,s,d,i,o,a),Hs(d,m);else if(uo(e,"onPending"),d.pendingBranch=m,m.shapeFlag&512?d.pendingId=m.component.suspenseId:d.pendingId=Su++,c(null,m,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0)d.resolve();else{const{timeout:P,pendingId:_}=d;P>0?setTimeout(()=>{d.pendingId===_&&d.fallback(g)},P):P===0&&d.fallback(g)}}function x_(t,e,n,r,s,i,o,a,c,u,h=!1){const{p:d,m,um:g,n:A,o:{parentNode:x,remove:N}}=u;let O;const P=Jb(t);P&&e&&e.pendingBranch&&(O=e.pendingId,e.deps++);const _=t.props?Iy(t.props.timeout):void 0,S=i,D={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:Su++,timeout:typeof _=="number"?_:-1,activeBranch:null,pendingBranch:null,isInFallback:!h,isHydrating:h,isUnmounted:!1,effects:[],resolve(L=!1,b=!1){const{vnode:E,activeBranch:v,pendingBranch:w,pendingId:k,effects:R,parentComponent:T,container:ye}=D;let ve=!1;D.isHydrating?D.isHydrating=!1:L||(ve=v&&w.transition&&w.transition.mode==="out-in",ve&&(v.transition.afterLeave=()=>{k===D.pendingId&&(m(w,ye,i===S?A(v):i,0),Eu(R))}),v&&(x(v.el)===ye&&(i=A(v)),g(v,T,D,!0)),ve||m(w,ye,i,0)),Hs(D,w),D.pendingBranch=null,D.isInFallback=!1;let re=D.parent,fe=!1;for(;re;){if(re.pendingBranch){re.effects.push(...R),fe=!0;break}re=re.parent}!fe&&!ve&&Eu(R),D.effects=[],P&&e&&e.pendingBranch&&O===e.pendingId&&(e.deps--,e.deps===0&&!b&&e.resolve()),uo(E,"onResolve")},fallback(L){if(!D.pendingBranch)return;const{vnode:b,activeBranch:E,parentComponent:v,container:w,namespace:k}=D;uo(b,"onFallback");const R=A(E),T=()=>{D.isInFallback&&(d(null,L,w,R,v,null,k,a,c),Hs(D,L))},ye=L.transition&&L.transition.mode==="out-in";ye&&(E.transition.afterLeave=T),D.isInFallback=!0,g(E,v,null,!0),ye||T()},move(L,b,E){D.activeBranch&&m(D.activeBranch,L,b,E),D.container=L},next(){return D.activeBranch&&A(D.activeBranch)},registerDep(L,b,E){const v=!!D.pendingBranch;v&&D.deps++;const w=L.vnode.el;L.asyncDep.catch(k=>{fi(k,L,0)}).then(k=>{if(L.isUnmounted||D.isUnmounted||D.pendingId!==L.suspenseId)return;L.asyncResolved=!0;const{vnode:R}=L;Cu(L,k,!1),w&&(R.el=w);const T=!w&&L.subTree.el;b(L,R,x(w||L.subTree.el),w?null:A(L.subTree),D,o,E),T&&N(T),Vl(L,R.el),v&&--D.deps===0&&D.resolve()})},unmount(L,b){D.isUnmounted=!0,D.activeBranch&&g(D.activeBranch,n,L,b),D.pendingBranch&&g(D.pendingBranch,n,L,b)}};return D}function Yb(t,e,n,r,s,i,o,a,c){const u=e.suspense=x_(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),h=c(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),h}function Xb(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=vp(r?n.default:n),t.ssFallback=r?vp(n.fallback):Ve(it)}function vp(t){let e;if(de(t)){const n=Xs&&t._c;n&&(t._d=!1,pn()),t=t(),n&&(t._d=!0,e=Mt,N_())}return he(t)&&(t=Hb(t)),t=$t(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function O_(t,e){e&&e.pendingBranch?he(t)?e.effects.push(...t):e.effects.push(t):Eu(t)}function Hs(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,Vl(r,s))}function Jb(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const Bt=Symbol.for("v-fgt"),es=Symbol.for("v-txt"),it=Symbol.for("v-cmt"),Ra=Symbol.for("v-stc"),Ki=[];let Mt=null;function pn(t=!1){Ki.push(Mt=t?null:[])}function N_(){Ki.pop(),Mt=Ki[Ki.length-1]||null}let Xs=1;function Ep(t,e=!1){Xs+=t,t<0&&Mt&&e&&(Mt.hasOnce=!0)}function D_(t){return t.dynamicChildren=Xs>0?Mt||Ls:null,N_(),Xs>0&&Mt&&Mt.push(t),t}function M_(t,e,n,r,s,i){return D_(Ut(t,e,n,r,s,i,!0))}function Kr(t,e,n,r,s){return D_(Ve(t,e,n,r,s,!0))}function Js(t){return t?t.__v_isVNode===!0:!1}function rn(t,e){return t.type===e.type&&t.key===e.key}const V_=({key:t})=>t??null,Sa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?He(t)||ot(t)||de(t)?{i:Ct,r:t,k:e,f:!!n}:t:null);function Ut(t,e=null,n=null,r=0,s=null,i=t===Bt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&V_(e),ref:e&&Sa(e),scopeId:Yy,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ct};return a?(ef(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=He(n)?8:16),Xs>0&&!o&&Mt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Mt.push(c),c}const Ve=Zb;function Zb(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===u_)&&(t=it),Js(t)){const a=Un(t,e,!0);return n&&ef(a,n),Xs>0&&!i&&Mt&&(a.shapeFlag&6?Mt[Mt.indexOf(t)]=a:Mt.push(a)),a.patchFlag=-2,a}if(lI(t)&&(t=t.__vccOpts),e){e=L_(e);let{class:a,style:c}=e;a&&!He(a)&&(e.class=Po(a)),Le(c)&&(Gh(c)&&!he(c)&&(c=Ze({},c)),e.style=xl(c))}const o=He(t)?1:Xa(t)?128:Xy(t)?64:Le(t)?4:de(t)?2:0;return Ut(t,e,n,r,s,o,i,!0)}function L_(t){return t?Gh(t)||y_(t)?Ze({},t):t:null}function Un(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,u=e?eI(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&V_(u),ref:e&&e.ref?n&&i?he(i)?i.concat(Sa(e)):[i,Sa(e)]:Sa(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Bt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Un(t.ssContent),ssFallback:t.ssFallback&&Un(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Ys(h,c.clone(h)),h}function Os(t=" ",e=0){return Ve(es,null,t,e)}function AL(t="",e=!1){return e?(pn(),Kr(it,null,t)):Ve(it,null,t)}function $t(t){return t==null||typeof t=="boolean"?Ve(it):he(t)?Ve(Bt,null,t.slice()):Js(t)?ar(t):Ve(es,null,String(t))}function ar(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Un(t)}function ef(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(he(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ef(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!y_(e)?e._ctx=Ct:s===3&&Ct&&(Ct.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:Ct},n=32):(e=String(e),r&64?(n=16,e=[Os(e)]):n=8);t.children=e,t.shapeFlag|=n}function eI(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Po([e.class,r.class]));else if(s==="style")e.style=xl([e.style,r.style]);else if(Ro(s)){const i=e[s],o=r[s];o&&i!==o&&!(he(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Nt(t,e,n,r=null){an(t,e,7,[n,r])}const tI=d_();let nI=0;function rI(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||tI,i={uid:nI++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Py(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:v_(r,s),emitsOptions:C_(r,s),emit:null,emitted:null,propsDefaults:De,inheritAttrs:r.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=$b.bind(null,i),t.ce&&t.ce(i),i}let et=null;const Ll=()=>et||Ct;let Ja,Pu;{const t=kl(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ja=e("__VUE_INSTANCE_SETTERS__",n=>et=n),Pu=e("__VUE_SSR_SETTERS__",n=>Zs=n)}const No=t=>{const e=et;return Ja(t),t.scope.on(),()=>{t.scope.off(),Ja(e)}},wp=()=>{et&&et.scope.off(),Ja(null)};function F_(t){return t.vnode.shapeFlag&4}let Zs=!1;function sI(t,e=!1,n=!1){e&&Pu(e);const{props:r,children:s}=t.vnode,i=F_(t);Pb(t,r,i,e),Ob(t,s,n);const o=i?iI(t,e):void 0;return e&&Pu(!1),o}function iI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Eb);const{setup:r}=n;if(r){Nr();const s=t.setupContext=r.length>1?aI(t):null,i=No(t),o=Co(r,t,0,[t.props,s]),a=Ey(o);if(Dr(),i(),(a||t.sp)&&!Jr(t)&&Yh(t),a){if(o.then(wp,wp),e)return o.then(c=>{Cu(t,c,e)}).catch(c=>{fi(c,t,0)});t.asyncDep=o}else Cu(t,o,e)}else U_(t,e)}function Cu(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Le(e)&&(t.setupState=Wy(e)),U_(t,n)}let Tp;function U_(t,e,n){const r=t.type;if(!t.render){if(!e&&Tp&&!r.render){const s=r.template||Xh(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=Ze(Ze({isCustomElement:i,delimiters:a},o),c);r.render=Tp(s,u)}}t.render=r.render||yn}{const s=No(t);Nr();try{wb(t)}finally{Dr(),s()}}}const oI={get(t,e){return vt(t,"get",""),t[e]}};function aI(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,oI),slots:t.slots,emit:t.emit,expose:e}}function Fl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Wy($T(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Wi)return Wi[n](t)},has(e,n){return n in e||n in Wi}})):t.proxy}function ku(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function lI(t){return de(t)&&"__vccOpts"in t}const Ue=(t,e)=>YT(t,e,Zs);function Ht(t,e,n){const r=arguments.length;return r===2?Le(e)&&!he(e)?Js(e)?Ve(t,null,[e]):Ve(t,e):Ve(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Js(n)&&(n=[n]),Ve(t,e,n))}const j_="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xu;const bp=typeof window<"u"&&window.trustedTypes;if(bp)try{xu=bp.createPolicy("vue",{createHTML:t=>t})}catch{}const B_=xu?t=>xu.createHTML(t):t=>t,cI="http://www.w3.org/2000/svg",uI="http://www.w3.org/1998/Math/MathML",Cn=typeof document<"u"?document:null,Ip=Cn&&Cn.createElement("template"),hI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Cn.createElementNS(cI,t):e==="mathml"?Cn.createElementNS(uI,t):n?Cn.createElement(t,{is:n}):Cn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Cn.createTextNode(t),createComment:t=>Cn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Cn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ip.innerHTML=B_(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Ip.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},nr="transition",Mi="animation",ho=Symbol("_vtc"),$_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},fI=Ze({},Jy,$_),dI=t=>(t.displayName="Transition",t.props=fI,t),pI=dI((t,{slots:e})=>Ht(ib,mI(t),e)),Br=(t,e=[])=>{he(t)?t.forEach(n=>n(...e)):t&&t(...e)},Ap=t=>t?he(t)?t.some(e=>e.length>1):t.length>1:!1;function mI(t){const e={};for(const R in t)R in $_||(e[R]=t[R]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:h=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,A=gI(s),x=A&&A[0],N=A&&A[1],{onBeforeEnter:O,onEnter:P,onEnterCancelled:_,onLeave:S,onLeaveCancelled:D,onBeforeAppear:L=O,onAppear:b=P,onAppearCancelled:E=_}=e,v=(R,T,ye,ve)=>{R._enterCancelled=ve,$r(R,T?h:a),$r(R,T?u:o),ye&&ye()},w=(R,T)=>{R._isLeaving=!1,$r(R,d),$r(R,g),$r(R,m),T&&T()},k=R=>(T,ye)=>{const ve=R?b:P,re=()=>v(T,R,ye);Br(ve,[T,re]),Rp(()=>{$r(T,R?c:i),Sn(T,R?h:a),Ap(ve)||Sp(T,r,x,re)})};return Ze(e,{onBeforeEnter(R){Br(O,[R]),Sn(R,i),Sn(R,o)},onBeforeAppear(R){Br(L,[R]),Sn(R,c),Sn(R,u)},onEnter:k(!1),onAppear:k(!0),onLeave(R,T){R._isLeaving=!0;const ye=()=>w(R,T);Sn(R,d),R._enterCancelled?(Sn(R,m),kp()):(kp(),Sn(R,m)),Rp(()=>{R._isLeaving&&($r(R,d),Sn(R,g),Ap(S)||Sp(R,r,N,ye))}),Br(S,[R,ye])},onEnterCancelled(R){v(R,!1,void 0,!0),Br(_,[R])},onAppearCancelled(R){v(R,!0,void 0,!0),Br(E,[R])},onLeaveCancelled(R){w(R),Br(D,[R])}})}function gI(t){if(t==null)return null;if(Le(t))return[jc(t.enter),jc(t.leave)];{const e=jc(t);return[e,e]}}function jc(t){return Iy(t)}function Sn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ho]||(t[ho]=new Set)).add(e)}function $r(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[ho];n&&(n.delete(e),n.size||(t[ho]=void 0))}function Rp(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let yI=0;function Sp(t,e,n,r){const s=t._endId=++yI,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=_I(t,e);if(!o)return r();const u=o+"end";let h=0;const d=()=>{t.removeEventListener(u,m),i()},m=g=>{g.target===t&&++h>=c&&d()};setTimeout(()=>{h<c&&d()},a+1),t.addEventListener(u,m)}function _I(t,e){const n=window.getComputedStyle(t),r=A=>(n[A]||"").split(", "),s=r(`${nr}Delay`),i=r(`${nr}Duration`),o=Pp(s,i),a=r(`${Mi}Delay`),c=r(`${Mi}Duration`),u=Pp(a,c);let h=null,d=0,m=0;e===nr?o>0&&(h=nr,d=o,m=i.length):e===Mi?u>0&&(h=Mi,d=u,m=c.length):(d=Math.max(o,u),h=d>0?o>u?nr:Mi:null,m=h?h===nr?i.length:c.length:0);const g=h===nr&&/\b(transform|all)(,|$)/.test(r(`${nr}Property`).toString());return{type:h,timeout:d,propCount:m,hasTransform:g}}function Pp(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Cp(n)+Cp(t[r])))}function Cp(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function kp(){return document.body.offsetHeight}function vI(t,e,n){const r=t[ho];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const xp=Symbol("_vod"),EI=Symbol("_vsh"),wI=Symbol(""),TI=/(^|;)\s*display\s*:/;function bI(t,e,n){const r=t.style,s=He(n);let i=!1;if(n&&!s){if(e)if(He(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Pa(r,a,"")}else for(const o in e)n[o]==null&&Pa(r,o,"");for(const o in n)o==="display"&&(i=!0),Pa(r,o,n[o])}else if(s){if(e!==n){const o=r[wI];o&&(n+=";"+o),r.cssText=n,i=TI.test(n)}}else e&&t.removeAttribute("style");xp in t&&(t[xp]=i?r.display:"",t[EI]&&(r.display="none"))}const Op=/\s*!important$/;function Pa(t,e,n){if(he(n))n.forEach(r=>Pa(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=II(t,e);Op.test(n)?t.setProperty(Or(r),n.replace(Op,""),"important"):t[r]=n}}const Np=["Webkit","Moz","ms"],Bc={};function II(t,e){const n=Bc[e];if(n)return n;let r=Jt(e);if(r!=="filter"&&r in t)return Bc[e]=r;r=Cl(r);for(let s=0;s<Np.length;s++){const i=Np[s]+r;if(i in t)return Bc[e]=i}return e}const Dp="http://www.w3.org/1999/xlink";function Mp(t,e,n,r,s,i=ET(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Dp,e.slice(6,e.length)):t.setAttributeNS(Dp,e,n):n==null||i&&!Ay(n)?t.removeAttribute(e):t.setAttribute(e,i?"":xr(n)?String(n):n)}function Vp(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?B_(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Ay(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Is(t,e,n,r){t.addEventListener(e,n,r)}function AI(t,e,n,r){t.removeEventListener(e,n,r)}const Lp=Symbol("_vei");function RI(t,e,n,r,s=null){const i=t[Lp]||(t[Lp]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=SI(e);if(r){const u=i[e]=kI(r,s);Is(t,a,u,c)}else o&&(AI(t,a,o,c),i[e]=void 0)}}const Fp=/(?:Once|Passive|Capture)$/;function SI(t){let e;if(Fp.test(t)){e={};let r;for(;r=t.match(Fp);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Or(t.slice(2)),e]}let $c=0;const PI=Promise.resolve(),CI=()=>$c||(PI.then(()=>$c=0),$c=Date.now());function kI(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;an(xI(r,n.value),e,5,[r])};return n.value=t,n.attached=CI(),n}function xI(t,e){if(he(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Up=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,OI=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?vI(t,r,o):e==="style"?bI(t,n,r):Ro(e)?Uh(e)||RI(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):NI(t,e,r,o))?(Vp(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Mp(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!He(r))?Vp(t,Jt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Mp(t,e,r,o))};function NI(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Up(e)&&de(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Up(e)&&He(n)?!1:e in t}const jp=t=>{const e=t.props["onUpdate:modelValue"]||!1;return he(e)?n=>js(e,n):e};function DI(t){t.target.composing=!0}function Bp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Hc=Symbol("_assign"),MI={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Hc]=jp(s);const i=r||s.props&&s.props.type==="number";Is(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=mu(a)),t[Hc](a)}),n&&Is(t,"change",()=>{t.value=t.value.trim()}),e||(Is(t,"compositionstart",DI),Is(t,"compositionend",Bp),Is(t,"change",Bp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Hc]=jp(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?mu(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},VI=["ctrl","shift","alt","meta"],LI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>VI.some(n=>t[`${n}Key`]&&!e.includes(n))},RL=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=LI[e[o]];if(a&&a(s,e))return}return t(s,...i)})},FI={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},UI=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=Or(s.key);if(e.some(o=>o===i||FI[o]===i))return t(s)})},H_=Ze({patchProp:OI},hI);let Gi,$p=!1;function jI(){return Gi||(Gi=Db(H_))}function BI(){return Gi=$p?Gi:Mb(H_),$p=!0,Gi}const $I=(...t)=>{const e=jI().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=z_(r);if(!s)return;const i=e._component;!de(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,q_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},HI=(...t)=>{const e=BI().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=z_(r);if(s)return n(s,!0,q_(s))},e};function q_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function z_(t){return He(t)?document.querySelector(t):t}const qI=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,zI=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,WI=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function KI(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){GI(t);return}return e}function GI(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function Za(t,e={}){if(typeof t!="string")return t;const n=t.trim();if(t[0]==='"'&&t.endsWith('"')&&!t.includes("\\"))return n.slice(1,-1);if(n.length<=9){const r=n.toLowerCase();if(r==="true")return!0;if(r==="false")return!1;if(r==="undefined")return;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r==="-infinity")return Number.NEGATIVE_INFINITY}if(!WI.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(qI.test(t)||zI.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,KI)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const QI=/#/g,YI=/&/g,XI=/\//g,JI=/=/g,tf=/\+/g,ZI=/%5e/gi,eA=/%60/gi,tA=/%7c/gi,nA=/%20/gi;function rA(t){return encodeURI(""+t).replace(tA,"|")}function Ou(t){return rA(typeof t=="string"?t:JSON.stringify(t)).replace(tf,"%2B").replace(nA,"+").replace(QI,"%23").replace(YI,"%26").replace(eA,"`").replace(ZI,"^").replace(XI,"%2F")}function qc(t){return Ou(t).replace(JI,"%3D")}function el(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function sA(t){return el(t.replace(tf," "))}function iA(t){return el(t.replace(tf," "))}function W_(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=sA(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=iA(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function oA(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${qc(t)}=${Ou(n)}`).join("&"):`${qc(t)}=${Ou(e)}`:qc(t)}function aA(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>oA(e,t[e])).filter(Boolean).join("&")}const lA=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,cA=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,uA=/^([/\\]\s*){2,}[^/\\]/,hA=/^[\s\0]*(blob|data|javascript|vbscript):$/i,fA=/\/$|\/\?|\/#/,dA=/^\.?\//;function Gn(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?lA.test(t):cA.test(t)||(e.acceptRelative?uA.test(t):!1)}function pA(t){return!!t&&hA.test(t)}function Nu(t="",e){return e?fA.test(t):t.endsWith("/")}function Ul(t="",e){if(!e)return(Nu(t)?t.slice(0,-1):t)||"/";if(!Nu(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");s>=0&&(n=t.slice(0,s),r=t.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function tl(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(Nu(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");if(s>=0&&(n=t.slice(0,s),r=t.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function mA(t=""){return t.startsWith("/")}function Hp(t=""){return mA(t)?t:"/"+t}function gA(t,e){if(G_(e)||Gn(t))return t;const n=Ul(e);return t.startsWith(n)?t:jl(n,t)}function qp(t,e){if(G_(e))return t;const n=Ul(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function K_(t,e){const n=vA(t),r={...W_(n.search),...e};return n.search=aA(r),EA(n)}function G_(t){return!t||t==="/"}function yA(t){return t&&t!=="/"}function jl(t,...e){let n=t||"";for(const r of e.filter(s=>yA(s)))if(n){const s=r.replace(dA,"");n=tl(n)+s}else n=r;return n}function Q_(...t){var o,a,c,u;const e=/\/(?!\/)/,n=t.filter(Boolean),r=[];let s=0;for(const h of n)if(!(!h||h==="/")){for(const[d,m]of h.split(e).entries())if(!(!m||m===".")){if(m===".."){if(r.length===1&&Gn(r[0]))continue;r.pop(),s--;continue}if(d===1&&((o=r[r.length-1])!=null&&o.endsWith(":/"))){r[r.length-1]+="/"+m;continue}r.push(m),s++}}let i=r.join("/");return s>=0?(a=n[0])!=null&&a.startsWith("/")&&!i.startsWith("/")?i="/"+i:(c=n[0])!=null&&c.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,(u=n[n.length-1])!=null&&u.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function _A(t,e,n={}){return n.trailingSlash||(t=tl(t),e=tl(e)),n.leadingSlash||(t=Hp(t),e=Hp(e)),n.encoding||(t=el(t),e=el(e)),t===e}const Y_=Symbol.for("ufo:protocolRelative");function vA(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,d,m=""]=n;return{protocol:d.toLowerCase(),pathname:m,href:d+m,auth:"",host:"",search:"",hash:""}}if(!Gn(t,{acceptRelative:!0}))return zp(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:c,search:u,hash:h}=zp(a);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:c,search:u,hash:h,[Y_]:!r}}function zp(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function EA(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[Y_]?(t.protocol||"")+"//":"")+s+i+e+n+r}class wA extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function TA(t){var c,u,h,d,m;const e=((c=t.error)==null?void 0:c.message)||((u=t.error)==null?void 0:u.toString())||"",n=((h=t.request)==null?void 0:h.method)||((d=t.options)==null?void 0:d.method)||"GET",r=((m=t.request)==null?void 0:m.url)||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,a=new wA(o,t.error?{cause:t.error}:void 0);for(const g of["request","options","response"])Object.defineProperty(a,g,{get(){return t[g]}});for(const[g,A]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,g,{get(){return t.response&&t.response[A]}});return a}const bA=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Wp(t="GET"){return bA.has(t.toUpperCase())}function IA(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const AA=new Set(["image/svg","application/xml","application/xhtml","application/html"]),RA=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function SA(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return RA.test(e)?"json":AA.has(e)||e.startsWith("text/")?"text":"blob"}function PA(t,e,n,r){const s=CA((e==null?void 0:e.headers)??(t==null?void 0:t.headers),n==null?void 0:n.headers,r);let i;return(n!=null&&n.query||n!=null&&n.params||e!=null&&e.params||e!=null&&e.query)&&(i={...n==null?void 0:n.params,...n==null?void 0:n.query,...e==null?void 0:e.params,...e==null?void 0:e.query}),{...n,...e,query:i,params:i,headers:s}}function CA(t,e,n){if(!e)return new n(t);const r=new n(e);if(t)for(const[s,i]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))r.set(s,i);return r}async function pa(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const kA=new Set([408,409,425,429,500,502,503,504]),xA=new Set([101,204,205,304]);function X_(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(a){const c=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!c){let h;typeof a.options.retry=="number"?h=a.options.retry:h=Wp(a.options.method)?0:1;const d=a.response&&a.response.status||500;if(h>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(d):kA.has(d))){const m=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return m>0&&await new Promise(g=>setTimeout(g,m)),i(a.request,{...a.options,retry:h-1})}}const u=TA(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,i),u}const i=async function(c,u={}){const h={request:c,options:PA(c,u,t.defaults,n),response:void 0,error:void 0};h.options.method&&(h.options.method=h.options.method.toUpperCase()),h.options.onRequest&&await pa(h,h.options.onRequest),typeof h.request=="string"&&(h.options.baseURL&&(h.request=gA(h.request,h.options.baseURL)),h.options.query&&(h.request=K_(h.request,h.options.query),delete h.options.query),"query"in h.options&&delete h.options.query,"params"in h.options&&delete h.options.params),h.options.body&&Wp(h.options.method)&&(IA(h.options.body)?(h.options.body=typeof h.options.body=="string"?h.options.body:JSON.stringify(h.options.body),h.options.headers=new n(h.options.headers||{}),h.options.headers.has("content-type")||h.options.headers.set("content-type","application/json"),h.options.headers.has("accept")||h.options.headers.set("accept","application/json")):("pipeTo"in h.options.body&&typeof h.options.body.pipeTo=="function"||typeof h.options.body.pipe=="function")&&("duplex"in h.options||(h.options.duplex="half")));let d;if(!h.options.signal&&h.options.timeout){const g=new r;d=setTimeout(()=>{const A=new Error("[TimeoutError]: The operation was aborted due to timeout");A.name="TimeoutError",A.code=23,g.abort(A)},h.options.timeout),h.options.signal=g.signal}try{h.response=await e(h.request,h.options)}catch(g){return h.error=g,h.options.onRequestError&&await pa(h,h.options.onRequestError),await s(h)}finally{d&&clearTimeout(d)}if((h.response.body||h.response._bodyInit)&&!xA.has(h.response.status)&&h.options.method!=="HEAD"){const g=(h.options.parseResponse?"json":h.options.responseType)||SA(h.response.headers.get("content-type")||"");switch(g){case"json":{const A=await h.response.text(),x=h.options.parseResponse||Za;h.response._data=x(A);break}case"stream":{h.response._data=h.response.body||h.response._bodyInit;break}default:h.response._data=await h.response[g]()}}return h.options.onResponse&&await pa(h,h.options.onResponse),!h.options.ignoreResponseError&&h.response.status>=400&&h.response.status<600?(h.options.onResponseError&&await pa(h,h.options.onResponseError),await s(h)):h.response},o=async function(c,u){return(await i(c,u))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={},c={})=>X_({...t,...c,defaults:{...t.defaults,...c.defaults,...a}}),o}const nl=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),OA=nl.fetch?(...t)=>nl.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),NA=nl.Headers,DA=nl.AbortController,MA=X_({fetch:OA,Headers:NA,AbortController:DA}),VA=MA,LA=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},rl=LA().app,FA=()=>rl.baseURL,UA=()=>rl.buildAssetsDir,nf=(...t)=>Q_(J_(),UA(),...t),J_=(...t)=>{const e=rl.cdnURL||rl.baseURL;return t.length?Q_(e,...t):e};globalThis.__buildAssetsURL=nf,globalThis.__publicAssetsURL=J_;globalThis.$fetch||(globalThis.$fetch=VA.create({baseURL:FA()}));function Du(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?Du(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const jA={run:t=>t()},BA=()=>jA,Z_=typeof console.createTask<"u"?console.createTask:BA;function $A(t,e){const n=e.shift(),r=Z_(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function HA(t,e){const n=e.shift(),r=Z_(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function zc(t,e){for(const n of[...t])n(e)}class qA{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Du(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=Du(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith($A,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(HA,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&zc(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&zc(this._after,s)}):(this._after&&s&&zc(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function ev(){return new qA}function zA(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s&&e===void 0){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{r(o),e=o;try{return s?s.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const c=()=>{e=o},u=()=>e===o?c:void 0;Mu.add(u);try{const h=s?s.run(o,a):a();return n||(e=void 0),await h}finally{Mu.delete(u)}}}}function WA(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=zA({...t,...r})),e[n],e[n]}}}const sl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},Kp="__unctx__",KA=sl[Kp]||(sl[Kp]=WA()),GA=(t,e={})=>KA.get(t,e),Gp="__unctx_async_handlers__",Mu=sl[Gp]||(sl[Gp]=new Set);function qs(t){const e=[];for(const s of Mu){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const Vu=!1,QA=!1,YA={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},XA=null,JA="#__nuxt",tv="nuxt-app",Qp=36e5,ZA="vite:preloadError";function nv(t=tv){return GA(t,{asyncContext:!1})}const eR="__nuxt_plugin";function tR(t){var s;let e=0;const n={_id:t.id||tv||"nuxt-app",_scope:TT(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.14.1592"},get vue(){return n.vueApp.version}},payload:Nn({...((s=t.ssrContext)==null?void 0:s.payload)||{},data:Nn({}),state:Mr({}),once:new Set,_errors:Nn({})}),static:{data:{}},runWithContext(i){return n._scope.active&&!Cy()?n._scope.run(()=>Yp(n,i)):Yp(n,i)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let i=!1;return()=>{if(!i&&(i=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:Nn({}),_payloadRevivers:{},...t};{const i=window.__NUXT__;if(i)for(const o in i)switch(o){case"data":case"state":case"_errors":Object.assign(n.payload[o],i[o]);break;default:n.payload[o]=i[o]}}n.hooks=ev(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(i,o)=>{const a="$"+i;ma(n,a,o),ma(n.vueApp.config.globalProperties,a,o)},ma(n.vueApp,"$nuxt",n),ma(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(ZA,o=>{n.callHook("app:chunkError",{error:o.payload}),(n.isHydrating||o.payload.message.includes("Unable to preload CSS"))&&o.preventDefault()}),window.useNuxtApp=window.useNuxtApp||Ke;const i=n.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});n.hook("app:mounted",i)}const r=n.payload.config;return n.provide("config",r),n}function nR(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function rR(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function sR(t,e){const n=[],r=[],s=[],i=[];let o=0;async function a(c){var h;const u=((h=c.dependsOn)==null?void 0:h.filter(d=>e.some(m=>m._name===d)&&!n.includes(d)))??[];if(u.length>0)r.push([new Set(u),c]);else{const d=rR(t,c).then(async()=>{c._name&&(n.push(c._name),await Promise.all(r.map(async([m,g])=>{m.has(c._name)&&(m.delete(c._name),m.size===0&&(o++,await a(g)))})))});c.parallel?s.push(d.catch(m=>i.push(m))):await d}}for(const c of e)nR(t,c);for(const c of e)await a(c);if(await Promise.all(s),o)for(let c=0;c<o;c++)await Promise.all(s);if(i.length)throw i[0]}function un(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[eR]:!0,_name:e})}function Yp(t,e,n){const r=()=>e();return nv(t._id).set(t),t.vueApp.runWithContext(r)}function iR(t){var n;let e;return p_()&&(e=(n=Ll())==null?void 0:n.appContext.app.$nuxt),e=e||nv(t).tryUse(),e||null}function Ke(t){const e=iR(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function di(t){return Ke().$config}function ma(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function oR(t,e){return{ctx:{table:t},matchAll:n=>sv(n,t)}}function rv(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,s])=>[r,rv(s)])):new Map(Object.entries(t[n]));return e}function aR(t){return oR(rv(t))}function sv(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const r=[];for(const[i,o]of Xp(e.wildcard))(t===i||t.startsWith(i+"/"))&&r.push(o);for(const[i,o]of Xp(e.dynamic))if(t.startsWith(i+"/")){const a="/"+t.slice(i.length).split("/").splice(2).join("/");r.push(...sv(a,o))}const s=e.static.get(t);return s&&r.push(s),r.filter(Boolean)}function Xp(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function Wc(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function Lu(t,e,n=".",r){if(!Wc(e))return Lu(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:Wc(o)&&Wc(s[i])?s[i]=Lu(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function lR(t){return(...e)=>e.reduce((n,r)=>Lu(n,r,"",t),{})}const iv=lR();function cR(t,e){try{return e in t}catch{return!1}}var uR=Object.defineProperty,hR=(t,e,n)=>e in t?uR(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,zr=(t,e,n)=>(hR(t,typeof e!="symbol"?e+"":e,n),n);class Fu extends Error{constructor(e,n={}){super(e,n),zr(this,"statusCode",500),zr(this,"fatal",!1),zr(this,"unhandled",!1),zr(this,"statusMessage"),zr(this,"data"),zr(this,"cause"),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const e={message:this.message,statusCode:ju(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=ov(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}zr(Fu,"__h3_error__",!0);function Uu(t){if(typeof t=="string")return new Fu(t);if(fR(t))return t;const e=new Fu(t.message??t.statusMessage??"",{cause:t.cause||t});if(cR(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=ju(t.statusCode,e.statusCode):t.status&&(e.statusCode=ju(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;ov(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function fR(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const dR=/[^\u0009\u0020-\u007E]/g;function ov(t=""){return t.replace(dR,"")}function ju(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const pR=Symbol("layout-meta"),Bl=Symbol("route"),Lt=()=>{var t;return(t=Ke())==null?void 0:t.$router},av=()=>p_()?kt(Bl,Ke()._route):Ke()._route;const mR=()=>{try{if(Ke()._processingMiddleware)return!0}catch{return!1}return!1},gR=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:"path"in t?Bu(t):Lt().resolve(t).href;if(e!=null&&e.open){const{target:c="_blank",windowFeatures:u={}}=e.open,h=Object.entries(u).filter(([d,m])=>m!==void 0).map(([d,m])=>`${d.toLowerCase()}=${m}`).join(", ");return open(n,c,h),Promise.resolve()}const r=Gn(n,{acceptRelative:!0}),s=(e==null?void 0:e.external)||r;if(s){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:c}=new URL(n,window.location.href);if(c&&pA(c))throw new Error(`Cannot navigate to a URL with '${c}' protocol.`)}const i=mR();if(!s&&i)return t;const o=Lt(),a=Ke();return s?(a._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(t):o.push(t)};function Bu(t){return K_(t.path||"",t.query||{})+(t.hash||"")}const lv="__nuxt_error",$l=()=>KT(Ke().payload,"error"),Ns=t=>{const e=Hl(t);try{const n=Ke(),r=$l();n.hooks.callHook("app:error",e),r.value=r.value||e}catch{throw e}return e},yR=async(t={})=>{const e=Ke(),n=$l();e.callHook("app:error:cleared",t),t.redirect&&await Lt().replace(t.redirect),n.value=XA},_R=t=>!!t&&typeof t=="object"&&lv in t,Hl=t=>{const e=Uu(t);return Object.defineProperty(e,lv,{value:!0,configurable:!1,writable:!1}),e};function Jp(t){const e=ER(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let s=0;s<n.byteLength;s++)r.setUint8(s,e.charCodeAt(s));return n}const vR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function ER(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let s=0;s<t.length;s++)n<<=6,n|=vR.indexOf(t[s]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const wR=-1,TR=-2,bR=-3,IR=-4,AR=-5,RR=-6;function SR(t,e){return PR(JSON.parse(t),e)}function PR(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===wR)return;if(i===bR)return NaN;if(i===IR)return 1/0;if(i===AR)return-1/0;if(i===RR)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const a=n[i];if(!a||typeof a!="object")r[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const c=a[0],u=e==null?void 0:e[c];if(u)return r[i]=u(s(a[1]));switch(c){case"Date":r[i]=new Date(a[1]);break;case"Set":const h=new Set;r[i]=h;for(let g=1;g<a.length;g+=1)h.add(s(a[g]));break;case"Map":const d=new Map;r[i]=d;for(let g=1;g<a.length;g+=2)d.set(s(a[g]),s(a[g+1]));break;case"RegExp":r[i]=new RegExp(a[1],a[2]);break;case"Object":r[i]=Object(a[1]);break;case"BigInt":r[i]=BigInt(a[1]);break;case"null":const m=Object.create(null);r[i]=m;for(let g=1;g<a.length;g+=2)m[a[g]]=s(a[g+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const g=globalThis[c],A=a[1],x=Jp(A),N=new g(x);r[i]=N;break}case"ArrayBuffer":{const g=a[1],A=Jp(g);r[i]=A;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(a.length);r[i]=c;for(let u=0;u<a.length;u+=1){const h=a[u];h!==TR&&(c[u]=s(h))}}else{const c={};r[i]=c;for(const u in a){const h=a[u];c[u]=s(h)}}return r[i]}return s(0)}const CR=new Set(["title","titleTemplate","script","style","noscript"]),Ca=new Set(["base","meta","link","style","script","noscript"]),kR=new Set(["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),xR=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),cv=new Set(["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"]),OR=typeof window<"u";function il(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function $u(t){if(t._h)return t._h;if(t._d)return il(t._d);let e=`${t.tag}:${t.textContent||t.innerHTML||""}:`;for(const n in t.props)e+=`${n}:${String(t.props[n])},`;return il(e)}function uv(t,e){const n=[],r=e.resolveKeyData||(i=>i.key),s=e.resolveValueData||(i=>i.value);for(const[i,o]of Object.entries(t))n.push(...(Array.isArray(o)?o:[o]).map(a=>{const c={key:i,value:a},u=s(c);return typeof u=="object"?uv(u,e):Array.isArray(u)?u:{[typeof e.key=="function"?e.key(c):e.key]:r(c),[typeof e.value=="function"?e.value(c):e.value]:u}}).flat());return n}function hv(t,e){return Object.entries(t).map(([n,r])=>{if(typeof r=="object"&&(r=hv(r,e)),e.resolve){const s=e.resolve({key:n,value:r});if(typeof s<"u")return s}return typeof r=="number"&&(r=r.toString()),typeof r=="string"&&e.wrapValue&&(r=r.replace(new RegExp(e.wrapValue,"g"),`\\${e.wrapValue}`),r=`${e.wrapValue}${r}${e.wrapValue}`),`${n}${e.keyValueSeparator||""}${r}`}).join(e.entrySeparator||"")}const Rt=t=>({keyValue:t,metaKey:"property"}),Kc=t=>({keyValue:t}),rf={appleItunesApp:{unpack:{entrySeparator:", ",resolve({key:t,value:e}){return`${Dn(t)}=${e}`}}},articleExpirationTime:Rt("article:expiration_time"),articleModifiedTime:Rt("article:modified_time"),articlePublishedTime:Rt("article:published_time"),bookReleaseDate:Rt("book:release_date"),charset:{metaKey:"charset"},contentSecurityPolicy:{unpack:{entrySeparator:"; ",resolve({key:t,value:e}){return`${Dn(t)} ${e}`}},metaKey:"http-equiv"},contentType:{metaKey:"http-equiv"},defaultStyle:{metaKey:"http-equiv"},fbAppId:Rt("fb:app_id"),msapplicationConfig:Kc("msapplication-Config"),msapplicationTileColor:Kc("msapplication-TileColor"),msapplicationTileImage:Kc("msapplication-TileImage"),ogAudioSecureUrl:Rt("og:audio:secure_url"),ogAudioUrl:Rt("og:audio"),ogImageSecureUrl:Rt("og:image:secure_url"),ogImageUrl:Rt("og:image"),ogSiteName:Rt("og:site_name"),ogVideoSecureUrl:Rt("og:video:secure_url"),ogVideoUrl:Rt("og:video"),profileFirstName:Rt("profile:first_name"),profileLastName:Rt("profile:last_name"),profileUsername:Rt("profile:username"),refresh:{metaKey:"http-equiv",unpack:{entrySeparator:";",resolve({key:t,value:e}){if(t==="seconds")return`${e}`}}},robots:{unpack:{entrySeparator:", ",resolve({key:t,value:e}){return typeof e=="boolean"?`${Dn(t)}`:`${Dn(t)}:${e}`}}},xUaCompatible:{metaKey:"http-equiv"}},fv=new Set(["og","book","article","profile"]);function dv(t){var r;const e=Dn(t),n=e.indexOf(":");return fv.has(e.substring(0,n))?"property":((r=rf[t])==null?void 0:r.metaKey)||"name"}function NR(t){var e;return((e=rf[t])==null?void 0:e.keyValue)||Dn(t)}function Dn(t){const e=t.replace(/([A-Z])/g,"-$1").toLowerCase(),n=e.indexOf("-"),r=e.substring(0,n);return r==="twitter"||fv.has(r)?t.replace(/([A-Z])/g,":$1").toLowerCase():e}function Hu(t){if(Array.isArray(t))return t.map(n=>Hu(n));if(typeof t!="object"||Array.isArray(t))return t;const e={};for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[Dn(n)]=Hu(t[n]));return e}function DR(t,e){const n=rf[e];return e==="refresh"?`${t.seconds};url=${t.url}`:hv(Hu(t),{keyValueSeparator:"=",entrySeparator:", ",resolve({value:r,key:s}){if(r===null)return"";if(typeof r=="boolean")return`${s}`},...n==null?void 0:n.unpack})}const pv=new Set(["og:image","og:video","og:audio","twitter:image"]);function mv(t){const e={};for(const n in t){if(!Object.prototype.hasOwnProperty.call(t,n))continue;const r=t[n];String(r)!=="false"&&n&&(e[n]=r)}return e}function Zp(t,e){const n=mv(e),r=Dn(t),s=dv(r);if(pv.has(r)){const i={};for(const o in n)Object.prototype.hasOwnProperty.call(n,o)&&(i[`${t}${o==="url"?"":`${o[0].toUpperCase()}${o.slice(1)}`}`]=n[o]);return sf(i).sort((o,a)=>{var c,u;return(((c=o[s])==null?void 0:c.length)||0)-(((u=a[s])==null?void 0:u.length)||0)})}return[{[s]:r,...n}]}function sf(t){const e=[],n={};for(const s in t){if(!Object.prototype.hasOwnProperty.call(t,s))continue;const i=t[s];if(!Array.isArray(i)){if(typeof i=="object"&&i){if(pv.has(Dn(s))){e.push(...Zp(s,i));continue}n[s]=mv(i)}else n[s]=i;continue}for(const o of i)e.push(...typeof o=="string"?sf({[s]:o}):Zp(s,o))}const r=uv(n,{key({key:s}){return dv(s)},value({key:s}){return s==="charset"?"charset":"content"},resolveKeyData({key:s}){return NR(s)},resolveValueData({value:s,key:i}){return s===null?"_null":typeof s=="object"?DR(s,i):typeof s=="number"?s.toString():s}});return[...e,...r].map(s=>(s.content==="_null"&&(s.content=null),s))}function MR(t,e){return t instanceof Promise?t.then(e):e(t)}function qu(t,e,n,r){const s=r||yv(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},t==="templateParams"||t==="titleTemplate");if(s instanceof Promise)return s.then(o=>qu(t,e,n,o));const i={tag:t,props:s};for(const o of cv){const a=i.props[o]!==void 0?i.props[o]:n[o];a!==void 0&&((!(o==="innerHTML"||o==="textContent"||o==="children")||CR.has(i.tag))&&(i[o==="children"?"innerHTML":o]=a),delete i.props[o])}return i.props.body&&(i.tagPosition="bodyClose",delete i.props.body),i.tag==="script"&&typeof i.innerHTML=="object"&&(i.innerHTML=JSON.stringify(i.innerHTML),i.props.type=i.props.type||"application/json"),Array.isArray(i.props.content)?i.props.content.map(o=>({...i,props:{...i.props,content:o}})):i}function VR(t,e){var r;const n=t==="class"?" ":";";return e&&typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,s])=>s).map(([s,i])=>t==="style"?`${s}:${i}`:s)),(r=String(Array.isArray(e)?e.join(n):e))==null?void 0:r.split(n).filter(s=>!!s.trim()).join(n)}function gv(t,e,n,r){for(let s=r;s<n.length;s+=1){const i=n[s];if(i==="class"||i==="style"){t[i]=VR(i,t[i]);continue}if(t[i]instanceof Promise)return t[i].then(o=>(t[i]=o,gv(t,e,n,s)));if(!e&&!cv.has(i)){const o=String(t[i]),a=i.startsWith("data-");o==="true"||o===""?t[i]=a?"true":!0:t[i]||(a&&o==="false"?t[i]="false":delete t[i])}}}function yv(t,e=!1){const n=gv(t,e,Object.keys(t),0);return n instanceof Promise?n.then(()=>t):t}const LR=10;function _v(t,e,n){for(let r=n;r<e.length;r+=1){const s=e[r];if(s instanceof Promise)return s.then(i=>(e[r]=i,_v(t,e,r)));Array.isArray(s)?t.push(...s):t.push(s)}}function FR(t){const e=[],n=t.resolvedInput;for(const s in n){if(!Object.prototype.hasOwnProperty.call(n,s))continue;const i=n[s];if(!(i===void 0||!kR.has(s))){if(Array.isArray(i)){for(const o of i)e.push(qu(s,o,t));continue}e.push(qu(s,i,t))}}if(e.length===0)return[];const r=[];return MR(_v(r,e,0),()=>r.map((s,i)=>(s._e=t._i,t.mode&&(s._m=t.mode),s._p=(t._i<<LR)+i,s)))}const em=new Set(["onload","onerror","onabort","onprogress","onloadstart"]),tm={base:-10,title:10},nm={critical:-80,high:-10,low:20};function ol(t){const e=t.tagPriority;if(typeof e=="number")return e;let n=100;return t.tag==="meta"?t.props["http-equiv"]==="content-security-policy"?n=-30:t.props.charset?n=-20:t.props.name==="viewport"&&(n=-15):t.tag==="link"&&t.props.rel==="preconnect"?n=20:t.tag in tm&&(n=tm[t.tag]),e&&e in nm?n+nm[e]:n}const UR=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],jR=["name","property","http-equiv"];function vv(t){const{props:e,tag:n}=t;if(xR.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(e.id)return`${n}:id:${e.id}`;for(const r of jR)if(e[r]!==void 0)return`${n}:${r}:${e[r]}`;return!1}const lr="%separator";function BR(t,e,n=!1){var s;let r;if(e==="s"||e==="pageTitle")r=t.pageTitle;else if(e.includes(".")){const i=e.indexOf(".");r=(s=t[e.substring(0,i)])==null?void 0:s[e.substring(i+1)]}else r=t[e];if(r!==void 0)return n?(r||"").replace(/"/g,'\\"'):r||""}const $R=new RegExp(`${lr}(?:\\s*${lr})*`,"g");function ga(t,e,n,r=!1){if(typeof t!="string"||!t.includes("%"))return t;let s=t;try{s=decodeURI(t)}catch{}const i=s.match(/%\w+(?:\.\w+)?/g);if(!i)return t;const o=t.includes(lr);return t=t.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===lr||!i.includes(a))return a;const c=BR(e,a.slice(1),r);return c!==void 0?c:a}).trim(),o&&(t.endsWith(lr)&&(t=t.slice(0,-lr.length)),t.startsWith(lr)&&(t=t.slice(lr.length)),t=t.replace($R,n).trim()),t}function rm(t,e){return t==null?e||null:typeof t=="function"?t(e):t}async function Ev(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!!r.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async s=>{var d;const i=(await t.resolveTags()).map(m=>({tag:m,id:Ca.has(m.tag)?$u(m):m.tag,shouldRender:!0}));let o=t._dom;if(!o){o={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};const m=new Set;for(const g of["body","head"]){const A=(d=n[g])==null?void 0:d.children;for(const x of A){const N=x.tagName.toLowerCase();if(!Ca.has(N))continue;const O={tag:N,props:await yv(x.getAttributeNames().reduce((D,L)=>({...D,[L]:x.getAttribute(L)}),{})),innerHTML:x.innerHTML},P=vv(O);let _=P,S=1;for(;_&&m.has(_);)_=`${P}:${S++}`;_&&(O._d=_,m.add(_)),o.elMap[x.getAttribute("data-hid")||$u(O)]=x}}}o.pendingSideEffects={...o.sideEffects},o.sideEffects={};function a(m,g,A){const x=`${m}:${g}`;o.sideEffects[x]=A,delete o.pendingSideEffects[x]}function c({id:m,$el:g,tag:A}){const x=A.tag.endsWith("Attrs");if(o.elMap[m]=g,x||(A.textContent&&A.textContent!==g.textContent&&(g.textContent=A.textContent),A.innerHTML&&A.innerHTML!==g.innerHTML&&(g.innerHTML=A.innerHTML),a(m,"el",()=>{var N;(N=o.elMap[m])==null||N.remove(),delete o.elMap[m]})),A._eventHandlers)for(const N in A._eventHandlers)Object.prototype.hasOwnProperty.call(A._eventHandlers,N)&&g.getAttribute(`data-${N}`)!==""&&((A.tag==="bodyAttrs"?n.defaultView:g).addEventListener(N.substring(2),A._eventHandlers[N].bind(g)),g.setAttribute(`data-${N}`,""));for(const N in A.props){if(!Object.prototype.hasOwnProperty.call(A.props,N))continue;const O=A.props[N],P=`attr:${N}`;if(N==="class"){if(!O)continue;for(const _ of O.split(" "))x&&a(m,`${P}:${_}`,()=>g.classList.remove(_)),!g.classList.contains(_)&&g.classList.add(_)}else if(N==="style"){if(!O)continue;for(const _ of O.split(";")){const S=_.indexOf(":"),D=_.substring(0,S).trim(),L=_.substring(S+1).trim();a(m,`${P}:${D}`,()=>{g.style.removeProperty(D)}),g.style.setProperty(D,L)}}else g.getAttribute(N)!==O&&g.setAttribute(N,O===!0?"":String(O)),x&&a(m,P,()=>g.removeAttribute(N))}}const u=[],h={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const m of i){const{tag:g,shouldRender:A,id:x}=m;if(A){if(g.tag==="title"){n.title=g.textContent;continue}m.$el=m.$el||o.elMap[x],m.$el?c(m):Ca.has(g.tag)&&u.push(m)}}for(const m of u){const g=m.tag.tagPosition||"head";m.$el=n.createElement(m.tag.tag),c(m),h[g]=h[g]||n.createDocumentFragment(),h[g].appendChild(m.$el)}for(const m of i)await t.hooks.callHook("dom:renderTag",m,n,a);h.head&&n.head.appendChild(h.head),h.bodyOpen&&n.body.insertBefore(h.bodyOpen,n.body.firstChild),h.bodyClose&&n.body.appendChild(h.bodyClose);for(const m in o.pendingSideEffects)o.pendingSideEffects[m]();t._dom=o,await t.hooks.callHook("dom:rendered",{renders:i}),s()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function HR(t,e={}){const n=e.delayFn||(r=>setTimeout(r,10));return t._domDebouncedUpdatePromise=t._domDebouncedUpdatePromise||new Promise(r=>n(()=>Ev(t,e).then(()=>{delete t._domDebouncedUpdatePromise,r()})))}function qR(t){return e=>{var r,s;const n=((s=(r=e.resolvedOptions.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:s.innerHTML)||!1;return n&&e.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":i=>{HR(i,t)}}}}}const zR=new Set(["templateParams","htmlAttrs","bodyAttrs"]),WR={hooks:{"tag:normalise":({tag:t})=>{t.props.hid&&(t.key=t.props.hid,delete t.props.hid),t.props.vmid&&(t.key=t.props.vmid,delete t.props.vmid),t.props.key&&(t.key=t.props.key,delete t.props.key);const e=vv(t);e&&!e.startsWith("meta:og:")&&!e.startsWith("meta:twitter:")&&delete t.key;const n=e||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":t=>{const e=Object.create(null);for(const r of t.tags){const s=(r.key?`${r.tag}:${r.key}`:r._d)||$u(r),i=e[s];if(i){let a=r==null?void 0:r.tagDuplicateStrategy;if(!a&&zR.has(r.tag)&&(a="merge"),a==="merge"){const c=i.props;c.style&&r.props.style&&(c.style[c.style.length-1]!==";"&&(c.style+=";"),r.props.style=`${c.style} ${r.props.style}`),c.class&&r.props.class?r.props.class=`${c.class} ${r.props.class}`:c.class&&(r.props.class=c.class),e[s].props={...c,...r.props};continue}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);continue}else if(ol(r)>ol(i))continue}if(!(r.innerHTML||r.textContent||Object.keys(r.props).length!==0)&&Ca.has(r.tag)){delete e[s];continue}e[s]=r}const n=[];for(const r in e){const s=e[r],i=s._duped;n.push(s),i&&(delete s._duped,n.push(...i))}t.tags=n,t.tags=t.tags.filter(r=>!(r.tag==="meta"&&(r.props.name||r.props.property)&&!r.props.content))}}},KR=new Set(["script","link","bodyAttrs"]),GR=t=>({hooks:{"tags:resolve":e=>{for(const n of e.tags){if(!KR.has(n.tag))continue;const r=n.props;for(const s in r){if(s[0]!=="o"||s[1]!=="n"||!Object.prototype.hasOwnProperty.call(r,s))continue;const i=r[s];typeof i=="function"&&(t.ssr&&em.has(s)?r[s]=`this.dataset.${s}fired = true`:delete r[s],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[s]=i)}t.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||il(n.props.src||n.props.href))}},"dom:renderTag":({$el:e,tag:n})=>{var s,i;const r=e==null?void 0:e.dataset;if(r)for(const o in r){if(!o.endsWith("fired"))continue;const a=o.slice(0,-5);em.has(a)&&((i=(s=n._eventHandlers)==null?void 0:s[a])==null||i.call(e,new Event(a.substring(2))))}}}}),QR=new Set(["link","style","script","noscript"]),YR={hooks:{"tag:normalise":({tag:t})=>{t.key&&QR.has(t.tag)&&(t.props["data-hid"]=t._h=il(t.key))}}},XR={mode:"server",hooks:{"tags:beforeResolve":t=>{const e={};let n=!1;for(const r of t.tags)r._m!=="server"||r.tag!=="titleTemplate"&&r.tag!=="templateParams"&&r.tag!=="title"||(e[r.tag]=r.tag==="title"||r.tag==="titleTemplate"?r.textContent:r.props,n=!0);n&&t.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},JR={hooks:{"tags:resolve":t=>{var e;for(const n of t.tags)if(typeof n.tagPriority=="string")for(const{prefix:r,offset:s}of UR){if(!n.tagPriority.startsWith(r))continue;const i=n.tagPriority.substring(r.length),o=(e=t.tags.find(a=>a._d===i))==null?void 0:e._p;if(o!==void 0){n._p=o+s;break}}t.tags.sort((n,r)=>{const s=ol(n),i=ol(r);return s<i?-1:s>i?1:n._p-r._p})}}},ZR={meta:"content",link:"href",htmlAttrs:"lang"},eS=["innerHTML","textContent"],tS=t=>({hooks:{"tags:resolve":e=>{var o;const{tags:n}=e;let r;for(let a=0;a<n.length;a+=1)n[a].tag==="templateParams"&&(r=e.tags.splice(a,1)[0].props,a-=1);const s=r||{},i=s.separator||"|";delete s.separator,s.pageTitle=ga(s.pageTitle||((o=n.find(a=>a.tag==="title"))==null?void 0:o.textContent)||"",s,i);for(const a of n){if(a.processTemplateParams===!1)continue;const c=ZR[a.tag];if(c&&typeof a.props[c]=="string")a.props[c]=ga(a.props[c],s,i);else if(a.processTemplateParams||a.tag==="titleTemplate"||a.tag==="title")for(const u of eS)typeof a[u]=="string"&&(a[u]=ga(a[u],s,i,a.tag==="script"&&a.props.type.endsWith("json")))}t._templateParams=s,t._separator=i},"tags:afterResolve":({tags:e})=>{let n;for(let r=0;r<e.length;r+=1){const s=e[r];s.tag==="title"&&s.processTemplateParams!==!1&&(n=s)}n!=null&&n.textContent&&(n.textContent=ga(n.textContent,t._templateParams,t._separator))}}}),nS={hooks:{"tags:resolve":t=>{const{tags:e}=t;let n,r;for(let s=0;s<e.length;s+=1){const i=e[s];i.tag==="title"?n=i:i.tag==="titleTemplate"&&(r=i)}if(r&&n){const s=rm(r.textContent,n.textContent);s!==null?n.textContent=s||n.textContent:t.tags.splice(t.tags.indexOf(n),1)}else if(r){const s=rm(r.textContent);s!==null&&(r.textContent=s,r.tag="title",r=void 0)}r&&t.tags.splice(t.tags.indexOf(r),1)}}},rS={hooks:{"tags:afterResolve":t=>{for(const e of t.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&(e.props.type==="application/ld+json"||e.props.type==="application/json")?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};let wv;function sS(t={}){const e=iS(t);return e.use(qR()),wv=e}function sm(t,e){return!t||t==="server"&&e||t==="client"&&!e}function iS(t={}){const e=ev();e.addHooks(t.hooks||{}),t.document=t.document||(OR?document:void 0);const n=!t.document,r=()=>{a.dirty=!0,e.callHook("entries:updated",a)};let s=0,i=[];const o=[],a={plugins:o,dirty:!1,resolvedOptions:t,hooks:e,headEntries(){return i},use(c){const u=typeof c=="function"?c(a):c;(!u.key||!o.some(h=>h.key===u.key))&&(o.push(u),sm(u.mode,n)&&e.addHooks(u.hooks||{}))},push(c,u){u==null||delete u.head;const h={_i:s++,input:c,...u};return sm(h.mode,n)&&(i.push(h),r()),{dispose(){i=i.filter(d=>d._i!==h._i),r()},patch(d){for(const m of i)m._i===h._i&&(m.input=h.input=d);r()}}},async resolveTags(){const c={tags:[],entries:[...i]};await e.callHook("entries:resolve",c);for(const u of c.entries){const h=u.resolvedInput||u.input;if(u.resolvedInput=await(u.transform?u.transform(h):h),u.resolvedInput)for(const d of await FR(u)){const m={tag:d,entry:u,resolvedOptions:a.resolvedOptions};await e.callHook("tag:normalise",m),c.tags.push(m.tag)}}return await e.callHook("tags:beforeResolve",c),await e.callHook("tags:resolve",c),await e.callHook("tags:afterResolve",c),c.tags},ssr:n};return[WR,XR,GR,YR,JR,tS,nS,rS,...(t==null?void 0:t.plugins)||[]].forEach(c=>a.use(c)),a.hooks.callHook("init",a),a}function oS(){return wv}const aS=j_[0]==="3";function lS(t){return typeof t=="function"?t():$e(t)}function al(t){if(t instanceof Promise||t instanceof Date||t instanceof RegExp)return t;const e=lS(t);if(!t||!e)return e;if(Array.isArray(e))return e.map(n=>al(n));if(typeof e=="object"){const n={};for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(r==="titleTemplate"||r[0]==="o"&&r[1]==="n"){n[r]=$e(e[r]);continue}n[r]=al(e[r])}return n}return e}const cS={hooks:{"entries:resolve":t=>{for(const e of t.entries)e.resolvedInput=al(e.input)}}},Tv="usehead";function uS(t){return{install(n){aS&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(Tv,t))}}.install}function hS(t={}){t.domDelayFn=t.domDelayFn||(n=>ko(()=>setTimeout(()=>n(),0)));const e=sS(t);return e.use(cS),e.install=uS(e),e}const zu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Wu="__unhead_injection_handler__";function fS(t){zu[Wu]=t}function dS(){if(Wu in zu)return zu[Wu]();const t=kt(Tv);return t||oS()}function pS(t,e={}){const n=e.head||dS();if(n)return n.ssr?n.push(t,e):mS(n,t,e)}function mS(t,e,n={}){const r=Vt(!1),s=Vt({});Ub(()=>{s.value=r.value?{}:al(e)});const i=t.push(s.value,n);return yr(s,a=>{i.patch(a)}),Ll()&&(Oo(()=>{i.dispose()}),s_(()=>{r.value=!0}),r_(()=>{r.value=!1})),i}function gS(t,e){const{title:n,titleTemplate:r,...s}=t;return pS({title:n,titleTemplate:r,_flatMeta:s},{...e,transform(i){const o=sf({...i._flatMeta});return delete i._flatMeta,{...i,meta:o}}})}let ka,xa;function yS(){return ka=$fetch(nf(`builds/meta/${di().app.buildId}.json`),{responseType:"json"}),ka.then(t=>{xa=aR(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),ka}function ql(){return ka||yS()}async function of(t){if(await ql(),!xa)return console.error("[nuxt] Error creating app manifest matcher.",xa),{};try{return iv({},...xa.matchAll(t).reverse())}catch(e){return console.error("[nuxt] Error matching route rules.",e),{}}}async function im(t,e={}){const n=await vS(t,e),r=Ke(),s=r._payloadCache=r._payloadCache||{};return n in s?s[n]||null:(s[n]=Iv(t).then(i=>i?bv(n).then(o=>o||(delete s[n],null)):(s[n]=null,null)),s[n])}const _S="_payload.json";async function vS(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||Gn(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=di(),s=e.hash||(e.fresh?Date.now():r.app.buildId),i=r.app.cdnURL,o=i&&await Iv(t)?i:r.app.baseURL;return jl(o,n.pathname,_S+(s?`?${s}`:""))}async function bv(t){const e=fetch(t).then(n=>n.text().then(Av));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function Iv(t=av().path){if(t=Ul(t),(await ql()).prerendered.includes(t))return!0;const n=await of(t);return!!n.prerender&&!n.redirect}let Hr=null;async function ES(){var r;if(Hr)return Hr;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await Av(t.textContent||""),n=t.dataset.src?await bv(t.dataset.src):void 0;return Hr={...e,...n,...window.__NUXT__},(r=Hr.config)!=null&&r.public&&(Hr.config.public=Mr(Hr.config.public)),Hr}async function Av(t){return await SR(t,Ke()._payloadRevivers)}function wS(t,e){Ke()._payloadRevivers[t]=e}const TS=[["NuxtError",t=>Hl(t)],["EmptyShallowRef",t=>ao(t==="_"?void 0:t==="0n"?BigInt(0):Za(t))],["EmptyRef",t=>Vt(t==="_"?void 0:t==="0n"?BigInt(0):Za(t))],["ShallowRef",t=>ao(t)],["ShallowReactive",t=>Nn(t)],["Ref",t=>Vt(t)],["Reactive",t=>Mr(t)]],bS=un({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const[r,s]of TS)wS(r,s);Object.assign(t.payload,([e,n]=qs(()=>t.runWithContext(ES)),e=await e,n(),e)),window.__NUXT__=t.payload}}),IS=[],AS=un({name:"nuxt:head",enforce:"pre",setup(t){const e=hS({plugins:IS});fS(()=>Ke().vueApp._context.provides.usehead),t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await Ev(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||r()}),t.hooks.hook("app:error",r),t.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const As=typeof document<"u";function Rv(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function RS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Rv(t.default)}const xe=Object.assign;function Gc(t,e){const n={};for(const r in e){const s=e[r];n[r]=ln(s)?s.map(t):t(s)}return n}const Qi=()=>{},ln=Array.isArray,Sv=/#/g,SS=/&/g,PS=/\//g,CS=/=/g,kS=/\?/g,Pv=/\+/g,xS=/%5B/g,OS=/%5D/g,Cv=/%5E/g,NS=/%60/g,kv=/%7B/g,DS=/%7C/g,xv=/%7D/g,MS=/%20/g;function af(t){return encodeURI(""+t).replace(DS,"|").replace(xS,"[").replace(OS,"]")}function VS(t){return af(t).replace(kv,"{").replace(xv,"}").replace(Cv,"^")}function Ku(t){return af(t).replace(Pv,"%2B").replace(MS,"+").replace(Sv,"%23").replace(SS,"%26").replace(NS,"`").replace(kv,"{").replace(xv,"}").replace(Cv,"^")}function LS(t){return Ku(t).replace(CS,"%3D")}function FS(t){return af(t).replace(Sv,"%23").replace(kS,"%3F")}function US(t){return t==null?"":FS(t).replace(PS,"%2F")}function fo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const jS=/\/$/,BS=t=>t.replace(jS,"");function Qc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=zS(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:fo(o)}}function $S(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function om(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function HS(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ei(e.matched[r],n.matched[s])&&Ov(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ei(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ov(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!qS(t[n],e[n]))return!1;return!0}function qS(t,e){return ln(t)?am(t,e):ln(e)?am(e,t):t===e}function am(t,e){return ln(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function zS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const nn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var po;(function(t){t.pop="pop",t.push="push"})(po||(po={}));var Yi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Yi||(Yi={}));function WS(t){if(!t)if(As){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),BS(t)}const KS=/^[^#]+#/;function GS(t,e){return t.replace(KS,"#")+e}function QS(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const zl=()=>({left:window.scrollX,top:window.scrollY});function YS(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=QS(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function lm(t,e){return(history.state?history.state.position-e:-1)+t}const Gu=new Map;function XS(t,e){Gu.set(t,e)}function JS(t){const e=Gu.get(t);return Gu.delete(t),e}let ZS=()=>location.protocol+"//"+location.host;function Nv(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),om(c,"")}return om(n,t)+r+s}function eP(t,e,n,r){let s=[],i=[],o=null;const a=({state:m})=>{const g=Nv(t,location),A=n.value,x=e.value;let N=0;if(m){if(n.value=g,e.value=m,o&&o===A){o=null;return}N=x?m.position-x.position:0}else r(g);s.forEach(O=>{O(n.value,A,{delta:N,type:po.pop,direction:N?N>0?Yi.forward:Yi.back:Yi.unknown})})};function c(){o=n.value}function u(m){s.push(m);const g=()=>{const A=s.indexOf(m);A>-1&&s.splice(A,1)};return i.push(g),g}function h(){const{history:m}=window;m.state&&m.replaceState(xe({},m.state,{scroll:zl()}),"")}function d(){for(const m of i)m();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:u,destroy:d}}function cm(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?zl():null}}function tP(t){const{history:e,location:n}=window,r={value:Nv(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,h){const d=t.indexOf("#"),m=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:ZS()+t+c;try{e[h?"replaceState":"pushState"](u,"",m),s.value=u}catch(g){console.error(g),n[h?"replace":"assign"](m)}}function o(c,u){const h=xe({},e.state,cm(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,h,!0),r.value=c}function a(c,u){const h=xe({},s.value,e.state,{forward:c,scroll:zl()});i(h.current,h,!0);const d=xe({},cm(r.value,c,null),{position:h.position+1},u);i(c,d,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Dv(t){t=WS(t);const e=tP(t),n=eP(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=xe({location:"",base:t,go:r,createHref:GS.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function nP(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Dv(t)}function rP(t){return typeof t=="string"||t&&typeof t=="object"}function Mv(t){return typeof t=="string"||typeof t=="symbol"}const Vv=Symbol("");var um;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(um||(um={}));function ti(t,e){return xe(new Error,{type:t,[Vv]:!0},e)}function Pn(t,e){return t instanceof Error&&Vv in t&&(e==null||!!(t.type&e))}const hm="[^/]+?",sP={sensitive:!1,strict:!1,start:!0,end:!0},iP=/[.+*?^${}()[\]/\\]/g;function oP(t,e){const n=xe({},sP,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const m=u[d];let g=40+(n.sensitive?.25:0);if(m.type===0)d||(s+="/"),s+=m.value.replace(iP,"\\$&"),g+=40;else if(m.type===1){const{value:A,repeatable:x,optional:N,regexp:O}=m;i.push({name:A,repeatable:x,optional:N});const P=O||hm;if(P!==hm){g+=10;try{new RegExp(`(${P})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${A}" (${P}): `+S.message)}}let _=x?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;d||(_=N&&u.length<2?`(?:/${_})`:"/"+_),N&&(_+="?"),s+=_,g+=20,N&&(g+=-8),x&&(g+=-20),P===".*"&&(g+=-50)}h.push(g)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const h=u.match(o),d={};if(!h)return null;for(let m=1;m<h.length;m++){const g=h[m]||"",A=i[m-1];d[A.name]=g&&A.repeatable?g.split("/"):g}return d}function c(u){let h="",d=!1;for(const m of t){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const g of m)if(g.type===0)h+=g.value;else if(g.type===1){const{value:A,repeatable:x,optional:N}=g,O=A in u?u[A]:"";if(ln(O)&&!x)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const P=ln(O)?O.join("/"):O;if(!P)if(N)m.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);h+=P}}return h||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function aP(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Lv(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=aP(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(fm(r))return 1;if(fm(s))return-1}return s.length-r.length}function fm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const lP={type:0,value:""},cP=/[a-zA-Z0-9_]/;function uP(t){if(!t)return[[]];if(t==="/")return[[lP]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",h="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&d(),o()):c===":"?(d(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:cP.test(c)?m():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:n=3:h+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}function hP(t,e,n){const r=oP(uP(t.path),n),s=xe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function fP(t,e){const n=[],r=new Map;e=gm({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,m,g){const A=!g,x=pm(d);x.aliasOf=g&&g.record;const N=gm(e,d),O=[x];if("alias"in d){const S=typeof d.alias=="string"?[d.alias]:d.alias;for(const D of S)O.push(pm(xe({},x,{components:g?g.record.components:x.components,path:D,aliasOf:g?g.record:x})))}let P,_;for(const S of O){const{path:D}=S;if(m&&D[0]!=="/"){const L=m.record.path,b=L[L.length-1]==="/"?"":"/";S.path=m.record.path+(D&&b+D)}if(P=hP(S,m,N),g?g.alias.push(P):(_=_||P,_!==P&&_.alias.push(P),A&&d.name&&!mm(P)&&o(d.name)),Fv(P)&&c(P),x.children){const L=x.children;for(let b=0;b<L.length;b++)i(L[b],P,g&&g.children[b])}g=g||P}return _?()=>{o(_)}:Qi}function o(d){if(Mv(d)){const m=r.get(d);m&&(r.delete(d),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(d);m>-1&&(n.splice(m,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function c(d){const m=mP(d,n);n.splice(m,0,d),d.record.name&&!mm(d)&&r.set(d.record.name,d)}function u(d,m){let g,A={},x,N;if("name"in d&&d.name){if(g=r.get(d.name),!g)throw ti(1,{location:d});N=g.record.name,A=xe(dm(m.params,g.keys.filter(_=>!_.optional).concat(g.parent?g.parent.keys.filter(_=>_.optional):[]).map(_=>_.name)),d.params&&dm(d.params,g.keys.map(_=>_.name))),x=g.stringify(A)}else if(d.path!=null)x=d.path,g=n.find(_=>_.re.test(x)),g&&(A=g.parse(x),N=g.record.name);else{if(g=m.name?r.get(m.name):n.find(_=>_.re.test(m.path)),!g)throw ti(1,{location:d,currentLocation:m});N=g.record.name,A=xe({},m.params,d.params),x=g.stringify(A)}const O=[];let P=g;for(;P;)O.unshift(P.record),P=P.parent;return{name:N,path:x,params:A,matched:O,meta:pP(O)}}t.forEach(d=>i(d));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function dm(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function pm(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:dP(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function dP(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function mm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function pP(t){return t.reduce((e,n)=>xe(e,n.meta),{})}function gm(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function mP(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Lv(t,e[i])<0?r=i:n=i+1}const s=gP(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function gP(t){let e=t;for(;e=e.parent;)if(Fv(e)&&Lv(t,e)===0)return e}function Fv({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function yP(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Pv," "),o=i.indexOf("="),a=fo(o<0?i:i.slice(0,o)),c=o<0?null:fo(i.slice(o+1));if(a in e){let u=e[a];ln(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function ym(t){let e="";for(let n in t){const r=t[n];if(n=LS(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(ln(r)?r.map(i=>i&&Ku(i)):[r&&Ku(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function _P(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=ln(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const vP=Symbol(""),_m=Symbol(""),Wl=Symbol(""),lf=Symbol(""),Qu=Symbol("");function Vi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function cr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const u=m=>{m===!1?c(ti(4,{from:n,to:e})):m instanceof Error?c(m):rP(m)?c(ti(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),a())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(h);t.length<3&&(d=d.then(u)),d.catch(m=>c(m))})}function Yc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Rv(c)){const h=(c.__vccOpts||c)[e];h&&i.push(cr(h,n,r,o,a,s))}else{let u=c();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=RS(h)?h.default:h;o.mods[a]=h,o.components[a]=d;const g=(d.__vccOpts||d)[e];return g&&cr(g,n,r,o,a,s)()}))}}return i}function vm(t){const e=kt(Wl),n=kt(lf),r=Ue(()=>{const c=$e(t.to);return e.resolve(c)}),s=Ue(()=>{const{matched:c}=r.value,{length:u}=c,h=c[u-1],d=n.matched;if(!h||!d.length)return-1;const m=d.findIndex(ei.bind(null,h));if(m>-1)return m;const g=Em(c[u-2]);return u>1&&Em(h)===g&&d[d.length-1].path!==g?d.findIndex(ei.bind(null,c[u-2])):m}),i=Ue(()=>s.value>-1&&bP(n.params,r.value.params)),o=Ue(()=>s.value>-1&&s.value===n.matched.length-1&&Ov(n.params,r.value.params));function a(c={}){return TP(c)?e[$e(t.replace)?"replace":"push"]($e(t.to)).catch(Qi):Promise.resolve()}return{route:r,href:Ue(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const EP=cs({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:vm,setup(t,{slots:e}){const n=Mr(vm(t)),{options:r}=kt(Wl),s=Ue(()=>({[wm(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[wm(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ht("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),wP=EP;function TP(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function bP(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!ln(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Em(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const wm=(t,e,n)=>t??e??n,IP=cs({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=kt(Qu),s=Ue(()=>t.route||r.value),i=kt(_m,0),o=Ue(()=>{let u=$e(i);const{matched:h}=s.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),a=Ue(()=>s.value.matched[o.value]);$s(_m,Ue(()=>o.value+1)),$s(vP,a),$s(Qu,s);const c=Vt();return yr(()=>[c.value,a.value,t.name],([u,h,d],[m,g,A])=>{h&&(h.instances[d]=u,g&&g!==h&&u&&u===m&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),u&&h&&(!g||!ei(h,g)||!m)&&(h.enterCallbacks[d]||[]).forEach(x=>x(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,d=a.value,m=d&&d.components[h];if(!m)return Tm(n.default,{Component:m,route:u});const g=d.props[h],A=g?g===!0?u.params:typeof g=="function"?g(u):g:null,N=Ht(m,xe({},A,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(d.instances[h]=null)},ref:c}));return Tm(n.default,{Component:N,route:u})||N}}});function Tm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Uv=IP;function AP(t){const e=fP(t.routes,t),n=t.parseQuery||yP,r=t.stringifyQuery||ym,s=t.history,i=Vi(),o=Vi(),a=Vi(),c=ao(nn);let u=nn;As&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Gc.bind(null,j=>""+j),d=Gc.bind(null,US),m=Gc.bind(null,fo);function g(j,Z){let X,se;return Mv(j)?(X=e.getRecordMatcher(j),se=Z):se=j,e.addRoute(se,X)}function A(j){const Z=e.getRecordMatcher(j);Z&&e.removeRoute(Z)}function x(){return e.getRoutes().map(j=>j.record)}function N(j){return!!e.getRecordMatcher(j)}function O(j,Z){if(Z=xe({},Z||c.value),typeof j=="string"){const C=Qc(n,j,Z.path),V=e.resolve({path:C.path},Z),H=s.createHref(C.fullPath);return xe(C,V,{params:m(V.params),hash:fo(C.hash),redirectedFrom:void 0,href:H})}let X;if(j.path!=null)X=xe({},j,{path:Qc(n,j.path,Z.path).path});else{const C=xe({},j.params);for(const V in C)C[V]==null&&delete C[V];X=xe({},j,{params:d(C)}),Z.params=d(Z.params)}const se=e.resolve(X,Z),Te=j.hash||"";se.params=h(m(se.params));const Oe=$S(r,xe({},j,{hash:VS(Te),path:se.path})),I=s.createHref(Oe);return xe({fullPath:Oe,hash:Te,query:r===ym?_P(j.query):j.query||{}},se,{redirectedFrom:void 0,href:I})}function P(j){return typeof j=="string"?Qc(n,j,c.value.path):xe({},j)}function _(j,Z){if(u!==j)return ti(8,{from:Z,to:j})}function S(j){return b(j)}function D(j){return S(xe(P(j),{replace:!0}))}function L(j){const Z=j.matched[j.matched.length-1];if(Z&&Z.redirect){const{redirect:X}=Z;let se=typeof X=="function"?X(j):X;return typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=P(se):{path:se},se.params={}),xe({query:j.query,hash:j.hash,params:se.path!=null?{}:j.params},se)}}function b(j,Z){const X=u=O(j),se=c.value,Te=j.state,Oe=j.force,I=j.replace===!0,C=L(X);if(C)return b(xe(P(C),{state:typeof C=="object"?xe({},Te,C.state):Te,force:Oe,replace:I}),Z||X);const V=X;V.redirectedFrom=Z;let H;return!Oe&&HS(r,se,X)&&(H=ti(16,{to:V,from:se}),Wt(se,se,!0,!1)),(H?Promise.resolve(H):w(V,se)).catch(U=>Pn(U)?Pn(U,2)?U:en(U):ne(U,V,se)).then(U=>{if(U){if(Pn(U,2))return b(xe({replace:I},P(U.to),{state:typeof U.to=="object"?xe({},Te,U.to.state):Te,force:Oe}),Z||V)}else U=R(V,se,!0,I,Te);return k(V,se,U),U})}function E(j,Z){const X=_(j,Z);return X?Promise.reject(X):Promise.resolve()}function v(j){const Z=Xn.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(j):j()}function w(j,Z){let X;const[se,Te,Oe]=RP(j,Z);X=Yc(se.reverse(),"beforeRouteLeave",j,Z);for(const C of se)C.leaveGuards.forEach(V=>{X.push(cr(V,j,Z))});const I=E.bind(null,j,Z);return X.push(I),xt(X).then(()=>{X=[];for(const C of i.list())X.push(cr(C,j,Z));return X.push(I),xt(X)}).then(()=>{X=Yc(Te,"beforeRouteUpdate",j,Z);for(const C of Te)C.updateGuards.forEach(V=>{X.push(cr(V,j,Z))});return X.push(I),xt(X)}).then(()=>{X=[];for(const C of Oe)if(C.beforeEnter)if(ln(C.beforeEnter))for(const V of C.beforeEnter)X.push(cr(V,j,Z));else X.push(cr(C.beforeEnter,j,Z));return X.push(I),xt(X)}).then(()=>(j.matched.forEach(C=>C.enterCallbacks={}),X=Yc(Oe,"beforeRouteEnter",j,Z,v),X.push(I),xt(X))).then(()=>{X=[];for(const C of o.list())X.push(cr(C,j,Z));return X.push(I),xt(X)}).catch(C=>Pn(C,8)?C:Promise.reject(C))}function k(j,Z,X){a.list().forEach(se=>v(()=>se(j,Z,X)))}function R(j,Z,X,se,Te){const Oe=_(j,Z);if(Oe)return Oe;const I=Z===nn,C=As?history.state:{};X&&(se||I?s.replace(j.fullPath,xe({scroll:I&&C&&C.scroll},Te)):s.push(j.fullPath,Te)),c.value=j,Wt(j,Z,X,I),en()}let T;function ye(){T||(T=s.listen((j,Z,X)=>{if(!hn.listening)return;const se=O(j),Te=L(se);if(Te){b(xe(Te,{replace:!0}),se).catch(Qi);return}u=se;const Oe=c.value;As&&XS(lm(Oe.fullPath,X.delta),zl()),w(se,Oe).catch(I=>Pn(I,12)?I:Pn(I,2)?(b(I.to,se).then(C=>{Pn(C,20)&&!X.delta&&X.type===po.pop&&s.go(-1,!1)}).catch(Qi),Promise.reject()):(X.delta&&s.go(-X.delta,!1),ne(I,se,Oe))).then(I=>{I=I||R(se,Oe,!1),I&&(X.delta&&!Pn(I,8)?s.go(-X.delta,!1):X.type===po.pop&&Pn(I,20)&&s.go(-1,!1)),k(se,Oe,I)}).catch(Qi)}))}let ve=Vi(),re=Vi(),fe;function ne(j,Z,X){en(j);const se=re.list();return se.length?se.forEach(Te=>Te(j,Z,X)):console.error(j),Promise.reject(j)}function qe(){return fe&&c.value!==nn?Promise.resolve():new Promise((j,Z)=>{ve.add([j,Z])})}function en(j){return fe||(fe=!j,ye(),ve.list().forEach(([Z,X])=>j?X(j):Z()),ve.reset()),j}function Wt(j,Z,X,se){const{scrollBehavior:Te}=t;if(!As||!Te)return Promise.resolve();const Oe=!X&&JS(lm(j.fullPath,0))||(se||!X)&&history.state&&history.state.scroll||null;return ko().then(()=>Te(j,Z,Oe)).then(I=>I&&YS(I)).catch(I=>ne(I,j,Z))}const ze=j=>s.go(j);let We;const Xn=new Set,hn={currentRoute:c,listening:!0,addRoute:g,removeRoute:A,clearRoutes:e.clearRoutes,hasRoute:N,getRoutes:x,resolve:O,options:t,push:S,replace:D,go:ze,back:()=>ze(-1),forward:()=>ze(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:re.add,isReady:qe,install(j){const Z=this;j.component("RouterLink",wP),j.component("RouterView",Uv),j.config.globalProperties.$router=Z,Object.defineProperty(j.config.globalProperties,"$route",{enumerable:!0,get:()=>$e(c)}),As&&!We&&c.value===nn&&(We=!0,S(s.location).catch(Te=>{}));const X={};for(const Te in nn)Object.defineProperty(X,Te,{get:()=>c.value[Te],enumerable:!0});j.provide(Wl,Z),j.provide(lf,Nn(X)),j.provide(Qu,c);const se=j.unmount;Xn.add(j),j.unmount=function(){Xn.delete(j),Xn.size<1&&(u=nn,T&&T(),T=null,c.value=nn,We=!1,fe=!1),se()}}};function xt(j){return j.reduce((Z,X)=>Z.then(()=>v(X)),Promise.resolve())}return hn}function RP(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>ei(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>ei(u,c))||s.push(c))}return[n,r,s]}function SP(){return kt(Wl)}function SL(t){return kt(lf)}const PP=/(:\w+)\([^)]+\)/g,CP=/(:\w+)[?+*]/g,kP=/:\w+/g,xP=(t,e)=>e.path.replace(PP,"$1").replace(CP,"$1").replace(kP,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""}),Yu=(t,e)=>{const n=t.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===t.Component.type}),r=e??(n==null?void 0:n.meta.key)??(n&&xP(t.route,n));return typeof r=="function"?r(t.route):r},OP=(t,e)=>({default:()=>t?Ht(fb,t===!0?{}:t,e):e});function cf(t){return Array.isArray(t)?t:[t]}const NP="modulepreload",DP=function(t,e){return new URL(t,e).href},bm={},Ds=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(n.map(u=>{if(u=DP(u,r),u in bm)return;bm[u]=!0;const h=u.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(!!r)for(let A=o.length-1;A>=0;A--){const x=o[A];if(x.href===u&&(!h||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const g=document.createElement("link");if(g.rel=h?"stylesheet":NP,h||(g.as="script"),g.crossOrigin="",g.href=u,c&&g.setAttribute("nonce",c),document.head.appendChild(g),h)return new Promise((A,x)=>{g.addEventListener("load",A),g.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})},Xc=[{name:"create",path:"/create",component:()=>Ds(()=>import("./CwKFfe_Z.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)},{name:"index",path:"/",component:()=>Ds(()=>import("./DpNPlgur.js"),__vite__mapDeps([4,2,5]),import.meta.url)},{name:"posts-id",path:"/posts/:id()",component:()=>Ds(()=>import("./BMzo0rHF.js"),__vite__mapDeps([6,1,2,7]),import.meta.url)},{name:"search",path:"/search",component:()=>Ds(()=>import("./CKAjh0K7.js"),__vite__mapDeps([8,1,2,9]),import.meta.url)}],MP=(t,e,n)=>(e=e===!0?{}:e,{default:()=>{var r;return e?Ht(t,e,n):(r=n.default)==null?void 0:r.call(n)}}),VP=/(:\w+)\([^)]+\)/g,LP=/(:\w+)[?+*]/g,FP=/:\w+/g;function Im(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(VP,"$1").replace(LP,"$1").replace(FP,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""});return typeof e=="function"?e(t):e}function UP(t,e){return t===e||e===nn?!1:Im(t)!==Im(e)?!0:!t.matched.every((r,s)=>{var i,o;return r.components&&r.components.default===((o=(i=e.matched[s])==null?void 0:i.components)==null?void 0:o.default)})}const jP={scrollBehavior(t,e,n){var u;const r=Ke(),s=((u=Lt().options)==null?void 0:u.scrollBehaviorType)??"auto";let i=n||void 0;const o=typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop;if(!i&&e&&t&&o!==!1&&UP(t,e)&&(i={left:0,top:0}),t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:Am(t.hash),behavior:s}:!1;const a=h=>!!(h.meta.pageTransition??Vu),c=a(e)&&a(t)?"page:transition:finish":"page:finish";return new Promise(h=>{r.hooks.hookOnce(c,async()=>{await new Promise(d=>setTimeout(d,0)),t.hash&&(i={el:t.hash,top:Am(t.hash),behavior:s}),h(i)})})}};function Am(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}const BP={hashMode:!1,scrollBehaviorType:"auto"},Qt={...BP,...jP},$P=async t=>{var c;let e,n;if(!((c=t.meta)!=null&&c.validate))return;const r=Ke(),s=Lt(),i=([e,n]=qs(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e);if(i===!0)return;const o=Hl({statusCode:i&&i.statusCode||404,statusMessage:i&&i.statusMessage||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}}),a=s.beforeResolve(u=>{if(a(),u===t){const h=s.afterEach(async()=>{h(),await r.runWithContext(()=>Ns(o)),window==null||window.history.pushState({},"",t.fullPath)});return!1}})},HP=async t=>{let e,n;const r=([e,n]=qs(()=>of(t.path)),e=await e,n(),e);if(r.redirect)return Gn(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},qP=[$P,HP],Xi={};function zP(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const u=i.includes(t.slice(o))?t.slice(o).length:1;let h=i.slice(u);return h[0]!=="/"&&(h="/"+h),qp(h,"")}const a=qp(r,t),c=!n||_A(a,n,{trailingSlash:!0})?a:n;return c+(c.includes("?")?"":s)+i}const WP=un({name:"nuxt:router",enforce:"pre",async setup(t){var N;let e,n,r=di().app.baseURL;Qt.hashMode&&!r.includes("#")&&(r+="#");const s=((N=Qt.history)==null?void 0:N.call(Qt,r))??(Qt.hashMode?nP(r):Dv(r)),i=Qt.routes?([e,n]=qs(()=>Qt.routes(Xc)),e=await e,n(),e??Xc):Xc;let o;const a=AP({...Qt,scrollBehavior:(O,P,_)=>{if(P===nn){o=_;return}if(Qt.scrollBehavior){if(a.options.scrollBehavior=Qt.scrollBehavior,"scrollRestoration"in window.history){const S=a.beforeEach(()=>{S(),window.history.scrollRestoration="manual"})}return Qt.scrollBehavior(O,nn,o||_)}},history:s,routes:i});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const c=ao(a.currentRoute.value);a.afterEach((O,P)=>{c.value=P}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>c.value});const u=zP(r,window.location,t.payload.path),h=ao(a.currentRoute.value),d=()=>{h.value=a.currentRoute.value};t.hook("page:finish",d),a.afterEach((O,P)=>{var _,S,D,L;((S=(_=O.matched[0])==null?void 0:_.components)==null?void 0:S.default)===((L=(D=P.matched[0])==null?void 0:D.components)==null?void 0:L.default)&&d()});const m={};for(const O in h.value)Object.defineProperty(m,O,{get:()=>h.value[O],enumerable:!0});t._route=Nn(m),t._middleware=t._middleware||{global:[],named:{}};const g=$l();a.afterEach(async(O,P,_)=>{delete t._processingMiddleware,!t.isHydrating&&g.value&&await t.runWithContext(yR),_&&await t.callHook("page:loading:end")});try{[e,n]=qs(()=>a.isReady()),await e,n()}catch(O){[e,n]=qs(()=>t.runWithContext(()=>Ns(O))),await e,n()}const A=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value;d();const x=t.payload.state._layout;return a.beforeEach(async(O,P)=>{var _;await t.callHook("page:loading:start"),O.meta=Mr(O.meta),t.isHydrating&&x&&!Tr(O.meta.layout)&&(O.meta.layout=x),t._processingMiddleware=!0;{const S=new Set([...qP,...t._middleware.global]);for(const D of O.matched){const L=D.meta.middleware;if(L)for(const b of cf(L))S.add(b)}{const D=await t.runWithContext(()=>of(O.path));if(D.appMiddleware)for(const L in D.appMiddleware)D.appMiddleware[L]?S.add(L):S.delete(L)}for(const D of S){const L=typeof D=="string"?t._middleware.named[D]||await((_=Xi[D])==null?void 0:_.call(Xi).then(E=>E.default||E)):D;if(!L)throw new Error(`Unknown route middleware: '${D}'.`);const b=await t.runWithContext(()=>L(O,P));if(!t.payload.serverRendered&&t.isHydrating&&(b===!1||b instanceof Error)){const E=b||Uu({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>Ns(E)),!1}if(b!==!0&&(b||b===!1))return b}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),a.afterEach(async(O,P)=>{O.matched.length===0&&await t.runWithContext(()=>Ns(Uu({statusCode:404,fatal:!1,statusMessage:`Page not found: ${O.fullPath}`,data:{path:O.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{"name"in A&&(A.name=void 0),await a.replace({...A,force:!0}),a.options.scrollBehavior=Qt.scrollBehavior}catch(O){await t.runWithContext(()=>Ns(O))}}),{provide:{router:a}}}}),Xu=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),KP=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),Kl=t=>{const e=Ke();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{Xu(()=>t())}):Xu(()=>t())},GP=un({name:"nuxt:payload",setup(t){Lt().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const r=await im(e.path);r&&Object.assign(t.static.data,r.data)}),Kl(()=>{var e;t.hooks.hook("link:prefetch",async n=>{const{hostname:r}=new URL(n,window.location.href);r===window.location.hostname&&await im(n)}),((e=navigator.connection)==null?void 0:e.effectiveType)!=="slow-2g"&&setTimeout(ql,1e3)})}}),QP=un(()=>{const t=Lt();Kl(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),YP=un(t=>{let e;async function n(){const r=await ql();e&&clearTimeout(e),e=setTimeout(n,Qp);try{const s=await $fetch(nf("builds/latest.json")+`?${Date.now()}`);s.id!==r.id&&t.hooks.callHook("app:manifest:update",s)}catch{}}Kl(()=>{e=setTimeout(n,Qp)})});function XP(t={}){const e=t.path||window.location.pathname;let n={};try{n=Za(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Ke().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const JP=un({name:"nuxt:chunk-reload",setup(t){const e=Lt(),n=di(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const a="href"in i&&i.href[0]==="#"?n.app.baseURL+i.href:jl(n.app.baseURL,i.fullPath);XP({path:a,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((i,o)=>{r.has(i)&&s(o)})}}),ZP=un({name:"nuxt:global-components"}),ya={},eC=un({name:"nuxt:prefetch",setup(t){const e=Lt();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof ya[r]=="function"&&await ya[r]()})}),t.hooks.hook("link:prefetch",n=>{if(Gn(n))return;const r=e.resolve(n);if(!r)return;const s=r.meta.layout;let i=cf(r.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof Xi[o]=="function"&&Xi[o]();s&&typeof ya[s]=="function"&&ya[s]()})}});async function jv(t,e=Lt()){const{path:n,matched:r}=e.resolve(t);if(!r.length||(e._routePreloaded||(e._routePreloaded=new Set),e._routePreloaded.has(n)))return;const s=e._preloadPromises=e._preloadPromises||[];if(s.length>4)return Promise.all(s).then(()=>jv(t,e));e._routePreloaded.add(n);const i=r.map(o=>{var a;return(a=o.components)==null?void 0:a.default}).filter(o=>typeof o=="function");for(const o of i){const a=Promise.resolve(o()).catch(()=>{}).finally(()=>s.splice(s.indexOf(a)));s.push(a)}await Promise.all(s)}const tC=(...t)=>t.find(e=>e!==void 0);function nC(t){const e=t.componentName||"NuxtLink";function n(s,i){if(!s||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return s;if(typeof s=="string")return Rm(s,t.trailingSlash);const o="path"in s&&s.path!==void 0?s.path:i(s).path;return{...s,name:void 0,path:Rm(o,t.trailingSlash)}}function r(s){const i=Lt(),o=di(),a=Ue(()=>!!s.target&&s.target!=="_self"),c=Ue(()=>{const x=s.to||s.href||"";return typeof x=="string"&&Gn(x,{acceptRelative:!0})}),u=Tu("RouterLink"),h=u&&typeof u!="string"?u.useLink:void 0,d=Ue(()=>{if(s.external)return!0;const x=s.to||s.href||"";return typeof x=="object"?!1:x===""||c.value}),m=Ue(()=>{const x=s.to||s.href||"";return d.value?x:n(x,i.resolve)}),g=d.value||h==null?void 0:h({...s,to:m}),A=Ue(()=>{var x;if(!m.value||c.value)return m.value;if(d.value){const N=typeof m.value=="object"&&"path"in m.value?Bu(m.value):m.value,O=typeof N=="object"?i.resolve(N).href:N;return n(O,i.resolve)}return typeof m.value=="object"?((x=i.resolve(m.value))==null?void 0:x.href)??null:n(jl(o.app.baseURL,m.value),i.resolve)});return{to:m,hasTarget:a,isAbsoluteUrl:c,isExternal:d,href:A,isActive:(g==null?void 0:g.isActive)??Ue(()=>m.value===i.currentRoute.value.path),isExactActive:(g==null?void 0:g.isExactActive)??Ue(()=>m.value===i.currentRoute.value.path),route:(g==null?void 0:g.route)??Ue(()=>i.resolve(m.value)),async navigate(){await gR(A.value,{replace:s.replace,external:d.value||a.value})}}}return cs({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:r,setup(s,{slots:i}){const o=Lt(),{to:a,href:c,navigate:u,isExternal:h,hasTarget:d,isAbsoluteUrl:m}=r(s),g=Vt(!1),A=Vt(null),x=P=>{var _;A.value=s.custom?(_=P==null?void 0:P.$el)==null?void 0:_.nextElementSibling:P==null?void 0:P.$el};function N(P){var _,S;return!g.value&&(typeof s.prefetchOn=="string"?s.prefetchOn===P:((_=s.prefetchOn)==null?void 0:_[P])??((S=t.prefetchOn)==null?void 0:S[P]))&&(s.prefetch??t.prefetch)!==!1&&s.noPrefetch!==!0&&s.target!=="_blank"&&!oC()}async function O(P=Ke()){if(g.value)return;g.value=!0;const _=typeof a.value=="string"?a.value:h.value?Bu(a.value):o.resolve(a.value).fullPath,S=h.value?new URL(_,window.location.href).href:_;await Promise.all([P.hooks.callHook("link:prefetch",S).catch(()=>{}),!h.value&&!d.value&&jv(a.value,o).catch(()=>{})])}if(N("visibility")){const P=Ke();let _,S=null;Dl(()=>{const D=sC();Kl(()=>{_=Xu(()=>{var L;(L=A==null?void 0:A.value)!=null&&L.tagName&&(S=D.observe(A.value,async()=>{S==null||S(),S=null,await O(P)}))})})}),Oo(()=>{_&&KP(_),S==null||S(),S=null})}return()=>{var S;if(!h.value&&!d.value){const D={ref:x,to:a.value,activeClass:s.activeClass||t.activeClass,exactActiveClass:s.exactActiveClass||t.exactActiveClass,replace:s.replace,ariaCurrentValue:s.ariaCurrentValue,custom:s.custom};return s.custom||(N("interaction")&&(D.onPointerenter=O.bind(null,void 0),D.onFocus=O.bind(null,void 0)),g.value&&(D.class=s.prefetchedClass||t.prefetchedClass),D.rel=s.rel||void 0),Ht(Tu("RouterLink"),D,i.default)}const P=s.target||null,_=tC(s.noRel?"":s.rel,t.externalRelAttribute,m.value||d.value?"noopener noreferrer":"")||null;return s.custom?i.default?i.default({href:c.value,navigate:u,prefetch:O,get route(){if(!c.value)return;const D=new URL(c.value,window.location.href);return{path:D.pathname,fullPath:D.pathname,get query(){return W_(D.search)},hash:D.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:c.value}},rel:_,target:P,isExternal:h.value||d.value,isActive:!1,isExactActive:!1}):null:Ht("a",{ref:A,href:c.value||null,rel:_,target:P},(S=i.default)==null?void 0:S.call(i))}}})}const rC=nC(YA);function Rm(t,e){const n=e==="append"?tl:Ul;return Gn(t)&&!t.startsWith("http")?t:n(t,!0)}function sC(){const t=Ke();if(t._observer)return t._observer;let e=null;const n=new Map,r=(i,o)=>(e||(e=new IntersectionObserver(a=>{for(const c of a){const u=n.get(c.target);(c.isIntersecting||c.intersectionRatio>0)&&u&&u()}})),n.set(i,o),e.observe(i),()=>{n.delete(i),e.unobserve(i),n.size===0&&(e.disconnect(),e=null)});return t._observer={observe:r}}const iC=/2g/;function oC(){const t=navigator.connection;return!!(t&&(t.saveData||iC.test(t.effectiveType)))}/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function aC(t,e,n){return(e=cC(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Sm(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function W(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Sm(Object(n),!0).forEach(function(r){aC(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Sm(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function lC(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function cC(t){var e=lC(t,"string");return typeof e=="symbol"?e:e+""}const Pm=()=>{};let uf={},Bv={},$v=null,Hv={mark:Pm,measure:Pm};try{typeof window<"u"&&(uf=window),typeof document<"u"&&(Bv=document),typeof MutationObserver<"u"&&($v=MutationObserver),typeof performance<"u"&&(Hv=performance)}catch{}const{userAgent:Cm=""}=uf.navigator||{},br=uf,Be=Bv,km=$v,_a=Hv;br.document;const Qn=!!Be.documentElement&&!!Be.head&&typeof Be.addEventListener=="function"&&typeof Be.createElement=="function",qv=~Cm.indexOf("MSIE")||~Cm.indexOf("Trident/");var uC=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,hC=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,zv={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},fC={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Wv=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Tt="classic",Gl="duotone",dC="sharp",pC="sharp-duotone",Kv=[Tt,Gl,dC,pC],mC={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},gC={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},yC=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),_C={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},vC=["fak","fa-kit","fakd","fa-kit-duotone"],xm={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},EC=["kit"],wC={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},TC=["fak","fakd"],bC={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Om={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},va={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},IC=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],AC=["fak","fa-kit","fakd","fa-kit-duotone"],RC={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},SC={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},PC={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Ju={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},CC=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Zu=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...IC,...CC],kC=["solid","regular","light","thin","duotone","brands"],Gv=[1,2,3,4,5,6,7,8,9,10],xC=Gv.concat([11,12,13,14,15,16,17,18,19,20]),OC=[...Object.keys(PC),...kC,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",va.GROUP,va.SWAP_OPACITY,va.PRIMARY,va.SECONDARY].concat(Gv.map(t=>"".concat(t,"x"))).concat(xC.map(t=>"w-".concat(t))),NC={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const jn="___FONT_AWESOME___",eh=16,Qv="fa",Yv="svg-inline--fa",rs="data-fa-i2svg",th="data-fa-pseudo-element",DC="data-fa-pseudo-element-pending",hf="data-prefix",ff="data-icon",Nm="fontawesome-i2svg",MC="async",VC=["HTML","HEAD","STYLE","SCRIPT"],Xv=(()=>{try{return!0}catch{return!1}})();function Do(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Tt]}})}const Jv=W({},zv);Jv[Tt]=W(W(W(W({},{"fa-duotone":"duotone"}),zv[Tt]),xm.kit),xm["kit-duotone"]);const LC=Do(Jv),nh=W({},_C);nh[Tt]=W(W(W(W({},{duotone:"fad"}),nh[Tt]),Om.kit),Om["kit-duotone"]);const Dm=Do(nh),rh=W({},Ju);rh[Tt]=W(W({},rh[Tt]),bC.kit);const df=Do(rh),sh=W({},SC);sh[Tt]=W(W({},sh[Tt]),wC.kit);Do(sh);const FC=uC,Zv="fa-layers-text",UC=hC,jC=W({},mC);Do(jC);const BC=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Jc=fC,$C=[...EC,...OC],Ji=br.FontAwesomeConfig||{};function HC(t){var e=Be.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function qC(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}Be&&typeof Be.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const s=qC(HC(n));s!=null&&(Ji[r]=s)});const eE={styleDefault:"solid",familyDefault:Tt,cssPrefix:Qv,replacementClass:Yv,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ji.familyPrefix&&(Ji.cssPrefix=Ji.familyPrefix);const ni=W(W({},eE),Ji);ni.autoReplaceSvg||(ni.observeMutations=!1);const ae={};Object.keys(eE).forEach(t=>{Object.defineProperty(ae,t,{enumerable:!0,set:function(e){ni[t]=e,Zi.forEach(n=>n(ae))},get:function(){return ni[t]}})});Object.defineProperty(ae,"familyPrefix",{enumerable:!0,set:function(t){ni.cssPrefix=t,Zi.forEach(e=>e(ae))},get:function(){return ni.cssPrefix}});br.FontAwesomeConfig=ae;const Zi=[];function zC(t){return Zi.push(t),()=>{Zi.splice(Zi.indexOf(t),1)}}const rr=eh,mn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function WC(t){if(!t||!Qn)return;const e=Be.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=Be.head.childNodes;let r=null;for(let s=n.length-1;s>-1;s--){const i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return Be.head.insertBefore(e,r),t}const KC="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function mo(){let t=12,e="";for(;t-- >0;)e+=KC[Math.random()*62|0];return e}function pi(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function pf(t){return t.classList?pi(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function tE(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function GC(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(tE(t[n]),'" '),"").trim()}function Ql(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function mf(t){return t.size!==mn.size||t.x!==mn.x||t.y!==mn.y||t.rotate!==mn.rotate||t.flipX||t.flipY}function QC(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:c,path:u}}function YC(t){let{transform:e,width:n=eh,height:r=eh,startCentered:s=!1}=t,i="";return s&&qv?i+="translate(".concat(e.x/rr-n/2,"em, ").concat(e.y/rr-r/2,"em) "):s?i+="translate(calc(-50% + ".concat(e.x/rr,"em), calc(-50% + ").concat(e.y/rr,"em)) "):i+="translate(".concat(e.x/rr,"em, ").concat(e.y/rr,"em) "),i+="scale(".concat(e.size/rr*(e.flipX?-1:1),", ").concat(e.size/rr*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var XC=`:root, :host {
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
}`;function nE(){const t=Qv,e=Yv,n=ae.cssPrefix,r=ae.replacementClass;let s=XC;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return s}let Mm=!1;function Zc(){ae.autoAddCss&&!Mm&&(WC(nE()),Mm=!0)}var JC={mixout(){return{dom:{css:nE,insertCss:Zc}}},hooks(){return{beforeDOMElementCreation(){Zc()},beforeI2svg(){Zc()}}}};const Bn=br||{};Bn[jn]||(Bn[jn]={});Bn[jn].styles||(Bn[jn].styles={});Bn[jn].hooks||(Bn[jn].hooks={});Bn[jn].shims||(Bn[jn].shims=[]);var gn=Bn[jn];const rE=[],sE=function(){Be.removeEventListener("DOMContentLoaded",sE),ll=1,rE.map(t=>t())};let ll=!1;Qn&&(ll=(Be.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Be.readyState),ll||Be.addEventListener("DOMContentLoaded",sE));function ZC(t){Qn&&(ll?setTimeout(t,0):rE.push(t))}function Mo(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?tE(t):"<".concat(e," ").concat(GC(n),">").concat(r.map(Mo).join(""),"</").concat(e,">")}function Vm(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var eu=function(e,n,r,s){var i=Object.keys(e),o=i.length,a=n,c,u,h;for(r===void 0?(c=1,h=e[i[0]]):(c=0,h=r);c<o;c++)u=i[c],h=a(h,e[u],u,e);return h};function e1(t){const e=[];let n=0;const r=t.length;for(;n<r;){const s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function ih(t){const e=e1(t);return e.length===1?e[0].toString(16):null}function t1(t,e){const n=t.length;let r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function Lm(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function oh(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,s=Lm(e);typeof gn.hooks.addPack=="function"&&!r?gn.hooks.addPack(t,Lm(e)):gn.styles[t]=W(W({},gn.styles[t]||{}),s),t==="fas"&&oh("fa",e)}const{styles:go,shims:n1}=gn,iE=Object.keys(df),r1=iE.reduce((t,e)=>(t[e]=Object.keys(df[e]),t),{});let gf=null,oE={},aE={},lE={},cE={},uE={};function s1(t){return~$C.indexOf(t)}function i1(t,e){const n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!s1(s)?s:null}const hE=()=>{const t=r=>eu(go,(s,i,o)=>(s[o]=eu(i,r,{}),s),{});oE=t((r,s,i)=>(s[3]&&(r[s[3]]=i),s[2]&&s[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=i}),r)),aE=t((r,s,i)=>(r[i]=i,s[2]&&s[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=i}),r)),uE=t((r,s,i)=>{const o=s[2];return r[i]=i,o.forEach(a=>{r[a]=i}),r});const e="far"in go||ae.autoFetchSvg,n=eu(n1,(r,s)=>{const i=s[0];let o=s[1];const a=s[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:a}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});lE=n.names,cE=n.unicodes,gf=Yl(ae.styleDefault,{family:ae.familyDefault})};zC(t=>{gf=Yl(t.styleDefault,{family:ae.familyDefault})});hE();function yf(t,e){return(oE[t]||{})[e]}function o1(t,e){return(aE[t]||{})[e]}function Gr(t,e){return(uE[t]||{})[e]}function fE(t){return lE[t]||{prefix:null,iconName:null}}function a1(t){const e=cE[t],n=yf("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ir(){return gf}const dE=()=>({prefix:null,iconName:null,rest:[]});function l1(t){let e=Tt;const n=iE.reduce((r,s)=>(r[s]="".concat(ae.cssPrefix,"-").concat(s),r),{});return Kv.forEach(r=>{(t.includes(n[r])||t.some(s=>r1[r].includes(s)))&&(e=r)}),e}function Yl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Tt}=e,r=LC[n][t];if(n===Gl&&!t)return"fad";const s=Dm[n][t]||Dm[n][r],i=t in gn.styles?t:null;return s||i||null}function c1(t){let e=[],n=null;return t.forEach(r=>{const s=i1(ae.cssPrefix,r);s?n=s:r&&e.push(r)}),{iconName:n,rest:e}}function Fm(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function Xl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const s=Zu.concat(AC),i=Fm(t.filter(d=>s.includes(d))),o=Fm(t.filter(d=>!Zu.includes(d))),a=i.filter(d=>(r=d,!Wv.includes(d))),[c=null]=a,u=l1(i),h=W(W({},c1(o)),{},{prefix:Yl(c,{family:u})});return W(W(W({},h),d1({values:t,family:u,styles:go,config:ae,canonical:h,givenPrefix:r})),u1(n,r,h))}function u1(t,e,n){let{prefix:r,iconName:s}=n;if(t||!r||!s)return{prefix:r,iconName:s};const i=e==="fa"?fE(s):{},o=Gr(r,s);return s=i.iconName||o||s,r=i.prefix||r,r==="far"&&!go.far&&go.fas&&!ae.autoFetchSvg&&(r="fas"),{prefix:r,iconName:s}}const h1=Kv.filter(t=>t!==Tt||t!==Gl),f1=Object.keys(Ju).filter(t=>t!==Tt).map(t=>Object.keys(Ju[t])).flat();function d1(t){const{values:e,family:n,canonical:r,givenPrefix:s="",styles:i={},config:o={}}=t,a=n===Gl,c=e.includes("fa-duotone")||e.includes("fad"),u=o.familyDefault==="duotone",h=r.prefix==="fad"||r.prefix==="fa-duotone";if(!a&&(c||u||h)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&h1.includes(n)&&(Object.keys(i).find(m=>f1.includes(m))||o.autoFetchSvg)){const m=yC.get(n).defaultShortPrefixId;r.prefix=m,r.iconName=Gr(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||s==="fa")&&(r.prefix=Ir()||"fas"),r}class p1{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]=W(W({},this.definitions[i]||{}),s[i]),oh(i,s[i]);const o=df[Tt][i];o&&oh(o,s[i]),hE()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(s=>{const{prefix:i,iconName:o,icon:a}=r[s],c=a[2];e[i]||(e[i]={}),c.length>0&&c.forEach(u=>{typeof u=="string"&&(e[i][u]=a)}),e[i][o]=a}),e}}let Um=[],Ms={};const zs={},m1=Object.keys(zs);function g1(t,e){let{mixoutsTo:n}=e;return Um=t,Ms={},Object.keys(zs).forEach(r=>{m1.indexOf(r)===-1&&delete zs[r]}),Um.forEach(r=>{const s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(n[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=s[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{Ms[o]||(Ms[o]=[]),Ms[o].push(i[o])})}r.provides&&r.provides(zs)}),n}function ah(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];return(Ms[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function ss(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(Ms[t]||[]).forEach(i=>{i.apply(null,n)})}function Ar(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return zs[t]?zs[t].apply(null,e):void 0}function lh(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Ir();if(e)return e=Gr(n,e)||e,Vm(pE.definitions,n,e)||Vm(gn.styles,n,e)}const pE=new p1,y1=()=>{ae.autoReplaceSvg=!1,ae.observeMutations=!1,ss("noAuto")},_1={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Qn?(ss("beforeI2svg",t),Ar("pseudoElements2svg",t),Ar("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;ae.autoReplaceSvg===!1&&(ae.autoReplaceSvg=!0),ae.observeMutations=!0,ZC(()=>{E1({autoReplaceSvgRoot:e}),ss("watch",t)})}},v1={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Gr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Yl(t[0]);return{prefix:n,iconName:Gr(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(ae.cssPrefix,"-"))>-1||t.match(FC))){const e=Xl(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Ir(),iconName:Gr(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Ir();return{prefix:e,iconName:Gr(e,t)||t}}}},zt={noAuto:y1,config:ae,dom:_1,parse:v1,library:pE,findIconDefinition:lh,toHtml:Mo},E1=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Be}=t;(Object.keys(gn.styles).length>0||ae.autoFetchSvg)&&Qn&&ae.autoReplaceSvg&&zt.dom.i2svg({node:e})};function Jl(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Mo(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Qn)return;const n=Be.createElement("div");return n.innerHTML=t.html,n.children}}),t}function w1(t){let{children:e,main:n,mask:r,attributes:s,styles:i,transform:o}=t;if(mf(o)&&n.found&&!r.found){const{width:a,height:c}=n,u={x:a/c/2,y:.5};s.style=Ql(W(W({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function T1(t){let{prefix:e,iconName:n,children:r,attributes:s,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(ae.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:W(W({},s),{},{id:o}),children:r}]}]}function _f(t){const{icons:{main:e,mask:n},prefix:r,iconName:s,transform:i,symbol:o,title:a,maskId:c,titleId:u,extra:h,watchable:d=!1}=t,{width:m,height:g}=n.found?n:e,A=TC.includes(r),x=[ae.replacementClass,s?"".concat(ae.cssPrefix,"-").concat(s):""].filter(D=>h.classes.indexOf(D)===-1).filter(D=>D!==""||!!D).concat(h.classes).join(" ");let N={children:[],attributes:W(W({},h.attributes),{},{"data-prefix":r,"data-icon":s,class:x,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(g)})};const O=A&&!~h.classes.indexOf("fa-fw")?{width:"".concat(m/g*16*.0625,"em")}:{};d&&(N.attributes[rs]=""),a&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(u||mo())},children:[a]}),delete N.attributes.title);const P=W(W({},N),{},{prefix:r,iconName:s,main:e,mask:n,maskId:c,transform:i,symbol:o,styles:W(W({},O),h.styles)}),{children:_,attributes:S}=n.found&&e.found?Ar("generateAbstractMask",P)||{children:[],attributes:{}}:Ar("generateAbstractIcon",P)||{children:[],attributes:{}};return P.children=_,P.attributes=S,o?T1(P):w1(P)}function jm(t){const{content:e,width:n,height:r,transform:s,title:i,extra:o,watchable:a=!1}=t,c=W(W(W({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});a&&(c[rs]="");const u=W({},o.styles);mf(s)&&(u.transform=YC({transform:s,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const h=Ql(u);h.length>0&&(c.style=h);const d=[];return d.push({tag:"span",attributes:c,children:[e]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function b1(t){const{content:e,title:n,extra:r}=t,s=W(W(W({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Ql(r.styles);i.length>0&&(s.style=i);const o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:tu}=gn;function ch(t){const e=t[0],n=t[1],[r]=t.slice(4);let s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(ae.cssPrefix,"-").concat(Jc.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ae.cssPrefix,"-").concat(Jc.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(ae.cssPrefix,"-").concat(Jc.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:s}}const I1={found:!1,width:512,height:512};function A1(t,e){!Xv&&!ae.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function uh(t,e){let n=e;return e==="fa"&&ae.styleDefault!==null&&(e=Ir()),new Promise((r,s)=>{if(n==="fa"){const i=fE(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&tu[e]&&tu[e][t]){const i=tu[e][t];return r(ch(i))}A1(t,e),r(W(W({},I1),{},{icon:ae.showMissingIcons&&t?Ar("missingIconAbstract")||{}:{}}))})}const Bm=()=>{},hh=ae.measurePerformance&&_a&&_a.mark&&_a.measure?_a:{mark:Bm,measure:Bm},Ui='FA "6.7.1"',R1=t=>(hh.mark("".concat(Ui," ").concat(t," begins")),()=>mE(t)),mE=t=>{hh.mark("".concat(Ui," ").concat(t," ends")),hh.measure("".concat(Ui," ").concat(t),"".concat(Ui," ").concat(t," begins"),"".concat(Ui," ").concat(t," ends"))};var vf={begin:R1,end:mE};const Oa=()=>{};function $m(t){return typeof(t.getAttribute?t.getAttribute(rs):null)=="string"}function S1(t){const e=t.getAttribute?t.getAttribute(hf):null,n=t.getAttribute?t.getAttribute(ff):null;return e&&n}function P1(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(ae.replacementClass)}function C1(){return ae.autoReplaceSvg===!0?Na.replace:Na[ae.autoReplaceSvg]||Na.replace}function k1(t){return Be.createElementNS("http://www.w3.org/2000/svg",t)}function x1(t){return Be.createElement(t)}function gE(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?k1:x1}=e;if(typeof t=="string")return Be.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild(gE(i,{ceFn:n}))}),r}function O1(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Na={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(gE(n),e)}),e.getAttribute(rs)===null&&ae.keepOriginalSource){let n=Be.createComment(O1(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~pf(e).indexOf(ae.replacementClass))return Na.replace(t);const r=new RegExp("".concat(ae.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,a)=>(a===ae.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const s=n.map(i=>Mo(i)).join(`
`);e.setAttribute(rs,""),e.innerHTML=s}};function Hm(t){t()}function yE(t,e){const n=typeof e=="function"?e:Oa;if(t.length===0)n();else{let r=Hm;ae.mutateApproach===MC&&(r=br.requestAnimationFrame||Hm),r(()=>{const s=C1(),i=vf.begin("mutate");t.map(s),i(),n()})}}let Ef=!1;function _E(){Ef=!0}function fh(){Ef=!1}let cl=null;function qm(t){if(!km||!ae.observeMutations)return;const{treeCallback:e=Oa,nodeCallback:n=Oa,pseudoElementsCallback:r=Oa,observeMutationsRoot:s=Be}=t;cl=new km(i=>{if(Ef)return;const o=Ir();pi(i).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!$m(a.addedNodes[0])&&(ae.searchPseudoElements&&r(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&ae.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&$m(a.target)&&~BC.indexOf(a.attributeName))if(a.attributeName==="class"&&S1(a.target)){const{prefix:c,iconName:u}=Xl(pf(a.target));a.target.setAttribute(hf,c||o),u&&a.target.setAttribute(ff,u)}else P1(a.target)&&n(a.target)})}),Qn&&cl.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function N1(){cl&&cl.disconnect()}function D1(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,s)=>{const i=s.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function M1(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let s=Xl(pf(t));return s.prefix||(s.prefix=Ir()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=o1(s.prefix,t.innerText)||yf(s.prefix,ih(t.innerText))),!s.iconName&&ae.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function V1(t){const e=pi(t.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return ae.autoA11y&&(n?e["aria-labelledby"]="".concat(ae.replacementClass,"-title-").concat(r||mo()):(e["aria-hidden"]="true",e.focusable="false")),e}function L1(){return{iconName:null,title:null,titleId:null,prefix:null,transform:mn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function zm(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:s}=M1(t),i=V1(t),o=ah("parseNodeAttributes",{},t);let a=e.styleParser?D1(t):[];return W({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:mn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:a,attributes:i}},o)}const{styles:F1}=gn;function vE(t){const e=ae.autoReplaceSvg==="nest"?zm(t,{styleParser:!1}):zm(t);return~e.extra.classes.indexOf(Zv)?Ar("generateLayersText",t,e):Ar("generateSvgReplacementMutation",t,e)}function U1(){return[...vC,...Zu]}function Wm(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Qn)return Promise.resolve();const n=Be.documentElement.classList,r=h=>n.add("".concat(Nm,"-").concat(h)),s=h=>n.remove("".concat(Nm,"-").concat(h)),i=ae.autoFetchSvg?U1():Wv.concat(Object.keys(F1));i.includes("fa")||i.push("fa");const o=[".".concat(Zv,":not([").concat(rs,"])")].concat(i.map(h=>".".concat(h,":not([").concat(rs,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=pi(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),s("complete");else return Promise.resolve();const c=vf.begin("onTree"),u=a.reduce((h,d)=>{try{const m=vE(d);m&&h.push(m)}catch(m){Xv||m.name==="MissingIcon"&&console.error(m)}return h},[]);return new Promise((h,d)=>{Promise.all(u).then(m=>{yE(m,()=>{r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),c(),h()})}).catch(m=>{c(),d(m)})})}function j1(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;vE(t).then(n=>{n&&yE([n],e)})}function B1(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:lh(e||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:lh(s||{})),t(r,W(W({},n),{},{mask:s}))}}const $1=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=mn,symbol:r=!1,mask:s=null,maskId:i=null,title:o=null,titleId:a=null,classes:c=[],attributes:u={},styles:h={}}=e;if(!t)return;const{prefix:d,iconName:m,icon:g}=t;return Jl(W({type:"icon"},t),()=>(ss("beforeDOMElementCreation",{iconDefinition:t,params:e}),ae.autoA11y&&(o?u["aria-labelledby"]="".concat(ae.replacementClass,"-title-").concat(a||mo()):(u["aria-hidden"]="true",u.focusable="false")),_f({icons:{main:ch(g),mask:s?ch(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:m,transform:W(W({},mn),n),symbol:r,title:o,maskId:i,titleId:a,extra:{attributes:u,styles:h,classes:c}})))};var H1={mixout(){return{icon:B1($1)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Wm,t.nodeCallback=j1,t}}},provides(t){t.i2svg=function(e){const{node:n=Be,callback:r=()=>{}}=e;return Wm(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:s,titleId:i,prefix:o,transform:a,symbol:c,mask:u,maskId:h,extra:d}=n;return new Promise((m,g)=>{Promise.all([uh(r,o),u.iconName?uh(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(A=>{let[x,N]=A;m([e,_f({icons:{main:x,mask:N},prefix:o,iconName:r,transform:a,symbol:c,maskId:h,title:s,titleId:i,extra:d,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:s,transform:i,styles:o}=e;const a=Ql(o);a.length>0&&(r.style=a);let c;return mf(i)&&(c=Ar("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(c||s.icon),{children:n,attributes:r}}}},q1={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Jl({type:"layer"},()=>{ss("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(s=>{Array.isArray(s)?s.map(i=>{r=r.concat(i.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(ae.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},z1={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:s={},styles:i={}}=e;return Jl({type:"counter",content:t},()=>(ss("beforeDOMElementCreation",{content:t,params:e}),b1({content:t.toString(),title:n,extra:{attributes:s,styles:i,classes:["".concat(ae.cssPrefix,"-layers-counter"),...r]}})))}}}},W1={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=mn,title:r=null,classes:s=[],attributes:i={},styles:o={}}=e;return Jl({type:"text",content:t},()=>(ss("beforeDOMElementCreation",{content:t,params:e}),jm({content:t,transform:W(W({},mn),n),title:r,extra:{attributes:i,styles:o,classes:["".concat(ae.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:s,extra:i}=n;let o=null,a=null;if(qv){const c=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/c,a=u.height/c}return ae.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,jm({content:e.innerHTML,width:o,height:a,transform:s,title:r,extra:i,watchable:!0})])}}};const K1=new RegExp('"',"ug"),Km=[1105920,1112319],Gm=W(W(W(W({},{FontAwesome:{normal:"fas",400:"fas"}}),gC),NC),RC),dh=Object.keys(Gm).reduce((t,e)=>(t[e.toLowerCase()]=Gm[e],t),{}),G1=Object.keys(dh).reduce((t,e)=>{const n=dh[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Q1(t){const e=t.replace(K1,""),n=t1(e,0),r=n>=Km[0]&&n<=Km[1],s=e.length===2?e[0]===e[1]:!1;return{value:ih(s?e[0]:e),isSecondary:r||s}}function Y1(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),s=isNaN(r)?"normal":r;return(dh[n]||{})[s]||G1[n]}function Qm(t,e){const n="".concat(DC).concat(e.replace(":","-"));return new Promise((r,s)=>{if(t.getAttribute(n)!==null)return r();const o=pi(t.children).filter(m=>m.getAttribute(th)===e)[0],a=br.getComputedStyle(t,e),c=a.getPropertyValue("font-family"),u=c.match(UC),h=a.getPropertyValue("font-weight"),d=a.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&d!=="none"&&d!==""){const m=a.getPropertyValue("content");let g=Y1(c,h);const{value:A,isSecondary:x}=Q1(m),N=u[0].startsWith("FontAwesome");let O=yf(g,A),P=O;if(N){const _=a1(A);_.iconName&&_.prefix&&(O=_.iconName,g=_.prefix)}if(O&&!x&&(!o||o.getAttribute(hf)!==g||o.getAttribute(ff)!==P)){t.setAttribute(n,P),o&&t.removeChild(o);const _=L1(),{extra:S}=_;S.attributes[th]=e,uh(O,g).then(D=>{const L=_f(W(W({},_),{},{icons:{main:D,mask:dE()},prefix:g,iconName:P,extra:S,watchable:!0})),b=Be.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(b,t.firstChild):t.appendChild(b),b.outerHTML=L.map(E=>Mo(E)).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function X1(t){return Promise.all([Qm(t,"::before"),Qm(t,"::after")])}function J1(t){return t.parentNode!==document.head&&!~VC.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(th)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ym(t){if(Qn)return new Promise((e,n)=>{const r=pi(t.querySelectorAll("*")).filter(J1).map(X1),s=vf.begin("searchPseudoElements");_E(),Promise.all(r).then(()=>{s(),fh(),e()}).catch(()=>{s(),fh(),n()})})}var Z1={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Ym,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=Be}=e;ae.searchPseudoElements&&Ym(n)}}};let Xm=!1;var ek={mixout(){return{dom:{unwatch(){_E(),Xm=!0}}}},hooks(){return{bootstrap(){qm(ah("mutationObserverCallbacks",{}))},noAuto(){N1()},watch(t){const{observeMutationsRoot:e}=t;Xm?fh():qm(ah("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Jm=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const s=r.toLowerCase().split("-"),i=s[0];let o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var tk={mixout(){return{parse:{transform:t=>Jm(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Jm(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:s,iconWidth:i}=e;const o={transform:"translate(".concat(s/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(a," ").concat(c," ").concat(u)},d={transform:"translate(".concat(i/2*-1," -256)")},m={outer:o,inner:h,path:d};return{tag:"g",attributes:W({},m.outer),children:[{tag:"g",attributes:W({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:W(W({},n.icon.attributes),m.path)}]}]}}}};const nu={x:0,y:0,width:"100%",height:"100%"};function Zm(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function nk(t){return t.tag==="g"?t.children:[t]}var rk={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Xl(n.split(" ").map(s=>s.trim())):dE();return r.prefix||(r.prefix=Ir()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:s,mask:i,maskId:o,transform:a}=e;const{width:c,icon:u}=s,{width:h,icon:d}=i,m=QC({transform:a,containerWidth:h,iconWidth:c}),g={tag:"rect",attributes:W(W({},nu),{},{fill:"white"})},A=u.children?{children:u.children.map(Zm)}:{},x={tag:"g",attributes:W({},m.inner),children:[Zm(W({tag:u.tag,attributes:W(W({},u.attributes),m.path)},A))]},N={tag:"g",attributes:W({},m.outer),children:[x]},O="mask-".concat(o||mo()),P="clip-".concat(o||mo()),_={tag:"mask",attributes:W(W({},nu),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,N]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:nk(d)},_]};return n.push(S,{tag:"rect",attributes:W({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(O,")")},nu)}),{children:n,attributes:r}}}},sk={provides(t){let e=!1;br.matchMedia&&(e=br.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:W(W({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=W(W({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:W(W({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:W(W({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:W(W({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:W(W({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:W(W({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:W(W({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:W(W({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},ik={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},ok=[JC,H1,q1,z1,W1,Z1,ek,tk,rk,sk,ik];g1(ok,{mixoutsTo:zt});zt.noAuto;zt.config;const ak=zt.library;zt.dom;const ph=zt.parse;zt.findIconDefinition;zt.toHtml;const lk=zt.icon;zt.layer;zt.text;zt.counter;function eg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function On(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?eg(Object(n),!0).forEach(function(r){Ot(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):eg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ck(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function uk(t){var e=ck(t,"string");return typeof e=="symbol"?e:e+""}function ul(t){"@babel/helpers - typeof";return ul=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ul(t)}function Ot(t,e,n){return e=uk(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function hk(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function fk(t,e){if(t==null)return{};var n=hk(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var dk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},EE={exports:{}};(function(t){(function(e){var n=function(O,P,_){if(!u(P)||d(P)||m(P)||g(P)||c(P))return P;var S,D=0,L=0;if(h(P))for(S=[],L=P.length;D<L;D++)S.push(n(O,P[D],_));else{S={};for(var b in P)Object.prototype.hasOwnProperty.call(P,b)&&(S[O(b,_)]=n(O,P[b],_))}return S},r=function(O,P){P=P||{};var _=P.separator||"_",S=P.split||/(?=[A-Z])/;return O.split(S).join(_)},s=function(O){return A(O)?O:(O=O.replace(/[\-_\s]+(.)?/g,function(P,_){return _?_.toUpperCase():""}),O.substr(0,1).toLowerCase()+O.substr(1))},i=function(O){var P=s(O);return P.substr(0,1).toUpperCase()+P.substr(1)},o=function(O,P){return r(O,P).toLowerCase()},a=Object.prototype.toString,c=function(O){return typeof O=="function"},u=function(O){return O===Object(O)},h=function(O){return a.call(O)=="[object Array]"},d=function(O){return a.call(O)=="[object Date]"},m=function(O){return a.call(O)=="[object RegExp]"},g=function(O){return a.call(O)=="[object Boolean]"},A=function(O){return O=O-0,O===O},x=function(O,P){var _=P&&"process"in P?P.process:P;return typeof _!="function"?O:function(S,D){return _(S,O,D)}},N={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(O,P){return n(x(s,P),O)},decamelizeKeys:function(O,P){return n(x(o,P),O,P)},pascalizeKeys:function(O,P){return n(x(i,P),O)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=N:e.humps=N})(dk)})(EE);var pk=EE.exports,mk=["class","style"];function gk(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=pk.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function yk(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function wE(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return wE(c)}),s=Object.keys(t.attributes||{}).reduce(function(c,u){var h=t.attributes[u];switch(u){case"class":c.class=yk(h);break;case"style":c.style=gk(h);break;default:c.attrs[u]=h}return c},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,a=fk(n,mk);return Ht(t.tag,On(On(On({},e),{},{class:s.class,style:On(On({},s.style),o)},s.attrs),a),r)}var TE=!1;try{TE=!0}catch{}function _k(){if(!TE&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ru(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ot({},t,e):{}}function vk(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Ot(Ot(Ot(Ot(Ot(Ot(Ot(Ot(Ot(Ot(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),Ot(Ot(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function tg(t){if(t&&ul(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(ph.icon)return ph.icon(t);if(t===null)return null;if(ul(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Ek=cs({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=Ue(function(){return tg(e.icon)}),i=Ue(function(){return ru("classes",vk(e))}),o=Ue(function(){return ru("transform",typeof e.transform=="string"?ph.transform(e.transform):e.transform)}),a=Ue(function(){return ru("mask",tg(e.mask))}),c=Ue(function(){return lk(s.value,On(On(On(On({},i.value),o.value),a.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});yr(c,function(h){if(!h)return _k("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var u=Ue(function(){return c.value?wE(c.value.abstract[0],{},r):null});return function(){return u.value}}});/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const wk={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Tk=un(t=>{ak.add(wk),t.vueApp.component("font-awesome-icon",Ek)});var ng={};/**
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
 */const bE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},bk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},IE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,h=i>>2,d=(i&3)<<4|a>>4;let m=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(m=64)),r.push(n[h],n[d],n[m],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):bk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||d==null)throw new Ik;const m=i<<2|a>>4;if(r.push(m),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const A=u<<6&192|d;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ik extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ak=function(t){const e=bE(t);return IE.encodeByteArray(e,!0)},hl=function(t){return Ak(t).replace(/\./g,"")},AE=function(t){try{return IE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Rk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Sk=()=>Rk().__FIREBASE_DEFAULTS__,Pk=()=>{if(typeof process>"u"||typeof ng>"u")return;const t=ng.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ck=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&AE(t[1]);return e&&JSON.parse(e)},Zl=()=>{try{return Sk()||Pk()||Ck()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},RE=t=>{var e,n;return(n=(e=Zl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},kk=t=>{const e=RE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},SE=()=>{var t;return(t=Zl())===null||t===void 0?void 0:t.config},PE=t=>{var e;return(e=Zl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class xk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ok(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[hl(JSON.stringify(n)),hl(JSON.stringify(o)),""].join(".")}/**
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
 */function bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Nk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bt())}function Dk(){var t;const e=(t=Zl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function Mk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Vk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Lk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fk(){const t=bt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Uk(){return!Dk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function jk(){try{return typeof indexedDB=="object"}catch{return!1}}function Bk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const $k="FirebaseError";class Yn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$k,Object.setPrototypeOf(this,Yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vo.prototype.create)}}class Vo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Hk(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Yn(s,a,r)}}function Hk(t,e){return t.replace(qk,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const qk=/\{\$([^}]+)}/g;function zk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(rg(i)&&rg(o)){if(!fl(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function rg(t){return t!==null&&typeof t=="object"}/**
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
 */function Lo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Wk(t,e){const n=new Kk(t,e);return n.subscribe.bind(n)}class Kk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Gk(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=su),s.error===void 0&&(s.error=su),s.complete===void 0&&(s.complete=su);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function su(){}/**
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
 */function Zt(t){return t&&t._delegate?t._delegate:t}class is{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Qk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new xk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xk(e))try{this.getOrInitializeService({instanceIdentifier:Wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wr){return this.instances.has(e)}getOptions(e=Wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wr){return this.component?this.component.multipleInstances?e:Wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yk(t){return t===Wr?void 0:t}function Xk(t){return t.instantiationMode==="EAGER"}/**
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
 */class Jk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Qk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const Zk={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},ex=Ee.INFO,tx={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},nx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=tx[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wf{constructor(e){this.name=e,this._logLevel=ex,this._logHandler=nx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const rx=(t,e)=>e.some(n=>t instanceof n);let sg,ig;function sx(){return sg||(sg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ix(){return ig||(ig=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const CE=new WeakMap,mh=new WeakMap,kE=new WeakMap,iu=new WeakMap,Tf=new WeakMap;function ox(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(_r(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&CE.set(n,t)}).catch(()=>{}),Tf.set(e,t),e}function ax(t){if(mh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});mh.set(t,e)}let gh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return mh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||kE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _r(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function lx(t){gh=t(gh)}function cx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ou(this),e,...n);return kE.set(r,e.sort?e.sort():[e]),_r(r)}:ix().includes(t)?function(...e){return t.apply(ou(this),e),_r(CE.get(this))}:function(...e){return _r(t.apply(ou(this),e))}}function ux(t){return typeof t=="function"?cx(t):(t instanceof IDBTransaction&&ax(t),rx(t,sx())?new Proxy(t,gh):t)}function _r(t){if(t instanceof IDBRequest)return ox(t);if(iu.has(t))return iu.get(t);const e=ux(t);return e!==t&&(iu.set(t,e),Tf.set(e,t)),e}const ou=t=>Tf.get(t);function hx(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=_r(o);return r&&o.addEventListener("upgradeneeded",c=>{r(_r(o.result),c.oldVersion,c.newVersion,_r(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const fx=["get","getKey","getAll","getAllKeys","count"],dx=["put","add","delete","clear"],au=new Map;function og(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(au.get(e))return au.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=dx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||fx.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return au.set(e,i),i}lx(t=>({...t,get:(e,n,r)=>og(e,n)||t.get(e,n,r),has:(e,n)=>!!og(e,n)||t.has(e,n)}));/**
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
 */class px{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(mx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function mx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yh="@firebase/app",ag="0.10.16";/**
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
 */const $n=new wf("@firebase/app"),gx="@firebase/app-compat",yx="@firebase/analytics-compat",_x="@firebase/analytics",vx="@firebase/app-check-compat",Ex="@firebase/app-check",wx="@firebase/auth",Tx="@firebase/auth-compat",bx="@firebase/database",Ix="@firebase/data-connect",Ax="@firebase/database-compat",Rx="@firebase/functions",Sx="@firebase/functions-compat",Px="@firebase/installations",Cx="@firebase/installations-compat",kx="@firebase/messaging",xx="@firebase/messaging-compat",Ox="@firebase/performance",Nx="@firebase/performance-compat",Dx="@firebase/remote-config",Mx="@firebase/remote-config-compat",Vx="@firebase/storage",Lx="@firebase/storage-compat",Fx="@firebase/firestore",Ux="@firebase/vertexai",jx="@firebase/firestore-compat",Bx="firebase",$x="11.0.2";/**
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
 */const _h="[DEFAULT]",Hx={[yh]:"fire-core",[gx]:"fire-core-compat",[_x]:"fire-analytics",[yx]:"fire-analytics-compat",[Ex]:"fire-app-check",[vx]:"fire-app-check-compat",[wx]:"fire-auth",[Tx]:"fire-auth-compat",[bx]:"fire-rtdb",[Ix]:"fire-data-connect",[Ax]:"fire-rtdb-compat",[Rx]:"fire-fn",[Sx]:"fire-fn-compat",[Px]:"fire-iid",[Cx]:"fire-iid-compat",[kx]:"fire-fcm",[xx]:"fire-fcm-compat",[Ox]:"fire-perf",[Nx]:"fire-perf-compat",[Dx]:"fire-rc",[Mx]:"fire-rc-compat",[Vx]:"fire-gcs",[Lx]:"fire-gcs-compat",[Fx]:"fire-fst",[jx]:"fire-fst-compat",[Ux]:"fire-vertex","fire-js":"fire-js",[Bx]:"fire-js-all"};/**
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
 */const dl=new Map,qx=new Map,vh=new Map;function lg(t,e){try{t.container.addComponent(e)}catch(n){$n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ri(t){const e=t.name;if(vh.has(e))return $n.debug(`There were multiple attempts to register component ${e}.`),!1;vh.set(e,t);for(const n of dl.values())lg(n,t);for(const n of qx.values())lg(n,t);return!0}function bf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function pr(t){return t.settings!==void 0}/**
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
 */const zx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vr=new Vo("app","Firebase",zx);/**
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
 */class Wx{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new is("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vr.create("app-deleted",{appName:this._name})}}/**
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
 */const mi=$x;function xE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:_h,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw vr.create("bad-app-name",{appName:String(s)});if(n||(n=SE()),!n)throw vr.create("no-options");const i=dl.get(s);if(i){if(fl(n,i.options)&&fl(r,i.config))return i;throw vr.create("duplicate-app",{appName:s})}const o=new Jk(s);for(const c of vh.values())o.addComponent(c);const a=new Wx(n,r,o);return dl.set(s,a),a}function OE(t=_h){const e=dl.get(t);if(!e&&t===_h&&SE())return xE();if(!e)throw vr.create("no-app",{appName:t});return e}function Er(t,e,n){var r;let s=(r=Hx[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$n.warn(a.join(" "));return}ri(new is(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Kx="firebase-heartbeat-database",Gx=1,yo="firebase-heartbeat-store";let lu=null;function NE(){return lu||(lu=hx(Kx,Gx,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(yo)}catch(n){console.warn(n)}}}}).catch(t=>{throw vr.create("idb-open",{originalErrorMessage:t.message})})),lu}async function Qx(t){try{const n=(await NE()).transaction(yo),r=await n.objectStore(yo).get(DE(t));return await n.done,r}catch(e){if(e instanceof Yn)$n.warn(e.message);else{const n=vr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$n.warn(n.message)}}}async function cg(t,e){try{const r=(await NE()).transaction(yo,"readwrite");await r.objectStore(yo).put(e,DE(t)),await r.done}catch(n){if(n instanceof Yn)$n.warn(n.message);else{const r=vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$n.warn(r.message)}}}function DE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Yx=1024,Xx=30*24*60*60*1e3;class Jx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ug();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Xx}),this._storage.overwrite(this._heartbeatsCache))}catch(r){$n.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ug(),{heartbeatsToSend:r,unsentEntries:s}=Zx(this._heartbeatsCache.heartbeats),i=hl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return $n.warn(n),""}}}function ug(){return new Date().toISOString().substring(0,10)}function Zx(t,e=Yx){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),hg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),hg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class eO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jk()?Bk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Qx(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return cg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return cg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function hg(t){return hl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function tO(t){ri(new is("platform-logger",e=>new px(e),"PRIVATE")),ri(new is("heartbeat",e=>new Jx(e),"PRIVATE")),Er(yh,ag,t),Er(yh,ag,"esm2017"),Er("fire-js","")}tO("");var nO="firebase",rO="11.0.2";/**
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
 */Er(nO,rO,"app");var fg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ts,ME;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,E){function v(){}v.prototype=E.prototype,b.D=E.prototype,b.prototype=new v,b.prototype.constructor=b,b.C=function(w,k,R){for(var T=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)T[ye-2]=arguments[ye];return E.prototype[k].apply(w,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,E,v){v||(v=0);var w=Array(16);if(typeof E=="string")for(var k=0;16>k;++k)w[k]=E.charCodeAt(v++)|E.charCodeAt(v++)<<8|E.charCodeAt(v++)<<16|E.charCodeAt(v++)<<24;else for(k=0;16>k;++k)w[k]=E[v++]|E[v++]<<8|E[v++]<<16|E[v++]<<24;E=b.g[0],v=b.g[1],k=b.g[2];var R=b.g[3],T=E+(R^v&(k^R))+w[0]+3614090360&4294967295;E=v+(T<<7&4294967295|T>>>25),T=R+(k^E&(v^k))+w[1]+3905402710&4294967295,R=E+(T<<12&4294967295|T>>>20),T=k+(v^R&(E^v))+w[2]+606105819&4294967295,k=R+(T<<17&4294967295|T>>>15),T=v+(E^k&(R^E))+w[3]+3250441966&4294967295,v=k+(T<<22&4294967295|T>>>10),T=E+(R^v&(k^R))+w[4]+4118548399&4294967295,E=v+(T<<7&4294967295|T>>>25),T=R+(k^E&(v^k))+w[5]+1200080426&4294967295,R=E+(T<<12&4294967295|T>>>20),T=k+(v^R&(E^v))+w[6]+2821735955&4294967295,k=R+(T<<17&4294967295|T>>>15),T=v+(E^k&(R^E))+w[7]+4249261313&4294967295,v=k+(T<<22&4294967295|T>>>10),T=E+(R^v&(k^R))+w[8]+1770035416&4294967295,E=v+(T<<7&4294967295|T>>>25),T=R+(k^E&(v^k))+w[9]+2336552879&4294967295,R=E+(T<<12&4294967295|T>>>20),T=k+(v^R&(E^v))+w[10]+4294925233&4294967295,k=R+(T<<17&4294967295|T>>>15),T=v+(E^k&(R^E))+w[11]+2304563134&4294967295,v=k+(T<<22&4294967295|T>>>10),T=E+(R^v&(k^R))+w[12]+1804603682&4294967295,E=v+(T<<7&4294967295|T>>>25),T=R+(k^E&(v^k))+w[13]+4254626195&4294967295,R=E+(T<<12&4294967295|T>>>20),T=k+(v^R&(E^v))+w[14]+2792965006&4294967295,k=R+(T<<17&4294967295|T>>>15),T=v+(E^k&(R^E))+w[15]+1236535329&4294967295,v=k+(T<<22&4294967295|T>>>10),T=E+(k^R&(v^k))+w[1]+4129170786&4294967295,E=v+(T<<5&4294967295|T>>>27),T=R+(v^k&(E^v))+w[6]+3225465664&4294967295,R=E+(T<<9&4294967295|T>>>23),T=k+(E^v&(R^E))+w[11]+643717713&4294967295,k=R+(T<<14&4294967295|T>>>18),T=v+(R^E&(k^R))+w[0]+3921069994&4294967295,v=k+(T<<20&4294967295|T>>>12),T=E+(k^R&(v^k))+w[5]+3593408605&4294967295,E=v+(T<<5&4294967295|T>>>27),T=R+(v^k&(E^v))+w[10]+38016083&4294967295,R=E+(T<<9&4294967295|T>>>23),T=k+(E^v&(R^E))+w[15]+3634488961&4294967295,k=R+(T<<14&4294967295|T>>>18),T=v+(R^E&(k^R))+w[4]+3889429448&4294967295,v=k+(T<<20&4294967295|T>>>12),T=E+(k^R&(v^k))+w[9]+568446438&4294967295,E=v+(T<<5&4294967295|T>>>27),T=R+(v^k&(E^v))+w[14]+3275163606&4294967295,R=E+(T<<9&4294967295|T>>>23),T=k+(E^v&(R^E))+w[3]+4107603335&4294967295,k=R+(T<<14&4294967295|T>>>18),T=v+(R^E&(k^R))+w[8]+1163531501&4294967295,v=k+(T<<20&4294967295|T>>>12),T=E+(k^R&(v^k))+w[13]+2850285829&4294967295,E=v+(T<<5&4294967295|T>>>27),T=R+(v^k&(E^v))+w[2]+4243563512&4294967295,R=E+(T<<9&4294967295|T>>>23),T=k+(E^v&(R^E))+w[7]+1735328473&4294967295,k=R+(T<<14&4294967295|T>>>18),T=v+(R^E&(k^R))+w[12]+2368359562&4294967295,v=k+(T<<20&4294967295|T>>>12),T=E+(v^k^R)+w[5]+4294588738&4294967295,E=v+(T<<4&4294967295|T>>>28),T=R+(E^v^k)+w[8]+2272392833&4294967295,R=E+(T<<11&4294967295|T>>>21),T=k+(R^E^v)+w[11]+1839030562&4294967295,k=R+(T<<16&4294967295|T>>>16),T=v+(k^R^E)+w[14]+4259657740&4294967295,v=k+(T<<23&4294967295|T>>>9),T=E+(v^k^R)+w[1]+2763975236&4294967295,E=v+(T<<4&4294967295|T>>>28),T=R+(E^v^k)+w[4]+1272893353&4294967295,R=E+(T<<11&4294967295|T>>>21),T=k+(R^E^v)+w[7]+4139469664&4294967295,k=R+(T<<16&4294967295|T>>>16),T=v+(k^R^E)+w[10]+3200236656&4294967295,v=k+(T<<23&4294967295|T>>>9),T=E+(v^k^R)+w[13]+681279174&4294967295,E=v+(T<<4&4294967295|T>>>28),T=R+(E^v^k)+w[0]+3936430074&4294967295,R=E+(T<<11&4294967295|T>>>21),T=k+(R^E^v)+w[3]+3572445317&4294967295,k=R+(T<<16&4294967295|T>>>16),T=v+(k^R^E)+w[6]+76029189&4294967295,v=k+(T<<23&4294967295|T>>>9),T=E+(v^k^R)+w[9]+3654602809&4294967295,E=v+(T<<4&4294967295|T>>>28),T=R+(E^v^k)+w[12]+3873151461&4294967295,R=E+(T<<11&4294967295|T>>>21),T=k+(R^E^v)+w[15]+530742520&4294967295,k=R+(T<<16&4294967295|T>>>16),T=v+(k^R^E)+w[2]+3299628645&4294967295,v=k+(T<<23&4294967295|T>>>9),T=E+(k^(v|~R))+w[0]+4096336452&4294967295,E=v+(T<<6&4294967295|T>>>26),T=R+(v^(E|~k))+w[7]+1126891415&4294967295,R=E+(T<<10&4294967295|T>>>22),T=k+(E^(R|~v))+w[14]+2878612391&4294967295,k=R+(T<<15&4294967295|T>>>17),T=v+(R^(k|~E))+w[5]+4237533241&4294967295,v=k+(T<<21&4294967295|T>>>11),T=E+(k^(v|~R))+w[12]+1700485571&4294967295,E=v+(T<<6&4294967295|T>>>26),T=R+(v^(E|~k))+w[3]+2399980690&4294967295,R=E+(T<<10&4294967295|T>>>22),T=k+(E^(R|~v))+w[10]+4293915773&4294967295,k=R+(T<<15&4294967295|T>>>17),T=v+(R^(k|~E))+w[1]+2240044497&4294967295,v=k+(T<<21&4294967295|T>>>11),T=E+(k^(v|~R))+w[8]+1873313359&4294967295,E=v+(T<<6&4294967295|T>>>26),T=R+(v^(E|~k))+w[15]+4264355552&4294967295,R=E+(T<<10&4294967295|T>>>22),T=k+(E^(R|~v))+w[6]+2734768916&4294967295,k=R+(T<<15&4294967295|T>>>17),T=v+(R^(k|~E))+w[13]+1309151649&4294967295,v=k+(T<<21&4294967295|T>>>11),T=E+(k^(v|~R))+w[4]+4149444226&4294967295,E=v+(T<<6&4294967295|T>>>26),T=R+(v^(E|~k))+w[11]+3174756917&4294967295,R=E+(T<<10&4294967295|T>>>22),T=k+(E^(R|~v))+w[2]+718787259&4294967295,k=R+(T<<15&4294967295|T>>>17),T=v+(R^(k|~E))+w[9]+3951481745&4294967295,b.g[0]=b.g[0]+E&4294967295,b.g[1]=b.g[1]+(k+(T<<21&4294967295|T>>>11))&4294967295,b.g[2]=b.g[2]+k&4294967295,b.g[3]=b.g[3]+R&4294967295}r.prototype.u=function(b,E){E===void 0&&(E=b.length);for(var v=E-this.blockSize,w=this.B,k=this.h,R=0;R<E;){if(k==0)for(;R<=v;)s(this,b,R),R+=this.blockSize;if(typeof b=="string"){for(;R<E;)if(w[k++]=b.charCodeAt(R++),k==this.blockSize){s(this,w),k=0;break}}else for(;R<E;)if(w[k++]=b[R++],k==this.blockSize){s(this,w),k=0;break}}this.h=k,this.o+=E},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var E=1;E<b.length-8;++E)b[E]=0;var v=8*this.o;for(E=b.length-8;E<b.length;++E)b[E]=v&255,v/=256;for(this.u(b),b=Array(16),E=v=0;4>E;++E)for(var w=0;32>w;w+=8)b[v++]=this.g[E]>>>w&255;return b};function i(b,E){var v=a;return Object.prototype.hasOwnProperty.call(v,b)?v[b]:v[b]=E(b)}function o(b,E){this.h=E;for(var v=[],w=!0,k=b.length-1;0<=k;k--){var R=b[k]|0;w&&R==E||(v[k]=R,w=!1)}this.g=v}var a={};function c(b){return-128<=b&&128>b?i(b,function(E){return new o([E|0],0>E?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return d;if(0>b)return N(u(-b));for(var E=[],v=1,w=0;b>=v;w++)E[w]=b/v|0,v*=4294967296;return new o(E,0)}function h(b,E){if(b.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(b.charAt(0)=="-")return N(h(b.substring(1),E));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(E,8)),w=d,k=0;k<b.length;k+=8){var R=Math.min(8,b.length-k),T=parseInt(b.substring(k,k+R),E);8>R?(R=u(Math.pow(E,R)),w=w.j(R).add(u(T))):(w=w.j(v),w=w.add(u(T)))}return w}var d=c(0),m=c(1),g=c(16777216);t=o.prototype,t.m=function(){if(x(this))return-N(this).m();for(var b=0,E=1,v=0;v<this.g.length;v++){var w=this.i(v);b+=(0<=w?w:4294967296+w)*E,E*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(A(this))return"0";if(x(this))return"-"+N(this).toString(b);for(var E=u(Math.pow(b,6)),v=this,w="";;){var k=S(v,E).g;v=O(v,k.j(E));var R=((0<v.g.length?v.g[0]:v.h)>>>0).toString(b);if(v=k,A(v))return R+w;for(;6>R.length;)R="0"+R;w=R+w}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function A(b){if(b.h!=0)return!1;for(var E=0;E<b.g.length;E++)if(b.g[E]!=0)return!1;return!0}function x(b){return b.h==-1}t.l=function(b){return b=O(this,b),x(b)?-1:A(b)?0:1};function N(b){for(var E=b.g.length,v=[],w=0;w<E;w++)v[w]=~b.g[w];return new o(v,~b.h).add(m)}t.abs=function(){return x(this)?N(this):this},t.add=function(b){for(var E=Math.max(this.g.length,b.g.length),v=[],w=0,k=0;k<=E;k++){var R=w+(this.i(k)&65535)+(b.i(k)&65535),T=(R>>>16)+(this.i(k)>>>16)+(b.i(k)>>>16);w=T>>>16,R&=65535,T&=65535,v[k]=T<<16|R}return new o(v,v[v.length-1]&-2147483648?-1:0)};function O(b,E){return b.add(N(E))}t.j=function(b){if(A(this)||A(b))return d;if(x(this))return x(b)?N(this).j(N(b)):N(N(this).j(b));if(x(b))return N(this.j(N(b)));if(0>this.l(g)&&0>b.l(g))return u(this.m()*b.m());for(var E=this.g.length+b.g.length,v=[],w=0;w<2*E;w++)v[w]=0;for(w=0;w<this.g.length;w++)for(var k=0;k<b.g.length;k++){var R=this.i(w)>>>16,T=this.i(w)&65535,ye=b.i(k)>>>16,ve=b.i(k)&65535;v[2*w+2*k]+=T*ve,P(v,2*w+2*k),v[2*w+2*k+1]+=R*ve,P(v,2*w+2*k+1),v[2*w+2*k+1]+=T*ye,P(v,2*w+2*k+1),v[2*w+2*k+2]+=R*ye,P(v,2*w+2*k+2)}for(w=0;w<E;w++)v[w]=v[2*w+1]<<16|v[2*w];for(w=E;w<2*E;w++)v[w]=0;return new o(v,0)};function P(b,E){for(;(b[E]&65535)!=b[E];)b[E+1]+=b[E]>>>16,b[E]&=65535,E++}function _(b,E){this.g=b,this.h=E}function S(b,E){if(A(E))throw Error("division by zero");if(A(b))return new _(d,d);if(x(b))return E=S(N(b),E),new _(N(E.g),N(E.h));if(x(E))return E=S(b,N(E)),new _(N(E.g),E.h);if(30<b.g.length){if(x(b)||x(E))throw Error("slowDivide_ only works with positive integers.");for(var v=m,w=E;0>=w.l(b);)v=D(v),w=D(w);var k=L(v,1),R=L(w,1);for(w=L(w,2),v=L(v,2);!A(w);){var T=R.add(w);0>=T.l(b)&&(k=k.add(v),R=T),w=L(w,1),v=L(v,1)}return E=O(b,k.j(E)),new _(k,E)}for(k=d;0<=b.l(E);){for(v=Math.max(1,Math.floor(b.m()/E.m())),w=Math.ceil(Math.log(v)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),R=u(v),T=R.j(E);x(T)||0<T.l(b);)v-=w,R=u(v),T=R.j(E);A(R)&&(R=m),k=k.add(R),b=O(b,T)}return new _(k,b)}t.A=function(b){return S(this,b).h},t.and=function(b){for(var E=Math.max(this.g.length,b.g.length),v=[],w=0;w<E;w++)v[w]=this.i(w)&b.i(w);return new o(v,this.h&b.h)},t.or=function(b){for(var E=Math.max(this.g.length,b.g.length),v=[],w=0;w<E;w++)v[w]=this.i(w)|b.i(w);return new o(v,this.h|b.h)},t.xor=function(b){for(var E=Math.max(this.g.length,b.g.length),v=[],w=0;w<E;w++)v[w]=this.i(w)^b.i(w);return new o(v,this.h^b.h)};function D(b){for(var E=b.g.length+1,v=[],w=0;w<E;w++)v[w]=b.i(w)<<1|b.i(w-1)>>>31;return new o(v,b.h)}function L(b,E){var v=E>>5;E%=32;for(var w=b.g.length-v,k=[],R=0;R<w;R++)k[R]=0<E?b.i(R+v)>>>E|b.i(R+v+1)<<32-E:b.i(R+v);return new o(k,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ME=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,ts=o}).apply(typeof fg<"u"?fg:typeof self<"u"?self:typeof window<"u"?window:{});var Ea=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var VE,ji,LE,Da,Eh,FE,UE,jE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,p){return l==Array.prototype||l==Object.prototype||(l[f]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ea=="object"&&Ea];for(var f=0;f<l.length;++f){var p=l[f];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(l,f){if(f)e:{var p=r;l=l.split(".");for(var y=0;y<l.length-1;y++){var M=l[y];if(!(M in p))break e;p=p[M]}l=l[l.length-1],y=p[l],f=f(y),f!=y&&f!=null&&e(p,l,{configurable:!0,writable:!0,value:f})}}function i(l,f){l instanceof String&&(l+="");var p=0,y=!1,M={next:function(){if(!y&&p<l.length){var F=p++;return{value:f(F,l[F]),done:!1}}return y=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}s("Array.prototype.values",function(l){return l||function(){return i(this,function(f,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function u(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function h(l,f,p){return l.call.apply(l.bind,arguments)}function d(l,f,p){if(!l)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,y),l.apply(f,M)}}return function(){return l.apply(f,arguments)}}function m(l,f,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,m.apply(null,arguments)}function g(l,f){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),l.apply(this,y)}}function A(l,f){function p(){}p.prototype=f.prototype,l.aa=f.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(y,M,F){for(var Q=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)Q[Ne-2]=arguments[Ne];return f.prototype[M].apply(y,Q)}}function x(l){const f=l.length;if(0<f){const p=Array(f);for(let y=0;y<f;y++)p[y]=l[y];return p}return[]}function N(l,f){for(let p=1;p<arguments.length;p++){const y=arguments[p];if(c(y)){const M=l.length||0,F=y.length||0;l.length=M+F;for(let Q=0;Q<F;Q++)l[M+Q]=y[Q]}else l.push(y)}}class O{constructor(f,p){this.i=f,this.j=p,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function P(l){return/^[\s\xa0]*$/.test(l)}function _(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function S(l){return S[" "](l),l}S[" "]=function(){};var D=_().indexOf("Gecko")!=-1&&!(_().toLowerCase().indexOf("webkit")!=-1&&_().indexOf("Edge")==-1)&&!(_().indexOf("Trident")!=-1||_().indexOf("MSIE")!=-1)&&_().indexOf("Edge")==-1;function L(l,f,p){for(const y in l)f.call(p,l[y],y,l)}function b(l,f){for(const p in l)f.call(void 0,l[p],p,l)}function E(l){const f={};for(const p in l)f[p]=l[p];return f}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(l,f){let p,y;for(let M=1;M<arguments.length;M++){y=arguments[M];for(p in y)l[p]=y[p];for(let F=0;F<v.length;F++)p=v[F],Object.prototype.hasOwnProperty.call(y,p)&&(l[p]=y[p])}}function k(l){var f=1;l=l.split(":");const p=[];for(;0<f&&l.length;)p.push(l.shift()),f--;return l.length&&p.push(l.join(":")),p}function R(l){a.setTimeout(()=>{throw l},0)}function T(){var l=qe;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class ye{constructor(){this.h=this.g=null}add(f,p){const y=ve.get();y.set(f,p),this.h?this.h.next=y:this.g=y,this.h=y}}var ve=new O(()=>new re,l=>l.reset());class re{constructor(){this.next=this.g=this.h=null}set(f,p){this.h=f,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let fe,ne=!1,qe=new ye,en=()=>{const l=a.Promise.resolve(void 0);fe=()=>{l.then(Wt)}};var Wt=()=>{for(var l;l=T();){try{l.h.call(l.g)}catch(p){R(p)}var f=ve;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}ne=!1};function ze(){this.s=this.s,this.C=this.C}ze.prototype.s=!1,ze.prototype.ma=function(){this.s||(this.s=!0,this.N())},ze.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function We(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}We.prototype.h=function(){this.defaultPrevented=!0};var Xn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,f),a.removeEventListener("test",p,f)}catch{}return l}();function hn(l,f){if(We.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,y=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(D){e:{try{S(f.nodeName);var M=!0;break e}catch{}M=!1}M||(f=null)}}else p=="mouseover"?f=l.fromElement:p=="mouseout"&&(f=l.toElement);this.relatedTarget=f,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:xt[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&hn.aa.h.call(this)}}A(hn,We);var xt={2:"touch",3:"pen",4:"mouse"};hn.prototype.h=function(){hn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var j="closure_listenable_"+(1e6*Math.random()|0),Z=0;function X(l,f,p,y,M){this.listener=l,this.proxy=null,this.src=f,this.type=p,this.capture=!!y,this.ha=M,this.key=++Z,this.da=this.fa=!1}function se(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Te(l){this.src=l,this.g={},this.h=0}Te.prototype.add=function(l,f,p,y,M){var F=l.toString();l=this.g[F],l||(l=this.g[F]=[],this.h++);var Q=I(l,f,y,M);return-1<Q?(f=l[Q],p||(f.fa=!1)):(f=new X(f,this.src,F,!!y,M),f.fa=p,l.push(f)),f};function Oe(l,f){var p=f.type;if(p in l.g){var y=l.g[p],M=Array.prototype.indexOf.call(y,f,void 0),F;(F=0<=M)&&Array.prototype.splice.call(y,M,1),F&&(se(f),l.g[p].length==0&&(delete l.g[p],l.h--))}}function I(l,f,p,y){for(var M=0;M<l.length;++M){var F=l[M];if(!F.da&&F.listener==f&&F.capture==!!p&&F.ha==y)return M}return-1}var C="closure_lm_"+(1e6*Math.random()|0),V={};function H(l,f,p,y,M){if(Array.isArray(f)){for(var F=0;F<f.length;F++)H(l,f[F],p,y,M);return null}return p=oe(p),l&&l[j]?l.K(f,p,u(y)?!!y.capture:!!y,M):U(l,f,p,!1,y,M)}function U(l,f,p,y,M,F){if(!f)throw Error("Invalid event type");var Q=u(M)?!!M.capture:!!M,Ne=ce(l);if(Ne||(l[C]=Ne=new Te(l)),p=Ne.add(f,p,y,Q,F),p.proxy)return p;if(y=q(),p.proxy=y,y.src=l,y.listener=p,l.addEventListener)Xn||(M=Q),M===void 0&&(M=!1),l.addEventListener(f.toString(),y,M);else if(l.attachEvent)l.attachEvent(K(f.toString()),y);else if(l.addListener&&l.removeListener)l.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function q(){function l(p){return f.call(l.src,l.listener,p)}const f=z;return l}function Y(l,f,p,y,M){if(Array.isArray(f))for(var F=0;F<f.length;F++)Y(l,f[F],p,y,M);else y=u(y)?!!y.capture:!!y,p=oe(p),l&&l[j]?(l=l.i,f=String(f).toString(),f in l.g&&(F=l.g[f],p=I(F,p,y,M),-1<p&&(se(F[p]),Array.prototype.splice.call(F,p,1),F.length==0&&(delete l.g[f],l.h--)))):l&&(l=ce(l))&&(f=l.g[f.toString()],l=-1,f&&(l=I(f,p,y,M)),(p=-1<l?f[l]:null)&&G(p))}function G(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[j])Oe(f.i,l);else{var p=l.type,y=l.proxy;f.removeEventListener?f.removeEventListener(p,y,l.capture):f.detachEvent?f.detachEvent(K(p),y):f.addListener&&f.removeListener&&f.removeListener(y),(p=ce(f))?(Oe(p,l),p.h==0&&(p.src=null,f[C]=null)):se(l)}}}function K(l){return l in V?V[l]:V[l]="on"+l}function z(l,f){if(l.da)l=!0;else{f=new hn(f,this);var p=l.listener,y=l.ha||l.src;l.fa&&G(l),l=p.call(y,f)}return l}function ce(l){return l=l[C],l instanceof Te?l:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function oe(l){return typeof l=="function"?l:(l[J]||(l[J]=function(f){return l.handleEvent(f)}),l[J])}function ie(){ze.call(this),this.i=new Te(this),this.M=this,this.F=null}A(ie,ze),ie.prototype[j]=!0,ie.prototype.removeEventListener=function(l,f,p,y){Y(this,l,f,p,y)};function ue(l,f){var p,y=l.F;if(y)for(p=[];y;y=y.F)p.push(y);if(l=l.M,y=f.type||f,typeof f=="string")f=new We(f,l);else if(f instanceof We)f.target=f.target||l;else{var M=f;f=new We(y,l),w(f,M)}if(M=!0,p)for(var F=p.length-1;0<=F;F--){var Q=f.g=p[F];M=Pe(Q,y,!0,f)&&M}if(Q=f.g=l,M=Pe(Q,y,!0,f)&&M,M=Pe(Q,y,!1,f)&&M,p)for(F=0;F<p.length;F++)Q=f.g=p[F],M=Pe(Q,y,!1,f)&&M}ie.prototype.N=function(){if(ie.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var p=l.g[f],y=0;y<p.length;y++)se(p[y]);delete l.g[f],l.h--}}this.F=null},ie.prototype.K=function(l,f,p,y){return this.i.add(String(l),f,!1,p,y)},ie.prototype.L=function(l,f,p,y){return this.i.add(String(l),f,!0,p,y)};function Pe(l,f,p,y){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var M=!0,F=0;F<f.length;++F){var Q=f[F];if(Q&&!Q.da&&Q.capture==p){var Ne=Q.listener,lt=Q.ha||Q.src;Q.fa&&Oe(l.i,Q),M=Ne.call(lt,y)!==!1&&M}}return M&&!y.defaultPrevented}function Ae(l,f,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(l,f||0)}function dt(l){l.g=Ae(()=>{l.g=null,l.i&&(l.i=!1,dt(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class rt extends ze{constructor(f,p){super(),this.m=f,this.l=p,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:dt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function at(l){ze.call(this),this.h=l,this.g={}}A(at,ze);var pt=[];function Jn(l){L(l.g,function(f,p){this.g.hasOwnProperty(p)&&G(f)},l),l.g={}}at.prototype.N=function(){at.aa.N.call(this),Jn(this)},at.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ms=a.JSON.stringify,It=a.JSON.parse,Kt=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function gs(){}gs.prototype.h=null;function dd(l){return l.h||(l.h=l.i())}function pd(){}var Ti={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function mc(){We.call(this,"d")}A(mc,We);function gc(){We.call(this,"c")}A(gc,We);var Vr={},md=null;function Wo(){return md=md||new ie}Vr.La="serverreachability";function gd(l){We.call(this,Vr.La,l)}A(gd,We);function bi(l){const f=Wo();ue(f,new gd(f))}Vr.STAT_EVENT="statevent";function yd(l,f){We.call(this,Vr.STAT_EVENT,l),this.stat=f}A(yd,We);function At(l){const f=Wo();ue(f,new yd(f,l))}Vr.Ma="timingevent";function _d(l,f){We.call(this,Vr.Ma,l),this.size=f}A(_d,We);function Ii(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},f)}function Ai(){this.g=!0}Ai.prototype.xa=function(){this.g=!1};function Uw(l,f,p,y,M,F){l.info(function(){if(l.g)if(F)for(var Q="",Ne=F.split("&"),lt=0;lt<Ne.length;lt++){var Re=Ne[lt].split("=");if(1<Re.length){var mt=Re[0];Re=Re[1];var gt=mt.split("_");Q=2<=gt.length&&gt[1]=="type"?Q+(mt+"="+Re+"&"):Q+(mt+"=redacted&")}}else Q=null;else Q=F;return"XMLHTTP REQ ("+y+") [attempt "+M+"]: "+f+`
`+p+`
`+Q})}function jw(l,f,p,y,M,F,Q){l.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+M+"]: "+f+`
`+p+`
`+F+" "+Q})}function ys(l,f,p,y){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+$w(l,p)+(y?" "+y:"")})}function Bw(l,f){l.info(function(){return"TIMEOUT: "+f})}Ai.prototype.info=function(){};function $w(l,f){if(!l.g)return f;if(!f)return null;try{var p=JSON.parse(f);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var y=p[l];if(!(2>y.length)){var M=y[1];if(Array.isArray(M)&&!(1>M.length)){var F=M[0];if(F!="noop"&&F!="stop"&&F!="close")for(var Q=1;Q<M.length;Q++)M[Q]=""}}}}return ms(p)}catch{return f}}var Ko={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},vd={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},yc;function Go(){}A(Go,gs),Go.prototype.g=function(){return new XMLHttpRequest},Go.prototype.i=function(){return{}},yc=new Go;function Zn(l,f,p,y){this.j=l,this.i=f,this.l=p,this.R=y||1,this.U=new at(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ed}function Ed(){this.i=null,this.g="",this.h=!1}var wd={},_c={};function vc(l,f,p){l.L=1,l.v=Jo(In(f)),l.m=p,l.P=!0,Td(l,null)}function Td(l,f){l.F=Date.now(),Qo(l),l.A=In(l.v);var p=l.A,y=l.R;Array.isArray(y)||(y=[String(y)]),Vd(p.i,"t",y),l.C=0,p=l.j.J,l.h=new Ed,l.g=ep(l.j,p?f:null,!l.m),0<l.O&&(l.M=new rt(m(l.Y,l,l.g),l.O)),f=l.U,p=l.g,y=l.ca;var M="readystatechange";Array.isArray(M)||(M&&(pt[0]=M.toString()),M=pt);for(var F=0;F<M.length;F++){var Q=H(p,M[F],y||f.handleEvent,!1,f.h||f);if(!Q)break;f.g[Q.key]=Q}f=l.H?E(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),bi(),Uw(l.i,l.u,l.A,l.l,l.R,l.m)}Zn.prototype.ca=function(l){l=l.target;const f=this.M;f&&An(l)==3?f.j():this.Y(l)},Zn.prototype.Y=function(l){try{if(l==this.g)e:{const gt=An(this.g);var f=this.g.Ba();const Es=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||Hd(this.g)))){this.J||gt!=4||f==7||(f==8||0>=Es?bi(3):bi(2)),Ec(this);var p=this.g.Z();this.X=p;t:if(bd(this)){var y=Hd(this.g);l="";var M=y.length,F=An(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Lr(this),Ri(this);var Q="";break t}this.h.i=new a.TextDecoder}for(f=0;f<M;f++)this.h.h=!0,l+=this.h.i.decode(y[f],{stream:!(F&&f==M-1)});y.length=0,this.h.g+=l,this.C=0,Q=this.h.g}else Q=this.g.oa();if(this.o=p==200,jw(this.i,this.u,this.A,this.l,this.R,gt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Ne,lt=this.g;if((Ne=lt.g?lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!P(Ne)){var Re=Ne;break t}}Re=null}if(p=Re)ys(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,wc(this,p);else{this.o=!1,this.s=3,At(12),Lr(this),Ri(this);break e}}if(this.P){p=!0;let tn;for(;!this.J&&this.C<Q.length;)if(tn=Hw(this,Q),tn==_c){gt==4&&(this.s=4,At(14),p=!1),ys(this.i,this.l,null,"[Incomplete Response]");break}else if(tn==wd){this.s=4,At(15),ys(this.i,this.l,Q,"[Invalid Chunk]"),p=!1;break}else ys(this.i,this.l,tn,null),wc(this,tn);if(bd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||Q.length!=0||this.h.h||(this.s=1,At(16),p=!1),this.o=this.o&&p,!p)ys(this.i,this.l,Q,"[Invalid Chunked Response]"),Lr(this),Ri(this);else if(0<Q.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+Q.length),Sc(mt),mt.M=!0,At(11))}}else ys(this.i,this.l,Q,null),wc(this,Q);gt==4&&Lr(this),this.o&&!this.J&&(gt==4?Yd(this.j,this):(this.o=!1,Qo(this)))}else oT(this.g),p==400&&0<Q.indexOf("Unknown SID")?(this.s=3,At(12)):(this.s=0,At(13)),Lr(this),Ri(this)}}}catch{}finally{}};function bd(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Hw(l,f){var p=l.C,y=f.indexOf(`
`,p);return y==-1?_c:(p=Number(f.substring(p,y)),isNaN(p)?wd:(y+=1,y+p>f.length?_c:(f=f.slice(y,y+p),l.C=y+p,f)))}Zn.prototype.cancel=function(){this.J=!0,Lr(this)};function Qo(l){l.S=Date.now()+l.I,Id(l,l.I)}function Id(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Ii(m(l.ba,l),f)}function Ec(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Zn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Bw(this.i,this.A),this.L!=2&&(bi(),At(17)),Lr(this),this.s=2,Ri(this)):Id(this,this.S-l)};function Ri(l){l.j.G==0||l.J||Yd(l.j,l)}function Lr(l){Ec(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Jn(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function wc(l,f){try{var p=l.j;if(p.G!=0&&(p.g==l||Tc(p.h,l))){if(!l.K&&Tc(p.h,l)&&p.G==3){try{var y=p.Da.g.parse(f)}catch{y=null}if(Array.isArray(y)&&y.length==3){var M=y;if(M[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)sa(p),na(p);else break e;Rc(p),At(18)}}else p.za=M[1],0<p.za-p.T&&37500>M[2]&&p.F&&p.v==0&&!p.C&&(p.C=Ii(m(p.Za,p),6e3));if(1>=Sd(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Ur(p,11)}else if((l.K||p.g==l)&&sa(p),!P(f))for(M=p.Da.g.parse(f),f=0;f<M.length;f++){let Re=M[f];if(p.T=Re[0],Re=Re[1],p.G==2)if(Re[0]=="c"){p.K=Re[1],p.ia=Re[2];const mt=Re[3];mt!=null&&(p.la=mt,p.j.info("VER="+p.la));const gt=Re[4];gt!=null&&(p.Aa=gt,p.j.info("SVER="+p.Aa));const Es=Re[5];Es!=null&&typeof Es=="number"&&0<Es&&(y=1.5*Es,p.L=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const tn=l.g;if(tn){const oa=tn.g?tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(oa){var F=y.h;F.g||oa.indexOf("spdy")==-1&&oa.indexOf("quic")==-1&&oa.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(bc(F,F.h),F.h=null))}if(y.D){const Pc=tn.g?tn.g.getResponseHeader("X-HTTP-Session-Id"):null;Pc&&(y.ya=Pc,Fe(y.I,y.D,Pc))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),y=p;var Q=l;if(y.qa=Zd(y,y.J?y.ia:null,y.W),Q.K){Pd(y.h,Q);var Ne=Q,lt=y.L;lt&&(Ne.I=lt),Ne.B&&(Ec(Ne),Qo(Ne)),y.g=Q}else Gd(y);0<p.i.length&&ra(p)}else Re[0]!="stop"&&Re[0]!="close"||Ur(p,7);else p.G==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?Ur(p,7):Ac(p):Re[0]!="noop"&&p.l&&p.l.ta(Re),p.v=0)}}bi(4)}catch{}}var qw=class{constructor(l,f){this.g=l,this.map=f}};function Ad(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Rd(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Sd(l){return l.h?1:l.g?l.g.size:0}function Tc(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function bc(l,f){l.g?l.g.add(f):l.h=f}function Pd(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Ad.prototype.cancel=function(){if(this.i=Cd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Cd(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const p of l.g.values())f=f.concat(p.D);return f}return x(l.i)}function zw(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var f=[],p=l.length,y=0;y<p;y++)f.push(l[y]);return f}f=[],p=0;for(y in l)f[p++]=l[y];return f}function Ww(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var f=[];l=l.length;for(var p=0;p<l;p++)f.push(p);return f}f=[],p=0;for(const y in l)f[p++]=y;return f}}}function kd(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var p=Ww(l),y=zw(l),M=y.length,F=0;F<M;F++)f.call(void 0,y[F],p&&p[F],l)}var xd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Kw(l,f){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var y=l[p].indexOf("="),M=null;if(0<=y){var F=l[p].substring(0,y);M=l[p].substring(y+1)}else F=l[p];f(F,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function Fr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Fr){this.h=l.h,Yo(this,l.j),this.o=l.o,this.g=l.g,Xo(this,l.s),this.l=l.l;var f=l.i,p=new Ci;p.i=f.i,f.g&&(p.g=new Map(f.g),p.h=f.h),Od(this,p),this.m=l.m}else l&&(f=String(l).match(xd))?(this.h=!1,Yo(this,f[1]||"",!0),this.o=Si(f[2]||""),this.g=Si(f[3]||"",!0),Xo(this,f[4]),this.l=Si(f[5]||"",!0),Od(this,f[6]||"",!0),this.m=Si(f[7]||"")):(this.h=!1,this.i=new Ci(null,this.h))}Fr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Pi(f,Nd,!0),":");var p=this.g;return(p||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Pi(f,Nd,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(Pi(p,p.charAt(0)=="/"?Yw:Qw,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",Pi(p,Jw)),l.join("")};function In(l){return new Fr(l)}function Yo(l,f,p){l.j=p?Si(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Xo(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Od(l,f,p){f instanceof Ci?(l.i=f,Zw(l.i,l.h)):(p||(f=Pi(f,Xw)),l.i=new Ci(f,l.h))}function Fe(l,f,p){l.i.set(f,p)}function Jo(l){return Fe(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Si(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Pi(l,f,p){return typeof l=="string"?(l=encodeURI(l).replace(f,Gw),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Gw(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Nd=/[#\/\?@]/g,Qw=/[#\?:]/g,Yw=/[#\?]/g,Xw=/[#\?@]/g,Jw=/#/g;function Ci(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function er(l){l.g||(l.g=new Map,l.h=0,l.i&&Kw(l.i,function(f,p){l.add(decodeURIComponent(f.replace(/\+/g," ")),p)}))}t=Ci.prototype,t.add=function(l,f){er(this),this.i=null,l=_s(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(f),this.h+=1,this};function Dd(l,f){er(l),f=_s(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Md(l,f){return er(l),f=_s(l,f),l.g.has(f)}t.forEach=function(l,f){er(this),this.g.forEach(function(p,y){p.forEach(function(M){l.call(f,M,y,this)},this)},this)},t.na=function(){er(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),p=[];for(let y=0;y<f.length;y++){const M=l[y];for(let F=0;F<M.length;F++)p.push(f[y])}return p},t.V=function(l){er(this);let f=[];if(typeof l=="string")Md(this,l)&&(f=f.concat(this.g.get(_s(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)f=f.concat(l[p])}return f},t.set=function(l,f){return er(this),this.i=null,l=_s(this,l),Md(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},t.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Vd(l,f,p){Dd(l,f),0<p.length&&(l.i=null,l.g.set(_s(l,f),x(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var p=0;p<f.length;p++){var y=f[p];const F=encodeURIComponent(String(y)),Q=this.V(y);for(y=0;y<Q.length;y++){var M=F;Q[y]!==""&&(M+="="+encodeURIComponent(String(Q[y]))),l.push(M)}}return this.i=l.join("&")};function _s(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function Zw(l,f){f&&!l.j&&(er(l),l.i=null,l.g.forEach(function(p,y){var M=y.toLowerCase();y!=M&&(Dd(this,y),Vd(this,M,p))},l)),l.j=f}function eT(l,f){const p=new Ai;if(a.Image){const y=new Image;y.onload=g(tr,p,"TestLoadImage: loaded",!0,f,y),y.onerror=g(tr,p,"TestLoadImage: error",!1,f,y),y.onabort=g(tr,p,"TestLoadImage: abort",!1,f,y),y.ontimeout=g(tr,p,"TestLoadImage: timeout",!1,f,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=l}else f(!1)}function tT(l,f){const p=new Ai,y=new AbortController,M=setTimeout(()=>{y.abort(),tr(p,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:y.signal}).then(F=>{clearTimeout(M),F.ok?tr(p,"TestPingServer: ok",!0,f):tr(p,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(M),tr(p,"TestPingServer: error",!1,f)})}function tr(l,f,p,y,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),y(p)}catch{}}function nT(){this.g=new Kt}function rT(l,f,p){const y=p||"";try{kd(l,function(M,F){let Q=M;u(M)&&(Q=ms(M)),f.push(y+F+"="+encodeURIComponent(Q))})}catch(M){throw f.push(y+"type="+encodeURIComponent("_badmap")),M}}function Zo(l){this.l=l.Ub||null,this.j=l.eb||!1}A(Zo,gs),Zo.prototype.g=function(){return new ea(this.l,this.j)},Zo.prototype.i=function(l){return function(){return l}}({});function ea(l,f){ie.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(ea,ie),t=ea.prototype,t.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,xi(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ki(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,xi(this)),this.g&&(this.readyState=3,xi(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ld(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ld(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?ki(this):xi(this),this.readyState==3&&Ld(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,ki(this))},t.Qa=function(l){this.g&&(this.response=l,ki(this))},t.ga=function(){this.g&&ki(this)};function ki(l){l.readyState=4,l.l=null,l.j=null,l.v=null,xi(l)}t.setRequestHeader=function(l,f){this.u.append(l,f)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var p=f.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=f.next();return l.join(`\r
`)};function xi(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(ea.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Fd(l){let f="";return L(l,function(p,y){f+=y,f+=":",f+=p,f+=`\r
`}),f}function Ic(l,f,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=Fd(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):Fe(l,f,p))}function Qe(l){ie.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Qe,ie);var sT=/^https?$/i,iT=["POST","PUT"];t=Qe.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,f,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():yc.g(),this.v=this.o?dd(this.o):dd(yc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(F){Ud(this,F);return}if(l=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var M in y)p.set(M,y[M]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const F of y.keys())p.set(F,y.get(F));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(F=>F.toLowerCase()=="content-type"),M=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(iT,f,void 0))||y||M||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,Q]of p)this.g.setRequestHeader(F,Q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{$d(this),this.u=!0,this.g.send(l),this.u=!1}catch(F){Ud(this,F)}};function Ud(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,jd(l),ta(l)}function jd(l){l.A||(l.A=!0,ue(l,"complete"),ue(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ue(this,"complete"),ue(this,"abort"),ta(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ta(this,!0)),Qe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Bd(this):this.bb())},t.bb=function(){Bd(this)};function Bd(l){if(l.h&&typeof o<"u"&&(!l.v[1]||An(l)!=4||l.Z()!=2)){if(l.u&&An(l)==4)Ae(l.Ea,0,l);else if(ue(l,"readystatechange"),An(l)==4){l.h=!1;try{const Q=l.Z();e:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var p;if(!(p=f)){var y;if(y=Q===0){var M=String(l.D).match(xd)[1]||null;!M&&a.self&&a.self.location&&(M=a.self.location.protocol.slice(0,-1)),y=!sT.test(M?M.toLowerCase():"")}p=y}if(p)ue(l,"complete"),ue(l,"success");else{l.m=6;try{var F=2<An(l)?l.g.statusText:""}catch{F=""}l.l=F+" ["+l.Z()+"]",jd(l)}}finally{ta(l)}}}}function ta(l,f){if(l.g){$d(l);const p=l.g,y=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||ue(l,"ready");try{p.onreadystatechange=y}catch{}}}function $d(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function An(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<An(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),It(f)}};function Hd(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function oT(l){const f={};l=(l.g&&2<=An(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<l.length;y++){if(P(l[y]))continue;var p=k(l[y]);const M=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const F=f[M]||[];f[M]=F,F.push(p)}b(f,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Oi(l,f,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||f}function qd(l){this.Aa=0,this.i=[],this.j=new Ai,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Oi("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Oi("baseRetryDelayMs",5e3,l),this.cb=Oi("retryDelaySeedMs",1e4,l),this.Wa=Oi("forwardChannelMaxRetries",2,l),this.wa=Oi("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Ad(l&&l.concurrentRequestLimit),this.Da=new nT,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=qd.prototype,t.la=8,t.G=1,t.connect=function(l,f,p,y){At(0),this.W=l,this.H=f||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.I=Zd(this,null,this.W),ra(this)};function Ac(l){if(zd(l),l.G==3){var f=l.U++,p=In(l.I);if(Fe(p,"SID",l.K),Fe(p,"RID",f),Fe(p,"TYPE","terminate"),Ni(l,p),f=new Zn(l,l.j,f),f.L=2,f.v=Jo(In(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=f.v,p=!0),p||(f.g=ep(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Qo(f)}Jd(l)}function na(l){l.g&&(Sc(l),l.g.cancel(),l.g=null)}function zd(l){na(l),l.u&&(a.clearTimeout(l.u),l.u=null),sa(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function ra(l){if(!Rd(l.h)&&!l.s){l.s=!0;var f=l.Ga;fe||en(),ne||(fe(),ne=!0),qe.add(f,l),l.B=0}}function aT(l,f){return Sd(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Ii(m(l.Ga,l,f),Xd(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const M=new Zn(this,this.j,l);let F=this.o;if(this.S&&(F?(F=E(F),w(F,this.S)):F=this.S),this.m!==null||this.O||(M.H=F,F=null),this.P)e:{for(var f=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(f+=y,4096<f){f=p;break e}if(f===4096||p===this.i.length-1){f=p+1;break e}}f=1e3}else f=1e3;f=Kd(this,M,f),p=In(this.I),Fe(p,"RID",l),Fe(p,"CVER",22),this.D&&Fe(p,"X-HTTP-Session-Id",this.D),Ni(this,p),F&&(this.O?f="headers="+encodeURIComponent(String(Fd(F)))+"&"+f:this.m&&Ic(p,this.m,F)),bc(this.h,M),this.Ua&&Fe(p,"TYPE","init"),this.P?(Fe(p,"$req",f),Fe(p,"SID","null"),M.T=!0,vc(M,p,null)):vc(M,p,f),this.G=2}}else this.G==3&&(l?Wd(this,l):this.i.length==0||Rd(this.h)||Wd(this))};function Wd(l,f){var p;f?p=f.l:p=l.U++;const y=In(l.I);Fe(y,"SID",l.K),Fe(y,"RID",p),Fe(y,"AID",l.T),Ni(l,y),l.m&&l.o&&Ic(y,l.m,l.o),p=new Zn(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Kd(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),bc(l.h,p),vc(p,y,f)}function Ni(l,f){l.H&&L(l.H,function(p,y){Fe(f,y,p)}),l.l&&kd({},function(p,y){Fe(f,y,p)})}function Kd(l,f,p){p=Math.min(l.i.length,p);var y=l.l?m(l.l.Na,l.l,l):null;e:{var M=l.i;let F=-1;for(;;){const Q=["count="+p];F==-1?0<p?(F=M[0].g,Q.push("ofs="+F)):F=0:Q.push("ofs="+F);let Ne=!0;for(let lt=0;lt<p;lt++){let Re=M[lt].g;const mt=M[lt].map;if(Re-=F,0>Re)F=Math.max(0,M[lt].g-100),Ne=!1;else try{rT(mt,Q,"req"+Re+"_")}catch{y&&y(mt)}}if(Ne){y=Q.join("&");break e}}}return l=l.i.splice(0,p),f.D=l,y}function Gd(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;fe||en(),ne||(fe(),ne=!0),qe.add(f,l),l.v=0}}function Rc(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Ii(m(l.Fa,l),Xd(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Qd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Ii(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,At(10),na(this),Qd(this))};function Sc(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Qd(l){l.g=new Zn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=In(l.qa);Fe(f,"RID","rpc"),Fe(f,"SID",l.K),Fe(f,"AID",l.T),Fe(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&Fe(f,"TO",l.ja),Fe(f,"TYPE","xmlhttp"),Ni(l,f),l.m&&l.o&&Ic(f,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=Jo(In(f)),p.m=null,p.P=!0,Td(p,l)}t.Za=function(){this.C!=null&&(this.C=null,na(this),Rc(this),At(19))};function sa(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Yd(l,f){var p=null;if(l.g==f){sa(l),Sc(l),l.g=null;var y=2}else if(Tc(l.h,f))p=f.D,Pd(l.h,f),y=1;else return;if(l.G!=0){if(f.o)if(y==1){p=f.m?f.m.length:0,f=Date.now()-f.F;var M=l.B;y=Wo(),ue(y,new _d(y,p)),ra(l)}else Gd(l);else if(M=f.s,M==3||M==0&&0<f.X||!(y==1&&aT(l,f)||y==2&&Rc(l)))switch(p&&0<p.length&&(f=l.h,f.i=f.i.concat(p)),M){case 1:Ur(l,5);break;case 4:Ur(l,10);break;case 3:Ur(l,6);break;default:Ur(l,2)}}}function Xd(l,f){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*f}function Ur(l,f){if(l.j.info("Error code "+f),f==2){var p=m(l.fb,l),y=l.Xa;const M=!y;y=new Fr(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Yo(y,"https"),Jo(y),M?eT(y.toString(),p):tT(y.toString(),p)}else At(2);l.G=0,l.l&&l.l.sa(f),Jd(l),zd(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function Jd(l){if(l.G=0,l.ka=[],l.l){const f=Cd(l.h);(f.length!=0||l.i.length!=0)&&(N(l.ka,f),N(l.ka,l.i),l.h.i.length=0,x(l.i),l.i.length=0),l.l.ra()}}function Zd(l,f,p){var y=p instanceof Fr?In(p):new Fr(p);if(y.g!="")f&&(y.g=f+"."+y.g),Xo(y,y.s);else{var M=a.location;y=M.protocol,f=f?f+"."+M.hostname:M.hostname,M=+M.port;var F=new Fr(null);y&&Yo(F,y),f&&(F.g=f),M&&Xo(F,M),p&&(F.l=p),y=F}return p=l.D,f=l.ya,p&&f&&Fe(y,p,f),Fe(y,"VER",l.la),Ni(l,y),y}function ep(l,f,p){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Qe(new Zo({eb:p})):new Qe(l.pa),f.Ha(l.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function tp(){}t=tp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ia(){}ia.prototype.g=function(l,f){return new Ft(l,f)};function Ft(l,f){ie.call(this),this.g=new qd(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!P(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!P(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new vs(this)}A(Ft,ie),Ft.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ft.prototype.close=function(){Ac(this.g)},Ft.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=ms(l),l=p);f.i.push(new qw(f.Ya++,l)),f.G==3&&ra(f)},Ft.prototype.N=function(){this.g.l=null,delete this.j,Ac(this.g),delete this.g,Ft.aa.N.call(this)};function np(l){mc.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const p in f){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}A(np,mc);function rp(){gc.call(this),this.status=1}A(rp,gc);function vs(l){this.g=l}A(vs,tp),vs.prototype.ua=function(){ue(this.g,"a")},vs.prototype.ta=function(l){ue(this.g,new np(l))},vs.prototype.sa=function(l){ue(this.g,new rp)},vs.prototype.ra=function(){ue(this.g,"b")},ia.prototype.createWebChannel=ia.prototype.g,Ft.prototype.send=Ft.prototype.o,Ft.prototype.open=Ft.prototype.m,Ft.prototype.close=Ft.prototype.close,jE=function(){return new ia},UE=function(){return Wo()},FE=Vr,Eh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ko.NO_ERROR=0,Ko.TIMEOUT=8,Ko.HTTP_ERROR=6,Da=Ko,vd.COMPLETE="complete",LE=vd,pd.EventType=Ti,Ti.OPEN="a",Ti.CLOSE="b",Ti.ERROR="c",Ti.MESSAGE="d",ie.prototype.listen=ie.prototype.K,ji=pd,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,VE=Qe}).apply(typeof Ea<"u"?Ea:typeof self<"u"?self:typeof window<"u"?window:{});const dg="@firebase/firestore";/**
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
 */class _t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
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
 */let gi="11.0.2";/**
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
 */const os=new wf("@firebase/firestore");function Rs(){return os.logLevel}function ee(t,...e){if(os.logLevel<=Ee.DEBUG){const n=e.map(If);os.debug(`Firestore (${gi}): ${t}`,...n)}}function Hn(t,...e){if(os.logLevel<=Ee.ERROR){const n=e.map(If);os.error(`Firestore (${gi}): ${t}`,...n)}}function si(t,...e){if(os.logLevel<=Ee.WARN){const n=e.map(If);os.warn(`Firestore (${gi}): ${t}`,...n)}}function If(t){if(typeof t=="string")return t;try{/**
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
 */function pe(t="Unexpected state"){const e=`FIRESTORE (${gi}) INTERNAL ASSERTION FAILED: `+t;throw Hn(e),new Error(e)}function ke(t,e){t||pe()}function _e(t,e){return t}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends Yn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Fn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class BE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(_t.UNAUTHENTICATED))}shutdown(){}}class iO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class oO{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ke(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Fn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Fn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Fn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ke(typeof r.accessToken=="string"),new BE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ke(e===null||typeof e=="string"),new _t(e)}}class aO{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class lO{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new aO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ke(this.o===void 0);const r=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ke(typeof n.token=="string"),this.R=n.token,new cO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function hO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class $E{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=hO(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function be(t,e){return t<e?-1:t>e?1:0}function ii(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class _o{constructor(e,n,r){n===void 0?n=0:n>e.length&&pe(),r===void 0?r=e.length-n:r>e.length-n&&pe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return _o.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof _o?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class je extends _o{construct(e,n,r){return new je(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new te($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new je(n)}static emptyPath(){return new je([])}}const fO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends _o{construct(e,n,r){return new ht(e,n,r)}static isValidIdentifier(e){return fO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ht(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new te($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new te($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new te($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new te($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(n)}static emptyPath(){return new ht([])}}/**
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
 */class le{constructor(e){this.path=e}static fromPath(e){return new le(je.fromString(e))}static fromName(e){return new le(je.fromString(e).popFirst(5))}static empty(){return new le(je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return je.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new le(new je(e.slice()))}}function dO(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ge.fromTimestamp(r===1e9?new tt(n+1,0):new tt(n,r));return new Rr(s,le.empty(),e)}function pO(t){return new Rr(t.readTime,t.key,-1)}class Rr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Rr(ge.min(),le.empty(),-1)}static max(){return new Rr(ge.max(),le.empty(),-1)}}function mO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=le.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
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
 */const gO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function yi(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==gO)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&pe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(s=>s?B.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new B((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(h=>{o[u]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new B((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function _O(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function _i(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ec{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ec.oe=-1;function tc(t){return t==null}function pl(t){return t===0&&1/t==-1/0}function vO(t){return typeof t=="number"&&Number.isInteger(t)&&!pl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function EO(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=pg(e)),e=wO(t.get(n),e);return pg(e)}function wO(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function pg(t){return t+""}/**
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
 */function mg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function us(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function HE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ge{constructor(e,n){this.comparator=e,this.root=n||ut.EMPTY}insert(e,n){return new Ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(e){return new Ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ut.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wa(this.root,e,this.comparator,!1)}getReverseIterator(){return new wa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wa(this.root,e,this.comparator,!0)}}class wa{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ut{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ut.RED,this.left=s??ut.EMPTY,this.right=i??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ut(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ut.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw pe();const e=this.left.check();if(e!==this.right.check())throw pe();return e+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw pe()}get value(){throw pe()}get color(){throw pe()}get left(){throw pe()}get right(){throw pe()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ut(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class nt{constructor(e){this.comparator=e,this.data=new Ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new gg(this.data.getIterator())}getIteratorFrom(e){return new gg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new nt(this.comparator);return n.data=e,n}}class gg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class sn{constructor(e){this.fields=e,e.sort(ht.comparator)}static empty(){return new sn([])}unionWith(e){let n=new nt(ht.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new sn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ii(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class qE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new qE("Invalid base64 string: "+i):i}}(e);return new ft(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const TO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Sr(t){if(ke(!!t),typeof t=="string"){let e=0;const n=TO.exec(t);if(ke(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ye(t.seconds),nanos:Ye(t.nanos)}}function Ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Pr(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
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
 */function Af(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function nc(t){const e=t.mapValue.fields.__previous_value__;return Af(e)?nc(e):e}function vo(t){const e=Sr(t.mapValue.fields.__local_write_time__.timestampValue);return new tt(e.seconds,e.nanos)}/**
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
 */class bO{constructor(e,n,r,s,i,o,a,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class Eo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Eo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Eo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ta={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Cr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Af(t)?4:AO(t)?9007199254740991:IO(t)?10:11:pe()}function bn(t,e){if(t===e)return!0;const n=Cr(t);if(n!==Cr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return vo(t).isEqual(vo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Sr(s.timestampValue),a=Sr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Pr(s.bytesValue).isEqual(Pr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ye(s.geoPointValue.latitude)===Ye(i.geoPointValue.latitude)&&Ye(s.geoPointValue.longitude)===Ye(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ye(s.integerValue)===Ye(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ye(s.doubleValue),a=Ye(i.doubleValue);return o===a?pl(o)===pl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ii(t.arrayValue.values||[],e.arrayValue.values||[],bn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(mg(o)!==mg(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!bn(o[c],a[c])))return!1;return!0}(t,e);default:return pe()}}function wo(t,e){return(t.values||[]).find(n=>bn(n,e))!==void 0}function oi(t,e){if(t===e)return 0;const n=Cr(t),r=Cr(e);if(n!==r)return be(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ye(i.integerValue||i.doubleValue),c=Ye(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return yg(t.timestampValue,e.timestampValue);case 4:return yg(vo(t),vo(e));case 5:return be(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Pr(i),c=Pr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const h=be(a[u],c[u]);if(h!==0)return h}return be(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=be(Ye(i.latitude),Ye(o.latitude));return a!==0?a:be(Ye(i.longitude),Ye(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return _g(t.arrayValue,e.arrayValue);case 10:return function(i,o){var a,c,u,h;const d=i.fields||{},m=o.fields||{},g=(a=d.value)===null||a===void 0?void 0:a.arrayValue,A=(c=m.value)===null||c===void 0?void 0:c.arrayValue,x=be(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0);return x!==0?x:_g(g,A)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ta.mapValue&&o===Ta.mapValue)return 0;if(i===Ta.mapValue)return 1;if(o===Ta.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let d=0;d<c.length&&d<h.length;++d){const m=be(c[d],h[d]);if(m!==0)return m;const g=oi(a[c[d]],u[h[d]]);if(g!==0)return g}return be(c.length,h.length)}(t.mapValue,e.mapValue);default:throw pe()}}function yg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=Sr(t),r=Sr(e),s=be(n.seconds,r.seconds);return s!==0?s:be(n.nanos,r.nanos)}function _g(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=oi(n[s],r[s]);if(i)return i}return be(n.length,r.length)}function ai(t){return wh(t)}function wh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Sr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Pr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return le.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=wh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${wh(n.fields[o])}`;return s+"}"}(t.mapValue):pe()}function Ma(t){switch(Cr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=nc(t);return e?16+Ma(e):16;case 5:return 2*t.stringValue.length;case 6:return Pr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ma(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return us(r.fields,(i,o)=>{s+=i.length+Ma(o)}),s}(t.mapValue);default:throw pe()}}function vg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Th(t){return!!t&&"integerValue"in t}function Rf(t){return!!t&&"arrayValue"in t}function Eg(t){return!!t&&"nullValue"in t}function wg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Va(t){return!!t&&"mapValue"in t}function IO(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function eo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return us(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=eo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=eo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function AO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Yt{constructor(e){this.value=e}static empty(){return new Yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Va(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=eo(n)}setAll(e){let n=ht.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=eo(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Va(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return bn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Va(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){us(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Yt(eo(this.value))}}function zE(t){const e=[];return us(t.fields,(n,r)=>{const s=new ht([n]);if(Va(r)){const i=zE(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new sn(e)}/**
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
 */class wt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new wt(e,0,ge.min(),ge.min(),ge.min(),Yt.empty(),0)}static newFoundDocument(e,n,r,s){return new wt(e,1,n,ge.min(),r,s,0)}static newNoDocument(e,n){return new wt(e,2,n,ge.min(),ge.min(),Yt.empty(),0)}static newUnknownDocument(e,n){return new wt(e,3,n,ge.min(),ge.min(),Yt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ml{constructor(e,n){this.position=e,this.inclusive=n}}function Tg(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=le.comparator(le.fromName(o.referenceValue),n.key):r=oi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function bg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!bn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class To{constructor(e,n="asc"){this.field=e,this.dir=n}}function RO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class WE{}class Je extends WE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new PO(e,n,r):n==="array-contains"?new xO(e,r):n==="in"?new OO(e,r):n==="not-in"?new NO(e,r):n==="array-contains-any"?new DO(e,r):new Je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new CO(e,r):new kO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(oi(n,this.value)):n!==null&&Cr(this.value)===Cr(n)&&this.matchesComparison(oi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class cn extends WE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new cn(e,n)}matches(e){return KE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function KE(t){return t.op==="and"}function GE(t){return SO(t)&&KE(t)}function SO(t){for(const e of t.filters)if(e instanceof cn)return!1;return!0}function bh(t){if(t instanceof Je)return t.field.canonicalString()+t.op.toString()+ai(t.value);if(GE(t))return t.filters.map(e=>bh(e)).join(",");{const e=t.filters.map(n=>bh(n)).join(",");return`${t.op}(${e})`}}function QE(t,e){return t instanceof Je?function(r,s){return s instanceof Je&&r.op===s.op&&r.field.isEqual(s.field)&&bn(r.value,s.value)}(t,e):t instanceof cn?function(r,s){return s instanceof cn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&QE(o,s.filters[a]),!0):!1}(t,e):void pe()}function YE(t){return t instanceof Je?function(n){return`${n.field.canonicalString()} ${n.op} ${ai(n.value)}`}(t):t instanceof cn?function(n){return n.op.toString()+" {"+n.getFilters().map(YE).join(" ,")+"}"}(t):"Filter"}class PO extends Je{constructor(e,n,r){super(e,n,r),this.key=le.fromName(r.referenceValue)}matches(e){const n=le.comparator(e.key,this.key);return this.matchesComparison(n)}}class CO extends Je{constructor(e,n){super(e,"in",n),this.keys=XE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class kO extends Je{constructor(e,n){super(e,"not-in",n),this.keys=XE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function XE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>le.fromName(r.referenceValue))}class xO extends Je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Rf(n)&&wo(n.arrayValue,this.value)}}class OO extends Je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&wo(this.value.arrayValue,n)}}class NO extends Je{constructor(e,n){super(e,"not-in",n)}matches(e){if(wo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!wo(this.value.arrayValue,n)}}class DO extends Je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Rf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>wo(this.value.arrayValue,r))}}/**
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
 */class MO{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function Ig(t,e=null,n=[],r=[],s=null,i=null,o=null){return new MO(t,e,n,r,s,i,o)}function Sf(t){const e=_e(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>bh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),tc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ai(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ai(r)).join(",")),e.ue=n}return e.ue}function Pf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!RO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!QE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!bg(t.startAt,e.startAt)&&bg(t.endAt,e.endAt)}function Ih(t){return le.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class vi{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function VO(t,e,n,r,s,i,o,a){return new vi(t,e,n,r,s,i,o,a)}function Cf(t){return new vi(t)}function Ag(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function JE(t){return t.collectionGroup!==null}function to(t){const e=_e(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new nt(ht.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new To(i,r))}),n.has(ht.keyField().canonicalString())||e.ce.push(new To(ht.keyField(),r))}return e.ce}function _n(t){const e=_e(t);return e.le||(e.le=LO(e,to(t))),e.le}function LO(t,e){if(t.limitType==="F")return Ig(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new To(s.field,i)});const n=t.endAt?new ml(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ml(t.startAt.position,t.startAt.inclusive):null;return Ig(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ah(t,e){const n=t.filters.concat([e]);return new vi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Rh(t,e,n){return new vi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function rc(t,e){return Pf(_n(t),_n(e))&&t.limitType===e.limitType}function ZE(t){return`${Sf(_n(t))}|lt:${t.limitType}`}function Ss(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>YE(s)).join(", ")}]`),tc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ai(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ai(s)).join(",")),`Target(${r})`}(_n(t))}; limitType=${t.limitType})`}function sc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):le.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of to(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const u=Tg(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,to(r),s)||r.endAt&&!function(o,a,c){const u=Tg(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,to(r),s))}(t,e)}function FO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function e0(t){return(e,n)=>{let r=!1;for(const s of to(t)){const i=UO(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function UO(t,e,n){const r=t.field.isKeyField()?le.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?oi(c,u):pe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return pe()}}/**
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
 */class hs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){us(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return HE(this.inner)}size(){return this.innerSize}}/**
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
 */const jO=new Ge(le.comparator);function qn(){return jO}const t0=new Ge(le.comparator);function Bi(...t){let e=t0;for(const n of t)e=e.insert(n.key,n);return e}function n0(t){let e=t0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Qr(){return no()}function r0(){return no()}function no(){return new hs(t=>t.toString(),(t,e)=>t.isEqual(e))}const BO=new Ge(le.comparator),$O=new nt(le.comparator);function we(...t){let e=$O;for(const n of t)e=e.add(n);return e}const HO=new nt(be);function qO(){return HO}/**
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
 */function kf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pl(e)?"-0":e}}function s0(t){return{integerValue:""+t}}function zO(t,e){return vO(e)?s0(e):kf(t,e)}/**
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
 */class ic{constructor(){this._=void 0}}function WO(t,e,n){return t instanceof gl?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Af(i)&&(i=nc(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof bo?o0(t,e):t instanceof Io?a0(t,e):function(s,i){const o=i0(s,i),a=Rg(o)+Rg(s.Pe);return Th(o)&&Th(s.Pe)?s0(a):kf(s.serializer,a)}(t,e)}function KO(t,e,n){return t instanceof bo?o0(t,e):t instanceof Io?a0(t,e):n}function i0(t,e){return t instanceof yl?function(r){return Th(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class gl extends ic{}class bo extends ic{constructor(e){super(),this.elements=e}}function o0(t,e){const n=l0(e);for(const r of t.elements)n.some(s=>bn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Io extends ic{constructor(e){super(),this.elements=e}}function a0(t,e){let n=l0(e);for(const r of t.elements)n=n.filter(s=>!bn(s,r));return{arrayValue:{values:n}}}class yl extends ic{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Rg(t){return Ye(t.integerValue||t.doubleValue)}function l0(t){return Rf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function GO(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof bo&&s instanceof bo||r instanceof Io&&s instanceof Io?ii(r.elements,s.elements,bn):r instanceof yl&&s instanceof yl?bn(r.Pe,s.Pe):r instanceof gl&&s instanceof gl}(t.transform,e.transform)}class QO{constructor(e,n){this.version=e,this.transformResults=n}}class vn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new vn}static exists(e){return new vn(void 0,e)}static updateTime(e){return new vn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function La(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class oc{}function c0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new xf(t.key,vn.none()):new Fo(t.key,t.data,vn.none());{const n=t.data,r=Yt.empty();let s=new nt(ht.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new fs(t.key,r,new sn(s.toArray()),vn.none())}}function YO(t,e,n){t instanceof Fo?function(s,i,o){const a=s.value.clone(),c=Pg(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof fs?function(s,i,o){if(!La(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Pg(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(u0(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ro(t,e,n,r){return t instanceof Fo?function(i,o,a,c){if(!La(i.precondition,o))return a;const u=i.value.clone(),h=Cg(i.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof fs?function(i,o,a,c){if(!La(i.precondition,o))return a;const u=Cg(i.fieldTransforms,c,o),h=o.data;return h.setAll(u0(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,a){return La(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function XO(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=i0(r.transform,s||null);i!=null&&(n===null&&(n=Yt.empty()),n.set(r.field,i))}return n||null}function Sg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ii(r,s,(i,o)=>GO(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Fo extends oc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class fs extends oc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function u0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Pg(t,e,n){const r=new Map;ke(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,KO(o,a,n[s]))}return r}function Cg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,WO(i,o,e))}return r}class xf extends oc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class JO extends oc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ZO{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&YO(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ro(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ro(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=r0();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=c0(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ge.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),we())}isEqual(e){return this.batchId===e.batchId&&ii(this.mutations,e.mutations,(n,r)=>Sg(n,r))&&ii(this.baseMutations,e.baseMutations,(n,r)=>Sg(n,r))}}class Of{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ke(e.mutations.length===r.length);let s=function(){return BO}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Of(e,n,r,s)}}/**
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
 */class eN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class tN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Xe,Ie;function nN(t){switch(t){default:return pe();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function h0(t){if(t===void 0)return Hn("GRPC error has no .code"),$.UNKNOWN;switch(t){case Xe.OK:return $.OK;case Xe.CANCELLED:return $.CANCELLED;case Xe.UNKNOWN:return $.UNKNOWN;case Xe.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Xe.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Xe.INTERNAL:return $.INTERNAL;case Xe.UNAVAILABLE:return $.UNAVAILABLE;case Xe.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Xe.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Xe.NOT_FOUND:return $.NOT_FOUND;case Xe.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Xe.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Xe.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Xe.ABORTED:return $.ABORTED;case Xe.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Xe.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Xe.DATA_LOSS:return $.DATA_LOSS;default:return pe()}}(Ie=Xe||(Xe={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function rN(){return new TextEncoder}/**
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
 */const sN=new ts([4294967295,4294967295],0);function kg(t){const e=rN().encode(t),n=new ME;return n.update(e),new Uint8Array(n.digest())}function xg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ts([n,r],0),new ts([s,i],0)]}class Nf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new $i(`Invalid padding: ${n}`);if(r<0)throw new $i(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new $i(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new $i(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=ts.fromNumber(this.Te)}Ee(e,n,r){let s=e.add(n.multiply(ts.fromNumber(r)));return s.compare(sN)===1&&(s=new ts([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=kg(e),[r,s]=xg(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Nf(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=kg(e),[r,s]=xg(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class $i extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ac{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Uo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ac(ge.min(),s,new Ge(be),qn(),we())}}class Uo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Uo(r,n,we(),we(),we())}}/**
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
 */class Fa{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class f0{constructor(e,n){this.targetId=e,this.me=n}}class d0{constructor(e,n,r=ft.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Og{constructor(){this.fe=0,this.ge=Ng(),this.pe=ft.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=we(),n=we(),r=we();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:pe()}}),new Uo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Ng()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ke(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class iN{constructor(e){this.Le=e,this.Be=new Map,this.ke=qn(),this.qe=ba(),this.Qe=ba(),this.Ke=new Ge(be)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:pe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.me.count,s=this.Ye(n);if(s){const i=s.target;if(Ih(i))if(r===0){const o=new le(i.path);this.We(n,o,wt.newNoDocument(o,ge.min()))}else ke(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Pr(r).toUint8Array()}catch(c){if(c instanceof qE)return si("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Nf(o,s,i)}catch(c){return si(c instanceof $i?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.Be.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Ih(a.target)){const c=new le(a.target.path);this.st(c).has(o)||this.ot(o,c)||this.We(o,c,wt.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=we();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new ac(e,n,this.Ke,this.ke,r);return this.ke=qn(),this.qe=ba(),this.Qe=ba(),this.Ke=new Ge(be),s}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,n)?s.Fe(n,1):s.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new Og,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new nt(be),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new nt(be),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Og),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function ba(){return new Ge(le.comparator)}function Ng(){return new Ge(le.comparator)}const oN={asc:"ASCENDING",desc:"DESCENDING"},aN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},lN={and:"AND",or:"OR"};class cN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Sh(t,e){return t.useProto3Json||tc(e)?e:{value:e}}function _l(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function p0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function uN(t,e){return _l(t,e.toTimestamp())}function En(t){return ke(!!t),ge.fromTimestamp(function(n){const r=Sr(n);return new tt(r.seconds,r.nanos)}(t))}function Df(t,e){return Ph(t,e).canonicalString()}function Ph(t,e){const n=function(s){return new je(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function m0(t){const e=je.fromString(t);return ke(E0(e)),e}function Ch(t,e){return Df(t.databaseId,e.path)}function cu(t,e){const n=m0(e);if(n.get(1)!==t.databaseId.projectId)throw new te($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new te($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new le(y0(n))}function g0(t,e){return Df(t.databaseId,e)}function hN(t){const e=m0(t);return e.length===4?je.emptyPath():y0(e)}function kh(t){return new je(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function y0(t){return ke(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Dg(t,e,n){return{name:Ch(t,e),fields:n.value.mapValue.fields}}function fN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:pe()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(ke(h===void 0||typeof h=="string"),ft.fromBase64String(h||"")):(ke(h===void 0||h instanceof Buffer||h instanceof Uint8Array),ft.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?$.UNKNOWN:h0(u.code);return new te(h,u.message||"")}(o);n=new d0(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=cu(t,r.document.name),i=En(r.document.updateTime),o=r.document.createTime?En(r.document.createTime):ge.min(),a=new Yt({mapValue:{fields:r.document.fields}}),c=wt.newFoundDocument(s,i,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new Fa(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=cu(t,r.document),i=r.readTime?En(r.readTime):ge.min(),o=wt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Fa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=cu(t,r.document),i=r.removedTargetIds||[];n=new Fa([],i,s,null)}else{if(!("filter"in e))return pe();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new tN(s,i),a=r.targetId;n=new f0(a,o)}}return n}function dN(t,e){let n;if(e instanceof Fo)n={update:Dg(t,e.key,e.value)};else if(e instanceof xf)n={delete:Ch(t,e.key)};else if(e instanceof fs)n={update:Dg(t,e.key,e.data),updateMask:TN(e.fieldMask)};else{if(!(e instanceof JO))return pe();n={verify:Ch(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof gl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof bo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Io)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof yl)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw pe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:uN(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:pe()}(t,e.precondition)),n}function pN(t,e){return t&&t.length>0?(ke(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?En(s.updateTime):En(i);return o.isEqual(ge.min())&&(o=En(i)),new QO(o,s.transformResults||[])}(n,e))):[]}function mN(t,e){return{documents:[g0(t,e.path)]}}function gN(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=g0(t,s);const i=function(u){if(u.length!==0)return v0(cn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(m){return{field:Ps(m.field),direction:vN(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Sh(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:n,parent:s}}function yN(t){let e=hN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ke(r===1);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(d){const m=_0(d);return m instanceof cn&&GE(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(m=>function(A){return new To(Cs(A.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(d){let m;return m=typeof d=="object"?d.value:d,tc(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(d){const m=!!d.before,g=d.values||[];return new ml(g,m)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const m=!d.before,g=d.values||[];return new ml(g,m)}(n.endAt)),VO(e,s,o,i,a,"F",c,u)}function _N(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function _0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Cs(n.unaryFilter.field);return Je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Cs(n.unaryFilter.field);return Je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Cs(n.unaryFilter.field);return Je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Cs(n.unaryFilter.field);return Je.create(o,"!=",{nullValue:"NULL_VALUE"});default:return pe()}}(t):t.fieldFilter!==void 0?function(n){return Je.create(Cs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return pe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return cn.create(n.compositeFilter.filters.map(r=>_0(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return pe()}}(n.compositeFilter.op))}(t):pe()}function vN(t){return oN[t]}function EN(t){return aN[t]}function wN(t){return lN[t]}function Ps(t){return{fieldPath:t.canonicalString()}}function Cs(t){return ht.fromServerFormat(t.fieldPath)}function v0(t){return t instanceof Je?function(n){if(n.op==="=="){if(wg(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NAN"}};if(Eg(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(wg(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NOT_NAN"}};if(Eg(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ps(n.field),op:EN(n.op),value:n.value}}}(t):t instanceof cn?function(n){const r=n.getFilters().map(s=>v0(s));return r.length===1?r[0]:{compositeFilter:{op:wN(n.op),filters:r}}}(t):pe()}function TN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function E0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class bN{constructor(e){this.ht=e}}function IN(t){const e=yN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Rh(e,e.limit,"L"):e}/**
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
 */class AN{constructor(){this.ln=new RN}addToCollectionParentIndex(e,n){return this.ln.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(Rr.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(Rr.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class RN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new nt(je.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new nt(je.comparator)).toArray()}}/**
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
 */const Mg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Dt{static withCacheSize(e){return new Dt(e,Dt.DEFAULT_COLLECTION_PERCENTILE,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Dt.DEFAULT_COLLECTION_PERCENTILE=10,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Dt.DEFAULT=new Dt(41943040,Dt.DEFAULT_COLLECTION_PERCENTILE,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Dt.DISABLED=new Dt(-1,0,0);/**
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
 */class li{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new li(0)}static Qn(){return new li(-1)}}/**
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
 */function Vg([t,e],[n,r]){const s=be(t,n);return s===0?be(e,r):s}class SN{constructor(e){this.Gn=e,this.buffer=new nt(Vg),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Vg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class PN{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ee("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){_i(n)?ee("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await yi(n)}await this.Yn(3e5)})}}class CN{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return B.resolve(ec.oe);const r=new SN(n);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ee("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(Mg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Mg):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,s,i,o,a,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,o=Date.now(),this.nthSequenceNumber(e,s))).next(d=>(r=d,a=Date.now(),this.removeTargets(e,r,n))).next(d=>(i=d,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(u=Date.now(),Rs()<=Ee.DEBUG&&ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${d} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:d})))}}function kN(t,e){return new CN(t,e)}/**
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
 */class xN{constructor(){this.changes=new hs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,wt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ON{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class NN{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ro(r.mutation,s,sn.empty(),tt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,we()).next(()=>r))}getLocalViewOfDocuments(e,n,r=we()){const s=Qr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Bi();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Qr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,we()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=qn();const o=no(),a=function(){return no()}();return n.forEach((c,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof fs)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),ro(h.mutation,u,h.mutation.getFieldMask(),tt.now())):o.set(u.key,sn.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var d;return a.set(u,new ON(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=no();let s=new Ge((o,a)=>o-a),i=we();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=r.get(c)||sn.empty();h=a.applyToLocalView(u,h),r.set(c,h);const d=(s.get(a.batchId)||we()).add(c);s=s.insert(a.batchId,d)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,d=r0();h.forEach(m=>{if(!i.has(m)){const g=c0(n.get(m),r.get(m));g!==null&&d.set(m,g),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return le.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):JE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):B.resolve(Qr());let a=-1,c=i;return o.next(u=>B.forEach(u,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(h)?B.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{c=c.insert(h,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,we())).next(h=>({batchId:a,changes:n0(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new le(n)).next(r=>{let s=Bi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Bi();return this.indexManager.getCollectionParents(e,i).next(a=>B.forEach(a,c=>{const u=function(d,m){return new vi(m,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((d,m)=>{o=o.insert(d,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,wt.newInvalidDocument(h)))});let a=Bi();return o.forEach((c,u)=>{const h=i.get(c);h!==void 0&&ro(h.mutation,u,sn.empty(),tt.now()),sc(n,u)&&(a=a.insert(c,u))}),a})}}/**
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
 */class DN{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return B.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:En(s.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(s){return{name:s.name,query:IN(s.bundledQuery),readTime:En(s.readTime)}}(n)),B.resolve()}}/**
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
 */class MN{constructor(){this.overlays=new Ge(le.comparator),this.Er=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Qr();return B.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Tt(e,n,i)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Er.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const s=Qr(),i=n.length+1,o=new le(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return B.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ge((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=Qr(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Qr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=s)););return B.resolve(a)}Tt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Er.get(s.largestBatchId).delete(r.key);this.Er.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new eN(n,r));let i=this.Er.get(n);i===void 0&&(i=we(),this.Er.set(n,i)),this.Er.set(n,i.add(r.key))}}/**
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
 */class VN{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
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
 */class Mf{constructor(){this.dr=new nt(st.Ar),this.Rr=new nt(st.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new st(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new st(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new le(new je([])),r=new st(n,e),s=new st(n,e+1),i=[];return this.Rr.forEachInRange([r,s],o=>{this.gr(o),i.push(o.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new le(new je([])),r=new st(n,e),s=new st(n,e+1);let i=we();return this.Rr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new st(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class st{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return le.comparator(e.key,n.key)||be(e.br,n.br)}static Vr(e,n){return be(e.br,n.br)||le.comparator(e.key,n.key)}}/**
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
 */class LN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new nt(st.Ar)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ZO(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.vr=this.vr.add(new st(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Fr(r),i=s<0?0:s;return B.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new st(n,0),s=new st(n,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,s],o=>{const a=this.Cr(o.br);i.push(a)}),B.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new nt(be);return n.forEach(s=>{const i=new st(s,0),o=new st(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],a=>{r=r.add(a.br)})}),B.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;le.isDocumentKey(i)||(i=i.child(""));const o=new st(new le(i),0);let a=new nt(be);return this.vr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.br)),!0)},o),B.resolve(this.Mr(a))}Mr(e){const n=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ke(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return B.forEach(n.mutations,s=>{const i=new st(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new st(n,0),s=this.vr.firstAfterOrEqual(r);return B.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class FN{constructor(e){this.Nr=e,this.docs=function(){return new Ge(le.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():wt.newInvalidDocument(n))}getEntries(e,n){let r=qn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():wt.newInvalidDocument(s))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=qn();const o=n.path,a=new le(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||mO(pO(h),r)<=0||(s.has(h.key)||sc(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return B.resolve(i)}getAllFromCollectionGroup(e,n,r,s){pe()}Lr(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new UN(this)}getSize(e){return B.resolve(this.size)}}class UN extends xN{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
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
 */class jN{constructor(e){this.persistence=e,this.Br=new hs(n=>Sf(n),Pf),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.kr=0,this.qr=new Mf,this.targetCount=0,this.Qr=li.qn()}forEachTarget(e,n){return this.Br.forEach((r,s)=>n(s)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),B.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new li(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.Un(n),B.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Br.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Br.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),B.waitFor(i).next(()=>s)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),B.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.qr.containsKey(n))}}/**
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
 */class w0{constructor(e,n){this.Kr={},this.overlays={},this.$r=new ec(0),this.Ur=!1,this.Ur=!0,this.Wr=new VN,this.referenceDelegate=e(this),this.Gr=new jN(this),this.indexManager=new AN,this.remoteDocumentCache=function(s){return new FN(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new bN(n),this.jr=new DN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new MN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new LN(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const s=new BN(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,n){return B.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class BN extends yO{constructor(e){super(),this.currentSequenceNumber=e}}class Vf{constructor(e){this.persistence=e,this.Zr=new Mf,this.Xr=null}static ei(e){return new Vf(e)}get ti(){if(this.Xr)return this.Xr;throw pe()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),B.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.ti,r=>{const s=le.fromPath(r);return this.ni(e,s).next(i=>{i||n.removeEntry(s,ge.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return B.or([()=>B.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class vl{constructor(e,n){this.persistence=e,this.ri=new hs(r=>EO(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=kN(this,n)}static ei(e,n){return new vl(e,n)}Hr(){}Jr(e){return B.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return B.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(i=>i?B.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Lr(e,o=>this.ir(e,o,n).next(a=>{a||(r++,i.removeEntry(o,ge.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),B.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),B.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),B.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ma(e.data.value)),n}ir(e,n,r){return B.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.ri.get(n);return B.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Lf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=s}static zi(e,n){let r=we(),s=we();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Lf(e,n.fromCache,r,s)}}/**
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
 */class $N{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class HN{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return Uk()?8:_O(bt())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Xi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.es(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new $N;return this.ts(e,n,o).next(a=>{if(i.result=a,this.Hi)return this.ns(e,n,o,a.size)})}).next(()=>i.result)}ns(e,n,r,s){return r.documentReadCount<this.Ji?(Rs()<=Ee.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",Ss(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),B.resolve()):(Rs()<=Ee.DEBUG&&ee("QueryEngine","Query:",Ss(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(Rs()<=Ee.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",Ss(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_n(n))):B.resolve())}Xi(e,n){if(Ag(n))return B.resolve(null);let r=_n(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Rh(n,null,"F"),r=_n(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=we(...i);return this.Zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.rs(n,a);return this.ss(n,u,o,c.readTime)?this.Xi(e,Rh(n,null,"F")):this.os(e,u,n,c)}))})))}es(e,n,r,s){return Ag(n)||s.isEqual(ge.min())?B.resolve(null):this.Zi.getDocuments(e,r).next(i=>{const o=this.rs(n,i);return this.ss(n,o,r,s)?B.resolve(null):(Rs()<=Ee.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ss(n)),this.os(e,o,n,dO(s,-1)).next(a=>a))})}rs(e,n){let r=new nt(e0(e));return n.forEach((s,i)=>{sc(e,i)&&(r=r.add(i))}),r}ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,n,r){return Rs()<=Ee.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",Ss(n)),this.Zi.getDocumentsMatchingQuery(e,n,Rr.min(),r)}os(e,n,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class qN{constructor(e,n,r,s){this.persistence=e,this._s=n,this.serializer=s,this.us=new Ge(be),this.cs=new hs(i=>Sf(i),Pf),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new NN(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function zN(t,e,n,r){return new qN(t,e,n,r)}async function T0(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=we();for(const u of s){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function WN(t,e){const n=_e(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.hs.newChangeBuffer({trackRemovals:!0});return function(a,c,u,h){const d=u.batch,m=d.keys();let g=B.resolve();return m.forEach(A=>{g=g.next(()=>h.getEntry(c,A)).next(x=>{const N=u.docVersions.get(A);ke(N!==null),x.version.compareTo(N)<0&&(d.applyToRemoteDocument(x,u),x.isValidDocument()&&(x.setReadTime(u.commitVersion),h.addEntry(x)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(c,d))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=we();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function b0(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function KN(t,e){const n=_e(t),r=e.snapshotVersion;let s=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});s=n.us;const a=[];e.targetChanges.forEach((h,d)=>{const m=s.get(d);if(!m)return;a.push(n.Gr.removeMatchingKeys(i,h.removedDocuments,d).next(()=>n.Gr.addMatchingKeys(i,h.addedDocuments,d)));let g=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(ft.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),s=s.insert(d,g),function(x,N,O){return x.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(m,g,h)&&a.push(n.Gr.updateTargetData(i,g))});let c=qn(),u=we();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(GN(i,o,e.documentUpdates).next(h=>{c=h.Is,u=h.Es})),!r.isEqual(ge.min())){const h=n.Gr.getLastRemoteSnapshotVersion(i).next(d=>n.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return B.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.us=s,i))}function GN(t,e,n){let r=we(),s=we();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=qn();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(ge.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):ee("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Is:o,Es:s}})}function QN(t,e){const n=_e(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function YN(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Gr.getTargetData(r,e).next(i=>i?(s=i,B.resolve(s)):n.Gr.allocateTargetId(r).next(o=>(s=new mr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function xh(t,e,n){const r=_e(t),s=r.us.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!_i(o))throw o;ee("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function Lg(t,e,n){const r=_e(t);let s=ge.min(),i=we();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const d=_e(c),m=d.cs.get(h);return m!==void 0?B.resolve(d.us.get(m)):d.Gr.getTargetData(u,h)}(r,o,_n(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?s:ge.min(),n?i:we())).next(a=>(XN(r,FO(e),a),{documents:a,ds:i})))}function XN(t,e,n){let r=t.ls.get(e)||ge.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ls.set(e,r)}class Fg{constructor(){this.activeTargetIds=qO()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class JN{constructor(){this._o=new Fg,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Fg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ZN{uo(e){}shutdown(){}}/**
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
 */class Ug{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ee("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ee("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ia=null;function uu(){return Ia===null?Ia=function(){return 268435456+Math.round(2147483648*Math.random())}():Ia++,"0x"+Ia.toString(16)}/**
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
 */const eD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class tD{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const yt="WebChannelConnection";class nD extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(n,r,s,i,o){const a=uu(),c=this.No(n,r.toUriEncodedString());ee("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(u,i,o),this.Bo(n,c,u,s).then(h=>(ee("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw si("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",c,"request:",s),h})}ko(n,r,s,i,o,a){return this.Oo(n,r,s,i,o)}Lo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+gi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}No(n,r){const s=eD[n];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,s){const i=uu();return new Promise((o,a)=>{const c=new VE;c.setWithCredentials(!0),c.listenOnce(LE.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Da.NO_ERROR:const h=c.getResponseJson();ee(yt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case Da.TIMEOUT:ee(yt,`RPC '${e}' ${i} timed out`),a(new te($.DEADLINE_EXCEEDED,"Request time out"));break;case Da.HTTP_ERROR:const d=c.getStatus();if(ee(yt,`RPC '${e}' ${i} failed with status:`,d,"response text:",c.getResponseText()),d>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const g=m==null?void 0:m.error;if(g&&g.status&&g.message){const A=function(N){const O=N.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(O)>=0?O:$.UNKNOWN}(g.status);a(new te(A,g.message))}else a(new te($.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new te($.UNAVAILABLE,"Connection failed."));break;default:pe()}}finally{ee(yt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);ee(yt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}qo(e,n,r){const s=uu(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=jE(),a=UE(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const h=i.join("");ee(yt,`Creating RPC '${e}' stream ${s}: ${h}`,c);const d=o.createWebChannel(h,c);let m=!1,g=!1;const A=new tD({Eo:N=>{g?ee(yt,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(m||(ee(yt,`Opening RPC '${e}' stream ${s} transport.`),d.open(),m=!0),ee(yt,`RPC '${e}' stream ${s} sending:`,N),d.send(N))},Ao:()=>d.close()}),x=(N,O,P)=>{N.listen(O,_=>{try{P(_)}catch(S){setTimeout(()=>{throw S},0)}})};return x(d,ji.EventType.OPEN,()=>{g||(ee(yt,`RPC '${e}' stream ${s} transport opened.`),A.So())}),x(d,ji.EventType.CLOSE,()=>{g||(g=!0,ee(yt,`RPC '${e}' stream ${s} transport closed`),A.Do())}),x(d,ji.EventType.ERROR,N=>{g||(g=!0,si(yt,`RPC '${e}' stream ${s} transport errored:`,N),A.Do(new te($.UNAVAILABLE,"The operation could not be completed")))}),x(d,ji.EventType.MESSAGE,N=>{var O;if(!g){const P=N.data[0];ke(!!P);const _=P,S=(_==null?void 0:_.error)||((O=_[0])===null||O===void 0?void 0:O.error);if(S){ee(yt,`RPC '${e}' stream ${s} received error:`,S);const D=S.status;let L=function(v){const w=Xe[v];if(w!==void 0)return h0(w)}(D),b=S.message;L===void 0&&(L=$.INTERNAL,b="Unknown error status: "+D+" with message "+S.message),g=!0,A.Do(new te(L,b)),d.close()}else ee(yt,`RPC '${e}' stream ${s} received:`,P),A.vo(P)}}),x(a,FE.STAT_EVENT,N=>{N.stat===Eh.PROXY?ee(yt,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===Eh.NOPROXY&&ee(yt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{A.bo()},0),A}}function hu(){return typeof document<"u"?document:null}/**
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
 */function lc(t){return new cN(t,!0)}/**
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
 */class I0{constructor(e,n,r=1e3,s=1.5,i=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,n-r);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class A0{constructor(e,n,r,s,i,o,a,c){this.li=e,this.Yo=r,this.Zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new I0(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(Hn(n.toString()),Hn("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===n&&this.I_(r,s)},r=>{e(()=>{const s=new te($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(s)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.E_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return ee("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(ee("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rD extends A0{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=fN(this.serializer,e),r=function(i){if(!("targetChange"in i))return ge.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ge.min():o.readTime?En(o.readTime):ge.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=kh(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Ih(c)?{documents:mN(i,c)}:{query:gN(i,c).ct},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=p0(i,o.resumeToken);const u=Sh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ge.min())>0){a.readTime=_l(i,o.snapshotVersion.toTimestamp());const u=Sh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=_N(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=kh(this.serializer),n.removeTarget=e,this.c_(n)}}class sD extends A0{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return ke(!!e.streamToken),this.lastStreamToken=e.streamToken,ke(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){ke(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=pN(e.writeResults,e.commitTime),r=En(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=kh(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>dN(this.serializer,r))};this.c_(n)}}/**
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
 */class iD extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new te($.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Oo(e,Ph(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new te($.UNKNOWN,i.toString())})}ko(e,n,r,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.ko(e,Ph(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new te($.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class oD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Hn(n),this.C_=!1):ee("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class aD{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{ds(this)&&(ee("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=_e(c);u.k_.add(4),await jo(u),u.K_.set("Unknown"),u.k_.delete(4),await cc(u)}(this))})}),this.K_=new oD(r,s)}}async function cc(t){if(ds(t))for(const e of t.q_)await e(!0)}async function jo(t){for(const e of t.q_)await e(!1)}function R0(t,e){const n=_e(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),Bf(n)?jf(n):Ei(n).s_()&&Uf(n,e))}function Ff(t,e){const n=_e(t),r=Ei(n);n.B_.delete(e),r.s_()&&S0(n,e),n.B_.size===0&&(r.s_()?r.a_():ds(n)&&n.K_.set("Unknown"))}function Uf(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ei(t).V_(e)}function S0(t,e){t.U_.xe(e),Ei(t).m_(e)}function jf(t){t.U_=new iN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Ei(t).start(),t.K_.F_()}function Bf(t){return ds(t)&&!Ei(t).i_()&&t.B_.size>0}function ds(t){return _e(t).k_.size===0}function P0(t){t.U_=void 0}async function lD(t){t.K_.set("Online")}async function cD(t){t.B_.forEach((e,n)=>{Uf(t,e)})}async function uD(t,e){P0(t),Bf(t)?(t.K_.O_(e),jf(t)):t.K_.set("Unknown")}async function hD(t,e,n){if(t.K_.set("Online"),e instanceof d0&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.B_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.B_.delete(a),s.U_.removeTarget(a))}(t,e)}catch(r){ee("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await El(t,r)}else if(e instanceof Fa?t.U_.$e(e):e instanceof f0?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(ge.min()))try{const r=await b0(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.U_.it(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=i.B_.get(u);h&&i.B_.set(u,h.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const h=i.B_.get(c);if(!h)return;i.B_.set(c,h.withResumeToken(ft.EMPTY_BYTE_STRING,h.snapshotVersion)),S0(i,c);const d=new mr(h.target,c,u,h.sequenceNumber);Uf(i,d)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){ee("RemoteStore","Failed to raise snapshot:",r),await El(t,r)}}async function El(t,e,n){if(!_i(e))throw e;t.k_.add(1),await jo(t),t.K_.set("Offline"),n||(n=()=>b0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await cc(t)})}function C0(t,e){return e().catch(n=>El(t,n,e))}async function uc(t){const e=_e(t),n=kr(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;fD(e);)try{const s=await QN(e.localStore,r);if(s===null){e.L_.length===0&&n.a_();break}r=s.batchId,dD(e,s)}catch(s){await El(e,s)}k0(e)&&x0(e)}function fD(t){return ds(t)&&t.L_.length<10}function dD(t,e){t.L_.push(e);const n=kr(t);n.s_()&&n.f_&&n.g_(e.mutations)}function k0(t){return ds(t)&&!kr(t).i_()&&t.L_.length>0}function x0(t){kr(t).start()}async function pD(t){kr(t).w_()}async function mD(t){const e=kr(t);for(const n of t.L_)e.g_(n.mutations)}async function gD(t,e,n){const r=t.L_.shift(),s=Of.from(r,e,n);await C0(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await uc(t)}async function yD(t,e){e&&kr(t).f_&&await async function(r,s){if(function(o){return nN(o)&&o!==$.ABORTED}(s.code)){const i=r.L_.shift();kr(r).__(),await C0(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await uc(r)}}(t,e),k0(t)&&x0(t)}async function jg(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),ee("RemoteStore","RemoteStore received new credentials");const r=ds(n);n.k_.add(3),await jo(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await cc(n)}async function _D(t,e){const n=_e(t);e?(n.k_.delete(2),await cc(n)):e||(n.k_.add(2),await jo(n),n.K_.set("Unknown"))}function Ei(t){return t.W_||(t.W_=function(n,r,s){const i=_e(n);return i.b_(),new rD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:lD.bind(null,t),mo:cD.bind(null,t),po:uD.bind(null,t),R_:hD.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),Bf(t)?jf(t):t.K_.set("Unknown")):(await t.W_.stop(),P0(t))})),t.W_}function kr(t){return t.G_||(t.G_=function(n,r,s){const i=_e(n);return i.b_(),new sD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:pD.bind(null,t),po:yD.bind(null,t),p_:mD.bind(null,t),y_:gD.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await uc(t)):(await t.G_.stop(),t.L_.length>0&&(ee("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
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
 */class $f{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Fn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new $f(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hf(t,e){if(Hn("AsyncQueue",`${e}: ${t}`),_i(t))return new te($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ws{static emptySet(e){return new Ws(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||le.comparator(n.key,r.key):(n,r)=>le.comparator(n.key,r.key),this.keyedMap=Bi(),this.sortedSet=new Ge(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ws)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ws;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Bg{constructor(){this.z_=new Ge(le.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):pe():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ci{constructor(e,n,r,s,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ci(e,n,Ws.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class vD{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class ED{constructor(){this.queries=$g(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const s=_e(n),i=s.queries;s.queries=$g(),i.forEach((o,a)=>{for(const c of a.J_)c.onError(r)})})(this,new te($.ABORTED,"Firestore shutting down"))}}function $g(){return new hs(t=>ZE(t),rc)}async function O0(t,e){const n=_e(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Y_()&&e.Z_()&&(r=2):(i=new vD,r=e.Z_()?0:1);try{switch(r){case 0:i.H_=await n.onListen(s,!0);break;case 1:i.H_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Hf(o,`Initialization of query '${Ss(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.J_.push(e),e.ea(n.onlineState),i.H_&&e.ta(i.H_)&&qf(n)}async function N0(t,e){const n=_e(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.J_.indexOf(e);o>=0&&(i.J_.splice(o,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function wD(t,e){const n=_e(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.J_)a.ta(s)&&(r=!0);o.H_=s}}r&&qf(n)}function TD(t,e,n){const r=_e(t),s=r.queries.get(e);if(s)for(const i of s.J_)i.onError(n);r.queries.delete(e)}function qf(t){t.X_.forEach(e=>{e.next()})}var Oh,Hg;(Hg=Oh||(Oh={})).na="default",Hg.Cache="cache";class D0{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ci(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=ci.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Oh.Cache}}/**
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
 */class M0{constructor(e){this.key=e}}class V0{constructor(e){this.key=e}}class bD{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=we(),this.mutatedKeys=we(),this.Va=e0(e),this.ma=new Ws(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new Bg,s=n?n.ma:this.ma;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,d)=>{const m=s.get(h),g=sc(this.query,d)?d:null,A=!!m&&this.mutatedKeys.has(m.key),x=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let N=!1;m&&g?m.data.isEqual(g.data)?A!==x&&(r.track({type:3,doc:g}),N=!0):this.ya(m,g)||(r.track({type:2,doc:g}),N=!0,(c&&this.Va(g,c)>0||u&&this.Va(g,u)<0)&&(a=!0)):!m&&g?(r.track({type:0,doc:g}),N=!0):m&&!g&&(r.track({type:1,doc:m}),N=!0,(c||u)&&(a=!0)),N&&(g?(o=o.add(g),i=x?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{ma:o,pa:r,ss:a,mutatedKeys:i}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((h,d)=>function(g,A){const x=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe()}};return x(g)-x(A)}(h.type,d.type)||this.Va(h.doc,d.doc)),this.wa(r),s=s!=null&&s;const a=n&&!s?this.Sa():[],c=this.Ra.size===0&&this.current&&!s?1:0,u=c!==this.Aa;return this.Aa=c,o.length!==0||u?{snapshot:new ci(this.query,e.ma,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:a}:{ba:a}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Bg,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=we(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new V0(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new M0(r))}),n}va(e){this.da=e.ds,this.Ra=we();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return ci.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class ID{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class AD{constructor(e){this.key=e,this.Fa=!1}}class RD{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new hs(a=>ZE(a),rc),this.Oa=new Map,this.Na=new Set,this.La=new Ge(le.comparator),this.Ba=new Map,this.ka=new Mf,this.qa={},this.Qa=new Map,this.Ka=li.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function SD(t,e,n=!0){const r=$0(t);let s;const i=r.xa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await L0(r,e,n,!0),s}async function PD(t,e){const n=$0(t);await L0(n,e,!0,!1)}async function L0(t,e,n,r){const s=await YN(t.localStore,_n(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await CD(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&R0(t.remoteStore,s),a}async function CD(t,e,n,r,s){t.Ua=(d,m,g)=>async function(x,N,O,P){let _=N.view.ga(O);_.ss&&(_=await Lg(x.localStore,N.query,!1).then(({documents:b})=>N.view.ga(b,_)));const S=P&&P.targetChanges.get(N.targetId),D=P&&P.targetMismatches.get(N.targetId)!=null,L=N.view.applyChanges(_,x.isPrimaryClient,S,D);return zg(x,N.targetId,L.ba),L.snapshot}(t,d,m,g);const i=await Lg(t.localStore,e,!0),o=new bD(e,i.ds),a=o.ga(i.documents),c=Uo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,c);zg(t,n,u.ba);const h=new ID(e,n,o);return t.xa.set(e,h),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),u.snapshot}async function kD(t,e,n){const r=_e(t),s=r.xa.get(e),i=r.Oa.get(s.targetId);if(i.length>1)return r.Oa.set(s.targetId,i.filter(o=>!rc(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await xh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ff(r.remoteStore,s.targetId),Nh(r,s.targetId)}).catch(yi)):(Nh(r,s.targetId),await xh(r.localStore,s.targetId,!0))}async function xD(t,e){const n=_e(t),r=n.xa.get(e),s=n.Oa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ff(n.remoteStore,r.targetId))}async function OD(t,e,n){const r=UD(t);try{const s=await function(o,a){const c=_e(o),u=tt.now(),h=a.reduce((g,A)=>g.add(A.key),we());let d,m;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let A=qn(),x=we();return c.hs.getEntries(g,h).next(N=>{A=N,A.forEach((O,P)=>{P.isValidDocument()||(x=x.add(O))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,A)).next(N=>{d=N;const O=[];for(const P of a){const _=XO(P,d.get(P.key).overlayedDocument);_!=null&&O.push(new fs(P.key,_,zE(_.value.mapValue),vn.exists(!0)))}return c.mutationQueue.addMutationBatch(g,u,O,a)}).next(N=>{m=N;const O=N.applyToLocalDocumentSet(d,x);return c.documentOverlayCache.saveOverlays(g,N.batchId,O)})}).then(()=>({batchId:m.batchId,changes:n0(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let u=o.qa[o.currentUser.toKey()];u||(u=new Ge(be)),u=u.insert(a,c),o.qa[o.currentUser.toKey()]=u}(r,s.batchId,n),await Bo(r,s.changes),await uc(r.remoteStore)}catch(s){const i=Hf(s,"Failed to persist write");n.reject(i)}}async function F0(t,e){const n=_e(t);try{const r=await KN(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ba.get(i);o&&(ke(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Fa=!0:s.modifiedDocuments.size>0?ke(o.Fa):s.removedDocuments.size>0&&(ke(o.Fa),o.Fa=!1))}),await Bo(n,r,e)}catch(r){await yi(r)}}function qg(t,e,n){const r=_e(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.xa.forEach((i,o)=>{const a=o.view.ea(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=_e(o);c.onlineState=a;let u=!1;c.queries.forEach((h,d)=>{for(const m of d.J_)m.ea(a)&&(u=!0)}),u&&qf(c)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ND(t,e,n){const r=_e(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ba.get(e),i=s&&s.key;if(i){let o=new Ge(le.comparator);o=o.insert(i,wt.newNoDocument(i,ge.min()));const a=we().add(i),c=new ac(ge.min(),new Map,new Ge(be),o,a);await F0(r,c),r.La=r.La.remove(i),r.Ba.delete(e),zf(r)}else await xh(r.localStore,e,!1).then(()=>Nh(r,e,n)).catch(yi)}async function DD(t,e){const n=_e(t),r=e.batch.batchId;try{const s=await WN(n.localStore,e);j0(n,r,null),U0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Bo(n,s)}catch(s){await yi(s)}}async function MD(t,e,n){const r=_e(t);try{const s=await function(o,a){const c=_e(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,a).next(d=>(ke(d!==null),h=d.keys(),c.mutationQueue.removeMutationBatch(u,d))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(r.localStore,e);j0(r,e,n),U0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Bo(r,s)}catch(s){await yi(s)}}function U0(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function j0(t,e,n){const r=_e(t);let s=r.qa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function Nh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||B0(t,r)})}function B0(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(Ff(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),zf(t))}function zg(t,e,n){for(const r of n)r instanceof M0?(t.ka.addReference(r.key,e),VD(t,r)):r instanceof V0?(ee("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||B0(t,r.key)):pe()}function VD(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(ee("SyncEngine","New document in limbo: "+n),t.Na.add(r),zf(t))}function zf(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new le(je.fromString(e)),r=t.Ka.next();t.Ba.set(r,new AD(n)),t.La=t.La.insert(n,r),R0(t.remoteStore,new mr(_n(Cf(n.path)),r,"TargetPurposeLimboResolution",ec.oe))}}async function Bo(t,e,n){const r=_e(t),s=[],i=[],o=[];r.xa.isEmpty()||(r.xa.forEach((a,c)=>{o.push(r.Ua(c,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const d=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(u){s.push(u);const d=Lf.zi(c.targetId,u);i.push(d)}}))}),await Promise.all(o),r.Ma.R_(s),await async function(c,u){const h=_e(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>B.forEach(u,m=>B.forEach(m.Wi,g=>h.persistence.referenceDelegate.addReference(d,m.targetId,g)).next(()=>B.forEach(m.Gi,g=>h.persistence.referenceDelegate.removeReference(d,m.targetId,g)))))}catch(d){if(!_i(d))throw d;ee("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const m=d.targetId;if(!d.fromCache){const g=h.us.get(m),A=g.snapshotVersion,x=g.withLastLimboFreeSnapshotVersion(A);h.us=h.us.insert(m,x)}}}(r.localStore,i))}async function LD(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){ee("SyncEngine","User change. New user:",e.toKey());const r=await T0(n.localStore,e);n.currentUser=e,function(i,o){i.Qa.forEach(a=>{a.forEach(c=>{c.reject(new te($.CANCELLED,o))})}),i.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Bo(n,r.Ts)}}function FD(t,e){const n=_e(t),r=n.Ba.get(e);if(r&&r.Fa)return we().add(r.key);{let s=we();const i=n.Oa.get(e);if(!i)return s;for(const o of i){const a=n.xa.get(o);s=s.unionWith(a.view.fa)}return s}}function $0(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=F0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=FD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ND.bind(null,e),e.Ma.R_=wD.bind(null,e.eventManager),e.Ma.Wa=TD.bind(null,e.eventManager),e}function UD(t){const e=_e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=DD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=MD.bind(null,e),e}class wl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=lc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return zN(this.persistence,new HN,e.initialUser,this.serializer)}ja(e){return new w0(Vf.ei,this.serializer)}za(e){return new JN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}wl.provider={build:()=>new wl};class jD extends wl{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){ke(this.persistence.referenceDelegate instanceof vl);const r=this.persistence.referenceDelegate.garbageCollector;return new PN(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?Dt.withCacheSize(this.cacheSizeBytes):Dt.DEFAULT;return new w0(r=>vl.ei(r,n),this.serializer)}}class Dh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>qg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=LD.bind(null,this.syncEngine),await _D(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ED}()}createDatastore(e){const n=lc(e.databaseInfo.databaseId),r=function(i){return new nD(i)}(e.databaseInfo);return function(i,o,a,c){return new iD(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new aD(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>qg(this.syncEngine,n,0),function(){return Ug.p()?new Ug:new ZN}())}createSyncEngine(e,n){return function(s,i,o,a,c,u,h){const d=new RD(s,i,o,a,c,u);return h&&(d.$a=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=_e(s);ee("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await jo(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Dh.provider={build:()=>new Dh};/**
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
 */class H0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Hn("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class BD{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=_t.UNAUTHENTICATED,this.clientId=$E.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ee("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ee("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Hf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function fu(t,e){t.asyncQueue.verifyOperationInProgress(),ee("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await T0(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Wg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await $D(t);ee("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>jg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>jg(e.remoteStore,s)),t._onlineComponents=e}async function $D(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee("FirestoreClient","Using user provided OfflineComponentProvider");try{await fu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===$.FAILED_PRECONDITION||s.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;si("Error using user provided cache. Falling back to memory cache: "+n),await fu(t,new wl)}}else ee("FirestoreClient","Using default OfflineComponentProvider"),await fu(t,new jD(void 0));return t._offlineComponents}async function q0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee("FirestoreClient","Using user provided OnlineComponentProvider"),await Wg(t,t._uninitializedComponentsProvider._online)):(ee("FirestoreClient","Using default OnlineComponentProvider"),await Wg(t,new Dh))),t._onlineComponents}function HD(t){return q0(t).then(e=>e.syncEngine)}async function z0(t){const e=await q0(t),n=e.eventManager;return n.onListen=SD.bind(null,e.syncEngine),n.onUnlisten=kD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=PD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=xD.bind(null,e.syncEngine),n}function qD(t,e,n={}){const r=new Fn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const h=new H0({next:m=>{h.eu(),o.enqueueAndForget(()=>N0(i,d));const g=m.docs.has(a);!g&&m.fromCache?u.reject(new te($.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&m.fromCache&&c&&c.source==="server"?u.reject(new te($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),d=new D0(Cf(a.path),h,{includeMetadataChanges:!0,ua:!0});return O0(i,d)}(await z0(t),t.asyncQueue,e,n,r)),r.promise}function zD(t,e,n={}){const r=new Fn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const h=new H0({next:m=>{h.eu(),o.enqueueAndForget(()=>N0(i,d)),m.fromCache&&c.source==="server"?u.reject(new te($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),d=new D0(a,h,{includeMetadataChanges:!0,ua:!0});return O0(i,d)}(await z0(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function W0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Kg=new Map;/**
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
 */function K0(t,e,n){if(!n)throw new te($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function WD(t,e,n,r){if(e===!0&&r===!0)throw new te($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Gg(t){if(!le.isDocumentKey(t))throw new te($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Qg(t){if(le.isDocumentKey(t))throw new te($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function hc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":pe()}function as(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new te($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=hc(t);throw new te($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Yg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new te($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new te($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}WD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=W0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new te($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new te($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new te($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class fc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new sO;switch(r.type){case"firstParty":return new lO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Kg.get(n);r&&(ee("ComponentProvider","Removing Datastore"),Kg.delete(n),r.terminate())}(this),Promise.resolve()}}function KD(t,e,n,r={}){var s;const i=(t=as(t,fc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&si("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=_t.MOCK_USER;else{a=Ok(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new te($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new _t(u)}t._authCredentials=new iO(new BE(a,c))}}/**
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
 */class ps{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ps(this.firestore,e,this._query)}}class qt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qt(this.firestore,e,this._key)}}class wr extends ps{constructor(e,n,r){super(e,n,Cf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qt(this.firestore,null,new le(e))}withConverter(e){return new wr(this.firestore,e,this._path)}}function xL(t,e,...n){if(t=Zt(t),K0("collection","path",e),t instanceof fc){const r=je.fromString(e,...n);return Qg(r),new wr(t,null,r)}{if(!(t instanceof qt||t instanceof wr))throw new te($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(je.fromString(e,...n));return Qg(r),new wr(t.firestore,null,r)}}function GD(t,e,...n){if(t=Zt(t),arguments.length===1&&(e=$E.newId()),K0("doc","path",e),t instanceof fc){const r=je.fromString(e,...n);return Gg(r),new qt(t,null,new le(r))}{if(!(t instanceof qt||t instanceof wr))throw new te($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(je.fromString(e,...n));return Gg(r),new qt(t.firestore,t instanceof wr?t.converter:null,new le(r))}}/**
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
 */class Xg{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new I0(this,"async_queue_retry"),this.fu=()=>{const r=hu();r&&ee("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=hu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=hu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new Fn;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!_i(e))throw e;ee("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Hn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const s=$f.createAndSchedule(this,e,n,r,i=>this.Su(i));return this.du.push(s),s}pu(){this.Au&&pe()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class $o extends fc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Xg,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xg(e),this._firestoreClient=void 0,await e}}}function QD(t,e){const n=typeof t=="object"?t:OE(),r=typeof t=="string"?t:"(default)",s=bf(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=kk("firestore");i&&KD(s,...i)}return s}function Wf(t){if(t._terminated)throw new te($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||YD(t),t._firestoreClient}function YD(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,u,h){return new bO(a,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,W0(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new BD(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class ui{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ui(ft.fromBase64String(e))}catch(n){throw new te($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ui(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Kf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new te($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class G0{constructor(e){this._methodName=e}}/**
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
 */class Gf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new te($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new te($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
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
 */class Qf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const XD=/^__.*__$/;class JD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new fs(e,this.data,this.fieldMask,n,this.fieldTransforms):new Fo(e,this.data,n,this.fieldTransforms)}}function Q0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe()}}class Yf{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Yf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Lu(e),s}Bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Tl(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Q0(this.Mu)&&XD.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class ZD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||lc(e)}$u(e,n,r,s=!1){return new Yf({Mu:e,methodName:n,Ku:r,path:ht.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Y0(t){const e=t._freezeSettings(),n=lc(t._databaseId);return new ZD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function eM(t,e,n,r,s,i={}){const o=t.$u(i.merge||i.mergeFields?2:0,e,n,s);Z0("Data must be an object, but it was:",o,r);const a=X0(r,o);let c,u;if(i.merge)c=new sn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const m=nM(e,d,n);if(!o.contains(m))throw new te($.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);sM(h,m)||h.push(m)}c=new sn(h),u=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,u=o.fieldTransforms;return new JD(new Yt(a),c,u)}function tM(t,e,n,r=!1){return Xf(n,t.$u(r?4:3,e))}function Xf(t,e){if(J0(t=Zt(t)))return Z0("Unsupported field value:",e,t),X0(t,e);if(t instanceof G0)return function(r,s){if(!Q0(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=Xf(a,s.ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Zt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return zO(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=tt.fromDate(r);return{timestampValue:_l(s.serializer,i)}}if(r instanceof tt){const i=new tt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:_l(s.serializer,i)}}if(r instanceof Gf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ui)return{bytesValue:p0(s.serializer,r._byteString)};if(r instanceof qt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Df(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Qf)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.qu("VectorValues must only contain numeric values.");return kf(a.serializer,c)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${hc(r)}`)}(t,e)}function X0(t,e){const n={};return HE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):us(t,(r,s)=>{const i=Xf(s,e.Ou(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function J0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof tt||t instanceof Gf||t instanceof ui||t instanceof qt||t instanceof G0||t instanceof Qf)}function Z0(t,e,n){if(!J0(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=hc(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function nM(t,e,n){if((e=Zt(e))instanceof Kf)return e._internalPath;if(typeof e=="string")return ew(t,e);throw Tl("Field path arguments must be of type string or ",t,!1,void 0,n)}const rM=new RegExp("[~\\*/\\[\\]]");function ew(t,e,n){if(e.search(rM)>=0)throw Tl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Kf(...e.split("."))._internalPath}catch{throw Tl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Tl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new te($.INVALID_ARGUMENT,a+t+c)}function sM(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class tw{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new iM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Jf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class iM extends tw{data(){return super.data()}}function Jf(t,e){return typeof e=="string"?ew(t,e):e instanceof Kf?e._internalPath:e._delegate._internalPath}/**
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
 */function oM(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new te($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Zf{}class nw extends Zf{}function OL(t,e,...n){let r=[];e instanceof Zf&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof td).length,a=i.filter(c=>c instanceof ed).length;if(o>1||o>0&&a>0)throw new te($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class ed extends nw{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ed(e,n,r)}_apply(e){const n=this._parse(e);return rw(e._query,n),new ps(e.firestore,e.converter,Ah(e._query,n))}_parse(e){const n=Y0(e.firestore);return function(i,o,a,c,u,h,d){let m;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new te($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Zg(d,h);const g=[];for(const A of d)g.push(Jg(c,i,A));m={arrayValue:{values:g}}}else m=Jg(c,i,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Zg(d,h),m=tM(a,o,d,h==="in"||h==="not-in");return Je.create(u,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class td extends Zf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new td(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:cn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)rw(o,c),o=Ah(o,c)}(e._query,n),new ps(e.firestore,e.converter,Ah(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class nd extends nw{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new nd(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new te($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new te($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new To(i,o)}(e._query,this._field,this._direction);return new ps(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new vi(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function NL(t,e="asc"){const n=e,r=Jf("orderBy",t);return nd._create(r,n)}function Jg(t,e,n){if(typeof(n=Zt(n))=="string"){if(n==="")throw new te($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!JE(e)&&n.indexOf("/")!==-1)throw new te($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(je.fromString(n));if(!le.isDocumentKey(r))throw new te($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return vg(t,new le(r))}if(n instanceof qt)return vg(t,n._key);throw new te($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${hc(n)}.`)}function Zg(t,e){if(!Array.isArray(t)||t.length===0)throw new te($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function rw(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new te($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class aM{convertValue(e,n="none"){switch(Cr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Pr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw pe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return us(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ye(o.doubleValue));return new Qf(i)}convertGeoPoint(e){return new Gf(Ye(e.latitude),Ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=nc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(vo(e));default:return null}}convertTimestamp(e){const n=Sr(e);return new tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=je.fromString(e);ke(E0(r));const s=new Eo(r.get(1),r.get(3)),i=new le(r.popFirst(5));return s.isEqual(n)||Hn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function lM(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class Hi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sw extends tw{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ua(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Jf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ua extends sw{data(e={}){return super.data(e)}}class cM{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Hi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ua(this._firestore,this._userDataWriter,r.key,r,new Hi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new te($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Ua(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Hi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Ua(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Hi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:uM(a.type),doc:c,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function uM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe()}}/**
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
 */function DL(t){t=as(t,qt);const e=as(t.firestore,$o);return qD(Wf(e),t._key).then(n=>hM(e,t,n))}class iw extends aM{constructor(e){super(),this.firestore=e}convertBytes(e){return new ui(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new qt(this.firestore,null,n)}}function ML(t){t=as(t,ps);const e=as(t.firestore,$o),n=Wf(e),r=new iw(e);return oM(t._query),zD(n,t._query).then(s=>new cM(e,r,t,s))}function VL(t){return ow(as(t.firestore,$o),[new xf(t._key,vn.none())])}function LL(t,e){const n=as(t.firestore,$o),r=GD(t),s=lM(t.converter,e);return ow(n,[eM(Y0(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,vn.exists(!1))]).then(()=>r)}function ow(t,e){return function(r,s){const i=new Fn;return r.asyncQueue.enqueueAndForget(async()=>OD(await HD(r),s,i)),i.promise}(Wf(t),e)}function hM(t,e,n){const r=n.docs.get(e._key),s=new iw(t);return new sw(t,s,e._key,r,new Hi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){gi=s})(mi),ri(new is("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new $o(new oO(r.getProvider("auth-internal")),new uO(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new te($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Eo(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Er(dg,"4.7.5",e),Er(dg,"4.7.5","esm2017")})();function rd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function aw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fM=aw,lw=new Vo("auth","Firebase",aw());/**
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
 */const bl=new wf("@firebase/auth");function dM(t,...e){bl.logLevel<=Ee.WARN&&bl.warn(`Auth (${mi}): ${t}`,...e)}function ja(t,...e){bl.logLevel<=Ee.ERROR&&bl.error(`Auth (${mi}): ${t}`,...e)}/**
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
 */function zn(t,...e){throw sd(t,...e)}function wn(t,...e){return sd(t,...e)}function cw(t,e,n){const r=Object.assign(Object.assign({},fM()),{[e]:n});return new Vo("auth","Firebase",r).create(e,{appName:t.name})}function ns(t){return cw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function sd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return lw.create(t,...e)}function me(t,e,...n){if(!t)throw sd(e,...n)}function Mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ja(e),new Error(e)}function Wn(t,e){t||Mn(e)}/**
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
 */function Mh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function pM(){return ey()==="http:"||ey()==="https:"}function ey(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function mM(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pM()||Vk()||"connection"in navigator)?navigator.onLine:!0}function gM(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ho{constructor(e,n){this.shortDelay=e,this.longDelay=n,Wn(n>e,"Short delay should be less than long delay!"),this.isMobile=Nk()||Lk()}get(){return mM()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function id(t,e){Wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class uw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const yM={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const _M=new Ho(3e4,6e4);function od(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function wi(t,e,n,r,s={}){return hw(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Lo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return Mk()||(u.referrerPolicy="no-referrer"),uw.fetch()(fw(t,t.config.apiHost,n,a),u)})}async function hw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},yM),e);try{const s=new EM(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Aa(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Aa(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Aa(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Aa(t,"user-disabled",o);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw cw(t,h,u);zn(t,h)}}catch(s){if(s instanceof Yn)throw s;zn(t,"network-request-failed",{message:String(s)})}}async function vM(t,e,n,r,s={}){const i=await wi(t,e,n,r,s);return"mfaPendingCredential"in i&&zn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function fw(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?id(t.config,s):`${t.config.apiScheme}://${s}`}class EM{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wn(this.auth,"network-request-failed")),_M.get())})}}function Aa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=wn(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function wM(t,e){return wi(t,"POST","/v1/accounts:delete",e)}async function dw(t,e){return wi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function so(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function TM(t,e=!1){const n=Zt(t),r=await n.getIdToken(e),s=ad(r);me(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:so(du(s.auth_time)),issuedAtTime:so(du(s.iat)),expirationTime:so(du(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function du(t){return Number(t)*1e3}function ad(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ja("JWT malformed, contained fewer than 3 sections"),null;try{const s=AE(n);return s?JSON.parse(s):(ja("Failed to decode base64 JWT payload"),null)}catch(s){return ja("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ty(t){const e=ad(t);return me(e,"internal-error"),me(typeof e.exp<"u","internal-error"),me(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ao(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Yn&&bM(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function bM({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class IM{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Vh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=so(this.lastLoginAt),this.creationTime=so(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Il(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ao(t,dw(n,{idToken:r}));me(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?pw(i.providerUserInfo):[],a=RM(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=c?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Vh(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function AM(t){const e=Zt(t);await Il(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RM(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function pw(t){return t.map(e=>{var{providerId:n}=e,r=rd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function SM(t,e){const n=await hw(t,{},async()=>{const r=Lo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=fw(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",uw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function PM(t,e){return wi(t,"POST","/v2/accounts:revokeToken",od(t,e))}/**
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
 */class Ks{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){me(e.idToken,"internal-error"),me(typeof e.idToken<"u","internal-error"),me(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ty(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){me(e.length!==0,"internal-error");const n=ty(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(me(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await SM(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ks;return r&&(me(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(me(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(me(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ks,this.toJSON())}_performRefresh(){return Mn("not implemented")}}/**
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
 */function sr(t,e){me(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Vn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=rd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new IM(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Vh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ao(this,this.stsTokenManager.getToken(this.auth,e));return me(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return TM(this,e)}reload(){return AM(this)}_assign(e){this!==e&&(me(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){me(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Il(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pr(this.auth.app))return Promise.reject(ns(this.auth));const e=await this.getIdToken();return await Ao(this,wM(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,O=(u=n.createdAt)!==null&&u!==void 0?u:void 0,P=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:_,emailVerified:S,isAnonymous:D,providerData:L,stsTokenManager:b}=n;me(_&&b,e,"internal-error");const E=Ks.fromJSON(this.name,b);me(typeof _=="string",e,"internal-error"),sr(d,e.name),sr(m,e.name),me(typeof S=="boolean",e,"internal-error"),me(typeof D=="boolean",e,"internal-error"),sr(g,e.name),sr(A,e.name),sr(x,e.name),sr(N,e.name),sr(O,e.name),sr(P,e.name);const v=new Vn({uid:_,auth:e,email:m,emailVerified:S,displayName:d,isAnonymous:D,photoURL:A,phoneNumber:g,tenantId:x,stsTokenManager:E,createdAt:O,lastLoginAt:P});return L&&Array.isArray(L)&&(v.providerData=L.map(w=>Object.assign({},w))),N&&(v._redirectEventId=N),v}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ks;s.updateFromServerResponse(n);const i=new Vn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Il(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];me(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?pw(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Ks;a.updateFromIdToken(r);const c=new Vn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Vh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const ny=new Map;function Ln(t){Wn(t instanceof Function,"Expected a class definition");let e=ny.get(t);return e?(Wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ny.set(t,e),e)}/**
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
 */class mw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}mw.type="NONE";const ry=mw;/**
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
 */function Ba(t,e,n){return`firebase:${t}:${e}:${n}`}class Gs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ba(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ba("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Gs(Ln(ry),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Ln(ry);const o=Ba(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const d=Vn._fromJSON(e,h);u!==i&&(a=d),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Gs(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Gs(i,e,r))}}/**
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
 */function sy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ww(e))return"Blackberry";if(Tw(e))return"Webos";if(yw(e))return"Safari";if((e.includes("chrome/")||_w(e))&&!e.includes("edge/"))return"Chrome";if(Ew(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gw(t=bt()){return/firefox\//i.test(t)}function yw(t=bt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _w(t=bt()){return/crios\//i.test(t)}function vw(t=bt()){return/iemobile/i.test(t)}function Ew(t=bt()){return/android/i.test(t)}function ww(t=bt()){return/blackberry/i.test(t)}function Tw(t=bt()){return/webos/i.test(t)}function ld(t=bt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function CM(t=bt()){var e;return ld(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kM(){return Fk()&&document.documentMode===10}function bw(t=bt()){return ld(t)||Ew(t)||Tw(t)||ww(t)||/windows phone/i.test(t)||vw(t)}/**
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
 */function Iw(t,e=[]){let n;switch(t){case"Browser":n=sy(bt());break;case"Worker":n=`${sy(bt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${mi}/${r}`}/**
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
 */class xM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function OM(t,e={}){return wi(t,"GET","/v2/passwordPolicy",od(t,e))}/**
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
 */const NM=6;class DM{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:NM,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class MM{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new iy(this),this.idTokenSubscription=new iy(this),this.beforeStateQueue=new xM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ln(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Gs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await dw(this,{idToken:e}),r=await Vn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(pr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return me(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Il(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gM()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pr(this.app))return Promise.reject(ns(this));const n=e?Zt(e):null;return n&&me(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&me(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pr(this.app)?Promise.reject(ns(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pr(this.app)?Promise.reject(ns(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await OM(this),n=new DM(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Vo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await PM(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ln(e)||this._popupRedirectResolver;me(n,this,"argument-error"),this.redirectPersistenceManager=await Gs.create(this,[Ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(me(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return me(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Iw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&dM(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function cd(t){return Zt(t)}class iy{constructor(e){this.auth=e,this.observer=null,this.addObserver=Wk(n=>this.observer=n)}get next(){return me(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ud={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function VM(t){ud=t}function LM(t){return ud.loadJS(t)}function FM(){return ud.gapiScript}function UM(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function jM(t,e){const n=bf(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(fl(i,e??{}))return s;zn(s,"already-initialized")}return n.initialize({options:e})}function BM(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ln);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function $M(t,e,n){const r=cd(t);me(r._canInitEmulator,r,"emulator-config-failed"),me(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Aw(e),{host:o,port:a}=HM(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),qM()}function Aw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function HM(t){const e=Aw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:oy(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:oy(o)}}}function oy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qM(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Rw{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mn("not implemented")}_getIdTokenResponse(e){return Mn("not implemented")}_linkToIdToken(e,n){return Mn("not implemented")}_getReauthenticationResolver(e){return Mn("not implemented")}}/**
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
 */async function Qs(t,e){return vM(t,"POST","/v1/accounts:signInWithIdp",od(t,e))}/**
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
 */const zM="http://localhost";class ls extends Rw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ls(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):zn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=rd(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ls(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Qs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Qs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qs(e,n)}buildRequest(){const e={requestUri:zM,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Lo(n)}return e}}/**
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
 */class Sw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class qo extends Sw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ur extends qo{constructor(){super("facebook.com")}static credential(e){return ls._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.FACEBOOK_SIGN_IN_METHOD="facebook.com";ur.PROVIDER_ID="facebook.com";/**
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
 */class hr extends qo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ls._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return hr.credential(n,r)}catch{return null}}}hr.GOOGLE_SIGN_IN_METHOD="google.com";hr.PROVIDER_ID="google.com";/**
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
 */class fr extends qo{constructor(){super("github.com")}static credential(e){return ls._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.GITHUB_SIGN_IN_METHOD="github.com";fr.PROVIDER_ID="github.com";/**
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
 */class dr extends qo{constructor(){super("twitter.com")}static credential(e,n){return ls._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.TWITTER_SIGN_IN_METHOD="twitter.com";dr.PROVIDER_ID="twitter.com";/**
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
 */class hi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Vn._fromIdTokenResponse(e,r,s),o=ay(r);return new hi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ay(r);return new hi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ay(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Al extends Yn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Al.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Al(e,n,r,s)}}function Pw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Al._fromErrorAndOperation(t,i,e,r):i})}async function WM(t,e,n=!1){const r=await Ao(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return hi._forOperation(t,"link",r)}/**
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
 */async function KM(t,e,n=!1){const{auth:r}=t;if(pr(r.app))return Promise.reject(ns(r));const s="reauthenticate";try{const i=await Ao(t,Pw(r,s,e,t),n);me(i.idToken,r,"internal-error");const o=ad(i.idToken);me(o,r,"internal-error");const{sub:a}=o;return me(t.uid===a,r,"user-mismatch"),hi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&zn(r,"user-mismatch"),i}}/**
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
 */async function GM(t,e,n=!1){if(pr(t.app))return Promise.reject(ns(t));const r="signIn",s=await Pw(t,r,e),i=await hi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function QM(t,e,n,r){return Zt(t).onIdTokenChanged(e,n,r)}function YM(t,e,n){return Zt(t).beforeAuthStateChanged(e,n)}const Rl="__sak";/**
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
 */class Cw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Rl,"1"),this.storage.removeItem(Rl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const XM=1e3,JM=10;class kw extends Cw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=bw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);kM()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,JM):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},XM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}kw.type="LOCAL";const ZM=kw;/**
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
 */class xw extends Cw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}xw.type="SESSION";const Ow=xw;/**
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
 */function eV(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class dc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new dc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await eV(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}dc.receivers=[];/**
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
 */function hd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class tV{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=hd("",20);s.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const m=d;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(m.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Tn(){return window}function nV(t){Tn().location.href=t}/**
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
 */function Nw(){return typeof Tn().WorkerGlobalScope<"u"&&typeof Tn().importScripts=="function"}async function rV(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sV(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function iV(){return Nw()?self:null}/**
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
 */const Dw="firebaseLocalStorageDb",oV=1,Sl="firebaseLocalStorage",Mw="fbase_key";class zo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function pc(t,e){return t.transaction([Sl],e?"readwrite":"readonly").objectStore(Sl)}function aV(){const t=indexedDB.deleteDatabase(Dw);return new zo(t).toPromise()}function Lh(){const t=indexedDB.open(Dw,oV);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Sl,{keyPath:Mw})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Sl)?e(r):(r.close(),await aV(),e(await Lh()))})})}async function ly(t,e,n){const r=pc(t,!0).put({[Mw]:e,value:n});return new zo(r).toPromise()}async function lV(t,e){const n=pc(t,!1).get(e),r=await new zo(n).toPromise();return r===void 0?null:r.value}function cy(t,e){const n=pc(t,!0).delete(e);return new zo(n).toPromise()}const cV=800,uV=3;class Vw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>uV)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=dc._getInstance(iV()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await rV(),!this.activeServiceWorker)return;this.sender=new tV(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sV()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lh();return await ly(e,Rl,"1"),await cy(e,Rl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ly(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>lV(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=pc(s,!1).getAll();return new zo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vw.type="LOCAL";const hV=Vw;new Ho(3e4,6e4);/**
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
 */function fV(t,e){return e?Ln(e):(me(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class fd extends Rw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dV(t){return GM(t.auth,new fd(t),t.bypassAuthState)}function pV(t){const{auth:e,user:n}=t;return me(n,e,"internal-error"),KM(n,new fd(t),t.bypassAuthState)}async function mV(t){const{auth:e,user:n}=t;return me(n,e,"internal-error"),WM(n,new fd(t),t.bypassAuthState)}/**
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
 */class Lw{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dV;case"linkViaPopup":case"linkViaRedirect":return mV;case"reauthViaPopup":case"reauthViaRedirect":return pV;default:zn(this.auth,"internal-error")}}resolve(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const gV=new Ho(2e3,1e4);class Vs extends Lw{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Vs.currentPopupAction&&Vs.currentPopupAction.cancel(),Vs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return me(e,this.auth,"internal-error"),e}async onExecution(){Wn(this.filter.length===1,"Popup operations only handle one event");const e=hd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gV.get())};e()}}Vs.currentPopupAction=null;/**
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
 */const yV="pendingRedirect",$a=new Map;class _V extends Lw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=$a.get(this.auth._key());if(!e){try{const r=await vV(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}$a.set(this.auth._key(),e)}return this.bypassAuthState||$a.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vV(t,e){const n=TV(e),r=wV(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function EV(t,e){$a.set(t._key(),e)}function wV(t){return Ln(t._redirectPersistence)}function TV(t){return Ba(yV,t.config.apiKey,t.name)}async function bV(t,e,n=!1){if(pr(t.app))return Promise.reject(ns(t));const r=cd(t),s=fV(r,e),o=await new _V(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const IV=10*60*1e3;class AV{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!RV(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Fw(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(wn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=IV&&this.cachedEventUids.clear(),this.cachedEventUids.has(uy(e))}saveEventToCache(e){this.cachedEventUids.add(uy(e)),this.lastProcessedEventTime=Date.now()}}function uy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Fw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function RV(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fw(t);default:return!1}}/**
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
 */async function SV(t,e={}){return wi(t,"GET","/v1/projects",e)}/**
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
 */const PV=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,CV=/^https?/;async function kV(t){if(t.config.emulator)return;const{authorizedDomains:e}=await SV(t);for(const n of e)try{if(xV(n))return}catch{}zn(t,"unauthorized-domain")}function xV(t){const e=Mh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!CV.test(n))return!1;if(PV.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const OV=new Ho(3e4,6e4);function hy(){const t=Tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function NV(t){return new Promise((e,n)=>{var r,s,i;function o(){hy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hy(),n(wn(t,"network-request-failed"))},timeout:OV.get()})}if(!((s=(r=Tn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Tn().gapi)===null||i===void 0)&&i.load)o();else{const a=UM("iframefcb");return Tn()[a]=()=>{gapi.load?o():n(wn(t,"network-request-failed"))},LM(`${FM()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Ha=null,e})}let Ha=null;function DV(t){return Ha=Ha||NV(t),Ha}/**
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
 */const MV=new Ho(5e3,15e3),VV="__/auth/iframe",LV="emulator/auth/iframe",FV={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UV=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jV(t){const e=t.config;me(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?id(e,LV):`https://${t.config.authDomain}/${VV}`,r={apiKey:e.apiKey,appName:t.name,v:mi},s=UV.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Lo(r).slice(1)}`}async function BV(t){const e=await DV(t),n=Tn().gapi;return me(n,t,"internal-error"),e.open({where:document.body,url:jV(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FV,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=wn(t,"network-request-failed"),a=Tn().setTimeout(()=>{i(o)},MV.get());function c(){Tn().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const $V={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},HV=500,qV=600,zV="_blank",WV="http://localhost";class fy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KV(t,e,n,r=HV,s=qV){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},$V),{width:r.toString(),height:s.toString(),top:i,left:o}),u=bt().toLowerCase();n&&(a=_w(u)?zV:n),gw(u)&&(e=e||WV,c.scrollbars="yes");const h=Object.entries(c).reduce((m,[g,A])=>`${m}${g}=${A},`,"");if(CM(u)&&a!=="_self")return GV(e||"",a),new fy(null);const d=window.open(e||"",a,h);me(d,t,"popup-blocked");try{d.focus()}catch{}return new fy(d)}function GV(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const QV="__/auth/handler",YV="emulator/auth/handler",XV=encodeURIComponent("fac");async function dy(t,e,n,r,s,i){me(t.config.authDomain,t,"auth-domain-config-required"),me(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:mi,eventId:s};if(e instanceof Sw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",zk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof qo){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await t._getAppCheckToken(),u=c?`#${XV}=${encodeURIComponent(c)}`:"";return`${JV(t)}?${Lo(a).slice(1)}${u}`}function JV({config:t}){return t.emulator?id(t,YV):`https://${t.authDomain}/${QV}`}/**
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
 */const pu="webStorageSupport";class ZV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ow,this._completeRedirectFn=bV,this._overrideRedirectResult=EV}async _openPopup(e,n,r,s){var i;Wn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await dy(e,n,r,Mh(),s);return KV(e,o,hd())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await dy(e,n,r,Mh(),s);return nV(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Wn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await BV(e),r=new AV(e);return n.register("authEvent",s=>(me(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(pu,{type:pu},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[pu];o!==void 0&&n(!!o),zn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kV(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return bw()||yw()||ld()}}const eL=ZV;var py="@firebase/auth",my="1.8.1";/**
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
 */class tL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){me(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function nL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rL(t){ri(new is("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;me(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Iw(t)},u=new MM(r,s,i,c);return BM(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ri(new is("auth-internal",e=>{const n=cd(e.getProvider("auth").getImmediate());return(r=>new tL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Er(py,my,nL(t)),Er(py,my,"esm2017")}/**
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
 */const sL=5*60,iL=PE("authIdTokenMaxAge")||sL;let gy=null;const oL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>iL)return;const s=n==null?void 0:n.token;gy!==s&&(gy=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function aL(t=OE()){const e=bf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=jM(t,{popupRedirectResolver:eL,persistence:[hV,ZM,Ow]}),r=PE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=oL(i.toString());YM(n,o,()=>o(n.currentUser)),QM(n,a=>o(a))}}const s=RE("auth");return s&&$M(n,`http://${s}`),n}function lL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}VM({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=wn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",lL().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rL("Browser");const cL=un(()=>{const t=di().public.firebase,e=xE({apiKey:t.apiKey,authDomain:t.authDomain,projectId:t.projectId,storageBucket:t.storageBucket,messagingSenderId:t.messagingSenderId,appId:t.appId}),n=QD(e),r=aL(e);return{provide:{firebase:e,firestore:n,auth:r}}}),uL=[bS,AS,WP,GP,QP,YP,JP,ZP,eC,Tk,cL],hL=cs({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(t){const e=t.renderKey,n=t.route,r={};for(const s in t.route)Object.defineProperty(r,s,{get:()=>e===t.renderKey?t.route[s]:n[s],enumerable:!0});return $s(Bl,Nn(r)),()=>Ht(t.vnode,{ref:t.vnodeRef})}}),fL=cs({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:r}){const s=Ke(),i=Vt(),o=kt(Bl,null);let a;r({pageRef:i});const c=kt(pR,null);let u;const h=s.deferHydration();if(s.isHydrating){const d=s.hooks.hookOnce("app:error",h);Lt().beforeEach(d)}return t.pageKey&&yr(()=>t.pageKey,(d,m)=>{d!==m&&s.callHook("page:loading:start")}),()=>Ht(Uv,{name:t.name,route:t.route,...e},{default:d=>{const m=pL(o,d.route,d.Component),g=o&&o.matched.length===d.route.matched.length;if(!d.Component){if(u&&!g)return u;h();return}if(u&&c&&!c.isCurrent(d.route))return u;if(m&&o&&(!c||c!=null&&c.isCurrent(o)))return g?u:null;const A=Yu(d,t.pageKey);!s.isHydrating&&!mL(o,d.route,d.Component)&&a===A&&s.callHook("page:loading:end"),a=A;const x=!!(t.transition??d.route.meta.pageTransition??Vu),N=x&&dL([t.transition,d.route.meta.pageTransition,Vu,{onAfterLeave:()=>{s.callHook("page:transition:finish",d.Component)}}].filter(Boolean)),O=t.keepalive??d.route.meta.keepalive??QA;return u=MP(pI,x&&N,OP(O,Ht(k_,{suspensible:!0,onPending:()=>s.callHook("page:start",d.Component),onResolve:()=>{ko(()=>s.callHook("page:finish",d.Component).then(()=>s.callHook("page:loading:end")).finally(h))}},{default:()=>{const P=Ht(hL,{key:A||void 0,vnode:n.default?Ht(Bt,void 0,n.default(d)):d.Component,route:d.route,renderKey:A||void 0,trackRootNodes:x,vnodeRef:i});return O&&(P.type.name=d.Component.type.name||d.Component.type.__name||"RouteProvider"),P}}))).default(),u}})}});function dL(t){const e=t.map(n=>({...n,onAfterLeave:n.onAfterLeave?cf(n.onAfterLeave):void 0}));return iv(...e)}function pL(t,e,n){if(!t)return!1;const r=e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!r||r===-1?!1:e.matched.slice(0,r).some((s,i)=>{var o,a,c;return((o=s.components)==null?void 0:o.default)!==((c=(a=t.matched[i])==null?void 0:a.components)==null?void 0:c.default)})||n&&Yu({route:e,Component:n})!==Yu({route:t,Component:n})}function mL(t,e,n){return t?e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)})<e.matched.length-1:!1}const gL=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},yL={class:"navbar"},_L={class:"logo"},vL={class:"search-container"},EL={__name:"app",setup(t){gS({title:"My Amazing Site",ogTitle:"My Amazing Site",description:"This is my amazing site, let me tell you all about it.",ogDescription:"This is my amazing site, let me tell you all about it.",ogImage:"https://example.com/image.png",twitterCard:"summary_large_image"});const e=Vt(""),n=Vt(!1),r=SP(),s=()=>{e.value.trim()?r.push(`/search?query=${encodeURIComponent(e.value)}`):r.push("/search")},i=()=>{n.value=!n.value};return(o,a)=>{const c=rC,u=Tu("font-awesome-icon"),h=fL;return pn(),M_("div",null,[Ut("header",yL,[Ut("div",_L,[Ve(c,{to:"/"},{default:ks(()=>a[1]||(a[1]=[Os("Bblog(쁠로그)")])),_:1})]),Ut("div",vL,[tb(Ut("input",{"onUpdate:modelValue":a[0]||(a[0]=d=>e.value=d),type:"text",placeholder:"검색어를 입력하세요...",class:"search-input",onKeydown:UI(s,["enter"])},null,544),[[MI,e.value]])]),Ut("nav",null,[Ve(u,{class:"search",icon:"magnifying-glass",onClick:s}),Ut("button",{class:"menu-toggle",onClick:i},"메뉴"),Ut("ul",{class:Po({show:n.value})},[Ut("li",null,[Ve(c,{to:"/"},{default:ks(()=>a[2]||(a[2]=[Os("홈")])),_:1})]),Ut("li",null,[Ve(c,{to:"/page1"},{default:ks(()=>a[3]||(a[3]=[Os("하하")])),_:1})]),Ut("li",null,[Ve(c,{to:"/page2"},{default:ks(()=>a[4]||(a[4]=[Os("ㄱㄱㄱ")])),_:1})])],2)])]),Ut("main",null,[Ve(h)])])}}},wL=gL(EL,[["__scopeId","data-v-42e20886"]]),TL={__name:"nuxt-error-page",props:{error:Object},setup(t){const n=t.error;n.stack&&n.stack.split(`
`).splice(1).map(d=>({text:d.replace("webpack:/","").replace(".vue",".js").trim(),internal:d.includes("node_modules")&&!d.includes(".cache")||d.includes("internal")||d.includes("new Promise")})).map(d=>`<span class="stack${d.internal?" internal":""}">${d.text}</span>`).join(`
`);const r=Number(n.statusCode||500),s=r===404,i=n.statusMessage??(s?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),a=void 0,h=s?hp(()=>Ds(()=>import("./BjTJGypI.js"),__vite__mapDeps([10,11]),import.meta.url)):hp(()=>Ds(()=>import("./CCI6Ksk5.js"),__vite__mapDeps([12,13]),import.meta.url));return(d,m)=>(pn(),Kr($e(h),_T(L_({statusCode:$e(r),statusMessage:$e(i),description:$e(o),stack:$e(a)})),null,16))}},bL={key:0},yy={__name:"nuxt-root",setup(t){const e=()=>null,n=Ke(),r=n.deferHydration();if(n.isHydrating){const c=n.hooks.hookOnce("app:error",r);Lt().beforeEach(c)}const s=!1;$s(Bl,av()),n.hooks.callHookWith(c=>c.map(u=>u()),"vue:setup");const i=$l(),o=!1;l_((c,u,h)=>{if(n.hooks.callHook("vue:error",c,u,h).catch(d=>console.error("[nuxt] Error in `vue:error` hook",d)),_R(c)&&(c.fatal||c.unhandled))return n.runWithContext(()=>Ns(c)),!1});const a=!1;return(c,u)=>(pn(),Kr(k_,{onResolve:$e(r)},{default:ks(()=>[$e(o)?(pn(),M_("div",bL)):$e(i)?(pn(),Kr($e(TL),{key:1,error:$e(i)},null,8,["error"])):$e(a)?(pn(),Kr($e(e),{key:2,context:$e(a)},null,8,["context"])):$e(s)?(pn(),Kr(vb($e(s)),{key:3})):(pn(),Kr($e(wL),{key:4}))]),_:1},8,["onResolve"]))}};let _y;{let t;_y=async function(){var o,a;if(t)return t;const r=!!(((o=window.__NUXT__)==null?void 0:o.serverRendered)??((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?HI(yy):$I(yy),s=tR({vueApp:r});async function i(c){await s.callHook("app:error",c),s.payload.error=s.payload.error||Hl(c)}r.config.errorHandler=i,s.hook("app:suspense:resolve",()=>{r.config.errorHandler===i&&(r.config.errorHandler=void 0)});try{await sR(s,uL)}catch(c){i(c)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(JA),await s.hooks.callHook("app:mounted",r),await ko()}catch(c){i(c)}return r},t=_y().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{cs as A,OL as B,NL as C,xL as D,ML as E,Bt as F,LL as G,VL as H,tt as T,gL as _,Ut as a,Ve as b,M_ as c,Os as d,rC as e,SP as f,Dl as g,tb as h,RL as i,IL as j,Kr as k,Ke as l,SL as m,ko as n,pn as o,AL as p,GD as q,Vt as r,DL as s,wT as t,pS as u,MI as v,ks as w,Ue as x,yr as y,UI as z};
