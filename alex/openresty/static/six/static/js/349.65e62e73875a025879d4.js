webpackJsonp([349],{QJ5p:function(t,e,s){"use strict";function r(t){s("wyqR")}Object.defineProperty(e,"__esModule",{value:!0});var n=s("WGHO"),a=s("/0UN"),i=s("hGvq"),o=function(){return s.e(120).then(s.bind(null,"tsXc"))},c=(a.a,i.a,function(){return s.e(120).then(s.bind(null,"tsXc"))}),d={components:{Checker:a.a,CheckerItem:i.a,BetLoader:c},props:["activeTab","betHelpDialogHandler","isSelected","code","showHotCold"],data:function(){return{lottery:[],titleList:["龙1vs虎2","龙1vs虎3","龙1vs虎4","龙1vs虎5","龙1vs虎6","龙1vs虎7","龙1vs虎8","龙2vs虎3","龙2vs虎4","龙2vs虎5","龙2vs虎6","龙2vs虎7","龙2vs虎8","龙3vs虎4","龙3vs虎5","龙3vs虎6","龙3vs虎7","龙3vs虎8","龙4vs虎5","龙4vs虎6","龙4vs虎7","龙4vs虎8","龙5vs虎6","龙5vs虎7","龙5vs虎8","龙6vs虎7","龙6vs虎8","龙7vs虎8"],numArr:[],temArr:[0,1,2,3,4,5,6,7],selectList:[]}},created:function(){this.initNumArr(),this.getBetOdd()},methods:{selectItem:function(t,e,s){this.isSelected(n.c.selectItem(t,e,s))},initSelectItem:function(t){for(var e=0,s=t.length;e<s;e++)this.selectList.push([!1,!1])},getBetOdd:function(){var t=this;this.$api.get(this.$luyou.LOTTO.GET_ODD,{code:this.code,betCodes:"sfc_dragon_tiger_12,sfc_dragon_tiger_13,sfc_dragon_tiger_14,sfc_dragon_tiger_15,sfc_dragon_tiger_16,sfc_dragon_tiger_17,sfc_dragon_tiger_18,sfc_dragon_tiger_23,sfc_dragon_tiger_24,sfc_dragon_tiger_25,sfc_dragon_tiger_26,sfc_dragon_tiger_27,sfc_dragon_tiger_28,sfc_dragon_tiger_34,sfc_dragon_tiger_35,sfc_dragon_tiger_36,sfc_dragon_tiger_37,sfc_dragon_tiger_38,sfc_dragon_tiger_45,sfc_dragon_tiger_46,sfc_dragon_tiger_47,sfc_dragon_tiger_48,sfc_dragon_tiger_56,sfc_dragon_tiger_57,sfc_dragon_tiger_58,sfc_dragon_tiger_67,sfc_dragon_tiger_68,sfc_dragon_tiger_78"},function(e){t.initSelectItem(e.data),t.lottery=e.data,t.$nextTick(function(){t.$emit("gengxin")})},function(e){e&&t.toast(t.$api.tip(e))})},setHotCold:function(){if(!this.$parent.$refs.bethead)return 1;this.initNumArr();var t=this.$parent.$refs.bethead.recentResult;if(t)for(var e=0;e<t.length;e++)if(t[e].openCode){var s=t[e].openCode.split(",");this.getHotColdNumArr(s)}},setYiLou:function(){if(!this.$parent.$refs.bethead)return 1;this.initNumArr();var t=this.$parent.$refs.bethead.recentResult;if(t)for(var e=0;e<t.length;e++)if(t[e].openCode){var s=t[e].openCode.split(",");this.getYiLouNumArr(s)}},initNumArr:function(){this.numArr=[];for(var t=0;t<28;t++){var e={"龙":{val:0,jx:!0},"虎":{val:0,jx:!0}};this.numArr.push(e)}},getHotColdNumArr:function(t){for(var e=0,s=0;s<t.length-1;s++)for(var r=s+1;r<t.length;r++)t[s]>t[r]?this.numArr[e]["龙"].val++:this.numArr[e]["虎"].val++,e++},getYiLouNumArr:function(t){for(var e=0,s=0;s<t.length-1;s++)for(var r=s+1;r<t.length;r++)t[s]>t[r]?(this.numArr[e]["虎"].val++,this.numArr[e]["龙"].val=0):(this.numArr[e]["龙"].val++,this.numArr[e]["虎"].val=0),e++}}},_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[0!=t.lottery.length?s("div",{staticClass:"cont-10",attrs:{id:"betCheck"}},[t._l(t.lottery,function(e,r){return[s("div",{staticClass:"v1-gxks-bottom"},[s("div",{staticClass:"v1-shuangmian-tit"},[t._v(t._s(t.titleList[r]))]),t._v(" "),s("div",{staticClass:"v1-dianshu-width",attrs:{id:"betCheck"}},[s("ul",{staticClass:"v1-dbmian-wrap v1-commom-ul clear-both"},[s("li",{class:["v1-lengre-box-wrap",{"check-bg":t.selectList[r][0]},"v1a-common"],attrs:{"data-bet-num":e["龙"].betNum,"data-bet-code":e["龙"].betCode,"data-play-code":e["龙"].playCode,"data-odd":e["龙"].odd},on:{click:function(e){t.selectItem(r,0,2)}}},[s("div",{staticClass:"v1-shuangmian-content"},[s("div",{staticClass:"v1-longcard-content clear-both"},[s("p",{staticClass:"fl v1-chinese-font-size"},[t._v(t._s(e["龙"].betNum))]),t._v(" "),s("p",{staticClass:"fr"},[t._v(t._s(e["龙"].odd))])])]),t._v(" "),t.showHotCold?s("font",{staticClass:"v1-lengre-content"},[t._v(t._s(t.numArr[r]["龙"].val))]):t._e()],1),t._v(" "),s("li",{class:["v1-lengre-box-wrap",{"check-bg":t.selectList[r][1]},"v1a-common"],attrs:{"data-bet-num":e["虎"].betNum,"data-bet-code":e["虎"].betCode,"data-play-code":e["虎"].playCode,"data-odd":e["虎"].odd},on:{click:function(e){t.selectItem(r,1,2)}}},[s("div",{staticClass:"v1-shuangmian-content"},[s("div",{staticClass:"v1-longcard-content clear-both"},[s("p",{staticClass:"fl v1-chinese-font-size"},[t._v(t._s(e["虎"].betNum))]),t._v(" "),s("p",{staticClass:"fr"},[t._v(t._s(e["虎"].odd))])])]),t._v(" "),t.showHotCold?s("font",{staticClass:"v1-lengre-content"},[t._v(t._s(t.numArr[r]["虎"].val))]):t._e()],1)])])])]})],2):s("div",[s("bet-loader")],1)])},l=[],v=s("XyMi"),g=r,f=Object(v.a)(d,_,l,!1,g,null,null);e.default=f.exports},jkah:function(t,e,s){e=t.exports=s("FZ+f")(!1),e.push([t.i,"",""])},wyqR:function(t,e,s){var r=s("jkah");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=s("rjj0").default;n("95a8d73e",r,!0,{})}});