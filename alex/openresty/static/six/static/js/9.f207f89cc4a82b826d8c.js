webpackJsonp([9],{"/TcO":function(t,n,e){n=t.exports=e("FZ+f")(!1),n.push([t.i,"\n.msgTip-wrapper[data-v-69f00d82]{\n  background: rgba(51, 51, 51, .6);\n  color: #333;\n  position: fixed;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  z-index: 99999;\n}\n.msgTip-continue[data-v-69f00d82]{\n  background: #fff;\n  border-radius: 10px;\n  position: fixed;\n  left: 0px;\n  right: 0px;\n  top: 0px;\n  bottom: 0px;\n  height: 172px;\n  width: 76%;\n  margin: auto;\n  overflow: hidden;\n}\n.msgtip-title[data-v-69f00d82]{\n  color: #fff;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  line-height: 43px;\n  font-size: 1.6rem;\n  text-align: center;\n  background: red;\n}\n.msgtip-content[data-v-69f00d82]{\n  padding: 8px 10px 0px;\n  font-size: 1.2rem;\n  overflow:hidden; \n  text-overflow:ellipsis;\n  display:-webkit-box; \n  -webkit-box-orient:vertical;\n  -webkit-line-clamp:6;\n  position: relative;\n  word-break: break-all;\n}\n/* .msgtip-content::after{\n  content: 'X';\n  display: block;\n  color: red;\n  border-radius: 50%;\n  border: 1px solid #fff;\n  height: 20px;\n  width: 20px;\n  text-align: center;\n  line-height: 18px;\n  position: fixed;\n  top: 0px;\n} */\n.msgtip-content-wrap[data-v-69f00d82]{\n  position: relative;\n}\n.msgtip-btn-close[data-v-69f00d82]{\n  color: #fff;\n  border-radius: 50%;\n  border: 1px solid #fff;\n  height: 20px;\n  width: 20px;\n  text-align: center;\n  line-height: 18px;\n  position: absolute;\n  top: 4px;\n  right: 5px;\n}\n",""])},"57Ms":function(t,n,e){var i=e("/TcO");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("rjj0").default;o("bdf378aa",i,!0,{})},DrXD:function(t,n,e){"use strict";function i(t){e("57Ms")}Object.defineProperty(n,"__esModule",{value:!0});var o={methods:{close:function(){this.$store.state.msg.state=!1}}},s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"msgTip-wrapper"},[e("div",{staticClass:"msgTip-continue"},[e("div",{staticClass:"msgtip-content-wrap"},[e("p",{staticClass:"msgtip-title header"},[t._v(t._s(t.$store.state.msg.title))]),t._v(" "),e("p",{staticClass:"msgtip-btn-close",on:{click:t.close}},[t._v("X")])]),t._v(" "),e("p",{staticClass:"msgtip-content"},[t._v(t._s(t.$store.state.msg.msg))])])])},r=[],a=e("XyMi"),p=i,d=Object(a.a)(o,s,r,!1,p,"data-v-69f00d82",null);n.default=d.exports}});