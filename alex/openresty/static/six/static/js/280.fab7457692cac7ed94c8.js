webpackJsonp([280],{"Fq+z":function(t,e,i){e=t.exports=i("FZ+f")(!1),e.push([t.i,"",""])},yWxm:function(t,e,i){"use strict";function r(t){i("zMHk")}Object.defineProperty(e,"__esModule",{value:!0});var n=i("mvHQ"),s=i.n(n),a=i("MVRq"),l=i("V0DB"),o=i("/0UN"),h=i("hGvq"),u=i("S8Wg"),c=i("0iPh"),d=i.n(c),v=i("WGHO"),m=function(){return i.e(121).then(i.bind(null,"t3Lp"))},b=function(){return i.e(120).then(i.bind(null,"tsXc"))},f=(a.a,l.a,o.a,h.a,u.a,function(){return i.e(121).then(i.bind(null,"t3Lp"))}),p=function(){return i.e(120).then(i.bind(null,"tsXc"))},g={components:{MoveLine:f,ButtonTab:a.a,ButtonTabItem:l.a,Checker:o.a,CheckerItem:h.a,Scroller:u.a,BetLoader:p},props:["activeTab","betHelpDialogHandler","code","isSelected","betCode","betName","showHotCold","resetBetInfo"],data:function(){return{lottery:[],playCode:"group_three",betTitle:"前三组选三",odd:"",seldex:0,betcodes:null,numArr:[],isFirst:!1,selectList:[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]}},created:function(){this.initNumArr();var t=this.betCode?this.betCode:"group3_first_three",e=this.betName?this.betName:"前三组选三";this.getBetOdd(t,e)},methods:{alread:function(){document.getElementById("v1a-move").style.width="70px"},selectItem:function(t,e,i){this.isSelected(v.c.selectItem(t,e,i)),this.isSelecteds()},getBetOdd:function(t,e,i){var r=this;if(v.c.resetSelected(),this.isFirst){var n=10+80*i;d()("#v1a-move").animate({marginLeft:n},100)}this.isFirst=!0,this.resetBetInfo(),d()("#betCheck .item").removeClass("item-selected"),this.betcodes=t,this.seldex=this.getSelect(),this.$emit("update:betCode",t),this.betTitle=e,this.selectList=[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],this.$api.get(this.$luyou.LOTTO.GET_ODD,{code:this.code,betCodes:t},function(t){r.lottery=t.data[0],r.$nextTick(function(){r.odd="",r.$emit("gengxin")})},function(t){t&&r.toast(r.$api.tip(t))})},isSelecteds:function(){var t=d()("#betCheck .check-bg").length;this.lottery&&void 0!==this.lottery[t]?this.odd=this.lottery[t].odd:this.odd=""},getBetForm:function(){var t=this,e={code:this.code,expect:null,quantity:0,totalMoney:0,playModel:"tradition",betOrders:[]},i=d()("#betCheck .check-bg");if(i.length<5)return this.toast("请选择5个以上号码"),1;this.odd=this.lottery[i.length].odd;var r=d()("#betMoney").val(),n="";i.each(function(){n=n+d()(this).attr("data-bet-num")+","}),e.betOrders.push({betNum:n,betCode:this.betCode,playCode:this.playCode,betAmount:r,odd:this.odd}),e.totalMoney=t.$global.add(e.totalMoney,r),e.quantity=t.$global.add(e.quantity,1),localStorage.betForm=s()(e),this.$router.push({path:"/lotto/confirm-bet",query:{name:this.$route.query.name}})},getSelect:function(){return"group3_first_three"===this.betcodes?0:"group3_in_three"===this.betcodes?1:"group3_after_three"===this.betcodes?2:void 0},setHotCold:function(){if(!this.$parent.$refs.bethead)return 1;this.initNumArr();var t=this.$parent.$refs.bethead.recentResult;if(t)for(var e=0;e<t.length;e++)if(t[e].openCode)for(var i=t[e].openCode.split(","),r=0;r<i.length;r++)this.numArr[r][i[r]].val++},setYiLou:function(){if(!this.$parent.$refs.bethead)return 1;this.initNumArr();var t=["0","1","2","3","4","5","6","7","8","9"],e=this.$parent.$refs.bethead.recentResult;if(e)for(var i=0;i<e.length;i++)if(e[i].openCode)for(var r=e[i].openCode.split(","),n=0;n<r.length;n++){this.numArr[n][r[n]].jx=!1;for(var s=0;s<t.length;s++)this.numArr[n][t[s]].jx&&(this.numArr[n][t[s]].val=this.numArr[n][t[s]].val+1)}},getHotColdNumArr:function(t){for(var e={0:{val:0,jx:!0},1:{val:0,jx:!0},2:{val:0,jx:!0},3:{val:0,jx:!0},4:{val:0,jx:!0},5:{val:0,jx:!0},6:{val:0,jx:!0},7:{val:0,jx:!0},8:{val:0,jx:!0},9:{val:0,jx:!0}},i=0;i<10;i++)0===this.seldex?e[i].val=this.numArr[0][i].val+this.numArr[1][i].val+this.numArr[2][i].val:1===this.seldex?e[i].val=this.numArr[1][i].val+this.numArr[2][i].val+this.numArr[3][i].val:2===this.seldex&&(e[i].val=this.numArr[2][i].val+this.numArr[3][i].val+this.numArr[4][i].val);return e[t].val},getYiLouNumArr:function(t){for(var e={0:{val:0,jx:!0},1:{val:0,jx:!0},2:{val:0,jx:!0},3:{val:0,jx:!0},4:{val:0,jx:!0},5:{val:0,jx:!0},6:{val:0,jx:!0},7:{val:0,jx:!0},8:{val:0,jx:!0},9:{val:0,jx:!0}},i=0;i<10;i++)if(0===this.seldex){var r=[];r.push(this.numArr[0][i].val),r.push(this.numArr[1][i].val),r.push(this.numArr[2][i].val),e[i].val=Math.min.apply({},r)}else if(1===this.seldex){var n=[];n.push(this.numArr[1][i].val),n.push(this.numArr[2][i].val),n.push(this.numArr[3][i].val),e[i].val=Math.min.apply({},n)}else if(2===this.seldex){var s=[];s.push(this.numArr[2][i].val),s.push(this.numArr[3][i].val),s.push(this.numArr[4][i].val),e[i].val=Math.min.apply({},s)}return e[t].val},getNumArr:function(t){if(!this.$parent.$refs.bethead)return 1;var e=this.$parent.$refs.seleHead.switchHotCold;return 0===e?this.getHotColdNumArr(t):1===e?this.getYiLouNumArr(t):void 0},initNumArr:function(){this.numArr=[];for(var t=0;t<5;t++){var e={0:{val:0,jx:!0},1:{val:0,jx:!0},2:{val:0,jx:!0},3:{val:0,jx:!0},4:{val:0,jx:!0},5:{val:0,jx:!0},6:{val:0,jx:!0},7:{val:0,jx:!0},8:{val:0,jx:!0},9:{val:0,jx:!0}};this.numArr.push(e)}},randomBetNum:function(){for(var t=[];t.length<5;){var e=parseInt(10*Math.random());-1===t.indexOf(e)&&t.push(e)}for(var i=0;i<t.length;i++)this.isSelected(!0,t[i])},betOdd:function(t,e){this.initNumArr(),this.betcodes=t,this.getBetOdd(this.betcodes,e)},getCanWinMoney:function(){var t=this.$parent.$parent.betCount,e=this.$parent.$parent.betMoney?Number(this.$parent.$parent.betMoney):0,i=0,r=d()("#betCheck .check-bg").length;this.lottery&&void 0!==this.lottery[r]&&(i=this.lottery[r].odd);var n=this.$global.mul(i,e);return t>0?n:0},getBetCount:function(){return d()("#betCheck .check-bg").length>4?1:0}},mounted:function(){d()(".scroll1-cont").width(250)}},x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("scroller",{staticClass:"scroll1",attrs:{"lock-y":"","scrollbar-x":!1}},[i("div",{staticClass:"scroll1-cont"},[i("button-tab",{model:{value:t.seldex,callback:function(e){t.seldex=e},expression:"seldex"}},[i("button-tab-item",{on:{"on-item-click":function(e){t.getBetOdd("group3_first_three","前三组选三",0)}}},[t._v("前三组选三")]),t._v(" "),i("button-tab-item",{on:{"on-item-click":function(e){t.getBetOdd("group3_in_three","中三组选三",1)}}},[t._v("中三组选三")]),t._v(" "),i("button-tab-item",{on:{"on-item-click":function(e){t.getBetOdd("group3_after_three","后三组选三",2)}}},[t._v("后三组选三")])],1),t._v(" "),i("move-line",{on:{alreadAll:t.alread}})],1)]),t._v(" "),0!=t.lottery.length?i("div",{staticClass:"cont-1"},[i("div",{staticClass:"dingwei"},[t._v(t._s(t.betTitle)+"@"+t._s(t.odd)+"(请选择5个以上号码) ")]),t._v(" "),i("div",{attrs:{id:"betCheck"}},[i("div",{staticClass:"v1-shuangmian-tit"},[t._v(t._s(t.betTitle)+" ")]),t._v(" "),i("div",{staticClass:"v1-dianshu-width"},[i("ul",{staticClass:"v1-dbmian-wrap v1-commom-ul clear-both"},t._l(10,function(e){return i("li",{key:e,class:["v1-lengre-box-wrap",{"check-bg":t.selectList[e-1]},"v1a-common"],attrs:{"data-bet-num":e-1},on:{click:function(i){t.selectItem(0,e-1,0)}}},[i("div",{staticClass:"v1-shuangmian-content"},[i("div",{staticClass:"v1-longcard-content clear-both"},[i("p",{class:["fl v1-ssc-numb-ball theme-font-color v1-number-font-size v1-ssc-unselect-number-bg ",{"number-ball-bg":t.selectList[e-1]}]},[t._v(t._s(e-1))])])]),t._v(" "),t.showHotCold?i("font",{staticClass:"v1-lengre-content"},[t._v(t._s(t.getNumArr(e-1)))]):t._e()],1)}),0)])])]):i("div",[i("bet-loader")],1)],1)},C=[],_=i("XyMi"),A=r,y=Object(_.a)(g,x,C,!1,A,null,null);e.default=y.exports},zMHk:function(t,e,i){var r=i("Fq+z");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("rjj0").default;n("cfbbaf2e",r,!0,{})}});