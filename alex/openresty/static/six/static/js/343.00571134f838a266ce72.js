webpackJsonp([343],{Ehtr:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"",""])},daHN:function(t,e,a){var n=a("Ehtr");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=a("rjj0").default;s("0ed47405",n,!0,{})},zgiA:function(t,e,a){"use strict";function n(t){a("daHN")}Object.defineProperty(e,"__esModule",{value:!0});var s=a("WGHO"),i=a("/0UN"),l=a("hGvq"),r=function(){return a.e(120).then(a.bind(null,"tsXc"))},o=(i.a,l.a,function(){return a.e(120).then(a.bind(null,"tsXc"))}),c={components:{Checker:i.a,CheckerItem:l.a,BetLoader:o},props:["activeTab","betHelpDialogHandler","isSelected","code","showHotCold"],data:function(){return{lottery:[],keyList:["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20"],numArr:{},selectList:[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]}},created:function(){this.initNumArr(),this.getBetOdd("sfc_sixth")},methods:{selectItem:function(t,e,a){this.isSelected(s.c.selectItem(t,e,a))},getBetOdd:function(t){var e=this;this.$api.get(this.$luyou.LOTTO.GET_ODD,{betCodes:t,code:this.code},function(t){e.lottery=t.data[0],e.$nextTick(function(){e.$emit("gengxin")})},function(t){t&&e.toast(e.$api.tip(t))})},setHotCold:function(){if(!this.$parent.$refs.bethead)return 1;this.initNumArr();var t=this.$parent.$refs.bethead.recentResult;if(t)for(var e=0;e<t.length;e++)if(t[e].openCode){var a=t[e].openCode.split(",");this.numArr[a[5]].val=this.numArr[a[5]].val+1}},setYiLou:function(){if(!this.$parent.$refs.bethead)return 1;this.initNumArr();var t=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20"],e=this.$parent.$refs.bethead.recentResult;if(e)for(var a=0;a<e.length;a++)if(e[a].openCode){var n=e[a].openCode.split(",");this.numArr[n[5]].jx=!1;for(var s=0;s<t.length;s++)this.numArr[t[s]].jx&&(this.numArr[t[s]].val=this.numArr[t[s]].val+1)}},initNumArr:function(){this.numArr={},this.numArr={"01":{val:0,jx:!0},"02":{val:0,jx:!0},"03":{val:0,jx:!0},"04":{val:0,jx:!0},"05":{val:0,jx:!0},"06":{val:0,jx:!0},"07":{val:0,jx:!0},"08":{val:0,jx:!0},"09":{val:0,jx:!0},10:{val:0,jx:!0},11:{val:0,jx:!0},12:{val:0,jx:!0},13:{val:0,jx:!0},14:{val:0,jx:!0},15:{val:0,jx:!0},16:{val:0,jx:!0},17:{val:0,jx:!0},18:{val:0,jx:!0},19:{val:0,jx:!0},20:{val:0,jx:!0}}}}},u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[0!=t.lottery.length?a("div",{staticClass:"cont-1",attrs:{id:"betCheck"}},[a("div",{staticClass:"v1-gxks-bottom"},[a("div",{staticClass:"v1-shuangmian-tit"},[t._v("\n        第六球\n      ")]),t._v(" "),a("div",{staticClass:"v1-dianshu-width"},[a("ul",{staticClass:"v1-dbmian-wrap v1-commom-ul clear-both"},t._l(t.keyList,function(e,n){return a("li",{key:n,class:["v1-lengre-box-wrap",{"check-bg":t.selectList[n]},"v1a-common"],attrs:{"data-bet-num":t.lottery[e].betNum,"data-bet-code":t.lottery[e].betCode,"data-play-code":t.lottery[e].playCode,"data-odd":t.lottery[e].odd},on:{click:function(e){t.selectItem(0,n,20)}}},[a("div",{staticClass:"v1-shuangmian-content"},[a("div",{staticClass:"v1-longcard-content clear-both"},[a("p",{class:["fl theme-font-color v1-ssc-numb-ball v1-num-ball v1-number-font-size",{"number-ball-bg":t.selectList[n]}]},[t._v(t._s(t.lottery[e].betNum))]),t._v(" "),a("p",{staticClass:"fr"},[t._v(t._s(t.lottery[e].odd))])])]),t._v(" "),t.showHotCold?a("font",{staticClass:"v1-lengre-content"},[t._v(t._s(t.numArr[t.lottery[e].betNum].val))]):t._e()],1)}),0)])])]):a("div",[a("bet-loader")],1)])},v=[],d=a("XyMi"),h=n,f=Object(d.a)(c,u,v,!1,h,null,null);e.default=f.exports}});