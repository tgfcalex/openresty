webpackJsonp([83],{"9cJP":function(n,e,t){var a=t("mhph");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var r=t("rjj0").default;r("ce958164",a,!0,{})},C64W:function(n,e,t){"use strict";function a(n){t("9cJP"),t("sJOz")}Object.defineProperty(e,"__esModule",{value:!0});var r=t("ABCa"),o=(r.a,{components:{XHeader:r.a},data:function(){return{emailmsg:JSON.parse(localStorage.emailmsg),content:""}},methods:{sendMsg:function(){var n=this;if(this.content){var e=this.$qs.stringify({"search.username":this.emailmsg.createUsername,"search.content":this.content,"search.title":this.emailmsg.title,"lb.token":localStorage.fctoken});this.$api.post(this.$luyou.MESSAGE.ADD_ONE_MSG,e,function(e){n.content="",0===e.error?(localStorage.fctoken=e.extend,n.toast("发送成功")):n.toast("["+e.code+"]"+e.message)},function(e){e&&n.toast(n.$api.tip(e))})}else this.toast("回复内容不能为空")}},mounted:function(){}}),i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"reply-wrapper"},[t("x-header",{staticClass:"header",attrs:{"left-options":{backText:" "}}},[n._v("\n   回复\n  ")]),n._v(" "),t("scroller",{ref:"wrapper",staticClass:"wrapper"},[t("div",{staticClass:"content"},[t("form",{attrs:{action:""}},[t("div",{staticClass:"info"},[t("span",[n._v("账户")]),n._v(" "),t("p",[n._v(n._s(n.emailmsg.createUsername))])]),n._v(" "),t("div",{staticClass:"info info-2"},[t("span",[n._v("主题")]),n._v(" "),t("p",[n._v(n._s(n.emailmsg.title))])]),n._v(" "),t("div",{staticClass:"cont"},[t("span",[n._v("内容")]),n._v(" "),t("p",[n._v(n._s(n.emailmsg.content))])]),n._v(" "),t("div",{staticClass:"replyBox"},[t("span",[n._v("回复内容")]),n._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:n.content,expression:"content"}],domProps:{value:n.content},on:{input:function(e){e.target.composing||(n.content=e.target.value)}}})])])])]),n._v(" "),t("div",{staticClass:"selectedBox"},[t("button",{staticClass:"reply",on:{click:n.sendMsg}},[n._v("立即回复")])])],1)},p=[],s=t("XyMi"),l=a,d=Object(s.a)(o,i,p,!1,l,"data-v-232a2447",null);e.default=d.exports},jqic:function(n,e,t){e=n.exports=t("FZ+f")(!1),e.push([n.i,'\n@charset "UTF-8";\n/**宝开样式   开始*/\n.baokai[data-v-232a2447] {\n  background: transparent -webkit-gradient(linear, left top, right top, from(#00c6ff), to(#0072ff));\n  background: transparent linear-gradient(to right, #00c6ff, #0072ff);\n}\n.baokai-color[data-v-232a2447] {\n  color: transparent linear-gradient(to right, #00c6ff, #0072ff);\n}\n.baokai-border[data-v-232a2447] {\n  border-color: transparent transparent linear-gradient(to right, #00c6ff, #0072ff) transparent;\n}\n/**宝开样式   结束*/\n/**49样式   开始*/\n.sijiu[data-v-232a2447] {\n  background: #AF162A !important;\n}\n.sijiu-color[data-v-232a2447] {\n  color: #AF162A !important;\n}\n.sijiu-border[data-v-232a2447] {\n  border-color: transparent transparent #AF162A transparent !important;\n}\n/**49样式   结束*/\n/**萝卜样式   开始*/\n/**萝卜样式   结束*/\n/**龙彩样式   开始*/\n.longcai[data-v-232a2447] {\n  background: #F98C2D !important;\n}\n.longcai-color[data-v-232a2447] {\n  color: #F98C2D !important;\n}\n.longcai-border[data-v-232a2447] {\n  border-color: transparent transparent #F98C2D transparent !important;\n}\n/**龙彩样式   结束*/\n',""])},mhph:function(n,e,t){var a=t("kxFB");e=n.exports=t("FZ+f")(!1),e.push([n.i,'\n@charset "UTF-8";\n/*头部区域*/\n.email-wrapper .header {\n  position: relative;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 502;\n}\n.email-wrapper .header-tab .vux-tab {\n  width: 148.5px;\n  height: 30px;\n  margin: 6px auto 0;\n  border-radius: 5px;\n  border: 1px solid #fff;\n}\n.email-wrapper .header-tab .vux-tab .vux-tab-ink-bar {\n    display: none !important;\n}\n.email-wrapper .header-tab .vux-tab .vux-tab-item {\n    line-height: 30px;\n    background: transparent;\n    color: #fff;\n    background: #fa6200;\n}\n.email-wrapper .header-tab .vux-tab .vux-tab-item.vux-tab-selected {\n      color: #fa6200;\n      background: #fff;\n}\n.email-wrapper .header-tab .vux-tab .vux-tab-item:first-child {\n      border-top-left-radius: 5px !important;\n      border-bottom-left-radius: 5px !important;\n}\n.email-wrapper .header-tab .vux-tab .vux-tab-item:nth-child(2) {\n      border-top-right-radius: 5px !important;\n      border-bottom-right-radius: 5px !important;\n}\n.email-wrapper .cont-tab {\n  height: 35px;\n}\n.email-wrapper .cont-tab .item {\n    line-height: 35px;\n}\n.email-wrapper .cont-tab .vux-tab {\n    height: 36px;\n}\n.email-wrapper .cont-tab .item.vux-tab-selected {\n    color: #1c9dfc;\n}\n.email-wrapper .cont-tab .vux-tab-ink-bar {\n    background: #1c9dfc;\n}\n.email-wrapper .content-message {\n  display: none;\n}\n.email-wrapper .content-message .vux-tab-wrap {\n    padding-top: 0px;\n}\n.email-wrapper .content-message.active {\n    display: block;\n}\n.email-wrapper .content-message .message-item {\n    background: #fff;\n}\n.email-wrapper .content-message .message-item .mes-hea {\n      height: 45px;\n      font-size: 1.4rem;\n      color: #353535;\n      line-height: 45px;\n      padding-left: 10px;\n      position: relative;\n}\n.email-wrapper .content-message .message-item .mes-hea .title {\n        width: 72%;\n        display: inline-block;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n}\n.email-wrapper .content-message .message-item .mes-hea .tag {\n        width: 25px;\n        height: 25px;\n        position: absolute;\n        top: 41px;\n        right: 10px;\n        border-radius: 100%;\n        background: #fff;\n        border: 1px solid #efefef;\n        z-index: 10;\n}\n.email-wrapper .content-message .message-item .mes-hea .tag.active {\n        background: #fff url('+a(t("p3Vl"))+") no-repeat center/65%;\n}\n.email-wrapper .content-message .message-item .mes-con {\n      font-size: 1.2rem;\n      color: #353535;\n      position: relative;\n      display: block;\n}\n.email-wrapper .content-message .message-item .mes-con .cont {\n        padding: 0px 10px;\n        -webkit-line-clamp: 2;\n        display: -webkit-box;\n        -webkit-box-orient: vertical;\n        -webkit-line-clamp: 2;\n        overflow: hidden;\n        color: #666;\n        margin: 0px;\n        width: 82%;\n}\n.email-wrapper .content-message .message-item .mes-con .ext-info {\n        font-size: 1.2rem;\n        color: #adadad;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        padding: 10px;\n}\n.email-wrapper .content-message .message-item .mes-con .ext-info span {\n          width: 100%;\n}\n.email-wrapper .content-message .message-item .mes-con .ext-info .right {\n          text-align: right;\n}\n.email-wrapper .selectedBox {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  z-index: 9999;\n  background: #fff;\n}\n.email-wrapper .selectedBox button {\n    margin: 10px 15px;\n    width: 100%;\n    height: 42px;\n    border: none;\n    font-size: 1.7rem;\n    border-radius: 21px;\n}\n.email-wrapper .selectedBox .all {\n    color: #fa6200;\n    border: 1px solid #efefef;\n    background: #fff;\n}\n.email-wrapper .selectedBox .deleted {\n    background: transparent -webkit-gradient(linear, left top, right top, from(#fc901c), to(#f64c01));\n    background: transparent linear-gradient(to right, #fc901c, #f64c01);\n    color: #fff;\n}\n/* 详情 */\n.detail-wrapper {\n  background: #fff;\n}\n.detail-wrapper .tit {\n    padding: 10px;\n    font-size: 1.6rem;\n    color: #353535;\n}\n.detail-wrapper li {\n    padding: 0 10px 8px;\n    color: #adadad;\n    font-size: 1.2rem;\n}\n.detail-wrapper li font {\n      font-size: 1.4rem;\n      color: #fa6200;\n}\n.detail-wrapper li .text {\n      margin-top: 5px;\n      color: #353535;\n}\n.detail-wrapper .mes-det-con {\n    padding: 15px 10px;\n    font-size: 1.2rem;\n    color: #353535;\n}\n.detail-wrapper .selectedBox {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: 100%;\n    z-index: 9999;\n    background: #fff;\n    text-align: center;\n}\n.detail-wrapper .selectedBox .reply {\n      margin: 10px 15px;\n      width: 40%;\n      height: 42px;\n      border: none;\n      font-size: 1.7rem;\n      border-radius: 21px;\n      background: transparent -webkit-gradient(linear, left top, right top, from(#fc901c), to(#f64c01));\n      background: transparent linear-gradient(to right, #fc901c, #f64c01);\n      color: #fff;\n}\n.detail-wrapper .selectedBox .reply a {\n        color: #fff;\n}\n.reply-wrapper .info, .reply-wrapper .cont {\n  font-size: 1.4rem;\n  padding: 0 15px;\n  height: 45px;\n  line-height: 45px;\n  background: #fff;\n}\n.reply-wrapper .info p, .reply-wrapper .cont p {\n    float: right;\n}\n.reply-wrapper .info span, .reply-wrapper .cont span {\n    color: #fa6200;\n}\n.reply-wrapper .info-2 p {\n  color: #969696;\n}\n.reply-wrapper .cont {\n  height: auto;\n  padding-bottom: 10px;\n}\n.reply-wrapper .cont p {\n    display: block;\n    float: none;\n    line-height: 20px;\n    color: #969696;\n}\n.reply-wrapper .replyBox {\n  padding: 0 10px;\n  font-size: 1.4rem;\n  line-height: 45px;\n}\n.reply-wrapper .replyBox span {\n    color: #fa6200;\n}\n.reply-wrapper .replyBox textarea {\n    width: 96%;\n    resize: none;\n    min-height: 100px;\n    padding: 5px;\n}\n.reply-wrapper .selectedBox {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  z-index: 9999;\n  background: #fff;\n  text-align: center;\n}\n.reply-wrapper .selectedBox .reply {\n    margin: 10px 15px;\n    width: 40%;\n    height: 42px;\n    border: none;\n    font-size: 1.7rem;\n    border-radius: 21px;\n    background: transparent -webkit-gradient(linear, left top, right top, from(#fc901c), to(#f64c01));\n    background: transparent linear-gradient(to right, #fc901c, #f64c01);\n    color: #fff;\n}\n.edit-wrapper .type {\n  font-size: 1.4rem;\n}\n.edit-wrapper .type .vux-label {\n    font-size: 1.4rem;\n    color: #fa6200;\n}\n.edit-wrapper .info {\n  font-size: 1.4rem;\n  padding: 0 15px;\n  height: 45px;\n  line-height: 45px;\n  border-bottom: 1px solid #efefef;\n  background: #fff;\n  border-top: 1px solid #efefef;\n}\n.edit-wrapper .info p {\n    float: right;\n    color: #969696;\n}\n.edit-wrapper .info span {\n    color: #fa6200;\n}\n.edit-wrapper .info input {\n    float: right;\n    border: none;\n    height: 30px;\n    text-align: right;\n    width: 80%;\n    margin-top: 8px;\n}\n.edit-wrapper .replyBox {\n  padding: 0 15px;\n  font-size: 1.4rem;\n  line-height: 45px;\n}\n.edit-wrapper .replyBox textarea {\n    width: 97%;\n    resize: none;\n    min-height: 150px;\n    border-color: #d3d3d3;\n    padding: 5px;\n}\n.edit-wrapper .replyBox span {\n    color: #fa6200;\n}\n.edit-wrapper .selectedBox {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  z-index: 99;\n  background: #fff;\n  text-align: center;\n}\n.edit-wrapper .selectedBox .reply {\n    margin: 10px 15px;\n    width: 40%;\n    height: 42px;\n    border: none;\n    font-size: 1.7rem;\n    border-radius: 21px;\n    background: transparent -webkit-gradient(linear, left top, right top, from(#fc901c), to(#f64c01));\n    background: transparent linear-gradient(to right, #fc901c, #f64c01);\n    color: #fff;\n}\n",""])},sJOz:function(n,e,t){var a=t("jqic");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var r=t("rjj0").default;r("69f7a0f6",a,!0,{})}});