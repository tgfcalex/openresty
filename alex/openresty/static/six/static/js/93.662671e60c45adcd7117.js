webpackJsonp([93],{"1xBz":function(e,n,r){var t=r("vgZj");"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var i=r("rjj0").default;i("6395f40d",t,!0,{})},jeBC:function(e,n,r){"use strict";function t(e){r("1xBz")}Object.defineProperty(n,"__esModule",{value:!0});var i={data:function(){return{logo:this.$store.state.template,isurl:"",language:(navigator.browserLanguage||navigator.language).toLowerCase()}},created:function(){this.resize()},methods:{resize:function(){var e=this,n=navigator.userAgent,r={trident:n.indexOf("Trident")>-1,presto:n.indexOf("Presto")>-1,webKit:n.indexOf("AppleWebKit")>-1,gecko:n.indexOf("Gecko")>-1&&-1===n.indexOf("KHTML"),mobile:!!n.match(/AppleWebKit.*Mobile.*/)||!!n.match(/AppleWebKit/),ios:!!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:n.indexOf("Android")>-1||n.indexOf("Linux")>-1,iPhone:n.indexOf("iPhone")>-1||n.indexOf("Mac")>-1,iPad:n.indexOf("iPad")>-1,webApp:-1===n.indexOf("Safari")};this.$api.get(this.$luyou.COMMON.GET_APP_DOWNLOAD,{},function(n){n.data&&(r.ios||r.iPhone||r.iPad?e.isurl="itms-services://?action=download-manifest&url="+n.data.iosQrCodeUrl:r.android&&(e.isurl=n.data.androidQrCodeUrl))},function(e){})}}},a=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"ercode_wrap"},[r("span",{staticClass:"ercode_logo"},[r("a",{attrs:{href:e.isurl}},[e._v("点击下载手机客户端")])])])},o=[],d=r("XyMi"),s=t,l=Object(d.a)(i,a,o,!1,s,"data-v-04506072",null);n.default=l.exports},p81X:function(e,n,r){e.exports=r.p+"static/img/download.png?ee49a16"},vgZj:function(e,n,r){var t=r("kxFB");n=e.exports=r("FZ+f")(!1),n.push([e.i,"\n.ercode_wrap[data-v-04506072]{\r\n  width:100%;\r\n  height:100%;\r\n  background:url("+t(r("p81X"))+");\r\n  background-size:100% 100%;\r\n  text-align:center;\n}\n.ercode_logo[data-v-04506072]{\r\n  width:60%;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 70%;\r\n  padding: 10px;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  background-color: #409eff;\r\n  border-color: #409eff;\r\n  border-radius: 4px;\r\n  color: #f2f2f2;\r\n  font-size: 16px;\n}\r\n\r\n",""])}});