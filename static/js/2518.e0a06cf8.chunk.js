"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[2518],{9932:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(74165),a=n(15861),i=n(15671),c=n(43144),o=n(27415),s=n(56856),l=function(){function e(){(0,i.Z)(this,e)}return(0,c.Z)(e,null,[{key:"getCategoriesList",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.Z.get(),e.next=3,o.Z.get("/tenant/".concat(t,"/category-publication"));case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getSearchResultsForPublicationsBasedOnSearchString",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.Z.get(),e.next=3,o.Z.get("/tenant/".concat(a,"/search?filter=").concat(t,"&limit=10&offset=").concat(n,"&validated={true}"));case 3:return i=e.sent,e.abrupt("return",i.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"searchUsingMainCatefories",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n,a){var i,c,l,u,d,h;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=s.Z.get(),e.next=3,o.Z.get("/tenant/".concat(l,"/category-publication?filter[titleFR]=").concat(n));case 3:return u=e.sent,d=null===(i=u.data.rows[0])||void 0===i?void 0:i.publications,h={rows:null!==d&&void 0!==d?d:[],count:null!==(c=null===d||void 0===d?void 0:d.length)&&void 0!==c?c:0},e.abrupt("return",h);case 7:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"getSearchResultsForArchiveBasedOnSearchString",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n,a){var i,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=s.Z.get(),e.next=3,o.Z.get("/tenant/".concat(i,"/publication?filter[descriptionFR]=").concat(t,"&limit=5&offset=").concat(a,"&filter[statut]=archive").concat(n));case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"getArchivePublications",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n,a){var i,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=s.Z.get(),e.next=3,o.Z.get("/tenant/".concat(i,"/publication/search?filter=").concat(t,"&limit=10&offset=").concat(a,"&advanced[statut]=").concat(n.statut,"&advanced[thematique]=").concat(n.thematique,"&advanced[category]=").concat(n.category));case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()}]),e}()},42518:function(e,t,n){n.r(t);var r,a,i=n(30168),c=n(93433),o=n(74165),s=n(15861),l=n(29439),u=n(72791),d=n(27314),h=n(25930),f=n(8765),m=n(91523),p=n(86538),v=n(9932),g=n(2579),x=(n(85862),n(72239)),y=n(80184);t.default=function(e){var t=localStorage.getItem("language"),n=(0,u.useState)(""),r=(0,l.Z)(n,2),a=r[0],i=r[1];(0,u.useEffect)((function(){x.Z.list("","","","").then((function(e){"fr"===t&&i(e.rows[0].publicationDescFR),"ar"===t&&i(e.rows[0].publicationDescAR),"en"===t&&i(e.rows[0].publicationDescFR)}))}),[]);var p=(0,u.useState)(""),j=(0,l.Z)(p,2),w=j[0],N=j[1],_=(0,u.useState)({statut:"archive",thematique:"",category:""}),k=(0,l.Z)(_,2),S=k[0],C=k[1],F=(0,u.useState)([]),A=(0,l.Z)(F,2),R=A[0],E=A[1],z=(0,u.useState)(!0),P=(0,l.Z)(z,2),I=P[0],U=P[1],q={pathname:"/SearchArchive",archiveSearchString:w,archiveFilter:S},B=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.Z.getCategoriesList().then((function(e){U(!0),E((function(t){return t.concat(e)})),U(!1)})).catch((function(e){console.error(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){B()}),[]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(y.Fragment,{children:e.acceuil?null:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(f.Z,{title:(0,h.ag)("common.Archives"),items:[[(0,h.ag)("app.title"),"/"],[(0,h.ag)("common.Archives")]]}),(0,y.jsx)(b,{children:(0,y.jsx)("p",{children:a})})]})}),(0,y.jsx)("div",{className:"app__archieve__page",children:(0,y.jsx)("div",{className:"archeive",children:(0,y.jsx)("div",{className:"archieve__content",children:(0,y.jsxs)("div",{className:"archieve__left",children:[(0,y.jsxs)("div",{className:"left__search",children:[(0,y.jsx)("input",{type:"text",placeholder:(0,h.ag)("common.archiveSearch"),onChange:function(e){N(e.target.value)},value:w}),w.length>=1?(0,y.jsx)(m.rU,{to:q,children:(0,y.jsxs)("div",{className:"button__search",children:[(0,y.jsx)("i",{className:"fa-solid fa-magnifying-glass"}),(0,h.ag)("common.search")]})}):(0,y.jsxs)("div",{className:"button__search",children:[(0,y.jsx)("i",{className:"fa-solid fa-magnifying-glass"}),(0,h.ag)("common.search")]})]}),(0,y.jsx)("div",{className:"mobile__archeiveSearch",children:(0,y.jsxs)("div",{className:"archeiveSearch__form",children:[(0,y.jsx)("input",{type:"text",placeholder:(0,h.ag)("common.archiveSearch")}),(0,y.jsx)("div",{className:"button_search",children:(0,y.jsx)("img",{className:"lazyload",src:d.TF,alt:"Search Archeive ICon",srcSet:""})})]})}),(0,y.jsxs)(Z,{onChange:function(e){C(e.target.value)},children:[!1===I&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(m.rU,{to:q,children:(0,y.jsxs)("label",{className:"filterArchiveContianer",htmlFor:"all",children:[(0,y.jsx)("input",{type:"radio",name:"archiveFilter",value:"autre",id:"all"}),(0,y.jsxs)("div",{className:"contentContainer",children:[(0,y.jsx)("div",{children:(0,y.jsx)("img",{className:"lazyload",src:d.zg,alt:"Etudes Icon"})}),(0,y.jsx)("div",{children:(0,y.jsx)("h4",{children:(0,h.ag)("common.all")})})]})]})}),R.length>=1&&(0,y.jsx)(y.Fragment,{children:R[0].rows.map((function(e){return(0,y.jsx)(m.rU,{to:{pathname:"/SearchArchive",archiveSearchString:w,archiveFilter:{statut:"archive",thematique:"",category:e._id}},children:(0,y.jsxs)("label",{className:"filterArchiveContianer",htmlFor:e._id,children:[(0,y.jsx)("input",{type:"radio",name:"archiveFilter",value:"etude",id:e._id}),(0,y.jsxs)("div",{className:"contentContainer",children:[(0,y.jsx)("div",{children:(0,y.jsx)("img",{className:"lazyload",src:d.zg,alt:"Etudes Icon"})}),(0,y.jsx)("div",{children:"fr"===t?(0,y.jsx)("h4",{children:e.titleFR}):"ar"===t?(0,y.jsx)("h4",{children:e.titleAR}):(0,y.jsx)("h4",{children:e.titleEN})})]})]},e._id)})}))})]}),!0===I&&(0,y.jsx)(y.Fragment,{children:(0,c.Z)(Array(5)).map((function(e,t){return(0,y.jsx)(g.Z,{height:172,width:275},t)}))})]})]})})})})]})};var Z=p.ZP.div(r||(r=(0,i.Z)(['\n  width: 100%;\n  margin-top: 1.5rem;\n  display: grid;\n  grid-gap: 1rem;\n  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));\n\n  .contentContainer {\n    width: 275px;\n    height: 172px;\n    background-color: #fff;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    img {\n      margin-bottom: 2rem;\n    }\n\n    &:hover {\n      cursor: pointer;\n      background-color: #f7f7f7;\n    }\n  }\n  .resultContainer {\n    width: 275px;\n    height: 172px;\n    background-color: #fff;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    img {\n      margin-bottom: 2rem;\n    }\n\n    &:hover {\n      cursor: pointer;\n      background-color: #f7f7f7;\n    }\n  }\n  input[type="radio"] {\n    display: none;\n\n    &:checked ~ .contentContainer {\n      border: 1px solid #e1011a;\n      h4 {\n        color: #e1011a;\n      }\n    }\n  }\n']))),b=p.ZP.div(a||(a=(0,i.Z)(["\n  color: var(--violet);\n  font-size: 1rem;\n  font-weight: 400;\n  text-align: start;\n  margin: 28px 210px 10px 210px;\n"])))},8765:function(e,t,n){var r,a=n(30168),i=(n(72791),n(91523)),c=n(86538),o=n(80184),s=c.ZP.div(r||(r=(0,a.Z)(['\n\tmargin: 28px 0 10px 0;\n\t.breadcrumb {\n\t\twidth: 100%;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tbackground-color: transparent;\n\t}\n\tol {\n\t\tdisplay: flex;\n\t}\n\tli {\n\t\tfont-family: "Proxima Nova";\n\t\tfont-style: normal;\n\t\tfont-weight: 400;\n\t\tfont-size: 14px;\n\t\tline-height: 25px;\n\t}\n\t.breadcrump__nav {\n\t\tmargin: auto;\n\t\tleft: 0;\n\t\tdisplay: flex;\n\t\tmax-width: 1170px;\n\t\tflex-direction: column;\n\t}\n\n\t.breadcrumb-item:not(.active) a {\n\t\tcolor: rgba(0, 0, 0, 0.45);\n\t}\n\n\th2 {\n\t\tfont-family: "Bebas Neue Pro";\n\t\tfont-style: normal;\n\t\tfont-weight: 700;\n\t\tfont-size: 47px;\n\t\tline-height: 39px;\n\t}\n'])));t.Z=function(e){var t=function(e){return e.length>1};return(0,o.jsx)(s,{children:(0,o.jsxs)("div",{className:"breadcrump__nav",children:[(0,o.jsx)("div",{children:(0,o.jsx)("h2",{children:e.title})}),(0,o.jsx)("div",{children:(0,o.jsx)("ol",{className:"breadcrumb",children:e.items.map((function(n,r){return(0,o.jsx)("li",{className:"breadcrumb-item ".concat(e.items.length-1===r?"active":""),children:t(n)?(0,o.jsxs)(i.rU,{to:n[1],children:[" ",n[0]," ",n[1]]}):n[0]},n[0])}))})})]})})}},85862:function(){},2579:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(29439),a=n(1413),i=n(45987),c=n(72791),o=["count","wrapper","className","containerClassName","containerTestId","circle","style"],s=c.createContext({});function l(e){for(var t,n,l,u=e.count,d=void 0===u?1:u,h=e.wrapper,f=e.className,m=e.containerClassName,p=e.containerTestId,v=e.circle,g=void 0!==v&&v,x=e.style,y=(0,i.Z)(e,o),Z=c.useContext(s),b=(0,a.Z)({},y),j=0,w=Object.entries(y);j<w.length;j++){var N=(0,r.Z)(w[j],2),_=N[0];"undefined"===typeof N[1]&&delete b[_]}var k=(0,a.Z)((0,a.Z)((0,a.Z)({},Z),b),{},{circle:g}),S=(0,a.Z)((0,a.Z)({},x),function(e){var t=e.baseColor,n=e.highlightColor,r=e.width,a=e.height,i=e.borderRadius,c=e.circle,o=e.direction,s=e.duration,l=e.enableAnimation,u=void 0===l||l,d={};return"rtl"===o&&(d["--animation-direction"]="reverse"),"number"===typeof s&&(d["--animation-duration"]="".concat(s,"s")),u||(d["--pseudo-element-display"]="none"),"string"!==typeof r&&"number"!==typeof r||(d.width=r),"string"!==typeof a&&"number"!==typeof a||(d.height=a),"string"!==typeof i&&"number"!==typeof i||(d.borderRadius=i),c&&(d.borderRadius="50%"),"undefined"!==typeof t&&(d["--base-color"]=t),"undefined"!==typeof n&&(d["--highlight-color"]=n),d}(k)),C="react-loading-skeleton";f&&(C+=" ".concat(f));for(var F=null!==(t=k.inline)&&void 0!==t&&t,A=[],R=Math.ceil(d),E=0;E<R;E++){var z=S;if(R>d&&E===R-1){var P=null!==(n=z.width)&&void 0!==n?n:"100%",I=d%1,U="number"===typeof P?P*I:"calc(".concat(P," * ").concat(I,")");z=(0,a.Z)((0,a.Z)({},z),{},{width:U})}var q=c.createElement("span",{className:C,style:z,key:E},"\u200c");F?A.push(q):A.push(c.createElement(c.Fragment,{key:E},q,c.createElement("br",null)))}return c.createElement("span",{className:m,"data-testid":p,"aria-live":"polite","aria-busy":null===(l=k.enableAnimation)||void 0===l||l},h?A.map((function(e,t){return c.createElement(h,{key:t},e)})):A)}}}]);
//# sourceMappingURL=2518.e0a06cf8.chunk.js.map