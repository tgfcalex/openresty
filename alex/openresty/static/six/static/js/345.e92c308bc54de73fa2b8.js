webpackJsonp([345],{GJZ9:function(t,e,n){var a=n("nCTl");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var l=n("rjj0").default;l("012d9b3e",a,!0,{})},muMm:function(t,e,n){"use strict";function a(t){n("GJZ9")}Object.defineProperty(e,"__esModule",{value:!0});var l=n("WGHO"),s=n("/0UN"),i=n("hGvq"),r=function(){return n.e(120).then(n.bind(null,"tsXc"))},o=(s.a,i.a,function(){return n.e(120).then(n.bind(null,"tsXc"))}),c={components:{Checker:s.a,CheckerItem:i.a,BetLoader:o},props:["activeTab","betHelpDialogHandler","isSelected","code","showHotCold"],data:function(){return{lottery:[],keyList:["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20"],numArr:{},selectList:[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]}},created:function(){this.initNumArr(),this.getBetOdd("sfc_fourth")},methods:{selectItem:function(t,e,n){this.isSelected(l.c.selectItem(t,e,n))},getBetOdd:function(t){var e=this;this.$api.get(this.$luyou.LOTTO.GET_ODD,{betCodes:t,code:this.code},function(t){e.lottery=t.data[0],e.$nextTick(function(){e.$emit("gengxin")})},function(t){t&&e.toast(e.$api.tip(t))})},setHotCold:function(){if(!this.$parent.$refs.bethead)return 1;this.initNumArr();var t=this.$parent.$refs.bethead.recentResult;if(t)for(var e=0;e<t.length;e++)if(t[e].openCode){var n=t[e].openCode.split(",");this.numArr[n[3]].val=this.numArr[n[3]].val+1}},setYiLou:function(){if(!this.$parent.$refs.bethead)return 1;this.initNumArr();var t=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20"],e=this.$parent.$refs.bethead.recentResult;if(e)for(var n=0;n<e.length;n++)if(e[n].openCode){var a=e[n].openCode.split(",");this.numArr[a[3]].jx=!1;for(var l=0;l<t.length;l++)this.numArr[t[l]].jx&&(this.numArr[t[l]].val=this.numArr[t[l]].val+1)}},initNumArr:function(){this.numArr={},this.numArr={"01":{val:0,jx:!0},"02":{val:0,jx:!0},"03":{val:0,jx:!0},"04":{val:0,jx:!0},"05":{val:0,jx:!0},"06":{val:0,jx:!0},"07":{val:0,jx:!0},"08":{val:0,jx:!0},"09":{val:0,jx:!0},10:{val:0,jx:!0},11:{val:0,jx:!0},12:{val:0,jx:!0},13:{val:0,jx:!0},14:{val:0,jx:!0},15:{val:0,jx:!0},16:{val:0,jx:!0},17:{val:0,jx:!0},18:{val:0,jx:!0},19:{val:0,jx:!0},20:{val:0,jx:!0}}}}},u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[0!=t.lottery.length?n("div",{staticClass:"cont-1",attrs:{id:"betCheck"}},[n("div",{staticClass:"v1-gxks-bottom"},[n("div",{staticClass:"v1-shuangmian-tit"},[t._v("\n        第四球\n      ")]),t._v(" "),n("div",{staticClass:"v1-dianshu-width"},[n("ul",{staticClass:"v1-dbmian-wrap v1-commom-ul clear-both"},t._l(t.keyList,function(e,a){return n("li",{key:a,class:["v1-lengre-box-wrap",{"check-bg":t.selectList[a]},"v1a-common"],attrs:{"data-bet-num":t.lottery[e].betNum,"data-bet-code":t.lottery[e].betCode,"data-play-code":t.lottery[e].playCode,"data-odd":t.lottery[e].odd},on:{click:function(e){t.selectItem(0,a,20)}}},[n("div",{staticClass:"v1-shuangmian-content"},[n("div",{staticClass:"v1-longcard-content clear-both"},[n("p",{class:["fl theme-font-color v1-ssc-numb-ball v1-num-ball v1-number-font-size",{"number-ball-bg":t.selectList[a]}]},[t._v(t._s(t.lottery[e].betNum))]),t._v(" "),n("p",{staticClass:"fr"},[t._v(t._s(t.lottery[e].odd))])])]),t._v(" "),t.showHotCold?n("font",{staticClass:"v1-lengre-content"},[t._v(t._s(t.numArr[t.lottery[e].betNum].val))]):t._e()],1)}),0)])])]):n("div",[n("bet-loader")],1)])},v=[],d=n("XyMi"),h=a,f=Object(d.a)(c,u,v,!1,h,null,null);e.default=f.exports},nCTl:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"",""])}});