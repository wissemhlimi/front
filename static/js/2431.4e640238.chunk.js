"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[2431],{7852:function(e,t,n){n.r(t),n.d(t,{default:function(){return U}});var a=n(30168),i=n(29439),r=n(72791),l=n(8765),s=n(27314),c=n(25930),o=n(94233),d=n(10818),u=n(51949),h=n(26189),m=n(57688),v=n(91523),p=n(4726),x=n(80184);var f=function(e){var t=e.rows,n=e.index;return(0,x.jsx)("div",{children:(0,x.jsx)(v.rU,{to:"/detaill/category/".concat(t._id),style:{color:"#000"},children:p.Z.Trans("title",t)})},n)},g=n(85785);var _=function(e){var t=e.data;return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{className:"pub__relative",children:[(0,x.jsx)("img",{src:t.photos.length>0?t.photos[0].downloadUrl:"Image publication image ",alt:"header"}),(0,x.jsx)(v.rU,{to:"/detail/".concat(t.id),children:(0,x.jsx)("div",{className:"__detaills",children:(0,x.jsxs)("div",{className:"list__detaill",children:[(0,x.jsxs)("div",{className:"detaill__header",children:[(0,x.jsx)("div",{className:"__left",children:(0,x.jsxs)("p",{children:[" ",p.Z.Trans("title",null===t||void 0===t?void 0:t.thematique)]})}),(0,x.jsx)("div",{className:"__right",children:g.Z.fullDate(t.date)})]}),(0,x.jsx)("div",{className:"__content text__wrap",style:{maxWidth:250},children:p.Z.Trans("title",t)})]})})})]},e.key)})},j=n(32771),y=n(64428);var b=function(e){var t=e.data,n=e.index,a=e.thematique;return(0,x.jsxs)("div",{className:"pub__migration",children:[(0,x.jsxs)("div",{className:"archieve__header",children:[(0,x.jsx)("h2",{children:p.Z.Trans("title",a)}),(0,x.jsx)("div",{className:"satestique__bar"})]}),(0,x.jsx)("div",{className:"migration__images",children:t.map((function(e){return function(e){return(0,x.jsx)("div",{children:(0,x.jsxs)(v.rU,{to:"/detail/".concat(e.id),children:[(0,x.jsx)(j.Z,{src:e.photos.length>0?"".concat(y.F,"/file/download?privateUrl=").concat(e.photos[0].privateUrl):"Image publication image ",width:"370",height:"300",alt:"Image publication image "}),(0,x.jsxs)("div",{className:"list__detaill",children:[(0,x.jsxs)("div",{className:"detaill__header",children:[(0,x.jsx)("div",{}),(0,x.jsx)("div",{className:"header__right",children:g.Z.fullDate(e.date)})]}),(0,x.jsx)("div",{className:"detaill__content text__wrap",children:p.Z.Trans("title",e)})]})]})})}(e)}))}),(0,x.jsx)(v.rU,{to:"/detaill/".concat(a._id),children:(0,x.jsx)("div",{className:"plus__button",children:(0,c.ag)("common.voirPlus")})})]},n)},Z=n(74165),N=n(15861),w=n(90136);var k,D=function(e){var t=e.data,n=e.category,a=(e.index,localStorage.getItem("language")),l=(0,r.useState)(""),s=(0,i.Z)(l,2),o=s[0],d=s[1],u=function(){var e=(0,N.Z)((0,Z.Z)().mark((function e(t){var n;return(0,Z.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.Z.getThematiqueById(t);case 2:n=e.sent,d("fr"===a?n.titleFR:n.titleAR);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,x.jsxs)("div",{children:[(0,x.jsxs)("div",{className:"archieve__header",children:[(0,x.jsxs)("h2",{children:[" ",p.Z.Trans("title",n)]}),(0,x.jsx)("div",{className:"satestique__bar"})]}),(0,x.jsx)("div",{className:"manification__images",children:t.map((function(e){return function(e){return u(e.thematique),(0,x.jsx)(v.rU,{to:"/detail/".concat(e.id),children:(0,x.jsxs)("div",{style:{display:"flex",columnGap:"20px"},children:[(0,x.jsx)(j.Z,{src:e.photos.length>0?"".concat(y.F,"/file/download?privateUrl=").concat(e.photos[0].privateUrl):"",width:120,height:78,alt:"Image"}),(0,x.jsxs)("div",{className:"list__detaill",children:[(0,x.jsxs)("div",{className:"detaill__header",children:[(0,x.jsx)("div",{className:"header__left",children:(0,x.jsx)("p",{children:o})}),(0,x.jsx)("div",{className:"header__right",children:g.Z.fullDate(t.date)}),(0,x.jsx)("div",{className:"header__right"})]}),(0,x.jsx)("div",{className:"detaill__content text__wrap",style:{width:233},children:p.Z.Trans("title",e)})]})]})})}(e)}))}),(0,x.jsx)(v.rU,{to:"/detaill/category/".concat(n._id),children:(0,x.jsx)("div",{className:"plus__button",children:(0,c.ag)("common.voirPlus")})})]})},M=n(2579),Y=n(72239),T=n(86538);var U=function(){var e=(0,o.I0)(),t=localStorage.getItem("language"),n=(0,r.useState)(""),a=(0,i.Z)(n,2),v=a[0],p=a[1];(0,r.useEffect)((function(){Y.Z.list("","","","").then((function(e){"fr"===t&&p(e.rows[0].publicationDescFR),"ar"===t&&p(e.rows[0].publicationDescAR),"en"===t&&p(e.rows[0].publicationDescFR)}))}),[]),(0,r.useEffect)((function(){e(h.Z.allpublicationbythematique()),e(h.Z.allpublicationbyCategory()),e(h.Z.doFetchValidePublication()),e(d.Z.doFetch())}),[]);var g=(0,o.v9)(m.Z.selectPublicationByThematiqueRows),j=(0,o.v9)(m.Z.selectloadingpublicationbythematique),y=(0,o.v9)(m.Z.selectRows),Z=(0,o.v9)(m.Z.selectLoading),N=((0,o.v9)(m.Z.loadingByCategory),(0,o.v9)(m.Z.slectByCategory)),w=(0,o.v9)(u.Z.selectLoading),k=(0,o.v9)(u.Z.selectRows);return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{className:"publication__page",children:[(0,x.jsx)("div",{className:"app__calendar",children:(0,x.jsx)("img",{src:s.zX,alt:""})}),(0,x.jsxs)("div",{children:[(0,x.jsx)(l.Z,{title:(0,c.ag)("entities.publication.label"),items:[[(0,c.ag)("app.title"),"/"],[(0,c.ag)("entities.publication.label")]]}),(0,x.jsx)(C,{children:(0,x.jsx)("p",{children:v})})]}),(0,x.jsx)("div",{className:"app__category",children:(0,x.jsxs)("div",{className:"category__list",children:[w&&Array.from({length:7}).map((function(e,t){return(0,x.jsx)(M.Z,{height:60,width:100},t)})),!w&&k.map((function(e,t){return(0,x.jsx)(f,{rows:e,index:t})}))]})}),(0,x.jsxs)("div",{className:"app__pub",children:[(0,x.jsx)("div",{className:"publication__header",children:(0,x.jsx)("div",{className:"image__pub",children:Z?Array.from({length:5}).map((function(e,t){return(0,x.jsx)(M.Z,{height:390,width:269},t)})):y.map((function(e,t){return(0,x.jsx)(_,{data:e},t)}))})}),j?(0,x.jsxs)("div",{className:"pub__migration",children:[(0,x.jsx)("div",{children:(0,x.jsx)(M.Z,{height:60,width:1170})}),(0,x.jsx)("div",{className:"sketlon__images",children:(0,x.jsx)("div",{children:(0,x.jsx)(M.Z,{height:370,width:370,count:3,inline:!0,enableAnimation:!0})})})]}):g.map((function(e,t){return(0,x.jsx)(b,{data:null===e||void 0===e?void 0:e.data,thematique:null===e||void 0===e?void 0:e.cat[0],index:t})})),(0,x.jsx)("div",{className:"app__articles",children:(0,x.jsx)("div",{className:"articles__top",children:(0,x.jsxs)("div",{className:"__top",children:[Z&&Array.from({length:3}).map((function(e,t){return(0,x.jsxs)("div",{children:[(0,x.jsx)(M.Z,{height:30,width:269},t),(0,x.jsx)(M.Z,{height:390,width:269},t)]})})),!Z&&N.map((function(e,t){return(0,x.jsx)(D,{data:null===e||void 0===e?void 0:e.data,category:null===e||void 0===e?void 0:e.cat[0],index:t})}))]})})})]})]})})},C=T.ZP.div(k||(k=(0,a.Z)(["\n  color: var(--violet);\n  font-size: 1rem;\n  font-weight: 400;\n  text-align: justify;\n  margin: 28px 0 10px 210px;\n"])))},8765:function(e,t,n){var a,i=n(30168),r=(n(72791),n(91523)),l=n(86538),s=n(80184),c=l.ZP.div(a||(a=(0,i.Z)(['\n\tmargin: 28px 0 10px 0;\n\t.breadcrumb {\n\t\twidth: 100%;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tbackground-color: transparent;\n\t}\n\tol {\n\t\tdisplay: flex;\n\t}\n\tli {\n\t\tfont-family: "Proxima Nova";\n\t\tfont-style: normal;\n\t\tfont-weight: 400;\n\t\tfont-size: 14px;\n\t\tline-height: 25px;\n\t}\n\t.breadcrump__nav {\n\t\tmargin: auto;\n\t\tleft: 0;\n\t\tdisplay: flex;\n\t\tmax-width: 1170px;\n\t\tflex-direction: column;\n\t}\n\n\t.breadcrumb-item:not(.active) a {\n\t\tcolor: rgba(0, 0, 0, 0.45);\n\t}\n\n\th2 {\n\t\tfont-family: "Bebas Neue Pro";\n\t\tfont-style: normal;\n\t\tfont-weight: 700;\n\t\tfont-size: 47px;\n\t\tline-height: 39px;\n\t}\n'])));t.Z=function(e){var t=function(e){return e.length>1};return(0,s.jsx)(c,{children:(0,s.jsxs)("div",{className:"breadcrump__nav",children:[(0,s.jsx)("div",{children:(0,s.jsx)("h2",{children:e.title})}),(0,s.jsx)("div",{children:(0,s.jsx)("ol",{className:"breadcrumb",children:e.items.map((function(n,a){return(0,s.jsx)("li",{className:"breadcrumb-item ".concat(e.items.length-1===a?"active":""),children:t(n)?(0,s.jsxs)(r.rU,{to:n[1],children:[" ",n[0]," ",n[1]]}):n[0]},n[0])}))})})]})})}},85785:function(e,t,n){var a=n(15671),i=n(43144),r=n(72426),l=n.n(r),s=function(){function e(){(0,a.Z)(this,e)}return(0,i.Z)(e,null,[{key:"Hour",value:function(e){return l()(e).format("hh:mm a")}},{key:"HourMinute",value:function(e){return l()(e).format("DD-MM-YYYY HH:mm")}},{key:"fullDate",value:function(e){return l()(e).format("DD-MM-YYYY")}},{key:"Day",value:function(e){return l()(e).format("D")}},{key:"Month",value:function(e){return l()(e).format("MMMM")}},{key:"Year",value:function(e){return l()(e).format("y")}},{key:"date",value:function(e){var t=this.Day(e),n=this.Month(e),a=this.Year(e);return"".concat(t," ").concat(n," ").concat(a," ")}},{key:"DetaillDate",value:function(e){return l()(e).format("dddd, MMMM Do YYYY")}}]),e}();s.pipeDate=function(e){var t=e.split("T")[0];return l()(t).format("L")},t.Z=s},32771:function(e,t,n){n(72791);var a=n(87087),i=(n(19713),n(80184));t.Z=function(e){var t=e.src,n=e.width,r=e.height,l=e.alt,s=e.caption,c=e.key,o=t||"https://placehold.jp/".concat(n,"x").concat(r,".png");return(0,i.jsx)(a.LazyLoadImage,{alt:l,height:r,src:o,width:n,effect:"blur",caption:s},c)}},2579:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(29439),i=n(1413),r=n(45987),l=n(72791),s=["count","wrapper","className","containerClassName","containerTestId","circle","style"],c=l.createContext({});function o(e){for(var t,n,o,d=e.count,u=void 0===d?1:d,h=e.wrapper,m=e.className,v=e.containerClassName,p=e.containerTestId,x=e.circle,f=void 0!==x&&x,g=e.style,_=(0,r.Z)(e,s),j=l.useContext(c),y=(0,i.Z)({},_),b=0,Z=Object.entries(_);b<Z.length;b++){var N=(0,a.Z)(Z[b],2),w=N[0];"undefined"===typeof N[1]&&delete y[w]}var k=(0,i.Z)((0,i.Z)((0,i.Z)({},j),y),{},{circle:f}),D=(0,i.Z)((0,i.Z)({},g),function(e){var t=e.baseColor,n=e.highlightColor,a=e.width,i=e.height,r=e.borderRadius,l=e.circle,s=e.direction,c=e.duration,o=e.enableAnimation,d=void 0===o||o,u={};return"rtl"===s&&(u["--animation-direction"]="reverse"),"number"===typeof c&&(u["--animation-duration"]="".concat(c,"s")),d||(u["--pseudo-element-display"]="none"),"string"!==typeof a&&"number"!==typeof a||(u.width=a),"string"!==typeof i&&"number"!==typeof i||(u.height=i),"string"!==typeof r&&"number"!==typeof r||(u.borderRadius=r),l&&(u.borderRadius="50%"),"undefined"!==typeof t&&(u["--base-color"]=t),"undefined"!==typeof n&&(u["--highlight-color"]=n),u}(k)),M="react-loading-skeleton";m&&(M+=" ".concat(m));for(var Y=null!==(t=k.inline)&&void 0!==t&&t,T=[],U=Math.ceil(u),C=0;C<U;C++){var I=D;if(U>u&&C===U-1){var R=null!==(n=I.width)&&void 0!==n?n:"100%",q=u%1,F="number"===typeof R?R*q:"calc(".concat(R," * ").concat(q,")");I=(0,i.Z)((0,i.Z)({},I),{},{width:F})}var A=l.createElement("span",{className:M,style:I,key:C},"\u200c");Y?T.push(A):T.push(l.createElement(l.Fragment,{key:C},A,l.createElement("br",null)))}return l.createElement("span",{className:v,"data-testid":p,"aria-live":"polite","aria-busy":null===(o=k.enableAnimation)||void 0===o||o},h?T.map((function(e,t){return l.createElement(h,{key:t},e)})):T)}}}]);
//# sourceMappingURL=2431.4e640238.chunk.js.map