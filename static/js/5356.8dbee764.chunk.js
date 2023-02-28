"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[5356],{35356:function(n,e,i){i.r(e),i.d(e,{default:function(){return I}});var t,a=i(29439),r=i(72791),o=i(94233),c=i(30589),s=i(45243),l=i(86931),p=i(75992),d=i(70697),u=i(30168),g=i(86538).ZP.div(t||(t=(0,u.Z)(['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 54px;\n  position: absolute;\n  right: 0;\n  left: 0;\n  bottom: 40px;\n\n  .rc-pagination {\n    display: flex;\n    aling-items: center;\n    justify-content: center;\n    column-gap: 5px;\n    font-size: 12px;\n    font-family: "Arial";\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    padding: 0;\n    margin-bottom: 0;\n    width: 100%;\n  }\n\n  .rc-pagination > li {\n    list-style: none;\n  }\n  .rc-pagination-total-text {\n    float: left;\n    height: 30px;\n    line-height: 30px;\n    list-style: none;\n    padding: 0;\n    margin: 0 8px 0 0;\n  }\n  .rc-pagination:after {\n    content: " ";\n    display: block;\n    height: 0;\n    clear: both;\n    overflow: hidden;\n    visibility: hidden;\n  }\n  .rc-pagination-item {\n    font-family: "Proxima Nova";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 22px;\n    cursor: pointer;\n    padding: 0 15px;\n    height: 35px;\n    display: grid;\n    place-items: center;\n    color: var(--violet);\n    border: 1px solid #a3a3a9;\n    background-color: var(--white);\n  }\n  .rc-pagination-item a {\n    text-decoration: none;\n    color: var(--violet);\n  }\n  .rc-pagination-item:hover {\n    border-color: var(--primary);\n  }\n  .rc-pagination-item:hover a {\n    color: var(--primary);\n  }\n  .rc-pagination-item-disabled {\n    cursor: not-allowed;\n    color: var(--gray4);\n    background-color: var(--background);\n  }\n  .rc-pagination-item-disabled:hover {\n    border-color: #d9d9d9;\n  }\n  .rc-pagination-item-disabled:hover a {\n    color: #d9d9d9;\n  }\n  .rc-pagination-item-active {\n    background-color: var(--violet);\n    border-color: #a3a3a9;\n  }\n  .rc-pagination-item-active a {\n    color: var(--white);\n  }\n  .rc-pagination-item-active:hover a {\n    color: #fff !important;\n  }\n  .rc-pagination-jump-prev:after,\n  .rc-pagination-jump-next:after {\n    content: "\u2022\u2022\u2022";\n    display: block;\n    letter-spacing: 2px;\n    color: #ccc;\n    font-size: 12px;\n    margin-top: 1px;\n  }\n  .rc-pagination-jump-prev:hover:after,\n  .rc-pagination-jump-next:hover:after {\n    color: var(--primary);\n  }\n  .rc-pagination-jump-prev:hover:after {\n    content: "\xab";\n  }\n  .rc-pagination-jump-next:hover:after {\n    content: "\xbb";\n  }\n  .rc-pagination-jump-prev-adherent-icon,\n  .rc-pagination-jump-next-adherent-icon {\n    position: relative;\n  }\n  .rc-pagination-jump-prev-adherent-icon:after,\n  .rc-pagination-jump-next-adherent-icon:after {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    margin: auto;\n    transition: all 0.2s;\n    content: "\u2022\u2022\u2022";\n    opacity: 1;\n    display: block;\n    letter-spacing: 2px;\n    color: #ccc;\n    font-size: 12px;\n    margin-top: 1px;\n  }\n  .rc-pagination-jump-prev-adherent-icon .adherent-icon-jump-prev,\n  .rc-pagination-jump-next-adherent-icon .adherent-icon-jump-prev,\n  .rc-pagination-jump-prev-adherent-icon .adherent-icon-jump-next,\n  .rc-pagination-jump-next-adherent-icon .adherent-icon-jump-next {\n    opacity: 0;\n    transition: all 0.2s;\n  }\n  .rc-pagination-jump-prev-adherent-icon:hover:after,\n  .rc-pagination-jump-next-adherent-icon:hover:after {\n    opacity: 0;\n    color: #ccc;\n  }\n  .rc-pagination-jump-prev-adherent-icon:hover .adherent-icon-jump-prev,\n  .rc-pagination-jump-next-adherent-icon:hover .adherent-icon-jump-prev,\n  .rc-pagination-jump-prev-adherent-icon:hover .adherent-icon-jump-next,\n  .rc-pagination-jump-next-adherent-icon:hover .adherent-icon-jump-next {\n    opacity: 1;\n    color: var(--primary);\n  }\n  .rc-pagination-prev,\n  .rc-pagination-jump-prev,\n  .rc-pagination-jump-next {\n    margin-right: 8px;\n  }\n  .rc-pagination-prev,\n  .rc-pagination-next,\n  .rc-pagination-jump-prev,\n  .rc-pagination-jump-next {\n    cursor: pointer;\n    color: #666;\n    font-size: 10px;\n    border-radius: 6px;\n    list-style: none;\n    min-width: 31px;\n    height: 31px;\n    line-height: 31px;\n    float: left;\n    text-align: center;\n  }\n  .rc-pagination-prev a:after {\n    content: " \u2039 Precedent";\n    display: block;\n    font-size: 14px;\n    font-family: "Proxima Nova";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 22px;\n    color: var(--violet);\n  }\n  .rc-pagination-next a:after {\n    content: " Suivant \u203a";\n    display: block;\n    font-size: 14px;\n    font-family: "Proxima Nova";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 22px;\n    color: var(--violet);\n    padding: 140px;\n  }\n  .rc-pagination-prev,\n  .rc-pagination-next {\n    border: 1px solid #a3a3a9;\n    font-family: "Proxima Nova";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 22px;\n    cursor: pointer;\n    padding: 0 15px;\n    height: 35px;\n    display: grid;\n    place-items: center;\n    color: var(--violet);\n  }\n  .rc-pagination-prev a,\n  .rc-pagination-next a {\n    color: #666;\n  }\n  .rc-pagination-prev a:after,\n  .rc-pagination-next a:after {\n    margin-top: -1px;\n  }\n  .rc-pagination-disabled {\n    cursor: not-allowed;\n  }\n  .rc-pagination-disabled a {\n    color: var(--gray4);\n    background-color: var(--background);\n  }\n  .rc-pagination-disabled .rc-pagination-item,\n  .rc-pagination-disabled .rc-pagination-prev,\n  .rc-pagination-disabled .rc-pagination-next {\n    cursor: not-allowed;\n  }\n  .rc-pagination-disabled .rc-pagination-item:hover,\n  .rc-pagination-disabled .rc-pagination-prev:hover,\n  .rc-pagination-disabled .rc-pagination-next:hover {\n    border-color: #d9d9d9;\n  }\n  .rc-pagination-disabled .rc-pagination-item:hover a,\n  .rc-pagination-disabled .rc-pagination-prev:hover a,\n  .rc-pagination-disabled .rc-pagination-next:hover a {\n    color: #d9d9d9;\n  }\n  .rc-pagination-disabled .rc-pagination-jump-prev,\n  .rc-pagination-disabled .rc-pagination-jump-next {\n    pointer-events: none;\n  }\n  .rc-pagination-options {\n    float: left;\n    margin-left: 15px;\n  }\n  .rc-pagination-options-size-changer {\n    float: left;\n    width: 80px;\n  }\n  .rc-pagination-options-quick-jumper {\n    float: left;\n    margin-left: 16px;\n    height: 31px;\n    line-height: 31px;\n  }\n  .rc-pagination-options-quick-jumper input {\n    margin: 0 8px;\n    box-sizing: border-box;\n    background-color: #fff;\n    border-radius: 6px;\n    border: 1px solid #d9d9d9;\n    outline: none;\n    padding: 3px 12px;\n    width: 50px;\n    height: 31px;\n  }\n  .rc-pagination-options-quick-jumper input:hover {\n    border-color: var(--primary);\n  }\n\n  .rc-pagination-options-quick-jumper button {\n    display: inline-block;\n    margin: 0 8px;\n    font-weight: 500;\n    text-align: center;\n    -ms-touch-action: manipulation;\n    touch-action: manipulation;\n    cursor: pointer;\n    background-image: none;\n    border: 1px solid transparent;\n    white-space: nowrap;\n    padding: 0 15px;\n    font-size: 12px;\n    border-radius: 6px;\n    height: 31px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n    position: relative;\n    color: rgba(0, 0, 0, 0.65);\n    background-color: #fff;\n    border-color: #d9d9d9;\n  }\n  .rc-pagination-options-quick-jumper button:hover,\n  .rc-pagination-options-quick-jumper button:active,\n  .rc-pagination-options-quick-jumper button:focus {\n    color: var(--primary);\n    background-color: #fff;\n    border-color: var(--primary);\n  }\n  .rc-pagination-simple .rc-pagination-prev,\n  .rc-pagination-simple .rc-pagination-next {\n    border: none;\n    height: 24px;\n    line-height: 24px;\n    margin: 0;\n    font-size: 18px;\n  }\n  .rc-pagination-simple .rc-pagination-simple-pager {\n    float: left;\n    margin-right: 8px;\n    list-style: none;\n  }\n  .rc-pagination-simple .rc-pagination-simple-pager .rc-pagination-slash {\n    margin: 0 10px;\n  }\n  .rc-pagination-simple .rc-pagination-simple-pager input {\n    margin: 0 8px;\n    box-sizing: border-box;\n    background-color: #fff;\n    border-radius: 6px;\n    border: 1px solid #d9d9d9;\n    outline: none;\n    padding: 5px 8px;\n    min-height: 20px;\n  }\n  .rc-pagination-simple .rc-pagination-simple-pager input:hover {\n    border-color: var(--primary);\n  }\n  .rc-pagination-simple .rc-pagination-simple-pager button {\n    display: inline-block;\n    margin: 0 8px;\n    font-weight: 500;\n    text-align: center;\n    -ms-touch-action: manipulation;\n    touch-action: manipulation;\n    cursor: pointer;\n    background-image: none;\n    border: 1px solid transparent;\n    white-space: nowrap;\n    padding: 0 8px;\n    font-size: 12px;\n    border-radius: 6px;\n    height: 26px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n    position: relative;\n    color: rgba(0, 0, 0, 0.65);\n    background-color: #fff;\n    border-color: #d9d9d9;\n  }\n  .rc-pagination-simple .rc-pagination-simple-pager button:hover,\n  .rc-pagination-simple .rc-pagination-simple-pager button:active,\n  .rc-pagination-simple .rc-pagination-simple-pager button:focus {\n    color: var(--primary);\n    background-color: #fff;\n    border-color: var(--primary);\n  }\n  @media only screen and (max-width: 1024px) {\n    .rc-pagination-item-after-jump-prev,\n    .rc-pagination-item-before-jump-next {\n      display: none;\n    }\n  }\n']))),m=i(25930),h=i(80184),x=function(n){(0,r.useEffect)((function(){document.querySelector('[aria-label="next page"]').innerHTML="".concat((0,m.ag)("table.suivant")),document.querySelector('[aria-label="prev page"]').innerHTML="".concat((0,m.ag)("table.precedent"))}),[]);var e=n.pagination,i=(n.disabled,n.showTotal),t=e.current,a=e.pageSize,o=e.total;return(0,h.jsx)(g,{children:(0,h.jsx)(d.Z,{pageSize:Number(a),current:t,onChange:function(e,i){n.onChange({current:Number(e),pageSize:Number(i)})},total:o,showTotal:i||void 0})})},v=i(91523),f=i(39126),j=i(4726),b=i(46762),y=i(67489);var _=function(n){var e=(0,o.I0)();(0,r.useEffect)((function(){e(s.Z.doFetch())}),[]);var i=(0,o.v9)(l.Z.selectLoading),t=(0,o.v9)(l.Z.selectRows),a=(0,o.v9)(l.Z.selectHasRows),d=(0,o.v9)(l.Z.selectPagination),u=(0,o.v9)(l.Z.selectCount),g=(0,o.v9)(c.Z.selectCurrentUser),_=(0,o.v9)(c.Z.selectCurrentTenant),N=b.Z.values,w=new y.Z(_,g),Z=w.match(N.demandeAppuiCreate),k=w.match(N.demandeAppuiEdit),z={fontSize:"1.2rem",color:"#ffff"};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"list__button",children:[(0,h.jsx)("div",{className:"list__title",children:(0,h.jsx)("h2",{children:(0,m.ag)("menu.contenu_recent")})}),Z?(0,h.jsx)(v.rU,{to:"/appui/new",children:(0,h.jsx)("div",{className:"button__contenue",children:(0,m.ag)("menu.demande_appui")})}):null]}),(0,h.jsx)("div",{className:"list__search",children:(0,h.jsxs)("div",{className:"search__left",children:[u," ",(0,m.ag)("menu.contenus")]})}),(0,h.jsxs)("div",{className:"list__items",children:[(0,h.jsxs)("table",{children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsxs)("td",{children:[" ",(0,m.ag)("entities.demandeAppui.fields.personne")]}),(0,h.jsxs)("td",{children:[" ",(0,m.ag)("entities.demandeAppui.fields.email")]}),(0,h.jsx)("td",{children:(0,m.ag)("entities.demandeAppui.fields.phoneNumber")}),(0,h.jsxs)("td",{children:[" ",(0,m.ag)("entities.demandeAppui.fields.description")]}),(0,h.jsx)("td",{})]})}),(0,h.jsxs)("tbody",{children:[i&&(0,h.jsx)("tr",{children:(0,h.jsx)("td",{colSpan:100,children:(0,h.jsx)(p.C,{})})}),!i&&!a&&(0,h.jsx)("tr",{children:(0,h.jsx)("td",{colSpan:100,children:(0,h.jsx)("div",{className:"d-flex justify-content-center",children:(0,m.ag)("table.noData")})})}),!i&&t.map((function(n){return(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:(0,m.ag)("entities.demandeAppui.enumerators.personne.".concat(n.personne))}),(0,h.jsx)("td",{children:n.email}),(0,h.jsx)("td",{children:n.phoneNumber}),(0,h.jsx)("td",{children:j.Z.Trans("description",n)}),k?(0,h.jsx)("td",{style:z,children:(0,h.jsx)(v.rU,{to:"/appui/".concat(n.id,"/edit"),children:(0,h.jsx)(f.jox,{className:"icon",color:"#a3a3a9"})})}):null]},n.id)}))]})]}),(0,h.jsx)(x,{onChange:function(n){e(s.Z.doChangePaginationAndSort(n,{}))},disabled:i,pagination:d})]})]})},N=i(57688),w=i(26189),Z=i(27314);var k=function(n){var e=n.currentUser,i=n.countAppui,t=n.countPublication,a=n.Image,r=(0,o.v9)(c.Z.selectCurrentTenant),s=b.Z.values,l=new y.Z(r,e),p=l.match(s.demandeAppuiCreate),d=l.match(s.publicationCreate);return(0,h.jsxs)("div",{className:"profile__header",children:[(0,h.jsxs)("div",{className:"profile__avatar",children:[(0,h.jsx)("img",{src:a||Z.PM,alt:"",width:"130",height:"130",style:{borderRadius:"50%",objectFit:"cover"},className:"lazyload"}),(0,h.jsx)("div",{className:"avatar__camera",children:(0,h.jsx)("i",{className:"fa-solid fa-camera"})})]}),(0,h.jsxs)("div",{className:"profile__description",children:[(0,h.jsxs)("div",{className:"description__top",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"title__profile",children:e.fullName}),(0,h.jsxs)("div",{className:"title__description",children:[e.occupation?(0,m.ag)("user.enumerators.occupation.".concat(e.occupation)):"",",",e.pays?(0,m.ag)("user.enumerators.pays.".concat(e.pays)):""]})]}),(0,h.jsx)(v.rU,{to:"/profile/update",children:(0,h.jsx)("div",{className:"modify",children:(0,m.ag)("common.edit")})})]}),(0,h.jsxs)("div",{className:"description__bottom",children:[d?(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"description__number",children:t}),(0,m.ag)("entities.publication.label")]}):null,p?(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"description__number",children:i}),(0,m.ag)("entities.demandeAppui.label")]}):null]})]})]})},z=i(76053),C=i(40071),S=i(85880),A=i(7692),P=i(78820),q=i(14651);var U=function(n){var e=function(){var e=n.value;return e?Array.isArray(e)?e:[e]:[]};return e().length?(0,h.jsx)(h.Fragment,{children:e().map((function(n){return e=n,(0,h.jsx)("div",{children:j.Z.Trans("title",e)},e.id);var e}))}):null},F=i(72426),T=i.n(F);var E=function(n){var e=(0,o.I0)();(0,r.useEffect)((function(){e(w.Z.doFetch())}),[]);var i=(0,o.v9)(N.Z.selectLoading),t=(0,o.v9)(N.Z.selectRows),a=(0,o.v9)(N.Z.selectHasRows),s=(0,o.v9)(N.Z.selectCount),l=(0,o.v9)(N.Z.selectPagination),d=(0,o.v9)(c.Z.selectCurrentUser),u=(0,o.v9)(c.Z.selectCurrentTenant),g=b.Z.values,j=new y.Z(u,d),_=j.match(g.publicationCreate),Z=j.match(g.publicationEdit),k={width:"70px",display:"flex",alignItems:"center",justifyContent:"space-between"},F={fontSize:"1.2rem",color:"#ffff"};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"list__button",children:[(0,h.jsx)("div",{className:"list__title",children:(0,h.jsx)("h2",{children:(0,m.ag)("menu.contenu_recent")})}),_?(0,h.jsx)(v.rU,{to:"/publication/new",children:(0,h.jsx)("div",{className:"button__contenue",children:(0,m.ag)("menu.suggerer_de_contenu")})}):null]}),(0,h.jsx)("div",{className:"list__search",children:(0,h.jsxs)("div",{className:"search__left",children:[s," ",(0,m.ag)("menu.contenus")]})}),(0,h.jsxs)("div",{className:"list__items",children:[(0,h.jsxs)("table",{children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:(0,m.ag)("entities.publication.fields.thematique")}),(0,h.jsx)("td",{children:(0,m.ag)("entities.publication.fields.categorie")}),(0,h.jsx)("td",{children:(0,m.ag)("entities.publication.fields.type")}),(0,h.jsx)("td",{children:(0,m.ag)("entities.publication.fields.statut")}),(0,h.jsx)("td",{children:(0,m.ag)("entities.publication.fields.date")}),(0,h.jsx)("td",{})]})}),(0,h.jsxs)("tbody",{children:[i&&(0,h.jsx)("tr",{children:(0,h.jsx)("td",{colSpan:100,children:(0,h.jsx)(p.C,{})})}),!i&&!a&&(0,h.jsx)("tr",{children:(0,h.jsx)("td",{colSpan:100,children:(0,h.jsx)("div",{className:"d-flex justify-content-center",children:(0,m.ag)("table.noData")})})}),!i&&t.map((function(n){return(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:(0,h.jsx)(U,{value:n.thematique})}),(0,h.jsx)("td",{children:(0,h.jsx)(U,{value:n.category})}),(0,h.jsx)("td",{children:(0,h.jsxs)("div",{style:k,children:[{Texte:(0,h.jsx)(z.hIq,{className:"icon",fontSize:20}),audio:(0,h.jsx)(A.dxk,{className:"icon",fontSize:20}),"vid\xe9o":(0,h.jsx)(C._DQ,{className:"icon",fontSize:20}),lien_web:(0,h.jsx)(S.cU6,{className:"icon",fontSize:20}),photo:(0,h.jsx)(f.BB5,{className:"icon",fontSize:20}),infographie:(0,h.jsx)(q.mMd,{className:"icon",fontSize:20}),statistiques:(0,h.jsx)(A.s2C,{className:"icon",fontSize:20}),autre:(0,h.jsx)(P.KEm,{className:"icon",fontSize:20})}[n.type],(0,m.ag)("entities.publication.enumerators.type.".concat(n.type))]})}),(0,h.jsx)("td",{children:(0,h.jsx)("span",{className:n.statut,children:(0,m.ag)("entities.publication.enumerators.statut.".concat(n.statut))})}),(0,h.jsxs)("td",{children:[" ",T()(n.date).format("DD-MM-YYYY")]}),Z?(0,h.jsx)("td",{style:F,children:(0,h.jsx)(v.rU,{to:"/publication/".concat(n.id,"/edit"),children:(0,h.jsx)(f.jox,{className:"icon",color:"#a3a3a9"})})}):null]},n.id)}))]})]}),(0,h.jsx)(x,{onChange:function(n){e(w.Z.doChangePaginationAndSort(n,{}))},disabled:i,pagination:l})]})]})};var I=function(){var n=(0,o.I0)(),e=(0,o.v9)(c.Z.selectCurrentUser),i=(0,o.v9)(c.Z.selectCurrentTenant),t=b.Z.values,d=new y.Z(i,e),u=d.match(t.demandeAppuiCreate),g=d.match(t.publicationCreate),x=(0,o.v9)(c.Z.selectCurrentUserAvatar),v=(0,r.useState)(g?"tab1":"tab2"),f=(0,a.Z)(v,2),j=f[0],Z=f[1],z=(0,o.v9)(l.Z.selectCount),C=(0,o.v9)(N.Z.selectCount),S=(0,o.v9)(N.Z.selectLoading),A=(0,o.v9)(l.Z.selectLoading)||S;return(0,r.useEffect)((function(){u&&Promise.all([n(s.Z.doFetch())]).then((function(n){})).catch((function(n){})),g&&Promise.all([n(w.Z.doFetch())]).then((function(n){})).catch((function(n){}))}),[]),(0,h.jsx)("div",{className:"app__updateprofile",children:(0,h.jsxs)("div",{className:"updateprofile",children:[A&&(0,h.jsx)(p.C,{styles:134.545}),!A&&(0,h.jsx)(k,{currentUser:e,countAppui:z,countPublication:C,Image:x}),(0,h.jsxs)("div",{className:"profile__list",children:[(0,h.jsx)("div",{className:"tabs",children:(0,h.jsxs)("ul",{className:"nav",children:[g?(0,h.jsx)("li",{className:"tab1"===j?"active__li__tabs":"",onClick:function(){Z("tab1")},children:(0,m.ag)("menu.contenu")}):null,u?(0,h.jsx)("li",{className:"tab2"===j?"active__li__tabs":"",onClick:function(){Z("tab2")},children:(0,m.ag)("menu.demande_appui")}):null]})}),(0,h.jsxs)(r.Fragment,{children:[g?(0,h.jsx)(h.Fragment,{children:"tab1"===j&&(0,h.jsx)(E,{})}):null,u?(0,h.jsx)(h.Fragment,{children:"tab2"===j&&(0,h.jsx)(_,{})}):null]})]})]})})}},75992:function(n,e,i){var t,a=i(30168),r=(i(72791),i(86538)),o=i(80184),c=r.ZP.div(t||(t=(0,a.Z)(["\n  margin: 0 12px;\n  .lds-ring {\n    display: inline-block;\n    position: relative;\n    width: 15px;\n    height: 15px;\n  }\n  .lds-ring div {\n    box-sizing: border-box;\n    display: block;\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    border: 2px solid #fff;\n    border-radius: 50%;\n    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    border-color: var(--violet) transparent transparent transparent;\n  }\n  .lds-ring div:nth-child(1) {\n    animation-delay: -0.45s;\n  }\n  .lds-ring div:nth-child(2) {\n    animation-delay: -0.3s;\n  }\n  .lds-ring div:nth-child(3) {\n    animation-delay: -0.15s;\n  }\n  @keyframes lds-ring {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"])));e.C=function(n){var e=n.styles;return(0,o.jsx)(c,{children:(0,o.jsx)("div",{style:{height:e},children:(0,o.jsxs)("div",{className:"lds-ring",children:[(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{})]})})})}}}]);
//# sourceMappingURL=5356.8dbee764.chunk.js.map