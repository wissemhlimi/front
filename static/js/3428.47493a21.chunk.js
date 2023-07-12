"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[3428],{64814:function(n,e,t){t.d(e,{Z:function(){return l}});var r=t(74165),a=t(15861),i=t(15671),s=t(43144),o=t(27415),c=t(56856),l=function(){function n(){(0,i.Z)(this,n)}return(0,s.Z)(n,null,[{key:"getGloassaireCategories",value:function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var e,t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=c.Z.get(),n.next=3,o.Z.get("/tenant/".concat(e,"/category-glossaire"),{});case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},{key:"getGloassaireList",value:function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var e,t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=c.Z.get(),n.next=3,o.Z.get("/tenant/".concat(e,"/glossaire"),{});case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},{key:"search",value:function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={filter:e},a=c.Z.get(),n.next=4,o.Z.get("/tenant/".concat(a,"/glossaire/search"),{params:t});case 4:return i=n.sent,n.abrupt("return",i.data);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},{key:"getOneGloassaire",value:function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.Z.get(),n.next=3,o.Z.get("/tenant/".concat(t,"/glossaire/").concat(e));case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},{key:"getGloassaireById",value:function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.Z.get(),n.next=3,o.Z.get("/tenant/".concat(t,"/glossaire/").concat(e),{});case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}]),n}()},93428:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,a=t(30168),i=t(29439),s=t(72791),o=t(86538),c=t(64814),l=t(8765),d=t(72239),u=t(25930),m=t(80184);function f(){var n=(0,s.useState)(),e=(0,i.Z)(n,2),t=e[0],r=e[1],a=localStorage.getItem("language");return(0,s.useEffect)((function(){d.Z.list("","","","").then((function(n){n.count>0&&("fr"===a&&r(n.rows[0].glossaireDescFR),"ar"===a&&r(n.rows[0].glossaireDescAR),"en"===a&&r(n.rows[0].glossaireDescEN))}))}),[]),(0,m.jsxs)("div",{children:[(0,m.jsx)(l.Z,{title:(0,u.ag)("menu.Glossaire"),items:[[(0,u.ag)("app.title"),"/"],[(0,u.ag)("menu.Glossaire"),"/Glossaire"]]}),(0,m.jsx)(x,{children:(0,m.jsx)("p",{children:t})})]})}var h,g,x=o.ZP.section(r||(r=(0,a.Z)(["\n  color: var(--violet);\n  font-size: 1rem;\n  font-weight: 400;\n  margin: 1rem 0;\n  text-align: justify;\n"]))),p=o.ZP.section(h||(h=(0,a.Z)(['\n  max-width: 1170px;\n  margin: 2rem 0;\n  font-size: 1rem;\n  background-color: #F1F1F1;\n  \n\n  .tabsHeader{\n    border-bottom: 1px solid #A3A3A9;\n\n    button{\n      padding: 1rem;\n      font-size: 1rem;\n      color: var(--gray3);\n      position: relative;\n    }\n    .active{\n      color: var(--violet);\n\n      &::after{\n        content: "";\n        display: block;\n        width: 70%;\n        height: 2px;\n        position: absolute;\n        left: 50%;\n        bottom: -2px;\n        transform: translateX(-50%);\n        background-color: red;\n        transition: .2s ease-in-out;\n      }\n    }\n  }\n\n  .tabContent{\n    padding: 1rem;\n    font-size: 1.4rem;\n    color: var(--violet);\n\n    .letterLinkFilter{\n      display: inline-block;\n      padding: .2rem .2rem;\n      font-weight: 700;\n      cursor: pointer;\n\n      &:hover{\n        color: red;\n      }\n    }\n\n    .categoryLink{\n      font-size: 1rem;\n      text-transform: uppercase;\n      cursor: pointer;\n      color: var(--violet);\n      background-color: #fff;\n      padding: .3rem .5rem;\n      margin: 0 .3rem;\n\n      &:hover{\n        color: red;\n      }\n    }\n  }\n']))),v=t(35667),j=t(16856);function Z(){return(0,m.jsxs)(y,{children:[(0,m.jsx)(j.i7Z,{className:"icon loadingIcon"}),(0,m.jsx)("span",{children:"Chargement des donn\xe9es"})]})}var b,y=o.ZP.div(g||(g=(0,a.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    .icon{\n        font-size: 2rem;\n        color: var(--violet);\n    }\n\n    .loadingIcon{\n        animation: spin infinite 2s ease-in-out;\n    }\n\n    span{\n        margin-top: 1rem;\n    }\n\n    @keyframes spin {\n        from {transform:rotate(0deg);}\n        to {transform:rotate(360deg);}\n    }\n"]))),N=t(85880);function k(){return(0,m.jsxs)(R,{children:[(0,m.jsx)(N.YBZ,{className:"icon"}),(0,m.jsx)("span",{children:"Aucune donn\xe9e disponible"})]})}var w,R=o.ZP.div(b||(b=(0,a.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    .icon{\n        font-size: 2rem;\n        color: var(--violet);\n    }\n\n    .loadingIcon{\n        animation: spin infinite 2s ease-in-out;\n    }\n\n    span{\n        margin-top: 1rem;\n    }\n"])));function F(n){var e=n.setGroupByCategory,t=(0,s.useState)(!0),r=(0,i.Z)(t,2),a=r[0],o=r[1],l=function(n){o((function(n){return!n})),e(!1),a&&(_(!0),e(!0))},d=localStorage.getItem("language"),f=(0,s.useState)([]),h=(0,i.Z)(f,2),g=h[0],x=h[1],j=(0,s.useState)(!0),b=(0,i.Z)(j,2),y=b[0],N=b[1],w=(0,s.useState)(!1),R=(0,i.Z)(w,2),F=R[0],_=R[1];return(0,s.useEffect)((function(){F&&c.Z.getGloassaireCategories().then((function(n){x(n.rows),N(!1)}))}),[F]),(0,m.jsx)("div",{children:(0,m.jsxs)(p,{children:[(0,m.jsxs)("div",{className:"tabsHeader",children:[(0,m.jsx)("button",{className:a?"active":"",onClick:l,children:(0,u.ag)("common.lettre")}),(0,m.jsx)("button",{className:a?"":"active",onClick:l,children:(0,u.ag)("common.category")})]}),(0,m.jsxs)("div",{className:"tabContent",children:["ar"===d?(0,m.jsx)(m.Fragment,{children:a&&(0,m.jsx)("div",{className:"tab letterTab",children:["\u0623","\u0628","\u062a","\u062b","\u062c","\u062d","\u062e","\u062f","\u0630","\u0631","\u0632","\u0633","\u0634","\u0635","\u0636","\u0637","\u0638","\u0639","\u063a","\u0641","\u0642","\u0643","\u0644","\u0645","\u0646","\u0647","\u0648","\u064a"].map((function(n){return(0,m.jsx)(v.rU,{to:n,smooth:!0,duration:300,className:"letterLinkFilter",children:n},n)}))})}):(0,m.jsx)(m.Fragment,{children:a&&(0,m.jsx)("div",{className:"tab letterTab",children:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"].map((function(n){return(0,m.jsx)(v.rU,{to:n,smooth:!0,duration:300,className:"letterLinkFilter",children:n.toUpperCase()},n)}))})}),!a&&(0,m.jsx)("div",{className:"tab categoryTab",children:y?(0,m.jsx)(Z,{}):(0,m.jsx)("div",{children:g.length?(0,m.jsx)("section",{style:{display:"grid"},children:g.map((function(n){return(0,m.jsx)(v.rU,{to:"fr"===d?n.titleFR:"ar"===d?n.titleAR:n.titleEN,smooth:!0,duration:300,className:"categoryLink",children:"fr"===d?n.titleFR:"ar"===d?n.titleAR:n.titleEN},n.id)}))}):(0,m.jsx)(k,{})})})]})]})})}var _=o.ZP.section(w||(w=(0,a.Z)(["\n  width: 100%;\n  padding: 1rem 0;\n\n  .sectionHeader {\n    span {\n      color: var(--violet);\n      font-size: 2rem;\n      font-weight: 700;\n\n            &:after{\n                content: '';\n                display: block;\n                width: 100%;\n                height: 1px;\n                background-color: red;\n                margin: 1rem 0;\n            }\n        }\n    }\n  }\n\n  .sectionBody {\n    .glossaireLink {\n      display: block;\n      width: auto;\n      height: 30px;\n      padding: 0.4rem 0;\n      margin: 1rem 0;\n\n      text-align: left;\n      font-weight: 600;\n      font-size: 1rem;\n\n      background-color: transparent;\n      border: none;\n      color: var(--violet);\n\n      &:hover {\n        color: red;\n        border-bottom: 1px solid red;\n      }\n    }\n  }\n"]))),E=t(763),S=t.n(E),C=t(91523),A=t(4994),G=t(37598);function z(n){var e=n.data,t=n.criteria,r=function(n){return S().capitalize(null===n||void 0===n?void 0:n.substring(0,1))},a=[],o=localStorage.getItem("language");"letter"===t&&("fr"===o?(e.forEach((function(n){a.push({letter:r(n.nomFR),data:n})})),a=G(A(a,"letter"),"letter")):"en"===o&&(e.forEach((function(n){a.push({letter:r(n.nomEN),data:n})})),a=G(A(a,"letter"),"letter")),"ar"===o&&(e.forEach((function(n){a.push({letter:r(n.nomAR),data:n})})),a=G(A(a,"letter"),"letter")));var c=Object.keys(a),l=Object.keys(e),d=(0,s.useState)(!1),u=(0,i.Z)(d,2),f=(u[0],u[1]),h=(0,s.useState)([{nomFR:"",nomAR:"",nomEN:"",definitionFR:"",definitionAR:"",definitionEN:"",categorie:{titleFR:"",titleAR:"",titleEN:""}}]),g=(0,i.Z)(h,2),x=(g[0],g[1]),p=(0,s.useState)([{data:{nomFR:"",nomAR:"",nomEN:"",definitionFR:"",definitionAR:"",definitionEN:"",categorie:{titleFR:"",titleAR:"",titleEN:""}}}]),v=(0,i.Z)(p,2),j=(v[0],v[1]);return(0,m.jsx)("div",{children:(0,m.jsxs)("section",{className:"listOfEntries",children:["category"===t&&(0,m.jsx)("div",{children:l.map((function(n){var t=e[n];return(0,m.jsxs)(_,{id:n,children:[(0,m.jsx)("div",{className:"sectionHeader",children:(0,m.jsx)("span",{children:n})}),(0,m.jsx)("section",{className:"sectionBody",children:t.map((function(n){return(0,m.jsx)(C.rU,{to:"/Glossaire/"+n._id,children:(0,m.jsx)("section",{children:(0,m.jsx)("button",{className:"glossaireLink",onClick:function(){},children:"fr"===o?n.nomFR:"ar"===o?n.nomAR:n.nomEN})},n.id)})}))})]},n)}))}),"category"!==t&&(0,m.jsx)("div",{children:c.map((function(n){var r=a[n];return(0,m.jsxs)(_,{id:n,children:[(0,m.jsx)("div",{className:"sectionHeader",children:(0,m.jsx)("span",{children:n})}),(0,m.jsx)("section",{className:"sectionBody",children:r.map((function(r){return(0,m.jsx)(C.rU,{to:"/Glossaire/"+r.data._id,children:(0,m.jsx)("section",{children:(0,m.jsx)("button",{className:"glossaireLink",onClick:function(){return function(n,r){if(f(!0),"category"===t){var i=e[n].filter((function(n){return n.id===r}));i.length>0&&x(i)}else{var s=a[n].filter((function(n){return n.data._id===r}));s.length>0&&j(s)}}(n,r.data.id)},children:"fr"===o?r.data.nomFR:"ar"===o?r.data.nomAR:r.data.nomEN})},r.data.id)})}))})]},n)}))})]})})}var L,P=t(26118),B=t(86419),I=t(37598);var U=function(){var n=(0,s.useState)([]),e=(0,i.Z)(n,2),t=e[0],r=e[1],a=(0,s.useState)(!0),o=(0,i.Z)(a,2),l=o[0],d=o[1],h=localStorage.getItem("language");(0,s.useEffect)((function(){c.Z.getGloassaireList().then((function(n){r(n.rows),d(!1)}))}),[]);var g=(0,s.useState)(!1),x=(0,i.Z)(g,2),p=x[0],v=x[1],j=(0,s.useState)(""),b=(0,i.Z)(j,2),y=b[0],N=b[1];return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(H,{children:[(0,m.jsx)(f,{}),(0,m.jsxs)("div",{className:"archieve__left",children:[(0,m.jsxs)("div",{className:"left__search",children:[(0,m.jsx)("input",{style:{backgroundColor:"#f1f1f1"},type:"text",placeholder:(0,u.ag)("common.search"),onChange:function(n){N(n.target.value)},value:y}),y.length>=1?(0,m.jsx)(P.Z,{onClick:function(){var n;n=y,c.Z.search(n).then((function(n){r(n.rows),d(!1)}))},children:(0,m.jsxs)("div",{className:"button__search",children:[(0,m.jsx)("i",{className:"fa-solid fa-magnifying-glass"}),(0,u.ag)("common.search")]})}):(0,m.jsxs)("div",{className:"button__search",children:[(0,m.jsx)("i",{className:"fa-solid fa-magnifying-glass"}),(0,u.ag)("common.search")]})]}),(0,m.jsx)("div",{className:"mobile__archeiveSearch",children:(0,m.jsxs)("div",{className:"archeiveSearch__form",children:[(0,m.jsx)("input",{type:"text",placeholder:(0,u.ag)("common.search")}),(0,m.jsx)("div",{className:"button_search",children:(0,m.jsx)("img",{className:"lazyload",src:B.TF,alt:"Search Archeive ICon",srcSet:""})})]})})]}),(0,m.jsx)(F,{setGroupByCategory:v}),l?(0,m.jsx)(Z,{}):(0,m.jsx)("section",{children:t.length?(0,m.jsx)(m.Fragment,{children:p?(0,m.jsx)(z,{data:I(t,"fr"===h?"categorie.titleFR":"ar"===h?"categorie.titleAR":"categorie.titleEN"),criteria:"category"}):(0,m.jsx)(z,{data:t,criteria:"letter"})}):(0,m.jsx)(k,{})})]})})},H=o.ZP.section(L||(L=(0,a.Z)(['\n  max-width: 1170px;\n  margin: 2rem auto;\n\n  font-family: "Proxima Nova";\n  font-style: normal;\n\n  @media screen and (max-width: 1071px) {\n    padding: 0 10px;\n    margin: 160px auto 0 auto;\n  }\n'])))},8765:function(n,e,t){var r,a=t(30168),i=(t(72791),t(91523)),s=t(86538),o=t(80184),c=s.ZP.div(r||(r=(0,a.Z)(['\n  margin: 28px 0 10px 0;\n  .breadcrumb {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    background-color: transparent;\n  }\n  ol {\n    display: flex;\n  }\n  li {\n    font-family: "Proxima Nova";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 25px;\n  }\n  .breadcrump__nav {\n    margin: auto;\n    left: 0;\n    display: flex;\n    max-width: 1170px;\n    flex-direction: column;\n  }\n\n  .breadcrumb-item:not(.active) a {\n    color: rgba(0, 0, 0, 0.45);\n  }\n\n  h2 {\n    font-family: "Bebas Neue Pro";\n    font-style: normal;\n    font-weight: 700;\n    font-size: 47px;\n    line-height: 39px;\n  }\n'])));e.Z=function(n){var e=function(n){return n.length>1};return(0,o.jsx)(c,{children:(0,o.jsxs)("div",{className:"breadcrump__nav",children:[(0,o.jsx)("div",{children:(0,o.jsx)("h2",{className:"h2",children:n.title})}),(0,o.jsx)("div",{children:(0,o.jsx)("ol",{className:"breadcrumb",children:n.items.map((function(n,t){return(0,o.jsx)("li",{className:"breadcrumb-item liClass",children:e(n)?(0,o.jsxs)(i.rU,{to:n[1],children:[" ",n[0],"/"===n[1]?(0,o.jsx)(o.Fragment,{children:n[1]}):(0,o.jsx)("div",{style:{display:"none",marginBottom:0},children:n[1]})]}):n[0]},n[0])}))})})]})})}}}]);
//# sourceMappingURL=3428.47493a21.chunk.js.map