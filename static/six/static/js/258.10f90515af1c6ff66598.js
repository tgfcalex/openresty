webpackJsonp([258],{"C+J6":function(t,e,r){var n=r("wl4c");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=r("rjj0").default;s("0cd1518e",n,!0,{})},sJ16:function(t,e,r){"use strict";function n(t){r("C+J6")}Object.defineProperty(e,"__esModule",{value:!0});var s=r("/0UN"),o=r("hGvq"),a=r("0iPh"),i=r.n(a),l=r("WGHO"),u=function(){return r.e(120).then(r.bind(null,"tsXc"))},d=(s.a,o.a,function(){return r.e(120).then(r.bind(null,"tsXc"))}),h={components:{Checker:s.a,CheckerItem:o.a,BetLoader:d},props:["activeTab","betHelpDialogHandler","isSelected","code","showHotCold"],data:function(){return{lottery:[],betTitle:["万位","千位","百位","十位","个位"],lottyers:[],sumlottery:null,keyList:["大","小","单","双","质","合"],numArr:[],zhArr:[1,2,3,5,7],checkList:3,selectList:[],lastItem:[!1,!1,!1,!1],isOpen:!1,newLottery:[]}},created:function(){this.initNumArr(),this.getBetOdd()},methods:{selectItem:function(t,e,r){var n=0;"万位"===t?n=0:"千位"===t?n=1:"百位"===t?n=2:"十位"===t?n=3:"个位"===t?n=4:"总和"===t&&(n=5),this.isSelected(l.c.selectItem(n,e,r))},initSelectedList:function(t){for(var e=0,r=t.length;e<=r;e++)this.selectList.push([!1,!1,!1,!1])},getBetOdd:function(){var t=this;this.$api.get(this.$luyou.LOTTO.GET_ODD,{code:this.code,model:"tradition"},function(e){t.lottery1=e.data[0];var r={"万位":[],"千位":[],"百位":[],"十位":[],"个位":[],"总和":[]};for(var n in t.lottery1){var s=t.lottery1[n];"syx5_one_single_double"!==s.playCode&&"syx5_sum_big_small"!==s.playCode&&"syx5_one_big_small"!==s.playCode&&"syx5_sum_single_double"!==s.playCode||("syx5_ten_thousand"===s.betCode?r["万位"].push({betNum:s.betNum,betCode:s.betCode,playCode:s.playCode,odd:s.odd}):"syx5_thousand"===s.betCode?r["千位"].push({betNum:s.betNum,betCode:s.betCode,playCode:s.playCode,odd:s.odd}):"syx5_hundred"===s.betCode?r["百位"].push({betNum:s.betNum,betCode:s.betCode,playCode:s.playCode,odd:s.odd}):"syx5_ten"===s.betCode?r["十位"].push({betNum:s.betNum,betCode:s.betCode,playCode:s.playCode,odd:s.odd}):"syx5_one"===s.betCode?r["个位"].push({betNum:s.betNum,betCode:s.betCode,playCode:s.playCode,odd:s.odd}):"syx5_sum_big_small"!==s.playCode&&"syx5_sum_single_double"!==s.playCode||r["总和"].push({betNum:s.betNum,betCode:s.betCode,playCode:s.playCode,odd:s.odd}))}t.newLottery=r;for(var o=["大","小","单","双"],a=["万位","千位","百位","十位","个位","总和"],i=[],l=0;l<a.length;l++){for(var u=[],d=0;d<o.length;d++)for(var h=0;h<o.length;h++)0!==h||"大"!==t.newLottery[a[l]][d].betNum&&"总大"!==t.newLottery[a[l]][d].betNum?1!==h||"小"!==t.newLottery[a[l]][d].betNum&&"总小"!==t.newLottery[a[l]][d].betNum?2!==h||"单"!==t.newLottery[a[l]][d].betNum&&"总单"!==t.newLottery[a[l]][d].betNum?3!==h||"双"!==t.newLottery[a[l]][d].betNum&&"总双"!==t.newLottery[a[l]][d].betNum||(u[3]=t.newLottery[a[l]][d]):u[2]=t.newLottery[a[l]][d]:u[1]=t.newLottery[a[l]][d]:u[0]=t.newLottery[a[l]][d];i[a[l]]=u}for(var m=0;m<a.length;m++)t.newLottery[a[m]]=i[a[m]]},function(e){e&&t.toast(t.$api.tip(e))})},setHotCold:function(){if(!this.$parent.$refs.bethead)return 1;this.initNumArr();var t=this.$parent.$refs.bethead.recentResult;if(t)for(var e=0;e<t.length;e++)if(t[e].openCode){for(var r=t[e].openCode.split(","),n=0,s=0;s<r.length;s++)11!==Number(r[s])&&(Number(r[s])>5?this.numArr[s]["大"].val++:this.numArr[s]["小"].val++,Number(r[s])%2==0?this.numArr[s]["双"].val++:this.numArr[s]["单"].val++,i.a.inArray(Number(r[s]),this.zhArr)>=0?this.numArr[s]["质"].val++:this.numArr[s]["合"].val++,n+=Number(r[s]));n<=22?this.numArr[5]["总小"].val++:this.numArr[5]["总大"].val++,n%2==0?this.numArr[5]["总双"].val++:this.numArr[5]["总单"].val++}},setYiLou:function(){if(!this.$parent.$refs.bethead)return 1;this.initNumArr();var t=["大","小","单","双","质","合"],e=this.$parent.$refs.bethead.recentResult;if(e)for(var r=0;r<e.length;r++)if(e[r].openCode){for(var n=e[r].openCode.split(","),s=0,o=0;o<n.length;o++){var a=[];s+=Number(n[o]),11!==Number(n[o])&&(Number(n[o]>5)?a.push("大"):a.push("小"),Number(n[o]%2==0)?a.push("双"):a.push("单")),i.a.inArray(Number(n[o]),this.zhArr)>=0?a.push("质"):a.push("合");for(var l=0;l<a.length;l++)this.numArr[o][a[l]].jx=!1;for(var u=0;u<t.length;u++)this.numArr[o][t[u]].jx&&(this.numArr[o][t[u]].val=this.numArr[o][t[u]].val+1)}s>22?(this.numArr[5]["总大"].jx=!1,this.numArr[5]["总小"].jx&&(this.numArr[5]["总小"].val=this.numArr[5]["总小"].val+1)):(this.numArr[5]["总小"].jx=!1,this.numArr[5]["总大"].jx&&(this.numArr[5]["总大"].val=this.numArr[5]["总大"].val+1)),s%2==0?(this.numArr[5]["总双"].jx=!1,this.numArr[5]["总单"].jx&&(this.numArr[5]["总单"].val=this.numArr[5]["总单"].val+1)):(this.numArr[5]["总单"].jx=!1,this.numArr[5]["总双"].jx&&(this.numArr[5]["总双"].val=this.numArr[5]["总双"].val+1))}},initNumArr:function(){this.numArr=[];for(var t=0;t<5;t++){var e={"大":{val:0,jx:!0},"小":{val:0,jx:!0},"单":{val:0,jx:!0},"双":{val:0,jx:!0},"质":{val:0,jx:!0},"合":{val:0,jx:!0}};this.numArr.push(e)}this.numArr.push({"总大":{val:0,jx:!0},"总小":{val:0,jx:!0},"总单":{val:0,jx:!0},"总双":{val:0,jx:!0}})}}},m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[null!=t.newLottery?r("div",{staticClass:"cont-1",attrs:{id:"betCheck"}},t._l(t.newLottery,function(e,n,s){return r("div",[r("div",{staticClass:"v1-gxks-bottom"},[r("div",{staticClass:"v1-shuangmian-tit"},[t._v(t._s(n))]),t._v(" "),r("div",{staticClass:"v1-dianshu-width"},[r("ul",{staticClass:"v1-dbmian-wrap v1-commom-ul clear-both"},t._l(e,function(e,o){return r("li",{key:o,class:["v1-lengre-box-wrap",{"check-bg theme-font-color":!1}],attrs:{"data-bet-num":e.betNum,"data-bet-code":e.betCode,"data-play-code":e.playCode,"data-odd":e.odd},on:{click:function(e){t.selectItem(n,o,4)}}},[r("div",{staticClass:"v1-shuangmian-content"},[r("div",{staticClass:"v1-longcard-content clear-both"},[r("p",{staticClass:"fl"},[t._v(t._s(e.betNum))]),t._v(" "),r("p",{staticClass:"fr"},[t._v(t._s(e.odd))])]),t._v(" "),t.showHotCold?r("font",{staticClass:"v1-lengre-content"},[t._v(t._s(t.numArr[s][e.betNum].val))]):t._e()],1)])}),0)])])])}),0):r("div",[r("bet-loader")],1)])},v=[],c=r("XyMi"),b=n,p=Object(c.a)(h,m,v,!1,b,null,null);e.default=p.exports},wl4c:function(t,e,r){e=t.exports=r("FZ+f")(!1),e.push([t.i,"",""])}});