(this["webpackJsonpyoutube-clone"]=this["webpackJsonpyoutube-clone"]||[]).push([[0],{31:function(e,t,a){e.exports={container:"Header_container__1CTvm",searchContainer:"Header_searchContainer__Gu0Cw",search:"Header_search__n-3vn",searchIcon:"Header_searchIcon__vHamR"}},32:function(e,t,a){e.exports={container:"VideoPlayer_container__2KmNg",detailsContainer:"VideoPlayer_detailsContainer__28xu8",secondaryText:"VideoPlayer_secondaryText__X0RPS"}},33:function(e,t,a){e.exports={container:"VideoThumb_container__2ZDXr",detailsContainer:"VideoThumb_detailsContainer__mu9ca",secondaryText:"VideoThumb_secondaryText__3Zyh_"}},69:function(e,t,a){e.exports=a(99)},97:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),i=a(24),l=a.n(i),s=a(35),u=a(19),m=a(135),d=a(56),h=a.n(d).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{key:"AIzaSyDcLRjLkF93jwSejSoRf73--C34Bk3ltcw",maxResults:7,part:"snippet",type:"video"}});function p(e){return f.apply(this,arguments)}function f(){return(f=Object(s.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.get("search",{params:{q:t}});case 3:return a=e.sent,e.abrupt("return",a.data.items);case 7:return e.prev=7,e.t0=e.catch(0),console.log("error: ",e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var v=a(130),b=a(134),y=a(136),E=a(137),_=a(62),g=a.n(_),x=a(31),w=a.n(x),T=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],o=a[1],i=function(){e.search(c)};return r.a.createElement(v.a,{className:w.a.container,elevation:2},r.a.createElement("div",{style:{cursor:"pointer",textAlign:"center"},onClick:function(){e.search("YouTube")}},r.a.createElement(b.a,{variant:"h5"},"YouTube"),r.a.createElement(b.a,{variant:"caption"},"Clone")),r.a.createElement("div",{className:w.a.searchContainer},r.a.createElement(y.a,{className:w.a.search,placeholder:"Search",value:c,variant:"outlined",onChange:function(e){return function(e){o(e.target.value)}(e)},onKeyDown:function(e){return function(e){"Enter"===e.key&&i()}(e)}}),r.a.createElement(E.a,{"aria-label":"search",className:w.a.searchIcon,onClick:i},r.a.createElement(g.a,null))))},C=a(140),j=a(138),N=a(32),S=a.n(N),k=function(e){var t=Object(n.useState)(!0),a=Object(u.a)(t,2),c=a[0],o=a[1];if(e.error)return r.a.createElement(C.a,{autoHideDuration:5e3,open:c,onClose:function(){return o(!1)}},r.a.createElement(j.a,{elevation:6,severity:"error",variant:"filled"},"Some error occured. Try reloading the page."));if(!e.video)return r.a.createElement("div",null);var i=e.video.id.videoId,l=e.video.snippet,s=l.channelTitle,m=l.description,d=l.publishedAt,h=l.title,p="https://www.youtube.com/embed/".concat(i,"?autoplay=1&controls=1");return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{className:S.a.container,elevation:6},r.a.createElement("iframe",{allowFullScreen:!0,frameBorder:"0",height:"100%",src:p,title:"Video Player",width:"100%"})),r.a.createElement("div",{className:S.a.detailsContainer},r.a.createElement(b.a,{variant:"h6"},h),r.a.createElement(b.a,{className:S.a.secondaryText,variant:"subtitle2"},new Date(d).toDateString()),r.a.createElement("hr",null),r.a.createElement(b.a,{variant:"h6"},s),r.a.createElement(b.a,{className:S.a.secondaryText,variant:"subtitle2"},m)))},O=a(33),V=a.n(O),D=function(e){var t=e.channelName,a=e.id,n=e.publishedAt,c=e.title,o=e.url;return r.a.createElement("div",{className:V.a.container,onClick:function(){return function(t){e.playSelectedVideo(t)}(a)}},r.a.createElement("img",{alt:c,src:o}),r.a.createElement("div",{className:V.a.detailsContainer},r.a.createElement(b.a,{variant:"subtitle2"},c),r.a.createElement(b.a,{className:V.a.secondaryText,variant:"caption"},t),r.a.createElement(b.a,{className:V.a.secondaryText,variant:"body2"},function(e){var t=new Date(e).getTime(),a=(new Date).getTime()-t;if((a=Math.floor(a/1e3))<60)return"".concat(Math.floor(a/1e3)," secs ago");if((a=Math.floor(a/60))<60)return"".concat(a," ").concat(1===a?"min":"mins"," ago");if((a=Math.floor(a/60))<24)return"".concat(a," ").concat(1===a?"hour":"hours"," ago");if((a=Math.floor(a/24))<30)return"".concat(a," ").concat(1===a?"day":"days"," ago");if(a<365){var n=Math.floor(a/30);return"".concat(n," ").concat(1===n?"month":"months"," ago")}return a=Math.floor(a/365),"".concat(a," ").concat(1===a?"year":"years"," ago")}(n))))},I=(a(97),a(98),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(),i=Object(u.a)(o,2),d=i[0],h=i[1],f=Object(n.useState)(!1),v=Object(u.a)(f,2),b=v[0],y=v[1];Object(n.useEffect)((function(){E("YouTube")}),[]);var E=function(){var e=Object(s.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t);case 2:if(0!==(a=e.sent).length){e.next=6;break}return y(!0),e.abrupt("return");case 6:c(a),h(a[0]);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(e){var t=a.filter((function(t){return t.id.videoId===e}));h(t[0])};return r.a.createElement(m.a,{container:!0,justify:"center"},r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(T,{search:E})),r.a.createElement(m.a,{item:!0,xs:8,style:{height:"80vh"}},r.a.createElement(k,{error:b,video:d})),r.a.createElement(m.a,{item:!0,xs:4},a.map((function(e,t){return e===d?r.a.createElement(r.a.Fragment,{key:"FRAGMENT"}):r.a.createElement(D,{channelName:e.snippet.channelTitle,id:e.id.videoId,key:t,playSelectedVideo:_,publishedAt:e.snippet.publishedAt,title:e.snippet.title,url:e.snippet.thumbnails.default.url})}))))});o.a.render(r.a.createElement(I,null),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.11657ee4.chunk.js.map