import{_ as u}from"./index.600d3626.js";import{e as r,o as n,c as l,f as t,h as p,r as v,a as c,b as _,d as m,w as d,K as g}from"./vendor.7605f6f8.js";const h={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},f=t("g",{fill:"none"},[t("path",{d:"M12.353 15.854a.5.5 0 0 1-.707.001L6.162 10.39a.55.55 0 0 1 0-.78l5.484-5.464a.5.5 0 1 1 .706.708L7.188 10l5.164 5.147a.5.5 0 0 1 .001.707z",fill:"currentColor"})],-1),w=[f];var x=r({name:"ChevronLeft20Regular",render:function(o,i){return n(),l("svg",h,w)}});const C={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},R=t("g",{fill:"none"},[t("path",{d:"M7.646 4.147a.5.5 0 0 1 .707-.001l5.484 5.465a.55.55 0 0 1 0 .779l-5.484 5.465a.5.5 0 0 1-.706-.708L12.812 10L7.647 4.854a.5.5 0 0 1-.001-.707z",fill:"currentColor"})],-1),L=[R];var $=r({name:"ChevronRight20Regular",render:function(o,i){return n(),l("svg",C,L)}});const k=r({setup(){let e=p(!0),o=p();return{toggle:e,menuRef:o,toogleUp(){e.value=!e.value,e.value?o.value.classList.remove("active"):o.value.classList.add("active")}}},components:{ChevronRight20Regular:$,ChevronLeft20Regular:x}}),B={class:"component"},y={class:"component__menu",ref:"menuRef"};function M(e,o,i,U,j,z){const s=v("router-view");return n(),l("div",B,[t("div",y,[c(s,{name:"componentMenu",class:"component__menu__component"}),t("div",{class:"component__menu__toogle",onClick:o[0]||(o[0]=(...a)=>e.toogleUp&&e.toogleUp(...a))},[(n(),_(m(e.toggle?"ChevronLeft20Regular":"ChevronRight20Regular")))])],512),c(s,{class:"component__content"},{default:d(({Component:a})=>[(n(),_(g,{max:10},[(n(),_(m(a)))],1024))]),_:1}),c(s,{name:"componentAction",class:"component__action"})])}var N=u(k,[["render",M],["__scopeId","data-v-4e2c0790"]]);export{N as default};