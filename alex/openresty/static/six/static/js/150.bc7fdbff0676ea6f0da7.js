webpackJsonp([150],{"/0UN":function(t,e,n){"use strict";function r(t){n("WoJe")}var s=(String,String,String,String,String,Number,Array,Object,Number,Boolean,{name:"checker",props:{defaultItemClass:String,selectedItemClass:String,disabledItemClass:String,type:{type:String,default:"radio"},value:[String,Number,Array,Object],max:Number,radioRequired:Boolean},watch:{value:function(t){this.currentValue=t},currentValue:function(t){this.$emit("input",t),this.$emit("on-change",t)}},data:function(){return{currentValue:this.value}}}),a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vux-checker-box"},[t._t("default")],2)},i=[],l=n("XyMi"),u=r,c=Object(l.a)(s,a,i,!1,u,null,null);e.a=c.exports},"7IgC":function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"\n.vux-tap-active {\n  tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.vux-tap-active:active {\n  background-color: #ECECEC;\n}\n",""])},H9M3:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"",""])},WoJe:function(t,e,n){var r=n("bk3p");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var s=n("rjj0").default;s("b0a8acb4",r,!0,{})},ZgZc:function(t,e,n){var r=n("H9M3");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var s=n("rjj0").default;s("5ac044c0",r,!0,{})},bk3p:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"\n.vux-checker-item {\n  display: inline-block;\n}\n",""])},hGvq:function(t,e,n){"use strict";function r(t,e){return l()(t)===l()(e)}function s(t,e){return l()(t)===l()(e)}function a(t){n("nTDu")}var i=n("mvHQ"),l=n.n(i),u=n("pFYg"),c=n.n(u),o=(String,Number,Object,Boolean,{name:"checker-item",props:{value:{type:[String,Number,Object],required:!0},disabled:Boolean},watch:{disabled:function(t){t&&"radio"===this.$parent.type&&this.value===this.$parent.currentValue&&(this.$parent.currentValue="")}},computed:{classNames:function(){var t=this,e="string"==typeof this.value||"number"==typeof this.value,n={"vux-tap-active":!this.disabled};if(this.$parent.defaultItemClass&&(n[this.$parent.defaultItemClass]=!0),this.$parent.selectedItemClass){var r=!1;if("radio"===this.$parent.type)e&&this.$parent.currentValue===this.value?r=!0:"object"===c()(this.value)&&s(this.$parent.currentValue,this.value)&&(r=!0);else if("string"==typeof this.value)this.$parent.currentValue.indexOf(this.value)>-1&&(r=!0);else if(this.$parent.currentValue&&this.$parent.currentValue.length){var a=this.$parent.currentValue.filter(function(e){return s(e,t.value)});r=a.length>0}n[this.$parent.selectedItemClass]=r}return this.$parent.disabledItemClass&&(n[this.$parent.disabledItemClass]=this.disabled),n}},methods:{select:function(){"radio"===this.$parent.type?this.selectRadio():this.selectCheckbox()},selectRadio:function(){this.disabled||(this.$parent.currentValue===this.value?this.$parent.radioRequired||(this.$parent.currentValue=""):this.$parent.currentValue=this.value),this.$emit("on-item-click",this.value,this.disabled)},selectCheckbox:function(){this.$parent.currentValue&&null!==this.$parent.currentValue||(this.$parent.currentValue=[]);var t="string"==typeof this.value||"number"==typeof this.value;if(!this.disabled){var e=-1;e=t?this.$parent.currentValue.indexOf(this.value):this.$parent.currentValue.map(function(t){return l()(t)}).indexOf(l()(this.value)),e>-1?this.$parent.currentValue.splice(e,1):(!this.$parent.max||this.$parent.max&&null!==this.$parent.currentValue&&this.$parent.currentValue.length<this.$parent.max)&&(this.$parent.currentValue&&this.$parent.currentValue.length||(this.$parent.currentValue=[]),this.$parent.currentValue.push(this.value))}this.$emit("on-item-click",this.value,this.disabled)}}}),h=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vux-checker-item",class:t.classNames,on:{click:t.select}},[t._t("default")],2)},d=[],v=n("XyMi"),p=a,m=Object(v.a)(o,h,d,!1,p,null,null);e.a=m.exports},nTDu:function(t,e,n){var r=n("7IgC");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var s=n("rjj0").default;s("628a3183",r,!0,{})},nt39:function(t,e,n){"use strict";function r(t){n("ZgZc")}Object.defineProperty(e,"__esModule",{value:!0});var s=n("WGHO"),a=n("/0UN"),i=n("hGvq"),l=function(){return n.e(120).then(n.bind(null,"tsXc"))},u=(a.a,i.a,function(){return n.e(120).then(n.bind(null,"tsXc"))}),c={components:{Checker:a.a,CheckerItem:i.a,BetLoader:u},props:["activeTab","betHelpDialogHandler","isSelected","code","showHotCold"],data:function(){return{lottery:null,playCode:"one_digital",titleList:["冠军","亚军","季军","第四名","第五名","第六名","第七名","第八名","第九名","第十名"],numArr:null,forArr:[[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],["和大","和小","和单","和双"],["和大","和小","和单","和双","大双","大单","小双","小单"]],selectList:[]}},created:function(){this.initNumArr(),this.getBetOdd()},methods:{selectItem:function(t,e,n){this.isSelected(s.c.selectItem(t,e,n))},initSelectList:function(t){this.selectList.push([!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]),this.selectList.push([!1,!1,!1,!1,!1,!1,!1,!1])},getBetOdd:function(){var t=this;this.$api.get(this.$luyou.LOTTO.GET_ODD,{code:this.code},function(e){t.initSelectList(e.data[0]),t.lottery=e.data[0],t.$nextTick(function(){t.$emit("gengxin")})},function(e){e&&t.toast(t.$api.tip(e))})},setHotCold:function(){if(!this.$parent.$refs.bethead)return 1;this.initNumArr();var t=this.$parent.$refs.bethead.recentResult;if(t)for(var e=0;e<t.length;e++)if(t[e].openCode){var n=t[e].openCode.split(","),r=Number(n[0])+Number(n[9]);this.numArr[r].val++,11!==r&&(r>11?this.numArr["和大"].val++:this.numArr["和小"].val++,r%2==0?this.numArr["和双"].val++:this.numArr["和单"].val++)}},setYiLou:function(){if(!this.$parent.$refs.bethead)return 1;this.initNumArr();var t=void 0,e=this;t="bjpk10"===this.code?["3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","和大","和小","和单","和双"]:["3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","和大","和小","和单","和双","大双","大单","小双","小单"];var n=this.$parent.$refs.bethead.recentResult;if(n)for(var r=0;r<n.length;r++)if(n[r].openCode){var s=n[r].openCode.split(","),a=Number(s[0])+Number(s[1]),i=[];i.push(a+""),"bjpk10"===e.code?11!==a&&(a>11?i.push("和大"):i.push("和小"),a%2==0?i.push("和双"):i.push("和单")):"jspk10"!==e.code&&"xyft"!==e.code||11!==a&&(a>11?(i.push("和大"),a%2==0?i.push("大双"):i.push("小双")):(i.push("和小"),a%2==0?i.push("小双"):i.push("小单")),a%2==0?i.push("和双"):i.push("和单"));for(var l=0;l<i.length;l++)this.numArr[i[l]].jx=!1;for(var u=0;u<t.length;u++)this.numArr[t[u]].jx&&(this.numArr[t[u]].val=this.numArr[t[u]].val+1)}},initNumArr:function(){this.numArr={};for(var t=3;t<20;t++)this.numArr[t]={val:0,jx:!0};this.numArr["和大"]={val:0,jx:!0},this.numArr["和小"]={val:0,jx:!0},this.numArr["和单"]={val:0,jx:!0},this.numArr["和双"]={val:0,jx:!0},this.numArr["大单"]={val:0,jx:!0},this.numArr["大双"]={val:0,jx:!0},this.numArr["小单"]={val:0,jx:!0},this.numArr["小双"]={val:0,jx:!0}}}},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[null!=t.lottery?n("div",{staticClass:"cont-1",attrs:{id:"betCheck"}},[n("div",{staticClass:"v1-gxks-bottom"},[n("div",{staticClass:"v1-shuangmian-tit"},[t._v("冠亚军和")]),t._v(" "),n("div",{staticClass:"v1-dianshu-width"},[n("ul",{staticClass:"v1-dbmian-wrap v1-commom-ul clear-both"},t._l(t.forArr[0],function(e,r){return n("li",{key:r,class:["v1-lengre-box-wrap",{"check-bg":t.selectList[0][r]},"v1a-common"],attrs:{"data-bet-num":t.lottery[e].betNum,"data-bet-code":t.lottery[e].betCode,"data-play-code":t.lottery[e].playCode,"data-odd":t.lottery[e].odd},on:{click:function(e){t.selectItem(0,r,17)}}},[n("div",{staticClass:"v1-shuangmian-content"},[n("div",{staticClass:"v1-longcard-content clear-both"},[n("p",{class:["fl v1-num-ball v1-ssc-numb-ball v1-number-font-size theme-font-color",{"number-ball-bg ":t.selectList[0][r]}]},[t._v(t._s(e))]),t._v(" "),n("p",{staticClass:"fr"},[t._v(t._s(t.lottery[e].odd))])])]),t._v(" "),t.showHotCold?n("font",{staticClass:"v1-lengre-content"},[t._v(t._s(t.numArr[e].val))]):t._e()],1)}),0)])]),t._v(" "),null!=t.lottery?n("div",{staticClass:"v1-gxks-bottom"},[n("div",{staticClass:"v1-shuangmian-tit"},[t._v("冠亚军和-单双大小")]),t._v(" "),n("div",{staticClass:"v1-dianshu-width"},[n("ul",{staticClass:"v1-dbmian-wrap v1-commom-ul clear-both"},t._l(t.forArr[2],function(e,r){return n("li",{key:r,class:["v1-lengre-box-wrap",{"check-bg":t.selectList[1][r]},"v1a-common"],attrs:{"data-bet-num":t.lottery[e].betNum,"data-bet-code":t.lottery[e].betCode,"data-play-code":t.lottery[e].playCode,"data-odd":t.lottery[e].odd},on:{click:function(e){t.selectItem(1,r,17)}}},[n("div",{staticClass:"v1-shuangmian-content"},[n("div",{staticClass:"v1-longcard-content clear-both"},[n("p",{staticClass:"fl"},[t._v(t._s(e))]),t._v(" "),n("p",{staticClass:"fr"},[t._v(t._s(t.lottery[e].odd))])])]),t._v(" "),t.showHotCold?n("font",{staticClass:"v1-lengre-content"},[t._v(t._s(t.numArr[e].val))]):t._e()],1)}),0)])]):t._e()]):n("div",[n("bet-loader")],1)])},h=[],d=n("XyMi"),v=r,p=Object(d.a)(c,o,h,!1,v,null,null);e.default=p.exports}});