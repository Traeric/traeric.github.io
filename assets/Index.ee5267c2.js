import{D as a,C as c,a as E}from"./CodePanel.e2d0612f.js";import{_ as F}from"./index.54500873.js";import{e as f,g as _,r as p,o as C,c as m,w as e,f as t,j as u,s as o}from"./vendor.e6d22bf6.js";import"./commonFunc.c6b8e963.js";const h={codeBase:`<template>
    <as-top />
</template>`,codeListenTarget:`<template>
    <h3>\u4F20\u5165ref\u5BF9\u8C61:</h3>
    <div style="height: 50px; border: 1px solid #eee; overflow: auto; padding-left: 10px"
        ref="topRef">
        <p>\u4F20\u5165ref\u5BF9\u8C61</p>
        <p>\u4F20\u5165ref\u5BF9\u8C61</p>
        <p>\u4F20\u5165ref\u5BF9\u8C61</p>
        <p>\u4F20\u5165ref\u5BF9\u8C61</p>
        <p>\u4F20\u5165ref\u5BF9\u8C61</p>
        <p>\u4F20\u5165ref\u5BF9\u8C61</p>
        <p>\u4F20\u5165ref\u5BF9\u8C61</p>
        <p>\u4F20\u5165ref\u5BF9\u8C61</p>
    </div>
    <as-top :listen-element="topRef" bottom="32rem" />
    <h3>\u4F20\u5165\u7C7B\u540D:</h3>
    <div class="top-ref"
        style="height: 50px; border: 1px solid #eee; overflow: auto; padding-left: 10px">
        <p>\u4F20\u5165\u7C7B\u540D</p>
        <p>\u4F20\u5165\u7C7B\u540D</p>
        <p>\u4F20\u5165\u7C7B\u540D</p>
        <p>\u4F20\u5165\u7C7B\u540D</p>
        <p>\u4F20\u5165\u7C7B\u540D</p>
        <p>\u4F20\u5165\u7C7B\u540D</p>
        <p>\u4F20\u5165\u7C7B\u540D</p>
        <p>\u4F20\u5165\u7C7B\u540D</p>
    </div>
    <as-top listen-element=".top-ref" bottom="28rem" />
</template>
<script setup lang="ts">
    import {AsMessage} from "awesome-slider-auth";

    let topRef = ref(null);
<\/script>`,codeCustomer:`<template>
    <div style="height: 50px; border: 1px solid #eee; overflow: auto; padding-left: 10px"
    class="customer-content">
    <p>\u81EA\u5B9A\u4E49\u5185\u5BB9</p>
    <p>\u81EA\u5B9A\u4E49\u5185\u5BB9</p>
    <p>\u81EA\u5B9A\u4E49\u5185\u5BB9</p>
    <p>\u81EA\u5B9A\u4E49\u5185\u5BB9</p>
    <p>\u81EA\u5B9A\u4E49\u5185\u5BB9</p>
    <p>\u81EA\u5B9A\u4E49\u5185\u5BB9</p>
    <p>\u81EA\u5B9A\u4E49\u5185\u5BB9</p>
    <p>\u81EA\u5B9A\u4E49\u5185\u5BB9</p>
    </div>
    <as-top bottom="20rem" listen-element=".customer-content">
    <div
        style="
            height: 50px;
            width: 50px;
            background-color: #f2f5f6;
            box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
            text-align: center;
            line-height: 50px;
            color: #1989fa;
        "
    >
        UP
    </div>
    </as-top>
</template>`},D={propsTableHeader:["\u5C5E\u6027","\u8BF4\u660E","\u7C7B\u578B","\u9ED8\u8BA4\u503C","\u53EF\u9009\u503C"],propsTable:[{props:"bottom",describe:"\u7EC4\u4EF6\u8DDD\u79BB\u9875\u9762\u5E95\u90E8\u8DDD\u79BB",type:"Number | String",defaultValue:"50px"},{props:"right",describe:"\u7EC4\u4EF6\u8DDD\u79BB\u9875\u9762\u53F3\u90E8\u8DDD\u79BB",type:"Number | String",defaultValue:"50px"},{props:"visibility-height",describe:"\u9875\u9762\u6ED1\u52A8\u5230\u6307\u5B9A\u8DDD\u79BB\u663E\u793A\u7EC4\u4EF6		",type:"Number",defaultValue:"200"},{props:"listen-element",describe:"\u7EC4\u4EF6\u76D1\u542C\u7684\u5BF9\u8C61",type:"Strig | HTMLDocument | Document",defaultValue:"document"}]},A=f({setup(){let s=_(null);return{tableList:D,codeList:h,topRef:s}},components:{Document:a,CodeGather:c,CodePanel:E}}),b=o(" \u56DE\u5230\u9876\u90E8 "),g=o(" \u8BE5\u7EC4\u4EF6\u5E38\u7528\u4E8E\u5F53\u9875\u9762\u6BD4\u8F83\u957F\u65F6\u56DE\u5230\u9876\u90E8\u3002 "),x=o(" \u5F53\u9875\u9762\u6ED1\u52A8\u5230\u4E00\u5B9A\u4F4D\u7F6E\u51FA\u73B0\u3002 "),v=o("\u5411\u4E0B\u6EDA\u52A8\u9875\u9762\u51FA\u73B0\u56DE\u5230\u9876\u90E8\u7EC4\u4EF6\u3002"),w=o(" as-top\u5185\u7F6E\u4E86\u63D2\u69FD\uFF0C\u9664\u4E86\u4F7F\u7528\u9ED8\u8BA4\u5185\u5BB9\u8FD8\u53EF\u4EE5\u9009\u62E9\u81EA\u5B9A\u4E49\u3002 "),y=u("div",{style:{height:"50px",border:"1px solid #eee",overflow:"auto","padding-left":"10px"},class:"customer-content"},[u("p",null,"\u81EA\u5B9A\u4E49\u5185\u5BB9"),u("p",null,"\u81EA\u5B9A\u4E49\u5185\u5BB9"),u("p",null,"\u81EA\u5B9A\u4E49\u5185\u5BB9"),u("p",null,"\u81EA\u5B9A\u4E49\u5185\u5BB9"),u("p",null,"\u81EA\u5B9A\u4E49\u5185\u5BB9"),u("p",null,"\u81EA\u5B9A\u4E49\u5185\u5BB9"),u("p",null,"\u81EA\u5B9A\u4E49\u5185\u5BB9"),u("p",null,"\u81EA\u5B9A\u4E49\u5185\u5BB9")],-1),L=u("div",{style:{height:"50px",width:"50px","background-color":"#f2f5f6","box-shadow":"0 0 6px rgba(0, 0, 0, 0.12)","text-align":"center","line-height":"50px",color:"#1989fa"}}," UP ",-1),V=o(" \u8BE5\u7EC4\u4EF6\u9ED8\u8BA4\u76D1\u542Cdocument\u7684\u6EDA\u52A8\uFF0C\u4F46\u662F\u4E5F\u53EF\u4EE5\u76D1\u542C\u5176\u4ED6dom\u5143\u7D20\u7684\u6EDA\u52A8\uFF0C\u53EA\u9700\u8981\u5C06\u8981\u76D1\u542C\u7684dom\u5143\u7D20\u8BBE\u7F6E\u7ED9"),N=o("listen-element"),P=o("\u5373\u53EF "),R=u("h3",null,"\u4F20\u5165ref\u5BF9\u8C61:",-1),T={style:{height:"50px",border:"1px solid #eee",overflow:"auto","padding-left":"10px"},ref:"topRef"},j=u("p",null,"\u4F20\u5165ref\u5BF9\u8C61",-1),k=u("p",null,"\u4F20\u5165ref\u5BF9\u8C61",-1),$=u("p",null,"\u4F20\u5165ref\u5BF9\u8C61",-1),G=u("p",null,"\u4F20\u5165ref\u5BF9\u8C61",-1),S=u("p",null,"\u4F20\u5165ref\u5BF9\u8C61",-1),H=u("p",null,"\u4F20\u5165ref\u5BF9\u8C61",-1),M=u("p",null,"\u4F20\u5165ref\u5BF9\u8C61",-1),U=u("p",null,"\u4F20\u5165ref\u5BF9\u8C61",-1),z=[j,k,$,G,S,H,M,U],I=u("h3",null,"\u4F20\u5165\u7C7B\u540D:",-1),q=u("div",{class:"top-ref",style:{height:"50px",border:"1px solid #eee",overflow:"auto","padding-left":"10px"}},[u("p",null,"\u4F20\u5165\u7C7B\u540D"),u("p",null,"\u4F20\u5165\u7C7B\u540D"),u("p",null,"\u4F20\u5165\u7C7B\u540D"),u("p",null,"\u4F20\u5165\u7C7B\u540D"),u("p",null,"\u4F20\u5165\u7C7B\u540D"),u("p",null,"\u4F20\u5165\u7C7B\u540D"),u("p",null,"\u4F20\u5165\u7C7B\u540D"),u("p",null,"\u4F20\u5165\u7C7B\u540D")],-1);function J(s,K,O,Q,W,X){const d=p("n-tag"),n=p("as-top"),l=p("CodePanel"),r=p("n-button"),i=p("CodeGather"),B=p("Document");return C(),m(B,{"table-list":s.tableList},{title:e(()=>[b]),describe:e(()=>[g]),content:e(()=>[t(i,null,{left:e(()=>[t(l,{title:"\u57FA\u7840\u7528\u6CD5",id:"base",code:s.codeList.codeBase},{default:e(()=>[x]),show:e(()=>[t(d,{type:"success"},{default:e(()=>[v]),_:1}),t(n)]),_:1},8,["code"]),t(l,{title:"\u81EA\u5B9A\u4E49\u5185\u5BB9",id:"customer",code:s.codeList.codeCustomer},{default:e(()=>[w]),show:e(()=>[y,t(n,{bottom:"20rem","listen-element":".customer-content"},{default:e(()=>[L]),_:1})]),_:1},8,["code"])]),right:e(()=>[t(l,{title:"\u4FEE\u6539\u76D1\u542C\u76EE\u6807",id:"listening-target",code:s.codeList.codeListenTarget},{default:e(()=>[V,t(r,{size:"tiny",secondary:"",strong:""},{default:e(()=>[N]),_:1}),P]),show:e(()=>[R,u("div",T,z,512),t(n,{"listen-element":s.topRef,bottom:"32rem"},null,8,["listen-element"]),I,q,t(n,{"listen-element":".top-ref",bottom:"28rem"})]),_:1},8,["code"])]),_:1})]),_:1},8,["table-list"])}var tu=F(A,[["render",J]]);export{tu as default};
