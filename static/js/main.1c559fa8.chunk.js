(this["webpackJsonpclick-me-clickmode"]=this["webpackJsonpclick-me-clickmode"]||[]).push([[0],[,,function(e,t,n){e.exports={app:"App_app__2DPHP",title__box:"App_title__box__n4itW",timer__box:"App_timer__box__1sHSy",display__box:"App_display__box__1XkGt","group-buttons__box":"App_group-buttons__box__UQukQ",span__box:"App_span__box__3MC2a"}},function(e,t,n){e.exports={timer:"Timer_timer__1a6I_",timer__s:"Timer_timer__s__1zwOe",timer__ms:"Timer_timer__ms__1UIT6",timer__active:"Timer_timer__active__1v7eS"}},function(e,t,n){e.exports={button:"ButtonClick_button__2COWo",disabled:"ButtonClick_disabled__28jj1",clickMe:"ButtonClick_clickMe__EHgjt",isClick:"ButtonClick_isClick__2V5_w"}},function(e,t,n){e.exports={title:"Title_title__mtzOA",span:"Title_span__1eAGs"}},function(e,t,n){e.exports={button:"Button_button__3DYAP",disabled:"Button_disabled__2gCaI"}},,,function(e,t,n){e.exports={count:"Count_count__ZU2jn"}},,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(8),c=n.n(o);n(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=n(10),l=n(1),r=n(2),_=n.n(r),u=n(5),m=n.n(u),d=function(e){var t=e.title,n=[m.a.title].join(" "),a=[m.a.span].join(" "),o=["lightgreen","lightsalmon","lightseagreen","lightcoral","khaki","indianred","hotpink","gold","fuchsia","dodgerblue","deepskyblue","darkorange","crimson"],c=function(e){e.currentTarget.style.color=o[Math.floor(Math.random()*o.length)]},s=function(e){e.currentTarget.style.color="#fff"},l=t.split("").map((function(e,t){return" "!==e?i.a.createElement("span",{key:e+t,className:a,onMouseEnter:c,onMouseLeave:s},e):e}));return i.a.createElement("div",{className:n},l)},b=n(3),p=n.n(b),f=function(e){var t=e.time,n=[p.a.timer__s],a=[p.a.timer__ms],o=[p.a.timer];return 0===t.ms&&o.push(p.a.timer__active),i.a.createElement("div",{className:o.join(" ")},i.a.createElement("div",{className:n.join(" ")},t.s>=10?t.s:"0"+t.s),i.a.createElement("div",{className:a.join(" ")},t.ms>=10?t.ms:"0"+t.ms))},j=n(4),k=n.n(j),h=function(e){var t=e.title,n=e.onChangeCount,o=e.start,c=e.disabled,s=e.clickMe,r=Object(a.useState)(!1),_=Object(l.a)(r,2),u=_[0],m=_[1],d=[k.a.button];c&&d.push(k.a.disabled),s&&d.push(k.a.clickMe),u&&d.push(k.a.isClick);return i.a.createElement("button",{className:d.join(" "),onClick:function(){n&&n(),o&&o(),m(!1)},disabled:c,onMouseDown:function(){m(!0)}},t)},v=n(9),E=n.n(v),g=function(e){var t=e.count,n=[E.a.count].join(" ");return i.a.createElement("div",{className:n},t)},C=n(6),x=n.n(C),O=function(e){var t=e.title,n=e.onChangeCount,a=e.stop,o=e.onClick,c=e.disabled,s=[x.a.button];c&&s.push(x.a.disabled);return i.a.createElement("button",{className:s.join(" "),onClick:function(){n&&n(),a&&a(),o&&o()},disabled:c},t)},w={h:0,m:0,s:0,ms:0};function N(){var e=Object(a.useState)(10),t=Object(l.a)(e,2),n=t[0],o=(t[1],Object(a.useState)(w)),c=Object(l.a)(o,2),r=c[0],u=c[1],m=Object(a.useState)(0),b=Object(l.a)(m,2),p=b[0],j=b[1],k=Object(a.useState)(0),v=Object(l.a)(k,2),E=v[0],C=v[1],x=Object(a.useState)(!0),N=Object(l.a)(x,2),M=N[0],y=N[1],S=Object(a.useState)(!0),A=Object(l.a)(S,2),T=A[0],B=A[1],I=r.ms,W=r.s,D=r.m,G=r.h,H=Object(a.useCallback)((function(){window.clearInterval(E)}),[E]),P=function(){return 60===D&&(G++,D=0),60===W&&(D++,W=0),100===I&&(W++,I=0),I++,u({h:G,m:D,s:W,ms:I})};Object(a.useEffect)((function(){r.s===n&&(H(),y(!0))}),[r.s,H,n]);var U=[_.a.app,"app"],z=[_.a.title__box],J=[_.a.timer__box],Q=[_.a.span__box],Y=[_.a.display__box],L=[_.a["group-buttons__box"]];return i.a.createElement("div",{className:U.join(" ")},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:z.join(" ")},i.a.createElement(d,{title:"Click Me Game!"})),i.a.createElement("div",{className:J.join(" ")},i.a.createElement(f,{time:r})),i.a.createElement("div",{className:Q.join(" ")},i.a.createElement("span",null,"You have ".concat(n," seconds"))),i.a.createElement("div",{className:Y.join(" ")},i.a.createElement(g,{count:p}),i.a.createElement(h,{title:"Click",onChangeCount:function(){j(p+1),B(!1)},disabled:M,clickMe:!M&&T})),i.a.createElement("div",{className:L.join(" ")},i.a.createElement(O,{title:"Reset",onChangeCount:function(){u(Object(s.a)({},r,{s:0,ms:0})),j(0),B(!0)},stop:H,disabled:!M||0===r.s}),i.a.createElement(O,{title:"New game",onClick:function(){P(),y(!1),C(window.setInterval(P,10))},disabled:!M||r.s>0}))))}c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.1c559fa8.chunk.js.map