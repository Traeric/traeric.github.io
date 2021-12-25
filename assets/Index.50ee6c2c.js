import{D as f,C as A,a as y}from"./CodePanel.fd8754fa.js";import{e as k,r as l,o as h,c as b,w as e,W as o,I as g,f as u,s}from"./vendor.e6d22bf6.js";import{_ as B}from"./index.a60cb413.js";import"./commonFunc.c6b8e963.js";const M={codeBase:`<template>
    <as-button type="primary" @click="messageTip">Message\u63D0\u793A\u57FA\u7840\u7528\u6CD5</as-button>
    <as-button type="positive" @click="messageVNode">VNode\u6D88\u606F\u57FA\u7840\u7528\u6CD5</as-button>
</template>
<script setup lang="ts">
    import {AsMessage} from "awesome-slider-auth";
    import { h } from "vue";
    
    function messageTip() {
        AsMessage("Message\u63D0\u793A\u57FA\u7840\u7528\u6CD5");
    }

    function messageVNode() {
        AsMessage(h('p', null, [
            h('span', null, 'Message\u6D88\u606F\u652F\u6301'),
            h('i', { style: 'color:teal' }, 'VNode'),
        ]) as any);
    }
<\/script>`,codeStyle:`<template>
    <div class="as-row">
        <as-button type="primary" @click="messageInfo">Info\u6D88\u606F</as-button>
        <as-button type="positive" @click="messageSuccess">Success\u6D88\u606F</as-button>
        <as-button type="warning" @click="messageWarn">Warn\u6D88\u606F</as-button>
        <as-button type="negative" @click="messageError">Error\u6D88\u606F</as-button>
    </div>
    <div class="as-row">
        <as-button type="primary" plain @click="messageElementInfo">eleemnt Info</as-button>
        <as-button type="positive" plain @click="messageElementSuccess">element Success</as-button>
        <as-button type="warning" plain @click="messageElementWarn">element Warn</as-button>
        <as-button type="negative" plain @click="messageElementError">element Error</as-button>
    </div>
</template>
<script setup lang="ts">
    import {AsMessage} from "awesome-slider-auth";
    
    let messageInfo = () => {
        AsMessage({
            message: "Info\u63D0\u793A\u57FA\u7840\u7528\u6CD5",
            type: "info"
        });
    }

    let messageSuccess = () => {
        AsMessage({
            message: "Success\u63D0\u793A\u57FA\u7840\u7528\u6CD5",
            type: "success"
        });
    }

    let messageWarn = () => {
        AsMessage({
            message: "Warn\u63D0\u793A\u57FA\u7840\u7528\u6CD5",
            type: "warn"
        });
    }

    let messageError = () => {
        AsMessage({
            message: "Error\u63D0\u793A\u57FA\u7840\u7528\u6CD5",
            type: "error"
        });
    }

    let messageElementInfo = () => {
        AsMessage({
            message: "Info\u63D0\u793A\u57FA\u7840\u7528\u6CD5",
            type: "info",
            elementLike: true,
        });
    }

    let messageElementSuccess= () => {
        AsMessage({
            message: "Success\u63D0\u793A\u57FA\u7840\u7528\u6CD5",
            type: "success",
            elementLike: true
        });
    }

    let messageElementWarn = () => {
        AsMessage({
            message: "Warn\u63D0\u793A\u57FA\u7840\u7528\u6CD5",
            type: "warn",
            elementLike: true
        });
    }

    let messageElementError= () => {
        AsMessage({
            message: "Error\u63D0\u793A\u57FA\u7840\u7528\u6CD5",
            type: "error",
            elementLike: true
        });
    }
<\/script>`,codeColorful:`<template>
    <as-button type="warning" @click="messageTipElement">Message\u6D88\u606F\u57FA\u7840\u7528\u6CD5</as-button>
    <as-button type="negative" @click="messageVNodeElement">VNode\u6D88\u606F\u57FA\u7840\u7528\u6CD5</as-button>
</template>
<script setup lang="ts">
    import {AsMessage} from "awesome-slider-auth";
    
    let messageTipElement = () => {
        AsMessage({
            message: "Message\u63D0\u793A\u57FA\u7840\u7528\u6CD5",
            elementLike: true
        });
    }

    let messageVNodeElement = () => {
        AsMessage({
            message: h('p', null, [
                h('span', null, 'Message\u6D88\u606F\u652F\u6301'),
                h('i', { style: 'color:teal' }, 'VNode'),
            ]),
            elementLike: true
        });
    }
<\/script>`,codeCloseFunc:`<template>
    <as-button type="primary" @click="messageDuration">\u8BBE\u7F6E\u5173\u95ED\u65F6\u95F4</as-button>
    <as-button type="positive" @click="messageClose">\u5173\u95ED\u65F6\u89E6\u53D1\u56DE\u8C03</as-button>
</template>
<script setup lang="ts">
    import {AsMessage} from "awesome-slider-auth";
    
    let messageDuration = () => {
        AsMessage({
            message: "\u8BBE\u7F6E\u5173\u95ED\u65F6\u95F4\u4E3A1\u79D2",
            duration: 1000
        });
    }
    let messageClose = () => {
        AsMessage({
            message: '\u89E6\u53D1\u5173\u95ED\u56DE\u8C03',
            duration: 3000,
            onClose: () => {
                AsMessage("\u5173\u95ED\u56DE\u8C03\u89E6\u53D1\u6210\u529F!");
            }
        });
    }
<\/script>`},v={propsTableHeader:["\u5C5E\u6027","\u8BF4\u660E","\u7C7B\u578B","\u9ED8\u8BA4\u503C","\u53EF\u9009\u503C"],propsTable:[{props:"message",describe:"\u6D88\u606F\u5185\u5BB9",type:"String"},{props:"type",describe:"\u6D88\u606F\u7C7B\u578B",type:"String",defaultValue:"success",selectList:["info","success","warn","error"]},{props:"offset",describe:"\u6D88\u606F\u79BB\u9876\u90E8\u7684\u8DDD\u79BB	",type:"Number",defaultValue:"20"},{props:"duration",describe:"\u6D88\u606F\u5C55\u793A\u65F6\u95F4",type:"Number",defaultValue:"3000"},{props:"elementLike",describe:"\u662F\u5426\u4F7F\u7528element\u98CE\u683C	",type:"Boolean",defaultValue:"false",selectList:["true","false"]}],eventsTableHeader:["\u4E8B\u4EF6\u540D	","\u8BF4\u660E","\u8FD4\u56DE\u503C","\u53C2\u6570"],eventsTable:[{event:"onClose",describe:"\u5173\u95ED\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570"}]},w=k({setup(){let{messageTip:t,messageVNode:r}=V(),{messageInfo:d,messageSuccess:E,messageWarn:C,messageError:D,messageElementInfo:i,messageElementSuccess:a,messageElementWarn:n,messageElementError:m}=N(),{messageTipElement:c,messageVNodeElement:p}=L(),{messageDuration:F,messageClose:_}=S();return{tableList:v,codeList:M,messageTip:t,messageVNode:r,messageInfo:d,messageSuccess:E,messageWarn:C,messageError:D,messageElementInfo:i,messageElementSuccess:a,messageElementWarn:n,messageElementError:m,messageTipElement:c,messageVNodeElement:p,messageDuration:F,messageClose:_}},components:{Document:f,CodeGather:A,CodePanel:y}});function V(){return{messageTip:()=>{o("Message\u63D0\u793A\u57FA\u7840\u7528\u6CD5")},messageVNode:()=>{o(g("p",null,[g("span",null,"Message\u6D88\u606F\u652F\u6301"),g("i",{style:"color:teal"},"VNode")]))}}}function N(){return{messageInfo:()=>{o({message:"Info\u63D0\u793A\u57FA\u7840\u7528\u6CD5",type:"info"})},messageSuccess:()=>{o({message:"Success\u63D0\u793A\u57FA\u7840\u7528\u6CD5",type:"success"})},messageWarn:()=>{o({message:"Warn\u63D0\u793A\u57FA\u7840\u7528\u6CD5",type:"warn"})},messageError:()=>{o({message:"Error\u63D0\u793A\u57FA\u7840\u7528\u6CD5",type:"error"})},messageElementInfo:()=>{o({message:"Info\u63D0\u793A\u57FA\u7840\u7528\u6CD5",type:"info",elementLike:!0})},messageElementSuccess:()=>{o({message:"Success\u63D0\u793A\u57FA\u7840\u7528\u6CD5",type:"success",elementLike:!0})},messageElementWarn:()=>{o({message:"Warn\u63D0\u793A\u57FA\u7840\u7528\u6CD5",type:"warn",elementLike:!0})},messageElementError:()=>{o({message:"Error\u63D0\u793A\u57FA\u7840\u7528\u6CD5",type:"error",elementLike:!0})}}}function L(){return{messageTipElement:()=>{o({message:"Message\u63D0\u793A\u57FA\u7840\u7528\u6CD5",elementLike:!0})},messageVNodeElement:()=>{o({message:g("p",null,[g("span",null,"Message\u6D88\u606F\u652F\u6301"),g("i",{style:"color:teal"},"VNode")]),elementLike:!0})}}}function S(){return{messageDuration:()=>{o({message:"\u8BBE\u7F6E\u5173\u95ED\u65F6\u95F4\u4E3A1\u79D2",duration:1e3})},messageClose:()=>{o({message:"\u89E6\u53D1\u5173\u95ED\u56DE\u8C03",duration:3e3,onClose:()=>{o("\u5173\u95ED\u56DE\u8C03\u89E6\u53D1\u6210\u529F!")}})}}}const I=s(" Message\u6D88\u606F\u63D0\u793A "),W=s(" \u8BE5\u7EC4\u4EF6\u5E38\u7528\u4E8E\u5728\u6DFB\u52A0\u3001\u4FEE\u6539\u3001\u5220\u9664\u7B49\u64CD\u4F5C\u540E\u7684\u63D0\u793A\u3002 "),T=s(" AsMessage\u7EC4\u4EF6\u6CE8\u518C\u4E86\u4E00\u4E2A\u5168\u5C40"),P=s("$as_message"),$=s("\u65B9\u6CD5\u7528\u4E8E\u8C03\u7528\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5BFC\u5165AsMessage\u6A21\u5757\u4F7F\u7528\u3002 \u53EF\u4EE5\u63A5\u6536\u4E00\u4E2A\u5B57\u7B26\u4E32\u6216\u4E00\u4E2AVNode\u4F5C\u4E3A\u53C2\u6570\u3002 "),j=s("Message\u63D0\u793A\u57FA\u7840\u7528\u6CD5"),z=s("VNode\u6D88\u606F\u57FA\u7840\u7528\u6CD5"),G=s(" \u9664\u4E86\u9ED8\u8BA4\u7684\u98CE\u683C\uFF0CMessage\u8FD8\u652F\u6301"),H=s("Element Plus"),U=s("\u98CE\u683C\uFF0C\u8BBE\u7F6EelementLike\u4E3Atrue\u5373\u53EF\u3002 "),q=s("Message\u6D88\u606F\u57FA\u7840\u7528\u6CD5"),J=s("VNode\u6D88\u606F\u57FA\u7840\u7528\u6CD5"),K=s(" Message\u652F\u6301\u56DB\u79CD\u7C7B\u578B\uFF0C\u5206\u522B\u662F"),O=s("info"),Q=s("success"),R=s("warn"),X=s("error"),Y=s("\uFF0C\u901A\u8FC7"),Z=s("type"),x=s("\u8BBE\u7F6E\u5373\u53EF\u3002 "),ee=s("Info\u6D88\u606F"),ue=s("Success\u6D88\u606F"),se=s("Warn\u6D88\u606F"),te=s("Error\u6D88\u606F"),ae=s("eleemnt Info"),oe=s("element Success"),ne=s("element Warn"),le=s("element Error"),re=s(" Message\u7684\u5C55\u793A\u65F6\u95F4\u53EF\u4EE5\u7531duration\u63A7\u5236\uFF0C\u5355\u4F4D\u4E3Ams\uFF0C\u6B64\u5916\uFF0C\u5728\u5173\u95ED\u65F6\u4F1A\u89E6\u53D1\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570onClose\u3002 "),ie=s("\u8BBE\u7F6E\u5173\u95ED\u65F6\u95F4"),me=s("\u5173\u95ED\u65F6\u89E6\u53D1\u56DE\u8C03");function ce(t,r,d,E,C,D){const i=l("n-button"),a=l("as-button"),n=l("n-space"),m=l("CodePanel"),c=l("n-tag"),p=l("n-divider"),F=l("CodeGather"),_=l("Document");return h(),b(_,{tableList:t.tableList},{title:e(()=>[I]),describe:e(()=>[W]),content:e(()=>[u(F,null,{left:e(()=>[u(m,{title:"\u57FA\u7840\u7528\u6CD5",id:"base",code:t.codeList.codeBase},{default:e(()=>[T,u(i,{size:"tiny",secondary:"",strong:""},{default:e(()=>[P]),_:1}),$]),show:e(()=>[u(n,null,{default:e(()=>[u(a,{type:"primary",onClick:t.messageTip},{default:e(()=>[j]),_:1},8,["onClick"]),u(a,{type:"positive",onClick:t.messageVNode},{default:e(()=>[z]),_:1},8,["onClick"])]),_:1})]),_:1},8,["code"]),u(m,{title:"\u4E0D\u540C\u98CE\u683C",id:"colorful",code:t.codeList.codeColorful},{default:e(()=>[G,u(i,{text:"",tag:"a",href:"https://element-plus.gitee.io/zh-CN/component/message.html",target:"_blank",type:"error"},{default:e(()=>[H]),_:1}),U]),show:e(()=>[u(n,null,{default:e(()=>[u(a,{type:"warning",onClick:t.messageTipElement},{default:e(()=>[q]),_:1},8,["onClick"]),u(a,{type:"negative",onClick:t.messageVNodeElement},{default:e(()=>[J]),_:1},8,["onClick"])]),_:1})]),_:1},8,["code"])]),right:e(()=>[u(m,{title:"\u4E0D\u540C\u7C7B\u578B",id:"style",code:t.codeList.codeStyle},{default:e(()=>[K,u(c,{type:"warning"},{default:e(()=>[O]),_:1}),u(p,{vertical:""}),u(c,{type:"warning"},{default:e(()=>[Q]),_:1}),u(p,{vertical:""}),u(c,{type:"warning"},{default:e(()=>[R]),_:1}),u(p,{vertical:""}),u(c,{type:"warning"},{default:e(()=>[X]),_:1}),Y,u(i,{size:"tiny",secondary:"",strong:""},{default:e(()=>[Z]),_:1}),x]),show:e(()=>[u(n,{vertical:""},{default:e(()=>[u(n,null,{default:e(()=>[u(a,{type:"primary",onClick:t.messageInfo},{default:e(()=>[ee]),_:1},8,["onClick"]),u(a,{type:"positive",onClick:t.messageSuccess},{default:e(()=>[ue]),_:1},8,["onClick"]),u(a,{type:"warning",onClick:t.messageWarn},{default:e(()=>[se]),_:1},8,["onClick"]),u(a,{type:"negative",onClick:t.messageError},{default:e(()=>[te]),_:1},8,["onClick"])]),_:1}),u(n,null,{default:e(()=>[u(a,{type:"primary",plain:"",onClick:t.messageElementInfo},{default:e(()=>[ae]),_:1},8,["onClick"]),u(a,{type:"positive",plain:"",onClick:t.messageElementSuccess},{default:e(()=>[oe]),_:1},8,["onClick"]),u(a,{type:"warning",plain:"",onClick:t.messageElementWarn},{default:e(()=>[ne]),_:1},8,["onClick"]),u(a,{type:"negative",plain:"",onClick:t.messageElementError},{default:e(()=>[le]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["code"]),u(m,{title:"\u5173\u95ED\u65F6\u95F4\u548C\u5173\u95ED\u56DE\u8C03",id:"close-func",code:t.codeList.codeCloseFunc},{default:e(()=>[re]),show:e(()=>[u(n,null,{default:e(()=>[u(a,{type:"primary",onClick:t.messageDuration},{default:e(()=>[ie]),_:1},8,["onClick"]),u(a,{type:"positive",onClick:t.messageClose},{default:e(()=>[me]),_:1},8,["onClick"])]),_:1})]),_:1},8,["code"])]),_:1})]),_:1},8,["tableList"])}var Ce=B(w,[["render",ce]]);export{Ce as default};
