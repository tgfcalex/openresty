webpackJsonp([360],{"D3U+":function(t,e,n){"use strict";function a(t){n("G0uH")}Object.defineProperty(e,"__esModule",{value:!0});var i=n("mvHQ"),s=n.n(i),l=n("MVRq"),r=n("V0DB"),o=n("0iPh"),c=(l.a,r.a,n("0iPh")),u={components:{ButtonTab:l.a,ButtonTabItem:r.a},props:["getBetOdd","selectObj","selectAll","selectBig","selectSmall","selectOdd","selectEven","clearSelect","showHotCold"],data:function(){return{lottery:null,titleList:["百位","十位"],betCode:"pl3_erxing_zhixuan_qefs",numArr:{}}},created:function(){this.initNumArr(),this.getBetOdd(this.betCode)},methods:{randomBetNum:function(){c(".playdiv").find("span.ballspan").removeClass("active");for(var t=0;t<2;t++){var e=parseInt(10*Math.random());c(".playdiv").eq(t).find("span.ballspan").eq(e).addClass("active")}this.getBetCount()},getBetCount:function(){var t=this,e=1;c(".playdiv").each(function(t){e*=c(".playdiv").eq(t).find("span.ballspan.active").length}),this.$emit("update:betCount",e),0===e?(this.$emit("update:showBetInfo",!1),c(this.$parent.$parent.$el).find(".btn-bet").addClass("disabled")):(this.$emit("update:showBetInfo",!0),c(this.$parent.$parent.$el).find(".btn-bet").removeClass("disabled")),setTimeout(function(){t.$parent.reset()},200)},getBetContent:function(){var t=[];return c(".playdiv").each(function(e){var n=[];c(".playdiv").eq(e).find("span.ballspan.active").each(function(){n.push(c(this).attr("num"))}),t.push(n.join(",").toString())}),t.join("|").toString()},setHotCold:function(){if(!this.$parent.$parent.$refs.bethead)return 1;this.initNumArr();var t=this.$parent.$parent.$refs.bethead.recentResult;if(t)for(var e=0;e<t.length;e++)if(t[e].openCode)for(var n=t[e].openCode.split(","),a=0;a<2;a++)this.numArr[n[a]].val++},setYiLou:function(){if(!this.$parent.$parent.$refs.bethead)return 1;this.initNumArr();var t=["0","1","2","3","4","5","6","7","8","9"],e=this.$parent.$parent.$refs.bethead.recentResult;if(e)for(var n=0;n<e.length;n++)if(e[n].openCode){for(var a=e[n].openCode.split(","),i=0;i<2;i++)this.numArr[a[i]].jx=!1;for(var s=0;s<t.length;s++)this.numArr[t[s]].jx&&(this.numArr[t[s]].val=this.numArr[t[s]].val+1)}},initNumArr:function(){this.numArr={0:{val:0,jx:!0},1:{val:0,jx:!0},2:{val:0,jx:!0},3:{val:0,jx:!0},4:{val:0,jx:!0},5:{val:0,jx:!0},6:{val:0,jx:!0},7:{val:0,jx:!0},8:{val:0,jx:!0},9:{val:0,jx:!0}}},getRandomBetNum:function(){for(var t=[],e=0;e<2;e++){var n=parseInt(10*Math.random());t.push(n)}var a=JSON.parse(localStorage.randomOrder);a.betNum=t.join("|"),localStorage.randomOrder=s()(a)}}},v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("div",{staticClass:"bet-help"},[t._v("玩法说明:竞猜开奖号码四位"),n("i",{staticClass:"icon-bet-help",on:{click:function(t){}}})]),t._v(" "),n("div",{staticClass:"bet-area"},[t._l(t.titleList,function(e,a){return[n("div",{staticClass:"bet-h"},[n("div",{staticClass:"bet-h-p"},[t._v(t._s(e))]),t._v(" "),n("div",{staticClass:"bet-h-f"},[n("button-tab",[n("button-tab-item",{attrs:{value:a},on:{"on-item-click":function(e){t.selectAll(a)}}},[t._v("全")]),t._v(" "),n("button-tab-item",{on:{"on-item-click":function(e){t.selectBig(a,4)}}},[t._v("大")]),t._v(" "),n("button-tab-item",{on:{"on-item-click":function(e){t.selectSmall(a,5)}}},[t._v("小")]),t._v(" "),n("button-tab-item",{on:{"on-item-click":function(e){t.selectOdd(a)}}},[t._v("单")]),t._v(" "),n("button-tab-item",{on:{"on-item-click":function(e){t.selectEven(a)}}},[t._v("双")]),t._v(" "),n("button-tab-item",{on:{"on-item-click":function(e){t.clearSelect(a)}}},[t._v("清")])],1)],1)]),t._v(" "),n("div",{class:"bet-c playdiv ssc"+a},t._l(10,function(e){return n("div",{staticClass:"num"},[n("span",{staticClass:"n-p ballspan",attrs:{num:e-1},on:{click:function(e){t.selectObj(e)}}},[t._v(t._s(e-1))]),t._v(" "),t.showHotCold?n("span",{staticClass:"n-t"},[t._v(t._s(t.numArr[e-1].val))]):t._e()])}),0)]})],2)])},d=[],p=n("XyMi"),f=a,h=Object(p.a)(u,v,d,!1,f,null,null);e.default=h.exports},G0uH:function(t,e,n){var a=n("RGtn");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("rjj0").default;i("c2a9bba0",a,!0,{})},RGtn:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"",""])}});