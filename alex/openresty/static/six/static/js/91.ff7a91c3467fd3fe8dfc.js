webpackJsonp([91],{"+tCE":function(n,t,e){var a=e("MFwl");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var r=e("rjj0").default;r("31ad4d92",a,!0,{})},"29gQ":function(n,t,e){var a=e("vZ4L");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var r=e("rjj0").default;r("2b4483a6",a,!0,{})},MFwl:function(n,t,e){t=n.exports=e("FZ+f")(!1),t.push([n.i,'\n@charset "UTF-8";\n/**宝开样式   开始*/\n.baokai[data-v-05e25b47] {\n  background: transparent -webkit-gradient(linear, left top, right top, from(#00c6ff), to(#0072ff));\n  background: transparent linear-gradient(to right, #00c6ff, #0072ff);\n}\n.baokai-color[data-v-05e25b47] {\n  color: transparent linear-gradient(to right, #00c6ff, #0072ff);\n}\n.baokai-border[data-v-05e25b47] {\n  border-color: transparent transparent linear-gradient(to right, #00c6ff, #0072ff) transparent;\n}\n/**宝开样式   结束*/\n/**49样式   开始*/\n.sijiu[data-v-05e25b47] {\n  background: #AF162A !important;\n}\n.sijiu-color[data-v-05e25b47] {\n  color: #AF162A !important;\n}\n.sijiu-border[data-v-05e25b47] {\n  border-color: transparent transparent #AF162A transparent !important;\n}\n/**49样式   结束*/\n/**萝卜样式   开始*/\n/**萝卜样式   结束*/\n/**龙彩样式   开始*/\n.longcai[data-v-05e25b47] {\n  background: #F98C2D !important;\n}\n.longcai-color[data-v-05e25b47] {\n  color: #F98C2D !important;\n}\n.longcai-border[data-v-05e25b47] {\n  border-color: transparent transparent #F98C2D transparent !important;\n}\n/**龙彩样式   结束*/\n',""])},leWZ:function(n,t,e){"use strict";function a(n){e("29gQ"),e("+tCE")}Object.defineProperty(t,"__esModule",{value:!0});var r=e("1DHf"),i=e("rHil"),o=e("ABCa"),p=(o.a,r.a,i.a,{components:{XHeader:o.a,Cell:r.a,Group:i.a},data:function(){return{}},methods:{},mounted:function(){}}),l=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"feedback-question-wrapper"},[e("x-header",{staticClass:"header",attrs:{"left-options":{backText:""}}},[n._v("\n    意见与反馈\n  ")]),n._v(" "),e("div",{staticClass:"content-wrap"},[e("div",{staticClass:"tit"},[n._v("请选择你遇到的问题")]),n._v(" "),e("group",{staticClass:"question-list"},[e("cell",{attrs:{title:"闪退","is-link":"",link:{path:"/feedback/submit-usual",query:{type:"crash"}}}}),n._v(" "),e("cell",{attrs:{title:"卡顿","is-link":"",link:{path:"/feedback/submit-usual",query:{type:"caton"}}}}),n._v(" "),e("cell",{attrs:{title:"黑屏","is-link":"",link:{path:"/feedback/submit-usual",query:{type:"black"}}}}),n._v(" "),e("cell",{attrs:{title:"死机","is-link":"",link:{path:"/feedback/submit-usual",query:{type:"halted"}}}}),n._v(" "),e("cell",{attrs:{title:"界面错位","is-link":"",link:{path:"/feedback/submit-usual",query:{type:"ui"}}}}),n._v(" "),e("cell",{attrs:{title:"其他异常反馈","is-link":"",link:{path:"/feedback/submit-other",query:{type:"caton"}}}})],1)],1)],1)},s=[],c=e("XyMi"),d=a,u=Object(c.a)(p,l,s,!1,d,"data-v-05e25b47",null);t.default=u.exports},vZ4L:function(n,t,e){t=n.exports=e("FZ+f")(!1),t.push([n.i,"\n.feedback-question-wrapper {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #f2f2f2;\n}\n.feedback-question-wrapper * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n.feedback-question-wrapper .content-wrap .tit {\n    padding: 10px;\n    font-size: 1.2rem;\n    color: #adadad;\n}\n.feedback-question-wrapper .content-wrap .question-list {\n    background: #fff;\n}\n.feedback-question-wrapper .content-wrap .question-list .radio input {\n      width: 14px;\n      height: 14px;\n      -webkit-appearance: none;\n      border: 1px solid #bebcbc;\n      border-radius: 50%;\n      vertical-align: middle;\n      position: relative;\n      outline: 0;\n}\n.feedback-question-wrapper .content-wrap .question-list .radio input:checked:after {\n        content: '';\n        position: absolute;\n        width: 10px;\n        height: 10px;\n        background: #fa6200;\n        border-radius: 50%;\n        top: 50%;\n        left: 50%;\n        -webkit-transform: translateX(-50%) translateY(-50%);\n                transform: translateX(-50%) translateY(-50%);\n}\n.feedback-question-wrapper .content-wrap .question-list.form-style .vux-cell-primary {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none;\n      width: 70px;\n}\n.feedback-question-wrapper .content-wrap .question-list.form-style .weui-cell__ft {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      text-align: left;\n}\n.feedback-question-wrapper .content-wrap .question-list.form-style .gz-time {\n      color: #353535;\n}\n.feedback-question-wrapper .content-wrap .question-list.form-style .input {\n      outline: 0;\n      border: 0;\n      font-size: 1.4rem;\n      color: #353535;\n      width: 100%;\n}\n.feedback-question-wrapper .content-wrap .weui-cell {\n    padding: 13px 15px;\n    font-size: 1.4rem;\n}\n.feedback-question-wrapper .content-wrap .weui-cell_access .weui-cell__ft:after {\n    border-width: 1px 1px 0 0;\n    border-color: #353535;\n}\n.feedback-question-wrapper .content-wrap .weui-cells {\n    margin-top: 0;\n}\n.feedback-question-wrapper .content-wrap .textarea textarea {\n    min-height: 150px;\n    resize: none;\n    width: 100%;\n    border: 0;\n    outline: none;\n    font-size: 1.2rem;\n    color: #353535;\n    vertical-align: middle;\n}\n.feedback-question-wrapper .content-wrap .pic_upload {\n    min-height: 150px;\n    background: #fff;\n    margin-top: 25px;\n}\n.feedback-question-wrapper .content-wrap .pic_upload .hea {\n      font-size: 1.2rem;\n      color: #353535;\n      padding: 5px 10px;\n      overflow: hidden;\n      margin-bottom: 20px;\n}\n.feedback-question-wrapper .content-wrap .pic_upload .hea .img-limit {\n        float: right;\n        color: #969696;\n}\n.feedback-question-wrapper .content-wrap .pic_upload .btn-upload {\n      width: 60px;\n      height: 60px;\n      display: inline-block;\n      vertical-align: middle;\n      border-radius: 4px;\n      border: 1px solid #adadad;\n      margin-left: 10px;\n      position: relative;\n}\n.feedback-question-wrapper .content-wrap .pic_upload .btn-upload:before, .feedback-question-wrapper .content-wrap .pic_upload .btn-upload:after {\n        content: '';\n        position: absolute;\n        width: 30px;\n        height: 2px;\n        background: #969696;\n        left: 50%;\n        top: 50%;\n        -webkit-transform: translateX(-50%) translateY(-50%);\n                transform: translateX(-50%) translateY(-50%);\n}\n.feedback-question-wrapper .content-wrap .pic_upload .btn-upload:after {\n        -webkit-transform: translateX(-50%) translateY(-50%) rotateZ(90deg);\n                transform: translateX(-50%) translateY(-50%) rotateZ(90deg);\n}\n.feedback-question-wrapper .content-wrap .pic_upload .btn-upload input {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        left: 0;\n        top: 0;\n        opacity: 0;\n}\n.feedback-question-wrapper .content-wrap .pic_upload .img-wrap {\n      display: inline-block;\n      margin-left: 10px;\n      vertical-align: middle;\n}\n.feedback-question-wrapper .content-wrap .pic_upload .img-wrap img {\n        width: 60px;\n        height: 60px;\n        vertical-align: middle;\n        margin-right: 10px;\n        margin-bottom: 10px;\n}\n.feedback-question-wrapper .btn-wrap {\n    margin: 30px 20px 0;\n}\n.feedback-question-wrapper .btn-wrap .btn-sumbit {\n      -webkit-appearance: none;\n      height: 30px;\n      line-height: 30px;\n      text-align: center;\n      border-radius: 5px;\n      background: #fa6200;\n      border: 0;\n      display: block;\n      width: 200px;\n      margin: 0 auto;\n      font-family: inherit;\n      color: #fff;\n      font-size: 1.4rem;\n}\n",""])}});