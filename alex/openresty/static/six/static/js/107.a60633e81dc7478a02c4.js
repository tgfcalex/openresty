webpackJsonp([107],{Ar1Q:function(n,a,t){"use strict";function e(n){t("aFmG")}Object.defineProperty(a,"__esModule",{value:!0});var i=t("ABCa"),s=t("0iPh"),o=(i.a,t("0iPh")),r={components:{XHeader:i.a},data:function(){return{userName:"",type:5,wxImgUrl:"",payType:"网银存款",payListFlag:!0,isBank:!0,bankList:[],showOrHideBankList:!1,bankCode:"",bankName:"",bankUrl:"",descCard:!1,masterName:"",numbers:"",userBankName:""}},created:function(){this.getBanks()},methods:{showBankList:function(){this.showOrHideBankList=!0},seleBank:function(n){"other"===n.bankCode?this.descCard=!0:this.descCard=!1,this.showOrHideBankList=!1,this.bankCode=n.bankCode,this.bankName=n.bankShortName,this.bankUrl=n.bankIcon},getBanks:function(){var n=this;this.$api.get(this.$luyou.SETTING.GET_BANKS,null,function(a){0===a.error&&(n.bankList=a.data,n.bankUrl=a.data[1].bankIcon,n.bankName=a.data[1].bankShortName)},function(a){a&&n.toast(n.$api.tip(a))})},selePayType:function(n){this.type=n,this.descCard=!1,5===n?(this.payType="网银存款",this.isBank=!0):3===n?(this.payType="微信支付",this.isBank=!1):(this.payType="支付宝",this.isBank=!1),this.showOrHideSeleCon()},showOrHideSeleCon:function(){if(this.payListFlag){var n=1;"true"===this.$store.state.displayWechat&&(n+=1),"true"===this.$store.state.displayAlipay&&(n+=1),o("#v3an-payList").animate({height:30*n+2+"px"}),this.payListFlag=!1}else o("#v3an-payList").animate({height:"0px"}),this.payListFlag=!0},postImgAndGetImgUrl:function(){var n=this,a=document.getElementById("files").files[0],t=new FormData;t.append("aa",a),o.ajax({url:this.$luyou.SETTING.GET_QRCODEURL+"?action=uploadfile&objId=player&catePath=qrUrl",type:"post",data:t,async:!0,cache:!1,contentType:!1,enctype:"multipart/form-data",processData:!1,success:function(a){n.wxImgUrl=JSON.parse(a).data.url,document.getElementById("wxImg").src=n.$init.fserver+JSON.parse(a).data.url}})},postMessage:function(n){if(5===n)this.postBankMessage();else{if(this.checkMessage())return 0;this.postWxOrZfb()}},postBankMessage:function(){if(this.checkMessage())return 0;this.onConfirm()},postWxOrZfb:function(){var n={"search.bankName":this.wxImgUrl,"search.cardNumber":this.numbers,"search.masterName":this.masterName,"search.type":this.type};this.$api.get(this.$luyou.SETTING.SAVE_QRCODE,n,function(n){})},checkMessage:function(){var n=!1;return this.checkBankName(this.masterName)||(n=!0),this.checkBankNumber(this.numbers)||(n=!0),5!==this.type&&""===this.wxImgUrl&&(this.toast("请上传收款二维码"),n=!0),n},checkBankNumber:function(n){var a=!1,t=/^\d{10,25}$/;return n?t.test(n)?a=!0:this.toast("请输入正确的银行卡号"):this.toast("请输入银行卡号"),a},checkBankName:function(n){var a=/^[a-zA-Z\u4e00-\u9fa5]{2,15}$/,t=!1;return"其他银行"===this.bankName&&this.userBankName.length<1?this.toast("请输入您的持卡银行"):n?a.test(n)?t=!0:this.toast("持卡人姓名由2-15字符/中文组成"):this.toast("请输入持卡人姓名"),t},onConfirm:function(){var n=this,a=void 0;a="other"===this.bankCode?this.userBankName:this.bankName;var t=this.$qs.stringify({bankCode:this.bankCode,bankName:a,cardNumber:this.numbers,masterName:this.masterName});this.$api.post(this.$luyou.SETTING.BIND_BANKCARDS,t,function(a){0===a.error?(n.successDialog=!0,setTimeout(function(){n.$router.go(-1)},1500)):n.toast(a.message)},function(a){a&&n.toast(n.$api.tip(a))})}}},p=function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("div",{staticClass:"v2an-billdetail-record-wrapper"},[t("x-header",{staticClass:"header",attrs:{"left-options":{backText:""}}},[n._v("\n    添加账户\n  ")]),n._v(" "),t("div",{staticClass:"v2an-addWxInner"},[t("div",{staticClass:"v3an-payList",attrs:{id:"v3an-payList"}},[t("div",{staticClass:"v3an-payListInner"},[t("span",{on:{click:function(a){n.selePayType(5)}}},[n._v("网银存款")]),n._v(" "),"true"===n.$store.state.displayWechat?t("span",{staticClass:"v3an-addBorder",on:{click:function(a){n.selePayType(3)}}},[n._v("微信支付")]):n._e(),n._v(" "),"true"===n.$store.state.displayAlipay?t("span",{on:{click:function(a){n.selePayType(4)}}},[n._v("支付宝")]):n._e()])]),n._v(" "),t("div",{staticClass:"v2an-addWxDesc"},[t("span",{staticClass:"v2an-addWxDescName"},[n._v("账户类型:")]),n._v(" "),t("div",{staticClass:"v2an-addWxInput v2an-formatType",on:{click:function(a){n.showOrHideSeleCon()}}},[t("span",[n._v(n._s(n.payType))]),n._v(" "),t("span",{staticClass:"v2an-pullDown"})])]),n._v(" "),t("div",{staticClass:"v2an-addWxDesc"},[t("span",{staticClass:"v2an-addWxDescName"},[n._v("账号:")]),n._v(" "),5===n.type?t("input",{directives:[{name:"model",rawName:"v-model",value:n.numbers,expression:"numbers"}],staticClass:"v2an-addWxInput",attrs:{placeholder:"请输入银行账号"},domProps:{value:n.numbers},on:{input:function(a){a.target.composing||(n.numbers=a.target.value)}}}):t("input",{directives:[{name:"model",rawName:"v-model",value:n.numbers,expression:"numbers"}],staticClass:"v2an-addWxInput",attrs:{placeholder:"请输入微信号"},domProps:{value:n.numbers},on:{input:function(a){a.target.composing||(n.numbers=a.target.value)}}})]),n._v(" "),t("div",{staticClass:"v2an-addWxDesc"},[t("span",{staticClass:"v2an-addWxDescName"},[n._v("姓名:")]),n._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:n.masterName,expression:"masterName"}],staticClass:"v2an-addWxInput",attrs:{placeholder:"请输入真实姓名"},domProps:{value:n.masterName},on:{input:function(a){a.target.composing||(n.masterName=a.target.value)}}})]),n._v(" "),n.isBank?t("div",{staticClass:"v2an-addWxDesc"},[t("span",{staticClass:"v2an-addWxDescName"},[n._v("持卡银行:")]),n._v(" "),t("div",{staticClass:"v2an-addWxInput v2an-formatType",on:{click:function(a){n.showBankList()}}},[t("img",{staticClass:"v2an-seleBankImg",attrs:{src:n.bankUrl}}),n._v(" "),t("span",{staticClass:"v2an-seleBankName"},[n._v(n._s(n.bankName))]),n._v(" "),t("span",{staticClass:"v2an-pullDown"})])]):n._e(),n._v(" "),n.descCard?t("div",{staticClass:"v2an-addWxDesc"},[t("span",{staticClass:"v2an-addWxDescName"},[n._v("银行名称:")]),n._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:n.userBankName,expression:"userBankName"}],staticClass:"v2an-addWxInput",attrs:{placeholder:"请输入您的持卡银行"},domProps:{value:n.userBankName},on:{input:function(a){a.target.composing||(n.userBankName=a.target.value)}}})]):n._e(),n._v(" "),n.isBank?n._e():t("div",{staticClass:"v2an-addWxDesc"},[t("span",{staticClass:"v2an-addWxDescName"},[n._v("二维码:")]),n._v(" "),t("input",{staticClass:"v2an-addWxInput",attrs:{readonly:"true",placeholder:"上传收款二维码"}}),n._v(" "),t("input",{staticClass:"v2an-addWxInput v2an-opacity0",attrs:{id:"files",type:"file",multiple:"multiple",placeholder:"上传收款二维码"},on:{change:function(a){n.postImgAndGetImgUrl()}}}),n._v(" "),t("img",{staticClass:"v2an-seleWxImg",attrs:{id:"wxImg",src:""}})])]),n._v(" "),n.showOrHideBankList?t("div",{staticClass:"v2an-myBankList"},[t("div",{staticClass:"v2an-showBankListOuter"},[t("div",{staticClass:"v2an-showBankListInner"},n._l(n.bankList,function(a,e){return t("div",{staticClass:"v2an-bankDesc",on:{click:function(t){n.seleBank(a)}}},[t("img",{staticClass:"v2an-bankIcon",attrs:{src:a.bankIcon}}),n._v(" "),t("span",{staticClass:"v2an-bankName"},[n._v(n._s(a.bankShortName))])])}),0)])]):n._e(),n._v(" "),t("div",{staticStyle:{overflow:"hidden"}},[t("span",{staticClass:"v2an-addWxSure",on:{click:function(a){n.postMessage(n.type)}}},[n._v("确定")]),n._v(" "),t("span",{staticClass:"v2an-addWxSure fr",on:{click:function(a){n.postBankMessage()}}},[n._v("重置")])])],1)},l=[],d=t("XyMi"),c=e,h=Object(d.a)(r,p,l,!1,c,null,null);a.default=h.exports},BDLU:function(n,a,t){a=n.exports=t("FZ+f")(!1),a.push([n.i,"\ninput::-webkit-input-placeholder {\n  color: #ccc;\n}\ninput::-moz-placeholder {\n  color: #ccc;\n}\ninput:-moz-placeholder {\n  color: #ccc;\n}\ninput:-ms-input-placeholder {\n  color: #ccc;\n}\n.v2an-seleBankImg {\n  display: block;\n  float: left;\n  width: 18px;\n  height: 18px;\n  margin-top: 6px;\n  margin-left: 6px;\n}\n.v2an-bankIcon {\n  display: block;\n  float: left;\n  width: 24px;\n  height: 24px;\n  margin-top: 10px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n.v2an-bankDesc {\n  height: 44px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-bottom: 1px solid #f5efef;\n}\n.v2an-bankName {\n  display: inline-block;\n  height: 44px;\n  font-size: 14px;\n  line-height: 44px;\n  width: 75%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.v2an-showBankListOuter {\n  background: #ffffff;\n  position: absolute;\n  bottom: 0px;\n  display: block;\n  width: 100%;\n  height: 308px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.v2an-myBankList {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  top: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 99;\n}\n.v2an-formatType span.v2an-pullDown {\n  width: 0;\n  height: 0;\n  margin-top: 10px;\n  border-width: 8px;\n  border-style: solid;\n  float: right;\n  margin-right: 15px;\n  border-color: red transparent transparent transparent;\n}\n.v2an-formatType span {\n  display: block;\n  float: left;\n  width: 66%;\n}\n.v2an-formatType span.v2an-seleBankName {\n  text-indent: 8px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.v3an-addBorder {\n  border-top: 1px solid #cccccc;\n  border-bottom: 1px solid #cccccc;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.v3an-payList span {\n  display: block;\n  width: 100%;\n  height: 30px;\n  line-height: 30px;\n  font-size: 13px;\n  color: #666666;\n  text-indent: 10px;\n}\n.v3an-payList {\n  height: 0px;\n  position: absolute;\n  overflow: hidden;\n  top: 45px;\n  width: 60%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  left: 30%;\n  z-index: 9;\n  background: #ffffff;\n}\n.v3an-payListInner {\n  border-radius: 6px;\n  border: 1px solid #cccccc;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.v2an-opacity0 {\n  position: absolute;\n  opacity: 0;\n  left: 30%;\n  top: 0px;\n}\n.v2an-seleWxImg {\n  position: absolute;\n  width: 28px;\n  height: 28px;\n  top: 1px;\n  right: 15%;\n}\n.v2an-addWxSure {\n  float: left;\n  display: block;\n  width: 44%;\n  height: 44px;\n  line-height: 44px;\n  text-align: center;\n  border-radius: 6px;\n  background: red;\n  margin-left: 3%;\n  font-size: 16px;\n  color: #ffffff;\n  margin-top: 20px;\n}\n.v2an-addWxSure.fr {\n  float: right;\n  margin-right: 3%;\n}\n.v2an-addWxDesc {\n  margin-top: 15px;\n  overflow: hidden;\n  position: relative;\n  height: 30px;\n  width: 100%;\n}\n.v2an-addWxDescName {\n  width: 24%;\n  height: 30px;\n  line-height: 30px;\n  font-size: 14px;\n  color: #333333;\n  text-align: center;\n  display: block;\n  float: left;\n  margin-left: 6%;\n}\n.v2an-addWxInput {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-radius: 4px;\n  height: 30px;\n  width: 60%;\n  border: 1px solid #cccccc;\n  text-indent: 10px;\n  font-size: 13px;\n  color: #999999;\n  float: left;\n  line-height: 30px;\n}\n.v2an-addWxInner {\n  width: 94%;\n  padding-bottom: 20px;\n  margin-top: 10px;\n  margin-left: 3%;\n  border-radius: 6px;\n  overflow: hidden;\n  background: #ffffff;\n  position: relative;\n}\n.v2an-addWxOuter {\n  top: 0px;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  z-index: 99;\n}\n.v2an-wxDelete {\n  line-height: 85px;\n  width: 60px;\n  text-align: center;\n  font-size: 14px;\n  color: red;\n  margin-left: 20px;\n}\n.v2an-wxImgDesc {\n  height: 9px;\n  line-height: 9px;\n  font-size: 11px;\n  color: #999999;\n  margin-top: 9px;\n  display: block;\n}\n.v2an-formatType {\n  line-height: 30px;\n  font-size: 14px;\n  color: #333333;\n  text-indent: 10px;\n}\n.v2an-wxImg {\n  margin-left: 10px;\n  display: block;\n  width: 41px;\n  height: 41px;\n  background: red;\n  margin-top: 12px;\n}\n.v2an-wxNum {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  height: 100%;\n  width: 54%;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-line-pack: distribute;\n      align-content: space-around;\n}\n.v2an-wxNum div {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-left: 10px;\n  width: 100%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  font-size: 14px;\n  height: 16px;\n  line-height: 16px;\n  color: #333333;\n}\n@media screen and (max-width: 320px) {\n.v2an-wxNum div {\n      font-size: 12px;\n}\n}\n.v2an-wxOuter {\n  padding-top: 36px;\n  width: 96%;\n  margin-left: 2%;\n}\n.v2an-wxOuter div {\n  height: 18px;\n  line-height: 18px;\n  font-size: 14px;\n  color: #333333;\n  margin-bottom: 6px;\n}\n.v2an-wxOuter span {\n  display: block;\n  font-size: 11px;\n  line-height: 26px;\n  height: 26px;\n  color: #999999;\n}\n.v2an-billdetail-record-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background: #eeeeee;\n  overflow: scroll;\n}\n.v2an-left {\n  height: 100%;\n  float: left;\n}\n.v2an-overHide {\n  overflow: hidden;\n  height: 85px;\n  width: 96%;\n  margin-left: 2%;\n  margin-top: 10px;\n  border-radius: 6px;\n  background: #ffffff;\n}\n.showAllNum {\n  background: #ffffff;\n  color: #666666;\n}\n.addWXNum {\n  color: #ffffff;\n}\n.showAllNum, .addWXNum {\n  width: 96%;\n  margin-left: 2%;\n  text-align: center;\n  font-size: 14px;\n  height: 41px;\n  line-height: 41px;\n  border-radius: 6px;\n  margin-top: 10px;\n}\n",""])},aFmG:function(n,a,t){var e=t("BDLU");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var i=t("rjj0").default;i("27b700e8",e,!0,{})}});