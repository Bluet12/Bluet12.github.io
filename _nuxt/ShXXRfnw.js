import{_ as y,r as o,f as g,m as x,c as d,a as t,i,v as p,j as V,d as m,b as N,w as U,t as c,p as q,o as v}from"./CZumFkVr.js";import{u as B}from"./SMci92GT.js";const C={class:"signup"},D={key:0,class:"error"},M={__name:"signup",setup(S){const r=o(""),l=o(""),u=o(""),a=o(""),{signup:f}=B(),w=g(),b=async()=>{a.value="";try{await f(r.value,l.value,u.value)&&w.push("/login")}catch(n){switch(n.code){case"auth/invalid-email":a.value="이메일을 바르게 입력해주세요.";break;case"auth/weak-password":a.value="비밀번호가 너무 약합니다.";break;case"auth/email-already-in-use":a.value="이미 등록된 이메일입니다.";break;default:a.value="회원가입에 실패했습니다. 다시 시도해주세요.";break}}};return(n,e)=>{const k=x("router-link");return v(),d("div",C,[e[9]||(e[9]=t("h2",null,"회원가입",-1)),t("form",{onSubmit:V(b,["prevent"])},[e[3]||(e[3]=t("label",{for:"name"},"이름",-1)),i(t("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>u.value=s),id:"name",type:"text",placeholder:"이름을 입력하세요",required:""},null,512),[[p,u.value]]),e[4]||(e[4]=t("label",{for:"email"},"이메일",-1)),i(t("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>r.value=s),id:"email",type:"email",placeholder:"이메일을 입력하세요",required:""},null,512),[[p,r.value]]),e[5]||(e[5]=t("label",{for:"password"},"비밀번호",-1)),i(t("input",{"onUpdate:modelValue":e[2]||(e[2]=s=>l.value=s),id:"password",type:"password",placeholder:"비밀번호를 입력하세요",required:""},null,512),[[p,l.value]]),e[6]||(e[6]=t("button",{type:"submit"},"회원가입",-1))],32),t("p",null,[e[8]||(e[8]=m("이미 계정이 있나요? ")),N(k,{to:"/login"},{default:U(()=>e[7]||(e[7]=[m("로그인")])),_:1})]),a.value?(v(),d("p",D,c(a.value),1)):q("",!0)])}}},E=y(M,[["__scopeId","data-v-4e84036c"]]);export{E as default};
