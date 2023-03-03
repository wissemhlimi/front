"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[5353],{38658:function(n,e,r){r.d(e,{Z:function(){return h}});var t=r(29439),i=r(74165),a=r(15861),o=r(15671),l=r(43144),u=r(27530),s=r.n(u),d=r(25930),c=r(27415),f=r(49123),p=r(56856),m=r(74569),x=r.n(m),h=function(){function n(){(0,o.Z)(this,n)}return(0,l.Z)(n,null,[{key:"validate",value:function(n,e){if(e){if(e.image&&!n.type.startsWith("image"))throw new Error((0,d.ag)("fileUploader.image"));if(e.storage.maxSizeInBytes&&n.size>e.storage.maxSizeInBytes)throw new Error((0,d.ag)("fileUploader.size",s()(e.storage.maxSizeInBytes)));var r=g(n.name);if(e.formats&&!e.formats.includes(r))throw new Error((0,d.ag)("fileUploader.formats",e.formats.join(", ")))}}},{key:"upload",value:function(){var n=(0,a.Z)((0,i.Z)().mark((function n(e,r){var t,a,o,l,u,s,d;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:n.prev=0,this.validate(e,r),n.next=7;break;case 4:return n.prev=4,n.t0=n.catch(0),n.abrupt("return",Promise.reject(n.t0));case 7:return t=g(e.name),a=(0,f.Z)(),o="".concat(a,".").concat(t),n.next=12,this.fetchFileCredentials(o,r);case 12:return l=n.sent,u=l.uploadCredentials,s=l.downloadUrl,d=l.privateUrl,n.next=18,this.uploadToServer(e,u);case 18:return n.abrupt("return",{id:a,name:e.name,sizeInBytes:e.size,publicUrl:u&&u.publicUrl?u.publicUrl:null,privateUrl:d,downloadUrl:s,new:!0});case 19:case"end":return n.stop()}}),n,this,[[0,4]])})));return function(e,r){return n.apply(this,arguments)}}()},{key:"uploadFromRequest",value:function(){var n=(0,a.Z)((0,i.Z)().mark((function n(e,r,t,a){var o,l,u,s=this;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:n.prev=0,this.validate(e.file,r),n.next=9;break;case 4:return n.prev=4,n.t0=n.catch(0),e.onError(n.t0),a(n.t0),n.abrupt("return");case 9:o=g(e.file.name),l=(0,f.Z)(),u="".concat(l,".").concat(o),this.fetchFileCredentials(u,r).then((function(n){var r=n.uploadCredentials,i=n.downloadUrl,a=n.privateUrl;return s.uploadToServer(e.file,r).then((function(){e.onSuccess(),t({id:l,name:e.file.name,sizeInBytes:e.file.size,publicUrl:r&&r.publicUrl?r.publicUrl:null,privateUrl:a,downloadUrl:i,new:!0})}))})).catch((function(n){e.onError(n),a(n)}));case 13:case"end":return n.stop()}}),n,this,[[0,4]])})));return function(e,r,t,i){return n.apply(this,arguments)}}()},{key:"fetchFileCredentials",value:function(){var n=(0,a.Z)((0,i.Z)().mark((function n(e,r){var t,a,o;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=p.Z.get(),n.next=3,c.Z.get("/tenant/".concat(t,"/file/credentials"),{params:{filename:e,storageId:r.storage.id}});case 3:return a=n.sent,o=a.data,n.abrupt("return",o);case 6:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}()},{key:"uploadToServer",value:function(){var n=(0,a.Z)((0,i.Z)().mark((function n(e,r){var a,o,l,u,s,d,c;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(n.prev=0,a=r.url,o=new FormData,l=0,u=Object.entries(r.fields||{});l<u.length;l++)s=(0,t.Z)(u[l],2),d=s[0],c=s[1],o.append(d,c);return o.append("file",e),n.abrupt("return",x().post(a,o,{headers:{"Content-Type":"multipart/form-data"}}));case 8:throw n.prev=8,n.t0=n.catch(0),console.error(n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,r){return n.apply(this,arguments)}}()}]),n}();function g(n){if(!n)return null;var e=/(?:\.([^.]+))?$/.exec(n);return e?e[1]:null}},28646:function(n,e,r){var t=r(93433),i=r(65057),a=r(25930),o=r(72426),l=r.n(o),u={generic:function(n){return i.nK().label(n)},string:function(n,e){e=e||{};var r=i.Z_().transform((function(n,e){return""===e?null:n})).nullable(!0).trim().label(n);return e.required&&(r=r.required()),(e.min||0===e.min)&&(r=r.min(e.min)),e.max&&(r=r.max(e.max)),e.matches&&(r=r.matches(e.matches)),r},boolean:function(n,e){return i.Xg().default(!1).label(n)},relationToOne:function(n,e){e=e||{};var r=i.nK().nullable(!0).label(n).transform((function(n,e){return e?e.id:null}));return e.required&&(r=r.required()),r},stringArray:function(n,e){e=e||{};var r=i.IX().compact().ensure().of(i.Z_().transform((function(n,e){return""===e?null:n})).trim()).label(n);return(e.required||e.min)&&(r=r.required()),e.min||0===e.min?r=r.min(e.min):e.required&&(r=r.min(1)),e.max&&(r=r.max(e.max)),r},relationToMany:function(n,e){e=e||{};var r=i.IX().nullable(!0).label(n).transform((function(n,e){return e&&e.length?e.map((function(n){return n.id})):[]}));return(e.required||e.min)&&(r=r.required()),e.min||0===e.min?r=r.min(e.min):e.required&&(r=r.min(1)),e.max&&(r=r.max(e.max)),r},integer:function(n,e){e=e||{};var r=i.Rx().transform((function(n,e){return""===e?null:n})).integer().nullable(!0).label(n);return e.required&&(r=r.required()),(e.min||0===e.min)&&(r=r.min(e.min)),e.max&&(r=r.max(e.max)),r},images:function(n,e){e=e||{};var r=i.IX().nullable(!0).label(n);return(e.required||e.min)&&(r=r.required()),e.min||0===e.min?r=r.min(e.min):e.required&&(r=r.min(1)),e.max&&(r=r.max(e.max)),r},files:function(n,e){e=e||{};var r=i.IX().compact().ensure().nullable(!0).label(n);return(e.required||e.min)&&(r=r.required()),e.min||0===e.min?r=r.min(e.min):e.required&&(r=r.min(1)),e.max&&(r=r.max(e.max)),r},enumerator:function(n,e){e=e||{};var r=i.Z_().transform((function(n,e){return""===e?null:n})).label(n).nullable(!0).oneOf([null].concat((0,t.Z)(e.options||[])));return e.required&&(r=r.required((0,a.ag)("validation.string.selected"))),r},email:function(n,e){e=e||{};var r=i.Z_().transform((function(n,e){return""===e?null:n})).nullable(!0).trim().label(n).email();return e.required&&(r=r.required()),(e.min||0===e.min)&&(r=r.min(e.min)),e.max&&(r=r.max(e.max)),e.matches&&(r=r.matches(e.matches)),r},decimal:function(n,e){e=e||{};var r=i.Rx().transform((function(n,e){return""===e?null:n})).nullable(!0).label(n);return e.required&&(r=r.required()),(e.min||0===e.min)&&(r=r.min(e.min)),e.max&&(r=r.max(e.max)),r},datetime:function(n,e){e=e||{};var r=i.nK().nullable(!0).label(n).transform((function(n,e){return n?l()(e,"YYYY-MM-DD HH:mm").toISOString():null}));return e.required&&(r=r.required()),r},date:function(n,e){e=e||{};var r=i.nK().nullable(!0).label(n).test("is-date",(0,a.ag)("validation.mixed.default"),(function(n){return!n||l()(n,"YYYY-MM-DD").isValid()})).transform((function(n){return n?l()(n).format("YYYY-MM-DD"):null}));return e.required&&(r=r.required()),r}};e.Z=u},16931:function(n,e,r){r(72791);var t=r(75992),i=r(80184);e.Z=function(n){return n.loading?(0,i.jsx)(t.C,{}):null}},84078:function(n,e,r){r(72791);var t=r(25930),i=r(80184);e.Z=function(){var n=localStorage.getItem("language");return(0,i.jsx)("div",{className:"retour",children:"fr"===n||"en"===n?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("i",{className:"fa-solid fa-arrow-left"})," ",(0,t.ag)("common.retour")," "]}):"ar"===n?(0,i.jsxs)(i.Fragment,{children:[(0,t.ag)("common.retour")," ",(0,i.jsx)("i",{className:"fa-solid fa-arrow-left"})]}):void 0})}},75992:function(n,e,r){var t,i=r(30168),a=(r(72791),r(86538)),o=r(80184),l=a.ZP.div(t||(t=(0,i.Z)(["\n  margin: 0 12px;\n  .lds-ring {\n    display: inline-block;\n    position: relative;\n    width: 15px;\n    height: 15px;\n  }\n  .lds-ring div {\n    box-sizing: border-box;\n    display: block;\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    border: 2px solid #fff;\n    border-radius: 50%;\n    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    border-color: var(--violet) transparent transparent transparent;\n  }\n  .lds-ring div:nth-child(1) {\n    animation-delay: -0.45s;\n  }\n  .lds-ring div:nth-child(2) {\n    animation-delay: -0.3s;\n  }\n  .lds-ring div:nth-child(3) {\n    animation-delay: -0.15s;\n  }\n  @keyframes lds-ring {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"])));e.C=function(n){var e=n.styles;return(0,o.jsx)(l,{children:(0,o.jsx)("div",{style:{height:e},children:(0,o.jsxs)("div",{className:"lds-ring",children:[(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{})]})})})}},34141:function(n,e,r){r.d(e,{Z:function(){return a}});var t=r(15671),i=r(43144),a=function(){function n(){(0,t.Z)(this,n)}return(0,i.Z)(n,null,[{key:"errorMessage",value:function(n,e,r,t){var i,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(a)return a;if(!t&&!r[n])return null;var o=e[n];return(null===o||void 0===o||null===(i=o[0])||void 0===i?void 0:i.message)||(null===o||void 0===o?void 0:o.message)||o||null}}]),n}()},69025:function(n,e,r){var t,i=r(30168),a=r(86538).ZP.div(t||(t=(0,i.Z)(['\n  .Login__container {\n    padding-top: 44px;\n    position: relative;\n  }\n\n  button {\n    color: var(--dark--red);\n    border: 0;\n    // padding: 0.8rem 1.2rem;\n    cursor: pointer;\n  }\n  .container__form {\n    display: flex;\n    row-gap: 25px;\n    justify-content: center;\n    align-items: flex-end;\n    width: calc(100vw - 10%);\n    max-width: 501px;\n    flex-direction: column;\n  }\n  input[type="text"],\n  input[type="password"] {\n    width: 100%;\n    border: 1px solid #bdbdbd;\n    height: 50px;\n    padding: 14px 0 14px 12px;\n    color: var(--violet);\n    margin-top: 7px;\n    font-family: "Proxima Nova";\n    font-style: normal;\n    font-weight: 700;\n    font-size: 17px;\n    line-height: 21px;\n  }\n  .item__button {\n    display: flex;\n    column-gap: 45px;\n    align-items: center;\n    justify-content: flex-end;\n  }\n  .form__button {\n    width: 177px;\n    background: var(--red);\n    color: var(--white);\n    font-family: "Bebas Neue Pro";\n    font-style: normal;\n    font-weight: 700;\n    font-size: 20px;\n    line-height: 23px;\n    padding: 14px 0;\n    display: flex;\n    justify-content: center;\n    place-items: baseline;\n    cursor: pointer;\n    text-transform: Uppercase;\n    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  .form-group {\n    text-align: start;\n    width: 100% !important;\n  }\n  .form__button:hover {\n    color: #fff;\n    background: #ff5444;\n    border-color: ##ff5444;\n    text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);\n    box-shadow: 0 2px 0 rgb(0 0 0 / 5%);\n  }\n  label {\n    color: var(--violet);\n    font-family: "Proxima Nova";\n    font-size: 14px;\n    line-height: 17px;\n    font-weight: 400;\n    padding-bottom: 7px;\n  }\n  .form__oublier {\n    position: relative;\n    padding-bottom: 31px;\n  }\n  .oublier {\n    cursor: pointer;\n    position: absolute;\n    right: 0;\n    font-family: "Proxima Nova";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 17px;\n  }\n  .Login__container {\n    padding-top: 32px;\n    position: relative;\n    width: 100% !important;\n  }\n  .form__link {\n    display: flex;\n    justify-content: center;\n    column-gap: 12px;\n  }\n  .link__account {\n    font-size: 20px;\n    line-height: 23px;\n    text-align: center;\n    font-family: "Bebas Neue Pro";\n  }\n  .link__create {\n    font-family: "Bebas Neue Pro";\n    color: var(--red);\n    font-weight: 700;\n    font-size: 20px;\n    line-height: 23px;\n    text-decoration-line: underline;\n    text-transform: uppercase;\n  }\n  .invalid-feedback {\n    color: var(--red);\n  }\n\n  @media (max-wdith: 800px) {\n  }\n\n  .cancel__button {\n    padding: 0;\n    background-color: transparent;\n    position: relative;\n    right: 0;\n    font-family: "Bebas Neue Pro";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 20px;\n    line-height: 23px;\n    color: var(--violet);\n  }\n  .form__select {\n    display: flex;\n    flex-direction: column;\n  }\n  select,\n  textarea {\n    font-family: "Proxima Nova";\n    font-style: normal;\n    font-weight: 700;\n    font-size: 17px;\n    line-height: 21px;\n    padding: 15px;\n  }\n  select {\n    height: 50px;\n  }\n  textarea {\n    height: 150px;\n    width: 100%;\n  }\n\n  .form__importance {\n    display: flex;\n    flex-direction: column;\n  }\n  .importance__status {\n    display: flex;\n    with: 100%;\n    justify-content: space-between;\n    align-items: center;\n  }\n  .importance__status > div {\n    display: grid;\n    place-items: center;\n    height: 50px;\n    border: 1px solid #bdbdbd;\n    width: 100%;\n    cursor: pointer;\n    color: var(--gray5);\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 17px;\n  }\n  .importance__status > .status__active {\n    border: 2px solid #2b2840;\n    box-shadow: 0px 7px 14px rgba(0, 0, 0, 0.09);\n    color: var(--violet);\n    font-weight: 700;\n    font-size: 14px;\n    line-height: 17px;\n  }\n  .form__radio {\n    padding-top: 7px;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    column-gap: 21px;\n  }\n  .form__radio > div {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    column-gap: 21px;\n  }\n  .form__radio > div > div {\n    height: 50px;\n    border: 1px solid #bdbdbd;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    padding-left: 11px;\n    column-gap: 74px;\n    cursor: pointer;\n  }\n\n  .form__radio > div > .radio__active {\n    border: 2px solid #2b2840;\n  }\n\n  input[type="radio"] {\n    width: 18px;\n    height: 18px;\n    background-clip: content-box;\n    border: 2px solid #bbbbbb;\n    background-color: #e7e6e7;\n    accent-color: var(--red);\n  }\n\n  input[type="radio"]:checked {\n    background-color: #93e026;\n  }\n  .form_textarea {\n    width: 100%;\n  }\n'])));e.Z=a}}]);
//# sourceMappingURL=5353.b0bb88f2.chunk.js.map