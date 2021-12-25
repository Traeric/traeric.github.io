import{D as _,C as h,a as g}from"./CodePanel.d5b28c81.js";import{e as B,r as s,o as m,c as F,w as u,W as f,f as t,j as c,s as o}from"./vendor.e6d22bf6.js";import{_ as D}from"./index.15a71c98.js";import"./commonFunc.c6b8e963.js";const E={codeBase:`<template>
    <div style="width: 350px;">
        <as-text-slider />
    </div>
</template>`,codeCustomerBackground:`<template>
    <div style="width: 350px;">
        <as-text-slider :refresh="refresh" />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    
    export default defineComponent({
        setup() {
            function refresh(callback: Function) {
                let bgArr = ['https://cn.bing.com/th?id=OHR.BeechTrees_ZH-CN9605292244_1920x1080.jpg&rf=LaDigue_1920x1080.jpg',
                    'https://cn.bing.com/th?id=OHR.ElanValley_ZH-CN9533069637_1920x1080.jpg&rf=LaDigue_1920x1080.jpg',
                    'https://cn.bing.com/th?id=OHR.WinterWaxwing_ZH-CN9435499385_1920x1080.jpg&rf=LaDigue_1920x1080.jpg',
                    'https://cn.bing.com/th?id=OHR.SquirrelsCairngorms_ZH-CN9369511507_1920x1080.jpg&rf=LaDigue_1920x1080.jpg',
                    'https://cn.bing.com/th?id=OHR.ChocoHillBohol_ZH-CN9297094265_1920x1080.jpg&rf=LaDigue_1920x1080.jpg',
                    'https://cn.bing.com/th?id=OHR.AmmoniteShell_ZH-CN9232274077_1920x1080.jpg&rf=LaDigue_1920x1080.jpg',
                    'https://cn.bing.com/th?id=OHR.IrohazakaRoad_ZH-CN9151363864_1920x1080.jpg&rf=LaDigue_1920x1080.jpg'];
                callback({
                    "background": bgArr[Math.floor(Math.random() * bgArr.length)]
                });
            }

            return {
                refresh
            };
        }
    });
<\/script>`,codeSuccess:`<template>
    <div class="wrap" style="width: 350px;">
        <as-text-slider :success="success" />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
        
    export default defineComponent({
        setup() {
            function success() {
                AsMessage({
                    message: "\u8BA4\u8BC1\u6210\u529F",
                    type: "success"
                });
            }

            return {
                success
            };
        }
    });
<\/script>`},x={eventsTableHeader:["\u4E8B\u4EF6\u540D	","\u8BF4\u660E","\u8FD4\u56DE\u503C","\u53C2\u6570"],eventsTable:[{event:"success",describe:"\u8BA4\u8BC1\u6210\u529F\u89E6\u53D1"},{event:"refresh",describe:"\u8BA4\u8BC1\u5931\u8D25\u65F6\u89E6\u53D1",props:["callback: \u83B7\u53D6\u5230\u9700\u8981\u5237\u65B0\u7684\u6570\u636E\uFF0C\u901A\u8FC7\u8BE5\u56DE\u8C03\u65B9\u6CD5\u4F20\u5165"]}]},A=B({setup(){function e(d){let n=["https://cn.bing.com/th?id=OHR.BeechTrees_ZH-CN9605292244_1920x1080.jpg&rf=LaDigue_1920x1080.jpg","https://cn.bing.com/th?id=OHR.ElanValley_ZH-CN9533069637_1920x1080.jpg&rf=LaDigue_1920x1080.jpg","https://cn.bing.com/th?id=OHR.WinterWaxwing_ZH-CN9435499385_1920x1080.jpg&rf=LaDigue_1920x1080.jpg","https://cn.bing.com/th?id=OHR.SquirrelsCairngorms_ZH-CN9369511507_1920x1080.jpg&rf=LaDigue_1920x1080.jpg","https://cn.bing.com/th?id=OHR.ChocoHillBohol_ZH-CN9297094265_1920x1080.jpg&rf=LaDigue_1920x1080.jpg","https://cn.bing.com/th?id=OHR.AmmoniteShell_ZH-CN9232274077_1920x1080.jpg&rf=LaDigue_1920x1080.jpg","https://cn.bing.com/th?id=OHR.IrohazakaRoad_ZH-CN9151363864_1920x1080.jpg&rf=LaDigue_1920x1080.jpg"];d({background:n[Math.floor(Math.random()*n.length)]})}function a(){f({message:"\u8BA4\u8BC1\u6210\u529F",type:"success"})}return{tableList:x,codeList:E,refresh:e,success:a}},components:{Document:_,CodeGather:h,CodePanel:g}}),b=o(" \u6587\u5B57\u70B9\u9009\u8BA4\u8BC1 "),j=o(" \u5F53\u70B9\u51FB\u767B\u5F55\u6216\u6CE8\u518C\u65F6\uFF0C\u6309\u7167\u63D0\u793A\u6309\u987A\u5E8F\u70B9\u51FB\u56FE\u4E2D\u6587\u5B57\u5B8C\u6210\u8BA4\u8BC1\u3002 "),H=o(" \u5728\u9700\u8981\u7528\u5230\u6587\u5B57\u70B9\u9009\u8BA4\u8BC1\u7684\u5730\u65B9\u6DFB\u52A0\u76F8\u5173\u6807\u7B7E\u5373\u53EF\uFF0C\u6ED1\u5757\u7684\u5BBD\u5EA6\u53EF\u81EA\u9002\u5E94\u7236\u7EA7\u6807\u7B7E\u3002 "),L={style:{width:"350px"}},v=o(" \u5728\u7528\u6237\u8BA4\u8BC1\u6210\u529F\u540E\u9700\u8981\u89E6\u53D1\u56DE\u8C03\u51FD\u6570\u8FDB\u884C\u6210\u529F\u540E\u7684\u64CD\u4F5C\uFF0C\u672C\u6A21\u5757\u63D0\u4F9B\u4E86success\u5C5E\u6027\u6765\u6267\u884C\u8BA4\u8BC1\u6210\u529F\u540E\u7684\u56DE\u8C03\u3002 "),N={style:{width:"350px"}},R=c("p",null," \u70B9\u9009\u6A21\u5757\u7684\u80CC\u666F\u6709\u4E00\u4E2A\u9ED8\u8BA4\u503C\uFF0C\u5982\u679C\u4E0D\u60F3\u4F7F\u7528\u8BE5\u9ED8\u8BA4\u503C\u53EF\u4EE5\u81EA\u5DF1\u66FF\u6362\uFF0C\u901A\u8FC7refresh\u65B9\u6CD5\u4F20\u9012\u5373\u53EF\u5B8C\u6210\u3002 ",-1),w=o(" \u5728\u8BA4\u8BC1\u5931\u8D25\u7684\u65F6\u4E5F\u4F1A\u89E6\u53D1refresh\u65B9\u6CD5\u66F4\u6362\u80CC\u666F\u3002 "),O={style:{width:"350px"}};function Z(e,a,d,n,k,y){const i=s("as-text-slider"),r=s("CodePanel"),p=s("n-alert"),l=s("CodeGather"),C=s("Document");return m(),F(C,{"table-list":e.tableList},{title:u(()=>[b]),describe:u(()=>[j]),content:u(()=>[t(l,null,{left:u(()=>[t(r,{title:"\u57FA\u7840\u7528\u6CD5",id:"base",code:e.codeList.codeBase},{default:u(()=>[H]),show:u(()=>[c("div",L,[t(i)])]),_:1},8,["code"]),t(r,{title:"\u8BA4\u8BC1\u6210\u529F",id:"success",code:e.codeList.codeSuccess},{default:u(()=>[v]),show:u(()=>[c("div",N,[t(i,{success:e.success},null,8,["success"])])]),_:1},8,["code"])]),right:u(()=>[t(r,{title:"\u81EA\u5B9A\u4E49\u80CC\u666F\u56FE\u7247",id:"customer-background",code:e.codeList.codeCustomerBackground},{default:u(()=>[R,t(p,{title:"\u63D0\u793A",type:"info"},{default:u(()=>[w]),_:1})]),show:u(()=>[c("div",O,[t(i,{refresh:e.refresh},null,8,["refresh"])])]),_:1},8,["code"])]),_:1})]),_:1},8,["table-list"])}var V=D(A,[["render",Z]]);export{V as default};
