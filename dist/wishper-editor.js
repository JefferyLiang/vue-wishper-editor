!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("VueWishperEditor",[],e):"object"==typeof exports?exports.VueWishperEditor=e():t.VueWishperEditor=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=6)}([function(t,e,n){"use strict";function i(t){n(12)}var r=n(5),o=n(14),a=n(3),s=i,c=a(r.a,o.a,!1,s,null,null);e.a=c.exports},function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=i(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([o]).join("\n")}return[n].join("\n")}function i(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=n(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function i(t){for(var e=0;e<t.length;e++){var n=t[e],i=l[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(o(n.parts[r]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var a=[],r=0;r<n.parts.length;r++)a.push(o(n.parts[r]));l[n.id]={id:n.id,refs:1,parts:a}}}}function r(){var t=document.createElement("style");return t.type="text/css",p.appendChild(t),t}function o(t){var e,n,i=document.querySelector("style["+g+'~="'+t.id+'"]');if(i){if(h)return v;i.parentNode.removeChild(i)}if(_){var o=f++;i=d||(d=r()),e=a.bind(null,i,o,!1),n=a.bind(null,i,o,!0)}else i=r(),e=s.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}function a(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=y(e,r);else{var o=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function s(t,e){var n=e.css,i=e.media,r=e.sourceMap;if(i&&t.setAttribute("media",i),m.ssrId&&t.setAttribute(g,e.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(10),l={},p=c&&(document.head||document.getElementsByTagName("head")[0]),d=null,f=0,h=!1,v=function(){},m=null,g="data-vue-ssr-id",_="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n,r){h=n,m=r||{};var o=u(t,e);return i(o),function(e){for(var n=[],r=0;r<o.length;r++){var a=o[r],s=l[a.id];s.refs--,n.push(s)}e?(o=u(t,e),i(o)):o=[];for(var r=0;r<n.length;r++){var s=n[r];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete l[s.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e,n,i,r,o){var a,s=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(a=t,s=t.default);var u="function"==typeof s?s.options:s;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),r&&(u._scopeId=r);var l;if(o?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=l):i&&(l=i),l){var p=u.functional,d=p?u.render:u.beforeCreate;p?(u._injectStyles=l,u.render=function(t,e){return l.call(e),d(t,e)}):u.beforeCreate=d?[].concat(d,l):[l]}return{esModule:a,exports:s,options:u}}},function(t,e,n){"use strict";var i=(n(11),n(15),n(0));e.a={name:"w-editor",components:{"w-icon":i.a},model:{prop:"value",event:"change"},props:{value:{type:String},fontSize:{type:Number,default:function(){return 14}},fontColor:{type:String,default:function(){return"#303133"}},placeholder:{type:String,default:""}},data:function(){return{editor_input_str:"",is_focus_input:!1,content_arr:[],hover_idx:-1}},computed:{content_len:function(){return console.log("in"),this.content_arr}},methods:{editorInputFocusEvent:function(){this.is_focus_input=!0,this.$refs["editor-input"].focus()},contentUpdateEvent:function(){var t=this;setTimeout(function(){t.$emit("change",t.$refs.htmlContent.innerHTML)},0)},inputEnterKeyUp:function(){""===this.editor_input_str||0===this.editor_input_str.length?this.pushEmptyToContent():(this.pushTextToContent(this.editor_input_str),this.editor_input_str="")},inputDeleteKeyDown:function(){if(0===this.content_arr.length)return!1;0!==this.editor_input_str.length&&""!==this.editor_input_str||"empty"!==this.content_arr[this.content_arr.length-1].type&&"text"!==this.content_arr[this.content_arr.length-1].type||this.backToTheBeforeLine()},backToTheBeforeLine:function(){this.editor_input_str=this.content_arr[this.content_arr.length-1].text,this.content_arr.pop(),this.contentUpdateEvent()},pushEmptyToContent:function(){this.content_arr.push({type:"empty",text:""}),this.contentUpdateEvent()},pushTextToContent:function(t){this.content_arr.push({type:"text",text:t}),this.contentUpdateEvent()},uploadImage:function(){this.$refs.imageUpload.click(),this.$refs.imageUpload},uploadAndAddToDom:function(){var t=this,e=new FileReader;e.readAsDataURL(this.$refs.imageUpload.files[0]),e.onload=function(e){t.content_arr.push({type:"image",base64:e.srcElement.result}),t.contentUpdateEvent()}},removeImageItem:function(t){if("image"!==this.content_arr[t].type)return!1;this.content_arr.splice(t,1),this.contentUpdateEvent()}}}},function(t,e,n){"use strict";function i(){return"fa-"+(o++).toString(16)}var r={};e.a={name:"icon",props:{name:{type:String,validator:function(t){return t?t in r||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'+t+'".\nPlease make sure you have imported this icon before using it.'),!1):(console.warn('Invalid prop: prop "name" is required.'),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},klass:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse}},icon:function(){return this.name?r[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,e=t.width,n=t.height;return Math.max(e,n)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var t=this.icon.raw,e={};return t=t.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,function(t,n,r){var o=i();return e[r]=o,' id="'+o+'"'}),t=t.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(t,n,i,r){var o=n||r;return o&&e[o]?"#"+e[o]:t}),t}},mounted:function(){var t=this;if(!this.icon){this.$children.forEach(function(e){e.outerScale=t.normalizedScale});var e=0,n=0;this.$children.forEach(function(t){e=Math.max(e,t.width),n=Math.max(n,t.height)}),this.childrenWidth=e,this.childrenHeight=n,this.$children.forEach(function(t){t.x=(e-t.width)/2,t.y=(n-t.height)/2})}},register:function(t){for(var e in t){var n=t[e];n.paths||(n.paths=[]),n.d&&n.paths.push({d:n.d}),n.polygons||(n.polygons=[]),n.points&&n.polygons.push({points:n.points}),r[e]=n}},icons:r};var o=870711},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(7),r={install:function(t,e){t.component(i.a.name,i.a)}};e.default=r},function(t,e,n){"use strict";function i(t){n(8)}var r=n(4),o=n(16),a=n(3),s=i,c=a(r.a,o.a,!1,s,"data-v-2731905a",null);e.a=c.exports},function(t,e,n){var i=n(9);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(2)("224a7dae",i,!0,{})},function(t,e,n){e=t.exports=n(1)(!1),e.push([t.i,".flex-row[data-v-2731905a]{display:flex;flex-direction:row}.flex-column[data-v-2731905a]{display:flex;flex-direction:column}.whisper-editor-container[data-v-2731905a]{width:100%;min-height:120px;position:relative}.whisper-editor-container .inner-container .content-container[data-v-2731905a],.whisper-editor-container .inner-container[data-v-2731905a]{width:100%}.whisper-editor-container .inner-container .content-container .editor-item>p[data-v-2731905a]{margin-top:0!important;margin-bottom:5px;text-align:left}.whisper-editor-container .inner-container .content-container .editor-item .image-container .btn[data-v-2731905a]{z-index:10;position:absolute;top:-10px;left:90%;width:25px;height:25px;cursor:pointer;background-color:#f56c6c;justify-content:center;align-items:center;border-radius:50%}input[data-v-2731905a]{border:none;width:100%}input[data-v-2731905a]:focus{outline:none}.icon[data-v-2731905a]{color:#606266;cursor:pointer;transition:color .3s}.icon[data-v-2731905a]:hover{color:#303133}",""])},function(t,e){t.exports=function(t,e){for(var n=[],i={},r=0;r<e.length;r++){var o=e[r],a=o[0],s=o[1],c=o[2],u=o[3],l={id:t+":"+r,css:s,media:c,sourceMap:u};i[a]?i[a].parts.push(l):n.push(i[a]={id:a,parts:[l]})}return n}},function(t,e,n){"use strict";n(0).a.register({times:{width:384,height:512,paths:[{d:"M323.1 441L377 387.1C386.4 377.7 386.4 362.6 377 353.2L279.8 256 377 158.8C386.4 149.4 386.4 134.3 377 124.9L323.1 71C313.7 61.6 298.6 61.6 289.2 71L192 168.2 94.8 71C85.4 61.6 70.3 61.6 60.9 71L7 124.9C-2.4 134.3-2.4 149.4 7 158.8L104.2 256 7 353.2C-2.4 362.6-2.4 377.7 7 387.1L60.9 441C70.3 450.4 85.4 450.4 94.8 441L192 343.8 289.2 441C298.5 450.3 313.7 450.3 323.1 441z"}]}})},function(t,e,n){var i=n(13);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(2)("060aee96",i,!0,{})},function(t,e,n){e=t.exports=n(1)(!1),e.push([t.i,".fa-icon{display:inline-block;fill:currentColor}.fa-flip-horizontal{transform:scaleX(-1)}.fa-flip-vertical{transform:scaleY(-1)}.fa-spin{animation:fa-spin 1s 0s infinite linear}.fa-inverse{color:#fff}.fa-pulse{animation:fa-spin 1s infinite steps(8)}@keyframes fa-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""])},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{class:t.klass,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(e,i){return n("path",t._b({key:"path-"+i},"path",e,!1))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(e,i){return n("polygon",t._b({key:"polygon-"+i},"polygon",e,!1))}):t._e(),t._v(" "),t.icon&&t.icon.raw?[n("g",{domProps:{innerHTML:t._s(t.raw)}})]:t._e()])],2)},r=[],o={render:i,staticRenderFns:r};e.a=o},function(t,e,n){"use strict";n(0).a.register({camera:{width:512,height:512,paths:[{d:"M512 144V432C512 458.5 490.5 480 464 480H48C21.5 480 0 458.5 0 432V144C0 117.5 21.5 96 48 96H136L148.3 63.1C155.3 44.4 173.2 32 193.2 32H318.7C338.7 32 356.6 44.4 363.6 63.1L376 96H464C490.5 96 512 117.5 512 144zM376 288C376 221.8 322.2 168 256 168S136 221.8 136 288 189.8 408 256 408 376 354.2 376 288zM344 288C344 336.5 304.5 376 256 376S168 336.5 168 288 207.5 200 256 200 344 239.5 344 288z"}]}})},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"whisper-editor-container flex-column",style:{"font-size":t.fontSize+"px",color:t.fontColor},on:{click:function(e){return e.stopPropagation(),t.editorInputFocusEvent(e)}}},[n("div",{staticClass:"inner-container flex-column"},[n("div",{ref:"htmlContent",staticClass:"content-container"},t._l(t.content_arr,function(e,i){return n("div",{key:i,staticClass:"editor-item",staticStyle:{width:"100%",padding:"3px 0px","min-height":"24px",position:"relative"}},["text"===e.type?n("p",[t._v(t._s(e.text))]):t._e(),t._v(" "),"image"===e.type?n("div",{staticClass:"image-container",staticStyle:{position:"relative",width:"calc(100% + 40px)","margin-left":"-25px"},on:{mouseover:function(e){t.hover_idx=i},mouseout:function(e){t.hover_idx=-1}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.hover_idx===i,expression:"hover_idx === index"}],staticClass:"btn flex-column",on:{click:function(e){e.stopPropagation(),t.removeImageItem(i)}}},[n("w-icon",{attrs:{name:"times"}})],1),t._v(" "),n("img",{staticStyle:{width:"100%"},attrs:{src:e.base64}})]):t._e()])})),t._v(" "),n("div",{staticClass:"input-container flex-row"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.editor_input_str,expression:"editor_input_str"}],ref:"editor-input",attrs:{type:"text",placeholder:0===t.content_arr.length&&""===t.editor_input_str?t.placeholder:""},domProps:{value:t.editor_input_str},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.inputEnterKeyUp(e):null},keydown:function(e){return"button"in e||!t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete"])?t.inputDeleteKeyDown(e):null},input:function(e){e.target.composing||(t.editor_input_str=e.target.value)}}}),t._v(" "),n("div",{staticClass:"insert-btn-group-container flex-row"},[n("div",{directives:[{name:"show",rawName:"v-show",value:0===t.editor_input_str.length,expression:"editor_input_str.length === 0"}],staticClass:"image-btn-container",on:{click:t.uploadImage}},[n("w-icon",{staticClass:"icon",attrs:{name:"camera"}}),t._v(" "),n("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"imageUpload",attrs:{type:"file"},on:{change:t.uploadAndAddToDom}})],1)])])])])},r=[],o={render:i,staticRenderFns:r};e.a=o}])});
//# sourceMappingURL=wishper-editor.js.map