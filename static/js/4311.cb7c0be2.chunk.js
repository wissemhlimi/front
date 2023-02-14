"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[4311],{10255:function(e,n,t){var s=t(72791),i=t(91523),r=t(72040),a=t(94233),o=t(57967),l=t(23140),c=t(25930),d=t(80184);n.Z=function(){var e=(0,a.I0)(),n=((0,a.v9)(l.Z.selectLoadingVenir),(0,a.v9)(l.Z.selectRowsVenir));return console.log("selectRowsVenir",n),(0,s.useEffect)((function(){e(o.Z.evenementvenir())}),[]),(0,d.jsx)(d.Fragment,{children:n.length>0?(0,d.jsx)("div",{className:"evenment__venir",children:(0,d.jsxs)("div",{className:"venir",children:[(0,d.jsxs)("div",{className:"archieve__header",children:[(0,d.jsx)("h2",{children:(0,c.ag)("common.evenementVenir")}),(0,d.jsx)("div",{className:"satestique__bar"})]}),(0,d.jsx)("div",{className:"venir__content",children:n.map((function(e,n){return(0,d.jsx)(r.Z,{data:e})}))}),(0,d.jsx)(i.rU,{to:"/detaill/Evenement/Venir",children:(0,d.jsx)("div",{className:"plus__button",children:(0,c.ag)("common.voirPlus")})})]})}):null})}},72040:function(e,n,t){t(72791);var s=t(16856),i=t(91523),r=t(85785),a=t(32771),o=t(4726),l=t(80184);n.Z=function(e){var n=e.data;return(0,l.jsxs)("div",{children:[(0,l.jsx)(i.rU,{to:"/Evenements/".concat(n._id),children:(0,l.jsxs)("div",{className:"contentVenir__top",children:[(0,l.jsx)(a.Z,{width:370,height:220,src:n.supports.length>0?n.supports[0].downloadUrl:"",alt:""}),(0,l.jsxs)("div",{className:"venir__clendar",children:[(0,l.jsx)("div",{className:"calendar__number",children:r.Z.Day(n.date)}),(0,l.jsx)("div",{className:"calendar__months",children:r.Z.Month(n.date)})]})]})}),(0,l.jsxs)("div",{className:"contentVenir__bottom",children:[(0,l.jsxs)("div",{className:"venir__localistaion",children:[(0,l.jsx)(s.$0r,{}),o.Z.TransEmplacement(n)]}),(0,l.jsx)("div",{className:"venir__description",children:o.Z.Trans("title",n)})]})]})}},27620:function(e,n,t){t.r(n),t.d(n,{default:function(){return D}});var s=t(30168),i=t(29439),r=t(72791),a=t(8765),o=t(25930),l=t(78820),c=t(16856),d=(t(62431),t(90603)),u=t(49123),m=((0,u.Z)(),(0,u.Z)(),(0,u.Z)(),(0,u.Z)(),(0,u.Z)(),[{title:"Criminalization of refugees: the dark side of EU and UNHCR policies..."},{title:"En Tunisie, r\xe9fugi\xe9.e.s et demandeur.se.s d\u2019asile abandonn\xe9s dans une situation humanitaire critique"},{title:"Enjeux de gouvernance des for\xeats urbaines. Cas du parc urbain Farhat Hached \xe0 Rad\xe8s"},{title:"Zones urbaines et foresti\xe8res semi-urbaines. Quelle relation ?"}]),v=t(32771),h=t(80184);var f=function(e){var n=e.slider,t=e.rows,s=(0,r.useState)(1),a=(0,i.Z)(s,2),o=a[0],l=a[1],c=Number(e.width),u=Number(e.height);return(0,h.jsxs)("div",{className:"container-slider",style:{width:c,height:u},children:[t.map((function(t,s){var i;return(0,h.jsxs)("div",{className:o===s+1?"slide active-anim":"slide",children:[(0,h.jsx)(v.Z,{width:c,height:u,src:(null===t||void 0===t||null===(i=t.supports[0])||void 0===i?void 0:i.downloadUrl)||void 0,alt:n}),e.render(t)]},t.id)})),(0,h.jsx)(d.Z,{moveSlide:function(){o!==t.length?l(o+1):o===t.length&&l(1)},direction:"next"}),(0,h.jsx)(d.Z,{moveSlide:function(){1!==o?l(o-1):1===o&&l(t.length)},direction:"prev"}),(null===e||void 0===e?void 0:e.showDots)&&(0,h.jsx)("div",{className:"container-dots",children:e.rows.map((function(e,n){return(0,h.jsx)("div",{onClick:function(){return function(e){l(e)}(n+1)},className:o===n+1?"dot active":"dot"})}))}),!(null!==e&&void 0!==e&&e.showDots)&&(0,h.jsx)("div",{className:"content__sliderBottom",children:m.map((function(n,t){return e.bottomrender(n,t,o)}))})]})},x=t(10255),p=t(72040),j=t(94233),g=t(57967),_=t(23140),Z=t(91523);var N,b=function(){(0,j.v9)(_.Z.selectLoadingPasse);var e=(0,j.v9)(_.Z.selectRowsPasse),n=(0,j.I0)();return(0,r.useEffect)((function(){n(g.Z.evenementpasse())}),[]),(0,h.jsx)(h.Fragment,{children:e.length>0?(0,h.jsx)("div",{className:"evenment__passe",children:(0,h.jsxs)("div",{className:"passe",children:[(0,h.jsxs)("div",{className:"archieve__header",children:[(0,h.jsx)("h2",{children:(0,o.ag)("common.evenementPasse")}),(0,h.jsx)("div",{className:"satestique__bar"})]}),(0,h.jsx)("div",{className:"passe__content",children:e.map((function(e,n){return(0,h.jsx)(p.Z,{data:e})}))}),(0,h.jsx)(Z.rU,{to:"/detaill/Evenement/Passe",children:(0,h.jsx)("div",{className:"plus__button",children:(0,o.ag)("common.voirPlus")})})]})}):null})},y=t(85785),w=t(4726),E=t(86538),k=t(72239);var D=function(){var e=(0,j.I0)(),n=((0,j.v9)(_.Z.selectRows),(0,j.v9)(_.Z.selectRows));(0,r.useEffect)((function(){e(g.Z.doFetch())}),[]);var t=localStorage.getItem("language"),s=(0,r.useState)(""),d=(0,i.Z)(s,2),u=d[0],m=d[1];return(0,r.useEffect)((function(){k.Z.list("","","","").then((function(e){"fr"===t&&m(e.rows[0].eventFR),"ar"===t&&m(e.rows[0].eventAR),"en"===t&&m(e.rows[0].eventFR)}))}),[]),(0,h.jsxs)("div",{className:"__evenement",children:[(0,h.jsx)(a.Z,{title:(0,o.ag)("common.Ev\xe8nements"),items:[[(0,o.ag)("app.title"),"/"],[(0,o.ag)("common.Ev\xe8nements")]]}),(0,h.jsx)(M,{children:(0,h.jsx)("p",{children:u})}),(0,h.jsxs)("div",{className:"page__evenement",children:[(0,h.jsx)("div",{className:"evenment__header",children:(0,h.jsx)(f,{rows:n,height:404,width:1170,label:"slider",render:function(e){return(0,h.jsx)(Z.rU,{to:"/Evenements/".concat(e.id),children:(0,h.jsxs)("div",{className:"evenement__message",children:[(0,h.jsxs)("div",{className:"messageEvenement__left",children:[(0,h.jsx)("div",{className:"left__number",children:y.Z.Day(null===e||void 0===e?void 0:e.date)}),(0,h.jsx)("div",{className:"left__months",children:y.Z.Month(null===e||void 0===e?void 0:e.date)})]}),(0,h.jsxs)("div",{className:"messageEvenement__right",children:[(0,h.jsx)("div",{className:"messageEvenement__title",children:w.Z.Trans("title",e)}),(0,h.jsxs)("div",{className:"messageEvenement__description",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)(l.xHR,{}),y.Z.date(null===e||void 0===e?void 0:e.date)]}),(0,h.jsxs)("div",{children:[(0,h.jsx)(c.$0r,{}),w.Z.TransEmplacement(e)]})]})]})]})})},showDots:!0})}),(0,h.jsx)(x.Z,{}),(0,h.jsx)(b,{})]})]})},M=E.ZP.div(N||(N=(0,s.Z)(["\n  color: var(--violet);\n  font-size: 1rem;\n  font-weight: 400;\n  text-align: justify;\n  margin: 8px 0 10px 210px;\n"])))},8765:function(e,n,t){var s,i=t(30168),r=(t(72791),t(91523)),a=t(86538),o=t(80184),l=a.ZP.div(s||(s=(0,i.Z)(['\n\tmargin: 28px 0 10px 0;\n\t.breadcrumb {\n\t\twidth: 100%;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tbackground-color: transparent;\n\t}\n\tol {\n\t\tdisplay: flex;\n\t}\n\tli {\n\t\tfont-family: "Proxima Nova";\n\t\tfont-style: normal;\n\t\tfont-weight: 400;\n\t\tfont-size: 14px;\n\t\tline-height: 25px;\n\t}\n\t.breadcrump__nav {\n\t\tmargin: auto;\n\t\tleft: 0;\n\t\tdisplay: flex;\n\t\tmax-width: 1170px;\n\t\tflex-direction: column;\n\t}\n\n\t.breadcrumb-item:not(.active) a {\n\t\tcolor: rgba(0, 0, 0, 0.45);\n\t}\n\n\th2 {\n\t\tfont-family: "Bebas Neue Pro";\n\t\tfont-style: normal;\n\t\tfont-weight: 700;\n\t\tfont-size: 47px;\n\t\tline-height: 39px;\n\t}\n'])));n.Z=function(e){var n=function(e){return e.length>1};return(0,o.jsx)(l,{children:(0,o.jsxs)("div",{className:"breadcrump__nav",children:[(0,o.jsx)("div",{children:(0,o.jsx)("h2",{children:e.title})}),(0,o.jsx)("div",{children:(0,o.jsx)("ol",{className:"breadcrumb",children:e.items.map((function(t,s){return(0,o.jsx)("li",{className:"breadcrumb-item ".concat(e.items.length-1===s?"active":""),children:n(t)?(0,o.jsxs)(r.rU,{to:t[1],children:[" ",t[0]," ",t[1]]}):t[0]},t[0])}))})})]})})}},85785:function(e,n,t){var s=t(15671),i=t(43144),r=t(72426),a=t.n(r),o=function(){function e(){(0,s.Z)(this,e)}return(0,i.Z)(e,null,[{key:"Hour",value:function(e){return a()(e).format("hh:mm a")}},{key:"HourMinute",value:function(e){return a()(e).format("DD-MM-YYYY HH:mm")}},{key:"fullDate",value:function(e){return a()(e).format("DD-MM-YYYY")}},{key:"Day",value:function(e){return a()(e).format("D")}},{key:"Month",value:function(e){return a()(e).format("MMMM")}},{key:"Year",value:function(e){return a()(e).format("y")}},{key:"date",value:function(e){var n=this.Day(e),t=this.Month(e),s=this.Year(e);return"".concat(n," ").concat(t," ").concat(s," ")}},{key:"DetaillDate",value:function(e){return a()(e).format("dddd, MMMM Do YYYY")}}]),e}();o.pipeDate=function(e){var n=e.split("T")[0];return a()(n).format("L")},n.Z=o},32771:function(e,n,t){t(72791);var s=t(87087),i=(t(19713),t(80184));n.Z=function(e){var n=e.src,t=e.width,r=e.height,a=e.alt,o=e.caption,l=e.key,c=n||"https://placehold.jp/".concat(t,"x").concat(r,".png");return(0,i.jsx)(s.LazyLoadImage,{alt:a,height:r,src:c,width:t,effect:"blur",caption:o},l)}},90603:function(e,n,t){t.d(n,{Z:function(){return r}});t(72791),t(62431);var s=t(27314),i=t(80184);function r(e){var n=e.direction,t=e.moveSlide;return(0,i.jsx)("button",{onClick:t,className:"next"===n?"btn-slide next":"btn-slide prev",children:(0,i.jsx)("img",{src:"next"===n?s.rz:s.VJ,alt:"arrow"})})}},49123:function(e,n,t){t.d(n,{Z:function(){return c}});var s="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),i=new Uint8Array(16);function r(){if(!s)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return s(i)}for(var a=[],o=0;o<256;++o)a[o]=(o+256).toString(16).substr(1);var l=function(e,n){var t=n||0,s=a;return[s[e[t++]],s[e[t++]],s[e[t++]],s[e[t++]],"-",s[e[t++]],s[e[t++]],"-",s[e[t++]],s[e[t++]],"-",s[e[t++]],s[e[t++]],"-",s[e[t++]],s[e[t++]],s[e[t++]],s[e[t++]],s[e[t++]],s[e[t++]]].join("")};var c=function(e,n,t){var s=n&&t||0;"string"==typeof e&&(n="binary"===e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||r)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,n)for(var a=0;a<16;++a)n[s+a]=i[a];return n||l(i)}},62431:function(){}}]);
//# sourceMappingURL=4311.cb7c0be2.chunk.js.map