webpackJsonp([320],{"/0Wm":function(t,e,a){"use strict";function n(t){a("EJP2")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("mvHQ"),s=a.n(i),r=a("MVRq"),l=a("V0DB"),o=a("0iPh"),v=(r.a,l.a,a("0iPh")),u={components:{ButtonTab:r.a,ButtonTabItem:l.a},props:["getBetOdd","selectObj","selectAll","selectBig","selectSmall","selectOdd","selectEven","clearSelect","showHotCold","betHelpDialogHandler"],data:function(){return{lottery:null,betCode:"ssc_sanxing_zhixuan_hshz",numArr:{}}},created:function(){this.initNumArr(),this.getBetOdd(this.betCode)},mounted:function(){var t=this;this.$nextTick(function(){setTimeout(function(){t.$parent.BScrollObj.refresh()},300)})},methods:{randomBetNum:function(){v(".playdiv").find("span.ballspan").removeClass("active");var t=parseInt(28*Math.random());v(".playdiv").find("span.ballspan").eq(t).addClass("active"),this.getBetCount()},getBetCount:function(){var t=[],e=[];v.each(v(".playdiv span.ballspan.active"),function(e,a){t.push(v.trim(v(this).html()))}),e=this.getHezNewArrs(t);var a=e.length;this.$emit("update:betCount",a),0===a?(this.$emit("update:showBetInfo",!1),v(this.$parent.$parent.$el).find(".btn-bet").addClass("disabled")):(this.$emit("update:showBetInfo",!0),v(this.$parent.$parent.$el).find(".btn-bet").removeClass("disabled"))},getBetContent:function(){var t=[];return v(".playdiv").each(function(e){var a=[];v(".playdiv").eq(e).find("span.ballspan.active").each(function(){a.push(v(this).attr("num"))}),t.push(a.join("|").toString())}),t.join("|").toString()},getHezNewArrs:function(t){var e=[],a=[],n=0,i=0,s=[];e=t;for(var r=0;r<e.length;r++){var l=[];for(n=parseInt(e[r]),i=parseInt(e[r]);n>=0;)l.push(n),n--;for(var o=0;o<l.length;o++)for(var v=0;v<l.length;v++)for(var u=0;u<l.length;u++)l[o]+l[v]+l[u]===i&&l[u]<=9&&l[v]<=9&&l[o]<=9&&s.push(l[o]+""+l[v]+l[u]);a=this.uniqueArr(s)}return a},uniqueArr:function(t){var e=[];t.sort();for(var a=0;a<t.length;a++)t[a]!==t[a+1]&&(e[e.length]=t[a]);return e},setHotCold:function(){if(!this.$parent.$refs.bethead)return 1;this.initNumArr();var t=this.$parent.$refs.bethead.recentResult;if(t)for(var e=0;e<t.length;e++)if(t[e].openCode){for(var a=t[e].openCode.split(","),n=0,i=2;i<a.length;i++)n+=Number(a[i]);this.numArr[n].val++}},setYiLou:function(){if(!this.$parent.$refs.bethead)return 1;this.initNumArr();var t=["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27"],e=this.$parent.$refs.bethead.recentResult;if(e)for(var a=0;a<e.length;a++)if(e[a].openCode){for(var n=e[a].openCode.split(","),i=0,s=2;s<n.length;s++)i+=Number(n[s]);this.numArr[i].jx=!1;for(var r=0;r<t.length;r++)this.numArr[t[r]].jx&&(this.numArr[t[r]].val=this.numArr[t[r]].val+1)}},initNumArr:function(){this.numArr={0:{val:0,jx:!0},1:{val:0,jx:!0},2:{val:0,jx:!0},3:{val:0,jx:!0},4:{val:0,jx:!0},5:{val:0,jx:!0},6:{val:0,jx:!0},7:{val:0,jx:!0},8:{val:0,jx:!0},9:{val:0,jx:!0},10:{val:0,jx:!0},11:{val:0,jx:!0},12:{val:0,jx:!0},13:{val:0,jx:!0},14:{val:0,jx:!0},15:{val:0,jx:!0},16:{val:0,jx:!0},17:{val:0,jx:!0},18:{val:0,jx:!0},19:{val:0,jx:!0},20:{val:0,jx:!0},21:{val:0,jx:!0},22:{val:0,jx:!0},23:{val:0,jx:!0},24:{val:0,jx:!0},25:{val:0,jx:!0},26:{val:0,jx:!0},27:{val:0,jx:!0}}},getRandomBetNum:function(){var t=parseInt(10*Math.random()),e=JSON.parse(localStorage.randomOrder),a=[];a.push(t);var n=this.getHezNewArrs(a),i=n.length;e.betNum=t,e.betCount=i,e.betAmount=this.$global.div(2*i*Number(e.multiple),Number(e.bonusModel)),localStorage.randomOrder=s()(e)}}},c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"bet-help"},[t._v("玩法说明:竞猜开奖号码后三位"),a("i",{staticClass:"icon-bet-help",on:{click:t.betHelpDialogHandler}})]),t._v(" "),a("div",{staticClass:"bet-area"},[a("div",{staticClass:"bet-h"},[a("div",{staticClass:"bet-h-p"},[t._v("和值")]),t._v(" "),a("div",{staticClass:"bet-h-f"},[a("button-tab",[a("button-tab-item",{attrs:{value:0},on:{"on-item-click":function(e){t.selectAll(0)}}},[t._v("全")]),t._v(" "),a("button-tab-item",{on:{"on-item-click":function(e){t.clearSelect(0)}}},[t._v("清")])],1)],1)]),t._v(" "),a("div",{staticClass:"bet-c playdiv"},t._l(28,function(e){return a("div",{staticClass:"num"},[a("span",{staticClass:"n-p ballspan",attrs:{num:e-1},on:{click:function(e){t.selectObj(e)}}},[t._v(t._s(e-1))]),t._v(" "),t.showHotCold?a("span",{staticClass:"n-t"},[t._v(t._s(t.numArr[e-1].val))]):t._e(),t._v(" "),t.showHotCold?t._e():a("span",{staticClass:"n-t v1a-visiHide"},[t._v("0")])])}),0)])])},h=[],d=a("XyMi"),p=n,f=Object(d.a)(u,c,h,!1,p,null,null);e.default=f.exports},EJP2:function(t,e,a){var n=a("cwRL");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("rjj0").default;i("4db038bc",n,!0,{})},cwRL:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"\n@media screen and (max-width: 320px) {\n#app .lottery-wrap .bet-area .bet-c .num .n-t {\n    font-size: 12px;\n}\n}\n.v1a-visiHide {\n  visibility: hidden;\n}\n",""])}});