(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4d7899b4"],{"023c":function(e,t,n){"use strict";var s=n("7618");n.n(s).a},"219d":function(e,t,n){"use strict";n.r(t),n("8e6e"),n("ac6a"),n("456d");var s=n("bd86"),i=n("77cc"),a=n("cfdb"),r=n("18a7"),u=n("f532").a,o=n("2877"),l=Object(o.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("one",{ref:"viewComponent",attrs:{lrylList:e.lrylList,viewObject:e.viewObject,randomArr:e.dictBetCodes[e.betCodes].randomArr},on:{emitList:e.seleHandle}})],1)}),[],!1,null,"7f45aede",null).exports,h=(n("55dd"),n("37fd")),c={props:["betCodes","lrylList"],components:{One:h.a},data:function(){return{dictBetCodes:{ssc_sanxing_zhixuan_hshz:{nameList:["直选和值"],max:27,min:0},ssc_sanxing_zhixuan_qshz:{nameList:["直选和值"],max:27,min:0},ssc_sanxing_zuxuan_hszxhz:{nameList:["组选和值"],max:26,min:1},ssc_sanxing_zuxuan_qszxhz:{nameList:["组选和值"],max:26,min:1},ssc_erxing_zhixuan_qehz:{nameList:["直选和值"],max:18,min:0},ssc_erxing_zuxuan_qehz:{nameList:["组选和值"],max:17,min:1}},viewObject:null}},methods:{seleHandle:function(e){var t=[];"ssc_sanxing_zhixuan_hshz"===this.betCodes||"ssc_sanxing_zhixuan_qshz"===this.betCodes?t=this.getHzCount(e[0]):"ssc_sanxing_zuxuan_hszxhz"===this.betCodes||"ssc_sanxing_zuxuan_qszxhz"===this.betCodes?t=this.getHszxHzCount(e[0]):"ssc_erxing_zhixuan_qehz"===this.betCodes?t=this.getQianErHzCount(e[0]):"ssc_erxing_zuxuan_qehz"===this.betCodes&&(t=this.getQianErZxHzCount(e[0])),this.$emit("emitList",t)},getHzCount:function(e){for(var t=0,n=0;n<e.length;n++)t+=s(parseInt(e[n]));return{betNum:e.sort((function(e,t){return e-t})).join("|"),num:t};function s(e){13<e&&(e-=2*(e-14)+1);var t=1;if(parseInt(e)){if(e<10)for(var n=0;n<e;n++)t+=n+2}else t=1;if(9<e){for(var s=0;s<e-9;s++)t+=10-2*(s+1);t+=54}return t}},getHszxHzCount:function(e){var t,n,s=0,i=0,a=[];t=e;for(var r=0;r<t.length;r++){var u=[];for(s=parseInt(t[r]),i=parseInt(t[r]);0<=s;)u.push(s),s--;for(var o=0;o<u.length;o++)for(var l=0;l<u.length;l++)for(var h=0;h<u.length;h++)if(u[o]+u[l]+u[h]===i&&u[h]<=9&&u[l]<=9&&u[o]<=9&&u[l]!==u[o]&&u[o]!==u[h]&&u[h]!==u[o]){var c=[];c.push(u[o]),c.push(u[l]),c.push(u[h]),c.sort(),a.push(c.join(""))}}return n=this.$zsUniqueArr(a).length,{betNum:e.sort((function(e,t){return e-t})).join("|"),num:n}},getQianErHzCount:function(e){if(!e)return 0;for(var t=[],n=[],s=e,i=0;i<s.length;i++){for(var a=parseInt(s[i]),r=parseInt(s[i]);0<=a;)n.push(a),a--;for(var u=0;u<n.length;u++)for(var o=0;o<n.length;o++)n[u]+n[o]===r&&n[u]<=9&&n[o]<=9&&t.push(n[u]+""+n[o])}return t=this.$zsUniqueArr(t).length,{betNum:e.sort((function(e,t){return e-t})).join("|"),num:t}},getQianErZxHzCount:function(e){var t=[],n=e,s=[],i=0,a=0;if(n.length<=0)return 0;for(var r=0;r<n.length;r++){for(i=parseInt(n[r]),a=parseInt(n[r]);0<=i;)s.push(parseInt(i)),i--;for(var u=0;u<s.length;u++)for(var o=0;o<s.length;o++)if(s[u]+s[o]===a&&s[u]<=9&&s[o]<=9&&s[u]!==s[o]){var l=[];l.push(s[u]),l.push(s[o]),l.sort(),t.push(l.join(""))}}return t.length<=0?0:(t=this.$zsUniqueArr(t).length,{betNum:e.sort((function(e,t){return e-t})).join("|"),num:t})},rest:function(){this.$refs.viewComponent.hadleViewResult()}},watch:{betCodes:{handler:function(e){this.viewObject=this.$getViewResult(1,e,this.dictBetCodes[e].nameList,this.dictBetCodes[e].min,this.dictBetCodes[e].max,!1)},immediate:!0}}},d=Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("one",{ref:"viewComponent",attrs:{lrylList:e.lrylList,viewObject:e.viewObject,randomArr:[1]},on:{emitList:e.seleHandle}})],1)}),[],!1,null,null,null).exports,m=(n("c5f6"),{props:["betCodes","lrylList"],components:{One:h.a},data:function(){return{dictBetCodes:{ssc_sanxing_zhixuan_hskd:{nameList:["跨度"]},ssc_sanxing_zhixuan_qskd:{nameList:["跨度"]},ssc_erxing_zhixuan_qekd:{nameList:["跨度"]}},viewObject:null}},methods:{seleHandle:function(e){var t=[];"ssc_sanxing_zhixuan_hskd"===this.betCodes||"ssc_sanxing_zhixuan_qskd"===this.betCodes?t=this.getHskdCount(e[0]):"ssc_erxing_zhixuan_qekd"===this.betCodes&&(t=this.getQianErKdCount(e[0])),this.$emit("emitList",t)},getHskdCount:function(e){for(var t,n=[],s=[],i=[],a=[],r=0;r<10;r++)i[s[n[r]=r]=r]=r;var u=0,o=0,l=0;t=e;for(var h=0;h<t.length;h++){l=parseInt(t[h]);for(var c=0;c<n.length;c++)for(var d=0;d<s.length;d++)for(var m=0;m<i.length;m++)(u=(u=n[c]>s[d]?n[c]:s[d])>i[m]?u:i[m])-(o=(o=n[c]<s[d]?n[c]:s[d])<i[m]?o:i[m])===l&&(a.push(c+""+d+m),o=u=0)}return{betNum:e.sort((function(e,t){return e-t})).join(","),num:a.length}},getQianErKdCount:function(e){var t,n=[],s=0;if((t=e).length<=0)return 0;for(var i=0;i<t.length;i++){s=parseInt(t[i]);for(var a=0;a<10;a++)for(var r=0;r<10;r++){var u=[];u.push(Number(a)),u.push(Number(r)),u.sort(),parseInt(u[1])-parseInt(u[0])===s&&n.push(a+""+r)}}return n=this.$zsUniqueArr(n),{betNum:e.sort((function(e,t){return e-t})).join(","),num:n.length}},rest:function(){this.$refs.viewComponent.hadleViewResult()}},watch:{betCodes:{handler:function(e){this.viewObject=this.$getViewResult(1,e,this.dictBetCodes[e].nameList,0,9,!1)},immediate:!0}}}),_=Object(o.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("one",{ref:"viewComponent",attrs:{lrylList:e.lrylList,viewObject:e.viewObject,randomArr:[1]},on:{emitList:e.seleHandle}})],1)}),[],!1,null,"0bfb9d3a",null).exports,f={props:["betCodes","lrylList"],components:{One:h.a},data:function(){return{dictBetCodes:{ssc_sanxing_zuxuan_qsz3fs:{nameList:["组三复式"],randomArr:[2]},ssc_sanxing_zuxuan_hsz3fs:{nameList:["组三复式"],randomArr:[2]},ssc_sanxing_zuxuan_hsz6fs:{nameList:["组六复式"],randomArr:[3]},ssc_sanxing_zuxuan_qsz6fs:{nameList:["组六复式"],randomArr:[2]},ssc_erxing_zuxuan_qefs:{nameList:["组选复式"],randomArr:[2]},ssc_sanxing_zuxuan_hszxbd:{nameList:["组选包胆"],limitArr:[[0],[1]],randomArr:[2],disableBtn:!0},ssc_sanxing_zuxuan_qszxbd:{nameList:["组选包胆"],limitArr:[[0],[1]],randomArr:[2],disableBtn:!0},ssc_erxing_zuxuan_qebd:{nameList:["组选包胆"],limitArr:[[0],[1]],randomArr:[1],disableBtn:!0}},viewObject:null}},methods:{seleHandle:function(e){var t=[];"ssc_sanxing_zuxuan_qsz3fs"===this.betCodes||"ssc_sanxing_zuxuan_hsz3fs"===this.betCodes?t=this.getHszxfsCount(e):"ssc_sanxing_zuxuan_hsz6fs"===this.betCodes||"ssc_sanxing_zuxuan_qsz6fs"===this.betCodes?t=this.getHsZuLiuCount(e):"ssc_erxing_zuxuan_qefs"===this.betCodes?t=this.getQianErFsCount(e):"ssc_sanxing_zuxuan_hszxbd"===this.betCodes||"ssc_sanxing_zuxuan_qszxbd"===this.betCodes?t={betNum:e[0][0],num:0===e[0].length?0:54}:"ssc_erxing_zuxuan_qebd"===this.betCodes&&(t={betNum:e[0][0],num:0===e[0].length?0:9}),this.$emit("emitList",t)},getHsZuLiuCount:function(e){for(var t=[],n=e[0],s=0;s<n.length;s++)for(var i=0;i<n.length;i++)for(var a=0;a<n.length;a++)if(n[s]!==n[i]&&n[i]!==n[a]&&n[s]!==n[a]){var r=[];r.push(n[s]),r.push(n[i]),r.push(n[a]),r.sort(),t.push(r.join(""))}var u=this.zuXuanArr(t).length;return{betNum:this.$handleOfficialbetNumOne(e,","),num:u}},getHszxfsCount:function(e){for(var t=e[0],n=[],s=0;s<t.length-1;s++)for(var i=1;i<t.length;i++)t[i]!==t[s]&&(n.push(t[s]+""+t[i]+t[i]),n.push(t[i]+""+t[s]+t[s]));var a=this.$zsUniqueArr(n).length;return{betNum:this.$handleOfficialbetNumOne(e,","),num:a}},getQianErFsCount:function(e){var t=e[0],n=this.$getSscFsCount(t.length,2);return{betNum:this.$handleOfficialbetNumOne(e,","),num:n}},zuXuanArr:function(e){var t=[];e.sort();for(var n=0;n<e.length;n++)e[n]!==e[n+1]&&(t[t.length]=e[n]);return t},rest:function(){this.$refs.viewComponent.hadleViewResult()}},watch:{betCodes:{handler:function(e){this.viewObject=this.$getViewResult(1,e,this.dictBetCodes[e].nameList,0,9,!1)},immediate:!0}}},g=Object(o.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("one",{ref:"viewComponent",attrs:{lrylList:e.lrylList,viewObject:e.viewObject,disableBtn:e.dictBetCodes[e.betCodes].disableBtn,limitArr:e.dictBetCodes[e.betCodes].limitArr,randomArr:e.dictBetCodes[e.betCodes].randomArr},on:{emitList:e.seleHandle}})],1)}),[],!1,null,"1f8f201e",null).exports,x={props:["betCodes","lrylList"],components:{One:h.a},data:function(){return{dictBetCodes:{ssc_sanxing_zuxuan_hshzws:{nameList:["和值尾数"]},ssc_sanxing_zuxuan_qshzws:{nameList:["和值尾数"]}}}},methods:{seleHandle:function(e){var t={betNum:this.$handleOfficialbetNumOne(e),num:e[0].length};this.$emit("emitList",t)},rest:function(){this.$refs.viewComponent.hadleViewResult()}},watch:{betCodes:{handler:function(e){this.viewObject=this.$getViewResult(1,e,this.dictBetCodes[e].nameList,0,9,!1)},immediate:!0}}},p=Object(o.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("one",{ref:"viewComponent",attrs:{lrylList:e.lrylList,viewObject:e.viewObject,randomArr:[1]},on:{emitList:e.seleHandle}})],1)}),[],!1,null,"a707405a",null).exports,v=n("f4fd"),y={props:["betCodes","lrylList"],components:{Three:v.a},data:function(){return{viewObject:null}},methods:{seleHandle:function(e){var t={betNum:e[0].join("|"),num:e[0].length};this.$emit("emitList",t)},rest:function(){this.$refs.viewComponent.hadleViewResult()}},watch:{betCodes:{handler:function(e){this.viewObject=this.$getViewResult(3,e,["特殊号"],0,9,!1,["豹子","顺子","对子"])},immediate:!0}}},b=Object(o.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("three",{ref:"viewComponent",attrs:{lrylList:e.lrylList,viewObject:e.viewObject,betCodes:e.betCodes,randomArr:[1]},on:{emitList:e.seleHandle}})],1)}),[],!1,null,"5f051e01",null).exports,z={props:["betCodes","lrylList"],components:{One:h.a},data:function(){return{dictBetCodes:{ssc_budingwei_q3ym:{nameList:["前三一码"],randomArr:[1]},ssc_budingwei_h3ym:{nameList:["后三一码"],randomArr:[1]},ssc_budingwei_q4ym:{nameList:["前四一码"],randomArr:[1]},ssc_budingwei_h4ym:{nameList:["后四一码"],randomArr:[1]},ssc_budingwei_q3em:{nameList:["前三二码"],len:2,randomArr:[2]},ssc_budingwei_h3em:{nameList:["后三二码"],len:2,randomArr:[2]},ssc_budingwei_q4em:{nameList:["前四二码"],len:2,randomArr:[2]},ssc_budingwei_h4em:{nameList:["后四二码"],len:2,randomArr:[2]},ssc_budingwei_wxem:{nameList:["五星二码"],len:2,randomArr:[2]},ssc_budingwei_wxsm:{nameList:["五星三码"],len:3,randomArr:[3]}},viewObject:null}},methods:{seleHandle:function(e){var t={};t=this.dictBetCodes[this.betCodes].len?{betNum:this.$handleOfficialbetNumOne(e,","),num:this.$getSscFsCount(e[0].length,this.dictBetCodes[this.betCodes].len)}:{betNum:this.$handleOfficialbetNumOne(e,","),num:e[0].length},this.$emit("emitList",t)},rest:function(){this.$refs.viewComponent.hadleViewResult()}},watch:{betCodes:{handler:function(e){this.viewObject=this.$getViewResult(1,e,this.dictBetCodes[e].nameList,0,9,!1)},immediate:!0}}},L=Object(o.a)(z,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("one",{ref:"viewComponent",attrs:{lrylList:e.lrylList,viewObject:e.viewObject,randomArr:e.dictBetCodes[e.betCodes].randomArr},on:{emitList:e.seleHandle}})],1)}),[],!1,null,"5bc918a2",null).exports,C={props:["betCodes","lrylList"],components:{One:h.a},data:function(){return{viewObject:null}},methods:{seleHandle:function(e){var t={betNum:this.$handleOfficialbetNumOne(e),num:this.getDgCount(e)};this.$emit("emitList",t)},getDgCount:function(e){for(var t=0,n=0;n<e.length;n++)t+=e[n].length;return t},rest:function(){this.$refs.viewComponent.hadleViewResult()}},watch:{betCodes:{handler:function(e){this.viewObject=this.$getViewResult(1,e,["万位","千位","百位","十位","个位"],0,9,!1)},immediate:!0}}},w=Object(o.a)(C,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("one",{ref:"viewComponent",attrs:{lrylList:e.lrylList,viewObject:e.viewObject,randomArr:[1]},on:{emitList:e.seleHandle}})],1)}),[],!1,null,"24d23373",null).exports,O={props:["betCodes","lrylList"],components:{Three:v.a},data:function(){return{dictBetCodes:{ssc_daxiaodanshuang_q2:{nameList:["万位","千位"],subList:["大","小","单","双"],randomArr:[1,1]},ssc_daxiaodanshuang_h2:{nameList:["十位","个位"],subList:["大","小","单","双"],randomArr:[1,1]},ssc_daxiaodanshuang_q3:{nameList:["万位","千位","百位"],subList:["大","小","单","双"],randomArr:[1,1,1]},ssc_daxiaodanshuang_h3:{nameList:["百位","十位","个位"],subList:["大","小","单","双"],randomArr:[1,1,1]}}}},methods:{seleHandle:function(e){var t={betNum:this.$handleOfficialbetNumOne(e),num:this.getFsCount(e)};this.$emit("emitList",t)},getFsCount:function(e){for(var t=1,n=0;n<e.length;n++)t*=e[n].length;return t},rest:function(){this.$refs.viewComponent.hadleViewResult()}},watch:{betCodes:{handler:function(e){var t=this.$getViewResult(3,e,this.dictBetCodes[this.betCodes].nameList,0,9,!1,this.dictBetCodes[this.betCodes].subList);this.viewObject=t},immediate:!0}}},$=Object(o.a)(O,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("three",{ref:"viewComponent",attrs:{lrylList:e.lrylList,betCodes:e.betCodes,viewObject:e.viewObject,randomArr:e.dictBetCodes[e.betCodes].randomArr},on:{emitList:e.seleHandle}})],1)}),[],!1,null,"a0fd4c6c",null).exports,j={props:["betCodes","lrylList"],components:{One:h.a},data:function(){return{dictBetCodes:{ssc_renxuan2_zxhz:{nameList:["直选和值"],start:0,end:18,checkList:["十","个"],getArr:this.getRenXuan2ZxhzCount,randomArr:[1]},ssc_renxuan2_zuxhz:{nameList:["组选和值"],start:1,end:17,checkList:["十","个"],getArr:this.getRenXuan2ZuxhzCount,randomArr:[1]},ssc_renxuan3_zxhz:{nameList:["组选和值"],start:0,end:27,checkList:["百","十","个"],getArr:this.getRenXuan3ZxhzCount,randomArr:[1]},ssc_renxuan3_zuxhz:{nameList:["组选和值"],start:1,end:26,checkList:["百","十","个"],getArr:this.getRenXuan3ZuxhzCount,randomArr:[1]}}}},methods:{seleHandle:function(e){var t=this.dictBetCodes[this.betCodes].getArr(e);this.$emit("emitList",t)},getRenXuan2ZxhzCount:function(e){if(e.checkList.length<2)return 0;if(!e.val)return 0;var t=[],n=e.val[0];if(n.length<1)return 0;for(var s=0;s<n.length;s++)for(var i=0;i<10;i++)for(var a=0;a<10;a++)i+a===parseInt(n[s])&&t.push(i+""+a);var r=t.length*this.$getSscFsCount(e.checkList.length,2);return{betNum:this.$getRenXuan2ZxhzStr(e),num:r}},getRenXuan2ZuxhzCount:function(e){if(e.checkList.length<2)return 0;if(!e.val)return 0;var t=[],n=e.val[0],s=[],i=0,a=0;if(n.length<=0)return 0;for(var r=0;r<n.length;r++){for(i=parseInt(n[r]),a=parseInt(n[r]);0<=i;)s.push(i),i--;for(var u=0;u<s.length;u++)for(var o=0;o<s.length;o++)if(s[u]+s[o]===a&&s[u]<=9&&s[o]<=9&&s[u]!==s[o]){var l=[];l.push(s[u]),l.push(s[o]),l.sort(),t.push(l.join(""))}}if(t.length<=0)return 0;var h=(t=this.$zsUniqueArr(t)).length*this.$getSscFsCount(e.checkList.length,2);return{betNum:this.$getRenXuan2ZxhzStr(e),num:h}},getRenXuan3ZxhzCount:function(e){if(!e.val)return 0;var t,n=[],s=0,i=0,a=[];t=e.val[0];for(var r=0;r<t.length;r++){var u=[];for(s=parseInt(t[r]),i=parseInt(t[r]);0<=s;)u.push(s),s--;for(var o=0;o<u.length;o++)for(var l=0;l<u.length;l++)for(var h=0;h<u.length;h++)u[o]+u[l]+u[h]===i&&u[h]<=9&&u[l]<=9&&u[o]<=9&&a.push(u[o]+""+u[l]+u[h]);n=this.$zsUniqueArr(a)}var c=n.length;return{betNum:this.$getRenXuan2ZxhzStr(e),num:c*this.$getSscFsCount(e.checkList.length,3)}},getRenXuan3ZuxhzCount:function(e){if(!e.val)return 0;var t,n=0,s=0,i=[];t=e.val[0];for(var a=0;a<t.length;a++){var r=[];for(n=parseInt(t[a]),s=parseInt(t[a]);0<=n;)r.push(n),n--;for(var u=0;u<r.length;u++)for(var o=0;o<r.length;o++)for(var l=0;l<r.length;l++)if(r[u]+r[o]+r[l]===s&&r[l]<=9&&r[o]<=9&&r[u]<=9&&r[o]!==r[u]&&r[u]!==r[l]&&r[l]!==r[u]){var h=[];h.push(r[u]),h.push(r[o]),h.push(r[l]),h.sort(),i.push(h.join(""))}}var c=this.$zsUniqueArr(i).length*this.$getSscFsCount(e.checkList.length,3);return{betNum:this.$getRenXuan2ZxhzStr(e),num:c}},rest:function(){this.$refs.viewComponent.hadleViewResult()}},watch:{betCodes:{handler:function(e){this.viewObject=this.$getViewResult(1,e,this.dictBetCodes[e].nameList,this.dictBetCodes[e].start,this.dictBetCodes[e].end,!1)},immediate:!0}}},T=Object(o.a)(j,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("one",{ref:"viewComponent",attrs:{lrylList:e.lrylList,viewObject:e.viewObject,checkBox:e.dictBetCodes[e.betCodes].checkList,randomArr:e.dictBetCodes[e.betCodes].randomArr},on:{emitList:e.seleHandle}})],1)}),[],!1,null,"4d12c3da",null).exports,A={props:["betCodes","lrylList"],components:{One:h.a},data:function(){return{dictBetCodes:{ssc_renxuan3_z3fs:{nameList:["组三复式"],checkList:["百","十","个"],getArr:this.getRenXuan3Zu3fsCount,randomArr:[2]},ssc_renxuan3_z6fs:{nameList:["组六复式"],checkList:["百","十","个"],getArr:this.getRenXuan6Zu6fs,randomArr:[3]},ssc_renxuan2_zuxfs:{nameList:["组选复式"],checkList:["十","个"],getArr:this.getRenXuan2ZuxfsCount,randomArr:[2]}}}},methods:{seleHandle:function(e){var t=this.dictBetCodes[this.betCodes].getArr(e);this.$emit("emitList",t)},getRenXuan3Zu3fsCount:function(e){if(!e.val)return 0;var t,n=[];t=e.val[0];for(var s=0;s<t.length-1;s++)for(var i=1;i<t.length;i++)t[i]!==t[s]&&(n.push(t[s]+""+t[i]+t[i]),n.push(t[i]+""+t[s]+t[s]));return n=this.$zsUniqueArr(n),{betNum:this.$getRenXuan2ZxhzStr(e),num:n.length*this.$getSscFsCount(e.checkList.length,3)}},getRenXuan6Zu6fs:function(e){if(e.val){var t=this.$getSscFsCount(e.val[0].length,3)*this.$getSscFsCount(e.checkList.length,3);return{betNum:this.$getRenXuan2ZxhzStr(e),num:t}}return 0},getRenXuan2ZuxfsCount:function(e){if(e.val){var t=this.$getSscFsCount(e.checkList.length,2)*this.$getSscFsCount(e.val[0].length,2);return{betNum:this.$getRenXuan2ZxhzStr(e),num:t}}return 0},rest:function(){this.$refs.viewComponent.hadleViewResult()}},watch:{betCodes:{handler:function(e){this.viewObject=this.$getViewResult(1,e,this.dictBetCodes[e].nameList,0,9,!1)},immediate:!0}}},R=Object(o.a)(A,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("one",{ref:"viewComponent",attrs:{lrylList:e.lrylList,viewObject:e.viewObject,checkBox:e.dictBetCodes[e.betCodes].checkList,randomArr:e.dictBetCodes[e.betCodes].randomArr},on:{emitList:e.seleHandle}})],1)}),[],!1,null,"3dab2093",null).exports,q=(n("6b54"),{props:["betCodes","lrylList"],components:{One:h.a},data:function(){return{dictBetCodes:{ssc_renxuan4_zx24:{nameList:["组选24"],checkList:["千","百","十","个"],getArr:this.getRenXuan4Zux24Count,randomArr:[4]},ssc_renxuan4_zx6:{nameList:["组选6"],checkList:["千","百","十","个"],getArr:this.getRenXuan4Zux6Count,randomArr:[2]},ssc_renxuan4_zx12:{nameList:["二重号","单号"],checkList:["千","百","十","个"],getArr:this.getRenXuan4Zux12Count,randomArr:[2,2]},ssc_renxuan4_zx4:{nameList:["三重号","单号"],checkList:["千","百","十","个"],getArr:this.getRenXuan4Zux4Count,randomArr:[1,1]}}}},methods:{seleHandle:function(e){var t=this.dictBetCodes[this.betCodes].getArr(e);this.$emit("emitList",t)},getRenXuan4Zux24Count:function(e){if(e.val){var t=e.val[0];return{num:this.$getSscFsCount(e.checkList.length,4)*this.$getSscFsCount(t.length,4),betNum:this.getRenXuan4Zux24Str(e)}}return 0},getRenXuan4Zux6Count:function(e){if(e.val){var t=e.val[0];return{num:this.$getSscFsCount(e.checkList.length,4)*this.$getSscFsCount(t.length,2),betNum:this.getRenXuan4Zux12Str(e)}}return 0},getRenXuan4Zux12Count:function(e){if(!e.val)return 0;var t=e.val[0],n=e.val[1],s=[],i=[];if(n.length<2&&t.length<1)return 0;for(var a=0;a<n.length;a++)for(var r=0;r<n.length;r++)if(n[a]!==n[r]){var u=[];u.push(n[a]),u.push(n[r]),u.sort(),s.push(u.join(""))}s=this.uniqueArr(s);for(var o=0;o<t.length;o++)for(var l=0;l<s.length;l++){var h=s[l].toString().substr(0,1),c=s[l].toString().substr(1,1);if(parseInt(h)!==parseInt(t[o])&&parseInt(c)!==parseInt(t[o])){var d=[];d.push(h),d.push(c),d.sort(),i.push(t[o]+""+d.join(""))}}return{num:(i=this.$zsUniqueArr(i)).length*this.$getSscFsCount(e.checkList.length,4),betNum:this.getRenXuan4Zux12Str(e)}},getRenXuan4Zux4Count:function(e){if(!e.val)return 0;for(var t=e.val[0],n=e.val[1],s=[],i=0;i<t.length;i++)for(var a=0;a<n.length;a++)t[i]!==n[a]&&s.push(t[i]+""+n[a]);return s.length<1?0:{num:s.length*this.$getSscFsCount(e.checkList.length,4),betNum:this.getRenXuan4Zux12Str(e)}},getRenXuan4Zux24Str:function(e){return e.checkList.join(",")+"|"+(e.val?e.val[0].sort((function(e,t){return e-t})).join(","):"")},getRenXuan4Zux12Str:function(e){if(e.checkList){var t=e.checkList.join(",");if(e.val)for(var n=0;n<e.val.length;n++)t+="|",t+=e.val[n].sort((function(e,t){return e-t})).join(",");else t="";return t}},uniqueArr:function(e){var t=[];e.sort();for(var n=0;n<e.length;n++)e[n]!==e[n+1]&&(t[t.length]=e[n]);return t},rest:function(){this.$refs.viewComponent.hadleViewResult()}},watch:{betCodes:{handler:function(e){this.viewObject=this.$getViewResult(1,e,this.dictBetCodes[e].nameList,0,9,!1)},immediate:!0}}}),B=Object(o.a)(q,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("one",{ref:"viewComponent",attrs:{lrylList:e.lrylList,viewObject:e.viewObject,checkBox:e.dictBetCodes[e.betCodes].checkList,randomArr:e.dictBetCodes[e.betCodes].randomArr},on:{emitList:e.seleHandle}})],1)}),[],!1,null,"112a69dc",null).exports,N=n("2f62"),S=n("65ef"),k=n("1fba");function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}var E={components:{lotteryHeader:i.a,playTip:function(){return n.e("chunk-224db6b1").then(n.bind(null,"0818"))},playTab:a.a,PupoPlaytip:function(){return n.e("chunk-25676db2").then(n.bind(null,"3e4d"))},BetBottom:r.a,SanxingZxufs:l,SanxingZxhz:d,SanxingZxkd:_,SanxingZuxfs:g,SanxingZuxhzws:p,SanxingZuxtsh:b,BudingweiYm:L,YixingDwd:w,Dxds:$,RxZxhz:T,RxZuxfs:R,RxR4zux:B},data:function(){return{modelList:[{name:"定位胆",list:[{name:"定位胆",list:[{name:"定位胆",code:"ssc_yixing_dwd"}]}]},{name:"后三",list:[{name:"后三直选",list:[{name:"直选复式",code:"ssc_sanxing_zhixuan_hsfs"},{name:"直选和值",code:"ssc_sanxing_zhixuan_hshz"},{name:"直选跨度",code:"ssc_sanxing_zhixuan_hskd"}]},{name:"后三组选",list:[{name:"组三复式",code:"ssc_sanxing_zuxuan_hsz3fs"},{name:"组六复式",code:"ssc_sanxing_zuxuan_hsz6fs"},{name:"组选和值",code:"ssc_sanxing_zuxuan_hszxhz"},{name:"组选包胆",code:"ssc_sanxing_zuxuan_hszxbd"}]},{name:"后三其他",list:[{name:"和值尾数",code:"ssc_sanxing_zuxuan_hshzws"},{name:"特殊号",code:"ssc_sanxing_zuxuan_hsts"}]}]},{name:"前三",list:[{name:"前三直选",list:[{name:"直选复式",code:"ssc_sanxing_zhixuan_qsfs"},{name:"直选和值",code:"ssc_sanxing_zhixuan_qshz"},{name:"直选跨度",code:"ssc_sanxing_zhixuan_qskd"}]},{name:"前三组选",list:[{name:"组三复式",code:"ssc_sanxing_zuxuan_qsz3fs"},{name:"组六复式",code:"ssc_sanxing_zuxuan_qsz6fs"},{name:"组选和值",code:"ssc_sanxing_zuxuan_qszxhz"},{name:"组选包胆",code:"ssc_sanxing_zuxuan_qszxbd"}]},{name:"前三其他",list:[{name:"和值尾数",code:"ssc_sanxing_zuxuan_qshzws"},{name:"特殊号",code:"ssc_sanxing_zuxuan_qsts"}]}]},{name:"五星",list:[{name:"五星直选",list:[{name:"直选复式",code:"ssc_wuxing_zhixuan_fs"}]}]},{name:"四星",list:[{name:"四星直选",list:[{name:"直选复式",code:"ssc_sixing_zhixuan_fs"}]}]},{name:"前二",list:[{name:"前二直选",list:[{name:"直选复式",code:"ssc_erxing_zhixuan_qefs"},{name:"直选和值",code:"ssc_erxing_zhixuan_qehz"},{name:"直选跨度",code:"ssc_erxing_zhixuan_qekd"}]},{name:"前二组选",list:[{name:"组选复式",code:"ssc_erxing_zuxuan_qefs"},{name:"组选和值",code:"ssc_erxing_zuxuan_qehz"},{name:"组选包胆",code:"ssc_erxing_zuxuan_qebd"}]}]},{name:"不定位",list:[{name:"三星",list:[{name:"前三一码",code:"ssc_budingwei_q3ym"},{name:"前三二码",code:"ssc_budingwei_q3em"},{name:"后三一码",code:"ssc_budingwei_h3ym"},{name:"后三二码",code:"ssc_budingwei_h3em"}]},{name:"四星",list:[{name:"前四一码",code:"ssc_budingwei_q4ym"},{name:"前四二码",code:"ssc_budingwei_q4em"},{name:"后四一码",code:"ssc_budingwei_h4ym"},{name:"后四二码",code:"ssc_budingwei_h4em"}]},{name:"五星",list:[{name:"五星二码",code:"ssc_budingwei_wxem"},{name:"五星三码",code:"ssc_budingwei_wxsm"}]}]},{name:"大小单双",list:[{name:"大小单双",list:[{name:"前二大小单双",code:"ssc_daxiaodanshuang_q2"},{name:"后二大小单双",code:"ssc_daxiaodanshuang_h2"},{name:"前三大小单双",code:"ssc_daxiaodanshuang_q3"},{name:"后三大小单双",code:"ssc_daxiaodanshuang_h3"}]}]},{name:"任选二",list:[{name:"任二直选",list:[{name:"直选复式",code:"ssc_renxuan2_zxfs"},{name:"直选和值",code:"ssc_renxuan2_zxhz"}]},{name:"任二组选",list:[{name:"组选复式",code:"ssc_renxuan2_zuxfs"},{name:"组选和值",code:"ssc_renxuan2_zuxhz"}]}]},{name:"任选三",list:[{name:"任三直选",list:[{name:"直选复式",code:"ssc_renxuan3_zxfs"},{name:"直选和值",code:"ssc_renxuan3_zxhz"}]},{name:"任三组选",list:[{name:"组三复式",code:"ssc_renxuan3_z3fs"},{name:"组六复式",code:"ssc_renxuan3_z6fs"},{name:"组选和值",code:"ssc_renxuan3_zuxhz"}]}]},{name:"任选四",list:[{name:"任四直选",list:[{name:"直选复式",code:"ssc_renxuan4_zxfs"}]},{name:"任四组选",list:[{name:"组选24",code:"ssc_renxuan4_zx24"},{name:"组选12",code:"ssc_renxuan4_zx12"},{name:"组选6",code:"ssc_renxuan4_zx6"},{name:"组选4",code:"ssc_renxuan4_zx4"}]}]}],playType:null,contentHei:"3.5",hasBgFalg:!1,emitList:null,expect:0,lrylMethods:null,lrylList:null,addMoreTag:!0,threeWidth:1,playDesObj:null,palyDesFalg:!1}},created:function(){this.lrylMethods=S.a},mounted:function(){var e=this;this.$store.dispatch("setRouterLoading",!1),this.$nextTick((function(){e.setConHeihgt(),e.lotteryScroll()}))},methods:{setConHeihgt:function(){var e=document.documentElement.offsetHeight,t=document.getElementById("view_header").offsetHeight,n=0;n=document.getElementById("lottery_header")?document.getElementById("lottery_header").offsetHeight:86;var s=document.getElementById("officialOuter").offsetHeight;document.getElementById("officialScroll").style.height=e-t-n-s+"px"},getLryl:function(e){var t=this;this.lotteryRecent?1===e?(this.lrylList=this.lrylMethods.officialColdHot(this.playType,this.lotteryRecent),this.$store.dispatch("changeLrBtnStatus",!0)):2===e&&(this.lrylList=this.lrylMethods.officialLeaveOut(this.playType,this.lotteryRecent),this.$store.dispatch("changeYlBtnStatus",!0)):this.$api.get(this.$apiUrl.LOTTO.GET_RECENT_RECORDS,{code:this.playCode,pageSize:80},(function(n){0===n.error&&(t.$store.dispatch("changeAllHistoryLoading",!1),t.$store.dispatch("changeRecentFlag",!1),t.$store.dispatch("setRecent",n.data),1===e?(t.lrylList=t.lrylMethods.officialColdHot(t.playType,n.data),t.$store.dispatch("changeLrBtnStatus",!0)):2===e&&(t.lrylList=t.lrylMethods.officialLeaveOut(t.playType,n.data),t.$store.dispatch("changeYlBtnStatus",!0)))}))},changePlayType:function(e){this.playType=e},changHasBgFalg:function(e){this.hasBgFalg=e},heightCalculation:function(e){var t=0;t=e?this.windowHeight-2.07-1.4:this.windowHeight-2.07,this.contentHei=t},handlEmitList:function(e){this.emitList=e},hasLenRe:function(e){"ssc_renxuan2_zxhz"===e||"ssc_renxuan2_zuxfs"===e||"ssc_renxuan2_zuxhz"===e||"ssc_renxuan3_zxhz"===e||"ssc_renxuan3_z3fs"===e||"ssc_renxuan3_z6fs"===e||"ssc_renxuan3_hhzx"===e||"ssc_renxuan3_zuxhz"===e||"ssc_renxuan4_zx12"===e||"ssc_renxuan4_zx24"===e||"ssc_renxuan4_zx6"===e||"ssc_renxuan4_zx4"===e?(this.addMoreTag=!1,this.$store.dispatch("changeLrBtnStatus",!1),this.$store.dispatch("changeYlBtnStatus",!1)):this.addMoreTag=!0},reSetLryl:function(){this.$refs.lotteryHeader&&(this.$refs.lotteryHeader.lrylFlag=0),this.$store.dispatch("changeLrBtnStatus",!1),this.$store.dispatch("changeYlBtnStatus",!1)},rest:function(){this.$refs.viewComponent.rest(),this.$refs.betBottom.restResult(),this.emitList={betNum:"",num:0}},lotteryScroll:function(){this.$lotteryScroll(this,k.a)}},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Object(N.b)(["windowHeight","lotteryRecent","keyboardStatus"]),{playCode:function(){return this.$route.params.playCode}}),watch:{playType:function(e){var t=this;this.emitList={betNum:"",num:0},this.reSetLryl(),this.hasLenRe(e),this.$nextTick((function(){t.lotteryScroll()}))},keyboardStatus:{handler:function(e){this.heightCalculation(e)},deep:!0,immediate:!0},windowHeight:{handler:function(e){this.heightCalculation(this.keyboardStatus)},deep:!0,immediate:!0}}},Z=(n("023c"),Object(o.a)(E,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ssc-official-wrapper"},[n("lottery-header",{ref:"lotteryHeader",attrs:{addMoreTag:e.addMoreTag},on:{getLryl:e.getLryl,expectDate:function(t){e.expect=t}}}),n("div",{staticClass:"scroll-wrapper",attrs:{id:"officialScroll"}},[n("div",[n("play-tab",{ref:"playTab",attrs:{modelList:e.modelList},on:{changPlayType:e.changePlayType,changHasBgFalg:e.changHasBgFalg}}),n("play-tip",{attrs:{isSencond:e.hasBgFalg},on:{showPlayDes:function(t){e.playDesObj=t,e.palyDesFalg=!0}},model:{value:e.playType,callback:function(t){e.playType=t},expression:"playType"}}),"ssc_sanxing_zhixuan_hsfs"===e.playType||"ssc_sanxing_zhixuan_qsfs"===e.playType||"ssc_wuxing_zhixuan_fs"===e.playType||"ssc_sixing_zhixuan_fs"===e.playType||"ssc_erxing_zhixuan_qefs"===e.playType||"ssc_renxuan3_zxfs"===e.playType||"ssc_renxuan2_zxfs"===e.playType||"ssc_renxuan4_zxfs"===e.playType?n("sanxing-zxufs",{ref:"viewComponent",attrs:{lrylList:e.lrylList,betCodes:e.playType},on:{emitList:e.handlEmitList}}):e._e(),"ssc_sanxing_zhixuan_hshz"===e.playType||"ssc_sanxing_zhixuan_qshz"===e.playType||"ssc_sanxing_zuxuan_hszxhz"===e.playType||"ssc_sanxing_zuxuan_qszxhz"===e.playType||"ssc_erxing_zhixuan_qehz"===e.playType||"ssc_erxing_zuxuan_qehz"===e.playType?n("sanxing-zxhz",{ref:"viewComponent",attrs:{lrylList:e.lrylList,betCodes:e.playType},on:{emitList:e.handlEmitList}}):e._e(),"ssc_sanxing_zhixuan_hskd"===e.playType||"ssc_sanxing_zhixuan_qskd"===e.playType||"ssc_erxing_zhixuan_qekd"===e.playType?n("sanxing-zxkd",{ref:"viewComponent",attrs:{lrylList:e.lrylList,betCodes:e.playType},on:{emitList:e.handlEmitList}}):e._e(),"ssc_sanxing_zuxuan_qsz3fs"===e.playType||"ssc_sanxing_zuxuan_hsz3fs"===e.playType||"ssc_sanxing_zuxuan_hsz6fs"===e.playType||"ssc_sanxing_zuxuan_qsz6fs"===e.playType||"ssc_erxing_zuxuan_qefs"===e.playType||"ssc_sanxing_zuxuan_hszxbd"===e.playType||"ssc_sanxing_zuxuan_qszxbd"===e.playType||"ssc_erxing_zuxuan_qebd"===e.playType?n("sanxing-zuxfs",{ref:"viewComponent",attrs:{lrylList:e.lrylList,betCodes:e.playType},on:{emitList:e.handlEmitList}}):e._e(),"ssc_sanxing_zuxuan_hshzws"===e.playType||"ssc_sanxing_zuxuan_qshzws"===e.playType?n("sanxing-zuxhzws",{ref:"viewComponent",attrs:{lrylList:e.lrylList,betCodes:e.playType},on:{emitList:e.handlEmitList}}):e._e(),"ssc_sanxing_zuxuan_hsts"===e.playType||"ssc_sanxing_zuxuan_qsts"===e.playType?n("sanxing-zuxtsh",{ref:"viewComponent",attrs:{lrylList:e.lrylList,betCodes:e.playType},on:{emitList:e.handlEmitList}}):e._e(),"ssc_budingwei_q3ym"===e.playType||"ssc_budingwei_h3ym"===e.playType||"ssc_budingwei_q4ym"===e.playType||"ssc_budingwei_h4ym"===e.playType||"ssc_budingwei_q3em"===e.playType||"ssc_budingwei_h3em"===e.playType||"ssc_budingwei_q4em"===e.playType||"ssc_budingwei_h4em"===e.playType||"ssc_budingwei_wxem"===e.playType||"ssc_budingwei_wxsm"===e.playType?n("budingwei-ym",{ref:"viewComponent",attrs:{lrylList:e.lrylList,betCodes:e.playType},on:{emitList:e.handlEmitList}}):e._e(),"ssc_yixing_dwd"===e.playType?n("yixing-dwd",{ref:"viewComponent",attrs:{lrylList:e.lrylList,betCodes:e.playType},on:{emitList:e.handlEmitList}}):e._e(),"ssc_daxiaodanshuang_q2"===e.playType||"ssc_daxiaodanshuang_h2"===e.playType||"ssc_daxiaodanshuang_q3"===e.playType||"ssc_daxiaodanshuang_h3"===e.playType?n("dxds",{ref:"viewComponent",attrs:{lrylList:e.lrylList,betCodes:e.playType},on:{emitList:e.handlEmitList}}):e._e(),"ssc_renxuan2_zxhz"===e.playType||"ssc_renxuan2_zuxhz"===e.playType||"ssc_renxuan3_zxhz"===e.playType||"ssc_renxuan3_zuxhz"===e.playType?n("rx-zxhz",{ref:"viewComponent",attrs:{lrylList:e.lrylList,betCodes:e.playType},on:{emitList:e.handlEmitList}}):e._e(),"ssc_renxuan3_z3fs"===e.playType||"ssc_renxuan3_z6fs"===e.playType||"ssc_renxuan2_zuxfs"===e.playType?n("rx-zuxfs",{ref:"viewComponent",attrs:{lrylList:e.lrylList,betCodes:e.playType},on:{emitList:e.handlEmitList}}):e._e(),"ssc_renxuan4_zx24"===e.playType||"ssc_renxuan4_zx6"===e.playType||"ssc_renxuan4_zx12"===e.playType||"ssc_renxuan4_zx4"===e.playType?n("rx-r4zux",{ref:"viewComponent",attrs:{lrylList:e.lrylList,betCodes:e.playType},on:{emitList:e.handlEmitList}}):e._e()],1)]),e.palyDesFalg?n("pupo-playtip",{attrs:{desObj:e.playDesObj},on:{close:function(){return e.palyDesFalg=!1}}}):e._e(),n("bet-bottom",{ref:"betBottom",attrs:{betCodes:e.playType,seleList:e.emitList,expect:e.expect}})],1)}),[],!1,null,null,null));t.default=Z.exports},"591f":function(e,t,n){},7618:function(e,t,n){},"7f1c":function(e,t,n){"use strict";var s=n("591f");n.n(s).a},f4fd:function(e,t,n){"use strict";n("8e6e"),n("ac6a"),n("456d");var s=n("bd86"),i=(n("7f7f"),n("2f62"));function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}var r={props:["viewObject","betCodes","lrylList","randomArr"],data:function(){return{viewResult:null,processing:!1,btnProcessing:!1,seleNumList:null}},methods:{loadbottom:function(){this.$refs.loadmore.onBottomLoaded()},loadTop:function(){this.$refs.loadmore.onTopLoaded()},hadleViewResult:function(){this.viewResult=null,this.seleNumList=null;for(var e=this.viewObject.list,t=[],n=0;n<e.length;n++){for(var s=e[n],i=[],a=0;a<s.subList.length;a++)i.push({num:s.subList[a],isSele:!1});t.push({name:s.name,numList:i})}this.viewResult=t},seleNum:function(e,t,n){if(this.viewResult&&void 0!==e&&void 0!==t&&!this.processing){if(this.processing=!0,!this.seleNumList){this.seleNumList=[];for(var s=0;s<this.viewResult.length;s++)this.seleNumList.push([])}var i=this.viewResult[e].numList[t];if(i.isSele)for(var a=0;a<this.seleNumList[e].length;a++)this.seleNumList[e][a]===i.num&&this.seleNumList[e].splice(a,1);else this.seleNumList[e].push(i.num);this.$set(i,"isSele",!i.isSele),n&&this.$emit("emitList",this.seleNumList),this.processing=!1}},handelBtn:function(e,t){if(!this.btnProcessing){for(var n=!(this.btnProcessing=!0),s=this.viewResult[e].numList,i=0;i<s.length;i++){s.length-1===i&&(n=!0);var a=s[i];1===t?a.isSele?n&&this.$emit("emitList",this.seleNumList):this.seleNum(e,i,n):2===t&&(a.isSele?this.seleNum(e,i,n):n&&this.$emit("emitList",this.seleNumList))}this.btnProcessing=!1}},randomNum:function(){if(this.getNum(),this.randomArr){for(var e=[],t=[],n=0;n<this.randomArr.length;n++){var s=n;if(this.randomArr.length!==this.viewResult.length&&(s=this.getNum(0,this.viewResult.length-1)),0<=e.indexOf(s))--n;else{e.push(s);for(var i=0;i<this.randomArr[n];i++){var a=this.getNum(0,this.viewResult[s].numList.length-1);0<=t.indexOf(a)?i--:(t.push(a),this.seleNum(s,a))}}}var r=e[e.length-1]+"_"+t[t.length-1];this.$refs[r]&&this.$refs[r][0].focus();var u=this.seleNumList;this.checkBox&&(u={checkList:this.checkedNames,val:this.seleNumList}),this.$emit("emitList",u)}else this.toast("此玩法无随机一注功能~")},getNum:function(e,t){var n=t-e,s=Math.random();return e+Math.round(s*n)}},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Object(i.b)(["randomTimestamp"])),watch:{betCodes:{handler:function(e){this.hadleViewResult()},immediate:!0},randomTimestamp:function(){var e=this;this.hadleViewResult(),this.$nextTick((function(){e.randomNum()}))}}},u=(n("7f1c"),n("2877")),o=Object(u.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"official-three-view"},e._l(e.viewResult,(function(t,s){return n("div",{key:s,staticClass:"option-big clear"},[n("div",{staticClass:"option-title"},[e._v(e._s(t.name))]),n("div",{staticClass:"num-list-outer"},[n("ul",{class:["clear list-wrapper",{"one-option":1===t.numList.length}]},e._l(t.numList,(function(t,i){return n("li",{key:i,class:["inner-box theme-font-color",{activeBox:t.isSele}],on:{click:function(t){return e.seleNum(s,i,!0)}}},[e._v("\n          "+e._s(t.num)+"\n          "),e.$store.state.other.lrStatus||e.$store.state.other.ylStatus?n("span",{staticClass:"lrylNum"},[e._v(e._s(e.lrylList[s][i].val))]):e._e()])})),0)])])})),0)}),[],!1,null,"eb43e5c6",null);t.a=o.exports},f532:function(e,t,n){"use strict";(function(e){n("a481"),n("28a5"),n("6b54"),n("ac6a");var s=n("37fd");t.a={props:["betCodes","lrylList"],components:{One:s.a},data:function(){return{dictBetCodes:{ssc_sanxing_zhixuan_hsfs:{nameList:["百位","十位","个位"],randomArr:[1,1,1]},ssc_sanxing_zhixuan_qsfs:{nameList:["万位","千位","百位"],randomArr:[1,1,1]},ssc_wuxing_zhixuan_fs:{nameList:["万位","千位","百位","十位","个位"],randomArr:[1,1,1,1,1]},ssc_sixing_zhixuan_fs:{nameList:["千位","百位","十位","个位"],randomArr:[1,1,1,1]},ssc_erxing_zhixuan_qefs:{nameList:["万位","千位"],randomArr:[1,1]},ssc_renxuan3_zxfs:{nameList:["万位","千位","百位","十位","个位"],randomArr:[1,1,1]},ssc_renxuan2_zxfs:{nameList:["万位","千位","百位","十位","个位"],randomArr:[1,1]},ssc_renxuan4_zxfs:{nameList:["万位","千位","百位","十位","个位"],randomArr:[1,1,1,1]}},viewObject:null}},methods:{seleHandle:function(e){var t={};t="ssc_renxuan2_zxfs"===this.betCodes?{betNum:this.$handleOfficialbetNumOne(e,"|"),num:this.getRx2Count(e)}:"ssc_renxuan3_zxfs"===this.betCodes?{betNum:this.$handleOfficialbetNumOne(e,"|"),num:this.getRenXuan3ZxfsCount(e)}:"ssc_renxuan4_zxfs"===this.betCodes?{betNum:this.$handleOfficialbetNumOne(e,"|"),num:this.getRenXuan4fsCount(e)}:{betNum:this.$handleOfficialbetNumOne(e,"|"),num:this.getFsCount(e)},this.$emit("emitList",t)},getFsCount:function(e){for(var t=1,n=0;n<e.length;n++)t*=e[n].length;return t},getRx2Count:function(e){var t=[],n=[],s=[],i=[],a=[],r=[];e.forEach((function(e,u){var o=[];e.forEach((function(e,r){isNaN(e)||(o.push(e),0===u&&t.push(e),1===u&&n.push(e),2===u&&s.push(e),3===u&&i.push(e),4===u&&a.push(e))})),r.push(o.join(",").toString())}));var u=[];if(0<t.length&&u.push(t),0<n.length&&u.push(n),0<s.length&&u.push(s),0<i.length&&u.push(i),0<a.length&&u.push(a),u.length<2)return 0;for(var o=[],l=0;l<u.length;l++)for(var h=0;h<u[l].length;h++)for(var c=l+1;c<u.length;c++)for(var d=0;d<u[c].length;d++)o.push(u[l][h]+""+u[c][d]);return o.length},getRenXuan3ZxfsCount:function(t){for(var n=[],s=0;s<t.length;s++)0<t[s].length&&n.push(s);if(n.length<3)return 0;var i=0,a=this.getResultList(n,3);return e.each(a,(function(n,s){var a=0,r=s.split(" ");e.each(r,(function(e,n){a=0===a?1:a,a*=t[parseInt(n)].length})),i+=a})),i},getRenXuan4fsCount:function(t){for(var n=[],s=0;s<t.length;s++)0<t[s].length&&n.push(s);if(n.length<3)return 0;var i=0,a=this.getResultList(n,4);return e.each(a,(function(n,s){var a=0,r=s.split(" ");e.each(r,(function(e,n){a=0===a?1:a,a*=t[parseInt(n)].length})),i+=a})),i},getResultList:function(e,t){if(e.length<t)return[];for(var n=[],s="",i=[],a=0;a<e.length;a++)i[a]=a<t?"1":"0";for(var r=0,u=0,o=0,l=0,h="1";;){for(var c=i.length-1;c>=i.length-t;c--)"1"===i[c]&&(l+=1);for(var d=0;d<i.length&&("1"!==i[d]||(s+=e[r=d],s+=" ",++o!==t));d++);if(n.push(s),l===t)break;for(var m=l=0;m<i.length-1;m++)if("1"===i[m]&&"0"===i[m+1]){u=(r=m)+1,i[r]="0",i[u]="1";break}for(var _=0;_<r-1;_++)for(var f=_;f<r-1;f++)"0"===i[_]&&(h=i[_],i[_]=i[f+1],i[f+1]=h);s="",o=0}for(var g=0;g<n.length;++g)n[g]=this.trim(n[g]);return n},trim:function(e){return e.replace(/(^\s*)|(\s*$)/g,"")},rest:function(){this.$refs.viewComponent.hadleViewResult()}},watch:{betCodes:{handler:function(e){this.viewObject=this.$getViewResult(1,e,this.dictBetCodes[e].nameList,0,9,!1)},immediate:!0}}}}).call(this,n("1157"))}}]);