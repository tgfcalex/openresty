webpackJsonp([203],{"0FxO":function(n,t,e){"use strict";function o(n,t){if(!/^javas/.test(n)&&n){"object"===(void 0===n?"undefined":i()(n))||t&&"string"==typeof n&&!/http/.test(n)?"object"===(void 0===n?"undefined":i()(n))&&!0===n.replace?t.replace(n):"BACK"===n?t.go(-1):t.push(n):window.location.href=n}}t.a=o;var r=e("pFYg"),i=e.n(r)},MVRq:function(n,t,e){"use strict";function o(n){e("w90v")}var r=e("piuB"),i=(r.b,Number,{name:"button-tab",mixins:[r.b],props:{height:Number}}),a=function(){var n=this,t=n.$createElement;return(n._self._c||t)("div",{staticClass:"vux-button-group"},[n._t("default")],2)},l=[],s=e("XyMi"),d=o,c=Object(s.a)(i,a,l,!1,d,null,null);t.a=c.exports},TLog:function(n,t,e){"use strict";function o(n){e("aa8C")}Object.defineProperty(t,"__esModule",{value:!0});var r=e("mvHQ"),i=e.n(r),a=e("MVRq"),l=e("V0DB"),s=e("0iPh"),d=(a.a,l.a,e("0iPh")),c={components:{ButtonTab:a.a,ButtonTabItem:l.a},props:["getBetOdd","selectObj","selectAll","selectBig","selectSmall","selectOdd","selectEven","clearSelect","showHotCold","betHelpDialogHandler"],data:function(){return{lottery:null,numList:["01","02","03","04","05","06","07","08","09","10","11"],betCode:"syx5_renxuan_five_fivefs",numArr:[],ranArr:[],ranArrs:[]}},created:function(){this.initNumArr(),this.getBetOdd(this.betCode);for(var n=0;n<11;n++)this.ranArr.push(n);for(var t=1;t<12;t++)this.ranArrs.push(t)},methods:{randomBetNum:function(){d(".playdiv").find("span.ballspan").removeClass("active");var n=this.$global.getArrayItems(this.ranArr,5);d(".playdiv").eq(0).find("span.ballspan").eq(n[0]).addClass("active"),d(".playdiv").eq(0).find("span.ballspan").eq(n[1]).addClass("active"),d(".playdiv").eq(0).find("span.ballspan").eq(n[2]).addClass("active"),d(".playdiv").eq(0).find("span.ballspan").eq(n[3]).addClass("active"),d(".playdiv").eq(0).find("span.ballspan").eq(n[4]).addClass("active"),this.getBetCount()},getBetCount:function(){var n=[],t=[];if(d.each(d(".playdiv").eq(0).find("span.ballspan.active"),function(){n.push(d.trim(d(this).attr("num")))}),n.length<5)return this.$emit("update:betCount",0),0;t=this.$global.getFlagArrs(n,5);var e=t.length;this.$emit("update:betCount",e),0===e?this.$emit("update:showBetInfo",!1):this.$emit("update:showBetInfo",!0)},getBetContent:function(){var n=[];return d(".playdiv").each(function(t){var e=[];d(".playdiv").eq(t).find("span.ballspan.active").each(function(){e.push(d(this).attr("num"))}),n.push(e.join(",").toString())}),n.join("|").toString()},setHotCold:function(){if(!this.$parent.$refs.bethead)return 1;this.initNumArr();var n=this.$parent.$refs.bethead.recentResult;if(n)for(var t=0;t<n.length;t++)if(n[t].openCode)for(var e=n[t].openCode.split(","),o=0;o<e.length;o++)this.numArr[e[o]].val++},setYiLou:function(){if(!this.$parent.$refs.bethead)return 1;this.initNumArr();var n=["01","02","03","04","05","06","07","08","09","10","11"],t=this.$parent.$refs.bethead.recentResult;if(t)for(var e=0;e<t.length;e++)if(t[e].openCode){for(var o=t[e].openCode.split(","),r=0;r<o.length;r++)this.numArr[o[r]].jx=!1;for(var i=0;i<n.length;i++)this.numArr[n[i]].jx&&(this.numArr[n[i]].val=this.numArr[n[i]].val+1)}},initNumArr:function(){this.numArr={"01":{val:0,jx:!0},"02":{val:0,jx:!0},"03":{val:0,jx:!0},"04":{val:0,jx:!0},"05":{val:0,jx:!0},"06":{val:0,jx:!0},"07":{val:0,jx:!0},"08":{val:0,jx:!0},"09":{val:0,jx:!0},10:{val:0,jx:!0},11:{val:0,jx:!0}}},getRandomBetNum:function(){for(var n=this.$global.getArrayItems(this.ranArrs,5),t=[],e=0;e<5;e++)n[e]<10?t.push("0"+n[e]):t.push(n[e]);var o=JSON.parse(localStorage.randomOrder);o.betNum=t.join(","),localStorage.randomOrder=i()(o)}}},h=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"content"},[e("div",{staticClass:"bet-help"},[n._v("玩法说明:竞猜开奖号码中的5位，至少选5个号码"),e("i",{staticClass:"icon-bet-help",on:{click:n.betHelpDialogHandler}})]),n._v(" "),e("div",{staticClass:"bet-area"},[e("div",{staticClass:"bet-h"},[e("div",{staticClass:"bet-h-p"},[n._v("五中五")]),n._v(" "),e("div",{staticClass:"bet-h-f"},[e("button-tab",[e("button-tab-item",{on:{"on-item-click":function(t){n.selectAll(0)}}},[n._v("全")]),n._v(" "),e("button-tab-item",{on:{"on-item-click":function(t){n.selectBig(0,4)}}},[n._v("大")]),n._v(" "),e("button-tab-item",{on:{"on-item-click":function(t){n.selectSmall(0,5)}}},[n._v("小")]),n._v(" "),e("button-tab-item",{on:{"on-item-click":function(t){n.selectEven(0)}}},[n._v("单")]),n._v(" "),e("button-tab-item",{on:{"on-item-click":function(t){n.selectOdd(0)}}},[n._v("双")]),n._v(" "),e("button-tab-item",{on:{"on-item-click":function(t){n.clearSelect(0)}}},[n._v("清")])],1)],1)]),n._v(" "),e("div",{staticClass:"bet-c playdiv"},n._l(n.numList,function(t){return e("div",{staticClass:"num"},[e("span",{staticClass:"n-p ballspan",attrs:{num:t},on:{click:function(t){n.selectObj(t)}}},[n._v(n._s(t))]),n._v(" "),n.showHotCold?e("span",{staticClass:"n-t"},[n._v(n._s(n.numArr[t].val))]):n._e(),n._v(" "),n.showHotCold?n._e():e("span",{staticClass:"n-t v1a-visiHide"},[n._v("0")])])}),0)])])},u=[],p=e("XyMi"),f=o,b=Object(p.a)(c,h,u,!1,f,null,null);t.default=b.exports},V0DB:function(n,t,e){"use strict";var o=e("piuB"),r=(o.a,{name:"button-tab-item",mixins:[o.a],computed:{classes:function(){return{"vux-button-group-current":this.currentIndex===this.$parent.currentIndex,"vux-button-tab-item-first":0===this.currentIndex,"vux-button-tab-item-last":this.currentIndex===this.$parent.$children.length-1,"vux-button-tab-item-middle":this.currentIndex>0&&this.currentIndex!==this.$parent.$children.length-1}},style:function(){if(this.$parent.height)return{height:this.$parent.height+"px",lineHeight:this.$parent.height+"px"}}}}),i=function(){var n=this,t=n.$createElement;return(n._self._c||t)("a",{staticClass:"vux-button-tab-item",class:n.classes,style:n.style,attrs:{href:"javascript:"},on:{click:n.onItemClick}},[n._t("default")],2)},a=[],l=e("XyMi"),s=Object(l.a)(r,i,a,!1,null,null,null);t.a=s.exports},aa8C:function(n,t,e){var o=e("sLkH");"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var r=e("rjj0").default;r("42c26d46",o,!0,{})},kp9N:function(n,t,e){t=n.exports=e("FZ+f")(!1),t.push([n.i,'/**\n* actionsheet\n*/\n/**\n* en: primary type text color of menu item\n* zh-CN: 菜单项primary类型的文本颜色\n*/\n/**\n* en: warn type text color of menu item\n* zh-CN: 菜单项warn类型的文本颜色\n*/\n/**\n* en: default type text color of menu item\n* zh-CN: 菜单项default类型的文本颜色\n*/\n/**\n* en: disabled type text color of menu item\n* zh-CN: 菜单项disabled类型的文本颜色\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* en: title and content\'s padding-left and padding-right\n* zh-CN: 标题及内容区域的 padding-left 和 padding-right\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* en: border radius\n* zh-CN: 圆角边框\n*/\n/**\n* en: font color\n* zh-CN: 字体颜色\n*/\n/**\n* en: margin-top value between previous button, not works when there is only one button\n* zh-CN: 与相邻按钮的 margin-top 间隙，只有一个按钮时不生效\n*/\n/**\n* en: button height\n* zh-CN: 按钮高度\n*/\n/**\n* en: the font color in disabled\n* zh-CN: disabled状态下的字体颜色\n*/\n/**\n* en: the font color in disabled\n* zh-CN: disabled状态下的字体颜色\n*/\n/**\n* en: font size\n* zh-CN: 字体大小\n*/\n/**\n* en: the font size of the mini type\n* zh-CN: mini类型的字体大小\n*/\n/**\n* en: the line height of the mini type\n* zh-CN: mini类型的行高\n*/\n/**\n* en: the background color of the warn type\n* zh-CN: warn类型的背景颜色\n*/\n/**\n* en: the background color of the warn type in active\n* zh-CN: active状态下，warn类型的背景颜色\n*/\n/**\n* en: the background color of the warn type in disabled\n* zh-CN: disabled状态下，warn类型的背景颜色\n*/\n/**\n* en: the background color of the default type\n* zh-CN: default类型的背景颜色\n*/\n/**\n* en: the font color of the default type\n* zh-CN: default类型的字体颜色\n*/\n/**\n* en: the background color of the default type in active\n* zh-CN: active状态下，default类型的背景颜色\n*/\n/**\n* en: the font color of the default type in disabled\n* zh-CN: disabled状态下，default类型的字体颜色\n*/\n/**\n* en: the background color of the default type in disabled\n* zh-CN: disabled状态下，default类型的背景颜色\n*/\n/**\n* en: the font color of the default type in active\n* zh-CN: active状态下，default类型的字体颜色\n*/\n/**\n* en: the background color of the primary type\n* zh-CN: primary类型的背景颜色\n*/\n/**\n* en: the background color of the primary type in active\n* zh-CN: active状态下，primary类型的背景颜色\n*/\n/**\n* en: the background color of the primary type in disabled\n* zh-CN: disabled状态下，primary类型的背景颜色\n*/\n/**\n* en: the font color of the plain primary type\n* zh-CN: plain的primary类型的字体颜色\n*/\n/**\n* en: the border color of the plain primary type\n* zh-CN: plain的primary类型的边框颜色\n*/\n/**\n* en: the font color of the plain primary type in active\n* zh-CN: active状态下，plain的primary类型的字体颜色\n*/\n/**\n* en: the border color of the plain primary type in active\n* zh-CN: active状态下，plain的primary类型的边框颜色\n*/\n/**\n* en: the font color of the plain default type\n* zh-CN: plain的default类型的字体颜色\n*/\n/**\n* en: the border color of the plain default type\n* zh-CN: plain的default类型的边框颜色\n*/\n/**\n* en: the font color of the plain default type in active\n* zh-CN: active状态下，plain的default类型的字体颜色\n*/\n/**\n* en: the border color of the plain default type in active\n* zh-CN: active状态下，plain的default类型的边框颜色\n*/\n/**\n* en: the font color of the plain warn type\n* zh-CN: plain的warn类型的字体颜色\n*/\n/**\n* en: the border color of the plain warn type\n* zh-CN: plain的warn类型的边框颜色\n*/\n/**\n* en: the font color of the plain warn type in active\n* zh-CN: active状态下，plain的warn类型的字体颜色\n*/\n/**\n* en: the border color of the plain warn type in active\n* zh-CN: active状态下，plain的warn类型的边框颜色\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* en: badge background color\n* zh-CN: badge的背景颜色\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: border radius color\n* zh-CN: 圆角边框的半径\n*/\n/**\n* en: border color\n* zh-CN: 边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 默认状态下圆角边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default background color\n* zh-CN: 默认状态下的背景颜色\n*/\n/**\n* en: selected background color\n* zh-CN: 选中状态下的背景颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/* alias */\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default text color\n* zh-CN: 默认状态下的文本颜色\n*/\n/**\n* en: height\n* zh-CN: 元素高度\n*/\n/**\n* en: line height\n* zh-CN: 元素行高\n*/\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* en: margin-top of title\n* zh-CN: 标题的margin-top\n*/\n/**\n* en: margin-bottom of title\n* zh-CN: 标题的margin-bottom\n*/\n/**\n* en: margin-top of footer title\n* zh-CN: 底部标题的margin-top\n*/\n/**\n* en: margin-bottom of footer title\n* zh-CN: 底部标题的margin-bottom\n*/\n/**\n* toast\n*/\n/**\n* en: text color of content\n* zh-CN: 内容文本颜色\n*/\n/**\n* en: default top\n* zh-CN: 默认状态下距离顶部的高度\n*/\n/**\n* en: position top\n* zh-CN: 顶部显示的高度\n*/\n/**\n* en: position bottom\n* zh-CN: 底部显示的高度\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* en: forward and backward arrows color\n* zh-CN: 前进后退的箭头颜色\n*/\n/**\n* en: text color of week highlight\n* zh-CN: 周末高亮的文本颜色\n*/\n/**\n* en: background color when selected\n* zh-CN: 选中时的背景颜色\n*/\n/**\n* en: text color when disabled\n* zh-CN: 禁用时的文本颜色\n*/\n/**\n* en: text color of today\n* zh-CN: 今天的文本颜色\n*/\n/**\n* en: font size of cell\n* zh-CN: 单元格的字号\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: size of date cell\n* zh-CN: 日期单元格尺寸大小\n*/\n/**\n* en: line height of date cell\n* zh-CN: 日期单元格的行高\n*/\n/**\n* en: text color of header\n* zh-CN: 头部的文本颜色\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* en: text color of cancel button\n* zh-CN: 取消按钮文本颜色\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: text color of placeholder\n* zh-CN: placeholder文本颜色\n*/\n/**\n* radio\n*/\n/**\n* en: checked icon color\n* zh-CN: 选中状态的图标颜色\n*/\n/**\n* loadmore\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* loading\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n.vux-reddot,\n.vux-reddot-border,\n.vux-reddot-s {\n  position: relative;\n}\n.vux-reddot:after,\n.vux-reddot-border:after,\n.vux-reddot-s:after {\n  content: \'\';\n  position: absolute;\n  display: block;\n  width: 8px;\n  height: 8px;\n  background-color: #f74c31;\n  border-radius: 5px;\n  right: -3px;\n  top: -3px;\n  background-clip: padding-box;\n}\n.vux-reddot-border:before {\n  content: \'\';\n  position: absolute;\n  display: block;\n  width: 8px;\n  height: 8px;\n  background-color: #fff;\n  border-radius: 5px;\n  right: -4px;\n  top: -4px;\n  background-clip: padding-box;\n  padding: 1px;\n}\n.vux-reddot-s:after {\n  width: 6px;\n  height: 6px;\n  top: -5px;\n  right: -5px;\n}\n.vux-1px,\n.vux-1px-t,\n.vux-1px-b,\n.vux-1px-tb,\n.vux-1px-l,\n.vux-1px-r {\n  position: relative;\n}\n.vux-1px:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 200%;\n  border: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  height: 200%;\n  -webkit-transform-origin: left top;\n          transform-origin: left top;\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n}\n.vux-1px-t:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.vux-1px-b:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.vux-1px-tb:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.vux-1px-tb:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.vux-1px-l:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1px;\n  bottom: 0;\n  border-left: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleX(0.5);\n          transform: scaleX(0.5);\n}\n.vux-1px-r:after {\n  content: " ";\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 1px;\n  bottom: 0;\n  border-right: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  -webkit-transform-origin: 100% 0;\n          transform-origin: 100% 0;\n  -webkit-transform: scaleX(0.5);\n          transform: scaleX(0.5);\n}\n.vux-button-group {\n  -webkit-touch-callout: none;\n  display: box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.vux-button-group > a.vux-button-tab-item-last {\n  border-top-right-radius: 32px;\n  border-bottom-right-radius: 32px;\n}\n.vux-button-group > a.vux-button-tab-item-last:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 200%;\n  height: 1px;\n  border-right: 1px solid #04BE02;\n  border-top: 1px solid #04BE02;\n  border-bottom: 1px solid #04BE02;\n  border-left: none;\n  color: #04BE02;\n  height: 200%;\n  -webkit-transform-origin: left top;\n          transform-origin: left top;\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n  /* #2322 */\n  z-index: 1;\n  border-top-right-radius: 32px;\n  border-bottom-right-radius: 32px;\n}\n.vux-button-group > a.vux-button-tab-item-first {\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n}\n.vux-button-group > a.vux-button-tab-item-first:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 200%;\n  border: 1px solid #04BE02;\n  color: #04BE02;\n  height: 200%;\n  -webkit-transform-origin: left top;\n          transform-origin: left top;\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n}\n.vux-button-group > a.vux-button-tab-item-middle:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 200%;\n  height: 1px;\n  border-right: 1px solid #04BE02;\n  border-top: 1px solid #04BE02;\n  border-bottom: 1px solid #04BE02;\n  border-left: none;\n  color: #04BE02;\n  height: 200%;\n  -webkit-transform-origin: left top;\n          transform-origin: left top;\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n  /* #2322 */\n  z-index: 1;\n}\n.vux-button-group > a {\n  display: block;\n  position: relative;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  width: 100%;\n  height: 30px;\n  padding: 0;\n  font-size: 14px;\n  line-height: 31px;\n  text-align: center;\n  color: #999;\n  white-space: nowrap;\n  background: #fdfdfd;\n  -webkit-tap-highlight-color: rgba(255, 0, 0, 0);\n}\n.vux-button-group > a:after {\n  background-clip: padding-box;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.vux-button-group > a.vux-button-group-current {\n  color: #FFF;\n  background: #04BE02;\n}\n.vux-button-group > a.vux-button-group-current:disabled,\n.vux-button-group > a:disabled {\n  border-color: #CDCDCD;\n  background: #e5e5e5;\n  -webkit-box-shadow: 0 1px 0 rgba(255, 255, 255, 0.6);\n          box-shadow: 0 1px 0 rgba(255, 255, 255, 0.6);\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\n  color: #aaa;\n}\n',""])},piuB:function(n,t,e){"use strict";e.d(t,"b",function(){return r}),e.d(t,"a",function(){return i});var o=e("0FxO"),r={mounted:function(){this.value>=0&&(this.currentIndex=this.value),this.updateIndex()},methods:{updateIndex:function(){if(this.$children&&this.$children.length){this.number=this.$children.length;for(var n=this.$children,t=0;t<n.length;t++)n[t].currentIndex=t,n[t].currentSelected&&(this.index=t)}}},props:{value:Number},watch:{currentIndex:function(n,t){t>-1&&this.$children[t]&&(this.$children[t].currentSelected=!1),n>-1&&this.$children[n]&&(this.$children[n].currentSelected=!0),this.$emit("input",n),this.$emit("on-index-change",n,t)},index:function(n){this.currentIndex=n},value:function(n){this.index=n}},data:function(){return{index:-1,currentIndex:this.index,number:this.$children.length}}},i={props:{selected:{type:Boolean,default:!1}},mounted:function(){this.$parent.updateIndex()},beforeDestroy:function(){var n=this.$parent;this.$nextTick(function(){n.updateIndex()})},methods:{onItemClick:function(n){var t=this;if(this.$parent.preventDefault)return void this.$parent.$emit("on-before-index-change",this.currentIndex);void 0!==this.disabled&&!1!==this.disabled||(this.currentSelected=!0,this.$parent.currentIndex=this.currentIndex,this.$nextTick(function(){t.$emit("on-item-click",t.currentIndex)})),!0===n&&Object(o.a)(this.link,this.$router)}},watch:{currentSelected:function(n){n&&(this.$parent.index=this.currentIndex)},selected:function(n){this.currentSelected=n}},data:function(){return{currentIndex:-1,currentSelected:this.selected}}}},sLkH:function(n,t,e){t=n.exports=e("FZ+f")(!1),t.push([n.i,"\n@media screen and (max-width: 320px) {\n#app .lottery-wrap .bet-area .bet-c .num .n-t {\n    font-size: 12px;\n}\n}\n.v1a-visiHide {\n  visibility: hidden;\n}\n",""])},w90v:function(n,t,e){var o=e("kp9N");"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var r=e("rjj0").default;r("10ddbda0",o,!0,{})}});