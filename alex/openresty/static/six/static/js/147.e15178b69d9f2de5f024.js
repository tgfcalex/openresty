webpackJsonp([147,130],{"+Iog":function(n,t,e){var i=e("bP9w");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var o=e("rjj0").default;o("29417624",i,!0,{})},"/97M":function(n,t,e){t=n.exports=e("FZ+f")(!1),t.push([n.i,"\nbody[data-v-3f82b030] {\n  font-size: 62.5%;\n}\n.v1-betbottom-wrap[data-v-3f82b030] {\n  color: #fff;\n  width: 100%;\n  font-size: 1.4rem;\n}\n.v1-touzhu-wrap[data-v-3f82b030] {\n  line-height: 54px;\n}\n.right-box[data-v-3f82b030] {\n  list-style: none;\n  text-align: center;\n  width: 74%;\n}\n.right-box .fr[data-v-3f82b030] {\n    color: #fff;\n}\n.v1-betbottom-btn-rest[data-v-3f82b030] {\n  width: 24%;\n  border-left: 1px solid rgba(255, 255, 255, 0.6);\n}\n.v1-betbottom-btn-touzhu[data-v-3f82b030] {\n  width: 36%;\n  border-left: 1px solid rgba(255, 255, 255, 0.6);\n}\n.v1-betbottom-btn-input-wrap[data-v-3f82b030] {\n  width: 38%;\n}\n.v1-betbottom-btn-input[data-v-3f82b030] {\n  border-radius: 6px;\n  outline: none;\n  border: none;\n  width: 86%;\n  margin: 0px 2%;\n  height: 36px;\n  line-height: 36px;\n  padding: 0px 7px;\n  font-size: 12px;\n}\n.v1-check-text[data-v-3f82b030] {\n  font-size: 1.2rem;\n  padding-left: 10px;\n}\n.v1-betbottom-chip-ul[data-v-3f82b030] {\n  list-style: none;\n  background: #fff;\n}\n.v1-betbottom-chip-ul > li[data-v-3f82b030] {\n  float: left;\n  width: 16.6%;\n  padding: 3px 0px;\n}\n.v1-betbottom-chip-block[data-v-3f82b030] {\n  width: 32px;\n  height: 32px;\n  margin: 0px auto;\n}\n",""])},"5KoK":function(n,t,e){t=n.exports=e("FZ+f")(!1),t.push([n.i,"\n@media screen and (max-width:320px){\n.xin-wrapper .bottomBetbox .mid > button{\n    width: 66px !important;\n    font-size: 16px !important;\n}\n.xin-wrapper .bottomBetbox .bot .swiper-slide span{\n    width: 34px !important;\n    height: 34px !important;\n    background-size: 34px !important;\n    line-height: 34px !important;\n}\n.vux-slider > .vux-swiper > .vux-swiper-item{\n    top: 4px !important;\n}\n}\n",""])},"C/l6":function(n,t,e){var i=e("5KoK");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var o=e("rjj0").default;o("77ee093e",i,!0,{})},EC28:function(n,t,e){"use strict";function i(n){e("rer+"),e("C/l6")}Object.defineProperty(t,"__esModule",{value:!0});var o=e("aTeQ"),r=e("fBcm"),s=e("b+jt"),a=(o.a,r.a,s.a,{components:{XSwitch:o.a,Swiper:r.a,SwiperItem:s.a},props:["showBetbox","betConfirmPage","resetBetInfo","selectedBetMoney","betMoney"],computed:{swiperNextF:function(){return this.swiperNext},swiperPrevF:function(){return this.swiperPrev}},data:function(){return{swiperModel:0,swiperNext:!0,swiperPrev:!1,rMoney:Number(localStorage.remberMoney),myBetMoney:""}},methods:{resetBetInfoSelect:function(){this.myBetMoney=0,this.$parent.resetSelected(),this.$parent.openBetBottom(!1)},swiperNavHanlder:function(){0===this.swiperModel?this.swiperModel=1:1===this.swiperModel&&(this.swiperModel=0)},clearMoney:function(){document.getElementById("betMoney").value="",this.myBetMoney="",this.$emit("update:betMoney","")}},watch:{swiperModel:function(n){1===n?(this.swiperNext=!1,this.swiperPrev=!0):(this.swiperNext=!0,this.swiperPrev=!1)},betMoney:function(n){this.myBetMoney=n},myBetMoney:function(n){this.$emit("update:betMoney",n)}},mounted:function(n,t){localStorage.remberMoney&&this.$emit("update:betMoney",Number(localStorage.remberMoney))}}),h=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"v1-betbottom-wrap"},[e("div",{staticClass:"clear-both theme-bg-rg v1-touzhu-wrap"},[e("p",{staticClass:"fl v1-check-text"},[n._v("已选"+n._s(n.$parent.betCount)+"注")]),n._v(" "),e("ul",{staticClass:"fr right-box"},[e("li",{staticClass:"fr v1-betbottom-btn-rest",on:{click:n.resetBetInfoSelect}},[n._v("重置")]),n._v(" "),e("li",{staticClass:"fr v1-betbottom-btn-touzhu",on:{click:n.betConfirmPage}},[n._v("投注")]),n._v(" "),e("li",{staticClass:"fr v1-betbottom-btn-input-wrap",attrs:{class:"fr v1-betbottom-btn-input-wrap"}},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:n.myBetMoney,expression:"myBetMoney",modifiers:{number:!0}}],staticClass:"v1-betbottom-btn-input",attrs:{id:"betMoney",oninput:"this.value=this.value.replace(/[^0-9]+/,'');",type:"number",pattern:"\\d*",placeholder:"请输入金额"},domProps:{value:n.myBetMoney},on:{input:function(t){t.target.composing||(n.myBetMoney=n._n(t.target.value))},blur:function(t){n.$forceUpdate()}}})])])]),n._v(" "),e("ul",{staticClass:"v1-betbottom-chip-ul clear-both"},[e("li",{on:{click:function(t){n.selectedBetMoney(5)}}},[e("div",{staticClass:"check-chip-5 v1-betbottom-chip-block"})]),n._v(" "),e("li",{on:{click:function(t){n.selectedBetMoney(10)}}},[e("div",{staticClass:"check-chip-10 v1-betbottom-chip-block"})]),n._v(" "),e("li",{on:{click:function(t){n.selectedBetMoney(50)}}},[e("div",{staticClass:"check-chip-50 v1-betbottom-chip-block"})]),n._v(" "),e("li",{on:{click:function(t){n.selectedBetMoney(100)}}},[e("div",{staticClass:"check-chip-100 v1-betbottom-chip-block"})]),n._v(" "),e("li",{on:{click:function(t){n.selectedBetMoney(500)}}},[e("div",{staticClass:"check-chip-500 v1-betbottom-chip-block"})]),n._v(" "),e("li",{on:{click:function(t){n.selectedBetMoney(1e3)}}},[e("div",{staticClass:"check-chip-1000 v1-betbottom-chip-block"})])])])},l=[],c=e("XyMi"),u=i,d=Object(c.a)(a,h,l,!1,u,"data-v-3f82b030",null);t.default=d.exports},Zrlr:function(n,t,e){"use strict";t.__esModule=!0,t.default=function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}},"b+jt":function(n,t,e){"use strict";var i={name:"swiper-item",mounted:function(){var n=this;this.$nextTick(function(){n.$parent.rerender()})},beforeDestroy:function(){var n=this.$parent;this.$nextTick(function(){n.rerender()})}},o=function(){var n=this,t=n.$createElement;return(n._self._c||t)("div",{staticClass:"vux-swiper-item"},[n._t("default")],2)},r=[],s=e("XyMi"),a=Object(s.a)(i,o,r,!1,null,null,null);t.a=a.exports},bP9w:function(n,t,e){t=n.exports=e("FZ+f")(!1),t.push([n.i,"/**\n* actionsheet\n*/\n/**\n* en: primary type text color of menu item\n* zh-CN: 菜单项primary类型的文本颜色\n*/\n/**\n* en: warn type text color of menu item\n* zh-CN: 菜单项warn类型的文本颜色\n*/\n/**\n* en: default type text color of menu item\n* zh-CN: 菜单项default类型的文本颜色\n*/\n/**\n* en: disabled type text color of menu item\n* zh-CN: 菜单项disabled类型的文本颜色\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* en: title and content's padding-left and padding-right\n* zh-CN: 标题及内容区域的 padding-left 和 padding-right\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* en: border radius\n* zh-CN: 圆角边框\n*/\n/**\n* en: font color\n* zh-CN: 字体颜色\n*/\n/**\n* en: margin-top value between previous button, not works when there is only one button\n* zh-CN: 与相邻按钮的 margin-top 间隙，只有一个按钮时不生效\n*/\n/**\n* en: button height\n* zh-CN: 按钮高度\n*/\n/**\n* en: the font color in disabled\n* zh-CN: disabled状态下的字体颜色\n*/\n/**\n* en: the font color in disabled\n* zh-CN: disabled状态下的字体颜色\n*/\n/**\n* en: font size\n* zh-CN: 字体大小\n*/\n/**\n* en: the font size of the mini type\n* zh-CN: mini类型的字体大小\n*/\n/**\n* en: the line height of the mini type\n* zh-CN: mini类型的行高\n*/\n/**\n* en: the background color of the warn type\n* zh-CN: warn类型的背景颜色\n*/\n/**\n* en: the background color of the warn type in active\n* zh-CN: active状态下，warn类型的背景颜色\n*/\n/**\n* en: the background color of the warn type in disabled\n* zh-CN: disabled状态下，warn类型的背景颜色\n*/\n/**\n* en: the background color of the default type\n* zh-CN: default类型的背景颜色\n*/\n/**\n* en: the font color of the default type\n* zh-CN: default类型的字体颜色\n*/\n/**\n* en: the background color of the default type in active\n* zh-CN: active状态下，default类型的背景颜色\n*/\n/**\n* en: the font color of the default type in disabled\n* zh-CN: disabled状态下，default类型的字体颜色\n*/\n/**\n* en: the background color of the default type in disabled\n* zh-CN: disabled状态下，default类型的背景颜色\n*/\n/**\n* en: the font color of the default type in active\n* zh-CN: active状态下，default类型的字体颜色\n*/\n/**\n* en: the background color of the primary type\n* zh-CN: primary类型的背景颜色\n*/\n/**\n* en: the background color of the primary type in active\n* zh-CN: active状态下，primary类型的背景颜色\n*/\n/**\n* en: the background color of the primary type in disabled\n* zh-CN: disabled状态下，primary类型的背景颜色\n*/\n/**\n* en: the font color of the plain primary type\n* zh-CN: plain的primary类型的字体颜色\n*/\n/**\n* en: the border color of the plain primary type\n* zh-CN: plain的primary类型的边框颜色\n*/\n/**\n* en: the font color of the plain primary type in active\n* zh-CN: active状态下，plain的primary类型的字体颜色\n*/\n/**\n* en: the border color of the plain primary type in active\n* zh-CN: active状态下，plain的primary类型的边框颜色\n*/\n/**\n* en: the font color of the plain default type\n* zh-CN: plain的default类型的字体颜色\n*/\n/**\n* en: the border color of the plain default type\n* zh-CN: plain的default类型的边框颜色\n*/\n/**\n* en: the font color of the plain default type in active\n* zh-CN: active状态下，plain的default类型的字体颜色\n*/\n/**\n* en: the border color of the plain default type in active\n* zh-CN: active状态下，plain的default类型的边框颜色\n*/\n/**\n* en: the font color of the plain warn type\n* zh-CN: plain的warn类型的字体颜色\n*/\n/**\n* en: the border color of the plain warn type\n* zh-CN: plain的warn类型的边框颜色\n*/\n/**\n* en: the font color of the plain warn type in active\n* zh-CN: active状态下，plain的warn类型的字体颜色\n*/\n/**\n* en: the border color of the plain warn type in active\n* zh-CN: active状态下，plain的warn类型的边框颜色\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* en: badge background color\n* zh-CN: badge的背景颜色\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: border radius color\n* zh-CN: 圆角边框的半径\n*/\n/**\n* en: border color\n* zh-CN: 边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 默认状态下圆角边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default background color\n* zh-CN: 默认状态下的背景颜色\n*/\n/**\n* en: selected background color\n* zh-CN: 选中状态下的背景颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/* alias */\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default text color\n* zh-CN: 默认状态下的文本颜色\n*/\n/**\n* en: height\n* zh-CN: 元素高度\n*/\n/**\n* en: line height\n* zh-CN: 元素行高\n*/\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* en: margin-top of title\n* zh-CN: 标题的margin-top\n*/\n/**\n* en: margin-bottom of title\n* zh-CN: 标题的margin-bottom\n*/\n/**\n* en: margin-top of footer title\n* zh-CN: 底部标题的margin-top\n*/\n/**\n* en: margin-bottom of footer title\n* zh-CN: 底部标题的margin-bottom\n*/\n/**\n* toast\n*/\n/**\n* en: text color of content\n* zh-CN: 内容文本颜色\n*/\n/**\n* en: default top\n* zh-CN: 默认状态下距离顶部的高度\n*/\n/**\n* en: position top\n* zh-CN: 顶部显示的高度\n*/\n/**\n* en: position bottom\n* zh-CN: 底部显示的高度\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* en: forward and backward arrows color\n* zh-CN: 前进后退的箭头颜色\n*/\n/**\n* en: text color of week highlight\n* zh-CN: 周末高亮的文本颜色\n*/\n/**\n* en: background color when selected\n* zh-CN: 选中时的背景颜色\n*/\n/**\n* en: text color when disabled\n* zh-CN: 禁用时的文本颜色\n*/\n/**\n* en: text color of today\n* zh-CN: 今天的文本颜色\n*/\n/**\n* en: font size of cell\n* zh-CN: 单元格的字号\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: size of date cell\n* zh-CN: 日期单元格尺寸大小\n*/\n/**\n* en: line height of date cell\n* zh-CN: 日期单元格的行高\n*/\n/**\n* en: text color of header\n* zh-CN: 头部的文本颜色\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* en: text color of cancel button\n* zh-CN: 取消按钮文本颜色\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: text color of placeholder\n* zh-CN: placeholder文本颜色\n*/\n/**\n* radio\n*/\n/**\n* en: checked icon color\n* zh-CN: 选中状态的图标颜色\n*/\n/**\n* loadmore\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* loading\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n.vux-slider {\n  overflow: hidden;\n  position: relative;\n}\n.vux-slider > .vux-indicator,\n.vux-slider .vux-indicator-right {\n  position: absolute;\n  right: 15px;\n  bottom: 10px;\n}\n.vux-slider > .vux-indicator > a,\n.vux-slider .vux-indicator-right > a {\n  float: left;\n  margin-left: 6px;\n}\n.vux-slider > .vux-indicator > a > .vux-icon-dot,\n.vux-slider .vux-indicator-right > a > .vux-icon-dot {\n  display: inline-block;\n  vertical-align: middle;\n  width: 6px;\n  height: 6px;\n  border-radius: 3px;\n  background-color: #d0cdd1;\n}\n.vux-slider > .vux-indicator > a > .vux-icon-dot.active,\n.vux-slider .vux-indicator-right > a > .vux-icon-dot.active {\n  background-color: #04BE02;\n}\n.vux-slider > .vux-indicator-center {\n  right: 50%;\n  -webkit-transform: translateX(50%);\n          transform: translateX(50%);\n}\n.vux-slider > .vux-indicator-left {\n  left: 15px;\n  right: auto;\n}\n.vux-slider > .vux-swiper {\n  overflow: hidden;\n  position: relative;\n}\n.vux-slider > .vux-swiper > .vux-swiper-item {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.vux-slider > .vux-swiper > .vux-swiper-item > a {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background: center center no-repeat;\n  background-size: cover;\n}\n.vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-swiper-desc {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 1.4em;\n  font-size: 16px;\n  padding: 20px 50px 12px 13px;\n  margin: 0;\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.7)));\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.7) 100%);\n  color: #fff;\n  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-wrap: normal;\n}\n",""])},fBcm:function(n,t,e){"use strict";function i(n){e("+Iog")}var o=e("mvHQ"),r=e.n(o),s=e("Zrlr"),a=e.n(s),h=e("wxAW"),l=e.n(h),c=e("mARK"),u=e.n(c),d=function(n){return Array.prototype.slice.call(n)},p=function(){function n(t){if(a()(this,n),this._default={container:".vux-swiper",item:".vux-swiper-item",direction:"vertical",activeClass:"active",threshold:50,duration:300,auto:!1,loop:!1,interval:3e3,height:"auto",minMovingDistance:0},this._options=u()(this._default,t),this._options.height=this._options.height.replace("px",""),this._start={},this._move={},this._end={},this._eventHandlers={},this._prev=this._current=this._goto=0,this._width=this._height=this._distance=0,this._offset=[],this.$box=this._options.container,this.$container=this._options.container.querySelector(".vux-swiper"),this.$items=this.$container.querySelectorAll(this._options.item),this.count=this.$items.length,this.realCount=this.$items.length,this._position=[],this._firstItemIndex=0,this._isMoved=!1,this.count)return this._init(),this._auto(),this._bind(),this._onResize(),this}return l()(n,[{key:"_auto",value:function(){var n=this;n.stop(),n._options.auto&&(n.timer=setTimeout(function(){n.next()},n._options.interval))}},{key:"updateItemWidth",value:function(){this._width=this.$box.offsetWidth||document.documentElement.offsetWidth,this._distance="horizontal"===this._options.direction?this._width:this._height}},{key:"stop",value:function(){this.timer&&clearTimeout(this.timer)}},{key:"_loop",value:function(){return this._options.loop&&this.realCount>=3}},{key:"_onResize",value:function(){var n=this;this.resizeHandler=function(){setTimeout(function(){n.updateItemWidth(),n._setOffset(),n._setTransform()},100)},window.addEventListener("orientationchange",this.resizeHandler,!1)}},{key:"_init",value:function(){this._height="auto"===this._options.height?"auto":this._options.height-0,this.updateItemWidth(),this._initPosition(),this._activate(this._current),this._setOffset(),this._setTransform(),this._loop()&&this._loopRender()}},{key:"_initPosition",value:function(){for(var n=0;n<this.realCount;n++)this._position.push(n)}},{key:"_movePosition",value:function(n){var t=this;if(n>0){var e=t._position.splice(0,1);t._position.push(e[0])}else if(n<0){var i=t._position.pop();t._position.unshift(i)}}},{key:"_setOffset",value:function(){var n=this,t=n._position.indexOf(n._current);n._offset=[],d(n.$items).forEach(function(e,i){n._offset.push((i-t)*n._distance)})}},{key:"_setTransition",value:function(n){n=n||this._options.duration||"none";var t="none"===n?"none":n+"ms";d(this.$items).forEach(function(n,e){n.style.webkitTransition=t,n.style.transition=t})}},{key:"_setTransform",value:function(n){var t=this;n=n||0,d(t.$items).forEach(function(e,i){var o=t._offset[i]+n,r="translate3d("+o+"px, 0, 0)";"vertical"===t._options.direction&&(r="translate3d(0, "+o+"px, 0)"),e.style.webkitTransform=r,e.style.transform=r,t._isMoved=!0})}},{key:"_bind",value:function(){var n=this,t=this;t.touchstartHandler=function(n){t.stop(),t._start.x=n.changedTouches[0].pageX,t._start.y=n.changedTouches[0].pageY,t._setTransition("none"),t._isMoved=!1},t.touchmoveHandler=function(e){if(1!==t.count){t._move.x=e.changedTouches[0].pageX,t._move.y=e.changedTouches[0].pageY;var i=t._move.x-t._start.x,o=t._move.y-t._start.y,r=o,s=Math.abs(i)>Math.abs(o);"horizontal"===t._options.direction&&s&&(r=i),n._options.loop||n._current!==n.count-1&&0!==n._current||(r/=3),((t._options.minMovingDistance&&Math.abs(r)>=t._options.minMovingDistance||!t._options.minMovingDistance)&&s||t._isMoved)&&t._setTransform(r),s&&e.preventDefault()}},t.touchendHandler=function(n){if(1!==t.count){t._end.x=n.changedTouches[0].pageX,t._end.y=n.changedTouches[0].pageY;var e=t._end.y-t._start.y;"horizontal"===t._options.direction&&(e=t._end.x-t._start.x),e=t.getDistance(e),0!==e&&t._options.minMovingDistance&&Math.abs(e)<t._options.minMovingDistance&&!t._isMoved||(e>t._options.threshold?t.move(-1):e<-t._options.threshold?t.move(1):t.move(0),t._loopRender())}},t.transitionEndHandler=function(n){t._activate(t._current);var e=t._eventHandlers.swiped;e&&e.apply(t,[t._prev%t.count,t._current%t.count]),t._auto(),t._loopRender(),n.preventDefault()},t.$container.addEventListener("touchstart",t.touchstartHandler,!1),t.$container.addEventListener("touchmove",t.touchmoveHandler,!1),t.$container.addEventListener("touchend",t.touchendHandler,!1),t.$items[1]&&t.$items[1].addEventListener("webkitTransitionEnd",t.transitionEndHandler,!1)}},{key:"_loopRender",value:function(){var n=this;n._loop()&&(0===n._offset[n._offset.length-1]?(n.$container.appendChild(n.$items[0]),n._loopEvent(1)):0===n._offset[0]&&(n.$container.insertBefore(n.$items[n.$items.length-1],n.$container.firstChild),n._loopEvent(-1)))}},{key:"_loopEvent",value:function(n){var t=this;t._itemDestoy(),t.$items=t.$container.querySelectorAll(t._options.item),t.$items[1]&&t.$items[1].addEventListener("webkitTransitionEnd",t.transitionEndHandler,!1),t._movePosition(n),t._setOffset(),t._setTransform()}},{key:"getDistance",value:function(n){return this._loop()?n:n>0&&0===this._current?0:n<0&&this._current===this.realCount-1?0:n}},{key:"_moveIndex",value:function(n){0!==n&&(this._prev=this._current,this._current+=this.realCount,this._current+=n,this._current%=this.realCount)}},{key:"_activate",value:function(n){var t=this._options.activeClass;Array.prototype.forEach.call(this.$items,function(e,i){e.classList.remove(t),n===Number(e.dataset.index)&&e.classList.add(t)})}},{key:"go",value:function(n){var t=this;return t.stop(),n=n||0,n+=this.realCount,n%=this.realCount,n=this._position.indexOf(n)-this._position.indexOf(this._current),t._moveIndex(n),t._setOffset(),t._setTransition(),t._setTransform(),t._auto(),this}},{key:"next",value:function(){return this.move(1),this}},{key:"move",value:function(n){return this.go(this._current+n),this}},{key:"on",value:function(n,t){return this._eventHandlers[n],this._eventHandlers[n]=t,this}},{key:"_itemDestoy",value:function(){var n=this;this.$items.length&&d(this.$items).forEach(function(t){t.removeEventListener("webkitTransitionEnd",n.transitionEndHandler,!1)})}},{key:"destroy",value:function(){if(this.stop(),this._current=0,this._setTransform(0),window.removeEventListener("orientationchange",this.resizeHandler,!1),this.$container.removeEventListener("touchstart",this.touchstartHandler,!1),this.$container.removeEventListener("touchmove",this.touchmoveHandler,!1),this.$container.removeEventListener("touchend",this.touchendHandler,!1),this._itemDestoy(),this._options.loop&&2===this.count){var n=this.$container.querySelector(this._options.item+"-clone");n&&this.$container.removeChild(n),n=this.$container.querySelector(this._options.item+"-clone"),n&&this.$container.removeChild(n)}}}]),n}(),f=p,v=e("0FxO"),m=(Array,String,Boolean,Boolean,String,String,Boolean,Boolean,Number,Number,Number,String,Number,Number,Number,{name:"swiper",created:function(){this.index=this.value||0,this.index&&(this.current=this.index)},mounted:function(){var n=this;this.hasTwoLoopItem(),this.$nextTick(function(){n.list&&0===n.list.length||n.render(n.index),n.xheight=n.getHeight(),n.$emit("on-get-height",n.xheight)})},methods:{hasTwoLoopItem:function(){2===this.list.length&&this.loop?this.listTwoLoopItem=this.list:this.listTwoLoopItem=[]},clickListItem:function(n){Object(v.a)(n.url,this.$router),this.$emit("on-click-list-item",JSON.parse(r()(n)))},buildBackgroundUrl:function(n){return n.fallbackImg?"url("+n.img+"), url("+n.fallbackImg+")":"url("+n.img+")"},render:function(){var n=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.swiper&&this.swiper.destroy(),this.swiper=new f({container:this.$el,direction:this.direction,auto:this.auto,loop:this.loop,interval:this.interval,threshold:this.threshold,duration:this.duration,height:this.height||this._height,minMovingDistance:this.minMovingDistance,imgList:this.imgList}).on("swiped",function(t,e){n.current=e%n.length,n.index=e%n.length}),t>0&&this.swiper.go(t)},rerender:function(){var n=this;this.$el&&!this.hasRender&&(this.hasRender=!0,this.hasTwoLoopItem(),this.$nextTick(function(){n.index=n.value||0,n.current=n.value||0,n.length=n.list.length||n.$children.length,n.destroy(),n.render(n.value)}))},destroy:function(){this.hasRender=!1,this.swiper&&this.swiper.destroy()},getHeight:function(){var n=parseInt(this.height,10);return n?this.height:n?void 0:this.aspectRatio?this.$el.offsetWidth*this.aspectRatio+"px":"180px"}},props:{list:{type:Array,default:function(){return[]}},direction:{type:String,default:"horizontal"},showDots:{type:Boolean,default:!0},showDescMask:{type:Boolean,default:!0},dotsPosition:{type:String,default:"right"},dotsClass:String,auto:Boolean,loop:Boolean,interval:{type:Number,default:3e3},threshold:{type:Number,default:50},duration:{type:Number,default:300},height:{type:String,default:"auto"},aspectRatio:Number,minMovingDistance:{type:Number,default:0},value:{type:Number,default:0}},data:function(){return{hasRender:!1,current:this.index||0,xheight:"auto",length:this.list.length,index:0,listTwoLoopItem:[]}},watch:{auto:function(n){n?this.swiper&&this.swiper._auto():this.swiper&&this.swiper.stop()},list:function(n,t){r()(n)!==r()(t)&&this.rerender()},current:function(n){this.index=n,this.$emit("on-index-change",n)},index:function(n){var t=this;n!==this.current&&this.$nextTick(function(){t.swiper&&t.swiper.go(n)}),this.$emit("input",n)},value:function(n){this.index=n}},beforeDestroy:function(){this.destroy()}}),b=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"vux-slider"},[e("div",{staticClass:"vux-swiper",style:{height:n.xheight}},[n._t("default"),n._v(" "),n._l(n.list,function(t,i){return e("div",{staticClass:"vux-swiper-item",attrs:{"data-index":i},on:{click:function(e){n.clickListItem(t)}}},[e("a",{attrs:{href:"javascript:"}},[e("div",{staticClass:"vux-img",style:{backgroundImage:n.buildBackgroundUrl(t)}}),n._v(" "),n.showDescMask?e("p",{staticClass:"vux-swiper-desc"},[n._v(n._s(t.title))]):n._e()])])}),n._v(" "),n._l(n.listTwoLoopItem,function(t,i){return n.listTwoLoopItem.length>0?e("div",{staticClass:"vux-swiper-item vux-swiper-item-clone",attrs:{"data-index":i},on:{click:function(e){n.clickListItem(t)}}},[e("a",{attrs:{href:"javascript:"}},[e("div",{staticClass:"vux-img",style:{backgroundImage:n.buildBackgroundUrl(t)}}),n._v(" "),n.showDescMask?e("p",{staticClass:"vux-swiper-desc"},[n._v(n._s(t.title))]):n._e()])]):n._e()})],2),n._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:n.showDots,expression:"showDots"}],class:[n.dotsClass,"vux-indicator","vux-indicator-"+n.dotsPosition]},n._l(n.length,function(t){return e("a",{attrs:{href:"javascript:"}},[e("i",{staticClass:"vux-icon-dot",class:{active:t-1===n.current}})])}),0)])},g=[],_=e("XyMi"),x=i,y=Object(_.a)(m,b,g,!1,x,null,null);t.a=y.exports},"rer+":function(n,t,e){var i=e("/97M");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var o=e("rjj0").default;o("6b10565e",i,!0,{})},wxAW:function(n,t,e){"use strict";t.__esModule=!0;var i=e("C4MV"),o=function(n){return n&&n.__esModule?n:{default:n}}(i);t.default=function(){function n(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,o.default)(n,i.key,i)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}()}});