require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([0],[,,,,,,,,,,function(t,e,s){"use strict";var n=a(s(2)),i=a(s(11));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(i.default))},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(13),i=s.n(n),a=s(22);var o=function(t){s(12)},c=s(0)(i.a,a.a,o,null,null);e.default=c.exports},function(t,e){},function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var n=a(s(14)),i=a(s(18));function a(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{style:{pageHeight:0,contentViewHeight:0,footViewHeight:90,mitemHeight:0},scrollTop:0,messages:[{user:"home",type:"head",content:"你好!"}]}},components:{chatInput:n.default,messageShow:i.default},created:function(){var e=t.getSystemInfoSync();this.style.pageHeight=e.windowHeight,this.style.contentViewHeight=e.windowHeight-t.getSystemInfoSync().screenWidth/750*100},methods:{getInputMessage:function(t){this.addMessage("customer",t.content,!1),this.toRobot(t.content)},addMessage:function(t,e,s,n){this.messages.push({user:t,content:e,hasSub:s,subcontent:n})},scrollToBottom:function(){var e=this,s=t.createSelectorQuery();s.selectAll(".m-item").boundingClientRect(),s.select("#scrollview").boundingClientRect(),s.exec(function(t){e.style.mitemHeight=0,t[0].forEach(function(t){e.style.mitemHeight=e.style.mitemHeight+t.height+20}),e.style.mitemHeight>e.style.contentViewHeight&&(e.scrollTop=e.style.mitemHeight-e.style.contentViewHeight)})},toRobot:function(e){var s=this;t.request({url:"http://www.tuling123.com/openapi/api",data:{key:"0f35e44683794241b5fb0d61bf09713e",info:e,userid:"uni-test"},success:function(t){s.addMessage("home",t.data.text,!1),s.scrollToBottom(),console.log("request success:"+t.data.text)},fail:function(e){console.log("request fail",e),t.showModal({content:e.errMsg,showCancel:!1})}})}}}}).call(e,s(3).default)},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(16),i=s.n(n),a=s(17);var o=function(t){s(15)},c=s(0)(i.a,a.a,o,null,null);e.default=c.exports},function(t,e){},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"chat-input",data:function(){return{inputValue:""}},methods:{startRecognize:function(){var t={},e=this;t.engine="iFly",e.inputValue="",plus.speech.startRecognize(t,function(t){console.log(t),e.inputValue+=t},function(t){console.log("语音识别失败："+t.message)})},sendMessge:function(){""==this.inputValue.trim()?this.inputValue="":(this.$emit("send-message",{type:"text",content:this.inputValue}),this.inputValue="")}}}},function(t,e,s){"use strict";var n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"footer"},[s("view",{staticClass:"footer-left"},[s("view",{staticClass:"uni-icon uni-icon-mic",attrs:{eventid:"WAr-0"},on:{tap:t.startRecognize}})]),s("view",{staticClass:"footer-center"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"input-text",attrs:{type:"text",eventid:"CXF-1"},domProps:{value:t.inputValue},on:{input:function(e){e.target.composing||(t.inputValue=e.target.value)}}})]),s("view",{staticClass:"footer-right",attrs:{eventid:"dmU-2"},on:{tap:t.sendMessge}},[s("view",{attrs:{id:"msg-type"}},[t._v("发送")])])])},staticRenderFns:[]};e.a=n},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(20),i=s.n(n),a=s(21);var o=function(t){s(19)},c=s(0)(i.a,a.a,o,null,null);e.default=c.exports},function(t,e){},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["message","id"]}},function(t,e,s){"use strict";var n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"m-item",attrs:{id:"message"+t.id}},[s("view",{staticClass:"m-left"},["home"==t.message.user?s("image",{staticClass:"head_icon",attrs:{src:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/homeHL.png"}}):t._e()]),s("view",{staticClass:"m-content"},[s("view",{staticClass:"m-content-head",class:{"m-content-head-right":"customer"==t.message.user}},[s("view",{class:"m-content-head-"+t.message.user},[t._v(t._s(t.message.content)+" ")])])]),s("view",{staticClass:"m-right"},["customer"==t.message.user?s("image",{staticClass:"head_icon",attrs:{src:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/customerHL.png"}}):t._e()])])},staticRenderFns:[]};e.a=n},function(t,e,s){"use strict";var n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"uni-column"},[e("view",{staticClass:"content",style:{height:this.style.contentViewHeight+"px"},attrs:{id:"content"}},[e("scroll-view",{style:{height:this.style.contentViewHeight+"px"},attrs:{id:"scrollview","scroll-y":"true","scroll-with-animation":!0,"scroll-top":this.scrollTop}},[this._l(this.messages,function(t,s){return e("message-show",{key:s,attrs:{message:t,id:s,mpcomid:"9CJ-0-"+s}})}),e("view",{attrs:{id:"bottom"}})],2)],1),e("view",{staticClass:"foot"},[e("chat-input",{attrs:{eventid:"m8x-0",mpcomid:"nMY-1"},on:{"send-message":this.getInputMessage}})],1)])},staticRenderFns:[]};e.a=n}],[10]);