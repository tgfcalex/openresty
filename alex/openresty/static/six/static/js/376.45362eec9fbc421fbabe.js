webpackJsonp([376],{"6Pk6":function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"",""])},"93eq":function(t,e,n){var i=n("6Pk6");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("rjj0").default;o("3f7312f8",i,!0,{})},AEUV:function(t,e,n){"use strict";function i(t){n("93eq")}Object.defineProperty(e,"__esModule",{value:!0});var o=n("mvHQ"),s=n.n(o),l=n("MVRq"),a=n("V0DB"),c=n("/0UN"),r=n("hGvq"),h=n("S8Wg"),d=n("0iPh"),u=n.n(d),v=n("WGHO"),b=function(){return n.e(121).then(n.bind(null,"t3Lp"))},m=function(){return n.e(120).then(n.bind(null,"tsXc"))},_=(l.a,a.a,c.a,r.a,h.a,function(){return n.e(121).then(n.bind(null,"t3Lp"))}),f=function(){return n.e(120).then(n.bind(null,"tsXc"))},p={components:{MoveLine:_,ButtonTab:l.a,ButtonTabItem:a.a,Checker:c.a,CheckerItem:r.a,Scroller:h.a,BetLoader:f},props:["activeTab","betHelpDialogHandler","isSelected","code","betCode","betName","showHotCold","resetBetInfo"],data:function(){return{lottery:null,betTitle:"五不中",betNum:5,ranArr:[],seldex:0,betcodes:"lhc_five_no_in",hotColdMap:{},numList:["01","02","03","04","05","06","07","08","09"],selectList:[],isFirst:!1}},created:function(){this.initSelectList(),this.initHotColdMap();for(var t=0;t<49;t++)this.ranArr.push(t);this.betcodes=this.betCode?this.betCode:"lhc_five_no_in";var e=this.betName?this.betName:"五不中",n=this.getSelect(this.betcodes)+5;this.getBetOdd(this.betcodes,e,n)},methods:{alread:function(){document.getElementById("v1a-move").style.width="42px"},selectItem:function(t,e,n){this.isSelected(v.c.selectItem(t,e,n))},initSelectList:function(){for(var t=0;t<53;t++)this.selectList.push(!1)},clearSelect:function(){for(var t=[],e=0;e<53;e++)t.push(!1);return t},getBetOdd:function(t,e,n,i){var o=this;if(v.c.resetSelected(),this.isFirst){var s=void 0;i>5?(document.getElementById("v1a-move").style.width="56px",s=352+71*(i-6)):(document.getElementById("v1a-move").style.width="42px",s=10+57*i),u()("#v1a-move").animate({marginLeft:s},100)}this.isFirst=!0,this.resetBetInfo(),u()("#betCheck .item").removeClass("item-selected"),this.lottery=null,this.betTitle=e,this.betNum=n,this.betcodes=t,this.seldex=this.getSelect(),u()("#betCheck .item").removeClass("item-selected"),this.$emit("update:betCode",t),this.selectList=this.clearSelect(),this.$api.get(this.$luyou.LOTTO.GET_ODD,{code:this.code,betCodes:t},function(t){o.lottery=t.data[0],o.$nextTick(function(){o.$emit("gengxin")})},function(t){t&&o.toast(o.$api.tip(t))})},getSelect:function(){return"lhc_five_no_in"===this.betcodes?0:"lhc_six_no_in"===this.betcodes?1:"lhc_seven_no_in"===this.betcodes?2:"lhc_eight_no_in"===this.betcodes?3:"lhc_nine_no_in"===this.betcodes?4:"lhc_ten_no_in"===this.betcodes?5:"lhc_eleven_no_in"===this.betcodes?6:"lhc_twelve_no_in"===this.betcodes?7:void 0},getBetForm:function(){var t={code:this.code,expect:null,quantity:0,totalMoney:0,playModel:"tradition",betOrders:[]},e=u()("#betCheck .check-bg"),n=parseInt(this.betNum);if(0===e.length||e.length<n)return this.toast("请选择"+n+"个及以上号码"),1;var i=[];u()("#betCheck .check-bg").each(function(){var t=u()(this).attr("data-bet-num");i.push(t)});var o=this.combination(i,n);o=this.addZero(o);for(var l=u()("#betMoney").val(),a=0;a<o.length;a++)t.betOrders.push({betNum:o[a],betCode:this.lottery[this.betNum].betCode,playCode:this.lottery[this.betNum].playCode,betAmount:l,odd:this.lottery[this.betNum].odd}),t.totalMoney=this.$global.add(t.totalMoney,l),t.quantity=this.$global.add(t.quantity,1);localStorage.betForm=s()(t),this.$router.push({path:"/lotto/confirm-bet",query:{name:this.$route.query.name}})},addZero:function(t){for(var e=0;e<t.length;e++){for(var n=t[e].split(","),i=0;i<n.length;i++)1*n[i]<10&&n.splice(i,1,"0"+n[i]);t.splice(e,1,n.join(","))}return t},combination:function(t,e){var n=[];return t.length>=e&&this.combinationSelect(n,t,0,[],0,e),n},combinationSelect:function(t,e,n,i,o,s){var l=o+1;if(l>s)return t.push(i.join(",")),1;for(var a=e.length+l-s,c=n;c<a;c++)i[o]=e[c],this.combinationSelect(t,e,c+1,i,o+1,s)},randomBetNum:function(){u()("#betCheck .item").removeClass("item-selected");for(var t=this.$global.getArrayItems(this.ranArr,this.betNum),e=0;e<t.length;e++)this.isSelected(!0,t[e])},getBetCount:function(){return this.$global.combinationCount(u()("#betCheck .check-bg").length,this.betNum)},getCanWinMoney:function(){var t=this.$parent.$parent.betCount,e=this.$parent.$parent.betMoney?Number(this.$parent.$parent.betMoney):0,n=0;null!=this.lottery&&(n=this.lottery[this.betNum].odd);var i=this.$global.mul(n,e);return t>0?i:0},initHotColdMap:function(){this.hotColdMap={};for(var t=1;t<50;t++){var e={val:0,jx:!0};this.hotColdMap[t]=e}},setHotCold:function(){if(this.initHotColdMap(),!this.$parent.$refs.bethead)return 1;if(this.result=this.$parent.$refs.bethead.recentResult,this.result)for(var t=0;t<this.result.length;t++){var e=this.result[t];if(e.openCode)for(var n=e.openCode.split(","),i=0;i<n.length;i++)for(var o=1;o<50;o++)o===parseInt(n[i])&&(this.hotColdMap[o].val+=1)}},setYiLou:function(){if(this.initHotColdMap(),!this.$parent.$refs.bethead)return 1;if(this.result=this.$parent.$refs.bethead.recentResult,this.result)for(var t=0;t<this.result.length;t++){var e=this.result[t];if(e.openCode)for(var n=e.openCode.split(","),i=1;i<50;i++){for(var o=0;o<n.length;o++)i===parseInt(n[o])&&(this.hotColdMap[i].jx=!1);this.hotColdMap[i].jx&&(this.hotColdMap[i].val+=1)}}},betOdd:function(t,e){this.initHotColdMap();for(var n=0;n<49;n++)this.ranArr.push(n);this.betcodes=t;var i=this.getSelect(this.betcodes)+5;this.getBetOdd(this.betcodes,e,i)}},mounted:function(){u()(".scroll1-cont").width(494)}},g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("scroller",{ref:"scroll1",staticClass:"scroll1",attrs:{"lock-y":"","scrollbar-x":!1,bounce:!1}},[n("div",{staticClass:"scroll1-cont"},[n("button-tab",{model:{value:t.seldex,callback:function(e){t.seldex=e},expression:"seldex"}},[n("button-tab-item",{on:{"on-item-click":function(e){t.getBetOdd("lhc_five_no_in","五不中",5,0)}}},[t._v("五不中")]),t._v(" "),n("button-tab-item",{on:{"on-item-click":function(e){t.getBetOdd("lhc_six_no_in","六不中",6,1)}}},[t._v("六不中")]),t._v(" "),n("button-tab-item",{on:{"on-item-click":function(e){t.getBetOdd("lhc_seven_no_in","七不中",7,2)}}},[t._v("七不中")]),t._v(" "),n("button-tab-item",{on:{"on-item-click":function(e){t.getBetOdd("lhc_eight_no_in","八不中",8,3)}}},[t._v("八不中")]),t._v(" "),n("button-tab-item",{on:{"on-item-click":function(e){t.getBetOdd("lhc_nine_no_in","九不中",9,4)}}},[t._v("九不中")]),t._v(" "),n("button-tab-item",{on:{"on-item-click":function(e){t.getBetOdd("lhc_ten_no_in","十不中",10,5)}}},[t._v("十不中")]),t._v(" "),n("button-tab-item",{on:{"on-item-click":function(e){t.getBetOdd("lhc_eleven_no_in","十一不中",11,6)}}},[t._v("十一不中")]),t._v(" "),n("button-tab-item",{on:{"on-item-click":function(e){t.getBetOdd("lhc_twelve_no_in","十二不中",12,7)}}},[t._v("十二不中")])],1),t._v(" "),n("move-line",{on:{alreadAll:t.alread}})],1)]),t._v(" "),null!=t.lottery?n("div",{staticClass:"cont"},[n("div",{staticClass:"dingwei font-14"},[t._v(t._s(t.betTitle)+"@"),n("span",{staticClass:"theme-color"},[t._v(t._s(t.lottery[t.betNum].odd))]),t._v("(请选择 "),n("span",{staticClass:"theme-color"},[t._v(t._s(t.betNum))]),t._v("个及以上号码) ")]),t._v(" "),n("div",{},[n("div",{staticClass:"v1-shuangmian-tit"},[t._v("正码")]),t._v(" "),n("div",{staticClass:"v1-dianshu-width",attrs:{id:"betCheck"}},[n("ul",{staticClass:"v1-dbmian-wrap v1-commom-ul clear-both"},[t._l(9,function(e){return n("li",{key:e-1,class:["v1-lengre-box-wrap",{"check-bg":t.selectList[e-1]},"v1a-common"],attrs:{"data-bet-num":e},on:{click:function(n){t.selectItem(0,e-1,49)}}},[n("div",{staticClass:"v1-shuangmian-content"},[n("div",{staticClass:"v1-longcard-content clear-both"},[n("p",{class:"fl theme-font-color v1-num-ball v1-number-font-size num v1-lhc-n0"+e},[t._v("0"+t._s(e))])])]),t._v(" "),t.showHotCold?n("font",{staticClass:"v1-lengre-content"},[t._v(t._s(t.hotColdMap[e].val))]):t._e()],1)}),t._v(" "),t._l(40,function(e){return n("li",{key:e+9,class:["v1-lengre-box-wrap",{"check-bg":t.selectList[e+9]},"v1a-common"],attrs:{"data-bet-num":e+9},on:{click:function(n){t.selectItem(0,e+8,49)}}},[n("div",{staticClass:"v1-shuangmian-content"},[n("div",{staticClass:"v1-longcard-content clear-both"},[n("p",{class:"fl theme-font-color v1-num-ball num v1-number-font-size v1-lhc-n"+(e+9)},[t._v(t._s(e+9))])])]),t._v(" "),t.showHotCold?n("font",{staticClass:"v1-lengre-content"},[t._v(t._s(t.hotColdMap[e+9].val))]):t._e()],1)})],2)])])]):n("div",[n("bet-loader")],1)],1)},C=[],y=n("XyMi"),k=i,$=Object(y.a)(p,g,C,!1,k,null,null);e.default=$.exports}});