"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[3428],{64814:function(n,t,e){e.d(t,{Z:function(){return l}});var r=e(74165),a=e(15861),i=e(15671),o=e(43144),s=e(27415),c=e(56856),l=function(){function n(){(0,i.Z)(this,n)}return(0,o.Z)(n,null,[{key:"getGloassaireCategories",value:function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var t,e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.Z.get(),n.next=3,s.Z.get("/tenant/".concat(t,"/category-glossaire"),{});case 3:return e=n.sent,n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},{key:"getGloassaireList",value:function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var t,e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.Z.get(),n.next=3,s.Z.get("/tenant/".concat(t,"/glossaire"),{});case 3:return e=n.sent,n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},{key:"getOneGloassaire",value:function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=c.Z.get(),n.next=3,s.Z.get("/tenant/".concat(e,"/glossaire/").concat(t));case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},{key:"getGloassaireById",value:function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=c.Z.get(),n.next=3,s.Z.get("/tenant/".concat(e,"/glossaire/").concat(t),{});case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}]),n}()},93428:function(n,t,e){e.r(t),e.d(t,{default:function(){return I}});var r,a=e(30168),i=e(29439),o=e(72791),s=e(86538),c=e(64814),l=e(8765),d=e(72239),u=e(25930),m=e(80184);function f(){var n=(0,o.useState)(),t=(0,i.Z)(n,2),e=t[0],r=t[1],a=localStorage.getItem("language");return(0,o.useEffect)((function(){d.Z.list("","","","").then((function(n){"fr"===a&&r(n.rows[0].glossaireDescFR),"ar"===a&&r(n.rows[0].glossaireDescAR),"en"===a&&r(n.rows[0].glossaireDescEN)}))}),[]),(0,m.jsxs)("div",{children:[(0,m.jsx)(l.Z,{title:(0,u.ag)("menu.Glossaire"),items:[[(0,u.ag)("app.title"),"/"],[(0,u.ag)("menu.Glossaire")]]}),(0,m.jsx)(p,{children:(0,m.jsx)("p",{children:e})})]})}var g,h,p=s.ZP.section(r||(r=(0,a.Z)(["\n  color: var(--violet);\n  font-size: 1rem;\n  font-weight: 400;\n  margin: 1rem 0;\n  text-align: justify;\n"]))),x=s.ZP.section(g||(g=(0,a.Z)(['\n  max-width: 1170px;\n  margin: 2rem 0;\n  font-size: 1rem;\n  background-color: #F1F1F1;\n  \n\n  .tabsHeader{\n    border-bottom: 1px solid #A3A3A9;\n\n    button{\n      padding: 1rem;\n      font-size: 1rem;\n      color: var(--gray3);\n      position: relative;\n    }\n    .active{\n      color: var(--violet);\n\n      &::after{\n        content: "";\n        display: block;\n        width: 70%;\n        height: 2px;\n        position: absolute;\n        left: 50%;\n        bottom: -2px;\n        transform: translateX(-50%);\n        background-color: red;\n        transition: .2s ease-in-out;\n      }\n    }\n  }\n\n  .tabContent{\n    padding: 1rem;\n    font-size: 1.4rem;\n    color: var(--violet);\n\n    .letterLinkFilter{\n      display: inline-block;\n      padding: .2rem .2rem;\n      font-weight: 700;\n      cursor: pointer;\n\n      &:hover{\n        color: red;\n      }\n    }\n\n    .categoryLink{\n      font-size: 1rem;\n      text-transform: uppercase;\n      cursor: pointer;\n      color: var(--violet);\n      background-color: #fff;\n      padding: .3rem .5rem;\n      margin: 0 .3rem;\n\n      &:hover{\n        color: red;\n      }\n    }\n  }\n']))),v=e(35667),j=e(16856);function Z(){return(0,m.jsxs)(y,{children:[(0,m.jsx)(j.i7Z,{className:"icon loadingIcon"}),(0,m.jsx)("span",{children:"Chargement des donn\xe9es"})]})}var b,y=s.ZP.div(h||(h=(0,a.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    .icon{\n        font-size: 2rem;\n        color: var(--violet);\n    }\n\n    .loadingIcon{\n        animation: spin infinite 2s ease-in-out;\n    }\n\n    span{\n        margin-top: 1rem;\n    }\n\n    @keyframes spin {\n        from {transform:rotate(0deg);}\n        to {transform:rotate(360deg);}\n    }\n"]))),N=e(85880);function k(){return(0,m.jsxs)(R,{children:[(0,m.jsx)(N.YBZ,{className:"icon"}),(0,m.jsx)("span",{children:"Aucune donn\xe9e disponible"})]})}var w,R=s.ZP.div(b||(b=(0,a.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    .icon{\n        font-size: 2rem;\n        color: var(--violet);\n    }\n\n    .loadingIcon{\n        animation: spin infinite 2s ease-in-out;\n    }\n\n    span{\n        margin-top: 1rem;\n    }\n"])));function F(n){var t=n.setGroupByCategory,e=(0,o.useState)(!0),r=(0,i.Z)(e,2),a=r[0],s=r[1],l=function(n){s((function(n){return!n})),t(!1),a&&(E(!0),t(!0))},d=localStorage.getItem("language"),f=(0,o.useState)([]),g=(0,i.Z)(f,2),h=g[0],p=g[1],j=(0,o.useState)(!0),b=(0,i.Z)(j,2),y=b[0],N=b[1],w=(0,o.useState)(!1),R=(0,i.Z)(w,2),F=R[0],E=R[1];return(0,o.useEffect)((function(){F&&c.Z.getGloassaireCategories().then((function(n){p(n.rows),N(!1)}))}),[F]),(0,m.jsx)("div",{children:(0,m.jsxs)(x,{children:[(0,m.jsxs)("div",{className:"tabsHeader",children:[(0,m.jsx)("button",{className:a?"active":"",onClick:l,children:(0,u.ag)("common.lettre")}),(0,m.jsx)("button",{className:a?"":"active",onClick:l,children:(0,u.ag)("common.category")})]}),(0,m.jsxs)("div",{className:"tabContent",children:["ar"===d?(0,m.jsx)(m.Fragment,{children:a&&(0,m.jsx)("div",{className:"tab letterTab",children:["\u0623","\u0628","\u062a","\u062b","\u062c","\u062d","\u062e","\u062f","\u0630","\u0631","\u0632","\u0633","\u0634","\u0635","\u0636","\u0637","\u0638","\u0639","\u063a","\u0641","\u0642","\u0643","\u0644","\u0645","\u0646","\u0647","\u0648","\u064a"].map((function(n){return(0,m.jsx)(v.rU,{to:n,smooth:!0,duration:300,className:"letterLinkFilter",children:n},n)}))})}):(0,m.jsx)(m.Fragment,{children:a&&(0,m.jsx)("div",{className:"tab letterTab",children:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"].map((function(n){return(0,m.jsx)(v.rU,{to:n,smooth:!0,duration:300,className:"letterLinkFilter",children:n.toUpperCase()},n)}))})}),!a&&(0,m.jsx)("div",{className:"tab categoryTab",children:y?(0,m.jsx)(Z,{}):(0,m.jsx)("div",{children:h.length?(0,m.jsx)("section",{style:{display:"grid"},children:h.map((function(n){return(0,m.jsx)(v.rU,{to:"fr"===d?n.titleFR:"ar"===d?n.titleAR:n.titleEN,smooth:!0,duration:300,className:"categoryLink",children:"fr"===d?n.titleFR:"ar"===d?n.titleAR:n.titleEN},n.id)}))}):(0,m.jsx)(k,{})})})]})]})})}var E,A=s.ZP.section(w||(w=(0,a.Z)(["\n  width: 100%;\n  padding: 1rem 0;\n\n  .sectionHeader {\n    span {\n      color: var(--violet);\n      font-size: 2rem;\n      font-weight: 700;\n\n            &:after{\n                content: '';\n                display: block;\n                width: 100%;\n                height: 1px;\n                background-color: red;\n                margin: 1rem 0;\n            }\n        }\n    }\n  }\n\n  .sectionBody {\n    .glossaireLink {\n      display: block;\n      width: auto;\n      height: 30px;\n      padding: 0.4rem 0;\n      margin: 1rem 0;\n\n      text-align: left;\n      font-weight: 600;\n      font-size: 1rem;\n\n      background-color: transparent;\n      border: none;\n      color: var(--violet);\n\n      &:hover {\n        color: red;\n        border-bottom: 1px solid red;\n      }\n    }\n  }\n"]))),S=e(763),C=e.n(S),G=e(91523),z=e(4994),L=e(37598);function P(n){var t=n.data,e=n.criteria,r=function(n){return C().capitalize(null===n||void 0===n?void 0:n.substring(0,1))},a=[],s=localStorage.getItem("language");"letter"===e&&("fr"===s?(t.forEach((function(n){a.push({letter:r(n.nomFR),data:n})})),a=L(z(a,"letter"),"letter")):"en"===s&&(t.forEach((function(n){a.push({letter:r(n.nomEN),data:n})})),a=L(z(a,"letter"),"letter")),"ar"===s&&(t.forEach((function(n){a.push({letter:r(n.nomAR),data:n})})),a=L(z(a,"letter"),"letter")));var c=Object.keys(a),l=Object.keys(t),d=(0,o.useState)(!1),u=(0,i.Z)(d,2),f=(u[0],u[1]),g=(0,o.useState)([{nomFR:"",nomAR:"",nomEN:"",definitionFR:"",definitionAR:"",definitionEN:"",categorie:{titleFR:"",titleAR:"",titleEN:""}}]),h=(0,i.Z)(g,2),p=(h[0],h[1]),x=(0,o.useState)([{data:{nomFR:"",nomAR:"",nomEN:"",definitionFR:"",definitionAR:"",definitionEN:"",categorie:{titleFR:"",titleAR:"",titleEN:""}}}]),v=(0,i.Z)(x,2),j=(v[0],v[1]);return(0,m.jsx)("div",{children:(0,m.jsxs)("section",{className:"listOfEntries",children:["category"===e&&(0,m.jsx)("div",{children:l.map((function(n){var e=t[n];return(0,m.jsxs)(A,{id:n,children:[(0,m.jsx)("div",{className:"sectionHeader",children:(0,m.jsx)("span",{children:n})}),(0,m.jsx)("section",{className:"sectionBody",children:e.map((function(n){return(0,m.jsx)(G.rU,{to:"/Glossaire/"+n._id,children:(0,m.jsx)("section",{children:(0,m.jsx)("button",{className:"glossaireLink",onClick:function(){},children:"fr"===s?n.nomFR:"ar"===s?n.nomAR:n.nomEN})},n.id)})}))})]},n)}))}),"category"!==e&&(0,m.jsx)("div",{children:c.map((function(n){var r=a[n];return(0,m.jsxs)(A,{id:n,children:[(0,m.jsx)("div",{className:"sectionHeader",children:(0,m.jsx)("span",{children:n})}),(0,m.jsx)("section",{className:"sectionBody",children:r.map((function(r){return(0,m.jsx)(G.rU,{to:"/Glossaire/"+r.data._id,children:(0,m.jsx)("section",{children:(0,m.jsx)("button",{className:"glossaireLink",onClick:function(){return function(n,r){if(f(!0),"category"===e){var i=t[n].filter((function(n){return n.id===r}));i.length>0&&p(i)}else{var o=a[n].filter((function(n){return n.data._id===r}));o.length>0&&j(o)}}(n,r.data.id)},children:"fr"===s?r.data.nomFR:"ar"===s?r.data.nomAR:r.data.nomEN})},r.data.id)})}))})]},n)}))})]})})}var B=e(37598);var I=function(){var n=(0,o.useState)([]),t=(0,i.Z)(n,2),e=t[0],r=t[1],a=(0,o.useState)(!0),s=(0,i.Z)(a,2),l=s[0],d=s[1],u=localStorage.getItem("language");(0,o.useEffect)((function(){c.Z.getGloassaireList().then((function(n){r(n.rows),d(!1)}))}),[]);var g=(0,o.useState)(!1),h=(0,i.Z)(g,2),p=h[0],x=h[1];return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(_,{children:[(0,m.jsx)(f,{}),(0,m.jsx)(F,{setGroupByCategory:x}),l?(0,m.jsx)(Z,{}):(0,m.jsx)("section",{children:e.length?(0,m.jsx)(m.Fragment,{children:p?(0,m.jsx)(P,{data:B(e,"fr"===u?"categorie.titleFR":"ar"===u?"categorie.titleAR":"categorie.titleEN"),criteria:"category"}):(0,m.jsx)(P,{data:e,criteria:"letter"})}):(0,m.jsx)(k,{})})]})})},_=s.ZP.section(E||(E=(0,a.Z)(['\n\tmax-width: 1170px;\n\tmargin: 2rem auto;\n\n\tfont-family: "Proxima Nova";\n\tfont-style: normal;\n\n\t@media screen and (max-width: 1071px) {\n\t\tpadding: 0 10px;\n\t\tmargin: 160px auto 0 auto;\n\t}\n'])))},8765:function(n,t,e){var r,a=e(30168),i=(e(72791),e(91523)),o=e(86538),s=e(80184),c=o.ZP.div(r||(r=(0,a.Z)(['\n\tmargin: 28px 0 10px 0;\n\t.breadcrumb {\n\t\twidth: 100%;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tbackground-color: transparent;\n\t}\n\tol {\n\t\tdisplay: flex;\n\t}\n\tli {\n\t\tfont-family: "Proxima Nova";\n\t\tfont-style: normal;\n\t\tfont-weight: 400;\n\t\tfont-size: 14px;\n\t\tline-height: 25px;\n\t}\n\t.breadcrump__nav {\n\t\tmargin: auto;\n\t\tleft: 0;\n\t\tdisplay: flex;\n\t\tmax-width: 1170px;\n\t\tflex-direction: column;\n\t}\n\n\t.breadcrumb-item:not(.active) a {\n\t\tcolor: rgba(0, 0, 0, 0.45);\n\t}\n\n\th2 {\n\t\tfont-family: "Bebas Neue Pro";\n\t\tfont-style: normal;\n\t\tfont-weight: 700;\n\t\tfont-size: 47px;\n\t\tline-height: 39px;\n\t}\n'])));t.Z=function(n){var t=function(n){return n.length>1};return(0,s.jsx)(c,{children:(0,s.jsxs)("div",{className:"breadcrump__nav",children:[(0,s.jsx)("div",{children:(0,s.jsx)("h2",{children:n.title})}),(0,s.jsx)("div",{children:(0,s.jsx)("ol",{className:"breadcrumb",children:n.items.map((function(e,r){return(0,s.jsx)("li",{className:"breadcrumb-item ".concat(n.items.length-1===r?"active":""),children:t(e)?(0,s.jsxs)(i.rU,{to:e[1],children:[" ",e[0]," ",e[1]]}):e[0]},e[0])}))})})]})})}}}]);
//# sourceMappingURL=3428.f6ba3295.chunk.js.map