"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[9594],{9932:function(t,e,n){n.d(e,{Z:function(){return c}});var i=n(74165),r=n(15861),a=n(15671),o=n(43144),s=n(27415),l=n(56856),c=function(){function t(){(0,a.Z)(this,t)}return(0,o.Z)(t,null,[{key:"getCategoriesList",value:function(){var t=(0,r.Z)((0,i.Z)().mark((function t(){var e,n;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=l.Z.get(),t.next=3,s.Z.get("/tenant/".concat(e,"/category-publication"));case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"getSearchResultsForPublicationsBasedOnSearchString",value:function(){var t=(0,r.Z)((0,i.Z)().mark((function t(e,n){var r,a;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=l.Z.get(),t.next=3,s.Z.get("/tenant/".concat(r,"/search?filter=").concat(e,"&limit=10&offset=").concat(n,"&validated={true}"));case 3:return a=t.sent,t.abrupt("return",a.data);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"searchUsingMainCatefories",value:function(){var t=(0,r.Z)((0,i.Z)().mark((function t(e,n,r){var a,o,c,d,u,h;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=l.Z.get(),t.next=3,s.Z.get("/tenant/".concat(c,"/category-publication?filter[titleFR]=").concat(n));case 3:return d=t.sent,u=null===(a=d.data.rows[0])||void 0===a?void 0:a.publications,h={rows:null!==u&&void 0!==u?u:[],count:null!==(o=null===u||void 0===u?void 0:u.length)&&void 0!==o?o:0},t.abrupt("return",h);case 7:case"end":return t.stop()}}),t)})));return function(e,n,i){return t.apply(this,arguments)}}()},{key:"getSearchResultsForArchiveBasedOnSearchString",value:function(){var t=(0,r.Z)((0,i.Z)().mark((function t(e,n,r){var a,o;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=l.Z.get(),t.next=3,s.Z.get("/tenant/".concat(a,"/publication?filter[descriptionFR]=").concat(e,"&limit=5&offset=").concat(r,"&filter[statut]=archive").concat(n));case 3:return o=t.sent,t.abrupt("return",o.data);case 5:case"end":return t.stop()}}),t)})));return function(e,n,i){return t.apply(this,arguments)}}()},{key:"getArchivePublications",value:function(){var t=(0,r.Z)((0,i.Z)().mark((function t(e,n,r,a,o){var c,d,u;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={filter:e,orderBy:n,limit:r,offset:a,advanced:o},d=l.Z.get(),t.next=4,s.Z.get("/tenant/".concat(d,"/publication/search"),{params:c});case 4:return u=t.sent,t.abrupt("return",u.data);case 6:case"end":return t.stop()}}),t)})));return function(e,n,i,r,a){return t.apply(this,arguments)}}()}]),t}()},70651:function(t,e,n){n.d(e,{Z:function(){return h}});var i,r=n(30168),a=(n(72791),n(91523)),o=n(86538),s=n(53540),l=n(72426),c=n.n(l),d=n(51851),u=n(80184);function h(t){var e=t._id,n=t.date,i=t.content,r=t.thumbnail,o=t.title,l=t.entite,h=t.type,g=c()(n).format("l");return(0,u.jsxs)(p,{children:[(0,u.jsx)(a.rU,{to:"/"+l+"/"+e,children:(0,u.jsx)("div",{className:"search__description",children:(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{className:"evenement__left",children:r?(0,u.jsx)("img",{className:"lazyload",style:{width:100,height:100},src:r}):(0,u.jsx)("img",{className:"lazyload",style:{width:100,height:100},src:d.T1})}),(0,u.jsxs)("div",{className:"evenement__right",children:[(0,u.jsxs)("div",{className:"date",children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("img",{className:"lazyload",src:d.YN}),g]}),h?(0,u.jsx)("div",{className:"cardHeader",children:(0,u.jsx)("span",{className:"categoryBadge",children:h})}):null]}),o?(0,u.jsx)("div",{className:"title",children:o.length>100?(0,s.ZP)(o.substring(0,100)+"..."):(0,s.ZP)(o)}):null,i?(0,u.jsx)("div",{className:"right__footer",children:i.length>100?(0,s.ZP)(i.substring(0,100)+"..."):(0,s.ZP)(i)}):null]})]})})}),(0,u.jsx)("hr",{})]})}var p=o.ZP.div(i||(i=(0,r.Z)(['\n  /* LEFT SECTION */\n  hr {\n    height: 1px;\n    background-color: #2b2840;\n    border: none;\n  }\n  .cardContent {\n    flex-grow: 1;\n    height: 100%;\n    padding-left: 1rem;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n\n    .cardHeader {\n      width: 100%;\n      display: flex;\n      justify-content: space-between;\n      font-size: 12px;\n      font-family: "Proxima Nova";\n\n      .categoryBadge {\n        background: #f8d7da;\n        border-radius: 3px;\n        color: var(--dark--red);\n        padding: 0.4rem 0.5rem;\n        font-size: 12px;\n        font-family: "Proxima Nova";\n      }\n    }\n\n    .title {\n      margin-top: 1.5rem;\n      color: var(--violet);\n\n      span {\n        font-family: "Bebas Neue Pro";\n        font-style: normal;\n        font-weight: 700;\n        font-size: 23px;\n        line-height: 24px;\n      }\n    }\n  }\n  hr {\n    margin-top: 10px;\n    margin-bottom: 5px;\n  }\n'])))},3227:function(t,e,n){n.r(e),n.d(e,{default:function(){return b}});var i,r=n(30168),a=n(29439),o=n(72791),s=(0,o.createContext)(null),l=n(86538),c=n(9932),d=n(2579),u=n(70651),h=n(25930),p=n(19879),g=n(51851),f=n(66015),m=n(80184);function v(t){var e=t.currentPostsToShow,n=p.Z.TabPane,i=(0,o.useContext)(s).isLoading,r=localStorage.getItem("language");return(0,m.jsx)("div",{children:(0,m.jsx)(y,{children:!0===i?(0,m.jsx)("section",{children:(0,m.jsx)(d.Z,{height:170})}):(0,m.jsx)("section",{children:e.count>0?(0,m.jsx)("section",{children:(0,m.jsxs)(p.Z,{className:"links",defaultActiveKey:e.rows.rowsEvent.length>0?"0":e.rows.rowsPublication.length>0?"1":e.rows.rowsGlosaire.length>0?"2":"3",onChange:function(t){},children:[(0,m.jsx)(n,{className:"",tab:(0,h.ag)("menu.Ev\xe8nements"),disabled:e.rows.rowsEvent.length<=0,children:(0,m.jsx)(m.Fragment,{children:e.rows.rowsEvent.map((function(t,e){var n,i,a;return"fr"===r?(0,m.jsx)(u.Z,{type:t.category?t.category.titleFR:null,title:t.titleFR,entite:"evenement",_id:null!==(n=t._id)&&void 0!==n?n:0,date:t.date,content:t.descriptionFR,thumbnail:t.photos.length>0?t.photos[0].downloadUrl:g.T1},e):"ar"===r?(0,m.jsx)(u.Z,{type:t.category?t.category.titleAR:null,title:t.titleAR,entite:"evenement",_id:null!==(i=t._id)&&void 0!==i?i:0,date:t.date,content:t.descriptionAR,thumbnail:t.photosAR.length>0?t.photosAR[0].downloadUrl:g.T1},e):"en"===r?(0,m.jsx)(u.Z,{type:t.category?t.category.titleEN:null,title:t.titleEN,entite:"evenement",_id:null!==(a=t._id)&&void 0!==a?a:0,date:t.date,content:t.descriptionEN,thumbnail:t.photosEN.length>0?t.photosEN[0].downloadUrl:g.T1},e):void 0}))})},"0"),(0,m.jsx)(n,{tab:(0,h.ag)("menu.Publications"),disabled:e.rows.rowsPublication.length<=0,children:(0,m.jsx)(m.Fragment,{children:e.rows.rowsPublication.map((function(t,e){var n,i,a;return"fr"===r?(0,m.jsx)(u.Z,{type:t.category?t.category.titleFR:null,title:t.titleFR,entite:"detail",_id:null!==(n=t._id)&&void 0!==n?n:0,date:t.date,content:t.descriptionFR,thumbnail:t.photos.length>0?t.photos[0].downloadUrl:g.T1},e):"ar"===r?(0,m.jsx)(u.Z,{type:t.category?t.category.titleAR:null,title:t.titleAR,entite:"detail",_id:null!==(i=t._id)&&void 0!==i?i:0,date:t.date,content:t.descriptionAR,thumbnail:t.photosAR.length>0?t.photosAR[0].downloadUrl:g.T1},e):"en"===r?(0,m.jsx)(u.Z,{type:t.category?t.category.titleEN:null,title:t.titleEN,entite:"detail",_id:null!==(a=t._id)&&void 0!==a?a:0,date:t.date,content:t.descriptionEN,thumbnail:t.photosEN.length>0?t.photosEN[0].downloadUrl:g.T1},e):void 0}))})},"1"),(0,m.jsx)(n,{tab:(0,h.ag)("menu.Glossaire"),disabled:e.rows.rowsGlosaire.length<=0,children:(0,m.jsx)(m.Fragment,{children:e.rows.rowsGlosaire.map((function(t,e){var n,i,a;return"fr"===r?(0,m.jsx)(u.Z,{type:t.categorie?t.categorie.titleFR:null,title:t.nomFR,entite:"Glossaire",_id:null!==(n=t._id)&&void 0!==n?n:0,date:t.updatedAt,content:t.definitionFR,thumbnail:g.T1},e):"ar"===r?(0,m.jsx)(u.Z,{type:t.categorie?t.categorie.titleAR:null,title:t.nomAR,entite:"Glossaire",_id:null!==(i=t._id)&&void 0!==i?i:0,date:t.updatedAt,content:t.definitionAR,thumbnail:g.T1},e):"en"===r?(0,m.jsx)(u.Z,{type:t.categorie?t.categorie.titleEN:null,title:t.nomEN,entite:"Glossaire",_id:null!==(a=t._id)&&void 0!==a?a:0,date:t.updatedAt,content:t.definitionEN,thumbnail:g.T1},e):void 0}))})},"2"),(0,m.jsx)(n,{tab:(0,h.ag)("menu.M\xe9diath\xe8que"),disabled:e.rows.rowsMediatheque.length<=0,children:(0,m.jsx)(m.Fragment,{children:e.rows.rowsMediatheque.map((function(t,e){var n,i,a;return"fr"===r?(0,m.jsx)(u.Z,{type:t.type,title:t.titleFR,entite:"Mediatheque/entity",_id:null!==(n=t._id)&&void 0!==n?n:0,date:t.updatedAt,content:t.descriptionFR,thumbnail:t.photos.length>0?t.photos[0].downloadUrl:g.T1},e):"ar"===r?(0,m.jsx)(u.Z,{type:t.type,title:t.titleAR,entite:"Mediatheque/entity",_id:null!==(i=t._id)&&void 0!==i?i:0,date:t.updatedAt,content:t.descriptionAR,thumbnail:t.photosAR.length>0?t.photosAR[0].downloadUrl:g.T1},e):"en"===r?(0,m.jsx)(u.Z,{type:t.type,title:t.titleEN,entite:"Mediatheque/entity",_id:null!==(a=t._id)&&void 0!==a?a:0,date:t.updatedAt,content:t.descriptionEN,thumbnail:t.photosEN.length>0?t.photosEN[0].downloadUrl:g.T1},e):void 0}))})},"3")]})}):(0,m.jsx)(f.Z,{})})})})}var x,y=l.ZP.div(i||(i=(0,r.Z)(['\n  width: 100%;\n  margin: 1rem 0;\n\n  #noDataFound {\n    font-family: "Proxima Nova";\n    font-style: normal;\n    font-weight: 100;\n    font-size: 1.5rem;\n    text-align: center;\n    color: #c7c6c6;\n\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n  }\n'])));n(85862);function w(t){var e=t.location,n=(0,o.useContext)(s),i=n.setIsLoading,r=n.SRP,a=n.setSRP,l=(n.searchString,n.setcurrentPageIndex);(0,o.useEffect)((function(){var t;t=e.HOME_SEARCH_STRING,i(!0),c.Z.getSearchResultsForPublicationsBasedOnSearchString(t,0).then((function(t){l(0),a(t),i(!1)}))}),[]);return r.length>=1&&r[0].rows.length>=1&&r[0].rows,(0,m.jsx)(j,{children:(0,m.jsx)(v,{currentPostsToShow:r})})}var Z,j=l.ZP.div(x||(x=(0,r.Z)(["\n  margin-top: 1rem;\n"])));function b(t){var e=t.location,n=(0,o.useState)(!1),i=(0,a.Z)(n,2),r=i[0],l=i[1],c=(0,o.useState)(e.HOME_SEARCH_STRING),d=(0,a.Z)(c,2),u=d[0],h=d[1],p=(0,o.useState)([]),g=(0,a.Z)(p,2),f=g[0],v=g[1],x=(0,o.useState)("autre"),y=(0,a.Z)(x,2),Z=y[0],j=y[1],b=(0,o.useState)(0),N=(0,a.Z)(b,2),R=N[0],P=N[1],S=(0,o.useState)(5),A=(0,a.Z)(S,2),E=A[0],F=A[1];return(0,m.jsx)(s.Provider,{value:{isLoading:r,setIsLoading:l,SRP:f,setSRP:v,searchString:u,setSearchString:h,publicationFilter:Z,setpublicationFilter:j,currentPageIndex:R,setcurrentPageIndex:P,numberOfPostsPerPage:E,setnumberOfPostsPerPage:F},children:(0,m.jsx)(_,{children:(0,m.jsx)("section",{className:"wideContent",children:(0,m.jsx)(w,{location:e})})})})}var _=l.ZP.section(Z||(Z=(0,r.Z)(["\n  max-width: 1170px;\n  margin: auto;\n\n  @media (max-width: 1071px) {\n    margin: 150px 0 0 0;\n  }\n  .wideContent {\n    display: flex;\n    justify-content: flex-start;\n  }\n"])))},32771:function(t,e,n){n(72791);var i=n(87087),r=(n(19713),n(51851)),a=n(80184);e.Z=function(t){var e=t.src,n=t.width,o=t.height,s=t.alt,l=t.caption,c=t.key,d=e||r.T1;return(0,a.jsx)(i.LazyLoadImage,{alt:s,height:o,src:d,width:n,effect:"blur",caption:l},c)}},66015:function(t,e,n){var i,r=n(30168),a=(n(72791),n(86538)),o=n(32771),s=n(51851),l=n(25930),c=n(80184);e.Z=function(){return(0,c.jsx)(d,{children:(0,c.jsx)("div",{className:"app__empty",children:(0,c.jsxs)("div",{className:"empty",children:[(0,c.jsx)(o.Z,{src:s.FY,height:100,width:100}),(0,c.jsxs)("h4",{className:"h4",id:"noDataFound",children:["\xa0",(0,l.ag)("common.noData")]})]})})})};var d=a.ZP.div(i||(i=(0,r.Z)(["\n  .app__empty {\n    width: 100%;\n    height: 100%;\n    max-width: 1170px;\n    margin: auto;\n  }\n\n  .empty {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    row-gap: 1rem;\n    justify-content: center;\n    width: 100%;\n    height: 60vh;\n  }\n"])))}}]);
//# sourceMappingURL=9594.60b80d88.chunk.js.map