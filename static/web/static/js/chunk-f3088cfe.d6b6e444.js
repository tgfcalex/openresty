(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-f3088cfe"],{"10a9":function(t,e,r){"use strict";var i=r("52d5");r.n(i).a},"52d5":function(t,e,r){},6511:function(t,e,r){"use strict";r.r(e),r("8e6e");var i=r("bd86"),o=(r("ac6a"),r("456d"),r("1fba")),s=r("2f62"),n=r("5118"),l=r("1157"),a=r.n(l);function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}var h={data:function(){return{activeModle:"rm",recentLotteryFlag:!1,recentLottery:[],lotteryFlag:!1,changeModelFlag:!1,zjLotteryFlag:!1,contantHeight:null,noticeList:[],tagList:!0,timerObj:null}},created:function(){localStorage.recentLottery&&(this.recentLotteryFlag=!0),this.getMessage()},mounted:function(){this.$store.dispatch("setRouterLoading",!1)},methods:{getMessage:function(){var t=this;this.$api.get(this.$apiUrl.MATCH.GET_GAME_MESSAGE,null,(function(e){if(0===e.error){if(!e.data||"undefined"===e.data)return t.tagList=!1,void t.$nextTick((function(){t.initScroll()}));t.tagList=!0,t.noticeList=e.data,sessionStorage.noticeList=JSON.stringify(e.data),setTimeout((function(){var e=a()("#noticeInner"),r=parseInt(e.width());e.animate({marginLeft:-r},25*r,"linear"),t.timerObj=Object(n.setInterval)((function(){e.css("margin-left","0"),e.animate({marginLeft:-r},25*r,"linear")}),25*r+1e3)}),200)}t.$nextTick((function(){t.initScroll()}))}))},goMatch:function(t){"match"===t&&this.$router.push("/match/tradition/desc")},changeModle:function(t){var e=this;if(this.activeModle!==t){if(this.activeModle=t,this.changeModelFlag=!0,"zj"===t)this.zjLotteryFlag=!0,this.getRecentLottery();else if("rm"===t){this.zjLotteryFlag=!1,this.lotteryFlag=!1;var r=Object.keys(this.lotteryData)[0];this.$nextTick((function(){e.rmScrollFun(),e.ptScrollFun(),e.ptMainScroll.scrollToElement(e.$refs[r][0],300,0,0,"bounce"),e.navMainScroll.scrollToElement(e.$refs[r+"_nav"][0],300,-120,0,"bounce")}))}else this.lotteryFlag=!0,this.$nextTick((function(){e.rmScrollFun(),e.ptScrollFun(),e.ptMainScroll.scrollToElement(e.$refs[t][0],300,0,0,"bounce"),e.navMainScroll.scrollToElement(e.$refs[t+"_nav"][0],300,-120,0,"bounce")}));setTimeout((function(){e.changeModelFlag=!1}),500)}},getRecentLottery:function(){if(localStorage.recentLottery){for(var t=JSON.parse(localStorage.recentLottery),e=[],r=JSON.parse(JSON.stringify(this.lottery)),i=0;i<t.length;i++)if(r[t[i].code]){var o=r[t[i].code];o.newModel=t[i].newModel,o.firstTitle=t[i].firstTitle,o.secondTitle=t[i].secondTitle,o.thirdTitle=t[i].thirdTitle,e.push(o)}if(1<=e.length&&e.length<3)for(var s=3-e.length,n=0;n<s;n++)e.push({});this.recentLottery=e}else this.recentLottery=[]},goLottery:function(t){if(t.code){if("csbjl"===t.code){if(!sessionStorage.token)return void this.toast("您当前未登陆，请您先登陆");if(!this.userInfo.csSignUp)return void this.$router.push("/match/tradition/desc")}else if("csbjl"===t.code&&"fail"===this.userInfo.csBanned)return void this.toast("您已被禁赛，如有疑问请联系客服");var e="all"===t.model?"tradition":t.model;this.$router.push({path:"/"+t.type+"/"+e+"/"+t.code})}},goRecentLottery:function(t){if(t.code){if("csbjl"===t.code){if(!sessionStorage.token)return void this.toast("您当前未登陆，请您先登陆");if(!this.userInfo.csSignUp)return void this.$router.push("/match/tradition/desc")}else if("csbjl"===t.code&&"fail"===this.userInfo.csBanned)return void this.toast("您已被禁赛，如有疑问请联系客服");this.$router.push({path:"/"+t.type+"/"+t.newModel+"/"+t.code,query:{firstTitle:t.firstTitle,secondTitle:t.secondTitle,thirdTitle:t.thirdTitle}})}},initScroll:function(){this.navScrollFun(),this.rmScrollFun(),this.ptScrollFun()},rmScrollFunction:function(t){var e=this,r=this.rmMainScroll.maxScrollY;if(t.y<r){if(this.lotteryFlag)return;this.lotteryFlag=!0,this.activeModle=Object.keys(this.lotteryData)[0],this.$nextTick((function(){e.ptScrollFun(),e.navScrollFun()}))}},ptScrollFunction:function(t){var e=this;if(this.lotteryFlag){for(var r=Object.keys(this.lotteryData),i=function(i){if(Math.abs(t.y)>=e.$refs[r[i]][0].offsetTop&&Math.abs(t.y)<e.$refs[r[i+1]][0].offsetTop&&!e.changeModelFlag)return e.activeModle!==r[i]&&(e.activeModle=r[i],e.$nextTick((function(){e.navMainScroll.scrollToElement(e.$refs[r[i]+"_nav"][0],300,-120,0,"bounce")}))),"break"},o=0;o<r.length;o++)if("break"===i(o))break;t.y<60&&0<t.y&&(this.zjLotteryFlag?this.activeModle="zj":this.activeModle="rm",this.lotteryFlag=!1)}},navScrollFun:function(){this.navMainScroll?(this.navMainScroll.refresh(),this.navMainScroll.scrollTo(0,0,300,"bounce")):this.navMainScroll=new o.a(this.$refs.navScroll,{click:!0,scrollX:!0})},rmScrollFun:function(){var t=this;this.rmMainScroll?this.rmMainScroll.refresh():this.rmMainScroll=new o.a(this.$refs.rmScroll,{click:!0,probeType:2}),this.rmMainScroll.on("scroll",(function(e){t.rmScrollFunction(e)}))},ptScrollFun:function(){var t=this;this.ptMainScroll?this.ptMainScroll.refresh():this.ptMainScroll=new o.a(this.$refs.ptScroll,{click:!0,probeType:3}),this.ptMainScroll.on("scroll",(function(e){t.ptScrollFunction(e)}))}},destroyed:function(){Object(n.clearInterval)(this.timerObj)},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(i.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(s.b)(["userInfo","lottery","lotteryTypeList","windowHeight","typeList"]),{ulWidth:function(){if(this.lotteryTypeList){var t="",e=0;for(var r in this.lotteryData)t+=this.typeList[r],e+=1;return.13*t.length+.2*e+"rem"}return 0},lotteryData:function(){if(!this.lotteryTypeList)return[];var t={},e=JSON.parse(JSON.stringify(this.lotteryTypeList));for(var r in e)t[r]=e[r];for(var i in t)0===t[i].length&&delete t[i];for(var o in t){var s=3-t[o].length%3;if(3!=s)for(var n=0;n<s;n++)t[o].push({})}return t},rmLotteryData:function(){if(!this.lotteryTypeList)return[];var t=[];for(var e in this.lotteryTypeList)for(var r=0;r<this.lotteryTypeList[e].length;r++)this.lotteryTypeList[e][r].isHot&&t.push(this.lotteryTypeList[e][r]);var i=3-t.length%3;if(3!=i)for(var o=0;o<i;o++)t.push({});return t},lotteryDataFirstKey:function(){return Object.keys(this.lotteryData)[0]}})},f=(r("10a9"),r("2877")),u=Object(f.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home_wrap"},[t.tagList?r("div",{staticClass:"webNotice"},[r("img",{staticClass:"csImg",attrs:{src:t.$publicPath+"images/labaI.png"}}),r("div",{staticClass:"noticeOuter"},[r("span",{staticClass:"noticeInner",attrs:{id:"noticeInner"}},[r("span",{staticClass:"firstNotice"}),t._l(t.noticeList,(function(e,i){return r("span",{key:i,staticClass:"theme-font-color",on:{click:function(r){return t.goMatch(e.type)}}},[t._v(t._s(i+1)+" . "+t._s(e.content))])}))],2)])]):t._e(),r("div",{staticClass:"home_nav clear"},[r("div",{class:["left_nav fl",{setLeftNav:t.recentLotteryFlag}]},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.recentLotteryFlag,expression:"recentLotteryFlag"}],staticClass:"left_zj fontStyle fl",class:{modelActive:"zj"===t.activeModle},on:{click:function(e){return t.changeModle("zj")}}},[t._v("最近")]),r("div",{staticClass:"left_rm fontStyle fl",class:{modelActive:"rm"===t.activeModle},on:{click:function(e){return t.changeModle("rm")}}},[t._v("热门")])]),r("div",{ref:"navScroll",class:["right_nav fl",{setRightNav:t.recentLotteryFlag}]},[r("div",{staticClass:"nav_main",style:{width:t.ulWidth}},[r("ul",{staticClass:"clear"},t._l(t.lotteryData,(function(e,i){return r("li",{key:i,ref:i+"_nav",refInFor:!0},[r("a",{class:["fontStyle",{modelActive:t.activeModle===i}],attrs:{href:"javascript:;"},on:{click:function(e){return t.changeModle(i)}}},[t._v(t._s(t.typeList[i]))])])})),0)])])]),r("div",{ref:"rmScroll",staticClass:"rm_lottery_wrap clear",style:{height:t.windowHeight-.88-.35-(t.tagList?.3:0)+"rem"}},[r("div",{staticClass:"scroll-content"},[t.zjLotteryFlag?r("ul",{staticClass:"clear",style:{"min-height":t.windowHeight-.88-.23+"rem"}},t._l(t.recentLottery,(function(e,i){return r("li",{key:i,class:["lotteryStyle bor_top",{bor_right:(i+1)%3!=0,bor_bottom:i>=t.recentLottery.length-4}],on:{click:function(r){return t.goRecentLottery(e)}}},[e.code?r("div",{staticClass:"img_wrap"},[r("img",{attrs:{src:t.$publicPath+"images/lottery-icon/"+e.code+".png"}})]):t._e(),r("p",{staticClass:"type_text"},[t._v(t._s(e.lotteryName))]),r("p",{staticClass:"lottery_message"},[t._v(t._s(e.memo))]),e.isHot?r("div",{staticClass:"lottery_hot"}):t._e()])})),0):r("ul",{staticClass:"clear",style:{"min-height":t.windowHeight-.88-.23+"rem"}},t._l(t.rmLotteryData,(function(e,i){return r("li",{key:i,class:["lotteryStyle bor_top",{bor_right:(i+1)%3!=0,bor_bottom:i>=t.rmLotteryData.length-3}],on:{click:function(r){return t.goLottery(e)}}},[e.code?r("div",{staticClass:"img_wrap"},[r("img",{attrs:{src:t.$publicPath+"images/lottery-icon/"+e.code+".png"}})]):t._e(),r("p",{staticClass:"type_text"},[t._v(t._s(e.lotteryName))]),r("p",{staticClass:"lottery_message"},[t._v(t._s(e.memo))])])})),0)])]),r("div",{ref:"ptScroll",staticClass:"lottery_wrap clear",style:{height:t.windowHeight-.88-(t.tagList?.3:0)+"rem",bottom:t.lotteryFlag?0:-1*(t.windowHeight-.88-.35-(t.tagList?.3:0))+"rem"}},[r("div",{staticClass:"scroll-content"},t._l(t.lotteryData,(function(e,i,o){return r("div",{key:i,ref:i,refInFor:!0,staticClass:"lottery_box"},[t.lotteryFlag||0!==o?t.lotteryFlag?r("div",{staticClass:"box_title"},[t._v(t._s(t.typeList[i]+"系列"))]):t._e():r("div",{staticClass:"box_title first_box_title"},[t._v(t._s(t.typeList[i]+"系列"))]),r("ul",{staticClass:"clear"},t._l(t.lotteryData[i],(function(e,o){return r("li",{key:o,class:["lotteryStyle bor_top",{bor_right:(o+1)%3!=0,bor_bottom:o>=t.lotteryData[i].length-3}],on:{click:function(r){return t.goLottery(e)}}},[e.code?r("div",{staticClass:"img_wrap"},[r("img",{attrs:{src:t.$publicPath+"images/lottery-icon/"+e.code+".png"}})]):t._e(),r("p",{staticClass:"type_text"},[t._v(t._s(e.lotteryName))]),r("p",{staticClass:"lottery_message"},[t._v(t._s(e.memo))]),e.isHot?r("div",{staticClass:"lottery_hot"}):t._e()])})),0)])})),0)]),t.lotteryFlag?t._e():r("div",{staticClass:"lottery_mask",on:{click:function(e){return t.changeModle(t.lotteryDataFirstKey)}}})])}),[],!1,null,"9ea7b5cc",null);e.default=u.exports}}]);