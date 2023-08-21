"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[2518],{9932:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(74165),a=t(15861),i=t(15671),c=t(43144),s=t(27415),o=t(56856),l=function(){function e(){(0,i.Z)(this,e)}return(0,c.Z)(e,null,[{key:"getCategoriesList",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.Z.get(),e.next=3,s.Z.get("/tenant/".concat(n,"/category-publication"));case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getSearchResultsForPublicationsBasedOnSearchString",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){var a,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.Z.get(),e.next=3,s.Z.get("/tenant/".concat(a,"/search?filter=").concat(n,"&limit=10&offset=").concat(t,"&validated={true}"));case 3:return i=e.sent,e.abrupt("return",i.data);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},{key:"searchUsingMainCatefories",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t,a){var i,c,l,u,d,h;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=o.Z.get(),e.next=3,s.Z.get("/tenant/".concat(l,"/category-publication?filter[titleFR]=").concat(t));case 3:return u=e.sent,d=null===(i=u.data.rows[0])||void 0===i?void 0:i.publications,h={rows:null!==d&&void 0!==d?d:[],count:null!==(c=null===d||void 0===d?void 0:d.length)&&void 0!==c?c:0},e.abrupt("return",h);case 7:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}()},{key:"getSearchResultsForArchiveBasedOnSearchString",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t,a){var i,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.Z.get(),e.next=3,s.Z.get("/tenant/".concat(i,"/publication?filter[descriptionFR]=").concat(n,"&limit=5&offset=").concat(a,"&filter[statut]=archive").concat(t));case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}()},{key:"getArchivePublications",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t,a,i,c){var l,u,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l={filter:n,orderBy:t,limit:a,offset:i,advanced:c},u=o.Z.get(),e.next=4,s.Z.get("/tenant/".concat(u,"/publication/search"),{params:l});case 4:return d=e.sent,e.abrupt("return",d.data);case 6:case"end":return e.stop()}}),e)})));return function(n,t,r,a,i){return e.apply(this,arguments)}}()}]),e}()},42518:function(e,n,t){t.r(n);var r,a=t(30168),i=t(93433),c=t(74165),s=t(15861),o=t(29439),l=t(72791),u=t(51851),d=t(25930),h=t(8765),f=t(91523),m=t(86538),p=t(9932),v=t(2579),g=(t(85862),t(72239)),x=t(80184);n.default=function(e){var n=localStorage.getItem("language"),t=(0,l.useState)(""),r=(0,o.Z)(t,2),a=r[0],m=r[1];(0,l.useEffect)((function(){g.Z.list("","","","").then((function(e){e.count>0&&("fr"===n&&m(e.rows[0].publicationDescFR),"ar"===n&&m(e.rows[0].publicationDescAR),"en"===n&&m(e.rows[0].publicationDescEN))}))}),[]);var b=(0,l.useState)(""),j=(0,o.Z)(b,2),Z=j[0],N=j[1],w=(0,l.useState)({statut:"archive",thematique:"",category:""}),_=(0,o.Z)(w,2),k=_[0],S=_[1],C=(0,l.useState)([]),F=(0,o.Z)(C,2),A=F[0],E=F[1],R=(0,l.useState)(!0),z=(0,o.Z)(R,2),I=z[0],P=z[1],B={pathname:"/SearchArchive",archiveSearchString:Z,archiveFilter:k},U=function(){var e=(0,s.Z)((0,c.Z)().mark((function e(){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.Z.getCategoriesList().then((function(e){P(!0),E((function(n){return n.concat(e)})),P(!1)})).catch((function(e){console.error(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){U()}),[]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(x.Fragment,{children:e.acceuil?null:(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(h.Z,{title:(0,d.ag)("common.Archives"),items:[[(0,d.ag)("app.title"),"/"],[(0,d.ag)("common.Archives")]]})})}),(0,x.jsx)("div",{className:"app__archieve__page",children:(0,x.jsxs)("div",{className:"archeive",children:[e.acceuil?null:(0,x.jsx)("p",{children:a}),(0,x.jsx)("div",{className:"archieve__content",children:(0,x.jsxs)("div",{className:"archieve__left",children:[(0,x.jsxs)("div",{className:"left__search",children:[(0,x.jsx)("input",{type:"text",placeholder:(0,d.ag)("common.archiveSearch"),onChange:function(e){N(e.target.value)},value:Z}),Z.length>=1?(0,x.jsx)(f.rU,{to:B,children:(0,x.jsxs)("div",{className:"button__search",children:[(0,x.jsx)("i",{className:"fa-solid fa-magnifying-glass"}),(0,d.ag)("common.search")]})}):(0,x.jsxs)("div",{className:"button__search",children:[(0,x.jsx)("i",{className:"fa-solid fa-magnifying-glass"}),(0,d.ag)("common.search")]})]}),(0,x.jsx)("div",{className:"mobile__archeiveSearch",children:(0,x.jsxs)("div",{className:"archeiveSearch__form",children:[(0,x.jsx)("input",{type:"text",placeholder:(0,d.ag)("common.archiveSearch")}),(0,x.jsx)("div",{className:"button_search",children:(0,x.jsx)("img",{className:"lazyload",src:u.TF,alt:"Search Archeive ICon",srcSet:""})})]})}),(0,x.jsxs)(y,{onChange:function(e){S(e.target.value)},children:[!1===I&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(f.rU,{to:B,children:(0,x.jsxs)("label",{className:"filterArchiveContianer",htmlFor:"all",children:[(0,x.jsx)("input",{type:"radio",name:"archiveFilter",value:"autre",id:"all"}),(0,x.jsxs)("div",{className:"contentContainer",children:[(0,x.jsx)("div",{children:(0,x.jsx)("img",{className:"lazyload",src:u.zg,alt:"Etudes Icon"})}),(0,x.jsx)("div",{children:(0,x.jsx)("h4",{className:"h4",children:(0,d.ag)("common.all")})})]})]})}),A.length>=1&&(0,x.jsx)(x.Fragment,{children:A[0].rows.map((function(e){return(0,x.jsx)(f.rU,{to:{pathname:"/SearchArchive",archiveSearchString:Z,archiveFilter:{statut:"archive",thematique:"",category:e._id}},children:(0,x.jsxs)("label",{className:"filterArchiveContianer",htmlFor:e._id,children:[(0,x.jsx)("input",{type:"radio",name:"archiveFilter",value:"etude",id:e._id}),(0,x.jsxs)("div",{className:"contentContainer",children:[(0,x.jsx)("div",{children:(0,x.jsx)("img",{className:"lazyload",src:u.zg,alt:"Etudes Icon"})}),(0,x.jsx)("div",{children:"fr"===n?(0,x.jsx)("h4",{className:"h4",children:e.titleFR}):"ar"===n?(0,x.jsx)("h4",{className:"h4",children:e.titleAR}):(0,x.jsx)("h4",{className:"h4",children:e.titleEN})})]})]},e._id)})}))})]}),!0===I&&(0,x.jsx)(x.Fragment,{children:(0,i.Z)(Array(5)).map((function(e,n){return(0,x.jsx)(v.Z,{height:172,width:275},n)}))})]})]})})]})})]})};var y=m.ZP.div(r||(r=(0,a.Z)(['\n  width: 100%;\n  margin-top: 1.5rem;\n  display: grid;\n  grid-gap: 1rem;\n  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));\n\n  .contentContainer {\n    width: 275px;\n    height: 172px;\n    background-color: #fff;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    img {\n      margin-bottom: 2rem;\n    }\n\n    &:hover {\n      cursor: pointer;\n      background-color: #f7f7f7;\n    }\n  }\n  .resultContainer {\n    width: 275px;\n    height: 172px;\n    background-color: #fff;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    img {\n      margin-bottom: 2rem;\n    }\n\n    &:hover {\n      cursor: pointer;\n      background-color: #f7f7f7;\n    }\n  }\n  input[type="radio"] {\n    display: none;\n\n    &:checked ~ .contentContainer {\n      border: 1px solid #e1011a;\n      h4 {\n        color: #e1011a;\n      }\n    }\n  }\n'])))},8765:function(e,n,t){var r,a=t(30168),i=(t(72791),t(91523)),c=t(86538),s=t(80184),o=c.ZP.div(r||(r=(0,a.Z)(['\n  margin: 28px 0 10px 0;\n  .breadcrumb {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    background-color: transparent;\n  }\n  ol {\n    display: flex;\n  }\n  li {\n    font-family: "Proxima Nova";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 25px;\n  }\n  .breadcrump__nav {\n    margin: auto;\n    left: 0;\n    display: flex;\n    max-width: 1170px;\n    flex-direction: column;\n  }\n\n  .breadcrumb-item:not(.active) a {\n    color: rgba(0, 0, 0, 0.45);\n  }\n\n  h2 {\n    font-family: "Bebas Neue Pro";\n    font-style: normal;\n    font-weight: 700;\n    font-size: 47px;\n    line-height: 39px;\n  }\n'])));n.Z=function(e){var n=function(e){return e.length>1};return(0,s.jsx)(o,{children:(0,s.jsxs)("div",{className:"breadcrump__nav",children:[(0,s.jsx)("div",{children:(0,s.jsx)("h2",{className:"h2",children:e.title})}),(0,s.jsx)("div",{children:(0,s.jsx)("ol",{className:"breadcrumb",children:e.items.map((function(e,t){return(0,s.jsx)("li",{className:"breadcrumb-item liClass",children:n(e)?(0,s.jsxs)(i.rU,{to:e[1],children:[" ",e[0],"/"===e[1]?(0,s.jsx)(s.Fragment,{children:e[1]}):(0,s.jsx)("div",{style:{display:"none",marginBottom:0},children:e[1]})]}):e[0]},e[0])}))})})]})})}},85862:function(){},2579:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(29439),a=t(1413),i=t(45987),c=t(72791),s=["count","wrapper","className","containerClassName","containerTestId","circle","style"],o=c.createContext({}),l=!0;function u(e){for(var n,t,u,d=e.count,h=void 0===d?1:d,f=e.wrapper,m=e.className,p=e.containerClassName,v=e.containerTestId,g=e.circle,x=void 0!==g&&g,y=e.style,b=(0,i.Z)(e,s),j=c.useContext(o),Z=(0,a.Z)({},b),N=0,w=Object.entries(b);N<w.length;N++){var _=(0,r.Z)(w[N],2),k=_[0];"undefined"===typeof _[1]&&delete Z[k]}var S=(0,a.Z)((0,a.Z)((0,a.Z)({},j),Z),{},{circle:x}),C=(0,a.Z)((0,a.Z)({},y),function(e){var n=e.baseColor,t=e.highlightColor,r=e.width,a=e.height,i=e.borderRadius,c=e.circle,s=e.direction,o=e.duration,u=e.enableAnimation,d=void 0===u?l:u,h={};return"rtl"===s&&(h["--animation-direction"]="reverse"),"number"===typeof o&&(h["--animation-duration"]="".concat(o,"s")),d||(h["--pseudo-element-display"]="none"),"string"!==typeof r&&"number"!==typeof r||(h.width=r),"string"!==typeof a&&"number"!==typeof a||(h.height=a),"string"!==typeof i&&"number"!==typeof i||(h.borderRadius=i),c&&(h.borderRadius="50%"),"undefined"!==typeof n&&(h["--base-color"]=n),"undefined"!==typeof t&&(h["--highlight-color"]=t),h}(S)),F="react-loading-skeleton";m&&(F+=" ".concat(m));for(var A=null!==(n=S.inline)&&void 0!==n&&n,E=[],R=Math.ceil(h),z=0;z<R;z++){var I=C;if(R>h&&z===R-1){var P=null!==(t=I.width)&&void 0!==t?t:"100%",B=h%1,U="number"===typeof P?P*B:"calc(".concat(P," * ").concat(B,")");I=(0,a.Z)((0,a.Z)({},I),{},{width:U})}var D=c.createElement("span",{className:F,style:I,key:z},"\u200c");A?E.push(D):E.push(c.createElement(c.Fragment,{key:z},D,c.createElement("br",null)))}return c.createElement("span",{className:p,"data-testid":v,"aria-live":"polite","aria-busy":null!==(u=S.enableAnimation)&&void 0!==u?u:l},f?E.map((function(e,n){return c.createElement(f,{key:n},e)})):E)}}}]);
//# sourceMappingURL=2518.04b58243.chunk.js.map