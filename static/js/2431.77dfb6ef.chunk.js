"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[2431],{7852:function(e,t,i){i.r(t),i.d(t,{default:function(){return D}});var n=i(29439),a=i(72791),l=i(8765),r=i(27314),s=i(25930),c=i(91523),o=i(94233),d=i(10818),u=i(35921),h=i(51949),m=i(61750),v=i(26189),p=i(57688),x=i(4726),f=i(80184);var _=function(e){var t=e.rows,i=e.index;return(0,f.jsx)("div",{children:(0,f.jsx)(c.rU,{to:"/detaill/category/".concat(t._id),style:{color:"#000"},children:x.Z.Trans("title",t)})},i)},g=i(85785);var j=function(e){var t=e.data;return(0,f.jsxs)("div",{className:"pub__relative",children:[(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("img",{src:t.photos.length>0?t.photos[0].downloadUrl:"Image publication image ",alt:"header"})}),(0,f.jsx)(c.rU,{to:"/detail/".concat(t.id),children:(0,f.jsx)("div",{className:"__detaills",children:(0,f.jsxs)("div",{className:"list__detaill",children:[(0,f.jsxs)("div",{className:"detaill__header",children:[(0,f.jsx)("div",{className:"__left",children:(0,f.jsxs)("p",{children:[" ",x.Z.Trans("title",null===t||void 0===t?void 0:t.thematique)]})}),(0,f.jsx)("div",{className:"__right",children:g.Z.fullDate(t.date)})]}),(0,f.jsx)("div",{className:"__content text__wrap",style:{maxWidth:250},children:x.Z.Trans("title",t)})]})})})]},e.key)},b=i(32771),y=i(64428);var Z=function(e){var t=e.data,i=e.index,n=e.thematique;return(0,f.jsxs)("div",{className:"pub__migration",children:[(0,f.jsxs)("div",{className:"archieve__header",children:[(0,f.jsx)("h2",{children:x.Z.Trans("title",n)}),(0,f.jsx)("div",{className:"satestique__bar"})]}),(0,f.jsx)("div",{className:"migration__images",children:t.map((function(e){return function(e){return(0,f.jsx)("div",{children:(0,f.jsxs)(c.rU,{to:"/detail/".concat(e.id),children:[(0,f.jsx)(b.Z,{src:e.photos.length>0?"".concat(y.F,"/file/download?privateUrl=").concat(e.photos[0].privateUrl):"Image publication image ",width:"370",height:"300",alt:"Image publication image "}),(0,f.jsxs)("div",{className:"list__detaill",children:[(0,f.jsxs)("div",{className:"detaill__header",children:[(0,f.jsx)("div",{}),(0,f.jsx)("div",{className:"header__right",children:g.Z.fullDate(e.date)})]}),(0,f.jsx)("div",{className:"detaill__content text__wrap",children:x.Z.Trans("title",e)})]})]})})}(e)}))}),(0,f.jsx)(c.rU,{to:"/detaill/".concat(n._id),children:(0,f.jsx)("div",{className:"plus__button",children:(0,s.ag)("common.voirPlus")})})]},i)};var N=function(e){var t=e.data,i=e.category,n=(e.index,localStorage.getItem("language"));return(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{className:"archieve__header",children:[(0,f.jsxs)("h2",{children:[" ",x.Z.Trans("title",i)]}),(0,f.jsx)("div",{className:"satestique__bar"})]}),(0,f.jsx)("div",{className:"manification__images",children:t.map((function(e){return function(e){return(0,f.jsx)(c.rU,{to:"/detail/".concat(e.id),children:(0,f.jsxs)("div",{style:{display:"flex",columnGap:"20px"},children:[(0,f.jsx)(b.Z,{src:e.photos.length>0?"".concat(y.F,"/file/download?privateUrl=").concat(e.photos[0].privateUrl):"",width:120,height:78,alt:"Image"}),(0,f.jsxs)("div",{className:"list__detaill",children:[(0,f.jsxs)("div",{className:"detaill__header",children:[(0,f.jsx)("div",{className:"header__left",children:(0,f.jsx)("p",{children:"fr"===n?e.thematique.titleFR:e.thematique.titleAR})}),(0,f.jsx)("div",{className:"header__right",children:g.Z.fullDate(t.date)}),(0,f.jsx)("div",{className:"header__right"})]}),(0,f.jsx)("div",{className:"detaill__content text__wrap",style:{width:233},children:x.Z.Trans("title",e)})]})]})})}(e)}))}),(0,f.jsx)(c.rU,{to:"/detaill/category/".concat(i._id),children:(0,f.jsx)("div",{className:"plus__button",children:(0,s.ag)("common.voirPlus")})})]})},w=i(2579),k=i(72239);var D=function(){var e=(0,o.I0)(),t=localStorage.getItem("language"),i=(0,a.useState)(""),x=(0,n.Z)(i,2),g=x[0],b=x[1];(0,a.useEffect)((function(){k.Z.list("","","","").then((function(e){"fr"===t&&b(e.rows[0].publicationDescFR),"ar"===t&&b(e.rows[0].publicationDescAR),"en"===t&&b(e.rows[0].publicationDescEN)}))}),[]),(0,a.useEffect)((function(){e(v.Z.allpublicationbythematique()),e(v.Z.allpublicationbyCategory()),e(v.Z.doFetchValidePublication(4)),e(d.Z.doFetch()),e(u.Z.doFetch())}),[]),(0,o.v9)(p.Z.selectloadingpublicationbythematique);var y=(0,o.v9)(p.Z.selectRows),D=(0,o.v9)(p.Z.selectLoading),M=((0,o.v9)(p.Z.loadingByCategory),(0,o.v9)(h.Z.selectLoading)),Y=(0,o.v9)(h.Z.selectRows),U=(0,o.v9)(m.Z.selectLoading),C=(0,o.v9)(m.Z.selectRows);return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("div",{className:"publication__page",children:[(0,f.jsx)("div",{className:"app__calendar",children:(0,f.jsx)(c.rU,{to:"/Evenements",children:(0,f.jsx)("img",{src:r.zX,alt:""})})}),(0,f.jsx)("div",{children:(0,f.jsx)(l.Z,{title:(0,s.ag)("entities.publication.label"),items:[[(0,s.ag)("app.title"),"/"],[(0,s.ag)("entities.publication.label")]]})}),(0,f.jsxs)("div",{className:"app__category",children:[(0,f.jsx)("p",{children:g}),(0,f.jsxs)("div",{className:"category__list",children:[M&&Array.from({length:7}).map((function(e,t){return(0,f.jsx)(w.Z,{height:60,width:100},t)})),!M&&(null===Y||void 0===Y?void 0:Y.map((function(e,t){return(0,f.jsx)(_,{rows:e,index:t})})))]})]}),(0,f.jsxs)("div",{className:"app__pub",children:[(0,f.jsx)("div",{className:"publication__header",children:(0,f.jsx)("div",{className:"image__pub",children:y.length>0?null===y||void 0===y?void 0:y.map((function(e,t){return(0,f.jsx)(j,{data:e},t)})):null})}),U?(0,f.jsxs)("div",{className:"pub__migration",children:[(0,f.jsx)("div",{children:(0,f.jsx)(w.Z,{height:60,width:1170})}),(0,f.jsx)("div",{className:"sketlon__images",children:(0,f.jsx)("div",{children:(0,f.jsx)(w.Z,{height:370,width:370,count:3,inline:!0,enableAnimation:!0})})})]}):C.slice(0,2).map((function(e,t){return(0,f.jsx)(Z,{data:null===e||void 0===e?void 0:e.publications,thematique:e,index:t})})),(0,f.jsx)("div",{className:"app__articles",children:(0,f.jsx)("div",{className:"articles__top",children:(0,f.jsxs)("div",{className:"__top",children:[D&&Array.from({length:3}).map((function(e,t){return(0,f.jsxs)("div",{children:[(0,f.jsx)(w.Z,{height:30,width:269},t),(0,f.jsx)(w.Z,{height:390,width:269},t)]})})),!M&&(null===Y||void 0===Y?void 0:Y.slice(0,3).map((function(e,t){return(0,f.jsx)(N,{data:null===e||void 0===e?void 0:e.publications,category:e,index:t})})))]})})})]})]})})}},8765:function(e,t,i){var n,a=i(30168),l=(i(72791),i(91523)),r=i(86538),s=i(80184),c=r.ZP.div(n||(n=(0,a.Z)(['\n\tmargin: 28px 0 10px 0;\n\t.breadcrumb {\n\t\twidth: 100%;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tbackground-color: transparent;\n\t}\n\tol {\n\t\tdisplay: flex;\n\t}\n\tli {\n\t\tfont-family: "Proxima Nova";\n\t\tfont-style: normal;\n\t\tfont-weight: 400;\n\t\tfont-size: 14px;\n\t\tline-height: 25px;\n\t}\n\t.breadcrump__nav {\n\t\tmargin: auto;\n\t\tleft: 0;\n\t\tdisplay: flex;\n\t\tmax-width: 1170px;\n\t\tflex-direction: column;\n\t}\n\n\t.breadcrumb-item:not(.active) a {\n\t\tcolor: rgba(0, 0, 0, 0.45);\n\t}\n\n\th2 {\n\t\tfont-family: "Bebas Neue Pro";\n\t\tfont-style: normal;\n\t\tfont-weight: 700;\n\t\tfont-size: 47px;\n\t\tline-height: 39px;\n\t}\n'])));t.Z=function(e){var t=function(e){return e.length>1};return(0,s.jsx)(c,{children:(0,s.jsxs)("div",{className:"breadcrump__nav",children:[(0,s.jsx)("div",{children:(0,s.jsx)("h2",{children:e.title})}),(0,s.jsx)("div",{children:(0,s.jsx)("ol",{className:"breadcrumb",children:e.items.map((function(i,n){return(0,s.jsx)("li",{className:"breadcrumb-item ".concat(e.items.length-1===n?"active":""),children:t(i)?(0,s.jsxs)(l.rU,{to:i[1],children:[" ",i[0]," ",i[1]]}):i[0]},i[0])}))})})]})})}},85785:function(e,t,i){var n=i(15671),a=i(43144),l=i(72426),r=i.n(l),s=function(){function e(){(0,n.Z)(this,e)}return(0,a.Z)(e,null,[{key:"Hour",value:function(e){return r()(e).format("hh:mm a")}},{key:"HourMinute",value:function(e){return r()(e).format("DD-MM-YYYY HH:mm")}},{key:"fullDate",value:function(e){return r()(e).format("DD-MM-YYYY")}},{key:"Day",value:function(e){return r()(e).format("D")}},{key:"Month",value:function(e){return r()(e).format("MMMM")}},{key:"Year",value:function(e){return r()(e).format("y")}},{key:"date",value:function(e){var t=this.Day(e),i=this.Month(e),n=this.Year(e);return"".concat(t," ").concat(i," ").concat(n," ")}},{key:"DetaillDate",value:function(e){return r()(e).format("dddd, MMMM Do YYYY")}}]),e}();s.pipeDate=function(e){var t=e.split("T")[0];return r()(t).format("DD-MM-YYYY")},t.Z=s},32771:function(e,t,i){i(72791);var n=i(87087),a=(i(19713),i(80184));t.Z=function(e){var t=e.src,i=e.width,l=e.height,r=e.alt,s=e.caption,c=e.key,o=t||"https://placehold.jp/".concat(i,"x").concat(l,".png");return(0,a.jsx)(n.LazyLoadImage,{alt:r,height:l,src:o,width:i,effect:"blur",caption:s},c)}},2579:function(e,t,i){i.d(t,{Z:function(){return d}});var n=i(29439),a=i(1413),l=i(45987),r=i(72791),s=["count","wrapper","className","containerClassName","containerTestId","circle","style"],c=r.createContext({}),o=!0;function d(e){for(var t,i,d,u=e.count,h=void 0===u?1:u,m=e.wrapper,v=e.className,p=e.containerClassName,x=e.containerTestId,f=e.circle,_=void 0!==f&&f,g=e.style,j=(0,l.Z)(e,s),b=r.useContext(c),y=(0,a.Z)({},j),Z=0,N=Object.entries(j);Z<N.length;Z++){var w=(0,n.Z)(N[Z],2),k=w[0];"undefined"===typeof w[1]&&delete y[k]}var D=(0,a.Z)((0,a.Z)((0,a.Z)({},b),y),{},{circle:_}),M=(0,a.Z)((0,a.Z)({},g),function(e){var t=e.baseColor,i=e.highlightColor,n=e.width,a=e.height,l=e.borderRadius,r=e.circle,s=e.direction,c=e.duration,d=e.enableAnimation,u=void 0===d?o:d,h={};return"rtl"===s&&(h["--animation-direction"]="reverse"),"number"===typeof c&&(h["--animation-duration"]="".concat(c,"s")),u||(h["--pseudo-element-display"]="none"),"string"!==typeof n&&"number"!==typeof n||(h.width=n),"string"!==typeof a&&"number"!==typeof a||(h.height=a),"string"!==typeof l&&"number"!==typeof l||(h.borderRadius=l),r&&(h.borderRadius="50%"),"undefined"!==typeof t&&(h["--base-color"]=t),"undefined"!==typeof i&&(h["--highlight-color"]=i),h}(D)),Y="react-loading-skeleton";v&&(Y+=" ".concat(v));for(var U=null!==(t=D.inline)&&void 0!==t&&t,C=[],F=Math.ceil(h),I=0;I<F;I++){var R=M;if(F>h&&I===F-1){var T=null!==(i=R.width)&&void 0!==i?i:"100%",q=h%1,E="number"===typeof T?T*q:"calc(".concat(T," * ").concat(q,")");R=(0,a.Z)((0,a.Z)({},R),{},{width:E})}var A=r.createElement("span",{className:Y,style:R,key:I},"\u200c");U?C.push(A):C.push(r.createElement(r.Fragment,{key:I},A,r.createElement("br",null)))}return r.createElement("span",{className:p,"data-testid":x,"aria-live":"polite","aria-busy":null!==(d=D.enableAnimation)&&void 0!==d?d:o},m?C.map((function(e,t){return r.createElement(m,{key:t},e)})):C)}}}]);
//# sourceMappingURL=2431.77dfb6ef.chunk.js.map