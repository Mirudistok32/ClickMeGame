(this["webpackJsonpclick-me-clickmode"]=this["webpackJsonpclick-me-clickmode"]||[]).push([[0],[,function(e,t,n){e.exports={app:"App_app__3-Mee",title__box:"App_title__box__ImVoL",timer__box:"App_timer__box__dXczP",display__box:"App_display__box__3Uegw"}},,function(e,t,n){e.exports={timer:"Timer_timer__2NioP",timer__s:"Timer_timer__s__2x34x",timer__ms:"Timer_timer__ms__2oi-e",timer__active:"Timer_timer__active__2dJzm"}},function(e,t,n){e.exports={title:"Title_title__22rm6",span:"Title_span__2O1gT"}},function(e,t,n){e.exports={button:"ButtonClick_button__3voBK",disabled:"ButtonClick_disabled__3DjO7"}},function(e,t,n){e.exports={button:"Button_button__13r_k",disabled:"Button_disabled__KTeT7"}},,,function(e,t,n){e.exports={count:"Count_count__2D5NN"}},,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(8),c=n.n(o);n(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=n(10),r=n(2),l=n(1),m=n.n(l),u=n(4),_=n.n(u),d=function(e){var t=e.title,n=[_.a.title].join(" "),a=[_.a.span].join(" "),o=["lightgreen","lightsalmon","lightseagreen","lightcoral","khaki","indianred","hotpink","gold","fuchsia","dodgerblue","deepskyblue","darkorange","crimson"],c=function(e){e.currentTarget.style.color=o[Math.floor(Math.random()*o.length)]},s=function(e){e.currentTarget.style.color="#fff"},r=t.split("").map((function(e,t){return" "!==e?i.a.createElement("span",{key:e+t,className:a,onMouseEnter:c,onMouseLeave:s},e):e}));return i.a.createElement("div",{className:n},r)},b=n(3),p=n.n(b),f=function(e){var t=e.time,n=[p.a.timer__s],a=[p.a.timer__ms],o=[p.a.timer];return 0===t.ms&&o.push(p.a.timer__active),i.a.createElement("div",{className:o.join(" ")},i.a.createElement("div",{className:n.join(" ")},t.s>=10?t.s:"0"+t.s),i.a.createElement("div",{className:a.join(" ")},t.ms>=10?t.ms:"0"+t.ms))},v=n(5),h=n.n(v),j=function(e){var t=e.title,n=e.onChangeCount,a=e.start,o=e.disabled,c=[h.a.button];o&&c.push(h.a.disabled);return i.a.createElement("button",{className:c.join(" "),onClick:function(){n&&n(),a&&a()},disabled:o},t)},E=n(9),g=n.n(E),k=function(e){var t=e.count,n=[g.a.count].join(" ");return i.a.createElement("div",{className:n},t)},x=n(6),C=n.n(x),N=function(e){var t=e.title,n=e.onChangeCount,a=e.stop,o=e.onClick,c=e.disabled,s=[C.a.button];c&&s.push(C.a.disabled);return i.a.createElement("button",{className:s.join(" "),onClick:function(){n&&n(),a&&a(),o&&o()},disabled:c},t)},O={h:0,m:0,s:0,ms:0};function w(){var e=Object(a.useState)(5),t=Object(r.a)(e,2),n=t[0],o=(t[1],Object(a.useState)(O)),c=Object(r.a)(o,2),l=c[0],u=c[1],_=Object(a.useState)(0),b=Object(r.a)(_,2),p=b[0],v=b[1],h=Object(a.useState)(0),E=Object(r.a)(h,2),g=E[0],x=E[1],C=Object(a.useState)(!0),w=Object(r.a)(C,2),T=w[0],y=w[1],B=l.ms,M=l.s,S=l.m,A=l.h,I=Object(a.useCallback)((function(){window.clearInterval(g)}),[g]),J=function(){return 60===S&&(A++,S=0),60===M&&(S++,M=0),100===B&&(M++,B=0),B++,u({h:A,m:S,s:M,ms:B})};Object(a.useEffect)((function(){l.s===n&&(I(),y(!0))}),[l.s,I,n]);var z=[m.a.app,"app"],D=[m.a.title__box],K=[m.a.timer__box],L=[m.a.display__box],P=[m.a["group-buttons__box"]];return i.a.createElement("div",{className:z.join(" ")},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:D.join(" ")},i.a.createElement(d,{title:"Click Me Game!"})),i.a.createElement("div",{className:K.join(" ")},i.a.createElement(f,{time:l})),i.a.createElement("span",null,"You have ".concat(n," seconds"))),i.a.createElement("div",{className:L.join(" ")},i.a.createElement(k,{count:p}),i.a.createElement(j,{title:"Click",onChangeCount:function(){v(p+1)},disabled:T})),i.a.createElement("div",{className:P.join(" ")},i.a.createElement(N,{title:"Reset",onChangeCount:function(){u(Object(s.a)({},l,{s:0,ms:0})),v(0)},stop:I,disabled:!T||0===l.s}),i.a.createElement(N,{title:"New game",onClick:function(){J(),y(!1),x(window.setInterval(J,10))},disabled:!T||l.s>0})))}c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.105345b3.chunk.js.map