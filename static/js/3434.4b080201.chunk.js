"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[3434],{8765:function(n,e,t){var a,i=t(30168),r=(t(72791),t(91523)),l=t(86538),s=t(80184),o=l.ZP.div(a||(a=(0,i.Z)(['\n  margin: 28px 0 10px 0;\n  .breadcrumb {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    background-color: transparent;\n  }\n  ol {\n    display: flex;\n  }\n  li {\n    font-family: "Proxima Nova";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 25px;\n  }\n  .breadcrump__nav {\n    margin: auto;\n    left: 0;\n    display: flex;\n    max-width: 1170px;\n    flex-direction: column;\n  }\n\n  .breadcrumb-item:not(.active) a {\n    color: rgba(0, 0, 0, 0.45);\n  }\n\n  h2 {\n    font-family: "Bebas Neue Pro";\n    font-style: normal;\n    font-weight: 700;\n    font-size: 47px;\n    line-height: 39px;\n  }\n'])));e.Z=function(n){var e=function(n){return n.length>1};return(0,s.jsx)(o,{children:(0,s.jsxs)("div",{className:"breadcrump__nav",children:[(0,s.jsx)("div",{children:(0,s.jsx)("h2",{className:"h2",children:n.title})}),(0,s.jsx)("div",{children:(0,s.jsx)("ol",{className:"breadcrumb",children:n.items.map((function(n,t){return(0,s.jsx)("li",{className:"breadcrumb-item liClass",children:e(n)?(0,s.jsxs)(r.rU,{to:n[1],children:[" ",n[0],"/"===n[1]?(0,s.jsx)(s.Fragment,{children:n[1]}):(0,s.jsx)("div",{style:{display:"none",marginBottom:0},children:n[1]})]}):n[0]},n[0])}))})})]})})}},85785:function(n,e,t){var a=t(15671),i=t(43144),r=t(72426),l=t.n(r),s=function(){function n(){(0,a.Z)(this,n)}return(0,i.Z)(n,null,[{key:"Hour",value:function(n){return l()(n).format("hh:mm a")}},{key:"HourMinute",value:function(n){return l()(n).format("DD-MM-YYYY HH:mm")}},{key:"fullDate",value:function(n){return l()(n).format("DD-MM-YYYY")}},{key:"Day",value:function(n){return l()(n).format("D")}},{key:"Month",value:function(n){return l()(n).format("MMMM")}},{key:"Year",value:function(n){return l()(n).format("y")}},{key:"date",value:function(n){var e=this.Day(n),t=this.Month(n),a=this.Year(n);return"".concat(e," ").concat(t," ").concat(a," ")}},{key:"DetaillDate",value:function(n){return l()(n).format("dddd, MMMM Do YYYY")}}]),n}();s.pipeDate=function(n){var e=n.split("T")[0];return l()(e).format("DD-MM-YYYY")},e.Z=s},28885:function(n,e,t){t.r(e);var a=t(74165),i=t(15861),r=t(29439),l=t(72791),s=t(51851),o=t(25930),c=t(8765),d=t(32771),u=(t(84245),t(79271)),h=t(57688),f=t(94233),p=t(4726),m=t(85785),v=t(91523),x=t(64428),g=t(90136),j=t(80184);e.default=function(){var n,e,t=(0,u.$B)(),_=t.params.id,y=(0,f.I0)(),b=(0,l.useState)({}),k=(0,r.Z)(b,2),Z=k[0],w=k[1],M=(0,f.v9)(h.Z.selectLoading),N=localStorage.getItem("language"),Y=function(){var n=(0,i.Z)((0,a.Z)().mark((function n(){var e,i;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("/detaill/category/:id"!==t.path){n.next=7;break}return n.next=3,g.Z.findbygroup(_);case 3:e=n.sent,w(e),n.next=12;break;case 7:if("/detaill/:id"!==t.path){n.next=12;break}return n.next=10,g.Z.findbythematique(_);case 10:i=n.sent,w(i);case 12:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),D=(t.path,p.Z.Trans("title",Z));return(0,l.useEffect)((function(){Y()}),[y,_]),(0,j.jsxs)("div",{className:"app__detaill",children:[M&&(0,j.jsx)("h4",{className:"h4 detaill__sketlon",children:(0,o.ag)("table.loading")}),!M&&Z&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{className:"app__calendar",children:(0,j.jsx)(v.rU,{to:"/evenement",children:(0,j.jsx)("img",{src:s.zX,alt:s.T1})})}),(0,j.jsxs)("div",{className:"__detaillwrapper",children:[(0,j.jsx)(c.Z,{title:D,items:[[(0,o.ag)("app.title"),"/"],[(0,o.ag)(D),"/publication"]]}),(0,j.jsx)("div",{className:"detaill",children:(0,j.jsx)("div",{className:"list__detaills",children:null===(n=Object(Z))||void 0===n||null===(e=n.publications)||void 0===e?void 0:e.map((function(n){var e,t,a;return(0,j.jsx)(v.rU,{to:"/detail/".concat(n.id),children:(0,j.jsxs)("div",{children:["fr"===N?(0,j.jsx)(d.Z,{src:n.photos.length>0?"".concat(x.F,"/file/download?privateUrl=").concat(null===(e=n.photos[0])||void 0===e?void 0:e.privateUrl):s.T1,alt:s.T1,id:"image__desktop",width:"370",height:"300"}):"ar"===N?(0,j.jsx)(d.Z,{src:n.photosAR.length>0?"".concat(x.F,"/file/download?privateUrl=").concat(null===(t=n.photosAR[0])||void 0===t?void 0:t.privateUrl):s.T1,alt:s.T1,id:"image__desktop",width:"370",height:"300"}):(0,j.jsx)(d.Z,{src:n.photosEN.length>0?"".concat(x.F,"/file/download?privateUrl=").concat(null===(a=n.photosEN[0])||void 0===a?void 0:a.privateUrl):s.T1,alt:s.T1,id:"image__desktop",width:"370",height:"300"}),(0,j.jsxs)("div",{className:"list__detaill",children:[(0,j.jsxs)("div",{className:"detaill__header",children:[(0,j.jsx)("div",{}),(0,j.jsxs)("div",{className:"header__right",children:[" ",m.Z.HourMinute(n.date)]})]})," ",(0,j.jsx)("div",{className:"detaill__content text__wrap",style:{maxWidth:350},children:p.Z.Trans("title",n)})]})]})})}))})})]})]})]})}},32771:function(n,e,t){t(72791);var a=t(87087),i=(t(19713),t(51851)),r=t(80184);e.Z=function(n){var e=n.src,t=n.width,l=n.height,s=n.alt,o=n.caption,c=n.key,d=e||i.T1;return(0,r.jsx)(a.LazyLoadImage,{alt:s,height:l,src:d,width:t,effect:"blur",caption:o},c)}},84245:function(){}}]);
//# sourceMappingURL=3434.4b080201.chunk.js.map