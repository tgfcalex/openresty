webpackJsonp([259],{AJFM:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,"",""])},Qm9V:function(e,t,a){"use strict";function o(e){a("z6fI")}Object.defineProperty(t,"__esModule",{value:!0});var r=a("WGHO"),n=a("0iPh"),s=a.n(n),l=a("/0UN"),d=a("hGvq"),u=function(){return a.e(120).then(a.bind(null,"tsXc"))},i=(l.a,d.a,function(){return a.e(120).then(a.bind(null,"tsXc"))}),v={components:{Checker:l.a,CheckerItem:d.a,BetLoader:i},props:["activeTab","betHelpDialogHandler","isSelected","code","showHotCold"],data:function(){return{lottery:[],playCode:"syx5_one_digital",betTitle:["万位","千位","百位","十位","个位"],numArr:[],selectList:[],isOpen:!0,lotteryList:null}},created:function(){this.initNumArr(),this.getBetOdd()},methods:{initSelectList:function(e){for(var t=0,a=e.length;t<a;t++)this.selectList.push([!1,!1,!1,!1,!1,!1,!1,!1,!1,!1])},boom:function(e,t,a){var o=0;"万位"===e?o=0:"千位"===e?o=1:"百位"===e?o=2:"十位"===e?o=3:"个位"===e&&(o=4),this.isSelected(r.c.selectItem(o,t,a))},getNumByDxds:function(e){return"大"===e?11:"小"===e?12:"单"===e?13:"双"===e?14:void 0},getBetOdd:function(){var e=this;this.$api.get(this.$luyou.LOTTO.ONE_WORD,{code:this.code,betCode:"syx5_ten_thousand,syx5_thousand,syx5_hundred,syx5_ten,syx5_one",model:"tradition"},function(t){e.lottery=t.data;var a={"万位":[],"千位":[],"百位":[],"十位":[],"个位":[]};for(var o in e.lottery)for(var r in e.lottery[o]){var n=e.lottery[o][r];"syx5_ten_thousand"===n.betCode?parseInt(n.betNum)?a["万位"][parseInt(n.betNum)-1]={betNum:n.betNum,betCode:n.betCode,playCode:n.playCode,odd:n.odd}:a["万位"][e.getNumByDxds(n.betNum)]={betNum:n.betNum,betCode:n.betCode,playCode:n.playCode,odd:n.odd}:"syx5_thousand"===n.betCode?parseInt(n.betNum)?a["千位"][parseInt(n.betNum)-1]={betNum:n.betNum,betCode:n.betCode,playCode:n.playCode,odd:n.odd}:a["千位"][e.getNumByDxds(n.betNum)]={betNum:n.betNum,betCode:n.betCode,playCode:n.playCode,odd:n.odd}:"syx5_hundred"===n.betCode?parseInt(n.betNum)?a["百位"][parseInt(n.betNum)-1]={betNum:n.betNum,betCode:n.betCode,playCode:n.playCode,odd:n.odd}:a["百位"][e.getNumByDxds(n.betNum)]={betNum:n.betNum,betCode:n.betCode,playCode:n.playCode,odd:n.odd}:"syx5_ten"===n.betCode?parseInt(n.betNum)?a["十位"][parseInt(n.betNum)-1]={betNum:n.betNum,betCode:n.betCode,playCode:n.playCode,odd:n.odd}:a["十位"][e.getNumByDxds(n.betNum)]={betNum:n.betNum,betCode:n.betCode,playCode:n.playCode,odd:n.odd}:"syx5_one"===n.betCode&&(parseInt(n.betNum)?a["个位"][parseInt(n.betNum)-1]={betNum:n.betNum,betCode:n.betCode,playCode:n.playCode,odd:n.odd}:a["个位"][e.getNumByDxds(n.betNum)]={betNum:n.betNum,betCode:n.betCode,playCode:n.playCode,odd:n.odd})}e.lotteryList=a},function(t){t&&e.toast(e.$api.tip(t))})},getArrByArrObj:function(e){for(var t=[],a=["01","02","03","04","05","06","07","08","09","10","11","大","小","单","双"],o=0;o<e.length;o++){var r=[];t.push(r);for(var n=0;n<a.length;n++)t[o].push(e[o][a[n]].val)}return t},setHotCold:function(){if(!this.$parent.$refs.bethead)return 1;this.initNumArr();var e=this.$parent.$refs.bethead.recentResult;if(e)for(var t=0;t<e.length;t++)if(e[t].openCode)for(var a=e[t].openCode.split(","),o=0;o<a.length;o++)this.numArr[o][a[o]].val=this.numArr[o][a[o]].val+1,11!==Number(a[o])&&(Number(a[o])>5?this.numArr[o]["大"].val++:this.numArr[o]["小"].val++,Number(a[o])%2==0?this.numArr[o]["双"].val++:this.numArr[o]["单"].val++);this.numArr=this.getArrByArrObj(this.numArr)},setYiLou:function(){if(!this.$parent.$refs.bethead)return 1;this.initNumArr();for(var e=this.$parent.$refs.bethead.recentResult,t=[],a=0;a<5;a++){var o={"01":{val:0,jx:!0},"02":{val:0,jx:!0},"03":{val:0,jx:!0},"04":{val:0,jx:!0},"05":{val:0,jx:!0},"06":{val:0,jx:!0},"07":{val:0,jx:!0},"08":{val:0,jx:!0},"09":{val:0,jx:!0},10:{val:0,jx:!0},11:{val:0,jx:!0}};t.push(o)}if(e)for(var r=0;r<5;r++)for(var n=0;n<e.length;n++)for(var s=e[n].openCode.split(","),l=0;l<11;l++)parseInt(s[r])!==l+1&&t[r][l<9?"0"+(1*l+1):l+1+""].jx?t[r][l<9?"0"+(1*l+1):l+1+""].val+=1:t[r][l<9?"0"+(1*l+1):l+1+""].jx=!1;for(var d=[],u=["01","02","03","04","05","06","07","08","09","10","11"],i=0;i<t.length;i++){var v=[];d.push(v);for(var b=0;b<u.length;b++)d[i].push(t[i][u[b]].val)}for(var h=d,m=this.getTwoSideYl(e),p=[],c=0;c<h.length;c++){var f=[];p.push(f);for(var C in h[c])isNaN(h[c][C])||p[c].push(h[c][C])}for(var N=0;N<m.length;N++)p[N].push(m[N]["大"].val),p[N].push(m[N]["小"].val),p[N].push(m[N]["单"].val),p[N].push(m[N]["双"].val);this.numArr=p},getTwoSideYl:function(e){for(var t=[],a=0;a<5;a++){var o={"大":{val:0,jx:!0},"小":{val:0,jx:!0},"单":{val:0,jx:!0},"双":{val:0,jx:!0},"质":{val:0,jx:!0},"合":{val:0,jx:!0}};t.push(o)}var r=["大","小","单","双","质","合"];if(e)for(var n=0;n<e.length;n++)if(e[n].openCode)for(var l=e[n].openCode.split(","),d=0,u=0;u<l.length;u++){var i=[];d+=Number(l[u]),11!==Number(l[u])&&(Number(l[u])>5?i.push("大"):i.push("小"),Number(l[u])%2==0?i.push("双"):i.push("单")),s.a.inArray(Number(l[u]),this.zhArr)>=0?i.push("质"):i.push("合");for(var v=0;v<i.length;v++)t[u][i[v]].jx=!1;for(var b=0;b<r.length;b++)t[u][r[b]].jx&&(t[u][r[b]].val=t[u][r[b]].val+1)}return t},initNumArr:function(){this.numArr=[];for(var e=0;e<5;e++){var t={"01":{val:0,jx:!0},"02":{val:0,jx:!0},"03":{val:0,jx:!0},"04":{val:0,jx:!0},"05":{val:0,jx:!0},"06":{val:0,jx:!0},"07":{val:0,jx:!0},"08":{val:0,jx:!0},"09":{val:0,jx:!0},10:{val:0,jx:!0},11:{val:0,jx:!0},"大":{val:0,jx:!0},"小":{val:0,jx:!0},"单":{val:0,jx:!0},"双":{val:0,jx:!0}};this.numArr.push(t)}}}},b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[null!=e.lotteryList?a("div",{staticClass:"cont-1"},[e._l(e.lotteryList,function(t,o,r){return[a("div",{staticClass:"v1-gxks-bottom"},[a("div",{staticClass:"v1-shuangmian-tit"},[e._v(e._s(o))]),e._v(" "),a("div",{staticClass:"v1-dianshu-width"},[a("ul",{staticClass:"v1-dbmian-wrap v1-commom-ul clear-both"},e._l(t,function(t,n){return a("li",{key:n,class:["v1-lengre-box-wrap",{"check-bg":!1},"v1a-common"],attrs:{"data-bet-num":t.betNum,"data-bet-code":t.betCode,"data-play-code":t.playCode,"data-odd":t.odd},on:{click:function(t){e.boom(o,n,15)}}},[a("div",{staticClass:"v1-shuangmian-content"},[a("div",{staticClass:"v1-longcard-content clear-both"},[a("p",{class:["fl","v1-ssc-numb-ball theme-font-color v1-number-font-size v1-ssc-unselect-number-bg ",{"number-ball-bg":!1}]},[e._v(e._s(t.betNum))]),e._v(" "),a("p",{staticClass:"fr"},[e._v(e._s(t.odd))])])]),e._v(" "),e.showHotCold?a("font",{staticClass:"v1-lengre-content"},[e._v(e._s(e.numArr[r][n]))]):e._e()],1)}),0)])])]})],2):a("div",[a("bet-loader")],1)])},h=[],m=a("XyMi"),p=o,c=Object(m.a)(v,b,h,!1,p,null,null);t.default=c.exports},z6fI:function(e,t,a){var o=a("AJFM");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=a("rjj0").default;r("1e179013",o,!0,{})}});