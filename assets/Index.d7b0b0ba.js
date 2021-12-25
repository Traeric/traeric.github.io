import{D as A,C as f,a as b}from"./CodePanel.d5b28c81.js";import{_ as y}from"./index.15a71c98.js";import{e as F,r as i,o as B,c as h,w as t,f as u,s as e,j as p}from"./vendor.e6d22bf6.js";import"./commonFunc.c6b8e963.js";const m={codeBase:`<template>
    <div class="as-row">
        <as-button>\u9ED8\u8BA4\u6309\u94AE</as-button>
        <as-button type="primary">\u5E38\u89C4\u6309\u94AE</as-button>
        <as-button type="positive">\u79EF\u6781\u6309\u94AE</as-button>
        <as-button type="warning">\u8B66\u544A\u6309\u94AE</as-button>
        <as-button type="negative">\u6D88\u6781\u6309\u94AE</as-button>
    </div>
    <div class="as-row">
        <as-button>\u9ED8\u8BA4\u6309\u94AE</as-button>
        <as-button type="primary" plain>\u5E38\u89C4\u6309\u94AE</as-button>
        <as-button type="positive" plain>\u79EF\u6781\u6309\u94AE</as-button>
        <as-button type="warning" plain>\u8B66\u544A\u6309\u94AE</as-button>
        <as-button type="negative" plain>\u6D88\u6781\u6309\u94AE</as-button>
    </div>
    <div class="as-row">
        <as-button circle prefix-icon="star"></as-button>
        <as-button type="primary" circle prefix-icon="star"></as-button>
        <as-button type="positive" circle prefix-icon="star"></as-button>
        <as-button type="warning" circle prefix-icon="star"></as-button>
        <as-button type="negative" circle prefix-icon="star"></as-button>
    </div>
    <div class="as-row">
        <as-button round>\u9ED8\u8BA4\u6309\u94AE</as-button>
        <as-button type="primary" round>\u5E38\u89C4\u6309\u94AE</as-button>
        <as-button type="positive" round>\u79EF\u6781\u6309\u94AE</as-button>
        <as-button type="warning" round>\u8B66\u544A\u6309\u94AE</as-button>
        <as-button type="negative" round>\u6D88\u6781\u6309\u94AE</as-button>
    </div>
</template>`,codeIconBtn:`<template>
    <div class="as-row">
        <as-button prefix-icon="search">\u9ED8\u8BA4\u6309\u94AE</as-button>
        <as-button type="primary" prefix-icon="search">\u5E38\u89C4\u6309\u94AE</as-button>
        <as-button type="positive" prefix-icon="search">\u79EF\u6781\u6309\u94AE</as-button>
        <as-button type="warning" prefix-icon="search">\u8B66\u544A\u6309\u94AE</as-button>
        <as-button type="negative" prefix-icon="search">\u6D88\u6781\u6309\u94AE</as-button>
    </div>
    <div class="as-row">
        <as-button suffix-icon="search">\u9ED8\u8BA4\u6309\u94AE</as-button>
        <as-button type="primary" suffix-icon="search">\u5E38\u89C4\u6309\u94AE</as-button>
        <as-button type="positive" suffix-icon="search">\u79EF\u6781\u6309\u94AE</as-button>
        <as-button type="warning" suffix-icon="search">\u8B66\u544A\u6309\u94AE</as-button>
        <as-button type="negative" suffix-icon="search">\u6D88\u6781\u6309\u94AE</as-button>
    </div>
    <div class="as-row">
        <as-button prefix-icon="search"></as-button>
        <as-button type="primary" prefix-icon="search"></as-button>
        <as-button type="positive" prefix-icon="search"></as-button>
        <as-button type="warning" prefix-icon="search"></as-button>
        <as-button type="negative" prefix-icon="search"></as-button>
    </div>
</template>`,codeForbiddenBtn:`<template>
    <div class="as-row">
        <as-button disabled>\u9ED8\u8BA4\u6309\u94AE</as-button>
        <as-button type="primary" disabled>\u5E38\u89C4\u6309\u94AE</as-button>
        <as-button type="positive" disabled>\u79EF\u6781\u6309\u94AE</as-button>
        <as-button type="warning" disabled>\u8B66\u544A\u6309\u94AE</as-button>
        <as-button type="negative" disabled>\u6D88\u6781\u6309\u94AE</as-button>
    </div>
</template>`,codeLoadBtn:`<template>
    <div class="as-row">
        <as-button loading>\u9ED8\u8BA4\u6309\u94AE</as-button>
        <as-button type="primary" loading>\u5E38\u89C4\u6309\u94AE</as-button>
        <as-button type="positive" loading>\u79EF\u6781\u6309\u94AE</as-button>
        <as-button type="warning" loading>\u8B66\u544A\u6309\u94AE</as-button>
        <as-button type="negative" loading>\u6D88\u6781\u6309\u94AE</as-button>
    </div>
</template>`,codeSizeBtn:`<template>
    <div class="as-row">
        <as-button type="primary" size="mini">\u5E38\u89C4\u6309\u94AE</as-button>
        <as-button type="positive" size="small">\u79EF\u6781\u6309\u94AE</as-button>
        <as-button type="warning" size="normal">\u8B66\u544A\u6309\u94AE</as-button>
    </div>
    <div class="as-row">
        <as-button type="primary" size="mini" round>\u5E38\u89C4\u6309\u94AE</as-button>
        <as-button type="positive" size="small" round>\u79EF\u6781\u6309\u94AE</as-button>
        <as-button type="warning" size="normal" round>\u8B66\u544A\u6309\u94AE</as-button>
    </div>
    <div class="as-row">
        <as-button type="primary" size="mini" circle prefix-icon="search"></as-button>
        <as-button type="positive" size="small" circle prefix-icon="search"></as-button>
        <as-button type="warning" size="normal" circle prefix-icon="search"></as-button>
    </div>
</template>`},C={propsTableHeader:["\u5C5E\u6027","\u8BF4\u660E","\u7C7B\u578B","\u9ED8\u8BA4\u503C","\u53EF\u9009\u503C"],propsTable:[{props:"prefix-icon",describe:"\u6309\u94AE\u524D\u7F6E\u56FE\u6807",type:"String"},{props:"suffix-icon",describe:"\u6309\u94AE\u540E\u7F6E\u56FE\u6807",type:"String"},{props:"type",describe:"\u6309\u94AE\u6837\u5F0F",type:"String",selectList:["primary","positive","warning","negative"]},{props:"circle",describe:"\u662F\u5426\u5706\u5F62",type:"Boolean",selectList:["true","false"]},{props:"plain",describe:"\u80CC\u666F\u662F\u5426\u900F\u660E",type:"Boolean",selectList:["true","false"]},{props:"disabled",describe:"\u662F\u5426\u7981\u7528",type:"Boolean",selectList:["true","false"]},{props:"loading",describe:"\u662F\u5426\u52A0\u8F7D",type:"Boolean",selectList:["true","false"]},{props:"round",describe:"\u662F\u5426\u5706\u89D2",type:"Boolean",selectList:["true","false"]},{props:"size",describe:"\u6309\u94AE\u5927\u5C0F",type:"Stirng",defaultValue:"normal",selectList:["mini","small","normal"]}]},v=F({setup(){return{tableList:C,codeList:m}},components:{Document:A,CodeGather:f,CodePanel:b}}),g=e(" \u6309\u94AE\u7EC4\u4EF6 "),D=e(" \u672C\u63D2\u4EF6\u9664\u4E86\u7528\u4F5C\u767B\u5F55\u8BA4\u8BC1\uFF0C\u8FD8\u53EF\u4EE5\u63D0\u4F9B\u6709\u9650\u7684ui\u7EC4\u4EF6\u65B9\u4FBF\u5F00\u53D1\uFF0C\u4E0B\u9762\u4ECB\u7ECD\u5F00\u53D1\u4E2D\u975E\u5E38\u5E38\u7528\u7684\u6309\u94AE\u7EC4\u4EF6\u3002 "),x=e(" \u6700\u57FA\u7840\u7684\u6309\u94AE\u6709\u4E94\u4E2A\u989C\u8272\uFF0C\u53EF\u4EE5\u901A\u8FC7type\u914D\u7F6E\uFF0C\u5206\u522B\u662F\u9ED8\u8BA4\u65E0\u8272\u3001\u5E38\u89C4\u84DD\u8272\u3001\u79EF\u6781\u7EFF\u8272\u3001\u8B66\u544A\u9EC4\u8272\u3001\u6D88\u6781\u7EA2\u8272\u3002 \u9664\u6B64\u4E4B\u5916\u8FD8\u53EF\u4EE5\u901A\u8FC7"),w=e("circle"),z=e("round"),L=e("plain"),S=e("\u6765\u6539\u53D8\u6309\u94AE\u7684\u5706\u89D2\u548C\u900F\u660E\u5EA6\u3002 "),j=e("\u9ED8\u8BA4\u6309\u94AE"),P=e("\u5E38\u89C4\u6309\u94AE"),V=e("\u79EF\u6781\u6309\u94AE"),$=e("\u8B66\u544A\u6309\u94AE"),G=e("\u6D88\u6781\u6309\u94AE"),I=e("\u9ED8\u8BA4\u6309\u94AE"),N=e("\u5E38\u89C4\u6309\u94AE"),T=e("\u79EF\u6781\u6309\u94AE"),k=e("\u8B66\u544A\u6309\u94AE"),H=e("\u6D88\u6781\u6309\u94AE"),q=e("\u9ED8\u8BA4\u6309\u94AE"),J=e("\u5E38\u89C4\u6309\u94AE"),K=e("\u79EF\u6781\u6309\u94AE"),M=e("\u8B66\u544A\u6309\u94AE"),O=e("\u6D88\u6781\u6309\u94AE"),Q=e(" \u901A\u8FC7\u7ED9\u6309\u94AE\u8BBE\u7F6E\u56FE\u6807\u53EF\u4EE5\u8D4B\u4E88\u6309\u94AE\u4E0D\u540C\u7684\u610F\u4E49\uFF0C\u56FE\u6807\u652F\u6301\u663E\u793A\u5728\u524D\u9762\u548C\u540E\u9762\uFF0C\u5206\u522B\u901A\u8FC7prefix-icon\u548Csuffix-icon\u914D\u7F6E\uFF0C \u53EF\u914D\u7F6E\u7684\u503C\u53EF\u67E5\u770B"),R=e("\u5B57\u4F53\u56FE\u6807"),U=e("\u7AE0\u8282\u3002 "),W=e("\u9ED8\u8BA4\u6309\u94AE"),X=e("\u5E38\u89C4\u6309\u94AE"),Y=e("\u79EF\u6781\u6309\u94AE"),Z=e("\u8B66\u544A\u6309\u94AE"),uu=e("\u6D88\u6781\u6309\u94AE"),tu=e("\u9ED8\u8BA4\u6309\u94AE"),eu=e("\u5E38\u89C4\u6309\u94AE"),su=e("\u79EF\u6781\u6309\u94AE"),ou=e("\u8B66\u544A\u6309\u94AE"),iu=e("\u6D88\u6781\u6309\u94AE"),nu=p("p",null,"\u5982\u679C\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u5E0C\u671B\u6309\u94AE\u4E0D\u53EF\u7528\uFF0C\u53EF\u4EE5\u8BBE\u7F6Edisabled\u5C5E\u6027\u8BA9\u6309\u94AE\u5904\u4E8E\u7981\u7528\u72B6\u6001\u3002",-1),au=e(" \u8BE5\u5C5E\u6027\u4F1A\u7981\u7528\u6309\u94AE\u7684\u70B9\u51FB\u4E8B\u4EF6\u3002 "),ru=e("\u9ED8\u8BA4\u6309\u94AE"),cu=e("\u5E38\u89C4\u6309\u94AE"),du=e("\u79EF\u6781\u6309\u94AE"),pu=e("\u8B66\u544A\u6309\u94AE"),Eu=e("\u6D88\u6781\u6309\u94AE"),lu=p("p",null,"\u5728\u70B9\u8FDB\u6309\u94AE\u53D1\u9001\u8BF7\u6C42\u540E\uFF0C\u5982\u679C\u5E0C\u671B\u6309\u94AE\u5904\u4E8E\u7B49\u5F85\u72B6\u6001\uFF0C\u53EF\u4EE5\u8BBE\u7F6Eloading\u5C5E\u6027\u8BA9\u6309\u94AE\u5904\u4E8E\u7B49\u5F85\u72B6\u6001\u3002",-1),_u=e(" \u8BE5\u5C5E\u6027\u4F1A\u7981\u7528\u6309\u94AE\u7684\u70B9\u51FB\u4E8B\u4EF6\u3002 "),Au=e("\u9ED8\u8BA4\u6309\u94AE"),fu=e("\u5E38\u89C4\u6309\u94AE"),bu=e("\u79EF\u6781\u6309\u94AE"),yu=e("\u8B66\u544A\u6309\u94AE"),Fu=e("\u6D88\u6781\u6309\u94AE"),Bu=e(" \u901A\u8FC7\u8BBE\u7F6Esize\u5C5E\u6027\u5373\u53EF\u53D8\u6362\u6309\u94AE\u5C3A\u5BF8\uFF0C\u6309\u94AE\u5C3A\u5BF8\u652F\u6301\u8BBE\u7F6E"),hu=e("mini"),mu=e("small"),Cu=e("normal"),vu=e("\uFF0C\u9ED8\u8BA4\u4E3Anormal\u3002 "),gu=e("\u5E38\u89C4\u6309\u94AE"),Du=e("\u79EF\u6781\u6309\u94AE"),xu=e("\u8B66\u544A\u6309\u94AE"),wu=e("\u5E38\u89C4\u6309\u94AE"),zu=e("\u79EF\u6781\u6309\u94AE"),Lu=e("\u8B66\u544A\u6309\u94AE");function Su(n,ju,Pu,Vu,$u,Gu){const a=i("n-tag"),c=i("n-divider"),s=i("as-button"),o=i("n-space"),r=i("CodePanel"),E=i("n-button"),d=i("n-alert"),l=i("CodeGather"),_=i("Document");return B(),h(_,{tableList:n.tableList},{title:t(()=>[g]),describe:t(()=>[D]),content:t(()=>[u(l,null,{default:t(()=>[u(r,{title:"\u57FA\u7840\u7528\u6CD5",id:"base",code:n.codeList.codeBase},{default:t(()=>[x,u(a,{type:"success"},{default:t(()=>[w]),_:1}),u(c,{vertical:""}),u(a,{type:"success"},{default:t(()=>[z]),_:1}),u(c,{vertical:""}),u(a,{type:"success"},{default:t(()=>[L]),_:1}),S]),show:t(()=>[u(o,{vertical:""},{default:t(()=>[u(o,null,{default:t(()=>[u(s,null,{default:t(()=>[j]),_:1}),u(s,{type:"primary"},{default:t(()=>[P]),_:1}),u(s,{type:"positive"},{default:t(()=>[V]),_:1}),u(s,{type:"warning"},{default:t(()=>[$]),_:1}),u(s,{type:"negative"},{default:t(()=>[G]),_:1})]),_:1}),u(o,null,{default:t(()=>[u(s,null,{default:t(()=>[I]),_:1}),u(s,{type:"primary",plain:""},{default:t(()=>[N]),_:1}),u(s,{type:"positive",plain:""},{default:t(()=>[T]),_:1}),u(s,{type:"warning",plain:""},{default:t(()=>[k]),_:1}),u(s,{type:"negative",plain:""},{default:t(()=>[H]),_:1})]),_:1}),u(o,null,{default:t(()=>[u(s,{circle:"","prefix-icon":"star"}),u(s,{type:"primary",circle:"","prefix-icon":"star"}),u(s,{type:"positive",circle:"","prefix-icon":"star"}),u(s,{type:"warning",circle:"","prefix-icon":"star"}),u(s,{type:"negative",circle:"","prefix-icon":"star"})]),_:1}),u(o,null,{default:t(()=>[u(s,{round:""},{default:t(()=>[q]),_:1}),u(s,{type:"primary",round:""},{default:t(()=>[J]),_:1}),u(s,{type:"positive",round:""},{default:t(()=>[K]),_:1}),u(s,{type:"warning",round:""},{default:t(()=>[M]),_:1}),u(s,{type:"negative",round:""},{default:t(()=>[O]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),u(r,{title:"\u56FE\u6807\u6309\u94AE",id:"icon-btn",code:n.codeList.codeIconBtn},{default:t(()=>[Q,u(E,{text:"",tag:"a",href:"/component/ui/svg",type:"warning"},{default:t(()=>[R]),_:1}),U]),show:t(()=>[u(o,{vertical:""},{default:t(()=>[u(o,null,{default:t(()=>[u(s,{"prefix-icon":"search"},{default:t(()=>[W]),_:1}),u(s,{type:"primary","prefix-icon":"search"},{default:t(()=>[X]),_:1}),u(s,{type:"positive","prefix-icon":"search"},{default:t(()=>[Y]),_:1}),u(s,{type:"warning","prefix-icon":"search"},{default:t(()=>[Z]),_:1}),u(s,{type:"negative","prefix-icon":"search"},{default:t(()=>[uu]),_:1})]),_:1}),u(o,null,{default:t(()=>[u(s,{"suffix-icon":"search"},{default:t(()=>[tu]),_:1}),u(s,{type:"primary","suffix-icon":"search"},{default:t(()=>[eu]),_:1}),u(s,{type:"positive","suffix-icon":"search"},{default:t(()=>[su]),_:1}),u(s,{type:"warning","suffix-icon":"search"},{default:t(()=>[ou]),_:1}),u(s,{type:"negative","suffix-icon":"search"},{default:t(()=>[iu]),_:1})]),_:1}),u(o,null,{default:t(()=>[u(s,{"prefix-icon":"search"}),u(s,{type:"primary","prefix-icon":"search"}),u(s,{type:"positive","prefix-icon":"search"}),u(s,{type:"warning","prefix-icon":"search"}),u(s,{type:"negative","prefix-icon":"search"})]),_:1})]),_:1})]),_:1},8,["code"]),u(r,{title:"\u7981\u7528\u6309\u94AE",id:"forbidden-btn",code:n.codeList.codeForbiddenBtn},{default:t(()=>[nu,u(d,{title:"\u8B66\u544A",type:"error"},{default:t(()=>[au]),_:1})]),show:t(()=>[u(o,{vertical:""},{default:t(()=>[u(o,null,{default:t(()=>[u(s,{disabled:""},{default:t(()=>[ru]),_:1}),u(s,{type:"primary",disabled:""},{default:t(()=>[cu]),_:1}),u(s,{type:"positive",disabled:""},{default:t(()=>[du]),_:1}),u(s,{type:"warning",disabled:""},{default:t(()=>[pu]),_:1}),u(s,{type:"negative",disabled:""},{default:t(()=>[Eu]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),u(r,{title:"\u52A0\u8F7D\u6309\u94AE",id:"load-btn",code:n.codeList.codeLoadBtn},{default:t(()=>[lu,u(d,{title:"\u8B66\u544A",type:"error"},{default:t(()=>[_u]),_:1})]),show:t(()=>[u(o,{vertical:""},{default:t(()=>[u(o,null,{default:t(()=>[u(s,{loading:""},{default:t(()=>[Au]),_:1}),u(s,{type:"primary",loading:""},{default:t(()=>[fu]),_:1}),u(s,{type:"positive",loading:""},{default:t(()=>[bu]),_:1}),u(s,{type:"warning",loading:""},{default:t(()=>[yu]),_:1}),u(s,{type:"negative",loading:""},{default:t(()=>[Fu]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),u(r,{title:"\u6309\u94AE\u5C3A\u5BF8",id:"size-btn",code:n.codeList.codeSizeBtn},{default:t(()=>[Bu,u(a,{type:"warning"},{default:t(()=>[hu]),_:1}),u(c,{vertical:""}),u(a,{type:"warning"},{default:t(()=>[mu]),_:1}),u(c,{vertical:""}),u(a,{type:"warning"},{default:t(()=>[Cu]),_:1}),vu]),show:t(()=>[u(o,{vertical:""},{default:t(()=>[u(o,{style:{"align-items":"flex-end"}},{default:t(()=>[u(s,{type:"primary",size:"mini"},{default:t(()=>[gu]),_:1}),u(s,{type:"positive",size:"small"},{default:t(()=>[Du]),_:1}),u(s,{type:"warning",size:"normal"},{default:t(()=>[xu]),_:1})]),_:1}),u(o,{style:{"align-items":"flex-end"}},{default:t(()=>[u(s,{type:"primary",size:"mini",round:""},{default:t(()=>[wu]),_:1}),u(s,{type:"positive",size:"small",round:""},{default:t(()=>[zu]),_:1}),u(s,{type:"warning",size:"normal",round:""},{default:t(()=>[Lu]),_:1})]),_:1}),u(o,{style:{"align-items":"flex-end"}},{default:t(()=>[u(s,{type:"primary",size:"mini",circle:"","prefix-icon":"search"}),u(s,{type:"positive",size:"small",circle:"","prefix-icon":"search"}),u(s,{type:"warning",size:"normal",circle:"","prefix-icon":"search"})]),_:1})]),_:1})]),_:1},8,["code"])]),_:1})]),_:1},8,["tableList"])}var Hu=y(v,[["render",Su]]);export{Hu as default};
