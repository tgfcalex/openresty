(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-48385544"],{2584:function(t,e,i){"use strict";var s=i("9b9d");i.n(s).a},"9b9d":function(t,e,i){},c00f:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"a",(function(){return n})),i("55dd"),i("ac6a"),i("456d");var s=i("1fba"),n={},o={getLryl:function(t){var e=this,i=this.lotteryRecent,s="",n="";if(this.zodiacData&&(n=this.zodiacData),i)1===t?(s=this.lrylMethods.coldHot(this.modelActive,this.childrenModelActive,i,n),this.lrylList=s,this.$store.dispatch("changeLrBtnStatus",!0)):2===t&&(s=this.lrylMethods.leaveOut(this.modelActive,this.childrenModelActive,i,n),this.lrylList=s,this.$store.dispatch("changeYlBtnStatus",!0));else{if(this.apiStatus)return void this.toast("处理数据中请稍后");this.$store.dispatch("changeAllHistoryLoading",!0),this.$api.get(this.$apiUrl.LOTTO.GET_RECENT_RECORDS,{code:this.playCode,pageSize:80},(function(i){if(0===i.error){if(e.$store.dispatch("changeAllHistoryLoading",!1),0===i.data.length)return void e.toast("暂无开奖数据");e.$store.dispatch("changeRecentFlag",!1),e.$store.dispatch("setRecent",i.data),1===t?(s=e.lrylMethods.coldHot(e.modelActive,e.childrenModelActive,i.data,n),e.lrylList=s,e.$store.dispatch("changeLrBtnStatus",!0)):2===t&&(s=e.lrylMethods.leaveOut(e.modelActive,e.childrenModelActive,i.data,n),e.lrylList=s,e.$store.dispatch("changeYlBtnStatus",!0))}}))}},firstNavScroll:function(){this.lotteryNavScroll?this.lotteryNavScroll.refresh():this.lotteryNavScroll=new s.a(this.$refs.lotteryNav,{click:!0,scrollX:!0})},secondNavScroll:function(){this.subLotteryNavScroll?this.subLotteryNavScroll.refresh():this.subLotteryNavScroll=new s.a(this.$refs.subLotteryNav,{click:!0,scrollX:!0})},lotteryScroll:function(){this.lotteryContentScroll?(this.lotteryContentScroll.refresh(),this.lotteryContentScroll.scrollTo(0,0,300,"bounce")):this.lotteryContentScroll=new s.a(this.$refs.lotteryContent,{click:!0})},getQueryCode:function(){var t=this,e=this.$route.query.firstTitle,i=this.$route.query.secondTitle;e&&(this.changeModel(e),i&&this.changechildrenModel(i),this.$nextTick((function(){t.lotteryScroll()})))},expectDate:function(t){this.expect=t},changeModel:function(t){var e=this;t!==this.modelActive&&(this.$store.dispatch("changeKeyboardStatus",!1),this.modelActive=t,this.subNavList?this.changechildrenModel(Object.keys(this.subNavList)[0]):this.childrenModelActive=!1,this.selectNumList=[],this.heightCalculation(!1),this.$nextTick((function(){e.$refs.lotteryNav&&e.lotteryNavScroll.scrollToElement(e.$refs[t+"_nav"][0],300,-160,0,"bounce"),e.lotteryScroll()})),this.$refs.lotteryHeader&&(this.$refs.lotteryHeader.lrylFlag=0),this.$store.dispatch("changeLrBtnStatus",!1),this.$store.dispatch("changeYlBtnStatus",!1))},changechildrenModel:function(t){var e=this;t!==this.childrenModelActive&&(this.$store.dispatch("changeKeyboardStatus",!1),this.childrenModelActive=t,this.selectNumList=[],this.$nextTick((function(){e.$refs.subLotteryNav&&(e.subLotteryNavScroll?e.subLotteryNavScroll.refresh():e.subLotteryNavScroll=new s.a(e.$refs.subLotteryNav,{click:!0,scrollX:!0}),e.subLotteryNavScroll.scrollToElement(e.$refs[t+"_sub_nav"][0],300,-160,0,"bounce")),e.lotteryScroll()})),this.$refs.lotteryHeader&&this.getLryl(this.$refs.lotteryHeader.lrylFlag))},getAllOdd:function(){var t=this;if(this.lotteryOdd[this.playCode])return this.lotteryData=this.lotteryOdd[this.playCode],void this.$store.dispatch("setRouterLoading",!1);this.$api.get(this.$apiUrl.LOTTO.GET_ODD,{code:this.playCode,model:"tradition"},(function(e){if(0===e.error){t.$store.dispatch("setRouterLoading",!1),t.lotteryData=e.data[0];var i={playCode:t.playCode,odd:e.data[0]};t.$store.dispatch("setLotteryOdd",i)}else t.lotteryData=null,t.toast("赔率获取失败")}))},heightCalculation:function(t){var e=this,i=this.subNavList?.35:0,n=this.windowHeight-1.93-i;t[0]&&(n-=.5),t[1]&&(n-=1.4),this.contentHei=n,this.$nextTick((function(){e.lotteryContentScroll?e.lotteryContentScroll.refresh():e.lotteryContentScroll=new s.a(e.$refs.lotteryContent,{click:!0})}))},selectLottery:function(t){this.selectNumList=t},getZodiac:function(t){var e=this,i=0<arguments.length&&void 0!==t?t:function(){};this.$api.get(this.$apiUrl.LOTTO.GET_LHC_ZODIAC,null,(function(t){var s={};for(var n in t.data)s[t.data[n]]||(s[t.data[n]]=[]),s[t.data[n]].push(n);for(var o in s)s[o].sort((function(t,e){return parseInt(t)-parseInt(e)}));e.$store.dispatch("setZodiac",s),i(s)}))},reset:function(t){this.$refs.childrenView.reset(t)},reSetContentHeight:function(){var t=document.documentElement.offsetHeight,e=document.getElementById("view_header").offsetHeight,i=0;i=document.getElementById("lottery_header")?document.getElementById("lottery_header").offsetHeight:86;var s=document.getElementsByClassName("lottery_nav")[0].offsetHeight,n=document.getElementsByClassName("betting_top")[0].offsetHeight,o=0;0<document.getElementsByClassName("lottery_subNav").length&&(o=document.getElementsByClassName("lottery_subNav")[0].offsetHeight),document.getElementById("lottery_content").style.height=t-e-i-s-n-o+"px"}}},f69e:function(t,e,i){"use strict";i("8e6e"),i("ac6a"),i("456d"),i("28a5");var s=i("bd86"),n=(i("55dd"),i("d608")),o=i("2f62"),a=i("5118");function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}var l={props:["selectNumList","expect"],components:{bettingPopup:n.a,tip:function(){return i.e("chunk-57866d6e").then(i.bind(null,"5e25"))}},data:function(){return{keyList:["c",0,"ok"],keyNum:"",money:0,betOrders:[],bettingPopupFlag:!1,successTitle:"",successFlag:!1,bettingFlg:!1,userInfoFlag:!1,chipSetting:!1,defaultChip:[10,100,1e3],selectChip:[10,100,1e3],allChip:[10,50,100,500,1e3,5e3,1e4,5e4],selectTag:!1,hasKeyboardTag:!1}},created:function(){localStorage.defaultChip&&(this.defaultChip=JSON.parse(localStorage.defaultChip),this.selectChip=JSON.parse(localStorage.defaultChip))},methods:{judgeColor:function(t){return-1<this.selectChip.indexOf(t)?t:t+"-g"},changeDefaultChip:function(t){var e=JSON.parse(JSON.stringify(this.selectChip));this.selectChip.indexOf(t)<0&&(e.push(t),e.splice(0,1),this.selectChip=e)},closeChipSetting:function(){this.chipSetting=!1,this.selectChip=this.defaultChip},confirmChipSetting:function(){this.chipSetting=!1,this.defaultChip=this.selectChip.sort((function(t,e){return t-e})),localStorage.defaultChip=JSON.stringify(this.defaultChip)},addChipMoney:function(t){var e=0<this.money?this.money:0;this.money=parseInt(e)+parseInt(t)},refreshBalance:function(){var t=this;this.userInfoFlag=!0,this.$api.get(this.$apiUrl.ACCOUNT.GET_BALANCE,null,(function(e){if(0===e.error){var i=t.userInfo;i.balance=e.data,t.$store.dispatch("setUserInfo",i)}Object(a.setTimeout)((function(){t.userInfoFlag=!1}),1e3)}))},changeKeyboardStatus:function(){this.$store.dispatch("changeKeyboardStatus",!0),this.hasKeyboardTag=!0},keyDown:function(t){if(0!==parseInt(t)||""!==this.money)if(isNaN(t))if("c"===t){var e=String(this.money);this.money=e.substring(0,e.length-1)}else"ok"===t&&(this.$store.dispatch("changeKeyboardStatus",!1),this.hasKeyboardTag=!1);else this.money=parseInt(String(this.money)+t);else this.money=""},reset:function(t){this.$store.dispatch("changeKeyboardStatus",!1),this.hasKeyboardTag=!1,this.money="",this.$parent.reset(t)},betting:function(){var t=this;this.userInfo?this.bettingFlg?this.toast("正在投注中哦~"):0!==this.money&&""!==this.money?0!==this.selectNumList.length?this.money*this.listLength>this.userInfo.balance?this.toast("余额不足"):(this.bettingFlg=!0,Object(a.setTimeout)((function(){var e=JSON.parse(JSON.stringify(t.selectNumList)),i=[];if("nn"===t.type)for(var s="nn_level"===e[0].playCode?2:6,n=0;n<e.length;n++){var o={betNum:e[n].betNum,betCode:e[n].betCode,playCode:e[n].playCode,betAmount:t.money,odd:s};"nn_multiple"===e[0].playCode&&(o.freezAmount=4*t.money),i.push(o)}else for(var a=0;a<e.length;a++)i.push({betNum:e[a].betNum,betCode:e[a].betCode,playCode:e[a].playCode,betAmount:t.money,odd:e[a].odd});t.betOrders=i,t.bettingPopupFlag=!0,t.$store.dispatch("changeKeyboardStatus",!1),t.hasKeyboardTag=!1}),300)):this.toast("请选择投注号码"):this.toast("请输入金额"):this.toast("您还未登录，请先登录")},followBetting:function(){var t=this;if(this.userInfo)if(this.money*this.listLength>this.userInfo.balance)this.toast("余额不足");else{var e=JSON.parse(JSON.stringify(this.selectNumList)),i=[];if("nn"===this.type)for(var s="nn_level"===e[0].playCode?2:6,n=0;n<e.length;n++){var o={betNum:e[n].betNum,betCode:e[n].betCode,playCode:e[n].playCode,betAmount:e[n].betAmount,odd:s};"nn_multiple"===e[0].playCode&&(o.freezAmount=4*this.money),i.push(o)}else for(var a=0;a<e.length;a++)i.push({betNum:e[a].betNum,betCode:e[a].betCode,playCode:e[a].playCode,betAmount:e[a].betAmount,odd:e[a].odd});this.betOrders=i,this.bettingPopupFlag=!0,this.$store.dispatch("changeKeyboardStatus",!1),this.hasKeyboardTag=!1,this.$nextTick((function(){t.$refs.bettingPopup.saveBetOrders()}))}else this.toast("您还未登录，请先登录")},saveOrders:function(t){var e=this;this.$api.post(this.$apiUrl.LOTTO.SAVE_BET_ORDER,t,(function(i){if(0===i.error){if(sessionStorage.fctoken=i.extend,"cs"===e.type){var s=e.userInfo;s.csBalance=i.data.balance,e.$store.dispatch("setUserInfo",s)}else e.$store.dispatch("changeUserInfoBalance",i.data.balance);e.successTitle="",e.reset(t),e.addRecentLottery(t)}else e.getFctoken(),e.successTitle=i.message,"bjl"!==e.type&&"cs"!==e.type||(e.$parent.clearChildViewNotBettingChip(),e.$parent.$refs.childrenView&&(e.$parent.$refs.childrenView.bettingFlag=!1));e.bettingFlg=!1,e.successFlag=!0,e.bettingPopupFlag=!1,Object(a.setTimeout)((function(){e.successFlag=!1,e.successTitle=""}),1500)}),(function(i){e.getFctoken((function(){e.bettingFlg=!1,500==i.code&&(e.successTitle="投注失败，错误码：500，请联系管理员",e.successFlag=!0),"bjl"!==e.type&&"cs"!==e.type||e.reset(t)}))}))},getFctoken:function(t){var e=0<arguments.length&&void 0!==t?t:function(){};this.$api.get(this.$apiUrl.LOTTO.GET_LT_TOKEN,null,(function(t){sessionStorage.fctoken=t.data,e()}))},addRecentLottery:function(t){var e=localStorage.recentLottery,i={code:this.playCode,type:this.type,lotteryName:this.lotteryName,newModel:"tradition",firstTitle:this.$parent.modelActive,secondTitle:this.$parent.childrenModelActive,thirdTitle:""};if(e){for(var s=JSON.parse(localStorage.recentLottery),n=0;n<s.length;n++)if(s[n].code===this.playCode)return s[n]=i,void(localStorage.recentLottery=JSON.stringify(s));1===s.length?localStorage.recentLottery=JSON.stringify([i,s[0]]):localStorage.recentLottery=JSON.stringify([i,s[0],s[1]])}else localStorage.recentLottery=JSON.stringify([i])}},computed:function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(i,!0).forEach((function(e){Object(s.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({},Object(o.b)(["userInfo","keyboardStatus","bettingStatus","currentLottery","nnMultiple"]),{listLength:function(){return this.selectNumList.length?this.selectNumList.length:0},type:function(){var t=this.currentLottery?this.currentLottery.type:this.$route.path.split("/")[1];return t},playCode:function(){return this.$route.params.playCode},lotteryName:function(){return this.currentLottery.lotteryName},allMoney:function(){var t=this.money*this.listLength;return 2===this.nnMultiple&&"nn"===this.type&&(t*=5),t},bettingHeight:function(){return this.keyboardStatus&&this.bettingStatus?"2.18rem":this.keyboardStatus?"2.18rem":this.bettingStatus?"0.78rem":"0.28"}}),watch:{listLength:{handler:function(t){0<t||this.keyboardStatus?(this.$store.dispatch("changeBettingStatus",!0),this.selectTag=!0,this.keyboardStatus&&0===t&&(this.selectTag=!1,this.hasKeyboardTag=!1)):(this.$store.dispatch("changeBettingStatus",!1),this.selectTag=!1,this.hasKeyboardTag=!1)},deep:!0,immediate:!0},selectTag:function(t){if(document.getElementById("lottery_content")&&!(-1<this.$route.params.playCode.indexOf("bjl"))){var e=document.getElementById("lottery_content");e.style.height=t?e.offsetHeight-document.getElementById("betting_middel").offsetHeight+"px":e.offsetHeight+document.getElementById("betting_middel").offsetHeight+"px"}}}},c=(i("2584"),i("2877")),h=Object(c.a)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:["betting_wrap cleaar",{hasSelects:t.selectTag},{hasKeyboard:t.hasKeyboardTag},{addFixed:"bjl"!==t.type&&"cs"!==t.type}]},[i("div",{staticClass:"betting_top clear"},[i("div",{staticClass:"top_left theme-backgound fl",on:{click:function(e){t.chipSetting=!0}}},[t._v("筹码设定")]),i("div",{staticClass:"top_middel fl",style:{width:t.userInfo?"1.43rem":"2.9rem"}},[t._v("\n      共 "),i("span",{staticClass:"theme-font-color"},[t._v(t._s(t.listLength))]),t._v(" 注: "),i("span",{staticClass:"theme-font-color"},[t._v(t._s(t.allMoney))]),t._v(" 元\n    ")]),t.userInfo?i("div",{staticClass:"top_right fl",on:{click:t.refreshBalance}},[i("span",[t._v("余额:")]),i("span",{staticClass:"theme-font-color"},[t._v(t._s(t.userInfo.balance))]),i("span",[t._v("元")]),i("i",{class:["iconfont",t.userInfoFlag?"icon-jiazai":"icon-shuaxin"]})]):t._e()]),i("div",{staticClass:"betting_middel clear",attrs:{id:"betting_middel"}},[i("div",{staticClass:"middel_left fl"},t._l(t.defaultChip,(function(e,s){return i("div",{key:s,staticClass:"img_wrap fl",on:{click:function(i){return t.addChipMoney(e)}}},[i("img",{attrs:{src:t.$publicPath+"images/bjlChip/"+e+".png"}})])})),0),i("div",{staticClass:"middel_middel fl"},[i("div",{staticClass:"middel_input",style:{color:""===t.money||0===t.money?"#C1C1C1":"#000"},on:{click:t.changeKeyboardStatus}},[t._v("\n        "+t._s(""===t.money||0===t.money?"请输入金额":t.money)+"\n      ")])]),i("div",{staticClass:"middel_right fr"},[i("div",{staticClass:"reset fl",on:{click:function(e){return t.reset(null)}}},[t._v("重置")]),i("div",{staticClass:"betting fl",on:{click:t.betting}},[i("span",[t._v("投注")]),t.bettingFlg?i("i",{staticClass:"iconfont icon-jiazai"}):t._e()])])]),t.keyboardStatus?i("div",{staticClass:"betting_bottom clear"},[i("div",{staticClass:"keyboard_left fl"},t._l(9,(function(e){return i("div",{key:e,class:["buttons",{activeBtn:t.keyNum===e}],on:{click:function(i){return t.keyDown(e)},touchstart:function(i){t.keyNum=e},touchend:function(e){t.keyNum=""}}},[t._v(t._s(e))])})),0),i("div",{staticClass:"keyboard_right fl"},t._l(t.keyList,(function(e,s){return i("div",{key:s,class:["buttons",{activeBtn:t.keyNum===e}],on:{click:function(i){return t.keyDown(e)},touchstart:function(i){t.keyNum=e},touchend:function(e){t.keyNum=""}}},["c"!==e?i("span",[t._v(t._s(e))]):i("i",{class:["iconfont icon-clear",{whiteIcon:t.keyNum===e}]})])})),0)]):t._e(),t.chipSetting?i("div",{staticClass:"chip_setting",on:{click:function(e){if(e.target!==e.currentTarget)return null;t.chipSetting=!1}}},[i("div",{staticClass:"setting_inner"},[i("div",{staticClass:"inner_title theme-backgound"},[t._v("筹码设定")]),i("div",{staticClass:"inner_main clear"},t._l(t.allChip,(function(e,s){return i("div",{key:s,staticClass:"img_wrap fl",on:{click:function(i){return t.changeDefaultChip(e)}}},[i("img",{attrs:{src:t.$publicPath+"images/bjlChip/"+t.judgeColor(e)+".png"}})])})),0),i("div",{staticClass:"inner_btn theme-font-color"},[i("div",{on:{click:t.closeChipSetting}},[t._v("取消")]),i("div",{on:{click:t.confirmChipSetting}},[t._v("确定")])])])]):t._e(),i("tip",{attrs:{successTitle:t.successTitle},model:{value:t.successFlag,callback:function(e){t.successFlag=e},expression:"successFlag"}}),t.bettingPopupFlag?i("betting-popup",{ref:"bettingPopup",attrs:{betOrders:t.betOrders,expect:t.expect}}):t._e()],1)}),[],!1,null,"26ed9880",null);e.a=h.exports}}]);