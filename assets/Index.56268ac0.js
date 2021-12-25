import{D as B,C as l,a as h}from"./CodePanel.fd8754fa.js";import{e as _,r as s,o as g,c as m,w as u,W as D,f as e,j as c,s as o}from"./vendor.e6d22bf6.js";import{_ as f}from"./index.a60cb413.js";import"./commonFunc.c6b8e963.js";const A={codeBase:`<template>
    <div style="width: 350px;">
        <as-rotate-slider />
    </div>
</template>`,codeCustomerBackground:`<template>
    <div style="width: 350px;">
        <as-rotate-slider :refresh="refresh" />
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
<\/script>`,codeRefreshFrequency:`<template>
    <div style="width: 350px;">
        <as-rotate-slider :refreshFrequency="5" :errorRange="50" />
    </div>
</template>`,codeSuccess:`<template>
    <div style="width: 350px;">
        <as-rotate-slider :success="success" />
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
<\/script>`},b={propsTableHeader:["\u5C5E\u6027","\u8BF4\u660E","\u7C7B\u578B","\u9ED8\u8BA4\u503C","\u53EF\u9009\u503C"],propsTable:[{props:"tips",describe:"\u6ED1\u52A8\u533A\u57DF\u63D0\u793A\u5B57",type:"String",defaultValue:"\u62D6\u52A8\u6ED1\u5757\u5C06\u56FE\u5F62\u65CB\u8F6C\u5230\u6B63\u786E\u4F4D\u7F6E"},{props:"errorRange",describe:"\u5141\u8BB8\u8BEF\u5DEE\u8303\u56F4",type:"Number",defaultValue:"5"},{props:"refreshFrequency",describe:"\u6BCF\u6B21\u5141\u8BB8\u8BA4\u8BC1\u5931\u8D25\u7684\u6B21\u6570",type:"Number",defaultValue:"3"}],eventsTableHeader:["\u4E8B\u4EF6\u540D	","\u8BF4\u660E","\u8FD4\u56DE\u503C","\u53C2\u6570"],eventsTable:[{event:"success",describe:"\u8BA4\u8BC1\u6210\u529F\u89E6\u53D1"},{event:"refresh",describe:"\u8BA4\u8BC1\u5931\u8D25\u65F6\u89E6\u53D1",props:["callback\uFF1A\u83B7\u53D6\u5230\u9700\u8981\u5237\u65B0\u7684\u6570\u636E\uFF0C\u901A\u8FC7\u8BE5\u56DE\u8C03\u65B9\u6CD5\u4F20\u5165"]}]},x=_({setup(){function t(a){let i=["https://cn.bing.com/th?id=OHR.BeechTrees_ZH-CN9605292244_1920x1080.jpg&rf=LaDigue_1920x1080.jpg","https://cn.bing.com/th?id=OHR.ElanValley_ZH-CN9533069637_1920x1080.jpg&rf=LaDigue_1920x1080.jpg","https://cn.bing.com/th?id=OHR.WinterWaxwing_ZH-CN9435499385_1920x1080.jpg&rf=LaDigue_1920x1080.jpg","https://cn.bing.com/th?id=OHR.SquirrelsCairngorms_ZH-CN9369511507_1920x1080.jpg&rf=LaDigue_1920x1080.jpg","https://cn.bing.com/th?id=OHR.ChocoHillBohol_ZH-CN9297094265_1920x1080.jpg&rf=LaDigue_1920x1080.jpg","https://cn.bing.com/th?id=OHR.AmmoniteShell_ZH-CN9232274077_1920x1080.jpg&rf=LaDigue_1920x1080.jpg","https://cn.bing.com/th?id=OHR.IrohazakaRoad_ZH-CN9151363864_1920x1080.jpg&rf=LaDigue_1920x1080.jpg"];a({background:i[Math.floor(Math.random()*i.length)]})}function F(){D({message:"\u8BA4\u8BC1\u6210\u529F",type:"success"})}return{tableList:b,codeList:A,refresh:t,success:F}},components:{Document:B,CodeGather:l,CodePanel:h}}),j=o(" \u56FE\u5F62\u65CB\u8F6C\u8BA4\u8BC1 "),H=o(" \u5F53\u70B9\u51FB\u767B\u5F55\u6216\u6CE8\u518C\u65F6\uFF0C\u62D6\u52A8\u5E95\u90E8\u6ED1\u5757\u5C06\u56FE\u5F62\u65CB\u8F6C\u5230\u6B63\u786E\u4F4D\u7F6E\u5B8C\u6210\u8BA4\u8BC1\u3002 "),y=o(" \u5728\u9700\u8981\u7528\u5230\u56FE\u5F62\u65CB\u8F6C\u8BA4\u8BC1\u7684\u5730\u65B9\u6DFB\u52A0\u76F8\u5173\u6807\u7B7E\u5373\u53EF\uFF0C\u6ED1\u5757\u7684\u5BBD\u5EA6\u53EF\u81EA\u9002\u5E94\u7236\u7EA7\u6807\u7B7E\u3002 "),R={style:{width:"350px"}},v={style:{width:"350px"}},L=o(" \u65CB\u8F6C\u6A21\u5757\u7684\u80CC\u666F\u6709\u4E00\u4E2A\u9ED8\u8BA4\u503C\uFF0C\u5982\u679C\u4E0D\u60F3\u4F7F\u7528\u8BE5\u9ED8\u8BA4\u503C\u53EF\u4EE5\u81EA\u5DF1\u66FF\u6362\uFF0C\u901A\u8FC7refresh\u65B9\u6CD5\u4F20\u9012\u5373\u53EF\u5B8C\u6210\u3002 "),N={style:{width:"350px"}},w=o(" \u5728\u7528\u6237\u8BA4\u8BC1\u6210\u529F\u540E\u9700\u8981\u89E6\u53D1\u56DE\u8C03\u51FD\u6570\u8FDB\u884C\u6210\u529F\u540E\u7684\u64CD\u4F5C\uFF0C\u672C\u6A21\u5757\u63D0\u4F9B\u4E86success\u5C5E\u6027\u6765\u6267\u884C\u8BA4\u8BC1\u6210\u529F\u540E\u7684\u56DE\u8C03\u3002 "),O={style:{width:"350px"}};function Z(t,F,a,i,k,q){const r=s("as-rotate-slider"),n=s("CodePanel"),d=s("n-timeline-item"),C=s("n-timeline"),p=s("CodeGather"),E=s("Document");return g(),m(E,{"table-list":t.tableList},{title:u(()=>[j]),describe:u(()=>[H]),content:u(()=>[e(p,null,{left:u(()=>[e(n,{title:"\u57FA\u7840\u7528\u6CD5",id:"base",code:t.codeList.codeBase},{default:u(()=>[y]),show:u(()=>[c("div",R,[e(r)])]),_:1},8,["code"]),e(n,{title:"\u5237\u65B0\u9891\u7387\u4EE5\u53CA\u8BA4\u8BC1\u8BEF\u5DEE",id:"fresh-frequency",code:t.codeList.codeRefreshFrequency},{default:u(()=>[e(C,null,{default:u(()=>[e(d,{type:"success",content:`\u5982\u679C\u8BA4\u8BC1\u5931\u8D25\u540E\uFF0C\u56FE\u5F62\u4F1A\u81EA\u52A8\u5F52\u4F4D\uFF0C\u4F46\u662F\u56FE\u5F62\u89D2\u5EA6\u548C\u80CC\u666F\u4E0D\u4F1A\u6709\u4EFB\u4F55\u6539\u53D8\uFF0C\u4F46\u662F\u4E3A\u4E86\u5B89\u5168\u8003\u8651\uFF0C
                                \u5728\u9519\u8BEF\u6B21\u6570\u8D85\u8FC7\u9650\u5236\u540E\u4F1A\u8C03\u7528refresh\u65B9\u6CD5\u8BF7\u6C42\u65B0\u7684\u4F4D\u7F6E\u8DDF\u80CC\u666F\u56FE\u7247\uFF0C\u9ED8\u8BA4\u7684\u6B21\u6570\u662F3\uFF0C\u5982\u679C\u60F3\u8981\u81EA\u5DF1\u8BBE\u7F6E\uFF0C\u53EF\u4EE5\u9009\u62E9\u4F7F\u7528refreshFrequency\u53C2\u6570\u8BBE\u7F6E`}),e(d,{type:"success",content:"\u56FE\u5F62\u65CB\u8F6C\u89D2\u5EA6\u5141\u8BB8\u5B58\u5728\u4E00\u5B9A\u8BEF\u5DEE\uFF0C\u8FD9\u4E2A\u8BEF\u5DEE\u9ED8\u8BA4\u4E3A5\u5EA6\uFF0C\u4E5F\u53EF\u4EE5\u9009\u62E9\u4F7F\u7528errorRange\u53C2\u6570\u8BBE\u7F6E\u3002"})]),_:1})]),show:u(()=>[c("div",v,[e(r,{refreshFrequency:5,errorRange:50})])]),_:1},8,["code"])]),right:u(()=>[e(n,{title:"\u81EA\u5B9A\u4E49\u80CC\u666F\u56FE\u7247",id:"customer-background",code:t.codeList.codeCustomerBackground},{default:u(()=>[L]),show:u(()=>[c("div",N,[e(r,{refresh:t.refresh},null,8,["refresh"])])]),_:1},8,["code"]),e(n,{title:"\u8BA4\u8BC1\u6210\u529F",id:"success",code:t.codeList.codeSuccess},{default:u(()=>[w]),show:u(()=>[c("div",O,[e(r,{success:t.success},null,8,["success"])])]),_:1},8,["code"])]),_:1})]),_:1},8,["table-list"])}var M=f(x,[["render",Z]]);export{M as default};
