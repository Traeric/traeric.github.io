import{e as D,g as d,r as o,o as m,c as A,w as u,W as p,f as t,j as a,E as _,G as v,s as r}from"./vendor.e6d22bf6.js";import{D as b,C as x,a as y}from"./CodePanel.fd8754fa.js";import{_ as g}from"./index.a60cb413.js";import"./commonFunc.c6b8e963.js";const w={codeBase:`<template>
    <div style="width: 120px;">
        <as-picture-captcha />
    </div>
</template>`,codeCustomer:`<template>
    <div style="width: 120px;">
        <as-picture-captcha :refresh="refresh" />
        <as-picture-captcha :refresh="refreshColor" />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    
    export default defineComponent({
        setup() {
            function refresh() {
                return {
                    "text": "6666",
                    "result": "6666"
                };
            }
    
            function refreshColor() {
                return {
                    "color": "#F56C6C"
                };
            }

            return {
                refresh,
                refreshColor
            };
        }
    });
<\/script>`,codeAuth:`<template>
    <div style="width: 120px;">
        <as-picture-captcha ref="picRef" />
        <input style="height: 35px; margin: 20px 0; border-radius: 5px; border: 1px solid #aaa; outline: none;"
            v-model="userData" />
        <as-button type="primary"
            prefix-icon="icon-renzhengguanli"
            @click="auth">\u70B9\u51FB\u8BA4\u8BC1</as-button>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
        
    export default defineComponent({
        setup() {
            let userData = ref("");
            let picRef = ref(null);
            
            function auth() {
                if ((<any>picRef.value).auth(userData.value)) {
                    AsMessage({
                        message: "\u8BA4\u8BC1\u6210\u529F",
                        type: "success"
                    });
                } else {
                    AsMessage({
                        message: "\u8BA4\u8BC1\u5931\u8D25",
                        type: "error"
                    });
                    // \u5237\u65B0\u6570\u636E
                    (<any>picRef.value).refresh();
                }
            }

            return {
                userData,
                picRef,
                auth,
            };
        }
    });
<\/script>`},R={eventsTableHeader:["\u4E8B\u4EF6\u540D	","\u8BF4\u660E","\u8FD4\u56DE\u503C","\u53C2\u6570"],eventsTable:[{event:"refresh",describe:"\u5237\u65B0\u65B9\u6CD5\uFF0C\u53EF\u4F20\u5165\u5237\u65B0\u7684\u6570\u636E\u4EE5\u53CA\u989C\u8272"},{event:"module.auth",describe:"\u8BA4\u8BC1\u65B9\u6CD5",result:["true","false"]},{event:"module.refresh",describe:"\u5237\u65B0\u9A8C\u8BC1\u7801\uFF0C\u5F53\u5B9A\u4E49refresh\u65B9\u6CD5\u65F6\uFF0C\u8FD8\u53EF\u4EE5\u89E6\u53D1refresh\u65B9\u6CD5\u83B7\u53D6\u7528\u6237\u81EA\u5B9A\u4E49\u7684\u6587\u5B57\u4EE5\u53CA\u989C\u8272"}]},L=D({setup(){let e=d(""),s=d(null);function c(){return{text:"6666",result:"6666"}}function l(){return{color:"#F56C6C"}}function C(){s.value.auth(e.value)?p({message:"\u8BA4\u8BC1\u6210\u529F",type:"success"}):(p({message:"\u8BA4\u8BC1\u5931\u8D25",type:"error"}),s.value.refresh())}return{tableList:R,codeList:w,refresh:c,refreshColor:l,userData:e,picRef:s,auth:C}},components:{Document:b,CodeGather:x,CodePanel:y}}),j=r(" \u56FE\u7247\u9A8C\u8BC1\u7801\u8BA4\u8BC1 "),k=r(" \u5F53\u70B9\u51FB\u767B\u5F55\u6216\u6CE8\u518C\u65F6\uFF0C\u901A\u8FC7\u586B\u5165\u56FE\u7247\u4E2D\u7684\u6587\u5B57\u6216\u8BA1\u7B97\u56FE\u7247\u4E2D\u7B97\u5F0F\u7684\u7ED3\u679C\u8FDB\u884C\u9A8C\u8BC1\u3002 "),G=r(" \u5728\u9700\u8981\u7528\u5230\u56FE\u7247\u9A8C\u8BC1\u7801\u7684\u5730\u65B9\u6DFB\u52A0\u76F8\u5E94\u6807\u7B7E\u5373\u53EF\uFF0C\u5BBD\u5EA6\u53EF\u81EA\u9002\u5E94\u7236\u7EA7\u6807\u7B7E\u3002 "),P={style:{width:"120px"}},T=a("p",null," as-picture-captcha\u7EC4\u4EF6\u63D0\u4F9B\u4E86auth\u8FDB\u884C\u8BA4\u8BC1\uFF0C\u5C06\u7528\u6237\u586B\u5165\u7684\u6570\u636E\u4F20\u5165auth\u65B9\u6CD5\u4E2D\u5373\u53EF\u83B7\u53D6\u8BA4\u8BC1\u7ED3\u679C\u3002 ",-1),V=r(" \u9664\u6B64\u4E4B\u5916\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7refresh\u65B9\u6CD5\u5728\u8BA4\u8BC1\u5931\u8D25\u540E\u5237\u65B0\u56FE\u7247\u4E2D\u7684\u9A8C\u8BC1\u7801\u3002 "),$={style:{width:"120px"}},M=r("\u70B9\u51FB\u8BA4\u8BC1"),N=r(" \u901A\u5E38\u7EC4\u4EF6\u4F1A\u81EA\u5DF1\u751F\u6210\u968F\u673A\u5B57\u7B26\uFF0C\u4F46\u662F\u5982\u679C\u5E0C\u671B\u4F20\u5165\u81EA\u5B9A\u4E49\u7684\u5B57\u7B26\u4E5F\u53EF\u4EE5\u4F7F\u7528refresh\u65B9\u6CD5\uFF0C\u53EA\u8981\u5728\u65B9\u6CD5\u4E2D\u8FD4\u56DE\u6307\u5B9A\u7684\u6587\u5B57\u4EE5\u53CA\u9A8C\u8BC1\u7ED3\u679C\u5373\u53EF\u3002\u53E6\u5916\u8FD8\u53EF\u4EE5\u8FD4\u56DE\u989C\u8272\u503C\u6765\u6539\u53D8\u6587\u5B57\u751F\u6210\u7684\u989C\u8272\u3002 "),z={style:{width:"120px"}};function W(e,s,c,l,C,H){const n=o("as-picture-captcha"),i=o("CodePanel"),B=o("n-alert"),F=o("as-button"),f=o("CodeGather"),E=o("Document");return m(),A(E,{"table-list":e.tableList},{title:u(()=>[j]),describe:u(()=>[k]),content:u(()=>[t(f,null,{left:u(()=>[t(i,{title:"\u57FA\u7840\u7528\u6CD5",id:"base",code:e.codeList.codeBase},{default:u(()=>[G]),show:u(()=>[a("div",P,[t(n)])]),_:1},8,["code"]),t(i,{title:"\u8BA4\u8BC1",id:"auth",code:e.codeList.codeAuth},{default:u(()=>[T,t(B,{title:"\u63D0\u793A",type:"info"},{default:u(()=>[V]),_:1})]),show:u(()=>[a("div",$,[t(n,{ref:"picRef"},null,512),_(a("input",{style:{height:"35px",margin:"20px 0","border-radius":"5px",border:"1px solid #aaa",outline:"none"},"onUpdate:modelValue":s[0]||(s[0]=h=>e.userData=h)},null,512),[[v,e.userData]]),t(F,{type:"primary","prefix-icon":"icon-renzhengguanli",onClick:e.auth},{default:u(()=>[M]),_:1},8,["onClick"])])]),_:1},8,["code"])]),right:u(()=>[t(i,{title:"\u81EA\u5B9A\u4E49\u6587\u5B57\u53CA\u989C\u8272",id:"customer",code:e.codeList.codeCustomer},{default:u(()=>[N]),show:u(()=>[a("div",z,[t(n,{refresh:e.refresh},null,8,["refresh"]),t(n,{refresh:e.refreshColor},null,8,["refresh"])])]),_:1},8,["code"])]),_:1})]),_:1},8,["table-list"])}var K=g(L,[["render",W]]);export{K as default};
