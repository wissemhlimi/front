"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[4084],{54065:function(n,e,t){t.d(e,{Z:function(){return u}});var i=t(74165),r=t(15861),a=t(15671),o=t(43144),l=t(27415),s=t(56856),d=t(72426),c=t.n(d),u=function(){function n(){(0,a.Z)(this,n)}return(0,o.Z)(n,null,[{key:"list",value:function(){var n=(0,r.Z)((0,i.Z)().mark((function n(e,t,r,a){var o,d,c;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o={filter:e,orderBy:t,limit:r,offset:a},d=s.Z.get(),n.next=4,l.Z.get("/tenant/".concat(d,"/mediatique"),{params:o});case 4:return c=n.sent,n.abrupt("return",c.data);case 6:case"end":return n.stop()}}),n)})));return function(e,t,i,r){return n.apply(this,arguments)}}()},{key:"getOneMediatheque",value:function(){var n=(0,r.Z)((0,i.Z)().mark((function n(e){var t,r;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=s.Z.get(),n.next=3,l.Z.get("/tenant/".concat(t,"/mediatique/").concat(e));case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},{key:"pipeDate",value:function(n){return c()(n).format("DD-MM-YYYY")}},{key:"getDate",value:function(n){return null===n||void 0===n?void 0:n.split("T")[0]}},{key:"getTime",value:function(n){return null===n||void 0===n?void 0:n.split("T")[1]}}]),n}()},41026:function(n,e,t){t.r(e),t.d(e,{default:function(){return J}});var i,r=t(30168),a=t(1413),o=t(29439),l=t(72791),s=t(79271),d=t(86538),c=t(54065),u=t(76780),h=t(2579),p=(t(85862),t(74165)),m=t(15861),f=t(4726),x=t(25930),g=t(39846),v=t(93127),j=t(45904),y=t(56720),b=t(32028),w=t(3582),Z=t(72426),_=t.n(Z),N=t(35794),k=t(80740),P=t(92523),z=t(30589),S=t(23184),T=t(8240),C=t(94233),M=t(80184);function E(n){var e=n.entity,t=(n.user,n.userIsLoading,(0,C.I0)()),i=(0,C.v9)(z.Z.selectCurrentUser),r=(0,l.useState)(!1),s=(0,o.Z)(r,2),d=s[0],c=s[1];(0,l.useEffect)((function(){var n;i&&i.favorites&&(null===(n=i.favorites.mediatique)||void 0===n||n.map((function(n){n.id===(null===e||void 0===e?void 0:e.id)&&c(!0)})))}),[i,e]);var u=function(){var n=(0,m.Z)((0,p.Z)().mark((function n(e){var r;return(0,p.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i.favorites.mediatique.push(e),r=(0,a.Z)({},i),n.next=4,P.Z.updateProfile(r);case 4:t(T.Z.doRefreshCurrentUser()),c(!0);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,m.Z)((0,p.Z)().mark((function n(e){var r,o;return(0,p.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=0,i.favorites.mediatique.map((function(n,t){n.id!==e||(r=t)})),i.favorites.mediatique.splice(r,1),o=(0,a.Z)({},i),n.next=6,P.Z.updateProfile(o);case 6:t(T.Z.doRefreshCurrentUser()),c(!1);case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,M.jsxs)(B,{children:[(0,M.jsx)("span",{className:"categoryBadge",children:(0,x.ag)("entities.mediatique.enumerators.type.".concat(e.type))}),(0,M.jsx)("h1",{className:"h1",children:f.Z.Trans("title",e)}),(0,M.jsxs)("div",{className:"detail__author",style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,M.jsx)("div",{className:"author__left",children:(0,M.jsx)("div",{className:"left__author__date",children:_()(null===e||void 0===e?void 0:e.updatedAt).format("DD-MM-YYYY")})}),(0,M.jsxs)("div",{className:"detaillEvenement__socialMedia",children:[(0,M.jsxs)("div",{className:"socialMedia__title",children:[(0,x.ag)("common.Partager")," :"]}),(0,M.jsxs)("div",{className:"detaillEvenement__socialMedia",children:[(0,M.jsx)("div",{children:(0,M.jsx)(g.Z,{url:window.location.href,children:(0,M.jsx)(v.Z,{size:35,round:!0})})}),(0,M.jsx)("div",{children:(0,M.jsx)(j.Z,{url:window.location.href,children:(0,M.jsx)(y.Z,{size:35,round:!0})})}),(0,M.jsx)("div",{children:(0,M.jsx)(b.Z,{url:window.location.href,children:(0,M.jsx)(w.Z,{size:35,round:!0})})}),null!==i?(0,M.jsx)("div",{children:d?(0,M.jsx)(S.Z,{title:(0,x.ag)("common.unfavoris"),children:(0,M.jsx)(N.Z,{style:{color:"#e1011a",fontSize:35},onClick:function(){return h(e.id)}})}):(0,M.jsx)(S.Z,{title:(0,x.ag)("common.favoris"),children:(0,M.jsx)(k.Z,{style:{color:"#e1011a",fontSize:35},onClick:function(){return u(e.id)}})})}):null]})]})]})]})}var U,q,R,B=d.ZP.section(i||(i=(0,r.Z)(['\n  .categoryBadge {\n    background: #f8d7da;\n    border-radius: 3px;\n    color: var(--dark--red);\n    padding: 0.4rem 0.5rem;\n    font-size: 12px;\n    font-family: "Proxima Nova";\n  }\n  .author__left {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    font-family: "Proxima Nova";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 25px;\n    color: #4f4f4f;\n  }\n\n  h1 {\n    font-family: "Bebas Neue Pro";\n    font-style: normal;\n    font-weight: 700;\n    font-size: 40px;\n    line-height: 43px;\n    text-transform: uppercase;\n    color: var(--violet);\n    margin: 1rem 0;\n  }\n\n  @media (max-width: 1171px) {\n    h1 {\n      font-size: clamp(25px, 5vw, 40px);\n      line-height: 1.2;\n    }\n  }\n  .detaillEvenement__socialMedia {\n    display: flex;\n    padding: 0;\n    align-items: center;\n    column-gap: 24px;\n  }\n  @media (max-width: 767px) {\n    width: 100%;\n    padding: 0 0.5rem;\n  }\n']))),F=t(24112),I=t(9997),A=t(48282);t(78677);function D(n){var e,t,i,r,a,o,l,s,d,c=n.entity,u=n.data,h=localStorage.getItem("language");return(0,M.jsxs)(L,{children:["fr"===h?(0,M.jsxs)(M.Fragment,{children:[" ",(null===(e=c.photos)||void 0===e?void 0:e.length)>0&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(I.Z,{children:(0,M.jsx)(A.tv,{options:{perPage:1,perMove:1,pagination:!0,wheel:!1,direction:"ltr"},className:"splide",children:null===u||void 0===u?void 0:u.map((function(n,e){return(0,M.jsx)(A.jw,{className:"horizontalPlayer",style:{background:"linear-gradient(115.19deg, #2B2840 28.27%, rgba(43, 40, 64, 0) 68.81%), linear-gradient(0deg, rgba(43, 40, 64, 0.7), rgba(43, 40, 64, 0.7)), url("+n+")"},children:(0,M.jsx)("img",{style:{height:507},src:n})},e)}))})}),(0,M.jsx)("hr",{})]}),(0,M.jsx)("div",{className:"description__detaillEvenement",dangerouslySetInnerHTML:{__html:f.Z.Trans("description",c)}}),(null===(t=c.videos)||void 0===t?void 0:t.length)>0&&(0,M.jsxs)("div",{children:[(0,M.jsx)(H,{children:c.videos.map((function(n){return(0,M.jsx)(F.Z,{width:900,url:n.downloadUrl,loop:!0,controls:!0,className:"video__player"},n._id)}))}),(0,M.jsx)("hr",{})]})]}):"ar"===h?(0,M.jsxs)(M.Fragment,{children:[" ",(null===(i=c.photosAR)||void 0===i?void 0:i.length)>0&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(I.Z,{children:(0,M.jsx)(A.tv,{options:{perPage:1,perMove:1,pagination:!0,wheel:!1,direction:"rtl"},className:"splide",children:null===u||void 0===u?void 0:u.map((function(n,e){return(0,M.jsx)(A.jw,{className:"horizontalPlayer",style:{background:"linear-gradient(115.19deg, #2B2840 28.27%, rgba(43, 40, 64, 0) 68.81%), linear-gradient(0deg, rgba(43, 40, 64, 0.7), rgba(43, 40, 64, 0.7)), url("+n+")"},children:(0,M.jsx)("img",{style:{height:507},src:n})},e)}))})}),(0,M.jsx)("hr",{})]}),(0,M.jsx)("div",{className:"description__detaillEvenement",dangerouslySetInnerHTML:{__html:f.Z.Trans("description",c)}}),(null===(r=c.videosAR)||void 0===r?void 0:r.length)>0&&(0,M.jsxs)("div",{children:[(0,M.jsx)(H,{children:c.videosAR.map((function(n){return(0,M.jsx)(F.Z,{width:900,url:n.downloadUrl,loop:!0,controls:!0,className:"video__player"},n._id)}))}),(0,M.jsx)("hr",{})]})]}):(0,M.jsxs)(M.Fragment,{children:[(null===(a=c.photosEN)||void 0===a?void 0:a.length)>0&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(I.Z,{children:(0,M.jsx)(A.tv,{options:{perPage:1,perMove:1,pagination:!0,wheel:!1,direction:"ltr"},className:"splide",children:null===u||void 0===u?void 0:u.map((function(n,e){return(0,M.jsx)(A.jw,{className:"horizontalPlayer",style:{background:"linear-gradient(115.19deg, #2B2840 28.27%, rgba(43, 40, 64, 0) 68.81%), linear-gradient(0deg, rgba(43, 40, 64, 0.7), rgba(43, 40, 64, 0.7)), url("+n+")"},children:(0,M.jsx)("img",{style:{height:507},src:n})},e)}))})}),(0,M.jsx)("hr",{})]}),(0,M.jsx)("div",{className:"description__detaillEvenement",dangerouslySetInnerHTML:{__html:f.Z.Trans("description",c)}}),(null===(o=c.videosEN)||void 0===o?void 0:o.length)>0&&(0,M.jsxs)("div",{children:[(0,M.jsx)(H,{children:c.videosEN.map((function(n){return(0,M.jsx)(F.Z,{width:900,url:n.downloadUrl,loop:!0,controls:!0,className:"video__player"},n._id)}))}),(0,M.jsx)("hr",{})]})]}),c.link?(0,M.jsxs)("div",{className:"detail__author",children:[(0,M.jsx)("h4",{className:"h4",children:(0,M.jsx)("a",{href:c.link,target:"_blank",children:(0,x.ag)("entities.mediatique.visitLink")})}),(0,M.jsx)("hr",{})]}):null,"fr"===h?(0,M.jsxs)(M.Fragment,{children:[" ",(null===(l=c.attachements)||void 0===l?void 0:l.length)>0?(0,M.jsx)("div",{children:(0,M.jsx)("a",{href:null===c||void 0===c?void 0:c.attachementsFR[0].downloadUrl,download:!0,style:{color:"#fff",fontSize:20,border:"solid",borderRadius:"5px",backgroundColor:"#e1011a",borderColor:"#e1011a"},children:(0,x.ag)("telecharger")})}):null]}):"ar"===h?(0,M.jsxs)(M.Fragment,{children:[" ",(null===(s=c.attachementsAR)||void 0===s?void 0:s.length)>0?(0,M.jsx)("div",{children:(0,M.jsx)("a",{href:null===c||void 0===c?void 0:c.attachementsAR[0].downloadUrl,download:!0,style:{color:"#fff",fontSize:20,border:"solid",borderRadius:"5px",backgroundColor:"#e1011a",borderColor:"#e1011a"},children:(0,x.ag)("telecharger")})}):null]}):(0,M.jsxs)(M.Fragment,{children:[" ",(null===(d=c.attachementsEN)||void 0===d?void 0:d.length)>0?(0,M.jsx)("div",{children:(0,M.jsx)("a",{href:null===c||void 0===c?void 0:c.attachementsEN[0].downloadUrl,download:!0,style:{color:"#fff",fontSize:20,border:"solid",borderRadius:"5px",backgroundColor:"#e1011a",borderColor:"#e1011a"},children:(0,x.ag)("telecharger")})}):null]})]})}var Y,L=d.ZP.section(U||(U=(0,r.Z)(['\n  margin: 2rem 0;\n  p {\n    text-align: justify;\n    color: var(--gray2);\n    font-family: "Proxima Nova";\n    font-style: normal;\n    font-weight: 700;\n    font-size: 16px;\n    line-height: 25px;\n  }\n\n  .video__player {\n    max-width: 900 !important;\n    max-height: 350px !important;\n    flex: 1 !important;\n  }\n  .hTKJIQ {\n    margin: -5rem 0 3rem 0 !important;\n  }\n  @media (max-width: 767px) {\n    width: 100%;\n    padding: 0 0.5rem;\n  }\n']))),H=d.ZP.section(q||(q=(0,r.Z)(["\n  margin-top: 2rem;\n  margin: 1rem 0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  audio {\n    height: 70px !important;\n  }\n\n  @media (max-width: 767px) {\n    video {\n      width: 90% !important;\n    }\n  }\n"]))),O=(d.ZP.section(R||(R=(0,r.Z)(['\n  margin-top: 1rem;\n\n  .gridSection {\n    width: 100%;\n    display: block;\n    &:before {\n      display: block;\n      font-family: "Proxima Nova";\n      font-style: normal;\n      font-size: 1rem;\n      margin-bottom: 1rem;\n    }\n  }\n\n  img {\n    width: 100%;\n  }\n']))),t(8765));function J(){var n=(0,s.UO)().entity_id,e=(0,l.useState)({}),t=(0,o.Z)(e,2),i=t[0],r=t[1],d=(0,l.useState)(!0),p=(0,o.Z)(d,2),m=p[0],f=p[1],g=(0,l.useState)([]),v=(0,o.Z)(g,2),j=v[0],y=v[1],b=(0,l.useState)({}),w=(0,o.Z)(b,2),Z=w[0],_=w[1],N=(0,l.useState)(!0),k=(0,o.Z)(N,2),P=k[0],z=k[1],S=localStorage.getItem("language");return(0,l.useEffect)((function(){!function(n){c.Z.getOneMediatheque(n).then((function(n){var e,t,i;r((function(e){return(0,a.Z)((0,a.Z)({},e),n)})),f(!1),"fr"===S?null===(e=n.photos)||void 0===e||e.map((function(n){y((function(e){return e.concat(n.downloadUrl)}))})):"ar"===S?null===(t=n.photosAR)||void 0===t||t.map((function(n){y((function(e){return e.concat(n.downloadUrl)}))})):null===(i=n.photosEN)||void 0===i||i.map((function(n){y((function(e){return e.concat(n.downloadUrl)}))})),u.Z.getTenant(n.tenant).then((function(n){_((function(e){return(0,a.Z)((0,a.Z)({},e),n)})),z(!1)}))}))}(n)}),[]),(0,M.jsx)("section",{children:(0,M.jsxs)("section",{className:"wideContent",children:[(0,M.jsx)(O.Z,{title:(0,x.ag)("entities.mediatique.label"),items:[[(0,x.ag)("app.title"),"/"],[(0,x.ag)("entities.mediatique.label"),"/Mediatheque"]]}),(0,M.jsx)(K,{children:(0,M.jsxs)("section",{className:"rightSection",children:[(0,M.jsx)(E,{entity:i,user:Z,userIsLoading:P}),m?(0,M.jsx)(h.Z,{height:500}):(0,M.jsx)(D,{entity:i,data:j})]})})]})})}var K=d.ZP.section(Y||(Y=(0,r.Z)(["\n  width: var(--cerntered-content);\n  height: auto;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin: 1rem auto;\n\n  @media (max-width: 1171px) {\n    width: 100%;\n    margin: 120px 0 10px;\n    white-space: break-spaces;\n    overflow-x: hidden;\n  }\n\n  .rightSection {\n    width: 100%;\n    /* margin-right: 2.5rem; */\n\n    .socials {\n      width: 250px;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n\n      button {\n        background-color: transparent;\n        border-radius: 50%;\n        color: var(--violet);\n        font-size: 1.8rem;\n      }\n    }\n  }\n"])))},9997:function(n,e,t){var i,r=t(30168),a=t(60460),o=t(86538).ZP.section(i||(i=(0,r.Z)(["\n  /* color: #fff; */\n  width: var(--cerntered-content);\n  height: 507px;\n  background-color: #000;\n\n  button {\n    padding: 0 !important ;\n  }\n\n  .splide {\n    /* position: relative; */\n    /* background-color: yellow; */\n\n    .splide__pagination__page {\n      height: 10px;\n      width: 10px;\n      border-radius: 0;\n    }\n\n    .splide__arrow {\n      height: 35px;\n      width: 35px;\n      position: absolute;\n      bottom: 0;\n\n      background-color: rgba(255, 255, 255, 0.3);\n      border: 1px solid var(--gray3);\n      border-radius: 0.2rem;\n\n      svg {\n        fill: #000;\n      }\n    }\n  }\n\n  .horizontalPlayer {\n    width: 100% !important;\n    height: 507px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-size: cover;\n    background-position: center;\n\n    section {\n      display: grid;\n      grid-template-columns: 467px 500px;\n      place-items: center;\n      column-gap: 31px;\n\n      .cardThumbnail {\n        width: 467px !important;\n        height: 350px;\n        background-size: cover;\n        background-position: center;\n        filter: drop-shadow(0px 9px 14px rgba(0, 0, 0, 0.1));\n      }\n      .hasNoThumbnail {\n        background-image: url(",');\n      }\n\n      .textContent {\n        width: 500px;\n        font-family: "Bebas Neue Pro";\n        line-height: 1.2;\n        text-align: left;\n        color: #fff;\n        .horizontalPlayerTitle {\n          border: 1px color #000;\n\n          word-break: break-word;\n          font-family: "Bebas Neue Pro";\n          font-style: normal;\n          font-weight: 700;\n          font-size: 40px;\n          line-height: 43px;\n          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n        }\n\n        .horizontalPlayerDescription {\n          font-family: "Proxima Nova";\n          font-style: normal;\n          font-weight: 400;\n          font-size: 14px;\n          line-height: 22px;\n        }\n      }\n\n      .dateAndType {\n        display: block;\n        margin-bottom: 8px;\n\n        span {\n          color: #fff;\n        }\n\n        .contentType {\n          width: 100px;\n          height: 30px;\n          border: 1px solid #e1011a;\n          border-radius: 0.5rem;\n          margin-bottom: 1rem;\n          font-family: "Proxima Nova";\n          font-style: normal;\n          font-weight: 400;\n          font-size: 15px;\n          line-height: 15px;\n          color: red;\n          padding: 0.3rem 0.5rem;\n          display: flex;\n          align-items: center;\n          justify-content: space-evenly;\n        }\n\n        .contentDate {\n          font-family: "Proxima Nova";\n          font-style: normal;\n          font-weight: 400;\n          font-size: 12px;\n          line-height: 15px;\n          color: #ffffff;\n        }\n      }\n    }\n  }\n\n  @media (max-width: 767px) {\n    display: none;\n  }\n'])),a.T1);e.Z=o},8765:function(n,e,t){var i,r=t(30168),a=(t(72791),t(91523)),o=t(86538),l=t(80184),s=o.ZP.div(i||(i=(0,r.Z)(['\n  margin: 28px 0 10px 0;\n  .breadcrumb {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    background-color: transparent;\n  }\n  ol {\n    display: flex;\n  }\n  li {\n    font-family: "Proxima Nova";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 25px;\n  }\n  .breadcrump__nav {\n    margin: auto;\n    left: 0;\n    display: flex;\n    max-width: 1170px;\n    flex-direction: column;\n  }\n\n  .breadcrumb-item:not(.active) a {\n    color: rgba(0, 0, 0, 0.45);\n  }\n\n  h2 {\n    font-family: "Bebas Neue Pro";\n    font-style: normal;\n    font-weight: 700;\n    font-size: 47px;\n    line-height: 39px;\n  }\n'])));e.Z=function(n){var e=function(n){return n.length>1};return(0,l.jsx)(s,{children:(0,l.jsxs)("div",{className:"breadcrump__nav",children:[(0,l.jsx)("div",{children:(0,l.jsx)("h2",{className:"h2",children:n.title})}),(0,l.jsx)("div",{children:(0,l.jsx)("ol",{className:"breadcrumb",children:n.items.map((function(n,t){return(0,l.jsx)("li",{className:"breadcrumb-item liClass",children:e(n)?(0,l.jsxs)(a.rU,{to:n[1],children:[" ",n[0],"/"===n[1]?(0,l.jsx)(l.Fragment,{children:n[1]}):(0,l.jsx)("div",{style:{display:"none",marginBottom:0},children:n[1]})]}):n[0]},n[0])}))})})]})})}}}]);
//# sourceMappingURL=4084.ad58fc5f.chunk.js.map