import{_ as e,f as t,g as n,h as s,r as a,o,c as r,d as i,j as l,b as c,u as d,i as u,k as p,w as m,t as g,e as h,l as f,a as y}from"./app.d521e2e3.js";const _={class:"wrap"},b={class:"show"};var v=e(t({props:{theme:{type:String,default:"light"}},setup(e){const t=e,p=n(),m=n(),g=n(),h=n();let f=n(""),y=!1;function v(){y?(p.value.style.borderTop="1px solid transparent",p.value.style.height="0"):(p.value.style.borderTop="1px solid #dcdfe6",p.value.style.height=`${g.value.offsetHeight}px`),y=!y}function k(){const e=document.createElement("input");e.value=f.value,document.body.appendChild(e),e.select(),document.execCommand("Copy"),e.remove(),u({message:"复制成功",type:"success"})}return s((()=>{f.value=m.value.innerText,h.value.formatCode(f.value)})),(e,n)=>{const s=a("as-code-block");return o(),r("div",_,[i("div",{class:"operation"},[i("div",{class:"sorce-code"},[i("i",{class:"iconfont icon-source-code",title:"查看源码",onClick:v})]),i("div",{class:"sorce-code"},[i("i",{class:"iconfont icon-fuzhiwenjian",title:"复制代码",onClick:k})])]),i("div",b,[l(e.$slots,"show",{},void 0,!0)]),i("div",{class:"code",ref:(e,t)=>{t.codeRef=e,p.value=e}},[i("div",{ref:(e,t)=>{t.innerCodeRef=e,g.value=e},class:"inner-code"},[c(s,{theme:d(t).theme,ref:(e,t)=>{t.asCodeBlockRef=e,h.value=e}},null,8,["theme"]),i("div",{class:"code-origin",ref:(e,t)=>{t.codeOriginRef=e,m.value=e}},[l(e.$slots,"code",{},void 0,!0)],512)],512)],512)])}}}),[["__scopeId","data-v-11f05814"]]);const k=h("Message消息基础用法"),C=h("VNode消息基础用法"),M=["textContent"],x=t({setup(e){function t(){u("Message提示基础用法")}function n(){u(f("p",null,[f("span",null,"Message消息支持 "),f("i",{style:"color: teal"},"VNode")]))}return(e,s)=>{const r=a("as-button");return o(),p(v,null,{show:m((()=>[c(r,{type:"primary",onClick:t,style:{"margin-right":"20px"}},{default:m((()=>[k])),_:1}),c(r,{type:"positive",onClick:n},{default:m((()=>[C])),_:1})])),code:m((()=>[i("div",{textContent:g(d('<template>\n    <as-button type="primary" @click="messageTip">测试</as-button>\n    <as-button type="warning" @click="messageVNode">VNode消息基础用法</as-button>\n</template>\n<script setup>\n    import {AsMessage} from "awesome-slider-auth";\n    import { h } from "vue";\n    \n    function messageTip() {\n        AsMessage("Message提示基础用法");\n    }\n\n    function messageVNode() {\n        AsMessage(h(\'p\', null, [\n            h(\'span\', null, \'Message消息支持 \'),\n            h(\'i\', { style: \'color: teal\' }, \'VNode\'),\n        ]));\n    }\n<\/script>'))},null,8,M)])),_:1})}}}),A=h("Message消息基础用法"),w=h("VNode消息基础用法"),E=["textContent"],T=t({setup(e){function t(){u({message:"Message提示基础用法",elementLike:!0})}function n(){u({message:f("p",null,[f("span",null,"Message消息支持 "),f("i",{style:"color: teal"},"VNode")]),elementLike:!0})}return(e,s)=>{const r=a("as-button");return o(),p(v,null,{show:m((()=>[c(r,{type:"warning",onClick:t,style:{"margin-right":"20px"}},{default:m((()=>[A])),_:1}),c(r,{type:"negative",onClick:n},{default:m((()=>[w])),_:1})])),code:m((()=>[i("div",{textContent:g(d('<template>\n    <as-button type="warning" @click="messageTip">Message消息基础用法</as-button>\n    <as-button type="negative" @click="messageVNode">VNode消息基础用法</as-button>\n</template>\n<script setup>\n    import {AsMessage} from "awesome-slider-auth";\n    import { h } from "vue";\n    \n    function messageTip() {\n        AsMessage({\n            message: "Message提示基础用法",\n            elementLike: true\n        });\n    }\n\n    function messageVNode() {\n        AsMessage({\n            message: h(\'p\', null, [\n                h(\'span\', null, \'Message消息支持 \'),\n                h(\'i\', { style: \'color: teal\' }, \'VNode\'),\n            ]),\n            elementLike: true\n        });\n    }\n<\/script>'))},null,8,E)])),_:1})}}}),S=h("Info消息"),I=h("Success消息"),N=h("Warn消息"),V=h("Error消息"),L=i("p",null,null,-1),W=h("Info消息"),P=h("Success消息"),R=h("Warn消息"),D=h("Error消息"),j=["textContent"],$=t({setup(e){function t(){u({message:"Info提示基础用法",type:"info"})}function n(){u({message:"Success提示基础用法",type:"success"})}function s(){u({message:"Warn提示基础用法",type:"warn"})}function r(){u({message:"Error提示基础用法",type:"error"})}function l(){u({message:"Info提示基础用法",type:"info",elementLike:!0})}function h(){u({message:"Success提示基础用法",type:"success",elementLike:!0})}function f(){u({message:"Warn提示基础用法",type:"warn",elementLike:!0})}function y(){u({message:"Error提示基础用法",type:"error",elementLike:!0})}return(e,u)=>{const _=a("as-button");return o(),p(v,null,{show:m((()=>[c(_,{type:"primary",onClick:t,style:{"margin-right":"20px"}},{default:m((()=>[S])),_:1}),c(_,{type:"positive",onClick:n,style:{"margin-right":"20px"}},{default:m((()=>[I])),_:1}),c(_,{type:"warning",onClick:s,style:{"margin-right":"20px"}},{default:m((()=>[N])),_:1}),c(_,{type:"negative",onClick:r},{default:m((()=>[V])),_:1}),L,c(_,{type:"primary",onClick:l,plain:"",style:{"margin-right":"20px"}},{default:m((()=>[W])),_:1}),c(_,{type:"positive",onClick:h,plain:"",style:{"margin-right":"20px"}},{default:m((()=>[P])),_:1}),c(_,{type:"warning",onClick:f,plain:"",style:{"margin-right":"20px"}},{default:m((()=>[R])),_:1}),c(_,{type:"negative",onClick:y,plain:""},{default:m((()=>[D])),_:1})])),code:m((()=>[i("div",{textContent:g(d('<template>\n    <as-button type="primary" @click="messageInfo">Info消息</as-button>\n    <as-button type="positive" @click="messageSuccess">Success消息</as-button>\n    <as-button type="warning" @click="messageWarn">Warn消息</as-button>\n    <as-button type="negative" @click="messageError">Error消息</as-button>\n\n    <as-button type="primary" @click="messageElementInfo">eleemnt Info消息</as-button>\n    <as-button type="positive" @click="messageElementSuccess">element Success消息</as-button>\n    <as-button type="warning" @click="messageElementWarn">element Warn消息</as-button>\n    <as-button type="negative" @click="messageElementError">element Error消息</as-button>\n</template>\n<script setup>\n    import {AsMessage} from "awesome-slider-auth";\n    \n    function messageInfo() {\n        AsMessage({\n            message: "Info提示基础用法",\n            type: "info"\n        });\n    }\n\n    function messageSuccess() {\n        AsMessage({\n            message: "Success提示基础用法",\n            type: "success"\n        });\n    }\n\n    function messageWarn() {\n        AsMessage({\n            message: "Warn提示基础用法",\n            type: "warn"\n        });\n    }\n\n    function messageError() {\n        AsMessage({\n            message: "Error提示基础用法",\n            type: "error"\n        });\n    }\n\n    function messageElementInfo() {\n        AsMessage({\n            message: "Info提示基础用法",\n            type: "info",\n            elementLike: true,\n        });\n    }\n\n    function messageElementSuccess() {\n        AsMessage({\n            message: "Success提示基础用法",\n            type: "success",\n            elementLike: true\n        });\n    }\n\n    function messageElementWarn() {\n        AsMessage({\n            message: "Warn提示基础用法",\n            type: "warn",\n            elementLike: true\n        });\n    }\n\n    function messageElementError() {\n        AsMessage({\n            message: "Error提示基础用法",\n            type: "error",\n            elementLike: true\n        });\n    }\n<\/script>'))},null,8,j)])),_:1})}}}),z=h("设置关闭时间"),B=h("关闭时触发回调"),O=["textContent"],H=t({setup(e){function t(){u({message:"设置关闭时间为1秒",duration:1e3})}function n(){u({message:"触发关闭回调",duration:3e3,onClose:()=>{u("关闭回调触发成功！")}})}return(e,s)=>{const r=a("as-button");return o(),p(v,null,{show:m((()=>[c(r,{type:"primary",onClick:t,style:{"margin-right":"20px"}},{default:m((()=>[z])),_:1}),c(r,{type:"positive",onClick:n},{default:m((()=>[B])),_:1})])),code:m((()=>[i("div",{textContent:g(d('<template>\n    <as-button type="primary" @click="messageDuration">设置关闭时间</as-button>\n    <as-button type="positive" @click="messageClose">关闭时触发回调</as-button>\n</template>\n<script setup>\n    import {AsMessage} from "awesome-slider-auth";\n    \n    function messageDuration() {\n        AsMessage({\n            message: "设置关闭时间为1秒",\n            duration: 1000\n        });\n    }\n\n    function messageClose() {\n        AsMessage({\n            message: \'触发关闭回调\',\n            duration: 3000,\n            onClose: () => {\n                AsMessage("关闭回调触发成功！");\n            }\n        });\n    }\n<\/script>'))},null,8,O)])),_:1})}}}),U=y('',4),q=i("h2",{id:"不同风格",tabindex:"-1"},[h("不同风格 "),i("a",{class:"header-anchor",href:"#不同风格","aria-hidden":"true"},"#")],-1),F=i("p",null,[h("除了默认的风格，Message还支持"),i("a",{href:"https://element-plus.gitee.io/zh-CN/component/message.html",target:"_blank",rel:"noopener noreferrer"},"Element Plus"),h("风格，设置"),i("code",null,"elementLike"),h("为true即可。")],-1),G=y('',2),J=i("h2",{id:"关闭时间和关闭回调",tabindex:"-1"},[h("关闭时间和关闭回调 "),i("a",{class:"header-anchor",href:"#关闭时间和关闭回调","aria-hidden":"true"},"#")],-1),K=i("p",null,[h("Message的展示时间可以由"),i("code",null,"duration"),h("控制，单位为ms，此外，在关闭时会触发一个回调函数"),i("code",null,"onClose"),h("。")],-1),Q=y('',5),X='{"title":"Message消息提示","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法"},{"level":2,"title":"不同风格","slug":"不同风格"},{"level":2,"title":"不同类型","slug":"不同类型"},{"level":2,"title":"关闭时间和关闭回调","slug":"关闭时间和关闭回调"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"属性","slug":"属性"},{"level":3,"title":"事件","slug":"事件"}],"relativePath":"document/ui/message/index.md","lastUpdated":1636612626878}',Y={};const Z=Object.assign(Y,{setup:function(e){return(e,t)=>(o(),r("div",null,[U,c(x),q,F,c(T),G,c($),J,K,c(H),Q]))}});export{X as __pageData,Z as default};
