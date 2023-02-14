"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[5926,9540],{54065:function(n,t,e){e.d(t,{Z:function(){return u}});var r=e(74165),i=e(15861),o=e(15671),a=e(43144),l=e(27415),c=e(56856),s=e(72426),d=e.n(s),u=function(){function n(){(0,o.Z)(this,n)}return(0,a.Z)(n,null,[{key:"getLatestMediatheques",value:function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var t,e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.Z.get(),n.next=3,l.Z.get("/tenant/".concat(t,"/mediatique/"));case 3:return e=n.sent,n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},{key:"getMediathequesBasedOnType",value:function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){var e,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=c.Z.get(),n.next=3,l.Z.get("/tenant/".concat(e,"/mediatique/").concat(t));case 3:return i=n.sent,n.abrupt("return",i.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},{key:"getOneMediatheque",value:function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){var e,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=c.Z.get(),n.next=3,l.Z.get("/tenant/".concat(e,"/mediatique/").concat(t));case 3:return i=n.sent,n.abrupt("return",i.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},{key:"pipeDate",value:function(n){return d()(n).format("L")}},{key:"getDate",value:function(n){return null===n||void 0===n?void 0:n.split("T")[0]}},{key:"getTime",value:function(n){return null===n||void 0===n?void 0:n.split("T")[1]}}]),n}()},41026:function(n,t,e){e.r(t),e.d(t,{default:function(){return A}});var r,i=e(30168),o=e(1413),a=e(29439),l=e(72791),c=e(79271),s=e(86538),d=e(54065),u=e(76780),h=e(2579),f=(e(85862),e(4726)),p=e(25930),m=e(39846),g=e(93127),w=e(45904),v=e(56720),y=e(32028),x=e(3582),b=e(72426),Z=e.n(b),j=e(80184);function k(n){var t=n.entity;n.user,n.userIsLoading;return(0,j.jsxs)(P,{children:[(0,j.jsx)("span",{className:"categoryBadge",children:(0,p.ag)("entities.mediatique.enumerators.type.".concat(t.type))}),(0,j.jsx)("h1",{children:f.Z.Trans("title",t)}),(0,j.jsxs)("div",{className:"detail__author",style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,j.jsx)("div",{className:"author__left",children:(0,j.jsx)("div",{className:"left__author__date",children:Z()(null===t||void 0===t?void 0:t.updatedAt).format("L")})}),(0,j.jsxs)("div",{className:"detaillEvenement__socialMedia",children:[(0,j.jsxs)("div",{className:"socialMedia__title",children:[(0,p.ag)("common.Partager")," :"]}),(0,j.jsxs)("div",{className:"detaillEvenement__socialMedia",children:[(0,j.jsx)("div",{children:(0,j.jsx)(m.Z,{url:window.location.href,children:(0,j.jsx)(g.Z,{size:35,round:!0})})}),(0,j.jsx)("div",{children:(0,j.jsx)(w.Z,{url:window.location.href,children:(0,j.jsx)(v.Z,{size:35,round:!0})})}),(0,j.jsx)("div",{children:(0,j.jsx)(y.Z,{url:window.location.href,children:(0,j.jsx)(x.Z,{size:35,round:!0})})})]})]})]})]})}var _,N,O,P=s.ZP.section(r||(r=(0,i.Z)(['\n  .categoryBadge {\n    background: #f8d7da;\n    border-radius: 3px;\n    color: var(--dark--red);\n    padding: 0.4rem 0.5rem;\n    font-size: 12px;\n    font-family: "Proxima Nova";\n  }\n  .author__left {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    font-family: "Proxima Nova";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 25px;\n    color: #4f4f4f;\n  }\n\n  h1 {\n    font-family: "Bebas Neue Pro";\n    font-style: normal;\n    font-weight: 700;\n    font-size: 40px;\n    line-height: 43px;\n    text-transform: uppercase;\n    color: var(--violet);\n    margin: 1rem 0;\n  }\n\n  @media (max-width: 1171px) {\n    h1 {\n      font-size: clamp(25px, 5vw, 40px);\n      line-height: 1.2;\n    }\n  }\n  .detaillEvenement__socialMedia {\n    display: flex;\n    padding: 0;\n    align-items: center;\n    column-gap: 24px;\n  }\n  @media (max-width: 767px) {\n    width: 100%;\n    padding: 0 0.5rem;\n  }\n']))),C=e(24112),S=e(9997),z=e(48282);e(78677);function E(n){var t,e,r,i=n.entity,o=n.data,a=localStorage.getItem("language");return(0,j.jsxs)(q,{children:[(null===(t=i.photos)||void 0===t?void 0:t.length)>0&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(S.Z,{children:(0,j.jsx)(z.tv,{options:{perPage:1,perMove:1,pagination:!0,wheel:!1,direction:"ar"===a?"rtl":"ltr"},className:"splide",children:null===o||void 0===o?void 0:o.map((function(n,t){return(0,j.jsx)(z.jw,{className:"horizontalPlayer",style:{background:"linear-gradient(115.19deg, #2B2840 28.27%, rgba(43, 40, 64, 0) 68.81%), linear-gradient(0deg, rgba(43, 40, 64, 0.7), rgba(43, 40, 64, 0.7)), url("+n+")"},children:(0,j.jsx)("img",{style:{height:507},src:n})},t)}))})}),(0,j.jsx)("hr",{})]}),(null===(e=i.videos)||void 0===e?void 0:e.length)>0&&(0,j.jsxs)("div",{children:[(0,j.jsx)(B,{children:i.videos.map((function(n){return(0,j.jsx)(C.Z,{width:900,url:n.downloadUrl,loop:!0,controls:!0,className:"video__player"},n._id)}))}),(0,j.jsx)("hr",{})]}),(0,j.jsxs)("div",{className:"description__detaillEvenement",children:[f.Z.Trans("description",i),(0,j.jsx)("hr",{})]}),i.link?(0,j.jsxs)("div",{className:"detail__author",children:[(0,j.jsx)("h4",{children:(0,j.jsx)("a",{href:i.link,children:(0,p.ag)("entities.mediatique.visitLink")})}),(0,j.jsx)("hr",{})]}):null,(null===(r=i.attachements)||void 0===r?void 0:r.length)>0?(0,j.jsx)("div",{children:(0,j.jsx)("a",{href:null===i||void 0===i?void 0:i.attachements[0].downloadUrl,download:!0,style:{color:"#9a0000"},children:(0,p.ag)("telecharger")})}):null]})}var T,q=s.ZP.section(_||(_=(0,i.Z)(['\n  margin: 2rem 0;\n  p {\n    text-align: justify;\n    color: var(--gray2);\n    font-family: "Proxima Nova";\n    font-style: normal;\n    font-weight: 700;\n    font-size: 16px;\n    line-height: 25px;\n  }\n\n  .video__player {\n    max-width: 900 !important;\n    max-height: 350px !important;\n    flex: 1 !important;\n  }\n  .hTKJIQ {\n    margin: -5rem 0 3rem 0 !important;\n  }\n  @media (max-width: 767px) {\n    width: 100%;\n    padding: 0 0.5rem;\n  }\n']))),B=s.ZP.section(N||(N=(0,i.Z)(["\n  margin-top: 2rem;\n  margin: 1rem 0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  audio {\n    height: 70px !important;\n  }\n\n  @media (max-width: 767px) {\n    video {\n      width: 90% !important;\n    }\n  }\n"]))),M=(s.ZP.section(O||(O=(0,i.Z)(['\n  margin-top: 1rem;\n\n  .gridSection {\n    width: 100%;\n    display: block;\n    &:before {\n      display: block;\n      font-family: "Proxima Nova";\n      font-style: normal;\n      font-size: 1rem;\n      margin-bottom: 1rem;\n    }\n  }\n\n  img {\n    width: 100%;\n  }\n']))),e(8765));function A(){var n=(0,c.UO)().entity_id,t=(0,l.useState)({}),e=(0,a.Z)(t,2),r=e[0],i=e[1],s=(0,l.useState)(!0),f=(0,a.Z)(s,2),m=f[0],g=f[1],w=(0,l.useState)([]),v=(0,a.Z)(w,2),y=v[0],x=v[1],b=(0,l.useState)({}),Z=(0,a.Z)(b,2),_=Z[0],N=Z[1],O=(0,l.useState)(!0),P=(0,a.Z)(O,2),C=P[0],S=P[1];return(0,l.useEffect)((function(){!function(n){d.Z.getOneMediatheque(n).then((function(n){var t;i((function(t){return(0,o.Z)((0,o.Z)({},t),n)})),g(!1),null===(t=n.photos)||void 0===t||t.map((function(n){x((function(t){return t.concat(n.downloadUrl)}))})),u.Z.getTenant(n.tenant).then((function(n){N((function(t){return(0,o.Z)((0,o.Z)({},t),n)})),S(!1)}))}))}(n)}),[]),(0,j.jsx)("section",{children:(0,j.jsxs)("section",{className:"wideContent",children:[(0,j.jsx)(M.Z,{items:[[(0,p.ag)("dashboard.menu"),"/"],[(0,p.ag)("entities.mediatique.label")]]}),(0,j.jsx)(I,{children:(0,j.jsxs)("section",{className:"rightSection",children:[(0,j.jsx)(k,{entity:r,user:_,userIsLoading:C}),m?(0,j.jsx)(h.Z,{height:500}):(0,j.jsx)(E,{entity:r,data:y})]})})]})})}var I=s.ZP.section(T||(T=(0,i.Z)(["\n\twidth: var(--cerntered-content);\n\theight: auto;\n\tdisplay: flex;\n\talign-items: flex-start;\n\tjustify-content: space-between;\n\tmargin: 1rem auto;\n\n\t@media (max-width: 1171px) {\n\t\twidth: 100%;\n\t\tmargin: 120px 0 10px;\n\t\twhite-space: break-spaces;\n\t\toverflow-x: hidden;\n\t}\n\n\t.rightSection {\n\t\twidth: 100%;\n\t\t/* margin-right: 2.5rem; */\n\n\t\t.socials {\n\t\t\twidth: 250px;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-between;\n\t\t\talign-items: center;\n\n\t\t\tbutton {\n\t\t\t\tbackground-color: transparent;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tcolor: var(--violet);\n\t\t\t\tfont-size: 1.8rem;\n\t\t\t}\n\t\t}\n\t}\n"])))},9997:function(n,t,e){var r,i=e(30168),o=e(86538).ZP.section(r||(r=(0,i.Z)(['\n  /* color: #fff; */\n  width: var(--cerntered-content);\n  height: 507px;\n  background-color: #000;\n\n  button {\n    padding: 0 !important ;\n  }\n\n  .splide {\n    /* position: relative; */\n    /* background-color: yellow; */\n\n    .splide__pagination__page {\n      height: 10px;\n      width: 10px;\n      border-radius: 0;\n    }\n\n    .splide__arrow {\n      height: 35px;\n      width: 35px;\n      position: absolute;\n      bottom: 0;\n\n      background-color: rgba(255, 255, 255, 0.3);\n      border: 1px solid var(--gray3);\n      border-radius: 0.2rem;\n\n      svg {\n        fill: #000;\n      }\n    }\n  }\n\n  .horizontalPlayer {\n    width: 100% !important;\n    height: 507px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-size: cover;\n    background-position: center;\n\n    section {\n      display: grid;\n      grid-template-columns: 467px 500px;\n      place-items: center;\n      column-gap: 31px;\n\n      .cardThumbnail {\n        width: 467px !important;\n        height: 350px;\n        background-size: cover;\n        background-position: center;\n        filter: drop-shadow(0px 9px 14px rgba(0, 0, 0, 0.1));\n      }\n      .hasNoThumbnail {\n        background-image: url("https://placehold.jp/467x350.png");\n      }\n\n      .textContent {\n        width: 500px;\n        font-family: "Bebas Neue Pro";\n        line-height: 1.2;\n        text-align: left;\n        color: #fff;\n        .horizontalPlayerTitle {\n          border: 1px color #000;\n\n          word-break: break-word;\n          font-family: "Bebas Neue Pro";\n          font-style: normal;\n          font-weight: 700;\n          font-size: 40px;\n          line-height: 43px;\n          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n        }\n\n        .horizontalPlayerDescription {\n          font-family: "Proxima Nova";\n          font-style: normal;\n          font-weight: 400;\n          font-size: 14px;\n          line-height: 22px;\n        }\n      }\n\n      .dateAndType {\n        display: block;\n        margin-bottom: 8px;\n\n        span {\n          color: #fff;\n        }\n\n        .contentType {\n          width: 100px;\n          height: 30px;\n          border: 1px solid #e1011a;\n          border-radius: 3px;\n          margin-bottom: 1rem;\n          font-family: "Proxima Nova";\n          font-style: normal;\n          font-weight: 400;\n          font-size: 15px;\n          line-height: 15px;\n          color: red;\n          padding: 0.3rem 0.5rem;\n          display: flex;\n          align-items: center;\n          justify-content: space-evenly;\n        }\n\n        .contentDate {\n          font-family: "Proxima Nova";\n          font-style: normal;\n          font-weight: 400;\n          font-size: 12px;\n          line-height: 15px;\n          color: #ffffff;\n        }\n      }\n    }\n  }\n\n  @media (max-width: 767px) {\n    display: none;\n  }\n'])));t.Z=o},8765:function(n,t,e){var r,i=e(30168),o=(e(72791),e(91523)),a=e(86538),l=e(80184),c=a.ZP.div(r||(r=(0,i.Z)(['\n\tmargin: 28px 0 10px 0;\n\t.breadcrumb {\n\t\twidth: 100%;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tbackground-color: transparent;\n\t}\n\tol {\n\t\tdisplay: flex;\n\t}\n\tli {\n\t\tfont-family: "Proxima Nova";\n\t\tfont-style: normal;\n\t\tfont-weight: 400;\n\t\tfont-size: 14px;\n\t\tline-height: 25px;\n\t}\n\t.breadcrump__nav {\n\t\tmargin: auto;\n\t\tleft: 0;\n\t\tdisplay: flex;\n\t\tmax-width: 1170px;\n\t\tflex-direction: column;\n\t}\n\n\t.breadcrumb-item:not(.active) a {\n\t\tcolor: rgba(0, 0, 0, 0.45);\n\t}\n\n\th2 {\n\t\tfont-family: "Bebas Neue Pro";\n\t\tfont-style: normal;\n\t\tfont-weight: 700;\n\t\tfont-size: 47px;\n\t\tline-height: 39px;\n\t}\n'])));t.Z=function(n){var t=function(n){return n.length>1};return(0,l.jsx)(c,{children:(0,l.jsxs)("div",{className:"breadcrump__nav",children:[(0,l.jsx)("div",{children:(0,l.jsx)("h2",{children:n.title})}),(0,l.jsx)("div",{children:(0,l.jsx)("ol",{className:"breadcrumb",children:n.items.map((function(e,r){return(0,l.jsx)("li",{className:"breadcrumb-item ".concat(n.items.length-1===r?"active":""),children:t(e)?(0,l.jsxs)(o.rU,{to:e[1],children:[" ",e[0]," ",e[1]]}):e[0]},e[0])}))})})]})})}},39846:function(n,t,e){var r=e(11583),i=e(82020);var o=(0,e(61217).Z)("facebook",(function(n,t){var e=t.quote,o=t.hashtag;return(0,r.Z)(n,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+(0,i.Z)({u:n,quote:e,hashtag:o})}),(function(n){return{quote:n.quote,hashtag:n.hashtag}}),{windowWidth:550,windowHeight:400});t.Z=o},3582:function(n,t,e){var r=(0,e(29047).Z)({color:"#007fb1",networkName:"linkedin",path:"M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"});t.Z=r},32028:function(n,t,e){var r=e(11583),i=e(82020);var o=(0,e(61217).Z)("linkedin",(function(n,t){var e=t.title,o=t.summary,a=t.source;return(0,r.Z)(n,"linkedin.url"),"https://linkedin.com/shareArticle"+(0,i.Z)({url:n,mini:"true",title:e,summary:o,source:a})}),(function(n){return{title:n.title,summary:n.summary,source:n.source}}),{windowWidth:750,windowHeight:600});t.Z=o},56720:function(n,t,e){var r=(0,e(29047).Z)({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});t.Z=r},45904:function(n,t,e){var r=e(11583),i=e(82020);var o=(0,e(61217).Z)("twitter",(function(n,t){var e=t.title,o=t.via,a=t.hashtags,l=void 0===a?[]:a,c=t.related,s=void 0===c?[]:c;return(0,r.Z)(n,"twitter.url"),(0,r.Z)(Array.isArray(l),"twitter.hashtags is not an array"),(0,r.Z)(Array.isArray(s),"twitter.related is not an array"),"https://twitter.com/share"+(0,i.Z)({url:n,text:e,via:o,hashtags:l.length>0?l.join(","):void 0,related:s.length>0?s.join(","):void 0})}),(function(n){return{hashtags:n.hashtags,title:n.title,via:n.via,related:n.related}}),{windowWidth:550,windowHeight:400});t.Z=o},61217:function(n,t,e){e.d(t,{Z:function(){return v}});var r=e(72791),i=e(81694),o=e.n(i),a=function(){var n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])},n(t,e)};return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),l=function(){return l=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var i in t=arguments[e])Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n},l.apply(this,arguments)},c=function(n,t,e,r){return new(e||(e=Promise))((function(i,o){function a(n){try{c(r.next(n))}catch(t){o(t)}}function l(n){try{c(r.throw(n))}catch(t){o(t)}}function c(n){var t;n.done?i(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(a,l)}c((r=r.apply(n,t||[])).next())}))},s=function(n,t){var e,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(n,a)}catch(l){o=[6,l],r=0}finally{e=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},d=function(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(n);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(e[r[i]]=n[r[i]])}return e},u=function(n){return!!n&&("object"===typeof n||"function"===typeof n)&&"function"===typeof n.then},h=function(n,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-n/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},f=function(n,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-n)/2}};function p(n,t,e){var r=t.height,i=t.width,o=d(t,["height","width"]),a=l({height:r,width:i,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},o),c=window.open(n,"",Object.keys(a).map((function(n){return"".concat(n,"=").concat(a[n])})).join(", "));if(e)var s=window.setInterval((function(){try{(null===c||c.closed)&&(window.clearInterval(s),e(c))}catch(n){console.error(n)}}),1e3);return c}var m=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.openShareDialog=function(n){var e=t.props,r=e.onShareWindowClose,i=e.windowHeight,o=void 0===i?400:i,a=e.windowPosition,c=void 0===a?"windowCenter":a,s=e.windowWidth,d=void 0===s?550:s;p(n,l({height:o,width:d},"windowCenter"===c?h(d,o):f(d,o)),r)},t.handleClick=function(n){return c(t,void 0,void 0,(function(){var t,e,r,i,o,a,l,c,d,h;return s(this,(function(s){switch(s.label){case 0:return t=this.props,e=t.beforeOnClick,r=t.disabled,i=t.networkLink,o=t.onClick,a=t.url,l=t.openShareDialogOnClick,c=t.opts,d=i(a,c),r?[2]:(n.preventDefault(),e?(h=e(),u(h)?[4,h]:[3,2]):[3,2]);case 1:s.sent(),s.label=2;case 2:return l&&this.openShareDialog(d),o&&o(n,d),[2]}}))}))},t}return a(t,n),t.prototype.render=function(){var n=this.props,t=(n.beforeOnClick,n.children),e=n.className,i=n.disabled,a=n.disabledStyle,c=n.forwardedRef,s=(n.networkLink,n.networkName),u=(n.onShareWindowClose,n.openShareDialogOnClick,n.opts,n.resetButtonStyle),h=n.style,f=(n.url,n.windowHeight,n.windowPosition,n.windowWidth,d(n,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),p=o()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!i,disabled:!!i},e),m=l(l(u?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},h),i&&a);return r.createElement("button",l({},f,{"aria-label":f["aria-label"]||s,className:p,onClick:this.handleClick,ref:c,style:m}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(r.Component),g=m,w=function(){return w=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var i in t=arguments[e])Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n},w.apply(this,arguments)};var v=function(n,t,e,i){function o(o,a){var l=e(o),c=w({},o);return Object.keys(l).forEach((function(n){delete c[n]})),r.createElement(g,w({},i,c,{forwardedRef:a,networkName:n,networkLink:t,opts:e(o)}))}return o.displayName="ShareButton-".concat(n),(0,r.forwardRef)(o)}},11583:function(n,t,e){e.d(t,{Z:function(){return o}});var r=function(){var n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])},n(t,e)};return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),i=function(n){function t(t){var e=n.call(this,t)||this;return e.name="AssertionError",e}return r(t,n),t}(Error);function o(n,t){if(!n)throw new i(t)}},82020:function(n,t,e){function r(n){var t=Object.entries(n).filter((function(n){var t=n[1];return void 0!==t&&null!==t})).map((function(n){var t=n[0],e=n[1];return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(String(e)))}));return t.length>0?"?".concat(t.join("&")):""}e.d(t,{Z:function(){return r}})},85862:function(){},2579:function(n,t,e){e.d(t,{Z:function(){return s}});var r=e(29439),i=e(1413),o=e(45987),a=e(72791),l=["count","wrapper","className","containerClassName","containerTestId","circle","style"],c=a.createContext({});function s(n){for(var t,e,s,d=n.count,u=void 0===d?1:d,h=n.wrapper,f=n.className,p=n.containerClassName,m=n.containerTestId,g=n.circle,w=void 0!==g&&g,v=n.style,y=(0,o.Z)(n,l),x=a.useContext(c),b=(0,i.Z)({},y),Z=0,j=Object.entries(y);Z<j.length;Z++){var k=(0,r.Z)(j[Z],2),_=k[0];"undefined"===typeof k[1]&&delete b[_]}var N=(0,i.Z)((0,i.Z)((0,i.Z)({},x),b),{},{circle:w}),O=(0,i.Z)((0,i.Z)({},v),function(n){var t=n.baseColor,e=n.highlightColor,r=n.width,i=n.height,o=n.borderRadius,a=n.circle,l=n.direction,c=n.duration,s=n.enableAnimation,d=void 0===s||s,u={};return"rtl"===l&&(u["--animation-direction"]="reverse"),"number"===typeof c&&(u["--animation-duration"]="".concat(c,"s")),d||(u["--pseudo-element-display"]="none"),"string"!==typeof r&&"number"!==typeof r||(u.width=r),"string"!==typeof i&&"number"!==typeof i||(u.height=i),"string"!==typeof o&&"number"!==typeof o||(u.borderRadius=o),a&&(u.borderRadius="50%"),"undefined"!==typeof t&&(u["--base-color"]=t),"undefined"!==typeof e&&(u["--highlight-color"]=e),u}(N)),P="react-loading-skeleton";f&&(P+=" ".concat(f));for(var C=null!==(t=N.inline)&&void 0!==t&&t,S=[],z=Math.ceil(u),E=0;E<z;E++){var T=O;if(z>u&&E===z-1){var q=null!==(e=T.width)&&void 0!==e?e:"100%",B=u%1,M="number"===typeof q?q*B:"calc(".concat(q," * ").concat(B,")");T=(0,i.Z)((0,i.Z)({},T),{},{width:M})}var A=a.createElement("span",{className:P,style:T,key:E},"\u200c");C?S.push(A):S.push(a.createElement(a.Fragment,{key:E},A,a.createElement("br",null)))}return a.createElement("span",{className:p,"data-testid":m,"aria-live":"polite","aria-busy":null===(s=N.enableAnimation)||void 0===s||s},h?S.map((function(n,t){return a.createElement(h,{key:t},n)})):S)}}}]);
//# sourceMappingURL=5926.0b938667.chunk.js.map