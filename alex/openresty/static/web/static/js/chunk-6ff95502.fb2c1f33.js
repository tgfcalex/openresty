(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6ff95502"],{"03de":function(e,t,s){},"0cc8":function(e,t,s){"use strict";var i=s("e777");s.n(i).a},"18a7":function(e,t,s){"use strict";s("8e6e");var i=s("bd86"),n=(s("a481"),s("55dd"),s("ac6a"),s("456d"),s("d608")),a=s("2f62");function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}var c={props:["betCodes","seleList","expect"],components:{BettingPopup:n.a,tip:function(){return s.e("chunk-2e019b21").then(s.bind(null,"5e25"))}},data:function(){return{bettingPopupFlag:!1,successFlag:!1,bettingFlg:!1,keyList:["c",0,"ok"],units:1,multiple:1,odd:-1,baseRebate:-1,rebate:0,baseNum:-1,oddArr:null,betOrder:[],successTitle:"",isRequest:!1,userInfoFlag:!1}},created:function(){},methods:{getOdd:function(){var e=this,t=this.$route.params.playCode;this.$api.get(this.$apiUrl.LOTTO.GET_OLD_ODD,{code:t,betCodes:this.betCodes},(function(t){var s=Object.keys(t.data[0]);e.oddArr=t.data[0][s[0]],e.baseRebate=e.oddArr.rebate,e.baseNum=e.oddArr.baseNum,e.odd=e.oddArr.odd;var i=[];if(1<Object.keys(t.data[0]).length){var n=t.data[0];for(var a in n)i.push(n[a].odd);i.sort((function(e,t){return t-e})),e.odd=i[0]}}),(function(t){e.toast("获取赔率失败！请刷新重试")}))},formatOrder:function(){this.saveOrderCheck()&&(this.isRequest=!0,this.betOrder=[{betNum:this.seleList.betNum,betCode:this.oddArr.betCode,playCode:this.oddArr.playCode,betAmount:this.money,odd:this.odd/this.units,betCount:this.seleList.num,multiple:this.multiple,bonusModel:this.units,rebate:this.rebate}],this.bettingPopupFlag=!0,this.isRequest=!1)},saveOrders:function(e){var t=this;this.$api.post(this.$apiUrl.LOTTO.SAVE_BET_ORDER,e,(function(e){0===e.error?(sessionStorage.fctoken=e.extend,t.$store.dispatch("changeUserInfoBalance",e.data.balance),t.successTitle="",t.$parent.rest(),t.addRecentLottery()):(t.getFctoken(),t.successTitle=e.message),t.successFlag=!0,t.bettingPopupFlag=!1,t.bettingFlg=!1,setTimeout((function(){t.successFlag=!1,t.successTitle=""}),1500)}),(function(e){t.getFctoken((function(){t.bettingFlg=!1,500==e.code&&(t.successTitle="投注失败，错误码：500，请联系管理员",t.successFlag=!0)}))}))},changeUnits:function(e){this.odd<0?this.toast("系统繁忙，请稍后再试"):(this.units=e,this.odd/=this.units)},addRecentLottery:function(){var e=localStorage.recentLottery,t=this.lottery[this.$route.params.playCode],s={code:t.code,type:t.type,lotteryName:t.lotteryName,newModel:"official",firstTitle:this.$parent.$refs.playTab.indexOne,secondTitle:this.$parent.$refs.playTab.indexTwo,thirdTitle:this.$parent.$refs.playTab.indexThree};if(e){for(var i=JSON.parse(localStorage.recentLottery),n=0;n<i.length;n++)if(i[n].code===this.$route.params.playCode){i.splice(n,1);break}3<=i.length&&i.pop(),i.unshift(s),localStorage.recentLottery=JSON.stringify(i)}else localStorage.recentLottery=JSON.stringify([s])},restResult:function(){this.units=1,this.multiple=1,this.rebate=0},saveOrderCheck:function(){return this.isRequest||this.bettingFlg?(this.toast("正在努力提交注单中... 请稍后"),!1):""===this.multiple||0===this.multiple?(this.toast("请输入倍数"),!1):this.seleList&&0!==this.seleList.num?sessionStorage.token?this.oddArr?!this.stopBet(this.money)||(this.toast("您的余额不足！"),!1):(this.toast("赔率还没请求完成哟！"),!1):(this.toast("您还未登录，请先登录"),!1):(this.toast("请选择一注号码后再投注"),!1)},stopBet:function(e){var t=this.userInfo.balance;return 1*(t=(t=t.replace(/，/g,"")).replace(/,/g,""))<1*e},getFctoken:function(e){var t=0<arguments.length&&void 0!==e?e:function(){};this.$api.get(this.$apiUrl.LOTTO.GET_LT_TOKEN,null,(function(e){sessionStorage.fctoken=e.data,t()}))},changeKeyboardStatus:function(){this.$store.dispatch("changeKeyboardStatus",!0)},keyDown:function(e){0!==parseInt(e)||""!==this.multiple?isNaN(e)?"c"===e?this.multiple="":"ok"===e&&this.$store.dispatch("changeKeyboardStatus",!1):this.multiple=parseInt(String(this.multiple)+e):this.multiple=""},refreshBalance:function(){var e=this;this.userInfoFlag=!0,this.$api.get(this.$apiUrl.ACCOUNT.GET_BALANCE,null,(function(t){if(0===t.error){var s=e.userInfo;s.balance=t.data,e.$store.dispatch("setUserInfo",s)}setTimeout((function(){e.userInfoFlag=!1}),1e3)}))}},computed:function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(s,!0).forEach((function(t){Object(i.a)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(s).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({},Object(a.b)(["userInfo","lottery","keyboardStatus"]),{money:function(){var e=0;return this.seleList&&void 0!==this.seleList.num&&(e=2*this.seleList.num*this.multiple/this.units),e.toFixed(3)}}),filters:{filterUntis:function(e){return 1===e?"元":10===e?"角":100===e?"分":"未知"}},watch:{betCodes:{handler:function(){this.baseRebate=-1,this.baseNum=-1,this.odd=-1,this.restResult(),this.getOdd()}},seleList:{handler:function(){this.$store.dispatch("changeKeyboardStatus",!1)},deep:!0}}},o=(s("0cc8"),s("2877")),l=Object(o.a)(c,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"official-betbottom-wrapper",attrs:{id:"officialOuter"}},[s("div",[s("div",{staticClass:"betting-des-outer"},[s("p",[e._v("\n        共\n        "),s("span",{staticClass:"theme-font-color bold-font"},[e._v(e._s(e.seleList&&e.seleList.num?e.seleList.num:0))]),e._v("\n        注:\n        "),s("span",{staticClass:"theme-font-color bold-font"},[e._v(e._s(e.money))]),e._v("\n        元\n      ")]),e.userInfo?s("p",{on:{click:function(t){return e.refreshBalance()}}},[e._v("\n        余额:\n        "),s("span",{staticClass:"theme-font-color bold-font"},[e._v(e._s(e.userInfo.balance))]),e._v("\n        元\n        "),s("i",{class:["iconfont",e.userInfoFlag?"icon-jiazai":"icon-shuaxin"]})]):e._e()]),s("div",{staticClass:"btn-wrapper"},[s("ul",{staticClass:"units-wrppaer"},[s("li",{class:{"theme-backgound":1===this.units},on:{click:function(t){e.units=1}}},[e._v("元")]),s("li",{class:{"theme-backgound":10===this.units},on:{click:function(t){e.units=10}}},[e._v("角")]),s("li",{class:{"theme-backgound":100===this.units},on:{click:function(t){e.units=100}}},[e._v("分")])]),s("ul",{staticClass:"multiple-wrapper"},[s("li",{on:{click:function(t){1!==e.multiple&&(e.multiple-=1)}}},[e._v("-")]),s("li",{on:{click:function(t){return e.changeKeyboardStatus()}}},[e._v("\n          "+e._s(e.multiple)+"\n          "),e.keyboardStatus?s("img",{staticClass:"focus_img",attrs:{src:e.$publicPath+"images/cursor.gif"}}):e._e()]),s("li",{on:{click:function(t){e.multiple+=1}}},[e._v("+")])]),s("ul",{staticClass:"beting-btn-wrapper"},[s("li",{on:{click:function(t){return e.$parent.rest()}}},[e._v("重置")]),s("li",{class:["btn-bet-init",{"theme-backgound":e.seleList&&e.seleList.num}],on:{click:function(t){return e.formatOrder()}}},[e._v("\n          "+e._s(e.bettingFlg?"投注中":"投注")+"\n          "),e.bettingFlg?s("i",{staticClass:"iconfont icon-jiazai loading"}):e._e()])])]),e.keyboardStatus?s("div",{staticClass:"betting_bottom fl"},[s("div",{staticClass:"keyboard_left fl"},e._l(9,(function(t){return s("div",{key:t,class:["buttons",{activeBtn:e.keyNum===t}],on:{click:function(s){return e.keyDown(t)},touchstart:function(s){e.keyNum=t},touchend:function(t){e.keyNum=""}}},[e._v("\n          "+e._s(t)+"\n        ")])})),0),s("div",{staticClass:"keyboard_right fl"},e._l(e.keyList,(function(t,i){return s("div",{key:i,class:["buttons",{activeBtn:e.keyNum===t}],on:{click:function(s){return e.keyDown(t)},touchstart:function(s){e.keyNum=t},touchend:function(t){e.keyNum=""}}},["c"!==t?s("span",[e._v(e._s(t))]):s("i",{class:["iconfont icon-clear",{whiteIcon:e.keyNum===t}]})])})),0)]):e._e()]),e.bettingPopupFlag?s("betting-popup",{attrs:{betOrders:e.betOrder,expect:e.expect}}):e._e(),s("tip",{attrs:{successTitle:e.successTitle},model:{value:e.successFlag,callback:function(t){e.successFlag=t},expression:"successFlag"}})],1)}),[],!1,null,"2160473c",null);t.a=l.exports},2933:function(e,t,s){"use strict";var i=s("03de");s.n(i).a},"37fd":function(e,t,s){"use strict";s("8e6e"),s("ac6a"),s("456d");var i=s("bd86"),n=(s("7f7f"),s("6b54"),s("2f62"));function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}var r={props:["viewObject","checkBox","numLen","limitSame","limitArr","disableBtn","lrylList","randomArr"],data:function(){return{viewResult:null,processing:!1,btnProcessing:!1,seleNumList:null,checkedNames:[]}},mounted:function(){for(var e=document.getElementsByClassName("ball"),t=0;t<e.length;t++){var s=this.getStyle(e[0],"width");e[t].style.height=s,e[t].style.lineHeight=s}for(var i=document.getElementsByClassName("setCommonTag"),n=0;n<i.length;n++){var a=this.getStyle(i[n],"width");i[n].style.height=a,i[n].style.lineHeight=a}},methods:{getStyle:function(e,t){return document.defaultView?document.defaultView.getComputedStyle(e)[t]:e.currentStyle[t]},hadleViewResult:function(){this.viewResult=null,this.seleNumList=null;for(var e=this.viewObject.list,t=[],s=this.numLen instanceof Array,i=0;i<e.length;i++){for(var n=e[i],a=[],r=n.start;r<=n.max;r++){var c=n.addZero&&r<10?"0"+r:r;if(this.numLen&&!n.addZero&&r<10){c="";for(var o=s?parseInt(this.numLen[i]):this.numLen,l=0;l<o;l++)c+=r.toString()}a.push({num:c,isSele:!1})}t.push({name:n.name,numList:a})}this.viewResult=t},seleNum:function(e,t,s){if(s&&(this.viewResult[e].btnType=2),this.viewResult&&void 0!==e&&void 0!==t&&!this.processing){if(this.processing=!0,!this.seleNumList){this.seleNumList=[];for(var i=0;i<this.viewResult.length;i++)this.seleNumList.push([])}var n=this.viewResult[e].numList[t];if(n.isSele)for(var a=0;a<this.seleNumList[e].length;a++)this.seleNumList[e][a]===n.num&&this.seleNumList[e].splice(a,1);else this.seleNumList[e].push(n.num),this.limitSame&&this.handleLimitSame(e,t,n.num),this.limitArr&&this.handeLimitArr(e,t);this.$set(n,"isSele",!n.isSele);var r=this.seleNumList;this.checkBox&&(r={checkList:this.formatWQBSG(),val:this.seleNumList}),s&&this.$emit("emitList",r),this.processing=!1}},handleLimitSame:function(e,t){for(var s=0;s<this.seleNumList.length;s++){var i=this.viewResult[s].numList[t].num;if(!(s===e||JSON.stringify(this.seleNumList[s]).indexOf(i)<0))for(var n=this.seleNumList[s],a=0;a<n.length;a++)i===n[a]&&(this.viewResult[s].btnType=2,this.seleNumList[s].splice(a,1),this.$set(this.viewResult[s].numList[t],"isSele",!1))}},handeLimitArr:function(e,t){if(!(this.limitArr[0].indexOf(e)<0)&&this.limitArr[1][this.limitArr[e].indexOf(e)]<this.seleNumList[e].length){for(var s=0;s<this.viewResult[e].numList.length;s++){var i=this.viewResult[e].numList[s];i.num===this.seleNumList[e][0]&&this.$set(i,"isSele",!1)}this.seleNumList[e].splice(0,1)}},handelBtn:function(e,t){if(!this.btnProcessing){this.viewResult[e].btnType=t,this.btnProcessing=!0;for(var s=this.viewResult[e].numList,i=0;i<s.length;i++){var n=s[i];if(1===t?n.isSele||this.seleNum(e,i,!1):2===t?n.isSele&&this.seleNum(e,i,!1):3===t?i>=Math.floor(s.length/2)&&!n.isSele?this.seleNum(e,i,!1):i<Math.floor(s.length/2)&&n.isSele&&this.seleNum(e,i,!1):4===t?i<Math.floor(s.length/2)&&!n.isSele?this.seleNum(e,i,!1):i>=Math.floor(s.length/2)&&n.isSele&&this.seleNum(e,i,!1):5===t?parseInt(n.num)%2==0||n.isSele?parseInt(n.num)%2==0&&n.isSele&&this.seleNum(e,i,!1):this.seleNum(e,i,!1):6===t&&(parseInt(n.num)%2!=0||n.isSele?parseInt(n.num)%2!=0&&n.isSele&&this.seleNum(e,i,!1):this.seleNum(e,i,!1)),s.length-1===i){var a=this.seleNumList;this.checkBox&&(a={checkList:this.formatWQBSG(),val:this.seleNumList}),this.$emit("emitList",a)}}this.btnProcessing=!1}},randomNum:function(){if(this.getNum(),this.randomArr){for(var e=[],t=[],s=0;s<this.randomArr.length;s++){var i=s;if(this.randomArr.length!==this.viewResult.length&&(i=this.getNum(0,this.viewResult.length-1)),0<=e.indexOf(i))--s;else{e.push(i);for(var n=0;n<this.randomArr[s];n++){var a=this.getNum(0,this.viewResult[i].numList.length-1);0<=t.indexOf(a)?n--:(t.push(a),this.seleNum(i,a))}}}var r=document.getElementsByClassName("option-big"),c=e[e.length-1],o=t[t.length-1],l=this.$refs[c+"_"+o][0];if(r){var h=parseInt(window.getComputedStyle(r[0],null).height)*c+parseInt(window.getComputedStyle(l,null).height)*Math.floor((o+1)/5);this.$parent.$parent.wrapperScoll&&this.$parent.$parent.wrapperScoll.scrollTo(0,-h,200)}var u=this.seleNumList;this.checkBox&&(u={checkList:this.formatWQBSG(),val:this.seleNumList}),this.$emit("emitList",u)}else this.toast("此玩法无随机一注功能~")},getNum:function(e,t){var s=t-e,i=Math.random();return e+Math.round(i*s)},formatWQBSG:function(){for(var e=["万","千","百","十","个"],t=[],s=0;s<e.length;s++)0<=this.checkedNames.indexOf(e[s])&&t.push(e[s]);return t}},computed:function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(s,!0).forEach((function(t){Object(i.a)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(s).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({},Object(n.b)(["randomTimestamp"])),watch:{viewObject:{handler:function(e){e&&this.hadleViewResult()},deep:!0,immediate:!0},checkedNames:{handler:function(e){var t={checkList:this.formatWQBSG(),val:this.seleNumList};this.$emit("emitList",t)}},checkBox:{handler:function(e){e instanceof Array&&(this.checkedNames=e)},immediate:!0},randomTimestamp:function(){var e=this;this.hadleViewResult(),this.$nextTick((function(){e.randomNum()}))}}},c=(s("2933"),s("2877")),o=Object(c.a)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"official-one-view"},[e.checkBox?s("div",{staticClass:"checkbox-box"},[s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedNames,expression:"checkedNames"}],attrs:{type:"checkbox",value:"万"},domProps:{checked:Array.isArray(e.checkedNames)?-1<e._i(e.checkedNames,"万"):e.checkedNames},on:{change:function(t){var s=e.checkedNames,i=t.target,n=!!i.checked;if(Array.isArray(s)){var a=e._i(s,"万");i.checked?a<0&&(e.checkedNames=s.concat(["万"])):-1<a&&(e.checkedNames=s.slice(0,a).concat(s.slice(a+1)))}else e.checkedNames=n}}}),s("label",{attrs:{for:"wan"}},[e._v("万位")])]),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedNames,expression:"checkedNames"}],attrs:{type:"checkbox",value:"千"},domProps:{checked:Array.isArray(e.checkedNames)?-1<e._i(e.checkedNames,"千"):e.checkedNames},on:{change:function(t){var s=e.checkedNames,i=t.target,n=!!i.checked;if(Array.isArray(s)){var a=e._i(s,"千");i.checked?a<0&&(e.checkedNames=s.concat(["千"])):-1<a&&(e.checkedNames=s.slice(0,a).concat(s.slice(a+1)))}else e.checkedNames=n}}}),s("label",{attrs:{for:"qian"}},[e._v("千位")])]),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedNames,expression:"checkedNames"}],attrs:{type:"checkbox",value:"百"},domProps:{checked:Array.isArray(e.checkedNames)?-1<e._i(e.checkedNames,"百"):e.checkedNames},on:{change:function(t){var s=e.checkedNames,i=t.target,n=!!i.checked;if(Array.isArray(s)){var a=e._i(s,"百");i.checked?a<0&&(e.checkedNames=s.concat(["百"])):-1<a&&(e.checkedNames=s.slice(0,a).concat(s.slice(a+1)))}else e.checkedNames=n}}}),s("label",{attrs:{for:"bai"}},[e._v("百位")])]),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedNames,expression:"checkedNames"}],attrs:{type:"checkbox",value:"十"},domProps:{checked:Array.isArray(e.checkedNames)?-1<e._i(e.checkedNames,"十"):e.checkedNames},on:{change:function(t){var s=e.checkedNames,i=t.target,n=!!i.checked;if(Array.isArray(s)){var a=e._i(s,"十");i.checked?a<0&&(e.checkedNames=s.concat(["十"])):-1<a&&(e.checkedNames=s.slice(0,a).concat(s.slice(a+1)))}else e.checkedNames=n}}}),s("label",{attrs:{for:"shi"}},[e._v("十位")])]),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedNames,expression:"checkedNames"}],attrs:{type:"checkbox",value:"个"},domProps:{checked:Array.isArray(e.checkedNames)?-1<e._i(e.checkedNames,"个"):e.checkedNames},on:{change:function(t){var s=e.checkedNames,i=t.target,n=!!i.checked;if(Array.isArray(s)){var a=e._i(s,"个");i.checked?a<0&&(e.checkedNames=s.concat(["个"])):-1<a&&(e.checkedNames=s.slice(0,a).concat(s.slice(a+1)))}else e.checkedNames=n}}}),s("label",{attrs:{for:"ge"}},[e._v("个位")])])]):e._e(),e._l(e.viewResult,(function(t,i){return s("div",{key:i,staticClass:"option-big clear"},[s("div",{staticClass:"option-title"},[e._v(e._s(t.name))]),s("div",{staticClass:"num-list-outer"},[s("ul",{staticClass:"clear list-wrapper"},e._l(t.numList,(function(t,n){return s("li",{key:n,ref:i+"_"+n,refInFor:!0,class:["ball num",{activeBox:t.isSele}],on:{click:function(t){return e.seleNum(i,n,!0)}}},[e._v("\n          "+e._s(t.num)+"\n          "),e.$store.state.other.lrStatus||e.$store.state.other.ylStatus?s("span",{staticClass:"lrylNum"},[e._v(e._s(e.lrylList[i][n].val))]):e._e()])})),0),e.disableBtn?e._e():s("div",{staticClass:"setWidth"},[e.limitArr&&e.limitArr[0]==i?e._e():s("ul",{staticClass:"btn-list"},[s("li",{class:["setCommonTag",{"theme-backgound":1===t.btnType}],on:{click:function(t){return e.handelBtn(i,1)}}},[e._v("全")]),s("li",{staticClass:"setCommonTag",on:{click:function(t){return e.handelBtn(i,2)}}},[e._v("清")]),e.numLen?e._e():s("li",{class:["setCommonTag",{"theme-backgound":3===t.btnType}],on:{click:function(t){return e.handelBtn(i,3)}}},[e._v("大")]),e.numLen?e._e():s("li",{class:["setCommonTag",{"theme-backgound":4===t.btnType}],on:{click:function(t){return e.handelBtn(i,4)}}},[e._v("小")]),e.numLen?e._e():s("li",{class:["setCommonTag",{"theme-backgound":5===t.btnType}],on:{click:function(t){return e.handelBtn(i,5)}}},[e._v("奇")]),e.numLen?e._e():s("li",{class:["setCommonTag",{"theme-backgound":6===t.btnType}],on:{click:function(t){return e.handelBtn(i,6)}}},[e._v("偶")])])])])])}))],2)}),[],!1,null,"e86842d0",null);t.a=o.exports},cfdb:function(e,t,s){"use strict";s("7f7f"),s("ac6a"),s("456d");var i=s("1fba"),n={props:{modelList:{require:!0}},data:function(){return{oneTabWiath:0,twoTabWiath:0,threeTabWiath:0,indexOne:0,indexTwo:0,indexThree:0,twoTabArr:0,threeTabArr:0}},methods:{initTitle:function(){if(0!==Object.keys(this.$route.query).length){this.indexOne=parseInt(this.$route.query.firstTitle),this.indexTwo=parseInt(this.$route.query.secondTitle),this.indexThree=parseInt(this.$route.query.thirdTitle);for(var e=[this.indexOne,this.indexTwo,this.indexThree],t=0;t<e.length;t++)this.changeTab(e[t],t)}},setSmallListWidth:function(e,t){for(var s=1<arguments.length&&void 0!==t?t:1,i=1===s?.14:.13,n=1===s?.14:.13,a=.6,r=0;r<e.length;r++)a+=e[r].name.length*i,r<e.length-2&&(a+=n);"syx5_renxuan_one_onefs"!==e[0].code&&"syx5_renxuan_two_twodt"!==e[0].code||(a+=1.2),1===s?this.oneTabWiath=a:2===s?this.twoTabWiath=a:this.threeTabWiath=a},changPlayType:function(e){this.$emit("changPlayType",e)},changHasBgFalg:function(){var e=1===this.threeTabArr.length||1===this.threeTabArr.length&&1===this.twoTabArr.length;this.$emit("changHasBgFalg",e)},bindScroll:function(e,t){var s=this;this.$nextTick((function(){if(s.$refs["tabRef_"+e]){var n=s.$refs["tabRef_"+e];s["myScroll"+e]?s["myScroll"+e].refresh():s["myScroll"+e]=new i.a(n,{click:!0,scrollX:!0}),0!==t&&s["myScroll"+e].scrollToElement(s.$refs[e+"_"+t][0],300,!0)}else s.toast("标题滚动失败")}))},changeTab:function(e,t){for(var s=this,i=["indexOne","indexTwo","indexThree"],n=["modelList","twoTabArr","threeTabArr"],a=t;a<i.length;a++)this[i[a]]=a===t?e:0;this.twoTabArr=this.modelList[this.indexOne].list,this.threeTabArr=this.modelList[this.indexOne].list[this.indexTwo].list;var r=this.modelList[this.indexOne].list[this.indexTwo].list[this.indexThree].code;this.changPlayType(r),this.changHasBgFalg();for(var c=function(e){s.setSmallListWidth(s[n[e]],e+1),s.$nextTick((function(){1<s[n[e]].length&&s.bindScroll(e+1,s[i[e]])}))},o=0;o<n.length;o++)c(o)}},watch:{modelList:{handler:function(e){0===Object.keys(this.$route.query).length?this.changeTab(0,0):this.initTitle()},immediate:!0}}},a=(s("fc94"),s("2877")),r=Object(a.a)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"play_tab_wrapper"},[s("div",{ref:"tabRef_1",staticClass:"one_tab tab_outer"},[s("ul",{style:{width:e.oneTabWiath+"rem"}},e._l(e.modelList,(function(t,i){return s("li",{key:i,ref:"1_"+i,refInFor:!0,class:{modelActive:e.indexOne===i},on:{click:function(t){return e.changeTab(i,0)}}},[e._v("\n        "+e._s(t.name)+"\n      ")])})),0)]),s("div",{directives:[{name:"show",rawName:"v-show",value:1<e.twoTabArr.length,expression:"twoTabArr.length > 1"}],ref:"tabRef_2",staticClass:"two_tab tab_outer other_tab"},[s("ul",{style:{width:e.twoTabWiath+"rem"}},e._l(e.twoTabArr,(function(t,i){return s("li",{key:i,ref:"2_"+i,refInFor:!0,class:{modelActive:e.indexTwo===i},on:{click:function(t){return e.changeTab(i,1)}}},[e._v("\n        "+e._s(t.name)+"\n      ")])})),0)]),s("div",{directives:[{name:"show",rawName:"v-show",value:1<e.threeTabArr.length,expression:"threeTabArr.length > 1"}],ref:"tabRef_3",staticClass:"three_tab tab_outer other_tab"},[s("ul",{style:{width:e.threeTabWiath+"rem"}},e._l(e.threeTabArr,(function(t,i){return s("li",{key:i,ref:"3_"+i,refInFor:!0,class:{modelActive:e.indexThree===i},on:{click:function(t){return e.changeTab(i,2)}}},[e._v("\n        "+e._s(t.name)+"\n      ")])})),0)])])}),[],!1,null,"0d12c8ac",null);t.a=r.exports},e44b:function(e,t,s){},e777:function(e,t,s){},fc94:function(e,t,s){"use strict";var i=s("e44b");s.n(i).a}}]);