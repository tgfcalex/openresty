webpackJsonp([368],{"10d/":function(t,o,l){var a=l("IGe1");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=l("rjj0").default;i("8e6175d0",a,!0,{})},IGe1:function(t,o,l){o=t.exports=l("FZ+f")(!1),o.push([t.i,"",""])},qAE1:function(t,o,l){"use strict";function a(t){l("10d/")}Object.defineProperty(o,"__esModule",{value:!0});var i=l("MVRq"),e=l("V0DB"),s=l("/0UN"),n=l("hGvq"),h=l("0iPh"),d=l.n(h),v=l("WGHO"),c=function(){return l.e(121).then(l.bind(null,"t3Lp"))},r=function(){return l.e(120).then(l.bind(null,"tsXc"))},p=(i.a,e.a,s.a,n.a,function(){return l.e(121).then(l.bind(null,"t3Lp"))}),u=function(){return l.e(120).then(l.bind(null,"tsXc"))},C={components:{MoveLine:p,ButtonTab:i.a,ButtonTabItem:e.a,Checker:s.a,CheckerItem:n.a,BetLoader:u},props:["activeTab","betHelpDialogHandler","isSelected","code","showHotCold"],data:function(){return{hotColdMap:{},lottery:null,betTitle:"特码B",result:[],forArr:["大","小","单","双","合大","合小","合单","合双","尾大","尾小","大单","大双","小单","小双","红波","绿波","蓝波"],selectList:[],isFirst:!1}},created:function(){this.initSelectList(),this.initHotColdMap(),this.getBetOdd("special_b","特码B")},methods:{alread:function(){document.getElementById("v1a-move").style.width="37px"},selectItem:function(t,o,l){this.isSelected(v.c.selectItem(t,o,l))},initSelectList:function(){for(var t=0;t<67;t++)this.selectList.push(!1)},clearSelect:function(){for(var t=[],o=0;o<67;o++)t.push(!1);return t},getBetOdd:function(t,o,l){var a=this;if(v.c.resetSelected(),this.isFirst){var i=10+52*l;d()("#v1a-move").animate({marginLeft:i},100)}this.isFirst=!0,this.betTitle=o,this.selectList=this.clearSelect(),this.$api.get(this.$luyou.LOTTO.GET_ODD,{code:this.code,betCodes:t},function(t){a.lottery=t.data[0],a.$nextTick(function(){a.$emit("gengxin")})},function(t){t&&a.toast(a.$api.tip(t))})},initHotColdMap:function(){this.hotColdMap={};for(var t=1;t<50;t++){var o={val:0,jx:!0};this.hotColdMap[t]=o}this.hotColdMap["单"]={val:0,jx:!0},this.hotColdMap["双"]={val:0,jx:!0},this.hotColdMap["大"]={val:0,jx:!0},this.hotColdMap["小"]={val:0,jx:!0},this.hotColdMap["合大"]={val:0,jx:!0},this.hotColdMap["合小"]={val:0,jx:!0},this.hotColdMap["合单"]={val:0,jx:!0},this.hotColdMap["合双"]={val:0,jx:!0},this.hotColdMap["尾大"]={val:0,jx:!0},this.hotColdMap["尾小"]={val:0,jx:!0},this.hotColdMap["大单"]={val:0,jx:!0},this.hotColdMap["大双"]={val:0,jx:!0},this.hotColdMap["小单"]={val:0,jx:!0},this.hotColdMap["小双"]={val:0,jx:!0},this.hotColdMap["红波"]={val:0,jx:!0},this.hotColdMap["绿波"]={val:0,jx:!0},this.hotColdMap["蓝波"]={val:0,jx:!0}},setHotCold:function(){if(this.initHotColdMap(),!this.$parent.$refs.bethead)return 1;if(this.result=this.$parent.$refs.bethead.recentResult,this.result)for(var t=0;t<this.result.length;t++){var o=this.result[t];if(o.openCode){for(var l=o.openCode.split(","),a=l[l.length-1],i=parseInt(a),e=0,s=0,n=0,h=1;h<50;h++)h===i&&(this.hotColdMap[h].val+=1);e=parseInt(a.split("")[0]),s=parseInt(a.split("")[1]),n=e+s,this.singleDouble(i,this.hotColdMap),this.bigSmall(i,this.hotColdMap),this.sumSingleDouble(i,n,this.hotColdMap),this.sumBigSmall(i,n,this.hotColdMap),this.tailBigSmall(i,s,this.hotColdMap),this.bigSmaSinDou(i,this.hotColdMap),this.wave(a,this.hotColdMap)}}},singleDouble:function(t,o){49!==t&&(t%2==0?o["双"].val+=1:o["单"].val+=1)},bigSmall:function(t,o){t<=24?o["小"].val+=1:t>=25&&t<49&&(o["大"].val+=1)},sumSingleDouble:function(t,o,l){49!==t&&(o%2==0?l["合双"].val+=1:l["合单"].val+=1)},sumBigSmall:function(t,o,l){49!==t&&(o<=6?l["合小"].val+=1:o>=7&&(l["合大"].val+=1))},tailBigSmall:function(t,o,l){49!==t&&(o<=4?l["尾小"].val+=1:o>=5&&o<10&&(l["尾大"].val+=1))},bigSmaSinDou:function(t,o){49!==t&&(t%2==0?t<=24?o["小双"].val+=1:t>=25&&t<49&&(o["大双"].val+=1):t<=24?o["小单"].val+=1:t>=25&&t<49&&(o["大单"].val+=1))},wave:function(t,o){var l=["01","02","07","08","12","13","18","19","23","24","29","30","34","35","40","45","46"],a=["03","04","09","10","14","15","20","25","26","31","36","37","41","42","47","48"],i=["05","06","11","16","17","21","22","27","28","32","33","38","39","43","44","49"];l.indexOf(t)>=0&&(o["红波"].val+=1),a.indexOf(t)>=0&&(o["蓝波"].val+=1),i.indexOf(t)>=0&&(o["绿波"].val+=1)},setYiLou:function(){if(this.initHotColdMap(),!this.$parent.$refs.bethead)return 1;if(this.result=this.$parent.$refs.bethead.recentResult,this.result)for(var t=0;t<this.result.length;t++){var o=this.result[t];if(o.openCode){for(var l=o.openCode.split(","),a=l[l.length-1],i=parseInt(a),e=0,s=0,n=0,h=1;h<50;h++)h===i&&(this.hotColdMap[h].jx=!1),this.hotColdMap[h].jx&&(this.hotColdMap[h].val+=1);e=parseInt(a.split("")[0]),s=parseInt(a.split("")[1]),n=e+s,this.singleDoubleYL(i,this.hotColdMap),this.bigSmallYL(i,this.hotColdMap),this.sumSingleDoubleYL(i,n,this.hotColdMap),this.sumBigSmallYL(i,n,this.hotColdMap),this.tailBigSmallYL(i,s,this.hotColdMap),this.bigSmaSinDouYL(i,this.hotColdMap),this.waveYL(a,this.hotColdMap)}}},singleDoubleYL:function(t,o){49!==t&&(t%2==0?(this.hotColdMap["双"].jx=!1,this.hotColdMap["单"].jx&&(o["单"].val+=1)):(this.hotColdMap["单"].jx=!1,this.hotColdMap["双"].jx&&(o["双"].val+=1)))},bigSmallYL:function(t,o){t<=24?(this.hotColdMap["小"].jx=!1,this.hotColdMap["大"].jx&&(o["大"].val+=1)):t>=25&&t<49&&(this.hotColdMap["大"].jx=!1,this.hotColdMap["小"].jx&&(o["小"].val+=1))},sumSingleDoubleYL:function(t,o,l){49!==t&&(o%2==0?(this.hotColdMap["合双"].jx=!1,this.hotColdMap["合单"].jx&&(l["合单"].val+=1)):(this.hotColdMap["合单"].jx=!1,this.hotColdMap["合单"].jx&&(l["合双"].val+=1)))},sumBigSmallYL:function(t,o,l){49!==t&&(o<=6?(this.hotColdMap["合小"].jx=!1,this.hotColdMap["合大"].jx&&(l["合大"].val+=1)):o>=7&&(this.hotColdMap["合大"].jx=!1,this.hotColdMap["合小"].jx&&(l["合小"].val+=1)))},tailBigSmallYL:function(t,o,l){49!==t&&(o<=4?(this.hotColdMap["尾小"].jx=!1,this.hotColdMap["尾大"].jx&&(l["尾大"].val+=1)):o>=5&&(this.hotColdMap["尾大"].jx=!1,this.hotColdMap["尾小"].jx&&(l["尾小"].val+=1)))},bigSmaSinDouYL:function(t,o){49!==t&&(t%2==0?t<=24?(this.hotColdMap["小双"].jx=!1,this.hotColdMap["大双"].jx&&(o["大双"].val+=1),this.hotColdMap["大单"].jx&&(o["大单"].val+=1),this.hotColdMap["小单"].jx&&(o["小单"].val+=1)):t>=25&&t<49&&(this.hotColdMap["大双"].jx=!1,this.hotColdMap["小双"].jx&&(o["小双"].val+=1),this.hotColdMap["大单"].jx&&(o["大单"].val+=1),this.hotColdMap["小单"].jx&&(o["小单"].val+=1)):t<=24?(this.hotColdMap["小单"].jx=!1,this.hotColdMap["大单"].jx&&(o["大单"].val+=1),this.hotColdMap["大双"].jx&&(o["大双"].val+=1),this.hotColdMap["小双"].jx&&(o["小双"].val+=1)):t>=25&&t<49&&(this.hotColdMap["大单"].jx=!1,this.hotColdMap["小单"].jx&&(o["小单"].val+=1),this.hotColdMap["大双"].jx&&(o["大双"].val+=1),this.hotColdMap["小双"].jx&&(o["小双"].val+=1)))},waveYL:function(t,o){var l=["01","02","07","08","12","13","18","19","23","24","29","30","34","35","40","45","46"],a=["03","04","09","10","14","15","20","25","26","31","36","37","41","42","47","48"],i=["05","06","11","16","17","21","22","27","28","32","33","38","39","43","44","49"];l.indexOf(t)>=0&&(this.hotColdMap["红波"].jx=!1,this.hotColdMap["蓝波"].jx&&(o["蓝波"].val+=1),this.hotColdMap["绿波"].jx&&(o["绿波"].val+=1)),a.indexOf(t)>=0&&(this.hotColdMap["蓝波"].jx=!1,this.hotColdMap["红波"].jx&&(o["红波"].val+=1),this.hotColdMap["绿波"].jx&&(o["绿波"].val+=1)),i.indexOf(t)>=0&&(this.hotColdMap["绿波"].jx=!1,this.hotColdMap["红波"].jx&&(o["红波"].val+=1),this.hotColdMap["蓝波"].jx&&(o["蓝波"].val+=1))}},mounted:function(){d()(".scroll1-cont").width(250)}},M=function(){var t=this,o=t.$createElement,l=t._self._c||o;return l("div",[l("button-tab",[l("button-tab-item",{attrs:{selected:""},on:{"on-item-click":function(o){t.getBetOdd("special_b","特码B",0)}}},[t._v("特码B")]),t._v(" "),l("button-tab-item",{on:{"on-item-click":function(o){t.getBetOdd("special_a","特码A",1)}}},[t._v("特码A")])],1),t._v(" "),l("move-line",{on:{alreadAll:t.alread}}),t._v(" "),null!=t.lottery?l("div",{staticClass:"cont",attrs:{id:"betCheck"}},[l("div",{},[l("div",{staticClass:"v1-shuangmian-tit v1a-addTopLine"},[t._v("\n        特码\n      ")]),t._v(" "),l("div",{staticClass:"v1-dianshu-width"},[l("ul",{staticClass:"v1-dbmian-wrap v1-commom-ul clear-both"},[t._l(9,function(o){return l("li",{key:o-1,class:["v1-lengre-box-wrap",{"check-bg":t.selectList[o-1]},"v1a-common"],attrs:{"data-bet-num":t.lottery["0"+o].betNum,"data-bet-code":t.lottery["0"+o].betCode,"data-play-code":t.lottery["0"+o].playCode,"data-odd":t.lottery["0"+o].odd},on:{click:function(l){t.selectItem(0,o-1,0)}}},[l("div",{staticClass:"v1-shuangmian-content"},[l("div",{staticClass:"v1-longcard-content clear-both"},[l("p",{class:"fl theme-font-color v1-num-ball v1-number-font-size num v1-lhc-n0"+o},[t._v("0"+t._s(o))]),t._v(" "),l("p",{staticClass:"fr"},[t._v(t._s(t.lottery["0"+o].odd))])])]),t._v(" "),t.showHotCold?l("font",{staticClass:"v1-lengre-content"},[t._v(t._s(t.hotColdMap[o].val))]):t._e()],1)}),t._v(" "),t._l(40,function(o){return l("li",{key:o+9,class:["v1-lengre-box-wrap",{"check-bg":t.selectList[o+9]},"v1a-common"],attrs:{"data-bet-num":t.lottery[o+9].betNum,"data-bet-code":t.lottery[o+9].betCode,"data-play-code":t.lottery[o+9].playCode,"data-odd":t.lottery[o+9].odd},on:{click:function(l){t.selectItem(0,o+8,0)}}},[l("div",{staticClass:"v1-shuangmian-content"},[l("div",{staticClass:"v1-longcard-content clear-both"},[l("p",{class:"fl theme-font-color v1-num-ball v1-number-font-size num v1-lhc-n"+(o+9)},[t._v(t._s(o+9))]),t._v(" "),l("p",{staticClass:"fr"},[t._v(t._s(t.lottery[o+9].odd))])])]),t._v(" "),t.showHotCold?l("font",{staticClass:"v1-lengre-content"},[t._v(t._s(t.hotColdMap[o+9].val))]):t._e()],1)})],2)])]),t._v(" "),l("div",{},[l("div",{staticClass:"v1-shuangmian-tit v1a-addTopLine"},[t._v("\n        特码\n      ")]),t._v(" "),l("div",{staticClass:"v1-dianshu-width"},[l("ul",{staticClass:"v1-dbmian-wrap v1-commom-ul clear-both"},t._l(t.forArr,function(o,a){return l("li",{key:o,class:["v1-lengre-box-wrap",{"check-bg":t.selectList[a+50]},"v1a-common"],attrs:{"data-bet-num":t.lottery[o].betNum,"data-bet-code":t.lottery[o].betCode,"data-play-code":t.lottery[o].playCode,"data-odd":t.lottery[o].odd},on:{click:function(o){t.selectItem(0,a+49,0)}}},[l("div",{staticClass:"v1-shuangmian-content"},[l("div",{staticClass:"v1-longcard-content clear-both"},[l("p",{staticClass:"fl"},[t._v(t._s(o))]),t._v(" "),l("p",{staticClass:"fr"},[t._v(t._s(t.lottery[o].odd))])])]),t._v(" "),t.showHotCold?l("font",{staticClass:"v1-lengre-content"},[t._v(t._s(t.hotColdMap[o].val))]):t._e()],1)}),0)])])]):l("div",[l("bet-loader")],1)],1)},f=[],m=l("XyMi"),x=a,b=Object(m.a)(C,M,f,!1,x,null,null);o.default=b.exports}});