"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[180],{973:function(t,e,r){r.r(e),r.d(e,{default:function(){return v}});var n=r(861),a=r(439),c=r(757),u=r.n(c),i=r(791),s=r(689),o=r(390),p=r.p+"static/media/dummy-profile-pic.e8014c14259e3944c886.png",f=r(184),v=function(){var t=(0,s.UO)().movieId,e=(0,i.useState)([]),r=(0,a.Z)(e,2),c=r[0],v=r[1],h=(0,i.useState)(!1),d=(0,a.Z)(h,2),l=d[0],m=d[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.prev=1,e.next=4,(0,o.y)(t);case 4:r=e.sent,v(r.cast),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:return e.prev=11,m(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,f.jsxs)(f.Fragment,{children:[c.length>0&&(0,f.jsx)(f.Fragment,{children:c.map((function(t){return(0,f.jsxs)("div",{children:[(0,f.jsx)("img",{className:"actorPic",src:t.profile_path?"https://image.tmdb.org/t/p/original".concat(t.profile_path):p,width:"200px",alt:t.name}),(0,f.jsxs)("p",{className:"text",children:[t.name," ",(0,f.jsx)("br",{}),"Character: ",t.character]})]},t.id)}))}),c.length<=0&&!1===l&&(0,f.jsx)("div",{children:"No cast found"})]})}},390:function(t,e,r){r.d(e,{Bt:function(){return f},Hq:function(){return v},Tg:function(){return s},y:function(){return p},zT:function(){return o}});var n=r(861),a=r(757),c=r.n(a),u=r(243),i="09964a9d83eee864836866e0c73a90b0";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var t=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(i));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(i));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(i));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?api_key=".concat(i,"&query=").concat(e));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=180.ea26d6f2.chunk.js.map