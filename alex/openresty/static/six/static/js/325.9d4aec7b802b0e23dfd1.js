webpackJsonp([325],{HkTh:function(t,e,n){"use strict";function a(t){n("VgfG")}Object.defineProperty(e,"__esModule",{value:!0});var i=n("mvHQ"),r=n.n(i),s=n("MVRq"),l=n("V0DB"),o=n("0iPh"),u=(s.a,l.a,n("0iPh")),c={components:{ButtonTab:s.a,ButtonTabItem:l.a},props:["getBetOdd","selectAll","selectObj","selectBig","selectSmall","selectOdd","selectEven","clearSelect","showHotCold","betHelpDialogHandler"],data:function(){return{lottery:null,content:["豹子","顺子","对子"],betCode:"ssc_sanxing_zuxuan_hsts",keyList:["豹子","顺子","对子"],numArr:{}}},mounted:function(){var t=this;this.$nextTick(function(){setTimeout(function(){t.$parent.BScrollObj.refresh()},300)})},created:function(){this.initNumArr(),this.getBetOdd(this.betCode)},methods:{randomBetNum:function(){u(".playdiv").find("span.ballspan").removeClass("active");var t=parseInt(4*Math.random());u(".playdiv").find("span.ballspan").eq(t).addClass("active"),this.getBetCount()},getBetCount:function(){var t=u(".playdiv").find("span.ballspan.active").length;this.$emit("update:betCount",t),0===t?(this.$emit("update:showBetInfo",!1),u(this.$parent.$parent.$el).find(".btn-bet").addClass("disabled")):(this.$emit("update:showBetInfo",!0),u(this.$parent.$parent.$el).find(".btn-bet").removeClass("disabled"))},getBetContent:function(){var t=[];return u(".playdiv").each(function(e){var n=[];u(".playdiv").eq(e).find("span.ballspan.active").each(function(){n.push(u(this).attr("num"))}),t.push(n.join("|").toString())}),t.join("|").toString()},setHotCold:function(){if(!this.$parent.$refs.bethead)return 1;this.initNumArr();var t=this.$parent.$refs.bethead.recentResult;if(t)for(var e=0;e<t.length;e++)if(t[e].openCode){var n=t[e].openCode.split(",");if(Number(n[2])===Number(n[3])&&Number(n[2])===Number(n[4]))this.numArr["豹子"].val++;else if(Number(n[2])===Number(n[3])||Number(n[2])===Number(n[4])||Number(n[3])===Number(n[4]))this.numArr["对子"].val++;else{var a=[Number(n[2]),Number(n[3]),Number(n[4])];a.sort();var i=a.join("");a[2]-a[1]==1&&a[1]-a[0]==1?this.numArr["顺子"].val++:"019"===i&&"089"===i&&this.numArr["顺子"].val++}}},setYiLou:function(){if(!this.$parent.$refs.bethead)return 1;this.initNumArr();var t=["豹子","顺子","对子"],e=this.$parent.$refs.bethead.recentResult;if(e)for(var n=0;n<e.length;n++)if(e[n].openCode){var a=e[n].openCode.split(",");if(Number(a[2])===Number(a[3])&&Number(a[2])===Number(a[4]))this.numArr["豹子"].jx=!1;else if(Number(a[2])===Number(a[3])||Number(a[2])===Number(a[4])||Number(a[3])===Number(a[4]))this.numArr["对子"].jx=!1;else{var i=[Number(a[2]),Number(a[3]),Number(a[4])];i.sort();var r=i.join("");i[2]-i[1]==1&&i[1]-i[0]==1?this.numArr["顺子"].jx=!1:"019"===r&&"089"===r&&(this.numArr["顺子"].jx=!1)}for(var s=0;s<t.length;s++)this.numArr[t[s]].jx&&(this.numArr[t[s]].val=this.numArr[t[s]].val+1)}},initNumArr:function(){this.numArr={"豹子":{val:0,jx:!0},"顺子":{val:0,jx:!0},"对子":{val:0,jx:!0}}},getRandomBetNum:function(){var t=parseInt(3*Math.random()),e=JSON.parse(localStorage.randomOrder);e.betNum=this.keyList[t],localStorage.randomOrder=r()(e)}}},d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("div",{staticClass:"bet-help"},[t._v("玩法说明:竞猜开奖号码后三位"),n("i",{staticClass:"icon-bet-help",on:{click:t.betHelpDialogHandler}})]),t._v(" "),n("div",{staticClass:"bet-area"},[n("div",{staticClass:"bet-h"},[n("div",{staticClass:"bet-h-p"},[t._v("特殊号")]),t._v(" "),n("div",{staticClass:"bet-h-f"},[n("button-tab",[n("button-tab-item",{attrs:{value:0},on:{"on-item-click":function(e){t.selectAll(0)}}},[t._v("全")]),t._v(" "),n("button-tab-item",{on:{"on-item-click":function(e){t.clearSelect(0)}}},[t._v("清")])],1)],1)]),t._v(" "),n("div",{staticClass:"bet-c playdiv"},t._l(t.content,function(e,a){return n("div",{staticClass:"num"},[n("span",{staticClass:"n-p txt ballspan",attrs:{num:e},on:{click:function(e){t.selectObj(e)}}},[t._v(t._s(e))]),t._v(" "),t.showHotCold?n("span",{staticClass:"n-t"},[t._v(t._s(t.numArr[e].val))]):t._e(),t._v(" "),t.showHotCold?t._e():n("span",{staticClass:"n-t v1a-visiHide"},[t._v("0")])])}),0)])])},m=[],v=n("XyMi"),b=a,h=Object(v.a)(c,d,m,!1,b,null,null);e.default=h.exports},VgfG:function(t,e,n){var a=n("dXKq");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("rjj0").default;i("f13c55d4",a,!0,{})},dXKq:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"\n@media screen and (max-width: 320px) {\n#app .lottery-wrap .bet-area .bet-c .num .n-t {\n    font-size: 12px;\n}\n}\n.v1a-visiHide {\n  visibility: hidden;\n}\n",""])}});