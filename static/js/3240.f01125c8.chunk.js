"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[3240,9540],{54065:function(n,e,t){t.d(e,{Z:function(){return u}});var i=t(74165),a=t(15861),r=t(15671),o=t(43144),c=t(27415),s=t(56856),l=t(72426),d=t.n(l),u=function(){function n(){(0,r.Z)(this,n)}return(0,o.Z)(n,null,[{key:"getLatestMediatheques",value:function(){var n=(0,a.Z)((0,i.Z)().mark((function n(){var e,t;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=s.Z.get(),n.next=3,c.Z.get("/tenant/".concat(e,"/mediatique/"));case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},{key:"getMediathequesBasedOnType",value:function(){var n=(0,a.Z)((0,i.Z)().mark((function n(e){var t,a;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=s.Z.get(),n.next=3,c.Z.get("/tenant/".concat(t,"/mediatique/").concat(e));case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},{key:"getOneMediatheque",value:function(){var n=(0,a.Z)((0,i.Z)().mark((function n(e){var t,a;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=s.Z.get(),n.next=3,c.Z.get("/tenant/".concat(t,"/mediatique/").concat(e));case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},{key:"pipeDate",value:function(n){return d()(n).format("DD-MM-YYYY")}},{key:"getDate",value:function(n){return null===n||void 0===n?void 0:n.split("T")[0]}},{key:"getTime",value:function(n){return null===n||void 0===n?void 0:n.split("T")[1]}}]),n}()},53240:function(n,e,t){t.r(e),t.d(e,{default:function(){return g}});var i,a,r=t(30168),o=t(29439),c=t(72791),s=t(79271),l=t(86538),d=(t(85862),t(54065)),u=t(2579),p=t(33594),h=t(8765),m=t(25930),f=t(80184);function g(){var n=(0,s.UO)().entity_type;switch(n){case"photos":n="autres";break;case"documentaires":n="documentaire";break;case"podcasts":n="podcast"}var e="?filter[type]=".concat(n),t=(0,c.useState)([]),i=(0,o.Z)(t,2),a=i[0],r=i[1],l=(0,c.useState)(!0),g=(0,o.Z)(l,2),y=g[0],b=g[1];return(0,c.useEffect)((function(){!function(n){d.Z.getMediathequesBasedOnType(n).then((function(n){var e;null===(e=n.rows)||void 0===e||e.map((function(n){r((function(e){return e.concat(n)}))})),b(!1)}))}(e)}),[]),(0,f.jsx)("section",{children:(0,f.jsxs)("section",{className:"wideContent",children:[(0,f.jsx)(h.Z,{title:(0,m.ag)("entities.mediatique.enumerators.type.".concat(n)),items:[[(0,m.ag)("dashboard.menu"),"/"],[(0,m.ag)("entities.mediatique.label")]]}),y?(0,f.jsxs)(v,{children:[(0,f.jsx)(u.Z,{height:300,width:270}),(0,f.jsx)(u.Z,{height:300,width:270}),(0,f.jsx)(u.Z,{height:300,width:270}),(0,f.jsx)(u.Z,{height:300,width:270})]}):(0,f.jsx)(x,{children:null===a||void 0===a?void 0:a.map((function(n,e){return(0,f.jsx)(p.Z,{dataSource:n},e)}))})]})})}var v=l.ZP.section(i||(i=(0,r.Z)(["\n  width: 100%;\n  margin: 2rem 0;\n\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n\n  .react-loading-skeleton {\n    width: 100%;\n    height: 200px;\n  }\n"]))),x=l.ZP.section(a||(a=(0,r.Z)(["\n  width: 100%;\n  margin: 2rem 0;\n\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));\n  grid-gap: 1rem;\n\n  @media (max-width: 767px) {\n    padding: 0 0.5rem;\n  }\n"])))},33594:function(n,e,t){t.d(e,{Z:function(){return m}});var i,a=t(30168),r=(t(72791),t(86538)),o=t(72426),c=t.n(o),s=t(40071),l=t(25930),d=t(91523),u=t(14651),p=t(39126),h=t(80184);function m(n){var e,t=n.dataSource;console.log("dataSource",t);return(0,h.jsx)(f,{className:"videoCardVertical",children:(0,h.jsxs)(d.rU,{to:"/Mediatheque/entity/"+t._id,children:[(null===(e=t.photos)||void 0===e?void 0:e.length)>0?(0,h.jsx)("div",{className:"cardThumbnail",style:{backgroundImage:"url("+t.photos[0].downloadUrl+")"}}):(0,h.jsx)("div",{className:"cardThumbnail hasNoThumbnail"}),(0,h.jsxs)("div",{className:"dateAndType",children:["exposition"===t.type?(0,h.jsxs)("div",{className:"contentType",style:{width:"inherit"},children:[(0,h.jsx)(u.mMd,{className:"icon"}),(0,l.ag)("entities.mediatique.enumerators.type.".concat(t.type))]}):"reportage"===t.type||"autres"===t.type?(0,h.jsxs)("div",{className:"contentType",style:{width:"inherit"},children:[(0,h.jsx)(p.BB5,{className:"icon"}),(0,l.ag)("entities.mediatique.enumerators.type.".concat(t.type))]}):(0,h.jsxs)("div",{className:"contentType",style:{width:"inherit"},children:[(0,h.jsx)(s._DQ,{className:"icon"}),(0,l.ag)("entities.mediatique.enumerators.type.".concat(t.type))]}),(0,h.jsx)("span",{className:"contentDate",children:function(n){var e=n.split("T")[0];return c()(e).format("DD-MM-YYYY")}(t.updatedAt)})]})]})},t._id)}var f=r.ZP.div(i||(i=(0,a.Z)(['\n  position: relative;\n  height: inherit !important;\n  overflow: hidden;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  .cardThumbnail {\n    width: 100%;\n    height: 200px;\n    background-size: cover;\n    background-position: center;\n    position: relative;\n  }\n  .hasNoThumbnail {\n    background-image: url("https://imgur.com/N1ZiTM4.jpeg");\n  }\n\n  .dateAndType {\n    height: 30px;\n    color: #fff;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    span {\n      color: #fff;\n    }\n\n    .contentType {\n      width: 100px;\n      height: 30px;\n      border: 1px solid #e1011a;\n      border-radius: 3px;\n\n      font-family: "Proxima Nova";\n      font-style: normal;\n      font-weight: 400;\n      font-size: 15px;\n      line-height: 15px;\n      color: red;\n      padding: 0.3rem 0.5rem;\n      display: flex;\n      align-items: center;\n      justify-content: space-evenly;\n\n      .icon {\n        margin-right: 5px;\n      }\n    }\n\n    .contentDate {\n      color: rgba(122, 122, 122, 1);\n      font-size: 12px;\n\n      font-family: "Proxima Nova";\n\n      font-style: normal;\n      font-weight: 400;\n      font-size: 12px;\n      line-height: 15px;\n    }\n  }\n\n  .verticalPlayerTitle {\n    margin-top: 1rem;\n    height: 70px;\n\n    span {\n      width: 100%;\n      font-family: "Proxima Nova";\n      text-transform: capitalize !important;\n      line-height: 1.5;\n      font-weight: bold;\n      font-size: 16px;\n      color: var(--violet);\n\n      overflow: hidden;\n      display: inline-block;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n  }\n'])))},8765:function(n,e,t){var i,a=t(30168),r=(t(72791),t(91523)),o=t(86538),c=t(80184),s=o.ZP.div(i||(i=(0,a.Z)(['\n\tmargin: 28px 0 10px 0;\n\t.breadcrumb {\n\t\twidth: 100%;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tbackground-color: transparent;\n\t}\n\tol {\n\t\tdisplay: flex;\n\t}\n\tli {\n\t\tfont-family: "Proxima Nova";\n\t\tfont-style: normal;\n\t\tfont-weight: 400;\n\t\tfont-size: 14px;\n\t\tline-height: 25px;\n\t}\n\t.breadcrump__nav {\n\t\tmargin: auto;\n\t\tleft: 0;\n\t\tdisplay: flex;\n\t\tmax-width: 1170px;\n\t\tflex-direction: column;\n\t}\n\n\t.breadcrumb-item:not(.active) a {\n\t\tcolor: rgba(0, 0, 0, 0.45);\n\t}\n\n\th2 {\n\t\tfont-family: "Bebas Neue Pro";\n\t\tfont-style: normal;\n\t\tfont-weight: 700;\n\t\tfont-size: 47px;\n\t\tline-height: 39px;\n\t}\n'])));e.Z=function(n){var e=function(n){return n.length>1};return(0,c.jsx)(s,{children:(0,c.jsxs)("div",{className:"breadcrump__nav",children:[(0,c.jsx)("div",{children:(0,c.jsx)("h2",{children:n.title})}),(0,c.jsx)("div",{children:(0,c.jsx)("ol",{className:"breadcrumb",children:n.items.map((function(t,i){return(0,c.jsx)("li",{className:"breadcrumb-item ".concat(n.items.length-1===i?"active":""),children:e(t)?(0,c.jsxs)(r.rU,{to:t[1],children:[" ",t[0]," ",t[1]]}):t[0]},t[0])}))})})]})})}},85862:function(){},2579:function(n,e,t){t.d(e,{Z:function(){return l}});var i=t(29439),a=t(1413),r=t(45987),o=t(72791),c=["count","wrapper","className","containerClassName","containerTestId","circle","style"],s=o.createContext({});function l(n){for(var e,t,l,d=n.count,u=void 0===d?1:d,p=n.wrapper,h=n.className,m=n.containerClassName,f=n.containerTestId,g=n.circle,v=void 0!==g&&g,x=n.style,y=(0,r.Z)(n,c),b=o.useContext(s),Z=(0,a.Z)({},y),w=0,j=Object.entries(y);w<j.length;w++){var N=(0,i.Z)(j[w],2),k=N[0];"undefined"===typeof N[1]&&delete Z[k]}var T=(0,a.Z)((0,a.Z)((0,a.Z)({},b),Z),{},{circle:v}),q=(0,a.Z)((0,a.Z)({},x),function(n){var e=n.baseColor,t=n.highlightColor,i=n.width,a=n.height,r=n.borderRadius,o=n.circle,c=n.direction,s=n.duration,l=n.enableAnimation,d=void 0===l||l,u={};return"rtl"===c&&(u["--animation-direction"]="reverse"),"number"===typeof s&&(u["--animation-duration"]="".concat(s,"s")),d||(u["--pseudo-element-display"]="none"),"string"!==typeof i&&"number"!==typeof i||(u.width=i),"string"!==typeof a&&"number"!==typeof a||(u.height=a),"string"!==typeof r&&"number"!==typeof r||(u.borderRadius=r),o&&(u.borderRadius="50%"),"undefined"!==typeof e&&(u["--base-color"]=e),"undefined"!==typeof t&&(u["--highlight-color"]=t),u}(T)),M="react-loading-skeleton";h&&(M+=" ".concat(h));for(var C=null!==(e=T.inline)&&void 0!==e&&e,P=[],_=Math.ceil(u),D=0;D<_;D++){var z=q;if(_>u&&D===_-1){var Y=null!==(t=z.width)&&void 0!==t?t:"100%",E=u%1,A="number"===typeof Y?Y*E:"calc(".concat(Y," * ").concat(E,")");z=(0,a.Z)((0,a.Z)({},z),{},{width:A})}var B=o.createElement("span",{className:M,style:z,key:D},"\u200c");C?P.push(B):P.push(o.createElement(o.Fragment,{key:D},B,o.createElement("br",null)))}return o.createElement("span",{className:m,"data-testid":f,"aria-live":"polite","aria-busy":null===(l=T.enableAnimation)||void 0===l||l},p?P.map((function(n,e){return o.createElement(p,{key:e},n)})):P)}}}]);
//# sourceMappingURL=3240.f01125c8.chunk.js.map