"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[5998],{50874:function(e,n,t){t.r(n),t.d(n,{default:function(){return F}});var a=t(29439),r=t(72791),i=t(69025),o=t(91523),s=t(1413),l=t(65057),u=t(28646),c=t(68835),d=t(87705),m={type:["Legal","logistique"],etat:["En_ligne","physique"],gouvernorat:["tunis","ariana","gafsa","kasserine","monastir","sousse","beja"],importance:["Haute","modere","normale"]},p=t(25930),f=t(45003),g=t(16931),h=t(44825),v=t(81657),b=t(2107),x=t(80184),j=l.Ry().shape({gouvernorat:u.Z.enumerator((0,p.ag)("entities.demandeAppui.fields.gouvernorat"),{options:m.gouvernorat}),phoneNumber:u.Z.string((0,p.ag)("user.fields.phoneNumber"),{matches:/^[0-9]/,max:8,required:!0}),descriptionFR:u.Z.string((0,p.ag)("entities.demandeAppui.fields.description"),{required:!1}),descriptionAR:u.Z.string((0,p.ag)("entities.demandeAppui.fields.description"),{required:!1}),supports:u.Z.files((0,p.ag)("entities.demandeAppui.fields.supports"),{})});var y=function(e){var n=(0,r.useState)("physique"),t=(0,a.Z)(n,2),i=t[0],o=t[1],l=(0,r.useState)("Legal"),u=(0,a.Z)(l,2),m=u[0],y=u[1],N=localStorage.getItem("language"),_=(0,r.useState)((function(){var n=e.record||{};return o(n.personne),y(n.type),{email:n.email,personne:n.personne,phoneNumber:n.phoneNumber,descriptionFR:n.descriptionFR,descriptionAR:n.descriptionAR,supports:n.supports||[]}})),Z=(0,a.Z)(_,1)[0],B=(0,d.cI)({resolver:(0,c.X)(j),mode:"all",defaultValues:Z}),C=function(n){var t;n.personne=i,n.statut="en_attente",n.type=m,e.onSubmit(null===e||void 0===e||null===(t=e.record)||void 0===t?void 0:t.id,n)},A=e.saveLoading;return(0,x.jsx)(d.RV,(0,s.Z)((0,s.Z)({},B),{},{children:(0,x.jsx)("form",{onSubmit:B.handleSubmit(C),children:(0,x.jsxs)("div",{className:"container__form",children:[(0,x.jsxs)("div",{className:"form__importance",children:[(0,x.jsx)("label",{htmlFor:"Importance",children:(0,p.ag)("entities.demandeAppui.fields.personne")}),(0,x.jsxs)("div",{className:"importance__status",children:[(0,x.jsx)("div",{className:"physique"===i?"status__active":"",onClick:function(){o("physique")},children:(0,p.ag)("common.physique")}),(0,x.jsx)("div",{className:"organisation"===i?"status__active":"",onClick:function(){o("organisation")},children:(0,p.ag)("common.organisation")})]})]}),(0,x.jsxs)("div",{className:"form__importance",children:[(0,x.jsx)("label",{htmlFor:"Importance",children:(0,p.ag)("entities.demandeAppui.fields.type")}),(0,x.jsxs)("div",{className:"importance__status",children:[(0,x.jsx)("div",{className:"Legal"===m?"status__active":"",onClick:function(){y("Legal")},children:(0,p.ag)("entities.demandeAppui.enumerators.type.Legal")}),(0,x.jsx)("div",{className:"logistique"===m?"status__active":"",onClick:function(){y("logistique")},children:(0,p.ag)("entities.demandeAppui.enumerators.type.logistique")})]})]}),(0,x.jsx)(b.Z,{name:"email",label:(0,p.ag)("user.fields.email"),autoComplete:"email"}),(0,x.jsx)(b.Z,{name:"phoneNumber",label:(0,p.ag)("user.fields.phoneNumber"),autoComplete:"phoneNumber"}),(0,x.jsx)(h.Z,{name:"supports",label:(0,p.ag)("entities.demandeAppui.fields.supports"),required:!1,storage:v.Z.values.demandeAppuiSupports,max:void 0,formats:void 0}),"fr"===N?(0,x.jsx)(f.Z,{name:"descriptionFR",label:(0,p.ag)("entities.demandeAppui.fields.description"),required:!1}):"en"===N?(0,x.jsx)(f.Z,{name:"descriptionEN",label:(0,p.ag)("entities.demandeAppui.fields.description"),required:!1}):(0,x.jsx)(f.Z,{name:"descriptionAR",label:(0,p.ag)("entities.demandeAppui.fields.description"),required:!1}),(0,x.jsxs)("div",{className:"item__button",children:[(0,x.jsx)("button",{className:"cancel__button",onClick:function(){Object.keys(Z).forEach((function(e){B.setValue(e,Z[e])}))},type:"button",disabled:A,children:(0,p.ag)("common.reset")}),(0,x.jsxs)("button",{className:"form__button",onClick:B.handleSubmit(C),disabled:A,children:[(0,x.jsx)(g.Z,{loading:A}),(0,p.ag)("common.save")]})]})]})})}))},N=t(55478),_=t(94233),Z=t(50873),B=function(e){return e.demandeAppui.form},C=(0,Z.P1)([B],(function(e){return e.record})),A={selectInitLoading:(0,Z.P1)([B],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:(0,Z.P1)([B],(function(e){return Boolean(e.saveLoading)})),selectRecord:C,selectRaw:B},S=t(48622),k=t(79271),q=t(75992),w=t(84078),R=t(72239);var F=function(e){var n=(0,r.useState)(!1),t=(0,a.Z)(n,2),s=t[0],l=t[1],u=(0,_.I0)(),c=(0,k.$B)(),d=(0,_.v9)(A.selectInitLoading),m=(0,_.v9)(A.selectSaveLoading),f=(0,_.v9)(A.selectRecord),g=(0,r.useState)(""),h=(0,a.Z)(g,2),v=h[0],b=h[1],j=(0,r.useState)("fr"),Z=(0,a.Z)(j,2),B=Z[0],C=Z[1];(0,r.useEffect)((function(){!function(){var e;C(null!==(e=localStorage.getItem("language"))&&void 0!==e?e:"fr"),R.Z.getApropos().then((function(e){e.rows.length>0&&b(e.rows[0])})).catch((function(e){return console.error(e)}))}()}),[]);var F=Boolean(c.params.id),M=F?"entities.demandeAppui.edit.title":"entities.demandeAppui.new.title";return(0,r.useEffect)((function(){u(N.Z.doInit(c.params.id)),l(!0)}),[u,c.params.id]),(0,x.jsxs)("div",{className:"app__contenu",children:[(0,x.jsx)(o.rU,{to:"/profile",children:(0,x.jsx)(w.Z,{})}),(0,x.jsxs)("div",{className:"contenu",children:[(0,x.jsxs)("div",{className:"archieve__header",children:[(0,x.jsx)("h2",{children:(0,p.ag)("menu.demande_appui")}),(0,x.jsx)("div",{className:"communiquer__bar"})]}),v?(0,x.jsx)(x.Fragment,{children:"fr"===B?(0,x.jsx)(x.Fragment,{children:v.appelDescFR?(0,x.jsx)("div",{className:"contenu__description",children:v.appelDescFR}):null}):(0,x.jsx)(x.Fragment,{children:v.appelDescAR?(0,x.jsx)("div",{className:"contenu__description",children:v.appelDescAR}):null})}):null,(0,x.jsx)(i.Z,{children:(0,x.jsxs)("div",{className:"Login__container",children:[d&&(0,x.jsx)(q.C,{}),s&&!d&&(0,x.jsx)(y,{title:M,saveLoading:m,record:f,isEditing:F,onSubmit:function(e,n){u(F?N.Z.doUpdate(e,n):N.Z.doCreate(n))},onCancel:function(){return(0,S.s1)().push("/demande-appui")}})]})})]})]})}},44825:function(e,n,t){t.d(n,{Z:function(){return v}});var a=t(72791),r=t(74165),i=t(93433),o=t(15861),s=t(29439),l=t(38658),u=t(68561),c=t(25930),d=t(16931),m=t(80184);var p=function(e){var n=(0,a.useState)(!1),t=(0,s.Z)(n,2),p=t[0],f=t[1],g=(0,a.useRef)(),h=function(){var n=e.value;return n?Array.isArray(n)?n:[n]:[]},v=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(t){var a,o;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,(a=t.target.files)&&a.length){n.next=4;break}return n.abrupt("return");case 4:return o=a[0],l.Z.validate(o,{storage:e.storage,formats:e.formats}),f(!0),n.next=9,l.Z.upload(o,{storage:e.storage,formats:e.formats});case 9:o=n.sent,g.current.value="",f(!1),e.onChange([].concat((0,i.Z)(h()),[o])),n.next=21;break;case 15:n.prev=15,n.t0=n.catch(0),g.current.value="",console.error(n.t0),f(!1),u.Z.showMessage(n.t0);case 21:case"end":return n.stop()}}),n,null,[[0,15]])})));return function(e){return n.apply(this,arguments)}}(),b=e.max,x=e.readonly,j=(0,m.jsxs)("label",{className:"btn btn-outline-secondary px-4 mb-2",style:{cursor:"pointer"},children:[(0,m.jsxs)("div",{className:"upload__file",children:[(0,c.ag)("fileUploader.upload"),(0,m.jsx)(d.Z,{loading:p,iconClass:"fas fa-plus"})]}),(0,m.jsx)("input",{style:{display:"none"},disabled:p||x,accept:function(){var n=e.schema;if(n&&n.formats)return n.formats.map((function(e){return".".concat(e)})).join(",")}(),type:"file",onChange:v,ref:g})]});return(0,m.jsxs)("div",{children:[x||b&&h().map((function(e){return{uid:e.id||void 0,name:e.name,status:"done",url:e.downloadUrl}})).length>=b?null:j,h()&&h().length?(0,m.jsx)("div",{children:h().map((function(n){return(0,m.jsxs)("div",{className:"file__show",children:[(0,m.jsx)("i",{className:"fas fa-link text-muted mr-2"}),(0,m.jsx)("a",{href:n.downloadUrl,target:"_blank",rel:"noopener noreferrer",download:!0,children:n.name}),!x&&(0,m.jsx)("button",{className:"btn btn-link",type:"button",onClick:function(){return t=n.id,void e.onChange(h().filter((function(e){return e.id!==t})));var t},children:(0,m.jsx)("i",{className:"fas fa-times"})})]},n.id)}))}):null]})},f=t(87705),g=t(34141);function h(e){var n=e.label,t=e.name,r=e.hint,i=e.storage,o=e.formats,s=e.max,l=e.required,u=e.externalErrorMessage,c=(0,f.Gc)(),d=c.register,h=c.errors,v=c.formState,b=v.touched,x=v.isSubmitted,j=c.setValue,y=c.watch;(0,a.useEffect)((function(){d({name:t})}),[d,t]);var N=g.Z.errorMessage(t,h,b,x,u);return(0,m.jsxs)("div",{className:"form-group",children:[Boolean(n)&&(0,m.jsx)("label",{className:"col-form-label ".concat(l?"required":null),htmlFor:t,children:n}),(0,m.jsx)("br",{}),(0,m.jsx)(p,{storage:i,formats:o,value:y(t),onChange:function(n){j(t,n,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n)},max:s}),(0,m.jsx)("div",{className:"invalid-feedback",children:N}),Boolean(r)&&(0,m.jsx)("small",{className:"form-text text-muted",children:r})]})}h.defaultProps={max:void 0,required:!1};var v=h},2107:function(e,n,t){t(72791);var a=t(87705),r=t(34141),i=t(80184);function o(e){var n=e.label,t=e.description,o=e.name,s=e.hint,l=e.type,u=(e.placeholder,e.autoFocus),c=e.autoComplete,d=e.required,m=e.externalErrorMessage,p=e.disabled,f=e.endAdornment,g=(0,a.Gc)(),h=g.register,v=g.errors,b=g.formState,x=b.touched,j=b.isSubmitted,y=r.Z.errorMessage(o,v,x,j,m);return(0,i.jsxs)("div",{className:"form__group",children:[(0,i.jsxs)("div",{className:f?"input-group":"",children:[Boolean(n)&&(0,i.jsx)("label",{className:"".concat(d?"required":null),htmlFor:o,children:n}),t,(0,i.jsx)("input",{id:o,name:o,type:l,ref:h,onChange:function(n){e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},autoFocus:u||void 0,autoComplete:c||void 0,disabled:p,className:"form-control ".concat(y?"is-invalid":"")}),f&&(0,i.jsx)("div",{className:"input-group-append",children:(0,i.jsx)("span",{className:"input-group-text",children:f})})]}),(0,i.jsx)("div",{className:"invalid-feedback",children:y}),Boolean(s)&&(0,i.jsx)("small",{className:"form-text text-muted",children:s})]})}o.defaultProps={type:"text",required:!1},n.Z=o},45003:function(e,n,t){t(72791);var a=t(87705),r=t(34141),i=t(80184);function o(e){var n=e.label,t=e.name,o=e.hint,s=e.size,l=e.placeholder,u=e.autoFocus,c=e.autoComplete,d=e.externalErrorMessage,m=e.required,p={small:"col-form-label-sm",large:"col-form-label-lg"}[s]||"",f={small:"form-control-sm",large:"form-control-lg"}[s]||"",g=(0,a.Gc)(),h=g.register,v=g.errors,b=g.formState,x=b.touched,j=b.isSubmitted,y=r.Z.errorMessage(t,v,x,j,d);return(0,i.jsxs)("div",{className:"form_textarea",children:[Boolean(n)&&(0,i.jsx)("label",{className:"col-form-label ".concat(m?"required":null," ").concat(p),htmlFor:t,children:n}),(0,i.jsx)("textarea",{id:t,name:t,ref:h,onChange:function(n){e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},placeholder:l||void 0,autoFocus:u||void 0,autoComplete:c||void 0,className:"form-control ".concat(f," ").concat(y?"is-invalid":"")}),(0,i.jsx)("div",{className:"invalid-feedback",children:y}),Boolean(o)&&(0,i.jsx)("small",{className:"form-text text-muted",children:o})]})}o.defaultProps={required:!1},n.Z=o},27530:function(e,n,t){!function(n){var t=/^(b|B)$/,a={iec:{bits:["b","Kib","Mib","Gib","Tib","Pib","Eib","Zib","Yib"],bytes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},jedec:{bits:["b","Kb","Mb","Gb","Tb","Pb","Eb","Zb","Yb"],bytes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}},r={iec:["","kibi","mebi","gibi","tebi","pebi","exbi","zebi","yobi"],jedec:["","kilo","mega","giga","tera","peta","exa","zetta","yotta"]};function i(e){var n,i,o,s,l,u,c,d,m,p,f,g,h,v,b,x=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},j=[],y=0,N=void 0,_=void 0;if(isNaN(e))throw new TypeError("Invalid number");return i=!0===x.bits,f=!0===x.unix,n=x.base||2,p=void 0!==x.round?x.round:f?1:2,u=void 0!==x.locale?x.locale:"",c=x.localeOptions||{},g=void 0!==x.separator?x.separator:"",h=void 0!==x.spacer?x.spacer:f?"":" ",b=x.symbols||{},v=2===n&&x.standard||"jedec",m=x.output||"string",s=!0===x.fullform,l=x.fullforms instanceof Array?x.fullforms:[],N=void 0!==x.exponent?x.exponent:-1,o=2<n?1e3:1024,(d=(_=Number(e))<0)&&(_=-_),(-1===N||isNaN(N))&&(N=Math.floor(Math.log(_)/Math.log(o)))<0&&(N=0),8<N&&(N=8),"exponent"===m?N:(0===_?(j[0]=0,j[1]=f?"":a[v][i?"bits":"bytes"][N]):(y=_/(2===n?Math.pow(2,10*N):Math.pow(1e3,N)),i&&o<=(y*=8)&&N<8&&(y/=o,N++),j[0]=Number(y.toFixed(0<N?p:0)),j[0]===o&&N<8&&void 0===x.exponent&&(j[0]=1,N++),j[1]=10===n&&1===N?i?"kb":"kB":a[v][i?"bits":"bytes"][N],f&&(j[1]="jedec"===v?j[1].charAt(0):0<N?j[1].replace(/B$/,""):j[1],t.test(j[1])&&(j[0]=Math.floor(j[0]),j[1]=""))),d&&(j[0]=-j[0]),j[1]=b[j[1]]||j[1],!0===u?j[0]=j[0].toLocaleString():0<u.length?j[0]=j[0].toLocaleString(u,c):0<g.length&&(j[0]=j[0].toString().replace(".",g)),"array"===m?j:(s&&(j[1]=l[N]?l[N]:r[v][N]+(i?"bit":"byte")+(1===j[0]?"":"s")),"object"===m?{value:j[0],symbol:j[1],exponent:N}:j.join(h)))}i.partial=function(e){return function(n){return i(n,e)}},e.exports=i}("undefined"!=typeof window?window:t.g)},49123:function(e,n,t){t.d(n,{Z:function(){return u}});var a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),r=new Uint8Array(16);function i(){if(!a)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(r)}for(var o=[],s=0;s<256;++s)o[s]=(s+256).toString(16).substr(1);var l=function(e,n){var t=n||0,a=o;return[a[e[t++]],a[e[t++]],a[e[t++]],a[e[t++]],"-",a[e[t++]],a[e[t++]],"-",a[e[t++]],a[e[t++]],"-",a[e[t++]],a[e[t++]],"-",a[e[t++]],a[e[t++]],a[e[t++]],a[e[t++]],a[e[t++]],a[e[t++]]].join("")};var u=function(e,n,t){var a=n&&t||0;"string"==typeof e&&(n="binary"===e?new Array(16):null,e=null);var r=(e=e||{}).random||(e.rng||i)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,n)for(var o=0;o<16;++o)n[a+o]=r[o];return n||l(r)}}}]);
//# sourceMappingURL=5998.f563e966.chunk.js.map