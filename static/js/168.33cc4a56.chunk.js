"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[168],{530:function(e,n,t){t.d(n,{Hg:function(){return o},Jh:function(){return h},TP:function(){return p},qF:function(){return f},yO:function(){return v}});var r=t(861),a=t(757),c=t.n(a),u=t(759),s="b86981a07e5296001ff10a61d56b5942",i="https://api.themoviedb.org/3",o=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(s,"&language='en-US'"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/search/movie?api_key=").concat(s,"&query=").concat(n,"&language='en-US'"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/movie/").concat(n,"?api_key=").concat(s));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/movie/").concat(n,"/credits?api_key=").concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/movie/").concat(n,"/reviews?api_key=").concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},168:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var r=t(861),a=t(439),c=t(757),u=t.n(c),s=t(791),i=t(530),o=t(689),f="Reviews_subtitle__lWHkI",p="Reviews_author__CqYAZ",v="Reviews_review__sHbuN",h=t(184),l=function(){var e=(0,s.useState)([]),n=(0,a.Z)(e,2),t=n[0],c=n[1],l=(0,o.UO)().movieID;return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.Jh)(l);case 3:n=e.sent,c(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[l]),(0,h.jsx)(h.Fragment,{children:0!==t.length?(0,h.jsxs)("div",{children:[(0,h.jsx)("h3",{className:f,children:"Reviews"}),(0,h.jsx)("ul",{children:t.map((function(e){return(0,h.jsxs)("li",{children:[(0,h.jsx)("h4",{className:p,children:e.author}),(0,h.jsx)("p",{className:v,children:e.content})]},e.id)}))})]}):(0,h.jsx)("div",{children:"There are no reviews for this movie."})})}}}]);
//# sourceMappingURL=168.33cc4a56.chunk.js.map