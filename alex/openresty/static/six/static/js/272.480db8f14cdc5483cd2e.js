webpackJsonp([272],{"4lPi":function(t,a,e){a=t.exports=e("FZ+f")(!1),a.push([t.i,"\n@media screen and (max-width: 320px) {\n#app .lottery-wrap .bet-area .bet-c .num .n-t {\n    font-size: 12px;\n}\n}\n.v1a-visiHide {\n  visibility: hidden;\n}\n",""])},MQdZ:function(t,a,e){var n=e("4lPi");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("rjj0").default;i("35063170",n,!0,{})},sbzz:function(t,a,e){"use strict";function n(t){e("MQdZ")}Object.defineProperty(a,"__esModule",{value:!0});var i=e("mvHQ"),s=e.n(i),r=(e("0iPh"),e("0iPh")),l={props:["getBetOdd","selectAll","selectBig","selectSmall","selectOdd","selectEven","clearSelect","showHotCold","betHelpDialogHandler"],data:function(){return{lottery:null,titleList:["胆码","拖码"],numList:["01","02","03","04","05","06","07","08","09","10","11"],betCode:"syx5_sanxing_zuxuan_hsdt",numArr:[],ranArr:[],ranArrs:[]}},created:function(){this.initNumArr(),this.getBetOdd(this.betCode);for(var t=0;t<11;t++)this.ranArr.push(t);for(var a=1;a<12;a++)this.ranArrs.push(a)},methods:{randomBetNum:function(){r(".playdiv").find("span.ballspan").removeClass("active");var t=this.$global.getArrayItems(this.ranArr,3);r(".playdiv").eq(0).find("span.ballspan").eq(t[0]).addClass("active"),r(".playdiv").eq(1).find("span.ballspan").eq(t[1]).addClass("active"),r(".playdiv").eq(1).find("span.ballspan").eq(t[2]).addClass("active"),this.getBetCount()},selectObj:function(t,a){var e=r(t.currentTarget).attr("num"),n=[];r.each(r(".playdiv").eq(0).find("span.ballspan.active"),function(){n.push(r.trim(r(this).attr("num")))});var i=r(".playdiv").eq(0).find("span.ballspan.active").length;if(1===a){if(r(".playdiv").eq(1).find("span.ballspan.active[num="+e+"]").removeClass("active"),2===i){var s=r.inArray(e,n);s<0&&r(".playdiv").eq(0).find("span.ballspan.active[num="+n[0]+"]").removeClass("active")}}else r(".playdiv").eq(0).find("span.ballspan.active[num="+e+"]").removeClass("active");r(t.currentTarget).toggleClass("active"),this.getBetCount()},getBetCount:function(){var t=[],a="",e=[],n=[];if(r.each(r(".playdiv").eq(0).find("span.ballspan.active"),function(){e.push(r.trim(r(this).attr("num")))}),r.each(r(".playdiv").eq(1).find("span.ballspan.active"),function(){n.push(r.trim(r(this).attr("num")))}),e.length<=0||n.length<=0)return this.$emit("update:betCount",0),0;if(2===e.length)for(var i=0;i<n.length;i++)t.push(e[0]+""+e[1]+n[i]);else for(var s=0;s<n.length;s++)for(var l=s;l<n.length;l++)n[s]!==n[l]&&(parseInt(n[s])>parseInt(n[l])&&(a=n[s],n[s]=n[l],n[l]=a),t.push(e[0]+""+n[s]+n[l]));var o=t.length;this.$emit("update:betCount",o),0===o?this.$emit("update:showBetInfo",!1):this.$emit("update:showBetInfo",!0)},getBetContent:function(){var t=[];return r(".playdiv").each(function(a){var e=[];r(".playdiv").eq(a).find("span.ballspan.active").each(function(){e.push(r(this).attr("num"))}),t.push(e.join(",").toString())}),t.join("|").toString()},setHotCold:function(){if(!this.$parent.$refs.bethead)return 1;this.initNumArr();var t=this.$parent.$refs.bethead.recentResult;if(t)for(var a=0;a<t.length;a++)if(t[a].openCode)for(var e=t[a].openCode.split(","),n=2;n<e.length;n++)this.numArr[e[n]].val++},setYiLou:function(){if(!this.$parent.$refs.bethead)return 1;this.initNumArr();var t=["01","02","03","04","05","06","07","08","09","10","11"],a=this.$parent.$refs.bethead.recentResult;if(a)for(var e=0;e<a.length;e++)if(a[e].openCode){for(var n=a[e].openCode.split(","),i=2;i<n.length;i++)this.numArr[n[i]].jx=!1;for(var s=0;s<t.length;s++)this.numArr[t[s]].jx&&(this.numArr[t[s]].val=this.numArr[t[s]].val+1)}},initNumArr:function(){this.numArr={"01":{val:0,jx:!0},"02":{val:0,jx:!0},"03":{val:0,jx:!0},"04":{val:0,jx:!0},"05":{val:0,jx:!0},"06":{val:0,jx:!0},"07":{val:0,jx:!0},"08":{val:0,jx:!0},"09":{val:0,jx:!0},10:{val:0,jx:!0},11:{val:0,jx:!0}}},getRandomBetNum:function(){for(var t=this.$global.getArrayItems(this.ranArrs,3),a=[],e=0;e<3;e++)t[e]<10?a.push("0"+t[e]):a.push(t[e]);var n=JSON.parse(localStorage.randomOrder);n.betNum=a[0]+"|"+a[1]+","+a[2],localStorage.randomOrder=s()(n)}}},o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("div",{staticClass:"bet-help"},[t._v("玩法说明:至少选择3个号码，其中胆码至少一个"),e("i",{staticClass:"icon-bet-help",on:{click:t.betHelpDialogHandler}})]),t._v(" "),e("div",{staticClass:"bet-area"},[t._l(2,function(a){return[e("div",{staticClass:"bet-h"},[e("div",{staticClass:"bet-h-p"},[t._v(t._s(t.titleList[a-1]))]),t._v(" "),e("div",{staticClass:"bet-h-f"})]),t._v(" "),e("div",{staticClass:"bet-c playdiv"},t._l(t.numList,function(n){return e("div",{staticClass:"num"},[e("span",{staticClass:"n-p ballspan",attrs:{num:n},on:{click:function(e){t.selectObj(e,a)}}},[t._v(t._s(n))]),t._v(" "),t.showHotCold?e("span",{staticClass:"n-t"},[t._v(t._s(t.numArr[n].val))]):t._e(),t._v(" "),t.showHotCold?t._e():e("span",{staticClass:"n-t v1a-visiHide"},[t._v("0")])])}),0)]})],2)])},v=[],u=e("XyMi"),p=n,c=Object(u.a)(l,o,v,!1,p,null,null);a.default=c.exports}});