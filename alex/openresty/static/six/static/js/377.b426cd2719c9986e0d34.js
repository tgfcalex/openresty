webpackJsonp([377],{"28gA":function(t,e,o){var n=o("dtvJ");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("rjj0").default;i("3531686a",n,!0,{})},dtvJ:function(t,e,o){e=t.exports=o("FZ+f")(!1),e.push([t.i,"",""])},yNmB:function(t,e,o){"use strict";function n(t){o("28gA")}Object.defineProperty(e,"__esModule",{value:!0});var i=o("mvHQ"),s=o.n(i),a=o("/0UN"),r=o("hGvq"),l=o("0iPh"),d=o.n(l),c=o("WGHO"),h=function(){return o.e(120).then(o.bind(null,"tsXc"))},u=(a.a,r.a,function(){return o.e(120).then(o.bind(null,"tsXc"))}),v={components:{Checker:a.a,CheckerItem:r.a,BetLoader:u},props:["activeTab","betHelpDialogHandler","isSelected","code","showHotCold"],data:function(){return{lottery:[],playCode:"keno_selection_five",betTitle:"选2",name:"选二",odd:"",hotColdMap:{},selectList:[]}},created:function(){this.initSelectList(),this.initHotColdMap(),this.getBetOdd("keno_selection")},methods:{selectItem:function(t,e,o){this.isSelected(c.c.selectItem(t,e,o))},initSelectList:function(){for(var t=0;t<80;t++)this.selectList.push(!1)},getBetOdd:function(t){var e=this;this.$api.get(this.$luyou.LOTTO.GET_ODD,{code:this.code,betCodes:t},function(t){e.lottery=t.data[0],e.$nextTick(function(){e.$emit("gengxin")})},function(t){t&&e.toast(e.$api.tip(t))})},setBetForm:function(){d()("#dd").val()},randomBetNum:function(){d()("#betCheck .item").removeClass("item-selected");for(var t=0;t<2;t++){var e=parseInt(80*Math.random());this.isSelected(!0,e)}},getBetForm:function(){var t=this,e={code:this.code,expect:null,quantity:0,totalMoney:0,playModel:"tradition",betOrders:[]},o=d()("#betCheck .check-bg");if(0===o.length)return this.toast("请选择"),1;var n=parseInt(d()("#betMoney").val());if(2!==o.length)return this.toast("只能选择2个号码!"),1;if(n<1)return this.toast("请输入下注金额!"),1;for(var i=0,a=o.length;i<a;i++)this.betNums=0===i?o[i].getAttribute("num"):this.betNums+","+o[i].getAttribute("num");o.sort(),e.betOrders.push({betNum:this.betNums,betCode:this.$refs.dingwei.getAttribute("data-bet-code"),playCode:this.$refs.dingwei.getAttribute("data-play-code"),betAmount:n,odd:this.$refs.dingwei.getAttribute("data-odd")}),e.totalMoney=t.$global.add(e.totalMoney,n),e.quantity=t.$global.add(e.quantity,1),localStorage.betForm=s()(e),this.$router.push({path:"/lotto/confirm-bet",query:{name:this.$route.query.name}})},getBetCount:function(){var t=d()("#betCheck .check-bg").length;t>2&&this.toast("只能选择两个号码");var e=2===t?1:t<2?0:1;return parseInt(e)},getCanWinMoney:function(){var t=this.$parent.$parent.betCount,e=this.$parent.$parent.betMoney?Number(this.$parent.$parent.betMoney):0,o=0;null!=this.lottery&&(o=this.lottery["选二"].odd);var n=this.$global.mul(o,e);return t>0?n:0},initHotColdMap:function(){this.hotColdMap={};for(var t=1;t<=80;t++){var e={val:0,jx:!0};this.hotColdMap[t]=e}},setHotCold:function(){if(this.initHotColdMap(),!this.$parent.$refs.bethead)return 1;if(this.result=this.$parent.$refs.bethead.recentResult,this.result)for(var t=0;t<this.result.length;t++){var e=this.result[t];if(e.openCode)for(var o=e.openCode.split(","),n=0;n<o.length;n++)for(var i=1;i<=80;i++)i===parseInt(o[n])&&(this.hotColdMap[i].val+=1)}},setYiLou:function(){if(this.initHotColdMap(),!this.$parent.$refs.bethead)return 1;if(this.result=this.$parent.$refs.bethead.recentResult,this.result)for(var t=0;t<this.result.length;t++){var e=this.result[t];if(e.openCode)for(var o=e.openCode.split(","),n=1;n<=80;n++){for(var i=0;i<o.length;i++)n===parseInt(o[i])&&(this.hotColdMap[n].jx=!1);this.hotColdMap[n].jx&&(this.hotColdMap[n].val+=1)}}}}},f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[0!=t.lottery.length?o("div",{staticClass:"cont-1"},[o("div",{staticClass:"v1-gxks-bottom"},[o("div",{staticClass:"v1-shuangmian-tit"},[t._v("\n        选2（中2@"),o("span",{ref:"dingwei",staticClass:"theme-color",attrs:{"data-bet-code":t.lottery["选二"].betCode,"data-play-code":t.lottery["选二"].playCode,"data-odd":t.lottery["选二"].odd}},[t._v(t._s(t.lottery["选二"].odd))]),t._v("）\n      ")]),t._v(" "),o("div",{staticClass:"v1-dianshu-width"},[o("ul",{staticClass:"v1-dbmian-wrap v1-commom-ul clear-both",attrs:{id:"betCheck"}},t._l(80,function(e){return o("li",{key:e-1,class:["v1-lengre-box-wrap",{"check-bg":t.selectList[e-1]},"v1a-common"],attrs:{num:e},on:{click:function(o){t.selectItem(0,e-1,80)}}},[o("div",{staticClass:"v1-shuangmian-content"},[o("div",{staticClass:"v1-longcard-content v1-content-font-color clear-both"},[o("p",{class:["fl v1-num v1-ssc-numb-ball v1-number-font-size theme-font-color v1-margin-absolute-auto",{"number-ball-bg ":t.selectList[e-1]}]},[t._v(t._s(e))])])]),t._v(" "),t.showHotCold?o("font",{staticClass:"v1-lengre-content"},[t._v(t._s(t.hotColdMap[e].val))]):t._e()],1)}),0)])])]):o("div",[o("bet-loader")],1)])},p=[],b=o("XyMi"),m=n,g=Object(b.a)(v,f,p,!1,m,null,null);e.default=g.exports}});