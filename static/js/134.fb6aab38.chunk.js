"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{1510:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(501),a=n(6871),c="MovieList_title__QyMtJ",u="MovieList_ul__tWrRZ",o="MovieList_li__kXkJl",s=n(184),i=function(e){var t=e.movies,n=e.titlePage;console.log(n);var i=(0,a.TH)();return(0,s.jsxs)(s.Fragment,{children:[n&&(0,s.jsx)("h1",{className:c,children:n}),(0,s.jsx)("ul",{className:u,children:t.map((function(e){var t=e.id,n=e.title,a=e.name;return(0,s.jsx)("li",{className:o,children:(0,s.jsx)(r.rU,{to:"/movies/".concat(t),state:{from:i},children:n||a})},t)}))})]})}},1134:function(e,t,n){n.r(t);var r=n(885),a=n(2791),c=n(501),u=n(3714),o=n(1510),s=n(184);t.default=function(){var e,t=(0,c.lr)(),n=(0,r.Z)(t,2),i=n[0],l=n[1],f=null!==(e=i.get("query"))&&void 0!==e?e:"",h=(0,a.useState)(f),p=(0,r.Z)(h,2),v=p[0],m=p[1],d=(0,a.useState)(null),g=(0,r.Z)(d,2),x=g[0],y=g[1],w=(0,a.useState)(!1),b=(0,r.Z)(w,2),j=b[0],k=b[1],_=(0,a.useState)(!1),Z=(0,r.Z)(_,2),S=Z[0],q=Z[1];(0,a.useEffect)((function(){""!==f&&(k(!0),(0,u.bI)(f).then((function(e){y(e.results),k(!1)})).catch((function(e){q(!0),k(!1),console.log(e)})))}),[f]);var C=x&&x.length<1&&!j;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.query.value.toLowerCase().trim();l({query:t})},autoComplete:"off",children:[(0,s.jsx)("label",{children:(0,s.jsx)("input",{onChange:function(e){m(e.target.value)},value:v,type:"text",name:"query"})}),(0,s.jsx)("button",{type:"submit",children:"Search"})]}),j&&(0,s.jsx)("h3",{children:"Loading..."}),S&&(0,s.jsx)("h3",{children:"Something went wrong. Try changing the query"}),x&&(0,s.jsx)(o.Z,{movies:x}),C&&(0,s.jsx)("h3",{children:"Sorry, there are no movies matching your search query. Please change the request"})]})}},3714:function(e,t,n){n.d(t,{Hx:function(){return v},Tg:function(){return l},Y5:function(){return h},bI:function(){return f},uV:function(){return p}});var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),o=n.n(u),s="https://api.themoviedb.org/3",i="api_key=5f364d2fc6b25c805674b50a1c63d59e",l=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("".concat(s,"/trending/movie/day?").concat(i));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("".concat(s,"/search/movie?").concat(i,"&query=").concat(t,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("".concat(s,"/movie/").concat(t,"?").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("".concat(s,"/movie/").concat(t,"/credits?").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("".concat(s,"/movie/").concat(t,"/reviews?").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=134.fb6aab38.chunk.js.map