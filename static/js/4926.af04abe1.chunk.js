(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[4926],{8765:function(e,t,i){"use strict";var n,a=i(30168),l=(i(72791),i(91523)),s=i(86538),r=i(80184),d=s.ZP.div(n||(n=(0,a.Z)(['\n\tmargin: 28px 0 10px 0;\n\t.breadcrumb {\n\t\twidth: 100%;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tbackground-color: transparent;\n\t}\n\tol {\n\t\tdisplay: flex;\n\t}\n\tli {\n\t\tfont-family: "Proxima Nova";\n\t\tfont-style: normal;\n\t\tfont-weight: 400;\n\t\tfont-size: 14px;\n\t\tline-height: 25px;\n\t}\n\t.breadcrump__nav {\n\t\tmargin: auto;\n\t\tleft: 0;\n\t\tdisplay: flex;\n\t\tmax-width: 1170px;\n\t\tflex-direction: column;\n\t}\n\n\t.breadcrumb-item:not(.active) a {\n\t\tcolor: rgba(0, 0, 0, 0.45);\n\t}\n\n\th2 {\n\t\tfont-family: "Bebas Neue Pro";\n\t\tfont-style: normal;\n\t\tfont-weight: 700;\n\t\tfont-size: 47px;\n\t\tline-height: 39px;\n\t}\n'])));t.Z=function(e){var t=function(e){return e.length>1};return(0,r.jsx)(d,{children:(0,r.jsxs)("div",{className:"breadcrump__nav",children:[(0,r.jsx)("div",{children:(0,r.jsx)("h2",{children:e.title})}),(0,r.jsx)("div",{children:(0,r.jsx)("ol",{className:"breadcrumb",children:e.items.map((function(i,n){return(0,r.jsx)("li",{className:"breadcrumb-item ".concat(e.items.length-1===n?"active":""),children:t(i)?(0,r.jsxs)(l.rU,{to:i[1],children:[" ",i[0]," ",i[1]]}):i[0]},i[0])}))})})]})})}},85785:function(e,t,i){"use strict";var n=i(15671),a=i(43144),l=i(72426),s=i.n(l),r=function(){function e(){(0,n.Z)(this,e)}return(0,a.Z)(e,null,[{key:"Hour",value:function(e){return s()(e).format("hh:mm a")}},{key:"HourMinute",value:function(e){return s()(e).format("DD-MM-YYYY HH:mm")}},{key:"fullDate",value:function(e){return s()(e).format("DD-MM-YYYY")}},{key:"Day",value:function(e){return s()(e).format("D")}},{key:"Month",value:function(e){return s()(e).format("MMMM")}},{key:"Year",value:function(e){return s()(e).format("y")}},{key:"date",value:function(e){var t=this.Day(e),i=this.Month(e),n=this.Year(e);return"".concat(t," ").concat(i," ").concat(n," ")}},{key:"DetaillDate",value:function(e){return s()(e).format("dddd, MMMM Do YYYY")}}]),e}();r.pipeDate=function(e){var t=e.split("T")[0];return s()(t).format("L")},t.Z=r},32771:function(e,t,i){"use strict";i(72791);var n=i(87087),a=(i(19713),i(80184));t.Z=function(e){var t=e.src,i=e.width,l=e.height,s=e.alt,r=e.caption,d=e.key,c=t||"https://placehold.jp/".concat(i,"x").concat(l,".png");return(0,a.jsx)(n.LazyLoadImage,{alt:s,height:l,src:c,width:i,effect:"blur",caption:r},d)}},95214:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return R}});var n=i(72791),a=i(25930),l=i(79271),s=i(94233),r=i(27314),d=i(8765),c=i(61659),o=i(50873),h=function(e){return e.publication.view},u=(0,o.P1)([h],(function(e){return e.record})),v={selectHasRecord:(0,o.P1)([u],(function(e){return e.length>0})),selectLoading:(0,o.P1)([h],(function(e){return Boolean(e.loading)})),selectRecord:u,selectRaw:h},x=i(29439),f=i(32771),m=i(4726),p=i(26189),j=i(57688),_=i(52007),g=i.n(_),w=i(91523),N=i(78316),Z=i(39846),b=i(93127),y=i(45904),D=i(56720),M=i(32028),k=i(3582),Y=i(79853),T=i(80184);var q=function(e){var t=e.pdf,i=(0,n.useState)(t),a=(0,x.Z)(i,2),l=a[0];return a[1],(0,T.jsx)("div",{style:{maxHeight:"750px",overflowY:"scroll"},children:l?(0,T.jsx)("div",{style:{border:"1px solid rgba(0, 0, 0, 0.3)",height:"100%"},children:(0,T.jsx)(Y.Viewer,{fileUrl:l})}):(0,T.jsx)("div",{style:{alignItems:"center",border:"2px dashed rgba(0, 0, 0, .3)",display:"flex",fontSize:"2rem",height:"100%",justifyContent:"center",width:"100%"},children:"Not pdf Found"})})},z=i(72426),I=i.n(z);function L(e){var t,i,l=(0,s.I0)(),r=e.rows,d=(0,s.v9)(j.Z.selectRows),c=(0,s.v9)(j.Z.selectLoading),o=(0,n.useState)(0),h=(0,x.Z)(o,2),u=(h[0],h[1],(0,n.useState)(1)),v=(0,x.Z)(u,2);v[0],v[1];(0,n.useEffect)((function(){l(p.Z.doFetchValidePublication())}),[]);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)("div",{className:"header__left",children:(0,T.jsx)("p",{children:m.Z.Trans("title",null===r||void 0===r?void 0:r.thematique)})}),(0,T.jsxs)("div",{className:"detail",children:[(0,T.jsxs)("div",{className:"detail__left",children:[(0,T.jsx)("div",{className:"detail__title",children:m.Z.Trans("title",r)}),(0,T.jsxs)("div",{className:"detail__author",children:[(0,T.jsx)("div",{className:"author__left",children:(0,T.jsx)("div",{className:"left__author__date",children:I()(null===r||void 0===r?void 0:r.date).format("L")})}),(0,T.jsxs)("div",{className:"detaillEvenement__socialMedia",children:[(0,T.jsxs)("div",{className:"socialMedia__title",children:[(0,a.ag)("common.Partager")," :"]}),(0,T.jsx)("div",{children:(0,T.jsx)(Z.Z,{url:window.location.href,children:(0,T.jsx)(b.Z,{size:35,round:!0})})}),(0,T.jsx)("div",{children:(0,T.jsx)(y.Z,{url:window.location.href,children:(0,T.jsx)(D.Z,{size:35,round:!0})})}),(0,T.jsx)("div",{children:(0,T.jsx)(M.Z,{url:window.location.href,children:(0,T.jsx)(k.Z,{size:35,round:!0})})})]})]}),(0,T.jsxs)("div",{className:"detail__description",children:[(null===r||void 0===r?void 0:r.photos.length)>0?(0,T.jsx)(N.Z,{afterChange:function(e){},children:null===r||void 0===r||null===(t=r.photos)||void 0===t?void 0:t.map((function(e){return(0,T.jsx)("div",{style:{paddingTop:"19px"},children:(0,T.jsx)(f.Z,{width:"100%",height:"500",src:e.downloadUrl})})}))}):null,(0,T.jsx)("div",{className:"description__detaillEvenement",dangerouslySetInnerHTML:{__html:m.Z.Trans("description",r)}}),(0,T.jsx)("hr",{})]}),(0,T.jsx)("div",{className:"App",children:(null===r||void 0===r?void 0:r.supports.length)>0?(0,T.jsxs)("div",{children:[(0,T.jsx)(T.Fragment,{children:"pdf"===r.supports[0].name.split(".").pop()?(0,T.jsx)(q,{pdf:null===r||void 0===r||null===(i=r.supports[0])||void 0===i?void 0:i.downloadUrl}):null}),(0,T.jsx)("a",{href:null===r||void 0===r?void 0:r.supports[0].downloadUrl,download:!0,style:{color:"#9a0000",fontSize:20},children:(0,a.ag)("telecharger")}),(0,T.jsx)("hr",{})]}):null})]}),(0,T.jsxs)("div",{children:[(0,T.jsxs)("div",{className:"archieve__header",children:[(0,T.jsx)("h2",{children:(0,a.ag)("entities.publication.lastNews")}),(0,T.jsx)("div",{className:"satestique__bar"})]}),(0,T.jsx)("div",{className:"manification__images",children:c?(0,T.jsx)("h4",{children:(0,a.ag)("table.loading")}):d.map((function(t){return(0,T.jsx)(w.rU,{to:"/detail/".concat(t.id),children:(0,T.jsxs)("div",{onClick:function(){return e.showDetaill(t.id)},style:{cursor:"pointer",display:"flex",columnGap:17},children:[(0,T.jsx)(f.Z,{src:t.photos.length>0?t.photos[0].downloadUrl:"Image publication image ",width:"120",height:"78",alt:""}),(0,T.jsxs)("div",{className:"list__detaill",children:[(0,T.jsxs)("div",{className:"detaill__header",children:[(0,T.jsx)("div",{className:"header__left",children:(0,T.jsx)("p",{children:m.Z.Trans("title",t.thematique)})}),(0,T.jsx)("div",{className:"header__right",children:I()(t.date).format("L")})]}),(0,T.jsx)("div",{className:"detaill__content text__wrap",style:{width:"233px"},children:m.Z.Trans("title",t)})]})]})})}))})]})]})]})}L.prototype={showDetaill:g().func.isRequired};var P=L,U=i(85785);function F(e){var t=e.rows,i=e.showDetaill,l=(0,s.I0)(),r=(0,s.v9)(null===j.Z||void 0===j.Z?void 0:j.Z.rowsThematique),d=(0,s.v9)(null===j.Z||void 0===j.Z?void 0:j.Z.loadingthematique);return(0,n.useEffect)((function(){var e;l(p.Z.doFetchPublicationWithThematique(null===t||void 0===t||null===(e=t.thematique)||void 0===e?void 0:e.id))}),[]),(0,T.jsxs)("div",{className:"publication__interest",children:[(0,T.jsxs)("div",{className:"archieve__header",children:[(0,T.jsx)("h2",{children:(0,a.ag)("entities.publication.publicationInteresser")}),(0,T.jsx)("div",{className:"satestique__bar"})]}),(0,T.jsx)("div",{className:"interest__detaill",children:d?(0,T.jsx)("h4",{children:(0,a.ag)("table.loading")}):r.map((function(e){return(0,T.jsx)(w.rU,{to:"/detail/".concat(e.id),children:(0,T.jsxs)("div",{onClick:function(){return i(e.id)},style:{cursor:"pointer",display:"flex",gap:19},children:[(0,T.jsx)(f.Z,{src:e.photos.length>0?e.photos[0].downloadUrl:"Image publication image ",width:"182",height:"147",alt:""}),(0,T.jsxs)("div",{className:"list__detaill",children:[(0,T.jsxs)("div",{className:"detaill__header",children:[(0,T.jsx)("div",{className:"header__left",children:(0,T.jsxs)("p",{children:[m.Z.Trans("title",e.thematique)," "]})}),(0,T.jsx)("div",{className:"header__right",children:U.Z.fullDate(e.date)})]}),(0,T.jsx)("div",{className:"detaill__content text__wrap",style:{width:"369px"},children:m.Z.Trans("title",e)})]})]})})}))})]})}F.prototype={showDetaill:g().func.isRequired};var H=F;var R=function(){var e=(0,s.I0)(),t=(0,l.$B)().params.id,i=(0,s.v9)(v.selectRecord),o=(0,s.v9)(v.selectLoading),h=function(t){e(c.Z.doFind(t))};return(0,n.useEffect)((function(){h(t)}),[t,e]),(0,T.jsx)(T.Fragment,{children:(0,T.jsxs)("div",{className:"publication__page",children:[(0,T.jsx)("div",{className:"app__calendar",children:(0,T.jsx)("img",{src:r.zX,alt:""})}),(0,T.jsx)(d.Z,{items:[[(0,a.ag)("dashboard.menu"),"/"],[(0,a.ag)("entities.publication.label")]]}),o?(0,T.jsx)("div",{className:"page__detaill",children:(0,T.jsx)("h4",{children:(0,a.ag)("table.loading")})}):(0,T.jsxs)("div",{className:"page__detaill",children:[(0,T.jsx)(P,{rows:i,showDetaill:h}),(0,T.jsx)(H,{rows:i,showDetaill:h})]})]})})}},93414:function(){},70172:function(){},2001:function(){},33779:function(){},66558:function(){},82258:function(){}}]);
//# sourceMappingURL=4926.af04abe1.chunk.js.map