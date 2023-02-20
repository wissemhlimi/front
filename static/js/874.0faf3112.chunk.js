"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[874],{50874:function(e,n,a){a.r(n),a.d(n,{default:function(){return w}});var t=a(29439),r=a(72791),s=a(69025),i=a(91523),o=a(1413),l=a(77942),c=a(28646),u=a(68835),d=a(87705),m={type:["Legal","logistique"],etat:["En_ligne","physique"],gouvernorat:["tunis","ariana","gafsa","kasserine","monastir","sousse","beja"],importance:["Haute","modere","normale"]},p=a(25930),f=a(45003),h=a(16931),g=a(44825),v=a(81657),x=a(2107),j=a(80184),b=l.Ry().shape({gouvernorat:c.Z.enumerator((0,p.ag)("entities.demandeAppui.fields.gouvernorat"),{options:m.gouvernorat}),phoneNumber:c.Z.string((0,p.ag)("user.fields.phoneNumber"),{matches:/^[0-9]/,max:8,required:!0}),descriptionFR:c.Z.string((0,p.ag)("entities.demandeAppui.fields.description"),{required:!1}),descriptionAR:c.Z.string((0,p.ag)("entities.demandeAppui.fields.description"),{required:!1}),supports:c.Z.files((0,p.ag)("entities.demandeAppui.fields.supports"),{})});var N=function(e){var n=(0,r.useState)("physique"),a=(0,t.Z)(n,2),s=a[0],i=a[1],l=(0,r.useState)("Legal"),c=(0,t.Z)(l,2),m=c[0],N=c[1],_=localStorage.getItem("language"),Z=(0,r.useState)((function(){var n=e.record||{};return i(n.personne),N(n.type),{email:n.email,personne:n.personne,phoneNumber:n.phoneNumber,descriptionFR:n.descriptionFR,descriptionAR:n.descriptionAR,supports:n.supports||[]}})),C=(0,t.Z)(Z,1)[0],y=(0,d.cI)({resolver:(0,u.X)(b),mode:"all",defaultValues:C}),q=function(n){var a;n.personne=s,n.statut="en_attente",n.type=m,e.onSubmit(null===e||void 0===e||null===(a=e.record)||void 0===a?void 0:a.id,n)},A=e.saveLoading;return(0,j.jsx)(d.RV,(0,o.Z)((0,o.Z)({},y),{},{children:(0,j.jsx)("form",{onSubmit:y.handleSubmit(q),children:(0,j.jsxs)("div",{className:"container__form",children:[(0,j.jsxs)("div",{className:"form__importance",children:[(0,j.jsx)("label",{htmlFor:"Importance",children:(0,p.ag)("entities.demandeAppui.fields.personne")}),(0,j.jsxs)("div",{className:"importance__status",children:[(0,j.jsx)("div",{className:"physique"===s?"status__active":"",onClick:function(){i("physique")},children:(0,p.ag)("common.physique")}),(0,j.jsx)("div",{className:"organisation"===s?"status__active":"",onClick:function(){i("organisation")},children:(0,p.ag)("common.organisation")})]})]}),(0,j.jsxs)("div",{className:"form__importance",children:[(0,j.jsx)("label",{htmlFor:"Importance",children:(0,p.ag)("entities.demandeAppui.fields.type")}),(0,j.jsxs)("div",{className:"importance__status",children:[(0,j.jsx)("div",{className:"Legal"===m?"status__active":"",onClick:function(){N("Legal")},children:(0,p.ag)("entities.demandeAppui.enumerators.type.Legal")}),(0,j.jsx)("div",{className:"logistique"===m?"status__active":"",onClick:function(){N("logistique")},children:(0,p.ag)("entities.demandeAppui.enumerators.type.logistique")})]})]}),(0,j.jsx)(x.Z,{name:"email",label:(0,p.ag)("user.fields.email"),autoComplete:"email"}),(0,j.jsx)(x.Z,{name:"phoneNumber",label:(0,p.ag)("user.fields.phoneNumber"),autoComplete:"phoneNumber"}),(0,j.jsx)(g.Z,{name:"supports",label:(0,p.ag)("entities.demandeAppui.fields.supports"),required:!1,storage:v.Z.values.demandeAppuiSupports,max:void 0,formats:void 0}),"fr"===_?(0,j.jsx)(f.Z,{name:"descriptionFR",label:(0,p.ag)("entities.demandeAppui.fields.description"),required:!1}):(0,j.jsx)(f.Z,{name:"descriptionAR",label:(0,p.ag)("entities.demandeAppui.fields.description"),required:!1}),(0,j.jsxs)("div",{className:"item__button",children:[(0,j.jsx)("button",{className:"cancel__button",onClick:function(){Object.keys(C).forEach((function(e){y.setValue(e,C[e])}))},type:"button",disabled:A,children:(0,p.ag)("common.reset")}),(0,j.jsxs)("button",{className:"form__button",onClick:y.handleSubmit(q),disabled:A,children:[(0,j.jsx)(h.Z,{loading:A}),(0,p.ag)("common.save")]})]})]})})}))},_=a(55478),Z=a(94233),C=a(50873),y=function(e){return e.demandeAppui.form},q=(0,C.P1)([y],(function(e){return e.record})),A={selectInitLoading:(0,C.P1)([y],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:(0,C.P1)([y],(function(e){return Boolean(e.saveLoading)})),selectRecord:q,selectRaw:y},S=a(48622),k=a(79271),F=a(75992),R=a(84078),B=a(72239);var w=function(e){var n=(0,r.useState)(!1),a=(0,t.Z)(n,2),o=a[0],l=a[1],c=(0,Z.I0)(),u=(0,k.$B)(),d=(0,Z.v9)(A.selectInitLoading),m=(0,Z.v9)(A.selectSaveLoading),f=(0,Z.v9)(A.selectRecord),h=(0,r.useState)(""),g=(0,t.Z)(h,2),v=g[0],x=g[1],b=(0,r.useState)("fr"),C=(0,t.Z)(b,2),y=C[0],q=C[1];(0,r.useEffect)((function(){!function(){var e;q(null!==(e=localStorage.getItem("language"))&&void 0!==e?e:"fr"),B.Z.getApropos().then((function(e){e.rows.length>0&&x(e.rows[0])})).catch((function(e){return console.error(e)}))}()}),[]);var w=Boolean(u.params.id),L=w?"entities.demandeAppui.edit.title":"entities.demandeAppui.new.title";return(0,r.useEffect)((function(){c(_.Z.doInit(u.params.id)),l(!0)}),[c,u.params.id]),(0,j.jsxs)("div",{className:"app__contenu",children:[(0,j.jsx)(i.rU,{to:"/profile",children:(0,j.jsx)(R.Z,{})}),(0,j.jsxs)("div",{className:"contenu",children:[(0,j.jsxs)("div",{className:"archieve__header",children:[(0,j.jsx)("h2",{children:(0,p.ag)("menu.demande_appui")}),(0,j.jsx)("div",{className:"communiquer__bar"})]}),v?(0,j.jsx)(j.Fragment,{children:"fr"===y?(0,j.jsx)(j.Fragment,{children:v.appelDescFR?(0,j.jsx)("div",{className:"contenu__description",children:v.appelDescFR}):null}):(0,j.jsx)(j.Fragment,{children:v.appelDescAR?(0,j.jsx)("div",{className:"contenu__description",children:v.appelDescAR}):null})}):null,(0,j.jsx)(s.Z,{children:(0,j.jsxs)("div",{className:"Login__container",children:[d&&(0,j.jsx)(F.C,{}),o&&!d&&(0,j.jsx)(N,{title:L,saveLoading:m,record:f,isEditing:w,onSubmit:function(e,n){c(w?_.Z.doUpdate(e,n):_.Z.doCreate(n))},onCancel:function(){return(0,S.s1)().push("/demande-appui")}})]})})]})]})}},44825:function(e,n,a){a.d(n,{Z:function(){return v}});var t=a(72791),r=a(74165),s=a(93433),i=a(15861),o=a(29439),l=a(38658),c=a(68561),u=a(25930),d=a(16931),m=a(80184);var p=function(e){var n=(0,t.useState)(!1),a=(0,o.Z)(n,2),p=a[0],f=a[1],h=(0,t.useRef)(),g=function(){var n=e.value;return n?Array.isArray(n)?n:[n]:[]},v=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(a){var t,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,(t=a.target.files)&&t.length){n.next=4;break}return n.abrupt("return");case 4:return i=t[0],l.Z.validate(i,{storage:e.storage,formats:e.formats}),f(!0),n.next=9,l.Z.upload(i,{storage:e.storage,formats:e.formats});case 9:i=n.sent,h.current.value="",f(!1),e.onChange([].concat((0,s.Z)(g()),[i])),n.next=21;break;case 15:n.prev=15,n.t0=n.catch(0),h.current.value="",console.error(n.t0),f(!1),c.Z.showMessage(n.t0);case 21:case"end":return n.stop()}}),n,null,[[0,15]])})));return function(e){return n.apply(this,arguments)}}(),x=e.max,j=e.readonly,b=(0,m.jsxs)("label",{className:"btn btn-outline-secondary px-4 mb-2",style:{cursor:"pointer"},children:[(0,m.jsxs)("div",{className:"upload__file",children:[(0,u.ag)("fileUploader.upload"),(0,m.jsx)(d.Z,{loading:p,iconClass:"fas fa-plus"})]}),(0,m.jsx)("input",{style:{display:"none"},disabled:p||j,accept:function(){var n=e.schema;if(n&&n.formats)return n.formats.map((function(e){return".".concat(e)})).join(",")}(),type:"file",onChange:v,ref:h})]});return(0,m.jsxs)("div",{children:[j||x&&g().map((function(e){return{uid:e.id||void 0,name:e.name,status:"done",url:e.downloadUrl}})).length>=x?null:b,g()&&g().length?(0,m.jsx)("div",{children:g().map((function(n){return(0,m.jsxs)("div",{className:"file__show",children:[(0,m.jsx)("i",{className:"fas fa-link text-muted mr-2"}),(0,m.jsx)("a",{href:n.downloadUrl,target:"_blank",rel:"noopener noreferrer",download:!0,children:n.name}),!j&&(0,m.jsx)("button",{className:"btn btn-link",type:"button",onClick:function(){return a=n.id,void e.onChange(g().filter((function(e){return e.id!==a})));var a},children:(0,m.jsx)("i",{className:"fas fa-times"})})]},n.id)}))}):null]})},f=a(87705),h=a(34141);function g(e){var n=e.label,a=e.name,r=e.hint,s=e.storage,i=e.formats,o=e.max,l=e.required,c=e.externalErrorMessage,u=(0,f.Gc)(),d=u.register,g=u.errors,v=u.formState,x=v.touched,j=v.isSubmitted,b=u.setValue,N=u.watch;(0,t.useEffect)((function(){d({name:a})}),[d,a]);var _=h.Z.errorMessage(a,g,x,j,c);return(0,m.jsxs)("div",{className:"form-group",children:[Boolean(n)&&(0,m.jsx)("label",{className:"col-form-label ".concat(l?"required":null),htmlFor:a,children:n}),(0,m.jsx)("br",{}),(0,m.jsx)(p,{storage:s,formats:i,value:N(a),onChange:function(n){b(a,n,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n)},max:o}),(0,m.jsx)("div",{className:"invalid-feedback",children:_}),Boolean(r)&&(0,m.jsx)("small",{className:"form-text text-muted",children:r})]})}g.defaultProps={max:void 0,required:!1};var v=g},2107:function(e,n,a){a(72791);var t=a(87705),r=a(34141),s=a(80184);function i(e){var n=e.label,a=e.description,i=e.name,o=e.hint,l=e.type,c=(e.placeholder,e.autoFocus),u=e.autoComplete,d=e.required,m=e.externalErrorMessage,p=e.disabled,f=e.endAdornment,h=(0,t.Gc)(),g=h.register,v=h.errors,x=h.formState,j=x.touched,b=x.isSubmitted,N=r.Z.errorMessage(i,v,j,b,m);return(0,s.jsxs)("div",{className:"form__group",children:[(0,s.jsxs)("div",{className:f?"input-group":"",children:[Boolean(n)&&(0,s.jsx)("label",{className:"".concat(d?"required":null),htmlFor:i,children:n}),a,(0,s.jsx)("input",{id:i,name:i,type:l,ref:g,onChange:function(n){e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},autoFocus:c||void 0,autoComplete:u||void 0,disabled:p,className:"form-control ".concat(N?"is-invalid":"")}),f&&(0,s.jsx)("div",{className:"input-group-append",children:(0,s.jsx)("span",{className:"input-group-text",children:f})})]}),(0,s.jsx)("div",{className:"invalid-feedback",children:N}),Boolean(o)&&(0,s.jsx)("small",{className:"form-text text-muted",children:o})]})}i.defaultProps={type:"text",required:!1},n.Z=i},45003:function(e,n,a){a(72791);var t=a(87705),r=a(34141),s=a(80184);function i(e){var n=e.label,a=e.name,i=e.hint,o=e.size,l=e.placeholder,c=e.autoFocus,u=e.autoComplete,d=e.externalErrorMessage,m=e.required,p={small:"col-form-label-sm",large:"col-form-label-lg"}[o]||"",f={small:"form-control-sm",large:"form-control-lg"}[o]||"",h=(0,t.Gc)(),g=h.register,v=h.errors,x=h.formState,j=x.touched,b=x.isSubmitted,N=r.Z.errorMessage(a,v,j,b,d);return(0,s.jsxs)("div",{className:"form_textarea",children:[Boolean(n)&&(0,s.jsx)("label",{className:"col-form-label ".concat(m?"required":null," ").concat(p),htmlFor:a,children:n}),(0,s.jsx)("textarea",{id:a,name:a,ref:g,onChange:function(n){e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},placeholder:l||void 0,autoFocus:c||void 0,autoComplete:u||void 0,className:"form-control ".concat(f," ").concat(N?"is-invalid":"")}),(0,s.jsx)("div",{className:"invalid-feedback",children:N}),Boolean(i)&&(0,s.jsx)("small",{className:"form-text text-muted",children:i})]})}i.defaultProps={required:!1},n.Z=i}}]);
//# sourceMappingURL=874.0faf3112.chunk.js.map