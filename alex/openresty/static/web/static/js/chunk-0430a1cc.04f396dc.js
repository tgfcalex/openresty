(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0430a1cc"],{"1d8b":function(t,e,s){},d081:function(t,e,s){"use strict";var n=s("1d8b");s.n(n).a},e19b:function(t,e,s){"use strict";s.r(e),s("8e6e"),s("ac6a"),s("456d");var n=s("bd86"),a=(s("55dd"),s("a481"),s("2f62")),r=s("1157"),i=s.n(r);function c(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}var o={data:function(){return{descObj:null,obj:null,clause:"",rule:"",summary:"",matchId:null,sureSingup:!1,isStart:null,startTime:null,isStartMatch:null,closeCon:!1,extend:null,strTag:!1,overDesc:""}},created:function(){this.initMatch()},mounted:function(){var t=this;this.$store.dispatch("setRouterLoading",!1),setTimeout((function(){i()(".contant p").css({"text-indent":".24rem","margin-left":"0"}),i()(".contant p span").css({"background-color":"#130000","font-size":".12rem","line-height":".18rem",color:"#ffefc6","text-indent":"0","margin-left":"0"}),t.strTag=!0}),300)},methods:{goBack:function(){this.$router.go(-1)},sureOrCancel:function(t){var e=this;if(t){var s=this.$apiUrl.MATCH.APPLY_MATCH+"?id="+this.matchId;this.$api.get(s,{"lb.token":sessionStorage.fctoken},(function(t){if(0===t.error){if(sessionStorage.fctoken=t.extend,"fail"===e.userInfo.csBanned)return e.overDesc="您已被禁赛，如有疑问请联系客服",void(e.closeCon=!0);var s=e.userInfo;s.csSignUp=!0,e.$store.dispatch("setUserInfo",s),e.$router.push("/cs/tradition/csbjl")}else e.toast(t.message)})),this.sureSingup=!1}else this.sureSingup=!1,this.closeCon=!1},showSure:function(){return sessionStorage.token?"fail"===this.userInfo.csBanned?(this.overDesc="您已被禁赛，如有疑问请联系客服",void(this.closeCon=!0)):void(this.userInfo.csSignUp?this.$router.push("/cs/tradition/csbjl"):(new Date).getTime()>this.startTime?(this.overDesc="非常抱歉，彩神大赛活动已开始，报名通道已关闭",this.closeCon=!0):this.sureSingup=!0):(this.toast("您还未登陆，请先登陆"),0)},getMyText:function(t){var e=t.replace(/&#x3c;/g,"<");return(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/&#x3e;/g,">")).replace(/&#x22;/g,'"')).replace(/&#/g,"")).replace(/x26;#39;/g,'"')).replace(/x2018;/g,"‘")).replace(/x2019;/g,"’")).replace(/x26;nbsp;/g,"")).replace(/x2026;/g,"...")).replace(/x26;amp;/g,"&")},getMySort:function(t){for(var e=[],s=0;s<t.length;s++)e.push(t[s].bonus);e=e.sort((function(t,e){return e-t}));for(var n=[],a=0;a<e.length;a++)for(var r=0;r<t.length;r++)t[r].bonus!==e[a]||n.push(t[r]);return n},initMatch:function(){var t=this;this.$api.get(this.$apiUrl.MATCH.GET_MATCH,null,(function(e){0===e.error&&(t.descObj=e.data,t.extend=t.getMySort(e.extend),t.clause=t.getMyText(t.descObj.clause),t.rule=t.getMyText(t.descObj.rule),t.summary=t.getMyText(t.descObj.summary),t.startTime=e.data.startTime,t.matchId=e.data.id,sessionStorage.matchId=e.data.id,(new Date).getTime()>t.startTime?(t.isStart=!1,setTimeout((function(){t.userInfo.csSignUp&&(t.isStart=!0)}),300)):t.isStart=!0)}),(function(t){}))}},computed:function(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?c(s,!0).forEach((function(e){Object(n.a)(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):c(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}({},Object(a.b)(["userInfo"]))},l=(s("d081"),s("2877")),u=Object(l.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"noticeOuter"},[s("img",{staticClass:"csBjlImg",attrs:{src:t.$publicPath+"images/cs-bj.png"}}),s("i",{staticClass:"arrow iconfont icon-fanhui",on:{click:t.goBack}}),t.descObj?s("div",{staticClass:"matchDescOuter"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.strTag,expression:"strTag"}]},[s("div",{staticClass:"matchTitle"},[t._v("1，赛事简介")]),s("div",{staticClass:"contant",domProps:{innerHTML:t._s(t.summary)}}),s("div",{staticClass:"matchTitle"},[t._v("2，比赛规则")]),s("div",{staticClass:"contant ruleContant",domProps:{innerHTML:t._s(t.rule)}}),s("div",{directives:[{name:"show",rawName:"v-show",value:0<t.extend.length,expression:"extend.length > 0"}],staticClass:"matchTitle"},[t._v("3，比赛奖金")]),0<t.extend.length?s("div",{staticClass:"rankTab"},[s("span",{staticClass:"tabCommonLeft"},[t._v("排名")]),s("span",{staticClass:"tabCommonRight"},[t._v("奖金")]),t._l(t.extend,(function(e,n){return s("div",{key:n},[e.rankStart!==e.rankEnd?s("span",{class:["tabCommonLeft",{isLastLeft:n===t.extend.length-1}]},[t._v("第"+t._s(e.rankStart)+"名 ~ 第"+t._s(e.rankEnd)+"名")]):s("span",{class:["tabCommonLeft",{isLastLeft:n===t.extend.length-1}]},[t._v("第"+t._s(e.rankStart)+"名")]),s("span",{class:["tabCommonRight",{isLastRight:n===t.extend.length-1}]},[t._v(t._s(e.bonus))])])}))],2):t._e(),s("div",{directives:[{name:"show",rawName:"v-show",value:0===t.extend.length,expression:"extend.length === 0"}],staticClass:"matchTitle"},[t._v("3，比赛条款")]),s("div",{directives:[{name:"show",rawName:"v-show",value:0<t.extend.length,expression:"extend.length > 0"}],staticClass:"matchTitle"},[t._v("4，比赛条款")]),s("div",{staticClass:"contant lastContant",domProps:{innerHTML:t._s(t.clause)}})])]):s("div",{staticClass:"noMatchdesc"},[t._v("暂未获取到赛事信息")]),s("span",{directives:[{name:"show",rawName:"v-show",value:t.isStart,expression:"isStart"}],staticClass:"goMatch",on:{click:t.showSure}},[t._v("进入比赛")]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.sureSingup,expression:"sureSingup"}],staticClass:"sureSingup"},[s("div",{staticClass:"sureDesc"},[t._v("是否确定参与本次彩神大赛？")]),s("span",{staticClass:"sureSingupIs",on:{click:function(e){return t.sureOrCancel(!0)}}},[t._v("确认")]),s("span",{staticClass:"cancleSingup",on:{click:function(e){return t.sureOrCancel(!1)}}},[t._v("取消")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.closeCon,expression:"closeCon"}],staticClass:"sureSingup"},[s("div",{staticClass:"overDesc"},[t._v(t._s(t.overDesc))]),s("span",{staticClass:"sureClose",on:{click:function(e){return t.sureOrCancel(!1)}}},[t._v("确认")])])])}),[],!1,null,"6996db0a",null);e.default=u.exports}}]);