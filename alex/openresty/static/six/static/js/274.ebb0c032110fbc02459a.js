webpackJsonp([274],{"1A0C":function(t,e,n){"use strict";function s(t){n("9P2a")}Object.defineProperty(e,"__esModule",{value:!0});var o=n("mvHQ"),i=n.n(o),a=n("MVRq"),d=n("V0DB"),c=n("/0UN"),l=n("hGvq"),r=n("S8Wg"),u=n("0iPh"),h=n.n(u),b=n("WGHO"),v=function(){return n.e(121).then(n.bind(null,"t3Lp"))},m=function(){return n.e(120).then(n.bind(null,"tsXc"))},_=(a.a,d.a,c.a,l.a,r.a,function(){return n.e(121).then(n.bind(null,"t3Lp"))}),f=function(){return n.e(120).then(n.bind(null,"tsXc"))},g={components:{MoveLine:_,ButtonTab:a.a,ButtonTabItem:d.a,Checker:c.a,CheckerItem:l.a,Scroller:r.a,BetLoader:f},props:["activeTab","betHelpDialogHandler","isSelected","code","betCode","betName","showHotCold","resetBetInfo"],data:function(){return{lottery:[],betTitle1:"万",betTitle2:"千",odd:"",seldex:0,betcodes:"ten_thousand_thousand",numArr:[],wsdex1:0,wsdex2:1,selectList:[[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]]}},created:function(){this.initNumArr(),this.betcodes=this.betCode?this.betCode:"ten_thousand_thousand";var t=this.betName?this.betName:"万千",e=t.substr(0,1),n=t.substr(1,1);this.getBetOdd(this.betcodes,e,n)},methods:{alread:function(){document.getElementById("v1a-move").style.width="28px"},selectItem:function(t,e,n){this.isSelected(b.c.selectItem(t,e,n))},getBetOdd:function(t,e,n,s){var o=this;if(b.c.resetSelected(),this.isFirst){var i=10+38*s;h()("#v1a-move").animate({marginLeft:i},100)}this.isFirst=!0,this.resetBetInfo(),this.betcodes=t,this.seldex=this.getSelect(),h()("#betCheck .item").removeClass("item-selected"),this.betTitle1=e,this.betTitle2=n,this.$emit("update:betCode",t),this.selectList=[[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]],this.$api.get(this.$luyou.LOTTO.GET_ODD,{code:this.code,betCodes:t},function(t){o.lottery=t.data[0]["中2"],o.odd=t.data[0]["中2"].odd,o.$nextTick(function(){o.$emit("gengxin")})},function(t){t&&o.toast(o.$api.tip(t))})},randomBetNum:function(){var t=parseInt(10*Math.random()),e=parseInt(10*Math.random());this.isSelected(!0,t),this.isSelected(!0,10+e)},getBetForm:function(){var t=this,e={code:this.code,expect:null,quantity:0,totalMoney:0,playModel:"tradition",betOrders:[]},n=h()("#topCheck .check-bg"),s=h()("#botCheck .check-bg");if(0===n.length||0===s.length)return this.toast("请选择"),1;h()("#topCheck .check-bg").each(function(n,s){h()("#botCheck .check-bg").each(function(n,o){var i=h()("#betMoney").val();e.betOrders.push({betNum:h()(s).attr("data-bet-num")+""+h()(o).attr("data-bet-num"),betCode:t.lottery.betCode,playCode:t.lottery.playCode,betAmount:i,odd:t.lottery.odd}),e.totalMoney=t.$global.add(e.totalMoney,i),e.quantity=t.$global.add(e.quantity,1)})}),localStorage.betForm=i()(e),this.$router.push({path:"/lotto/confirm-bet",query:{name:this.$route.query.name}})},getSelect:function(){return"ten_thousand_thousand"===this.betcodes?(this.wsdex1=0,this.wsdex2=1,0):"ten_thousand_hundred"===this.betcodes?(this.wsdex1=0,this.wsdex2=2,1):"ten_thousand_ten"===this.betcodes?(this.wsdex1=0,this.wsdex2=3,2):"ten_thousand_one"===this.betcodes?(this.wsdex1=0,this.wsdex2=4,3):"thousand_hundred"===this.betcodes?(this.wsdex1=1,this.wsdex2=2,4):"thousand_ten"===this.betcodes?(this.wsdex1=1,this.wsdex2=3,5):"thousand_one"===this.betcodes?(this.wsdex1=1,this.wsdex2=4,6):"hundred_ten"===this.betcodes?(this.wsdex1=2,this.wsdex2=3,7):"hundred_one"===this.betcodes?(this.wsdex1=2,this.wsdex2=4,8):"ten_one"===this.betcodes?(this.wsdex1=3,this.wsdex2=4,9):void 0},setHotCold:function(){if(!this.$parent.$refs.bethead)return 1;this.initNumArr();var t=this.$parent.$refs.bethead.recentResult;if(t)for(var e=0;e<t.length;e++)if(t[e].openCode)for(var n=t[e].openCode.split(","),s=0;s<n.length;s++)this.numArr[s][n[s]].val++},setYiLou:function(){if(!this.$parent.$refs.bethead)return 1;this.initNumArr();var t=["0","1","2","3","4","5","6","7","8","9"],e=this.$parent.$refs.bethead.recentResult;if(e)for(var n=0;n<e.length;n++)if(e[n].openCode)for(var s=e[n].openCode.split(","),o=0;o<s.length;o++){this.numArr[o][s[o]].jx=!1;for(var i=0;i<t.length;i++)this.numArr[o][t[i]].jx&&(this.numArr[o][t[i]].val=this.numArr[o][t[i]].val+1)}},initNumArr:function(){this.numArr=[];for(var t=0;t<5;t++){var e={0:{val:0,jx:!0},1:{val:0,jx:!0},2:{val:0,jx:!0},3:{val:0,jx:!0},4:{val:0,jx:!0},5:{val:0,jx:!0},6:{val:0,jx:!0},7:{val:0,jx:!0},8:{val:0,jx:!0},9:{val:0,jx:!0}};this.numArr.push(e)}},betOdd:function(t,e){this.initNumArr(),this.betcodes=t;var n=e.substr(0,1),s=e.substr(1,1);this.getBetOdd(this.betcodes,n,s)},getCanWinMoney:function(){var t=this.$parent.$parent.betCount,e=this.$parent.$parent.betMoney?Number(this.$parent.$parent.betMoney):0,n=0;null!=this.lottery&&(n=this.odd);var s=this.$global.mul(n,e);return t>0?s:0},getBetCount:function(){var t=h()("#topCheck .check-bg").length,e=h()("#botCheck .check-bg").length,n=t*e;return parseInt(n)}},mounted:function(){h()(".scroll1-cont").width(390)}},p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("scroller",{ref:"scroll1",staticClass:"scroll1",attrs:{"lock-y":"","scrollbar-x":!1,bounce:!1}},[n("div",{staticClass:"scroll1-cont"},[n("button-tab",{model:{value:t.seldex,callback:function(e){t.seldex=e},expression:"seldex"}},[n("button-tab-item",{on:{"on-item-click":function(e){t.getBetOdd("ten_thousand_thousand","万","千",0)}}},[t._v("万千")]),t._v(" "),n("button-tab-item",{on:{"on-item-click":function(e){t.getBetOdd("ten_thousand_hundred","万","百",1)}}},[t._v("万百")]),t._v(" "),n("button-tab-item",{on:{"on-item-click":function(e){t.getBetOdd("ten_thousand_ten","万","十",2)}}},[t._v("万十")]),t._v(" "),n("button-tab-item",{on:{"on-item-click":function(e){t.getBetOdd("ten_thousand_one","万","个",3)}}},[t._v("万个")]),t._v(" "),n("button-tab-item",{on:{"on-item-click":function(e){t.getBetOdd("thousand_hundred","千","百",4)}}},[t._v("千百")]),t._v(" "),n("button-tab-item",{on:{"on-item-click":function(e){t.getBetOdd("thousand_ten","千","十",5)}}},[t._v("千十")]),t._v(" "),n("button-tab-item",{on:{"on-item-click":function(e){t.getBetOdd("thousand_one","千","个",6)}}},[t._v("千个")]),t._v(" "),n("button-tab-item",{on:{"on-item-click":function(e){t.getBetOdd("hundred_ten","百","十",7)}}},[t._v("百十")]),t._v(" "),n("button-tab-item",{on:{"on-item-click":function(e){t.getBetOdd("hundred_one","百","个",8)}}},[t._v("百个")]),t._v(" "),n("button-tab-item",{on:{"on-item-click":function(e){t.getBetOdd("ten_one","十","个",9)}}},[t._v("十个")])],1),t._v(" "),n("move-line",{on:{alreadAll:t.alread}})],1)]),t._v(" "),0!=t.lottery.length?n("div",{staticClass:"cont-4",attrs:{id:"betCheck"}},[n("div",{staticClass:"dingwei"},[t._v(t._s(t.betTitle1)+t._s(t.betTitle2)+"定位(中2@"+t._s(t.odd)+")")]),t._v(" "),n("div",{staticClass:"v1-gxks-bottom"},[n("div",{staticClass:"v1-shuangmian-tit"},[t._v(t._s(t.betTitle1)+" ")]),t._v(" "),n("div",{staticClass:"v1-dianshu-width"},[n("ul",{staticClass:"v1-dbmian-wrap v1-commom-ul clear-both",attrs:{id:"topCheck"}},t._l(10,function(e){return n("li",{key:e,class:["v1-lengre-box-wrap",{"check-bg":t.selectList[0][e-1]},"v1a-common"],attrs:{"data-bet-num":e-1},on:{click:function(n){t.selectItem(0,e-1,10)}}},[n("div",{staticClass:"v1-shuangmian-content"},[n("div",{staticClass:"v1-longcard-content clear-both"},[n("p",{class:["fl v1-ssc-numb-ball theme-font-color v1-number-font-size v1-ssc-unselect-number-bg",{"number-ball-bg":t.selectList[0][e-1]}]},[t._v(t._s(e-1))]),t._v(" "),n("p",{staticClass:"fr"},[t._v(t._s(t.odd))])])]),t._v(" "),t.showHotCold?n("font",{staticClass:"v1-lengre-content"},[t._v(t._s(t.numArr[t.wsdex1][e-1].val))]):t._e()],1)}),0)])]),t._v(" "),n("div",{staticClass:"v1-gxks-bottom"},[n("div",{staticClass:"v1-shuangmian-tit"},[t._v(t._s(t.betTitle2)+" ")]),t._v(" "),n("div",{staticClass:"v1-dianshu-width"},[n("ul",{staticClass:"v1-dbmian-wrap v1-commom-ul clear-both",attrs:{id:"botCheck"}},t._l(10,function(e){return n("li",{key:e,class:["v1-lengre-box-wrap",{"check-bg":t.selectList[1][e-1]},"v1a-common"],attrs:{"data-bet-num":e-1},on:{click:function(n){t.selectItem(1,e-1,10)}}},[n("div",{staticClass:"v1-shuangmian-content"},[n("div",{staticClass:"v1-longcard-content clear-both"},[n("p",{class:["fl v1-ssc-numb-ball theme-font-color v1-number-font-size v1-ssc-unselect-number-bg",{"number-ball-bg":t.selectList[1][e-1]}]},[t._v(t._s(e-1))]),t._v(" "),n("p",{staticClass:"fr"},[t._v(t._s(t.odd))])])]),t._v(" "),t.showHotCold?n("font",{staticClass:"v1-lengre-content"},[t._v(t._s(t.numArr[t.wsdex2][e-1].val))]):t._e()],1)}),0)])])]):n("div",[n("bet-loader")],1)],1)},x=[],C=n("XyMi"),k=s,w=Object(C.a)(g,p,x,!1,k,null,null);e.default=w.exports},"9P2a":function(t,e,n){var s=n("nfbn");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var o=n("rjj0").default;o("7af351df",s,!0,{})},nfbn:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"",""])}});