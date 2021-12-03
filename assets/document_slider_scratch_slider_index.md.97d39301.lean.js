import{b as n,r as s,o as a,c as t,d as e,w as c,a as p,e as l,f as o}from"./app.c9cff4a5.js";import{i as u}from"./customer.f72bbfb1.js";const i=p('',5),r=l("div",{class:"language-vue line-numbers-mode"},[l("pre",null,[l("code",null,[l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"<"),o("template")]),l("span",{class:"token punctuation"},">")]),o("\n    "),l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"<"),o("div")]),o(),l("span",{class:"token attr-name"},"class"),l("span",{class:"token attr-value"},[l("span",{class:"token punctuation attr-equals"},"="),l("span",{class:"token punctuation"},'"'),o("wrap"),l("span",{class:"token punctuation"},'"')]),o(),l("span",{class:"token special-attr"},[l("span",{class:"token attr-name"},"style"),l("span",{class:"token attr-value"},[l("span",{class:"token punctuation attr-equals"},"="),l("span",{class:"token punctuation"},'"'),l("span",{class:"token value css language-css"},[l("span",{class:"token property"},"width"),l("span",{class:"token punctuation"},":"),o(" 300px"),l("span",{class:"token punctuation"},";")]),l("span",{class:"token punctuation"},'"')])]),l("span",{class:"token punctuation"},">")]),o("\n        "),l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"<"),o("as-scratch-slider")]),o(),l("span",{class:"token punctuation"},"/>")]),o("\n    "),l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"</"),o("div")]),l("span",{class:"token punctuation"},">")]),o("\n"),l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"</"),o("template")]),l("span",{class:"token punctuation"},">")]),o("\n")])]),l("div",{class:"line-numbers-wrapper"},[l("span",{class:"line-number"},"1"),l("br"),l("span",{class:"line-number"},"2"),l("br"),l("span",{class:"line-number"},"3"),l("br"),l("span",{class:"line-number"},"4"),l("br"),l("span",{class:"line-number"},"5"),l("br")])],-1),k=l("h2",{id:"自定义背景图片",tabindex:"-1"},[o("自定义背景图片 "),l("a",{class:"header-anchor",href:"#自定义背景图片","aria-hidden":"true"},"#")],-1),b=l("p",null,[o("拼图模块有一个默认背景，如果不想使用该默认背景可以自己替换，通过"),l("code",null,"refresh"),o("方法传递即可完成。")],-1),d=l("div",{class:"warning custom-block"},[l("p",{class:"custom-block-title"},"提示"),l("p",null,[o("在认证失败的时也会触发"),l("code",null,"refresh"),o("方法更换背景。")])],-1),g=l("div",{class:"language-vue line-numbers-mode"},[l("pre",null,[l("code",null,[l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"<"),o("template")]),l("span",{class:"token punctuation"},">")]),o("\n    "),l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"<"),o("div")]),o(),l("span",{class:"token attr-name"},"class"),l("span",{class:"token attr-value"},[l("span",{class:"token punctuation attr-equals"},"="),l("span",{class:"token punctuation"},'"'),o("wrap"),l("span",{class:"token punctuation"},'"')]),o(),l("span",{class:"token special-attr"},[l("span",{class:"token attr-name"},"style"),l("span",{class:"token attr-value"},[l("span",{class:"token punctuation attr-equals"},"="),l("span",{class:"token punctuation"},'"'),l("span",{class:"token value css language-css"},[l("span",{class:"token property"},"width"),l("span",{class:"token punctuation"},":"),o(" 300px"),l("span",{class:"token punctuation"},";")]),l("span",{class:"token punctuation"},'"')])]),l("span",{class:"token punctuation"},">")]),o("\n        "),l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"<"),o("as-scratch-slider")]),o(),l("span",{class:"token attr-name"},":refresh"),l("span",{class:"token attr-value"},[l("span",{class:"token punctuation attr-equals"},"="),l("span",{class:"token punctuation"},'"'),o("refresh"),l("span",{class:"token punctuation"},'"')]),o(),l("span",{class:"token punctuation"},"/>")]),o("\n    "),l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"</"),o("div")]),l("span",{class:"token punctuation"},">")]),o("\n"),l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"</"),o("template")]),l("span",{class:"token punctuation"},">")]),o("\n\n"),l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"<"),o("script")]),l("span",{class:"token punctuation"},">")]),l("span",{class:"token script"},[l("span",{class:"token language-javascript"},[o("\n"),l("span",{class:"token keyword"},"export"),o(),l("span",{class:"token keyword"},"default"),o(),l("span",{class:"token punctuation"},"{"),o("\n    "),l("span",{class:"token function"},"setup"),l("span",{class:"token punctuation"},"("),l("span",{class:"token punctuation"},")"),o(),l("span",{class:"token punctuation"},"{"),o("\n        "),l("span",{class:"token keyword"},"function"),o(),l("span",{class:"token function"},"refresh"),l("span",{class:"token punctuation"},"("),l("span",{class:"token parameter"},"callback"),l("span",{class:"token punctuation"},")"),o(),l("span",{class:"token punctuation"},"{"),o("\n            "),l("span",{class:"token keyword"},"let"),o(" bgArr "),l("span",{class:"token operator"},"="),o(),l("span",{class:"token punctuation"},"["),l("span",{class:"token string"},"'https://cn.bing.com/th?id=OHR.BeechTrees_ZH-CN9605292244_1920x1080.jpg&rf=LaDigue_1920x1080.jpg'"),l("span",{class:"token punctuation"},","),o("\n                "),l("span",{class:"token string"},"'https://cn.bing.com/th?id=OHR.ElanValley_ZH-CN9533069637_1920x1080.jpg&rf=LaDigue_1920x1080.jpg'"),l("span",{class:"token punctuation"},","),o("\n                "),l("span",{class:"token string"},"'https://cn.bing.com/th?id=OHR.WinterWaxwing_ZH-CN9435499385_1920x1080.jpg&rf=LaDigue_1920x1080.jpg'"),l("span",{class:"token punctuation"},","),o("\n                "),l("span",{class:"token string"},"'https://cn.bing.com/th?id=OHR.SquirrelsCairngorms_ZH-CN9369511507_1920x1080.jpg&rf=LaDigue_1920x1080.jpg'"),l("span",{class:"token punctuation"},","),o("\n                "),l("span",{class:"token string"},"'https://cn.bing.com/th?id=OHR.ChocoHillBohol_ZH-CN9297094265_1920x1080.jpg&rf=LaDigue_1920x1080.jpg'"),l("span",{class:"token punctuation"},","),o("\n                "),l("span",{class:"token string"},"'https://cn.bing.com/th?id=OHR.AmmoniteShell_ZH-CN9232274077_1920x1080.jpg&rf=LaDigue_1920x1080.jpg'"),l("span",{class:"token punctuation"},","),o("\n                "),l("span",{class:"token string"},"'https://cn.bing.com/th?id=OHR.IrohazakaRoad_ZH-CN9151363864_1920x1080.jpg&rf=LaDigue_1920x1080.jpg'"),l("span",{class:"token punctuation"},"]"),l("span",{class:"token punctuation"},";"),o("\n            "),l("span",{class:"token function"},"callback"),l("span",{class:"token punctuation"},"("),l("span",{class:"token punctuation"},"{"),o("\n                "),l("span",{class:"token string"},'"background"'),l("span",{class:"token operator"},":"),o(" bgArr"),l("span",{class:"token punctuation"},"["),o("Math"),l("span",{class:"token punctuation"},"."),l("span",{class:"token function"},"floor"),l("span",{class:"token punctuation"},"("),o("Math"),l("span",{class:"token punctuation"},"."),l("span",{class:"token function"},"random"),l("span",{class:"token punctuation"},"("),l("span",{class:"token punctuation"},")"),o(),l("span",{class:"token operator"},"*"),o(" bgArr"),l("span",{class:"token punctuation"},"."),o("length"),l("span",{class:"token punctuation"},")"),l("span",{class:"token punctuation"},"]"),o("\n            "),l("span",{class:"token punctuation"},"}"),l("span",{class:"token punctuation"},")"),l("span",{class:"token punctuation"},";"),o("\n        "),l("span",{class:"token punctuation"},"}"),o("\n\n        "),l("span",{class:"token keyword"},"return"),o(),l("span",{class:"token punctuation"},"{"),o("\n            refresh\n        "),l("span",{class:"token punctuation"},"}"),l("span",{class:"token punctuation"},";"),o("\n    "),l("span",{class:"token punctuation"},"}"),o("\n"),l("span",{class:"token punctuation"},"}"),o("\n")])]),l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"</"),o("script")]),l("span",{class:"token punctuation"},">")]),o("\n")])]),l("div",{class:"line-numbers-wrapper"},[l("span",{class:"line-number"},"1"),l("br"),l("span",{class:"line-number"},"2"),l("br"),l("span",{class:"line-number"},"3"),l("br"),l("span",{class:"line-number"},"4"),l("br"),l("span",{class:"line-number"},"5"),l("br"),l("span",{class:"line-number"},"6"),l("br"),l("span",{class:"line-number"},"7"),l("br"),l("span",{class:"line-number"},"8"),l("br"),l("span",{class:"line-number"},"9"),l("br"),l("span",{class:"line-number"},"10"),l("br"),l("span",{class:"line-number"},"11"),l("br"),l("span",{class:"line-number"},"12"),l("br"),l("span",{class:"line-number"},"13"),l("br"),l("span",{class:"line-number"},"14"),l("br"),l("span",{class:"line-number"},"15"),l("br"),l("span",{class:"line-number"},"16"),l("br"),l("span",{class:"line-number"},"17"),l("br"),l("span",{class:"line-number"},"18"),l("br"),l("span",{class:"line-number"},"19"),l("br"),l("span",{class:"line-number"},"20"),l("br"),l("span",{class:"line-number"},"21"),l("br"),l("span",{class:"line-number"},"22"),l("br"),l("span",{class:"line-number"},"23"),l("br"),l("span",{class:"line-number"},"24"),l("br"),l("span",{class:"line-number"},"25"),l("br"),l("span",{class:"line-number"},"26"),l("br"),l("span",{class:"line-number"},"27"),l("br"),l("span",{class:"line-number"},"28"),l("br")])],-1),m=l("h2",{id:"认证成功",tabindex:"-1"},[o("认证成功 "),l("a",{class:"header-anchor",href:"#认证成功","aria-hidden":"true"},"#")],-1),h=l("p",null,[o("在用户认证成功后需要触发回调函数进行成功后的操作，本模块提供了"),l("code",null,"success"),o("属性来执行认证成功后的回调。")],-1),_=l("div",{class:"language-vue line-numbers-mode"},[l("pre",null,[l("code",null,[l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"<"),o("template")]),l("span",{class:"token punctuation"},">")]),o("\n    "),l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"<"),o("div")]),o(),l("span",{class:"token attr-name"},"class"),l("span",{class:"token attr-value"},[l("span",{class:"token punctuation attr-equals"},"="),l("span",{class:"token punctuation"},'"'),o("wrap"),l("span",{class:"token punctuation"},'"')]),o(),l("span",{class:"token special-attr"},[l("span",{class:"token attr-name"},"style"),l("span",{class:"token attr-value"},[l("span",{class:"token punctuation attr-equals"},"="),l("span",{class:"token punctuation"},'"'),l("span",{class:"token value css language-css"},[l("span",{class:"token property"},"width"),l("span",{class:"token punctuation"},":"),o(" 300px"),l("span",{class:"token punctuation"},";")]),l("span",{class:"token punctuation"},'"')])]),l("span",{class:"token punctuation"},">")]),o("\n        "),l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"<"),o("as-scratch-slider")]),o(),l("span",{class:"token attr-name"},":success"),l("span",{class:"token attr-value"},[l("span",{class:"token punctuation attr-equals"},"="),l("span",{class:"token punctuation"},'"'),o("success"),l("span",{class:"token punctuation"},'"')]),o(),l("span",{class:"token punctuation"},"/>")]),o("\n    "),l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"</"),o("div")]),l("span",{class:"token punctuation"},">")]),o("\n"),l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"</"),o("template")]),l("span",{class:"token punctuation"},">")]),o("\n\n"),l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"<"),o("script")]),l("span",{class:"token punctuation"},">")]),l("span",{class:"token script"},[l("span",{class:"token language-javascript"},[o("\n"),l("span",{class:"token keyword"},"export"),o(),l("span",{class:"token keyword"},"default"),o(),l("span",{class:"token punctuation"},"{"),o("\n    methods"),l("span",{class:"token operator"},":"),o(),l("span",{class:"token punctuation"},"{"),o("\n        "),l("span",{class:"token function"},"success"),l("span",{class:"token punctuation"},"("),l("span",{class:"token punctuation"},")"),o(),l("span",{class:"token punctuation"},"{"),o("\n            "),l("span",{class:"token keyword"},"this"),l("span",{class:"token punctuation"},"."),l("span",{class:"token function"},"$as_message"),l("span",{class:"token punctuation"},"("),l("span",{class:"token punctuation"},"{"),o("\n                message"),l("span",{class:"token operator"},":"),o(),l("span",{class:"token string"},'"认证成功"'),l("span",{class:"token punctuation"},","),o("\n                type"),l("span",{class:"token operator"},":"),o(),l("span",{class:"token string"},'"success"'),l("span",{class:"token punctuation"},","),o("\n                elementLike"),l("span",{class:"token operator"},":"),o(),l("span",{class:"token boolean"},"true"),o("\n            "),l("span",{class:"token punctuation"},"}"),l("span",{class:"token punctuation"},")"),l("span",{class:"token punctuation"},";"),o("\n        "),l("span",{class:"token punctuation"},"}"),o("\n    "),l("span",{class:"token punctuation"},"}"),l("span",{class:"token punctuation"},","),o("\n"),l("span",{class:"token punctuation"},"}"),o("\n")])]),l("span",{class:"token tag"},[l("span",{class:"token tag"},[l("span",{class:"token punctuation"},"</"),o("script")]),l("span",{class:"token punctuation"},">")]),o("\n")])]),l("div",{class:"line-numbers-wrapper"},[l("span",{class:"line-number"},"1"),l("br"),l("span",{class:"line-number"},"2"),l("br"),l("span",{class:"line-number"},"3"),l("br"),l("span",{class:"line-number"},"4"),l("br"),l("span",{class:"line-number"},"5"),l("br"),l("span",{class:"line-number"},"6"),l("br"),l("span",{class:"line-number"},"7"),l("br"),l("span",{class:"line-number"},"8"),l("br"),l("span",{class:"line-number"},"9"),l("br"),l("span",{class:"line-number"},"10"),l("br"),l("span",{class:"line-number"},"11"),l("br"),l("span",{class:"line-number"},"12"),l("br"),l("span",{class:"line-number"},"13"),l("br"),l("span",{class:"line-number"},"14"),l("br"),l("span",{class:"line-number"},"15"),l("br"),l("span",{class:"line-number"},"16"),l("br"),l("span",{class:"line-number"},"17"),l("br"),l("span",{class:"line-number"},"18"),l("br"),l("span",{class:"line-number"},"19"),l("br")])],-1),f=p('',3),v='{"title":"刮刮卡认证","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法"},{"level":2,"title":"自定义背景图片","slug":"自定义背景图片"},{"level":2,"title":"认证成功","slug":"认证成功"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"事件","slug":"事件"}],"relativePath":"document/slider/scratch_slider/index.md","lastUpdated":1638443718089}',x={};const w=Object.assign(x,{setup:function(p){return n((()=>{u()})),(n,p)=>{const l=s("CodeRun");return a(),t("div",null,[i,e(l,{auto:""},{default:c((()=>[r])),_:1}),k,b,d,e(l,{auto:""},{default:c((()=>[g])),_:1}),m,h,e(l,{auto:""},{default:c((()=>[_])),_:1}),f])}}});export{v as __pageData,w as default};
