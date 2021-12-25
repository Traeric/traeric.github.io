import{D as p,C as l,a as _}from"./CodePanel.d5b28c81.js";import{e as h,W as g,r as o,o as E,c as B,w as u,f as e,j as c,s}from"./vendor.e6d22bf6.js";import{_ as m}from"./index.15a71c98.js";import"./commonFunc.c6b8e963.js";const D={codeBase:`<template>
    <div style="width: 350px;">
        <as-scratch-slider />
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
        <as-scratch-slider :success="success" />
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
<\/script>`},f={eventsTableHeader:["\u4E8B\u4EF6\u540D	","\u8BF4\u660E","\u8FD4\u56DE\u503C","\u53C2\u6570"],eventsTable:[{event:"success",describe:"\u8BA4\u8BC1\u6210\u529F\u89E6\u53D1"},{event:"refresh",describe:"\u8BA4\u8BC1\u5931\u8D25\u65F6\u89E6\u53D1",props:["callback\uFF1A\u83B7\u53D6\u5230\u9700\u8981\u5237\u65B0\u7684\u6570\u636E\uFF0C\u901A\u8FC7\u8BE5\u56DE\u8C03\u65B9\u6CD5\u4F20\u5165"]}]},A=h({setup(){function t(a){let n=["https://cn.bing.com/th?id=OHR.BeechTrees_ZH-CN9605292244_1920x1080.jpg&rf=LaDigue_1920x1080.jpg","https://cn.bing.com/th?id=OHR.ElanValley_ZH-CN9533069637_1920x1080.jpg&rf=LaDigue_1920x1080.jpg","https://cn.bing.com/th?id=OHR.WinterWaxwing_ZH-CN9435499385_1920x1080.jpg&rf=LaDigue_1920x1080.jpg","https://cn.bing.com/th?id=OHR.SquirrelsCairngorms_ZH-CN9369511507_1920x1080.jpg&rf=LaDigue_1920x1080.jpg","https://cn.bing.com/th?id=OHR.ChocoHillBohol_ZH-CN9297094265_1920x1080.jpg&rf=LaDigue_1920x1080.jpg","https://cn.bing.com/th?id=OHR.AmmoniteShell_ZH-CN9232274077_1920x1080.jpg&rf=LaDigue_1920x1080.jpg","https://cn.bing.com/th?id=OHR.IrohazakaRoad_ZH-CN9151363864_1920x1080.jpg&rf=LaDigue_1920x1080.jpg"];a({background:n[Math.floor(Math.random()*n.length)]})}return{tableList:f,codeList:D,refresh:t,success(){g({message:"\u8BA4\u8BC1\u6210\u529F",type:"success",elementLike:!0})}}},components:{Document:p,CodeGather:l,CodePanel:_}}),x=s(" \u522E\u522E\u5361\u8BA4\u8BC1 "),b=s(" \u5F53\u70B9\u51FB\u767B\u5F55\u6216\u6CE8\u518C\u65F6\uFF0C\u522E\u5F00\u56FE\u5C42\u9732\u51FA\u5B8C\u6574\u56FE\u6848\u5373\u53EF\u5B8C\u6210\u8BA4\u8BC1\uFF0C\u9700\u8981\u4F7F\u7528\u5C3D\u53EF\u80FD\u5C0F\u7684\u533A\u57DF\u522E\u5F00\u56FE\u6848\uFF0C\u5982\u679C\u522E\u5F00\u7684\u533A\u57DF\u8D85\u8FC770%\uFF0C\u5373\u4F7F\u56FE\u6848\u5168\u90E8\u9732\u51FA\u4E5F\u8BA4\u4E3A\u8BA4\u8BC1\u5931\u8D25\u3002 "),j=s("\u5F80\u540E\u7684\u7EC4\u4EF6\u5728\u8BA4\u8BC1\u6210\u529F\u540E\u4E0D\u4F1A\u81EA\u52A8\u6D88\u5931\uFF0C\u9700\u8981\u5728\u8BA4\u8BC1\u6210\u529F\u7684\u65B9\u6CD5\u4E2D\u81EA\u5DF1\u5173\u95ED\u3002"),H=s(" \u5728\u9700\u8981\u7528\u5230\u522E\u522E\u5361\u8BA4\u8BC1\u7684\u5730\u65B9\u6DFB\u52A0\u76F8\u5173\u6807\u7B7E\u5373\u53EF\uFF0C\u6ED1\u5757\u7684\u5BBD\u5EA6\u53EF\u81EA\u9002\u5E94\u7236\u7EA7\u6807\u7B7E\u3002 "),L={style:{width:"350px"}},v=s(" \u5728\u7528\u6237\u8BA4\u8BC1\u6210\u529F\u540E\u9700\u8981\u89E6\u53D1\u56DE\u8C03\u51FD\u6570\u8FDB\u884C\u6210\u529F\u540E\u7684\u64CD\u4F5C\uFF0C\u672C\u6A21\u5757\u63D0\u4F9B\u4E86success\u5C5E\u6027\u6765\u6267\u884C\u8BA4\u8BC1\u6210\u529F\u540E\u7684\u56DE\u8C03\u3002 "),N={style:{width:"350px"}},w=c("p",null," \u62FC\u56FE\u6A21\u5757\u6709\u4E00\u4E2A\u9ED8\u8BA4\u80CC\u666F\uFF0C\u5982\u679C\u4E0D\u60F3\u4F7F\u7528\u8BE5\u9ED8\u8BA4\u80CC\u666F\u53EF\u4EE5\u81EA\u5DF1\u66FF\u6362\uFF0C\u901A\u8FC7refresh\u65B9\u6CD5\u4F20\u9012\u5373\u53EF\u5B8C\u6210\u3002 ",-1),R=s(" \u5728\u8BA4\u8BC1\u5931\u8D25\u7684\u65F6\u4E5F\u4F1A\u89E6\u53D1refresh\u65B9\u6CD5\u66F4\u6362\u80CC\u666F\u3002 "),O={style:{width:"350px"}};function Z(t,a,n,y,k,S){const d=o("n-alert"),i=o("as-scratch-slider"),r=o("CodePanel"),C=o("CodeGather"),F=o("Document");return E(),B(F,{tableList:t.tableList},{title:u(()=>[x]),describe:u(()=>[b]),content:u(()=>[e(d,{title:"\u6CE8\u610F",type:"warning"},{default:u(()=>[j]),_:1}),e(C,{style:{"margin-top":"1rem"}},{left:u(()=>[e(r,{title:"\u57FA\u7840\u7528\u6CD5",id:"base",code:t.codeList.codeBase},{default:u(()=>[H]),show:u(()=>[c("div",L,[e(i)])]),_:1},8,["code"]),e(r,{title:"\u8BA4\u8BC1\u6210\u529F",id:"success",code:t.codeList.codeSuccess},{default:u(()=>[v]),show:u(()=>[c("div",N,[e(i,{success:t.success},null,8,["success"])])]),_:1},8,["code"])]),right:u(()=>[e(r,{title:"\u81EA\u5B9A\u4E49\u80CC\u666F\u56FE\u7247",id:"customer",code:t.codeList.codeCustomerBackground},{default:u(()=>[w,e(d,{title:"\u63D0\u793A",type:"info"},{default:u(()=>[R]),_:1})]),show:u(()=>[c("div",O,[e(i,{refresh:t.refresh},null,8,["refresh"])])]),_:1},8,["code"])]),_:1})]),_:1},8,["tableList"])}var P=m(A,[["render",Z]]);export{P as default};
