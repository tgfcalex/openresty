webpackJsonp([51],{"3nyd":function(n,t,i){t=n.exports=i("FZ+f")(!1),t.push([n.i,"\n.typing-indicator {\n  background-color: #E6E7ED;\n  will-change: transform;\n  width: 51px;\n  border-radius: 50px;\n  padding: 20px;\n  display: table;\n  position: absolute;\n  -webkit-animation: 2s bulge infinite ease-out;\n          animation: 2s bulge infinite ease-out;\n}\n.typing-indicator::before, .typing-indicator::after {\n    content: '';\n    position: absolute;\n    bottom: -2px;\n    left: -2px;\n    height: 20px;\n    width: 20px;\n    border-radius: 50%;\n    background-color: #E6E7ED;\n}\n.typing-indicator::after {\n    height: 10px;\n    width: 10px;\n    left: -10px;\n    bottom: -10px;\n}\n.typing-indicator span {\n    height: 15px;\n    width: 15px;\n    float: left;\n    margin: 0 1px;\n    background-color: #9E9EA1;\n    display: block;\n    border-radius: 50%;\n    opacity: 0.4;\n}\n.typing-indicator span:nth-of-type(1) {\n      -webkit-animation: 1s blink infinite 0.3333s;\n              animation: 1s blink infinite 0.3333s;\n}\n.typing-indicator span:nth-of-type(2) {\n      -webkit-animation: 1s blink infinite 0.6666s;\n              animation: 1s blink infinite 0.6666s;\n}\n.typing-indicator span:nth-of-type(3) {\n      -webkit-animation: 1s blink infinite 0.9999s;\n              animation: 1s blink infinite 0.9999s;\n}\n@-webkit-keyframes blink {\n50% {\n    opacity: 1;\n}\n}\n@keyframes blink {\n50% {\n    opacity: 1;\n}\n}\n@-webkit-keyframes bulge {\n50% {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05);\n}\n}\n@keyframes bulge {\n50% {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05);\n}\n}\n",""])},"4Nfn":function(n,t,i){t=n.exports=i("FZ+f")(!1),t.push([n.i,"\n.custonerMsg-enter-active[data-v-9ed1f9e4], .fade-leave-active[data-v-9ed1f9e4] {\n  -webkit-transition: opacity .5s;\n  transition: opacity .5s;\n}\n.custonerMsg-enter[data-v-9ed1f9e4], .fade-leave-to[data-v-9ed1f9e4] {\n  opacity: 0;\n}\n.onlineService-wrapper[data-v-9ed1f9e4] {\n  position: relative;\n}\n.onlineService-wrapper .mesgBox-wrap[data-v-9ed1f9e4] {\n  background: rgba(51, 51, 51, 0.9);\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  z-index: 10;\n  top: 0px;\n}\n.onlineService-wrapper .mesgbox-continue[data-v-9ed1f9e4] {\n  position: fixed;\n  z-index: 11;\n  width: 56%;\n  height: 120px;\n  color: #333;\n  top: 0px;\n  left: 0px;\n  bottom: 0px;\n  right: 0px;\n  margin: auto;\n  background: #fff;\n  text-align: center;\n  border-radius: 6px;\n  font-size: 16px;\n}\n.onlineService-wrapper .msg[data-v-9ed1f9e4] {\n  line-height: 70px;\n}\n.onlineService-wrapper .btn[data-v-9ed1f9e4] {\n  outline: none;\n  border: none;\n  color: #fff;\n  line-height: 26px;\n  width: 34%;\n  border-radius: 3px;\n}\n.onlineService-wrapper .btn-cancel[data-v-9ed1f9e4] {\n  background: #d9534f;\n}\n.onlineService-wrapper .btn-confirm[data-v-9ed1f9e4] {\n  background: #5bc0de;\n}\n",""])},"SlQ/":function(n,t,i){var e=i("4Nfn");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var a=i("rjj0").default;a("8abe0b4a",e,!0,{})},UTss:function(n,t,i){var e=i("3nyd");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var a=i("rjj0").default;a("83b8b9ce",e,!0,{})},ZFzO:function(n,t,i){"use strict";function e(n){i("UTss"),i("SlQ/")}Object.defineProperty(t,"__esModule",{value:!0});var a=i("ABCa"),o=(a.a,{components:{XHeader:a.a},data:function(){return{shown:!0,linkUrl:"",ShowMsg:!1}},created:function(){this.getCustomer()},methods:{getCustomer:function(){var n=this;this.$api.get(this.$luyou.HOME.GET_CS,null,function(t){setTimeout(function(){n.shown=!1},2e3),n.linkUrl=t.data})},close:function(){this.ShowMsg=!1,navigator.userAgent.indexOf("app_ios")>0?goBack():this.$router.go(-1)}},computed:{loadTop:function(){return this.$init.height/2-44+"px"},loadLeft:function(){return(this.$init.width-66)/2+"px"},frmHeight:function(){return this.$init.height-44+"px"}},watch:{ShowMsg:function(n){}}}),s=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"onlineService-wrapper"},[i("x-header",{staticClass:"header",attrs:{"left-options":{backText:" ",preventGoBack:!0}},on:{"on-click-back":function(t){n.ShowMsg=!0}}},[n._v("\n    在线客服\n  ")]),n._v(" "),n.shown?i("div",{staticClass:"typing-indicator",style:"top: "+n.loadTop+"; left: "+n.loadLeft},[i("span"),i("span"),i("span")]):n._e(),n._v(" "),i("iframe",{staticClass:"customer",attrs:{src:n.linkUrl,frameborder:"0","v-if":!n.shown,height:n.frmHeight,width:n.$init.width}}),n._v(" "),i("transition",{attrs:{name:"custonerMsg"}},[n.ShowMsg?i("div",{staticClass:"mesgBox-wrap"},[i("div",{staticClass:"mesgbox-continue"},[i("p",{staticClass:"msg"},[n._v("确认退出吗?")]),n._v(" "),i("p",[i("button",{staticClass:"btn btn-confirm",on:{click:n.close}},[n._v("确认")]),n._v(" "),i("button",{staticClass:"btn btn-cancel",on:{click:function(t){n.ShowMsg=!1}}},[n._v("取消")])])])]):n._e()])],1)},r=[],c=i("XyMi"),p=e,l=Object(c.a)(o,s,r,!1,p,"data-v-9ed1f9e4",null);t.default=l.exports}});