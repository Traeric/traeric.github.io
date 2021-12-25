import{D as F,C as r,a as p}from"./CodePanel.fd8754fa.js";import{e as l,r as t,o as B,c as D,w as u,W as A,f as e,j as n,s as o}from"./vendor.e6d22bf6.js";import{_ as m}from"./index.a60cb413.js";import"./commonFunc.c6b8e963.js";const _={codeBase:`<template>
    <div style="width: 350px;">
        <as-simple-slider />
    </div>
</template>`,codeCustomerBackground:`<template>
    <div style="width: 350px;">
        <as-simple-slider 
        background="https://cn.bing.com/th?id=OHR.AtchafalayaMoss_ZH-CN6079994094_1920x1080.jpg&rf=LaDigue_1920x1080.jpg" 
        tips="\u901A\u8FC7\u81EA\u5B9A\u4E49\u6587\u5B57\uFF0C\u53EF\u6539\u53D8\u6ED1\u5757\u7684\u6ED1\u52A8\u7684\u63D0\u793A" />
    </div>
</template>`,codeSuccess:`<template>
    <div class="wrap" style="width: 350px;">
        <as-simple-slider :success="success" />
    </div>
</template>

<script lang="ts" setup>
    import {AsMessage} from "awesome-slider-auth";

    function success() {
        AsMessage({
            message: "\u8BA4\u8BC1\u6210\u529F",
            type: "success"
        });
    }
<\/script>`},h={propsTableHeader:["\u5C5E\u6027","\u8BF4\u660E","\u7C7B\u578B","\u9ED8\u8BA4\u503C","\u53EF\u9009\u503C"],propsTable:[{props:"background",describe:"\u6ED1\u5757\u80CC\u666F",type:"String"},{props:"tips",describe:"\u6ED1\u52A8\u533A\u57DF\u63D0\u793A\u5B57",type:"String",defaultValue:"\u5411\u53F3\u6ED1\u52A8\u6ED1\u5757\uFF0C\u5B8C\u6210\u8BA4\u8BC1"},{props:"errorRange",describe:"\u6ED1\u5757\u8DDD\u79BB\u6700\u540E\u7684\u8DDD\u79BB\uFF0C\u5728\u8BE5\u8303\u56F4\u90FD\u8BA4\u4E3A\u8BA4\u8BC1\u6210\u529F",type:"Number",defaultValue:"5"}],eventsTableHeader:["\u4E8B\u4EF6\u540D	","\u8BF4\u660E","\u8FD4\u56DE\u503C","\u53C2\u6570"],eventsTable:[{event:"success",describe:"\u6ED1\u5757\u8BA4\u8BC1\u6210\u529F\u89E6\u53D1"}]},f=l({setup(){return{tableList:h,codeList:_,success:()=>{A({message:"\u8BA4\u8BC1\u6210\u529F",type:"success"})}}},components:{Document:F,CodeGather:r,CodePanel:p}}),b=o(" \u6ED1\u52A8\u6ED1\u5757\u8BA4\u8BC1 "),g=o(" \u5F53\u70B9\u51FB\u767B\u5F55\u6216\u6CE8\u518C\u65F6\uFF0C\u901A\u8FC7\u5C06\u6ED1\u5757\u6ED1\u52A8\u5230\u6700\u53F3\u8FB9\u5B8C\u6210\u8BA4\u8BC1\u3002 "),v=o(" \u5728\u9700\u8981\u7528\u5230\u8BA4\u8BC1\u6ED1\u5757\u7684\u5730\u65B9\u6DFB\u52A0\u6ED1\u5757\u6807\u7B7E\u5373\u53EF\uFF0C\u6ED1\u5757\u7684\u5BBD\u5EA6\u53EF\u81EA\u9002\u5E94\u7236\u7EA7\u6807\u7B7E\u3002 "),y={style:{width:"350px"}},w=o(" \u5728\u7528\u6237\u8BA4\u8BC1\u6210\u529F\u540E\u9700\u8981\u89E6\u53D1\u56DE\u8C03\u51FD\u6570\u8FDB\u884C\u6210\u529F\u540E\u7684\u64CD\u4F5C\uFF0C\u6A21\u5757\u63D0\u4F9B\u4E86success\u5C5E\u6027\u6765\u6267\u884C\u8BA4\u8BC1\u6210\u529F\u540E\u7684\u56DE\u8C03\u3002 "),x={style:{width:"350px"}},j={style:{width:"350px"}};function k(s,L,H,N,T,V){const c=t("as-simple-slider"),a=t("CodePanel"),i=t("n-timeline-item"),d=t("n-timeline"),E=t("CodeGather"),C=t("Document");return B(),D(C,{"table-list":s.tableList},{title:u(()=>[b]),describe:u(()=>[g]),content:u(()=>[e(E,null,{left:u(()=>[e(a,{title:"\u57FA\u7840\u7528\u6CD5",id:"base",code:s.codeList.codeBase},{default:u(()=>[v]),show:u(()=>[n("div",y,[e(c)])]),_:1},8,["code"]),e(a,{title:"\u8BA4\u8BC1\u6210\u529F",id:"success",code:s.codeList.codeSuccess},{default:u(()=>[w]),show:u(()=>[n("div",x,[e(c,{success:s.success},null,8,["success"])])]),_:1},8,["code"])]),right:u(()=>[e(a,{title:"\u81EA\u5B9A\u4E49\u80CC\u666F\u56FE\u7247\u4EE5\u53CA\u6ED1\u52A8\u63D0\u793A",id:"customer-background",code:s.codeList.codeCustomerBackground},{default:u(()=>[e(d,null,{default:u(()=>[e(i,{type:"success",content:"\u6ED1\u5757\u7684\u80CC\u666F\u6709\u4E00\u4E2A\u9ED8\u8BA4\u503C\uFF0C\u5982\u679C\u4E0D\u60F3\u4F7F\u7528\u8BE5\u9ED8\u8BA4\u503C\u53EF\u4EE5\u81EA\u5DF1\u66FF\u6362\uFF0C\u901A\u8FC7background\u5C5E\u6027\u5373\u53EF\u5B8C\u6210\u3002"}),e(i,{type:"success",content:"\u6ED1\u5757\u6ED1\u52A8\u7684\u63D0\u793A\u6587\u5B57\u4E5F\u53EF\u4EE5\u901A\u8FC7tips\u5C5E\u6027\u8FDB\u884C\u66F4\u6539\u3002"})]),_:1})]),show:u(()=>[n("div",j,[e(c,{background:"https://cn.bing.com/th?id=OHR.AtchafalayaMoss_ZH-CN6079994094_1920x1080.jpg&rf=LaDigue_1920x1080.jpg",tips:"\u901A\u8FC7\u81EA\u5B9A\u4E49\u6587\u5B57\uFF0C\u53EF\u6539\u53D8\u6ED1\u5757\u7684\u6ED1\u52A8\u7684\u63D0\u793A"})])]),_:1},8,["code"])]),_:1})]),_:1},8,["table-list"])}var G=m(f,[["render",k]]);export{G as default};
