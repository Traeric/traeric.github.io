import{D as A,C as m,a as c}from"./CodePanel.d5b28c81.js";import{e as f,g as x,r as i,o as b,c as y,w as u,k as s,f as e,j as n,s as t,W as j}from"./vendor.e6d22bf6.js";import"./index.15a71c98.js";import"./commonFunc.c6b8e963.js";const a={code1:`<template>
    <div style="width: 350px;">
        <as-puzzle-slider />
    </div>
</template>`,code2:`<template>
    <div style="width: 350px; margin-top: 100px;">
        <as-auth-bar ref="authBarRef">
            <as-puzzle-slider :success="success" />
        </as-auth-bar>
    </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";

const authBarRef = ref();
function success() {
    authBarRef.success();
},
<\/script>`,code3:`<template>
    <div style="width: 350px;">
        <as-puzzle-slider :refreshFrequency="5" :errorRange="10" />
    </div>
</template>`,code4:`<template>
    <div style="width: 350px;">
        <as-puzzle-slider :refresh="refresh" />
    </div>
</template>

<script lang="ts" setup>
function refresh(callback: Function) {
    let bgArr = ['https://cn.bing.com/th?id=OHR.BeechTrees_ZH-CN9605292244_1920x1080.jpg&rf=LaDigue_1920x1080.jpg',
        'https://cn.bing.com/th?id=OHR.ElanValley_ZH-CN9533069637_1920x1080.jpg&rf=LaDigue_1920x1080.jpg',
        'https://cn.bing.com/th?id=OHR.WinterWaxwing_ZH-CN9435499385_1920x1080.jpg&rf=LaDigue_1920x1080.jpg',
        'https://cn.bing.com/th?id=OHR.SquirrelsCairngorms_ZH-CN9369511507_1920x1080.jpg&rf=LaDigue_1920x1080.jpg',
        'https://cn.bing.com/th?id=OHR.ChocoHillBohol_ZH-CN9297094265_1920x1080.jpg&rf=LaDigue_1920x1080.jpg',
        'https://cn.bing.com/th?id=OHR.AmmoniteShell_ZH-CN9232274077_1920x1080.jpg&rf=LaDigue_1920x1080.jpg',
        'https://cn.bing.com/th?id=OHR.IrohazakaRoad_ZH-CN9151363864_1920x1080.jpg&rf=LaDigue_1920x1080.jpg'];
    callback({
        "x": Math.random() * 450,
        "y": Math.random() * 150,
        "background": bgArr[Math.floor(Math.random() * bgArr.length)]
    });
}
<\/script>`,code5:`<template>
    <div style="width: 350px;">
        <as-puzzle-slider :success="success" />
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
<\/script>`},H={propsTableHeader:["\u5C5E\u6027","\u8BF4\u660E","\u7C7B\u578B","\u9ED8\u8BA4\u503C","\u53EF\u9009\u503C"],propsTable:[{props:"tips",describe:"\u6ED1\u52A8\u533A\u57DF\u63D0\u793A\u5B57",type:"String",defaultValue:"\u79FB\u52A8\u6ED1\u5757\uFF0C\u5B8C\u6210\u62FC\u56FE"},{props:"errorRange",describe:"\u4E24\u4E2A\u6ED1\u5757\u4E4B\u95F4\u5141\u8BB8\u8BEF\u5DEE\u8303\u56F4",type:"Number",defaultValue:"5px"},{props:"refreshFrequency",describe:"\u6BCF\u6B21\u5141\u8BB8\u8BA4\u8BC1\u5931\u8D25\u7684\u6B21\u6570",type:"Number",defaultValue:"3"}],eventsTableHeader:["\u4E8B\u4EF6\u540D	","\u8BF4\u660E","\u8FD4\u56DE\u503C","\u53C2\u6570"],eventsTable:[{event:"refresh",describe:"\u6ED1\u5757\u8BA4\u8BC1\u5931\u8D25\u6216\u70B9\u51FB\u5237\u65B0\u6309\u94AE\u89E6\u53D1"},{event:"success",describe:"\u6ED1\u5757\u8BA4\u8BC1\u6210\u529F\u89E6\u53D1"}]},R=t(" \u6ED1\u52A8\u62FC\u56FE\u8BA4\u8BC1 "),v=t(" \u5F53\u70B9\u51FB\u767B\u5F55\u6216\u6CE8\u518C\u65F6\uFF0C\u901A\u8FC7\u6ED1\u52A8\u62FC\u56FE\u4E0E\u753B\u9762\u4E2D\u7F3A\u5931\u7684\u90E8\u5206\u91CD\u5408\u8FDB\u884C\u9A8C\u8BC1\u3002 "),w=t(" \u5728\u9700\u8981\u7528\u5230\u8BA4\u8BC1\u6ED1\u5757\u7684\u5730\u65B9\u6DFB\u52A0\u6ED1\u5757\u6807\u7B7E\u5373\u53EF\uFF0C\u6ED1\u5757\u7684\u5BBD\u5EA6\u53EF\u81EA\u9002\u5E94\u7236\u7EA7\u6807\u7B7E\u3002 "),z={style:{width:"350px"}},N={style:{width:"350px"}},L=t(" \u8BA4\u8BC1\u6A21\u5757\u53EF\u4EE5\u7ED3\u5408"),O=t("as-auth-bar"),Z=t("\u6807\u7B7E\u4E00\u8D77\u4F7F\u7528\uFF0C\u5728\u8BA4\u8BC1\u6210\u529F\u7684\u65B9\u6CD5\u4E2D\u56DE\u8C03 "),M=t("as-auth-bar"),k=t("\u7684"),V=t("success"),q=t("\u65B9\u6CD5\uFF0C\u80FD\u591F\u83B7\u5F97\u66F4\u597D\u7684\u4F53\u9A8C\u3002 "),T={style:{width:"350px","margin-top":"130px"}},W=t(" \u5728\u672A\u6307\u5B9A\u56FE\u7247\u80CC\u666F\u4EE5\u53CA\u6ED1\u5757\u4F4D\u7F6E\u65F6\uFF0C\u7EC4\u4EF6\u4F1A\u81EA\u52A8\u751F\u6210\u6ED1\u5757\u4F4D\u7F6E\u4EE5\u53CA\u4F7F\u7528\u9ED8\u8BA4\u80CC\u666F\u3002\u4F46\u662F\u8FD9\u662F\u4E0D\u5B89\u5168\u7684\uFF0C"),S=t("AwesomeSliderAuth"),I=t("\u5E76\u4E0D\u5EFA\u8BAE\u8FD9\u4E9B\u64CD\u4F5C\u5728\u524D\u7AEF\u5B9E\u73B0\uFF0C \u800C\u5E94\u8BE5\u5728\u540E\u7AEF\u751F\u6210\u5E76\u4F20\u7ED9\u7EC4\u4EF6\uFF0C\u800C\u901A\u8FC7\u6307\u5B9A"),P=t("refresh"),G=t("\u65B9\u6CD5\u5373\u53EF\u5C06\u8FD9\u4E9B\u6570\u636E\u4F20\u9012\u7ED9\u7EC4\u4EF6\u3002 "),J={style:{width:"350px"}},K=t(" \u5BF9\u4E8E\u7528\u6237\u6765\u8BF4\uFF0C\u6700\u5173\u5FC3\u7684\u53EF\u80FD\u5C31\u662F\u5728\u5C06\u62FC\u56FE\u62C9\u5230\u6B63\u786E\u4F4D\u7F6E\u540E\uFF0C\u5982\u4F55\u62FF\u5230\u6B63\u786E\u7684\u7ED3\u679C\uFF0C\u5176\u5B9E\u7EC4\u4EF6\u5728\u5224\u65AD\u6ED1\u5757\u91CD\u53E0\u540E\u4F1A\u89E6\u53D1\u4E00\u4E2A\u56DE\u8C03\u65B9\u6CD5\uFF0C \u7528\u6237\u53EF\u4EE5\u5728\u8BE5\u65B9\u6CD5\u4E2D\u5B9A\u4E49\u8BA4\u8BC1\u6210\u529F\u540E\u8981\u6267\u884C\u7684\u64CD\u4F5C "),Q={style:{width:"350px"}},eu=f({setup(U){const E=x();function p(){E.value.success()}function _(){j({message:"\u8BA4\u8BC1\u6210\u529F",type:"success"})}function h(d){let r=["https://cn.bing.com/th?id=OHR.BeechTrees_ZH-CN9605292244_1920x1080.jpg&rf=LaDigue_1920x1080.jpg","https://cn.bing.com/th?id=OHR.ElanValley_ZH-CN9533069637_1920x1080.jpg&rf=LaDigue_1920x1080.jpg","https://cn.bing.com/th?id=OHR.WinterWaxwing_ZH-CN9435499385_1920x1080.jpg&rf=LaDigue_1920x1080.jpg","https://cn.bing.com/th?id=OHR.SquirrelsCairngorms_ZH-CN9369511507_1920x1080.jpg&rf=LaDigue_1920x1080.jpg","https://cn.bing.com/th?id=OHR.ChocoHillBohol_ZH-CN9297094265_1920x1080.jpg&rf=LaDigue_1920x1080.jpg","https://cn.bing.com/th?id=OHR.AmmoniteShell_ZH-CN9232274077_1920x1080.jpg&rf=LaDigue_1920x1080.jpg","https://cn.bing.com/th?id=OHR.IrohazakaRoad_ZH-CN9151363864_1920x1080.jpg&rf=LaDigue_1920x1080.jpg"];d({x:Math.random()*450,y:Math.random()*150,background:r[Math.floor(Math.random()*r.length)]})}return(d,r)=>{const o=i("as-puzzle-slider"),C=i("n-timeline-item"),l=i("n-timeline"),F=i("n-button"),D=i("as-auth-bar");return b(),y(A,{tableList:s(H)},{title:u(()=>[R]),describe:u(()=>[v]),content:u(()=>[e(m,null,{left:u(()=>[e(c,{code:s(a).code1,title:"\u57FA\u7840\u7528\u6CD5",id:"base"},{default:u(()=>[w]),show:u(()=>[n("div",z,[e(o)])]),_:1},8,["code"]),e(c,{code:s(a).code3,title:"\u5237\u65B0\u9891\u7387\u4EE5\u53CA\u8BA4\u8BC1\u8BEF\u5DEE",id:"refresh-frequency"},{default:u(()=>[e(l,null,{default:u(()=>[e(C,{type:"success",content:`\u5982\u679C\u8BA4\u8BC1\u5931\u8D25\u540E\uFF0C\u6ED1\u5757\u4F1A\u81EA\u52A8\u5F52\u4F4D\uFF0C\u4F46\u662F\u62FC\u56FE\u548C\u80CC\u666F\u4E0D\u4F1A\u6709\u4EFB\u4F55\u6539\u53D8\uFF0C\u4F46\u662F\u4E3A\u4E86\u5B89\u5168\u8003\u8651\uFF0C
                                \u5728\u9519\u8BEF\u6B21\u6570\u8D85\u8FC7\u9650\u5236\u540E\u4F1A\u8C03\u7528refresh\u65B9\u6CD5\u8BF7\u6C42\u65B0\u7684\u4F4D\u7F6E\u8DDF\u80CC\u666F\u56FE\u7247\uFF0C\u9ED8\u8BA4\u7684\u6B21\u6570\u662F3\uFF0C\u5982\u679C\u60F3\u8981\u81EA\u5DF1\u8BBE\u7F6E\uFF0C\u53EF\u4EE5\u9009\u62E9\u4F7F\u7528refreshFrequency\u53C2\u6570\u8BBE\u7F6E`}),e(C,{type:"success",content:"\u5F53\u4E24\u4E2A\u6ED1\u5757\u4E4B\u95F4\u6EE1\u8DB3\u4E00\u5B9A\u8DDD\u79BB\u65F6\u4F1A\u8BA4\u8BC1\u6210\u529F\uFF0C\u8FD9\u4E2A\u8DDD\u79BB\u9ED8\u8BA4\u4E3A5px\uFF0C\u4E5F\u53EF\u4EE5\u9009\u62E9\u4F7F\u7528errorRange\u53C2\u6570\u8BBE\u7F6E\u3002"})]),_:1})]),show:u(()=>[n("div",N,[e(o,{refreshFrequency:5,errorRange:10})])]),_:1},8,["code"])]),right:u(()=>[e(c,{code:s(a).code2,title:"\u7ED3\u5408\u8BA4\u8BC1\u6A21\u5757\u4F7F\u7528",id:"with-auth"},{default:u(()=>[L,e(F,{size:"tiny",secondary:"",strong:""},{default:u(()=>[O]),_:1}),Z,e(F,{size:"tiny",secondary:"",strong:""},{default:u(()=>[M]),_:1}),k,e(F,{size:"tiny",secondary:"",strong:"",type:"success"},{default:u(()=>[V]),_:1}),q]),show:u(()=>[n("div",T,[e(D,{ref:(B,g)=>{g.authBarRef=B,E.value=B}},{default:u(()=>[e(o,{success:p})]),_:1},512)])]),_:1},8,["code"]),e(c,{code:s(a).code4,title:"\u81EA\u5B9A\u4E49\u80CC\u666F\u56FE\u7247\u4EE5\u53CA\u6ED1\u5757\u4F4D\u7F6E",id:"customer-background"},{show:u(()=>[n("div",J,[e(o,{refresh:h})])]),default:u(()=>[W,e(F,{size:"tiny",secondary:"",strong:""},{default:u(()=>[S]),_:1}),I,e(F,{size:"tiny",secondary:"",strong:"",type:"success"},{default:u(()=>[P]),_:1}),G]),_:1},8,["code"]),e(c,{code:s(a).code5,title:"\u8BA4\u8BC1\u6210\u529F",id:"success"},{show:u(()=>[n("div",Q,[e(o,{success:_})])]),default:u(()=>[K]),_:1},8,["code"])]),_:1})]),_:1},8,["tableList"])}}});export{eu as default};
