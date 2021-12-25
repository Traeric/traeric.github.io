import{D as C,C as _,a as g}from"./CodePanel.b5f7e798.js";import{e as h,W as F,r as s,o as m,c as B,w as u,f as t,j as c,q as o}from"./vendor.0404547e.js";import{_ as f}from"./index.458edfbc.js";import"./commonFunc.a5cb2dc9.js";const E={codeBase:`<template>
    <div style="width: 350px;">
        <as-jigsaw-slider />
    </div>
</template>`,codeCustomerBackground:`<template>
    <div style="width: 350px;">
        <as-jigsaw-slider :refresh="refresh" />
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
        <as-jigsaw-slider :success="success" />
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
<\/script>`},D={eventsTableHeader:["\u4E8B\u4EF6\u540D	","\u8BF4\u660E","\u8FD4\u56DE\u503C","\u53C2\u6570"],eventsTable:[{event:"success",describe:"\u8BA4\u8BC1\u6210\u529F\u89E6\u53D1"},{event:"refresh",describe:"\u8BA4\u8BC1\u5931\u8D25\u65F6\u89E6\u53D1",props:["callback\uFF1A\u83B7\u53D6\u5230\u9700\u8981\u5237\u65B0\u7684\u6570\u636E\uFF0C\u901A\u8FC7\u8BE5\u56DE\u8C03\u65B9\u6CD5\u4F20\u5165"]}]},A=h({setup(){function e(a){let n=["https://cn.bing.com/th?id=OHR.BeechTrees_ZH-CN9605292244_1920x1080.jpg&rf=LaDigue_1920x1080.jpg","https://cn.bing.com/th?id=OHR.ElanValley_ZH-CN9533069637_1920x1080.jpg&rf=LaDigue_1920x1080.jpg","https://cn.bing.com/th?id=OHR.WinterWaxwing_ZH-CN9435499385_1920x1080.jpg&rf=LaDigue_1920x1080.jpg","https://cn.bing.com/th?id=OHR.SquirrelsCairngorms_ZH-CN9369511507_1920x1080.jpg&rf=LaDigue_1920x1080.jpg","https://cn.bing.com/th?id=OHR.ChocoHillBohol_ZH-CN9297094265_1920x1080.jpg&rf=LaDigue_1920x1080.jpg","https://cn.bing.com/th?id=OHR.AmmoniteShell_ZH-CN9232274077_1920x1080.jpg&rf=LaDigue_1920x1080.jpg","https://cn.bing.com/th?id=OHR.IrohazakaRoad_ZH-CN9151363864_1920x1080.jpg&rf=LaDigue_1920x1080.jpg"];a({background:n[Math.floor(Math.random()*n.length)]})}return{tableList:D,codeList:E,refresh:e,success(){F({message:"\u8BA4\u8BC1\u6210\u529F",type:"success",elementLike:!0})}}},components:{Document:C,CodeGather:_,CodePanel:g}}),x=o(" \u79FB\u52A8\u62FC\u56FE\u8BA4\u8BC1 "),j=o(" \u5F53\u70B9\u51FB\u767B\u5F55\u6216\u6CE8\u518C\u65F6\uFF0C\u6309\u7167\u5C06\u6253\u4E71\u7684\u56FE\u7247\u79FB\u52A8\u7EC4\u6210\u5B8C\u6574\u7684\u56FE\u7247\u5B8C\u6210\u8BA4\u8BC1\u3002 "),b=o(" \u5728\u9700\u8981\u7528\u5230\u79FB\u52A8\u62FC\u56FE\u8BA4\u8BC1\u7684\u5730\u65B9\u6DFB\u52A0\u76F8\u5173\u6807\u7B7E\u5373\u53EF\uFF0C\u6ED1\u5757\u7684\u5BBD\u5EA6\u53EF\u81EA\u9002\u5E94\u7236\u7EA7\u6807\u7B7E\u3002 "),H={style:{width:"350px"}},L=o(" \u5728\u7528\u6237\u8BA4\u8BC1\u6210\u529F\u540E\u9700\u8981\u89E6\u53D1\u56DE\u8C03\u51FD\u6570\u8FDB\u884C\u6210\u529F\u540E\u7684\u64CD\u4F5C\uFF0C\u672C\u6A21\u5757\u63D0\u4F9B\u4E86success\u5C5E\u6027\u6765\u6267\u884C\u8BA4\u8BC1\u6210\u529F\u540E\u7684\u56DE\u8C03\u3002 "),w={style:{width:"350px"}},v=c("p",null," \u62FC\u56FE\u6A21\u5757\u6709\u4E00\u4E2A\u9ED8\u8BA4\u80CC\u666F\uFF0C\u5982\u679C\u4E0D\u60F3\u4F7F\u7528\u8BE5\u9ED8\u8BA4\u80CC\u666F\u53EF\u4EE5\u81EA\u5DF1\u66FF\u6362\uFF0C\u901A\u8FC7refresh\u65B9\u6CD5\u4F20\u9012\u5373\u53EF\u5B8C\u6210\u3002 ",-1),N=o(" \u5728\u8BA4\u8BC1\u5931\u8D25\u7684\u65F6\u4E5F\u4F1A\u89E6\u53D1refresh\u65B9\u6CD5\u66F4\u6362\u80CC\u666F\u3002 "),R={style:{width:"350px"}};function O(e,a,n,Z,k,y){const i=s("as-jigsaw-slider"),r=s("CodePanel"),d=s("n-alert"),p=s("CodeGather"),l=s("Document");return m(),B(l,{"table-list":e.tableList},{title:u(()=>[x]),describe:u(()=>[j]),content:u(()=>[t(p,null,{left:u(()=>[t(r,{title:"\u57FA\u7840\u7528\u6CD5",id:"base",code:e.codeList.codeBase},{default:u(()=>[b]),show:u(()=>[c("div",H,[t(i)])]),_:1},8,["code"]),t(r,{title:"\u8BA4\u8BC1\u6210\u529F",id:"success",code:e.codeList.codeSuccess},{default:u(()=>[L]),show:u(()=>[c("div",w,[t(i,{success:e.success},null,8,["success"])])]),_:1},8,["code"])]),right:u(()=>[t(r,{title:"\u81EA\u5B9A\u4E49\u80CC\u666F\u56FE\u7247",id:"customer",code:e.codeList.codeCustomerBackground},{default:u(()=>[v,t(d,{title:"\u63D0\u793A",type:"info"},{default:u(()=>[N]),_:1})]),show:u(()=>[c("div",R,[t(i,{refresh:e.refresh},null,8,["refresh"])])]),_:1},8,["code"])]),_:1})]),_:1},8,["table-list"])}var V=f(A,[["render",O]]);export{V as default};
