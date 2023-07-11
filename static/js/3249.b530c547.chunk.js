"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[3249],{9932:function(n,e,t){t.d(e,{Z:function(){return s}});var r=t(74165),a=t(15861),i=t(15671),c=t(43144),o=t(27415),l=t(56856),s=function(){function n(){(0,i.Z)(this,n)}return(0,c.Z)(n,null,[{key:"getCategoriesList",value:function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var e,t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=l.Z.get(),n.next=3,o.Z.get("/tenant/".concat(e,"/category-publication"));case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},{key:"getSearchResultsForPublicationsBasedOnSearchString",value:function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t){var a,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=l.Z.get(),n.next=3,o.Z.get("/tenant/".concat(a,"/search?filter=").concat(e,"&limit=10&offset=").concat(t,"&validated={true}"));case 3:return i=n.sent,n.abrupt("return",i.data);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},{key:"searchUsingMainCatefories",value:function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t,a){var i,c,s,d,u,h;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s=l.Z.get(),n.next=3,o.Z.get("/tenant/".concat(s,"/category-publication?filter[titleFR]=").concat(t));case 3:return d=n.sent,u=null===(i=d.data.rows[0])||void 0===i?void 0:i.publications,h={rows:null!==u&&void 0!==u?u:[],count:null!==(c=null===u||void 0===u?void 0:u.length)&&void 0!==c?c:0},n.abrupt("return",h);case 7:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()},{key:"getSearchResultsForArchiveBasedOnSearchString",value:function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t,a){var i,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=l.Z.get(),n.next=3,o.Z.get("/tenant/".concat(i,"/publication?filter[descriptionFR]=").concat(e,"&limit=5&offset=").concat(a,"&filter[statut]=archive").concat(t));case 3:return c=n.sent,n.abrupt("return",c.data);case 5:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()},{key:"getArchivePublications",value:function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t,a){var i,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=l.Z.get(),n.next=3,o.Z.get("/tenant/".concat(i,"/publication/search?filter=").concat(e,"&limit=10&offset=").concat(a,"&advanced[statut]=").concat(t.statut,"&advanced[thematique]=").concat(t.thematique,"&advanced[category]=").concat(t.category));case 3:return c=n.sent,n.abrupt("return",c.data);case 5:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()}]),n}()},6280:function(n,e,t){t.r(e);var r,a=t(30168),i=t(74165),c=t(15861),o=t(29439),l=t(72791),s=t(25930),d=t(8765),u=t(86538),h=t(9932),f=t(2579),p=(t(85862),t(70651)),m=t(39126),v=t(80184);e.default=function(n){var e=n.location,t=localStorage.getItem("language"),r=(0,l.useState)([]),a=(0,o.Z)(r,2),u=a[0],x=a[1],y=(0,l.useState)(!1),Z=(0,o.Z)(y,2),j=Z[0],b=Z[1],w=function(){var n=(0,c.Z)((0,i.Z)().mark((function n(){var t;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,b(!0),n.next=4,h.Z.getArchivePublications(e.archiveSearchString,e.archiveFilter,0);case 4:t=n.sent,x(t.rows),b(!1),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),console.log("err",n.t0),b(!1);case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();return(0,l.useEffect)((function(){w()}),[]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(d.Z,{title:(0,s.ag)("common.Archives"),items:[[(0,s.ag)("app.title"),"/"],[(0,s.ag)("common.Archives")]]}),(0,v.jsx)("div",{className:"app__archieve__page_search",children:j?(0,v.jsx)("section",{children:(0,v.jsx)(f.Z,{height:170})}):(0,v.jsx)("div",{className:"archeive",children:(0,v.jsx)("div",{className:"archieve__content",children:(0,v.jsx)("div",{className:"archieve__left",children:(0,v.jsx)(g,{children:(0,v.jsx)("div",{children:u.length>0?(0,v.jsx)("div",{children:u.map((function(n,e){var r,a,i,c;return n.photos&&(r=function(n){var e="https://via.placeholder.com/270x175";return n.forEach((function(n){if(n.downloadUrl&&n.downloadUrl.length>=1){var t=n.downloadUrl.substring(n.downloadUrl.lastIndexOf(".")+1,n.downloadUrl.length);"png, jpg, jpeg, gif".includes(t)&&(e=n.downloadUrl)}})),e}(n.photos)),"fr"===t?(0,v.jsx)(p.Z,{type:n.category?n.category.titleFR:null,title:n.titleFR,entite:"detail",_id:null!==(a=n._id)&&void 0!==a?a:0,date:n.date,content:n.descriptionFR,thumbnail:r},e):"ar"===t?(0,v.jsx)(p.Z,{type:n.category?n.category.titleAR:null,title:n.titleAR,entite:"detail",_id:null!==(i=n._id)&&void 0!==i?i:0,date:n.date,content:n.descriptionAR,thumbnail:r},e):"en"===t?(0,v.jsx)(p.Z,{type:n.category?n.category.titleEN:null,title:n.titleEN,entite:"detail",_id:null!==(c=n._id)&&void 0!==c?c:0,date:n.date,content:n.descriptionEN,thumbnail:r},e):void 0}))}):(0,v.jsxs)("h3",{className:"h3",id:"noDataFound",children:[(0,v.jsx)(m.$gH,{}),"\xa0",(0,s.ag)("common.noData")]})})})})})})})]})};var g=u.ZP.div(r||(r=(0,a.Z)(['\n  width: 100%;\n  margin: 1rem 0;\n\n  #noDataFound {\n    font-family: "Proxima Nova";\n    font-style: normal;\n    font-weight: 100;\n    font-size: 1.5rem;\n    text-align: center;\n    color: #c7c6c6;\n\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n  }\n'])))},70651:function(n,e,t){t.d(e,{Z:function(){return h}});var r,a=t(30168),i=(t(72791),t(91523)),c=t(86538),o=t(53540),l=t(72426),s=t.n(l),d=t(86419),u=t(80184);function h(n){var e=n._id,t=n.date,r=n.content,a=n.thumbnail,c=n.title,l=n.entite,h=n.type,p=s()(t).format("l");return(0,u.jsxs)(f,{children:[(0,u.jsx)(i.rU,{to:"/"+l+"/"+e,children:(0,u.jsx)("div",{className:"search__description",children:(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{className:"evenement__left",children:a?(0,u.jsx)("img",{className:"lazyload",style:{width:100,height:100},src:a,alt:""}):(0,u.jsx)("img",{className:"lazyload",style:{width:100,height:100},src:d.Ap,alt:""})}),(0,u.jsxs)("div",{className:"evenement__right",children:[(0,u.jsxs)("div",{className:"date",children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("img",{className:"lazyload",src:d.YN,alt:"",srcSet:""}),p]}),h?(0,u.jsx)("div",{className:"cardHeader",children:(0,u.jsx)("span",{className:"categoryBadge",children:h})}):null]}),c?(0,u.jsx)("div",{className:"title",children:c.length>100?(0,o.ZP)(c.substring(0,100)+"..."):(0,o.ZP)(c)}):null,r?(0,u.jsx)("div",{className:"right__footer",children:r.length>100?(0,o.ZP)(r.substring(0,100)+"..."):(0,o.ZP)(r)}):null]})]})})}),(0,u.jsx)("hr",{})]})}var f=c.ZP.div(r||(r=(0,a.Z)(['\n  /* LEFT SECTION */\n  hr {\n    height: 1px;\n    background-color: #2b2840;\n    border: none;\n  }\n  .cardContent {\n    flex-grow: 1;\n    height: 100%;\n    padding-left: 1rem;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n\n    .cardHeader {\n      width: 100%;\n      display: flex;\n      justify-content: space-between;\n      font-size: 12px;\n      font-family: "Proxima Nova";\n\n      .categoryBadge {\n        background: #f8d7da;\n        border-radius: 3px;\n        color: var(--dark--red);\n        padding: 0.4rem 0.5rem;\n        font-size: 12px;\n        font-family: "Proxima Nova";\n      }\n    }\n\n    .title {\n      margin-top: 1.5rem;\n      color: var(--violet);\n\n      span {\n        font-family: "Bebas Neue Pro";\n        font-style: normal;\n        font-weight: 700;\n        font-size: 23px;\n        line-height: 24px;\n      }\n    }\n  }\n  hr {\n    margin-top: 10px;\n    margin-bottom: 5px;\n  }\n'])))},8765:function(n,e,t){var r,a=t(30168),i=(t(72791),t(91523)),c=t(86538),o=t(80184),l=c.ZP.div(r||(r=(0,a.Z)(['\n  margin: 28px 0 10px 0;\n  .breadcrumb {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    background-color: transparent;\n  }\n  ol {\n    display: flex;\n  }\n  li {\n    font-family: "Proxima Nova";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 25px;\n  }\n  .breadcrump__nav {\n    margin: auto;\n    left: 0;\n    display: flex;\n    max-width: 1170px;\n    flex-direction: column;\n  }\n\n  .breadcrumb-item:not(.active) a {\n    color: rgba(0, 0, 0, 0.45);\n  }\n\n  h2 {\n    font-family: "Bebas Neue Pro";\n    font-style: normal;\n    font-weight: 700;\n    font-size: 47px;\n    line-height: 39px;\n  }\n'])));e.Z=function(n){var e=function(n){return n.length>1};return(0,o.jsx)(l,{children:(0,o.jsxs)("div",{className:"breadcrump__nav",children:[(0,o.jsx)("div",{children:(0,o.jsx)("h2",{className:"h2",children:n.title})}),(0,o.jsx)("div",{children:(0,o.jsx)("ol",{className:"breadcrumb",children:n.items.map((function(n,t){return(0,o.jsx)("li",{className:"breadcrumb-item liClass",children:e(n)?(0,o.jsxs)(i.rU,{to:n[1],children:[" ",n[0],"/"===n[1]?(0,o.jsx)(o.Fragment,{children:n[1]}):(0,o.jsx)("div",{style:{display:"none",marginBottom:0},children:n[1]})]}):n[0]},n[0])}))})})]})})}}}]);
//# sourceMappingURL=3249.b530c547.chunk.js.map