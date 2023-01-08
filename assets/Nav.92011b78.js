import{_ as m}from"./index.600d3626.js";import{e as l,o as _,c as d,f as t,h as x,j as g,r as s,a as e,w as c,g as B,t as b,z as f,A as w}from"./vendor.7605f6f8.js";const D={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"},k=t("g",{fill:"none"},[t("path",{d:"M4 29a1 1 0 1 1 0-2h24a1 1 0 1 1 0 2H4zm1-7.5A3.5 3.5 0 0 0 8.5 25h3a3.5 3.5 0 0 0 3.5-3.5v-15A3.5 3.5 0 0 0 11.5 3h-3A3.5 3.5 0 0 0 5 6.5v15zm12 0a3.5 3.5 0 0 0 3.5 3.5h3a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 23.5 9h-3a3.5 3.5 0 0 0-3.5 3.5v9z",fill:"currentColor"})],-1),A=[k];var I=l({name:"AlignBottom32Filled",render:function(o,n){return _(),d("svg",D,A)}});const N={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},V=t("g",{fill:"none"},[t("path",{d:"M23 6.5a5.5 5.5 0 1 0-11 0a5.5 5.5 0 0 0 11 0zM18 7v2.504a.5.5 0 1 1-1 0V7h-2.505a.5.5 0 0 1 0-1H17V3.5a.5.5 0 0 1 1 0V6h2.496a.5.5 0 0 1 0 1H18zm-.5 12.782V13a6.52 6.52 0 0 0 1.5-.174v8.42a.75.75 0 0 1-1.188.608l-5.81-4.181l-5.812 4.18a.75.75 0 0 1-1.188-.608V6.25A3.25 3.25 0 0 1 8.252 3h3.77a6.468 6.468 0 0 0-.709 1.5H8.252a1.75 1.75 0 0 0-1.75 1.75v13.533l5.061-3.642a.75.75 0 0 1 .876 0l5.061 3.642z",fill:"currentColor"})],-1),$=[V];var F=l({name:"BookmarkAdd24Regular",render:function(o,n){return _(),d("svg",N,$)}}),C="/assets/logo.03d6d6da.png",E="/assets/github.4f27743b.svg";const z=l({setup(){let a=x(""),o=g(()=>["\u6D4B\u8BD5\u6D4B\u8BD51","\u6D4B\u8BD5\u6D4B\u8BD52","\u6D4B\u8BD5\u6D4B\u8BD53","\u6D4B\u8BD5\u6D4B\u8BD54"].filter(n=>n.indexOf(a.value)!==-1).map(n=>({label:n,value:n})));return document.title="xinxin-ui | \u9996\u9875",{searchValue:a,options:o,appName:{}.VITE_APP_TITLE}},components:{BookmarkAdd24Regular:F,AlignBottom32Filled:I}}),r=a=>(f("data-v-d9c4bbd8"),a=a(),w(),a),H={class:"xinxin-nav"},M={class:"xinxin-nav__logo"},R=r(()=>t("img",{src:C,alt:"XINXIN-UI",class:"xinxin-nav__logo__img"},null,-1)),S={class:"xinxin-nav__logo__text"},y={class:"xinxin-nav__nav"},G={class:"xinxin-nav__nav__list"},O={class:"xinxin-nav__nav__list__icon"},T=r(()=>t("div",{class:"xinxin-nav__nav__list__text"},"\u4E0B\u8F7D\u4F7F\u7528",-1)),X={class:"xinxin-nav__nav__list__icon"},j=r(()=>t("span",{class:"xinxin-nav__nav__list__text"},"\u7EC4\u4EF6",-1)),U=B('<li data-v-d9c4bbd8><a href="https://github.com/XINXIN-UI-ORG/xinxin-ui" target="_blank" data-v-d9c4bbd8><img src="'+E+'" alt="NO IMG" data-v-d9c4bbd8> GitHub </a></li><li data-v-d9c4bbd8><a href="https://github.com/Traeric" target="_blank" data-v-d9c4bbd8><img src="https://avatars.githubusercontent.com/u/34062997?s=40&amp;v=4" alt="NO IMG" data-v-d9c4bbd8> Author </a></li><li class="version" data-v-d9c4bbd8> Version: 1.0.0 </li>',3);function P(a,o,n,L,q,J){const i=s("router-link"),u=s("n-auto-complete"),v=s("BookmarkAdd24Regular"),p=s("AlignBottom32Filled");return _(),d("div",H,[t("div",M,[e(i,{class:"xinxin-nav__logo__a",to:{name:"homepage"}},{default:c(()=>[R,t("div",S,b(a.appName),1)]),_:1})]),t("div",y,[t("ul",G,[t("li",null,[e(u,{value:a.searchValue,"onUpdate:value":o[0]||(o[0]=h=>a.searchValue=h),options:a.options,placeholder:"\u641C\u7D22\u7EC4\u4EF6",style:{width:"260px"}},null,8,["value","options"])]),t("li",null,[e(i,{"active-class":"active",to:{name:"install"}},{default:c(()=>[t("div",O,[e(v)]),T]),_:1})]),t("li",null,[e(i,{"active-class":"active",to:{name:"component"}},{default:c(()=>[t("div",X,[e(p)]),j]),_:1})]),U])])])}var W=m(z,[["render",P],["__scopeId","data-v-d9c4bbd8"]]);export{W as default};