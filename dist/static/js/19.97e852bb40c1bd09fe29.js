webpackJsonp([19],{1057:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"holder"},[null!==t.user.plan?n("div",["Expired"===t.user.plan.title?n("div",{staticClass:"alert alert-danger"},[n("strong",[t._v("Your Plan was Expired!")]),t._v(" Please update or upgrade your plan to continue using ID Factory.\n      ")]):t._e(),t._v(" "),"Expired"!==t.user.plan.title?n("div",{staticClass:"alert alert-success"},[t._v("\n        Your current plan "),n("strong",[t._v(t._s(t.user.plan.title.toUpperCase()))]),t._v(" will expired on "+t._s(t.user.plan.end_human)+".\n      ")]):t._e()]):t._e(),t._v(" "),n("div",{staticClass:"pricing-item"},[n("span",{staticClass:"header-options option-false"}),t._v(" "),t._m(0),t._v(" "),n("span",{staticClass:"pricing-content-holder"},[n("span",{staticClass:"cost bg-green"},[n("span",{staticClass:"top"},[n("span",{staticClass:"value"},[t._v(t._s(t.products.currency+""+t.products.basic))])]),t._v(" "),t._m(1)]),t._v(" "),n("span",{staticClass:"lead"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.basic,expression:"basic"}],staticClass:"form-control form-control-plan",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.basic=e.target.multiple?n:n[0]}}},t._l(12,function(e){return n("option",{domProps:{value:e}},[t._v(t._s(e)+" \n              "),1===e?n("label",[t._v("Month")]):n("label",[t._v("Months")])])})),t._v(" "),n("button",{staticClass:"btn btn-primary btn-whole",on:{click:function(e){t.upgradePlan("basic",t.products.basic,t.basic)}}},[t._v("\n            Upgrade\n          ")]),t._v(" "),t._m(2),t._v(" "),n("span",{staticClass:"text"},[t._v("\n            Limited Storage\n          ")]),t._v(" "),n("span",{staticClass:"text"},[t._v("\n            Expire after 1 Month\n          ")]),t._v(" "),n("button",{staticClass:"btn btn-primary btn-whole",on:{click:function(e){t.upgradePlan("basic",t.products.basic,t.basic)}}},[t._v("\n            Upgrade\n          ")])])])]),t._v(" "),n("span",{staticClass:"pricing-item",staticStyle:{"margin-left":"2%"}},[t._m(3),t._v(" "),n("span",{staticClass:"pricing-content-holder"},[n("span",{staticClass:"cost bg-secondary"},[n("span",{staticClass:"top"},[n("span",{staticClass:"value"},[t._v(t._s(t.products.currency+""+t.products.enterprise))])]),t._v(" "),t._m(4)]),t._v(" "),n("span",{staticClass:"lead"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.enterprise,expression:"enterprise"}],staticClass:"form-control form-control-plan",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.enterprise=e.target.multiple?n:n[0]}}},t._l(12,function(e){return n("option",{domProps:{value:e}},[t._v(t._s(e)+" \n              "),1===e?n("label",[t._v("Month")]):n("label",[t._v("Months")])])})),t._v(" "),n("button",{staticClass:"btn btn-primary btn-whole",on:{click:function(e){t.upgradePlan("enterprise",t.products.enterprise,t.enterprise)}}},[t._v("\n            Upgrade\n          ")]),t._v(" "),t._m(5),t._v(" "),n("span",{staticClass:"text"},[t._v("\n            Unlimited Storage\n          ")]),t._v(" "),n("span",{staticClass:"text"},[t._v("\n            Message to Clients\n          ")]),t._v(" "),n("span",{staticClass:"text"},[t._v("\n            Card Editor\n          ")]),t._v(" "),n("span",{staticClass:"text"},[t._v("\n            Notifications\n          ")]),t._v(" "),n("button",{staticClass:"btn btn-primary btn-whole",on:{click:function(e){t.upgradePlan("enterprise",t.products.enterprise,t.enterprise)}}},[t._v("\n            Upgrade\n          ")])])])]),t._v(" "),n("span",{staticClass:"pricing-item",staticStyle:{"margin-left":"2%"}},[t._m(6),t._v(" "),n("span",{staticClass:"pricing-content-holder"},[n("span",{staticClass:"cost bg-secondary"},[n("span",{staticClass:"top"},[n("span",{staticClass:"value"},[t._v(t._s(t.products.currency+""+t.products.premium))])]),t._v(" "),t._m(7)]),t._v(" "),n("span",{staticClass:"lead"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.premium,expression:"premium"}],staticClass:"form-control form-control-plan",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.premium=e.target.multiple?n:n[0]}}},t._l(12,function(e){return n("option",{domProps:{value:e}},[t._v(t._s(e)+" \n              "),1===e?n("label",[t._v("Month")]):n("label",[t._v("Months")])])})),t._v(" "),n("button",{staticClass:"btn btn-primary btn-whole",on:{click:function(e){t.upgradePlan("premium",t.products.premium,t.premium)}}},[t._v("\n            Upgrade\n          ")]),t._v(" "),t._m(8),t._v(" "),n("span",{staticClass:"text"},[t._v("\n            Unlimited Storage\n          ")]),t._v(" "),n("span",{staticClass:"text"},[t._v("\n            Message to Clients\n          ")]),t._v(" "),n("span",{staticClass:"text"},[t._v("\n            Card Editor\n          ")]),t._v(" "),n("span",{staticClass:"text"},[t._v("\n            Notifications\n          ")]),t._v(" "),n("button",{staticClass:"btn btn-primary btn-whole",on:{click:function(e){t.upgradePlan("premium",t.products.premium,t.premium)}}},[t._v("\n            Upgrade\n          ")])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"header-item bg-green"},[n("label",[n("b",[t._v("BASIC")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottom-pricing text-warning"},[n("b",[t._v("PER MONTH")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"text text-danger"},[n("b",[t._v("FEATURES")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"header-item bg-secondary"},[n("label",[n("b",[t._v("ENTERPRISE")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"bottom-pricing text-warning"},[n("b",[t._v("PER MONTH")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"text text-danger"},[n("b",[t._v("FEATURES")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"header-item bg-secondary"},[n("label",[n("b",[t._v("PREMIUM")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"bottom-pricing text-warning"},[n("b",[t._v("PER MONTH")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"text text-danger"},[n("b",[t._v("FEATURES")])])}]}},1069:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"template-holder"},[n("h5",[t._v("Plan History")]),t._v(" "),n("br"),t._v(" "),null!==t.data?n("table",{staticClass:"table table-bordered table-responsive"},[t._m(0),t._v(" "),n("tbody",t._l(t.data,function(e,r){return n("tr",[n("td",[t._v(t._s(e.title.toUpperCase()))]),t._v(" "),n("td",[t._v(t._s(e.start_human))]),t._v(" "),n("td",[t._v(t._s(e.end_human))]),t._v(" "),n("td",[t._v(t._s(e.price)+" x "+t._s(parseInt(e.sub_total)/parseInt(e.price)))]),t._v(" "),n("td",[t._v(t._s(e.discount))]),t._v(" "),n("td",[t._v(t._s(e.total_amount))])])}))]):t._e()])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("td",[n("b",[t._v("Plan")])]),t._v(" "),n("td",[n("b",[t._v("Start Date")])]),t._v(" "),n("td",[n("b",[t._v("Expiry Date")])]),t._v(" "),n("td",[n("b",[t._v("Price")])]),t._v(" "),n("td",[n("b",[t._v("Discount")])]),t._v(" "),n("td",[n("b",[t._v("Total")])])])])}]}},1074:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"template-holder"},[n("div",{staticClass:"template-list"},[n("item"),t._v(" "),n("history")],1)])},staticRenderFns:[]}},337:function(t,e,n){n(955);var r=n(113)(n(788),n(1074),"data-v-cd889fb8",null);t.exports=r.exports},343:function(t,e,n){"use strict";function r(t){return"[object Array]"===w.call(t)}function a(t){return"[object ArrayBuffer]"===w.call(t)}function o(t){return"undefined"!=typeof FormData&&t instanceof FormData}function i(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer}function s(t){return"string"==typeof t}function c(t){return"number"==typeof t}function l(t){return void 0===t}function u(t){return null!==t&&"object"==typeof t}function p(t){return"[object Date]"===w.call(t)}function d(t){return"[object File]"===w.call(t)}function f(t){return"[object Blob]"===w.call(t)}function A(t){return"[object Function]"===w.call(t)}function h(t){return u(t)&&A(t.pipe)}function m(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}function v(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function C(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function g(t,e){if(null!==t&&void 0!==t)if("object"!=typeof t&&(t=[t]),r(t))for(var n=0,a=t.length;n<a;n++)e.call(null,t[n],n,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}function b(){function t(t,n){"object"==typeof e[n]&&"object"==typeof t?e[n]=b(e[n],t):e[n]=t}for(var e={},n=0,r=arguments.length;n<r;n++)g(arguments[n],t);return e}function x(t,e,n){return g(e,function(e,r){t[r]=n&&"function"==typeof e?B(e,n):e}),t}var B=n(352),_=n(371),w=Object.prototype.toString;t.exports={isArray:r,isArrayBuffer:a,isBuffer:_,isFormData:o,isArrayBufferView:i,isString:s,isNumber:c,isObject:u,isUndefined:l,isDate:p,isFile:d,isBlob:f,isFunction:A,isStream:h,isURLSearchParams:m,isStandardBrowserEnv:C,forEach:g,merge:b,extend:x,trim:v}},345:function(t,e,n){t.exports=n(354)},347:function(t,e,n){"use strict";(function(e){function r(t,e){!a.isUndefined(t)&&a.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var a=n(343),o=n(368),i={"Content-Type":"application/x-www-form-urlencoded"},s={adapter:function(){var t;return"undefined"!=typeof XMLHttpRequest?t=n(348):void 0!==e&&(t=n(348)),t}(),transformRequest:[function(t,e){return o(e,"Content-Type"),a.isFormData(t)||a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)?t:a.isArrayBufferView(t)?t.buffer:a.isURLSearchParams(t)?(r(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):a.isObject(t)?(r(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};s.headers={common:{Accept:"application/json, text/plain, */*"}},a.forEach(["delete","get","head"],function(t){s.headers[t]={}}),a.forEach(["post","put","patch"],function(t){s.headers[t]=a.merge(i)}),t.exports=s}).call(e,n(114))},348:function(t,e,n){"use strict";var r=n(343),a=n(360),o=n(363),i=n(369),s=n(367),c=n(351),l="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(362);t.exports=function(t){return new Promise(function(e,u){var p=t.data,d=t.headers;r.isFormData(p)&&delete d["Content-Type"];var f=new XMLHttpRequest,A="onreadystatechange",h=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in f||s(t.url)||(f=new window.XDomainRequest,A="onload",h=!0,f.onprogress=function(){},f.ontimeout=function(){}),t.auth){var m=t.auth.username||"",v=t.auth.password||"";d.Authorization="Basic "+l(m+":"+v)}if(f.open(t.method.toUpperCase(),o(t.url,t.params,t.paramsSerializer),!0),f.timeout=t.timeout,f[A]=function(){if(f&&(4===f.readyState||h)&&(0!==f.status||f.responseURL&&0===f.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in f?i(f.getAllResponseHeaders()):null,r=t.responseType&&"text"!==t.responseType?f.response:f.responseText,o={data:r,status:1223===f.status?204:f.status,statusText:1223===f.status?"No Content":f.statusText,headers:n,config:t,request:f};a(e,u,o),f=null}},f.onerror=function(){u(c("Network Error",t,null,f)),f=null},f.ontimeout=function(){u(c("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",f)),f=null},r.isStandardBrowserEnv()){var C=n(365),g=(t.withCredentials||s(t.url))&&t.xsrfCookieName?C.read(t.xsrfCookieName):void 0;g&&(d[t.xsrfHeaderName]=g)}if("setRequestHeader"in f&&r.forEach(d,function(t,e){void 0===p&&"content-type"===e.toLowerCase()?delete d[e]:f.setRequestHeader(e,t)}),t.withCredentials&&(f.withCredentials=!0),t.responseType)try{f.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&f.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&f.upload&&f.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){f&&(f.abort(),u(t),f=null)}),void 0===p&&(p=null),f.send(p)})}},349:function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},350:function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},351:function(t,e,n){"use strict";var r=n(359);t.exports=function(t,e,n,a,o){var i=new Error(t);return r(i,e,n,a,o)}},352:function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},354:function(t,e,n){"use strict";function r(t){var e=new i(t),n=o(i.prototype.request,e);return a.extend(n,i.prototype,e),a.extend(n,e),n}var a=n(343),o=n(352),i=n(356),s=n(347),c=r(s);c.Axios=i,c.create=function(t){return r(a.merge(s,t))},c.Cancel=n(349),c.CancelToken=n(355),c.isCancel=n(350),c.all=function(t){return Promise.all(t)},c.spread=n(370),t.exports=c,t.exports.default=c},355:function(t,e,n){"use strict";function r(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new a(t),e(n.reason))})}var a=n(349);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var t;return{token:new r(function(e){t=e}),cancel:t}},t.exports=r},356:function(t,e,n){"use strict";function r(t){this.defaults=t,this.interceptors={request:new i,response:new i}}var a=n(347),o=n(343),i=n(357),s=n(358);r.prototype.request=function(t){"string"==typeof t&&(t=o.merge({url:arguments[0]},arguments[1])),t=o.merge(a,this.defaults,{method:"get"},t),t.method=t.method.toLowerCase();var e=[s,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},o.forEach(["delete","get","head","options"],function(t){r.prototype[t]=function(e,n){return this.request(o.merge(n||{},{method:t,url:e}))}}),o.forEach(["post","put","patch"],function(t){r.prototype[t]=function(e,n,r){return this.request(o.merge(r||{},{method:t,url:e,data:n}))}}),t.exports=r},357:function(t,e,n){"use strict";function r(){this.handlers=[]}var a=n(343);r.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},r.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},r.prototype.forEach=function(t){a.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=r},358:function(t,e,n){"use strict";function r(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var a=n(343),o=n(361),i=n(350),s=n(347),c=n(366),l=n(364);t.exports=function(t){return r(t),t.baseURL&&!c(t.url)&&(t.url=l(t.baseURL,t.url)),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=a.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),a.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||s.adapter)(t).then(function(e){return r(t),e.data=o(e.data,e.headers,t.transformResponse),e},function(e){return i(e)||(r(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},359:function(t,e,n){"use strict";t.exports=function(t,e,n,r,a){return t.config=e,n&&(t.code=n),t.request=r,t.response=a,t}},360:function(t,e,n){"use strict";var r=n(351);t.exports=function(t,e,n){var a=n.config.validateStatus;n.status&&a&&!a(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},361:function(t,e,n){"use strict";var r=n(343);t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},362:function(t,e,n){"use strict";function r(){this.message="String contains an invalid character"}function a(t){for(var e,n,a=String(t),i="",s=0,c=o;a.charAt(0|s)||(c="=",s%1);i+=c.charAt(63&e>>8-s%1*8)){if((n=a.charCodeAt(s+=.75))>255)throw new r;e=e<<8|n}return i}var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",t.exports=a},363:function(t,e,n){"use strict";function r(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var a=n(343);t.exports=function(t,e,n){if(!e)return t;var o;if(n)o=n(e);else if(a.isURLSearchParams(e))o=e.toString();else{var i=[];a.forEach(e,function(t,e){null!==t&&void 0!==t&&(a.isArray(t)&&(e+="[]"),a.isArray(t)||(t=[t]),a.forEach(t,function(t){a.isDate(t)?t=t.toISOString():a.isObject(t)&&(t=JSON.stringify(t)),i.push(r(e)+"="+r(t))}))}),o=i.join("&")}return o&&(t+=(-1===t.indexOf("?")?"?":"&")+o),t}},364:function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},365:function(t,e,n){"use strict";var r=n(343);t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,n,a,o,i){var s=[];s.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(a)&&s.push("path="+a),r.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},366:function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},367:function(t,e,n){"use strict";var r=n(343);t.exports=r.isStandardBrowserEnv()?function(){function t(t){var e=t;return n&&(a.setAttribute("href",e),e=a.href),a.setAttribute("href",e),{href:a.href,protocol:a.protocol?a.protocol.replace(/:$/,""):"",host:a.host,search:a.search?a.search.replace(/^\?/,""):"",hash:a.hash?a.hash.replace(/^#/,""):"",hostname:a.hostname,port:a.port,pathname:"/"===a.pathname.charAt(0)?a.pathname:"/"+a.pathname}}var e,n=/(msie|trident)/i.test(navigator.userAgent),a=document.createElement("a");return e=t(window.location.href),function(n){var a=r.isString(n)?t(n):n;return a.protocol===e.protocol&&a.host===e.host}}():function(){return function(){return!0}}()},368:function(t,e,n){"use strict";var r=n(343);t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},369:function(t,e,n){"use strict";var r=n(343),a=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,o,i={};return t?(r.forEach(t.split("\n"),function(t){if(o=t.indexOf(":"),e=r.trim(t.substr(0,o)).toLowerCase(),n=r.trim(t.substr(o+1)),e){if(i[e]&&a.indexOf(e)>=0)return;i[e]="set-cookie"===e?(i[e]?i[e]:[]).concat([n]):i[e]?i[e]+", "+n:n}}),i):i}},370:function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},371:function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function r(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(n(t)||r(t)||!!t._isBuffer)}},632:function(t,e,n){"use strict";e.a={currency:"₱",premium:599,enterprise:499,basic:399}},786:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(19),a=n(33),o=n(27),i=n(345);n.n(i);e.default={mounted:function(){this.retrieve()},data:function(){return{user:a.a.user,config:o.default,data:null}},methods:{redirect:function(t){r.a.push(t)},retrieve:function(){var t=this,e={account_id:this.user.userID,condition:[{value:this.user.userID,column:"account_id",clause:"="}],sort:{start:"desc"}};this.APIRequest("plans/retrieve",e).done(function(e){e.data.length>0?t.data=e.data:t.data=null})}}}},787:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(19),a=n(33),o=n(27),i=n(632);e.default={data:function(){return{user:a.a.user,config:o.default,products:i.a,basic:1,enterprise:1,premium:1}},methods:{redirect:function(t){r.a.push(t)},upgradePlan:function(t,e,n){var r=this,a={account_id:this.user.userID,title:t,price:e,sub_total:parseInt(e)*parseInt(n),tax:0,discount:0,total_amount:parseInt(e)*parseInt(n),status:"added"};this.APIRequest("plans/create",a).done(function(t){t.data>0&&r.redirect("/checkout_plan")})}}}},788:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(19),a=n(33),o=n(27),i=n(345);n.n(i);e.default={mounted:function(){this.retrieve()},data:function(){return{user:a.a.user,config:o.default,errorMessage:null,data:null,prevIndex:null}},components:{item:n(995),history:n(994)},methods:{redirect:function(t){r.a.push(t)},retrieve:function(){var t={condition:[{value:this.user.userID,column:"account_id",clause:"="},{value:"ADDED",column:"status",clause:"="}],account_id:this.user.userID};this.APIRequest("plans/retrieve",t).then(function(t){t.data.length>0&&r.a.push("/checkout_plan")})}}}},856:function(t,e,n){e=t.exports=n(300)(),e.push([t.i,".holder[data-v-700a9b0e]{width:100%;float:left;margin-bottom:50px}.pricing-item[data-v-700a9b0e]{width:32%;float:left;min-height:500px;overflow-y:hidden}.pricing-item .header-item[data-v-700a9b0e]{border-top-right-radius:5px;border-top-left-radius:5px;text-align:center;color:#fff;border:1px solid inherit;float:left;width:100%}.pricing-item .header-item label[data-v-700a9b0e]{font-size:24px;padding-top:10px;padding-bottom:5px}.pricing-content-holder[data-v-700a9b0e]{width:100%;float:left;min-height:200px;overflow-y:hidden;border-left:1px solid #22b173;border-right:1px solid #22b173;border-bottom:1px solid #22b173}.pricing-content-holder .cost[data-v-700a9b0e]{width:100%;float:left;min-height:150px;text-align:right;color:#fff;overflow-y:hidden}.pricing-content-holder .center[data-v-700a9b0e]{height:250px}.cost .bottom-pricing[data-v-700a9b0e],.cost .top[data-v-700a9b0e]{width:100%;float:left;text-align:center}.cost .bottom-pricing[data-v-700a9b0e]{font-size:18px;line-height:40px;height:40px}.cost .top .value[data-v-700a9b0e]{font-size:80px;font-weight:600;float:left;width:100%}.cost .top .details[data-v-700a9b0e]{font-weight:600;font-size:16px;width:100%}.pricing-content-holder .other-details[data-v-700a9b0e]{width:100%;float:left;background:#22b173}.other-details .item[data-v-700a9b0e]{width:100%;float:left;text-align:center;font-size:20px;text-transform:uppercase;color:#fff;line-height:50px;height:50px}.pricing-content-holder .lead[data-v-700a9b0e]{width:100%;float:left;min-height:50px;overflow-y:hidden}.pricing-content-holder .lead .coupons[data-v-700a9b0e]{float:left;width:80%;height:50px;margin-left:10%;margin-right:10%;margin-bottom:10px}.pricing-content-holder .lead .coupon-message[data-v-700a9b0e]{width:100%;float:left;text-align:center;margin-top:10px;padding-bottom:10px}.lead .coupons input[data-v-700a9b0e]{width:70%!important;float:left;height:50px!important}.lead .coupons .button-holder[data-v-700a9b0e]{width:30%!important;float:left}.lead .coupons .button-holder button[data-v-700a9b0e]{height:50px!important;width:90%!important}.pricing-content-holder .lead .text[data-v-700a9b0e]{width:100%;float:left;font-size:14px;line-height:50px;padding-left:10%;border-bottom:1px solid #ddd;font-weight:400}.pricing-content-holder .lead .btn-whole[data-v-700a9b0e]{width:80%;text-align:center;float:left;margin:25px 10% 10px;height:50px!important}.bg-green[data-v-700a9b0e]{background:#22b173}.form-control-plan[data-v-700a9b0e]{width:80%!important;margin-left:10%!important;margin-right:10%!important;height:50px!important;margin-top:20px}@media (max-width:992px){.pricing-item[data-v-700a9b0e]{width:90%;margin-left:5%;margin-right:5%;margin-bottom:0}}","",{version:3,sources:["C:/xampp/htdocs/projectabc/src/modules/plan/Item.vue"],names:[],mappings:"AACA,yBACC,WAAY,AACZ,WAAY,AACZ,kBAAoB,CACpB,AACD,+BACE,UAAW,AACX,WAAY,AACZ,iBAAkB,AAClB,iBAAmB,CACpB,AACD,4CACE,4BAA6B,AAC7B,2BAA4B,AAC5B,kBAAmB,AACnB,WAAY,AACZ,yBAA0B,AAC1B,WAAY,AACZ,UAAY,CACb,AACD,kDACE,eAAgB,AAChB,iBAAkB,AAClB,kBAAoB,CACrB,AACD,yCACE,WAAY,AACZ,WAAY,AACZ,iBAAkB,AAClB,kBAAmB,AACnB,8BAA+B,AAC/B,+BAAgC,AAChC,+BAAiC,CAClC,AACD,+CACE,WAAY,AACZ,WAAY,AACZ,iBAAkB,AAClB,iBAAkB,AAClB,WAAY,AACZ,iBAAmB,CACpB,AACD,iDACE,YAAc,CACf,AAMD,mEAJE,WAAY,AACZ,WAAY,AACZ,iBAAmB,CASpB,AAPD,uCAIE,eAAgB,AAChB,iBAAkB,AAClB,WAAa,CACd,AACD,mCACE,eAAgB,AAChB,gBAAiB,AACjB,WAAY,AACZ,UAAY,CACb,AACD,qCACE,gBAAiB,AACjB,eAAgB,AAChB,UAAY,CACb,AACD,wDACE,WAAY,AACZ,WAAY,AACZ,kBAAoB,CACrB,AACD,sCACE,WAAY,AACZ,WAAY,AACZ,kBAAmB,AACnB,eAAgB,AAChB,yBAA0B,AAC1B,WAAY,AACZ,iBAAkB,AAClB,WAAa,CACd,AACD,+CACE,WAAY,AACZ,WAAY,AACZ,gBAAiB,AACjB,iBAAmB,CACpB,AACD,wDACE,WAAY,AACZ,UAAW,AACX,YAAa,AACb,gBAAiB,AACjB,iBAAkB,AAClB,kBAAoB,CACrB,AACD,+DACE,WAAY,AACZ,WAAY,AACZ,kBAAmB,AACnB,gBAAiB,AACjB,mBAAqB,CACtB,AACD,sCACE,oBAAsB,AACtB,WAAY,AACZ,qBAAwB,CACzB,AACD,+CACE,oBAAsB,AACtB,UAAY,CACb,AACD,sDACE,sBAAwB,AACxB,mBAAsB,CACvB,AACD,qDACE,WAAY,AACZ,WAAY,AACZ,eAAgB,AAChB,iBAAkB,AAClB,iBAAkB,AAClB,6BAA8B,AAC9B,eAAiB,CAClB,AACD,0DACE,UAAW,AACX,kBAAmB,AACnB,WAAY,AACZ,qBAA0B,AAC1B,qBAAwB,CACzB,AACD,2BACE,kBAAoB,CACrB,AACD,oCACE,oBAAsB,AACtB,0BAA4B,AAC5B,2BAA6B,AAC7B,sBAAwB,AACxB,eAAiB,CAClB,AACD,yBACA,+BACI,UAAW,AACX,eAAgB,AAChB,gBAAiB,AACjB,eAAmB,CACtB,CACA",file:"Item.vue",sourcesContent:["\n.holder[data-v-700a9b0e]{\r\n\twidth: 100%;\r\n\tfloat: left;\r\n\tmargin-bottom: 50px;\n}\n.pricing-item[data-v-700a9b0e]{\r\n  width: 32%;\r\n  float: left;\r\n  min-height: 500px;\r\n  overflow-y: hidden;\n}\n.pricing-item .header-item[data-v-700a9b0e]{\r\n  border-top-right-radius: 5px;\r\n  border-top-left-radius: 5px;\r\n  text-align: center;\r\n  color: #fff;\r\n  border: solid 1px inherit;\r\n  float: left;\r\n  width: 100%;\n}\n.pricing-item .header-item label[data-v-700a9b0e]{\r\n  font-size: 24px;\r\n  padding-top: 10px;\r\n  padding-bottom: 5px;\n}\n.pricing-content-holder[data-v-700a9b0e]{\r\n  width: 100%;\r\n  float: left;\r\n  min-height: 200px;\r\n  overflow-y: hidden;\r\n  border-left: solid 1px #22b173;\r\n  border-right: solid 1px #22b173;\r\n  border-bottom: solid 1px #22b173;\n}\n.pricing-content-holder .cost[data-v-700a9b0e]{\r\n  width: 100%;\r\n  float: left;\r\n  min-height: 150px;\r\n  text-align: right;\r\n  color: #fff;\r\n  overflow-y: hidden;\n}\n.pricing-content-holder .center[data-v-700a9b0e]{\r\n  height: 250px;\n}\n.cost .top[data-v-700a9b0e]{\r\n  width: 100%;\r\n  float: left;\r\n  text-align: center;\n}\n.cost .bottom-pricing[data-v-700a9b0e] {\r\n  width: 100%;\r\n  float: left;\r\n  text-align: center;\r\n  font-size: 18px;\r\n  line-height: 40px;\r\n  height: 40px;\n}\n.cost .top .value[data-v-700a9b0e]{\r\n  font-size: 80px;\r\n  font-weight: 600;\r\n  float: left;\r\n  width: 100%;\n}\n.cost .top .details[data-v-700a9b0e]{\r\n  font-weight: 600;\r\n  font-size: 16px;\r\n  width: 100%;\n}\n.pricing-content-holder .other-details[data-v-700a9b0e]{\r\n  width: 100%;\r\n  float: left;\r\n  background: #22b173;\n}\n.other-details .item[data-v-700a9b0e]{\r\n  width: 100%;\r\n  float: left;\r\n  text-align: center;\r\n  font-size: 20px;\r\n  text-transform: uppercase;\r\n  color: #fff;\r\n  line-height: 50px;\r\n  height: 50px;\n}\n.pricing-content-holder .lead[data-v-700a9b0e]{\r\n  width: 100%;\r\n  float: left;\r\n  min-height: 50px;\r\n  overflow-y: hidden;\n}\n.pricing-content-holder .lead .coupons[data-v-700a9b0e]{\r\n  float: left;\r\n  width: 80%;\r\n  height: 50px;\r\n  margin-left: 10%;\r\n  margin-right: 10%;\r\n  margin-bottom: 10px;\n}\n.pricing-content-holder .lead .coupon-message[data-v-700a9b0e]{\r\n  width: 100%;\r\n  float: left;\r\n  text-align: center;\r\n  margin-top: 10px;\r\n  padding-bottom: 10px;\n}\n.lead .coupons input[data-v-700a9b0e]{\r\n  width: 70% !important;\r\n  float: left;\r\n  height: 50px !important;\n}\n.lead .coupons .button-holder[data-v-700a9b0e]{\r\n  width: 30% !important;\r\n  float: left;\n}\n.lead .coupons .button-holder button[data-v-700a9b0e]{\r\n  height: 50px !important;\r\n  width: 90% !important;\n}\n.pricing-content-holder .lead .text[data-v-700a9b0e]{\r\n  width: 100%;\r\n  float: left;\r\n  font-size: 14px;\r\n  line-height: 50px;\r\n  padding-left: 10%;\r\n  border-bottom: solid 1px #ddd;\r\n  font-weight: 400;\n}\n.pricing-content-holder .lead .btn-whole[data-v-700a9b0e]{\r\n  width: 80%;\r\n  text-align: center;\r\n  float: left;\r\n  margin: 25px 10% 10px 10%;\r\n  height: 50px !important;\n}\n.bg-green[data-v-700a9b0e]{\r\n  background: #22b173;\n}\n.form-control-plan[data-v-700a9b0e]{\r\n  width: 80% !important;\r\n  margin-left: 10% !important;\r\n  margin-right: 10% !important;\r\n  height: 50px !important;\r\n  margin-top: 20px;\n}\n@media (max-width: 992px){\n.pricing-item[data-v-700a9b0e]{\r\n    width: 90%;\r\n    margin-left: 5%;\r\n    margin-right: 5%;\r\n    margin-bottom: 0px;\n}\n}\r\n"],sourceRoot:""}])},868:function(t,e,n){e=t.exports=n(300)(),e.push([t.i,".template-holder[data-v-ae63212e]{width:98%;float:left;margin-bottom:100px;margin-right:2%}.template-list[data-v-ae63212e]{width:100%;float:left;margin-top:25px}","",{version:3,sources:["C:/xampp/htdocs/projectabc/src/modules/plan/History.vue"],names:[],mappings:"AACA,kCACE,UAAW,AACX,WAAY,AACZ,oBAAqB,AACrB,eAAiB,CAClB,AACD,gCACE,WAAY,AACZ,WAAY,AACZ,eAAiB,CAClB",file:"History.vue",sourcesContent:["\n.template-holder[data-v-ae63212e]{\r\n  width: 98%;\r\n  float: left;\r\n  margin-bottom: 100px;\r\n  margin-right: 2%;\n}\n.template-list[data-v-ae63212e]{\r\n  width: 100%;\r\n  float: left;\r\n  margin-top: 25px;\n}\r\n"],sourceRoot:""}])},873:function(t,e,n){e=t.exports=n(300)(),e.push([t.i,".template-holder[data-v-cd889fb8]{width:98%;float:left;margin-right:2%}.template-list[data-v-cd889fb8]{width:100%;float:left;margin-top:25px}","",{version:3,sources:["C:/xampp/htdocs/projectabc/src/modules/plan/Plan.vue"],names:[],mappings:"AACA,kCACE,UAAW,AACX,WAAY,AACZ,eAAiB,CAClB,AACD,gCACE,WAAY,AACZ,WAAY,AACZ,eAAiB,CAClB",file:"Plan.vue",sourcesContent:["\n.template-holder[data-v-cd889fb8]{\r\n  width: 98%;\r\n  float: left;\r\n  margin-right: 2%;\n}\n.template-list[data-v-cd889fb8]{\r\n  width: 100%;\r\n  float: left;\r\n  margin-top: 25px;\n}\r\n"],sourceRoot:""}])},938:function(t,e,n){var r=n(856);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(301)("6f71c3e7",r,!0)},950:function(t,e,n){var r=n(868);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(301)("d4622d9e",r,!0)},955:function(t,e,n){var r=n(873);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(301)("40c07555",r,!0)},994:function(t,e,n){n(950);var r=n(113)(n(786),n(1069),"data-v-ae63212e",null);t.exports=r.exports},995:function(t,e,n){n(938);var r=n(113)(n(787),n(1057),"data-v-700a9b0e",null);t.exports=r.exports}});
//# sourceMappingURL=19.97e852bb40c1bd09fe29.js.map