webpackJsonp([2],{GDV5:function(s,e){},W1y7:function(s,e,o){s.exports=o.p+"static/img/logo.8c30cc3.png"},uCMJ:function(s,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o("W1y7"),r=o.n(a),t={name:"login",beforeCreate:function(){window.document.body.style.backgroundColor="#fff"},beforeDestroy:function(){window.document.body.style.backgroundColor=""},data:function(){return{logo:r.a,loginForm:{userName:"",password:""}}},mounted:function(){},watch:{},methods:{clearUserName:function(){this.loginForm.userName=""},clearPassword:function(){this.loginForm.password=""},login:function(){var s=this;this.$validator.validate().then(function(e){e&&(localStorage.setItem("welcome",89757),s.$router.replace("/"))})}}},i={render:function(){var s=this,e=s.$createElement,o=s._self._c||e;return o("div",{staticClass:"login"},[o("header",{staticClass:"header"},[o("img",{attrs:{src:s.logo,alt:""}})]),s._v(" "),o("div",{staticClass:"login-area"},[o("div",{staticClass:"input-area input-user"},[o("label",{staticClass:"svg-container",attrs:{for:"user"}},[o("svg-icon",{attrs:{"icon-class":"user"}})],1),s._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:s.loginForm.userName,expression:"loginForm.userName"},{name:"validate",rawName:"v-validate",value:"required|mobile",expression:"'required|mobile'"}],attrs:{type:"text",id:"user",placeholder:"帐号/手机号",name:"mobile","data-vv-as":"账号/手机号"},domProps:{value:s.loginForm.userName},on:{input:function(e){e.target.composing||s.$set(s.loginForm,"userName",e.target.value)}}}),s._v(" "),o("span",{directives:[{name:"show",rawName:"v-show",value:s.loginForm.userName,expression:"loginForm.userName"}],staticClass:"svg-close",on:{click:s.clearUserName}},[o("svg-icon",{attrs:{"icon-class":"close"}})],1),s._v(" "),o("span",{directives:[{name:"show",rawName:"v-show",value:s.errors.first("mobile"),expression:"errors.first('mobile')"}],staticClass:"tips"},[s._v(s._s(s.errors.first("mobile")))])]),s._v(" "),o("div",{staticClass:"input-area input-pwd"},[o("label",{staticClass:"svg-container",attrs:{for:"password"}},[o("svg-icon",{attrs:{"icon-class":"password"}})],1),s._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:s.loginForm.password,expression:"loginForm.password"}],attrs:{type:"password",id:"password",placeholder:"密码"},domProps:{value:s.loginForm.password},on:{input:function(e){e.target.composing||s.$set(s.loginForm,"password",e.target.value)}}}),s._v(" "),o("span",{directives:[{name:"show",rawName:"v-show",value:s.loginForm.password,expression:"loginForm.password"}],staticClass:"svg-close",on:{click:s.clearPassword}},[o("svg-icon",{attrs:{"icon-class":"close"}})],1),s._v(" "),o("span",{directives:[{name:"show",rawName:"v-show",value:!s.loginForm.password,expression:"!loginForm.password"}],staticClass:"tips"},[s._v("请输入密码")])]),s._v(" "),o("div",{staticClass:"login-btn",on:{click:s.login}},[s._v("\n      登 录\n    ")])]),s._v(" "),o("div",{staticClass:"footer"},[o("div",{staticClass:"forget"},[o("router-link",{attrs:{to:"/ResetPassword"}},[s._v("\n        忘记密码\n      ")])],1),s._v(" "),o("div",{staticClass:"register"},[o("router-link",{attrs:{to:"/register"}},[s._v("\n        注册帐号\n      ")])],1)])])},staticRenderFns:[]};var n=o("C7Lr")(t,i,!1,function(s){o("GDV5")},"data-v-641a380c",null);e.default=n.exports}});
//# sourceMappingURL=2.243f8d91928386b14c1a.js.map