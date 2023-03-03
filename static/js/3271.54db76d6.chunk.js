"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[3271],{17227:function(e,a,n){n.r(a),n.d(a,{default:function(){return I}});var i,t=n(1413),r=n(29439),o=n(72791),s=n(87705),l=n(68835),u=n(81657),c=n(91523),d=n(8240),m=n(30589),p=n(94233),f=n(16931),h=n(2107),g=n(65057),b=n(28646),v=n(69025),x=n(74165),y=n(93433),_=n(15861),j=n(38658),N=n(68561),C=n(30168),Z=n(86538).ZP.div(i||(i=(0,C.Z)(["\n  .img-card:hover .img-buttons {\n    display: block;\n  }\n\n  .img-buttons {\n    display: none;\n  }\n  .profile__:hover .img-buttons {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 130px;\n    height: 100%;\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.5);\n    animation: fadeIn 0.7s;\n  }\n  @keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n\n  .img-buttons > * {\n    color: var(--white);\n    background-color: transparent;\n  }\n  .ant-upload-list-item-thumbnail > img {\n    width: 300px;\n    height: 300px;\n    object-fit: cover;\n  }\n"]))),S=n(18083),w=n(27314),B=n(80184);var k=function(e){var a=(0,o.useState)(!1),n=(0,r.Z)(a,2),i=n[0],t=n[1],s=(0,o.useState)(null),l=(0,r.Z)(s,2),u=l[0],c=l[1],d=(0,o.useRef)(),m=function(){var a=e.value;return a?Array.isArray(a)?a:[a]:[]},p=function(){var a=(0,_.Z)((0,x.Z)().mark((function a(n){var i,r;return(0,x.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,(i=n.target.files)&&i.length){a.next=4;break}return a.abrupt("return");case 4:return r=i[0],j.Z.validate(r,{storage:e.storage,image:!0}),t(!0),a.next=9,j.Z.upload(r,{storage:e.storage,image:!0});case 9:r=a.sent,d.current.value="",t(!1),e.onChange([].concat((0,y.Z)(m()),[r])),a.next=21;break;case 15:a.prev=15,a.t0=a.catch(0),d.current.value="",console.error(a.t0),t(!1),N.Z.showMessage(a.t0);case 21:case"end":return a.stop()}}),a,null,[[0,15]])})));return function(e){return a.apply(this,arguments)}}(),h=e.max,g=e.readonly,b=(0,B.jsx)("label",{className:"profile__",children:(0,B.jsxs)("div",{className:"profile__avatar",style:{cursor:"pointer"},children:[(0,B.jsx)("img",{src:w.PM,style:{width:"130px",height:"130px",objectFit:"cover",borderRadius:"50%"},className:"lazyload"}),(0,B.jsx)(f.Z,{loading:i,iconClass:"fas fa-plus"}),(0,B.jsxs)("div",{className:"avatar__camera",children:[(0,B.jsx)("i",{className:"fa-solid fa-camera"}),(0,B.jsx)("input",{style:{display:"none"},disabled:i||g,accept:"image/*",type:"file",onChange:p,ref:d})]})]})});return(0,B.jsxs)(Z,{children:[g||h&&m().map((function(e){return{uid:e.id||void 0,name:e.name,status:"done",url:e.downloadUrl}})).length>=h?null:b,m()&&m().length?(0,B.jsx)("div",{className:"d-flex flex-row flex-wrap",children:m().map((function(a){return(0,B.jsxs)("div",{className:"profile__",children:[(0,B.jsx)("div",{className:"profile__avatar",children:(0,B.jsx)("img",{alt:a.name,src:a.downloadUrl,style:{width:"130px",height:"130px",objectFit:"cover",borderRadius:"50%"}})}),(0,B.jsxs)("div",{className:"img-buttons rounded-bottom",children:[(0,B.jsx)("button",{type:"button",className:"btn btn-link",onClick:function(){return function(e){c({src:e.downloadUrl,alt:e.name})}(a)},children:(0,B.jsx)("i",{className:"fas fa-search"})}),!g&&(0,B.jsx)("button",{type:"button",className:"btn btn-link ml-2",onClick:function(){return n=a.id,void e.onChange(m().filter((function(e){return e.id!==n})));var n},children:(0,B.jsx)("i",{className:"fas fa-times"})})]})]},a.id)}))}):null,u&&(0,B.jsx)(S.Z,{src:u.src,alt:u.alt,onClose:function(){c(null)}})]})},M=n(34141);function P(e){e.label;var a=e.name,n=e.hint,i=e.storage,t=e.max,r=(e.required,e.externalErrorMessage),l=(0,s.Gc)(),u=l.errors,c=l.formState,d=c.touched,m=c.isSubmitted,p=l.setValue,f=l.watch,h=l.register;(0,o.useEffect)((function(){h({name:a})}),[h,a]);var g=M.Z.errorMessage(a,u,d,m,r);return(0,B.jsxs)("div",{className:"form-group",children:[(0,B.jsx)("br",{}),(0,B.jsx)(k,{storage:i,value:f(a),onChange:function(n){p(a,n,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n)},max:t}),(0,B.jsx)("div",{className:"invalid-feedback",children:g}),Boolean(n)&&(0,B.jsx)("small",{className:"form-text text-muted",children:n})]})}P.defaultProps={max:void 0,required:!1};var A=P,T=n(40253),E=n(57463),R=n(25930),z=n(84078),G=g.Ry().shape({firstName:b.Z.string((0,R.ag)("user.fields.firstName"),{max:80}),lastName:b.Z.string((0,R.ag)("user.fields.lastName"),{max:175}),phoneNumber:b.Z.string((0,R.ag)("user.fields.phoneNumber"),{matches:/^[0-9]/,max:8}),pays:b.Z.string((0,R.ag)("user.fields.pays"),{max:175}),occupation:b.Z.string((0,R.ag)("user.fields.occupation"),{max:175}),regionTunisie:b.Z.string((0,R.ag)("user.fields.region"),{max:175}),region:b.Z.string((0,R.ag)("user.fields.region"),{max:175}),avatars:b.Z.images((0,R.ag)("user.fields.avatars"),{max:1})});var I=function(){var e=(0,p.I0)(),a=(0,p.v9)(m.Z.selectLoadingUpdateProfile),n=(0,p.v9)(m.Z.selectCurrentUser),i=(0,o.useState)((function(){var e=n||{};return{firstName:e.firstName,lastName:e.lastName,phoneNumber:e.phoneNumber,pays:e.pays,occupation:e.occupation,region:e.region,avatars:e.avatars||[],membership:e.membership}})),g=(0,r.Z)(i,1)[0],b=(0,s.cI)({resolver:(0,l.X)(G),mode:"all",defaultValues:g}),x=function(a){var i=(0,t.Z)((0,t.Z)({},a),{},{membership:n.membership});e(d.Z.doUpdateProfile(i))};return(0,B.jsxs)("div",{className:"app__updateprofile",children:[(0,B.jsx)(c.rU,{to:"/profile",children:(0,B.jsx)(z.Z,{})}),(0,B.jsx)(v.Z,{children:(0,B.jsx)(s.RV,(0,t.Z)((0,t.Z)({},b),{},{children:(0,B.jsxs)("div",{className:"modifyprofile",children:[(0,B.jsx)(A,{name:"avatars",label:"user.fields.avatars",storage:u.Z.values.userAvatarsProfiles,max:1}),(0,B.jsxs)("div",{className:"profile__user",children:[(0,B.jsxs)("div",{className:"profile__detaill",children:[(0,B.jsx)("div",{className:"title__profile",children:n.fullName}),(0,B.jsxs)("div",{className:"title__description",children:[n.occupation?(0,R.ag)("user.enumerators.occupation.".concat(n.occupation)):"",",",n.pays?(0,R.ag)("user.enumerators.pays.".concat(n.pays)):""]})]}),(0,B.jsx)("form",{onSubmit:b.handleSubmit(x),children:(0,B.jsx)("div",{className:"Login__container",children:(0,B.jsxs)("div",{className:"container__form",children:[(0,B.jsx)(h.Z,{name:"firstName",label:(0,R.ag)("user.fields.firstName"),placeholder:"Nom",autoComplete:"firstName",autoFocus:!0}),(0,B.jsx)(h.Z,{name:"lastName",label:(0,R.ag)("user.fields.lastName"),placeholder:"Pr\xe9nom",autoComplete:"Pr\xe9nom"}),(0,B.jsx)(T.Z,{name:"pays",label:(0,R.ag)("user.fields.pays"),options:E.Z.pays.map((function(e){return{value:e,label:(0,R.ag)("user.enumerators.pays.".concat(e))}}))}),b.watch().pays&&"Tunisia"===b.watch().pays&&(0,B.jsx)(T.Z,{name:"region",label:(0,R.ag)("user.fields.region"),options:E.Z.regionTunisie.map((function(e){return{value:e,label:(0,R.ag)("user.enumerators.region.".concat(e))}}))}),(0,B.jsx)(T.Z,{name:"occupation",label:(0,R.ag)("user.fields.occupation"),options:E.Z.occupation.map((function(e){return{value:e,label:(0,R.ag)("user.enumerators.occupation.".concat(e))}}))}),(0,B.jsx)(h.Z,{name:"phoneNumber",label:(0,R.ag)("user.fields.phoneNumber"),autoComplete:"phoneNumber"}),(0,B.jsx)("div",{className:"form__group",children:(0,B.jsxs)("div",{className:"input-group",children:[(0,B.jsx)("label",{htmlFor:"email",children:(0,R.ag)("user.fields.email")}),(0,B.jsx)("input",{type:"text",className:"form-control",id:"email",name:"email",value:n.email,readOnly:!0})]})}),(0,B.jsx)("div",{className:"form__oublier",children:(0,B.jsx)("div",{className:"oublier",children:(0,B.jsx)(c.rU,{to:"/password-change",className:"reset",children:(0,R.ag)("auth.changePassword")})})}),(0,B.jsxs)("div",{className:"item__button",children:[(0,B.jsx)("button",{className:"cancel__button",onClick:function(){Object.keys(g).forEach((function(e){b.setValue(e,g[e])}))},type:"button",disabled:a,children:(0,R.ag)("common.reset")}),(0,B.jsxs)("button",{className:"form__button",onClick:b.handleSubmit(x),disabled:a,children:[(0,B.jsx)(f.Z,{loading:a}),(0,R.ag)("common.save")]})]})]})})})]})]})}))})]})}},2107:function(e,a,n){n(72791);var i=n(87705),t=n(34141),r=n(80184);function o(e){var a=e.label,n=e.description,o=e.name,s=e.hint,l=e.type,u=(e.placeholder,e.autoFocus),c=e.autoComplete,d=e.required,m=e.externalErrorMessage,p=e.disabled,f=e.endAdornment,h=(0,i.Gc)(),g=h.register,b=h.errors,v=h.formState,x=v.touched,y=v.isSubmitted,_=t.Z.errorMessage(o,b,x,y,m);return(0,r.jsxs)("div",{className:"form__group",children:[(0,r.jsxs)("div",{className:f?"input-group":"",children:[Boolean(a)&&(0,r.jsx)("label",{className:"".concat(d?"required":null),htmlFor:o,children:a}),n,(0,r.jsx)("input",{id:o,name:o,type:l,ref:g,onChange:function(a){e.onChange&&e.onChange(a.target.value)},onBlur:function(a){e.onBlur&&e.onBlur(a)},autoFocus:u||void 0,autoComplete:c||void 0,disabled:p,className:"form-control ".concat(_?"is-invalid":"")}),f&&(0,r.jsx)("div",{className:"input-group-append",children:(0,r.jsx)("span",{className:"input-group-text",children:f})})]}),(0,r.jsx)("div",{className:"invalid-feedback",children:_}),Boolean(s)&&(0,r.jsx)("small",{className:"form-text text-muted",children:s})]})}o.defaultProps={type:"text",required:!1},a.Z=o},40253:function(e,a,n){n.d(a,{Z:function(){return _}});n(1413);var i=n(72791),t=n(15671),r=n(43144),o=n(60136),s=n(82963),l=n(61120),u=n(85781),c=n(64274),d=(n(54164),n(17826)),m=(n(89550),n(16075),n(52581)),p=n(45482);function f(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,l.Z)(e);if(a){var t=(0,l.Z)(this).constructor;n=Reflect.construct(i,arguments,t)}else n=i.apply(this,arguments);return(0,s.Z)(this,n)}}i.Component;var h=(0,m.m)(d.S),g=n(25930),b=n(87705),v=n(34141),x=n(80184);function y(e){var a=e.label,n=e.name,t=e.hint,r=e.options,o=e.required,s=e.mode,l=e.placeholder,u=e.isClearable,c=e.externalErrorMessage,d=(0,b.Gc)(),m=d.register,p=d.errors,f=d.formState,y=f.touched,_=f.isSubmitted,j=d.setValue,N=d.watch,C=v.Z.errorMessage(n,p,y,_,c),Z=N(n);(0,i.useEffect)((function(){m({name:n})}),[m,n]);var S=function(){return Z?Z.map((function(e){return r.find((function(a){return a.value===e}))})):[]},w=function(){var a=e.options;return null!=Z?a.find((function(e){return e.value===Z})):null},B=function(a){if(!a)return j(n,[],{shouldValidate:!0,shouldDirty:!0}),void(e.onChange&&e.onChange([]));var i=a.map((function(e){return e?e.value:e})).filter((function(e){return null!=e}));j(n,i,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(i)},k=function(a){if(!a)return j(n,null,{shouldValidate:!0,shouldDirty:!0}),void(e.onChange&&e.onChange(null));j(n,a.value,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(a.value)};Boolean(C);return(0,x.jsxs)("div",{className:"form-select",children:[Boolean(a)&&(0,x.jsx)("label",{className:"col-form-label ".concat(o?"required":null),children:a}),(0,x.jsx)("div",{style:{paddingBottom:"7px"}}),(0,x.jsx)(h,{value:"multiple"===e.mode?S():w(),onChange:function(a){return"multiple"===e.mode?B(a):k(a)},onBlur:function(a){e.onBlur&&e.onBlur(a)},id:n,name:n,options:r,isMulti:"multiple"===s,placeholder:l||"",isClearable:u,loadingMessage:function(){return(0,g.ag)("autocomplete.loading")},noOptionsMessage:function(){return(0,g.ag)("autocomplete.noOptions")}}),(0,x.jsx)("div",{className:"invalid-feedback",children:C}),Boolean(t)&&(0,x.jsx)("small",{className:"form-text text-muted",children:t})]})}y.defaultProps={required:!1,isClearable:!0};var _=y},18083:function(e,a,n){var i,t=n(30168),r=(n(72791),n(86538)),o=n(80184),s=r.ZP.div(i||(i=(0,t.Z)(["\n  /* The Modal (background) */\n  .modal {\n    display: block;\n    position: fixed; /* Stay in place */\n    z-index: 9999; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0, 0, 0); /* Fallback color */\n    background-color: rgba(\n      0,\n      0,\n      0,\n      0.9\n    ); /* Black w/ opacity */\n  }\n\n  /* Modal Content (Image) */\n  .modal-content {\n    margin: auto;\n    display: block;\n    width: 80%;\n    max-width: 700px;\n  }\n\n  /* Caption of Modal Image (Image Text) - Same Width as the Image */\n  #caption {\n    margin: auto;\n    display: block;\n    width: 80%;\n    max-width: 700px;\n    text-align: center;\n    color: #ccc;\n    padding: 10px 0;\n    height: 150px;\n  }\n\n  /* Add Animation - Zoom in the Modal */\n  .modal-content,\n  #caption {\n    animation-name: zoom;\n    animation-duration: 0.6s;\n  }\n\n  @keyframes zoom {\n    from {\n      transform: scale(0);\n    }\n    to {\n      transform: scale(1);\n    }\n  }\n\n  /* The Close Button */\n  .close {\n    position: absolute;\n    top: 15px;\n    right: 35px;\n    color: #f1f1f1;\n    font-size: 40px;\n    font-weight: bold;\n    transition: 0.3s;\n  }\n\n  .close:hover,\n  .close:focus {\n    color: #bbb;\n    text-decoration: none;\n    cursor: pointer;\n  }\n\n  /* 100% Image Width on Smaller Screens */\n  @media only screen and (max-width: 700px) {\n    .modal-content {\n      width: 100%;\n    }\n  }\n"])));a.Z=function(e){return(0,o.jsx)(s,{children:(0,o.jsxs)("div",{className:"modal",children:[(0,o.jsx)("span",{className:"close",onClick:e.onClose,children:"\xd7"}),(0,o.jsx)("img",{className:"modal-content",src:e.src,alt:e.alt})]})})}},57463:function(e,a,n){var i=n(84011),t={status:["active","invited","empty-permissions"],roles:Object.keys(i.Z.values),occupation:["Etudiant","Universitaire","Journalist","Societe_Civile","ONG_International","Secteur_Public","Organisme_Recherche","Mouvement_Social","Mouvement_Artistique","Entreprenariat_Social","Secteur_Prive","Activiste_Independant","Avocat","Parti_Politique","Autre"],regionTunisie:["tunis","ariana","beja","ben_arouss","bizerte","gabes","gafsa","jendouba","kairouan","kasserine","kebili","kef","mahdia","manouba","medenine","monastir","nabeul","sfax","sidi_bouzid","siliana","sousse","tataouine","tozeur","zaghouan"],pays:["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua_and_Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","The_Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia_and_Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina_Faso","Burundi","Cabo_Verde","Cambodia","Cameroon","Canada","Central_African_Republic","Chad","Chile","China","Colombia","Comoros","Congo,_Democratic_Republic_of_the","Congo,_Republic_of_the","Costa_Rica","C\xf4te_d\u2019Ivoire","Croatia","Cuba","Cyprus","Czech_Republic","Denmark","Djibouti","Dominica","Dominican_Republic","East_Timor_(Timor-Leste)","Ecuador","Egypt","El_Salvador","Equatorial_Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","The_Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea,_North","Korea,_South","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall_Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar_(Burma)","Namibia","Nauru","Nepal","Netherlands","New_Zealand","Nicaragua","Niger","Nigeria","North_Macedonia","Norway","Oman","Pakistan","Palau","Panama","Papua_New_Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint_Kitts_and_Nevis","Saint_Lucia","Saint_Vincent_and_the_Grenadines","Samoa","San_Marino","Sao_Tome_and_Principe","Saudi_Arabia","Senegal","Serbia","Seychelles","Sierra_Leone","Singapore","Slovakia","Slovenia","Solomon_Islands","Somalia","South_Africa","Spain","Sri_Lanka","Sudan","Sudan,_South","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tonga","Trinidad_and_Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United_Arab_Emirates","United_Kingdom","United_States","Uruguay","Uzbekistan","Vanuatu","Vatican_City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"]};a.Z=t},27530:function(e,a,n){!function(a){var n=/^(b|B)$/,i={iec:{bits:["b","Kib","Mib","Gib","Tib","Pib","Eib","Zib","Yib"],bytes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},jedec:{bits:["b","Kb","Mb","Gb","Tb","Pb","Eb","Zb","Yb"],bytes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}},t={iec:["","kibi","mebi","gibi","tebi","pebi","exbi","zebi","yobi"],jedec:["","kilo","mega","giga","tera","peta","exa","zetta","yotta"]};function r(e){var a,r,o,s,l,u,c,d,m,p,f,h,g,b,v,x=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},y=[],_=0,j=void 0,N=void 0;if(isNaN(e))throw new TypeError("Invalid number");return r=!0===x.bits,f=!0===x.unix,a=x.base||2,p=void 0!==x.round?x.round:f?1:2,u=void 0!==x.locale?x.locale:"",c=x.localeOptions||{},h=void 0!==x.separator?x.separator:"",g=void 0!==x.spacer?x.spacer:f?"":" ",v=x.symbols||{},b=2===a&&x.standard||"jedec",m=x.output||"string",s=!0===x.fullform,l=x.fullforms instanceof Array?x.fullforms:[],j=void 0!==x.exponent?x.exponent:-1,o=2<a?1e3:1024,(d=(N=Number(e))<0)&&(N=-N),(-1===j||isNaN(j))&&(j=Math.floor(Math.log(N)/Math.log(o)))<0&&(j=0),8<j&&(j=8),"exponent"===m?j:(0===N?(y[0]=0,y[1]=f?"":i[b][r?"bits":"bytes"][j]):(_=N/(2===a?Math.pow(2,10*j):Math.pow(1e3,j)),r&&o<=(_*=8)&&j<8&&(_/=o,j++),y[0]=Number(_.toFixed(0<j?p:0)),y[0]===o&&j<8&&void 0===x.exponent&&(y[0]=1,j++),y[1]=10===a&&1===j?r?"kb":"kB":i[b][r?"bits":"bytes"][j],f&&(y[1]="jedec"===b?y[1].charAt(0):0<j?y[1].replace(/B$/,""):y[1],n.test(y[1])&&(y[0]=Math.floor(y[0]),y[1]=""))),d&&(y[0]=-y[0]),y[1]=v[y[1]]||y[1],!0===u?y[0]=y[0].toLocaleString():0<u.length?y[0]=y[0].toLocaleString(u,c):0<h.length&&(y[0]=y[0].toString().replace(".",h)),"array"===m?y:(s&&(y[1]=l[j]?l[j]:t[b][j]+(r?"bit":"byte")+(1===y[0]?"":"s")),"object"===m?{value:y[0],symbol:y[1],exponent:j}:y.join(g)))}r.partial=function(e){return function(a){return r(a,e)}},e.exports=r}("undefined"!=typeof window?window:n.g)},49123:function(e,a,n){n.d(a,{Z:function(){return u}});var i="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),t=new Uint8Array(16);function r(){if(!i)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return i(t)}for(var o=[],s=0;s<256;++s)o[s]=(s+256).toString(16).substr(1);var l=function(e,a){var n=a||0,i=o;return[i[e[n++]],i[e[n++]],i[e[n++]],i[e[n++]],"-",i[e[n++]],i[e[n++]],"-",i[e[n++]],i[e[n++]],"-",i[e[n++]],i[e[n++]],"-",i[e[n++]],i[e[n++]],i[e[n++]],i[e[n++]],i[e[n++]],i[e[n++]]].join("")};var u=function(e,a,n){var i=a&&n||0;"string"==typeof e&&(a="binary"===e?new Array(16):null,e=null);var t=(e=e||{}).random||(e.rng||r)();if(t[6]=15&t[6]|64,t[8]=63&t[8]|128,a)for(var o=0;o<16;++o)a[i+o]=t[o];return a||l(t)}}}]);
//# sourceMappingURL=3271.54db76d6.chunk.js.map