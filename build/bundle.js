var app=function(e){"use strict";function t(){}function n(e){return e()}function r(){return Object.create(null)}function o(e){e.forEach(n)}function s(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function a(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function u(e,t){e.appendChild(t)}function l(e,t,n){e.insertBefore(t,n||null)}function c(e){e.parentNode.removeChild(e)}function f(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function d(e){return document.createElement(e)}function p(e){return document.createTextNode(e)}function h(){return p(" ")}function m(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function g(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function b(e,t){e.value=null==t?"":t}function v(e,t){for(let n=0;n<e.options.length;n+=1){const r=e.options[n];if(r.__value===t)return void(r.selected=!0)}e.selectedIndex=-1}function y(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}let x;function w(e){x=e}const E=[],R=[],T=[],k=[],_=Promise.resolve();let O=!1;function S(e){T.push(e)}const A=new Set;let $=0;function C(){const e=x;do{for(;$<E.length;){const e=E[$];$++,w(e),j(e.$$)}for(w(null),E.length=0,$=0;R.length;)R.pop()();for(let e=0;e<T.length;e+=1){const t=T[e];A.has(t)||(A.add(t),t())}T.length=0}while(E.length);for(;k.length;)k.pop()();O=!1,A.clear(),w(e)}function j(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(S)}}const I=new Set;function B(e,t){e&&e.i&&(I.delete(e),e.i(t))}function N(e,t,n,r){if(e&&e.o){if(I.has(e))return;I.add(e),undefined.c.push((()=>{I.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}else r&&r()}function P(e){e&&e.c()}function D(e,t,r,i){const{fragment:a,on_mount:u,on_destroy:l,after_update:c}=e.$$;a&&a.m(t,r),i||S((()=>{const t=u.map(n).filter(s);l?l.push(...t):o(t),e.$$.on_mount=[]})),c.forEach(S)}function U(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function L(e,t){-1===e.$$.dirty[0]&&(E.push(e),O||(O=!0,_.then(C)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function F(e,n,s,i,a,u,l,f=[-1]){const d=x;w(e);const p=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:r(),dirty:f,skip_bound:!1,root:n.target||d.$$.root};l&&l(p.root);let h=!1;if(p.ctx=s?s(e,n.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&a(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),h&&L(e,t)),n})):[],p.update(),h=!0,o(p.before_update),p.fragment=!!i&&i(p.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);p.fragment&&p.fragment.l(e),e.forEach(c)}else p.fragment&&p.fragment.c();n.intro&&B(e.$$.fragment),D(e,n.target,n.anchor,n.customElement),C()}w(d)}class q{$destroy(){U(this,1),this.$destroy=t}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const M=[];function z(e,n=t){let r;const o=new Set;function s(t){if(i(e,t)&&(e=t,r)){const t=!M.length;for(const t of o)t[1](),M.push(t,e);if(t){for(let e=0;e<M.length;e+=2)M[e][0](M[e+1]);M.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(i,a=t){const u=[i,a];return o.add(u),1===o.size&&(r=n(s)||t),i(e),()=>{o.delete(u),0===o.size&&(r(),r=null)}}}}let V=z(!1),W=z(0),J=z({result:[],errors:[],ast:""}),H=z(""),K=z(!0);var X,Q=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}},Z=Object.prototype.toString,G=(X=Object.create(null),function(e){var t=Z.call(e);return X[t]||(X[t]=t.slice(8,-1).toLowerCase())});function Y(e){return e=e.toLowerCase(),function(t){return G(t)===e}}function ee(e){return Array.isArray(e)}function te(e){return void 0===e}var ne=Y("ArrayBuffer");function re(e){return null!==e&&"object"==typeof e}function oe(e){if("object"!==G(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var se=Y("Date"),ie=Y("File"),ae=Y("Blob"),ue=Y("FileList");function le(e){return"[object Function]"===Z.call(e)}var ce=Y("URLSearchParams");function fe(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),ee(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var de,pe=(de="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return de&&e instanceof de}),he={isArray:ee,isArrayBuffer:ne,isBuffer:function(e){return null!==e&&!te(e)&&null!==e.constructor&&!te(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||Z.call(e)===t||le(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&ne(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:re,isPlainObject:oe,isUndefined:te,isDate:se,isFile:ie,isBlob:ae,isFunction:le,isStream:function(e){return re(e)&&le(e.pipe)},isURLSearchParams:ce,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:fe,merge:function e(){var t={};function n(n,r){oe(t[r])&&oe(n)?t[r]=e(t[r],n):oe(n)?t[r]=e({},n):ee(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)fe(arguments[r],n);return t},extend:function(e,t,n){return fe(t,(function(t,r){e[r]=n&&"function"==typeof t?Q(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,n,r){e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)},toFlatObject:function(e,t,n){var r,o,s,i={};t=t||{};do{for(o=(r=Object.getOwnPropertyNames(e)).length;o-- >0;)i[s=r[o]]||(t[s]=e[s],i[s]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:G,kindOfTest:Y,endsWith:function(e,t,n){e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;var r=e.indexOf(t,n);return-1!==r&&r===n},toArray:function(e){if(!e)return null;var t=e.length;if(te(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n},isTypedArray:pe,isFileList:ue};function me(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var ge=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(he.isURLSearchParams(t))r=t.toString();else{var o=[];he.forEach(t,(function(e,t){null!=e&&(he.isArray(e)?t+="[]":e=[e],he.forEach(e,(function(e){he.isDate(e)?e=e.toISOString():he.isObject(e)&&(e=JSON.stringify(e)),o.push(me(t)+"="+me(e))})))})),r=o.join("&")}if(r){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e};function be(){this.handlers=[]}be.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},be.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},be.prototype.forEach=function(e){he.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var ve=be,ye=function(e,t){he.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))};function xe(e,t,n,r,o){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}he.inherits(xe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var we=xe.prototype,Ee={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){Ee[e]={value:e}})),Object.defineProperties(xe,Ee),Object.defineProperty(we,"isAxiosError",{value:!0}),xe.from=function(e,t,n,r,o,s){var i=Object.create(we);return he.toFlatObject(e,i,(function(e){return e!==Error.prototype})),xe.call(i,e.message,t,n,r,o),i.name=e.name,s&&Object.assign(i,s),i};var Re=xe,Te={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var ke=function(e,t){t=t||new FormData;var n=[];function r(e){return null===e?"":he.isDate(e)?e.toISOString():he.isArrayBuffer(e)||he.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}return function e(o,s){if(he.isPlainObject(o)||he.isArray(o)){if(-1!==n.indexOf(o))throw Error("Circular reference detected in "+s);n.push(o),he.forEach(o,(function(n,o){if(!he.isUndefined(n)){var i,a=s?s+"."+o:o;if(n&&!s&&"object"==typeof n)if(he.endsWith(o,"{}"))n=JSON.stringify(n);else if(he.endsWith(o,"[]")&&(i=he.toArray(n)))return void i.forEach((function(e){!he.isUndefined(e)&&t.append(a,r(e))}));e(n,a)}})),n.pop()}else t.append(s,r(o))}(e),t},_e=he.isStandardBrowserEnv()?{write:function(e,t,n,r,o,s){var i=[];i.push(e+"="+encodeURIComponent(t)),he.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),he.isString(r)&&i.push("path="+r),he.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},Oe=function(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t},Se=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Ae=he.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=he.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0};function $e(e){Re.call(this,null==e?"canceled":e,Re.ERR_CANCELED),this.name="CanceledError"}he.inherits($e,Re,{__CANCEL__:!0});var Ce=$e,je=function(e){return new Promise((function(t,n){var r,o=e.data,s=e.headers,i=e.responseType;function a(){e.cancelToken&&e.cancelToken.unsubscribe(r),e.signal&&e.signal.removeEventListener("abort",r)}he.isFormData(o)&&he.isStandardBrowserEnv()&&delete s["Content-Type"];var u=new XMLHttpRequest;if(e.auth){var l=e.auth.username||"",c=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.Authorization="Basic "+btoa(l+":"+c)}var f=Oe(e.baseURL,e.url);function d(){if(u){var r,o,s,l,c,f="getAllResponseHeaders"in u?(r=u.getAllResponseHeaders(),c={},r?(he.forEach(r.split("\n"),(function(e){if(l=e.indexOf(":"),o=he.trim(e.substr(0,l)).toLowerCase(),s=he.trim(e.substr(l+1)),o){if(c[o]&&Se.indexOf(o)>=0)return;c[o]="set-cookie"===o?(c[o]?c[o]:[]).concat([s]):c[o]?c[o]+", "+s:s}})),c):c):null;!function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new Re("Request failed with status code "+n.status,[Re.ERR_BAD_REQUEST,Re.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),a()}),(function(e){n(e),a()}),{data:i&&"text"!==i&&"json"!==i?u.response:u.responseText,status:u.status,statusText:u.statusText,headers:f,config:e,request:u}),u=null}}if(u.open(e.method.toUpperCase(),ge(f,e.params,e.paramsSerializer),!0),u.timeout=e.timeout,"onloadend"in u?u.onloadend=d:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(d)},u.onabort=function(){u&&(n(new Re("Request aborted",Re.ECONNABORTED,e,u)),u=null)},u.onerror=function(){n(new Re("Network Error",Re.ERR_NETWORK,e,u,u)),u=null},u.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||Te;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new Re(t,r.clarifyTimeoutError?Re.ETIMEDOUT:Re.ECONNABORTED,e,u)),u=null},he.isStandardBrowserEnv()){var p=(e.withCredentials||Ae(f))&&e.xsrfCookieName?_e.read(e.xsrfCookieName):void 0;p&&(s[e.xsrfHeaderName]=p)}"setRequestHeader"in u&&he.forEach(s,(function(e,t){void 0===o&&"content-type"===t.toLowerCase()?delete s[t]:u.setRequestHeader(t,e)})),he.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),i&&"json"!==i&&(u.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&u.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(r=function(e){u&&(n(!e||e&&e.type?new Ce:e),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(r),e.signal&&(e.signal.aborted?r():e.signal.addEventListener("abort",r))),o||(o=null);var h,m=(h=/^([-+\w]{1,25})(:?\/\/|:)/.exec(f))&&h[1]||"";m&&-1===["http","https","file"].indexOf(m)?n(new Re("Unsupported protocol "+m+":",Re.ERR_BAD_REQUEST,e)):u.send(o)}))},Ie={"Content-Type":"application/x-www-form-urlencoded"};function Be(e,t){!he.isUndefined(e)&&he.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var Ne,Pe={transitional:Te,adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(Ne=je),Ne),transformRequest:[function(e,t){if(ye(t,"Accept"),ye(t,"Content-Type"),he.isFormData(e)||he.isArrayBuffer(e)||he.isBuffer(e)||he.isStream(e)||he.isFile(e)||he.isBlob(e))return e;if(he.isArrayBufferView(e))return e.buffer;if(he.isURLSearchParams(e))return Be(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var n,r=he.isObject(e),o=t&&t["Content-Type"];if((n=he.isFileList(e))||r&&"multipart/form-data"===o){var s=this.env&&this.env.FormData;return ke(n?{"files[]":e}:e,s&&new s)}return r||"application/json"===o?(Be(t,"application/json"),function(e,t,n){if(he.isString(e))try{return(t||JSON.parse)(e),he.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||Pe.transitional,n=t&&t.silentJSONParsing,r=t&&t.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||r&&he.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(o){if("SyntaxError"===e.name)throw Re.from(e,Re.ERR_BAD_RESPONSE,this,null,this.response);throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:null},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};he.forEach(["delete","get","head"],(function(e){Pe.headers[e]={}})),he.forEach(["post","put","patch"],(function(e){Pe.headers[e]=he.merge(Ie)}));var De=Pe,Ue=function(e,t,n){var r=this||De;return he.forEach(n,(function(n){e=n.call(r,e,t)})),e},Le=function(e){return!(!e||!e.__CANCEL__)};function Fe(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ce}var qe=function(e){return Fe(e),e.headers=e.headers||{},e.data=Ue.call(e,e.data,e.headers,e.transformRequest),e.headers=he.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),he.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||De.adapter)(e).then((function(t){return Fe(e),t.data=Ue.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return Le(t)||(Fe(e),t&&t.response&&(t.response.data=Ue.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},Me=function(e,t){t=t||{};var n={};function r(e,t){return he.isPlainObject(e)&&he.isPlainObject(t)?he.merge(e,t):he.isPlainObject(t)?he.merge({},t):he.isArray(t)?t.slice():t}function o(n){return he.isUndefined(t[n])?he.isUndefined(e[n])?void 0:r(void 0,e[n]):r(e[n],t[n])}function s(e){if(!he.isUndefined(t[e]))return r(void 0,t[e])}function i(n){return he.isUndefined(t[n])?he.isUndefined(e[n])?void 0:r(void 0,e[n]):r(void 0,t[n])}function a(n){return n in t?r(e[n],t[n]):n in e?r(void 0,e[n]):void 0}var u={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a};return he.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=u[e]||o,r=t(e);he.isUndefined(r)&&t!==a||(n[e]=r)})),n},ze="0.27.2",Ve=ze,We={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){We[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var Je={};We.transitional=function(e,t,n){function r(e,t){return"[Axios v"+Ve+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,o,s){if(!1===e)throw new Re(r(o," has been removed"+(t?" in "+t:"")),Re.ERR_DEPRECATED);return t&&!Je[o]&&(Je[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,s)}};var He={assertOptions:function(e,t,n){if("object"!=typeof e)throw new Re("options must be an object",Re.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(e),o=r.length;o-- >0;){var s=r[o],i=t[s];if(i){var a=e[s],u=void 0===a||i(a,s,e);if(!0!==u)throw new Re("option "+s+" must be "+u,Re.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new Re("Unknown option "+s,Re.ERR_BAD_OPTION)}},validators:We},Ke=He.validators;function Xe(e){this.defaults=e,this.interceptors={request:new ve,response:new ve}}Xe.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=Me(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&He.assertOptions(n,{silentJSONParsing:Ke.transitional(Ke.boolean),forcedJSONParsing:Ke.transitional(Ke.boolean),clarifyTimeoutError:Ke.transitional(Ke.boolean)},!1);var r=[],o=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var s,i=[];if(this.interceptors.response.forEach((function(e){i.push(e.fulfilled,e.rejected)})),!o){var a=[qe,void 0];for(Array.prototype.unshift.apply(a,r),a=a.concat(i),s=Promise.resolve(t);a.length;)s=s.then(a.shift(),a.shift());return s}for(var u=t;r.length;){var l=r.shift(),c=r.shift();try{u=l(u)}catch(e){c(e);break}}try{s=qe(u)}catch(e){return Promise.reject(e)}for(;i.length;)s=s.then(i.shift(),i.shift());return s},Xe.prototype.getUri=function(e){e=Me(this.defaults,e);var t=Oe(e.baseURL,e.url);return ge(t,e.params,e.paramsSerializer)},he.forEach(["delete","get","head","options"],(function(e){Xe.prototype[e]=function(t,n){return this.request(Me(n||{},{method:e,url:t,data:(n||{}).data}))}})),he.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Me(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Xe.prototype[e]=t(),Xe.prototype[e+"Form"]=t(!0)}));var Qe=Xe;function Ze(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new Ce(e),t(n.reason))}))}Ze.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},Ze.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},Ze.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},Ze.source=function(){var e;return{token:new Ze((function(t){e=t})),cancel:e}};var Ge=Ze;var Ye=function e(t){var n=new Qe(t),r=Q(Qe.prototype.request,n);return he.extend(r,Qe.prototype,n),he.extend(r,n),r.create=function(n){return e(Me(t,n))},r}(De);Ye.Axios=Qe,Ye.CanceledError=Ce,Ye.CancelToken=Ge,Ye.isCancel=Le,Ye.VERSION=ze,Ye.toFormData=ke,Ye.AxiosError=Re,Ye.Cancel=Ye.CanceledError,Ye.all=function(e){return Promise.all(e)},Ye.spread=function(e){return function(t){return e.apply(null,t)}},Ye.isAxiosError=function(e){return he.isObject(e)&&!0===e.isAxiosError};var et=Ye,tt=Ye;et.default=tt;var nt=et;function rt(e,t,n){const r=e.slice();return r[12]=t[n],r}function ot(e,t,n){const r=e.slice();return r[12]=t[n],r}function st(e){let n,r,o=e[12].name+"";return{c(){n=d("option"),r=p(o),n.__value=e[12],n.value=n.__value,g(n,"class","dark:bg-sidebar bg-sidebar-light")},m(e,t){l(e,n,t),u(n,r)},p:t,d(e){e&&c(n)}}}function it(e){let t,n=e[12].examples,r=[];for(let t=0;t<n.length;t+=1)r[t]=st(ot(e,n,t));return{c(){t=d("optgroup");for(let e=0;e<r.length;e+=1)r[e].c();g(t,"label",e[12].name),g(t,"class","dark:bg-sidebar bg-sidebar-light")},m(e,n){l(e,t,n);for(let e=0;e<r.length;e+=1)r[e].m(t,null)},p(e,o){if(0&o){let s;for(n=e[12].examples,s=0;s<n.length;s+=1){const i=ot(e,n,s);r[s]?r[s].p(i,o):(r[s]=st(i),r[s].c(),r[s].m(t,null))}for(;s<r.length;s+=1)r[s].d(1);r.length=n.length}},d(e){e&&c(t),f(r,e)}}}function at(e){let n,r,s,i,a,b,y,x,w,E,R,T,k,_,O,A,$,C,j,I=Rt,B=[];for(let t=0;t<I.length;t+=1)B[t]=it(rt(e,I,t));return{c(){n=d("div"),r=d("p"),s=p("Run"),i=h(),a=d("p"),a.textContent="Share",b=h(),y=d("p"),y.textContent="Docs",x=h(),w=d("select"),E=d("option"),E.textContent="Examples";for(let e=0;e<B.length;e+=1)B[e].c();R=h(),T=d("select"),k=d("option"),k.textContent="...",_=d("optgroup"),O=d("option"),O.textContent="Show AST (Available after run)",A=d("optgroup"),$=d("option"),$.textContent="Toggle Sidebar (output)",g(r,"class","cursor-pointer inline pl-3 dark:text-white text-black"),g(r,"disabled",e[0]),g(a,"class","cursor-pointer inline pl-3 dark:text-white text-black"),g(y,"class","cursor-pointer inline pl-3 dark:text-white text-black"),E.__value="examples",E.value=E.__value,E.disabled=!0,g(E,"class","dark:bg-sidebar bg-sidebar-light"),g(w,"class","pb-2.5 pl-3 inline border-none bg-transparent outline-none appearance-none cursor-pointer w-24"),void 0===e[1]&&S((()=>e[8].call(w))),k.__value="subMenu",k.value=k.__value,k.disabled=!0,g(k,"class","dark:bg-sidebar bg-sidebar-light"),O.__value="ast",O.value=O.__value,g(O,"class","dark:bg-sidebar bg-sidebar-light"),g(_,"label","Run"),g(_,"class","dark:bg-sidebar bg-sidebar-light"),$.__value="sidebar",$.value=$.__value,g($,"class","dark:bg-sidebar bg-sidebar-light"),g(A,"label","Output"),g(A,"class","dark:bg-sidebar bg-sidebar-light"),g(T,"class","inline border-none bg-transparent outline-none appearance-none cursor-pointer w-12"),void 0===e[2]&&S((()=>e[9].call(T))),g(n,"class","top-0 h-8 dark:bg-header bg-header-light dark:text-white text-black pl-1.5 pt-1")},m(t,o){l(t,n,o),u(n,r),u(r,s),u(n,i),u(n,a),u(n,b),u(n,y),u(n,x),u(n,w),u(w,E);for(let e=0;e<B.length;e+=1)B[e].m(w,null);v(w,e[1]),u(n,R),u(n,T),u(T,k),u(T,_),u(_,O),u(T,A),u(A,$),v(T,e[2]),C||(j=[m(r,"click",e[3]),m(a,"click",e[6]),m(y,"click",e[7]),m(w,"change",e[8]),m(w,"change",e[4]),m(T,"change",e[9]),m(T,"change",e[5])],C=!0)},p(e,[t]){if(1&t&&g(r,"disabled",e[0]),0&t){let n;for(I=Rt,n=0;n<I.length;n+=1){const r=rt(e,I,n);B[n]?B[n].p(r,t):(B[n]=it(r),B[n].c(),B[n].m(w,null))}for(;n<B.length;n+=1)B[n].d(1);B.length=I.length}2&t&&v(w,e[1]),4&t&&v(T,e[2])},i:t,o:t,d(e){e&&c(n),f(B,e),C=!1,o(j)}}}function ut(t,n,r){let o,s;a(t,K,(e=>r(10,o=e))),a(t,J,(e=>r(11,s=e)));let i=!1;V.subscribe((e=>r(0,i=!e)));let u;let l;return[i,u,l,()=>{i?(V.update((()=>!0)),W.update((()=>0)),nt.get(`https://sesan-lang.vercel.app/eval/${encodeURIComponent(e.editor.getValue())}`).then((e=>{console.log(e.data),J.update((()=>e.data)),document.title=e.data.title??"Sesan Playground"})).catch((e=>J.update((()=>({result:[],errors:[`[Evaluating] ${e}, Check if the code is an infinite loop.`],ast:""}))))).finally((()=>V.update((()=>!1))))):J.update((()=>({result:[],errors:["Evaluating..."],ast:""}))),K.update((()=>!0))},()=>{"string"!=typeof u&&(nt.get(`https://raw.githubusercontent.com/ky0422/sesan/main/examples/${u.source}`).then((t=>e.editor.setValue(t.data))),r(1,u="examples"))},()=>{switch(l){case"ast":{const e=JSON.stringify(s.ast,null,2);H.update((()=>'""'===e?"":e));break}case"sidebar":K.update((()=>!o))}r(2,l="subMenu")},()=>navigator.clipboard.writeText("https://ky0422.github.io/sesan/"+(window.location.href=`#${encodeURIComponent(e.editor.getValue())}`)),()=>window.open("https://github.com/ky0422/sesan#documentation"),function(){u=y(this),r(1,u)},function(){l=y(this),r(2,l)}]}class lt extends q{constructor(e){super(),F(this,e,ut,at,i,{})}}function ct(e){let n,r,o;return{c(){n=d("div"),r=d("div"),g(r,"class","w-full h-full dark:bg-background bg-background-light"),g(r,"id","editor"),g(n,"class",o="w-full "+(e[0]?"h-3/4 md:w-3/4":"h-full")+" md:h-full float-left dark:bg-background bg-background-light")},m(e,t){l(e,n,t),u(n,r)},p(e,[t]){1&t&&o!==(o="w-full "+(e[0]?"h-3/4 md:w-3/4":"h-full")+" md:h-full float-left dark:bg-background bg-background-light")&&g(n,"class",o)},i:t,o:t,d(e){e&&c(n)}}}function ft(e,t,n){let r=!1;return K.subscribe((e=>n(0,r=e))),[r]}class dt extends q{constructor(e){super(),F(this,e,ft,ct,i,{})}}function pt(e){let n,r,o,s,i;return{c(){n=d("div"),r=d("textarea"),g(r,"class","h-1/4 w-full border-none dark:bg-background bg-background-light dark:disabled:text-white disabled:text-black resize-none outline-none break-words whitespace-pre overflow-x-scroll p-4 md:h-full"),r.disabled=!0,g(n,"class",o=e[1]?"w-full h-full float-none md:w-1/4 md:float-right dark:bg-background bg-background-light":"")},m(t,o){l(t,n,o),u(n,r),b(r,e[0]),s||(i=m(r,"input",e[2]),s=!0)},p(e,[t]){1&t&&b(r,e[0]),2&t&&o!==(o=e[1]?"w-full h-full float-none md:w-1/4 md:float-right dark:bg-background bg-background-light":"")&&g(n,"class",o)},i:t,o:t,d(e){e&&c(n),s=!1,i()}}}function ht(e,t,n){let r;J.subscribe((e=>{e.errors.length>0?(W.update((()=>e.errors.length)),n(0,r=e.errors.join("\n"))):n(0,r=e.result.join(""))})),H.subscribe((e=>n(0,r=e)));let o=!1;return K.subscribe((e=>n(1,o=e))),[r,o,function(){r=this.value,n(0,r)}]}class mt extends q{constructor(e){super(),F(this,e,ht,pt,i,{})}}function gt(e){let n;return{c(){n=d("p"),n.textContent="Evaluating...",g(n,"class","pl-3 inline text-center float-left cursor-pointer")},m(e,t){l(e,n,t)},p:t,d(e){e&&c(n)}}}function bt(e){let t,n,r,o=e[1]>0&&vt(e);return{c(){t=d("p"),t.textContent="Ready",n=h(),o&&o.c(),r=p(""),g(t,"class","pl-3 inline text-center float-left cursor-pointer")},m(e,s){l(e,t,s),l(e,n,s),o&&o.m(e,s),l(e,r,s)},p(e,t){e[1]>0?o?o.p(e,t):(o=vt(e),o.c(),o.m(r.parentNode,r)):o&&(o.d(1),o=null)},d(e){e&&c(t),e&&c(n),o&&o.d(e),e&&c(r)}}}function vt(e){let t,n,r;return{c(){t=d("p"),n=p(e[1]),r=p(" errors"),g(t,"class","pl-3 text-red-400 inline float-left cursor-pointer")},m(e,o){l(e,t,o),u(t,n),u(t,r)},p(e,t){2&t&&function(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}(n,e[1])},d(e){e&&c(t)}}}function yt(e){let n,r,o,s,i;function a(e,t){return e[0]?gt:bt}let f=a(e),p=f(e);return{c(){n=d("div"),r=d("p"),r.textContent="Github",o=h(),p.c(),g(r,"class","bg-emerald-600 hover:bg-emerald-500 w-20 pb-2.5 inline text-center float-left cursor-pointer"),g(n,"class","clear-both fixed bottom-0 w-full h-[1.4rem] bg-footer")},m(t,a){l(t,n,a),u(n,r),u(n,o),p.m(n,null),s||(i=m(r,"click",e[2]),s=!0)},p(e,[t]){f===(f=a(e))&&p?p.p(e,t):(p.d(1),p=f(e),p&&(p.c(),p.m(n,null)))},i:t,o:t,d(e){e&&c(n),p.d(),s=!1,i()}}}function xt(e,t,n){let[r,o]=[!1,0];V.subscribe((e=>n(0,r=e))),W.subscribe((e=>n(1,o=e)));return[r,o,()=>window.open("https://github.com/ky0422/sesan")]}class wt extends q{constructor(e){super(),F(this,e,xt,yt,i,{})}}function Et(e){let n,r,o,s,i,a,f,p,m;return r=new lt({}),s=new dt({}),a=new mt({}),p=new wt({}),{c(){n=d("div"),P(r.$$.fragment),o=h(),P(s.$$.fragment),i=h(),P(a.$$.fragment),f=h(),P(p.$$.fragment),g(n,"class","absolute w-full h-full pb-12")},m(e,t){l(e,n,t),D(r,n,null),u(n,o),D(s,n,null),u(n,i),D(a,n,null),u(n,f),D(p,n,null),m=!0},p:t,i(e){m||(B(r.$$.fragment,e),B(s.$$.fragment,e),B(a.$$.fragment,e),B(p.$$.fragment,e),m=!0)},o(e){N(r.$$.fragment,e),N(s.$$.fragment,e),N(a.$$.fragment,e),N(p.$$.fragment,e),m=!1},d(e){e&&c(n),U(r),U(s),U(a),U(p)}}}require.config({paths:{vs:"https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs"}}),e.editor=null,window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(t=>e.editor.updateOptions({theme:t.matches?"sesanTheme":"sesanTheme-light"}))),require(["vs/editor/editor.main"],(()=>{const t=["let","func","true","false","if","else","return","while","in","typeof","null","throw","delete","use","void","expr"];monaco.languages.register({id:"sesan"}),monaco.languages.setLanguageConfiguration("sesan",{autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],brackets:[["{","}"],["[","]"],["(",")"]],comments:{lineComment:"//"}}),monaco.languages.setMonarchTokensProvider("sesan",{keywords:t,stds:["print","println","push","pop","shift","unshift","slice","join","forEach","repeat","reduce","map","funcTools","length","match","ternary","subString","replace","split","concat","regex"],builtins:["import","eval","js","convert","options","regExp","this","to_s","to_n","to_b","to_a","__root","__pos","__filename"],tokenizer:{root:[[/\/\/.*$/,"comment"],[/@[^\}]*(}|;)/,"decorator"],[/[{}()\[\]]/,"bracket"],[/@?[a-zA-Z_][\w$]*/,{cases:{"@keywords":"keyword","@stds":"function","@builtins":"builtin","@default":"identifier"}}],[/[a-zA-Z_][a-zA-Z0-9_]*\(/,"function"],[/'[^']*'/,"string"],[/"[^"]*"/,"string"],[/\d+/,"number"],[/[<>](?!@)/,"delimiter"],[/@?[=!+\-*%&|^~/]/,"delimiter"],[/[?:;.,]/,"delimiter"],[/\s+/,"white"]]}}),monaco.editor.defineTheme("sesanTheme",{base:"vs-dark",inherit:!0,rules:[{token:"identifier",foreground:"#BBBBBB"},{token:"decorator",foreground:"#b366ff"},{token:"delimiter",foreground:"#BBBBBB"},{token:"bracket",foreground:"#BBBBBB"},{token:"function",foreground:"#dcdc90"},{token:"builtin",foreground:"#f75278"}]}),monaco.editor.defineTheme("sesanTheme-light",{base:"vs",inherit:!0,rules:[{token:"identifier",foreground:"#1c1c1c"},{token:"decorator",foreground:"#7c2fd4"},{token:"delimiter",foreground:"#1c1c1c"},{token:"bracket",foreground:"#1c1c1c"},{token:"function",foreground:"#94a31f"},{token:"builtin",foreground:"#b82144"}]}),monaco.languages.registerCompletionItemProvider("sesan",{provideCompletionItems:()=>({suggestions:[...t.map((e=>({label:e,kind:monaco.languages.CompletionItemKind.Keyword,insertText:e}))),{label:"let",insertTextRules:monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,insertText:"let ${1:name} = ${2:literal}"},{label:"func",insertTextRules:monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,insertText:"func ${1:name}(${2:params}) {\n\t${3:body}\n}"},{label:"if",insertTextRules:monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,insertText:"if (${1:condition}) {\n\t${2:body}\n}"},{label:"else",insertTextRules:monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,insertText:"else {\n\t${1:body}\n}"},{label:"return",insertTextRules:monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,insertText:"return ${1:expression}"},{label:"while",insertTextRules:monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,insertText:"while (${1:condition}) {\n\t${2:body}\n}"},{label:"in",insertTextRules:monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,insertText:"in"},{label:"typeof",insertTextRules:monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,insertText:"typeof ${1:expression}"},{label:"throw",insertTextRules:monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,insertText:"throw '${1:message}'"},{label:"delete",insertTextRules:monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,insertText:"delete ${1:env}"},{label:"use",insertTextRules:monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,insertText:"use '${1:path}'"},{label:"void",insertTextRules:monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,insertText:"void ${1:expression}"},{label:"expr",insertTextRules:monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,insertText:"expr ${1:expression}"}]})}),e.editor=monaco.editor.create(document.getElementById("editor"),{value:window.location.hash?decodeURIComponent(window.location.hash.substr(1)):"// Welcome to the Sesan language playground.\n// Try writing some code, try running it.\n// you can run it by clicking the 'Run' button.\n// requests sent to the server only return result values!\n\n// Try it\n// - Share    : you can share your code by url.\n// - Docs     : https://github.com/tsukiroku/sesan/tree/main/docs\n// - Examples : you can find some examples here.\n\n// Enjoy!\n\nlet someVariable = 'Hello, World!';\nprintln(someVariable);\n",language:"sesan",theme:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"sesanTheme":"sesanTheme-light",automaticLayout:!0,fontSize:17,fontFamily:"Fira Code",fontLigatures:!0})}));const Rt=[{name:"Hello, World!",examples:[{name:"Hello, World!",source:"hello_world.sesan"},{name:"Fibonacci",source:"fibonacci.sesan"},{name:"Simple interpreter",source:"interpreter.sesan"}]},{name:"Variables & Data types",examples:[{name:"Variable",source:"variable.sesan"},{name:"Function",source:"function.sesan"},{name:"Object",source:"object.sesan"}]},{name:"Operators & Decorators",examples:[{name:"Operator",source:"operators.sesan"},{name:"Decorator",source:"decorators.sesan"}]},{name:"Control flow",examples:[{name:"If",source:"if.sesan"},{name:"While",source:"while.sesan"},{name:"Import",source:"import.sesan"},{name:"Expr",source:"expr.sesan"}]},{name:"Standard library",examples:[{name:"IO",source:"/stdlib/io.sesan"},{name:"Array",source:"/stdlib/array.sesan"},{name:"String",source:"/stdlib/string.sesan"},{name:"Utility",source:"/stdlib/util.sesan"}]}],Tt=new class extends q{constructor(e){super(),F(this,e,null,Et,i,{})}}({target:document.body});return e.default=Tt,e.examples=Rt,Object.defineProperty(e,"__esModule",{value:!0}),e}({});
