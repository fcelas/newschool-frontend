(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{277:function(t,e,n){var content=n(282);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("46b22e94",content,!0,{sourceMap:!1})},278:function(t,e,n){var content=n(284);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("10e8a9fe",content,!0,{sourceMap:!1})},279:function(t,e,n){var content=n(287);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("5866f0f6",content,!0,{sourceMap:!1})},280:function(t,e,n){"use strict";n(174),n(21),n(11),n(7),n(13),n(32),n(6);var o=n(3),r=n(290),c=n.n(r),l=n(105),d=n(104);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var h={data:function(){return{menu:[{id:1,label:"Meu Perfil",icon:"mdi-account",link:"perfil"},{id:2,label:"Meus Cursos",icon:"mdi-library",link:"meus-cursos"},{id:3,label:"Meus Certificados",icon:"mdi-school",link:"certificados"},{id:4,label:"Cola com Nóix",icon:"mdi-gesture-double-tap",link:"/contribua"},{id:5,label:"O que é a new school?",icon:"mdi-library-books",link:"/sobre"},{id:7,label:"Fale com a gente",icon:"mdi-phone-message-outline",link:"/contato"},{id:8,label:"Apoie a new school",icon:"mdi-volume-high",link:"/investidores"}]}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)("user",["clearInfoUser"]),{closeMenu:function(){document.getElementById("menu-btn").click()},logout:function(){var t=this;this.logoutSocial().then((function(){$nuxt._router.push("/login"),localStorage.clear(),t.clearInfoUser()}))},changeRoutingIfAdmin:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[1].link="/admin/listar-cursos")},logoutSocial:function(){return this.$auth.loggedIn?this.$auth.logout():Promise.resolve()}}),computed:{user:function(){return this.$store.state.user.data}},mounted:function(){d.a.isTokenValid().status&&(this.auth=!0,this.changeRoutingIfAdmin())},filters:{simplifyName:function(t){if(!t)return"";return t.split(" ").length>2?/^(\S*\s+\S+).*/.exec(t)[1]:t}},components:{Avatar:c.a}},m=(n(281),n(39)),f=n(43),x=n.n(f),k=n(272),_=n(267),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-page"},[n("main",[n("section",{attrs:{id:"info"}},[n("div",{attrs:{id:"avatar"}},[n("div",{staticClass:"flex-center border-profile-photo"},[n("div",{staticClass:"flex-center profile-container"},[n("avatar",{attrs:{username:t._f("simplifyName")(t.user.name),size:90}})],1)])]),t._v(" "),n("div",{staticClass:"flex-center",attrs:{id:"flex-info-user"}},[n("h1",[t._v(t._s(t.user.name))]),t._v(" "),n("p",[t._v(t._s(t.user.type))]),t._v(" "),n("v-btn",{attrs:{id:"btnLogout",small:"",outlined:"",color:"error",width:"80px"},on:{click:t.logout}},[t._v("Sair")])],1)]),t._v(" "),n("div",{attrs:{id:"close"}},[n("v-icon",{attrs:{id:"close-btn",color:"primary"},on:{click:function(e){return t.closeMenu()}}},[t._v("mdi-close-circle")])],1)]),t._v(" "),n("section",{staticClass:"menu-list"},t._l(t.menu,(function(e){return n("router-link",{key:e.id,staticClass:"item-menu",attrs:{tag:"div",to:e.link},nativeOn:{click:function(e){return t.closeMenu()}}},[n("div",[n("v-icon",{attrs:{color:"primary"}},[t._v(t._s(e.icon))])],1),t._v(" "),n("p",{staticClass:"text-menu"},[t._v(t._s(e.label))])])})),1)])}),[],!1,null,"33e90538",null),w=component.exports;x()(component,{VBtn:k.a,VIcon:_.a});var y={data:function(){return{viewMenu:!1,auth:!1,menu:[{id:1,name:"Home",icon:"mdi-home",link:"/aluno/home"},{id:2,name:"Perfil",icon:"mdi-account",link:"/aluno/perfil"},{id:3,name:"Meus Cursos",icon:"mdi-library",link:"/aluno/meus-cursos"},{id:4,name:"Certificados",icon:"mdi-school",link:"/aluno/certificados",class:""}]}},components:{SideMenu:w},mounted:function(){d.a.isTokenValid().status&&(this.auth=!0,this.changeRoutingIfAdmin())},methods:{setViewMenu:function(){this.viewMenu=!this.viewMenu},changeRoutingIfAdmin:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[0].link="/admin/home",this.menu[1].link="/admin/perfil",this.menu[2].link="/admin/listar-cursos",this.menu[3].class="remove-certificates")}}},C=(n(283),n(739)),O=Object(m.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.auth?n("div",[n("side-menu",{directives:[{name:"show",rawName:"v-show",value:t.viewMenu,expression:"viewMenu"}],staticClass:"intro-transition"}),t._v(" "),n("v-bottom-navigation",{attrs:{"scroll-target":"#page",fixed:"","scroll-threshold":"500",color:"write",horizontal:""}},[t._l(t.menu,(function(e){return n("v-btn",{key:e.id,staticClass:"btn-fixed menu__bottom",class:e.class,attrs:{to:e.link},on:{click:function(e){t.viewMenu=!1}}},[n("span",[t._v(t._s(e.name))]),t._v(" "),n("v-icon",[t._v(t._s(e.icon))])],1)})),t._v(" "),n("v-btn",{staticClass:"btn-fixed",attrs:{id:"menu-btn"},on:{click:t.setViewMenu}},[n("span",[t._v("Outros")]),t._v(" "),n("v-icon",[t._v("mdi-apps")])],1)],2)],1):t._e()}),[],!1,null,"49e11fd7",null);e.a=O.exports;x()(O,{VBottomNavigation:C.a,VBtn:k.a,VIcon:_.a})},281:function(t,e,n){"use strict";var o=n(277);n.n(o).a},282:function(t,e,n){(e=n(23)(!1)).push([t.i,".container-page[data-v-33e90538]{z-index:2}#btnLogout[data-v-33e90538]{margin-top:5px}.container-page>main[data-v-33e90538]{-webkit-box-pack:justify;justify-content:space-between;padding:.5rem;margin-top:1rem;width:100%}#info[data-v-33e90538],.container-page>main[data-v-33e90538]{display:-webkit-box;display:flex}#avatar[data-v-33e90538]{margin-right:1rem}.text-menu[data-v-33e90538]{text-transform:uppercase}h1[data-v-33e90538]{font-size:1.4rem;font-weight:600;text-transform:capitalize}.container-page[data-v-33e90538]{background-color:#fff;position:fixed;width:100%;height:100%;top:0;left:0}.row[data-v-33e90538]{margin-left:0}#close-btn[data-v-33e90538]{cursor:pointer;font-size:30px}#flex-info-user[data-v-33e90538]{-webkit-box-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:baseline;align-items:baseline}.flex-center[data-v-33e90538]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.border-profile-photo[data-v-33e90538]{height:95px;width:95px;border:1px solid #60c;border-radius:50px}.profile-container[data-v-33e90538]{width:85px;height:85px;border-radius:50px;overflow:hidden}.profile-container img[data-v-33e90538]{width:100%}.item-menu[data-v-33e90538]{width:100%;padding:13px;border-bottom:1px solid #e8e8e8;-webkit-box-align:center;align-items:center;color:#60c!important;cursor:pointer}.item-menu[data-v-33e90538],.item-menu div[data-v-33e90538]{display:-webkit-box;display:flex}.item-menu div[data-v-33e90538]{width:50px;-webkit-box-pack:center;justify-content:center;margin-right:2rem}.item-menu[data-v-33e90538]:hover{background-color:#e8d1ff}.col-flex-center[data-v-33e90538]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:baseline;align-items:baseline}p[data-v-33e90538]{margin-bottom:0!important}h4[data-v-33e90538]{font-weight:600}@media(max-width:320px){.item-menu[data-v-33e90538]{height:42px}}",""]),t.exports=e},283:function(t,e,n){"use strict";var o=n(278);n.n(o).a},284:function(t,e,n){(e=n(23)(!1)).push([t.i,"[data-v-49e11fd7] .v-item-group.v-bottom-navigation--horizontal .v-btn>.v-btn__content{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;flex-direction:column-reverse!important}.v-icon[data-v-49e11fd7]{margin-right:0!important}#page[data-v-49e11fd7]{margin-bottom:5rem!important}.btn-fixed[data-v-49e11fd7]{height:100%!important}.intro-transition[data-v-49e11fd7]{-webkit-animation-name:intro;animation-name:intro;-webkit-animation-duration:.2s;animation-duration:.2s}[data-v-49e11fd7] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content{color:#60c}@media (max-width:375px){.v-btn[data-v-49e11fd7]{min-width:55px!important;font-size:.6rem!important}}@media (max-width:415px){.v-btn[data-v-49e11fd7]{font-size:.65rem!important}}.remove-certificates[data-v-49e11fd7]{display:none}",""]),t.exports=e},285:function(t,e,n){"use strict";var o={props:["title","backPage","route"],methods:{comeBackPage:function(){this.route?this.$router.push(this.route):this.$router.back()}}},r=(n(286),n(39)),c=n(43),l=n.n(c),d=n(272),v=n(267),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"head__bar"}},[t.backPage?n("v-btn",{staticClass:"btn-back",attrs:{text:"",icon:""},on:{click:t.comeBackPage}},[n("v-icon",[t._v("mdi-arrow-left")])],1):t._e(),t._v(" "),n("h1",{staticClass:"h1__theme"},[t._v(t._s(t.title))])],1)}),[],!1,null,"7bac864e",null);e.a=component.exports;l()(component,{VBtn:d.a,VIcon:v.a})},286:function(t,e,n){"use strict";var o=n(279);n.n(o).a},287:function(t,e,n){(e=n(23)(!1)).push([t.i,".h1__theme[data-v-7bac864e]{font-size:1.4444rem}#head__bar[data-v-7bac864e]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;padding:1.2rem;position:relative;-webkit-box-align:center;align-items:center;background:transparent}[data-v-7bac864e] .btn-back .theme--light.v-icon{color:#60c;font-size:35px}[data-v-7bac864e] .btn-back{position:absolute;left:1rem}",""]),t.exports=e},390:function(t,e,n){var content=n(696);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("2014cd06",content,!0,{sourceMap:!1})},391:function(t,e){},695:function(t,e,n){"use strict";var o=n(390);n.n(o).a},696:function(t,e,n){(e=n(23)(!1)).push([t.i,'h1[data-v-34368c9a]{font-weight:900;font-size:1em;line-height:36px;text-align:center;color:#60c}@media screen and (max-width:20.625em){h1[data-v-34368c9a]{font-size:14px}}h3[data-v-34368c9a]{font-weight:900;font-size:1em;line-height:normal;text-align:left;color:#60c}h4[data-v-34368c9a]{font-weight:500;padding-top:1em;color:#656565;font-size:14px}.main-container[data-v-34368c9a]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding:0 2rem;margin-bottom:5rem}.alternatives-container[data-v-34368c9a],.inner-container[data-v-34368c9a]{margin-top:1.5em}.save-button[data-v-34368c9a]{height:45px!important;width:100%;font-weight:900;font-size:12px!important;margin-top:2rem;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;text-align:center;color:#fff}.v-button__content[data-v-34368c9a]{font-weight:900;font-size:12px;line-height:14px}.back-button[data-v-34368c9a]{min-width:0!important;float:left}[data-v-34368c9a] .first-alternative>div>div>label:before{content:"A:";font-weight:900;color:#60c;margin-right:.5em}[data-v-34368c9a] .second-alternative>div>div>label:before{content:"B:";font-weight:900;color:#60c;margin-right:.5em}[data-v-34368c9a] .third-alternative>div>div>label:before{content:"C:";font-weight:900;color:#60c;margin-right:.5em}[data-v-34368c9a] .fourth-alternative>div>div>label:before{content:"D:";font-weight:900;color:#60c;margin-right:.5em}',""]),t.exports=e},697:function(t,e,n){"use strict";var o=n(391),r=n.n(o);e.default=r.a},698:function(t,e,n){var content=n(699);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("12a190a6",content,!0,{sourceMap:!1})},699:function(t,e,n){(e=n(23)(!1)).push([t.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}",""]),t.exports=e},700:function(t,e,n){var content=n(701);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("2e2bc7da",content,!0,{sourceMap:!1})},701:function(t,e,n){(e=n(23)(!1)).push([t.i,'.theme--light.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:hsla(0,0%,100%,.3)!important}.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{-webkit-box-align:center;align-items:center;display:-webkit-inline-box;display:inline-flex;-webkit-box-flex:1;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:-webkit-inline-box;display:inline-flex;-webkit-box-flex:0;flex:0 0 auto;height:24px;position:relative;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1);-webkit-transition-property:color,-webkit-transform;transition-property:color,-webkit-transform;transition-property:color,transform;transition-property:color,transform,-webkit-transform;width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;-webkit-transition:inherit;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;-webkit-transform-origin:center center;transform-origin:center center;-webkit-transform:scale(.2);transform:scale(.2);-webkit-transition:inherit;transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{-webkit-transform:scale(1.2);transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-11px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{-webkit-box-flex:0;flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;opacity:.4;-webkit-transform:scale(1.2);transform:scale(1.2)}.v-input--selection-controls .v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-transition:none;transition:none}',""]),t.exports=e},735:function(t,e,n){"use strict";n.r(e);var o=n(280),r=n(123),c=n(285),l={components:{NavigationBar:o.a,HeaderBar:c.a},data:function(){return{snackbar:!1,snackbarText:"",snackbarStatus:"",computedSelection:[],cmpSelect:[],loading:!0}},computed:{test:function(){return this.$store.state.courses.currentTest},alternativeRule:function(){return[!!this.computedSelection.length||"Selecione uma alternativa"]},idUser:function(){return this.$store.state.user.data.id},courseId:function(){return this.$store.state.courses.current.id},selected:{get:function(){return this.$data.computedSelection},set:function(t){this.$data.cmpSelect=t}}},watch:{cmpSelect:function(t){this.computedSelection=t,this.computedSelection.length>1&&this.computedSelection.shift()}},head:function(){return{title:this.test.title,meta:[{hid:"description",name:"description",content:"Prove se o conhecimento que adquiriu com as vídeo-aulas foi satisfatório ou se precisa revê-las - Levamos educação de qualidade na linguagem da quebrada para as periferias do Brasil, através da tecnologia e da curadoria de conteúdos baseados nas habilidades do futuro."}]}},mounted:function(){this.slug=this.$route.params.courseSlug,this.loading=!1},methods:{confirmSnackbar:function(text,t){this.snackbarText=text,this.snackbarStatus=t,this.snackbar=!0},nextTest:function(){var t=this;this.$refs.form.validate()&&r.a.getAll("/api/v1/test/".concat(this.test.id,"/checkTest/alternative/").concat(this.computedSelection[0])).then((function(e){e.data?(t.$refs.form.reset(),t.confirmSnackbar("Acertou!!!","success"),t.advanceCourse()):t.computedSelection=[]}))},advanceCourse:function(){var t=this;this.loading=!0,r.a.post("".concat("/api/v1/course-taken/advance-on-course","/user/").concat(this.idUser,"/course/").concat(this.courseId)).then((function(){r.a.getAll("".concat("api/v1/course-taken","/user/").concat(t.idUser,"/course/").concat(t.courseId)).then((function(e){"COMPLETED"===e.data.status?(delete e.data.user,delete e.data.course,delete e.data.currentLesson,delete e.data.currentPart,delete e.data.currentTest,t.$store.commit("courses/setCurrentState",e.data),$nuxt._router.push("/aluno/curso/".concat(t.slug,"/fim"))):(t.$store.commit("courses/setCurrent",e.data.course),delete e.data.user,delete e.data.course,t.$store.commit("courses/setCurrentState",e.data),r.a.getAll("".concat("/api/v1/course-taken/current-step","/user/").concat(t.idUser,"/course/").concat(t.courseId)).then((function(e){"NEW_TEST"===e.data.type?(t.$store.commit("courses/setCurrentTest",e.data.data),t.loading=!1):(t.$store.commit("courses/setCurrentPart",e.data.data),$nuxt._router.push("/aluno/curso/".concat(t.courseId,"/aula/parte")))})))}))}))}}},d=(n(695),n(39)),v=n(697),h=n(43),m=n.n(h),f=n(272),x=(n(21),n(11),n(7),n(13),n(53),n(54),n(6),n(3)),k=(n(698),n(700),n(265)),_=n(407),w=n(133),y=n(1),C=y.default.extend({name:"rippleable",directives:{ripple:w.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),data.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",data)):null},onChange:function(){}}}),O=n(5),S=y.default.extend({name:"comparable",props:{valueComparator:{type:Function,default:O.h}}}),j=n(40);function V(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function I(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?V(Object(source),!0).forEach((function(e){Object(x.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):V(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var $=Object(j.a)(_.a,C,S).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=this,label=_.a.options.methods.genLabel.call(this);return label?(label.data.on={click:function(e){e.preventDefault(),t.onChange()}},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var t=this;if(!this.isDisabled){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}).extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return I({},_.a.options.computed.classes.call(this),{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.disabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",I({},this.attrs$,{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.validationState)),this.$createElement(k.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon)])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),A=n(311),P=n(729),M=n(305),z=n(117),B=n(273),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("HeaderBar",{attrs:{title:"Questionário","back-page":!0}}),t._v(" "),n("v-layout",{attrs:{"justify-center":"",id:"page"}},[n("v-flex",{ref:"flex",staticClass:"main-container"},[t.loading?n("div",[n("div",{staticClass:"container-spinner"},[n("v-progress-circular",{attrs:{size:70,width:5,indeterminate:"",color:"#6600cc"}})],1)]):n("div",{staticClass:"inner-container"},[n("v-form",{ref:"form",attrs:{"lazy-validation":""}},[n("h3",[t._v(t._s(t.test.title||"Título do Teste"))]),t._v(" "),n("h4",[t._v(t._s(t.test.question||"Enunciado do teste"))]),t._v(" "),n("div",{staticClass:"alternatives-container"},[n("v-checkbox",{staticClass:"first-alternative",attrs:{"hide-details":"",color:"#60c",rules:t.alternativeRule,label:t.test.firstAlternative,value:"A"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),t._v(" "),n("v-checkbox",{staticClass:"second-alternative",attrs:{"hide-details":"",color:"#60c",rules:t.alternativeRule,label:t.test.secondAlternative,value:"B"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),t._v(" "),n("v-checkbox",{staticClass:"third-alternative",attrs:{"hide-details":"",color:"#60c",rules:t.alternativeRule,label:t.test.thirdAlternative,value:"C"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),t._v(" "),n("v-checkbox",{staticClass:"fourth-alternative",attrs:{"hide-details":"",color:"#60c",rules:t.alternativeRule,label:t.test.fourthAlternative,value:"D"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)]),t._v(" "),n("v-btn",{staticClass:"save-button",attrs:{color:"primary"},on:{click:t.nextTest}},[t._v("Próximo")])],1),t._v(" "),n("v-snackbar",{attrs:{color:t.snackbarStatus,timeout:5e3,top:!0,right:!0},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n        "+t._s(t.snackbarText)+"\n        "),n("v-btn",{attrs:{color:"#FFF",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("Fechar")])],1)],1),t._v(" "),n("client-only",[n("navigation-bar")],1)],1)],1)}),[],!1,null,"34368c9a",null);"function"==typeof v.default&&Object(v.default)(component);e.default=component.exports;m()(component,{VBtn:f.a,VCheckbox:$,VFlex:A.a,VForm:P.a,VLayout:M.a,VProgressCircular:z.a,VSnackbar:B.a})}}]);