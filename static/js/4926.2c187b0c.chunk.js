(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[4926],{8765:function(e,t,i){"use strict";var n,a=i(30168),l=(i(72791),i(91523)),s=i(86538),r=i(80184),d=s.ZP.div(n||(n=(0,a.Z)(['\n\tmargin: 28px 0 10px 0;\n\t.breadcrumb {\n\t\twidth: 100%;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tbackground-color: transparent;\n\t}\n\tol {\n\t\tdisplay: flex;\n\t}\n\tli {\n\t\tfont-family: "Proxima Nova";\n\t\tfont-style: normal;\n\t\tfont-weight: 400;\n\t\tfont-size: 14px;\n\t\tline-height: 25px;\n\t}\n\t.breadcrump__nav {\n\t\tmargin: auto;\n\t\tleft: 0;\n\t\tdisplay: flex;\n\t\tmax-width: 1170px;\n\t\tflex-direction: column;\n\t}\n\n\t.breadcrumb-item:not(.active) a {\n\t\tcolor: rgba(0, 0, 0, 0.45);\n\t}\n\n\th2 {\n\t\tfont-family: "Bebas Neue Pro";\n\t\tfont-style: normal;\n\t\tfont-weight: 700;\n\t\tfont-size: 47px;\n\t\tline-height: 39px;\n\t}\n'])));t.Z=function(e){var t=function(e){return e.length>1};return(0,r.jsx)(d,{children:(0,r.jsxs)("div",{className:"breadcrump__nav",children:[(0,r.jsx)("div",{children:(0,r.jsx)("h2",{children:e.title})}),(0,r.jsx)("div",{children:(0,r.jsx)("ol",{className:"breadcrumb",children:e.items.map((function(i,n){return(0,r.jsx)("li",{className:"breadcrumb-item ".concat(e.items.length-1===n?"active":""),children:t(i)?(0,r.jsxs)(l.rU,{to:i[1],children:[" ",i[0]," ",i[1]]}):i[0]},i[0])}))})})]})})}},85785:function(e,t,i){"use strict";var n=i(15671),a=i(43144),l=i(72426),s=i.n(l),r=function(){function e(){(0,n.Z)(this,e)}return(0,a.Z)(e,null,[{key:"Hour",value:function(e){return s()(e).format("hh:mm a")}},{key:"HourMinute",value:function(e){return s()(e).format("DD-MM-YYYY HH:mm")}},{key:"fullDate",value:function(e){return s()(e).format("DD-MM-YYYY")}},{key:"Day",value:function(e){return s()(e).format("D")}},{key:"Month",value:function(e){return s()(e).format("MMMM")}},{key:"Year",value:function(e){return s()(e).format("y")}},{key:"date",value:function(e){var t=this.Day(e),i=this.Month(e),n=this.Year(e);return"".concat(t," ").concat(i," ").concat(n," ")}},{key:"DetaillDate",value:function(e){return s()(e).format("dddd, MMMM Do YYYY")}}]),e}();r.pipeDate=function(e){var t=e.split("T")[0];return s()(t).format("DD-MM-YYYY")},t.Z=r},32771:function(e,t,i){"use strict";i(72791);var n=i(87087),a=(i(19713),i(80184));t.Z=function(e){var t=e.src,i=e.width,l=e.height,s=e.alt,r=e.caption,d=e.key,c=t||"https://placehold.jp/".concat(i,"x").concat(l,".png");return(0,a.jsx)(n.LazyLoadImage,{alt:s,height:l,src:c,width:i,effect:"blur",caption:r},d)}},95214:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return R}});var n=i(72791),a=i(25930),l=i(79271),s=i(94233),r=i(27314),d=i(8765),c=i(61659),o=i(50873),h=function(e){return e.publication.view},u=(0,o.P1)([h],(function(e){return e.record})),x={selectHasRecord:(0,o.P1)([u],(function(e){return e.length>0})),selectLoading:(0,o.P1)([h],(function(e){return Boolean(e.loading)})),selectRecord:u,selectRaw:h},v=i(29439),m=i(32771),f=i(4726),p=i(26189),j=i(57688),_=i(52007),g=i.n(_),w=i(91523),N=i(78316),Z=i(39846),b=i(93127),y=i(45904),Y=i(56720),M=i(32028),D=i(3582),k=i(79853),F=i(80184);var T=function(e){var t=e.pdf,i=(0,n.useState)(t),a=(0,v.Z)(i,2),l=a[0];return a[1],(0,F.jsx)("div",{style:{maxHeight:"750px",overflowY:"scroll"},children:l?(0,F.jsx)("div",{style:{border:"1px solid rgba(0, 0, 0, 0.3)",height:"100%"},children:(0,F.jsx)(k.Viewer,{fileUrl:l})}):(0,F.jsx)("div",{style:{alignItems:"center",border:"2px dashed rgba(0, 0, 0, .3)",display:"flex",fontSize:"2rem",height:"100%",justifyContent:"center",width:"100%"},children:"Not pdf Found"})})},U=i(72426),q=i.n(U);function I(e){var t,i,l=(0,s.I0)(),r=e.rows,d=(0,s.v9)(j.Z.selectRows),o=(0,s.v9)(j.Z.selectLoading),h=(0,n.useState)(0),u=(0,v.Z)(h,2),x=(u[0],u[1],(0,n.useState)(1)),_=(0,v.Z)(x,2);_[0],_[1];(0,n.useEffect)((function(){l(p.Z.doFetchValidePublication())}),[]);var g=localStorage.getItem("language");return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)("div",{className:"header__left",children:e.publication?(0,F.jsx)(w.rU,{to:"/detail/".concat(e.publication._id),children:(0,F.jsxs)("p",{style:{fontSize:20},children:["fr"===g||"en"===g?(0,F.jsx)("i",{className:"fas fa-arrow-alt-circle-left",style:{margin:5}}):(0,F.jsx)("i",{className:"fas fa-arrow-alt-circle-right",style:{margin:5}}),(0,a.ag)("common.cahierMere")]})}):(0,F.jsx)("p",{children:f.Z.Trans("title",null===r||void 0===r?void 0:r.thematique)})}),(0,F.jsxs)("div",{className:"detail",children:[(0,F.jsxs)("div",{className:"detail__left",children:[(0,F.jsx)("div",{className:"detail__title",children:f.Z.Trans("title",r)}),(0,F.jsxs)("div",{className:"detail__author",children:[(0,F.jsx)("div",{className:"author__left",children:(0,F.jsx)("div",{className:"left__author__date",children:q()(null===r||void 0===r?void 0:r.date).format("DD-MM-YYYY")})}),(0,F.jsxs)("div",{className:"detaillEvenement__socialMedia",children:[(0,F.jsxs)("div",{className:"socialMedia__title",children:[(0,a.ag)("common.Partager")," :"]}),(0,F.jsx)("div",{children:(0,F.jsx)(Z.Z,{url:window.location.href,children:(0,F.jsx)(b.Z,{size:35,round:!0})})}),(0,F.jsx)("div",{children:(0,F.jsx)(y.Z,{url:window.location.href,children:(0,F.jsx)(Y.Z,{size:35,round:!0})})}),(0,F.jsx)("div",{children:(0,F.jsx)(M.Z,{url:window.location.href,children:(0,F.jsx)(D.Z,{size:35,round:!0})})})]})]}),(0,F.jsxs)("div",{className:"detail__description",children:[(null===r||void 0===r?void 0:r.photos.length)>0?(0,F.jsx)(N.Z,{afterChange:function(e){},children:null===r||void 0===r||null===(t=r.photos)||void 0===t?void 0:t.map((function(e){return(0,F.jsx)("div",{style:{paddingTop:"19px"},children:(0,F.jsx)(m.Z,{width:"100%",height:"500",src:e.downloadUrl})})}))}):null,(0,F.jsx)("div",{className:"description__detaillEvenement",dangerouslySetInnerHTML:{__html:f.Z.Trans("description",r)}}),(0,F.jsx)("hr",{})]}),(0,F.jsx)("div",{className:"App",children:(null===r||void 0===r?void 0:r.supports.length)>0?(0,F.jsxs)("div",{children:[(0,F.jsx)(F.Fragment,{children:"pdf"===r.supports[0].name.split(".").pop()?(0,F.jsx)(T,{pdf:null===r||void 0===r||null===(i=r.supports[0])||void 0===i?void 0:i.downloadUrl}):null}),(0,F.jsx)("a",{href:null===r||void 0===r?void 0:r.supports[0].downloadUrl,download:!0,style:{color:"#9a0000",fontSize:20},children:(0,a.ag)("telecharger")}),(0,F.jsx)("hr",{})]}):null})]}),(0,F.jsxs)("div",{children:[(0,F.jsxs)("div",{className:"archieve__header",children:[(0,F.jsx)("h2",{children:(0,a.ag)("entities.publication.lastNews")}),(0,F.jsx)("div",{className:"satestique__bar"})]}),(0,F.jsx)("div",{className:"manification__images",children:o?(0,F.jsx)("h4",{children:(0,a.ag)("table.loading")}):(0,F.jsx)(F.Fragment,{children:d.length>0?d.map((function(e){return(0,F.jsx)(w.rU,{to:"/detail/".concat(e.id),children:(0,F.jsxs)("div",{onClick:function(){return t=e.id,void l(c.Z.doFind(t));var t},style:{cursor:"pointer",display:"flex",columnGap:17},children:[(0,F.jsx)(m.Z,{src:e.photos.length>0?e.photos[0].downloadUrl:"Image publication image ",width:"120",height:"78",alt:""}),(0,F.jsxs)("div",{className:"list__detaill",children:[(0,F.jsxs)("div",{className:"detaill__header",children:[(0,F.jsx)("div",{className:"header__left",children:(0,F.jsx)("p",{children:f.Z.Trans("title",e.thematique)})}),(0,F.jsx)("div",{className:"header__right",children:q()(e.date).format("DD-MM-YYYY")})]}),(0,F.jsx)("div",{className:"detaill__content text__wrap",style:{width:"233px"},children:f.Z.Trans("title",e)})]})]})})})):null})})]})]})]})}I.prototype={showDetaill:g().func.isRequired};var z=I,P=i(85785),C=i(64428);function S(e){var t=e.rows,i=e.showDetaill,l=e.articles,r=(0,s.I0)(),d=(0,s.v9)(null===j.Z||void 0===j.Z?void 0:j.Z.rowsThematique),c=(0,s.v9)(null===j.Z||void 0===j.Z?void 0:j.Z.loadingthematique);return(0,n.useEffect)((function(){var e;r(p.Z.doFetchPublicationWithThematique(null===t||void 0===t||null===(e=t.thematique)||void 0===e?void 0:e.id))}),[]),(0,F.jsxs)("div",{className:"publication__interest",children:[(0,F.jsxs)("div",{className:"archieve__header",children:[l?(0,F.jsx)("h2",{children:(0,a.ag)("entities.publication.articles")}):(0,F.jsx)("h2",{children:(0,a.ag)("entities.publication.publicationInteresser")}),(0,F.jsx)("div",{className:"satestique__bar"})]}),(0,F.jsx)(F.Fragment,{children:l?(0,F.jsx)("div",{className:"interest__detaill",children:l?l.map((function(e){return(0,F.jsx)(w.rU,{to:{pathname:"/detail/".concat(e.id),article:"article"},children:(0,F.jsxs)("div",{onClick:function(){return i(e.id)},style:{cursor:"pointer",display:"flex",gap:19},children:[(0,F.jsx)(m.Z,{src:e.photos.length>0?"".concat(C.F,"/file/download?privateUrl=").concat(e.photos[0].privateUrl):"Image publication image ",width:"182",height:"147",alt:""}),(0,F.jsxs)("div",{className:"list__detaill",children:[(0,F.jsxs)("div",{className:"detaill__header",children:[(0,F.jsx)("div",{className:"header__left",children:(0,F.jsx)("p",{children:(0,a.ag)("entities.articleCahier.enumerators.type.".concat(e.type))})}),(0,F.jsx)("div",{className:"header__right",children:P.Z.fullDate(e.date)})]}),(0,F.jsx)("div",{className:"detaill__content text__wrap",style:{width:"369px"},children:f.Z.Trans("title",e)})]})]})})})):(0,F.jsx)("h4",{children:(0,a.ag)("common.noData")})}):(0,F.jsx)("div",{className:"interest__detaill",children:c?(0,F.jsx)("h4",{children:(0,a.ag)("table.loading")}):d.map((function(e){return(0,F.jsx)(w.rU,{to:"/detail/".concat(e.id),children:(0,F.jsxs)("div",{onClick:function(){return i(e.id)},style:{cursor:"pointer",display:"flex",gap:19},children:[(0,F.jsx)(m.Z,{src:e.photos.length>0?e.photos[0].downloadUrl:"Image publication image ",width:"182",height:"147",alt:""}),(0,F.jsxs)("div",{className:"list__detaill",children:[(0,F.jsxs)("div",{className:"detaill__header",children:[(0,F.jsx)("div",{className:"header__left",children:(0,F.jsxs)("p",{children:[f.Z.Trans("title",e.thematique)," "]})}),(0,F.jsx)("div",{className:"header__right",children:P.Z.fullDate(e.date)})]}),(0,F.jsx)("div",{className:"detaill__content text__wrap",style:{width:"369px"},children:f.Z.Trans("title",e)})]})]})})}))})})]})}S.prototype={showDetaill:g().func.isRequired};var H=S;var R=function(e){var t=(0,s.I0)(),i=(0,l.$B)().params.id,o=(0,s.v9)(x.selectRecord),h=(0,s.v9)(x.selectLoading);return(0,n.useEffect)((function(){!function(i){e.location.article?t(c.Z.doFindArticle(i)):t(c.Z.doFind(i))}(i)}),[i,t]),(0,F.jsx)(F.Fragment,{children:(0,F.jsxs)("div",{className:"publication__page",children:[(0,F.jsx)("div",{className:"app__calendar",children:(0,F.jsx)("img",{src:r.zX,alt:""})}),(0,F.jsx)(d.Z,{items:[[(0,a.ag)("dashboard.menu"),"/"],[(0,a.ag)("entities.publication.label")]]}),h?(0,F.jsx)("div",{className:"page__detaill",children:(0,F.jsx)("h4",{children:(0,a.ag)("table.loading")})}):(0,F.jsx)("div",{className:"page__detaill",children:e.location.article?(0,F.jsx)(z,{rows:o,publication:o.publication}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(z,{rows:o}),(null===o||void 0===o?void 0:o.articles.length)>0?(0,F.jsx)(H,{articles:null===o||void 0===o?void 0:o.articles,rows:o}):null,(0,F.jsx)(H,{rows:o})]})})]})})}},93414:function(){},70172:function(){},2001:function(){},33779:function(){},66558:function(){},82258:function(){}}]);
//# sourceMappingURL=4926.2c187b0c.chunk.js.map