webpackJsonp([256],{"3yIw":function(t,e,i){"use strict";function s(t){i("hDhW")}Object.defineProperty(e,"__esModule",{value:!0});var o=i("mvHQ"),n=i.n(o),a=i("/0UN"),r=i("hGvq"),l=i("0iPh"),d=i.n(l),h=function(){return i.e(120).then(i.bind(null,"tsXc"))},u=(a.a,r.a,function(){return i.e(120).then(i.bind(null,"tsXc"))}),c={components:{Checker:a.a,CheckerItem:r.a,BetLoader:u},props:["activeTab","betHelpDialogHandler","isSelected","code","showHotCold"],data:function(){return{lottery:null,playCode:"xy28_sum3",titleList:["特码包三"],hotColdMap:{},selectList:[]}},created:function(){this.initSelect(),this.initHotColdMap(),this.getBetOdd("xy28_sum3")},methods:{selectItem:function(t){var e=!this.selectList[t];this.$set(this.selectList,t,e);var i=!1;-1!==this.selectList.indexOf(!0)&&(i=!0),this.isSelected(i)},initSelect:function(){for(var t=0;t<28;t++)this.selectList.push(!1)},getBetOdd:function(t){var e=this;this.$api.get(this.$luyou.LOTTO.GET_ODD,{code:this.code,betCodes:t},function(t){e.lottery=t.data[0],e.$nextTick(function(){e.$emit("gengxin")})},function(t){t&&e.toast(e.$api.tip(t))})},getBetCount:function(){var t=parseInt(d()("#betCheck .check-bg").length/3);return t>1&&(t=1),parseInt(t)},getCanWinMoney:function(){var t=this.$parent.$parent.betCount,e=this.$parent.$parent.betMoney?Number(this.$parent.$parent.betMoney):0,i=0;null!=this.lottery&&(i=this.lottery["特码包三"].odd);var s=this.$global.mul(i,e);return t>0?s:0},initHotColdMap:function(){this.hotColdMap={};for(var t=0;t<=27;t++){var e={val:0,jx:!0};this.hotColdMap[t]=e}},setHotCold:function(){if(this.initHotColdMap(),!this.$parent.$refs.bethead)return 1;if(this.result=this.$parent.$refs.bethead.recentResult,this.result)for(var t=0;t<this.result.length;t++){var e=this.result[t];if(e.openCode){for(var i=e.openCode.split(","),s=0,o=0;o<i.length;o++)s+=parseInt(i[o]);for(var n=0;n<28;n++)n===s&&(this.hotColdMap[n].val+=1)}}},setYiLou:function(){if(this.initHotColdMap(),!this.$parent.$refs.bethead)return 1;if(this.result=this.$parent.$refs.bethead.recentResult,this.result)for(var t=0;t<this.result.length;t++){var e=this.result[t];if(e.openCode){for(var i=e.openCode.split(","),s=0,o=0;o<i.length;o++)s+=parseInt(i[o]);for(var n=0;n<28;n++)if(n===s){this.hotColdMap[n].jx=!1;for(var a=0;a<28;a++)this.hotColdMap[a].jx&&(this.hotColdMap[a].val+=1)}}}},setBetForm:function(){d()("#dd").val()},randomBetNum:function(){for(var t=[],e=0;e<1e3;e++){var i=parseInt(27*Math.random());if(-1===t.indexOf(i)&&(t.push(i),this.isSelected(!0,i),3===t.length))return}},getBetForm:function(){var t=this,e={code:this.code,expect:null,quantity:0,totalMoney:0,playModel:"tradition",betOrders:[]},i=d()("#betCheck .check-bg");if(0===i.length)return this.toast("请选择"),1;var s=parseInt(d()("#betMoney").val());if(3!==i.length)return this.toast("只能选择3个号码!"),1;if(s<1)return this.toast("请输入下注金额!"),1;for(var o=0,a=i.length;o<a;o++)this.betNums=0===o?i[o].getAttribute("num"):this.betNums+","+i[o].getAttribute("num");i.sort(),e.betOrders.push({betNum:this.betNums,betCode:this.$refs.dingwei.getAttribute("data-bet-code"),playCode:this.$refs.dingwei.getAttribute("data-play-code"),betAmount:s,odd:this.$refs.dingwei.getAttribute("data-odd")}),e.totalMoney=t.$global.add(e.totalMoney,s),e.quantity=t.$global.add(e.quantity,1),localStorage.betForm=n()(e),this.$router.push({path:"/lotto/confirm-bet",query:{name:this.$route.query.name}})}}},f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[null!=t.lottery?i("div",{staticClass:"cont-2"},[i("div",{staticClass:"v1-gxks-bottom"},[i("div",{ref:"dingwei",staticClass:"v1-shuangmian-tit",attrs:{"data-bet-num":t.lottery["特码包三"].betNum,"data-bet-code":t.lottery["特码包三"].betCode,"data-play-code":t.lottery["特码包三"].playCode,"data-odd":t.lottery["特码包三"].odd}},[t._v("特码包三")]),t._v(" "),i("div",{staticClass:"v1-dianshu-width"},[i("ul",{staticClass:"v1-dbmian-wrap v1-commom-ul clear-both",attrs:{id:"betCheck"}},t._l(28,function(e){return i("li",{key:e-1,class:["v1-lengre-box-wrap",{"check-bg":t.selectList[e-1]},"v1a-common"],attrs:{num:e-1},on:{click:function(i){t.selectItem(e-1)}}},[i("div",{staticClass:"v1-shuangmian-content"},[i("div",{staticClass:"v1-longcard-content clear-both"},[i("p",{class:"fl v1-number-font-size v1-num-xy28 v1-xy28-"+(e-1)},[t._v(t._s(e-1))]),t._v(" "),i("p",{staticClass:"fr"},[t._v(t._s(t.lottery["特码包三"].odd))])])]),t._v(" "),t.showHotCold?i("font",{staticClass:"v1-lengre-content"},[t._v(t._s(t.hotColdMap[e-1].val))]):t._e()],1)}),0)])])]):i("div",[i("bet-loader")],1)])},p=[],v=i("XyMi"),b=s,m=Object(v.a)(c,f,p,!1,b,null,null);e.default=m.exports},hDhW:function(t,e,i){var s=i("soFt");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var o=i("rjj0").default;o("6b6ed83f",s,!0,{})},soFt:function(t,e,i){e=t.exports=i("FZ+f")(!1),e.push([t.i,"",""])}});