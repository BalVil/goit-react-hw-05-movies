"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[866],{9977:function(n,e,t){t.d(e,{c:function(){return u}});var r=t(885),a=t(2791),c=t(6871),u=function(n){var e=(0,a.useState)(null),t=(0,r.Z)(e,2),u=t[0],s=t[1],i=(0,c.UO)().movieId;return(0,a.useEffect)((function(){n(i).then((function(n){s(n)})).catch(console.log)}),[n,i]),u}},866:function(n,e,t){t.r(e),t.d(e,{default:function(){return l}});var r=t(9977),a=t(3714),c="Reviews_list__pCzae",u="Reviews_text__fgYm-",s="Reviews_meta__lLU6o",i="Reviews_name__puWkV",o="Reviews_notice__i9vCj",f=t(8977),p=t(184),l=function(){var n=(0,r.c)(a.Hx);return(0,p.jsxs)(p.Fragment,{children:[!n&&(0,p.jsx)("h3",{className:o,children:"Loading..."}),n&&n.length>0?(0,p.jsx)("ul",{className:c,children:n.map((function(n){var e=n.id,t=n.author,r=n.content,a=n.created_at;return(0,p.jsxs)("li",{children:[(0,p.jsx)("p",{className:u,children:r}),(0,p.jsxs)("div",{className:s,children:[(0,p.jsxs)("p",{className:i,children:["author: ",t]}),(0,p.jsx)("p",{children:(0,f.Z)(new Date(a),"dd.MM.yy hh:mm")})]})]},e)}))}):(0,p.jsx)("div",{className:o,children:"We don`t have any reviews for this movie."})]})}},3714:function(n,e,t){t.d(e,{Hx:function(){return d},Tg:function(){return f},Y5:function(){return l},bI:function(){return p},uV:function(){return v}});var r=t(5861),a=t(4687),c=t.n(a),u=t(4569),s=t.n(u),i="https://api.themoviedb.org/3",o="api_key=5f364d2fc6b25c805674b50a1c63d59e",f=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("".concat(i,"/trending/movie/day?").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("".concat(i,"/search/movie?").concat(o,"&query=").concat(e,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("".concat(i,"/movie/").concat(e,"?").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("".concat(i,"/movie/").concat(e,"/credits?").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("".concat(i,"/movie/").concat(e,"/reviews?").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=866.0afbfdb8.chunk.js.map