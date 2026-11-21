(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function uy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var kg={exports:{}},xu={},zg={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xa=Symbol.for("react.element"),cy=Symbol.for("react.portal"),fy=Symbol.for("react.fragment"),dy=Symbol.for("react.strict_mode"),hy=Symbol.for("react.profiler"),py=Symbol.for("react.provider"),my=Symbol.for("react.context"),gy=Symbol.for("react.forward_ref"),vy=Symbol.for("react.suspense"),_y=Symbol.for("react.memo"),yy=Symbol.for("react.lazy"),Uh=Symbol.iterator;function xy(t){return t===null||typeof t!="object"?null:(t=Uh&&t[Uh]||t["@@iterator"],typeof t=="function"?t:null)}var Bg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hg=Object.assign,Gg={};function ls(t,e,n){this.props=t,this.context=e,this.refs=Gg,this.updater=n||Bg}ls.prototype.isReactComponent={};ls.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ls.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Vg(){}Vg.prototype=ls.prototype;function Sd(t,e,n){this.props=t,this.context=e,this.refs=Gg,this.updater=n||Bg}var Md=Sd.prototype=new Vg;Md.constructor=Sd;Hg(Md,ls.prototype);Md.isPureReactComponent=!0;var Oh=Array.isArray,Wg=Object.prototype.hasOwnProperty,Ed={current:null},Xg={key:!0,ref:!0,__self:!0,__source:!0};function jg(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Wg.call(e,i)&&!Xg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:xa,type:t,key:o,ref:s,props:r,_owner:Ed.current}}function Sy(t,e){return{$$typeof:xa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function wd(t){return typeof t=="object"&&t!==null&&t.$$typeof===xa}function My(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Fh=/\/+/g;function Ku(t,e){return typeof t=="object"&&t!==null&&t.key!=null?My(""+t.key):e.toString(36)}function wl(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case xa:case cy:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+Ku(s,0):i,Oh(r)?(n="",t!=null&&(n=t.replace(Fh,"$&/")+"/"),wl(r,e,n,"",function(u){return u})):r!=null&&(wd(r)&&(r=Sy(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Fh,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",Oh(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+Ku(o,a);s+=wl(o,e,n,l,r)}else if(l=xy(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+Ku(o,a++),s+=wl(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Ca(t,e,n){if(t==null)return t;var i=[],r=0;return wl(t,i,"","",function(o){return e.call(n,o,r++)}),i}function Ey(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var un={current:null},Tl={transition:null},wy={ReactCurrentDispatcher:un,ReactCurrentBatchConfig:Tl,ReactCurrentOwner:Ed};function Yg(){throw Error("act(...) is not supported in production builds of React.")}$e.Children={map:Ca,forEach:function(t,e,n){Ca(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ca(t,function(){e++}),e},toArray:function(t){return Ca(t,function(e){return e})||[]},only:function(t){if(!wd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$e.Component=ls;$e.Fragment=fy;$e.Profiler=hy;$e.PureComponent=Sd;$e.StrictMode=dy;$e.Suspense=vy;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wy;$e.act=Yg;$e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Hg({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Ed.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Wg.call(e,l)&&!Xg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:xa,type:t.type,key:r,ref:o,props:i,_owner:s}};$e.createContext=function(t){return t={$$typeof:my,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:py,_context:t},t.Consumer=t};$e.createElement=jg;$e.createFactory=function(t){var e=jg.bind(null,t);return e.type=t,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:gy,render:t}};$e.isValidElement=wd;$e.lazy=function(t){return{$$typeof:yy,_payload:{_status:-1,_result:t},_init:Ey}};$e.memo=function(t,e){return{$$typeof:_y,type:t,compare:e===void 0?null:e}};$e.startTransition=function(t){var e=Tl.transition;Tl.transition={};try{t()}finally{Tl.transition=e}};$e.unstable_act=Yg;$e.useCallback=function(t,e){return un.current.useCallback(t,e)};$e.useContext=function(t){return un.current.useContext(t)};$e.useDebugValue=function(){};$e.useDeferredValue=function(t){return un.current.useDeferredValue(t)};$e.useEffect=function(t,e){return un.current.useEffect(t,e)};$e.useId=function(){return un.current.useId()};$e.useImperativeHandle=function(t,e,n){return un.current.useImperativeHandle(t,e,n)};$e.useInsertionEffect=function(t,e){return un.current.useInsertionEffect(t,e)};$e.useLayoutEffect=function(t,e){return un.current.useLayoutEffect(t,e)};$e.useMemo=function(t,e){return un.current.useMemo(t,e)};$e.useReducer=function(t,e,n){return un.current.useReducer(t,e,n)};$e.useRef=function(t){return un.current.useRef(t)};$e.useState=function(t){return un.current.useState(t)};$e.useSyncExternalStore=function(t,e,n){return un.current.useSyncExternalStore(t,e,n)};$e.useTransition=function(){return un.current.useTransition()};$e.version="18.3.1";zg.exports=$e;var be=zg.exports;const Ty=uy(be);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ay=be,Ry=Symbol.for("react.element"),by=Symbol.for("react.fragment"),Cy=Object.prototype.hasOwnProperty,Py=Ay.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ly={key:!0,ref:!0,__self:!0,__source:!0};function qg(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)Cy.call(e,i)&&!Ly.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Ry,type:t,key:o,ref:s,props:r,_owner:Py.current}}xu.Fragment=by;xu.jsx=qg;xu.jsxs=qg;kg.exports=xu;var oe=kg.exports,$g={exports:{}},bn={},Kg={exports:{}},Zg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,z){var G=N.length;N.push(z);e:for(;0<G;){var ee=G-1>>>1,ne=N[ee];if(0<r(ne,z))N[ee]=z,N[G]=ne,G=ee;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var z=N[0],G=N.pop();if(G!==z){N[0]=G;e:for(var ee=0,ne=N.length,Y=ne>>>1;ee<Y;){var ie=2*(ee+1)-1,he=N[ie],ye=ie+1,me=N[ye];if(0>r(he,G))ye<ne&&0>r(me,he)?(N[ee]=me,N[ye]=G,ee=ye):(N[ee]=he,N[ie]=G,ee=ie);else if(ye<ne&&0>r(me,G))N[ee]=me,N[ye]=G,ee=ye;else break e}}return z}function r(N,z){var G=N.sortIndex-z.sortIndex;return G!==0?G:N.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,h=null,d=3,p=!1,m=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var z=n(u);z!==null;){if(z.callback===null)i(u);else if(z.startTime<=N)i(u),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(u)}}function _(N){if(y=!1,v(N),!m)if(n(l)!==null)m=!0,j(b);else{var z=n(u);z!==null&&K(_,z.startTime-N)}}function b(N,z){m=!1,y&&(y=!1,f(L),L=-1),p=!0;var G=d;try{for(v(z),h=n(l);h!==null&&(!(h.expirationTime>z)||N&&!O());){var ee=h.callback;if(typeof ee=="function"){h.callback=null,d=h.priorityLevel;var ne=ee(h.expirationTime<=z);z=t.unstable_now(),typeof ne=="function"?h.callback=ne:h===n(l)&&i(l),v(z)}else i(l);h=n(l)}if(h!==null)var Y=!0;else{var ie=n(u);ie!==null&&K(_,ie.startTime-z),Y=!1}return Y}finally{h=null,d=G,p=!1}}var S=!1,T=null,L=-1,M=5,w=-1;function O(){return!(t.unstable_now()-w<M)}function W(){if(T!==null){var N=t.unstable_now();w=N;var z=!0;try{z=T(!0,N)}finally{z?te():(S=!1,T=null)}}else S=!1}var te;if(typeof x=="function")te=function(){x(W)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,V=D.port2;D.port1.onmessage=W,te=function(){V.postMessage(null)}}else te=function(){g(W,0)};function j(N){T=N,S||(S=!0,te())}function K(N,z){L=g(function(){N(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,j(b))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(d){case 1:case 2:case 3:var z=3;break;default:z=d}var G=d;d=z;try{return N()}finally{d=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var G=d;d=N;try{return z()}finally{d=G}},t.unstable_scheduleCallback=function(N,z,G){var ee=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ee+G:ee):G=ee,N){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=G+ne,N={id:c++,callback:z,priorityLevel:N,startTime:G,expirationTime:ne,sortIndex:-1},G>ee?(N.sortIndex=G,e(u,N),n(l)===null&&N===n(u)&&(y?(f(L),L=-1):y=!0,K(_,G-ee))):(N.sortIndex=ne,e(l,N),m||p||(m=!0,j(b))),N},t.unstable_shouldYield=O,t.unstable_wrapCallback=function(N){var z=d;return function(){var G=d;d=z;try{return N.apply(this,arguments)}finally{d=G}}}})(Zg);Kg.exports=Zg;var Dy=Kg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iy=be,Rn=Dy;function de(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jg=new Set,Ks={};function $r(t,e){$o(t,e),$o(t+"Capture",e)}function $o(t,e){for(Ks[t]=e,t=0;t<e.length;t++)Jg.add(e[t])}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ff=Object.prototype.hasOwnProperty,Ny=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kh={},zh={};function Uy(t){return ff.call(zh,t)?!0:ff.call(kh,t)?!1:Ny.test(t)?zh[t]=!0:(kh[t]=!0,!1)}function Oy(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Fy(t,e,n,i){if(e===null||typeof e>"u"||Oy(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function cn(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xt[t]=new cn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xt[e]=new cn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xt[t]=new cn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xt[t]=new cn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xt[t]=new cn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xt[t]=new cn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xt[t]=new cn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xt[t]=new cn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xt[t]=new cn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Td=/[\-:]([a-z])/g;function Ad(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Td,Ad);Xt[e]=new cn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Td,Ad);Xt[e]=new cn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Td,Ad);Xt[e]=new cn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xt[t]=new cn(t,1,!1,t.toLowerCase(),null,!1,!1)});Xt.xlinkHref=new cn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xt[t]=new cn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Rd(t,e,n,i){var r=Xt.hasOwnProperty(e)?Xt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Fy(e,n,r,i)&&(n=null),i||r===null?Uy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ui=Iy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pa=Symbol.for("react.element"),Eo=Symbol.for("react.portal"),wo=Symbol.for("react.fragment"),bd=Symbol.for("react.strict_mode"),df=Symbol.for("react.profiler"),Qg=Symbol.for("react.provider"),e0=Symbol.for("react.context"),Cd=Symbol.for("react.forward_ref"),hf=Symbol.for("react.suspense"),pf=Symbol.for("react.suspense_list"),Pd=Symbol.for("react.memo"),Gi=Symbol.for("react.lazy"),t0=Symbol.for("react.offscreen"),Bh=Symbol.iterator;function vs(t){return t===null||typeof t!="object"?null:(t=Bh&&t[Bh]||t["@@iterator"],typeof t=="function"?t:null)}var gt=Object.assign,Zu;function Ds(t){if(Zu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Zu=e&&e[1]||""}return`
`+Zu+t}var Ju=!1;function Qu(t,e){if(!t||Ju)return"";Ju=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Ju=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ds(t):""}function ky(t){switch(t.tag){case 5:return Ds(t.type);case 16:return Ds("Lazy");case 13:return Ds("Suspense");case 19:return Ds("SuspenseList");case 0:case 2:case 15:return t=Qu(t.type,!1),t;case 11:return t=Qu(t.type.render,!1),t;case 1:return t=Qu(t.type,!0),t;default:return""}}function mf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case wo:return"Fragment";case Eo:return"Portal";case df:return"Profiler";case bd:return"StrictMode";case hf:return"Suspense";case pf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case e0:return(t.displayName||"Context")+".Consumer";case Qg:return(t._context.displayName||"Context")+".Provider";case Cd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Pd:return e=t.displayName||null,e!==null?e:mf(t.type)||"Memo";case Gi:e=t._payload,t=t._init;try{return mf(t(e))}catch{}}return null}function zy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mf(e);case 8:return e===bd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ur(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function n0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function By(t){var e=n0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function La(t){t._valueTracker||(t._valueTracker=By(t))}function i0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=n0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function kl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function gf(t,e){var n=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Hh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ur(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function r0(t,e){e=e.checked,e!=null&&Rd(t,"checked",e,!1)}function vf(t,e){r0(t,e);var n=ur(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?_f(t,e.type,n):e.hasOwnProperty("defaultValue")&&_f(t,e.type,ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Gh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function _f(t,e,n){(e!=="number"||kl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Is=Array.isArray;function zo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ur(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function yf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(de(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Vh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(de(92));if(Is(n)){if(1<n.length)throw Error(de(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ur(n)}}function o0(t,e){var n=ur(e.value),i=ur(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Wh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function s0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?s0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Da,a0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Da=Da||document.createElement("div"),Da.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Da.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Zs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Fs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hy=["Webkit","ms","Moz","O"];Object.keys(Fs).forEach(function(t){Hy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Fs[e]=Fs[t]})});function l0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Fs.hasOwnProperty(t)&&Fs[t]?(""+e).trim():e+"px"}function u0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=l0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Gy=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sf(t,e){if(e){if(Gy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(de(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(de(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(de(61))}if(e.style!=null&&typeof e.style!="object")throw Error(de(62))}}function Mf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ef=null;function Ld(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var wf=null,Bo=null,Ho=null;function Xh(t){if(t=Ea(t)){if(typeof wf!="function")throw Error(de(280));var e=t.stateNode;e&&(e=Tu(e),wf(t.stateNode,t.type,e))}}function c0(t){Bo?Ho?Ho.push(t):Ho=[t]:Bo=t}function f0(){if(Bo){var t=Bo,e=Ho;if(Ho=Bo=null,Xh(t),e)for(t=0;t<e.length;t++)Xh(e[t])}}function d0(t,e){return t(e)}function h0(){}var ec=!1;function p0(t,e,n){if(ec)return t(e,n);ec=!0;try{return d0(t,e,n)}finally{ec=!1,(Bo!==null||Ho!==null)&&(h0(),f0())}}function Js(t,e){var n=t.stateNode;if(n===null)return null;var i=Tu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(de(231,e,typeof n));return n}var Tf=!1;if(Pi)try{var _s={};Object.defineProperty(_s,"passive",{get:function(){Tf=!0}}),window.addEventListener("test",_s,_s),window.removeEventListener("test",_s,_s)}catch{Tf=!1}function Vy(t,e,n,i,r,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ks=!1,zl=null,Bl=!1,Af=null,Wy={onError:function(t){ks=!0,zl=t}};function Xy(t,e,n,i,r,o,s,a,l){ks=!1,zl=null,Vy.apply(Wy,arguments)}function jy(t,e,n,i,r,o,s,a,l){if(Xy.apply(this,arguments),ks){if(ks){var u=zl;ks=!1,zl=null}else throw Error(de(198));Bl||(Bl=!0,Af=u)}}function Kr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function m0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function jh(t){if(Kr(t)!==t)throw Error(de(188))}function Yy(t){var e=t.alternate;if(!e){if(e=Kr(t),e===null)throw Error(de(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return jh(r),t;if(o===i)return jh(r),e;o=o.sibling}throw Error(de(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(de(189))}}if(n.alternate!==i)throw Error(de(190))}if(n.tag!==3)throw Error(de(188));return n.stateNode.current===n?t:e}function g0(t){return t=Yy(t),t!==null?v0(t):null}function v0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=v0(t);if(e!==null)return e;t=t.sibling}return null}var _0=Rn.unstable_scheduleCallback,Yh=Rn.unstable_cancelCallback,qy=Rn.unstable_shouldYield,$y=Rn.unstable_requestPaint,wt=Rn.unstable_now,Ky=Rn.unstable_getCurrentPriorityLevel,Dd=Rn.unstable_ImmediatePriority,y0=Rn.unstable_UserBlockingPriority,Hl=Rn.unstable_NormalPriority,Zy=Rn.unstable_LowPriority,x0=Rn.unstable_IdlePriority,Su=null,ui=null;function Jy(t){if(ui&&typeof ui.onCommitFiberRoot=="function")try{ui.onCommitFiberRoot(Su,t,void 0,(t.current.flags&128)===128)}catch{}}var ti=Math.clz32?Math.clz32:tx,Qy=Math.log,ex=Math.LN2;function tx(t){return t>>>=0,t===0?32:31-(Qy(t)/ex|0)|0}var Ia=64,Na=4194304;function Ns(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Gl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=Ns(a):(o&=s,o!==0&&(i=Ns(o)))}else s=n&~r,s!==0?i=Ns(s):o!==0&&(i=Ns(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ti(e),r=1<<n,i|=t[n],e&=~r;return i}function nx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ix(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-ti(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=nx(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Rf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function S0(){var t=Ia;return Ia<<=1,!(Ia&4194240)&&(Ia=64),t}function tc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Sa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ti(e),t[e]=n}function rx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ti(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function Id(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ti(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Qe=0;function M0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var E0,Nd,w0,T0,A0,bf=!1,Ua=[],Zi=null,Ji=null,Qi=null,Qs=new Map,ea=new Map,Wi=[],ox="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qh(t,e){switch(t){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":Qi=null;break;case"pointerover":case"pointerout":Qs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ea.delete(e.pointerId)}}function ys(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=Ea(e),e!==null&&Nd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function sx(t,e,n,i,r){switch(e){case"focusin":return Zi=ys(Zi,t,e,n,i,r),!0;case"dragenter":return Ji=ys(Ji,t,e,n,i,r),!0;case"mouseover":return Qi=ys(Qi,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Qs.set(o,ys(Qs.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,ea.set(o,ys(ea.get(o)||null,t,e,n,i,r)),!0}return!1}function R0(t){var e=Cr(t.target);if(e!==null){var n=Kr(e);if(n!==null){if(e=n.tag,e===13){if(e=m0(n),e!==null){t.blockedOn=e,A0(t.priority,function(){w0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Al(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Cf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ef=i,n.target.dispatchEvent(i),Ef=null}else return e=Ea(n),e!==null&&Nd(e),t.blockedOn=n,!1;e.shift()}return!0}function $h(t,e,n){Al(t)&&n.delete(e)}function ax(){bf=!1,Zi!==null&&Al(Zi)&&(Zi=null),Ji!==null&&Al(Ji)&&(Ji=null),Qi!==null&&Al(Qi)&&(Qi=null),Qs.forEach($h),ea.forEach($h)}function xs(t,e){t.blockedOn===e&&(t.blockedOn=null,bf||(bf=!0,Rn.unstable_scheduleCallback(Rn.unstable_NormalPriority,ax)))}function ta(t){function e(r){return xs(r,t)}if(0<Ua.length){xs(Ua[0],t);for(var n=1;n<Ua.length;n++){var i=Ua[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Zi!==null&&xs(Zi,t),Ji!==null&&xs(Ji,t),Qi!==null&&xs(Qi,t),Qs.forEach(e),ea.forEach(e),n=0;n<Wi.length;n++)i=Wi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Wi.length&&(n=Wi[0],n.blockedOn===null);)R0(n),n.blockedOn===null&&Wi.shift()}var Go=Ui.ReactCurrentBatchConfig,Vl=!0;function lx(t,e,n,i){var r=Qe,o=Go.transition;Go.transition=null;try{Qe=1,Ud(t,e,n,i)}finally{Qe=r,Go.transition=o}}function ux(t,e,n,i){var r=Qe,o=Go.transition;Go.transition=null;try{Qe=4,Ud(t,e,n,i)}finally{Qe=r,Go.transition=o}}function Ud(t,e,n,i){if(Vl){var r=Cf(t,e,n,i);if(r===null)fc(t,e,i,Wl,n),qh(t,i);else if(sx(r,t,e,n,i))i.stopPropagation();else if(qh(t,i),e&4&&-1<ox.indexOf(t)){for(;r!==null;){var o=Ea(r);if(o!==null&&E0(o),o=Cf(t,e,n,i),o===null&&fc(t,e,i,Wl,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else fc(t,e,i,null,n)}}var Wl=null;function Cf(t,e,n,i){if(Wl=null,t=Ld(i),t=Cr(t),t!==null)if(e=Kr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=m0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Wl=t,null}function b0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ky()){case Dd:return 1;case y0:return 4;case Hl:case Zy:return 16;case x0:return 536870912;default:return 16}default:return 16}}var ji=null,Od=null,Rl=null;function C0(){if(Rl)return Rl;var t,e=Od,n=e.length,i,r="value"in ji?ji.value:ji.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return Rl=r.slice(t,1<i?1-i:void 0)}function bl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Oa(){return!0}function Kh(){return!1}function Cn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Oa:Kh,this.isPropagationStopped=Kh,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oa)},persist:function(){},isPersistent:Oa}),e}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fd=Cn(us),Ma=gt({},us,{view:0,detail:0}),cx=Cn(Ma),nc,ic,Ss,Mu=gt({},Ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ss&&(Ss&&t.type==="mousemove"?(nc=t.screenX-Ss.screenX,ic=t.screenY-Ss.screenY):ic=nc=0,Ss=t),nc)},movementY:function(t){return"movementY"in t?t.movementY:ic}}),Zh=Cn(Mu),fx=gt({},Mu,{dataTransfer:0}),dx=Cn(fx),hx=gt({},Ma,{relatedTarget:0}),rc=Cn(hx),px=gt({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),mx=Cn(px),gx=gt({},us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vx=Cn(gx),_x=gt({},us,{data:0}),Jh=Cn(_x),yx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Sx[t])?!!e[t]:!1}function kd(){return Mx}var Ex=gt({},Ma,{key:function(t){if(t.key){var e=yx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=bl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kd,charCode:function(t){return t.type==="keypress"?bl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wx=Cn(Ex),Tx=gt({},Mu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qh=Cn(Tx),Ax=gt({},Ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kd}),Rx=Cn(Ax),bx=gt({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cx=Cn(bx),Px=gt({},Mu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Lx=Cn(Px),Dx=[9,13,27,32],zd=Pi&&"CompositionEvent"in window,zs=null;Pi&&"documentMode"in document&&(zs=document.documentMode);var Ix=Pi&&"TextEvent"in window&&!zs,P0=Pi&&(!zd||zs&&8<zs&&11>=zs),ep=" ",tp=!1;function L0(t,e){switch(t){case"keyup":return Dx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function D0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var To=!1;function Nx(t,e){switch(t){case"compositionend":return D0(e);case"keypress":return e.which!==32?null:(tp=!0,ep);case"textInput":return t=e.data,t===ep&&tp?null:t;default:return null}}function Ux(t,e){if(To)return t==="compositionend"||!zd&&L0(t,e)?(t=C0(),Rl=Od=ji=null,To=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return P0&&e.locale!=="ko"?null:e.data;default:return null}}var Ox={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function np(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ox[t.type]:e==="textarea"}function I0(t,e,n,i){c0(i),e=Xl(e,"onChange"),0<e.length&&(n=new Fd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Bs=null,na=null;function Fx(t){W0(t,0)}function Eu(t){var e=bo(t);if(i0(e))return t}function kx(t,e){if(t==="change")return e}var N0=!1;if(Pi){var oc;if(Pi){var sc="oninput"in document;if(!sc){var ip=document.createElement("div");ip.setAttribute("oninput","return;"),sc=typeof ip.oninput=="function"}oc=sc}else oc=!1;N0=oc&&(!document.documentMode||9<document.documentMode)}function rp(){Bs&&(Bs.detachEvent("onpropertychange",U0),na=Bs=null)}function U0(t){if(t.propertyName==="value"&&Eu(na)){var e=[];I0(e,na,t,Ld(t)),p0(Fx,e)}}function zx(t,e,n){t==="focusin"?(rp(),Bs=e,na=n,Bs.attachEvent("onpropertychange",U0)):t==="focusout"&&rp()}function Bx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Eu(na)}function Hx(t,e){if(t==="click")return Eu(e)}function Gx(t,e){if(t==="input"||t==="change")return Eu(e)}function Vx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ii=typeof Object.is=="function"?Object.is:Vx;function ia(t,e){if(ii(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ff.call(e,r)||!ii(t[r],e[r]))return!1}return!0}function op(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sp(t,e){var n=op(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=op(n)}}function O0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?O0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function F0(){for(var t=window,e=kl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=kl(t.document)}return e}function Bd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Wx(t){var e=F0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&O0(n.ownerDocument.documentElement,n)){if(i!==null&&Bd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=sp(n,o);var s=sp(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Xx=Pi&&"documentMode"in document&&11>=document.documentMode,Ao=null,Pf=null,Hs=null,Lf=!1;function ap(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lf||Ao==null||Ao!==kl(i)||(i=Ao,"selectionStart"in i&&Bd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Hs&&ia(Hs,i)||(Hs=i,i=Xl(Pf,"onSelect"),0<i.length&&(e=new Fd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ao)))}function Fa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ro={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionend:Fa("Transition","TransitionEnd")},ac={},k0={};Pi&&(k0=document.createElement("div").style,"AnimationEvent"in window||(delete Ro.animationend.animation,delete Ro.animationiteration.animation,delete Ro.animationstart.animation),"TransitionEvent"in window||delete Ro.transitionend.transition);function wu(t){if(ac[t])return ac[t];if(!Ro[t])return t;var e=Ro[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in k0)return ac[t]=e[n];return t}var z0=wu("animationend"),B0=wu("animationiteration"),H0=wu("animationstart"),G0=wu("transitionend"),V0=new Map,lp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dr(t,e){V0.set(t,e),$r(e,[t])}for(var lc=0;lc<lp.length;lc++){var uc=lp[lc],jx=uc.toLowerCase(),Yx=uc[0].toUpperCase()+uc.slice(1);dr(jx,"on"+Yx)}dr(z0,"onAnimationEnd");dr(B0,"onAnimationIteration");dr(H0,"onAnimationStart");dr("dblclick","onDoubleClick");dr("focusin","onFocus");dr("focusout","onBlur");dr(G0,"onTransitionEnd");$o("onMouseEnter",["mouseout","mouseover"]);$o("onMouseLeave",["mouseout","mouseover"]);$o("onPointerEnter",["pointerout","pointerover"]);$o("onPointerLeave",["pointerout","pointerover"]);$r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$r("onBeforeInput",["compositionend","keypress","textInput","paste"]);$r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Us="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Us));function up(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,jy(i,e,void 0,t),t.currentTarget=null}function W0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;up(r,a,u),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;up(r,a,u),o=l}}}if(Bl)throw t=Af,Bl=!1,Af=null,t}function st(t,e){var n=e[Of];n===void 0&&(n=e[Of]=new Set);var i=t+"__bubble";n.has(i)||(X0(e,t,2,!1),n.add(i))}function cc(t,e,n){var i=0;e&&(i|=4),X0(n,t,i,e)}var ka="_reactListening"+Math.random().toString(36).slice(2);function ra(t){if(!t[ka]){t[ka]=!0,Jg.forEach(function(n){n!=="selectionchange"&&(qx.has(n)||cc(n,!1,t),cc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ka]||(e[ka]=!0,cc("selectionchange",!1,e))}}function X0(t,e,n,i){switch(b0(e)){case 1:var r=lx;break;case 4:r=ux;break;default:r=Ud}n=r.bind(null,e,n,t),r=void 0,!Tf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function fc(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Cr(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}p0(function(){var u=o,c=Ld(n),h=[];e:{var d=V0.get(t);if(d!==void 0){var p=Fd,m=t;switch(t){case"keypress":if(bl(n)===0)break e;case"keydown":case"keyup":p=wx;break;case"focusin":m="focus",p=rc;break;case"focusout":m="blur",p=rc;break;case"beforeblur":case"afterblur":p=rc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Zh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=dx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Rx;break;case z0:case B0:case H0:p=mx;break;case G0:p=Cx;break;case"scroll":p=cx;break;case"wheel":p=Lx;break;case"copy":case"cut":case"paste":p=vx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Qh}var y=(e&4)!==0,g=!y&&t==="scroll",f=y?d!==null?d+"Capture":null:d;y=[];for(var x=u,v;x!==null;){v=x;var _=v.stateNode;if(v.tag===5&&_!==null&&(v=_,f!==null&&(_=Js(x,f),_!=null&&y.push(oa(x,_,v)))),g)break;x=x.return}0<y.length&&(d=new p(d,m,null,n,c),h.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Ef&&(m=n.relatedTarget||n.fromElement)&&(Cr(m)||m[Li]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=u,m=m?Cr(m):null,m!==null&&(g=Kr(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=u),p!==m)){if(y=Zh,_="onMouseLeave",f="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(y=Qh,_="onPointerLeave",f="onPointerEnter",x="pointer"),g=p==null?d:bo(p),v=m==null?d:bo(m),d=new y(_,x+"leave",p,n,c),d.target=g,d.relatedTarget=v,_=null,Cr(c)===u&&(y=new y(f,x+"enter",m,n,c),y.target=v,y.relatedTarget=g,_=y),g=_,p&&m)t:{for(y=p,f=m,x=0,v=y;v;v=Qr(v))x++;for(v=0,_=f;_;_=Qr(_))v++;for(;0<x-v;)y=Qr(y),x--;for(;0<v-x;)f=Qr(f),v--;for(;x--;){if(y===f||f!==null&&y===f.alternate)break t;y=Qr(y),f=Qr(f)}y=null}else y=null;p!==null&&cp(h,d,p,y,!1),m!==null&&g!==null&&cp(h,g,m,y,!0)}}e:{if(d=u?bo(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var b=kx;else if(np(d))if(N0)b=Gx;else{b=Bx;var S=zx}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=Hx);if(b&&(b=b(t,u))){I0(h,b,n,c);break e}S&&S(t,d,u),t==="focusout"&&(S=d._wrapperState)&&S.controlled&&d.type==="number"&&_f(d,"number",d.value)}switch(S=u?bo(u):window,t){case"focusin":(np(S)||S.contentEditable==="true")&&(Ao=S,Pf=u,Hs=null);break;case"focusout":Hs=Pf=Ao=null;break;case"mousedown":Lf=!0;break;case"contextmenu":case"mouseup":case"dragend":Lf=!1,ap(h,n,c);break;case"selectionchange":if(Xx)break;case"keydown":case"keyup":ap(h,n,c)}var T;if(zd)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else To?L0(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(P0&&n.locale!=="ko"&&(To||L!=="onCompositionStart"?L==="onCompositionEnd"&&To&&(T=C0()):(ji=c,Od="value"in ji?ji.value:ji.textContent,To=!0)),S=Xl(u,L),0<S.length&&(L=new Jh(L,t,null,n,c),h.push({event:L,listeners:S}),T?L.data=T:(T=D0(n),T!==null&&(L.data=T)))),(T=Ix?Nx(t,n):Ux(t,n))&&(u=Xl(u,"onBeforeInput"),0<u.length&&(c=new Jh("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=T))}W0(h,e)})}function oa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Xl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Js(t,n),o!=null&&i.unshift(oa(t,o,r)),o=Js(t,e),o!=null&&i.push(oa(t,o,r))),t=t.return}return i}function Qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function cp(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Js(n,o),l!=null&&s.unshift(oa(n,l,a))):r||(l=Js(n,o),l!=null&&s.push(oa(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var $x=/\r\n?/g,Kx=/\u0000|\uFFFD/g;function fp(t){return(typeof t=="string"?t:""+t).replace($x,`
`).replace(Kx,"")}function za(t,e,n){if(e=fp(e),fp(t)!==e&&n)throw Error(de(425))}function jl(){}var Df=null,If=null;function Nf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Uf=typeof setTimeout=="function"?setTimeout:void 0,Zx=typeof clearTimeout=="function"?clearTimeout:void 0,dp=typeof Promise=="function"?Promise:void 0,Jx=typeof queueMicrotask=="function"?queueMicrotask:typeof dp<"u"?function(t){return dp.resolve(null).then(t).catch(Qx)}:Uf;function Qx(t){setTimeout(function(){throw t})}function dc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ta(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ta(e)}function er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function hp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var cs=Math.random().toString(36).slice(2),li="__reactFiber$"+cs,sa="__reactProps$"+cs,Li="__reactContainer$"+cs,Of="__reactEvents$"+cs,eS="__reactListeners$"+cs,tS="__reactHandles$"+cs;function Cr(t){var e=t[li];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Li]||n[li]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=hp(t);t!==null;){if(n=t[li])return n;t=hp(t)}return e}t=n,n=t.parentNode}return null}function Ea(t){return t=t[li]||t[Li],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function bo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(de(33))}function Tu(t){return t[sa]||null}var Ff=[],Co=-1;function hr(t){return{current:t}}function lt(t){0>Co||(t.current=Ff[Co],Ff[Co]=null,Co--)}function ot(t,e){Co++,Ff[Co]=t.current,t.current=e}var cr={},en=hr(cr),mn=hr(!1),zr=cr;function Ko(t,e){var n=t.type.contextTypes;if(!n)return cr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function gn(t){return t=t.childContextTypes,t!=null}function Yl(){lt(mn),lt(en)}function pp(t,e,n){if(en.current!==cr)throw Error(de(168));ot(en,e),ot(mn,n)}function j0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(de(108,zy(t)||"Unknown",r));return gt({},n,i)}function ql(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||cr,zr=en.current,ot(en,t),ot(mn,mn.current),!0}function mp(t,e,n){var i=t.stateNode;if(!i)throw Error(de(169));n?(t=j0(t,e,zr),i.__reactInternalMemoizedMergedChildContext=t,lt(mn),lt(en),ot(en,t)):lt(mn),ot(mn,n)}var Si=null,Au=!1,hc=!1;function Y0(t){Si===null?Si=[t]:Si.push(t)}function nS(t){Au=!0,Y0(t)}function pr(){if(!hc&&Si!==null){hc=!0;var t=0,e=Qe;try{var n=Si;for(Qe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Si=null,Au=!1}catch(r){throw Si!==null&&(Si=Si.slice(t+1)),_0(Dd,pr),r}finally{Qe=e,hc=!1}}return null}var Po=[],Lo=0,$l=null,Kl=0,Dn=[],In=0,Br=null,Ti=1,Ai="";function Mr(t,e){Po[Lo++]=Kl,Po[Lo++]=$l,$l=t,Kl=e}function q0(t,e,n){Dn[In++]=Ti,Dn[In++]=Ai,Dn[In++]=Br,Br=t;var i=Ti;t=Ai;var r=32-ti(i)-1;i&=~(1<<r),n+=1;var o=32-ti(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,Ti=1<<32-ti(e)+r|n<<r|i,Ai=o+t}else Ti=1<<o|n<<r|i,Ai=t}function Hd(t){t.return!==null&&(Mr(t,1),q0(t,1,0))}function Gd(t){for(;t===$l;)$l=Po[--Lo],Po[Lo]=null,Kl=Po[--Lo],Po[Lo]=null;for(;t===Br;)Br=Dn[--In],Dn[In]=null,Ai=Dn[--In],Dn[In]=null,Ti=Dn[--In],Dn[In]=null}var Tn=null,wn=null,ct=!1,Zn=null;function $0(t,e){var n=kn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function gp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tn=t,wn=er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tn=t,wn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Br!==null?{id:Ti,overflow:Ai}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=kn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tn=t,wn=null,!0):!1;default:return!1}}function kf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function zf(t){if(ct){var e=wn;if(e){var n=e;if(!gp(t,e)){if(kf(t))throw Error(de(418));e=er(n.nextSibling);var i=Tn;e&&gp(t,e)?$0(i,n):(t.flags=t.flags&-4097|2,ct=!1,Tn=t)}}else{if(kf(t))throw Error(de(418));t.flags=t.flags&-4097|2,ct=!1,Tn=t}}}function vp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tn=t}function Ba(t){if(t!==Tn)return!1;if(!ct)return vp(t),ct=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Nf(t.type,t.memoizedProps)),e&&(e=wn)){if(kf(t))throw K0(),Error(de(418));for(;e;)$0(t,e),e=er(e.nextSibling)}if(vp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(de(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wn=er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wn=null}}else wn=Tn?er(t.stateNode.nextSibling):null;return!0}function K0(){for(var t=wn;t;)t=er(t.nextSibling)}function Zo(){wn=Tn=null,ct=!1}function Vd(t){Zn===null?Zn=[t]:Zn.push(t)}var iS=Ui.ReactCurrentBatchConfig;function Ms(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(de(309));var i=n.stateNode}if(!i)throw Error(de(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(de(284));if(!n._owner)throw Error(de(290,t))}return t}function Ha(t,e){throw t=Object.prototype.toString.call(e),Error(de(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function _p(t){var e=t._init;return e(t._payload)}function Z0(t){function e(f,x){if(t){var v=f.deletions;v===null?(f.deletions=[x],f.flags|=16):v.push(x)}}function n(f,x){if(!t)return null;for(;x!==null;)e(f,x),x=x.sibling;return null}function i(f,x){for(f=new Map;x!==null;)x.key!==null?f.set(x.key,x):f.set(x.index,x),x=x.sibling;return f}function r(f,x){return f=rr(f,x),f.index=0,f.sibling=null,f}function o(f,x,v){return f.index=v,t?(v=f.alternate,v!==null?(v=v.index,v<x?(f.flags|=2,x):v):(f.flags|=2,x)):(f.flags|=1048576,x)}function s(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,x,v,_){return x===null||x.tag!==6?(x=xc(v,f.mode,_),x.return=f,x):(x=r(x,v),x.return=f,x)}function l(f,x,v,_){var b=v.type;return b===wo?c(f,x,v.props.children,_,v.key):x!==null&&(x.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Gi&&_p(b)===x.type)?(_=r(x,v.props),_.ref=Ms(f,x,v),_.return=f,_):(_=Ul(v.type,v.key,v.props,null,f.mode,_),_.ref=Ms(f,x,v),_.return=f,_)}function u(f,x,v,_){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=Sc(v,f.mode,_),x.return=f,x):(x=r(x,v.children||[]),x.return=f,x)}function c(f,x,v,_,b){return x===null||x.tag!==7?(x=Ur(v,f.mode,_,b),x.return=f,x):(x=r(x,v),x.return=f,x)}function h(f,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=xc(""+x,f.mode,v),x.return=f,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Pa:return v=Ul(x.type,x.key,x.props,null,f.mode,v),v.ref=Ms(f,null,x),v.return=f,v;case Eo:return x=Sc(x,f.mode,v),x.return=f,x;case Gi:var _=x._init;return h(f,_(x._payload),v)}if(Is(x)||vs(x))return x=Ur(x,f.mode,v,null),x.return=f,x;Ha(f,x)}return null}function d(f,x,v,_){var b=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:a(f,x,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Pa:return v.key===b?l(f,x,v,_):null;case Eo:return v.key===b?u(f,x,v,_):null;case Gi:return b=v._init,d(f,x,b(v._payload),_)}if(Is(v)||vs(v))return b!==null?null:c(f,x,v,_,null);Ha(f,v)}return null}function p(f,x,v,_,b){if(typeof _=="string"&&_!==""||typeof _=="number")return f=f.get(v)||null,a(x,f,""+_,b);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Pa:return f=f.get(_.key===null?v:_.key)||null,l(x,f,_,b);case Eo:return f=f.get(_.key===null?v:_.key)||null,u(x,f,_,b);case Gi:var S=_._init;return p(f,x,v,S(_._payload),b)}if(Is(_)||vs(_))return f=f.get(v)||null,c(x,f,_,b,null);Ha(x,_)}return null}function m(f,x,v,_){for(var b=null,S=null,T=x,L=x=0,M=null;T!==null&&L<v.length;L++){T.index>L?(M=T,T=null):M=T.sibling;var w=d(f,T,v[L],_);if(w===null){T===null&&(T=M);break}t&&T&&w.alternate===null&&e(f,T),x=o(w,x,L),S===null?b=w:S.sibling=w,S=w,T=M}if(L===v.length)return n(f,T),ct&&Mr(f,L),b;if(T===null){for(;L<v.length;L++)T=h(f,v[L],_),T!==null&&(x=o(T,x,L),S===null?b=T:S.sibling=T,S=T);return ct&&Mr(f,L),b}for(T=i(f,T);L<v.length;L++)M=p(T,f,L,v[L],_),M!==null&&(t&&M.alternate!==null&&T.delete(M.key===null?L:M.key),x=o(M,x,L),S===null?b=M:S.sibling=M,S=M);return t&&T.forEach(function(O){return e(f,O)}),ct&&Mr(f,L),b}function y(f,x,v,_){var b=vs(v);if(typeof b!="function")throw Error(de(150));if(v=b.call(v),v==null)throw Error(de(151));for(var S=b=null,T=x,L=x=0,M=null,w=v.next();T!==null&&!w.done;L++,w=v.next()){T.index>L?(M=T,T=null):M=T.sibling;var O=d(f,T,w.value,_);if(O===null){T===null&&(T=M);break}t&&T&&O.alternate===null&&e(f,T),x=o(O,x,L),S===null?b=O:S.sibling=O,S=O,T=M}if(w.done)return n(f,T),ct&&Mr(f,L),b;if(T===null){for(;!w.done;L++,w=v.next())w=h(f,w.value,_),w!==null&&(x=o(w,x,L),S===null?b=w:S.sibling=w,S=w);return ct&&Mr(f,L),b}for(T=i(f,T);!w.done;L++,w=v.next())w=p(T,f,L,w.value,_),w!==null&&(t&&w.alternate!==null&&T.delete(w.key===null?L:w.key),x=o(w,x,L),S===null?b=w:S.sibling=w,S=w);return t&&T.forEach(function(W){return e(f,W)}),ct&&Mr(f,L),b}function g(f,x,v,_){if(typeof v=="object"&&v!==null&&v.type===wo&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Pa:e:{for(var b=v.key,S=x;S!==null;){if(S.key===b){if(b=v.type,b===wo){if(S.tag===7){n(f,S.sibling),x=r(S,v.props.children),x.return=f,f=x;break e}}else if(S.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Gi&&_p(b)===S.type){n(f,S.sibling),x=r(S,v.props),x.ref=Ms(f,S,v),x.return=f,f=x;break e}n(f,S);break}else e(f,S);S=S.sibling}v.type===wo?(x=Ur(v.props.children,f.mode,_,v.key),x.return=f,f=x):(_=Ul(v.type,v.key,v.props,null,f.mode,_),_.ref=Ms(f,x,v),_.return=f,f=_)}return s(f);case Eo:e:{for(S=v.key;x!==null;){if(x.key===S)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(f,x.sibling),x=r(x,v.children||[]),x.return=f,f=x;break e}else{n(f,x);break}else e(f,x);x=x.sibling}x=Sc(v,f.mode,_),x.return=f,f=x}return s(f);case Gi:return S=v._init,g(f,x,S(v._payload),_)}if(Is(v))return m(f,x,v,_);if(vs(v))return y(f,x,v,_);Ha(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(f,x.sibling),x=r(x,v),x.return=f,f=x):(n(f,x),x=xc(v,f.mode,_),x.return=f,f=x),s(f)):n(f,x)}return g}var Jo=Z0(!0),J0=Z0(!1),Zl=hr(null),Jl=null,Do=null,Wd=null;function Xd(){Wd=Do=Jl=null}function jd(t){var e=Zl.current;lt(Zl),t._currentValue=e}function Bf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Vo(t,e){Jl=t,Wd=Do=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pn=!0),t.firstContext=null)}function Gn(t){var e=t._currentValue;if(Wd!==t)if(t={context:t,memoizedValue:e,next:null},Do===null){if(Jl===null)throw Error(de(308));Do=t,Jl.dependencies={lanes:0,firstContext:t}}else Do=Do.next=t;return e}var Pr=null;function Yd(t){Pr===null?Pr=[t]:Pr.push(t)}function Q0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Yd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Di(t,i)}function Di(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Vi=!1;function qd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ev(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function tr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Di(t,n)}return r=i.interleaved,r===null?(e.next=e,Yd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Di(t,n)}function Cl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Id(t,n)}}function yp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ql(t,e,n,i){var r=t.updateQueue;Vi=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var h=r.baseState;s=0,c=u=l=null,a=o;do{var d=a.lane,p=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,y=a;switch(d=e,p=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){h=m.call(p,h,d);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,d=typeof m=="function"?m.call(p,h,d):m,d==null)break e;h=gt({},h,d);break e;case 2:Vi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,s|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(c===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Gr|=s,t.lanes=s,t.memoizedState=h}}function xp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(de(191,r));r.call(i)}}}var wa={},ci=hr(wa),aa=hr(wa),la=hr(wa);function Lr(t){if(t===wa)throw Error(de(174));return t}function $d(t,e){switch(ot(la,e),ot(aa,t),ot(ci,wa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:xf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=xf(e,t)}lt(ci),ot(ci,e)}function Qo(){lt(ci),lt(aa),lt(la)}function tv(t){Lr(la.current);var e=Lr(ci.current),n=xf(e,t.type);e!==n&&(ot(aa,t),ot(ci,n))}function Kd(t){aa.current===t&&(lt(ci),lt(aa))}var dt=hr(0);function eu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var pc=[];function Zd(){for(var t=0;t<pc.length;t++)pc[t]._workInProgressVersionPrimary=null;pc.length=0}var Pl=Ui.ReactCurrentDispatcher,mc=Ui.ReactCurrentBatchConfig,Hr=0,mt=null,bt=null,Ot=null,tu=!1,Gs=!1,ua=0,rS=0;function Yt(){throw Error(de(321))}function Jd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ii(t[n],e[n]))return!1;return!0}function Qd(t,e,n,i,r,o){if(Hr=o,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pl.current=t===null||t.memoizedState===null?lS:uS,t=n(i,r),Gs){o=0;do{if(Gs=!1,ua=0,25<=o)throw Error(de(301));o+=1,Ot=bt=null,e.updateQueue=null,Pl.current=cS,t=n(i,r)}while(Gs)}if(Pl.current=nu,e=bt!==null&&bt.next!==null,Hr=0,Ot=bt=mt=null,tu=!1,e)throw Error(de(300));return t}function eh(){var t=ua!==0;return ua=0,t}function si(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?mt.memoizedState=Ot=t:Ot=Ot.next=t,Ot}function Vn(){if(bt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=Ot===null?mt.memoizedState:Ot.next;if(e!==null)Ot=e,bt=t;else{if(t===null)throw Error(de(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Ot===null?mt.memoizedState=Ot=t:Ot=Ot.next=t}return Ot}function ca(t,e){return typeof e=="function"?e(t):e}function gc(t){var e=Vn(),n=e.queue;if(n===null)throw Error(de(311));n.lastRenderedReducer=t;var i=bt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Hr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,s=i):l=l.next=h,mt.lanes|=c,Gr|=c}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=a,ii(i,e.memoizedState)||(pn=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,mt.lanes|=o,Gr|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function vc(t){var e=Vn(),n=e.queue;if(n===null)throw Error(de(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);ii(o,e.memoizedState)||(pn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function nv(){}function iv(t,e){var n=mt,i=Vn(),r=e(),o=!ii(i.memoizedState,r);if(o&&(i.memoizedState=r,pn=!0),i=i.queue,th(sv.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Ot!==null&&Ot.memoizedState.tag&1){if(n.flags|=2048,fa(9,ov.bind(null,n,i,r,e),void 0,null),zt===null)throw Error(de(349));Hr&30||rv(n,e,r)}return r}function rv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ov(t,e,n,i){e.value=n,e.getSnapshot=i,av(e)&&lv(t)}function sv(t,e,n){return n(function(){av(e)&&lv(t)})}function av(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ii(t,n)}catch{return!0}}function lv(t){var e=Di(t,1);e!==null&&ni(e,t,1,-1)}function Sp(t){var e=si();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:t},e.queue=t,t=t.dispatch=aS.bind(null,mt,t),[e.memoizedState,t]}function fa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function uv(){return Vn().memoizedState}function Ll(t,e,n,i){var r=si();mt.flags|=t,r.memoizedState=fa(1|e,n,void 0,i===void 0?null:i)}function Ru(t,e,n,i){var r=Vn();i=i===void 0?null:i;var o=void 0;if(bt!==null){var s=bt.memoizedState;if(o=s.destroy,i!==null&&Jd(i,s.deps)){r.memoizedState=fa(e,n,o,i);return}}mt.flags|=t,r.memoizedState=fa(1|e,n,o,i)}function Mp(t,e){return Ll(8390656,8,t,e)}function th(t,e){return Ru(2048,8,t,e)}function cv(t,e){return Ru(4,2,t,e)}function fv(t,e){return Ru(4,4,t,e)}function dv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function hv(t,e,n){return n=n!=null?n.concat([t]):null,Ru(4,4,dv.bind(null,e,t),n)}function nh(){}function pv(t,e){var n=Vn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Jd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function mv(t,e){var n=Vn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Jd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function gv(t,e,n){return Hr&21?(ii(n,e)||(n=S0(),mt.lanes|=n,Gr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pn=!0),t.memoizedState=n)}function oS(t,e){var n=Qe;Qe=n!==0&&4>n?n:4,t(!0);var i=mc.transition;mc.transition={};try{t(!1),e()}finally{Qe=n,mc.transition=i}}function vv(){return Vn().memoizedState}function sS(t,e,n){var i=ir(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},_v(t))yv(e,n);else if(n=Q0(t,e,n,i),n!==null){var r=ln();ni(n,t,i,r),xv(n,e,i)}}function aS(t,e,n){var i=ir(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(_v(t))yv(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,ii(a,s)){var l=e.interleaved;l===null?(r.next=r,Yd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Q0(t,e,r,i),n!==null&&(r=ln(),ni(n,t,i,r),xv(n,e,i))}}function _v(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function yv(t,e){Gs=tu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function xv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Id(t,n)}}var nu={readContext:Gn,useCallback:Yt,useContext:Yt,useEffect:Yt,useImperativeHandle:Yt,useInsertionEffect:Yt,useLayoutEffect:Yt,useMemo:Yt,useReducer:Yt,useRef:Yt,useState:Yt,useDebugValue:Yt,useDeferredValue:Yt,useTransition:Yt,useMutableSource:Yt,useSyncExternalStore:Yt,useId:Yt,unstable_isNewReconciler:!1},lS={readContext:Gn,useCallback:function(t,e){return si().memoizedState=[t,e===void 0?null:e],t},useContext:Gn,useEffect:Mp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ll(4194308,4,dv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ll(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ll(4,2,t,e)},useMemo:function(t,e){var n=si();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=si();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=sS.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=si();return t={current:t},e.memoizedState=t},useState:Sp,useDebugValue:nh,useDeferredValue:function(t){return si().memoizedState=t},useTransition:function(){var t=Sp(!1),e=t[0];return t=oS.bind(null,t[1]),si().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=si();if(ct){if(n===void 0)throw Error(de(407));n=n()}else{if(n=e(),zt===null)throw Error(de(349));Hr&30||rv(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,Mp(sv.bind(null,i,o,t),[t]),i.flags|=2048,fa(9,ov.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=si(),e=zt.identifierPrefix;if(ct){var n=Ai,i=Ti;n=(i&~(1<<32-ti(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ua++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=rS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},uS={readContext:Gn,useCallback:pv,useContext:Gn,useEffect:th,useImperativeHandle:hv,useInsertionEffect:cv,useLayoutEffect:fv,useMemo:mv,useReducer:gc,useRef:uv,useState:function(){return gc(ca)},useDebugValue:nh,useDeferredValue:function(t){var e=Vn();return gv(e,bt.memoizedState,t)},useTransition:function(){var t=gc(ca)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:nv,useSyncExternalStore:iv,useId:vv,unstable_isNewReconciler:!1},cS={readContext:Gn,useCallback:pv,useContext:Gn,useEffect:th,useImperativeHandle:hv,useInsertionEffect:cv,useLayoutEffect:fv,useMemo:mv,useReducer:vc,useRef:uv,useState:function(){return vc(ca)},useDebugValue:nh,useDeferredValue:function(t){var e=Vn();return bt===null?e.memoizedState=t:gv(e,bt.memoizedState,t)},useTransition:function(){var t=vc(ca)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:nv,useSyncExternalStore:iv,useId:vv,unstable_isNewReconciler:!1};function $n(t,e){if(t&&t.defaultProps){e=gt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Hf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:gt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var bu={isMounted:function(t){return(t=t._reactInternals)?Kr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=ln(),r=ir(t),o=bi(i,r);o.payload=e,n!=null&&(o.callback=n),e=tr(t,o,r),e!==null&&(ni(e,t,r,i),Cl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=ln(),r=ir(t),o=bi(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=tr(t,o,r),e!==null&&(ni(e,t,r,i),Cl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ln(),i=ir(t),r=bi(n,i);r.tag=2,e!=null&&(r.callback=e),e=tr(t,r,i),e!==null&&(ni(e,t,i,n),Cl(e,t,i))}};function Ep(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!ia(n,i)||!ia(r,o):!0}function Sv(t,e,n){var i=!1,r=cr,o=e.contextType;return typeof o=="object"&&o!==null?o=Gn(o):(r=gn(e)?zr:en.current,i=e.contextTypes,o=(i=i!=null)?Ko(t,r):cr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=bu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function wp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&bu.enqueueReplaceState(e,e.state,null)}function Gf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},qd(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Gn(o):(o=gn(e)?zr:en.current,r.context=Ko(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Hf(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&bu.enqueueReplaceState(r,r.state,null),Ql(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function es(t,e){try{var n="",i=e;do n+=ky(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function _c(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Vf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var fS=typeof WeakMap=="function"?WeakMap:Map;function Mv(t,e,n){n=bi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ru||(ru=!0,Qf=i),Vf(t,e)},n}function Ev(t,e,n){n=bi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Vf(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Vf(t,e),typeof i!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Tp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new fS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=TS.bind(null,t,e,n),e.then(t,t))}function Ap(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Rp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bi(-1,1),e.tag=2,tr(n,e,1))),n.lanes|=1),t)}var dS=Ui.ReactCurrentOwner,pn=!1;function sn(t,e,n,i){e.child=t===null?J0(e,null,n,i):Jo(e,t.child,n,i)}function bp(t,e,n,i,r){n=n.render;var o=e.ref;return Vo(e,r),i=Qd(t,e,n,i,o,r),n=eh(),t!==null&&!pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ii(t,e,r)):(ct&&n&&Hd(e),e.flags|=1,sn(t,e,i,r),e.child)}function Cp(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!ch(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,wv(t,e,o,i,r)):(t=Ul(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ia,n(s,i)&&t.ref===e.ref)return Ii(t,e,r)}return e.flags|=1,t=rr(o,i),t.ref=e.ref,t.return=e,e.child=t}function wv(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(ia(o,i)&&t.ref===e.ref)if(pn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(pn=!0);else return e.lanes=t.lanes,Ii(t,e,r)}return Wf(t,e,n,i,r)}function Tv(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(No,En),En|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ot(No,En),En|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,ot(No,En),En|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,ot(No,En),En|=i;return sn(t,e,r,n),e.child}function Av(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Wf(t,e,n,i,r){var o=gn(n)?zr:en.current;return o=Ko(e,o),Vo(e,r),n=Qd(t,e,n,i,o,r),i=eh(),t!==null&&!pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ii(t,e,r)):(ct&&i&&Hd(e),e.flags|=1,sn(t,e,n,r),e.child)}function Pp(t,e,n,i,r){if(gn(n)){var o=!0;ql(e)}else o=!1;if(Vo(e,r),e.stateNode===null)Dl(t,e),Sv(e,n,i),Gf(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Gn(u):(u=gn(n)?zr:en.current,u=Ko(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==u)&&wp(e,s,i,u),Vi=!1;var d=e.memoizedState;s.state=d,Ql(e,i,s,r),l=e.memoizedState,a!==i||d!==l||mn.current||Vi?(typeof c=="function"&&(Hf(e,n,c,i),l=e.memoizedState),(a=Vi||Ep(e,n,a,i,d,l,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,ev(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:$n(e.type,a),s.props=u,h=e.pendingProps,d=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Gn(l):(l=gn(n)?zr:en.current,l=Ko(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||d!==l)&&wp(e,s,i,l),Vi=!1,d=e.memoizedState,s.state=d,Ql(e,i,s,r);var m=e.memoizedState;a!==h||d!==m||mn.current||Vi?(typeof p=="function"&&(Hf(e,n,p,i),m=e.memoizedState),(u=Vi||Ep(e,n,u,i,d,m,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,m,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,m,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),s.props=i,s.state=m,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Xf(t,e,n,i,o,r)}function Xf(t,e,n,i,r,o){Av(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&mp(e,n,!1),Ii(t,e,o);i=e.stateNode,dS.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=Jo(e,t.child,null,o),e.child=Jo(e,null,a,o)):sn(t,e,a,o),e.memoizedState=i.state,r&&mp(e,n,!0),e.child}function Rv(t){var e=t.stateNode;e.pendingContext?pp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&pp(t,e.context,!1),$d(t,e.containerInfo)}function Lp(t,e,n,i,r){return Zo(),Vd(r),e.flags|=256,sn(t,e,n,i),e.child}var jf={dehydrated:null,treeContext:null,retryLane:0};function Yf(t){return{baseLanes:t,cachePool:null,transitions:null}}function bv(t,e,n){var i=e.pendingProps,r=dt.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ot(dt,r&1),t===null)return zf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Lu(s,i,0,null),t=Ur(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Yf(n),e.memoizedState=jf,t):ih(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return hS(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=rr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=rr(a,o):(o=Ur(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?Yf(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=jf,i}return o=t.child,t=o.sibling,i=rr(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function ih(t,e){return e=Lu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ga(t,e,n,i){return i!==null&&Vd(i),Jo(e,t.child,null,n),t=ih(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hS(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=_c(Error(de(422))),Ga(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=Lu({mode:"visible",children:i.children},r,0,null),o=Ur(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Jo(e,t.child,null,s),e.child.memoizedState=Yf(s),e.memoizedState=jf,o);if(!(e.mode&1))return Ga(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(de(419)),i=_c(o,i,void 0),Ga(t,e,s,i)}if(a=(s&t.childLanes)!==0,pn||a){if(i=zt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Di(t,r),ni(i,t,r,-1))}return uh(),i=_c(Error(de(421))),Ga(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=AS.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,wn=er(r.nextSibling),Tn=e,ct=!0,Zn=null,t!==null&&(Dn[In++]=Ti,Dn[In++]=Ai,Dn[In++]=Br,Ti=t.id,Ai=t.overflow,Br=e),e=ih(e,i.children),e.flags|=4096,e)}function Dp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Bf(t.return,e,n)}function yc(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function Cv(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(sn(t,e,i.children,n),i=dt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dp(t,n,e);else if(t.tag===19)Dp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ot(dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&eu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),yc(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&eu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}yc(e,!0,n,null,o);break;case"together":yc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Dl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ii(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(de(153));if(e.child!==null){for(t=e.child,n=rr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=rr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function pS(t,e,n){switch(e.tag){case 3:Rv(e),Zo();break;case 5:tv(e);break;case 1:gn(e.type)&&ql(e);break;case 4:$d(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ot(Zl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ot(dt,dt.current&1),e.flags|=128,null):n&e.child.childLanes?bv(t,e,n):(ot(dt,dt.current&1),t=Ii(t,e,n),t!==null?t.sibling:null);ot(dt,dt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Cv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ot(dt,dt.current),i)break;return null;case 22:case 23:return e.lanes=0,Tv(t,e,n)}return Ii(t,e,n)}var Pv,qf,Lv,Dv;Pv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qf=function(){};Lv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Lr(ci.current);var o=null;switch(n){case"input":r=gf(t,r),i=gf(t,i),o=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),o=[];break;case"textarea":r=yf(t,r),i=yf(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=jl)}Sf(n,i);var s;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ks.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ks.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&st("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};Dv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Es(t,e){if(!ct)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function mS(t,e,n){var i=e.pendingProps;switch(Gd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return gn(e.type)&&Yl(),qt(e),null;case 3:return i=e.stateNode,Qo(),lt(mn),lt(en),Zd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ba(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Zn!==null&&(nd(Zn),Zn=null))),qf(t,e),qt(e),null;case 5:Kd(e);var r=Lr(la.current);if(n=e.type,t!==null&&e.stateNode!=null)Lv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(de(166));return qt(e),null}if(t=Lr(ci.current),Ba(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[li]=e,i[sa]=o,t=(e.mode&1)!==0,n){case"dialog":st("cancel",i),st("close",i);break;case"iframe":case"object":case"embed":st("load",i);break;case"video":case"audio":for(r=0;r<Us.length;r++)st(Us[r],i);break;case"source":st("error",i);break;case"img":case"image":case"link":st("error",i),st("load",i);break;case"details":st("toggle",i);break;case"input":Hh(i,o),st("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},st("invalid",i);break;case"textarea":Vh(i,o),st("invalid",i)}Sf(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&za(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&za(i.textContent,a,t),r=["children",""+a]):Ks.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&st("scroll",i)}switch(n){case"input":La(i),Gh(i,o,!0);break;case"textarea":La(i),Wh(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=jl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=s0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[li]=e,t[sa]=i,Pv(t,e,!1,!1),e.stateNode=t;e:{switch(s=Mf(n,i),n){case"dialog":st("cancel",t),st("close",t),r=i;break;case"iframe":case"object":case"embed":st("load",t),r=i;break;case"video":case"audio":for(r=0;r<Us.length;r++)st(Us[r],t);r=i;break;case"source":st("error",t),r=i;break;case"img":case"image":case"link":st("error",t),st("load",t),r=i;break;case"details":st("toggle",t),r=i;break;case"input":Hh(t,i),r=gf(t,i),st("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),st("invalid",t);break;case"textarea":Vh(t,i),r=yf(t,i),st("invalid",t);break;default:r=i}Sf(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?u0(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&a0(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Zs(t,l):typeof l=="number"&&Zs(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ks.hasOwnProperty(o)?l!=null&&o==="onScroll"&&st("scroll",t):l!=null&&Rd(t,o,l,s))}switch(n){case"input":La(t),Gh(t,i,!1);break;case"textarea":La(t),Wh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ur(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?zo(t,!!i.multiple,o,!1):i.defaultValue!=null&&zo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=jl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qt(e),null;case 6:if(t&&e.stateNode!=null)Dv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(de(166));if(n=Lr(la.current),Lr(ci.current),Ba(e)){if(i=e.stateNode,n=e.memoizedProps,i[li]=e,(o=i.nodeValue!==n)&&(t=Tn,t!==null))switch(t.tag){case 3:za(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&za(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[li]=e,e.stateNode=i}return qt(e),null;case 13:if(lt(dt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ct&&wn!==null&&e.mode&1&&!(e.flags&128))K0(),Zo(),e.flags|=98560,o=!1;else if(o=Ba(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(de(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(de(317));o[li]=e}else Zo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),o=!1}else Zn!==null&&(nd(Zn),Zn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||dt.current&1?Ct===0&&(Ct=3):uh())),e.updateQueue!==null&&(e.flags|=4),qt(e),null);case 4:return Qo(),qf(t,e),t===null&&ra(e.stateNode.containerInfo),qt(e),null;case 10:return jd(e.type._context),qt(e),null;case 17:return gn(e.type)&&Yl(),qt(e),null;case 19:if(lt(dt),o=e.memoizedState,o===null)return qt(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)Es(o,!1);else{if(Ct!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=eu(t),s!==null){for(e.flags|=128,Es(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ot(dt,dt.current&1|2),e.child}t=t.sibling}o.tail!==null&&wt()>ts&&(e.flags|=128,i=!0,Es(o,!1),e.lanes=4194304)}else{if(!i)if(t=eu(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Es(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ct)return qt(e),null}else 2*wt()-o.renderingStartTime>ts&&n!==1073741824&&(e.flags|=128,i=!0,Es(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=wt(),e.sibling=null,n=dt.current,ot(dt,i?n&1|2:n&1),e):(qt(e),null);case 22:case 23:return lh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?En&1073741824&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),null;case 24:return null;case 25:return null}throw Error(de(156,e.tag))}function gS(t,e){switch(Gd(e),e.tag){case 1:return gn(e.type)&&Yl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qo(),lt(mn),lt(en),Zd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Kd(e),null;case 13:if(lt(dt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(de(340));Zo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return lt(dt),null;case 4:return Qo(),null;case 10:return jd(e.type._context),null;case 22:case 23:return lh(),null;case 24:return null;default:return null}}var Va=!1,Jt=!1,vS=typeof WeakSet=="function"?WeakSet:Set,we=null;function Io(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){yt(t,e,i)}else n.current=null}function $f(t,e,n){try{n()}catch(i){yt(t,e,i)}}var Ip=!1;function _S(t,e){if(Df=Vl,t=F0(),Bd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=s+r),h!==o||i!==0&&h.nodeType!==3||(l=s+i),h.nodeType===3&&(s+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===r&&(a=s),d===o&&++c===i&&(l=s),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(If={focusedElem:t,selectionRange:n},Vl=!1,we=e;we!==null;)if(e=we,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,we=t;else for(;we!==null;){e=we;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,g=m.memoizedState,f=e.stateNode,x=f.getSnapshotBeforeUpdate(e.elementType===e.type?y:$n(e.type,y),g);f.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(de(163))}}catch(_){yt(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,we=t;break}we=e.return}return m=Ip,Ip=!1,m}function Vs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&$f(e,n,o)}r=r.next}while(r!==i)}}function Cu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Kf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Iv(t){var e=t.alternate;e!==null&&(t.alternate=null,Iv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[li],delete e[sa],delete e[Of],delete e[eS],delete e[tS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Nv(t){return t.tag===5||t.tag===3||t.tag===4}function Np(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Nv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=jl));else if(i!==4&&(t=t.child,t!==null))for(Zf(t,e,n),t=t.sibling;t!==null;)Zf(t,e,n),t=t.sibling}function Jf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Jf(t,e,n),t=t.sibling;t!==null;)Jf(t,e,n),t=t.sibling}var Ht=null,Kn=!1;function Oi(t,e,n){for(n=n.child;n!==null;)Uv(t,e,n),n=n.sibling}function Uv(t,e,n){if(ui&&typeof ui.onCommitFiberUnmount=="function")try{ui.onCommitFiberUnmount(Su,n)}catch{}switch(n.tag){case 5:Jt||Io(n,e);case 6:var i=Ht,r=Kn;Ht=null,Oi(t,e,n),Ht=i,Kn=r,Ht!==null&&(Kn?(t=Ht,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ht.removeChild(n.stateNode));break;case 18:Ht!==null&&(Kn?(t=Ht,n=n.stateNode,t.nodeType===8?dc(t.parentNode,n):t.nodeType===1&&dc(t,n),ta(t)):dc(Ht,n.stateNode));break;case 4:i=Ht,r=Kn,Ht=n.stateNode.containerInfo,Kn=!0,Oi(t,e,n),Ht=i,Kn=r;break;case 0:case 11:case 14:case 15:if(!Jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&$f(n,e,s),r=r.next}while(r!==i)}Oi(t,e,n);break;case 1:if(!Jt&&(Io(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){yt(n,e,a)}Oi(t,e,n);break;case 21:Oi(t,e,n);break;case 22:n.mode&1?(Jt=(i=Jt)||n.memoizedState!==null,Oi(t,e,n),Jt=i):Oi(t,e,n);break;default:Oi(t,e,n)}}function Up(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new vS),e.forEach(function(i){var r=RS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Xn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Ht=a.stateNode,Kn=!1;break e;case 3:Ht=a.stateNode.containerInfo,Kn=!0;break e;case 4:Ht=a.stateNode.containerInfo,Kn=!0;break e}a=a.return}if(Ht===null)throw Error(de(160));Uv(o,s,r),Ht=null,Kn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){yt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ov(e,t),e=e.sibling}function Ov(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Xn(e,t),oi(t),i&4){try{Vs(3,t,t.return),Cu(3,t)}catch(y){yt(t,t.return,y)}try{Vs(5,t,t.return)}catch(y){yt(t,t.return,y)}}break;case 1:Xn(e,t),oi(t),i&512&&n!==null&&Io(n,n.return);break;case 5:if(Xn(e,t),oi(t),i&512&&n!==null&&Io(n,n.return),t.flags&32){var r=t.stateNode;try{Zs(r,"")}catch(y){yt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&r0(r,o),Mf(a,s);var u=Mf(a,o);for(s=0;s<l.length;s+=2){var c=l[s],h=l[s+1];c==="style"?u0(r,h):c==="dangerouslySetInnerHTML"?a0(r,h):c==="children"?Zs(r,h):Rd(r,c,h,u)}switch(a){case"input":vf(r,o);break;case"textarea":o0(r,o);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?zo(r,!!o.multiple,p,!1):d!==!!o.multiple&&(o.defaultValue!=null?zo(r,!!o.multiple,o.defaultValue,!0):zo(r,!!o.multiple,o.multiple?[]:"",!1))}r[sa]=o}catch(y){yt(t,t.return,y)}}break;case 6:if(Xn(e,t),oi(t),i&4){if(t.stateNode===null)throw Error(de(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(y){yt(t,t.return,y)}}break;case 3:if(Xn(e,t),oi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ta(e.containerInfo)}catch(y){yt(t,t.return,y)}break;case 4:Xn(e,t),oi(t);break;case 13:Xn(e,t),oi(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(sh=wt())),i&4&&Up(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Jt=(u=Jt)||c,Xn(e,t),Jt=u):Xn(e,t),oi(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(we=t,c=t.child;c!==null;){for(h=we=c;we!==null;){switch(d=we,p=d.child,d.tag){case 0:case 11:case 14:case 15:Vs(4,d,d.return);break;case 1:Io(d,d.return);var m=d.stateNode;if(typeof m.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(y){yt(i,n,y)}}break;case 5:Io(d,d.return);break;case 22:if(d.memoizedState!==null){Fp(h);continue}}p!==null?(p.return=d,we=p):Fp(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{r=h.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=l0("display",s))}catch(y){yt(t,t.return,y)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){yt(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Xn(e,t),oi(t),i&4&&Up(t);break;case 21:break;default:Xn(e,t),oi(t)}}function oi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Nv(n)){var i=n;break e}n=n.return}throw Error(de(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Zs(r,""),i.flags&=-33);var o=Np(t);Jf(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=Np(t);Zf(t,a,s);break;default:throw Error(de(161))}}catch(l){yt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function yS(t,e,n){we=t,Fv(t)}function Fv(t,e,n){for(var i=(t.mode&1)!==0;we!==null;){var r=we,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||Va;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Jt;a=Va;var u=Jt;if(Va=s,(Jt=l)&&!u)for(we=r;we!==null;)s=we,l=s.child,s.tag===22&&s.memoizedState!==null?kp(r):l!==null?(l.return=s,we=l):kp(r);for(;o!==null;)we=o,Fv(o),o=o.sibling;we=r,Va=a,Jt=u}Op(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,we=o):Op(t)}}function Op(t){for(;we!==null;){var e=we;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Jt||Cu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:$n(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&xp(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}xp(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&ta(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(de(163))}Jt||e.flags&512&&Kf(e)}catch(d){yt(e,e.return,d)}}if(e===t){we=null;break}if(n=e.sibling,n!==null){n.return=e.return,we=n;break}we=e.return}}function Fp(t){for(;we!==null;){var e=we;if(e===t){we=null;break}var n=e.sibling;if(n!==null){n.return=e.return,we=n;break}we=e.return}}function kp(t){for(;we!==null;){var e=we;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Cu(4,e)}catch(l){yt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var o=e.return;try{Kf(e)}catch(l){yt(e,o,l)}break;case 5:var s=e.return;try{Kf(e)}catch(l){yt(e,s,l)}}}catch(l){yt(e,e.return,l)}if(e===t){we=null;break}var a=e.sibling;if(a!==null){a.return=e.return,we=a;break}we=e.return}}var xS=Math.ceil,iu=Ui.ReactCurrentDispatcher,rh=Ui.ReactCurrentOwner,Bn=Ui.ReactCurrentBatchConfig,Ke=0,zt=null,At=null,Wt=0,En=0,No=hr(0),Ct=0,da=null,Gr=0,Pu=0,oh=0,Ws=null,fn=null,sh=0,ts=1/0,xi=null,ru=!1,Qf=null,nr=null,Wa=!1,Yi=null,ou=0,Xs=0,ed=null,Il=-1,Nl=0;function ln(){return Ke&6?wt():Il!==-1?Il:Il=wt()}function ir(t){return t.mode&1?Ke&2&&Wt!==0?Wt&-Wt:iS.transition!==null?(Nl===0&&(Nl=S0()),Nl):(t=Qe,t!==0||(t=window.event,t=t===void 0?16:b0(t.type)),t):1}function ni(t,e,n,i){if(50<Xs)throw Xs=0,ed=null,Error(de(185));Sa(t,n,i),(!(Ke&2)||t!==zt)&&(t===zt&&(!(Ke&2)&&(Pu|=n),Ct===4&&Xi(t,Wt)),vn(t,i),n===1&&Ke===0&&!(e.mode&1)&&(ts=wt()+500,Au&&pr()))}function vn(t,e){var n=t.callbackNode;ix(t,e);var i=Gl(t,t===zt?Wt:0);if(i===0)n!==null&&Yh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Yh(n),e===1)t.tag===0?nS(zp.bind(null,t)):Y0(zp.bind(null,t)),Jx(function(){!(Ke&6)&&pr()}),n=null;else{switch(M0(i)){case 1:n=Dd;break;case 4:n=y0;break;case 16:n=Hl;break;case 536870912:n=x0;break;default:n=Hl}n=Xv(n,kv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function kv(t,e){if(Il=-1,Nl=0,Ke&6)throw Error(de(327));var n=t.callbackNode;if(Wo()&&t.callbackNode!==n)return null;var i=Gl(t,t===zt?Wt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=su(t,i);else{e=i;var r=Ke;Ke|=2;var o=Bv();(zt!==t||Wt!==e)&&(xi=null,ts=wt()+500,Nr(t,e));do try{ES();break}catch(a){zv(t,a)}while(!0);Xd(),iu.current=o,Ke=r,At!==null?e=0:(zt=null,Wt=0,e=Ct)}if(e!==0){if(e===2&&(r=Rf(t),r!==0&&(i=r,e=td(t,r))),e===1)throw n=da,Nr(t,0),Xi(t,i),vn(t,wt()),n;if(e===6)Xi(t,i);else{if(r=t.current.alternate,!(i&30)&&!SS(r)&&(e=su(t,i),e===2&&(o=Rf(t),o!==0&&(i=o,e=td(t,o))),e===1))throw n=da,Nr(t,0),Xi(t,i),vn(t,wt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(de(345));case 2:Er(t,fn,xi);break;case 3:if(Xi(t,i),(i&130023424)===i&&(e=sh+500-wt(),10<e)){if(Gl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){ln(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Uf(Er.bind(null,t,fn,xi),e);break}Er(t,fn,xi);break;case 4:if(Xi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-ti(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*xS(i/1960))-i,10<i){t.timeoutHandle=Uf(Er.bind(null,t,fn,xi),i);break}Er(t,fn,xi);break;case 5:Er(t,fn,xi);break;default:throw Error(de(329))}}}return vn(t,wt()),t.callbackNode===n?kv.bind(null,t):null}function td(t,e){var n=Ws;return t.current.memoizedState.isDehydrated&&(Nr(t,e).flags|=256),t=su(t,e),t!==2&&(e=fn,fn=n,e!==null&&nd(e)),t}function nd(t){fn===null?fn=t:fn.push.apply(fn,t)}function SS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!ii(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xi(t,e){for(e&=~oh,e&=~Pu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ti(e),i=1<<n;t[n]=-1,e&=~i}}function zp(t){if(Ke&6)throw Error(de(327));Wo();var e=Gl(t,0);if(!(e&1))return vn(t,wt()),null;var n=su(t,e);if(t.tag!==0&&n===2){var i=Rf(t);i!==0&&(e=i,n=td(t,i))}if(n===1)throw n=da,Nr(t,0),Xi(t,e),vn(t,wt()),n;if(n===6)throw Error(de(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Er(t,fn,xi),vn(t,wt()),null}function ah(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(ts=wt()+500,Au&&pr())}}function Vr(t){Yi!==null&&Yi.tag===0&&!(Ke&6)&&Wo();var e=Ke;Ke|=1;var n=Bn.transition,i=Qe;try{if(Bn.transition=null,Qe=1,t)return t()}finally{Qe=i,Bn.transition=n,Ke=e,!(Ke&6)&&pr()}}function lh(){En=No.current,lt(No)}function Nr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Zx(n)),At!==null)for(n=At.return;n!==null;){var i=n;switch(Gd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Yl();break;case 3:Qo(),lt(mn),lt(en),Zd();break;case 5:Kd(i);break;case 4:Qo();break;case 13:lt(dt);break;case 19:lt(dt);break;case 10:jd(i.type._context);break;case 22:case 23:lh()}n=n.return}if(zt=t,At=t=rr(t.current,null),Wt=En=e,Ct=0,da=null,oh=Pu=Gr=0,fn=Ws=null,Pr!==null){for(e=0;e<Pr.length;e++)if(n=Pr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}Pr=null}return t}function zv(t,e){do{var n=At;try{if(Xd(),Pl.current=nu,tu){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}tu=!1}if(Hr=0,Ot=bt=mt=null,Gs=!1,ua=0,rh.current=null,n===null||n.return===null){Ct=1,da=e,At=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Wt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Ap(s);if(p!==null){p.flags&=-257,Rp(p,s,a,o,e),p.mode&1&&Tp(o,u,e),e=p,l=u;var m=e.updateQueue;if(m===null){var y=new Set;y.add(l),e.updateQueue=y}else m.add(l);break e}else{if(!(e&1)){Tp(o,u,e),uh();break e}l=Error(de(426))}}else if(ct&&a.mode&1){var g=Ap(s);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Rp(g,s,a,o,e),Vd(es(l,a));break e}}o=l=es(l,a),Ct!==4&&(Ct=2),Ws===null?Ws=[o]:Ws.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var f=Mv(o,l,e);yp(o,f);break e;case 1:a=l;var x=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(nr===null||!nr.has(v)))){o.flags|=65536,e&=-e,o.lanes|=e;var _=Ev(o,a,e);yp(o,_);break e}}o=o.return}while(o!==null)}Gv(n)}catch(b){e=b,At===n&&n!==null&&(At=n=n.return);continue}break}while(!0)}function Bv(){var t=iu.current;return iu.current=nu,t===null?nu:t}function uh(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),zt===null||!(Gr&268435455)&&!(Pu&268435455)||Xi(zt,Wt)}function su(t,e){var n=Ke;Ke|=2;var i=Bv();(zt!==t||Wt!==e)&&(xi=null,Nr(t,e));do try{MS();break}catch(r){zv(t,r)}while(!0);if(Xd(),Ke=n,iu.current=i,At!==null)throw Error(de(261));return zt=null,Wt=0,Ct}function MS(){for(;At!==null;)Hv(At)}function ES(){for(;At!==null&&!qy();)Hv(At)}function Hv(t){var e=Wv(t.alternate,t,En);t.memoizedProps=t.pendingProps,e===null?Gv(t):At=e,rh.current=null}function Gv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=gS(n,e),n!==null){n.flags&=32767,At=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ct=6,At=null;return}}else if(n=mS(n,e,En),n!==null){At=n;return}if(e=e.sibling,e!==null){At=e;return}At=e=t}while(e!==null);Ct===0&&(Ct=5)}function Er(t,e,n){var i=Qe,r=Bn.transition;try{Bn.transition=null,Qe=1,wS(t,e,n,i)}finally{Bn.transition=r,Qe=i}return null}function wS(t,e,n,i){do Wo();while(Yi!==null);if(Ke&6)throw Error(de(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(de(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(rx(t,o),t===zt&&(At=zt=null,Wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wa||(Wa=!0,Xv(Hl,function(){return Wo(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Bn.transition,Bn.transition=null;var s=Qe;Qe=1;var a=Ke;Ke|=4,rh.current=null,_S(t,n),Ov(n,t),Wx(If),Vl=!!Df,If=Df=null,t.current=n,yS(n),$y(),Ke=a,Qe=s,Bn.transition=o}else t.current=n;if(Wa&&(Wa=!1,Yi=t,ou=r),o=t.pendingLanes,o===0&&(nr=null),Jy(n.stateNode),vn(t,wt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ru)throw ru=!1,t=Qf,Qf=null,t;return ou&1&&t.tag!==0&&Wo(),o=t.pendingLanes,o&1?t===ed?Xs++:(Xs=0,ed=t):Xs=0,pr(),null}function Wo(){if(Yi!==null){var t=M0(ou),e=Bn.transition,n=Qe;try{if(Bn.transition=null,Qe=16>t?16:t,Yi===null)var i=!1;else{if(t=Yi,Yi=null,ou=0,Ke&6)throw Error(de(331));var r=Ke;for(Ke|=4,we=t.current;we!==null;){var o=we,s=o.child;if(we.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(we=u;we!==null;){var c=we;switch(c.tag){case 0:case 11:case 15:Vs(8,c,o)}var h=c.child;if(h!==null)h.return=c,we=h;else for(;we!==null;){c=we;var d=c.sibling,p=c.return;if(Iv(c),c===u){we=null;break}if(d!==null){d.return=p,we=d;break}we=p}}}var m=o.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}we=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,we=s;else e:for(;we!==null;){if(o=we,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Vs(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,we=f;break e}we=o.return}}var x=t.current;for(we=x;we!==null;){s=we;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,we=v;else e:for(s=x;we!==null;){if(a=we,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Cu(9,a)}}catch(b){yt(a,a.return,b)}if(a===s){we=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,we=_;break e}we=a.return}}if(Ke=r,pr(),ui&&typeof ui.onPostCommitFiberRoot=="function")try{ui.onPostCommitFiberRoot(Su,t)}catch{}i=!0}return i}finally{Qe=n,Bn.transition=e}}return!1}function Bp(t,e,n){e=es(n,e),e=Mv(t,e,1),t=tr(t,e,1),e=ln(),t!==null&&(Sa(t,1,e),vn(t,e))}function yt(t,e,n){if(t.tag===3)Bp(t,t,n);else for(;e!==null;){if(e.tag===3){Bp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(nr===null||!nr.has(i))){t=es(n,t),t=Ev(e,t,1),e=tr(e,t,1),t=ln(),e!==null&&(Sa(e,1,t),vn(e,t));break}}e=e.return}}function TS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=ln(),t.pingedLanes|=t.suspendedLanes&n,zt===t&&(Wt&n)===n&&(Ct===4||Ct===3&&(Wt&130023424)===Wt&&500>wt()-sh?Nr(t,0):oh|=n),vn(t,e)}function Vv(t,e){e===0&&(t.mode&1?(e=Na,Na<<=1,!(Na&130023424)&&(Na=4194304)):e=1);var n=ln();t=Di(t,e),t!==null&&(Sa(t,e,n),vn(t,n))}function AS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Vv(t,n)}function RS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(de(314))}i!==null&&i.delete(e),Vv(t,n)}var Wv;Wv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mn.current)pn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pn=!1,pS(t,e,n);pn=!!(t.flags&131072)}else pn=!1,ct&&e.flags&1048576&&q0(e,Kl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Dl(t,e),t=e.pendingProps;var r=Ko(e,en.current);Vo(e,n),r=Qd(null,e,i,t,r,n);var o=eh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gn(i)?(o=!0,ql(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,qd(e),r.updater=bu,e.stateNode=r,r._reactInternals=e,Gf(e,i,t,n),e=Xf(null,e,i,!0,o,n)):(e.tag=0,ct&&o&&Hd(e),sn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Dl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=CS(i),t=$n(i,t),r){case 0:e=Wf(null,e,i,t,n);break e;case 1:e=Pp(null,e,i,t,n);break e;case 11:e=bp(null,e,i,t,n);break e;case 14:e=Cp(null,e,i,$n(i.type,t),n);break e}throw Error(de(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),Wf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),Pp(t,e,i,r,n);case 3:e:{if(Rv(e),t===null)throw Error(de(387));i=e.pendingProps,o=e.memoizedState,r=o.element,ev(t,e),Ql(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=es(Error(de(423)),e),e=Lp(t,e,i,n,r);break e}else if(i!==r){r=es(Error(de(424)),e),e=Lp(t,e,i,n,r);break e}else for(wn=er(e.stateNode.containerInfo.firstChild),Tn=e,ct=!0,Zn=null,n=J0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zo(),i===r){e=Ii(t,e,n);break e}sn(t,e,i,n)}e=e.child}return e;case 5:return tv(e),t===null&&zf(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,Nf(i,r)?s=null:o!==null&&Nf(i,o)&&(e.flags|=32),Av(t,e),sn(t,e,s,n),e.child;case 6:return t===null&&zf(e),null;case 13:return bv(t,e,n);case 4:return $d(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Jo(e,null,i,n):sn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),bp(t,e,i,r,n);case 7:return sn(t,e,e.pendingProps,n),e.child;case 8:return sn(t,e,e.pendingProps.children,n),e.child;case 12:return sn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,ot(Zl,i._currentValue),i._currentValue=s,o!==null)if(ii(o.value,s)){if(o.children===r.children&&!mn.current){e=Ii(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=bi(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Bf(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(de(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Bf(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}sn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Vo(e,n),r=Gn(r),i=i(r),e.flags|=1,sn(t,e,i,n),e.child;case 14:return i=e.type,r=$n(i,e.pendingProps),r=$n(i.type,r),Cp(t,e,i,r,n);case 15:return wv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),Dl(t,e),e.tag=1,gn(i)?(t=!0,ql(e)):t=!1,Vo(e,n),Sv(e,i,r),Gf(e,i,r,n),Xf(null,e,i,!0,t,n);case 19:return Cv(t,e,n);case 22:return Tv(t,e,n)}throw Error(de(156,e.tag))};function Xv(t,e){return _0(t,e)}function bS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,e,n,i){return new bS(t,e,n,i)}function ch(t){return t=t.prototype,!(!t||!t.isReactComponent)}function CS(t){if(typeof t=="function")return ch(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Cd)return 11;if(t===Pd)return 14}return 2}function rr(t,e){var n=t.alternate;return n===null?(n=kn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ul(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")ch(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case wo:return Ur(n.children,r,o,e);case bd:s=8,r|=8;break;case df:return t=kn(12,n,e,r|2),t.elementType=df,t.lanes=o,t;case hf:return t=kn(13,n,e,r),t.elementType=hf,t.lanes=o,t;case pf:return t=kn(19,n,e,r),t.elementType=pf,t.lanes=o,t;case t0:return Lu(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Qg:s=10;break e;case e0:s=9;break e;case Cd:s=11;break e;case Pd:s=14;break e;case Gi:s=16,i=null;break e}throw Error(de(130,t==null?t:typeof t,""))}return e=kn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function Ur(t,e,n,i){return t=kn(7,t,i,e),t.lanes=n,t}function Lu(t,e,n,i){return t=kn(22,t,i,e),t.elementType=t0,t.lanes=n,t.stateNode={isHidden:!1},t}function xc(t,e,n){return t=kn(6,t,null,e),t.lanes=n,t}function Sc(t,e,n){return e=kn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function PS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tc(0),this.expirationTimes=tc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function fh(t,e,n,i,r,o,s,a,l){return t=new PS(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=kn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qd(o),t}function LS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Eo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function jv(t){if(!t)return cr;t=t._reactInternals;e:{if(Kr(t)!==t||t.tag!==1)throw Error(de(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(de(171))}if(t.tag===1){var n=t.type;if(gn(n))return j0(t,n,e)}return e}function Yv(t,e,n,i,r,o,s,a,l){return t=fh(n,i,!0,t,r,o,s,a,l),t.context=jv(null),n=t.current,i=ln(),r=ir(n),o=bi(i,r),o.callback=e??null,tr(n,o,r),t.current.lanes=r,Sa(t,r,i),vn(t,i),t}function Du(t,e,n,i){var r=e.current,o=ln(),s=ir(r);return n=jv(n),e.context===null?e.context=n:e.pendingContext=n,e=bi(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=tr(r,e,s),t!==null&&(ni(t,r,s,o),Cl(t,r,s)),s}function au(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Hp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function dh(t,e){Hp(t,e),(t=t.alternate)&&Hp(t,e)}function DS(){return null}var qv=typeof reportError=="function"?reportError:function(t){console.error(t)};function hh(t){this._internalRoot=t}Iu.prototype.render=hh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(de(409));Du(t,e,null,null)};Iu.prototype.unmount=hh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vr(function(){Du(null,t,null,null)}),e[Li]=null}};function Iu(t){this._internalRoot=t}Iu.prototype.unstable_scheduleHydration=function(t){if(t){var e=T0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wi.length&&e!==0&&e<Wi[n].priority;n++);Wi.splice(n,0,t),n===0&&R0(t)}};function ph(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Nu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Gp(){}function IS(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=au(s);o.call(u)}}var s=Yv(e,i,t,0,null,!1,!1,"",Gp);return t._reactRootContainer=s,t[Li]=s.current,ra(t.nodeType===8?t.parentNode:t),Vr(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=au(l);a.call(u)}}var l=fh(t,0,!1,null,null,!1,!1,"",Gp);return t._reactRootContainer=l,t[Li]=l.current,ra(t.nodeType===8?t.parentNode:t),Vr(function(){Du(e,l,n,i)}),l}function Uu(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=au(s);a.call(l)}}Du(e,s,t,r)}else s=IS(n,e,t,r,i);return au(s)}E0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ns(e.pendingLanes);n!==0&&(Id(e,n|1),vn(e,wt()),!(Ke&6)&&(ts=wt()+500,pr()))}break;case 13:Vr(function(){var i=Di(t,1);if(i!==null){var r=ln();ni(i,t,1,r)}}),dh(t,1)}};Nd=function(t){if(t.tag===13){var e=Di(t,134217728);if(e!==null){var n=ln();ni(e,t,134217728,n)}dh(t,134217728)}};w0=function(t){if(t.tag===13){var e=ir(t),n=Di(t,e);if(n!==null){var i=ln();ni(n,t,e,i)}dh(t,e)}};T0=function(){return Qe};A0=function(t,e){var n=Qe;try{return Qe=t,e()}finally{Qe=n}};wf=function(t,e,n){switch(e){case"input":if(vf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Tu(i);if(!r)throw Error(de(90));i0(i),vf(i,r)}}}break;case"textarea":o0(t,n);break;case"select":e=n.value,e!=null&&zo(t,!!n.multiple,e,!1)}};d0=ah;h0=Vr;var NS={usingClientEntryPoint:!1,Events:[Ea,bo,Tu,c0,f0,ah]},ws={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},US={bundleType:ws.bundleType,version:ws.version,rendererPackageName:ws.rendererPackageName,rendererConfig:ws.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ui.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=g0(t),t===null?null:t.stateNode},findFiberByHostInstance:ws.findFiberByHostInstance||DS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xa.isDisabled&&Xa.supportsFiber)try{Su=Xa.inject(US),ui=Xa}catch{}}bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NS;bn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ph(e))throw Error(de(200));return LS(t,e,null,n)};bn.createRoot=function(t,e){if(!ph(t))throw Error(de(299));var n=!1,i="",r=qv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=fh(t,1,!1,null,null,n,!1,i,r),t[Li]=e.current,ra(t.nodeType===8?t.parentNode:t),new hh(e)};bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(de(188)):(t=Object.keys(t).join(","),Error(de(268,t)));return t=g0(e),t=t===null?null:t.stateNode,t};bn.flushSync=function(t){return Vr(t)};bn.hydrate=function(t,e,n){if(!Nu(e))throw Error(de(200));return Uu(null,t,e,!0,n)};bn.hydrateRoot=function(t,e,n){if(!ph(t))throw Error(de(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=qv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Yv(e,null,t,1,n??null,r,!1,o,s),t[Li]=e.current,ra(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Iu(e)};bn.render=function(t,e,n){if(!Nu(e))throw Error(de(200));return Uu(null,t,e,!1,n)};bn.unmountComponentAtNode=function(t){if(!Nu(t))throw Error(de(40));return t._reactRootContainer?(Vr(function(){Uu(null,null,t,!1,function(){t._reactRootContainer=null,t[Li]=null})}),!0):!1};bn.unstable_batchedUpdates=ah;bn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Nu(n))throw Error(de(200));if(t==null||t._reactInternals===void 0)throw Error(de(38));return Uu(t,e,n,!1,i)};bn.version="18.3.1-next-f1338f8080-20240426";function $v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($v)}catch(t){console.error(t)}}$v(),$g.exports=bn;var OS=$g.exports,Kv,Vp=OS;Kv=Vp.createRoot,Vp.hydrateRoot;async function fs(t,e){const n=await fetch(t,{credentials:"include",...e});let i=null;try{i=await n.json()}catch{}return{ok:n.ok,status:n.status,data:i}}function FS(){return fs("/api/me")}function kS(){return fs("/api/me?view=engineer&list=1")}function zS(t){return fs("/api/me?view=engineer&projectId="+encodeURIComponent(t))}function BS(t,e){return fs("/api/me",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"engineer_save",projectId:t||void 0,project:e})})}function HS(t){return fs("/api/me",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"engineer_delete",projectId:t})})}function GS(){return fs("/api/create-checkout-session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({kind:"engineer",plan:"annual",return_page:"engineers/index.html"})})}function VS({status:t,t:e}){const[n,i]=be.useState(!1),[r,o]=be.useState(null);async function s(){i(!0),o(null);const l=await GS();if(l.status===401){window.location.href="/lamsa-auth.html";return}if(!l.ok||!l.data||!l.data.url){o(l.data&&l.data.error||e("Something went wrong, please try again")),i(!1);return}window.location.href=l.data.url}const a=t==="canceled"||t==="past_due"||t==="unpaid";return oe.jsxs("div",{style:{maxWidth:480,margin:"80px auto",padding:24,textAlign:"center",fontFamily:"sans-serif"},children:[oe.jsx("h1",{style:{fontSize:24,fontWeight:900,marginBottom:8},children:e("Lamsa Engineers")}),oe.jsx("p",{style:{color:"#6b7280",marginBottom:24},children:e(a?"Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Design complete floor plans, preview them in 3D, and export real architectural deliverables.")}),oe.jsxs("ul",{style:{textAlign:"start",listStyle:"none",padding:0,marginBottom:28,color:"#374151",fontSize:14},children:[oe.jsxs("li",{children:["— ",e("Rectangular rooms, doors & windows, single-floor plans")]}),oe.jsxs("li",{children:["— ",e("Live 3D preview of your design")]}),oe.jsxs("li",{children:["— ",e("Printable floor plan export")]}),oe.jsxs("li",{children:["— ",e("Use Lamsa's existing furniture-styling tools per room")]})]}),oe.jsxs("div",{style:{fontSize:28,fontWeight:900,marginBottom:4},children:["$250",oe.jsxs("span",{style:{fontSize:14,fontWeight:600,color:"#6b7280"},children:[" ",e("/ year")]})]}),oe.jsx("div",{style:{fontSize:13,color:"#6b7280",marginBottom:20},children:e("14-day free trial, cancel anytime")}),oe.jsx("button",{type:"button",onClick:s,disabled:n,style:{width:"100%",background:"#c9a96e",color:"#1b1e22",border:"none",padding:16,borderRadius:14,fontSize:16,fontWeight:900,cursor:"pointer",opacity:n?.6:1},children:e(n?"Starting…":"Start free trial")}),r&&oe.jsx("div",{style:{color:"#e05555",fontSize:13,marginTop:10},children:r})]})}function WS({projects:t,onOpen:e,onCreate:n,onDelete:i,t:r}){return oe.jsxs("div",{style:{maxWidth:720,margin:"40px auto",padding:24,fontFamily:"sans-serif"},children:[oe.jsxs("a",{href:"/lamsa-bilingual.html",style:{display:"inline-flex",alignItems:"center",gap:6,color:"#6b7280",fontSize:13,fontWeight:700,textDecoration:"none",marginBottom:16},children:["← ",r("Back to Home")]}),oe.jsxs("div",{style:{display:"flex",flexWrap:"wrap",rowGap:10,justifyContent:"space-between",alignItems:"center",marginBottom:20},children:[oe.jsx("h1",{style:{fontSize:22,fontWeight:900},children:r("Your Projects")}),oe.jsxs("button",{type:"button",onClick:n,style:{background:"#c9a96e",color:"#1b1e22",border:"none",padding:"10px 18px",borderRadius:10,fontWeight:800,cursor:"pointer"},children:["+ ",r("New Project")]})]}),t.length===0&&oe.jsx("div",{style:{color:"#6b7280",textAlign:"center",padding:40},children:r("No projects yet — create your first one.")}),oe.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:14},children:t.map(o=>oe.jsxs("div",{style:{border:"1px solid #e5e7eb",borderRadius:12,padding:16,cursor:"pointer"},onClick:()=>e(o.id),children:[oe.jsx("div",{style:{fontWeight:800,marginBottom:6},children:o.name}),oe.jsx("div",{style:{fontSize:12,color:"#9ca3af",marginBottom:10},children:o.updatedAt?new Date(o.updatedAt).toLocaleDateString():""}),oe.jsx("button",{type:"button",onClick:s=>{s.stopPropagation(),i(o.id)},style:{fontSize:12,color:"#e05555",background:"none",border:"none",cursor:"pointer",padding:0},children:r("Delete")})]},o.id))})]})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mh="160",XS=0,Wp=1,jS=2,Zv=1,Jv=2,yi=3,fr=0,_n=1,dn=2,or=0,Xo=1,Xp=2,jp=3,Yp=4,YS=5,Rr=100,qS=101,$S=102,qp=103,$p=104,KS=200,ZS=201,JS=202,QS=203,id=204,rd=205,eM=206,tM=207,nM=208,iM=209,rM=210,oM=211,sM=212,aM=213,lM=214,uM=0,cM=1,fM=2,lu=3,dM=4,hM=5,pM=6,mM=7,Qv=0,gM=1,vM=2,sr=0,_M=1,yM=2,xM=3,SM=4,MM=5,EM=6,e_=300,ns=301,is=302,od=303,sd=304,Ou=306,Wr=1e3,Jn=1001,ad=1002,an=1003,Kp=1004,Mc=1005,Nn=1006,wM=1007,ha=1008,ar=1009,TM=1010,AM=1011,gh=1012,t_=1013,qi=1014,$i=1015,pa=1016,n_=1017,i_=1018,Or=1020,RM=1021,Qn=1023,bM=1024,CM=1025,Fr=1026,rs=1027,PM=1028,r_=1029,LM=1030,o_=1031,s_=1033,Ec=33776,wc=33777,Tc=33778,Ac=33779,Zp=35840,Jp=35841,Qp=35842,em=35843,a_=36196,tm=37492,nm=37496,im=37808,rm=37809,om=37810,sm=37811,am=37812,lm=37813,um=37814,cm=37815,fm=37816,dm=37817,hm=37818,pm=37819,mm=37820,gm=37821,Rc=36492,vm=36494,_m=36495,DM=36283,ym=36284,xm=36285,Sm=36286,l_=3e3,kr=3001,IM=3200,NM=3201,u_=0,UM=1,Fn="",Vt="srgb",Ni="srgb-linear",vh="display-p3",Fu="display-p3-linear",uu="linear",at="srgb",cu="rec709",fu="p3",eo=7680,Mm=519,OM=512,FM=513,kM=514,c_=515,zM=516,BM=517,HM=518,GM=519,ld=35044,Em="300 es",ud=1035,Ri=2e3,du=2001;class ds{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bc=Math.PI/180,cd=180/Math.PI;function Ci(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[t&255]+$t[t>>8&255]+$t[t>>16&255]+$t[t>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[n&63|128]+$t[n>>8&255]+"-"+$t[n>>16&255]+$t[n>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function Qt(t,e,n){return Math.max(e,Math.min(n,t))}function VM(t,e){return(t%e+e)%e}function Cc(t,e,n){return(1-n)*t+n*e}function wm(t){return(t&t-1)===0&&t!==0}function fd(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Ei(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function tt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ge{constructor(e=0,n=0){ge.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,n,i,r,o,s,a,l,u){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u)}set(e,n,i,r,o,s,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=o,c[5]=l,c[6]=i,c[7]=s,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],c=i[4],h=i[7],d=i[2],p=i[5],m=i[8],y=r[0],g=r[3],f=r[6],x=r[1],v=r[4],_=r[7],b=r[2],S=r[5],T=r[8];return o[0]=s*y+a*x+l*b,o[3]=s*g+a*v+l*S,o[6]=s*f+a*_+l*T,o[1]=u*y+c*x+h*b,o[4]=u*g+c*v+h*S,o[7]=u*f+c*_+h*T,o[2]=d*y+p*x+m*b,o[5]=d*g+p*v+m*S,o[8]=d*f+p*_+m*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*s*c-n*a*u-i*o*c+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=c*s-a*u,d=a*l-c*o,p=u*o-s*l,m=n*h+i*d+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/m;return e[0]=h*y,e[1]=(r*u-c*i)*y,e[2]=(a*i-r*s)*y,e[3]=d*y,e[4]=(c*n-r*l)*y,e[5]=(r*o-a*n)*y,e[6]=p*y,e[7]=(i*l-u*n)*y,e[8]=(s*n-i*o)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Pc.makeScale(e,n)),this}rotate(e){return this.premultiply(Pc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Pc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pc=new Ye;function f_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function hu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function WM(){const t=hu("canvas");return t.style.display="block",t}const Tm={};function js(t){t in Tm||(Tm[t]=!0,console.warn(t))}const Am=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Rm=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ja={[Ni]:{transfer:uu,primaries:cu,toReference:t=>t,fromReference:t=>t},[Vt]:{transfer:at,primaries:cu,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Fu]:{transfer:uu,primaries:fu,toReference:t=>t.applyMatrix3(Rm),fromReference:t=>t.applyMatrix3(Am)},[vh]:{transfer:at,primaries:fu,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Rm),fromReference:t=>t.applyMatrix3(Am).convertLinearToSRGB()}},XM=new Set([Ni,Fu]),et={enabled:!0,_workingColorSpace:Ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!XM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ja[e].toReference,r=ja[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ja[t].primaries},getTransfer:function(t){return t===Fn?uu:ja[t].transfer}};function jo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Lc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let to;class d_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{to===void 0&&(to=hu("canvas")),to.width=e.width,to.height=e.height;const i=to.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=to}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=hu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=jo(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(jo(n[i]/255)*255):n[i]=jo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jM=0;class h_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=Ci(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Dc(r[s].image)):o.push(Dc(r[s]))}else o=Dc(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function Dc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?d_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let YM=0;class yn extends ds{constructor(e=yn.DEFAULT_IMAGE,n=yn.DEFAULT_MAPPING,i=Jn,r=Jn,o=Nn,s=ha,a=Qn,l=ar,u=yn.DEFAULT_ANISOTROPY,c=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=Ci(),this.name="",this.source=new h_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(js("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===kr?Vt:Fn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==e_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wr:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case ad:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wr:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case ad:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return js("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Vt?kr:l_}set encoding(e){js("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===kr?Vt:Fn}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=e_;yn.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,n=0,i=0,r=1){Ft.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],c=l[4],h=l[8],d=l[1],p=l[5],m=l[9],y=l[2],g=l[6],f=l[10];if(Math.abs(c-d)<.01&&Math.abs(h-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(c+d)<.1&&Math.abs(h+y)<.1&&Math.abs(m+g)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,_=(p+1)/2,b=(f+1)/2,S=(c+d)/4,T=(h+y)/4,L=(m+g)/4;return v>_&&v>b?v<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(v),r=S/i,o=T/i):_>b?_<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(_),i=S/r,o=L/r):b<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(b),i=T/o,r=L/o),this.set(i,r,o,n),this}let x=Math.sqrt((g-m)*(g-m)+(h-y)*(h-y)+(d-c)*(d-c));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(h-y)/x,this.z=(d-c)/x,this.w=Math.acos((u+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qM extends ds{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ft(0,0,e,n),this.scissorTest=!1,this.viewport=new Ft(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(js("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===kr?Vt:Fn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new yn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new h_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xr extends qM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class p_ extends yn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $M extends yn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ta{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],u=i[r+1],c=i[r+2],h=i[r+3];const d=o[s+0],p=o[s+1],m=o[s+2],y=o[s+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=m,e[n+3]=y;return}if(h!==y||l!==d||u!==p||c!==m){let g=1-a;const f=l*d+u*p+c*m+h*y,x=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const b=Math.sqrt(v),S=Math.atan2(b,f*x);g=Math.sin(g*S)/b,a=Math.sin(a*S)/b}const _=a*x;if(l=l*g+d*_,u=u*g+p*_,c=c*g+m*_,h=h*g+y*_,g===1-a){const b=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=b,u*=b,c*=b,h*=b}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],h=o[s],d=o[s+1],p=o[s+2],m=o[s+3];return e[n]=a*m+c*h+l*p-u*d,e[n+1]=l*m+c*d+u*h-a*p,e[n+2]=u*m+c*p+a*d-l*h,e[n+3]=c*m-a*h-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),h=a(o/2),d=l(i/2),p=l(r/2),m=l(o/2);switch(s){case"XYZ":this._x=d*c*h+u*p*m,this._y=u*p*h-d*c*m,this._z=u*c*m+d*p*h,this._w=u*c*h-d*p*m;break;case"YXZ":this._x=d*c*h+u*p*m,this._y=u*p*h-d*c*m,this._z=u*c*m-d*p*h,this._w=u*c*h+d*p*m;break;case"ZXY":this._x=d*c*h-u*p*m,this._y=u*p*h+d*c*m,this._z=u*c*m+d*p*h,this._w=u*c*h-d*p*m;break;case"ZYX":this._x=d*c*h-u*p*m,this._y=u*p*h+d*c*m,this._z=u*c*m-d*p*h,this._w=u*c*h+d*p*m;break;case"YZX":this._x=d*c*h+u*p*m,this._y=u*p*h+d*c*m,this._z=u*c*m-d*p*h,this._w=u*c*h-d*p*m;break;case"XZY":this._x=d*c*h-u*p*m,this._y=u*p*h-d*c*m,this._z=u*c*m+d*p*h,this._w=u*c*h+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],u=n[2],c=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(o-u)*p,this._z=(s-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(c-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(o+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(o-u)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(s-r)/p,this._x=(o+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+s*a+r*u-o*l,this._y=r*c+s*l+o*a-i*u,this._z=o*c+s*u+i*l-r*a,this._w=s*c-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*o+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-n)*c)/u,d=Math.sin(n*c)/u;return this._w=s*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=o*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(o),i*Math.cos(o),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(bm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(bm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=2*(s*r-a*i),c=2*(a*n-o*r),h=2*(o*i-s*n);return this.x=n+l*u+s*h-a*c,this.y=i+l*c+a*u-o*h,this.z=r+l*h+o*c-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ic.copy(this).projectOnVector(e),this.sub(Ic)}reflect(e){return this.sub(Ic.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ic=new F,bm=new Ta;class Aa{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,jn):jn.fromBufferAttribute(o,s),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ya.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ya.copy(i.boundingBox)),Ya.applyMatrix4(e.matrixWorld),this.union(Ya)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ts),qa.subVectors(this.max,Ts),no.subVectors(e.a,Ts),io.subVectors(e.b,Ts),ro.subVectors(e.c,Ts),Fi.subVectors(io,no),ki.subVectors(ro,io),vr.subVectors(no,ro);let n=[0,-Fi.z,Fi.y,0,-ki.z,ki.y,0,-vr.z,vr.y,Fi.z,0,-Fi.x,ki.z,0,-ki.x,vr.z,0,-vr.x,-Fi.y,Fi.x,0,-ki.y,ki.x,0,-vr.y,vr.x,0];return!Nc(n,no,io,ro,qa)||(n=[1,0,0,0,1,0,0,0,1],!Nc(n,no,io,ro,qa))?!1:($a.crossVectors(Fi,ki),n=[$a.x,$a.y,$a.z],Nc(n,no,io,ro,qa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pi=[new F,new F,new F,new F,new F,new F,new F,new F],jn=new F,Ya=new Aa,no=new F,io=new F,ro=new F,Fi=new F,ki=new F,vr=new F,Ts=new F,qa=new F,$a=new F,_r=new F;function Nc(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){_r.fromArray(t,o);const a=r.x*Math.abs(_r.x)+r.y*Math.abs(_r.y)+r.z*Math.abs(_r.z),l=e.dot(_r),u=n.dot(_r),c=i.dot(_r);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const KM=new Aa,As=new F,Uc=new F;class ku{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):KM.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;As.subVectors(e,this.center);const n=As.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(As,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(As.copy(e.center).add(Uc)),this.expandByPoint(As.copy(e.center).sub(Uc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mi=new F,Oc=new F,Ka=new F,zi=new F,Fc=new F,Za=new F,kc=new F;class m_{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,n),mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Oc.copy(e).add(n).multiplyScalar(.5),Ka.copy(n).sub(e).normalize(),zi.copy(this.origin).sub(Oc);const o=e.distanceTo(n)*.5,s=-this.direction.dot(Ka),a=zi.dot(this.direction),l=-zi.dot(Ka),u=zi.lengthSq(),c=Math.abs(1-s*s);let h,d,p,m;if(c>0)if(h=s*l-a,d=s*a-l,m=o*c,h>=0)if(d>=-m)if(d<=m){const y=1/c;h*=y,d*=y,p=h*(h+s*d+2*a)+d*(s*h+d+2*l)+u}else d=o,h=Math.max(0,-(s*d+a)),p=-h*h+d*(d+2*l)+u;else d=-o,h=Math.max(0,-(s*d+a)),p=-h*h+d*(d+2*l)+u;else d<=-m?(h=Math.max(0,-(-s*o+a)),d=h>0?-o:Math.min(Math.max(-o,-l),o),p=-h*h+d*(d+2*l)+u):d<=m?(h=0,d=Math.min(Math.max(-o,-l),o),p=d*(d+2*l)+u):(h=Math.max(0,-(s*o+a)),d=h>0?o:Math.min(Math.max(-o,-l),o),p=-h*h+d*(d+2*l)+u);else d=s>0?-o:o,h=Math.max(0,-(s*d+a)),p=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Oc).addScaledVector(Ka,d),p}intersectSphere(e,n){mi.subVectors(e.center,this.origin);const i=mi.dot(this.direction),r=mi.dot(mi)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(o=(e.min.y-d.y)*c,s=(e.max.y-d.y)*c):(o=(e.max.y-d.y)*c,s=(e.min.y-d.y)*c),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,n,i,r,o){Fc.subVectors(n,e),Za.subVectors(i,e),kc.crossVectors(Fc,Za);let s=this.direction.dot(kc),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;zi.subVectors(this.origin,e);const l=a*this.direction.dot(Za.crossVectors(zi,Za));if(l<0)return null;const u=a*this.direction.dot(Fc.cross(zi));if(u<0||l+u>s)return null;const c=-a*zi.dot(kc);return c<0?null:this.at(c/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,n,i,r,o,s,a,l,u,c,h,d,p,m,y,g){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u,c,h,d,p,m,y,g)}set(e,n,i,r,o,s,a,l,u,c,h,d,p,m,y,g){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=o,f[5]=s,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=h,f[14]=d,f[3]=p,f[7]=m,f[11]=y,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/oo.setFromMatrixColumn(e,0).length(),o=1/oo.setFromMatrixColumn(e,1).length(),s=1/oo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(o),h=Math.sin(o);if(e.order==="XYZ"){const d=s*c,p=s*h,m=a*c,y=a*h;n[0]=l*c,n[4]=-l*h,n[8]=u,n[1]=p+m*u,n[5]=d-y*u,n[9]=-a*l,n[2]=y-d*u,n[6]=m+p*u,n[10]=s*l}else if(e.order==="YXZ"){const d=l*c,p=l*h,m=u*c,y=u*h;n[0]=d+y*a,n[4]=m*a-p,n[8]=s*u,n[1]=s*h,n[5]=s*c,n[9]=-a,n[2]=p*a-m,n[6]=y+d*a,n[10]=s*l}else if(e.order==="ZXY"){const d=l*c,p=l*h,m=u*c,y=u*h;n[0]=d-y*a,n[4]=-s*h,n[8]=m+p*a,n[1]=p+m*a,n[5]=s*c,n[9]=y-d*a,n[2]=-s*u,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const d=s*c,p=s*h,m=a*c,y=a*h;n[0]=l*c,n[4]=m*u-p,n[8]=d*u+y,n[1]=l*h,n[5]=y*u+d,n[9]=p*u-m,n[2]=-u,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const d=s*l,p=s*u,m=a*l,y=a*u;n[0]=l*c,n[4]=y-d*h,n[8]=m*h+p,n[1]=h,n[5]=s*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*h+m,n[10]=d-y*h}else if(e.order==="XZY"){const d=s*l,p=s*u,m=a*l,y=a*u;n[0]=l*c,n[4]=-h,n[8]=u*c,n[1]=d*h+y,n[5]=s*c,n[9]=p*h-m,n[2]=m*h-p,n[6]=a*c,n[10]=y*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ZM,e,JM)}lookAt(e,n,i){const r=this.elements;return Sn.subVectors(e,n),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Bi.crossVectors(i,Sn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Bi.crossVectors(i,Sn)),Bi.normalize(),Ja.crossVectors(Sn,Bi),r[0]=Bi.x,r[4]=Ja.x,r[8]=Sn.x,r[1]=Bi.y,r[5]=Ja.y,r[9]=Sn.y,r[2]=Bi.z,r[6]=Ja.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],c=i[1],h=i[5],d=i[9],p=i[13],m=i[2],y=i[6],g=i[10],f=i[14],x=i[3],v=i[7],_=i[11],b=i[15],S=r[0],T=r[4],L=r[8],M=r[12],w=r[1],O=r[5],W=r[9],te=r[13],D=r[2],V=r[6],j=r[10],K=r[14],N=r[3],z=r[7],G=r[11],ee=r[15];return o[0]=s*S+a*w+l*D+u*N,o[4]=s*T+a*O+l*V+u*z,o[8]=s*L+a*W+l*j+u*G,o[12]=s*M+a*te+l*K+u*ee,o[1]=c*S+h*w+d*D+p*N,o[5]=c*T+h*O+d*V+p*z,o[9]=c*L+h*W+d*j+p*G,o[13]=c*M+h*te+d*K+p*ee,o[2]=m*S+y*w+g*D+f*N,o[6]=m*T+y*O+g*V+f*z,o[10]=m*L+y*W+g*j+f*G,o[14]=m*M+y*te+g*K+f*ee,o[3]=x*S+v*w+_*D+b*N,o[7]=x*T+v*O+_*V+b*z,o[11]=x*L+v*W+_*j+b*G,o[15]=x*M+v*te+_*K+b*ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],c=e[2],h=e[6],d=e[10],p=e[14],m=e[3],y=e[7],g=e[11],f=e[15];return m*(+o*l*h-r*u*h-o*a*d+i*u*d+r*a*p-i*l*p)+y*(+n*l*p-n*u*d+o*s*d-r*s*p+r*u*c-o*l*c)+g*(+n*u*h-n*a*p-o*s*h+i*s*p+o*a*c-i*u*c)+f*(-r*a*c-n*l*h+n*a*d+r*s*h-i*s*d+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=e[9],d=e[10],p=e[11],m=e[12],y=e[13],g=e[14],f=e[15],x=h*g*u-y*d*u+y*l*p-a*g*p-h*l*f+a*d*f,v=m*d*u-c*g*u-m*l*p+s*g*p+c*l*f-s*d*f,_=c*y*u-m*h*u+m*a*p-s*y*p-c*a*f+s*h*f,b=m*h*l-c*y*l-m*a*d+s*y*d+c*a*g-s*h*g,S=n*x+i*v+r*_+o*b;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/S;return e[0]=x*T,e[1]=(y*d*o-h*g*o-y*r*p+i*g*p+h*r*f-i*d*f)*T,e[2]=(a*g*o-y*l*o+y*r*u-i*g*u-a*r*f+i*l*f)*T,e[3]=(h*l*o-a*d*o-h*r*u+i*d*u+a*r*p-i*l*p)*T,e[4]=v*T,e[5]=(c*g*o-m*d*o+m*r*p-n*g*p-c*r*f+n*d*f)*T,e[6]=(m*l*o-s*g*o-m*r*u+n*g*u+s*r*f-n*l*f)*T,e[7]=(s*d*o-c*l*o+c*r*u-n*d*u-s*r*p+n*l*p)*T,e[8]=_*T,e[9]=(m*h*o-c*y*o-m*i*p+n*y*p+c*i*f-n*h*f)*T,e[10]=(s*y*o-m*a*o+m*i*u-n*y*u-s*i*f+n*a*f)*T,e[11]=(c*a*o-s*h*o-c*i*u+n*h*u+s*i*p-n*a*p)*T,e[12]=b*T,e[13]=(c*y*r-m*h*r+m*i*d-n*y*d-c*i*g+n*h*g)*T,e[14]=(m*a*r-s*y*r-m*i*l+n*y*l+s*i*g-n*a*g)*T,e[15]=(s*h*r-c*a*r+c*i*l-n*h*l-s*i*d+n*a*d)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,c=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*s,0,u*l-r*a,c*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,u=o+o,c=s+s,h=a+a,d=o*u,p=o*c,m=o*h,y=s*c,g=s*h,f=a*h,x=l*u,v=l*c,_=l*h,b=i.x,S=i.y,T=i.z;return r[0]=(1-(y+f))*b,r[1]=(p+_)*b,r[2]=(m-v)*b,r[3]=0,r[4]=(p-_)*S,r[5]=(1-(d+f))*S,r[6]=(g+x)*S,r[7]=0,r[8]=(m+v)*T,r[9]=(g-x)*T,r[10]=(1-(d+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=oo.set(r[0],r[1],r[2]).length();const s=oo.set(r[4],r[5],r[6]).length(),a=oo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Yn.copy(this);const u=1/o,c=1/s,h=1/a;return Yn.elements[0]*=u,Yn.elements[1]*=u,Yn.elements[2]*=u,Yn.elements[4]*=c,Yn.elements[5]*=c,Yn.elements[6]*=c,Yn.elements[8]*=h,Yn.elements[9]*=h,Yn.elements[10]*=h,n.setFromRotationMatrix(Yn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=Ri){const l=this.elements,u=2*o/(n-e),c=2*o/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let p,m;if(a===Ri)p=-(s+o)/(s-o),m=-2*s*o/(s-o);else if(a===du)p=-s/(s-o),m=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=Ri){const l=this.elements,u=1/(n-e),c=1/(i-r),h=1/(s-o),d=(n+e)*u,p=(i+r)*c;let m,y;if(a===Ri)m=(s+o)*h,y=-2*h;else if(a===du)m=o*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const oo=new F,Yn=new Mt,ZM=new F(0,0,0),JM=new F(1,1,1),Bi=new F,Ja=new F,Sn=new F,Cm=new Mt,Pm=new Ta;class zu{constructor(e=0,n=0,i=0,r=zu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],c=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Qt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Cm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Pm.setFromEuler(this),this.setFromQuaternion(Pm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zu.DEFAULT_ORDER="XYZ";class g_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let QM=0;const Lm=new F,so=new Ta,gi=new Mt,Qa=new F,Rs=new F,eE=new F,tE=new Ta,Dm=new F(1,0,0),Im=new F(0,1,0),Nm=new F(0,0,1),nE={type:"added"},iE={type:"removed"};class Pt extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:QM++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new F,n=new zu,i=new Ta,r=new F(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Ye}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new g_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return so.setFromAxisAngle(e,n),this.quaternion.multiply(so),this}rotateOnWorldAxis(e,n){return so.setFromAxisAngle(e,n),this.quaternion.premultiply(so),this}rotateX(e){return this.rotateOnAxis(Dm,e)}rotateY(e){return this.rotateOnAxis(Im,e)}rotateZ(e){return this.rotateOnAxis(Nm,e)}translateOnAxis(e,n){return Lm.copy(e).applyQuaternion(this.quaternion),this.position.add(Lm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Dm,e)}translateY(e){return this.translateOnAxis(Im,e)}translateZ(e){return this.translateOnAxis(Nm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Qa.copy(e):Qa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Rs,Qa,this.up):gi.lookAt(Qa,Rs,this.up),this.quaternion.setFromRotationMatrix(gi),r&&(gi.extractRotation(r.matrixWorld),so.setFromRotationMatrix(gi),this.quaternion.premultiply(so.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(nE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(iE)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,e,eE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,tE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];o(e.shapes,h)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),c=s(e.images),h=s(e.shapes),d=s(e.skeletons),p=s(e.animations),m=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function s(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Pt.DEFAULT_UP=new F(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qn=new F,vi=new F,zc=new F,_i=new F,ao=new F,lo=new F,Um=new F,Bc=new F,Hc=new F,Gc=new F;let el=!1;class Un{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),qn.subVectors(e,n),r.cross(qn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){qn.subVectors(r,n),vi.subVectors(i,n),zc.subVectors(e,n);const s=qn.dot(qn),a=qn.dot(vi),l=qn.dot(zc),u=vi.dot(vi),c=vi.dot(zc),h=s*u-a*a;if(h===0)return o.set(0,0,0),null;const d=1/h,p=(u*l-a*c)*d,m=(s*c-a*l)*d;return o.set(1-p-m,m,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getUV(e,n,i,r,o,s,a,l){return el===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),el=!0),this.getInterpolation(e,n,i,r,o,s,a,l)}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,_i.x),l.addScaledVector(s,_i.y),l.addScaledVector(a,_i.z),l)}static isFrontFacing(e,n,i,r){return qn.subVectors(i,n),vi.subVectors(e,n),qn.cross(vi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),qn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Un.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,o){return el===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),el=!0),Un.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}getInterpolation(e,n,i,r,o){return Un.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;ao.subVectors(r,i),lo.subVectors(o,i),Bc.subVectors(e,i);const l=ao.dot(Bc),u=lo.dot(Bc);if(l<=0&&u<=0)return n.copy(i);Hc.subVectors(e,r);const c=ao.dot(Hc),h=lo.dot(Hc);if(c>=0&&h<=c)return n.copy(r);const d=l*h-c*u;if(d<=0&&l>=0&&c<=0)return s=l/(l-c),n.copy(i).addScaledVector(ao,s);Gc.subVectors(e,o);const p=ao.dot(Gc),m=lo.dot(Gc);if(m>=0&&p<=m)return n.copy(o);const y=p*u-l*m;if(y<=0&&u>=0&&m<=0)return a=u/(u-m),n.copy(i).addScaledVector(lo,a);const g=c*m-p*h;if(g<=0&&h-c>=0&&p-m>=0)return Um.subVectors(o,r),a=(h-c)/(h-c+(p-m)),n.copy(r).addScaledVector(Um,a);const f=1/(g+y+d);return s=y*f,a=d*f,n.copy(i).addScaledVector(ao,s).addScaledVector(lo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const v_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},tl={h:0,s:0,l:0};function Vc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Fe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=VM(e,1),n=Qt(n,0,1),i=Qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=Vc(s,o,e+1/3),this.g=Vc(s,o,e),this.b=Vc(s,o,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=Vt){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Vt){const i=v_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jo(e.r),this.g=jo(e.g),this.b=jo(e.b),this}copyLinearToSRGB(e){return this.r=Lc(e.r),this.g=Lc(e.g),this.b=Lc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return et.fromWorkingColorSpace(Kt.copy(this),e),Math.round(Qt(Kt.r*255,0,255))*65536+Math.round(Qt(Kt.g*255,0,255))*256+Math.round(Qt(Kt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace(Kt.copy(this),n);const i=Kt.r,r=Kt.g,o=Kt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const c=(a+s)/2;if(a===s)l=0,u=0;else{const h=s-a;switch(u=c<=.5?h/(s+a):h/(2-s-a),s){case i:l=(r-o)/h+(r<o?6:0);break;case r:l=(o-i)/h+2;break;case o:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace(Kt.copy(this),n),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Vt){et.fromWorkingColorSpace(Kt.copy(this),e);const n=Kt.r,i=Kt.g,r=Kt.b;return e!==Vt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+n,Hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Hi),e.getHSL(tl);const i=Cc(Hi.h,tl.h,n),r=Cc(Hi.s,tl.s,n),o=Cc(Hi.l,tl.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new Fe;Fe.NAMES=v_;let rE=0;class Zr extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rE++}),this.uuid=Ci(),this.name="",this.type="Material",this.blending=Xo,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=id,this.blendDst=rd,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=lu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=eo,this.stencilZFail=eo,this.stencilZPass=eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xo&&(i.blending=this.blending),this.side!==fr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==id&&(i.blendSrc=this.blendSrc),this.blendDst!==rd&&(i.blendDst=this.blendDst),this.blendEquation!==Rr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==lu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==eo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==eo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==eo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class __ extends Zr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new F,nl=new ge;class Hn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ld,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)nl.fromBufferAttribute(this,n),nl.applyMatrix3(e),this.setXY(n,nl.x,nl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix3(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix4(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyNormalMatrix(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.transformDirection(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ei(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=tt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ei(n,this.array)),n}setX(e,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ei(n,this.array)),n}setY(e,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ei(n,this.array)),n}setZ(e,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ei(n,this.array)),n}setW(e,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=tt(n,this.array),i=tt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array),o=tt(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ld&&(e.usage=this.usage),e}}class y_ extends Hn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class x_ extends Hn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class An extends Hn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let oE=0;const Ln=new Mt,Wc=new Pt,uo=new F,Mn=new Aa,bs=new Aa,Ut=new F;class Wn extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(f_(e)?x_:y_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Ye().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,n,i){return Ln.makeTranslation(e,n,i),this.applyMatrix4(Ln),this}scale(e,n,i){return Ln.makeScale(e,n,i),this.applyMatrix4(Ln),this}lookAt(e){return Wc.lookAt(e),Wc.updateMatrix(),this.applyMatrix4(Wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(uo).negate(),this.translate(uo.x,uo.y,uo.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new An(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Aa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];Mn.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ku);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];bs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(Mn.min,bs.min),Mn.expandByPoint(Ut),Ut.addVectors(Mn.max,bs.max),Mn.expandByPoint(Ut)):(Mn.expandByPoint(bs.min),Mn.expandByPoint(bs.max))}Mn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Ut.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Ut));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Ut.fromBufferAttribute(a,u),l&&(uo.fromBufferAttribute(e,u),Ut.add(uo)),r=Math.max(r,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,o=n.normal.array,s=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let w=0;w<a;w++)u[w]=new F,c[w]=new F;const h=new F,d=new F,p=new F,m=new ge,y=new ge,g=new ge,f=new F,x=new F;function v(w,O,W){h.fromArray(r,w*3),d.fromArray(r,O*3),p.fromArray(r,W*3),m.fromArray(s,w*2),y.fromArray(s,O*2),g.fromArray(s,W*2),d.sub(h),p.sub(h),y.sub(m),g.sub(m);const te=1/(y.x*g.y-g.x*y.y);isFinite(te)&&(f.copy(d).multiplyScalar(g.y).addScaledVector(p,-y.y).multiplyScalar(te),x.copy(p).multiplyScalar(y.x).addScaledVector(d,-g.x).multiplyScalar(te),u[w].add(f),u[O].add(f),u[W].add(f),c[w].add(x),c[O].add(x),c[W].add(x))}let _=this.groups;_.length===0&&(_=[{start:0,count:i.length}]);for(let w=0,O=_.length;w<O;++w){const W=_[w],te=W.start,D=W.count;for(let V=te,j=te+D;V<j;V+=3)v(i[V+0],i[V+1],i[V+2])}const b=new F,S=new F,T=new F,L=new F;function M(w){T.fromArray(o,w*3),L.copy(T);const O=u[w];b.copy(O),b.sub(T.multiplyScalar(T.dot(O))).normalize(),S.crossVectors(L,O);const te=S.dot(c[w])<0?-1:1;l[w*4]=b.x,l[w*4+1]=b.y,l[w*4+2]=b.z,l[w*4+3]=te}for(let w=0,O=_.length;w<O;++w){const W=_[w],te=W.start,D=W.count;for(let V=te,j=te+D;V<j;V+=3)M(i[V+0]),M(i[V+1]),M(i[V+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Hn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new F,o=new F,s=new F,a=new F,l=new F,u=new F,c=new F,h=new F;if(e)for(let d=0,p=e.count;d<p;d+=3){const m=e.getX(d+0),y=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,m),o.fromBufferAttribute(n,y),s.fromBufferAttribute(n,g),c.subVectors(s,o),h.subVectors(r,o),c.cross(h),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,g),a.add(c),l.add(c),u.add(c),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),o.fromBufferAttribute(n,d+1),s.fromBufferAttribute(n,d+2),c.subVectors(s,o),h.subVectors(r,o),c.cross(h),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ut.fromBufferAttribute(e,n),Ut.normalize(),e.setXYZ(n,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,h=a.normalized,d=new u.constructor(l.length*c);let p=0,m=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*c;for(let f=0;f<c;f++)d[m++]=u[p++]}return new Hn(d,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Wn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let c=0,h=u.length;c<h;c++){const d=u[c],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,d=u.length;h<d;h++){const p=u[h];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const o=e.morphAttributes;for(const u in o){const c=[],h=o[u];for(let d=0,p=h.length;d<p;d++)c.push(h[d].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,c=s.length;u<c;u++){const h=s[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Om=new Mt,yr=new m_,il=new ku,Fm=new F,co=new F,fo=new F,ho=new F,Xc=new F,rl=new F,ol=new ge,sl=new ge,al=new ge,km=new F,zm=new F,Bm=new F,ll=new F,ul=new F;class zn extends Pt{constructor(e=new Wn,n=new __){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){rl.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const c=a[l],h=o[l];c!==0&&(Xc.fromBufferAttribute(h,e),s?rl.addScaledVector(Xc,c):rl.addScaledVector(Xc.sub(n),c))}n.add(rl)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),il.copy(i.boundingSphere),il.applyMatrix4(o),yr.copy(e.ray).recast(e.near),!(il.containsPoint(yr.origin)===!1&&(yr.intersectSphere(il,Fm)===null||yr.origin.distanceToSquared(Fm)>(e.far-e.near)**2))&&(Om.copy(o).invert(),yr.copy(e.ray).applyMatrix4(Om),!(i.boundingBox!==null&&yr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,yr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,u=o.attributes.uv,c=o.attributes.uv1,h=o.attributes.normal,d=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(s))for(let m=0,y=d.length;m<y;m++){const g=d[m],f=s[g.materialIndex],x=Math.max(g.start,p.start),v=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let _=x,b=v;_<b;_+=3){const S=a.getX(_),T=a.getX(_+1),L=a.getX(_+2);r=cl(this,f,e,i,u,c,h,S,T,L),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let g=m,f=y;g<f;g+=3){const x=a.getX(g),v=a.getX(g+1),_=a.getX(g+2);r=cl(this,s,e,i,u,c,h,x,v,_),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,y=d.length;m<y;m++){const g=d[m],f=s[g.materialIndex],x=Math.max(g.start,p.start),v=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let _=x,b=v;_<b;_+=3){const S=_,T=_+1,L=_+2;r=cl(this,f,e,i,u,c,h,S,T,L),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=m,f=y;g<f;g+=3){const x=g,v=g+1,_=g+2;r=cl(this,s,e,i,u,c,h,x,v,_),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function sE(t,e,n,i,r,o,s,a){let l;if(e.side===_n?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===fr,a),l===null)return null;ul.copy(a),ul.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(ul);return u<n.near||u>n.far?null:{distance:u,point:ul.clone(),object:t}}function cl(t,e,n,i,r,o,s,a,l,u){t.getVertexPosition(a,co),t.getVertexPosition(l,fo),t.getVertexPosition(u,ho);const c=sE(t,e,n,i,co,fo,ho,ll);if(c){r&&(ol.fromBufferAttribute(r,a),sl.fromBufferAttribute(r,l),al.fromBufferAttribute(r,u),c.uv=Un.getInterpolation(ll,co,fo,ho,ol,sl,al,new ge)),o&&(ol.fromBufferAttribute(o,a),sl.fromBufferAttribute(o,l),al.fromBufferAttribute(o,u),c.uv1=Un.getInterpolation(ll,co,fo,ho,ol,sl,al,new ge),c.uv2=c.uv1),s&&(km.fromBufferAttribute(s,a),zm.fromBufferAttribute(s,l),Bm.fromBufferAttribute(s,u),c.normal=Un.getInterpolation(ll,co,fo,ho,km,zm,Bm,new F),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new F,materialIndex:0};Un.getNormal(co,fo,ho,h.normal),c.face=h}return c}class Jr extends Wn{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],c=[],h=[];let d=0,p=0;m("z","y","x",-1,-1,i,n,e,s,o,0),m("z","y","x",1,-1,i,n,-e,s,o,1),m("x","z","y",1,1,e,i,n,r,s,2),m("x","z","y",1,-1,e,i,-n,r,s,3),m("x","y","z",1,-1,e,n,i,r,o,4),m("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new An(u,3)),this.setAttribute("normal",new An(c,3)),this.setAttribute("uv",new An(h,2));function m(y,g,f,x,v,_,b,S,T,L,M){const w=_/T,O=b/L,W=_/2,te=b/2,D=S/2,V=T+1,j=L+1;let K=0,N=0;const z=new F;for(let G=0;G<j;G++){const ee=G*O-te;for(let ne=0;ne<V;ne++){const Y=ne*w-W;z[y]=Y*x,z[g]=ee*v,z[f]=D,u.push(z.x,z.y,z.z),z[y]=0,z[g]=0,z[f]=S>0?1:-1,c.push(z.x,z.y,z.z),h.push(ne/T),h.push(1-G/L),K+=1}}for(let G=0;G<L;G++)for(let ee=0;ee<T;ee++){const ne=d+ee+V*G,Y=d+ee+V*(G+1),ie=d+(ee+1)+V*(G+1),he=d+(ee+1)+V*G;l.push(ne,Y,he),l.push(Y,ie,he),N+=6}a.addGroup(p,N,M),p+=N,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function os(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function on(t){const e={};for(let n=0;n<t.length;n++){const i=os(t[n]);for(const r in i)e[r]=i[r]}return e}function aE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function S_(t){return t.getRenderTarget()===null?t.outputColorSpace:et.workingColorSpace}const lE={clone:os,merge:on};var uE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jr extends Zr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uE,this.fragmentShader=cE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=os(e.uniforms),this.uniformsGroups=aE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class M_ extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Ri}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class On extends M_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=cd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cd*2*Math.atan(Math.tan(bc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(bc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const po=-90,mo=1;class fE extends Pt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new On(po,mo,e,n);r.layers=this.layers,this.add(r);const o=new On(po,mo,e,n);o.layers=this.layers,this.add(o);const s=new On(po,mo,e,n);s.layers=this.layers,this.add(s);const a=new On(po,mo,e,n);a.layers=this.layers,this.add(a);const l=new On(po,mo,e,n);l.layers=this.layers,this.add(l);const u=new On(po,mo,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const u of n)this.remove(u);if(e===Ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===du)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,u,c]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(h,d,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class E_ extends yn{constructor(e,n,i,r,o,s,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:ns,super(e,n,i,r,o,s,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dE extends Xr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(js("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===kr?Vt:Fn),this.texture=new E_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Nn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Jr(5,5,5),o=new jr({name:"CubemapFromEquirect",uniforms:os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:or});o.uniforms.tEquirect.value=n;const s=new zn(r,o),a=n.minFilter;return n.minFilter===ha&&(n.minFilter=Nn),new fE(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const jc=new F,hE=new F,pE=new Ye;class wr{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=jc.subVectors(i,n).cross(hE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(jc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||pE.getNormalMatrix(e),r=this.coplanarPoint(jc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xr=new ku,fl=new F;class _h{constructor(e=new wr,n=new wr,i=new wr,r=new wr,o=new wr,s=new wr){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ri){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],u=r[4],c=r[5],h=r[6],d=r[7],p=r[8],m=r[9],y=r[10],g=r[11],f=r[12],x=r[13],v=r[14],_=r[15];if(i[0].setComponents(l-o,d-u,g-p,_-f).normalize(),i[1].setComponents(l+o,d+u,g+p,_+f).normalize(),i[2].setComponents(l+s,d+c,g+m,_+x).normalize(),i[3].setComponents(l-s,d-c,g-m,_-x).normalize(),i[4].setComponents(l-a,d-h,g-y,_-v).normalize(),n===Ri)i[5].setComponents(l+a,d+h,g+y,_+v).normalize();else if(n===du)i[5].setComponents(a,h,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(e){return xr.center.set(0,0,0),xr.radius=.7071067811865476,xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(fl.x=r.normal.x>0?e.max.x:e.min.x,fl.y=r.normal.y>0?e.max.y:e.min.y,fl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function w_(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function mE(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const h=u.array,d=u.usage,p=h.byteLength,m=t.createBuffer();t.bindBuffer(c,m),t.bufferData(c,h,d),u.onUploadCallback();let y;if(h instanceof Float32Array)y=t.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=t.SHORT;else if(h instanceof Uint32Array)y=t.UNSIGNED_INT;else if(h instanceof Int32Array)y=t.INT;else if(h instanceof Int8Array)y=t.BYTE;else if(h instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:p}}function o(u,c,h){const d=c.array,p=c._updateRange,m=c.updateRanges;if(t.bindBuffer(h,u),p.count===-1&&m.length===0&&t.bufferSubData(h,0,d),m.length!==0){for(let y=0,g=m.length;y<g;y++){const f=m[y];n?t.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):t.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}c.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):t.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);if(h===void 0)i.set(u,r(u,c));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(h.buffer,u,c),h.version=u.version}}return{get:s,remove:a,update:l}}class Bu extends Wn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,h=e/a,d=n/l,p=[],m=[],y=[],g=[];for(let f=0;f<c;f++){const x=f*d-s;for(let v=0;v<u;v++){const _=v*h-o;m.push(_,-x,0),y.push(0,0,1),g.push(v/a),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<a;x++){const v=x+u*f,_=x+u*(f+1),b=x+1+u*(f+1),S=x+1+u*f;p.push(v,_,S),p.push(_,b,S)}this.setIndex(p),this.setAttribute("position",new An(m,3)),this.setAttribute("normal",new An(y,3)),this.setAttribute("uv",new An(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bu(e.width,e.height,e.widthSegments,e.heightSegments)}}var gE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_E=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xE=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,SE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ME=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,EE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wE=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,TE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,AE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,CE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,PE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,LE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,DE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,UE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,OE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,FE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,kE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,zE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,BE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,HE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,GE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,VE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,WE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jE="gl_FragColor = linearToOutputTexel( gl_FragColor );",YE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,qE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$E=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,KE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ZE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,QE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ew=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ow=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,uw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_w=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Mw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ew=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ww=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Aw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Lw=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Dw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Iw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Nw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Uw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ow=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ww=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Xw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$w=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Jw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,e1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,t1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,n1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,i1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,r1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,o1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,s1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,a1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,l1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,u1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,c1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,f1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,d1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,h1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,p1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const m1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,g1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,M1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,E1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,w1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,T1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,b1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,C1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,P1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,N1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,O1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,F1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,B1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,W1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,X1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Y1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,q1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:gE,alphahash_pars_fragment:vE,alphamap_fragment:_E,alphamap_pars_fragment:yE,alphatest_fragment:xE,alphatest_pars_fragment:SE,aomap_fragment:ME,aomap_pars_fragment:EE,batching_pars_vertex:wE,batching_vertex:TE,begin_vertex:AE,beginnormal_vertex:RE,bsdfs:bE,iridescence_fragment:CE,bumpmap_pars_fragment:PE,clipping_planes_fragment:LE,clipping_planes_pars_fragment:DE,clipping_planes_pars_vertex:IE,clipping_planes_vertex:NE,color_fragment:UE,color_pars_fragment:OE,color_pars_vertex:FE,color_vertex:kE,common:zE,cube_uv_reflection_fragment:BE,defaultnormal_vertex:HE,displacementmap_pars_vertex:GE,displacementmap_vertex:VE,emissivemap_fragment:WE,emissivemap_pars_fragment:XE,colorspace_fragment:jE,colorspace_pars_fragment:YE,envmap_fragment:qE,envmap_common_pars_fragment:$E,envmap_pars_fragment:KE,envmap_pars_vertex:ZE,envmap_physical_pars_fragment:uw,envmap_vertex:JE,fog_vertex:QE,fog_pars_vertex:ew,fog_fragment:tw,fog_pars_fragment:nw,gradientmap_pars_fragment:iw,lightmap_fragment:rw,lightmap_pars_fragment:ow,lights_lambert_fragment:sw,lights_lambert_pars_fragment:aw,lights_pars_begin:lw,lights_toon_fragment:cw,lights_toon_pars_fragment:fw,lights_phong_fragment:dw,lights_phong_pars_fragment:hw,lights_physical_fragment:pw,lights_physical_pars_fragment:mw,lights_fragment_begin:gw,lights_fragment_maps:vw,lights_fragment_end:_w,logdepthbuf_fragment:yw,logdepthbuf_pars_fragment:xw,logdepthbuf_pars_vertex:Sw,logdepthbuf_vertex:Mw,map_fragment:Ew,map_pars_fragment:ww,map_particle_fragment:Tw,map_particle_pars_fragment:Aw,metalnessmap_fragment:Rw,metalnessmap_pars_fragment:bw,morphcolor_vertex:Cw,morphnormal_vertex:Pw,morphtarget_pars_vertex:Lw,morphtarget_vertex:Dw,normal_fragment_begin:Iw,normal_fragment_maps:Nw,normal_pars_fragment:Uw,normal_pars_vertex:Ow,normal_vertex:Fw,normalmap_pars_fragment:kw,clearcoat_normal_fragment_begin:zw,clearcoat_normal_fragment_maps:Bw,clearcoat_pars_fragment:Hw,iridescence_pars_fragment:Gw,opaque_fragment:Vw,packing:Ww,premultiplied_alpha_fragment:Xw,project_vertex:jw,dithering_fragment:Yw,dithering_pars_fragment:qw,roughnessmap_fragment:$w,roughnessmap_pars_fragment:Kw,shadowmap_pars_fragment:Zw,shadowmap_pars_vertex:Jw,shadowmap_vertex:Qw,shadowmask_pars_fragment:e1,skinbase_vertex:t1,skinning_pars_vertex:n1,skinning_vertex:i1,skinnormal_vertex:r1,specularmap_fragment:o1,specularmap_pars_fragment:s1,tonemapping_fragment:a1,tonemapping_pars_fragment:l1,transmission_fragment:u1,transmission_pars_fragment:c1,uv_pars_fragment:f1,uv_pars_vertex:d1,uv_vertex:h1,worldpos_vertex:p1,background_vert:m1,background_frag:g1,backgroundCube_vert:v1,backgroundCube_frag:_1,cube_vert:y1,cube_frag:x1,depth_vert:S1,depth_frag:M1,distanceRGBA_vert:E1,distanceRGBA_frag:w1,equirect_vert:T1,equirect_frag:A1,linedashed_vert:R1,linedashed_frag:b1,meshbasic_vert:C1,meshbasic_frag:P1,meshlambert_vert:L1,meshlambert_frag:D1,meshmatcap_vert:I1,meshmatcap_frag:N1,meshnormal_vert:U1,meshnormal_frag:O1,meshphong_vert:F1,meshphong_frag:k1,meshphysical_vert:z1,meshphysical_frag:B1,meshtoon_vert:H1,meshtoon_frag:G1,points_vert:V1,points_frag:W1,shadow_vert:X1,shadow_frag:j1,sprite_vert:Y1,sprite_frag:q1},_e={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},ai={basic:{uniforms:on([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:on([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:on([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:on([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:on([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:on([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:on([_e.points,_e.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:on([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:on([_e.common,_e.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:on([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:on([_e.sprite,_e.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:on([_e.common,_e.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:on([_e.lights,_e.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};ai.physical={uniforms:on([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const dl={r:0,b:0,g:0};function $1(t,e,n,i,r,o,s){const a=new Fe(0);let l=o===!0?0:1,u,c,h=null,d=0,p=null;function m(g,f){let x=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?n:e).get(v)),v===null?y(a,l):v&&v.isColor&&(y(v,1),x=!0);const _=t.xr.getEnvironmentBlendMode();_==="additive"?i.buffers.color.setClear(0,0,0,1,s):_==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||x)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ou)?(c===void 0&&(c=new zn(new Jr(1,1,1),new jr({name:"BackgroundCubeMaterial",uniforms:os(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=et.getTransfer(v.colorSpace)!==at,(h!==v||d!==v.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new zn(new Bu(2,2),new jr({name:"BackgroundMaterial",uniforms:os(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=et.getTransfer(v.colorSpace)!==at,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function y(g,f){g.getRGB(dl,S_(t)),i.buffers.color.setClear(dl.r,dl.g,dl.b,f,s)}return{getClearColor:function(){return a},setClearColor:function(g,f=1){a.set(g),l=f,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,y(a,l)},render:m}}function K1(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},l=g(null);let u=l,c=!1;function h(D,V,j,K,N){let z=!1;if(s){const G=y(K,j,V);u!==G&&(u=G,p(u.object)),z=f(D,K,j,N),z&&x(D,K,j,N)}else{const G=V.wireframe===!0;(u.geometry!==K.id||u.program!==j.id||u.wireframe!==G)&&(u.geometry=K.id,u.program=j.id,u.wireframe=G,z=!0)}N!==null&&n.update(N,t.ELEMENT_ARRAY_BUFFER),(z||c)&&(c=!1,L(D,V,j,K),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(N).buffer))}function d(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function p(D){return i.isWebGL2?t.bindVertexArray(D):o.bindVertexArrayOES(D)}function m(D){return i.isWebGL2?t.deleteVertexArray(D):o.deleteVertexArrayOES(D)}function y(D,V,j){const K=j.wireframe===!0;let N=a[D.id];N===void 0&&(N={},a[D.id]=N);let z=N[V.id];z===void 0&&(z={},N[V.id]=z);let G=z[K];return G===void 0&&(G=g(d()),z[K]=G),G}function g(D){const V=[],j=[],K=[];for(let N=0;N<r;N++)V[N]=0,j[N]=0,K[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:j,attributeDivisors:K,object:D,attributes:{},index:null}}function f(D,V,j,K){const N=u.attributes,z=V.attributes;let G=0;const ee=j.getAttributes();for(const ne in ee)if(ee[ne].location>=0){const ie=N[ne];let he=z[ne];if(he===void 0&&(ne==="instanceMatrix"&&D.instanceMatrix&&(he=D.instanceMatrix),ne==="instanceColor"&&D.instanceColor&&(he=D.instanceColor)),ie===void 0||ie.attribute!==he||he&&ie.data!==he.data)return!0;G++}return u.attributesNum!==G||u.index!==K}function x(D,V,j,K){const N={},z=V.attributes;let G=0;const ee=j.getAttributes();for(const ne in ee)if(ee[ne].location>=0){let ie=z[ne];ie===void 0&&(ne==="instanceMatrix"&&D.instanceMatrix&&(ie=D.instanceMatrix),ne==="instanceColor"&&D.instanceColor&&(ie=D.instanceColor));const he={};he.attribute=ie,ie&&ie.data&&(he.data=ie.data),N[ne]=he,G++}u.attributes=N,u.attributesNum=G,u.index=K}function v(){const D=u.newAttributes;for(let V=0,j=D.length;V<j;V++)D[V]=0}function _(D){b(D,0)}function b(D,V){const j=u.newAttributes,K=u.enabledAttributes,N=u.attributeDivisors;j[D]=1,K[D]===0&&(t.enableVertexAttribArray(D),K[D]=1),N[D]!==V&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,V),N[D]=V)}function S(){const D=u.newAttributes,V=u.enabledAttributes;for(let j=0,K=V.length;j<K;j++)V[j]!==D[j]&&(t.disableVertexAttribArray(j),V[j]=0)}function T(D,V,j,K,N,z,G){G===!0?t.vertexAttribIPointer(D,V,j,N,z):t.vertexAttribPointer(D,V,j,K,N,z)}function L(D,V,j,K){if(i.isWebGL2===!1&&(D.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const N=K.attributes,z=j.getAttributes(),G=V.defaultAttributeValues;for(const ee in z){const ne=z[ee];if(ne.location>=0){let Y=N[ee];if(Y===void 0&&(ee==="instanceMatrix"&&D.instanceMatrix&&(Y=D.instanceMatrix),ee==="instanceColor"&&D.instanceColor&&(Y=D.instanceColor)),Y!==void 0){const ie=Y.normalized,he=Y.itemSize,ye=n.get(Y);if(ye===void 0)continue;const me=ye.buffer,Te=ye.type,se=ye.bytesPerElement,P=i.isWebGL2===!0&&(Te===t.INT||Te===t.UNSIGNED_INT||Y.gpuType===t_);if(Y.isInterleavedBufferAttribute){const J=Y.data,A=J.stride,k=Y.offset;if(J.isInstancedInterleavedBuffer){for(let U=0;U<ne.locationSize;U++)b(ne.location+U,J.meshPerAttribute);D.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let U=0;U<ne.locationSize;U++)_(ne.location+U);t.bindBuffer(t.ARRAY_BUFFER,me);for(let U=0;U<ne.locationSize;U++)T(ne.location+U,he/ne.locationSize,Te,ie,A*se,(k+he/ne.locationSize*U)*se,P)}else{if(Y.isInstancedBufferAttribute){for(let J=0;J<ne.locationSize;J++)b(ne.location+J,Y.meshPerAttribute);D.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let J=0;J<ne.locationSize;J++)_(ne.location+J);t.bindBuffer(t.ARRAY_BUFFER,me);for(let J=0;J<ne.locationSize;J++)T(ne.location+J,he/ne.locationSize,Te,ie,he*se,he/ne.locationSize*J*se,P)}}else if(G!==void 0){const ie=G[ee];if(ie!==void 0)switch(ie.length){case 2:t.vertexAttrib2fv(ne.location,ie);break;case 3:t.vertexAttrib3fv(ne.location,ie);break;case 4:t.vertexAttrib4fv(ne.location,ie);break;default:t.vertexAttrib1fv(ne.location,ie)}}}}S()}function M(){W();for(const D in a){const V=a[D];for(const j in V){const K=V[j];for(const N in K)m(K[N].object),delete K[N];delete V[j]}delete a[D]}}function w(D){if(a[D.id]===void 0)return;const V=a[D.id];for(const j in V){const K=V[j];for(const N in K)m(K[N].object),delete K[N];delete V[j]}delete a[D.id]}function O(D){for(const V in a){const j=a[V];if(j[D.id]===void 0)continue;const K=j[D.id];for(const N in K)m(K[N].object),delete K[N];delete j[D.id]}}function W(){te(),c=!0,u!==l&&(u=l,p(u.object))}function te(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:W,resetDefaultState:te,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:O,initAttributes:v,enableAttribute:_,disableUnusedAttributes:S}}function Z1(t,e,n,i){const r=i.isWebGL2;let o;function s(c){o=c}function a(c,h){t.drawArrays(o,c,h),n.update(h,o,1)}function l(c,h,d){if(d===0)return;let p,m;if(r)p=t,m="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](o,c,h,d),n.update(h,o,d)}function u(c,h,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d;m++)this.render(c[m],h[m]);else{p.multiDrawArraysWEBGL(o,c,0,h,0,d);let m=0;for(let y=0;y<d;y++)m+=h[y];n.update(m,o,1)}}this.setMode=s,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function J1(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=o(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=s||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),f=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,_=s||e.has("OES_texture_float"),b=v&&_,S=s?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:m,maxAttributes:y,maxVertexUniforms:g,maxVaryings:f,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:_,floatVertexTextures:b,maxSamples:S}}function Q1(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new wr,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){o=!0,c(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,d){n=c(h,d,0)},this.setState=function(h,d,p){const m=h.clippingPlanes,y=h.clipIntersection,g=h.clipShadows,f=t.get(h);if(!r||m===null||m.length===0||o&&!g)o?c(null):u();else{const x=o?0:i,v=x*4;let _=f.clippingState||null;l.value=_,_=c(m,d,v,p);for(let b=0;b!==v;++b)_[b]=n[b];f.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(h,d,p,m){const y=h!==null?h.length:0;let g=null;if(y!==0){if(g=l.value,m!==!0||g===null){const f=p+y*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<f)&&(g=new Float32Array(f));for(let v=0,_=p;v!==y;++v,_+=4)s.copy(h[v]).applyMatrix4(x,a),s.normal.toArray(g,_),g[_+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function eT(t){let e=new WeakMap;function n(s,a){return a===od?s.mapping=ns:a===sd&&(s.mapping=is),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===od||a===sd)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new dE(l.height/2);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",r),n(u.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class T_ extends M_{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Uo=4,Hm=[.125,.215,.35,.446,.526,.582],br=20,Yc=new T_,Gm=new Fe;let qc=null,$c=0,Kc=0;const Tr=(1+Math.sqrt(5))/2,go=1/Tr,Vm=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Tr,go),new F(0,Tr,-go),new F(go,0,Tr),new F(-go,0,Tr),new F(Tr,go,0),new F(-Tr,go,0)];class Wm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){qc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ym(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qc,$c,Kc),e.scissorTest=!1,hl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ns||e.mapping===is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:pa,format:Qn,colorSpace:Ni,depthBuffer:!1},r=Xm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xm(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tT(o)),this._blurMaterial=nT(o,e,n)}return r}_compileMaterial(e){const n=new zn(this._lodPlanes[0],e);this._renderer.compile(n,Yc)}_sceneToCubeUV(e,n,i,r){const a=new On(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,d=c.toneMapping;c.getClearColor(Gm),c.toneMapping=sr,c.autoClear=!1;const p=new __({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),m=new zn(new Jr,p);let y=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,y=!0):(p.color.copy(Gm),y=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):x===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const v=this._cubeSize;hl(r,x*v,f>2?v:0,v,v),c.setRenderTarget(r),y&&c.render(m,a),c.render(e,a)}m.geometry.dispose(),m.material.dispose(),c.toneMapping=d,c.autoClear=h,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ns||e.mapping===is;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ym()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jm());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new zn(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;hl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Yc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=Vm[(r-1)%Vm.length];this._blur(e,r-1,r,o,s)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new zn(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,m=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*br-1),y=o/m,g=isFinite(o)?1+Math.floor(c*y):br;g>br&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${br}`);const f=[];let x=0;for(let T=0;T<br;++T){const L=T/y,M=Math.exp(-L*L/2);f.push(M),T===0?x+=M:T<g&&(x+=2*M)}for(let T=0;T<f.length;T++)f[T]=f[T]/x;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=f,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=m,d.mipInt.value=v-i;const _=this._sizeLods[r],b=3*_*(r>v-Uo?r-v+Uo:0),S=4*(this._cubeSize-_);hl(n,b,S,3*_,2*_),l.setRenderTarget(n),l.render(h,Yc)}}function tT(t){const e=[],n=[],i=[];let r=t;const o=t-Uo+1+Hm.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-Uo?l=Hm[s-t+Uo-1]:s===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,h=1+u,d=[c,c,h,c,h,h,c,c,h,h,c,h],p=6,m=6,y=3,g=2,f=1,x=new Float32Array(y*m*p),v=new Float32Array(g*m*p),_=new Float32Array(f*m*p);for(let S=0;S<p;S++){const T=S%3*2/3-1,L=S>2?0:-1,M=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];x.set(M,y*m*S),v.set(d,g*m*S);const w=[S,S,S,S,S,S];_.set(w,f*m*S)}const b=new Wn;b.setAttribute("position",new Hn(x,y)),b.setAttribute("uv",new Hn(v,g)),b.setAttribute("faceIndex",new Hn(_,f)),e.push(b),r>Uo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Xm(t,e,n){const i=new Xr(t,e,n);return i.texture.mapping=Ou,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function nT(t,e,n){const i=new Float32Array(br),r=new F(0,1,0);return new jr({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function jm(){return new jr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Ym(){return new jr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function yh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function iT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===od||l===sd,c=l===ns||l===is;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new Wm(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(u&&h&&h.height>0||c&&h&&r(h)){n===null&&(n=new Wm(t));const d=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",o),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function o(a){const l=a.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function rT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function oT(t,e,n,i){const r={},o=new WeakMap;function s(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);for(const m in d.morphAttributes){const y=d.morphAttributes[m];for(let g=0,f=y.length;g<f;g++)e.remove(y[g])}d.removeEventListener("dispose",s),delete r[d.id];const p=o.get(d);p&&(e.remove(p),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const m in d)e.update(d[m],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const m in p){const y=p[m];for(let g=0,f=y.length;g<f;g++)e.update(y[g],t.ARRAY_BUFFER)}}function u(h){const d=[],p=h.index,m=h.attributes.position;let y=0;if(p!==null){const x=p.array;y=p.version;for(let v=0,_=x.length;v<_;v+=3){const b=x[v+0],S=x[v+1],T=x[v+2];d.push(b,S,S,T,T,b)}}else if(m!==void 0){const x=m.array;y=m.version;for(let v=0,_=x.length/3-1;v<_;v+=3){const b=v+0,S=v+1,T=v+2;d.push(b,S,S,T,T,b)}}else return;const g=new(f_(d)?x_:y_)(d,1);g.version=y;const f=o.get(h);f&&e.remove(f),o.set(h,g)}function c(h){const d=o.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&u(h)}else u(h);return o.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function sT(t,e,n,i){const r=i.isWebGL2;let o;function s(p){o=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function c(p,m){t.drawElements(o,m,a,p*l),n.update(m,o,1)}function h(p,m,y){if(y===0)return;let g,f;if(r)g=t,f="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[f](o,m,a,p*l,y),n.update(m,o,y)}function d(p,m,y){if(y===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<y;f++)this.render(p[f]/l,m[f]);else{g.multiDrawElementsWEBGL(o,m,0,a,p,0,y);let f=0;for(let x=0;x<y;x++)f+=m[x];n.update(f,o,1)}}this.setMode=s,this.setIndex=u,this.render=c,this.renderInstances=h,this.renderMultiDraw=d}function aT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function lT(t,e){return t[0]-e[0]}function uT(t,e){return Math.abs(e[1])-Math.abs(t[1])}function cT(t,e,n){const i={},r=new Float32Array(8),o=new WeakMap,s=new Ft,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,h){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,y=m!==void 0?m.length:0;let g=o.get(c);if(g===void 0||g.count!==y){let V=function(){te.dispose(),o.delete(c),c.removeEventListener("dispose",V)};var p=V;g!==void 0&&g.texture.dispose();const v=c.morphAttributes.position!==void 0,_=c.morphAttributes.normal!==void 0,b=c.morphAttributes.color!==void 0,S=c.morphAttributes.position||[],T=c.morphAttributes.normal||[],L=c.morphAttributes.color||[];let M=0;v===!0&&(M=1),_===!0&&(M=2),b===!0&&(M=3);let w=c.attributes.position.count*M,O=1;w>e.maxTextureSize&&(O=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const W=new Float32Array(w*O*4*y),te=new p_(W,w,O,y);te.type=$i,te.needsUpdate=!0;const D=M*4;for(let j=0;j<y;j++){const K=S[j],N=T[j],z=L[j],G=w*O*4*j;for(let ee=0;ee<K.count;ee++){const ne=ee*D;v===!0&&(s.fromBufferAttribute(K,ee),W[G+ne+0]=s.x,W[G+ne+1]=s.y,W[G+ne+2]=s.z,W[G+ne+3]=0),_===!0&&(s.fromBufferAttribute(N,ee),W[G+ne+4]=s.x,W[G+ne+5]=s.y,W[G+ne+6]=s.z,W[G+ne+7]=0),b===!0&&(s.fromBufferAttribute(z,ee),W[G+ne+8]=s.x,W[G+ne+9]=s.y,W[G+ne+10]=s.z,W[G+ne+11]=z.itemSize===4?s.w:1)}}g={count:y,texture:te,size:new ge(w,O)},o.set(c,g),c.addEventListener("dispose",V)}let f=0;for(let v=0;v<d.length;v++)f+=d[v];const x=c.morphTargetsRelative?1:1-f;h.getUniforms().setValue(t,"morphTargetBaseInfluence",x),h.getUniforms().setValue(t,"morphTargetInfluences",d),h.getUniforms().setValue(t,"morphTargetsTexture",g.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",g.size)}else{const m=d===void 0?0:d.length;let y=i[c.id];if(y===void 0||y.length!==m){y=[];for(let _=0;_<m;_++)y[_]=[_,0];i[c.id]=y}for(let _=0;_<m;_++){const b=y[_];b[0]=_,b[1]=d[_]}y.sort(uT);for(let _=0;_<8;_++)_<m&&y[_][1]?(a[_][0]=y[_][0],a[_][1]=y[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(lT);const g=c.morphAttributes.position,f=c.morphAttributes.normal;let x=0;for(let _=0;_<8;_++){const b=a[_],S=b[0],T=b[1];S!==Number.MAX_SAFE_INTEGER&&T?(g&&c.getAttribute("morphTarget"+_)!==g[S]&&c.setAttribute("morphTarget"+_,g[S]),f&&c.getAttribute("morphNormal"+_)!==f[S]&&c.setAttribute("morphNormal"+_,f[S]),r[_]=T,x+=T):(g&&c.hasAttribute("morphTarget"+_)===!0&&c.deleteAttribute("morphTarget"+_),f&&c.hasAttribute("morphNormal"+_)===!0&&c.deleteAttribute("morphNormal"+_),r[_]=0)}const v=c.morphTargetsRelative?1:1-x;h.getUniforms().setValue(t,"morphTargetBaseInfluence",v),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function fT(t,e,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,c=l.geometry,h=e.get(l,c);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function s(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:s}}class A_ extends yn{constructor(e,n,i,r,o,s,a,l,u,c){if(c=c!==void 0?c:Fr,c!==Fr&&c!==rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Fr&&(i=qi),i===void 0&&c===rs&&(i=Or),super(null,r,o,s,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const R_=new yn,b_=new A_(1,1);b_.compareFunction=c_;const C_=new p_,P_=new $M,L_=new E_,qm=[],$m=[],Km=new Float32Array(16),Zm=new Float32Array(9),Jm=new Float32Array(4);function hs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=qm[r];if(o===void 0&&(o=new Float32Array(r),qm[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Lt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Dt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Hu(t,e){let n=$m[e];n===void 0&&(n=new Int32Array(e),$m[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function dT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function hT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2fv(this.addr,e),Dt(n,e)}}function pT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Lt(n,e))return;t.uniform3fv(this.addr,e),Dt(n,e)}}function mT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4fv(this.addr,e),Dt(n,e)}}function gT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Dt(n,e)}else{if(Lt(n,i))return;Jm.set(i),t.uniformMatrix2fv(this.addr,!1,Jm),Dt(n,i)}}function vT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Dt(n,e)}else{if(Lt(n,i))return;Zm.set(i),t.uniformMatrix3fv(this.addr,!1,Zm),Dt(n,i)}}function _T(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Dt(n,e)}else{if(Lt(n,i))return;Km.set(i),t.uniformMatrix4fv(this.addr,!1,Km),Dt(n,i)}}function yT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function xT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2iv(this.addr,e),Dt(n,e)}}function ST(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3iv(this.addr,e),Dt(n,e)}}function MT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4iv(this.addr,e),Dt(n,e)}}function ET(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function wT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2uiv(this.addr,e),Dt(n,e)}}function TT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3uiv(this.addr,e),Dt(n,e)}}function AT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4uiv(this.addr,e),Dt(n,e)}}function RT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const o=this.type===t.SAMPLER_2D_SHADOW?b_:R_;n.setTexture2D(e||o,r)}function bT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||P_,r)}function CT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||L_,r)}function PT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||C_,r)}function LT(t){switch(t){case 5126:return dT;case 35664:return hT;case 35665:return pT;case 35666:return mT;case 35674:return gT;case 35675:return vT;case 35676:return _T;case 5124:case 35670:return yT;case 35667:case 35671:return xT;case 35668:case 35672:return ST;case 35669:case 35673:return MT;case 5125:return ET;case 36294:return wT;case 36295:return TT;case 36296:return AT;case 35678:case 36198:case 36298:case 36306:case 35682:return RT;case 35679:case 36299:case 36307:return bT;case 35680:case 36300:case 36308:case 36293:return CT;case 36289:case 36303:case 36311:case 36292:return PT}}function DT(t,e){t.uniform1fv(this.addr,e)}function IT(t,e){const n=hs(e,this.size,2);t.uniform2fv(this.addr,n)}function NT(t,e){const n=hs(e,this.size,3);t.uniform3fv(this.addr,n)}function UT(t,e){const n=hs(e,this.size,4);t.uniform4fv(this.addr,n)}function OT(t,e){const n=hs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function FT(t,e){const n=hs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function kT(t,e){const n=hs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function zT(t,e){t.uniform1iv(this.addr,e)}function BT(t,e){t.uniform2iv(this.addr,e)}function HT(t,e){t.uniform3iv(this.addr,e)}function GT(t,e){t.uniform4iv(this.addr,e)}function VT(t,e){t.uniform1uiv(this.addr,e)}function WT(t,e){t.uniform2uiv(this.addr,e)}function XT(t,e){t.uniform3uiv(this.addr,e)}function jT(t,e){t.uniform4uiv(this.addr,e)}function YT(t,e,n){const i=this.cache,r=e.length,o=Hu(n,r);Lt(i,o)||(t.uniform1iv(this.addr,o),Dt(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||R_,o[s])}function qT(t,e,n){const i=this.cache,r=e.length,o=Hu(n,r);Lt(i,o)||(t.uniform1iv(this.addr,o),Dt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||P_,o[s])}function $T(t,e,n){const i=this.cache,r=e.length,o=Hu(n,r);Lt(i,o)||(t.uniform1iv(this.addr,o),Dt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||L_,o[s])}function KT(t,e,n){const i=this.cache,r=e.length,o=Hu(n,r);Lt(i,o)||(t.uniform1iv(this.addr,o),Dt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||C_,o[s])}function ZT(t){switch(t){case 5126:return DT;case 35664:return IT;case 35665:return NT;case 35666:return UT;case 35674:return OT;case 35675:return FT;case 35676:return kT;case 5124:case 35670:return zT;case 35667:case 35671:return BT;case 35668:case 35672:return HT;case 35669:case 35673:return GT;case 5125:return VT;case 36294:return WT;case 36295:return XT;case 36296:return jT;case 35678:case 36198:case 36298:case 36306:case 35682:return YT;case 35679:case 36299:case 36307:return qT;case 35680:case 36300:case 36308:case 36293:return $T;case 36289:case 36303:case 36311:case 36292:return KT}}class JT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=LT(n.type)}}class QT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=ZT(n.type)}}class eA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const Zc=/(\w+)(\])?(\[|\.)?/g;function Qm(t,e){t.seq.push(e),t.map[e.id]=e}function tA(t,e,n){const i=t.name,r=i.length;for(Zc.lastIndex=0;;){const o=Zc.exec(i),s=Zc.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){Qm(n,u===void 0?new JT(a,t,e):new QT(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new eA(a),Qm(n,h)),n=h}}}class Ol{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);tA(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function eg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const nA=37297;let iA=0;function rA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function oA(t){const e=et.getPrimaries(et.workingColorSpace),n=et.getPrimaries(t);let i;switch(e===n?i="":e===fu&&n===cu?i="LinearDisplayP3ToLinearSRGB":e===cu&&n===fu&&(i="LinearSRGBToLinearDisplayP3"),t){case Ni:case Fu:return[i,"LinearTransferOETF"];case Vt:case vh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function tg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+rA(t.getShaderSource(e),s)}else return r}function sA(t,e){const n=oA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function aA(t,e){let n;switch(e){case _M:n="Linear";break;case yM:n="Reinhard";break;case xM:n="OptimizedCineon";break;case SM:n="ACESFilmic";break;case EM:n="AgX";break;case MM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function lA(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Oo).join(`
`)}function uA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Oo).join(`
`)}function cA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function fA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function Oo(t){return t!==""}function ng(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ig(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dA=/^[ \t]*#include +<([\w\d./]+)>/gm;function dd(t){return t.replace(dA,pA)}const hA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function pA(t,e){let n=Ve[e];if(n===void 0){const i=hA.get(e);if(i!==void 0)n=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return dd(n)}const mA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rg(t){return t.replace(mA,gA)}function gA(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function og(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Zv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Jv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function _A(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ns:case is:e="ENVMAP_TYPE_CUBE";break;case Ou:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case is:e="ENVMAP_MODE_REFRACTION";break}return e}function xA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Qv:e="ENVMAP_BLENDING_MULTIPLY";break;case gM:e="ENVMAP_BLENDING_MIX";break;case vM:e="ENVMAP_BLENDING_ADD";break}return e}function SA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function MA(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=vA(n),u=_A(n),c=yA(n),h=xA(n),d=SA(n),p=n.isWebGL2?"":lA(n),m=uA(n),y=cA(o),g=r.createProgram();let f,x,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Oo).join(`
`),f.length>0&&(f+=`
`),x=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Oo).join(`
`),x.length>0&&(x+=`
`)):(f=[og(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),x=[p,og(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==sr?"#define TONE_MAPPING":"",n.toneMapping!==sr?Ve.tonemapping_pars_fragment:"",n.toneMapping!==sr?aA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,sA("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Oo).join(`
`)),s=dd(s),s=ng(s,n),s=ig(s,n),a=dd(a),a=ng(a,n),a=ig(a,n),s=rg(s),a=rg(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,x=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Em?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Em?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const _=v+f+s,b=v+x+a,S=eg(r,r.VERTEX_SHADER,_),T=eg(r,r.FRAGMENT_SHADER,b);r.attachShader(g,S),r.attachShader(g,T),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function L(W){if(t.debug.checkShaderErrors){const te=r.getProgramInfoLog(g).trim(),D=r.getShaderInfoLog(S).trim(),V=r.getShaderInfoLog(T).trim();let j=!0,K=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,S,T);else{const N=tg(r,S,"vertex"),z=tg(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+te+`
`+N+`
`+z)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(D===""||V==="")&&(K=!1);K&&(W.diagnostics={runnable:j,programLog:te,vertexShader:{log:D,prefix:f},fragmentShader:{log:V,prefix:x}})}r.deleteShader(S),r.deleteShader(T),M=new Ol(r,g),w=fA(r,g)}let M;this.getUniforms=function(){return M===void 0&&L(this),M};let w;this.getAttributes=function(){return w===void 0&&L(this),w};let O=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(g,nA)),O},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=iA++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=T,this}let EA=0;class wA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new TA(e),n.set(e,i)),i}}class TA{constructor(e){this.id=EA++,this.code=e,this.usedTimes=0}}function AA(t,e,n,i,r,o,s){const a=new g_,l=new wA,u=[],c=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return M===0?"uv":`uv${M}`}function g(M,w,O,W,te){const D=W.fog,V=te.geometry,j=M.isMeshStandardMaterial?W.environment:null,K=(M.isMeshStandardMaterial?n:e).get(M.envMap||j),N=K&&K.mapping===Ou?K.image.height:null,z=m[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const G=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ee=G!==void 0?G.length:0;let ne=0;V.morphAttributes.position!==void 0&&(ne=1),V.morphAttributes.normal!==void 0&&(ne=2),V.morphAttributes.color!==void 0&&(ne=3);let Y,ie,he,ye;if(z){const tn=ai[z];Y=tn.vertexShader,ie=tn.fragmentShader}else Y=M.vertexShader,ie=M.fragmentShader,l.update(M),he=l.getVertexShaderID(M),ye=l.getFragmentShaderID(M);const me=t.getRenderTarget(),Te=te.isInstancedMesh===!0,se=te.isBatchedMesh===!0,P=!!M.map,J=!!M.matcap,A=!!K,k=!!M.aoMap,U=!!M.lightMap,Q=!!M.bumpMap,H=!!M.normalMap,pe=!!M.displacementMap,ce=!!M.emissiveMap,R=!!M.metalnessMap,E=!!M.roughnessMap,B=M.anisotropy>0,fe=M.clearcoat>0,le=M.iridescence>0,ae=M.sheen>0,Ce=M.transmission>0,xe=B&&!!M.anisotropyMap,Ae=fe&&!!M.clearcoatMap,De=fe&&!!M.clearcoatNormalMap,Be=fe&&!!M.clearcoatRoughnessMap,ue=le&&!!M.iridescenceMap,Ze=le&&!!M.iridescenceThicknessMap,qe=ae&&!!M.sheenColorMap,ke=ae&&!!M.sheenRoughnessMap,Le=!!M.specularMap,Re=!!M.specularColorMap,Ge=!!M.specularIntensityMap,Je=Ce&&!!M.transmissionMap,vt=Ce&&!!M.thicknessMap,Xe=!!M.gradientMap,ve=!!M.alphaMap,I=M.alphaTest>0,Se=!!M.alphaHash,Me=!!M.extensions,Ue=!!V.attributes.uv1,Ie=!!V.attributes.uv2,nt=!!V.attributes.uv3;let it=sr;return M.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(it=t.toneMapping),{isWebGL2:c,shaderID:z,shaderType:M.type,shaderName:M.name,vertexShader:Y,fragmentShader:ie,defines:M.defines,customVertexShaderID:he,customFragmentShaderID:ye,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:se,instancing:Te,instancingColor:Te&&te.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:me===null?t.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Ni,map:P,matcap:J,envMap:A,envMapMode:A&&K.mapping,envMapCubeUVHeight:N,aoMap:k,lightMap:U,bumpMap:Q,normalMap:H,displacementMap:d&&pe,emissiveMap:ce,normalMapObjectSpace:H&&M.normalMapType===UM,normalMapTangentSpace:H&&M.normalMapType===u_,metalnessMap:R,roughnessMap:E,anisotropy:B,anisotropyMap:xe,clearcoat:fe,clearcoatMap:Ae,clearcoatNormalMap:De,clearcoatRoughnessMap:Be,iridescence:le,iridescenceMap:ue,iridescenceThicknessMap:Ze,sheen:ae,sheenColorMap:qe,sheenRoughnessMap:ke,specularMap:Le,specularColorMap:Re,specularIntensityMap:Ge,transmission:Ce,transmissionMap:Je,thicknessMap:vt,gradientMap:Xe,opaque:M.transparent===!1&&M.blending===Xo,alphaMap:ve,alphaTest:I,alphaHash:Se,combine:M.combine,mapUv:P&&y(M.map.channel),aoMapUv:k&&y(M.aoMap.channel),lightMapUv:U&&y(M.lightMap.channel),bumpMapUv:Q&&y(M.bumpMap.channel),normalMapUv:H&&y(M.normalMap.channel),displacementMapUv:pe&&y(M.displacementMap.channel),emissiveMapUv:ce&&y(M.emissiveMap.channel),metalnessMapUv:R&&y(M.metalnessMap.channel),roughnessMapUv:E&&y(M.roughnessMap.channel),anisotropyMapUv:xe&&y(M.anisotropyMap.channel),clearcoatMapUv:Ae&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:De&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:ke&&y(M.sheenRoughnessMap.channel),specularMapUv:Le&&y(M.specularMap.channel),specularColorMapUv:Re&&y(M.specularColorMap.channel),specularIntensityMapUv:Ge&&y(M.specularIntensityMap.channel),transmissionMapUv:Je&&y(M.transmissionMap.channel),thicknessMapUv:vt&&y(M.thicknessMap.channel),alphaMapUv:ve&&y(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(H||B),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:Ue,vertexUv2s:Ie,vertexUv3s:nt,pointsUvs:te.isPoints===!0&&!!V.attributes.uv&&(P||ve),fog:!!D,useFog:M.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:te.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ne,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&O.length>0,shadowMapType:t.shadowMap.type,toneMapping:it,useLegacyLights:t._useLegacyLights,decodeVideoTexture:P&&M.map.isVideoTexture===!0&&et.getTransfer(M.map.colorSpace)===at,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===dn,flipSided:M.side===_n,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Me&&M.extensions.derivatives===!0,extensionFragDepth:Me&&M.extensions.fragDepth===!0,extensionDrawBuffers:Me&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Me&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Me&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const O in M.defines)w.push(O),w.push(M.defines[O]);return M.isRawShaderMaterial===!1&&(x(w,M),v(w,M),w.push(t.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function x(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function v(M,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function _(M){const w=m[M.type];let O;if(w){const W=ai[w];O=lE.clone(W.uniforms)}else O=M.uniforms;return O}function b(M,w){let O;for(let W=0,te=u.length;W<te;W++){const D=u[W];if(D.cacheKey===w){O=D,++O.usedTimes;break}}return O===void 0&&(O=new MA(t,w,M,o),u.push(O)),O}function S(M){if(--M.usedTimes===0){const w=u.indexOf(M);u[w]=u[u.length-1],u.pop(),M.destroy()}}function T(M){l.remove(M)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:_,acquireProgram:b,releaseProgram:S,releaseShaderCache:T,programs:u,dispose:L}}function RA(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function bA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function sg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ag(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(h,d,p,m,y,g){let f=t[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:m,renderOrder:h.renderOrder,z:y,group:g},t[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=m,f.renderOrder=h.renderOrder,f.z=y,f.group=g),e++,f}function a(h,d,p,m,y,g){const f=s(h,d,p,m,y,g);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(h,d,p,m,y,g){const f=s(h,d,p,m,y,g);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function u(h,d){n.length>1&&n.sort(h||bA),i.length>1&&i.sort(d||sg),r.length>1&&r.sort(d||sg)}function c(){for(let h=e,d=t.length;h<d;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:c,sort:u}}function CA(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new ag,t.set(i,[s])):r>=o.length?(s=new ag,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function PA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new Fe};break;case"SpotLight":n={position:new F,direction:new F,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":n={color:new Fe,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function LA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let DA=0;function IA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function NA(t,e){const n=new PA,i=LA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new F);const o=new F,s=new Mt,a=new Mt;function l(c,h){let d=0,p=0,m=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let y=0,g=0,f=0,x=0,v=0,_=0,b=0,S=0,T=0,L=0,M=0;c.sort(IA);const w=h===!0?Math.PI:1;for(let W=0,te=c.length;W<te;W++){const D=c[W],V=D.color,j=D.intensity,K=D.distance,N=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=V.r*j*w,p+=V.g*j*w,m+=V.b*j*w;else if(D.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(D.sh.coefficients[z],j);M++}else if(D.isDirectionalLight){const z=n.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity*w),D.castShadow){const G=D.shadow,ee=i.get(D);ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,r.directionalShadow[y]=ee,r.directionalShadowMap[y]=N,r.directionalShadowMatrix[y]=D.shadow.matrix,_++}r.directional[y]=z,y++}else if(D.isSpotLight){const z=n.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(V).multiplyScalar(j*w),z.distance=K,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,r.spot[f]=z;const G=D.shadow;if(D.map&&(r.spotLightMap[T]=D.map,T++,G.updateMatrices(D),D.castShadow&&L++),r.spotLightMatrix[f]=G.matrix,D.castShadow){const ee=i.get(D);ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,r.spotShadow[f]=ee,r.spotShadowMap[f]=N,S++}f++}else if(D.isRectAreaLight){const z=n.get(D);z.color.copy(V).multiplyScalar(j),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),r.rectArea[x]=z,x++}else if(D.isPointLight){const z=n.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity*w),z.distance=D.distance,z.decay=D.decay,D.castShadow){const G=D.shadow,ee=i.get(D);ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,ee.shadowCameraNear=G.camera.near,ee.shadowCameraFar=G.camera.far,r.pointShadow[g]=ee,r.pointShadowMap[g]=N,r.pointShadowMatrix[g]=D.shadow.matrix,b++}r.point[g]=z,g++}else if(D.isHemisphereLight){const z=n.get(D);z.skyColor.copy(D.color).multiplyScalar(j*w),z.groundColor.copy(D.groundColor).multiplyScalar(j*w),r.hemi[v]=z,v++}}x>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_FLOAT_1,r.rectAreaLTC2=_e.LTC_FLOAT_2):(r.rectAreaLTC1=_e.LTC_HALF_1,r.rectAreaLTC2=_e.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_FLOAT_1,r.rectAreaLTC2=_e.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_HALF_1,r.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=m;const O=r.hash;(O.directionalLength!==y||O.pointLength!==g||O.spotLength!==f||O.rectAreaLength!==x||O.hemiLength!==v||O.numDirectionalShadows!==_||O.numPointShadows!==b||O.numSpotShadows!==S||O.numSpotMaps!==T||O.numLightProbes!==M)&&(r.directional.length=y,r.spot.length=f,r.rectArea.length=x,r.point.length=g,r.hemi.length=v,r.directionalShadow.length=_,r.directionalShadowMap.length=_,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=S,r.spotShadowMap.length=S,r.directionalShadowMatrix.length=_,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=S+T-L,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=M,O.directionalLength=y,O.pointLength=g,O.spotLength=f,O.rectAreaLength=x,O.hemiLength=v,O.numDirectionalShadows=_,O.numPointShadows=b,O.numSpotShadows=S,O.numSpotMaps=T,O.numLightProbes=M,r.version=DA++)}function u(c,h){let d=0,p=0,m=0,y=0,g=0;const f=h.matrixWorldInverse;for(let x=0,v=c.length;x<v;x++){const _=c[x];if(_.isDirectionalLight){const b=r.directional[d];b.direction.setFromMatrixPosition(_.matrixWorld),o.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(f),d++}else if(_.isSpotLight){const b=r.spot[m];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(_.matrixWorld),o.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(f),m++}else if(_.isRectAreaLight){const b=r.rectArea[y];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(f),a.identity(),s.copy(_.matrixWorld),s.premultiply(f),a.extractRotation(s),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),y++}else if(_.isPointLight){const b=r.point[p];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(f),p++}else if(_.isHemisphereLight){const b=r.hemi[g];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(f),g++}}}return{setup:l,setupView:u,state:r}}function lg(t,e){const n=new NA(t,e),i=[],r=[];function o(){i.length=0,r.length=0}function s(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function u(h){n.setupView(i,h)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:s,pushShadow:a}}function UA(t,e){let n=new WeakMap;function i(o,s=0){const a=n.get(o);let l;return a===void 0?(l=new lg(t,e),n.set(o,[l])):s>=a.length?(l=new lg(t,e),a.push(l)):l=a[s],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class OA extends Zr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=IM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class FA extends Zr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function BA(t,e,n){let i=new _h;const r=new ge,o=new ge,s=new Ft,a=new OA({depthPacking:NM}),l=new FA,u={},c=n.maxTextureSize,h={[fr]:_n,[_n]:fr,[dn]:dn},d=new jr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:kA,fragmentShader:zA}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const m=new Wn;m.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new zn(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zv;let f=this.type;this.render=function(S,T,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;const M=t.getRenderTarget(),w=t.getActiveCubeFace(),O=t.getActiveMipmapLevel(),W=t.state;W.setBlending(or),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const te=f!==yi&&this.type===yi,D=f===yi&&this.type!==yi;for(let V=0,j=S.length;V<j;V++){const K=S[V],N=K.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const z=N.getFrameExtents();if(r.multiply(z),o.copy(N.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(o.x=Math.floor(c/z.x),r.x=o.x*z.x,N.mapSize.x=o.x),r.y>c&&(o.y=Math.floor(c/z.y),r.y=o.y*z.y,N.mapSize.y=o.y)),N.map===null||te===!0||D===!0){const ee=this.type!==yi?{minFilter:an,magFilter:an}:{};N.map!==null&&N.map.dispose(),N.map=new Xr(r.x,r.y,ee),N.map.texture.name=K.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const G=N.getViewportCount();for(let ee=0;ee<G;ee++){const ne=N.getViewport(ee);s.set(o.x*ne.x,o.y*ne.y,o.x*ne.z,o.y*ne.w),W.viewport(s),N.updateMatrices(K,ee),i=N.getFrustum(),_(T,L,N.camera,K,this.type)}N.isPointLightShadow!==!0&&this.type===yi&&x(N,L),N.needsUpdate=!1}f=this.type,g.needsUpdate=!1,t.setRenderTarget(M,w,O)};function x(S,T){const L=e.update(y);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Xr(r.x,r.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,t.setRenderTarget(S.mapPass),t.clear(),t.renderBufferDirect(T,null,L,d,y,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,t.setRenderTarget(S.map),t.clear(),t.renderBufferDirect(T,null,L,p,y,null)}function v(S,T,L,M){let w=null;const O=L.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(O!==void 0)w=O;else if(w=L.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const W=w.uuid,te=T.uuid;let D=u[W];D===void 0&&(D={},u[W]=D);let V=D[te];V===void 0&&(V=w.clone(),D[te]=V,T.addEventListener("dispose",b)),w=V}if(w.visible=T.visible,w.wireframe=T.wireframe,M===yi?w.side=T.shadowSide!==null?T.shadowSide:T.side:w.side=T.shadowSide!==null?T.shadowSide:h[T.side],w.alphaMap=T.alphaMap,w.alphaTest=T.alphaTest,w.map=T.map,w.clipShadows=T.clipShadows,w.clippingPlanes=T.clippingPlanes,w.clipIntersection=T.clipIntersection,w.displacementMap=T.displacementMap,w.displacementScale=T.displacementScale,w.displacementBias=T.displacementBias,w.wireframeLinewidth=T.wireframeLinewidth,w.linewidth=T.linewidth,L.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const W=t.properties.get(w);W.light=L}return w}function _(S,T,L,M,w){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&w===yi)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,S.matrixWorld);const te=e.update(S),D=S.material;if(Array.isArray(D)){const V=te.groups;for(let j=0,K=V.length;j<K;j++){const N=V[j],z=D[N.materialIndex];if(z&&z.visible){const G=v(S,z,M,w);S.onBeforeShadow(t,S,T,L,te,G,N),t.renderBufferDirect(L,null,te,G,S,N),S.onAfterShadow(t,S,T,L,te,G,N)}}}else if(D.visible){const V=v(S,D,M,w);S.onBeforeShadow(t,S,T,L,te,V,null),t.renderBufferDirect(L,null,te,V,S,null),S.onAfterShadow(t,S,T,L,te,V,null)}}const W=S.children;for(let te=0,D=W.length;te<D;te++)_(W[te],T,L,M,w)}function b(S){S.target.removeEventListener("dispose",b);for(const L in u){const M=u[L],w=S.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function HA(t,e,n){const i=n.isWebGL2;function r(){let I=!1;const Se=new Ft;let Me=null;const Ue=new Ft(0,0,0,0);return{setMask:function(Ie){Me!==Ie&&!I&&(t.colorMask(Ie,Ie,Ie,Ie),Me=Ie)},setLocked:function(Ie){I=Ie},setClear:function(Ie,nt,it,It,tn){tn===!0&&(Ie*=It,nt*=It,it*=It),Se.set(Ie,nt,it,It),Ue.equals(Se)===!1&&(t.clearColor(Ie,nt,it,It),Ue.copy(Se))},reset:function(){I=!1,Me=null,Ue.set(-1,0,0,0)}}}function o(){let I=!1,Se=null,Me=null,Ue=null;return{setTest:function(Ie){Ie?se(t.DEPTH_TEST):P(t.DEPTH_TEST)},setMask:function(Ie){Se!==Ie&&!I&&(t.depthMask(Ie),Se=Ie)},setFunc:function(Ie){if(Me!==Ie){switch(Ie){case uM:t.depthFunc(t.NEVER);break;case cM:t.depthFunc(t.ALWAYS);break;case fM:t.depthFunc(t.LESS);break;case lu:t.depthFunc(t.LEQUAL);break;case dM:t.depthFunc(t.EQUAL);break;case hM:t.depthFunc(t.GEQUAL);break;case pM:t.depthFunc(t.GREATER);break;case mM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Me=Ie}},setLocked:function(Ie){I=Ie},setClear:function(Ie){Ue!==Ie&&(t.clearDepth(Ie),Ue=Ie)},reset:function(){I=!1,Se=null,Me=null,Ue=null}}}function s(){let I=!1,Se=null,Me=null,Ue=null,Ie=null,nt=null,it=null,It=null,tn=null;return{setTest:function(rt){I||(rt?se(t.STENCIL_TEST):P(t.STENCIL_TEST))},setMask:function(rt){Se!==rt&&!I&&(t.stencilMask(rt),Se=rt)},setFunc:function(rt,nn,ri){(Me!==rt||Ue!==nn||Ie!==ri)&&(t.stencilFunc(rt,nn,ri),Me=rt,Ue=nn,Ie=ri)},setOp:function(rt,nn,ri){(nt!==rt||it!==nn||It!==ri)&&(t.stencilOp(rt,nn,ri),nt=rt,it=nn,It=ri)},setLocked:function(rt){I=rt},setClear:function(rt){tn!==rt&&(t.clearStencil(rt),tn=rt)},reset:function(){I=!1,Se=null,Me=null,Ue=null,Ie=null,nt=null,it=null,It=null,tn=null}}}const a=new r,l=new o,u=new s,c=new WeakMap,h=new WeakMap;let d={},p={},m=new WeakMap,y=[],g=null,f=!1,x=null,v=null,_=null,b=null,S=null,T=null,L=null,M=new Fe(0,0,0),w=0,O=!1,W=null,te=null,D=null,V=null,j=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,z=0;const G=t.getParameter(t.VERSION);G.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(G)[1]),N=z>=1):G.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),N=z>=2);let ee=null,ne={};const Y=t.getParameter(t.SCISSOR_BOX),ie=t.getParameter(t.VIEWPORT),he=new Ft().fromArray(Y),ye=new Ft().fromArray(ie);function me(I,Se,Me,Ue){const Ie=new Uint8Array(4),nt=t.createTexture();t.bindTexture(I,nt),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let it=0;it<Me;it++)i&&(I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY)?t.texImage3D(Se,0,t.RGBA,1,1,Ue,0,t.RGBA,t.UNSIGNED_BYTE,Ie):t.texImage2D(Se+it,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ie);return nt}const Te={};Te[t.TEXTURE_2D]=me(t.TEXTURE_2D,t.TEXTURE_2D,1),Te[t.TEXTURE_CUBE_MAP]=me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Te[t.TEXTURE_2D_ARRAY]=me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Te[t.TEXTURE_3D]=me(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),se(t.DEPTH_TEST),l.setFunc(lu),ce(!1),R(Wp),se(t.CULL_FACE),H(or);function se(I){d[I]!==!0&&(t.enable(I),d[I]=!0)}function P(I){d[I]!==!1&&(t.disable(I),d[I]=!1)}function J(I,Se){return p[I]!==Se?(t.bindFramebuffer(I,Se),p[I]=Se,i&&(I===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=Se),I===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=Se)),!0):!1}function A(I,Se){let Me=y,Ue=!1;if(I)if(Me=m.get(Se),Me===void 0&&(Me=[],m.set(Se,Me)),I.isWebGLMultipleRenderTargets){const Ie=I.texture;if(Me.length!==Ie.length||Me[0]!==t.COLOR_ATTACHMENT0){for(let nt=0,it=Ie.length;nt<it;nt++)Me[nt]=t.COLOR_ATTACHMENT0+nt;Me.length=Ie.length,Ue=!0}}else Me[0]!==t.COLOR_ATTACHMENT0&&(Me[0]=t.COLOR_ATTACHMENT0,Ue=!0);else Me[0]!==t.BACK&&(Me[0]=t.BACK,Ue=!0);Ue&&(n.isWebGL2?t.drawBuffers(Me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Me))}function k(I){return g!==I?(t.useProgram(I),g=I,!0):!1}const U={[Rr]:t.FUNC_ADD,[qS]:t.FUNC_SUBTRACT,[$S]:t.FUNC_REVERSE_SUBTRACT};if(i)U[qp]=t.MIN,U[$p]=t.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(U[qp]=I.MIN_EXT,U[$p]=I.MAX_EXT)}const Q={[KS]:t.ZERO,[ZS]:t.ONE,[JS]:t.SRC_COLOR,[id]:t.SRC_ALPHA,[rM]:t.SRC_ALPHA_SATURATE,[nM]:t.DST_COLOR,[eM]:t.DST_ALPHA,[QS]:t.ONE_MINUS_SRC_COLOR,[rd]:t.ONE_MINUS_SRC_ALPHA,[iM]:t.ONE_MINUS_DST_COLOR,[tM]:t.ONE_MINUS_DST_ALPHA,[oM]:t.CONSTANT_COLOR,[sM]:t.ONE_MINUS_CONSTANT_COLOR,[aM]:t.CONSTANT_ALPHA,[lM]:t.ONE_MINUS_CONSTANT_ALPHA};function H(I,Se,Me,Ue,Ie,nt,it,It,tn,rt){if(I===or){f===!0&&(P(t.BLEND),f=!1);return}if(f===!1&&(se(t.BLEND),f=!0),I!==YS){if(I!==x||rt!==O){if((v!==Rr||S!==Rr)&&(t.blendEquation(t.FUNC_ADD),v=Rr,S=Rr),rt)switch(I){case Xo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Xp:t.blendFunc(t.ONE,t.ONE);break;case jp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Yp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Xo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Xp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case jp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Yp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}_=null,b=null,T=null,L=null,M.set(0,0,0),w=0,x=I,O=rt}return}Ie=Ie||Se,nt=nt||Me,it=it||Ue,(Se!==v||Ie!==S)&&(t.blendEquationSeparate(U[Se],U[Ie]),v=Se,S=Ie),(Me!==_||Ue!==b||nt!==T||it!==L)&&(t.blendFuncSeparate(Q[Me],Q[Ue],Q[nt],Q[it]),_=Me,b=Ue,T=nt,L=it),(It.equals(M)===!1||tn!==w)&&(t.blendColor(It.r,It.g,It.b,tn),M.copy(It),w=tn),x=I,O=!1}function pe(I,Se){I.side===dn?P(t.CULL_FACE):se(t.CULL_FACE);let Me=I.side===_n;Se&&(Me=!Me),ce(Me),I.blending===Xo&&I.transparent===!1?H(or):H(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const Ue=I.stencilWrite;u.setTest(Ue),Ue&&(u.setMask(I.stencilWriteMask),u.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),u.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),B(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?se(t.SAMPLE_ALPHA_TO_COVERAGE):P(t.SAMPLE_ALPHA_TO_COVERAGE)}function ce(I){W!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),W=I)}function R(I){I!==XS?(se(t.CULL_FACE),I!==te&&(I===Wp?t.cullFace(t.BACK):I===jS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):P(t.CULL_FACE),te=I}function E(I){I!==D&&(N&&t.lineWidth(I),D=I)}function B(I,Se,Me){I?(se(t.POLYGON_OFFSET_FILL),(V!==Se||j!==Me)&&(t.polygonOffset(Se,Me),V=Se,j=Me)):P(t.POLYGON_OFFSET_FILL)}function fe(I){I?se(t.SCISSOR_TEST):P(t.SCISSOR_TEST)}function le(I){I===void 0&&(I=t.TEXTURE0+K-1),ee!==I&&(t.activeTexture(I),ee=I)}function ae(I,Se,Me){Me===void 0&&(ee===null?Me=t.TEXTURE0+K-1:Me=ee);let Ue=ne[Me];Ue===void 0&&(Ue={type:void 0,texture:void 0},ne[Me]=Ue),(Ue.type!==I||Ue.texture!==Se)&&(ee!==Me&&(t.activeTexture(Me),ee=Me),t.bindTexture(I,Se||Te[I]),Ue.type=I,Ue.texture=Se)}function Ce(){const I=ne[ee];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function xe(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Be(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ze(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function qe(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ke(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ge(I){he.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),he.copy(I))}function Je(I){ye.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),ye.copy(I))}function vt(I,Se){let Me=h.get(Se);Me===void 0&&(Me=new WeakMap,h.set(Se,Me));let Ue=Me.get(I);Ue===void 0&&(Ue=t.getUniformBlockIndex(Se,I.name),Me.set(I,Ue))}function Xe(I,Se){const Ue=h.get(Se).get(I);c.get(Se)!==Ue&&(t.uniformBlockBinding(Se,Ue,I.__bindingPointIndex),c.set(Se,Ue))}function ve(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},ee=null,ne={},p={},m=new WeakMap,y=[],g=null,f=!1,x=null,v=null,_=null,b=null,S=null,T=null,L=null,M=new Fe(0,0,0),w=0,O=!1,W=null,te=null,D=null,V=null,j=null,he.set(0,0,t.canvas.width,t.canvas.height),ye.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:se,disable:P,bindFramebuffer:J,drawBuffers:A,useProgram:k,setBlending:H,setMaterial:pe,setFlipSided:ce,setCullFace:R,setLineWidth:E,setPolygonOffset:B,setScissorTest:fe,activeTexture:le,bindTexture:ae,unbindTexture:Ce,compressedTexImage2D:xe,compressedTexImage3D:Ae,texImage2D:Le,texImage3D:Re,updateUBOMapping:vt,uniformBlockBinding:Xe,texStorage2D:qe,texStorage3D:ke,texSubImage2D:De,texSubImage3D:Be,compressedTexSubImage2D:ue,compressedTexSubImage3D:Ze,scissor:Ge,viewport:Je,reset:ve}}function GA(t,e,n,i,r,o,s){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,E){return p?new OffscreenCanvas(R,E):hu("canvas")}function y(R,E,B,fe){let le=1;if((R.width>fe||R.height>fe)&&(le=fe/Math.max(R.width,R.height)),le<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ae=E?fd:Math.floor,Ce=ae(le*R.width),xe=ae(le*R.height);h===void 0&&(h=m(Ce,xe));const Ae=B?m(Ce,xe):h;return Ae.width=Ce,Ae.height=xe,Ae.getContext("2d").drawImage(R,0,0,Ce,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Ce+"x"+xe+")."),Ae}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function g(R){return wm(R.width)&&wm(R.height)}function f(R){return a?!1:R.wrapS!==Jn||R.wrapT!==Jn||R.minFilter!==an&&R.minFilter!==Nn}function x(R,E){return R.generateMipmaps&&E&&R.minFilter!==an&&R.minFilter!==Nn}function v(R){t.generateMipmap(R)}function _(R,E,B,fe,le=!1){if(a===!1)return E;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ae=E;if(E===t.RED&&(B===t.FLOAT&&(ae=t.R32F),B===t.HALF_FLOAT&&(ae=t.R16F),B===t.UNSIGNED_BYTE&&(ae=t.R8)),E===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(ae=t.R8UI),B===t.UNSIGNED_SHORT&&(ae=t.R16UI),B===t.UNSIGNED_INT&&(ae=t.R32UI),B===t.BYTE&&(ae=t.R8I),B===t.SHORT&&(ae=t.R16I),B===t.INT&&(ae=t.R32I)),E===t.RG&&(B===t.FLOAT&&(ae=t.RG32F),B===t.HALF_FLOAT&&(ae=t.RG16F),B===t.UNSIGNED_BYTE&&(ae=t.RG8)),E===t.RGBA){const Ce=le?uu:et.getTransfer(fe);B===t.FLOAT&&(ae=t.RGBA32F),B===t.HALF_FLOAT&&(ae=t.RGBA16F),B===t.UNSIGNED_BYTE&&(ae=Ce===at?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(ae=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(ae=t.RGB5_A1)}return(ae===t.R16F||ae===t.R32F||ae===t.RG16F||ae===t.RG32F||ae===t.RGBA16F||ae===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function b(R,E,B){return x(R,B)===!0||R.isFramebufferTexture&&R.minFilter!==an&&R.minFilter!==Nn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function S(R){return R===an||R===Kp||R===Mc?t.NEAREST:t.LINEAR}function T(R){const E=R.target;E.removeEventListener("dispose",T),M(E),E.isVideoTexture&&c.delete(E)}function L(R){const E=R.target;E.removeEventListener("dispose",L),O(E)}function M(R){const E=i.get(R);if(E.__webglInit===void 0)return;const B=R.source,fe=d.get(B);if(fe){const le=fe[E.__cacheKey];le.usedTimes--,le.usedTimes===0&&w(R),Object.keys(fe).length===0&&d.delete(B)}i.remove(R)}function w(R){const E=i.get(R);t.deleteTexture(E.__webglTexture);const B=R.source,fe=d.get(B);delete fe[E.__cacheKey],s.memory.textures--}function O(R){const E=R.texture,B=i.get(R),fe=i.get(E);if(fe.__webglTexture!==void 0&&(t.deleteTexture(fe.__webglTexture),s.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(B.__webglFramebuffer[le]))for(let ae=0;ae<B.__webglFramebuffer[le].length;ae++)t.deleteFramebuffer(B.__webglFramebuffer[le][ae]);else t.deleteFramebuffer(B.__webglFramebuffer[le]);B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer[le])}else{if(Array.isArray(B.__webglFramebuffer))for(let le=0;le<B.__webglFramebuffer.length;le++)t.deleteFramebuffer(B.__webglFramebuffer[le]);else t.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&t.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let le=0;le<B.__webglColorRenderbuffer.length;le++)B.__webglColorRenderbuffer[le]&&t.deleteRenderbuffer(B.__webglColorRenderbuffer[le]);B.__webglDepthRenderbuffer&&t.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let le=0,ae=E.length;le<ae;le++){const Ce=i.get(E[le]);Ce.__webglTexture&&(t.deleteTexture(Ce.__webglTexture),s.memory.textures--),i.remove(E[le])}i.remove(E),i.remove(R)}let W=0;function te(){W=0}function D(){const R=W;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),W+=1,R}function V(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function j(R,E){const B=i.get(R);if(R.isVideoTexture&&pe(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){const fe=R.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(B,R,E);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+E)}function K(R,E){const B=i.get(R);if(R.version>0&&B.__version!==R.version){he(B,R,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+E)}function N(R,E){const B=i.get(R);if(R.version>0&&B.__version!==R.version){he(B,R,E);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+E)}function z(R,E){const B=i.get(R);if(R.version>0&&B.__version!==R.version){ye(B,R,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+E)}const G={[Wr]:t.REPEAT,[Jn]:t.CLAMP_TO_EDGE,[ad]:t.MIRRORED_REPEAT},ee={[an]:t.NEAREST,[Kp]:t.NEAREST_MIPMAP_NEAREST,[Mc]:t.NEAREST_MIPMAP_LINEAR,[Nn]:t.LINEAR,[wM]:t.LINEAR_MIPMAP_NEAREST,[ha]:t.LINEAR_MIPMAP_LINEAR},ne={[OM]:t.NEVER,[GM]:t.ALWAYS,[FM]:t.LESS,[c_]:t.LEQUAL,[kM]:t.EQUAL,[HM]:t.GEQUAL,[zM]:t.GREATER,[BM]:t.NOTEQUAL};function Y(R,E,B){if(B?(t.texParameteri(R,t.TEXTURE_WRAP_S,G[E.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,G[E.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,G[E.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,ee[E.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,ee[E.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==Jn||E.wrapT!==Jn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,S(E.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,S(E.minFilter)),E.minFilter!==an&&E.minFilter!==Nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,ne[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const fe=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===an||E.minFilter!==Mc&&E.minFilter!==ha||E.type===$i&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===pa&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(t.texParameterf(R,fe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function ie(R,E){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",T));const fe=E.source;let le=d.get(fe);le===void 0&&(le={},d.set(fe,le));const ae=V(E);if(ae!==R.__cacheKey){le[ae]===void 0&&(le[ae]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,B=!0),le[ae].usedTimes++;const Ce=le[R.__cacheKey];Ce!==void 0&&(le[R.__cacheKey].usedTimes--,Ce.usedTimes===0&&w(E)),R.__cacheKey=ae,R.__webglTexture=le[ae].texture}return B}function he(R,E,B){let fe=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(fe=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(fe=t.TEXTURE_3D);const le=ie(R,E),ae=E.source;n.bindTexture(fe,R.__webglTexture,t.TEXTURE0+B);const Ce=i.get(ae);if(ae.version!==Ce.__version||le===!0){n.activeTexture(t.TEXTURE0+B);const xe=et.getPrimaries(et.workingColorSpace),Ae=E.colorSpace===Fn?null:et.getPrimaries(E.colorSpace),De=E.colorSpace===Fn||xe===Ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const Be=f(E)&&g(E.image)===!1;let ue=y(E.image,Be,!1,r.maxTextureSize);ue=ce(E,ue);const Ze=g(ue)||a,qe=o.convert(E.format,E.colorSpace);let ke=o.convert(E.type),Le=_(E.internalFormat,qe,ke,E.colorSpace,E.isVideoTexture);Y(fe,E,Ze);let Re;const Ge=E.mipmaps,Je=a&&E.isVideoTexture!==!0&&Le!==a_,vt=Ce.__version===void 0||le===!0,Xe=b(E,ue,Ze);if(E.isDepthTexture)Le=t.DEPTH_COMPONENT,a?E.type===$i?Le=t.DEPTH_COMPONENT32F:E.type===qi?Le=t.DEPTH_COMPONENT24:E.type===Or?Le=t.DEPTH24_STENCIL8:Le=t.DEPTH_COMPONENT16:E.type===$i&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Fr&&Le===t.DEPTH_COMPONENT&&E.type!==gh&&E.type!==qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=qi,ke=o.convert(E.type)),E.format===rs&&Le===t.DEPTH_COMPONENT&&(Le=t.DEPTH_STENCIL,E.type!==Or&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Or,ke=o.convert(E.type))),vt&&(Je?n.texStorage2D(t.TEXTURE_2D,1,Le,ue.width,ue.height):n.texImage2D(t.TEXTURE_2D,0,Le,ue.width,ue.height,0,qe,ke,null));else if(E.isDataTexture)if(Ge.length>0&&Ze){Je&&vt&&n.texStorage2D(t.TEXTURE_2D,Xe,Le,Ge[0].width,Ge[0].height);for(let ve=0,I=Ge.length;ve<I;ve++)Re=Ge[ve],Je?n.texSubImage2D(t.TEXTURE_2D,ve,0,0,Re.width,Re.height,qe,ke,Re.data):n.texImage2D(t.TEXTURE_2D,ve,Le,Re.width,Re.height,0,qe,ke,Re.data);E.generateMipmaps=!1}else Je?(vt&&n.texStorage2D(t.TEXTURE_2D,Xe,Le,ue.width,ue.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue.width,ue.height,qe,ke,ue.data)):n.texImage2D(t.TEXTURE_2D,0,Le,ue.width,ue.height,0,qe,ke,ue.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Je&&vt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Xe,Le,Ge[0].width,Ge[0].height,ue.depth);for(let ve=0,I=Ge.length;ve<I;ve++)Re=Ge[ve],E.format!==Qn?qe!==null?Je?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ve,0,0,0,Re.width,Re.height,ue.depth,qe,Re.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ve,Le,Re.width,Re.height,ue.depth,0,Re.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ve,0,0,0,Re.width,Re.height,ue.depth,qe,ke,Re.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ve,Le,Re.width,Re.height,ue.depth,0,qe,ke,Re.data)}else{Je&&vt&&n.texStorage2D(t.TEXTURE_2D,Xe,Le,Ge[0].width,Ge[0].height);for(let ve=0,I=Ge.length;ve<I;ve++)Re=Ge[ve],E.format!==Qn?qe!==null?Je?n.compressedTexSubImage2D(t.TEXTURE_2D,ve,0,0,Re.width,Re.height,qe,Re.data):n.compressedTexImage2D(t.TEXTURE_2D,ve,Le,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?n.texSubImage2D(t.TEXTURE_2D,ve,0,0,Re.width,Re.height,qe,ke,Re.data):n.texImage2D(t.TEXTURE_2D,ve,Le,Re.width,Re.height,0,qe,ke,Re.data)}else if(E.isDataArrayTexture)Je?(vt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Xe,Le,ue.width,ue.height,ue.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,qe,ke,ue.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,ue.width,ue.height,ue.depth,0,qe,ke,ue.data);else if(E.isData3DTexture)Je?(vt&&n.texStorage3D(t.TEXTURE_3D,Xe,Le,ue.width,ue.height,ue.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,qe,ke,ue.data)):n.texImage3D(t.TEXTURE_3D,0,Le,ue.width,ue.height,ue.depth,0,qe,ke,ue.data);else if(E.isFramebufferTexture){if(vt)if(Je)n.texStorage2D(t.TEXTURE_2D,Xe,Le,ue.width,ue.height);else{let ve=ue.width,I=ue.height;for(let Se=0;Se<Xe;Se++)n.texImage2D(t.TEXTURE_2D,Se,Le,ve,I,0,qe,ke,null),ve>>=1,I>>=1}}else if(Ge.length>0&&Ze){Je&&vt&&n.texStorage2D(t.TEXTURE_2D,Xe,Le,Ge[0].width,Ge[0].height);for(let ve=0,I=Ge.length;ve<I;ve++)Re=Ge[ve],Je?n.texSubImage2D(t.TEXTURE_2D,ve,0,0,qe,ke,Re):n.texImage2D(t.TEXTURE_2D,ve,Le,qe,ke,Re);E.generateMipmaps=!1}else Je?(vt&&n.texStorage2D(t.TEXTURE_2D,Xe,Le,ue.width,ue.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,qe,ke,ue)):n.texImage2D(t.TEXTURE_2D,0,Le,qe,ke,ue);x(E,Ze)&&v(fe),Ce.__version=ae.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ye(R,E,B){if(E.image.length!==6)return;const fe=ie(R,E),le=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+B);const ae=i.get(le);if(le.version!==ae.__version||fe===!0){n.activeTexture(t.TEXTURE0+B);const Ce=et.getPrimaries(et.workingColorSpace),xe=E.colorSpace===Fn?null:et.getPrimaries(E.colorSpace),Ae=E.colorSpace===Fn||Ce===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const De=E.isCompressedTexture||E.image[0].isCompressedTexture,Be=E.image[0]&&E.image[0].isDataTexture,ue=[];for(let ve=0;ve<6;ve++)!De&&!Be?ue[ve]=y(E.image[ve],!1,!0,r.maxCubemapSize):ue[ve]=Be?E.image[ve].image:E.image[ve],ue[ve]=ce(E,ue[ve]);const Ze=ue[0],qe=g(Ze)||a,ke=o.convert(E.format,E.colorSpace),Le=o.convert(E.type),Re=_(E.internalFormat,ke,Le,E.colorSpace),Ge=a&&E.isVideoTexture!==!0,Je=ae.__version===void 0||fe===!0;let vt=b(E,Ze,qe);Y(t.TEXTURE_CUBE_MAP,E,qe);let Xe;if(De){Ge&&Je&&n.texStorage2D(t.TEXTURE_CUBE_MAP,vt,Re,Ze.width,Ze.height);for(let ve=0;ve<6;ve++){Xe=ue[ve].mipmaps;for(let I=0;I<Xe.length;I++){const Se=Xe[I];E.format!==Qn?ke!==null?Ge?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,I,0,0,Se.width,Se.height,ke,Se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,I,Re,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,I,0,0,Se.width,Se.height,ke,Le,Se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,I,Re,Se.width,Se.height,0,ke,Le,Se.data)}}}else{Xe=E.mipmaps,Ge&&Je&&(Xe.length>0&&vt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,vt,Re,ue[0].width,ue[0].height));for(let ve=0;ve<6;ve++)if(Be){Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,ue[ve].width,ue[ve].height,ke,Le,ue[ve].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Re,ue[ve].width,ue[ve].height,0,ke,Le,ue[ve].data);for(let I=0;I<Xe.length;I++){const Me=Xe[I].image[ve].image;Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,I+1,0,0,Me.width,Me.height,ke,Le,Me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,I+1,Re,Me.width,Me.height,0,ke,Le,Me.data)}}else{Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,ke,Le,ue[ve]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Re,ke,Le,ue[ve]);for(let I=0;I<Xe.length;I++){const Se=Xe[I];Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,I+1,0,0,ke,Le,Se.image[ve]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,I+1,Re,ke,Le,Se.image[ve])}}}x(E,qe)&&v(t.TEXTURE_CUBE_MAP),ae.__version=le.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function me(R,E,B,fe,le,ae){const Ce=o.convert(B.format,B.colorSpace),xe=o.convert(B.type),Ae=_(B.internalFormat,Ce,xe,B.colorSpace);if(!i.get(E).__hasExternalTextures){const Be=Math.max(1,E.width>>ae),ue=Math.max(1,E.height>>ae);le===t.TEXTURE_3D||le===t.TEXTURE_2D_ARRAY?n.texImage3D(le,ae,Ae,Be,ue,E.depth,0,Ce,xe,null):n.texImage2D(le,ae,Ae,Be,ue,0,Ce,xe,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),H(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,fe,le,i.get(B).__webglTexture,0,Q(E)):(le===t.TEXTURE_2D||le>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,fe,le,i.get(B).__webglTexture,ae),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Te(R,E,B){if(t.bindRenderbuffer(t.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let fe=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(B||H(E)){const le=E.depthTexture;le&&le.isDepthTexture&&(le.type===$i?fe=t.DEPTH_COMPONENT32F:le.type===qi&&(fe=t.DEPTH_COMPONENT24));const ae=Q(E);H(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,fe,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,fe,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,fe,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){const fe=Q(E);B&&H(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,t.DEPTH24_STENCIL8,E.width,E.height):H(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const fe=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let le=0;le<fe.length;le++){const ae=fe[le],Ce=o.convert(ae.format,ae.colorSpace),xe=o.convert(ae.type),Ae=_(ae.internalFormat,Ce,xe,ae.colorSpace),De=Q(E);B&&H(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,De,Ae,E.width,E.height):H(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,De,Ae,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Ae,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function se(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),j(E.depthTexture,0);const fe=i.get(E.depthTexture).__webglTexture,le=Q(E);if(E.depthTexture.format===Fr)H(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,fe,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,fe,0);else if(E.depthTexture.format===rs)H(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,fe,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function P(R){const E=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");se(E.__webglFramebuffer,R)}else if(B){E.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[fe]),E.__webglDepthbuffer[fe]=t.createRenderbuffer(),Te(E.__webglDepthbuffer[fe],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),Te(E.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function J(R,E,B){const fe=i.get(R);E!==void 0&&me(fe.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&P(R)}function A(R){const E=R.texture,B=i.get(R),fe=i.get(E);R.addEventListener("dispose",L),R.isWebGLMultipleRenderTargets!==!0&&(fe.__webglTexture===void 0&&(fe.__webglTexture=t.createTexture()),fe.__version=E.version,s.memory.textures++);const le=R.isWebGLCubeRenderTarget===!0,ae=R.isWebGLMultipleRenderTargets===!0,Ce=g(R)||a;if(le){B.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(a&&E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer[xe]=[];for(let Ae=0;Ae<E.mipmaps.length;Ae++)B.__webglFramebuffer[xe][Ae]=t.createFramebuffer()}else B.__webglFramebuffer[xe]=t.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer=[];for(let xe=0;xe<E.mipmaps.length;xe++)B.__webglFramebuffer[xe]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(ae)if(r.drawBuffers){const xe=R.texture;for(let Ae=0,De=xe.length;Ae<De;Ae++){const Be=i.get(xe[Ae]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&H(R)===!1){const xe=ae?E:[E];B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Ae=0;Ae<xe.length;Ae++){const De=xe[Ae];B.__webglColorRenderbuffer[Ae]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[Ae]);const Be=o.convert(De.format,De.colorSpace),ue=o.convert(De.type),Ze=_(De.internalFormat,Be,ue,De.colorSpace,R.isXRRenderTarget===!0),qe=Q(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,qe,Ze,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,B.__webglColorRenderbuffer[Ae])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),Te(B.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(le){n.bindTexture(t.TEXTURE_CUBE_MAP,fe.__webglTexture),Y(t.TEXTURE_CUBE_MAP,E,Ce);for(let xe=0;xe<6;xe++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let Ae=0;Ae<E.mipmaps.length;Ae++)me(B.__webglFramebuffer[xe][Ae],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ae);else me(B.__webglFramebuffer[xe],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);x(E,Ce)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ae){const xe=R.texture;for(let Ae=0,De=xe.length;Ae<De;Ae++){const Be=xe[Ae],ue=i.get(Be);n.bindTexture(t.TEXTURE_2D,ue.__webglTexture),Y(t.TEXTURE_2D,Be,Ce),me(B.__webglFramebuffer,R,Be,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,0),x(Be,Ce)&&v(t.TEXTURE_2D)}n.unbindTexture()}else{let xe=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?xe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(xe,fe.__webglTexture),Y(xe,E,Ce),a&&E.mipmaps&&E.mipmaps.length>0)for(let Ae=0;Ae<E.mipmaps.length;Ae++)me(B.__webglFramebuffer[Ae],R,E,t.COLOR_ATTACHMENT0,xe,Ae);else me(B.__webglFramebuffer,R,E,t.COLOR_ATTACHMENT0,xe,0);x(E,Ce)&&v(xe),n.unbindTexture()}R.depthBuffer&&P(R)}function k(R){const E=g(R)||a,B=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let fe=0,le=B.length;fe<le;fe++){const ae=B[fe];if(x(ae,E)){const Ce=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,xe=i.get(ae).__webglTexture;n.bindTexture(Ce,xe),v(Ce),n.unbindTexture()}}}function U(R){if(a&&R.samples>0&&H(R)===!1){const E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],B=R.width,fe=R.height;let le=t.COLOR_BUFFER_BIT;const ae=[],Ce=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=i.get(R),Ae=R.isWebGLMultipleRenderTargets===!0;if(Ae)for(let De=0;De<E.length;De++)n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let De=0;De<E.length;De++){ae.push(t.COLOR_ATTACHMENT0+De),R.depthBuffer&&ae.push(Ce);const Be=xe.__ignoreDepthValues!==void 0?xe.__ignoreDepthValues:!1;if(Be===!1&&(R.depthBuffer&&(le|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(le|=t.STENCIL_BUFFER_BIT)),Ae&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,xe.__webglColorRenderbuffer[De]),Be===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Ce]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Ce])),Ae){const ue=i.get(E[De]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ue,0)}t.blitFramebuffer(0,0,B,fe,0,0,B,fe,le,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ae)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Ae)for(let De=0;De<E.length;De++){n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.RENDERBUFFER,xe.__webglColorRenderbuffer[De]);const Be=i.get(E[De]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.TEXTURE_2D,Be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}}function Q(R){return Math.min(r.maxSamples,R.samples)}function H(R){const E=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function pe(R){const E=s.render.frame;c.get(R)!==E&&(c.set(R,E),R.update())}function ce(R,E){const B=R.colorSpace,fe=R.format,le=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===ud||B!==Ni&&B!==Fn&&(et.getTransfer(B)===at?a===!1?e.has("EXT_sRGB")===!0&&fe===Qn?(R.format=ud,R.minFilter=Nn,R.generateMipmaps=!1):E=d_.sRGBToLinear(E):(fe!==Qn||le!==ar)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),E}this.allocateTextureUnit=D,this.resetTextureUnits=te,this.setTexture2D=j,this.setTexture2DArray=K,this.setTexture3D=N,this.setTextureCube=z,this.rebindTextures=J,this.setupRenderTarget=A,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=P,this.setupFrameBufferTexture=me,this.useMultisampledRTT=H}function VA(t,e,n){const i=n.isWebGL2;function r(o,s=Fn){let a;const l=et.getTransfer(s);if(o===ar)return t.UNSIGNED_BYTE;if(o===n_)return t.UNSIGNED_SHORT_4_4_4_4;if(o===i_)return t.UNSIGNED_SHORT_5_5_5_1;if(o===TM)return t.BYTE;if(o===AM)return t.SHORT;if(o===gh)return t.UNSIGNED_SHORT;if(o===t_)return t.INT;if(o===qi)return t.UNSIGNED_INT;if(o===$i)return t.FLOAT;if(o===pa)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===RM)return t.ALPHA;if(o===Qn)return t.RGBA;if(o===bM)return t.LUMINANCE;if(o===CM)return t.LUMINANCE_ALPHA;if(o===Fr)return t.DEPTH_COMPONENT;if(o===rs)return t.DEPTH_STENCIL;if(o===ud)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===PM)return t.RED;if(o===r_)return t.RED_INTEGER;if(o===LM)return t.RG;if(o===o_)return t.RG_INTEGER;if(o===s_)return t.RGBA_INTEGER;if(o===Ec||o===wc||o===Tc||o===Ac)if(l===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===Ec)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===wc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Tc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Ac)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===Ec)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===wc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Tc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Ac)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Zp||o===Jp||o===Qp||o===em)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===Zp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Jp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Qp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===em)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===a_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===tm||o===nm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===tm)return l===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===nm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===im||o===rm||o===om||o===sm||o===am||o===lm||o===um||o===cm||o===fm||o===dm||o===hm||o===pm||o===mm||o===gm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===im)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===rm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===om)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===sm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===am)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===lm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===um)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===cm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===fm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===dm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===hm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===pm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===mm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===gm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Rc||o===vm||o===_m)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===Rc)return l===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===vm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===_m)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===DM||o===ym||o===xm||o===Sm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===Rc)return a.COMPRESSED_RED_RGTC1_EXT;if(o===ym)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===xm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Sm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Or?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:r}}class WA extends On{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Dr extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const XA={type:"move"};class Jc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),f=this._getHandJoint(u,y);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=c.position.distanceTo(h.position),p=.02,m=.005;u.inputState.pinching&&d>p+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(XA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Dr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class jA extends ds{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,u=null,c=null,h=null,d=null,p=null,m=null;const y=n.getContextAttributes();let g=null,f=null;const x=[],v=[],_=new ge;let b=null;const S=new On;S.layers.enable(1),S.viewport=new Ft;const T=new On;T.layers.enable(2),T.viewport=new Ft;const L=[S,T],M=new WA;M.layers.enable(1),M.layers.enable(2);let w=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ie=x[Y];return ie===void 0&&(ie=new Jc,x[Y]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Y){let ie=x[Y];return ie===void 0&&(ie=new Jc,x[Y]=ie),ie.getGripSpace()},this.getHand=function(Y){let ie=x[Y];return ie===void 0&&(ie=new Jc,x[Y]=ie),ie.getHandSpace()};function W(Y){const ie=v.indexOf(Y.inputSource);if(ie===-1)return;const he=x[ie];he!==void 0&&(he.update(Y.inputSource,Y.frame,u||s),he.dispatchEvent({type:Y.type,data:Y.inputSource}))}function te(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",D);for(let Y=0;Y<x.length;Y++){const ie=v[Y];ie!==null&&(v[Y]=null,x[Y].disconnect(ie))}w=null,O=null,e.setRenderTarget(g),p=null,d=null,h=null,r=null,f=null,ne.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(_.width,_.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(Y){u=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",te),r.addEventListener("inputsourceschange",D),y.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(_),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ie={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,n,ie),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Xr(p.framebufferWidth,p.framebufferHeight,{format:Qn,type:ar,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ie=null,he=null,ye=null;y.depth&&(ye=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ie=y.stencil?rs:Fr,he=y.stencil?Or:qi);const me={colorFormat:n.RGBA8,depthFormat:ye,scaleFactor:o};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(me),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new Xr(d.textureWidth,d.textureHeight,{format:Qn,type:ar,depthTexture:new A_(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const Te=e.properties.get(f);Te.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(a),ne.setContext(r),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function D(Y){for(let ie=0;ie<Y.removed.length;ie++){const he=Y.removed[ie],ye=v.indexOf(he);ye>=0&&(v[ye]=null,x[ye].disconnect(he))}for(let ie=0;ie<Y.added.length;ie++){const he=Y.added[ie];let ye=v.indexOf(he);if(ye===-1){for(let Te=0;Te<x.length;Te++)if(Te>=v.length){v.push(he),ye=Te;break}else if(v[Te]===null){v[Te]=he,ye=Te;break}if(ye===-1)break}const me=x[ye];me&&me.connect(he)}}const V=new F,j=new F;function K(Y,ie,he){V.setFromMatrixPosition(ie.matrixWorld),j.setFromMatrixPosition(he.matrixWorld);const ye=V.distanceTo(j),me=ie.projectionMatrix.elements,Te=he.projectionMatrix.elements,se=me[14]/(me[10]-1),P=me[14]/(me[10]+1),J=(me[9]+1)/me[5],A=(me[9]-1)/me[5],k=(me[8]-1)/me[0],U=(Te[8]+1)/Te[0],Q=se*k,H=se*U,pe=ye/(-k+U),ce=pe*-k;ie.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ce),Y.translateZ(pe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const R=se+pe,E=P+pe,B=Q-ce,fe=H+(ye-ce),le=J*P/E*R,ae=A*P/E*R;Y.projectionMatrix.makePerspective(B,fe,le,ae,R,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function N(Y,ie){ie===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ie.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;M.near=T.near=S.near=Y.near,M.far=T.far=S.far=Y.far,(w!==M.near||O!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,O=M.far);const ie=Y.parent,he=M.cameras;N(M,ie);for(let ye=0;ye<he.length;ye++)N(he[ye],ie);he.length===2?K(M,S,T):M.projectionMatrix.copy(S.projectionMatrix),z(Y,M,ie)};function z(Y,ie,he){he===null?Y.matrix.copy(ie.matrixWorld):(Y.matrix.copy(he.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ie.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ie.projectionMatrix),Y.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=cd*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)};let G=null;function ee(Y,ie){if(c=ie.getViewerPose(u||s),m=ie,c!==null){const he=c.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let ye=!1;he.length!==M.cameras.length&&(M.cameras.length=0,ye=!0);for(let me=0;me<he.length;me++){const Te=he[me];let se=null;if(p!==null)se=p.getViewport(Te);else{const J=h.getViewSubImage(d,Te);se=J.viewport,me===0&&(e.setRenderTargetTextures(f,J.colorTexture,d.ignoreDepthValues?void 0:J.depthStencilTexture),e.setRenderTarget(f))}let P=L[me];P===void 0&&(P=new On,P.layers.enable(me),P.viewport=new Ft,L[me]=P),P.matrix.fromArray(Te.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(Te.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(se.x,se.y,se.width,se.height),me===0&&(M.matrix.copy(P.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ye===!0&&M.cameras.push(P)}}for(let he=0;he<x.length;he++){const ye=v[he],me=x[he];ye!==null&&me!==void 0&&me.update(ye,ie,u||s)}G&&G(Y,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),m=null}const ne=new w_;ne.setAnimationLoop(ee),this.setAnimationLoop=function(Y){G=Y},this.dispose=function(){}}}function YA(t,e){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,S_(t)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,x,v,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(g,f):f.isMeshToonMaterial?(o(g,f),h(g,f)):f.isMeshPhongMaterial?(o(g,f),c(g,f)):f.isMeshStandardMaterial?(o(g,f),d(g,f),f.isMeshPhysicalMaterial&&p(g,f,_)):f.isMeshMatcapMaterial?(o(g,f),m(g,f)):f.isMeshDepthMaterial?o(g,f):f.isMeshDistanceMaterial?(o(g,f),y(g,f)):f.isMeshNormalMaterial?o(g,f):f.isLineBasicMaterial?(s(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?l(g,f,x,v):f.isSpriteMaterial?u(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===_n&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===_n&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const x=e.get(f).envMap;if(x&&(g.envMap.value=x,g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap){g.lightMap.value=f.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=f.lightMapIntensity*v,n(f.lightMap,g.lightMapTransform)}f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function s(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,x,v){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*x,g.scale.value=v*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function h(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),e.get(f).envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,x){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===_n&&g.clearcoatNormalScale.value.negate())),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function y(g,f){const x=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function qA(t,e,n,i){let r={},o={},s=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const _=v.program;i.uniformBlockBinding(x,_)}function u(x,v){let _=r[x.id];_===void 0&&(m(x),_=c(x),r[x.id]=_,x.addEventListener("dispose",g));const b=v.program;i.updateUBOMapping(x,b);const S=e.render.frame;o[x.id]!==S&&(d(x),o[x.id]=S)}function c(x){const v=h();x.__bindingPointIndex=v;const _=t.createBuffer(),b=x.__size,S=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,_),t.bufferData(t.UNIFORM_BUFFER,b,S),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,_),_}function h(){for(let x=0;x<a;x++)if(s.indexOf(x)===-1)return s.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=r[x.id],_=x.uniforms,b=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let S=0,T=_.length;S<T;S++){const L=Array.isArray(_[S])?_[S]:[_[S]];for(let M=0,w=L.length;M<w;M++){const O=L[M];if(p(O,S,M,b)===!0){const W=O.__offset,te=Array.isArray(O.value)?O.value:[O.value];let D=0;for(let V=0;V<te.length;V++){const j=te[V],K=y(j);typeof j=="number"||typeof j=="boolean"?(O.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,W+D,O.__data)):j.isMatrix3?(O.__data[0]=j.elements[0],O.__data[1]=j.elements[1],O.__data[2]=j.elements[2],O.__data[3]=0,O.__data[4]=j.elements[3],O.__data[5]=j.elements[4],O.__data[6]=j.elements[5],O.__data[7]=0,O.__data[8]=j.elements[6],O.__data[9]=j.elements[7],O.__data[10]=j.elements[8],O.__data[11]=0):(j.toArray(O.__data,D),D+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,O.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(x,v,_,b){const S=x.value,T=v+"_"+_;if(b[T]===void 0)return typeof S=="number"||typeof S=="boolean"?b[T]=S:b[T]=S.clone(),!0;{const L=b[T];if(typeof S=="number"||typeof S=="boolean"){if(L!==S)return b[T]=S,!0}else if(L.equals(S)===!1)return L.copy(S),!0}return!1}function m(x){const v=x.uniforms;let _=0;const b=16;for(let T=0,L=v.length;T<L;T++){const M=Array.isArray(v[T])?v[T]:[v[T]];for(let w=0,O=M.length;w<O;w++){const W=M[w],te=Array.isArray(W.value)?W.value:[W.value];for(let D=0,V=te.length;D<V;D++){const j=te[D],K=y(j),N=_%b;N!==0&&b-N<K.boundary&&(_+=b-N),W.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=_,_+=K.storage}}}const S=_%b;return S>0&&(_+=b-S),x.__size=_,x.__cache={},this}function y(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){const v=x.target;v.removeEventListener("dispose",g);const _=s.indexOf(v.__bindingPointIndex);s.splice(_,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete o[v.id]}function f(){for(const x in r)t.deleteBuffer(r[x]);s=[],r={},o={}}return{bind:l,update:u,dispose:f}}class D_{constructor(e={}){const{canvas:n=WM(),context:i=null,depth:r=!0,stencil:o=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=s;const p=new Uint32Array(4),m=new Int32Array(4);let y=null,g=null;const f=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this._useLegacyLights=!1,this.toneMapping=sr,this.toneMappingExposure=1;const v=this;let _=!1,b=0,S=0,T=null,L=-1,M=null;const w=new Ft,O=new Ft;let W=null;const te=new Fe(0);let D=0,V=n.width,j=n.height,K=1,N=null,z=null;const G=new Ft(0,0,V,j),ee=new Ft(0,0,V,j);let ne=!1;const Y=new _h;let ie=!1,he=!1,ye=null;const me=new Mt,Te=new ge,se=new F,P={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function J(){return T===null?K:1}let A=i;function k(C,X){for(let $=0;$<C.length;$++){const Z=C[$],q=n.getContext(Z,X);if(q!==null)return q}return null}try{const C={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${mh}`),n.addEventListener("webglcontextlost",ve,!1),n.addEventListener("webglcontextrestored",I,!1),n.addEventListener("webglcontextcreationerror",Se,!1),A===null){const X=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&X.shift(),A=k(X,C),A===null)throw k(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&A instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),A.getShaderPrecisionFormat===void 0&&(A.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let U,Q,H,pe,ce,R,E,B,fe,le,ae,Ce,xe,Ae,De,Be,ue,Ze,qe,ke,Le,Re,Ge,Je;function vt(){U=new rT(A),Q=new J1(A,U,e),U.init(Q),Re=new VA(A,U,Q),H=new HA(A,U,Q),pe=new aT(A),ce=new RA,R=new GA(A,U,H,ce,Q,Re,pe),E=new eT(v),B=new iT(v),fe=new mE(A,Q),Ge=new K1(A,U,fe,Q),le=new oT(A,fe,pe,Ge),ae=new fT(A,le,fe,pe),qe=new cT(A,Q,R),Be=new Q1(ce),Ce=new AA(v,E,B,U,Q,Ge,Be),xe=new YA(v,ce),Ae=new CA,De=new UA(U,Q),Ze=new $1(v,E,B,H,ae,d,l),ue=new BA(v,ae,Q),Je=new qA(A,pe,Q,H),ke=new Z1(A,U,pe,Q),Le=new sT(A,U,pe,Q),pe.programs=Ce.programs,v.capabilities=Q,v.extensions=U,v.properties=ce,v.renderLists=Ae,v.shadowMap=ue,v.state=H,v.info=pe}vt();const Xe=new jA(v,A);this.xr=Xe,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const C=U.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=U.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(C){C!==void 0&&(K=C,this.setSize(V,j,!1))},this.getSize=function(C){return C.set(V,j)},this.setSize=function(C,X,$=!0){if(Xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=C,j=X,n.width=Math.floor(C*K),n.height=Math.floor(X*K),$===!0&&(n.style.width=C+"px",n.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(V*K,j*K).floor()},this.setDrawingBufferSize=function(C,X,$){V=C,j=X,K=$,n.width=Math.floor(C*$),n.height=Math.floor(X*$),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(w)},this.getViewport=function(C){return C.copy(G)},this.setViewport=function(C,X,$,Z){C.isVector4?G.set(C.x,C.y,C.z,C.w):G.set(C,X,$,Z),H.viewport(w.copy(G).multiplyScalar(K).floor())},this.getScissor=function(C){return C.copy(ee)},this.setScissor=function(C,X,$,Z){C.isVector4?ee.set(C.x,C.y,C.z,C.w):ee.set(C,X,$,Z),H.scissor(O.copy(ee).multiplyScalar(K).floor())},this.getScissorTest=function(){return ne},this.setScissorTest=function(C){H.setScissorTest(ne=C)},this.setOpaqueSort=function(C){N=C},this.setTransparentSort=function(C){z=C},this.getClearColor=function(C){return C.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(C=!0,X=!0,$=!0){let Z=0;if(C){let q=!1;if(T!==null){const Ee=T.texture.format;q=Ee===s_||Ee===o_||Ee===r_}if(q){const Ee=T.texture.type,Pe=Ee===ar||Ee===qi||Ee===gh||Ee===Or||Ee===n_||Ee===i_,Ne=Ze.getClearColor(),Oe=Ze.getClearAlpha(),We=Ne.r,ze=Ne.g,He=Ne.b;Pe?(p[0]=We,p[1]=ze,p[2]=He,p[3]=Oe,A.clearBufferuiv(A.COLOR,0,p)):(m[0]=We,m[1]=ze,m[2]=He,m[3]=Oe,A.clearBufferiv(A.COLOR,0,m))}else Z|=A.COLOR_BUFFER_BIT}X&&(Z|=A.DEPTH_BUFFER_BIT),$&&(Z|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ve,!1),n.removeEventListener("webglcontextrestored",I,!1),n.removeEventListener("webglcontextcreationerror",Se,!1),Ae.dispose(),De.dispose(),ce.dispose(),E.dispose(),B.dispose(),ae.dispose(),Ge.dispose(),Je.dispose(),Ce.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",tn),Xe.removeEventListener("sessionend",rt),ye&&(ye.dispose(),ye=null),nn.stop()};function ve(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const C=pe.autoReset,X=ue.enabled,$=ue.autoUpdate,Z=ue.needsUpdate,q=ue.type;vt(),pe.autoReset=C,ue.enabled=X,ue.autoUpdate=$,ue.needsUpdate=Z,ue.type=q}function Se(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Me(C){const X=C.target;X.removeEventListener("dispose",Me),Ue(X)}function Ue(C){Ie(C),ce.remove(C)}function Ie(C){const X=ce.get(C).programs;X!==void 0&&(X.forEach(function($){Ce.releaseProgram($)}),C.isShaderMaterial&&Ce.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,$,Z,q,Ee){X===null&&(X=P);const Pe=q.isMesh&&q.matrixWorld.determinant()<0,Ne=oy(C,X,$,Z,q);H.setMaterial(Z,Pe);let Oe=$.index,We=1;if(Z.wireframe===!0){if(Oe=le.getWireframeAttribute($),Oe===void 0)return;We=2}const ze=$.drawRange,He=$.attributes.position;let Et=ze.start*We,xn=(ze.start+ze.count)*We;Ee!==null&&(Et=Math.max(Et,Ee.start*We),xn=Math.min(xn,(Ee.start+Ee.count)*We)),Oe!==null?(Et=Math.max(Et,0),xn=Math.min(xn,Oe.count)):He!=null&&(Et=Math.max(Et,0),xn=Math.min(xn,He.count));const Nt=xn-Et;if(Nt<0||Nt===1/0)return;Ge.setup(q,Z,Ne,$,Oe);let hi,ft=ke;if(Oe!==null&&(hi=fe.get(Oe),ft=Le,ft.setIndex(hi)),q.isMesh)Z.wireframe===!0?(H.setLineWidth(Z.wireframeLinewidth*J()),ft.setMode(A.LINES)):ft.setMode(A.TRIANGLES);else if(q.isLine){let je=Z.linewidth;je===void 0&&(je=1),H.setLineWidth(je*J()),q.isLineSegments?ft.setMode(A.LINES):q.isLineLoop?ft.setMode(A.LINE_LOOP):ft.setMode(A.LINE_STRIP)}else q.isPoints?ft.setMode(A.POINTS):q.isSprite&&ft.setMode(A.TRIANGLES);if(q.isBatchedMesh)ft.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)ft.renderInstances(Et,Nt,q.count);else if($.isInstancedBufferGeometry){const je=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ju=Math.min($.instanceCount,je);ft.renderInstances(Et,Nt,ju)}else ft.render(Et,Nt)};function nt(C,X,$){C.transparent===!0&&C.side===dn&&C.forceSinglePass===!1?(C.side=_n,C.needsUpdate=!0,ba(C,X,$),C.side=fr,C.needsUpdate=!0,ba(C,X,$),C.side=dn):ba(C,X,$)}this.compile=function(C,X,$=null){$===null&&($=C),g=De.get($),g.init(),x.push(g),$.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),C!==$&&C.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),g.setupLights(v._useLegacyLights);const Z=new Set;return C.traverse(function(q){const Ee=q.material;if(Ee)if(Array.isArray(Ee))for(let Pe=0;Pe<Ee.length;Pe++){const Ne=Ee[Pe];nt(Ne,$,q),Z.add(Ne)}else nt(Ee,$,q),Z.add(Ee)}),x.pop(),g=null,Z},this.compileAsync=function(C,X,$=null){const Z=this.compile(C,X,$);return new Promise(q=>{function Ee(){if(Z.forEach(function(Pe){ce.get(Pe).currentProgram.isReady()&&Z.delete(Pe)}),Z.size===0){q(C);return}setTimeout(Ee,10)}U.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let it=null;function It(C){it&&it(C)}function tn(){nn.stop()}function rt(){nn.start()}const nn=new w_;nn.setAnimationLoop(It),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(C){it=C,Xe.setAnimationLoop(C),C===null?nn.stop():nn.start()},Xe.addEventListener("sessionstart",tn),Xe.addEventListener("sessionend",rt),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(X),X=Xe.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,X,T),g=De.get(C,x.length),g.init(),x.push(g),me.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Y.setFromProjectionMatrix(me),he=this.localClippingEnabled,ie=Be.init(this.clippingPlanes,he),y=Ae.get(C,f.length),y.init(),f.push(y),ri(C,X,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(N,z),this.info.render.frame++,ie===!0&&Be.beginShadows();const $=g.state.shadowsArray;if(ue.render($,C,X),ie===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ze.render(y,C),g.setupLights(v._useLegacyLights),X.isArrayCamera){const Z=X.cameras;for(let q=0,Ee=Z.length;q<Ee;q++){const Pe=Z[q];Ch(y,C,Pe,Pe.viewport)}}else Ch(y,C,X);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),C.isScene===!0&&C.onAfterRender(v,C,X),Ge.resetDefaultState(),L=-1,M=null,x.pop(),x.length>0?g=x[x.length-1]:g=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function ri(C,X,$,Z){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)$=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Y.intersectsSprite(C)){Z&&se.setFromMatrixPosition(C.matrixWorld).applyMatrix4(me);const Pe=ae.update(C),Ne=C.material;Ne.visible&&y.push(C,Pe,Ne,$,se.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Y.intersectsObject(C))){const Pe=ae.update(C),Ne=C.material;if(Z&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),se.copy(C.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),se.copy(Pe.boundingSphere.center)),se.applyMatrix4(C.matrixWorld).applyMatrix4(me)),Array.isArray(Ne)){const Oe=Pe.groups;for(let We=0,ze=Oe.length;We<ze;We++){const He=Oe[We],Et=Ne[He.materialIndex];Et&&Et.visible&&y.push(C,Pe,Et,$,se.z,He)}}else Ne.visible&&y.push(C,Pe,Ne,$,se.z,null)}}const Ee=C.children;for(let Pe=0,Ne=Ee.length;Pe<Ne;Pe++)ri(Ee[Pe],X,$,Z)}function Ch(C,X,$,Z){const q=C.opaque,Ee=C.transmissive,Pe=C.transparent;g.setupLightsView($),ie===!0&&Be.setGlobalState(v.clippingPlanes,$),Ee.length>0&&ry(q,Ee,X,$),Z&&H.viewport(w.copy(Z)),q.length>0&&Ra(q,X,$),Ee.length>0&&Ra(Ee,X,$),Pe.length>0&&Ra(Pe,X,$),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function ry(C,X,$,Z){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;const Ee=Q.isWebGL2;ye===null&&(ye=new Xr(1,1,{generateMipmaps:!0,type:U.has("EXT_color_buffer_half_float")?pa:ar,minFilter:ha,samples:Ee?4:0})),v.getDrawingBufferSize(Te),Ee?ye.setSize(Te.x,Te.y):ye.setSize(fd(Te.x),fd(Te.y));const Pe=v.getRenderTarget();v.setRenderTarget(ye),v.getClearColor(te),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const Ne=v.toneMapping;v.toneMapping=sr,Ra(C,$,Z),R.updateMultisampleRenderTarget(ye),R.updateRenderTargetMipmap(ye);let Oe=!1;for(let We=0,ze=X.length;We<ze;We++){const He=X[We],Et=He.object,xn=He.geometry,Nt=He.material,hi=He.group;if(Nt.side===dn&&Et.layers.test(Z.layers)){const ft=Nt.side;Nt.side=_n,Nt.needsUpdate=!0,Ph(Et,$,Z,xn,Nt,hi),Nt.side=ft,Nt.needsUpdate=!0,Oe=!0}}Oe===!0&&(R.updateMultisampleRenderTarget(ye),R.updateRenderTargetMipmap(ye)),v.setRenderTarget(Pe),v.setClearColor(te,D),v.toneMapping=Ne}function Ra(C,X,$){const Z=X.isScene===!0?X.overrideMaterial:null;for(let q=0,Ee=C.length;q<Ee;q++){const Pe=C[q],Ne=Pe.object,Oe=Pe.geometry,We=Z===null?Pe.material:Z,ze=Pe.group;Ne.layers.test($.layers)&&Ph(Ne,X,$,Oe,We,ze)}}function Ph(C,X,$,Z,q,Ee){C.onBeforeRender(v,X,$,Z,q,Ee),C.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),q.onBeforeRender(v,X,$,Z,C,Ee),q.transparent===!0&&q.side===dn&&q.forceSinglePass===!1?(q.side=_n,q.needsUpdate=!0,v.renderBufferDirect($,X,Z,q,C,Ee),q.side=fr,q.needsUpdate=!0,v.renderBufferDirect($,X,Z,q,C,Ee),q.side=dn):v.renderBufferDirect($,X,Z,q,C,Ee),C.onAfterRender(v,X,$,Z,q,Ee)}function ba(C,X,$){X.isScene!==!0&&(X=P);const Z=ce.get(C),q=g.state.lights,Ee=g.state.shadowsArray,Pe=q.state.version,Ne=Ce.getParameters(C,q.state,Ee,X,$),Oe=Ce.getProgramCacheKey(Ne);let We=Z.programs;Z.environment=C.isMeshStandardMaterial?X.environment:null,Z.fog=X.fog,Z.envMap=(C.isMeshStandardMaterial?B:E).get(C.envMap||Z.environment),We===void 0&&(C.addEventListener("dispose",Me),We=new Map,Z.programs=We);let ze=We.get(Oe);if(ze!==void 0){if(Z.currentProgram===ze&&Z.lightsStateVersion===Pe)return Dh(C,Ne),ze}else Ne.uniforms=Ce.getUniforms(C),C.onBuild($,Ne,v),C.onBeforeCompile(Ne,v),ze=Ce.acquireProgram(Ne,Oe),We.set(Oe,ze),Z.uniforms=Ne.uniforms;const He=Z.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(He.clippingPlanes=Be.uniform),Dh(C,Ne),Z.needsLights=ay(C),Z.lightsStateVersion=Pe,Z.needsLights&&(He.ambientLightColor.value=q.state.ambient,He.lightProbe.value=q.state.probe,He.directionalLights.value=q.state.directional,He.directionalLightShadows.value=q.state.directionalShadow,He.spotLights.value=q.state.spot,He.spotLightShadows.value=q.state.spotShadow,He.rectAreaLights.value=q.state.rectArea,He.ltc_1.value=q.state.rectAreaLTC1,He.ltc_2.value=q.state.rectAreaLTC2,He.pointLights.value=q.state.point,He.pointLightShadows.value=q.state.pointShadow,He.hemisphereLights.value=q.state.hemi,He.directionalShadowMap.value=q.state.directionalShadowMap,He.directionalShadowMatrix.value=q.state.directionalShadowMatrix,He.spotShadowMap.value=q.state.spotShadowMap,He.spotLightMatrix.value=q.state.spotLightMatrix,He.spotLightMap.value=q.state.spotLightMap,He.pointShadowMap.value=q.state.pointShadowMap,He.pointShadowMatrix.value=q.state.pointShadowMatrix),Z.currentProgram=ze,Z.uniformsList=null,ze}function Lh(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=Ol.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function Dh(C,X){const $=ce.get(C);$.outputColorSpace=X.outputColorSpace,$.batching=X.batching,$.instancing=X.instancing,$.instancingColor=X.instancingColor,$.skinning=X.skinning,$.morphTargets=X.morphTargets,$.morphNormals=X.morphNormals,$.morphColors=X.morphColors,$.morphTargetsCount=X.morphTargetsCount,$.numClippingPlanes=X.numClippingPlanes,$.numIntersection=X.numClipIntersection,$.vertexAlphas=X.vertexAlphas,$.vertexTangents=X.vertexTangents,$.toneMapping=X.toneMapping}function oy(C,X,$,Z,q){X.isScene!==!0&&(X=P),R.resetTextureUnits();const Ee=X.fog,Pe=Z.isMeshStandardMaterial?X.environment:null,Ne=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ni,Oe=(Z.isMeshStandardMaterial?B:E).get(Z.envMap||Pe),We=Z.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ze=!!$.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),He=!!$.morphAttributes.position,Et=!!$.morphAttributes.normal,xn=!!$.morphAttributes.color;let Nt=sr;Z.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Nt=v.toneMapping);const hi=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ft=hi!==void 0?hi.length:0,je=ce.get(Z),ju=g.state.lights;if(ie===!0&&(he===!0||C!==M)){const Pn=C===M&&Z.id===L;Be.setState(Z,C,Pn)}let _t=!1;Z.version===je.__version?(je.needsLights&&je.lightsStateVersion!==ju.state.version||je.outputColorSpace!==Ne||q.isBatchedMesh&&je.batching===!1||!q.isBatchedMesh&&je.batching===!0||q.isInstancedMesh&&je.instancing===!1||!q.isInstancedMesh&&je.instancing===!0||q.isSkinnedMesh&&je.skinning===!1||!q.isSkinnedMesh&&je.skinning===!0||q.isInstancedMesh&&je.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&je.instancingColor===!1&&q.instanceColor!==null||je.envMap!==Oe||Z.fog===!0&&je.fog!==Ee||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Be.numPlanes||je.numIntersection!==Be.numIntersection)||je.vertexAlphas!==We||je.vertexTangents!==ze||je.morphTargets!==He||je.morphNormals!==Et||je.morphColors!==xn||je.toneMapping!==Nt||Q.isWebGL2===!0&&je.morphTargetsCount!==ft)&&(_t=!0):(_t=!0,je.__version=Z.version);let mr=je.currentProgram;_t===!0&&(mr=ba(Z,X,q));let Ih=!1,gs=!1,Yu=!1;const jt=mr.getUniforms(),gr=je.uniforms;if(H.useProgram(mr.program)&&(Ih=!0,gs=!0,Yu=!0),Z.id!==L&&(L=Z.id,gs=!0),Ih||M!==C){jt.setValue(A,"projectionMatrix",C.projectionMatrix),jt.setValue(A,"viewMatrix",C.matrixWorldInverse);const Pn=jt.map.cameraPosition;Pn!==void 0&&Pn.setValue(A,se.setFromMatrixPosition(C.matrixWorld)),Q.logarithmicDepthBuffer&&jt.setValue(A,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&jt.setValue(A,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,gs=!0,Yu=!0)}if(q.isSkinnedMesh){jt.setOptional(A,q,"bindMatrix"),jt.setOptional(A,q,"bindMatrixInverse");const Pn=q.skeleton;Pn&&(Q.floatVertexTextures?(Pn.boneTexture===null&&Pn.computeBoneTexture(),jt.setValue(A,"boneTexture",Pn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(jt.setOptional(A,q,"batchingTexture"),jt.setValue(A,"batchingTexture",q._matricesTexture,R));const qu=$.morphAttributes;if((qu.position!==void 0||qu.normal!==void 0||qu.color!==void 0&&Q.isWebGL2===!0)&&qe.update(q,$,mr),(gs||je.receiveShadow!==q.receiveShadow)&&(je.receiveShadow=q.receiveShadow,jt.setValue(A,"receiveShadow",q.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(gr.envMap.value=Oe,gr.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),gs&&(jt.setValue(A,"toneMappingExposure",v.toneMappingExposure),je.needsLights&&sy(gr,Yu),Ee&&Z.fog===!0&&xe.refreshFogUniforms(gr,Ee),xe.refreshMaterialUniforms(gr,Z,K,j,ye),Ol.upload(A,Lh(je),gr,R)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Ol.upload(A,Lh(je),gr,R),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&jt.setValue(A,"center",q.center),jt.setValue(A,"modelViewMatrix",q.modelViewMatrix),jt.setValue(A,"normalMatrix",q.normalMatrix),jt.setValue(A,"modelMatrix",q.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Pn=Z.uniformsGroups;for(let $u=0,ly=Pn.length;$u<ly;$u++)if(Q.isWebGL2){const Nh=Pn[$u];Je.update(Nh,mr),Je.bind(Nh,mr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return mr}function sy(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function ay(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(C,X,$){ce.get(C.texture).__webglTexture=X,ce.get(C.depthTexture).__webglTexture=$;const Z=ce.get(C);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=$===void 0,Z.__autoAllocateDepthBuffer||U.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,X){const $=ce.get(C);$.__webglFramebuffer=X,$.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,$=0){T=C,b=X,S=$;let Z=!0,q=null,Ee=!1,Pe=!1;if(C){const Oe=ce.get(C);Oe.__useDefaultFramebuffer!==void 0?(H.bindFramebuffer(A.FRAMEBUFFER,null),Z=!1):Oe.__webglFramebuffer===void 0?R.setupRenderTarget(C):Oe.__hasExternalTextures&&R.rebindTextures(C,ce.get(C.texture).__webglTexture,ce.get(C.depthTexture).__webglTexture);const We=C.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Pe=!0);const ze=ce.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ze[X])?q=ze[X][$]:q=ze[X],Ee=!0):Q.isWebGL2&&C.samples>0&&R.useMultisampledRTT(C)===!1?q=ce.get(C).__webglMultisampledFramebuffer:Array.isArray(ze)?q=ze[$]:q=ze,w.copy(C.viewport),O.copy(C.scissor),W=C.scissorTest}else w.copy(G).multiplyScalar(K).floor(),O.copy(ee).multiplyScalar(K).floor(),W=ne;if(H.bindFramebuffer(A.FRAMEBUFFER,q)&&Q.drawBuffers&&Z&&H.drawBuffers(C,q),H.viewport(w),H.scissor(O),H.setScissorTest(W),Ee){const Oe=ce.get(C.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+X,Oe.__webglTexture,$)}else if(Pe){const Oe=ce.get(C.texture),We=X||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Oe.__webglTexture,$||0,We)}L=-1},this.readRenderTargetPixels=function(C,X,$,Z,q,Ee,Pe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=ce.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ne=Ne[Pe]),Ne){H.bindFramebuffer(A.FRAMEBUFFER,Ne);try{const Oe=C.texture,We=Oe.format,ze=Oe.type;if(We!==Qn&&Re.convert(We)!==A.getParameter(A.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=ze===pa&&(U.has("EXT_color_buffer_half_float")||Q.isWebGL2&&U.has("EXT_color_buffer_float"));if(ze!==ar&&Re.convert(ze)!==A.getParameter(A.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===$i&&(Q.isWebGL2||U.has("OES_texture_float")||U.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-Z&&$>=0&&$<=C.height-q&&A.readPixels(X,$,Z,q,Re.convert(We),Re.convert(ze),Ee)}finally{const Oe=T!==null?ce.get(T).__webglFramebuffer:null;H.bindFramebuffer(A.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(C,X,$=0){const Z=Math.pow(2,-$),q=Math.floor(X.image.width*Z),Ee=Math.floor(X.image.height*Z);R.setTexture2D(X,0),A.copyTexSubImage2D(A.TEXTURE_2D,$,0,0,C.x,C.y,q,Ee),H.unbindTexture()},this.copyTextureToTexture=function(C,X,$,Z=0){const q=X.image.width,Ee=X.image.height,Pe=Re.convert($.format),Ne=Re.convert($.type);R.setTexture2D($,0),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,$.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,$.unpackAlignment),X.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,Z,C.x,C.y,q,Ee,Pe,Ne,X.image.data):X.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,Z,C.x,C.y,X.mipmaps[0].width,X.mipmaps[0].height,Pe,X.mipmaps[0].data):A.texSubImage2D(A.TEXTURE_2D,Z,C.x,C.y,Pe,Ne,X.image),Z===0&&$.generateMipmaps&&A.generateMipmap(A.TEXTURE_2D),H.unbindTexture()},this.copyTextureToTexture3D=function(C,X,$,Z,q=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ee=C.max.x-C.min.x+1,Pe=C.max.y-C.min.y+1,Ne=C.max.z-C.min.z+1,Oe=Re.convert(Z.format),We=Re.convert(Z.type);let ze;if(Z.isData3DTexture)R.setTexture3D(Z,0),ze=A.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)R.setTexture2DArray(Z,0),ze=A.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,Z.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,Z.unpackAlignment);const He=A.getParameter(A.UNPACK_ROW_LENGTH),Et=A.getParameter(A.UNPACK_IMAGE_HEIGHT),xn=A.getParameter(A.UNPACK_SKIP_PIXELS),Nt=A.getParameter(A.UNPACK_SKIP_ROWS),hi=A.getParameter(A.UNPACK_SKIP_IMAGES),ft=$.isCompressedTexture?$.mipmaps[q]:$.image;A.pixelStorei(A.UNPACK_ROW_LENGTH,ft.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ft.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,C.min.x),A.pixelStorei(A.UNPACK_SKIP_ROWS,C.min.y),A.pixelStorei(A.UNPACK_SKIP_IMAGES,C.min.z),$.isDataTexture||$.isData3DTexture?A.texSubImage3D(ze,q,X.x,X.y,X.z,Ee,Pe,Ne,Oe,We,ft.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),A.compressedTexSubImage3D(ze,q,X.x,X.y,X.z,Ee,Pe,Ne,Oe,ft.data)):A.texSubImage3D(ze,q,X.x,X.y,X.z,Ee,Pe,Ne,Oe,We,ft),A.pixelStorei(A.UNPACK_ROW_LENGTH,He),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Et),A.pixelStorei(A.UNPACK_SKIP_PIXELS,xn),A.pixelStorei(A.UNPACK_SKIP_ROWS,Nt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,hi),q===0&&Z.generateMipmaps&&A.generateMipmap(ze),H.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?R.setTextureCube(C,0):C.isData3DTexture?R.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?R.setTexture2DArray(C,0):R.setTexture2D(C,0),H.unbindTexture()},this.resetState=function(){b=0,S=0,T=null,H.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===vh?"display-p3":"srgb",n.unpackColorSpace=et.workingColorSpace===Fu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Vt?kr:l_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===kr?Vt:Ni}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class $A extends D_{}$A.prototype.isWebGL1Renderer=!0;class xh{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Fe(e),this.near=n,this.far=i}clone(){return new xh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class KA extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class ZA{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=ld,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ci()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,o=this.stride;r<o;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const rn=new F;class pu{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)rn.fromBufferAttribute(this,n),rn.applyMatrix4(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)rn.fromBufferAttribute(this,n),rn.applyNormalMatrix(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)rn.fromBufferAttribute(this,n),rn.transformDirection(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}setX(e,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Ei(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Ei(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Ei(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Ei(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=tt(n,this.array),i=tt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array),o=tt(o,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)n.push(this.data.array[r+o])}return new Hn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new pu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)n.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class I_ extends Zr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let vo;const Cs=new F,_o=new F,yo=new F,xo=new ge,Ps=new ge,N_=new Mt,pl=new F,Ls=new F,ml=new F,ug=new ge,Qc=new ge,cg=new ge;class JA extends Pt{constructor(e=new I_){if(super(),this.isSprite=!0,this.type="Sprite",vo===void 0){vo=new Wn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ZA(n,5);vo.setIndex([0,1,2,0,2,3]),vo.setAttribute("position",new pu(i,3,0,!1)),vo.setAttribute("uv",new pu(i,2,3,!1))}this.geometry=vo,this.material=e,this.center=new ge(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_o.setFromMatrixScale(this.matrixWorld),N_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),yo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_o.multiplyScalar(-yo.z);const i=this.material.rotation;let r,o;i!==0&&(o=Math.cos(i),r=Math.sin(i));const s=this.center;gl(pl.set(-.5,-.5,0),yo,s,_o,r,o),gl(Ls.set(.5,-.5,0),yo,s,_o,r,o),gl(ml.set(.5,.5,0),yo,s,_o,r,o),ug.set(0,0),Qc.set(1,0),cg.set(1,1);let a=e.ray.intersectTriangle(pl,Ls,ml,!1,Cs);if(a===null&&(gl(Ls.set(-.5,.5,0),yo,s,_o,r,o),Qc.set(0,1),a=e.ray.intersectTriangle(pl,ml,Ls,!1,Cs),a===null))return;const l=e.ray.origin.distanceTo(Cs);l<e.near||l>e.far||n.push({distance:l,point:Cs.clone(),uv:Un.getInterpolation(Cs,pl,Ls,ml,ug,Qc,cg,new ge),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function gl(t,e,n,i,r,o){xo.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Ps.x=o*xo.x-r*xo.y,Ps.y=r*xo.x+o*xo.y):Ps.copy(xo),t.copy(e),t.x+=Ps.x,t.y+=Ps.y,t.applyMatrix4(N_)}class U_ extends Zr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fg=new F,dg=new F,hg=new Mt,ef=new m_,vl=new ku;class QA extends Pt{constructor(e=new Wn,n=new U_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,o=n.count;r<o;r++)fg.fromBufferAttribute(n,r-1),dg.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=fg.distanceTo(dg);e.setAttribute("lineDistance",new An(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vl.copy(i.boundingSphere),vl.applyMatrix4(r),vl.radius+=o,e.ray.intersectsSphere(vl)===!1)return;hg.copy(r).invert(),ef.copy(e.ray).applyMatrix4(hg);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new F,c=new F,h=new F,d=new F,p=this.isLineSegments?2:1,m=i.index,g=i.attributes.position;if(m!==null){const f=Math.max(0,s.start),x=Math.min(m.count,s.start+s.count);for(let v=f,_=x-1;v<_;v+=p){const b=m.getX(v),S=m.getX(v+1);if(u.fromBufferAttribute(g,b),c.fromBufferAttribute(g,S),ef.distanceSqToSegment(u,c,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(d);L<e.near||L>e.far||n.push({distance:L,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,s.start),x=Math.min(g.count,s.start+s.count);for(let v=f,_=x-1;v<_;v+=p){if(u.fromBufferAttribute(g,v),c.fromBufferAttribute(g,v+1),ef.distanceSqToSegment(u,c,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(d);S<e.near||S>e.far||n.push({distance:S,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}const pg=new F,mg=new F;class eR extends QA{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,o=n.count;r<o;r+=2)pg.fromBufferAttribute(n,r),mg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+pg.distanceTo(mg);e.setAttribute("lineDistance",new An(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Sh extends yn{constructor(e,n,i,r,o,s,a,l,u){super(e,n,i,r,o,s,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class di{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),o=0;n.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),o+=i.distanceTo(r),n.push(o),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const o=i.length;let s;n?s=n:s=e*i[o-1];let a=0,l=o-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-s,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===s)return r/(o-1);const c=i[r],d=i[r+1]-c,p=(s-c)/d;return(r+p)/(o-1)}getTangent(e,n){let r=e-1e-4,o=e+1e-4;r<0&&(r=0),o>1&&(o=1);const s=this.getPoint(r),a=this.getPoint(o),l=n||(s.isVector2?new ge:new F);return l.copy(a).sub(s).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new F,r=[],o=[],s=[],a=new F,l=new Mt;for(let p=0;p<=e;p++){const m=p/e;r[p]=this.getTangentAt(m,new F)}o[0]=new F,s[0]=new F;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),h<=u&&(u=h,i.set(0,1,0)),d<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),o[0].crossVectors(r[0],a),s[0].crossVectors(r[0],o[0]);for(let p=1;p<=e;p++){if(o[p]=o[p-1].clone(),s[p]=s[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Qt(r[p-1].dot(r[p]),-1,1));o[p].applyMatrix4(l.makeRotationAxis(a,m))}s[p].crossVectors(r[p],o[p])}if(n===!0){let p=Math.acos(Qt(o[0].dot(o[e]),-1,1));p/=e,r[0].dot(a.crossVectors(o[0],o[e]))>0&&(p=-p);for(let m=1;m<=e;m++)o[m].applyMatrix4(l.makeRotationAxis(r[m],p*m)),s[m].crossVectors(r[m],o[m])}return{tangents:r,normals:o,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Mh extends di{constructor(e=0,n=0,i=1,r=1,o=0,s=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=o,this.aEndAngle=s,this.aClockwise=a,this.aRotation=l}getPoint(e,n){const i=n||new ge,r=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const s=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=r;for(;o>r;)o-=r;o<Number.EPSILON&&(s?o=0:o=r),this.aClockwise===!0&&!s&&(o===r?o=-r:o=o-r);const a=this.aStartAngle+e*o;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=u-this.aY;l=d*c-p*h+this.aX,u=d*h+p*c+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class tR extends Mh{constructor(e,n,i,r,o,s){super(e,n,i,i,r,o,s),this.isArcCurve=!0,this.type="ArcCurve"}}function Eh(){let t=0,e=0,n=0,i=0;function r(o,s,a,l){t=o,e=a,n=-3*o+3*s-2*a-l,i=2*o-2*s+a+l}return{initCatmullRom:function(o,s,a,l,u){r(s,a,u*(a-o),u*(l-s))},initNonuniformCatmullRom:function(o,s,a,l,u,c,h){let d=(s-o)/u-(a-o)/(u+c)+(a-s)/c,p=(a-s)/c-(l-s)/(c+h)+(l-a)/h;d*=c,p*=c,r(s,a,d,p)},calc:function(o){const s=o*o,a=s*o;return t+e*o+n*s+i*a}}}const _l=new F,tf=new Eh,nf=new Eh,rf=new Eh;class nR extends di{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new F){const i=n,r=this.points,o=r.length,s=(o-(this.closed?0:1))*e;let a=Math.floor(s),l=s-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%o]:(_l.subVectors(r[0],r[1]).add(r[0]),u=_l);const h=r[a%o],d=r[(a+1)%o];if(this.closed||a+2<o?c=r[(a+2)%o]:(_l.subVectors(r[o-1],r[o-2]).add(r[o-1]),c=_l),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(u.distanceToSquared(h),p),y=Math.pow(h.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(c),p);y<1e-4&&(y=1),m<1e-4&&(m=y),g<1e-4&&(g=y),tf.initNonuniformCatmullRom(u.x,h.x,d.x,c.x,m,y,g),nf.initNonuniformCatmullRom(u.y,h.y,d.y,c.y,m,y,g),rf.initNonuniformCatmullRom(u.z,h.z,d.z,c.z,m,y,g)}else this.curveType==="catmullrom"&&(tf.initCatmullRom(u.x,h.x,d.x,c.x,this.tension),nf.initCatmullRom(u.y,h.y,d.y,c.y,this.tension),rf.initCatmullRom(u.z,h.z,d.z,c.z,this.tension));return i.set(tf.calc(l),nf.calc(l),rf.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new F().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function gg(t,e,n,i,r){const o=(i-e)*.5,s=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+o+s)*l+(-3*n+3*i-2*o-s)*a+o*t+n}function iR(t,e){const n=1-t;return n*n*e}function rR(t,e){return 2*(1-t)*t*e}function oR(t,e){return t*t*e}function Ys(t,e,n,i){return iR(t,e)+rR(t,n)+oR(t,i)}function sR(t,e){const n=1-t;return n*n*n*e}function aR(t,e){const n=1-t;return 3*n*n*t*e}function lR(t,e){return 3*(1-t)*t*t*e}function uR(t,e){return t*t*t*e}function qs(t,e,n,i,r){return sR(t,e)+aR(t,n)+lR(t,i)+uR(t,r)}class O_ extends di{constructor(e=new ge,n=new ge,i=new ge,r=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new ge){const i=n,r=this.v0,o=this.v1,s=this.v2,a=this.v3;return i.set(qs(e,r.x,o.x,s.x,a.x),qs(e,r.y,o.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class cR extends di{constructor(e=new F,n=new F,i=new F,r=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new F){const i=n,r=this.v0,o=this.v1,s=this.v2,a=this.v3;return i.set(qs(e,r.x,o.x,s.x,a.x),qs(e,r.y,o.y,s.y,a.y),qs(e,r.z,o.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class F_ extends di{constructor(e=new ge,n=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new ge){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new ge){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fR extends di{constructor(e=new F,n=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new F){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new F){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class k_ extends di{constructor(e=new ge,n=new ge,i=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new ge){const i=n,r=this.v0,o=this.v1,s=this.v2;return i.set(Ys(e,r.x,o.x,s.x),Ys(e,r.y,o.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dR extends di{constructor(e=new F,n=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new F){const i=n,r=this.v0,o=this.v1,s=this.v2;return i.set(Ys(e,r.x,o.x,s.x),Ys(e,r.y,o.y,s.y),Ys(e,r.z,o.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class z_ extends di{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new ge){const i=n,r=this.points,o=(r.length-1)*e,s=Math.floor(o),a=o-s,l=r[s===0?s:s-1],u=r[s],c=r[s>r.length-2?r.length-1:s+1],h=r[s>r.length-3?r.length-1:s+2];return i.set(gg(a,l.x,u.x,c.x,h.x),gg(a,l.y,u.y,c.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new ge().fromArray(r))}return this}}var hd=Object.freeze({__proto__:null,ArcCurve:tR,CatmullRomCurve3:nR,CubicBezierCurve:O_,CubicBezierCurve3:cR,EllipseCurve:Mh,LineCurve:F_,LineCurve3:fR,QuadraticBezierCurve:k_,QuadraticBezierCurve3:dR,SplineCurve:z_});class hR extends di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hd[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let o=0;for(;o<r.length;){if(r[o]>=i){const s=r[o]-i,a=this.curves[o],l=a.getLength(),u=l===0?0:1-s/l;return a.getPointAt(u,n)}o++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,o=this.curves;r<o.length;r++){const s=o[r],a=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,l=s.getPoints(a);for(let u=0;u<l.length;u++){const c=l[u];i&&i.equals(c)||(n.push(c),i=c)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new hd[r.type]().fromJSON(r))}return this}}class vg extends hR{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new F_(this.currentPoint.clone(),new ge(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const o=new k_(this.currentPoint.clone(),new ge(e,n),new ge(i,r));return this.curves.push(o),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,o,s){const a=new O_(this.currentPoint.clone(),new ge(e,n),new ge(i,r),new ge(o,s));return this.curves.push(a),this.currentPoint.set(o,s),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new z_(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,o,s){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,o,s),this}absarc(e,n,i,r,o,s){return this.absellipse(e,n,i,i,r,o,s),this}ellipse(e,n,i,r,o,s,a,l){const u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+u,n+c,i,r,o,s,a,l),this}absellipse(e,n,i,r,o,s,a,l){const u=new Mh(e,n,i,r,o,s,a,l);if(this.curves.length>0){const h=u.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(u);const c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class B_ extends vg{constructor(e){super(e),this.uuid=Ci(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new vg().fromJSON(r))}return this}}const pR={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let o=H_(t,0,r,n,!0);const s=[];if(!o||o.next===o.prev)return s;let a,l,u,c,h,d,p;if(i&&(o=yR(t,e,o,n)),t.length>80*n){a=u=t[0],l=c=t[1];for(let m=n;m<r;m+=n)h=t[m],d=t[m+1],h<a&&(a=h),d<l&&(l=d),h>u&&(u=h),d>c&&(c=d);p=Math.max(u-a,c-l),p=p!==0?32767/p:0}return ma(o,s,n,a,l,p,0),s}};function H_(t,e,n,i,r){let o,s;if(r===PR(t,e,n,i)>0)for(o=e;o<n;o+=i)s=_g(o,t[o],t[o+1],s);else for(o=n-i;o>=e;o-=i)s=_g(o,t[o],t[o+1],s);return s&&Gu(s,s.next)&&(va(s),s=s.next),s}function Yr(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Gu(n,n.next)||pt(n.prev,n,n.next)===0)){if(va(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function ma(t,e,n,i,r,o,s){if(!t)return;!s&&o&&wR(t,i,r,o);let a=t,l,u;for(;t.prev!==t.next;){if(l=t.prev,u=t.next,o?gR(t,i,r,o):mR(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(u.i/n|0),va(t),t=u.next,a=u.next;continue}if(t=u,t===a){s?s===1?(t=vR(Yr(t),e,n),ma(t,e,n,i,r,o,2)):s===2&&_R(t,e,n,i,r,o):ma(Yr(t),e,n,i,r,o,1);break}}}function mR(t){const e=t.prev,n=t,i=t.next;if(pt(e,n,i)>=0)return!1;const r=e.x,o=n.x,s=i.x,a=e.y,l=n.y,u=i.y,c=r<o?r<s?r:s:o<s?o:s,h=a<l?a<u?a:u:l<u?l:u,d=r>o?r>s?r:s:o>s?o:s,p=a>l?a>u?a:u:l>u?l:u;let m=i.next;for(;m!==e;){if(m.x>=c&&m.x<=d&&m.y>=h&&m.y<=p&&Fo(r,a,o,l,s,u,m.x,m.y)&&pt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function gR(t,e,n,i){const r=t.prev,o=t,s=t.next;if(pt(r,o,s)>=0)return!1;const a=r.x,l=o.x,u=s.x,c=r.y,h=o.y,d=s.y,p=a<l?a<u?a:u:l<u?l:u,m=c<h?c<d?c:d:h<d?h:d,y=a>l?a>u?a:u:l>u?l:u,g=c>h?c>d?c:d:h>d?h:d,f=pd(p,m,e,n,i),x=pd(y,g,e,n,i);let v=t.prevZ,_=t.nextZ;for(;v&&v.z>=f&&_&&_.z<=x;){if(v.x>=p&&v.x<=y&&v.y>=m&&v.y<=g&&v!==r&&v!==s&&Fo(a,c,l,h,u,d,v.x,v.y)&&pt(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=p&&_.x<=y&&_.y>=m&&_.y<=g&&_!==r&&_!==s&&Fo(a,c,l,h,u,d,_.x,_.y)&&pt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=f;){if(v.x>=p&&v.x<=y&&v.y>=m&&v.y<=g&&v!==r&&v!==s&&Fo(a,c,l,h,u,d,v.x,v.y)&&pt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=x;){if(_.x>=p&&_.x<=y&&_.y>=m&&_.y<=g&&_!==r&&_!==s&&Fo(a,c,l,h,u,d,_.x,_.y)&&pt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function vR(t,e,n){let i=t;do{const r=i.prev,o=i.next.next;!Gu(r,o)&&G_(r,i,i.next,o)&&ga(r,o)&&ga(o,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(o.i/n|0),va(i),va(i.next),i=t=o),i=i.next}while(i!==t);return Yr(i)}function _R(t,e,n,i,r,o){let s=t;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&RR(s,a)){let l=V_(s,a);s=Yr(s,s.next),l=Yr(l,l.next),ma(s,e,n,i,r,o,0),ma(l,e,n,i,r,o,0);return}a=a.next}s=s.next}while(s!==t)}function yR(t,e,n,i){const r=[];let o,s,a,l,u;for(o=0,s=e.length;o<s;o++)a=e[o]*i,l=o<s-1?e[o+1]*i:t.length,u=H_(t,a,l,i,!1),u===u.next&&(u.steiner=!0),r.push(AR(u));for(r.sort(xR),o=0;o<r.length;o++)n=SR(r[o],n);return n}function xR(t,e){return t.x-e.x}function SR(t,e){const n=MR(t,e);if(!n)return e;const i=V_(n,t);return Yr(i,i.next),Yr(n,n.next)}function MR(t,e){let n=e,i=-1/0,r;const o=t.x,s=t.y;do{if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){const d=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=o&&d>i&&(i=d,r=n.x<n.next.x?n:n.next,d===o))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,u=r.y;let c=1/0,h;n=r;do o>=n.x&&n.x>=l&&o!==n.x&&Fo(s<u?o:i,s,l,u,s<u?i:o,s,n.x,n.y)&&(h=Math.abs(s-n.y)/(o-n.x),ga(n,t)&&(h<c||h===c&&(n.x>r.x||n.x===r.x&&ER(r,n)))&&(r=n,c=h)),n=n.next;while(n!==a);return r}function ER(t,e){return pt(t.prev,t,e.prev)<0&&pt(e.next,t,t.next)<0}function wR(t,e,n,i){let r=t;do r.z===0&&(r.z=pd(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,TR(r)}function TR(t){let e,n,i,r,o,s,a,l,u=1;do{for(n=t,t=null,o=null,s=0;n;){for(s++,i=n,a=0,e=0;e<u&&(a++,i=i.nextZ,!!i);e++);for(l=u;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),o?o.nextZ=r:t=r,r.prevZ=o,o=r;n=i}o.nextZ=null,u*=2}while(s>1);return t}function pd(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function AR(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Fo(t,e,n,i,r,o,s,a){return(r-s)*(e-a)>=(t-s)*(o-a)&&(t-s)*(i-a)>=(n-s)*(e-a)&&(n-s)*(o-a)>=(r-s)*(i-a)}function RR(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!bR(t,e)&&(ga(t,e)&&ga(e,t)&&CR(t,e)&&(pt(t.prev,t,e.prev)||pt(t,e.prev,e))||Gu(t,e)&&pt(t.prev,t,t.next)>0&&pt(e.prev,e,e.next)>0)}function pt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Gu(t,e){return t.x===e.x&&t.y===e.y}function G_(t,e,n,i){const r=xl(pt(t,e,n)),o=xl(pt(t,e,i)),s=xl(pt(n,i,t)),a=xl(pt(n,i,e));return!!(r!==o&&s!==a||r===0&&yl(t,n,e)||o===0&&yl(t,i,e)||s===0&&yl(n,t,i)||a===0&&yl(n,e,i))}function yl(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function xl(t){return t>0?1:t<0?-1:0}function bR(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&G_(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function ga(t,e){return pt(t.prev,t,t.next)<0?pt(t,e,t.next)>=0&&pt(t,t.prev,e)>=0:pt(t,e,t.prev)<0||pt(t,t.next,e)<0}function CR(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,o=(t.y+e.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&r<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function V_(t,e){const n=new md(t.i,t.x,t.y),i=new md(e.i,e.x,e.y),r=t.next,o=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,o.next=i,i.prev=o,i}function _g(t,e,n,i){const r=new md(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function va(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function md(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function PR(t,e,n,i){let r=0;for(let o=e,s=n-i;o<n;o+=i)r+=(t[s]-t[o])*(t[o+1]+t[s+1]),s=o;return r}class $s{static area(e){const n=e.length;let i=0;for(let r=n-1,o=0;o<n;r=o++)i+=e[r].x*e[o].y-e[o].x*e[r].y;return i*.5}static isClockWise(e){return $s.area(e)<0}static triangulateShape(e,n){const i=[],r=[],o=[];yg(e),xg(i,e);let s=e.length;n.forEach(yg);for(let l=0;l<n.length;l++)r.push(s),s+=n[l].length,xg(i,n[l]);const a=pR.triangulate(i,r);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function yg(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function xg(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class wh extends Wn{constructor(e=new B_([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],o=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];s(u)}this.setAttribute("position",new An(r,3)),this.setAttribute("uv",new An(o,2)),this.computeVertexNormals();function s(a){const l=[],u=n.curveSegments!==void 0?n.curveSegments:12,c=n.steps!==void 0?n.steps:1,h=n.depth!==void 0?n.depth:1;let d=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,m=n.bevelSize!==void 0?n.bevelSize:p-.1,y=n.bevelOffset!==void 0?n.bevelOffset:0,g=n.bevelSegments!==void 0?n.bevelSegments:3;const f=n.extrudePath,x=n.UVGenerator!==void 0?n.UVGenerator:LR;let v,_=!1,b,S,T,L;f&&(v=f.getSpacedPoints(c),_=!0,d=!1,b=f.computeFrenetFrames(c,!1),S=new F,T=new F,L=new F),d||(g=0,p=0,m=0,y=0);const M=a.extractPoints(u);let w=M.shape;const O=M.holes;if(!$s.isClockWise(w)){w=w.reverse();for(let A=0,k=O.length;A<k;A++){const U=O[A];$s.isClockWise(U)&&(O[A]=U.reverse())}}const te=$s.triangulateShape(w,O),D=w;for(let A=0,k=O.length;A<k;A++){const U=O[A];w=w.concat(U)}function V(A,k,U){return k||console.error("THREE.ExtrudeGeometry: vec does not exist"),A.clone().addScaledVector(k,U)}const j=w.length,K=te.length;function N(A,k,U){let Q,H,pe;const ce=A.x-k.x,R=A.y-k.y,E=U.x-A.x,B=U.y-A.y,fe=ce*ce+R*R,le=ce*B-R*E;if(Math.abs(le)>Number.EPSILON){const ae=Math.sqrt(fe),Ce=Math.sqrt(E*E+B*B),xe=k.x-R/ae,Ae=k.y+ce/ae,De=U.x-B/Ce,Be=U.y+E/Ce,ue=((De-xe)*B-(Be-Ae)*E)/(ce*B-R*E);Q=xe+ce*ue-A.x,H=Ae+R*ue-A.y;const Ze=Q*Q+H*H;if(Ze<=2)return new ge(Q,H);pe=Math.sqrt(Ze/2)}else{let ae=!1;ce>Number.EPSILON?E>Number.EPSILON&&(ae=!0):ce<-Number.EPSILON?E<-Number.EPSILON&&(ae=!0):Math.sign(R)===Math.sign(B)&&(ae=!0),ae?(Q=-R,H=ce,pe=Math.sqrt(fe)):(Q=ce,H=R,pe=Math.sqrt(fe/2))}return new ge(Q/pe,H/pe)}const z=[];for(let A=0,k=D.length,U=k-1,Q=A+1;A<k;A++,U++,Q++)U===k&&(U=0),Q===k&&(Q=0),z[A]=N(D[A],D[U],D[Q]);const G=[];let ee,ne=z.concat();for(let A=0,k=O.length;A<k;A++){const U=O[A];ee=[];for(let Q=0,H=U.length,pe=H-1,ce=Q+1;Q<H;Q++,pe++,ce++)pe===H&&(pe=0),ce===H&&(ce=0),ee[Q]=N(U[Q],U[pe],U[ce]);G.push(ee),ne=ne.concat(ee)}for(let A=0;A<g;A++){const k=A/g,U=p*Math.cos(k*Math.PI/2),Q=m*Math.sin(k*Math.PI/2)+y;for(let H=0,pe=D.length;H<pe;H++){const ce=V(D[H],z[H],Q);me(ce.x,ce.y,-U)}for(let H=0,pe=O.length;H<pe;H++){const ce=O[H];ee=G[H];for(let R=0,E=ce.length;R<E;R++){const B=V(ce[R],ee[R],Q);me(B.x,B.y,-U)}}}const Y=m+y;for(let A=0;A<j;A++){const k=d?V(w[A],ne[A],Y):w[A];_?(T.copy(b.normals[0]).multiplyScalar(k.x),S.copy(b.binormals[0]).multiplyScalar(k.y),L.copy(v[0]).add(T).add(S),me(L.x,L.y,L.z)):me(k.x,k.y,0)}for(let A=1;A<=c;A++)for(let k=0;k<j;k++){const U=d?V(w[k],ne[k],Y):w[k];_?(T.copy(b.normals[A]).multiplyScalar(U.x),S.copy(b.binormals[A]).multiplyScalar(U.y),L.copy(v[A]).add(T).add(S),me(L.x,L.y,L.z)):me(U.x,U.y,h/c*A)}for(let A=g-1;A>=0;A--){const k=A/g,U=p*Math.cos(k*Math.PI/2),Q=m*Math.sin(k*Math.PI/2)+y;for(let H=0,pe=D.length;H<pe;H++){const ce=V(D[H],z[H],Q);me(ce.x,ce.y,h+U)}for(let H=0,pe=O.length;H<pe;H++){const ce=O[H];ee=G[H];for(let R=0,E=ce.length;R<E;R++){const B=V(ce[R],ee[R],Q);_?me(B.x,B.y+v[c-1].y,v[c-1].x+U):me(B.x,B.y,h+U)}}}ie(),he();function ie(){const A=r.length/3;if(d){let k=0,U=j*k;for(let Q=0;Q<K;Q++){const H=te[Q];Te(H[2]+U,H[1]+U,H[0]+U)}k=c+g*2,U=j*k;for(let Q=0;Q<K;Q++){const H=te[Q];Te(H[0]+U,H[1]+U,H[2]+U)}}else{for(let k=0;k<K;k++){const U=te[k];Te(U[2],U[1],U[0])}for(let k=0;k<K;k++){const U=te[k];Te(U[0]+j*c,U[1]+j*c,U[2]+j*c)}}i.addGroup(A,r.length/3-A,0)}function he(){const A=r.length/3;let k=0;ye(D,k),k+=D.length;for(let U=0,Q=O.length;U<Q;U++){const H=O[U];ye(H,k),k+=H.length}i.addGroup(A,r.length/3-A,1)}function ye(A,k){let U=A.length;for(;--U>=0;){const Q=U;let H=U-1;H<0&&(H=A.length-1);for(let pe=0,ce=c+g*2;pe<ce;pe++){const R=j*pe,E=j*(pe+1),B=k+Q+R,fe=k+H+R,le=k+H+E,ae=k+Q+E;se(B,fe,le,ae)}}}function me(A,k,U){l.push(A),l.push(k),l.push(U)}function Te(A,k,U){P(A),P(k),P(U);const Q=r.length/3,H=x.generateTopUV(i,r,Q-3,Q-2,Q-1);J(H[0]),J(H[1]),J(H[2])}function se(A,k,U,Q){P(A),P(k),P(Q),P(k),P(U),P(Q);const H=r.length/3,pe=x.generateSideWallUV(i,r,H-6,H-3,H-2,H-1);J(pe[0]),J(pe[1]),J(pe[3]),J(pe[1]),J(pe[2]),J(pe[3])}function P(A){r.push(l[A*3+0]),r.push(l[A*3+1]),r.push(l[A*3+2])}function J(A){o.push(A.x),o.push(A.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return DR(n,i,e)}static fromJSON(e,n){const i=[];for(let o=0,s=e.shapes.length;o<s;o++){const a=n[e.shapes[o]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new hd[r.type]().fromJSON(r)),new wh(i,e.options)}}const LR={generateTopUV:function(t,e,n,i,r){const o=e[n*3],s=e[n*3+1],a=e[i*3],l=e[i*3+1],u=e[r*3],c=e[r*3+1];return[new ge(o,s),new ge(a,l),new ge(u,c)]},generateSideWallUV:function(t,e,n,i,r,o){const s=e[n*3],a=e[n*3+1],l=e[n*3+2],u=e[i*3],c=e[i*3+1],h=e[i*3+2],d=e[r*3],p=e[r*3+1],m=e[r*3+2],y=e[o*3],g=e[o*3+1],f=e[o*3+2];return Math.abs(a-c)<Math.abs(s-u)?[new ge(s,1-l),new ge(u,1-h),new ge(d,1-m),new ge(y,1-f)]:[new ge(a,1-l),new ge(c,1-h),new ge(p,1-m),new ge(g,1-f)]}};function DR(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const o=t[i];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class ss extends Zr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=u_,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class W_ extends Pt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class IR extends W_{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const of=new Mt,Sg=new F,Mg=new F;class NR{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _h,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Sg.setFromMatrixPosition(e.matrixWorld),n.position.copy(Sg),Mg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Mg),n.updateMatrixWorld(),of.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(of),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(of)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class UR extends NR{constructor(){super(new T_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class OR extends W_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new UR}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class FR extends eR{constructor(e=10,n=10,i=4473924,r=8947848){i=new Fe(i),r=new Fe(r);const o=n/2,s=e/n,a=e/2,l=[],u=[];for(let d=0,p=0,m=-a;d<=n;d++,m+=s){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);const y=d===o?i:r;y.toArray(u,p),p+=3,y.toArray(u,p),p+=3,y.toArray(u,p),p+=3,y.toArray(u,p),p+=3}const c=new Wn;c.setAttribute("position",new An(l,3)),c.setAttribute("color",new An(u,3));const h=new U_({vertexColors:!0,toneMapped:!1});super(c,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mh);function sf(t,e,n){return Math.min(n,Math.max(e,t))}function Vu(t){const e=t.replace("#","");return{r:parseInt(e.substring(0,2),16)||0,g:parseInt(e.substring(2,4),16)||0,b:parseInt(e.substring(4,6),16)||0}}function _a(t,e,n){const i=sf(t.r*e,0,255)|0,r=sf(t.g*e,0,255)|0,o=sf(t.b*e,0,255)|0;return`rgba(${i},${r},${o},${n})`}function kR(t,e){return e==="concrete"?30:e==="marble"?6:e==="tile"?4:t==="roof"?26:t==="wall"?18:8}function zR(t,e){return t==="marble"?Math.max(.2,e-.45):t==="tile"?Math.max(.3,e-.3):e}function BR(t,e,n){const i=Vu(e),r=n/8,o=n/4;t.strokeStyle=_a(i,.5,.9),t.lineWidth=3;for(let a=0;a<=n;a+=r)t.beginPath(),t.moveTo(0,a),t.lineTo(n,a),t.stroke();let s=0;for(let a=0;a<n;a+=r){const l=s%2===0?0:o/2;for(let u=-o;u<=n+o;u+=o)t.beginPath(),t.moveTo(u+l,a),t.lineTo(u+l,a+r),t.stroke();s++}}function HR(t,e,n){const i=Vu(e),r=n/4;t.strokeStyle=_a(i,1.35,.85),t.lineWidth=3;for(let o=0;o<=4;o++)t.beginPath(),t.moveTo(o*r,0),t.lineTo(o*r,n),t.stroke(),t.beginPath(),t.moveTo(0,o*r),t.lineTo(n,o*r),t.stroke()}function GR(t,e,n){const i=Vu(e),r=n/6;for(let o=0;o<n;o+=r){t.strokeStyle=_a(i,.55,.85),t.lineWidth=2,t.beginPath(),t.moveTo(0,o),t.lineTo(n,o),t.stroke();for(let s=0;s<5;s++){const a=o+Math.random()*r,l=.85+Math.random()*.35;t.strokeStyle=_a(i,l,.35),t.lineWidth=1,t.beginPath();const u=Math.random()*n*.6;t.moveTo(u,a),t.lineTo(u+n*(.2+Math.random()*.3),a),t.stroke()}}}function VR(t,e,n){const i=Vu(e);for(let r=0;r<4;r++){const o=r%2===0?1.4:.7;t.strokeStyle=_a(i,o,.4),t.lineWidth=1+Math.random()*1.5,t.beginPath();let s=Math.random()*n,a=0;for(t.moveTo(s,a);a<n;){const l=s+(Math.random()-.5)*n*.3,u=a+n/6;t.quadraticCurveTo(s+(Math.random()-.5)*20,(a+u)/2,l,u),s=l,a=u}t.stroke()}}function WR(t,e,n,i){n==="brick"?BR(t,e,i):n==="tile"?HR(t,e,i):n==="wood"?GR(t,e,i):n==="marble"&&VR(t,e,i)}function Eg(t,e=2.7,n=0){var d;if(!t.length)return{x:10,z:8,radius:12,targetY:1};let i=1/0,r=1/0,o=-1/0,s=-1/0,a=0;t.forEach(p=>{i=Math.min(i,p.gx),o=Math.max(o,p.gx+p.gw),r=Math.min(r,p.gy),s=Math.max(s,p.gy+p.gh),a=Math.max(a,p.floor??0)});const l=Wu(t,e,0,n),u=((d=t.find(p=>(p.floor??0)===a))==null?void 0:d.wall_height)??e,c=l.get(a)+u+lr,h=Math.max(o-i,s-r);return{x:(i+o)/2,z:(r+s)/2,radius:Math.max(h,c)*1.5+4,targetY:Math.max(1,c*.55)}}function Wu(t,e,n=0,i=0){const r=Math.max(n,0,...t.map(a=>a.floor??0)),o=new Map;let s=0;for(let a=0;a<=r;a++){o.set(a,s);const l=t.find(c=>(c.floor??0)===a),u=(l==null?void 0:l.wall_height)??e;s+=u+lr+i}return o}function Yo(t,e,n){return Math.min(n,Math.max(e,t))}function X_(t){if(t.points&&t.points.length>=3){const e=t.points;let n=0;for(let i=0;i<e.length;i++){const r=e[i],o=e[(i+1)%e.length];n+=r.x*o.y-o.x*r.y}return Math.abs(n)/2}return t.gw*t.gh}function Th(t,e){const n=t.filter(a=>(a.floor??0)===e);if(!n.length)return null;let i=1/0,r=1/0,o=-1/0,s=-1/0;return n.forEach(a=>{i=Math.min(i,a.gx),r=Math.min(r,a.gy),o=Math.max(o,a.gx+a.gw),s=Math.max(s,a.gy+a.gh)}),{minX:i,minY:r,maxX:o,maxY:s}}const ht=.15,kt=.9,j_=2.05,hn=.9,mu=.9,Mi=.3,Gt=.3,So=.4,XR=.4,af=.6,lr=.18,as=.22,Ar=.35,Os=28*Math.PI/180,fi=0,wi=.55,gu=.75,jR=.85,Y_={bed:{label:"سرير",w:1.6,d:2,category:"غرفة نوم"},wardrobe:{label:"خزانة",w:1.2,d:.6,category:"غرفة نوم"},nightstand:{label:"كومودينو",w:.45,d:.4,category:"غرفة نوم"},sofa:{label:"أريكة",w:1.8,d:.85,category:"صالة"},armchair:{label:"كرسي بذراعين",w:.75,d:.75,category:"صالة"},tv_unit:{label:"وحدة تلفزيون",w:1.4,d:.4,category:"صالة"},dining_table:{label:"طاولة سفرة",w:1.6,d:.9,category:"صالة"},table:{label:"طاولة",w:1.4,d:.8,category:"عام"},chair:{label:"كرسي",w:.45,d:.45,category:"عام"},toilet:{label:"مرحاض",w:.4,d:.65,category:"حمام"},bathtub:{label:"بانيو",w:1.7,d:.75,category:"حمام"},shower:{label:"كابينة دش",w:.9,d:.9,category:"حمام"},sink:{label:"مغسلة حمام",w:.9,d:.55,category:"حمام"},kitchen_counter:{label:"كاونتر مطبخ",w:2,d:.6,category:"مطبخ"},stove:{label:"موقد",w:.6,d:.6,category:"مطبخ"},fridge:{label:"ثلاجة",w:.7,d:.7,category:"مطبخ"},desk:{label:"مكتب",w:1.2,d:.6,category:"مكتب"},bookshelf:{label:"مكتبة",w:.9,d:.3,category:"مكتب"}};function YR(t,e,n="plaster"){const r=document.createElement("canvas");r.width=256,r.height=256;const o=r.getContext("2d"),a=`#${new Fe(t).getHexString()}`;o.fillStyle=a,o.fillRect(0,0,256,256);const l=kR(e,n),u=o.getImageData(0,0,256,256),c=u.data;for(let d=0;d<c.length;d+=4){const p=(Math.random()-.5)*l;c[d]=Yo(c[d]+p,0,255),c[d+1]=Yo(c[d+1]+p,0,255),c[d+2]=Yo(c[d+2]+p,0,255)}if(o.putImageData(u,0,0),WR(o,a,n,256),e==="roof"&&n==="plaster"){o.strokeStyle="rgba(0,0,0,0.12)",o.lineWidth=1;for(let d=0;d<=256;d+=32)o.beginPath(),o.moveTo(0,d+.5),o.lineTo(256,d+.5),o.stroke()}const h=new Sh(r);return h.wrapS=Wr,h.wrapT=Wr,h.needsUpdate=!0,h}function qR(t,e,n,i="plaster"){const r=`${n}:${i}:${e}`;let o=t.get(r);return o||(o=YR(e,n,i),t.set(r,o)),o}function $R(){const e=new Float32Array(16384);for(let u=0;u<e.length;u++)e[u]=Math.random();const n=new Float32Array(128*128);for(let u=0;u<128;u++)for(let c=0;c<128;c++){let h=0;for(let d=-1;d<=1;d++)for(let p=-1;p<=1;p++){const m=(c+p+128)%128,y=(u+d+128)%128;h+=e[y*128+m]}n[u*128+c]=h/9}const i=document.createElement("canvas");i.width=128,i.height=128;const r=i.getContext("2d"),o=r.createImageData(128,128),s=o.data,a=1.2;for(let u=0;u<128;u++)for(let c=0;c<128;c++){const h=n[u*128+(c-1+128)%128],d=n[u*128+(c+1)%128],p=n[(u-1+128)%128*128+c],m=n[(u+1)%128*128+c];let y=(h-d)*a,g=(p-m)*a;const f=1,x=Math.hypot(y,g,f),v=(u*128+c)*4;s[v]=(y/x*.5+.5)*255,s[v+1]=(g/x*.5+.5)*255,s[v+2]=(f/x*.5+.5)*255,s[v+3]=255}r.putImageData(o,0,0);const l=new Sh(i);return l.wrapS=Wr,l.wrapT=Wr,l.needsUpdate=!0,l}function KR(t){const e="normal:wall";let n=t.get(e);return n||(n=$R(),t.set(e,n)),n}function Rt(t,e,n,i,r,o,s="plaster"){const l=qR(t,e,n,s).clone();l.needsUpdate=!0;const u=1.2,c=Math.max(1,Math.round(i/u)),h=Math.max(1,Math.round(r/u));l.repeat.set(c,h);const d={map:l,roughness:zR(s,o)};if(n==="wall"){const p=KR(t).clone();p.needsUpdate=!0,p.repeat.set(c,h),d.normalMap=p,d.normalScale=new ge(.5,.5)}return new ss(d)}function xt(t,e,n,i,r,o,s,a,l,u){const c=new zn(new Jr(Math.max(n,.03),Math.max(i,.03),Math.max(r,.03)),l);return c.position.set(o,s+i/2,a),c.scale.y=.001,c.castShadow=!0,c.receiveShadow=!0,t.add(c),e.meshes.push({mesh:c,height:i,baseY:s,delay:u}),c}function ZR(t,e,n){if(n)return t<=kt+.4?[]:[{start:(t-kt)/2,width:kt,sill:0,openH:j_,isDoor:!0}];const i=Yo(1.3,.3,e-mu-.25);if(i<=.3)return[];const r=t-2*XR;let o=0;if(r>=2*hn+af?o=2:r>=hn&&(o=1),o===0)return[];const s=o*hn+(o-1)*af,a=(t-s)/2,l=[];for(let u=0;u<o;u++)l.push({start:a+u*(hn+af),width:hn,sill:mu,openH:i,isDoor:!1});return l}const ko=1e-6,Mo=(t,e)=>Math.abs(t-e)<ko,gd=.01;function JR(t){const e=[];for(let n=0;n<t.length;n++){const i=t[n],r=i.floor??0;for(let o=n+1;o<t.length;o++){const s=t[o];if((s.floor??0)===r){if(Mo(s.gx,i.gx+i.gw)||Mo(i.gx,s.gx+s.gw)){const a=Math.max(i.gy,s.gy),l=Math.min(i.gy+i.gh,s.gy+s.gh);l-a>gd&&(Mo(s.gx,i.gx+i.gw)?e.push({a:{room:i,wall:"right"},b:{room:s,wall:"left"},start:a,end:l}):e.push({a:{room:i,wall:"left"},b:{room:s,wall:"right"},start:a,end:l}))}if(Mo(s.gy,i.gy+i.gh)||Mo(i.gy,s.gy+s.gh)){const a=Math.max(i.gx,s.gx),l=Math.min(i.gx+i.gw,s.gx+s.gw);l-a>gd&&(Mo(s.gy,i.gy+i.gh)?e.push({a:{room:i,wall:"bottom"},b:{room:s,wall:"top"},start:a,end:l}):e.push({a:{room:i,wall:"top"},b:{room:s,wall:"bottom"},start:a,end:l}))}}}}return e}function q_(t){if(!t.length)return[];const e=t.slice().sort((i,r)=>i.start-r.start),n=[{...e[0]}];for(let i=1;i<e.length;i++){const r=e[i],o=n[n.length-1];r.start<=o.end+ko?o.end=Math.max(o.end,r.end):n.push({...r})}return n}function $_(t,e,n=.02){const i=[];let r=0;return t.forEach(o=>{o.start>r+n&&i.push({start:r,end:o.start}),r=Math.max(r,o.end)}),e>r+n&&i.push({start:r,end:e}),i}function QR(t){const e=new Map,n=(r,o,s,a)=>{const l=`${r}:${o}`;e.has(l)||e.set(l,[]),e.get(l).push({start:s,end:a})};t.forEach(r=>{const{room:o,wall:s}=r.a,{room:a,wall:l}=r.b,u=s==="left"||s==="right"?o.gy:o.gx,c=l==="left"||l==="right"?a.gy:a.gx;n(o.id,s,r.start-u,r.end-u),n(a.id,l,r.start-c,r.end-c)});const i=new Map;return e.forEach((r,o)=>i.set(o,q_(r))),i}const Sl=.02;function K_(t,e,n){return n!=null?`${t}:edge:${n}`:`${t}:${e}`}function wg(t){if(t.points&&t.points.length>=3)return t.points.map((o,s)=>{const a=t.points[(s+1)%t.points.length];return{room:t,wall:null,edgeIndex:s,p1:o,p2:a,length:Math.hypot(a.x-o.x,a.y-o.y)}});const{gx:e,gy:n,gw:i,gh:r}=t;return[{room:t,wall:"top",edgeIndex:null,p1:{x:e,y:n},p2:{x:e+i,y:n},length:i},{room:t,wall:"bottom",edgeIndex:null,p1:{x:e,y:n+r},p2:{x:e+i,y:n+r},length:i},{room:t,wall:"left",edgeIndex:null,p1:{x:e,y:n},p2:{x:e,y:n+r},length:r},{room:t,wall:"right",edgeIndex:null,p1:{x:e+i,y:n},p2:{x:e+i,y:n+r},length:r}]}function eb(t,e){const n=t.length,i=e.length;if(!(n>Sl)||!(i>Sl))return null;const r=(t.p2.x-t.p1.x)/n,o=(t.p2.y-t.p1.y)/n,s=f=>Math.abs((f.x-t.p1.x)*o-(f.y-t.p1.y)*r);if(s(e.p1)>Sl||s(e.p2)>Sl)return null;const a=f=>(f.x-t.p1.x)*r+(f.y-t.p1.y)*o,l=a(e.p1),u=a(e.p2),c=Math.max(0,Math.min(l,u)),h=Math.min(n,Math.max(l,u));if(h-c<=gd)return null;const d=u<l,p=f=>d?l-f:f-l,m=f=>Math.min(i,Math.max(0,f)),y=p(c),g=p(h);return{a:{start:c,end:h},b:{start:m(Math.min(y,g)),end:m(Math.max(y,g))},p1:{x:t.p1.x+r*c,y:t.p1.y+o*c},p2:{x:t.p1.x+r*h,y:t.p1.y+o*h},length:h-c,flipped:d}}function tb(t){const e=i=>!!(i.points&&i.points.length>=3),n=[];for(let i=0;i<t.length;i++){const r=t[i],o=r.floor??0;for(let s=i+1;s<t.length;s++){const a=t[s];(a.floor??0)===o&&(!e(r)&&!e(a)||wg(r).forEach(l=>{wg(a).forEach(u=>{const c=eb(l,u);c&&n.push({a:{room:r,wall:l.wall,edgeIndex:l.edgeIndex,start:c.a.start,end:c.a.end,edgeLength:l.length},b:{room:a,wall:u.wall,edgeIndex:u.edgeIndex,start:c.b.start,end:c.b.end,edgeLength:u.length},p1:c.p1,p2:c.p2,length:c.length,flipped:c.flipped})})}))}}return n}function nb(t,e){const n=new Map;return e.forEach(i=>{[i.a,i.b].forEach(r=>{const o=K_(r.room.id,r.wall,r.edgeIndex);n.has(o)||n.set(o,[]),n.get(o).push({start:r.start,end:r.end})})}),n.forEach((i,r)=>{t.set(r,q_([...t.get(r)||[],...i]))}),t}function Tg(t){const e=[];return t.forEach(n=>{e.some(i=>Math.abs(i.start-n.start)<.05)||e.push(n)}),e}function vu(t,e,n){const i=t.kind==="door",r=i?kt:hn,o=i?0:mu,s=i?j_:Yo(1.3,.3,n-mu-.25);return{start:Yo(Number(t.position)-r/2,0,Math.max(0,e-r)),width:r,sill:o,openH:s,isDoor:i}}function ib(t,e,n,i,r){return t==null?ZR(n,i,r):t.filter(o=>o.wall===e).map(o=>vu(o,n,i))}function Ag(t,e,n,i,r,o){const{axis:s,u0:a,fixed:l,wallLength:u,wallHeight:c,openings:h,floorBaseY:d=0}=o,p=f=>s==="x"?{x:a+f,z:l}:{x:l,z:a+f},m=h.slice().sort((f,x)=>f.start-x.start);let y=0;const g=[];m.forEach(f=>{f.start>y+.02&&g.push({start:y,end:f.start}),y=Math.max(y,f.start+f.width)}),y<u-.02&&g.push({start:y,end:u}),g.forEach(f=>{const x=f.end-f.start;if(x<=.02)return;const v=(f.start+f.end)/2,_=p(v),b=s==="x"?x:ht,S=s==="x"?ht:x,T=Rt(n,i,"wall",x,c,.85,r);xt(t,e,b,c,S,_.x,d,_.z,T,fi)}),m.forEach(f=>{const x=f.start+f.width/2,v=p(x),_=s==="x"?f.width:ht,b=s==="x"?ht:f.width;if(f.sill>.02){const L=Rt(n,i,"wall",f.width,f.sill,.85,r);xt(t,e,_,f.sill,b,v.x,d,v.z,L,fi)}const S=f.sill+f.openH,T=c-S;if(T>.02){const L=Rt(n,i,"wall",f.width,T,.85,r);xt(t,e,_,T,b,v.x,d+S,v.z,L,fi)}if(f.isDoor){const L=new ss({color:9132587,roughness:.7}),M=s==="x"?f.width-.06:.05,w=s==="x"?.05:f.width-.06;xt(t,e,M,f.openH,w,v.x,d,v.z,L,gu)}else{const L=new ss({color:10475752,transparent:!0,opacity:.35,roughness:.05,metalness:.1,side:dn}),M=s==="x"?f.width-.05:.03,w=s==="x"?.03:f.width-.05,O=xt(t,e,M,f.openH-.05,w,v.x,d+f.sill,v.z,L,gu);O.castShadow=!1}})}function rb(t,e,n,i,r,o,s,a,l,u,c,h){if(!c&&!h)return;if(c&&!h&&!i.points){if(i.roof_type==="gable"){ob(t,e,n,i,r,o,s,a,l,u);return}if(i.roof_type==="hip"){sb(t,e,n,i,r,o,s,l,u);return}}const p=`#${new Fe(s).multiplyScalar(.72).getHexString()}`,m=i.gw+as*2,y=i.gh+as*2,g=Rt(n,p,"roof",m,y,.95);if(xt(t,e,m,lr,y,l,o+r,u,g,wi),!c)return;const f=i.gw+ht,x=i.gh+ht,v=o+r+lr,_=l-i.gw/2,b=l+i.gw/2,S=u-i.gh/2,T=u+i.gh/2,L=Rt(n,p,"roof",f,Ar,.95),M=Rt(n,p,"roof",x,Ar,.95);xt(t,e,f,Ar,ht,l,v,S,L,wi),xt(t,e,f,Ar,ht,l,v,T,L,wi),xt(t,e,ht,Ar,x,_,v,u,M,wi),xt(t,e,ht,Ar,x,b,v,u,M,wi)}function ob(t,e,n,i,r,o,s,a,l,u){const c=i.gw>=i.gh,h=(c?i.gh:i.gw)+as*2,d=(c?i.gw:i.gh)+as*2,p=h/2,m=p*Math.tan(Os),y=p/Math.cos(Os),g=o+r,x=`#${new Fe(s).multiplyScalar(.72).getHexString()}`,v=Rt(n,x,"roof",y,d,.95);[-1,1].forEach(L=>{const M=new Dr;M.position.set(l,g+m,u),c?M.rotation.x=L*Os:M.rotation.z=-L*Os,t.add(M);const w=c?d:y,O=c?y:d,W=c?0:L*y/2,te=c?L*y/2:0;xt(M,e,w,lr,O,W,0,te,v,wi)});const _=c?i.gh:i.gw,b=(c?i.gw:i.gh)/2,S=10,T=Rt(n,s,"wall",_,m,.85,a);[-1,1].forEach(L=>{const M=c?l+L*b:l,w=c?u:u+L*b;for(let O=0;O<S;O++){const W=O/S,te=(O+1)/S,D=m/S,V=m*(W+te)/2,j=_*(1-(W+te)/2);xt(t,e,c?ht:j,D,c?j:ht,M,g+V-D/2,w,T,wi)}})}function Rg(t,e,n,i,r){const o=r/2,s=[t-n,-o,e-i],a=[t+n,-o,e-i],l=[t+n,-o,e+i],u=[t-n,-o,e+i],c=[t-(n-i),r-o,e],h=[t+(n-i),r-o,e],d=[u,l,h,u,h,c,a,s,c,a,c,h,s,u,c,l,a,h],p=new Wn;return p.setAttribute("position",new Hn(new Float32Array(d.flat()),3)),p.computeVertexNormals(),p}function sb(t,e,n,i,r,o,s,a,l){const u=i.gw>=i.gh,c=(u?i.gh:i.gw)+as*2,h=(u?i.gw:i.gh)+as*2,d=c/2,p=h/2,m=d*Math.tan(Os),y=u?Rg(a,l,p,d,m):Rg(0,0,p,d,m);u||(y.rotateY(Math.PI/2),y.translate(a,0,l));const f=`#${new Fe(s).multiplyScalar(.72).getHexString()}`,x=Rt(n,f,"roof",h,c,.95);x.side=dn,_d(t,e,y,x,o+r,m,wi)}function Z_(t,e,n){switch(n){case 90:return{x:-e,z:t};case 180:return{x:-t,z:-e};case 270:return{x:e,z:-t};default:return{x:t,z:e}}}function Bt(t,e,n,i,r,o,s,a){const l=i.rotation||0,{x:u,z:c}=Z_(a.cx,a.cz,l),h=l===90||l===270,d=h?a.d:a.w,p=h?a.w:a.d,m=Rt(n,a.color,"wall",d,a.h,.75);xt(t,e,d,a.h,p,r+u,s+a.bottomY,o+c,m,jR)}function ab(t,e,n,i,r,o,s){const a=l=>Bt(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:1.6,d:2,h:.35,bottomY:0,color:"#8B5A2B"}),a({cx:0,cz:0,w:1.5,d:1.9,h:.18,bottomY:.35,color:"#EDE7DC"}),a({cx:0,cz:-.96,w:1.6,d:.08,h:.55,bottomY:.35,color:"#8B5A2B"})}function lb(t,e,n,i,r,o,s){const a=l=>Bt(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:1.8,d:.85,h:.4,bottomY:0,color:"#3B4454"}),a({cx:0,cz:-.35,w:1.8,d:.15,h:.35,bottomY:.4,color:"#3B4454"}),a({cx:-.825,cz:0,w:.15,d:.85,h:.55,bottomY:0,color:"#2C3444"}),a({cx:.825,cz:0,w:.15,d:.85,h:.55,bottomY:0,color:"#2C3444"})}function ub(t,e,n,i,r,o,s){const a=u=>Bt(t,e,n,i,r,o,s,u);a({cx:0,cz:0,w:1.4,d:.8,h:.05,bottomY:.7,color:"#6B4A32"}),[[-.65,-.35],[.65,-.35],[-.65,.35],[.65,.35]].forEach(([u,c])=>a({cx:u,cz:c,w:.06,d:.06,h:.7,bottomY:0,color:"#3A2A1E"}))}function cb(t,e,n,i,r,o,s){const a=l=>Bt(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:1.2,d:.6,h:1.85,bottomY:0,color:"#C9A876"}),a({cx:0,cz:0,w:1.2,d:.6,h:.05,bottomY:1.85,color:"#A9895C"})}function fb(t,e,n,i,r,o,s){const a=l=>Bt(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:.9,d:.55,h:.82,bottomY:0,color:"#E8ECF0"}),a({cx:0,cz:-.05,w:.55,d:.35,h:.08,bottomY:.75,color:"#B9C2CC"}),a({cx:0,cz:-.25,w:.9,d:.05,h:.35,bottomY:.82,color:"#E8ECF0"})}function db(t,e,n,i,r,o,s){const a=l=>Bt(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:.45,d:.4,h:.48,bottomY:0,color:"#C9A876"}),a({cx:0,cz:0,w:.45,d:.4,h:.02,bottomY:.48,color:"#A9895C"})}function hb(t,e,n,i,r,o,s){const a=l=>Bt(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:.75,d:.75,h:.4,bottomY:0,color:"#3B4454"}),a({cx:0,cz:-.3,w:.75,d:.15,h:.35,bottomY:.4,color:"#3B4454"}),a({cx:-.3,cz:0,w:.15,d:.75,h:.5,bottomY:0,color:"#2C3444"}),a({cx:.3,cz:0,w:.15,d:.75,h:.5,bottomY:0,color:"#2C3444"})}function pb(t,e,n,i,r,o,s){const a=l=>Bt(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:1.4,d:.4,h:.45,bottomY:0,color:"#3B4454"}),a({cx:0,cz:-.15,w:1.1,d:.05,h:.65,bottomY:.45,color:"#1A1A1D"})}function mb(t,e,n,i,r,o,s){const a=u=>Bt(t,e,n,i,r,o,s,u);a({cx:0,cz:0,w:1.6,d:.9,h:.05,bottomY:.72,color:"#5A3D28"}),[[-.72,-.4],[.72,-.4],[-.72,.4],[.72,.4]].forEach(([u,c])=>a({cx:u,cz:c,w:.07,d:.07,h:.72,bottomY:0,color:"#3A2A1E"}))}function gb(t,e,n,i,r,o,s){const a=u=>Bt(t,e,n,i,r,o,s,u);a({cx:0,cz:0,w:.42,d:.42,h:.05,bottomY:.45,color:"#4A4A52"}),a({cx:0,cz:-.185,w:.42,d:.05,h:.4,bottomY:.45,color:"#4A4A52"}),[[-.17,-.17],[.17,-.17],[-.17,.17],[.17,.17]].forEach(([u,c])=>a({cx:u,cz:c,w:.04,d:.04,h:.45,bottomY:0,color:"#2C3444"}))}function vb(t,e,n,i,r,o,s){const a=l=>Bt(t,e,n,i,r,o,s,l);a({cx:0,cz:.08,w:.4,d:.5,h:.4,bottomY:0,color:"#F2F2F4"}),a({cx:0,cz:-.28,w:.38,d:.15,h:.35,bottomY:.4,color:"#F2F2F4"})}function _b(t,e,n,i,r,o,s){const a=l=>Bt(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:1.7,d:.75,h:.55,bottomY:0,color:"#F2F2F4"}),a({cx:0,cz:0,w:1.5,d:.55,h:.4,bottomY:.12,color:"#DCE3E8"})}function yb(t,e,n,i,r,o,s){const a=l=>Bt(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:.9,d:.9,h:.05,bottomY:0,color:"#DCE3E8"}),a({cx:-.44,cz:0,w:.03,d:.9,h:1.9,bottomY:.05,color:"#9FD8E8"}),a({cx:0,cz:-.44,w:.9,d:.03,h:1.9,bottomY:.05,color:"#9FD8E8"})}function xb(t,e,n,i,r,o,s){const a=l=>Bt(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:2,d:.6,h:.85,bottomY:0,color:"#DCDCE1"}),a({cx:0,cz:0,w:2,d:.62,h:.04,bottomY:.85,color:"#1A1A1D"})}function Sb(t,e,n,i,r,o,s){const a=l=>Bt(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:.6,d:.6,h:.85,bottomY:0,color:"#DCDCE1"}),a({cx:0,cz:0,w:.55,d:.55,h:.03,bottomY:.85,color:"#1A1A1D"})}function Mb(t,e,n,i,r,o,s){const a=l=>Bt(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:.7,d:.7,h:1.8,bottomY:0,color:"#E8ECF0"}),a({cx:.3,cz:-.36,w:.03,d:.1,h:.4,bottomY:.9,color:"#8E8E96"})}function Eb(t,e,n,i,r,o,s){const a=u=>Bt(t,e,n,i,r,o,s,u);a({cx:0,cz:0,w:1.2,d:.6,h:.04,bottomY:.72,color:"#6B4A32"}),a({cx:.4,cz:0,w:.35,d:.55,h:.72,bottomY:0,color:"#4A4A52"}),[[-.55,-.25],[-.55,.25]].forEach(([u,c])=>a({cx:u,cz:c,w:.05,d:.05,h:.72,bottomY:0,color:"#3A2A1E"}))}function wb(t,e,n,i,r,o,s){const a=l=>Bt(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:.9,d:.3,h:1.8,bottomY:0,color:"#8B5A2B"}),[.5,1,1.5].forEach(l=>a({cx:0,cz:0,w:.85,d:.28,h:.03,bottomY:l,color:"#6B4A32"}))}function Tb(t,e,n,i,r,o,s){switch(i.kind){case"bed":return ab(t,e,n,i,r,o,s);case"sofa":return lb(t,e,n,i,r,o,s);case"table":return ub(t,e,n,i,r,o,s);case"wardrobe":return cb(t,e,n,i,r,o,s);case"sink":return fb(t,e,n,i,r,o,s);case"nightstand":return db(t,e,n,i,r,o,s);case"armchair":return hb(t,e,n,i,r,o,s);case"tv_unit":return pb(t,e,n,i,r,o,s);case"dining_table":return mb(t,e,n,i,r,o,s);case"chair":return gb(t,e,n,i,r,o,s);case"toilet":return vb(t,e,n,i,r,o,s);case"bathtub":return _b(t,e,n,i,r,o,s);case"shower":return yb(t,e,n,i,r,o,s);case"kitchen_counter":return xb(t,e,n,i,r,o,s);case"stove":return Sb(t,e,n,i,r,o,s);case"fridge":return Mb(t,e,n,i,r,o,s);case"desk":return Eb(t,e,n,i,r,o,s);case"bookshelf":return wb(t,e,n,i,r,o,s);default:return}}const _u=1,lf=.914,Fl=.28,Ab=.18,Rb=.85;function Ah(t,e=_u){const n=Math.max(4,Math.round(t/Ab));return{w:e,d:n*Fl,numSteps:n}}function bb(t,e,n,i,r,o,s,a,l){const u=i.width??_u,{d:c,numSteps:h}=Ah(r,u),d=r/h,p=i.rotation||0,y=`#${new Fe(l).multiplyScalar(.85).getHexString()}`,g=p===90||p===270;for(let f=0;f<h;f++){const x=-c/2+(f+.5)*Fl,v=(f+1)*d,{x:_,z:b}=Z_(0,x,p),S=g?Fl:u,T=g?u:Fl,L=Rt(n,y,"wall",S,v,.8);xt(t,e,S,v,T,o+_,a,s+b,L,Rb)}}function vd(t,e,n,i,r,o,s,a,l,u,c=[]){const h=s.x-o.x,d=s.y-o.y,p=Math.hypot(h,d);if(p<.02)return;const m=Math.atan2(h,d),y=(o.x+s.x)/2-u.x,g=(o.y+s.y)/2-u.z,f=new Dr;f.position.set(y,l,g),f.rotation.y=m,t.add(f);const x=c.slice().sort((S,T)=>S.start-T.start),v=S=>S-p/2;let _=0;const b=[];x.forEach(S=>{S.start>_+.02&&b.push({start:_,end:S.start}),_=Math.max(_,S.start+S.width)}),_<p-.02&&b.push({start:_,end:p}),b.forEach(S=>{const T=S.end-S.start;if(T<=.02)return;const L=Rt(n,i,"wall",T,a,.85,r);xt(f,e,ht,a,T,0,0,v((S.start+S.end)/2),L,fi)}),x.forEach(S=>{const T=v(S.start+S.width/2);if(S.sill>.02){const w=Rt(n,i,"wall",S.width,S.sill,.85,r);xt(f,e,ht,S.sill,S.width,0,0,T,w,fi)}const L=S.sill+S.openH,M=a-L;if(M>.02){const w=Rt(n,i,"wall",S.width,M,.85,r);xt(f,e,ht,M,S.width,0,L,T,w,fi)}if(S.isDoor){const w=new ss({color:9132587,roughness:.7});xt(f,e,.05,S.openH,S.width-.06,0,0,T,w,gu)}else{const w=new ss({color:10475752,transparent:!0,opacity:.35,roughness:.05,metalness:.1,side:dn}),O=xt(f,e,.03,S.openH-.05,S.width-.05,0,S.sill,T,w,gu);O.castShadow=!1}})}function bg(t,e,n){const i=new B_;t.forEach((o,s)=>{const a=o.x-n.x,l=o.y-n.z;s===0?i.moveTo(a,l):i.lineTo(a,l)}),i.closePath();const r=new wh(i,{depth:e,bevelEnabled:!1,curveSegments:1});return r.translate(0,0,-e/2),r.rotateX(Math.PI/2),r}function _d(t,e,n,i,r,o,s){const a=new zn(n,i);return a.position.set(0,r+o/2,0),a.scale.y=.001,a.castShadow=!0,a.receiveShadow=!0,t.add(a),e.meshes.push({mesh:a,height:o,baseY:r,delay:s}),a}function Cb(t,e,n,i,r,o,s,a,l,u,c,h=!1){const d=i.points;if(!d||d.length<3)return;const p=bg(d,.06,l),m=Rt(n,i.color,"floor",4,4,.9,i.floor_material);m.side=dn,_d(t,e,p,m,o,.06,fi);for(let v=0;v<d.length;v++){const _=d[v],b=d[(v+1)%d.length],S=Math.hypot(b.x-_.x,b.y-_.y),T=(i.openings||[]).filter(M=>M.edge_index===v).map(M=>vu(M,S,r)),L=(c==null?void 0:c.get(K_(i.id,null,v)))||[];$_(L,S).forEach(M=>{const w=W=>({x:_.x+(b.x-_.x)*W/S,y:_.y+(b.y-_.y)*W/S}),O=T.filter(W=>W.start>=M.start-.02&&W.start+W.width<=M.end+.02).map(W=>({...W,start:W.start-M.start}));vd(t,e,n,s,a,w(M.start),w(M.end),r,o,l,O)})}if(h||!i.has_roof&&!u)return;const g=`#${new Fe(s).multiplyScalar(.72).getHexString()}`,f=bg(d,lr,l),x=Rt(n,g,"roof",4,4,.95);if(x.side=dn,_d(t,e,f,x,o+r,lr,wi),i.has_roof){const v=o+r+lr;for(let _=0;_<d.length;_++)vd(t,e,n,g,a,d[_],d[(_+1)%d.length],Ar,v,l)}}const Pb=[{wall:"top",axis:"x",doorFallback:!1},{wall:"bottom",axis:"x",doorFallback:!0},{wall:"left",axis:"z",doorFallback:!1},{wall:"right",axis:"z",doorFallback:!1}];function J_(t){var e,n,i;for((e=t.geometry)==null||e.dispose(),t.material&&((n=t.material.map)==null||n.dispose(),(i=t.material.normalMap)==null||i.dispose(),t.material.dispose());t.children.length;)J_(t.children.pop())}function Lb(t,e){const n=(t.floor??0)+1,i=t.gx,r=t.gx+t.gw,o=t.gy,s=t.gy+t.gh;return e.some(a=>{if(a===t||(a.floor??0)!==n)return!1;const l=a.gx,u=a.gx+a.gw,c=a.gy,h=a.gy+a.gh;return i<u&&r>l&&o<h&&s>c})}function Db(t,e,n,i,r,o,s,a,l="plaster",u={}){const c=!!u.hideRoofs,h=u.floorGap??0,d=u.columns||[],p=u.showFoundation!==!1;for(;t.children.length;)J_(t.children.pop());s.meshes=[];const m=e.filter(_=>!_.points),y=JR(m),g=tb(e),f=nb(QR(y),g),x=Math.max(0,...(n||[]).map(_=>(_.floor??0)+1)),v=Wu(e,i,x,h);if(e.forEach(_=>{const b=_.floor??0,S=v.get(b),T=_.wall_height??i,L=_.wall_color??r,M=_.wall_material??l,w=Lb(_,e);if(_.points){Cb(t,s,a,_,T,S,L,M,o,w,f,c);return}const O=_.gx+_.gw/2-o.x,W=_.gy+_.gh/2-o.z,te=Rt(a,_.color,"floor",_.gw,_.gh,.9,_.floor_material),D=new zn(new Jr(_.gw,.06,_.gh),te);D.position.set(O,S+.03,W),D.receiveShadow=!0,t.add(D);const V=_.gx-o.x,j=_.gx+_.gw-o.x,K=_.gy-o.z,N=_.gy+_.gh-o.z;Pb.forEach(({wall:z,axis:G,doorFallback:ee})=>{const ne=G==="x"?_.gw:_.gh,Y=G==="x"?V:K,ie=z==="top"?K:z==="bottom"?N:z==="left"?V:j,he=f.get(`${_.id}:${z}`)||[],ye=$_(he,ne);if(ye.length===0)return;const me=ib(_.openings,z,ne,T,ee);ye.forEach(Te=>{const se=Te.start<=ko?ht/2:0,P=Te.end>=ne-ko?ht/2:0,J=Te.end-Te.start+se+P,A=Y+Te.start-se,k=me.filter(U=>U.start>=Te.start-.02&&U.start+U.width<=Te.end+.02).map(U=>({...U,start:U.start-Te.start+se}));Ag(t,s,a,L,M,{axis:G,u0:A,fixed:ie,wallLength:J,wallHeight:T,floorBaseY:S,openings:k})})}),rb(t,s,a,_,T,S,L,M,O,W,!c&&!!_.has_roof,!c&&w),(_.furniture||[]).forEach(z=>{Tb(t,s,a,z,_.gx+Number(z.x)-o.x,_.gy+Number(z.y)-o.z,S)})}),y.forEach(_=>{const{room:b,wall:S}=_.a,{room:T,wall:L}=_.b,M=v.get(b.floor??0),w=b.wall_height??i,O=b.wall_color??r,W=b.wall_material??l,te=b.gx-o.x,D=b.gx+b.gw-o.x,V=b.gy-o.z,j=b.gy+b.gh-o.z,K=S==="left"||S==="right"?"z":"x",N=K==="z"?b.gh:b.gw,z=K==="z"?T.gh:T.gw,G=K==="z"?b.gy:b.gx,ee=K==="z"?T.gy:T.gx,ne=K==="z"?V:te,Y=K==="z"?S==="right"?D:te:S==="bottom"?j:V,ie=_.start-G,he=_.end-G,ye=ie<=ko?ht/2:0,me=he>=N-ko?ht/2:0,Te=he-ie+ye+me,se=ne+ie-ye,P=(A,k,U,Q)=>(A.openings||[]).filter(H=>H.wall===k&&H.kind==="door").filter(H=>{const pe=U+Number(H.position);return pe-kt/2>=_.start-.02&&pe+kt/2<=_.end+.02}).map(H=>{const pe=vu(H,Q,w);return{...pe,start:U+pe.start-_.start+ye}}),J=Tg([...P(b,S,G,N),...P(T,L,ee,z)]);Ag(t,s,a,O,W,{axis:K,u0:se,fixed:Y,wallLength:Te,wallHeight:w,floorBaseY:M,openings:J})}),g.forEach(_=>{const b=_.a.room,S=v.get(b.floor??0),T=b.wall_height??i,L=b.wall_color??r,M=b.wall_material??l,w=(W,te)=>(W.room.openings||[]).filter(D=>(W.edgeIndex!=null?D.edge_index===W.edgeIndex:D.wall===W.wall)&&D.kind==="door").map(D=>vu(D,W.edgeLength,T)).filter(D=>D.start>=W.start-.02&&D.start+D.width<=W.end+.02).map(D=>({...D,start:te&&_.flipped?W.end-(D.start+D.width):D.start-W.start})),O=Tg([...w(_.a,!1),...w(_.b,!0)]);vd(t,s,a,L,M,_.p1,_.p2,T,S,o,O)}),(n||[]).forEach(_=>{const b=_.floor??0,S=v.get(b),T=v.get(b+1)-S;if(!(T>0))return;const L=Number(_.x)-o.x,M=Number(_.y)-o.z;bb(t,s,a,_,T,L,M,S,r)}),d.forEach(_=>{const b=_.floor??0,S=v.get(b);if(S==null)return;const T=_.height??i,L=_.size??Mi,M=Number(_.x)-o.x,w=Number(_.y)-o.z,O=Rt(a,"#9a9a9a","wall",L,T,.85,"concrete");if(xt(t,s,L,T,L,M,S,w,O,fi),p&&b===0){const W=L+Gt*2,te=Rt(a,"#8d8d8d","wall",W,So,.9,"concrete");xt(t,s,W,So,W,M,S-So,w,te,fi)}}),p){const _=Th(e,0),b=v.get(0);if(_&&b!=null){const S=_.maxX-_.minX+Gt*2,T=_.maxY-_.minY+Gt*2,L=(_.minX+_.maxX)/2-o.x,M=(_.minY+_.maxY)/2-o.z,w=Rt(a,"#8d8d8d","wall",S,So,.9,"concrete");xt(t,s,S,So,T,L,b-So,M,w,fi)}}s.progress=0,s.playing=!0}const re=32;function ut(t,e=.5){return Math.round(t/e)*e}function ei(t,e,n){return Math.min(n,Math.max(e,t))}function Ib(t,e,n,i,r){return!n||!(n.width>0)||!(n.height>0)?{x:0,y:0}:{x:ei((t-n.left)/n.width*i,0,i),y:ei((e-n.top)/n.height*r,0,r)}}function yu(t,e=n=>n){return t===0?e("Ground Floor"):e("Floor")+" "+t}const Nb=12,Ub=.3,Ob=.22;function yd(t,e,n,i,r,o){const s=r-n,a=o-i,l=s*s+a*a,u=l===0?0:ei(((t-n)*s+(e-i)*a)/l,0,1),c=n+u*s,h=i+u*a;return{dist:Math.hypot(t-c,e-h),t:u}}function Fb(t,e,n,i,r,o,s){let a=null;if(t.forEach(m=>{if(m.points){for(let g=0;g<m.points.length;g++){const f=m.points[g],x=m.points[(g+1)%m.points.length],v=Math.hypot(x.x-f.x,x.y-f.y),{dist:_,t:b}=yd(e,n,f.x,f.y,x.x,x.y),S=b*v;(!a||_<a.dist)&&(a={dist:_,roomId:m.id,edgeIndex:g,length:v,rawPosition:S})}return}[{wall:"top",x1:m.gx,y1:m.gy,x2:m.gx+m.gw,y2:m.gy,length:m.gw},{wall:"bottom",x1:m.gx,y1:m.gy+m.gh,x2:m.gx+m.gw,y2:m.gy+m.gh,length:m.gw},{wall:"left",x1:m.gx,y1:m.gy,x2:m.gx,y2:m.gy+m.gh,length:m.gh},{wall:"right",x1:m.gx+m.gw,y1:m.gy,x2:m.gx+m.gw,y2:m.gy+m.gh,length:m.gh}].forEach(g=>{const{dist:f,t:x}=yd(e,n,g.x1,g.y1,g.x2,g.y2),v=x*g.length;(!a||f<a.dist)&&(a={dist:f,roomId:m.id,wall:g.wall,length:g.length,rawPosition:v})})}),!a||a.dist>Ub||a.length<i)return null;const l=i/2,u=ei(a.rawPosition,l,a.length-l),c=a.wall==null;return(t.find(m=>m.id===a.roomId).openings||[]).filter(m=>(c?m.edge_index===a.edgeIndex:m.wall===a.wall)&&m.id!==s).some(m=>{const y=m.kind==="door"?kt:hn;return u-l<m.position+y/2&&u+l>m.position-y/2})?null:c?{roomId:a.roomId,edgeIndex:a.edgeIndex,position:u}:{roomId:a.roomId,wall:a.wall,position:u}}function kb(t,e,n){let i=null;return t.forEach(r=>{(r.openings||[]).forEach(o=>{const s=o.kind==="door"?kt:hn,a=ps(r,o,s),{dist:l}=yd(e,n,a.x1,a.y1,a.x2,a.y2);(!i||l<i.dist)&&(i={dist:l,roomId:r.id,id:o.id,wall:o.wall,edgeIndex:o.edge_index,position:o.position,kind:o.kind})})}),!i||i.dist>Ob?null:i}function ps(t,e,n){const i=n/2;if(t.points){const a=e.edgeIndex??e.edge_index,l=t.points[a],u=t.points[(a+1)%t.points.length],c=Math.hypot(u.x-l.x,u.y-l.y)||1,h=(e.position-i)/c,d=(e.position+i)/c;return{x1:l.x+(u.x-l.x)*h,y1:l.y+(u.y-l.y)*h,x2:l.x+(u.x-l.x)*d,y2:l.y+(u.y-l.y)*d}}const{wall:r,position:o}=e;if(r==="top"||r==="bottom"){const a=r==="top"?t.gy:t.gy+t.gh;return{x1:t.gx+o-i,y1:a,x2:t.gx+o+i,y2:a}}const s=r==="left"?t.gx:t.gx+t.gw;return{x1:s,y1:t.gy+o-i,x2:s,y2:t.gy+o+i}}const Ki=.35,Zt=.08;function Q_(t,e,n){if(e.points)return;const{gx:i,gy:r,gw:o,gh:s}=e;t.save(),t.strokeStyle=n.line,t.fillStyle=n.text,t.lineWidth=1,t.font="10px 'IBM Plex Mono', monospace",t.textAlign="center";const a=(d,p,m,y)=>{t.beginPath(),t.moveTo(d*re,p*re),t.lineTo(m*re,y*re),t.stroke()},l=r-Ki;a(i,r,i,l-Zt),a(i+o,r,i+o,l-Zt),a(i,l,i+o,l),t.fillText(o.toFixed(2),(i+o/2)*re,(l-.06)*re);const u=r+s+Ki;a(i,r+s,i,u+Zt),a(i+o,r+s,i+o,u+Zt),a(i,u,i+o,u),t.fillText(o.toFixed(2),(i+o/2)*re,(u+.16)*re);const c=i-Ki;a(i,r,c-Zt,r),a(i,r+s,c-Zt,r+s),a(c,r,c,r+s),t.save(),t.translate(c*re-6,(r+s/2)*re),t.rotate(-Math.PI/2),t.fillText(s.toFixed(2),0,0),t.restore();const h=i+o+Ki;a(i+o,r,h+Zt,r),a(i+o,r+s,h+Zt,r+s),a(h,r,h,r+s),t.save(),t.translate(h*re+6,(r+s/2)*re),t.rotate(-Math.PI/2),t.fillText(s.toFixed(2),0,0),t.restore(),t.restore()}function ey(t){if(t.points&&t.points.length){const e=t.points.length;return{x:t.points.reduce((n,i)=>n+i.x,0)/e,y:t.points.reduce((n,i)=>n+i.y,0)/e}}return{x:t.gx+t.gw/2,y:t.gy+t.gh/2}}function ty(t,e,n,i){if(n.kind!=="door")return;const r=ps(e,n,kt),o=r.x2-r.x1,s=r.y2-r.y1,a=Math.hypot(o,s);if(a<.01)return;const l={x:-s/a,y:o/a},u={x:s/a,y:-o/a},c=ey(e),h=(r.x1+r.x2)/2,d=(r.y1+r.y2)/2,p={x:c.x-h,y:c.y-d},m=l.x*p.x+l.y*p.y>=0?l:u,y=Math.atan2(s,o),g=Math.atan2(m.y,m.x);let f=g-y;for(;f>Math.PI;)f-=Math.PI*2;for(;f<=-Math.PI;)f+=Math.PI*2;const x=f<0,v=r.x1,_=r.y1;t.save(),t.strokeStyle=i,t.lineWidth=1,t.setLineDash([3,3]),t.beginPath(),t.arc(v*re,_*re,kt*re,y,g,x),t.stroke(),t.setLineDash([]),t.beginPath(),t.moveTo(v*re,_*re),t.lineTo((v+kt*Math.cos(g))*re,(_+kt*Math.sin(g))*re),t.stroke(),t.restore()}function zb(t,e,n,i,r,o,s,a){t.save(),t.strokeStyle=a,t.lineWidth=1;const l=ei(s,2,16),u=o===90||o===270;for(let c=1;c<l;c++){if(t.beginPath(),u){const h=e+i*re*c/l;t.moveTo(h,n),t.lineTo(h,n+r*re)}else{const h=n+r*re*c/l;t.moveTo(e,h),t.lineTo(e+i*re,h)}t.stroke()}t.restore()}function Bb(t,e){const n=Y_[t];if(!n)return{w:.5,d:.5};const i=e===90||e===270;return{w:i?n.d:n.w,d:i?n.w:n.d}}function Hb(t,e,n){let i=!1;for(let r=0,o=t.length-1;r<t.length;o=r++){const s=t[r].x,a=t[r].y,l=t[o].x,u=t[o].y;a>n!=u>n&&e<(l-s)*(n-a)/(u-a)+s&&(i=!i)}return i}const Gb=.15;function Rh(t,e,n){const i=Wu(t,n,e+1);return i.get(e+1)-i.get(e)}function Xu(t,e,n){const{w:i,d:r}=Ah(t,n),o=e===90||e===270;return{w:o?r:i,d:o?i:r}}function Vb(t,e,n,i,r){let o=null;return t.forEach(s=>{const a=Rh(e,s.floor??0,n),l=s.rotation||0,{w:u,d:c}=Xu(a,l,s.width),h=s.x-u/2,d=s.x+u/2,p=s.y-c/2,m=s.y+c/2,y=Math.max(h-i,0,i-d),g=Math.max(p-r,0,r-m),f=Math.hypot(y,g);(!o||f<o.dist)&&(o={dist:f,id:s.id,floor:s.floor??0,x:s.x,y:s.y,rotation:l,width:s.width})}),!o||o.dist>Gb?null:o}function Cg(t,e,n,i,r,o,s){const{w:a,d:l}=Xu(r,o,s);if(t<a||e<l)return null;const u=a/2,c=l/2,h=ei(n,u,t-u),d=ei(i,c,e-c);return{x:h,y:d}}function Wb(t,e,n){const i=document.createElement("canvas");i.width=e*re,i.height=n*re;const r=i.getContext("2d");r.fillStyle="#FFFFFF",r.fillRect(0,0,i.width,i.height);for(let o=0;o<=e;o++)r.strokeStyle=o%5===0?"#C7C7CC":"#EDEDF0",r.lineWidth=o%5===0?1.2:1,r.beginPath(),r.moveTo(o*re+.5,0),r.lineTo(o*re+.5,n*re),r.stroke();for(let o=0;o<=n;o++)r.strokeStyle=o%5===0?"#C7C7CC":"#EDEDF0",r.lineWidth=o%5===0?1.2:1,r.beginPath(),r.moveTo(0,o*re+.5),r.lineTo(e*re,o*re+.5),r.stroke();return t.forEach(o=>{const s=o.gx*re,a=o.gy*re,l=o.gw*re,u=o.gh*re;o.points&&o.points.length>=3?(r.beginPath(),o.points.forEach((c,h)=>{h===0?r.moveTo(c.x*re,c.y*re):r.lineTo(c.x*re,c.y*re)}),r.closePath(),r.fillStyle=o.color+"25",r.fill(),r.strokeStyle=o.color,r.lineWidth=2,r.stroke(),r.fillStyle="#1A1A1D",r.font="700 13px Tajawal, sans-serif",r.fillText(o.name,s+8,a+20),r.fillStyle="#68686E",r.font="11px 'IBM Plex Mono', monospace",r.fillText(`${X_(o).toFixed(1)} m²`,s+8,a+36)):(r.fillStyle=o.color+"25",r.fillRect(s,a,l,u),r.strokeStyle=o.color,r.lineWidth=2,r.strokeRect(s,a,l,u),r.fillStyle="#1A1A1D",r.font="700 13px Tajawal, sans-serif",r.fillText(o.name,s+8,a+20),r.fillStyle="#68686E",r.font="11px 'IBM Plex Mono', monospace",r.fillText(`${o.gw.toFixed(1)} × ${o.gh.toFixed(1)} m`,s+8,a+36),Q_(r,o,{line:"#B45309",text:"#92400E"})),(o.openings||[]).forEach(c=>{const h=c.kind==="door"?kt:hn,d=ps(o,c,h);r.strokeStyle=c.kind==="door"?"#8B5A2B":"#0EA5E9",r.lineWidth=5,r.beginPath(),r.moveTo(d.x1*re,d.y1*re),r.lineTo(d.x2*re,d.y2*re),r.stroke(),ty(r,o,c,"#8B5A2B")}),(o.furniture||[]).forEach(c=>{var y;const{w:h,d}=Bb(c.kind,c.rotation||0),p=(o.gx+c.x-h/2)*re,m=(o.gy+c.y-d/2)*re;r.fillStyle="#A9895C25",r.fillRect(p,m,h*re,d*re),r.strokeStyle="#A9895C",r.lineWidth=1.5,r.strokeRect(p,m,h*re,d*re),r.fillStyle="#1A1A1D",r.font="10px Tajawal, sans-serif",r.textAlign="center",r.fillText(((y=Y_[c.kind])==null?void 0:y.label)||"",p+h*re/2,m+d*re/2+3),r.textAlign="start"})}),i.toDataURL("image/png")}function Xb(t){const e=document.createElement("canvas"),n=e.getContext("2d"),i=40;n.font=`700 ${i}px Tajawal, sans-serif`;const r=n.measureText(t).width,o=22,s=14;e.width=Math.ceil(r+o*2),e.height=i+s*2,n.font=`700 ${i}px Tajawal, sans-serif`,n.fillStyle="rgba(17,20,26,0.72)";const a=14;n.beginPath(),n.moveTo(a,0),n.arcTo(e.width,0,e.width,e.height,a),n.arcTo(e.width,e.height,0,e.height,a),n.arcTo(0,e.height,0,0,a),n.arcTo(0,0,e.width,0,a),n.closePath(),n.fill(),n.fillStyle="#ffffff",n.textAlign="center",n.textBaseline="middle",n.fillText(t,e.width/2,e.height/2+2);const l=new Sh(e);l.needsUpdate=!0;const u=new I_({map:l,depthWrite:!1,transparent:!0}),c=new JA(u),h=.014;return c.scale.set(e.width*h,e.height*h,1),c}const uf=.62,cf=Math.PI/4,jb=be.forwardRef(function({rooms:e,stairs:n,columns:i=[],wallHeight:r,wallColor:o,wallMaterial:s,autoRotate:a,dollhouse:l=!1,floorGap:u=0,renderView:c=!1,showFoundation:h=!0,t:d=m=>m},p){const m=be.useRef(null),y=be.useRef({}),g=be.useRef({autoRotate:a}),f=be.useRef({maxRadius:50}),x=be.useRef(l),v=be.useRef(new Map),[_,b]=be.useState(0);return be.useEffect(()=>{g.current.autoRotate=a},[a]),be.useImperativeHandle(p,()=>({captureImage(S="image/jpeg",T=.92){const L=y.current;return!L.renderer||!L.scene||!L.camera?null:(L.renderer.render(L.scene,L.camera),L.renderer.domElement.toDataURL(S,T))}}),[]),be.useEffect(()=>{const S=m.current,T=new KA;T.background=new Fe(15790322),T.fog=new xh(15790322,22,60);const L=new On(50,1,.1,200),M=new D_({antialias:!0});M.setPixelRatio(Math.min(window.devicePixelRatio,2)),M.shadowMap.enabled=!0,M.shadowMap.type=Jv,S.appendChild(M.domElement),T.add(new IR(12572415,1711915,.95));const w=new OR(16773856,1);w.position.set(10,18,8),w.castShadow=!0,w.shadow.mapSize.set(2048,2048),w.shadow.bias=-.0015,T.add(w);const O=new zn(new Bu(300,300),new ss({color:13948120,roughness:1}));O.rotation.x=-Math.PI/2,O.position.y=-.03,O.receiveShadow=!0,T.add(O);const W=new FR(300,150,10592682,13948120);W.position.y=-.02,T.add(W);const te=new Dr;T.add(te);const D=Eg(e,r),V={theta:cf,phi:l?uf:1,radius:D.radius,target:new F(0,D.targetY,0)};function j(){const{theta:k,phi:U,radius:Q,target:H}=V;L.position.set(H.x+Q*Math.sin(U)*Math.sin(k),H.y+Q*Math.cos(U),H.z+Q*Math.sin(U)*Math.cos(k)),L.lookAt(H)}let K=!1,N=0,z=0;const G=new Map;let ee=null;function ne(){const[k,U]=[...G.values()];return Math.hypot(k.x-U.x,k.y-U.y)}function Y(k){G.set(k.pointerId,{x:k.clientX,y:k.clientY}),G.size===1?(K=!0,N=k.clientX,z=k.clientY):G.size===2&&(K=!1,ee=ne())}function ie(k){if(G.has(k.pointerId))G.set(k.pointerId,{x:k.clientX,y:k.clientY});else if(!K)return;if(G.size>=2){const H=ne();ee&&(V.radius=ei(V.radius*(ee/H),3,f.current.maxRadius),j()),ee=H;return}if(!K)return;const U=k.clientX-N,Q=k.clientY-z;N=k.clientX,z=k.clientY,V.theta-=U*.006,V.phi=ei(V.phi-Q*.006,.15,1.5),j()}function he(k){if(G.delete(k.pointerId),ee=null,G.size===1){const[[,U]]=G;K=!0,N=U.x,z=U.y}else G.size===0&&(K=!1)}function ye(k){k.preventDefault(),V.radius=ei(V.radius*(1+k.deltaY*.001),3,f.current.maxRadius),j()}const me=M.domElement;me.style.cursor="grab",me.style.touchAction="none",me.addEventListener("pointerdown",Y),window.addEventListener("pointermove",ie),window.addEventListener("pointerup",he),window.addEventListener("pointercancel",he),me.addEventListener("wheel",ye,{passive:!1});function Te(){const k=S.clientWidth,U=S.clientHeight;k===0||U===0||(M.setSize(k,U),L.aspect=k/U,L.updateProjectionMatrix())}Te();const se=new ResizeObserver(Te);se.observe(S),j();const P={progress:0,playing:!0,meshes:[]};let J;function A(){J=requestAnimationFrame(A),g.current.autoRotate&&!K&&(V.theta+=.0028,j()),P.playing&&(P.progress=Math.min(1,P.progress+.025),P.meshes.forEach(({mesh:k,height:U,baseY:Q,delay:H})=>{const pe=ei((P.progress-H)/(1-H),0,1),ce=1-Math.pow(1-pe,3);k.scale.y=Math.max(ce,.001),k.position.y=Q+U*ce/2}),P.progress>=1&&(P.playing=!1)),M.render(T,L)}return A(),y.current={scene:T,group:te,orbit:V,updateCamera:j,animState:P,dirLight:w,renderer:M,camera:L,center:D,defaultRadius:D.radius,defaultTargetY:D.targetY},f.current.maxRadius=Math.max(50,D.radius*2),()=>{cancelAnimationFrame(J),me.removeEventListener("pointerdown",Y),window.removeEventListener("pointermove",ie),window.removeEventListener("pointerup",he),window.removeEventListener("pointercancel",he),me.removeEventListener("wheel",ye),se.disconnect(),S.removeChild(M.domElement),M.dispose()}},[]),be.useEffect(()=>{const S=y.current;if(!S.group)return;const T=c?"brick":s;if(Db(S.group,e,n,r,o,S.center,S.animState,v.current,T,{hideRoofs:l,floorGap:u,columns:i,showFoundation:h}),c){const L=Wu(e,r,Math.max(0,...(n||[]).map(M=>(M.floor??0)+1)),u);e.forEach(M=>{if(!M.name)return;const w=M.wall_height??r,O=L.get(M.floor??0)??0,W=M.gx+M.gw/2-S.center.x,te=M.gy+M.gh/2-S.center.z,D=Xb(M.name);D.position.set(W,O+w*.55,te),S.group.add(D)})}if(S.dirLight){const L=S.defaultRadius;S.dirLight.position.set(L*.6,Math.max(14,L*.9),L*.45);const M=S.dirLight.shadow.camera;M.left=-L,M.right=L,M.top=L,M.bottom=-L,M.near=1;const w=Math.max(r,...e.map(O=>O.wall_height??r));M.far=L*3+w*2,M.updateProjectionMatrix()}},[e,n,i,r,o,s,l,u,c,h]),be.useEffect(()=>{var L;const S=y.current;if(!S.orbit||!S.updateCamera)return;const T=Eg(e,r,u);S.defaultRadius=T.radius,S.defaultTargetY=T.targetY,S.orbit.target.y=T.targetY,S.orbit.radius=T.radius,f.current.maxRadius=Math.max(50,T.radius*2),(L=S.scene)!=null&&L.fog&&(S.scene.fog.far=Math.max(60,T.radius*2.6)),l!==x.current&&(x.current=l,l&&(S.orbit.phi=uf,S.orbit.theta=cf)),S.updateCamera()},[l,u]),be.useEffect(()=>{if(_===0)return;const S=y.current;S.orbit&&(S.orbit.theta=cf,S.orbit.phi=l?uf:1,S.orbit.radius=S.defaultRadius,S.orbit.target.y=S.defaultTargetY??S.orbit.target.y,S.updateCamera())},[_]),oe.jsxs("div",{style:{position:"relative",width:"100%",height:"100%"},children:[oe.jsx("div",{ref:m,style:{width:"100%",height:"100%"}}),oe.jsx("button",{type:"button",onClick:()=>b(S=>S+1),style:{position:"absolute",bottom:12,right:12,fontSize:12,fontWeight:600,color:"#e2e8f0",background:"rgba(15,23,42,0.9)",border:"1px solid #334155",borderRadius:8,padding:"6px 12px",cursor:"pointer"},children:d("Reset camera")})]})}),xd=[{id:"bedroom",label:"Bedroom",minW:2.13,minH:2.13,defaultW:3.5,defaultH:3.5,codeBased:!0,codeRef:"IRC R304.2"},{id:"living_room",label:"Living Room",minW:2.13,minH:2.13,defaultW:4.5,defaultH:4,codeBased:!0,codeRef:"IRC R304.2"},{id:"dining_room",label:"Dining Room",minW:2.13,minH:2.13,defaultW:3.5,defaultH:3.5,codeBased:!0,codeRef:"IRC R304.2"},{id:"office",label:"Office",minW:2.13,minH:2.13,defaultW:3,defaultH:3,codeBased:!0,codeRef:"IRC R304.2"},{id:"kitchen",label:"Kitchen",minW:1.5,minH:2,defaultW:3,defaultH:3,codeBased:!1},{id:"bathroom",label:"Bathroom",minW:1.5,minH:1.5,defaultW:2,defaultH:2,codeBased:!1},{id:"hallway",label:"Hallway",minW:.91,minH:1.2,defaultW:1.2,defaultH:3,codeBased:!0,codeRef:"IRC R311.6"},{id:"closet",label:"Closet",minW:.6,minH:.6,defaultW:1,defaultH:1,codeBased:!1},{id:"garage",label:"Garage",minW:3,minH:5.5,defaultW:3.5,defaultH:6,codeBased:!1},{id:"other",label:"Other",minW:1.5,minH:1.5,defaultW:3,defaultH:3,codeBased:!1}],Yb="other";function bh(t){return xd.find(e=>e.id===t)||xd.find(e=>e.id===Yb)}const Pg=24,Lg=1.5,Dg=["#cfd6cf","#d8cfc2","#c9d3df","#dccfd6","#cfd8d3"];function qb({rooms:t,stairs:e,columns:n=[],showFoundation:i=!0,wallHeight:r,gridW:o=20,gridH:s=16,mode:a,activeFloor:l=0,selectedRoomId:u,selectedOpening:c,selectedStairId:h,selectedColumnId:d,onAddRoom:p,onAddPolygonRoom:m,onMoveRoom:y,onResizeRoom:g,onMovePolygonRoom:f,onSelectRoom:x,onAddOpening:v,onSelectOpening:_,onAddStair:b,onMoveStair:S,onSelectStair:T,onAddColumn:L,onMoveColumn:M,onSelectColumn:w}){const O=be.useRef(null),W=be.useRef(null),[te,D]=be.useState(null),[V,j]=be.useState(null),K=t.filter(se=>(se.floor??0)===l),N=e.filter(se=>(se.floor??0)===l),z=n.filter(se=>(se.floor??0)===l),G=Rh(t,l,r);be.useEffect(()=>{a!=="polygon"&&D(null)},[a]),be.useEffect(()=>{function se(P){P.key==="Escape"&&te&&D(null)}return window.addEventListener("keydown",se),()=>window.removeEventListener("keydown",se)},[te]);function ee(se,P,J,A){P.points?(se.beginPath(),P.points.forEach((k,U)=>{U===0?se.moveTo(k.x*re,k.y*re):se.lineTo(k.x*re,k.y*re)}),se.closePath(),se.fillStyle=A,se.fill(),se.strokeStyle=J?"#c9a96e":"#4b5563",se.lineWidth=Math.max(2,ht*re),se.stroke()):(se.fillStyle=A,se.fillRect(P.gx*re,P.gy*re,P.gw*re,P.gh*re),se.strokeStyle=J?"#c9a96e":"#4b5563",se.lineWidth=Math.max(2,ht*re),se.strokeRect(P.gx*re,P.gy*re,P.gw*re,P.gh*re))}function ne(){const se=O.current;if(!se)return;const P=se.getContext("2d");P.clearRect(0,0,se.width,se.height),P.strokeStyle="#e5e7eb",P.lineWidth=1;for(let A=0;A<=o;A++)P.beginPath(),P.moveTo(A*re,0),P.lineTo(A*re,s*re),P.stroke();for(let A=0;A<=s;A++)P.beginPath(),P.moveTo(0,A*re),P.lineTo(o*re,A*re),P.stroke();if(i&&l===0){const A=Th(t,0);A&&(P.save(),P.strokeStyle="#9ca3af",P.lineWidth=1.5,P.setLineDash([6,4]),P.strokeRect((A.minX-Gt)*re,(A.minY-Gt)*re,(A.maxX-A.minX+Gt*2)*re,(A.maxY-A.minY+Gt*2)*re),P.restore())}K.forEach((A,k)=>{const U=A.id===u;ee(P,A,U,A.color||Dg[k%Dg.length]);const Q=A.points?A.points.reduce((pe,ce)=>pe+ce.x,0)/A.points.length:A.gx+A.gw/2,H=A.points?A.points.reduce((pe,ce)=>pe+ce.y,0)/A.points.length:A.gy+A.gh/2;if(P.fillStyle="#1b1e22",P.font="13px sans-serif",P.textAlign="center",P.fillText(A.name,Q*re,H*re),Q_(P,A,{line:"#9ca3af",text:"#6b7280"}),(A.openings||[]).forEach(pe=>{const ce=pe.kind==="door"?kt:hn,R=ps(A,pe,ce),E=c&&c.roomId===A.id&&c.openingId===pe.id;P.save(),P.strokeStyle=E?"#c9a96e":pe.kind==="door"?"#8b5e34":"#3b82f6",P.lineWidth=Math.max(3,ht*re+2),P.beginPath(),P.moveTo(R.x1*re,R.y1*re),P.lineTo(R.x2*re,R.y2*re),P.stroke(),P.restore(),pe.kind==="door"&&ty(P,A,pe,E?"#c9a96e":"#8b5e34")}),U&&!A.points){P.fillStyle="#c9a96e";const pe=(A.gx+A.gw)*re,ce=(A.gy+A.gh)*re;P.fillRect(pe-6,ce-6,12,12)}}),N.forEach(A=>{const k=A.rotation||0,{w:U,d:Q}=Xu(G,k,A.width),H=A.id===h,pe=(A.x-U/2)*re,ce=(A.y-Q/2)*re;P.strokeStyle=H?"#c9a96e":"#6b5e3a",P.lineWidth=2,P.strokeRect(pe,ce,U*re,Q*re),zb(P,pe,ce,U,Q,k,Ah(G).numSteps,H?"#c9a96e":"#6b5e3a")}),i&&l===0&&z.forEach(A=>{const U=((A.size??Mi)+Gt*2)/2;P.save(),P.strokeStyle="#9ca3af",P.lineWidth=1.5,P.setLineDash([6,4]),P.strokeRect((A.x-U)*re,(A.y-U)*re,U*2*re,U*2*re),P.restore()}),z.forEach(A=>{const k=A.id===d,U=Mi/2;P.fillStyle=k?"#c9a96e":"#6b7280",P.fillRect((A.x-U)*re,(A.y-U)*re,Mi*re,Mi*re),P.strokeStyle="#374151",P.lineWidth=1,P.strokeRect((A.x-U)*re,(A.y-U)*re,Mi*re,Mi*re)}),te&&te.length&&(P.strokeStyle="#c9a96e",P.lineWidth=2,P.beginPath(),te.forEach((A,k)=>{k===0?P.moveTo(A.x*re,A.y*re):P.lineTo(A.x*re,A.y*re)}),V&&P.lineTo(V.x*re,V.y*re),P.stroke(),P.fillStyle="#c9a96e",te.forEach(A=>{P.beginPath(),P.arc(A.x*re,A.y*re,4,0,Math.PI*2),P.fill()}));const J=W.current;if(J&&J.kind==="new-room"){const A=Math.min(J.startX,J.curX),k=Math.min(J.startY,J.curY),U=Math.abs(J.curX-J.startX),Q=Math.abs(J.curY-J.startY);P.strokeStyle="#c9a96e",P.setLineDash([6,4]),P.lineWidth=2,P.strokeRect(A*re,k*re,U*re,Q*re),P.setLineDash([])}}be.useEffect(ne);function Y(se){const P=O.current.getBoundingClientRect();return Ib(se.clientX,se.clientY,P,o,s)}function ie(){const se=O.current&&O.current.getBoundingClientRect();return!se||!se.width?Pg/re:Pg/(se.width/o)}function he(se,P){return K.find(J=>J.points?Hb(J.points,se,P):se>=J.gx&&se<=J.gx+J.gw&&P>=J.gy&&P<=J.gy+J.gh)}function ye(se){const{x:P,y:J}=Y(se);if(a==="room"){W.current={kind:"new-room",startX:ut(P),startY:ut(J),curX:P,curY:J},ne();return}if(a==="polygon"){const E={x:ut(P),y:ut(J)};if(te&&te.length>=3){const B=te[0];if(Math.hypot(E.x-B.x,E.y-B.y)<=ie()){m(te),D(null);return}}D(B=>B?[...B,E]:[E]);return}if(a==="door"||a==="window"){const B=Fb(K,P,J,a==="door"?kt:hn);B&&v(B.roomId,a,B.wall,B.edgeIndex,B.position);return}if(a==="stairs"){const E=Cg(o,s,ut(P),ut(J),G,0);E&&b({floor:l,x:E.x,y:E.y,rotation:0});return}if(a==="column"){L({floor:l,x:ut(P),y:ut(J)});return}const A=kb(K,P,J);if(A){_({roomId:A.roomId,openingId:A.id}),T(null),w(null);return}_(null);const k=Vb(N,t,r,P,J);if(k){T(k.id),w(null),x(null),W.current={kind:"move-stair",stairId:k.id,offsetX:P-k.x,offsetY:J-k.y,rotation:k.rotation,width:k.width};return}T(null);const U=ie(),Q=z.find(E=>Math.hypot(P-E.x,J-E.y)<=U);if(Q){w(Q.id),x(null),W.current={kind:"move-column",columnId:Q.id,offsetX:P-Q.x,offsetY:J-Q.y};return}w(null);const H=he(P,J);if(!H){x(null);return}if(x(H.id),H.points){W.current={kind:"move-polygon",roomId:H.id,startPoints:H.points,offsetX:P,offsetY:J};return}const pe=H.gx+H.gw,ce=H.gy+H.gh,R=Math.abs(P-pe)<.25&&Math.abs(J-ce)<.25;W.current=R?{kind:"resize",roomId:H.id,startGx:H.gx,startGy:H.gy}:{kind:"move",roomId:H.id,offsetX:P-H.gx,offsetY:J-H.gy}}function me(se){if(a==="polygon"&&te){const{x:k,y:U}=Y(se);j({x:ut(k),y:ut(U)});return}const P=W.current;if(!P)return;const{x:J,y:A}=Y(se);if(P.kind==="new-room"){P.curX=J,P.curY=A,ne();return}if(P.kind==="move"){const k=t.find(H=>H.id===P.roomId);if(!k)return;const U=ut(Math.max(0,Math.min(o-k.gw,J-P.offsetX))),Q=ut(Math.max(0,Math.min(s-k.gh,A-P.offsetY)));y(P.roomId,U,Q);return}if(P.kind==="move-polygon"){const k=ut(J-P.offsetX),U=ut(A-P.offsetY);if(k===0&&U===0)return;const Q=P.startPoints.map(H=>({x:H.x+k,y:H.y+U}));f(P.roomId,Q);return}if(P.kind==="resize"){const k=t.find(pe=>pe.id===P.roomId),U=bh(k&&k.room_type),Q=ut(Math.max(U.minW,J-P.startGx)),H=ut(Math.max(U.minH,A-P.startGy));g(P.roomId,Q,H);return}if(P.kind==="move-stair"){const k=Cg(o,s,ut(J-P.offsetX),ut(A-P.offsetY),G,P.rotation,P.width);k&&S(P.stairId,k.x,k.y,P.rotation);return}if(P.kind==="move-column"){const k=ut(Math.max(0,Math.min(o,J-P.offsetX))),U=ut(Math.max(0,Math.min(s,A-P.offsetY)));M(P.columnId,k,U)}}function Te(){const se=W.current;if(se&&se.kind==="new-room"){const P=ut(Math.min(se.startX,se.curX)),J=ut(Math.min(se.startY,se.curY)),A=Math.max(Lg,ut(Math.abs(se.curX-se.startX))),k=Math.max(Lg,ut(Math.abs(se.curY-se.startY)));p({gx:P,gy:J,gw:A,gh:k,floor:l})}W.current=null,ne()}return oe.jsx("canvas",{ref:O,width:o*re,height:s*re,style:{background:"#fff",touchAction:"none",cursor:a==="select"?"default":"crosshair",maxWidth:"100%",height:"auto",display:"block"},onPointerDown:ye,onPointerMove:me,onPointerUp:Te,onPointerLeave:Te})}const $b=[{id:"select",label:"Select"},{id:"room",label:"Add Room"},{id:"polygon",label:"Add Polygon Room"},{id:"door",label:"Add Door"},{id:"window",label:"Add Window"},{id:"stairs",label:"Add Stairs"},{id:"column",label:"Add Column"}],Sr=t=>({padding:"8px 14px",borderRadius:8,border:t?"2px solid #c9a96e":"1px solid #d1d5db",background:t?"#fdf6ea":"#fff",fontWeight:600,fontSize:13,cursor:"pointer"});function Kb({t,mode:e,onModeChange:n,selectedRoom:i,onRenameRoom:r,onChangeRoomType:o,onResizeRoomInputs:s,onDeleteRoom:a,selectedOpening:l,onDeleteOpening:u,floorCount:c=1,activeFloor:h=0,onSetActiveFloor:d,onAddFloor:p,selectedStair:m,onResizeStairWidth:y,onDeleteStair:g,selectedColumn:f,onDeleteColumn:x}){return oe.jsxs("div",{style:{display:"flex",flexDirection:"column",borderBottom:"1px solid #e5e7eb"},children:[oe.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:6,alignItems:"center",padding:"8px 14px",borderBottom:"1px solid #f3f4f6"},children:[Array.from({length:c},(v,_)=>_).map(v=>oe.jsx("button",{type:"button",style:Sr(v===h),onClick:()=>d&&d(v),title:yu(v,t),children:yu(v,t)},v)),c<Nb&&oe.jsxs("button",{type:"button",style:Sr(!1),onClick:()=>p&&p(),children:["+ ",t("Add Floor")]})]}),oe.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:10,alignItems:"center",padding:"10px 14px"},children:[$b.map(v=>oe.jsx("button",{type:"button",style:Sr(e===v.id),onClick:()=>n(v.id),children:t(v.label)},v.id)),i&&(()=>{const v=bh(i.room_type);return oe.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8,alignItems:"center",marginInlineStart:12},children:[oe.jsx("select",{value:v.id,onChange:_=>o(i.id,_.target.value),style:{padding:"6px 8px",borderRadius:6,border:"1px solid #d1d5db",fontSize:13},children:xd.map(_=>oe.jsx("option",{value:_.id,children:t(_.label)},_.id))}),oe.jsx("input",{value:i.name,onChange:_=>r(i.id,_.target.value),style:{padding:"6px 10px",borderRadius:6,border:"1px solid #d1d5db",fontSize:13,width:140}}),!i.points&&oe.jsxs(oe.Fragment,{children:[oe.jsxs("label",{style:{fontSize:12,color:"#6b7280"},children:[t("W"),oe.jsx("input",{type:"number",step:"0.1",min:v.minW,value:i.gw,onChange:_=>{const b=parseFloat(_.target.value),S=Number.isFinite(b)?Math.max(b,v.minW):i.gw;s(i.id,S,i.gh)},style:{width:60,marginInlineStart:4,padding:"4px 6px",borderRadius:6,border:"1px solid #d1d5db"}})]}),oe.jsxs("label",{style:{fontSize:12,color:"#6b7280"},children:[t("H"),oe.jsx("input",{type:"number",step:"0.1",min:v.minH,value:i.gh,onChange:_=>{const b=parseFloat(_.target.value),S=Number.isFinite(b)?Math.max(b,v.minH):i.gh;s(i.id,i.gw,S)},style:{width:60,marginInlineStart:4,padding:"4px 6px",borderRadius:6,border:"1px solid #d1d5db"}})]}),oe.jsxs("span",{style:{fontSize:11,color:"#9ca3af"},children:[t("Min")," ",v.minW,"×",v.minH," m",v.codeBased?" ("+v.codeRef+")":""]})]}),oe.jsx("button",{type:"button",style:Sr(!1),onClick:()=>a(i.id),children:t("Delete Room")})]})})(),l&&oe.jsx("button",{type:"button",style:Sr(!1),onClick:()=>u(l.roomId,l.openingId),children:t("Delete Opening")}),m&&oe.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",marginInlineStart:12},children:[oe.jsxs("label",{style:{fontSize:12,color:"#6b7280"},children:[t("Width"),oe.jsx("input",{type:"number",step:"0.05",min:lf,value:m.width??_u,onChange:v=>{const _=parseFloat(v.target.value),b=Number.isFinite(_)?Math.max(_,lf):m.width??_u;y(m.id,b)},style:{width:60,marginInlineStart:4,padding:"4px 6px",borderRadius:6,border:"1px solid #d1d5db"}})]}),oe.jsxs("span",{style:{fontSize:11,color:"#9ca3af"},children:[t("Min")," ",lf," m (IRC R311.7.1)"]}),oe.jsx("button",{type:"button",style:Sr(!1),onClick:()=>g(m.id),children:t("Delete Stairs")})]}),f&&oe.jsx("button",{type:"button",style:Sr(!1),onClick:()=>x(f.id),children:t("Delete Column")})]})]})}const Zb=3e3,Jb=2*60*1e3,Qb=`Transform this 3D render of an architectural floor plan into a professional, photorealistic architectural visualization of the exact same building.

CRITICAL — do not change anything structural: keep the exact same room layout, wall positions, door and window placement, staircases, columns, number of floors, and camera angle. Do not add, remove, move, or resize any structural element.

Only improve: make every material look real and tactile (genuine paint, wood, stone, brick, metal and glass), add realistic, professional architectural-visualization lighting with soft natural shadows, and photorealistic rendering quality, like a real estate marketing render.`,e2="This photo already shows a photorealistic architectural visualization. Your ONLY task is to further enhance photorealism, material detail, and lighting quality. Do NOT change the building layout, camera angle, or structural elements in any way — this is a quality-enhancement pass only.";function qo(t,e){return fetch(t,e).then(n=>n.json().then(i=>({ok:n.ok,status:n.status,data:i})))}function t2(t){return t?Array.isArray(t.images)&&t.images.length?t.images:t.image&&t.image.url?[t.image]:t.output&&Array.isArray(t.output.images)&&t.output.images.length?t.output.images:t.response&&Array.isArray(t.response.images)&&t.response.images.length?t.response.images:t.data&&Array.isArray(t.data.images)&&t.data.images.length?t.data.images:null:null}function ny(t,e,n){return new Promise((i,r)=>{function o(){if(Date.now()-n>=Jb){r(new Error("timeout"));return}qo("/api/status?request_id="+encodeURIComponent(t)+"&model="+encodeURIComponent(e)).then(s=>{if(!s.ok){r(new Error("status_error"));return}const a=(s.data.status||"").toString().toUpperCase();a==="COMPLETED"?qo("/api/status?request_id="+encodeURIComponent(t)+"&model="+encodeURIComponent(e)+"&mode=result&tool=engineers").then(l=>{if(!l.ok){r(new Error("result_error"));return}const u=t2(l.data);i(u&&u.length?u[0]:null)}).catch(()=>r(new Error("connection_error"))):a==="FAILED"||a==="ERROR"?r(new Error("failed")):setTimeout(o,Zb)}).catch(()=>r(new Error("connection_error")))}o()})}function n2(t,e){return e?qo("/api/generate",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({prompt:e2,image_url:t.url,refine_token:e})}).then(n=>{if(!n.ok||!n.data||!Array.isArray(n.data.requests)||!n.data.requests.length)return t;const i=n.data.requests[0];return ny(i.request_id,i.model,Date.now()).then(r=>r||t).catch(()=>t)}).catch(()=>t):Promise.resolve(t)}const Ml={position:"fixed",inset:0,background:"rgba(0,0,0,0.9)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",padding:20,overflowY:"auto"},El={position:"relative",background:"#fff",borderRadius:20,padding:"28px 22px",maxWidth:420,width:"100%",textAlign:"center",boxShadow:"0 30px 70px -25px rgba(0,0,0,0.5)"};function i2({captureImage:t,onClose:e,t:n}){const[i,r]=be.useState("loading"),[o,s]=be.useState(null),[a,l]=be.useState(""),[u,c]=be.useState(null);be.useEffect(()=>{let p=!1;async function m(){const y=t&&t();if(!y){p||(r("error"),l(n("Something went wrong, please try again")));return}try{const g=await qo("/api/upload",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({image_data:y,mime_type:"image/jpeg"})});if(p)return;if(!g.ok||!g.data||!g.data.url){r("error"),l(n("Image upload failed. Please try again."));return}const f=await qo("/api/generate",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({prompt:Qb,image_url:g.data.url,num_images:1,guidance_scale:6.5,strength:.45})});if(p)return;if(f.status===401){window.location.href="/lamsa-auth.html?return=engineers/index.html";return}if(f.status===402){r("no_credits");return}if(!f.ok||!f.data||!Array.isArray(f.data.requests)||!f.data.requests.length){r("error"),l(n("Error generating image. Please try again."));return}const x=f.data.requests[0],v=f.data.refineToken,_=await ny(x.request_id,x.model,Date.now());if(p)return;if(!_){r("error"),l(n("Error generating image. Please try again."));return}const b=await n2(_,v);if(p)return;s(b.url),r("result")}catch{if(p)return;r("error"),l(n("Connection error. Please try again."))}}return m(),()=>{p=!0}},[]);function h(){o&&fetch("/api/download-image?url="+encodeURIComponent(o)+"&filename="+encodeURIComponent("lamsa-engineers-render.jpg")).then(p=>p.blob()).then(p=>{const m=URL.createObjectURL(p),y=document.createElement("a");y.href=m,y.download="lamsa-engineers-render.jpg",y.click(),setTimeout(()=>URL.revokeObjectURL(m),5e3)}).catch(()=>window.open(o,"_blank"))}function d(p){c(p),qo("/api/create-checkout-session",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({plan:p,return_page:"engineers/index.html"})}).then(m=>{if(m.status===401){window.location.href="/lamsa-auth.html?return=engineers/index.html";return}if(!m.ok||!m.data||!m.data.url){c(null);return}window.location.href=m.data.url}).catch(()=>c(null))}return i==="loading"?oe.jsx("div",{style:Ml,children:oe.jsxs("div",{style:El,children:[oe.jsx("div",{style:{width:48,height:48,margin:"0 auto 18px",border:"4px solid #eef0f2",borderTopColor:"#c9a96e",borderRadius:"50%",animation:"lamsa-pr-spin 0.9s linear infinite"}}),oe.jsx("style",{children:"@keyframes lamsa-pr-spin { to { transform: rotate(360deg); } }"}),oe.jsx("div",{style:{fontSize:16,fontWeight:900,color:"#1b1e22",marginBottom:6},children:n("Turning your design into a photoreal render...")}),oe.jsx("div",{style:{fontSize:12.5,color:"#767d86"},children:n("Takes 20-40 seconds")})]})}):i==="error"?oe.jsx("div",{style:Ml,children:oe.jsxs("div",{style:El,children:[oe.jsx("div",{style:{color:"#e05555",fontSize:14,fontWeight:700,marginBottom:18},children:a}),oe.jsx("button",{type:"button",onClick:e,style:{width:"100%",background:"transparent",border:"1px solid #dfe2e6",color:"#767d86",padding:10,borderRadius:10,fontSize:13,cursor:"pointer"},children:n("Close")})]})}):i==="no_credits"?oe.jsx("div",{style:Ml,children:oe.jsxs("div",{style:{...El,maxWidth:440},children:[oe.jsx("div",{style:{fontSize:17,fontWeight:900,color:"#1b1e22",marginBottom:8},children:n("You're out of credits")}),oe.jsx("div",{style:{fontSize:13,color:"#6b7280",marginBottom:20},children:n("Subscribe to generate photoreal renders of your floor plans.")}),oe.jsxs("div",{style:{display:"flex",gap:10,marginBottom:14},children:[oe.jsxs("button",{type:"button",disabled:!!u,onClick:()=>d("weekly"),style:{flex:1,border:"1px solid #dfe2e6",borderRadius:14,padding:"14px 8px",background:"#fff",cursor:"pointer",opacity:u?.6:1},children:[oe.jsx("div",{style:{fontSize:13,fontWeight:900,color:"#1b1e22"},children:n("Weekly")}),oe.jsxs("div",{style:{fontSize:11,color:"#767d86",marginBottom:6},children:["10 ",n("credits")]}),oe.jsx("div",{style:{fontSize:15,fontWeight:900,color:"#1b1e22"},children:"€5.99"})]}),oe.jsxs("button",{type:"button",disabled:!!u,onClick:()=>d("monthly"),style:{flex:1,border:"2px solid #c9a96e",borderRadius:14,padding:"14px 8px",background:"#fdf6ea",cursor:"pointer",opacity:u?.6:1},children:[oe.jsx("div",{style:{fontSize:13,fontWeight:900,color:"#1b1e22"},children:n("Monthly")}),oe.jsxs("div",{style:{fontSize:11,color:"#767d86",marginBottom:6},children:["40 ",n("credits")]}),oe.jsx("div",{style:{fontSize:15,fontWeight:900,color:"#1b1e22"},children:"€14.99"})]})]}),oe.jsx("button",{type:"button",onClick:e,style:{width:"100%",background:"transparent",border:"none",color:"#767d86",padding:8,fontSize:13,cursor:"pointer"},children:n("Close")})]})}):oe.jsx("div",{style:Ml,children:oe.jsxs("div",{style:{...El,maxWidth:460,textAlign:"start"},children:[oe.jsx("img",{src:o,alt:"",style:{width:"100%",borderRadius:12,display:"block",marginBottom:14}}),oe.jsxs("div",{style:{display:"flex",gap:10},children:[oe.jsx("button",{type:"button",onClick:h,style:{flex:1,background:"#c9a96e",color:"#1b1e22",border:"none",padding:14,borderRadius:10,fontWeight:900,fontSize:14,cursor:"pointer"},children:n("Download")}),oe.jsx("button",{type:"button",onClick:e,style:{flex:1,background:"transparent",border:"1px solid #dfe2e6",color:"#767d86",padding:14,borderRadius:10,fontSize:14,cursor:"pointer"},children:n("Close")})]})]})})}let Ig=0;function ms(t){return Ig+=1,t+"_"+Date.now().toString(36)+"_"+Ig}const r2=2.7,o2="#e8e2d8",s2="plaster";function iy(t){return{project:{id:null,name:t||"Untitled Project",wall_height:r2,wall_color:o2,wall_material:s2},rooms:[],stairs:[],columns:[]}}function a2({name:t,gx:e,gy:n,gw:i,gh:r,color:o,floor:s=0,room_type:a="other"}){return{id:ms("room"),name:t||"Room",room_type:a,gx:e,gy:n,gw:i,gh:r,color:o||"#cfd6cf",floor:s,has_roof:!0,roof_type:"flat",openings:[],furniture:[]}}function l2({name:t,points:e,color:n,floor:i=0,room_type:r="other"}){const o=e.map(h=>h.x),s=e.map(h=>h.y),a=Math.min(...o),l=Math.min(...s),u=Math.max(...o)-a,c=Math.max(...s)-l;return{id:ms("room"),name:t||"Room",room_type:r,points:e,gx:a,gy:l,gw:u,gh:c,color:n||"#cfd6cf",floor:i,has_roof:!0,roof_type:"flat",openings:[],furniture:[]}}function u2({floor:t=0,x:e,y:n,rotation:i=0}){return{id:ms("stair"),floor:t,x:e,y:n,rotation:i}}function c2({floor:t=0,x:e,y:n}){return{id:ms("column"),floor:t,x:e,y:n}}function f2(t,e,n,i){const r={id:ms(t),kind:t,position:i};return n!=null?r.edge_index=n:r.wall=e,r}function d2(t,e){switch(e.type){case"SET_PROJECT":return e.project;case"SET_META":return{...t,project:{...t.project,...e.patch}};case"ADD_ROOM":return{...t,rooms:[...t.rooms,e.room]};case"UPDATE_ROOM":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,...e.patch}:n)};case"REMOVE_ROOM":return{...t,rooms:t.rooms.filter(n=>n.id!==e.roomId)};case"ADD_OPENING":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,openings:[...n.openings,f2(e.kind,e.wall,e.edgeIndex,e.position)]}:n)};case"MOVE_OPENING":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,openings:n.openings.map(i=>i.id===e.openingId?{...i,wall:e.wall,position:e.position}:i)}:n)};case"REMOVE_OPENING":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,openings:n.openings.filter(i=>i.id!==e.openingId)}:n)};case"ADD_FURNITURE":{const n={id:ms("furn"),kind:e.kind,x:e.x,y:e.y,rotation:0};return{...t,rooms:t.rooms.map(i=>i.id===e.roomId?{...i,furniture:[...i.furniture,n]}:i)}}case"MOVE_FURNITURE":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,furniture:n.furniture.map(i=>i.id===e.furnitureId?{...i,x:e.x,y:e.y,rotation:e.rotation??i.rotation}:i)}:n)};case"REMOVE_FURNITURE":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,furniture:n.furniture.filter(i=>i.id!==e.furnitureId)}:n)};case"ADD_STAIR":return{...t,stairs:[...t.stairs,e.stair]};case"MOVE_STAIR":return{...t,stairs:t.stairs.map(n=>n.id===e.stairId?{...n,x:e.x,y:e.y,rotation:e.rotation??n.rotation}:n)};case"UPDATE_STAIR":return{...t,stairs:t.stairs.map(n=>n.id===e.stairId?{...n,...e.patch}:n)};case"REMOVE_STAIR":return{...t,stairs:t.stairs.filter(n=>n.id!==e.stairId)};case"ADD_COLUMN":return{...t,columns:[...t.columns||[],e.column]};case"MOVE_COLUMN":return{...t,columns:(t.columns||[]).map(n=>n.id===e.columnId?{...n,x:e.x,y:e.y}:n)};case"REMOVE_COLUMN":return{...t,columns:(t.columns||[]).filter(n=>n.id!==e.columnId)};default:return t}}function h2(t){const[e,n]=be.useReducer(d2,t||iy()),i=be.useMemo(()=>({setProject:s=>n({type:"SET_PROJECT",project:s}),setMeta:s=>n({type:"SET_META",patch:s}),addRoom:s=>n({type:"ADD_ROOM",room:s}),updateRoom:(s,a)=>n({type:"UPDATE_ROOM",roomId:s,patch:a}),removeRoom:s=>n({type:"REMOVE_ROOM",roomId:s}),addOpening:(s,a,l,u,c)=>n({type:"ADD_OPENING",roomId:s,kind:a,wall:l,edgeIndex:u,position:c}),moveOpening:(s,a,l,u)=>n({type:"MOVE_OPENING",roomId:s,openingId:a,wall:l,position:u}),removeOpening:(s,a)=>n({type:"REMOVE_OPENING",roomId:s,openingId:a}),addFurniture:(s,a,l,u)=>n({type:"ADD_FURNITURE",roomId:s,kind:a,x:l,y:u}),moveFurniture:(s,a,l,u,c)=>n({type:"MOVE_FURNITURE",roomId:s,furnitureId:a,x:l,y:u,rotation:c}),removeFurniture:(s,a)=>n({type:"REMOVE_FURNITURE",roomId:s,furnitureId:a}),addStair:s=>n({type:"ADD_STAIR",stair:s}),moveStair:(s,a,l,u)=>n({type:"MOVE_STAIR",stairId:s,x:a,y:l,rotation:u}),updateStair:(s,a)=>n({type:"UPDATE_STAIR",stairId:s,patch:a}),removeStair:s=>n({type:"REMOVE_STAIR",stairId:s}),addColumn:s=>n({type:"ADD_COLUMN",column:s}),moveColumn:(s,a,l)=>n({type:"MOVE_COLUMN",columnId:s,x:a,y:l}),removeColumn:s=>n({type:"REMOVE_COLUMN",columnId:s})}),[]),r=be.useCallback(s=>{const a=a2(s);return i.addRoom(a),a},[i]),o=be.useCallback(s=>{const a=l2(s);return i.addRoom(a),a},[i]);return{project:e.project,rooms:e.rooms,stairs:e.stairs,columns:e.columns||[],actions:{...i,addRectRoom:r,addPolygonRoom:o}}}function p2(t,e,n){return Wb(t,e,n)}const Ng={WALLS:7,DOORS:1,WINDOWS:5,DIMENSIONS:3,TEXT:7,STAIRS:8,COLUMNS:2,FOUNDATION:4};function Ug(t){let e=t*180/Math.PI;return e=e%360,e<0&&(e+=360),e}function St(t,e){return{x:t.x+e,y:-t.y}}function qr(t,e,n,i){t.push(`0
LINE
8
${e}
10
${n.x}
20
${n.y}
30
0.0
11
${i.x}
21
${i.y}
31
0.0`)}function ya(t,e,n,i){const r=["0","LWPOLYLINE","8",e,"90",String(n.length),"70","1"];n.forEach(o=>{r.push("10",String(o.x),"20",String(o.y))}),t.push(r.join(`
`))}function m2(t,e,n,i,r,o,s){t.push(`0
ARC
8
${e}
10
${n}
20
${i}
30
0.0
40
${r}
50
${o}
51
${s}`)}function Ir(t,e,n,i,r,o=0){const s=String(r).replace(/[\r\n]+/g," ");t.push(`0
TEXT
8
${e}
10
${n.x}
20
${n.y}
30
0.0
40
${i}
1
${s}
50
${o}`)}function g2(t,e){const n=t.slice().sort((o,s)=>o.position-s.position);let i=0;const r=[];return n.forEach(o=>{const s=o.position-o.width/2,a=o.position+o.width/2;s>i+.02&&r.push([i,s]),i=Math.max(i,a)}),i<e-.02&&r.push([i,e]),r}function Og(t,e,n,i,r){const o=n.x-e.x,s=n.y-e.y,a=Math.hypot(o,s);if(a<.02)return;const l=o/a,u=s/a,c=-u,h=l,d=ht/2;g2(i,a).forEach(([p,m])=>{const y=[{x:e.x+l*p-c*d,y:e.y+u*p-h*d},{x:e.x+l*m-c*d,y:e.y+u*m-h*d},{x:e.x+l*m+c*d,y:e.y+u*m+h*d},{x:e.x+l*p+c*d,y:e.y+u*p+h*d}].map(g=>St(g,r));ya(t,"WALLS",y)})}function v2(t){const{gx:e,gy:n,gw:i,gh:r}=t;return[{wall:"top",p1:{x:e,y:n},p2:{x:e+i,y:n}},{wall:"bottom",p1:{x:e,y:n+r},p2:{x:e+i,y:n+r}},{wall:"left",p1:{x:e,y:n},p2:{x:e,y:n+r}},{wall:"right",p1:{x:e+i,y:n},p2:{x:e+i,y:n+r}}]}function _2(t,e,n,i){const r=ps(e,n,kt),o=ey(e),s=St({x:r.x1,y:r.y1},i),a=St({x:r.x2,y:r.y2},i),l=St(o,i),u=a.x-s.x,c=a.y-s.y,h=Math.hypot(u,c);if(h<.01)return;const d={x:-c/h,y:u/h},p={x:c/h,y:-u/h},m=(s.x+a.x)/2,y=(s.y+a.y)/2,g={x:l.x-m,y:l.y-y},f=d.x*g.x+d.y*g.y>=0?d:p,x=Math.atan2(c,u),v=Math.atan2(f.y,f.x);let _=v-x;for(;_>Math.PI;)_-=Math.PI*2;for(;_<=-Math.PI;)_+=Math.PI*2;const b=_<0,S=b?v:x,T=b?x:v;m2(t,"DOORS",s.x,s.y,h,Ug(S),Ug(T));const L={x:s.x+h*Math.cos(v),y:s.y+h*Math.sin(v)};qr(t,"DOORS",s,L)}function y2(t,e,n,i){const r=ps(e,n,hn);qr(t,"WINDOWS",St({x:r.x1,y:r.y1},i),St({x:r.x2,y:r.y2},i))}function x2(t,e,n){const{gx:i,gy:r,gw:o,gh:s}=e,a=(p,m)=>St({x:p,y:m},n),l=(p,m,y,g)=>qr(t,"DIMENSIONS",a(p,m),a(y,g)),u=r-Ki;l(i,r,i,u-Zt),l(i+o,r,i+o,u-Zt),l(i,u,i+o,u),Ir(t,"DIMENSIONS",a(i+o/2,u-.1),.14,o.toFixed(2));const c=r+s+Ki;l(i,r+s,i,c+Zt),l(i+o,r+s,i+o,c+Zt),l(i,c,i+o,c),Ir(t,"DIMENSIONS",a(i+o/2,c+.15),.14,o.toFixed(2));const h=i-Ki;l(i,r,h-Zt,r),l(i,r+s,h-Zt,r+s),l(h,r,h,r+s),Ir(t,"DIMENSIONS",a(h-.1,r+s/2),.14,s.toFixed(2),90);const d=i+o+Ki;l(i+o,r,d+Zt,r),l(i+o,r+s,d+Zt,r+s),l(d,r,d,r+s),Ir(t,"DIMENSIONS",a(d+.15,r+s/2),.14,s.toFixed(2),90)}function S2(t,e,n){const i=e.points?{x:Math.min(...e.points.map(r=>r.x)),y:Math.min(...e.points.map(r=>r.y))}:{x:e.gx,y:e.gy};Ir(t,"TEXT",St({x:i.x+.25,y:i.y+.5},n),.22,e.name),Ir(t,"TEXT",St({x:i.x+.25,y:i.y+.85},n),.14,`${X_(e).toFixed(1)} m2`)}function M2(t,e,n,i,r){n.forEach(o=>{const s=Rh(e,o.floor??0,i),a=o.rotation||0,{w:l,d:u}=Xu(s,a,o.width),c=o.x-l/2,h=o.x+l/2,d=o.y-u/2,p=o.y+u/2,m=[{x:c,y:d},{x:h,y:d},{x:h,y:p},{x:c,y:p}].map(f=>St(f,r));ya(t,"STAIRS",m);const y=a===90||a===270,g=10;for(let f=1;f<g;f++)if(y){const x=c+l*f/g;qr(t,"STAIRS",St({x,y:d},r),St({x,y:p},r))}else{const x=d+u*f/g;qr(t,"STAIRS",St({x:c,y:x},r),St({x:h,y:x},r))}})}function E2(t,e,n){e.forEach(i=>{const o=(i.size??Mi)/2,s=i.x-o,a=i.x+o,l=i.y-o,u=i.y+o,c=[{x:s,y:l},{x:a,y:l},{x:a,y:u},{x:s,y:u}].map(h=>St(h,n));ya(t,"COLUMNS",c),qr(t,"COLUMNS",St({x:s,y:l},n),St({x:a,y:u},n)),qr(t,"COLUMNS",St({x:s,y:u},n),St({x:a,y:l},n))})}function w2(t,e,n,i){const r=Th(e,0);if(r){const o=[{x:r.minX-Gt,y:r.minY-Gt},{x:r.maxX+Gt,y:r.minY-Gt},{x:r.maxX+Gt,y:r.maxY+Gt},{x:r.minX-Gt,y:r.maxY+Gt}].map(s=>St(s,i));ya(t,"FOUNDATION",o)}(n||[]).forEach(o=>{const a=(o.size??Mi)/2+Gt,l=[{x:o.x-a,y:o.y-a},{x:o.x+a,y:o.y-a},{x:o.x+a,y:o.y+a},{x:o.x-a,y:o.y+a}].map(u=>St(u,i));ya(t,"FOUNDATION",l)})}function T2(t,e,n,i,r,o,s,a,l){const u=[];return Ir(u,"TEXT",St({x:0,y:-.7},o),.35,s),e.forEach(c=>{if(c.points&&c.points.length>=3){const h=c.points.length;for(let d=0;d<h;d++){const p=c.points[d],m=c.points[(d+1)%h],y=(c.openings||[]).filter(g=>g.edge_index===d).map(g=>({position:g.position,width:g.kind==="door"?kt:hn}));Og(u,p,m,y,o)}}else v2(c).forEach(({wall:h,p1:d,p2:p})=>{const m=(c.openings||[]).filter(y=>y.wall===h).map(y=>({position:y.position,width:y.kind==="door"?kt:hn}));Og(u,d,p,m,o)}),a&&x2(u,c,o);(c.openings||[]).forEach(h=>{h.kind==="door"?_2(u,c,h,o):y2(u,c,h,o)}),S2(u,c,o)}),M2(u,t,n,r,o),E2(u,i,o),l&&w2(u,t,i,o),u}function A2(t,e,n,i,r,o=!0){const s=Object.entries(Ng).map(([p,m])=>`0
LAYER
2
${p}
70
0
62
${m}
6
CONTINUOUS`).join(`
`),a=[];let l=0;const u=3;e.forEach(p=>{const m=n.filter(f=>(f.floor??0)===p.floorNum),y=(i||[]).filter(f=>(f.floor??0)===p.floorNum);a.push(...T2(t,p.rooms,m,y,r,l,p.label,o,p.floorNum===0));const g=p.rooms.length?Math.max(...p.rooms.map(f=>f.points?Math.max(...f.points.map(x=>x.x)):f.gx+f.gw)):10;l+=g+u});const c=["0","SECTION","2","HEADER","9","$ACADVER","1","AC1021","9","$INSUNITS","70","6","0","ENDSEC"].join(`
`),h=["0","SECTION","2","TABLES","0","TABLE","2","LAYER","70",String(Object.keys(Ng).length),s,"0","ENDTAB","0","ENDSEC"].join(`
`),d=["0","SECTION","2","ENTITIES",...a,"0","ENDSEC"].join(`
`);return[c,h,d,"0","EOF"].join(`
`)+`
`}function R2({initialProject:t,projectId:e,onBack:n,onSave:i,t:r}){const{project:o,rooms:s,stairs:a,columns:l,actions:u}=h2(t),[c,h]=be.useState("select"),[d,p]=be.useState(0),[m,y]=be.useState(null),[g,f]=be.useState(null),[x,v]=be.useState(null),[_,b]=be.useState(null),[S,T]=be.useState(!1),[L,M]=be.useState(""),[w,O]=be.useState(!1),[W,te]=be.useState(!1),[D,V]=be.useState(!0),[j,K]=be.useState(!1),N=be.useRef(null),[z,G]=be.useState(()=>typeof window<"u"?window.innerWidth<900:!1);be.useEffect(()=>{function P(){G(window.innerWidth<900)}return window.addEventListener("resize",P),()=>window.removeEventListener("resize",P)},[]);const ee=s.find(P=>P.id===m)||null,ne=a.find(P=>P.id===x)||null,Y=l.find(P=>P.id===_)||null,ie=Math.max(0,...s.map(P=>P.floor??0),...a.map(P=>(P.floor??0)+1),...l.map(P=>P.floor??0)),he=Math.max(o.floor_count||1,ie+1);function ye(){const P=he+1;u.setMeta({floor_count:P}),p(he)}async function me(){T(!0),M("");const P=await i(e,{project:o,rooms:s,stairs:a,columns:l});return T(!1),M(P.ok?r("Saved"):P.error||r("Save failed")),setTimeout(()=>M(""),2500),P}function Te(){const P=s.filter(ce=>(ce.floor??0)===d),J=p2(P,20,16),[,A]=J.split(","),k=atob(A),U=new Uint8Array(k.length);for(let ce=0;ce<k.length;ce++)U[ce]=k.charCodeAt(ce);const Q=new Blob([U],{type:"image/png"}),H=URL.createObjectURL(Q),pe=document.createElement("a");pe.href=H,pe.download=(o.name||"floor-plan")+"-"+yu(d,r)+".png",pe.click(),URL.revokeObjectURL(H)}function se(){const P=Array.from({length:he},(Q,H)=>({floorNum:H,label:yu(H,r),rooms:s.filter(pe=>(pe.floor??0)===H)})).filter(Q=>Q.rooms.length>0);if(!P.length)return;const J=A2(s,P,a,l,o.wall_height),A=new Blob([J],{type:"application/dxf"}),k=URL.createObjectURL(A),U=document.createElement("a");U.href=k,U.download=(o.name||"floor-plan")+".dxf",U.click(),URL.revokeObjectURL(k)}return oe.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh",fontFamily:"sans-serif",overflowX:"hidden"},children:[oe.jsxs("div",{style:{display:"flex",flexWrap:"wrap",rowGap:8,alignItems:"center",justifyContent:"space-between",padding:"10px 14px",borderBottom:"1px solid #e5e7eb"},children:[oe.jsxs("button",{type:"button",onClick:n,style:{background:"none",border:"none",cursor:"pointer",fontSize:13,color:"#374151"},children:["← ",r("Projects")]}),oe.jsx("input",{value:o.name,onChange:P=>u.setMeta({name:P.target.value}),style:{fontWeight:800,fontSize:15,border:"none",textAlign:"center",flex:"1 1 140px",minWidth:0}}),oe.jsxs("div",{style:{display:"flex",flexWrap:"wrap",rowGap:8,gap:8,alignItems:"center",justifyContent:"flex-end"},children:[oe.jsx("span",{style:{fontSize:12,color:"#6b7280"},children:L}),oe.jsxs("label",{style:{fontSize:12,color:"#6b7280",display:"flex",alignItems:"center",gap:4},children:[oe.jsx("input",{type:"checkbox",checked:w,onChange:P=>O(P.target.checked)}),r("Dollhouse view")]}),oe.jsxs("label",{style:{fontSize:12,color:"#6b7280",display:"flex",alignItems:"center",gap:4},children:[oe.jsx("input",{type:"checkbox",checked:W,onChange:P=>te(P.target.checked)}),r("Render view")]}),oe.jsxs("label",{style:{fontSize:12,color:"#6b7280",display:"flex",alignItems:"center",gap:4},children:[oe.jsx("input",{type:"checkbox",checked:D,onChange:P=>V(P.target.checked)}),r("Show Foundation")]}),oe.jsx("button",{type:"button",onClick:Te,style:{padding:"8px 14px",borderRadius:8,border:"1px solid #d1d5db",background:"#fff",fontWeight:700,fontSize:13,cursor:"pointer"},children:r("Export plan")}),oe.jsx("button",{type:"button",onClick:se,style:{padding:"8px 14px",borderRadius:8,border:"1px solid #d1d5db",background:"#fff",fontWeight:700,fontSize:13,cursor:"pointer"},children:r("Export DXF")}),oe.jsx("button",{type:"button",onClick:()=>K(!0),title:r("Optional — uses 1 credit from your weekly/monthly plan"),style:{padding:"8px 14px",borderRadius:8,border:"1px solid #d1d5db",background:"#fff",fontWeight:700,fontSize:13,cursor:"pointer"},children:r("Generate realistic image")}),oe.jsx("button",{type:"button",onClick:me,disabled:S,style:{padding:"8px 16px",borderRadius:8,border:"none",background:"#c9a96e",color:"#1b1e22",fontWeight:800,fontSize:13,cursor:"pointer",opacity:S?.6:1},children:r(S?"Saving…":"Save")})]})]}),oe.jsx(Kb,{t:r,mode:c,onModeChange:h,selectedRoom:ee,onRenameRoom:(P,J)=>u.updateRoom(P,{name:J}),onChangeRoomType:(P,J)=>{const A=s.find(Q=>Q.id===P);if(!A)return;const k=bh(J),U={room_type:J,name:r(k.label)};A.points||(U.gw=Math.max(A.gw,k.minW),U.gh=Math.max(A.gh,k.minH)),u.updateRoom(P,U)},onResizeRoomInputs:(P,J,A)=>u.updateRoom(P,{gw:J,gh:A}),onDeleteRoom:P=>{u.removeRoom(P),y(null)},selectedOpening:g,onDeleteOpening:(P,J)=>{u.removeOpening(P,J),f(null)},floorCount:he,activeFloor:d,onSetActiveFloor:p,onAddFloor:ye,selectedStair:ne,onResizeStairWidth:(P,J)=>u.updateStair(P,{width:J}),onDeleteStair:P=>{u.removeStair(P),v(null)},selectedColumn:Y,onDeleteColumn:P=>{u.removeColumn(P),b(null)}}),oe.jsxs("div",{style:{display:"flex",flexDirection:z?"column":"row",flex:1,minHeight:0},children:[oe.jsx("div",{style:z?{flex:"0 0 auto",maxHeight:"50%",overflow:"auto"}:{flex:1,overflow:"auto"},children:oe.jsx(qb,{rooms:s,stairs:a,columns:l,showFoundation:D,wallHeight:o.wall_height,mode:c,activeFloor:d,selectedRoomId:m,selectedOpening:g,selectedStairId:x,selectedColumnId:_,onAddRoom:P=>{const J=u.addRectRoom(P);y(J.id),h("select")},onAddPolygonRoom:P=>{const J=u.addPolygonRoom({points:P,floor:d});y(J.id),h("select")},onMoveRoom:(P,J,A)=>u.updateRoom(P,{gx:J,gy:A}),onResizeRoom:(P,J,A)=>u.updateRoom(P,{gw:J,gh:A}),onMovePolygonRoom:(P,J)=>{const A=J.map(ce=>ce.x),k=J.map(ce=>ce.y),U=Math.min(...A),Q=Math.min(...k),H=Math.max(...A)-U,pe=Math.max(...k)-Q;u.updateRoom(P,{points:J,gx:U,gy:Q,gw:H,gh:pe})},onSelectRoom:y,onAddOpening:u.addOpening,onSelectOpening:f,onAddStair:P=>u.addStair(u2(P)),onMoveStair:(P,J,A,k)=>u.moveStair(P,J,A,k),onSelectStair:v,onAddColumn:P=>u.addColumn(c2(P)),onMoveColumn:(P,J,A)=>u.moveColumn(P,J,A),onSelectColumn:b})}),oe.jsx("div",{style:{flex:1,minHeight:0},children:oe.jsx(jb,{ref:N,rooms:s,stairs:a,columns:l,wallHeight:o.wall_height,wallColor:o.wall_color,wallMaterial:o.wall_material,t:r,dollhouse:w,floorGap:w?1.2:0,renderView:W,showFoundation:D})})]}),j&&oe.jsx(i2,{captureImage:()=>N.current&&N.current.captureImage(),onClose:()=>K(!1),t:r})]})}const b2={"Lamsa Engineers":"لمسة للمهندسين","Please sign in to continue.":"الرجاء تسجيل الدخول للمتابعة.","Sign in":"تسجيل الدخول","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"صمّم مخططات أرضية كاملة، عاينها ثلاثي الأبعاد، وصدّر مستندات هندسية حقيقية.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"انتهى اشتراكك بقسم المهندسين. جدّد الاشتراك لمتابعة تصميم المخططات الكاملة.","Rectangular rooms, doors & windows, single-floor plans":"غرف مستطيلة، أبواب ونوافذ، مخططات بطابق واحد","Live 3D preview of your design":"معاينة ثلاثية الأبعاد حية لتصميمك","Printable floor plan export":"تصدير مخطط قابل للطباعة","Use Lamsa's existing furniture-styling tools per room":"استخدم أدوات تنسيق الأثاث الموجودة بلمسة لكل غرفة","/ year":"/ سنوياً","14-day free trial, cancel anytime":"تجربة مجانية لمدة 14 يوم، إلغاء بأي وقت","Starting…":"جارٍ البدء…","Start free trial":"ابدأ التجربة المجانية","Something went wrong, please try again":"حدث خطأ ما، حاول مرة أخرى","Your Projects":"مشاريعك","New Project":"مشروع جديد","No projects yet — create your first one.":"لا يوجد مشاريع بعد — أنشئ أول مشروع.",Delete:"حذف",Projects:"المشاريع",Saved:"تم الحفظ","Save failed":"فشل الحفظ","Export plan":"تصدير المخطط","Saving…":"جارٍ الحفظ…",Save:"حفظ",Select:"تحديد","Add Room":"إضافة غرفة","Add Door":"إضافة باب","Add Window":"إضافة نافذة","Delete Room":"حذف الغرفة","Delete Opening":"حذف الفتحة",W:"عرض",H:"ارتفاع","Reset camera":"إعادة ضبط الكاميرا","Untitled Project":"مشروع بدون اسم","Add Polygon Room":"إضافة غرفة بشكل حر","Add Stairs":"إضافة سلالم","Delete Stairs":"حذف السلالم","Add Column":"إضافة عمود","Delete Column":"حذف العمود","Ground Floor":"الطابق الأرضي",Floor:"الطابق","Add Floor":"إضافة طابق","Dollhouse view":"عرض مقطعي","Render view":"عرض فني","Show Foundation":"إظهار القواعد","Export DXF":"تصدير DXF","Back to Home":"الرئيسية","Generate realistic image":"توليد صورة واقعية","Optional — uses 1 credit from your weekly/monthly plan":"اختياري — يستهلك كريدت واحد من رصيدك الأسبوعي أو الشهري","Turning your design into a photoreal render...":"عم نحوّل تصميمك لصورة واقعية...","Takes 20-40 seconds":"بياخد 20-40 ثانية",Close:"إغلاق","Image upload failed. Please try again.":"تعذّر رفع الصورة، حاول مرة أخرى","Error generating image. Please try again.":"حدث خطأ أثناء توليد الصورة، حاول مرة أخرى","Connection error. Please try again.":"خطأ بالاتصال، حاول مرة أخرى","You're out of credits":"نفد رصيدك من الكريدت","Subscribe to generate photoreal renders of your floor plans.":"اشترك لتوليد صور واقعية لمخططاتك",Weekly:"أسبوعي",Monthly:"شهري",credits:"كريدت",Download:"تحميل",Bedroom:"غرفة نوم","Living Room":"صالة","Dining Room":"غرفة سفرة",Office:"مكتب",Kitchen:"مطبخ",Bathroom:"حمام",Hallway:"ممر",Closet:"خزانة",Garage:"كراج",Other:"أخرى",Min:"الحد الأدنى",Width:"العرض"},Fg={de:{"Lamsa Engineers":"Lamsa Ingenieure","Please sign in to continue.":"Bitte melde dich an, um fortzufahren.","Sign in":"Anmelden","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Entwirf komplette Grundrisse, sieh sie in 3D in der Vorschau und exportiere echte Architekturunterlagen.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Dein Zugang zu Engineers ist abgelaufen. Abonniere erneut, um weiter vollständige Grundrisse zu gestalten.","Rectangular rooms, doors & windows, single-floor plans":"Rechteckige Räume, Türen & Fenster, einstöckige Grundrisse","Live 3D preview of your design":"Live-3D-Vorschau deines Entwurfs","Printable floor plan export":"Druckbarer Grundriss-Export","Use Lamsa's existing furniture-styling tools per room":"Nutze Lamsas vorhandene Möbel-Styling-Tools für jeden Raum","/ year":"/ Jahr","14-day free trial, cancel anytime":"14 Tage kostenlos testen, jederzeit kündbar","Starting…":"Wird gestartet…","Start free trial":"Kostenlose Testphase starten","Something went wrong, please try again":"Etwas ist schiefgelaufen, bitte versuche es erneut","Your Projects":"Deine Projekte","New Project":"Neues Projekt","No projects yet — create your first one.":"Noch keine Projekte — erstelle dein erstes.",Delete:"Löschen",Projects:"Projekte",Saved:"Gespeichert","Save failed":"Speichern fehlgeschlagen","Export plan":"Plan exportieren","Saving…":"Wird gespeichert…",Save:"Speichern",Select:"Auswählen","Add Room":"Raum hinzufügen","Add Door":"Tür hinzufügen","Add Window":"Fenster hinzufügen","Delete Room":"Raum löschen","Delete Opening":"Öffnung löschen",W:"B",H:"H","Reset camera":"Kamera zurücksetzen","Untitled Project":"Unbenanntes Projekt","Add Polygon Room":"Freiform-Raum hinzufügen","Add Stairs":"Treppe hinzufügen","Delete Stairs":"Treppe löschen","Add Column":"Säule hinzufügen","Delete Column":"Säule löschen","Ground Floor":"Erdgeschoss",Floor:"Stockwerk","Add Floor":"Stockwerk hinzufügen","Dollhouse view":"Schnittansicht","Render view":"Render-Ansicht","Show Foundation":"Fundament anzeigen","Export DXF":"DXF exportieren","Back to Home":"Zurück zur Startseite","Generate realistic image":"Realistisches Bild erzeugen","Optional — uses 1 credit from your weekly/monthly plan":"Optional — verbraucht 1 Guthaben aus deinem Wochen-/Monatsabo","Turning your design into a photoreal render...":"Dein Entwurf wird in ein fotorealistisches Bild verwandelt...","Takes 20-40 seconds":"Dauert 20-40 Sekunden",Close:"Schließen","Image upload failed. Please try again.":"Bild-Upload fehlgeschlagen, bitte erneut versuchen","Error generating image. Please try again.":"Fehler bei der Bilderzeugung, bitte erneut versuchen","Connection error. Please try again.":"Verbindungsfehler, bitte erneut versuchen","You're out of credits":"Dein Guthaben ist aufgebraucht","Subscribe to generate photoreal renders of your floor plans.":"Abonniere, um fotorealistische Bilder deiner Grundrisse zu erzeugen.",Weekly:"Wöchentlich",Monthly:"Monatlich",credits:"Guthaben",Download:"Herunterladen",Bedroom:"Schlafzimmer","Living Room":"Wohnzimmer","Dining Room":"Esszimmer",Office:"Büro",Kitchen:"Küche",Bathroom:"Badezimmer",Hallway:"Flur",Closet:"Abstellraum",Garage:"Garage",Other:"Sonstiges",Min:"Min.",Width:"Breite"},es:{"Lamsa Engineers":"Lamsa Ingenieros","Please sign in to continue.":"Inicia sesión para continuar.","Sign in":"Iniciar sesión","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Diseña planos completos, previsualízalos en 3D y exporta documentos arquitectónicos reales.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Tu acceso a Engineers ha terminado. Suscríbete de nuevo para seguir diseñando planos completos.","Rectangular rooms, doors & windows, single-floor plans":"Habitaciones rectangulares, puertas y ventanas, planos de una sola planta","Live 3D preview of your design":"Vista previa 3D en vivo de tu diseño","Printable floor plan export":"Exportación de plano imprimible","Use Lamsa's existing furniture-styling tools per room":"Usa las herramientas de estilismo de muebles de Lamsa en cada habitación","/ year":"/ año","14-day free trial, cancel anytime":"14 días de prueba gratis, cancela cuando quieras","Starting…":"Iniciando…","Start free trial":"Iniciar prueba gratuita","Something went wrong, please try again":"Algo salió mal, inténtalo de nuevo","Your Projects":"Tus Proyectos","New Project":"Nuevo Proyecto","No projects yet — create your first one.":"Aún no hay proyectos — crea el primero.",Delete:"Eliminar",Projects:"Proyectos",Saved:"Guardado","Save failed":"Error al guardar","Export plan":"Exportar plano","Saving…":"Guardando…",Save:"Guardar",Select:"Seleccionar","Add Room":"Añadir Habitación","Add Door":"Añadir Puerta","Add Window":"Añadir Ventana","Delete Room":"Eliminar Habitación","Delete Opening":"Eliminar Apertura",W:"An",H:"Al","Reset camera":"Restablecer cámara","Untitled Project":"Proyecto sin título","Add Polygon Room":"Añadir Habitación de Forma Libre","Add Stairs":"Añadir Escaleras","Delete Stairs":"Eliminar Escaleras","Add Column":"Añadir Columna","Delete Column":"Eliminar Columna","Ground Floor":"Planta Baja",Floor:"Planta","Add Floor":"Añadir Planta","Dollhouse view":"Vista seccionada","Render view":"Vista renderizada","Show Foundation":"Mostrar cimentación","Export DXF":"Exportar DXF","Back to Home":"Volver al Inicio","Generate realistic image":"Generar imagen realista","Optional — uses 1 credit from your weekly/monthly plan":"Opcional — usa 1 crédito de tu plan semanal/mensual","Turning your design into a photoreal render...":"Convirtiendo tu diseño en una imagen fotorrealista...","Takes 20-40 seconds":"Tarda 20-40 segundos",Close:"Cerrar","Image upload failed. Please try again.":"Error al subir la imagen, inténtalo de nuevo","Error generating image. Please try again.":"Error al generar la imagen, inténtalo de nuevo","Connection error. Please try again.":"Error de conexión, inténtalo de nuevo","You're out of credits":"Te has quedado sin créditos","Subscribe to generate photoreal renders of your floor plans.":"Suscríbete para generar imágenes fotorrealistas de tus planos.",Weekly:"Semanal",Monthly:"Mensual",credits:"créditos",Download:"Descargar",Bedroom:"Dormitorio","Living Room":"Sala de estar","Dining Room":"Comedor",Office:"Oficina",Kitchen:"Cocina",Bathroom:"Baño",Hallway:"Pasillo",Closet:"Armario",Garage:"Garaje",Other:"Otro",Min:"Mín.",Width:"Ancho"},tr:{"Lamsa Engineers":"Lamsa Muhendisler","Please sign in to continue.":"Devam etmek icin giris yapin.","Sign in":"Giris Yap","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Tam kat planlari tasarlayin, 3D onizleme yapin ve gercek mimari belgeler disa aktarin.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Engineers erisiminiz sona erdi. Tam kat planlari tasarlamaya devam etmek icin tekrar abone olun.","Rectangular rooms, doors & windows, single-floor plans":"Dikdortgen odalar, kapilar ve pencereler, tek katli planlar","Live 3D preview of your design":"Tasariminizin canli 3D onizlemesi","Printable floor plan export":"Yazdirilabilir kat plani disa aktarma","Use Lamsa's existing furniture-styling tools per room":"Lamsa'nin mevcut mobilya stilizasyon araclarini her oda icin kullanin","/ year":"/ yil","14-day free trial, cancel anytime":"14 gunluk ucretsiz deneme, istediginiz zaman iptal edin","Starting…":"Basliyor…","Start free trial":"Ucretsiz denemeyi baslat","Something went wrong, please try again":"Bir sorun olustu, lutfen tekrar deneyin","Your Projects":"Projeleriniz","New Project":"Yeni Proje","No projects yet — create your first one.":"Henuz proje yok — ilkini olusturun.",Delete:"Sil",Projects:"Projeler",Saved:"Kaydedildi","Save failed":"Kaydetme basarisiz","Export plan":"Plani disa aktar","Saving…":"Kaydediliyor…",Save:"Kaydet",Select:"Sec","Add Room":"Oda Ekle","Add Door":"Kapi Ekle","Add Window":"Pencere Ekle","Delete Room":"Odayi Sil","Delete Opening":"Acikligi Sil",W:"G",H:"Y","Reset camera":"Kamerayi sifirla","Untitled Project":"Isimsiz Proje","Add Polygon Room":"Serbest Sekilli Oda Ekle","Add Stairs":"Merdiven Ekle","Delete Stairs":"Merdiveni Sil","Add Column":"Kolon Ekle","Delete Column":"Kolonu Sil","Ground Floor":"Zemin Kat",Floor:"Kat","Add Floor":"Kat Ekle","Dollhouse view":"Kesit Gorunumu","Render view":"Render Gorunumu","Show Foundation":"Temeli Goster","Export DXF":"DXF Disa Aktar","Back to Home":"Ana Sayfaya Don","Generate realistic image":"Gercekci Gorsel Olustur","Optional — uses 1 credit from your weekly/monthly plan":"Istege bagli — haftalik/aylik paketinizden 1 kredi kullanir","Turning your design into a photoreal render...":"Tasariminiz gercekci bir gorsele donusturuluyor...","Takes 20-40 seconds":"20-40 saniye surer",Close:"Kapat","Image upload failed. Please try again.":"Gorsel yuklenemedi, lutfen tekrar deneyin","Error generating image. Please try again.":"Gorsel olusturulurken hata olustu, lutfen tekrar deneyin","Connection error. Please try again.":"Baglanti hatasi, lutfen tekrar deneyin","You're out of credits":"Krediniz kalmadi","Subscribe to generate photoreal renders of your floor plans.":"Kat planlarinizin gercekci gorsellerini olusturmak icin abone olun.",Weekly:"Haftalik",Monthly:"Aylik",credits:"kredi",Download:"Indir",Bedroom:"Yatak Odasi","Living Room":"Oturma Odasi","Dining Room":"Yemek Odasi",Office:"Ofis",Kitchen:"Mutfak",Bathroom:"Banyo",Hallway:"Koridor",Closet:"Dolap Odasi",Garage:"Garaj",Other:"Diger",Min:"Min.",Width:"Genislik"},fr:{"Lamsa Engineers":"Lamsa Ingénieurs","Please sign in to continue.":"Veuillez vous connecter pour continuer.","Sign in":"Connexion","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Concevez des plans complets, prévisualisez-les en 3D et exportez de vrais documents architecturaux.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Votre accès à Engineers a expiré. Réabonnez-vous pour continuer à concevoir des plans complets.","Rectangular rooms, doors & windows, single-floor plans":"Pièces rectangulaires, portes et fenêtres, plans à un seul niveau","Live 3D preview of your design":"Aperçu 3D en direct de votre conception","Printable floor plan export":"Export de plan imprimable","Use Lamsa's existing furniture-styling tools per room":"Utilisez les outils de style de meubles existants de Lamsa pour chaque pièce","/ year":"/ an","14-day free trial, cancel anytime":"Essai gratuit de 14 jours, annulez à tout moment","Starting…":"Démarrage…","Start free trial":"Démarrer l'essai gratuit","Something went wrong, please try again":"Un problème est survenu, veuillez réessayer","Your Projects":"Vos Projets","New Project":"Nouveau Projet","No projects yet — create your first one.":"Aucun projet pour l'instant — créez le premier.",Delete:"Supprimer",Projects:"Projets",Saved:"Enregistré","Save failed":"Échec de l'enregistrement","Export plan":"Exporter le plan","Saving…":"Enregistrement…",Save:"Enregistrer",Select:"Sélectionner","Add Room":"Ajouter une pièce","Add Door":"Ajouter une porte","Add Window":"Ajouter une fenêtre","Delete Room":"Supprimer la pièce","Delete Opening":"Supprimer l'ouverture",W:"L",H:"H","Reset camera":"Réinitialiser la caméra","Untitled Project":"Projet sans titre","Add Polygon Room":"Ajouter une pièce de forme libre","Add Stairs":"Ajouter un escalier","Delete Stairs":"Supprimer l'escalier","Add Column":"Ajouter un poteau","Delete Column":"Supprimer le poteau","Ground Floor":"Rez-de-chaussée",Floor:"Étage","Add Floor":"Ajouter un étage","Dollhouse view":"Vue en coupe","Render view":"Vue rendue","Show Foundation":"Afficher les fondations","Export DXF":"Exporter en DXF","Back to Home":"Retour à l'accueil","Generate realistic image":"Générer une image réaliste","Optional — uses 1 credit from your weekly/monthly plan":"Optionnel — utilise 1 crédit de votre forfait hebdomadaire/mensuel","Turning your design into a photoreal render...":"Transformation de votre conception en image photoréaliste...","Takes 20-40 seconds":"Prend 20 à 40 secondes",Close:"Fermer","Image upload failed. Please try again.":"Échec de l'envoi de l'image, veuillez réessayer","Error generating image. Please try again.":"Erreur lors de la génération de l'image, veuillez réessayer","Connection error. Please try again.":"Erreur de connexion, veuillez réessayer","You're out of credits":"Vous n'avez plus de crédits","Subscribe to generate photoreal renders of your floor plans.":"Abonnez-vous pour générer des rendus photoréalistes de vos plans.",Weekly:"Hebdomadaire",Monthly:"Mensuel",credits:"crédits",Download:"Télécharger",Bedroom:"Chambre","Living Room":"Salon","Dining Room":"Salle à manger",Office:"Bureau",Kitchen:"Cuisine",Bathroom:"Salle de bain",Hallway:"Couloir",Closet:"Placard",Garage:"Garage",Other:"Autre",Min:"Min.",Width:"Largeur"},it:{"Lamsa Engineers":"Lamsa Ingegneri","Please sign in to continue.":"Accedi per continuare.","Sign in":"Accedi","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Progetta planimetrie complete, visualizzale in anteprima 3D ed esporta veri documenti architettonici.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Il tuo accesso a Engineers è scaduto. Abbonati di nuovo per continuare a progettare planimetrie complete.","Rectangular rooms, doors & windows, single-floor plans":"Stanze rettangolari, porte e finestre, planimetrie a un piano","Live 3D preview of your design":"Anteprima 3D dal vivo del tuo progetto","Printable floor plan export":"Esportazione planimetria stampabile","Use Lamsa's existing furniture-styling tools per room":"Usa gli strumenti di stile mobili di Lamsa per ogni stanza","/ year":"/ anno","14-day free trial, cancel anytime":"Prova gratuita di 14 giorni, annulla quando vuoi","Starting…":"Avvio…","Start free trial":"Avvia la prova gratuita","Something went wrong, please try again":"Qualcosa è andato storto, riprova","Your Projects":"I Tuoi Progetti","New Project":"Nuovo Progetto","No projects yet — create your first one.":"Nessun progetto ancora — crea il primo.",Delete:"Elimina",Projects:"Progetti",Saved:"Salvato","Save failed":"Salvataggio non riuscito","Export plan":"Esporta planimetria","Saving…":"Salvataggio…",Save:"Salva",Select:"Seleziona","Add Room":"Aggiungi Stanza","Add Door":"Aggiungi Porta","Add Window":"Aggiungi Finestra","Delete Room":"Elimina Stanza","Delete Opening":"Elimina Apertura",W:"L",H:"A","Reset camera":"Reimposta fotocamera","Untitled Project":"Progetto senza titolo","Add Polygon Room":"Aggiungi Stanza a Forma Libera","Add Stairs":"Aggiungi Scale","Delete Stairs":"Elimina Scale","Add Column":"Aggiungi Pilastro","Delete Column":"Elimina Pilastro","Ground Floor":"Piano Terra",Floor:"Piano","Add Floor":"Aggiungi Piano","Dollhouse view":"Vista in sezione","Render view":"Vista renderizzata","Show Foundation":"Mostra fondamenta","Export DXF":"Esporta DXF","Back to Home":"Torna alla Home","Generate realistic image":"Genera immagine realistica","Optional — uses 1 credit from your weekly/monthly plan":"Opzionale — usa 1 credito del tuo piano settimanale/mensile","Turning your design into a photoreal render...":"Trasformazione del tuo progetto in un rendering fotorealistico...","Takes 20-40 seconds":"Richiede 20-40 secondi",Close:"Chiudi","Image upload failed. Please try again.":"Caricamento dell'immagine non riuscito, riprova","Error generating image. Please try again.":"Errore durante la generazione dell'immagine, riprova","Connection error. Please try again.":"Errore di connessione, riprova","You're out of credits":"Hai esaurito i crediti","Subscribe to generate photoreal renders of your floor plans.":"Abbonati per generare rendering fotorealistici delle tue planimetrie.",Weekly:"Settimanale",Monthly:"Mensile",credits:"crediti",Download:"Scarica",Bedroom:"Camera da letto","Living Room":"Soggiorno","Dining Room":"Sala da pranzo",Office:"Ufficio",Kitchen:"Cucina",Bathroom:"Bagno",Hallway:"Corridoio",Closet:"Ripostiglio",Garage:"Garage",Other:"Altro",Min:"Min.",Width:"Larghezza"},ru:{"Lamsa Engineers":"Lamsa Inzhenery","Please sign in to continue.":"Voydite, chtoby prodolzhit.","Sign in":"Vkhod","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Proektiruyte polnotsennye plany pomeshcheniy, prosmatrivayte ikh v 3D i eksportiruyte nastoyashchie arkhitekturnye dokumenty.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Vash dostup k Engineers zavershilsya. Oformite podpisku snova, chtoby prodolzhit proektirovat polnye plany.","Rectangular rooms, doors & windows, single-floor plans":"Pryamougolnye komnaty, dveri i okna, odnoetazhnye plany","Live 3D preview of your design":"Zhivoy 3D-predprosmotr vashego proekta","Printable floor plan export":"Eksport plana dlya pechati","Use Lamsa's existing furniture-styling tools per room":"Ispolzuyte sushchestvuyushchie instrumenty stilizatsii mebeli Lamsa dlya kazhdoy komnaty","/ year":"/ god","14-day free trial, cancel anytime":"14-dnevnyy besplatnyy probnyy period, otmena v lyuboy moment","Starting…":"Zapusk…","Start free trial":"Nachat besplatnyy probnyy period","Something went wrong, please try again":"Chto-to poshlo ne tak, poprobuyte snova","Your Projects":"Vashi Proekty","New Project":"Novyy Proekt","No projects yet — create your first one.":"Poka net proektov — sozdayte pervyy.",Delete:"Udalit",Projects:"Proekty",Saved:"Sokhraneno","Save failed":"Oshibka sokhraneniya","Export plan":"Eksportirovat plan","Saving…":"Sokhranenie…",Save:"Sokhranit",Select:"Vybrat","Add Room":"Dobavit Komnatu","Add Door":"Dobavit Dver","Add Window":"Dobavit Okno","Delete Room":"Udalit Komnatu","Delete Opening":"Udalit Proyom",W:"Sh",H:"V","Reset camera":"Sbrosit kameru","Untitled Project":"Proekt bez nazvaniya","Add Polygon Room":"Dobavit Komnatu Svobodnoy Formy","Add Stairs":"Dobavit Lestnitsu","Delete Stairs":"Udalit Lestnitsu","Add Column":"Dobavit Kolonnu","Delete Column":"Udalit Kolonnu","Ground Floor":"Pervyy Etazh",Floor:"Etazh","Add Floor":"Dobavit Etazh","Dollhouse view":"Razrez doma","Render view":"Render vid","Show Foundation":"Pokazat Fundament","Export DXF":"Eksportirovat DXF","Back to Home":"Na glavnuyu","Generate realistic image":"Sozdat realistichnoe izobrazhenie","Optional — uses 1 credit from your weekly/monthly plan":"Neobyazatelno — ispolzuet 1 kredit iz vashego nedelnogo/mesyachnogo plana","Turning your design into a photoreal render...":"Prevrashchaem vash proekt v fotorealistichnoe izobrazhenie...","Takes 20-40 seconds":"Zanimaet 20-40 sekund",Close:"Zakryt","Image upload failed. Please try again.":"Ne udalos zagruzit izobrazhenie, poprobuyte snova","Error generating image. Please try again.":"Oshibka pri sozdanii izobrazheniya, poprobuyte snova","Connection error. Please try again.":"Oshibka soedineniya, poprobuyte snova","You're out of credits":"U vas konchilis kredity","Subscribe to generate photoreal renders of your floor plans.":"Oformite podpisku, chtoby sozdavat realistichnye izobrazheniya vashikh planov.",Weekly:"Nedelnyy",Monthly:"Mesyachnyy",credits:"kreditov",Download:"Skachat",Bedroom:"Spalnya","Living Room":"Gostinaya","Dining Room":"Stolovaya",Office:"Kabinet",Kitchen:"Kukhnya",Bathroom:"Vannaya",Hallway:"Koridor",Closet:"Kladovaya",Garage:"Garazh",Other:"Drugoe",Min:"Min.",Width:"Shirina"}};function C2(){try{return localStorage.getItem("lamsa_lang")||"en"}catch{return"en"}}function P2(){const[t,e]=be.useState(C2);be.useEffect(()=>{document.documentElement.setAttribute("dir",t==="ar"?"rtl":"ltr"),document.documentElement.setAttribute("lang",t)},[t]),be.useEffect(()=>{function i(r){r.key==="lamsa_lang"&&e(r.newValue||"en")}return window.addEventListener("storage",i),()=>window.removeEventListener("storage",i)},[]);const n=be.useCallback(i=>t==="ar"?b2[i]||i:t==="en"?i:Fg[t]&&Fg[t][i]||i,[t]);return{lang:t,t:n}}function L2(t){return!!t&&(t.status==="active"||t.status==="trialing")}function D2(){const{t}=P2(),[e,n]=be.useState("loading"),[i,r]=be.useState(null),[o,s]=be.useState([]),[a,l]=be.useState(null);be.useEffect(()=>{FS().then(m=>{if(m.status===401){n("signin");return}if(!m.ok||!m.data){n("signin");return}const y=m.data.engineerSubscription;if(r(y?y.status:null),!L2(y)){n("paywall");return}u()})},[]);function u(){kS().then(m=>{m.ok&&m.data&&s(m.data.projects||[]),n("list")})}function c(){l({projectId:null,project:iy(t("Untitled Project"))}),n("editor")}function h(m){zS(m).then(y=>{if(y.status===403){n("paywall");return}!y.ok||!y.data||(l({projectId:m,project:y.data.project}),n("editor"))})}function d(m){HS(m).then(()=>u())}async function p(m,y){const g=await BS(m,y);return g.status===403?(n("paywall"),{ok:!1,error:"Engineers access required"}):(g.ok&&g.data&&l(f=>({...f,projectId:g.data.projectId})),g.ok?{ok:!0}:{ok:!1,error:g.data&&g.data.error||"Save failed"})}return e==="loading"?null:e==="signin"?oe.jsxs("div",{style:{maxWidth:420,margin:"100px auto",textAlign:"center",fontFamily:"sans-serif"},children:[oe.jsx("h1",{style:{fontSize:20,fontWeight:800,marginBottom:12},children:t("Lamsa Engineers")}),oe.jsx("p",{style:{color:"#6b7280",marginBottom:20},children:t("Please sign in to continue.")}),oe.jsx("a",{href:"/lamsa-auth.html?return=engineers/index.html",style:{display:"inline-block",background:"#c9a96e",color:"#1b1e22",padding:"12px 24px",borderRadius:10,fontWeight:800,textDecoration:"none"},children:t("Sign in")})]}):e==="paywall"?oe.jsx(VS,{status:i,t}):e==="editor"&&a?oe.jsx(R2,{initialProject:a.project,projectId:a.projectId,onBack:()=>u(),onSave:p,t}):oe.jsx(WS,{projects:o,onOpen:h,onCreate:c,onDelete:d,t})}Kv(document.getElementById("root")).render(oe.jsx(Ty.StrictMode,{children:oe.jsx(D2,{})}));
