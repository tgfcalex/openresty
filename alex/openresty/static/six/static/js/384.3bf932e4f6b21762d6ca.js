webpackJsonp([384],{"02qE":function(t,s,e){s=t.exports=e("FZ+f")(!1),s.push([t.i,"",""])},LSd0:function(t,s,e){var o=e("02qE");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=e("rjj0").default;a("ee026f44",o,!0,{})},mMxS:function(t,s,e){"use strict";function o(t){e("LSd0")}Object.defineProperty(s,"__esModule",{value:!0});var a=e("WGHO"),i=e("/0UN"),l=e("hGvq"),n=function(){return e.e(120).then(e.bind(null,"tsXc"))},h=(i.a,l.a,function(){return e.e(120).then(e.bind(null,"tsXc"))}),r={components:{Checker:i.a,CheckerItem:l.a,BetLoader:h},props:["activeTab","betHelpDialogHandler","isSelected","code","showHotCold"],data:function(){return{lottery:[],betTitle:"点数",nums:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],num:["大","小","单","双"],hotColdMap:{},checkList:0,selectList:[[!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]]}},created:function(){this.initHotColdMap(),this.getBetOdd("points")},methods:{selectItem:function(t,s,e){this.isSelected(a.c.selectItem(t,s,e))},getBetOdd:function(t){var s=this;this.$api.get(this.$luyou.LOTTO.GET_ODD,{code:this.code,betCodes:t},function(t){s.lottery=t.data[0],s.$nextTick(function(){s.$emit("gengxin")})},function(t){t&&s.toast(s.$api.tip(t))})},initHotColdMap:function(){this.hotColdMap={};for(var t=0;t<this.num.length;t++)this.hotColdMap[this.num[t]]={val:0,jx:!0};for(var s=0;s<this.nums.length;s++)this.hotColdMap[this.nums[s]]={val:0,jx:!0}},setHotCold:function(){if(this.initHotColdMap(),!this.$parent.$refs.bethead)return 1;if(this.result=this.$parent.$refs.bethead.recentResult,this.result)for(var t=0;t<this.result.length;t++){var s=this.result[t];if(s.openCode){for(var e=s.openCode.split(","),o=0,a=0;a<e.length;a++)o+=parseInt(e[a]);parseInt(e[0])===parseInt(e[1])&&parseInt(e[1])===parseInt(e[2])?this.points(o):(this.sumSinglDouble(o),this.sumBigSmall(o),this.points(o))}}},sumSinglDouble:function(t){3!==t&&18!==t&&(t%2==0?this.hotColdMap["双"].val+=1:this.hotColdMap["单"].val+=1)},sumBigSmall:function(t){3!==t&&18!==t&&(t>=11&&t<=17?this.hotColdMap["大"].val+=1:t>=4&&t<=10&&(this.hotColdMap["小"].val+=1))},points:function(t){if(3!==t&&18!==t)for(var s=0;s<this.nums.length;s++)this.nums[s]===t&&(this.hotColdMap[this.nums[s]].val+=1)},setYiLou:function(){if(this.initHotColdMap(),!this.$parent.$refs.bethead)return 1;if(this.result=this.$parent.$refs.bethead.recentResult,this.result)for(var t=0;t<this.result.length;t++){var s=this.result[t];if(s.openCode){for(var e=s.openCode.split(","),o=0,a=0;a<e.length;a++)o+=parseInt(e[a]);parseInt(e[0])===parseInt(e[1])&&parseInt(e[1])===parseInt(e[2])?this.pointsYL(o):(this.sumSinglDoubleYL(o),this.sumBigSmallYL(o),this.pointsYL(o))}}},sumSinglDoubleYL:function(t){3!==t&&18!==t&&(t%2==0?(this.hotColdMap["双"].jx=!1,this.hotColdMap["单"].jx&&(this.hotColdMap["单"].val+=1)):(this.hotColdMap["单"].jx=!1,this.hotColdMap["双"].jx&&(this.hotColdMap["双"].val+=1)))},sumBigSmallYL:function(t){3!==t&&18!==t&&(t>=11&&t<=17?(this.hotColdMap["大"].jx=!1,this.hotColdMap["小"].jx&&(this.hotColdMap["小"].val+=1)):t>=4&&t<=10&&(this.hotColdMap["小"].jx=!1,this.hotColdMap["大"].jx&&(this.hotColdMap["大"].val+=1)))},pointsYL:function(t){if(3!==t&&18!==t){for(var s=0;s<this.nums.length;s++)this.nums[s]===t&&(this.hotColdMap[this.nums[s]].jx=!1);for(var e=3;e<19;e++)t!==e?this.hotColdMap[e].val+=1:this.hotColdMap[e].val=0}}}},d=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cont-1"},[0==t.activeTab&&0!=t.lottery.length?e("div",{staticClass:"cont-1 dianshu",attrs:{id:"betCheck"}},[e("div",{staticClass:"v1-gxks-bottom"},[e("div",{staticClass:"v1-shuangmian-tit"},[t._v("双面 ")]),t._v(" "),e("div",{staticClass:"v1-dianshu-width"},[e("ul",{staticClass:"v1-dbmian-wrap v1-commom-ul clear-both"},t._l(t.num,function(s,o){return e("li",{key:o,class:["v1-lengre-box-wrap",{"check-bg":t.selectList[0][o]},"v1a-common"],attrs:{"data-bet-num":t.lottery[s].betNum,"data-bet-code":t.lottery[s].betCode,"data-play-code":t.lottery[s].playCode,"data-odd":t.lottery[s].odd},on:{click:function(s){t.selectItem(0,o,4)}}},[e("div",{staticClass:"v1-shuangmian-content v1-longcard-content v1a-itemNum clear-both"},[e("p",{staticClass:"fl"},[t._v(t._s(t.lottery[s].betNum))]),t._v(" "),e("p",{staticClass:"fr"},[t._v(t._s(t.lottery[s].odd))])]),t._v(" "),t.showHotCold?e("font",{staticClass:"v1-lengre-content"},[t._v(t._s(t.hotColdMap[s].val))]):t._e()],1)}),0)])]),t._v(" "),e("div",{staticClass:"v1-gxks-bottom"},[e("div",{staticClass:"v1-shuangmian-tit"},[t._v("点数")]),t._v(" "),e("div",{staticClass:"v1-dianshu-width"},[e("ul",{staticClass:"v1-dbmian-wrap v1-commom-ul clear-both"},t._l(t.nums,function(s,o){return e("li",{key:o,class:["v1-lengre-box-wrap",{"check-bg":t.selectList[1][o]},"v1a-common"],attrs:{"data-bet-num":t.lottery[s].betNum,"data-bet-code":t.lottery[s].betCode,"data-play-code":t.lottery[s].playCode,"data-odd":t.lottery[s].odd},on:{click:function(s){t.selectItem(1,o,4)}}},[e("div",{staticClass:"v1-shuangmian-content v1-longcard-content clear-both v1a-itemNum"},[e("p",{class:["fl v1-ssc-numb-ball theme-font-color v1-number-font-size",{"number-ball-bg":t.selectList[1][o]}]},[t._v(t._s(t.lottery[s].betNum))]),t._v(" "),e("p",{staticClass:"fr"},[t._v(t._s(t.lottery[s].odd))])]),t._v(" "),t.showHotCold?e("font",{staticClass:"v1-lengre-content"},[t._v(t._s(t.hotColdMap[s].val))]):t._e()],1)}),0)])])]):e("div",[e("bet-loader")],1)])},c=[],u=e("XyMi"),v=o,p=Object(u.a)(r,d,c,!1,v,null,null);s.default=p.exports}});