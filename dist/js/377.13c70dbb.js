"use strict";(self["webpackChunkmy_vue"]=self["webpackChunkmy_vue"]||[]).push([[377],{1731:function(t,e,s){s.d(e,{Z:function(){return o}});var a=function(){var t=this;t._self._c;return t._m(0)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"sky"},[e("div",{staticClass:"clouds_one"}),e("div",{staticClass:"clouds_two"}),e("div",{staticClass:"clouds_three"}),e("div",{staticClass:"clouds_one"})])}],n={},r=n,l=s(1001),c=(0,l.Z)(r,a,i,!1,null,null,null),o=c.exports},5377:function(t,e,s){s.r(e),s.d(e,{default:function(){return p}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main_container"},[e("div",{staticClass:"header_wrapper"},[e("Header")],1),e("div",{staticClass:"main_wrapper"},[e("transition",{attrs:{name:"fade-transform",mode:"out-in"}},[e("keep-alive",[e("router-view",{key:t.key})],1)],1)],1)])},i=[],n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header_content"},[e("div",{staticClass:"header_bar"},[e("el-switch",{staticClass:"theme_change",attrs:{"active-color":"#555","inactive-color":"#e6e7ee"},model:{value:t.isTheme,callback:function(e){t.isTheme=e},expression:"isTheme"}}),e("router-link",{staticClass:"login_btn",attrs:{to:"/login"}},[t._v("登陆")])],1),e("div",{staticClass:"banner_box"},[e("cloud")],1),e("div",{staticClass:"nav_box"},[t._m(0),e("div",{staticClass:"nav_bar"},[e("ul",{staticClass:"nav"},t._l(t.routers,(function(s){return e("li",{key:s.path,class:{active:s.path==t.activeRouter}},[e("router-link",{attrs:{to:s.path}},[t._v(t._s(s.mate.title))])],1)})),0)])])])},r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"user_info"},[e("div",{staticClass:"avatar"},[e("div",{staticClass:"avatar_insert"})]),e("div",{staticClass:"name"},[t._v("Monkey D Luffy")])])}],l=s(3822),c=s(5188),o=s(1731),u={components:{Cloud:o.Z},data(){return{isTheme:!1}},computed:{...(0,l.Se)(["theme"]),activeRouter(){return this.$route.path},routers(){return c.Z[0].children}},watch:{isTheme:function(){this.$store.dispatch("handleTheme",this.isTheme?"dark":"")}},mounted(){this.isTheme=!!this.theme}},d=u,v=s(1001),h=(0,v.Z)(d,n,r,!1,null,"25a96d6a",null),_=h.exports,m={components:{Header:_},computed:{key(){return this.$route.path}}},f=m,C=(0,v.Z)(f,a,i,!1,null,"02a12ddd",null),p=C.exports}}]);
//# sourceMappingURL=377.13c70dbb.js.map