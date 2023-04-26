"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[3473],{9932:function(e,t,i){i.d(t,{Z:function(){return o}});var a=i(74165),n=i(15861),l=i(15671),s=i(43144),r=i(27415),c=i(56856),o=function(){function e(){(0,l.Z)(this,e)}return(0,s.Z)(e,null,[{key:"getCategoriesList",value:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(){var t,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.Z.get(),e.next=3,r.Z.get("/tenant/".concat(t,"/category-publication"));case 3:return i=e.sent,e.abrupt("return",i.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getSearchResultsForPublicationsBasedOnSearchString",value:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t,i){var n,l;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.Z.get(),e.next=3,r.Z.get("/tenant/".concat(n,"/search?filter=").concat(t,"&limit=10&offset=").concat(i,"&validated={true}"));case 3:return l=e.sent,e.abrupt("return",l.data);case 5:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"searchUsingMainCatefories",value:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t,i,n){var l,s,o,d,h,p;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=c.Z.get(),e.next=3,r.Z.get("/tenant/".concat(o,"/category-publication?filter[titleFR]=").concat(i));case 3:return d=e.sent,h=null===(l=d.data.rows[0])||void 0===l?void 0:l.publications,p={rows:null!==h&&void 0!==h?h:[],count:null!==(s=null===h||void 0===h?void 0:h.length)&&void 0!==s?s:0},e.abrupt("return",p);case 7:case"end":return e.stop()}}),e)})));return function(t,i,a){return e.apply(this,arguments)}}()},{key:"getSearchResultsForArchiveBasedOnSearchString",value:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t,i,n){var l,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=c.Z.get(),e.next=3,r.Z.get("/tenant/".concat(l,"/publication?filter[descriptionFR]=").concat(t,"&limit=5&offset=").concat(n,"&filter[statut]=archive").concat(i));case 3:return s=e.sent,e.abrupt("return",s.data);case 5:case"end":return e.stop()}}),e)})));return function(t,i,a){return e.apply(this,arguments)}}()},{key:"getArchivePublications",value:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t,i,n){var l,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=c.Z.get(),e.next=3,r.Z.get("/tenant/".concat(l,"/publication/search?filter=").concat(t,"&limit=10&offset=").concat(n,"&advanced[statut]=").concat(i.statut,"&advanced[thematique]=").concat(i.thematique,"&advanced[category]=").concat(i.category));case 3:return s=e.sent,e.abrupt("return",s.data);case 5:case"end":return e.stop()}}),e)})));return function(t,i,a){return e.apply(this,arguments)}}()}]),e}()},42518:function(e,t,i){i.r(t);var a,n=i(30168),l=i(93433),s=i(74165),r=i(15861),c=i(29439),o=i(72791),d=i(27314),h=i(25930),p=i(8765),u=i(91523),m=i(86538),v=i(9932),x=i(2579),g=(i(85862),i(72239)),j=i(80184);t.default=function(e){var t=localStorage.getItem("language"),i=(0,o.useState)(""),a=(0,c.Z)(i,2),n=a[0],m=a[1];(0,o.useEffect)((function(){g.Z.list("","","","").then((function(e){"fr"===t&&m(e.rows[0].publicationDescFR),"ar"===t&&m(e.rows[0].publicationDescAR),"en"===t&&m(e.rows[0].publicationDescEN)}))}),[]);var _=(0,o.useState)(""),N=(0,c.Z)(_,2),b=N[0],w=N[1],y=(0,o.useState)({statut:"archive",thematique:"",category:""}),R=(0,c.Z)(y,2),Z=R[0],F=R[1],A=(0,o.useState)([]),E=(0,c.Z)(A,2),U=E[0],D=E[1],z=(0,o.useState)(!0),S=(0,c.Z)(z,2),Y=S[0],I=S[1],k={pathname:"/SearchArchive",archiveSearchString:b,archiveFilter:Z},C=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.Z.getCategoriesList().then((function(e){I(!0),D((function(t){return t.concat(e)})),I(!1)})).catch((function(e){console.error(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){C()}),[]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(j.Fragment,{children:e.acceuil?null:(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(p.Z,{title:(0,h.ag)("common.Archives"),items:[[(0,h.ag)("app.title"),"/"],[(0,h.ag)("common.Archives")]]})})}),(0,j.jsx)("div",{className:"app__archieve__page",children:(0,j.jsxs)("div",{className:"archeive",children:[e.acceuil?null:(0,j.jsx)("p",{children:n}),(0,j.jsx)("div",{className:"archieve__content",children:(0,j.jsxs)("div",{className:"archieve__left",children:[(0,j.jsxs)("div",{className:"left__search",children:[(0,j.jsx)("input",{type:"text",placeholder:(0,h.ag)("common.archiveSearch"),onChange:function(e){w(e.target.value)},value:b}),b.length>=1?(0,j.jsx)(u.rU,{to:k,children:(0,j.jsxs)("div",{className:"button__search",children:[(0,j.jsx)("i",{className:"fa-solid fa-magnifying-glass"}),(0,h.ag)("common.search")]})}):(0,j.jsxs)("div",{className:"button__search",children:[(0,j.jsx)("i",{className:"fa-solid fa-magnifying-glass"}),(0,h.ag)("common.search")]})]}),(0,j.jsx)("div",{className:"mobile__archeiveSearch",children:(0,j.jsxs)("div",{className:"archeiveSearch__form",children:[(0,j.jsx)("input",{type:"text",placeholder:(0,h.ag)("common.archiveSearch")}),(0,j.jsx)("div",{className:"button_search",children:(0,j.jsx)("img",{className:"lazyload",src:d.TF,alt:"Search Archeive ICon",srcSet:""})})]})}),(0,j.jsxs)(f,{onChange:function(e){F(e.target.value)},children:[!1===Y&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(u.rU,{to:k,children:(0,j.jsxs)("label",{className:"filterArchiveContianer",htmlFor:"all",children:[(0,j.jsx)("input",{type:"radio",name:"archiveFilter",value:"autre",id:"all"}),(0,j.jsxs)("div",{className:"contentContainer",children:[(0,j.jsx)("div",{children:(0,j.jsx)("img",{className:"lazyload",src:d.zg,alt:"Etudes Icon"})}),(0,j.jsx)("div",{children:(0,j.jsx)("h4",{children:(0,h.ag)("common.all")})})]})]})}),U.length>=1&&(0,j.jsx)(j.Fragment,{children:U[0].rows.map((function(e){return(0,j.jsx)(u.rU,{to:{pathname:"/SearchArchive",archiveSearchString:b,archiveFilter:{statut:"archive",thematique:"",category:e._id}},children:(0,j.jsxs)("label",{className:"filterArchiveContianer",htmlFor:e._id,children:[(0,j.jsx)("input",{type:"radio",name:"archiveFilter",value:"etude",id:e._id}),(0,j.jsxs)("div",{className:"contentContainer",children:[(0,j.jsx)("div",{children:(0,j.jsx)("img",{className:"lazyload",src:d.zg,alt:"Etudes Icon"})}),(0,j.jsx)("div",{children:"fr"===t?(0,j.jsx)("h4",{children:e.titleFR}):"ar"===t?(0,j.jsx)("h4",{children:e.titleAR}):(0,j.jsx)("h4",{children:e.titleEN})})]})]},e._id)})}))})]}),!0===Y&&(0,j.jsx)(j.Fragment,{children:(0,l.Z)(Array(5)).map((function(e,t){return(0,j.jsx)(x.Z,{height:172,width:275},t)}))})]})]})})]})})]})};var f=m.ZP.div(a||(a=(0,n.Z)(['\n  width: 100%;\n  margin-top: 1.5rem;\n  display: grid;\n  grid-gap: 1rem;\n  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));\n\n  .contentContainer {\n    width: 275px;\n    height: 172px;\n    background-color: #fff;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    img {\n      margin-bottom: 2rem;\n    }\n\n    &:hover {\n      cursor: pointer;\n      background-color: #f7f7f7;\n    }\n  }\n  .resultContainer {\n    width: 275px;\n    height: 172px;\n    background-color: #fff;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    img {\n      margin-bottom: 2rem;\n    }\n\n    &:hover {\n      cursor: pointer;\n      background-color: #f7f7f7;\n    }\n  }\n  input[type="radio"] {\n    display: none;\n\n    &:checked ~ .contentContainer {\n      border: 1px solid #e1011a;\n      h4 {\n        color: #e1011a;\n      }\n    }\n  }\n'])))},55524:function(e,t,i){i.r(t),i.d(t,{default:function(){return Z}});var a=i(29439),n=i(27314),l=i(72791),s=(i(62431),i(90603)),r=i(91523),c=i(80184);var o=function(e){var t=e.slider,i=e.rows,n=(0,l.useState)(1),o=(0,a.Z)(n,2),d=o[0],h=o[1],p=Number(e.width),u=Number(e.height),m=localStorage.getItem("language");return(0,c.jsxs)("div",{className:"container-slider",style:{width:p,height:u},children:[e.rows.map((function(i,a){var n,l,s;return(0,c.jsx)("div",{className:d===a+1?"slide active-anim":"slide",children:(0,c.jsxs)(r.rU,{to:"/detail/".concat(e.rows[d-1]._id),children:["fr"===m?(0,c.jsx)("img",{style:{opacity:.4},width:p,height:u,className:"lazyload",src:(null===i||void 0===i||null===(n=i.photos)||void 0===n?void 0:n.length)>0?null===i||void 0===i?void 0:i.photos[0].downloadUrl:t,alt:"Search Archeive ICon",srcSet:""}):"ar"===m?(0,c.jsx)("img",{style:{opacity:.4},width:p,height:u,className:"lazyload",src:(null===i||void 0===i||null===(l=i.photosAR)||void 0===l?void 0:l.length)>0?null===i||void 0===i?void 0:i.photosAR[0].downloadUrl:t,alt:"Search Archeive ICon",srcSet:""}):(0,c.jsx)("img",{style:{opacity:.4},width:p,height:u,className:"lazyload",src:(null===i||void 0===i||null===(s=i.photosEN)||void 0===s?void 0:s.length)>0?null===i||void 0===i?void 0:i.photosEN[0].downloadUrl:t,alt:"Search Archeive ICon",srcSet:""}),e.render(i)]})},a)})),(0,c.jsx)(s.Z,{moveSlide:function(){d!==i.length?h(d+1):d===i.length&&h(1)},direction:"next"}),(0,c.jsx)(s.Z,{moveSlide:function(){1!==d?h(d-1):1===d&&h(i.length)},direction:"prev"}),(null===e||void 0===e?void 0:e.showDots)&&(0,c.jsx)("div",{className:"container-dots",children:e.rows.map((function(e,t){return(0,c.jsx)("div",{onClick:function(){return function(e){h(e)}(t+1)},className:d===t+1?"dot active":"dot"})}))}),!(null!==e&&void 0!==e&&e.showDots)&&(0,c.jsx)("div",{className:"content__sliderBottom",children:e.rows.map((function(t,i){return e.bottomrender(t,i,d)}))})]})},d=i(25930),h=i(32771),p=i(51949),u=i(26189),m=i(57688),v=i(10818),x=i(94233),g=i(42518),j=i(64428),f=i(72426),_=i.n(f),N=i(72239),b=i(57967),w=i(23140),y=i(30537),R=i(79271);var Z=function(){var e=new Date,t=(0,x.I0)(),s=(0,R.k6)(),f=localStorage.getItem("language");i(40944).locale(f);var Z=(0,l.useState)([{id:"",text:"",startDate:new Date,endDate:new Date,allDay:!0,img:"",description:""}]),F=(0,a.Z)(Z,2),A=F[0],E=F[1],U=(0,l.useState)({titleAR:"",titleFR:"",titleEN:"",descriptionAR:"",descriptionFR:"",descriptionEN:"",widgets:[{titleAR:"",titleFR:"",titleEN:"",descriptionAR:"",descriptionFR:"",descriptionEN:""}]}),D=(0,a.Z)(U,2),z=D[0],S=D[1];(0,l.useEffect)((function(){N.Z.listStats({show:!0},"","","").then((function(e){e.count>0&&S(e.rows[0])}))}),[]),(0,l.useEffect)((function(){t(u.Z.doFetchValidePublication(4)),t(v.Z.doFetch()),t(b.Z.doFetch())}),[]);var Y=(0,x.v9)(m.Z.selectRows),I=(0,x.v9)(p.Z.selectRows),k=(0,x.v9)(w.Z.selectRows),C=k.length<=3?202*k.length+"px":"606px",q=k.length<=3?"202px".concat(" ",2===k.length?"202px":3===k.length?"202px 202px":""):"202px 202px 202px";(0,l.useEffect)((function(){!function(){var e=[{id:"",text:"",startDate:new Date,endDate:new Date,allDay:!0,img:"",description:""}];k.map((function(t){var i={id:t.id,text:"ar"===f?t.titleAR:"fr"===f?t.titleFR:t.titleEN,description:"ar"===f?t.emplacementAR:"fr"===f?t.emplacementFR:t.emplacementEN,startDate:new Date(t.date),endDate:new Date(t.date),allDay:!0,img:"fr"===f?t.photos.length>0?t.photos[0].downloadUrl:"":"ar"===f?t.photosAR.length>0?t.photosAR[0].downloadUrl:"":t.photosEN.length>0?t.photosEN[0].downloadUrl:""};e.push(i)})),e.shift(),E(e)}()}),[k]);var M=function(e,t){return e&&e.length>t?e.substring(0,t)+"...":e};return(0,c.jsxs)("div",{className:"app",children:[(0,c.jsx)("div",{className:"app__calendar",children:(0,c.jsx)(r.rU,{to:"/Evenements",children:(0,c.jsx)("img",{src:n.zX,alt:""})})}),(0,c.jsx)("div",{className:"app__header",children:(0,c.jsx)("div",{className:"header__content",style:{height:549},children:(0,c.jsx)("div",{className:"content",children:(0,c.jsxs)("div",{className:"content__imagePrincipale",children:[(0,c.jsx)(o,{rows:Y,height:549,width:1170,label:"slider",render:function(e){return(0,c.jsx)("div",{className:"content__sliderTop",children:(0,c.jsx)("div",{className:"textContent",children:(0,c.jsx)("div",{className:"horizontalPlayerTitle ow",style:{color:"white",textShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",fontFamily:"Bebas Neue",fontStyle:"normal",fontWeight:400,fontSize:"47px",lineHeight:"40px"},children:"ar"===f?null===e||void 0===e?void 0:e.titleAR:"fr"===f?null===e||void 0===e?void 0:e.titleFR:null===e||void 0===e?void 0:e.titleEN})})})},showDots:!1,bottomrender:function(e,t,i){var a,l,s;return(0,c.jsx)("div",{className:i===t+1?"active__slideBottom":"",children:(0,c.jsxs)("span",{className:" lazy-load-image-background blur lazy-load-image-loaded",style:{color:"transparent",display:"block"},children:[(0,c.jsx)("img",{style:{width:250,height:100},alt:"https://placehold.jp/204x175.png",src:"fr"===f?(null===e||void 0===e||null===(a=e.photos)||void 0===a?void 0:a.length)>0?null===e||void 0===e?void 0:e.photos[0].downloadUrl:n.Wz:"ar"===f?(null===e||void 0===e||null===(l=e.photosAR)||void 0===l?void 0:l.length)>0?null===e||void 0===e?void 0:e.photosAR[0].downloadUrl:n.Wz:(null===e||void 0===e||null===(s=e.photosEN)||void 0===s?void 0:s.length)>0?null===e||void 0===e?void 0:e.photosEN[0].downloadUrl:n.Wz}),(0,c.jsx)("p",{className:i===t+1?"text__p text__gras":"text__p",children:M("ar"===f?null===e||void 0===e?void 0:e.titleAR:"fr"===f?null===e||void 0===e?void 0:e.titleFR:null===e||void 0===e?void 0:e.titleEN,30)})]})})}}),(0,c.jsx)("img",{className:"lazyload",src:n.kN,id:"image__mobile",alt:"Header "})]})})})}),(0,c.jsx)("div",{className:"app__statestique",children:(0,c.jsxs)("div",{className:"statestique",children:[(0,c.jsxs)("div",{className:"archieve__header",children:[(0,c.jsx)("h2",{children:(0,d.ag)("menu.Tableau")}),(0,c.jsx)("div",{className:"satestique__bar"})]}),(0,c.jsx)("div",{className:"statestique__graph",children:"fr"===f?(0,c.jsx)("iframe",{width:"100%",height:"700",src:"https://app.powerbi.com/view?r=eyJrIjoiODQwODgxYjctMDgzNi00ODY1LWJmYTctNjgxOTVhODU4MTNhIiwidCI6ImEyYjI1MTExLWRmYzctNDNiMC1iNDYwLTJlMjc0ZDYyZTAzYiJ9",style:{border:0},allowFullScreen:!0}):(0,c.jsx)("iframe",{width:"100%",height:"700",src:"https://app.powerbi.com/view?r=eyJrIjoiMmFlNDBmNmYtNjdkYy00ZjE2LWIwZGItNTFjYzkwY2NjNTA3IiwidCI6ImEyYjI1MTExLWRmYzctNDNiMC1iNDYwLTJlMjc0ZDYyZTAzYiJ9",style:{border:0},allowFullScreen:!0})}),z?(0,c.jsxs)("div",{className:"statesitique__global",children:[(0,c.jsxs)("div",{className:"global__left",children:[(0,c.jsx)("div",{className:"global__header",children:"ar"===f?z.titleAR:"fr"===f?z.titleFR:z.titleEN}),(0,c.jsx)("div",{className:"global__content",children:"ar"===f?z.descriptionAR:"fr"===f?z.descriptionFR:z.descriptionEN})]}),(0,c.jsxs)("div",{className:"global__right",children:[z.widgets[0]?(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{className:"global__number",children:[z.widgets[0].titleAR,(0,c.jsx)("img",{src:n.rC,alt:""})]}),(0,c.jsx)("div",{className:"detaill__number",children:"ar"===f?z.widgets[0].descriptionAR:"fr"===f?z.widgets[0].descriptionFR:z.widgets[0].descriptionEN})]}):null,z.widgets[1]?(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{className:"global__number",children:[z.widgets[1].titleAR,(0,c.jsx)("img",{src:n.jD,alt:""})]}),(0,c.jsx)("div",{className:"detaill__number",children:"ar"===f?z.widgets[1].descriptionAR:"fr"===f?z.widgets[1].descriptionFR:z.widgets[1].descriptionEN})]}):null,z.widgets[2]?(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{className:"global__number",children:[z.widgets[2].titleAR,(0,c.jsx)("img",{src:n.XF,alt:""})]}),(0,c.jsx)("div",{className:"detaill__number",children:"ar"===f?z.widgets[2].descriptionAR:"fr"===f?z.widgets[2].descriptionFR:z.widgets[2].descriptionEN})]}):null,z.widgets[3]?(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{className:"global__number",children:[z.widgets[3].titleAR,(0,c.jsx)("img",{src:n.ZB,alt:""})]}),(0,c.jsx)("div",{className:"detaill__number",children:"ar"===f?z.widgets[3].descriptionAR:"fr"===f?z.widgets[3].descriptionFR:z.widgets[3].descriptionEN})]}):null]}),(0,c.jsxs)("div",{className:"global__navigations",children:[(0,c.jsx)("div",{className:"arrow__left",children:(0,c.jsx)("img",{className:"lazyload",src:n.VJ,alt:"arrow__right ICon"})}),(0,c.jsx)("div",{className:"arrow__right",children:(0,c.jsx)("img",{className:"lazyload",src:n.rz,alt:"arrow__left Icon"})})]})]}):null]})}),(0,c.jsxs)("div",{className:"archieve__header",style:{maxWidth:"1170px",marginLeft:"210px",marginRight:"210px"},children:[(0,c.jsx)("h2",{children:(0,d.ag)("common.Archives")}),(0,c.jsx)("div",{className:"publication__bar"})]}),(0,c.jsx)("div",{className:"archeive",style:{maxWidth:"100%"},children:(0,c.jsx)("div",{style:{marginTop:43},children:(0,c.jsx)(g.default,{acceuil:!0})})}),I.length>0?(0,c.jsx)("div",{className:"app__publications",children:(0,c.jsxs)("div",{className:"publication",children:[I[0]?(0,c.jsxs)("div",{className:"publication__left",children:[(0,c.jsxs)("div",{className:"archieve__header",children:[(0,c.jsx)("h2",{children:"ar"===f?I[0].titleAR:"fr"===f?I[0].titleFR:I[0].titleEN}),(0,c.jsx)("div",{className:"publication__bar"})]}),I[0].publications.length>0?(0,c.jsxs)("div",{className:"publication__images",children:[(0,c.jsx)(r.rU,{to:"/detail/".concat(I[0].publications[0].id),children:(0,c.jsx)("div",{className:"images__header",children:(0,c.jsxs)("div",{className:"__header",children:["fr"===f?(0,c.jsx)(h.Z,{className:"lazyload",src:I[0].publications[0].photos.length>0?"".concat(j.F,"/file/download?privateUrl=").concat(I[0].publications[0].photos[0].privateUrl):"https://placehold.jp/670x354.png",alt:"Publication Image"}):"ar"===f?(0,c.jsx)(h.Z,{className:"lazyload",src:I[0].publications[0].photosAR.length>0?"".concat(j.F,"/file/download?privateUrl=").concat(I[0].publications[0].photosAR[0].privateUrl):"https://placehold.jp/670x354.png",alt:"Publication Image"}):(0,c.jsx)(h.Z,{className:"lazyload",src:I[0].publications[0].photosEN.length>0?"".concat(j.F,"/file/download?privateUrl=").concat(I[0].publications[0].photosEN[0].privateUrl):"https://placehold.jp/670x354.png",alt:"Publication Image"}),(0,c.jsx)("div",{className:"__detaills",children:(0,c.jsxs)("div",{className:"list__detaill",children:[(0,c.jsxs)("div",{className:"detaill__header",children:[(0,c.jsx)("div",{className:"__left",children:(0,c.jsx)("p",{children:"ar"===f?I[0].publications[0].thematique[0].titleAR:"fr"===f?I[0].publications[0].thematique[0].titleFR:I[0].publications[0].thematique[0].titleEN})}),(0,c.jsx)("div",{className:"__right",children:_()(I[0].publications[0].date).format("DD-MM-YYYY")})]}),(0,c.jsx)("div",{className:"__content",children:M("ar"===f?I[0].publications[0].titleAR:"fr"===f?I[0].publications[0].titleFR:I[0].publications[0].titleEN,30)})]})})]})})}),I[0].publications.length>0?(0,c.jsx)("div",{className:"images__bottom",children:Array.from({length:(I[0].publications.length<4?I[0].publications.length:4)-1}).map((function(e,t){return i=t,(0,c.jsx)("div",{children:(0,c.jsxs)(r.rU,{to:"/detail/".concat(I[0].publications[i+1].id),children:["fr"===f?(0,c.jsx)(h.Z,{className:"lazyload",src:I[0].publications[i+1].photos.length>0?"".concat(j.F,"/file/download?privateUrl=").concat(I[0].publications[i+1].photos[0].privateUrl):"https://placehold.jp/670x354.png",alt:"publication2 Icon"}):"ar"===f?(0,c.jsx)(h.Z,{className:"lazyload",src:I[0].publications[i+1].photosAR.length>0?"".concat(j.F,"/file/download?privateUrl=").concat(I[0].publications[i+1].photosAR[0].privateUrl):"https://placehold.jp/670x354.png",alt:"publication2 Icon"}):(0,c.jsx)(h.Z,{className:"lazyload",src:I[0].publications[i+1].photosEN.length>0?"".concat(j.F,"/file/download?privateUrl=").concat(I[0].publications[i+1].photosEN[0].privateUrl):"https://placehold.jp/670x354.png",alt:"publication2 Icon"}),(0,c.jsxs)("div",{className:"list__detaill",children:[(0,c.jsxs)("div",{className:"detaill__header",children:[(0,c.jsx)("div",{className:"header__left",children:(0,c.jsx)("p",{children:M("ar"===f?I[0].publications[i+1].thematique[0].titleAR:"fr"===f?I[0].publications[i+1].thematique[0].titleFR:I[0].publications[i+1].thematique[0].titleEN,30)})}),(0,c.jsx)("div",{className:"header__right",children:_()(I[0].publications[i+1].date).format("DD-MM-YYYY")})]}),(0,c.jsx)("div",{className:"detaill__content",children:M("ar"===f?I[0].publications[i+1].titleAR:"fr"===f?I[0].publications[i+1].titleFR:I[0].publications[i+1].titleEN,30)})]})]})});var i}))}):null]}):null,(0,c.jsx)(r.rU,{to:"/detaill/category/".concat(I[0]._id),children:(0,c.jsx)("div",{className:"plus__button",children:(0,d.ag)("common.voirPlus")})})]}):null,I.length>1?(0,c.jsx)("div",{className:"publication__right",children:(0,c.jsxs)("div",{className:"communique",children:[(0,c.jsxs)("div",{className:"archieve__header",children:[(0,c.jsx)("h2",{children:"ar"===f?I[1].titleAR:"fr"===f?I[1].titleFR:I[1].titleEN}),(0,c.jsx)("div",{className:"communiquer__bar"})]}),I[1].publications.length>0?(0,c.jsxs)(c.Fragment,{children:[Array.from({length:I[1].publications.length<=2?I[1].publications.length:2}).map((function(e,t){return(0,c.jsx)("div",{className:"images__header",children:(0,c.jsx)("div",{className:"__header",children:(0,c.jsxs)(r.rU,{to:"/detail/".concat(I[1].publications[t].id),children:["fr"===f?(0,c.jsx)(h.Z,{className:"lazyload",src:I[1].publications[t].photos.length>0?"".concat(j.F,"/file/download?privateUrl=").concat(I[1].publications[t].photos[0].privateUrl):"https://placehold.jp/426x248.png",alt:"Publication Image"}):"ar"===f?(0,c.jsx)(h.Z,{className:"lazyload",src:I[1].publications[t].photosAR.length>0?"".concat(j.F,"/file/download?privateUrl=").concat(I[1].publications[t].photosAR[0].privateUrl):"https://placehold.jp/426x248.png",alt:"Publication Image"}):(0,c.jsx)(h.Z,{className:"lazyload",src:I[1].publications[t].photosEN.length>0?"".concat(j.F,"/file/download?privateUrl=").concat(I[1].publications[t].photosEN[0].privateUrl):"https://placehold.jp/426x248.png",alt:"Publication Image"}),(0,c.jsx)("div",{className:"__detaills",children:(0,c.jsxs)("div",{className:"list__detaill",children:[(0,c.jsxs)("div",{className:"detaill__header",children:[(0,c.jsx)("div",{className:"__left",children:(0,c.jsx)("p",{children:"fr"===f?I[1].publications[t].thematique[0].titleFR:"ar"===f?I[1].publications[t].thematique[0].titleAR:I[1].publications[t].thematique[0].titleEN})}),(0,c.jsxs)("div",{className:"__right",children:[" ",_()(I[1].publications[t].date).format("DD-MM-YYYY")]})]}),(0,c.jsx)("div",{className:"__content",children:M("fr"===f?I[1].publications[t].titleFR:"en"===f?I[1].publications[t].titleEN:I[1].publications[t].titleAR,30)})]})})]})})})})),(0,c.jsxs)("div",{className:"communique",children:[(0,c.jsx)("div",{className:"",children:(0,c.jsx)("div",{className:"publication__list",children:Array.from({length:(I[1].publications.length<6?I[1].publications.length:6)-2}).map((function(e,t){return(0,c.jsxs)("div",{children:[(0,c.jsx)(r.rU,{to:"/detail/".concat(I[1].publications[t+2].id),children:"fr"===f?(0,c.jsx)(h.Z,{className:"lazyload",src:I[1].publications[t+2].photos.length>0?"".concat(j.F,"/file/download?privateUrl=").concat(I[1].publications[t+2].photos[0].privateUrl):"https://placehold.jp/120x80.png",alt:"",id:"publication__leftImage"}):"ar"===f?(0,c.jsx)(h.Z,{className:"lazyload",src:I[1].publications[t+2].photosAR.length>0?"".concat(j.F,"/file/download?privateUrl=").concat(I[1].publications[t+2].photosAR[0].privateUrl):"https://placehold.jp/120x80.png",alt:"",id:"publication__leftImage"}):(0,c.jsx)(h.Z,{className:"lazyload",src:I[1].publications[t+2].photosEN.length>0?"".concat(j.F,"/file/download?privateUrl=").concat(I[1].publications[t+2].photosEN[0].privateUrl):"https://placehold.jp/120x80.png",alt:"",id:"publication__leftImage"})}),(0,c.jsx)(r.rU,{to:"/detail/".concat(I[1].publications[t+2].id),children:(0,c.jsxs)("div",{className:"list__detaill",children:[(0,c.jsxs)("div",{className:"detaill__header",children:[(0,c.jsx)("div",{className:"header__left",children:(0,c.jsx)("p",{children:"ar"===f?I[1].publications[t+2].thematique[0].titleAR:"fr"===f?I[1].publications[t+2].thematique[0].titleFR:I[1].publications[t+2].thematique[0].titleEN})}),(0,c.jsx)("div",{className:"header__right",children:_()(I[1].publications[t+2].date).format("DD-MM-YYYY")})]}),(0,c.jsx)("div",{className:"detaill__content",children:M("ar"===f?I[1].publications[t+2].titleAR:"fr"===f?I[1].publications[t+2].titleFR:I[1].publications[t+2].titleEN,30)})]})})]})}))})}),(0,c.jsx)(r.rU,{to:"/detaill/category/".concat(I[1]._id),children:(0,c.jsx)("div",{className:"plus__button",children:(0,d.ag)("common.voirPlus")})})]})]}):null]})}):null]})}):null,(0,c.jsxs)("div",{className:"Glossaire",children:[(0,c.jsx)("h5",{children:(0,d.ag)("menu.Glossaire")}),(0,c.jsx)(r.rU,{to:"/Glossaire",children:(0,c.jsx)("div",{className:"global__button",children:(0,d.ag)("common.discover")})})]}),k.length>0?(0,c.jsx)("div",{className:"app__evenement",children:(0,c.jsxs)("div",{className:"evenenement",children:[(0,c.jsxs)("div",{className:"archieve__header",children:[(0,c.jsx)("h2",{children:(0,d.ag)("common.Ev\xe8nements")}),(0,c.jsx)("div",{className:"satestique__bar"})]}),(0,c.jsxs)("div",{className:"evenement__content",style:{width:"fit-content"},children:[(0,c.jsxs)("div",{className:"evenement__timing",style:{height:C},children:[(0,c.jsx)("div",{className:"timing__bar",children:(0,c.jsx)("img",{className:"lazyload",src:n.Kb,alt:"",style:{height:C}})}),(0,c.jsx)("div",{className:"timing__number",children:Array.from({length:k.length<3?k.length:3}).map((function(e,t){return(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:"cercle__red"}),(0,c.jsxs)("div",{className:"time",children:[(0,c.jsx)("div",{className:"date",children:_()(k[t].date).format("D")}),(0,c.jsx)("div",{className:"month",children:_()(k[t].date).locale("ar"===f?"ar":"fr").format("MMMM")})]})]})}))})]}),(0,c.jsx)("div",{className:"evenement__description",style:{gridTemplateRows:q},children:Array.from({length:k.length<3?k.length:3}).map((function(e,t){return(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:"evenement__left",children:(0,c.jsx)(r.rU,{to:"/Evenements/".concat(k[t]._id),children:(0,c.jsx)("span",{className:" lazy-load-image-background blur lazy-load-image-loaded",style:{color:"transparent",display:"contents"},children:"fr"===f?(0,c.jsx)("img",{alt:"https://placehold.jp/204x175.png",src:k[t].photos.length>0?"".concat(j.F,"/file/download?privateUrl=").concat(k[t].photos[0].privateUrl):"https://placehold.jp/204x175.png"}):"ar"===f?(0,c.jsx)("img",{alt:"https://placehold.jp/204x175.png",src:k[t].photosAR.length>0?"".concat(j.F,"/file/download?privateUrl=").concat(k[t].photosAR[0].privateUrl):"https://placehold.jp/204x175.png"}):(0,c.jsx)("img",{alt:"https://placehold.jp/204x175.png",src:k[t].photosEN.length>0?"".concat(j.F,"/file/download?privateUrl=").concat(k[t].photosEN[0].privateUrl):"https://placehold.jp/204x175.png"})})})}),(0,c.jsx)(r.rU,{to:"/Evenements/".concat(k[t]._id),children:(0,c.jsxs)("div",{className:"evenement__right",children:[(0,c.jsxs)("div",{className:"right__date",children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("img",{className:"lazyload",src:n.YN,alt:"",srcSet:""}),_()(k[t].date).format("DD-MM-YYYY")]}),(0,c.jsxs)("div",{children:[(0,c.jsx)("img",{className:"lazyload",src:n.rv,alt:""}),_()(k[t].date).format("LT")]})]}),(0,c.jsx)("div",{className:"righ__desctiption",children:"ar"===f?k[t].titleAR:"fr"===f?k[t].titleFR:k[t].titleEN}),(0,c.jsx)("div",{className:"right__footer",children:"ar"===f?k[t].emplacementAR:"fr"===f?k[t].emplacementFR:k[t].emplacementEN})]})})]})}))}),(0,c.jsx)("div",{className:"evenement__calendar",children:(0,c.jsx)(y.Scheduler,{rtlEnabled:"ar"===f,views:[],onAppointmentDblClick:function(e){s.push("/Evenements/".concat(e.appointmentData.id))},appointmentTooltipRender:function(e){return(0,c.jsx)(r.rU,{to:"/Evenements/".concat(e.appointmentData.id),children:(0,c.jsxs)("div",{className:"evenement__right",style:{height:"300"},children:[(0,c.jsx)("h5",{style:{fontSize:20},children:e.appointmentData.text}),(0,c.jsx)("p",{children:(0,c.jsx)("img",{src:e.appointmentData.img,style:{marginTop:10,height:"150px"}})}),(0,c.jsx)("div",{className:"right__footer",children:M(e.appointmentData.description,150)})]})})},timeZone:"France/Paris",dataSource:A,defaultCurrentView:"month",defaultCurrentDate:e,height:600,firstDayOfWeek:1,startDayHour:8,endDayHour:18})})]})]})}):null]})}},8765:function(e,t,i){var a,n=i(30168),l=(i(72791),i(91523)),s=i(86538),r=i(80184),c=s.ZP.div(a||(a=(0,n.Z)(['\n  margin: 28px 0 10px 0;\n  .breadcrumb {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    background-color: transparent;\n  }\n  ol {\n    display: flex;\n  }\n  li {\n    font-family: "Proxima Nova";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 25px;\n  }\n  .breadcrump__nav {\n    margin: auto;\n    left: 0;\n    display: flex;\n    max-width: 1170px;\n    flex-direction: column;\n  }\n\n  .breadcrumb-item:not(.active) a {\n    color: rgba(0, 0, 0, 0.45);\n  }\n\n  h2 {\n    font-family: "Bebas Neue Pro";\n    font-style: normal;\n    font-weight: 700;\n    font-size: 47px;\n    line-height: 39px;\n  }\n'])));t.Z=function(e){var t=function(e){return e.length>1};return(0,r.jsx)(c,{children:(0,r.jsxs)("div",{className:"breadcrump__nav",children:[(0,r.jsx)("div",{children:(0,r.jsx)("h2",{children:e.title})}),(0,r.jsx)("div",{children:(0,r.jsx)("ol",{className:"breadcrumb",children:e.items.map((function(e,i){return(0,r.jsx)("li",{className:"breadcrumb-item",children:t(e)?(0,r.jsxs)(l.rU,{to:e[1],children:[" ",e[0],"/"===e[1]?(0,r.jsx)(r.Fragment,{children:e[1]}):(0,r.jsx)("div",{style:{display:"none",marginBottom:0},children:e[1]})]}):e[0]},e[0])}))})})]})})}},32771:function(e,t,i){i(72791);var a=i(87087),n=(i(19713),i(80184));t.Z=function(e){var t=e.src,i=e.width,l=e.height,s=e.alt,r=e.caption,c=e.key,o=t||"https://placehold.jp/".concat(i,"x").concat(l,".png");return(0,n.jsx)(a.LazyLoadImage,{alt:s,height:l,src:o,width:i,effect:"blur",caption:r},c)}},90603:function(e,t,i){i.d(t,{Z:function(){return l}});i(72791),i(62431);var a=i(27314),n=i(80184);function l(e){var t=e.direction,i=e.moveSlide;return(0,n.jsx)("button",{onClick:i,className:"next"===t?"btn-slide next":"btn-slide prev",children:(0,n.jsx)("img",{src:"next"===t?a.rz:a.VJ,alt:"arrow"})})}},62431:function(){}}]);
//# sourceMappingURL=3473.bd2f2772.chunk.js.map