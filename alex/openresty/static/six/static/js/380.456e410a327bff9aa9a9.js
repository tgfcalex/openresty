webpackJsonp([380],{"6tCk":function(t,e,o){"use strict";function s(t){o("izeN")}Object.defineProperty(e,"__esModule",{value:!0});var n=o("mvHQ"),i=o.n(n),a=o("/0UN"),r=o("hGvq"),l=o("0iPh"),d=o.n(l),c=o("WGHO"),h=function(){return o.e(120).then(o.bind(null,"tsXc"))},u=(a.a,r.a,function(){return o.e(120).then(o.bind(null,"tsXc"))}),v={components:{Checker:a.a,CheckerItem:r.a,BetLoader:u},props:["activeTab","betHelpDialogHandler","isSelected","code","showHotCold"],data:function(){return{lottery:[],playCode:"keno_selection_five",betTitle:"选4",name:"选四-中4",odd:"",hotColdMap:{},selectList:[]}},created:function(){this.initSelectList(),this.initHotColdMap(),this.getBetOdd("keno_selection")},methods:{selectItem:function(t,e,o){this.isSelected(c.c.selectItem(t,e,o))},initSelectList:function(){for(var t=0;t<80;t++)this.selectList.push(!1)},getBetOdd:function(t){var e=this;this.$api.get(this.$luyou.LOTTO.GET_ODD,{code:this.code,betCodes:t},function(t){e.lottery=t.data[0],e.$nextTick(function(){e.$emit("gengxin")})},function(t){t&&e.toast(e.$api.tip(t))})},setBetForm:function(){d()("#dd").val()},randomBetNum:function(){d()("#betCheck .item").removeClass("item-selected");for(var t=0;t<4;t++){var e=parseInt(80*Math.random());this.isSelected(!0,e)}},getBetForm:function(){var t=this,e={code:this.code,expect:null,quantity:0,totalMoney:0,playModel:"tradition",betOrders:[]},o=d()("#betCheck .check-bg");if(0===o.length)return this.toast("请选择"),1;var s=parseInt(d()("#betMoney").val());if(4!==o.length)return this.toast("只能选择4个号码!"),1;if(s<1)return this.toast("请输入下注金额!"),1;for(var n=0,a=o.length;n<a;n++)this.betNums=0===n?o[n].getAttribute("num"):this.betNums+","+o[n].getAttribute("num");o.sort(),e.betOrders.push({betNum:this.betNums,betCode:this.$refs.dingwei.getAttribute("data-bet-code"),playCode:this.$refs.dingwei.getAttribute("data-play-code"),betAmount:s,odd:this.$refs.dingwei.getAttribute("data-odd")}),e.totalMoney=t.$global.add(e.totalMoney,s),e.quantity=t.$global.add(e.quantity,1),localStorage.betForm=i()(e),this.$router.push({path:"/lotto/confirm-bet",query:{name:this.$route.query.name}})},getBetCount:function(){var t=d()("#betCheck .check-bg").length;t>4&&this.toast("只能选择四个号码");var e=4===t?1:t<4?0:1;return parseInt(e)},getCanWinMoney:function(){var t=this.$parent.$parent.betCount,e=this.$parent.$parent.betMoney?Number(this.$parent.$parent.betMoney):0,o=0,s=0;null!=this.lottery&&(o=this.lottery["选四-中4"].odd,s=this.lottery["选四-中2"].odd);var n=this.$global.mul(o,e),i=this.$global.mul(s,e);return t>0?i+"~"+n:0},initHotColdMap:function(){this.hotColdMap={};for(var t=1;t<=80;t++){var e={val:0,jx:!0};this.hotColdMap[t]=e}},setHotCold:function(){if(this.initHotColdMap(),!this.$parent.$refs.bethead)return 1;if(this.result=this.$parent.$refs.bethead.recentResult,this.result)for(var t=0;t<this.result.length;t++){var e=this.result[t];if(e.openCode)for(var o=e.openCode.split(","),s=0;s<o.length;s++)for(var n=1;n<=80;n++)n===parseInt(o[s])&&(this.hotColdMap[n].val+=1)}},setYiLou:function(){if(this.initHotColdMap(),!this.$parent.$refs.bethead)return 1;if(this.result=this.$parent.$refs.bethead.recentResult,this.result)for(var t=0;t<this.result.length;t++){var e=this.result[t];if(e.openCode)for(var o=e.openCode.split(","),s=1;s<=80;s++){for(var n=0;n<o.length;n++)s===parseInt(o[n])&&(this.hotColdMap[s].jx=!1);this.hotColdMap[s].jx&&(this.hotColdMap[s].val+=1)}}}}},f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[0!=t.lottery.length?o("div",{staticClass:"cont-1"},[o("div",{staticClass:"v1-gxks-bottom"},[o("div",{staticClass:"v1-shuangmian-tit"},[t._v("\n        选4\n        （中4@"),o("span",{ref:"dingwei",staticClass:"theme-color",attrs:{"data-bet-code":t.lottery["选四-中4"].betCode,"data-play-code":t.lottery["选四-中4"].playCode,"data-odd":t.lottery["选四-中4"].odd}},[t._v(t._s(t.lottery["选四-中4"].odd))]),t._v("\n        中3@"),o("span",{staticClass:"theme-color"},[t._v(t._s(t.lottery["选四-中3"].odd))]),t._v("\n        中2@"),o("span",{staticClass:"theme-color"},[t._v(t._s(t.lottery["选四-中2"].odd))]),t._v("）\n      ")]),t._v(" "),o("div",{staticClass:"v1-dianshu-width"},[o("ul",{staticClass:"v1-dbmian-wrap v1-commom-ul clear-both",attrs:{id:"betCheck"}},t._l(80,function(e){return o("li",{key:e-1,class:["v1-lengre-box-wrap",{"check-bg":t.selectList[e-1]},"v1a-common"],attrs:{num:e},on:{click:function(o){t.selectItem(0,e-1,80)}}},[o("div",{staticClass:"v1-shuangmian-content"},[o("div",{staticClass:"v1-longcard-content v1-content-font-color clear-both"},[o("p",{class:["fl v1-num v1-ssc-numb-ball v1-number-font-size theme-font-color v1-margin-absolute-auto",{"number-ball-bg":t.selectList[e-1]}]},[t._v(t._s(e))])])]),t._v(" "),t.showHotCold?o("font",{staticClass:"v1-lengre-content"},[t._v(t._s(t.hotColdMap[e].val))]):t._e()],1)}),0)])])]):o("div",[o("bet-loader")],1)])},p=[],b=o("XyMi"),m=s,C=Object(b.a)(v,f,p,!1,m,null,null);e.default=C.exports},"NVx/":function(t,e,o){e=t.exports=o("FZ+f")(!1),e.push([t.i,"",""])},izeN:function(t,e,o){var s=o("NVx/");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=o("rjj0").default;n("7be1abeb",s,!0,{})}});