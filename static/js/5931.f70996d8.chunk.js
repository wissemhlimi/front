"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[5931],{28646:function(n,e,r){var i=r(93433),a=r(77942),t=r(25930),l=r(72426),o=r.n(l),s={generic:function(n){return a.nK().label(n)},string:function(n,e){e=e||{};var r=a.Z_().transform((function(n,e){return""===e?null:n})).nullable(!0).trim().label(n);return e.required&&(r=r.required()),(e.min||0===e.min)&&(r=r.min(e.min)),e.max&&(r=r.max(e.max)),e.matches&&(r=r.matches(e.matches)),r},boolean:function(n,e){return a.Xg().default(!1).label(n)},relationToOne:function(n,e){e=e||{};var r=a.nK().nullable(!0).label(n).transform((function(n,e){return e?e.id:null}));return e.required&&(r=r.required()),r},stringArray:function(n,e){e=e||{};var r=a.IX().compact().ensure().of(a.Z_().transform((function(n,e){return""===e?null:n})).trim()).label(n);return(e.required||e.min)&&(r=r.required()),e.min||0===e.min?r=r.min(e.min):e.required&&(r=r.min(1)),e.max&&(r=r.max(e.max)),r},relationToMany:function(n,e){e=e||{};var r=a.IX().nullable(!0).label(n).transform((function(n,e){return e&&e.length?e.map((function(n){return n.id})):[]}));return(e.required||e.min)&&(r=r.required()),e.min||0===e.min?r=r.min(e.min):e.required&&(r=r.min(1)),e.max&&(r=r.max(e.max)),r},integer:function(n,e){e=e||{};var r=a.Rx().transform((function(n,e){return""===e?null:n})).integer().nullable(!0).label(n);return e.required&&(r=r.required()),(e.min||0===e.min)&&(r=r.min(e.min)),e.max&&(r=r.max(e.max)),r},images:function(n,e){e=e||{};var r=a.IX().nullable(!0).label(n);return(e.required||e.min)&&(r=r.required()),e.min||0===e.min?r=r.min(e.min):e.required&&(r=r.min(1)),e.max&&(r=r.max(e.max)),r},files:function(n,e){e=e||{};var r=a.IX().compact().ensure().nullable(!0).label(n);return(e.required||e.min)&&(r=r.required()),e.min||0===e.min?r=r.min(e.min):e.required&&(r=r.min(1)),e.max&&(r=r.max(e.max)),r},enumerator:function(n,e){e=e||{};var r=a.Z_().transform((function(n,e){return""===e?null:n})).label(n).nullable(!0).oneOf([null].concat((0,i.Z)(e.options||[])));return e.required&&(r=r.required((0,t.ag)("validation.string.selected"))),r},email:function(n,e){e=e||{};var r=a.Z_().transform((function(n,e){return""===e?null:n})).nullable(!0).trim().label(n).email();return e.required&&(r=r.required()),(e.min||0===e.min)&&(r=r.min(e.min)),e.max&&(r=r.max(e.max)),e.matches&&(r=r.matches(e.matches)),r},decimal:function(n,e){e=e||{};var r=a.Rx().transform((function(n,e){return""===e?null:n})).nullable(!0).label(n);return e.required&&(r=r.required()),(e.min||0===e.min)&&(r=r.min(e.min)),e.max&&(r=r.max(e.max)),r},datetime:function(n,e){e=e||{};var r=a.nK().nullable(!0).label(n).transform((function(n,e){return n?o()(e,"YYYY-MM-DD HH:mm").toISOString():null}));return e.required&&(r=r.required()),r},date:function(n,e){e=e||{};var r=a.nK().nullable(!0).label(n).test("is-date",(0,t.ag)("validation.mixed.default"),(function(n){return!n||o()(n,"YYYY-MM-DD").isValid()})).transform((function(n){return n?o()(n).format("YYYY-MM-DD"):null}));return e.required&&(r=r.required()),r}};e.Z=s},35931:function(n,e,r){r.r(e);var i=r(1413),a=r(29439),t=r(72791),l=r(87705),o=r(68835),s=r(8240),d=r(30589),u=r(94233),m=r(16931),c=r(2107),f=r(77942),x=r(28646),p=r(25930),h=r(27314),g=r(38511),v=r(91523),b=r(84078),_=r(80184),j=f.Ry().shape({email:x.Z.string((0,p.ag)("user.fields.email"),{required:!0})});e.default=function(){var n=(0,u.I0)(),e=(0,u.v9)(d.Z.selectLoading),r=(0,u.v9)(d.Z.selectErrorMessage),f=(0,t.useState)({email:""}),x=(0,a.Z)(f,1)[0],y=(0,l.cI)({resolver:(0,o.X)(j),mode:"onSubmit",defaultValues:x}),q=function(){n(s.Z.doClearErrorMessage())};return(0,t.useEffect)((function(){q()}),[]),(0,_.jsxs)("div",{className:"app__resetPassword",children:[(0,_.jsxs)("div",{children:[(0,_.jsx)(v.rU,{to:"/auth/signin",children:(0,_.jsx)(b.Z,{})}),(0,_.jsx)("img",{className:"lazyload",src:h.UN,alt:"",srcSet:"",style:{width:500,height:"100%"}})]}),(0,_.jsx)(g.Z,{children:(0,_.jsx)("div",{className:"app__signin",children:(0,_.jsxs)("div",{className:"app__login",children:[(0,_.jsxs)("div",{className:"archieve__header",children:[(0,_.jsx)("h2",{children:(0,p.ag)("auth.passwordResetEmail.message")}),(0,_.jsx)("div",{className:"communiquer__bar"})]}),(0,_.jsx)("div",{className:"Login__container",children:(0,_.jsx)("div",{className:"container__form",children:(0,_.jsx)(l.RV,(0,i.Z)((0,i.Z)({},y),{},{children:(0,_.jsx)("form",{onSubmit:y.handleSubmit((function(e){var r=e.email;n(s.Z.doResetPasswordEmail(r))})),children:(0,_.jsxs)("div",{className:"container__form",children:[(0,_.jsx)(c.Z,{name:"email",label:(0,p.ag)("user.fields.email"),placeholder:"email",autoComplete:"email",onChange:function(){r&&q()},externalErrorMessage:r}),(0,_.jsxs)("button",{className:"form__button",disabled:e,children:[(0,_.jsx)(m.Z,{loading:e}),(0,p.ag)("buttons.envoyer")]})]})})}))})})]})})})]})}},38511:function(n,e,r){var i,a=r(30168),t=r(86538).ZP.div(i||(i=(0,a.Z)(['\n  .app__signin {\n    width: 100%;\n    padding-top: 140px;\n    display: grid;\n    place-items: center;\n    place-content: center;\n  }\n  .app__login {\n    width: 501px;\n  }\n  @media (max-width: 1170px) {\n    .app__signin {\n      width: 100%;\n      display: grid;\n      place-items: center;\n      place-content: center;\n      position: relative;\n      height: 100vh;\n      z-index: 1;\n    }\n\n    .app__login {\n      width: calc(100vw - 10%);\n    }\n  }\n  button {\n    color: var(--dark--red);\n    border: 0;\n    padding: 0.8rem 1.2rem;\n    cursor: pointer;\n  }\n\n  .container__form {\n    display: grid;\n    row-gap: 25px;\n  }\n  input {\n    width: 100%;\n    border: 1px solid #bdbdbd;\n    height: 50px;\n    padding: 14px 0 14px 12px;\n    color: var(--violet);\n    margin-top: 7px;\n    font-family: "Proxima Nova";\n    font-style: normal;\n    font-weight: 700;\n    font-size: 17px;\n    line-height: 21px;\n  }\n  .form__button {\n    width: 100%;\n    background: var(--red);\n    color: var(--white);\n    font-family: "Bebas Neue Pro";\n    font-style: normal;\n    font-weight: 700;\n    font-size: 20px;\n    line-height: 23px;\n    padding: 14px 0;\n    display: flex;\n    justify-content: center;\n    place-items: baseline;\n    cursor: pointer;\n    text-transform: Uppercase;\n    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n\n  .form__select {\n    display: flex;\n    flex-direction: column;\n  }\n  select,\n  textarea {\n    font-family: "Proxima Nova";\n    font-style: normal;\n    font-weight: 700;\n    font-size: 17px;\n    line-height: 21px;\n    padding: 15px;\n  }\n  select {\n    height: 50px;\n  }\n  .form__button:hover {\n    color: #fff;\n    background: #ff5444;\n    border-color: #ff5444;\n    text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);\n    box-shadow: 0 2px 0 rgb(0 0 0 / 5%);\n  }\n  label {\n    color: var(--violet);\n    font-family: "Proxima Nova";\n    font-size: 14px;\n    line-height: 17px;\n    font-weight: 400;\n    padding-bottom: 14px;\n  }\n  .form__oublier {\n    position: relative;\n    padding-bottom: 31px;\n  }\n  .oublier {\n    cursor: pointer;\n    position: absolute;\n    text-decoration: underline;\n    right: 0;\n    font-family: "Proxima Nova";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 17px;\n  }\n  .Login__container {\n    padding-top: 44px;\n    position: relative;\n  }\n  .form__link {\n    display: flex;\n    justify-content: center;\n    column-gap: 12px;\n  }\n  .link__account {\n    font-family: "Bebas Neue Pro";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 20px;\n    line-height: 23px;\n  }\n  .link__create {\n    font-family: "Bebas Neue Pro";\n    color: var(--red);\n    font-weight: 700;\n    font-size: 20px;\n    line-height: 23px;\n    text-decoration-line: underline;\n    text-transform: uppercase;\n  }\n  .invalid-feedback {\n    color: var(--red);\n  }\n'])));e.Z=t},16931:function(n,e,r){r(72791);var i=r(75992),a=r(80184);e.Z=function(n){return n.loading?(0,a.jsx)(i.C,{}):null}},84078:function(n,e,r){r(72791);var i=r(25930),a=r(80184);e.Z=function(){var n=localStorage.getItem("language");return(0,a.jsx)("div",{className:"retour",children:"fr"===n||"en"===n?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("i",{className:"fa-solid fa-arrow-left"})," ",(0,i.ag)("common.retour")," "]}):"ar"===n?(0,a.jsxs)(a.Fragment,{children:[(0,i.ag)("common.retour")," ",(0,a.jsx)("i",{className:"fa-solid fa-arrow-left"})]}):void 0})}},75992:function(n,e,r){var i,a=r(30168),t=(r(72791),r(86538)),l=r(80184),o=t.ZP.div(i||(i=(0,a.Z)(["\n  margin: 0 12px;\n  .lds-ring {\n    display: inline-block;\n    position: relative;\n    width: 15px;\n    height: 15px;\n  }\n  .lds-ring div {\n    box-sizing: border-box;\n    display: block;\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    border: 2px solid #fff;\n    border-radius: 50%;\n    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    border-color: var(--violet) transparent transparent transparent;\n  }\n  .lds-ring div:nth-child(1) {\n    animation-delay: -0.45s;\n  }\n  .lds-ring div:nth-child(2) {\n    animation-delay: -0.3s;\n  }\n  .lds-ring div:nth-child(3) {\n    animation-delay: -0.15s;\n  }\n  @keyframes lds-ring {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"])));e.C=function(n){var e=n.styles;return(0,l.jsx)(o,{children:(0,l.jsx)("div",{style:{height:e},children:(0,l.jsxs)("div",{className:"lds-ring",children:[(0,l.jsx)("div",{}),(0,l.jsx)("div",{}),(0,l.jsx)("div",{}),(0,l.jsx)("div",{})]})})})}},34141:function(n,e,r){r.d(e,{Z:function(){return t}});var i=r(15671),a=r(43144),t=function(){function n(){(0,i.Z)(this,n)}return(0,a.Z)(n,null,[{key:"errorMessage",value:function(n,e,r,i){var a,t=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(t)return t;if(!i&&!r[n])return null;var l=e[n];return(null===l||void 0===l||null===(a=l[0])||void 0===a?void 0:a.message)||(null===l||void 0===l?void 0:l.message)||l||null}}]),n}()},2107:function(n,e,r){r(72791);var i=r(87705),a=r(34141),t=r(80184);function l(n){var e=n.label,r=n.description,l=n.name,o=n.hint,s=n.type,d=(n.placeholder,n.autoFocus),u=n.autoComplete,m=n.required,c=n.externalErrorMessage,f=n.disabled,x=n.endAdornment,p=(0,i.Gc)(),h=p.register,g=p.errors,v=p.formState,b=v.touched,_=v.isSubmitted,j=a.Z.errorMessage(l,g,b,_,c);return(0,t.jsxs)("div",{className:"form__group",children:[(0,t.jsxs)("div",{className:x?"input-group":"",children:[Boolean(e)&&(0,t.jsx)("label",{className:"".concat(m?"required":null),htmlFor:l,children:e}),r,(0,t.jsx)("input",{id:l,name:l,type:s,ref:h,onChange:function(e){n.onChange&&n.onChange(e.target.value)},onBlur:function(e){n.onBlur&&n.onBlur(e)},autoFocus:d||void 0,autoComplete:u||void 0,disabled:f,className:"form-control ".concat(j?"is-invalid":"")}),x&&(0,t.jsx)("div",{className:"input-group-append",children:(0,t.jsx)("span",{className:"input-group-text",children:x})})]}),(0,t.jsx)("div",{className:"invalid-feedback",children:j}),Boolean(o)&&(0,t.jsx)("small",{className:"form-text text-muted",children:o})]})}l.defaultProps={type:"text",required:!1},e.Z=l}}]);
//# sourceMappingURL=5931.f70996d8.chunk.js.map