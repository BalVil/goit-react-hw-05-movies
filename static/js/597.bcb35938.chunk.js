"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[597],{3597:function(t,n,r){r.r(n),r.d(n,{default:function(){return s}});var e=r(885),a=r(2791),c=r(6871),u=r(3714),o=r(184);function s(){var t=(0,a.useState)(null),n=(0,e.Z)(t,2),r=n[0],s=n[1],i=(0,c.UO)().movieId;if((0,a.useEffect)((function(){try{(0,u.uV)(i).then((function(t){return s(t)}))}catch(t){console.log(t.message)}}),[i]),r)return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("ul",{children:r.map((function(t){var n=t.id,r=t.profile_path,e=t.name,a=t.character;return(0,o.jsxs)("li",{children:[r?(0,o.jsx)("img",{alt:e,src:"https://image.tmdb.org/t/p/w500".concat(r),width:"200"}):(0,o.jsx)("div",{children:"No image"}),(0,o.jsx)("p",{children:e}),(0,o.jsxs)("p",{children:["Character: ",a]})]},n)}))})})}},3714:function(t,n,r){r.d(n,{Hx:function(){return d},Tg:function(){return f},Y5:function(){return h},bI:function(){return p},uV:function(){return l}});var e=r(5861),a=r(7757),c=r.n(a),u=r(4569),o=r.n(u),s="https://api.themoviedb.org/3",i="api_key=5f364d2fc6b25c805674b50a1c63d59e",f=function(){var t=(0,e.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("".concat(s,"/trending/movie/day?").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("".concat(s,"/search/movie?").concat(i,"&query=").concat(n,"&language=en-US"));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("".concat(s,"/movie/").concat(n,"?").concat(i,"&language=en-US"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("".concat(s,"/movie/").concat(n,"/credits?").concat(i,"&language=en-US"));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("".concat(s,"/movie/").concat(n,"/reviews?").concat(i,"&language=en-US"));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=597.bcb35938.chunk.js.map