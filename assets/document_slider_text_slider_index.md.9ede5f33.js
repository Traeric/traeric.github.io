import{b as n,r as s,o as a,c as t,d as e,w as c,e as p,f as l,a as o}from"./app.aedebf93.js";import{i as u}from"./customer.d469e4ae.js";const i=p("h1",{id:"文字点选认证",tabindex:"-1"},[l("文字点选认证 "),p("a",{class:"header-anchor",href:"#文字点选认证","aria-hidden":"true"},"#")],-1),r=p("p",null,"当点击登录或注册时，按照提示按顺序点击图中文字完成认证。",-1),k=p("h2",{id:"基础用法",tabindex:"-1"},[l("基础用法 "),p("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1),b=p("p",null,"在需要用到文字点选认证的地方添加相关标签即可，滑块的宽度可自适应父级标签。",-1),d=p("div",{class:"language-vue line-numbers-mode"},[p("pre",null,[p("code",null,[p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"<"),l("template")]),p("span",{class:"token punctuation"},">")]),l("\n    "),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"<"),l("div")]),l(),p("span",{class:"token attr-name"},"class"),p("span",{class:"token attr-value"},[p("span",{class:"token punctuation attr-equals"},"="),p("span",{class:"token punctuation"},'"'),l("wrap"),p("span",{class:"token punctuation"},'"')]),l(),p("span",{class:"token special-attr"},[p("span",{class:"token attr-name"},"style"),p("span",{class:"token attr-value"},[p("span",{class:"token punctuation attr-equals"},"="),p("span",{class:"token punctuation"},'"'),p("span",{class:"token value css language-css"},[p("span",{class:"token property"},"width"),p("span",{class:"token punctuation"},":"),l(" 300px"),p("span",{class:"token punctuation"},";")]),p("span",{class:"token punctuation"},'"')])]),p("span",{class:"token punctuation"},">")]),l("\n        "),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"<"),l("as-text-slider")]),l(),p("span",{class:"token punctuation"},"/>")]),l("\n    "),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"</"),l("div")]),p("span",{class:"token punctuation"},">")]),l("\n"),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"</"),l("template")]),p("span",{class:"token punctuation"},">")]),l("\n")])]),p("div",{class:"line-numbers-wrapper"},[p("span",{class:"line-number"},"1"),p("br"),p("span",{class:"line-number"},"2"),p("br"),p("span",{class:"line-number"},"3"),p("br"),p("span",{class:"line-number"},"4"),p("br"),p("span",{class:"line-number"},"5"),p("br")])],-1),g=p("h2",{id:"自定义背景图片",tabindex:"-1"},[l("自定义背景图片 "),p("a",{class:"header-anchor",href:"#自定义背景图片","aria-hidden":"true"},"#")],-1),m=p("p",null,[l("点选模块的背景有一个默认值，如果不想使用该默认值可以自己替换，通过"),p("code",null,"refresh"),l("方法传递即可完成。")],-1),h=p("div",{class:"warning custom-block"},[p("p",{class:"custom-block-title"},"提示"),p("p",null,[l("在认证失败的时也会触发"),p("code",null,"refresh"),l("方法更换背景。")])],-1),f=p("div",{class:"language-vue line-numbers-mode"},[p("pre",null,[p("code",null,[p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"<"),l("template")]),p("span",{class:"token punctuation"},">")]),l("\n    "),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"<"),l("div")]),l(),p("span",{class:"token attr-name"},"class"),p("span",{class:"token attr-value"},[p("span",{class:"token punctuation attr-equals"},"="),p("span",{class:"token punctuation"},'"'),l("wrap"),p("span",{class:"token punctuation"},'"')]),l(),p("span",{class:"token special-attr"},[p("span",{class:"token attr-name"},"style"),p("span",{class:"token attr-value"},[p("span",{class:"token punctuation attr-equals"},"="),p("span",{class:"token punctuation"},'"'),p("span",{class:"token value css language-css"},[p("span",{class:"token property"},"width"),p("span",{class:"token punctuation"},":"),l(" 300px"),p("span",{class:"token punctuation"},";")]),p("span",{class:"token punctuation"},'"')])]),p("span",{class:"token punctuation"},">")]),l("\n        "),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"<"),l("as-text-slider")]),l(),p("span",{class:"token attr-name"},":refresh"),p("span",{class:"token attr-value"},[p("span",{class:"token punctuation attr-equals"},"="),p("span",{class:"token punctuation"},'"'),l("refresh"),p("span",{class:"token punctuation"},'"')]),l(),p("span",{class:"token punctuation"},"/>")]),l("\n    "),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"</"),l("div")]),p("span",{class:"token punctuation"},">")]),l("\n"),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"</"),l("template")]),p("span",{class:"token punctuation"},">")]),l("\n\n"),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"<"),l("script")]),p("span",{class:"token punctuation"},">")]),p("span",{class:"token script"},[p("span",{class:"token language-javascript"},[l("\n"),p("span",{class:"token keyword"},"export"),l(),p("span",{class:"token keyword"},"default"),l(),p("span",{class:"token punctuation"},"{"),l("\n    "),p("span",{class:"token function"},"setup"),p("span",{class:"token punctuation"},"("),p("span",{class:"token punctuation"},")"),l(),p("span",{class:"token punctuation"},"{"),l("\n        "),p("span",{class:"token keyword"},"function"),l(),p("span",{class:"token function"},"refresh"),p("span",{class:"token punctuation"},"("),p("span",{class:"token parameter"},"callback"),p("span",{class:"token punctuation"},")"),l(),p("span",{class:"token punctuation"},"{"),l("\n            "),p("span",{class:"token keyword"},"let"),l(" bgArr "),p("span",{class:"token operator"},"="),l(),p("span",{class:"token punctuation"},"["),p("span",{class:"token string"},"'https://cn.bing.com/th?id=OHR.BeechTrees_ZH-CN9605292244_1920x1080.jpg&rf=LaDigue_1920x1080.jpg'"),p("span",{class:"token punctuation"},","),l("\n                "),p("span",{class:"token string"},"'https://cn.bing.com/th?id=OHR.ElanValley_ZH-CN9533069637_1920x1080.jpg&rf=LaDigue_1920x1080.jpg'"),p("span",{class:"token punctuation"},","),l("\n                "),p("span",{class:"token string"},"'https://cn.bing.com/th?id=OHR.WinterWaxwing_ZH-CN9435499385_1920x1080.jpg&rf=LaDigue_1920x1080.jpg'"),p("span",{class:"token punctuation"},","),l("\n                "),p("span",{class:"token string"},"'https://cn.bing.com/th?id=OHR.SquirrelsCairngorms_ZH-CN9369511507_1920x1080.jpg&rf=LaDigue_1920x1080.jpg'"),p("span",{class:"token punctuation"},","),l("\n                "),p("span",{class:"token string"},"'https://cn.bing.com/th?id=OHR.ChocoHillBohol_ZH-CN9297094265_1920x1080.jpg&rf=LaDigue_1920x1080.jpg'"),p("span",{class:"token punctuation"},","),l("\n                "),p("span",{class:"token string"},"'https://cn.bing.com/th?id=OHR.AmmoniteShell_ZH-CN9232274077_1920x1080.jpg&rf=LaDigue_1920x1080.jpg'"),p("span",{class:"token punctuation"},","),l("\n                "),p("span",{class:"token string"},"'https://cn.bing.com/th?id=OHR.IrohazakaRoad_ZH-CN9151363864_1920x1080.jpg&rf=LaDigue_1920x1080.jpg'"),p("span",{class:"token punctuation"},"]"),p("span",{class:"token punctuation"},";"),l("\n            "),p("span",{class:"token function"},"callback"),p("span",{class:"token punctuation"},"("),p("span",{class:"token punctuation"},"{"),l("\n                "),p("span",{class:"token string"},'"background"'),p("span",{class:"token operator"},":"),l(" bgArr"),p("span",{class:"token punctuation"},"["),l("Math"),p("span",{class:"token punctuation"},"."),p("span",{class:"token function"},"floor"),p("span",{class:"token punctuation"},"("),l("Math"),p("span",{class:"token punctuation"},"."),p("span",{class:"token function"},"random"),p("span",{class:"token punctuation"},"("),p("span",{class:"token punctuation"},")"),l(),p("span",{class:"token operator"},"*"),l(" bgArr"),p("span",{class:"token punctuation"},"."),l("length"),p("span",{class:"token punctuation"},")"),p("span",{class:"token punctuation"},"]"),l("\n            "),p("span",{class:"token punctuation"},"}"),p("span",{class:"token punctuation"},")"),p("span",{class:"token punctuation"},";"),l("\n        "),p("span",{class:"token punctuation"},"}"),l("\n\n        "),p("span",{class:"token keyword"},"return"),l(),p("span",{class:"token punctuation"},"{"),l("\n            refresh\n        "),p("span",{class:"token punctuation"},"}"),p("span",{class:"token punctuation"},";"),l("\n    "),p("span",{class:"token punctuation"},"}"),l("\n"),p("span",{class:"token punctuation"},"}"),l("\n")])]),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"</"),l("script")]),p("span",{class:"token punctuation"},">")]),l("\n")])]),p("div",{class:"line-numbers-wrapper"},[p("span",{class:"line-number"},"1"),p("br"),p("span",{class:"line-number"},"2"),p("br"),p("span",{class:"line-number"},"3"),p("br"),p("span",{class:"line-number"},"4"),p("br"),p("span",{class:"line-number"},"5"),p("br"),p("span",{class:"line-number"},"6"),p("br"),p("span",{class:"line-number"},"7"),p("br"),p("span",{class:"line-number"},"8"),p("br"),p("span",{class:"line-number"},"9"),p("br"),p("span",{class:"line-number"},"10"),p("br"),p("span",{class:"line-number"},"11"),p("br"),p("span",{class:"line-number"},"12"),p("br"),p("span",{class:"line-number"},"13"),p("br"),p("span",{class:"line-number"},"14"),p("br"),p("span",{class:"line-number"},"15"),p("br"),p("span",{class:"line-number"},"16"),p("br"),p("span",{class:"line-number"},"17"),p("br"),p("span",{class:"line-number"},"18"),p("br"),p("span",{class:"line-number"},"19"),p("br"),p("span",{class:"line-number"},"20"),p("br"),p("span",{class:"line-number"},"21"),p("br"),p("span",{class:"line-number"},"22"),p("br"),p("span",{class:"line-number"},"23"),p("br"),p("span",{class:"line-number"},"24"),p("br"),p("span",{class:"line-number"},"25"),p("br"),p("span",{class:"line-number"},"26"),p("br"),p("span",{class:"line-number"},"27"),p("br"),p("span",{class:"line-number"},"28"),p("br")])],-1),v=p("h2",{id:"认证成功",tabindex:"-1"},[l("认证成功 "),p("a",{class:"header-anchor",href:"#认证成功","aria-hidden":"true"},"#")],-1),_=p("p",null,[l("在用户认证成功后需要触发回调函数进行成功后的操作，本模块提供了"),p("code",null,"success"),l("属性来执行认证成功后的回调。")],-1),x=p("div",{class:"language-vue line-numbers-mode"},[p("pre",null,[p("code",null,[p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"<"),l("template")]),p("span",{class:"token punctuation"},">")]),l("\n    "),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"<"),l("div")]),l(),p("span",{class:"token attr-name"},"class"),p("span",{class:"token attr-value"},[p("span",{class:"token punctuation attr-equals"},"="),p("span",{class:"token punctuation"},'"'),l("wrap"),p("span",{class:"token punctuation"},'"')]),l(),p("span",{class:"token special-attr"},[p("span",{class:"token attr-name"},"style"),p("span",{class:"token attr-value"},[p("span",{class:"token punctuation attr-equals"},"="),p("span",{class:"token punctuation"},'"'),p("span",{class:"token value css language-css"},[p("span",{class:"token property"},"width"),p("span",{class:"token punctuation"},":"),l(" 300px"),p("span",{class:"token punctuation"},";")]),p("span",{class:"token punctuation"},'"')])]),p("span",{class:"token punctuation"},">")]),l("\n        "),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"<"),l("as-text-slider")]),l(),p("span",{class:"token attr-name"},":success"),p("span",{class:"token attr-value"},[p("span",{class:"token punctuation attr-equals"},"="),p("span",{class:"token punctuation"},'"'),l("success"),p("span",{class:"token punctuation"},'"')]),l(),p("span",{class:"token punctuation"},"/>")]),l("\n    "),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"</"),l("div")]),p("span",{class:"token punctuation"},">")]),l("\n    "),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"<"),l("div")]),l(),p("span",{class:"token attr-name"},":style"),p("span",{class:"token attr-value"},[p("span",{class:"token punctuation attr-equals"},"="),p("span",{class:"token punctuation"},'"'),l("{"),p("span",{class:"token punctuation"},"'"),l("color"),p("span",{class:"token punctuation"},"'"),l(": flag ? "),p("span",{class:"token punctuation"},"'"),l("#67C23A"),p("span",{class:"token punctuation"},"'"),l(" : "),p("span",{class:"token punctuation"},"'"),l("#409EFF"),p("span",{class:"token punctuation"},"'"),l(", "),p("span",{class:"token punctuation"},"'"),l("margin-top"),p("span",{class:"token punctuation"},"'"),l(": "),p("span",{class:"token punctuation"},"'"),l("20px"),p("span",{class:"token punctuation"},"'"),l("}"),p("span",{class:"token punctuation"},'"')]),p("span",{class:"token punctuation"},">")]),l("{{ tips }}"),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"</"),l("div")]),p("span",{class:"token punctuation"},">")]),l("\n"),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"</"),l("template")]),p("span",{class:"token punctuation"},">")]),l("\n\n"),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"<"),l("script")]),p("span",{class:"token punctuation"},">")]),p("span",{class:"token script"},[p("span",{class:"token language-javascript"},[l("\n"),p("span",{class:"token keyword"},"export"),l(),p("span",{class:"token keyword"},"default"),l(),p("span",{class:"token punctuation"},"{"),l("\n    methods"),p("span",{class:"token operator"},":"),l(),p("span",{class:"token punctuation"},"{"),l("\n        "),p("span",{class:"token function"},"success"),p("span",{class:"token punctuation"},"("),p("span",{class:"token punctuation"},")"),l(),p("span",{class:"token punctuation"},"{"),l("\n            "),p("span",{class:"token keyword"},"this"),p("span",{class:"token punctuation"},"."),l("flag "),p("span",{class:"token operator"},"="),l(),p("span",{class:"token boolean"},"true"),p("span",{class:"token punctuation"},";"),l("\n            "),p("span",{class:"token keyword"},"this"),p("span",{class:"token punctuation"},"."),l("tips "),p("span",{class:"token operator"},"="),l(),p("span",{class:"token string"},'"认证成功"'),p("span",{class:"token punctuation"},";"),l("\n        "),p("span",{class:"token punctuation"},"}"),l("\n    "),p("span",{class:"token punctuation"},"}"),p("span",{class:"token punctuation"},","),l("\n    "),p("span",{class:"token function"},"data"),p("span",{class:"token punctuation"},"("),p("span",{class:"token punctuation"},")"),l(),p("span",{class:"token punctuation"},"{"),l("\n        "),p("span",{class:"token keyword"},"return"),l(),p("span",{class:"token punctuation"},"{"),l("\n            flag"),p("span",{class:"token operator"},":"),l(),p("span",{class:"token boolean"},"false"),p("span",{class:"token punctuation"},","),l("\n            tips"),p("span",{class:"token operator"},":"),l(),p("span",{class:"token string"},'"滑动认证"'),p("span",{class:"token punctuation"},","),l("\n        "),p("span",{class:"token punctuation"},"}"),l("\n    "),p("span",{class:"token punctuation"},"}"),p("span",{class:"token punctuation"},","),l("\n"),p("span",{class:"token punctuation"},"}"),l("\n")])]),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"</"),l("script")]),p("span",{class:"token punctuation"},">")]),l("\n")])]),p("div",{class:"line-numbers-wrapper"},[p("span",{class:"line-number"},"1"),p("br"),p("span",{class:"line-number"},"2"),p("br"),p("span",{class:"line-number"},"3"),p("br"),p("span",{class:"line-number"},"4"),p("br"),p("span",{class:"line-number"},"5"),p("br"),p("span",{class:"line-number"},"6"),p("br"),p("span",{class:"line-number"},"7"),p("br"),p("span",{class:"line-number"},"8"),p("br"),p("span",{class:"line-number"},"9"),p("br"),p("span",{class:"line-number"},"10"),p("br"),p("span",{class:"line-number"},"11"),p("br"),p("span",{class:"line-number"},"12"),p("br"),p("span",{class:"line-number"},"13"),p("br"),p("span",{class:"line-number"},"14"),p("br"),p("span",{class:"line-number"},"15"),p("br"),p("span",{class:"line-number"},"16"),p("br"),p("span",{class:"line-number"},"17"),p("br"),p("span",{class:"line-number"},"18"),p("br"),p("span",{class:"line-number"},"19"),p("br"),p("span",{class:"line-number"},"20"),p("br"),p("span",{class:"line-number"},"21"),p("br"),p("span",{class:"line-number"},"22"),p("br"),p("span",{class:"line-number"},"23"),p("br")])],-1),w=o('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h3 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-hidden="true">#</a></h3><table><thead><tr><th>事件名</th><th>说明</th><th>返回值</th><th>参数</th></tr></thead><tbody><tr><td>success</td><td>滑块认证成功触发</td><td>-</td><td></td></tr><tr><td>refresh</td><td>滑块认证失败时触发</td><td>-</td><td>callback：获取到需要刷新的数据，通过该回调方法传入</td></tr></tbody></table>',3),y='{"title":"文字点选认证","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法"},{"level":2,"title":"自定义背景图片","slug":"自定义背景图片"},{"level":2,"title":"认证成功","slug":"认证成功"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"事件","slug":"事件"}],"relativePath":"document/slider/text_slider/index.md","lastUpdated":1638078878253}',j={};const H=Object.assign(j,{setup:function(p){return n((()=>{u()})),(n,p)=>{const l=s("CodeRun");return a(),t("div",null,[i,r,k,b,e(l,{auto:"",editable:""},{default:c((()=>[d])),_:1}),g,m,h,e(l,{auto:""},{default:c((()=>[f])),_:1}),v,_,e(l,{auto:""},{default:c((()=>[x])),_:1}),w])}}});export{y as __pageData,H as default};
