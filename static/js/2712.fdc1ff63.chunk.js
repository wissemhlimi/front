"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[2712],{9932:function(e,t,a){a.d(t,{Z:function(){return o}});var i=a(74165),n=a(15861),l=a(15671),s=a(43144),r=a(27415),c=a(56856),o=function(){function e(){(0,l.Z)(this,e)}return(0,s.Z)(e,null,[{key:"getCategoriesList",value:function(){var e=(0,n.Z)((0,i.Z)().mark((function e(){var t,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.Z.get(),e.next=3,r.Z.get("/tenant/".concat(t,"/category-publication"));case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getSearchResultsForPublicationsBasedOnSearchString",value:function(){var e=(0,n.Z)((0,i.Z)().mark((function e(t,a){var n,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.Z.get(),e.next=3,r.Z.get("/tenant/".concat(n,"/search?filter=").concat(t,"&limit=10&offset=").concat(a,"&validated={true}"));case 3:return l=e.sent,e.abrupt("return",l.data);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"searchUsingMainCatefories",value:function(){var e=(0,n.Z)((0,i.Z)().mark((function e(t,a,n){var l,s,o,d,h,u;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=c.Z.get(),e.next=3,r.Z.get("/tenant/".concat(o,"/category-publication?filter[titleFR]=").concat(a));case 3:return d=e.sent,h=null===(l=d.data.rows[0])||void 0===l?void 0:l.publications,u={rows:null!==h&&void 0!==h?h:[],count:null!==(s=null===h||void 0===h?void 0:h.length)&&void 0!==s?s:0},e.abrupt("return",u);case 7:case"end":return e.stop()}}),e)})));return function(t,a,i){return e.apply(this,arguments)}}()},{key:"getSearchResultsForArchiveBasedOnSearchString",value:function(){var e=(0,n.Z)((0,i.Z)().mark((function e(t,a,n){var l,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=c.Z.get(),e.next=3,r.Z.get("/tenant/".concat(l,"/publication?filter[descriptionFR]=").concat(t,"&limit=5&offset=").concat(n,"&filter[statut]=archive").concat(a));case 3:return s=e.sent,e.abrupt("return",s.data);case 5:case"end":return e.stop()}}),e)})));return function(t,a,i){return e.apply(this,arguments)}}()},{key:"getArchivePublications",value:function(){var e=(0,n.Z)((0,i.Z)().mark((function e(t,a,n,l,s){var o,d,h;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={filter:t,orderBy:a,limit:n,offset:l,advanced:s},d=c.Z.get(),e.next=4,r.Z.get("/tenant/".concat(d,"/publication/search"),{params:o});case 4:return h=e.sent,e.abrupt("return",h.data);case 6:case"end":return e.stop()}}),e)})));return function(t,a,i,n,l){return e.apply(this,arguments)}}()}]),e}()},42518:function(e,t,a){a.r(t);var i,n=a(30168),l=a(93433),s=a(74165),r=a(15861),c=a(29439),o=a(72791),d=a(60460),h=a(25930),u=a(8765),m=a(91523),p=a(86538),v=a(9932),x=a(2579),g=(a(85862),a(72239)),f=a(80184);t.default=function(e){var t=localStorage.getItem("language"),a=(0,o.useState)(""),i=(0,c.Z)(a,2),n=i[0],p=i[1];(0,o.useEffect)((function(){g.Z.list("","","","").then((function(e){e.count>0&&("fr"===t&&p(e.rows[0].publicationDescFR),"ar"===t&&p(e.rows[0].publicationDescAR),"en"===t&&p(e.rows[0].publicationDescEN))}))}),[]);var _=(0,o.useState)(""),N=(0,c.Z)(_,2),b=N[0],y=N[1],w=(0,o.useState)({statut:"archive",thematique:"",category:""}),Z=(0,c.Z)(w,2),R=Z[0],F=Z[1],U=(0,o.useState)([]),A=(0,c.Z)(U,2),E=A[0],D=A[1],S=(0,o.useState)(!0),T=(0,c.Z)(S,2),z=T[0],k=T[1],I={pathname:"/SearchArchive",archiveSearchString:b,archiveFilter:R},P=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.Z.getCategoriesList().then((function(e){k(!0),D((function(t){return t.concat(e)})),k(!1)})).catch((function(e){console.error(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){P()}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(f.Fragment,{children:e.acceuil?null:(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(u.Z,{title:(0,h.ag)("common.Archives"),items:[[(0,h.ag)("app.title"),"/"],[(0,h.ag)("common.Archives")]]})})}),(0,f.jsx)("div",{className:"app__archieve__page",children:(0,f.jsxs)("div",{className:"archeive",children:[e.acceuil?null:(0,f.jsx)("p",{children:n}),(0,f.jsx)("div",{className:"archieve__content",children:(0,f.jsxs)("div",{className:"archieve__left",children:[(0,f.jsxs)("div",{className:"left__search",children:[(0,f.jsx)("input",{type:"text",placeholder:(0,h.ag)("common.archiveSearch"),onChange:function(e){y(e.target.value)},value:b}),b.length>=1?(0,f.jsx)(m.rU,{to:I,children:(0,f.jsxs)("div",{className:"button__search",children:[(0,f.jsx)("i",{className:"fa-solid fa-magnifying-glass"}),(0,h.ag)("common.search")]})}):(0,f.jsxs)("div",{className:"button__search",children:[(0,f.jsx)("i",{className:"fa-solid fa-magnifying-glass"}),(0,h.ag)("common.search")]})]}),(0,f.jsx)("div",{className:"mobile__archeiveSearch",children:(0,f.jsxs)("div",{className:"archeiveSearch__form",children:[(0,f.jsx)("input",{type:"text",placeholder:(0,h.ag)("common.archiveSearch")}),(0,f.jsx)("div",{className:"button_search",children:(0,f.jsx)("img",{className:"lazyload",src:d.TF,alt:"Search Archeive ICon",srcSet:""})})]})}),(0,f.jsxs)(j,{onChange:function(e){F(e.target.value)},children:[!1===z&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(m.rU,{to:I,children:(0,f.jsxs)("label",{className:"filterArchiveContianer",htmlFor:"all",children:[(0,f.jsx)("input",{type:"radio",name:"archiveFilter",value:"autre",id:"all"}),(0,f.jsxs)("div",{className:"contentContainer",children:[(0,f.jsx)("div",{children:(0,f.jsx)("img",{className:"lazyload",src:d.zg,alt:"Etudes Icon"})}),(0,f.jsx)("div",{children:(0,f.jsx)("h4",{className:"h4",children:(0,h.ag)("common.all")})})]})]})}),E.length>=1&&(0,f.jsx)(f.Fragment,{children:E[0].rows.map((function(e){return(0,f.jsx)(m.rU,{to:{pathname:"/SearchArchive",archiveSearchString:b,archiveFilter:{statut:"archive",thematique:"",category:e._id}},children:(0,f.jsxs)("label",{className:"filterArchiveContianer",htmlFor:e._id,children:[(0,f.jsx)("input",{type:"radio",name:"archiveFilter",value:"etude",id:e._id}),(0,f.jsxs)("div",{className:"contentContainer",children:[(0,f.jsx)("div",{children:(0,f.jsx)("img",{className:"lazyload",src:d.zg,alt:"Etudes Icon"})}),(0,f.jsx)("div",{children:"fr"===t?(0,f.jsx)("h4",{className:"h4",children:e.titleFR}):"ar"===t?(0,f.jsx)("h4",{className:"h4",children:e.titleAR}):(0,f.jsx)("h4",{className:"h4",children:e.titleEN})})]})]},e._id)})}))})]}),!0===z&&(0,f.jsx)(f.Fragment,{children:(0,l.Z)(Array(5)).map((function(e,t){return(0,f.jsx)(x.Z,{height:172,width:275},t)}))})]})]})})]})})]})};var j=p.ZP.div(i||(i=(0,n.Z)(['\n  width: 100%;\n  margin-top: 1.5rem;\n  display: grid;\n  grid-gap: 1rem;\n  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));\n\n  .contentContainer {\n    width: 275px;\n    height: 172px;\n    background-color: #fff;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    img {\n      margin-bottom: 2rem;\n    }\n\n    &:hover {\n      cursor: pointer;\n      background-color: #f7f7f7;\n    }\n  }\n  .resultContainer {\n    width: 275px;\n    height: 172px;\n    background-color: #fff;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    img {\n      margin-bottom: 2rem;\n    }\n\n    &:hover {\n      cursor: pointer;\n      background-color: #f7f7f7;\n    }\n  }\n  input[type="radio"] {\n    display: none;\n\n    &:checked ~ .contentContainer {\n      border: 1px solid #e1011a;\n      h4 {\n        color: #e1011a;\n      }\n    }\n  }\n'])))},31334:function(e,t,a){a.r(t),a.d(t,{default:function(){return H}});var i=a(30168),n=a(60460),l=a(29439),s=a(72791),r=(a(62431),a(90603)),c=a(91523),o=a(80184);var d,h=function(e){e.slider;var t=e.rows,a=(0,s.useState)(1),i=(0,l.Z)(a,2),d=i[0],h=i[1],u=Number(e.width),m=Number(e.height),p=localStorage.getItem("language");return(0,o.jsxs)("div",{className:"container-slider",style:{width:u,height:m},children:[e.rows.map((function(t,a){var i,l,s;return(0,o.jsx)("div",{className:d===a+1?"slide active-anim":"slide",children:(0,o.jsxs)(c.rU,{to:"/detail/".concat(e.rows[d-1]._id),children:["fr"===p?(0,o.jsx)("img",{style:{opacity:.4},width:u,height:m,className:"lazyload",src:(null===t||void 0===t||null===(i=t.photos)||void 0===i?void 0:i.length)>0?null===t||void 0===t?void 0:t.photos[0].downloadUrl:n.T1,alt:n.T1,srcSet:""}):"ar"===p?(0,o.jsx)("img",{style:{opacity:.4},width:u,height:m,className:"lazyload",src:(null===t||void 0===t||null===(l=t.photosAR)||void 0===l?void 0:l.length)>0?null===t||void 0===t?void 0:t.photosAR[0].downloadUrl:n.T1,alt:n.T1,srcSet:""}):(0,o.jsx)("img",{style:{opacity:.4},width:u,height:m,className:"lazyload",src:(null===t||void 0===t||null===(s=t.photosEN)||void 0===s?void 0:s.length)>0?null===t||void 0===t?void 0:t.photosEN[0].downloadUrl:n.T1,alt:n.T1,srcSet:""}),e.render(t)]})},a)})),(0,o.jsx)(r.Z,{moveSlide:function(){d!==t.length?h(d+1):d===t.length&&h(1)},direction:"next"}),(0,o.jsx)(r.Z,{moveSlide:function(){1!==d?h(d-1):1===d&&h(t.length)},direction:"prev"}),(null===e||void 0===e?void 0:e.showDots)&&(0,o.jsx)("div",{className:"container-dots",children:e.rows.map((function(e,t){return(0,o.jsx)("div",{onClick:function(){return function(e){h(e)}(t+1)},className:d===t+1?"dot active":"dot"})}))}),!(null!==e&&void 0!==e&&e.showDots)&&(0,o.jsx)("div",{className:"content__sliderBottom",children:e.rows.map((function(t,a){return e.bottomrender(t,a,d)}))})]})},u=a(25930),m=a(26189),p=a(57688),v=a(94233),x=a(42518),g=a(57967),f=a(53427),j=a(48923),_=a(4726),N=a(86538);var b,y=N.ZP.div(d||(d=(0,i.Z)(["\n  @media (max-width: 1071px) {\n    margin: 160px auto 0 auto;\n  }\n"]))),w=function(){var e=(0,v.I0)(),t=(0,v.v9)(j.Z.selectRows),a=(0,v.v9)(j.Z.selectLoading),i=(0,v.v9)(j.Z.selectHasRows);return(0,s.useEffect)((function(){e(f.Z.doFetch({home:!0}))}),[e]),(0,o.jsx)(y,{children:(0,o.jsxs)("div",{className:"app__tableaudeboard",children:[a&&(0,o.jsx)("h4",{className:"h4",children:(0,u.ag)("table.loading")}),!a&&!i&&(0,o.jsx)("h4",{className:"h4",children:(0,u.ag)("common.noData")}),!a&&t.map((function(e){return(0,o.jsxs)("div",{className:"tableaudeboard__",children:[(0,o.jsxs)("div",{className:"archieve__header",children:[(0,o.jsx)("h2",{className:"h2",children:_.Z.Trans("title",e)}),(0,o.jsx)("div",{className:"satestique__bar"}),(0,o.jsx)("h2",{className:"h2",children:(0,u.ag)("common.statsType.".concat(e.type))})]}),(0,o.jsx)("iframe",{title:_.Z.Trans("title",e),width:"100%",height:"600",allowFullScreen:!0,src:_.Z.TransLink(e)})]})}))]})})},Z=a(51949),R=a(10818),F=a(64428),U=a(72426),A=a.n(U);var E,D,S=N.ZP.div(b||(b=(0,i.Z)(["\n  @media (max-width: 1071px) {\n    margin: 160px auto 0 auto;\n  }\n"]))),T=function(){var e=(0,v.I0)(),t=localStorage.getItem("language");(0,s.useEffect)((function(){e(R.Z.doFetch("createdAt_DESC"))}),[]);var a=function(e,t){return e&&e.length>t?e.substring(0,t)+"...":e},i=(0,v.v9)(Z.Z.selectRows);return(0,o.jsx)(S,{children:(0,o.jsx)("div",{children:i.length>0?(0,o.jsx)("div",{className:"app__publications",children:(0,o.jsxs)("div",{className:"publication",children:[i[0]?(0,o.jsxs)("div",{className:"publication__left",children:[(0,o.jsxs)("div",{className:"archieve__header",children:[(0,o.jsx)("h2",{className:"h2",children:"ar"===t?i[0].titleAR:"fr"===t?i[0].titleFR:i[0].titleEN}),(0,o.jsx)("div",{className:"publication__bar"})]}),i[0].publications.length>0?(0,o.jsxs)("div",{className:"publication__images",children:[(0,o.jsx)(c.rU,{to:"/detail/".concat(i[0].publications[0].id),children:(0,o.jsx)("div",{className:"images__header",children:(0,o.jsxs)("div",{className:"__header image-container",children:["fr"===t?(0,o.jsx)("img",{className:"lazyload img_header_one",src:i[0].publications[0].photos.length>0?"".concat(F.F,"/file/download?privateUrl=").concat(i[0].publications[0].photos[0].privateUrl):n.T1,alt:"Publication Image"}):"ar"===t?(0,o.jsx)("img",{className:"lazyload img_header_one",src:i[0].publications[0].photosAR.length>0?"".concat(F.F,"/file/download?privateUrl=").concat(i[0].publications[0].photosAR[0].privateUrl):n.T1,alt:"Publication Image"}):(0,o.jsx)("img",{className:"lazyload img_header_one",src:i[0].publications[0].photosEN.length>0?"".concat(F.F,"/file/download?privateUrl=").concat(i[0].publications[0].photosEN[0].privateUrl):n.T1,alt:"Publication Image"}),(0,o.jsx)("div",{className:"__detaills",children:(0,o.jsxs)("div",{className:"list__detaill",children:[(0,o.jsxs)("div",{className:"detaill__header",children:[(0,o.jsx)("div",{className:"__left",children:(0,o.jsx)("p",{children:"ar"===t?i[0].publications[0].thematique[0].titleAR:"fr"===t?i[0].publications[0].thematique[0].titleFR:i[0].publications[0].thematique[0].titleEN})}),(0,o.jsx)("div",{className:"__right",children:A()(i[0].publications[0].date).format("DD-MM-YYYY")})]}),(0,o.jsx)("div",{className:"__content",children:a("ar"===t?i[0].publications[0].titleAR:"fr"===t?i[0].publications[0].titleFR:i[0].publications[0].titleEN,70)})]})})]})})}),i[0].publications.length>0?(0,o.jsx)("div",{className:"images__bottom",children:Array.from({length:(i[0].publications.length<4?i[0].publications.length:4)-1}).map((function(e,l){return s=l,(0,o.jsx)("div",{children:(0,o.jsxs)(c.rU,{to:"/detail/".concat(i[0].publications[s+1].id),className:"img_gradient",children:["fr"===t?(0,o.jsx)("img",{className:"lazyload img_header_four_grid",src:i[0].publications[s+1].photos.length>0?"".concat(F.F,"/file/download?privateUrl=").concat(i[0].publications[s+1].photos[0].privateUrl):n.T1,alt:"publication2 Icon"}):"ar"===t?(0,o.jsx)("img",{className:"lazyload img_header_four_grid",src:i[0].publications[s+1].photosAR.length>0?"".concat(F.F,"/file/download?privateUrl=").concat(i[0].publications[s+1].photosAR[0].privateUrl):n.T1,alt:"publication2 Icon"}):(0,o.jsx)("img",{className:"lazyload img_header_four_grid",src:i[0].publications[s+1].photosEN.length>0?"".concat(F.F,"/file/download?privateUrl=").concat(i[0].publications[s+1].photosEN[0].privateUrl):n.T1,alt:"publication2 Icon"}),(0,o.jsxs)("div",{className:"list__detaill",children:[(0,o.jsxs)("div",{className:"detaill__header",children:[(0,o.jsx)("div",{className:"header__left",children:(0,o.jsx)("p",{children:a("ar"===t?i[0].publications[s+1].thematique[0].titleAR:"fr"===t?i[0].publications[s+1].thematique[0].titleFR:i[0].publications[s+1].thematique[0].titleEN,30)})}),(0,o.jsx)("div",{className:"header__right",children:A()(i[0].publications[s+1].date).format("DD-MM-YYYY")})]}),(0,o.jsx)("div",{className:"detaill__content",children:a("ar"===t?i[0].publications[s+1].titleAR:"fr"===t?i[0].publications[s+1].titleFR:i[0].publications[s+1].titleEN,40)})]})]})});var s}))}):null]}):null,(0,o.jsx)(c.rU,{to:"/detaill/category/".concat(i[0]._id),children:(0,o.jsx)("div",{className:"plus__button",children:(0,u.ag)("common.voirPlus")})})]}):null,i.length>1?(0,o.jsx)("div",{className:"publication__right",children:(0,o.jsxs)("div",{className:"communique",children:[(0,o.jsxs)("div",{className:"archieve__header",children:[(0,o.jsx)("h2",{className:"h2",children:"ar"===t?i[1].titleAR:"fr"===t?i[1].titleFR:i[1].titleEN}),(0,o.jsx)("div",{className:"communiquer__bar"})]}),i[1].publications.length>0?(0,o.jsxs)(o.Fragment,{children:[Array.from({length:i[1].publications.length<=2?i[1].publications.length:2}).map((function(e,l){return(0,o.jsx)("div",{className:"images__header",children:(0,o.jsx)("div",{className:"__header image-container",children:(0,o.jsxs)(c.rU,{to:"/detail/".concat(i[1].publications[l].id),children:["fr"===t?(0,o.jsx)("img",{className:"lazyload img_header_four_grid",src:i[1].publications[l].photos.length>0?"".concat(F.F,"/file/download?privateUrl=").concat(i[1].publications[l].photos[0].privateUrl):n.T1,alt:"Publication Image"}):"ar"===t?(0,o.jsx)("img",{className:"lazyload img_header_four_grid",src:i[1].publications[l].photosAR.length>0?"".concat(F.F,"/file/download?privateUrl=").concat(i[1].publications[l].photosAR[0].privateUrl):n.T1,alt:"Publication Image"}):(0,o.jsx)("img",{className:"lazyload img_header_four_grid",src:i[1].publications[l].photosEN.length>0?"".concat(F.F,"/file/download?privateUrl=").concat(i[1].publications[l].photosEN[0].privateUrl):n.T1,alt:"Publication Image"}),(0,o.jsx)("div",{className:"__detaills",children:(0,o.jsxs)("div",{className:"list__detaill",children:[(0,o.jsxs)("div",{className:"detaill__header",children:[(0,o.jsx)("div",{className:"__left",children:(0,o.jsx)("p",{children:"fr"===t?i[1].publications[l].thematique[0].titleFR:"ar"===t?i[1].publications[l].thematique[0].titleAR:i[1].publications[l].thematique[0].titleEN})}),(0,o.jsxs)("div",{className:"__right",children:[" ",A()(i[1].publications[l].date).format("DD-MM-YYYY")]})]}),(0,o.jsx)("div",{className:"__content",children:a("fr"===t?i[1].publications[l].titleFR:"en"===t?i[1].publications[l].titleEN:i[1].publications[l].titleAR,30)})]})})]})})})})),(0,o.jsxs)("div",{className:"communique",style:{padding:"0px",paddingTop:"32px"},children:[(0,o.jsx)("div",{className:"",children:(0,o.jsx)("div",{className:"publication__list",children:Array.from({length:(i[1].publications.length<6?i[1].publications.length:6)-2}).map((function(e,l){return(0,o.jsxs)("div",{className:"",children:[(0,o.jsx)(c.rU,{to:"/detail/".concat(i[1].publications[l+2].id),children:"fr"===t?(0,o.jsx)("img",{className:"lazyload img_header_four_list",src:i[1].publications[l+2].photos.length>0?"".concat(F.F,"/file/download?privateUrl=").concat(i[1].publications[l+2].photos[0].privateUrl):n.T1,alt:"",id:"publication__leftImage"}):"ar"===t?(0,o.jsx)("img",{className:"lazyload img_header_four_list",src:i[1].publications[l+2].photosAR.length>0?"".concat(F.F,"/file/download?privateUrl=").concat(i[1].publications[l+2].photosAR[0].privateUrl):n.T1,alt:"",id:"publication__leftImage"}):(0,o.jsx)("img",{className:"lazyload img_header_four_list",src:i[1].publications[l+2].photosEN.length>0?"".concat(F.F,"/file/download?privateUrl=").concat(i[1].publications[l+2].photosEN[0].privateUrl):n.T1,alt:"",id:"publication__leftImage"})}),(0,o.jsx)(c.rU,{to:"/detail/".concat(i[1].publications[l+2].id),children:(0,o.jsxs)("div",{className:"list__detaill",children:[(0,o.jsxs)("div",{className:"detaill__header",children:[(0,o.jsx)("div",{className:"header__left",children:(0,o.jsx)("p",{children:"ar"===t?i[1].publications[l+2].thematique[0].titleAR:"fr"===t?i[1].publications[l+2].thematique[0].titleFR:i[1].publications[l+2].thematique[0].titleEN})}),(0,o.jsx)("div",{className:"header__right",children:A()(i[1].publications[l+2].date).format("DD-MM-YYYY")})]}),(0,o.jsx)("div",{className:"detaill__content",children:a("ar"===t?i[1].publications[l+2].titleAR:"fr"===t?i[1].publications[l+2].titleFR:i[1].publications[l+2].titleEN,30)})]})})]})}))})}),(0,o.jsx)(c.rU,{to:"/detaill/category/".concat(i[1]._id),children:(0,o.jsx)("div",{className:"plus__button",children:(0,u.ag)("common.voirPlus")})})]})]}):null]})}):null]})}):null})})},z=a(30537),k=a(23140),I=a(79271);var P,C,q=N.ZP.div(E||(E=(0,i.Z)(["\n  @media (max-width: 1071px) {\n    margin: 160px auto 0 auto;\n  }\n"]))),Y=N.ZP.div(D||(D=(0,i.Z)(["\n  @media (max-width: 1071px) {\n    display: none;\n  }\n"]))),M=function(){var e=new Date,t=(0,v.I0)(),i=(0,I.k6)(),r=localStorage.getItem("language");a(40944).locale(r);var d=(0,s.useState)([{id:"",text:"",startDate:new Date,endDate:new Date,allDay:!0,img:"",description:""}]),h=(0,l.Z)(d,2),m=h[0],p=h[1];(0,s.useEffect)((function(){t(g.Z.doFetch())}),[]);var x=(0,v.v9)(k.Z.selectRows),f=x.length<=3?202*x.length+"px":"606px",j=x.length<=3?"202px".concat(" ",2===x.length?"202px":3===x.length?"202px 202px":""):"202px 202px 202px";return(0,s.useEffect)((function(){!function(){var e=[{id:"",text:"",startDate:new Date,endDate:new Date,allDay:!0,img:"",description:""}];x.map((function(t){var a={id:t.id,text:"ar"===r?t.titleAR:"fr"===r?t.titleFR:t.titleEN,description:"ar"===r?t.emplacementAR:"fr"===r?t.emplacementFR:t.emplacementEN,startDate:new Date(t.date),endDate:new Date(t.date),allDay:!0,img:"fr"===r?t.photos.length>0?t.photos[0].downloadUrl:"":"ar"===r?t.photosAR.length>0?t.photosAR[0].downloadUrl:"":t.photosEN.length>0?t.photosEN[0].downloadUrl:""};e.push(a)})),e.shift(),p(e)}()}),[x]),(0,o.jsx)(q,{children:(0,o.jsx)(o.Fragment,{children:x.length>0?(0,o.jsx)("div",{className:"app__evenement",children:(0,o.jsxs)("div",{className:"evenenement",children:[(0,o.jsxs)("div",{className:"archieve__header",children:[(0,o.jsx)("h2",{className:"h2",children:(0,u.ag)("common.Ev\xe8nements")}),(0,o.jsx)("div",{className:"satestique__bar"})]}),(0,o.jsxs)("div",{className:"evenement__content",style:{width:"fit-content"},children:[(0,o.jsx)(Y,{children:(0,o.jsxs)("div",{className:"evenement__timing",style:{height:f},children:[(0,o.jsx)("div",{className:"timing__bar",children:(0,o.jsx)("img",{className:"lazyload",src:n.Kb,alt:"",style:{height:f}})}),(0,o.jsx)("div",{className:"timing__number",children:Array.from({length:x.length<3?x.length:3}).map((function(e,t){return(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"cercle__red"}),(0,o.jsxs)("div",{className:"time",children:[(0,o.jsx)("div",{className:"date",children:A()(x[t].date).format("D")}),(0,o.jsx)("div",{className:"month",children:A()(x[t].date).locale("ar"===r?"ar":"fr").format("MMMM")})]})]})}))})]})}),(0,o.jsx)("div",{className:"evenement__description",style:{gridTemplateRows:j},children:Array.from({length:x.length<3?x.length:3}).map((function(e,t){return(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"evenement__left",children:(0,o.jsx)(c.rU,{to:"/evenement/".concat(x[t]._id),children:(0,o.jsx)("span",{className:" lazy-load-image-background blur lazy-load-image-loaded",style:{color:"transparent",display:"contents"},children:"fr"===r?(0,o.jsx)("img",{alt:n.T1,src:x[t].photos.length>0?"".concat(F.F,"/file/download?privateUrl=").concat(x[t].photos[0].privateUrl):n.T1}):"ar"===r?(0,o.jsx)("img",{alt:n.T1,src:x[t].photosAR.length>0?"".concat(F.F,"/file/download?privateUrl=").concat(x[t].photosAR[0].privateUrl):n.T1}):(0,o.jsx)("img",{alt:n.T1,src:x[t].photosEN.length>0?"".concat(F.F,"/file/download?privateUrl=").concat(x[t].photosEN[0].privateUrl):n.T1})})})}),(0,o.jsx)(c.rU,{to:"/evenement/".concat(x[t]._id),children:(0,o.jsxs)("div",{className:"evenement__right",children:[(0,o.jsxs)("div",{className:"right__date",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("img",{className:"lazyload",src:n.YN,alt:"",srcSet:""}),A()(x[t].date).format("DD-MM-YYYY")]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("img",{className:"lazyload",src:n.rv,alt:""}),A()(x[t].date).format("LT")]})]}),(0,o.jsx)("div",{className:"righ__desctiption",children:"ar"===r?x[t].titleAR:"fr"===r?x[t].titleFR:x[t].titleEN}),(0,o.jsx)("div",{className:"right__footer",children:"ar"===r?x[t].emplacementAR:"fr"===r?x[t].emplacementFR:x[t].emplacementEN})]})})]})}))}),(0,o.jsx)(Y,{children:(0,o.jsx)("div",{className:"evenement__calendar",children:(0,o.jsx)(z.Scheduler,{rtlEnabled:"ar"===r,views:[],onAppointmentDblClick:function(e){i.push("/evenement/".concat(e.appointmentData.id))},appointmentTooltipRender:function(e){return(0,o.jsx)(c.rU,{to:"/evenement/".concat(e.appointmentData.id),children:(0,o.jsxs)("div",{className:"evenement__right",style:{height:"300"},children:[(0,o.jsx)("h5",{className:"h5",style:{fontSize:20},children:e.appointmentData.text}),(0,o.jsx)("p",{children:(0,o.jsx)("img",{src:e.appointmentData.img,style:{marginTop:10,height:"150px"}})}),(0,o.jsx)("div",{className:"right__footer",children:(t=e.appointmentData.description,a=150,t&&t.length>a?t.substring(0,a)+"...":t)})]})});var t,a},timeZone:"France/Paris",dataSource:m,defaultCurrentView:"month",defaultCurrentDate:e,height:600,firstDayOfWeek:1,startDayHour:8,endDayHour:18})})})]})]})}):null})})};var B=N.ZP.div(P||(P=(0,i.Z)(["\n  @media (max-width: 1071px) {\n    margin: 160px auto 0 auto;\n  }\n"]))),L=N.ZP.div(C||(C=(0,i.Z)(["\n  @media (max-width: 1071px) {\n    display: none;\n  }\n"]))),H=function(){var e=(0,v.I0)(),t=localStorage.getItem("language");a(40944).locale(t);var i=(0,v.v9)(p.Z.selectRows);(0,s.useEffect)((function(){e(m.Z.doFetchValidePublication(4)),e(g.Z.doFetch())}),[]);var l=function(e,t){return e&&e.length>t?e.substring(0,t)+"...":e};return(0,o.jsx)(B,{children:(0,o.jsxs)("div",{className:"app",children:[(0,o.jsx)("div",{className:"app__calendar",children:(0,o.jsx)(c.rU,{to:"/evenement",children:(0,o.jsx)("img",{src:n.zX,alt:""})})}),(0,o.jsx)(L,{children:(0,o.jsx)("div",{className:"app__header",children:(0,o.jsx)("div",{className:"header__content",style:{height:549},children:(0,o.jsx)("div",{className:"content",children:i?(0,o.jsxs)("div",{className:"content__imagePrincipale",children:[(0,o.jsx)(h,{rows:i,height:549,width:1170,label:"slider",render:function(e){return(0,o.jsx)("div",{className:"content__sliderTop",children:(0,o.jsx)("div",{className:"textContent",children:(0,o.jsx)("div",{className:"horizontalPlayerTitle ow",style:{color:"white",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",fontFamily:"Bebas Neue",fontStyle:"normal",fontWeight:400,fontSize:"47px",lineHeight:"40px"},children:"ar"===t?null===e||void 0===e?void 0:e.titleAR:"fr"===t?null===e||void 0===e?void 0:e.titleFR:null===e||void 0===e?void 0:e.titleEN})})})},showDots:!1,bottomrender:function(e,a,i){var s,r,d;return(0,o.jsx)(c.rU,{to:"/detail/".concat(null===e||void 0===e?void 0:e._id),children:(0,o.jsx)("div",{className:i===a+1?"active__slideBottom":"",children:(0,o.jsxs)("span",{className:" lazy-load-image-background blur lazy-load-image-loaded",style:{color:"transparent",display:"block"},children:[(0,o.jsx)("img",{style:{width:250,height:100},alt:n.T1,src:"fr"===t?(null===e||void 0===e||null===(s=e.photos)||void 0===s?void 0:s.length)>0?null===e||void 0===e?void 0:e.photos[0].downloadUrl:n.T1:"ar"===t?(null===e||void 0===e||null===(r=e.photosAR)||void 0===r?void 0:r.length)>0?null===e||void 0===e?void 0:e.photosAR[0].downloadUrl:n.T1:(null===e||void 0===e||null===(d=e.photosEN)||void 0===d?void 0:d.length)>0?null===e||void 0===e?void 0:e.photosEN[0].downloadUrl:n.T1}),(0,o.jsx)("p",{className:i===a+1?"text__p text__gras":"text__p",children:l("ar"===t?null===e||void 0===e?void 0:e.titleAR:"fr"===t?null===e||void 0===e?void 0:e.titleFR:null===e||void 0===e?void 0:e.titleEN,30)})]})})})}}),(0,o.jsx)("img",{className:"lazyload",src:n.kN,id:"image__mobile",alt:"Header "})]}):null})})})}),(0,o.jsx)("div",{className:"app__statestique",children:(0,o.jsxs)("div",{className:"statestique",children:[(0,o.jsxs)("div",{className:"archieve__header",children:[(0,o.jsx)("h2",{className:"h2",children:(0,u.ag)("menu.Tableau")}),(0,o.jsx)("div",{className:"satestique__bar"})]}),(0,o.jsx)("div",{style:{marginTop:20},children:(0,o.jsx)(w,{})})]})}),(0,o.jsxs)("div",{className:"archieve__header",style:{maxWidth:"1170px",marginLeft:"210px",marginRight:"210px"},children:[(0,o.jsx)("h2",{className:"h2",children:(0,u.ag)("common.Archives")}),(0,o.jsx)("div",{className:"publication__bar"})]}),(0,o.jsx)("div",{className:"archeive",style:{maxWidth:"100%"},children:(0,o.jsx)("div",{style:{marginTop:43},children:(0,o.jsx)(x.default,{acceuil:!0})})}),(0,o.jsx)(T,{}),(0,o.jsxs)("div",{className:"Glossaire",children:[(0,o.jsx)("h5",{className:"h5",children:(0,u.ag)("menu.Glossaire")}),(0,o.jsx)(c.rU,{to:"/Glossaire",children:(0,o.jsx)("div",{className:"global__button",children:(0,u.ag)("common.discover")})})]}),(0,o.jsx)(M,{})]})})}},8765:function(e,t,a){var i,n=a(30168),l=(a(72791),a(91523)),s=a(86538),r=a(80184),c=s.ZP.div(i||(i=(0,n.Z)(['\n  margin: 28px 0 10px 0;\n  .breadcrumb {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    background-color: transparent;\n  }\n  ol {\n    display: flex;\n  }\n  li {\n    font-family: "Proxima Nova";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 25px;\n  }\n  .breadcrump__nav {\n    margin: auto;\n    left: 0;\n    display: flex;\n    max-width: 1170px;\n    flex-direction: column;\n  }\n\n  .breadcrumb-item:not(.active) a {\n    color: rgba(0, 0, 0, 0.45);\n  }\n\n  h2 {\n    font-family: "Bebas Neue Pro";\n    font-style: normal;\n    font-weight: 700;\n    font-size: 47px;\n    line-height: 39px;\n  }\n'])));t.Z=function(e){var t=function(e){return e.length>1};return(0,r.jsx)(c,{children:(0,r.jsxs)("div",{className:"breadcrump__nav",children:[(0,r.jsx)("div",{children:(0,r.jsx)("h2",{className:"h2",children:e.title})}),(0,r.jsx)("div",{children:(0,r.jsx)("ol",{className:"breadcrumb",children:e.items.map((function(e,a){return(0,r.jsx)("li",{className:"breadcrumb-item liClass",children:t(e)?(0,r.jsxs)(l.rU,{to:e[1],children:[" ",e[0],"/"===e[1]?(0,r.jsx)(r.Fragment,{children:e[1]}):(0,r.jsx)("div",{style:{display:"none",marginBottom:0},children:e[1]})]}):e[0]},e[0])}))})})]})})}},90603:function(e,t,a){a.d(t,{Z:function(){return l}});a(72791),a(62431);var i=a(60460),n=a(80184);function l(e){var t=e.direction,a=e.moveSlide;return(0,n.jsx)("button",{onClick:a,className:"next"===t?"btn-slide next":"btn-slide prev",children:(0,n.jsx)("img",{src:"next"===t?i.rz:i.VJ,alt:"arrow"})})}},62431:function(){}}]);
//# sourceMappingURL=2712.fdc1ff63.chunk.js.map