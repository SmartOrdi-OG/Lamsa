(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function Sy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Kg={exports:{}},Cu={},Zg={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ba=Symbol.for("react.element"),Ey=Symbol.for("react.portal"),My=Symbol.for("react.fragment"),wy=Symbol.for("react.strict_mode"),Ty=Symbol.for("react.profiler"),Ay=Symbol.for("react.provider"),Ry=Symbol.for("react.context"),Cy=Symbol.for("react.forward_ref"),by=Symbol.for("react.suspense"),Py=Symbol.for("react.memo"),Ly=Symbol.for("react.lazy"),Vh=Symbol.iterator;function Dy(t){return t===null||typeof t!="object"?null:(t=Vh&&t[Vh]||t["@@iterator"],typeof t=="function"?t:null)}var Jg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qg=Object.assign,e0={};function vs(t,e,n){this.props=t,this.context=e,this.refs=e0,this.updater=n||Jg}vs.prototype.isReactComponent={};vs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};vs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function t0(){}t0.prototype=vs.prototype;function Pf(t,e,n){this.props=t,this.context=e,this.refs=e0,this.updater=n||Jg}var Lf=Pf.prototype=new t0;Lf.constructor=Pf;Qg(Lf,vs.prototype);Lf.isPureReactComponent=!0;var Wh=Array.isArray,n0=Object.prototype.hasOwnProperty,Df={current:null},i0={key:!0,ref:!0,__self:!0,__source:!0};function r0(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)n0.call(e,i)&&!i0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ba,type:t,key:o,ref:s,props:r,_owner:Df.current}}function Iy(t,e){return{$$typeof:ba,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function If(t){return typeof t=="object"&&t!==null&&t.$$typeof===ba}function Ny(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Xh=/\/+/g;function rc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ny(""+t.key):e.toString(36)}function Ul(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case ba:case Ey:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+rc(s,0):i,Wh(r)?(n="",t!=null&&(n=t.replace(Xh,"$&/")+"/"),Ul(r,e,n,"",function(u){return u})):r!=null&&(If(r)&&(r=Iy(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Xh,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",Wh(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+rc(o,a);s+=Ul(o,e,n,l,r)}else if(l=Dy(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+rc(o,a++),s+=Ul(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Ba(t,e,n){if(t==null)return t;var i=[],r=0;return Ul(t,i,"","",function(o){return e.call(n,o,r++)}),i}function Uy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var un={current:null},Ol={transition:null},Oy={ReactCurrentDispatcher:un,ReactCurrentBatchConfig:Ol,ReactCurrentOwner:Df};function o0(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:Ba,forEach:function(t,e,n){Ba(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ba(t,function(){e++}),e},toArray:function(t){return Ba(t,function(e){return e})||[]},only:function(t){if(!If(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=vs;qe.Fragment=My;qe.Profiler=Ty;qe.PureComponent=Pf;qe.StrictMode=wy;qe.Suspense=by;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Oy;qe.act=o0;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Qg({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Df.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)n0.call(e,l)&&!i0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ba,type:t.type,key:r,ref:o,props:i,_owner:s}};qe.createContext=function(t){return t={$$typeof:Ry,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ay,_context:t},t.Consumer=t};qe.createElement=r0;qe.createFactory=function(t){var e=r0.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:Cy,render:t}};qe.isValidElement=If;qe.lazy=function(t){return{$$typeof:Ly,_payload:{_status:-1,_result:t},_init:Uy}};qe.memo=function(t,e){return{$$typeof:Py,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=Ol.transition;Ol.transition={};try{t()}finally{Ol.transition=e}};qe.unstable_act=o0;qe.useCallback=function(t,e){return un.current.useCallback(t,e)};qe.useContext=function(t){return un.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return un.current.useDeferredValue(t)};qe.useEffect=function(t,e){return un.current.useEffect(t,e)};qe.useId=function(){return un.current.useId()};qe.useImperativeHandle=function(t,e,n){return un.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return un.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return un.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return un.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return un.current.useReducer(t,e,n)};qe.useRef=function(t){return un.current.useRef(t)};qe.useState=function(t){return un.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return un.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return un.current.useTransition()};qe.version="18.3.1";Zg.exports=qe;var Ae=Zg.exports;const Fy=Sy(Ae);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zy=Ae,ky=Symbol.for("react.element"),By=Symbol.for("react.fragment"),Hy=Object.prototype.hasOwnProperty,Gy=zy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vy={key:!0,ref:!0,__self:!0,__source:!0};function s0(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)Hy.call(e,i)&&!Vy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ky,type:t,key:o,ref:s,props:r,_owner:Gy.current}}Cu.Fragment=By;Cu.jsx=s0;Cu.jsxs=s0;Kg.exports=Cu;var te=Kg.exports,a0={exports:{}},Cn={},l0={exports:{}},u0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,B){var z=U.length;U.push(B);e:for(;0<z;){var Z=z-1>>>1,ie=U[Z];if(0<r(ie,B))U[Z]=B,U[z]=ie,z=Z;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var B=U[0],z=U.pop();if(z!==B){U[0]=z;e:for(var Z=0,ie=U.length,$=ie>>>1;Z<$;){var ee=2*(Z+1)-1,de=U[ee],pe=ee+1,he=U[pe];if(0>r(de,z))pe<ie&&0>r(he,de)?(U[Z]=he,U[pe]=z,Z=pe):(U[Z]=de,U[ee]=z,Z=ee);else if(pe<ie&&0>r(he,z))U[Z]=he,U[pe]=z,Z=pe;else break e}}return B}function r(U,B){var z=U.sortIndex-B.sortIndex;return z!==0?z:U.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,h=3,p=!1,g=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(U){for(var B=n(u);B!==null;){if(B.callback===null)i(u);else if(B.startTime<=U)i(u),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(u)}}function _(U){if(y=!1,v(U),!g)if(n(l)!==null)g=!0,j(C);else{var B=n(u);B!==null&&K(_,B.startTime-U)}}function C(U,B){g=!1,y&&(y=!1,d(P),P=-1),p=!0;var z=h;try{for(v(B),f=n(l);f!==null&&(!(f.expirationTime>B)||U&&!O());){var Z=f.callback;if(typeof Z=="function"){f.callback=null,h=f.priorityLevel;var ie=Z(f.expirationTime<=B);B=t.unstable_now(),typeof ie=="function"?f.callback=ie:f===n(l)&&i(l),v(B)}else i(l);f=n(l)}if(f!==null)var $=!0;else{var ee=n(u);ee!==null&&K(_,ee.startTime-B),$=!1}return $}finally{f=null,h=z,p=!1}}var E=!1,T=null,P=-1,M=5,A=-1;function O(){return!(t.unstable_now()-A<M)}function X(){if(T!==null){var U=t.unstable_now();A=U;var B=!0;try{B=T(!0,U)}finally{B?Q():(E=!1,T=null)}}else E=!1}var Q;if(typeof x=="function")Q=function(){x(X)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,H=D.port2;D.port1.onmessage=X,Q=function(){H.postMessage(null)}}else Q=function(){m(X,0)};function j(U){T=U,E||(E=!0,Q())}function K(U,B){P=m(function(){U(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,j(C))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(h){case 1:case 2:case 3:var B=3;break;default:B=h}var z=h;h=B;try{return U()}finally{h=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,B){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var z=h;h=U;try{return B()}finally{h=z}},t.unstable_scheduleCallback=function(U,B,z){var Z=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?Z+z:Z):z=Z,U){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=z+ie,U={id:c++,callback:B,priorityLevel:U,startTime:z,expirationTime:ie,sortIndex:-1},z>Z?(U.sortIndex=z,e(u,U),n(l)===null&&U===n(u)&&(y?(d(P),P=-1):y=!0,K(_,z-Z))):(U.sortIndex=ie,e(l,U),g||p||(g=!0,j(C))),U},t.unstable_shouldYield=O,t.unstable_wrapCallback=function(U){var B=h;return function(){var z=h;h=B;try{return U.apply(this,arguments)}finally{h=z}}}})(u0);l0.exports=u0;var Wy=l0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xy=Ae,Rn=Wy;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c0=new Set,oa={};function no(t,e){is(t,e),is(t+"Capture",e)}function is(t,e){for(oa[t]=e,t=0;t<e.length;t++)c0.add(e[t])}var zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_d=Object.prototype.hasOwnProperty,jy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jh={},$h={};function $y(t){return _d.call($h,t)?!0:_d.call(jh,t)?!1:jy.test(t)?$h[t]=!0:(jh[t]=!0,!1)}function Yy(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function qy(t,e,n,i){if(e===null||typeof e>"u"||Yy(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function cn(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xt[t]=new cn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xt[e]=new cn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xt[t]=new cn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xt[t]=new cn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xt[t]=new cn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xt[t]=new cn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xt[t]=new cn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xt[t]=new cn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xt[t]=new cn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Nf=/[\-:]([a-z])/g;function Uf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Nf,Uf);Xt[e]=new cn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Nf,Uf);Xt[e]=new cn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Nf,Uf);Xt[e]=new cn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xt[t]=new cn(t,1,!1,t.toLowerCase(),null,!1,!1)});Xt.xlinkHref=new cn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xt[t]=new cn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Of(t,e,n,i){var r=Xt.hasOwnProperty(e)?Xt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(qy(e,n,r,i)&&(n=null),i||r===null?$y(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Vi=Xy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ha=Symbol.for("react.element"),Po=Symbol.for("react.portal"),Lo=Symbol.for("react.fragment"),Ff=Symbol.for("react.strict_mode"),yd=Symbol.for("react.profiler"),d0=Symbol.for("react.provider"),f0=Symbol.for("react.context"),zf=Symbol.for("react.forward_ref"),xd=Symbol.for("react.suspense"),Sd=Symbol.for("react.suspense_list"),kf=Symbol.for("react.memo"),Ki=Symbol.for("react.lazy"),h0=Symbol.for("react.offscreen"),Yh=Symbol.iterator;function As(t){return t===null||typeof t!="object"?null:(t=Yh&&t[Yh]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,oc;function Hs(t){if(oc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);oc=e&&e[1]||""}return`
`+oc+t}var sc=!1;function ac(t,e){if(!t||sc)return"";sc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{sc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Hs(t):""}function Ky(t){switch(t.tag){case 5:return Hs(t.type);case 16:return Hs("Lazy");case 13:return Hs("Suspense");case 19:return Hs("SuspenseList");case 0:case 2:case 15:return t=ac(t.type,!1),t;case 11:return t=ac(t.type.render,!1),t;case 1:return t=ac(t.type,!0),t;default:return""}}function Ed(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Lo:return"Fragment";case Po:return"Portal";case yd:return"Profiler";case Ff:return"StrictMode";case xd:return"Suspense";case Sd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case f0:return(t.displayName||"Context")+".Consumer";case d0:return(t._context.displayName||"Context")+".Provider";case zf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case kf:return e=t.displayName||null,e!==null?e:Ed(t.type)||"Memo";case Ki:e=t._payload,t=t._init;try{return Ed(t(e))}catch{}}return null}function Zy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ed(e);case 8:return e===Ff?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function p0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Jy(t){var e=p0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ga(t){t._valueTracker||(t._valueTracker=Jy(t))}function m0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=p0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ql(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Md(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function qh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function g0(t,e){e=e.checked,e!=null&&Of(t,"checked",e,!1)}function wd(t,e){g0(t,e);var n=gr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Td(t,e.type,n):e.hasOwnProperty("defaultValue")&&Td(t,e.type,gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Kh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Td(t,e,n){(e!=="number"||ql(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Gs=Array.isArray;function jo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+gr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Ad(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Zh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(Gs(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gr(n)}}function v0(t,e){var n=gr(e.value),i=gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Jh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function _0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?_0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Va,y0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Va=Va||document.createElement("div"),Va.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Va.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function sa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var js={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qy=["Webkit","ms","Moz","O"];Object.keys(js).forEach(function(t){Qy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),js[e]=js[t]})});function x0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||js.hasOwnProperty(t)&&js[t]?(""+e).trim():e+"px"}function S0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=x0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var ex=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cd(t,e){if(e){if(ex[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function bd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pd=null;function Bf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ld=null,$o=null,Yo=null;function Qh(t){if(t=Da(t)){if(typeof Ld!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=Iu(e),Ld(t.stateNode,t.type,e))}}function E0(t){$o?Yo?Yo.push(t):Yo=[t]:$o=t}function M0(){if($o){var t=$o,e=Yo;if(Yo=$o=null,Qh(t),e)for(t=0;t<e.length;t++)Qh(e[t])}}function w0(t,e){return t(e)}function T0(){}var lc=!1;function A0(t,e,n){if(lc)return t(e,n);lc=!0;try{return w0(t,e,n)}finally{lc=!1,($o!==null||Yo!==null)&&(T0(),M0())}}function aa(t,e){var n=t.stateNode;if(n===null)return null;var i=Iu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var Dd=!1;if(zi)try{var Rs={};Object.defineProperty(Rs,"passive",{get:function(){Dd=!0}}),window.addEventListener("test",Rs,Rs),window.removeEventListener("test",Rs,Rs)}catch{Dd=!1}function tx(t,e,n,i,r,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var $s=!1,Kl=null,Zl=!1,Id=null,nx={onError:function(t){$s=!0,Kl=t}};function ix(t,e,n,i,r,o,s,a,l){$s=!1,Kl=null,tx.apply(nx,arguments)}function rx(t,e,n,i,r,o,s,a,l){if(ix.apply(this,arguments),$s){if($s){var u=Kl;$s=!1,Kl=null}else throw Error(ce(198));Zl||(Zl=!0,Id=u)}}function io(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function R0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ep(t){if(io(t)!==t)throw Error(ce(188))}function ox(t){var e=t.alternate;if(!e){if(e=io(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return ep(r),t;if(o===i)return ep(r),e;o=o.sibling}throw Error(ce(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function C0(t){return t=ox(t),t!==null?b0(t):null}function b0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=b0(t);if(e!==null)return e;t=t.sibling}return null}var P0=Rn.unstable_scheduleCallback,tp=Rn.unstable_cancelCallback,sx=Rn.unstable_shouldYield,ax=Rn.unstable_requestPaint,Tt=Rn.unstable_now,lx=Rn.unstable_getCurrentPriorityLevel,Hf=Rn.unstable_ImmediatePriority,L0=Rn.unstable_UserBlockingPriority,Jl=Rn.unstable_NormalPriority,ux=Rn.unstable_LowPriority,D0=Rn.unstable_IdlePriority,bu=null,gi=null;function cx(t){if(gi&&typeof gi.onCommitFiberRoot=="function")try{gi.onCommitFiberRoot(bu,t,void 0,(t.current.flags&128)===128)}catch{}}var oi=Math.clz32?Math.clz32:hx,dx=Math.log,fx=Math.LN2;function hx(t){return t>>>=0,t===0?32:31-(dx(t)/fx|0)|0}var Wa=64,Xa=4194304;function Vs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ql(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=Vs(a):(o&=s,o!==0&&(i=Vs(o)))}else s=n&~r,s!==0?i=Vs(s):o!==0&&(i=Vs(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-oi(e),r=1<<n,i|=t[n],e&=~r;return i}function px(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-oi(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=px(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Nd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function I0(){var t=Wa;return Wa<<=1,!(Wa&4194240)&&(Wa=64),t}function uc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Pa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-oi(e),t[e]=n}function gx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-oi(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function Gf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-oi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Qe=0;function N0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var U0,Vf,O0,F0,z0,Ud=!1,ja=[],or=null,sr=null,ar=null,la=new Map,ua=new Map,Ji=[],vx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function np(t,e){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":la.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ua.delete(e.pointerId)}}function Cs(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=Da(e),e!==null&&Vf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function _x(t,e,n,i,r){switch(e){case"focusin":return or=Cs(or,t,e,n,i,r),!0;case"dragenter":return sr=Cs(sr,t,e,n,i,r),!0;case"mouseover":return ar=Cs(ar,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return la.set(o,Cs(la.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,ua.set(o,Cs(ua.get(o)||null,t,e,n,i,r)),!0}return!1}function k0(t){var e=zr(t.target);if(e!==null){var n=io(e);if(n!==null){if(e=n.tag,e===13){if(e=R0(n),e!==null){t.blockedOn=e,z0(t.priority,function(){O0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Od(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Pd=i,n.target.dispatchEvent(i),Pd=null}else return e=Da(n),e!==null&&Vf(e),t.blockedOn=n,!1;e.shift()}return!0}function ip(t,e,n){Fl(t)&&n.delete(e)}function yx(){Ud=!1,or!==null&&Fl(or)&&(or=null),sr!==null&&Fl(sr)&&(sr=null),ar!==null&&Fl(ar)&&(ar=null),la.forEach(ip),ua.forEach(ip)}function bs(t,e){t.blockedOn===e&&(t.blockedOn=null,Ud||(Ud=!0,Rn.unstable_scheduleCallback(Rn.unstable_NormalPriority,yx)))}function ca(t){function e(r){return bs(r,t)}if(0<ja.length){bs(ja[0],t);for(var n=1;n<ja.length;n++){var i=ja[n];i.blockedOn===t&&(i.blockedOn=null)}}for(or!==null&&bs(or,t),sr!==null&&bs(sr,t),ar!==null&&bs(ar,t),la.forEach(e),ua.forEach(e),n=0;n<Ji.length;n++)i=Ji[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ji.length&&(n=Ji[0],n.blockedOn===null);)k0(n),n.blockedOn===null&&Ji.shift()}var qo=Vi.ReactCurrentBatchConfig,eu=!0;function xx(t,e,n,i){var r=Qe,o=qo.transition;qo.transition=null;try{Qe=1,Wf(t,e,n,i)}finally{Qe=r,qo.transition=o}}function Sx(t,e,n,i){var r=Qe,o=qo.transition;qo.transition=null;try{Qe=4,Wf(t,e,n,i)}finally{Qe=r,qo.transition=o}}function Wf(t,e,n,i){if(eu){var r=Od(t,e,n,i);if(r===null)yc(t,e,i,tu,n),np(t,i);else if(_x(r,t,e,n,i))i.stopPropagation();else if(np(t,i),e&4&&-1<vx.indexOf(t)){for(;r!==null;){var o=Da(r);if(o!==null&&U0(o),o=Od(t,e,n,i),o===null&&yc(t,e,i,tu,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else yc(t,e,i,null,n)}}var tu=null;function Od(t,e,n,i){if(tu=null,t=Bf(i),t=zr(t),t!==null)if(e=io(t),e===null)t=null;else if(n=e.tag,n===13){if(t=R0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return tu=t,null}function B0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lx()){case Hf:return 1;case L0:return 4;case Jl:case ux:return 16;case D0:return 536870912;default:return 16}default:return 16}}var er=null,Xf=null,zl=null;function H0(){if(zl)return zl;var t,e=Xf,n=e.length,i,r="value"in er?er.value:er.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return zl=r.slice(t,1<i?1-i:void 0)}function kl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function $a(){return!0}function rp(){return!1}function bn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?$a:rp,this.isPropagationStopped=rp,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$a)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$a)},persist:function(){},isPersistent:$a}),e}var _s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jf=bn(_s),La=_t({},_s,{view:0,detail:0}),Ex=bn(La),cc,dc,Ps,Pu=_t({},La,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$f,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ps&&(Ps&&t.type==="mousemove"?(cc=t.screenX-Ps.screenX,dc=t.screenY-Ps.screenY):dc=cc=0,Ps=t),cc)},movementY:function(t){return"movementY"in t?t.movementY:dc}}),op=bn(Pu),Mx=_t({},Pu,{dataTransfer:0}),wx=bn(Mx),Tx=_t({},La,{relatedTarget:0}),fc=bn(Tx),Ax=_t({},_s,{animationName:0,elapsedTime:0,pseudoElement:0}),Rx=bn(Ax),Cx=_t({},_s,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bx=bn(Cx),Px=_t({},_s,{data:0}),sp=bn(Px),Lx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ix={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ix[t])?!!e[t]:!1}function $f(){return Nx}var Ux=_t({},La,{key:function(t){if(t.key){var e=Lx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=kl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Dx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$f,charCode:function(t){return t.type==="keypress"?kl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?kl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ox=bn(Ux),Fx=_t({},Pu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ap=bn(Fx),zx=_t({},La,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$f}),kx=bn(zx),Bx=_t({},_s,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hx=bn(Bx),Gx=_t({},Pu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Vx=bn(Gx),Wx=[9,13,27,32],Yf=zi&&"CompositionEvent"in window,Ys=null;zi&&"documentMode"in document&&(Ys=document.documentMode);var Xx=zi&&"TextEvent"in window&&!Ys,G0=zi&&(!Yf||Ys&&8<Ys&&11>=Ys),lp=" ",up=!1;function V0(t,e){switch(t){case"keyup":return Wx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function W0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Do=!1;function jx(t,e){switch(t){case"compositionend":return W0(e);case"keypress":return e.which!==32?null:(up=!0,lp);case"textInput":return t=e.data,t===lp&&up?null:t;default:return null}}function $x(t,e){if(Do)return t==="compositionend"||!Yf&&V0(t,e)?(t=H0(),zl=Xf=er=null,Do=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return G0&&e.locale!=="ko"?null:e.data;default:return null}}var Yx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Yx[t.type]:e==="textarea"}function X0(t,e,n,i){E0(i),e=nu(e,"onChange"),0<e.length&&(n=new jf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var qs=null,da=null;function qx(t){nv(t,0)}function Lu(t){var e=Uo(t);if(m0(e))return t}function Kx(t,e){if(t==="change")return e}var j0=!1;if(zi){var hc;if(zi){var pc="oninput"in document;if(!pc){var dp=document.createElement("div");dp.setAttribute("oninput","return;"),pc=typeof dp.oninput=="function"}hc=pc}else hc=!1;j0=hc&&(!document.documentMode||9<document.documentMode)}function fp(){qs&&(qs.detachEvent("onpropertychange",$0),da=qs=null)}function $0(t){if(t.propertyName==="value"&&Lu(da)){var e=[];X0(e,da,t,Bf(t)),A0(qx,e)}}function Zx(t,e,n){t==="focusin"?(fp(),qs=e,da=n,qs.attachEvent("onpropertychange",$0)):t==="focusout"&&fp()}function Jx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Lu(da)}function Qx(t,e){if(t==="click")return Lu(e)}function eS(t,e){if(t==="input"||t==="change")return Lu(e)}function tS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ai=typeof Object.is=="function"?Object.is:tS;function fa(t,e){if(ai(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!_d.call(e,r)||!ai(t[r],e[r]))return!1}return!0}function hp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pp(t,e){var n=hp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hp(n)}}function Y0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Y0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function q0(){for(var t=window,e=ql();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ql(t.document)}return e}function qf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function nS(t){var e=q0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Y0(n.ownerDocument.documentElement,n)){if(i!==null&&qf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=pp(n,o);var s=pp(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var iS=zi&&"documentMode"in document&&11>=document.documentMode,Io=null,Fd=null,Ks=null,zd=!1;function mp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zd||Io==null||Io!==ql(i)||(i=Io,"selectionStart"in i&&qf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ks&&fa(Ks,i)||(Ks=i,i=nu(Fd,"onSelect"),0<i.length&&(e=new jf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Io)))}function Ya(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var No={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionend:Ya("Transition","TransitionEnd")},mc={},K0={};zi&&(K0=document.createElement("div").style,"AnimationEvent"in window||(delete No.animationend.animation,delete No.animationiteration.animation,delete No.animationstart.animation),"TransitionEvent"in window||delete No.transitionend.transition);function Du(t){if(mc[t])return mc[t];if(!No[t])return t;var e=No[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in K0)return mc[t]=e[n];return t}var Z0=Du("animationend"),J0=Du("animationiteration"),Q0=Du("animationstart"),ev=Du("transitionend"),tv=new Map,gp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(t,e){tv.set(t,e),no(e,[t])}for(var gc=0;gc<gp.length;gc++){var vc=gp[gc],rS=vc.toLowerCase(),oS=vc[0].toUpperCase()+vc.slice(1);xr(rS,"on"+oS)}xr(Z0,"onAnimationEnd");xr(J0,"onAnimationIteration");xr(Q0,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(ev,"onTransitionEnd");is("onMouseEnter",["mouseout","mouseover"]);is("onMouseLeave",["mouseout","mouseover"]);is("onPointerEnter",["pointerout","pointerover"]);is("onPointerLeave",["pointerout","pointerover"]);no("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));no("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));no("onBeforeInput",["compositionend","keypress","textInput","paste"]);no("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));no("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));no("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ws="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ws));function vp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,rx(i,e,void 0,t),t.currentTarget=null}function nv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;vp(r,a,u),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;vp(r,a,u),o=l}}}if(Zl)throw t=Id,Zl=!1,Id=null,t}function lt(t,e){var n=e[Vd];n===void 0&&(n=e[Vd]=new Set);var i=t+"__bubble";n.has(i)||(iv(e,t,2,!1),n.add(i))}function _c(t,e,n){var i=0;e&&(i|=4),iv(n,t,i,e)}var qa="_reactListening"+Math.random().toString(36).slice(2);function ha(t){if(!t[qa]){t[qa]=!0,c0.forEach(function(n){n!=="selectionchange"&&(sS.has(n)||_c(n,!1,t),_c(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[qa]||(e[qa]=!0,_c("selectionchange",!1,e))}}function iv(t,e,n,i){switch(B0(e)){case 1:var r=xx;break;case 4:r=Sx;break;default:r=Wf}n=r.bind(null,e,n,t),r=void 0,!Dd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function yc(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=zr(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}A0(function(){var u=o,c=Bf(n),f=[];e:{var h=tv.get(t);if(h!==void 0){var p=jf,g=t;switch(t){case"keypress":if(kl(n)===0)break e;case"keydown":case"keyup":p=Ox;break;case"focusin":g="focus",p=fc;break;case"focusout":g="blur",p=fc;break;case"beforeblur":case"afterblur":p=fc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=op;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=wx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=kx;break;case Z0:case J0:case Q0:p=Rx;break;case ev:p=Hx;break;case"scroll":p=Ex;break;case"wheel":p=Vx;break;case"copy":case"cut":case"paste":p=bx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=ap}var y=(e&4)!==0,m=!y&&t==="scroll",d=y?h!==null?h+"Capture":null:h;y=[];for(var x=u,v;x!==null;){v=x;var _=v.stateNode;if(v.tag===5&&_!==null&&(v=_,d!==null&&(_=aa(x,d),_!=null&&y.push(pa(x,_,v)))),m)break;x=x.return}0<y.length&&(h=new p(h,g,null,n,c),f.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Pd&&(g=n.relatedTarget||n.fromElement)&&(zr(g)||g[ki]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?zr(g):null,g!==null&&(m=io(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(y=op,_="onMouseLeave",d="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(y=ap,_="onPointerLeave",d="onPointerEnter",x="pointer"),m=p==null?h:Uo(p),v=g==null?h:Uo(g),h=new y(_,x+"leave",p,n,c),h.target=m,h.relatedTarget=v,_=null,zr(c)===u&&(y=new y(d,x+"enter",g,n,c),y.target=v,y.relatedTarget=m,_=y),m=_,p&&g)t:{for(y=p,d=g,x=0,v=y;v;v=so(v))x++;for(v=0,_=d;_;_=so(_))v++;for(;0<x-v;)y=so(y),x--;for(;0<v-x;)d=so(d),v--;for(;x--;){if(y===d||d!==null&&y===d.alternate)break t;y=so(y),d=so(d)}y=null}else y=null;p!==null&&_p(f,h,p,y,!1),g!==null&&m!==null&&_p(f,m,g,y,!0)}}e:{if(h=u?Uo(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var C=Kx;else if(cp(h))if(j0)C=eS;else{C=Jx;var E=Zx}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=Qx);if(C&&(C=C(t,u))){X0(f,C,n,c);break e}E&&E(t,h,u),t==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&Td(h,"number",h.value)}switch(E=u?Uo(u):window,t){case"focusin":(cp(E)||E.contentEditable==="true")&&(Io=E,Fd=u,Ks=null);break;case"focusout":Ks=Fd=Io=null;break;case"mousedown":zd=!0;break;case"contextmenu":case"mouseup":case"dragend":zd=!1,mp(f,n,c);break;case"selectionchange":if(iS)break;case"keydown":case"keyup":mp(f,n,c)}var T;if(Yf)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Do?V0(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(G0&&n.locale!=="ko"&&(Do||P!=="onCompositionStart"?P==="onCompositionEnd"&&Do&&(T=H0()):(er=c,Xf="value"in er?er.value:er.textContent,Do=!0)),E=nu(u,P),0<E.length&&(P=new sp(P,t,null,n,c),f.push({event:P,listeners:E}),T?P.data=T:(T=W0(n),T!==null&&(P.data=T)))),(T=Xx?jx(t,n):$x(t,n))&&(u=nu(u,"onBeforeInput"),0<u.length&&(c=new sp("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=T))}nv(f,e)})}function pa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function nu(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=aa(t,n),o!=null&&i.unshift(pa(t,o,r)),o=aa(t,e),o!=null&&i.push(pa(t,o,r))),t=t.return}return i}function so(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function _p(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=aa(n,o),l!=null&&s.unshift(pa(n,l,a))):r||(l=aa(n,o),l!=null&&s.push(pa(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var aS=/\r\n?/g,lS=/\u0000|\uFFFD/g;function yp(t){return(typeof t=="string"?t:""+t).replace(aS,`
`).replace(lS,"")}function Ka(t,e,n){if(e=yp(e),yp(t)!==e&&n)throw Error(ce(425))}function iu(){}var kd=null,Bd=null;function Hd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gd=typeof setTimeout=="function"?setTimeout:void 0,uS=typeof clearTimeout=="function"?clearTimeout:void 0,xp=typeof Promise=="function"?Promise:void 0,cS=typeof queueMicrotask=="function"?queueMicrotask:typeof xp<"u"?function(t){return xp.resolve(null).then(t).catch(dS)}:Gd;function dS(t){setTimeout(function(){throw t})}function xc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ca(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ca(e)}function lr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Sp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ys=Math.random().toString(36).slice(2),pi="__reactFiber$"+ys,ma="__reactProps$"+ys,ki="__reactContainer$"+ys,Vd="__reactEvents$"+ys,fS="__reactListeners$"+ys,hS="__reactHandles$"+ys;function zr(t){var e=t[pi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ki]||n[pi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Sp(t);t!==null;){if(n=t[pi])return n;t=Sp(t)}return e}t=n,n=t.parentNode}return null}function Da(t){return t=t[pi]||t[ki],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Uo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function Iu(t){return t[ma]||null}var Wd=[],Oo=-1;function Sr(t){return{current:t}}function ct(t){0>Oo||(t.current=Wd[Oo],Wd[Oo]=null,Oo--)}function at(t,e){Oo++,Wd[Oo]=t.current,t.current=e}var vr={},en=Sr(vr),mn=Sr(!1),$r=vr;function rs(t,e){var n=t.type.contextTypes;if(!n)return vr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function gn(t){return t=t.childContextTypes,t!=null}function ru(){ct(mn),ct(en)}function Ep(t,e,n){if(en.current!==vr)throw Error(ce(168));at(en,e),at(mn,n)}function rv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,Zy(t)||"Unknown",r));return _t({},n,i)}function ou(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vr,$r=en.current,at(en,t),at(mn,mn.current),!0}function Mp(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=rv(t,e,$r),i.__reactInternalMemoizedMergedChildContext=t,ct(mn),ct(en),at(en,t)):ct(mn),at(mn,n)}var bi=null,Nu=!1,Sc=!1;function ov(t){bi===null?bi=[t]:bi.push(t)}function pS(t){Nu=!0,ov(t)}function Er(){if(!Sc&&bi!==null){Sc=!0;var t=0,e=Qe;try{var n=bi;for(Qe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}bi=null,Nu=!1}catch(r){throw bi!==null&&(bi=bi.slice(t+1)),P0(Hf,Er),r}finally{Qe=e,Sc=!1}}return null}var Fo=[],zo=0,su=null,au=0,Dn=[],In=0,Yr=null,Di=1,Ii="";function Pr(t,e){Fo[zo++]=au,Fo[zo++]=su,su=t,au=e}function sv(t,e,n){Dn[In++]=Di,Dn[In++]=Ii,Dn[In++]=Yr,Yr=t;var i=Di;t=Ii;var r=32-oi(i)-1;i&=~(1<<r),n+=1;var o=32-oi(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,Di=1<<32-oi(e)+r|n<<r|i,Ii=o+t}else Di=1<<o|n<<r|i,Ii=t}function Kf(t){t.return!==null&&(Pr(t,1),sv(t,1,0))}function Zf(t){for(;t===su;)su=Fo[--zo],Fo[zo]=null,au=Fo[--zo],Fo[zo]=null;for(;t===Yr;)Yr=Dn[--In],Dn[In]=null,Ii=Dn[--In],Dn[In]=null,Di=Dn[--In],Dn[In]=null}var Tn=null,wn=null,ft=!1,Qn=null;function av(t,e){var n=zn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function wp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tn=t,wn=lr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tn=t,wn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Yr!==null?{id:Di,overflow:Ii}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=zn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tn=t,wn=null,!0):!1;default:return!1}}function Xd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function jd(t){if(ft){var e=wn;if(e){var n=e;if(!wp(t,e)){if(Xd(t))throw Error(ce(418));e=lr(n.nextSibling);var i=Tn;e&&wp(t,e)?av(i,n):(t.flags=t.flags&-4097|2,ft=!1,Tn=t)}}else{if(Xd(t))throw Error(ce(418));t.flags=t.flags&-4097|2,ft=!1,Tn=t}}}function Tp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tn=t}function Za(t){if(t!==Tn)return!1;if(!ft)return Tp(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hd(t.type,t.memoizedProps)),e&&(e=wn)){if(Xd(t))throw lv(),Error(ce(418));for(;e;)av(t,e),e=lr(e.nextSibling)}if(Tp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wn=lr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wn=null}}else wn=Tn?lr(t.stateNode.nextSibling):null;return!0}function lv(){for(var t=wn;t;)t=lr(t.nextSibling)}function os(){wn=Tn=null,ft=!1}function Jf(t){Qn===null?Qn=[t]:Qn.push(t)}var mS=Vi.ReactCurrentBatchConfig;function Ls(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function Ja(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ap(t){var e=t._init;return e(t._payload)}function uv(t){function e(d,x){if(t){var v=d.deletions;v===null?(d.deletions=[x],d.flags|=16):v.push(x)}}function n(d,x){if(!t)return null;for(;x!==null;)e(d,x),x=x.sibling;return null}function i(d,x){for(d=new Map;x!==null;)x.key!==null?d.set(x.key,x):d.set(x.index,x),x=x.sibling;return d}function r(d,x){return d=fr(d,x),d.index=0,d.sibling=null,d}function o(d,x,v){return d.index=v,t?(v=d.alternate,v!==null?(v=v.index,v<x?(d.flags|=2,x):v):(d.flags|=2,x)):(d.flags|=1048576,x)}function s(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,x,v,_){return x===null||x.tag!==6?(x=Cc(v,d.mode,_),x.return=d,x):(x=r(x,v),x.return=d,x)}function l(d,x,v,_){var C=v.type;return C===Lo?c(d,x,v.props.children,_,v.key):x!==null&&(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ki&&Ap(C)===x.type)?(_=r(x,v.props),_.ref=Ls(d,x,v),_.return=d,_):(_=jl(v.type,v.key,v.props,null,d.mode,_),_.ref=Ls(d,x,v),_.return=d,_)}function u(d,x,v,_){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=bc(v,d.mode,_),x.return=d,x):(x=r(x,v.children||[]),x.return=d,x)}function c(d,x,v,_,C){return x===null||x.tag!==7?(x=Vr(v,d.mode,_,C),x.return=d,x):(x=r(x,v),x.return=d,x)}function f(d,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Cc(""+x,d.mode,v),x.return=d,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ha:return v=jl(x.type,x.key,x.props,null,d.mode,v),v.ref=Ls(d,null,x),v.return=d,v;case Po:return x=bc(x,d.mode,v),x.return=d,x;case Ki:var _=x._init;return f(d,_(x._payload),v)}if(Gs(x)||As(x))return x=Vr(x,d.mode,v,null),x.return=d,x;Ja(d,x)}return null}function h(d,x,v,_){var C=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(d,x,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ha:return v.key===C?l(d,x,v,_):null;case Po:return v.key===C?u(d,x,v,_):null;case Ki:return C=v._init,h(d,x,C(v._payload),_)}if(Gs(v)||As(v))return C!==null?null:c(d,x,v,_,null);Ja(d,v)}return null}function p(d,x,v,_,C){if(typeof _=="string"&&_!==""||typeof _=="number")return d=d.get(v)||null,a(x,d,""+_,C);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ha:return d=d.get(_.key===null?v:_.key)||null,l(x,d,_,C);case Po:return d=d.get(_.key===null?v:_.key)||null,u(x,d,_,C);case Ki:var E=_._init;return p(d,x,v,E(_._payload),C)}if(Gs(_)||As(_))return d=d.get(v)||null,c(x,d,_,C,null);Ja(x,_)}return null}function g(d,x,v,_){for(var C=null,E=null,T=x,P=x=0,M=null;T!==null&&P<v.length;P++){T.index>P?(M=T,T=null):M=T.sibling;var A=h(d,T,v[P],_);if(A===null){T===null&&(T=M);break}t&&T&&A.alternate===null&&e(d,T),x=o(A,x,P),E===null?C=A:E.sibling=A,E=A,T=M}if(P===v.length)return n(d,T),ft&&Pr(d,P),C;if(T===null){for(;P<v.length;P++)T=f(d,v[P],_),T!==null&&(x=o(T,x,P),E===null?C=T:E.sibling=T,E=T);return ft&&Pr(d,P),C}for(T=i(d,T);P<v.length;P++)M=p(T,d,P,v[P],_),M!==null&&(t&&M.alternate!==null&&T.delete(M.key===null?P:M.key),x=o(M,x,P),E===null?C=M:E.sibling=M,E=M);return t&&T.forEach(function(O){return e(d,O)}),ft&&Pr(d,P),C}function y(d,x,v,_){var C=As(v);if(typeof C!="function")throw Error(ce(150));if(v=C.call(v),v==null)throw Error(ce(151));for(var E=C=null,T=x,P=x=0,M=null,A=v.next();T!==null&&!A.done;P++,A=v.next()){T.index>P?(M=T,T=null):M=T.sibling;var O=h(d,T,A.value,_);if(O===null){T===null&&(T=M);break}t&&T&&O.alternate===null&&e(d,T),x=o(O,x,P),E===null?C=O:E.sibling=O,E=O,T=M}if(A.done)return n(d,T),ft&&Pr(d,P),C;if(T===null){for(;!A.done;P++,A=v.next())A=f(d,A.value,_),A!==null&&(x=o(A,x,P),E===null?C=A:E.sibling=A,E=A);return ft&&Pr(d,P),C}for(T=i(d,T);!A.done;P++,A=v.next())A=p(T,d,P,A.value,_),A!==null&&(t&&A.alternate!==null&&T.delete(A.key===null?P:A.key),x=o(A,x,P),E===null?C=A:E.sibling=A,E=A);return t&&T.forEach(function(X){return e(d,X)}),ft&&Pr(d,P),C}function m(d,x,v,_){if(typeof v=="object"&&v!==null&&v.type===Lo&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ha:e:{for(var C=v.key,E=x;E!==null;){if(E.key===C){if(C=v.type,C===Lo){if(E.tag===7){n(d,E.sibling),x=r(E,v.props.children),x.return=d,d=x;break e}}else if(E.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ki&&Ap(C)===E.type){n(d,E.sibling),x=r(E,v.props),x.ref=Ls(d,E,v),x.return=d,d=x;break e}n(d,E);break}else e(d,E);E=E.sibling}v.type===Lo?(x=Vr(v.props.children,d.mode,_,v.key),x.return=d,d=x):(_=jl(v.type,v.key,v.props,null,d.mode,_),_.ref=Ls(d,x,v),_.return=d,d=_)}return s(d);case Po:e:{for(E=v.key;x!==null;){if(x.key===E)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(d,x.sibling),x=r(x,v.children||[]),x.return=d,d=x;break e}else{n(d,x);break}else e(d,x);x=x.sibling}x=bc(v,d.mode,_),x.return=d,d=x}return s(d);case Ki:return E=v._init,m(d,x,E(v._payload),_)}if(Gs(v))return g(d,x,v,_);if(As(v))return y(d,x,v,_);Ja(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(d,x.sibling),x=r(x,v),x.return=d,d=x):(n(d,x),x=Cc(v,d.mode,_),x.return=d,d=x),s(d)):n(d,x)}return m}var ss=uv(!0),cv=uv(!1),lu=Sr(null),uu=null,ko=null,Qf=null;function eh(){Qf=ko=uu=null}function th(t){var e=lu.current;ct(lu),t._currentValue=e}function $d(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ko(t,e){uu=t,Qf=ko=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pn=!0),t.firstContext=null)}function Wn(t){var e=t._currentValue;if(Qf!==t)if(t={context:t,memoizedValue:e,next:null},ko===null){if(uu===null)throw Error(ce(308));ko=t,uu.dependencies={lanes:0,firstContext:t}}else ko=ko.next=t;return e}var kr=null;function nh(t){kr===null?kr=[t]:kr.push(t)}function dv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,nh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Bi(t,i)}function Bi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zi=!1;function ih(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ui(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ur(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Bi(t,n)}return r=i.interleaved,r===null?(e.next=e,nh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Bi(t,n)}function Bl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Gf(t,n)}}function Rp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function cu(t,e,n,i){var r=t.updateQueue;Zi=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=r.baseState;s=0,c=u=l=null,a=o;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,y=a;switch(h=e,p=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){f=g.call(p,f,h);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,h=typeof g=="function"?g.call(p,f,h):g,h==null)break e;f=_t({},f,h);break e;case 2:Zi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,s|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Kr|=s,t.lanes=s,t.memoizedState=f}}function Cp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var Ia={},vi=Sr(Ia),ga=Sr(Ia),va=Sr(Ia);function Br(t){if(t===Ia)throw Error(ce(174));return t}function rh(t,e){switch(at(va,e),at(ga,t),at(vi,Ia),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Rd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Rd(e,t)}ct(vi),at(vi,e)}function as(){ct(vi),ct(ga),ct(va)}function hv(t){Br(va.current);var e=Br(vi.current),n=Rd(e,t.type);e!==n&&(at(ga,t),at(vi,n))}function oh(t){ga.current===t&&(ct(vi),ct(ga))}var mt=Sr(0);function du(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ec=[];function sh(){for(var t=0;t<Ec.length;t++)Ec[t]._workInProgressVersionPrimary=null;Ec.length=0}var Hl=Vi.ReactCurrentDispatcher,Mc=Vi.ReactCurrentBatchConfig,qr=0,vt=null,bt=null,Ft=null,fu=!1,Zs=!1,_a=0,gS=0;function $t(){throw Error(ce(321))}function ah(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ai(t[n],e[n]))return!1;return!0}function lh(t,e,n,i,r,o){if(qr=o,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Hl.current=t===null||t.memoizedState===null?xS:SS,t=n(i,r),Zs){o=0;do{if(Zs=!1,_a=0,25<=o)throw Error(ce(301));o+=1,Ft=bt=null,e.updateQueue=null,Hl.current=ES,t=n(i,r)}while(Zs)}if(Hl.current=hu,e=bt!==null&&bt.next!==null,qr=0,Ft=bt=vt=null,fu=!1,e)throw Error(ce(300));return t}function uh(){var t=_a!==0;return _a=0,t}function ci(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?vt.memoizedState=Ft=t:Ft=Ft.next=t,Ft}function Xn(){if(bt===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=Ft===null?vt.memoizedState:Ft.next;if(e!==null)Ft=e,bt=t;else{if(t===null)throw Error(ce(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Ft===null?vt.memoizedState=Ft=t:Ft=Ft.next=t}return Ft}function ya(t,e){return typeof e=="function"?e(t):e}function wc(t){var e=Xn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=bt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((qr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=i):l=l.next=f,vt.lanes|=c,Kr|=c}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=a,ai(i,e.memoizedState)||(pn=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,vt.lanes|=o,Kr|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Tc(t){var e=Xn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);ai(o,e.memoizedState)||(pn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function pv(){}function mv(t,e){var n=vt,i=Xn(),r=e(),o=!ai(i.memoizedState,r);if(o&&(i.memoizedState=r,pn=!0),i=i.queue,ch(_v.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Ft!==null&&Ft.memoizedState.tag&1){if(n.flags|=2048,xa(9,vv.bind(null,n,i,r,e),void 0,null),Bt===null)throw Error(ce(349));qr&30||gv(n,e,r)}return r}function gv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function vv(t,e,n,i){e.value=n,e.getSnapshot=i,yv(e)&&xv(t)}function _v(t,e,n){return n(function(){yv(e)&&xv(t)})}function yv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ai(t,n)}catch{return!0}}function xv(t){var e=Bi(t,1);e!==null&&si(e,t,1,-1)}function bp(t){var e=ci();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:t},e.queue=t,t=t.dispatch=yS.bind(null,vt,t),[e.memoizedState,t]}function xa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Sv(){return Xn().memoizedState}function Gl(t,e,n,i){var r=ci();vt.flags|=t,r.memoizedState=xa(1|e,n,void 0,i===void 0?null:i)}function Uu(t,e,n,i){var r=Xn();i=i===void 0?null:i;var o=void 0;if(bt!==null){var s=bt.memoizedState;if(o=s.destroy,i!==null&&ah(i,s.deps)){r.memoizedState=xa(e,n,o,i);return}}vt.flags|=t,r.memoizedState=xa(1|e,n,o,i)}function Pp(t,e){return Gl(8390656,8,t,e)}function ch(t,e){return Uu(2048,8,t,e)}function Ev(t,e){return Uu(4,2,t,e)}function Mv(t,e){return Uu(4,4,t,e)}function wv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Tv(t,e,n){return n=n!=null?n.concat([t]):null,Uu(4,4,wv.bind(null,e,t),n)}function dh(){}function Av(t,e){var n=Xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ah(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Rv(t,e){var n=Xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ah(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Cv(t,e,n){return qr&21?(ai(n,e)||(n=I0(),vt.lanes|=n,Kr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pn=!0),t.memoizedState=n)}function vS(t,e){var n=Qe;Qe=n!==0&&4>n?n:4,t(!0);var i=Mc.transition;Mc.transition={};try{t(!1),e()}finally{Qe=n,Mc.transition=i}}function bv(){return Xn().memoizedState}function _S(t,e,n){var i=dr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Pv(t))Lv(e,n);else if(n=dv(t,e,n,i),n!==null){var r=ln();si(n,t,i,r),Dv(n,e,i)}}function yS(t,e,n){var i=dr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pv(t))Lv(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,ai(a,s)){var l=e.interleaved;l===null?(r.next=r,nh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=dv(t,e,r,i),n!==null&&(r=ln(),si(n,t,i,r),Dv(n,e,i))}}function Pv(t){var e=t.alternate;return t===vt||e!==null&&e===vt}function Lv(t,e){Zs=fu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Dv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Gf(t,n)}}var hu={readContext:Wn,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},xS={readContext:Wn,useCallback:function(t,e){return ci().memoizedState=[t,e===void 0?null:e],t},useContext:Wn,useEffect:Pp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Gl(4194308,4,wv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Gl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Gl(4,2,t,e)},useMemo:function(t,e){var n=ci();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ci();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=_S.bind(null,vt,t),[i.memoizedState,t]},useRef:function(t){var e=ci();return t={current:t},e.memoizedState=t},useState:bp,useDebugValue:dh,useDeferredValue:function(t){return ci().memoizedState=t},useTransition:function(){var t=bp(!1),e=t[0];return t=vS.bind(null,t[1]),ci().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=vt,r=ci();if(ft){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),Bt===null)throw Error(ce(349));qr&30||gv(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,Pp(_v.bind(null,i,o,t),[t]),i.flags|=2048,xa(9,vv.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=ci(),e=Bt.identifierPrefix;if(ft){var n=Ii,i=Di;n=(i&~(1<<32-oi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=_a++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=gS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},SS={readContext:Wn,useCallback:Av,useContext:Wn,useEffect:ch,useImperativeHandle:Tv,useInsertionEffect:Ev,useLayoutEffect:Mv,useMemo:Rv,useReducer:wc,useRef:Sv,useState:function(){return wc(ya)},useDebugValue:dh,useDeferredValue:function(t){var e=Xn();return Cv(e,bt.memoizedState,t)},useTransition:function(){var t=wc(ya)[0],e=Xn().memoizedState;return[t,e]},useMutableSource:pv,useSyncExternalStore:mv,useId:bv,unstable_isNewReconciler:!1},ES={readContext:Wn,useCallback:Av,useContext:Wn,useEffect:ch,useImperativeHandle:Tv,useInsertionEffect:Ev,useLayoutEffect:Mv,useMemo:Rv,useReducer:Tc,useRef:Sv,useState:function(){return Tc(ya)},useDebugValue:dh,useDeferredValue:function(t){var e=Xn();return bt===null?e.memoizedState=t:Cv(e,bt.memoizedState,t)},useTransition:function(){var t=Tc(ya)[0],e=Xn().memoizedState;return[t,e]},useMutableSource:pv,useSyncExternalStore:mv,useId:bv,unstable_isNewReconciler:!1};function Zn(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Yd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ou={isMounted:function(t){return(t=t._reactInternals)?io(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=ln(),r=dr(t),o=Ui(i,r);o.payload=e,n!=null&&(o.callback=n),e=ur(t,o,r),e!==null&&(si(e,t,r,i),Bl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=ln(),r=dr(t),o=Ui(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=ur(t,o,r),e!==null&&(si(e,t,r,i),Bl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ln(),i=dr(t),r=Ui(n,i);r.tag=2,e!=null&&(r.callback=e),e=ur(t,r,i),e!==null&&(si(e,t,i,n),Bl(e,t,i))}};function Lp(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!fa(n,i)||!fa(r,o):!0}function Iv(t,e,n){var i=!1,r=vr,o=e.contextType;return typeof o=="object"&&o!==null?o=Wn(o):(r=gn(e)?$r:en.current,i=e.contextTypes,o=(i=i!=null)?rs(t,r):vr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ou,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function Dp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ou.enqueueReplaceState(e,e.state,null)}function qd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},ih(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Wn(o):(o=gn(e)?$r:en.current,r.context=rs(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Yd(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ou.enqueueReplaceState(r,r.state,null),cu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ls(t,e){try{var n="",i=e;do n+=Ky(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function Ac(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Kd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var MS=typeof WeakMap=="function"?WeakMap:Map;function Nv(t,e,n){n=Ui(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){mu||(mu=!0,af=i),Kd(t,e)},n}function Uv(t,e,n){n=Ui(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Kd(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Kd(t,e),typeof i!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Ip(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new MS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=FS.bind(null,t,e,n),e.then(t,t))}function Np(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Up(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ui(-1,1),e.tag=2,ur(n,e,1))),n.lanes|=1),t)}var wS=Vi.ReactCurrentOwner,pn=!1;function sn(t,e,n,i){e.child=t===null?cv(e,null,n,i):ss(e,t.child,n,i)}function Op(t,e,n,i,r){n=n.render;var o=e.ref;return Ko(e,r),i=lh(t,e,n,i,o,r),n=uh(),t!==null&&!pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Hi(t,e,r)):(ft&&n&&Kf(e),e.flags|=1,sn(t,e,i,r),e.child)}function Fp(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!yh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Ov(t,e,o,i,r)):(t=jl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:fa,n(s,i)&&t.ref===e.ref)return Hi(t,e,r)}return e.flags|=1,t=fr(o,i),t.ref=e.ref,t.return=e,e.child=t}function Ov(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(fa(o,i)&&t.ref===e.ref)if(pn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(pn=!0);else return e.lanes=t.lanes,Hi(t,e,r)}return Zd(t,e,n,i,r)}function Fv(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(Ho,Mn),Mn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,at(Ho,Mn),Mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,at(Ho,Mn),Mn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,at(Ho,Mn),Mn|=i;return sn(t,e,r,n),e.child}function zv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Zd(t,e,n,i,r){var o=gn(n)?$r:en.current;return o=rs(e,o),Ko(e,r),n=lh(t,e,n,i,o,r),i=uh(),t!==null&&!pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Hi(t,e,r)):(ft&&i&&Kf(e),e.flags|=1,sn(t,e,n,r),e.child)}function zp(t,e,n,i,r){if(gn(n)){var o=!0;ou(e)}else o=!1;if(Ko(e,r),e.stateNode===null)Vl(t,e),Iv(e,n,i),qd(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Wn(u):(u=gn(n)?$r:en.current,u=rs(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Dp(e,s,i,u),Zi=!1;var h=e.memoizedState;s.state=h,cu(e,i,s,r),l=e.memoizedState,a!==i||h!==l||mn.current||Zi?(typeof c=="function"&&(Yd(e,n,c,i),l=e.memoizedState),(a=Zi||Lp(e,n,a,i,h,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,fv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Zn(e.type,a),s.props=u,f=e.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Wn(l):(l=gn(n)?$r:en.current,l=rs(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Dp(e,s,i,l),Zi=!1,h=e.memoizedState,s.state=h,cu(e,i,s,r);var g=e.memoizedState;a!==f||h!==g||mn.current||Zi?(typeof p=="function"&&(Yd(e,n,p,i),g=e.memoizedState),(u=Zi||Lp(e,n,u,i,h,g,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,g,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,g,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),s.props=i,s.state=g,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Jd(t,e,n,i,o,r)}function Jd(t,e,n,i,r,o){zv(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&Mp(e,n,!1),Hi(t,e,o);i=e.stateNode,wS.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=ss(e,t.child,null,o),e.child=ss(e,null,a,o)):sn(t,e,a,o),e.memoizedState=i.state,r&&Mp(e,n,!0),e.child}function kv(t){var e=t.stateNode;e.pendingContext?Ep(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ep(t,e.context,!1),rh(t,e.containerInfo)}function kp(t,e,n,i,r){return os(),Jf(r),e.flags|=256,sn(t,e,n,i),e.child}var Qd={dehydrated:null,treeContext:null,retryLane:0};function ef(t){return{baseLanes:t,cachePool:null,transitions:null}}function Bv(t,e,n){var i=e.pendingProps,r=mt.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),at(mt,r&1),t===null)return jd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=ku(s,i,0,null),t=Vr(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=ef(n),e.memoizedState=Qd,t):fh(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return TS(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=fr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=fr(a,o):(o=Vr(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?ef(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Qd,i}return o=t.child,t=o.sibling,i=fr(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function fh(t,e){return e=ku({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Qa(t,e,n,i){return i!==null&&Jf(i),ss(e,t.child,null,n),t=fh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function TS(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=Ac(Error(ce(422))),Qa(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=ku({mode:"visible",children:i.children},r,0,null),o=Vr(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&ss(e,t.child,null,s),e.child.memoizedState=ef(s),e.memoizedState=Qd,o);if(!(e.mode&1))return Qa(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(ce(419)),i=Ac(o,i,void 0),Qa(t,e,s,i)}if(a=(s&t.childLanes)!==0,pn||a){if(i=Bt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Bi(t,r),si(i,t,r,-1))}return _h(),i=Ac(Error(ce(421))),Qa(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=zS.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,wn=lr(r.nextSibling),Tn=e,ft=!0,Qn=null,t!==null&&(Dn[In++]=Di,Dn[In++]=Ii,Dn[In++]=Yr,Di=t.id,Ii=t.overflow,Yr=e),e=fh(e,i.children),e.flags|=4096,e)}function Bp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),$d(t.return,e,n)}function Rc(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function Hv(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(sn(t,e,i.children,n),i=mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bp(t,n,e);else if(t.tag===19)Bp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(at(mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&du(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Rc(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&du(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Rc(e,!0,n,null,o);break;case"together":Rc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Vl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Hi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Kr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function AS(t,e,n){switch(e.tag){case 3:kv(e),os();break;case 5:hv(e);break;case 1:gn(e.type)&&ou(e);break;case 4:rh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;at(lu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(at(mt,mt.current&1),e.flags|=128,null):n&e.child.childLanes?Bv(t,e,n):(at(mt,mt.current&1),t=Hi(t,e,n),t!==null?t.sibling:null);at(mt,mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Hv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),at(mt,mt.current),i)break;return null;case 22:case 23:return e.lanes=0,Fv(t,e,n)}return Hi(t,e,n)}var Gv,tf,Vv,Wv;Gv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};tf=function(){};Vv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Br(vi.current);var o=null;switch(n){case"input":r=Md(t,r),i=Md(t,i),o=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),o=[];break;case"textarea":r=Ad(t,r),i=Ad(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=iu)}Cd(n,i);var s;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(oa.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(oa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&lt("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};Wv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ds(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function RS(t,e,n){var i=e.pendingProps;switch(Zf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return gn(e.type)&&ru(),Yt(e),null;case 3:return i=e.stateNode,as(),ct(mn),ct(en),sh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Za(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qn!==null&&(cf(Qn),Qn=null))),tf(t,e),Yt(e),null;case 5:oh(e);var r=Br(va.current);if(n=e.type,t!==null&&e.stateNode!=null)Vv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return Yt(e),null}if(t=Br(vi.current),Za(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[pi]=e,i[ma]=o,t=(e.mode&1)!==0,n){case"dialog":lt("cancel",i),lt("close",i);break;case"iframe":case"object":case"embed":lt("load",i);break;case"video":case"audio":for(r=0;r<Ws.length;r++)lt(Ws[r],i);break;case"source":lt("error",i);break;case"img":case"image":case"link":lt("error",i),lt("load",i);break;case"details":lt("toggle",i);break;case"input":qh(i,o),lt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},lt("invalid",i);break;case"textarea":Zh(i,o),lt("invalid",i)}Cd(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ka(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ka(i.textContent,a,t),r=["children",""+a]):oa.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&lt("scroll",i)}switch(n){case"input":Ga(i),Kh(i,o,!0);break;case"textarea":Ga(i),Jh(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=iu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=_0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[pi]=e,t[ma]=i,Gv(t,e,!1,!1),e.stateNode=t;e:{switch(s=bd(n,i),n){case"dialog":lt("cancel",t),lt("close",t),r=i;break;case"iframe":case"object":case"embed":lt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ws.length;r++)lt(Ws[r],t);r=i;break;case"source":lt("error",t),r=i;break;case"img":case"image":case"link":lt("error",t),lt("load",t),r=i;break;case"details":lt("toggle",t),r=i;break;case"input":qh(t,i),r=Md(t,i),lt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),lt("invalid",t);break;case"textarea":Zh(t,i),r=Ad(t,i),lt("invalid",t);break;default:r=i}Cd(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?S0(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&y0(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&sa(t,l):typeof l=="number"&&sa(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(oa.hasOwnProperty(o)?l!=null&&o==="onScroll"&&lt("scroll",t):l!=null&&Of(t,o,l,s))}switch(n){case"input":Ga(t),Kh(t,i,!1);break;case"textarea":Ga(t),Jh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+gr(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?jo(t,!!i.multiple,o,!1):i.defaultValue!=null&&jo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=iu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yt(e),null;case 6:if(t&&e.stateNode!=null)Wv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=Br(va.current),Br(vi.current),Za(e)){if(i=e.stateNode,n=e.memoizedProps,i[pi]=e,(o=i.nodeValue!==n)&&(t=Tn,t!==null))switch(t.tag){case 3:Ka(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ka(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[pi]=e,e.stateNode=i}return Yt(e),null;case 13:if(ct(mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&wn!==null&&e.mode&1&&!(e.flags&128))lv(),os(),e.flags|=98560,o=!1;else if(o=Za(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(ce(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(ce(317));o[pi]=e}else os(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yt(e),o=!1}else Qn!==null&&(cf(Qn),Qn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||mt.current&1?Pt===0&&(Pt=3):_h())),e.updateQueue!==null&&(e.flags|=4),Yt(e),null);case 4:return as(),tf(t,e),t===null&&ha(e.stateNode.containerInfo),Yt(e),null;case 10:return th(e.type._context),Yt(e),null;case 17:return gn(e.type)&&ru(),Yt(e),null;case 19:if(ct(mt),o=e.memoizedState,o===null)return Yt(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)Ds(o,!1);else{if(Pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=du(t),s!==null){for(e.flags|=128,Ds(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return at(mt,mt.current&1|2),e.child}t=t.sibling}o.tail!==null&&Tt()>us&&(e.flags|=128,i=!0,Ds(o,!1),e.lanes=4194304)}else{if(!i)if(t=du(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ds(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ft)return Yt(e),null}else 2*Tt()-o.renderingStartTime>us&&n!==1073741824&&(e.flags|=128,i=!0,Ds(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Tt(),e.sibling=null,n=mt.current,at(mt,i?n&1|2:n&1),e):(Yt(e),null);case 22:case 23:return vh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Mn&1073741824&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function CS(t,e){switch(Zf(e),e.tag){case 1:return gn(e.type)&&ru(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return as(),ct(mn),ct(en),sh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return oh(e),null;case 13:if(ct(mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));os()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ct(mt),null;case 4:return as(),null;case 10:return th(e.type._context),null;case 22:case 23:return vh(),null;case 24:return null;default:return null}}var el=!1,Jt=!1,bS=typeof WeakSet=="function"?WeakSet:Set,we=null;function Bo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){St(t,e,i)}else n.current=null}function nf(t,e,n){try{n()}catch(i){St(t,e,i)}}var Hp=!1;function PS(t,e){if(kd=eu,t=q0(),qf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=s+r),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++u===r&&(a=s),h===o&&++c===i&&(l=s),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bd={focusedElem:t,selectionRange:n},eu=!1,we=e;we!==null;)if(e=we,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,we=t;else for(;we!==null;){e=we;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,m=g.memoizedState,d=e.stateNode,x=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:Zn(e.type,y),m);d.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(_){St(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,we=t;break}we=e.return}return g=Hp,Hp=!1,g}function Js(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&nf(e,n,o)}r=r.next}while(r!==i)}}function Fu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function rf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Xv(t){var e=t.alternate;e!==null&&(t.alternate=null,Xv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pi],delete e[ma],delete e[Vd],delete e[fS],delete e[hS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jv(t){return t.tag===5||t.tag===3||t.tag===4}function Gp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function of(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=iu));else if(i!==4&&(t=t.child,t!==null))for(of(t,e,n),t=t.sibling;t!==null;)of(t,e,n),t=t.sibling}function sf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(sf(t,e,n),t=t.sibling;t!==null;)sf(t,e,n),t=t.sibling}var Gt=null,Jn=!1;function Wi(t,e,n){for(n=n.child;n!==null;)$v(t,e,n),n=n.sibling}function $v(t,e,n){if(gi&&typeof gi.onCommitFiberUnmount=="function")try{gi.onCommitFiberUnmount(bu,n)}catch{}switch(n.tag){case 5:Jt||Bo(n,e);case 6:var i=Gt,r=Jn;Gt=null,Wi(t,e,n),Gt=i,Jn=r,Gt!==null&&(Jn?(t=Gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Gt.removeChild(n.stateNode));break;case 18:Gt!==null&&(Jn?(t=Gt,n=n.stateNode,t.nodeType===8?xc(t.parentNode,n):t.nodeType===1&&xc(t,n),ca(t)):xc(Gt,n.stateNode));break;case 4:i=Gt,r=Jn,Gt=n.stateNode.containerInfo,Jn=!0,Wi(t,e,n),Gt=i,Jn=r;break;case 0:case 11:case 14:case 15:if(!Jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&nf(n,e,s),r=r.next}while(r!==i)}Wi(t,e,n);break;case 1:if(!Jt&&(Bo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){St(n,e,a)}Wi(t,e,n);break;case 21:Wi(t,e,n);break;case 22:n.mode&1?(Jt=(i=Jt)||n.memoizedState!==null,Wi(t,e,n),Jt=i):Wi(t,e,n);break;default:Wi(t,e,n)}}function Vp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new bS),e.forEach(function(i){var r=kS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function $n(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Gt=a.stateNode,Jn=!1;break e;case 3:Gt=a.stateNode.containerInfo,Jn=!0;break e;case 4:Gt=a.stateNode.containerInfo,Jn=!0;break e}a=a.return}if(Gt===null)throw Error(ce(160));$v(o,s,r),Gt=null,Jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){St(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Yv(e,t),e=e.sibling}function Yv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($n(e,t),ui(t),i&4){try{Js(3,t,t.return),Fu(3,t)}catch(y){St(t,t.return,y)}try{Js(5,t,t.return)}catch(y){St(t,t.return,y)}}break;case 1:$n(e,t),ui(t),i&512&&n!==null&&Bo(n,n.return);break;case 5:if($n(e,t),ui(t),i&512&&n!==null&&Bo(n,n.return),t.flags&32){var r=t.stateNode;try{sa(r,"")}catch(y){St(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&g0(r,o),bd(a,s);var u=bd(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?S0(r,f):c==="dangerouslySetInnerHTML"?y0(r,f):c==="children"?sa(r,f):Of(r,c,f,u)}switch(a){case"input":wd(r,o);break;case"textarea":v0(r,o);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?jo(r,!!o.multiple,p,!1):h!==!!o.multiple&&(o.defaultValue!=null?jo(r,!!o.multiple,o.defaultValue,!0):jo(r,!!o.multiple,o.multiple?[]:"",!1))}r[ma]=o}catch(y){St(t,t.return,y)}}break;case 6:if($n(e,t),ui(t),i&4){if(t.stateNode===null)throw Error(ce(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(y){St(t,t.return,y)}}break;case 3:if($n(e,t),ui(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ca(e.containerInfo)}catch(y){St(t,t.return,y)}break;case 4:$n(e,t),ui(t);break;case 13:$n(e,t),ui(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(mh=Tt())),i&4&&Vp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Jt=(u=Jt)||c,$n(e,t),Jt=u):$n(e,t),ui(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(we=t,c=t.child;c!==null;){for(f=we=c;we!==null;){switch(h=we,p=h.child,h.tag){case 0:case 11:case 14:case 15:Js(4,h,h.return);break;case 1:Bo(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){St(i,n,y)}}break;case 5:Bo(h,h.return);break;case 22:if(h.memoizedState!==null){Xp(f);continue}}p!==null?(p.return=h,we=p):Xp(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=x0("display",s))}catch(y){St(t,t.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){St(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:$n(e,t),ui(t),i&4&&Vp(t);break;case 21:break;default:$n(e,t),ui(t)}}function ui(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(jv(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(sa(r,""),i.flags&=-33);var o=Gp(t);sf(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=Gp(t);of(t,a,s);break;default:throw Error(ce(161))}}catch(l){St(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function LS(t,e,n){we=t,qv(t)}function qv(t,e,n){for(var i=(t.mode&1)!==0;we!==null;){var r=we,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||el;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Jt;a=el;var u=Jt;if(el=s,(Jt=l)&&!u)for(we=r;we!==null;)s=we,l=s.child,s.tag===22&&s.memoizedState!==null?jp(r):l!==null?(l.return=s,we=l):jp(r);for(;o!==null;)we=o,qv(o),o=o.sibling;we=r,el=a,Jt=u}Wp(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,we=o):Wp(t)}}function Wp(t){for(;we!==null;){var e=we;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Jt||Fu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Cp(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Cp(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&ca(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}Jt||e.flags&512&&rf(e)}catch(h){St(e,e.return,h)}}if(e===t){we=null;break}if(n=e.sibling,n!==null){n.return=e.return,we=n;break}we=e.return}}function Xp(t){for(;we!==null;){var e=we;if(e===t){we=null;break}var n=e.sibling;if(n!==null){n.return=e.return,we=n;break}we=e.return}}function jp(t){for(;we!==null;){var e=we;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Fu(4,e)}catch(l){St(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){St(e,r,l)}}var o=e.return;try{rf(e)}catch(l){St(e,o,l)}break;case 5:var s=e.return;try{rf(e)}catch(l){St(e,s,l)}}}catch(l){St(e,e.return,l)}if(e===t){we=null;break}var a=e.sibling;if(a!==null){a.return=e.return,we=a;break}we=e.return}}var DS=Math.ceil,pu=Vi.ReactCurrentDispatcher,hh=Vi.ReactCurrentOwner,Gn=Vi.ReactCurrentBatchConfig,Ke=0,Bt=null,Rt=null,Wt=0,Mn=0,Ho=Sr(0),Pt=0,Sa=null,Kr=0,zu=0,ph=0,Qs=null,dn=null,mh=0,us=1/0,Ci=null,mu=!1,af=null,cr=null,tl=!1,tr=null,gu=0,ea=0,lf=null,Wl=-1,Xl=0;function ln(){return Ke&6?Tt():Wl!==-1?Wl:Wl=Tt()}function dr(t){return t.mode&1?Ke&2&&Wt!==0?Wt&-Wt:mS.transition!==null?(Xl===0&&(Xl=I0()),Xl):(t=Qe,t!==0||(t=window.event,t=t===void 0?16:B0(t.type)),t):1}function si(t,e,n,i){if(50<ea)throw ea=0,lf=null,Error(ce(185));Pa(t,n,i),(!(Ke&2)||t!==Bt)&&(t===Bt&&(!(Ke&2)&&(zu|=n),Pt===4&&Qi(t,Wt)),vn(t,i),n===1&&Ke===0&&!(e.mode&1)&&(us=Tt()+500,Nu&&Er()))}function vn(t,e){var n=t.callbackNode;mx(t,e);var i=Ql(t,t===Bt?Wt:0);if(i===0)n!==null&&tp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&tp(n),e===1)t.tag===0?pS($p.bind(null,t)):ov($p.bind(null,t)),cS(function(){!(Ke&6)&&Er()}),n=null;else{switch(N0(i)){case 1:n=Hf;break;case 4:n=L0;break;case 16:n=Jl;break;case 536870912:n=D0;break;default:n=Jl}n=i_(n,Kv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Kv(t,e){if(Wl=-1,Xl=0,Ke&6)throw Error(ce(327));var n=t.callbackNode;if(Zo()&&t.callbackNode!==n)return null;var i=Ql(t,t===Bt?Wt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=vu(t,i);else{e=i;var r=Ke;Ke|=2;var o=Jv();(Bt!==t||Wt!==e)&&(Ci=null,us=Tt()+500,Gr(t,e));do try{US();break}catch(a){Zv(t,a)}while(!0);eh(),pu.current=o,Ke=r,Rt!==null?e=0:(Bt=null,Wt=0,e=Pt)}if(e!==0){if(e===2&&(r=Nd(t),r!==0&&(i=r,e=uf(t,r))),e===1)throw n=Sa,Gr(t,0),Qi(t,i),vn(t,Tt()),n;if(e===6)Qi(t,i);else{if(r=t.current.alternate,!(i&30)&&!IS(r)&&(e=vu(t,i),e===2&&(o=Nd(t),o!==0&&(i=o,e=uf(t,o))),e===1))throw n=Sa,Gr(t,0),Qi(t,i),vn(t,Tt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:Lr(t,dn,Ci);break;case 3:if(Qi(t,i),(i&130023424)===i&&(e=mh+500-Tt(),10<e)){if(Ql(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){ln(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Gd(Lr.bind(null,t,dn,Ci),e);break}Lr(t,dn,Ci);break;case 4:if(Qi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-oi(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=Tt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*DS(i/1960))-i,10<i){t.timeoutHandle=Gd(Lr.bind(null,t,dn,Ci),i);break}Lr(t,dn,Ci);break;case 5:Lr(t,dn,Ci);break;default:throw Error(ce(329))}}}return vn(t,Tt()),t.callbackNode===n?Kv.bind(null,t):null}function uf(t,e){var n=Qs;return t.current.memoizedState.isDehydrated&&(Gr(t,e).flags|=256),t=vu(t,e),t!==2&&(e=dn,dn=n,e!==null&&cf(e)),t}function cf(t){dn===null?dn=t:dn.push.apply(dn,t)}function IS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!ai(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qi(t,e){for(e&=~ph,e&=~zu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-oi(e),i=1<<n;t[n]=-1,e&=~i}}function $p(t){if(Ke&6)throw Error(ce(327));Zo();var e=Ql(t,0);if(!(e&1))return vn(t,Tt()),null;var n=vu(t,e);if(t.tag!==0&&n===2){var i=Nd(t);i!==0&&(e=i,n=uf(t,i))}if(n===1)throw n=Sa,Gr(t,0),Qi(t,e),vn(t,Tt()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Lr(t,dn,Ci),vn(t,Tt()),null}function gh(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(us=Tt()+500,Nu&&Er())}}function Zr(t){tr!==null&&tr.tag===0&&!(Ke&6)&&Zo();var e=Ke;Ke|=1;var n=Gn.transition,i=Qe;try{if(Gn.transition=null,Qe=1,t)return t()}finally{Qe=i,Gn.transition=n,Ke=e,!(Ke&6)&&Er()}}function vh(){Mn=Ho.current,ct(Ho)}function Gr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,uS(n)),Rt!==null)for(n=Rt.return;n!==null;){var i=n;switch(Zf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ru();break;case 3:as(),ct(mn),ct(en),sh();break;case 5:oh(i);break;case 4:as();break;case 13:ct(mt);break;case 19:ct(mt);break;case 10:th(i.type._context);break;case 22:case 23:vh()}n=n.return}if(Bt=t,Rt=t=fr(t.current,null),Wt=Mn=e,Pt=0,Sa=null,ph=zu=Kr=0,dn=Qs=null,kr!==null){for(e=0;e<kr.length;e++)if(n=kr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}kr=null}return t}function Zv(t,e){do{var n=Rt;try{if(eh(),Hl.current=hu,fu){for(var i=vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}fu=!1}if(qr=0,Ft=bt=vt=null,Zs=!1,_a=0,hh.current=null,n===null||n.return===null){Pt=1,Sa=e,Rt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Wt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Np(s);if(p!==null){p.flags&=-257,Up(p,s,a,o,e),p.mode&1&&Ip(o,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){Ip(o,u,e),_h();break e}l=Error(ce(426))}}else if(ft&&a.mode&1){var m=Np(s);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Up(m,s,a,o,e),Jf(ls(l,a));break e}}o=l=ls(l,a),Pt!==4&&(Pt=2),Qs===null?Qs=[o]:Qs.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var d=Nv(o,l,e);Rp(o,d);break e;case 1:a=l;var x=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(cr===null||!cr.has(v)))){o.flags|=65536,e&=-e,o.lanes|=e;var _=Uv(o,a,e);Rp(o,_);break e}}o=o.return}while(o!==null)}e_(n)}catch(C){e=C,Rt===n&&n!==null&&(Rt=n=n.return);continue}break}while(!0)}function Jv(){var t=pu.current;return pu.current=hu,t===null?hu:t}function _h(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),Bt===null||!(Kr&268435455)&&!(zu&268435455)||Qi(Bt,Wt)}function vu(t,e){var n=Ke;Ke|=2;var i=Jv();(Bt!==t||Wt!==e)&&(Ci=null,Gr(t,e));do try{NS();break}catch(r){Zv(t,r)}while(!0);if(eh(),Ke=n,pu.current=i,Rt!==null)throw Error(ce(261));return Bt=null,Wt=0,Pt}function NS(){for(;Rt!==null;)Qv(Rt)}function US(){for(;Rt!==null&&!sx();)Qv(Rt)}function Qv(t){var e=n_(t.alternate,t,Mn);t.memoizedProps=t.pendingProps,e===null?e_(t):Rt=e,hh.current=null}function e_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=CS(n,e),n!==null){n.flags&=32767,Rt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pt=6,Rt=null;return}}else if(n=RS(n,e,Mn),n!==null){Rt=n;return}if(e=e.sibling,e!==null){Rt=e;return}Rt=e=t}while(e!==null);Pt===0&&(Pt=5)}function Lr(t,e,n){var i=Qe,r=Gn.transition;try{Gn.transition=null,Qe=1,OS(t,e,n,i)}finally{Gn.transition=r,Qe=i}return null}function OS(t,e,n,i){do Zo();while(tr!==null);if(Ke&6)throw Error(ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(gx(t,o),t===Bt&&(Rt=Bt=null,Wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||tl||(tl=!0,i_(Jl,function(){return Zo(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Gn.transition,Gn.transition=null;var s=Qe;Qe=1;var a=Ke;Ke|=4,hh.current=null,PS(t,n),Yv(n,t),nS(Bd),eu=!!kd,Bd=kd=null,t.current=n,LS(n),ax(),Ke=a,Qe=s,Gn.transition=o}else t.current=n;if(tl&&(tl=!1,tr=t,gu=r),o=t.pendingLanes,o===0&&(cr=null),cx(n.stateNode),vn(t,Tt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(mu)throw mu=!1,t=af,af=null,t;return gu&1&&t.tag!==0&&Zo(),o=t.pendingLanes,o&1?t===lf?ea++:(ea=0,lf=t):ea=0,Er(),null}function Zo(){if(tr!==null){var t=N0(gu),e=Gn.transition,n=Qe;try{if(Gn.transition=null,Qe=16>t?16:t,tr===null)var i=!1;else{if(t=tr,tr=null,gu=0,Ke&6)throw Error(ce(331));var r=Ke;for(Ke|=4,we=t.current;we!==null;){var o=we,s=o.child;if(we.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(we=u;we!==null;){var c=we;switch(c.tag){case 0:case 11:case 15:Js(8,c,o)}var f=c.child;if(f!==null)f.return=c,we=f;else for(;we!==null;){c=we;var h=c.sibling,p=c.return;if(Xv(c),c===u){we=null;break}if(h!==null){h.return=p,we=h;break}we=p}}}var g=o.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}we=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,we=s;else e:for(;we!==null;){if(o=we,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Js(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,we=d;break e}we=o.return}}var x=t.current;for(we=x;we!==null;){s=we;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,we=v;else e:for(s=x;we!==null;){if(a=we,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Fu(9,a)}}catch(C){St(a,a.return,C)}if(a===s){we=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,we=_;break e}we=a.return}}if(Ke=r,Er(),gi&&typeof gi.onPostCommitFiberRoot=="function")try{gi.onPostCommitFiberRoot(bu,t)}catch{}i=!0}return i}finally{Qe=n,Gn.transition=e}}return!1}function Yp(t,e,n){e=ls(n,e),e=Nv(t,e,1),t=ur(t,e,1),e=ln(),t!==null&&(Pa(t,1,e),vn(t,e))}function St(t,e,n){if(t.tag===3)Yp(t,t,n);else for(;e!==null;){if(e.tag===3){Yp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(cr===null||!cr.has(i))){t=ls(n,t),t=Uv(e,t,1),e=ur(e,t,1),t=ln(),e!==null&&(Pa(e,1,t),vn(e,t));break}}e=e.return}}function FS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=ln(),t.pingedLanes|=t.suspendedLanes&n,Bt===t&&(Wt&n)===n&&(Pt===4||Pt===3&&(Wt&130023424)===Wt&&500>Tt()-mh?Gr(t,0):ph|=n),vn(t,e)}function t_(t,e){e===0&&(t.mode&1?(e=Xa,Xa<<=1,!(Xa&130023424)&&(Xa=4194304)):e=1);var n=ln();t=Bi(t,e),t!==null&&(Pa(t,e,n),vn(t,n))}function zS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),t_(t,n)}function kS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),t_(t,n)}var n_;n_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mn.current)pn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pn=!1,AS(t,e,n);pn=!!(t.flags&131072)}else pn=!1,ft&&e.flags&1048576&&sv(e,au,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Vl(t,e),t=e.pendingProps;var r=rs(e,en.current);Ko(e,n),r=lh(null,e,i,t,r,n);var o=uh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gn(i)?(o=!0,ou(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ih(e),r.updater=Ou,e.stateNode=r,r._reactInternals=e,qd(e,i,t,n),e=Jd(null,e,i,!0,o,n)):(e.tag=0,ft&&o&&Kf(e),sn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Vl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=HS(i),t=Zn(i,t),r){case 0:e=Zd(null,e,i,t,n);break e;case 1:e=zp(null,e,i,t,n);break e;case 11:e=Op(null,e,i,t,n);break e;case 14:e=Fp(null,e,i,Zn(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),Zd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),zp(t,e,i,r,n);case 3:e:{if(kv(e),t===null)throw Error(ce(387));i=e.pendingProps,o=e.memoizedState,r=o.element,fv(t,e),cu(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=ls(Error(ce(423)),e),e=kp(t,e,i,n,r);break e}else if(i!==r){r=ls(Error(ce(424)),e),e=kp(t,e,i,n,r);break e}else for(wn=lr(e.stateNode.containerInfo.firstChild),Tn=e,ft=!0,Qn=null,n=cv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(os(),i===r){e=Hi(t,e,n);break e}sn(t,e,i,n)}e=e.child}return e;case 5:return hv(e),t===null&&jd(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,Hd(i,r)?s=null:o!==null&&Hd(i,o)&&(e.flags|=32),zv(t,e),sn(t,e,s,n),e.child;case 6:return t===null&&jd(e),null;case 13:return Bv(t,e,n);case 4:return rh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ss(e,null,i,n):sn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),Op(t,e,i,r,n);case 7:return sn(t,e,e.pendingProps,n),e.child;case 8:return sn(t,e,e.pendingProps.children,n),e.child;case 12:return sn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,at(lu,i._currentValue),i._currentValue=s,o!==null)if(ai(o.value,s)){if(o.children===r.children&&!mn.current){e=Hi(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Ui(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),$d(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(ce(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),$d(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}sn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ko(e,n),r=Wn(r),i=i(r),e.flags|=1,sn(t,e,i,n),e.child;case 14:return i=e.type,r=Zn(i,e.pendingProps),r=Zn(i.type,r),Fp(t,e,i,r,n);case 15:return Ov(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),Vl(t,e),e.tag=1,gn(i)?(t=!0,ou(e)):t=!1,Ko(e,n),Iv(e,i,r),qd(e,i,r,n),Jd(null,e,i,!0,t,n);case 19:return Hv(t,e,n);case 22:return Fv(t,e,n)}throw Error(ce(156,e.tag))};function i_(t,e){return P0(t,e)}function BS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zn(t,e,n,i){return new BS(t,e,n,i)}function yh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function HS(t){if(typeof t=="function")return yh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===zf)return 11;if(t===kf)return 14}return 2}function fr(t,e){var n=t.alternate;return n===null?(n=zn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function jl(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")yh(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Lo:return Vr(n.children,r,o,e);case Ff:s=8,r|=8;break;case yd:return t=zn(12,n,e,r|2),t.elementType=yd,t.lanes=o,t;case xd:return t=zn(13,n,e,r),t.elementType=xd,t.lanes=o,t;case Sd:return t=zn(19,n,e,r),t.elementType=Sd,t.lanes=o,t;case h0:return ku(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case d0:s=10;break e;case f0:s=9;break e;case zf:s=11;break e;case kf:s=14;break e;case Ki:s=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=zn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function Vr(t,e,n,i){return t=zn(7,t,i,e),t.lanes=n,t}function ku(t,e,n,i){return t=zn(22,t,i,e),t.elementType=h0,t.lanes=n,t.stateNode={isHidden:!1},t}function Cc(t,e,n){return t=zn(6,t,null,e),t.lanes=n,t}function bc(t,e,n){return e=zn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function GS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=uc(0),this.expirationTimes=uc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function xh(t,e,n,i,r,o,s,a,l){return t=new GS(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=zn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ih(o),t}function VS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Po,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function r_(t){if(!t)return vr;t=t._reactInternals;e:{if(io(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(gn(n))return rv(t,n,e)}return e}function o_(t,e,n,i,r,o,s,a,l){return t=xh(n,i,!0,t,r,o,s,a,l),t.context=r_(null),n=t.current,i=ln(),r=dr(n),o=Ui(i,r),o.callback=e??null,ur(n,o,r),t.current.lanes=r,Pa(t,r,i),vn(t,i),t}function Bu(t,e,n,i){var r=e.current,o=ln(),s=dr(r);return n=r_(n),e.context===null?e.context=n:e.pendingContext=n,e=Ui(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ur(r,e,s),t!==null&&(si(t,r,s,o),Bl(t,r,s)),s}function _u(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Sh(t,e){qp(t,e),(t=t.alternate)&&qp(t,e)}function WS(){return null}var s_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Eh(t){this._internalRoot=t}Hu.prototype.render=Eh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));Bu(t,e,null,null)};Hu.prototype.unmount=Eh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Zr(function(){Bu(null,t,null,null)}),e[ki]=null}};function Hu(t){this._internalRoot=t}Hu.prototype.unstable_scheduleHydration=function(t){if(t){var e=F0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ji.length&&e!==0&&e<Ji[n].priority;n++);Ji.splice(n,0,t),n===0&&k0(t)}};function Mh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Gu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Kp(){}function XS(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=_u(s);o.call(u)}}var s=o_(e,i,t,0,null,!1,!1,"",Kp);return t._reactRootContainer=s,t[ki]=s.current,ha(t.nodeType===8?t.parentNode:t),Zr(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=_u(l);a.call(u)}}var l=xh(t,0,!1,null,null,!1,!1,"",Kp);return t._reactRootContainer=l,t[ki]=l.current,ha(t.nodeType===8?t.parentNode:t),Zr(function(){Bu(e,l,n,i)}),l}function Vu(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=_u(s);a.call(l)}}Bu(e,s,t,r)}else s=XS(n,e,t,r,i);return _u(s)}U0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Vs(e.pendingLanes);n!==0&&(Gf(e,n|1),vn(e,Tt()),!(Ke&6)&&(us=Tt()+500,Er()))}break;case 13:Zr(function(){var i=Bi(t,1);if(i!==null){var r=ln();si(i,t,1,r)}}),Sh(t,1)}};Vf=function(t){if(t.tag===13){var e=Bi(t,134217728);if(e!==null){var n=ln();si(e,t,134217728,n)}Sh(t,134217728)}};O0=function(t){if(t.tag===13){var e=dr(t),n=Bi(t,e);if(n!==null){var i=ln();si(n,t,e,i)}Sh(t,e)}};F0=function(){return Qe};z0=function(t,e){var n=Qe;try{return Qe=t,e()}finally{Qe=n}};Ld=function(t,e,n){switch(e){case"input":if(wd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Iu(i);if(!r)throw Error(ce(90));m0(i),wd(i,r)}}}break;case"textarea":v0(t,n);break;case"select":e=n.value,e!=null&&jo(t,!!n.multiple,e,!1)}};w0=gh;T0=Zr;var jS={usingClientEntryPoint:!1,Events:[Da,Uo,Iu,E0,M0,gh]},Is={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$S={bundleType:Is.bundleType,version:Is.version,rendererPackageName:Is.rendererPackageName,rendererConfig:Is.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=C0(t),t===null?null:t.stateNode},findFiberByHostInstance:Is.findFiberByHostInstance||WS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{bu=nl.inject($S),gi=nl}catch{}}Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jS;Cn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mh(e))throw Error(ce(200));return VS(t,e,null,n)};Cn.createRoot=function(t,e){if(!Mh(t))throw Error(ce(299));var n=!1,i="",r=s_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=xh(t,1,!1,null,null,n,!1,i,r),t[ki]=e.current,ha(t.nodeType===8?t.parentNode:t),new Eh(e)};Cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=C0(e),t=t===null?null:t.stateNode,t};Cn.flushSync=function(t){return Zr(t)};Cn.hydrate=function(t,e,n){if(!Gu(e))throw Error(ce(200));return Vu(null,t,e,!0,n)};Cn.hydrateRoot=function(t,e,n){if(!Mh(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=s_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=o_(e,null,t,1,n??null,r,!1,o,s),t[ki]=e.current,ha(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Hu(e)};Cn.render=function(t,e,n){if(!Gu(e))throw Error(ce(200));return Vu(null,t,e,!1,n)};Cn.unmountComponentAtNode=function(t){if(!Gu(t))throw Error(ce(40));return t._reactRootContainer?(Zr(function(){Vu(null,null,t,!1,function(){t._reactRootContainer=null,t[ki]=null})}),!0):!1};Cn.unstable_batchedUpdates=gh;Cn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Gu(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return Vu(t,e,n,!1,i)};Cn.version="18.3.1-next-f1338f8080-20240426";function a_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a_)}catch(t){console.error(t)}}a_(),a0.exports=Cn;var YS=a0.exports,l_,Zp=YS;l_=Zp.createRoot,Zp.hydrateRoot;async function xs(t,e){const n=await fetch(t,{credentials:"include",...e});let i=null;try{i=await n.json()}catch{}return{ok:n.ok,status:n.status,data:i}}function qS(){return xs("/api/me")}function KS(){return xs("/api/me?view=engineer&list=1")}function ZS(t){return xs("/api/me?view=engineer&projectId="+encodeURIComponent(t))}function JS(t,e){return xs("/api/me",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"engineer_save",projectId:t||void 0,project:e})})}function QS(t){return xs("/api/me",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"engineer_delete",projectId:t})})}function eE(){return xs("/api/create-checkout-session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({kind:"engineer",plan:"annual",return_page:"engineers/index.html"})})}function tE({status:t,t:e}){const[n,i]=Ae.useState(!1),[r,o]=Ae.useState(null);async function s(){i(!0),o(null);const l=await eE();if(l.status===401){window.location.href="/lamsa-auth.html";return}if(!l.ok||!l.data||!l.data.url){o(l.data&&l.data.error||e("Something went wrong, please try again")),i(!1);return}window.location.href=l.data.url}const a=t==="canceled"||t==="past_due"||t==="unpaid";return te.jsxs("div",{style:{maxWidth:480,margin:"80px auto",padding:24,textAlign:"center",fontFamily:"sans-serif"},children:[te.jsx("h1",{style:{fontSize:24,fontWeight:900,marginBottom:8},children:e("Lamsa Engineers")}),te.jsx("p",{style:{color:"#6b7280",marginBottom:24},children:e(a?"Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Design complete floor plans, preview them in 3D, and export real architectural deliverables.")}),te.jsxs("ul",{style:{textAlign:"start",listStyle:"none",padding:0,marginBottom:28,color:"#374151",fontSize:14},children:[te.jsxs("li",{children:["— ",e("Rectangular rooms, doors & windows, single-floor plans")]}),te.jsxs("li",{children:["— ",e("Live 3D preview of your design")]}),te.jsxs("li",{children:["— ",e("Printable floor plan export")]}),te.jsxs("li",{children:["— ",e("Use Lamsa's existing furniture-styling tools per room")]})]}),te.jsxs("div",{style:{fontSize:28,fontWeight:900,marginBottom:4},children:["$250",te.jsxs("span",{style:{fontSize:14,fontWeight:600,color:"#6b7280"},children:[" ",e("/ year")]})]}),te.jsx("div",{style:{fontSize:13,color:"#6b7280",marginBottom:20},children:e("14-day free trial, cancel anytime")}),te.jsx("button",{type:"button",onClick:s,disabled:n,style:{width:"100%",background:"#c9a96e",color:"#1b1e22",border:"none",padding:16,borderRadius:14,fontSize:16,fontWeight:900,cursor:"pointer",opacity:n?.6:1},children:e(n?"Starting…":"Start free trial")}),r&&te.jsx("div",{style:{color:"#e05555",fontSize:13,marginTop:10},children:r})]})}function nE({projects:t,onOpen:e,onCreate:n,onDelete:i,t:r}){return te.jsxs("div",{style:{maxWidth:720,margin:"40px auto",padding:24,fontFamily:"sans-serif"},children:[te.jsxs("a",{href:"/lamsa-bilingual.html",style:{display:"inline-flex",alignItems:"center",gap:6,color:"#6b7280",fontSize:13,fontWeight:700,textDecoration:"none",marginBottom:16},children:["← ",r("Back to Home")]}),te.jsxs("div",{style:{display:"flex",flexWrap:"wrap",rowGap:10,justifyContent:"space-between",alignItems:"center",marginBottom:20},children:[te.jsx("h1",{style:{fontSize:22,fontWeight:900},children:r("Your Projects")}),te.jsxs("button",{type:"button",onClick:n,style:{background:"#c9a96e",color:"#1b1e22",border:"none",padding:"10px 18px",borderRadius:10,fontWeight:800,cursor:"pointer"},children:["+ ",r("New Project")]})]}),t.length===0&&te.jsx("div",{style:{color:"#6b7280",textAlign:"center",padding:40},children:r("No projects yet — create your first one.")}),te.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:14},children:t.map(o=>te.jsxs("div",{style:{border:"1px solid #e5e7eb",borderRadius:12,padding:16,cursor:"pointer"},onClick:()=>e(o.id),children:[te.jsx("div",{style:{fontWeight:800,marginBottom:6},children:o.name}),te.jsx("div",{style:{fontSize:12,color:"#9ca3af",marginBottom:10},children:o.updatedAt?new Date(o.updatedAt).toLocaleDateString():""}),te.jsx("button",{type:"button",onClick:s=>{s.stopPropagation(),i(o.id)},style:{fontSize:12,color:"#e05555",background:"none",border:"none",cursor:"pointer",padding:0},children:r("Delete")})]},o.id))})]})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wh="160",iE=0,Jp=1,rE=2,u_=1,c_=2,Ri=3,_r=0,_n=1,fn=2,hr=0,Jo=1,Qp=2,em=3,tm=4,oE=5,Ur=100,sE=101,aE=102,nm=103,im=104,lE=200,uE=201,cE=202,dE=203,df=204,ff=205,fE=206,hE=207,pE=208,mE=209,gE=210,vE=211,_E=212,yE=213,xE=214,SE=0,EE=1,ME=2,yu=3,wE=4,TE=5,AE=6,RE=7,d_=0,CE=1,bE=2,pr=0,PE=1,LE=2,DE=3,IE=4,NE=5,UE=6,f_=300,cs=301,ds=302,hf=303,pf=304,Wu=306,Jr=1e3,ti=1001,mf=1002,an=1003,rm=1004,Pc=1005,Nn=1006,OE=1007,Ea=1008,mr=1009,FE=1010,zE=1011,Th=1012,h_=1013,nr=1014,ir=1015,Ma=1016,p_=1017,m_=1018,Wr=1020,kE=1021,ni=1023,BE=1024,HE=1025,Xr=1026,fs=1027,GE=1028,g_=1029,VE=1030,v_=1031,__=1033,Lc=33776,Dc=33777,Ic=33778,Nc=33779,om=35840,sm=35841,am=35842,lm=35843,y_=36196,um=37492,cm=37496,dm=37808,fm=37809,hm=37810,pm=37811,mm=37812,gm=37813,vm=37814,_m=37815,ym=37816,xm=37817,Sm=37818,Em=37819,Mm=37820,wm=37821,Uc=36492,Tm=36494,Am=36495,WE=36283,Rm=36284,Cm=36285,bm=36286,x_=3e3,jr=3001,XE=3200,jE=3201,S_=0,$E=1,Fn="",Vt="srgb",Gi="srgb-linear",Ah="display-p3",Xu="display-p3-linear",xu="linear",ut="srgb",Su="rec709",Eu="p3",ao=7680,Pm=519,YE=512,qE=513,KE=514,E_=515,ZE=516,JE=517,QE=518,eM=519,gf=35044,Lm="300 es",vf=1035,Ni=2e3,Mu=2001;class Ss{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oc=Math.PI/180,_f=180/Math.PI;function Oi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[t&255]+qt[t>>8&255]+qt[t>>16&255]+qt[t>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[n&63|128]+qt[n>>8&255]+"-"+qt[n>>16&255]+qt[n>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function Qt(t,e,n){return Math.max(e,Math.min(n,t))}function tM(t,e){return(t%e+e)%e}function Fc(t,e,n){return(1-n)*t+n*e}function Dm(t){return(t&t-1)===0&&t!==0}function yf(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Pi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function nt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class me{constructor(e=0,n=0){me.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,n,i,r,o,s,a,l,u){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u)}set(e,n,i,r,o,s,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=o,c[5]=l,c[6]=i,c[7]=s,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],p=i[5],g=i[8],y=r[0],m=r[3],d=r[6],x=r[1],v=r[4],_=r[7],C=r[2],E=r[5],T=r[8];return o[0]=s*y+a*x+l*C,o[3]=s*m+a*v+l*E,o[6]=s*d+a*_+l*T,o[1]=u*y+c*x+f*C,o[4]=u*m+c*v+f*E,o[7]=u*d+c*_+f*T,o[2]=h*y+p*x+g*C,o[5]=h*m+p*v+g*E,o[8]=h*d+p*_+g*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*s*c-n*a*u-i*o*c+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*s-a*u,h=a*l-c*o,p=u*o-s*l,g=n*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=f*y,e[1]=(r*u-c*i)*y,e[2]=(a*i-r*s)*y,e[3]=h*y,e[4]=(c*n-r*l)*y,e[5]=(r*o-a*n)*y,e[6]=p*y,e[7]=(i*l-u*n)*y,e[8]=(s*n-i*o)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(zc.makeScale(e,n)),this}rotate(e){return this.premultiply(zc.makeRotation(-e)),this}translate(e,n){return this.premultiply(zc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zc=new $e;function M_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function wu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function nM(){const t=wu("canvas");return t.style.display="block",t}const Im={};function ta(t){t in Im||(Im[t]=!0,console.warn(t))}const Nm=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Um=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),il={[Gi]:{transfer:xu,primaries:Su,toReference:t=>t,fromReference:t=>t},[Vt]:{transfer:ut,primaries:Su,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Xu]:{transfer:xu,primaries:Eu,toReference:t=>t.applyMatrix3(Um),fromReference:t=>t.applyMatrix3(Nm)},[Ah]:{transfer:ut,primaries:Eu,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Um),fromReference:t=>t.applyMatrix3(Nm).convertLinearToSRGB()}},iM=new Set([Gi,Xu]),et={enabled:!0,_workingColorSpace:Gi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!iM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=il[e].toReference,r=il[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return il[t].primaries},getTransfer:function(t){return t===Fn?xu:il[t].transfer}};function Qo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function kc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let lo;class w_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{lo===void 0&&(lo=wu("canvas")),lo.width=e.width,lo.height=e.height;const i=lo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=lo}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=wu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Qo(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Qo(n[i]/255)*255):n[i]=Qo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rM=0;class T_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=Oi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Bc(r[s].image)):o.push(Bc(r[s]))}else o=Bc(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function Bc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?w_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oM=0;class yn extends Ss{constructor(e=yn.DEFAULT_IMAGE,n=yn.DEFAULT_MAPPING,i=ti,r=ti,o=Nn,s=Ea,a=ni,l=mr,u=yn.DEFAULT_ANISOTROPY,c=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=Oi(),this.name="",this.source=new T_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(ta("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===jr?Vt:Fn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==f_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jr:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case mf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jr:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case mf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ta("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Vt?jr:x_}set encoding(e){ta("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===jr?Vt:Fn}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=f_;yn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,n=0,i=0,r=1){zt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],p=l[5],g=l[9],y=l[2],m=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+y)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,_=(p+1)/2,C=(d+1)/2,E=(c+h)/4,T=(f+y)/4,P=(g+m)/4;return v>_&&v>C?v<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(v),r=E/i,o=T/i):_>C?_<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(_),i=E/r,o=P/r):C<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(C),i=T/o,r=P/o),this.set(i,r,o,n),this}let x=Math.sqrt((m-g)*(m-g)+(f-y)*(f-y)+(h-c)*(h-c));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(f-y)/x,this.z=(h-c)/x,this.w=Math.acos((u+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sM extends Ss{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new zt(0,0,e,n),this.scissorTest=!1,this.viewport=new zt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(ta("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===jr?Vt:Fn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new yn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new T_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qr extends sM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class A_ extends yn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class aM extends yn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Na{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=o[s+0],p=o[s+1],g=o[s+2],y=o[s+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=g,e[n+3]=y;return}if(f!==y||l!==h||u!==p||c!==g){let m=1-a;const d=l*h+u*p+c*g+f*y,x=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const C=Math.sqrt(v),E=Math.atan2(C,d*x);m=Math.sin(m*E)/C,a=Math.sin(a*E)/C}const _=a*x;if(l=l*m+h*_,u=u*m+p*_,c=c*m+g*_,f=f*m+y*_,m===1-a){const C=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=C,u*=C,c*=C,f*=C}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=o[s],h=o[s+1],p=o[s+2],g=o[s+3];return e[n]=a*g+c*f+l*p-u*h,e[n+1]=l*g+c*h+u*f-a*p,e[n+2]=u*g+c*p+a*h-l*f,e[n+3]=c*g-a*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(o/2),h=l(i/2),p=l(r/2),g=l(o/2);switch(s){case"XYZ":this._x=h*c*f+u*p*g,this._y=u*p*f-h*c*g,this._z=u*c*g+h*p*f,this._w=u*c*f-h*p*g;break;case"YXZ":this._x=h*c*f+u*p*g,this._y=u*p*f-h*c*g,this._z=u*c*g-h*p*f,this._w=u*c*f+h*p*g;break;case"ZXY":this._x=h*c*f-u*p*g,this._y=u*p*f+h*c*g,this._z=u*c*g+h*p*f,this._w=u*c*f-h*p*g;break;case"ZYX":this._x=h*c*f-u*p*g,this._y=u*p*f+h*c*g,this._z=u*c*g-h*p*f,this._w=u*c*f+h*p*g;break;case"YZX":this._x=h*c*f+u*p*g,this._y=u*p*f+h*c*g,this._z=u*c*g-h*p*f,this._w=u*c*f-h*p*g;break;case"XZY":this._x=h*c*f-u*p*g,this._y=u*p*f-h*c*g,this._z=u*c*g+h*p*f,this._w=u*c*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],u=n[2],c=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(o-u)*p,this._z=(s-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(o+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(o-u)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(s-r)/p,this._x=(o+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+s*a+r*u-o*l,this._y=r*c+s*l+o*a-i*u,this._z=o*c+s*u+i*l-r*a,this._w=s*c-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*o+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-n)*c)/u,h=Math.sin(n*c)/u;return this._w=s*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=o*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(o),i*Math.cos(o),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Om.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Om.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=2*(s*r-a*i),c=2*(a*n-o*r),f=2*(o*i-s*n);return this.x=n+l*u+s*f-a*c,this.y=i+l*c+a*u-o*f,this.z=r+l*f+o*c-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hc.copy(this).projectOnVector(e),this.sub(Hc)}reflect(e){return this.sub(Hc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hc=new k,Om=new Na;class Ua{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Yn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Yn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Yn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Yn):Yn.fromBufferAttribute(o,s),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rl.copy(i.boundingBox)),rl.applyMatrix4(e.matrixWorld),this.union(rl)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ns),ol.subVectors(this.max,Ns),uo.subVectors(e.a,Ns),co.subVectors(e.b,Ns),fo.subVectors(e.c,Ns),Xi.subVectors(co,uo),ji.subVectors(fo,co),Tr.subVectors(uo,fo);let n=[0,-Xi.z,Xi.y,0,-ji.z,ji.y,0,-Tr.z,Tr.y,Xi.z,0,-Xi.x,ji.z,0,-ji.x,Tr.z,0,-Tr.x,-Xi.y,Xi.x,0,-ji.y,ji.x,0,-Tr.y,Tr.x,0];return!Gc(n,uo,co,fo,ol)||(n=[1,0,0,0,1,0,0,0,1],!Gc(n,uo,co,fo,ol))?!1:(sl.crossVectors(Xi,ji),n=[sl.x,sl.y,sl.z],Gc(n,uo,co,fo,ol))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ei=[new k,new k,new k,new k,new k,new k,new k,new k],Yn=new k,rl=new Ua,uo=new k,co=new k,fo=new k,Xi=new k,ji=new k,Tr=new k,Ns=new k,ol=new k,sl=new k,Ar=new k;function Gc(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){Ar.fromArray(t,o);const a=r.x*Math.abs(Ar.x)+r.y*Math.abs(Ar.y)+r.z*Math.abs(Ar.z),l=e.dot(Ar),u=n.dot(Ar),c=i.dot(Ar);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const lM=new Ua,Us=new k,Vc=new k;class ju{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):lM.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Us.subVectors(e,this.center);const n=Us.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Us,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Us.copy(e.center).add(Vc)),this.expandByPoint(Us.copy(e.center).sub(Vc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mi=new k,Wc=new k,al=new k,$i=new k,Xc=new k,ll=new k,jc=new k;class R_{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,n),Mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Wc.copy(e).add(n).multiplyScalar(.5),al.copy(n).sub(e).normalize(),$i.copy(this.origin).sub(Wc);const o=e.distanceTo(n)*.5,s=-this.direction.dot(al),a=$i.dot(this.direction),l=-$i.dot(al),u=$i.lengthSq(),c=Math.abs(1-s*s);let f,h,p,g;if(c>0)if(f=s*l-a,h=s*a-l,g=o*c,f>=0)if(h>=-g)if(h<=g){const y=1/c;f*=y,h*=y,p=f*(f+s*h+2*a)+h*(s*f+h+2*l)+u}else h=o,f=Math.max(0,-(s*h+a)),p=-f*f+h*(h+2*l)+u;else h=-o,f=Math.max(0,-(s*h+a)),p=-f*f+h*(h+2*l)+u;else h<=-g?(f=Math.max(0,-(-s*o+a)),h=f>0?-o:Math.min(Math.max(-o,-l),o),p=-f*f+h*(h+2*l)+u):h<=g?(f=0,h=Math.min(Math.max(-o,-l),o),p=h*(h+2*l)+u):(f=Math.max(0,-(s*o+a)),h=f>0?o:Math.min(Math.max(-o,-l),o),p=-f*f+h*(h+2*l)+u);else h=s>0?-o:o,f=Math.max(0,-(s*h+a)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Wc).addScaledVector(al,h),p}intersectSphere(e,n){Mi.subVectors(e.center,this.origin);const i=Mi.dot(this.direction),r=Mi.dot(Mi)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(o=(e.min.y-h.y)*c,s=(e.max.y-h.y)*c):(o=(e.max.y-h.y)*c,s=(e.min.y-h.y)*c),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,n,i,r,o){Xc.subVectors(n,e),ll.subVectors(i,e),jc.crossVectors(Xc,ll);let s=this.direction.dot(jc),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;$i.subVectors(this.origin,e);const l=a*this.direction.dot(ll.crossVectors($i,ll));if(l<0)return null;const u=a*this.direction.dot(Xc.cross($i));if(u<0||l+u>s)return null;const c=-a*$i.dot(jc);return c<0?null:this.at(c/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,n,i,r,o,s,a,l,u,c,f,h,p,g,y,m){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u,c,f,h,p,g,y,m)}set(e,n,i,r,o,s,a,l,u,c,f,h,p,g,y,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=o,d[5]=s,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ho.setFromMatrixColumn(e,0).length(),o=1/ho.setFromMatrixColumn(e,1).length(),s=1/ho.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const h=s*c,p=s*f,g=a*c,y=a*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=p+g*u,n[5]=h-y*u,n[9]=-a*l,n[2]=y-h*u,n[6]=g+p*u,n[10]=s*l}else if(e.order==="YXZ"){const h=l*c,p=l*f,g=u*c,y=u*f;n[0]=h+y*a,n[4]=g*a-p,n[8]=s*u,n[1]=s*f,n[5]=s*c,n[9]=-a,n[2]=p*a-g,n[6]=y+h*a,n[10]=s*l}else if(e.order==="ZXY"){const h=l*c,p=l*f,g=u*c,y=u*f;n[0]=h-y*a,n[4]=-s*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=s*c,n[9]=y-h*a,n[2]=-s*u,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const h=s*c,p=s*f,g=a*c,y=a*f;n[0]=l*c,n[4]=g*u-p,n[8]=h*u+y,n[1]=l*f,n[5]=y*u+h,n[9]=p*u-g,n[2]=-u,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const h=s*l,p=s*u,g=a*l,y=a*u;n[0]=l*c,n[4]=y-h*f,n[8]=g*f+p,n[1]=f,n[5]=s*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*f+g,n[10]=h-y*f}else if(e.order==="XZY"){const h=s*l,p=s*u,g=a*l,y=a*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=h*f+y,n[5]=s*c,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*c,n[10]=y*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uM,e,cM)}lookAt(e,n,i){const r=this.elements;return Sn.subVectors(e,n),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Yi.crossVectors(i,Sn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Yi.crossVectors(i,Sn)),Yi.normalize(),ul.crossVectors(Sn,Yi),r[0]=Yi.x,r[4]=ul.x,r[8]=Sn.x,r[1]=Yi.y,r[5]=ul.y,r[9]=Sn.y,r[2]=Yi.z,r[6]=ul.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],p=i[13],g=i[2],y=i[6],m=i[10],d=i[14],x=i[3],v=i[7],_=i[11],C=i[15],E=r[0],T=r[4],P=r[8],M=r[12],A=r[1],O=r[5],X=r[9],Q=r[13],D=r[2],H=r[6],j=r[10],K=r[14],U=r[3],B=r[7],z=r[11],Z=r[15];return o[0]=s*E+a*A+l*D+u*U,o[4]=s*T+a*O+l*H+u*B,o[8]=s*P+a*X+l*j+u*z,o[12]=s*M+a*Q+l*K+u*Z,o[1]=c*E+f*A+h*D+p*U,o[5]=c*T+f*O+h*H+p*B,o[9]=c*P+f*X+h*j+p*z,o[13]=c*M+f*Q+h*K+p*Z,o[2]=g*E+y*A+m*D+d*U,o[6]=g*T+y*O+m*H+d*B,o[10]=g*P+y*X+m*j+d*z,o[14]=g*M+y*Q+m*K+d*Z,o[3]=x*E+v*A+_*D+C*U,o[7]=x*T+v*O+_*H+C*B,o[11]=x*P+v*X+_*j+C*z,o[15]=x*M+v*Q+_*K+C*Z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],p=e[14],g=e[3],y=e[7],m=e[11],d=e[15];return g*(+o*l*f-r*u*f-o*a*h+i*u*h+r*a*p-i*l*p)+y*(+n*l*p-n*u*h+o*s*h-r*s*p+r*u*c-o*l*c)+m*(+n*u*f-n*a*p-o*s*f+i*s*p+o*a*c-i*u*c)+d*(-r*a*c-n*l*f+n*a*h+r*s*f-i*s*h+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],p=e[11],g=e[12],y=e[13],m=e[14],d=e[15],x=f*m*u-y*h*u+y*l*p-a*m*p-f*l*d+a*h*d,v=g*h*u-c*m*u-g*l*p+s*m*p+c*l*d-s*h*d,_=c*y*u-g*f*u+g*a*p-s*y*p-c*a*d+s*f*d,C=g*f*l-c*y*l-g*a*h+s*y*h+c*a*m-s*f*m,E=n*x+i*v+r*_+o*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=x*T,e[1]=(y*h*o-f*m*o-y*r*p+i*m*p+f*r*d-i*h*d)*T,e[2]=(a*m*o-y*l*o+y*r*u-i*m*u-a*r*d+i*l*d)*T,e[3]=(f*l*o-a*h*o-f*r*u+i*h*u+a*r*p-i*l*p)*T,e[4]=v*T,e[5]=(c*m*o-g*h*o+g*r*p-n*m*p-c*r*d+n*h*d)*T,e[6]=(g*l*o-s*m*o-g*r*u+n*m*u+s*r*d-n*l*d)*T,e[7]=(s*h*o-c*l*o+c*r*u-n*h*u-s*r*p+n*l*p)*T,e[8]=_*T,e[9]=(g*f*o-c*y*o-g*i*p+n*y*p+c*i*d-n*f*d)*T,e[10]=(s*y*o-g*a*o+g*i*u-n*y*u-s*i*d+n*a*d)*T,e[11]=(c*a*o-s*f*o-c*i*u+n*f*u+s*i*p-n*a*p)*T,e[12]=C*T,e[13]=(c*y*r-g*f*r+g*i*h-n*y*h-c*i*m+n*f*m)*T,e[14]=(g*a*r-s*y*r-g*i*l+n*y*l+s*i*m-n*a*m)*T,e[15]=(s*f*r-c*a*r+c*i*l-n*f*l-s*i*h+n*a*h)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,c=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*s,0,u*l-r*a,c*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,u=o+o,c=s+s,f=a+a,h=o*u,p=o*c,g=o*f,y=s*c,m=s*f,d=a*f,x=l*u,v=l*c,_=l*f,C=i.x,E=i.y,T=i.z;return r[0]=(1-(y+d))*C,r[1]=(p+_)*C,r[2]=(g-v)*C,r[3]=0,r[4]=(p-_)*E,r[5]=(1-(h+d))*E,r[6]=(m+x)*E,r[7]=0,r[8]=(g+v)*T,r[9]=(m-x)*T,r[10]=(1-(h+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=ho.set(r[0],r[1],r[2]).length();const s=ho.set(r[4],r[5],r[6]).length(),a=ho.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],qn.copy(this);const u=1/o,c=1/s,f=1/a;return qn.elements[0]*=u,qn.elements[1]*=u,qn.elements[2]*=u,qn.elements[4]*=c,qn.elements[5]*=c,qn.elements[6]*=c,qn.elements[8]*=f,qn.elements[9]*=f,qn.elements[10]*=f,n.setFromRotationMatrix(qn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=Ni){const l=this.elements,u=2*o/(n-e),c=2*o/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,g;if(a===Ni)p=-(s+o)/(s-o),g=-2*s*o/(s-o);else if(a===Mu)p=-s/(s-o),g=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=Ni){const l=this.elements,u=1/(n-e),c=1/(i-r),f=1/(s-o),h=(n+e)*u,p=(i+r)*c;let g,y;if(a===Ni)g=(s+o)*f,y=-2*f;else if(a===Mu)g=o*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ho=new k,qn=new Mt,uM=new k(0,0,0),cM=new k(1,1,1),Yi=new k,ul=new k,Sn=new k,Fm=new Mt,zm=new Na;class $u{constructor(e=0,n=0,i=0,r=$u.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Qt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Fm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return zm.setFromEuler(this),this.setFromQuaternion(zm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$u.DEFAULT_ORDER="XYZ";class C_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dM=0;const km=new k,po=new Na,wi=new Mt,cl=new k,Os=new k,fM=new k,hM=new Na,Bm=new k(1,0,0),Hm=new k(0,1,0),Gm=new k(0,0,1),pM={type:"added"},mM={type:"removed"};class Lt extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new k,n=new $u,i=new Na,r=new k(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new $e}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new C_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return po.setFromAxisAngle(e,n),this.quaternion.multiply(po),this}rotateOnWorldAxis(e,n){return po.setFromAxisAngle(e,n),this.quaternion.premultiply(po),this}rotateX(e){return this.rotateOnAxis(Bm,e)}rotateY(e){return this.rotateOnAxis(Hm,e)}rotateZ(e){return this.rotateOnAxis(Gm,e)}translateOnAxis(e,n){return km.copy(e).applyQuaternion(this.quaternion),this.position.add(km.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Bm,e)}translateY(e){return this.translateOnAxis(Hm,e)}translateZ(e){return this.translateOnAxis(Gm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?cl.copy(e):cl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(Os,cl,this.up):wi.lookAt(cl,Os,this.up),this.quaternion.setFromRotationMatrix(wi),r&&(wi.extractRotation(r.matrixWorld),po.setFromRotationMatrix(wi),this.quaternion.premultiply(po.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(pM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(mM)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,e,fM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,hM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];o(e.shapes,f)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),c=s(e.images),f=s(e.shapes),h=s(e.skeletons),p=s(e.animations),g=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function s(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Lt.DEFAULT_UP=new k(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new k,Ti=new k,$c=new k,Ai=new k,mo=new k,go=new k,Vm=new k,Yc=new k,qc=new k,Kc=new k;let dl=!1;class Un{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Kn.subVectors(e,n),r.cross(Kn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Kn.subVectors(r,n),Ti.subVectors(i,n),$c.subVectors(e,n);const s=Kn.dot(Kn),a=Kn.dot(Ti),l=Kn.dot($c),u=Ti.dot(Ti),c=Ti.dot($c),f=s*u-a*a;if(f===0)return o.set(0,0,0),null;const h=1/f,p=(u*l-a*c)*h,g=(s*c-a*l)*h;return o.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getUV(e,n,i,r,o,s,a,l){return dl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),dl=!0),this.getInterpolation(e,n,i,r,o,s,a,l)}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Ai.x),l.addScaledVector(s,Ai.y),l.addScaledVector(a,Ai.z),l)}static isFrontFacing(e,n,i,r){return Kn.subVectors(i,n),Ti.subVectors(e,n),Kn.cross(Ti).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),Kn.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Un.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,o){return dl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),dl=!0),Un.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}getInterpolation(e,n,i,r,o){return Un.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;mo.subVectors(r,i),go.subVectors(o,i),Yc.subVectors(e,i);const l=mo.dot(Yc),u=go.dot(Yc);if(l<=0&&u<=0)return n.copy(i);qc.subVectors(e,r);const c=mo.dot(qc),f=go.dot(qc);if(c>=0&&f<=c)return n.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return s=l/(l-c),n.copy(i).addScaledVector(mo,s);Kc.subVectors(e,o);const p=mo.dot(Kc),g=go.dot(Kc);if(g>=0&&p<=g)return n.copy(o);const y=p*u-l*g;if(y<=0&&u>=0&&g<=0)return a=u/(u-g),n.copy(i).addScaledVector(go,a);const m=c*g-p*f;if(m<=0&&f-c>=0&&p-g>=0)return Vm.subVectors(o,r),a=(f-c)/(f-c+(p-g)),n.copy(r).addScaledVector(Vm,a);const d=1/(m+y+h);return s=y*d,a=h*d,n.copy(i).addScaledVector(mo,s).addScaledVector(go,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const b_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},fl={h:0,s:0,l:0};function Zc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Fe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=tM(e,1),n=Qt(n,0,1),i=Qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=Zc(s,o,e+1/3),this.g=Zc(s,o,e),this.b=Zc(s,o,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=Vt){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Vt){const i=b_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qo(e.r),this.g=Qo(e.g),this.b=Qo(e.b),this}copyLinearToSRGB(e){return this.r=kc(e.r),this.g=kc(e.g),this.b=kc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return et.fromWorkingColorSpace(Kt.copy(this),e),Math.round(Qt(Kt.r*255,0,255))*65536+Math.round(Qt(Kt.g*255,0,255))*256+Math.round(Qt(Kt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace(Kt.copy(this),n);const i=Kt.r,r=Kt.g,o=Kt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const c=(a+s)/2;if(a===s)l=0,u=0;else{const f=s-a;switch(u=c<=.5?f/(s+a):f/(2-s-a),s){case i:l=(r-o)/f+(r<o?6:0);break;case r:l=(o-i)/f+2;break;case o:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace(Kt.copy(this),n),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Vt){et.fromWorkingColorSpace(Kt.copy(this),e);const n=Kt.r,i=Kt.g,r=Kt.b;return e!==Vt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+n,qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(qi),e.getHSL(fl);const i=Fc(qi.h,fl.h,n),r=Fc(qi.s,fl.s,n),o=Fc(qi.l,fl.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new Fe;Fe.NAMES=b_;let gM=0;class ro extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=Jo,this.side=_r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=df,this.blendDst=ff,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=yu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ao,this.stencilZFail=ao,this.stencilZPass=ao,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Jo&&(i.blending=this.blending),this.side!==_r&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==df&&(i.blendSrc=this.blendSrc),this.blendDst!==ff&&(i.blendDst=this.blendDst),this.blendEquation!==Ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==yu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ao&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ao&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ao&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class P_ extends ro{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=d_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new k,hl=new me;class Vn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=gf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ir,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)hl.fromBufferAttribute(this,n),hl.applyMatrix3(e),this.setXY(n,hl.x,hl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix3(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix4(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyNormalMatrix(e),this.setXYZ(n,At.x,At.y,At.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.transformDirection(e),this.setXYZ(n,At.x,At.y,At.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Pi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=nt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Pi(n,this.array)),n}setX(e,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Pi(n,this.array)),n}setY(e,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Pi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Pi(n,this.array)),n}setW(e,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array),o=nt(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gf&&(e.usage=this.usage),e}}class L_ extends Vn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class D_ extends Vn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class An extends Vn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let vM=0;const Ln=new Mt,Jc=new Lt,vo=new k,En=new Ua,Fs=new Ua,Ot=new k;class jn extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(M_(e)?D_:L_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new $e().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,n,i){return Ln.makeTranslation(e,n,i),this.applyMatrix4(Ln),this}scale(e,n,i){return Ln.makeScale(e,n,i),this.applyMatrix4(Ln),this}lookAt(e){return Jc.lookAt(e),Jc.updateMatrix(),this.applyMatrix4(Jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vo).negate(),this.translate(vo.x,vo.y,vo.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new An(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ua);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];En.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ju);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];Fs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(En.min,Fs.min),En.expandByPoint(Ot),Ot.addVectors(En.max,Fs.max),En.expandByPoint(Ot)):(En.expandByPoint(Fs.min),En.expandByPoint(Fs.max))}En.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Ot.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Ot));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Ot.fromBufferAttribute(a,u),l&&(vo.fromBufferAttribute(e,u),Ot.add(vo)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,o=n.normal.array,s=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let A=0;A<a;A++)u[A]=new k,c[A]=new k;const f=new k,h=new k,p=new k,g=new me,y=new me,m=new me,d=new k,x=new k;function v(A,O,X){f.fromArray(r,A*3),h.fromArray(r,O*3),p.fromArray(r,X*3),g.fromArray(s,A*2),y.fromArray(s,O*2),m.fromArray(s,X*2),h.sub(f),p.sub(f),y.sub(g),m.sub(g);const Q=1/(y.x*m.y-m.x*y.y);isFinite(Q)&&(d.copy(h).multiplyScalar(m.y).addScaledVector(p,-y.y).multiplyScalar(Q),x.copy(p).multiplyScalar(y.x).addScaledVector(h,-m.x).multiplyScalar(Q),u[A].add(d),u[O].add(d),u[X].add(d),c[A].add(x),c[O].add(x),c[X].add(x))}let _=this.groups;_.length===0&&(_=[{start:0,count:i.length}]);for(let A=0,O=_.length;A<O;++A){const X=_[A],Q=X.start,D=X.count;for(let H=Q,j=Q+D;H<j;H+=3)v(i[H+0],i[H+1],i[H+2])}const C=new k,E=new k,T=new k,P=new k;function M(A){T.fromArray(o,A*3),P.copy(T);const O=u[A];C.copy(O),C.sub(T.multiplyScalar(T.dot(O))).normalize(),E.crossVectors(P,O);const Q=E.dot(c[A])<0?-1:1;l[A*4]=C.x,l[A*4+1]=C.y,l[A*4+2]=C.z,l[A*4+3]=Q}for(let A=0,O=_.length;A<O;++A){const X=_[A],Q=X.start,D=X.count;for(let H=Q,j=Q+D;H<j;H+=3)M(i[H+0]),M(i[H+1]),M(i[H+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new k,o=new k,s=new k,a=new k,l=new k,u=new k,c=new k,f=new k;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,g),o.fromBufferAttribute(n,y),s.fromBufferAttribute(n,m),c.subVectors(s,o),f.subVectors(r,o),c.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),o.fromBufferAttribute(n,h+1),s.fromBufferAttribute(n,h+2),c.subVectors(s,o),f.subVectors(r,o),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let p=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*c;for(let d=0;d<c;d++)h[g++]=u[p++]}return new Vn(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new jn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const o=e.morphAttributes;for(const u in o){const c=[],f=o[u];for(let h=0,p=f.length;h<p;h++)c.push(f[h].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,c=s.length;u<c;u++){const f=s[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wm=new Mt,Rr=new R_,pl=new ju,Xm=new k,_o=new k,yo=new k,xo=new k,Qc=new k,ml=new k,gl=new me,vl=new me,_l=new me,jm=new k,$m=new k,Ym=new k,yl=new k,xl=new k;class kn extends Lt{constructor(e=new jn,n=new P_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){ml.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const c=a[l],f=o[l];c!==0&&(Qc.fromBufferAttribute(f,e),s?ml.addScaledVector(Qc,c):ml.addScaledVector(Qc.sub(n),c))}n.add(ml)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),pl.copy(i.boundingSphere),pl.applyMatrix4(o),Rr.copy(e.ray).recast(e.near),!(pl.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(pl,Xm)===null||Rr.origin.distanceToSquared(Xm)>(e.far-e.near)**2))&&(Wm.copy(o).invert(),Rr.copy(e.ray).applyMatrix4(Wm),!(i.boundingBox!==null&&Rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Rr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,u=o.attributes.uv,c=o.attributes.uv1,f=o.attributes.normal,h=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,y=h.length;g<y;g++){const m=h[g],d=s[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=x,C=v;_<C;_+=3){const E=a.getX(_),T=a.getX(_+1),P=a.getX(_+2);r=Sl(this,d,e,i,u,c,f,E,T,P),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,d=y;m<d;m+=3){const x=a.getX(m),v=a.getX(m+1),_=a.getX(m+2);r=Sl(this,s,e,i,u,c,f,x,v,_),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,y=h.length;g<y;g++){const m=h[g],d=s[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=x,C=v;_<C;_+=3){const E=_,T=_+1,P=_+2;r=Sl(this,d,e,i,u,c,f,E,T,P),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,d=y;m<d;m+=3){const x=m,v=m+1,_=m+2;r=Sl(this,s,e,i,u,c,f,x,v,_),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function _M(t,e,n,i,r,o,s,a){let l;if(e.side===_n?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===_r,a),l===null)return null;xl.copy(a),xl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(xl);return u<n.near||u>n.far?null:{distance:u,point:xl.clone(),object:t}}function Sl(t,e,n,i,r,o,s,a,l,u){t.getVertexPosition(a,_o),t.getVertexPosition(l,yo),t.getVertexPosition(u,xo);const c=_M(t,e,n,i,_o,yo,xo,yl);if(c){r&&(gl.fromBufferAttribute(r,a),vl.fromBufferAttribute(r,l),_l.fromBufferAttribute(r,u),c.uv=Un.getInterpolation(yl,_o,yo,xo,gl,vl,_l,new me)),o&&(gl.fromBufferAttribute(o,a),vl.fromBufferAttribute(o,l),_l.fromBufferAttribute(o,u),c.uv1=Un.getInterpolation(yl,_o,yo,xo,gl,vl,_l,new me),c.uv2=c.uv1),s&&(jm.fromBufferAttribute(s,a),$m.fromBufferAttribute(s,l),Ym.fromBufferAttribute(s,u),c.normal=Un.getInterpolation(yl,_o,yo,xo,jm,$m,Ym,new k),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new k,materialIndex:0};Un.getNormal(_o,yo,xo,f.normal),c.face=f}return c}class oo extends jn{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],c=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,n,e,s,o,0),g("z","y","x",1,-1,i,n,-e,s,o,1),g("x","z","y",1,1,e,i,n,r,s,2),g("x","z","y",1,-1,e,i,-n,r,s,3),g("x","y","z",1,-1,e,n,i,r,o,4),g("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new An(u,3)),this.setAttribute("normal",new An(c,3)),this.setAttribute("uv",new An(f,2));function g(y,m,d,x,v,_,C,E,T,P,M){const A=_/T,O=C/P,X=_/2,Q=C/2,D=E/2,H=T+1,j=P+1;let K=0,U=0;const B=new k;for(let z=0;z<j;z++){const Z=z*O-Q;for(let ie=0;ie<H;ie++){const $=ie*A-X;B[y]=$*x,B[m]=Z*v,B[d]=D,u.push(B.x,B.y,B.z),B[y]=0,B[m]=0,B[d]=E>0?1:-1,c.push(B.x,B.y,B.z),f.push(ie/T),f.push(1-z/P),K+=1}}for(let z=0;z<P;z++)for(let Z=0;Z<T;Z++){const ie=h+Z+H*z,$=h+Z+H*(z+1),ee=h+(Z+1)+H*(z+1),de=h+(Z+1)+H*z;l.push(ie,$,de),l.push($,ee,de),U+=6}a.addGroup(p,U,M),p+=U,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function on(t){const e={};for(let n=0;n<t.length;n++){const i=hs(t[n]);for(const r in i)e[r]=i[r]}return e}function yM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function I_(t){return t.getRenderTarget()===null?t.outputColorSpace:et.workingColorSpace}const xM={clone:hs,merge:on};var SM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,EM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class eo extends ro{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=SM,this.fragmentShader=EM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.uniformsGroups=yM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class N_ extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Ni}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class On extends N_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=_f*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _f*2*Math.atan(Math.tan(Oc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Oc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const So=-90,Eo=1;class MM extends Lt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new On(So,Eo,e,n);r.layers=this.layers,this.add(r);const o=new On(So,Eo,e,n);o.layers=this.layers,this.add(o);const s=new On(So,Eo,e,n);s.layers=this.layers,this.add(s);const a=new On(So,Eo,e,n);a.layers=this.layers,this.add(a);const l=new On(So,Eo,e,n);l.layers=this.layers,this.add(l);const u=new On(So,Eo,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const u of n)this.remove(u);if(e===Ni)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Mu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(f,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class U_ extends yn{constructor(e,n,i,r,o,s,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:cs,super(e,n,i,r,o,s,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wM extends Qr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(ta("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===jr?Vt:Fn),this.texture=new U_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Nn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new oo(5,5,5),o=new eo({name:"CubemapFromEquirect",uniforms:hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:hr});o.uniforms.tEquirect.value=n;const s=new kn(r,o),a=n.minFilter;return n.minFilter===Ea&&(n.minFilter=Nn),new MM(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const ed=new k,TM=new k,AM=new $e;class Dr{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ed.subVectors(i,n).cross(TM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ed),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||AM.getNormalMatrix(e),r=this.coplanarPoint(ed).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new ju,El=new k;class Rh{constructor(e=new Dr,n=new Dr,i=new Dr,r=new Dr,o=new Dr,s=new Dr){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ni){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],p=r[8],g=r[9],y=r[10],m=r[11],d=r[12],x=r[13],v=r[14],_=r[15];if(i[0].setComponents(l-o,h-u,m-p,_-d).normalize(),i[1].setComponents(l+o,h+u,m+p,_+d).normalize(),i[2].setComponents(l+s,h+c,m+g,_+x).normalize(),i[3].setComponents(l-s,h-c,m-g,_-x).normalize(),i[4].setComponents(l-a,h-f,m-y,_-v).normalize(),n===Ni)i[5].setComponents(l+a,h+f,m+y,_+v).normalize();else if(n===Mu)i[5].setComponents(a,f,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){return Cr.center.set(0,0,0),Cr.radius=.7071067811865476,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(El.x=r.normal.x>0?e.max.x:e.min.x,El.y=r.normal.y>0?e.max.y:e.min.y,El.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(El)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function O_(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function RM(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,h=u.usage,p=f.byteLength,g=t.createBuffer();t.bindBuffer(c,g),t.bufferData(c,f,h),u.onUploadCallback();let y;if(f instanceof Float32Array)y=t.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=t.SHORT;else if(f instanceof Uint32Array)y=t.UNSIGNED_INT;else if(f instanceof Int32Array)y=t.INT;else if(f instanceof Int8Array)y=t.BYTE;else if(f instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:p}}function o(u,c,f){const h=c.array,p=c._updateRange,g=c.updateRanges;if(t.bindBuffer(f,u),p.count===-1&&g.length===0&&t.bufferSubData(f,0,h),g.length!==0){for(let y=0,m=g.length;y<m;y++){const d=g[y];n?t.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):t.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}c.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):t.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);if(f===void 0)i.set(u,r(u,c));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(f.buffer,u,c),f.version=u.version}}return{get:s,remove:a,update:l}}class Yu extends jn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=n/l,p=[],g=[],y=[],m=[];for(let d=0;d<c;d++){const x=d*h-s;for(let v=0;v<u;v++){const _=v*f-o;g.push(_,-x,0),y.push(0,0,1),m.push(v/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<a;x++){const v=x+u*d,_=x+u*(d+1),C=x+1+u*(d+1),E=x+1+u*d;p.push(v,_,E),p.push(_,C,E)}this.setIndex(p),this.setAttribute("position",new An(g,3)),this.setAttribute("normal",new An(y,3)),this.setAttribute("uv",new An(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yu(e.width,e.height,e.widthSegments,e.heightSegments)}}var CM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bM=`#ifdef USE_ALPHAHASH
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
#endif`,PM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,LM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,IM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,NM=`#ifdef USE_AOMAP
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
#endif`,UM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,OM=`#ifdef USE_BATCHING
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
#endif`,FM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,zM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,BM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,HM=`#ifdef USE_IRIDESCENCE
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
#endif`,GM=`#ifdef USE_BUMPMAP
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
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$M=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,YM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,KM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ZM=`#define PI 3.141592653589793
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
} // validated`,JM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,QM=`vec3 transformedNormal = objectNormal;
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
#endif`,ew=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rw="gl_FragColor = linearToOutputTexel( gl_FragColor );",ow=`
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
}`,sw=`#ifdef USE_ENVMAP
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
#endif`,aw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lw=`#ifdef USE_ENVMAP
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
#endif`,uw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cw=`#ifdef USE_ENVMAP
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
#endif`,dw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mw=`#ifdef USE_GRADIENTMAP
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
}`,gw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,vw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_w=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xw=`uniform bool receiveShadow;
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
#endif`,Sw=`#ifdef USE_ENVMAP
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
#endif`,Ew=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ww=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Aw=`PhysicalMaterial material;
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
#endif`,Rw=`struct PhysicalMaterial {
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
}`,Cw=`
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
#endif`,bw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Iw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Nw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Uw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ow=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zw=`#if defined( USE_POINTS_UV )
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
#endif`,kw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gw=`#ifdef USE_MORPHNORMALS
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
#endif`,Vw=`#ifdef USE_MORPHTARGETS
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
#endif`,Ww=`#ifdef USE_MORPHTARGETS
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
#endif`,Xw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$w=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kw=`#ifdef USE_NORMALMAP
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
#endif`,Zw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,i1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,o1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,u1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,f1=`float getShadowMask() {
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
}`,h1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p1=`#ifdef USE_SKINNING
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
#endif`,m1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g1=`#ifdef USE_SKINNING
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
#endif`,v1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,y1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,x1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,S1=`#ifdef USE_TRANSMISSION
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
#endif`,E1=`#ifdef USE_TRANSMISSION
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
#endif`,M1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const R1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,C1=`uniform sampler2D t2D;
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
}`,b1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,L1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I1=`#include <common>
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
}`,N1=`#if DEPTH_PACKING == 3200
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
}`,U1=`#define DISTANCE
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
}`,O1=`#define DISTANCE
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
}`,F1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,z1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k1=`uniform float scale;
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
}`,B1=`uniform vec3 diffuse;
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
}`,H1=`#include <common>
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
}`,G1=`uniform vec3 diffuse;
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
}`,V1=`#define LAMBERT
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
}`,W1=`#define LAMBERT
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
}`,X1=`#define MATCAP
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
}`,j1=`#define MATCAP
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
}`,$1=`#define NORMAL
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
}`,Y1=`#define NORMAL
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
}`,q1=`#define PHONG
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
}`,K1=`#define PHONG
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
}`,Z1=`#define STANDARD
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
}`,J1=`#define STANDARD
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
}`,Q1=`#define TOON
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
}`,eT=`#define TOON
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
}`,tT=`uniform float size;
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
}`,nT=`uniform vec3 diffuse;
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
}`,iT=`#include <common>
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
}`,rT=`uniform vec3 color;
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
}`,oT=`uniform float rotation;
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
}`,sT=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:CM,alphahash_pars_fragment:bM,alphamap_fragment:PM,alphamap_pars_fragment:LM,alphatest_fragment:DM,alphatest_pars_fragment:IM,aomap_fragment:NM,aomap_pars_fragment:UM,batching_pars_vertex:OM,batching_vertex:FM,begin_vertex:zM,beginnormal_vertex:kM,bsdfs:BM,iridescence_fragment:HM,bumpmap_pars_fragment:GM,clipping_planes_fragment:VM,clipping_planes_pars_fragment:WM,clipping_planes_pars_vertex:XM,clipping_planes_vertex:jM,color_fragment:$M,color_pars_fragment:YM,color_pars_vertex:qM,color_vertex:KM,common:ZM,cube_uv_reflection_fragment:JM,defaultnormal_vertex:QM,displacementmap_pars_vertex:ew,displacementmap_vertex:tw,emissivemap_fragment:nw,emissivemap_pars_fragment:iw,colorspace_fragment:rw,colorspace_pars_fragment:ow,envmap_fragment:sw,envmap_common_pars_fragment:aw,envmap_pars_fragment:lw,envmap_pars_vertex:uw,envmap_physical_pars_fragment:Sw,envmap_vertex:cw,fog_vertex:dw,fog_pars_vertex:fw,fog_fragment:hw,fog_pars_fragment:pw,gradientmap_pars_fragment:mw,lightmap_fragment:gw,lightmap_pars_fragment:vw,lights_lambert_fragment:_w,lights_lambert_pars_fragment:yw,lights_pars_begin:xw,lights_toon_fragment:Ew,lights_toon_pars_fragment:Mw,lights_phong_fragment:ww,lights_phong_pars_fragment:Tw,lights_physical_fragment:Aw,lights_physical_pars_fragment:Rw,lights_fragment_begin:Cw,lights_fragment_maps:bw,lights_fragment_end:Pw,logdepthbuf_fragment:Lw,logdepthbuf_pars_fragment:Dw,logdepthbuf_pars_vertex:Iw,logdepthbuf_vertex:Nw,map_fragment:Uw,map_pars_fragment:Ow,map_particle_fragment:Fw,map_particle_pars_fragment:zw,metalnessmap_fragment:kw,metalnessmap_pars_fragment:Bw,morphcolor_vertex:Hw,morphnormal_vertex:Gw,morphtarget_pars_vertex:Vw,morphtarget_vertex:Ww,normal_fragment_begin:Xw,normal_fragment_maps:jw,normal_pars_fragment:$w,normal_pars_vertex:Yw,normal_vertex:qw,normalmap_pars_fragment:Kw,clearcoat_normal_fragment_begin:Zw,clearcoat_normal_fragment_maps:Jw,clearcoat_pars_fragment:Qw,iridescence_pars_fragment:e1,opaque_fragment:t1,packing:n1,premultiplied_alpha_fragment:i1,project_vertex:r1,dithering_fragment:o1,dithering_pars_fragment:s1,roughnessmap_fragment:a1,roughnessmap_pars_fragment:l1,shadowmap_pars_fragment:u1,shadowmap_pars_vertex:c1,shadowmap_vertex:d1,shadowmask_pars_fragment:f1,skinbase_vertex:h1,skinning_pars_vertex:p1,skinning_vertex:m1,skinnormal_vertex:g1,specularmap_fragment:v1,specularmap_pars_fragment:_1,tonemapping_fragment:y1,tonemapping_pars_fragment:x1,transmission_fragment:S1,transmission_pars_fragment:E1,uv_pars_fragment:M1,uv_pars_vertex:w1,uv_vertex:T1,worldpos_vertex:A1,background_vert:R1,background_frag:C1,backgroundCube_vert:b1,backgroundCube_frag:P1,cube_vert:L1,cube_frag:D1,depth_vert:I1,depth_frag:N1,distanceRGBA_vert:U1,distanceRGBA_frag:O1,equirect_vert:F1,equirect_frag:z1,linedashed_vert:k1,linedashed_frag:B1,meshbasic_vert:H1,meshbasic_frag:G1,meshlambert_vert:V1,meshlambert_frag:W1,meshmatcap_vert:X1,meshmatcap_frag:j1,meshnormal_vert:$1,meshnormal_frag:Y1,meshphong_vert:q1,meshphong_frag:K1,meshphysical_vert:Z1,meshphysical_frag:J1,meshtoon_vert:Q1,meshtoon_frag:eT,points_vert:tT,points_frag:nT,shadow_vert:iT,shadow_frag:rT,sprite_vert:oT,sprite_frag:sT},ve={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},fi={basic:{uniforms:on([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:on([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:on([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:on([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:on([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:on([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:on([ve.points,ve.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:on([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:on([ve.common,ve.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:on([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:on([ve.sprite,ve.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:on([ve.common,ve.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:on([ve.lights,ve.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};fi.physical={uniforms:on([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Ml={r:0,b:0,g:0};function aT(t,e,n,i,r,o,s){const a=new Fe(0);let l=o===!0?0:1,u,c,f=null,h=0,p=null;function g(m,d){let x=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?n:e).get(v)),v===null?y(a,l):v&&v.isColor&&(y(v,1),x=!0);const _=t.xr.getEnvironmentBlendMode();_==="additive"?i.buffers.color.setClear(0,0,0,1,s):_==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||x)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Wu)?(c===void 0&&(c=new kn(new oo(1,1,1),new eo({name:"BackgroundCubeMaterial",uniforms:hs(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=et.getTransfer(v.colorSpace)!==ut,(f!==v||h!==v.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new kn(new Yu(2,2),new eo({name:"BackgroundMaterial",uniforms:hs(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:_r,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=et.getTransfer(v.colorSpace)!==ut,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function y(m,d){m.getRGB(Ml,I_(t)),i.buffers.color.setClear(Ml.r,Ml.g,Ml.b,d,s)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(a,l)},render:g}}function lT(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},l=m(null);let u=l,c=!1;function f(D,H,j,K,U){let B=!1;if(s){const z=y(K,j,H);u!==z&&(u=z,p(u.object)),B=d(D,K,j,U),B&&x(D,K,j,U)}else{const z=H.wireframe===!0;(u.geometry!==K.id||u.program!==j.id||u.wireframe!==z)&&(u.geometry=K.id,u.program=j.id,u.wireframe=z,B=!0)}U!==null&&n.update(U,t.ELEMENT_ARRAY_BUFFER),(B||c)&&(c=!1,P(D,H,j,K),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(U).buffer))}function h(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function p(D){return i.isWebGL2?t.bindVertexArray(D):o.bindVertexArrayOES(D)}function g(D){return i.isWebGL2?t.deleteVertexArray(D):o.deleteVertexArrayOES(D)}function y(D,H,j){const K=j.wireframe===!0;let U=a[D.id];U===void 0&&(U={},a[D.id]=U);let B=U[H.id];B===void 0&&(B={},U[H.id]=B);let z=B[K];return z===void 0&&(z=m(h()),B[K]=z),z}function m(D){const H=[],j=[],K=[];for(let U=0;U<r;U++)H[U]=0,j[U]=0,K[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:j,attributeDivisors:K,object:D,attributes:{},index:null}}function d(D,H,j,K){const U=u.attributes,B=H.attributes;let z=0;const Z=j.getAttributes();for(const ie in Z)if(Z[ie].location>=0){const ee=U[ie];let de=B[ie];if(de===void 0&&(ie==="instanceMatrix"&&D.instanceMatrix&&(de=D.instanceMatrix),ie==="instanceColor"&&D.instanceColor&&(de=D.instanceColor)),ee===void 0||ee.attribute!==de||de&&ee.data!==de.data)return!0;z++}return u.attributesNum!==z||u.index!==K}function x(D,H,j,K){const U={},B=H.attributes;let z=0;const Z=j.getAttributes();for(const ie in Z)if(Z[ie].location>=0){let ee=B[ie];ee===void 0&&(ie==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),ie==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor));const de={};de.attribute=ee,ee&&ee.data&&(de.data=ee.data),U[ie]=de,z++}u.attributes=U,u.attributesNum=z,u.index=K}function v(){const D=u.newAttributes;for(let H=0,j=D.length;H<j;H++)D[H]=0}function _(D){C(D,0)}function C(D,H){const j=u.newAttributes,K=u.enabledAttributes,U=u.attributeDivisors;j[D]=1,K[D]===0&&(t.enableVertexAttribArray(D),K[D]=1),U[D]!==H&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,H),U[D]=H)}function E(){const D=u.newAttributes,H=u.enabledAttributes;for(let j=0,K=H.length;j<K;j++)H[j]!==D[j]&&(t.disableVertexAttribArray(j),H[j]=0)}function T(D,H,j,K,U,B,z){z===!0?t.vertexAttribIPointer(D,H,j,U,B):t.vertexAttribPointer(D,H,j,K,U,B)}function P(D,H,j,K){if(i.isWebGL2===!1&&(D.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const U=K.attributes,B=j.getAttributes(),z=H.defaultAttributeValues;for(const Z in B){const ie=B[Z];if(ie.location>=0){let $=U[Z];if($===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&($=D.instanceColor)),$!==void 0){const ee=$.normalized,de=$.itemSize,pe=n.get($);if(pe===void 0)continue;const he=pe.buffer,Ee=pe.type,Re=pe.bytesPerElement,_e=i.isWebGL2===!0&&(Ee===t.INT||Ee===t.UNSIGNED_INT||$.gpuType===h_);if($.isInterleavedBufferAttribute){const oe=$.data,S=oe.stride,I=$.offset;if(oe.isInstancedInterleavedBuffer){for(let L=0;L<ie.locationSize;L++)C(ie.location+L,oe.meshPerAttribute);D.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let L=0;L<ie.locationSize;L++)_(ie.location+L);t.bindBuffer(t.ARRAY_BUFFER,he);for(let L=0;L<ie.locationSize;L++)T(ie.location+L,de/ie.locationSize,Ee,ee,S*Re,(I+de/ie.locationSize*L)*Re,_e)}else{if($.isInstancedBufferAttribute){for(let oe=0;oe<ie.locationSize;oe++)C(ie.location+oe,$.meshPerAttribute);D.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let oe=0;oe<ie.locationSize;oe++)_(ie.location+oe);t.bindBuffer(t.ARRAY_BUFFER,he);for(let oe=0;oe<ie.locationSize;oe++)T(ie.location+oe,de/ie.locationSize,Ee,ee,de*Re,de/ie.locationSize*oe*Re,_e)}}else if(z!==void 0){const ee=z[Z];if(ee!==void 0)switch(ee.length){case 2:t.vertexAttrib2fv(ie.location,ee);break;case 3:t.vertexAttrib3fv(ie.location,ee);break;case 4:t.vertexAttrib4fv(ie.location,ee);break;default:t.vertexAttrib1fv(ie.location,ee)}}}}E()}function M(){X();for(const D in a){const H=a[D];for(const j in H){const K=H[j];for(const U in K)g(K[U].object),delete K[U];delete H[j]}delete a[D]}}function A(D){if(a[D.id]===void 0)return;const H=a[D.id];for(const j in H){const K=H[j];for(const U in K)g(K[U].object),delete K[U];delete H[j]}delete a[D.id]}function O(D){for(const H in a){const j=a[H];if(j[D.id]===void 0)continue;const K=j[D.id];for(const U in K)g(K[U].object),delete K[U];delete j[D.id]}}function X(){Q(),c=!0,u!==l&&(u=l,p(u.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:X,resetDefaultState:Q,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:O,initAttributes:v,enableAttribute:_,disableUnusedAttributes:E}}function uT(t,e,n,i){const r=i.isWebGL2;let o;function s(c){o=c}function a(c,f){t.drawArrays(o,c,f),n.update(f,o,1)}function l(c,f,h){if(h===0)return;let p,g;if(r)p=t,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](o,c,f,h),n.update(f,o,h)}function u(c,f,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h;g++)this.render(c[g],f[g]);else{p.multiDrawArraysWEBGL(o,c,0,f,0,h);let g=0;for(let y=0;y<h;y++)g+=f[y];n.update(g,o,1)}}this.setMode=s,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function cT(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=o(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=s||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,_=s||e.has("OES_texture_float"),C=v&&_,E=s?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:_,floatVertexTextures:C,maxSamples:E}}function dT(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new Dr,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){o=!0,c(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,h){n=c(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!r||g===null||g.length===0||o&&!m)o?c(null):u();else{const x=o?0:i,v=x*4;let _=d.clippingState||null;l.value=_,_=c(g,h,v,p);for(let C=0;C!==v;++C)_[C]=n[C];d.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,p,g){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const d=p+y*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,_=p;v!==y;++v,_+=4)s.copy(f[v]).applyMatrix4(x,a),s.normal.toArray(m,_),m[_+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function fT(t){let e=new WeakMap;function n(s,a){return a===hf?s.mapping=cs:a===pf&&(s.mapping=ds),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===hf||a===pf)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new wM(l.height/2);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",r),n(u.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class F_ extends N_{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Go=4,qm=[.125,.215,.35,.446,.526,.582],Or=20,td=new F_,Km=new Fe;let nd=null,id=0,rd=0;const Ir=(1+Math.sqrt(5))/2,Mo=1/Ir,Zm=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,Ir,Mo),new k(0,Ir,-Mo),new k(Mo,0,Ir),new k(-Mo,0,Ir),new k(Ir,Mo,0),new k(-Ir,Mo,0)];class Jm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),rd=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nd,id,rd),e.scissorTest=!1,wl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===cs||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),rd=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:Ma,format:ni,colorSpace:Gi,depthBuffer:!1},r=Qm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qm(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hT(o)),this._blurMaterial=pT(o,e,n)}return r}_compileMaterial(e){const n=new kn(this._lodPlanes[0],e);this._renderer.compile(n,td)}_sceneToCubeUV(e,n,i,r){const a=new On(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(Km),c.toneMapping=pr,c.autoClear=!1;const p=new P_({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),g=new kn(new oo,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(Km),y=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):x===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const v=this._cubeSize;wl(r,x*v,d>2?v:0,v,v),c.setRenderTarget(r),y&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===cs||e.mapping===ds;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=tg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eg());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new kn(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;wl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,td)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=Zm[(r-1)%Zm.length];this._blur(e,r-1,r,o,s)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new kn(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Or-1),y=o/g,m=isFinite(o)?1+Math.floor(c*y):Or;m>Or&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Or}`);const d=[];let x=0;for(let T=0;T<Or;++T){const P=T/y,M=Math.exp(-P*P/2);d.push(M),T===0?x+=M:T<m&&(x+=2*M)}for(let T=0;T<d.length;T++)d[T]=d[T]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-i;const _=this._sizeLods[r],C=3*_*(r>v-Go?r-v+Go:0),E=4*(this._cubeSize-_);wl(n,C,E,3*_,2*_),l.setRenderTarget(n),l.render(f,td)}}function hT(t){const e=[],n=[],i=[];let r=t;const o=t-Go+1+qm.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-Go?l=qm[s-t+Go-1]:s===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,g=6,y=3,m=2,d=1,x=new Float32Array(y*g*p),v=new Float32Array(m*g*p),_=new Float32Array(d*g*p);for(let E=0;E<p;E++){const T=E%3*2/3-1,P=E>2?0:-1,M=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];x.set(M,y*g*E),v.set(h,m*g*E);const A=[E,E,E,E,E,E];_.set(A,d*g*E)}const C=new jn;C.setAttribute("position",new Vn(x,y)),C.setAttribute("uv",new Vn(v,m)),C.setAttribute("faceIndex",new Vn(_,d)),e.push(C),r>Go&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Qm(t,e,n){const i=new Qr(t,e,n);return i.texture.mapping=Wu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function pT(t,e,n){const i=new Float32Array(Or),r=new k(0,1,0);return new eo({name:"SphericalGaussianBlur",defines:{n:Or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ch(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function eg(){return new eo({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ch(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function tg(){return new eo({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Ch(){return`

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
	`}function mT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===hf||l===pf,c=l===cs||l===ds;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new Jm(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){n===null&&(n=new Jm(t));const h=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",o),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function o(a){const l=a.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function gT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function vT(t,e,n,i){const r={},o=new WeakMap;function s(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const y=h.morphAttributes[g];for(let m=0,d=y.length;m<d;m++)e.remove(y[m])}h.removeEventListener("dispose",s),delete r[h.id];const p=o.get(h);p&&(e.remove(p),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const y=p[g];for(let m=0,d=y.length;m<d;m++)e.update(y[m],t.ARRAY_BUFFER)}}function u(f){const h=[],p=f.index,g=f.attributes.position;let y=0;if(p!==null){const x=p.array;y=p.version;for(let v=0,_=x.length;v<_;v+=3){const C=x[v+0],E=x[v+1],T=x[v+2];h.push(C,E,E,T,T,C)}}else if(g!==void 0){const x=g.array;y=g.version;for(let v=0,_=x.length/3-1;v<_;v+=3){const C=v+0,E=v+1,T=v+2;h.push(C,E,E,T,T,C)}}else return;const m=new(M_(h)?D_:L_)(h,1);m.version=y;const d=o.get(f);d&&e.remove(d),o.set(f,m)}function c(f){const h=o.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return o.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function _T(t,e,n,i){const r=i.isWebGL2;let o;function s(p){o=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function c(p,g){t.drawElements(o,g,a,p*l),n.update(g,o,1)}function f(p,g,y){if(y===0)return;let m,d;if(r)m=t,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](o,g,a,p*l,y),n.update(g,o,y)}function h(p,g,y){if(y===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<y;d++)this.render(p[d]/l,g[d]);else{m.multiDrawElementsWEBGL(o,g,0,a,p,0,y);let d=0;for(let x=0;x<y;x++)d+=g[x];n.update(d,o,1)}}this.setMode=s,this.setIndex=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=h}function yT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function xT(t,e){return t[0]-e[0]}function ST(t,e){return Math.abs(e[1])-Math.abs(t[1])}function ET(t,e,n){const i={},r=new Float32Array(8),o=new WeakMap,s=new zt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,y=g!==void 0?g.length:0;let m=o.get(c);if(m===void 0||m.count!==y){let H=function(){Q.dispose(),o.delete(c),c.removeEventListener("dispose",H)};var p=H;m!==void 0&&m.texture.dispose();const v=c.morphAttributes.position!==void 0,_=c.morphAttributes.normal!==void 0,C=c.morphAttributes.color!==void 0,E=c.morphAttributes.position||[],T=c.morphAttributes.normal||[],P=c.morphAttributes.color||[];let M=0;v===!0&&(M=1),_===!0&&(M=2),C===!0&&(M=3);let A=c.attributes.position.count*M,O=1;A>e.maxTextureSize&&(O=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const X=new Float32Array(A*O*4*y),Q=new A_(X,A,O,y);Q.type=ir,Q.needsUpdate=!0;const D=M*4;for(let j=0;j<y;j++){const K=E[j],U=T[j],B=P[j],z=A*O*4*j;for(let Z=0;Z<K.count;Z++){const ie=Z*D;v===!0&&(s.fromBufferAttribute(K,Z),X[z+ie+0]=s.x,X[z+ie+1]=s.y,X[z+ie+2]=s.z,X[z+ie+3]=0),_===!0&&(s.fromBufferAttribute(U,Z),X[z+ie+4]=s.x,X[z+ie+5]=s.y,X[z+ie+6]=s.z,X[z+ie+7]=0),C===!0&&(s.fromBufferAttribute(B,Z),X[z+ie+8]=s.x,X[z+ie+9]=s.y,X[z+ie+10]=s.z,X[z+ie+11]=B.itemSize===4?s.w:1)}}m={count:y,texture:Q,size:new me(A,O)},o.set(c,m),c.addEventListener("dispose",H)}let d=0;for(let v=0;v<h.length;v++)d+=h[v];const x=c.morphTargetsRelative?1:1-d;f.getUniforms().setValue(t,"morphTargetBaseInfluence",x),f.getUniforms().setValue(t,"morphTargetInfluences",h),f.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const g=h===void 0?0:h.length;let y=i[c.id];if(y===void 0||y.length!==g){y=[];for(let _=0;_<g;_++)y[_]=[_,0];i[c.id]=y}for(let _=0;_<g;_++){const C=y[_];C[0]=_,C[1]=h[_]}y.sort(ST);for(let _=0;_<8;_++)_<g&&y[_][1]?(a[_][0]=y[_][0],a[_][1]=y[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(xT);const m=c.morphAttributes.position,d=c.morphAttributes.normal;let x=0;for(let _=0;_<8;_++){const C=a[_],E=C[0],T=C[1];E!==Number.MAX_SAFE_INTEGER&&T?(m&&c.getAttribute("morphTarget"+_)!==m[E]&&c.setAttribute("morphTarget"+_,m[E]),d&&c.getAttribute("morphNormal"+_)!==d[E]&&c.setAttribute("morphNormal"+_,d[E]),r[_]=T,x+=T):(m&&c.hasAttribute("morphTarget"+_)===!0&&c.deleteAttribute("morphTarget"+_),d&&c.hasAttribute("morphNormal"+_)===!0&&c.deleteAttribute("morphNormal"+_),r[_]=0)}const v=c.morphTargetsRelative?1:1-x;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function MT(t,e,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function s(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:s}}class z_ extends yn{constructor(e,n,i,r,o,s,a,l,u,c){if(c=c!==void 0?c:Xr,c!==Xr&&c!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Xr&&(i=nr),i===void 0&&c===fs&&(i=Wr),super(null,r,o,s,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const k_=new yn,B_=new z_(1,1);B_.compareFunction=E_;const H_=new A_,G_=new aM,V_=new U_,ng=[],ig=[],rg=new Float32Array(16),og=new Float32Array(9),sg=new Float32Array(4);function Es(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=ng[r];if(o===void 0&&(o=new Float32Array(r),ng[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Dt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function It(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function qu(t,e){let n=ig[e];n===void 0&&(n=new Int32Array(e),ig[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function wT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function TT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2fv(this.addr,e),It(n,e)}}function AT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dt(n,e))return;t.uniform3fv(this.addr,e),It(n,e)}}function RT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4fv(this.addr,e),It(n,e)}}function CT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;sg.set(i),t.uniformMatrix2fv(this.addr,!1,sg),It(n,i)}}function bT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;og.set(i),t.uniformMatrix3fv(this.addr,!1,og),It(n,i)}}function PT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;rg.set(i),t.uniformMatrix4fv(this.addr,!1,rg),It(n,i)}}function LT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function DT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2iv(this.addr,e),It(n,e)}}function IT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3iv(this.addr,e),It(n,e)}}function NT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4iv(this.addr,e),It(n,e)}}function UT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function OT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2uiv(this.addr,e),It(n,e)}}function FT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3uiv(this.addr,e),It(n,e)}}function zT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4uiv(this.addr,e),It(n,e)}}function kT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const o=this.type===t.SAMPLER_2D_SHADOW?B_:k_;n.setTexture2D(e||o,r)}function BT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||G_,r)}function HT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||V_,r)}function GT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||H_,r)}function VT(t){switch(t){case 5126:return wT;case 35664:return TT;case 35665:return AT;case 35666:return RT;case 35674:return CT;case 35675:return bT;case 35676:return PT;case 5124:case 35670:return LT;case 35667:case 35671:return DT;case 35668:case 35672:return IT;case 35669:case 35673:return NT;case 5125:return UT;case 36294:return OT;case 36295:return FT;case 36296:return zT;case 35678:case 36198:case 36298:case 36306:case 35682:return kT;case 35679:case 36299:case 36307:return BT;case 35680:case 36300:case 36308:case 36293:return HT;case 36289:case 36303:case 36311:case 36292:return GT}}function WT(t,e){t.uniform1fv(this.addr,e)}function XT(t,e){const n=Es(e,this.size,2);t.uniform2fv(this.addr,n)}function jT(t,e){const n=Es(e,this.size,3);t.uniform3fv(this.addr,n)}function $T(t,e){const n=Es(e,this.size,4);t.uniform4fv(this.addr,n)}function YT(t,e){const n=Es(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function qT(t,e){const n=Es(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function KT(t,e){const n=Es(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function ZT(t,e){t.uniform1iv(this.addr,e)}function JT(t,e){t.uniform2iv(this.addr,e)}function QT(t,e){t.uniform3iv(this.addr,e)}function eA(t,e){t.uniform4iv(this.addr,e)}function tA(t,e){t.uniform1uiv(this.addr,e)}function nA(t,e){t.uniform2uiv(this.addr,e)}function iA(t,e){t.uniform3uiv(this.addr,e)}function rA(t,e){t.uniform4uiv(this.addr,e)}function oA(t,e,n){const i=this.cache,r=e.length,o=qu(n,r);Dt(i,o)||(t.uniform1iv(this.addr,o),It(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||k_,o[s])}function sA(t,e,n){const i=this.cache,r=e.length,o=qu(n,r);Dt(i,o)||(t.uniform1iv(this.addr,o),It(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||G_,o[s])}function aA(t,e,n){const i=this.cache,r=e.length,o=qu(n,r);Dt(i,o)||(t.uniform1iv(this.addr,o),It(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||V_,o[s])}function lA(t,e,n){const i=this.cache,r=e.length,o=qu(n,r);Dt(i,o)||(t.uniform1iv(this.addr,o),It(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||H_,o[s])}function uA(t){switch(t){case 5126:return WT;case 35664:return XT;case 35665:return jT;case 35666:return $T;case 35674:return YT;case 35675:return qT;case 35676:return KT;case 5124:case 35670:return ZT;case 35667:case 35671:return JT;case 35668:case 35672:return QT;case 35669:case 35673:return eA;case 5125:return tA;case 36294:return nA;case 36295:return iA;case 36296:return rA;case 35678:case 36198:case 36298:case 36306:case 35682:return oA;case 35679:case 36299:case 36307:return sA;case 35680:case 36300:case 36308:case 36293:return aA;case 36289:case 36303:case 36311:case 36292:return lA}}class cA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=VT(n.type)}}class dA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=uA(n.type)}}class fA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const od=/(\w+)(\])?(\[|\.)?/g;function ag(t,e){t.seq.push(e),t.map[e.id]=e}function hA(t,e,n){const i=t.name,r=i.length;for(od.lastIndex=0;;){const o=od.exec(i),s=od.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){ag(n,u===void 0?new cA(a,t,e):new dA(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new fA(a),ag(n,f)),n=f}}}class $l{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);hA(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function lg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const pA=37297;let mA=0;function gA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function vA(t){const e=et.getPrimaries(et.workingColorSpace),n=et.getPrimaries(t);let i;switch(e===n?i="":e===Eu&&n===Su?i="LinearDisplayP3ToLinearSRGB":e===Su&&n===Eu&&(i="LinearSRGBToLinearDisplayP3"),t){case Gi:case Xu:return[i,"LinearTransferOETF"];case Vt:case Ah:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function ug(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+gA(t.getShaderSource(e),s)}else return r}function _A(t,e){const n=vA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function yA(t,e){let n;switch(e){case PE:n="Linear";break;case LE:n="Reinhard";break;case DE:n="OptimizedCineon";break;case IE:n="ACESFilmic";break;case UE:n="AgX";break;case NE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function xA(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vo).join(`
`)}function SA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Vo).join(`
`)}function EA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function MA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function Vo(t){return t!==""}function cg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wA=/^[ \t]*#include +<([\w\d./]+)>/gm;function xf(t){return t.replace(wA,AA)}const TA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function AA(t,e){let n=Ve[e];if(n===void 0){const i=TA.get(e);if(i!==void 0)n=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return xf(n)}const RA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fg(t){return t.replace(RA,CA)}function CA(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function hg(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===u_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===c_?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function PA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case cs:case ds:e="ENVMAP_TYPE_CUBE";break;case Wu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function LA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ds:e="ENVMAP_MODE_REFRACTION";break}return e}function DA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case d_:e="ENVMAP_BLENDING_MULTIPLY";break;case CE:e="ENVMAP_BLENDING_MIX";break;case bE:e="ENVMAP_BLENDING_ADD";break}return e}function IA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function NA(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=bA(n),u=PA(n),c=LA(n),f=DA(n),h=IA(n),p=n.isWebGL2?"":xA(n),g=SA(n),y=EA(o),m=r.createProgram();let d,x,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Vo).join(`
`),d.length>0&&(d+=`
`),x=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Vo).join(`
`),x.length>0&&(x+=`
`)):(d=[hg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),x=[p,hg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==pr?"#define TONE_MAPPING":"",n.toneMapping!==pr?Ve.tonemapping_pars_fragment:"",n.toneMapping!==pr?yA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,_A("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Vo).join(`
`)),s=xf(s),s=cg(s,n),s=dg(s,n),a=xf(a),a=cg(a,n),a=dg(a,n),s=fg(s),a=fg(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,x=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Lm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Lm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const _=v+d+s,C=v+x+a,E=lg(r,r.VERTEX_SHADER,_),T=lg(r,r.FRAGMENT_SHADER,C);r.attachShader(m,E),r.attachShader(m,T),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function P(X){if(t.debug.checkShaderErrors){const Q=r.getProgramInfoLog(m).trim(),D=r.getShaderInfoLog(E).trim(),H=r.getShaderInfoLog(T).trim();let j=!0,K=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,E,T);else{const U=ug(r,E,"vertex"),B=ug(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+U+`
`+B)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(D===""||H==="")&&(K=!1);K&&(X.diagnostics={runnable:j,programLog:Q,vertexShader:{log:D,prefix:d},fragmentShader:{log:H,prefix:x}})}r.deleteShader(E),r.deleteShader(T),M=new $l(r,m),A=MA(r,m)}let M;this.getUniforms=function(){return M===void 0&&P(this),M};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let O=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(m,pA)),O},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=mA++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=T,this}let UA=0;class OA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new FA(e),n.set(e,i)),i}}class FA{constructor(e){this.id=UA++,this.code=e,this.usedTimes=0}}function zA(t,e,n,i,r,o,s){const a=new C_,l=new OA,u=[],c=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return M===0?"uv":`uv${M}`}function m(M,A,O,X,Q){const D=X.fog,H=Q.geometry,j=M.isMeshStandardMaterial?X.environment:null,K=(M.isMeshStandardMaterial?n:e).get(M.envMap||j),U=K&&K.mapping===Wu?K.image.height:null,B=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const z=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Z=z!==void 0?z.length:0;let ie=0;H.morphAttributes.position!==void 0&&(ie=1),H.morphAttributes.normal!==void 0&&(ie=2),H.morphAttributes.color!==void 0&&(ie=3);let $,ee,de,pe;if(B){const tn=fi[B];$=tn.vertexShader,ee=tn.fragmentShader}else $=M.vertexShader,ee=M.fragmentShader,l.update(M),de=l.getVertexShaderID(M),pe=l.getFragmentShaderID(M);const he=t.getRenderTarget(),Ee=Q.isInstancedMesh===!0,Re=Q.isBatchedMesh===!0,_e=!!M.map,oe=!!M.matcap,S=!!K,I=!!M.aoMap,L=!!M.lightMap,G=!!M.bumpMap,F=!!M.normalMap,fe=!!M.displacementMap,se=!!M.emissiveMap,R=!!M.metalnessMap,w=!!M.roughnessMap,V=M.anisotropy>0,re=M.clearcoat>0,ae=M.iridescence>0,le=M.sheen>0,be=M.transmission>0,ye=V&&!!M.anisotropyMap,Te=re&&!!M.clearcoatMap,De=re&&!!M.clearcoatNormalMap,Be=re&&!!M.clearcoatRoughnessMap,ue=ae&&!!M.iridescenceMap,Ze=ae&&!!M.iridescenceThicknessMap,Ye=le&&!!M.sheenColorMap,ze=le&&!!M.sheenRoughnessMap,Le=!!M.specularMap,Ce=!!M.specularColorMap,Ge=!!M.specularIntensityMap,Je=be&&!!M.transmissionMap,yt=be&&!!M.thicknessMap,Xe=!!M.gradientMap,ge=!!M.alphaMap,N=M.alphaTest>0,xe=!!M.alphaHash,Se=!!M.extensions,Ue=!!H.attributes.uv1,Ie=!!H.attributes.uv2,it=!!H.attributes.uv3;let rt=pr;return M.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(rt=t.toneMapping),{isWebGL2:c,shaderID:B,shaderType:M.type,shaderName:M.name,vertexShader:$,fragmentShader:ee,defines:M.defines,customVertexShaderID:de,customFragmentShaderID:pe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Re,instancing:Ee,instancingColor:Ee&&Q.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:he===null?t.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Gi,map:_e,matcap:oe,envMap:S,envMapMode:S&&K.mapping,envMapCubeUVHeight:U,aoMap:I,lightMap:L,bumpMap:G,normalMap:F,displacementMap:h&&fe,emissiveMap:se,normalMapObjectSpace:F&&M.normalMapType===$E,normalMapTangentSpace:F&&M.normalMapType===S_,metalnessMap:R,roughnessMap:w,anisotropy:V,anisotropyMap:ye,clearcoat:re,clearcoatMap:Te,clearcoatNormalMap:De,clearcoatRoughnessMap:Be,iridescence:ae,iridescenceMap:ue,iridescenceThicknessMap:Ze,sheen:le,sheenColorMap:Ye,sheenRoughnessMap:ze,specularMap:Le,specularColorMap:Ce,specularIntensityMap:Ge,transmission:be,transmissionMap:Je,thicknessMap:yt,gradientMap:Xe,opaque:M.transparent===!1&&M.blending===Jo,alphaMap:ge,alphaTest:N,alphaHash:xe,combine:M.combine,mapUv:_e&&y(M.map.channel),aoMapUv:I&&y(M.aoMap.channel),lightMapUv:L&&y(M.lightMap.channel),bumpMapUv:G&&y(M.bumpMap.channel),normalMapUv:F&&y(M.normalMap.channel),displacementMapUv:fe&&y(M.displacementMap.channel),emissiveMapUv:se&&y(M.emissiveMap.channel),metalnessMapUv:R&&y(M.metalnessMap.channel),roughnessMapUv:w&&y(M.roughnessMap.channel),anisotropyMapUv:ye&&y(M.anisotropyMap.channel),clearcoatMapUv:Te&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:De&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:ze&&y(M.sheenRoughnessMap.channel),specularMapUv:Le&&y(M.specularMap.channel),specularColorMapUv:Ce&&y(M.specularColorMap.channel),specularIntensityMapUv:Ge&&y(M.specularIntensityMap.channel),transmissionMapUv:Je&&y(M.transmissionMap.channel),thicknessMapUv:yt&&y(M.thicknessMap.channel),alphaMapUv:ge&&y(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(F||V),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:Ue,vertexUv2s:Ie,vertexUv3s:it,pointsUvs:Q.isPoints===!0&&!!H.attributes.uv&&(_e||ge),fog:!!D,useFog:M.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:Q.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ie,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&O.length>0,shadowMapType:t.shadowMap.type,toneMapping:rt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:_e&&M.map.isVideoTexture===!0&&et.getTransfer(M.map.colorSpace)===ut,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===fn,flipSided:M.side===_n,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Se&&M.extensions.derivatives===!0,extensionFragDepth:Se&&M.extensions.fragDepth===!0,extensionDrawBuffers:Se&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Se&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Se&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const O in M.defines)A.push(O),A.push(M.defines[O]);return M.isRawShaderMaterial===!1&&(x(A,M),v(A,M),A.push(t.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function x(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function v(M,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),M.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function _(M){const A=g[M.type];let O;if(A){const X=fi[A];O=xM.clone(X.uniforms)}else O=M.uniforms;return O}function C(M,A){let O;for(let X=0,Q=u.length;X<Q;X++){const D=u[X];if(D.cacheKey===A){O=D,++O.usedTimes;break}}return O===void 0&&(O=new NA(t,A,M,o),u.push(O)),O}function E(M){if(--M.usedTimes===0){const A=u.indexOf(M);u[A]=u[u.length-1],u.pop(),M.destroy()}}function T(M){l.remove(M)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:C,releaseProgram:E,releaseShaderCache:T,programs:u,dispose:P}}function kA(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function BA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function pg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function mg(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(f,h,p,g,y,m){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:y,group:m},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=y,d.group=m),e++,d}function a(f,h,p,g,y,m){const d=s(f,h,p,g,y,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(f,h,p,g,y,m){const d=s(f,h,p,g,y,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function u(f,h){n.length>1&&n.sort(f||BA),i.length>1&&i.sort(h||pg),r.length>1&&r.sort(h||pg)}function c(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:c,sort:u}}function HA(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new mg,t.set(i,[s])):r>=o.length?(s=new mg,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function GA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new Fe};break;case"SpotLight":n={position:new k,direction:new k,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":n={color:new Fe,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function VA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let WA=0;function XA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function jA(t,e){const n=new GA,i=VA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new k);const o=new k,s=new Mt,a=new Mt;function l(c,f){let h=0,p=0,g=0;for(let X=0;X<9;X++)r.probe[X].set(0,0,0);let y=0,m=0,d=0,x=0,v=0,_=0,C=0,E=0,T=0,P=0,M=0;c.sort(XA);const A=f===!0?Math.PI:1;for(let X=0,Q=c.length;X<Q;X++){const D=c[X],H=D.color,j=D.intensity,K=D.distance,U=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=H.r*j*A,p+=H.g*j*A,g+=H.b*j*A;else if(D.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(D.sh.coefficients[B],j);M++}else if(D.isDirectionalLight){const B=n.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity*A),D.castShadow){const z=D.shadow,Z=i.get(D);Z.shadowBias=z.bias,Z.shadowNormalBias=z.normalBias,Z.shadowRadius=z.radius,Z.shadowMapSize=z.mapSize,r.directionalShadow[y]=Z,r.directionalShadowMap[y]=U,r.directionalShadowMatrix[y]=D.shadow.matrix,_++}r.directional[y]=B,y++}else if(D.isSpotLight){const B=n.get(D);B.position.setFromMatrixPosition(D.matrixWorld),B.color.copy(H).multiplyScalar(j*A),B.distance=K,B.coneCos=Math.cos(D.angle),B.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),B.decay=D.decay,r.spot[d]=B;const z=D.shadow;if(D.map&&(r.spotLightMap[T]=D.map,T++,z.updateMatrices(D),D.castShadow&&P++),r.spotLightMatrix[d]=z.matrix,D.castShadow){const Z=i.get(D);Z.shadowBias=z.bias,Z.shadowNormalBias=z.normalBias,Z.shadowRadius=z.radius,Z.shadowMapSize=z.mapSize,r.spotShadow[d]=Z,r.spotShadowMap[d]=U,E++}d++}else if(D.isRectAreaLight){const B=n.get(D);B.color.copy(H).multiplyScalar(j),B.halfWidth.set(D.width*.5,0,0),B.halfHeight.set(0,D.height*.5,0),r.rectArea[x]=B,x++}else if(D.isPointLight){const B=n.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity*A),B.distance=D.distance,B.decay=D.decay,D.castShadow){const z=D.shadow,Z=i.get(D);Z.shadowBias=z.bias,Z.shadowNormalBias=z.normalBias,Z.shadowRadius=z.radius,Z.shadowMapSize=z.mapSize,Z.shadowCameraNear=z.camera.near,Z.shadowCameraFar=z.camera.far,r.pointShadow[m]=Z,r.pointShadowMap[m]=U,r.pointShadowMatrix[m]=D.shadow.matrix,C++}r.point[m]=B,m++}else if(D.isHemisphereLight){const B=n.get(D);B.skyColor.copy(D.color).multiplyScalar(j*A),B.groundColor.copy(D.groundColor).multiplyScalar(j*A),r.hemi[v]=B,v++}}x>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=g;const O=r.hash;(O.directionalLength!==y||O.pointLength!==m||O.spotLength!==d||O.rectAreaLength!==x||O.hemiLength!==v||O.numDirectionalShadows!==_||O.numPointShadows!==C||O.numSpotShadows!==E||O.numSpotMaps!==T||O.numLightProbes!==M)&&(r.directional.length=y,r.spot.length=d,r.rectArea.length=x,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=_,r.directionalShadowMap.length=_,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=_,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=E+T-P,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=M,O.directionalLength=y,O.pointLength=m,O.spotLength=d,O.rectAreaLength=x,O.hemiLength=v,O.numDirectionalShadows=_,O.numPointShadows=C,O.numSpotShadows=E,O.numSpotMaps=T,O.numLightProbes=M,r.version=WA++)}function u(c,f){let h=0,p=0,g=0,y=0,m=0;const d=f.matrixWorldInverse;for(let x=0,v=c.length;x<v;x++){const _=c[x];if(_.isDirectionalLight){const C=r.directional[h];C.direction.setFromMatrixPosition(_.matrixWorld),o.setFromMatrixPosition(_.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(d),h++}else if(_.isSpotLight){const C=r.spot[g];C.position.setFromMatrixPosition(_.matrixWorld),C.position.applyMatrix4(d),C.direction.setFromMatrixPosition(_.matrixWorld),o.setFromMatrixPosition(_.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(d),g++}else if(_.isRectAreaLight){const C=r.rectArea[y];C.position.setFromMatrixPosition(_.matrixWorld),C.position.applyMatrix4(d),a.identity(),s.copy(_.matrixWorld),s.premultiply(d),a.extractRotation(s),C.halfWidth.set(_.width*.5,0,0),C.halfHeight.set(0,_.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),y++}else if(_.isPointLight){const C=r.point[p];C.position.setFromMatrixPosition(_.matrixWorld),C.position.applyMatrix4(d),p++}else if(_.isHemisphereLight){const C=r.hemi[m];C.direction.setFromMatrixPosition(_.matrixWorld),C.direction.transformDirection(d),m++}}}return{setup:l,setupView:u,state:r}}function gg(t,e){const n=new jA(t,e),i=[],r=[];function o(){i.length=0,r.length=0}function s(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function u(f){n.setupView(i,f)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:s,pushShadow:a}}function $A(t,e){let n=new WeakMap;function i(o,s=0){const a=n.get(o);let l;return a===void 0?(l=new gg(t,e),n.set(o,[l])):s>=a.length?(l=new gg(t,e),a.push(l)):l=a[s],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class YA extends ro{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=XE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qA extends ro{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const KA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZA=`uniform sampler2D shadow_pass;
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
}`;function JA(t,e,n){let i=new Rh;const r=new me,o=new me,s=new zt,a=new YA({depthPacking:jE}),l=new qA,u={},c=n.maxTextureSize,f={[_r]:_n,[_n]:_r,[fn]:fn},h=new eo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:KA,fragmentShader:ZA}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new jn;g.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new kn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=u_;let d=this.type;this.render=function(E,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const M=t.getRenderTarget(),A=t.getActiveCubeFace(),O=t.getActiveMipmapLevel(),X=t.state;X.setBlending(hr),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const Q=d!==Ri&&this.type===Ri,D=d===Ri&&this.type!==Ri;for(let H=0,j=E.length;H<j;H++){const K=E[H],U=K.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const B=U.getFrameExtents();if(r.multiply(B),o.copy(U.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(o.x=Math.floor(c/B.x),r.x=o.x*B.x,U.mapSize.x=o.x),r.y>c&&(o.y=Math.floor(c/B.y),r.y=o.y*B.y,U.mapSize.y=o.y)),U.map===null||Q===!0||D===!0){const Z=this.type!==Ri?{minFilter:an,magFilter:an}:{};U.map!==null&&U.map.dispose(),U.map=new Qr(r.x,r.y,Z),U.map.texture.name=K.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const z=U.getViewportCount();for(let Z=0;Z<z;Z++){const ie=U.getViewport(Z);s.set(o.x*ie.x,o.y*ie.y,o.x*ie.z,o.y*ie.w),X.viewport(s),U.updateMatrices(K,Z),i=U.getFrustum(),_(T,P,U.camera,K,this.type)}U.isPointLightShadow!==!0&&this.type===Ri&&x(U,P),U.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(M,A,O)};function x(E,T){const P=e.update(y);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Qr(r.x,r.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(T,null,P,h,y,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(T,null,P,p,y,null)}function v(E,T,P,M){let A=null;const O=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(O!==void 0)A=O;else if(A=P.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const X=A.uuid,Q=T.uuid;let D=u[X];D===void 0&&(D={},u[X]=D);let H=D[Q];H===void 0&&(H=A.clone(),D[Q]=H,T.addEventListener("dispose",C)),A=H}if(A.visible=T.visible,A.wireframe=T.wireframe,M===Ri?A.side=T.shadowSide!==null?T.shadowSide:T.side:A.side=T.shadowSide!==null?T.shadowSide:f[T.side],A.alphaMap=T.alphaMap,A.alphaTest=T.alphaTest,A.map=T.map,A.clipShadows=T.clipShadows,A.clippingPlanes=T.clippingPlanes,A.clipIntersection=T.clipIntersection,A.displacementMap=T.displacementMap,A.displacementScale=T.displacementScale,A.displacementBias=T.displacementBias,A.wireframeLinewidth=T.wireframeLinewidth,A.linewidth=T.linewidth,P.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const X=t.properties.get(A);X.light=P}return A}function _(E,T,P,M,A){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&A===Ri)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const Q=e.update(E),D=E.material;if(Array.isArray(D)){const H=Q.groups;for(let j=0,K=H.length;j<K;j++){const U=H[j],B=D[U.materialIndex];if(B&&B.visible){const z=v(E,B,M,A);E.onBeforeShadow(t,E,T,P,Q,z,U),t.renderBufferDirect(P,null,Q,z,E,U),E.onAfterShadow(t,E,T,P,Q,z,U)}}}else if(D.visible){const H=v(E,D,M,A);E.onBeforeShadow(t,E,T,P,Q,H,null),t.renderBufferDirect(P,null,Q,H,E,null),E.onAfterShadow(t,E,T,P,Q,H,null)}}const X=E.children;for(let Q=0,D=X.length;Q<D;Q++)_(X[Q],T,P,M,A)}function C(E){E.target.removeEventListener("dispose",C);for(const P in u){const M=u[P],A=E.target.uuid;A in M&&(M[A].dispose(),delete M[A])}}}function QA(t,e,n){const i=n.isWebGL2;function r(){let N=!1;const xe=new zt;let Se=null;const Ue=new zt(0,0,0,0);return{setMask:function(Ie){Se!==Ie&&!N&&(t.colorMask(Ie,Ie,Ie,Ie),Se=Ie)},setLocked:function(Ie){N=Ie},setClear:function(Ie,it,rt,Nt,tn){tn===!0&&(Ie*=Nt,it*=Nt,rt*=Nt),xe.set(Ie,it,rt,Nt),Ue.equals(xe)===!1&&(t.clearColor(Ie,it,rt,Nt),Ue.copy(xe))},reset:function(){N=!1,Se=null,Ue.set(-1,0,0,0)}}}function o(){let N=!1,xe=null,Se=null,Ue=null;return{setTest:function(Ie){Ie?Re(t.DEPTH_TEST):_e(t.DEPTH_TEST)},setMask:function(Ie){xe!==Ie&&!N&&(t.depthMask(Ie),xe=Ie)},setFunc:function(Ie){if(Se!==Ie){switch(Ie){case SE:t.depthFunc(t.NEVER);break;case EE:t.depthFunc(t.ALWAYS);break;case ME:t.depthFunc(t.LESS);break;case yu:t.depthFunc(t.LEQUAL);break;case wE:t.depthFunc(t.EQUAL);break;case TE:t.depthFunc(t.GEQUAL);break;case AE:t.depthFunc(t.GREATER);break;case RE:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Se=Ie}},setLocked:function(Ie){N=Ie},setClear:function(Ie){Ue!==Ie&&(t.clearDepth(Ie),Ue=Ie)},reset:function(){N=!1,xe=null,Se=null,Ue=null}}}function s(){let N=!1,xe=null,Se=null,Ue=null,Ie=null,it=null,rt=null,Nt=null,tn=null;return{setTest:function(ot){N||(ot?Re(t.STENCIL_TEST):_e(t.STENCIL_TEST))},setMask:function(ot){xe!==ot&&!N&&(t.stencilMask(ot),xe=ot)},setFunc:function(ot,nn,li){(Se!==ot||Ue!==nn||Ie!==li)&&(t.stencilFunc(ot,nn,li),Se=ot,Ue=nn,Ie=li)},setOp:function(ot,nn,li){(it!==ot||rt!==nn||Nt!==li)&&(t.stencilOp(ot,nn,li),it=ot,rt=nn,Nt=li)},setLocked:function(ot){N=ot},setClear:function(ot){tn!==ot&&(t.clearStencil(ot),tn=ot)},reset:function(){N=!1,xe=null,Se=null,Ue=null,Ie=null,it=null,rt=null,Nt=null,tn=null}}}const a=new r,l=new o,u=new s,c=new WeakMap,f=new WeakMap;let h={},p={},g=new WeakMap,y=[],m=null,d=!1,x=null,v=null,_=null,C=null,E=null,T=null,P=null,M=new Fe(0,0,0),A=0,O=!1,X=null,Q=null,D=null,H=null,j=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,B=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(z)[1]),U=B>=1):z.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),U=B>=2);let Z=null,ie={};const $=t.getParameter(t.SCISSOR_BOX),ee=t.getParameter(t.VIEWPORT),de=new zt().fromArray($),pe=new zt().fromArray(ee);function he(N,xe,Se,Ue){const Ie=new Uint8Array(4),it=t.createTexture();t.bindTexture(N,it),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let rt=0;rt<Se;rt++)i&&(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)?t.texImage3D(xe,0,t.RGBA,1,1,Ue,0,t.RGBA,t.UNSIGNED_BYTE,Ie):t.texImage2D(xe+rt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ie);return it}const Ee={};Ee[t.TEXTURE_2D]=he(t.TEXTURE_2D,t.TEXTURE_2D,1),Ee[t.TEXTURE_CUBE_MAP]=he(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ee[t.TEXTURE_2D_ARRAY]=he(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ee[t.TEXTURE_3D]=he(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Re(t.DEPTH_TEST),l.setFunc(yu),se(!1),R(Jp),Re(t.CULL_FACE),F(hr);function Re(N){h[N]!==!0&&(t.enable(N),h[N]=!0)}function _e(N){h[N]!==!1&&(t.disable(N),h[N]=!1)}function oe(N,xe){return p[N]!==xe?(t.bindFramebuffer(N,xe),p[N]=xe,i&&(N===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=xe),N===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=xe)),!0):!1}function S(N,xe){let Se=y,Ue=!1;if(N)if(Se=g.get(xe),Se===void 0&&(Se=[],g.set(xe,Se)),N.isWebGLMultipleRenderTargets){const Ie=N.texture;if(Se.length!==Ie.length||Se[0]!==t.COLOR_ATTACHMENT0){for(let it=0,rt=Ie.length;it<rt;it++)Se[it]=t.COLOR_ATTACHMENT0+it;Se.length=Ie.length,Ue=!0}}else Se[0]!==t.COLOR_ATTACHMENT0&&(Se[0]=t.COLOR_ATTACHMENT0,Ue=!0);else Se[0]!==t.BACK&&(Se[0]=t.BACK,Ue=!0);Ue&&(n.isWebGL2?t.drawBuffers(Se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Se))}function I(N){return m!==N?(t.useProgram(N),m=N,!0):!1}const L={[Ur]:t.FUNC_ADD,[sE]:t.FUNC_SUBTRACT,[aE]:t.FUNC_REVERSE_SUBTRACT};if(i)L[nm]=t.MIN,L[im]=t.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(L[nm]=N.MIN_EXT,L[im]=N.MAX_EXT)}const G={[lE]:t.ZERO,[uE]:t.ONE,[cE]:t.SRC_COLOR,[df]:t.SRC_ALPHA,[gE]:t.SRC_ALPHA_SATURATE,[pE]:t.DST_COLOR,[fE]:t.DST_ALPHA,[dE]:t.ONE_MINUS_SRC_COLOR,[ff]:t.ONE_MINUS_SRC_ALPHA,[mE]:t.ONE_MINUS_DST_COLOR,[hE]:t.ONE_MINUS_DST_ALPHA,[vE]:t.CONSTANT_COLOR,[_E]:t.ONE_MINUS_CONSTANT_COLOR,[yE]:t.CONSTANT_ALPHA,[xE]:t.ONE_MINUS_CONSTANT_ALPHA};function F(N,xe,Se,Ue,Ie,it,rt,Nt,tn,ot){if(N===hr){d===!0&&(_e(t.BLEND),d=!1);return}if(d===!1&&(Re(t.BLEND),d=!0),N!==oE){if(N!==x||ot!==O){if((v!==Ur||E!==Ur)&&(t.blendEquation(t.FUNC_ADD),v=Ur,E=Ur),ot)switch(N){case Jo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Qp:t.blendFunc(t.ONE,t.ONE);break;case em:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case tm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Jo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Qp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case em:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case tm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}_=null,C=null,T=null,P=null,M.set(0,0,0),A=0,x=N,O=ot}return}Ie=Ie||xe,it=it||Se,rt=rt||Ue,(xe!==v||Ie!==E)&&(t.blendEquationSeparate(L[xe],L[Ie]),v=xe,E=Ie),(Se!==_||Ue!==C||it!==T||rt!==P)&&(t.blendFuncSeparate(G[Se],G[Ue],G[it],G[rt]),_=Se,C=Ue,T=it,P=rt),(Nt.equals(M)===!1||tn!==A)&&(t.blendColor(Nt.r,Nt.g,Nt.b,tn),M.copy(Nt),A=tn),x=N,O=!1}function fe(N,xe){N.side===fn?_e(t.CULL_FACE):Re(t.CULL_FACE);let Se=N.side===_n;xe&&(Se=!Se),se(Se),N.blending===Jo&&N.transparent===!1?F(hr):F(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const Ue=N.stencilWrite;u.setTest(Ue),Ue&&(u.setMask(N.stencilWriteMask),u.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),u.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),V(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Re(t.SAMPLE_ALPHA_TO_COVERAGE):_e(t.SAMPLE_ALPHA_TO_COVERAGE)}function se(N){X!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),X=N)}function R(N){N!==iE?(Re(t.CULL_FACE),N!==Q&&(N===Jp?t.cullFace(t.BACK):N===rE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):_e(t.CULL_FACE),Q=N}function w(N){N!==D&&(U&&t.lineWidth(N),D=N)}function V(N,xe,Se){N?(Re(t.POLYGON_OFFSET_FILL),(H!==xe||j!==Se)&&(t.polygonOffset(xe,Se),H=xe,j=Se)):_e(t.POLYGON_OFFSET_FILL)}function re(N){N?Re(t.SCISSOR_TEST):_e(t.SCISSOR_TEST)}function ae(N){N===void 0&&(N=t.TEXTURE0+K-1),Z!==N&&(t.activeTexture(N),Z=N)}function le(N,xe,Se){Se===void 0&&(Z===null?Se=t.TEXTURE0+K-1:Se=Z);let Ue=ie[Se];Ue===void 0&&(Ue={type:void 0,texture:void 0},ie[Se]=Ue),(Ue.type!==N||Ue.texture!==xe)&&(Z!==Se&&(t.activeTexture(Se),Z=Se),t.bindTexture(N,xe||Ee[N]),Ue.type=N,Ue.texture=xe)}function be(){const N=ie[Z];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ye(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Be(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ze(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ye(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ze(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ge(N){de.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),de.copy(N))}function Je(N){pe.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),pe.copy(N))}function yt(N,xe){let Se=f.get(xe);Se===void 0&&(Se=new WeakMap,f.set(xe,Se));let Ue=Se.get(N);Ue===void 0&&(Ue=t.getUniformBlockIndex(xe,N.name),Se.set(N,Ue))}function Xe(N,xe){const Ue=f.get(xe).get(N);c.get(xe)!==Ue&&(t.uniformBlockBinding(xe,Ue,N.__bindingPointIndex),c.set(xe,Ue))}function ge(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},Z=null,ie={},p={},g=new WeakMap,y=[],m=null,d=!1,x=null,v=null,_=null,C=null,E=null,T=null,P=null,M=new Fe(0,0,0),A=0,O=!1,X=null,Q=null,D=null,H=null,j=null,de.set(0,0,t.canvas.width,t.canvas.height),pe.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Re,disable:_e,bindFramebuffer:oe,drawBuffers:S,useProgram:I,setBlending:F,setMaterial:fe,setFlipSided:se,setCullFace:R,setLineWidth:w,setPolygonOffset:V,setScissorTest:re,activeTexture:ae,bindTexture:le,unbindTexture:be,compressedTexImage2D:ye,compressedTexImage3D:Te,texImage2D:Le,texImage3D:Ce,updateUBOMapping:yt,uniformBlockBinding:Xe,texStorage2D:Ye,texStorage3D:ze,texSubImage2D:De,texSubImage3D:Be,compressedTexSubImage2D:ue,compressedTexSubImage3D:Ze,scissor:Ge,viewport:Je,reset:ge}}function eR(t,e,n,i,r,o,s){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,w){return p?new OffscreenCanvas(R,w):wu("canvas")}function y(R,w,V,re){let ae=1;if((R.width>re||R.height>re)&&(ae=re/Math.max(R.width,R.height)),ae<1||w===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const le=w?yf:Math.floor,be=le(ae*R.width),ye=le(ae*R.height);f===void 0&&(f=g(be,ye));const Te=V?g(be,ye):f;return Te.width=be,Te.height=ye,Te.getContext("2d").drawImage(R,0,0,be,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+be+"x"+ye+")."),Te}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return Dm(R.width)&&Dm(R.height)}function d(R){return a?!1:R.wrapS!==ti||R.wrapT!==ti||R.minFilter!==an&&R.minFilter!==Nn}function x(R,w){return R.generateMipmaps&&w&&R.minFilter!==an&&R.minFilter!==Nn}function v(R){t.generateMipmap(R)}function _(R,w,V,re,ae=!1){if(a===!1)return w;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let le=w;if(w===t.RED&&(V===t.FLOAT&&(le=t.R32F),V===t.HALF_FLOAT&&(le=t.R16F),V===t.UNSIGNED_BYTE&&(le=t.R8)),w===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(le=t.R8UI),V===t.UNSIGNED_SHORT&&(le=t.R16UI),V===t.UNSIGNED_INT&&(le=t.R32UI),V===t.BYTE&&(le=t.R8I),V===t.SHORT&&(le=t.R16I),V===t.INT&&(le=t.R32I)),w===t.RG&&(V===t.FLOAT&&(le=t.RG32F),V===t.HALF_FLOAT&&(le=t.RG16F),V===t.UNSIGNED_BYTE&&(le=t.RG8)),w===t.RGBA){const be=ae?xu:et.getTransfer(re);V===t.FLOAT&&(le=t.RGBA32F),V===t.HALF_FLOAT&&(le=t.RGBA16F),V===t.UNSIGNED_BYTE&&(le=be===ut?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(le=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(le=t.RGB5_A1)}return(le===t.R16F||le===t.R32F||le===t.RG16F||le===t.RG32F||le===t.RGBA16F||le===t.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function C(R,w,V){return x(R,V)===!0||R.isFramebufferTexture&&R.minFilter!==an&&R.minFilter!==Nn?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function E(R){return R===an||R===rm||R===Pc?t.NEAREST:t.LINEAR}function T(R){const w=R.target;w.removeEventListener("dispose",T),M(w),w.isVideoTexture&&c.delete(w)}function P(R){const w=R.target;w.removeEventListener("dispose",P),O(w)}function M(R){const w=i.get(R);if(w.__webglInit===void 0)return;const V=R.source,re=h.get(V);if(re){const ae=re[w.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&A(R),Object.keys(re).length===0&&h.delete(V)}i.remove(R)}function A(R){const w=i.get(R);t.deleteTexture(w.__webglTexture);const V=R.source,re=h.get(V);delete re[w.__cacheKey],s.memory.textures--}function O(R){const w=R.texture,V=i.get(R),re=i.get(w);if(re.__webglTexture!==void 0&&(t.deleteTexture(re.__webglTexture),s.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(V.__webglFramebuffer[ae]))for(let le=0;le<V.__webglFramebuffer[ae].length;le++)t.deleteFramebuffer(V.__webglFramebuffer[ae][le]);else t.deleteFramebuffer(V.__webglFramebuffer[ae]);V.__webglDepthbuffer&&t.deleteRenderbuffer(V.__webglDepthbuffer[ae])}else{if(Array.isArray(V.__webglFramebuffer))for(let ae=0;ae<V.__webglFramebuffer.length;ae++)t.deleteFramebuffer(V.__webglFramebuffer[ae]);else t.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&t.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&t.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ae=0;ae<V.__webglColorRenderbuffer.length;ae++)V.__webglColorRenderbuffer[ae]&&t.deleteRenderbuffer(V.__webglColorRenderbuffer[ae]);V.__webglDepthRenderbuffer&&t.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ae=0,le=w.length;ae<le;ae++){const be=i.get(w[ae]);be.__webglTexture&&(t.deleteTexture(be.__webglTexture),s.memory.textures--),i.remove(w[ae])}i.remove(w),i.remove(R)}let X=0;function Q(){X=0}function D(){const R=X;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),X+=1,R}function H(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function j(R,w){const V=i.get(R);if(R.isVideoTexture&&fe(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const re=R.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(V,R,w);return}}n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+w)}function K(R,w){const V=i.get(R);if(R.version>0&&V.__version!==R.version){de(V,R,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+w)}function U(R,w){const V=i.get(R);if(R.version>0&&V.__version!==R.version){de(V,R,w);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+w)}function B(R,w){const V=i.get(R);if(R.version>0&&V.__version!==R.version){pe(V,R,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+w)}const z={[Jr]:t.REPEAT,[ti]:t.CLAMP_TO_EDGE,[mf]:t.MIRRORED_REPEAT},Z={[an]:t.NEAREST,[rm]:t.NEAREST_MIPMAP_NEAREST,[Pc]:t.NEAREST_MIPMAP_LINEAR,[Nn]:t.LINEAR,[OE]:t.LINEAR_MIPMAP_NEAREST,[Ea]:t.LINEAR_MIPMAP_LINEAR},ie={[YE]:t.NEVER,[eM]:t.ALWAYS,[qE]:t.LESS,[E_]:t.LEQUAL,[KE]:t.EQUAL,[QE]:t.GEQUAL,[ZE]:t.GREATER,[JE]:t.NOTEQUAL};function $(R,w,V){if(V?(t.texParameteri(R,t.TEXTURE_WRAP_S,z[w.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,z[w.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,z[w.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Z[w.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Z[w.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(w.wrapS!==ti||w.wrapT!==ti)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,E(w.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,E(w.minFilter)),w.minFilter!==an&&w.minFilter!==Nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,ie[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===an||w.minFilter!==Pc&&w.minFilter!==Ea||w.type===ir&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===Ma&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(t.texParameterf(R,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function ee(R,w){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",T));const re=w.source;let ae=h.get(re);ae===void 0&&(ae={},h.set(re,ae));const le=H(w);if(le!==R.__cacheKey){ae[le]===void 0&&(ae[le]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,V=!0),ae[le].usedTimes++;const be=ae[R.__cacheKey];be!==void 0&&(ae[R.__cacheKey].usedTimes--,be.usedTimes===0&&A(w)),R.__cacheKey=le,R.__webglTexture=ae[le].texture}return V}function de(R,w,V){let re=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(re=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(re=t.TEXTURE_3D);const ae=ee(R,w),le=w.source;n.bindTexture(re,R.__webglTexture,t.TEXTURE0+V);const be=i.get(le);if(le.version!==be.__version||ae===!0){n.activeTexture(t.TEXTURE0+V);const ye=et.getPrimaries(et.workingColorSpace),Te=w.colorSpace===Fn?null:et.getPrimaries(w.colorSpace),De=w.colorSpace===Fn||ye===Te?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const Be=d(w)&&m(w.image)===!1;let ue=y(w.image,Be,!1,r.maxTextureSize);ue=se(w,ue);const Ze=m(ue)||a,Ye=o.convert(w.format,w.colorSpace);let ze=o.convert(w.type),Le=_(w.internalFormat,Ye,ze,w.colorSpace,w.isVideoTexture);$(re,w,Ze);let Ce;const Ge=w.mipmaps,Je=a&&w.isVideoTexture!==!0&&Le!==y_,yt=be.__version===void 0||ae===!0,Xe=C(w,ue,Ze);if(w.isDepthTexture)Le=t.DEPTH_COMPONENT,a?w.type===ir?Le=t.DEPTH_COMPONENT32F:w.type===nr?Le=t.DEPTH_COMPONENT24:w.type===Wr?Le=t.DEPTH24_STENCIL8:Le=t.DEPTH_COMPONENT16:w.type===ir&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Xr&&Le===t.DEPTH_COMPONENT&&w.type!==Th&&w.type!==nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=nr,ze=o.convert(w.type)),w.format===fs&&Le===t.DEPTH_COMPONENT&&(Le=t.DEPTH_STENCIL,w.type!==Wr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Wr,ze=o.convert(w.type))),yt&&(Je?n.texStorage2D(t.TEXTURE_2D,1,Le,ue.width,ue.height):n.texImage2D(t.TEXTURE_2D,0,Le,ue.width,ue.height,0,Ye,ze,null));else if(w.isDataTexture)if(Ge.length>0&&Ze){Je&&yt&&n.texStorage2D(t.TEXTURE_2D,Xe,Le,Ge[0].width,Ge[0].height);for(let ge=0,N=Ge.length;ge<N;ge++)Ce=Ge[ge],Je?n.texSubImage2D(t.TEXTURE_2D,ge,0,0,Ce.width,Ce.height,Ye,ze,Ce.data):n.texImage2D(t.TEXTURE_2D,ge,Le,Ce.width,Ce.height,0,Ye,ze,Ce.data);w.generateMipmaps=!1}else Je?(yt&&n.texStorage2D(t.TEXTURE_2D,Xe,Le,ue.width,ue.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue.width,ue.height,Ye,ze,ue.data)):n.texImage2D(t.TEXTURE_2D,0,Le,ue.width,ue.height,0,Ye,ze,ue.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Je&&yt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Xe,Le,Ge[0].width,Ge[0].height,ue.depth);for(let ge=0,N=Ge.length;ge<N;ge++)Ce=Ge[ge],w.format!==ni?Ye!==null?Je?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,Ce.width,Ce.height,ue.depth,Ye,Ce.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ge,Le,Ce.width,Ce.height,ue.depth,0,Ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,Ce.width,Ce.height,ue.depth,Ye,ze,Ce.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ge,Le,Ce.width,Ce.height,ue.depth,0,Ye,ze,Ce.data)}else{Je&&yt&&n.texStorage2D(t.TEXTURE_2D,Xe,Le,Ge[0].width,Ge[0].height);for(let ge=0,N=Ge.length;ge<N;ge++)Ce=Ge[ge],w.format!==ni?Ye!==null?Je?n.compressedTexSubImage2D(t.TEXTURE_2D,ge,0,0,Ce.width,Ce.height,Ye,Ce.data):n.compressedTexImage2D(t.TEXTURE_2D,ge,Le,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?n.texSubImage2D(t.TEXTURE_2D,ge,0,0,Ce.width,Ce.height,Ye,ze,Ce.data):n.texImage2D(t.TEXTURE_2D,ge,Le,Ce.width,Ce.height,0,Ye,ze,Ce.data)}else if(w.isDataArrayTexture)Je?(yt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Xe,Le,ue.width,ue.height,ue.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Ye,ze,ue.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,ue.width,ue.height,ue.depth,0,Ye,ze,ue.data);else if(w.isData3DTexture)Je?(yt&&n.texStorage3D(t.TEXTURE_3D,Xe,Le,ue.width,ue.height,ue.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Ye,ze,ue.data)):n.texImage3D(t.TEXTURE_3D,0,Le,ue.width,ue.height,ue.depth,0,Ye,ze,ue.data);else if(w.isFramebufferTexture){if(yt)if(Je)n.texStorage2D(t.TEXTURE_2D,Xe,Le,ue.width,ue.height);else{let ge=ue.width,N=ue.height;for(let xe=0;xe<Xe;xe++)n.texImage2D(t.TEXTURE_2D,xe,Le,ge,N,0,Ye,ze,null),ge>>=1,N>>=1}}else if(Ge.length>0&&Ze){Je&&yt&&n.texStorage2D(t.TEXTURE_2D,Xe,Le,Ge[0].width,Ge[0].height);for(let ge=0,N=Ge.length;ge<N;ge++)Ce=Ge[ge],Je?n.texSubImage2D(t.TEXTURE_2D,ge,0,0,Ye,ze,Ce):n.texImage2D(t.TEXTURE_2D,ge,Le,Ye,ze,Ce);w.generateMipmaps=!1}else Je?(yt&&n.texStorage2D(t.TEXTURE_2D,Xe,Le,ue.width,ue.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ye,ze,ue)):n.texImage2D(t.TEXTURE_2D,0,Le,Ye,ze,ue);x(w,Ze)&&v(re),be.__version=le.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function pe(R,w,V){if(w.image.length!==6)return;const re=ee(R,w),ae=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+V);const le=i.get(ae);if(ae.version!==le.__version||re===!0){n.activeTexture(t.TEXTURE0+V);const be=et.getPrimaries(et.workingColorSpace),ye=w.colorSpace===Fn?null:et.getPrimaries(w.colorSpace),Te=w.colorSpace===Fn||be===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const De=w.isCompressedTexture||w.image[0].isCompressedTexture,Be=w.image[0]&&w.image[0].isDataTexture,ue=[];for(let ge=0;ge<6;ge++)!De&&!Be?ue[ge]=y(w.image[ge],!1,!0,r.maxCubemapSize):ue[ge]=Be?w.image[ge].image:w.image[ge],ue[ge]=se(w,ue[ge]);const Ze=ue[0],Ye=m(Ze)||a,ze=o.convert(w.format,w.colorSpace),Le=o.convert(w.type),Ce=_(w.internalFormat,ze,Le,w.colorSpace),Ge=a&&w.isVideoTexture!==!0,Je=le.__version===void 0||re===!0;let yt=C(w,Ze,Ye);$(t.TEXTURE_CUBE_MAP,w,Ye);let Xe;if(De){Ge&&Je&&n.texStorage2D(t.TEXTURE_CUBE_MAP,yt,Ce,Ze.width,Ze.height);for(let ge=0;ge<6;ge++){Xe=ue[ge].mipmaps;for(let N=0;N<Xe.length;N++){const xe=Xe[N];w.format!==ni?ze!==null?Ge?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,N,0,0,xe.width,xe.height,ze,xe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,N,Ce,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,N,0,0,xe.width,xe.height,ze,Le,xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,N,Ce,xe.width,xe.height,0,ze,Le,xe.data)}}}else{Xe=w.mipmaps,Ge&&Je&&(Xe.length>0&&yt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,yt,Ce,ue[0].width,ue[0].height));for(let ge=0;ge<6;ge++)if(Be){Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ue[ge].width,ue[ge].height,ze,Le,ue[ge].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ce,ue[ge].width,ue[ge].height,0,ze,Le,ue[ge].data);for(let N=0;N<Xe.length;N++){const Se=Xe[N].image[ge].image;Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,N+1,0,0,Se.width,Se.height,ze,Le,Se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,N+1,Ce,Se.width,Se.height,0,ze,Le,Se.data)}}else{Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ze,Le,ue[ge]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ce,ze,Le,ue[ge]);for(let N=0;N<Xe.length;N++){const xe=Xe[N];Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,N+1,0,0,ze,Le,xe.image[ge]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,N+1,Ce,ze,Le,xe.image[ge])}}}x(w,Ye)&&v(t.TEXTURE_CUBE_MAP),le.__version=ae.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function he(R,w,V,re,ae,le){const be=o.convert(V.format,V.colorSpace),ye=o.convert(V.type),Te=_(V.internalFormat,be,ye,V.colorSpace);if(!i.get(w).__hasExternalTextures){const Be=Math.max(1,w.width>>le),ue=Math.max(1,w.height>>le);ae===t.TEXTURE_3D||ae===t.TEXTURE_2D_ARRAY?n.texImage3D(ae,le,Te,Be,ue,w.depth,0,be,ye,null):n.texImage2D(ae,le,Te,Be,ue,0,be,ye,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),F(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,ae,i.get(V).__webglTexture,0,G(w)):(ae===t.TEXTURE_2D||ae>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,re,ae,i.get(V).__webglTexture,le),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ee(R,w,V){if(t.bindRenderbuffer(t.RENDERBUFFER,R),w.depthBuffer&&!w.stencilBuffer){let re=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(V||F(w)){const ae=w.depthTexture;ae&&ae.isDepthTexture&&(ae.type===ir?re=t.DEPTH_COMPONENT32F:ae.type===nr&&(re=t.DEPTH_COMPONENT24));const le=G(w);F(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,re,w.width,w.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,le,re,w.width,w.height)}else t.renderbufferStorage(t.RENDERBUFFER,re,w.width,w.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(w.depthBuffer&&w.stencilBuffer){const re=G(w);V&&F(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,re,t.DEPTH24_STENCIL8,w.width,w.height):F(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,t.DEPTH24_STENCIL8,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const re=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ae=0;ae<re.length;ae++){const le=re[ae],be=o.convert(le.format,le.colorSpace),ye=o.convert(le.type),Te=_(le.internalFormat,be,ye,le.colorSpace),De=G(w);V&&F(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,De,Te,w.width,w.height):F(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,De,Te,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,Te,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Re(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),j(w.depthTexture,0);const re=i.get(w.depthTexture).__webglTexture,ae=G(w);if(w.depthTexture.format===Xr)F(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0);else if(w.depthTexture.format===fs)F(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function _e(R){const w=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Re(w.__webglFramebuffer,R)}else if(V){w.__webglDepthbuffer=[];for(let re=0;re<6;re++)n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[re]),w.__webglDepthbuffer[re]=t.createRenderbuffer(),Ee(w.__webglDepthbuffer[re],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),Ee(w.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function oe(R,w,V){const re=i.get(R);w!==void 0&&he(re.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&_e(R)}function S(R){const w=R.texture,V=i.get(R),re=i.get(w);R.addEventListener("dispose",P),R.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=t.createTexture()),re.__version=w.version,s.memory.textures++);const ae=R.isWebGLCubeRenderTarget===!0,le=R.isWebGLMultipleRenderTargets===!0,be=m(R)||a;if(ae){V.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(a&&w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer[ye]=[];for(let Te=0;Te<w.mipmaps.length;Te++)V.__webglFramebuffer[ye][Te]=t.createFramebuffer()}else V.__webglFramebuffer[ye]=t.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer=[];for(let ye=0;ye<w.mipmaps.length;ye++)V.__webglFramebuffer[ye]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(le)if(r.drawBuffers){const ye=R.texture;for(let Te=0,De=ye.length;Te<De;Te++){const Be=i.get(ye[Te]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&F(R)===!1){const ye=le?w:[w];V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Te=0;Te<ye.length;Te++){const De=ye[Te];V.__webglColorRenderbuffer[Te]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[Te]);const Be=o.convert(De.format,De.colorSpace),ue=o.convert(De.type),Ze=_(De.internalFormat,Be,ue,De.colorSpace,R.isXRRenderTarget===!0),Ye=G(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ye,Ze,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,V.__webglColorRenderbuffer[Te])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),Ee(V.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ae){n.bindTexture(t.TEXTURE_CUBE_MAP,re.__webglTexture),$(t.TEXTURE_CUBE_MAP,w,be);for(let ye=0;ye<6;ye++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let Te=0;Te<w.mipmaps.length;Te++)he(V.__webglFramebuffer[ye][Te],R,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Te);else he(V.__webglFramebuffer[ye],R,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);x(w,be)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(le){const ye=R.texture;for(let Te=0,De=ye.length;Te<De;Te++){const Be=ye[Te],ue=i.get(Be);n.bindTexture(t.TEXTURE_2D,ue.__webglTexture),$(t.TEXTURE_2D,Be,be),he(V.__webglFramebuffer,R,Be,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,0),x(Be,be)&&v(t.TEXTURE_2D)}n.unbindTexture()}else{let ye=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?ye=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ye,re.__webglTexture),$(ye,w,be),a&&w.mipmaps&&w.mipmaps.length>0)for(let Te=0;Te<w.mipmaps.length;Te++)he(V.__webglFramebuffer[Te],R,w,t.COLOR_ATTACHMENT0,ye,Te);else he(V.__webglFramebuffer,R,w,t.COLOR_ATTACHMENT0,ye,0);x(w,be)&&v(ye),n.unbindTexture()}R.depthBuffer&&_e(R)}function I(R){const w=m(R)||a,V=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let re=0,ae=V.length;re<ae;re++){const le=V[re];if(x(le,w)){const be=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ye=i.get(le).__webglTexture;n.bindTexture(be,ye),v(be),n.unbindTexture()}}}function L(R){if(a&&R.samples>0&&F(R)===!1){const w=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],V=R.width,re=R.height;let ae=t.COLOR_BUFFER_BIT;const le=[],be=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ye=i.get(R),Te=R.isWebGLMultipleRenderTargets===!0;if(Te)for(let De=0;De<w.length;De++)n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let De=0;De<w.length;De++){le.push(t.COLOR_ATTACHMENT0+De),R.depthBuffer&&le.push(be);const Be=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;if(Be===!1&&(R.depthBuffer&&(ae|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ae|=t.STENCIL_BUFFER_BIT)),Te&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ye.__webglColorRenderbuffer[De]),Be===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[be]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[be])),Te){const ue=i.get(w[De]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ue,0)}t.blitFramebuffer(0,0,V,re,0,0,V,re,ae,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,le)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Te)for(let De=0;De<w.length;De++){n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.RENDERBUFFER,ye.__webglColorRenderbuffer[De]);const Be=i.get(w[De]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.TEXTURE_2D,Be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}}function G(R){return Math.min(r.maxSamples,R.samples)}function F(R){const w=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function fe(R){const w=s.render.frame;c.get(R)!==w&&(c.set(R,w),R.update())}function se(R,w){const V=R.colorSpace,re=R.format,ae=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===vf||V!==Gi&&V!==Fn&&(et.getTransfer(V)===ut?a===!1?e.has("EXT_sRGB")===!0&&re===ni?(R.format=vf,R.minFilter=Nn,R.generateMipmaps=!1):w=w_.sRGBToLinear(w):(re!==ni||ae!==mr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),w}this.allocateTextureUnit=D,this.resetTextureUnits=Q,this.setTexture2D=j,this.setTexture2DArray=K,this.setTexture3D=U,this.setTextureCube=B,this.rebindTextures=oe,this.setupRenderTarget=S,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=he,this.useMultisampledRTT=F}function tR(t,e,n){const i=n.isWebGL2;function r(o,s=Fn){let a;const l=et.getTransfer(s);if(o===mr)return t.UNSIGNED_BYTE;if(o===p_)return t.UNSIGNED_SHORT_4_4_4_4;if(o===m_)return t.UNSIGNED_SHORT_5_5_5_1;if(o===FE)return t.BYTE;if(o===zE)return t.SHORT;if(o===Th)return t.UNSIGNED_SHORT;if(o===h_)return t.INT;if(o===nr)return t.UNSIGNED_INT;if(o===ir)return t.FLOAT;if(o===Ma)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===kE)return t.ALPHA;if(o===ni)return t.RGBA;if(o===BE)return t.LUMINANCE;if(o===HE)return t.LUMINANCE_ALPHA;if(o===Xr)return t.DEPTH_COMPONENT;if(o===fs)return t.DEPTH_STENCIL;if(o===vf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===GE)return t.RED;if(o===g_)return t.RED_INTEGER;if(o===VE)return t.RG;if(o===v_)return t.RG_INTEGER;if(o===__)return t.RGBA_INTEGER;if(o===Lc||o===Dc||o===Ic||o===Nc)if(l===ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===Lc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Dc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Ic)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Nc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===Lc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Dc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Ic)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Nc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===om||o===sm||o===am||o===lm)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===om)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===sm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===am)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===lm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===y_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===um||o===cm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===um)return l===ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===cm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===dm||o===fm||o===hm||o===pm||o===mm||o===gm||o===vm||o===_m||o===ym||o===xm||o===Sm||o===Em||o===Mm||o===wm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===dm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===fm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===hm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===pm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===mm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===gm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===vm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===_m)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===ym)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===xm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Sm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Em)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Mm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===wm)return l===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Uc||o===Tm||o===Am)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===Uc)return l===ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===Tm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===Am)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===WE||o===Rm||o===Cm||o===bm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===Uc)return a.COMPRESSED_RED_RGTC1_EXT;if(o===Rm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Cm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===bm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Wr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:r}}class nR extends On{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Hr extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iR={type:"move"};class sd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),d=this._getHandJoint(u,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),p=.02,g=.005;u.inputState.pinching&&h>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(iR)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Hr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class rR extends Ss{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,p=null,g=null;const y=n.getContextAttributes();let m=null,d=null;const x=[],v=[],_=new me;let C=null;const E=new On;E.layers.enable(1),E.viewport=new zt;const T=new On;T.layers.enable(2),T.viewport=new zt;const P=[E,T],M=new nR;M.layers.enable(1),M.layers.enable(2);let A=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ee=x[$];return ee===void 0&&(ee=new sd,x[$]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function($){let ee=x[$];return ee===void 0&&(ee=new sd,x[$]=ee),ee.getGripSpace()},this.getHand=function($){let ee=x[$];return ee===void 0&&(ee=new sd,x[$]=ee),ee.getHandSpace()};function X($){const ee=v.indexOf($.inputSource);if(ee===-1)return;const de=x[ee];de!==void 0&&(de.update($.inputSource,$.frame,u||s),de.dispatchEvent({type:$.type,data:$.inputSource}))}function Q(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",D);for(let $=0;$<x.length;$++){const ee=v[$];ee!==null&&(v[$]=null,x[$].disconnect(ee))}A=null,O=null,e.setRenderTarget(m),p=null,h=null,f=null,r=null,d=null,ie.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(_.width,_.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){o=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",D),y.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(_),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,n,ee),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new Qr(p.framebufferWidth,p.framebufferHeight,{format:ni,type:mr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ee=null,de=null,pe=null;y.depth&&(pe=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ee=y.stencil?fs:Xr,de=y.stencil?Wr:nr);const he={colorFormat:n.RGBA8,depthFormat:pe,scaleFactor:o};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(he),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),d=new Qr(h.textureWidth,h.textureHeight,{format:ni,type:mr,depthTexture:new z_(h.textureWidth,h.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const Ee=e.properties.get(d);Ee.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(a),ie.setContext(r),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function D($){for(let ee=0;ee<$.removed.length;ee++){const de=$.removed[ee],pe=v.indexOf(de);pe>=0&&(v[pe]=null,x[pe].disconnect(de))}for(let ee=0;ee<$.added.length;ee++){const de=$.added[ee];let pe=v.indexOf(de);if(pe===-1){for(let Ee=0;Ee<x.length;Ee++)if(Ee>=v.length){v.push(de),pe=Ee;break}else if(v[Ee]===null){v[Ee]=de,pe=Ee;break}if(pe===-1)break}const he=x[pe];he&&he.connect(de)}}const H=new k,j=new k;function K($,ee,de){H.setFromMatrixPosition(ee.matrixWorld),j.setFromMatrixPosition(de.matrixWorld);const pe=H.distanceTo(j),he=ee.projectionMatrix.elements,Ee=de.projectionMatrix.elements,Re=he[14]/(he[10]-1),_e=he[14]/(he[10]+1),oe=(he[9]+1)/he[5],S=(he[9]-1)/he[5],I=(he[8]-1)/he[0],L=(Ee[8]+1)/Ee[0],G=Re*I,F=Re*L,fe=pe/(-I+L),se=fe*-I;ee.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(se),$.translateZ(fe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const R=Re+fe,w=_e+fe,V=G-se,re=F+(pe-se),ae=oe*_e/w*R,le=S*_e/w*R;$.projectionMatrix.makePerspective(V,re,ae,le,R,w),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function U($,ee){ee===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ee.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;M.near=T.near=E.near=$.near,M.far=T.far=E.far=$.far,(A!==M.near||O!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,O=M.far);const ee=$.parent,de=M.cameras;U(M,ee);for(let pe=0;pe<de.length;pe++)U(de[pe],ee);de.length===2?K(M,E,T):M.projectionMatrix.copy(E.projectionMatrix),B($,M,ee)};function B($,ee,de){de===null?$.matrix.copy(ee.matrixWorld):($.matrix.copy(de.matrixWorld),$.matrix.invert(),$.matrix.multiply(ee.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ee.projectionMatrix),$.projectionMatrixInverse.copy(ee.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=_f*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)};let z=null;function Z($,ee){if(c=ee.getViewerPose(u||s),g=ee,c!==null){const de=c.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let pe=!1;de.length!==M.cameras.length&&(M.cameras.length=0,pe=!0);for(let he=0;he<de.length;he++){const Ee=de[he];let Re=null;if(p!==null)Re=p.getViewport(Ee);else{const oe=f.getViewSubImage(h,Ee);Re=oe.viewport,he===0&&(e.setRenderTargetTextures(d,oe.colorTexture,h.ignoreDepthValues?void 0:oe.depthStencilTexture),e.setRenderTarget(d))}let _e=P[he];_e===void 0&&(_e=new On,_e.layers.enable(he),_e.viewport=new zt,P[he]=_e),_e.matrix.fromArray(Ee.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(Ee.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(Re.x,Re.y,Re.width,Re.height),he===0&&(M.matrix.copy(_e.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),pe===!0&&M.cameras.push(_e)}}for(let de=0;de<x.length;de++){const pe=v[de],he=x[de];pe!==null&&he!==void 0&&he.update(pe,ee,u||s)}z&&z($,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}const ie=new O_;ie.setAnimationLoop(Z),this.setAnimationLoop=function($){z=$},this.dispose=function(){}}}function oR(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,I_(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,x,v,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?o(m,d):d.isMeshToonMaterial?(o(m,d),f(m,d)):d.isMeshPhongMaterial?(o(m,d),c(m,d)):d.isMeshStandardMaterial?(o(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(o(m,d),g(m,d)):d.isMeshDepthMaterial?o(m,d):d.isMeshDistanceMaterial?(o(m,d),y(m,d)):d.isMeshNormalMaterial?o(m,d):d.isLineBasicMaterial?(s(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,x,v):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function o(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===_n&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===_n&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const x=e.get(d).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*v,n(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function s(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,x,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=v*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===_n&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){const x=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function sR(t,e,n,i){let r={},o={},s=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const _=v.program;i.uniformBlockBinding(x,_)}function u(x,v){let _=r[x.id];_===void 0&&(g(x),_=c(x),r[x.id]=_,x.addEventListener("dispose",m));const C=v.program;i.updateUBOMapping(x,C);const E=e.render.frame;o[x.id]!==E&&(h(x),o[x.id]=E)}function c(x){const v=f();x.__bindingPointIndex=v;const _=t.createBuffer(),C=x.__size,E=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,_),t.bufferData(t.UNIFORM_BUFFER,C,E),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,_),_}function f(){for(let x=0;x<a;x++)if(s.indexOf(x)===-1)return s.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const v=r[x.id],_=x.uniforms,C=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let E=0,T=_.length;E<T;E++){const P=Array.isArray(_[E])?_[E]:[_[E]];for(let M=0,A=P.length;M<A;M++){const O=P[M];if(p(O,E,M,C)===!0){const X=O.__offset,Q=Array.isArray(O.value)?O.value:[O.value];let D=0;for(let H=0;H<Q.length;H++){const j=Q[H],K=y(j);typeof j=="number"||typeof j=="boolean"?(O.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,X+D,O.__data)):j.isMatrix3?(O.__data[0]=j.elements[0],O.__data[1]=j.elements[1],O.__data[2]=j.elements[2],O.__data[3]=0,O.__data[4]=j.elements[3],O.__data[5]=j.elements[4],O.__data[6]=j.elements[5],O.__data[7]=0,O.__data[8]=j.elements[6],O.__data[9]=j.elements[7],O.__data[10]=j.elements[8],O.__data[11]=0):(j.toArray(O.__data,D),D+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,X,O.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(x,v,_,C){const E=x.value,T=v+"_"+_;if(C[T]===void 0)return typeof E=="number"||typeof E=="boolean"?C[T]=E:C[T]=E.clone(),!0;{const P=C[T];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return C[T]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function g(x){const v=x.uniforms;let _=0;const C=16;for(let T=0,P=v.length;T<P;T++){const M=Array.isArray(v[T])?v[T]:[v[T]];for(let A=0,O=M.length;A<O;A++){const X=M[A],Q=Array.isArray(X.value)?X.value:[X.value];for(let D=0,H=Q.length;D<H;D++){const j=Q[D],K=y(j),U=_%C;U!==0&&C-U<K.boundary&&(_+=C-U),X.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=_,_+=K.storage}}}const E=_%C;return E>0&&(_+=C-E),x.__size=_,x.__cache={},this}function y(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const _=s.indexOf(v.__bindingPointIndex);s.splice(_,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete o[v.id]}function d(){for(const x in r)t.deleteBuffer(r[x]);s=[],r={},o={}}return{bind:l,update:u,dispose:d}}class W_{constructor(e={}){const{canvas:n=nM(),context:i=null,depth:r=!0,stencil:o=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=s;const p=new Uint32Array(4),g=new Int32Array(4);let y=null,m=null;const d=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this._useLegacyLights=!1,this.toneMapping=pr,this.toneMappingExposure=1;const v=this;let _=!1,C=0,E=0,T=null,P=-1,M=null;const A=new zt,O=new zt;let X=null;const Q=new Fe(0);let D=0,H=n.width,j=n.height,K=1,U=null,B=null;const z=new zt(0,0,H,j),Z=new zt(0,0,H,j);let ie=!1;const $=new Rh;let ee=!1,de=!1,pe=null;const he=new Mt,Ee=new me,Re=new k,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function oe(){return T===null?K:1}let S=i;function I(b,W){for(let q=0;q<b.length;q++){const J=b[q],Y=n.getContext(J,W);if(Y!==null)return Y}return null}try{const b={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${wh}`),n.addEventListener("webglcontextlost",ge,!1),n.addEventListener("webglcontextrestored",N,!1),n.addEventListener("webglcontextcreationerror",xe,!1),S===null){const W=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&W.shift(),S=I(W,b),S===null)throw I(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&S instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),S.getShaderPrecisionFormat===void 0&&(S.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let L,G,F,fe,se,R,w,V,re,ae,le,be,ye,Te,De,Be,ue,Ze,Ye,ze,Le,Ce,Ge,Je;function yt(){L=new gT(S),G=new cT(S,L,e),L.init(G),Ce=new tR(S,L,G),F=new QA(S,L,G),fe=new yT(S),se=new kA,R=new eR(S,L,F,se,G,Ce,fe),w=new fT(v),V=new mT(v),re=new RM(S,G),Ge=new lT(S,L,re,G),ae=new vT(S,re,fe,Ge),le=new MT(S,ae,re,fe),Ye=new ET(S,G,R),Be=new dT(se),be=new zA(v,w,V,L,G,Ge,Be),ye=new oR(v,se),Te=new HA,De=new $A(L,G),Ze=new aT(v,w,V,F,le,h,l),ue=new JA(v,le,G),Je=new sR(S,fe,G,F),ze=new uT(S,L,fe,G),Le=new _T(S,L,fe,G),fe.programs=be.programs,v.capabilities=G,v.extensions=L,v.properties=se,v.renderLists=Te,v.shadowMap=ue,v.state=F,v.info=fe}yt();const Xe=new rR(v,S);this.xr=Xe,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const b=L.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=L.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(b){b!==void 0&&(K=b,this.setSize(H,j,!1))},this.getSize=function(b){return b.set(H,j)},this.setSize=function(b,W,q=!0){if(Xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=b,j=W,n.width=Math.floor(b*K),n.height=Math.floor(W*K),q===!0&&(n.style.width=b+"px",n.style.height=W+"px"),this.setViewport(0,0,b,W)},this.getDrawingBufferSize=function(b){return b.set(H*K,j*K).floor()},this.setDrawingBufferSize=function(b,W,q){H=b,j=W,K=q,n.width=Math.floor(b*q),n.height=Math.floor(W*q),this.setViewport(0,0,b,W)},this.getCurrentViewport=function(b){return b.copy(A)},this.getViewport=function(b){return b.copy(z)},this.setViewport=function(b,W,q,J){b.isVector4?z.set(b.x,b.y,b.z,b.w):z.set(b,W,q,J),F.viewport(A.copy(z).multiplyScalar(K).floor())},this.getScissor=function(b){return b.copy(Z)},this.setScissor=function(b,W,q,J){b.isVector4?Z.set(b.x,b.y,b.z,b.w):Z.set(b,W,q,J),F.scissor(O.copy(Z).multiplyScalar(K).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(b){F.setScissorTest(ie=b)},this.setOpaqueSort=function(b){U=b},this.setTransparentSort=function(b){B=b},this.getClearColor=function(b){return b.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(b=!0,W=!0,q=!0){let J=0;if(b){let Y=!1;if(T!==null){const Me=T.texture.format;Y=Me===__||Me===v_||Me===g_}if(Y){const Me=T.texture.type,Pe=Me===mr||Me===nr||Me===Th||Me===Wr||Me===p_||Me===m_,Ne=Ze.getClearColor(),Oe=Ze.getClearAlpha(),We=Ne.r,ke=Ne.g,He=Ne.b;Pe?(p[0]=We,p[1]=ke,p[2]=He,p[3]=Oe,S.clearBufferuiv(S.COLOR,0,p)):(g[0]=We,g[1]=ke,g[2]=He,g[3]=Oe,S.clearBufferiv(S.COLOR,0,g))}else J|=S.COLOR_BUFFER_BIT}W&&(J|=S.DEPTH_BUFFER_BIT),q&&(J|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ge,!1),n.removeEventListener("webglcontextrestored",N,!1),n.removeEventListener("webglcontextcreationerror",xe,!1),Te.dispose(),De.dispose(),se.dispose(),w.dispose(),V.dispose(),le.dispose(),Ge.dispose(),Je.dispose(),be.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",tn),Xe.removeEventListener("sessionend",ot),pe&&(pe.dispose(),pe=null),nn.stop()};function ge(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const b=fe.autoReset,W=ue.enabled,q=ue.autoUpdate,J=ue.needsUpdate,Y=ue.type;yt(),fe.autoReset=b,ue.enabled=W,ue.autoUpdate=q,ue.needsUpdate=J,ue.type=Y}function xe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Se(b){const W=b.target;W.removeEventListener("dispose",Se),Ue(W)}function Ue(b){Ie(b),se.remove(b)}function Ie(b){const W=se.get(b).programs;W!==void 0&&(W.forEach(function(q){be.releaseProgram(q)}),b.isShaderMaterial&&be.releaseShaderCache(b))}this.renderBufferDirect=function(b,W,q,J,Y,Me){W===null&&(W=_e);const Pe=Y.isMesh&&Y.matrixWorld.determinant()<0,Ne=vy(b,W,q,J,Y);F.setMaterial(J,Pe);let Oe=q.index,We=1;if(J.wireframe===!0){if(Oe=ae.getWireframeAttribute(q),Oe===void 0)return;We=2}const ke=q.drawRange,He=q.attributes.position;let wt=ke.start*We,xn=(ke.start+ke.count)*We;Me!==null&&(wt=Math.max(wt,Me.start*We),xn=Math.min(xn,(Me.start+Me.count)*We)),Oe!==null?(wt=Math.max(wt,0),xn=Math.min(xn,Oe.count)):He!=null&&(wt=Math.max(wt,0),xn=Math.min(xn,He.count));const Ut=xn-wt;if(Ut<0||Ut===1/0)return;Ge.setup(Y,J,Ne,q,Oe);let Si,pt=ze;if(Oe!==null&&(Si=re.get(Oe),pt=Le,pt.setIndex(Si)),Y.isMesh)J.wireframe===!0?(F.setLineWidth(J.wireframeLinewidth*oe()),pt.setMode(S.LINES)):pt.setMode(S.TRIANGLES);else if(Y.isLine){let je=J.linewidth;je===void 0&&(je=1),F.setLineWidth(je*oe()),Y.isLineSegments?pt.setMode(S.LINES):Y.isLineLoop?pt.setMode(S.LINE_LOOP):pt.setMode(S.LINE_STRIP)}else Y.isPoints?pt.setMode(S.POINTS):Y.isSprite&&pt.setMode(S.TRIANGLES);if(Y.isBatchedMesh)pt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)pt.renderInstances(wt,Ut,Y.count);else if(q.isInstancedBufferGeometry){const je=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ec=Math.min(q.instanceCount,je);pt.renderInstances(wt,Ut,ec)}else pt.render(wt,Ut)};function it(b,W,q){b.transparent===!0&&b.side===fn&&b.forceSinglePass===!1?(b.side=_n,b.needsUpdate=!0,ka(b,W,q),b.side=_r,b.needsUpdate=!0,ka(b,W,q),b.side=fn):ka(b,W,q)}this.compile=function(b,W,q=null){q===null&&(q=b),m=De.get(q),m.init(),x.push(m),q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),b!==q&&b.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights(v._useLegacyLights);const J=new Set;return b.traverse(function(Y){const Me=Y.material;if(Me)if(Array.isArray(Me))for(let Pe=0;Pe<Me.length;Pe++){const Ne=Me[Pe];it(Ne,q,Y),J.add(Ne)}else it(Me,q,Y),J.add(Me)}),x.pop(),m=null,J},this.compileAsync=function(b,W,q=null){const J=this.compile(b,W,q);return new Promise(Y=>{function Me(){if(J.forEach(function(Pe){se.get(Pe).currentProgram.isReady()&&J.delete(Pe)}),J.size===0){Y(b);return}setTimeout(Me,10)}L.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let rt=null;function Nt(b){rt&&rt(b)}function tn(){nn.stop()}function ot(){nn.start()}const nn=new O_;nn.setAnimationLoop(Nt),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(b){rt=b,Xe.setAnimationLoop(b),b===null?nn.stop():nn.start()},Xe.addEventListener("sessionstart",tn),Xe.addEventListener("sessionend",ot),this.render=function(b,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(W),W=Xe.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,W,T),m=De.get(b,x.length),m.init(),x.push(m),he.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),$.setFromProjectionMatrix(he),de=this.localClippingEnabled,ee=Be.init(this.clippingPlanes,de),y=Te.get(b,d.length),y.init(),d.push(y),li(b,W,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(U,B),this.info.render.frame++,ee===!0&&Be.beginShadows();const q=m.state.shadowsArray;if(ue.render(q,b,W),ee===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ze.render(y,b),m.setupLights(v._useLegacyLights),W.isArrayCamera){const J=W.cameras;for(let Y=0,Me=J.length;Y<Me;Y++){const Pe=J[Y];Fh(y,b,Pe,Pe.viewport)}}else Fh(y,b,W);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(v,b,W),Ge.resetDefaultState(),P=-1,M=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function li(b,W,q,J){if(b.visible===!1)return;if(b.layers.test(W.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(W);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||$.intersectsSprite(b)){J&&Re.setFromMatrixPosition(b.matrixWorld).applyMatrix4(he);const Pe=le.update(b),Ne=b.material;Ne.visible&&y.push(b,Pe,Ne,q,Re.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||$.intersectsObject(b))){const Pe=le.update(b),Ne=b.material;if(J&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Re.copy(b.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Re.copy(Pe.boundingSphere.center)),Re.applyMatrix4(b.matrixWorld).applyMatrix4(he)),Array.isArray(Ne)){const Oe=Pe.groups;for(let We=0,ke=Oe.length;We<ke;We++){const He=Oe[We],wt=Ne[He.materialIndex];wt&&wt.visible&&y.push(b,Pe,wt,q,Re.z,He)}}else Ne.visible&&y.push(b,Pe,Ne,q,Re.z,null)}}const Me=b.children;for(let Pe=0,Ne=Me.length;Pe<Ne;Pe++)li(Me[Pe],W,q,J)}function Fh(b,W,q,J){const Y=b.opaque,Me=b.transmissive,Pe=b.transparent;m.setupLightsView(q),ee===!0&&Be.setGlobalState(v.clippingPlanes,q),Me.length>0&&gy(Y,Me,W,q),J&&F.viewport(A.copy(J)),Y.length>0&&za(Y,W,q),Me.length>0&&za(Me,W,q),Pe.length>0&&za(Pe,W,q),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function gy(b,W,q,J){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const Me=G.isWebGL2;pe===null&&(pe=new Qr(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")?Ma:mr,minFilter:Ea,samples:Me?4:0})),v.getDrawingBufferSize(Ee),Me?pe.setSize(Ee.x,Ee.y):pe.setSize(yf(Ee.x),yf(Ee.y));const Pe=v.getRenderTarget();v.setRenderTarget(pe),v.getClearColor(Q),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const Ne=v.toneMapping;v.toneMapping=pr,za(b,q,J),R.updateMultisampleRenderTarget(pe),R.updateRenderTargetMipmap(pe);let Oe=!1;for(let We=0,ke=W.length;We<ke;We++){const He=W[We],wt=He.object,xn=He.geometry,Ut=He.material,Si=He.group;if(Ut.side===fn&&wt.layers.test(J.layers)){const pt=Ut.side;Ut.side=_n,Ut.needsUpdate=!0,zh(wt,q,J,xn,Ut,Si),Ut.side=pt,Ut.needsUpdate=!0,Oe=!0}}Oe===!0&&(R.updateMultisampleRenderTarget(pe),R.updateRenderTargetMipmap(pe)),v.setRenderTarget(Pe),v.setClearColor(Q,D),v.toneMapping=Ne}function za(b,W,q){const J=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,Me=b.length;Y<Me;Y++){const Pe=b[Y],Ne=Pe.object,Oe=Pe.geometry,We=J===null?Pe.material:J,ke=Pe.group;Ne.layers.test(q.layers)&&zh(Ne,W,q,Oe,We,ke)}}function zh(b,W,q,J,Y,Me){b.onBeforeRender(v,W,q,J,Y,Me),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(v,W,q,J,b,Me),Y.transparent===!0&&Y.side===fn&&Y.forceSinglePass===!1?(Y.side=_n,Y.needsUpdate=!0,v.renderBufferDirect(q,W,J,Y,b,Me),Y.side=_r,Y.needsUpdate=!0,v.renderBufferDirect(q,W,J,Y,b,Me),Y.side=fn):v.renderBufferDirect(q,W,J,Y,b,Me),b.onAfterRender(v,W,q,J,Y,Me)}function ka(b,W,q){W.isScene!==!0&&(W=_e);const J=se.get(b),Y=m.state.lights,Me=m.state.shadowsArray,Pe=Y.state.version,Ne=be.getParameters(b,Y.state,Me,W,q),Oe=be.getProgramCacheKey(Ne);let We=J.programs;J.environment=b.isMeshStandardMaterial?W.environment:null,J.fog=W.fog,J.envMap=(b.isMeshStandardMaterial?V:w).get(b.envMap||J.environment),We===void 0&&(b.addEventListener("dispose",Se),We=new Map,J.programs=We);let ke=We.get(Oe);if(ke!==void 0){if(J.currentProgram===ke&&J.lightsStateVersion===Pe)return Bh(b,Ne),ke}else Ne.uniforms=be.getUniforms(b),b.onBuild(q,Ne,v),b.onBeforeCompile(Ne,v),ke=be.acquireProgram(Ne,Oe),We.set(Oe,ke),J.uniforms=Ne.uniforms;const He=J.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(He.clippingPlanes=Be.uniform),Bh(b,Ne),J.needsLights=yy(b),J.lightsStateVersion=Pe,J.needsLights&&(He.ambientLightColor.value=Y.state.ambient,He.lightProbe.value=Y.state.probe,He.directionalLights.value=Y.state.directional,He.directionalLightShadows.value=Y.state.directionalShadow,He.spotLights.value=Y.state.spot,He.spotLightShadows.value=Y.state.spotShadow,He.rectAreaLights.value=Y.state.rectArea,He.ltc_1.value=Y.state.rectAreaLTC1,He.ltc_2.value=Y.state.rectAreaLTC2,He.pointLights.value=Y.state.point,He.pointLightShadows.value=Y.state.pointShadow,He.hemisphereLights.value=Y.state.hemi,He.directionalShadowMap.value=Y.state.directionalShadowMap,He.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,He.spotShadowMap.value=Y.state.spotShadowMap,He.spotLightMatrix.value=Y.state.spotLightMatrix,He.spotLightMap.value=Y.state.spotLightMap,He.pointShadowMap.value=Y.state.pointShadowMap,He.pointShadowMatrix.value=Y.state.pointShadowMatrix),J.currentProgram=ke,J.uniformsList=null,ke}function kh(b){if(b.uniformsList===null){const W=b.currentProgram.getUniforms();b.uniformsList=$l.seqWithValue(W.seq,b.uniforms)}return b.uniformsList}function Bh(b,W){const q=se.get(b);q.outputColorSpace=W.outputColorSpace,q.batching=W.batching,q.instancing=W.instancing,q.instancingColor=W.instancingColor,q.skinning=W.skinning,q.morphTargets=W.morphTargets,q.morphNormals=W.morphNormals,q.morphColors=W.morphColors,q.morphTargetsCount=W.morphTargetsCount,q.numClippingPlanes=W.numClippingPlanes,q.numIntersection=W.numClipIntersection,q.vertexAlphas=W.vertexAlphas,q.vertexTangents=W.vertexTangents,q.toneMapping=W.toneMapping}function vy(b,W,q,J,Y){W.isScene!==!0&&(W=_e),R.resetTextureUnits();const Me=W.fog,Pe=J.isMeshStandardMaterial?W.environment:null,Ne=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Gi,Oe=(J.isMeshStandardMaterial?V:w).get(J.envMap||Pe),We=J.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ke=!!q.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),He=!!q.morphAttributes.position,wt=!!q.morphAttributes.normal,xn=!!q.morphAttributes.color;let Ut=pr;J.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ut=v.toneMapping);const Si=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,pt=Si!==void 0?Si.length:0,je=se.get(J),ec=m.state.lights;if(ee===!0&&(de===!0||b!==M)){const Pn=b===M&&J.id===P;Be.setState(J,b,Pn)}let xt=!1;J.version===je.__version?(je.needsLights&&je.lightsStateVersion!==ec.state.version||je.outputColorSpace!==Ne||Y.isBatchedMesh&&je.batching===!1||!Y.isBatchedMesh&&je.batching===!0||Y.isInstancedMesh&&je.instancing===!1||!Y.isInstancedMesh&&je.instancing===!0||Y.isSkinnedMesh&&je.skinning===!1||!Y.isSkinnedMesh&&je.skinning===!0||Y.isInstancedMesh&&je.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&je.instancingColor===!1&&Y.instanceColor!==null||je.envMap!==Oe||J.fog===!0&&je.fog!==Me||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Be.numPlanes||je.numIntersection!==Be.numIntersection)||je.vertexAlphas!==We||je.vertexTangents!==ke||je.morphTargets!==He||je.morphNormals!==wt||je.morphColors!==xn||je.toneMapping!==Ut||G.isWebGL2===!0&&je.morphTargetsCount!==pt)&&(xt=!0):(xt=!0,je.__version=J.version);let Mr=je.currentProgram;xt===!0&&(Mr=ka(J,W,Y));let Hh=!1,Ts=!1,tc=!1;const jt=Mr.getUniforms(),wr=je.uniforms;if(F.useProgram(Mr.program)&&(Hh=!0,Ts=!0,tc=!0),J.id!==P&&(P=J.id,Ts=!0),Hh||M!==b){jt.setValue(S,"projectionMatrix",b.projectionMatrix),jt.setValue(S,"viewMatrix",b.matrixWorldInverse);const Pn=jt.map.cameraPosition;Pn!==void 0&&Pn.setValue(S,Re.setFromMatrixPosition(b.matrixWorld)),G.logarithmicDepthBuffer&&jt.setValue(S,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&jt.setValue(S,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Ts=!0,tc=!0)}if(Y.isSkinnedMesh){jt.setOptional(S,Y,"bindMatrix"),jt.setOptional(S,Y,"bindMatrixInverse");const Pn=Y.skeleton;Pn&&(G.floatVertexTextures?(Pn.boneTexture===null&&Pn.computeBoneTexture(),jt.setValue(S,"boneTexture",Pn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(jt.setOptional(S,Y,"batchingTexture"),jt.setValue(S,"batchingTexture",Y._matricesTexture,R));const nc=q.morphAttributes;if((nc.position!==void 0||nc.normal!==void 0||nc.color!==void 0&&G.isWebGL2===!0)&&Ye.update(Y,q,Mr),(Ts||je.receiveShadow!==Y.receiveShadow)&&(je.receiveShadow=Y.receiveShadow,jt.setValue(S,"receiveShadow",Y.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(wr.envMap.value=Oe,wr.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),Ts&&(jt.setValue(S,"toneMappingExposure",v.toneMappingExposure),je.needsLights&&_y(wr,tc),Me&&J.fog===!0&&ye.refreshFogUniforms(wr,Me),ye.refreshMaterialUniforms(wr,J,K,j,pe),$l.upload(S,kh(je),wr,R)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&($l.upload(S,kh(je),wr,R),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&jt.setValue(S,"center",Y.center),jt.setValue(S,"modelViewMatrix",Y.modelViewMatrix),jt.setValue(S,"normalMatrix",Y.normalMatrix),jt.setValue(S,"modelMatrix",Y.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Pn=J.uniformsGroups;for(let ic=0,xy=Pn.length;ic<xy;ic++)if(G.isWebGL2){const Gh=Pn[ic];Je.update(Gh,Mr),Je.bind(Gh,Mr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Mr}function _y(b,W){b.ambientLightColor.needsUpdate=W,b.lightProbe.needsUpdate=W,b.directionalLights.needsUpdate=W,b.directionalLightShadows.needsUpdate=W,b.pointLights.needsUpdate=W,b.pointLightShadows.needsUpdate=W,b.spotLights.needsUpdate=W,b.spotLightShadows.needsUpdate=W,b.rectAreaLights.needsUpdate=W,b.hemisphereLights.needsUpdate=W}function yy(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,W,q){se.get(b.texture).__webglTexture=W,se.get(b.depthTexture).__webglTexture=q;const J=se.get(b);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=q===void 0,J.__autoAllocateDepthBuffer||L.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,W){const q=se.get(b);q.__webglFramebuffer=W,q.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(b,W=0,q=0){T=b,C=W,E=q;let J=!0,Y=null,Me=!1,Pe=!1;if(b){const Oe=se.get(b);Oe.__useDefaultFramebuffer!==void 0?(F.bindFramebuffer(S.FRAMEBUFFER,null),J=!1):Oe.__webglFramebuffer===void 0?R.setupRenderTarget(b):Oe.__hasExternalTextures&&R.rebindTextures(b,se.get(b.texture).__webglTexture,se.get(b.depthTexture).__webglTexture);const We=b.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Pe=!0);const ke=se.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ke[W])?Y=ke[W][q]:Y=ke[W],Me=!0):G.isWebGL2&&b.samples>0&&R.useMultisampledRTT(b)===!1?Y=se.get(b).__webglMultisampledFramebuffer:Array.isArray(ke)?Y=ke[q]:Y=ke,A.copy(b.viewport),O.copy(b.scissor),X=b.scissorTest}else A.copy(z).multiplyScalar(K).floor(),O.copy(Z).multiplyScalar(K).floor(),X=ie;if(F.bindFramebuffer(S.FRAMEBUFFER,Y)&&G.drawBuffers&&J&&F.drawBuffers(b,Y),F.viewport(A),F.scissor(O),F.setScissorTest(X),Me){const Oe=se.get(b.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+W,Oe.__webglTexture,q)}else if(Pe){const Oe=se.get(b.texture),We=W||0;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,Oe.__webglTexture,q||0,We)}P=-1},this.readRenderTargetPixels=function(b,W,q,J,Y,Me,Pe){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=se.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ne=Ne[Pe]),Ne){F.bindFramebuffer(S.FRAMEBUFFER,Ne);try{const Oe=b.texture,We=Oe.format,ke=Oe.type;if(We!==ni&&Ce.convert(We)!==S.getParameter(S.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=ke===Ma&&(L.has("EXT_color_buffer_half_float")||G.isWebGL2&&L.has("EXT_color_buffer_float"));if(ke!==mr&&Ce.convert(ke)!==S.getParameter(S.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===ir&&(G.isWebGL2||L.has("OES_texture_float")||L.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=b.width-J&&q>=0&&q<=b.height-Y&&S.readPixels(W,q,J,Y,Ce.convert(We),Ce.convert(ke),Me)}finally{const Oe=T!==null?se.get(T).__webglFramebuffer:null;F.bindFramebuffer(S.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(b,W,q=0){const J=Math.pow(2,-q),Y=Math.floor(W.image.width*J),Me=Math.floor(W.image.height*J);R.setTexture2D(W,0),S.copyTexSubImage2D(S.TEXTURE_2D,q,0,0,b.x,b.y,Y,Me),F.unbindTexture()},this.copyTextureToTexture=function(b,W,q,J=0){const Y=W.image.width,Me=W.image.height,Pe=Ce.convert(q.format),Ne=Ce.convert(q.type);R.setTexture2D(q,0),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,q.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,q.unpackAlignment),W.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,J,b.x,b.y,Y,Me,Pe,Ne,W.image.data):W.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,J,b.x,b.y,W.mipmaps[0].width,W.mipmaps[0].height,Pe,W.mipmaps[0].data):S.texSubImage2D(S.TEXTURE_2D,J,b.x,b.y,Pe,Ne,W.image),J===0&&q.generateMipmaps&&S.generateMipmap(S.TEXTURE_2D),F.unbindTexture()},this.copyTextureToTexture3D=function(b,W,q,J,Y=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=b.max.x-b.min.x+1,Pe=b.max.y-b.min.y+1,Ne=b.max.z-b.min.z+1,Oe=Ce.convert(J.format),We=Ce.convert(J.type);let ke;if(J.isData3DTexture)R.setTexture3D(J,0),ke=S.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)R.setTexture2DArray(J,0),ke=S.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,J.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,J.unpackAlignment);const He=S.getParameter(S.UNPACK_ROW_LENGTH),wt=S.getParameter(S.UNPACK_IMAGE_HEIGHT),xn=S.getParameter(S.UNPACK_SKIP_PIXELS),Ut=S.getParameter(S.UNPACK_SKIP_ROWS),Si=S.getParameter(S.UNPACK_SKIP_IMAGES),pt=q.isCompressedTexture?q.mipmaps[Y]:q.image;S.pixelStorei(S.UNPACK_ROW_LENGTH,pt.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,pt.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,b.min.x),S.pixelStorei(S.UNPACK_SKIP_ROWS,b.min.y),S.pixelStorei(S.UNPACK_SKIP_IMAGES,b.min.z),q.isDataTexture||q.isData3DTexture?S.texSubImage3D(ke,Y,W.x,W.y,W.z,Me,Pe,Ne,Oe,We,pt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),S.compressedTexSubImage3D(ke,Y,W.x,W.y,W.z,Me,Pe,Ne,Oe,pt.data)):S.texSubImage3D(ke,Y,W.x,W.y,W.z,Me,Pe,Ne,Oe,We,pt),S.pixelStorei(S.UNPACK_ROW_LENGTH,He),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,wt),S.pixelStorei(S.UNPACK_SKIP_PIXELS,xn),S.pixelStorei(S.UNPACK_SKIP_ROWS,Ut),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Si),Y===0&&J.generateMipmaps&&S.generateMipmap(ke),F.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?R.setTextureCube(b,0):b.isData3DTexture?R.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?R.setTexture2DArray(b,0):R.setTexture2D(b,0),F.unbindTexture()},this.resetState=function(){C=0,E=0,T=null,F.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Ah?"display-p3":"srgb",n.unpackColorSpace=et.workingColorSpace===Xu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Vt?jr:x_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===jr?Vt:Gi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class aR extends W_{}aR.prototype.isWebGL1Renderer=!0;class bh{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Fe(e),this.near=n,this.far=i}clone(){return new bh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class lR extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class uR{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=gf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Oi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,o=this.stride;r<o;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const rn=new k;class Tu{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)rn.fromBufferAttribute(this,n),rn.applyMatrix4(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)rn.fromBufferAttribute(this,n),rn.applyNormalMatrix(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)rn.fromBufferAttribute(this,n),rn.transformDirection(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}setX(e,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Pi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Pi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Pi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Pi(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array),o=nt(o,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)n.push(this.data.array[r+o])}return new Vn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Tu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)n.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class X_ extends ro{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let wo;const zs=new k,To=new k,Ao=new k,Ro=new me,ks=new me,j_=new Mt,Tl=new k,Bs=new k,Al=new k,vg=new me,ad=new me,_g=new me;class cR extends Lt{constructor(e=new X_){if(super(),this.isSprite=!0,this.type="Sprite",wo===void 0){wo=new jn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new uR(n,5);wo.setIndex([0,1,2,0,2,3]),wo.setAttribute("position",new Tu(i,3,0,!1)),wo.setAttribute("uv",new Tu(i,2,3,!1))}this.geometry=wo,this.material=e,this.center=new me(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),To.setFromMatrixScale(this.matrixWorld),j_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ao.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&To.multiplyScalar(-Ao.z);const i=this.material.rotation;let r,o;i!==0&&(o=Math.cos(i),r=Math.sin(i));const s=this.center;Rl(Tl.set(-.5,-.5,0),Ao,s,To,r,o),Rl(Bs.set(.5,-.5,0),Ao,s,To,r,o),Rl(Al.set(.5,.5,0),Ao,s,To,r,o),vg.set(0,0),ad.set(1,0),_g.set(1,1);let a=e.ray.intersectTriangle(Tl,Bs,Al,!1,zs);if(a===null&&(Rl(Bs.set(-.5,.5,0),Ao,s,To,r,o),ad.set(0,1),a=e.ray.intersectTriangle(Tl,Al,Bs,!1,zs),a===null))return;const l=e.ray.origin.distanceTo(zs);l<e.near||l>e.far||n.push({distance:l,point:zs.clone(),uv:Un.getInterpolation(zs,Tl,Bs,Al,vg,ad,_g,new me),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Rl(t,e,n,i,r,o){Ro.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(ks.x=o*Ro.x-r*Ro.y,ks.y=r*Ro.x+o*Ro.y):ks.copy(Ro),t.copy(e),t.x+=ks.x,t.y+=ks.y,t.applyMatrix4(j_)}class $_ extends ro{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const yg=new k,xg=new k,Sg=new Mt,ld=new R_,Cl=new ju;class dR extends Lt{constructor(e=new jn,n=new $_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,o=n.count;r<o;r++)yg.fromBufferAttribute(n,r-1),xg.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=yg.distanceTo(xg);e.setAttribute("lineDistance",new An(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Cl.copy(i.boundingSphere),Cl.applyMatrix4(r),Cl.radius+=o,e.ray.intersectsSphere(Cl)===!1)return;Sg.copy(r).invert(),ld.copy(e.ray).applyMatrix4(Sg);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new k,c=new k,f=new k,h=new k,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const d=Math.max(0,s.start),x=Math.min(g.count,s.start+s.count);for(let v=d,_=x-1;v<_;v+=p){const C=g.getX(v),E=g.getX(v+1);if(u.fromBufferAttribute(m,C),c.fromBufferAttribute(m,E),ld.distanceSqToSegment(u,c,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(h);P<e.near||P>e.far||n.push({distance:P,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,s.start),x=Math.min(m.count,s.start+s.count);for(let v=d,_=x-1;v<_;v+=p){if(u.fromBufferAttribute(m,v),c.fromBufferAttribute(m,v+1),ld.distanceSqToSegment(u,c,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(h);E<e.near||E>e.far||n.push({distance:E,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}const Eg=new k,Mg=new k;class fR extends dR{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,o=n.count;r<o;r+=2)Eg.fromBufferAttribute(n,r),Mg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Eg.distanceTo(Mg);e.setAttribute("lineDistance",new An(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ph extends yn{constructor(e,n,i,r,o,s,a,l,u){super(e,n,i,r,o,s,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),o=0;n.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),o+=i.distanceTo(r),n.push(o),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const o=i.length;let s;n?s=n:s=e*i[o-1];let a=0,l=o-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-s,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===s)return r/(o-1);const c=i[r],h=i[r+1]-c,p=(s-c)/h;return(r+p)/(o-1)}getTangent(e,n){let r=e-1e-4,o=e+1e-4;r<0&&(r=0),o>1&&(o=1);const s=this.getPoint(r),a=this.getPoint(o),l=n||(s.isVector2?new me:new k);return l.copy(a).sub(s).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new k,r=[],o=[],s=[],a=new k,l=new Mt;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new k)}o[0]=new k,s[0]=new k;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),f<=u&&(u=f,i.set(0,1,0)),h<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),o[0].crossVectors(r[0],a),s[0].crossVectors(r[0],o[0]);for(let p=1;p<=e;p++){if(o[p]=o[p-1].clone(),s[p]=s[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Qt(r[p-1].dot(r[p]),-1,1));o[p].applyMatrix4(l.makeRotationAxis(a,g))}s[p].crossVectors(r[p],o[p])}if(n===!0){let p=Math.acos(Qt(o[0].dot(o[e]),-1,1));p/=e,r[0].dot(a.crossVectors(o[0],o[e]))>0&&(p=-p);for(let g=1;g<=e;g++)o[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),s[g].crossVectors(r[g],o[g])}return{tangents:r,normals:o,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Lh extends xi{constructor(e=0,n=0,i=1,r=1,o=0,s=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=o,this.aEndAngle=s,this.aClockwise=a,this.aRotation=l}getPoint(e,n){const i=n||new me,r=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const s=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=r;for(;o>r;)o-=r;o<Number.EPSILON&&(s?o=0:o=r),this.aClockwise===!0&&!s&&(o===r?o=-r:o=o-r);const a=this.aStartAngle+e*o;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=u-this.aY;l=h*c-p*f+this.aX,u=h*f+p*c+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class hR extends Lh{constructor(e,n,i,r,o,s){super(e,n,i,i,r,o,s),this.isArcCurve=!0,this.type="ArcCurve"}}function Dh(){let t=0,e=0,n=0,i=0;function r(o,s,a,l){t=o,e=a,n=-3*o+3*s-2*a-l,i=2*o-2*s+a+l}return{initCatmullRom:function(o,s,a,l,u){r(s,a,u*(a-o),u*(l-s))},initNonuniformCatmullRom:function(o,s,a,l,u,c,f){let h=(s-o)/u-(a-o)/(u+c)+(a-s)/c,p=(a-s)/c-(l-s)/(c+f)+(l-a)/f;h*=c,p*=c,r(s,a,h,p)},calc:function(o){const s=o*o,a=s*o;return t+e*o+n*s+i*a}}}const bl=new k,ud=new Dh,cd=new Dh,dd=new Dh;class pR extends xi{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new k){const i=n,r=this.points,o=r.length,s=(o-(this.closed?0:1))*e;let a=Math.floor(s),l=s-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%o]:(bl.subVectors(r[0],r[1]).add(r[0]),u=bl);const f=r[a%o],h=r[(a+1)%o];if(this.closed||a+2<o?c=r[(a+2)%o]:(bl.subVectors(r[o-1],r[o-2]).add(r[o-1]),c=bl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(u.distanceToSquared(f),p),y=Math.pow(f.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(c),p);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),ud.initNonuniformCatmullRom(u.x,f.x,h.x,c.x,g,y,m),cd.initNonuniformCatmullRom(u.y,f.y,h.y,c.y,g,y,m),dd.initNonuniformCatmullRom(u.z,f.z,h.z,c.z,g,y,m)}else this.curveType==="catmullrom"&&(ud.initCatmullRom(u.x,f.x,h.x,c.x,this.tension),cd.initCatmullRom(u.y,f.y,h.y,c.y,this.tension),dd.initCatmullRom(u.z,f.z,h.z,c.z,this.tension));return i.set(ud.calc(l),cd.calc(l),dd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new k().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function wg(t,e,n,i,r){const o=(i-e)*.5,s=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+o+s)*l+(-3*n+3*i-2*o-s)*a+o*t+n}function mR(t,e){const n=1-t;return n*n*e}function gR(t,e){return 2*(1-t)*t*e}function vR(t,e){return t*t*e}function na(t,e,n,i){return mR(t,e)+gR(t,n)+vR(t,i)}function _R(t,e){const n=1-t;return n*n*n*e}function yR(t,e){const n=1-t;return 3*n*n*t*e}function xR(t,e){return 3*(1-t)*t*t*e}function SR(t,e){return t*t*t*e}function ia(t,e,n,i,r){return _R(t,e)+yR(t,n)+xR(t,i)+SR(t,r)}class Y_ extends xi{constructor(e=new me,n=new me,i=new me,r=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new me){const i=n,r=this.v0,o=this.v1,s=this.v2,a=this.v3;return i.set(ia(e,r.x,o.x,s.x,a.x),ia(e,r.y,o.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ER extends xi{constructor(e=new k,n=new k,i=new k,r=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new k){const i=n,r=this.v0,o=this.v1,s=this.v2,a=this.v3;return i.set(ia(e,r.x,o.x,s.x,a.x),ia(e,r.y,o.y,s.y,a.y),ia(e,r.z,o.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class q_ extends xi{constructor(e=new me,n=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new me){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new me){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class MR extends xi{constructor(e=new k,n=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new k){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new k){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class K_ extends xi{constructor(e=new me,n=new me,i=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new me){const i=n,r=this.v0,o=this.v1,s=this.v2;return i.set(na(e,r.x,o.x,s.x),na(e,r.y,o.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wR extends xi{constructor(e=new k,n=new k,i=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new k){const i=n,r=this.v0,o=this.v1,s=this.v2;return i.set(na(e,r.x,o.x,s.x),na(e,r.y,o.y,s.y),na(e,r.z,o.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Z_ extends xi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new me){const i=n,r=this.points,o=(r.length-1)*e,s=Math.floor(o),a=o-s,l=r[s===0?s:s-1],u=r[s],c=r[s>r.length-2?r.length-1:s+1],f=r[s>r.length-3?r.length-1:s+2];return i.set(wg(a,l.x,u.x,c.x,f.x),wg(a,l.y,u.y,c.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new me().fromArray(r))}return this}}var Sf=Object.freeze({__proto__:null,ArcCurve:hR,CatmullRomCurve3:pR,CubicBezierCurve:Y_,CubicBezierCurve3:ER,EllipseCurve:Lh,LineCurve:q_,LineCurve3:MR,QuadraticBezierCurve:K_,QuadraticBezierCurve3:wR,SplineCurve:Z_});class TR extends xi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sf[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let o=0;for(;o<r.length;){if(r[o]>=i){const s=r[o]-i,a=this.curves[o],l=a.getLength(),u=l===0?0:1-s/l;return a.getPointAt(u,n)}o++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,o=this.curves;r<o.length;r++){const s=o[r],a=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,l=s.getPoints(a);for(let u=0;u<l.length;u++){const c=l[u];i&&i.equals(c)||(n.push(c),i=c)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new Sf[r.type]().fromJSON(r))}return this}}class Tg extends TR{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new q_(this.currentPoint.clone(),new me(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const o=new K_(this.currentPoint.clone(),new me(e,n),new me(i,r));return this.curves.push(o),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,o,s){const a=new Y_(this.currentPoint.clone(),new me(e,n),new me(i,r),new me(o,s));return this.curves.push(a),this.currentPoint.set(o,s),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new Z_(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,o,s){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,o,s),this}absarc(e,n,i,r,o,s){return this.absellipse(e,n,i,i,r,o,s),this}ellipse(e,n,i,r,o,s,a,l){const u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+u,n+c,i,r,o,s,a,l),this}absellipse(e,n,i,r,o,s,a,l){const u=new Lh(e,n,i,r,o,s,a,l);if(this.curves.length>0){const f=u.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(u);const c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class J_ extends Tg{constructor(e){super(e),this.uuid=Oi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new Tg().fromJSON(r))}return this}}const AR={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let o=Q_(t,0,r,n,!0);const s=[];if(!o||o.next===o.prev)return s;let a,l,u,c,f,h,p;if(i&&(o=LR(t,e,o,n)),t.length>80*n){a=u=t[0],l=c=t[1];for(let g=n;g<r;g+=n)f=t[g],h=t[g+1],f<a&&(a=f),h<l&&(l=h),f>u&&(u=f),h>c&&(c=h);p=Math.max(u-a,c-l),p=p!==0?32767/p:0}return wa(o,s,n,a,l,p,0),s}};function Q_(t,e,n,i,r){let o,s;if(r===GR(t,e,n,i)>0)for(o=e;o<n;o+=i)s=Ag(o,t[o],t[o+1],s);else for(o=n-i;o>=e;o-=i)s=Ag(o,t[o],t[o+1],s);return s&&Ku(s,s.next)&&(Aa(s),s=s.next),s}function to(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Ku(n,n.next)||gt(n.prev,n,n.next)===0)){if(Aa(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function wa(t,e,n,i,r,o,s){if(!t)return;!s&&o&&OR(t,i,r,o);let a=t,l,u;for(;t.prev!==t.next;){if(l=t.prev,u=t.next,o?CR(t,i,r,o):RR(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(u.i/n|0),Aa(t),t=u.next,a=u.next;continue}if(t=u,t===a){s?s===1?(t=bR(to(t),e,n),wa(t,e,n,i,r,o,2)):s===2&&PR(t,e,n,i,r,o):wa(to(t),e,n,i,r,o,1);break}}}function RR(t){const e=t.prev,n=t,i=t.next;if(gt(e,n,i)>=0)return!1;const r=e.x,o=n.x,s=i.x,a=e.y,l=n.y,u=i.y,c=r<o?r<s?r:s:o<s?o:s,f=a<l?a<u?a:u:l<u?l:u,h=r>o?r>s?r:s:o>s?o:s,p=a>l?a>u?a:u:l>u?l:u;let g=i.next;for(;g!==e;){if(g.x>=c&&g.x<=h&&g.y>=f&&g.y<=p&&Wo(r,a,o,l,s,u,g.x,g.y)&&gt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function CR(t,e,n,i){const r=t.prev,o=t,s=t.next;if(gt(r,o,s)>=0)return!1;const a=r.x,l=o.x,u=s.x,c=r.y,f=o.y,h=s.y,p=a<l?a<u?a:u:l<u?l:u,g=c<f?c<h?c:h:f<h?f:h,y=a>l?a>u?a:u:l>u?l:u,m=c>f?c>h?c:h:f>h?f:h,d=Ef(p,g,e,n,i),x=Ef(y,m,e,n,i);let v=t.prevZ,_=t.nextZ;for(;v&&v.z>=d&&_&&_.z<=x;){if(v.x>=p&&v.x<=y&&v.y>=g&&v.y<=m&&v!==r&&v!==s&&Wo(a,c,l,f,u,h,v.x,v.y)&&gt(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=p&&_.x<=y&&_.y>=g&&_.y<=m&&_!==r&&_!==s&&Wo(a,c,l,f,u,h,_.x,_.y)&&gt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=d;){if(v.x>=p&&v.x<=y&&v.y>=g&&v.y<=m&&v!==r&&v!==s&&Wo(a,c,l,f,u,h,v.x,v.y)&&gt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=x;){if(_.x>=p&&_.x<=y&&_.y>=g&&_.y<=m&&_!==r&&_!==s&&Wo(a,c,l,f,u,h,_.x,_.y)&&gt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function bR(t,e,n){let i=t;do{const r=i.prev,o=i.next.next;!Ku(r,o)&&ey(r,i,i.next,o)&&Ta(r,o)&&Ta(o,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(o.i/n|0),Aa(i),Aa(i.next),i=t=o),i=i.next}while(i!==t);return to(i)}function PR(t,e,n,i,r,o){let s=t;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&kR(s,a)){let l=ty(s,a);s=to(s,s.next),l=to(l,l.next),wa(s,e,n,i,r,o,0),wa(l,e,n,i,r,o,0);return}a=a.next}s=s.next}while(s!==t)}function LR(t,e,n,i){const r=[];let o,s,a,l,u;for(o=0,s=e.length;o<s;o++)a=e[o]*i,l=o<s-1?e[o+1]*i:t.length,u=Q_(t,a,l,i,!1),u===u.next&&(u.steiner=!0),r.push(zR(u));for(r.sort(DR),o=0;o<r.length;o++)n=IR(r[o],n);return n}function DR(t,e){return t.x-e.x}function IR(t,e){const n=NR(t,e);if(!n)return e;const i=ty(n,t);return to(i,i.next),to(n,n.next)}function NR(t,e){let n=e,i=-1/0,r;const o=t.x,s=t.y;do{if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){const h=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(h<=o&&h>i&&(i=h,r=n.x<n.next.x?n:n.next,h===o))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,u=r.y;let c=1/0,f;n=r;do o>=n.x&&n.x>=l&&o!==n.x&&Wo(s<u?o:i,s,l,u,s<u?i:o,s,n.x,n.y)&&(f=Math.abs(s-n.y)/(o-n.x),Ta(n,t)&&(f<c||f===c&&(n.x>r.x||n.x===r.x&&UR(r,n)))&&(r=n,c=f)),n=n.next;while(n!==a);return r}function UR(t,e){return gt(t.prev,t,e.prev)<0&&gt(e.next,t,t.next)<0}function OR(t,e,n,i){let r=t;do r.z===0&&(r.z=Ef(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,FR(r)}function FR(t){let e,n,i,r,o,s,a,l,u=1;do{for(n=t,t=null,o=null,s=0;n;){for(s++,i=n,a=0,e=0;e<u&&(a++,i=i.nextZ,!!i);e++);for(l=u;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),o?o.nextZ=r:t=r,r.prevZ=o,o=r;n=i}o.nextZ=null,u*=2}while(s>1);return t}function Ef(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function zR(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Wo(t,e,n,i,r,o,s,a){return(r-s)*(e-a)>=(t-s)*(o-a)&&(t-s)*(i-a)>=(n-s)*(e-a)&&(n-s)*(o-a)>=(r-s)*(i-a)}function kR(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!BR(t,e)&&(Ta(t,e)&&Ta(e,t)&&HR(t,e)&&(gt(t.prev,t,e.prev)||gt(t,e.prev,e))||Ku(t,e)&&gt(t.prev,t,t.next)>0&&gt(e.prev,e,e.next)>0)}function gt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Ku(t,e){return t.x===e.x&&t.y===e.y}function ey(t,e,n,i){const r=Ll(gt(t,e,n)),o=Ll(gt(t,e,i)),s=Ll(gt(n,i,t)),a=Ll(gt(n,i,e));return!!(r!==o&&s!==a||r===0&&Pl(t,n,e)||o===0&&Pl(t,i,e)||s===0&&Pl(n,t,i)||a===0&&Pl(n,e,i))}function Pl(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Ll(t){return t>0?1:t<0?-1:0}function BR(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&ey(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Ta(t,e){return gt(t.prev,t,t.next)<0?gt(t,e,t.next)>=0&&gt(t,t.prev,e)>=0:gt(t,e,t.prev)<0||gt(t,t.next,e)<0}function HR(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,o=(t.y+e.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&r<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function ty(t,e){const n=new Mf(t.i,t.x,t.y),i=new Mf(e.i,e.x,e.y),r=t.next,o=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,o.next=i,i.prev=o,i}function Ag(t,e,n,i){const r=new Mf(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Aa(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Mf(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function GR(t,e,n,i){let r=0;for(let o=e,s=n-i;o<n;o+=i)r+=(t[s]-t[o])*(t[o+1]+t[s+1]),s=o;return r}class ra{static area(e){const n=e.length;let i=0;for(let r=n-1,o=0;o<n;r=o++)i+=e[r].x*e[o].y-e[o].x*e[r].y;return i*.5}static isClockWise(e){return ra.area(e)<0}static triangulateShape(e,n){const i=[],r=[],o=[];Rg(e),Cg(i,e);let s=e.length;n.forEach(Rg);for(let l=0;l<n.length;l++)r.push(s),s+=n[l].length,Cg(i,n[l]);const a=AR.triangulate(i,r);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function Rg(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function Cg(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Ih extends jn{constructor(e=new J_([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],o=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];s(u)}this.setAttribute("position",new An(r,3)),this.setAttribute("uv",new An(o,2)),this.computeVertexNormals();function s(a){const l=[],u=n.curveSegments!==void 0?n.curveSegments:12,c=n.steps!==void 0?n.steps:1,f=n.depth!==void 0?n.depth:1;let h=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,g=n.bevelSize!==void 0?n.bevelSize:p-.1,y=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3;const d=n.extrudePath,x=n.UVGenerator!==void 0?n.UVGenerator:VR;let v,_=!1,C,E,T,P;d&&(v=d.getSpacedPoints(c),_=!0,h=!1,C=d.computeFrenetFrames(c,!1),E=new k,T=new k,P=new k),h||(m=0,p=0,g=0,y=0);const M=a.extractPoints(u);let A=M.shape;const O=M.holes;if(!ra.isClockWise(A)){A=A.reverse();for(let S=0,I=O.length;S<I;S++){const L=O[S];ra.isClockWise(L)&&(O[S]=L.reverse())}}const Q=ra.triangulateShape(A,O),D=A;for(let S=0,I=O.length;S<I;S++){const L=O[S];A=A.concat(L)}function H(S,I,L){return I||console.error("THREE.ExtrudeGeometry: vec does not exist"),S.clone().addScaledVector(I,L)}const j=A.length,K=Q.length;function U(S,I,L){let G,F,fe;const se=S.x-I.x,R=S.y-I.y,w=L.x-S.x,V=L.y-S.y,re=se*se+R*R,ae=se*V-R*w;if(Math.abs(ae)>Number.EPSILON){const le=Math.sqrt(re),be=Math.sqrt(w*w+V*V),ye=I.x-R/le,Te=I.y+se/le,De=L.x-V/be,Be=L.y+w/be,ue=((De-ye)*V-(Be-Te)*w)/(se*V-R*w);G=ye+se*ue-S.x,F=Te+R*ue-S.y;const Ze=G*G+F*F;if(Ze<=2)return new me(G,F);fe=Math.sqrt(Ze/2)}else{let le=!1;se>Number.EPSILON?w>Number.EPSILON&&(le=!0):se<-Number.EPSILON?w<-Number.EPSILON&&(le=!0):Math.sign(R)===Math.sign(V)&&(le=!0),le?(G=-R,F=se,fe=Math.sqrt(re)):(G=se,F=R,fe=Math.sqrt(re/2))}return new me(G/fe,F/fe)}const B=[];for(let S=0,I=D.length,L=I-1,G=S+1;S<I;S++,L++,G++)L===I&&(L=0),G===I&&(G=0),B[S]=U(D[S],D[L],D[G]);const z=[];let Z,ie=B.concat();for(let S=0,I=O.length;S<I;S++){const L=O[S];Z=[];for(let G=0,F=L.length,fe=F-1,se=G+1;G<F;G++,fe++,se++)fe===F&&(fe=0),se===F&&(se=0),Z[G]=U(L[G],L[fe],L[se]);z.push(Z),ie=ie.concat(Z)}for(let S=0;S<m;S++){const I=S/m,L=p*Math.cos(I*Math.PI/2),G=g*Math.sin(I*Math.PI/2)+y;for(let F=0,fe=D.length;F<fe;F++){const se=H(D[F],B[F],G);he(se.x,se.y,-L)}for(let F=0,fe=O.length;F<fe;F++){const se=O[F];Z=z[F];for(let R=0,w=se.length;R<w;R++){const V=H(se[R],Z[R],G);he(V.x,V.y,-L)}}}const $=g+y;for(let S=0;S<j;S++){const I=h?H(A[S],ie[S],$):A[S];_?(T.copy(C.normals[0]).multiplyScalar(I.x),E.copy(C.binormals[0]).multiplyScalar(I.y),P.copy(v[0]).add(T).add(E),he(P.x,P.y,P.z)):he(I.x,I.y,0)}for(let S=1;S<=c;S++)for(let I=0;I<j;I++){const L=h?H(A[I],ie[I],$):A[I];_?(T.copy(C.normals[S]).multiplyScalar(L.x),E.copy(C.binormals[S]).multiplyScalar(L.y),P.copy(v[S]).add(T).add(E),he(P.x,P.y,P.z)):he(L.x,L.y,f/c*S)}for(let S=m-1;S>=0;S--){const I=S/m,L=p*Math.cos(I*Math.PI/2),G=g*Math.sin(I*Math.PI/2)+y;for(let F=0,fe=D.length;F<fe;F++){const se=H(D[F],B[F],G);he(se.x,se.y,f+L)}for(let F=0,fe=O.length;F<fe;F++){const se=O[F];Z=z[F];for(let R=0,w=se.length;R<w;R++){const V=H(se[R],Z[R],G);_?he(V.x,V.y+v[c-1].y,v[c-1].x+L):he(V.x,V.y,f+L)}}}ee(),de();function ee(){const S=r.length/3;if(h){let I=0,L=j*I;for(let G=0;G<K;G++){const F=Q[G];Ee(F[2]+L,F[1]+L,F[0]+L)}I=c+m*2,L=j*I;for(let G=0;G<K;G++){const F=Q[G];Ee(F[0]+L,F[1]+L,F[2]+L)}}else{for(let I=0;I<K;I++){const L=Q[I];Ee(L[2],L[1],L[0])}for(let I=0;I<K;I++){const L=Q[I];Ee(L[0]+j*c,L[1]+j*c,L[2]+j*c)}}i.addGroup(S,r.length/3-S,0)}function de(){const S=r.length/3;let I=0;pe(D,I),I+=D.length;for(let L=0,G=O.length;L<G;L++){const F=O[L];pe(F,I),I+=F.length}i.addGroup(S,r.length/3-S,1)}function pe(S,I){let L=S.length;for(;--L>=0;){const G=L;let F=L-1;F<0&&(F=S.length-1);for(let fe=0,se=c+m*2;fe<se;fe++){const R=j*fe,w=j*(fe+1),V=I+G+R,re=I+F+R,ae=I+F+w,le=I+G+w;Re(V,re,ae,le)}}}function he(S,I,L){l.push(S),l.push(I),l.push(L)}function Ee(S,I,L){_e(S),_e(I),_e(L);const G=r.length/3,F=x.generateTopUV(i,r,G-3,G-2,G-1);oe(F[0]),oe(F[1]),oe(F[2])}function Re(S,I,L,G){_e(S),_e(I),_e(G),_e(I),_e(L),_e(G);const F=r.length/3,fe=x.generateSideWallUV(i,r,F-6,F-3,F-2,F-1);oe(fe[0]),oe(fe[1]),oe(fe[3]),oe(fe[1]),oe(fe[2]),oe(fe[3])}function _e(S){r.push(l[S*3+0]),r.push(l[S*3+1]),r.push(l[S*3+2])}function oe(S){o.push(S.x),o.push(S.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return WR(n,i,e)}static fromJSON(e,n){const i=[];for(let o=0,s=e.shapes.length;o<s;o++){const a=n[e.shapes[o]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Sf[r.type]().fromJSON(r)),new Ih(i,e.options)}}const VR={generateTopUV:function(t,e,n,i,r){const o=e[n*3],s=e[n*3+1],a=e[i*3],l=e[i*3+1],u=e[r*3],c=e[r*3+1];return[new me(o,s),new me(a,l),new me(u,c)]},generateSideWallUV:function(t,e,n,i,r,o){const s=e[n*3],a=e[n*3+1],l=e[n*3+2],u=e[i*3],c=e[i*3+1],f=e[i*3+2],h=e[r*3],p=e[r*3+1],g=e[r*3+2],y=e[o*3],m=e[o*3+1],d=e[o*3+2];return Math.abs(a-c)<Math.abs(s-u)?[new me(s,1-l),new me(u,1-f),new me(h,1-g),new me(y,1-d)]:[new me(a,1-l),new me(c,1-f),new me(p,1-g),new me(m,1-d)]}};function WR(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const o=t[i];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class ps extends ro{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=S_,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ny extends Lt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class XR extends ny{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const fd=new Mt,bg=new k,Pg=new k;class jR{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rh,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;bg.setFromMatrixPosition(e.matrixWorld),n.position.copy(bg),Pg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Pg),n.updateMatrixWorld(),fd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(fd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class $R extends jR{constructor(){super(new F_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class YR extends ny{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new $R}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class qR extends fR{constructor(e=10,n=10,i=4473924,r=8947848){i=new Fe(i),r=new Fe(r);const o=n/2,s=e/n,a=e/2,l=[],u=[];for(let h=0,p=0,g=-a;h<=n;h++,g+=s){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const y=h===o?i:r;y.toArray(u,p),p+=3,y.toArray(u,p),p+=3,y.toArray(u,p),p+=3,y.toArray(u,p),p+=3}const c=new jn;c.setAttribute("position",new An(l,3)),c.setAttribute("color",new An(u,3));const f=new $_({vertexColors:!0,toneMapped:!1});super(c,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wh);function hd(t,e,n){return Math.min(n,Math.max(e,t))}function Zu(t){const e=t.replace("#","");return{r:parseInt(e.substring(0,2),16)||0,g:parseInt(e.substring(2,4),16)||0,b:parseInt(e.substring(4,6),16)||0}}function Ra(t,e,n){const i=hd(t.r*e,0,255)|0,r=hd(t.g*e,0,255)|0,o=hd(t.b*e,0,255)|0;return`rgba(${i},${r},${o},${n})`}function KR(t,e){return e==="concrete"?30:e==="marble"?6:e==="tile"?4:t==="roof"?26:t==="wall"?18:8}function ZR(t,e){return t==="marble"?Math.max(.2,e-.45):t==="tile"?Math.max(.3,e-.3):e}function JR(t,e,n){const i=Zu(e),r=n/8,o=n/4;t.strokeStyle=Ra(i,.5,.9),t.lineWidth=3;for(let a=0;a<=n;a+=r)t.beginPath(),t.moveTo(0,a),t.lineTo(n,a),t.stroke();let s=0;for(let a=0;a<n;a+=r){const l=s%2===0?0:o/2;for(let u=-o;u<=n+o;u+=o)t.beginPath(),t.moveTo(u+l,a),t.lineTo(u+l,a+r),t.stroke();s++}}function QR(t,e,n){const i=Zu(e),r=n/4;t.strokeStyle=Ra(i,1.35,.85),t.lineWidth=3;for(let o=0;o<=4;o++)t.beginPath(),t.moveTo(o*r,0),t.lineTo(o*r,n),t.stroke(),t.beginPath(),t.moveTo(0,o*r),t.lineTo(n,o*r),t.stroke()}function eC(t,e,n){const i=Zu(e),r=n/6;for(let o=0;o<n;o+=r){t.strokeStyle=Ra(i,.55,.85),t.lineWidth=2,t.beginPath(),t.moveTo(0,o),t.lineTo(n,o),t.stroke();for(let s=0;s<5;s++){const a=o+Math.random()*r,l=.85+Math.random()*.35;t.strokeStyle=Ra(i,l,.35),t.lineWidth=1,t.beginPath();const u=Math.random()*n*.6;t.moveTo(u,a),t.lineTo(u+n*(.2+Math.random()*.3),a),t.stroke()}}}function tC(t,e,n){const i=Zu(e);for(let r=0;r<4;r++){const o=r%2===0?1.4:.7;t.strokeStyle=Ra(i,o,.4),t.lineWidth=1+Math.random()*1.5,t.beginPath();let s=Math.random()*n,a=0;for(t.moveTo(s,a);a<n;){const l=s+(Math.random()-.5)*n*.3,u=a+n/6;t.quadraticCurveTo(s+(Math.random()-.5)*20,(a+u)/2,l,u),s=l,a=u}t.stroke()}}function nC(t,e,n,i){n==="brick"?JR(t,e,i):n==="tile"?QR(t,e,i):n==="wood"?eC(t,e,i):n==="marble"&&tC(t,e,i)}function Lg(t,e=2.7,n=0){var h;if(!t.length)return{x:10,z:8,radius:12,targetY:1};let i=1/0,r=1/0,o=-1/0,s=-1/0,a=0;t.forEach(p=>{i=Math.min(i,p.gx),o=Math.max(o,p.gx+p.gw),r=Math.min(r,p.gy),s=Math.max(s,p.gy+p.gh),a=Math.max(a,p.floor??0)});const l=Oa(t,e,0,n),u=((h=t.find(p=>(p.floor??0)===a))==null?void 0:h.wall_height)??e,c=l.get(a)+u+_i,f=Math.max(o-i,s-r);return{x:(i+o)/2,z:(r+s)/2,radius:Math.max(f,c)*1.5+4,targetY:Math.max(1,c*.55)}}function Oa(t,e,n=0,i=0){const r=Math.max(n,0,...t.map(a=>a.floor??0)),o=new Map;let s=0;for(let a=0;a<=r;a++){o.set(a,s);const l=t.find(c=>(c.floor??0)===a),u=(l==null?void 0:l.wall_height)??e;s+=u+_i+i}return o}function es(t,e,n){return Math.min(n,Math.max(e,t))}function iy(t){if(t.points&&t.points.length>=3){const e=t.points;let n=0;for(let i=0;i<e.length;i++){const r=e[i],o=e[(i+1)%e.length];n+=r.x*o.y-o.x*r.y}return Math.abs(n)/2}return t.gw*t.gh}function Ju(t,e){const n=t.filter(a=>(a.floor??0)===e);if(!n.length)return null;let i=1/0,r=1/0,o=-1/0,s=-1/0;return n.forEach(a=>{i=Math.min(i,a.gx),r=Math.min(r,a.gy),o=Math.max(o,a.gx+a.gw),s=Math.max(s,a.gy+a.gh)}),{minX:i,minY:r,maxX:o,maxY:s}}const ht=.15,kt=.9,ry=2.05,hn=.9,Au=.9,ei=.3,st=.3,hi=.4,iC=.4,pd=.6,_i=.18,ms=.22,Nr=.35,Xs=28*Math.PI/180,yi=0,Li=.55,Ru=.75,rC=.85,oy={bed:{label:"سرير",w:1.6,d:2,category:"غرفة نوم"},wardrobe:{label:"خزانة",w:1.2,d:.6,category:"غرفة نوم"},nightstand:{label:"كومودينو",w:.45,d:.4,category:"غرفة نوم"},sofa:{label:"أريكة",w:1.8,d:.85,category:"صالة"},armchair:{label:"كرسي بذراعين",w:.75,d:.75,category:"صالة"},tv_unit:{label:"وحدة تلفزيون",w:1.4,d:.4,category:"صالة"},dining_table:{label:"طاولة سفرة",w:1.6,d:.9,category:"صالة"},table:{label:"طاولة",w:1.4,d:.8,category:"عام"},chair:{label:"كرسي",w:.45,d:.45,category:"عام"},toilet:{label:"مرحاض",w:.4,d:.65,category:"حمام"},bathtub:{label:"بانيو",w:1.7,d:.75,category:"حمام"},shower:{label:"كابينة دش",w:.9,d:.9,category:"حمام"},sink:{label:"مغسلة حمام",w:.9,d:.55,category:"حمام"},kitchen_counter:{label:"كاونتر مطبخ",w:2,d:.6,category:"مطبخ"},stove:{label:"موقد",w:.6,d:.6,category:"مطبخ"},fridge:{label:"ثلاجة",w:.7,d:.7,category:"مطبخ"},desk:{label:"مكتب",w:1.2,d:.6,category:"مكتب"},bookshelf:{label:"مكتبة",w:.9,d:.3,category:"مكتب"}};function oC(t,e,n="plaster"){const r=document.createElement("canvas");r.width=256,r.height=256;const o=r.getContext("2d"),a=`#${new Fe(t).getHexString()}`;o.fillStyle=a,o.fillRect(0,0,256,256);const l=KR(e,n),u=o.getImageData(0,0,256,256),c=u.data;for(let h=0;h<c.length;h+=4){const p=(Math.random()-.5)*l;c[h]=es(c[h]+p,0,255),c[h+1]=es(c[h+1]+p,0,255),c[h+2]=es(c[h+2]+p,0,255)}if(o.putImageData(u,0,0),nC(o,a,n,256),e==="roof"&&n==="plaster"){o.strokeStyle="rgba(0,0,0,0.12)",o.lineWidth=1;for(let h=0;h<=256;h+=32)o.beginPath(),o.moveTo(0,h+.5),o.lineTo(256,h+.5),o.stroke()}const f=new Ph(r);return f.wrapS=Jr,f.wrapT=Jr,f.needsUpdate=!0,f}function sC(t,e,n,i="plaster"){const r=`${n}:${i}:${e}`;let o=t.get(r);return o||(o=oC(e,n,i),t.set(r,o)),o}function aC(){const e=new Float32Array(16384);for(let u=0;u<e.length;u++)e[u]=Math.random();const n=new Float32Array(128*128);for(let u=0;u<128;u++)for(let c=0;c<128;c++){let f=0;for(let h=-1;h<=1;h++)for(let p=-1;p<=1;p++){const g=(c+p+128)%128,y=(u+h+128)%128;f+=e[y*128+g]}n[u*128+c]=f/9}const i=document.createElement("canvas");i.width=128,i.height=128;const r=i.getContext("2d"),o=r.createImageData(128,128),s=o.data,a=1.2;for(let u=0;u<128;u++)for(let c=0;c<128;c++){const f=n[u*128+(c-1+128)%128],h=n[u*128+(c+1)%128],p=n[(u-1+128)%128*128+c],g=n[(u+1)%128*128+c];let y=(f-h)*a,m=(p-g)*a;const d=1,x=Math.hypot(y,m,d),v=(u*128+c)*4;s[v]=(y/x*.5+.5)*255,s[v+1]=(m/x*.5+.5)*255,s[v+2]=(d/x*.5+.5)*255,s[v+3]=255}r.putImageData(o,0,0);const l=new Ph(i);return l.wrapS=Jr,l.wrapT=Jr,l.needsUpdate=!0,l}function lC(t){const e="normal:wall";let n=t.get(e);return n||(n=aC(),t.set(e,n)),n}function Ct(t,e,n,i,r,o,s="plaster"){const l=sC(t,e,n,s).clone();l.needsUpdate=!0;const u=1.2,c=Math.max(1,Math.round(i/u)),f=Math.max(1,Math.round(r/u));l.repeat.set(c,f);const h={map:l,roughness:ZR(s,o)};if(n==="wall"){const p=lC(t).clone();p.needsUpdate=!0,p.repeat.set(c,f),h.normalMap=p,h.normalScale=new me(.5,.5)}return new ps(h)}function Et(t,e,n,i,r,o,s,a,l,u){const c=new kn(new oo(Math.max(n,.03),Math.max(i,.03),Math.max(r,.03)),l);return c.position.set(o,s+i/2,a),c.scale.y=.001,c.castShadow=!0,c.receiveShadow=!0,t.add(c),e.meshes.push({mesh:c,height:i,baseY:s,delay:u}),c}function uC(t,e,n){if(n)return t<=kt+.4?[]:[{start:(t-kt)/2,width:kt,sill:0,openH:ry,isDoor:!0}];const i=es(1.3,.3,e-Au-.25);if(i<=.3)return[];const r=t-2*iC;let o=0;if(r>=2*hn+pd?o=2:r>=hn&&(o=1),o===0)return[];const s=o*hn+(o-1)*pd,a=(t-s)/2,l=[];for(let u=0;u<o;u++)l.push({start:a+u*(hn+pd),width:hn,sill:Au,openH:i,isDoor:!1});return l}const Xo=1e-6,Co=(t,e)=>Math.abs(t-e)<Xo,wf=.01;function cC(t){const e=[];for(let n=0;n<t.length;n++){const i=t[n],r=i.floor??0;for(let o=n+1;o<t.length;o++){const s=t[o];if((s.floor??0)===r){if(Co(s.gx,i.gx+i.gw)||Co(i.gx,s.gx+s.gw)){const a=Math.max(i.gy,s.gy),l=Math.min(i.gy+i.gh,s.gy+s.gh);l-a>wf&&(Co(s.gx,i.gx+i.gw)?e.push({a:{room:i,wall:"right"},b:{room:s,wall:"left"},start:a,end:l}):e.push({a:{room:i,wall:"left"},b:{room:s,wall:"right"},start:a,end:l}))}if(Co(s.gy,i.gy+i.gh)||Co(i.gy,s.gy+s.gh)){const a=Math.max(i.gx,s.gx),l=Math.min(i.gx+i.gw,s.gx+s.gw);l-a>wf&&(Co(s.gy,i.gy+i.gh)?e.push({a:{room:i,wall:"bottom"},b:{room:s,wall:"top"},start:a,end:l}):e.push({a:{room:i,wall:"top"},b:{room:s,wall:"bottom"},start:a,end:l}))}}}}return e}function sy(t){if(!t.length)return[];const e=t.slice().sort((i,r)=>i.start-r.start),n=[{...e[0]}];for(let i=1;i<e.length;i++){const r=e[i],o=n[n.length-1];r.start<=o.end+Xo?o.end=Math.max(o.end,r.end):n.push({...r})}return n}function ay(t,e,n=.02){const i=[];let r=0;return t.forEach(o=>{o.start>r+n&&i.push({start:r,end:o.start}),r=Math.max(r,o.end)}),e>r+n&&i.push({start:r,end:e}),i}function dC(t){const e=new Map,n=(r,o,s,a)=>{const l=`${r}:${o}`;e.has(l)||e.set(l,[]),e.get(l).push({start:s,end:a})};t.forEach(r=>{const{room:o,wall:s}=r.a,{room:a,wall:l}=r.b,u=s==="left"||s==="right"?o.gy:o.gx,c=l==="left"||l==="right"?a.gy:a.gx;n(o.id,s,r.start-u,r.end-u),n(a.id,l,r.start-c,r.end-c)});const i=new Map;return e.forEach((r,o)=>i.set(o,sy(r))),i}const Dl=.02;function ly(t,e,n){return n!=null?`${t}:edge:${n}`:`${t}:${e}`}function Dg(t){if(t.points&&t.points.length>=3)return t.points.map((o,s)=>{const a=t.points[(s+1)%t.points.length];return{room:t,wall:null,edgeIndex:s,p1:o,p2:a,length:Math.hypot(a.x-o.x,a.y-o.y)}});const{gx:e,gy:n,gw:i,gh:r}=t;return[{room:t,wall:"top",edgeIndex:null,p1:{x:e,y:n},p2:{x:e+i,y:n},length:i},{room:t,wall:"bottom",edgeIndex:null,p1:{x:e,y:n+r},p2:{x:e+i,y:n+r},length:i},{room:t,wall:"left",edgeIndex:null,p1:{x:e,y:n},p2:{x:e,y:n+r},length:r},{room:t,wall:"right",edgeIndex:null,p1:{x:e+i,y:n},p2:{x:e+i,y:n+r},length:r}]}function fC(t,e){const n=t.length,i=e.length;if(!(n>Dl)||!(i>Dl))return null;const r=(t.p2.x-t.p1.x)/n,o=(t.p2.y-t.p1.y)/n,s=d=>Math.abs((d.x-t.p1.x)*o-(d.y-t.p1.y)*r);if(s(e.p1)>Dl||s(e.p2)>Dl)return null;const a=d=>(d.x-t.p1.x)*r+(d.y-t.p1.y)*o,l=a(e.p1),u=a(e.p2),c=Math.max(0,Math.min(l,u)),f=Math.min(n,Math.max(l,u));if(f-c<=wf)return null;const h=u<l,p=d=>h?l-d:d-l,g=d=>Math.min(i,Math.max(0,d)),y=p(c),m=p(f);return{a:{start:c,end:f},b:{start:g(Math.min(y,m)),end:g(Math.max(y,m))},p1:{x:t.p1.x+r*c,y:t.p1.y+o*c},p2:{x:t.p1.x+r*f,y:t.p1.y+o*f},length:f-c,flipped:h}}function hC(t){const e=i=>!!(i.points&&i.points.length>=3),n=[];for(let i=0;i<t.length;i++){const r=t[i],o=r.floor??0;for(let s=i+1;s<t.length;s++){const a=t[s];(a.floor??0)===o&&(!e(r)&&!e(a)||Dg(r).forEach(l=>{Dg(a).forEach(u=>{const c=fC(l,u);c&&n.push({a:{room:r,wall:l.wall,edgeIndex:l.edgeIndex,start:c.a.start,end:c.a.end,edgeLength:l.length},b:{room:a,wall:u.wall,edgeIndex:u.edgeIndex,start:c.b.start,end:c.b.end,edgeLength:u.length},p1:c.p1,p2:c.p2,length:c.length,flipped:c.flipped})})}))}}return n}function pC(t,e){const n=new Map;return e.forEach(i=>{[i.a,i.b].forEach(r=>{const o=ly(r.room.id,r.wall,r.edgeIndex);n.has(o)||n.set(o,[]),n.get(o).push({start:r.start,end:r.end})})}),n.forEach((i,r)=>{t.set(r,sy([...t.get(r)||[],...i]))}),t}function Ig(t){const e=[];return t.forEach(n=>{e.some(i=>Math.abs(i.start-n.start)<.05)||e.push(n)}),e}function Ca(t,e,n){const i=t.kind==="door",r=i?kt:hn,o=i?0:Au,s=i?ry:es(1.3,.3,n-Au-.25);return{start:es(Number(t.position)-r/2,0,Math.max(0,e-r)),width:r,sill:o,openH:s,isDoor:i}}function mC(t,e,n,i,r){return t==null?uC(n,i,r):t.filter(o=>o.wall===e).map(o=>Ca(o,n,i))}function Ng(t,e,n,i,r,o){const{axis:s,u0:a,fixed:l,wallLength:u,wallHeight:c,openings:f,floorBaseY:h=0}=o,p=d=>s==="x"?{x:a+d,z:l}:{x:l,z:a+d},g=f.slice().sort((d,x)=>d.start-x.start);let y=0;const m=[];g.forEach(d=>{d.start>y+.02&&m.push({start:y,end:d.start}),y=Math.max(y,d.start+d.width)}),y<u-.02&&m.push({start:y,end:u}),m.forEach(d=>{const x=d.end-d.start;if(x<=.02)return;const v=(d.start+d.end)/2,_=p(v),C=s==="x"?x:ht,E=s==="x"?ht:x,T=Ct(n,i,"wall",x,c,.85,r);Et(t,e,C,c,E,_.x,h,_.z,T,yi)}),g.forEach(d=>{const x=d.start+d.width/2,v=p(x),_=s==="x"?d.width:ht,C=s==="x"?ht:d.width;if(d.sill>.02){const P=Ct(n,i,"wall",d.width,d.sill,.85,r);Et(t,e,_,d.sill,C,v.x,h,v.z,P,yi)}const E=d.sill+d.openH,T=c-E;if(T>.02){const P=Ct(n,i,"wall",d.width,T,.85,r);Et(t,e,_,T,C,v.x,h+E,v.z,P,yi)}if(d.isDoor){const P=new ps({color:9132587,roughness:.7}),M=s==="x"?d.width-.06:.05,A=s==="x"?.05:d.width-.06;Et(t,e,M,d.openH,A,v.x,h,v.z,P,Ru)}else{const P=new ps({color:10475752,transparent:!0,opacity:.35,roughness:.05,metalness:.1,side:fn}),M=s==="x"?d.width-.05:.03,A=s==="x"?.03:d.width-.05,O=Et(t,e,M,d.openH-.05,A,v.x,h+d.sill,v.z,P,Ru);O.castShadow=!1}})}function gC(t,e,n,i,r,o,s,a,l,u,c,f){if(!c&&!f)return;if(c&&!f&&!i.points){if(i.roof_type==="gable"){vC(t,e,n,i,r,o,s,a,l,u);return}if(i.roof_type==="hip"){_C(t,e,n,i,r,o,s,l,u);return}}const p=`#${new Fe(s).multiplyScalar(.72).getHexString()}`,g=i.gw+ms*2,y=i.gh+ms*2,m=Ct(n,p,"roof",g,y,.95);if(Et(t,e,g,_i,y,l,o+r,u,m,Li),!c)return;const d=i.gw+ht,x=i.gh+ht,v=o+r+_i,_=l-i.gw/2,C=l+i.gw/2,E=u-i.gh/2,T=u+i.gh/2,P=Ct(n,p,"roof",d,Nr,.95),M=Ct(n,p,"roof",x,Nr,.95);Et(t,e,d,Nr,ht,l,v,E,P,Li),Et(t,e,d,Nr,ht,l,v,T,P,Li),Et(t,e,ht,Nr,x,_,v,u,M,Li),Et(t,e,ht,Nr,x,C,v,u,M,Li)}function vC(t,e,n,i,r,o,s,a,l,u){const c=i.gw>=i.gh,f=(c?i.gh:i.gw)+ms*2,h=(c?i.gw:i.gh)+ms*2,p=f/2,g=p*Math.tan(Xs),y=p/Math.cos(Xs),m=o+r,x=`#${new Fe(s).multiplyScalar(.72).getHexString()}`,v=Ct(n,x,"roof",y,h,.95);[-1,1].forEach(P=>{const M=new Hr;M.position.set(l,m+g,u),c?M.rotation.x=P*Xs:M.rotation.z=-P*Xs,t.add(M);const A=c?h:y,O=c?y:h,X=c?0:P*y/2,Q=c?P*y/2:0;Et(M,e,A,_i,O,X,0,Q,v,Li)});const _=c?i.gh:i.gw,C=(c?i.gw:i.gh)/2,E=10,T=Ct(n,s,"wall",_,g,.85,a);[-1,1].forEach(P=>{const M=c?l+P*C:l,A=c?u:u+P*C;for(let O=0;O<E;O++){const X=O/E,Q=(O+1)/E,D=g/E,H=g*(X+Q)/2,j=_*(1-(X+Q)/2);Et(t,e,c?ht:j,D,c?j:ht,M,m+H-D/2,A,T,Li)}})}function Ug(t,e,n,i,r){const o=r/2,s=[t-n,-o,e-i],a=[t+n,-o,e-i],l=[t+n,-o,e+i],u=[t-n,-o,e+i],c=[t-(n-i),r-o,e],f=[t+(n-i),r-o,e],h=[u,l,f,u,f,c,a,s,c,a,c,f,s,u,c,l,a,f],p=new jn;return p.setAttribute("position",new Vn(new Float32Array(h.flat()),3)),p.computeVertexNormals(),p}function _C(t,e,n,i,r,o,s,a,l){const u=i.gw>=i.gh,c=(u?i.gh:i.gw)+ms*2,f=(u?i.gw:i.gh)+ms*2,h=c/2,p=f/2,g=h*Math.tan(Xs),y=u?Ug(a,l,p,h,g):Ug(0,0,p,h,g);u||(y.rotateY(Math.PI/2),y.translate(a,0,l));const d=`#${new Fe(s).multiplyScalar(.72).getHexString()}`,x=Ct(n,d,"roof",f,c,.95);x.side=fn,Af(t,e,y,x,o+r,g,Li)}function uy(t,e,n){switch(n){case 90:return{x:-e,z:t};case 180:return{x:-t,z:-e};case 270:return{x:e,z:-t};default:return{x:t,z:e}}}function Ht(t,e,n,i,r,o,s,a){const l=i.rotation||0,{x:u,z:c}=uy(a.cx,a.cz,l),f=l===90||l===270,h=f?a.d:a.w,p=f?a.w:a.d,g=Ct(n,a.color,"wall",h,a.h,.75);Et(t,e,h,a.h,p,r+u,s+a.bottomY,o+c,g,rC)}function yC(t,e,n,i,r,o,s){const a=l=>Ht(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:1.6,d:2,h:.35,bottomY:0,color:"#8B5A2B"}),a({cx:0,cz:0,w:1.5,d:1.9,h:.18,bottomY:.35,color:"#EDE7DC"}),a({cx:0,cz:-.96,w:1.6,d:.08,h:.55,bottomY:.35,color:"#8B5A2B"})}function xC(t,e,n,i,r,o,s){const a=l=>Ht(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:1.8,d:.85,h:.4,bottomY:0,color:"#3B4454"}),a({cx:0,cz:-.35,w:1.8,d:.15,h:.35,bottomY:.4,color:"#3B4454"}),a({cx:-.825,cz:0,w:.15,d:.85,h:.55,bottomY:0,color:"#2C3444"}),a({cx:.825,cz:0,w:.15,d:.85,h:.55,bottomY:0,color:"#2C3444"})}function SC(t,e,n,i,r,o,s){const a=u=>Ht(t,e,n,i,r,o,s,u);a({cx:0,cz:0,w:1.4,d:.8,h:.05,bottomY:.7,color:"#6B4A32"}),[[-.65,-.35],[.65,-.35],[-.65,.35],[.65,.35]].forEach(([u,c])=>a({cx:u,cz:c,w:.06,d:.06,h:.7,bottomY:0,color:"#3A2A1E"}))}function EC(t,e,n,i,r,o,s){const a=l=>Ht(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:1.2,d:.6,h:1.85,bottomY:0,color:"#C9A876"}),a({cx:0,cz:0,w:1.2,d:.6,h:.05,bottomY:1.85,color:"#A9895C"})}function MC(t,e,n,i,r,o,s){const a=l=>Ht(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:.9,d:.55,h:.82,bottomY:0,color:"#E8ECF0"}),a({cx:0,cz:-.05,w:.55,d:.35,h:.08,bottomY:.75,color:"#B9C2CC"}),a({cx:0,cz:-.25,w:.9,d:.05,h:.35,bottomY:.82,color:"#E8ECF0"})}function wC(t,e,n,i,r,o,s){const a=l=>Ht(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:.45,d:.4,h:.48,bottomY:0,color:"#C9A876"}),a({cx:0,cz:0,w:.45,d:.4,h:.02,bottomY:.48,color:"#A9895C"})}function TC(t,e,n,i,r,o,s){const a=l=>Ht(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:.75,d:.75,h:.4,bottomY:0,color:"#3B4454"}),a({cx:0,cz:-.3,w:.75,d:.15,h:.35,bottomY:.4,color:"#3B4454"}),a({cx:-.3,cz:0,w:.15,d:.75,h:.5,bottomY:0,color:"#2C3444"}),a({cx:.3,cz:0,w:.15,d:.75,h:.5,bottomY:0,color:"#2C3444"})}function AC(t,e,n,i,r,o,s){const a=l=>Ht(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:1.4,d:.4,h:.45,bottomY:0,color:"#3B4454"}),a({cx:0,cz:-.15,w:1.1,d:.05,h:.65,bottomY:.45,color:"#1A1A1D"})}function RC(t,e,n,i,r,o,s){const a=u=>Ht(t,e,n,i,r,o,s,u);a({cx:0,cz:0,w:1.6,d:.9,h:.05,bottomY:.72,color:"#5A3D28"}),[[-.72,-.4],[.72,-.4],[-.72,.4],[.72,.4]].forEach(([u,c])=>a({cx:u,cz:c,w:.07,d:.07,h:.72,bottomY:0,color:"#3A2A1E"}))}function CC(t,e,n,i,r,o,s){const a=u=>Ht(t,e,n,i,r,o,s,u);a({cx:0,cz:0,w:.42,d:.42,h:.05,bottomY:.45,color:"#4A4A52"}),a({cx:0,cz:-.185,w:.42,d:.05,h:.4,bottomY:.45,color:"#4A4A52"}),[[-.17,-.17],[.17,-.17],[-.17,.17],[.17,.17]].forEach(([u,c])=>a({cx:u,cz:c,w:.04,d:.04,h:.45,bottomY:0,color:"#2C3444"}))}function bC(t,e,n,i,r,o,s){const a=l=>Ht(t,e,n,i,r,o,s,l);a({cx:0,cz:.08,w:.4,d:.5,h:.4,bottomY:0,color:"#F2F2F4"}),a({cx:0,cz:-.28,w:.38,d:.15,h:.35,bottomY:.4,color:"#F2F2F4"})}function PC(t,e,n,i,r,o,s){const a=l=>Ht(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:1.7,d:.75,h:.55,bottomY:0,color:"#F2F2F4"}),a({cx:0,cz:0,w:1.5,d:.55,h:.4,bottomY:.12,color:"#DCE3E8"})}function LC(t,e,n,i,r,o,s){const a=l=>Ht(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:.9,d:.9,h:.05,bottomY:0,color:"#DCE3E8"}),a({cx:-.44,cz:0,w:.03,d:.9,h:1.9,bottomY:.05,color:"#9FD8E8"}),a({cx:0,cz:-.44,w:.9,d:.03,h:1.9,bottomY:.05,color:"#9FD8E8"})}function DC(t,e,n,i,r,o,s){const a=l=>Ht(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:2,d:.6,h:.85,bottomY:0,color:"#DCDCE1"}),a({cx:0,cz:0,w:2,d:.62,h:.04,bottomY:.85,color:"#1A1A1D"})}function IC(t,e,n,i,r,o,s){const a=l=>Ht(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:.6,d:.6,h:.85,bottomY:0,color:"#DCDCE1"}),a({cx:0,cz:0,w:.55,d:.55,h:.03,bottomY:.85,color:"#1A1A1D"})}function NC(t,e,n,i,r,o,s){const a=l=>Ht(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:.7,d:.7,h:1.8,bottomY:0,color:"#E8ECF0"}),a({cx:.3,cz:-.36,w:.03,d:.1,h:.4,bottomY:.9,color:"#8E8E96"})}function UC(t,e,n,i,r,o,s){const a=u=>Ht(t,e,n,i,r,o,s,u);a({cx:0,cz:0,w:1.2,d:.6,h:.04,bottomY:.72,color:"#6B4A32"}),a({cx:.4,cz:0,w:.35,d:.55,h:.72,bottomY:0,color:"#4A4A52"}),[[-.55,-.25],[-.55,.25]].forEach(([u,c])=>a({cx:u,cz:c,w:.05,d:.05,h:.72,bottomY:0,color:"#3A2A1E"}))}function OC(t,e,n,i,r,o,s){const a=l=>Ht(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:.9,d:.3,h:1.8,bottomY:0,color:"#8B5A2B"}),[.5,1,1.5].forEach(l=>a({cx:0,cz:0,w:.85,d:.28,h:.03,bottomY:l,color:"#6B4A32"}))}function FC(t,e,n,i,r,o,s){switch(i.kind){case"bed":return yC(t,e,n,i,r,o,s);case"sofa":return xC(t,e,n,i,r,o,s);case"table":return SC(t,e,n,i,r,o,s);case"wardrobe":return EC(t,e,n,i,r,o,s);case"sink":return MC(t,e,n,i,r,o,s);case"nightstand":return wC(t,e,n,i,r,o,s);case"armchair":return TC(t,e,n,i,r,o,s);case"tv_unit":return AC(t,e,n,i,r,o,s);case"dining_table":return RC(t,e,n,i,r,o,s);case"chair":return CC(t,e,n,i,r,o,s);case"toilet":return bC(t,e,n,i,r,o,s);case"bathtub":return PC(t,e,n,i,r,o,s);case"shower":return LC(t,e,n,i,r,o,s);case"kitchen_counter":return DC(t,e,n,i,r,o,s);case"stove":return IC(t,e,n,i,r,o,s);case"fridge":return NC(t,e,n,i,r,o,s);case"desk":return UC(t,e,n,i,r,o,s);case"bookshelf":return OC(t,e,n,i,r,o,s);default:return}}const Nh=1,zC=.914,kC=.8;function BC(t){return t==="eu"?kC:zC}function HC(t){return t==="eu"?"DIN 18065":"IRC R311.7.1"}const Yl=.28,GC=.18,VC=.85;function Uh(t,e=Nh){const n=Math.max(4,Math.round(t/GC));return{w:e,d:n*Yl,numSteps:n}}function WC(t,e,n,i,r,o,s,a,l){const u=i.width??Nh,{d:c,numSteps:f}=Uh(r,u),h=r/f,p=i.rotation||0,y=`#${new Fe(l).multiplyScalar(.85).getHexString()}`,m=p===90||p===270;for(let d=0;d<f;d++){const x=-c/2+(d+.5)*Yl,v=(d+1)*h,{x:_,z:C}=uy(0,x,p),E=m?Yl:u,T=m?u:Yl,P=Ct(n,y,"wall",E,v,.8);Et(t,e,E,v,T,o+_,a,s+C,P,VC)}}function Tf(t,e,n,i,r,o,s,a,l,u,c=[]){const f=s.x-o.x,h=s.y-o.y,p=Math.hypot(f,h);if(p<.02)return;const g=Math.atan2(f,h),y=(o.x+s.x)/2-u.x,m=(o.y+s.y)/2-u.z,d=new Hr;d.position.set(y,l,m),d.rotation.y=g,t.add(d);const x=c.slice().sort((E,T)=>E.start-T.start),v=E=>E-p/2;let _=0;const C=[];x.forEach(E=>{E.start>_+.02&&C.push({start:_,end:E.start}),_=Math.max(_,E.start+E.width)}),_<p-.02&&C.push({start:_,end:p}),C.forEach(E=>{const T=E.end-E.start;if(T<=.02)return;const P=Ct(n,i,"wall",T,a,.85,r);Et(d,e,ht,a,T,0,0,v((E.start+E.end)/2),P,yi)}),x.forEach(E=>{const T=v(E.start+E.width/2);if(E.sill>.02){const A=Ct(n,i,"wall",E.width,E.sill,.85,r);Et(d,e,ht,E.sill,E.width,0,0,T,A,yi)}const P=E.sill+E.openH,M=a-P;if(M>.02){const A=Ct(n,i,"wall",E.width,M,.85,r);Et(d,e,ht,M,E.width,0,P,T,A,yi)}if(E.isDoor){const A=new ps({color:9132587,roughness:.7});Et(d,e,.05,E.openH,E.width-.06,0,0,T,A,Ru)}else{const A=new ps({color:10475752,transparent:!0,opacity:.35,roughness:.05,metalness:.1,side:fn}),O=Et(d,e,.03,E.openH-.05,E.width-.05,0,E.sill,T,A,Ru);O.castShadow=!1}})}function Og(t,e,n){const i=new J_;t.forEach((o,s)=>{const a=o.x-n.x,l=o.y-n.z;s===0?i.moveTo(a,l):i.lineTo(a,l)}),i.closePath();const r=new Ih(i,{depth:e,bevelEnabled:!1,curveSegments:1});return r.translate(0,0,-e/2),r.rotateX(Math.PI/2),r}function Af(t,e,n,i,r,o,s){const a=new kn(n,i);return a.position.set(0,r+o/2,0),a.scale.y=.001,a.castShadow=!0,a.receiveShadow=!0,t.add(a),e.meshes.push({mesh:a,height:o,baseY:r,delay:s}),a}function XC(t,e,n,i,r,o,s,a,l,u,c,f=!1){const h=i.points;if(!h||h.length<3)return;const p=Og(h,.06,l),g=Ct(n,i.color,"floor",4,4,.9,i.floor_material);g.side=fn,Af(t,e,p,g,o,.06,yi);for(let v=0;v<h.length;v++){const _=h[v],C=h[(v+1)%h.length],E=Math.hypot(C.x-_.x,C.y-_.y),T=(i.openings||[]).filter(M=>M.edge_index===v).map(M=>Ca(M,E,r)),P=(c==null?void 0:c.get(ly(i.id,null,v)))||[];ay(P,E).forEach(M=>{const A=X=>({x:_.x+(C.x-_.x)*X/E,y:_.y+(C.y-_.y)*X/E}),O=T.filter(X=>X.start>=M.start-.02&&X.start+X.width<=M.end+.02).map(X=>({...X,start:X.start-M.start}));Tf(t,e,n,s,a,A(M.start),A(M.end),r,o,l,O)})}if(f||!i.has_roof&&!u)return;const m=`#${new Fe(s).multiplyScalar(.72).getHexString()}`,d=Og(h,_i,l),x=Ct(n,m,"roof",4,4,.95);if(x.side=fn,Af(t,e,d,x,o+r,_i,Li),i.has_roof){const v=o+r+_i;for(let _=0;_<h.length;_++)Tf(t,e,n,m,a,h[_],h[(_+1)%h.length],Nr,v,l)}}const jC=[{wall:"top",axis:"x",doorFallback:!1},{wall:"bottom",axis:"x",doorFallback:!0},{wall:"left",axis:"z",doorFallback:!1},{wall:"right",axis:"z",doorFallback:!1}];function cy(t){var e,n,i;for((e=t.geometry)==null||e.dispose(),t.material&&((n=t.material.map)==null||n.dispose(),(i=t.material.normalMap)==null||i.dispose(),t.material.dispose());t.children.length;)cy(t.children.pop())}function $C(t,e){const n=(t.floor??0)+1,i=t.gx,r=t.gx+t.gw,o=t.gy,s=t.gy+t.gh;return e.some(a=>{if(a===t||(a.floor??0)!==n)return!1;const l=a.gx,u=a.gx+a.gw,c=a.gy,f=a.gy+a.gh;return i<u&&r>l&&o<f&&s>c})}function YC(t,e,n,i,r,o,s,a,l="plaster",u={}){const c=!!u.hideRoofs,f=u.floorGap??0,h=u.columns||[],p=u.showFoundation!==!1;for(;t.children.length;)cy(t.children.pop());s.meshes=[];const g=e.filter(_=>!_.points),y=cC(g),m=hC(e),d=pC(dC(y),m),x=Math.max(0,...(n||[]).map(_=>(_.floor??0)+1)),v=Oa(e,i,x,f);if(e.forEach(_=>{const C=_.floor??0,E=v.get(C),T=_.wall_height??i,P=_.wall_color??r,M=_.wall_material??l,A=$C(_,e);if(_.points){XC(t,s,a,_,T,E,P,M,o,A,d,c);return}const O=_.gx+_.gw/2-o.x,X=_.gy+_.gh/2-o.z,Q=Ct(a,_.color,"floor",_.gw,_.gh,.9,_.floor_material),D=new kn(new oo(_.gw,.06,_.gh),Q);D.position.set(O,E+.03,X),D.receiveShadow=!0,t.add(D);const H=_.gx-o.x,j=_.gx+_.gw-o.x,K=_.gy-o.z,U=_.gy+_.gh-o.z;jC.forEach(({wall:B,axis:z,doorFallback:Z})=>{const ie=z==="x"?_.gw:_.gh,$=z==="x"?H:K,ee=B==="top"?K:B==="bottom"?U:B==="left"?H:j,de=d.get(`${_.id}:${B}`)||[],pe=ay(de,ie);if(pe.length===0)return;const he=mC(_.openings,B,ie,T,Z);pe.forEach(Ee=>{const Re=Ee.start<=Xo?ht/2:0,_e=Ee.end>=ie-Xo?ht/2:0,oe=Ee.end-Ee.start+Re+_e,S=$+Ee.start-Re,I=he.filter(L=>L.start>=Ee.start-.02&&L.start+L.width<=Ee.end+.02).map(L=>({...L,start:L.start-Ee.start+Re}));Ng(t,s,a,P,M,{axis:z,u0:S,fixed:ee,wallLength:oe,wallHeight:T,floorBaseY:E,openings:I})})}),gC(t,s,a,_,T,E,P,M,O,X,!c&&!!_.has_roof,!c&&A),(_.furniture||[]).forEach(B=>{FC(t,s,a,B,_.gx+Number(B.x)-o.x,_.gy+Number(B.y)-o.z,E)})}),y.forEach(_=>{const{room:C,wall:E}=_.a,{room:T,wall:P}=_.b,M=v.get(C.floor??0),A=C.wall_height??i,O=C.wall_color??r,X=C.wall_material??l,Q=C.gx-o.x,D=C.gx+C.gw-o.x,H=C.gy-o.z,j=C.gy+C.gh-o.z,K=E==="left"||E==="right"?"z":"x",U=K==="z"?C.gh:C.gw,B=K==="z"?T.gh:T.gw,z=K==="z"?C.gy:C.gx,Z=K==="z"?T.gy:T.gx,ie=K==="z"?H:Q,$=K==="z"?E==="right"?D:Q:E==="bottom"?j:H,ee=_.start-z,de=_.end-z,pe=ee<=Xo?ht/2:0,he=de>=U-Xo?ht/2:0,Ee=de-ee+pe+he,Re=ie+ee-pe,_e=(S,I,L,G)=>(S.openings||[]).filter(F=>F.wall===I&&F.kind==="door").filter(F=>{const fe=L+Number(F.position);return fe-kt/2>=_.start-.02&&fe+kt/2<=_.end+.02}).map(F=>{const fe=Ca(F,G,A);return{...fe,start:L+fe.start-_.start+pe}}),oe=Ig([..._e(C,E,z,U),..._e(T,P,Z,B)]);Ng(t,s,a,O,X,{axis:K,u0:Re,fixed:$,wallLength:Ee,wallHeight:A,floorBaseY:M,openings:oe})}),m.forEach(_=>{const C=_.a.room,E=v.get(C.floor??0),T=C.wall_height??i,P=C.wall_color??r,M=C.wall_material??l,A=(X,Q)=>(X.room.openings||[]).filter(D=>(X.edgeIndex!=null?D.edge_index===X.edgeIndex:D.wall===X.wall)&&D.kind==="door").map(D=>Ca(D,X.edgeLength,T)).filter(D=>D.start>=X.start-.02&&D.start+D.width<=X.end+.02).map(D=>({...D,start:Q&&_.flipped?X.end-(D.start+D.width):D.start-X.start})),O=Ig([...A(_.a,!1),...A(_.b,!0)]);Tf(t,s,a,P,M,_.p1,_.p2,T,E,o,O)}),(n||[]).forEach(_=>{const C=_.floor??0,E=v.get(C),T=v.get(C+1)-E;if(!(T>0))return;const P=Number(_.x)-o.x,M=Number(_.y)-o.z;WC(t,s,a,_,T,P,M,E,r)}),h.forEach(_=>{const C=_.floor??0,E=v.get(C);if(E==null)return;const T=_.height??i,P=_.size??ei,M=Number(_.x)-o.x,A=Number(_.y)-o.z,O=Ct(a,"#9a9a9a","wall",P,T,.85,"concrete");if(Et(t,s,P,T,P,M,E,A,O,yi),p&&C===0){const X=P+st*2,Q=Ct(a,"#8d8d8d","wall",X,hi,.9,"concrete");Et(t,s,X,hi,X,M,E-hi,A,Q,yi)}}),p){const _=Ju(e,0),C=v.get(0);if(_&&C!=null){const E=_.maxX-_.minX+st*2,T=_.maxY-_.minY+st*2,P=(_.minX+_.maxX)/2-o.x,M=(_.minY+_.maxY)/2-o.z,A=Ct(a,"#8d8d8d","wall",E,hi,.9,"concrete");Et(t,s,E,hi,T,P,C-hi,M,A,yi)}}s.progress=0,s.playing=!0}const ne=32;function dt(t,e=.5){return Math.round(t/e)*e}function ii(t,e,n){return Math.min(n,Math.max(e,t))}function qC(t,e,n,i,r){return!n||!(n.width>0)||!(n.height>0)?{x:0,y:0}:{x:ii((t-n.left)/n.width*i,0,i),y:ii((e-n.top)/n.height*r,0,r)}}function ts(t,e=n=>n){return t===0?e("Ground Floor"):e("Floor")+" "+t}const KC=12,ZC=.3,JC=.22;function Rf(t,e,n,i,r,o){const s=r-n,a=o-i,l=s*s+a*a,u=l===0?0:ii(((t-n)*s+(e-i)*a)/l,0,1),c=n+u*s,f=i+u*a;return{dist:Math.hypot(t-c,e-f),t:u}}function QC(t,e,n,i,r,o,s){let a=null;if(t.forEach(g=>{if(g.points){for(let m=0;m<g.points.length;m++){const d=g.points[m],x=g.points[(m+1)%g.points.length],v=Math.hypot(x.x-d.x,x.y-d.y),{dist:_,t:C}=Rf(e,n,d.x,d.y,x.x,x.y),E=C*v;(!a||_<a.dist)&&(a={dist:_,roomId:g.id,edgeIndex:m,length:v,rawPosition:E})}return}[{wall:"top",x1:g.gx,y1:g.gy,x2:g.gx+g.gw,y2:g.gy,length:g.gw},{wall:"bottom",x1:g.gx,y1:g.gy+g.gh,x2:g.gx+g.gw,y2:g.gy+g.gh,length:g.gw},{wall:"left",x1:g.gx,y1:g.gy,x2:g.gx,y2:g.gy+g.gh,length:g.gh},{wall:"right",x1:g.gx+g.gw,y1:g.gy,x2:g.gx+g.gw,y2:g.gy+g.gh,length:g.gh}].forEach(m=>{const{dist:d,t:x}=Rf(e,n,m.x1,m.y1,m.x2,m.y2),v=x*m.length;(!a||d<a.dist)&&(a={dist:d,roomId:g.id,wall:m.wall,length:m.length,rawPosition:v})})}),!a||a.dist>ZC||a.length<i)return null;const l=i/2,u=ii(a.rawPosition,l,a.length-l),c=a.wall==null;return(t.find(g=>g.id===a.roomId).openings||[]).filter(g=>(c?g.edge_index===a.edgeIndex:g.wall===a.wall)&&g.id!==s).some(g=>{const y=g.kind==="door"?kt:hn;return u-l<g.position+y/2&&u+l>g.position-y/2})?null:c?{roomId:a.roomId,edgeIndex:a.edgeIndex,position:u}:{roomId:a.roomId,wall:a.wall,position:u}}function e2(t,e,n){let i=null;return t.forEach(r=>{(r.openings||[]).forEach(o=>{const s=o.kind==="door"?kt:hn,a=Ms(r,o,s),{dist:l}=Rf(e,n,a.x1,a.y1,a.x2,a.y2);(!i||l<i.dist)&&(i={dist:l,roomId:r.id,id:o.id,wall:o.wall,edgeIndex:o.edge_index,position:o.position,kind:o.kind})})}),!i||i.dist>JC?null:i}function Ms(t,e,n){const i=n/2;if(t.points){const a=e.edgeIndex??e.edge_index,l=t.points[a],u=t.points[(a+1)%t.points.length],c=Math.hypot(u.x-l.x,u.y-l.y)||1,f=(e.position-i)/c,h=(e.position+i)/c;return{x1:l.x+(u.x-l.x)*f,y1:l.y+(u.y-l.y)*f,x2:l.x+(u.x-l.x)*h,y2:l.y+(u.y-l.y)*h}}const{wall:r,position:o}=e;if(r==="top"||r==="bottom"){const a=r==="top"?t.gy:t.gy+t.gh;return{x1:t.gx+o-i,y1:a,x2:t.gx+o+i,y2:a}}const s=r==="left"?t.gx:t.gx+t.gw;return{x1:s,y1:t.gy+o-i,x2:s,y2:t.gy+o+i}}const rr=.35,Zt=.08;function dy(t,e,n){if(e.points)return;const{gx:i,gy:r,gw:o,gh:s}=e;t.save(),t.strokeStyle=n.line,t.fillStyle=n.text,t.lineWidth=1,t.font="10px 'IBM Plex Mono', monospace",t.textAlign="center";const a=(h,p,g,y)=>{t.beginPath(),t.moveTo(h*ne,p*ne),t.lineTo(g*ne,y*ne),t.stroke()},l=r-rr;a(i,r,i,l-Zt),a(i+o,r,i+o,l-Zt),a(i,l,i+o,l),t.fillText(o.toFixed(2),(i+o/2)*ne,(l-.06)*ne);const u=r+s+rr;a(i,r+s,i,u+Zt),a(i+o,r+s,i+o,u+Zt),a(i,u,i+o,u),t.fillText(o.toFixed(2),(i+o/2)*ne,(u+.16)*ne);const c=i-rr;a(i,r,c-Zt,r),a(i,r+s,c-Zt,r+s),a(c,r,c,r+s),t.save(),t.translate(c*ne-6,(r+s/2)*ne),t.rotate(-Math.PI/2),t.fillText(s.toFixed(2),0,0),t.restore();const f=i+o+rr;a(i+o,r,f+Zt,r),a(i+o,r+s,f+Zt,r+s),a(f,r,f,r+s),t.save(),t.translate(f*ne+6,(r+s/2)*ne),t.rotate(-Math.PI/2),t.fillText(s.toFixed(2),0,0),t.restore(),t.restore()}function fy(t){if(t.points&&t.points.length){const e=t.points.length;return{x:t.points.reduce((n,i)=>n+i.x,0)/e,y:t.points.reduce((n,i)=>n+i.y,0)/e}}return{x:t.gx+t.gw/2,y:t.gy+t.gh/2}}function hy(t,e,n,i){if(n.kind!=="door")return;const r=Ms(e,n,kt),o=r.x2-r.x1,s=r.y2-r.y1,a=Math.hypot(o,s);if(a<.01)return;const l={x:-s/a,y:o/a},u={x:s/a,y:-o/a},c=fy(e),f=(r.x1+r.x2)/2,h=(r.y1+r.y2)/2,p={x:c.x-f,y:c.y-h},g=l.x*p.x+l.y*p.y>=0?l:u,y=Math.atan2(s,o),m=Math.atan2(g.y,g.x);let d=m-y;for(;d>Math.PI;)d-=Math.PI*2;for(;d<=-Math.PI;)d+=Math.PI*2;const x=d<0,v=r.x1,_=r.y1;t.save(),t.strokeStyle=i,t.lineWidth=1,t.setLineDash([3,3]),t.beginPath(),t.arc(v*ne,_*ne,kt*ne,y,m,x),t.stroke(),t.setLineDash([]),t.beginPath(),t.moveTo(v*ne,_*ne),t.lineTo((v+kt*Math.cos(m))*ne,(_+kt*Math.sin(m))*ne),t.stroke(),t.restore()}function t2(t,e,n,i,r,o,s,a){t.save(),t.strokeStyle=a,t.lineWidth=1;const l=ii(s,2,16),u=o===90||o===270;for(let c=1;c<l;c++){if(t.beginPath(),u){const f=e+i*ne*c/l;t.moveTo(f,n),t.lineTo(f,n+r*ne)}else{const f=n+r*ne*c/l;t.moveTo(e,f),t.lineTo(e+i*ne,f)}t.stroke()}t.restore()}function n2(t,e){const n=oy[t];if(!n)return{w:.5,d:.5};const i=e===90||e===270;return{w:i?n.d:n.w,d:i?n.w:n.d}}function i2(t,e,n){let i=!1;for(let r=0,o=t.length-1;r<t.length;o=r++){const s=t[r].x,a=t[r].y,l=t[o].x,u=t[o].y;a>n!=u>n&&e<(l-s)*(n-a)/(u-a)+s&&(i=!i)}return i}const r2=.15;function Qu(t,e,n){const i=Oa(t,n,e+1);return i.get(e+1)-i.get(e)}function Fa(t,e,n){const{w:i,d:r}=Uh(t,n),o=e===90||e===270;return{w:o?r:i,d:o?i:r}}function o2(t,e,n,i,r){let o=null;return t.forEach(s=>{const a=Qu(e,s.floor??0,n),l=s.rotation||0,{w:u,d:c}=Fa(a,l,s.width),f=s.x-u/2,h=s.x+u/2,p=s.y-c/2,g=s.y+c/2,y=Math.max(f-i,0,i-h),m=Math.max(p-r,0,r-g),d=Math.hypot(y,m);(!o||d<o.dist)&&(o={dist:d,id:s.id,floor:s.floor??0,x:s.x,y:s.y,rotation:l,width:s.width})}),!o||o.dist>r2?null:o}function Fg(t,e,n,i,r,o,s){const{w:a,d:l}=Fa(r,o,s);if(t<a||e<l)return null;const u=a/2,c=l/2,f=ii(n,u,t-u),h=ii(i,c,e-c);return{x:f,y:h}}const bo=90;function s2(t,e,n,i){const r=i.t||(f=>f),o=n;t.strokeStyle="#1A1A1D",t.lineWidth=1.5,t.strokeRect(.5,o+.5,e-1,bo-1),t.beginPath(),t.moveTo(0,o+bo/2),t.lineTo(e,o+bo/2),t.stroke(),t.fillStyle="#1A1A1D",t.textAlign="start",t.font="700 14px Tajawal, sans-serif",t.fillText(i.projectName||r("Untitled Project"),10,o+20),t.font="11px 'IBM Plex Mono', monospace",t.fillStyle="#68686E";const s=i.standard==="eu"?"EU (DIN/EN)":"IRC (US)",a=new Date().toLocaleDateString();t.fillText(`${i.floorLabel||""}  ·  ${a}  ·  ${r("Standard")}: ${s}`,10,o+36),t.fillText("Lamsa Engineers",10,o+bo-12);const l=e-230,u=o+bo/2+22,c=5;for(let f=0;f<c;f++)t.fillStyle=f%2===0?"#1A1A1D":"#FFFFFF",t.fillRect(l+f*ne,u,ne,6);t.strokeStyle="#1A1A1D",t.lineWidth=1,t.strokeRect(l,u,c*ne,6),t.fillStyle="#1A1A1D",t.font="10px 'IBM Plex Mono', monospace",t.textAlign="center";for(let f=0;f<=c;f++)t.fillText(String(f),l+f*ne,u-4);t.fillText("m",l+c*ne+14,u+5),t.textAlign="start"}function a2(t,e,n,i={}){const r=document.createElement("canvas");r.width=e*ne,r.height=n*ne+bo;const o=r.getContext("2d");o.fillStyle="#FFFFFF",o.fillRect(0,0,r.width,r.height);for(let s=0;s<=e;s++)o.strokeStyle=s%5===0?"#C7C7CC":"#EDEDF0",o.lineWidth=s%5===0?1.2:1,o.beginPath(),o.moveTo(s*ne+.5,0),o.lineTo(s*ne+.5,n*ne),o.stroke();for(let s=0;s<=n;s++)o.strokeStyle=s%5===0?"#C7C7CC":"#EDEDF0",o.lineWidth=s%5===0?1.2:1,o.beginPath(),o.moveTo(0,s*ne+.5),o.lineTo(e*ne,s*ne+.5),o.stroke();return t.forEach(s=>{const a=s.gx*ne,l=s.gy*ne,u=s.gw*ne,c=s.gh*ne;s.points&&s.points.length>=3?(o.beginPath(),s.points.forEach((f,h)=>{h===0?o.moveTo(f.x*ne,f.y*ne):o.lineTo(f.x*ne,f.y*ne)}),o.closePath(),o.fillStyle=s.color+"25",o.fill(),o.strokeStyle=s.color,o.lineWidth=2,o.stroke(),o.fillStyle="#1A1A1D",o.font="700 13px Tajawal, sans-serif",o.fillText(s.name,a+8,l+20),o.fillStyle="#68686E",o.font="11px 'IBM Plex Mono', monospace",o.fillText(`${iy(s).toFixed(1)} m²`,a+8,l+36)):(o.fillStyle=s.color+"25",o.fillRect(a,l,u,c),o.strokeStyle=s.color,o.lineWidth=2,o.strokeRect(a,l,u,c),o.fillStyle="#1A1A1D",o.font="700 13px Tajawal, sans-serif",o.fillText(s.name,a+8,l+20),o.fillStyle="#68686E",o.font="11px 'IBM Plex Mono', monospace",o.fillText(`${s.gw.toFixed(1)} × ${s.gh.toFixed(1)} m`,a+8,l+36),dy(o,s,{line:"#B45309",text:"#92400E"})),(s.openings||[]).forEach(f=>{const h=f.kind==="door"?kt:hn,p=Ms(s,f,h);o.strokeStyle=f.kind==="door"?"#8B5A2B":"#0EA5E9",o.lineWidth=5,o.beginPath(),o.moveTo(p.x1*ne,p.y1*ne),o.lineTo(p.x2*ne,p.y2*ne),o.stroke(),hy(o,s,f,"#8B5A2B")}),(s.furniture||[]).forEach(f=>{var m;const{w:h,d:p}=n2(f.kind,f.rotation||0),g=(s.gx+f.x-h/2)*ne,y=(s.gy+f.y-p/2)*ne;o.fillStyle="#A9895C25",o.fillRect(g,y,h*ne,p*ne),o.strokeStyle="#A9895C",o.lineWidth=1.5,o.strokeRect(g,y,h*ne,p*ne),o.fillStyle="#1A1A1D",o.font="10px Tajawal, sans-serif",o.textAlign="center",o.fillText(((m=oy[f.kind])==null?void 0:m.label)||"",g+h*ne/2,y+p*ne/2+3),o.textAlign="start"})}),s2(o,r.width,n*ne,i),r.toDataURL("image/png")}function l2(t){const e=document.createElement("canvas"),n=e.getContext("2d"),i=40;n.font=`700 ${i}px Tajawal, sans-serif`;const r=n.measureText(t).width,o=22,s=14;e.width=Math.ceil(r+o*2),e.height=i+s*2,n.font=`700 ${i}px Tajawal, sans-serif`,n.fillStyle="rgba(17,20,26,0.72)";const a=14;n.beginPath(),n.moveTo(a,0),n.arcTo(e.width,0,e.width,e.height,a),n.arcTo(e.width,e.height,0,e.height,a),n.arcTo(0,e.height,0,0,a),n.arcTo(0,0,e.width,0,a),n.closePath(),n.fill(),n.fillStyle="#ffffff",n.textAlign="center",n.textBaseline="middle",n.fillText(t,e.width/2,e.height/2+2);const l=new Ph(e);l.needsUpdate=!0;const u=new X_({map:l,depthWrite:!1,transparent:!0}),c=new cR(u),f=.014;return c.scale.set(e.width*f,e.height*f,1),c}const md=.62,gd=Math.PI/4,u2=Ae.forwardRef(function({rooms:e,stairs:n,columns:i=[],wallHeight:r,wallColor:o,wallMaterial:s,autoRotate:a,dollhouse:l=!1,floorGap:u=0,renderView:c=!1,showFoundation:f=!0,t:h=g=>g},p){const g=Ae.useRef(null),y=Ae.useRef({}),m=Ae.useRef({autoRotate:a}),d=Ae.useRef({maxRadius:50}),x=Ae.useRef(l),v=Ae.useRef(new Map),[_,C]=Ae.useState(0);return Ae.useEffect(()=>{m.current.autoRotate=a},[a]),Ae.useImperativeHandle(p,()=>({captureImage(E="image/jpeg",T=.92){const P=y.current;return!P.renderer||!P.scene||!P.camera?null:(P.renderer.render(P.scene,P.camera),P.renderer.domElement.toDataURL(E,T))}}),[]),Ae.useEffect(()=>{const E=g.current,T=new lR;T.background=new Fe(15790322),T.fog=new bh(15790322,22,60);const P=new On(50,1,.1,200),M=new W_({antialias:!0});M.setPixelRatio(Math.min(window.devicePixelRatio,2)),M.shadowMap.enabled=!0,M.shadowMap.type=c_,E.appendChild(M.domElement),T.add(new XR(12572415,1711915,.95));const A=new YR(16773856,1);A.position.set(10,18,8),A.castShadow=!0,A.shadow.mapSize.set(2048,2048),A.shadow.bias=-.0015,T.add(A);const O=new kn(new Yu(300,300),new ps({color:13948120,roughness:1}));O.rotation.x=-Math.PI/2,O.position.y=-.03,O.receiveShadow=!0,T.add(O);const X=new qR(300,150,10592682,13948120);X.position.y=-.02,T.add(X);const Q=new Hr;T.add(Q);const D=Lg(e,r),H={theta:gd,phi:l?md:1,radius:D.radius,target:new k(0,D.targetY,0)};function j(){const{theta:I,phi:L,radius:G,target:F}=H;P.position.set(F.x+G*Math.sin(L)*Math.sin(I),F.y+G*Math.cos(L),F.z+G*Math.sin(L)*Math.cos(I)),P.lookAt(F)}let K=!1,U=0,B=0;const z=new Map;let Z=null;function ie(){const[I,L]=[...z.values()];return Math.hypot(I.x-L.x,I.y-L.y)}function $(I){z.set(I.pointerId,{x:I.clientX,y:I.clientY}),z.size===1?(K=!0,U=I.clientX,B=I.clientY):z.size===2&&(K=!1,Z=ie())}function ee(I){if(z.has(I.pointerId))z.set(I.pointerId,{x:I.clientX,y:I.clientY});else if(!K)return;if(z.size>=2){const F=ie();Z&&(H.radius=ii(H.radius*(Z/F),3,d.current.maxRadius),j()),Z=F;return}if(!K)return;const L=I.clientX-U,G=I.clientY-B;U=I.clientX,B=I.clientY,H.theta-=L*.006,H.phi=ii(H.phi-G*.006,.15,1.5),j()}function de(I){if(z.delete(I.pointerId),Z=null,z.size===1){const[[,L]]=z;K=!0,U=L.x,B=L.y}else z.size===0&&(K=!1)}function pe(I){I.preventDefault(),H.radius=ii(H.radius*(1+I.deltaY*.001),3,d.current.maxRadius),j()}const he=M.domElement;he.style.cursor="grab",he.style.touchAction="none",he.addEventListener("pointerdown",$),window.addEventListener("pointermove",ee),window.addEventListener("pointerup",de),window.addEventListener("pointercancel",de),he.addEventListener("wheel",pe,{passive:!1});function Ee(){const I=E.clientWidth,L=E.clientHeight;I===0||L===0||(M.setSize(I,L),P.aspect=I/L,P.updateProjectionMatrix())}Ee();const Re=new ResizeObserver(Ee);Re.observe(E),j();const _e={progress:0,playing:!0,meshes:[]};let oe;function S(){oe=requestAnimationFrame(S),m.current.autoRotate&&!K&&(H.theta+=.0028,j()),_e.playing&&(_e.progress=Math.min(1,_e.progress+.025),_e.meshes.forEach(({mesh:I,height:L,baseY:G,delay:F})=>{const fe=ii((_e.progress-F)/(1-F),0,1),se=1-Math.pow(1-fe,3);I.scale.y=Math.max(se,.001),I.position.y=G+L*se/2}),_e.progress>=1&&(_e.playing=!1)),M.render(T,P)}return S(),y.current={scene:T,group:Q,orbit:H,updateCamera:j,animState:_e,dirLight:A,renderer:M,camera:P,center:D,defaultRadius:D.radius,defaultTargetY:D.targetY},d.current.maxRadius=Math.max(50,D.radius*2),()=>{cancelAnimationFrame(oe),he.removeEventListener("pointerdown",$),window.removeEventListener("pointermove",ee),window.removeEventListener("pointerup",de),window.removeEventListener("pointercancel",de),he.removeEventListener("wheel",pe),Re.disconnect(),E.removeChild(M.domElement),M.dispose()}},[]),Ae.useEffect(()=>{const E=y.current;if(!E.group)return;const T=c?"brick":s;if(YC(E.group,e,n,r,o,E.center,E.animState,v.current,T,{hideRoofs:l,floorGap:u,columns:i,showFoundation:f}),c){const P=Oa(e,r,Math.max(0,...(n||[]).map(M=>(M.floor??0)+1)),u);e.forEach(M=>{if(!M.name)return;const A=M.wall_height??r,O=P.get(M.floor??0)??0,X=M.gx+M.gw/2-E.center.x,Q=M.gy+M.gh/2-E.center.z,D=l2(M.name);D.position.set(X,O+A*.55,Q),E.group.add(D)})}if(E.dirLight){const P=E.defaultRadius;E.dirLight.position.set(P*.6,Math.max(14,P*.9),P*.45);const M=E.dirLight.shadow.camera;M.left=-P,M.right=P,M.top=P,M.bottom=-P,M.near=1;const A=Math.max(r,...e.map(O=>O.wall_height??r));M.far=P*3+A*2,M.updateProjectionMatrix()}},[e,n,i,r,o,s,l,u,c,f]),Ae.useEffect(()=>{var P;const E=y.current;if(!E.orbit||!E.updateCamera)return;const T=Lg(e,r,u);E.defaultRadius=T.radius,E.defaultTargetY=T.targetY,E.orbit.target.y=T.targetY,E.orbit.radius=T.radius,d.current.maxRadius=Math.max(50,T.radius*2),(P=E.scene)!=null&&P.fog&&(E.scene.fog.far=Math.max(60,T.radius*2.6)),l!==x.current&&(x.current=l,l&&(E.orbit.phi=md,E.orbit.theta=gd)),E.updateCamera()},[l,u]),Ae.useEffect(()=>{if(_===0)return;const E=y.current;E.orbit&&(E.orbit.theta=gd,E.orbit.phi=l?md:1,E.orbit.radius=E.defaultRadius,E.orbit.target.y=E.defaultTargetY??E.orbit.target.y,E.updateCamera())},[_]),te.jsxs("div",{style:{position:"relative",width:"100%",height:"100%"},children:[te.jsx("div",{ref:g,style:{width:"100%",height:"100%"}}),te.jsx("button",{type:"button",onClick:()=>C(E=>E+1),style:{position:"absolute",bottom:12,right:12,fontSize:12,fontWeight:600,color:"#e2e8f0",background:"rgba(15,23,42,0.9)",border:"1px solid #334155",borderRadius:8,padding:"6px 12px",cursor:"pointer"},children:h("Reset camera")})]})}),Cf=[{id:"bedroom",label:"Bedroom",defaultW:3.5,defaultH:3.5,codeBased:!0,irc:{minW:2.13,minH:2.13,codeRef:"IRC R304.2"},eu:{minW:2,minH:2,codeRef:"EU practice (varies by country)"}},{id:"living_room",label:"Living Room",defaultW:4.5,defaultH:4,codeBased:!0,irc:{minW:2.13,minH:2.13,codeRef:"IRC R304.2"},eu:{minW:2,minH:2,codeRef:"EU practice (varies by country)"}},{id:"dining_room",label:"Dining Room",defaultW:3.5,defaultH:3.5,codeBased:!0,irc:{minW:2.13,minH:2.13,codeRef:"IRC R304.2"},eu:{minW:2,minH:2,codeRef:"EU practice (varies by country)"}},{id:"office",label:"Office",defaultW:3,defaultH:3,codeBased:!0,irc:{minW:2.13,minH:2.13,codeRef:"IRC R304.2"},eu:{minW:2,minH:2,codeRef:"EU practice (varies by country)"}},{id:"kitchen",label:"Kitchen",defaultW:3,defaultH:3,codeBased:!1,irc:{minW:1.5,minH:2},eu:{minW:1.5,minH:2}},{id:"bathroom",label:"Bathroom",defaultW:2,defaultH:2,codeBased:!1,irc:{minW:1.5,minH:1.5},eu:{minW:1.5,minH:1.5}},{id:"hallway",label:"Hallway",defaultW:1.2,defaultH:3,codeBased:!0,irc:{minW:.91,minH:1.2,codeRef:"IRC R311.6"},eu:{minW:1,minH:1.2,codeRef:"EU practice (varies by country)"}},{id:"closet",label:"Closet",defaultW:1,defaultH:1,codeBased:!1,irc:{minW:.6,minH:.6},eu:{minW:.6,minH:.6}},{id:"garage",label:"Garage",defaultW:3.5,defaultH:6,codeBased:!1,irc:{minW:3,minH:5.5},eu:{minW:3,minH:5.5}},{id:"other",label:"Other",defaultW:3,defaultH:3,codeBased:!1,irc:{minW:1.5,minH:1.5},eu:{minW:1.5,minH:1.5}}],c2="other",d2="irc";function Oh(t,e=d2){const n=Cf.find(r=>r.id===t)||Cf.find(r=>r.id===c2),i=n[e]||n.irc;return{...n,minW:i.minW,minH:i.minH,codeRef:i.codeRef}}const zg=24,kg=1.5,Bg=["#cfd6cf","#d8cfc2","#c9d3df","#dccfd6","#cfd8d3"];function f2({rooms:t,stairs:e,columns:n=[],showFoundation:i=!0,standard:r="irc",wallHeight:o,gridW:s=20,gridH:a=16,mode:l,activeFloor:u=0,selectedRoomId:c,selectedOpening:f,selectedStairId:h,selectedColumnId:p,onAddRoom:g,onAddPolygonRoom:y,onMoveRoom:m,onResizeRoom:d,onMovePolygonRoom:x,onSelectRoom:v,onAddOpening:_,onSelectOpening:C,onAddStair:E,onMoveStair:T,onSelectStair:P,onAddColumn:M,onMoveColumn:A,onSelectColumn:O}){const X=Ae.useRef(null),Q=Ae.useRef(null),[D,H]=Ae.useState(null),[j,K]=Ae.useState(null),U=t.filter(oe=>(oe.floor??0)===u),B=e.filter(oe=>(oe.floor??0)===u),z=n.filter(oe=>(oe.floor??0)===u),Z=Qu(t,u,o);Ae.useEffect(()=>{l!=="polygon"&&D&&(D.length>=3&&y(D),H(null))},[l]),Ae.useEffect(()=>{function oe(S){S.key==="Escape"&&D&&H(null)}return window.addEventListener("keydown",oe),()=>window.removeEventListener("keydown",oe)},[D]);function ie(oe,S,I,L){S.points?(oe.beginPath(),S.points.forEach((G,F)=>{F===0?oe.moveTo(G.x*ne,G.y*ne):oe.lineTo(G.x*ne,G.y*ne)}),oe.closePath(),oe.fillStyle=L,oe.fill(),oe.strokeStyle=I?"#c9a96e":"#4b5563",oe.lineWidth=Math.max(2,ht*ne),oe.stroke()):(oe.fillStyle=L,oe.fillRect(S.gx*ne,S.gy*ne,S.gw*ne,S.gh*ne),oe.strokeStyle=I?"#c9a96e":"#4b5563",oe.lineWidth=Math.max(2,ht*ne),oe.strokeRect(S.gx*ne,S.gy*ne,S.gw*ne,S.gh*ne))}function $(){const oe=X.current;if(!oe)return;const S=oe.getContext("2d");S.clearRect(0,0,oe.width,oe.height),S.strokeStyle="#e5e7eb",S.lineWidth=1;for(let L=0;L<=s;L++)S.beginPath(),S.moveTo(L*ne,0),S.lineTo(L*ne,a*ne),S.stroke();for(let L=0;L<=a;L++)S.beginPath(),S.moveTo(0,L*ne),S.lineTo(s*ne,L*ne),S.stroke();if(i&&u===0){const L=Ju(t,0);L&&(S.save(),S.strokeStyle="#9ca3af",S.lineWidth=1.5,S.setLineDash([6,4]),S.strokeRect((L.minX-st)*ne,(L.minY-st)*ne,(L.maxX-L.minX+st*2)*ne,(L.maxY-L.minY+st*2)*ne),S.restore())}if(U.forEach((L,G)=>{const F=L.id===c;ie(S,L,F,L.color||Bg[G%Bg.length]);const fe=L.points?L.points.reduce((R,w)=>R+w.x,0)/L.points.length:L.gx+L.gw/2,se=L.points?L.points.reduce((R,w)=>R+w.y,0)/L.points.length:L.gy+L.gh/2;if(S.fillStyle="#1b1e22",S.font="13px sans-serif",S.textAlign="center",S.fillText(L.name,fe*ne,se*ne),dy(S,L,{line:"#9ca3af",text:"#6b7280"}),(L.openings||[]).forEach(R=>{const w=R.kind==="door"?kt:hn,V=Ms(L,R,w),re=f&&f.roomId===L.id&&f.openingId===R.id;S.save(),S.strokeStyle=re?"#c9a96e":R.kind==="door"?"#8b5e34":"#3b82f6",S.lineWidth=Math.max(3,ht*ne+2),S.beginPath(),S.moveTo(V.x1*ne,V.y1*ne),S.lineTo(V.x2*ne,V.y2*ne),S.stroke(),S.restore(),R.kind==="door"&&hy(S,L,R,re?"#c9a96e":"#8b5e34")}),F&&!L.points){S.fillStyle="#c9a96e";const R=(L.gx+L.gw)*ne,w=(L.gy+L.gh)*ne;S.fillRect(R-6,w-6,12,12)}}),B.forEach(L=>{const G=L.rotation||0,{w:F,d:fe}=Fa(Z,G,L.width),se=L.id===h,R=(L.x-F/2)*ne,w=(L.y-fe/2)*ne;S.strokeStyle=se?"#c9a96e":"#6b5e3a",S.lineWidth=2,S.strokeRect(R,w,F*ne,fe*ne),t2(S,R,w,F,fe,G,Uh(Z).numSteps,se?"#c9a96e":"#6b5e3a")}),i&&u===0&&z.forEach(L=>{const F=((L.size??ei)+st*2)/2;S.save(),S.strokeStyle="#9ca3af",S.lineWidth=1.5,S.setLineDash([6,4]),S.strokeRect((L.x-F)*ne,(L.y-F)*ne,F*2*ne,F*2*ne),S.restore()}),z.forEach(L=>{const G=L.id===p,F=ei/2;S.fillStyle=G?"#c9a96e":"#6b7280",S.fillRect((L.x-F)*ne,(L.y-F)*ne,ei*ne,ei*ne),S.strokeStyle="#374151",S.lineWidth=1,S.strokeRect((L.x-F)*ne,(L.y-F)*ne,ei*ne,ei*ne)}),D&&D.length){const L=D.length>=3;S.strokeStyle="#c9a96e",S.lineWidth=2,S.beginPath(),D.forEach((G,F)=>{F===0?S.moveTo(G.x*ne,G.y*ne):S.lineTo(G.x*ne,G.y*ne)}),j&&S.lineTo(j.x*ne,j.y*ne),S.stroke(),S.fillStyle="#c9a96e",D.forEach((G,F)=>{S.beginPath(),S.arc(G.x*ne,G.y*ne,F===0&&L?8:4,0,Math.PI*2),S.fill(),F===0&&L&&(S.strokeStyle="#1b1e22",S.lineWidth=1.5,S.stroke())})}const I=Q.current;if(I&&I.kind==="new-room"){const L=Math.min(I.startX,I.curX),G=Math.min(I.startY,I.curY),F=Math.abs(I.curX-I.startX),fe=Math.abs(I.curY-I.startY);S.strokeStyle="#c9a96e",S.setLineDash([6,4]),S.lineWidth=2,S.strokeRect(L*ne,G*ne,F*ne,fe*ne),S.setLineDash([])}}Ae.useEffect($);function ee(oe){const S=X.current.getBoundingClientRect();return qC(oe.clientX,oe.clientY,S,s,a)}function de(){const oe=X.current&&X.current.getBoundingClientRect();return!oe||!oe.width?zg/ne:zg/(oe.width/s)}function pe(oe,S){return U.find(I=>I.points?i2(I.points,oe,S):oe>=I.gx&&oe<=I.gx+I.gw&&S>=I.gy&&S<=I.gy+I.gh)}function he(oe){const{x:S,y:I}=ee(oe);if(l==="room"){Q.current={kind:"new-room",startX:dt(S),startY:dt(I),curX:S,curY:I},$();return}if(l==="polygon"){const re={x:dt(S),y:dt(I)};if(D&&D.length>=3){const ae=D[0];if(Math.hypot(re.x-ae.x,re.y-ae.y)<=de()){y(D),H(null);return}}H(ae=>ae?[...ae,re]:[re]);return}if(l==="door"||l==="window"){const ae=QC(U,S,I,l==="door"?kt:hn);ae&&_(ae.roomId,l,ae.wall,ae.edgeIndex,ae.position);return}if(l==="stairs"){const re=Fg(s,a,dt(S),dt(I),Z,0);re&&E({floor:u,x:re.x,y:re.y,rotation:0});return}if(l==="column"){M({floor:u,x:dt(S),y:dt(I)});return}const L=e2(U,S,I);if(L){C({roomId:L.roomId,openingId:L.id}),P(null),O(null);return}C(null);const G=o2(B,t,o,S,I);if(G){P(G.id),O(null),v(null),Q.current={kind:"move-stair",stairId:G.id,offsetX:S-G.x,offsetY:I-G.y,rotation:G.rotation,width:G.width};return}P(null);const F=de(),fe=z.find(re=>Math.hypot(S-re.x,I-re.y)<=F);if(fe){O(fe.id),v(null),Q.current={kind:"move-column",columnId:fe.id,offsetX:S-fe.x,offsetY:I-fe.y};return}O(null);const se=pe(S,I);if(!se){v(null);return}if(v(se.id),se.points){Q.current={kind:"move-polygon",roomId:se.id,startPoints:se.points,offsetX:S,offsetY:I};return}const R=se.gx+se.gw,w=se.gy+se.gh,V=Math.abs(S-R)<.25&&Math.abs(I-w)<.25;Q.current=V?{kind:"resize",roomId:se.id,startGx:se.gx,startGy:se.gy}:{kind:"move",roomId:se.id,offsetX:S-se.gx,offsetY:I-se.gy}}function Ee(oe){if(l==="polygon"&&D){const{x:G,y:F}=ee(oe);K({x:dt(G),y:dt(F)});return}const S=Q.current;if(!S)return;const{x:I,y:L}=ee(oe);if(S.kind==="new-room"){S.curX=I,S.curY=L,$();return}if(S.kind==="move"){const G=t.find(se=>se.id===S.roomId);if(!G)return;const F=dt(Math.max(0,Math.min(s-G.gw,I-S.offsetX))),fe=dt(Math.max(0,Math.min(a-G.gh,L-S.offsetY)));m(S.roomId,F,fe);return}if(S.kind==="move-polygon"){const G=dt(I-S.offsetX),F=dt(L-S.offsetY);if(G===0&&F===0)return;const fe=S.startPoints.map(se=>({x:se.x+G,y:se.y+F}));x(S.roomId,fe);return}if(S.kind==="resize"){const G=t.find(R=>R.id===S.roomId),F=Oh(G&&G.room_type,r),fe=dt(Math.max(F.minW,I-S.startGx)),se=dt(Math.max(F.minH,L-S.startGy));d(S.roomId,fe,se);return}if(S.kind==="move-stair"){const G=Fg(s,a,dt(I-S.offsetX),dt(L-S.offsetY),Z,S.rotation,S.width);G&&T(S.stairId,G.x,G.y,S.rotation);return}if(S.kind==="move-column"){const G=dt(Math.max(0,Math.min(s,I-S.offsetX))),F=dt(Math.max(0,Math.min(a,L-S.offsetY)));A(S.columnId,G,F)}}function Re(){l==="polygon"&&D&&D.length>=3&&(y(D),H(null))}function _e(){const oe=Q.current;if(oe&&oe.kind==="new-room"){const S=dt(Math.min(oe.startX,oe.curX)),I=dt(Math.min(oe.startY,oe.curY)),L=Math.max(kg,dt(Math.abs(oe.curX-oe.startX))),G=Math.max(kg,dt(Math.abs(oe.curY-oe.startY)));g({gx:S,gy:I,gw:L,gh:G,floor:u})}Q.current=null,$()}return te.jsx("canvas",{ref:X,width:s*ne,height:a*ne,style:{background:"#fff",touchAction:"none",cursor:l==="select"?"default":"crosshair",maxWidth:"100%",height:"auto",display:"block"},onPointerDown:he,onPointerMove:Ee,onPointerUp:_e,onPointerLeave:_e,onDoubleClick:Re})}function vd({entityId:t,value:e,min:n,step:i=.1,onCommit:r,style:o}){const[s,a]=Ae.useState(()=>String(e)),l=Ae.useRef(e),u=Ae.useRef(t);Ae.useEffect(()=>{const h=t!==u.current,p=e!==l.current;(h||p)&&(a(String(e)),l.current=e,u.current=t)},[t,e]);function c(h){const p=h.target.value;a(p);const g=parseFloat(p);if(!Number.isFinite(g))return;const y=Math.max(g,n);l.current=y,y!==e&&r(y)}function f(){const h=parseFloat(s),p=Number.isFinite(h)?Math.max(h,n):e;a(String(p)),l.current=p,p!==e&&r(p)}return te.jsx("input",{type:"number",step:i,min:n,value:s,onChange:c,onBlur:f,style:o})}const h2=[{id:"select",label:"Select"},{id:"room",label:"Add Room"},{id:"polygon",label:"Add Polygon Room"},{id:"door",label:"Add Door"},{id:"window",label:"Add Window"},{id:"stairs",label:"Add Stairs"},{id:"column",label:"Add Column"}],br=t=>({padding:"8px 14px",borderRadius:8,border:t?"2px solid #c9a96e":"1px solid #d1d5db",background:t?"#fdf6ea":"#fff",fontWeight:600,fontSize:13,cursor:"pointer"});function p2({t,mode:e,standard:n="irc",onModeChange:i,selectedRoom:r,onRenameRoom:o,onChangeRoomType:s,onResizeRoomInputs:a,onDeleteRoom:l,selectedOpening:u,onDeleteOpening:c,floorCount:f=1,activeFloor:h=0,onSetActiveFloor:p,onAddFloor:g,selectedStair:y,onResizeStairWidth:m,onDeleteStair:d,selectedColumn:x,onDeleteColumn:v}){return te.jsxs("div",{style:{display:"flex",flexDirection:"column",borderBottom:"1px solid #e5e7eb"},children:[te.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:6,alignItems:"center",padding:"8px 14px",borderBottom:"1px solid #f3f4f6"},children:[Array.from({length:f},(_,C)=>C).map(_=>te.jsx("button",{type:"button",style:br(_===h),onClick:()=>p&&p(_),title:ts(_,t),children:ts(_,t)},_)),f<KC&&te.jsxs("button",{type:"button",style:br(!1),onClick:()=>g&&g(),children:["+ ",t("Add Floor")]})]}),te.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:10,alignItems:"center",padding:"10px 14px"},children:[h2.map(_=>te.jsx("button",{type:"button",style:br(e===_.id),onClick:()=>i(_.id),children:t(_.label)},_.id)),e==="polygon"&&te.jsx("span",{style:{fontSize:12,color:"#6b7280"},children:t("Tap to place each corner, then double-tap (or tap the first corner again) to finish")}),r&&(()=>{const _=Oh(r.room_type,n);return te.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8,alignItems:"center",marginInlineStart:12},children:[te.jsx("select",{value:_.id,onChange:C=>s(r.id,C.target.value),style:{padding:"6px 8px",borderRadius:6,border:"1px solid #d1d5db",fontSize:13},children:Cf.map(C=>te.jsx("option",{value:C.id,children:t(C.label)},C.id))}),te.jsx("input",{value:r.name,onChange:C=>o(r.id,C.target.value),style:{padding:"6px 10px",borderRadius:6,border:"1px solid #d1d5db",fontSize:13,width:140}}),!r.points&&te.jsxs(te.Fragment,{children:[te.jsxs("label",{style:{fontSize:12,color:"#6b7280"},children:[t("W"),te.jsx(vd,{entityId:r.id,value:r.gw,min:_.minW,onCommit:C=>a(r.id,C,r.gh),style:{width:60,marginInlineStart:4,padding:"4px 6px",borderRadius:6,border:"1px solid #d1d5db"}})]}),te.jsxs("label",{style:{fontSize:12,color:"#6b7280"},children:[t("H"),te.jsx(vd,{entityId:r.id,value:r.gh,min:_.minH,onCommit:C=>a(r.id,r.gw,C),style:{width:60,marginInlineStart:4,padding:"4px 6px",borderRadius:6,border:"1px solid #d1d5db"}})]}),te.jsxs("span",{style:{fontSize:11,color:"#9ca3af"},children:[t("Min")," ",_.minW,"×",_.minH," m",_.codeBased?" ("+_.codeRef+")":""]})]}),te.jsx("button",{type:"button",style:br(!1),onClick:()=>l(r.id),children:t("Delete Room")})]})})(),u&&te.jsx("button",{type:"button",style:br(!1),onClick:()=>c(u.roomId,u.openingId),children:t("Delete Opening")}),y&&(()=>{const _=BC(n);return te.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",marginInlineStart:12},children:[te.jsxs("label",{style:{fontSize:12,color:"#6b7280"},children:[t("Width"),te.jsx(vd,{entityId:y.id,value:y.width??Nh,min:_,step:.05,onCommit:C=>m(y.id,C),style:{width:60,marginInlineStart:4,padding:"4px 6px",borderRadius:6,border:"1px solid #d1d5db"}})]}),te.jsxs("span",{style:{fontSize:11,color:"#9ca3af"},children:[t("Min")," ",_," m (",HC(n),")"]}),te.jsx("button",{type:"button",style:br(!1),onClick:()=>d(y.id),children:t("Delete Stairs")})]})})(),x&&te.jsx("button",{type:"button",style:br(!1),onClick:()=>v(x.id),children:t("Delete Column")})]})]})}const m2=3e3,g2=2*60*1e3,v2=`Transform this 3D render of an architectural floor plan into a professional, photorealistic architectural visualization of the exact same building.

CRITICAL — do not change anything structural: keep the exact same room layout, wall positions, door and window placement, staircases, columns, number of floors, and camera angle. Do not add, remove, move, or resize any structural element.

Only improve: make every material look real and tactile (genuine paint, wood, stone, brick, metal and glass), add realistic, professional architectural-visualization lighting with soft natural shadows, and photorealistic rendering quality, like a real estate marketing render.`,_2="This photo already shows a photorealistic architectural visualization. Your ONLY task is to further enhance photorealism, material detail, and lighting quality. Do NOT change the building layout, camera angle, or structural elements in any way — this is a quality-enhancement pass only.";function ns(t,e){return fetch(t,e).then(n=>n.json().then(i=>({ok:n.ok,status:n.status,data:i})))}function y2(t){return t?Array.isArray(t.images)&&t.images.length?t.images:t.image&&t.image.url?[t.image]:t.output&&Array.isArray(t.output.images)&&t.output.images.length?t.output.images:t.response&&Array.isArray(t.response.images)&&t.response.images.length?t.response.images:t.data&&Array.isArray(t.data.images)&&t.data.images.length?t.data.images:null:null}function py(t,e,n){return new Promise((i,r)=>{function o(){if(Date.now()-n>=g2){r(new Error("timeout"));return}ns("/api/status?request_id="+encodeURIComponent(t)+"&model="+encodeURIComponent(e)).then(s=>{if(!s.ok){r(new Error("status_error"));return}const a=(s.data.status||"").toString().toUpperCase();a==="COMPLETED"?ns("/api/status?request_id="+encodeURIComponent(t)+"&model="+encodeURIComponent(e)+"&mode=result&tool=engineers").then(l=>{if(!l.ok){r(new Error("result_error"));return}const u=y2(l.data);i(u&&u.length?u[0]:null)}).catch(()=>r(new Error("connection_error"))):a==="FAILED"||a==="ERROR"?r(new Error("failed")):setTimeout(o,m2)}).catch(()=>r(new Error("connection_error")))}o()})}function x2(t,e){return e?ns("/api/generate",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({prompt:_2,image_url:t.url,refine_token:e})}).then(n=>{if(!n.ok||!n.data||!Array.isArray(n.data.requests)||!n.data.requests.length)return t;const i=n.data.requests[0];return py(i.request_id,i.model,Date.now()).then(r=>r||t).catch(()=>t)}).catch(()=>t):Promise.resolve(t)}const Il={position:"fixed",inset:0,background:"rgba(0,0,0,0.9)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",padding:20,overflowY:"auto"},Nl={position:"relative",background:"#fff",borderRadius:20,padding:"28px 22px",maxWidth:420,width:"100%",textAlign:"center",boxShadow:"0 30px 70px -25px rgba(0,0,0,0.5)"};function S2({captureImage:t,onClose:e,t:n}){const[i,r]=Ae.useState("loading"),[o,s]=Ae.useState(null),[a,l]=Ae.useState(""),[u,c]=Ae.useState(null);Ae.useEffect(()=>{let p=!1;async function g(){const y=t&&t();if(!y){p||(r("error"),l(n("Something went wrong, please try again")));return}try{const m=await ns("/api/upload",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({image_data:y,mime_type:"image/jpeg"})});if(p)return;if(!m.ok||!m.data||!m.data.url){r("error"),l(n("Image upload failed. Please try again."));return}const d=await ns("/api/generate",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({prompt:v2,image_url:m.data.url,num_images:1,guidance_scale:6.5,strength:.45})});if(p)return;if(d.status===401){window.location.href="/lamsa-auth.html?return=engineers/index.html";return}if(d.status===402){r("no_credits");return}if(!d.ok||!d.data||!Array.isArray(d.data.requests)||!d.data.requests.length){r("error"),l(n("Error generating image. Please try again."));return}const x=d.data.requests[0],v=d.data.refineToken,_=await py(x.request_id,x.model,Date.now());if(p)return;if(!_){r("error"),l(n("Error generating image. Please try again."));return}const C=await x2(_,v);if(p)return;s(C.url),r("result")}catch{if(p)return;r("error"),l(n("Connection error. Please try again."))}}return g(),()=>{p=!0}},[]);function f(){o&&fetch("/api/download-image?url="+encodeURIComponent(o)+"&filename="+encodeURIComponent("lamsa-engineers-render.jpg")).then(p=>p.blob()).then(p=>{const g=URL.createObjectURL(p),y=document.createElement("a");y.href=g,y.download="lamsa-engineers-render.jpg",y.click(),setTimeout(()=>URL.revokeObjectURL(g),5e3)}).catch(()=>window.open(o,"_blank"))}function h(p){c(p),ns("/api/create-checkout-session",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({plan:p,return_page:"engineers/index.html"})}).then(g=>{if(g.status===401){window.location.href="/lamsa-auth.html?return=engineers/index.html";return}if(!g.ok||!g.data||!g.data.url){c(null);return}window.location.href=g.data.url}).catch(()=>c(null))}return i==="loading"?te.jsx("div",{style:Il,children:te.jsxs("div",{style:Nl,children:[te.jsx("div",{style:{width:48,height:48,margin:"0 auto 18px",border:"4px solid #eef0f2",borderTopColor:"#c9a96e",borderRadius:"50%",animation:"lamsa-pr-spin 0.9s linear infinite"}}),te.jsx("style",{children:"@keyframes lamsa-pr-spin { to { transform: rotate(360deg); } }"}),te.jsx("div",{style:{fontSize:16,fontWeight:900,color:"#1b1e22",marginBottom:6},children:n("Turning your design into a photoreal render...")}),te.jsx("div",{style:{fontSize:12.5,color:"#767d86"},children:n("Takes 20-40 seconds")})]})}):i==="error"?te.jsx("div",{style:Il,children:te.jsxs("div",{style:Nl,children:[te.jsx("div",{style:{color:"#e05555",fontSize:14,fontWeight:700,marginBottom:18},children:a}),te.jsx("button",{type:"button",onClick:e,style:{width:"100%",background:"transparent",border:"1px solid #dfe2e6",color:"#767d86",padding:10,borderRadius:10,fontSize:13,cursor:"pointer"},children:n("Close")})]})}):i==="no_credits"?te.jsx("div",{style:Il,children:te.jsxs("div",{style:{...Nl,maxWidth:440},children:[te.jsx("div",{style:{fontSize:17,fontWeight:900,color:"#1b1e22",marginBottom:8},children:n("You're out of credits")}),te.jsx("div",{style:{fontSize:13,color:"#6b7280",marginBottom:20},children:n("Subscribe to generate photoreal renders of your floor plans.")}),te.jsxs("div",{style:{display:"flex",gap:10,marginBottom:14},children:[te.jsxs("button",{type:"button",disabled:!!u,onClick:()=>h("weekly"),style:{flex:1,border:"1px solid #dfe2e6",borderRadius:14,padding:"14px 8px",background:"#fff",cursor:"pointer",opacity:u?.6:1},children:[te.jsx("div",{style:{fontSize:13,fontWeight:900,color:"#1b1e22"},children:n("Weekly")}),te.jsxs("div",{style:{fontSize:11,color:"#767d86",marginBottom:6},children:["10 ",n("credits")]}),te.jsx("div",{style:{fontSize:15,fontWeight:900,color:"#1b1e22"},children:"€5.99"})]}),te.jsxs("button",{type:"button",disabled:!!u,onClick:()=>h("monthly"),style:{flex:1,border:"2px solid #c9a96e",borderRadius:14,padding:"14px 8px",background:"#fdf6ea",cursor:"pointer",opacity:u?.6:1},children:[te.jsx("div",{style:{fontSize:13,fontWeight:900,color:"#1b1e22"},children:n("Monthly")}),te.jsxs("div",{style:{fontSize:11,color:"#767d86",marginBottom:6},children:["40 ",n("credits")]}),te.jsx("div",{style:{fontSize:15,fontWeight:900,color:"#1b1e22"},children:"€14.99"})]})]}),te.jsx("button",{type:"button",onClick:e,style:{width:"100%",background:"transparent",border:"none",color:"#767d86",padding:8,fontSize:13,cursor:"pointer"},children:n("Close")})]})}):te.jsx("div",{style:Il,children:te.jsxs("div",{style:{...Nl,maxWidth:460,textAlign:"start"},children:[te.jsx("img",{src:o,alt:"",style:{width:"100%",borderRadius:12,display:"block",marginBottom:14}}),te.jsxs("div",{style:{display:"flex",gap:10},children:[te.jsx("button",{type:"button",onClick:f,style:{flex:1,background:"#c9a96e",color:"#1b1e22",border:"none",padding:14,borderRadius:10,fontWeight:900,fontSize:14,cursor:"pointer"},children:n("Download")}),te.jsx("button",{type:"button",onClick:e,style:{flex:1,background:"transparent",border:"1px solid #dfe2e6",color:"#767d86",padding:14,borderRadius:10,fontSize:14,cursor:"pointer"},children:n("Close")})]})]})})}let Hg=0;function ws(t){return Hg+=1,t+"_"+Date.now().toString(36)+"_"+Hg}const E2=2.7,M2="#e8e2d8",w2="plaster";function my(t){return{project:{id:null,name:t||"Untitled Project",wall_height:E2,wall_color:M2,wall_material:w2},rooms:[],stairs:[],columns:[]}}function T2({name:t,gx:e,gy:n,gw:i,gh:r,color:o,floor:s=0,room_type:a="other"}){return{id:ws("room"),name:t||"Room",room_type:a,gx:e,gy:n,gw:i,gh:r,color:o||"#cfd6cf",floor:s,has_roof:!0,roof_type:"flat",openings:[],furniture:[]}}function A2({name:t,points:e,color:n,floor:i=0,room_type:r="other"}){const o=e.map(f=>f.x),s=e.map(f=>f.y),a=Math.min(...o),l=Math.min(...s),u=Math.max(...o)-a,c=Math.max(...s)-l;return{id:ws("room"),name:t||"Room",room_type:r,points:e,gx:a,gy:l,gw:u,gh:c,color:n||"#cfd6cf",floor:i,has_roof:!0,roof_type:"flat",openings:[],furniture:[]}}function R2({floor:t=0,x:e,y:n,rotation:i=0}){return{id:ws("stair"),floor:t,x:e,y:n,rotation:i}}function C2({floor:t=0,x:e,y:n}){return{id:ws("column"),floor:t,x:e,y:n}}function b2(t,e,n,i){const r={id:ws(t),kind:t,position:i};return n!=null?r.edge_index=n:r.wall=e,r}function P2(t,e){switch(e.type){case"SET_PROJECT":return e.project;case"SET_META":return{...t,project:{...t.project,...e.patch}};case"ADD_ROOM":return{...t,rooms:[...t.rooms,e.room]};case"UPDATE_ROOM":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,...e.patch}:n)};case"REMOVE_ROOM":return{...t,rooms:t.rooms.filter(n=>n.id!==e.roomId)};case"ADD_OPENING":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,openings:[...n.openings,b2(e.kind,e.wall,e.edgeIndex,e.position)]}:n)};case"MOVE_OPENING":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,openings:n.openings.map(i=>i.id===e.openingId?{...i,wall:e.wall,position:e.position}:i)}:n)};case"REMOVE_OPENING":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,openings:n.openings.filter(i=>i.id!==e.openingId)}:n)};case"ADD_FURNITURE":{const n={id:ws("furn"),kind:e.kind,x:e.x,y:e.y,rotation:0};return{...t,rooms:t.rooms.map(i=>i.id===e.roomId?{...i,furniture:[...i.furniture,n]}:i)}}case"MOVE_FURNITURE":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,furniture:n.furniture.map(i=>i.id===e.furnitureId?{...i,x:e.x,y:e.y,rotation:e.rotation??i.rotation}:i)}:n)};case"REMOVE_FURNITURE":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,furniture:n.furniture.filter(i=>i.id!==e.furnitureId)}:n)};case"ADD_STAIR":return{...t,stairs:[...t.stairs,e.stair]};case"MOVE_STAIR":return{...t,stairs:t.stairs.map(n=>n.id===e.stairId?{...n,x:e.x,y:e.y,rotation:e.rotation??n.rotation}:n)};case"UPDATE_STAIR":return{...t,stairs:t.stairs.map(n=>n.id===e.stairId?{...n,...e.patch}:n)};case"REMOVE_STAIR":return{...t,stairs:t.stairs.filter(n=>n.id!==e.stairId)};case"ADD_COLUMN":return{...t,columns:[...t.columns||[],e.column]};case"MOVE_COLUMN":return{...t,columns:(t.columns||[]).map(n=>n.id===e.columnId?{...n,x:e.x,y:e.y}:n)};case"REMOVE_COLUMN":return{...t,columns:(t.columns||[]).filter(n=>n.id!==e.columnId)};default:return t}}function L2(t){const[e,n]=Ae.useReducer(P2,t||my()),i=Ae.useMemo(()=>({setProject:s=>n({type:"SET_PROJECT",project:s}),setMeta:s=>n({type:"SET_META",patch:s}),addRoom:s=>n({type:"ADD_ROOM",room:s}),updateRoom:(s,a)=>n({type:"UPDATE_ROOM",roomId:s,patch:a}),removeRoom:s=>n({type:"REMOVE_ROOM",roomId:s}),addOpening:(s,a,l,u,c)=>n({type:"ADD_OPENING",roomId:s,kind:a,wall:l,edgeIndex:u,position:c}),moveOpening:(s,a,l,u)=>n({type:"MOVE_OPENING",roomId:s,openingId:a,wall:l,position:u}),removeOpening:(s,a)=>n({type:"REMOVE_OPENING",roomId:s,openingId:a}),addFurniture:(s,a,l,u)=>n({type:"ADD_FURNITURE",roomId:s,kind:a,x:l,y:u}),moveFurniture:(s,a,l,u,c)=>n({type:"MOVE_FURNITURE",roomId:s,furnitureId:a,x:l,y:u,rotation:c}),removeFurniture:(s,a)=>n({type:"REMOVE_FURNITURE",roomId:s,furnitureId:a}),addStair:s=>n({type:"ADD_STAIR",stair:s}),moveStair:(s,a,l,u)=>n({type:"MOVE_STAIR",stairId:s,x:a,y:l,rotation:u}),updateStair:(s,a)=>n({type:"UPDATE_STAIR",stairId:s,patch:a}),removeStair:s=>n({type:"REMOVE_STAIR",stairId:s}),addColumn:s=>n({type:"ADD_COLUMN",column:s}),moveColumn:(s,a,l)=>n({type:"MOVE_COLUMN",columnId:s,x:a,y:l}),removeColumn:s=>n({type:"REMOVE_COLUMN",columnId:s})}),[]),r=Ae.useCallback(s=>{const a=T2(s);return i.addRoom(a),a},[i]),o=Ae.useCallback(s=>{const a=A2(s);return i.addRoom(a),a},[i]);return{project:e.project,rooms:e.rooms,stairs:e.stairs,columns:e.columns||[],actions:{...i,addRectRoom:r,addPolygonRoom:o}}}function D2(t,e,n,i){return a2(t,e,n,i)}const Gg={"A-WALL":7,"A-DOOR":1,"A-GLAZ":5,"A-ANNO-DIMS":3,"A-ANNO-TEXT":7,"A-STAIR":8,"A-COLS":2,"S-FNDN":4,"A-ANNO-TTLB":6};function Vg(t){let e=t*180/Math.PI;return e=e%360,e<0&&(e+=360),e}function tt(t,e){return{x:t.x+e,y:-t.y}}function yr(t,e,n,i){t.push(`0
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
0.0`)}function gs(t,e,n,i){const r=["0","LWPOLYLINE","8",e,"90",String(n.length),"70","1"];n.forEach(o=>{r.push("10",String(o.x),"20",String(o.y))}),t.push(r.join(`
`))}function I2(t,e,n,i,r,o,s){t.push(`0
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
${s}`)}function mi(t,e,n,i,r,o=0){const s=String(r).replace(/[\r\n]+/g," ");t.push(`0
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
${o}`)}function N2(t,e){const n=t.slice().sort((o,s)=>o.position-s.position);let i=0;const r=[];return n.forEach(o=>{const s=o.position-o.width/2,a=o.position+o.width/2;s>i+.02&&r.push([i,s]),i=Math.max(i,a)}),i<e-.02&&r.push([i,e]),r}function Wg(t,e,n,i,r){const o=n.x-e.x,s=n.y-e.y,a=Math.hypot(o,s);if(a<.02)return;const l=o/a,u=s/a,c=-u,f=l,h=ht/2;N2(i,a).forEach(([p,g])=>{const y=[{x:e.x+l*p-c*h,y:e.y+u*p-f*h},{x:e.x+l*g-c*h,y:e.y+u*g-f*h},{x:e.x+l*g+c*h,y:e.y+u*g+f*h},{x:e.x+l*p+c*h,y:e.y+u*p+f*h}].map(m=>tt(m,r));gs(t,"A-WALL",y)})}function U2(t){const{gx:e,gy:n,gw:i,gh:r}=t;return[{wall:"top",p1:{x:e,y:n},p2:{x:e+i,y:n}},{wall:"bottom",p1:{x:e,y:n+r},p2:{x:e+i,y:n+r}},{wall:"left",p1:{x:e,y:n},p2:{x:e,y:n+r}},{wall:"right",p1:{x:e+i,y:n},p2:{x:e+i,y:n+r}}]}function O2(t,e,n,i){const r=Ms(e,n,kt),o=fy(e),s=tt({x:r.x1,y:r.y1},i),a=tt({x:r.x2,y:r.y2},i),l=tt(o,i),u=a.x-s.x,c=a.y-s.y,f=Math.hypot(u,c);if(f<.01)return;const h={x:-c/f,y:u/f},p={x:c/f,y:-u/f},g=(s.x+a.x)/2,y=(s.y+a.y)/2,m={x:l.x-g,y:l.y-y},d=h.x*m.x+h.y*m.y>=0?h:p,x=Math.atan2(c,u),v=Math.atan2(d.y,d.x);let _=v-x;for(;_>Math.PI;)_-=Math.PI*2;for(;_<=-Math.PI;)_+=Math.PI*2;const C=_<0,E=C?v:x,T=C?x:v;I2(t,"A-DOOR",s.x,s.y,f,Vg(E),Vg(T));const P={x:s.x+f*Math.cos(v),y:s.y+f*Math.sin(v)};yr(t,"A-DOOR",s,P)}function F2(t,e,n,i){const r=Ms(e,n,hn);yr(t,"A-GLAZ",tt({x:r.x1,y:r.y1},i),tt({x:r.x2,y:r.y2},i))}function z2(t,e,n){const{gx:i,gy:r,gw:o,gh:s}=e,a=(p,g)=>tt({x:p,y:g},n),l=(p,g,y,m)=>yr(t,"A-ANNO-DIMS",a(p,g),a(y,m)),u=r-rr;l(i,r,i,u-Zt),l(i+o,r,i+o,u-Zt),l(i,u,i+o,u),mi(t,"A-ANNO-DIMS",a(i+o/2,u-.1),.14,o.toFixed(2));const c=r+s+rr;l(i,r+s,i,c+Zt),l(i+o,r+s,i+o,c+Zt),l(i,c,i+o,c),mi(t,"A-ANNO-DIMS",a(i+o/2,c+.15),.14,o.toFixed(2));const f=i-rr;l(i,r,f-Zt,r),l(i,r+s,f-Zt,r+s),l(f,r,f,r+s),mi(t,"A-ANNO-DIMS",a(f-.1,r+s/2),.14,s.toFixed(2),90);const h=i+o+rr;l(i+o,r,h+Zt,r),l(i+o,r+s,h+Zt,r+s),l(h,r,h,r+s),mi(t,"A-ANNO-DIMS",a(h+.15,r+s/2),.14,s.toFixed(2),90)}function k2(t,e,n){const i=e.points?{x:Math.min(...e.points.map(r=>r.x)),y:Math.min(...e.points.map(r=>r.y))}:{x:e.gx,y:e.gy};mi(t,"A-ANNO-TEXT",tt({x:i.x+.25,y:i.y+.5},n),.22,e.name),mi(t,"A-ANNO-TEXT",tt({x:i.x+.25,y:i.y+.85},n),.14,`${iy(e).toFixed(1)} m2`)}function B2(t,e,n,i,r){n.forEach(o=>{const s=Qu(e,o.floor??0,i),a=o.rotation||0,{w:l,d:u}=Fa(s,a,o.width),c=o.x-l/2,f=o.x+l/2,h=o.y-u/2,p=o.y+u/2,g=[{x:c,y:h},{x:f,y:h},{x:f,y:p},{x:c,y:p}].map(d=>tt(d,r));gs(t,"A-STAIR",g);const y=a===90||a===270,m=10;for(let d=1;d<m;d++)if(y){const x=c+l*d/m;yr(t,"A-STAIR",tt({x,y:h},r),tt({x,y:p},r))}else{const x=h+u*d/m;yr(t,"A-STAIR",tt({x:c,y:x},r),tt({x:f,y:x},r))}})}function H2(t,e,n){e.forEach(i=>{const o=(i.size??ei)/2,s=i.x-o,a=i.x+o,l=i.y-o,u=i.y+o,c=[{x:s,y:l},{x:a,y:l},{x:a,y:u},{x:s,y:u}].map(f=>tt(f,n));gs(t,"A-COLS",c),yr(t,"A-COLS",tt({x:s,y:l},n),tt({x:a,y:u},n)),yr(t,"A-COLS",tt({x:s,y:u},n),tt({x:a,y:l},n))})}function G2(t,e,n,i){const r=Ju(e,0);if(r){const o=[{x:r.minX-st,y:r.minY-st},{x:r.maxX+st,y:r.minY-st},{x:r.maxX+st,y:r.maxY+st},{x:r.minX-st,y:r.maxY+st}].map(s=>tt(s,i));gs(t,"S-FNDN",o)}(n||[]).forEach(o=>{const a=(o.size??ei)/2+st,l=[{x:o.x-a,y:o.y-a},{x:o.x+a,y:o.y-a},{x:o.x+a,y:o.y+a},{x:o.x-a,y:o.y+a}].map(u=>tt(u,i));gs(t,"S-FNDN",l)})}function V2(t,e,n,i){const l=[{x:0,y:-1.2},{x:7,y:-1.2},{x:7,y:-4.5},{x:0,y:-4.5}].map(c=>tt(c,0));gs(t,"A-ANNO-TTLB",l),yr(t,"A-ANNO-TTLB",tt({x:0,y:-1.2-3.3/2},0),tt({x:7,y:-1.2-3.3/2},0)),mi(t,"A-ANNO-TTLB",tt({x:0+.15,y:-1.2-.55},0),.32,e||"Untitled Project");const u=n==="eu"?"EU (DIN/EN)":"IRC (US)";mi(t,"A-ANNO-TTLB",tt({x:0+.15,y:-1.2-3.3/2-.5},0),.16,`${i("Standard")}: ${u}   |   ${new Date().toLocaleDateString()}`),mi(t,"A-ANNO-TTLB",tt({x:0+.15,y:-1.2-3.3+.4},0),.16,"Lamsa Engineers")}function W2(t,e,n,i,r,o,s,a,l){const u=[];return mi(u,"A-ANNO-TEXT",tt({x:0,y:-.7},o),.35,s),e.forEach(c=>{if(c.points&&c.points.length>=3){const f=c.points.length;for(let h=0;h<f;h++){const p=c.points[h],g=c.points[(h+1)%f],y=(c.openings||[]).filter(m=>m.edge_index===h).map(m=>({position:m.position,width:m.kind==="door"?kt:hn}));Wg(u,p,g,y,o)}}else U2(c).forEach(({wall:f,p1:h,p2:p})=>{const g=(c.openings||[]).filter(y=>y.wall===f).map(y=>({position:y.position,width:y.kind==="door"?kt:hn}));Wg(u,h,p,g,o)}),a&&z2(u,c,o);(c.openings||[]).forEach(f=>{f.kind==="door"?O2(u,c,f,o):F2(u,c,f,o)}),k2(u,c,o)}),B2(u,t,n,r,o),H2(u,i,o),l&&G2(u,t,i,o),u}function X2(t,e,n,i,r,o,s=!0,a="irc",l=u=>u){const u=Object.entries(Gg).map(([m,d])=>`0
LAYER
2
${m}
70
0
62
${d}
6
CONTINUOUS`).join(`
`),c=[];V2(c,t==null?void 0:t.name,a,l);let f=0;const h=3;n.forEach(m=>{const d=i.filter(_=>(_.floor??0)===m.floorNum),x=(r||[]).filter(_=>(_.floor??0)===m.floorNum);c.push(...W2(e,m.rooms,d,x,o,f,m.label,s,m.floorNum===0));const v=m.rooms.length?Math.max(...m.rooms.map(_=>_.points?Math.max(..._.points.map(C=>C.x)):_.gx+_.gw)):10;f+=v+h});const p=["0","SECTION","2","HEADER","9","$ACADVER","1","AC1021","9","$INSUNITS","70","6","0","ENDSEC"].join(`
`),g=["0","SECTION","2","TABLES","0","TABLE","2","LAYER","70",String(Object.keys(Gg).length),u,"0","ENDTAB","0","ENDSEC"].join(`
`),y=["0","SECTION","2","ENTITIES",...c,"0","ENDSEC"].join(`
`);return[p,g,y,"0","EOF"].join(`
`)+`
`}const Xg="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_$";function di(){let t="";for(let e=0;e<22;e++)t+=Xg[Math.floor(Math.random()*Xg.length)];return t}function Fi(t){Number.isFinite(t)||(t=0);let e=t.toFixed(4).replace(/(\.\d*?)0+$/,"$1").replace(/\.$/,".0");return e.includes(".")||(e+=".0"),e}function Fr(t){return String(t??"").replace(/'/g,"''").replace(/[\r\n]+/g," ")}class j2{constructor(){this.lines=[],this.next=1}add(e){const n=this.next++;return this.lines.push(`#${n}=${e};`),n}}function $2(t,e,n){return t.add(`IFCCARTESIANPOINT((${Fi(e)},${Fi(n)}))`)}function bf(t,e,n,i){return t.add(`IFCCARTESIANPOINT((${Fi(e)},${Fi(n)},${Fi(i)}))`)}function Bn(t,e,n,i,r,o,s){const a=e.map(h=>$2(t,h.x,h.y)),l=t.add(`IFCPOLYLINE((${[...a,a[0]].map(h=>`#${h}`).join(",")}))`),u=t.add(`IFCARBITRARYCLOSEDPROFILEDEF(.AREA.,$,#${l})`),c=bf(t,0,0,i),f=t.add(`IFCAXIS2PLACEMENT3D(#${c},#${r},#${o})`);return t.add(`IFCEXTRUDEDAREASOLID(#${u},#${f},#${s},${Fi(n)})`)}function Hn(t,e,n){const i=t.add(`IFCSHAPEREPRESENTATION(#${e},'Body','SweptSolid',(#${n}))`);return t.add(`IFCPRODUCTDEFINITIONSHAPE($,$,(#${i}))`)}function ri(t,e,n,i,r,o,s){return t.add(`${e}('${di()}',#${i},'${Fr(r)}',$,$,#${o},#${s},$,${n})`)}function jg(t,e,n,i,r,o,s,a,l){return t.add(`${e}('${di()}',#${i},'${Fr(r)}',$,$,#${o},#${s},$,${Fi(a)},${Fi(l)},${n},$,$)`)}function Y2(t,e){const n=t.slice().sort((o,s)=>o.start-s.start);let i=0;const r=[];return n.forEach(o=>{o.start>i+.02&&r.push([i,o.start]),i=Math.max(i,o.start+o.width)}),i<e-.02&&r.push([i,e]),{pillars:r,openings:n}}function $g(t,e,n,i,r,o,s,a,l){return[{x:t+n*s-r*l,y:e+i*s-o*l},{x:t+n*a-r*l,y:e+i*a-o*l},{x:t+n*a+r*l,y:e+i*a+o*l},{x:t+n*s+r*l,y:e+i*s+o*l}]}function Yg(t,e,n,i,r,o,s,a,l){const u=i.x-n.x,c=i.y-n.y,f=Math.hypot(u,c);if(f<.02)return;const h=u/f,p=c/f,g=-p,y=h,m=ht/2,d=r.map(_=>Ca(_,f,o)),{pillars:x,openings:v}=Y2(d,f);x.forEach(([_,C])=>{const E=$g(n.x,n.y,h,p,g,y,_,C,m),T=Bn(t,E,o,0,e.zAxis,e.xAxis,e.zAxis),P=Hn(t,e.context,T);l.push(ri(t,"IFCWALL",".SOLIDWALL.",s,"Wall",a,P))}),v.forEach(_=>{const C=$g(n.x,n.y,h,p,g,y,_.start,_.start+_.width,m);if(_.sill>.02){const A=Bn(t,C,_.sill,0,e.zAxis,e.xAxis,e.zAxis),O=Hn(t,e.context,A);l.push(ri(t,"IFCWALL",".SOLIDWALL.",s,"Wall (below opening)",a,O))}const E=_.sill+_.openH,T=o-E;if(T>.02){const A=Bn(t,C,T,E,e.zAxis,e.xAxis,e.zAxis),O=Hn(t,e.context,A);l.push(ri(t,"IFCWALL",".SOLIDWALL.",s,"Wall (above opening)",a,O))}const P=Bn(t,C,_.openH,_.sill,e.zAxis,e.xAxis,e.zAxis),M=Hn(t,e.context,P);_.isDoor?l.push(jg(t,"IFCDOOR",".DOOR.",s,"Door",a,M,_.openH,_.width)):l.push(jg(t,"IFCWINDOW",".WINDOW.",s,"Window",a,M,_.openH,_.width))})}function q2(t){const{gx:e,gy:n,gw:i,gh:r}=t;return[{wall:"top",p1:{x:e,y:n},p2:{x:e+i,y:n}},{wall:"bottom",p1:{x:e,y:n+r},p2:{x:e+i,y:n+r}},{wall:"left",p1:{x:e,y:n},p2:{x:e,y:n+r}},{wall:"right",p1:{x:e+i,y:n},p2:{x:e+i,y:n+r}}]}function K2(t,e,n,i,r,o,s){if(n.points&&n.points.length>=3){const u=n.points.length;for(let f=0;f<u;f++){const h=n.points[f],p=n.points[(f+1)%u],g=(n.openings||[]).filter(y=>y.edge_index===f);Yg(t,e,h,p,g,i,r,o,s)}const c=Bn(t,n.points,.06,-.06,e.zAxis,e.xAxis,e.zAxis);if(s.push(ri(t,"IFCSLAB",".FLOOR.",r,"Floor",o,Hn(t,e.context,c))),n.has_roof){const f=Bn(t,n.points,_i,i,e.zAxis,e.xAxis,e.zAxis);s.push(ri(t,"IFCSLAB",".ROOF.",r,"Roof",o,Hn(t,e.context,f)))}return}q2(n).forEach(({wall:u,p1:c,p2:f})=>{const h=(n.openings||[]).filter(p=>p.wall===u);Yg(t,e,c,f,h,i,r,o,s)});const a=[{x:n.gx,y:n.gy},{x:n.gx+n.gw,y:n.gy},{x:n.gx+n.gw,y:n.gy+n.gh},{x:n.gx,y:n.gy+n.gh}],l=Bn(t,a,.06,-.06,e.zAxis,e.xAxis,e.zAxis);if(s.push(ri(t,"IFCSLAB",".FLOOR.",r,"Floor",o,Hn(t,e.context,l))),n.has_roof){const u=Bn(t,a,_i,i,e.zAxis,e.xAxis,e.zAxis);s.push(ri(t,"IFCSLAB",".ROOF.",r,"Roof",o,Hn(t,e.context,u)))}}function Z2(t,e,n,i,r,o,s,a){const l=Qu(i,n.floor??0,r);if(!(l>0))return;const u=n.rotation||0,{w:c,d:f}=Fa(l,u,n.width),h=n.x-c/2,p=n.x+c/2,g=n.y-f/2,y=n.y+f/2,d=Bn(t,[{x:h,y:g},{x:p,y:g},{x:p,y},{x:h,y}],l,0,e.zAxis,e.xAxis,e.zAxis),x=Hn(t,e.context,d);a.push(ri(t,"IFCSTAIR",".STRAIGHT_RUN_STAIR.",o,"Stair",s,x))}function J2(t,e,n,i,r,o,s,a){const l=n.size??ei,u=n.height??r,c=l/2,f=[{x:n.x-c,y:n.y-c},{x:n.x+c,y:n.y-c},{x:n.x+c,y:n.y+c},{x:n.x-c,y:n.y+c}],h=Bn(t,f,u,0,e.zAxis,e.xAxis,e.zAxis),p=Hn(t,e.context,h);a.push(ri(t,"IFCCOLUMN",".COLUMN.",o,"Column",s,p))}function Q2(t,e,n,i,r,o,s){const a=Ju(n,0);if(a){const l=[{x:a.minX-st,y:a.minY-st},{x:a.maxX+st,y:a.minY-st},{x:a.maxX+st,y:a.maxY+st},{x:a.minX-st,y:a.maxY+st}],u=Bn(t,l,hi,-hi,e.zAxis,e.xAxis,e.zAxis),c=Hn(t,e.context,u);s.push(ri(t,"IFCFOOTING",".STRIP_FOOTING.",r,"Foundation",o,c))}(i||[]).forEach(l=>{const c=(l.size??ei)/2+st,f=[{x:l.x-c,y:l.y-c},{x:l.x+c,y:l.y-c},{x:l.x+c,y:l.y+c},{x:l.x-c,y:l.y+c}],h=Bn(t,f,hi,-hi,e.zAxis,e.xAxis,e.zAxis),p=Hn(t,e.context,h);s.push(ri(t,"IFCFOOTING",".PAD_FOOTING.",r,"Column Footing",o,p))})}function eb(t,e,n,i,r=o=>o){const o=new j2,s=(t==null?void 0:t.wall_height)??2.7,a=(t==null?void 0:t.name)||"Untitled Project",l=bf(o,0,0,0),u=o.add("IFCDIRECTION((0.,0.,1.))"),c=o.add("IFCDIRECTION((1.,0.,0.))"),f=o.add("IFCDIRECTION((0.,1.,0.))"),h=o.add(`IFCAXIS2PLACEMENT3D(#${l},#${u},#${c})`),p=o.add("IFCPERSON($,$,'User',$,$,$,$,$)"),g=o.add(`IFCORGANIZATION($,'${Fr(a)}',$,$,$)`),y=o.add(`IFCPERSONANDORGANIZATION(#${p},#${g},$)`),m=o.add(`IFCAPPLICATION(#${g},'1.0','Lamsa Engineers','LAMSA')`),d=o.add(`IFCOWNERHISTORY(#${y},#${m},$,.ADDED.,$,$,$,0)`),x=o.add("IFCSIUNIT(*,.LENGTHUNIT.,$,.METRE.)"),v=o.add("IFCSIUNIT(*,.AREAUNIT.,$,.SQUARE_METRE.)"),_=o.add("IFCSIUNIT(*,.VOLUMEUNIT.,$,.CUBIC_METRE.)"),C=o.add("IFCSIUNIT(*,.PLANEANGLEUNIT.,$,.RADIAN.)"),E=o.add(`IFCUNITASSIGNMENT((#${x},#${v},#${_},#${C}))`),T=o.add(`IFCGEOMETRICREPRESENTATIONCONTEXT($,'Model',3,1.E-05,#${h},#${f})`),P={context:T,zAxis:u,xAxis:c},M=o.add(`IFCPROJECT('${di()}',#${d},'${Fr(a)}',$,$,$,$,(#${T}),#${E})`),A=o.add(`IFCLOCALPLACEMENT($,#${h})`),O=o.add(`IFCSITE('${di()}',#${d},'Site',$,$,#${A},$,$,.ELEMENT.,$,$,$,$,$)`);o.add(`IFCRELAGGREGATES('${di()}',#${d},$,$,#${M},(#${O}))`);const X=o.add(`IFCLOCALPLACEMENT(#${A},#${h})`),Q=o.add(`IFCBUILDING('${di()}',#${d},'${Fr(a)}',$,$,#${X},$,$,.ELEMENT.,$,$,$)`);o.add(`IFCRELAGGREGATES('${di()}',#${d},$,$,#${O},(#${Q}))`);const D=[...new Set(e.map(z=>z.floor??0))].sort((z,Z)=>z-Z),H=D.length?D:[0],j=Oa(e,s),K=[];H.forEach(z=>{var oe;const Z=e.filter(S=>(S.floor??0)===z),ie=j.get(z)??0,$=bf(o,0,0,ie),ee=o.add(`IFCAXIS2PLACEMENT3D(#${$},#${u},#${c})`),de=o.add(`IFCLOCALPLACEMENT(#${X},#${ee})`),pe=o.add(`IFCBUILDINGSTOREY('${di()}',#${d},'${Fr(ts(z,r))}',$,$,#${de},$,$,.ELEMENT.,${Fi(ie)})`);K.push(pe);const he=((oe=Z[0])==null?void 0:oe.wall_height)??s,Ee=o.add(`IFCLOCALPLACEMENT(#${de},#${h})`),Re=[];Z.forEach(S=>{K2(o,P,S,S.wall_height??he,d,Ee,Re)}),(n||[]).filter(S=>(S.floor??0)===z).forEach(S=>{Z2(o,P,S,e,s,d,Ee,Re)});const _e=(i||[]).filter(S=>(S.floor??0)===z);_e.forEach(S=>{J2(o,P,S,ie,s,d,Ee,Re)}),z===0&&Q2(o,P,e,_e,d,Ee,Re),Re.length&&o.add(`IFCRELCONTAINEDINSPATIALSTRUCTURE('${di()}',#${d},$,$,(${Re.map(S=>`#${S}`).join(",")}),#${pe})`)}),o.add(`IFCRELAGGREGATES('${di()}',#${d},$,$,#${Q},(${K.map(z=>`#${z}`).join(",")}))`);const U=["ISO-10303-21;","HEADER;","FILE_DESCRIPTION((''),'2;1');",`FILE_NAME('${Fr(a)}.ifc','${new Date().toISOString()}',(''),(''),'Lamsa Engineers','Lamsa Engineers','');`,"FILE_SCHEMA(('IFC4'));","ENDSEC;","","DATA;"].join(`
`),B=["ENDSEC;","","END-ISO-10303-21;",""].join(`
`);return[U,o.lines.join(`
`),B].join(`
`)}function tb({initialProject:t,projectId:e,onBack:n,onSave:i,t:r}){const{project:o,rooms:s,stairs:a,columns:l,actions:u}=L2(t),c=o.code_standard||"irc",[f,h]=Ae.useState("select"),[p,g]=Ae.useState(0),[y,m]=Ae.useState(null),[d,x]=Ae.useState(null),[v,_]=Ae.useState(null),[C,E]=Ae.useState(null),[T,P]=Ae.useState(!1),[M,A]=Ae.useState(""),[O,X]=Ae.useState(!1),[Q,D]=Ae.useState(!1),[H,j]=Ae.useState(!0),[K,U]=Ae.useState(!1),B=Ae.useRef(null),[z,Z]=Ae.useState(()=>typeof window<"u"?window.innerWidth<900:!1);Ae.useEffect(()=>{function S(){Z(window.innerWidth<900)}return window.addEventListener("resize",S),()=>window.removeEventListener("resize",S)},[]);const ie=s.find(S=>S.id===y)||null,$=a.find(S=>S.id===v)||null,ee=l.find(S=>S.id===C)||null,de=Math.max(0,...s.map(S=>S.floor??0),...a.map(S=>(S.floor??0)+1),...l.map(S=>S.floor??0)),pe=Math.max(o.floor_count||1,de+1);function he(){const S=pe+1;u.setMeta({floor_count:S}),g(pe)}async function Ee(){P(!0),A("");const S=await i(e,{project:o,rooms:s,stairs:a,columns:l});return P(!1),A(S.ok?r("Saved"):S.error||r("Save failed")),setTimeout(()=>A(""),2500),S}function Re(){const S=s.filter(w=>(w.floor??0)===p),I=D2(S,20,16,{projectName:o.name,floorLabel:ts(p,r),standard:c,t:r}),[,L]=I.split(","),G=atob(L),F=new Uint8Array(G.length);for(let w=0;w<G.length;w++)F[w]=G.charCodeAt(w);const fe=new Blob([F],{type:"image/png"}),se=URL.createObjectURL(fe),R=document.createElement("a");R.href=se,R.download=(o.name||"floor-plan")+"-"+ts(p,r)+".png",R.click(),URL.revokeObjectURL(se)}function _e(){const S=Array.from({length:pe},(fe,se)=>({floorNum:se,label:ts(se,r),rooms:s.filter(R=>(R.floor??0)===se)})).filter(fe=>fe.rooms.length>0);if(!S.length)return;const I=X2(o,s,S,a,l,o.wall_height,!0,c,r),L=new Blob([I],{type:"application/dxf"}),G=URL.createObjectURL(L),F=document.createElement("a");F.href=G,F.download=(o.name||"floor-plan")+".dxf",F.click(),URL.revokeObjectURL(G)}function oe(){if(!s.length)return;const S=eb(o,s,a,l,r),I=new Blob([S],{type:"application/x-step"}),L=URL.createObjectURL(I),G=document.createElement("a");G.href=L,G.download=(o.name||"floor-plan")+".ifc",G.click(),URL.revokeObjectURL(L)}return te.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh",fontFamily:"sans-serif",overflowX:"hidden"},children:[te.jsxs("div",{style:{display:"flex",flexWrap:"wrap",rowGap:8,alignItems:"center",justifyContent:"space-between",padding:"10px 14px",borderBottom:"1px solid #e5e7eb"},children:[te.jsxs("button",{type:"button",onClick:n,style:{background:"none",border:"none",cursor:"pointer",fontSize:13,color:"#374151"},children:["← ",r("Projects")]}),te.jsx("input",{value:o.name,onChange:S=>u.setMeta({name:S.target.value}),style:{fontWeight:800,fontSize:15,border:"none",textAlign:"center",flex:"1 1 140px",minWidth:0}}),te.jsxs("div",{style:{display:"flex",flexWrap:"wrap",rowGap:8,gap:8,alignItems:"center",justifyContent:"flex-end"},children:[te.jsx("span",{style:{fontSize:12,color:"#6b7280"},children:M}),te.jsxs("label",{style:{fontSize:12,color:"#6b7280",display:"flex",alignItems:"center",gap:4},children:[te.jsx("input",{type:"checkbox",checked:O,onChange:S=>X(S.target.checked)}),r("Dollhouse view")]}),te.jsxs("label",{style:{fontSize:12,color:"#6b7280",display:"flex",alignItems:"center",gap:4},children:[te.jsx("input",{type:"checkbox",checked:Q,onChange:S=>D(S.target.checked)}),r("Render view")]}),te.jsxs("label",{style:{fontSize:12,color:"#6b7280",display:"flex",alignItems:"center",gap:4},children:[te.jsx("input",{type:"checkbox",checked:H,onChange:S=>j(S.target.checked)}),r("Show Foundation")]}),te.jsxs("label",{style:{fontSize:12,color:"#6b7280",display:"flex",alignItems:"center",gap:4},children:[r("Code Standard"),te.jsxs("select",{value:c,onChange:S=>u.setMeta({code_standard:S.target.value}),style:{padding:"4px 6px",borderRadius:6,border:"1px solid #d1d5db",fontSize:12},children:[te.jsx("option",{value:"irc",children:r("IRC (US)")}),te.jsx("option",{value:"eu",children:r("EU (DIN/EN)")})]})]}),te.jsx("button",{type:"button",onClick:Re,style:{padding:"8px 14px",borderRadius:8,border:"1px solid #d1d5db",background:"#fff",fontWeight:700,fontSize:13,cursor:"pointer"},children:r("Export plan")}),te.jsx("button",{type:"button",onClick:_e,style:{padding:"8px 14px",borderRadius:8,border:"1px solid #d1d5db",background:"#fff",fontWeight:700,fontSize:13,cursor:"pointer"},children:r("Export DXF")}),te.jsx("button",{type:"button",onClick:oe,style:{padding:"8px 14px",borderRadius:8,border:"1px solid #d1d5db",background:"#fff",fontWeight:700,fontSize:13,cursor:"pointer"},children:r("Export IFC")}),te.jsx("button",{type:"button",onClick:()=>U(!0),title:r("Optional — uses 1 credit from your weekly/monthly plan"),style:{padding:"8px 14px",borderRadius:8,border:"1px solid #d1d5db",background:"#fff",fontWeight:700,fontSize:13,cursor:"pointer"},children:r("Generate realistic image")}),te.jsx("button",{type:"button",onClick:Ee,disabled:T,style:{padding:"8px 16px",borderRadius:8,border:"none",background:"#c9a96e",color:"#1b1e22",fontWeight:800,fontSize:13,cursor:"pointer",opacity:T?.6:1},children:r(T?"Saving…":"Save")})]})]}),te.jsx(p2,{t:r,standard:c,mode:f,onModeChange:h,selectedRoom:ie,onRenameRoom:(S,I)=>u.updateRoom(S,{name:I}),onChangeRoomType:(S,I)=>{const L=s.find(fe=>fe.id===S);if(!L)return;const G=Oh(I,c),F={room_type:I,name:r(G.label)};L.points||(F.gw=Math.max(L.gw,G.minW),F.gh=Math.max(L.gh,G.minH)),u.updateRoom(S,F)},onResizeRoomInputs:(S,I,L)=>u.updateRoom(S,{gw:I,gh:L}),onDeleteRoom:S=>{u.removeRoom(S),m(null)},selectedOpening:d,onDeleteOpening:(S,I)=>{u.removeOpening(S,I),x(null)},floorCount:pe,activeFloor:p,onSetActiveFloor:g,onAddFloor:he,selectedStair:$,onResizeStairWidth:(S,I)=>u.updateStair(S,{width:I}),onDeleteStair:S=>{u.removeStair(S),_(null)},selectedColumn:ee,onDeleteColumn:S=>{u.removeColumn(S),E(null)}}),te.jsxs("div",{style:{display:"flex",flexDirection:z?"column":"row",flex:1,minHeight:0},children:[te.jsx("div",{style:z?{flex:"0 0 auto",maxHeight:"50%",overflow:"auto"}:{flex:1,overflow:"auto"},children:te.jsx(f2,{rooms:s,stairs:a,columns:l,showFoundation:H,standard:c,wallHeight:o.wall_height,mode:f,activeFloor:p,selectedRoomId:y,selectedOpening:d,selectedStairId:v,selectedColumnId:C,onAddRoom:S=>{const I=u.addRectRoom(S);m(I.id),h("select")},onAddPolygonRoom:S=>{const I=u.addPolygonRoom({points:S,floor:p});m(I.id),h("select")},onMoveRoom:(S,I,L)=>u.updateRoom(S,{gx:I,gy:L}),onResizeRoom:(S,I,L)=>u.updateRoom(S,{gw:I,gh:L}),onMovePolygonRoom:(S,I)=>{const L=I.map(w=>w.x),G=I.map(w=>w.y),F=Math.min(...L),fe=Math.min(...G),se=Math.max(...L)-F,R=Math.max(...G)-fe;u.updateRoom(S,{points:I,gx:F,gy:fe,gw:se,gh:R})},onSelectRoom:m,onAddOpening:u.addOpening,onSelectOpening:x,onAddStair:S=>u.addStair(R2(S)),onMoveStair:(S,I,L,G)=>u.moveStair(S,I,L,G),onSelectStair:_,onAddColumn:S=>u.addColumn(C2(S)),onMoveColumn:(S,I,L)=>u.moveColumn(S,I,L),onSelectColumn:E})}),te.jsx("div",{style:{flex:1,minHeight:0},children:te.jsx(u2,{ref:B,rooms:s,stairs:a,columns:l,wallHeight:o.wall_height,wallColor:o.wall_color,wallMaterial:o.wall_material,t:r,dollhouse:O,floorGap:O?1.2:0,renderView:Q,showFoundation:H})})]}),K&&te.jsx(S2,{captureImage:()=>B.current&&B.current.captureImage(),onClose:()=>U(!1),t:r})]})}const nb={"Lamsa Engineers":"لمسة للمهندسين","Please sign in to continue.":"الرجاء تسجيل الدخول للمتابعة.","Sign in":"تسجيل الدخول","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"صمّم مخططات أرضية كاملة، عاينها ثلاثي الأبعاد، وصدّر مستندات هندسية حقيقية.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"انتهى اشتراكك بقسم المهندسين. جدّد الاشتراك لمتابعة تصميم المخططات الكاملة.","Rectangular rooms, doors & windows, single-floor plans":"غرف مستطيلة، أبواب ونوافذ، مخططات بطابق واحد","Live 3D preview of your design":"معاينة ثلاثية الأبعاد حية لتصميمك","Printable floor plan export":"تصدير مخطط قابل للطباعة","Use Lamsa's existing furniture-styling tools per room":"استخدم أدوات تنسيق الأثاث الموجودة بلمسة لكل غرفة","/ year":"/ سنوياً","14-day free trial, cancel anytime":"تجربة مجانية لمدة 14 يوم، إلغاء بأي وقت","Starting…":"جارٍ البدء…","Start free trial":"ابدأ التجربة المجانية","Something went wrong, please try again":"حدث خطأ ما، حاول مرة أخرى","Your Projects":"مشاريعك","New Project":"مشروع جديد","No projects yet — create your first one.":"لا يوجد مشاريع بعد — أنشئ أول مشروع.",Delete:"حذف",Projects:"المشاريع",Saved:"تم الحفظ","Save failed":"فشل الحفظ","Export plan":"تصدير المخطط","Saving…":"جارٍ الحفظ…",Save:"حفظ",Select:"تحديد","Add Room":"إضافة غرفة","Add Door":"إضافة باب","Add Window":"إضافة نافذة","Delete Room":"حذف الغرفة","Delete Opening":"حذف الفتحة",W:"عرض",H:"ارتفاع","Reset camera":"إعادة ضبط الكاميرا","Untitled Project":"مشروع بدون اسم","Add Polygon Room":"إضافة غرفة بشكل حر","Add Stairs":"إضافة سلالم","Delete Stairs":"حذف السلالم","Add Column":"إضافة عمود","Delete Column":"حذف العمود","Ground Floor":"الطابق الأرضي",Floor:"الطابق","Add Floor":"إضافة طابق","Dollhouse view":"عرض مقطعي","Render view":"عرض فني","Show Foundation":"إظهار القواعد","Export DXF":"تصدير DXF","Export IFC":"تصدير IFC","Code Standard":"المعيار الهندسي","IRC (US)":"IRC (أمريكي)","EU (DIN/EN)":"أوروبي (DIN/EN)",Standard:"المعيار","Back to Home":"الرئيسية","Generate realistic image":"توليد صورة واقعية","Optional — uses 1 credit from your weekly/monthly plan":"اختياري — يستهلك كريدت واحد من رصيدك الأسبوعي أو الشهري","Turning your design into a photoreal render...":"عم نحوّل تصميمك لصورة واقعية...","Takes 20-40 seconds":"بياخد 20-40 ثانية",Close:"إغلاق","Image upload failed. Please try again.":"تعذّر رفع الصورة، حاول مرة أخرى","Error generating image. Please try again.":"حدث خطأ أثناء توليد الصورة، حاول مرة أخرى","Connection error. Please try again.":"خطأ بالاتصال، حاول مرة أخرى","You're out of credits":"نفد رصيدك من الكريدت","Subscribe to generate photoreal renders of your floor plans.":"اشترك لتوليد صور واقعية لمخططاتك",Weekly:"أسبوعي",Monthly:"شهري",credits:"كريدت",Download:"تحميل",Bedroom:"غرفة نوم","Living Room":"صالة","Dining Room":"غرفة سفرة",Office:"مكتب",Kitchen:"مطبخ",Bathroom:"حمام",Hallway:"ممر",Closet:"خزانة",Garage:"كراج",Other:"أخرى",Min:"الحد الأدنى",Width:"العرض","Tap to place each corner, then double-tap (or tap the first corner again) to finish":"اضغط لوضع كل زاوية، ثم اضغط مرتين (أو اضغط على أول زاوية مجدداً) للإنهاء"},qg={de:{"Lamsa Engineers":"Lamsa Ingenieure","Please sign in to continue.":"Bitte melde dich an, um fortzufahren.","Sign in":"Anmelden","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Entwirf komplette Grundrisse, sieh sie in 3D in der Vorschau und exportiere echte Architekturunterlagen.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Dein Zugang zu Engineers ist abgelaufen. Abonniere erneut, um weiter vollständige Grundrisse zu gestalten.","Rectangular rooms, doors & windows, single-floor plans":"Rechteckige Räume, Türen & Fenster, einstöckige Grundrisse","Live 3D preview of your design":"Live-3D-Vorschau deines Entwurfs","Printable floor plan export":"Druckbarer Grundriss-Export","Use Lamsa's existing furniture-styling tools per room":"Nutze Lamsas vorhandene Möbel-Styling-Tools für jeden Raum","/ year":"/ Jahr","14-day free trial, cancel anytime":"14 Tage kostenlos testen, jederzeit kündbar","Starting…":"Wird gestartet…","Start free trial":"Kostenlose Testphase starten","Something went wrong, please try again":"Etwas ist schiefgelaufen, bitte versuche es erneut","Your Projects":"Deine Projekte","New Project":"Neues Projekt","No projects yet — create your first one.":"Noch keine Projekte — erstelle dein erstes.",Delete:"Löschen",Projects:"Projekte",Saved:"Gespeichert","Save failed":"Speichern fehlgeschlagen","Export plan":"Plan exportieren","Saving…":"Wird gespeichert…",Save:"Speichern",Select:"Auswählen","Add Room":"Raum hinzufügen","Add Door":"Tür hinzufügen","Add Window":"Fenster hinzufügen","Delete Room":"Raum löschen","Delete Opening":"Öffnung löschen",W:"B",H:"H","Reset camera":"Kamera zurücksetzen","Untitled Project":"Unbenanntes Projekt","Add Polygon Room":"Freiform-Raum hinzufügen","Add Stairs":"Treppe hinzufügen","Delete Stairs":"Treppe löschen","Add Column":"Säule hinzufügen","Delete Column":"Säule löschen","Ground Floor":"Erdgeschoss",Floor:"Stockwerk","Add Floor":"Stockwerk hinzufügen","Dollhouse view":"Schnittansicht","Render view":"Render-Ansicht","Show Foundation":"Fundament anzeigen","Export DXF":"DXF exportieren","Export IFC":"IFC exportieren","Code Standard":"Bauvorschrift","IRC (US)":"IRC (USA)","EU (DIN/EN)":"EU (DIN/EN)",Standard:"Standard","Back to Home":"Zurück zur Startseite","Generate realistic image":"Realistisches Bild erzeugen","Optional — uses 1 credit from your weekly/monthly plan":"Optional — verbraucht 1 Guthaben aus deinem Wochen-/Monatsabo","Turning your design into a photoreal render...":"Dein Entwurf wird in ein fotorealistisches Bild verwandelt...","Takes 20-40 seconds":"Dauert 20-40 Sekunden",Close:"Schließen","Image upload failed. Please try again.":"Bild-Upload fehlgeschlagen, bitte erneut versuchen","Error generating image. Please try again.":"Fehler bei der Bilderzeugung, bitte erneut versuchen","Connection error. Please try again.":"Verbindungsfehler, bitte erneut versuchen","You're out of credits":"Dein Guthaben ist aufgebraucht","Subscribe to generate photoreal renders of your floor plans.":"Abonniere, um fotorealistische Bilder deiner Grundrisse zu erzeugen.",Weekly:"Wöchentlich",Monthly:"Monatlich",credits:"Guthaben",Download:"Herunterladen",Bedroom:"Schlafzimmer","Living Room":"Wohnzimmer","Dining Room":"Esszimmer",Office:"Büro",Kitchen:"Küche",Bathroom:"Badezimmer",Hallway:"Flur",Closet:"Abstellraum",Garage:"Garage",Other:"Sonstiges",Min:"Min.",Width:"Breite","Tap to place each corner, then double-tap (or tap the first corner again) to finish":"Tippen, um jede Ecke zu setzen, dann doppelt tippen (oder erneut auf die erste Ecke tippen), um abzuschließen"},es:{"Lamsa Engineers":"Lamsa Ingenieros","Please sign in to continue.":"Inicia sesión para continuar.","Sign in":"Iniciar sesión","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Diseña planos completos, previsualízalos en 3D y exporta documentos arquitectónicos reales.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Tu acceso a Engineers ha terminado. Suscríbete de nuevo para seguir diseñando planos completos.","Rectangular rooms, doors & windows, single-floor plans":"Habitaciones rectangulares, puertas y ventanas, planos de una sola planta","Live 3D preview of your design":"Vista previa 3D en vivo de tu diseño","Printable floor plan export":"Exportación de plano imprimible","Use Lamsa's existing furniture-styling tools per room":"Usa las herramientas de estilismo de muebles de Lamsa en cada habitación","/ year":"/ año","14-day free trial, cancel anytime":"14 días de prueba gratis, cancela cuando quieras","Starting…":"Iniciando…","Start free trial":"Iniciar prueba gratuita","Something went wrong, please try again":"Algo salió mal, inténtalo de nuevo","Your Projects":"Tus Proyectos","New Project":"Nuevo Proyecto","No projects yet — create your first one.":"Aún no hay proyectos — crea el primero.",Delete:"Eliminar",Projects:"Proyectos",Saved:"Guardado","Save failed":"Error al guardar","Export plan":"Exportar plano","Saving…":"Guardando…",Save:"Guardar",Select:"Seleccionar","Add Room":"Añadir Habitación","Add Door":"Añadir Puerta","Add Window":"Añadir Ventana","Delete Room":"Eliminar Habitación","Delete Opening":"Eliminar Apertura",W:"An",H:"Al","Reset camera":"Restablecer cámara","Untitled Project":"Proyecto sin título","Add Polygon Room":"Añadir Habitación de Forma Libre","Add Stairs":"Añadir Escaleras","Delete Stairs":"Eliminar Escaleras","Add Column":"Añadir Columna","Delete Column":"Eliminar Columna","Ground Floor":"Planta Baja",Floor:"Planta","Add Floor":"Añadir Planta","Dollhouse view":"Vista seccionada","Render view":"Vista renderizada","Show Foundation":"Mostrar cimentación","Export DXF":"Exportar DXF","Export IFC":"Exportar IFC","Code Standard":"Normativa","IRC (US)":"IRC (EE.UU.)","EU (DIN/EN)":"UE (DIN/EN)",Standard:"Normativa","Back to Home":"Volver al Inicio","Generate realistic image":"Generar imagen realista","Optional — uses 1 credit from your weekly/monthly plan":"Opcional — usa 1 crédito de tu plan semanal/mensual","Turning your design into a photoreal render...":"Convirtiendo tu diseño en una imagen fotorrealista...","Takes 20-40 seconds":"Tarda 20-40 segundos",Close:"Cerrar","Image upload failed. Please try again.":"Error al subir la imagen, inténtalo de nuevo","Error generating image. Please try again.":"Error al generar la imagen, inténtalo de nuevo","Connection error. Please try again.":"Error de conexión, inténtalo de nuevo","You're out of credits":"Te has quedado sin créditos","Subscribe to generate photoreal renders of your floor plans.":"Suscríbete para generar imágenes fotorrealistas de tus planos.",Weekly:"Semanal",Monthly:"Mensual",credits:"créditos",Download:"Descargar",Bedroom:"Dormitorio","Living Room":"Sala de estar","Dining Room":"Comedor",Office:"Oficina",Kitchen:"Cocina",Bathroom:"Baño",Hallway:"Pasillo",Closet:"Armario",Garage:"Garaje",Other:"Otro",Min:"Mín.",Width:"Ancho","Tap to place each corner, then double-tap (or tap the first corner again) to finish":"Toca para colocar cada esquina, luego toca dos veces (o toca de nuevo la primera esquina) para terminar"},tr:{"Lamsa Engineers":"Lamsa Muhendisler","Please sign in to continue.":"Devam etmek icin giris yapin.","Sign in":"Giris Yap","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Tam kat planlari tasarlayin, 3D onizleme yapin ve gercek mimari belgeler disa aktarin.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Engineers erisiminiz sona erdi. Tam kat planlari tasarlamaya devam etmek icin tekrar abone olun.","Rectangular rooms, doors & windows, single-floor plans":"Dikdortgen odalar, kapilar ve pencereler, tek katli planlar","Live 3D preview of your design":"Tasariminizin canli 3D onizlemesi","Printable floor plan export":"Yazdirilabilir kat plani disa aktarma","Use Lamsa's existing furniture-styling tools per room":"Lamsa'nin mevcut mobilya stilizasyon araclarini her oda icin kullanin","/ year":"/ yil","14-day free trial, cancel anytime":"14 gunluk ucretsiz deneme, istediginiz zaman iptal edin","Starting…":"Basliyor…","Start free trial":"Ucretsiz denemeyi baslat","Something went wrong, please try again":"Bir sorun olustu, lutfen tekrar deneyin","Your Projects":"Projeleriniz","New Project":"Yeni Proje","No projects yet — create your first one.":"Henuz proje yok — ilkini olusturun.",Delete:"Sil",Projects:"Projeler",Saved:"Kaydedildi","Save failed":"Kaydetme basarisiz","Export plan":"Plani disa aktar","Saving…":"Kaydediliyor…",Save:"Kaydet",Select:"Sec","Add Room":"Oda Ekle","Add Door":"Kapi Ekle","Add Window":"Pencere Ekle","Delete Room":"Odayi Sil","Delete Opening":"Acikligi Sil",W:"G",H:"Y","Reset camera":"Kamerayi sifirla","Untitled Project":"Isimsiz Proje","Add Polygon Room":"Serbest Sekilli Oda Ekle","Add Stairs":"Merdiven Ekle","Delete Stairs":"Merdiveni Sil","Add Column":"Kolon Ekle","Delete Column":"Kolonu Sil","Ground Floor":"Zemin Kat",Floor:"Kat","Add Floor":"Kat Ekle","Dollhouse view":"Kesit Gorunumu","Render view":"Render Gorunumu","Show Foundation":"Temeli Goster","Export DXF":"DXF Disa Aktar","Export IFC":"IFC Disa Aktar","Code Standard":"Yapi Yonetmeligi","IRC (US)":"IRC (ABD)","EU (DIN/EN)":"AB (DIN/EN)",Standard:"Yonetmelik","Back to Home":"Ana Sayfaya Don","Generate realistic image":"Gercekci Gorsel Olustur","Optional — uses 1 credit from your weekly/monthly plan":"Istege bagli — haftalik/aylik paketinizden 1 kredi kullanir","Turning your design into a photoreal render...":"Tasariminiz gercekci bir gorsele donusturuluyor...","Takes 20-40 seconds":"20-40 saniye surer",Close:"Kapat","Image upload failed. Please try again.":"Gorsel yuklenemedi, lutfen tekrar deneyin","Error generating image. Please try again.":"Gorsel olusturulurken hata olustu, lutfen tekrar deneyin","Connection error. Please try again.":"Baglanti hatasi, lutfen tekrar deneyin","You're out of credits":"Krediniz kalmadi","Subscribe to generate photoreal renders of your floor plans.":"Kat planlarinizin gercekci gorsellerini olusturmak icin abone olun.",Weekly:"Haftalik",Monthly:"Aylik",credits:"kredi",Download:"Indir",Bedroom:"Yatak Odasi","Living Room":"Oturma Odasi","Dining Room":"Yemek Odasi",Office:"Ofis",Kitchen:"Mutfak",Bathroom:"Banyo",Hallway:"Koridor",Closet:"Dolap Odasi",Garage:"Garaj",Other:"Diger",Min:"Min.",Width:"Genislik","Tap to place each corner, then double-tap (or tap the first corner again) to finish":"Her koseyi yerlestirmek icin dokun, bitirmek icin cift dokun (veya ilk koseye tekrar dokun)"},fr:{"Lamsa Engineers":"Lamsa Ingénieurs","Please sign in to continue.":"Veuillez vous connecter pour continuer.","Sign in":"Connexion","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Concevez des plans complets, prévisualisez-les en 3D et exportez de vrais documents architecturaux.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Votre accès à Engineers a expiré. Réabonnez-vous pour continuer à concevoir des plans complets.","Rectangular rooms, doors & windows, single-floor plans":"Pièces rectangulaires, portes et fenêtres, plans à un seul niveau","Live 3D preview of your design":"Aperçu 3D en direct de votre conception","Printable floor plan export":"Export de plan imprimable","Use Lamsa's existing furniture-styling tools per room":"Utilisez les outils de style de meubles existants de Lamsa pour chaque pièce","/ year":"/ an","14-day free trial, cancel anytime":"Essai gratuit de 14 jours, annulez à tout moment","Starting…":"Démarrage…","Start free trial":"Démarrer l'essai gratuit","Something went wrong, please try again":"Un problème est survenu, veuillez réessayer","Your Projects":"Vos Projets","New Project":"Nouveau Projet","No projects yet — create your first one.":"Aucun projet pour l'instant — créez le premier.",Delete:"Supprimer",Projects:"Projets",Saved:"Enregistré","Save failed":"Échec de l'enregistrement","Export plan":"Exporter le plan","Saving…":"Enregistrement…",Save:"Enregistrer",Select:"Sélectionner","Add Room":"Ajouter une pièce","Add Door":"Ajouter une porte","Add Window":"Ajouter une fenêtre","Delete Room":"Supprimer la pièce","Delete Opening":"Supprimer l'ouverture",W:"L",H:"H","Reset camera":"Réinitialiser la caméra","Untitled Project":"Projet sans titre","Add Polygon Room":"Ajouter une pièce de forme libre","Add Stairs":"Ajouter un escalier","Delete Stairs":"Supprimer l'escalier","Add Column":"Ajouter un poteau","Delete Column":"Supprimer le poteau","Ground Floor":"Rez-de-chaussée",Floor:"Étage","Add Floor":"Ajouter un étage","Dollhouse view":"Vue en coupe","Render view":"Vue rendue","Show Foundation":"Afficher les fondations","Export DXF":"Exporter en DXF","Export IFC":"Exporter en IFC","Code Standard":"Norme de construction","IRC (US)":"IRC (É.-U.)","EU (DIN/EN)":"UE (DIN/EN)",Standard:"Norme","Back to Home":"Retour à l'accueil","Generate realistic image":"Générer une image réaliste","Optional — uses 1 credit from your weekly/monthly plan":"Optionnel — utilise 1 crédit de votre forfait hebdomadaire/mensuel","Turning your design into a photoreal render...":"Transformation de votre conception en image photoréaliste...","Takes 20-40 seconds":"Prend 20 à 40 secondes",Close:"Fermer","Image upload failed. Please try again.":"Échec de l'envoi de l'image, veuillez réessayer","Error generating image. Please try again.":"Erreur lors de la génération de l'image, veuillez réessayer","Connection error. Please try again.":"Erreur de connexion, veuillez réessayer","You're out of credits":"Vous n'avez plus de crédits","Subscribe to generate photoreal renders of your floor plans.":"Abonnez-vous pour générer des rendus photoréalistes de vos plans.",Weekly:"Hebdomadaire",Monthly:"Mensuel",credits:"crédits",Download:"Télécharger",Bedroom:"Chambre","Living Room":"Salon","Dining Room":"Salle à manger",Office:"Bureau",Kitchen:"Cuisine",Bathroom:"Salle de bain",Hallway:"Couloir",Closet:"Placard",Garage:"Garage",Other:"Autre",Min:"Min.",Width:"Largeur","Tap to place each corner, then double-tap (or tap the first corner again) to finish":"Appuyez pour placer chaque coin, puis appuyez deux fois (ou appuyez à nouveau sur le premier coin) pour terminer"},it:{"Lamsa Engineers":"Lamsa Ingegneri","Please sign in to continue.":"Accedi per continuare.","Sign in":"Accedi","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Progetta planimetrie complete, visualizzale in anteprima 3D ed esporta veri documenti architettonici.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Il tuo accesso a Engineers è scaduto. Abbonati di nuovo per continuare a progettare planimetrie complete.","Rectangular rooms, doors & windows, single-floor plans":"Stanze rettangolari, porte e finestre, planimetrie a un piano","Live 3D preview of your design":"Anteprima 3D dal vivo del tuo progetto","Printable floor plan export":"Esportazione planimetria stampabile","Use Lamsa's existing furniture-styling tools per room":"Usa gli strumenti di stile mobili di Lamsa per ogni stanza","/ year":"/ anno","14-day free trial, cancel anytime":"Prova gratuita di 14 giorni, annulla quando vuoi","Starting…":"Avvio…","Start free trial":"Avvia la prova gratuita","Something went wrong, please try again":"Qualcosa è andato storto, riprova","Your Projects":"I Tuoi Progetti","New Project":"Nuovo Progetto","No projects yet — create your first one.":"Nessun progetto ancora — crea il primo.",Delete:"Elimina",Projects:"Progetti",Saved:"Salvato","Save failed":"Salvataggio non riuscito","Export plan":"Esporta planimetria","Saving…":"Salvataggio…",Save:"Salva",Select:"Seleziona","Add Room":"Aggiungi Stanza","Add Door":"Aggiungi Porta","Add Window":"Aggiungi Finestra","Delete Room":"Elimina Stanza","Delete Opening":"Elimina Apertura",W:"L",H:"A","Reset camera":"Reimposta fotocamera","Untitled Project":"Progetto senza titolo","Add Polygon Room":"Aggiungi Stanza a Forma Libera","Add Stairs":"Aggiungi Scale","Delete Stairs":"Elimina Scale","Add Column":"Aggiungi Pilastro","Delete Column":"Elimina Pilastro","Ground Floor":"Piano Terra",Floor:"Piano","Add Floor":"Aggiungi Piano","Dollhouse view":"Vista in sezione","Render view":"Vista renderizzata","Show Foundation":"Mostra fondamenta","Export DXF":"Esporta DXF","Export IFC":"Esporta IFC","Code Standard":"Normativa edilizia","IRC (US)":"IRC (USA)","EU (DIN/EN)":"UE (DIN/EN)",Standard:"Normativa","Back to Home":"Torna alla Home","Generate realistic image":"Genera immagine realistica","Optional — uses 1 credit from your weekly/monthly plan":"Opzionale — usa 1 credito del tuo piano settimanale/mensile","Turning your design into a photoreal render...":"Trasformazione del tuo progetto in un rendering fotorealistico...","Takes 20-40 seconds":"Richiede 20-40 secondi",Close:"Chiudi","Image upload failed. Please try again.":"Caricamento dell'immagine non riuscito, riprova","Error generating image. Please try again.":"Errore durante la generazione dell'immagine, riprova","Connection error. Please try again.":"Errore di connessione, riprova","You're out of credits":"Hai esaurito i crediti","Subscribe to generate photoreal renders of your floor plans.":"Abbonati per generare rendering fotorealistici delle tue planimetrie.",Weekly:"Settimanale",Monthly:"Mensile",credits:"crediti",Download:"Scarica",Bedroom:"Camera da letto","Living Room":"Soggiorno","Dining Room":"Sala da pranzo",Office:"Ufficio",Kitchen:"Cucina",Bathroom:"Bagno",Hallway:"Corridoio",Closet:"Ripostiglio",Garage:"Garage",Other:"Altro",Min:"Min.",Width:"Larghezza","Tap to place each corner, then double-tap (or tap the first corner again) to finish":"Tocca per posizionare ogni angolo, poi tocca due volte (o tocca di nuovo il primo angolo) per terminare"},ru:{"Lamsa Engineers":"Lamsa Inzhenery","Please sign in to continue.":"Voydite, chtoby prodolzhit.","Sign in":"Vkhod","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Proektiruyte polnotsennye plany pomeshcheniy, prosmatrivayte ikh v 3D i eksportiruyte nastoyashchie arkhitekturnye dokumenty.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Vash dostup k Engineers zavershilsya. Oformite podpisku snova, chtoby prodolzhit proektirovat polnye plany.","Rectangular rooms, doors & windows, single-floor plans":"Pryamougolnye komnaty, dveri i okna, odnoetazhnye plany","Live 3D preview of your design":"Zhivoy 3D-predprosmotr vashego proekta","Printable floor plan export":"Eksport plana dlya pechati","Use Lamsa's existing furniture-styling tools per room":"Ispolzuyte sushchestvuyushchie instrumenty stilizatsii mebeli Lamsa dlya kazhdoy komnaty","/ year":"/ god","14-day free trial, cancel anytime":"14-dnevnyy besplatnyy probnyy period, otmena v lyuboy moment","Starting…":"Zapusk…","Start free trial":"Nachat besplatnyy probnyy period","Something went wrong, please try again":"Chto-to poshlo ne tak, poprobuyte snova","Your Projects":"Vashi Proekty","New Project":"Novyy Proekt","No projects yet — create your first one.":"Poka net proektov — sozdayte pervyy.",Delete:"Udalit",Projects:"Proekty",Saved:"Sokhraneno","Save failed":"Oshibka sokhraneniya","Export plan":"Eksportirovat plan","Saving…":"Sokhranenie…",Save:"Sokhranit",Select:"Vybrat","Add Room":"Dobavit Komnatu","Add Door":"Dobavit Dver","Add Window":"Dobavit Okno","Delete Room":"Udalit Komnatu","Delete Opening":"Udalit Proyom",W:"Sh",H:"V","Reset camera":"Sbrosit kameru","Untitled Project":"Proekt bez nazvaniya","Add Polygon Room":"Dobavit Komnatu Svobodnoy Formy","Add Stairs":"Dobavit Lestnitsu","Delete Stairs":"Udalit Lestnitsu","Add Column":"Dobavit Kolonnu","Delete Column":"Udalit Kolonnu","Ground Floor":"Pervyy Etazh",Floor:"Etazh","Add Floor":"Dobavit Etazh","Dollhouse view":"Razrez doma","Render view":"Render vid","Show Foundation":"Pokazat Fundament","Export DXF":"Eksportirovat DXF","Export IFC":"Eksportirovat IFC","Code Standard":"Stroitelnyy Standart","IRC (US)":"IRC (SSHA)","EU (DIN/EN)":"ES (DIN/EN)",Standard:"Standart","Back to Home":"Na glavnuyu","Generate realistic image":"Sozdat realistichnoe izobrazhenie","Optional — uses 1 credit from your weekly/monthly plan":"Neobyazatelno — ispolzuet 1 kredit iz vashego nedelnogo/mesyachnogo plana","Turning your design into a photoreal render...":"Prevrashchaem vash proekt v fotorealistichnoe izobrazhenie...","Takes 20-40 seconds":"Zanimaet 20-40 sekund",Close:"Zakryt","Image upload failed. Please try again.":"Ne udalos zagruzit izobrazhenie, poprobuyte snova","Error generating image. Please try again.":"Oshibka pri sozdanii izobrazheniya, poprobuyte snova","Connection error. Please try again.":"Oshibka soedineniya, poprobuyte snova","You're out of credits":"U vas konchilis kredity","Subscribe to generate photoreal renders of your floor plans.":"Oformite podpisku, chtoby sozdavat realistichnye izobrazheniya vashikh planov.",Weekly:"Nedelnyy",Monthly:"Mesyachnyy",credits:"kreditov",Download:"Skachat",Bedroom:"Spalnya","Living Room":"Gostinaya","Dining Room":"Stolovaya",Office:"Kabinet",Kitchen:"Kukhnya",Bathroom:"Vannaya",Hallway:"Koridor",Closet:"Kladovaya",Garage:"Garazh",Other:"Drugoe",Min:"Min.",Width:"Shirina","Tap to place each corner, then double-tap (or tap the first corner again) to finish":"Nazhimayte, chtoby postavit kazhdyy ugol, zatem nazhmite dvazhdy (ili snova nazhmite na pervyy ugol), chtoby zavershit"}};function ib(){try{return localStorage.getItem("lamsa_lang")||"en"}catch{return"en"}}function rb(){const[t,e]=Ae.useState(ib);Ae.useEffect(()=>{document.documentElement.setAttribute("dir",t==="ar"?"rtl":"ltr"),document.documentElement.setAttribute("lang",t)},[t]),Ae.useEffect(()=>{function i(r){r.key==="lamsa_lang"&&e(r.newValue||"en")}return window.addEventListener("storage",i),()=>window.removeEventListener("storage",i)},[]);const n=Ae.useCallback(i=>t==="ar"?nb[i]||i:t==="en"?i:qg[t]&&qg[t][i]||i,[t]);return{lang:t,t:n}}function ob(t){return!!t&&(t.status==="active"||t.status==="trialing")}function sb(){const{t}=rb(),[e,n]=Ae.useState("loading"),[i,r]=Ae.useState(null),[o,s]=Ae.useState([]),[a,l]=Ae.useState(null);Ae.useEffect(()=>{qS().then(g=>{if(g.status===401){n("signin");return}if(!g.ok||!g.data){n("signin");return}const y=g.data.engineerSubscription;if(r(y?y.status:null),!ob(y)){n("paywall");return}u()})},[]);function u(){KS().then(g=>{g.ok&&g.data&&s(g.data.projects||[]),n("list")})}function c(){l({projectId:null,project:my(t("Untitled Project"))}),n("editor")}function f(g){ZS(g).then(y=>{if(y.status===403){n("paywall");return}!y.ok||!y.data||(l({projectId:g,project:y.data.project}),n("editor"))})}function h(g){QS(g).then(()=>u())}async function p(g,y){const m=await JS(g,y);return m.status===403?(n("paywall"),{ok:!1,error:"Engineers access required"}):(m.ok&&m.data&&l(d=>({...d,projectId:m.data.projectId})),m.ok?{ok:!0}:{ok:!1,error:m.data&&m.data.error||"Save failed"})}return e==="loading"?null:e==="signin"?te.jsxs("div",{style:{maxWidth:420,margin:"100px auto",textAlign:"center",fontFamily:"sans-serif"},children:[te.jsx("h1",{style:{fontSize:20,fontWeight:800,marginBottom:12},children:t("Lamsa Engineers")}),te.jsx("p",{style:{color:"#6b7280",marginBottom:20},children:t("Please sign in to continue.")}),te.jsx("a",{href:"/lamsa-auth.html?return=engineers/index.html",style:{display:"inline-block",background:"#c9a96e",color:"#1b1e22",padding:"12px 24px",borderRadius:10,fontWeight:800,textDecoration:"none"},children:t("Sign in")})]}):e==="paywall"?te.jsx(tE,{status:i,t}):e==="editor"&&a?te.jsx(tb,{initialProject:a.project,projectId:a.projectId,onBack:()=>u(),onSave:p,t}):te.jsx(nE,{projects:o,onOpen:f,onCreate:c,onDelete:h,t})}l_(document.getElementById("root")).render(te.jsx(Fy.StrictMode,{children:te.jsx(sb,{})}));
