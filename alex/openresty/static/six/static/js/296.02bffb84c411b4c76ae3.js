webpackJsonp([296],{GZdU:function(e,a,t){a=e.exports=t("FZ+f")(!1),a.push([e.i,"",""])},"s/Uc":function(e,a,t){"use strict";function s(e){t("ut6l")}Object.defineProperty(a,"__esModule",{value:!0});var c=t("mvHQ"),i=t.n(c),r=t("MVRq"),l=t("V0DB"),n=t("0iPh"),p=(r.a,l.a,t("0iPh")),o={components:{ButtonTab:r.a,ButtonTabItem:l.a},props:["getBetOdd","selectObj","selectAll","selectBig","selectSmall","selectOdd","selectEven","clearSelect","betHelpDialogHandler"],data:function(){return{lottery:null,titleList:["万位","千位","百位","十位","个位"],betCode:"ssc_renxuan2_zxhz",app:["4","5"],numArr:{},shu:1}},created:function(){this.getBetOdd(this.betCode),setTimeout(function(){p("div.vux-tab").hide()},500)},mounted:function(){var e=this;this.$nextTick(function(){setTimeout(function(){e.$parent.BScrollObj.refresh()},300)})},methods:{randomBetNum:function(){p(".playdiv").find("span.ballspan").removeClass("active");var e=parseInt(19*Math.random());p(".playdiv").find("span.ballspan").eq(e).addClass("active"),this.getBetCount()},getBetCount:function(){this.getshu();var e=this.getCount();this.$emit("update:betCount",e),0===e?this.$emit("update:showBetInfo",!1):this.$emit("update:showBetInfo",!0)},getBetContent:function(){for(var e=[],a=this.getSort(),t="",s=0;s<a.length;s++)t=t+a[s]+",";return p(".playdiv").find("span.ballspan.active").each(function(){e.push(p(this).attr("num"))}),(t=t.substr(0,t.length-1))+"|"+e.join(",").toString()},getSort:function(){for(var e=[],a=[],t=0;t<this.app.length;t++)a.push(this.app[t]);for(var s=a.sort(),c=0;c<s.length;c++)e.push(this.getDitool(s[c]));return e},getDitool:function(e){switch(e){case"1":return"万";case"2":return"千";case"3":return"百";case"4":return"十";case"5":return"个"}},getshu:function(){switch(this.app.length){case 0:case 1:this.shu=0;break;case 2:this.shu=1;break;case 3:this.shu=3;break;case 4:this.shu=6;break;case 5:this.shu=10}},getCount:function(){var e=[],a=[];if(p.each(p(".playdiv span.ballspan.active"),function(e,t){a.push(Number(p(this).attr("num")))}),a.length<1)return 0;for(var t=0;t<a.length;t++)for(var s=0;s<10;s++)for(var c=0;c<10;c++)s+c===a[t]&&e.push(s+""+c);return e.length*this.shu},getRandomBetNum:function(){var e=parseInt(19*Math.random()),a=JSON.parse(localStorage.randomOrder),t=0;t=e<10?e+1:19-e,a.betNum="十,个|"+e,a.betCount=t,a.betAmount=this.$global.div(2*t*Number(a.multiple),Number(a.bonusModel)),localStorage.randomOrder=i()(a)}},watch:{app:function(){this.getshu(),this.getBetCount()}}},u=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"content"},[t("div",{staticClass:"bet-help"},[t("div",{staticClass:"v1r-newplay-bethelp-wrap"},[t("span",[e._v("玩法说明:从万位、千位、百位、十位、个位中至少选择两个位置,至少选择一个和值号码构成一注。")]),e._v(" "),t("i",{staticClass:"icon-bet-help",on:{click:e.betHelpDialogHandler}})]),e._v(" "),t("div",{staticClass:"v1r-checkbox-list-wrap"},[t("ul",{staticClass:"v1r-checkbox-list-ul"},[t("li",[t("div",{staticClass:"fl v1r-check-box-wrap"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.app,expression:"app"}],staticClass:"v1r-checkbox-newplaye",attrs:{id:"wang",type:"checkbox",value:"1"},domProps:{checked:Array.isArray(e.app)?e._i(e.app,"1")>-1:e.app},on:{change:function(a){var t=e.app,s=a.target,c=!!s.checked;if(Array.isArray(t)){var i=e._i(t,"1");s.checked?i<0&&(e.app=t.concat(["1"])):i>-1&&(e.app=t.slice(0,i).concat(t.slice(i+1)))}else e.app=c}}}),e._v(" "),t("label",{staticClass:"check-lable",attrs:{for:"wang"}})]),e._v(" "),t("label",[e._v("万位")])]),e._v(" "),t("li",[t("div",{staticClass:"fl v1r-check-box-wrap"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.app,expression:"app"}],staticClass:"v1r-checkbox-newplaye",attrs:{id:"qian",type:"checkbox",value:"2"},domProps:{checked:Array.isArray(e.app)?e._i(e.app,"2")>-1:e.app},on:{change:function(a){var t=e.app,s=a.target,c=!!s.checked;if(Array.isArray(t)){var i=e._i(t,"2");s.checked?i<0&&(e.app=t.concat(["2"])):i>-1&&(e.app=t.slice(0,i).concat(t.slice(i+1)))}else e.app=c}}}),e._v(" "),t("label",{staticClass:"check-lable",attrs:{for:"qian"}})]),e._v(" "),t("label",[e._v("千位")])]),e._v(" "),t("li",[t("div",{staticClass:"fl v1r-check-box-wrap"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.app,expression:"app"}],staticClass:"v1r-checkbox-newplaye",attrs:{id:"bai",type:"checkbox",value:"3"},domProps:{checked:Array.isArray(e.app)?e._i(e.app,"3")>-1:e.app},on:{change:function(a){var t=e.app,s=a.target,c=!!s.checked;if(Array.isArray(t)){var i=e._i(t,"3");s.checked?i<0&&(e.app=t.concat(["3"])):i>-1&&(e.app=t.slice(0,i).concat(t.slice(i+1)))}else e.app=c}}}),e._v(" "),t("label",{staticClass:"check-lable",attrs:{for:"bai"}})]),e._v(" "),t("label",[e._v("百位")])]),e._v(" "),t("li",[t("div",{staticClass:"fl v1r-check-box-wrap"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.app,expression:"app"}],staticClass:"v1r-checkbox-newplaye",attrs:{id:"shi",type:"checkbox",value:"4"},domProps:{checked:Array.isArray(e.app)?e._i(e.app,"4")>-1:e.app},on:{change:function(a){var t=e.app,s=a.target,c=!!s.checked;if(Array.isArray(t)){var i=e._i(t,"4");s.checked?i<0&&(e.app=t.concat(["4"])):i>-1&&(e.app=t.slice(0,i).concat(t.slice(i+1)))}else e.app=c}}}),e._v(" "),t("label",{staticClass:"check-lable",attrs:{for:"shi"}})]),e._v(" "),t("label",[e._v("十位")])]),e._v(" "),t("li",[t("div",{staticClass:"fl v1r-check-box-wrap"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.app,expression:"app"}],staticClass:"v1r-checkbox-newplaye",attrs:{id:"ge",type:"checkbox",value:"5"},domProps:{checked:Array.isArray(e.app)?e._i(e.app,"5")>-1:e.app},on:{change:function(a){var t=e.app,s=a.target,c=!!s.checked;if(Array.isArray(t)){var i=e._i(t,"5");s.checked?i<0&&(e.app=t.concat(["5"])):i>-1&&(e.app=t.slice(0,i).concat(t.slice(i+1)))}else e.app=c}}}),e._v(" "),t("label",{staticClass:"check-lable",attrs:{for:"ge"}})]),e._v(" "),t("label",[e._v("个位")])])])])]),e._v(" "),t("div",{staticClass:"bet-area"},[t("div",{staticClass:"bet-h"},[t("div",{staticClass:"bet-h-p"},[e._v("和值")]),e._v(" "),t("div",{staticClass:"bet-h-f"},[t("button-tab",[t("button-tab-item",{on:{"on-item-click":function(a){e.selectAll(0)}}},[e._v("全")]),e._v(" "),t("button-tab-item",{on:{"on-item-click":function(a){e.clearSelect(0)}}},[e._v("清")])],1)],1)]),e._v(" "),t("div",{staticClass:"bet-c playdiv"},e._l(19,function(a){return t("div",{staticClass:"num"},[t("span",{staticClass:"n-p ballspan",attrs:{num:a-1},on:{click:function(a){e.selectObj(a)}}},[e._v(e._s(a-1))]),e._v(" "),t("span",{staticClass:"n-t"})])}),0)])])},v=[],h=t("XyMi"),d=s,b=Object(h.a)(o,u,v,!1,d,null,null);a.default=b.exports},ut6l:function(e,a,t){var s=t("GZdU");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var c=t("rjj0").default;c("ca17e910",s,!0,{})}});