(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0d0096"],{"65ef":function(t,r,e){"use strict";e.d(r,"a",(function(){return n})),e("6b54"),e("c5f6"),e("55dd"),e("28a5");var i=e("1157"),s=e.n(i),n={getArrByArrObj:function(t){for(var r=[],e=0;e<t.length;e++){var i=[];for(var s in t[e])i.push(t[e][s]);r.push(i)}return r},getArrByDtArrObj:function(t){for(var r=[],e=0;e<t.length;e++){var i=[];i.push(t[e]["龙"]),i.push(t[e]["和"]),i.push(t[e]["虎"]),r.push(i)}return r},getArrByObj:function(t){var r=[],e=[];for(var i in t)e.push(t[i]);return r.push(e),r},getThreeArrByArr:function(t,r,e,i){var s=[];return s.push(t[r]),s.push(t[e]),s.push(t[i]),s},getTwoArrByArr:function(t,r,e){var i=[];return i.push(t[r]),i.push(t[e]),i},getWanw:function(t,r,e){for(var i=[],s=[],n=0;n<r[t].length;n++)s.push(r[t][n]);return i.push(s),i},initNnNum:function(){var t=[];return t.push({"无牛":{val:0,jx:!0},"牛1":{val:0,jx:!0},"牛2":{val:0,jx:!0},"牛3":{val:0,jx:!0},"牛4":{val:0,jx:!0},"牛5":{val:0,jx:!0},"牛6":{val:0,jx:!0},"牛7":{val:0,jx:!0},"牛8":{val:0,jx:!0},"牛9":{val:0,jx:!0},"牛牛":{val:0,jx:!0}}),t.push({"牛大":{val:0,jx:!0},"牛小":{val:0,jx:!0},"牛单":{val:0,jx:!0},"牛双":{val:0,jx:!0},"牛质":{val:0,jx:!0},"牛合":{val:0,jx:!0}}),t.push({"五条":{val:0,jx:!0},"炸弹":{val:0,jx:!0},"葫芦":{val:0,jx:!0},"顺子":{val:0,jx:!0},"三条":{val:0,jx:!0},"两对":{val:0,jx:!0},"单对":{val:0,jx:!0},"散号":{val:0,jx:!0}}),t},getNnColdHot:function(t){var r=this.initNnNum();if(t)for(var e=0;e<t.length;e++)if(t[e].openCode){var i=t[e].openCode.split(","),s=this.getNnResule(i);r[0][s[0]].val+=1;var n=parseInt(s[1]);11!==n&&(5<n?r[1]["牛大"].val+=1:r[1]["牛小"].val+=1,n%2==0?r[1]["牛双"].val+=1:r[1]["牛单"].val+=1,-1===[4,6,8,9,10].indexOf(n)?r[1]["牛质"].val+=1:r[1]["牛合"].val+=1),this.getNnFive(i)?r[2]["五条"].val+=1:this.getNnBomb(i)?r[2]["炸弹"].val+=1:this.getNnGourd(i)?r[2]["葫芦"].val+=1:this.getNnStraight(i)?r[2]["顺子"].val+=1:this.getNnThreeArticle(i)?r[2]["三条"].val+=1:this.getNnTwoPair(i)?r[2]["两对"].val+=1:this.getNnOnePair(i)?r[2]["单对"].val+=1:this.getNnBulkNum(i)&&(r[2]["散号"].val+=1)}return r},getNnYl:function(t){var r=this.initNnNum();if(t)for(var e=0;e<t.length;e++)if(t[e].openCode){var i=t[e].openCode.split(",");this.getNnGourd(i);var s=this.getNnResule(i),n=s[0],a=parseInt(s[1]);for(var l in r[0][n].jx=!1,r[0])r[0][l].jx&&(r[0][l].val+=1);11!==a?(5<a?(r[1]["牛大"].jx=!1,r[1]["牛小"].jx&&(r[1]["牛小"].val+=1)):(r[1]["牛小"].jx=!1,r[1]["牛大"].jx&&(r[1]["牛大"].val+=1)),a%2==0?(r[1]["牛双"].jx=!1,r[1]["牛单"].jx&&(r[1]["牛单"].val+=1)):(r[1]["牛单"].jx=!1,r[1]["牛双"].jx&&(r[1]["牛双"].val+=1)),-1===[4,6,8,9,10].indexOf(a)?(r[1]["牛质"].jx=!1,r[1]["牛合"].jx&&(r[1]["牛合"].val+=1)):(r[1]["牛合"].jx=!1,r[1]["牛质"].jx&&(r[1]["牛质"].val+=1))):(r[1]["牛大"].jx&&(r[1]["牛大"].val+=1),r[1]["牛小"].jx&&(r[1]["牛小"].val+=1),r[1]["牛单"].jx&&(r[1]["牛单"].val+=1),r[1]["牛双"].jx&&(r[1]["牛双"].val+=1),r[1]["牛质"].jx&&(r[1]["牛质"].val+=1),r[1]["牛合"].jx&&(r[1]["牛合"].val+=1)),this.getNnFive(i)?r[2]["五条"].jx=!1:r[2]["五条"].jx&&(r[2]["五条"].val+=1),this.getNnBomb(i)?r[2]["炸弹"].jx=!1:r[2]["炸弹"].jx&&(r[2]["炸弹"].val+=1),this.getNnGourd(i)?r[2]["葫芦"].jx=!1:r[2]["葫芦"].jx&&(r[2]["葫芦"].val+=1),this.getNnStraight(i)?r[2]["顺子"].jx=!1:r[2]["顺子"].jx&&(r[2]["顺子"].val+=1),this.getNnThreeArticle(i)?r[2]["三条"].jx=!1:r[2]["三条"].jx&&(r[2]["三条"].val+=1),this.getNnTwoPair(i)?r[2]["两对"].jx=!1:r[2]["两对"].jx&&(r[2]["两对"].val+=1),this.getNnOnePair(i)?r[2]["单对"].jx=!1:r[2]["单对"].jx&&(r[2]["单对"].val+=1),this.getNnBulkNum(i)?r[2]["散号"].jx=!1:r[2]["散号"].jx&&(r[2]["散号"].val+=1)}return r},getNnResule:function(t){for(var r=[],e=0,i=[],s=0;s<t.length;s++){var n=parseInt(t[s]);r.push(n),e+=n}for(var a=0;a<r.length-1;a++)for(var l=a+1;l<r.length;l++)if((r[a]+r[l])%10==e%10)return e%10==0?(i.push("牛牛"),i.push("10")):(i.push("牛"+e%10),i.push(e%10)),i;return i.push("无牛"),i.push("11"),i},getNnFive:function(t){for(var r=1,e=t[0],i=1;i<t.length;i++)e===t[i]&&(r+=1);return 5===r},getNnBomb:function(t){for(var r=0,e=0,i=t[0],s=t[1],n=0;n<t.length;n++)i===t[n]&&(r+=1),s===t[n]&&(e+=1);return 4===r||4===e},getNnGourd:function(t){for(var r=0,e=0,i=t[0],s=0,n=1;n<t.length;n++)t[n]===i||(s=t[n]);for(var a=0;a<t.length;a++)i===t[a]&&(r+=1),s===t[a]&&(e+=1);return 2===r&&3===e||3===r&&2===e},getNnStraight:function(t){for(var r=[],e="",i=0;i<t.length;i++)r.push(parseInt(t[i]));r=r.sort();for(var s=0;s<r.length;s++)e+=r[s];return-1!==["01234","12345","23456","34567","45678","56789","06789","01789","01289","01239"].indexOf(e)},getNnThreeArticle:function(t){for(var r=t[0],e=t[1],i=t[2],s=0,n=0,a=0,l=[],h=0;h<t.length;h++)r===t[h]&&(s+=1),e===t[h]&&(n+=1),i===t[h]&&(a+=1),-1===l.indexOf(t[h])&&l.push(t[h]);return(3===s||3===n||3===a)&&3===l.length},getNnTwoPair:function(t){for(var r=[],e=[],i=0;i<t.length;i++)-1===r.indexOf(t[i])?r.push(t[i]):-1===e.indexOf(t[i])&&e.push(t[i]);return 3===r.length&&2===e.length},getNnOnePair:function(t){for(var r=[],e=0;e<t.length;e++)-1===r.indexOf(t[e])&&r.push(t[e]);return 4===r.length},getNnBulkNum:function(t){for(var r=[],e=0;e<t.length;e++)-1===r.indexOf(t[e])&&r.push(t[e]);return 5===r.length&&!this.getNnStraight(r)},initDragonTigerTie:function(){for(var t=[],r=0;r<10;r++)t.push({"龙":{val:0,jx:!0},"虎":{val:0,jx:!0},"和":{val:0,jx:!0}});return t},getDragonTigerTieColdHot:function(t){var r=this.initDragonTigerTie();if(t)for(var e=0;e<t.length;e++)if(t[e].openCode){var i=t[e].openCode.split(",");r=this.getDtHotColdNumArr(i,r)}return r},getDragonTigerTieYl:function(t){var r=this.initDragonTigerTie();if(t)for(var e=0;e<t.length;e++)if(t[e].openCode){var i=t[e].openCode.split(",");r=this.getDtYiLouNumArr(i,r)}return r},getDtHotColdNumArr:function(t,r){for(var e=0,i=0;i<t.length-1;i++)for(var s=i+1;s<t.length;s++)Number(t[i])>Number(t[s])?r[e]["龙"].val++:Number(t[i])<Number(t[s])?r[e]["虎"].val++:r[e]["和"].val++,e+=1;return r},getDtYiLouNumArr:function(t,r){for(var e=0,i=0;i<t.length-1;i++)for(var s=i+1;s<t.length;s++)Number(t[i])>Number(t[s])?r[e]["龙"].jx=!1:Number(t[i])<Number(t[s])?r[e]["虎"].jx=!1:r[e]["和"].jx=!1,e+=1;for(var n=["龙","虎","和"],a=0;a<10;a++)for(var l=0;l<n.length;l++)r[a][n[l]].jx&&r[a][n[l]].val++;return r},initSpan:function(){for(var t=[],r=0;r<5;r++)t.push({0:{val:0,jx:!0},1:{val:0,jx:!0},2:{val:0,jx:!0},3:{val:0,jx:!0},4:{val:0,jx:!0},5:{val:0,jx:!0},6:{val:0,jx:!0},7:{val:0,jx:!0},8:{val:0,jx:!0},9:{val:0,jx:!0}});return t},getSpanColdHot:function(t){var r=this.initSpan();if(t)for(var e=0;e<t.length;e++)if(t[e].openCode)for(var i=t[e].openCode.split(","),s=0;s<i.length;s++)r[s][i[s]].val++;return r},getSpanYl:function(t){var r=this.initSpan(),e=["0","1","2","3","4","5","6","7","8","9"];if(t)for(var i=0;i<t.length;i++)if(t[i].openCode)for(var s=t[i].openCode.split(","),n=0;n<s.length;n++){r[n][s[n]].jx=!1;for(var a=0;a<e.length;a++)r[n][e[a]].jx&&(r[n][e[a]].val=r[n][e[a]].val+1)}return r},getHotColdNumArr:function(t,r){("groupThree"===this.leftCode&&0===t||"groupSix"===this.leftCode&&0===t)&&(t=1);for(var e={0:{val:0,jx:!0},1:{val:0,jx:!0},2:{val:0,jx:!0},3:{val:0,jx:!0},4:{val:0,jx:!0},5:{val:0,jx:!0},6:{val:0,jx:!0},7:{val:0,jx:!0},8:{val:0,jx:!0},9:{val:0,jx:!0}},i=0;i<10;i++)0===t?e[i].val=r[0][i].val+r[1][i].val+r[2][i].val+r[3][i].val+r[4][i].val:1===t?e[i].val=r[0][i].val+r[1][i].val+r[2][i].val:2===t?e[i].val=r[1][i].val+r[2][i].val+r[3][i].val:3===t&&(e[i].val=r[2][i].val+r[3][i].val+r[4][i].val);return e},getYiLouNumArr:function(t,r){for(var e={0:{val:0,jx:!0},1:{val:0,jx:!0},2:{val:0,jx:!0},3:{val:0,jx:!0},4:{val:0,jx:!0},5:{val:0,jx:!0},6:{val:0,jx:!0},7:{val:0,jx:!0},8:{val:0,jx:!0},9:{val:0,jx:!0}},i=0;i<10;i++)if(0===r){var s=[];s.push(t[0][i].val),s.push(t[1][i].val),s.push(t[2][i].val),s.push(t[3][i].val),s.push(t[4][i].val),e[i].val=Math.min.apply({},s)}else if(1===r){var n=[];n.push(t[0][i].val),n.push(t[1][i].val),n.push(t[2][i].val),e[i].val=Math.min.apply({},n)}else if(2===r){var a=[];a.push(t[1][i].val),a.push(t[2][i].val),a.push(t[3][i].val),e[i].val=Math.min.apply({},a)}else if(3===r){var l=[];l.push(t[2][i].val),l.push(t[3][i].val),l.push(t[4][i].val),e[i].val=Math.min.apply({},l)}return e},initYzzuh:function(){for(var t=[],r=0;r<5;r++)t.push({0:{val:0,jx:!0},1:{val:0,jx:!0},2:{val:0,jx:!0},3:{val:0,jx:!0},4:{val:0,jx:!0},5:{val:0,jx:!0},6:{val:0,jx:!0},7:{val:0,jx:!0},8:{val:0,jx:!0},9:{val:0,jx:!0}});return t},getYzzuhColdHot:function(t){var r=this.initYzzuh();if(t)for(var e=0;e<t.length;e++)if(t[e].openCode)for(var i=t[e].openCode.split(","),s=0;s<i.length;s++)r[s][i[s]].val++;return r},getYzzuhYl:function(t){var r=this.initYzzuh(),e=["0","1","2","3","4","5","6","7","8","9"];if(t)for(var i=0;i<t.length;i++)if(t[i].openCode)for(var s=t[i].openCode.split(","),n=0;n<s.length;n++){r[n][s[n]].jx=!1;for(var a=0;a<e.length;a++)r[n][e[a]].jx&&(r[n][e[a]].val=r[n][e[a]].val+1)}return r},initOneworld:function(t){for(var r=0<arguments.length&&void 0!==t?t:"",e=[],i=0;i<5;i++){var s=null;s=r?{0:{val:0,jx:!0},1:{val:0,jx:!0},2:{val:0,jx:!0},3:{val:0,jx:!0},4:{val:0,jx:!0},5:{val:0,jx:!0},6:{val:0,jx:!0},7:{val:0,jx:!0},8:{val:0,jx:!0},9:{val:0,jx:!0},"大":{val:0,jx:!0},"单":{val:0,jx:!0},"质":{val:0,jx:!0},"小":{val:0,jx:!0},"双":{val:0,jx:!0},"合":{val:0,jx:!0}}:0===i?{0:{val:0,jx:!0},1:{val:0,jx:!0},2:{val:0,jx:!0},3:{val:0,jx:!0},4:{val:0,jx:!0},5:{val:0,jx:!0},6:{val:0,jx:!0},7:{val:0,jx:!0},8:{val:0,jx:!0},9:{val:0,jx:!0},"大":{val:0,jx:!0},"单":{val:0,jx:!0},"总大":{val:0,jx:!0},"总单":{val:0,jx:!0},"质":{val:0,jx:!0},"小":{val:0,jx:!0},"双":{val:0,jx:!0},"总小":{val:0,jx:!0},"总双":{val:0,jx:!0},"合":{val:0,jx:!0}}:{0:{val:0,jx:!0},1:{val:0,jx:!0},2:{val:0,jx:!0},3:{val:0,jx:!0},4:{val:0,jx:!0},5:{val:0,jx:!0},6:{val:0,jx:!0},7:{val:0,jx:!0},8:{val:0,jx:!0},9:{val:0,jx:!0},"质":{val:0,jx:!0},"合":{val:0,jx:!0},"大":{val:0,jx:!0},"小":{val:0,jx:!0},"单":{val:0,jx:!0},"双":{val:0,jx:!0}},e.push(s)}return r&&e.push({"总大":{val:0,jx:!0},"总小":{val:0,jx:!0},"总单":{val:0,jx:!0},"总双":{val:0,jx:!0}}),e},getOneworldColdHot:function(t,r){var e=1<arguments.length&&void 0!==r&&r,i=e?5:0,n=this.initOneworld(e),a=[1,2,3,5,7];if(t)for(var l=0;l<t.length;l++)if(t[l].openCode){for(var h=t[l].openCode.split(","),o=0,x=0;x<h.length;x++)n[x][h[x]].val=n[x][h[x]].val+1,4<Number(h[x])?n[x]["大"].val++:n[x]["小"].val++,Number(h[x])%2==0?n[x]["双"].val++:n[x]["单"].val++,0<=s.a.inArray(Number(h[x]),a)?n[x]["质"].val++:n[x]["合"].val++,o+=Number(h[x]);o<=22?n[i]["总小"].val++:n[i]["总大"].val++,o%2==0?n[i]["总双"].val++:n[i]["总单"].val++}return n},getOneworldYl:function(t,r){var e=1<arguments.length&&void 0!==r&&r,i=e?5:0,n=this.initOneworld(e),a=[1,2,3,5,7],l=["0","1","2","3","4","5","6","7","8","9","大","小","单","双","质","合"];if(t)for(var h=0;h<t.length;h++)if(t[h].openCode){for(var o=t[h].openCode.split(","),x=0,v=0;v<o.length;v++){var g=[];x+=Number(o[v]),Number(4<o[v])?g.push("大"):g.push("小"),Number(o[v]%2==0)?g.push("双"):g.push("单"),0<=s.a.inArray(Number(o[v]),a)?g.push("质"):g.push("合"),n[v][o[v]].jx=!1;for(var u=0;u<g.length;u++)n[v][g[u]].jx=!1;for(var j=0;j<l.length;j++)n[v][l[j]].jx&&(n[v][l[j]].val+=1)}22<x?(n[i]["总大"].jx=!1,n[i]["总小"].jx&&(n[i]["总小"].val+=1)):(n[i]["总小"].jx=!1,n[i]["总大"].jx&&(n[i]["总大"].val+=1)),x%2==0?(n[i]["总双"].jx=!1,n[i]["总单"].jx&&(n[i]["总单"].val+=1)):(n[i]["总单"].jx=!1,n[i]["总双"].jx&&(n[i]["总双"].val+=1))}return n},getDxdszh:function(t){for(var r=[],e=0;e<t.length;e++){var i=[];if(5!==e){for(var s=0;s<t[e].length;s++)9<s&&i.push(t[e][s]);r.push(i)}else r.push(t[5])}return r},initQedxds:function(){for(var t=[],r=0;r<5;r++)t.push({"大":{val:0,jx:!0},"小":{val:0,jx:!0},"单":{val:0,jx:!0},"双":{val:0,jx:!0}});return t},getQedxdsColdHot:function(t,r,e){var i=this.initQedxds();if(e)for(var s=0;s<e.length;s++)if(e[s].openCode)for(var n=e[s].openCode.split(","),a=t;a<r;a++)n[a]<5?i[a]["小"].val+=1:i[a]["大"].val+=1,n[a]%2==0?i[a]["双"].val+=1:i[a]["单"].val+=1;return i.slice(t,r)},getQedsdsYl:function(t,r,e){var i=this.initQedxds(),s=["大","小","单","双"];if(e)for(var n=0;n<e.length;n++)if(e[n].openCode)for(var a=e[n].openCode.split(","),l=t;l<r;l++){a[l]<5?i[l]["小"].jx=!1:i[l]["大"].jx=!1,a[l]%2==0?i[l]["双"].jx=!1:i[l]["单"].jx=!1;for(var h=0;h<s.length;h++)i[l][s[h]].jx&&(i[l][s[h]].val+=1)}return i.slice(t,r)},initBdwwxem:function(){return{0:{val:0,jx:!0},1:{val:0,jx:!0},2:{val:0,jx:!0},3:{val:0,jx:!0},4:{val:0,jx:!0},5:{val:0,jx:!0},6:{val:0,jx:!0},7:{val:0,jx:!0},8:{val:0,jx:!0},9:{val:0,jx:!0}}},getBdwwxemColdHot:function(t){var r=this.initBdwwxem();if(t)for(var e=0;e<t.length;e++)if(t[e].openCode)for(var i=t[e].openCode.split(","),s=0;s<5;s++)r[i[s]].val++;return r},getBdwwxemYl:function(t){var r=this.initBdwwxem(),e=["0","1","2","3","4","5","6","7","8","9"];if(t)for(var i=0;i<t.length;i++)if(t[i].openCode){for(var s=t[i].openCode.split(","),n=0;n<5;n++)r[s[n]].jx=!1;for(var a=0;a<e.length;a++)r[e[a]].jx&&(r[e[a]].val+=1)}return r},initBdwhsiym:function(){return{0:{val:0,jx:!0},1:{val:0,jx:!0},2:{val:0,jx:!0},3:{val:0,jx:!0},4:{val:0,jx:!0},5:{val:0,jx:!0},6:{val:0,jx:!0},7:{val:0,jx:!0},8:{val:0,jx:!0},9:{val:0,jx:!0}}},getBdwhsiymColdHot:function(t){var r=this.initBdwhsiym();if(t)for(var e=0;e<t.length;e++)if(t[e].openCode)for(var i=t[e].openCode.split(","),s=1;s<5;s++)r[i[s]].val++;return r},getBdwhsiymYl:function(t){var r=this.initBdwhsiym(),e=["0","1","2","3","4","5","6","7","8","9"];if(t)for(var i=0;i<t.length;i++)if(t[i].openCode){for(var s=t[i].openCode.split(","),n=1;n<5;n++)r[s[n]].jx=!1;for(var a=0;a<e.length;a++)r[e[a]].jx&&(r[e[a]].val=r[e[a]].val+1)}return r},initBdwqsiym:function(){return{0:{val:0,jx:!0},1:{val:0,jx:!0},2:{val:0,jx:!0},3:{val:0,jx:!0},4:{val:0,jx:!0},5:{val:0,jx:!0},6:{val:0,jx:!0},7:{val:0,jx:!0},8:{val:0,jx:!0},9:{val:0,jx:!0}}},getBdwqsiymColdHot:function(t){var r=this.initBdwqsiym();if(t)for(var e=0;e<t.length;e++)if(t[e].openCode)for(var i=t[e].openCode.split(","),s=0;s<4;s++)r[i[s]].val++;return r},getBdwqsiymYl:function(t){var r=this.initBdwqsiym(),e=["0","1","2","3","4","5","6","7","8","9"];if(t)for(var i=0;i<t.length;i++)if(t[i].openCode){for(var s=t[i].openCode.split(","),n=0;n<4;n++)r[s[n]].jx=!1;for(var a=0;a<e.length;a++)r[e[a]].jx&&(r[e[a]].val=r[e[a]].val+1)}return r},initBdwhsym:function(){return{0:{val:0,jx:!0},1:{val:0,jx:!0},2:{val:0,jx:!0},3:{val:0,jx:!0},4:{val:0,jx:!0},5:{val:0,jx:!0},6:{val:0,jx:!0},7:{val:0,jx:!0},8:{val:0,jx:!0},9:{val:0,jx:!0}}},getBdwhsymColdHot:function(t){var r=this.initBdwhsym();if(t)for(var e=0;e<t.length;e++)if(t[e].openCode)for(var i=t[e].openCode.split(","),s=2;s<5;s++)r[i[s]].val++;return r},getBdwhsymYl:function(t){var r=this.initBdwhsym(),e=["0","1","2","3","4","5","6","7","8","9"];if(t)for(var i=0;i<t.length;i++)if(t[i].openCode){for(var s=t[i].openCode.split(","),n=2;n<5;n++)r[s[n]].jx=!1;for(var a=0;a<e.length;a++)r[e[a]].jx&&(r[e[a]].val=r[e[a]].val+1)}return r},initBdwqsym:function(){return{0:{val:0,jx:!0},1:{val:0,jx:!0},2:{val:0,jx:!0},3:{val:0,jx:!0},4:{val:0,jx:!0},5:{val:0,jx:!0},6:{val:0,jx:!0},7:{val:0,jx:!0},8:{val:0,jx:!0},9:{val:0,jx:!0}}},getBdwqsymColdHot:function(t){var r=this.initBdwqsym();if(t)for(var e=0;e<t.length;e++)if(t[e].openCode)for(var i=t[e].openCode.split(","),s=0;s<3;s++)r[i[s]].val++;return r},getBdwqsymYl:function(t){var r=this.initBdwqsym(),e=["0","1","2","3","4","5","6","7","8","9"];if(t)for(var i=0;i<t.length;i++)if(t[i].openCode){for(var s=t[i].openCode.split(","),n=0;n<3;n++)r[s[n]].jx=!1;for(var a=0;a<e.length;a++)r[e[a]].jx&&(r[e[a]].val+=1)}return r},initQezuxbd:function(){return{0:{val:0,jx:!0},1:{val:0,jx:!0},2:{val:0,jx:!0},3:{val:0,jx:!0},4:{val:0,jx:!0},5:{val:0,jx:!0},6:{val:0,jx:!0},7:{val:0,jx:!0},8:{val:0,jx:!0},9:{val:0,jx:!0}}},getQezuxbdColdHot:function(t){var r=this.initQezuxbd();if(t)for(var e=0;e<t.length;e++)if(t[e].openCode){var i=t[e].openCode.split(",");if(Number(i[0])===Number(i[1]));else for(var s=0;s<2;s++)r[i[s]].val++}return r},getQezuxbdYl:function(t){var r=this.initQezuxbd(),e=["0","1","2","3","4","5","6","7","8","9"];if(t)for(var i=0;i<t.length;i++)if(t[i].openCode){var s=t[i].openCode.split(",");if(Number(s[0])===Number(s[1]));else{for(var n=0;n<2;n++)r[s[n]].jx=!1;for(var a=0;a<e.length;a++)r[e[a]].jx&&(r[e[a]].val=r[e[a]].val+1)}}return r},initQezuxhz:function(){return{1:{val:0,jx:!0},2:{val:0,jx:!0},3:{val:0,jx:!0},4:{val:0,jx:!0},5:{val:0,jx:!0},6:{val:0,jx:!0},7:{val:0,jx:!0},8:{val:0,jx:!0},9:{val:0,jx:!0},10:{val:0,jx:!0},11:{val:0,jx:!0},12:{val:0,jx:!0},13:{val:0,jx:!0},14:{val:0,jx:!0},15:{val:0,jx:!0},16:{val:0,jx:!0},17:{val:0,jx:!0}}},getQezuxhzColdHot:function(t){var r=this.initQezuxhz();if(t)for(var e=0;e<t.length;e++)if(t[e].openCode){var i=t[e].openCode.split(",");if(Number(i[0])===Number(i[1]));else{for(var s=0,n=0;n<2;n++)s+=Number(i[n]);r[s].val++}}return r},getQezuxhzYl:function(t){var r=this.initQezuxhz(),e=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17"];if(t)for(var i=0;i<t.length;i++)if(t[i].openCode){var s=t[i].openCode.split(",");if(Number(s[0])===Number(s[1]));else{for(var n=0,a=0;a<2;a++)n+=Number(s[a]);r[n].jx=!1;for(var l=0;l<e.length;l++)r[e[l]].jx&&(r[e[l]].val=r[e[l]].val+1)}}return r},initWxzxfs:function(){for(var t=[],r=0;r<5;r++)t.push({0:{val:0,jx:!0},1:{val:0,jx:!0},2:{val:0,jx:!0},3:{val:0,jx:!0},4:{val:0,jx:!0},5:{val:0,jx:!0},6:{val:0,jx:!0},7:{val:0,jx:!0},8:{val:0,jx:!0},9:{val:0,jx:!0}});return t},getWxzxfsColdHot:function(t){var r=this.initWxzxfs();if(t)for(var e=0;e<t.length;e++)if(t[e].openCode)for(var i=t[e].openCode.split(","),s=0;s<i.length;s++)r[s][i[s]].val=r[s][i[s]].val+1;return r},getWxzxfsYl:function(t){var r=this.initWxzxfs(),e=["0","1","2","3","4","5","6","7","8","9"];if(t)for(var i=0;i<t.length;i++)if(t[i].openCode)for(var s=t[i].openCode.split(","),n=0;n<s.length;n++){r[n][s[n]].jx=!1;for(var a=0;a<e.length;a++)r[n][e[a]].jx&&(r[n][e[a]].val=r[n][e[a]].val+1)}return r},initQszxkd:function(){return{0:{val:0,jx:!0},1:{val:0,jx:!0},2:{val:0,jx:!0},3:{val:0,jx:!0},4:{val:0,jx:!0},5:{val:0,jx:!0},6:{val:0,jx:!0},7:{val:0,jx:!0},8:{val:0,jx:!0},9:{val:0,jx:!0}}},getQszxkdColdHot:function(t,r,e){var i=this.initQszxkd();if(e)for(var s=0;s<e.length;s++)if(e[s].openCode){for(var n=e[s].openCode.split(","),a=[],l=t;l<r;l++)a.push(Number(n[l]));i[Math.max.apply({},a)-Math.min.apply({},a)].val++}return i},getQszxkdYl:function(t,r,e){var i=this.initQszxkd(),s=["0","1","2","3","4","5","6","7","8","9"];if(e)for(var n=0;n<e.length;n++)if(e[n].openCode){for(var a=e[n].openCode.split(","),l=[],h=t;h<r;h++)l.push(Number(a[h]));i[Math.max.apply({},l)-Math.min.apply({},l)].jx=!1;for(var o=0;o<s.length;o++)i[s[o]].jx&&(i[s[o]].val+=1)}return i},initHstsh:function(){return{"豹子":{val:0,jx:!0},"顺子":{val:0,jx:!0},"对子":{val:0,jx:!0}}},getHstshColdHot:function(t,r,e){var i=this.initHstsh();if(e)for(var s=0;s<e.length;s++)if(e[s].openCode){var n=e[s].openCode.split(",").slice(t,r);if(Number(n[0])===Number(n[1])&&Number(n[0])===Number(n[2]))i["豹子"].val++;else if(Number(n[0])===Number(n[1])||Number(n[0])===Number(n[2])||Number(n[1])===Number(n[2]))i["对子"].val++;else{var a=[Number(n[0]),Number(n[1]),Number(n[2])];a.sort();var l=a.join("");a[2]-a[1]==1&&a[1]-a[0]==1?i["顺子"].val++:"019"===l&&"089"===l&&i["顺子"].val++}}return i},getHstshYl:function(t,r,e){var i=this.initHstsh(),s=["豹子","顺子","对子"];if(e)for(var n=0;n<e.length;n++)if(e[n].openCode){var a=e[n].openCode.split(",").slice(t,r);if(Number(a[0])===Number(a[1])&&Number(a[0])===Number(a[2]))i["豹子"].jx=!1;else if(Number(a[0])===Number(a[1])||Number(a[0])===Number(a[2])||Number(a[1])===Number(a[2]))i["对子"].jx=!1;else{var l=[Number(a[0]),Number(a[1]),Number(a[2])];l.sort();var h=l.join("");l[2]-l[1]==1&&l[1]-l[0]==1?i["顺子"].jx=!1:"019"===h&&"089"===h&&(i["顺子"].jx=!1)}for(var o=0;o<s.length;o++)i[s[o]].jx&&(i[s[o]].val=i[s[o]].val+1)}return i},initHshzws:function(){return{0:{val:0,jx:!0},1:{val:0,jx:!0},2:{val:0,jx:!0},3:{val:0,jx:!0},4:{val:0,jx:!0},5:{val:0,jx:!0},6:{val:0,jx:!0},7:{val:0,jx:!0},8:{val:0,jx:!0},9:{val:0,jx:!0}}},getHshzwsColdHot:function(t,r,e){var i=this.initHshzws();if(e)for(var s=0;s<e.length;s++)if(e[s].openCode){for(var n=e[s].openCode.split(","),a=0,l=t;l<r;l++)a+=Number(n[l]);var h=a.toString();i[h.split("")[h.length-1]].val++}return i},getHshzwsYl:function(t,r,e){var i=this.initHshzws(),s=["0","1","2","3","4","5","6","7","8","9"];if(e)for(var n=0;n<e.length;n++)if(e[n].openCode){for(var a=e[n].openCode.split(","),l=0,h=t;h<r;h++)l+=Number(a[h]);var o=l.toString();i[o.split("")[o.length-1]].jx=!1;for(var x=0;x<s.length;x++)i[s[x]].jx&&(i[s[x]].val=i[s[x]].val+1)}return i},initHsZuxhz:function(){return{1:{val:0,jx:!0},2:{val:0,jx:!0},3:{val:0,jx:!0},4:{val:0,jx:!0},5:{val:0,jx:!0},6:{val:0,jx:!0},7:{val:0,jx:!0},8:{val:0,jx:!0},9:{val:0,jx:!0},10:{val:0,jx:!0},11:{val:0,jx:!0},12:{val:0,jx:!0},13:{val:0,jx:!0},14:{val:0,jx:!0},15:{val:0,jx:!0},16:{val:0,jx:!0},17:{val:0,jx:!0},18:{val:0,jx:!0},19:{val:0,jx:!0},20:{val:0,jx:!0},21:{val:0,jx:!0},22:{val:0,jx:!0},23:{val:0,jx:!0},24:{val:0,jx:!0},25:{val:0,jx:!0},26:{val:0,jx:!0}}},getHsZuxhzColdHot:function(t,r,e){var i=this.initHsZuxhz();if(e)for(var s=0;s<e.length;s++)if(e[s].openCode){var n=e[s].openCode.split(",").slice(t,r);if(Number(n[0])===Number(n[1])&&Number(n[0])===Number(n[2]));else{for(var a=0,l=0;l<n.length;l++)a+=Number(n[l]);i[a].val++}}return i},getHsZuxhzYl:function(t,r,e){var i=this.initHsZuxhz(),s=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26"];if(e)for(var n=0;n<e.length;n++)if(e[n].openCode){var a=e[n].openCode.split(",").slice(t,r);if(Number(a[0])===Number(a[1])&&Number(a[0])===Number(a[2]));else{for(var l=0,h=0;h<a.length;h++)l+=Number(a[h]);i[l].jx=!1;for(var o=0;o<s.length;o++)i[s[o]].jx&&(i[s[o]].val+=1)}}return i},initHszuxfs:function(){return{0:{val:0,jx:!0},1:{val:0,jx:!0},2:{val:0,jx:!0},3:{val:0,jx:!0},4:{val:0,jx:!0},5:{val:0,jx:!0},6:{val:0,jx:!0},7:{val:0,jx:!0},8:{val:0,jx:!0},9:{val:0,jx:!0}}},getHszuxfsColdHot:function(t,r,e){var i=this.initHszuxfs();if(e)for(var s=0;s<e.length;s++)if(e[s].openCode)for(var n=e[s].openCode.split(","),a=t;a<r;a++)i[n[a]].val++;return i},getHszuxfsYl:function(t,r,e){var i=this.initHszuxfs(),s=["0","1","2","3","4","5","6","7","8","9"];if(e)for(var n=0;n<e.length;n++)if(e[n].openCode){for(var a=e[n].openCode.split(","),l=t;l<r;l++)i[a[l]].jx=!1;for(var h=0;h<s.length;h++)i[s[h]].jx&&(i[s[h]].val+=1)}return i},getHszxkdColdHot:function(t,r,e){var i=this.initHszxkd();if(e)for(var s=0;s<e.length;s++)if(e[s].openCode){for(var n=e[s].openCode.split(","),a=[],l=t;l<r;l++)a.push(Number(n[l]));i[Math.max.apply({},a)-Math.min.apply({},a)].val++}return i},getHszxkdYl:function(t,r,e){var i=this.initHszxkd(),s=["0","1","2","3","4","5","6","7","8","9"];if(e)for(var n=0;n<e.length;n++)if(e[n].openCode){for(var a=e[n].openCode.split(","),l=[],h=t;h<r;h++)l.push(Number(a[h]));i[Math.max.apply({},l)-Math.min.apply({},l)].jx=!1;for(var o=0;o<s.length;o++)i[s[o]].jx&&(i[s[o]].val+=1)}return i},initHszxkd:function(){return{0:{val:0,jx:!0},1:{val:0,jx:!0},2:{val:0,jx:!0},3:{val:0,jx:!0},4:{val:0,jx:!0},5:{val:0,jx:!0},6:{val:0,jx:!0},7:{val:0,jx:!0},8:{val:0,jx:!0},9:{val:0,jx:!0}}},getHszxhzColdHot:function(t,r,e){var i=this.initHszxhz();if(e)for(var s=0;s<e.length;s++)if(e[s].openCode){for(var n=e[s].openCode.split(","),a=0,l=t;l<r;l++)a+=Number(n[l]);i[a].val++}return i},getHszxhzYl:function(t,r,e){var i=this.initHszxhz(),s=["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27"];if(e)for(var n=0;n<e.length;n++)if(e[n].openCode){for(var a=e[n].openCode.split(","),l=0,h=t;h<r;h++)l+=Number(a[h]);i[l].jx=!1;for(var o=0;o<s.length;o++)i[s[o]].jx&&(i[s[o]].val+=1)}return i},initHszxhz:function(){return{0:{val:0,jx:!0},1:{val:0,jx:!0},2:{val:0,jx:!0},3:{val:0,jx:!0},4:{val:0,jx:!0},5:{val:0,jx:!0},6:{val:0,jx:!0},7:{val:0,jx:!0},8:{val:0,jx:!0},9:{val:0,jx:!0},10:{val:0,jx:!0},11:{val:0,jx:!0},12:{val:0,jx:!0},13:{val:0,jx:!0},14:{val:0,jx:!0},15:{val:0,jx:!0},16:{val:0,jx:!0},17:{val:0,jx:!0},18:{val:0,jx:!0},19:{val:0,jx:!0},20:{val:0,jx:!0},21:{val:0,jx:!0},22:{val:0,jx:!0},23:{val:0,jx:!0},24:{val:0,jx:!0},25:{val:0,jx:!0},26:{val:0,jx:!0},27:{val:0,jx:!0}}},getTwoSideArr:function(t){var r=[];r[0]=t[t.length-1];for(var e=1;e<t.length;e++)r[e]=t[e-1];return r},coldHot:function(t,r,e){var i=[];return"digit"===t||""===t?i=this.getArrByArrObj(this.getOneworldColdHot(e)):"twoSide"===t?(i=this.getOneworldColdHot(e,"twoSide"),i=this.getTwoSideArr(this.getDxdszh(this.getArrByArrObj(i)))):"oneWord"===t&&"ten_thousand"===r?i=this.getWanw(0,this.getArrByArrObj(this.getOneworldColdHot(e))):"oneWord"===t&&"thousand"===r?i=this.getWanw(1,this.getArrByArrObj(this.getOneworldColdHot(e))):"oneWord"===t&&"hundred"===r?i=this.getWanw(2,this.getArrByArrObj(this.getOneworldColdHot(e))):"oneWord"===t&&"ten"===r?i=this.getWanw(3,this.getArrByArrObj(this.getOneworldColdHot(e))):"oneWord"===t&&"one"===r?i=this.getWanw(4,this.getArrByArrObj(this.getOneworldColdHot(e))):"twoDigital"===t&&"ten_thousand_thousand"===r?i=this.getTwoArrByArr(this.getArrByArrObj(this.getOneworldColdHot(e)),0,1):"twoDigital"===t&&"ten_thousand_hundred"===r?i=this.getTwoArrByArr(this.getArrByArrObj(this.getOneworldColdHot(e)),0,2):"twoDigital"===t&&"ten_thousand_ten"===r?i=this.getTwoArrByArr(this.getArrByArrObj(this.getOneworldColdHot(e)),0,3):"twoDigital"===t&&"ten_thousand_one"===r?i=this.getTwoArrByArr(this.getArrByArrObj(this.getOneworldColdHot(e)),0,4):"twoDigital"===t&&"thousand_hundred"===r?i=this.getTwoArrByArr(this.getArrByArrObj(this.getOneworldColdHot(e)),1,2):"twoDigital"===t&&"thousand_ten"===r?i=this.getTwoArrByArr(this.getArrByArrObj(this.getOneworldColdHot(e)),1,3):"twoDigital"===t&&"thousand_one"===r?i=this.getTwoArrByArr(this.getArrByArrObj(this.getOneworldColdHot(e)),1,4):"twoDigital"===t&&"hundred_ten"===r?i=this.getTwoArrByArr(this.getArrByArrObj(this.getOneworldColdHot(e)),2,3):"twoDigital"===t&&"hundred_one"===r?i=this.getTwoArrByArr(this.getArrByArrObj(this.getOneworldColdHot(e)),2,4):"twoDigital"===t&&"ten_one"===r?i=this.getTwoArrByArr(this.getArrByArrObj(this.getOneworldColdHot(e)),3,4):"threeDigital"===t&&"ten_thousand_thousand_hundred"===r?i=this.getThreeArrByArr(this.getArrByArrObj(this.getOneworldColdHot(e)),0,1,2):"threeDigital"===t&&"ten_thousand_thousand_ten"===r?i=this.getThreeArrByArr(this.getArrByArrObj(this.getOneworldColdHot(e)),0,1,3):"threeDigital"===t&&"ten_thousand_thousand_one"===r?i=this.getThreeArrByArr(this.getArrByArrObj(this.getOneworldColdHot(e)),0,1,4):"threeDigital"===t&&"ten_thousand_hundred_ten"===r?i=this.getThreeArrByArr(this.getArrByArrObj(this.getOneworldColdHot(e)),0,2,3):"threeDigital"===t&&"ten_thousand_hundred_one"===r?i=this.getThreeArrByArr(this.getArrByArrObj(this.getOneworldColdHot(e)),0,2,4):"threeDigital"===t&&"ten_thousand_ten_one"===r?i=this.getThreeArrByArr(this.getArrByArrObj(this.getOneworldColdHot(e)),0,3,4):"threeDigital"===t&&"thousand_hundred_ten"===r?i=this.getThreeArrByArr(this.getArrByArrObj(this.getOneworldColdHot(e)),1,2,3):"threeDigital"===t&&"thousand_hundred_one"===r?i=this.getThreeArrByArr(this.getArrByArrObj(this.getOneworldColdHot(e)),1,2,4):"threeDigital"===t&&"thousand_ten_one"===r?i=this.getThreeArrByArr(this.getArrByArrObj(this.getOneworldColdHot(e)),1,3,4):"threeDigital"===t&&"hundred_ten_one"===r?i=this.getThreeArrByArr(this.getArrByArrObj(this.getOneworldColdHot(e)),2,3,4):"oneCombination"===t||"groupThree"===t||"groupSix"===t?i=this.getArrByObj(this.getHotColdNumArr(this.seldex,this.getYzzuhColdHot(e))):"span"===t&&"span_first_three"===r?i=this.getArrByObj(this.getQszxkdColdHot(0,3,e)):"span"===t&&"span_in_three"===r?i=this.getArrByObj(this.getQszxkdColdHot(1,4,e)):"span"===t&&"span_after_three"===r?i=this.getArrByObj(this.getQszxkdColdHot(2,5,e)):"dragonTigerTie"===t?i=this.getArrByDtArrObj(this.getDragonTigerTieColdHot(e)):"nn"===t&&"nn_num"===r?i=this.getArrByArrObj(this.getNnColdHot(e)).splice(0,1):"nn"===t&&"nn_side"===r?i=this.getArrByArrObj(this.getNnColdHot(e)).splice(1,1):"nn"===t&&"nn_full_house"===r&&(i=this.getArrByArrObj(this.getNnColdHot(e)).splice(2,1)),i},leaveOut:function(t,r,e){var i=[];return"digit"===t||""===t?i=this.getArrByArrObj(this.getOneworldYl(e)):"twoSide"===t?i=this.getTwoSideArr(this.getDxdszh(this.getArrByArrObj(this.getOneworldYl(e,"twoSide")))):"oneWord"===t&&"ten_thousand"===r?i=this.getWanw(0,this.getArrByArrObj(this.getOneworldYl(e))):"oneWord"===t&&"thousand"===r?i=this.getWanw(1,this.getArrByArrObj(this.getOneworldYl(e))):"oneWord"===t&&"hundred"===r?i=this.getWanw(2,this.getArrByArrObj(this.getOneworldYl(e))):"oneWord"===t&&"ten"===r?i=this.getWanw(3,this.getArrByArrObj(this.getOneworldYl(e))):"oneWord"===t&&"one"===r?i=this.getWanw(4,this.getArrByArrObj(this.getOneworldYl(e))):"twoDigital"===t&&"ten_thousand_thousand"===r?i=this.getTwoArrByArr(this.getArrByArrObj(this.getOneworldYl(e)),0,1):"twoDigital"===t&&"ten_thousand_hundred"===r?i=this.getTwoArrByArr(this.getArrByArrObj(this.getOneworldYl(e)),0,2):"twoDigital"===t&&"ten_thousand_ten"===r?i=this.getTwoArrByArr(this.getArrByArrObj(this.getOneworldYl(e)),0,3):"twoDigital"===t&&"ten_thousand_one"===r?i=this.getTwoArrByArr(this.getArrByArrObj(this.getOneworldYl(e)),0,4):"twoDigital"===t&&"thousand_hundred"===r?i=this.getTwoArrByArr(this.getArrByArrObj(this.getOneworldYl(e)),1,2):"twoDigital"===t&&"thousand_ten"===r?i=this.getTwoArrByArr(this.getArrByArrObj(this.getOneworldYl(e)),1,3):"twoDigital"===t&&"thousand_one"===r?i=this.getTwoArrByArr(this.getArrByArrObj(this.getOneworldYl(e)),1,4):"twoDigital"===t&&"hundred_ten"===r?i=this.getTwoArrByArr(this.getArrByArrObj(this.getOneworldYl(e)),2,3):"twoDigital"===t&&"hundred_one"===r?i=this.getTwoArrByArr(this.getArrByArrObj(this.getOneworldYl(e)),2,4):"twoDigital"===t&&"ten_one"===r?i=this.getTwoArrByArr(this.getArrByArrObj(this.getOneworldYl(e)),3,4):"threeDigital"===t&&"ten_thousand_thousand_hundred"===r?i=this.getThreeArrByArr(this.getArrByArrObj(this.getOneworldYl(e)),0,1,2):"threeDigital"===t&&"ten_thousand_thousand_ten"===r?i=this.getThreeArrByArr(this.getArrByArrObj(this.getOneworldYl(e)),0,1,3):"threeDigital"===t&&"ten_thousand_thousand_one"===r?i=this.getThreeArrByArr(this.getArrByArrObj(this.getOneworldYl(e)),0,1,4):"threeDigital"===t&&"ten_thousand_hundred_ten"===r?i=this.getThreeArrByArr(this.getArrByArrObj(this.getOneworldYl(e)),0,2,3):"threeDigital"===t&&"ten_thousand_hundred_one"===r?i=this.getThreeArrByArr(this.getArrByArrObj(this.getOneworldYl(e)),0,2,4):"threeDigital"===t&&"ten_thousand_ten_one"===r?i=this.getThreeArrByArr(this.getArrByArrObj(this.getOneworldYl(e)),0,3,4):"threeDigital"===t&&"thousand_hundred_ten"===r?i=this.getThreeArrByArr(this.getArrByArrObj(this.getOneworldYl(e)),1,2,3):"threeDigital"===t&&"thousand_hundred_one"===r?i=this.getThreeArrByArr(this.getArrByArrObj(this.getOneworldYl(e)),1,2,4):"threeDigital"===t&&"thousand_ten_one"===r?i=this.getThreeArrByArr(this.getArrByArrObj(this.getOneworldYl(e)),1,3,4):"threeDigital"===t&&"hundred_ten_one"===r?i=this.getThreeArrByArr(this.getArrByArrObj(this.getOneworldYl(e)),2,3,4):"oneCombination"===t||"groupThree"===t||"groupSix"===t?i=this.getArrByObj(this.getYiLouNumArr(this.getYzzuhYl(e),this.seldex)):"span"===t&&"span_first_three"===r?i=this.getArrByObj(this.getQszxkdYl(0,3,e)):"span"===t&&"span_in_three"===r?i=this.getArrByObj(this.getQszxkdYl(1,4,e)):"span"===t&&"span_after_three"===r?i=this.getArrByObj(this.getQszxkdYl(2,5,e)):"dragonTigerTie"===t?i=this.getArrByDtArrObj(this.getDragonTigerTieYl(e)):"nn"===t&&"nn_num"===r?i=this.getArrByArrObj(this.getNnYl(e)).splice(0,1):"nn"===t&&"nn_side"===r?i=this.getArrByArrObj(this.getNnYl(e)).splice(1,1):"nn"===t&&"nn_full_house"===r&&(i=this.getArrByArrObj(this.getNnYl(e)).splice(2,1)),i},officialColdHot:function(t,r){var e=[];return"ssc_sanxing_zhixuan_hsfs"===t||"ssc_sanxing_zhixuan_hszh"===t?e=this.getArrByArrObj(this.getWxzxfsColdHot(r)).slice(2,5):"ssc_sanxing_zhixuan_hshz"===t?e=this.getArrByObj(this.getHszxhzColdHot(2,5,r)):"ssc_sanxing_zhixuan_hskd"===t?e=this.getArrByObj(this.getHszxkdColdHot(2,5,r)):"ssc_sanxing_zuxuan_hsz3fs"===t||"ssc_sanxing_zuxuan_hsz6fs"===t||"ssc_sanxing_zuxuan_hszxbd"===t?e=this.getArrByObj(this.getHszuxfsColdHot(2,5,r)):"ssc_sanxing_zuxuan_hszxhz"===t?e=this.getArrByObj(this.getHsZuxhzColdHot(2,5,r)):"ssc_sanxing_zuxuan_hshzws"===t?e=this.getArrByObj(this.getHshzwsColdHot(2,5,r)):"ssc_sanxing_zuxuan_hsts"===t?e=this.getArrByObj(this.getHstshColdHot(2,5,r)):"ssc_sanxing_zhixuan_qsfs"===t||"ssc_sanxing_zhixuan_qszh"===t?e=this.getArrByArrObj(this.getWxzxfsColdHot(r)):"ssc_sanxing_zhixuan_qshz"===t?e=this.getArrByObj(this.getHszxhzColdHot(0,3,r)):"ssc_sanxing_zhixuan_qskd"===t?e=this.getArrByObj(this.getQszxkdColdHot(0,3,r)):"ssc_sanxing_zuxuan_qsz3fs"===t||"ssc_sanxing_zuxuan_qsz6fs"===t||"ssc_sanxing_zuxuan_qszxbd"===t?e=this.getArrByObj(this.getHszuxfsColdHot(0,3,r)):"ssc_sanxing_zuxuan_qszxhz"===t?e=this.getArrByObj(this.getHsZuxhzColdHot(0,3,r)):"ssc_sanxing_zuxuan_qshzws"===t?e=this.getArrByObj(this.getHshzwsColdHot(0,3,r)):"ssc_sanxing_zuxuan_qsts"===t?e=this.getArrByObj(this.getHstshColdHot(0,3,r)):"ssc_wuxing_zhixuan_fs"===t||"ssc_yixing_dwd"===t||"ssc_renxuan2_zxfs"===t||"ssc_renxuan3_zxfs"===t||"ssc_renxuan4_zxfs"===t?e=this.getArrByArrObj(this.getWxzxfsColdHot(r)):"ssc_sixing_zhixuan_fs"===t?e=this.getArrByArrObj(this.getWxzxfsColdHot(r)).slice(1):"ssc_erxing_zhixuan_qefs"===t?e=this.getArrByArrObj(this.getWxzxfsColdHot(r)).slice(0,2):"ssc_erxing_zhixuan_qehz"===t?e=this.getArrByObj(this.getHszxhzColdHot(0,2,r)):"ssc_erxing_zhixuan_qekd"===t?e=this.getArrByObj(this.getQszxkdColdHot(0,2,r)):"ssc_erxing_zuxuan_qefs"===t?e=this.getArrByObj(this.getHszuxfsColdHot(0,2,r)):"ssc_erxing_zuxuan_qehz"===t?e=this.getArrByObj(this.getQezuxhzColdHot(r)):"ssc_erxing_zuxuan_qebd"===t?e=this.getArrByObj(this.getQezuxbdColdHot(r)):"ssc_budingwei_q3ym"===t||"ssc_budingwei_q3em"===t?e=this.getArrByObj(this.getBdwqsymColdHot(r)):"ssc_budingwei_h3ym"===t||"ssc_budingwei_h3em"===t?e=this.getArrByObj(this.getBdwhsymColdHot(r)):"ssc_budingwei_q4ym"===t||"ssc_budingwei_q4em"===t?e=this.getArrByObj(this.getBdwqsiymColdHot(r)):"ssc_budingwei_h4ym"===t||"ssc_budingwei_h4em"===t?e=this.getArrByObj(this.getBdwhsiymColdHot(r)):"ssc_budingwei_wxem"===t||"ssc_budingwei_wxsm"===t?e=this.getArrByObj(this.getBdwwxemColdHot(r)):"ssc_daxiaodanshuang_q2"===t?e=this.getArrByArrObj(this.getQedxdsColdHot(0,2,r)):"ssc_daxiaodanshuang_q3"===t?e=this.getArrByArrObj(this.getQedxdsColdHot(0,3,r)):"ssc_daxiaodanshuang_h2"===t?e=this.getArrByArrObj(this.getQedxdsColdHot(3,5,r)):"ssc_daxiaodanshuang_h3"===t&&(e=this.getArrByArrObj(this.getQedxdsColdHot(2,5,r))),e},officialLeaveOut:function(t,r){var e=[];return"ssc_sanxing_zhixuan_hsfs"===t||"ssc_sanxing_zhixuan_hszh"===t?e=this.getArrByArrObj(this.getWxzxfsYl(r)).slice(2,5):"ssc_sanxing_zhixuan_hshz"===t?e=this.getArrByObj(this.getHszxhzYl(2,5,r)):"ssc_sanxing_zhixuan_hskd"===t?e=this.getArrByObj(this.getHszxkdYl(2,5,r)):"ssc_sanxing_zuxuan_hsz3fs"===t||"ssc_sanxing_zuxuan_hsz6fs"===t||"ssc_sanxing_zuxuan_hszxbd"===t?e=this.getArrByObj(this.getHszuxfsYl(2,5,r)):"ssc_sanxing_zuxuan_hszxhz"===t?e=this.getArrByObj(this.getHsZuxhzYl(2,5,r)):"ssc_sanxing_zuxuan_hshzws"===t?e=this.getArrByObj(this.getHshzwsYl(2,5,r)):"ssc_sanxing_zuxuan_hsts"===t?e=this.getArrByObj(this.getHstshYl(2,5,r)):"ssc_sanxing_zhixuan_qsfs"===t||"ssc_sanxing_zhixuan_qszh"===t?e=this.getArrByArrObj(this.getWxzxfsYl(r)):"ssc_sanxing_zhixuan_qshz"===t?e=this.getArrByObj(this.getHszxhzYl(0,3,r)):"ssc_sanxing_zhixuan_qskd"===t?e=this.getArrByObj(this.getQszxkdYl(0,3,r)):"ssc_sanxing_zuxuan_qsz3fs"===t||"ssc_sanxing_zuxuan_qsz6fs"===t||"ssc_sanxing_zuxuan_qszxbd"===t?e=this.getArrByObj(this.getHszuxfsYl(0,3,r)):"ssc_sanxing_zuxuan_qszxhz"===t?e=this.getArrByObj(this.getHsZuxhzYl(0,3,r)):"ssc_sanxing_zuxuan_qshzws"===t?e=this.getArrByObj(this.getHshzwsYl(0,3,r)):"ssc_sanxing_zuxuan_qsts"===t?e=this.getArrByObj(this.getHstshYl(0,3,r)):"ssc_wuxing_zhixuan_fs"===t||"ssc_yixing_dwd"===t||"ssc_renxuan2_zxfs"===t||"ssc_renxuan3_zxfs"===t||"ssc_renxuan4_zxfs"===t?e=this.getArrByArrObj(this.getWxzxfsYl(r)):"ssc_sixing_zhixuan_fs"===t?e=this.getArrByArrObj(this.getWxzxfsYl(r)).slice(1):"ssc_erxing_zhixuan_qefs"===t?e=this.getArrByArrObj(this.getWxzxfsYl(r)).slice(0,2):"ssc_erxing_zhixuan_qehz"===t?e=this.getArrByObj(this.getHszxhzYl(0,2,r)):"ssc_erxing_zhixuan_qekd"===t?e=this.getArrByObj(this.getQszxkdYl(0,2,r)):"ssc_erxing_zuxuan_qefs"===t?e=this.getArrByObj(this.getHszuxfsYl(0,2,r)):"ssc_erxing_zuxuan_qehz"===t?e=this.getArrByObj(this.getQezuxhzYl(r)):"ssc_erxing_zuxuan_qebd"===t?e=this.getArrByObj(this.getQezuxbdYl(r)):"ssc_budingwei_q3ym"===t||"ssc_budingwei_q3em"===t?e=this.getArrByObj(this.getBdwqsymYl(r)):"ssc_budingwei_h3ym"===t||"ssc_budingwei_h3em"===t?e=this.getArrByObj(this.getBdwhsymYl(r)):"ssc_budingwei_q4ym"===t||"ssc_budingwei_q4em"===t?e=this.getArrByObj(this.getBdwqsiymYl(r)):"ssc_budingwei_h4ym"===t||"ssc_budingwei_h4em"===t?e=this.getArrByObj(this.getBdwhsiymYl(r)):"ssc_budingwei_wxem"===t||"ssc_budingwei_wxsm"===t?e=this.getArrByObj(this.getBdwwxemYl(r)):"ssc_daxiaodanshuang_q2"===t?e=this.getArrByArrObj(this.getQedsdsYl(0,2,r)):"ssc_daxiaodanshuang_q3"===t?e=this.getArrByArrObj(this.getQedsdsYl(0,3,r)):"ssc_daxiaodanshuang_h2"===t?e=this.getArrByArrObj(this.getQedsdsYl(3,5,r)):"ssc_daxiaodanshuang_h3"===t&&(e=this.getArrByArrObj(this.getQedsdsYl(2,5,r))),e}}}}]);