"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[493],{9977:function(n,t,r){r.d(t,{c:function(){return u}});var e=r(885),c=r(2791),a=r(6871),u=function(n){var t=(0,c.useState)(null),r=(0,e.Z)(t,2),u=r[0],o=r[1],i=(0,a.UO)().movieId;return(0,c.useEffect)((function(){n(i).then((function(n){o(n)})).catch(console.log)}),[n,i]),u}},3493:function(n,t,r){r.r(t),r.d(t,{default:function(){return u}});var e=r(3714),c=r(9977),a=r(184);function u(){var n=(0,c.c)(e.uV);return(0,a.jsx)(a.Fragment,{children:n?(0,a.jsx)("ul",{children:n.map((function(n){var t=n.id,r=n.profile_path,e=n.name,c=n.character;return(0,a.jsxs)("li",{children:[r?(0,a.jsx)("img",{alt:e,src:"https://image.tmdb.org/t/p/w500".concat(r),width:"200"}):(0,a.jsx)("div",{children:"No image"}),(0,a.jsx)("p",{children:e}),(0,a.jsxs)("p",{children:["Character: ",c]})]},t)}))}):(0,a.jsx)("h3",{children:"Loading..."})})}},3714:function(n,t,r){r.d(t,{Hx:function(){return l},Tg:function(){return f},Y5:function(){return d},bI:function(){return p},uV:function(){return h}});var e=r(5861),c=r(7757),a=r.n(c),u=r(4569),o=r.n(u),i="https://api.themoviedb.org/3",s="api_key=5f364d2fc6b25c805674b50a1c63d59e",f=function(){var n=(0,e.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("".concat(i,"/trending/movie/day?").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("".concat(i,"/search/movie?").concat(s,"&query=").concat(t,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("".concat(i,"/movie/").concat(t,"?").concat(s,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("".concat(i,"/movie/").concat(t,"/credits?").concat(s,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("".concat(i,"/movie/").concat(t,"/reviews?").concat(s,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=493.c2cb49cb.chunk.js.map