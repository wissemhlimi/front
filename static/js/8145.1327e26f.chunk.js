"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[8145],{79739:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var r,a=t(30168),i=t(72791),o=t(86538),s=t(93433),l=t(29439),c=t(72239),d=t(2579),m=(t(85862),t(66015)),u=t(80184);function h(){var n=(0,i.useState)([]),e=(0,l.Z)(n,2),t=e[0],r=e[1],a=(0,i.useState)("fr"),o=(0,l.Z)(a,2),h=o[0],p=o[1],x=(0,i.useState)(!0),g=(0,l.Z)(x,2),v=g[0],y=g[1];return(0,i.useEffect)((function(){!function(){var n;p(null!==(n=localStorage.getItem("language"))&&void 0!==n?n:"fr"),c.Z.getApropos().then((function(n){r((function(e){return e.concat(n)})),y(!1)})).catch((function(n){return console.error(n)}))}()}),[]),(0,u.jsx)(f,{children:!0===v?(0,u.jsx)(u.Fragment,{children:(0,s.Z)(Array(5)).map((function(n,e){return(0,u.jsx)(d.Z,{height:20,className:"Skeleton"},e)}))}):(0,u.jsx)(u.Fragment,{children:{fr:(0,u.jsx)(u.Fragment,{children:t[0].rows[0]?(0,u.jsxs)("div",{className:"description__detaillEvenement",children:[t[0].rows[0].aboutFR," "]}):(0,u.jsx)(m.Z,{})}),en:(0,u.jsx)(u.Fragment,{children:t[0].rows[0]?(0,u.jsxs)("div",{className:"description__detaillEvenement",children:[t[0].rows[0].aboutEN," "]}):(0,u.jsx)(m.Z,{})}),ar:(0,u.jsx)(u.Fragment,{children:t[0].rows[0]?(0,u.jsxs)("div",{className:"description__detaillEvenement",children:[t[0].rows[0].aboutAR," "]}):(0,u.jsx)(m.Z,{})})}[h]})})}var p,f=o.ZP.section(r||(r=(0,a.Z)(["\n  max-width: 100%;\n  margin: 2rem auto;\n\n  p {\n    font-size: 1rem;\n    line-height: 1.5;\n    color: var(--violet);\n    text-align: justify;\n    margin-bottom: 2rem;\n  }\n\n  .Skeleton {\n    margin-top: 1rem;\n  }\n"]))),x=t(8765),g=t(25930);var v=function(){return(0,u.jsxs)(y,{children:[(0,u.jsx)(x.Z,{title:(0,g.ag)("menu.propos"),items:[[(0,g.ag)("app.title"),"/"],[(0,g.ag)("menu.propos")]]}),(0,u.jsx)(h,{})]})},y=o.ZP.section(p||(p=(0,a.Z)(['\n  max-width: 1170px;\n  margin: 2rem auto;\n  font-family: "Proxima Nova";\n  font-style: normal;\n\n  @media screen and (max-width: 1024px) {\n    margin: 160px 10px 0 10px;\n  }\n'])))},8765:function(n,e,t){var r,a=t(30168),i=(t(72791),t(91523)),o=t(86538),s=t(80184),l=o.ZP.div(r||(r=(0,a.Z)(['\n  margin: 28px 0 10px 0;\n  .breadcrumb {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    background-color: transparent;\n  }\n  ol {\n    display: flex;\n  }\n  li {\n    font-family: "Proxima Nova";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 25px;\n  }\n  .breadcrump__nav {\n    margin: auto;\n    left: 0;\n    display: flex;\n    max-width: 1170px;\n    flex-direction: column;\n  }\n\n  .breadcrumb-item:not(.active) a {\n    color: rgba(0, 0, 0, 0.45);\n  }\n\n  h2 {\n    font-family: "Bebas Neue Pro";\n    font-style: normal;\n    font-weight: 700;\n    font-size: 47px;\n    line-height: 39px;\n  }\n'])));e.Z=function(n){var e=function(n){return n.length>1};return(0,s.jsx)(l,{children:(0,s.jsxs)("div",{className:"breadcrump__nav",children:[(0,s.jsx)("div",{children:(0,s.jsx)("h2",{className:"h2",children:n.title})}),(0,s.jsx)("div",{children:(0,s.jsx)("ol",{className:"breadcrumb",children:n.items.map((function(n,t){return(0,s.jsx)("li",{className:"breadcrumb-item liClass",children:e(n)?(0,s.jsxs)(i.rU,{to:n[1],children:[" ",n[0],"/"===n[1]?(0,s.jsx)(s.Fragment,{children:n[1]}):(0,s.jsx)("div",{style:{display:"none",marginBottom:0},children:n[1]})]}):n[0]},n[0])}))})})]})})}},32771:function(n,e,t){t(72791);var r=t(87087),a=(t(19713),t(86419)),i=t(80184);e.Z=function(n){var e=n.src,t=n.width,o=n.height,s=n.alt,l=n.caption,c=n.key,d=e||a.T1;return(0,i.jsx)(r.LazyLoadImage,{alt:s,height:o,src:d,width:t,effect:"blur",caption:l},c)}},66015:function(n,e,t){var r,a=t(30168),i=(t(72791),t(86538)),o=t(32771),s=t(86419),l=t(25930),c=t(80184);e.Z=function(){return(0,c.jsx)(d,{children:(0,c.jsx)("div",{className:"app__empty",children:(0,c.jsxs)("div",{className:"empty",children:[(0,c.jsx)(o.Z,{src:s.FY,height:100,width:100}),(0,c.jsxs)("h4",{className:"h4",id:"noDataFound",children:["\xa0",(0,l.ag)("common.noData")]})]})})})};var d=i.ZP.div(r||(r=(0,a.Z)(["\n  .app__empty {\n    width: 100%;\n    height: 100%;\n    max-width: 1170px;\n    margin: auto;\n  }\n\n  .empty {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    row-gap: 1rem;\n    justify-content: center;\n    width: 100%;\n    height: 60vh;\n  }\n"])))},85862:function(){},2579:function(n,e,t){t.d(e,{Z:function(){return d}});var r=t(29439),a=t(1413),i=t(45987),o=t(72791),s=["count","wrapper","className","containerClassName","containerTestId","circle","style"],l=o.createContext({}),c=!0;function d(n){for(var e,t,d,m=n.count,u=void 0===m?1:m,h=n.wrapper,p=n.className,f=n.containerClassName,x=n.containerTestId,g=n.circle,v=void 0!==g&&g,y=n.style,b=(0,i.Z)(n,s),j=o.useContext(l),Z=(0,a.Z)({},b),w=0,N=Object.entries(b);w<N.length;w++){var _=(0,r.Z)(N[w],2),k=_[0];"undefined"===typeof _[1]&&delete Z[k]}var E=(0,a.Z)((0,a.Z)((0,a.Z)({},j),Z),{},{circle:v}),F=(0,a.Z)((0,a.Z)({},y),function(n){var e=n.baseColor,t=n.highlightColor,r=n.width,a=n.height,i=n.borderRadius,o=n.circle,s=n.direction,l=n.duration,d=n.enableAnimation,m=void 0===d?c:d,u={};return"rtl"===s&&(u["--animation-direction"]="reverse"),"number"===typeof l&&(u["--animation-duration"]="".concat(l,"s")),m||(u["--pseudo-element-display"]="none"),"string"!==typeof r&&"number"!==typeof r||(u.width=r),"string"!==typeof a&&"number"!==typeof a||(u.height=a),"string"!==typeof i&&"number"!==typeof i||(u.borderRadius=i),o&&(u.borderRadius="50%"),"undefined"!==typeof e&&(u["--base-color"]=e),"undefined"!==typeof t&&(u["--highlight-color"]=t),u}(E)),C="react-loading-skeleton";p&&(C+=" ".concat(p));for(var P=null!==(e=E.inline)&&void 0!==e&&e,S=[],A=Math.ceil(u),R=0;R<A;R++){var z=F;if(A>u&&R===A-1){var I=null!==(t=z.width)&&void 0!==t?t:"100%",T=u%1,B="number"===typeof I?I*T:"calc(".concat(I," * ").concat(T,")");z=(0,a.Z)((0,a.Z)({},z),{},{width:B})}var D=o.createElement("span",{className:C,style:z,key:R},"\u200c");P?S.push(D):S.push(o.createElement(o.Fragment,{key:R},D,o.createElement("br",null)))}return o.createElement("span",{className:f,"data-testid":x,"aria-live":"polite","aria-busy":null!==(d=E.enableAnimation)&&void 0!==d?d:c},h?S.map((function(n,e){return o.createElement(h,{key:e},n)})):S)}}}]);
//# sourceMappingURL=8145.1327e26f.chunk.js.map