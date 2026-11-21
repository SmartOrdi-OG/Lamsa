(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function Sy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Kg={exports:{}},Ru={},Zg={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ca=Symbol.for("react.element"),Ey=Symbol.for("react.portal"),My=Symbol.for("react.fragment"),wy=Symbol.for("react.strict_mode"),Ty=Symbol.for("react.profiler"),Ay=Symbol.for("react.provider"),Ry=Symbol.for("react.context"),Cy=Symbol.for("react.forward_ref"),by=Symbol.for("react.suspense"),Py=Symbol.for("react.memo"),Ly=Symbol.for("react.lazy"),Gh=Symbol.iterator;function Dy(t){return t===null||typeof t!="object"?null:(t=Gh&&t[Gh]||t["@@iterator"],typeof t=="function"?t:null)}var Jg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qg=Object.assign,e0={};function ps(t,e,n){this.props=t,this.context=e,this.refs=e0,this.updater=n||Jg}ps.prototype.isReactComponent={};ps.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ps.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function t0(){}t0.prototype=ps.prototype;function bf(t,e,n){this.props=t,this.context=e,this.refs=e0,this.updater=n||Jg}var Pf=bf.prototype=new t0;Pf.constructor=bf;Qg(Pf,ps.prototype);Pf.isPureReactComponent=!0;var Vh=Array.isArray,n0=Object.prototype.hasOwnProperty,Lf={current:null},i0={key:!0,ref:!0,__self:!0,__source:!0};function r0(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)n0.call(e,i)&&!i0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ca,type:t,key:o,ref:s,props:r,_owner:Lf.current}}function Iy(t,e){return{$$typeof:Ca,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Df(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ca}function Ny(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Wh=/\/+/g;function ic(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ny(""+t.key):e.toString(36)}function Nl(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Ca:case Ey:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+ic(s,0):i,Vh(r)?(n="",t!=null&&(n=t.replace(Wh,"$&/")+"/"),Nl(r,e,n,"",function(u){return u})):r!=null&&(Df(r)&&(r=Iy(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Wh,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",Vh(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+ic(o,a);s+=Nl(o,e,n,l,r)}else if(l=Dy(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+ic(o,a++),s+=Nl(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function ka(t,e,n){if(t==null)return t;var i=[],r=0;return Nl(t,i,"","",function(o){return e.call(n,o,r++)}),i}function Uy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var un={current:null},Ul={transition:null},Oy={ReactCurrentDispatcher:un,ReactCurrentBatchConfig:Ul,ReactCurrentOwner:Lf};function o0(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:ka,forEach:function(t,e,n){ka(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ka(t,function(){e++}),e},toArray:function(t){return ka(t,function(e){return e})||[]},only:function(t){if(!Df(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=ps;qe.Fragment=My;qe.Profiler=Ty;qe.PureComponent=bf;qe.StrictMode=wy;qe.Suspense=by;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Oy;qe.act=o0;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Qg({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Lf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)n0.call(e,l)&&!i0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Ca,type:t.type,key:r,ref:o,props:i,_owner:s}};qe.createContext=function(t){return t={$$typeof:Ry,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ay,_context:t},t.Consumer=t};qe.createElement=r0;qe.createFactory=function(t){var e=r0.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:Cy,render:t}};qe.isValidElement=Df;qe.lazy=function(t){return{$$typeof:Ly,_payload:{_status:-1,_result:t},_init:Uy}};qe.memo=function(t,e){return{$$typeof:Py,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=Ul.transition;Ul.transition={};try{t()}finally{Ul.transition=e}};qe.unstable_act=o0;qe.useCallback=function(t,e){return un.current.useCallback(t,e)};qe.useContext=function(t){return un.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return un.current.useDeferredValue(t)};qe.useEffect=function(t,e){return un.current.useEffect(t,e)};qe.useId=function(){return un.current.useId()};qe.useImperativeHandle=function(t,e,n){return un.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return un.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return un.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return un.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return un.current.useReducer(t,e,n)};qe.useRef=function(t){return un.current.useRef(t)};qe.useState=function(t){return un.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return un.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return un.current.useTransition()};qe.version="18.3.1";Zg.exports=qe;var Re=Zg.exports;const Fy=Sy(Re);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zy=Re,ky=Symbol.for("react.element"),By=Symbol.for("react.fragment"),Hy=Object.prototype.hasOwnProperty,Gy=zy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vy={key:!0,ref:!0,__self:!0,__source:!0};function s0(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)Hy.call(e,i)&&!Vy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ky,type:t,key:o,ref:s,props:r,_owner:Gy.current}}Ru.Fragment=By;Ru.jsx=s0;Ru.jsxs=s0;Kg.exports=Ru;var re=Kg.exports,a0={exports:{}},Cn={},l0={exports:{}},u0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,B){var z=U.length;U.push(B);e:for(;0<z;){var Q=z-1>>>1,ne=U[Q];if(0<r(ne,B))U[Q]=B,U[z]=ne,z=Q;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var B=U[0],z=U.pop();if(z!==B){U[0]=z;e:for(var Q=0,ne=U.length,Y=ne>>>1;Q<Y;){var ie=2*(Q+1)-1,de=U[ie],ge=ie+1,me=U[ge];if(0>r(de,z))ge<ne&&0>r(me,de)?(U[Q]=me,U[ge]=z,Q=ge):(U[Q]=de,U[ie]=z,Q=ie);else if(ge<ne&&0>r(me,z))U[Q]=me,U[ge]=z,Q=ge;else break e}}return B}function r(U,B){var z=U.sortIndex-B.sortIndex;return z!==0?z:U.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,h=null,f=3,p=!1,m=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(U){for(var B=n(u);B!==null;){if(B.callback===null)i(u);else if(B.startTime<=U)i(u),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(u)}}function _(U){if(y=!1,v(U),!m)if(n(l)!==null)m=!0,$(C);else{var B=n(u);B!==null&&K(_,B.startTime-U)}}function C(U,B){m=!1,y&&(y=!1,d(P),P=-1),p=!0;var z=f;try{for(v(B),h=n(l);h!==null&&(!(h.expirationTime>B)||U&&!O());){var Q=h.callback;if(typeof Q=="function"){h.callback=null,f=h.priorityLevel;var ne=Q(h.expirationTime<=B);B=t.unstable_now(),typeof ne=="function"?h.callback=ne:h===n(l)&&i(l),v(B)}else i(l);h=n(l)}if(h!==null)var Y=!0;else{var ie=n(u);ie!==null&&K(_,ie.startTime-B),Y=!1}return Y}finally{h=null,f=z,p=!1}}var S=!1,A=null,P=-1,E=5,T=-1;function O(){return!(t.unstable_now()-T<E)}function X(){if(A!==null){var U=t.unstable_now();T=U;var B=!0;try{B=A(!0,U)}finally{B?te():(S=!1,A=null)}}else S=!1}var te;if(typeof x=="function")te=function(){x(X)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,W=L.port2;L.port1.onmessage=X,te=function(){W.postMessage(null)}}else te=function(){g(X,0)};function $(U){A=U,S||(S=!0,te())}function K(U,B){P=g(function(){U(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,$(C))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(f){case 1:case 2:case 3:var B=3;break;default:B=f}var z=f;f=B;try{return U()}finally{f=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,B){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var z=f;f=U;try{return B()}finally{f=z}},t.unstable_scheduleCallback=function(U,B,z){var Q=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?Q+z:Q):z=Q,U){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=z+ne,U={id:c++,callback:B,priorityLevel:U,startTime:z,expirationTime:ne,sortIndex:-1},z>Q?(U.sortIndex=z,e(u,U),n(l)===null&&U===n(u)&&(y?(d(P),P=-1):y=!0,K(_,z-Q))):(U.sortIndex=ne,e(l,U),m||p||(m=!0,$(C))),U},t.unstable_shouldYield=O,t.unstable_wrapCallback=function(U){var B=f;return function(){var z=f;f=B;try{return U.apply(this,arguments)}finally{f=z}}}})(u0);l0.exports=u0;var Wy=l0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xy=Re,Rn=Wy;function he(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c0=new Set,na={};function no(t,e){ts(t,e),ts(t+"Capture",e)}function ts(t,e){for(na[t]=e,t=0;t<e.length;t++)c0.add(e[t])}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vd=Object.prototype.hasOwnProperty,jy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xh={},jh={};function $y(t){return vd.call(jh,t)?!0:vd.call(Xh,t)?!1:jy.test(t)?jh[t]=!0:(Xh[t]=!0,!1)}function Yy(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function qy(t,e,n,i){if(e===null||typeof e>"u"||Yy(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function cn(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xt[t]=new cn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xt[e]=new cn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xt[t]=new cn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xt[t]=new cn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xt[t]=new cn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xt[t]=new cn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xt[t]=new cn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xt[t]=new cn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xt[t]=new cn(t,5,!1,t.toLowerCase(),null,!1,!1)});var If=/[\-:]([a-z])/g;function Nf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(If,Nf);Xt[e]=new cn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(If,Nf);Xt[e]=new cn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(If,Nf);Xt[e]=new cn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xt[t]=new cn(t,1,!1,t.toLowerCase(),null,!1,!1)});Xt.xlinkHref=new cn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xt[t]=new cn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Uf(t,e,n,i){var r=Xt.hasOwnProperty(e)?Xt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(qy(e,n,r,i)&&(n=null),i||r===null?$y(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Gi=Xy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ba=Symbol.for("react.element"),bo=Symbol.for("react.portal"),Po=Symbol.for("react.fragment"),Of=Symbol.for("react.strict_mode"),_d=Symbol.for("react.profiler"),d0=Symbol.for("react.provider"),f0=Symbol.for("react.context"),Ff=Symbol.for("react.forward_ref"),yd=Symbol.for("react.suspense"),xd=Symbol.for("react.suspense_list"),zf=Symbol.for("react.memo"),qi=Symbol.for("react.lazy"),h0=Symbol.for("react.offscreen"),$h=Symbol.iterator;function Ms(t){return t===null||typeof t!="object"?null:(t=$h&&t[$h]||t["@@iterator"],typeof t=="function"?t:null)}var vt=Object.assign,rc;function zs(t){if(rc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);rc=e&&e[1]||""}return`
`+rc+t}var oc=!1;function sc(t,e){if(!t||oc)return"";oc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{oc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?zs(t):""}function Ky(t){switch(t.tag){case 5:return zs(t.type);case 16:return zs("Lazy");case 13:return zs("Suspense");case 19:return zs("SuspenseList");case 0:case 2:case 15:return t=sc(t.type,!1),t;case 11:return t=sc(t.type.render,!1),t;case 1:return t=sc(t.type,!0),t;default:return""}}function Sd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Po:return"Fragment";case bo:return"Portal";case _d:return"Profiler";case Of:return"StrictMode";case yd:return"Suspense";case xd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case f0:return(t.displayName||"Context")+".Consumer";case d0:return(t._context.displayName||"Context")+".Provider";case Ff:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case zf:return e=t.displayName||null,e!==null?e:Sd(t.type)||"Memo";case qi:e=t._payload,t=t._init;try{return Sd(t(e))}catch{}}return null}function Zy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sd(e);case 8:return e===Of?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function p0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Jy(t){var e=p0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ha(t){t._valueTracker||(t._valueTracker=Jy(t))}function m0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=p0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Yl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ed(t,e){var n=e.checked;return vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Yh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function g0(t,e){e=e.checked,e!=null&&Uf(t,"checked",e,!1)}function Md(t,e){g0(t,e);var n=mr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wd(t,e.type,n):e.hasOwnProperty("defaultValue")&&wd(t,e.type,mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function qh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wd(t,e,n){(e!=="number"||Yl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ks=Array.isArray;function Xo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+mr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Td(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(he(91));return vt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Kh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(he(92));if(ks(n)){if(1<n.length)throw Error(he(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:mr(n)}}function v0(t,e){var n=mr(e.value),i=mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Zh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function _0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ad(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?_0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ga,y0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ga=Ga||document.createElement("div"),Ga.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ga.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ia(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Vs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qy=["Webkit","ms","Moz","O"];Object.keys(Vs).forEach(function(t){Qy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Vs[e]=Vs[t]})});function x0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Vs.hasOwnProperty(t)&&Vs[t]?(""+e).trim():e+"px"}function S0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=x0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var ex=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rd(t,e){if(e){if(ex[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(he(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(he(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(he(61))}if(e.style!=null&&typeof e.style!="object")throw Error(he(62))}}function Cd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bd=null;function kf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pd=null,jo=null,$o=null;function Jh(t){if(t=La(t)){if(typeof Pd!="function")throw Error(he(280));var e=t.stateNode;e&&(e=Du(e),Pd(t.stateNode,t.type,e))}}function E0(t){jo?$o?$o.push(t):$o=[t]:jo=t}function M0(){if(jo){var t=jo,e=$o;if($o=jo=null,Jh(t),e)for(t=0;t<e.length;t++)Jh(e[t])}}function w0(t,e){return t(e)}function T0(){}var ac=!1;function A0(t,e,n){if(ac)return t(e,n);ac=!0;try{return w0(t,e,n)}finally{ac=!1,(jo!==null||$o!==null)&&(T0(),M0())}}function ra(t,e){var n=t.stateNode;if(n===null)return null;var i=Du(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(he(231,e,typeof n));return n}var Ld=!1;if(Fi)try{var ws={};Object.defineProperty(ws,"passive",{get:function(){Ld=!0}}),window.addEventListener("test",ws,ws),window.removeEventListener("test",ws,ws)}catch{Ld=!1}function tx(t,e,n,i,r,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ws=!1,ql=null,Kl=!1,Dd=null,nx={onError:function(t){Ws=!0,ql=t}};function ix(t,e,n,i,r,o,s,a,l){Ws=!1,ql=null,tx.apply(nx,arguments)}function rx(t,e,n,i,r,o,s,a,l){if(ix.apply(this,arguments),Ws){if(Ws){var u=ql;Ws=!1,ql=null}else throw Error(he(198));Kl||(Kl=!0,Dd=u)}}function io(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function R0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Qh(t){if(io(t)!==t)throw Error(he(188))}function ox(t){var e=t.alternate;if(!e){if(e=io(t),e===null)throw Error(he(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Qh(r),t;if(o===i)return Qh(r),e;o=o.sibling}throw Error(he(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(he(189))}}if(n.alternate!==i)throw Error(he(190))}if(n.tag!==3)throw Error(he(188));return n.stateNode.current===n?t:e}function C0(t){return t=ox(t),t!==null?b0(t):null}function b0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=b0(t);if(e!==null)return e;t=t.sibling}return null}var P0=Rn.unstable_scheduleCallback,ep=Rn.unstable_cancelCallback,sx=Rn.unstable_shouldYield,ax=Rn.unstable_requestPaint,Tt=Rn.unstable_now,lx=Rn.unstable_getCurrentPriorityLevel,Bf=Rn.unstable_ImmediatePriority,L0=Rn.unstable_UserBlockingPriority,Zl=Rn.unstable_NormalPriority,ux=Rn.unstable_LowPriority,D0=Rn.unstable_IdlePriority,Cu=null,mi=null;function cx(t){if(mi&&typeof mi.onCommitFiberRoot=="function")try{mi.onCommitFiberRoot(Cu,t,void 0,(t.current.flags&128)===128)}catch{}}var oi=Math.clz32?Math.clz32:hx,dx=Math.log,fx=Math.LN2;function hx(t){return t>>>=0,t===0?32:31-(dx(t)/fx|0)|0}var Va=64,Wa=4194304;function Bs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Jl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=Bs(a):(o&=s,o!==0&&(i=Bs(o)))}else s=n&~r,s!==0?i=Bs(s):o!==0&&(i=Bs(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-oi(e),r=1<<n,i|=t[n],e&=~r;return i}function px(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-oi(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=px(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Id(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function I0(){var t=Va;return Va<<=1,!(Va&4194240)&&(Va=64),t}function lc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ba(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-oi(e),t[e]=n}function gx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-oi(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function Hf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-oi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Qe=0;function N0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var U0,Gf,O0,F0,z0,Nd=!1,Xa=[],rr=null,or=null,sr=null,oa=new Map,sa=new Map,Zi=[],vx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tp(t,e){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":oa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":sa.delete(e.pointerId)}}function Ts(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=La(e),e!==null&&Gf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function _x(t,e,n,i,r){switch(e){case"focusin":return rr=Ts(rr,t,e,n,i,r),!0;case"dragenter":return or=Ts(or,t,e,n,i,r),!0;case"mouseover":return sr=Ts(sr,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return oa.set(o,Ts(oa.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,sa.set(o,Ts(sa.get(o)||null,t,e,n,i,r)),!0}return!1}function k0(t){var e=Or(t.target);if(e!==null){var n=io(e);if(n!==null){if(e=n.tag,e===13){if(e=R0(n),e!==null){t.blockedOn=e,z0(t.priority,function(){O0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ol(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ud(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);bd=i,n.target.dispatchEvent(i),bd=null}else return e=La(n),e!==null&&Gf(e),t.blockedOn=n,!1;e.shift()}return!0}function np(t,e,n){Ol(t)&&n.delete(e)}function yx(){Nd=!1,rr!==null&&Ol(rr)&&(rr=null),or!==null&&Ol(or)&&(or=null),sr!==null&&Ol(sr)&&(sr=null),oa.forEach(np),sa.forEach(np)}function As(t,e){t.blockedOn===e&&(t.blockedOn=null,Nd||(Nd=!0,Rn.unstable_scheduleCallback(Rn.unstable_NormalPriority,yx)))}function aa(t){function e(r){return As(r,t)}if(0<Xa.length){As(Xa[0],t);for(var n=1;n<Xa.length;n++){var i=Xa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(rr!==null&&As(rr,t),or!==null&&As(or,t),sr!==null&&As(sr,t),oa.forEach(e),sa.forEach(e),n=0;n<Zi.length;n++)i=Zi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Zi.length&&(n=Zi[0],n.blockedOn===null);)k0(n),n.blockedOn===null&&Zi.shift()}var Yo=Gi.ReactCurrentBatchConfig,Ql=!0;function xx(t,e,n,i){var r=Qe,o=Yo.transition;Yo.transition=null;try{Qe=1,Vf(t,e,n,i)}finally{Qe=r,Yo.transition=o}}function Sx(t,e,n,i){var r=Qe,o=Yo.transition;Yo.transition=null;try{Qe=4,Vf(t,e,n,i)}finally{Qe=r,Yo.transition=o}}function Vf(t,e,n,i){if(Ql){var r=Ud(t,e,n,i);if(r===null)_c(t,e,i,eu,n),tp(t,i);else if(_x(r,t,e,n,i))i.stopPropagation();else if(tp(t,i),e&4&&-1<vx.indexOf(t)){for(;r!==null;){var o=La(r);if(o!==null&&U0(o),o=Ud(t,e,n,i),o===null&&_c(t,e,i,eu,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else _c(t,e,i,null,n)}}var eu=null;function Ud(t,e,n,i){if(eu=null,t=kf(i),t=Or(t),t!==null)if(e=io(t),e===null)t=null;else if(n=e.tag,n===13){if(t=R0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return eu=t,null}function B0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lx()){case Bf:return 1;case L0:return 4;case Zl:case ux:return 16;case D0:return 536870912;default:return 16}default:return 16}}var Qi=null,Wf=null,Fl=null;function H0(){if(Fl)return Fl;var t,e=Wf,n=e.length,i,r="value"in Qi?Qi.value:Qi.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return Fl=r.slice(t,1<i?1-i:void 0)}function zl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ja(){return!0}function ip(){return!1}function bn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ja:ip,this.isPropagationStopped=ip,this}return vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ja)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ja)},persist:function(){},isPersistent:ja}),e}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xf=bn(ms),Pa=vt({},ms,{view:0,detail:0}),Ex=bn(Pa),uc,cc,Rs,bu=vt({},Pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Rs&&(Rs&&t.type==="mousemove"?(uc=t.screenX-Rs.screenX,cc=t.screenY-Rs.screenY):cc=uc=0,Rs=t),uc)},movementY:function(t){return"movementY"in t?t.movementY:cc}}),rp=bn(bu),Mx=vt({},bu,{dataTransfer:0}),wx=bn(Mx),Tx=vt({},Pa,{relatedTarget:0}),dc=bn(Tx),Ax=vt({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),Rx=bn(Ax),Cx=vt({},ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bx=bn(Cx),Px=vt({},ms,{data:0}),op=bn(Px),Lx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ix={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ix[t])?!!e[t]:!1}function jf(){return Nx}var Ux=vt({},Pa,{key:function(t){if(t.key){var e=Lx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=zl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Dx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jf,charCode:function(t){return t.type==="keypress"?zl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ox=bn(Ux),Fx=vt({},bu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sp=bn(Fx),zx=vt({},Pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jf}),kx=bn(zx),Bx=vt({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hx=bn(Bx),Gx=vt({},bu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Vx=bn(Gx),Wx=[9,13,27,32],$f=Fi&&"CompositionEvent"in window,Xs=null;Fi&&"documentMode"in document&&(Xs=document.documentMode);var Xx=Fi&&"TextEvent"in window&&!Xs,G0=Fi&&(!$f||Xs&&8<Xs&&11>=Xs),ap=" ",lp=!1;function V0(t,e){switch(t){case"keyup":return Wx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function W0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Lo=!1;function jx(t,e){switch(t){case"compositionend":return W0(e);case"keypress":return e.which!==32?null:(lp=!0,ap);case"textInput":return t=e.data,t===ap&&lp?null:t;default:return null}}function $x(t,e){if(Lo)return t==="compositionend"||!$f&&V0(t,e)?(t=H0(),Fl=Wf=Qi=null,Lo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return G0&&e.locale!=="ko"?null:e.data;default:return null}}var Yx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function up(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Yx[t.type]:e==="textarea"}function X0(t,e,n,i){E0(i),e=tu(e,"onChange"),0<e.length&&(n=new Xf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var js=null,la=null;function qx(t){nv(t,0)}function Pu(t){var e=No(t);if(m0(e))return t}function Kx(t,e){if(t==="change")return e}var j0=!1;if(Fi){var fc;if(Fi){var hc="oninput"in document;if(!hc){var cp=document.createElement("div");cp.setAttribute("oninput","return;"),hc=typeof cp.oninput=="function"}fc=hc}else fc=!1;j0=fc&&(!document.documentMode||9<document.documentMode)}function dp(){js&&(js.detachEvent("onpropertychange",$0),la=js=null)}function $0(t){if(t.propertyName==="value"&&Pu(la)){var e=[];X0(e,la,t,kf(t)),A0(qx,e)}}function Zx(t,e,n){t==="focusin"?(dp(),js=e,la=n,js.attachEvent("onpropertychange",$0)):t==="focusout"&&dp()}function Jx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Pu(la)}function Qx(t,e){if(t==="click")return Pu(e)}function eS(t,e){if(t==="input"||t==="change")return Pu(e)}function tS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ai=typeof Object.is=="function"?Object.is:tS;function ua(t,e){if(ai(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!vd.call(e,r)||!ai(t[r],e[r]))return!1}return!0}function fp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hp(t,e){var n=fp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fp(n)}}function Y0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Y0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function q0(){for(var t=window,e=Yl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Yl(t.document)}return e}function Yf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function nS(t){var e=q0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Y0(n.ownerDocument.documentElement,n)){if(i!==null&&Yf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=hp(n,o);var s=hp(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var iS=Fi&&"documentMode"in document&&11>=document.documentMode,Do=null,Od=null,$s=null,Fd=!1;function pp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fd||Do==null||Do!==Yl(i)||(i=Do,"selectionStart"in i&&Yf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),$s&&ua($s,i)||($s=i,i=tu(Od,"onSelect"),0<i.length&&(e=new Xf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Do)))}function $a(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Io={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionend:$a("Transition","TransitionEnd")},pc={},K0={};Fi&&(K0=document.createElement("div").style,"AnimationEvent"in window||(delete Io.animationend.animation,delete Io.animationiteration.animation,delete Io.animationstart.animation),"TransitionEvent"in window||delete Io.transitionend.transition);function Lu(t){if(pc[t])return pc[t];if(!Io[t])return t;var e=Io[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in K0)return pc[t]=e[n];return t}var Z0=Lu("animationend"),J0=Lu("animationiteration"),Q0=Lu("animationstart"),ev=Lu("transitionend"),tv=new Map,mp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(t,e){tv.set(t,e),no(e,[t])}for(var mc=0;mc<mp.length;mc++){var gc=mp[mc],rS=gc.toLowerCase(),oS=gc[0].toUpperCase()+gc.slice(1);_r(rS,"on"+oS)}_r(Z0,"onAnimationEnd");_r(J0,"onAnimationIteration");_r(Q0,"onAnimationStart");_r("dblclick","onDoubleClick");_r("focusin","onFocus");_r("focusout","onBlur");_r(ev,"onTransitionEnd");ts("onMouseEnter",["mouseout","mouseover"]);ts("onMouseLeave",["mouseout","mouseover"]);ts("onPointerEnter",["pointerout","pointerover"]);ts("onPointerLeave",["pointerout","pointerover"]);no("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));no("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));no("onBeforeInput",["compositionend","keypress","textInput","paste"]);no("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));no("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));no("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hs));function gp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,rx(i,e,void 0,t),t.currentTarget=null}function nv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;gp(r,a,u),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;gp(r,a,u),o=l}}}if(Kl)throw t=Dd,Kl=!1,Dd=null,t}function at(t,e){var n=e[Gd];n===void 0&&(n=e[Gd]=new Set);var i=t+"__bubble";n.has(i)||(iv(e,t,2,!1),n.add(i))}function vc(t,e,n){var i=0;e&&(i|=4),iv(n,t,i,e)}var Ya="_reactListening"+Math.random().toString(36).slice(2);function ca(t){if(!t[Ya]){t[Ya]=!0,c0.forEach(function(n){n!=="selectionchange"&&(sS.has(n)||vc(n,!1,t),vc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ya]||(e[Ya]=!0,vc("selectionchange",!1,e))}}function iv(t,e,n,i){switch(B0(e)){case 1:var r=xx;break;case 4:r=Sx;break;default:r=Vf}n=r.bind(null,e,n,t),r=void 0,!Ld||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function _c(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Or(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}A0(function(){var u=o,c=kf(n),h=[];e:{var f=tv.get(t);if(f!==void 0){var p=Xf,m=t;switch(t){case"keypress":if(zl(n)===0)break e;case"keydown":case"keyup":p=Ox;break;case"focusin":m="focus",p=dc;break;case"focusout":m="blur",p=dc;break;case"beforeblur":case"afterblur":p=dc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=rp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=wx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=kx;break;case Z0:case J0:case Q0:p=Rx;break;case ev:p=Hx;break;case"scroll":p=Ex;break;case"wheel":p=Vx;break;case"copy":case"cut":case"paste":p=bx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=sp}var y=(e&4)!==0,g=!y&&t==="scroll",d=y?f!==null?f+"Capture":null:f;y=[];for(var x=u,v;x!==null;){v=x;var _=v.stateNode;if(v.tag===5&&_!==null&&(v=_,d!==null&&(_=ra(x,d),_!=null&&y.push(da(x,_,v)))),g)break;x=x.return}0<y.length&&(f=new p(f,m,null,n,c),h.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==bd&&(m=n.relatedTarget||n.fromElement)&&(Or(m)||m[zi]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=u,m=m?Or(m):null,m!==null&&(g=io(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=u),p!==m)){if(y=rp,_="onMouseLeave",d="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(y=sp,_="onPointerLeave",d="onPointerEnter",x="pointer"),g=p==null?f:No(p),v=m==null?f:No(m),f=new y(_,x+"leave",p,n,c),f.target=g,f.relatedTarget=v,_=null,Or(c)===u&&(y=new y(d,x+"enter",m,n,c),y.target=v,y.relatedTarget=g,_=y),g=_,p&&m)t:{for(y=p,d=m,x=0,v=y;v;v=so(v))x++;for(v=0,_=d;_;_=so(_))v++;for(;0<x-v;)y=so(y),x--;for(;0<v-x;)d=so(d),v--;for(;x--;){if(y===d||d!==null&&y===d.alternate)break t;y=so(y),d=so(d)}y=null}else y=null;p!==null&&vp(h,f,p,y,!1),m!==null&&g!==null&&vp(h,g,m,y,!0)}}e:{if(f=u?No(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var C=Kx;else if(up(f))if(j0)C=eS;else{C=Jx;var S=Zx}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=Qx);if(C&&(C=C(t,u))){X0(h,C,n,c);break e}S&&S(t,f,u),t==="focusout"&&(S=f._wrapperState)&&S.controlled&&f.type==="number"&&wd(f,"number",f.value)}switch(S=u?No(u):window,t){case"focusin":(up(S)||S.contentEditable==="true")&&(Do=S,Od=u,$s=null);break;case"focusout":$s=Od=Do=null;break;case"mousedown":Fd=!0;break;case"contextmenu":case"mouseup":case"dragend":Fd=!1,pp(h,n,c);break;case"selectionchange":if(iS)break;case"keydown":case"keyup":pp(h,n,c)}var A;if($f)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Lo?V0(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(G0&&n.locale!=="ko"&&(Lo||P!=="onCompositionStart"?P==="onCompositionEnd"&&Lo&&(A=H0()):(Qi=c,Wf="value"in Qi?Qi.value:Qi.textContent,Lo=!0)),S=tu(u,P),0<S.length&&(P=new op(P,t,null,n,c),h.push({event:P,listeners:S}),A?P.data=A:(A=W0(n),A!==null&&(P.data=A)))),(A=Xx?jx(t,n):$x(t,n))&&(u=tu(u,"onBeforeInput"),0<u.length&&(c=new op("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=A))}nv(h,e)})}function da(t,e,n){return{instance:t,listener:e,currentTarget:n}}function tu(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=ra(t,n),o!=null&&i.unshift(da(t,o,r)),o=ra(t,e),o!=null&&i.push(da(t,o,r))),t=t.return}return i}function so(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function vp(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=ra(n,o),l!=null&&s.unshift(da(n,l,a))):r||(l=ra(n,o),l!=null&&s.push(da(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var aS=/\r\n?/g,lS=/\u0000|\uFFFD/g;function _p(t){return(typeof t=="string"?t:""+t).replace(aS,`
`).replace(lS,"")}function qa(t,e,n){if(e=_p(e),_p(t)!==e&&n)throw Error(he(425))}function nu(){}var zd=null,kd=null;function Bd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Hd=typeof setTimeout=="function"?setTimeout:void 0,uS=typeof clearTimeout=="function"?clearTimeout:void 0,yp=typeof Promise=="function"?Promise:void 0,cS=typeof queueMicrotask=="function"?queueMicrotask:typeof yp<"u"?function(t){return yp.resolve(null).then(t).catch(dS)}:Hd;function dS(t){setTimeout(function(){throw t})}function yc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),aa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);aa(e)}function ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function xp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var gs=Math.random().toString(36).slice(2),pi="__reactFiber$"+gs,fa="__reactProps$"+gs,zi="__reactContainer$"+gs,Gd="__reactEvents$"+gs,fS="__reactListeners$"+gs,hS="__reactHandles$"+gs;function Or(t){var e=t[pi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[zi]||n[pi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=xp(t);t!==null;){if(n=t[pi])return n;t=xp(t)}return e}t=n,n=t.parentNode}return null}function La(t){return t=t[pi]||t[zi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function No(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(he(33))}function Du(t){return t[fa]||null}var Vd=[],Uo=-1;function yr(t){return{current:t}}function ut(t){0>Uo||(t.current=Vd[Uo],Vd[Uo]=null,Uo--)}function st(t,e){Uo++,Vd[Uo]=t.current,t.current=e}var gr={},en=yr(gr),mn=yr(!1),jr=gr;function ns(t,e){var n=t.type.contextTypes;if(!n)return gr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function gn(t){return t=t.childContextTypes,t!=null}function iu(){ut(mn),ut(en)}function Sp(t,e,n){if(en.current!==gr)throw Error(he(168));st(en,e),st(mn,n)}function rv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(he(108,Zy(t)||"Unknown",r));return vt({},n,i)}function ru(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||gr,jr=en.current,st(en,t),st(mn,mn.current),!0}function Ep(t,e,n){var i=t.stateNode;if(!i)throw Error(he(169));n?(t=rv(t,e,jr),i.__reactInternalMemoizedMergedChildContext=t,ut(mn),ut(en),st(en,t)):ut(mn),st(mn,n)}var Ci=null,Iu=!1,xc=!1;function ov(t){Ci===null?Ci=[t]:Ci.push(t)}function pS(t){Iu=!0,ov(t)}function xr(){if(!xc&&Ci!==null){xc=!0;var t=0,e=Qe;try{var n=Ci;for(Qe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ci=null,Iu=!1}catch(r){throw Ci!==null&&(Ci=Ci.slice(t+1)),P0(Bf,xr),r}finally{Qe=e,xc=!1}}return null}var Oo=[],Fo=0,ou=null,su=0,Dn=[],In=0,$r=null,Li=1,Di="";function Cr(t,e){Oo[Fo++]=su,Oo[Fo++]=ou,ou=t,su=e}function sv(t,e,n){Dn[In++]=Li,Dn[In++]=Di,Dn[In++]=$r,$r=t;var i=Li;t=Di;var r=32-oi(i)-1;i&=~(1<<r),n+=1;var o=32-oi(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,Li=1<<32-oi(e)+r|n<<r|i,Di=o+t}else Li=1<<o|n<<r|i,Di=t}function qf(t){t.return!==null&&(Cr(t,1),sv(t,1,0))}function Kf(t){for(;t===ou;)ou=Oo[--Fo],Oo[Fo]=null,su=Oo[--Fo],Oo[Fo]=null;for(;t===$r;)$r=Dn[--In],Dn[In]=null,Di=Dn[--In],Dn[In]=null,Li=Dn[--In],Dn[In]=null}var Tn=null,wn=null,dt=!1,Qn=null;function av(t,e){var n=zn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Mp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tn=t,wn=ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tn=t,wn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=$r!==null?{id:Li,overflow:Di}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=zn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tn=t,wn=null,!0):!1;default:return!1}}function Wd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Xd(t){if(dt){var e=wn;if(e){var n=e;if(!Mp(t,e)){if(Wd(t))throw Error(he(418));e=ar(n.nextSibling);var i=Tn;e&&Mp(t,e)?av(i,n):(t.flags=t.flags&-4097|2,dt=!1,Tn=t)}}else{if(Wd(t))throw Error(he(418));t.flags=t.flags&-4097|2,dt=!1,Tn=t}}}function wp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tn=t}function Ka(t){if(t!==Tn)return!1;if(!dt)return wp(t),dt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Bd(t.type,t.memoizedProps)),e&&(e=wn)){if(Wd(t))throw lv(),Error(he(418));for(;e;)av(t,e),e=ar(e.nextSibling)}if(wp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(he(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wn=ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wn=null}}else wn=Tn?ar(t.stateNode.nextSibling):null;return!0}function lv(){for(var t=wn;t;)t=ar(t.nextSibling)}function is(){wn=Tn=null,dt=!1}function Zf(t){Qn===null?Qn=[t]:Qn.push(t)}var mS=Gi.ReactCurrentBatchConfig;function Cs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(he(309));var i=n.stateNode}if(!i)throw Error(he(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(he(284));if(!n._owner)throw Error(he(290,t))}return t}function Za(t,e){throw t=Object.prototype.toString.call(e),Error(he(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Tp(t){var e=t._init;return e(t._payload)}function uv(t){function e(d,x){if(t){var v=d.deletions;v===null?(d.deletions=[x],d.flags|=16):v.push(x)}}function n(d,x){if(!t)return null;for(;x!==null;)e(d,x),x=x.sibling;return null}function i(d,x){for(d=new Map;x!==null;)x.key!==null?d.set(x.key,x):d.set(x.index,x),x=x.sibling;return d}function r(d,x){return d=dr(d,x),d.index=0,d.sibling=null,d}function o(d,x,v){return d.index=v,t?(v=d.alternate,v!==null?(v=v.index,v<x?(d.flags|=2,x):v):(d.flags|=2,x)):(d.flags|=1048576,x)}function s(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,x,v,_){return x===null||x.tag!==6?(x=Rc(v,d.mode,_),x.return=d,x):(x=r(x,v),x.return=d,x)}function l(d,x,v,_){var C=v.type;return C===Po?c(d,x,v.props.children,_,v.key):x!==null&&(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===qi&&Tp(C)===x.type)?(_=r(x,v.props),_.ref=Cs(d,x,v),_.return=d,_):(_=Xl(v.type,v.key,v.props,null,d.mode,_),_.ref=Cs(d,x,v),_.return=d,_)}function u(d,x,v,_){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=Cc(v,d.mode,_),x.return=d,x):(x=r(x,v.children||[]),x.return=d,x)}function c(d,x,v,_,C){return x===null||x.tag!==7?(x=Gr(v,d.mode,_,C),x.return=d,x):(x=r(x,v),x.return=d,x)}function h(d,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Rc(""+x,d.mode,v),x.return=d,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ba:return v=Xl(x.type,x.key,x.props,null,d.mode,v),v.ref=Cs(d,null,x),v.return=d,v;case bo:return x=Cc(x,d.mode,v),x.return=d,x;case qi:var _=x._init;return h(d,_(x._payload),v)}if(ks(x)||Ms(x))return x=Gr(x,d.mode,v,null),x.return=d,x;Za(d,x)}return null}function f(d,x,v,_){var C=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(d,x,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ba:return v.key===C?l(d,x,v,_):null;case bo:return v.key===C?u(d,x,v,_):null;case qi:return C=v._init,f(d,x,C(v._payload),_)}if(ks(v)||Ms(v))return C!==null?null:c(d,x,v,_,null);Za(d,v)}return null}function p(d,x,v,_,C){if(typeof _=="string"&&_!==""||typeof _=="number")return d=d.get(v)||null,a(x,d,""+_,C);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ba:return d=d.get(_.key===null?v:_.key)||null,l(x,d,_,C);case bo:return d=d.get(_.key===null?v:_.key)||null,u(x,d,_,C);case qi:var S=_._init;return p(d,x,v,S(_._payload),C)}if(ks(_)||Ms(_))return d=d.get(v)||null,c(x,d,_,C,null);Za(x,_)}return null}function m(d,x,v,_){for(var C=null,S=null,A=x,P=x=0,E=null;A!==null&&P<v.length;P++){A.index>P?(E=A,A=null):E=A.sibling;var T=f(d,A,v[P],_);if(T===null){A===null&&(A=E);break}t&&A&&T.alternate===null&&e(d,A),x=o(T,x,P),S===null?C=T:S.sibling=T,S=T,A=E}if(P===v.length)return n(d,A),dt&&Cr(d,P),C;if(A===null){for(;P<v.length;P++)A=h(d,v[P],_),A!==null&&(x=o(A,x,P),S===null?C=A:S.sibling=A,S=A);return dt&&Cr(d,P),C}for(A=i(d,A);P<v.length;P++)E=p(A,d,P,v[P],_),E!==null&&(t&&E.alternate!==null&&A.delete(E.key===null?P:E.key),x=o(E,x,P),S===null?C=E:S.sibling=E,S=E);return t&&A.forEach(function(O){return e(d,O)}),dt&&Cr(d,P),C}function y(d,x,v,_){var C=Ms(v);if(typeof C!="function")throw Error(he(150));if(v=C.call(v),v==null)throw Error(he(151));for(var S=C=null,A=x,P=x=0,E=null,T=v.next();A!==null&&!T.done;P++,T=v.next()){A.index>P?(E=A,A=null):E=A.sibling;var O=f(d,A,T.value,_);if(O===null){A===null&&(A=E);break}t&&A&&O.alternate===null&&e(d,A),x=o(O,x,P),S===null?C=O:S.sibling=O,S=O,A=E}if(T.done)return n(d,A),dt&&Cr(d,P),C;if(A===null){for(;!T.done;P++,T=v.next())T=h(d,T.value,_),T!==null&&(x=o(T,x,P),S===null?C=T:S.sibling=T,S=T);return dt&&Cr(d,P),C}for(A=i(d,A);!T.done;P++,T=v.next())T=p(A,d,P,T.value,_),T!==null&&(t&&T.alternate!==null&&A.delete(T.key===null?P:T.key),x=o(T,x,P),S===null?C=T:S.sibling=T,S=T);return t&&A.forEach(function(X){return e(d,X)}),dt&&Cr(d,P),C}function g(d,x,v,_){if(typeof v=="object"&&v!==null&&v.type===Po&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ba:e:{for(var C=v.key,S=x;S!==null;){if(S.key===C){if(C=v.type,C===Po){if(S.tag===7){n(d,S.sibling),x=r(S,v.props.children),x.return=d,d=x;break e}}else if(S.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===qi&&Tp(C)===S.type){n(d,S.sibling),x=r(S,v.props),x.ref=Cs(d,S,v),x.return=d,d=x;break e}n(d,S);break}else e(d,S);S=S.sibling}v.type===Po?(x=Gr(v.props.children,d.mode,_,v.key),x.return=d,d=x):(_=Xl(v.type,v.key,v.props,null,d.mode,_),_.ref=Cs(d,x,v),_.return=d,d=_)}return s(d);case bo:e:{for(S=v.key;x!==null;){if(x.key===S)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(d,x.sibling),x=r(x,v.children||[]),x.return=d,d=x;break e}else{n(d,x);break}else e(d,x);x=x.sibling}x=Cc(v,d.mode,_),x.return=d,d=x}return s(d);case qi:return S=v._init,g(d,x,S(v._payload),_)}if(ks(v))return m(d,x,v,_);if(Ms(v))return y(d,x,v,_);Za(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(d,x.sibling),x=r(x,v),x.return=d,d=x):(n(d,x),x=Rc(v,d.mode,_),x.return=d,d=x),s(d)):n(d,x)}return g}var rs=uv(!0),cv=uv(!1),au=yr(null),lu=null,zo=null,Jf=null;function Qf(){Jf=zo=lu=null}function eh(t){var e=au.current;ut(au),t._currentValue=e}function jd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function qo(t,e){lu=t,Jf=zo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pn=!0),t.firstContext=null)}function Wn(t){var e=t._currentValue;if(Jf!==t)if(t={context:t,memoizedValue:e,next:null},zo===null){if(lu===null)throw Error(he(308));zo=t,lu.dependencies={lanes:0,firstContext:t}}else zo=zo.next=t;return e}var Fr=null;function th(t){Fr===null?Fr=[t]:Fr.push(t)}function dv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,th(e)):(n.next=r.next,r.next=n),e.interleaved=n,ki(t,i)}function ki(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ki=!1;function nh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ni(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function lr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ki(t,n)}return r=i.interleaved,r===null?(e.next=e,th(i)):(e.next=r.next,r.next=e),i.interleaved=e,ki(t,n)}function kl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Hf(t,n)}}function Ap(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function uu(t,e,n,i){var r=t.updateQueue;Ki=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var h=r.baseState;s=0,c=u=l=null,a=o;do{var f=a.lane,p=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,y=a;switch(f=e,p=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){h=m.call(p,h,f);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,f=typeof m=="function"?m.call(p,h,f):m,f==null)break e;h=vt({},h,f);break e;case 2:Ki=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,s|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);qr|=s,t.lanes=s,t.memoizedState=h}}function Rp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(he(191,r));r.call(i)}}}var Da={},gi=yr(Da),ha=yr(Da),pa=yr(Da);function zr(t){if(t===Da)throw Error(he(174));return t}function ih(t,e){switch(st(pa,e),st(ha,t),st(gi,Da),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ad(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ad(e,t)}ut(gi),st(gi,e)}function os(){ut(gi),ut(ha),ut(pa)}function hv(t){zr(pa.current);var e=zr(gi.current),n=Ad(e,t.type);e!==n&&(st(ha,t),st(gi,n))}function rh(t){ha.current===t&&(ut(gi),ut(ha))}var pt=yr(0);function cu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Sc=[];function oh(){for(var t=0;t<Sc.length;t++)Sc[t]._workInProgressVersionPrimary=null;Sc.length=0}var Bl=Gi.ReactCurrentDispatcher,Ec=Gi.ReactCurrentBatchConfig,Yr=0,gt=null,bt=null,Ft=null,du=!1,Ys=!1,ma=0,gS=0;function $t(){throw Error(he(321))}function sh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ai(t[n],e[n]))return!1;return!0}function ah(t,e,n,i,r,o){if(Yr=o,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Bl.current=t===null||t.memoizedState===null?xS:SS,t=n(i,r),Ys){o=0;do{if(Ys=!1,ma=0,25<=o)throw Error(he(301));o+=1,Ft=bt=null,e.updateQueue=null,Bl.current=ES,t=n(i,r)}while(Ys)}if(Bl.current=fu,e=bt!==null&&bt.next!==null,Yr=0,Ft=bt=gt=null,du=!1,e)throw Error(he(300));return t}function lh(){var t=ma!==0;return ma=0,t}function ci(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?gt.memoizedState=Ft=t:Ft=Ft.next=t,Ft}function Xn(){if(bt===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=Ft===null?gt.memoizedState:Ft.next;if(e!==null)Ft=e,bt=t;else{if(t===null)throw Error(he(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Ft===null?gt.memoizedState=Ft=t:Ft=Ft.next=t}return Ft}function ga(t,e){return typeof e=="function"?e(t):e}function Mc(t){var e=Xn(),n=e.queue;if(n===null)throw Error(he(311));n.lastRenderedReducer=t;var i=bt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Yr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,s=i):l=l.next=h,gt.lanes|=c,qr|=c}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=a,ai(i,e.memoizedState)||(pn=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,gt.lanes|=o,qr|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wc(t){var e=Xn(),n=e.queue;if(n===null)throw Error(he(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);ai(o,e.memoizedState)||(pn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function pv(){}function mv(t,e){var n=gt,i=Xn(),r=e(),o=!ai(i.memoizedState,r);if(o&&(i.memoizedState=r,pn=!0),i=i.queue,uh(_v.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Ft!==null&&Ft.memoizedState.tag&1){if(n.flags|=2048,va(9,vv.bind(null,n,i,r,e),void 0,null),Bt===null)throw Error(he(349));Yr&30||gv(n,e,r)}return r}function gv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function vv(t,e,n,i){e.value=n,e.getSnapshot=i,yv(e)&&xv(t)}function _v(t,e,n){return n(function(){yv(e)&&xv(t)})}function yv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ai(t,n)}catch{return!0}}function xv(t){var e=ki(t,1);e!==null&&si(e,t,1,-1)}function Cp(t){var e=ci();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:t},e.queue=t,t=t.dispatch=yS.bind(null,gt,t),[e.memoizedState,t]}function va(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Sv(){return Xn().memoizedState}function Hl(t,e,n,i){var r=ci();gt.flags|=t,r.memoizedState=va(1|e,n,void 0,i===void 0?null:i)}function Nu(t,e,n,i){var r=Xn();i=i===void 0?null:i;var o=void 0;if(bt!==null){var s=bt.memoizedState;if(o=s.destroy,i!==null&&sh(i,s.deps)){r.memoizedState=va(e,n,o,i);return}}gt.flags|=t,r.memoizedState=va(1|e,n,o,i)}function bp(t,e){return Hl(8390656,8,t,e)}function uh(t,e){return Nu(2048,8,t,e)}function Ev(t,e){return Nu(4,2,t,e)}function Mv(t,e){return Nu(4,4,t,e)}function wv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Tv(t,e,n){return n=n!=null?n.concat([t]):null,Nu(4,4,wv.bind(null,e,t),n)}function ch(){}function Av(t,e){var n=Xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&sh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Rv(t,e){var n=Xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&sh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Cv(t,e,n){return Yr&21?(ai(n,e)||(n=I0(),gt.lanes|=n,qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pn=!0),t.memoizedState=n)}function vS(t,e){var n=Qe;Qe=n!==0&&4>n?n:4,t(!0);var i=Ec.transition;Ec.transition={};try{t(!1),e()}finally{Qe=n,Ec.transition=i}}function bv(){return Xn().memoizedState}function _S(t,e,n){var i=cr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Pv(t))Lv(e,n);else if(n=dv(t,e,n,i),n!==null){var r=ln();si(n,t,i,r),Dv(n,e,i)}}function yS(t,e,n){var i=cr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pv(t))Lv(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,ai(a,s)){var l=e.interleaved;l===null?(r.next=r,th(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=dv(t,e,r,i),n!==null&&(r=ln(),si(n,t,i,r),Dv(n,e,i))}}function Pv(t){var e=t.alternate;return t===gt||e!==null&&e===gt}function Lv(t,e){Ys=du=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Dv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Hf(t,n)}}var fu={readContext:Wn,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},xS={readContext:Wn,useCallback:function(t,e){return ci().memoizedState=[t,e===void 0?null:e],t},useContext:Wn,useEffect:bp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Hl(4194308,4,wv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Hl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Hl(4,2,t,e)},useMemo:function(t,e){var n=ci();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ci();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=_S.bind(null,gt,t),[i.memoizedState,t]},useRef:function(t){var e=ci();return t={current:t},e.memoizedState=t},useState:Cp,useDebugValue:ch,useDeferredValue:function(t){return ci().memoizedState=t},useTransition:function(){var t=Cp(!1),e=t[0];return t=vS.bind(null,t[1]),ci().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=gt,r=ci();if(dt){if(n===void 0)throw Error(he(407));n=n()}else{if(n=e(),Bt===null)throw Error(he(349));Yr&30||gv(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,bp(_v.bind(null,i,o,t),[t]),i.flags|=2048,va(9,vv.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=ci(),e=Bt.identifierPrefix;if(dt){var n=Di,i=Li;n=(i&~(1<<32-oi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ma++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=gS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},SS={readContext:Wn,useCallback:Av,useContext:Wn,useEffect:uh,useImperativeHandle:Tv,useInsertionEffect:Ev,useLayoutEffect:Mv,useMemo:Rv,useReducer:Mc,useRef:Sv,useState:function(){return Mc(ga)},useDebugValue:ch,useDeferredValue:function(t){var e=Xn();return Cv(e,bt.memoizedState,t)},useTransition:function(){var t=Mc(ga)[0],e=Xn().memoizedState;return[t,e]},useMutableSource:pv,useSyncExternalStore:mv,useId:bv,unstable_isNewReconciler:!1},ES={readContext:Wn,useCallback:Av,useContext:Wn,useEffect:uh,useImperativeHandle:Tv,useInsertionEffect:Ev,useLayoutEffect:Mv,useMemo:Rv,useReducer:wc,useRef:Sv,useState:function(){return wc(ga)},useDebugValue:ch,useDeferredValue:function(t){var e=Xn();return bt===null?e.memoizedState=t:Cv(e,bt.memoizedState,t)},useTransition:function(){var t=wc(ga)[0],e=Xn().memoizedState;return[t,e]},useMutableSource:pv,useSyncExternalStore:mv,useId:bv,unstable_isNewReconciler:!1};function Zn(t,e){if(t&&t.defaultProps){e=vt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function $d(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:vt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Uu={isMounted:function(t){return(t=t._reactInternals)?io(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=ln(),r=cr(t),o=Ni(i,r);o.payload=e,n!=null&&(o.callback=n),e=lr(t,o,r),e!==null&&(si(e,t,r,i),kl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=ln(),r=cr(t),o=Ni(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=lr(t,o,r),e!==null&&(si(e,t,r,i),kl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ln(),i=cr(t),r=Ni(n,i);r.tag=2,e!=null&&(r.callback=e),e=lr(t,r,i),e!==null&&(si(e,t,i,n),kl(e,t,i))}};function Pp(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!ua(n,i)||!ua(r,o):!0}function Iv(t,e,n){var i=!1,r=gr,o=e.contextType;return typeof o=="object"&&o!==null?o=Wn(o):(r=gn(e)?jr:en.current,i=e.contextTypes,o=(i=i!=null)?ns(t,r):gr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Uu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function Lp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Uu.enqueueReplaceState(e,e.state,null)}function Yd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},nh(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Wn(o):(o=gn(e)?jr:en.current,r.context=ns(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&($d(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Uu.enqueueReplaceState(r,r.state,null),uu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ss(t,e){try{var n="",i=e;do n+=Ky(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function Tc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function qd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var MS=typeof WeakMap=="function"?WeakMap:Map;function Nv(t,e,n){n=Ni(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){pu||(pu=!0,sf=i),qd(t,e)},n}function Uv(t,e,n){n=Ni(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){qd(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){qd(t,e),typeof i!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Dp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new MS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=FS.bind(null,t,e,n),e.then(t,t))}function Ip(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Np(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ni(-1,1),e.tag=2,lr(n,e,1))),n.lanes|=1),t)}var wS=Gi.ReactCurrentOwner,pn=!1;function sn(t,e,n,i){e.child=t===null?cv(e,null,n,i):rs(e,t.child,n,i)}function Up(t,e,n,i,r){n=n.render;var o=e.ref;return qo(e,r),i=ah(t,e,n,i,o,r),n=lh(),t!==null&&!pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Bi(t,e,r)):(dt&&n&&qf(e),e.flags|=1,sn(t,e,i,r),e.child)}function Op(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!_h(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Ov(t,e,o,i,r)):(t=Xl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ua,n(s,i)&&t.ref===e.ref)return Bi(t,e,r)}return e.flags|=1,t=dr(o,i),t.ref=e.ref,t.return=e,e.child=t}function Ov(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(ua(o,i)&&t.ref===e.ref)if(pn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(pn=!0);else return e.lanes=t.lanes,Bi(t,e,r)}return Kd(t,e,n,i,r)}function Fv(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(Bo,Mn),Mn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,st(Bo,Mn),Mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,st(Bo,Mn),Mn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,st(Bo,Mn),Mn|=i;return sn(t,e,r,n),e.child}function zv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Kd(t,e,n,i,r){var o=gn(n)?jr:en.current;return o=ns(e,o),qo(e,r),n=ah(t,e,n,i,o,r),i=lh(),t!==null&&!pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Bi(t,e,r)):(dt&&i&&qf(e),e.flags|=1,sn(t,e,n,r),e.child)}function Fp(t,e,n,i,r){if(gn(n)){var o=!0;ru(e)}else o=!1;if(qo(e,r),e.stateNode===null)Gl(t,e),Iv(e,n,i),Yd(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Wn(u):(u=gn(n)?jr:en.current,u=ns(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Lp(e,s,i,u),Ki=!1;var f=e.memoizedState;s.state=f,uu(e,i,s,r),l=e.memoizedState,a!==i||f!==l||mn.current||Ki?(typeof c=="function"&&($d(e,n,c,i),l=e.memoizedState),(a=Ki||Pp(e,n,a,i,f,l,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,fv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Zn(e.type,a),s.props=u,h=e.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Wn(l):(l=gn(n)?jr:en.current,l=ns(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Lp(e,s,i,l),Ki=!1,f=e.memoizedState,s.state=f,uu(e,i,s,r);var m=e.memoizedState;a!==h||f!==m||mn.current||Ki?(typeof p=="function"&&($d(e,n,p,i),m=e.memoizedState),(u=Ki||Pp(e,n,u,i,f,m,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,m,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,m,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),s.props=i,s.state=m,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Zd(t,e,n,i,o,r)}function Zd(t,e,n,i,r,o){zv(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&Ep(e,n,!1),Bi(t,e,o);i=e.stateNode,wS.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=rs(e,t.child,null,o),e.child=rs(e,null,a,o)):sn(t,e,a,o),e.memoizedState=i.state,r&&Ep(e,n,!0),e.child}function kv(t){var e=t.stateNode;e.pendingContext?Sp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Sp(t,e.context,!1),ih(t,e.containerInfo)}function zp(t,e,n,i,r){return is(),Zf(r),e.flags|=256,sn(t,e,n,i),e.child}var Jd={dehydrated:null,treeContext:null,retryLane:0};function Qd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Bv(t,e,n){var i=e.pendingProps,r=pt.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),st(pt,r&1),t===null)return Xd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=zu(s,i,0,null),t=Gr(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Qd(n),e.memoizedState=Jd,t):dh(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return TS(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=dr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=dr(a,o):(o=Gr(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?Qd(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Jd,i}return o=t.child,t=o.sibling,i=dr(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function dh(t,e){return e=zu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ja(t,e,n,i){return i!==null&&Zf(i),rs(e,t.child,null,n),t=dh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function TS(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=Tc(Error(he(422))),Ja(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=zu({mode:"visible",children:i.children},r,0,null),o=Gr(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&rs(e,t.child,null,s),e.child.memoizedState=Qd(s),e.memoizedState=Jd,o);if(!(e.mode&1))return Ja(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(he(419)),i=Tc(o,i,void 0),Ja(t,e,s,i)}if(a=(s&t.childLanes)!==0,pn||a){if(i=Bt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,ki(t,r),si(i,t,r,-1))}return vh(),i=Tc(Error(he(421))),Ja(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=zS.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,wn=ar(r.nextSibling),Tn=e,dt=!0,Qn=null,t!==null&&(Dn[In++]=Li,Dn[In++]=Di,Dn[In++]=$r,Li=t.id,Di=t.overflow,$r=e),e=dh(e,i.children),e.flags|=4096,e)}function kp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),jd(t.return,e,n)}function Ac(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function Hv(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(sn(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kp(t,n,e);else if(t.tag===19)kp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(st(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&cu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ac(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&cu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ac(e,!0,n,null,o);break;case"together":Ac(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Gl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Bi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(he(153));if(e.child!==null){for(t=e.child,n=dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function AS(t,e,n){switch(e.tag){case 3:kv(e),is();break;case 5:hv(e);break;case 1:gn(e.type)&&ru(e);break;case 4:ih(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(au,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?Bv(t,e,n):(st(pt,pt.current&1),t=Bi(t,e,n),t!==null?t.sibling:null);st(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Hv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,Fv(t,e,n)}return Bi(t,e,n)}var Gv,ef,Vv,Wv;Gv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ef=function(){};Vv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,zr(gi.current);var o=null;switch(n){case"input":r=Ed(t,r),i=Ed(t,i),o=[];break;case"select":r=vt({},r,{value:void 0}),i=vt({},i,{value:void 0}),o=[];break;case"textarea":r=Td(t,r),i=Td(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=nu)}Rd(n,i);var s;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(na.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(na.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&at("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};Wv=function(t,e,n,i){n!==i&&(e.flags|=4)};function bs(t,e){if(!dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function RS(t,e,n){var i=e.pendingProps;switch(Kf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return gn(e.type)&&iu(),Yt(e),null;case 3:return i=e.stateNode,os(),ut(mn),ut(en),oh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ka(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qn!==null&&(uf(Qn),Qn=null))),ef(t,e),Yt(e),null;case 5:rh(e);var r=zr(pa.current);if(n=e.type,t!==null&&e.stateNode!=null)Vv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(he(166));return Yt(e),null}if(t=zr(gi.current),Ka(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[pi]=e,i[fa]=o,t=(e.mode&1)!==0,n){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<Hs.length;r++)at(Hs[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":Yh(i,o),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},at("invalid",i);break;case"textarea":Kh(i,o),at("invalid",i)}Rd(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&qa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&qa(i.textContent,a,t),r=["children",""+a]):na.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&at("scroll",i)}switch(n){case"input":Ha(i),qh(i,o,!0);break;case"textarea":Ha(i),Zh(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=nu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=_0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[pi]=e,t[fa]=i,Gv(t,e,!1,!1),e.stateNode=t;e:{switch(s=Cd(n,i),n){case"dialog":at("cancel",t),at("close",t),r=i;break;case"iframe":case"object":case"embed":at("load",t),r=i;break;case"video":case"audio":for(r=0;r<Hs.length;r++)at(Hs[r],t);r=i;break;case"source":at("error",t),r=i;break;case"img":case"image":case"link":at("error",t),at("load",t),r=i;break;case"details":at("toggle",t),r=i;break;case"input":Yh(t,i),r=Ed(t,i),at("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=vt({},i,{value:void 0}),at("invalid",t);break;case"textarea":Kh(t,i),r=Td(t,i),at("invalid",t);break;default:r=i}Rd(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?S0(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&y0(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ia(t,l):typeof l=="number"&&ia(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(na.hasOwnProperty(o)?l!=null&&o==="onScroll"&&at("scroll",t):l!=null&&Uf(t,o,l,s))}switch(n){case"input":Ha(t),qh(t,i,!1);break;case"textarea":Ha(t),Zh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+mr(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?Xo(t,!!i.multiple,o,!1):i.defaultValue!=null&&Xo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=nu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yt(e),null;case 6:if(t&&e.stateNode!=null)Wv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(he(166));if(n=zr(pa.current),zr(gi.current),Ka(e)){if(i=e.stateNode,n=e.memoizedProps,i[pi]=e,(o=i.nodeValue!==n)&&(t=Tn,t!==null))switch(t.tag){case 3:qa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&qa(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[pi]=e,e.stateNode=i}return Yt(e),null;case 13:if(ut(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(dt&&wn!==null&&e.mode&1&&!(e.flags&128))lv(),is(),e.flags|=98560,o=!1;else if(o=Ka(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(he(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(he(317));o[pi]=e}else is(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yt(e),o=!1}else Qn!==null&&(uf(Qn),Qn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?Pt===0&&(Pt=3):vh())),e.updateQueue!==null&&(e.flags|=4),Yt(e),null);case 4:return os(),ef(t,e),t===null&&ca(e.stateNode.containerInfo),Yt(e),null;case 10:return eh(e.type._context),Yt(e),null;case 17:return gn(e.type)&&iu(),Yt(e),null;case 19:if(ut(pt),o=e.memoizedState,o===null)return Yt(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)bs(o,!1);else{if(Pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=cu(t),s!==null){for(e.flags|=128,bs(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return st(pt,pt.current&1|2),e.child}t=t.sibling}o.tail!==null&&Tt()>as&&(e.flags|=128,i=!0,bs(o,!1),e.lanes=4194304)}else{if(!i)if(t=cu(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),bs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!dt)return Yt(e),null}else 2*Tt()-o.renderingStartTime>as&&n!==1073741824&&(e.flags|=128,i=!0,bs(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Tt(),e.sibling=null,n=pt.current,st(pt,i?n&1|2:n&1),e):(Yt(e),null);case 22:case 23:return gh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Mn&1073741824&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),null;case 24:return null;case 25:return null}throw Error(he(156,e.tag))}function CS(t,e){switch(Kf(e),e.tag){case 1:return gn(e.type)&&iu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return os(),ut(mn),ut(en),oh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return rh(e),null;case 13:if(ut(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(he(340));is()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ut(pt),null;case 4:return os(),null;case 10:return eh(e.type._context),null;case 22:case 23:return gh(),null;case 24:return null;default:return null}}var Qa=!1,Jt=!1,bS=typeof WeakSet=="function"?WeakSet:Set,Te=null;function ko(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){xt(t,e,i)}else n.current=null}function tf(t,e,n){try{n()}catch(i){xt(t,e,i)}}var Bp=!1;function PS(t,e){if(zd=Ql,t=q0(),Yf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,h=t,f=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=s+r),h!==o||i!==0&&h.nodeType!==3||(l=s+i),h.nodeType===3&&(s+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===n&&++u===r&&(a=s),f===o&&++c===i&&(l=s),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(kd={focusedElem:t,selectionRange:n},Ql=!1,Te=e;Te!==null;)if(e=Te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Te=t;else for(;Te!==null;){e=Te;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,g=m.memoizedState,d=e.stateNode,x=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:Zn(e.type,y),g);d.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(he(163))}}catch(_){xt(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}return m=Bp,Bp=!1,m}function qs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&tf(e,n,o)}r=r.next}while(r!==i)}}function Ou(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function nf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Xv(t){var e=t.alternate;e!==null&&(t.alternate=null,Xv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pi],delete e[fa],delete e[Gd],delete e[fS],delete e[hS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jv(t){return t.tag===5||t.tag===3||t.tag===4}function Hp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nu));else if(i!==4&&(t=t.child,t!==null))for(rf(t,e,n),t=t.sibling;t!==null;)rf(t,e,n),t=t.sibling}function of(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(of(t,e,n),t=t.sibling;t!==null;)of(t,e,n),t=t.sibling}var Gt=null,Jn=!1;function Vi(t,e,n){for(n=n.child;n!==null;)$v(t,e,n),n=n.sibling}function $v(t,e,n){if(mi&&typeof mi.onCommitFiberUnmount=="function")try{mi.onCommitFiberUnmount(Cu,n)}catch{}switch(n.tag){case 5:Jt||ko(n,e);case 6:var i=Gt,r=Jn;Gt=null,Vi(t,e,n),Gt=i,Jn=r,Gt!==null&&(Jn?(t=Gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Gt.removeChild(n.stateNode));break;case 18:Gt!==null&&(Jn?(t=Gt,n=n.stateNode,t.nodeType===8?yc(t.parentNode,n):t.nodeType===1&&yc(t,n),aa(t)):yc(Gt,n.stateNode));break;case 4:i=Gt,r=Jn,Gt=n.stateNode.containerInfo,Jn=!0,Vi(t,e,n),Gt=i,Jn=r;break;case 0:case 11:case 14:case 15:if(!Jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&tf(n,e,s),r=r.next}while(r!==i)}Vi(t,e,n);break;case 1:if(!Jt&&(ko(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){xt(n,e,a)}Vi(t,e,n);break;case 21:Vi(t,e,n);break;case 22:n.mode&1?(Jt=(i=Jt)||n.memoizedState!==null,Vi(t,e,n),Jt=i):Vi(t,e,n);break;default:Vi(t,e,n)}}function Gp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new bS),e.forEach(function(i){var r=kS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function $n(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Gt=a.stateNode,Jn=!1;break e;case 3:Gt=a.stateNode.containerInfo,Jn=!0;break e;case 4:Gt=a.stateNode.containerInfo,Jn=!0;break e}a=a.return}if(Gt===null)throw Error(he(160));$v(o,s,r),Gt=null,Jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){xt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Yv(e,t),e=e.sibling}function Yv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($n(e,t),ui(t),i&4){try{qs(3,t,t.return),Ou(3,t)}catch(y){xt(t,t.return,y)}try{qs(5,t,t.return)}catch(y){xt(t,t.return,y)}}break;case 1:$n(e,t),ui(t),i&512&&n!==null&&ko(n,n.return);break;case 5:if($n(e,t),ui(t),i&512&&n!==null&&ko(n,n.return),t.flags&32){var r=t.stateNode;try{ia(r,"")}catch(y){xt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&g0(r,o),Cd(a,s);var u=Cd(a,o);for(s=0;s<l.length;s+=2){var c=l[s],h=l[s+1];c==="style"?S0(r,h):c==="dangerouslySetInnerHTML"?y0(r,h):c==="children"?ia(r,h):Uf(r,c,h,u)}switch(a){case"input":Md(r,o);break;case"textarea":v0(r,o);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?Xo(r,!!o.multiple,p,!1):f!==!!o.multiple&&(o.defaultValue!=null?Xo(r,!!o.multiple,o.defaultValue,!0):Xo(r,!!o.multiple,o.multiple?[]:"",!1))}r[fa]=o}catch(y){xt(t,t.return,y)}}break;case 6:if($n(e,t),ui(t),i&4){if(t.stateNode===null)throw Error(he(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(y){xt(t,t.return,y)}}break;case 3:if($n(e,t),ui(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{aa(e.containerInfo)}catch(y){xt(t,t.return,y)}break;case 4:$n(e,t),ui(t);break;case 13:$n(e,t),ui(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(ph=Tt())),i&4&&Gp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Jt=(u=Jt)||c,$n(e,t),Jt=u):$n(e,t),ui(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(Te=t,c=t.child;c!==null;){for(h=Te=c;Te!==null;){switch(f=Te,p=f.child,f.tag){case 0:case 11:case 14:case 15:qs(4,f,f.return);break;case 1:ko(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(y){xt(i,n,y)}}break;case 5:ko(f,f.return);break;case 22:if(f.memoizedState!==null){Wp(h);continue}}p!==null?(p.return=f,Te=p):Wp(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{r=h.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=x0("display",s))}catch(y){xt(t,t.return,y)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){xt(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:$n(e,t),ui(t),i&4&&Gp(t);break;case 21:break;default:$n(e,t),ui(t)}}function ui(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(jv(n)){var i=n;break e}n=n.return}throw Error(he(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ia(r,""),i.flags&=-33);var o=Hp(t);of(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=Hp(t);rf(t,a,s);break;default:throw Error(he(161))}}catch(l){xt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function LS(t,e,n){Te=t,qv(t)}function qv(t,e,n){for(var i=(t.mode&1)!==0;Te!==null;){var r=Te,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||Qa;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Jt;a=Qa;var u=Jt;if(Qa=s,(Jt=l)&&!u)for(Te=r;Te!==null;)s=Te,l=s.child,s.tag===22&&s.memoizedState!==null?Xp(r):l!==null?(l.return=s,Te=l):Xp(r);for(;o!==null;)Te=o,qv(o),o=o.sibling;Te=r,Qa=a,Jt=u}Vp(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,Te=o):Vp(t)}}function Vp(t){for(;Te!==null;){var e=Te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Jt||Ou(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Rp(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Rp(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&aa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(he(163))}Jt||e.flags&512&&nf(e)}catch(f){xt(e,e.return,f)}}if(e===t){Te=null;break}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}}function Wp(t){for(;Te!==null;){var e=Te;if(e===t){Te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Te=n;break}Te=e.return}}function Xp(t){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ou(4,e)}catch(l){xt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){xt(e,r,l)}}var o=e.return;try{nf(e)}catch(l){xt(e,o,l)}break;case 5:var s=e.return;try{nf(e)}catch(l){xt(e,s,l)}}}catch(l){xt(e,e.return,l)}if(e===t){Te=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Te=a;break}Te=e.return}}var DS=Math.ceil,hu=Gi.ReactCurrentDispatcher,fh=Gi.ReactCurrentOwner,Gn=Gi.ReactCurrentBatchConfig,Ke=0,Bt=null,Rt=null,Wt=0,Mn=0,Bo=yr(0),Pt=0,_a=null,qr=0,Fu=0,hh=0,Ks=null,dn=null,ph=0,as=1/0,Ri=null,pu=!1,sf=null,ur=null,el=!1,er=null,mu=0,Zs=0,af=null,Vl=-1,Wl=0;function ln(){return Ke&6?Tt():Vl!==-1?Vl:Vl=Tt()}function cr(t){return t.mode&1?Ke&2&&Wt!==0?Wt&-Wt:mS.transition!==null?(Wl===0&&(Wl=I0()),Wl):(t=Qe,t!==0||(t=window.event,t=t===void 0?16:B0(t.type)),t):1}function si(t,e,n,i){if(50<Zs)throw Zs=0,af=null,Error(he(185));ba(t,n,i),(!(Ke&2)||t!==Bt)&&(t===Bt&&(!(Ke&2)&&(Fu|=n),Pt===4&&Ji(t,Wt)),vn(t,i),n===1&&Ke===0&&!(e.mode&1)&&(as=Tt()+500,Iu&&xr()))}function vn(t,e){var n=t.callbackNode;mx(t,e);var i=Jl(t,t===Bt?Wt:0);if(i===0)n!==null&&ep(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&ep(n),e===1)t.tag===0?pS(jp.bind(null,t)):ov(jp.bind(null,t)),cS(function(){!(Ke&6)&&xr()}),n=null;else{switch(N0(i)){case 1:n=Bf;break;case 4:n=L0;break;case 16:n=Zl;break;case 536870912:n=D0;break;default:n=Zl}n=i_(n,Kv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Kv(t,e){if(Vl=-1,Wl=0,Ke&6)throw Error(he(327));var n=t.callbackNode;if(Ko()&&t.callbackNode!==n)return null;var i=Jl(t,t===Bt?Wt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=gu(t,i);else{e=i;var r=Ke;Ke|=2;var o=Jv();(Bt!==t||Wt!==e)&&(Ri=null,as=Tt()+500,Hr(t,e));do try{US();break}catch(a){Zv(t,a)}while(!0);Qf(),hu.current=o,Ke=r,Rt!==null?e=0:(Bt=null,Wt=0,e=Pt)}if(e!==0){if(e===2&&(r=Id(t),r!==0&&(i=r,e=lf(t,r))),e===1)throw n=_a,Hr(t,0),Ji(t,i),vn(t,Tt()),n;if(e===6)Ji(t,i);else{if(r=t.current.alternate,!(i&30)&&!IS(r)&&(e=gu(t,i),e===2&&(o=Id(t),o!==0&&(i=o,e=lf(t,o))),e===1))throw n=_a,Hr(t,0),Ji(t,i),vn(t,Tt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(he(345));case 2:br(t,dn,Ri);break;case 3:if(Ji(t,i),(i&130023424)===i&&(e=ph+500-Tt(),10<e)){if(Jl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){ln(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Hd(br.bind(null,t,dn,Ri),e);break}br(t,dn,Ri);break;case 4:if(Ji(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-oi(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=Tt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*DS(i/1960))-i,10<i){t.timeoutHandle=Hd(br.bind(null,t,dn,Ri),i);break}br(t,dn,Ri);break;case 5:br(t,dn,Ri);break;default:throw Error(he(329))}}}return vn(t,Tt()),t.callbackNode===n?Kv.bind(null,t):null}function lf(t,e){var n=Ks;return t.current.memoizedState.isDehydrated&&(Hr(t,e).flags|=256),t=gu(t,e),t!==2&&(e=dn,dn=n,e!==null&&uf(e)),t}function uf(t){dn===null?dn=t:dn.push.apply(dn,t)}function IS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!ai(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ji(t,e){for(e&=~hh,e&=~Fu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-oi(e),i=1<<n;t[n]=-1,e&=~i}}function jp(t){if(Ke&6)throw Error(he(327));Ko();var e=Jl(t,0);if(!(e&1))return vn(t,Tt()),null;var n=gu(t,e);if(t.tag!==0&&n===2){var i=Id(t);i!==0&&(e=i,n=lf(t,i))}if(n===1)throw n=_a,Hr(t,0),Ji(t,e),vn(t,Tt()),n;if(n===6)throw Error(he(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,br(t,dn,Ri),vn(t,Tt()),null}function mh(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(as=Tt()+500,Iu&&xr())}}function Kr(t){er!==null&&er.tag===0&&!(Ke&6)&&Ko();var e=Ke;Ke|=1;var n=Gn.transition,i=Qe;try{if(Gn.transition=null,Qe=1,t)return t()}finally{Qe=i,Gn.transition=n,Ke=e,!(Ke&6)&&xr()}}function gh(){Mn=Bo.current,ut(Bo)}function Hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,uS(n)),Rt!==null)for(n=Rt.return;n!==null;){var i=n;switch(Kf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&iu();break;case 3:os(),ut(mn),ut(en),oh();break;case 5:rh(i);break;case 4:os();break;case 13:ut(pt);break;case 19:ut(pt);break;case 10:eh(i.type._context);break;case 22:case 23:gh()}n=n.return}if(Bt=t,Rt=t=dr(t.current,null),Wt=Mn=e,Pt=0,_a=null,hh=Fu=qr=0,dn=Ks=null,Fr!==null){for(e=0;e<Fr.length;e++)if(n=Fr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}Fr=null}return t}function Zv(t,e){do{var n=Rt;try{if(Qf(),Bl.current=fu,du){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}du=!1}if(Yr=0,Ft=bt=gt=null,Ys=!1,ma=0,fh.current=null,n===null||n.return===null){Pt=1,_a=e,Rt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Wt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Ip(s);if(p!==null){p.flags&=-257,Np(p,s,a,o,e),p.mode&1&&Dp(o,u,e),e=p,l=u;var m=e.updateQueue;if(m===null){var y=new Set;y.add(l),e.updateQueue=y}else m.add(l);break e}else{if(!(e&1)){Dp(o,u,e),vh();break e}l=Error(he(426))}}else if(dt&&a.mode&1){var g=Ip(s);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Np(g,s,a,o,e),Zf(ss(l,a));break e}}o=l=ss(l,a),Pt!==4&&(Pt=2),Ks===null?Ks=[o]:Ks.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var d=Nv(o,l,e);Ap(o,d);break e;case 1:a=l;var x=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ur===null||!ur.has(v)))){o.flags|=65536,e&=-e,o.lanes|=e;var _=Uv(o,a,e);Ap(o,_);break e}}o=o.return}while(o!==null)}e_(n)}catch(C){e=C,Rt===n&&n!==null&&(Rt=n=n.return);continue}break}while(!0)}function Jv(){var t=hu.current;return hu.current=fu,t===null?fu:t}function vh(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),Bt===null||!(qr&268435455)&&!(Fu&268435455)||Ji(Bt,Wt)}function gu(t,e){var n=Ke;Ke|=2;var i=Jv();(Bt!==t||Wt!==e)&&(Ri=null,Hr(t,e));do try{NS();break}catch(r){Zv(t,r)}while(!0);if(Qf(),Ke=n,hu.current=i,Rt!==null)throw Error(he(261));return Bt=null,Wt=0,Pt}function NS(){for(;Rt!==null;)Qv(Rt)}function US(){for(;Rt!==null&&!sx();)Qv(Rt)}function Qv(t){var e=n_(t.alternate,t,Mn);t.memoizedProps=t.pendingProps,e===null?e_(t):Rt=e,fh.current=null}function e_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=CS(n,e),n!==null){n.flags&=32767,Rt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pt=6,Rt=null;return}}else if(n=RS(n,e,Mn),n!==null){Rt=n;return}if(e=e.sibling,e!==null){Rt=e;return}Rt=e=t}while(e!==null);Pt===0&&(Pt=5)}function br(t,e,n){var i=Qe,r=Gn.transition;try{Gn.transition=null,Qe=1,OS(t,e,n,i)}finally{Gn.transition=r,Qe=i}return null}function OS(t,e,n,i){do Ko();while(er!==null);if(Ke&6)throw Error(he(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(he(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(gx(t,o),t===Bt&&(Rt=Bt=null,Wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||el||(el=!0,i_(Zl,function(){return Ko(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Gn.transition,Gn.transition=null;var s=Qe;Qe=1;var a=Ke;Ke|=4,fh.current=null,PS(t,n),Yv(n,t),nS(kd),Ql=!!zd,kd=zd=null,t.current=n,LS(n),ax(),Ke=a,Qe=s,Gn.transition=o}else t.current=n;if(el&&(el=!1,er=t,mu=r),o=t.pendingLanes,o===0&&(ur=null),cx(n.stateNode),vn(t,Tt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(pu)throw pu=!1,t=sf,sf=null,t;return mu&1&&t.tag!==0&&Ko(),o=t.pendingLanes,o&1?t===af?Zs++:(Zs=0,af=t):Zs=0,xr(),null}function Ko(){if(er!==null){var t=N0(mu),e=Gn.transition,n=Qe;try{if(Gn.transition=null,Qe=16>t?16:t,er===null)var i=!1;else{if(t=er,er=null,mu=0,Ke&6)throw Error(he(331));var r=Ke;for(Ke|=4,Te=t.current;Te!==null;){var o=Te,s=o.child;if(Te.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Te=u;Te!==null;){var c=Te;switch(c.tag){case 0:case 11:case 15:qs(8,c,o)}var h=c.child;if(h!==null)h.return=c,Te=h;else for(;Te!==null;){c=Te;var f=c.sibling,p=c.return;if(Xv(c),c===u){Te=null;break}if(f!==null){f.return=p,Te=f;break}Te=p}}}var m=o.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}Te=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Te=s;else e:for(;Te!==null;){if(o=Te,o.flags&2048)switch(o.tag){case 0:case 11:case 15:qs(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,Te=d;break e}Te=o.return}}var x=t.current;for(Te=x;Te!==null;){s=Te;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,Te=v;else e:for(s=x;Te!==null;){if(a=Te,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ou(9,a)}}catch(C){xt(a,a.return,C)}if(a===s){Te=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,Te=_;break e}Te=a.return}}if(Ke=r,xr(),mi&&typeof mi.onPostCommitFiberRoot=="function")try{mi.onPostCommitFiberRoot(Cu,t)}catch{}i=!0}return i}finally{Qe=n,Gn.transition=e}}return!1}function $p(t,e,n){e=ss(n,e),e=Nv(t,e,1),t=lr(t,e,1),e=ln(),t!==null&&(ba(t,1,e),vn(t,e))}function xt(t,e,n){if(t.tag===3)$p(t,t,n);else for(;e!==null;){if(e.tag===3){$p(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ur===null||!ur.has(i))){t=ss(n,t),t=Uv(e,t,1),e=lr(e,t,1),t=ln(),e!==null&&(ba(e,1,t),vn(e,t));break}}e=e.return}}function FS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=ln(),t.pingedLanes|=t.suspendedLanes&n,Bt===t&&(Wt&n)===n&&(Pt===4||Pt===3&&(Wt&130023424)===Wt&&500>Tt()-ph?Hr(t,0):hh|=n),vn(t,e)}function t_(t,e){e===0&&(t.mode&1?(e=Wa,Wa<<=1,!(Wa&130023424)&&(Wa=4194304)):e=1);var n=ln();t=ki(t,e),t!==null&&(ba(t,e,n),vn(t,n))}function zS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),t_(t,n)}function kS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(he(314))}i!==null&&i.delete(e),t_(t,n)}var n_;n_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mn.current)pn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pn=!1,AS(t,e,n);pn=!!(t.flags&131072)}else pn=!1,dt&&e.flags&1048576&&sv(e,su,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Gl(t,e),t=e.pendingProps;var r=ns(e,en.current);qo(e,n),r=ah(null,e,i,t,r,n);var o=lh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gn(i)?(o=!0,ru(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,nh(e),r.updater=Uu,e.stateNode=r,r._reactInternals=e,Yd(e,i,t,n),e=Zd(null,e,i,!0,o,n)):(e.tag=0,dt&&o&&qf(e),sn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Gl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=HS(i),t=Zn(i,t),r){case 0:e=Kd(null,e,i,t,n);break e;case 1:e=Fp(null,e,i,t,n);break e;case 11:e=Up(null,e,i,t,n);break e;case 14:e=Op(null,e,i,Zn(i.type,t),n);break e}throw Error(he(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),Kd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),Fp(t,e,i,r,n);case 3:e:{if(kv(e),t===null)throw Error(he(387));i=e.pendingProps,o=e.memoizedState,r=o.element,fv(t,e),uu(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=ss(Error(he(423)),e),e=zp(t,e,i,n,r);break e}else if(i!==r){r=ss(Error(he(424)),e),e=zp(t,e,i,n,r);break e}else for(wn=ar(e.stateNode.containerInfo.firstChild),Tn=e,dt=!0,Qn=null,n=cv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(is(),i===r){e=Bi(t,e,n);break e}sn(t,e,i,n)}e=e.child}return e;case 5:return hv(e),t===null&&Xd(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,Bd(i,r)?s=null:o!==null&&Bd(i,o)&&(e.flags|=32),zv(t,e),sn(t,e,s,n),e.child;case 6:return t===null&&Xd(e),null;case 13:return Bv(t,e,n);case 4:return ih(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=rs(e,null,i,n):sn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),Up(t,e,i,r,n);case 7:return sn(t,e,e.pendingProps,n),e.child;case 8:return sn(t,e,e.pendingProps.children,n),e.child;case 12:return sn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,st(au,i._currentValue),i._currentValue=s,o!==null)if(ai(o.value,s)){if(o.children===r.children&&!mn.current){e=Bi(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Ni(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),jd(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(he(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),jd(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}sn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,qo(e,n),r=Wn(r),i=i(r),e.flags|=1,sn(t,e,i,n),e.child;case 14:return i=e.type,r=Zn(i,e.pendingProps),r=Zn(i.type,r),Op(t,e,i,r,n);case 15:return Ov(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),Gl(t,e),e.tag=1,gn(i)?(t=!0,ru(e)):t=!1,qo(e,n),Iv(e,i,r),Yd(e,i,r,n),Zd(null,e,i,!0,t,n);case 19:return Hv(t,e,n);case 22:return Fv(t,e,n)}throw Error(he(156,e.tag))};function i_(t,e){return P0(t,e)}function BS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zn(t,e,n,i){return new BS(t,e,n,i)}function _h(t){return t=t.prototype,!(!t||!t.isReactComponent)}function HS(t){if(typeof t=="function")return _h(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ff)return 11;if(t===zf)return 14}return 2}function dr(t,e){var n=t.alternate;return n===null?(n=zn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Xl(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")_h(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Po:return Gr(n.children,r,o,e);case Of:s=8,r|=8;break;case _d:return t=zn(12,n,e,r|2),t.elementType=_d,t.lanes=o,t;case yd:return t=zn(13,n,e,r),t.elementType=yd,t.lanes=o,t;case xd:return t=zn(19,n,e,r),t.elementType=xd,t.lanes=o,t;case h0:return zu(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case d0:s=10;break e;case f0:s=9;break e;case Ff:s=11;break e;case zf:s=14;break e;case qi:s=16,i=null;break e}throw Error(he(130,t==null?t:typeof t,""))}return e=zn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function Gr(t,e,n,i){return t=zn(7,t,i,e),t.lanes=n,t}function zu(t,e,n,i){return t=zn(22,t,i,e),t.elementType=h0,t.lanes=n,t.stateNode={isHidden:!1},t}function Rc(t,e,n){return t=zn(6,t,null,e),t.lanes=n,t}function Cc(t,e,n){return e=zn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function GS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=lc(0),this.expirationTimes=lc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function yh(t,e,n,i,r,o,s,a,l){return t=new GS(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=zn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nh(o),t}function VS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function r_(t){if(!t)return gr;t=t._reactInternals;e:{if(io(t)!==t||t.tag!==1)throw Error(he(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(he(171))}if(t.tag===1){var n=t.type;if(gn(n))return rv(t,n,e)}return e}function o_(t,e,n,i,r,o,s,a,l){return t=yh(n,i,!0,t,r,o,s,a,l),t.context=r_(null),n=t.current,i=ln(),r=cr(n),o=Ni(i,r),o.callback=e??null,lr(n,o,r),t.current.lanes=r,ba(t,r,i),vn(t,i),t}function ku(t,e,n,i){var r=e.current,o=ln(),s=cr(r);return n=r_(n),e.context===null?e.context=n:e.pendingContext=n,e=Ni(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=lr(r,e,s),t!==null&&(si(t,r,s,o),kl(t,r,s)),s}function vu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Yp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function xh(t,e){Yp(t,e),(t=t.alternate)&&Yp(t,e)}function WS(){return null}var s_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Sh(t){this._internalRoot=t}Bu.prototype.render=Sh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(he(409));ku(t,e,null,null)};Bu.prototype.unmount=Sh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kr(function(){ku(null,t,null,null)}),e[zi]=null}};function Bu(t){this._internalRoot=t}Bu.prototype.unstable_scheduleHydration=function(t){if(t){var e=F0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Zi.length&&e!==0&&e<Zi[n].priority;n++);Zi.splice(n,0,t),n===0&&k0(t)}};function Eh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Hu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function qp(){}function XS(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=vu(s);o.call(u)}}var s=o_(e,i,t,0,null,!1,!1,"",qp);return t._reactRootContainer=s,t[zi]=s.current,ca(t.nodeType===8?t.parentNode:t),Kr(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=vu(l);a.call(u)}}var l=yh(t,0,!1,null,null,!1,!1,"",qp);return t._reactRootContainer=l,t[zi]=l.current,ca(t.nodeType===8?t.parentNode:t),Kr(function(){ku(e,l,n,i)}),l}function Gu(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=vu(s);a.call(l)}}ku(e,s,t,r)}else s=XS(n,e,t,r,i);return vu(s)}U0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Bs(e.pendingLanes);n!==0&&(Hf(e,n|1),vn(e,Tt()),!(Ke&6)&&(as=Tt()+500,xr()))}break;case 13:Kr(function(){var i=ki(t,1);if(i!==null){var r=ln();si(i,t,1,r)}}),xh(t,1)}};Gf=function(t){if(t.tag===13){var e=ki(t,134217728);if(e!==null){var n=ln();si(e,t,134217728,n)}xh(t,134217728)}};O0=function(t){if(t.tag===13){var e=cr(t),n=ki(t,e);if(n!==null){var i=ln();si(n,t,e,i)}xh(t,e)}};F0=function(){return Qe};z0=function(t,e){var n=Qe;try{return Qe=t,e()}finally{Qe=n}};Pd=function(t,e,n){switch(e){case"input":if(Md(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Du(i);if(!r)throw Error(he(90));m0(i),Md(i,r)}}}break;case"textarea":v0(t,n);break;case"select":e=n.value,e!=null&&Xo(t,!!n.multiple,e,!1)}};w0=mh;T0=Kr;var jS={usingClientEntryPoint:!1,Events:[La,No,Du,E0,M0,mh]},Ps={findFiberByHostInstance:Or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$S={bundleType:Ps.bundleType,version:Ps.version,rendererPackageName:Ps.rendererPackageName,rendererConfig:Ps.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=C0(t),t===null?null:t.stateNode},findFiberByHostInstance:Ps.findFiberByHostInstance||WS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tl.isDisabled&&tl.supportsFiber)try{Cu=tl.inject($S),mi=tl}catch{}}Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jS;Cn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Eh(e))throw Error(he(200));return VS(t,e,null,n)};Cn.createRoot=function(t,e){if(!Eh(t))throw Error(he(299));var n=!1,i="",r=s_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=yh(t,1,!1,null,null,n,!1,i,r),t[zi]=e.current,ca(t.nodeType===8?t.parentNode:t),new Sh(e)};Cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(he(188)):(t=Object.keys(t).join(","),Error(he(268,t)));return t=C0(e),t=t===null?null:t.stateNode,t};Cn.flushSync=function(t){return Kr(t)};Cn.hydrate=function(t,e,n){if(!Hu(e))throw Error(he(200));return Gu(null,t,e,!0,n)};Cn.hydrateRoot=function(t,e,n){if(!Eh(t))throw Error(he(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=s_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=o_(e,null,t,1,n??null,r,!1,o,s),t[zi]=e.current,ca(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Bu(e)};Cn.render=function(t,e,n){if(!Hu(e))throw Error(he(200));return Gu(null,t,e,!1,n)};Cn.unmountComponentAtNode=function(t){if(!Hu(t))throw Error(he(40));return t._reactRootContainer?(Kr(function(){Gu(null,null,t,!1,function(){t._reactRootContainer=null,t[zi]=null})}),!0):!1};Cn.unstable_batchedUpdates=mh;Cn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Hu(n))throw Error(he(200));if(t==null||t._reactInternals===void 0)throw Error(he(38));return Gu(t,e,n,!1,i)};Cn.version="18.3.1-next-f1338f8080-20240426";function a_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a_)}catch(t){console.error(t)}}a_(),a0.exports=Cn;var YS=a0.exports,l_,Kp=YS;l_=Kp.createRoot,Kp.hydrateRoot;async function vs(t,e){const n=await fetch(t,{credentials:"include",...e});let i=null;try{i=await n.json()}catch{}return{ok:n.ok,status:n.status,data:i}}function qS(){return vs("/api/me")}function KS(){return vs("/api/me?view=engineer&list=1")}function ZS(t){return vs("/api/me?view=engineer&projectId="+encodeURIComponent(t))}function JS(t,e){return vs("/api/me",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"engineer_save",projectId:t||void 0,project:e})})}function QS(t){return vs("/api/me",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"engineer_delete",projectId:t})})}function eE(){return vs("/api/create-checkout-session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({kind:"engineer",plan:"annual",return_page:"engineers/index.html"})})}function tE({status:t,t:e}){const[n,i]=Re.useState(!1),[r,o]=Re.useState(null);async function s(){i(!0),o(null);const l=await eE();if(l.status===401){window.location.href="/lamsa-auth.html";return}if(!l.ok||!l.data||!l.data.url){o(l.data&&l.data.error||e("Something went wrong, please try again")),i(!1);return}window.location.href=l.data.url}const a=t==="canceled"||t==="past_due"||t==="unpaid";return re.jsxs("div",{style:{maxWidth:480,margin:"80px auto",padding:24,textAlign:"center",fontFamily:"sans-serif"},children:[re.jsx("h1",{style:{fontSize:24,fontWeight:900,marginBottom:8},children:e("Lamsa Engineers")}),re.jsx("p",{style:{color:"#6b7280",marginBottom:24},children:e(a?"Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Design complete floor plans, preview them in 3D, and export real architectural deliverables.")}),re.jsxs("ul",{style:{textAlign:"start",listStyle:"none",padding:0,marginBottom:28,color:"#374151",fontSize:14},children:[re.jsxs("li",{children:["— ",e("Rectangular rooms, doors & windows, single-floor plans")]}),re.jsxs("li",{children:["— ",e("Live 3D preview of your design")]}),re.jsxs("li",{children:["— ",e("Printable floor plan export")]}),re.jsxs("li",{children:["— ",e("Use Lamsa's existing furniture-styling tools per room")]})]}),re.jsxs("div",{style:{fontSize:28,fontWeight:900,marginBottom:4},children:["$250",re.jsxs("span",{style:{fontSize:14,fontWeight:600,color:"#6b7280"},children:[" ",e("/ year")]})]}),re.jsx("div",{style:{fontSize:13,color:"#6b7280",marginBottom:20},children:e("14-day free trial, cancel anytime")}),re.jsx("button",{type:"button",onClick:s,disabled:n,style:{width:"100%",background:"#c9a96e",color:"#1b1e22",border:"none",padding:16,borderRadius:14,fontSize:16,fontWeight:900,cursor:"pointer",opacity:n?.6:1},children:e(n?"Starting…":"Start free trial")}),r&&re.jsx("div",{style:{color:"#e05555",fontSize:13,marginTop:10},children:r})]})}function nE({projects:t,onOpen:e,onCreate:n,onDelete:i,t:r}){return re.jsxs("div",{style:{maxWidth:720,margin:"40px auto",padding:24,fontFamily:"sans-serif"},children:[re.jsxs("a",{href:"/lamsa-bilingual.html",style:{display:"inline-flex",alignItems:"center",gap:6,color:"#6b7280",fontSize:13,fontWeight:700,textDecoration:"none",marginBottom:16},children:["← ",r("Back to Home")]}),re.jsxs("div",{style:{display:"flex",flexWrap:"wrap",rowGap:10,justifyContent:"space-between",alignItems:"center",marginBottom:20},children:[re.jsx("h1",{style:{fontSize:22,fontWeight:900},children:r("Your Projects")}),re.jsxs("button",{type:"button",onClick:n,style:{background:"#c9a96e",color:"#1b1e22",border:"none",padding:"10px 18px",borderRadius:10,fontWeight:800,cursor:"pointer"},children:["+ ",r("New Project")]})]}),t.length===0&&re.jsx("div",{style:{color:"#6b7280",textAlign:"center",padding:40},children:r("No projects yet — create your first one.")}),re.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:14},children:t.map(o=>re.jsxs("div",{style:{border:"1px solid #e5e7eb",borderRadius:12,padding:16,cursor:"pointer"},onClick:()=>e(o.id),children:[re.jsx("div",{style:{fontWeight:800,marginBottom:6},children:o.name}),re.jsx("div",{style:{fontSize:12,color:"#9ca3af",marginBottom:10},children:o.updatedAt?new Date(o.updatedAt).toLocaleDateString():""}),re.jsx("button",{type:"button",onClick:s=>{s.stopPropagation(),i(o.id)},style:{fontSize:12,color:"#e05555",background:"none",border:"none",cursor:"pointer",padding:0},children:r("Delete")})]},o.id))})]})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mh="160",iE=0,Zp=1,rE=2,u_=1,c_=2,Ai=3,vr=0,_n=1,fn=2,fr=0,Zo=1,Jp=2,Qp=3,em=4,oE=5,Ir=100,sE=101,aE=102,tm=103,nm=104,lE=200,uE=201,cE=202,dE=203,cf=204,df=205,fE=206,hE=207,pE=208,mE=209,gE=210,vE=211,_E=212,yE=213,xE=214,SE=0,EE=1,ME=2,_u=3,wE=4,TE=5,AE=6,RE=7,d_=0,CE=1,bE=2,hr=0,PE=1,LE=2,DE=3,IE=4,NE=5,UE=6,f_=300,ls=301,us=302,ff=303,hf=304,Vu=306,Zr=1e3,ti=1001,pf=1002,an=1003,im=1004,bc=1005,Nn=1006,OE=1007,ya=1008,pr=1009,FE=1010,zE=1011,wh=1012,h_=1013,tr=1014,nr=1015,xa=1016,p_=1017,m_=1018,Vr=1020,kE=1021,ni=1023,BE=1024,HE=1025,Wr=1026,cs=1027,GE=1028,g_=1029,VE=1030,v_=1031,__=1033,Pc=33776,Lc=33777,Dc=33778,Ic=33779,rm=35840,om=35841,sm=35842,am=35843,y_=36196,lm=37492,um=37496,cm=37808,dm=37809,fm=37810,hm=37811,pm=37812,mm=37813,gm=37814,vm=37815,_m=37816,ym=37817,xm=37818,Sm=37819,Em=37820,Mm=37821,Nc=36492,wm=36494,Tm=36495,WE=36283,Am=36284,Rm=36285,Cm=36286,x_=3e3,Xr=3001,XE=3200,jE=3201,S_=0,$E=1,Fn="",Vt="srgb",Hi="srgb-linear",Th="display-p3",Wu="display-p3-linear",yu="linear",lt="srgb",xu="rec709",Su="p3",ao=7680,bm=519,YE=512,qE=513,KE=514,E_=515,ZE=516,JE=517,QE=518,eM=519,mf=35044,Pm="300 es",gf=1035,Ii=2e3,Eu=2001;class _s{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uc=Math.PI/180,vf=180/Math.PI;function Ui(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[t&255]+qt[t>>8&255]+qt[t>>16&255]+qt[t>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[n&63|128]+qt[n>>8&255]+"-"+qt[n>>16&255]+qt[n>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function Qt(t,e,n){return Math.max(e,Math.min(n,t))}function tM(t,e){return(t%e+e)%e}function Oc(t,e,n){return(1-n)*t+n*e}function Lm(t){return(t&t-1)===0&&t!==0}function _f(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function bi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function tt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ve{constructor(e=0,n=0){ve.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,n,i,r,o,s,a,l,u){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u)}set(e,n,i,r,o,s,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=o,c[5]=l,c[6]=i,c[7]=s,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],c=i[4],h=i[7],f=i[2],p=i[5],m=i[8],y=r[0],g=r[3],d=r[6],x=r[1],v=r[4],_=r[7],C=r[2],S=r[5],A=r[8];return o[0]=s*y+a*x+l*C,o[3]=s*g+a*v+l*S,o[6]=s*d+a*_+l*A,o[1]=u*y+c*x+h*C,o[4]=u*g+c*v+h*S,o[7]=u*d+c*_+h*A,o[2]=f*y+p*x+m*C,o[5]=f*g+p*v+m*S,o[8]=f*d+p*_+m*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*s*c-n*a*u-i*o*c+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=c*s-a*u,f=a*l-c*o,p=u*o-s*l,m=n*h+i*f+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/m;return e[0]=h*y,e[1]=(r*u-c*i)*y,e[2]=(a*i-r*s)*y,e[3]=f*y,e[4]=(c*n-r*l)*y,e[5]=(r*o-a*n)*y,e[6]=p*y,e[7]=(i*l-u*n)*y,e[8]=(s*n-i*o)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Fc.makeScale(e,n)),this}rotate(e){return this.premultiply(Fc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Fc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fc=new $e;function M_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Mu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function nM(){const t=Mu("canvas");return t.style.display="block",t}const Dm={};function Js(t){t in Dm||(Dm[t]=!0,console.warn(t))}const Im=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Nm=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),nl={[Hi]:{transfer:yu,primaries:xu,toReference:t=>t,fromReference:t=>t},[Vt]:{transfer:lt,primaries:xu,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Wu]:{transfer:yu,primaries:Su,toReference:t=>t.applyMatrix3(Nm),fromReference:t=>t.applyMatrix3(Im)},[Th]:{transfer:lt,primaries:Su,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Nm),fromReference:t=>t.applyMatrix3(Im).convertLinearToSRGB()}},iM=new Set([Hi,Wu]),et={enabled:!0,_workingColorSpace:Hi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!iM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=nl[e].toReference,r=nl[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return nl[t].primaries},getTransfer:function(t){return t===Fn?yu:nl[t].transfer}};function Jo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function zc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let lo;class w_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{lo===void 0&&(lo=Mu("canvas")),lo.width=e.width,lo.height=e.height;const i=lo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=lo}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Mu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Jo(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Jo(n[i]/255)*255):n[i]=Jo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rM=0;class T_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=Ui(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(kc(r[s].image)):o.push(kc(r[s]))}else o=kc(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function kc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?w_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oM=0;class yn extends _s{constructor(e=yn.DEFAULT_IMAGE,n=yn.DEFAULT_MAPPING,i=ti,r=ti,o=Nn,s=ya,a=ni,l=pr,u=yn.DEFAULT_ANISOTROPY,c=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=Ui(),this.name="",this.source=new T_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Js("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Xr?Vt:Fn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==f_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zr:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case pf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zr:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case pf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Js("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Vt?Xr:x_}set encoding(e){Js("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Xr?Vt:Fn}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=f_;yn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,n=0,i=0,r=1){zt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],c=l[4],h=l[8],f=l[1],p=l[5],m=l[9],y=l[2],g=l[6],d=l[10];if(Math.abs(c-f)<.01&&Math.abs(h-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+y)<.1&&Math.abs(m+g)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,_=(p+1)/2,C=(d+1)/2,S=(c+f)/4,A=(h+y)/4,P=(m+g)/4;return v>_&&v>C?v<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(v),r=S/i,o=A/i):_>C?_<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(_),i=S/r,o=P/r):C<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(C),i=A/o,r=P/o),this.set(i,r,o,n),this}let x=Math.sqrt((g-m)*(g-m)+(h-y)*(h-y)+(f-c)*(f-c));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(h-y)/x,this.z=(f-c)/x,this.w=Math.acos((u+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sM extends _s{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new zt(0,0,e,n),this.scissorTest=!1,this.viewport=new zt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Js("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Xr?Vt:Fn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new yn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new T_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jr extends sM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class A_ extends yn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class aM extends yn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ia{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],u=i[r+1],c=i[r+2],h=i[r+3];const f=o[s+0],p=o[s+1],m=o[s+2],y=o[s+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=m,e[n+3]=y;return}if(h!==y||l!==f||u!==p||c!==m){let g=1-a;const d=l*f+u*p+c*m+h*y,x=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const C=Math.sqrt(v),S=Math.atan2(C,d*x);g=Math.sin(g*S)/C,a=Math.sin(a*S)/C}const _=a*x;if(l=l*g+f*_,u=u*g+p*_,c=c*g+m*_,h=h*g+y*_,g===1-a){const C=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=C,u*=C,c*=C,h*=C}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],h=o[s],f=o[s+1],p=o[s+2],m=o[s+3];return e[n]=a*m+c*h+l*p-u*f,e[n+1]=l*m+c*f+u*h-a*p,e[n+2]=u*m+c*p+a*f-l*h,e[n+3]=c*m-a*h-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),h=a(o/2),f=l(i/2),p=l(r/2),m=l(o/2);switch(s){case"XYZ":this._x=f*c*h+u*p*m,this._y=u*p*h-f*c*m,this._z=u*c*m+f*p*h,this._w=u*c*h-f*p*m;break;case"YXZ":this._x=f*c*h+u*p*m,this._y=u*p*h-f*c*m,this._z=u*c*m-f*p*h,this._w=u*c*h+f*p*m;break;case"ZXY":this._x=f*c*h-u*p*m,this._y=u*p*h+f*c*m,this._z=u*c*m+f*p*h,this._w=u*c*h-f*p*m;break;case"ZYX":this._x=f*c*h-u*p*m,this._y=u*p*h+f*c*m,this._z=u*c*m-f*p*h,this._w=u*c*h+f*p*m;break;case"YZX":this._x=f*c*h+u*p*m,this._y=u*p*h+f*c*m,this._z=u*c*m-f*p*h,this._w=u*c*h-f*p*m;break;case"XZY":this._x=f*c*h-u*p*m,this._y=u*p*h-f*c*m,this._z=u*c*m+f*p*h,this._w=u*c*h+f*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],u=n[2],c=n[6],h=n[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(o-u)*p,this._z=(s-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(c-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(o+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(o-u)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(s-r)/p,this._x=(o+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+s*a+r*u-o*l,this._y=r*c+s*l+o*a-i*u,this._z=o*c+s*u+i*l-r*a,this._w=s*c-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*o+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-n)*c)/u,f=Math.sin(n*c)/u;return this._w=s*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=o*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(o),i*Math.cos(o),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Um.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Um.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=2*(s*r-a*i),c=2*(a*n-o*r),h=2*(o*i-s*n);return this.x=n+l*u+s*h-a*c,this.y=i+l*c+a*u-o*h,this.z=r+l*h+o*c-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bc.copy(this).projectOnVector(e),this.sub(Bc)}reflect(e){return this.sub(Bc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bc=new k,Um=new Ia;class Na{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Yn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Yn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Yn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Yn):Yn.fromBufferAttribute(o,s),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),il.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),il.copy(i.boundingBox)),il.applyMatrix4(e.matrixWorld),this.union(il)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ls),rl.subVectors(this.max,Ls),uo.subVectors(e.a,Ls),co.subVectors(e.b,Ls),fo.subVectors(e.c,Ls),Wi.subVectors(co,uo),Xi.subVectors(fo,co),Mr.subVectors(uo,fo);let n=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-Mr.z,Mr.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,Mr.z,0,-Mr.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-Mr.y,Mr.x,0];return!Hc(n,uo,co,fo,rl)||(n=[1,0,0,0,1,0,0,0,1],!Hc(n,uo,co,fo,rl))?!1:(ol.crossVectors(Wi,Xi),n=[ol.x,ol.y,ol.z],Hc(n,uo,co,fo,rl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Si=[new k,new k,new k,new k,new k,new k,new k,new k],Yn=new k,il=new Na,uo=new k,co=new k,fo=new k,Wi=new k,Xi=new k,Mr=new k,Ls=new k,rl=new k,ol=new k,wr=new k;function Hc(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){wr.fromArray(t,o);const a=r.x*Math.abs(wr.x)+r.y*Math.abs(wr.y)+r.z*Math.abs(wr.z),l=e.dot(wr),u=n.dot(wr),c=i.dot(wr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const lM=new Na,Ds=new k,Gc=new k;class Xu{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):lM.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ds.subVectors(e,this.center);const n=Ds.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ds,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ds.copy(e.center).add(Gc)),this.expandByPoint(Ds.copy(e.center).sub(Gc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ei=new k,Vc=new k,sl=new k,ji=new k,Wc=new k,al=new k,Xc=new k;class R_{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ei.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,n),Ei.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Vc.copy(e).add(n).multiplyScalar(.5),sl.copy(n).sub(e).normalize(),ji.copy(this.origin).sub(Vc);const o=e.distanceTo(n)*.5,s=-this.direction.dot(sl),a=ji.dot(this.direction),l=-ji.dot(sl),u=ji.lengthSq(),c=Math.abs(1-s*s);let h,f,p,m;if(c>0)if(h=s*l-a,f=s*a-l,m=o*c,h>=0)if(f>=-m)if(f<=m){const y=1/c;h*=y,f*=y,p=h*(h+s*f+2*a)+f*(s*h+f+2*l)+u}else f=o,h=Math.max(0,-(s*f+a)),p=-h*h+f*(f+2*l)+u;else f=-o,h=Math.max(0,-(s*f+a)),p=-h*h+f*(f+2*l)+u;else f<=-m?(h=Math.max(0,-(-s*o+a)),f=h>0?-o:Math.min(Math.max(-o,-l),o),p=-h*h+f*(f+2*l)+u):f<=m?(h=0,f=Math.min(Math.max(-o,-l),o),p=f*(f+2*l)+u):(h=Math.max(0,-(s*o+a)),f=h>0?o:Math.min(Math.max(-o,-l),o),p=-h*h+f*(f+2*l)+u);else f=s>0?-o:o,h=Math.max(0,-(s*f+a)),p=-h*h+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Vc).addScaledVector(sl,f),p}intersectSphere(e,n){Ei.subVectors(e.center,this.origin);const i=Ei.dot(this.direction),r=Ei.dot(Ei)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(o=(e.min.y-f.y)*c,s=(e.max.y-f.y)*c):(o=(e.max.y-f.y)*c,s=(e.min.y-f.y)*c),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,n,i,r,o){Wc.subVectors(n,e),al.subVectors(i,e),Xc.crossVectors(Wc,al);let s=this.direction.dot(Xc),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;ji.subVectors(this.origin,e);const l=a*this.direction.dot(al.crossVectors(ji,al));if(l<0)return null;const u=a*this.direction.dot(Wc.cross(ji));if(u<0||l+u>s)return null;const c=-a*ji.dot(Xc);return c<0?null:this.at(c/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,n,i,r,o,s,a,l,u,c,h,f,p,m,y,g){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u,c,h,f,p,m,y,g)}set(e,n,i,r,o,s,a,l,u,c,h,f,p,m,y,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=o,d[5]=s,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=h,d[14]=f,d[3]=p,d[7]=m,d[11]=y,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ho.setFromMatrixColumn(e,0).length(),o=1/ho.setFromMatrixColumn(e,1).length(),s=1/ho.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(o),h=Math.sin(o);if(e.order==="XYZ"){const f=s*c,p=s*h,m=a*c,y=a*h;n[0]=l*c,n[4]=-l*h,n[8]=u,n[1]=p+m*u,n[5]=f-y*u,n[9]=-a*l,n[2]=y-f*u,n[6]=m+p*u,n[10]=s*l}else if(e.order==="YXZ"){const f=l*c,p=l*h,m=u*c,y=u*h;n[0]=f+y*a,n[4]=m*a-p,n[8]=s*u,n[1]=s*h,n[5]=s*c,n[9]=-a,n[2]=p*a-m,n[6]=y+f*a,n[10]=s*l}else if(e.order==="ZXY"){const f=l*c,p=l*h,m=u*c,y=u*h;n[0]=f-y*a,n[4]=-s*h,n[8]=m+p*a,n[1]=p+m*a,n[5]=s*c,n[9]=y-f*a,n[2]=-s*u,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const f=s*c,p=s*h,m=a*c,y=a*h;n[0]=l*c,n[4]=m*u-p,n[8]=f*u+y,n[1]=l*h,n[5]=y*u+f,n[9]=p*u-m,n[2]=-u,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const f=s*l,p=s*u,m=a*l,y=a*u;n[0]=l*c,n[4]=y-f*h,n[8]=m*h+p,n[1]=h,n[5]=s*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*h+m,n[10]=f-y*h}else if(e.order==="XZY"){const f=s*l,p=s*u,m=a*l,y=a*u;n[0]=l*c,n[4]=-h,n[8]=u*c,n[1]=f*h+y,n[5]=s*c,n[9]=p*h-m,n[2]=m*h-p,n[6]=a*c,n[10]=y*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uM,e,cM)}lookAt(e,n,i){const r=this.elements;return Sn.subVectors(e,n),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),$i.crossVectors(i,Sn),$i.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),$i.crossVectors(i,Sn)),$i.normalize(),ll.crossVectors(Sn,$i),r[0]=$i.x,r[4]=ll.x,r[8]=Sn.x,r[1]=$i.y,r[5]=ll.y,r[9]=Sn.y,r[2]=$i.z,r[6]=ll.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],c=i[1],h=i[5],f=i[9],p=i[13],m=i[2],y=i[6],g=i[10],d=i[14],x=i[3],v=i[7],_=i[11],C=i[15],S=r[0],A=r[4],P=r[8],E=r[12],T=r[1],O=r[5],X=r[9],te=r[13],L=r[2],W=r[6],$=r[10],K=r[14],U=r[3],B=r[7],z=r[11],Q=r[15];return o[0]=s*S+a*T+l*L+u*U,o[4]=s*A+a*O+l*W+u*B,o[8]=s*P+a*X+l*$+u*z,o[12]=s*E+a*te+l*K+u*Q,o[1]=c*S+h*T+f*L+p*U,o[5]=c*A+h*O+f*W+p*B,o[9]=c*P+h*X+f*$+p*z,o[13]=c*E+h*te+f*K+p*Q,o[2]=m*S+y*T+g*L+d*U,o[6]=m*A+y*O+g*W+d*B,o[10]=m*P+y*X+g*$+d*z,o[14]=m*E+y*te+g*K+d*Q,o[3]=x*S+v*T+_*L+C*U,o[7]=x*A+v*O+_*W+C*B,o[11]=x*P+v*X+_*$+C*z,o[15]=x*E+v*te+_*K+C*Q,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],c=e[2],h=e[6],f=e[10],p=e[14],m=e[3],y=e[7],g=e[11],d=e[15];return m*(+o*l*h-r*u*h-o*a*f+i*u*f+r*a*p-i*l*p)+y*(+n*l*p-n*u*f+o*s*f-r*s*p+r*u*c-o*l*c)+g*(+n*u*h-n*a*p-o*s*h+i*s*p+o*a*c-i*u*c)+d*(-r*a*c-n*l*h+n*a*f+r*s*h-i*s*f+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=e[9],f=e[10],p=e[11],m=e[12],y=e[13],g=e[14],d=e[15],x=h*g*u-y*f*u+y*l*p-a*g*p-h*l*d+a*f*d,v=m*f*u-c*g*u-m*l*p+s*g*p+c*l*d-s*f*d,_=c*y*u-m*h*u+m*a*p-s*y*p-c*a*d+s*h*d,C=m*h*l-c*y*l-m*a*f+s*y*f+c*a*g-s*h*g,S=n*x+i*v+r*_+o*C;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/S;return e[0]=x*A,e[1]=(y*f*o-h*g*o-y*r*p+i*g*p+h*r*d-i*f*d)*A,e[2]=(a*g*o-y*l*o+y*r*u-i*g*u-a*r*d+i*l*d)*A,e[3]=(h*l*o-a*f*o-h*r*u+i*f*u+a*r*p-i*l*p)*A,e[4]=v*A,e[5]=(c*g*o-m*f*o+m*r*p-n*g*p-c*r*d+n*f*d)*A,e[6]=(m*l*o-s*g*o-m*r*u+n*g*u+s*r*d-n*l*d)*A,e[7]=(s*f*o-c*l*o+c*r*u-n*f*u-s*r*p+n*l*p)*A,e[8]=_*A,e[9]=(m*h*o-c*y*o-m*i*p+n*y*p+c*i*d-n*h*d)*A,e[10]=(s*y*o-m*a*o+m*i*u-n*y*u-s*i*d+n*a*d)*A,e[11]=(c*a*o-s*h*o-c*i*u+n*h*u+s*i*p-n*a*p)*A,e[12]=C*A,e[13]=(c*y*r-m*h*r+m*i*f-n*y*f-c*i*g+n*h*g)*A,e[14]=(m*a*r-s*y*r-m*i*l+n*y*l+s*i*g-n*a*g)*A,e[15]=(s*h*r-c*a*r+c*i*l-n*h*l-s*i*f+n*a*f)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,c=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*s,0,u*l-r*a,c*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,u=o+o,c=s+s,h=a+a,f=o*u,p=o*c,m=o*h,y=s*c,g=s*h,d=a*h,x=l*u,v=l*c,_=l*h,C=i.x,S=i.y,A=i.z;return r[0]=(1-(y+d))*C,r[1]=(p+_)*C,r[2]=(m-v)*C,r[3]=0,r[4]=(p-_)*S,r[5]=(1-(f+d))*S,r[6]=(g+x)*S,r[7]=0,r[8]=(m+v)*A,r[9]=(g-x)*A,r[10]=(1-(f+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=ho.set(r[0],r[1],r[2]).length();const s=ho.set(r[4],r[5],r[6]).length(),a=ho.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],qn.copy(this);const u=1/o,c=1/s,h=1/a;return qn.elements[0]*=u,qn.elements[1]*=u,qn.elements[2]*=u,qn.elements[4]*=c,qn.elements[5]*=c,qn.elements[6]*=c,qn.elements[8]*=h,qn.elements[9]*=h,qn.elements[10]*=h,n.setFromRotationMatrix(qn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=Ii){const l=this.elements,u=2*o/(n-e),c=2*o/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let p,m;if(a===Ii)p=-(s+o)/(s-o),m=-2*s*o/(s-o);else if(a===Eu)p=-s/(s-o),m=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=Ii){const l=this.elements,u=1/(n-e),c=1/(i-r),h=1/(s-o),f=(n+e)*u,p=(i+r)*c;let m,y;if(a===Ii)m=(s+o)*h,y=-2*h;else if(a===Eu)m=o*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ho=new k,qn=new Mt,uM=new k(0,0,0),cM=new k(1,1,1),$i=new k,ll=new k,Sn=new k,Om=new Mt,Fm=new Ia;class ju{constructor(e=0,n=0,i=0,r=ju.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],c=r[9],h=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Qt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Om.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Om,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Fm.setFromEuler(this),this.setFromQuaternion(Fm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ju.DEFAULT_ORDER="XYZ";class C_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dM=0;const zm=new k,po=new Ia,Mi=new Mt,ul=new k,Is=new k,fM=new k,hM=new Ia,km=new k(1,0,0),Bm=new k(0,1,0),Hm=new k(0,0,1),pM={type:"added"},mM={type:"removed"};class Lt extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new k,n=new ju,i=new Ia,r=new k(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new $e}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new C_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return po.setFromAxisAngle(e,n),this.quaternion.multiply(po),this}rotateOnWorldAxis(e,n){return po.setFromAxisAngle(e,n),this.quaternion.premultiply(po),this}rotateX(e){return this.rotateOnAxis(km,e)}rotateY(e){return this.rotateOnAxis(Bm,e)}rotateZ(e){return this.rotateOnAxis(Hm,e)}translateOnAxis(e,n){return zm.copy(e).applyQuaternion(this.quaternion),this.position.add(zm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(km,e)}translateY(e){return this.translateOnAxis(Bm,e)}translateZ(e){return this.translateOnAxis(Hm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ul.copy(e):ul.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Is,ul,this.up):Mi.lookAt(ul,Is,this.up),this.quaternion.setFromRotationMatrix(Mi),r&&(Mi.extractRotation(r.matrixWorld),po.setFromRotationMatrix(Mi),this.quaternion.premultiply(po.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(pM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(mM)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,e,fM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,hM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];o(e.shapes,h)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),c=s(e.images),h=s(e.shapes),f=s(e.skeletons),p=s(e.animations),m=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function s(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Lt.DEFAULT_UP=new k(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new k,wi=new k,jc=new k,Ti=new k,mo=new k,go=new k,Gm=new k,$c=new k,Yc=new k,qc=new k;let cl=!1;class Un{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Kn.subVectors(e,n),r.cross(Kn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Kn.subVectors(r,n),wi.subVectors(i,n),jc.subVectors(e,n);const s=Kn.dot(Kn),a=Kn.dot(wi),l=Kn.dot(jc),u=wi.dot(wi),c=wi.dot(jc),h=s*u-a*a;if(h===0)return o.set(0,0,0),null;const f=1/h,p=(u*l-a*c)*f,m=(s*c-a*l)*f;return o.set(1-p-m,m,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getUV(e,n,i,r,o,s,a,l){return cl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),cl=!0),this.getInterpolation(e,n,i,r,o,s,a,l)}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Ti.x),l.addScaledVector(s,Ti.y),l.addScaledVector(a,Ti.z),l)}static isFrontFacing(e,n,i,r){return Kn.subVectors(i,n),wi.subVectors(e,n),Kn.cross(wi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Kn.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Un.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,o){return cl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),cl=!0),Un.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}getInterpolation(e,n,i,r,o){return Un.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;mo.subVectors(r,i),go.subVectors(o,i),$c.subVectors(e,i);const l=mo.dot($c),u=go.dot($c);if(l<=0&&u<=0)return n.copy(i);Yc.subVectors(e,r);const c=mo.dot(Yc),h=go.dot(Yc);if(c>=0&&h<=c)return n.copy(r);const f=l*h-c*u;if(f<=0&&l>=0&&c<=0)return s=l/(l-c),n.copy(i).addScaledVector(mo,s);qc.subVectors(e,o);const p=mo.dot(qc),m=go.dot(qc);if(m>=0&&p<=m)return n.copy(o);const y=p*u-l*m;if(y<=0&&u>=0&&m<=0)return a=u/(u-m),n.copy(i).addScaledVector(go,a);const g=c*m-p*h;if(g<=0&&h-c>=0&&p-m>=0)return Gm.subVectors(o,r),a=(h-c)/(h-c+(p-m)),n.copy(r).addScaledVector(Gm,a);const d=1/(g+y+f);return s=y*d,a=f*d,n.copy(i).addScaledVector(mo,s).addScaledVector(go,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const b_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},dl={h:0,s:0,l:0};function Kc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Fe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=tM(e,1),n=Qt(n,0,1),i=Qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=Kc(s,o,e+1/3),this.g=Kc(s,o,e),this.b=Kc(s,o,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=Vt){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Vt){const i=b_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jo(e.r),this.g=Jo(e.g),this.b=Jo(e.b),this}copyLinearToSRGB(e){return this.r=zc(e.r),this.g=zc(e.g),this.b=zc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return et.fromWorkingColorSpace(Kt.copy(this),e),Math.round(Qt(Kt.r*255,0,255))*65536+Math.round(Qt(Kt.g*255,0,255))*256+Math.round(Qt(Kt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace(Kt.copy(this),n);const i=Kt.r,r=Kt.g,o=Kt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const c=(a+s)/2;if(a===s)l=0,u=0;else{const h=s-a;switch(u=c<=.5?h/(s+a):h/(2-s-a),s){case i:l=(r-o)/h+(r<o?6:0);break;case r:l=(o-i)/h+2;break;case o:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace(Kt.copy(this),n),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Vt){et.fromWorkingColorSpace(Kt.copy(this),e);const n=Kt.r,i=Kt.g,r=Kt.b;return e!==Vt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+n,Yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Yi),e.getHSL(dl);const i=Oc(Yi.h,dl.h,n),r=Oc(Yi.s,dl.s,n),o=Oc(Yi.l,dl.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new Fe;Fe.NAMES=b_;let gM=0;class ro extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=Zo,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cf,this.blendDst=df,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=_u,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ao,this.stencilZFail=ao,this.stencilZPass=ao,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zo&&(i.blending=this.blending),this.side!==vr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cf&&(i.blendSrc=this.blendSrc),this.blendDst!==df&&(i.blendDst=this.blendDst),this.blendEquation!==Ir&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_u&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ao&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ao&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ao&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class P_ extends ro{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=d_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new k,fl=new ve;class Vn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=mf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=nr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)fl.fromBufferAttribute(this,n),fl.applyMatrix3(e),this.setXY(n,fl.x,fl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix3(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix4(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyNormalMatrix(e),this.setXYZ(n,At.x,At.y,At.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.transformDirection(e),this.setXYZ(n,At.x,At.y,At.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=bi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=tt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=bi(n,this.array)),n}setX(e,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=bi(n,this.array)),n}setY(e,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=bi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=bi(n,this.array)),n}setW(e,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=tt(n,this.array),i=tt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array),o=tt(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mf&&(e.usage=this.usage),e}}class L_ extends Vn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class D_ extends Vn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class An extends Vn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let vM=0;const Ln=new Mt,Zc=new Lt,vo=new k,En=new Na,Ns=new Na,Ot=new k;class jn extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(M_(e)?D_:L_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new $e().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,n,i){return Ln.makeTranslation(e,n,i),this.applyMatrix4(Ln),this}scale(e,n,i){return Ln.makeScale(e,n,i),this.applyMatrix4(Ln),this}lookAt(e){return Zc.lookAt(e),Zc.updateMatrix(),this.applyMatrix4(Zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vo).negate(),this.translate(vo.x,vo.y,vo.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new An(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Na);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];En.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];Ns.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(En.min,Ns.min),En.expandByPoint(Ot),Ot.addVectors(En.max,Ns.max),En.expandByPoint(Ot)):(En.expandByPoint(Ns.min),En.expandByPoint(Ns.max))}En.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Ot.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Ot));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Ot.fromBufferAttribute(a,u),l&&(vo.fromBufferAttribute(e,u),Ot.add(vo)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,o=n.normal.array,s=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let T=0;T<a;T++)u[T]=new k,c[T]=new k;const h=new k,f=new k,p=new k,m=new ve,y=new ve,g=new ve,d=new k,x=new k;function v(T,O,X){h.fromArray(r,T*3),f.fromArray(r,O*3),p.fromArray(r,X*3),m.fromArray(s,T*2),y.fromArray(s,O*2),g.fromArray(s,X*2),f.sub(h),p.sub(h),y.sub(m),g.sub(m);const te=1/(y.x*g.y-g.x*y.y);isFinite(te)&&(d.copy(f).multiplyScalar(g.y).addScaledVector(p,-y.y).multiplyScalar(te),x.copy(p).multiplyScalar(y.x).addScaledVector(f,-g.x).multiplyScalar(te),u[T].add(d),u[O].add(d),u[X].add(d),c[T].add(x),c[O].add(x),c[X].add(x))}let _=this.groups;_.length===0&&(_=[{start:0,count:i.length}]);for(let T=0,O=_.length;T<O;++T){const X=_[T],te=X.start,L=X.count;for(let W=te,$=te+L;W<$;W+=3)v(i[W+0],i[W+1],i[W+2])}const C=new k,S=new k,A=new k,P=new k;function E(T){A.fromArray(o,T*3),P.copy(A);const O=u[T];C.copy(O),C.sub(A.multiplyScalar(A.dot(O))).normalize(),S.crossVectors(P,O);const te=S.dot(c[T])<0?-1:1;l[T*4]=C.x,l[T*4+1]=C.y,l[T*4+2]=C.z,l[T*4+3]=te}for(let T=0,O=_.length;T<O;++T){const X=_[T],te=X.start,L=X.count;for(let W=te,$=te+L;W<$;W+=3)E(i[W+0]),E(i[W+1]),E(i[W+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new k,o=new k,s=new k,a=new k,l=new k,u=new k,c=new k,h=new k;if(e)for(let f=0,p=e.count;f<p;f+=3){const m=e.getX(f+0),y=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,m),o.fromBufferAttribute(n,y),s.fromBufferAttribute(n,g),c.subVectors(s,o),h.subVectors(r,o),c.cross(h),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,g),a.add(c),l.add(c),u.add(c),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),o.fromBufferAttribute(n,f+1),s.fromBufferAttribute(n,f+2),c.subVectors(s,o),h.subVectors(r,o),c.cross(h),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,h=a.normalized,f=new u.constructor(l.length*c);let p=0,m=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*c;for(let d=0;d<c;d++)f[m++]=u[p++]}return new Vn(f,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new jn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let c=0,h=u.length;c<h;c++){const f=u[c],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,f=u.length;h<f;h++){const p=u[h];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const o=e.morphAttributes;for(const u in o){const c=[],h=o[u];for(let f=0,p=h.length;f<p;f++)c.push(h[f].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,c=s.length;u<c;u++){const h=s[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vm=new Mt,Tr=new R_,hl=new Xu,Wm=new k,_o=new k,yo=new k,xo=new k,Jc=new k,pl=new k,ml=new ve,gl=new ve,vl=new ve,Xm=new k,jm=new k,$m=new k,_l=new k,yl=new k;class kn extends Lt{constructor(e=new jn,n=new P_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){pl.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const c=a[l],h=o[l];c!==0&&(Jc.fromBufferAttribute(h,e),s?pl.addScaledVector(Jc,c):pl.addScaledVector(Jc.sub(n),c))}n.add(pl)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),hl.copy(i.boundingSphere),hl.applyMatrix4(o),Tr.copy(e.ray).recast(e.near),!(hl.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(hl,Wm)===null||Tr.origin.distanceToSquared(Wm)>(e.far-e.near)**2))&&(Vm.copy(o).invert(),Tr.copy(e.ray).applyMatrix4(Vm),!(i.boundingBox!==null&&Tr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Tr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,u=o.attributes.uv,c=o.attributes.uv1,h=o.attributes.normal,f=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(s))for(let m=0,y=f.length;m<y;m++){const g=f[m],d=s[g.materialIndex],x=Math.max(g.start,p.start),v=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let _=x,C=v;_<C;_+=3){const S=a.getX(_),A=a.getX(_+1),P=a.getX(_+2);r=xl(this,d,e,i,u,c,h,S,A,P),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let g=m,d=y;g<d;g+=3){const x=a.getX(g),v=a.getX(g+1),_=a.getX(g+2);r=xl(this,s,e,i,u,c,h,x,v,_),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,y=f.length;m<y;m++){const g=f[m],d=s[g.materialIndex],x=Math.max(g.start,p.start),v=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let _=x,C=v;_<C;_+=3){const S=_,A=_+1,P=_+2;r=xl(this,d,e,i,u,c,h,S,A,P),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=m,d=y;g<d;g+=3){const x=g,v=g+1,_=g+2;r=xl(this,s,e,i,u,c,h,x,v,_),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function _M(t,e,n,i,r,o,s,a){let l;if(e.side===_n?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===vr,a),l===null)return null;yl.copy(a),yl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(yl);return u<n.near||u>n.far?null:{distance:u,point:yl.clone(),object:t}}function xl(t,e,n,i,r,o,s,a,l,u){t.getVertexPosition(a,_o),t.getVertexPosition(l,yo),t.getVertexPosition(u,xo);const c=_M(t,e,n,i,_o,yo,xo,_l);if(c){r&&(ml.fromBufferAttribute(r,a),gl.fromBufferAttribute(r,l),vl.fromBufferAttribute(r,u),c.uv=Un.getInterpolation(_l,_o,yo,xo,ml,gl,vl,new ve)),o&&(ml.fromBufferAttribute(o,a),gl.fromBufferAttribute(o,l),vl.fromBufferAttribute(o,u),c.uv1=Un.getInterpolation(_l,_o,yo,xo,ml,gl,vl,new ve),c.uv2=c.uv1),s&&(Xm.fromBufferAttribute(s,a),jm.fromBufferAttribute(s,l),$m.fromBufferAttribute(s,u),c.normal=Un.getInterpolation(_l,_o,yo,xo,Xm,jm,$m,new k),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new k,materialIndex:0};Un.getNormal(_o,yo,xo,h.normal),c.face=h}return c}class oo extends jn{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],c=[],h=[];let f=0,p=0;m("z","y","x",-1,-1,i,n,e,s,o,0),m("z","y","x",1,-1,i,n,-e,s,o,1),m("x","z","y",1,1,e,i,n,r,s,2),m("x","z","y",1,-1,e,i,-n,r,s,3),m("x","y","z",1,-1,e,n,i,r,o,4),m("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new An(u,3)),this.setAttribute("normal",new An(c,3)),this.setAttribute("uv",new An(h,2));function m(y,g,d,x,v,_,C,S,A,P,E){const T=_/A,O=C/P,X=_/2,te=C/2,L=S/2,W=A+1,$=P+1;let K=0,U=0;const B=new k;for(let z=0;z<$;z++){const Q=z*O-te;for(let ne=0;ne<W;ne++){const Y=ne*T-X;B[y]=Y*x,B[g]=Q*v,B[d]=L,u.push(B.x,B.y,B.z),B[y]=0,B[g]=0,B[d]=S>0?1:-1,c.push(B.x,B.y,B.z),h.push(ne/A),h.push(1-z/P),K+=1}}for(let z=0;z<P;z++)for(let Q=0;Q<A;Q++){const ne=f+Q+W*z,Y=f+Q+W*(z+1),ie=f+(Q+1)+W*(z+1),de=f+(Q+1)+W*z;l.push(ne,Y,de),l.push(Y,ie,de),U+=6}a.addGroup(p,U,E),p+=U,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ds(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function on(t){const e={};for(let n=0;n<t.length;n++){const i=ds(t[n]);for(const r in i)e[r]=i[r]}return e}function yM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function I_(t){return t.getRenderTarget()===null?t.outputColorSpace:et.workingColorSpace}const xM={clone:ds,merge:on};var SM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,EM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qr extends ro{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=SM,this.fragmentShader=EM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ds(e.uniforms),this.uniformsGroups=yM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class N_ extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Ii}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class On extends N_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=vf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Uc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vf*2*Math.atan(Math.tan(Uc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Uc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const So=-90,Eo=1;class MM extends Lt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new On(So,Eo,e,n);r.layers=this.layers,this.add(r);const o=new On(So,Eo,e,n);o.layers=this.layers,this.add(o);const s=new On(So,Eo,e,n);s.layers=this.layers,this.add(s);const a=new On(So,Eo,e,n);a.layers=this.layers,this.add(a);const l=new On(So,Eo,e,n);l.layers=this.layers,this.add(l);const u=new On(So,Eo,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const u of n)this.remove(u);if(e===Ii)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Eu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,u,c]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(h,f,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class U_ extends yn{constructor(e,n,i,r,o,s,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:ls,super(e,n,i,r,o,s,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wM extends Jr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Js("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Xr?Vt:Fn),this.texture=new U_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Nn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new oo(5,5,5),o=new Qr({name:"CubemapFromEquirect",uniforms:ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:fr});o.uniforms.tEquirect.value=n;const s=new kn(r,o),a=n.minFilter;return n.minFilter===ya&&(n.minFilter=Nn),new MM(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const Qc=new k,TM=new k,AM=new $e;class Pr{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Qc.subVectors(i,n).cross(TM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Qc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||AM.getNormalMatrix(e),r=this.coplanarPoint(Qc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ar=new Xu,Sl=new k;class Ah{constructor(e=new Pr,n=new Pr,i=new Pr,r=new Pr,o=new Pr,s=new Pr){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ii){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],u=r[4],c=r[5],h=r[6],f=r[7],p=r[8],m=r[9],y=r[10],g=r[11],d=r[12],x=r[13],v=r[14],_=r[15];if(i[0].setComponents(l-o,f-u,g-p,_-d).normalize(),i[1].setComponents(l+o,f+u,g+p,_+d).normalize(),i[2].setComponents(l+s,f+c,g+m,_+x).normalize(),i[3].setComponents(l-s,f-c,g-m,_-x).normalize(),i[4].setComponents(l-a,f-h,g-y,_-v).normalize(),n===Ii)i[5].setComponents(l+a,f+h,g+y,_+v).normalize();else if(n===Eu)i[5].setComponents(a,h,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ar)}intersectsSprite(e){return Ar.center.set(0,0,0),Ar.radius=.7071067811865476,Ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Sl.x=r.normal.x>0?e.max.x:e.min.x,Sl.y=r.normal.y>0?e.max.y:e.min.y,Sl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Sl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function O_(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function RM(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const h=u.array,f=u.usage,p=h.byteLength,m=t.createBuffer();t.bindBuffer(c,m),t.bufferData(c,h,f),u.onUploadCallback();let y;if(h instanceof Float32Array)y=t.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=t.SHORT;else if(h instanceof Uint32Array)y=t.UNSIGNED_INT;else if(h instanceof Int32Array)y=t.INT;else if(h instanceof Int8Array)y=t.BYTE;else if(h instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:p}}function o(u,c,h){const f=c.array,p=c._updateRange,m=c.updateRanges;if(t.bindBuffer(h,u),p.count===-1&&m.length===0&&t.bufferSubData(h,0,f),m.length!==0){for(let y=0,g=m.length;y<g;y++){const d=m[y];n?t.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):t.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}c.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):t.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const f=i.get(u);(!f||f.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);if(h===void 0)i.set(u,r(u,c));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(h.buffer,u,c),h.version=u.version}}return{get:s,remove:a,update:l}}class $u extends jn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,h=e/a,f=n/l,p=[],m=[],y=[],g=[];for(let d=0;d<c;d++){const x=d*f-s;for(let v=0;v<u;v++){const _=v*h-o;m.push(_,-x,0),y.push(0,0,1),g.push(v/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<a;x++){const v=x+u*d,_=x+u*(d+1),C=x+1+u*(d+1),S=x+1+u*d;p.push(v,_,S),p.push(_,C,S)}this.setIndex(p),this.setAttribute("position",new An(m,3)),this.setAttribute("normal",new An(y,3)),this.setAttribute("uv",new An(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $u(e.width,e.height,e.widthSegments,e.heightSegments)}}var CM=`#ifdef USE_ALPHAHASH
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
}`,Ve={alphahash_fragment:CM,alphahash_pars_fragment:bM,alphamap_fragment:PM,alphamap_pars_fragment:LM,alphatest_fragment:DM,alphatest_pars_fragment:IM,aomap_fragment:NM,aomap_pars_fragment:UM,batching_pars_vertex:OM,batching_vertex:FM,begin_vertex:zM,beginnormal_vertex:kM,bsdfs:BM,iridescence_fragment:HM,bumpmap_pars_fragment:GM,clipping_planes_fragment:VM,clipping_planes_pars_fragment:WM,clipping_planes_pars_vertex:XM,clipping_planes_vertex:jM,color_fragment:$M,color_pars_fragment:YM,color_pars_vertex:qM,color_vertex:KM,common:ZM,cube_uv_reflection_fragment:JM,defaultnormal_vertex:QM,displacementmap_pars_vertex:ew,displacementmap_vertex:tw,emissivemap_fragment:nw,emissivemap_pars_fragment:iw,colorspace_fragment:rw,colorspace_pars_fragment:ow,envmap_fragment:sw,envmap_common_pars_fragment:aw,envmap_pars_fragment:lw,envmap_pars_vertex:uw,envmap_physical_pars_fragment:Sw,envmap_vertex:cw,fog_vertex:dw,fog_pars_vertex:fw,fog_fragment:hw,fog_pars_fragment:pw,gradientmap_pars_fragment:mw,lightmap_fragment:gw,lightmap_pars_fragment:vw,lights_lambert_fragment:_w,lights_lambert_pars_fragment:yw,lights_pars_begin:xw,lights_toon_fragment:Ew,lights_toon_pars_fragment:Mw,lights_phong_fragment:ww,lights_phong_pars_fragment:Tw,lights_physical_fragment:Aw,lights_physical_pars_fragment:Rw,lights_fragment_begin:Cw,lights_fragment_maps:bw,lights_fragment_end:Pw,logdepthbuf_fragment:Lw,logdepthbuf_pars_fragment:Dw,logdepthbuf_pars_vertex:Iw,logdepthbuf_vertex:Nw,map_fragment:Uw,map_pars_fragment:Ow,map_particle_fragment:Fw,map_particle_pars_fragment:zw,metalnessmap_fragment:kw,metalnessmap_pars_fragment:Bw,morphcolor_vertex:Hw,morphnormal_vertex:Gw,morphtarget_pars_vertex:Vw,morphtarget_vertex:Ww,normal_fragment_begin:Xw,normal_fragment_maps:jw,normal_pars_fragment:$w,normal_pars_vertex:Yw,normal_vertex:qw,normalmap_pars_fragment:Kw,clearcoat_normal_fragment_begin:Zw,clearcoat_normal_fragment_maps:Jw,clearcoat_pars_fragment:Qw,iridescence_pars_fragment:e1,opaque_fragment:t1,packing:n1,premultiplied_alpha_fragment:i1,project_vertex:r1,dithering_fragment:o1,dithering_pars_fragment:s1,roughnessmap_fragment:a1,roughnessmap_pars_fragment:l1,shadowmap_pars_fragment:u1,shadowmap_pars_vertex:c1,shadowmap_vertex:d1,shadowmask_pars_fragment:f1,skinbase_vertex:h1,skinning_pars_vertex:p1,skinning_vertex:m1,skinnormal_vertex:g1,specularmap_fragment:v1,specularmap_pars_fragment:_1,tonemapping_fragment:y1,tonemapping_pars_fragment:x1,transmission_fragment:S1,transmission_pars_fragment:E1,uv_pars_fragment:M1,uv_pars_vertex:w1,uv_vertex:T1,worldpos_vertex:A1,background_vert:R1,background_frag:C1,backgroundCube_vert:b1,backgroundCube_frag:P1,cube_vert:L1,cube_frag:D1,depth_vert:I1,depth_frag:N1,distanceRGBA_vert:U1,distanceRGBA_frag:O1,equirect_vert:F1,equirect_frag:z1,linedashed_vert:k1,linedashed_frag:B1,meshbasic_vert:H1,meshbasic_frag:G1,meshlambert_vert:V1,meshlambert_frag:W1,meshmatcap_vert:X1,meshmatcap_frag:j1,meshnormal_vert:$1,meshnormal_frag:Y1,meshphong_vert:q1,meshphong_frag:K1,meshphysical_vert:Z1,meshphysical_frag:J1,meshtoon_vert:Q1,meshtoon_frag:eT,points_vert:tT,points_frag:nT,shadow_vert:iT,shadow_frag:rT,sprite_vert:oT,sprite_frag:sT},ye={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},fi={basic:{uniforms:on([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:on([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:on([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:on([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:on([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:on([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:on([ye.points,ye.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:on([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:on([ye.common,ye.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:on([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:on([ye.sprite,ye.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:on([ye.common,ye.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:on([ye.lights,ye.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};fi.physical={uniforms:on([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const El={r:0,b:0,g:0};function aT(t,e,n,i,r,o,s){const a=new Fe(0);let l=o===!0?0:1,u,c,h=null,f=0,p=null;function m(g,d){let x=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?n:e).get(v)),v===null?y(a,l):v&&v.isColor&&(y(v,1),x=!0);const _=t.xr.getEnvironmentBlendMode();_==="additive"?i.buffers.color.setClear(0,0,0,1,s):_==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||x)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Vu)?(c===void 0&&(c=new kn(new oo(1,1,1),new Qr({name:"BackgroundCubeMaterial",uniforms:ds(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=et.getTransfer(v.colorSpace)!==lt,(h!==v||f!==v.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new kn(new $u(2,2),new Qr({name:"BackgroundMaterial",uniforms:ds(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=et.getTransfer(v.colorSpace)!==lt,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function y(g,d){g.getRGB(El,I_(t)),i.buffers.color.setClear(El.r,El.g,El.b,d,s)}return{getClearColor:function(){return a},setClearColor:function(g,d=1){a.set(g),l=d,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,y(a,l)},render:m}}function lT(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},l=g(null);let u=l,c=!1;function h(L,W,$,K,U){let B=!1;if(s){const z=y(K,$,W);u!==z&&(u=z,p(u.object)),B=d(L,K,$,U),B&&x(L,K,$,U)}else{const z=W.wireframe===!0;(u.geometry!==K.id||u.program!==$.id||u.wireframe!==z)&&(u.geometry=K.id,u.program=$.id,u.wireframe=z,B=!0)}U!==null&&n.update(U,t.ELEMENT_ARRAY_BUFFER),(B||c)&&(c=!1,P(L,W,$,K),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(U).buffer))}function f(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function p(L){return i.isWebGL2?t.bindVertexArray(L):o.bindVertexArrayOES(L)}function m(L){return i.isWebGL2?t.deleteVertexArray(L):o.deleteVertexArrayOES(L)}function y(L,W,$){const K=$.wireframe===!0;let U=a[L.id];U===void 0&&(U={},a[L.id]=U);let B=U[W.id];B===void 0&&(B={},U[W.id]=B);let z=B[K];return z===void 0&&(z=g(f()),B[K]=z),z}function g(L){const W=[],$=[],K=[];for(let U=0;U<r;U++)W[U]=0,$[U]=0,K[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:$,attributeDivisors:K,object:L,attributes:{},index:null}}function d(L,W,$,K){const U=u.attributes,B=W.attributes;let z=0;const Q=$.getAttributes();for(const ne in Q)if(Q[ne].location>=0){const ie=U[ne];let de=B[ne];if(de===void 0&&(ne==="instanceMatrix"&&L.instanceMatrix&&(de=L.instanceMatrix),ne==="instanceColor"&&L.instanceColor&&(de=L.instanceColor)),ie===void 0||ie.attribute!==de||de&&ie.data!==de.data)return!0;z++}return u.attributesNum!==z||u.index!==K}function x(L,W,$,K){const U={},B=W.attributes;let z=0;const Q=$.getAttributes();for(const ne in Q)if(Q[ne].location>=0){let ie=B[ne];ie===void 0&&(ne==="instanceMatrix"&&L.instanceMatrix&&(ie=L.instanceMatrix),ne==="instanceColor"&&L.instanceColor&&(ie=L.instanceColor));const de={};de.attribute=ie,ie&&ie.data&&(de.data=ie.data),U[ne]=de,z++}u.attributes=U,u.attributesNum=z,u.index=K}function v(){const L=u.newAttributes;for(let W=0,$=L.length;W<$;W++)L[W]=0}function _(L){C(L,0)}function C(L,W){const $=u.newAttributes,K=u.enabledAttributes,U=u.attributeDivisors;$[L]=1,K[L]===0&&(t.enableVertexAttribArray(L),K[L]=1),U[L]!==W&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,W),U[L]=W)}function S(){const L=u.newAttributes,W=u.enabledAttributes;for(let $=0,K=W.length;$<K;$++)W[$]!==L[$]&&(t.disableVertexAttribArray($),W[$]=0)}function A(L,W,$,K,U,B,z){z===!0?t.vertexAttribIPointer(L,W,$,U,B):t.vertexAttribPointer(L,W,$,K,U,B)}function P(L,W,$,K){if(i.isWebGL2===!1&&(L.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const U=K.attributes,B=$.getAttributes(),z=W.defaultAttributeValues;for(const Q in B){const ne=B[Q];if(ne.location>=0){let Y=U[Q];if(Y===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(Y=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(Y=L.instanceColor)),Y!==void 0){const ie=Y.normalized,de=Y.itemSize,ge=n.get(Y);if(ge===void 0)continue;const me=ge.buffer,Me=ge.type,oe=ge.bytesPerElement,D=i.isWebGL2===!0&&(Me===t.INT||Me===t.UNSIGNED_INT||Y.gpuType===h_);if(Y.isInterleavedBufferAttribute){const H=Y.data,M=H.stride,F=Y.offset;if(H.isInstancedInterleavedBuffer){for(let N=0;N<ne.locationSize;N++)C(ne.location+N,H.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let N=0;N<ne.locationSize;N++)_(ne.location+N);t.bindBuffer(t.ARRAY_BUFFER,me);for(let N=0;N<ne.locationSize;N++)A(ne.location+N,de/ne.locationSize,Me,ie,M*oe,(F+de/ne.locationSize*N)*oe,D)}else{if(Y.isInstancedBufferAttribute){for(let H=0;H<ne.locationSize;H++)C(ne.location+H,Y.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let H=0;H<ne.locationSize;H++)_(ne.location+H);t.bindBuffer(t.ARRAY_BUFFER,me);for(let H=0;H<ne.locationSize;H++)A(ne.location+H,de/ne.locationSize,Me,ie,de*oe,de/ne.locationSize*H*oe,D)}}else if(z!==void 0){const ie=z[Q];if(ie!==void 0)switch(ie.length){case 2:t.vertexAttrib2fv(ne.location,ie);break;case 3:t.vertexAttrib3fv(ne.location,ie);break;case 4:t.vertexAttrib4fv(ne.location,ie);break;default:t.vertexAttrib1fv(ne.location,ie)}}}}S()}function E(){X();for(const L in a){const W=a[L];for(const $ in W){const K=W[$];for(const U in K)m(K[U].object),delete K[U];delete W[$]}delete a[L]}}function T(L){if(a[L.id]===void 0)return;const W=a[L.id];for(const $ in W){const K=W[$];for(const U in K)m(K[U].object),delete K[U];delete W[$]}delete a[L.id]}function O(L){for(const W in a){const $=a[W];if($[L.id]===void 0)continue;const K=$[L.id];for(const U in K)m(K[U].object),delete K[U];delete $[L.id]}}function X(){te(),c=!0,u!==l&&(u=l,p(u.object))}function te(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:X,resetDefaultState:te,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:O,initAttributes:v,enableAttribute:_,disableUnusedAttributes:S}}function uT(t,e,n,i){const r=i.isWebGL2;let o;function s(c){o=c}function a(c,h){t.drawArrays(o,c,h),n.update(h,o,1)}function l(c,h,f){if(f===0)return;let p,m;if(r)p=t,m="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](o,c,h,f),n.update(h,o,f)}function u(c,h,f){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f;m++)this.render(c[m],h[m]);else{p.multiDrawArraysWEBGL(o,c,0,h,0,f);let m=0;for(let y=0;y<f;y++)m+=h[y];n.update(m,o,1)}}this.setMode=s,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function cT(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=o(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=s||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,_=s||e.has("OES_texture_float"),C=v&&_,S=s?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:m,maxAttributes:y,maxVertexUniforms:g,maxVaryings:d,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:_,floatVertexTextures:C,maxSamples:S}}function dT(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new Pr,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){o=!0,c(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,f){n=c(h,f,0)},this.setState=function(h,f,p){const m=h.clippingPlanes,y=h.clipIntersection,g=h.clipShadows,d=t.get(h);if(!r||m===null||m.length===0||o&&!g)o?c(null):u();else{const x=o?0:i,v=x*4;let _=d.clippingState||null;l.value=_,_=c(m,f,v,p);for(let C=0;C!==v;++C)_[C]=n[C];d.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(h,f,p,m){const y=h!==null?h.length:0;let g=null;if(y!==0){if(g=l.value,m!==!0||g===null){const d=p+y*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<d)&&(g=new Float32Array(d));for(let v=0,_=p;v!==y;++v,_+=4)s.copy(h[v]).applyMatrix4(x,a),s.normal.toArray(g,_),g[_+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function fT(t){let e=new WeakMap;function n(s,a){return a===ff?s.mapping=ls:a===hf&&(s.mapping=us),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===ff||a===hf)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new wM(l.height/2);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",r),n(u.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class F_ extends N_{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ho=4,Ym=[.125,.215,.35,.446,.526,.582],Nr=20,ed=new F_,qm=new Fe;let td=null,nd=0,id=0;const Lr=(1+Math.sqrt(5))/2,Mo=1/Lr,Km=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,Lr,Mo),new k(0,Lr,-Mo),new k(Mo,0,Lr),new k(-Mo,0,Lr),new k(Lr,Mo,0),new k(-Lr,Mo,0)];class Zm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){td=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(td,nd,id),e.scissorTest=!1,Ml(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ls||e.mapping===us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),td=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:xa,format:ni,colorSpace:Hi,depthBuffer:!1},r=Jm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jm(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hT(o)),this._blurMaterial=pT(o,e,n)}return r}_compileMaterial(e){const n=new kn(this._lodPlanes[0],e);this._renderer.compile(n,ed)}_sceneToCubeUV(e,n,i,r){const a=new On(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,f=c.toneMapping;c.getClearColor(qm),c.toneMapping=hr,c.autoClear=!1;const p=new P_({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),m=new kn(new oo,p);let y=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,y=!0):(p.color.copy(qm),y=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):x===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const v=this._cubeSize;Ml(r,x*v,d>2?v:0,v,v),c.setRenderTarget(r),y&&c.render(m,a),c.render(e,a)}m.geometry.dispose(),m.material.dispose(),c.toneMapping=f,c.autoClear=h,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ls||e.mapping===us;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=eg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qm());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new kn(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Ml(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,ed)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=Km[(r-1)%Km.length];this._blur(e,r-1,r,o,s)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new kn(this._lodPlanes[r],u),f=u.uniforms,p=this._sizeLods[i]-1,m=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Nr-1),y=o/m,g=isFinite(o)?1+Math.floor(c*y):Nr;g>Nr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Nr}`);const d=[];let x=0;for(let A=0;A<Nr;++A){const P=A/y,E=Math.exp(-P*P/2);d.push(E),A===0?x+=E:A<g&&(x+=2*E)}for(let A=0;A<d.length;A++)d[A]=d[A]/x;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=d,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=m,f.mipInt.value=v-i;const _=this._sizeLods[r],C=3*_*(r>v-Ho?r-v+Ho:0),S=4*(this._cubeSize-_);Ml(n,C,S,3*_,2*_),l.setRenderTarget(n),l.render(h,ed)}}function hT(t){const e=[],n=[],i=[];let r=t;const o=t-Ho+1+Ym.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-Ho?l=Ym[s-t+Ho-1]:s===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,h=1+u,f=[c,c,h,c,h,h,c,c,h,h,c,h],p=6,m=6,y=3,g=2,d=1,x=new Float32Array(y*m*p),v=new Float32Array(g*m*p),_=new Float32Array(d*m*p);for(let S=0;S<p;S++){const A=S%3*2/3-1,P=S>2?0:-1,E=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];x.set(E,y*m*S),v.set(f,g*m*S);const T=[S,S,S,S,S,S];_.set(T,d*m*S)}const C=new jn;C.setAttribute("position",new Vn(x,y)),C.setAttribute("uv",new Vn(v,g)),C.setAttribute("faceIndex",new Vn(_,d)),e.push(C),r>Ho&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Jm(t,e,n){const i=new Jr(t,e,n);return i.texture.mapping=Vu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ml(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function pT(t,e,n){const i=new Float32Array(Nr),r=new k(0,1,0);return new Qr({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Rh(),fragmentShader:`

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
		`,blending:fr,depthTest:!1,depthWrite:!1})}function Qm(){return new Qr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rh(),fragmentShader:`

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
		`,blending:fr,depthTest:!1,depthWrite:!1})}function eg(){return new Qr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function Rh(){return`

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
	`}function mT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===ff||l===hf,c=l===ls||l===us;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new Zm(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(u&&h&&h.height>0||c&&h&&r(h)){n===null&&(n=new Zm(t));const f=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",o),f.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function o(a){const l=a.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function gT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function vT(t,e,n,i){const r={},o=new WeakMap;function s(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);for(const m in f.morphAttributes){const y=f.morphAttributes[m];for(let g=0,d=y.length;g<d;g++)e.remove(y[g])}f.removeEventListener("dispose",s),delete r[f.id];const p=o.get(f);p&&(e.remove(p),o.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const m in f)e.update(f[m],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const m in p){const y=p[m];for(let g=0,d=y.length;g<d;g++)e.update(y[g],t.ARRAY_BUFFER)}}function u(h){const f=[],p=h.index,m=h.attributes.position;let y=0;if(p!==null){const x=p.array;y=p.version;for(let v=0,_=x.length;v<_;v+=3){const C=x[v+0],S=x[v+1],A=x[v+2];f.push(C,S,S,A,A,C)}}else if(m!==void 0){const x=m.array;y=m.version;for(let v=0,_=x.length/3-1;v<_;v+=3){const C=v+0,S=v+1,A=v+2;f.push(C,S,S,A,A,C)}}else return;const g=new(M_(f)?D_:L_)(f,1);g.version=y;const d=o.get(h);d&&e.remove(d),o.set(h,g)}function c(h){const f=o.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&u(h)}else u(h);return o.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function _T(t,e,n,i){const r=i.isWebGL2;let o;function s(p){o=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function c(p,m){t.drawElements(o,m,a,p*l),n.update(m,o,1)}function h(p,m,y){if(y===0)return;let g,d;if(r)g=t,d="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[d](o,m,a,p*l,y),n.update(m,o,y)}function f(p,m,y){if(y===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<y;d++)this.render(p[d]/l,m[d]);else{g.multiDrawElementsWEBGL(o,m,0,a,p,0,y);let d=0;for(let x=0;x<y;x++)d+=m[x];n.update(d,o,1)}}this.setMode=s,this.setIndex=u,this.render=c,this.renderInstances=h,this.renderMultiDraw=f}function yT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function xT(t,e){return t[0]-e[0]}function ST(t,e){return Math.abs(e[1])-Math.abs(t[1])}function ET(t,e,n){const i={},r=new Float32Array(8),o=new WeakMap,s=new zt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,h){const f=u.morphTargetInfluences;if(e.isWebGL2===!0){const m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,y=m!==void 0?m.length:0;let g=o.get(c);if(g===void 0||g.count!==y){let W=function(){te.dispose(),o.delete(c),c.removeEventListener("dispose",W)};var p=W;g!==void 0&&g.texture.dispose();const v=c.morphAttributes.position!==void 0,_=c.morphAttributes.normal!==void 0,C=c.morphAttributes.color!==void 0,S=c.morphAttributes.position||[],A=c.morphAttributes.normal||[],P=c.morphAttributes.color||[];let E=0;v===!0&&(E=1),_===!0&&(E=2),C===!0&&(E=3);let T=c.attributes.position.count*E,O=1;T>e.maxTextureSize&&(O=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const X=new Float32Array(T*O*4*y),te=new A_(X,T,O,y);te.type=nr,te.needsUpdate=!0;const L=E*4;for(let $=0;$<y;$++){const K=S[$],U=A[$],B=P[$],z=T*O*4*$;for(let Q=0;Q<K.count;Q++){const ne=Q*L;v===!0&&(s.fromBufferAttribute(K,Q),X[z+ne+0]=s.x,X[z+ne+1]=s.y,X[z+ne+2]=s.z,X[z+ne+3]=0),_===!0&&(s.fromBufferAttribute(U,Q),X[z+ne+4]=s.x,X[z+ne+5]=s.y,X[z+ne+6]=s.z,X[z+ne+7]=0),C===!0&&(s.fromBufferAttribute(B,Q),X[z+ne+8]=s.x,X[z+ne+9]=s.y,X[z+ne+10]=s.z,X[z+ne+11]=B.itemSize===4?s.w:1)}}g={count:y,texture:te,size:new ve(T,O)},o.set(c,g),c.addEventListener("dispose",W)}let d=0;for(let v=0;v<f.length;v++)d+=f[v];const x=c.morphTargetsRelative?1:1-d;h.getUniforms().setValue(t,"morphTargetBaseInfluence",x),h.getUniforms().setValue(t,"morphTargetInfluences",f),h.getUniforms().setValue(t,"morphTargetsTexture",g.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",g.size)}else{const m=f===void 0?0:f.length;let y=i[c.id];if(y===void 0||y.length!==m){y=[];for(let _=0;_<m;_++)y[_]=[_,0];i[c.id]=y}for(let _=0;_<m;_++){const C=y[_];C[0]=_,C[1]=f[_]}y.sort(ST);for(let _=0;_<8;_++)_<m&&y[_][1]?(a[_][0]=y[_][0],a[_][1]=y[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(xT);const g=c.morphAttributes.position,d=c.morphAttributes.normal;let x=0;for(let _=0;_<8;_++){const C=a[_],S=C[0],A=C[1];S!==Number.MAX_SAFE_INTEGER&&A?(g&&c.getAttribute("morphTarget"+_)!==g[S]&&c.setAttribute("morphTarget"+_,g[S]),d&&c.getAttribute("morphNormal"+_)!==d[S]&&c.setAttribute("morphNormal"+_,d[S]),r[_]=A,x+=A):(g&&c.hasAttribute("morphTarget"+_)===!0&&c.deleteAttribute("morphTarget"+_),d&&c.hasAttribute("morphNormal"+_)===!0&&c.deleteAttribute("morphNormal"+_),r[_]=0)}const v=c.morphTargetsRelative?1:1-x;h.getUniforms().setValue(t,"morphTargetBaseInfluence",v),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function MT(t,e,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,c=l.geometry,h=e.get(l,c);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function s(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:s}}class z_ extends yn{constructor(e,n,i,r,o,s,a,l,u,c){if(c=c!==void 0?c:Wr,c!==Wr&&c!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Wr&&(i=tr),i===void 0&&c===cs&&(i=Vr),super(null,r,o,s,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const k_=new yn,B_=new z_(1,1);B_.compareFunction=E_;const H_=new A_,G_=new aM,V_=new U_,tg=[],ng=[],ig=new Float32Array(16),rg=new Float32Array(9),og=new Float32Array(4);function ys(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=tg[r];if(o===void 0&&(o=new Float32Array(r),tg[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Dt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function It(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Yu(t,e){let n=ng[e];n===void 0&&(n=new Int32Array(e),ng[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function wT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function TT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2fv(this.addr,e),It(n,e)}}function AT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dt(n,e))return;t.uniform3fv(this.addr,e),It(n,e)}}function RT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4fv(this.addr,e),It(n,e)}}function CT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;og.set(i),t.uniformMatrix2fv(this.addr,!1,og),It(n,i)}}function bT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;rg.set(i),t.uniformMatrix3fv(this.addr,!1,rg),It(n,i)}}function PT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;ig.set(i),t.uniformMatrix4fv(this.addr,!1,ig),It(n,i)}}function LT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function DT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2iv(this.addr,e),It(n,e)}}function IT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3iv(this.addr,e),It(n,e)}}function NT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4iv(this.addr,e),It(n,e)}}function UT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function OT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2uiv(this.addr,e),It(n,e)}}function FT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3uiv(this.addr,e),It(n,e)}}function zT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4uiv(this.addr,e),It(n,e)}}function kT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const o=this.type===t.SAMPLER_2D_SHADOW?B_:k_;n.setTexture2D(e||o,r)}function BT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||G_,r)}function HT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||V_,r)}function GT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||H_,r)}function VT(t){switch(t){case 5126:return wT;case 35664:return TT;case 35665:return AT;case 35666:return RT;case 35674:return CT;case 35675:return bT;case 35676:return PT;case 5124:case 35670:return LT;case 35667:case 35671:return DT;case 35668:case 35672:return IT;case 35669:case 35673:return NT;case 5125:return UT;case 36294:return OT;case 36295:return FT;case 36296:return zT;case 35678:case 36198:case 36298:case 36306:case 35682:return kT;case 35679:case 36299:case 36307:return BT;case 35680:case 36300:case 36308:case 36293:return HT;case 36289:case 36303:case 36311:case 36292:return GT}}function WT(t,e){t.uniform1fv(this.addr,e)}function XT(t,e){const n=ys(e,this.size,2);t.uniform2fv(this.addr,n)}function jT(t,e){const n=ys(e,this.size,3);t.uniform3fv(this.addr,n)}function $T(t,e){const n=ys(e,this.size,4);t.uniform4fv(this.addr,n)}function YT(t,e){const n=ys(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function qT(t,e){const n=ys(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function KT(t,e){const n=ys(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function ZT(t,e){t.uniform1iv(this.addr,e)}function JT(t,e){t.uniform2iv(this.addr,e)}function QT(t,e){t.uniform3iv(this.addr,e)}function eA(t,e){t.uniform4iv(this.addr,e)}function tA(t,e){t.uniform1uiv(this.addr,e)}function nA(t,e){t.uniform2uiv(this.addr,e)}function iA(t,e){t.uniform3uiv(this.addr,e)}function rA(t,e){t.uniform4uiv(this.addr,e)}function oA(t,e,n){const i=this.cache,r=e.length,o=Yu(n,r);Dt(i,o)||(t.uniform1iv(this.addr,o),It(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||k_,o[s])}function sA(t,e,n){const i=this.cache,r=e.length,o=Yu(n,r);Dt(i,o)||(t.uniform1iv(this.addr,o),It(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||G_,o[s])}function aA(t,e,n){const i=this.cache,r=e.length,o=Yu(n,r);Dt(i,o)||(t.uniform1iv(this.addr,o),It(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||V_,o[s])}function lA(t,e,n){const i=this.cache,r=e.length,o=Yu(n,r);Dt(i,o)||(t.uniform1iv(this.addr,o),It(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||H_,o[s])}function uA(t){switch(t){case 5126:return WT;case 35664:return XT;case 35665:return jT;case 35666:return $T;case 35674:return YT;case 35675:return qT;case 35676:return KT;case 5124:case 35670:return ZT;case 35667:case 35671:return JT;case 35668:case 35672:return QT;case 35669:case 35673:return eA;case 5125:return tA;case 36294:return nA;case 36295:return iA;case 36296:return rA;case 35678:case 36198:case 36298:case 36306:case 35682:return oA;case 35679:case 36299:case 36307:return sA;case 35680:case 36300:case 36308:case 36293:return aA;case 36289:case 36303:case 36311:case 36292:return lA}}class cA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=VT(n.type)}}class dA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=uA(n.type)}}class fA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const rd=/(\w+)(\])?(\[|\.)?/g;function sg(t,e){t.seq.push(e),t.map[e.id]=e}function hA(t,e,n){const i=t.name,r=i.length;for(rd.lastIndex=0;;){const o=rd.exec(i),s=rd.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){sg(n,u===void 0?new cA(a,t,e):new dA(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new fA(a),sg(n,h)),n=h}}}class jl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);hA(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function ag(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const pA=37297;let mA=0;function gA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function vA(t){const e=et.getPrimaries(et.workingColorSpace),n=et.getPrimaries(t);let i;switch(e===n?i="":e===Su&&n===xu?i="LinearDisplayP3ToLinearSRGB":e===xu&&n===Su&&(i="LinearSRGBToLinearDisplayP3"),t){case Hi:case Wu:return[i,"LinearTransferOETF"];case Vt:case Th:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function lg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+gA(t.getShaderSource(e),s)}else return r}function _A(t,e){const n=vA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function yA(t,e){let n;switch(e){case PE:n="Linear";break;case LE:n="Reinhard";break;case DE:n="OptimizedCineon";break;case IE:n="ACESFilmic";break;case UE:n="AgX";break;case NE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function xA(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Go).join(`
`)}function SA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Go).join(`
`)}function EA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function MA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function Go(t){return t!==""}function ug(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wA=/^[ \t]*#include +<([\w\d./]+)>/gm;function yf(t){return t.replace(wA,AA)}const TA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function AA(t,e){let n=Ve[e];if(n===void 0){const i=TA.get(e);if(i!==void 0)n=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return yf(n)}const RA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dg(t){return t.replace(RA,CA)}function CA(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function fg(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===u_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===c_?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ai&&(e="SHADOWMAP_TYPE_VSM"),e}function PA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ls:case us:e="ENVMAP_TYPE_CUBE";break;case Vu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function LA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case us:e="ENVMAP_MODE_REFRACTION";break}return e}function DA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case d_:e="ENVMAP_BLENDING_MULTIPLY";break;case CE:e="ENVMAP_BLENDING_MIX";break;case bE:e="ENVMAP_BLENDING_ADD";break}return e}function IA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function NA(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=bA(n),u=PA(n),c=LA(n),h=DA(n),f=IA(n),p=n.isWebGL2?"":xA(n),m=SA(n),y=EA(o),g=r.createProgram();let d,x,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Go).join(`
`),d.length>0&&(d+=`
`),x=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Go).join(`
`),x.length>0&&(x+=`
`)):(d=[fg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),x=[p,fg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==hr?"#define TONE_MAPPING":"",n.toneMapping!==hr?Ve.tonemapping_pars_fragment:"",n.toneMapping!==hr?yA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,_A("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Go).join(`
`)),s=yf(s),s=ug(s,n),s=cg(s,n),a=yf(a),a=ug(a,n),a=cg(a,n),s=dg(s),a=dg(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,x=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Pm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Pm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const _=v+d+s,C=v+x+a,S=ag(r,r.VERTEX_SHADER,_),A=ag(r,r.FRAGMENT_SHADER,C);r.attachShader(g,S),r.attachShader(g,A),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function P(X){if(t.debug.checkShaderErrors){const te=r.getProgramInfoLog(g).trim(),L=r.getShaderInfoLog(S).trim(),W=r.getShaderInfoLog(A).trim();let $=!0,K=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,S,A);else{const U=lg(r,S,"vertex"),B=lg(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+te+`
`+U+`
`+B)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(L===""||W==="")&&(K=!1);K&&(X.diagnostics={runnable:$,programLog:te,vertexShader:{log:L,prefix:d},fragmentShader:{log:W,prefix:x}})}r.deleteShader(S),r.deleteShader(A),E=new jl(r,g),T=MA(r,g)}let E;this.getUniforms=function(){return E===void 0&&P(this),E};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let O=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(g,pA)),O},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=mA++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=A,this}let UA=0;class OA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new FA(e),n.set(e,i)),i}}class FA{constructor(e){this.id=UA++,this.code=e,this.usedTimes=0}}function zA(t,e,n,i,r,o,s){const a=new C_,l=new OA,u=[],c=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return E===0?"uv":`uv${E}`}function g(E,T,O,X,te){const L=X.fog,W=te.geometry,$=E.isMeshStandardMaterial?X.environment:null,K=(E.isMeshStandardMaterial?n:e).get(E.envMap||$),U=K&&K.mapping===Vu?K.image.height:null,B=m[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const z=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Q=z!==void 0?z.length:0;let ne=0;W.morphAttributes.position!==void 0&&(ne=1),W.morphAttributes.normal!==void 0&&(ne=2),W.morphAttributes.color!==void 0&&(ne=3);let Y,ie,de,ge;if(B){const tn=fi[B];Y=tn.vertexShader,ie=tn.fragmentShader}else Y=E.vertexShader,ie=E.fragmentShader,l.update(E),de=l.getVertexShaderID(E),ge=l.getFragmentShaderID(E);const me=t.getRenderTarget(),Me=te.isInstancedMesh===!0,oe=te.isBatchedMesh===!0,D=!!E.map,H=!!E.matcap,M=!!K,F=!!E.aoMap,N=!!E.lightMap,ee=!!E.bumpMap,G=!!E.normalMap,pe=!!E.displacementMap,fe=!!E.emissiveMap,R=!!E.metalnessMap,w=!!E.roughnessMap,V=E.anisotropy>0,ce=E.clearcoat>0,le=E.iridescence>0,ae=E.sheen>0,be=E.transmission>0,xe=V&&!!E.anisotropyMap,Ae=ce&&!!E.clearcoatMap,De=ce&&!!E.clearcoatNormalMap,Be=ce&&!!E.clearcoatRoughnessMap,ue=le&&!!E.iridescenceMap,Ze=le&&!!E.iridescenceThicknessMap,Ye=ae&&!!E.sheenColorMap,ze=ae&&!!E.sheenRoughnessMap,Le=!!E.specularMap,Ce=!!E.specularColorMap,Ge=!!E.specularIntensityMap,Je=be&&!!E.transmissionMap,_t=be&&!!E.thicknessMap,Xe=!!E.gradientMap,_e=!!E.alphaMap,I=E.alphaTest>0,Se=!!E.alphaHash,Ee=!!E.extensions,Ue=!!W.attributes.uv1,Ie=!!W.attributes.uv2,nt=!!W.attributes.uv3;let it=hr;return E.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(it=t.toneMapping),{isWebGL2:c,shaderID:B,shaderType:E.type,shaderName:E.name,vertexShader:Y,fragmentShader:ie,defines:E.defines,customVertexShaderID:de,customFragmentShaderID:ge,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:oe,instancing:Me,instancingColor:Me&&te.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:me===null?t.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Hi,map:D,matcap:H,envMap:M,envMapMode:M&&K.mapping,envMapCubeUVHeight:U,aoMap:F,lightMap:N,bumpMap:ee,normalMap:G,displacementMap:f&&pe,emissiveMap:fe,normalMapObjectSpace:G&&E.normalMapType===$E,normalMapTangentSpace:G&&E.normalMapType===S_,metalnessMap:R,roughnessMap:w,anisotropy:V,anisotropyMap:xe,clearcoat:ce,clearcoatMap:Ae,clearcoatNormalMap:De,clearcoatRoughnessMap:Be,iridescence:le,iridescenceMap:ue,iridescenceThicknessMap:Ze,sheen:ae,sheenColorMap:Ye,sheenRoughnessMap:ze,specularMap:Le,specularColorMap:Ce,specularIntensityMap:Ge,transmission:be,transmissionMap:Je,thicknessMap:_t,gradientMap:Xe,opaque:E.transparent===!1&&E.blending===Zo,alphaMap:_e,alphaTest:I,alphaHash:Se,combine:E.combine,mapUv:D&&y(E.map.channel),aoMapUv:F&&y(E.aoMap.channel),lightMapUv:N&&y(E.lightMap.channel),bumpMapUv:ee&&y(E.bumpMap.channel),normalMapUv:G&&y(E.normalMap.channel),displacementMapUv:pe&&y(E.displacementMap.channel),emissiveMapUv:fe&&y(E.emissiveMap.channel),metalnessMapUv:R&&y(E.metalnessMap.channel),roughnessMapUv:w&&y(E.roughnessMap.channel),anisotropyMapUv:xe&&y(E.anisotropyMap.channel),clearcoatMapUv:Ae&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:De&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:ze&&y(E.sheenRoughnessMap.channel),specularMapUv:Le&&y(E.specularMap.channel),specularColorMapUv:Ce&&y(E.specularColorMap.channel),specularIntensityMapUv:Ge&&y(E.specularIntensityMap.channel),transmissionMapUv:Je&&y(E.transmissionMap.channel),thicknessMapUv:_t&&y(E.thicknessMap.channel),alphaMapUv:_e&&y(E.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(G||V),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:Ue,vertexUv2s:Ie,vertexUv3s:nt,pointsUvs:te.isPoints===!0&&!!W.attributes.uv&&(D||_e),fog:!!L,useFog:E.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:te.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ne,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&O.length>0,shadowMapType:t.shadowMap.type,toneMapping:it,useLegacyLights:t._useLegacyLights,decodeVideoTexture:D&&E.map.isVideoTexture===!0&&et.getTransfer(E.map.colorSpace)===lt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===fn,flipSided:E.side===_n,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:Ee&&E.extensions.derivatives===!0,extensionFragDepth:Ee&&E.extensions.fragDepth===!0,extensionDrawBuffers:Ee&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ee&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ee&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function d(E){const T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(const O in E.defines)T.push(O),T.push(E.defines[O]);return E.isRawShaderMaterial===!1&&(x(T,E),v(T,E),T.push(t.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function x(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function v(E,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),E.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function _(E){const T=m[E.type];let O;if(T){const X=fi[T];O=xM.clone(X.uniforms)}else O=E.uniforms;return O}function C(E,T){let O;for(let X=0,te=u.length;X<te;X++){const L=u[X];if(L.cacheKey===T){O=L,++O.usedTimes;break}}return O===void 0&&(O=new NA(t,T,E,o),u.push(O)),O}function S(E){if(--E.usedTimes===0){const T=u.indexOf(E);u[T]=u[u.length-1],u.pop(),E.destroy()}}function A(E){l.remove(E)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:_,acquireProgram:C,releaseProgram:S,releaseShaderCache:A,programs:u,dispose:P}}function kA(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function BA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function hg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function pg(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(h,f,p,m,y,g){let d=t[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:m,renderOrder:h.renderOrder,z:y,group:g},t[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=m,d.renderOrder=h.renderOrder,d.z=y,d.group=g),e++,d}function a(h,f,p,m,y,g){const d=s(h,f,p,m,y,g);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(h,f,p,m,y,g){const d=s(h,f,p,m,y,g);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function u(h,f){n.length>1&&n.sort(h||BA),i.length>1&&i.sort(f||hg),r.length>1&&r.sort(f||hg)}function c(){for(let h=e,f=t.length;h<f;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:c,sort:u}}function HA(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new pg,t.set(i,[s])):r>=o.length?(s=new pg,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function GA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new Fe};break;case"SpotLight":n={position:new k,direction:new k,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":n={color:new Fe,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function VA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let WA=0;function XA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function jA(t,e){const n=new GA,i=VA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new k);const o=new k,s=new Mt,a=new Mt;function l(c,h){let f=0,p=0,m=0;for(let X=0;X<9;X++)r.probe[X].set(0,0,0);let y=0,g=0,d=0,x=0,v=0,_=0,C=0,S=0,A=0,P=0,E=0;c.sort(XA);const T=h===!0?Math.PI:1;for(let X=0,te=c.length;X<te;X++){const L=c[X],W=L.color,$=L.intensity,K=L.distance,U=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=W.r*$*T,p+=W.g*$*T,m+=W.b*$*T;else if(L.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(L.sh.coefficients[B],$);E++}else if(L.isDirectionalLight){const B=n.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity*T),L.castShadow){const z=L.shadow,Q=i.get(L);Q.shadowBias=z.bias,Q.shadowNormalBias=z.normalBias,Q.shadowRadius=z.radius,Q.shadowMapSize=z.mapSize,r.directionalShadow[y]=Q,r.directionalShadowMap[y]=U,r.directionalShadowMatrix[y]=L.shadow.matrix,_++}r.directional[y]=B,y++}else if(L.isSpotLight){const B=n.get(L);B.position.setFromMatrixPosition(L.matrixWorld),B.color.copy(W).multiplyScalar($*T),B.distance=K,B.coneCos=Math.cos(L.angle),B.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),B.decay=L.decay,r.spot[d]=B;const z=L.shadow;if(L.map&&(r.spotLightMap[A]=L.map,A++,z.updateMatrices(L),L.castShadow&&P++),r.spotLightMatrix[d]=z.matrix,L.castShadow){const Q=i.get(L);Q.shadowBias=z.bias,Q.shadowNormalBias=z.normalBias,Q.shadowRadius=z.radius,Q.shadowMapSize=z.mapSize,r.spotShadow[d]=Q,r.spotShadowMap[d]=U,S++}d++}else if(L.isRectAreaLight){const B=n.get(L);B.color.copy(W).multiplyScalar($),B.halfWidth.set(L.width*.5,0,0),B.halfHeight.set(0,L.height*.5,0),r.rectArea[x]=B,x++}else if(L.isPointLight){const B=n.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity*T),B.distance=L.distance,B.decay=L.decay,L.castShadow){const z=L.shadow,Q=i.get(L);Q.shadowBias=z.bias,Q.shadowNormalBias=z.normalBias,Q.shadowRadius=z.radius,Q.shadowMapSize=z.mapSize,Q.shadowCameraNear=z.camera.near,Q.shadowCameraFar=z.camera.far,r.pointShadow[g]=Q,r.pointShadowMap[g]=U,r.pointShadowMatrix[g]=L.shadow.matrix,C++}r.point[g]=B,g++}else if(L.isHemisphereLight){const B=n.get(L);B.skyColor.copy(L.color).multiplyScalar($*T),B.groundColor.copy(L.groundColor).multiplyScalar($*T),r.hemi[v]=B,v++}}x>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_FLOAT_1,r.rectAreaLTC2=ye.LTC_FLOAT_2):(r.rectAreaLTC1=ye.LTC_HALF_1,r.rectAreaLTC2=ye.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_FLOAT_1,r.rectAreaLTC2=ye.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_HALF_1,r.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=m;const O=r.hash;(O.directionalLength!==y||O.pointLength!==g||O.spotLength!==d||O.rectAreaLength!==x||O.hemiLength!==v||O.numDirectionalShadows!==_||O.numPointShadows!==C||O.numSpotShadows!==S||O.numSpotMaps!==A||O.numLightProbes!==E)&&(r.directional.length=y,r.spot.length=d,r.rectArea.length=x,r.point.length=g,r.hemi.length=v,r.directionalShadow.length=_,r.directionalShadowMap.length=_,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=S,r.spotShadowMap.length=S,r.directionalShadowMatrix.length=_,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=S+A-P,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=E,O.directionalLength=y,O.pointLength=g,O.spotLength=d,O.rectAreaLength=x,O.hemiLength=v,O.numDirectionalShadows=_,O.numPointShadows=C,O.numSpotShadows=S,O.numSpotMaps=A,O.numLightProbes=E,r.version=WA++)}function u(c,h){let f=0,p=0,m=0,y=0,g=0;const d=h.matrixWorldInverse;for(let x=0,v=c.length;x<v;x++){const _=c[x];if(_.isDirectionalLight){const C=r.directional[f];C.direction.setFromMatrixPosition(_.matrixWorld),o.setFromMatrixPosition(_.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(d),f++}else if(_.isSpotLight){const C=r.spot[m];C.position.setFromMatrixPosition(_.matrixWorld),C.position.applyMatrix4(d),C.direction.setFromMatrixPosition(_.matrixWorld),o.setFromMatrixPosition(_.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(d),m++}else if(_.isRectAreaLight){const C=r.rectArea[y];C.position.setFromMatrixPosition(_.matrixWorld),C.position.applyMatrix4(d),a.identity(),s.copy(_.matrixWorld),s.premultiply(d),a.extractRotation(s),C.halfWidth.set(_.width*.5,0,0),C.halfHeight.set(0,_.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),y++}else if(_.isPointLight){const C=r.point[p];C.position.setFromMatrixPosition(_.matrixWorld),C.position.applyMatrix4(d),p++}else if(_.isHemisphereLight){const C=r.hemi[g];C.direction.setFromMatrixPosition(_.matrixWorld),C.direction.transformDirection(d),g++}}}return{setup:l,setupView:u,state:r}}function mg(t,e){const n=new jA(t,e),i=[],r=[];function o(){i.length=0,r.length=0}function s(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function u(h){n.setupView(i,h)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:s,pushShadow:a}}function $A(t,e){let n=new WeakMap;function i(o,s=0){const a=n.get(o);let l;return a===void 0?(l=new mg(t,e),n.set(o,[l])):s>=a.length?(l=new mg(t,e),a.push(l)):l=a[s],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class YA extends ro{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=XE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qA extends ro{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const KA=`void main() {
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
}`;function JA(t,e,n){let i=new Ah;const r=new ve,o=new ve,s=new zt,a=new YA({depthPacking:jE}),l=new qA,u={},c=n.maxTextureSize,h={[vr]:_n,[_n]:vr,[fn]:fn},f=new Qr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:KA,fragmentShader:ZA}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const m=new jn;m.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new kn(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=u_;let d=this.type;this.render=function(S,A,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;const E=t.getRenderTarget(),T=t.getActiveCubeFace(),O=t.getActiveMipmapLevel(),X=t.state;X.setBlending(fr),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const te=d!==Ai&&this.type===Ai,L=d===Ai&&this.type!==Ai;for(let W=0,$=S.length;W<$;W++){const K=S[W],U=K.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const B=U.getFrameExtents();if(r.multiply(B),o.copy(U.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(o.x=Math.floor(c/B.x),r.x=o.x*B.x,U.mapSize.x=o.x),r.y>c&&(o.y=Math.floor(c/B.y),r.y=o.y*B.y,U.mapSize.y=o.y)),U.map===null||te===!0||L===!0){const Q=this.type!==Ai?{minFilter:an,magFilter:an}:{};U.map!==null&&U.map.dispose(),U.map=new Jr(r.x,r.y,Q),U.map.texture.name=K.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const z=U.getViewportCount();for(let Q=0;Q<z;Q++){const ne=U.getViewport(Q);s.set(o.x*ne.x,o.y*ne.y,o.x*ne.z,o.y*ne.w),X.viewport(s),U.updateMatrices(K,Q),i=U.getFrustum(),_(A,P,U.camera,K,this.type)}U.isPointLightShadow!==!0&&this.type===Ai&&x(U,P),U.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(E,T,O)};function x(S,A){const P=e.update(y);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Jr(r.x,r.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,t.setRenderTarget(S.mapPass),t.clear(),t.renderBufferDirect(A,null,P,f,y,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,t.setRenderTarget(S.map),t.clear(),t.renderBufferDirect(A,null,P,p,y,null)}function v(S,A,P,E){let T=null;const O=P.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(O!==void 0)T=O;else if(T=P.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const X=T.uuid,te=A.uuid;let L=u[X];L===void 0&&(L={},u[X]=L);let W=L[te];W===void 0&&(W=T.clone(),L[te]=W,A.addEventListener("dispose",C)),T=W}if(T.visible=A.visible,T.wireframe=A.wireframe,E===Ai?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:h[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,P.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const X=t.properties.get(T);X.light=P}return T}function _(S,A,P,E,T){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&T===Ai)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,S.matrixWorld);const te=e.update(S),L=S.material;if(Array.isArray(L)){const W=te.groups;for(let $=0,K=W.length;$<K;$++){const U=W[$],B=L[U.materialIndex];if(B&&B.visible){const z=v(S,B,E,T);S.onBeforeShadow(t,S,A,P,te,z,U),t.renderBufferDirect(P,null,te,z,S,U),S.onAfterShadow(t,S,A,P,te,z,U)}}}else if(L.visible){const W=v(S,L,E,T);S.onBeforeShadow(t,S,A,P,te,W,null),t.renderBufferDirect(P,null,te,W,S,null),S.onAfterShadow(t,S,A,P,te,W,null)}}const X=S.children;for(let te=0,L=X.length;te<L;te++)_(X[te],A,P,E,T)}function C(S){S.target.removeEventListener("dispose",C);for(const P in u){const E=u[P],T=S.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}function QA(t,e,n){const i=n.isWebGL2;function r(){let I=!1;const Se=new zt;let Ee=null;const Ue=new zt(0,0,0,0);return{setMask:function(Ie){Ee!==Ie&&!I&&(t.colorMask(Ie,Ie,Ie,Ie),Ee=Ie)},setLocked:function(Ie){I=Ie},setClear:function(Ie,nt,it,Nt,tn){tn===!0&&(Ie*=Nt,nt*=Nt,it*=Nt),Se.set(Ie,nt,it,Nt),Ue.equals(Se)===!1&&(t.clearColor(Ie,nt,it,Nt),Ue.copy(Se))},reset:function(){I=!1,Ee=null,Ue.set(-1,0,0,0)}}}function o(){let I=!1,Se=null,Ee=null,Ue=null;return{setTest:function(Ie){Ie?oe(t.DEPTH_TEST):D(t.DEPTH_TEST)},setMask:function(Ie){Se!==Ie&&!I&&(t.depthMask(Ie),Se=Ie)},setFunc:function(Ie){if(Ee!==Ie){switch(Ie){case SE:t.depthFunc(t.NEVER);break;case EE:t.depthFunc(t.ALWAYS);break;case ME:t.depthFunc(t.LESS);break;case _u:t.depthFunc(t.LEQUAL);break;case wE:t.depthFunc(t.EQUAL);break;case TE:t.depthFunc(t.GEQUAL);break;case AE:t.depthFunc(t.GREATER);break;case RE:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ee=Ie}},setLocked:function(Ie){I=Ie},setClear:function(Ie){Ue!==Ie&&(t.clearDepth(Ie),Ue=Ie)},reset:function(){I=!1,Se=null,Ee=null,Ue=null}}}function s(){let I=!1,Se=null,Ee=null,Ue=null,Ie=null,nt=null,it=null,Nt=null,tn=null;return{setTest:function(rt){I||(rt?oe(t.STENCIL_TEST):D(t.STENCIL_TEST))},setMask:function(rt){Se!==rt&&!I&&(t.stencilMask(rt),Se=rt)},setFunc:function(rt,nn,li){(Ee!==rt||Ue!==nn||Ie!==li)&&(t.stencilFunc(rt,nn,li),Ee=rt,Ue=nn,Ie=li)},setOp:function(rt,nn,li){(nt!==rt||it!==nn||Nt!==li)&&(t.stencilOp(rt,nn,li),nt=rt,it=nn,Nt=li)},setLocked:function(rt){I=rt},setClear:function(rt){tn!==rt&&(t.clearStencil(rt),tn=rt)},reset:function(){I=!1,Se=null,Ee=null,Ue=null,Ie=null,nt=null,it=null,Nt=null,tn=null}}}const a=new r,l=new o,u=new s,c=new WeakMap,h=new WeakMap;let f={},p={},m=new WeakMap,y=[],g=null,d=!1,x=null,v=null,_=null,C=null,S=null,A=null,P=null,E=new Fe(0,0,0),T=0,O=!1,X=null,te=null,L=null,W=null,$=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,B=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(z)[1]),U=B>=1):z.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),U=B>=2);let Q=null,ne={};const Y=t.getParameter(t.SCISSOR_BOX),ie=t.getParameter(t.VIEWPORT),de=new zt().fromArray(Y),ge=new zt().fromArray(ie);function me(I,Se,Ee,Ue){const Ie=new Uint8Array(4),nt=t.createTexture();t.bindTexture(I,nt),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let it=0;it<Ee;it++)i&&(I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY)?t.texImage3D(Se,0,t.RGBA,1,1,Ue,0,t.RGBA,t.UNSIGNED_BYTE,Ie):t.texImage2D(Se+it,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ie);return nt}const Me={};Me[t.TEXTURE_2D]=me(t.TEXTURE_2D,t.TEXTURE_2D,1),Me[t.TEXTURE_CUBE_MAP]=me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Me[t.TEXTURE_2D_ARRAY]=me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Me[t.TEXTURE_3D]=me(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),oe(t.DEPTH_TEST),l.setFunc(_u),fe(!1),R(Zp),oe(t.CULL_FACE),G(fr);function oe(I){f[I]!==!0&&(t.enable(I),f[I]=!0)}function D(I){f[I]!==!1&&(t.disable(I),f[I]=!1)}function H(I,Se){return p[I]!==Se?(t.bindFramebuffer(I,Se),p[I]=Se,i&&(I===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=Se),I===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=Se)),!0):!1}function M(I,Se){let Ee=y,Ue=!1;if(I)if(Ee=m.get(Se),Ee===void 0&&(Ee=[],m.set(Se,Ee)),I.isWebGLMultipleRenderTargets){const Ie=I.texture;if(Ee.length!==Ie.length||Ee[0]!==t.COLOR_ATTACHMENT0){for(let nt=0,it=Ie.length;nt<it;nt++)Ee[nt]=t.COLOR_ATTACHMENT0+nt;Ee.length=Ie.length,Ue=!0}}else Ee[0]!==t.COLOR_ATTACHMENT0&&(Ee[0]=t.COLOR_ATTACHMENT0,Ue=!0);else Ee[0]!==t.BACK&&(Ee[0]=t.BACK,Ue=!0);Ue&&(n.isWebGL2?t.drawBuffers(Ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ee))}function F(I){return g!==I?(t.useProgram(I),g=I,!0):!1}const N={[Ir]:t.FUNC_ADD,[sE]:t.FUNC_SUBTRACT,[aE]:t.FUNC_REVERSE_SUBTRACT};if(i)N[tm]=t.MIN,N[nm]=t.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(N[tm]=I.MIN_EXT,N[nm]=I.MAX_EXT)}const ee={[lE]:t.ZERO,[uE]:t.ONE,[cE]:t.SRC_COLOR,[cf]:t.SRC_ALPHA,[gE]:t.SRC_ALPHA_SATURATE,[pE]:t.DST_COLOR,[fE]:t.DST_ALPHA,[dE]:t.ONE_MINUS_SRC_COLOR,[df]:t.ONE_MINUS_SRC_ALPHA,[mE]:t.ONE_MINUS_DST_COLOR,[hE]:t.ONE_MINUS_DST_ALPHA,[vE]:t.CONSTANT_COLOR,[_E]:t.ONE_MINUS_CONSTANT_COLOR,[yE]:t.CONSTANT_ALPHA,[xE]:t.ONE_MINUS_CONSTANT_ALPHA};function G(I,Se,Ee,Ue,Ie,nt,it,Nt,tn,rt){if(I===fr){d===!0&&(D(t.BLEND),d=!1);return}if(d===!1&&(oe(t.BLEND),d=!0),I!==oE){if(I!==x||rt!==O){if((v!==Ir||S!==Ir)&&(t.blendEquation(t.FUNC_ADD),v=Ir,S=Ir),rt)switch(I){case Zo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Jp:t.blendFunc(t.ONE,t.ONE);break;case Qp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case em:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Zo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Jp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Qp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case em:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}_=null,C=null,A=null,P=null,E.set(0,0,0),T=0,x=I,O=rt}return}Ie=Ie||Se,nt=nt||Ee,it=it||Ue,(Se!==v||Ie!==S)&&(t.blendEquationSeparate(N[Se],N[Ie]),v=Se,S=Ie),(Ee!==_||Ue!==C||nt!==A||it!==P)&&(t.blendFuncSeparate(ee[Ee],ee[Ue],ee[nt],ee[it]),_=Ee,C=Ue,A=nt,P=it),(Nt.equals(E)===!1||tn!==T)&&(t.blendColor(Nt.r,Nt.g,Nt.b,tn),E.copy(Nt),T=tn),x=I,O=!1}function pe(I,Se){I.side===fn?D(t.CULL_FACE):oe(t.CULL_FACE);let Ee=I.side===_n;Se&&(Ee=!Ee),fe(Ee),I.blending===Zo&&I.transparent===!1?G(fr):G(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const Ue=I.stencilWrite;u.setTest(Ue),Ue&&(u.setMask(I.stencilWriteMask),u.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),u.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),V(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?oe(t.SAMPLE_ALPHA_TO_COVERAGE):D(t.SAMPLE_ALPHA_TO_COVERAGE)}function fe(I){X!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),X=I)}function R(I){I!==iE?(oe(t.CULL_FACE),I!==te&&(I===Zp?t.cullFace(t.BACK):I===rE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):D(t.CULL_FACE),te=I}function w(I){I!==L&&(U&&t.lineWidth(I),L=I)}function V(I,Se,Ee){I?(oe(t.POLYGON_OFFSET_FILL),(W!==Se||$!==Ee)&&(t.polygonOffset(Se,Ee),W=Se,$=Ee)):D(t.POLYGON_OFFSET_FILL)}function ce(I){I?oe(t.SCISSOR_TEST):D(t.SCISSOR_TEST)}function le(I){I===void 0&&(I=t.TEXTURE0+K-1),Q!==I&&(t.activeTexture(I),Q=I)}function ae(I,Se,Ee){Ee===void 0&&(Q===null?Ee=t.TEXTURE0+K-1:Ee=Q);let Ue=ne[Ee];Ue===void 0&&(Ue={type:void 0,texture:void 0},ne[Ee]=Ue),(Ue.type!==I||Ue.texture!==Se)&&(Q!==Ee&&(t.activeTexture(Ee),Q=Ee),t.bindTexture(I,Se||Me[I]),Ue.type=I,Ue.texture=Se)}function be(){const I=ne[Q];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function xe(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Be(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ze(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ye(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ze(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ge(I){de.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),de.copy(I))}function Je(I){ge.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),ge.copy(I))}function _t(I,Se){let Ee=h.get(Se);Ee===void 0&&(Ee=new WeakMap,h.set(Se,Ee));let Ue=Ee.get(I);Ue===void 0&&(Ue=t.getUniformBlockIndex(Se,I.name),Ee.set(I,Ue))}function Xe(I,Se){const Ue=h.get(Se).get(I);c.get(Se)!==Ue&&(t.uniformBlockBinding(Se,Ue,I.__bindingPointIndex),c.set(Se,Ue))}function _e(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},Q=null,ne={},p={},m=new WeakMap,y=[],g=null,d=!1,x=null,v=null,_=null,C=null,S=null,A=null,P=null,E=new Fe(0,0,0),T=0,O=!1,X=null,te=null,L=null,W=null,$=null,de.set(0,0,t.canvas.width,t.canvas.height),ge.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:oe,disable:D,bindFramebuffer:H,drawBuffers:M,useProgram:F,setBlending:G,setMaterial:pe,setFlipSided:fe,setCullFace:R,setLineWidth:w,setPolygonOffset:V,setScissorTest:ce,activeTexture:le,bindTexture:ae,unbindTexture:be,compressedTexImage2D:xe,compressedTexImage3D:Ae,texImage2D:Le,texImage3D:Ce,updateUBOMapping:_t,uniformBlockBinding:Xe,texStorage2D:Ye,texStorage3D:ze,texSubImage2D:De,texSubImage3D:Be,compressedTexSubImage2D:ue,compressedTexSubImage3D:Ze,scissor:Ge,viewport:Je,reset:_e}}function eR(t,e,n,i,r,o,s){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,w){return p?new OffscreenCanvas(R,w):Mu("canvas")}function y(R,w,V,ce){let le=1;if((R.width>ce||R.height>ce)&&(le=ce/Math.max(R.width,R.height)),le<1||w===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ae=w?_f:Math.floor,be=ae(le*R.width),xe=ae(le*R.height);h===void 0&&(h=m(be,xe));const Ae=V?m(be,xe):h;return Ae.width=be,Ae.height=xe,Ae.getContext("2d").drawImage(R,0,0,be,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+be+"x"+xe+")."),Ae}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function g(R){return Lm(R.width)&&Lm(R.height)}function d(R){return a?!1:R.wrapS!==ti||R.wrapT!==ti||R.minFilter!==an&&R.minFilter!==Nn}function x(R,w){return R.generateMipmaps&&w&&R.minFilter!==an&&R.minFilter!==Nn}function v(R){t.generateMipmap(R)}function _(R,w,V,ce,le=!1){if(a===!1)return w;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ae=w;if(w===t.RED&&(V===t.FLOAT&&(ae=t.R32F),V===t.HALF_FLOAT&&(ae=t.R16F),V===t.UNSIGNED_BYTE&&(ae=t.R8)),w===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(ae=t.R8UI),V===t.UNSIGNED_SHORT&&(ae=t.R16UI),V===t.UNSIGNED_INT&&(ae=t.R32UI),V===t.BYTE&&(ae=t.R8I),V===t.SHORT&&(ae=t.R16I),V===t.INT&&(ae=t.R32I)),w===t.RG&&(V===t.FLOAT&&(ae=t.RG32F),V===t.HALF_FLOAT&&(ae=t.RG16F),V===t.UNSIGNED_BYTE&&(ae=t.RG8)),w===t.RGBA){const be=le?yu:et.getTransfer(ce);V===t.FLOAT&&(ae=t.RGBA32F),V===t.HALF_FLOAT&&(ae=t.RGBA16F),V===t.UNSIGNED_BYTE&&(ae=be===lt?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(ae=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(ae=t.RGB5_A1)}return(ae===t.R16F||ae===t.R32F||ae===t.RG16F||ae===t.RG32F||ae===t.RGBA16F||ae===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function C(R,w,V){return x(R,V)===!0||R.isFramebufferTexture&&R.minFilter!==an&&R.minFilter!==Nn?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function S(R){return R===an||R===im||R===bc?t.NEAREST:t.LINEAR}function A(R){const w=R.target;w.removeEventListener("dispose",A),E(w),w.isVideoTexture&&c.delete(w)}function P(R){const w=R.target;w.removeEventListener("dispose",P),O(w)}function E(R){const w=i.get(R);if(w.__webglInit===void 0)return;const V=R.source,ce=f.get(V);if(ce){const le=ce[w.__cacheKey];le.usedTimes--,le.usedTimes===0&&T(R),Object.keys(ce).length===0&&f.delete(V)}i.remove(R)}function T(R){const w=i.get(R);t.deleteTexture(w.__webglTexture);const V=R.source,ce=f.get(V);delete ce[w.__cacheKey],s.memory.textures--}function O(R){const w=R.texture,V=i.get(R),ce=i.get(w);if(ce.__webglTexture!==void 0&&(t.deleteTexture(ce.__webglTexture),s.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(V.__webglFramebuffer[le]))for(let ae=0;ae<V.__webglFramebuffer[le].length;ae++)t.deleteFramebuffer(V.__webglFramebuffer[le][ae]);else t.deleteFramebuffer(V.__webglFramebuffer[le]);V.__webglDepthbuffer&&t.deleteRenderbuffer(V.__webglDepthbuffer[le])}else{if(Array.isArray(V.__webglFramebuffer))for(let le=0;le<V.__webglFramebuffer.length;le++)t.deleteFramebuffer(V.__webglFramebuffer[le]);else t.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&t.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&t.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let le=0;le<V.__webglColorRenderbuffer.length;le++)V.__webglColorRenderbuffer[le]&&t.deleteRenderbuffer(V.__webglColorRenderbuffer[le]);V.__webglDepthRenderbuffer&&t.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let le=0,ae=w.length;le<ae;le++){const be=i.get(w[le]);be.__webglTexture&&(t.deleteTexture(be.__webglTexture),s.memory.textures--),i.remove(w[le])}i.remove(w),i.remove(R)}let X=0;function te(){X=0}function L(){const R=X;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),X+=1,R}function W(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function $(R,w){const V=i.get(R);if(R.isVideoTexture&&pe(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const ce=R.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(V,R,w);return}}n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+w)}function K(R,w){const V=i.get(R);if(R.version>0&&V.__version!==R.version){de(V,R,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+w)}function U(R,w){const V=i.get(R);if(R.version>0&&V.__version!==R.version){de(V,R,w);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+w)}function B(R,w){const V=i.get(R);if(R.version>0&&V.__version!==R.version){ge(V,R,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+w)}const z={[Zr]:t.REPEAT,[ti]:t.CLAMP_TO_EDGE,[pf]:t.MIRRORED_REPEAT},Q={[an]:t.NEAREST,[im]:t.NEAREST_MIPMAP_NEAREST,[bc]:t.NEAREST_MIPMAP_LINEAR,[Nn]:t.LINEAR,[OE]:t.LINEAR_MIPMAP_NEAREST,[ya]:t.LINEAR_MIPMAP_LINEAR},ne={[YE]:t.NEVER,[eM]:t.ALWAYS,[qE]:t.LESS,[E_]:t.LEQUAL,[KE]:t.EQUAL,[QE]:t.GEQUAL,[ZE]:t.GREATER,[JE]:t.NOTEQUAL};function Y(R,w,V){if(V?(t.texParameteri(R,t.TEXTURE_WRAP_S,z[w.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,z[w.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,z[w.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Q[w.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Q[w.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(w.wrapS!==ti||w.wrapT!==ti)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,S(w.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,S(w.minFilter)),w.minFilter!==an&&w.minFilter!==Nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,ne[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ce=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===an||w.minFilter!==bc&&w.minFilter!==ya||w.type===nr&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===xa&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(t.texParameterf(R,ce.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function ie(R,w){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",A));const ce=w.source;let le=f.get(ce);le===void 0&&(le={},f.set(ce,le));const ae=W(w);if(ae!==R.__cacheKey){le[ae]===void 0&&(le[ae]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,V=!0),le[ae].usedTimes++;const be=le[R.__cacheKey];be!==void 0&&(le[R.__cacheKey].usedTimes--,be.usedTimes===0&&T(w)),R.__cacheKey=ae,R.__webglTexture=le[ae].texture}return V}function de(R,w,V){let ce=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ce=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ce=t.TEXTURE_3D);const le=ie(R,w),ae=w.source;n.bindTexture(ce,R.__webglTexture,t.TEXTURE0+V);const be=i.get(ae);if(ae.version!==be.__version||le===!0){n.activeTexture(t.TEXTURE0+V);const xe=et.getPrimaries(et.workingColorSpace),Ae=w.colorSpace===Fn?null:et.getPrimaries(w.colorSpace),De=w.colorSpace===Fn||xe===Ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const Be=d(w)&&g(w.image)===!1;let ue=y(w.image,Be,!1,r.maxTextureSize);ue=fe(w,ue);const Ze=g(ue)||a,Ye=o.convert(w.format,w.colorSpace);let ze=o.convert(w.type),Le=_(w.internalFormat,Ye,ze,w.colorSpace,w.isVideoTexture);Y(ce,w,Ze);let Ce;const Ge=w.mipmaps,Je=a&&w.isVideoTexture!==!0&&Le!==y_,_t=be.__version===void 0||le===!0,Xe=C(w,ue,Ze);if(w.isDepthTexture)Le=t.DEPTH_COMPONENT,a?w.type===nr?Le=t.DEPTH_COMPONENT32F:w.type===tr?Le=t.DEPTH_COMPONENT24:w.type===Vr?Le=t.DEPTH24_STENCIL8:Le=t.DEPTH_COMPONENT16:w.type===nr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Wr&&Le===t.DEPTH_COMPONENT&&w.type!==wh&&w.type!==tr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=tr,ze=o.convert(w.type)),w.format===cs&&Le===t.DEPTH_COMPONENT&&(Le=t.DEPTH_STENCIL,w.type!==Vr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Vr,ze=o.convert(w.type))),_t&&(Je?n.texStorage2D(t.TEXTURE_2D,1,Le,ue.width,ue.height):n.texImage2D(t.TEXTURE_2D,0,Le,ue.width,ue.height,0,Ye,ze,null));else if(w.isDataTexture)if(Ge.length>0&&Ze){Je&&_t&&n.texStorage2D(t.TEXTURE_2D,Xe,Le,Ge[0].width,Ge[0].height);for(let _e=0,I=Ge.length;_e<I;_e++)Ce=Ge[_e],Je?n.texSubImage2D(t.TEXTURE_2D,_e,0,0,Ce.width,Ce.height,Ye,ze,Ce.data):n.texImage2D(t.TEXTURE_2D,_e,Le,Ce.width,Ce.height,0,Ye,ze,Ce.data);w.generateMipmaps=!1}else Je?(_t&&n.texStorage2D(t.TEXTURE_2D,Xe,Le,ue.width,ue.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue.width,ue.height,Ye,ze,ue.data)):n.texImage2D(t.TEXTURE_2D,0,Le,ue.width,ue.height,0,Ye,ze,ue.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Je&&_t&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Xe,Le,Ge[0].width,Ge[0].height,ue.depth);for(let _e=0,I=Ge.length;_e<I;_e++)Ce=Ge[_e],w.format!==ni?Ye!==null?Je?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,0,Ce.width,Ce.height,ue.depth,Ye,Ce.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,_e,Le,Ce.width,Ce.height,ue.depth,0,Ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?n.texSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,0,Ce.width,Ce.height,ue.depth,Ye,ze,Ce.data):n.texImage3D(t.TEXTURE_2D_ARRAY,_e,Le,Ce.width,Ce.height,ue.depth,0,Ye,ze,Ce.data)}else{Je&&_t&&n.texStorage2D(t.TEXTURE_2D,Xe,Le,Ge[0].width,Ge[0].height);for(let _e=0,I=Ge.length;_e<I;_e++)Ce=Ge[_e],w.format!==ni?Ye!==null?Je?n.compressedTexSubImage2D(t.TEXTURE_2D,_e,0,0,Ce.width,Ce.height,Ye,Ce.data):n.compressedTexImage2D(t.TEXTURE_2D,_e,Le,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?n.texSubImage2D(t.TEXTURE_2D,_e,0,0,Ce.width,Ce.height,Ye,ze,Ce.data):n.texImage2D(t.TEXTURE_2D,_e,Le,Ce.width,Ce.height,0,Ye,ze,Ce.data)}else if(w.isDataArrayTexture)Je?(_t&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Xe,Le,ue.width,ue.height,ue.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Ye,ze,ue.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,ue.width,ue.height,ue.depth,0,Ye,ze,ue.data);else if(w.isData3DTexture)Je?(_t&&n.texStorage3D(t.TEXTURE_3D,Xe,Le,ue.width,ue.height,ue.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Ye,ze,ue.data)):n.texImage3D(t.TEXTURE_3D,0,Le,ue.width,ue.height,ue.depth,0,Ye,ze,ue.data);else if(w.isFramebufferTexture){if(_t)if(Je)n.texStorage2D(t.TEXTURE_2D,Xe,Le,ue.width,ue.height);else{let _e=ue.width,I=ue.height;for(let Se=0;Se<Xe;Se++)n.texImage2D(t.TEXTURE_2D,Se,Le,_e,I,0,Ye,ze,null),_e>>=1,I>>=1}}else if(Ge.length>0&&Ze){Je&&_t&&n.texStorage2D(t.TEXTURE_2D,Xe,Le,Ge[0].width,Ge[0].height);for(let _e=0,I=Ge.length;_e<I;_e++)Ce=Ge[_e],Je?n.texSubImage2D(t.TEXTURE_2D,_e,0,0,Ye,ze,Ce):n.texImage2D(t.TEXTURE_2D,_e,Le,Ye,ze,Ce);w.generateMipmaps=!1}else Je?(_t&&n.texStorage2D(t.TEXTURE_2D,Xe,Le,ue.width,ue.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ye,ze,ue)):n.texImage2D(t.TEXTURE_2D,0,Le,Ye,ze,ue);x(w,Ze)&&v(ce),be.__version=ae.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function ge(R,w,V){if(w.image.length!==6)return;const ce=ie(R,w),le=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+V);const ae=i.get(le);if(le.version!==ae.__version||ce===!0){n.activeTexture(t.TEXTURE0+V);const be=et.getPrimaries(et.workingColorSpace),xe=w.colorSpace===Fn?null:et.getPrimaries(w.colorSpace),Ae=w.colorSpace===Fn||be===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const De=w.isCompressedTexture||w.image[0].isCompressedTexture,Be=w.image[0]&&w.image[0].isDataTexture,ue=[];for(let _e=0;_e<6;_e++)!De&&!Be?ue[_e]=y(w.image[_e],!1,!0,r.maxCubemapSize):ue[_e]=Be?w.image[_e].image:w.image[_e],ue[_e]=fe(w,ue[_e]);const Ze=ue[0],Ye=g(Ze)||a,ze=o.convert(w.format,w.colorSpace),Le=o.convert(w.type),Ce=_(w.internalFormat,ze,Le,w.colorSpace),Ge=a&&w.isVideoTexture!==!0,Je=ae.__version===void 0||ce===!0;let _t=C(w,Ze,Ye);Y(t.TEXTURE_CUBE_MAP,w,Ye);let Xe;if(De){Ge&&Je&&n.texStorage2D(t.TEXTURE_CUBE_MAP,_t,Ce,Ze.width,Ze.height);for(let _e=0;_e<6;_e++){Xe=ue[_e].mipmaps;for(let I=0;I<Xe.length;I++){const Se=Xe[I];w.format!==ni?ze!==null?Ge?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,I,0,0,Se.width,Se.height,ze,Se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,I,Ce,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,I,0,0,Se.width,Se.height,ze,Le,Se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,I,Ce,Se.width,Se.height,0,ze,Le,Se.data)}}}else{Xe=w.mipmaps,Ge&&Je&&(Xe.length>0&&_t++,n.texStorage2D(t.TEXTURE_CUBE_MAP,_t,Ce,ue[0].width,ue[0].height));for(let _e=0;_e<6;_e++)if(Be){Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ue[_e].width,ue[_e].height,ze,Le,ue[_e].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Ce,ue[_e].width,ue[_e].height,0,ze,Le,ue[_e].data);for(let I=0;I<Xe.length;I++){const Ee=Xe[I].image[_e].image;Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,I+1,0,0,Ee.width,Ee.height,ze,Le,Ee.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,I+1,Ce,Ee.width,Ee.height,0,ze,Le,Ee.data)}}else{Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ze,Le,ue[_e]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Ce,ze,Le,ue[_e]);for(let I=0;I<Xe.length;I++){const Se=Xe[I];Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,I+1,0,0,ze,Le,Se.image[_e]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,I+1,Ce,ze,Le,Se.image[_e])}}}x(w,Ye)&&v(t.TEXTURE_CUBE_MAP),ae.__version=le.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function me(R,w,V,ce,le,ae){const be=o.convert(V.format,V.colorSpace),xe=o.convert(V.type),Ae=_(V.internalFormat,be,xe,V.colorSpace);if(!i.get(w).__hasExternalTextures){const Be=Math.max(1,w.width>>ae),ue=Math.max(1,w.height>>ae);le===t.TEXTURE_3D||le===t.TEXTURE_2D_ARRAY?n.texImage3D(le,ae,Ae,Be,ue,w.depth,0,be,xe,null):n.texImage2D(le,ae,Ae,Be,ue,0,be,xe,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),G(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ce,le,i.get(V).__webglTexture,0,ee(w)):(le===t.TEXTURE_2D||le>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ce,le,i.get(V).__webglTexture,ae),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Me(R,w,V){if(t.bindRenderbuffer(t.RENDERBUFFER,R),w.depthBuffer&&!w.stencilBuffer){let ce=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(V||G(w)){const le=w.depthTexture;le&&le.isDepthTexture&&(le.type===nr?ce=t.DEPTH_COMPONENT32F:le.type===tr&&(ce=t.DEPTH_COMPONENT24));const ae=ee(w);G(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,ce,w.width,w.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,ce,w.width,w.height)}else t.renderbufferStorage(t.RENDERBUFFER,ce,w.width,w.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(w.depthBuffer&&w.stencilBuffer){const ce=ee(w);V&&G(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,t.DEPTH24_STENCIL8,w.width,w.height):G(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,t.DEPTH24_STENCIL8,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const ce=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let le=0;le<ce.length;le++){const ae=ce[le],be=o.convert(ae.format,ae.colorSpace),xe=o.convert(ae.type),Ae=_(ae.internalFormat,be,xe,ae.colorSpace),De=ee(w);V&&G(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,De,Ae,w.width,w.height):G(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,De,Ae,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,Ae,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function oe(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),$(w.depthTexture,0);const ce=i.get(w.depthTexture).__webglTexture,le=ee(w);if(w.depthTexture.format===Wr)G(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ce,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ce,0);else if(w.depthTexture.format===cs)G(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ce,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function D(R){const w=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");oe(w.__webglFramebuffer,R)}else if(V){w.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[ce]),w.__webglDepthbuffer[ce]=t.createRenderbuffer(),Me(w.__webglDepthbuffer[ce],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),Me(w.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function H(R,w,V){const ce=i.get(R);w!==void 0&&me(ce.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&D(R)}function M(R){const w=R.texture,V=i.get(R),ce=i.get(w);R.addEventListener("dispose",P),R.isWebGLMultipleRenderTargets!==!0&&(ce.__webglTexture===void 0&&(ce.__webglTexture=t.createTexture()),ce.__version=w.version,s.memory.textures++);const le=R.isWebGLCubeRenderTarget===!0,ae=R.isWebGLMultipleRenderTargets===!0,be=g(R)||a;if(le){V.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(a&&w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer[xe]=[];for(let Ae=0;Ae<w.mipmaps.length;Ae++)V.__webglFramebuffer[xe][Ae]=t.createFramebuffer()}else V.__webglFramebuffer[xe]=t.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer=[];for(let xe=0;xe<w.mipmaps.length;xe++)V.__webglFramebuffer[xe]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(ae)if(r.drawBuffers){const xe=R.texture;for(let Ae=0,De=xe.length;Ae<De;Ae++){const Be=i.get(xe[Ae]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&G(R)===!1){const xe=ae?w:[w];V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Ae=0;Ae<xe.length;Ae++){const De=xe[Ae];V.__webglColorRenderbuffer[Ae]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[Ae]);const Be=o.convert(De.format,De.colorSpace),ue=o.convert(De.type),Ze=_(De.internalFormat,Be,ue,De.colorSpace,R.isXRRenderTarget===!0),Ye=ee(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ye,Ze,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,V.__webglColorRenderbuffer[Ae])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),Me(V.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(le){n.bindTexture(t.TEXTURE_CUBE_MAP,ce.__webglTexture),Y(t.TEXTURE_CUBE_MAP,w,be);for(let xe=0;xe<6;xe++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let Ae=0;Ae<w.mipmaps.length;Ae++)me(V.__webglFramebuffer[xe][Ae],R,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ae);else me(V.__webglFramebuffer[xe],R,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);x(w,be)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ae){const xe=R.texture;for(let Ae=0,De=xe.length;Ae<De;Ae++){const Be=xe[Ae],ue=i.get(Be);n.bindTexture(t.TEXTURE_2D,ue.__webglTexture),Y(t.TEXTURE_2D,Be,be),me(V.__webglFramebuffer,R,Be,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,0),x(Be,be)&&v(t.TEXTURE_2D)}n.unbindTexture()}else{let xe=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?xe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(xe,ce.__webglTexture),Y(xe,w,be),a&&w.mipmaps&&w.mipmaps.length>0)for(let Ae=0;Ae<w.mipmaps.length;Ae++)me(V.__webglFramebuffer[Ae],R,w,t.COLOR_ATTACHMENT0,xe,Ae);else me(V.__webglFramebuffer,R,w,t.COLOR_ATTACHMENT0,xe,0);x(w,be)&&v(xe),n.unbindTexture()}R.depthBuffer&&D(R)}function F(R){const w=g(R)||a,V=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ce=0,le=V.length;ce<le;ce++){const ae=V[ce];if(x(ae,w)){const be=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,xe=i.get(ae).__webglTexture;n.bindTexture(be,xe),v(be),n.unbindTexture()}}}function N(R){if(a&&R.samples>0&&G(R)===!1){const w=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],V=R.width,ce=R.height;let le=t.COLOR_BUFFER_BIT;const ae=[],be=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=i.get(R),Ae=R.isWebGLMultipleRenderTargets===!0;if(Ae)for(let De=0;De<w.length;De++)n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let De=0;De<w.length;De++){ae.push(t.COLOR_ATTACHMENT0+De),R.depthBuffer&&ae.push(be);const Be=xe.__ignoreDepthValues!==void 0?xe.__ignoreDepthValues:!1;if(Be===!1&&(R.depthBuffer&&(le|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(le|=t.STENCIL_BUFFER_BIT)),Ae&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,xe.__webglColorRenderbuffer[De]),Be===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[be]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[be])),Ae){const ue=i.get(w[De]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ue,0)}t.blitFramebuffer(0,0,V,ce,0,0,V,ce,le,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ae)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Ae)for(let De=0;De<w.length;De++){n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.RENDERBUFFER,xe.__webglColorRenderbuffer[De]);const Be=i.get(w[De]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.TEXTURE_2D,Be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}}function ee(R){return Math.min(r.maxSamples,R.samples)}function G(R){const w=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function pe(R){const w=s.render.frame;c.get(R)!==w&&(c.set(R,w),R.update())}function fe(R,w){const V=R.colorSpace,ce=R.format,le=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===gf||V!==Hi&&V!==Fn&&(et.getTransfer(V)===lt?a===!1?e.has("EXT_sRGB")===!0&&ce===ni?(R.format=gf,R.minFilter=Nn,R.generateMipmaps=!1):w=w_.sRGBToLinear(w):(ce!==ni||le!==pr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),w}this.allocateTextureUnit=L,this.resetTextureUnits=te,this.setTexture2D=$,this.setTexture2DArray=K,this.setTexture3D=U,this.setTextureCube=B,this.rebindTextures=H,this.setupRenderTarget=M,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=D,this.setupFrameBufferTexture=me,this.useMultisampledRTT=G}function tR(t,e,n){const i=n.isWebGL2;function r(o,s=Fn){let a;const l=et.getTransfer(s);if(o===pr)return t.UNSIGNED_BYTE;if(o===p_)return t.UNSIGNED_SHORT_4_4_4_4;if(o===m_)return t.UNSIGNED_SHORT_5_5_5_1;if(o===FE)return t.BYTE;if(o===zE)return t.SHORT;if(o===wh)return t.UNSIGNED_SHORT;if(o===h_)return t.INT;if(o===tr)return t.UNSIGNED_INT;if(o===nr)return t.FLOAT;if(o===xa)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===kE)return t.ALPHA;if(o===ni)return t.RGBA;if(o===BE)return t.LUMINANCE;if(o===HE)return t.LUMINANCE_ALPHA;if(o===Wr)return t.DEPTH_COMPONENT;if(o===cs)return t.DEPTH_STENCIL;if(o===gf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===GE)return t.RED;if(o===g_)return t.RED_INTEGER;if(o===VE)return t.RG;if(o===v_)return t.RG_INTEGER;if(o===__)return t.RGBA_INTEGER;if(o===Pc||o===Lc||o===Dc||o===Ic)if(l===lt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===Pc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Lc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Dc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Ic)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===Pc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Lc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Dc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Ic)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===rm||o===om||o===sm||o===am)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===rm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===om)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===sm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===am)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===y_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===lm||o===um)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===lm)return l===lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===um)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===cm||o===dm||o===fm||o===hm||o===pm||o===mm||o===gm||o===vm||o===_m||o===ym||o===xm||o===Sm||o===Em||o===Mm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===cm)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===dm)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===fm)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===hm)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===pm)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===mm)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===gm)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===vm)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===_m)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===ym)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===xm)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Sm)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Em)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Mm)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Nc||o===wm||o===Tm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===Nc)return l===lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===wm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===Tm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===WE||o===Am||o===Rm||o===Cm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===Nc)return a.COMPRESSED_RED_RGTC1_EXT;if(o===Am)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Rm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Cm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Vr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:r}}class nR extends On{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class kr extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iR={type:"move"};class od{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),d=this._getHandJoint(u,y);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=c.position.distanceTo(h.position),p=.02,m=.005;u.inputState.pinching&&f>p+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(iR)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new kr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class rR extends _s{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,u=null,c=null,h=null,f=null,p=null,m=null;const y=n.getContextAttributes();let g=null,d=null;const x=[],v=[],_=new ve;let C=null;const S=new On;S.layers.enable(1),S.viewport=new zt;const A=new On;A.layers.enable(2),A.viewport=new zt;const P=[S,A],E=new nR;E.layers.enable(1),E.layers.enable(2);let T=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ie=x[Y];return ie===void 0&&(ie=new od,x[Y]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Y){let ie=x[Y];return ie===void 0&&(ie=new od,x[Y]=ie),ie.getGripSpace()},this.getHand=function(Y){let ie=x[Y];return ie===void 0&&(ie=new od,x[Y]=ie),ie.getHandSpace()};function X(Y){const ie=v.indexOf(Y.inputSource);if(ie===-1)return;const de=x[ie];de!==void 0&&(de.update(Y.inputSource,Y.frame,u||s),de.dispatchEvent({type:Y.type,data:Y.inputSource}))}function te(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",L);for(let Y=0;Y<x.length;Y++){const ie=v[Y];ie!==null&&(v[Y]=null,x[Y].disconnect(ie))}T=null,O=null,e.setRenderTarget(g),p=null,f=null,h=null,r=null,d=null,ne.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(_.width,_.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(Y){u=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",te),r.addEventListener("inputsourceschange",L),y.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(_),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ie={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,n,ie),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new Jr(p.framebufferWidth,p.framebufferHeight,{format:ni,type:pr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ie=null,de=null,ge=null;y.depth&&(ge=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ie=y.stencil?cs:Wr,de=y.stencil?Vr:tr);const me={colorFormat:n.RGBA8,depthFormat:ge,scaleFactor:o};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(me),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new Jr(f.textureWidth,f.textureHeight,{format:ni,type:pr,depthTexture:new z_(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const Me=e.properties.get(d);Me.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(a),ne.setContext(r),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(Y){for(let ie=0;ie<Y.removed.length;ie++){const de=Y.removed[ie],ge=v.indexOf(de);ge>=0&&(v[ge]=null,x[ge].disconnect(de))}for(let ie=0;ie<Y.added.length;ie++){const de=Y.added[ie];let ge=v.indexOf(de);if(ge===-1){for(let Me=0;Me<x.length;Me++)if(Me>=v.length){v.push(de),ge=Me;break}else if(v[Me]===null){v[Me]=de,ge=Me;break}if(ge===-1)break}const me=x[ge];me&&me.connect(de)}}const W=new k,$=new k;function K(Y,ie,de){W.setFromMatrixPosition(ie.matrixWorld),$.setFromMatrixPosition(de.matrixWorld);const ge=W.distanceTo($),me=ie.projectionMatrix.elements,Me=de.projectionMatrix.elements,oe=me[14]/(me[10]-1),D=me[14]/(me[10]+1),H=(me[9]+1)/me[5],M=(me[9]-1)/me[5],F=(me[8]-1)/me[0],N=(Me[8]+1)/Me[0],ee=oe*F,G=oe*N,pe=ge/(-F+N),fe=pe*-F;ie.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(fe),Y.translateZ(pe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const R=oe+pe,w=D+pe,V=ee-fe,ce=G+(ge-fe),le=H*D/w*R,ae=M*D/w*R;Y.projectionMatrix.makePerspective(V,ce,le,ae,R,w),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function U(Y,ie){ie===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ie.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;E.near=A.near=S.near=Y.near,E.far=A.far=S.far=Y.far,(T!==E.near||O!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),T=E.near,O=E.far);const ie=Y.parent,de=E.cameras;U(E,ie);for(let ge=0;ge<de.length;ge++)U(de[ge],ie);de.length===2?K(E,S,A):E.projectionMatrix.copy(S.projectionMatrix),B(Y,E,ie)};function B(Y,ie,de){de===null?Y.matrix.copy(ie.matrixWorld):(Y.matrix.copy(de.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ie.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ie.projectionMatrix),Y.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=vf*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)};let z=null;function Q(Y,ie){if(c=ie.getViewerPose(u||s),m=ie,c!==null){const de=c.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let ge=!1;de.length!==E.cameras.length&&(E.cameras.length=0,ge=!0);for(let me=0;me<de.length;me++){const Me=de[me];let oe=null;if(p!==null)oe=p.getViewport(Me);else{const H=h.getViewSubImage(f,Me);oe=H.viewport,me===0&&(e.setRenderTargetTextures(d,H.colorTexture,f.ignoreDepthValues?void 0:H.depthStencilTexture),e.setRenderTarget(d))}let D=P[me];D===void 0&&(D=new On,D.layers.enable(me),D.viewport=new zt,P[me]=D),D.matrix.fromArray(Me.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(Me.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(oe.x,oe.y,oe.width,oe.height),me===0&&(E.matrix.copy(D.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ge===!0&&E.cameras.push(D)}}for(let de=0;de<x.length;de++){const ge=v[de],me=x[de];ge!==null&&me!==void 0&&me.update(ge,ie,u||s)}z&&z(Y,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),m=null}const ne=new O_;ne.setAnimationLoop(Q),this.setAnimationLoop=function(Y){z=Y},this.dispose=function(){}}}function oR(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,I_(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,x,v,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?o(g,d):d.isMeshToonMaterial?(o(g,d),h(g,d)):d.isMeshPhongMaterial?(o(g,d),c(g,d)):d.isMeshStandardMaterial?(o(g,d),f(g,d),d.isMeshPhysicalMaterial&&p(g,d,_)):d.isMeshMatcapMaterial?(o(g,d),m(g,d)):d.isMeshDepthMaterial?o(g,d):d.isMeshDistanceMaterial?(o(g,d),y(g,d)):d.isMeshNormalMaterial?o(g,d):d.isLineBasicMaterial?(s(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,x,v):d.isSpriteMaterial?u(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function o(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===_n&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===_n&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const x=e.get(d).envMap;if(x&&(g.envMap.value=x,g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap){g.lightMap.value=d.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=d.lightMapIntensity*v,n(d.lightMap,g.lightMapTransform)}d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function s(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,x,v){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*x,g.scale.value=v*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function h(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),e.get(d).envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,x){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===_n&&g.clearcoatNormalScale.value.negate())),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,d){d.matcap&&(g.matcap.value=d.matcap)}function y(g,d){const x=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function sR(t,e,n,i){let r={},o={},s=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const _=v.program;i.uniformBlockBinding(x,_)}function u(x,v){let _=r[x.id];_===void 0&&(m(x),_=c(x),r[x.id]=_,x.addEventListener("dispose",g));const C=v.program;i.updateUBOMapping(x,C);const S=e.render.frame;o[x.id]!==S&&(f(x),o[x.id]=S)}function c(x){const v=h();x.__bindingPointIndex=v;const _=t.createBuffer(),C=x.__size,S=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,_),t.bufferData(t.UNIFORM_BUFFER,C,S),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,_),_}function h(){for(let x=0;x<a;x++)if(s.indexOf(x)===-1)return s.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const v=r[x.id],_=x.uniforms,C=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let S=0,A=_.length;S<A;S++){const P=Array.isArray(_[S])?_[S]:[_[S]];for(let E=0,T=P.length;E<T;E++){const O=P[E];if(p(O,S,E,C)===!0){const X=O.__offset,te=Array.isArray(O.value)?O.value:[O.value];let L=0;for(let W=0;W<te.length;W++){const $=te[W],K=y($);typeof $=="number"||typeof $=="boolean"?(O.__data[0]=$,t.bufferSubData(t.UNIFORM_BUFFER,X+L,O.__data)):$.isMatrix3?(O.__data[0]=$.elements[0],O.__data[1]=$.elements[1],O.__data[2]=$.elements[2],O.__data[3]=0,O.__data[4]=$.elements[3],O.__data[5]=$.elements[4],O.__data[6]=$.elements[5],O.__data[7]=0,O.__data[8]=$.elements[6],O.__data[9]=$.elements[7],O.__data[10]=$.elements[8],O.__data[11]=0):($.toArray(O.__data,L),L+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,X,O.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(x,v,_,C){const S=x.value,A=v+"_"+_;if(C[A]===void 0)return typeof S=="number"||typeof S=="boolean"?C[A]=S:C[A]=S.clone(),!0;{const P=C[A];if(typeof S=="number"||typeof S=="boolean"){if(P!==S)return C[A]=S,!0}else if(P.equals(S)===!1)return P.copy(S),!0}return!1}function m(x){const v=x.uniforms;let _=0;const C=16;for(let A=0,P=v.length;A<P;A++){const E=Array.isArray(v[A])?v[A]:[v[A]];for(let T=0,O=E.length;T<O;T++){const X=E[T],te=Array.isArray(X.value)?X.value:[X.value];for(let L=0,W=te.length;L<W;L++){const $=te[L],K=y($),U=_%C;U!==0&&C-U<K.boundary&&(_+=C-U),X.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=_,_+=K.storage}}}const S=_%C;return S>0&&(_+=C-S),x.__size=_,x.__cache={},this}function y(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){const v=x.target;v.removeEventListener("dispose",g);const _=s.indexOf(v.__bindingPointIndex);s.splice(_,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete o[v.id]}function d(){for(const x in r)t.deleteBuffer(r[x]);s=[],r={},o={}}return{bind:l,update:u,dispose:d}}class W_{constructor(e={}){const{canvas:n=nM(),context:i=null,depth:r=!0,stencil:o=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=s;const p=new Uint32Array(4),m=new Int32Array(4);let y=null,g=null;const d=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this._useLegacyLights=!1,this.toneMapping=hr,this.toneMappingExposure=1;const v=this;let _=!1,C=0,S=0,A=null,P=-1,E=null;const T=new zt,O=new zt;let X=null;const te=new Fe(0);let L=0,W=n.width,$=n.height,K=1,U=null,B=null;const z=new zt(0,0,W,$),Q=new zt(0,0,W,$);let ne=!1;const Y=new Ah;let ie=!1,de=!1,ge=null;const me=new Mt,Me=new ve,oe=new k,D={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function H(){return A===null?K:1}let M=i;function F(b,j){for(let Z=0;Z<b.length;Z++){const J=b[Z],q=n.getContext(J,j);if(q!==null)return q}return null}try{const b={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Mh}`),n.addEventListener("webglcontextlost",_e,!1),n.addEventListener("webglcontextrestored",I,!1),n.addEventListener("webglcontextcreationerror",Se,!1),M===null){const j=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&j.shift(),M=F(j,b),M===null)throw F(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&M instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),M.getShaderPrecisionFormat===void 0&&(M.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let N,ee,G,pe,fe,R,w,V,ce,le,ae,be,xe,Ae,De,Be,ue,Ze,Ye,ze,Le,Ce,Ge,Je;function _t(){N=new gT(M),ee=new cT(M,N,e),N.init(ee),Ce=new tR(M,N,ee),G=new QA(M,N,ee),pe=new yT(M),fe=new kA,R=new eR(M,N,G,fe,ee,Ce,pe),w=new fT(v),V=new mT(v),ce=new RM(M,ee),Ge=new lT(M,N,ce,ee),le=new vT(M,ce,pe,Ge),ae=new MT(M,le,ce,pe),Ye=new ET(M,ee,R),Be=new dT(fe),be=new zA(v,w,V,N,ee,Ge,Be),xe=new oR(v,fe),Ae=new HA,De=new $A(N,ee),Ze=new aT(v,w,V,G,ae,f,l),ue=new JA(v,ae,ee),Je=new sR(M,pe,ee,G),ze=new uT(M,N,pe,ee),Le=new _T(M,N,pe,ee),pe.programs=be.programs,v.capabilities=ee,v.extensions=N,v.properties=fe,v.renderLists=Ae,v.shadowMap=ue,v.state=G,v.info=pe}_t();const Xe=new rR(v,M);this.xr=Xe,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const b=N.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=N.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(b){b!==void 0&&(K=b,this.setSize(W,$,!1))},this.getSize=function(b){return b.set(W,$)},this.setSize=function(b,j,Z=!0){if(Xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=b,$=j,n.width=Math.floor(b*K),n.height=Math.floor(j*K),Z===!0&&(n.style.width=b+"px",n.style.height=j+"px"),this.setViewport(0,0,b,j)},this.getDrawingBufferSize=function(b){return b.set(W*K,$*K).floor()},this.setDrawingBufferSize=function(b,j,Z){W=b,$=j,K=Z,n.width=Math.floor(b*Z),n.height=Math.floor(j*Z),this.setViewport(0,0,b,j)},this.getCurrentViewport=function(b){return b.copy(T)},this.getViewport=function(b){return b.copy(z)},this.setViewport=function(b,j,Z,J){b.isVector4?z.set(b.x,b.y,b.z,b.w):z.set(b,j,Z,J),G.viewport(T.copy(z).multiplyScalar(K).floor())},this.getScissor=function(b){return b.copy(Q)},this.setScissor=function(b,j,Z,J){b.isVector4?Q.set(b.x,b.y,b.z,b.w):Q.set(b,j,Z,J),G.scissor(O.copy(Q).multiplyScalar(K).floor())},this.getScissorTest=function(){return ne},this.setScissorTest=function(b){G.setScissorTest(ne=b)},this.setOpaqueSort=function(b){U=b},this.setTransparentSort=function(b){B=b},this.getClearColor=function(b){return b.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(b=!0,j=!0,Z=!0){let J=0;if(b){let q=!1;if(A!==null){const we=A.texture.format;q=we===__||we===v_||we===g_}if(q){const we=A.texture.type,Pe=we===pr||we===tr||we===wh||we===Vr||we===p_||we===m_,Ne=Ze.getClearColor(),Oe=Ze.getClearAlpha(),We=Ne.r,ke=Ne.g,He=Ne.b;Pe?(p[0]=We,p[1]=ke,p[2]=He,p[3]=Oe,M.clearBufferuiv(M.COLOR,0,p)):(m[0]=We,m[1]=ke,m[2]=He,m[3]=Oe,M.clearBufferiv(M.COLOR,0,m))}else J|=M.COLOR_BUFFER_BIT}j&&(J|=M.DEPTH_BUFFER_BIT),Z&&(J|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),M.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",_e,!1),n.removeEventListener("webglcontextrestored",I,!1),n.removeEventListener("webglcontextcreationerror",Se,!1),Ae.dispose(),De.dispose(),fe.dispose(),w.dispose(),V.dispose(),ae.dispose(),Ge.dispose(),Je.dispose(),be.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",tn),Xe.removeEventListener("sessionend",rt),ge&&(ge.dispose(),ge=null),nn.stop()};function _e(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const b=pe.autoReset,j=ue.enabled,Z=ue.autoUpdate,J=ue.needsUpdate,q=ue.type;_t(),pe.autoReset=b,ue.enabled=j,ue.autoUpdate=Z,ue.needsUpdate=J,ue.type=q}function Se(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ee(b){const j=b.target;j.removeEventListener("dispose",Ee),Ue(j)}function Ue(b){Ie(b),fe.remove(b)}function Ie(b){const j=fe.get(b).programs;j!==void 0&&(j.forEach(function(Z){be.releaseProgram(Z)}),b.isShaderMaterial&&be.releaseShaderCache(b))}this.renderBufferDirect=function(b,j,Z,J,q,we){j===null&&(j=D);const Pe=q.isMesh&&q.matrixWorld.determinant()<0,Ne=vy(b,j,Z,J,q);G.setMaterial(J,Pe);let Oe=Z.index,We=1;if(J.wireframe===!0){if(Oe=le.getWireframeAttribute(Z),Oe===void 0)return;We=2}const ke=Z.drawRange,He=Z.attributes.position;let wt=ke.start*We,xn=(ke.start+ke.count)*We;we!==null&&(wt=Math.max(wt,we.start*We),xn=Math.min(xn,(we.start+we.count)*We)),Oe!==null?(wt=Math.max(wt,0),xn=Math.min(xn,Oe.count)):He!=null&&(wt=Math.max(wt,0),xn=Math.min(xn,He.count));const Ut=xn-wt;if(Ut<0||Ut===1/0)return;Ge.setup(q,J,Ne,Z,Oe);let xi,ht=ze;if(Oe!==null&&(xi=ce.get(Oe),ht=Le,ht.setIndex(xi)),q.isMesh)J.wireframe===!0?(G.setLineWidth(J.wireframeLinewidth*H()),ht.setMode(M.LINES)):ht.setMode(M.TRIANGLES);else if(q.isLine){let je=J.linewidth;je===void 0&&(je=1),G.setLineWidth(je*H()),q.isLineSegments?ht.setMode(M.LINES):q.isLineLoop?ht.setMode(M.LINE_LOOP):ht.setMode(M.LINE_STRIP)}else q.isPoints?ht.setMode(M.POINTS):q.isSprite&&ht.setMode(M.TRIANGLES);if(q.isBatchedMesh)ht.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)ht.renderInstances(wt,Ut,q.count);else if(Z.isInstancedBufferGeometry){const je=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Qu=Math.min(Z.instanceCount,je);ht.renderInstances(wt,Ut,Qu)}else ht.render(wt,Ut)};function nt(b,j,Z){b.transparent===!0&&b.side===fn&&b.forceSinglePass===!1?(b.side=_n,b.needsUpdate=!0,za(b,j,Z),b.side=vr,b.needsUpdate=!0,za(b,j,Z),b.side=fn):za(b,j,Z)}this.compile=function(b,j,Z=null){Z===null&&(Z=b),g=De.get(Z),g.init(),x.push(g),Z.traverseVisible(function(q){q.isLight&&q.layers.test(j.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),b!==Z&&b.traverseVisible(function(q){q.isLight&&q.layers.test(j.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),g.setupLights(v._useLegacyLights);const J=new Set;return b.traverse(function(q){const we=q.material;if(we)if(Array.isArray(we))for(let Pe=0;Pe<we.length;Pe++){const Ne=we[Pe];nt(Ne,Z,q),J.add(Ne)}else nt(we,Z,q),J.add(we)}),x.pop(),g=null,J},this.compileAsync=function(b,j,Z=null){const J=this.compile(b,j,Z);return new Promise(q=>{function we(){if(J.forEach(function(Pe){fe.get(Pe).currentProgram.isReady()&&J.delete(Pe)}),J.size===0){q(b);return}setTimeout(we,10)}N.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let it=null;function Nt(b){it&&it(b)}function tn(){nn.stop()}function rt(){nn.start()}const nn=new O_;nn.setAnimationLoop(Nt),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(b){it=b,Xe.setAnimationLoop(b),b===null?nn.stop():nn.start()},Xe.addEventListener("sessionstart",tn),Xe.addEventListener("sessionend",rt),this.render=function(b,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(j),j=Xe.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,j,A),g=De.get(b,x.length),g.init(),x.push(g),me.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Y.setFromProjectionMatrix(me),de=this.localClippingEnabled,ie=Be.init(this.clippingPlanes,de),y=Ae.get(b,d.length),y.init(),d.push(y),li(b,j,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(U,B),this.info.render.frame++,ie===!0&&Be.beginShadows();const Z=g.state.shadowsArray;if(ue.render(Z,b,j),ie===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ze.render(y,b),g.setupLights(v._useLegacyLights),j.isArrayCamera){const J=j.cameras;for(let q=0,we=J.length;q<we;q++){const Pe=J[q];Oh(y,b,Pe,Pe.viewport)}}else Oh(y,b,j);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(v,b,j),Ge.resetDefaultState(),P=-1,E=null,x.pop(),x.length>0?g=x[x.length-1]:g=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function li(b,j,Z,J){if(b.visible===!1)return;if(b.layers.test(j.layers)){if(b.isGroup)Z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(j);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Y.intersectsSprite(b)){J&&oe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(me);const Pe=ae.update(b),Ne=b.material;Ne.visible&&y.push(b,Pe,Ne,Z,oe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Y.intersectsObject(b))){const Pe=ae.update(b),Ne=b.material;if(J&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),oe.copy(b.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),oe.copy(Pe.boundingSphere.center)),oe.applyMatrix4(b.matrixWorld).applyMatrix4(me)),Array.isArray(Ne)){const Oe=Pe.groups;for(let We=0,ke=Oe.length;We<ke;We++){const He=Oe[We],wt=Ne[He.materialIndex];wt&&wt.visible&&y.push(b,Pe,wt,Z,oe.z,He)}}else Ne.visible&&y.push(b,Pe,Ne,Z,oe.z,null)}}const we=b.children;for(let Pe=0,Ne=we.length;Pe<Ne;Pe++)li(we[Pe],j,Z,J)}function Oh(b,j,Z,J){const q=b.opaque,we=b.transmissive,Pe=b.transparent;g.setupLightsView(Z),ie===!0&&Be.setGlobalState(v.clippingPlanes,Z),we.length>0&&gy(q,we,j,Z),J&&G.viewport(T.copy(J)),q.length>0&&Fa(q,j,Z),we.length>0&&Fa(we,j,Z),Pe.length>0&&Fa(Pe,j,Z),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function gy(b,j,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;const we=ee.isWebGL2;ge===null&&(ge=new Jr(1,1,{generateMipmaps:!0,type:N.has("EXT_color_buffer_half_float")?xa:pr,minFilter:ya,samples:we?4:0})),v.getDrawingBufferSize(Me),we?ge.setSize(Me.x,Me.y):ge.setSize(_f(Me.x),_f(Me.y));const Pe=v.getRenderTarget();v.setRenderTarget(ge),v.getClearColor(te),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const Ne=v.toneMapping;v.toneMapping=hr,Fa(b,Z,J),R.updateMultisampleRenderTarget(ge),R.updateRenderTargetMipmap(ge);let Oe=!1;for(let We=0,ke=j.length;We<ke;We++){const He=j[We],wt=He.object,xn=He.geometry,Ut=He.material,xi=He.group;if(Ut.side===fn&&wt.layers.test(J.layers)){const ht=Ut.side;Ut.side=_n,Ut.needsUpdate=!0,Fh(wt,Z,J,xn,Ut,xi),Ut.side=ht,Ut.needsUpdate=!0,Oe=!0}}Oe===!0&&(R.updateMultisampleRenderTarget(ge),R.updateRenderTargetMipmap(ge)),v.setRenderTarget(Pe),v.setClearColor(te,L),v.toneMapping=Ne}function Fa(b,j,Z){const J=j.isScene===!0?j.overrideMaterial:null;for(let q=0,we=b.length;q<we;q++){const Pe=b[q],Ne=Pe.object,Oe=Pe.geometry,We=J===null?Pe.material:J,ke=Pe.group;Ne.layers.test(Z.layers)&&Fh(Ne,j,Z,Oe,We,ke)}}function Fh(b,j,Z,J,q,we){b.onBeforeRender(v,j,Z,J,q,we),b.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(v,j,Z,J,b,we),q.transparent===!0&&q.side===fn&&q.forceSinglePass===!1?(q.side=_n,q.needsUpdate=!0,v.renderBufferDirect(Z,j,J,q,b,we),q.side=vr,q.needsUpdate=!0,v.renderBufferDirect(Z,j,J,q,b,we),q.side=fn):v.renderBufferDirect(Z,j,J,q,b,we),b.onAfterRender(v,j,Z,J,q,we)}function za(b,j,Z){j.isScene!==!0&&(j=D);const J=fe.get(b),q=g.state.lights,we=g.state.shadowsArray,Pe=q.state.version,Ne=be.getParameters(b,q.state,we,j,Z),Oe=be.getProgramCacheKey(Ne);let We=J.programs;J.environment=b.isMeshStandardMaterial?j.environment:null,J.fog=j.fog,J.envMap=(b.isMeshStandardMaterial?V:w).get(b.envMap||J.environment),We===void 0&&(b.addEventListener("dispose",Ee),We=new Map,J.programs=We);let ke=We.get(Oe);if(ke!==void 0){if(J.currentProgram===ke&&J.lightsStateVersion===Pe)return kh(b,Ne),ke}else Ne.uniforms=be.getUniforms(b),b.onBuild(Z,Ne,v),b.onBeforeCompile(Ne,v),ke=be.acquireProgram(Ne,Oe),We.set(Oe,ke),J.uniforms=Ne.uniforms;const He=J.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(He.clippingPlanes=Be.uniform),kh(b,Ne),J.needsLights=yy(b),J.lightsStateVersion=Pe,J.needsLights&&(He.ambientLightColor.value=q.state.ambient,He.lightProbe.value=q.state.probe,He.directionalLights.value=q.state.directional,He.directionalLightShadows.value=q.state.directionalShadow,He.spotLights.value=q.state.spot,He.spotLightShadows.value=q.state.spotShadow,He.rectAreaLights.value=q.state.rectArea,He.ltc_1.value=q.state.rectAreaLTC1,He.ltc_2.value=q.state.rectAreaLTC2,He.pointLights.value=q.state.point,He.pointLightShadows.value=q.state.pointShadow,He.hemisphereLights.value=q.state.hemi,He.directionalShadowMap.value=q.state.directionalShadowMap,He.directionalShadowMatrix.value=q.state.directionalShadowMatrix,He.spotShadowMap.value=q.state.spotShadowMap,He.spotLightMatrix.value=q.state.spotLightMatrix,He.spotLightMap.value=q.state.spotLightMap,He.pointShadowMap.value=q.state.pointShadowMap,He.pointShadowMatrix.value=q.state.pointShadowMatrix),J.currentProgram=ke,J.uniformsList=null,ke}function zh(b){if(b.uniformsList===null){const j=b.currentProgram.getUniforms();b.uniformsList=jl.seqWithValue(j.seq,b.uniforms)}return b.uniformsList}function kh(b,j){const Z=fe.get(b);Z.outputColorSpace=j.outputColorSpace,Z.batching=j.batching,Z.instancing=j.instancing,Z.instancingColor=j.instancingColor,Z.skinning=j.skinning,Z.morphTargets=j.morphTargets,Z.morphNormals=j.morphNormals,Z.morphColors=j.morphColors,Z.morphTargetsCount=j.morphTargetsCount,Z.numClippingPlanes=j.numClippingPlanes,Z.numIntersection=j.numClipIntersection,Z.vertexAlphas=j.vertexAlphas,Z.vertexTangents=j.vertexTangents,Z.toneMapping=j.toneMapping}function vy(b,j,Z,J,q){j.isScene!==!0&&(j=D),R.resetTextureUnits();const we=j.fog,Pe=J.isMeshStandardMaterial?j.environment:null,Ne=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Hi,Oe=(J.isMeshStandardMaterial?V:w).get(J.envMap||Pe),We=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ke=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),He=!!Z.morphAttributes.position,wt=!!Z.morphAttributes.normal,xn=!!Z.morphAttributes.color;let Ut=hr;J.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ut=v.toneMapping);const xi=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ht=xi!==void 0?xi.length:0,je=fe.get(J),Qu=g.state.lights;if(ie===!0&&(de===!0||b!==E)){const Pn=b===E&&J.id===P;Be.setState(J,b,Pn)}let yt=!1;J.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Qu.state.version||je.outputColorSpace!==Ne||q.isBatchedMesh&&je.batching===!1||!q.isBatchedMesh&&je.batching===!0||q.isInstancedMesh&&je.instancing===!1||!q.isInstancedMesh&&je.instancing===!0||q.isSkinnedMesh&&je.skinning===!1||!q.isSkinnedMesh&&je.skinning===!0||q.isInstancedMesh&&je.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&je.instancingColor===!1&&q.instanceColor!==null||je.envMap!==Oe||J.fog===!0&&je.fog!==we||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Be.numPlanes||je.numIntersection!==Be.numIntersection)||je.vertexAlphas!==We||je.vertexTangents!==ke||je.morphTargets!==He||je.morphNormals!==wt||je.morphColors!==xn||je.toneMapping!==Ut||ee.isWebGL2===!0&&je.morphTargetsCount!==ht)&&(yt=!0):(yt=!0,je.__version=J.version);let Sr=je.currentProgram;yt===!0&&(Sr=za(J,j,q));let Bh=!1,Es=!1,ec=!1;const jt=Sr.getUniforms(),Er=je.uniforms;if(G.useProgram(Sr.program)&&(Bh=!0,Es=!0,ec=!0),J.id!==P&&(P=J.id,Es=!0),Bh||E!==b){jt.setValue(M,"projectionMatrix",b.projectionMatrix),jt.setValue(M,"viewMatrix",b.matrixWorldInverse);const Pn=jt.map.cameraPosition;Pn!==void 0&&Pn.setValue(M,oe.setFromMatrixPosition(b.matrixWorld)),ee.logarithmicDepthBuffer&&jt.setValue(M,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&jt.setValue(M,"isOrthographic",b.isOrthographicCamera===!0),E!==b&&(E=b,Es=!0,ec=!0)}if(q.isSkinnedMesh){jt.setOptional(M,q,"bindMatrix"),jt.setOptional(M,q,"bindMatrixInverse");const Pn=q.skeleton;Pn&&(ee.floatVertexTextures?(Pn.boneTexture===null&&Pn.computeBoneTexture(),jt.setValue(M,"boneTexture",Pn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(jt.setOptional(M,q,"batchingTexture"),jt.setValue(M,"batchingTexture",q._matricesTexture,R));const tc=Z.morphAttributes;if((tc.position!==void 0||tc.normal!==void 0||tc.color!==void 0&&ee.isWebGL2===!0)&&Ye.update(q,Z,Sr),(Es||je.receiveShadow!==q.receiveShadow)&&(je.receiveShadow=q.receiveShadow,jt.setValue(M,"receiveShadow",q.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Er.envMap.value=Oe,Er.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),Es&&(jt.setValue(M,"toneMappingExposure",v.toneMappingExposure),je.needsLights&&_y(Er,ec),we&&J.fog===!0&&xe.refreshFogUniforms(Er,we),xe.refreshMaterialUniforms(Er,J,K,$,ge),jl.upload(M,zh(je),Er,R)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(jl.upload(M,zh(je),Er,R),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&jt.setValue(M,"center",q.center),jt.setValue(M,"modelViewMatrix",q.modelViewMatrix),jt.setValue(M,"normalMatrix",q.normalMatrix),jt.setValue(M,"modelMatrix",q.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Pn=J.uniformsGroups;for(let nc=0,xy=Pn.length;nc<xy;nc++)if(ee.isWebGL2){const Hh=Pn[nc];Je.update(Hh,Sr),Je.bind(Hh,Sr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Sr}function _y(b,j){b.ambientLightColor.needsUpdate=j,b.lightProbe.needsUpdate=j,b.directionalLights.needsUpdate=j,b.directionalLightShadows.needsUpdate=j,b.pointLights.needsUpdate=j,b.pointLightShadows.needsUpdate=j,b.spotLights.needsUpdate=j,b.spotLightShadows.needsUpdate=j,b.rectAreaLights.needsUpdate=j,b.hemisphereLights.needsUpdate=j}function yy(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,j,Z){fe.get(b.texture).__webglTexture=j,fe.get(b.depthTexture).__webglTexture=Z;const J=fe.get(b);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||N.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,j){const Z=fe.get(b);Z.__webglFramebuffer=j,Z.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(b,j=0,Z=0){A=b,C=j,S=Z;let J=!0,q=null,we=!1,Pe=!1;if(b){const Oe=fe.get(b);Oe.__useDefaultFramebuffer!==void 0?(G.bindFramebuffer(M.FRAMEBUFFER,null),J=!1):Oe.__webglFramebuffer===void 0?R.setupRenderTarget(b):Oe.__hasExternalTextures&&R.rebindTextures(b,fe.get(b.texture).__webglTexture,fe.get(b.depthTexture).__webglTexture);const We=b.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Pe=!0);const ke=fe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ke[j])?q=ke[j][Z]:q=ke[j],we=!0):ee.isWebGL2&&b.samples>0&&R.useMultisampledRTT(b)===!1?q=fe.get(b).__webglMultisampledFramebuffer:Array.isArray(ke)?q=ke[Z]:q=ke,T.copy(b.viewport),O.copy(b.scissor),X=b.scissorTest}else T.copy(z).multiplyScalar(K).floor(),O.copy(Q).multiplyScalar(K).floor(),X=ne;if(G.bindFramebuffer(M.FRAMEBUFFER,q)&&ee.drawBuffers&&J&&G.drawBuffers(b,q),G.viewport(T),G.scissor(O),G.setScissorTest(X),we){const Oe=fe.get(b.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+j,Oe.__webglTexture,Z)}else if(Pe){const Oe=fe.get(b.texture),We=j||0;M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,Oe.__webglTexture,Z||0,We)}P=-1},this.readRenderTargetPixels=function(b,j,Z,J,q,we,Pe){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=fe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ne=Ne[Pe]),Ne){G.bindFramebuffer(M.FRAMEBUFFER,Ne);try{const Oe=b.texture,We=Oe.format,ke=Oe.type;if(We!==ni&&Ce.convert(We)!==M.getParameter(M.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=ke===xa&&(N.has("EXT_color_buffer_half_float")||ee.isWebGL2&&N.has("EXT_color_buffer_float"));if(ke!==pr&&Ce.convert(ke)!==M.getParameter(M.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===nr&&(ee.isWebGL2||N.has("OES_texture_float")||N.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=b.width-J&&Z>=0&&Z<=b.height-q&&M.readPixels(j,Z,J,q,Ce.convert(We),Ce.convert(ke),we)}finally{const Oe=A!==null?fe.get(A).__webglFramebuffer:null;G.bindFramebuffer(M.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(b,j,Z=0){const J=Math.pow(2,-Z),q=Math.floor(j.image.width*J),we=Math.floor(j.image.height*J);R.setTexture2D(j,0),M.copyTexSubImage2D(M.TEXTURE_2D,Z,0,0,b.x,b.y,q,we),G.unbindTexture()},this.copyTextureToTexture=function(b,j,Z,J=0){const q=j.image.width,we=j.image.height,Pe=Ce.convert(Z.format),Ne=Ce.convert(Z.type);R.setTexture2D(Z,0),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,Z.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,Z.unpackAlignment),j.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,J,b.x,b.y,q,we,Pe,Ne,j.image.data):j.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,J,b.x,b.y,j.mipmaps[0].width,j.mipmaps[0].height,Pe,j.mipmaps[0].data):M.texSubImage2D(M.TEXTURE_2D,J,b.x,b.y,Pe,Ne,j.image),J===0&&Z.generateMipmaps&&M.generateMipmap(M.TEXTURE_2D),G.unbindTexture()},this.copyTextureToTexture3D=function(b,j,Z,J,q=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=b.max.x-b.min.x+1,Pe=b.max.y-b.min.y+1,Ne=b.max.z-b.min.z+1,Oe=Ce.convert(J.format),We=Ce.convert(J.type);let ke;if(J.isData3DTexture)R.setTexture3D(J,0),ke=M.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)R.setTexture2DArray(J,0),ke=M.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,J.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,J.unpackAlignment);const He=M.getParameter(M.UNPACK_ROW_LENGTH),wt=M.getParameter(M.UNPACK_IMAGE_HEIGHT),xn=M.getParameter(M.UNPACK_SKIP_PIXELS),Ut=M.getParameter(M.UNPACK_SKIP_ROWS),xi=M.getParameter(M.UNPACK_SKIP_IMAGES),ht=Z.isCompressedTexture?Z.mipmaps[q]:Z.image;M.pixelStorei(M.UNPACK_ROW_LENGTH,ht.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,ht.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,b.min.x),M.pixelStorei(M.UNPACK_SKIP_ROWS,b.min.y),M.pixelStorei(M.UNPACK_SKIP_IMAGES,b.min.z),Z.isDataTexture||Z.isData3DTexture?M.texSubImage3D(ke,q,j.x,j.y,j.z,we,Pe,Ne,Oe,We,ht.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),M.compressedTexSubImage3D(ke,q,j.x,j.y,j.z,we,Pe,Ne,Oe,ht.data)):M.texSubImage3D(ke,q,j.x,j.y,j.z,we,Pe,Ne,Oe,We,ht),M.pixelStorei(M.UNPACK_ROW_LENGTH,He),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,wt),M.pixelStorei(M.UNPACK_SKIP_PIXELS,xn),M.pixelStorei(M.UNPACK_SKIP_ROWS,Ut),M.pixelStorei(M.UNPACK_SKIP_IMAGES,xi),q===0&&J.generateMipmaps&&M.generateMipmap(ke),G.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?R.setTextureCube(b,0):b.isData3DTexture?R.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?R.setTexture2DArray(b,0):R.setTexture2D(b,0),G.unbindTexture()},this.resetState=function(){C=0,S=0,A=null,G.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Th?"display-p3":"srgb",n.unpackColorSpace=et.workingColorSpace===Wu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Vt?Xr:x_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Xr?Vt:Hi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class aR extends W_{}aR.prototype.isWebGL1Renderer=!0;class Ch{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Fe(e),this.near=n,this.far=i}clone(){return new Ch(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class lR extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class uR{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=mf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,o=this.stride;r<o;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const rn=new k;class wu{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)rn.fromBufferAttribute(this,n),rn.applyMatrix4(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)rn.fromBufferAttribute(this,n),rn.applyNormalMatrix(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)rn.fromBufferAttribute(this,n),rn.transformDirection(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}setX(e,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=bi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=bi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=bi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=bi(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=tt(n,this.array),i=tt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array),o=tt(o,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)n.push(this.data.array[r+o])}return new Vn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new wu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)n.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class X_ extends ro{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let wo;const Us=new k,To=new k,Ao=new k,Ro=new ve,Os=new ve,j_=new Mt,wl=new k,Fs=new k,Tl=new k,gg=new ve,sd=new ve,vg=new ve;class cR extends Lt{constructor(e=new X_){if(super(),this.isSprite=!0,this.type="Sprite",wo===void 0){wo=new jn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new uR(n,5);wo.setIndex([0,1,2,0,2,3]),wo.setAttribute("position",new wu(i,3,0,!1)),wo.setAttribute("uv",new wu(i,2,3,!1))}this.geometry=wo,this.material=e,this.center=new ve(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),To.setFromMatrixScale(this.matrixWorld),j_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ao.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&To.multiplyScalar(-Ao.z);const i=this.material.rotation;let r,o;i!==0&&(o=Math.cos(i),r=Math.sin(i));const s=this.center;Al(wl.set(-.5,-.5,0),Ao,s,To,r,o),Al(Fs.set(.5,-.5,0),Ao,s,To,r,o),Al(Tl.set(.5,.5,0),Ao,s,To,r,o),gg.set(0,0),sd.set(1,0),vg.set(1,1);let a=e.ray.intersectTriangle(wl,Fs,Tl,!1,Us);if(a===null&&(Al(Fs.set(-.5,.5,0),Ao,s,To,r,o),sd.set(0,1),a=e.ray.intersectTriangle(wl,Tl,Fs,!1,Us),a===null))return;const l=e.ray.origin.distanceTo(Us);l<e.near||l>e.far||n.push({distance:l,point:Us.clone(),uv:Un.getInterpolation(Us,wl,Fs,Tl,gg,sd,vg,new ve),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Al(t,e,n,i,r,o){Ro.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Os.x=o*Ro.x-r*Ro.y,Os.y=r*Ro.x+o*Ro.y):Os.copy(Ro),t.copy(e),t.x+=Os.x,t.y+=Os.y,t.applyMatrix4(j_)}class $_ extends ro{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _g=new k,yg=new k,xg=new Mt,ad=new R_,Rl=new Xu;class dR extends Lt{constructor(e=new jn,n=new $_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,o=n.count;r<o;r++)_g.fromBufferAttribute(n,r-1),yg.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=_g.distanceTo(yg);e.setAttribute("lineDistance",new An(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Rl.copy(i.boundingSphere),Rl.applyMatrix4(r),Rl.radius+=o,e.ray.intersectsSphere(Rl)===!1)return;xg.copy(r).invert(),ad.copy(e.ray).applyMatrix4(xg);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new k,c=new k,h=new k,f=new k,p=this.isLineSegments?2:1,m=i.index,g=i.attributes.position;if(m!==null){const d=Math.max(0,s.start),x=Math.min(m.count,s.start+s.count);for(let v=d,_=x-1;v<_;v+=p){const C=m.getX(v),S=m.getX(v+1);if(u.fromBufferAttribute(g,C),c.fromBufferAttribute(g,S),ad.distanceSqToSegment(u,c,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(f);P<e.near||P>e.far||n.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,s.start),x=Math.min(g.count,s.start+s.count);for(let v=d,_=x-1;v<_;v+=p){if(u.fromBufferAttribute(g,v),c.fromBufferAttribute(g,v+1),ad.distanceSqToSegment(u,c,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(f);S<e.near||S>e.far||n.push({distance:S,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}const Sg=new k,Eg=new k;class fR extends dR{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,o=n.count;r<o;r+=2)Sg.fromBufferAttribute(n,r),Eg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Sg.distanceTo(Eg);e.setAttribute("lineDistance",new An(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bh extends yn{constructor(e,n,i,r,o,s,a,l,u){super(e,n,i,r,o,s,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),o=0;n.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),o+=i.distanceTo(r),n.push(o),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const o=i.length;let s;n?s=n:s=e*i[o-1];let a=0,l=o-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-s,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===s)return r/(o-1);const c=i[r],f=i[r+1]-c,p=(s-c)/f;return(r+p)/(o-1)}getTangent(e,n){let r=e-1e-4,o=e+1e-4;r<0&&(r=0),o>1&&(o=1);const s=this.getPoint(r),a=this.getPoint(o),l=n||(s.isVector2?new ve:new k);return l.copy(a).sub(s).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new k,r=[],o=[],s=[],a=new k,l=new Mt;for(let p=0;p<=e;p++){const m=p/e;r[p]=this.getTangentAt(m,new k)}o[0]=new k,s[0]=new k;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),h<=u&&(u=h,i.set(0,1,0)),f<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),o[0].crossVectors(r[0],a),s[0].crossVectors(r[0],o[0]);for(let p=1;p<=e;p++){if(o[p]=o[p-1].clone(),s[p]=s[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Qt(r[p-1].dot(r[p]),-1,1));o[p].applyMatrix4(l.makeRotationAxis(a,m))}s[p].crossVectors(r[p],o[p])}if(n===!0){let p=Math.acos(Qt(o[0].dot(o[e]),-1,1));p/=e,r[0].dot(a.crossVectors(o[0],o[e]))>0&&(p=-p);for(let m=1;m<=e;m++)o[m].applyMatrix4(l.makeRotationAxis(r[m],p*m)),s[m].crossVectors(r[m],o[m])}return{tangents:r,normals:o,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ph extends yi{constructor(e=0,n=0,i=1,r=1,o=0,s=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=o,this.aEndAngle=s,this.aClockwise=a,this.aRotation=l}getPoint(e,n){const i=n||new ve,r=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const s=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=r;for(;o>r;)o-=r;o<Number.EPSILON&&(s?o=0:o=r),this.aClockwise===!0&&!s&&(o===r?o=-r:o=o-r);const a=this.aStartAngle+e*o;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=u-this.aY;l=f*c-p*h+this.aX,u=f*h+p*c+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class hR extends Ph{constructor(e,n,i,r,o,s){super(e,n,i,i,r,o,s),this.isArcCurve=!0,this.type="ArcCurve"}}function Lh(){let t=0,e=0,n=0,i=0;function r(o,s,a,l){t=o,e=a,n=-3*o+3*s-2*a-l,i=2*o-2*s+a+l}return{initCatmullRom:function(o,s,a,l,u){r(s,a,u*(a-o),u*(l-s))},initNonuniformCatmullRom:function(o,s,a,l,u,c,h){let f=(s-o)/u-(a-o)/(u+c)+(a-s)/c,p=(a-s)/c-(l-s)/(c+h)+(l-a)/h;f*=c,p*=c,r(s,a,f,p)},calc:function(o){const s=o*o,a=s*o;return t+e*o+n*s+i*a}}}const Cl=new k,ld=new Lh,ud=new Lh,cd=new Lh;class pR extends yi{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new k){const i=n,r=this.points,o=r.length,s=(o-(this.closed?0:1))*e;let a=Math.floor(s),l=s-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%o]:(Cl.subVectors(r[0],r[1]).add(r[0]),u=Cl);const h=r[a%o],f=r[(a+1)%o];if(this.closed||a+2<o?c=r[(a+2)%o]:(Cl.subVectors(r[o-1],r[o-2]).add(r[o-1]),c=Cl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(u.distanceToSquared(h),p),y=Math.pow(h.distanceToSquared(f),p),g=Math.pow(f.distanceToSquared(c),p);y<1e-4&&(y=1),m<1e-4&&(m=y),g<1e-4&&(g=y),ld.initNonuniformCatmullRom(u.x,h.x,f.x,c.x,m,y,g),ud.initNonuniformCatmullRom(u.y,h.y,f.y,c.y,m,y,g),cd.initNonuniformCatmullRom(u.z,h.z,f.z,c.z,m,y,g)}else this.curveType==="catmullrom"&&(ld.initCatmullRom(u.x,h.x,f.x,c.x,this.tension),ud.initCatmullRom(u.y,h.y,f.y,c.y,this.tension),cd.initCatmullRom(u.z,h.z,f.z,c.z,this.tension));return i.set(ld.calc(l),ud.calc(l),cd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new k().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Mg(t,e,n,i,r){const o=(i-e)*.5,s=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+o+s)*l+(-3*n+3*i-2*o-s)*a+o*t+n}function mR(t,e){const n=1-t;return n*n*e}function gR(t,e){return 2*(1-t)*t*e}function vR(t,e){return t*t*e}function Qs(t,e,n,i){return mR(t,e)+gR(t,n)+vR(t,i)}function _R(t,e){const n=1-t;return n*n*n*e}function yR(t,e){const n=1-t;return 3*n*n*t*e}function xR(t,e){return 3*(1-t)*t*t*e}function SR(t,e){return t*t*t*e}function ea(t,e,n,i,r){return _R(t,e)+yR(t,n)+xR(t,i)+SR(t,r)}class Y_ extends yi{constructor(e=new ve,n=new ve,i=new ve,r=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new ve){const i=n,r=this.v0,o=this.v1,s=this.v2,a=this.v3;return i.set(ea(e,r.x,o.x,s.x,a.x),ea(e,r.y,o.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ER extends yi{constructor(e=new k,n=new k,i=new k,r=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new k){const i=n,r=this.v0,o=this.v1,s=this.v2,a=this.v3;return i.set(ea(e,r.x,o.x,s.x,a.x),ea(e,r.y,o.y,s.y,a.y),ea(e,r.z,o.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class q_ extends yi{constructor(e=new ve,n=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new ve){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new ve){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class MR extends yi{constructor(e=new k,n=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new k){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new k){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class K_ extends yi{constructor(e=new ve,n=new ve,i=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new ve){const i=n,r=this.v0,o=this.v1,s=this.v2;return i.set(Qs(e,r.x,o.x,s.x),Qs(e,r.y,o.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wR extends yi{constructor(e=new k,n=new k,i=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new k){const i=n,r=this.v0,o=this.v1,s=this.v2;return i.set(Qs(e,r.x,o.x,s.x),Qs(e,r.y,o.y,s.y),Qs(e,r.z,o.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Z_ extends yi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new ve){const i=n,r=this.points,o=(r.length-1)*e,s=Math.floor(o),a=o-s,l=r[s===0?s:s-1],u=r[s],c=r[s>r.length-2?r.length-1:s+1],h=r[s>r.length-3?r.length-1:s+2];return i.set(Mg(a,l.x,u.x,c.x,h.x),Mg(a,l.y,u.y,c.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new ve().fromArray(r))}return this}}var xf=Object.freeze({__proto__:null,ArcCurve:hR,CatmullRomCurve3:pR,CubicBezierCurve:Y_,CubicBezierCurve3:ER,EllipseCurve:Ph,LineCurve:q_,LineCurve3:MR,QuadraticBezierCurve:K_,QuadraticBezierCurve3:wR,SplineCurve:Z_});class TR extends yi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xf[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let o=0;for(;o<r.length;){if(r[o]>=i){const s=r[o]-i,a=this.curves[o],l=a.getLength(),u=l===0?0:1-s/l;return a.getPointAt(u,n)}o++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,o=this.curves;r<o.length;r++){const s=o[r],a=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,l=s.getPoints(a);for(let u=0;u<l.length;u++){const c=l[u];i&&i.equals(c)||(n.push(c),i=c)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new xf[r.type]().fromJSON(r))}return this}}class wg extends TR{constructor(e){super(),this.type="Path",this.currentPoint=new ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new q_(this.currentPoint.clone(),new ve(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const o=new K_(this.currentPoint.clone(),new ve(e,n),new ve(i,r));return this.curves.push(o),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,o,s){const a=new Y_(this.currentPoint.clone(),new ve(e,n),new ve(i,r),new ve(o,s));return this.curves.push(a),this.currentPoint.set(o,s),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new Z_(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,o,s){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,o,s),this}absarc(e,n,i,r,o,s){return this.absellipse(e,n,i,i,r,o,s),this}ellipse(e,n,i,r,o,s,a,l){const u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+u,n+c,i,r,o,s,a,l),this}absellipse(e,n,i,r,o,s,a,l){const u=new Ph(e,n,i,r,o,s,a,l);if(this.curves.length>0){const h=u.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(u);const c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class J_ extends wg{constructor(e){super(e),this.uuid=Ui(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new wg().fromJSON(r))}return this}}const AR={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let o=Q_(t,0,r,n,!0);const s=[];if(!o||o.next===o.prev)return s;let a,l,u,c,h,f,p;if(i&&(o=LR(t,e,o,n)),t.length>80*n){a=u=t[0],l=c=t[1];for(let m=n;m<r;m+=n)h=t[m],f=t[m+1],h<a&&(a=h),f<l&&(l=f),h>u&&(u=h),f>c&&(c=f);p=Math.max(u-a,c-l),p=p!==0?32767/p:0}return Sa(o,s,n,a,l,p,0),s}};function Q_(t,e,n,i,r){let o,s;if(r===GR(t,e,n,i)>0)for(o=e;o<n;o+=i)s=Tg(o,t[o],t[o+1],s);else for(o=n-i;o>=e;o-=i)s=Tg(o,t[o],t[o+1],s);return s&&qu(s,s.next)&&(Ma(s),s=s.next),s}function eo(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(qu(n,n.next)||mt(n.prev,n,n.next)===0)){if(Ma(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Sa(t,e,n,i,r,o,s){if(!t)return;!s&&o&&OR(t,i,r,o);let a=t,l,u;for(;t.prev!==t.next;){if(l=t.prev,u=t.next,o?CR(t,i,r,o):RR(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(u.i/n|0),Ma(t),t=u.next,a=u.next;continue}if(t=u,t===a){s?s===1?(t=bR(eo(t),e,n),Sa(t,e,n,i,r,o,2)):s===2&&PR(t,e,n,i,r,o):Sa(eo(t),e,n,i,r,o,1);break}}}function RR(t){const e=t.prev,n=t,i=t.next;if(mt(e,n,i)>=0)return!1;const r=e.x,o=n.x,s=i.x,a=e.y,l=n.y,u=i.y,c=r<o?r<s?r:s:o<s?o:s,h=a<l?a<u?a:u:l<u?l:u,f=r>o?r>s?r:s:o>s?o:s,p=a>l?a>u?a:u:l>u?l:u;let m=i.next;for(;m!==e;){if(m.x>=c&&m.x<=f&&m.y>=h&&m.y<=p&&Vo(r,a,o,l,s,u,m.x,m.y)&&mt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function CR(t,e,n,i){const r=t.prev,o=t,s=t.next;if(mt(r,o,s)>=0)return!1;const a=r.x,l=o.x,u=s.x,c=r.y,h=o.y,f=s.y,p=a<l?a<u?a:u:l<u?l:u,m=c<h?c<f?c:f:h<f?h:f,y=a>l?a>u?a:u:l>u?l:u,g=c>h?c>f?c:f:h>f?h:f,d=Sf(p,m,e,n,i),x=Sf(y,g,e,n,i);let v=t.prevZ,_=t.nextZ;for(;v&&v.z>=d&&_&&_.z<=x;){if(v.x>=p&&v.x<=y&&v.y>=m&&v.y<=g&&v!==r&&v!==s&&Vo(a,c,l,h,u,f,v.x,v.y)&&mt(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=p&&_.x<=y&&_.y>=m&&_.y<=g&&_!==r&&_!==s&&Vo(a,c,l,h,u,f,_.x,_.y)&&mt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=d;){if(v.x>=p&&v.x<=y&&v.y>=m&&v.y<=g&&v!==r&&v!==s&&Vo(a,c,l,h,u,f,v.x,v.y)&&mt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=x;){if(_.x>=p&&_.x<=y&&_.y>=m&&_.y<=g&&_!==r&&_!==s&&Vo(a,c,l,h,u,f,_.x,_.y)&&mt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function bR(t,e,n){let i=t;do{const r=i.prev,o=i.next.next;!qu(r,o)&&ey(r,i,i.next,o)&&Ea(r,o)&&Ea(o,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(o.i/n|0),Ma(i),Ma(i.next),i=t=o),i=i.next}while(i!==t);return eo(i)}function PR(t,e,n,i,r,o){let s=t;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&kR(s,a)){let l=ty(s,a);s=eo(s,s.next),l=eo(l,l.next),Sa(s,e,n,i,r,o,0),Sa(l,e,n,i,r,o,0);return}a=a.next}s=s.next}while(s!==t)}function LR(t,e,n,i){const r=[];let o,s,a,l,u;for(o=0,s=e.length;o<s;o++)a=e[o]*i,l=o<s-1?e[o+1]*i:t.length,u=Q_(t,a,l,i,!1),u===u.next&&(u.steiner=!0),r.push(zR(u));for(r.sort(DR),o=0;o<r.length;o++)n=IR(r[o],n);return n}function DR(t,e){return t.x-e.x}function IR(t,e){const n=NR(t,e);if(!n)return e;const i=ty(n,t);return eo(i,i.next),eo(n,n.next)}function NR(t,e){let n=e,i=-1/0,r;const o=t.x,s=t.y;do{if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){const f=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(f<=o&&f>i&&(i=f,r=n.x<n.next.x?n:n.next,f===o))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,u=r.y;let c=1/0,h;n=r;do o>=n.x&&n.x>=l&&o!==n.x&&Vo(s<u?o:i,s,l,u,s<u?i:o,s,n.x,n.y)&&(h=Math.abs(s-n.y)/(o-n.x),Ea(n,t)&&(h<c||h===c&&(n.x>r.x||n.x===r.x&&UR(r,n)))&&(r=n,c=h)),n=n.next;while(n!==a);return r}function UR(t,e){return mt(t.prev,t,e.prev)<0&&mt(e.next,t,t.next)<0}function OR(t,e,n,i){let r=t;do r.z===0&&(r.z=Sf(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,FR(r)}function FR(t){let e,n,i,r,o,s,a,l,u=1;do{for(n=t,t=null,o=null,s=0;n;){for(s++,i=n,a=0,e=0;e<u&&(a++,i=i.nextZ,!!i);e++);for(l=u;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),o?o.nextZ=r:t=r,r.prevZ=o,o=r;n=i}o.nextZ=null,u*=2}while(s>1);return t}function Sf(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function zR(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Vo(t,e,n,i,r,o,s,a){return(r-s)*(e-a)>=(t-s)*(o-a)&&(t-s)*(i-a)>=(n-s)*(e-a)&&(n-s)*(o-a)>=(r-s)*(i-a)}function kR(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!BR(t,e)&&(Ea(t,e)&&Ea(e,t)&&HR(t,e)&&(mt(t.prev,t,e.prev)||mt(t,e.prev,e))||qu(t,e)&&mt(t.prev,t,t.next)>0&&mt(e.prev,e,e.next)>0)}function mt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function qu(t,e){return t.x===e.x&&t.y===e.y}function ey(t,e,n,i){const r=Pl(mt(t,e,n)),o=Pl(mt(t,e,i)),s=Pl(mt(n,i,t)),a=Pl(mt(n,i,e));return!!(r!==o&&s!==a||r===0&&bl(t,n,e)||o===0&&bl(t,i,e)||s===0&&bl(n,t,i)||a===0&&bl(n,e,i))}function bl(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Pl(t){return t>0?1:t<0?-1:0}function BR(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&ey(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Ea(t,e){return mt(t.prev,t,t.next)<0?mt(t,e,t.next)>=0&&mt(t,t.prev,e)>=0:mt(t,e,t.prev)<0||mt(t,t.next,e)<0}function HR(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,o=(t.y+e.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&r<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function ty(t,e){const n=new Ef(t.i,t.x,t.y),i=new Ef(e.i,e.x,e.y),r=t.next,o=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,o.next=i,i.prev=o,i}function Tg(t,e,n,i){const r=new Ef(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Ma(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Ef(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function GR(t,e,n,i){let r=0;for(let o=e,s=n-i;o<n;o+=i)r+=(t[s]-t[o])*(t[o+1]+t[s+1]),s=o;return r}class ta{static area(e){const n=e.length;let i=0;for(let r=n-1,o=0;o<n;r=o++)i+=e[r].x*e[o].y-e[o].x*e[r].y;return i*.5}static isClockWise(e){return ta.area(e)<0}static triangulateShape(e,n){const i=[],r=[],o=[];Ag(e),Rg(i,e);let s=e.length;n.forEach(Ag);for(let l=0;l<n.length;l++)r.push(s),s+=n[l].length,Rg(i,n[l]);const a=AR.triangulate(i,r);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function Ag(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function Rg(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Dh extends jn{constructor(e=new J_([new ve(.5,.5),new ve(-.5,.5),new ve(-.5,-.5),new ve(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],o=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];s(u)}this.setAttribute("position",new An(r,3)),this.setAttribute("uv",new An(o,2)),this.computeVertexNormals();function s(a){const l=[],u=n.curveSegments!==void 0?n.curveSegments:12,c=n.steps!==void 0?n.steps:1,h=n.depth!==void 0?n.depth:1;let f=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,m=n.bevelSize!==void 0?n.bevelSize:p-.1,y=n.bevelOffset!==void 0?n.bevelOffset:0,g=n.bevelSegments!==void 0?n.bevelSegments:3;const d=n.extrudePath,x=n.UVGenerator!==void 0?n.UVGenerator:VR;let v,_=!1,C,S,A,P;d&&(v=d.getSpacedPoints(c),_=!0,f=!1,C=d.computeFrenetFrames(c,!1),S=new k,A=new k,P=new k),f||(g=0,p=0,m=0,y=0);const E=a.extractPoints(u);let T=E.shape;const O=E.holes;if(!ta.isClockWise(T)){T=T.reverse();for(let M=0,F=O.length;M<F;M++){const N=O[M];ta.isClockWise(N)&&(O[M]=N.reverse())}}const te=ta.triangulateShape(T,O),L=T;for(let M=0,F=O.length;M<F;M++){const N=O[M];T=T.concat(N)}function W(M,F,N){return F||console.error("THREE.ExtrudeGeometry: vec does not exist"),M.clone().addScaledVector(F,N)}const $=T.length,K=te.length;function U(M,F,N){let ee,G,pe;const fe=M.x-F.x,R=M.y-F.y,w=N.x-M.x,V=N.y-M.y,ce=fe*fe+R*R,le=fe*V-R*w;if(Math.abs(le)>Number.EPSILON){const ae=Math.sqrt(ce),be=Math.sqrt(w*w+V*V),xe=F.x-R/ae,Ae=F.y+fe/ae,De=N.x-V/be,Be=N.y+w/be,ue=((De-xe)*V-(Be-Ae)*w)/(fe*V-R*w);ee=xe+fe*ue-M.x,G=Ae+R*ue-M.y;const Ze=ee*ee+G*G;if(Ze<=2)return new ve(ee,G);pe=Math.sqrt(Ze/2)}else{let ae=!1;fe>Number.EPSILON?w>Number.EPSILON&&(ae=!0):fe<-Number.EPSILON?w<-Number.EPSILON&&(ae=!0):Math.sign(R)===Math.sign(V)&&(ae=!0),ae?(ee=-R,G=fe,pe=Math.sqrt(ce)):(ee=fe,G=R,pe=Math.sqrt(ce/2))}return new ve(ee/pe,G/pe)}const B=[];for(let M=0,F=L.length,N=F-1,ee=M+1;M<F;M++,N++,ee++)N===F&&(N=0),ee===F&&(ee=0),B[M]=U(L[M],L[N],L[ee]);const z=[];let Q,ne=B.concat();for(let M=0,F=O.length;M<F;M++){const N=O[M];Q=[];for(let ee=0,G=N.length,pe=G-1,fe=ee+1;ee<G;ee++,pe++,fe++)pe===G&&(pe=0),fe===G&&(fe=0),Q[ee]=U(N[ee],N[pe],N[fe]);z.push(Q),ne=ne.concat(Q)}for(let M=0;M<g;M++){const F=M/g,N=p*Math.cos(F*Math.PI/2),ee=m*Math.sin(F*Math.PI/2)+y;for(let G=0,pe=L.length;G<pe;G++){const fe=W(L[G],B[G],ee);me(fe.x,fe.y,-N)}for(let G=0,pe=O.length;G<pe;G++){const fe=O[G];Q=z[G];for(let R=0,w=fe.length;R<w;R++){const V=W(fe[R],Q[R],ee);me(V.x,V.y,-N)}}}const Y=m+y;for(let M=0;M<$;M++){const F=f?W(T[M],ne[M],Y):T[M];_?(A.copy(C.normals[0]).multiplyScalar(F.x),S.copy(C.binormals[0]).multiplyScalar(F.y),P.copy(v[0]).add(A).add(S),me(P.x,P.y,P.z)):me(F.x,F.y,0)}for(let M=1;M<=c;M++)for(let F=0;F<$;F++){const N=f?W(T[F],ne[F],Y):T[F];_?(A.copy(C.normals[M]).multiplyScalar(N.x),S.copy(C.binormals[M]).multiplyScalar(N.y),P.copy(v[M]).add(A).add(S),me(P.x,P.y,P.z)):me(N.x,N.y,h/c*M)}for(let M=g-1;M>=0;M--){const F=M/g,N=p*Math.cos(F*Math.PI/2),ee=m*Math.sin(F*Math.PI/2)+y;for(let G=0,pe=L.length;G<pe;G++){const fe=W(L[G],B[G],ee);me(fe.x,fe.y,h+N)}for(let G=0,pe=O.length;G<pe;G++){const fe=O[G];Q=z[G];for(let R=0,w=fe.length;R<w;R++){const V=W(fe[R],Q[R],ee);_?me(V.x,V.y+v[c-1].y,v[c-1].x+N):me(V.x,V.y,h+N)}}}ie(),de();function ie(){const M=r.length/3;if(f){let F=0,N=$*F;for(let ee=0;ee<K;ee++){const G=te[ee];Me(G[2]+N,G[1]+N,G[0]+N)}F=c+g*2,N=$*F;for(let ee=0;ee<K;ee++){const G=te[ee];Me(G[0]+N,G[1]+N,G[2]+N)}}else{for(let F=0;F<K;F++){const N=te[F];Me(N[2],N[1],N[0])}for(let F=0;F<K;F++){const N=te[F];Me(N[0]+$*c,N[1]+$*c,N[2]+$*c)}}i.addGroup(M,r.length/3-M,0)}function de(){const M=r.length/3;let F=0;ge(L,F),F+=L.length;for(let N=0,ee=O.length;N<ee;N++){const G=O[N];ge(G,F),F+=G.length}i.addGroup(M,r.length/3-M,1)}function ge(M,F){let N=M.length;for(;--N>=0;){const ee=N;let G=N-1;G<0&&(G=M.length-1);for(let pe=0,fe=c+g*2;pe<fe;pe++){const R=$*pe,w=$*(pe+1),V=F+ee+R,ce=F+G+R,le=F+G+w,ae=F+ee+w;oe(V,ce,le,ae)}}}function me(M,F,N){l.push(M),l.push(F),l.push(N)}function Me(M,F,N){D(M),D(F),D(N);const ee=r.length/3,G=x.generateTopUV(i,r,ee-3,ee-2,ee-1);H(G[0]),H(G[1]),H(G[2])}function oe(M,F,N,ee){D(M),D(F),D(ee),D(F),D(N),D(ee);const G=r.length/3,pe=x.generateSideWallUV(i,r,G-6,G-3,G-2,G-1);H(pe[0]),H(pe[1]),H(pe[3]),H(pe[1]),H(pe[2]),H(pe[3])}function D(M){r.push(l[M*3+0]),r.push(l[M*3+1]),r.push(l[M*3+2])}function H(M){o.push(M.x),o.push(M.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return WR(n,i,e)}static fromJSON(e,n){const i=[];for(let o=0,s=e.shapes.length;o<s;o++){const a=n[e.shapes[o]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new xf[r.type]().fromJSON(r)),new Dh(i,e.options)}}const VR={generateTopUV:function(t,e,n,i,r){const o=e[n*3],s=e[n*3+1],a=e[i*3],l=e[i*3+1],u=e[r*3],c=e[r*3+1];return[new ve(o,s),new ve(a,l),new ve(u,c)]},generateSideWallUV:function(t,e,n,i,r,o){const s=e[n*3],a=e[n*3+1],l=e[n*3+2],u=e[i*3],c=e[i*3+1],h=e[i*3+2],f=e[r*3],p=e[r*3+1],m=e[r*3+2],y=e[o*3],g=e[o*3+1],d=e[o*3+2];return Math.abs(a-c)<Math.abs(s-u)?[new ve(s,1-l),new ve(u,1-h),new ve(f,1-m),new ve(y,1-d)]:[new ve(a,1-l),new ve(c,1-h),new ve(p,1-m),new ve(g,1-d)]}};function WR(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const o=t[i];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class fs extends ro{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=S_,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ny extends Lt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class XR extends ny{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const dd=new Mt,Cg=new k,bg=new k;class jR{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ah,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Cg.setFromMatrixPosition(e.matrixWorld),n.position.copy(Cg),bg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(bg),n.updateMatrixWorld(),dd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(dd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class $R extends jR{constructor(){super(new F_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class YR extends ny{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new $R}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class qR extends fR{constructor(e=10,n=10,i=4473924,r=8947848){i=new Fe(i),r=new Fe(r);const o=n/2,s=e/n,a=e/2,l=[],u=[];for(let f=0,p=0,m=-a;f<=n;f++,m+=s){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);const y=f===o?i:r;y.toArray(u,p),p+=3,y.toArray(u,p),p+=3,y.toArray(u,p),p+=3,y.toArray(u,p),p+=3}const c=new jn;c.setAttribute("position",new An(l,3)),c.setAttribute("color",new An(u,3));const h=new $_({vertexColors:!0,toneMapped:!1});super(c,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mh);function fd(t,e,n){return Math.min(n,Math.max(e,t))}function Ku(t){const e=t.replace("#","");return{r:parseInt(e.substring(0,2),16)||0,g:parseInt(e.substring(2,4),16)||0,b:parseInt(e.substring(4,6),16)||0}}function wa(t,e,n){const i=fd(t.r*e,0,255)|0,r=fd(t.g*e,0,255)|0,o=fd(t.b*e,0,255)|0;return`rgba(${i},${r},${o},${n})`}function KR(t,e){return e==="concrete"?30:e==="marble"?6:e==="tile"?4:t==="roof"?26:t==="wall"?18:8}function ZR(t,e){return t==="marble"?Math.max(.2,e-.45):t==="tile"?Math.max(.3,e-.3):e}function JR(t,e,n){const i=Ku(e),r=n/8,o=n/4;t.strokeStyle=wa(i,.5,.9),t.lineWidth=3;for(let a=0;a<=n;a+=r)t.beginPath(),t.moveTo(0,a),t.lineTo(n,a),t.stroke();let s=0;for(let a=0;a<n;a+=r){const l=s%2===0?0:o/2;for(let u=-o;u<=n+o;u+=o)t.beginPath(),t.moveTo(u+l,a),t.lineTo(u+l,a+r),t.stroke();s++}}function QR(t,e,n){const i=Ku(e),r=n/4;t.strokeStyle=wa(i,1.35,.85),t.lineWidth=3;for(let o=0;o<=4;o++)t.beginPath(),t.moveTo(o*r,0),t.lineTo(o*r,n),t.stroke(),t.beginPath(),t.moveTo(0,o*r),t.lineTo(n,o*r),t.stroke()}function eC(t,e,n){const i=Ku(e),r=n/6;for(let o=0;o<n;o+=r){t.strokeStyle=wa(i,.55,.85),t.lineWidth=2,t.beginPath(),t.moveTo(0,o),t.lineTo(n,o),t.stroke();for(let s=0;s<5;s++){const a=o+Math.random()*r,l=.85+Math.random()*.35;t.strokeStyle=wa(i,l,.35),t.lineWidth=1,t.beginPath();const u=Math.random()*n*.6;t.moveTo(u,a),t.lineTo(u+n*(.2+Math.random()*.3),a),t.stroke()}}}function tC(t,e,n){const i=Ku(e);for(let r=0;r<4;r++){const o=r%2===0?1.4:.7;t.strokeStyle=wa(i,o,.4),t.lineWidth=1+Math.random()*1.5,t.beginPath();let s=Math.random()*n,a=0;for(t.moveTo(s,a);a<n;){const l=s+(Math.random()-.5)*n*.3,u=a+n/6;t.quadraticCurveTo(s+(Math.random()-.5)*20,(a+u)/2,l,u),s=l,a=u}t.stroke()}}function nC(t,e,n,i){n==="brick"?JR(t,e,i):n==="tile"?QR(t,e,i):n==="wood"?eC(t,e,i):n==="marble"&&tC(t,e,i)}function Pg(t,e=2.7,n=0){var f;if(!t.length)return{x:10,z:8,radius:12,targetY:1};let i=1/0,r=1/0,o=-1/0,s=-1/0,a=0;t.forEach(p=>{i=Math.min(i,p.gx),o=Math.max(o,p.gx+p.gw),r=Math.min(r,p.gy),s=Math.max(s,p.gy+p.gh),a=Math.max(a,p.floor??0)});const l=Ua(t,e,0,n),u=((f=t.find(p=>(p.floor??0)===a))==null?void 0:f.wall_height)??e,c=l.get(a)+u+vi,h=Math.max(o-i,s-r);return{x:(i+o)/2,z:(r+s)/2,radius:Math.max(h,c)*1.5+4,targetY:Math.max(1,c*.55)}}function Ua(t,e,n=0,i=0){const r=Math.max(n,0,...t.map(a=>a.floor??0)),o=new Map;let s=0;for(let a=0;a<=r;a++){o.set(a,s);const l=t.find(c=>(c.floor??0)===a),u=(l==null?void 0:l.wall_height)??e;s+=u+vi+i}return o}function Qo(t,e,n){return Math.min(n,Math.max(e,t))}function iy(t){if(t.points&&t.points.length>=3){const e=t.points;let n=0;for(let i=0;i<e.length;i++){const r=e[i],o=e[(i+1)%e.length];n+=r.x*o.y-o.x*r.y}return Math.abs(n)/2}return t.gw*t.gh}function Zu(t,e){const n=t.filter(a=>(a.floor??0)===e);if(!n.length)return null;let i=1/0,r=1/0,o=-1/0,s=-1/0;return n.forEach(a=>{i=Math.min(i,a.gx),r=Math.min(r,a.gy),o=Math.max(o,a.gx+a.gw),s=Math.max(s,a.gy+a.gh)}),{minX:i,minY:r,maxX:o,maxY:s}}const ft=.15,kt=.9,ry=2.05,hn=.9,Tu=.9,ei=.3,ot=.3,hi=.4,iC=.4,hd=.6,vi=.18,hs=.22,Dr=.35,Gs=28*Math.PI/180,_i=0,Pi=.55,Au=.75,rC=.85,oy={bed:{label:"سرير",w:1.6,d:2,category:"غرفة نوم"},wardrobe:{label:"خزانة",w:1.2,d:.6,category:"غرفة نوم"},nightstand:{label:"كومودينو",w:.45,d:.4,category:"غرفة نوم"},sofa:{label:"أريكة",w:1.8,d:.85,category:"صالة"},armchair:{label:"كرسي بذراعين",w:.75,d:.75,category:"صالة"},tv_unit:{label:"وحدة تلفزيون",w:1.4,d:.4,category:"صالة"},dining_table:{label:"طاولة سفرة",w:1.6,d:.9,category:"صالة"},table:{label:"طاولة",w:1.4,d:.8,category:"عام"},chair:{label:"كرسي",w:.45,d:.45,category:"عام"},toilet:{label:"مرحاض",w:.4,d:.65,category:"حمام"},bathtub:{label:"بانيو",w:1.7,d:.75,category:"حمام"},shower:{label:"كابينة دش",w:.9,d:.9,category:"حمام"},sink:{label:"مغسلة حمام",w:.9,d:.55,category:"حمام"},kitchen_counter:{label:"كاونتر مطبخ",w:2,d:.6,category:"مطبخ"},stove:{label:"موقد",w:.6,d:.6,category:"مطبخ"},fridge:{label:"ثلاجة",w:.7,d:.7,category:"مطبخ"},desk:{label:"مكتب",w:1.2,d:.6,category:"مكتب"},bookshelf:{label:"مكتبة",w:.9,d:.3,category:"مكتب"}};function oC(t,e,n="plaster"){const r=document.createElement("canvas");r.width=256,r.height=256;const o=r.getContext("2d"),a=`#${new Fe(t).getHexString()}`;o.fillStyle=a,o.fillRect(0,0,256,256);const l=KR(e,n),u=o.getImageData(0,0,256,256),c=u.data;for(let f=0;f<c.length;f+=4){const p=(Math.random()-.5)*l;c[f]=Qo(c[f]+p,0,255),c[f+1]=Qo(c[f+1]+p,0,255),c[f+2]=Qo(c[f+2]+p,0,255)}if(o.putImageData(u,0,0),nC(o,a,n,256),e==="roof"&&n==="plaster"){o.strokeStyle="rgba(0,0,0,0.12)",o.lineWidth=1;for(let f=0;f<=256;f+=32)o.beginPath(),o.moveTo(0,f+.5),o.lineTo(256,f+.5),o.stroke()}const h=new bh(r);return h.wrapS=Zr,h.wrapT=Zr,h.needsUpdate=!0,h}function sC(t,e,n,i="plaster"){const r=`${n}:${i}:${e}`;let o=t.get(r);return o||(o=oC(e,n,i),t.set(r,o)),o}function aC(){const e=new Float32Array(16384);for(let u=0;u<e.length;u++)e[u]=Math.random();const n=new Float32Array(128*128);for(let u=0;u<128;u++)for(let c=0;c<128;c++){let h=0;for(let f=-1;f<=1;f++)for(let p=-1;p<=1;p++){const m=(c+p+128)%128,y=(u+f+128)%128;h+=e[y*128+m]}n[u*128+c]=h/9}const i=document.createElement("canvas");i.width=128,i.height=128;const r=i.getContext("2d"),o=r.createImageData(128,128),s=o.data,a=1.2;for(let u=0;u<128;u++)for(let c=0;c<128;c++){const h=n[u*128+(c-1+128)%128],f=n[u*128+(c+1)%128],p=n[(u-1+128)%128*128+c],m=n[(u+1)%128*128+c];let y=(h-f)*a,g=(p-m)*a;const d=1,x=Math.hypot(y,g,d),v=(u*128+c)*4;s[v]=(y/x*.5+.5)*255,s[v+1]=(g/x*.5+.5)*255,s[v+2]=(d/x*.5+.5)*255,s[v+3]=255}r.putImageData(o,0,0);const l=new bh(i);return l.wrapS=Zr,l.wrapT=Zr,l.needsUpdate=!0,l}function lC(t){const e="normal:wall";let n=t.get(e);return n||(n=aC(),t.set(e,n)),n}function Ct(t,e,n,i,r,o,s="plaster"){const l=sC(t,e,n,s).clone();l.needsUpdate=!0;const u=1.2,c=Math.max(1,Math.round(i/u)),h=Math.max(1,Math.round(r/u));l.repeat.set(c,h);const f={map:l,roughness:ZR(s,o)};if(n==="wall"){const p=lC(t).clone();p.needsUpdate=!0,p.repeat.set(c,h),f.normalMap=p,f.normalScale=new ve(.5,.5)}return new fs(f)}function St(t,e,n,i,r,o,s,a,l,u){const c=new kn(new oo(Math.max(n,.03),Math.max(i,.03),Math.max(r,.03)),l);return c.position.set(o,s+i/2,a),c.scale.y=.001,c.castShadow=!0,c.receiveShadow=!0,t.add(c),e.meshes.push({mesh:c,height:i,baseY:s,delay:u}),c}function uC(t,e,n){if(n)return t<=kt+.4?[]:[{start:(t-kt)/2,width:kt,sill:0,openH:ry,isDoor:!0}];const i=Qo(1.3,.3,e-Tu-.25);if(i<=.3)return[];const r=t-2*iC;let o=0;if(r>=2*hn+hd?o=2:r>=hn&&(o=1),o===0)return[];const s=o*hn+(o-1)*hd,a=(t-s)/2,l=[];for(let u=0;u<o;u++)l.push({start:a+u*(hn+hd),width:hn,sill:Tu,openH:i,isDoor:!1});return l}const Wo=1e-6,Co=(t,e)=>Math.abs(t-e)<Wo,Mf=.01;function cC(t){const e=[];for(let n=0;n<t.length;n++){const i=t[n],r=i.floor??0;for(let o=n+1;o<t.length;o++){const s=t[o];if((s.floor??0)===r){if(Co(s.gx,i.gx+i.gw)||Co(i.gx,s.gx+s.gw)){const a=Math.max(i.gy,s.gy),l=Math.min(i.gy+i.gh,s.gy+s.gh);l-a>Mf&&(Co(s.gx,i.gx+i.gw)?e.push({a:{room:i,wall:"right"},b:{room:s,wall:"left"},start:a,end:l}):e.push({a:{room:i,wall:"left"},b:{room:s,wall:"right"},start:a,end:l}))}if(Co(s.gy,i.gy+i.gh)||Co(i.gy,s.gy+s.gh)){const a=Math.max(i.gx,s.gx),l=Math.min(i.gx+i.gw,s.gx+s.gw);l-a>Mf&&(Co(s.gy,i.gy+i.gh)?e.push({a:{room:i,wall:"bottom"},b:{room:s,wall:"top"},start:a,end:l}):e.push({a:{room:i,wall:"top"},b:{room:s,wall:"bottom"},start:a,end:l}))}}}}return e}function sy(t){if(!t.length)return[];const e=t.slice().sort((i,r)=>i.start-r.start),n=[{...e[0]}];for(let i=1;i<e.length;i++){const r=e[i],o=n[n.length-1];r.start<=o.end+Wo?o.end=Math.max(o.end,r.end):n.push({...r})}return n}function ay(t,e,n=.02){const i=[];let r=0;return t.forEach(o=>{o.start>r+n&&i.push({start:r,end:o.start}),r=Math.max(r,o.end)}),e>r+n&&i.push({start:r,end:e}),i}function dC(t){const e=new Map,n=(r,o,s,a)=>{const l=`${r}:${o}`;e.has(l)||e.set(l,[]),e.get(l).push({start:s,end:a})};t.forEach(r=>{const{room:o,wall:s}=r.a,{room:a,wall:l}=r.b,u=s==="left"||s==="right"?o.gy:o.gx,c=l==="left"||l==="right"?a.gy:a.gx;n(o.id,s,r.start-u,r.end-u),n(a.id,l,r.start-c,r.end-c)});const i=new Map;return e.forEach((r,o)=>i.set(o,sy(r))),i}const Ll=.02;function ly(t,e,n){return n!=null?`${t}:edge:${n}`:`${t}:${e}`}function Lg(t){if(t.points&&t.points.length>=3)return t.points.map((o,s)=>{const a=t.points[(s+1)%t.points.length];return{room:t,wall:null,edgeIndex:s,p1:o,p2:a,length:Math.hypot(a.x-o.x,a.y-o.y)}});const{gx:e,gy:n,gw:i,gh:r}=t;return[{room:t,wall:"top",edgeIndex:null,p1:{x:e,y:n},p2:{x:e+i,y:n},length:i},{room:t,wall:"bottom",edgeIndex:null,p1:{x:e,y:n+r},p2:{x:e+i,y:n+r},length:i},{room:t,wall:"left",edgeIndex:null,p1:{x:e,y:n},p2:{x:e,y:n+r},length:r},{room:t,wall:"right",edgeIndex:null,p1:{x:e+i,y:n},p2:{x:e+i,y:n+r},length:r}]}function fC(t,e){const n=t.length,i=e.length;if(!(n>Ll)||!(i>Ll))return null;const r=(t.p2.x-t.p1.x)/n,o=(t.p2.y-t.p1.y)/n,s=d=>Math.abs((d.x-t.p1.x)*o-(d.y-t.p1.y)*r);if(s(e.p1)>Ll||s(e.p2)>Ll)return null;const a=d=>(d.x-t.p1.x)*r+(d.y-t.p1.y)*o,l=a(e.p1),u=a(e.p2),c=Math.max(0,Math.min(l,u)),h=Math.min(n,Math.max(l,u));if(h-c<=Mf)return null;const f=u<l,p=d=>f?l-d:d-l,m=d=>Math.min(i,Math.max(0,d)),y=p(c),g=p(h);return{a:{start:c,end:h},b:{start:m(Math.min(y,g)),end:m(Math.max(y,g))},p1:{x:t.p1.x+r*c,y:t.p1.y+o*c},p2:{x:t.p1.x+r*h,y:t.p1.y+o*h},length:h-c,flipped:f}}function hC(t){const e=i=>!!(i.points&&i.points.length>=3),n=[];for(let i=0;i<t.length;i++){const r=t[i],o=r.floor??0;for(let s=i+1;s<t.length;s++){const a=t[s];(a.floor??0)===o&&(!e(r)&&!e(a)||Lg(r).forEach(l=>{Lg(a).forEach(u=>{const c=fC(l,u);c&&n.push({a:{room:r,wall:l.wall,edgeIndex:l.edgeIndex,start:c.a.start,end:c.a.end,edgeLength:l.length},b:{room:a,wall:u.wall,edgeIndex:u.edgeIndex,start:c.b.start,end:c.b.end,edgeLength:u.length},p1:c.p1,p2:c.p2,length:c.length,flipped:c.flipped})})}))}}return n}function pC(t,e){const n=new Map;return e.forEach(i=>{[i.a,i.b].forEach(r=>{const o=ly(r.room.id,r.wall,r.edgeIndex);n.has(o)||n.set(o,[]),n.get(o).push({start:r.start,end:r.end})})}),n.forEach((i,r)=>{t.set(r,sy([...t.get(r)||[],...i]))}),t}function Dg(t){const e=[];return t.forEach(n=>{e.some(i=>Math.abs(i.start-n.start)<.05)||e.push(n)}),e}function Ta(t,e,n){const i=t.kind==="door",r=i?kt:hn,o=i?0:Tu,s=i?ry:Qo(1.3,.3,n-Tu-.25);return{start:Qo(Number(t.position)-r/2,0,Math.max(0,e-r)),width:r,sill:o,openH:s,isDoor:i}}function mC(t,e,n,i,r){return t==null?uC(n,i,r):t.filter(o=>o.wall===e).map(o=>Ta(o,n,i))}function Ig(t,e,n,i,r,o){const{axis:s,u0:a,fixed:l,wallLength:u,wallHeight:c,openings:h,floorBaseY:f=0}=o,p=d=>s==="x"?{x:a+d,z:l}:{x:l,z:a+d},m=h.slice().sort((d,x)=>d.start-x.start);let y=0;const g=[];m.forEach(d=>{d.start>y+.02&&g.push({start:y,end:d.start}),y=Math.max(y,d.start+d.width)}),y<u-.02&&g.push({start:y,end:u}),g.forEach(d=>{const x=d.end-d.start;if(x<=.02)return;const v=(d.start+d.end)/2,_=p(v),C=s==="x"?x:ft,S=s==="x"?ft:x,A=Ct(n,i,"wall",x,c,.85,r);St(t,e,C,c,S,_.x,f,_.z,A,_i)}),m.forEach(d=>{const x=d.start+d.width/2,v=p(x),_=s==="x"?d.width:ft,C=s==="x"?ft:d.width;if(d.sill>.02){const P=Ct(n,i,"wall",d.width,d.sill,.85,r);St(t,e,_,d.sill,C,v.x,f,v.z,P,_i)}const S=d.sill+d.openH,A=c-S;if(A>.02){const P=Ct(n,i,"wall",d.width,A,.85,r);St(t,e,_,A,C,v.x,f+S,v.z,P,_i)}if(d.isDoor){const P=new fs({color:9132587,roughness:.7}),E=s==="x"?d.width-.06:.05,T=s==="x"?.05:d.width-.06;St(t,e,E,d.openH,T,v.x,f,v.z,P,Au)}else{const P=new fs({color:10475752,transparent:!0,opacity:.35,roughness:.05,metalness:.1,side:fn}),E=s==="x"?d.width-.05:.03,T=s==="x"?.03:d.width-.05,O=St(t,e,E,d.openH-.05,T,v.x,f+d.sill,v.z,P,Au);O.castShadow=!1}})}function gC(t,e,n,i,r,o,s,a,l,u,c,h){if(!c&&!h)return;if(c&&!h&&!i.points){if(i.roof_type==="gable"){vC(t,e,n,i,r,o,s,a,l,u);return}if(i.roof_type==="hip"){_C(t,e,n,i,r,o,s,l,u);return}}const p=`#${new Fe(s).multiplyScalar(.72).getHexString()}`,m=i.gw+hs*2,y=i.gh+hs*2,g=Ct(n,p,"roof",m,y,.95);if(St(t,e,m,vi,y,l,o+r,u,g,Pi),!c)return;const d=i.gw+ft,x=i.gh+ft,v=o+r+vi,_=l-i.gw/2,C=l+i.gw/2,S=u-i.gh/2,A=u+i.gh/2,P=Ct(n,p,"roof",d,Dr,.95),E=Ct(n,p,"roof",x,Dr,.95);St(t,e,d,Dr,ft,l,v,S,P,Pi),St(t,e,d,Dr,ft,l,v,A,P,Pi),St(t,e,ft,Dr,x,_,v,u,E,Pi),St(t,e,ft,Dr,x,C,v,u,E,Pi)}function vC(t,e,n,i,r,o,s,a,l,u){const c=i.gw>=i.gh,h=(c?i.gh:i.gw)+hs*2,f=(c?i.gw:i.gh)+hs*2,p=h/2,m=p*Math.tan(Gs),y=p/Math.cos(Gs),g=o+r,x=`#${new Fe(s).multiplyScalar(.72).getHexString()}`,v=Ct(n,x,"roof",y,f,.95);[-1,1].forEach(P=>{const E=new kr;E.position.set(l,g+m,u),c?E.rotation.x=P*Gs:E.rotation.z=-P*Gs,t.add(E);const T=c?f:y,O=c?y:f,X=c?0:P*y/2,te=c?P*y/2:0;St(E,e,T,vi,O,X,0,te,v,Pi)});const _=c?i.gh:i.gw,C=(c?i.gw:i.gh)/2,S=10,A=Ct(n,s,"wall",_,m,.85,a);[-1,1].forEach(P=>{const E=c?l+P*C:l,T=c?u:u+P*C;for(let O=0;O<S;O++){const X=O/S,te=(O+1)/S,L=m/S,W=m*(X+te)/2,$=_*(1-(X+te)/2);St(t,e,c?ft:$,L,c?$:ft,E,g+W-L/2,T,A,Pi)}})}function Ng(t,e,n,i,r){const o=r/2,s=[t-n,-o,e-i],a=[t+n,-o,e-i],l=[t+n,-o,e+i],u=[t-n,-o,e+i],c=[t-(n-i),r-o,e],h=[t+(n-i),r-o,e],f=[u,l,h,u,h,c,a,s,c,a,c,h,s,u,c,l,a,h],p=new jn;return p.setAttribute("position",new Vn(new Float32Array(f.flat()),3)),p.computeVertexNormals(),p}function _C(t,e,n,i,r,o,s,a,l){const u=i.gw>=i.gh,c=(u?i.gh:i.gw)+hs*2,h=(u?i.gw:i.gh)+hs*2,f=c/2,p=h/2,m=f*Math.tan(Gs),y=u?Ng(a,l,p,f,m):Ng(0,0,p,f,m);u||(y.rotateY(Math.PI/2),y.translate(a,0,l));const d=`#${new Fe(s).multiplyScalar(.72).getHexString()}`,x=Ct(n,d,"roof",h,c,.95);x.side=fn,Tf(t,e,y,x,o+r,m,Pi)}function uy(t,e,n){switch(n){case 90:return{x:-e,z:t};case 180:return{x:-t,z:-e};case 270:return{x:e,z:-t};default:return{x:t,z:e}}}function Ht(t,e,n,i,r,o,s,a){const l=i.rotation||0,{x:u,z:c}=uy(a.cx,a.cz,l),h=l===90||l===270,f=h?a.d:a.w,p=h?a.w:a.d,m=Ct(n,a.color,"wall",f,a.h,.75);St(t,e,f,a.h,p,r+u,s+a.bottomY,o+c,m,rC)}function yC(t,e,n,i,r,o,s){const a=l=>Ht(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:1.6,d:2,h:.35,bottomY:0,color:"#8B5A2B"}),a({cx:0,cz:0,w:1.5,d:1.9,h:.18,bottomY:.35,color:"#EDE7DC"}),a({cx:0,cz:-.96,w:1.6,d:.08,h:.55,bottomY:.35,color:"#8B5A2B"})}function xC(t,e,n,i,r,o,s){const a=l=>Ht(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:1.8,d:.85,h:.4,bottomY:0,color:"#3B4454"}),a({cx:0,cz:-.35,w:1.8,d:.15,h:.35,bottomY:.4,color:"#3B4454"}),a({cx:-.825,cz:0,w:.15,d:.85,h:.55,bottomY:0,color:"#2C3444"}),a({cx:.825,cz:0,w:.15,d:.85,h:.55,bottomY:0,color:"#2C3444"})}function SC(t,e,n,i,r,o,s){const a=u=>Ht(t,e,n,i,r,o,s,u);a({cx:0,cz:0,w:1.4,d:.8,h:.05,bottomY:.7,color:"#6B4A32"}),[[-.65,-.35],[.65,-.35],[-.65,.35],[.65,.35]].forEach(([u,c])=>a({cx:u,cz:c,w:.06,d:.06,h:.7,bottomY:0,color:"#3A2A1E"}))}function EC(t,e,n,i,r,o,s){const a=l=>Ht(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:1.2,d:.6,h:1.85,bottomY:0,color:"#C9A876"}),a({cx:0,cz:0,w:1.2,d:.6,h:.05,bottomY:1.85,color:"#A9895C"})}function MC(t,e,n,i,r,o,s){const a=l=>Ht(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:.9,d:.55,h:.82,bottomY:0,color:"#E8ECF0"}),a({cx:0,cz:-.05,w:.55,d:.35,h:.08,bottomY:.75,color:"#B9C2CC"}),a({cx:0,cz:-.25,w:.9,d:.05,h:.35,bottomY:.82,color:"#E8ECF0"})}function wC(t,e,n,i,r,o,s){const a=l=>Ht(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:.45,d:.4,h:.48,bottomY:0,color:"#C9A876"}),a({cx:0,cz:0,w:.45,d:.4,h:.02,bottomY:.48,color:"#A9895C"})}function TC(t,e,n,i,r,o,s){const a=l=>Ht(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:.75,d:.75,h:.4,bottomY:0,color:"#3B4454"}),a({cx:0,cz:-.3,w:.75,d:.15,h:.35,bottomY:.4,color:"#3B4454"}),a({cx:-.3,cz:0,w:.15,d:.75,h:.5,bottomY:0,color:"#2C3444"}),a({cx:.3,cz:0,w:.15,d:.75,h:.5,bottomY:0,color:"#2C3444"})}function AC(t,e,n,i,r,o,s){const a=l=>Ht(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:1.4,d:.4,h:.45,bottomY:0,color:"#3B4454"}),a({cx:0,cz:-.15,w:1.1,d:.05,h:.65,bottomY:.45,color:"#1A1A1D"})}function RC(t,e,n,i,r,o,s){const a=u=>Ht(t,e,n,i,r,o,s,u);a({cx:0,cz:0,w:1.6,d:.9,h:.05,bottomY:.72,color:"#5A3D28"}),[[-.72,-.4],[.72,-.4],[-.72,.4],[.72,.4]].forEach(([u,c])=>a({cx:u,cz:c,w:.07,d:.07,h:.72,bottomY:0,color:"#3A2A1E"}))}function CC(t,e,n,i,r,o,s){const a=u=>Ht(t,e,n,i,r,o,s,u);a({cx:0,cz:0,w:.42,d:.42,h:.05,bottomY:.45,color:"#4A4A52"}),a({cx:0,cz:-.185,w:.42,d:.05,h:.4,bottomY:.45,color:"#4A4A52"}),[[-.17,-.17],[.17,-.17],[-.17,.17],[.17,.17]].forEach(([u,c])=>a({cx:u,cz:c,w:.04,d:.04,h:.45,bottomY:0,color:"#2C3444"}))}function bC(t,e,n,i,r,o,s){const a=l=>Ht(t,e,n,i,r,o,s,l);a({cx:0,cz:.08,w:.4,d:.5,h:.4,bottomY:0,color:"#F2F2F4"}),a({cx:0,cz:-.28,w:.38,d:.15,h:.35,bottomY:.4,color:"#F2F2F4"})}function PC(t,e,n,i,r,o,s){const a=l=>Ht(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:1.7,d:.75,h:.55,bottomY:0,color:"#F2F2F4"}),a({cx:0,cz:0,w:1.5,d:.55,h:.4,bottomY:.12,color:"#DCE3E8"})}function LC(t,e,n,i,r,o,s){const a=l=>Ht(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:.9,d:.9,h:.05,bottomY:0,color:"#DCE3E8"}),a({cx:-.44,cz:0,w:.03,d:.9,h:1.9,bottomY:.05,color:"#9FD8E8"}),a({cx:0,cz:-.44,w:.9,d:.03,h:1.9,bottomY:.05,color:"#9FD8E8"})}function DC(t,e,n,i,r,o,s){const a=l=>Ht(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:2,d:.6,h:.85,bottomY:0,color:"#DCDCE1"}),a({cx:0,cz:0,w:2,d:.62,h:.04,bottomY:.85,color:"#1A1A1D"})}function IC(t,e,n,i,r,o,s){const a=l=>Ht(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:.6,d:.6,h:.85,bottomY:0,color:"#DCDCE1"}),a({cx:0,cz:0,w:.55,d:.55,h:.03,bottomY:.85,color:"#1A1A1D"})}function NC(t,e,n,i,r,o,s){const a=l=>Ht(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:.7,d:.7,h:1.8,bottomY:0,color:"#E8ECF0"}),a({cx:.3,cz:-.36,w:.03,d:.1,h:.4,bottomY:.9,color:"#8E8E96"})}function UC(t,e,n,i,r,o,s){const a=u=>Ht(t,e,n,i,r,o,s,u);a({cx:0,cz:0,w:1.2,d:.6,h:.04,bottomY:.72,color:"#6B4A32"}),a({cx:.4,cz:0,w:.35,d:.55,h:.72,bottomY:0,color:"#4A4A52"}),[[-.55,-.25],[-.55,.25]].forEach(([u,c])=>a({cx:u,cz:c,w:.05,d:.05,h:.72,bottomY:0,color:"#3A2A1E"}))}function OC(t,e,n,i,r,o,s){const a=l=>Ht(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:.9,d:.3,h:1.8,bottomY:0,color:"#8B5A2B"}),[.5,1,1.5].forEach(l=>a({cx:0,cz:0,w:.85,d:.28,h:.03,bottomY:l,color:"#6B4A32"}))}function FC(t,e,n,i,r,o,s){switch(i.kind){case"bed":return yC(t,e,n,i,r,o,s);case"sofa":return xC(t,e,n,i,r,o,s);case"table":return SC(t,e,n,i,r,o,s);case"wardrobe":return EC(t,e,n,i,r,o,s);case"sink":return MC(t,e,n,i,r,o,s);case"nightstand":return wC(t,e,n,i,r,o,s);case"armchair":return TC(t,e,n,i,r,o,s);case"tv_unit":return AC(t,e,n,i,r,o,s);case"dining_table":return RC(t,e,n,i,r,o,s);case"chair":return CC(t,e,n,i,r,o,s);case"toilet":return bC(t,e,n,i,r,o,s);case"bathtub":return PC(t,e,n,i,r,o,s);case"shower":return LC(t,e,n,i,r,o,s);case"kitchen_counter":return DC(t,e,n,i,r,o,s);case"stove":return IC(t,e,n,i,r,o,s);case"fridge":return NC(t,e,n,i,r,o,s);case"desk":return UC(t,e,n,i,r,o,s);case"bookshelf":return OC(t,e,n,i,r,o,s);default:return}}const Ih=1,Ug=.914,$l=.28,zC=.18,kC=.85;function Nh(t,e=Ih){const n=Math.max(4,Math.round(t/zC));return{w:e,d:n*$l,numSteps:n}}function BC(t,e,n,i,r,o,s,a,l){const u=i.width??Ih,{d:c,numSteps:h}=Nh(r,u),f=r/h,p=i.rotation||0,y=`#${new Fe(l).multiplyScalar(.85).getHexString()}`,g=p===90||p===270;for(let d=0;d<h;d++){const x=-c/2+(d+.5)*$l,v=(d+1)*f,{x:_,z:C}=uy(0,x,p),S=g?$l:u,A=g?u:$l,P=Ct(n,y,"wall",S,v,.8);St(t,e,S,v,A,o+_,a,s+C,P,kC)}}function wf(t,e,n,i,r,o,s,a,l,u,c=[]){const h=s.x-o.x,f=s.y-o.y,p=Math.hypot(h,f);if(p<.02)return;const m=Math.atan2(h,f),y=(o.x+s.x)/2-u.x,g=(o.y+s.y)/2-u.z,d=new kr;d.position.set(y,l,g),d.rotation.y=m,t.add(d);const x=c.slice().sort((S,A)=>S.start-A.start),v=S=>S-p/2;let _=0;const C=[];x.forEach(S=>{S.start>_+.02&&C.push({start:_,end:S.start}),_=Math.max(_,S.start+S.width)}),_<p-.02&&C.push({start:_,end:p}),C.forEach(S=>{const A=S.end-S.start;if(A<=.02)return;const P=Ct(n,i,"wall",A,a,.85,r);St(d,e,ft,a,A,0,0,v((S.start+S.end)/2),P,_i)}),x.forEach(S=>{const A=v(S.start+S.width/2);if(S.sill>.02){const T=Ct(n,i,"wall",S.width,S.sill,.85,r);St(d,e,ft,S.sill,S.width,0,0,A,T,_i)}const P=S.sill+S.openH,E=a-P;if(E>.02){const T=Ct(n,i,"wall",S.width,E,.85,r);St(d,e,ft,E,S.width,0,P,A,T,_i)}if(S.isDoor){const T=new fs({color:9132587,roughness:.7});St(d,e,.05,S.openH,S.width-.06,0,0,A,T,Au)}else{const T=new fs({color:10475752,transparent:!0,opacity:.35,roughness:.05,metalness:.1,side:fn}),O=St(d,e,.03,S.openH-.05,S.width-.05,0,S.sill,A,T,Au);O.castShadow=!1}})}function Og(t,e,n){const i=new J_;t.forEach((o,s)=>{const a=o.x-n.x,l=o.y-n.z;s===0?i.moveTo(a,l):i.lineTo(a,l)}),i.closePath();const r=new Dh(i,{depth:e,bevelEnabled:!1,curveSegments:1});return r.translate(0,0,-e/2),r.rotateX(Math.PI/2),r}function Tf(t,e,n,i,r,o,s){const a=new kn(n,i);return a.position.set(0,r+o/2,0),a.scale.y=.001,a.castShadow=!0,a.receiveShadow=!0,t.add(a),e.meshes.push({mesh:a,height:o,baseY:r,delay:s}),a}function HC(t,e,n,i,r,o,s,a,l,u,c,h=!1){const f=i.points;if(!f||f.length<3)return;const p=Og(f,.06,l),m=Ct(n,i.color,"floor",4,4,.9,i.floor_material);m.side=fn,Tf(t,e,p,m,o,.06,_i);for(let v=0;v<f.length;v++){const _=f[v],C=f[(v+1)%f.length],S=Math.hypot(C.x-_.x,C.y-_.y),A=(i.openings||[]).filter(E=>E.edge_index===v).map(E=>Ta(E,S,r)),P=(c==null?void 0:c.get(ly(i.id,null,v)))||[];ay(P,S).forEach(E=>{const T=X=>({x:_.x+(C.x-_.x)*X/S,y:_.y+(C.y-_.y)*X/S}),O=A.filter(X=>X.start>=E.start-.02&&X.start+X.width<=E.end+.02).map(X=>({...X,start:X.start-E.start}));wf(t,e,n,s,a,T(E.start),T(E.end),r,o,l,O)})}if(h||!i.has_roof&&!u)return;const g=`#${new Fe(s).multiplyScalar(.72).getHexString()}`,d=Og(f,vi,l),x=Ct(n,g,"roof",4,4,.95);if(x.side=fn,Tf(t,e,d,x,o+r,vi,Pi),i.has_roof){const v=o+r+vi;for(let _=0;_<f.length;_++)wf(t,e,n,g,a,f[_],f[(_+1)%f.length],Dr,v,l)}}const GC=[{wall:"top",axis:"x",doorFallback:!1},{wall:"bottom",axis:"x",doorFallback:!0},{wall:"left",axis:"z",doorFallback:!1},{wall:"right",axis:"z",doorFallback:!1}];function cy(t){var e,n,i;for((e=t.geometry)==null||e.dispose(),t.material&&((n=t.material.map)==null||n.dispose(),(i=t.material.normalMap)==null||i.dispose(),t.material.dispose());t.children.length;)cy(t.children.pop())}function VC(t,e){const n=(t.floor??0)+1,i=t.gx,r=t.gx+t.gw,o=t.gy,s=t.gy+t.gh;return e.some(a=>{if(a===t||(a.floor??0)!==n)return!1;const l=a.gx,u=a.gx+a.gw,c=a.gy,h=a.gy+a.gh;return i<u&&r>l&&o<h&&s>c})}function WC(t,e,n,i,r,o,s,a,l="plaster",u={}){const c=!!u.hideRoofs,h=u.floorGap??0,f=u.columns||[],p=u.showFoundation!==!1;for(;t.children.length;)cy(t.children.pop());s.meshes=[];const m=e.filter(_=>!_.points),y=cC(m),g=hC(e),d=pC(dC(y),g),x=Math.max(0,...(n||[]).map(_=>(_.floor??0)+1)),v=Ua(e,i,x,h);if(e.forEach(_=>{const C=_.floor??0,S=v.get(C),A=_.wall_height??i,P=_.wall_color??r,E=_.wall_material??l,T=VC(_,e);if(_.points){HC(t,s,a,_,A,S,P,E,o,T,d,c);return}const O=_.gx+_.gw/2-o.x,X=_.gy+_.gh/2-o.z,te=Ct(a,_.color,"floor",_.gw,_.gh,.9,_.floor_material),L=new kn(new oo(_.gw,.06,_.gh),te);L.position.set(O,S+.03,X),L.receiveShadow=!0,t.add(L);const W=_.gx-o.x,$=_.gx+_.gw-o.x,K=_.gy-o.z,U=_.gy+_.gh-o.z;GC.forEach(({wall:B,axis:z,doorFallback:Q})=>{const ne=z==="x"?_.gw:_.gh,Y=z==="x"?W:K,ie=B==="top"?K:B==="bottom"?U:B==="left"?W:$,de=d.get(`${_.id}:${B}`)||[],ge=ay(de,ne);if(ge.length===0)return;const me=mC(_.openings,B,ne,A,Q);ge.forEach(Me=>{const oe=Me.start<=Wo?ft/2:0,D=Me.end>=ne-Wo?ft/2:0,H=Me.end-Me.start+oe+D,M=Y+Me.start-oe,F=me.filter(N=>N.start>=Me.start-.02&&N.start+N.width<=Me.end+.02).map(N=>({...N,start:N.start-Me.start+oe}));Ig(t,s,a,P,E,{axis:z,u0:M,fixed:ie,wallLength:H,wallHeight:A,floorBaseY:S,openings:F})})}),gC(t,s,a,_,A,S,P,E,O,X,!c&&!!_.has_roof,!c&&T),(_.furniture||[]).forEach(B=>{FC(t,s,a,B,_.gx+Number(B.x)-o.x,_.gy+Number(B.y)-o.z,S)})}),y.forEach(_=>{const{room:C,wall:S}=_.a,{room:A,wall:P}=_.b,E=v.get(C.floor??0),T=C.wall_height??i,O=C.wall_color??r,X=C.wall_material??l,te=C.gx-o.x,L=C.gx+C.gw-o.x,W=C.gy-o.z,$=C.gy+C.gh-o.z,K=S==="left"||S==="right"?"z":"x",U=K==="z"?C.gh:C.gw,B=K==="z"?A.gh:A.gw,z=K==="z"?C.gy:C.gx,Q=K==="z"?A.gy:A.gx,ne=K==="z"?W:te,Y=K==="z"?S==="right"?L:te:S==="bottom"?$:W,ie=_.start-z,de=_.end-z,ge=ie<=Wo?ft/2:0,me=de>=U-Wo?ft/2:0,Me=de-ie+ge+me,oe=ne+ie-ge,D=(M,F,N,ee)=>(M.openings||[]).filter(G=>G.wall===F&&G.kind==="door").filter(G=>{const pe=N+Number(G.position);return pe-kt/2>=_.start-.02&&pe+kt/2<=_.end+.02}).map(G=>{const pe=Ta(G,ee,T);return{...pe,start:N+pe.start-_.start+ge}}),H=Dg([...D(C,S,z,U),...D(A,P,Q,B)]);Ig(t,s,a,O,X,{axis:K,u0:oe,fixed:Y,wallLength:Me,wallHeight:T,floorBaseY:E,openings:H})}),g.forEach(_=>{const C=_.a.room,S=v.get(C.floor??0),A=C.wall_height??i,P=C.wall_color??r,E=C.wall_material??l,T=(X,te)=>(X.room.openings||[]).filter(L=>(X.edgeIndex!=null?L.edge_index===X.edgeIndex:L.wall===X.wall)&&L.kind==="door").map(L=>Ta(L,X.edgeLength,A)).filter(L=>L.start>=X.start-.02&&L.start+L.width<=X.end+.02).map(L=>({...L,start:te&&_.flipped?X.end-(L.start+L.width):L.start-X.start})),O=Dg([...T(_.a,!1),...T(_.b,!0)]);wf(t,s,a,P,E,_.p1,_.p2,A,S,o,O)}),(n||[]).forEach(_=>{const C=_.floor??0,S=v.get(C),A=v.get(C+1)-S;if(!(A>0))return;const P=Number(_.x)-o.x,E=Number(_.y)-o.z;BC(t,s,a,_,A,P,E,S,r)}),f.forEach(_=>{const C=_.floor??0,S=v.get(C);if(S==null)return;const A=_.height??i,P=_.size??ei,E=Number(_.x)-o.x,T=Number(_.y)-o.z,O=Ct(a,"#9a9a9a","wall",P,A,.85,"concrete");if(St(t,s,P,A,P,E,S,T,O,_i),p&&C===0){const X=P+ot*2,te=Ct(a,"#8d8d8d","wall",X,hi,.9,"concrete");St(t,s,X,hi,X,E,S-hi,T,te,_i)}}),p){const _=Zu(e,0),C=v.get(0);if(_&&C!=null){const S=_.maxX-_.minX+ot*2,A=_.maxY-_.minY+ot*2,P=(_.minX+_.maxX)/2-o.x,E=(_.minY+_.maxY)/2-o.z,T=Ct(a,"#8d8d8d","wall",S,hi,.9,"concrete");St(t,s,S,hi,A,P,C-hi,E,T,_i)}}s.progress=0,s.playing=!0}const se=32;function ct(t,e=.5){return Math.round(t/e)*e}function ii(t,e,n){return Math.min(n,Math.max(e,t))}function XC(t,e,n,i,r){return!n||!(n.width>0)||!(n.height>0)?{x:0,y:0}:{x:ii((t-n.left)/n.width*i,0,i),y:ii((e-n.top)/n.height*r,0,r)}}function Aa(t,e=n=>n){return t===0?e("Ground Floor"):e("Floor")+" "+t}const jC=12,$C=.3,YC=.22;function Af(t,e,n,i,r,o){const s=r-n,a=o-i,l=s*s+a*a,u=l===0?0:ii(((t-n)*s+(e-i)*a)/l,0,1),c=n+u*s,h=i+u*a;return{dist:Math.hypot(t-c,e-h),t:u}}function qC(t,e,n,i,r,o,s){let a=null;if(t.forEach(m=>{if(m.points){for(let g=0;g<m.points.length;g++){const d=m.points[g],x=m.points[(g+1)%m.points.length],v=Math.hypot(x.x-d.x,x.y-d.y),{dist:_,t:C}=Af(e,n,d.x,d.y,x.x,x.y),S=C*v;(!a||_<a.dist)&&(a={dist:_,roomId:m.id,edgeIndex:g,length:v,rawPosition:S})}return}[{wall:"top",x1:m.gx,y1:m.gy,x2:m.gx+m.gw,y2:m.gy,length:m.gw},{wall:"bottom",x1:m.gx,y1:m.gy+m.gh,x2:m.gx+m.gw,y2:m.gy+m.gh,length:m.gw},{wall:"left",x1:m.gx,y1:m.gy,x2:m.gx,y2:m.gy+m.gh,length:m.gh},{wall:"right",x1:m.gx+m.gw,y1:m.gy,x2:m.gx+m.gw,y2:m.gy+m.gh,length:m.gh}].forEach(g=>{const{dist:d,t:x}=Af(e,n,g.x1,g.y1,g.x2,g.y2),v=x*g.length;(!a||d<a.dist)&&(a={dist:d,roomId:m.id,wall:g.wall,length:g.length,rawPosition:v})})}),!a||a.dist>$C||a.length<i)return null;const l=i/2,u=ii(a.rawPosition,l,a.length-l),c=a.wall==null;return(t.find(m=>m.id===a.roomId).openings||[]).filter(m=>(c?m.edge_index===a.edgeIndex:m.wall===a.wall)&&m.id!==s).some(m=>{const y=m.kind==="door"?kt:hn;return u-l<m.position+y/2&&u+l>m.position-y/2})?null:c?{roomId:a.roomId,edgeIndex:a.edgeIndex,position:u}:{roomId:a.roomId,wall:a.wall,position:u}}function KC(t,e,n){let i=null;return t.forEach(r=>{(r.openings||[]).forEach(o=>{const s=o.kind==="door"?kt:hn,a=xs(r,o,s),{dist:l}=Af(e,n,a.x1,a.y1,a.x2,a.y2);(!i||l<i.dist)&&(i={dist:l,roomId:r.id,id:o.id,wall:o.wall,edgeIndex:o.edge_index,position:o.position,kind:o.kind})})}),!i||i.dist>YC?null:i}function xs(t,e,n){const i=n/2;if(t.points){const a=e.edgeIndex??e.edge_index,l=t.points[a],u=t.points[(a+1)%t.points.length],c=Math.hypot(u.x-l.x,u.y-l.y)||1,h=(e.position-i)/c,f=(e.position+i)/c;return{x1:l.x+(u.x-l.x)*h,y1:l.y+(u.y-l.y)*h,x2:l.x+(u.x-l.x)*f,y2:l.y+(u.y-l.y)*f}}const{wall:r,position:o}=e;if(r==="top"||r==="bottom"){const a=r==="top"?t.gy:t.gy+t.gh;return{x1:t.gx+o-i,y1:a,x2:t.gx+o+i,y2:a}}const s=r==="left"?t.gx:t.gx+t.gw;return{x1:s,y1:t.gy+o-i,x2:s,y2:t.gy+o+i}}const ir=.35,Zt=.08;function dy(t,e,n){if(e.points)return;const{gx:i,gy:r,gw:o,gh:s}=e;t.save(),t.strokeStyle=n.line,t.fillStyle=n.text,t.lineWidth=1,t.font="10px 'IBM Plex Mono', monospace",t.textAlign="center";const a=(f,p,m,y)=>{t.beginPath(),t.moveTo(f*se,p*se),t.lineTo(m*se,y*se),t.stroke()},l=r-ir;a(i,r,i,l-Zt),a(i+o,r,i+o,l-Zt),a(i,l,i+o,l),t.fillText(o.toFixed(2),(i+o/2)*se,(l-.06)*se);const u=r+s+ir;a(i,r+s,i,u+Zt),a(i+o,r+s,i+o,u+Zt),a(i,u,i+o,u),t.fillText(o.toFixed(2),(i+o/2)*se,(u+.16)*se);const c=i-ir;a(i,r,c-Zt,r),a(i,r+s,c-Zt,r+s),a(c,r,c,r+s),t.save(),t.translate(c*se-6,(r+s/2)*se),t.rotate(-Math.PI/2),t.fillText(s.toFixed(2),0,0),t.restore();const h=i+o+ir;a(i+o,r,h+Zt,r),a(i+o,r+s,h+Zt,r+s),a(h,r,h,r+s),t.save(),t.translate(h*se+6,(r+s/2)*se),t.rotate(-Math.PI/2),t.fillText(s.toFixed(2),0,0),t.restore(),t.restore()}function fy(t){if(t.points&&t.points.length){const e=t.points.length;return{x:t.points.reduce((n,i)=>n+i.x,0)/e,y:t.points.reduce((n,i)=>n+i.y,0)/e}}return{x:t.gx+t.gw/2,y:t.gy+t.gh/2}}function hy(t,e,n,i){if(n.kind!=="door")return;const r=xs(e,n,kt),o=r.x2-r.x1,s=r.y2-r.y1,a=Math.hypot(o,s);if(a<.01)return;const l={x:-s/a,y:o/a},u={x:s/a,y:-o/a},c=fy(e),h=(r.x1+r.x2)/2,f=(r.y1+r.y2)/2,p={x:c.x-h,y:c.y-f},m=l.x*p.x+l.y*p.y>=0?l:u,y=Math.atan2(s,o),g=Math.atan2(m.y,m.x);let d=g-y;for(;d>Math.PI;)d-=Math.PI*2;for(;d<=-Math.PI;)d+=Math.PI*2;const x=d<0,v=r.x1,_=r.y1;t.save(),t.strokeStyle=i,t.lineWidth=1,t.setLineDash([3,3]),t.beginPath(),t.arc(v*se,_*se,kt*se,y,g,x),t.stroke(),t.setLineDash([]),t.beginPath(),t.moveTo(v*se,_*se),t.lineTo((v+kt*Math.cos(g))*se,(_+kt*Math.sin(g))*se),t.stroke(),t.restore()}function ZC(t,e,n,i,r,o,s,a){t.save(),t.strokeStyle=a,t.lineWidth=1;const l=ii(s,2,16),u=o===90||o===270;for(let c=1;c<l;c++){if(t.beginPath(),u){const h=e+i*se*c/l;t.moveTo(h,n),t.lineTo(h,n+r*se)}else{const h=n+r*se*c/l;t.moveTo(e,h),t.lineTo(e+i*se,h)}t.stroke()}t.restore()}function JC(t,e){const n=oy[t];if(!n)return{w:.5,d:.5};const i=e===90||e===270;return{w:i?n.d:n.w,d:i?n.w:n.d}}function QC(t,e,n){let i=!1;for(let r=0,o=t.length-1;r<t.length;o=r++){const s=t[r].x,a=t[r].y,l=t[o].x,u=t[o].y;a>n!=u>n&&e<(l-s)*(n-a)/(u-a)+s&&(i=!i)}return i}const e2=.15;function Ju(t,e,n){const i=Ua(t,n,e+1);return i.get(e+1)-i.get(e)}function Oa(t,e,n){const{w:i,d:r}=Nh(t,n),o=e===90||e===270;return{w:o?r:i,d:o?i:r}}function t2(t,e,n,i,r){let o=null;return t.forEach(s=>{const a=Ju(e,s.floor??0,n),l=s.rotation||0,{w:u,d:c}=Oa(a,l,s.width),h=s.x-u/2,f=s.x+u/2,p=s.y-c/2,m=s.y+c/2,y=Math.max(h-i,0,i-f),g=Math.max(p-r,0,r-m),d=Math.hypot(y,g);(!o||d<o.dist)&&(o={dist:d,id:s.id,floor:s.floor??0,x:s.x,y:s.y,rotation:l,width:s.width})}),!o||o.dist>e2?null:o}function Fg(t,e,n,i,r,o,s){const{w:a,d:l}=Oa(r,o,s);if(t<a||e<l)return null;const u=a/2,c=l/2,h=ii(n,u,t-u),f=ii(i,c,e-c);return{x:h,y:f}}function n2(t,e,n){const i=document.createElement("canvas");i.width=e*se,i.height=n*se;const r=i.getContext("2d");r.fillStyle="#FFFFFF",r.fillRect(0,0,i.width,i.height);for(let o=0;o<=e;o++)r.strokeStyle=o%5===0?"#C7C7CC":"#EDEDF0",r.lineWidth=o%5===0?1.2:1,r.beginPath(),r.moveTo(o*se+.5,0),r.lineTo(o*se+.5,n*se),r.stroke();for(let o=0;o<=n;o++)r.strokeStyle=o%5===0?"#C7C7CC":"#EDEDF0",r.lineWidth=o%5===0?1.2:1,r.beginPath(),r.moveTo(0,o*se+.5),r.lineTo(e*se,o*se+.5),r.stroke();return t.forEach(o=>{const s=o.gx*se,a=o.gy*se,l=o.gw*se,u=o.gh*se;o.points&&o.points.length>=3?(r.beginPath(),o.points.forEach((c,h)=>{h===0?r.moveTo(c.x*se,c.y*se):r.lineTo(c.x*se,c.y*se)}),r.closePath(),r.fillStyle=o.color+"25",r.fill(),r.strokeStyle=o.color,r.lineWidth=2,r.stroke(),r.fillStyle="#1A1A1D",r.font="700 13px Tajawal, sans-serif",r.fillText(o.name,s+8,a+20),r.fillStyle="#68686E",r.font="11px 'IBM Plex Mono', monospace",r.fillText(`${iy(o).toFixed(1)} m²`,s+8,a+36)):(r.fillStyle=o.color+"25",r.fillRect(s,a,l,u),r.strokeStyle=o.color,r.lineWidth=2,r.strokeRect(s,a,l,u),r.fillStyle="#1A1A1D",r.font="700 13px Tajawal, sans-serif",r.fillText(o.name,s+8,a+20),r.fillStyle="#68686E",r.font="11px 'IBM Plex Mono', monospace",r.fillText(`${o.gw.toFixed(1)} × ${o.gh.toFixed(1)} m`,s+8,a+36),dy(r,o,{line:"#B45309",text:"#92400E"})),(o.openings||[]).forEach(c=>{const h=c.kind==="door"?kt:hn,f=xs(o,c,h);r.strokeStyle=c.kind==="door"?"#8B5A2B":"#0EA5E9",r.lineWidth=5,r.beginPath(),r.moveTo(f.x1*se,f.y1*se),r.lineTo(f.x2*se,f.y2*se),r.stroke(),hy(r,o,c,"#8B5A2B")}),(o.furniture||[]).forEach(c=>{var y;const{w:h,d:f}=JC(c.kind,c.rotation||0),p=(o.gx+c.x-h/2)*se,m=(o.gy+c.y-f/2)*se;r.fillStyle="#A9895C25",r.fillRect(p,m,h*se,f*se),r.strokeStyle="#A9895C",r.lineWidth=1.5,r.strokeRect(p,m,h*se,f*se),r.fillStyle="#1A1A1D",r.font="10px Tajawal, sans-serif",r.textAlign="center",r.fillText(((y=oy[c.kind])==null?void 0:y.label)||"",p+h*se/2,m+f*se/2+3),r.textAlign="start"})}),i.toDataURL("image/png")}function i2(t){const e=document.createElement("canvas"),n=e.getContext("2d"),i=40;n.font=`700 ${i}px Tajawal, sans-serif`;const r=n.measureText(t).width,o=22,s=14;e.width=Math.ceil(r+o*2),e.height=i+s*2,n.font=`700 ${i}px Tajawal, sans-serif`,n.fillStyle="rgba(17,20,26,0.72)";const a=14;n.beginPath(),n.moveTo(a,0),n.arcTo(e.width,0,e.width,e.height,a),n.arcTo(e.width,e.height,0,e.height,a),n.arcTo(0,e.height,0,0,a),n.arcTo(0,0,e.width,0,a),n.closePath(),n.fill(),n.fillStyle="#ffffff",n.textAlign="center",n.textBaseline="middle",n.fillText(t,e.width/2,e.height/2+2);const l=new bh(e);l.needsUpdate=!0;const u=new X_({map:l,depthWrite:!1,transparent:!0}),c=new cR(u),h=.014;return c.scale.set(e.width*h,e.height*h,1),c}const pd=.62,md=Math.PI/4,r2=Re.forwardRef(function({rooms:e,stairs:n,columns:i=[],wallHeight:r,wallColor:o,wallMaterial:s,autoRotate:a,dollhouse:l=!1,floorGap:u=0,renderView:c=!1,showFoundation:h=!0,t:f=m=>m},p){const m=Re.useRef(null),y=Re.useRef({}),g=Re.useRef({autoRotate:a}),d=Re.useRef({maxRadius:50}),x=Re.useRef(l),v=Re.useRef(new Map),[_,C]=Re.useState(0);return Re.useEffect(()=>{g.current.autoRotate=a},[a]),Re.useImperativeHandle(p,()=>({captureImage(S="image/jpeg",A=.92){const P=y.current;return!P.renderer||!P.scene||!P.camera?null:(P.renderer.render(P.scene,P.camera),P.renderer.domElement.toDataURL(S,A))}}),[]),Re.useEffect(()=>{const S=m.current,A=new lR;A.background=new Fe(15790322),A.fog=new Ch(15790322,22,60);const P=new On(50,1,.1,200),E=new W_({antialias:!0});E.setPixelRatio(Math.min(window.devicePixelRatio,2)),E.shadowMap.enabled=!0,E.shadowMap.type=c_,S.appendChild(E.domElement),A.add(new XR(12572415,1711915,.95));const T=new YR(16773856,1);T.position.set(10,18,8),T.castShadow=!0,T.shadow.mapSize.set(2048,2048),T.shadow.bias=-.0015,A.add(T);const O=new kn(new $u(300,300),new fs({color:13948120,roughness:1}));O.rotation.x=-Math.PI/2,O.position.y=-.03,O.receiveShadow=!0,A.add(O);const X=new qR(300,150,10592682,13948120);X.position.y=-.02,A.add(X);const te=new kr;A.add(te);const L=Pg(e,r),W={theta:md,phi:l?pd:1,radius:L.radius,target:new k(0,L.targetY,0)};function $(){const{theta:F,phi:N,radius:ee,target:G}=W;P.position.set(G.x+ee*Math.sin(N)*Math.sin(F),G.y+ee*Math.cos(N),G.z+ee*Math.sin(N)*Math.cos(F)),P.lookAt(G)}let K=!1,U=0,B=0;const z=new Map;let Q=null;function ne(){const[F,N]=[...z.values()];return Math.hypot(F.x-N.x,F.y-N.y)}function Y(F){z.set(F.pointerId,{x:F.clientX,y:F.clientY}),z.size===1?(K=!0,U=F.clientX,B=F.clientY):z.size===2&&(K=!1,Q=ne())}function ie(F){if(z.has(F.pointerId))z.set(F.pointerId,{x:F.clientX,y:F.clientY});else if(!K)return;if(z.size>=2){const G=ne();Q&&(W.radius=ii(W.radius*(Q/G),3,d.current.maxRadius),$()),Q=G;return}if(!K)return;const N=F.clientX-U,ee=F.clientY-B;U=F.clientX,B=F.clientY,W.theta-=N*.006,W.phi=ii(W.phi-ee*.006,.15,1.5),$()}function de(F){if(z.delete(F.pointerId),Q=null,z.size===1){const[[,N]]=z;K=!0,U=N.x,B=N.y}else z.size===0&&(K=!1)}function ge(F){F.preventDefault(),W.radius=ii(W.radius*(1+F.deltaY*.001),3,d.current.maxRadius),$()}const me=E.domElement;me.style.cursor="grab",me.style.touchAction="none",me.addEventListener("pointerdown",Y),window.addEventListener("pointermove",ie),window.addEventListener("pointerup",de),window.addEventListener("pointercancel",de),me.addEventListener("wheel",ge,{passive:!1});function Me(){const F=S.clientWidth,N=S.clientHeight;F===0||N===0||(E.setSize(F,N),P.aspect=F/N,P.updateProjectionMatrix())}Me();const oe=new ResizeObserver(Me);oe.observe(S),$();const D={progress:0,playing:!0,meshes:[]};let H;function M(){H=requestAnimationFrame(M),g.current.autoRotate&&!K&&(W.theta+=.0028,$()),D.playing&&(D.progress=Math.min(1,D.progress+.025),D.meshes.forEach(({mesh:F,height:N,baseY:ee,delay:G})=>{const pe=ii((D.progress-G)/(1-G),0,1),fe=1-Math.pow(1-pe,3);F.scale.y=Math.max(fe,.001),F.position.y=ee+N*fe/2}),D.progress>=1&&(D.playing=!1)),E.render(A,P)}return M(),y.current={scene:A,group:te,orbit:W,updateCamera:$,animState:D,dirLight:T,renderer:E,camera:P,center:L,defaultRadius:L.radius,defaultTargetY:L.targetY},d.current.maxRadius=Math.max(50,L.radius*2),()=>{cancelAnimationFrame(H),me.removeEventListener("pointerdown",Y),window.removeEventListener("pointermove",ie),window.removeEventListener("pointerup",de),window.removeEventListener("pointercancel",de),me.removeEventListener("wheel",ge),oe.disconnect(),S.removeChild(E.domElement),E.dispose()}},[]),Re.useEffect(()=>{const S=y.current;if(!S.group)return;const A=c?"brick":s;if(WC(S.group,e,n,r,o,S.center,S.animState,v.current,A,{hideRoofs:l,floorGap:u,columns:i,showFoundation:h}),c){const P=Ua(e,r,Math.max(0,...(n||[]).map(E=>(E.floor??0)+1)),u);e.forEach(E=>{if(!E.name)return;const T=E.wall_height??r,O=P.get(E.floor??0)??0,X=E.gx+E.gw/2-S.center.x,te=E.gy+E.gh/2-S.center.z,L=i2(E.name);L.position.set(X,O+T*.55,te),S.group.add(L)})}if(S.dirLight){const P=S.defaultRadius;S.dirLight.position.set(P*.6,Math.max(14,P*.9),P*.45);const E=S.dirLight.shadow.camera;E.left=-P,E.right=P,E.top=P,E.bottom=-P,E.near=1;const T=Math.max(r,...e.map(O=>O.wall_height??r));E.far=P*3+T*2,E.updateProjectionMatrix()}},[e,n,i,r,o,s,l,u,c,h]),Re.useEffect(()=>{var P;const S=y.current;if(!S.orbit||!S.updateCamera)return;const A=Pg(e,r,u);S.defaultRadius=A.radius,S.defaultTargetY=A.targetY,S.orbit.target.y=A.targetY,S.orbit.radius=A.radius,d.current.maxRadius=Math.max(50,A.radius*2),(P=S.scene)!=null&&P.fog&&(S.scene.fog.far=Math.max(60,A.radius*2.6)),l!==x.current&&(x.current=l,l&&(S.orbit.phi=pd,S.orbit.theta=md)),S.updateCamera()},[l,u]),Re.useEffect(()=>{if(_===0)return;const S=y.current;S.orbit&&(S.orbit.theta=md,S.orbit.phi=l?pd:1,S.orbit.radius=S.defaultRadius,S.orbit.target.y=S.defaultTargetY??S.orbit.target.y,S.updateCamera())},[_]),re.jsxs("div",{style:{position:"relative",width:"100%",height:"100%"},children:[re.jsx("div",{ref:m,style:{width:"100%",height:"100%"}}),re.jsx("button",{type:"button",onClick:()=>C(S=>S+1),style:{position:"absolute",bottom:12,right:12,fontSize:12,fontWeight:600,color:"#e2e8f0",background:"rgba(15,23,42,0.9)",border:"1px solid #334155",borderRadius:8,padding:"6px 12px",cursor:"pointer"},children:f("Reset camera")})]})}),Rf=[{id:"bedroom",label:"Bedroom",minW:2.13,minH:2.13,defaultW:3.5,defaultH:3.5,codeBased:!0,codeRef:"IRC R304.2"},{id:"living_room",label:"Living Room",minW:2.13,minH:2.13,defaultW:4.5,defaultH:4,codeBased:!0,codeRef:"IRC R304.2"},{id:"dining_room",label:"Dining Room",minW:2.13,minH:2.13,defaultW:3.5,defaultH:3.5,codeBased:!0,codeRef:"IRC R304.2"},{id:"office",label:"Office",minW:2.13,minH:2.13,defaultW:3,defaultH:3,codeBased:!0,codeRef:"IRC R304.2"},{id:"kitchen",label:"Kitchen",minW:1.5,minH:2,defaultW:3,defaultH:3,codeBased:!1},{id:"bathroom",label:"Bathroom",minW:1.5,minH:1.5,defaultW:2,defaultH:2,codeBased:!1},{id:"hallway",label:"Hallway",minW:.91,minH:1.2,defaultW:1.2,defaultH:3,codeBased:!0,codeRef:"IRC R311.6"},{id:"closet",label:"Closet",minW:.6,minH:.6,defaultW:1,defaultH:1,codeBased:!1},{id:"garage",label:"Garage",minW:3,minH:5.5,defaultW:3.5,defaultH:6,codeBased:!1},{id:"other",label:"Other",minW:1.5,minH:1.5,defaultW:3,defaultH:3,codeBased:!1}],o2="other";function Uh(t){return Rf.find(e=>e.id===t)||Rf.find(e=>e.id===o2)}const zg=24,kg=1.5,Bg=["#cfd6cf","#d8cfc2","#c9d3df","#dccfd6","#cfd8d3"];function s2({rooms:t,stairs:e,columns:n=[],showFoundation:i=!0,wallHeight:r,gridW:o=20,gridH:s=16,mode:a,activeFloor:l=0,selectedRoomId:u,selectedOpening:c,selectedStairId:h,selectedColumnId:f,onAddRoom:p,onAddPolygonRoom:m,onMoveRoom:y,onResizeRoom:g,onMovePolygonRoom:d,onSelectRoom:x,onAddOpening:v,onSelectOpening:_,onAddStair:C,onMoveStair:S,onSelectStair:A,onAddColumn:P,onMoveColumn:E,onSelectColumn:T}){const O=Re.useRef(null),X=Re.useRef(null),[te,L]=Re.useState(null),[W,$]=Re.useState(null),K=t.filter(oe=>(oe.floor??0)===l),U=e.filter(oe=>(oe.floor??0)===l),B=n.filter(oe=>(oe.floor??0)===l),z=Ju(t,l,r);Re.useEffect(()=>{a!=="polygon"&&L(null)},[a]),Re.useEffect(()=>{function oe(D){D.key==="Escape"&&te&&L(null)}return window.addEventListener("keydown",oe),()=>window.removeEventListener("keydown",oe)},[te]);function Q(oe,D,H,M){D.points?(oe.beginPath(),D.points.forEach((F,N)=>{N===0?oe.moveTo(F.x*se,F.y*se):oe.lineTo(F.x*se,F.y*se)}),oe.closePath(),oe.fillStyle=M,oe.fill(),oe.strokeStyle=H?"#c9a96e":"#4b5563",oe.lineWidth=Math.max(2,ft*se),oe.stroke()):(oe.fillStyle=M,oe.fillRect(D.gx*se,D.gy*se,D.gw*se,D.gh*se),oe.strokeStyle=H?"#c9a96e":"#4b5563",oe.lineWidth=Math.max(2,ft*se),oe.strokeRect(D.gx*se,D.gy*se,D.gw*se,D.gh*se))}function ne(){const oe=O.current;if(!oe)return;const D=oe.getContext("2d");D.clearRect(0,0,oe.width,oe.height),D.strokeStyle="#e5e7eb",D.lineWidth=1;for(let M=0;M<=o;M++)D.beginPath(),D.moveTo(M*se,0),D.lineTo(M*se,s*se),D.stroke();for(let M=0;M<=s;M++)D.beginPath(),D.moveTo(0,M*se),D.lineTo(o*se,M*se),D.stroke();if(i&&l===0){const M=Zu(t,0);M&&(D.save(),D.strokeStyle="#9ca3af",D.lineWidth=1.5,D.setLineDash([6,4]),D.strokeRect((M.minX-ot)*se,(M.minY-ot)*se,(M.maxX-M.minX+ot*2)*se,(M.maxY-M.minY+ot*2)*se),D.restore())}K.forEach((M,F)=>{const N=M.id===u;Q(D,M,N,M.color||Bg[F%Bg.length]);const ee=M.points?M.points.reduce((pe,fe)=>pe+fe.x,0)/M.points.length:M.gx+M.gw/2,G=M.points?M.points.reduce((pe,fe)=>pe+fe.y,0)/M.points.length:M.gy+M.gh/2;if(D.fillStyle="#1b1e22",D.font="13px sans-serif",D.textAlign="center",D.fillText(M.name,ee*se,G*se),dy(D,M,{line:"#9ca3af",text:"#6b7280"}),(M.openings||[]).forEach(pe=>{const fe=pe.kind==="door"?kt:hn,R=xs(M,pe,fe),w=c&&c.roomId===M.id&&c.openingId===pe.id;D.save(),D.strokeStyle=w?"#c9a96e":pe.kind==="door"?"#8b5e34":"#3b82f6",D.lineWidth=Math.max(3,ft*se+2),D.beginPath(),D.moveTo(R.x1*se,R.y1*se),D.lineTo(R.x2*se,R.y2*se),D.stroke(),D.restore(),pe.kind==="door"&&hy(D,M,pe,w?"#c9a96e":"#8b5e34")}),N&&!M.points){D.fillStyle="#c9a96e";const pe=(M.gx+M.gw)*se,fe=(M.gy+M.gh)*se;D.fillRect(pe-6,fe-6,12,12)}}),U.forEach(M=>{const F=M.rotation||0,{w:N,d:ee}=Oa(z,F,M.width),G=M.id===h,pe=(M.x-N/2)*se,fe=(M.y-ee/2)*se;D.strokeStyle=G?"#c9a96e":"#6b5e3a",D.lineWidth=2,D.strokeRect(pe,fe,N*se,ee*se),ZC(D,pe,fe,N,ee,F,Nh(z).numSteps,G?"#c9a96e":"#6b5e3a")}),i&&l===0&&B.forEach(M=>{const N=((M.size??ei)+ot*2)/2;D.save(),D.strokeStyle="#9ca3af",D.lineWidth=1.5,D.setLineDash([6,4]),D.strokeRect((M.x-N)*se,(M.y-N)*se,N*2*se,N*2*se),D.restore()}),B.forEach(M=>{const F=M.id===f,N=ei/2;D.fillStyle=F?"#c9a96e":"#6b7280",D.fillRect((M.x-N)*se,(M.y-N)*se,ei*se,ei*se),D.strokeStyle="#374151",D.lineWidth=1,D.strokeRect((M.x-N)*se,(M.y-N)*se,ei*se,ei*se)}),te&&te.length&&(D.strokeStyle="#c9a96e",D.lineWidth=2,D.beginPath(),te.forEach((M,F)=>{F===0?D.moveTo(M.x*se,M.y*se):D.lineTo(M.x*se,M.y*se)}),W&&D.lineTo(W.x*se,W.y*se),D.stroke(),D.fillStyle="#c9a96e",te.forEach(M=>{D.beginPath(),D.arc(M.x*se,M.y*se,4,0,Math.PI*2),D.fill()}));const H=X.current;if(H&&H.kind==="new-room"){const M=Math.min(H.startX,H.curX),F=Math.min(H.startY,H.curY),N=Math.abs(H.curX-H.startX),ee=Math.abs(H.curY-H.startY);D.strokeStyle="#c9a96e",D.setLineDash([6,4]),D.lineWidth=2,D.strokeRect(M*se,F*se,N*se,ee*se),D.setLineDash([])}}Re.useEffect(ne);function Y(oe){const D=O.current.getBoundingClientRect();return XC(oe.clientX,oe.clientY,D,o,s)}function ie(){const oe=O.current&&O.current.getBoundingClientRect();return!oe||!oe.width?zg/se:zg/(oe.width/o)}function de(oe,D){return K.find(H=>H.points?QC(H.points,oe,D):oe>=H.gx&&oe<=H.gx+H.gw&&D>=H.gy&&D<=H.gy+H.gh)}function ge(oe){const{x:D,y:H}=Y(oe);if(a==="room"){X.current={kind:"new-room",startX:ct(D),startY:ct(H),curX:D,curY:H},ne();return}if(a==="polygon"){const w={x:ct(D),y:ct(H)};if(te&&te.length>=3){const V=te[0];if(Math.hypot(w.x-V.x,w.y-V.y)<=ie()){m(te),L(null);return}}L(V=>V?[...V,w]:[w]);return}if(a==="door"||a==="window"){const V=qC(K,D,H,a==="door"?kt:hn);V&&v(V.roomId,a,V.wall,V.edgeIndex,V.position);return}if(a==="stairs"){const w=Fg(o,s,ct(D),ct(H),z,0);w&&C({floor:l,x:w.x,y:w.y,rotation:0});return}if(a==="column"){P({floor:l,x:ct(D),y:ct(H)});return}const M=KC(K,D,H);if(M){_({roomId:M.roomId,openingId:M.id}),A(null),T(null);return}_(null);const F=t2(U,t,r,D,H);if(F){A(F.id),T(null),x(null),X.current={kind:"move-stair",stairId:F.id,offsetX:D-F.x,offsetY:H-F.y,rotation:F.rotation,width:F.width};return}A(null);const N=ie(),ee=B.find(w=>Math.hypot(D-w.x,H-w.y)<=N);if(ee){T(ee.id),x(null),X.current={kind:"move-column",columnId:ee.id,offsetX:D-ee.x,offsetY:H-ee.y};return}T(null);const G=de(D,H);if(!G){x(null);return}if(x(G.id),G.points){X.current={kind:"move-polygon",roomId:G.id,startPoints:G.points,offsetX:D,offsetY:H};return}const pe=G.gx+G.gw,fe=G.gy+G.gh,R=Math.abs(D-pe)<.25&&Math.abs(H-fe)<.25;X.current=R?{kind:"resize",roomId:G.id,startGx:G.gx,startGy:G.gy}:{kind:"move",roomId:G.id,offsetX:D-G.gx,offsetY:H-G.gy}}function me(oe){if(a==="polygon"&&te){const{x:F,y:N}=Y(oe);$({x:ct(F),y:ct(N)});return}const D=X.current;if(!D)return;const{x:H,y:M}=Y(oe);if(D.kind==="new-room"){D.curX=H,D.curY=M,ne();return}if(D.kind==="move"){const F=t.find(G=>G.id===D.roomId);if(!F)return;const N=ct(Math.max(0,Math.min(o-F.gw,H-D.offsetX))),ee=ct(Math.max(0,Math.min(s-F.gh,M-D.offsetY)));y(D.roomId,N,ee);return}if(D.kind==="move-polygon"){const F=ct(H-D.offsetX),N=ct(M-D.offsetY);if(F===0&&N===0)return;const ee=D.startPoints.map(G=>({x:G.x+F,y:G.y+N}));d(D.roomId,ee);return}if(D.kind==="resize"){const F=t.find(pe=>pe.id===D.roomId),N=Uh(F&&F.room_type),ee=ct(Math.max(N.minW,H-D.startGx)),G=ct(Math.max(N.minH,M-D.startGy));g(D.roomId,ee,G);return}if(D.kind==="move-stair"){const F=Fg(o,s,ct(H-D.offsetX),ct(M-D.offsetY),z,D.rotation,D.width);F&&S(D.stairId,F.x,F.y,D.rotation);return}if(D.kind==="move-column"){const F=ct(Math.max(0,Math.min(o,H-D.offsetX))),N=ct(Math.max(0,Math.min(s,M-D.offsetY)));E(D.columnId,F,N)}}function Me(){const oe=X.current;if(oe&&oe.kind==="new-room"){const D=ct(Math.min(oe.startX,oe.curX)),H=ct(Math.min(oe.startY,oe.curY)),M=Math.max(kg,ct(Math.abs(oe.curX-oe.startX))),F=Math.max(kg,ct(Math.abs(oe.curY-oe.startY)));p({gx:D,gy:H,gw:M,gh:F,floor:l})}X.current=null,ne()}return re.jsx("canvas",{ref:O,width:o*se,height:s*se,style:{background:"#fff",touchAction:"none",cursor:a==="select"?"default":"crosshair",maxWidth:"100%",height:"auto",display:"block"},onPointerDown:ge,onPointerMove:me,onPointerUp:Me,onPointerLeave:Me})}function gd({entityId:t,value:e,min:n,step:i=.1,onCommit:r,style:o}){const[s,a]=Re.useState(()=>String(e)),l=Re.useRef(e),u=Re.useRef(t);Re.useEffect(()=>{const f=t!==u.current,p=e!==l.current;(f||p)&&(a(String(e)),l.current=e,u.current=t)},[t,e]);function c(f){const p=f.target.value;a(p);const m=parseFloat(p);if(!Number.isFinite(m))return;const y=Math.max(m,n);l.current=y,y!==e&&r(y)}function h(){const f=parseFloat(s),p=Number.isFinite(f)?Math.max(f,n):e;a(String(p)),l.current=p,p!==e&&r(p)}return re.jsx("input",{type:"number",step:i,min:n,value:s,onChange:c,onBlur:h,style:o})}const a2=[{id:"select",label:"Select"},{id:"room",label:"Add Room"},{id:"polygon",label:"Add Polygon Room"},{id:"door",label:"Add Door"},{id:"window",label:"Add Window"},{id:"stairs",label:"Add Stairs"},{id:"column",label:"Add Column"}],Rr=t=>({padding:"8px 14px",borderRadius:8,border:t?"2px solid #c9a96e":"1px solid #d1d5db",background:t?"#fdf6ea":"#fff",fontWeight:600,fontSize:13,cursor:"pointer"});function l2({t,mode:e,onModeChange:n,selectedRoom:i,onRenameRoom:r,onChangeRoomType:o,onResizeRoomInputs:s,onDeleteRoom:a,selectedOpening:l,onDeleteOpening:u,floorCount:c=1,activeFloor:h=0,onSetActiveFloor:f,onAddFloor:p,selectedStair:m,onResizeStairWidth:y,onDeleteStair:g,selectedColumn:d,onDeleteColumn:x}){return re.jsxs("div",{style:{display:"flex",flexDirection:"column",borderBottom:"1px solid #e5e7eb"},children:[re.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:6,alignItems:"center",padding:"8px 14px",borderBottom:"1px solid #f3f4f6"},children:[Array.from({length:c},(v,_)=>_).map(v=>re.jsx("button",{type:"button",style:Rr(v===h),onClick:()=>f&&f(v),title:Aa(v,t),children:Aa(v,t)},v)),c<jC&&re.jsxs("button",{type:"button",style:Rr(!1),onClick:()=>p&&p(),children:["+ ",t("Add Floor")]})]}),re.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:10,alignItems:"center",padding:"10px 14px"},children:[a2.map(v=>re.jsx("button",{type:"button",style:Rr(e===v.id),onClick:()=>n(v.id),children:t(v.label)},v.id)),i&&(()=>{const v=Uh(i.room_type);return re.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8,alignItems:"center",marginInlineStart:12},children:[re.jsx("select",{value:v.id,onChange:_=>o(i.id,_.target.value),style:{padding:"6px 8px",borderRadius:6,border:"1px solid #d1d5db",fontSize:13},children:Rf.map(_=>re.jsx("option",{value:_.id,children:t(_.label)},_.id))}),re.jsx("input",{value:i.name,onChange:_=>r(i.id,_.target.value),style:{padding:"6px 10px",borderRadius:6,border:"1px solid #d1d5db",fontSize:13,width:140}}),!i.points&&re.jsxs(re.Fragment,{children:[re.jsxs("label",{style:{fontSize:12,color:"#6b7280"},children:[t("W"),re.jsx(gd,{entityId:i.id,value:i.gw,min:v.minW,onCommit:_=>s(i.id,_,i.gh),style:{width:60,marginInlineStart:4,padding:"4px 6px",borderRadius:6,border:"1px solid #d1d5db"}})]}),re.jsxs("label",{style:{fontSize:12,color:"#6b7280"},children:[t("H"),re.jsx(gd,{entityId:i.id,value:i.gh,min:v.minH,onCommit:_=>s(i.id,i.gw,_),style:{width:60,marginInlineStart:4,padding:"4px 6px",borderRadius:6,border:"1px solid #d1d5db"}})]}),re.jsxs("span",{style:{fontSize:11,color:"#9ca3af"},children:[t("Min")," ",v.minW,"×",v.minH," m",v.codeBased?" ("+v.codeRef+")":""]})]}),re.jsx("button",{type:"button",style:Rr(!1),onClick:()=>a(i.id),children:t("Delete Room")})]})})(),l&&re.jsx("button",{type:"button",style:Rr(!1),onClick:()=>u(l.roomId,l.openingId),children:t("Delete Opening")}),m&&re.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",marginInlineStart:12},children:[re.jsxs("label",{style:{fontSize:12,color:"#6b7280"},children:[t("Width"),re.jsx(gd,{entityId:m.id,value:m.width??Ih,min:Ug,step:.05,onCommit:v=>y(m.id,v),style:{width:60,marginInlineStart:4,padding:"4px 6px",borderRadius:6,border:"1px solid #d1d5db"}})]}),re.jsxs("span",{style:{fontSize:11,color:"#9ca3af"},children:[t("Min")," ",Ug," m (IRC R311.7.1)"]}),re.jsx("button",{type:"button",style:Rr(!1),onClick:()=>g(m.id),children:t("Delete Stairs")})]}),d&&re.jsx("button",{type:"button",style:Rr(!1),onClick:()=>x(d.id),children:t("Delete Column")})]})]})}const u2=3e3,c2=2*60*1e3,d2=`Transform this 3D render of an architectural floor plan into a professional, photorealistic architectural visualization of the exact same building.

CRITICAL — do not change anything structural: keep the exact same room layout, wall positions, door and window placement, staircases, columns, number of floors, and camera angle. Do not add, remove, move, or resize any structural element.

Only improve: make every material look real and tactile (genuine paint, wood, stone, brick, metal and glass), add realistic, professional architectural-visualization lighting with soft natural shadows, and photorealistic rendering quality, like a real estate marketing render.`,f2="This photo already shows a photorealistic architectural visualization. Your ONLY task is to further enhance photorealism, material detail, and lighting quality. Do NOT change the building layout, camera angle, or structural elements in any way — this is a quality-enhancement pass only.";function es(t,e){return fetch(t,e).then(n=>n.json().then(i=>({ok:n.ok,status:n.status,data:i})))}function h2(t){return t?Array.isArray(t.images)&&t.images.length?t.images:t.image&&t.image.url?[t.image]:t.output&&Array.isArray(t.output.images)&&t.output.images.length?t.output.images:t.response&&Array.isArray(t.response.images)&&t.response.images.length?t.response.images:t.data&&Array.isArray(t.data.images)&&t.data.images.length?t.data.images:null:null}function py(t,e,n){return new Promise((i,r)=>{function o(){if(Date.now()-n>=c2){r(new Error("timeout"));return}es("/api/status?request_id="+encodeURIComponent(t)+"&model="+encodeURIComponent(e)).then(s=>{if(!s.ok){r(new Error("status_error"));return}const a=(s.data.status||"").toString().toUpperCase();a==="COMPLETED"?es("/api/status?request_id="+encodeURIComponent(t)+"&model="+encodeURIComponent(e)+"&mode=result&tool=engineers").then(l=>{if(!l.ok){r(new Error("result_error"));return}const u=h2(l.data);i(u&&u.length?u[0]:null)}).catch(()=>r(new Error("connection_error"))):a==="FAILED"||a==="ERROR"?r(new Error("failed")):setTimeout(o,u2)}).catch(()=>r(new Error("connection_error")))}o()})}function p2(t,e){return e?es("/api/generate",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({prompt:f2,image_url:t.url,refine_token:e})}).then(n=>{if(!n.ok||!n.data||!Array.isArray(n.data.requests)||!n.data.requests.length)return t;const i=n.data.requests[0];return py(i.request_id,i.model,Date.now()).then(r=>r||t).catch(()=>t)}).catch(()=>t):Promise.resolve(t)}const Dl={position:"fixed",inset:0,background:"rgba(0,0,0,0.9)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",padding:20,overflowY:"auto"},Il={position:"relative",background:"#fff",borderRadius:20,padding:"28px 22px",maxWidth:420,width:"100%",textAlign:"center",boxShadow:"0 30px 70px -25px rgba(0,0,0,0.5)"};function m2({captureImage:t,onClose:e,t:n}){const[i,r]=Re.useState("loading"),[o,s]=Re.useState(null),[a,l]=Re.useState(""),[u,c]=Re.useState(null);Re.useEffect(()=>{let p=!1;async function m(){const y=t&&t();if(!y){p||(r("error"),l(n("Something went wrong, please try again")));return}try{const g=await es("/api/upload",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({image_data:y,mime_type:"image/jpeg"})});if(p)return;if(!g.ok||!g.data||!g.data.url){r("error"),l(n("Image upload failed. Please try again."));return}const d=await es("/api/generate",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({prompt:d2,image_url:g.data.url,num_images:1,guidance_scale:6.5,strength:.45})});if(p)return;if(d.status===401){window.location.href="/lamsa-auth.html?return=engineers/index.html";return}if(d.status===402){r("no_credits");return}if(!d.ok||!d.data||!Array.isArray(d.data.requests)||!d.data.requests.length){r("error"),l(n("Error generating image. Please try again."));return}const x=d.data.requests[0],v=d.data.refineToken,_=await py(x.request_id,x.model,Date.now());if(p)return;if(!_){r("error"),l(n("Error generating image. Please try again."));return}const C=await p2(_,v);if(p)return;s(C.url),r("result")}catch{if(p)return;r("error"),l(n("Connection error. Please try again."))}}return m(),()=>{p=!0}},[]);function h(){o&&fetch("/api/download-image?url="+encodeURIComponent(o)+"&filename="+encodeURIComponent("lamsa-engineers-render.jpg")).then(p=>p.blob()).then(p=>{const m=URL.createObjectURL(p),y=document.createElement("a");y.href=m,y.download="lamsa-engineers-render.jpg",y.click(),setTimeout(()=>URL.revokeObjectURL(m),5e3)}).catch(()=>window.open(o,"_blank"))}function f(p){c(p),es("/api/create-checkout-session",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({plan:p,return_page:"engineers/index.html"})}).then(m=>{if(m.status===401){window.location.href="/lamsa-auth.html?return=engineers/index.html";return}if(!m.ok||!m.data||!m.data.url){c(null);return}window.location.href=m.data.url}).catch(()=>c(null))}return i==="loading"?re.jsx("div",{style:Dl,children:re.jsxs("div",{style:Il,children:[re.jsx("div",{style:{width:48,height:48,margin:"0 auto 18px",border:"4px solid #eef0f2",borderTopColor:"#c9a96e",borderRadius:"50%",animation:"lamsa-pr-spin 0.9s linear infinite"}}),re.jsx("style",{children:"@keyframes lamsa-pr-spin { to { transform: rotate(360deg); } }"}),re.jsx("div",{style:{fontSize:16,fontWeight:900,color:"#1b1e22",marginBottom:6},children:n("Turning your design into a photoreal render...")}),re.jsx("div",{style:{fontSize:12.5,color:"#767d86"},children:n("Takes 20-40 seconds")})]})}):i==="error"?re.jsx("div",{style:Dl,children:re.jsxs("div",{style:Il,children:[re.jsx("div",{style:{color:"#e05555",fontSize:14,fontWeight:700,marginBottom:18},children:a}),re.jsx("button",{type:"button",onClick:e,style:{width:"100%",background:"transparent",border:"1px solid #dfe2e6",color:"#767d86",padding:10,borderRadius:10,fontSize:13,cursor:"pointer"},children:n("Close")})]})}):i==="no_credits"?re.jsx("div",{style:Dl,children:re.jsxs("div",{style:{...Il,maxWidth:440},children:[re.jsx("div",{style:{fontSize:17,fontWeight:900,color:"#1b1e22",marginBottom:8},children:n("You're out of credits")}),re.jsx("div",{style:{fontSize:13,color:"#6b7280",marginBottom:20},children:n("Subscribe to generate photoreal renders of your floor plans.")}),re.jsxs("div",{style:{display:"flex",gap:10,marginBottom:14},children:[re.jsxs("button",{type:"button",disabled:!!u,onClick:()=>f("weekly"),style:{flex:1,border:"1px solid #dfe2e6",borderRadius:14,padding:"14px 8px",background:"#fff",cursor:"pointer",opacity:u?.6:1},children:[re.jsx("div",{style:{fontSize:13,fontWeight:900,color:"#1b1e22"},children:n("Weekly")}),re.jsxs("div",{style:{fontSize:11,color:"#767d86",marginBottom:6},children:["10 ",n("credits")]}),re.jsx("div",{style:{fontSize:15,fontWeight:900,color:"#1b1e22"},children:"€5.99"})]}),re.jsxs("button",{type:"button",disabled:!!u,onClick:()=>f("monthly"),style:{flex:1,border:"2px solid #c9a96e",borderRadius:14,padding:"14px 8px",background:"#fdf6ea",cursor:"pointer",opacity:u?.6:1},children:[re.jsx("div",{style:{fontSize:13,fontWeight:900,color:"#1b1e22"},children:n("Monthly")}),re.jsxs("div",{style:{fontSize:11,color:"#767d86",marginBottom:6},children:["40 ",n("credits")]}),re.jsx("div",{style:{fontSize:15,fontWeight:900,color:"#1b1e22"},children:"€14.99"})]})]}),re.jsx("button",{type:"button",onClick:e,style:{width:"100%",background:"transparent",border:"none",color:"#767d86",padding:8,fontSize:13,cursor:"pointer"},children:n("Close")})]})}):re.jsx("div",{style:Dl,children:re.jsxs("div",{style:{...Il,maxWidth:460,textAlign:"start"},children:[re.jsx("img",{src:o,alt:"",style:{width:"100%",borderRadius:12,display:"block",marginBottom:14}}),re.jsxs("div",{style:{display:"flex",gap:10},children:[re.jsx("button",{type:"button",onClick:h,style:{flex:1,background:"#c9a96e",color:"#1b1e22",border:"none",padding:14,borderRadius:10,fontWeight:900,fontSize:14,cursor:"pointer"},children:n("Download")}),re.jsx("button",{type:"button",onClick:e,style:{flex:1,background:"transparent",border:"1px solid #dfe2e6",color:"#767d86",padding:14,borderRadius:10,fontSize:14,cursor:"pointer"},children:n("Close")})]})]})})}let Hg=0;function Ss(t){return Hg+=1,t+"_"+Date.now().toString(36)+"_"+Hg}const g2=2.7,v2="#e8e2d8",_2="plaster";function my(t){return{project:{id:null,name:t||"Untitled Project",wall_height:g2,wall_color:v2,wall_material:_2},rooms:[],stairs:[],columns:[]}}function y2({name:t,gx:e,gy:n,gw:i,gh:r,color:o,floor:s=0,room_type:a="other"}){return{id:Ss("room"),name:t||"Room",room_type:a,gx:e,gy:n,gw:i,gh:r,color:o||"#cfd6cf",floor:s,has_roof:!0,roof_type:"flat",openings:[],furniture:[]}}function x2({name:t,points:e,color:n,floor:i=0,room_type:r="other"}){const o=e.map(h=>h.x),s=e.map(h=>h.y),a=Math.min(...o),l=Math.min(...s),u=Math.max(...o)-a,c=Math.max(...s)-l;return{id:Ss("room"),name:t||"Room",room_type:r,points:e,gx:a,gy:l,gw:u,gh:c,color:n||"#cfd6cf",floor:i,has_roof:!0,roof_type:"flat",openings:[],furniture:[]}}function S2({floor:t=0,x:e,y:n,rotation:i=0}){return{id:Ss("stair"),floor:t,x:e,y:n,rotation:i}}function E2({floor:t=0,x:e,y:n}){return{id:Ss("column"),floor:t,x:e,y:n}}function M2(t,e,n,i){const r={id:Ss(t),kind:t,position:i};return n!=null?r.edge_index=n:r.wall=e,r}function w2(t,e){switch(e.type){case"SET_PROJECT":return e.project;case"SET_META":return{...t,project:{...t.project,...e.patch}};case"ADD_ROOM":return{...t,rooms:[...t.rooms,e.room]};case"UPDATE_ROOM":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,...e.patch}:n)};case"REMOVE_ROOM":return{...t,rooms:t.rooms.filter(n=>n.id!==e.roomId)};case"ADD_OPENING":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,openings:[...n.openings,M2(e.kind,e.wall,e.edgeIndex,e.position)]}:n)};case"MOVE_OPENING":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,openings:n.openings.map(i=>i.id===e.openingId?{...i,wall:e.wall,position:e.position}:i)}:n)};case"REMOVE_OPENING":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,openings:n.openings.filter(i=>i.id!==e.openingId)}:n)};case"ADD_FURNITURE":{const n={id:Ss("furn"),kind:e.kind,x:e.x,y:e.y,rotation:0};return{...t,rooms:t.rooms.map(i=>i.id===e.roomId?{...i,furniture:[...i.furniture,n]}:i)}}case"MOVE_FURNITURE":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,furniture:n.furniture.map(i=>i.id===e.furnitureId?{...i,x:e.x,y:e.y,rotation:e.rotation??i.rotation}:i)}:n)};case"REMOVE_FURNITURE":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,furniture:n.furniture.filter(i=>i.id!==e.furnitureId)}:n)};case"ADD_STAIR":return{...t,stairs:[...t.stairs,e.stair]};case"MOVE_STAIR":return{...t,stairs:t.stairs.map(n=>n.id===e.stairId?{...n,x:e.x,y:e.y,rotation:e.rotation??n.rotation}:n)};case"UPDATE_STAIR":return{...t,stairs:t.stairs.map(n=>n.id===e.stairId?{...n,...e.patch}:n)};case"REMOVE_STAIR":return{...t,stairs:t.stairs.filter(n=>n.id!==e.stairId)};case"ADD_COLUMN":return{...t,columns:[...t.columns||[],e.column]};case"MOVE_COLUMN":return{...t,columns:(t.columns||[]).map(n=>n.id===e.columnId?{...n,x:e.x,y:e.y}:n)};case"REMOVE_COLUMN":return{...t,columns:(t.columns||[]).filter(n=>n.id!==e.columnId)};default:return t}}function T2(t){const[e,n]=Re.useReducer(w2,t||my()),i=Re.useMemo(()=>({setProject:s=>n({type:"SET_PROJECT",project:s}),setMeta:s=>n({type:"SET_META",patch:s}),addRoom:s=>n({type:"ADD_ROOM",room:s}),updateRoom:(s,a)=>n({type:"UPDATE_ROOM",roomId:s,patch:a}),removeRoom:s=>n({type:"REMOVE_ROOM",roomId:s}),addOpening:(s,a,l,u,c)=>n({type:"ADD_OPENING",roomId:s,kind:a,wall:l,edgeIndex:u,position:c}),moveOpening:(s,a,l,u)=>n({type:"MOVE_OPENING",roomId:s,openingId:a,wall:l,position:u}),removeOpening:(s,a)=>n({type:"REMOVE_OPENING",roomId:s,openingId:a}),addFurniture:(s,a,l,u)=>n({type:"ADD_FURNITURE",roomId:s,kind:a,x:l,y:u}),moveFurniture:(s,a,l,u,c)=>n({type:"MOVE_FURNITURE",roomId:s,furnitureId:a,x:l,y:u,rotation:c}),removeFurniture:(s,a)=>n({type:"REMOVE_FURNITURE",roomId:s,furnitureId:a}),addStair:s=>n({type:"ADD_STAIR",stair:s}),moveStair:(s,a,l,u)=>n({type:"MOVE_STAIR",stairId:s,x:a,y:l,rotation:u}),updateStair:(s,a)=>n({type:"UPDATE_STAIR",stairId:s,patch:a}),removeStair:s=>n({type:"REMOVE_STAIR",stairId:s}),addColumn:s=>n({type:"ADD_COLUMN",column:s}),moveColumn:(s,a,l)=>n({type:"MOVE_COLUMN",columnId:s,x:a,y:l}),removeColumn:s=>n({type:"REMOVE_COLUMN",columnId:s})}),[]),r=Re.useCallback(s=>{const a=y2(s);return i.addRoom(a),a},[i]),o=Re.useCallback(s=>{const a=x2(s);return i.addRoom(a),a},[i]);return{project:e.project,rooms:e.rooms,stairs:e.stairs,columns:e.columns||[],actions:{...i,addRectRoom:r,addPolygonRoom:o}}}function A2(t,e,n){return n2(t,e,n)}const Gg={WALLS:7,DOORS:1,WINDOWS:5,DIMENSIONS:3,TEXT:7,STAIRS:8,COLUMNS:2,FOUNDATION:4};function Vg(t){let e=t*180/Math.PI;return e=e%360,e<0&&(e+=360),e}function Et(t,e){return{x:t.x+e,y:-t.y}}function to(t,e,n,i){t.push(`0
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
0.0`)}function Ra(t,e,n,i){const r=["0","LWPOLYLINE","8",e,"90",String(n.length),"70","1"];n.forEach(o=>{r.push("10",String(o.x),"20",String(o.y))}),t.push(r.join(`
`))}function R2(t,e,n,i,r,o,s){t.push(`0
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
${s}`)}function Br(t,e,n,i,r,o=0){const s=String(r).replace(/[\r\n]+/g," ");t.push(`0
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
${o}`)}function C2(t,e){const n=t.slice().sort((o,s)=>o.position-s.position);let i=0;const r=[];return n.forEach(o=>{const s=o.position-o.width/2,a=o.position+o.width/2;s>i+.02&&r.push([i,s]),i=Math.max(i,a)}),i<e-.02&&r.push([i,e]),r}function Wg(t,e,n,i,r){const o=n.x-e.x,s=n.y-e.y,a=Math.hypot(o,s);if(a<.02)return;const l=o/a,u=s/a,c=-u,h=l,f=ft/2;C2(i,a).forEach(([p,m])=>{const y=[{x:e.x+l*p-c*f,y:e.y+u*p-h*f},{x:e.x+l*m-c*f,y:e.y+u*m-h*f},{x:e.x+l*m+c*f,y:e.y+u*m+h*f},{x:e.x+l*p+c*f,y:e.y+u*p+h*f}].map(g=>Et(g,r));Ra(t,"WALLS",y)})}function b2(t){const{gx:e,gy:n,gw:i,gh:r}=t;return[{wall:"top",p1:{x:e,y:n},p2:{x:e+i,y:n}},{wall:"bottom",p1:{x:e,y:n+r},p2:{x:e+i,y:n+r}},{wall:"left",p1:{x:e,y:n},p2:{x:e,y:n+r}},{wall:"right",p1:{x:e+i,y:n},p2:{x:e+i,y:n+r}}]}function P2(t,e,n,i){const r=xs(e,n,kt),o=fy(e),s=Et({x:r.x1,y:r.y1},i),a=Et({x:r.x2,y:r.y2},i),l=Et(o,i),u=a.x-s.x,c=a.y-s.y,h=Math.hypot(u,c);if(h<.01)return;const f={x:-c/h,y:u/h},p={x:c/h,y:-u/h},m=(s.x+a.x)/2,y=(s.y+a.y)/2,g={x:l.x-m,y:l.y-y},d=f.x*g.x+f.y*g.y>=0?f:p,x=Math.atan2(c,u),v=Math.atan2(d.y,d.x);let _=v-x;for(;_>Math.PI;)_-=Math.PI*2;for(;_<=-Math.PI;)_+=Math.PI*2;const C=_<0,S=C?v:x,A=C?x:v;R2(t,"DOORS",s.x,s.y,h,Vg(S),Vg(A));const P={x:s.x+h*Math.cos(v),y:s.y+h*Math.sin(v)};to(t,"DOORS",s,P)}function L2(t,e,n,i){const r=xs(e,n,hn);to(t,"WINDOWS",Et({x:r.x1,y:r.y1},i),Et({x:r.x2,y:r.y2},i))}function D2(t,e,n){const{gx:i,gy:r,gw:o,gh:s}=e,a=(p,m)=>Et({x:p,y:m},n),l=(p,m,y,g)=>to(t,"DIMENSIONS",a(p,m),a(y,g)),u=r-ir;l(i,r,i,u-Zt),l(i+o,r,i+o,u-Zt),l(i,u,i+o,u),Br(t,"DIMENSIONS",a(i+o/2,u-.1),.14,o.toFixed(2));const c=r+s+ir;l(i,r+s,i,c+Zt),l(i+o,r+s,i+o,c+Zt),l(i,c,i+o,c),Br(t,"DIMENSIONS",a(i+o/2,c+.15),.14,o.toFixed(2));const h=i-ir;l(i,r,h-Zt,r),l(i,r+s,h-Zt,r+s),l(h,r,h,r+s),Br(t,"DIMENSIONS",a(h-.1,r+s/2),.14,s.toFixed(2),90);const f=i+o+ir;l(i+o,r,f+Zt,r),l(i+o,r+s,f+Zt,r+s),l(f,r,f,r+s),Br(t,"DIMENSIONS",a(f+.15,r+s/2),.14,s.toFixed(2),90)}function I2(t,e,n){const i=e.points?{x:Math.min(...e.points.map(r=>r.x)),y:Math.min(...e.points.map(r=>r.y))}:{x:e.gx,y:e.gy};Br(t,"TEXT",Et({x:i.x+.25,y:i.y+.5},n),.22,e.name),Br(t,"TEXT",Et({x:i.x+.25,y:i.y+.85},n),.14,`${iy(e).toFixed(1)} m2`)}function N2(t,e,n,i,r){n.forEach(o=>{const s=Ju(e,o.floor??0,i),a=o.rotation||0,{w:l,d:u}=Oa(s,a,o.width),c=o.x-l/2,h=o.x+l/2,f=o.y-u/2,p=o.y+u/2,m=[{x:c,y:f},{x:h,y:f},{x:h,y:p},{x:c,y:p}].map(d=>Et(d,r));Ra(t,"STAIRS",m);const y=a===90||a===270,g=10;for(let d=1;d<g;d++)if(y){const x=c+l*d/g;to(t,"STAIRS",Et({x,y:f},r),Et({x,y:p},r))}else{const x=f+u*d/g;to(t,"STAIRS",Et({x:c,y:x},r),Et({x:h,y:x},r))}})}function U2(t,e,n){e.forEach(i=>{const o=(i.size??ei)/2,s=i.x-o,a=i.x+o,l=i.y-o,u=i.y+o,c=[{x:s,y:l},{x:a,y:l},{x:a,y:u},{x:s,y:u}].map(h=>Et(h,n));Ra(t,"COLUMNS",c),to(t,"COLUMNS",Et({x:s,y:l},n),Et({x:a,y:u},n)),to(t,"COLUMNS",Et({x:s,y:u},n),Et({x:a,y:l},n))})}function O2(t,e,n,i){const r=Zu(e,0);if(r){const o=[{x:r.minX-ot,y:r.minY-ot},{x:r.maxX+ot,y:r.minY-ot},{x:r.maxX+ot,y:r.maxY+ot},{x:r.minX-ot,y:r.maxY+ot}].map(s=>Et(s,i));Ra(t,"FOUNDATION",o)}(n||[]).forEach(o=>{const a=(o.size??ei)/2+ot,l=[{x:o.x-a,y:o.y-a},{x:o.x+a,y:o.y-a},{x:o.x+a,y:o.y+a},{x:o.x-a,y:o.y+a}].map(u=>Et(u,i));Ra(t,"FOUNDATION",l)})}function F2(t,e,n,i,r,o,s,a,l){const u=[];return Br(u,"TEXT",Et({x:0,y:-.7},o),.35,s),e.forEach(c=>{if(c.points&&c.points.length>=3){const h=c.points.length;for(let f=0;f<h;f++){const p=c.points[f],m=c.points[(f+1)%h],y=(c.openings||[]).filter(g=>g.edge_index===f).map(g=>({position:g.position,width:g.kind==="door"?kt:hn}));Wg(u,p,m,y,o)}}else b2(c).forEach(({wall:h,p1:f,p2:p})=>{const m=(c.openings||[]).filter(y=>y.wall===h).map(y=>({position:y.position,width:y.kind==="door"?kt:hn}));Wg(u,f,p,m,o)}),a&&D2(u,c,o);(c.openings||[]).forEach(h=>{h.kind==="door"?P2(u,c,h,o):L2(u,c,h,o)}),I2(u,c,o)}),N2(u,t,n,r,o),U2(u,i,o),l&&O2(u,t,i,o),u}function z2(t,e,n,i,r,o=!0){const s=Object.entries(Gg).map(([p,m])=>`0
LAYER
2
${p}
70
0
62
${m}
6
CONTINUOUS`).join(`
`),a=[];let l=0;const u=3;e.forEach(p=>{const m=n.filter(d=>(d.floor??0)===p.floorNum),y=(i||[]).filter(d=>(d.floor??0)===p.floorNum);a.push(...F2(t,p.rooms,m,y,r,l,p.label,o,p.floorNum===0));const g=p.rooms.length?Math.max(...p.rooms.map(d=>d.points?Math.max(...d.points.map(x=>x.x)):d.gx+d.gw)):10;l+=g+u});const c=["0","SECTION","2","HEADER","9","$ACADVER","1","AC1021","9","$INSUNITS","70","6","0","ENDSEC"].join(`
`),h=["0","SECTION","2","TABLES","0","TABLE","2","LAYER","70",String(Object.keys(Gg).length),s,"0","ENDTAB","0","ENDSEC"].join(`
`),f=["0","SECTION","2","ENTITIES",...a,"0","ENDSEC"].join(`
`);return[c,h,f,"0","EOF"].join(`
`)+`
`}const Xg="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_$";function di(){let t="";for(let e=0;e<22;e++)t+=Xg[Math.floor(Math.random()*Xg.length)];return t}function Oi(t){Number.isFinite(t)||(t=0);let e=t.toFixed(4).replace(/(\.\d*?)0+$/,"$1").replace(/\.$/,".0");return e.includes(".")||(e+=".0"),e}function Ur(t){return String(t??"").replace(/'/g,"''").replace(/[\r\n]+/g," ")}class k2{constructor(){this.lines=[],this.next=1}add(e){const n=this.next++;return this.lines.push(`#${n}=${e};`),n}}function B2(t,e,n){return t.add(`IFCCARTESIANPOINT((${Oi(e)},${Oi(n)}))`)}function Cf(t,e,n,i){return t.add(`IFCCARTESIANPOINT((${Oi(e)},${Oi(n)},${Oi(i)}))`)}function Bn(t,e,n,i,r,o,s){const a=e.map(f=>B2(t,f.x,f.y)),l=t.add(`IFCPOLYLINE((${[...a,a[0]].map(f=>`#${f}`).join(",")}))`),u=t.add(`IFCARBITRARYCLOSEDPROFILEDEF(.AREA.,$,#${l})`),c=Cf(t,0,0,i),h=t.add(`IFCAXIS2PLACEMENT3D(#${c},#${r},#${o})`);return t.add(`IFCEXTRUDEDAREASOLID(#${u},#${h},#${s},${Oi(n)})`)}function Hn(t,e,n){const i=t.add(`IFCSHAPEREPRESENTATION(#${e},'Body','SweptSolid',(#${n}))`);return t.add(`IFCPRODUCTDEFINITIONSHAPE($,$,(#${i}))`)}function ri(t,e,n,i,r,o,s){return t.add(`${e}('${di()}',#${i},'${Ur(r)}',$,$,#${o},#${s},$,${n})`)}function jg(t,e,n,i,r,o,s,a,l){return t.add(`${e}('${di()}',#${i},'${Ur(r)}',$,$,#${o},#${s},$,${Oi(a)},${Oi(l)},${n},$,$)`)}function H2(t,e){const n=t.slice().sort((o,s)=>o.start-s.start);let i=0;const r=[];return n.forEach(o=>{o.start>i+.02&&r.push([i,o.start]),i=Math.max(i,o.start+o.width)}),i<e-.02&&r.push([i,e]),{pillars:r,openings:n}}function $g(t,e,n,i,r,o,s,a,l){return[{x:t+n*s-r*l,y:e+i*s-o*l},{x:t+n*a-r*l,y:e+i*a-o*l},{x:t+n*a+r*l,y:e+i*a+o*l},{x:t+n*s+r*l,y:e+i*s+o*l}]}function Yg(t,e,n,i,r,o,s,a,l){const u=i.x-n.x,c=i.y-n.y,h=Math.hypot(u,c);if(h<.02)return;const f=u/h,p=c/h,m=-p,y=f,g=ft/2,d=r.map(_=>Ta(_,h,o)),{pillars:x,openings:v}=H2(d,h);x.forEach(([_,C])=>{const S=$g(n.x,n.y,f,p,m,y,_,C,g),A=Bn(t,S,o,0,e.zAxis,e.xAxis,e.zAxis),P=Hn(t,e.context,A);l.push(ri(t,"IFCWALL",".SOLIDWALL.",s,"Wall",a,P))}),v.forEach(_=>{const C=$g(n.x,n.y,f,p,m,y,_.start,_.start+_.width,g);if(_.sill>.02){const T=Bn(t,C,_.sill,0,e.zAxis,e.xAxis,e.zAxis),O=Hn(t,e.context,T);l.push(ri(t,"IFCWALL",".SOLIDWALL.",s,"Wall (below opening)",a,O))}const S=_.sill+_.openH,A=o-S;if(A>.02){const T=Bn(t,C,A,S,e.zAxis,e.xAxis,e.zAxis),O=Hn(t,e.context,T);l.push(ri(t,"IFCWALL",".SOLIDWALL.",s,"Wall (above opening)",a,O))}const P=Bn(t,C,_.openH,_.sill,e.zAxis,e.xAxis,e.zAxis),E=Hn(t,e.context,P);_.isDoor?l.push(jg(t,"IFCDOOR",".DOOR.",s,"Door",a,E,_.openH,_.width)):l.push(jg(t,"IFCWINDOW",".WINDOW.",s,"Window",a,E,_.openH,_.width))})}function G2(t){const{gx:e,gy:n,gw:i,gh:r}=t;return[{wall:"top",p1:{x:e,y:n},p2:{x:e+i,y:n}},{wall:"bottom",p1:{x:e,y:n+r},p2:{x:e+i,y:n+r}},{wall:"left",p1:{x:e,y:n},p2:{x:e,y:n+r}},{wall:"right",p1:{x:e+i,y:n},p2:{x:e+i,y:n+r}}]}function V2(t,e,n,i,r,o,s){if(n.points&&n.points.length>=3){const u=n.points.length;for(let h=0;h<u;h++){const f=n.points[h],p=n.points[(h+1)%u],m=(n.openings||[]).filter(y=>y.edge_index===h);Yg(t,e,f,p,m,i,r,o,s)}const c=Bn(t,n.points,.06,-.06,e.zAxis,e.xAxis,e.zAxis);if(s.push(ri(t,"IFCSLAB",".FLOOR.",r,"Floor",o,Hn(t,e.context,c))),n.has_roof){const h=Bn(t,n.points,vi,i,e.zAxis,e.xAxis,e.zAxis);s.push(ri(t,"IFCSLAB",".ROOF.",r,"Roof",o,Hn(t,e.context,h)))}return}G2(n).forEach(({wall:u,p1:c,p2:h})=>{const f=(n.openings||[]).filter(p=>p.wall===u);Yg(t,e,c,h,f,i,r,o,s)});const a=[{x:n.gx,y:n.gy},{x:n.gx+n.gw,y:n.gy},{x:n.gx+n.gw,y:n.gy+n.gh},{x:n.gx,y:n.gy+n.gh}],l=Bn(t,a,.06,-.06,e.zAxis,e.xAxis,e.zAxis);if(s.push(ri(t,"IFCSLAB",".FLOOR.",r,"Floor",o,Hn(t,e.context,l))),n.has_roof){const u=Bn(t,a,vi,i,e.zAxis,e.xAxis,e.zAxis);s.push(ri(t,"IFCSLAB",".ROOF.",r,"Roof",o,Hn(t,e.context,u)))}}function W2(t,e,n,i,r,o,s,a){const l=Ju(i,n.floor??0,r);if(!(l>0))return;const u=n.rotation||0,{w:c,d:h}=Oa(l,u,n.width),f=n.x-c/2,p=n.x+c/2,m=n.y-h/2,y=n.y+h/2,d=Bn(t,[{x:f,y:m},{x:p,y:m},{x:p,y},{x:f,y}],l,0,e.zAxis,e.xAxis,e.zAxis),x=Hn(t,e.context,d);a.push(ri(t,"IFCSTAIR",".STRAIGHT_RUN_STAIR.",o,"Stair",s,x))}function X2(t,e,n,i,r,o,s,a){const l=n.size??ei,u=n.height??r,c=l/2,h=[{x:n.x-c,y:n.y-c},{x:n.x+c,y:n.y-c},{x:n.x+c,y:n.y+c},{x:n.x-c,y:n.y+c}],f=Bn(t,h,u,0,e.zAxis,e.xAxis,e.zAxis),p=Hn(t,e.context,f);a.push(ri(t,"IFCCOLUMN",".COLUMN.",o,"Column",s,p))}function j2(t,e,n,i,r,o,s){const a=Zu(n,0);if(a){const l=[{x:a.minX-ot,y:a.minY-ot},{x:a.maxX+ot,y:a.minY-ot},{x:a.maxX+ot,y:a.maxY+ot},{x:a.minX-ot,y:a.maxY+ot}],u=Bn(t,l,hi,-hi,e.zAxis,e.xAxis,e.zAxis),c=Hn(t,e.context,u);s.push(ri(t,"IFCFOOTING",".STRIP_FOOTING.",r,"Foundation",o,c))}(i||[]).forEach(l=>{const c=(l.size??ei)/2+ot,h=[{x:l.x-c,y:l.y-c},{x:l.x+c,y:l.y-c},{x:l.x+c,y:l.y+c},{x:l.x-c,y:l.y+c}],f=Bn(t,h,hi,-hi,e.zAxis,e.xAxis,e.zAxis),p=Hn(t,e.context,f);s.push(ri(t,"IFCFOOTING",".PAD_FOOTING.",r,"Column Footing",o,p))})}function $2(t,e,n,i,r=o=>o){const o=new k2,s=(t==null?void 0:t.wall_height)??2.7,a=(t==null?void 0:t.name)||"Untitled Project",l=Cf(o,0,0,0),u=o.add("IFCDIRECTION((0.,0.,1.))"),c=o.add("IFCDIRECTION((1.,0.,0.))"),h=o.add("IFCDIRECTION((0.,1.,0.))"),f=o.add(`IFCAXIS2PLACEMENT3D(#${l},#${u},#${c})`),p=o.add("IFCPERSON($,$,'User',$,$,$,$,$)"),m=o.add(`IFCORGANIZATION($,'${Ur(a)}',$,$,$)`),y=o.add(`IFCPERSONANDORGANIZATION(#${p},#${m},$)`),g=o.add(`IFCAPPLICATION(#${m},'1.0','Lamsa Engineers','LAMSA')`),d=o.add(`IFCOWNERHISTORY(#${y},#${g},$,.ADDED.,$,$,$,0)`),x=o.add("IFCSIUNIT(*,.LENGTHUNIT.,$,.METRE.)"),v=o.add("IFCSIUNIT(*,.AREAUNIT.,$,.SQUARE_METRE.)"),_=o.add("IFCSIUNIT(*,.VOLUMEUNIT.,$,.CUBIC_METRE.)"),C=o.add("IFCSIUNIT(*,.PLANEANGLEUNIT.,$,.RADIAN.)"),S=o.add(`IFCUNITASSIGNMENT((#${x},#${v},#${_},#${C}))`),A=o.add(`IFCGEOMETRICREPRESENTATIONCONTEXT($,'Model',3,1.E-05,#${f},#${h})`),P={context:A,zAxis:u,xAxis:c},E=o.add(`IFCPROJECT('${di()}',#${d},'${Ur(a)}',$,$,$,$,(#${A}),#${S})`),T=o.add(`IFCLOCALPLACEMENT($,#${f})`),O=o.add(`IFCSITE('${di()}',#${d},'Site',$,$,#${T},$,$,.ELEMENT.,$,$,$,$,$)`);o.add(`IFCRELAGGREGATES('${di()}',#${d},$,$,#${E},(#${O}))`);const X=o.add(`IFCLOCALPLACEMENT(#${T},#${f})`),te=o.add(`IFCBUILDING('${di()}',#${d},'${Ur(a)}',$,$,#${X},$,$,.ELEMENT.,$,$,$)`);o.add(`IFCRELAGGREGATES('${di()}',#${d},$,$,#${O},(#${te}))`);const L=[...new Set(e.map(z=>z.floor??0))].sort((z,Q)=>z-Q),W=L.length?L:[0],$=Ua(e,s),K=[];W.forEach(z=>{var H;const Q=e.filter(M=>(M.floor??0)===z),ne=$.get(z)??0,Y=Cf(o,0,0,ne),ie=o.add(`IFCAXIS2PLACEMENT3D(#${Y},#${u},#${c})`),de=o.add(`IFCLOCALPLACEMENT(#${X},#${ie})`),ge=o.add(`IFCBUILDINGSTOREY('${di()}',#${d},'${Ur(Aa(z,r))}',$,$,#${de},$,$,.ELEMENT.,${Oi(ne)})`);K.push(ge);const me=((H=Q[0])==null?void 0:H.wall_height)??s,Me=o.add(`IFCLOCALPLACEMENT(#${de},#${f})`),oe=[];Q.forEach(M=>{V2(o,P,M,M.wall_height??me,d,Me,oe)}),(n||[]).filter(M=>(M.floor??0)===z).forEach(M=>{W2(o,P,M,e,s,d,Me,oe)});const D=(i||[]).filter(M=>(M.floor??0)===z);D.forEach(M=>{X2(o,P,M,ne,s,d,Me,oe)}),z===0&&j2(o,P,e,D,d,Me,oe),oe.length&&o.add(`IFCRELCONTAINEDINSPATIALSTRUCTURE('${di()}',#${d},$,$,(${oe.map(M=>`#${M}`).join(",")}),#${ge})`)}),o.add(`IFCRELAGGREGATES('${di()}',#${d},$,$,#${te},(${K.map(z=>`#${z}`).join(",")}))`);const U=["ISO-10303-21;","HEADER;","FILE_DESCRIPTION((''),'2;1');",`FILE_NAME('${Ur(a)}.ifc','${new Date().toISOString()}',(''),(''),'Lamsa Engineers','Lamsa Engineers','');`,"FILE_SCHEMA(('IFC4'));","ENDSEC;","","DATA;"].join(`
`),B=["ENDSEC;","","END-ISO-10303-21;",""].join(`
`);return[U,o.lines.join(`
`),B].join(`
`)}function Y2({initialProject:t,projectId:e,onBack:n,onSave:i,t:r}){const{project:o,rooms:s,stairs:a,columns:l,actions:u}=T2(t),[c,h]=Re.useState("select"),[f,p]=Re.useState(0),[m,y]=Re.useState(null),[g,d]=Re.useState(null),[x,v]=Re.useState(null),[_,C]=Re.useState(null),[S,A]=Re.useState(!1),[P,E]=Re.useState(""),[T,O]=Re.useState(!1),[X,te]=Re.useState(!1),[L,W]=Re.useState(!0),[$,K]=Re.useState(!1),U=Re.useRef(null),[B,z]=Re.useState(()=>typeof window<"u"?window.innerWidth<900:!1);Re.useEffect(()=>{function H(){z(window.innerWidth<900)}return window.addEventListener("resize",H),()=>window.removeEventListener("resize",H)},[]);const Q=s.find(H=>H.id===m)||null,ne=a.find(H=>H.id===x)||null,Y=l.find(H=>H.id===_)||null,ie=Math.max(0,...s.map(H=>H.floor??0),...a.map(H=>(H.floor??0)+1),...l.map(H=>H.floor??0)),de=Math.max(o.floor_count||1,ie+1);function ge(){const H=de+1;u.setMeta({floor_count:H}),p(de)}async function me(){A(!0),E("");const H=await i(e,{project:o,rooms:s,stairs:a,columns:l});return A(!1),E(H.ok?r("Saved"):H.error||r("Save failed")),setTimeout(()=>E(""),2500),H}function Me(){const H=s.filter(R=>(R.floor??0)===f),M=A2(H,20,16),[,F]=M.split(","),N=atob(F),ee=new Uint8Array(N.length);for(let R=0;R<N.length;R++)ee[R]=N.charCodeAt(R);const G=new Blob([ee],{type:"image/png"}),pe=URL.createObjectURL(G),fe=document.createElement("a");fe.href=pe,fe.download=(o.name||"floor-plan")+"-"+Aa(f,r)+".png",fe.click(),URL.revokeObjectURL(pe)}function oe(){const H=Array.from({length:de},(G,pe)=>({floorNum:pe,label:Aa(pe,r),rooms:s.filter(fe=>(fe.floor??0)===pe)})).filter(G=>G.rooms.length>0);if(!H.length)return;const M=z2(s,H,a,l,o.wall_height),F=new Blob([M],{type:"application/dxf"}),N=URL.createObjectURL(F),ee=document.createElement("a");ee.href=N,ee.download=(o.name||"floor-plan")+".dxf",ee.click(),URL.revokeObjectURL(N)}function D(){if(!s.length)return;const H=$2(o,s,a,l,r),M=new Blob([H],{type:"application/x-step"}),F=URL.createObjectURL(M),N=document.createElement("a");N.href=F,N.download=(o.name||"floor-plan")+".ifc",N.click(),URL.revokeObjectURL(F)}return re.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh",fontFamily:"sans-serif",overflowX:"hidden"},children:[re.jsxs("div",{style:{display:"flex",flexWrap:"wrap",rowGap:8,alignItems:"center",justifyContent:"space-between",padding:"10px 14px",borderBottom:"1px solid #e5e7eb"},children:[re.jsxs("button",{type:"button",onClick:n,style:{background:"none",border:"none",cursor:"pointer",fontSize:13,color:"#374151"},children:["← ",r("Projects")]}),re.jsx("input",{value:o.name,onChange:H=>u.setMeta({name:H.target.value}),style:{fontWeight:800,fontSize:15,border:"none",textAlign:"center",flex:"1 1 140px",minWidth:0}}),re.jsxs("div",{style:{display:"flex",flexWrap:"wrap",rowGap:8,gap:8,alignItems:"center",justifyContent:"flex-end"},children:[re.jsx("span",{style:{fontSize:12,color:"#6b7280"},children:P}),re.jsxs("label",{style:{fontSize:12,color:"#6b7280",display:"flex",alignItems:"center",gap:4},children:[re.jsx("input",{type:"checkbox",checked:T,onChange:H=>O(H.target.checked)}),r("Dollhouse view")]}),re.jsxs("label",{style:{fontSize:12,color:"#6b7280",display:"flex",alignItems:"center",gap:4},children:[re.jsx("input",{type:"checkbox",checked:X,onChange:H=>te(H.target.checked)}),r("Render view")]}),re.jsxs("label",{style:{fontSize:12,color:"#6b7280",display:"flex",alignItems:"center",gap:4},children:[re.jsx("input",{type:"checkbox",checked:L,onChange:H=>W(H.target.checked)}),r("Show Foundation")]}),re.jsx("button",{type:"button",onClick:Me,style:{padding:"8px 14px",borderRadius:8,border:"1px solid #d1d5db",background:"#fff",fontWeight:700,fontSize:13,cursor:"pointer"},children:r("Export plan")}),re.jsx("button",{type:"button",onClick:oe,style:{padding:"8px 14px",borderRadius:8,border:"1px solid #d1d5db",background:"#fff",fontWeight:700,fontSize:13,cursor:"pointer"},children:r("Export DXF")}),re.jsx("button",{type:"button",onClick:D,style:{padding:"8px 14px",borderRadius:8,border:"1px solid #d1d5db",background:"#fff",fontWeight:700,fontSize:13,cursor:"pointer"},children:r("Export IFC")}),re.jsx("button",{type:"button",onClick:()=>K(!0),title:r("Optional — uses 1 credit from your weekly/monthly plan"),style:{padding:"8px 14px",borderRadius:8,border:"1px solid #d1d5db",background:"#fff",fontWeight:700,fontSize:13,cursor:"pointer"},children:r("Generate realistic image")}),re.jsx("button",{type:"button",onClick:me,disabled:S,style:{padding:"8px 16px",borderRadius:8,border:"none",background:"#c9a96e",color:"#1b1e22",fontWeight:800,fontSize:13,cursor:"pointer",opacity:S?.6:1},children:r(S?"Saving…":"Save")})]})]}),re.jsx(l2,{t:r,mode:c,onModeChange:h,selectedRoom:Q,onRenameRoom:(H,M)=>u.updateRoom(H,{name:M}),onChangeRoomType:(H,M)=>{const F=s.find(G=>G.id===H);if(!F)return;const N=Uh(M),ee={room_type:M,name:r(N.label)};F.points||(ee.gw=Math.max(F.gw,N.minW),ee.gh=Math.max(F.gh,N.minH)),u.updateRoom(H,ee)},onResizeRoomInputs:(H,M,F)=>u.updateRoom(H,{gw:M,gh:F}),onDeleteRoom:H=>{u.removeRoom(H),y(null)},selectedOpening:g,onDeleteOpening:(H,M)=>{u.removeOpening(H,M),d(null)},floorCount:de,activeFloor:f,onSetActiveFloor:p,onAddFloor:ge,selectedStair:ne,onResizeStairWidth:(H,M)=>u.updateStair(H,{width:M}),onDeleteStair:H=>{u.removeStair(H),v(null)},selectedColumn:Y,onDeleteColumn:H=>{u.removeColumn(H),C(null)}}),re.jsxs("div",{style:{display:"flex",flexDirection:B?"column":"row",flex:1,minHeight:0},children:[re.jsx("div",{style:B?{flex:"0 0 auto",maxHeight:"50%",overflow:"auto"}:{flex:1,overflow:"auto"},children:re.jsx(s2,{rooms:s,stairs:a,columns:l,showFoundation:L,wallHeight:o.wall_height,mode:c,activeFloor:f,selectedRoomId:m,selectedOpening:g,selectedStairId:x,selectedColumnId:_,onAddRoom:H=>{const M=u.addRectRoom(H);y(M.id),h("select")},onAddPolygonRoom:H=>{const M=u.addPolygonRoom({points:H,floor:f});y(M.id),h("select")},onMoveRoom:(H,M,F)=>u.updateRoom(H,{gx:M,gy:F}),onResizeRoom:(H,M,F)=>u.updateRoom(H,{gw:M,gh:F}),onMovePolygonRoom:(H,M)=>{const F=M.map(R=>R.x),N=M.map(R=>R.y),ee=Math.min(...F),G=Math.min(...N),pe=Math.max(...F)-ee,fe=Math.max(...N)-G;u.updateRoom(H,{points:M,gx:ee,gy:G,gw:pe,gh:fe})},onSelectRoom:y,onAddOpening:u.addOpening,onSelectOpening:d,onAddStair:H=>u.addStair(S2(H)),onMoveStair:(H,M,F,N)=>u.moveStair(H,M,F,N),onSelectStair:v,onAddColumn:H=>u.addColumn(E2(H)),onMoveColumn:(H,M,F)=>u.moveColumn(H,M,F),onSelectColumn:C})}),re.jsx("div",{style:{flex:1,minHeight:0},children:re.jsx(r2,{ref:U,rooms:s,stairs:a,columns:l,wallHeight:o.wall_height,wallColor:o.wall_color,wallMaterial:o.wall_material,t:r,dollhouse:T,floorGap:T?1.2:0,renderView:X,showFoundation:L})})]}),$&&re.jsx(m2,{captureImage:()=>U.current&&U.current.captureImage(),onClose:()=>K(!1),t:r})]})}const q2={"Lamsa Engineers":"لمسة للمهندسين","Please sign in to continue.":"الرجاء تسجيل الدخول للمتابعة.","Sign in":"تسجيل الدخول","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"صمّم مخططات أرضية كاملة، عاينها ثلاثي الأبعاد، وصدّر مستندات هندسية حقيقية.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"انتهى اشتراكك بقسم المهندسين. جدّد الاشتراك لمتابعة تصميم المخططات الكاملة.","Rectangular rooms, doors & windows, single-floor plans":"غرف مستطيلة، أبواب ونوافذ، مخططات بطابق واحد","Live 3D preview of your design":"معاينة ثلاثية الأبعاد حية لتصميمك","Printable floor plan export":"تصدير مخطط قابل للطباعة","Use Lamsa's existing furniture-styling tools per room":"استخدم أدوات تنسيق الأثاث الموجودة بلمسة لكل غرفة","/ year":"/ سنوياً","14-day free trial, cancel anytime":"تجربة مجانية لمدة 14 يوم، إلغاء بأي وقت","Starting…":"جارٍ البدء…","Start free trial":"ابدأ التجربة المجانية","Something went wrong, please try again":"حدث خطأ ما، حاول مرة أخرى","Your Projects":"مشاريعك","New Project":"مشروع جديد","No projects yet — create your first one.":"لا يوجد مشاريع بعد — أنشئ أول مشروع.",Delete:"حذف",Projects:"المشاريع",Saved:"تم الحفظ","Save failed":"فشل الحفظ","Export plan":"تصدير المخطط","Saving…":"جارٍ الحفظ…",Save:"حفظ",Select:"تحديد","Add Room":"إضافة غرفة","Add Door":"إضافة باب","Add Window":"إضافة نافذة","Delete Room":"حذف الغرفة","Delete Opening":"حذف الفتحة",W:"عرض",H:"ارتفاع","Reset camera":"إعادة ضبط الكاميرا","Untitled Project":"مشروع بدون اسم","Add Polygon Room":"إضافة غرفة بشكل حر","Add Stairs":"إضافة سلالم","Delete Stairs":"حذف السلالم","Add Column":"إضافة عمود","Delete Column":"حذف العمود","Ground Floor":"الطابق الأرضي",Floor:"الطابق","Add Floor":"إضافة طابق","Dollhouse view":"عرض مقطعي","Render view":"عرض فني","Show Foundation":"إظهار القواعد","Export DXF":"تصدير DXF","Export IFC":"تصدير IFC","Back to Home":"الرئيسية","Generate realistic image":"توليد صورة واقعية","Optional — uses 1 credit from your weekly/monthly plan":"اختياري — يستهلك كريدت واحد من رصيدك الأسبوعي أو الشهري","Turning your design into a photoreal render...":"عم نحوّل تصميمك لصورة واقعية...","Takes 20-40 seconds":"بياخد 20-40 ثانية",Close:"إغلاق","Image upload failed. Please try again.":"تعذّر رفع الصورة، حاول مرة أخرى","Error generating image. Please try again.":"حدث خطأ أثناء توليد الصورة، حاول مرة أخرى","Connection error. Please try again.":"خطأ بالاتصال، حاول مرة أخرى","You're out of credits":"نفد رصيدك من الكريدت","Subscribe to generate photoreal renders of your floor plans.":"اشترك لتوليد صور واقعية لمخططاتك",Weekly:"أسبوعي",Monthly:"شهري",credits:"كريدت",Download:"تحميل",Bedroom:"غرفة نوم","Living Room":"صالة","Dining Room":"غرفة سفرة",Office:"مكتب",Kitchen:"مطبخ",Bathroom:"حمام",Hallway:"ممر",Closet:"خزانة",Garage:"كراج",Other:"أخرى",Min:"الحد الأدنى",Width:"العرض"},qg={de:{"Lamsa Engineers":"Lamsa Ingenieure","Please sign in to continue.":"Bitte melde dich an, um fortzufahren.","Sign in":"Anmelden","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Entwirf komplette Grundrisse, sieh sie in 3D in der Vorschau und exportiere echte Architekturunterlagen.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Dein Zugang zu Engineers ist abgelaufen. Abonniere erneut, um weiter vollständige Grundrisse zu gestalten.","Rectangular rooms, doors & windows, single-floor plans":"Rechteckige Räume, Türen & Fenster, einstöckige Grundrisse","Live 3D preview of your design":"Live-3D-Vorschau deines Entwurfs","Printable floor plan export":"Druckbarer Grundriss-Export","Use Lamsa's existing furniture-styling tools per room":"Nutze Lamsas vorhandene Möbel-Styling-Tools für jeden Raum","/ year":"/ Jahr","14-day free trial, cancel anytime":"14 Tage kostenlos testen, jederzeit kündbar","Starting…":"Wird gestartet…","Start free trial":"Kostenlose Testphase starten","Something went wrong, please try again":"Etwas ist schiefgelaufen, bitte versuche es erneut","Your Projects":"Deine Projekte","New Project":"Neues Projekt","No projects yet — create your first one.":"Noch keine Projekte — erstelle dein erstes.",Delete:"Löschen",Projects:"Projekte",Saved:"Gespeichert","Save failed":"Speichern fehlgeschlagen","Export plan":"Plan exportieren","Saving…":"Wird gespeichert…",Save:"Speichern",Select:"Auswählen","Add Room":"Raum hinzufügen","Add Door":"Tür hinzufügen","Add Window":"Fenster hinzufügen","Delete Room":"Raum löschen","Delete Opening":"Öffnung löschen",W:"B",H:"H","Reset camera":"Kamera zurücksetzen","Untitled Project":"Unbenanntes Projekt","Add Polygon Room":"Freiform-Raum hinzufügen","Add Stairs":"Treppe hinzufügen","Delete Stairs":"Treppe löschen","Add Column":"Säule hinzufügen","Delete Column":"Säule löschen","Ground Floor":"Erdgeschoss",Floor:"Stockwerk","Add Floor":"Stockwerk hinzufügen","Dollhouse view":"Schnittansicht","Render view":"Render-Ansicht","Show Foundation":"Fundament anzeigen","Export DXF":"DXF exportieren","Export IFC":"IFC exportieren","Back to Home":"Zurück zur Startseite","Generate realistic image":"Realistisches Bild erzeugen","Optional — uses 1 credit from your weekly/monthly plan":"Optional — verbraucht 1 Guthaben aus deinem Wochen-/Monatsabo","Turning your design into a photoreal render...":"Dein Entwurf wird in ein fotorealistisches Bild verwandelt...","Takes 20-40 seconds":"Dauert 20-40 Sekunden",Close:"Schließen","Image upload failed. Please try again.":"Bild-Upload fehlgeschlagen, bitte erneut versuchen","Error generating image. Please try again.":"Fehler bei der Bilderzeugung, bitte erneut versuchen","Connection error. Please try again.":"Verbindungsfehler, bitte erneut versuchen","You're out of credits":"Dein Guthaben ist aufgebraucht","Subscribe to generate photoreal renders of your floor plans.":"Abonniere, um fotorealistische Bilder deiner Grundrisse zu erzeugen.",Weekly:"Wöchentlich",Monthly:"Monatlich",credits:"Guthaben",Download:"Herunterladen",Bedroom:"Schlafzimmer","Living Room":"Wohnzimmer","Dining Room":"Esszimmer",Office:"Büro",Kitchen:"Küche",Bathroom:"Badezimmer",Hallway:"Flur",Closet:"Abstellraum",Garage:"Garage",Other:"Sonstiges",Min:"Min.",Width:"Breite"},es:{"Lamsa Engineers":"Lamsa Ingenieros","Please sign in to continue.":"Inicia sesión para continuar.","Sign in":"Iniciar sesión","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Diseña planos completos, previsualízalos en 3D y exporta documentos arquitectónicos reales.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Tu acceso a Engineers ha terminado. Suscríbete de nuevo para seguir diseñando planos completos.","Rectangular rooms, doors & windows, single-floor plans":"Habitaciones rectangulares, puertas y ventanas, planos de una sola planta","Live 3D preview of your design":"Vista previa 3D en vivo de tu diseño","Printable floor plan export":"Exportación de plano imprimible","Use Lamsa's existing furniture-styling tools per room":"Usa las herramientas de estilismo de muebles de Lamsa en cada habitación","/ year":"/ año","14-day free trial, cancel anytime":"14 días de prueba gratis, cancela cuando quieras","Starting…":"Iniciando…","Start free trial":"Iniciar prueba gratuita","Something went wrong, please try again":"Algo salió mal, inténtalo de nuevo","Your Projects":"Tus Proyectos","New Project":"Nuevo Proyecto","No projects yet — create your first one.":"Aún no hay proyectos — crea el primero.",Delete:"Eliminar",Projects:"Proyectos",Saved:"Guardado","Save failed":"Error al guardar","Export plan":"Exportar plano","Saving…":"Guardando…",Save:"Guardar",Select:"Seleccionar","Add Room":"Añadir Habitación","Add Door":"Añadir Puerta","Add Window":"Añadir Ventana","Delete Room":"Eliminar Habitación","Delete Opening":"Eliminar Apertura",W:"An",H:"Al","Reset camera":"Restablecer cámara","Untitled Project":"Proyecto sin título","Add Polygon Room":"Añadir Habitación de Forma Libre","Add Stairs":"Añadir Escaleras","Delete Stairs":"Eliminar Escaleras","Add Column":"Añadir Columna","Delete Column":"Eliminar Columna","Ground Floor":"Planta Baja",Floor:"Planta","Add Floor":"Añadir Planta","Dollhouse view":"Vista seccionada","Render view":"Vista renderizada","Show Foundation":"Mostrar cimentación","Export DXF":"Exportar DXF","Export IFC":"Exportar IFC","Back to Home":"Volver al Inicio","Generate realistic image":"Generar imagen realista","Optional — uses 1 credit from your weekly/monthly plan":"Opcional — usa 1 crédito de tu plan semanal/mensual","Turning your design into a photoreal render...":"Convirtiendo tu diseño en una imagen fotorrealista...","Takes 20-40 seconds":"Tarda 20-40 segundos",Close:"Cerrar","Image upload failed. Please try again.":"Error al subir la imagen, inténtalo de nuevo","Error generating image. Please try again.":"Error al generar la imagen, inténtalo de nuevo","Connection error. Please try again.":"Error de conexión, inténtalo de nuevo","You're out of credits":"Te has quedado sin créditos","Subscribe to generate photoreal renders of your floor plans.":"Suscríbete para generar imágenes fotorrealistas de tus planos.",Weekly:"Semanal",Monthly:"Mensual",credits:"créditos",Download:"Descargar",Bedroom:"Dormitorio","Living Room":"Sala de estar","Dining Room":"Comedor",Office:"Oficina",Kitchen:"Cocina",Bathroom:"Baño",Hallway:"Pasillo",Closet:"Armario",Garage:"Garaje",Other:"Otro",Min:"Mín.",Width:"Ancho"},tr:{"Lamsa Engineers":"Lamsa Muhendisler","Please sign in to continue.":"Devam etmek icin giris yapin.","Sign in":"Giris Yap","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Tam kat planlari tasarlayin, 3D onizleme yapin ve gercek mimari belgeler disa aktarin.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Engineers erisiminiz sona erdi. Tam kat planlari tasarlamaya devam etmek icin tekrar abone olun.","Rectangular rooms, doors & windows, single-floor plans":"Dikdortgen odalar, kapilar ve pencereler, tek katli planlar","Live 3D preview of your design":"Tasariminizin canli 3D onizlemesi","Printable floor plan export":"Yazdirilabilir kat plani disa aktarma","Use Lamsa's existing furniture-styling tools per room":"Lamsa'nin mevcut mobilya stilizasyon araclarini her oda icin kullanin","/ year":"/ yil","14-day free trial, cancel anytime":"14 gunluk ucretsiz deneme, istediginiz zaman iptal edin","Starting…":"Basliyor…","Start free trial":"Ucretsiz denemeyi baslat","Something went wrong, please try again":"Bir sorun olustu, lutfen tekrar deneyin","Your Projects":"Projeleriniz","New Project":"Yeni Proje","No projects yet — create your first one.":"Henuz proje yok — ilkini olusturun.",Delete:"Sil",Projects:"Projeler",Saved:"Kaydedildi","Save failed":"Kaydetme basarisiz","Export plan":"Plani disa aktar","Saving…":"Kaydediliyor…",Save:"Kaydet",Select:"Sec","Add Room":"Oda Ekle","Add Door":"Kapi Ekle","Add Window":"Pencere Ekle","Delete Room":"Odayi Sil","Delete Opening":"Acikligi Sil",W:"G",H:"Y","Reset camera":"Kamerayi sifirla","Untitled Project":"Isimsiz Proje","Add Polygon Room":"Serbest Sekilli Oda Ekle","Add Stairs":"Merdiven Ekle","Delete Stairs":"Merdiveni Sil","Add Column":"Kolon Ekle","Delete Column":"Kolonu Sil","Ground Floor":"Zemin Kat",Floor:"Kat","Add Floor":"Kat Ekle","Dollhouse view":"Kesit Gorunumu","Render view":"Render Gorunumu","Show Foundation":"Temeli Goster","Export DXF":"DXF Disa Aktar","Export IFC":"IFC Disa Aktar","Back to Home":"Ana Sayfaya Don","Generate realistic image":"Gercekci Gorsel Olustur","Optional — uses 1 credit from your weekly/monthly plan":"Istege bagli — haftalik/aylik paketinizden 1 kredi kullanir","Turning your design into a photoreal render...":"Tasariminiz gercekci bir gorsele donusturuluyor...","Takes 20-40 seconds":"20-40 saniye surer",Close:"Kapat","Image upload failed. Please try again.":"Gorsel yuklenemedi, lutfen tekrar deneyin","Error generating image. Please try again.":"Gorsel olusturulurken hata olustu, lutfen tekrar deneyin","Connection error. Please try again.":"Baglanti hatasi, lutfen tekrar deneyin","You're out of credits":"Krediniz kalmadi","Subscribe to generate photoreal renders of your floor plans.":"Kat planlarinizin gercekci gorsellerini olusturmak icin abone olun.",Weekly:"Haftalik",Monthly:"Aylik",credits:"kredi",Download:"Indir",Bedroom:"Yatak Odasi","Living Room":"Oturma Odasi","Dining Room":"Yemek Odasi",Office:"Ofis",Kitchen:"Mutfak",Bathroom:"Banyo",Hallway:"Koridor",Closet:"Dolap Odasi",Garage:"Garaj",Other:"Diger",Min:"Min.",Width:"Genislik"},fr:{"Lamsa Engineers":"Lamsa Ingénieurs","Please sign in to continue.":"Veuillez vous connecter pour continuer.","Sign in":"Connexion","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Concevez des plans complets, prévisualisez-les en 3D et exportez de vrais documents architecturaux.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Votre accès à Engineers a expiré. Réabonnez-vous pour continuer à concevoir des plans complets.","Rectangular rooms, doors & windows, single-floor plans":"Pièces rectangulaires, portes et fenêtres, plans à un seul niveau","Live 3D preview of your design":"Aperçu 3D en direct de votre conception","Printable floor plan export":"Export de plan imprimable","Use Lamsa's existing furniture-styling tools per room":"Utilisez les outils de style de meubles existants de Lamsa pour chaque pièce","/ year":"/ an","14-day free trial, cancel anytime":"Essai gratuit de 14 jours, annulez à tout moment","Starting…":"Démarrage…","Start free trial":"Démarrer l'essai gratuit","Something went wrong, please try again":"Un problème est survenu, veuillez réessayer","Your Projects":"Vos Projets","New Project":"Nouveau Projet","No projects yet — create your first one.":"Aucun projet pour l'instant — créez le premier.",Delete:"Supprimer",Projects:"Projets",Saved:"Enregistré","Save failed":"Échec de l'enregistrement","Export plan":"Exporter le plan","Saving…":"Enregistrement…",Save:"Enregistrer",Select:"Sélectionner","Add Room":"Ajouter une pièce","Add Door":"Ajouter une porte","Add Window":"Ajouter une fenêtre","Delete Room":"Supprimer la pièce","Delete Opening":"Supprimer l'ouverture",W:"L",H:"H","Reset camera":"Réinitialiser la caméra","Untitled Project":"Projet sans titre","Add Polygon Room":"Ajouter une pièce de forme libre","Add Stairs":"Ajouter un escalier","Delete Stairs":"Supprimer l'escalier","Add Column":"Ajouter un poteau","Delete Column":"Supprimer le poteau","Ground Floor":"Rez-de-chaussée",Floor:"Étage","Add Floor":"Ajouter un étage","Dollhouse view":"Vue en coupe","Render view":"Vue rendue","Show Foundation":"Afficher les fondations","Export DXF":"Exporter en DXF","Export IFC":"Exporter en IFC","Back to Home":"Retour à l'accueil","Generate realistic image":"Générer une image réaliste","Optional — uses 1 credit from your weekly/monthly plan":"Optionnel — utilise 1 crédit de votre forfait hebdomadaire/mensuel","Turning your design into a photoreal render...":"Transformation de votre conception en image photoréaliste...","Takes 20-40 seconds":"Prend 20 à 40 secondes",Close:"Fermer","Image upload failed. Please try again.":"Échec de l'envoi de l'image, veuillez réessayer","Error generating image. Please try again.":"Erreur lors de la génération de l'image, veuillez réessayer","Connection error. Please try again.":"Erreur de connexion, veuillez réessayer","You're out of credits":"Vous n'avez plus de crédits","Subscribe to generate photoreal renders of your floor plans.":"Abonnez-vous pour générer des rendus photoréalistes de vos plans.",Weekly:"Hebdomadaire",Monthly:"Mensuel",credits:"crédits",Download:"Télécharger",Bedroom:"Chambre","Living Room":"Salon","Dining Room":"Salle à manger",Office:"Bureau",Kitchen:"Cuisine",Bathroom:"Salle de bain",Hallway:"Couloir",Closet:"Placard",Garage:"Garage",Other:"Autre",Min:"Min.",Width:"Largeur"},it:{"Lamsa Engineers":"Lamsa Ingegneri","Please sign in to continue.":"Accedi per continuare.","Sign in":"Accedi","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Progetta planimetrie complete, visualizzale in anteprima 3D ed esporta veri documenti architettonici.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Il tuo accesso a Engineers è scaduto. Abbonati di nuovo per continuare a progettare planimetrie complete.","Rectangular rooms, doors & windows, single-floor plans":"Stanze rettangolari, porte e finestre, planimetrie a un piano","Live 3D preview of your design":"Anteprima 3D dal vivo del tuo progetto","Printable floor plan export":"Esportazione planimetria stampabile","Use Lamsa's existing furniture-styling tools per room":"Usa gli strumenti di stile mobili di Lamsa per ogni stanza","/ year":"/ anno","14-day free trial, cancel anytime":"Prova gratuita di 14 giorni, annulla quando vuoi","Starting…":"Avvio…","Start free trial":"Avvia la prova gratuita","Something went wrong, please try again":"Qualcosa è andato storto, riprova","Your Projects":"I Tuoi Progetti","New Project":"Nuovo Progetto","No projects yet — create your first one.":"Nessun progetto ancora — crea il primo.",Delete:"Elimina",Projects:"Progetti",Saved:"Salvato","Save failed":"Salvataggio non riuscito","Export plan":"Esporta planimetria","Saving…":"Salvataggio…",Save:"Salva",Select:"Seleziona","Add Room":"Aggiungi Stanza","Add Door":"Aggiungi Porta","Add Window":"Aggiungi Finestra","Delete Room":"Elimina Stanza","Delete Opening":"Elimina Apertura",W:"L",H:"A","Reset camera":"Reimposta fotocamera","Untitled Project":"Progetto senza titolo","Add Polygon Room":"Aggiungi Stanza a Forma Libera","Add Stairs":"Aggiungi Scale","Delete Stairs":"Elimina Scale","Add Column":"Aggiungi Pilastro","Delete Column":"Elimina Pilastro","Ground Floor":"Piano Terra",Floor:"Piano","Add Floor":"Aggiungi Piano","Dollhouse view":"Vista in sezione","Render view":"Vista renderizzata","Show Foundation":"Mostra fondamenta","Export DXF":"Esporta DXF","Export IFC":"Esporta IFC","Back to Home":"Torna alla Home","Generate realistic image":"Genera immagine realistica","Optional — uses 1 credit from your weekly/monthly plan":"Opzionale — usa 1 credito del tuo piano settimanale/mensile","Turning your design into a photoreal render...":"Trasformazione del tuo progetto in un rendering fotorealistico...","Takes 20-40 seconds":"Richiede 20-40 secondi",Close:"Chiudi","Image upload failed. Please try again.":"Caricamento dell'immagine non riuscito, riprova","Error generating image. Please try again.":"Errore durante la generazione dell'immagine, riprova","Connection error. Please try again.":"Errore di connessione, riprova","You're out of credits":"Hai esaurito i crediti","Subscribe to generate photoreal renders of your floor plans.":"Abbonati per generare rendering fotorealistici delle tue planimetrie.",Weekly:"Settimanale",Monthly:"Mensile",credits:"crediti",Download:"Scarica",Bedroom:"Camera da letto","Living Room":"Soggiorno","Dining Room":"Sala da pranzo",Office:"Ufficio",Kitchen:"Cucina",Bathroom:"Bagno",Hallway:"Corridoio",Closet:"Ripostiglio",Garage:"Garage",Other:"Altro",Min:"Min.",Width:"Larghezza"},ru:{"Lamsa Engineers":"Lamsa Inzhenery","Please sign in to continue.":"Voydite, chtoby prodolzhit.","Sign in":"Vkhod","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Proektiruyte polnotsennye plany pomeshcheniy, prosmatrivayte ikh v 3D i eksportiruyte nastoyashchie arkhitekturnye dokumenty.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Vash dostup k Engineers zavershilsya. Oformite podpisku snova, chtoby prodolzhit proektirovat polnye plany.","Rectangular rooms, doors & windows, single-floor plans":"Pryamougolnye komnaty, dveri i okna, odnoetazhnye plany","Live 3D preview of your design":"Zhivoy 3D-predprosmotr vashego proekta","Printable floor plan export":"Eksport plana dlya pechati","Use Lamsa's existing furniture-styling tools per room":"Ispolzuyte sushchestvuyushchie instrumenty stilizatsii mebeli Lamsa dlya kazhdoy komnaty","/ year":"/ god","14-day free trial, cancel anytime":"14-dnevnyy besplatnyy probnyy period, otmena v lyuboy moment","Starting…":"Zapusk…","Start free trial":"Nachat besplatnyy probnyy period","Something went wrong, please try again":"Chto-to poshlo ne tak, poprobuyte snova","Your Projects":"Vashi Proekty","New Project":"Novyy Proekt","No projects yet — create your first one.":"Poka net proektov — sozdayte pervyy.",Delete:"Udalit",Projects:"Proekty",Saved:"Sokhraneno","Save failed":"Oshibka sokhraneniya","Export plan":"Eksportirovat plan","Saving…":"Sokhranenie…",Save:"Sokhranit",Select:"Vybrat","Add Room":"Dobavit Komnatu","Add Door":"Dobavit Dver","Add Window":"Dobavit Okno","Delete Room":"Udalit Komnatu","Delete Opening":"Udalit Proyom",W:"Sh",H:"V","Reset camera":"Sbrosit kameru","Untitled Project":"Proekt bez nazvaniya","Add Polygon Room":"Dobavit Komnatu Svobodnoy Formy","Add Stairs":"Dobavit Lestnitsu","Delete Stairs":"Udalit Lestnitsu","Add Column":"Dobavit Kolonnu","Delete Column":"Udalit Kolonnu","Ground Floor":"Pervyy Etazh",Floor:"Etazh","Add Floor":"Dobavit Etazh","Dollhouse view":"Razrez doma","Render view":"Render vid","Show Foundation":"Pokazat Fundament","Export DXF":"Eksportirovat DXF","Export IFC":"Eksportirovat IFC","Back to Home":"Na glavnuyu","Generate realistic image":"Sozdat realistichnoe izobrazhenie","Optional — uses 1 credit from your weekly/monthly plan":"Neobyazatelno — ispolzuet 1 kredit iz vashego nedelnogo/mesyachnogo plana","Turning your design into a photoreal render...":"Prevrashchaem vash proekt v fotorealistichnoe izobrazhenie...","Takes 20-40 seconds":"Zanimaet 20-40 sekund",Close:"Zakryt","Image upload failed. Please try again.":"Ne udalos zagruzit izobrazhenie, poprobuyte snova","Error generating image. Please try again.":"Oshibka pri sozdanii izobrazheniya, poprobuyte snova","Connection error. Please try again.":"Oshibka soedineniya, poprobuyte snova","You're out of credits":"U vas konchilis kredity","Subscribe to generate photoreal renders of your floor plans.":"Oformite podpisku, chtoby sozdavat realistichnye izobrazheniya vashikh planov.",Weekly:"Nedelnyy",Monthly:"Mesyachnyy",credits:"kreditov",Download:"Skachat",Bedroom:"Spalnya","Living Room":"Gostinaya","Dining Room":"Stolovaya",Office:"Kabinet",Kitchen:"Kukhnya",Bathroom:"Vannaya",Hallway:"Koridor",Closet:"Kladovaya",Garage:"Garazh",Other:"Drugoe",Min:"Min.",Width:"Shirina"}};function K2(){try{return localStorage.getItem("lamsa_lang")||"en"}catch{return"en"}}function Z2(){const[t,e]=Re.useState(K2);Re.useEffect(()=>{document.documentElement.setAttribute("dir",t==="ar"?"rtl":"ltr"),document.documentElement.setAttribute("lang",t)},[t]),Re.useEffect(()=>{function i(r){r.key==="lamsa_lang"&&e(r.newValue||"en")}return window.addEventListener("storage",i),()=>window.removeEventListener("storage",i)},[]);const n=Re.useCallback(i=>t==="ar"?q2[i]||i:t==="en"?i:qg[t]&&qg[t][i]||i,[t]);return{lang:t,t:n}}function J2(t){return!!t&&(t.status==="active"||t.status==="trialing")}function Q2(){const{t}=Z2(),[e,n]=Re.useState("loading"),[i,r]=Re.useState(null),[o,s]=Re.useState([]),[a,l]=Re.useState(null);Re.useEffect(()=>{qS().then(m=>{if(m.status===401){n("signin");return}if(!m.ok||!m.data){n("signin");return}const y=m.data.engineerSubscription;if(r(y?y.status:null),!J2(y)){n("paywall");return}u()})},[]);function u(){KS().then(m=>{m.ok&&m.data&&s(m.data.projects||[]),n("list")})}function c(){l({projectId:null,project:my(t("Untitled Project"))}),n("editor")}function h(m){ZS(m).then(y=>{if(y.status===403){n("paywall");return}!y.ok||!y.data||(l({projectId:m,project:y.data.project}),n("editor"))})}function f(m){QS(m).then(()=>u())}async function p(m,y){const g=await JS(m,y);return g.status===403?(n("paywall"),{ok:!1,error:"Engineers access required"}):(g.ok&&g.data&&l(d=>({...d,projectId:g.data.projectId})),g.ok?{ok:!0}:{ok:!1,error:g.data&&g.data.error||"Save failed"})}return e==="loading"?null:e==="signin"?re.jsxs("div",{style:{maxWidth:420,margin:"100px auto",textAlign:"center",fontFamily:"sans-serif"},children:[re.jsx("h1",{style:{fontSize:20,fontWeight:800,marginBottom:12},children:t("Lamsa Engineers")}),re.jsx("p",{style:{color:"#6b7280",marginBottom:20},children:t("Please sign in to continue.")}),re.jsx("a",{href:"/lamsa-auth.html?return=engineers/index.html",style:{display:"inline-block",background:"#c9a96e",color:"#1b1e22",padding:"12px 24px",borderRadius:10,fontWeight:800,textDecoration:"none"},children:t("Sign in")})]}):e==="paywall"?re.jsx(tE,{status:i,t}):e==="editor"&&a?re.jsx(Y2,{initialProject:a.project,projectId:a.projectId,onBack:()=>u(),onSave:p,t}):re.jsx(nE,{projects:o,onOpen:h,onCreate:c,onDelete:f,t})}l_(document.getElementById("root")).render(re.jsx(Fy.StrictMode,{children:re.jsx(Q2,{})}));
