import{l as r,A as d,B as l,C as n,D as i,E as u,G as p,q as y,I as A}from"./Cf9-CK9x.js";const q=()=>{const{$firestore:o}=r();return{getCollection:async t=>{const e=d(n(o,t),l("createdAt","desc"));return(await i(e)).docs.map(c=>{const s=c.data();return{id:c.id,...s,createdAt:s.createdAt?s.createdAt.toDate():null}})},addCollection:async(t,e)=>(await u(n(o,t),{...e,createdAt:p.fromDate(new Date)})).id,deleteCollection:async(t,e)=>{const a=y(o,t,e);await A(a)}}};export{q as u};
