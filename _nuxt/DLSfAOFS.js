import{_ as w,r as n,f as y,m as c,c as i,a as o,i as u,v as d,j as b,d as p,b as x,w as N,t as S,p as V,o as m}from"./CZumFkVr.js";import{u as k}from"./SMci92GT.js";const I={class:"login"},_={key:0,class:"error"},B={__name:"login",setup(C){const s=n(""),l=n(""),a=n(""),{login:v}=k();y();const f=async()=>{a.value="";try{const t=await v(s.value,l.value);if(t){const e={uid:t.uid,email:s.value,name:t.displayName};localStorage.setItem("Login",JSON.stringify(e)),localStorage.getItem("Login")&&(window.location.reload(),localStorage.setItem("reload","true"))}}catch{a.value="이메일과 비밀번호를 다시 확인해주세요"}};return(t,e)=>{const g=c("router-link");return m(),i("div",I,[e[7]||(e[7]=o("h2",null,"로그인",-1)),o("form",{onSubmit:b(f,["prevent"])},[e[2]||(e[2]=o("label",{for:"email"},"이메일",-1)),u(o("input",{"onUpdate:modelValue":e[0]||(e[0]=r=>s.value=r),id:"email",type:"email",placeholder:"이메일을 입력하세요",required:""},null,512),[[d,s.value]]),e[3]||(e[3]=o("label",{for:"password"},"비밀번호",-1)),u(o("input",{"onUpdate:modelValue":e[1]||(e[1]=r=>l.value=r),id:"password",type:"password",placeholder:"비밀번호를 입력하세요",required:""},null,512),[[d,l.value]]),e[4]||(e[4]=o("button",{type:"submit"},"로그인",-1))],32),o("p",null,[e[6]||(e[6]=p("계정이 없나요? ")),x(g,{to:"/signup"},{default:N(()=>e[5]||(e[5]=[p("회원가입")])),_:1})]),a.value?(m(),i("p",_,S(a.value),1)):V("",!0)])}}},D=w(B,[["__scopeId","data-v-7efda69c"]]);export{D as default};
