webpackJsonp([305],{"0mNs":function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"\n@media screen and (max-width: 320px) {\n#app .lottery-wrap .bet-area .bet-c .num .n-t {\n    font-size: 12px;\n}\n}\n.v1a-visiHide {\n  visibility: hidden;\n}\n",""])},Nql5:function(t,e,n){var a=n("0mNs");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("rjj0").default;i("3cbd3588",a,!0,{})},luRN:function(t,e,n){"use strict";function a(t){n("Nql5")}Object.defineProperty(e,"__esModule",{value:!0});var i=n("mvHQ"),s=n.n(i),r=n("MVRq"),l=n("V0DB"),o=n("0iPh"),u=(r.a,l.a,n("0iPh")),c={components:{ButtonTab:r.a,ButtonTabItem:l.a},props:["getBetOdd","selectObj","selectAll","selectBig","selectSmall","selectOdd","selectEven","clearSelect","showHotCold","betHelpDialogHandler"],data:function(){return{lottery:null,betCode:"ssc_sanxing_zuxuan_qsz6fs",numArr:{}}},created:function(){this.initNumArr(),this.getBetOdd(this.betCode)},mounted:function(){var t=this;this.$nextTick(function(){setTimeout(function(){t.$parent.BScrollObj.refresh()},300)})},methods:{randomBetNum:function(){for(var t=[];t.length<2;){var e=parseInt(10*Math.random()),n=parseInt(10*Math.random()),a=parseInt(10*Math.random());e!==n&&e!==a&&n!==a&&(t.push(e),t.push(n),t.push(a))}u(".playdiv span.ballspan").removeClass("active").eq(e).addClass("active"),u(".playdiv span.ballspan").eq(n).addClass("active"),u(".playdiv span.ballspan").eq(a).addClass("active"),this.getBetCount()},getBetCount:function(){var t=[],e=[];u.each(u(".playdiv span.ballspan.active"),function(e,n){t.push(u.trim(u(this).html()))}),e=this.getZuLiuNewArrs(t);var n=e.length;this.$emit("update:betCount",n),0===n?(this.$emit("update:showBetInfo",!1),u(this.$parent.$parent.$el).find(".btn-bet").addClass("disabled")):(this.$emit("update:showBetInfo",!0),u(this.$parent.$parent.$el).find(".btn-bet").removeClass("disabled"))},getBetContent:function(){var t=[];return u(".playdiv").each(function(e){var n=[];u(".playdiv").eq(e).find("span.ballspan.active").each(function(){n.push(u(this).attr("num"))}),t.push(n.join(",").toString())}),t.join("|").toString()},getZuLiuNewArrs:function(t){var e=[],n=[];n=t;for(var a=0;a<n.length;a++)for(var i=0;i<n.length;i++)for(var s=0;s<n.length;s++)if(n[a]!==n[i]&&n[i]!==n[s]&&n[a]!==n[s]){var r=[];r.push(n[a]),r.push(n[i]),r.push(n[s]),r.sort(),e.push(r.join(""))}return e=this.uniqueArr(e)},uniqueArr:function(t){var e=[];t.sort();for(var n=0;n<t.length;n++)t[n]!==t[n+1]&&(e[e.length]=t[n]);return e},setHotCold:function(){if(!this.$parent.$refs.bethead)return 1;this.initNumArr();var t=this.$parent.$refs.bethead.recentResult;if(t)for(var e=0;e<t.length;e++)if(t[e].openCode)for(var n=t[e].openCode.split(","),a=0;a<3;a++)this.numArr[n[a]].val++},setYiLou:function(){if(!this.$parent.$refs.bethead)return 1;this.initNumArr();var t=["0","1","2","3","4","5","6","7","8","9"],e=this.$parent.$refs.bethead.recentResult;if(e)for(var n=0;n<e.length;n++)if(e[n].openCode){for(var a=e[n].openCode.split(","),i=0;i<3;i++)this.numArr[a[i]].jx=!1;for(var s=0;s<t.length;s++)this.numArr[t[s]].jx&&(this.numArr[t[s]].val=this.numArr[t[s]].val+1)}},initNumArr:function(){this.numArr={0:{val:0,jx:!0},1:{val:0,jx:!0},2:{val:0,jx:!0},3:{val:0,jx:!0},4:{val:0,jx:!0},5:{val:0,jx:!0},6:{val:0,jx:!0},7:{val:0,jx:!0},8:{val:0,jx:!0},9:{val:0,jx:!0}}},getRandomBetNum:function(){var t=[0,1,2,3,4,5,6,7,8,9],e=this.$global.getArrayItems(t,3),n=JSON.parse(localStorage.randomOrder);n.betNum=e.join(","),localStorage.randomOrder=s()(n)}}},v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("div",{staticClass:"bet-help"},[t._v("玩法说明:竞猜开奖号码前三位"),n("i",{staticClass:"icon-bet-help",on:{click:t.betHelpDialogHandler}})]),t._v(" "),n("div",{staticClass:"bet-area"},[n("div",{staticClass:"bet-h"},[n("div",{staticClass:"bet-h-p"},[t._v("组六")]),t._v(" "),n("div",{staticClass:"bet-h-f"},[n("button-tab",[n("button-tab-item",{attrs:{value:0},on:{"on-item-click":function(e){t.selectAll(0)}}},[t._v("全")]),t._v(" "),n("button-tab-item",{on:{"on-item-click":function(e){t.selectBig(0,4)}}},[t._v("大")]),t._v(" "),n("button-tab-item",{on:{"on-item-click":function(e){t.selectSmall(0,5)}}},[t._v("小")]),t._v(" "),n("button-tab-item",{on:{"on-item-click":function(e){t.selectOdd(0)}}},[t._v("单")]),t._v(" "),n("button-tab-item",{on:{"on-item-click":function(e){t.selectEven(0)}}},[t._v("双")]),t._v(" "),n("button-tab-item",{on:{"on-item-click":function(e){t.clearSelect(0)}}},[t._v("清")])],1)],1)]),t._v(" "),n("div",{staticClass:"bet-c playdiv"},t._l(10,function(e){return n("div",{staticClass:"num"},[n("span",{staticClass:"n-p ballspan",attrs:{num:e-1},on:{click:function(e){t.selectObj(e)}}},[t._v(t._s(e-1))]),t._v(" "),t.showHotCold?n("span",{staticClass:"n-t"},[t._v(t._s(t.numArr[e-1].val))]):t._e(),t._v(" "),t.showHotCold?t._e():n("span",{staticClass:"n-t v1a-visiHide"},[t._v("0")])])}),0)])])},d=[],h=n("XyMi"),p=a,f=Object(h.a)(c,v,d,!1,p,null,null);e.default=f.exports}});