webpackJsonp([257],{"9E6e":function(t,e,a){"use strict";function n(t){a("Ezgz")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("mvHQ"),s=a.n(i),r=(a("0iPh"),a("0iPh")),l={props:["getBetOdd","selectAll","selectBig","selectSmall","selectOdd","selectEven","clearSelect","showHotCold","betHelpDialogHandler"],data:function(){return{lottery:null,titleList:["胆码","拖码"],numList:["01","02","03","04","05","06","07","08","09","10","11"],betCode:"syx5_sanxing_zuxuan_zsdt",numArr:[],ranArr:[],ranArrs:[]}},created:function(){this.initNumArr(),this.getBetOdd(this.betCode);for(var t=0;t<11;t++)this.ranArr.push(t);for(var e=1;e<12;e++)this.ranArrs.push(e)},methods:{randomBetNum:function(){r(".playdiv").find("span.ballspan").removeClass("active");var t=this.$global.getArrayItems(this.ranArr,3);r(".playdiv").eq(0).find("span.ballspan").eq(t[0]).addClass("active"),r(".playdiv").eq(1).find("span.ballspan").eq(t[1]).addClass("active"),r(".playdiv").eq(1).find("span.ballspan").eq(t[2]).addClass("active"),this.getBetCount()},selectObj:function(t,e){var a=r(t.currentTarget).attr("num"),n=[];r.each(r(".playdiv").eq(0).find("span.ballspan.active"),function(){n.push(r.trim(r(this).attr("num")))});var i=r(".playdiv").eq(0).find("span.ballspan.active").length;if(1===e){if(r(".playdiv").eq(1).find("span.ballspan.active[num="+a+"]").removeClass("active"),2===i){var s=r.inArray(a,n);s<0&&r(".playdiv").eq(0).find("span.ballspan.active[num="+n[0]+"]").removeClass("active")}}else r(".playdiv").eq(0).find("span.ballspan.active[num="+a+"]").removeClass("active");r(t.currentTarget).toggleClass("active"),this.getBetCount()},getBetCount:function(){var t=[],e="",a=[],n=[];if(r.each(r(".playdiv").eq(0).find("span.ballspan.active"),function(){a.push(r.trim(r(this).attr("num")))}),r.each(r(".playdiv").eq(1).find("span.ballspan.active"),function(){n.push(r.trim(r(this).attr("num")))}),a.length<=0||n.length<=0)return this.$emit("update:betCount",0),0;if(2===a.length)for(var i=0;i<n.length;i++)t.push(a[0]+""+a[1]+n[i]);else for(var s=0;s<n.length;s++)for(var l=s;l<n.length;l++)n[s]!==n[l]&&(parseInt(n[s])>parseInt(n[l])&&(e=n[s],n[s]=n[l],n[l]=e),t.push(a[0]+""+n[s]+n[l]));var o=t.length;this.$emit("update:betCount",o),0===o?this.$emit("update:showBetInfo",!1):this.$emit("update:showBetInfo",!0)},getBetContent:function(){var t=[];return r(".playdiv").each(function(e){var a=[];r(".playdiv").eq(e).find("span.ballspan.active").each(function(){a.push(r(this).attr("num"))}),t.push(a.join(",").toString())}),t.join("|").toString()},setHotCold:function(){if(!this.$parent.$refs.bethead)return 1;this.initNumArr();var t=this.$parent.$refs.bethead.recentResult;if(t)for(var e=0;e<t.length;e++)if(t[e].openCode)for(var a=t[e].openCode.split(","),n=1;n<a.length-1;n++)this.numArr[a[n]].val++},setYiLou:function(){if(!this.$parent.$refs.bethead)return 1;this.initNumArr();var t=["01","02","03","04","05","06","07","08","09","10","11"],e=this.$parent.$refs.bethead.recentResult;if(e)for(var a=0;a<e.length;a++)if(e[a].openCode){for(var n=e[a].openCode.split(","),i=1;i<n.length-1;i++)this.numArr[n[i]].jx=!1;for(var s=0;s<t.length;s++)this.numArr[t[s]].jx&&(this.numArr[t[s]].val=this.numArr[t[s]].val+1)}},initNumArr:function(){this.numArr={"01":{val:0,jx:!0},"02":{val:0,jx:!0},"03":{val:0,jx:!0},"04":{val:0,jx:!0},"05":{val:0,jx:!0},"06":{val:0,jx:!0},"07":{val:0,jx:!0},"08":{val:0,jx:!0},"09":{val:0,jx:!0},10:{val:0,jx:!0},11:{val:0,jx:!0}}},getRandomBetNum:function(){for(var t=this.$global.getArrayItems(this.ranArrs,3),e=[],a=0;a<3;a++)t[a]<10?e.push("0"+t[a]):e.push(t[a]);var n=JSON.parse(localStorage.randomOrder);n.betNum=e[0]+"|"+e[1]+","+e[2],localStorage.randomOrder=s()(n)}}},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"bet-help"},[t._v("玩法说明:至少选择3个号码，其中胆码至少一个"),a("i",{staticClass:"icon-bet-help",on:{click:t.betHelpDialogHandler}})]),t._v(" "),a("div",{staticClass:"bet-area"},[t._l(2,function(e){return[a("div",{staticClass:"bet-h"},[a("div",{staticClass:"bet-h-p"},[t._v(t._s(t.titleList[e-1]))]),t._v(" "),a("div",{staticClass:"bet-h-f"})]),t._v(" "),a("div",{staticClass:"bet-c playdiv"},t._l(t.numList,function(n){return a("div",{staticClass:"num"},[a("span",{staticClass:"n-p ballspan",attrs:{num:n},on:{click:function(a){t.selectObj(a,e)}}},[t._v(t._s(n))]),t._v(" "),t.showHotCold?a("span",{staticClass:"n-t"},[t._v(t._s(t.numArr[n].val))]):t._e(),t._v(" "),t.showHotCold?t._e():a("span",{staticClass:"n-t v1a-visiHide"},[t._v("0")])])}),0)]})],2)])},v=[],u=a("XyMi"),p=n,c=Object(u.a)(l,o,v,!1,p,null,null);e.default=c.exports},Ezgz:function(t,e,a){var n=a("tXHZ");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("rjj0").default;i("457f776c",n,!0,{})},tXHZ:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"\n@media screen and (max-width: 320px) {\n#app .lottery-wrap .bet-area .bet-c .num .n-t {\n    font-size: 12px;\n}\n}\n.v1a-visiHide {\n  visibility: hidden;\n}\n",""])}});