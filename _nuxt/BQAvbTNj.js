import{_ as w,r as x,c as a,a as o,F as g,i as $,b as y,w as k,e as C,o as l,t as f,d as D}from"./BHjHAtGH.js";import{u as b}from"./DsQ3jmjb.js";const A={setup(){const{getCollection:p,deleteCollection:s}=b(),d=x([]),n=t=>{if(!t)return"";const e=t?new Date(t.seconds*1e3):null,u=new Date-e,r=Math.floor(u/1e3),c=Math.floor(r/60),_=Math.floor(c/60),v=Math.floor(_/24);return v>0?`${v}일 전`:_>0?`${_}시간 전`:c>0?`${c}분 전`:`${r}초 전`},i=async()=>{try{const t=await p("posts");d.value=t.map(e=>({...e,createdAt:e.createdAt?e.createdAt.toDate():null}))}catch(t){console.error("게시물 로딩 오류:",t)}},h=async t=>{try{await s("posts",t),alert("게시물이 삭제되었습니다!"),i()}catch(e){alert("게시물 삭제 실패"),console.error(e)}};return i(),{posts:d,deletePost:h,timeAgo:n}}},M={class:"container"},N={class:"posts-list"},B={key:0,class:"no-posts"},F={key:1,class:"posts-container"},P={class:"post-header"},V=["onClick"];function L(p,s,d,n,i,h){const t=C;return l(),a("div",M,[o("div",N,[s[1]||(s[1]=o("h2",null,"게시물 목록",-1)),n.posts.length===0?(l(),a("div",B,s[0]||(s[0]=[o("p",null,"게시물이 없습니다.",-1)]))):(l(),a("div",F,[(l(!0),a(g,null,$(n.posts,({id:e,title:m,content:u,createdAt:r})=>(l(),a("div",{class:"post-card",key:e},[o("div",P,[y(t,{to:`/posts/${e}`},{default:k(()=>[o("h3",null,f(m),1)]),_:2},1032,["to"]),o("small",null," 작성일: "+f(r?n.timeAgo(r):"알 수 없음"),1)]),o("p",null,f(u),1),o("button",{class:"delete-btn",onClick:c=>n.deletePost(e)},"삭제",8,V)]))),128))]))]),y(t,{class:"create-btn",to:"/create"},{default:k(()=>s[2]||(s[2]=[D("게시물 작성")])),_:1})])}const S=w(A,[["render",L],["__scopeId","data-v-18c9d27a"]]);export{S as default};
