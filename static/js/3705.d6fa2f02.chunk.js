"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[3705,9540],{54065:function(n,e,t){t.d(e,{Z:function(){return h}});var i=t(74165),a=t(15861),r=t(15671),o=t(43144),s=t(27415),l=t(56856),c=t(72426),d=t.n(c),h=function(){function n(){(0,r.Z)(this,n)}return(0,o.Z)(n,null,[{key:"getLatestMediatheques",value:function(){var n=(0,a.Z)((0,i.Z)().mark((function n(){var e,t;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=l.Z.get(),n.next=3,s.Z.get("/tenant/".concat(e,"/mediatique/"));case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},{key:"getMediathequesBasedOnType",value:function(){var n=(0,a.Z)((0,i.Z)().mark((function n(e){var t,a;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=l.Z.get(),n.next=3,s.Z.get("/tenant/".concat(t,"/mediatique/").concat(e));case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},{key:"getOneMediatheque",value:function(){var n=(0,a.Z)((0,i.Z)().mark((function n(e){var t,a;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=l.Z.get(),n.next=3,s.Z.get("/tenant/".concat(t,"/mediatique/").concat(e));case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},{key:"pipeDate",value:function(n){return d()(n).format("DD-MM-YYYY")}},{key:"getDate",value:function(n){return null===n||void 0===n?void 0:n.split("T")[0]}},{key:"getTime",value:function(n){return null===n||void 0===n?void 0:n.split("T")[1]}}]),n}()},87411:function(n,e,t){t.r(e),t.d(e,{default:function(){return tn}});var i,a,r=t(30168),o=t(29439),s=t(72791),l=t(86538),c=t(54065),d=l.ZP.section(i||(i=(0,r.Z)(["\n\tcolor: #fff;\n\theight: auto;\n\n\t.bottomGrid {\n\t\theight: 704px;\n\t\twidth: 100%;\n\t\tpadding-top: calc(704px - 450px);\n\t\tborder-top: 5px solid red;\n\t\tbackground-color: var(--violet-dark);\n\t\tposition: relative;\n\t\ttop: -200px;\n\n\t\t.loaderPlaceholder {\n\t\t\twidth: var(--cerntered-content);\n\t\t\tmargin: auto;\n\t\t\theight: 330px;\n\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: row;\n\t\t\talign-items: center;\n\t\t\tjustify-content: space-between;\n\n\t\t\t.customLoader {\n\t\t\t\twidth: 350px;\n\t\t\t}\n\t\t}\n\t}\n\n\t.splideContent {\n\t\twidth: var(--cerntered-content);\n\t\theight: 507px;\n\t\tmargin: auto;\n\t\tbackground-color: transparent;\n\t\tposition: relative;\n\t\tz-index: 4;\n\t}\n\n\t@media (max-width: 767px) {\n\t\theight: auto;\n\t\t.bottomGrid {\n\t\t\tpadding-top: 1rem;\n\t\t\theight: auto;\n\t\t}\n\n\t\t.splideContent {\n\t\t\twidth: 100%;\n\t\t\theight: 210px;\n\t\t\t/* overflow: hidden; */\n\t\t}\n\t}\n"]))),h=l.ZP.section(a||(a=(0,r.Z)(['\n  header {\n    margin-bottom: 3rem;\n\n    h1 {\n      width: 100%;\n      font-size: 2rem;\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: flex-end;\n      color: #fff;\n      line-height: 0.7;\n\n      &:after {\n        content: "";\n        display: inline-block;\n        flex-grow: 1;\n        height: 1px;\n        background-color: red;\n      }\n    }\n  }\n\n  main {\n    width: 100%;\n    position: relative;\n\n    /* STYLING THE SPLIDE ARROWS ! */\n    .splide__arrow {\n      height: 35px;\n      width: 35px;\n      position: absolute;\n      top: -80px;\n\n      background-color: transparent;\n      border: 1px solid var(--gray3);\n      border-radius: 0.2rem;\n\n      svg {\n        fill: #fff;\n      }\n    }\n    button {\n      &:nth-child(1) {\n        position: relative;\n        float: right;\n        margin-right: 1rem;\n      }\n    }\n\n    .VerticlPlayer {\n      width: 270px !important;\n      height: 330px !important;\n      overflow: hidden;\n\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n\n      .cardThumbnail {\n        width: 100%;\n        height: 200px;\n        background-size: cover;\n        background-position: center;\n      }\n      .hasNoThumbnail {\n        background-image: url("https://imgur.com/N1ZiTM4.jpeg");\n      }\n\n      .dateAndType {\n        height: 30px;\n        color: #fff;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n\n        span {\n          color: #fff;\n        }\n\n        .contentType {\n          width: 100px;\n          height: 30px;\n          border: 1px solid #e1011a;\n          border-radius: 3px;\n          font-family: "Proxima Nova";\n          font-style: normal;\n          font-weight: 400;\n          font-size: 15px;\n          line-height: 15px;\n          color: red;\n          padding: 0.3rem 0.5rem;\n          display: flex;\n          align-items: center;\n          justify-content: space-evenly;\n\n          .icon {\n            margin-right: 5px;\n          }\n        }\n\n        .contentDate {\n          color: rgba(255, 255, 255, 1);\n          font-family: "Proxima Nova";\n          font-style: normal;\n          font-weight: 400;\n          font-size: 12px;\n          line-height: 15px;\n          color: #ffffff;\n        }\n      }\n\n      .verticalPlayerTitle {\n        height: 70px;\n        width: 250px;\n        span {\n          font-family: "Bebas Neue Pro";\n          font-style: normal;\n          font-weight: 700;\n          font-size: 23px;\n          line-height: 24px;\n          color: #fff !important;\n        }\n      }\n    }\n  }\n\n  @media (max-width: 767px) {\n    padding: 1rem 0.5rem;\n    header {\n      h1 {\n        font-size: 1.6rem;\n      }\n    }\n    main {\n      padding: 0;\n      .splide__arrow {\n        display: none;\n      }\n    }\n  }\n']))),p=t(48282),u=(t(78677),t(76053)),m=t(40071),x=t(39126),f=t(7692),g=t(4726),v=t(85785),y=t(25930),j=t(14651),b=t(91523),w=t(80184);function N(n){var e,t=n.data,i=localStorage.getItem("language");return(0,w.jsx)(h,{children:(0,w.jsxs)("section",{className:"wideContent",children:[(0,w.jsx)("header",{children:(0,w.jsxs)("div",{className:"archieve__header",children:[(0,w.jsx)("h2",{style:{color:"#fff"},children:(0,y.ag)("common.laUne")}),(0,w.jsx)("div",{className:"satestique__bar"})]})}),(0,w.jsx)("main",{children:(0,w.jsx)(p.tv,{options:{gap:".5rem",perPage:1,pagination:!1,wheel:!1,direction:"ar"===i?"rtl":"ltr"},children:null===(e=t.rows)||void 0===e?void 0:e.map((function(n){var e;return(0,w.jsx)(p.jw,{className:"VerticlPlayer",children:(0,w.jsxs)(b.rU,{to:"/Mediatheque/entity/"+n._id,children:[null!==(e=n.photos)&&void 0!==e&&e.length?(0,w.jsx)("div",{className:"cardThumbnail",style:{backgroundImage:"url("+n.photos[0].downloadUrl+")"}}):(0,w.jsx)("div",{className:"cardThumbnail hasNoThumbnail"}),(0,w.jsxs)("div",{className:"dateAndType",style:{marginTop:10},children:[(0,w.jsxs)("div",{className:"contentType",style:{width:"inherit"},children:[{documentaire:(0,w.jsx)(u.hIq,{className:"icon"}),podcast:(0,w.jsx)(f.dxk,{className:"icon"}),videos:(0,w.jsx)(m._DQ,{className:"icon"}),exposition:(0,w.jsx)(j.mMd,{className:"icon"}),reportage:(0,w.jsx)(x.BB5,{className:"icon"}),autres:(0,w.jsx)(x.BB5,{className:"icon"})}[n.type],(0,y.ag)("entities.mediatique.enumerators.type.".concat(n.type))]}),(0,w.jsx)("span",{className:"contentDate",children:v.Z.pipeDate(n.updatedAt)})]}),(0,w.jsx)("div",{className:"verticalPlayerTitle text__wrap",children:(0,w.jsx)("span",{style:{color:"#fff"},children:g.Z.Trans("title",n)})})]})},n._id)}))})})]})})}var Z=t(9997),T=t(72426),k=t.n(T);function _(n){var e=n.data,t=function(n){var e=n.split("T")[0];return k()(e).format("DD-MM-YYYY")},i=localStorage.getItem("language");return(0,w.jsx)(Z.Z,{children:(0,w.jsx)(p.tv,{options:{perPage:1,perMove:1,pagination:!0,wheel:!1,direction:"ar"===i?"rtl":"ltr"},className:"splide",children:null===e||void 0===e?void 0:e.map((function(n,e){var i,a;return(0,w.jsx)(p.jw,{className:"horizontalPlayer",style:{background:"linear-gradient(115.19deg, #2B2840 28.27%, rgba(43, 40, 64, 0) 68.81%), linear-gradient(0deg, rgba(43, 40, 64, 0.7), rgba(43, 40, 64, 0.7)), url("+(null===(i=n.photos[0])||void 0===i?void 0:i.downloadUrl)+")"},children:(0,w.jsx)(b.rU,{to:"/Mediatheque/entity/"+n._id,children:(0,w.jsxs)("section",{children:[(0,w.jsx)("div",{children:null!==(a=n.photos)&&void 0!==a&&a.length?(0,w.jsx)("div",{className:"cardThumbnail",style:{backgroundImage:"url("+n.photos[0].downloadUrl+")"}}):(0,w.jsx)("div",{className:"cardThumbnail hasNoThumbnail"})}),(0,w.jsxs)("div",{children:[(0,w.jsxs)("div",{className:"dateAndType",children:[(0,w.jsxs)("div",{className:"contentType",children:[{documentaire:(0,w.jsx)(u.hIq,{className:"icon"}),podcast:(0,w.jsx)(f.dxk,{className:"icon"}),videos:(0,w.jsx)(m._DQ,{className:"icon"}),exposition:(0,w.jsx)(j.mMd,{className:"icon"}),reportage:(0,w.jsx)(x.BB5,{className:"icon"}),autres:(0,w.jsx)(x.BB5,{className:"icon"})}[n.type],(0,y.ag)("entities.mediatique.enumerators.type.".concat(n.type))]}),(0,w.jsx)("span",{className:"contentDate",children:t(n.updatedAt)})]}),(0,w.jsxs)("div",{className:"textContent",children:[(0,w.jsx)("div",{className:"horizontalPlayerTitle ow",children:g.Z.Trans("title",n)}),(0,w.jsx)("div",{className:"horizontalPlayerDescription text__wrap",children:g.Z.Trans("description",n)})]})]})]})})},e)}))})})}var P,M=t(2579);t(85862);function D(){var n=(0,s.useState)([]),e=(0,o.Z)(n,2),t=e[0],i=e[1],a=(0,s.useState)([]),r=(0,o.Z)(a,2),l=r[0],h=r[1],p=(0,s.useState)(!0),u=(0,o.Z)(p,2),m=u[0],x=u[1],f=function(){c.Z.getLatestMediatheques().then((function(n){i(n),function(n,e,t){var i;null===(i=n.rows)||void 0===i||i.map((function(n,i){i<e&&"hot"===t&&h((function(e){return e.concat(n)}))}))}(n,3,"hot"),x(!1)}))};return(0,s.useEffect)((function(){f()}),[]),(0,w.jsxs)(d,{children:[(0,w.jsx)("section",{className:"splideContent",children:m?(0,w.jsx)(M.Z,{height:507}):(0,w.jsx)("section",{children:l.length>0?(0,w.jsx)(_,{data:l}):(0,w.jsx)("h2",{children:(0,y.ag)("common.noData")})})}),(0,w.jsx)("section",{className:"bottomGrid",children:m?(0,w.jsxs)("div",{className:"loaderPlaceholder",children:[(0,w.jsx)(M.Z,{height:350,className:"customLoader"}),(0,w.jsx)(M.Z,{height:350,className:"customLoader"}),(0,w.jsx)(M.Z,{height:350,className:"customLoader"})]}):(0,w.jsx)("section",{children:l.length>0?(0,w.jsx)(N,{data:t}):(0,w.jsx)("h2",{style:{textAlign:"center",color:"#fff"},children:(0,y.ag)("common.noData")})})})]})}var z=l.ZP.section(P||(P=(0,r.Z)(["\n  width: 100%;\n\n  .grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(270px, 1rem));\n    grid-gap: 1.9375rem;\n  }\n"]))),S=t(33594);function q(n){var e=n.videosList;return(0,w.jsxs)(z,{children:[(0,w.jsxs)("div",{className:"archieve__header",children:[(0,w.jsx)("h2",{children:(0,y.ag)("entities.mediatique.enumerators.type.videos")}),(0,w.jsx)("div",{className:"satestique__bar"})]}),(0,w.jsx)("div",{style:{marginBottom:"2.1875rem"}}),(0,w.jsx)("div",{className:"grid",children:null===e||void 0===e?void 0:e.map((function(n){return(0,w.jsx)(S.Z,{dataSource:n},n._id)}))})]})}function Y(n){var e=n.photosList;return(0,w.jsxs)(z,{children:[(0,w.jsxs)("div",{className:"archieve__header",children:[(0,w.jsx)("h2",{children:(0,y.ag)("entities.mediatique.enumerators.type.".concat(e[0].type))}),(0,w.jsx)("div",{className:"satestique__bar"})]}),(0,w.jsx)("div",{style:{marginBottom:"2.1875rem"}}),(0,w.jsx)("div",{className:"grid",children:null===e||void 0===e?void 0:e.map((function(n){return(0,w.jsx)(S.Z,{dataSource:n},n._id)}))})]})}var L,B=t(96710);function C(n){var e,t=n.dataSource;return(0,w.jsx)(U,{className:"videoCardVertical",children:(0,w.jsxs)(b.rU,{to:"/Mediatheque/entity/"+t._id,children:[(null===(e=t.photos)||void 0===e?void 0:e.length)>0?(0,w.jsx)("div",{className:"cardThumbnail",style:{backgroundImage:"url("+t.photos[0].downloadUrl+")"}}):(0,w.jsx)("div",{className:"cardThumbnail hasNoThumbnail"}),(0,w.jsxs)("div",{className:"dateAndType",children:[(0,w.jsxs)("div",{className:"contentType",style:{width:"inherit"},children:[(0,w.jsx)(f.dxk,{className:"icon"}),(0,y.ag)("entities.mediatique.enumerators.type.".concat(t.type))]}),(0,w.jsx)("span",{className:"contentDate",children:function(n){var e=n.split("T")[0];return k()(e).format("DD-MM-YYYY")}(t.updatedAt)})]}),(0,w.jsx)("div",{className:"verticalPlayerTitle text__wrap",children:(0,w.jsx)("span",{style:{textTransform:"lowercase"},children:g.Z.Trans("title",t)})}),(null===t||void 0===t?void 0:t.link)&&(0,w.jsx)(B.Z,{url:null===t||void 0===t?void 0:t.link,width:280,height:10})]})},t._id)}var A,U=l.ZP.div(L||(L=(0,r.Z)(['\n  position: relative;\n  height: inherit !important;\n  overflow: hidden;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  .cardThumbnail {\n    width: 100%;\n    height: 200px;\n    background-size: cover;\n    background-position: center;\n    position: relative;\n  }\n  .hasNoThumbnail {\n    background-image: url("https://imgur.com/N1ZiTM4.jpeg");\n  }\n  .dateAndType {\n    margin-top: 8px;\n    height: 30px;\n    color: #fff;\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    span {\n      color: #fff;\n    }\n\n    .contentType {\n      width: 100px;\n      border: 1px solid red;\n      border-radius: 0.5rem;\n      height: 30px;\n\n      font-family: "Proxima Nova";\n      font-style: normal;\n      font-weight: 400;\n      font-size: 1rem;\n      text-transform: capitalize;\n      line-height: 15px;\n      color: red;\n      padding: 0.3rem 0.5rem;\n\n      display: flex;\n      align-items: center;\n      justify-content: space-evenly;\n\n      .icon {\n        margin-right: 5px;\n      }\n    }\n\n    .contentDate {\n      color: rgba(122, 122, 122, 1);\n      font-size: 12px;\n      font-family: "Proxima Nova";\n\n      font-style: normal;\n      font-weight: 400;\n      font-size: 12px;\n      line-height: 15px;\n    }\n  }\n\n  .verticalPlayerTitle {\n    margin-top: 1rem;\n    height: 5px;\n\n    span {\n      width: 100%;\n      font-family: "Proxima Nova";\n      text-transform: capitalize !important;\n      line-height: 1.5;\n      font-weight: bold;\n      font-size: 16px;\n      color: var(--violet);\n\n      overflow: hidden;\n      display: inline-block;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n  }\n'])));function I(n){var e=n.podcastList;return(0,w.jsxs)(z,{children:[(0,w.jsxs)("div",{className:"archieve__header",children:[(0,w.jsx)("h2",{children:(0,y.ag)("entities.mediatique.enumerators.type.podcast")}),(0,w.jsx)("div",{className:"satestique__bar"})]}),(0,w.jsx)("div",{style:{marginBottom:"2.1875rem"}}),(0,w.jsx)("div",{className:"grid",children:null===e||void 0===e?void 0:e.map((function(n){return(0,w.jsx)(C,{dataSource:n},n._id)}))})]})}function R(n){var e,t=n.dataSource;return(0,w.jsx)(H,{children:(0,w.jsx)(b.rU,{to:"/Mediatheque/entity/"+t._id,children:(null===(e=t.photos)||void 0===e?void 0:e.length)>0?(0,w.jsx)("div",{className:"cardThumbnail",style:{background:"linear-gradient(180deg, rgba(43, 40, 64, 0) 30.73%, rgba(43, 40, 64, 0.7) 100%), url("+t.photos[0].downloadUrl+")",backgroundSize:"cover",backgroundPosition:"center"},children:(0,w.jsx)("div",{className:"cardTitle",children:(0,w.jsx)("span",{children:g.Z.Trans("title",t)})})}):(0,w.jsx)("div",{className:"cardThumbnail hasNoThumbnail",children:(0,w.jsx)("div",{className:"cardTitle",children:(0,w.jsx)("span",{className:"text__wrap__height",children:g.Z.Trans("title",t)})})})})})}var E,H=l.ZP.div(A||(A=(0,r.Z)(['\n  height: 200px !important;\n\n  .cardThumbnail {\n    width: 100%;\n    height: 200px;\n    padding: 1rem;\n    display: flex;\n    align-items: flex-end;\n  }\n  .hasNoThumbnail {\n    background: linear-gradient(\n        180deg,\n        rgba(43, 40, 64, 0) 30.73%,\n        rgba(43, 40, 64, 0.7) 100%\n      ),\n      url("https://imgur.com/N1ZiTM4.jpeg");\n    background-size: cover;\n    background-position: center;\n  }\n\n  .cardTitle {\n    background: linear-gradient(\n      180deg,\n      rgba(43, 40, 64, 0) 30.73%,\n      rgba(43, 40, 64, 0.7) 100%\n    );\n    span {\n      font-family: "Bebas Neue Pro";\n      font-style: normal;\n      font-weight: 700;\n      font-size: 23px;\n      line-height: 24px;\n      color: #e7e3ff;\n      text-transform: lowercase !important;\n      width: 230px;\n      /**Major Properties**/\n      overflow: hidden;\n      max-height: 6rem;\n      -webkit-box-orient: vertical;\n      display: block;\n      display: -webkit-box;\n      overflow: hidden !important;\n      text-overflow: ellipsis;\n      -webkit-line-clamp: 2;\n    }\n  }\n'])));function G(n){var e=n.docstList;return(0,w.jsxs)(z,{children:[(0,w.jsxs)("div",{className:"archieve__header",children:[(0,w.jsx)("h2",{children:(0,y.ag)("entities.mediatique.enumerators.type.documentaire")}),(0,w.jsx)("div",{className:"satestique__bar"})]}),(0,w.jsx)("div",{style:{marginBottom:"2.1875rem"}}),(0,w.jsx)("div",{className:"grid",children:null===e||void 0===e?void 0:e.map((function(n){return(0,w.jsx)(R,{dataSource:n},n._id)}))})]})}function V(n){var e=n.contentType;return(0,w.jsx)(Q,{children:(0,w.jsx)(b.rU,{to:"/Mediatheque/type/"+e,children:(0,w.jsx)("div",{className:"plus__button",children:(0,y.ag)("common.voirPlus")})})})}var O,Q=l.ZP.div(E||(E=(0,r.Z)(['\n  width: 100%;\n  text-align: center;\n  span {\n    font-family: "Proxima Nova";\n    font-size: 1rem;\n    font-weight: thin;\n    text-decoration-line: underline;\n    text-transform: uppercase;\n    color: #e1011a !important;\n  }\n'])));function F(){var n=(0,s.useState)([]),e=(0,o.Z)(n,2),t=e[0],i=e[1],a=(0,s.useState)(!0),r=(0,o.Z)(a,2),l=r[0],d=r[1],h=(0,s.useState)([]),p=(0,o.Z)(h,2),u=p[0],m=p[1],x=(0,s.useState)(!0),f=(0,o.Z)(x,2),g=f[0],v=f[1],y=(0,s.useState)([]),j=(0,o.Z)(y,2),b=j[0],N=j[1],Z=(0,s.useState)(!0),T=(0,o.Z)(Z,2),k=T[0],_=T[1],P=(0,s.useState)([]),D=(0,o.Z)(P,2),z=D[0],S=D[1],L=(0,s.useState)(!0),B=(0,o.Z)(L,2),C=B[0],A=B[1],U=(0,s.useState)([]),R=(0,o.Z)(U,2),E=R[0],H=R[1],O=(0,s.useState)(!0),Q=(0,o.Z)(O,2),F=Q[0],W=Q[1],J=(0,s.useState)([]),X=(0,o.Z)(J,2),$=X[0],nn=X[1],en=(0,s.useState)(!0),tn=(0,o.Z)(en,2),an=tn[0],rn=tn[1];return(0,s.useEffect)((function(){!function(){var n=0,e=0,t=0,a=0,r=0,o=0;c.Z.getLatestMediatheques().then((function(s){var l;null===(l=s.rows)||void 0===l||l.map((function(s,l){"videos"===s.type&&n<1&&(i((function(n){return n.concat(s)})),n+=1),"autres"===s.type&&t<1&&(m((function(n){return n.concat(s)})),t+=1),"podcast"===s.type&&e<1&&(N((function(n){return n.concat(s)})),e+=1),"documentaire"===s.type&&a<1&&(S((function(n){return n.concat(s)})),a+=1),"exposition"===s.type&&r<1&&(H((function(n){return n.concat(s)})),r+=1),"reportage"===s.type&&o<1&&(nn((function(n){return n.concat(s)})),o+=1)})),d(!1),v(!1),_(!1),A(!1),W(!1),rn(!1)}))}()}),[]),(0,w.jsxs)(K,{children:[(0,w.jsxs)("section",{className:"mainContentLeftSection",children:[l?(0,w.jsx)(M.Z,{height:300}):(0,w.jsx)("section",{children:t.length>0?(0,w.jsxs)("section",{children:[(0,w.jsx)(q,{videosList:t}),(0,w.jsx)(V,{contentType:"videos"})]}):null}),g?(0,w.jsx)(M.Z,{height:300}):(0,w.jsx)("section",{children:u.length>0?(0,w.jsxs)("section",{children:[(0,w.jsx)(Y,{photosList:u}),(0,w.jsx)(V,{contentType:"photos"})]}):null}),an?(0,w.jsx)(M.Z,{height:300}):(0,w.jsx)("section",{children:$.length>0?(0,w.jsxs)("section",{children:[(0,w.jsx)(Y,{photosList:$}),(0,w.jsx)(V,{contentType:"reportage"})]}):null})]}),(0,w.jsxs)("section",{className:"mainContentRightSection",children:[C?(0,w.jsx)(M.Z,{height:300}):(0,w.jsx)("section",{children:z.length>0?(0,w.jsxs)("section",{children:[(0,w.jsx)(G,{docstList:z}),(0,w.jsx)(V,{contentType:"documentaires"})]}):null}),k?(0,w.jsx)(M.Z,{height:300}):(0,w.jsx)("section",{children:b.length>0?(0,w.jsxs)("section",{children:[(0,w.jsx)(I,{podcastList:b}),(0,w.jsx)(V,{contentType:"podcasts"})]}):null}),F?(0,w.jsx)(M.Z,{height:300}):(0,w.jsx)("section",{children:E.length>0?(0,w.jsxs)("section",{children:[(0,w.jsx)(Y,{photosList:E}),(0,w.jsx)(V,{contentType:"exposition"})]}):null})]})]})}var W,J,K=l.ZP.section(O||(O=(0,r.Z)(["\n  margin: 1rem auto;\n  width: var(--cerntered-content);\n  min-height: 200px;\n  position: relative;\n  top: -180px;\n\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: space-between;\n\n  .mainContentRightSection {\n    width: 350px !important;\n    margin-left: 2rem;\n  }\n\n  .mainContentLeftSection {\n    width: 350px !important;\n    margin-right: 2rem;\n  }\n\n  @media (max-width: 767px) {\n    display: block;\n    width: 100%;\n    padding: 0 0.5rem;\n\n    .mainContentRightSection {\n      width: 100% !important;\n      padding: 0;\n      margin: 0;\n    }\n    .mainContentLeftSection {\n      width: 100% !important;\n      padding: 0;\n      margin: 0;\n    }\n  }\n"]))),X=t(8765),$=t(72239);var nn=l.ZP.div(W||(W=(0,r.Z)(["\n  @media (max-width: 1071px) {\n    margin: 160px auto 0 auto;\n  }\n"]))),en=l.ZP.div(J||(J=(0,r.Z)(["\n  color: var(--violet);\n  font-size: 1rem;\n  font-weight: 400;\n  text-align: justify;\n  margin: 28px 0 10px 210px;\n"]))),tn=function(){var n=localStorage.getItem("language"),e=(0,s.useState)(""),t=(0,o.Z)(e,2),i=t[0],a=t[1];return(0,s.useEffect)((function(){$.Z.list("","","","").then((function(e){"fr"===n&&a(e.rows[0].mediatequeDescFR),"ar"===n&&a(e.rows[0].mediatequeDescAR),"en"===n&&a(e.rows[0].mediatequeDescEN)}))}),[]),(0,w.jsxs)(nn,{children:[(0,w.jsx)(X.Z,{title:(0,y.ag)("entities.mediatique.label"),items:[[(0,y.ag)("app.title"),"/"],[(0,y.ag)("entities.mediatique.label")]]}),(0,w.jsx)(en,{children:(0,w.jsx)("p",{children:i})}),(0,w.jsx)(D,{}),(0,w.jsx)(F,{})]})}},33594:function(n,e,t){t.d(e,{Z:function(){return u}});var i,a=t(30168),r=(t(72791),t(86538)),o=t(72426),s=t.n(o),l=t(40071),c=t(25930),d=t(91523),h=t(14651),p=t(80184);function u(n){var e,t=n.dataSource;return(0,p.jsx)(m,{className:"videoCardVertical",children:(0,p.jsxs)(d.rU,{to:"/Mediatheque/entity/"+t._id,children:[(null===(e=t.photos)||void 0===e?void 0:e.length)>0?(0,p.jsx)("div",{className:"cardThumbnail",style:{backgroundImage:"url("+t.photos[0].downloadUrl+")"}}):(0,p.jsx)("div",{className:"cardThumbnail hasNoThumbnail"}),(0,p.jsxs)("div",{className:"dateAndType",children:["exposition"===t.type?(0,p.jsxs)("div",{className:"contentType",style:{width:"inherit"},children:[(0,p.jsx)(h.mMd,{className:"icon"}),(0,c.ag)("entities.mediatique.enumerators.type.".concat(t.type))]}):(0,p.jsxs)("div",{className:"contentType",style:{width:"inherit"},children:[(0,p.jsx)(l._DQ,{className:"icon"}),(0,c.ag)("entities.mediatique.enumerators.type.".concat(t.type))]}),(0,p.jsx)("span",{className:"contentDate",children:function(n){var e=n.split("T")[0];return s()(e).format("DD-MM-YYYY")}(t.updatedAt)})]})]})},t._id)}var m=r.ZP.div(i||(i=(0,a.Z)(['\n  position: relative;\n  height: inherit !important;\n  overflow: hidden;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  .cardThumbnail {\n    width: 100%;\n    height: 200px;\n    background-size: cover;\n    background-position: center;\n    position: relative;\n  }\n  .hasNoThumbnail {\n    background-image: url("https://imgur.com/N1ZiTM4.jpeg");\n  }\n\n  .dateAndType {\n    height: 30px;\n    color: #fff;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    span {\n      color: #fff;\n    }\n\n    .contentType {\n      width: 100px;\n      height: 30px;\n      border: 1px solid #e1011a;\n      border-radius: 3px;\n\n      font-family: "Proxima Nova";\n      font-style: normal;\n      font-weight: 400;\n      font-size: 15px;\n      line-height: 15px;\n      color: red;\n      padding: 0.3rem 0.5rem;\n      display: flex;\n      align-items: center;\n      justify-content: space-evenly;\n\n      .icon {\n        margin-right: 5px;\n      }\n    }\n\n    .contentDate {\n      color: rgba(122, 122, 122, 1);\n      font-size: 12px;\n\n      font-family: "Proxima Nova";\n\n      font-style: normal;\n      font-weight: 400;\n      font-size: 12px;\n      line-height: 15px;\n    }\n  }\n\n  .verticalPlayerTitle {\n    margin-top: 1rem;\n    height: 70px;\n\n    span {\n      width: 100%;\n      font-family: "Proxima Nova";\n      text-transform: capitalize !important;\n      line-height: 1.5;\n      font-weight: bold;\n      font-size: 16px;\n      color: var(--violet);\n\n      overflow: hidden;\n      display: inline-block;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n  }\n'])))},9997:function(n,e,t){var i,a=t(30168),r=t(86538).ZP.section(i||(i=(0,a.Z)(['\n  /* color: #fff; */\n  width: var(--cerntered-content);\n  height: 507px;\n  background-color: #000;\n\n  button {\n    padding: 0 !important ;\n  }\n\n  .splide {\n    /* position: relative; */\n    /* background-color: yellow; */\n\n    .splide__pagination__page {\n      height: 10px;\n      width: 10px;\n      border-radius: 0;\n    }\n\n    .splide__arrow {\n      height: 35px;\n      width: 35px;\n      position: absolute;\n      bottom: 0;\n\n      background-color: rgba(255, 255, 255, 0.3);\n      border: 1px solid var(--gray3);\n      border-radius: 0.2rem;\n\n      svg {\n        fill: #000;\n      }\n    }\n  }\n\n  .horizontalPlayer {\n    width: 100% !important;\n    height: 507px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-size: cover;\n    background-position: center;\n\n    section {\n      display: grid;\n      grid-template-columns: 467px 500px;\n      place-items: center;\n      column-gap: 31px;\n\n      .cardThumbnail {\n        width: 467px !important;\n        height: 350px;\n        background-size: cover;\n        background-position: center;\n        filter: drop-shadow(0px 9px 14px rgba(0, 0, 0, 0.1));\n      }\n      .hasNoThumbnail {\n        background-image: url("https://placehold.jp/467x350.png");\n      }\n\n      .textContent {\n        width: 500px;\n        font-family: "Bebas Neue Pro";\n        line-height: 1.2;\n        text-align: left;\n        color: #fff;\n        .horizontalPlayerTitle {\n          border: 1px color #000;\n\n          word-break: break-word;\n          font-family: "Bebas Neue Pro";\n          font-style: normal;\n          font-weight: 700;\n          font-size: 40px;\n          line-height: 43px;\n          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n        }\n\n        .horizontalPlayerDescription {\n          font-family: "Proxima Nova";\n          font-style: normal;\n          font-weight: 400;\n          font-size: 14px;\n          line-height: 22px;\n        }\n      }\n\n      .dateAndType {\n        display: block;\n        margin-bottom: 8px;\n\n        span {\n          color: #fff;\n        }\n\n        .contentType {\n          width: 100px;\n          height: 30px;\n          border: 1px solid #e1011a;\n          border-radius: 3px;\n          margin-bottom: 1rem;\n          font-family: "Proxima Nova";\n          font-style: normal;\n          font-weight: 400;\n          font-size: 15px;\n          line-height: 15px;\n          color: red;\n          padding: 0.3rem 0.5rem;\n          display: flex;\n          align-items: center;\n          justify-content: space-evenly;\n        }\n\n        .contentDate {\n          font-family: "Proxima Nova";\n          font-style: normal;\n          font-weight: 400;\n          font-size: 12px;\n          line-height: 15px;\n          color: #ffffff;\n        }\n      }\n    }\n  }\n\n  @media (max-width: 767px) {\n    display: none;\n  }\n'])));e.Z=r},8765:function(n,e,t){var i,a=t(30168),r=(t(72791),t(91523)),o=t(86538),s=t(80184),l=o.ZP.div(i||(i=(0,a.Z)(['\n\tmargin: 28px 0 10px 0;\n\t.breadcrumb {\n\t\twidth: 100%;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tbackground-color: transparent;\n\t}\n\tol {\n\t\tdisplay: flex;\n\t}\n\tli {\n\t\tfont-family: "Proxima Nova";\n\t\tfont-style: normal;\n\t\tfont-weight: 400;\n\t\tfont-size: 14px;\n\t\tline-height: 25px;\n\t}\n\t.breadcrump__nav {\n\t\tmargin: auto;\n\t\tleft: 0;\n\t\tdisplay: flex;\n\t\tmax-width: 1170px;\n\t\tflex-direction: column;\n\t}\n\n\t.breadcrumb-item:not(.active) a {\n\t\tcolor: rgba(0, 0, 0, 0.45);\n\t}\n\n\th2 {\n\t\tfont-family: "Bebas Neue Pro";\n\t\tfont-style: normal;\n\t\tfont-weight: 700;\n\t\tfont-size: 47px;\n\t\tline-height: 39px;\n\t}\n'])));e.Z=function(n){var e=function(n){return n.length>1};return(0,s.jsx)(l,{children:(0,s.jsxs)("div",{className:"breadcrump__nav",children:[(0,s.jsx)("div",{children:(0,s.jsx)("h2",{children:n.title})}),(0,s.jsx)("div",{children:(0,s.jsx)("ol",{className:"breadcrumb",children:n.items.map((function(t,i){return(0,s.jsx)("li",{className:"breadcrumb-item ".concat(n.items.length-1===i?"active":""),children:e(t)?(0,s.jsxs)(r.rU,{to:t[1],children:[" ",t[0]," ",t[1]]}):t[0]},t[0])}))})})]})})}},85785:function(n,e,t){var i=t(15671),a=t(43144),r=t(72426),o=t.n(r),s=function(){function n(){(0,i.Z)(this,n)}return(0,a.Z)(n,null,[{key:"Hour",value:function(n){return o()(n).format("hh:mm a")}},{key:"HourMinute",value:function(n){return o()(n).format("DD-MM-YYYY HH:mm")}},{key:"fullDate",value:function(n){return o()(n).format("DD-MM-YYYY")}},{key:"Day",value:function(n){return o()(n).format("D")}},{key:"Month",value:function(n){return o()(n).format("MMMM")}},{key:"Year",value:function(n){return o()(n).format("y")}},{key:"date",value:function(n){var e=this.Day(n),t=this.Month(n),i=this.Year(n);return"".concat(e," ").concat(t," ").concat(i," ")}},{key:"DetaillDate",value:function(n){return o()(n).format("dddd, MMMM Do YYYY")}}]),n}();s.pipeDate=function(n){var e=n.split("T")[0];return o()(e).format("DD-MM-YYYY")},e.Z=s}}]);
//# sourceMappingURL=3705.d6fa2f02.chunk.js.map