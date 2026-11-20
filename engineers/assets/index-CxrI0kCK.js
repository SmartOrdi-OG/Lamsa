(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function y_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Zm={exports:{}},ql={},Qm={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ea=Symbol.for("react.element"),S_=Symbol.for("react.portal"),M_=Symbol.for("react.fragment"),E_=Symbol.for("react.strict_mode"),w_=Symbol.for("react.profiler"),T_=Symbol.for("react.provider"),A_=Symbol.for("react.context"),R_=Symbol.for("react.forward_ref"),C_=Symbol.for("react.suspense"),b_=Symbol.for("react.memo"),P_=Symbol.for("react.lazy"),nh=Symbol.iterator;function L_(t){return t===null||typeof t!="object"?null:(t=nh&&t[nh]||t["@@iterator"],typeof t=="function"?t:null)}var eg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tg=Object.assign,ng={};function Ws(t,e,n){this.props=t,this.context=e,this.refs=ng,this.updater=n||eg}Ws.prototype.isReactComponent={};Ws.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ws.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ig(){}ig.prototype=Ws.prototype;function jf(t,e,n){this.props=t,this.context=e,this.refs=ng,this.updater=n||eg}var Yf=jf.prototype=new ig;Yf.constructor=jf;tg(Yf,Ws.prototype);Yf.isPureReactComponent=!0;var ih=Array.isArray,rg=Object.prototype.hasOwnProperty,qf={current:null},sg={key:!0,ref:!0,__self:!0,__source:!0};function og(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)rg.call(e,i)&&!sg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ea,type:t,key:s,ref:o,props:r,_owner:qf.current}}function D_(t,e){return{$$typeof:ea,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function $f(t){return typeof t=="object"&&t!==null&&t.$$typeof===ea}function N_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var rh=/\/+/g;function Eu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?N_(""+t.key):e.toString(36)}function tl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ea:case S_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Eu(o,0):i,ih(r)?(n="",t!=null&&(n=t.replace(rh,"$&/")+"/"),tl(r,e,n,"",function(u){return u})):r!=null&&($f(r)&&(r=D_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(rh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",ih(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Eu(s,a);o+=tl(s,e,n,l,r)}else if(l=L_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Eu(s,a++),o+=tl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ua(t,e,n){if(t==null)return t;var i=[],r=0;return tl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function U_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nn={current:null},nl={transition:null},I_={ReactCurrentDispatcher:nn,ReactCurrentBatchConfig:nl,ReactCurrentOwner:qf};function ag(){throw Error("act(...) is not supported in production builds of React.")}$e.Children={map:ua,forEach:function(t,e,n){ua(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ua(t,function(){e++}),e},toArray:function(t){return ua(t,function(e){return e})||[]},only:function(t){if(!$f(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$e.Component=Ws;$e.Fragment=M_;$e.Profiler=w_;$e.PureComponent=jf;$e.StrictMode=E_;$e.Suspense=C_;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I_;$e.act=ag;$e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=tg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=qf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)rg.call(e,l)&&!sg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ea,type:t.type,key:r,ref:s,props:i,_owner:o}};$e.createContext=function(t){return t={$$typeof:A_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:T_,_context:t},t.Consumer=t};$e.createElement=og;$e.createFactory=function(t){var e=og.bind(null,t);return e.type=t,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:R_,render:t}};$e.isValidElement=$f;$e.lazy=function(t){return{$$typeof:P_,_payload:{_status:-1,_result:t},_init:U_}};$e.memo=function(t,e){return{$$typeof:b_,type:t,compare:e===void 0?null:e}};$e.startTransition=function(t){var e=nl.transition;nl.transition={};try{t()}finally{nl.transition=e}};$e.unstable_act=ag;$e.useCallback=function(t,e){return nn.current.useCallback(t,e)};$e.useContext=function(t){return nn.current.useContext(t)};$e.useDebugValue=function(){};$e.useDeferredValue=function(t){return nn.current.useDeferredValue(t)};$e.useEffect=function(t,e){return nn.current.useEffect(t,e)};$e.useId=function(){return nn.current.useId()};$e.useImperativeHandle=function(t,e,n){return nn.current.useImperativeHandle(t,e,n)};$e.useInsertionEffect=function(t,e){return nn.current.useInsertionEffect(t,e)};$e.useLayoutEffect=function(t,e){return nn.current.useLayoutEffect(t,e)};$e.useMemo=function(t,e){return nn.current.useMemo(t,e)};$e.useReducer=function(t,e,n){return nn.current.useReducer(t,e,n)};$e.useRef=function(t){return nn.current.useRef(t)};$e.useState=function(t){return nn.current.useState(t)};$e.useSyncExternalStore=function(t,e,n){return nn.current.useSyncExternalStore(t,e,n)};$e.useTransition=function(){return nn.current.useTransition()};$e.version="18.3.1";Qm.exports=$e;var qe=Qm.exports;const O_=y_(qe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F_=qe,z_=Symbol.for("react.element"),k_=Symbol.for("react.fragment"),B_=Object.prototype.hasOwnProperty,H_=F_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,G_={key:!0,ref:!0,__self:!0,__source:!0};function lg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)B_.call(e,i)&&!G_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:z_,type:t,key:s,ref:o,props:r,_owner:H_.current}}ql.Fragment=k_;ql.jsx=lg;ql.jsxs=lg;Zm.exports=ql;var Te=Zm.exports,ug={exports:{}},Mn={},cg={exports:{}},fg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,B){var H=N.length;N.push(B);e:for(;0<H;){var $=H-1>>>1,K=N[$];if(0<r(K,B))N[$]=B,N[H]=K,H=$;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var B=N[0],H=N.pop();if(H!==B){N[0]=H;e:for(var $=0,K=N.length,W=K>>>1;$<W;){var J=2*($+1)-1,oe=N[J],fe=J+1,de=N[fe];if(0>r(oe,H))fe<K&&0>r(de,oe)?(N[$]=de,N[fe]=H,$=fe):(N[$]=oe,N[J]=H,$=J);else if(fe<K&&0>r(de,H))N[$]=de,N[fe]=H,$=fe;else break e}}return B}function r(N,B){var H=N.sortIndex-B.sortIndex;return H!==0?H:N.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,p=!1,_=!1,x=!1,v=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var B=n(u);B!==null;){if(B.callback===null)i(u);else if(B.startTime<=N)i(u),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(u)}}function y(N){if(x=!1,m(N),!_)if(n(l)!==null)_=!0,G(T);else{var B=n(u);B!==null&&Y(y,B.startTime-N)}}function T(N,B){_=!1,x&&(x=!1,f(b),b=-1),p=!0;var H=d;try{for(m(B),h=n(l);h!==null&&(!(h.expirationTime>B)||N&&!U());){var $=h.callback;if(typeof $=="function"){h.callback=null,d=h.priorityLevel;var K=$(h.expirationTime<=B);B=t.unstable_now(),typeof K=="function"?h.callback=K:h===n(l)&&i(l),m(B)}else i(l);h=n(l)}if(h!==null)var W=!0;else{var J=n(u);J!==null&&Y(y,J.startTime-B),W=!1}return W}finally{h=null,d=H,p=!1}}var S=!1,M=null,b=-1,E=5,w=-1;function U(){return!(t.unstable_now()-w<E)}function z(){if(M!==null){var N=t.unstable_now();w=N;var B=!0;try{B=M(!0,N)}finally{B?Q():(S=!1,M=null)}}else S=!1}var Q;if(typeof g=="function")Q=function(){g(z)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,O=D.port2;D.port1.onmessage=z,Q=function(){O.postMessage(null)}}else Q=function(){v(z,0)};function G(N){M=N,S||(S=!0,Q())}function Y(N,B){b=v(function(){N(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,G(T))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(d){case 1:case 2:case 3:var B=3;break;default:B=d}var H=d;d=B;try{return N()}finally{d=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,B){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var H=d;d=N;try{return B()}finally{d=H}},t.unstable_scheduleCallback=function(N,B,H){var $=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?$+H:$):H=$,N){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=H+K,N={id:c++,callback:B,priorityLevel:N,startTime:H,expirationTime:K,sortIndex:-1},H>$?(N.sortIndex=H,e(u,N),n(l)===null&&N===n(u)&&(x?(f(b),b=-1):x=!0,Y(y,H-$))):(N.sortIndex=K,e(l,N),_||p||(_=!0,G(T))),N},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(N){var B=d;return function(){var H=d;d=B;try{return N.apply(this,arguments)}finally{d=H}}}})(fg);cg.exports=fg;var V_=cg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W_=qe,Sn=V_;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dg=new Set,Lo={};function kr(t,e){Ls(t,e),Ls(t+"Capture",e)}function Ls(t,e){for(Lo[t]=e,t=0;t<e.length;t++)dg.add(e[t])}var Si=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oc=Object.prototype.hasOwnProperty,X_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sh={},oh={};function j_(t){return Oc.call(oh,t)?!0:Oc.call(sh,t)?!1:X_.test(t)?oh[t]=!0:(sh[t]=!0,!1)}function Y_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function q_(t,e,n,i){if(e===null||typeof e>"u"||Y_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Bt[t]=new rn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Bt[e]=new rn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Bt[t]=new rn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Bt[t]=new rn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Bt[t]=new rn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Bt[t]=new rn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Bt[t]=new rn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Bt[t]=new rn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Bt[t]=new rn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Kf=/[\-:]([a-z])/g;function Jf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Kf,Jf);Bt[e]=new rn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Kf,Jf);Bt[e]=new rn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Kf,Jf);Bt[e]=new rn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Bt[t]=new rn(t,1,!1,t.toLowerCase(),null,!1,!1)});Bt.xlinkHref=new rn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Bt[t]=new rn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Zf(t,e,n,i){var r=Bt.hasOwnProperty(e)?Bt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(q_(e,n,r,i)&&(n=null),i||r===null?j_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ai=W_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ca=Symbol.for("react.element"),os=Symbol.for("react.portal"),as=Symbol.for("react.fragment"),Qf=Symbol.for("react.strict_mode"),Fc=Symbol.for("react.profiler"),hg=Symbol.for("react.provider"),pg=Symbol.for("react.context"),ed=Symbol.for("react.forward_ref"),zc=Symbol.for("react.suspense"),kc=Symbol.for("react.suspense_list"),td=Symbol.for("react.memo"),Ui=Symbol.for("react.lazy"),mg=Symbol.for("react.offscreen"),ah=Symbol.iterator;function Qs(t){return t===null||typeof t!="object"?null:(t=ah&&t[ah]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Object.assign,wu;function ho(t){if(wu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);wu=e&&e[1]||""}return`
`+wu+t}var Tu=!1;function Au(t,e){if(!t||Tu)return"";Tu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Tu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ho(t):""}function $_(t){switch(t.tag){case 5:return ho(t.type);case 16:return ho("Lazy");case 13:return ho("Suspense");case 19:return ho("SuspenseList");case 0:case 2:case 15:return t=Au(t.type,!1),t;case 11:return t=Au(t.type.render,!1),t;case 1:return t=Au(t.type,!0),t;default:return""}}function Bc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case as:return"Fragment";case os:return"Portal";case Fc:return"Profiler";case Qf:return"StrictMode";case zc:return"Suspense";case kc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case pg:return(t.displayName||"Context")+".Consumer";case hg:return(t._context.displayName||"Context")+".Provider";case ed:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case td:return e=t.displayName||null,e!==null?e:Bc(t.type)||"Memo";case Ui:e=t._payload,t=t._init;try{return Bc(t(e))}catch{}}return null}function K_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bc(e);case 8:return e===Qf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function tr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function J_(t){var e=gg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function fa(t){t._valueTracker||(t._valueTracker=J_(t))}function vg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=gg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ml(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hc(t,e){var n=e.checked;return ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function lh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=tr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function _g(t,e){e=e.checked,e!=null&&Zf(t,"checked",e,!1)}function Gc(t,e){_g(t,e);var n=tr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vc(t,e.type,tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function uh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vc(t,e,n){(e!=="number"||ml(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var po=Array.isArray;function Ms(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+tr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Wc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return ht({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ch(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(po(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:tr(n)}}function xg(t,e){var n=tr(e.value),i=tr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function fh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function yg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?yg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var da,Sg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(da=da||document.createElement("div"),da.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=da.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Do(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var _o={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Z_=["Webkit","ms","Moz","O"];Object.keys(_o).forEach(function(t){Z_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),_o[e]=_o[t]})});function Mg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||_o.hasOwnProperty(t)&&_o[t]?(""+e).trim():e+"px"}function Eg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Mg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Q_=ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jc(t,e){if(e){if(Q_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function Yc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qc=null;function nd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $c=null,Es=null,ws=null;function dh(t){if(t=ia(t)){if(typeof $c!="function")throw Error(se(280));var e=t.stateNode;e&&(e=Ql(e),$c(t.stateNode,t.type,e))}}function wg(t){Es?ws?ws.push(t):ws=[t]:Es=t}function Tg(){if(Es){var t=Es,e=ws;if(ws=Es=null,dh(t),e)for(t=0;t<e.length;t++)dh(e[t])}}function Ag(t,e){return t(e)}function Rg(){}var Ru=!1;function Cg(t,e,n){if(Ru)return t(e,n);Ru=!0;try{return Ag(t,e,n)}finally{Ru=!1,(Es!==null||ws!==null)&&(Rg(),Tg())}}function No(t,e){var n=t.stateNode;if(n===null)return null;var i=Ql(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Kc=!1;if(Si)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){Kc=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{Kc=!1}function ex(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var xo=!1,gl=null,vl=!1,Jc=null,tx={onError:function(t){xo=!0,gl=t}};function nx(t,e,n,i,r,s,o,a,l){xo=!1,gl=null,ex.apply(tx,arguments)}function ix(t,e,n,i,r,s,o,a,l){if(nx.apply(this,arguments),xo){if(xo){var u=gl;xo=!1,gl=null}else throw Error(se(198));vl||(vl=!0,Jc=u)}}function Br(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function bg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hh(t){if(Br(t)!==t)throw Error(se(188))}function rx(t){var e=t.alternate;if(!e){if(e=Br(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return hh(r),t;if(s===i)return hh(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function Pg(t){return t=rx(t),t!==null?Lg(t):null}function Lg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Lg(t);if(e!==null)return e;t=t.sibling}return null}var Dg=Sn.unstable_scheduleCallback,ph=Sn.unstable_cancelCallback,sx=Sn.unstable_shouldYield,ox=Sn.unstable_requestPaint,_t=Sn.unstable_now,ax=Sn.unstable_getCurrentPriorityLevel,id=Sn.unstable_ImmediatePriority,Ng=Sn.unstable_UserBlockingPriority,_l=Sn.unstable_NormalPriority,lx=Sn.unstable_LowPriority,Ug=Sn.unstable_IdlePriority,$l=null,ri=null;function ux(t){if(ri&&typeof ri.onCommitFiberRoot=="function")try{ri.onCommitFiberRoot($l,t,void 0,(t.current.flags&128)===128)}catch{}}var Yn=Math.clz32?Math.clz32:dx,cx=Math.log,fx=Math.LN2;function dx(t){return t>>>=0,t===0?32:31-(cx(t)/fx|0)|0}var ha=64,pa=4194304;function mo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function xl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=mo(a):(s&=o,s!==0&&(i=mo(s)))}else o=n&~r,o!==0?i=mo(o):s!==0&&(i=mo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Yn(e),r=1<<n,i|=t[n],e&=~r;return i}function hx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function px(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Yn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=hx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Zc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ig(){var t=ha;return ha<<=1,!(ha&4194240)&&(ha=64),t}function Cu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ta(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Yn(e),t[e]=n}function mx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Yn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function rd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Yn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Qe=0;function Og(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Fg,sd,zg,kg,Bg,Qc=!1,ma=[],Vi=null,Wi=null,Xi=null,Uo=new Map,Io=new Map,Oi=[],gx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mh(t,e){switch(t){case"focusin":case"focusout":Vi=null;break;case"dragenter":case"dragleave":Wi=null;break;case"mouseover":case"mouseout":Xi=null;break;case"pointerover":case"pointerout":Uo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Io.delete(e.pointerId)}}function to(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ia(e),e!==null&&sd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function vx(t,e,n,i,r){switch(e){case"focusin":return Vi=to(Vi,t,e,n,i,r),!0;case"dragenter":return Wi=to(Wi,t,e,n,i,r),!0;case"mouseover":return Xi=to(Xi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Uo.set(s,to(Uo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Io.set(s,to(Io.get(s)||null,t,e,n,i,r)),!0}return!1}function Hg(t){var e=yr(t.target);if(e!==null){var n=Br(e);if(n!==null){if(e=n.tag,e===13){if(e=bg(n),e!==null){t.blockedOn=e,Bg(t.priority,function(){zg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function il(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ef(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);qc=i,n.target.dispatchEvent(i),qc=null}else return e=ia(n),e!==null&&sd(e),t.blockedOn=n,!1;e.shift()}return!0}function gh(t,e,n){il(t)&&n.delete(e)}function _x(){Qc=!1,Vi!==null&&il(Vi)&&(Vi=null),Wi!==null&&il(Wi)&&(Wi=null),Xi!==null&&il(Xi)&&(Xi=null),Uo.forEach(gh),Io.forEach(gh)}function no(t,e){t.blockedOn===e&&(t.blockedOn=null,Qc||(Qc=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,_x)))}function Oo(t){function e(r){return no(r,t)}if(0<ma.length){no(ma[0],t);for(var n=1;n<ma.length;n++){var i=ma[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Vi!==null&&no(Vi,t),Wi!==null&&no(Wi,t),Xi!==null&&no(Xi,t),Uo.forEach(e),Io.forEach(e),n=0;n<Oi.length;n++)i=Oi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Oi.length&&(n=Oi[0],n.blockedOn===null);)Hg(n),n.blockedOn===null&&Oi.shift()}var Ts=Ai.ReactCurrentBatchConfig,yl=!0;function xx(t,e,n,i){var r=Qe,s=Ts.transition;Ts.transition=null;try{Qe=1,od(t,e,n,i)}finally{Qe=r,Ts.transition=s}}function yx(t,e,n,i){var r=Qe,s=Ts.transition;Ts.transition=null;try{Qe=4,od(t,e,n,i)}finally{Qe=r,Ts.transition=s}}function od(t,e,n,i){if(yl){var r=ef(t,e,n,i);if(r===null)zu(t,e,i,Sl,n),mh(t,i);else if(vx(r,t,e,n,i))i.stopPropagation();else if(mh(t,i),e&4&&-1<gx.indexOf(t)){for(;r!==null;){var s=ia(r);if(s!==null&&Fg(s),s=ef(t,e,n,i),s===null&&zu(t,e,i,Sl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else zu(t,e,i,null,n)}}var Sl=null;function ef(t,e,n,i){if(Sl=null,t=nd(i),t=yr(t),t!==null)if(e=Br(t),e===null)t=null;else if(n=e.tag,n===13){if(t=bg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Sl=t,null}function Gg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ax()){case id:return 1;case Ng:return 4;case _l:case lx:return 16;case Ug:return 536870912;default:return 16}default:return 16}}var zi=null,ad=null,rl=null;function Vg(){if(rl)return rl;var t,e=ad,n=e.length,i,r="value"in zi?zi.value:zi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return rl=r.slice(t,1<i?1-i:void 0)}function sl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ga(){return!0}function vh(){return!1}function En(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ga:vh,this.isPropagationStopped=vh,this}return ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ga)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ga)},persist:function(){},isPersistent:ga}),e}var Xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ld=En(Xs),na=ht({},Xs,{view:0,detail:0}),Sx=En(na),bu,Pu,io,Kl=ht({},na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ud,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==io&&(io&&t.type==="mousemove"?(bu=t.screenX-io.screenX,Pu=t.screenY-io.screenY):Pu=bu=0,io=t),bu)},movementY:function(t){return"movementY"in t?t.movementY:Pu}}),_h=En(Kl),Mx=ht({},Kl,{dataTransfer:0}),Ex=En(Mx),wx=ht({},na,{relatedTarget:0}),Lu=En(wx),Tx=ht({},Xs,{animationName:0,elapsedTime:0,pseudoElement:0}),Ax=En(Tx),Rx=ht({},Xs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Cx=En(Rx),bx=ht({},Xs,{data:0}),xh=En(bx),Px={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Dx[t])?!!e[t]:!1}function ud(){return Nx}var Ux=ht({},na,{key:function(t){if(t.key){var e=Px[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Lx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ud,charCode:function(t){return t.type==="keypress"?sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ix=En(Ux),Ox=ht({},Kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yh=En(Ox),Fx=ht({},na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ud}),zx=En(Fx),kx=ht({},Xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bx=En(kx),Hx=ht({},Kl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Gx=En(Hx),Vx=[9,13,27,32],cd=Si&&"CompositionEvent"in window,yo=null;Si&&"documentMode"in document&&(yo=document.documentMode);var Wx=Si&&"TextEvent"in window&&!yo,Wg=Si&&(!cd||yo&&8<yo&&11>=yo),Sh=" ",Mh=!1;function Xg(t,e){switch(t){case"keyup":return Vx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ls=!1;function Xx(t,e){switch(t){case"compositionend":return jg(e);case"keypress":return e.which!==32?null:(Mh=!0,Sh);case"textInput":return t=e.data,t===Sh&&Mh?null:t;default:return null}}function jx(t,e){if(ls)return t==="compositionend"||!cd&&Xg(t,e)?(t=Vg(),rl=ad=zi=null,ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Wg&&e.locale!=="ko"?null:e.data;default:return null}}var Yx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Eh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Yx[t.type]:e==="textarea"}function Yg(t,e,n,i){wg(i),e=Ml(e,"onChange"),0<e.length&&(n=new ld("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var So=null,Fo=null;function qx(t){r0(t,0)}function Jl(t){var e=fs(t);if(vg(e))return t}function $x(t,e){if(t==="change")return e}var qg=!1;if(Si){var Du;if(Si){var Nu="oninput"in document;if(!Nu){var wh=document.createElement("div");wh.setAttribute("oninput","return;"),Nu=typeof wh.oninput=="function"}Du=Nu}else Du=!1;qg=Du&&(!document.documentMode||9<document.documentMode)}function Th(){So&&(So.detachEvent("onpropertychange",$g),Fo=So=null)}function $g(t){if(t.propertyName==="value"&&Jl(Fo)){var e=[];Yg(e,Fo,t,nd(t)),Cg(qx,e)}}function Kx(t,e,n){t==="focusin"?(Th(),So=e,Fo=n,So.attachEvent("onpropertychange",$g)):t==="focusout"&&Th()}function Jx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jl(Fo)}function Zx(t,e){if(t==="click")return Jl(e)}function Qx(t,e){if(t==="input"||t==="change")return Jl(e)}function ey(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kn=typeof Object.is=="function"?Object.is:ey;function zo(t,e){if(Kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Oc.call(e,r)||!Kn(t[r],e[r]))return!1}return!0}function Ah(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rh(t,e){var n=Ah(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ah(n)}}function Kg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Kg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Jg(){for(var t=window,e=ml();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ml(t.document)}return e}function fd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ty(t){var e=Jg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Kg(n.ownerDocument.documentElement,n)){if(i!==null&&fd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Rh(n,s);var o=Rh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ny=Si&&"documentMode"in document&&11>=document.documentMode,us=null,tf=null,Mo=null,nf=!1;function Ch(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nf||us==null||us!==ml(i)||(i=us,"selectionStart"in i&&fd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Mo&&zo(Mo,i)||(Mo=i,i=Ml(tf,"onSelect"),0<i.length&&(e=new ld("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=us)))}function va(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var cs={animationend:va("Animation","AnimationEnd"),animationiteration:va("Animation","AnimationIteration"),animationstart:va("Animation","AnimationStart"),transitionend:va("Transition","TransitionEnd")},Uu={},Zg={};Si&&(Zg=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function Zl(t){if(Uu[t])return Uu[t];if(!cs[t])return t;var e=cs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Zg)return Uu[t]=e[n];return t}var Qg=Zl("animationend"),e0=Zl("animationiteration"),t0=Zl("animationstart"),n0=Zl("transitionend"),i0=new Map,bh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(t,e){i0.set(t,e),kr(e,[t])}for(var Iu=0;Iu<bh.length;Iu++){var Ou=bh[Iu],iy=Ou.toLowerCase(),ry=Ou[0].toUpperCase()+Ou.slice(1);rr(iy,"on"+ry)}rr(Qg,"onAnimationEnd");rr(e0,"onAnimationIteration");rr(t0,"onAnimationStart");rr("dblclick","onDoubleClick");rr("focusin","onFocus");rr("focusout","onBlur");rr(n0,"onTransitionEnd");Ls("onMouseEnter",["mouseout","mouseover"]);Ls("onMouseLeave",["mouseout","mouseover"]);Ls("onPointerEnter",["pointerout","pointerover"]);Ls("onPointerLeave",["pointerout","pointerover"]);kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sy=new Set("cancel close invalid load scroll toggle".split(" ").concat(go));function Ph(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,ix(i,e,void 0,t),t.currentTarget=null}function r0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Ph(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Ph(r,a,u),s=l}}}if(vl)throw t=Jc,vl=!1,Jc=null,t}function st(t,e){var n=e[lf];n===void 0&&(n=e[lf]=new Set);var i=t+"__bubble";n.has(i)||(s0(e,t,2,!1),n.add(i))}function Fu(t,e,n){var i=0;e&&(i|=4),s0(n,t,i,e)}var _a="_reactListening"+Math.random().toString(36).slice(2);function ko(t){if(!t[_a]){t[_a]=!0,dg.forEach(function(n){n!=="selectionchange"&&(sy.has(n)||Fu(n,!1,t),Fu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[_a]||(e[_a]=!0,Fu("selectionchange",!1,e))}}function s0(t,e,n,i){switch(Gg(e)){case 1:var r=xx;break;case 4:r=yx;break;default:r=od}n=r.bind(null,e,n,t),r=void 0,!Kc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function zu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=yr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Cg(function(){var u=s,c=nd(n),h=[];e:{var d=i0.get(t);if(d!==void 0){var p=ld,_=t;switch(t){case"keypress":if(sl(n)===0)break e;case"keydown":case"keyup":p=Ix;break;case"focusin":_="focus",p=Lu;break;case"focusout":_="blur",p=Lu;break;case"beforeblur":case"afterblur":p=Lu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=_h;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Ex;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=zx;break;case Qg:case e0:case t0:p=Ax;break;case n0:p=Bx;break;case"scroll":p=Sx;break;case"wheel":p=Gx;break;case"copy":case"cut":case"paste":p=Cx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=yh}var x=(e&4)!==0,v=!x&&t==="scroll",f=x?d!==null?d+"Capture":null:d;x=[];for(var g=u,m;g!==null;){m=g;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,f!==null&&(y=No(g,f),y!=null&&x.push(Bo(g,y,m)))),v)break;g=g.return}0<x.length&&(d=new p(d,_,null,n,c),h.push({event:d,listeners:x}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==qc&&(_=n.relatedTarget||n.fromElement)&&(yr(_)||_[Mi]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=u,_=_?yr(_):null,_!==null&&(v=Br(_),_!==v||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(x=_h,y="onMouseLeave",f="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=yh,y="onPointerLeave",f="onPointerEnter",g="pointer"),v=p==null?d:fs(p),m=_==null?d:fs(_),d=new x(y,g+"leave",p,n,c),d.target=v,d.relatedTarget=m,y=null,yr(c)===u&&(x=new x(f,g+"enter",_,n,c),x.target=m,x.relatedTarget=v,y=x),v=y,p&&_)t:{for(x=p,f=_,g=0,m=x;m;m=Gr(m))g++;for(m=0,y=f;y;y=Gr(y))m++;for(;0<g-m;)x=Gr(x),g--;for(;0<m-g;)f=Gr(f),m--;for(;g--;){if(x===f||f!==null&&x===f.alternate)break t;x=Gr(x),f=Gr(f)}x=null}else x=null;p!==null&&Lh(h,d,p,x,!1),_!==null&&v!==null&&Lh(h,v,_,x,!0)}}e:{if(d=u?fs(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var T=$x;else if(Eh(d))if(qg)T=Qx;else{T=Jx;var S=Kx}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=Zx);if(T&&(T=T(t,u))){Yg(h,T,n,c);break e}S&&S(t,d,u),t==="focusout"&&(S=d._wrapperState)&&S.controlled&&d.type==="number"&&Vc(d,"number",d.value)}switch(S=u?fs(u):window,t){case"focusin":(Eh(S)||S.contentEditable==="true")&&(us=S,tf=u,Mo=null);break;case"focusout":Mo=tf=us=null;break;case"mousedown":nf=!0;break;case"contextmenu":case"mouseup":case"dragend":nf=!1,Ch(h,n,c);break;case"selectionchange":if(ny)break;case"keydown":case"keyup":Ch(h,n,c)}var M;if(cd)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else ls?Xg(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Wg&&n.locale!=="ko"&&(ls||b!=="onCompositionStart"?b==="onCompositionEnd"&&ls&&(M=Vg()):(zi=c,ad="value"in zi?zi.value:zi.textContent,ls=!0)),S=Ml(u,b),0<S.length&&(b=new xh(b,t,null,n,c),h.push({event:b,listeners:S}),M?b.data=M:(M=jg(n),M!==null&&(b.data=M)))),(M=Wx?Xx(t,n):jx(t,n))&&(u=Ml(u,"onBeforeInput"),0<u.length&&(c=new xh("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=M))}r0(h,e)})}function Bo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ml(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=No(t,n),s!=null&&i.unshift(Bo(t,s,r)),s=No(t,e),s!=null&&i.push(Bo(t,s,r))),t=t.return}return i}function Gr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Lh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=No(n,s),l!=null&&o.unshift(Bo(n,l,a))):r||(l=No(n,s),l!=null&&o.push(Bo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var oy=/\r\n?/g,ay=/\u0000|\uFFFD/g;function Dh(t){return(typeof t=="string"?t:""+t).replace(oy,`
`).replace(ay,"")}function xa(t,e,n){if(e=Dh(e),Dh(t)!==e&&n)throw Error(se(425))}function El(){}var rf=null,sf=null;function of(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var af=typeof setTimeout=="function"?setTimeout:void 0,ly=typeof clearTimeout=="function"?clearTimeout:void 0,Nh=typeof Promise=="function"?Promise:void 0,uy=typeof queueMicrotask=="function"?queueMicrotask:typeof Nh<"u"?function(t){return Nh.resolve(null).then(t).catch(cy)}:af;function cy(t){setTimeout(function(){throw t})}function ku(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Oo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Oo(e)}function ji(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Uh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var js=Math.random().toString(36).slice(2),ii="__reactFiber$"+js,Ho="__reactProps$"+js,Mi="__reactContainer$"+js,lf="__reactEvents$"+js,fy="__reactListeners$"+js,dy="__reactHandles$"+js;function yr(t){var e=t[ii];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Mi]||n[ii]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Uh(t);t!==null;){if(n=t[ii])return n;t=Uh(t)}return e}t=n,n=t.parentNode}return null}function ia(t){return t=t[ii]||t[Mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function Ql(t){return t[Ho]||null}var uf=[],ds=-1;function sr(t){return{current:t}}function at(t){0>ds||(t.current=uf[ds],uf[ds]=null,ds--)}function rt(t,e){ds++,uf[ds]=t.current,t.current=e}var nr={},qt=sr(nr),un=sr(!1),Pr=nr;function Ds(t,e){var n=t.type.contextTypes;if(!n)return nr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function cn(t){return t=t.childContextTypes,t!=null}function wl(){at(un),at(qt)}function Ih(t,e,n){if(qt.current!==nr)throw Error(se(168));rt(qt,e),rt(un,n)}function o0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,K_(t)||"Unknown",r));return ht({},n,i)}function Tl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||nr,Pr=qt.current,rt(qt,t),rt(un,un.current),!0}function Oh(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=o0(t,e,Pr),i.__reactInternalMemoizedMergedChildContext=t,at(un),at(qt),rt(qt,t)):at(un),rt(un,n)}var mi=null,eu=!1,Bu=!1;function a0(t){mi===null?mi=[t]:mi.push(t)}function hy(t){eu=!0,a0(t)}function or(){if(!Bu&&mi!==null){Bu=!0;var t=0,e=Qe;try{var n=mi;for(Qe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}mi=null,eu=!1}catch(r){throw mi!==null&&(mi=mi.slice(t+1)),Dg(id,or),r}finally{Qe=e,Bu=!1}}return null}var hs=[],ps=0,Al=null,Rl=0,An=[],Rn=0,Lr=null,vi=1,_i="";function hr(t,e){hs[ps++]=Rl,hs[ps++]=Al,Al=t,Rl=e}function l0(t,e,n){An[Rn++]=vi,An[Rn++]=_i,An[Rn++]=Lr,Lr=t;var i=vi;t=_i;var r=32-Yn(i)-1;i&=~(1<<r),n+=1;var s=32-Yn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,vi=1<<32-Yn(e)+r|n<<r|i,_i=s+t}else vi=1<<s|n<<r|i,_i=t}function dd(t){t.return!==null&&(hr(t,1),l0(t,1,0))}function hd(t){for(;t===Al;)Al=hs[--ps],hs[ps]=null,Rl=hs[--ps],hs[ps]=null;for(;t===Lr;)Lr=An[--Rn],An[Rn]=null,_i=An[--Rn],An[Rn]=null,vi=An[--Rn],An[Rn]=null}var xn=null,_n=null,lt=!1,Gn=null;function u0(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Fh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xn=t,_n=ji(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xn=t,_n=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Lr!==null?{id:vi,overflow:_i}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xn=t,_n=null,!0):!1;default:return!1}}function cf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ff(t){if(lt){var e=_n;if(e){var n=e;if(!Fh(t,e)){if(cf(t))throw Error(se(418));e=ji(n.nextSibling);var i=xn;e&&Fh(t,e)?u0(i,n):(t.flags=t.flags&-4097|2,lt=!1,xn=t)}}else{if(cf(t))throw Error(se(418));t.flags=t.flags&-4097|2,lt=!1,xn=t}}}function zh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xn=t}function ya(t){if(t!==xn)return!1;if(!lt)return zh(t),lt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!of(t.type,t.memoizedProps)),e&&(e=_n)){if(cf(t))throw c0(),Error(se(418));for(;e;)u0(t,e),e=ji(e.nextSibling)}if(zh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_n=ji(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_n=null}}else _n=xn?ji(t.stateNode.nextSibling):null;return!0}function c0(){for(var t=_n;t;)t=ji(t.nextSibling)}function Ns(){_n=xn=null,lt=!1}function pd(t){Gn===null?Gn=[t]:Gn.push(t)}var py=Ai.ReactCurrentBatchConfig;function ro(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function Sa(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function kh(t){var e=t._init;return e(t._payload)}function f0(t){function e(f,g){if(t){var m=f.deletions;m===null?(f.deletions=[g],f.flags|=16):m.push(g)}}function n(f,g){if(!t)return null;for(;g!==null;)e(f,g),g=g.sibling;return null}function i(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function r(f,g){return f=Ki(f,g),f.index=0,f.sibling=null,f}function s(f,g,m){return f.index=m,t?(m=f.alternate,m!==null?(m=m.index,m<g?(f.flags|=2,g):m):(f.flags|=2,g)):(f.flags|=1048576,g)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,g,m,y){return g===null||g.tag!==6?(g=Yu(m,f.mode,y),g.return=f,g):(g=r(g,m),g.return=f,g)}function l(f,g,m,y){var T=m.type;return T===as?c(f,g,m.props.children,y,m.key):g!==null&&(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ui&&kh(T)===g.type)?(y=r(g,m.props),y.ref=ro(f,g,m),y.return=f,y):(y=dl(m.type,m.key,m.props,null,f.mode,y),y.ref=ro(f,g,m),y.return=f,y)}function u(f,g,m,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==m.containerInfo||g.stateNode.implementation!==m.implementation?(g=qu(m,f.mode,y),g.return=f,g):(g=r(g,m.children||[]),g.return=f,g)}function c(f,g,m,y,T){return g===null||g.tag!==7?(g=Tr(m,f.mode,y,T),g.return=f,g):(g=r(g,m),g.return=f,g)}function h(f,g,m){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Yu(""+g,f.mode,m),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ca:return m=dl(g.type,g.key,g.props,null,f.mode,m),m.ref=ro(f,null,g),m.return=f,m;case os:return g=qu(g,f.mode,m),g.return=f,g;case Ui:var y=g._init;return h(f,y(g._payload),m)}if(po(g)||Qs(g))return g=Tr(g,f.mode,m,null),g.return=f,g;Sa(f,g)}return null}function d(f,g,m,y){var T=g!==null?g.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return T!==null?null:a(f,g,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ca:return m.key===T?l(f,g,m,y):null;case os:return m.key===T?u(f,g,m,y):null;case Ui:return T=m._init,d(f,g,T(m._payload),y)}if(po(m)||Qs(m))return T!==null?null:c(f,g,m,y,null);Sa(f,m)}return null}function p(f,g,m,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(m)||null,a(g,f,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ca:return f=f.get(y.key===null?m:y.key)||null,l(g,f,y,T);case os:return f=f.get(y.key===null?m:y.key)||null,u(g,f,y,T);case Ui:var S=y._init;return p(f,g,m,S(y._payload),T)}if(po(y)||Qs(y))return f=f.get(m)||null,c(g,f,y,T,null);Sa(g,y)}return null}function _(f,g,m,y){for(var T=null,S=null,M=g,b=g=0,E=null;M!==null&&b<m.length;b++){M.index>b?(E=M,M=null):E=M.sibling;var w=d(f,M,m[b],y);if(w===null){M===null&&(M=E);break}t&&M&&w.alternate===null&&e(f,M),g=s(w,g,b),S===null?T=w:S.sibling=w,S=w,M=E}if(b===m.length)return n(f,M),lt&&hr(f,b),T;if(M===null){for(;b<m.length;b++)M=h(f,m[b],y),M!==null&&(g=s(M,g,b),S===null?T=M:S.sibling=M,S=M);return lt&&hr(f,b),T}for(M=i(f,M);b<m.length;b++)E=p(M,f,b,m[b],y),E!==null&&(t&&E.alternate!==null&&M.delete(E.key===null?b:E.key),g=s(E,g,b),S===null?T=E:S.sibling=E,S=E);return t&&M.forEach(function(U){return e(f,U)}),lt&&hr(f,b),T}function x(f,g,m,y){var T=Qs(m);if(typeof T!="function")throw Error(se(150));if(m=T.call(m),m==null)throw Error(se(151));for(var S=T=null,M=g,b=g=0,E=null,w=m.next();M!==null&&!w.done;b++,w=m.next()){M.index>b?(E=M,M=null):E=M.sibling;var U=d(f,M,w.value,y);if(U===null){M===null&&(M=E);break}t&&M&&U.alternate===null&&e(f,M),g=s(U,g,b),S===null?T=U:S.sibling=U,S=U,M=E}if(w.done)return n(f,M),lt&&hr(f,b),T;if(M===null){for(;!w.done;b++,w=m.next())w=h(f,w.value,y),w!==null&&(g=s(w,g,b),S===null?T=w:S.sibling=w,S=w);return lt&&hr(f,b),T}for(M=i(f,M);!w.done;b++,w=m.next())w=p(M,f,b,w.value,y),w!==null&&(t&&w.alternate!==null&&M.delete(w.key===null?b:w.key),g=s(w,g,b),S===null?T=w:S.sibling=w,S=w);return t&&M.forEach(function(z){return e(f,z)}),lt&&hr(f,b),T}function v(f,g,m,y){if(typeof m=="object"&&m!==null&&m.type===as&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ca:e:{for(var T=m.key,S=g;S!==null;){if(S.key===T){if(T=m.type,T===as){if(S.tag===7){n(f,S.sibling),g=r(S,m.props.children),g.return=f,f=g;break e}}else if(S.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ui&&kh(T)===S.type){n(f,S.sibling),g=r(S,m.props),g.ref=ro(f,S,m),g.return=f,f=g;break e}n(f,S);break}else e(f,S);S=S.sibling}m.type===as?(g=Tr(m.props.children,f.mode,y,m.key),g.return=f,f=g):(y=dl(m.type,m.key,m.props,null,f.mode,y),y.ref=ro(f,g,m),y.return=f,f=y)}return o(f);case os:e:{for(S=m.key;g!==null;){if(g.key===S)if(g.tag===4&&g.stateNode.containerInfo===m.containerInfo&&g.stateNode.implementation===m.implementation){n(f,g.sibling),g=r(g,m.children||[]),g.return=f,f=g;break e}else{n(f,g);break}else e(f,g);g=g.sibling}g=qu(m,f.mode,y),g.return=f,f=g}return o(f);case Ui:return S=m._init,v(f,g,S(m._payload),y)}if(po(m))return _(f,g,m,y);if(Qs(m))return x(f,g,m,y);Sa(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,g!==null&&g.tag===6?(n(f,g.sibling),g=r(g,m),g.return=f,f=g):(n(f,g),g=Yu(m,f.mode,y),g.return=f,f=g),o(f)):n(f,g)}return v}var Us=f0(!0),d0=f0(!1),Cl=sr(null),bl=null,ms=null,md=null;function gd(){md=ms=bl=null}function vd(t){var e=Cl.current;at(Cl),t._currentValue=e}function df(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function As(t,e){bl=t,md=ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ln=!0),t.firstContext=null)}function Un(t){var e=t._currentValue;if(md!==t)if(t={context:t,memoizedValue:e,next:null},ms===null){if(bl===null)throw Error(se(308));ms=t,bl.dependencies={lanes:0,firstContext:t}}else ms=ms.next=t;return e}var Sr=null;function _d(t){Sr===null?Sr=[t]:Sr.push(t)}function h0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,_d(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ei(t,i)}function Ei(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ii=!1;function xd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function p0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Yi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ei(t,n)}return r=i.interleaved,r===null?(e.next=e,_d(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ei(t,n)}function ol(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,rd(t,n)}}function Bh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Pl(t,e,n,i){var r=t.updateQueue;Ii=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,x=a;switch(d=e,p=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){h=_.call(p,h,d);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,d=typeof _=="function"?_.call(p,h,d):_,d==null)break e;h=ht({},h,d);break e;case 2:Ii=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(c===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Nr|=o,t.lanes=o,t.memoizedState=h}}function Hh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var ra={},si=sr(ra),Go=sr(ra),Vo=sr(ra);function Mr(t){if(t===ra)throw Error(se(174));return t}function yd(t,e){switch(rt(Vo,e),rt(Go,t),rt(si,ra),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Xc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Xc(e,t)}at(si),rt(si,e)}function Is(){at(si),at(Go),at(Vo)}function m0(t){Mr(Vo.current);var e=Mr(si.current),n=Xc(e,t.type);e!==n&&(rt(Go,t),rt(si,n))}function Sd(t){Go.current===t&&(at(si),at(Go))}var ct=sr(0);function Ll(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Hu=[];function Md(){for(var t=0;t<Hu.length;t++)Hu[t]._workInProgressVersionPrimary=null;Hu.length=0}var al=Ai.ReactCurrentDispatcher,Gu=Ai.ReactCurrentBatchConfig,Dr=0,dt=null,Et=null,Lt=null,Dl=!1,Eo=!1,Wo=0,my=0;function Gt(){throw Error(se(321))}function Ed(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kn(t[n],e[n]))return!1;return!0}function wd(t,e,n,i,r,s){if(Dr=s,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,al.current=t===null||t.memoizedState===null?xy:yy,t=n(i,r),Eo){s=0;do{if(Eo=!1,Wo=0,25<=s)throw Error(se(301));s+=1,Lt=Et=null,e.updateQueue=null,al.current=Sy,t=n(i,r)}while(Eo)}if(al.current=Nl,e=Et!==null&&Et.next!==null,Dr=0,Lt=Et=dt=null,Dl=!1,e)throw Error(se(300));return t}function Td(){var t=Wo!==0;return Wo=0,t}function ti(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?dt.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function In(){if(Et===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Et.next;var e=Lt===null?dt.memoizedState:Lt.next;if(e!==null)Lt=e,Et=t;else{if(t===null)throw Error(se(310));Et=t,t={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},Lt===null?dt.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function Xo(t,e){return typeof e=="function"?e(t):e}function Vu(t){var e=In(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=Et,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Dr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,dt.lanes|=c,Nr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Kn(i,e.memoizedState)||(ln=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,dt.lanes|=s,Nr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Wu(t){var e=In(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Kn(s,e.memoizedState)||(ln=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function g0(){}function v0(t,e){var n=dt,i=In(),r=e(),s=!Kn(i.memoizedState,r);if(s&&(i.memoizedState=r,ln=!0),i=i.queue,Ad(y0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Lt!==null&&Lt.memoizedState.tag&1){if(n.flags|=2048,jo(9,x0.bind(null,n,i,r,e),void 0,null),Nt===null)throw Error(se(349));Dr&30||_0(n,e,r)}return r}function _0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function x0(t,e,n,i){e.value=n,e.getSnapshot=i,S0(e)&&M0(t)}function y0(t,e,n){return n(function(){S0(e)&&M0(t)})}function S0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kn(t,n)}catch{return!0}}function M0(t){var e=Ei(t,1);e!==null&&qn(e,t,1,-1)}function Gh(t){var e=ti();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xo,lastRenderedState:t},e.queue=t,t=t.dispatch=_y.bind(null,dt,t),[e.memoizedState,t]}function jo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function E0(){return In().memoizedState}function ll(t,e,n,i){var r=ti();dt.flags|=t,r.memoizedState=jo(1|e,n,void 0,i===void 0?null:i)}function tu(t,e,n,i){var r=In();i=i===void 0?null:i;var s=void 0;if(Et!==null){var o=Et.memoizedState;if(s=o.destroy,i!==null&&Ed(i,o.deps)){r.memoizedState=jo(e,n,s,i);return}}dt.flags|=t,r.memoizedState=jo(1|e,n,s,i)}function Vh(t,e){return ll(8390656,8,t,e)}function Ad(t,e){return tu(2048,8,t,e)}function w0(t,e){return tu(4,2,t,e)}function T0(t,e){return tu(4,4,t,e)}function A0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function R0(t,e,n){return n=n!=null?n.concat([t]):null,tu(4,4,A0.bind(null,e,t),n)}function Rd(){}function C0(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ed(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function b0(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ed(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function P0(t,e,n){return Dr&21?(Kn(n,e)||(n=Ig(),dt.lanes|=n,Nr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ln=!0),t.memoizedState=n)}function gy(t,e){var n=Qe;Qe=n!==0&&4>n?n:4,t(!0);var i=Gu.transition;Gu.transition={};try{t(!1),e()}finally{Qe=n,Gu.transition=i}}function L0(){return In().memoizedState}function vy(t,e,n){var i=$i(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},D0(t))N0(e,n);else if(n=h0(t,e,n,i),n!==null){var r=tn();qn(n,t,i,r),U0(n,e,i)}}function _y(t,e,n){var i=$i(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(D0(t))N0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Kn(a,o)){var l=e.interleaved;l===null?(r.next=r,_d(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=h0(t,e,r,i),n!==null&&(r=tn(),qn(n,t,i,r),U0(n,e,i))}}function D0(t){var e=t.alternate;return t===dt||e!==null&&e===dt}function N0(t,e){Eo=Dl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function U0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,rd(t,n)}}var Nl={readContext:Un,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},xy={readContext:Un,useCallback:function(t,e){return ti().memoizedState=[t,e===void 0?null:e],t},useContext:Un,useEffect:Vh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ll(4194308,4,A0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ll(4194308,4,t,e)},useInsertionEffect:function(t,e){return ll(4,2,t,e)},useMemo:function(t,e){var n=ti();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ti();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=vy.bind(null,dt,t),[i.memoizedState,t]},useRef:function(t){var e=ti();return t={current:t},e.memoizedState=t},useState:Gh,useDebugValue:Rd,useDeferredValue:function(t){return ti().memoizedState=t},useTransition:function(){var t=Gh(!1),e=t[0];return t=gy.bind(null,t[1]),ti().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=dt,r=ti();if(lt){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Nt===null)throw Error(se(349));Dr&30||_0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Vh(y0.bind(null,i,s,t),[t]),i.flags|=2048,jo(9,x0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ti(),e=Nt.identifierPrefix;if(lt){var n=_i,i=vi;n=(i&~(1<<32-Yn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Wo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=my++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},yy={readContext:Un,useCallback:C0,useContext:Un,useEffect:Ad,useImperativeHandle:R0,useInsertionEffect:w0,useLayoutEffect:T0,useMemo:b0,useReducer:Vu,useRef:E0,useState:function(){return Vu(Xo)},useDebugValue:Rd,useDeferredValue:function(t){var e=In();return P0(e,Et.memoizedState,t)},useTransition:function(){var t=Vu(Xo)[0],e=In().memoizedState;return[t,e]},useMutableSource:g0,useSyncExternalStore:v0,useId:L0,unstable_isNewReconciler:!1},Sy={readContext:Un,useCallback:C0,useContext:Un,useEffect:Ad,useImperativeHandle:R0,useInsertionEffect:w0,useLayoutEffect:T0,useMemo:b0,useReducer:Wu,useRef:E0,useState:function(){return Wu(Xo)},useDebugValue:Rd,useDeferredValue:function(t){var e=In();return Et===null?e.memoizedState=t:P0(e,Et.memoizedState,t)},useTransition:function(){var t=Wu(Xo)[0],e=In().memoizedState;return[t,e]},useMutableSource:g0,useSyncExternalStore:v0,useId:L0,unstable_isNewReconciler:!1};function Bn(t,e){if(t&&t.defaultProps){e=ht({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function hf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ht({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var nu={isMounted:function(t){return(t=t._reactInternals)?Br(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=tn(),r=$i(t),s=yi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Yi(t,s,r),e!==null&&(qn(e,t,r,i),ol(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=tn(),r=$i(t),s=yi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Yi(t,s,r),e!==null&&(qn(e,t,r,i),ol(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=tn(),i=$i(t),r=yi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Yi(t,r,i),e!==null&&(qn(e,t,i,n),ol(e,t,i))}};function Wh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!zo(n,i)||!zo(r,s):!0}function I0(t,e,n){var i=!1,r=nr,s=e.contextType;return typeof s=="object"&&s!==null?s=Un(s):(r=cn(e)?Pr:qt.current,i=e.contextTypes,s=(i=i!=null)?Ds(t,r):nr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=nu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Xh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&nu.enqueueReplaceState(e,e.state,null)}function pf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},xd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Un(s):(s=cn(e)?Pr:qt.current,r.context=Ds(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(hf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&nu.enqueueReplaceState(r,r.state,null),Pl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Os(t,e){try{var n="",i=e;do n+=$_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Xu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function mf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var My=typeof WeakMap=="function"?WeakMap:Map;function O0(t,e,n){n=yi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Il||(Il=!0,Tf=i),mf(t,e)},n}function F0(t,e,n){n=yi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){mf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){mf(t,e),typeof i!="function"&&(qi===null?qi=new Set([this]):qi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function jh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new My;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Oy.bind(null,t,e,n),e.then(t,t))}function Yh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function qh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yi(-1,1),e.tag=2,Yi(n,e,1))),n.lanes|=1),t)}var Ey=Ai.ReactCurrentOwner,ln=!1;function Zt(t,e,n,i){e.child=t===null?d0(e,null,n,i):Us(e,t.child,n,i)}function $h(t,e,n,i,r){n=n.render;var s=e.ref;return As(e,r),i=wd(t,e,n,i,s,r),n=Td(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wi(t,e,r)):(lt&&n&&dd(e),e.flags|=1,Zt(t,e,i,r),e.child)}function Kh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Id(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,z0(t,e,s,i,r)):(t=dl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:zo,n(o,i)&&t.ref===e.ref)return wi(t,e,r)}return e.flags|=1,t=Ki(s,i),t.ref=e.ref,t.return=e,e.child=t}function z0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(zo(s,i)&&t.ref===e.ref)if(ln=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(ln=!0);else return e.lanes=t.lanes,wi(t,e,r)}return gf(t,e,n,i,r)}function k0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(vs,vn),vn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,rt(vs,vn),vn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,rt(vs,vn),vn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,rt(vs,vn),vn|=i;return Zt(t,e,r,n),e.child}function B0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function gf(t,e,n,i,r){var s=cn(n)?Pr:qt.current;return s=Ds(e,s),As(e,r),n=wd(t,e,n,i,s,r),i=Td(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wi(t,e,r)):(lt&&i&&dd(e),e.flags|=1,Zt(t,e,n,r),e.child)}function Jh(t,e,n,i,r){if(cn(n)){var s=!0;Tl(e)}else s=!1;if(As(e,r),e.stateNode===null)ul(t,e),I0(e,n,i),pf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Un(u):(u=cn(n)?Pr:qt.current,u=Ds(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Xh(e,o,i,u),Ii=!1;var d=e.memoizedState;o.state=d,Pl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||un.current||Ii?(typeof c=="function"&&(hf(e,n,c,i),l=e.memoizedState),(a=Ii||Wh(e,n,a,i,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,p0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Bn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Un(l):(l=cn(n)?Pr:qt.current,l=Ds(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Xh(e,o,i,l),Ii=!1,d=e.memoizedState,o.state=d,Pl(e,i,o,r);var _=e.memoizedState;a!==h||d!==_||un.current||Ii?(typeof p=="function"&&(hf(e,n,p,i),_=e.memoizedState),(u=Ii||Wh(e,n,u,i,d,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return vf(t,e,n,i,s,r)}function vf(t,e,n,i,r,s){B0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Oh(e,n,!1),wi(t,e,s);i=e.stateNode,Ey.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Us(e,t.child,null,s),e.child=Us(e,null,a,s)):Zt(t,e,a,s),e.memoizedState=i.state,r&&Oh(e,n,!0),e.child}function H0(t){var e=t.stateNode;e.pendingContext?Ih(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ih(t,e.context,!1),yd(t,e.containerInfo)}function Zh(t,e,n,i,r){return Ns(),pd(r),e.flags|=256,Zt(t,e,n,i),e.child}var _f={dehydrated:null,treeContext:null,retryLane:0};function xf(t){return{baseLanes:t,cachePool:null,transitions:null}}function G0(t,e,n){var i=e.pendingProps,r=ct.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),rt(ct,r&1),t===null)return ff(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=su(o,i,0,null),t=Tr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=xf(n),e.memoizedState=_f,t):Cd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return wy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ki(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ki(a,s):(s=Tr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?xf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=_f,i}return s=t.child,t=s.sibling,i=Ki(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Cd(t,e){return e=su({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ma(t,e,n,i){return i!==null&&pd(i),Us(e,t.child,null,n),t=Cd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function wy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Xu(Error(se(422))),Ma(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=su({mode:"visible",children:i.children},r,0,null),s=Tr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Us(e,t.child,null,o),e.child.memoizedState=xf(o),e.memoizedState=_f,s);if(!(e.mode&1))return Ma(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=Xu(s,i,void 0),Ma(t,e,o,i)}if(a=(o&t.childLanes)!==0,ln||a){if(i=Nt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ei(t,r),qn(i,t,r,-1))}return Ud(),i=Xu(Error(se(421))),Ma(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Fy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,_n=ji(r.nextSibling),xn=e,lt=!0,Gn=null,t!==null&&(An[Rn++]=vi,An[Rn++]=_i,An[Rn++]=Lr,vi=t.id,_i=t.overflow,Lr=e),e=Cd(e,i.children),e.flags|=4096,e)}function Qh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),df(t.return,e,n)}function ju(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function V0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Zt(t,e,i.children,n),i=ct.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qh(t,n,e);else if(t.tag===19)Qh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(rt(ct,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ll(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),ju(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ll(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}ju(e,!0,n,null,s);break;case"together":ju(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ul(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function wi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Nr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=Ki(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ki(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ty(t,e,n){switch(e.tag){case 3:H0(e),Ns();break;case 5:m0(e);break;case 1:cn(e.type)&&Tl(e);break;case 4:yd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;rt(Cl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(rt(ct,ct.current&1),e.flags|=128,null):n&e.child.childLanes?G0(t,e,n):(rt(ct,ct.current&1),t=wi(t,e,n),t!==null?t.sibling:null);rt(ct,ct.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return V0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),rt(ct,ct.current),i)break;return null;case 22:case 23:return e.lanes=0,k0(t,e,n)}return wi(t,e,n)}var W0,yf,X0,j0;W0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yf=function(){};X0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Mr(si.current);var s=null;switch(n){case"input":r=Hc(t,r),i=Hc(t,i),s=[];break;case"select":r=ht({},r,{value:void 0}),i=ht({},i,{value:void 0}),s=[];break;case"textarea":r=Wc(t,r),i=Wc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=El)}jc(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Lo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Lo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&st("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};j0=function(t,e,n,i){n!==i&&(e.flags|=4)};function so(t,e){if(!lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Ay(t,e,n){var i=e.pendingProps;switch(hd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return cn(e.type)&&wl(),Vt(e),null;case 3:return i=e.stateNode,Is(),at(un),at(qt),Md(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ya(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gn!==null&&(Cf(Gn),Gn=null))),yf(t,e),Vt(e),null;case 5:Sd(e);var r=Mr(Vo.current);if(n=e.type,t!==null&&e.stateNode!=null)X0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return Vt(e),null}if(t=Mr(si.current),ya(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ii]=e,i[Ho]=s,t=(e.mode&1)!==0,n){case"dialog":st("cancel",i),st("close",i);break;case"iframe":case"object":case"embed":st("load",i);break;case"video":case"audio":for(r=0;r<go.length;r++)st(go[r],i);break;case"source":st("error",i);break;case"img":case"image":case"link":st("error",i),st("load",i);break;case"details":st("toggle",i);break;case"input":lh(i,s),st("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},st("invalid",i);break;case"textarea":ch(i,s),st("invalid",i)}jc(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&xa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&xa(i.textContent,a,t),r=["children",""+a]):Lo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&st("scroll",i)}switch(n){case"input":fa(i),uh(i,s,!0);break;case"textarea":fa(i),fh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=El)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=yg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ii]=e,t[Ho]=i,W0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Yc(n,i),n){case"dialog":st("cancel",t),st("close",t),r=i;break;case"iframe":case"object":case"embed":st("load",t),r=i;break;case"video":case"audio":for(r=0;r<go.length;r++)st(go[r],t);r=i;break;case"source":st("error",t),r=i;break;case"img":case"image":case"link":st("error",t),st("load",t),r=i;break;case"details":st("toggle",t),r=i;break;case"input":lh(t,i),r=Hc(t,i),st("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ht({},i,{value:void 0}),st("invalid",t);break;case"textarea":ch(t,i),r=Wc(t,i),st("invalid",t);break;default:r=i}jc(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Eg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Sg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Do(t,l):typeof l=="number"&&Do(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Lo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&st("scroll",t):l!=null&&Zf(t,s,l,o))}switch(n){case"input":fa(t),uh(t,i,!1);break;case"textarea":fa(t),fh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+tr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ms(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ms(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=El)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(t&&e.stateNode!=null)j0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=Mr(Vo.current),Mr(si.current),ya(e)){if(i=e.stateNode,n=e.memoizedProps,i[ii]=e,(s=i.nodeValue!==n)&&(t=xn,t!==null))switch(t.tag){case 3:xa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&xa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ii]=e,e.stateNode=i}return Vt(e),null;case 13:if(at(ct),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(lt&&_n!==null&&e.mode&1&&!(e.flags&128))c0(),Ns(),e.flags|=98560,s=!1;else if(s=ya(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[ii]=e}else Ns(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),s=!1}else Gn!==null&&(Cf(Gn),Gn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ct.current&1?Tt===0&&(Tt=3):Ud())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return Is(),yf(t,e),t===null&&ko(e.stateNode.containerInfo),Vt(e),null;case 10:return vd(e.type._context),Vt(e),null;case 17:return cn(e.type)&&wl(),Vt(e),null;case 19:if(at(ct),s=e.memoizedState,s===null)return Vt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)so(s,!1);else{if(Tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ll(t),o!==null){for(e.flags|=128,so(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return rt(ct,ct.current&1|2),e.child}t=t.sibling}s.tail!==null&&_t()>Fs&&(e.flags|=128,i=!0,so(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ll(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),so(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!lt)return Vt(e),null}else 2*_t()-s.renderingStartTime>Fs&&n!==1073741824&&(e.flags|=128,i=!0,so(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=_t(),e.sibling=null,n=ct.current,rt(ct,i?n&1|2:n&1),e):(Vt(e),null);case 22:case 23:return Nd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?vn&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function Ry(t,e){switch(hd(e),e.tag){case 1:return cn(e.type)&&wl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Is(),at(un),at(qt),Md(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Sd(e),null;case 13:if(at(ct),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Ns()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return at(ct),null;case 4:return Is(),null;case 10:return vd(e.type._context),null;case 22:case 23:return Nd(),null;case 24:return null;default:return null}}var Ea=!1,jt=!1,Cy=typeof WeakSet=="function"?WeakSet:Set,Se=null;function gs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){gt(t,e,i)}else n.current=null}function Sf(t,e,n){try{n()}catch(i){gt(t,e,i)}}var ep=!1;function by(t,e){if(rf=yl,t=Jg(),fd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(sf={focusedElem:t,selectionRange:n},yl=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){e=Se;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,v=_.memoizedState,f=e.stateNode,g=f.getSnapshotBeforeUpdate(e.elementType===e.type?x:Bn(e.type,x),v);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(y){gt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return _=ep,ep=!1,_}function wo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Sf(e,n,s)}r=r.next}while(r!==i)}}function iu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Mf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Y0(t){var e=t.alternate;e!==null&&(t.alternate=null,Y0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ii],delete e[Ho],delete e[lf],delete e[fy],delete e[dy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function q0(t){return t.tag===5||t.tag===3||t.tag===4}function tp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||q0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ef(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=El));else if(i!==4&&(t=t.child,t!==null))for(Ef(t,e,n),t=t.sibling;t!==null;)Ef(t,e,n),t=t.sibling}function wf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(wf(t,e,n),t=t.sibling;t!==null;)wf(t,e,n),t=t.sibling}var Ot=null,Hn=!1;function Ri(t,e,n){for(n=n.child;n!==null;)$0(t,e,n),n=n.sibling}function $0(t,e,n){if(ri&&typeof ri.onCommitFiberUnmount=="function")try{ri.onCommitFiberUnmount($l,n)}catch{}switch(n.tag){case 5:jt||gs(n,e);case 6:var i=Ot,r=Hn;Ot=null,Ri(t,e,n),Ot=i,Hn=r,Ot!==null&&(Hn?(t=Ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ot.removeChild(n.stateNode));break;case 18:Ot!==null&&(Hn?(t=Ot,n=n.stateNode,t.nodeType===8?ku(t.parentNode,n):t.nodeType===1&&ku(t,n),Oo(t)):ku(Ot,n.stateNode));break;case 4:i=Ot,r=Hn,Ot=n.stateNode.containerInfo,Hn=!0,Ri(t,e,n),Ot=i,Hn=r;break;case 0:case 11:case 14:case 15:if(!jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Sf(n,e,o),r=r.next}while(r!==i)}Ri(t,e,n);break;case 1:if(!jt&&(gs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){gt(n,e,a)}Ri(t,e,n);break;case 21:Ri(t,e,n);break;case 22:n.mode&1?(jt=(i=jt)||n.memoizedState!==null,Ri(t,e,n),jt=i):Ri(t,e,n);break;default:Ri(t,e,n)}}function np(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Cy),e.forEach(function(i){var r=zy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function On(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ot=a.stateNode,Hn=!1;break e;case 3:Ot=a.stateNode.containerInfo,Hn=!0;break e;case 4:Ot=a.stateNode.containerInfo,Hn=!0;break e}a=a.return}if(Ot===null)throw Error(se(160));$0(s,o,r),Ot=null,Hn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){gt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)K0(e,t),e=e.sibling}function K0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(On(e,t),Qn(t),i&4){try{wo(3,t,t.return),iu(3,t)}catch(x){gt(t,t.return,x)}try{wo(5,t,t.return)}catch(x){gt(t,t.return,x)}}break;case 1:On(e,t),Qn(t),i&512&&n!==null&&gs(n,n.return);break;case 5:if(On(e,t),Qn(t),i&512&&n!==null&&gs(n,n.return),t.flags&32){var r=t.stateNode;try{Do(r,"")}catch(x){gt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&_g(r,s),Yc(a,o);var u=Yc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Eg(r,h):c==="dangerouslySetInnerHTML"?Sg(r,h):c==="children"?Do(r,h):Zf(r,c,h,u)}switch(a){case"input":Gc(r,s);break;case"textarea":xg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ms(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ms(r,!!s.multiple,s.defaultValue,!0):Ms(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ho]=s}catch(x){gt(t,t.return,x)}}break;case 6:if(On(e,t),Qn(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){gt(t,t.return,x)}}break;case 3:if(On(e,t),Qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Oo(e.containerInfo)}catch(x){gt(t,t.return,x)}break;case 4:On(e,t),Qn(t);break;case 13:On(e,t),Qn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ld=_t())),i&4&&np(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(jt=(u=jt)||c,On(e,t),jt=u):On(e,t),Qn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(Se=t,c=t.child;c!==null;){for(h=Se=c;Se!==null;){switch(d=Se,p=d.child,d.tag){case 0:case 11:case 14:case 15:wo(4,d,d.return);break;case 1:gs(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){gt(i,n,x)}}break;case 5:gs(d,d.return);break;case 22:if(d.memoizedState!==null){rp(h);continue}}p!==null?(p.return=d,Se=p):rp(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Mg("display",o))}catch(x){gt(t,t.return,x)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(x){gt(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:On(e,t),Qn(t),i&4&&np(t);break;case 21:break;default:On(e,t),Qn(t)}}function Qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(q0(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Do(r,""),i.flags&=-33);var s=tp(t);wf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=tp(t);Ef(t,a,o);break;default:throw Error(se(161))}}catch(l){gt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Py(t,e,n){Se=t,J0(t)}function J0(t,e,n){for(var i=(t.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ea;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||jt;a=Ea;var u=jt;if(Ea=o,(jt=l)&&!u)for(Se=r;Se!==null;)o=Se,l=o.child,o.tag===22&&o.memoizedState!==null?sp(r):l!==null?(l.return=o,Se=l):sp(r);for(;s!==null;)Se=s,J0(s),s=s.sibling;Se=r,Ea=a,jt=u}ip(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):ip(t)}}function ip(t){for(;Se!==null;){var e=Se;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||iu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Bn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Hh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Hh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Oo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}jt||e.flags&512&&Mf(e)}catch(d){gt(e,e.return,d)}}if(e===t){Se=null;break}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}}function rp(t){for(;Se!==null;){var e=Se;if(e===t){Se=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Se=n;break}Se=e.return}}function sp(t){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{iu(4,e)}catch(l){gt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){gt(e,r,l)}}var s=e.return;try{Mf(e)}catch(l){gt(e,s,l)}break;case 5:var o=e.return;try{Mf(e)}catch(l){gt(e,o,l)}}}catch(l){gt(e,e.return,l)}if(e===t){Se=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Se=a;break}Se=e.return}}var Ly=Math.ceil,Ul=Ai.ReactCurrentDispatcher,bd=Ai.ReactCurrentOwner,Nn=Ai.ReactCurrentBatchConfig,Ke=0,Nt=null,Mt=null,zt=0,vn=0,vs=sr(0),Tt=0,Yo=null,Nr=0,ru=0,Pd=0,To=null,on=null,Ld=0,Fs=1/0,pi=null,Il=!1,Tf=null,qi=null,wa=!1,ki=null,Ol=0,Ao=0,Af=null,cl=-1,fl=0;function tn(){return Ke&6?_t():cl!==-1?cl:cl=_t()}function $i(t){return t.mode&1?Ke&2&&zt!==0?zt&-zt:py.transition!==null?(fl===0&&(fl=Ig()),fl):(t=Qe,t!==0||(t=window.event,t=t===void 0?16:Gg(t.type)),t):1}function qn(t,e,n,i){if(50<Ao)throw Ao=0,Af=null,Error(se(185));ta(t,n,i),(!(Ke&2)||t!==Nt)&&(t===Nt&&(!(Ke&2)&&(ru|=n),Tt===4&&Fi(t,zt)),fn(t,i),n===1&&Ke===0&&!(e.mode&1)&&(Fs=_t()+500,eu&&or()))}function fn(t,e){var n=t.callbackNode;px(t,e);var i=xl(t,t===Nt?zt:0);if(i===0)n!==null&&ph(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&ph(n),e===1)t.tag===0?hy(op.bind(null,t)):a0(op.bind(null,t)),uy(function(){!(Ke&6)&&or()}),n=null;else{switch(Og(i)){case 1:n=id;break;case 4:n=Ng;break;case 16:n=_l;break;case 536870912:n=Ug;break;default:n=_l}n=sv(n,Z0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Z0(t,e){if(cl=-1,fl=0,Ke&6)throw Error(se(327));var n=t.callbackNode;if(Rs()&&t.callbackNode!==n)return null;var i=xl(t,t===Nt?zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Fl(t,i);else{e=i;var r=Ke;Ke|=2;var s=ev();(Nt!==t||zt!==e)&&(pi=null,Fs=_t()+500,wr(t,e));do try{Uy();break}catch(a){Q0(t,a)}while(!0);gd(),Ul.current=s,Ke=r,Mt!==null?e=0:(Nt=null,zt=0,e=Tt)}if(e!==0){if(e===2&&(r=Zc(t),r!==0&&(i=r,e=Rf(t,r))),e===1)throw n=Yo,wr(t,0),Fi(t,i),fn(t,_t()),n;if(e===6)Fi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Dy(r)&&(e=Fl(t,i),e===2&&(s=Zc(t),s!==0&&(i=s,e=Rf(t,s))),e===1))throw n=Yo,wr(t,0),Fi(t,i),fn(t,_t()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:pr(t,on,pi);break;case 3:if(Fi(t,i),(i&130023424)===i&&(e=Ld+500-_t(),10<e)){if(xl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){tn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=af(pr.bind(null,t,on,pi),e);break}pr(t,on,pi);break;case 4:if(Fi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Yn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=_t()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ly(i/1960))-i,10<i){t.timeoutHandle=af(pr.bind(null,t,on,pi),i);break}pr(t,on,pi);break;case 5:pr(t,on,pi);break;default:throw Error(se(329))}}}return fn(t,_t()),t.callbackNode===n?Z0.bind(null,t):null}function Rf(t,e){var n=To;return t.current.memoizedState.isDehydrated&&(wr(t,e).flags|=256),t=Fl(t,e),t!==2&&(e=on,on=n,e!==null&&Cf(e)),t}function Cf(t){on===null?on=t:on.push.apply(on,t)}function Dy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Kn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Fi(t,e){for(e&=~Pd,e&=~ru,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Yn(e),i=1<<n;t[n]=-1,e&=~i}}function op(t){if(Ke&6)throw Error(se(327));Rs();var e=xl(t,0);if(!(e&1))return fn(t,_t()),null;var n=Fl(t,e);if(t.tag!==0&&n===2){var i=Zc(t);i!==0&&(e=i,n=Rf(t,i))}if(n===1)throw n=Yo,wr(t,0),Fi(t,e),fn(t,_t()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,pr(t,on,pi),fn(t,_t()),null}function Dd(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(Fs=_t()+500,eu&&or())}}function Ur(t){ki!==null&&ki.tag===0&&!(Ke&6)&&Rs();var e=Ke;Ke|=1;var n=Nn.transition,i=Qe;try{if(Nn.transition=null,Qe=1,t)return t()}finally{Qe=i,Nn.transition=n,Ke=e,!(Ke&6)&&or()}}function Nd(){vn=vs.current,at(vs)}function wr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ly(n)),Mt!==null)for(n=Mt.return;n!==null;){var i=n;switch(hd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&wl();break;case 3:Is(),at(un),at(qt),Md();break;case 5:Sd(i);break;case 4:Is();break;case 13:at(ct);break;case 19:at(ct);break;case 10:vd(i.type._context);break;case 22:case 23:Nd()}n=n.return}if(Nt=t,Mt=t=Ki(t.current,null),zt=vn=e,Tt=0,Yo=null,Pd=ru=Nr=0,on=To=null,Sr!==null){for(e=0;e<Sr.length;e++)if(n=Sr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Sr=null}return t}function Q0(t,e){do{var n=Mt;try{if(gd(),al.current=Nl,Dl){for(var i=dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Dl=!1}if(Dr=0,Lt=Et=dt=null,Eo=!1,Wo=0,bd.current=null,n===null||n.return===null){Tt=1,Yo=e,Mt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Yh(o);if(p!==null){p.flags&=-257,qh(p,o,a,s,e),p.mode&1&&jh(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){jh(s,u,e),Ud();break e}l=Error(se(426))}}else if(lt&&a.mode&1){var v=Yh(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),qh(v,o,a,s,e),pd(Os(l,a));break e}}s=l=Os(l,a),Tt!==4&&(Tt=2),To===null?To=[s]:To.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=O0(s,l,e);Bh(s,f);break e;case 1:a=l;var g=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(qi===null||!qi.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=F0(s,a,e);Bh(s,y);break e}}s=s.return}while(s!==null)}nv(n)}catch(T){e=T,Mt===n&&n!==null&&(Mt=n=n.return);continue}break}while(!0)}function ev(){var t=Ul.current;return Ul.current=Nl,t===null?Nl:t}function Ud(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Nt===null||!(Nr&268435455)&&!(ru&268435455)||Fi(Nt,zt)}function Fl(t,e){var n=Ke;Ke|=2;var i=ev();(Nt!==t||zt!==e)&&(pi=null,wr(t,e));do try{Ny();break}catch(r){Q0(t,r)}while(!0);if(gd(),Ke=n,Ul.current=i,Mt!==null)throw Error(se(261));return Nt=null,zt=0,Tt}function Ny(){for(;Mt!==null;)tv(Mt)}function Uy(){for(;Mt!==null&&!sx();)tv(Mt)}function tv(t){var e=rv(t.alternate,t,vn);t.memoizedProps=t.pendingProps,e===null?nv(t):Mt=e,bd.current=null}function nv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ry(n,e),n!==null){n.flags&=32767,Mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Tt=6,Mt=null;return}}else if(n=Ay(n,e,vn),n!==null){Mt=n;return}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=t}while(e!==null);Tt===0&&(Tt=5)}function pr(t,e,n){var i=Qe,r=Nn.transition;try{Nn.transition=null,Qe=1,Iy(t,e,n,i)}finally{Nn.transition=r,Qe=i}return null}function Iy(t,e,n,i){do Rs();while(ki!==null);if(Ke&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(mx(t,s),t===Nt&&(Mt=Nt=null,zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wa||(wa=!0,sv(_l,function(){return Rs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Nn.transition,Nn.transition=null;var o=Qe;Qe=1;var a=Ke;Ke|=4,bd.current=null,by(t,n),K0(n,t),ty(sf),yl=!!rf,sf=rf=null,t.current=n,Py(n),ox(),Ke=a,Qe=o,Nn.transition=s}else t.current=n;if(wa&&(wa=!1,ki=t,Ol=r),s=t.pendingLanes,s===0&&(qi=null),ux(n.stateNode),fn(t,_t()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Il)throw Il=!1,t=Tf,Tf=null,t;return Ol&1&&t.tag!==0&&Rs(),s=t.pendingLanes,s&1?t===Af?Ao++:(Ao=0,Af=t):Ao=0,or(),null}function Rs(){if(ki!==null){var t=Og(Ol),e=Nn.transition,n=Qe;try{if(Nn.transition=null,Qe=16>t?16:t,ki===null)var i=!1;else{if(t=ki,ki=null,Ol=0,Ke&6)throw Error(se(331));var r=Ke;for(Ke|=4,Se=t.current;Se!==null;){var s=Se,o=s.child;if(Se.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Se=u;Se!==null;){var c=Se;switch(c.tag){case 0:case 11:case 15:wo(8,c,s)}var h=c.child;if(h!==null)h.return=c,Se=h;else for(;Se!==null;){c=Se;var d=c.sibling,p=c.return;if(Y0(c),c===u){Se=null;break}if(d!==null){d.return=p,Se=d;break}Se=p}}}var _=s.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var v=x.sibling;x.sibling=null,x=v}while(x!==null)}}Se=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Se=o;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:wo(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Se=f;break e}Se=s.return}}var g=t.current;for(Se=g;Se!==null;){o=Se;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,Se=m;else e:for(o=g;Se!==null;){if(a=Se,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:iu(9,a)}}catch(T){gt(a,a.return,T)}if(a===o){Se=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Se=y;break e}Se=a.return}}if(Ke=r,or(),ri&&typeof ri.onPostCommitFiberRoot=="function")try{ri.onPostCommitFiberRoot($l,t)}catch{}i=!0}return i}finally{Qe=n,Nn.transition=e}}return!1}function ap(t,e,n){e=Os(n,e),e=O0(t,e,1),t=Yi(t,e,1),e=tn(),t!==null&&(ta(t,1,e),fn(t,e))}function gt(t,e,n){if(t.tag===3)ap(t,t,n);else for(;e!==null;){if(e.tag===3){ap(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(qi===null||!qi.has(i))){t=Os(n,t),t=F0(e,t,1),e=Yi(e,t,1),t=tn(),e!==null&&(ta(e,1,t),fn(e,t));break}}e=e.return}}function Oy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=tn(),t.pingedLanes|=t.suspendedLanes&n,Nt===t&&(zt&n)===n&&(Tt===4||Tt===3&&(zt&130023424)===zt&&500>_t()-Ld?wr(t,0):Pd|=n),fn(t,e)}function iv(t,e){e===0&&(t.mode&1?(e=pa,pa<<=1,!(pa&130023424)&&(pa=4194304)):e=1);var n=tn();t=Ei(t,e),t!==null&&(ta(t,e,n),fn(t,n))}function Fy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),iv(t,n)}function zy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),iv(t,n)}var rv;rv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||un.current)ln=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ln=!1,Ty(t,e,n);ln=!!(t.flags&131072)}else ln=!1,lt&&e.flags&1048576&&l0(e,Rl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ul(t,e),t=e.pendingProps;var r=Ds(e,qt.current);As(e,n),r=wd(null,e,i,t,r,n);var s=Td();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,cn(i)?(s=!0,Tl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,xd(e),r.updater=nu,e.stateNode=r,r._reactInternals=e,pf(e,i,t,n),e=vf(null,e,i,!0,s,n)):(e.tag=0,lt&&s&&dd(e),Zt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ul(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=By(i),t=Bn(i,t),r){case 0:e=gf(null,e,i,t,n);break e;case 1:e=Jh(null,e,i,t,n);break e;case 11:e=$h(null,e,i,t,n);break e;case 14:e=Kh(null,e,i,Bn(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),gf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),Jh(t,e,i,r,n);case 3:e:{if(H0(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,p0(t,e),Pl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Os(Error(se(423)),e),e=Zh(t,e,i,n,r);break e}else if(i!==r){r=Os(Error(se(424)),e),e=Zh(t,e,i,n,r);break e}else for(_n=ji(e.stateNode.containerInfo.firstChild),xn=e,lt=!0,Gn=null,n=d0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ns(),i===r){e=wi(t,e,n);break e}Zt(t,e,i,n)}e=e.child}return e;case 5:return m0(e),t===null&&ff(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,of(i,r)?o=null:s!==null&&of(i,s)&&(e.flags|=32),B0(t,e),Zt(t,e,o,n),e.child;case 6:return t===null&&ff(e),null;case 13:return G0(t,e,n);case 4:return yd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Us(e,null,i,n):Zt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),$h(t,e,i,r,n);case 7:return Zt(t,e,e.pendingProps,n),e.child;case 8:return Zt(t,e,e.pendingProps.children,n),e.child;case 12:return Zt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,rt(Cl,i._currentValue),i._currentValue=o,s!==null)if(Kn(s.value,o)){if(s.children===r.children&&!un.current){e=wi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=yi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),df(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),df(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Zt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,As(e,n),r=Un(r),i=i(r),e.flags|=1,Zt(t,e,i,n),e.child;case 14:return i=e.type,r=Bn(i,e.pendingProps),r=Bn(i.type,r),Kh(t,e,i,r,n);case 15:return z0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),ul(t,e),e.tag=1,cn(i)?(t=!0,Tl(e)):t=!1,As(e,n),I0(e,i,r),pf(e,i,r,n),vf(null,e,i,!0,t,n);case 19:return V0(t,e,n);case 22:return k0(t,e,n)}throw Error(se(156,e.tag))};function sv(t,e){return Dg(t,e)}function ky(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,i){return new ky(t,e,n,i)}function Id(t){return t=t.prototype,!(!t||!t.isReactComponent)}function By(t){if(typeof t=="function")return Id(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ed)return 11;if(t===td)return 14}return 2}function Ki(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function dl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Id(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case as:return Tr(n.children,r,s,e);case Qf:o=8,r|=8;break;case Fc:return t=Ln(12,n,e,r|2),t.elementType=Fc,t.lanes=s,t;case zc:return t=Ln(13,n,e,r),t.elementType=zc,t.lanes=s,t;case kc:return t=Ln(19,n,e,r),t.elementType=kc,t.lanes=s,t;case mg:return su(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case hg:o=10;break e;case pg:o=9;break e;case ed:o=11;break e;case td:o=14;break e;case Ui:o=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=Ln(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Tr(t,e,n,i){return t=Ln(7,t,i,e),t.lanes=n,t}function su(t,e,n,i){return t=Ln(22,t,i,e),t.elementType=mg,t.lanes=n,t.stateNode={isHidden:!1},t}function Yu(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function qu(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Hy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cu(0),this.expirationTimes=Cu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Od(t,e,n,i,r,s,o,a,l){return t=new Hy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xd(s),t}function Gy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:os,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function ov(t){if(!t)return nr;t=t._reactInternals;e:{if(Br(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(cn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(cn(n))return o0(t,n,e)}return e}function av(t,e,n,i,r,s,o,a,l){return t=Od(n,i,!0,t,r,s,o,a,l),t.context=ov(null),n=t.current,i=tn(),r=$i(n),s=yi(i,r),s.callback=e??null,Yi(n,s,r),t.current.lanes=r,ta(t,r,i),fn(t,i),t}function ou(t,e,n,i){var r=e.current,s=tn(),o=$i(r);return n=ov(n),e.context===null?e.context=n:e.pendingContext=n,e=yi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Yi(r,e,o),t!==null&&(qn(t,r,o,s),ol(t,r,o)),o}function zl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function lp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Fd(t,e){lp(t,e),(t=t.alternate)&&lp(t,e)}function Vy(){return null}var lv=typeof reportError=="function"?reportError:function(t){console.error(t)};function zd(t){this._internalRoot=t}au.prototype.render=zd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));ou(t,e,null,null)};au.prototype.unmount=zd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ur(function(){ou(null,t,null,null)}),e[Mi]=null}};function au(t){this._internalRoot=t}au.prototype.unstable_scheduleHydration=function(t){if(t){var e=kg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Oi.length&&e!==0&&e<Oi[n].priority;n++);Oi.splice(n,0,t),n===0&&Hg(t)}};function kd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function lu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function up(){}function Wy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=zl(o);s.call(u)}}var o=av(e,i,t,0,null,!1,!1,"",up);return t._reactRootContainer=o,t[Mi]=o.current,ko(t.nodeType===8?t.parentNode:t),Ur(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=zl(l);a.call(u)}}var l=Od(t,0,!1,null,null,!1,!1,"",up);return t._reactRootContainer=l,t[Mi]=l.current,ko(t.nodeType===8?t.parentNode:t),Ur(function(){ou(e,l,n,i)}),l}function uu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=zl(o);a.call(l)}}ou(e,o,t,r)}else o=Wy(n,e,t,r,i);return zl(o)}Fg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=mo(e.pendingLanes);n!==0&&(rd(e,n|1),fn(e,_t()),!(Ke&6)&&(Fs=_t()+500,or()))}break;case 13:Ur(function(){var i=Ei(t,1);if(i!==null){var r=tn();qn(i,t,1,r)}}),Fd(t,1)}};sd=function(t){if(t.tag===13){var e=Ei(t,134217728);if(e!==null){var n=tn();qn(e,t,134217728,n)}Fd(t,134217728)}};zg=function(t){if(t.tag===13){var e=$i(t),n=Ei(t,e);if(n!==null){var i=tn();qn(n,t,e,i)}Fd(t,e)}};kg=function(){return Qe};Bg=function(t,e){var n=Qe;try{return Qe=t,e()}finally{Qe=n}};$c=function(t,e,n){switch(e){case"input":if(Gc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ql(i);if(!r)throw Error(se(90));vg(i),Gc(i,r)}}}break;case"textarea":xg(t,n);break;case"select":e=n.value,e!=null&&Ms(t,!!n.multiple,e,!1)}};Ag=Dd;Rg=Ur;var Xy={usingClientEntryPoint:!1,Events:[ia,fs,Ql,wg,Tg,Dd]},oo={findFiberByHostInstance:yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jy={bundleType:oo.bundleType,version:oo.version,rendererPackageName:oo.rendererPackageName,rendererConfig:oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ai.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Pg(t),t===null?null:t.stateNode},findFiberByHostInstance:oo.findFiberByHostInstance||Vy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ta=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ta.isDisabled&&Ta.supportsFiber)try{$l=Ta.inject(jy),ri=Ta}catch{}}Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xy;Mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kd(e))throw Error(se(200));return Gy(t,e,null,n)};Mn.createRoot=function(t,e){if(!kd(t))throw Error(se(299));var n=!1,i="",r=lv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Od(t,1,!1,null,null,n,!1,i,r),t[Mi]=e.current,ko(t.nodeType===8?t.parentNode:t),new zd(e)};Mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=Pg(e),t=t===null?null:t.stateNode,t};Mn.flushSync=function(t){return Ur(t)};Mn.hydrate=function(t,e,n){if(!lu(e))throw Error(se(200));return uu(null,t,e,!0,n)};Mn.hydrateRoot=function(t,e,n){if(!kd(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=lv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=av(e,null,t,1,n??null,r,!1,s,o),t[Mi]=e.current,ko(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new au(e)};Mn.render=function(t,e,n){if(!lu(e))throw Error(se(200));return uu(null,t,e,!1,n)};Mn.unmountComponentAtNode=function(t){if(!lu(t))throw Error(se(40));return t._reactRootContainer?(Ur(function(){uu(null,null,t,!1,function(){t._reactRootContainer=null,t[Mi]=null})}),!0):!1};Mn.unstable_batchedUpdates=Dd;Mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!lu(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return uu(t,e,n,!1,i)};Mn.version="18.3.1-next-f1338f8080-20240426";function uv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uv)}catch(t){console.error(t)}}uv(),ug.exports=Mn;var Yy=ug.exports,cv,cp=Yy;cv=cp.createRoot,cp.hydrateRoot;async function Ys(t,e){const n=await fetch(t,{credentials:"include",...e});let i=null;try{i=await n.json()}catch{}return{ok:n.ok,status:n.status,data:i}}function qy(){return Ys("/api/me")}function $y(){return Ys("/api/me?view=engineer&list=1")}function Ky(t){return Ys("/api/me?view=engineer&projectId="+encodeURIComponent(t))}function Jy(t,e){return Ys("/api/me",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"engineer_save",projectId:t||void 0,project:e})})}function Zy(t){return Ys("/api/me",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"engineer_delete",projectId:t})})}function Qy(){return Ys("/api/create-checkout-session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({kind:"engineer",plan:"annual",return_page:"engineers/index.html"})})}function eS({status:t,t:e}){const[n,i]=qe.useState(!1),[r,s]=qe.useState(null);async function o(){i(!0),s(null);const l=await Qy();if(l.status===401){window.location.href="/lamsa-auth.html";return}if(!l.ok||!l.data||!l.data.url){s(l.data&&l.data.error||e("Something went wrong, please try again")),i(!1);return}window.location.href=l.data.url}const a=t==="canceled"||t==="past_due"||t==="unpaid";return Te.jsxs("div",{style:{maxWidth:480,margin:"80px auto",padding:24,textAlign:"center",fontFamily:"sans-serif"},children:[Te.jsx("h1",{style:{fontSize:24,fontWeight:900,marginBottom:8},children:e("Lamsa Engineers")}),Te.jsx("p",{style:{color:"#6b7280",marginBottom:24},children:e(a?"Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Design complete floor plans, preview them in 3D, and export real architectural deliverables.")}),Te.jsxs("ul",{style:{textAlign:"start",listStyle:"none",padding:0,marginBottom:28,color:"#374151",fontSize:14},children:[Te.jsxs("li",{children:["— ",e("Rectangular rooms, doors & windows, single-floor plans")]}),Te.jsxs("li",{children:["— ",e("Live 3D preview of your design")]}),Te.jsxs("li",{children:["— ",e("Printable floor plan export")]}),Te.jsxs("li",{children:["— ",e("Use Lamsa's existing furniture-styling tools per room")]})]}),Te.jsxs("div",{style:{fontSize:28,fontWeight:900,marginBottom:4},children:["$250",Te.jsxs("span",{style:{fontSize:14,fontWeight:600,color:"#6b7280"},children:[" ",e("/ year")]})]}),Te.jsx("div",{style:{fontSize:13,color:"#6b7280",marginBottom:20},children:e("14-day free trial, cancel anytime")}),Te.jsx("button",{type:"button",onClick:o,disabled:n,style:{width:"100%",background:"#c9a96e",color:"#1b1e22",border:"none",padding:16,borderRadius:14,fontSize:16,fontWeight:900,cursor:"pointer",opacity:n?.6:1},children:e(n?"Starting…":"Start free trial")}),r&&Te.jsx("div",{style:{color:"#e05555",fontSize:13,marginTop:10},children:r})]})}function tS({projects:t,onOpen:e,onCreate:n,onDelete:i,t:r}){return Te.jsxs("div",{style:{maxWidth:720,margin:"40px auto",padding:24,fontFamily:"sans-serif"},children:[Te.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20},children:[Te.jsx("h1",{style:{fontSize:22,fontWeight:900},children:r("Your Projects")}),Te.jsxs("button",{type:"button",onClick:n,style:{background:"#c9a96e",color:"#1b1e22",border:"none",padding:"10px 18px",borderRadius:10,fontWeight:800,cursor:"pointer"},children:["+ ",r("New Project")]})]}),t.length===0&&Te.jsx("div",{style:{color:"#6b7280",textAlign:"center",padding:40},children:r("No projects yet — create your first one.")}),Te.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:14},children:t.map(s=>Te.jsxs("div",{style:{border:"1px solid #e5e7eb",borderRadius:12,padding:16,cursor:"pointer"},onClick:()=>e(s.id),children:[Te.jsx("div",{style:{fontWeight:800,marginBottom:6},children:s.name}),Te.jsx("div",{style:{fontSize:12,color:"#9ca3af",marginBottom:10},children:s.updatedAt?new Date(s.updatedAt).toLocaleDateString():""}),Te.jsx("button",{type:"button",onClick:o=>{o.stopPropagation(),i(s.id)},style:{fontSize:12,color:"#e05555",background:"none",border:"none",cursor:"pointer",padding:0},children:r("Delete")})]},s.id))})]})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bd="160",nS=0,fp=1,iS=2,fv=1,dv=2,hi=3,ir=0,dn=1,an=2,Ji=0,Cs=1,dp=2,hp=3,pp=4,rS=5,_r=100,sS=101,oS=102,mp=103,gp=104,aS=200,lS=201,uS=202,cS=203,bf=204,Pf=205,fS=206,dS=207,hS=208,pS=209,mS=210,gS=211,vS=212,_S=213,xS=214,yS=0,SS=1,MS=2,kl=3,ES=4,wS=5,TS=6,AS=7,hv=0,RS=1,CS=2,Zi=0,bS=1,PS=2,LS=3,DS=4,NS=5,US=6,pv=300,zs=301,ks=302,Lf=303,Df=304,cu=306,Ir=1e3,Wn=1001,Nf=1002,Qt=1003,vp=1004,$u=1005,Cn=1006,IS=1007,qo=1008,Qi=1009,OS=1010,FS=1011,Hd=1012,mv=1013,Bi=1014,Hi=1015,$o=1016,gv=1017,vv=1018,Ar=1020,zS=1021,Xn=1023,kS=1024,BS=1025,Rr=1026,Bs=1027,HS=1028,_v=1029,GS=1030,xv=1031,yv=1033,Ku=33776,Ju=33777,Zu=33778,Qu=33779,_p=35840,xp=35841,yp=35842,Sp=35843,Sv=36196,Mp=37492,Ep=37496,wp=37808,Tp=37809,Ap=37810,Rp=37811,Cp=37812,bp=37813,Pp=37814,Lp=37815,Dp=37816,Np=37817,Up=37818,Ip=37819,Op=37820,Fp=37821,ec=36492,zp=36494,kp=36495,VS=36283,Bp=36284,Hp=36285,Gp=36286,Mv=3e3,Cr=3001,WS=3200,XS=3201,Ev=0,jS=1,Pn="",Ft="srgb",Ti="srgb-linear",Gd="display-p3",fu="display-p3-linear",Bl="linear",ot="srgb",Hl="rec709",Gl="p3",Vr=7680,Vp=519,YS=512,qS=513,$S=514,wv=515,KS=516,JS=517,ZS=518,QS=519,Wp=35044,Xp="300 es",Uf=1035,xi=2e3,Vl=2001;class qs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tc=Math.PI/180,If=180/Math.PI;function $s(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function Yt(t,e,n){return Math.max(e,Math.min(n,t))}function eM(t,e){return(t%e+e)%e}function nc(t,e,n){return(1-n)*t+n*e}function jp(t){return(t&t-1)===0&&t!==0}function Of(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ao(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function sn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ve{constructor(e=0,n=0){ve.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,n,i,r,s,o,a,l,u){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],h=i[7],d=i[2],p=i[5],_=i[8],x=r[0],v=r[3],f=r[6],g=r[1],m=r[4],y=r[7],T=r[2],S=r[5],M=r[8];return s[0]=o*x+a*g+l*T,s[3]=o*v+a*m+l*S,s[6]=o*f+a*y+l*M,s[1]=u*x+c*g+h*T,s[4]=u*v+c*m+h*S,s[7]=u*f+c*y+h*M,s[2]=d*x+p*g+_*T,s[5]=d*v+p*m+_*S,s[8]=d*f+p*y+_*M,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=c*o-a*u,d=a*l-c*s,p=u*s-o*l,_=n*h+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(r*u-c*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(c*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-u*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(ic.makeScale(e,n)),this}rotate(e){return this.premultiply(ic.makeRotation(-e)),this}translate(e,n){return this.premultiply(ic.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ic=new je;function Tv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Wl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function tM(){const t=Wl("canvas");return t.style.display="block",t}const Yp={};function Ro(t){t in Yp||(Yp[t]=!0,console.warn(t))}const qp=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$p=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Aa={[Ti]:{transfer:Bl,primaries:Hl,toReference:t=>t,fromReference:t=>t},[Ft]:{transfer:ot,primaries:Hl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[fu]:{transfer:Bl,primaries:Gl,toReference:t=>t.applyMatrix3($p),fromReference:t=>t.applyMatrix3(qp)},[Gd]:{transfer:ot,primaries:Gl,toReference:t=>t.convertSRGBToLinear().applyMatrix3($p),fromReference:t=>t.applyMatrix3(qp).convertLinearToSRGB()}},nM=new Set([Ti,fu]),et={enabled:!0,_workingColorSpace:Ti,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!nM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Aa[e].toReference,r=Aa[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Aa[t].primaries},getTransfer:function(t){return t===Pn?Bl:Aa[t].transfer}};function bs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function rc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Wr;class Av{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Wr===void 0&&(Wr=Wl("canvas")),Wr.width=e.width,Wr.height=e.height;const i=Wr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Wr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Wl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=bs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(bs(n[i]/255)*255):n[i]=bs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let iM=0;class Rv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=$s(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(sc(r[o].image)):s.push(sc(r[o]))}else s=sc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function sc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Av.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rM=0;class hn extends qs{constructor(e=hn.DEFAULT_IMAGE,n=hn.DEFAULT_MAPPING,i=Wn,r=Wn,s=Cn,o=qo,a=Xn,l=Qi,u=hn.DEFAULT_ANISOTROPY,c=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=$s(),this.name="",this.source=new Rv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Ro("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Cr?Ft:Pn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ir:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case Nf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ir:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case Nf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ro("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ft?Cr:Mv}set encoding(e){Ro("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Cr?Ft:Pn}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=pv;hn.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,n=0,i=0,r=1){Dt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],h=l[8],d=l[1],p=l[5],_=l[9],x=l[2],v=l[6],f=l[10];if(Math.abs(c-d)<.01&&Math.abs(h-x)<.01&&Math.abs(_-v)<.01){if(Math.abs(c+d)<.1&&Math.abs(h+x)<.1&&Math.abs(_+v)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const m=(u+1)/2,y=(p+1)/2,T=(f+1)/2,S=(c+d)/4,M=(h+x)/4,b=(_+v)/4;return m>y&&m>T?m<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(m),r=S/i,s=M/i):y>T?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=S/r,s=b/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=M/s,r=b/s),this.set(i,r,s,n),this}let g=Math.sqrt((v-_)*(v-_)+(h-x)*(h-x)+(d-c)*(d-c));return Math.abs(g)<.001&&(g=1),this.x=(v-_)/g,this.y=(h-x)/g,this.z=(d-c)/g,this.w=Math.acos((u+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sM extends qs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Dt(0,0,e,n),this.scissorTest=!1,this.viewport=new Dt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Ro("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Cr?Ft:Pn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new hn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Rv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Or extends sM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Cv extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oM extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],h=i[r+3];const d=s[o+0],p=s[o+1],_=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=_,e[n+3]=x;return}if(h!==x||l!==d||u!==p||c!==_){let v=1-a;const f=l*d+u*p+c*_+h*x,g=f>=0?1:-1,m=1-f*f;if(m>Number.EPSILON){const T=Math.sqrt(m),S=Math.atan2(T,f*g);v=Math.sin(v*S)/T,a=Math.sin(a*S)/T}const y=a*g;if(l=l*v+d*y,u=u*v+p*y,c=c*v+_*y,h=h*v+x*y,v===1-a){const T=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=T,u*=T,c*=T,h*=T}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],h=s[o],d=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+c*h+l*p-u*d,e[n+1]=l*_+c*d+u*h-a*p,e[n+2]=u*_+c*p+a*d-l*h,e[n+3]=c*_-a*h-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),h=a(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*c*h+u*p*_,this._y=u*p*h-d*c*_,this._z=u*c*_+d*p*h,this._w=u*c*h-d*p*_;break;case"YXZ":this._x=d*c*h+u*p*_,this._y=u*p*h-d*c*_,this._z=u*c*_-d*p*h,this._w=u*c*h+d*p*_;break;case"ZXY":this._x=d*c*h-u*p*_,this._y=u*p*h+d*c*_,this._z=u*c*_+d*p*h,this._w=u*c*h-d*p*_;break;case"ZYX":this._x=d*c*h-u*p*_,this._y=u*p*h+d*c*_,this._z=u*c*_-d*p*h,this._w=u*c*h+d*p*_;break;case"YZX":this._x=d*c*h+u*p*_,this._y=u*p*h+d*c*_,this._z=u*c*_-d*p*h,this._w=u*c*h-d*p*_;break;case"XZY":this._x=d*c*h-u*p*_,this._y=u*p*h-d*c*_,this._z=u*c*_+d*p*h,this._w=u*c*h+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-n)*c)/u,d=Math.sin(n*c)/u;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,n=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Kp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Kp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*u+o*h-a*c,this.y=i+l*c+a*u-s*h,this.z=r+l*h+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return oc.copy(this).projectOnVector(e),this.sub(oc)}reflect(e){return this.sub(oc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oc=new I,Kp=new sa;class oa{constructor(e=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Fn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Fn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Fn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fn):Fn.fromBufferAttribute(s,o),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ra.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ra.copy(i.boundingBox)),Ra.applyMatrix4(e.matrixWorld),this.union(Ra)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lo),Ca.subVectors(this.max,lo),Xr.subVectors(e.a,lo),jr.subVectors(e.b,lo),Yr.subVectors(e.c,lo),Ci.subVectors(jr,Xr),bi.subVectors(Yr,jr),ur.subVectors(Xr,Yr);let n=[0,-Ci.z,Ci.y,0,-bi.z,bi.y,0,-ur.z,ur.y,Ci.z,0,-Ci.x,bi.z,0,-bi.x,ur.z,0,-ur.x,-Ci.y,Ci.x,0,-bi.y,bi.x,0,-ur.y,ur.x,0];return!ac(n,Xr,jr,Yr,Ca)||(n=[1,0,0,0,1,0,0,0,1],!ac(n,Xr,jr,Yr,Ca))?!1:(ba.crossVectors(Ci,bi),n=[ba.x,ba.y,ba.z],ac(n,Xr,jr,Yr,Ca))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const li=[new I,new I,new I,new I,new I,new I,new I,new I],Fn=new I,Ra=new oa,Xr=new I,jr=new I,Yr=new I,Ci=new I,bi=new I,ur=new I,lo=new I,Ca=new I,ba=new I,cr=new I;function ac(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){cr.fromArray(t,s);const a=r.x*Math.abs(cr.x)+r.y*Math.abs(cr.y)+r.z*Math.abs(cr.z),l=e.dot(cr),u=n.dot(cr),c=i.dot(cr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const aM=new oa,uo=new I,lc=new I;class du{constructor(e=new I,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):aM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;uo.subVectors(e,this.center);const n=uo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(uo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(uo.copy(e.center).add(lc)),this.expandByPoint(uo.copy(e.center).sub(lc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ui=new I,uc=new I,Pa=new I,Pi=new I,cc=new I,La=new I,fc=new I;class bv{constructor(e=new I,n=new I(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,n),ui.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){uc.copy(e).add(n).multiplyScalar(.5),Pa.copy(n).sub(e).normalize(),Pi.copy(this.origin).sub(uc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Pa),a=Pi.dot(this.direction),l=-Pi.dot(Pa),u=Pi.lengthSq(),c=Math.abs(1-o*o);let h,d,p,_;if(c>0)if(h=o*l-a,d=o*a-l,_=s*c,h>=0)if(d>=-_)if(d<=_){const x=1/c;h*=x,d*=x,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+u}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;else d<=-_?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+u):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+u);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(uc).addScaledVector(Pa,d),p}intersectSphere(e,n){ui.subVectors(e.center,this.origin);const i=ui.dot(this.direction),r=ui.dot(ui)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,n,i,r,s){cc.subVectors(n,e),La.subVectors(i,e),fc.crossVectors(cc,La);let o=this.direction.dot(fc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pi.subVectors(this.origin,e);const l=a*this.direction.dot(La.crossVectors(Pi,La));if(l<0)return null;const u=a*this.direction.dot(cc.cross(Pi));if(u<0||l+u>o)return null;const c=-a*Pi.dot(fc);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,n,i,r,s,o,a,l,u,c,h,d,p,_,x,v){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,h,d,p,_,x,v)}set(e,n,i,r,s,o,a,l,u,c,h,d,p,_,x,v){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=h,f[14]=d,f[3]=p,f[7]=_,f[11]=x,f[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/qr.setFromMatrixColumn(e,0).length(),s=1/qr.setFromMatrixColumn(e,1).length(),o=1/qr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*c,p=o*h,_=a*c,x=a*h;n[0]=l*c,n[4]=-l*h,n[8]=u,n[1]=p+_*u,n[5]=d-x*u,n[9]=-a*l,n[2]=x-d*u,n[6]=_+p*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*c,p=l*h,_=u*c,x=u*h;n[0]=d+x*a,n[4]=_*a-p,n[8]=o*u,n[1]=o*h,n[5]=o*c,n[9]=-a,n[2]=p*a-_,n[6]=x+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*c,p=l*h,_=u*c,x=u*h;n[0]=d-x*a,n[4]=-o*h,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*c,n[9]=x-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*c,p=o*h,_=a*c,x=a*h;n[0]=l*c,n[4]=_*u-p,n[8]=d*u+x,n[1]=l*h,n[5]=x*u+d,n[9]=p*u-_,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*u,_=a*l,x=a*u;n[0]=l*c,n[4]=x-d*h,n[8]=_*h+p,n[1]=h,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*h+_,n[10]=d-x*h}else if(e.order==="XZY"){const d=o*l,p=o*u,_=a*l,x=a*u;n[0]=l*c,n[4]=-h,n[8]=u*c,n[1]=d*h+x,n[5]=o*c,n[9]=p*h-_,n[2]=_*h-p,n[6]=a*c,n[10]=x*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lM,e,uM)}lookAt(e,n,i){const r=this.elements;return mn.subVectors(e,n),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Li.crossVectors(i,mn),Li.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Li.crossVectors(i,mn)),Li.normalize(),Da.crossVectors(mn,Li),r[0]=Li.x,r[4]=Da.x,r[8]=mn.x,r[1]=Li.y,r[5]=Da.y,r[9]=mn.y,r[2]=Li.z,r[6]=Da.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],h=i[5],d=i[9],p=i[13],_=i[2],x=i[6],v=i[10],f=i[14],g=i[3],m=i[7],y=i[11],T=i[15],S=r[0],M=r[4],b=r[8],E=r[12],w=r[1],U=r[5],z=r[9],Q=r[13],D=r[2],O=r[6],G=r[10],Y=r[14],N=r[3],B=r[7],H=r[11],$=r[15];return s[0]=o*S+a*w+l*D+u*N,s[4]=o*M+a*U+l*O+u*B,s[8]=o*b+a*z+l*G+u*H,s[12]=o*E+a*Q+l*Y+u*$,s[1]=c*S+h*w+d*D+p*N,s[5]=c*M+h*U+d*O+p*B,s[9]=c*b+h*z+d*G+p*H,s[13]=c*E+h*Q+d*Y+p*$,s[2]=_*S+x*w+v*D+f*N,s[6]=_*M+x*U+v*O+f*B,s[10]=_*b+x*z+v*G+f*H,s[14]=_*E+x*Q+v*Y+f*$,s[3]=g*S+m*w+y*D+T*N,s[7]=g*M+m*U+y*O+T*B,s[11]=g*b+m*z+y*G+T*H,s[15]=g*E+m*Q+y*Y+T*$,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],h=e[6],d=e[10],p=e[14],_=e[3],x=e[7],v=e[11],f=e[15];return _*(+s*l*h-r*u*h-s*a*d+i*u*d+r*a*p-i*l*p)+x*(+n*l*p-n*u*d+s*o*d-r*o*p+r*u*c-s*l*c)+v*(+n*u*h-n*a*p-s*o*h+i*o*p+s*a*c-i*u*c)+f*(-r*a*c-n*l*h+n*a*d+r*o*h-i*o*d+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=e[9],d=e[10],p=e[11],_=e[12],x=e[13],v=e[14],f=e[15],g=h*v*u-x*d*u+x*l*p-a*v*p-h*l*f+a*d*f,m=_*d*u-c*v*u-_*l*p+o*v*p+c*l*f-o*d*f,y=c*x*u-_*h*u+_*a*p-o*x*p-c*a*f+o*h*f,T=_*h*l-c*x*l-_*a*d+o*x*d+c*a*v-o*h*v,S=n*g+i*m+r*y+s*T;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/S;return e[0]=g*M,e[1]=(x*d*s-h*v*s-x*r*p+i*v*p+h*r*f-i*d*f)*M,e[2]=(a*v*s-x*l*s+x*r*u-i*v*u-a*r*f+i*l*f)*M,e[3]=(h*l*s-a*d*s-h*r*u+i*d*u+a*r*p-i*l*p)*M,e[4]=m*M,e[5]=(c*v*s-_*d*s+_*r*p-n*v*p-c*r*f+n*d*f)*M,e[6]=(_*l*s-o*v*s-_*r*u+n*v*u+o*r*f-n*l*f)*M,e[7]=(o*d*s-c*l*s+c*r*u-n*d*u-o*r*p+n*l*p)*M,e[8]=y*M,e[9]=(_*h*s-c*x*s-_*i*p+n*x*p+c*i*f-n*h*f)*M,e[10]=(o*x*s-_*a*s+_*i*u-n*x*u-o*i*f+n*a*f)*M,e[11]=(c*a*s-o*h*s-c*i*u+n*h*u+o*i*p-n*a*p)*M,e[12]=T*M,e[13]=(c*x*r-_*h*r+_*i*d-n*x*d-c*i*v+n*h*v)*M,e[14]=(_*a*r-o*x*r-_*i*l+n*x*l+o*i*v-n*a*v)*M,e[15]=(o*h*r-c*a*r+c*i*l-n*h*l-o*i*d+n*a*d)*M,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,h=a+a,d=s*u,p=s*c,_=s*h,x=o*c,v=o*h,f=a*h,g=l*u,m=l*c,y=l*h,T=i.x,S=i.y,M=i.z;return r[0]=(1-(x+f))*T,r[1]=(p+y)*T,r[2]=(_-m)*T,r[3]=0,r[4]=(p-y)*S,r[5]=(1-(d+f))*S,r[6]=(v+g)*S,r[7]=0,r[8]=(_+m)*M,r[9]=(v-g)*M,r[10]=(1-(d+x))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=qr.set(r[0],r[1],r[2]).length();const o=qr.set(r[4],r[5],r[6]).length(),a=qr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],zn.copy(this);const u=1/s,c=1/o,h=1/a;return zn.elements[0]*=u,zn.elements[1]*=u,zn.elements[2]*=u,zn.elements[4]*=c,zn.elements[5]*=c,zn.elements[6]*=c,zn.elements[8]*=h,zn.elements[9]*=h,zn.elements[10]*=h,n.setFromRotationMatrix(zn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=xi){const l=this.elements,u=2*s/(n-e),c=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let p,_;if(a===xi)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Vl)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=xi){const l=this.elements,u=1/(n-e),c=1/(i-r),h=1/(o-s),d=(n+e)*u,p=(i+r)*c;let _,x;if(a===xi)_=(o+s)*h,x=-2*h;else if(a===Vl)_=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const qr=new I,zn=new yt,lM=new I(0,0,0),uM=new I(1,1,1),Li=new I,Da=new I,mn=new I,Jp=new yt,Zp=new sa;class hu{constructor(e=0,n=0,i=0,r=hu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Jp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Zp.setFromEuler(this),this.setFromQuaternion(Zp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hu.DEFAULT_ORDER="XYZ";class Pv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cM=0;const Qp=new I,$r=new sa,ci=new yt,Na=new I,co=new I,fM=new I,dM=new sa,em=new I(1,0,0),tm=new I(0,1,0),nm=new I(0,0,1),hM={type:"added"},pM={type:"removed"};class Ut extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=$s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new I,n=new hu,i=new sa,r=new I(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new je}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return $r.setFromAxisAngle(e,n),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,n){return $r.setFromAxisAngle(e,n),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(em,e)}rotateY(e){return this.rotateOnAxis(tm,e)}rotateZ(e){return this.rotateOnAxis(nm,e)}translateOnAxis(e,n){return Qp.copy(e).applyQuaternion(this.quaternion),this.position.add(Qp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(em,e)}translateY(e){return this.translateOnAxis(tm,e)}translateZ(e){return this.translateOnAxis(nm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Na.copy(e):Na.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(co,Na,this.up):ci.lookAt(Na,co,this.up),this.quaternion.setFromRotationMatrix(ci),r&&(ci.extractRotation(r.matrixWorld),$r.setFromRotationMatrix(ci),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(hM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(pM)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,e,fM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,dM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ut.DEFAULT_UP=new I(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kn=new I,fi=new I,dc=new I,di=new I,Kr=new I,Jr=new I,im=new I,hc=new I,pc=new I,mc=new I;let Ua=!1;class Vn{constructor(e=new I,n=new I,i=new I){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),kn.subVectors(e,n),r.cross(kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){kn.subVectors(r,n),fi.subVectors(i,n),dc.subVectors(e,n);const o=kn.dot(kn),a=kn.dot(fi),l=kn.dot(dc),u=fi.dot(fi),c=fi.dot(dc),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(u*l-a*c)*d,_=(o*c-a*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getUV(e,n,i,r,s,o,a,l){return Ua===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ua=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,di.x),l.addScaledVector(o,di.y),l.addScaledVector(a,di.z),l)}static isFrontFacing(e,n,i,r){return kn.subVectors(i,n),fi.subVectors(e,n),kn.cross(fi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),kn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Vn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Ua===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ua=!0),Vn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Vn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Kr.subVectors(r,i),Jr.subVectors(s,i),hc.subVectors(e,i);const l=Kr.dot(hc),u=Jr.dot(hc);if(l<=0&&u<=0)return n.copy(i);pc.subVectors(e,r);const c=Kr.dot(pc),h=Jr.dot(pc);if(c>=0&&h<=c)return n.copy(r);const d=l*h-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(Kr,o);mc.subVectors(e,s);const p=Kr.dot(mc),_=Jr.dot(mc);if(_>=0&&p<=_)return n.copy(s);const x=p*u-l*_;if(x<=0&&u>=0&&_<=0)return a=u/(u-_),n.copy(i).addScaledVector(Jr,a);const v=c*_-p*h;if(v<=0&&h-c>=0&&p-_>=0)return im.subVectors(s,r),a=(h-c)/(h-c+(p-_)),n.copy(r).addScaledVector(im,a);const f=1/(v+x+d);return o=x*f,a=d*f,n.copy(i).addScaledVector(Kr,o).addScaledVector(Jr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Ia={h:0,s:0,l:0};function gc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Fe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=eM(e,1),n=Yt(n,0,1),i=Yt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=gc(o,s,e+1/3),this.g=gc(o,s,e),this.b=gc(o,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=Ft){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ft){const i=Lv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}copyLinearToSRGB(e){return this.r=rc(e.r),this.g=rc(e.g),this.b=rc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return et.fromWorkingColorSpace(Xt.copy(this),e),Math.round(Yt(Xt.r*255,0,255))*65536+Math.round(Yt(Xt.g*255,0,255))*256+Math.round(Yt(Xt.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace(Xt.copy(this),n);const i=Xt.r,r=Xt.g,s=Xt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace(Xt.copy(this),n),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Ft){et.fromWorkingColorSpace(Xt.copy(this),e);const n=Xt.r,i=Xt.g,r=Xt.b;return e!==Ft?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+n,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Di),e.getHSL(Ia);const i=nc(Di.h,Ia.h,n),r=nc(Di.s,Ia.s,n),s=nc(Di.l,Ia.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new Fe;Fe.NAMES=Lv;let mM=0;class Ks extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=$s(),this.name="",this.type="Material",this.blending=Cs,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bf,this.blendDst=Pf,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=kl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vr,this.stencilZFail=Vr,this.stencilZPass=Vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(i.blending=this.blending),this.side!==ir&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bf&&(i.blendSrc=this.blendSrc),this.blendDst!==Pf&&(i.blendDst=this.blendDst),this.blendEquation!==_r&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==kl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Dv extends Ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new I,Oa=new ve;class $n{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Wp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Oa.fromBufferAttribute(this,n),Oa.applyMatrix3(e),this.setXY(n,Oa.x,Oa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ao(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=sn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ao(n,this.array)),n}setX(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ao(n,this.array)),n}setY(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ao(n,this.array)),n}setZ(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ao(n,this.array)),n}setW(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array),r=sn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array),r=sn(r,this.array),s=sn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wp&&(e.usage=this.usage),e}}class Nv extends $n{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Uv extends $n{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class yn extends $n{constructor(e,n,i){super(new Float32Array(e),n,i)}}let gM=0;const Tn=new yt,vc=new Ut,Zr=new I,gn=new oa,fo=new oa,Pt=new I;class Jn extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=$s(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tv(e)?Uv:Nv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,n,i){return Tn.makeTranslation(e,n,i),this.applyMatrix4(Tn),this}scale(e,n,i){return Tn.makeScale(e,n,i),this.applyMatrix4(Tn),this}lookAt(e){return vc.lookAt(e),vc.updateMatrix(),this.applyMatrix4(vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new yn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new du);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];fo.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(gn.min,fo.min),gn.expandByPoint(Pt),Pt.addVectors(gn.max,fo.max),gn.expandByPoint(Pt)):(gn.expandByPoint(fo.min),gn.expandByPoint(fo.max))}gn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Pt.fromBufferAttribute(a,u),l&&(Zr.fromBufferAttribute(e,u),Pt.add(Zr)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $n(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let w=0;w<a;w++)u[w]=new I,c[w]=new I;const h=new I,d=new I,p=new I,_=new ve,x=new ve,v=new ve,f=new I,g=new I;function m(w,U,z){h.fromArray(r,w*3),d.fromArray(r,U*3),p.fromArray(r,z*3),_.fromArray(o,w*2),x.fromArray(o,U*2),v.fromArray(o,z*2),d.sub(h),p.sub(h),x.sub(_),v.sub(_);const Q=1/(x.x*v.y-v.x*x.y);isFinite(Q)&&(f.copy(d).multiplyScalar(v.y).addScaledVector(p,-x.y).multiplyScalar(Q),g.copy(p).multiplyScalar(x.x).addScaledVector(d,-v.x).multiplyScalar(Q),u[w].add(f),u[U].add(f),u[z].add(f),c[w].add(g),c[U].add(g),c[z].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let w=0,U=y.length;w<U;++w){const z=y[w],Q=z.start,D=z.count;for(let O=Q,G=Q+D;O<G;O+=3)m(i[O+0],i[O+1],i[O+2])}const T=new I,S=new I,M=new I,b=new I;function E(w){M.fromArray(s,w*3),b.copy(M);const U=u[w];T.copy(U),T.sub(M.multiplyScalar(M.dot(U))).normalize(),S.crossVectors(b,U);const Q=S.dot(c[w])<0?-1:1;l[w*4]=T.x,l[w*4+1]=T.y,l[w*4+2]=T.z,l[w*4+3]=Q}for(let w=0,U=y.length;w<U;++w){const z=y[w],Q=z.start,D=z.count;for(let O=Q,G=Q+D;O<G;O+=3)E(i[O+0]),E(i[O+1]),E(i[O+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $n(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,u=new I,c=new I,h=new I;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),x=e.getX(d+1),v=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,v),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,v),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(v,u.x,u.y,u.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Pt.fromBufferAttribute(e,n),Pt.normalize(),e.setXYZ(n,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,h=a.normalized,d=new u.constructor(l.length*c);let p=0,_=0;for(let x=0,v=l.length;x<v;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*c;for(let f=0;f<c;f++)d[_++]=u[p++]}return new $n(d,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Jn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,h=u.length;c<h;c++){const d=u[c],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,d=u.length;h<d;h++){const p=u[h];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],h=s[u];for(let d=0,p=h.length;d<p;d++)c.push(h[d].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rm=new yt,fr=new bv,Fa=new du,sm=new I,Qr=new I,es=new I,ts=new I,_c=new I,za=new I,ka=new ve,Ba=new ve,Ha=new ve,om=new I,am=new I,lm=new I,Ga=new I,Va=new I;class Dn extends Ut{constructor(e=new Jn,n=new Dv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){za.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],h=s[l];c!==0&&(_c.fromBufferAttribute(h,e),o?za.addScaledVector(_c,c):za.addScaledVector(_c.sub(n),c))}n.add(za)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fa.copy(i.boundingSphere),Fa.applyMatrix4(s),fr.copy(e.ray).recast(e.near),!(Fa.containsPoint(fr.origin)===!1&&(fr.intersectSphere(Fa,sm)===null||fr.origin.distanceToSquared(sm)>(e.far-e.near)**2))&&(rm.copy(s).invert(),fr.copy(e.ray).applyMatrix4(rm),!(i.boundingBox!==null&&fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,fr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const v=d[_],f=o[v.materialIndex],g=Math.max(v.start,p.start),m=Math.min(a.count,Math.min(v.start+v.count,p.start+p.count));for(let y=g,T=m;y<T;y+=3){const S=a.getX(y),M=a.getX(y+1),b=a.getX(y+2);r=Wa(this,f,e,i,u,c,h,S,M,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let v=_,f=x;v<f;v+=3){const g=a.getX(v),m=a.getX(v+1),y=a.getX(v+2);r=Wa(this,o,e,i,u,c,h,g,m,y),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const v=d[_],f=o[v.materialIndex],g=Math.max(v.start,p.start),m=Math.min(l.count,Math.min(v.start+v.count,p.start+p.count));for(let y=g,T=m;y<T;y+=3){const S=y,M=y+1,b=y+2;r=Wa(this,f,e,i,u,c,h,S,M,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let v=_,f=x;v<f;v+=3){const g=v,m=v+1,y=v+2;r=Wa(this,o,e,i,u,c,h,g,m,y),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}}function vM(t,e,n,i,r,s,o,a){let l;if(e.side===dn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ir,a),l===null)return null;Va.copy(a),Va.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Va);return u<n.near||u>n.far?null:{distance:u,point:Va.clone(),object:t}}function Wa(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Qr),t.getVertexPosition(l,es),t.getVertexPosition(u,ts);const c=vM(t,e,n,i,Qr,es,ts,Ga);if(c){r&&(ka.fromBufferAttribute(r,a),Ba.fromBufferAttribute(r,l),Ha.fromBufferAttribute(r,u),c.uv=Vn.getInterpolation(Ga,Qr,es,ts,ka,Ba,Ha,new ve)),s&&(ka.fromBufferAttribute(s,a),Ba.fromBufferAttribute(s,l),Ha.fromBufferAttribute(s,u),c.uv1=Vn.getInterpolation(Ga,Qr,es,ts,ka,Ba,Ha,new ve),c.uv2=c.uv1),o&&(om.fromBufferAttribute(o,a),am.fromBufferAttribute(o,l),lm.fromBufferAttribute(o,u),c.normal=Vn.getInterpolation(Ga,Qr,es,ts,om,am,lm,new I),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new I,materialIndex:0};Vn.getNormal(Qr,es,ts,h.normal),c.face=h}return c}class Hr extends Jn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new yn(u,3)),this.setAttribute("normal",new yn(c,3)),this.setAttribute("uv",new yn(h,2));function _(x,v,f,g,m,y,T,S,M,b,E){const w=y/M,U=T/b,z=y/2,Q=T/2,D=S/2,O=M+1,G=b+1;let Y=0,N=0;const B=new I;for(let H=0;H<G;H++){const $=H*U-Q;for(let K=0;K<O;K++){const W=K*w-z;B[x]=W*g,B[v]=$*m,B[f]=D,u.push(B.x,B.y,B.z),B[x]=0,B[v]=0,B[f]=S>0?1:-1,c.push(B.x,B.y,B.z),h.push(K/M),h.push(1-H/b),Y+=1}}for(let H=0;H<b;H++)for(let $=0;$<M;$++){const K=d+$+O*H,W=d+$+O*(H+1),J=d+($+1)+O*(H+1),oe=d+($+1)+O*H;l.push(K,W,oe),l.push(W,J,oe),N+=6}a.addGroup(p,N,E),p+=N,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Jt(t){const e={};for(let n=0;n<t.length;n++){const i=Hs(t[n]);for(const r in i)e[r]=i[r]}return e}function _M(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Iv(t){return t.getRenderTarget()===null?t.outputColorSpace:et.workingColorSpace}const xM={clone:Hs,merge:Jt};var yM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,SM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fr extends Ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yM,this.fragmentShader=SM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=_M(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Ov extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=xi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class bn extends Ov{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=If*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return If*2*Math.atan(Math.tan(tc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(tc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ns=-90,is=1;class MM extends Ut{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bn(ns,is,e,n);r.layers=this.layers,this.add(r);const s=new bn(ns,is,e,n);s.layers=this.layers,this.add(s);const o=new bn(ns,is,e,n);o.layers=this.layers,this.add(o);const a=new bn(ns,is,e,n);a.layers=this.layers,this.add(a);const l=new bn(ns,is,e,n);l.layers=this.layers,this.add(l);const u=new bn(ns,is,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===xi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(h,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Fv extends hn{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:zs,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class EM extends Or{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Ro("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Cr?Ft:Pn),this.texture=new Fv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Cn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Hr(5,5,5),s=new Fr({name:"CubemapFromEquirect",uniforms:Hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:Ji});s.uniforms.tEquirect.value=n;const o=new Dn(r,s),a=n.minFilter;return n.minFilter===qo&&(n.minFilter=Cn),new MM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const xc=new I,wM=new I,TM=new je;class mr{constructor(e=new I(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=xc.subVectors(i,n).cross(wM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(xc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||TM.getNormalMatrix(e),r=this.coplanarPoint(xc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const dr=new du,Xa=new I;class Vd{constructor(e=new mr,n=new mr,i=new mr,r=new mr,s=new mr,o=new mr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=xi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],h=r[6],d=r[7],p=r[8],_=r[9],x=r[10],v=r[11],f=r[12],g=r[13],m=r[14],y=r[15];if(i[0].setComponents(l-s,d-u,v-p,y-f).normalize(),i[1].setComponents(l+s,d+u,v+p,y+f).normalize(),i[2].setComponents(l+o,d+c,v+_,y+g).normalize(),i[3].setComponents(l-o,d-c,v-_,y-g).normalize(),i[4].setComponents(l-a,d-h,v-x,y-m).normalize(),n===xi)i[5].setComponents(l+a,d+h,v+x,y+m).normalize();else if(n===Vl)i[5].setComponents(a,h,x,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){return dr.center.set(0,0,0),dr.radius=.7071067811865476,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Xa.x=r.normal.x>0?e.max.x:e.min.x,Xa.y=r.normal.y>0?e.max.y:e.min.y,Xa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function AM(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const h=u.array,d=u.usage,p=h.byteLength,_=t.createBuffer();t.bindBuffer(c,_),t.bufferData(c,h,d),u.onUploadCallback();let x;if(h instanceof Float32Array)x=t.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=t.SHORT;else if(h instanceof Uint32Array)x=t.UNSIGNED_INT;else if(h instanceof Int32Array)x=t.INT;else if(h instanceof Int8Array)x=t.BYTE;else if(h instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:p}}function s(u,c,h){const d=c.array,p=c._updateRange,_=c.updateRanges;if(t.bindBuffer(h,u),p.count===-1&&_.length===0&&t.bufferSubData(h,0,d),_.length!==0){for(let x=0,v=_.length;x<v;x++){const f=_[x];n?t.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):t.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}c.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):t.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);if(h===void 0)i.set(u,r(u,c));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,u,c),h.version=u.version}}return{get:o,remove:a,update:l}}class pu extends Jn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,h=e/a,d=n/l,p=[],_=[],x=[],v=[];for(let f=0;f<c;f++){const g=f*d-o;for(let m=0;m<u;m++){const y=m*h-s;_.push(y,-g,0),x.push(0,0,1),v.push(m/a),v.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<a;g++){const m=g+u*f,y=g+u*(f+1),T=g+1+u*(f+1),S=g+1+u*f;p.push(m,y,S),p.push(y,T,S)}this.setIndex(p),this.setAttribute("position",new yn(_,3)),this.setAttribute("normal",new yn(x,3)),this.setAttribute("uv",new yn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pu(e.width,e.height,e.widthSegments,e.heightSegments)}}var RM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,CM=`#ifdef USE_ALPHAHASH
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
#endif`,bM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,PM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,DM=`#ifdef USE_ALPHATEST
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
#endif`,IM=`#ifdef USE_BATCHING
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
#endif`,OM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,FM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,BM=`#ifdef USE_IRIDESCENCE
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
#endif`,HM=`#ifdef USE_BUMPMAP
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
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$M=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,KM=`#define PI 3.141592653589793
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
#endif`,ZM=`vec3 transformedNormal = objectNormal;
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
#endif`,QM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iE="gl_FragColor = linearToOutputTexel( gl_FragColor );",rE=`
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
}`,sE=`#ifdef USE_ENVMAP
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
#endif`,oE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,aE=`#ifdef USE_ENVMAP
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
#endif`,lE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uE=`#ifdef USE_ENVMAP
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
#endif`,cE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pE=`#ifdef USE_GRADIENTMAP
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
}`,mE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,gE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_E=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xE=`uniform bool receiveShadow;
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
#endif`,yE=`#ifdef USE_ENVMAP
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
#endif`,SE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ME=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,EE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TE=`PhysicalMaterial material;
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
#endif`,AE=`struct PhysicalMaterial {
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
}`,RE=`
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
#endif`,CE=`#if defined( RE_IndirectDiffuse )
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
#endif`,bE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,PE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,NE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,UE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,IE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,OE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,FE=`#if defined( USE_POINTS_UV )
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
#endif`,zE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,HE=`#ifdef USE_MORPHNORMALS
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
#endif`,GE=`#ifdef USE_MORPHTARGETS
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
#endif`,VE=`#ifdef USE_MORPHTARGETS
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
#endif`,WE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,XE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$E=`#ifdef USE_NORMALMAP
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
#endif`,KE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,JE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ZE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,QE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ew=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ow=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fw=`float getShadowMask() {
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
}`,dw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hw=`#ifdef USE_SKINNING
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
#endif`,pw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mw=`#ifdef USE_SKINNING
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
#endif`,gw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_w=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yw=`#ifdef USE_TRANSMISSION
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
#endif`,Sw=`#ifdef USE_TRANSMISSION
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
#endif`,Mw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ew=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ww=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Aw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rw=`uniform sampler2D t2D;
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
}`,Cw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Pw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dw=`#include <common>
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
}`,Nw=`#if DEPTH_PACKING == 3200
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
}`,Uw=`#define DISTANCE
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
}`,Iw=`#define DISTANCE
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
}`,Ow=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zw=`uniform float scale;
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
}`,kw=`uniform vec3 diffuse;
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
}`,Bw=`#include <common>
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
}`,Hw=`uniform vec3 diffuse;
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
}`,Gw=`#define LAMBERT
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
}`,Vw=`#define LAMBERT
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
}`,Ww=`#define MATCAP
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
}`,Xw=`#define MATCAP
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
}`,jw=`#define NORMAL
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
}`,Yw=`#define NORMAL
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
}`,qw=`#define PHONG
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
}`,$w=`#define PHONG
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
}`,Kw=`#define STANDARD
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
}`,Jw=`#define STANDARD
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
}`,Zw=`#define TOON
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
}`,Qw=`#define TOON
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
}`,e1=`uniform float size;
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
}`,t1=`uniform vec3 diffuse;
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
}`,n1=`#include <common>
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
}`,i1=`uniform vec3 color;
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
}`,r1=`uniform float rotation;
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
}`,s1=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:RM,alphahash_pars_fragment:CM,alphamap_fragment:bM,alphamap_pars_fragment:PM,alphatest_fragment:LM,alphatest_pars_fragment:DM,aomap_fragment:NM,aomap_pars_fragment:UM,batching_pars_vertex:IM,batching_vertex:OM,begin_vertex:FM,beginnormal_vertex:zM,bsdfs:kM,iridescence_fragment:BM,bumpmap_pars_fragment:HM,clipping_planes_fragment:GM,clipping_planes_pars_fragment:VM,clipping_planes_pars_vertex:WM,clipping_planes_vertex:XM,color_fragment:jM,color_pars_fragment:YM,color_pars_vertex:qM,color_vertex:$M,common:KM,cube_uv_reflection_fragment:JM,defaultnormal_vertex:ZM,displacementmap_pars_vertex:QM,displacementmap_vertex:eE,emissivemap_fragment:tE,emissivemap_pars_fragment:nE,colorspace_fragment:iE,colorspace_pars_fragment:rE,envmap_fragment:sE,envmap_common_pars_fragment:oE,envmap_pars_fragment:aE,envmap_pars_vertex:lE,envmap_physical_pars_fragment:yE,envmap_vertex:uE,fog_vertex:cE,fog_pars_vertex:fE,fog_fragment:dE,fog_pars_fragment:hE,gradientmap_pars_fragment:pE,lightmap_fragment:mE,lightmap_pars_fragment:gE,lights_lambert_fragment:vE,lights_lambert_pars_fragment:_E,lights_pars_begin:xE,lights_toon_fragment:SE,lights_toon_pars_fragment:ME,lights_phong_fragment:EE,lights_phong_pars_fragment:wE,lights_physical_fragment:TE,lights_physical_pars_fragment:AE,lights_fragment_begin:RE,lights_fragment_maps:CE,lights_fragment_end:bE,logdepthbuf_fragment:PE,logdepthbuf_pars_fragment:LE,logdepthbuf_pars_vertex:DE,logdepthbuf_vertex:NE,map_fragment:UE,map_pars_fragment:IE,map_particle_fragment:OE,map_particle_pars_fragment:FE,metalnessmap_fragment:zE,metalnessmap_pars_fragment:kE,morphcolor_vertex:BE,morphnormal_vertex:HE,morphtarget_pars_vertex:GE,morphtarget_vertex:VE,normal_fragment_begin:WE,normal_fragment_maps:XE,normal_pars_fragment:jE,normal_pars_vertex:YE,normal_vertex:qE,normalmap_pars_fragment:$E,clearcoat_normal_fragment_begin:KE,clearcoat_normal_fragment_maps:JE,clearcoat_pars_fragment:ZE,iridescence_pars_fragment:QE,opaque_fragment:ew,packing:tw,premultiplied_alpha_fragment:nw,project_vertex:iw,dithering_fragment:rw,dithering_pars_fragment:sw,roughnessmap_fragment:ow,roughnessmap_pars_fragment:aw,shadowmap_pars_fragment:lw,shadowmap_pars_vertex:uw,shadowmap_vertex:cw,shadowmask_pars_fragment:fw,skinbase_vertex:dw,skinning_pars_vertex:hw,skinning_vertex:pw,skinnormal_vertex:mw,specularmap_fragment:gw,specularmap_pars_fragment:vw,tonemapping_fragment:_w,tonemapping_pars_fragment:xw,transmission_fragment:yw,transmission_pars_fragment:Sw,uv_pars_fragment:Mw,uv_pars_vertex:Ew,uv_vertex:ww,worldpos_vertex:Tw,background_vert:Aw,background_frag:Rw,backgroundCube_vert:Cw,backgroundCube_frag:bw,cube_vert:Pw,cube_frag:Lw,depth_vert:Dw,depth_frag:Nw,distanceRGBA_vert:Uw,distanceRGBA_frag:Iw,equirect_vert:Ow,equirect_frag:Fw,linedashed_vert:zw,linedashed_frag:kw,meshbasic_vert:Bw,meshbasic_frag:Hw,meshlambert_vert:Gw,meshlambert_frag:Vw,meshmatcap_vert:Ww,meshmatcap_frag:Xw,meshnormal_vert:jw,meshnormal_frag:Yw,meshphong_vert:qw,meshphong_frag:$w,meshphysical_vert:Kw,meshphysical_frag:Jw,meshtoon_vert:Zw,meshtoon_frag:Qw,points_vert:e1,points_frag:t1,shadow_vert:n1,shadow_frag:i1,sprite_vert:r1,sprite_frag:s1},ce={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},ni={basic:{uniforms:Jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Jt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Jt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Jt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Jt([ce.points,ce.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Jt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Jt([ce.common,ce.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Jt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Jt([ce.sprite,ce.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Jt([ce.common,ce.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Jt([ce.lights,ce.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};ni.physical={uniforms:Jt([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const ja={r:0,b:0,g:0};function o1(t,e,n,i,r,s,o){const a=new Fe(0);let l=s===!0?0:1,u,c,h=null,d=0,p=null;function _(v,f){let g=!1,m=f.isScene===!0?f.background:null;m&&m.isTexture&&(m=(f.backgroundBlurriness>0?n:e).get(m)),m===null?x(a,l):m&&m.isColor&&(x(m,1),g=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),m&&(m.isCubeTexture||m.mapping===cu)?(c===void 0&&(c=new Dn(new Hr(1,1,1),new Fr({name:"BackgroundCubeMaterial",uniforms:Hs(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,S,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=m,c.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=et.getTransfer(m.colorSpace)!==ot,(h!==m||d!==m.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=m,d=m.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):m&&m.isTexture&&(u===void 0&&(u=new Dn(new pu(2,2),new Fr({name:"BackgroundMaterial",uniforms:Hs(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=m,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=et.getTransfer(m.colorSpace)!==ot,m.matrixAutoUpdate===!0&&m.updateMatrix(),u.material.uniforms.uvTransform.value.copy(m.matrix),(h!==m||d!==m.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=m,d=m.version,p=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function x(v,f){v.getRGB(ja,Iv(t)),i.buffers.color.setClear(ja.r,ja.g,ja.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(v,f=1){a.set(v),l=f,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,x(a,l)},render:_}}function a1(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=v(null);let u=l,c=!1;function h(D,O,G,Y,N){let B=!1;if(o){const H=x(Y,G,O);u!==H&&(u=H,p(u.object)),B=f(D,Y,G,N),B&&g(D,Y,G,N)}else{const H=O.wireframe===!0;(u.geometry!==Y.id||u.program!==G.id||u.wireframe!==H)&&(u.geometry=Y.id,u.program=G.id,u.wireframe=H,B=!0)}N!==null&&n.update(N,t.ELEMENT_ARRAY_BUFFER),(B||c)&&(c=!1,b(D,O,G,Y),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(N).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(D){return i.isWebGL2?t.bindVertexArray(D):s.bindVertexArrayOES(D)}function _(D){return i.isWebGL2?t.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function x(D,O,G){const Y=G.wireframe===!0;let N=a[D.id];N===void 0&&(N={},a[D.id]=N);let B=N[O.id];B===void 0&&(B={},N[O.id]=B);let H=B[Y];return H===void 0&&(H=v(d()),B[Y]=H),H}function v(D){const O=[],G=[],Y=[];for(let N=0;N<r;N++)O[N]=0,G[N]=0,Y[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:Y,object:D,attributes:{},index:null}}function f(D,O,G,Y){const N=u.attributes,B=O.attributes;let H=0;const $=G.getAttributes();for(const K in $)if($[K].location>=0){const J=N[K];let oe=B[K];if(oe===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(oe=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(oe=D.instanceColor)),J===void 0||J.attribute!==oe||oe&&J.data!==oe.data)return!0;H++}return u.attributesNum!==H||u.index!==Y}function g(D,O,G,Y){const N={},B=O.attributes;let H=0;const $=G.getAttributes();for(const K in $)if($[K].location>=0){let J=B[K];J===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(J=D.instanceColor));const oe={};oe.attribute=J,J&&J.data&&(oe.data=J.data),N[K]=oe,H++}u.attributes=N,u.attributesNum=H,u.index=Y}function m(){const D=u.newAttributes;for(let O=0,G=D.length;O<G;O++)D[O]=0}function y(D){T(D,0)}function T(D,O){const G=u.newAttributes,Y=u.enabledAttributes,N=u.attributeDivisors;G[D]=1,Y[D]===0&&(t.enableVertexAttribArray(D),Y[D]=1),N[D]!==O&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,O),N[D]=O)}function S(){const D=u.newAttributes,O=u.enabledAttributes;for(let G=0,Y=O.length;G<Y;G++)O[G]!==D[G]&&(t.disableVertexAttribArray(G),O[G]=0)}function M(D,O,G,Y,N,B,H){H===!0?t.vertexAttribIPointer(D,O,G,N,B):t.vertexAttribPointer(D,O,G,Y,N,B)}function b(D,O,G,Y){if(i.isWebGL2===!1&&(D.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const N=Y.attributes,B=G.getAttributes(),H=O.defaultAttributeValues;for(const $ in B){const K=B[$];if(K.location>=0){let W=N[$];if(W===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(W=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(W=D.instanceColor)),W!==void 0){const J=W.normalized,oe=W.itemSize,fe=n.get(W);if(fe===void 0)continue;const de=fe.buffer,le=fe.type,Me=fe.bytesPerElement,xe=i.isWebGL2===!0&&(le===t.INT||le===t.UNSIGNED_INT||W.gpuType===mv);if(W.isInterleavedBufferAttribute){const Ae=W.data,P=Ae.stride,ae=W.offset;if(Ae.isInstancedInterleavedBuffer){for(let q=0;q<K.locationSize;q++)T(K.location+q,Ae.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let q=0;q<K.locationSize;q++)y(K.location+q);t.bindBuffer(t.ARRAY_BUFFER,de);for(let q=0;q<K.locationSize;q++)M(K.location+q,oe/K.locationSize,le,J,P*Me,(ae+oe/K.locationSize*q)*Me,xe)}else{if(W.isInstancedBufferAttribute){for(let Ae=0;Ae<K.locationSize;Ae++)T(K.location+Ae,W.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Ae=0;Ae<K.locationSize;Ae++)y(K.location+Ae);t.bindBuffer(t.ARRAY_BUFFER,de);for(let Ae=0;Ae<K.locationSize;Ae++)M(K.location+Ae,oe/K.locationSize,le,J,oe*Me,oe/K.locationSize*Ae*Me,xe)}}else if(H!==void 0){const J=H[$];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(K.location,J);break;case 3:t.vertexAttrib3fv(K.location,J);break;case 4:t.vertexAttrib4fv(K.location,J);break;default:t.vertexAttrib1fv(K.location,J)}}}}S()}function E(){z();for(const D in a){const O=a[D];for(const G in O){const Y=O[G];for(const N in Y)_(Y[N].object),delete Y[N];delete O[G]}delete a[D]}}function w(D){if(a[D.id]===void 0)return;const O=a[D.id];for(const G in O){const Y=O[G];for(const N in Y)_(Y[N].object),delete Y[N];delete O[G]}delete a[D.id]}function U(D){for(const O in a){const G=a[O];if(G[D.id]===void 0)continue;const Y=G[D.id];for(const N in Y)_(Y[N].object),delete Y[N];delete G[D.id]}}function z(){Q(),c=!0,u!==l&&(u=l,p(u.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:z,resetDefaultState:Q,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:U,initAttributes:m,enableAttribute:y,disableUnusedAttributes:S}}function l1(t,e,n,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,h){t.drawArrays(s,c,h),n.update(h,s,1)}function l(c,h,d){if(d===0)return;let p,_;if(r)p=t,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](s,c,h,d),n.update(h,s,d)}function u(c,h,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<d;_++)this.render(c[_],h[_]);else{p.multiDrawArraysWEBGL(s,c,0,h,0,d);let _=0;for(let x=0;x<d;x++)_+=h[x];n.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function u1(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(M){if(M==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),f=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),m=d>0,y=o||e.has("OES_texture_float"),T=m&&y,S=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:v,maxVaryings:f,maxFragmentUniforms:g,vertexTextures:m,floatFragmentTextures:y,floatVertexTextures:T,maxSamples:S}}function c1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new mr,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=c(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,x=h.clipIntersection,v=h.clipShadows,f=t.get(h);if(!r||_===null||_.length===0||s&&!v)s?c(null):u();else{const g=s?0:i,m=g*4;let y=f.clippingState||null;l.value=y,y=c(_,d,m,p);for(let T=0;T!==m;++T)y[T]=n[T];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(h,d,p,_){const x=h!==null?h.length:0;let v=null;if(x!==0){if(v=l.value,_!==!0||v===null){const f=p+x*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(v===null||v.length<f)&&(v=new Float32Array(f));for(let m=0,y=p;m!==x;++m,y+=4)o.copy(h[m]).applyMatrix4(g,a),o.normal.toArray(v,y),v[y+3]=o.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,v}}function f1(t){let e=new WeakMap;function n(o,a){return a===Lf?o.mapping=zs:a===Df&&(o.mapping=ks),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Lf||a===Df)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new EM(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class kv extends Ov{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const _s=4,um=[.125,.215,.35,.446,.526,.582],xr=20,yc=new kv,cm=new Fe;let Sc=null,Mc=0,Ec=0;const gr=(1+Math.sqrt(5))/2,rs=1/gr,fm=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,gr,rs),new I(0,gr,-rs),new I(rs,0,gr),new I(-rs,0,gr),new I(gr,rs,0),new I(-gr,rs,0)];class dm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Sc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sc,Mc,Ec),e.scissorTest=!1,Ya(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===zs||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:$o,format:Xn,colorSpace:Ti,depthBuffer:!1},r=hm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=d1(s)),this._blurMaterial=h1(s,e,n)}return r}_compileMaterial(e){const n=new Dn(this._lodPlanes[0],e);this._renderer.compile(n,yc)}_sceneToCubeUV(e,n,i,r){const a=new bn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,d=c.toneMapping;c.getClearColor(cm),c.toneMapping=Zi,c.autoClear=!1;const p=new Dv({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),_=new Dn(new Hr,p);let x=!1;const v=e.background;v?v.isColor&&(p.color.copy(v),e.background=null,x=!0):(p.color.copy(cm),x=!0);for(let f=0;f<6;f++){const g=f%3;g===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):g===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const m=this._cubeSize;Ya(r,g*m,f>2?m:0,m,m),c.setRenderTarget(r),x&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=d,c.autoClear=h,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===zs||e.mapping===ks;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Dn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ya(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,yc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=fm[(r-1)%fm.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new Dn(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*xr-1),x=s/_,v=isFinite(s)?1+Math.floor(c*x):xr;v>xr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${xr}`);const f=[];let g=0;for(let M=0;M<xr;++M){const b=M/x,E=Math.exp(-b*b/2);f.push(E),M===0?g+=E:M<v&&(g+=2*E)}for(let M=0;M<f.length;M++)f[M]=f[M]/g;d.envMap.value=e.texture,d.samples.value=v,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:m}=this;d.dTheta.value=_,d.mipInt.value=m-i;const y=this._sizeLods[r],T=3*y*(r>m-_s?r-m+_s:0),S=4*(this._cubeSize-y);Ya(n,T,S,3*y,2*y),l.setRenderTarget(n),l.render(h,yc)}}function d1(t){const e=[],n=[],i=[];let r=t;const s=t-_s+1+um.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-_s?l=um[o-t+_s-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,h=1+u,d=[c,c,h,c,h,h,c,c,h,h,c,h],p=6,_=6,x=3,v=2,f=1,g=new Float32Array(x*_*p),m=new Float32Array(v*_*p),y=new Float32Array(f*_*p);for(let S=0;S<p;S++){const M=S%3*2/3-1,b=S>2?0:-1,E=[M,b,0,M+2/3,b,0,M+2/3,b+1,0,M,b,0,M+2/3,b+1,0,M,b+1,0];g.set(E,x*_*S),m.set(d,v*_*S);const w=[S,S,S,S,S,S];y.set(w,f*_*S)}const T=new Jn;T.setAttribute("position",new $n(g,x)),T.setAttribute("uv",new $n(m,v)),T.setAttribute("faceIndex",new $n(y,f)),e.push(T),r>_s&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function hm(t,e,n){const i=new Or(t,e,n);return i.texture.mapping=cu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ya(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function h1(t,e,n){const i=new Float32Array(xr),r=new I(0,1,0);return new Fr({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Wd(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function pm(){return new Fr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wd(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function mm(){return new Fr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Wd(){return`

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
	`}function p1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Lf||l===Df,c=l===zs||l===ks;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new dm(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(u&&h&&h.height>0||c&&h&&r(h)){n===null&&(n=new dm(t));const d=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function m1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function g1(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const x=d.morphAttributes[_];for(let v=0,f=x.length;v<f;v++)e.remove(x[v])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)e.update(d[_],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const _ in p){const x=p[_];for(let v=0,f=x.length;v<f;v++)e.update(x[v],t.ARRAY_BUFFER)}}function u(h){const d=[],p=h.index,_=h.attributes.position;let x=0;if(p!==null){const g=p.array;x=p.version;for(let m=0,y=g.length;m<y;m+=3){const T=g[m+0],S=g[m+1],M=g[m+2];d.push(T,S,S,M,M,T)}}else if(_!==void 0){const g=_.array;x=_.version;for(let m=0,y=g.length/3-1;m<y;m+=3){const T=m+0,S=m+1,M=m+2;d.push(T,S,S,M,M,T)}}else return;const v=new(Tv(d)?Uv:Nv)(d,1);v.version=x;const f=s.get(h);f&&e.remove(f),s.set(h,v)}function c(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function v1(t,e,n,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function c(p,_){t.drawElements(s,_,a,p*l),n.update(_,s,1)}function h(p,_,x){if(x===0)return;let v,f;if(r)v=t,f="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[f](s,_,a,p*l,x),n.update(_,s,x)}function d(p,_,x){if(x===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let f=0;f<x;f++)this.render(p[f]/l,_[f]);else{v.multiDrawElementsWEBGL(s,_,0,a,p,0,x);let f=0;for(let g=0;g<x;g++)f+=_[g];n.update(f,s,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=h,this.renderMultiDraw=d}function _1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function x1(t,e){return t[0]-e[0]}function y1(t,e){return Math.abs(e[1])-Math.abs(t[1])}function S1(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Dt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,h){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,x=_!==void 0?_.length:0;let v=s.get(c);if(v===void 0||v.count!==x){let O=function(){Q.dispose(),s.delete(c),c.removeEventListener("dispose",O)};var p=O;v!==void 0&&v.texture.dispose();const m=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,T=c.morphAttributes.color!==void 0,S=c.morphAttributes.position||[],M=c.morphAttributes.normal||[],b=c.morphAttributes.color||[];let E=0;m===!0&&(E=1),y===!0&&(E=2),T===!0&&(E=3);let w=c.attributes.position.count*E,U=1;w>e.maxTextureSize&&(U=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const z=new Float32Array(w*U*4*x),Q=new Cv(z,w,U,x);Q.type=Hi,Q.needsUpdate=!0;const D=E*4;for(let G=0;G<x;G++){const Y=S[G],N=M[G],B=b[G],H=w*U*4*G;for(let $=0;$<Y.count;$++){const K=$*D;m===!0&&(o.fromBufferAttribute(Y,$),z[H+K+0]=o.x,z[H+K+1]=o.y,z[H+K+2]=o.z,z[H+K+3]=0),y===!0&&(o.fromBufferAttribute(N,$),z[H+K+4]=o.x,z[H+K+5]=o.y,z[H+K+6]=o.z,z[H+K+7]=0),T===!0&&(o.fromBufferAttribute(B,$),z[H+K+8]=o.x,z[H+K+9]=o.y,z[H+K+10]=o.z,z[H+K+11]=B.itemSize===4?o.w:1)}}v={count:x,texture:Q,size:new ve(w,U)},s.set(c,v),c.addEventListener("dispose",O)}let f=0;for(let m=0;m<d.length;m++)f+=d[m];const g=c.morphTargetsRelative?1:1-f;h.getUniforms().setValue(t,"morphTargetBaseInfluence",g),h.getUniforms().setValue(t,"morphTargetInfluences",d),h.getUniforms().setValue(t,"morphTargetsTexture",v.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",v.size)}else{const _=d===void 0?0:d.length;let x=i[c.id];if(x===void 0||x.length!==_){x=[];for(let y=0;y<_;y++)x[y]=[y,0];i[c.id]=x}for(let y=0;y<_;y++){const T=x[y];T[0]=y,T[1]=d[y]}x.sort(y1);for(let y=0;y<8;y++)y<_&&x[y][1]?(a[y][0]=x[y][0],a[y][1]=x[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(x1);const v=c.morphAttributes.position,f=c.morphAttributes.normal;let g=0;for(let y=0;y<8;y++){const T=a[y],S=T[0],M=T[1];S!==Number.MAX_SAFE_INTEGER&&M?(v&&c.getAttribute("morphTarget"+y)!==v[S]&&c.setAttribute("morphTarget"+y,v[S]),f&&c.getAttribute("morphNormal"+y)!==f[S]&&c.setAttribute("morphNormal"+y,f[S]),r[y]=M,g+=M):(v&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),f&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const m=c.morphTargetsRelative?1:1-g;h.getUniforms().setValue(t,"morphTargetBaseInfluence",m),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function M1(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,h=e.get(l,c);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class Bv extends hn{constructor(e,n,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:Rr,c!==Rr&&c!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Rr&&(i=Bi),i===void 0&&c===Bs&&(i=Ar),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Qt,this.minFilter=l!==void 0?l:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Hv=new hn,Gv=new Bv(1,1);Gv.compareFunction=wv;const Vv=new Cv,Wv=new oM,Xv=new Fv,gm=[],vm=[],_m=new Float32Array(16),xm=new Float32Array(9),ym=new Float32Array(4);function Js(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=gm[r];if(s===void 0&&(s=new Float32Array(r),gm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function At(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Rt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function mu(t,e){let n=vm[e];n===void 0&&(n=new Int32Array(e),vm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function E1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function w1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2fv(this.addr,e),Rt(n,e)}}function T1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(At(n,e))return;t.uniform3fv(this.addr,e),Rt(n,e)}}function A1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4fv(this.addr,e),Rt(n,e)}}function R1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Rt(n,e)}else{if(At(n,i))return;ym.set(i),t.uniformMatrix2fv(this.addr,!1,ym),Rt(n,i)}}function C1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Rt(n,e)}else{if(At(n,i))return;xm.set(i),t.uniformMatrix3fv(this.addr,!1,xm),Rt(n,i)}}function b1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Rt(n,e)}else{if(At(n,i))return;_m.set(i),t.uniformMatrix4fv(this.addr,!1,_m),Rt(n,i)}}function P1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function L1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2iv(this.addr,e),Rt(n,e)}}function D1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3iv(this.addr,e),Rt(n,e)}}function N1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4iv(this.addr,e),Rt(n,e)}}function U1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function I1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2uiv(this.addr,e),Rt(n,e)}}function O1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3uiv(this.addr,e),Rt(n,e)}}function F1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4uiv(this.addr,e),Rt(n,e)}}function z1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Gv:Hv;n.setTexture2D(e||s,r)}function k1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Wv,r)}function B1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Xv,r)}function H1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Vv,r)}function G1(t){switch(t){case 5126:return E1;case 35664:return w1;case 35665:return T1;case 35666:return A1;case 35674:return R1;case 35675:return C1;case 35676:return b1;case 5124:case 35670:return P1;case 35667:case 35671:return L1;case 35668:case 35672:return D1;case 35669:case 35673:return N1;case 5125:return U1;case 36294:return I1;case 36295:return O1;case 36296:return F1;case 35678:case 36198:case 36298:case 36306:case 35682:return z1;case 35679:case 36299:case 36307:return k1;case 35680:case 36300:case 36308:case 36293:return B1;case 36289:case 36303:case 36311:case 36292:return H1}}function V1(t,e){t.uniform1fv(this.addr,e)}function W1(t,e){const n=Js(e,this.size,2);t.uniform2fv(this.addr,n)}function X1(t,e){const n=Js(e,this.size,3);t.uniform3fv(this.addr,n)}function j1(t,e){const n=Js(e,this.size,4);t.uniform4fv(this.addr,n)}function Y1(t,e){const n=Js(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function q1(t,e){const n=Js(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function $1(t,e){const n=Js(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function K1(t,e){t.uniform1iv(this.addr,e)}function J1(t,e){t.uniform2iv(this.addr,e)}function Z1(t,e){t.uniform3iv(this.addr,e)}function Q1(t,e){t.uniform4iv(this.addr,e)}function eT(t,e){t.uniform1uiv(this.addr,e)}function tT(t,e){t.uniform2uiv(this.addr,e)}function nT(t,e){t.uniform3uiv(this.addr,e)}function iT(t,e){t.uniform4uiv(this.addr,e)}function rT(t,e,n){const i=this.cache,r=e.length,s=mu(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Hv,s[o])}function sT(t,e,n){const i=this.cache,r=e.length,s=mu(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Wv,s[o])}function oT(t,e,n){const i=this.cache,r=e.length,s=mu(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Xv,s[o])}function aT(t,e,n){const i=this.cache,r=e.length,s=mu(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Vv,s[o])}function lT(t){switch(t){case 5126:return V1;case 35664:return W1;case 35665:return X1;case 35666:return j1;case 35674:return Y1;case 35675:return q1;case 35676:return $1;case 5124:case 35670:return K1;case 35667:case 35671:return J1;case 35668:case 35672:return Z1;case 35669:case 35673:return Q1;case 5125:return eT;case 36294:return tT;case 36295:return nT;case 36296:return iT;case 35678:case 36198:case 36298:case 36306:case 35682:return rT;case 35679:case 36299:case 36307:return sT;case 35680:case 36300:case 36308:case 36293:return oT;case 36289:case 36303:case 36311:case 36292:return aT}}class uT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=G1(n.type)}}class cT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=lT(n.type)}}class fT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const wc=/(\w+)(\])?(\[|\.)?/g;function Sm(t,e){t.seq.push(e),t.map[e.id]=e}function dT(t,e,n){const i=t.name,r=i.length;for(wc.lastIndex=0;;){const s=wc.exec(i),o=wc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Sm(n,u===void 0?new uT(a,t,e):new cT(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new fT(a),Sm(n,h)),n=h}}}class hl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);dT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Mm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const hT=37297;let pT=0;function mT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function gT(t){const e=et.getPrimaries(et.workingColorSpace),n=et.getPrimaries(t);let i;switch(e===n?i="":e===Gl&&n===Hl?i="LinearDisplayP3ToLinearSRGB":e===Hl&&n===Gl&&(i="LinearSRGBToLinearDisplayP3"),t){case Ti:case fu:return[i,"LinearTransferOETF"];case Ft:case Gd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Em(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+mT(t.getShaderSource(e),o)}else return r}function vT(t,e){const n=gT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function _T(t,e){let n;switch(e){case bS:n="Linear";break;case PS:n="Reinhard";break;case LS:n="OptimizedCineon";break;case DS:n="ACESFilmic";break;case US:n="AgX";break;case NS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function xT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xs).join(`
`)}function yT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(xs).join(`
`)}function ST(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function MT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function xs(t){return t!==""}function wm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ET=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ff(t){return t.replace(ET,TT)}const wT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function TT(t,e){let n=Ge[e];if(n===void 0){const i=wT.get(e);if(i!==void 0)n=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ff(n)}const AT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Am(t){return t.replace(AT,RT)}function RT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Rm(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function CT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===fv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===dv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function bT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case zs:case ks:e="ENVMAP_TYPE_CUBE";break;case cu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function PT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ks:e="ENVMAP_MODE_REFRACTION";break}return e}function LT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case hv:e="ENVMAP_BLENDING_MULTIPLY";break;case RS:e="ENVMAP_BLENDING_MIX";break;case CS:e="ENVMAP_BLENDING_ADD";break}return e}function DT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function NT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=CT(n),u=bT(n),c=PT(n),h=LT(n),d=DT(n),p=n.isWebGL2?"":xT(n),_=yT(n),x=ST(s),v=r.createProgram();let f,g,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(xs).join(`
`),f.length>0&&(f+=`
`),g=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(xs).join(`
`),g.length>0&&(g+=`
`)):(f=[Rm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xs).join(`
`),g=[p,Rm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Zi?"#define TONE_MAPPING":"",n.toneMapping!==Zi?Ge.tonemapping_pars_fragment:"",n.toneMapping!==Zi?_T("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,vT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(xs).join(`
`)),o=Ff(o),o=wm(o,n),o=Tm(o,n),a=Ff(a),a=wm(a,n),a=Tm(a,n),o=Am(o),a=Am(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,f=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,g=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Xp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Xp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=m+f+o,T=m+g+a,S=Mm(r,r.VERTEX_SHADER,y),M=Mm(r,r.FRAGMENT_SHADER,T);r.attachShader(v,S),r.attachShader(v,M),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function b(z){if(t.debug.checkShaderErrors){const Q=r.getProgramInfoLog(v).trim(),D=r.getShaderInfoLog(S).trim(),O=r.getShaderInfoLog(M).trim();let G=!0,Y=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(G=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,S,M);else{const N=Em(r,S,"vertex"),B=Em(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+N+`
`+B)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(D===""||O==="")&&(Y=!1);Y&&(z.diagnostics={runnable:G,programLog:Q,vertexShader:{log:D,prefix:f},fragmentShader:{log:O,prefix:g}})}r.deleteShader(S),r.deleteShader(M),E=new hl(r,v),w=MT(r,v)}let E;this.getUniforms=function(){return E===void 0&&b(this),E};let w;this.getAttributes=function(){return w===void 0&&b(this),w};let U=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(v,hT)),U},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=pT++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=M,this}let UT=0;class IT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new OT(e),n.set(e,i)),i}}class OT{constructor(e){this.id=UT++,this.code=e,this.usedTimes=0}}function FT(t,e,n,i,r,s,o){const a=new Pv,l=new IT,u=[],c=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return E===0?"uv":`uv${E}`}function v(E,w,U,z,Q){const D=z.fog,O=Q.geometry,G=E.isMeshStandardMaterial?z.environment:null,Y=(E.isMeshStandardMaterial?n:e).get(E.envMap||G),N=Y&&Y.mapping===cu?Y.image.height:null,B=_[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const H=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,$=H!==void 0?H.length:0;let K=0;O.morphAttributes.position!==void 0&&(K=1),O.morphAttributes.normal!==void 0&&(K=2),O.morphAttributes.color!==void 0&&(K=3);let W,J,oe,fe;if(B){const $t=ni[B];W=$t.vertexShader,J=$t.fragmentShader}else W=E.vertexShader,J=E.fragmentShader,l.update(E),oe=l.getVertexShaderID(E),fe=l.getFragmentShaderID(E);const de=t.getRenderTarget(),le=Q.isInstancedMesh===!0,Me=Q.isBatchedMesh===!0,xe=!!E.map,Ae=!!E.matcap,P=!!Y,ae=!!E.aoMap,q=!!E.lightMap,re=!!E.bumpMap,Z=!!E.normalMap,be=!!E.displacementMap,_e=!!E.emissiveMap,R=!!E.metalnessMap,A=!!E.roughnessMap,k=E.anisotropy>0,ie=E.clearcoat>0,te=E.iridescence>0,ee=E.sheen>0,Re=E.transmission>0,pe=k&&!!E.anisotropyMap,Ee=ie&&!!E.clearcoatMap,Le=ie&&!!E.clearcoatNormalMap,ke=ie&&!!E.clearcoatRoughnessMap,ne=te&&!!E.iridescenceMap,Je=te&&!!E.iridescenceThicknessMap,Ye=ee&&!!E.sheenColorMap,Oe=ee&&!!E.sheenRoughnessMap,Pe=!!E.specularMap,we=!!E.specularColorMap,He=!!E.specularIntensityMap,Ze=Re&&!!E.transmissionMap,pt=Re&&!!E.thicknessMap,We=!!E.gradientMap,ue=!!E.alphaMap,L=E.alphaTest>0,me=!!E.alphaHash,ge=!!E.extensions,Ue=!!O.attributes.uv1,De=!!O.attributes.uv2,tt=!!O.attributes.uv3;let nt=Zi;return E.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(nt=t.toneMapping),{isWebGL2:c,shaderID:B,shaderType:E.type,shaderName:E.name,vertexShader:W,fragmentShader:J,defines:E.defines,customVertexShaderID:oe,customFragmentShaderID:fe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Me,instancing:le,instancingColor:le&&Q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:de===null?t.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Ti,map:xe,matcap:Ae,envMap:P,envMapMode:P&&Y.mapping,envMapCubeUVHeight:N,aoMap:ae,lightMap:q,bumpMap:re,normalMap:Z,displacementMap:d&&be,emissiveMap:_e,normalMapObjectSpace:Z&&E.normalMapType===jS,normalMapTangentSpace:Z&&E.normalMapType===Ev,metalnessMap:R,roughnessMap:A,anisotropy:k,anisotropyMap:pe,clearcoat:ie,clearcoatMap:Ee,clearcoatNormalMap:Le,clearcoatRoughnessMap:ke,iridescence:te,iridescenceMap:ne,iridescenceThicknessMap:Je,sheen:ee,sheenColorMap:Ye,sheenRoughnessMap:Oe,specularMap:Pe,specularColorMap:we,specularIntensityMap:He,transmission:Re,transmissionMap:Ze,thicknessMap:pt,gradientMap:We,opaque:E.transparent===!1&&E.blending===Cs,alphaMap:ue,alphaTest:L,alphaHash:me,combine:E.combine,mapUv:xe&&x(E.map.channel),aoMapUv:ae&&x(E.aoMap.channel),lightMapUv:q&&x(E.lightMap.channel),bumpMapUv:re&&x(E.bumpMap.channel),normalMapUv:Z&&x(E.normalMap.channel),displacementMapUv:be&&x(E.displacementMap.channel),emissiveMapUv:_e&&x(E.emissiveMap.channel),metalnessMapUv:R&&x(E.metalnessMap.channel),roughnessMapUv:A&&x(E.roughnessMap.channel),anisotropyMapUv:pe&&x(E.anisotropyMap.channel),clearcoatMapUv:Ee&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Le&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&x(E.sheenRoughnessMap.channel),specularMapUv:Pe&&x(E.specularMap.channel),specularColorMapUv:we&&x(E.specularColorMap.channel),specularIntensityMapUv:He&&x(E.specularIntensityMap.channel),transmissionMapUv:Ze&&x(E.transmissionMap.channel),thicknessMapUv:pt&&x(E.thicknessMap.channel),alphaMapUv:ue&&x(E.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Z||k),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Ue,vertexUv2s:De,vertexUv3s:tt,pointsUvs:Q.isPoints===!0&&!!O.attributes.uv&&(xe||ue),fog:!!D,useFog:E.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:Q.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:K,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:nt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:xe&&E.map.isVideoTexture===!0&&et.getTransfer(E.map.colorSpace)===ot,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===an,flipSided:E.side===dn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:ge&&E.extensions.derivatives===!0,extensionFragDepth:ge&&E.extensions.fragDepth===!0,extensionDrawBuffers:ge&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:ge&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ge&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function f(E){const w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(const U in E.defines)w.push(U),w.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(g(w,E),m(w,E),w.push(t.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function g(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function m(E,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),E.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function y(E){const w=_[E.type];let U;if(w){const z=ni[w];U=xM.clone(z.uniforms)}else U=E.uniforms;return U}function T(E,w){let U;for(let z=0,Q=u.length;z<Q;z++){const D=u[z];if(D.cacheKey===w){U=D,++U.usedTimes;break}}return U===void 0&&(U=new NT(t,w,E,s),u.push(U)),U}function S(E){if(--E.usedTimes===0){const w=u.indexOf(E);u[w]=u[u.length-1],u.pop(),E.destroy()}}function M(E){l.remove(E)}function b(){l.dispose()}return{getParameters:v,getProgramCacheKey:f,getUniforms:y,acquireProgram:T,releaseProgram:S,releaseShaderCache:M,programs:u,dispose:b}}function zT(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function kT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Cm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function bm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,p,_,x,v){let f=t[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:_,renderOrder:h.renderOrder,z:x,group:v},t[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=x,f.group=v),e++,f}function a(h,d,p,_,x,v){const f=o(h,d,p,_,x,v);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(h,d,p,_,x,v){const f=o(h,d,p,_,x,v);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function u(h,d){n.length>1&&n.sort(h||kT),i.length>1&&i.sort(d||Cm),r.length>1&&r.sort(d||Cm)}function c(){for(let h=e,d=t.length;h<d;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function BT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new bm,t.set(i,[o])):r>=s.length?(o=new bm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function HT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new I,color:new Fe};break;case"SpotLight":n={position:new I,direction:new I,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":n={color:new Fe,position:new I,halfWidth:new I,halfHeight:new I};break}return t[e.id]=n,n}}}function GT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let VT=0;function WT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function XT(t,e){const n=new HT,i=GT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new I);const s=new I,o=new yt,a=new yt;function l(c,h){let d=0,p=0,_=0;for(let z=0;z<9;z++)r.probe[z].set(0,0,0);let x=0,v=0,f=0,g=0,m=0,y=0,T=0,S=0,M=0,b=0,E=0;c.sort(WT);const w=h===!0?Math.PI:1;for(let z=0,Q=c.length;z<Q;z++){const D=c[z],O=D.color,G=D.intensity,Y=D.distance,N=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=O.r*G*w,p+=O.g*G*w,_+=O.b*G*w;else if(D.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(D.sh.coefficients[B],G);E++}else if(D.isDirectionalLight){const B=n.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity*w),D.castShadow){const H=D.shadow,$=i.get(D);$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,r.directionalShadow[x]=$,r.directionalShadowMap[x]=N,r.directionalShadowMatrix[x]=D.shadow.matrix,y++}r.directional[x]=B,x++}else if(D.isSpotLight){const B=n.get(D);B.position.setFromMatrixPosition(D.matrixWorld),B.color.copy(O).multiplyScalar(G*w),B.distance=Y,B.coneCos=Math.cos(D.angle),B.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),B.decay=D.decay,r.spot[f]=B;const H=D.shadow;if(D.map&&(r.spotLightMap[M]=D.map,M++,H.updateMatrices(D),D.castShadow&&b++),r.spotLightMatrix[f]=H.matrix,D.castShadow){const $=i.get(D);$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,r.spotShadow[f]=$,r.spotShadowMap[f]=N,S++}f++}else if(D.isRectAreaLight){const B=n.get(D);B.color.copy(O).multiplyScalar(G),B.halfWidth.set(D.width*.5,0,0),B.halfHeight.set(0,D.height*.5,0),r.rectArea[g]=B,g++}else if(D.isPointLight){const B=n.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity*w),B.distance=D.distance,B.decay=D.decay,D.castShadow){const H=D.shadow,$=i.get(D);$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,$.shadowCameraNear=H.camera.near,$.shadowCameraFar=H.camera.far,r.pointShadow[v]=$,r.pointShadowMap[v]=N,r.pointShadowMatrix[v]=D.shadow.matrix,T++}r.point[v]=B,v++}else if(D.isHemisphereLight){const B=n.get(D);B.skyColor.copy(D.color).multiplyScalar(G*w),B.groundColor.copy(D.groundColor).multiplyScalar(G*w),r.hemi[m]=B,m++}}g>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=_;const U=r.hash;(U.directionalLength!==x||U.pointLength!==v||U.spotLength!==f||U.rectAreaLength!==g||U.hemiLength!==m||U.numDirectionalShadows!==y||U.numPointShadows!==T||U.numSpotShadows!==S||U.numSpotMaps!==M||U.numLightProbes!==E)&&(r.directional.length=x,r.spot.length=f,r.rectArea.length=g,r.point.length=v,r.hemi.length=m,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=S,r.spotShadowMap.length=S,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=S+M-b,r.spotLightMap.length=M,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=E,U.directionalLength=x,U.pointLength=v,U.spotLength=f,U.rectAreaLength=g,U.hemiLength=m,U.numDirectionalShadows=y,U.numPointShadows=T,U.numSpotShadows=S,U.numSpotMaps=M,U.numLightProbes=E,r.version=VT++)}function u(c,h){let d=0,p=0,_=0,x=0,v=0;const f=h.matrixWorldInverse;for(let g=0,m=c.length;g<m;g++){const y=c[g];if(y.isDirectionalLight){const T=r.directional[d];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),d++}else if(y.isSpotLight){const T=r.spot[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),_++}else if(y.isRectAreaLight){const T=r.rectArea[x];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(f),a.identity(),o.copy(y.matrixWorld),o.premultiply(f),a.extractRotation(o),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const T=r.point[p];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const T=r.hemi[v];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(f),v++}}}return{setup:l,setupView:u,state:r}}function Pm(t,e){const n=new XT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function u(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function jT(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Pm(t,e),n.set(s,[l])):o>=a.length?(l=new Pm(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class YT extends Ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=WS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qT extends Ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $T=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KT=`uniform sampler2D shadow_pass;
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
}`;function JT(t,e,n){let i=new Vd;const r=new ve,s=new ve,o=new Dt,a=new YT({depthPacking:XS}),l=new qT,u={},c=n.maxTextureSize,h={[ir]:dn,[dn]:ir,[an]:an},d=new Fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:$T,fragmentShader:KT}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Jn;_.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Dn(_,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fv;let f=this.type;this.render=function(S,M,b){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||S.length===0)return;const E=t.getRenderTarget(),w=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Ji),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const Q=f!==hi&&this.type===hi,D=f===hi&&this.type!==hi;for(let O=0,G=S.length;O<G;O++){const Y=S[O],N=Y.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const B=N.getFrameExtents();if(r.multiply(B),s.copy(N.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/B.x),r.x=s.x*B.x,N.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/B.y),r.y=s.y*B.y,N.mapSize.y=s.y)),N.map===null||Q===!0||D===!0){const $=this.type!==hi?{minFilter:Qt,magFilter:Qt}:{};N.map!==null&&N.map.dispose(),N.map=new Or(r.x,r.y,$),N.map.texture.name=Y.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const H=N.getViewportCount();for(let $=0;$<H;$++){const K=N.getViewport($);o.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),z.viewport(o),N.updateMatrices(Y,$),i=N.getFrustum(),y(M,b,N.camera,Y,this.type)}N.isPointLightShadow!==!0&&this.type===hi&&g(N,b),N.needsUpdate=!1}f=this.type,v.needsUpdate=!1,t.setRenderTarget(E,w,U)};function g(S,M){const b=e.update(x);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Or(r.x,r.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,t.setRenderTarget(S.mapPass),t.clear(),t.renderBufferDirect(M,null,b,d,x,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,t.setRenderTarget(S.map),t.clear(),t.renderBufferDirect(M,null,b,p,x,null)}function m(S,M,b,E){let w=null;const U=b.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(U!==void 0)w=U;else if(w=b.isPointLight===!0?l:a,t.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const z=w.uuid,Q=M.uuid;let D=u[z];D===void 0&&(D={},u[z]=D);let O=D[Q];O===void 0&&(O=w.clone(),D[Q]=O,M.addEventListener("dispose",T)),w=O}if(w.visible=M.visible,w.wireframe=M.wireframe,E===hi?w.side=M.shadowSide!==null?M.shadowSide:M.side:w.side=M.shadowSide!==null?M.shadowSide:h[M.side],w.alphaMap=M.alphaMap,w.alphaTest=M.alphaTest,w.map=M.map,w.clipShadows=M.clipShadows,w.clippingPlanes=M.clippingPlanes,w.clipIntersection=M.clipIntersection,w.displacementMap=M.displacementMap,w.displacementScale=M.displacementScale,w.displacementBias=M.displacementBias,w.wireframeLinewidth=M.wireframeLinewidth,w.linewidth=M.linewidth,b.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const z=t.properties.get(w);z.light=b}return w}function y(S,M,b,E,w){if(S.visible===!1)return;if(S.layers.test(M.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&w===hi)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,S.matrixWorld);const Q=e.update(S),D=S.material;if(Array.isArray(D)){const O=Q.groups;for(let G=0,Y=O.length;G<Y;G++){const N=O[G],B=D[N.materialIndex];if(B&&B.visible){const H=m(S,B,E,w);S.onBeforeShadow(t,S,M,b,Q,H,N),t.renderBufferDirect(b,null,Q,H,S,N),S.onAfterShadow(t,S,M,b,Q,H,N)}}}else if(D.visible){const O=m(S,D,E,w);S.onBeforeShadow(t,S,M,b,Q,O,null),t.renderBufferDirect(b,null,Q,O,S,null),S.onAfterShadow(t,S,M,b,Q,O,null)}}const z=S.children;for(let Q=0,D=z.length;Q<D;Q++)y(z[Q],M,b,E,w)}function T(S){S.target.removeEventListener("dispose",T);for(const b in u){const E=u[b],w=S.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}function ZT(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const me=new Dt;let ge=null;const Ue=new Dt(0,0,0,0);return{setMask:function(De){ge!==De&&!L&&(t.colorMask(De,De,De,De),ge=De)},setLocked:function(De){L=De},setClear:function(De,tt,nt,Ct,$t){$t===!0&&(De*=Ct,tt*=Ct,nt*=Ct),me.set(De,tt,nt,Ct),Ue.equals(me)===!1&&(t.clearColor(De,tt,nt,Ct),Ue.copy(me))},reset:function(){L=!1,ge=null,Ue.set(-1,0,0,0)}}}function s(){let L=!1,me=null,ge=null,Ue=null;return{setTest:function(De){De?Me(t.DEPTH_TEST):xe(t.DEPTH_TEST)},setMask:function(De){me!==De&&!L&&(t.depthMask(De),me=De)},setFunc:function(De){if(ge!==De){switch(De){case yS:t.depthFunc(t.NEVER);break;case SS:t.depthFunc(t.ALWAYS);break;case MS:t.depthFunc(t.LESS);break;case kl:t.depthFunc(t.LEQUAL);break;case ES:t.depthFunc(t.EQUAL);break;case wS:t.depthFunc(t.GEQUAL);break;case TS:t.depthFunc(t.GREATER);break;case AS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ge=De}},setLocked:function(De){L=De},setClear:function(De){Ue!==De&&(t.clearDepth(De),Ue=De)},reset:function(){L=!1,me=null,ge=null,Ue=null}}}function o(){let L=!1,me=null,ge=null,Ue=null,De=null,tt=null,nt=null,Ct=null,$t=null;return{setTest:function(it){L||(it?Me(t.STENCIL_TEST):xe(t.STENCIL_TEST))},setMask:function(it){me!==it&&!L&&(t.stencilMask(it),me=it)},setFunc:function(it,Kt,Zn){(ge!==it||Ue!==Kt||De!==Zn)&&(t.stencilFunc(it,Kt,Zn),ge=it,Ue=Kt,De=Zn)},setOp:function(it,Kt,Zn){(tt!==it||nt!==Kt||Ct!==Zn)&&(t.stencilOp(it,Kt,Zn),tt=it,nt=Kt,Ct=Zn)},setLocked:function(it){L=it},setClear:function(it){$t!==it&&(t.clearStencil(it),$t=it)},reset:function(){L=!1,me=null,ge=null,Ue=null,De=null,tt=null,nt=null,Ct=null,$t=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,h=new WeakMap;let d={},p={},_=new WeakMap,x=[],v=null,f=!1,g=null,m=null,y=null,T=null,S=null,M=null,b=null,E=new Fe(0,0,0),w=0,U=!1,z=null,Q=null,D=null,O=null,G=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,B=0;const H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(H)[1]),N=B>=1):H.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),N=B>=2);let $=null,K={};const W=t.getParameter(t.SCISSOR_BOX),J=t.getParameter(t.VIEWPORT),oe=new Dt().fromArray(W),fe=new Dt().fromArray(J);function de(L,me,ge,Ue){const De=new Uint8Array(4),tt=t.createTexture();t.bindTexture(L,tt),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let nt=0;nt<ge;nt++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(me,0,t.RGBA,1,1,Ue,0,t.RGBA,t.UNSIGNED_BYTE,De):t.texImage2D(me+nt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,De);return tt}const le={};le[t.TEXTURE_2D]=de(t.TEXTURE_2D,t.TEXTURE_2D,1),le[t.TEXTURE_CUBE_MAP]=de(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(le[t.TEXTURE_2D_ARRAY]=de(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),le[t.TEXTURE_3D]=de(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Me(t.DEPTH_TEST),l.setFunc(kl),_e(!1),R(fp),Me(t.CULL_FACE),Z(Ji);function Me(L){d[L]!==!0&&(t.enable(L),d[L]=!0)}function xe(L){d[L]!==!1&&(t.disable(L),d[L]=!1)}function Ae(L,me){return p[L]!==me?(t.bindFramebuffer(L,me),p[L]=me,i&&(L===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=me),L===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=me)),!0):!1}function P(L,me){let ge=x,Ue=!1;if(L)if(ge=_.get(me),ge===void 0&&(ge=[],_.set(me,ge)),L.isWebGLMultipleRenderTargets){const De=L.texture;if(ge.length!==De.length||ge[0]!==t.COLOR_ATTACHMENT0){for(let tt=0,nt=De.length;tt<nt;tt++)ge[tt]=t.COLOR_ATTACHMENT0+tt;ge.length=De.length,Ue=!0}}else ge[0]!==t.COLOR_ATTACHMENT0&&(ge[0]=t.COLOR_ATTACHMENT0,Ue=!0);else ge[0]!==t.BACK&&(ge[0]=t.BACK,Ue=!0);Ue&&(n.isWebGL2?t.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function ae(L){return v!==L?(t.useProgram(L),v=L,!0):!1}const q={[_r]:t.FUNC_ADD,[sS]:t.FUNC_SUBTRACT,[oS]:t.FUNC_REVERSE_SUBTRACT};if(i)q[mp]=t.MIN,q[gp]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(q[mp]=L.MIN_EXT,q[gp]=L.MAX_EXT)}const re={[aS]:t.ZERO,[lS]:t.ONE,[uS]:t.SRC_COLOR,[bf]:t.SRC_ALPHA,[mS]:t.SRC_ALPHA_SATURATE,[hS]:t.DST_COLOR,[fS]:t.DST_ALPHA,[cS]:t.ONE_MINUS_SRC_COLOR,[Pf]:t.ONE_MINUS_SRC_ALPHA,[pS]:t.ONE_MINUS_DST_COLOR,[dS]:t.ONE_MINUS_DST_ALPHA,[gS]:t.CONSTANT_COLOR,[vS]:t.ONE_MINUS_CONSTANT_COLOR,[_S]:t.CONSTANT_ALPHA,[xS]:t.ONE_MINUS_CONSTANT_ALPHA};function Z(L,me,ge,Ue,De,tt,nt,Ct,$t,it){if(L===Ji){f===!0&&(xe(t.BLEND),f=!1);return}if(f===!1&&(Me(t.BLEND),f=!0),L!==rS){if(L!==g||it!==U){if((m!==_r||S!==_r)&&(t.blendEquation(t.FUNC_ADD),m=_r,S=_r),it)switch(L){case Cs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case dp:t.blendFunc(t.ONE,t.ONE);break;case hp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case pp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Cs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case dp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case hp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case pp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,T=null,M=null,b=null,E.set(0,0,0),w=0,g=L,U=it}return}De=De||me,tt=tt||ge,nt=nt||Ue,(me!==m||De!==S)&&(t.blendEquationSeparate(q[me],q[De]),m=me,S=De),(ge!==y||Ue!==T||tt!==M||nt!==b)&&(t.blendFuncSeparate(re[ge],re[Ue],re[tt],re[nt]),y=ge,T=Ue,M=tt,b=nt),(Ct.equals(E)===!1||$t!==w)&&(t.blendColor(Ct.r,Ct.g,Ct.b,$t),E.copy(Ct),w=$t),g=L,U=!1}function be(L,me){L.side===an?xe(t.CULL_FACE):Me(t.CULL_FACE);let ge=L.side===dn;me&&(ge=!ge),_e(ge),L.blending===Cs&&L.transparent===!1?Z(Ji):Z(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Ue=L.stencilWrite;u.setTest(Ue),Ue&&(u.setMask(L.stencilWriteMask),u.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),u.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),k(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Me(t.SAMPLE_ALPHA_TO_COVERAGE):xe(t.SAMPLE_ALPHA_TO_COVERAGE)}function _e(L){z!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),z=L)}function R(L){L!==nS?(Me(t.CULL_FACE),L!==Q&&(L===fp?t.cullFace(t.BACK):L===iS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):xe(t.CULL_FACE),Q=L}function A(L){L!==D&&(N&&t.lineWidth(L),D=L)}function k(L,me,ge){L?(Me(t.POLYGON_OFFSET_FILL),(O!==me||G!==ge)&&(t.polygonOffset(me,ge),O=me,G=ge)):xe(t.POLYGON_OFFSET_FILL)}function ie(L){L?Me(t.SCISSOR_TEST):xe(t.SCISSOR_TEST)}function te(L){L===void 0&&(L=t.TEXTURE0+Y-1),$!==L&&(t.activeTexture(L),$=L)}function ee(L,me,ge){ge===void 0&&($===null?ge=t.TEXTURE0+Y-1:ge=$);let Ue=K[ge];Ue===void 0&&(Ue={type:void 0,texture:void 0},K[ge]=Ue),(Ue.type!==L||Ue.texture!==me)&&($!==ge&&(t.activeTexture(ge),$=ge),t.bindTexture(L,me||le[L]),Ue.type=L,Ue.texture=me)}function Re(){const L=K[$];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function pe(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ke(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Je(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ye(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Oe(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pe(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function He(L){oe.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),oe.copy(L))}function Ze(L){fe.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),fe.copy(L))}function pt(L,me){let ge=h.get(me);ge===void 0&&(ge=new WeakMap,h.set(me,ge));let Ue=ge.get(L);Ue===void 0&&(Ue=t.getUniformBlockIndex(me,L.name),ge.set(L,Ue))}function We(L,me){const Ue=h.get(me).get(L);c.get(me)!==Ue&&(t.uniformBlockBinding(me,Ue,L.__bindingPointIndex),c.set(me,Ue))}function ue(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},$=null,K={},p={},_=new WeakMap,x=[],v=null,f=!1,g=null,m=null,y=null,T=null,S=null,M=null,b=null,E=new Fe(0,0,0),w=0,U=!1,z=null,Q=null,D=null,O=null,G=null,oe.set(0,0,t.canvas.width,t.canvas.height),fe.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Me,disable:xe,bindFramebuffer:Ae,drawBuffers:P,useProgram:ae,setBlending:Z,setMaterial:be,setFlipSided:_e,setCullFace:R,setLineWidth:A,setPolygonOffset:k,setScissorTest:ie,activeTexture:te,bindTexture:ee,unbindTexture:Re,compressedTexImage2D:pe,compressedTexImage3D:Ee,texImage2D:Pe,texImage3D:we,updateUBOMapping:pt,uniformBlockBinding:We,texStorage2D:Ye,texStorage3D:Oe,texSubImage2D:Le,texSubImage3D:ke,compressedTexSubImage2D:ne,compressedTexSubImage3D:Je,scissor:He,viewport:Ze,reset:ue}}function QT(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,A){return p?new OffscreenCanvas(R,A):Wl("canvas")}function x(R,A,k,ie){let te=1;if((R.width>ie||R.height>ie)&&(te=ie/Math.max(R.width,R.height)),te<1||A===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ee=A?Of:Math.floor,Re=ee(te*R.width),pe=ee(te*R.height);h===void 0&&(h=_(Re,pe));const Ee=k?_(Re,pe):h;return Ee.width=Re,Ee.height=pe,Ee.getContext("2d").drawImage(R,0,0,Re,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Re+"x"+pe+")."),Ee}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function v(R){return jp(R.width)&&jp(R.height)}function f(R){return a?!1:R.wrapS!==Wn||R.wrapT!==Wn||R.minFilter!==Qt&&R.minFilter!==Cn}function g(R,A){return R.generateMipmaps&&A&&R.minFilter!==Qt&&R.minFilter!==Cn}function m(R){t.generateMipmap(R)}function y(R,A,k,ie,te=!1){if(a===!1)return A;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ee=A;if(A===t.RED&&(k===t.FLOAT&&(ee=t.R32F),k===t.HALF_FLOAT&&(ee=t.R16F),k===t.UNSIGNED_BYTE&&(ee=t.R8)),A===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(ee=t.R8UI),k===t.UNSIGNED_SHORT&&(ee=t.R16UI),k===t.UNSIGNED_INT&&(ee=t.R32UI),k===t.BYTE&&(ee=t.R8I),k===t.SHORT&&(ee=t.R16I),k===t.INT&&(ee=t.R32I)),A===t.RG&&(k===t.FLOAT&&(ee=t.RG32F),k===t.HALF_FLOAT&&(ee=t.RG16F),k===t.UNSIGNED_BYTE&&(ee=t.RG8)),A===t.RGBA){const Re=te?Bl:et.getTransfer(ie);k===t.FLOAT&&(ee=t.RGBA32F),k===t.HALF_FLOAT&&(ee=t.RGBA16F),k===t.UNSIGNED_BYTE&&(ee=Re===ot?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function T(R,A,k){return g(R,k)===!0||R.isFramebufferTexture&&R.minFilter!==Qt&&R.minFilter!==Cn?Math.log2(Math.max(A.width,A.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?A.mipmaps.length:1}function S(R){return R===Qt||R===vp||R===$u?t.NEAREST:t.LINEAR}function M(R){const A=R.target;A.removeEventListener("dispose",M),E(A),A.isVideoTexture&&c.delete(A)}function b(R){const A=R.target;A.removeEventListener("dispose",b),U(A)}function E(R){const A=i.get(R);if(A.__webglInit===void 0)return;const k=R.source,ie=d.get(k);if(ie){const te=ie[A.__cacheKey];te.usedTimes--,te.usedTimes===0&&w(R),Object.keys(ie).length===0&&d.delete(k)}i.remove(R)}function w(R){const A=i.get(R);t.deleteTexture(A.__webglTexture);const k=R.source,ie=d.get(k);delete ie[A.__cacheKey],o.memory.textures--}function U(R){const A=R.texture,k=i.get(R),ie=i.get(A);if(ie.__webglTexture!==void 0&&(t.deleteTexture(ie.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(k.__webglFramebuffer[te]))for(let ee=0;ee<k.__webglFramebuffer[te].length;ee++)t.deleteFramebuffer(k.__webglFramebuffer[te][ee]);else t.deleteFramebuffer(k.__webglFramebuffer[te]);k.__webglDepthbuffer&&t.deleteRenderbuffer(k.__webglDepthbuffer[te])}else{if(Array.isArray(k.__webglFramebuffer))for(let te=0;te<k.__webglFramebuffer.length;te++)t.deleteFramebuffer(k.__webglFramebuffer[te]);else t.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&t.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&t.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let te=0;te<k.__webglColorRenderbuffer.length;te++)k.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(k.__webglColorRenderbuffer[te]);k.__webglDepthRenderbuffer&&t.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let te=0,ee=A.length;te<ee;te++){const Re=i.get(A[te]);Re.__webglTexture&&(t.deleteTexture(Re.__webglTexture),o.memory.textures--),i.remove(A[te])}i.remove(A),i.remove(R)}let z=0;function Q(){z=0}function D(){const R=z;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),z+=1,R}function O(R){const A=[];return A.push(R.wrapS),A.push(R.wrapT),A.push(R.wrapR||0),A.push(R.magFilter),A.push(R.minFilter),A.push(R.anisotropy),A.push(R.internalFormat),A.push(R.format),A.push(R.type),A.push(R.generateMipmaps),A.push(R.premultiplyAlpha),A.push(R.flipY),A.push(R.unpackAlignment),A.push(R.colorSpace),A.join()}function G(R,A){const k=i.get(R);if(R.isVideoTexture&&be(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){const ie=R.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(k,R,A);return}}n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+A)}function Y(R,A){const k=i.get(R);if(R.version>0&&k.__version!==R.version){oe(k,R,A);return}n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+A)}function N(R,A){const k=i.get(R);if(R.version>0&&k.__version!==R.version){oe(k,R,A);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+A)}function B(R,A){const k=i.get(R);if(R.version>0&&k.__version!==R.version){fe(k,R,A);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+A)}const H={[Ir]:t.REPEAT,[Wn]:t.CLAMP_TO_EDGE,[Nf]:t.MIRRORED_REPEAT},$={[Qt]:t.NEAREST,[vp]:t.NEAREST_MIPMAP_NEAREST,[$u]:t.NEAREST_MIPMAP_LINEAR,[Cn]:t.LINEAR,[IS]:t.LINEAR_MIPMAP_NEAREST,[qo]:t.LINEAR_MIPMAP_LINEAR},K={[YS]:t.NEVER,[QS]:t.ALWAYS,[qS]:t.LESS,[wv]:t.LEQUAL,[$S]:t.EQUAL,[ZS]:t.GEQUAL,[KS]:t.GREATER,[JS]:t.NOTEQUAL};function W(R,A,k){if(k?(t.texParameteri(R,t.TEXTURE_WRAP_S,H[A.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,H[A.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,H[A.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,$[A.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,$[A.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(A.wrapS!==Wn||A.wrapT!==Wn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,S(A.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,S(A.minFilter)),A.minFilter!==Qt&&A.minFilter!==Cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,K[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Qt||A.minFilter!==$u&&A.minFilter!==qo||A.type===Hi&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===$o&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(t.texParameterf(R,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function J(R,A){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,A.addEventListener("dispose",M));const ie=A.source;let te=d.get(ie);te===void 0&&(te={},d.set(ie,te));const ee=O(A);if(ee!==R.__cacheKey){te[ee]===void 0&&(te[ee]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,k=!0),te[ee].usedTimes++;const Re=te[R.__cacheKey];Re!==void 0&&(te[R.__cacheKey].usedTimes--,Re.usedTimes===0&&w(A)),R.__cacheKey=ee,R.__webglTexture=te[ee].texture}return k}function oe(R,A,k){let ie=t.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ie=t.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ie=t.TEXTURE_3D);const te=J(R,A),ee=A.source;n.bindTexture(ie,R.__webglTexture,t.TEXTURE0+k);const Re=i.get(ee);if(ee.version!==Re.__version||te===!0){n.activeTexture(t.TEXTURE0+k);const pe=et.getPrimaries(et.workingColorSpace),Ee=A.colorSpace===Pn?null:et.getPrimaries(A.colorSpace),Le=A.colorSpace===Pn||pe===Ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const ke=f(A)&&v(A.image)===!1;let ne=x(A.image,ke,!1,r.maxTextureSize);ne=_e(A,ne);const Je=v(ne)||a,Ye=s.convert(A.format,A.colorSpace);let Oe=s.convert(A.type),Pe=y(A.internalFormat,Ye,Oe,A.colorSpace,A.isVideoTexture);W(ie,A,Je);let we;const He=A.mipmaps,Ze=a&&A.isVideoTexture!==!0&&Pe!==Sv,pt=Re.__version===void 0||te===!0,We=T(A,ne,Je);if(A.isDepthTexture)Pe=t.DEPTH_COMPONENT,a?A.type===Hi?Pe=t.DEPTH_COMPONENT32F:A.type===Bi?Pe=t.DEPTH_COMPONENT24:A.type===Ar?Pe=t.DEPTH24_STENCIL8:Pe=t.DEPTH_COMPONENT16:A.type===Hi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Rr&&Pe===t.DEPTH_COMPONENT&&A.type!==Hd&&A.type!==Bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Bi,Oe=s.convert(A.type)),A.format===Bs&&Pe===t.DEPTH_COMPONENT&&(Pe=t.DEPTH_STENCIL,A.type!==Ar&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Ar,Oe=s.convert(A.type))),pt&&(Ze?n.texStorage2D(t.TEXTURE_2D,1,Pe,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,Pe,ne.width,ne.height,0,Ye,Oe,null));else if(A.isDataTexture)if(He.length>0&&Je){Ze&&pt&&n.texStorage2D(t.TEXTURE_2D,We,Pe,He[0].width,He[0].height);for(let ue=0,L=He.length;ue<L;ue++)we=He[ue],Ze?n.texSubImage2D(t.TEXTURE_2D,ue,0,0,we.width,we.height,Ye,Oe,we.data):n.texImage2D(t.TEXTURE_2D,ue,Pe,we.width,we.height,0,Ye,Oe,we.data);A.generateMipmaps=!1}else Ze?(pt&&n.texStorage2D(t.TEXTURE_2D,We,Pe,ne.width,ne.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ne.width,ne.height,Ye,Oe,ne.data)):n.texImage2D(t.TEXTURE_2D,0,Pe,ne.width,ne.height,0,Ye,Oe,ne.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ze&&pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,We,Pe,He[0].width,He[0].height,ne.depth);for(let ue=0,L=He.length;ue<L;ue++)we=He[ue],A.format!==Xn?Ye!==null?Ze?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,0,we.width,we.height,ne.depth,Ye,we.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ue,Pe,we.width,we.height,ne.depth,0,we.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,0,we.width,we.height,ne.depth,Ye,Oe,we.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ue,Pe,we.width,we.height,ne.depth,0,Ye,Oe,we.data)}else{Ze&&pt&&n.texStorage2D(t.TEXTURE_2D,We,Pe,He[0].width,He[0].height);for(let ue=0,L=He.length;ue<L;ue++)we=He[ue],A.format!==Xn?Ye!==null?Ze?n.compressedTexSubImage2D(t.TEXTURE_2D,ue,0,0,we.width,we.height,Ye,we.data):n.compressedTexImage2D(t.TEXTURE_2D,ue,Pe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?n.texSubImage2D(t.TEXTURE_2D,ue,0,0,we.width,we.height,Ye,Oe,we.data):n.texImage2D(t.TEXTURE_2D,ue,Pe,we.width,we.height,0,Ye,Oe,we.data)}else if(A.isDataArrayTexture)Ze?(pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,We,Pe,ne.width,ne.height,ne.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,Ye,Oe,ne.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,ne.width,ne.height,ne.depth,0,Ye,Oe,ne.data);else if(A.isData3DTexture)Ze?(pt&&n.texStorage3D(t.TEXTURE_3D,We,Pe,ne.width,ne.height,ne.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,Ye,Oe,ne.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,ne.width,ne.height,ne.depth,0,Ye,Oe,ne.data);else if(A.isFramebufferTexture){if(pt)if(Ze)n.texStorage2D(t.TEXTURE_2D,We,Pe,ne.width,ne.height);else{let ue=ne.width,L=ne.height;for(let me=0;me<We;me++)n.texImage2D(t.TEXTURE_2D,me,Pe,ue,L,0,Ye,Oe,null),ue>>=1,L>>=1}}else if(He.length>0&&Je){Ze&&pt&&n.texStorage2D(t.TEXTURE_2D,We,Pe,He[0].width,He[0].height);for(let ue=0,L=He.length;ue<L;ue++)we=He[ue],Ze?n.texSubImage2D(t.TEXTURE_2D,ue,0,0,Ye,Oe,we):n.texImage2D(t.TEXTURE_2D,ue,Pe,Ye,Oe,we);A.generateMipmaps=!1}else Ze?(pt&&n.texStorage2D(t.TEXTURE_2D,We,Pe,ne.width,ne.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ye,Oe,ne)):n.texImage2D(t.TEXTURE_2D,0,Pe,Ye,Oe,ne);g(A,Je)&&m(ie),Re.__version=ee.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function fe(R,A,k){if(A.image.length!==6)return;const ie=J(R,A),te=A.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+k);const ee=i.get(te);if(te.version!==ee.__version||ie===!0){n.activeTexture(t.TEXTURE0+k);const Re=et.getPrimaries(et.workingColorSpace),pe=A.colorSpace===Pn?null:et.getPrimaries(A.colorSpace),Ee=A.colorSpace===Pn||Re===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Le=A.isCompressedTexture||A.image[0].isCompressedTexture,ke=A.image[0]&&A.image[0].isDataTexture,ne=[];for(let ue=0;ue<6;ue++)!Le&&!ke?ne[ue]=x(A.image[ue],!1,!0,r.maxCubemapSize):ne[ue]=ke?A.image[ue].image:A.image[ue],ne[ue]=_e(A,ne[ue]);const Je=ne[0],Ye=v(Je)||a,Oe=s.convert(A.format,A.colorSpace),Pe=s.convert(A.type),we=y(A.internalFormat,Oe,Pe,A.colorSpace),He=a&&A.isVideoTexture!==!0,Ze=ee.__version===void 0||ie===!0;let pt=T(A,Je,Ye);W(t.TEXTURE_CUBE_MAP,A,Ye);let We;if(Le){He&&Ze&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pt,we,Je.width,Je.height);for(let ue=0;ue<6;ue++){We=ne[ue].mipmaps;for(let L=0;L<We.length;L++){const me=We[L];A.format!==Xn?Oe!==null?He?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L,0,0,me.width,me.height,Oe,me.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L,we,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L,0,0,me.width,me.height,Oe,Pe,me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L,we,me.width,me.height,0,Oe,Pe,me.data)}}}else{We=A.mipmaps,He&&Ze&&(We.length>0&&pt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,pt,we,ne[0].width,ne[0].height));for(let ue=0;ue<6;ue++)if(ke){He?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,ne[ue].width,ne[ue].height,Oe,Pe,ne[ue].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,we,ne[ue].width,ne[ue].height,0,Oe,Pe,ne[ue].data);for(let L=0;L<We.length;L++){const ge=We[L].image[ue].image;He?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L+1,0,0,ge.width,ge.height,Oe,Pe,ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L+1,we,ge.width,ge.height,0,Oe,Pe,ge.data)}}else{He?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Oe,Pe,ne[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,we,Oe,Pe,ne[ue]);for(let L=0;L<We.length;L++){const me=We[L];He?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L+1,0,0,Oe,Pe,me.image[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,L+1,we,Oe,Pe,me.image[ue])}}}g(A,Ye)&&m(t.TEXTURE_CUBE_MAP),ee.__version=te.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function de(R,A,k,ie,te,ee){const Re=s.convert(k.format,k.colorSpace),pe=s.convert(k.type),Ee=y(k.internalFormat,Re,pe,k.colorSpace);if(!i.get(A).__hasExternalTextures){const ke=Math.max(1,A.width>>ee),ne=Math.max(1,A.height>>ee);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,ee,Ee,ke,ne,A.depth,0,Re,pe,null):n.texImage2D(te,ee,Ee,ke,ne,0,Re,pe,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Z(A)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,te,i.get(k).__webglTexture,0,re(A)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ie,te,i.get(k).__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(R,A,k){if(t.bindRenderbuffer(t.RENDERBUFFER,R),A.depthBuffer&&!A.stencilBuffer){let ie=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(k||Z(A)){const te=A.depthTexture;te&&te.isDepthTexture&&(te.type===Hi?ie=t.DEPTH_COMPONENT32F:te.type===Bi&&(ie=t.DEPTH_COMPONENT24));const ee=re(A);Z(A)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ee,ie,A.width,A.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ee,ie,A.width,A.height)}else t.renderbufferStorage(t.RENDERBUFFER,ie,A.width,A.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(A.depthBuffer&&A.stencilBuffer){const ie=re(A);k&&Z(A)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,A.width,A.height):Z(A)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const ie=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let te=0;te<ie.length;te++){const ee=ie[te],Re=s.convert(ee.format,ee.colorSpace),pe=s.convert(ee.type),Ee=y(ee.internalFormat,Re,pe,ee.colorSpace),Le=re(A);k&&Z(A)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,Ee,A.width,A.height):Z(A)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Le,Ee,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,Ee,A.width,A.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Me(R,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),G(A.depthTexture,0);const ie=i.get(A.depthTexture).__webglTexture,te=re(A);if(A.depthTexture.format===Rr)Z(A)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(A.depthTexture.format===Bs)Z(A)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function xe(R){const A=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!A.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Me(A.__webglFramebuffer,R)}else if(k){A.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer[ie]),A.__webglDepthbuffer[ie]=t.createRenderbuffer(),le(A.__webglDepthbuffer[ie],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=t.createRenderbuffer(),le(A.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ae(R,A,k){const ie=i.get(R);A!==void 0&&de(ie.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&xe(R)}function P(R){const A=R.texture,k=i.get(R),ie=i.get(A);R.addEventListener("dispose",b),R.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=A.version,o.memory.textures++);const te=R.isWebGLCubeRenderTarget===!0,ee=R.isWebGLMultipleRenderTargets===!0,Re=v(R)||a;if(te){k.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(a&&A.mipmaps&&A.mipmaps.length>0){k.__webglFramebuffer[pe]=[];for(let Ee=0;Ee<A.mipmaps.length;Ee++)k.__webglFramebuffer[pe][Ee]=t.createFramebuffer()}else k.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){k.__webglFramebuffer=[];for(let pe=0;pe<A.mipmaps.length;pe++)k.__webglFramebuffer[pe]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(ee)if(r.drawBuffers){const pe=R.texture;for(let Ee=0,Le=pe.length;Ee<Le;Ee++){const ke=i.get(pe[Ee]);ke.__webglTexture===void 0&&(ke.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&Z(R)===!1){const pe=ee?A:[A];k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Ee=0;Ee<pe.length;Ee++){const Le=pe[Ee];k.__webglColorRenderbuffer[Ee]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[Ee]);const ke=s.convert(Le.format,Le.colorSpace),ne=s.convert(Le.type),Je=y(Le.internalFormat,ke,ne,Le.colorSpace,R.isXRRenderTarget===!0),Ye=re(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ye,Je,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,k.__webglColorRenderbuffer[Ee])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),le(k.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),W(t.TEXTURE_CUBE_MAP,A,Re);for(let pe=0;pe<6;pe++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let Ee=0;Ee<A.mipmaps.length;Ee++)de(k.__webglFramebuffer[pe][Ee],R,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ee);else de(k.__webglFramebuffer[pe],R,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);g(A,Re)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ee){const pe=R.texture;for(let Ee=0,Le=pe.length;Ee<Le;Ee++){const ke=pe[Ee],ne=i.get(ke);n.bindTexture(t.TEXTURE_2D,ne.__webglTexture),W(t.TEXTURE_2D,ke,Re),de(k.__webglFramebuffer,R,ke,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,0),g(ke,Re)&&m(t.TEXTURE_2D)}n.unbindTexture()}else{let pe=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?pe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(pe,ie.__webglTexture),W(pe,A,Re),a&&A.mipmaps&&A.mipmaps.length>0)for(let Ee=0;Ee<A.mipmaps.length;Ee++)de(k.__webglFramebuffer[Ee],R,A,t.COLOR_ATTACHMENT0,pe,Ee);else de(k.__webglFramebuffer,R,A,t.COLOR_ATTACHMENT0,pe,0);g(A,Re)&&m(pe),n.unbindTexture()}R.depthBuffer&&xe(R)}function ae(R){const A=v(R)||a,k=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ie=0,te=k.length;ie<te;ie++){const ee=k[ie];if(g(ee,A)){const Re=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,pe=i.get(ee).__webglTexture;n.bindTexture(Re,pe),m(Re),n.unbindTexture()}}}function q(R){if(a&&R.samples>0&&Z(R)===!1){const A=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],k=R.width,ie=R.height;let te=t.COLOR_BUFFER_BIT;const ee=[],Re=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=i.get(R),Ee=R.isWebGLMultipleRenderTargets===!0;if(Ee)for(let Le=0;Le<A.length;Le++)n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Le=0;Le<A.length;Le++){ee.push(t.COLOR_ATTACHMENT0+Le),R.depthBuffer&&ee.push(Re);const ke=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(ke===!1&&(R.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),Ee&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,pe.__webglColorRenderbuffer[Le]),ke===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Re]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Re])),Ee){const ne=i.get(A[Le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ne,0)}t.blitFramebuffer(0,0,k,ie,0,0,k,ie,te,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ee)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Ee)for(let Le=0;Le<A.length;Le++){n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,pe.__webglColorRenderbuffer[Le]);const ke=i.get(A[Le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function re(R){return Math.min(r.maxSamples,R.samples)}function Z(R){const A=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function be(R){const A=o.render.frame;c.get(R)!==A&&(c.set(R,A),R.update())}function _e(R,A){const k=R.colorSpace,ie=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Uf||k!==Ti&&k!==Pn&&(et.getTransfer(k)===ot?a===!1?e.has("EXT_sRGB")===!0&&ie===Xn?(R.format=Uf,R.minFilter=Cn,R.generateMipmaps=!1):A=Av.sRGBToLinear(A):(ie!==Xn||te!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),A}this.allocateTextureUnit=D,this.resetTextureUnits=Q,this.setTexture2D=G,this.setTexture2DArray=Y,this.setTexture3D=N,this.setTextureCube=B,this.rebindTextures=Ae,this.setupRenderTarget=P,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Z}function eA(t,e,n){const i=n.isWebGL2;function r(s,o=Pn){let a;const l=et.getTransfer(o);if(s===Qi)return t.UNSIGNED_BYTE;if(s===gv)return t.UNSIGNED_SHORT_4_4_4_4;if(s===vv)return t.UNSIGNED_SHORT_5_5_5_1;if(s===OS)return t.BYTE;if(s===FS)return t.SHORT;if(s===Hd)return t.UNSIGNED_SHORT;if(s===mv)return t.INT;if(s===Bi)return t.UNSIGNED_INT;if(s===Hi)return t.FLOAT;if(s===$o)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===zS)return t.ALPHA;if(s===Xn)return t.RGBA;if(s===kS)return t.LUMINANCE;if(s===BS)return t.LUMINANCE_ALPHA;if(s===Rr)return t.DEPTH_COMPONENT;if(s===Bs)return t.DEPTH_STENCIL;if(s===Uf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===HS)return t.RED;if(s===_v)return t.RED_INTEGER;if(s===GS)return t.RG;if(s===xv)return t.RG_INTEGER;if(s===yv)return t.RGBA_INTEGER;if(s===Ku||s===Ju||s===Zu||s===Qu)if(l===ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ku)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ju)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Qu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ku)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ju)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===_p||s===xp||s===yp||s===Sp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===_p)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===xp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===yp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Sp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Sv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Mp||s===Ep)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Mp)return l===ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ep)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===wp||s===Tp||s===Ap||s===Rp||s===Cp||s===bp||s===Pp||s===Lp||s===Dp||s===Np||s===Up||s===Ip||s===Op||s===Fp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===wp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Tp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ap)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Rp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Cp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===bp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Pp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Lp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Dp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Np)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Up)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ip)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Op)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Fp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ec||s===zp||s===kp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ec)return l===ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===zp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===kp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===VS||s===Bp||s===Hp||s===Gp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===ec)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Bp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Hp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Gp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ar?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class tA extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Er extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nA={type:"move"};class Tc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Er,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Er,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Er,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const x of e.hand.values()){const v=n.getJointPose(x,i),f=this._getHandJoint(u,x);v!==null&&(f.matrix.fromArray(v.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=v.radius),f.visible=v!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=c.position.distanceTo(h.position),p=.02,_=.005;u.inputState.pinching&&d>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Er;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class iA extends qs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,d=null,p=null,_=null;const x=n.getContextAttributes();let v=null,f=null;const g=[],m=[],y=new ve;let T=null;const S=new bn;S.layers.enable(1),S.viewport=new Dt;const M=new bn;M.layers.enable(2),M.viewport=new Dt;const b=[S,M],E=new tA;E.layers.enable(1),E.layers.enable(2);let w=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let J=g[W];return J===void 0&&(J=new Tc,g[W]=J),J.getTargetRaySpace()},this.getControllerGrip=function(W){let J=g[W];return J===void 0&&(J=new Tc,g[W]=J),J.getGripSpace()},this.getHand=function(W){let J=g[W];return J===void 0&&(J=new Tc,g[W]=J),J.getHandSpace()};function z(W){const J=m.indexOf(W.inputSource);if(J===-1)return;const oe=g[J];oe!==void 0&&(oe.update(W.inputSource,W.frame,u||o),oe.dispatchEvent({type:W.type,data:W.inputSource}))}function Q(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",D);for(let W=0;W<g.length;W++){const J=m[W];J!==null&&(m[W]=null,g[W].disconnect(J))}w=null,U=null,e.setRenderTarget(v),p=null,d=null,h=null,r=null,f=null,K.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(W){u=W},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",D),x.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,J),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Or(p.framebufferWidth,p.framebufferHeight,{format:Xn,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let J=null,oe=null,fe=null;x.depth&&(fe=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,J=x.stencil?Bs:Rr,oe=x.stencil?Ar:Bi);const de={colorFormat:n.RGBA8,depthFormat:fe,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(de),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new Or(d.textureWidth,d.textureHeight,{format:Xn,type:Qi,depthTexture:new Bv(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const le=e.properties.get(f);le.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),K.setContext(r),K.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function D(W){for(let J=0;J<W.removed.length;J++){const oe=W.removed[J],fe=m.indexOf(oe);fe>=0&&(m[fe]=null,g[fe].disconnect(oe))}for(let J=0;J<W.added.length;J++){const oe=W.added[J];let fe=m.indexOf(oe);if(fe===-1){for(let le=0;le<g.length;le++)if(le>=m.length){m.push(oe),fe=le;break}else if(m[le]===null){m[le]=oe,fe=le;break}if(fe===-1)break}const de=g[fe];de&&de.connect(oe)}}const O=new I,G=new I;function Y(W,J,oe){O.setFromMatrixPosition(J.matrixWorld),G.setFromMatrixPosition(oe.matrixWorld);const fe=O.distanceTo(G),de=J.projectionMatrix.elements,le=oe.projectionMatrix.elements,Me=de[14]/(de[10]-1),xe=de[14]/(de[10]+1),Ae=(de[9]+1)/de[5],P=(de[9]-1)/de[5],ae=(de[8]-1)/de[0],q=(le[8]+1)/le[0],re=Me*ae,Z=Me*q,be=fe/(-ae+q),_e=be*-ae;J.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(_e),W.translateZ(be),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const R=Me+be,A=xe+be,k=re-_e,ie=Z+(fe-_e),te=Ae*xe/A*R,ee=P*xe/A*R;W.projectionMatrix.makePerspective(k,ie,te,ee,R,A),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function N(W,J){J===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(J.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;E.near=M.near=S.near=W.near,E.far=M.far=S.far=W.far,(w!==E.near||U!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),w=E.near,U=E.far);const J=W.parent,oe=E.cameras;N(E,J);for(let fe=0;fe<oe.length;fe++)N(oe[fe],J);oe.length===2?Y(E,S,M):E.projectionMatrix.copy(S.projectionMatrix),B(W,E,J)};function B(W,J,oe){oe===null?W.matrix.copy(J.matrixWorld):(W.matrix.copy(oe.matrixWorld),W.matrix.invert(),W.matrix.multiply(J.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=If*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)};let H=null;function $(W,J){if(c=J.getViewerPose(u||o),_=J,c!==null){const oe=c.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let fe=!1;oe.length!==E.cameras.length&&(E.cameras.length=0,fe=!0);for(let de=0;de<oe.length;de++){const le=oe[de];let Me=null;if(p!==null)Me=p.getViewport(le);else{const Ae=h.getViewSubImage(d,le);Me=Ae.viewport,de===0&&(e.setRenderTargetTextures(f,Ae.colorTexture,d.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(f))}let xe=b[de];xe===void 0&&(xe=new bn,xe.layers.enable(de),xe.viewport=new Dt,b[de]=xe),xe.matrix.fromArray(le.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(le.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(Me.x,Me.y,Me.width,Me.height),de===0&&(E.matrix.copy(xe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),fe===!0&&E.cameras.push(xe)}}for(let oe=0;oe<g.length;oe++){const fe=m[oe],de=g[oe];fe!==null&&de!==void 0&&de.update(fe,J,u||o)}H&&H(W,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),_=null}const K=new zv;K.setAnimationLoop($),this.setAnimationLoop=function(W){H=W},this.dispose=function(){}}}function rA(t,e){function n(v,f){v.matrixAutoUpdate===!0&&v.updateMatrix(),f.value.copy(v.matrix)}function i(v,f){f.color.getRGB(v.fogColor.value,Iv(t)),f.isFog?(v.fogNear.value=f.near,v.fogFar.value=f.far):f.isFogExp2&&(v.fogDensity.value=f.density)}function r(v,f,g,m,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(v,f):f.isMeshToonMaterial?(s(v,f),h(v,f)):f.isMeshPhongMaterial?(s(v,f),c(v,f)):f.isMeshStandardMaterial?(s(v,f),d(v,f),f.isMeshPhysicalMaterial&&p(v,f,y)):f.isMeshMatcapMaterial?(s(v,f),_(v,f)):f.isMeshDepthMaterial?s(v,f):f.isMeshDistanceMaterial?(s(v,f),x(v,f)):f.isMeshNormalMaterial?s(v,f):f.isLineBasicMaterial?(o(v,f),f.isLineDashedMaterial&&a(v,f)):f.isPointsMaterial?l(v,f,g,m):f.isSpriteMaterial?u(v,f):f.isShadowMaterial?(v.color.value.copy(f.color),v.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(v,f){v.opacity.value=f.opacity,f.color&&v.diffuse.value.copy(f.color),f.emissive&&v.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(v.map.value=f.map,n(f.map,v.mapTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.bumpMap&&(v.bumpMap.value=f.bumpMap,n(f.bumpMap,v.bumpMapTransform),v.bumpScale.value=f.bumpScale,f.side===dn&&(v.bumpScale.value*=-1)),f.normalMap&&(v.normalMap.value=f.normalMap,n(f.normalMap,v.normalMapTransform),v.normalScale.value.copy(f.normalScale),f.side===dn&&v.normalScale.value.negate()),f.displacementMap&&(v.displacementMap.value=f.displacementMap,n(f.displacementMap,v.displacementMapTransform),v.displacementScale.value=f.displacementScale,v.displacementBias.value=f.displacementBias),f.emissiveMap&&(v.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,v.emissiveMapTransform)),f.specularMap&&(v.specularMap.value=f.specularMap,n(f.specularMap,v.specularMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest);const g=e.get(f).envMap;if(g&&(v.envMap.value=g,v.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=f.reflectivity,v.ior.value=f.ior,v.refractionRatio.value=f.refractionRatio),f.lightMap){v.lightMap.value=f.lightMap;const m=t._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=f.lightMapIntensity*m,n(f.lightMap,v.lightMapTransform)}f.aoMap&&(v.aoMap.value=f.aoMap,v.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,v.aoMapTransform))}function o(v,f){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,f.map&&(v.map.value=f.map,n(f.map,v.mapTransform))}function a(v,f){v.dashSize.value=f.dashSize,v.totalSize.value=f.dashSize+f.gapSize,v.scale.value=f.scale}function l(v,f,g,m){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,v.size.value=f.size*g,v.scale.value=m*.5,f.map&&(v.map.value=f.map,n(f.map,v.uvTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest)}function u(v,f){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,v.rotation.value=f.rotation,f.map&&(v.map.value=f.map,n(f.map,v.mapTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest)}function c(v,f){v.specular.value.copy(f.specular),v.shininess.value=Math.max(f.shininess,1e-4)}function h(v,f){f.gradientMap&&(v.gradientMap.value=f.gradientMap)}function d(v,f){v.metalness.value=f.metalness,f.metalnessMap&&(v.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,v.metalnessMapTransform)),v.roughness.value=f.roughness,f.roughnessMap&&(v.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,v.roughnessMapTransform)),e.get(f).envMap&&(v.envMapIntensity.value=f.envMapIntensity)}function p(v,f,g){v.ior.value=f.ior,f.sheen>0&&(v.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),v.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(v.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,v.sheenColorMapTransform)),f.sheenRoughnessMap&&(v.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,v.sheenRoughnessMapTransform))),f.clearcoat>0&&(v.clearcoat.value=f.clearcoat,v.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(v.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,v.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(v.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===dn&&v.clearcoatNormalScale.value.negate())),f.iridescence>0&&(v.iridescence.value=f.iridescence,v.iridescenceIOR.value=f.iridescenceIOR,v.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(v.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,v.iridescenceMapTransform)),f.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),f.transmission>0&&(v.transmission.value=f.transmission,v.transmissionSamplerMap.value=g.texture,v.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(v.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,v.transmissionMapTransform)),v.thickness.value=f.thickness,f.thicknessMap&&(v.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=f.attenuationDistance,v.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(v.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(v.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=f.specularIntensity,v.specularColor.value.copy(f.specularColor),f.specularColorMap&&(v.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,v.specularColorMapTransform)),f.specularIntensityMap&&(v.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,v.specularIntensityMapTransform))}function _(v,f){f.matcap&&(v.matcap.value=f.matcap)}function x(v,f){const g=e.get(f).light;v.referencePosition.value.setFromMatrixPosition(g.matrixWorld),v.nearDistance.value=g.shadow.camera.near,v.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function sA(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,m){const y=m.program;i.uniformBlockBinding(g,y)}function u(g,m){let y=r[g.id];y===void 0&&(_(g),y=c(g),r[g.id]=y,g.addEventListener("dispose",v));const T=m.program;i.updateUBOMapping(g,T);const S=e.render.frame;s[g.id]!==S&&(d(g),s[g.id]=S)}function c(g){const m=h();g.__bindingPointIndex=m;const y=t.createBuffer(),T=g.__size,S=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,T,S),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,m,y),y}function h(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const m=r[g.id],y=g.uniforms,T=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,m);for(let S=0,M=y.length;S<M;S++){const b=Array.isArray(y[S])?y[S]:[y[S]];for(let E=0,w=b.length;E<w;E++){const U=b[E];if(p(U,S,E,T)===!0){const z=U.__offset,Q=Array.isArray(U.value)?U.value:[U.value];let D=0;for(let O=0;O<Q.length;O++){const G=Q[O],Y=x(G);typeof G=="number"||typeof G=="boolean"?(U.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,z+D,U.__data)):G.isMatrix3?(U.__data[0]=G.elements[0],U.__data[1]=G.elements[1],U.__data[2]=G.elements[2],U.__data[3]=0,U.__data[4]=G.elements[3],U.__data[5]=G.elements[4],U.__data[6]=G.elements[5],U.__data[7]=0,U.__data[8]=G.elements[6],U.__data[9]=G.elements[7],U.__data[10]=G.elements[8],U.__data[11]=0):(G.toArray(U.__data,D),D+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,U.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,m,y,T){const S=g.value,M=m+"_"+y;if(T[M]===void 0)return typeof S=="number"||typeof S=="boolean"?T[M]=S:T[M]=S.clone(),!0;{const b=T[M];if(typeof S=="number"||typeof S=="boolean"){if(b!==S)return T[M]=S,!0}else if(b.equals(S)===!1)return b.copy(S),!0}return!1}function _(g){const m=g.uniforms;let y=0;const T=16;for(let M=0,b=m.length;M<b;M++){const E=Array.isArray(m[M])?m[M]:[m[M]];for(let w=0,U=E.length;w<U;w++){const z=E[w],Q=Array.isArray(z.value)?z.value:[z.value];for(let D=0,O=Q.length;D<O;D++){const G=Q[D],Y=x(G),N=y%T;N!==0&&T-N<Y.boundary&&(y+=T-N),z.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=Y.storage}}}const S=y%T;return S>0&&(y+=T-S),g.__size=y,g.__cache={},this}function x(g){const m={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(m.boundary=4,m.storage=4):g.isVector2?(m.boundary=8,m.storage=8):g.isVector3||g.isColor?(m.boundary=16,m.storage=12):g.isVector4?(m.boundary=16,m.storage=16):g.isMatrix3?(m.boundary=48,m.storage=48):g.isMatrix4?(m.boundary=64,m.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),m}function v(g){const m=g.target;m.removeEventListener("dispose",v);const y=o.indexOf(m.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[m.id]),delete r[m.id],delete s[m.id]}function f(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:u,dispose:f}}class jv{constructor(e={}){const{canvas:n=tM(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),_=new Int32Array(4);let x=null,v=null;const f=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ft,this._useLegacyLights=!1,this.toneMapping=Zi,this.toneMappingExposure=1;const m=this;let y=!1,T=0,S=0,M=null,b=-1,E=null;const w=new Dt,U=new Dt;let z=null;const Q=new Fe(0);let D=0,O=n.width,G=n.height,Y=1,N=null,B=null;const H=new Dt(0,0,O,G),$=new Dt(0,0,O,G);let K=!1;const W=new Vd;let J=!1,oe=!1,fe=null;const de=new yt,le=new ve,Me=new I,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ae(){return M===null?Y:1}let P=i;function ae(C,F){for(let X=0;X<C.length;X++){const j=C[X],V=n.getContext(j,F);if(V!==null)return V}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Bd}`),n.addEventListener("webglcontextlost",ue,!1),n.addEventListener("webglcontextrestored",L,!1),n.addEventListener("webglcontextcreationerror",me,!1),P===null){const F=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&F.shift(),P=ae(F,C),P===null)throw ae(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let q,re,Z,be,_e,R,A,k,ie,te,ee,Re,pe,Ee,Le,ke,ne,Je,Ye,Oe,Pe,we,He,Ze;function pt(){q=new m1(P),re=new u1(P,q,e),q.init(re),we=new eA(P,q,re),Z=new ZT(P,q,re),be=new _1(P),_e=new zT,R=new QT(P,q,Z,_e,re,we,be),A=new f1(m),k=new p1(m),ie=new AM(P,re),He=new a1(P,q,ie,re),te=new g1(P,ie,be,He),ee=new M1(P,te,ie,be),Ye=new S1(P,re,R),ke=new c1(_e),Re=new FT(m,A,k,q,re,He,ke),pe=new rA(m,_e),Ee=new BT,Le=new jT(q,re),Je=new o1(m,A,k,Z,ee,d,l),ne=new JT(m,ee,re),Ze=new sA(P,be,re,Z),Oe=new l1(P,q,be,re),Pe=new v1(P,q,be,re),be.programs=Re.programs,m.capabilities=re,m.extensions=q,m.properties=_e,m.renderLists=Ee,m.shadowMap=ne,m.state=Z,m.info=be}pt();const We=new iA(m,P);this.xr=We,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const C=q.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=q.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(C){C!==void 0&&(Y=C,this.setSize(O,G,!1))},this.getSize=function(C){return C.set(O,G)},this.setSize=function(C,F,X=!0){if(We.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,G=F,n.width=Math.floor(C*Y),n.height=Math.floor(F*Y),X===!0&&(n.style.width=C+"px",n.style.height=F+"px"),this.setViewport(0,0,C,F)},this.getDrawingBufferSize=function(C){return C.set(O*Y,G*Y).floor()},this.setDrawingBufferSize=function(C,F,X){O=C,G=F,Y=X,n.width=Math.floor(C*X),n.height=Math.floor(F*X),this.setViewport(0,0,C,F)},this.getCurrentViewport=function(C){return C.copy(w)},this.getViewport=function(C){return C.copy(H)},this.setViewport=function(C,F,X,j){C.isVector4?H.set(C.x,C.y,C.z,C.w):H.set(C,F,X,j),Z.viewport(w.copy(H).multiplyScalar(Y).floor())},this.getScissor=function(C){return C.copy($)},this.setScissor=function(C,F,X,j){C.isVector4?$.set(C.x,C.y,C.z,C.w):$.set(C,F,X,j),Z.scissor(U.copy($).multiplyScalar(Y).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(C){Z.setScissorTest(K=C)},this.setOpaqueSort=function(C){N=C},this.setTransparentSort=function(C){B=C},this.getClearColor=function(C){return C.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(C=!0,F=!0,X=!0){let j=0;if(C){let V=!1;if(M!==null){const ye=M.texture.format;V=ye===yv||ye===xv||ye===_v}if(V){const ye=M.texture.type,Ce=ye===Qi||ye===Bi||ye===Hd||ye===Ar||ye===gv||ye===vv,Ne=Je.getClearColor(),Ie=Je.getClearAlpha(),Ve=Ne.r,ze=Ne.g,Be=Ne.b;Ce?(p[0]=Ve,p[1]=ze,p[2]=Be,p[3]=Ie,P.clearBufferuiv(P.COLOR,0,p)):(_[0]=Ve,_[1]=ze,_[2]=Be,_[3]=Ie,P.clearBufferiv(P.COLOR,0,_))}else j|=P.COLOR_BUFFER_BIT}F&&(j|=P.DEPTH_BUFFER_BIT),X&&(j|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ue,!1),n.removeEventListener("webglcontextrestored",L,!1),n.removeEventListener("webglcontextcreationerror",me,!1),Ee.dispose(),Le.dispose(),_e.dispose(),A.dispose(),k.dispose(),ee.dispose(),He.dispose(),Ze.dispose(),Re.dispose(),We.dispose(),We.removeEventListener("sessionstart",$t),We.removeEventListener("sessionend",it),fe&&(fe.dispose(),fe=null),Kt.stop()};function ue(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=be.autoReset,F=ne.enabled,X=ne.autoUpdate,j=ne.needsUpdate,V=ne.type;pt(),be.autoReset=C,ne.enabled=F,ne.autoUpdate=X,ne.needsUpdate=j,ne.type=V}function me(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ge(C){const F=C.target;F.removeEventListener("dispose",ge),Ue(F)}function Ue(C){De(C),_e.remove(C)}function De(C){const F=_e.get(C).programs;F!==void 0&&(F.forEach(function(X){Re.releaseProgram(X)}),C.isShaderMaterial&&Re.releaseShaderCache(C))}this.renderBufferDirect=function(C,F,X,j,V,ye){F===null&&(F=xe);const Ce=V.isMesh&&V.matrixWorld.determinant()<0,Ne=g_(C,F,X,j,V);Z.setMaterial(j,Ce);let Ie=X.index,Ve=1;if(j.wireframe===!0){if(Ie=te.getWireframeAttribute(X),Ie===void 0)return;Ve=2}const ze=X.drawRange,Be=X.attributes.position;let vt=ze.start*Ve,pn=(ze.start+ze.count)*Ve;ye!==null&&(vt=Math.max(vt,ye.start*Ve),pn=Math.min(pn,(ye.start+ye.count)*Ve)),Ie!==null?(vt=Math.max(vt,0),pn=Math.min(pn,Ie.count)):Be!=null&&(vt=Math.max(vt,0),pn=Math.min(pn,Be.count));const bt=pn-vt;if(bt<0||bt===1/0)return;He.setup(V,j,Ne,X,Ie);let ai,ut=Oe;if(Ie!==null&&(ai=ie.get(Ie),ut=Pe,ut.setIndex(ai)),V.isMesh)j.wireframe===!0?(Z.setLineWidth(j.wireframeLinewidth*Ae()),ut.setMode(P.LINES)):ut.setMode(P.TRIANGLES);else if(V.isLine){let Xe=j.linewidth;Xe===void 0&&(Xe=1),Z.setLineWidth(Xe*Ae()),V.isLineSegments?ut.setMode(P.LINES):V.isLineLoop?ut.setMode(P.LINE_LOOP):ut.setMode(P.LINE_STRIP)}else V.isPoints?ut.setMode(P.POINTS):V.isSprite&&ut.setMode(P.TRIANGLES);if(V.isBatchedMesh)ut.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)ut.renderInstances(vt,bt,V.count);else if(X.isInstancedBufferGeometry){const Xe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,xu=Math.min(X.instanceCount,Xe);ut.renderInstances(vt,bt,xu)}else ut.render(vt,bt)};function tt(C,F,X){C.transparent===!0&&C.side===an&&C.forceSinglePass===!1?(C.side=dn,C.needsUpdate=!0,la(C,F,X),C.side=ir,C.needsUpdate=!0,la(C,F,X),C.side=an):la(C,F,X)}this.compile=function(C,F,X=null){X===null&&(X=C),v=Le.get(X),v.init(),g.push(v),X.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(v.pushLight(V),V.castShadow&&v.pushShadow(V))}),C!==X&&C.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(v.pushLight(V),V.castShadow&&v.pushShadow(V))}),v.setupLights(m._useLegacyLights);const j=new Set;return C.traverse(function(V){const ye=V.material;if(ye)if(Array.isArray(ye))for(let Ce=0;Ce<ye.length;Ce++){const Ne=ye[Ce];tt(Ne,X,V),j.add(Ne)}else tt(ye,X,V),j.add(ye)}),g.pop(),v=null,j},this.compileAsync=function(C,F,X=null){const j=this.compile(C,F,X);return new Promise(V=>{function ye(){if(j.forEach(function(Ce){_e.get(Ce).currentProgram.isReady()&&j.delete(Ce)}),j.size===0){V(C);return}setTimeout(ye,10)}q.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let nt=null;function Ct(C){nt&&nt(C)}function $t(){Kt.stop()}function it(){Kt.start()}const Kt=new zv;Kt.setAnimationLoop(Ct),typeof self<"u"&&Kt.setContext(self),this.setAnimationLoop=function(C){nt=C,We.setAnimationLoop(C),C===null?Kt.stop():Kt.start()},We.addEventListener("sessionstart",$t),We.addEventListener("sessionend",it),this.render=function(C,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(We.cameraAutoUpdate===!0&&We.updateCamera(F),F=We.getCamera()),C.isScene===!0&&C.onBeforeRender(m,C,F,M),v=Le.get(C,g.length),v.init(),g.push(v),de.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),W.setFromProjectionMatrix(de),oe=this.localClippingEnabled,J=ke.init(this.clippingPlanes,oe),x=Ee.get(C,f.length),x.init(),f.push(x),Zn(C,F,0,m.sortObjects),x.finish(),m.sortObjects===!0&&x.sort(N,B),this.info.render.frame++,J===!0&&ke.beginShadows();const X=v.state.shadowsArray;if(ne.render(X,C,F),J===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),Je.render(x,C),v.setupLights(m._useLegacyLights),F.isArrayCamera){const j=F.cameras;for(let V=0,ye=j.length;V<ye;V++){const Ce=j[V];Kd(x,C,Ce,Ce.viewport)}}else Kd(x,C,F);M!==null&&(R.updateMultisampleRenderTarget(M),R.updateRenderTargetMipmap(M)),C.isScene===!0&&C.onAfterRender(m,C,F),He.resetDefaultState(),b=-1,E=null,g.pop(),g.length>0?v=g[g.length-1]:v=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function Zn(C,F,X,j){if(C.visible===!1)return;if(C.layers.test(F.layers)){if(C.isGroup)X=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(F);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||W.intersectsSprite(C)){j&&Me.setFromMatrixPosition(C.matrixWorld).applyMatrix4(de);const Ce=ee.update(C),Ne=C.material;Ne.visible&&x.push(C,Ce,Ne,X,Me.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||W.intersectsObject(C))){const Ce=ee.update(C),Ne=C.material;if(j&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Me.copy(C.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Me.copy(Ce.boundingSphere.center)),Me.applyMatrix4(C.matrixWorld).applyMatrix4(de)),Array.isArray(Ne)){const Ie=Ce.groups;for(let Ve=0,ze=Ie.length;Ve<ze;Ve++){const Be=Ie[Ve],vt=Ne[Be.materialIndex];vt&&vt.visible&&x.push(C,Ce,vt,X,Me.z,Be)}}else Ne.visible&&x.push(C,Ce,Ne,X,Me.z,null)}}const ye=C.children;for(let Ce=0,Ne=ye.length;Ce<Ne;Ce++)Zn(ye[Ce],F,X,j)}function Kd(C,F,X,j){const V=C.opaque,ye=C.transmissive,Ce=C.transparent;v.setupLightsView(X),J===!0&&ke.setGlobalState(m.clippingPlanes,X),ye.length>0&&m_(V,ye,F,X),j&&Z.viewport(w.copy(j)),V.length>0&&aa(V,F,X),ye.length>0&&aa(ye,F,X),Ce.length>0&&aa(Ce,F,X),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function m_(C,F,X,j){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const ye=re.isWebGL2;fe===null&&(fe=new Or(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")?$o:Qi,minFilter:qo,samples:ye?4:0})),m.getDrawingBufferSize(le),ye?fe.setSize(le.x,le.y):fe.setSize(Of(le.x),Of(le.y));const Ce=m.getRenderTarget();m.setRenderTarget(fe),m.getClearColor(Q),D=m.getClearAlpha(),D<1&&m.setClearColor(16777215,.5),m.clear();const Ne=m.toneMapping;m.toneMapping=Zi,aa(C,X,j),R.updateMultisampleRenderTarget(fe),R.updateRenderTargetMipmap(fe);let Ie=!1;for(let Ve=0,ze=F.length;Ve<ze;Ve++){const Be=F[Ve],vt=Be.object,pn=Be.geometry,bt=Be.material,ai=Be.group;if(bt.side===an&&vt.layers.test(j.layers)){const ut=bt.side;bt.side=dn,bt.needsUpdate=!0,Jd(vt,X,j,pn,bt,ai),bt.side=ut,bt.needsUpdate=!0,Ie=!0}}Ie===!0&&(R.updateMultisampleRenderTarget(fe),R.updateRenderTargetMipmap(fe)),m.setRenderTarget(Ce),m.setClearColor(Q,D),m.toneMapping=Ne}function aa(C,F,X){const j=F.isScene===!0?F.overrideMaterial:null;for(let V=0,ye=C.length;V<ye;V++){const Ce=C[V],Ne=Ce.object,Ie=Ce.geometry,Ve=j===null?Ce.material:j,ze=Ce.group;Ne.layers.test(X.layers)&&Jd(Ne,F,X,Ie,Ve,ze)}}function Jd(C,F,X,j,V,ye){C.onBeforeRender(m,F,X,j,V,ye),C.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),V.onBeforeRender(m,F,X,j,C,ye),V.transparent===!0&&V.side===an&&V.forceSinglePass===!1?(V.side=dn,V.needsUpdate=!0,m.renderBufferDirect(X,F,j,V,C,ye),V.side=ir,V.needsUpdate=!0,m.renderBufferDirect(X,F,j,V,C,ye),V.side=an):m.renderBufferDirect(X,F,j,V,C,ye),C.onAfterRender(m,F,X,j,V,ye)}function la(C,F,X){F.isScene!==!0&&(F=xe);const j=_e.get(C),V=v.state.lights,ye=v.state.shadowsArray,Ce=V.state.version,Ne=Re.getParameters(C,V.state,ye,F,X),Ie=Re.getProgramCacheKey(Ne);let Ve=j.programs;j.environment=C.isMeshStandardMaterial?F.environment:null,j.fog=F.fog,j.envMap=(C.isMeshStandardMaterial?k:A).get(C.envMap||j.environment),Ve===void 0&&(C.addEventListener("dispose",ge),Ve=new Map,j.programs=Ve);let ze=Ve.get(Ie);if(ze!==void 0){if(j.currentProgram===ze&&j.lightsStateVersion===Ce)return Qd(C,Ne),ze}else Ne.uniforms=Re.getUniforms(C),C.onBuild(X,Ne,m),C.onBeforeCompile(Ne,m),ze=Re.acquireProgram(Ne,Ie),Ve.set(Ie,ze),j.uniforms=Ne.uniforms;const Be=j.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Be.clippingPlanes=ke.uniform),Qd(C,Ne),j.needsLights=__(C),j.lightsStateVersion=Ce,j.needsLights&&(Be.ambientLightColor.value=V.state.ambient,Be.lightProbe.value=V.state.probe,Be.directionalLights.value=V.state.directional,Be.directionalLightShadows.value=V.state.directionalShadow,Be.spotLights.value=V.state.spot,Be.spotLightShadows.value=V.state.spotShadow,Be.rectAreaLights.value=V.state.rectArea,Be.ltc_1.value=V.state.rectAreaLTC1,Be.ltc_2.value=V.state.rectAreaLTC2,Be.pointLights.value=V.state.point,Be.pointLightShadows.value=V.state.pointShadow,Be.hemisphereLights.value=V.state.hemi,Be.directionalShadowMap.value=V.state.directionalShadowMap,Be.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Be.spotShadowMap.value=V.state.spotShadowMap,Be.spotLightMatrix.value=V.state.spotLightMatrix,Be.spotLightMap.value=V.state.spotLightMap,Be.pointShadowMap.value=V.state.pointShadowMap,Be.pointShadowMatrix.value=V.state.pointShadowMatrix),j.currentProgram=ze,j.uniformsList=null,ze}function Zd(C){if(C.uniformsList===null){const F=C.currentProgram.getUniforms();C.uniformsList=hl.seqWithValue(F.seq,C.uniforms)}return C.uniformsList}function Qd(C,F){const X=_e.get(C);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function g_(C,F,X,j,V){F.isScene!==!0&&(F=xe),R.resetTextureUnits();const ye=F.fog,Ce=j.isMeshStandardMaterial?F.environment:null,Ne=M===null?m.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Ti,Ie=(j.isMeshStandardMaterial?k:A).get(j.envMap||Ce),Ve=j.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ze=!!X.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Be=!!X.morphAttributes.position,vt=!!X.morphAttributes.normal,pn=!!X.morphAttributes.color;let bt=Zi;j.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(bt=m.toneMapping);const ai=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ut=ai!==void 0?ai.length:0,Xe=_e.get(j),xu=v.state.lights;if(J===!0&&(oe===!0||C!==E)){const wn=C===E&&j.id===b;ke.setState(j,C,wn)}let mt=!1;j.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==xu.state.version||Xe.outputColorSpace!==Ne||V.isBatchedMesh&&Xe.batching===!1||!V.isBatchedMesh&&Xe.batching===!0||V.isInstancedMesh&&Xe.instancing===!1||!V.isInstancedMesh&&Xe.instancing===!0||V.isSkinnedMesh&&Xe.skinning===!1||!V.isSkinnedMesh&&Xe.skinning===!0||V.isInstancedMesh&&Xe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Xe.instancingColor===!1&&V.instanceColor!==null||Xe.envMap!==Ie||j.fog===!0&&Xe.fog!==ye||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==ke.numPlanes||Xe.numIntersection!==ke.numIntersection)||Xe.vertexAlphas!==Ve||Xe.vertexTangents!==ze||Xe.morphTargets!==Be||Xe.morphNormals!==vt||Xe.morphColors!==pn||Xe.toneMapping!==bt||re.isWebGL2===!0&&Xe.morphTargetsCount!==ut)&&(mt=!0):(mt=!0,Xe.__version=j.version);let ar=Xe.currentProgram;mt===!0&&(ar=la(j,F,V));let eh=!1,Zs=!1,yu=!1;const Ht=ar.getUniforms(),lr=Xe.uniforms;if(Z.useProgram(ar.program)&&(eh=!0,Zs=!0,yu=!0),j.id!==b&&(b=j.id,Zs=!0),eh||E!==C){Ht.setValue(P,"projectionMatrix",C.projectionMatrix),Ht.setValue(P,"viewMatrix",C.matrixWorldInverse);const wn=Ht.map.cameraPosition;wn!==void 0&&wn.setValue(P,Me.setFromMatrixPosition(C.matrixWorld)),re.logarithmicDepthBuffer&&Ht.setValue(P,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ht.setValue(P,"isOrthographic",C.isOrthographicCamera===!0),E!==C&&(E=C,Zs=!0,yu=!0)}if(V.isSkinnedMesh){Ht.setOptional(P,V,"bindMatrix"),Ht.setOptional(P,V,"bindMatrixInverse");const wn=V.skeleton;wn&&(re.floatVertexTextures?(wn.boneTexture===null&&wn.computeBoneTexture(),Ht.setValue(P,"boneTexture",wn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(Ht.setOptional(P,V,"batchingTexture"),Ht.setValue(P,"batchingTexture",V._matricesTexture,R));const Su=X.morphAttributes;if((Su.position!==void 0||Su.normal!==void 0||Su.color!==void 0&&re.isWebGL2===!0)&&Ye.update(V,X,ar),(Zs||Xe.receiveShadow!==V.receiveShadow)&&(Xe.receiveShadow=V.receiveShadow,Ht.setValue(P,"receiveShadow",V.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(lr.envMap.value=Ie,lr.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Zs&&(Ht.setValue(P,"toneMappingExposure",m.toneMappingExposure),Xe.needsLights&&v_(lr,yu),ye&&j.fog===!0&&pe.refreshFogUniforms(lr,ye),pe.refreshMaterialUniforms(lr,j,Y,G,fe),hl.upload(P,Zd(Xe),lr,R)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(hl.upload(P,Zd(Xe),lr,R),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ht.setValue(P,"center",V.center),Ht.setValue(P,"modelViewMatrix",V.modelViewMatrix),Ht.setValue(P,"normalMatrix",V.normalMatrix),Ht.setValue(P,"modelMatrix",V.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const wn=j.uniformsGroups;for(let Mu=0,x_=wn.length;Mu<x_;Mu++)if(re.isWebGL2){const th=wn[Mu];Ze.update(th,ar),Ze.bind(th,ar)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ar}function v_(C,F){C.ambientLightColor.needsUpdate=F,C.lightProbe.needsUpdate=F,C.directionalLights.needsUpdate=F,C.directionalLightShadows.needsUpdate=F,C.pointLights.needsUpdate=F,C.pointLightShadows.needsUpdate=F,C.spotLights.needsUpdate=F,C.spotLightShadows.needsUpdate=F,C.rectAreaLights.needsUpdate=F,C.hemisphereLights.needsUpdate=F}function __(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(C,F,X){_e.get(C.texture).__webglTexture=F,_e.get(C.depthTexture).__webglTexture=X;const j=_e.get(C);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=X===void 0,j.__autoAllocateDepthBuffer||q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,F){const X=_e.get(C);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(C,F=0,X=0){M=C,T=F,S=X;let j=!0,V=null,ye=!1,Ce=!1;if(C){const Ie=_e.get(C);Ie.__useDefaultFramebuffer!==void 0?(Z.bindFramebuffer(P.FRAMEBUFFER,null),j=!1):Ie.__webglFramebuffer===void 0?R.setupRenderTarget(C):Ie.__hasExternalTextures&&R.rebindTextures(C,_e.get(C.texture).__webglTexture,_e.get(C.depthTexture).__webglTexture);const Ve=C.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ce=!0);const ze=_e.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ze[F])?V=ze[F][X]:V=ze[F],ye=!0):re.isWebGL2&&C.samples>0&&R.useMultisampledRTT(C)===!1?V=_e.get(C).__webglMultisampledFramebuffer:Array.isArray(ze)?V=ze[X]:V=ze,w.copy(C.viewport),U.copy(C.scissor),z=C.scissorTest}else w.copy(H).multiplyScalar(Y).floor(),U.copy($).multiplyScalar(Y).floor(),z=K;if(Z.bindFramebuffer(P.FRAMEBUFFER,V)&&re.drawBuffers&&j&&Z.drawBuffers(C,V),Z.viewport(w),Z.scissor(U),Z.setScissorTest(z),ye){const Ie=_e.get(C.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ie.__webglTexture,X)}else if(Ce){const Ie=_e.get(C.texture),Ve=F||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ie.__webglTexture,X||0,Ve)}b=-1},this.readRenderTargetPixels=function(C,F,X,j,V,ye,Ce){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=_e.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ne=Ne[Ce]),Ne){Z.bindFramebuffer(P.FRAMEBUFFER,Ne);try{const Ie=C.texture,Ve=Ie.format,ze=Ie.type;if(Ve!==Xn&&we.convert(Ve)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=ze===$o&&(q.has("EXT_color_buffer_half_float")||re.isWebGL2&&q.has("EXT_color_buffer_float"));if(ze!==Qi&&we.convert(ze)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===Hi&&(re.isWebGL2||q.has("OES_texture_float")||q.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=C.width-j&&X>=0&&X<=C.height-V&&P.readPixels(F,X,j,V,we.convert(Ve),we.convert(ze),ye)}finally{const Ie=M!==null?_e.get(M).__webglFramebuffer:null;Z.bindFramebuffer(P.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(C,F,X=0){const j=Math.pow(2,-X),V=Math.floor(F.image.width*j),ye=Math.floor(F.image.height*j);R.setTexture2D(F,0),P.copyTexSubImage2D(P.TEXTURE_2D,X,0,0,C.x,C.y,V,ye),Z.unbindTexture()},this.copyTextureToTexture=function(C,F,X,j=0){const V=F.image.width,ye=F.image.height,Ce=we.convert(X.format),Ne=we.convert(X.type);R.setTexture2D(X,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,X.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,X.unpackAlignment),F.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,j,C.x,C.y,V,ye,Ce,Ne,F.image.data):F.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,j,C.x,C.y,F.mipmaps[0].width,F.mipmaps[0].height,Ce,F.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,j,C.x,C.y,Ce,Ne,F.image),j===0&&X.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Z.unbindTexture()},this.copyTextureToTexture3D=function(C,F,X,j,V=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=C.max.x-C.min.x+1,Ce=C.max.y-C.min.y+1,Ne=C.max.z-C.min.z+1,Ie=we.convert(j.format),Ve=we.convert(j.type);let ze;if(j.isData3DTexture)R.setTexture3D(j,0),ze=P.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)R.setTexture2DArray(j,0),ze=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,j.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,j.unpackAlignment);const Be=P.getParameter(P.UNPACK_ROW_LENGTH),vt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),pn=P.getParameter(P.UNPACK_SKIP_PIXELS),bt=P.getParameter(P.UNPACK_SKIP_ROWS),ai=P.getParameter(P.UNPACK_SKIP_IMAGES),ut=X.isCompressedTexture?X.mipmaps[V]:X.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,ut.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ut.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,C.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,C.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,C.min.z),X.isDataTexture||X.isData3DTexture?P.texSubImage3D(ze,V,F.x,F.y,F.z,ye,Ce,Ne,Ie,Ve,ut.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(ze,V,F.x,F.y,F.z,ye,Ce,Ne,Ie,ut.data)):P.texSubImage3D(ze,V,F.x,F.y,F.z,ye,Ce,Ne,Ie,Ve,ut),P.pixelStorei(P.UNPACK_ROW_LENGTH,Be),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,vt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,pn),P.pixelStorei(P.UNPACK_SKIP_ROWS,bt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ai),V===0&&j.generateMipmaps&&P.generateMipmap(ze),Z.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?R.setTextureCube(C,0):C.isData3DTexture?R.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?R.setTexture2DArray(C,0):R.setTexture2D(C,0),Z.unbindTexture()},this.resetState=function(){T=0,S=0,M=null,Z.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Gd?"display-p3":"srgb",n.unpackColorSpace=et.workingColorSpace===fu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ft?Cr:Mv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Cr?Ft:Ti}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class oA extends jv{}oA.prototype.isWebGL1Renderer=!0;class Xd{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Fe(e),this.near=n,this.far=i}clone(){return new Xd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class aA extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Yv extends Ks{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Lm=new I,Dm=new I,Nm=new yt,Ac=new bv,qa=new du;class lA extends Ut{constructor(e=new Jn,n=new Yv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Lm.fromBufferAttribute(n,r-1),Dm.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Lm.distanceTo(Dm);e.setAttribute("lineDistance",new yn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qa.copy(i.boundingSphere),qa.applyMatrix4(r),qa.radius+=s,e.ray.intersectsSphere(qa)===!1)return;Nm.copy(r).invert(),Ac.copy(e.ray).applyMatrix4(Nm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new I,c=new I,h=new I,d=new I,p=this.isLineSegments?2:1,_=i.index,v=i.attributes.position;if(_!==null){const f=Math.max(0,o.start),g=Math.min(_.count,o.start+o.count);for(let m=f,y=g-1;m<y;m+=p){const T=_.getX(m),S=_.getX(m+1);if(u.fromBufferAttribute(v,T),c.fromBufferAttribute(v,S),Ac.distanceSqToSegment(u,c,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(d);b<e.near||b>e.far||n.push({distance:b,point:h.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),g=Math.min(v.count,o.start+o.count);for(let m=f,y=g-1;m<y;m+=p){if(u.fromBufferAttribute(v,m),c.fromBufferAttribute(v,m+1),Ac.distanceSqToSegment(u,c,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(d);S<e.near||S>e.far||n.push({distance:S,point:h.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Um=new I,Im=new I;class uA extends lA{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Um.fromBufferAttribute(n,r),Im.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Um.distanceTo(Im);e.setAttribute("lineDistance",new yn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qv extends hn{constructor(e,n,i,r,s,o,a,l,u){super(e,n,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class oi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],d=i[r+1]-c,p=(o-c)/d;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new ve:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new I,r=[],s=[],o=[],a=new I,l=new yt;for(let p=0;p<=e;p++){const _=p/e;r[p]=this.getTangentAt(_,new I)}s[0]=new I,o[0]=new I;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),h<=u&&(u=h,i.set(0,1,0)),d<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Yt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Yt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],p*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class jd extends oi{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n){const i=n||new ve,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=u-this.aY;l=d*c-p*h+this.aX,u=d*h+p*c+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class cA extends jd{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Yd(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,h){let d=(o-s)/u-(a-s)/(u+c)+(a-o)/c,p=(a-o)/c-(l-o)/(c+h)+(l-a)/h;d*=c,p*=c,r(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const $a=new I,Rc=new Yd,Cc=new Yd,bc=new Yd;class fA extends oi{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new I){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:($a.subVectors(r[0],r[1]).add(r[0]),u=$a);const h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:($a.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=$a),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(u.distanceToSquared(h),p),x=Math.pow(h.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(c),p);x<1e-4&&(x=1),_<1e-4&&(_=x),v<1e-4&&(v=x),Rc.initNonuniformCatmullRom(u.x,h.x,d.x,c.x,_,x,v),Cc.initNonuniformCatmullRom(u.y,h.y,d.y,c.y,_,x,v),bc.initNonuniformCatmullRom(u.z,h.z,d.z,c.z,_,x,v)}else this.curveType==="catmullrom"&&(Rc.initCatmullRom(u.x,h.x,d.x,c.x,this.tension),Cc.initCatmullRom(u.y,h.y,d.y,c.y,this.tension),bc.initCatmullRom(u.z,h.z,d.z,c.z,this.tension));return i.set(Rc.calc(l),Cc.calc(l),bc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new I().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Om(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function dA(t,e){const n=1-t;return n*n*e}function hA(t,e){return 2*(1-t)*t*e}function pA(t,e){return t*t*e}function Co(t,e,n,i){return dA(t,e)+hA(t,n)+pA(t,i)}function mA(t,e){const n=1-t;return n*n*n*e}function gA(t,e){const n=1-t;return 3*n*n*t*e}function vA(t,e){return 3*(1-t)*t*t*e}function _A(t,e){return t*t*t*e}function bo(t,e,n,i,r){return mA(t,e)+gA(t,n)+vA(t,i)+_A(t,r)}class $v extends oi{constructor(e=new ve,n=new ve,i=new ve,r=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new ve){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(bo(e,r.x,s.x,o.x,a.x),bo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class xA extends oi{constructor(e=new I,n=new I,i=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new I){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(bo(e,r.x,s.x,o.x,a.x),bo(e,r.y,s.y,o.y,a.y),bo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Kv extends oi{constructor(e=new ve,n=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new ve){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new ve){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yA extends oi{constructor(e=new I,n=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new I){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new I){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jv extends oi{constructor(e=new ve,n=new ve,i=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new ve){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Co(e,r.x,s.x,o.x),Co(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class SA extends oi{constructor(e=new I,n=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new I){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Co(e,r.x,s.x,o.x),Co(e,r.y,s.y,o.y),Co(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zv extends oi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new ve){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],c=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(Om(a,l.x,u.x,c.x,h.x),Om(a,l.y,u.y,c.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new ve().fromArray(r))}return this}}var zf=Object.freeze({__proto__:null,ArcCurve:cA,CatmullRomCurve3:fA,CubicBezierCurve:$v,CubicBezierCurve3:xA,EllipseCurve:jd,LineCurve:Kv,LineCurve3:yA,QuadraticBezierCurve:Jv,QuadraticBezierCurve3:SA,SplineCurve:Zv});class MA extends oi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zf[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){const c=l[u];i&&i.equals(c)||(n.push(c),i=c)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new zf[r.type]().fromJSON(r))}return this}}class Fm extends MA{constructor(e){super(),this.type="Path",this.currentPoint=new ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new Kv(this.currentPoint.clone(),new ve(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new Jv(this.currentPoint.clone(),new ve(e,n),new ve(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new $v(this.currentPoint.clone(),new ve(e,n),new ve(i,r),new ve(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new Zv(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+u,n+c,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const u=new jd(e,n,i,r,s,o,a,l);if(this.curves.length>0){const h=u.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(u);const c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Qv extends Fm{constructor(e){super(e),this.uuid=$s(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new Fm().fromJSON(r))}return this}}const EA={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=e_(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,u,c,h,d,p;if(i&&(s=CA(t,e,s,n)),t.length>80*n){a=u=t[0],l=c=t[1];for(let _=n;_<r;_+=n)h=t[_],d=t[_+1],h<a&&(a=h),d<l&&(l=d),h>u&&(u=h),d>c&&(c=d);p=Math.max(u-a,c-l),p=p!==0?32767/p:0}return Ko(s,o,n,a,l,p,0),o}};function e_(t,e,n,i,r){let s,o;if(r===kA(t,e,n,i)>0)for(s=e;s<n;s+=i)o=zm(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=zm(s,t[s],t[s+1],o);return o&&gu(o,o.next)&&(Zo(o),o=o.next),o}function zr(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(gu(n,n.next)||ft(n.prev,n,n.next)===0)){if(Zo(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Ko(t,e,n,i,r,s,o){if(!t)return;!o&&s&&NA(t,i,r,s);let a=t,l,u;for(;t.prev!==t.next;){if(l=t.prev,u=t.next,s?TA(t,i,r,s):wA(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(u.i/n|0),Zo(t),t=u.next,a=u.next;continue}if(t=u,t===a){o?o===1?(t=AA(zr(t),e,n),Ko(t,e,n,i,r,s,2)):o===2&&RA(t,e,n,i,r,s):Ko(zr(t),e,n,i,r,s,1);break}}}function wA(t){const e=t.prev,n=t,i=t.next;if(ft(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,u=i.y,c=r<s?r<o?r:o:s<o?s:o,h=a<l?a<u?a:u:l<u?l:u,d=r>s?r>o?r:o:s>o?s:o,p=a>l?a>u?a:u:l>u?l:u;let _=i.next;for(;_!==e;){if(_.x>=c&&_.x<=d&&_.y>=h&&_.y<=p&&ys(r,a,s,l,o,u,_.x,_.y)&&ft(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function TA(t,e,n,i){const r=t.prev,s=t,o=t.next;if(ft(r,s,o)>=0)return!1;const a=r.x,l=s.x,u=o.x,c=r.y,h=s.y,d=o.y,p=a<l?a<u?a:u:l<u?l:u,_=c<h?c<d?c:d:h<d?h:d,x=a>l?a>u?a:u:l>u?l:u,v=c>h?c>d?c:d:h>d?h:d,f=kf(p,_,e,n,i),g=kf(x,v,e,n,i);let m=t.prevZ,y=t.nextZ;for(;m&&m.z>=f&&y&&y.z<=g;){if(m.x>=p&&m.x<=x&&m.y>=_&&m.y<=v&&m!==r&&m!==o&&ys(a,c,l,h,u,d,m.x,m.y)&&ft(m.prev,m,m.next)>=0||(m=m.prevZ,y.x>=p&&y.x<=x&&y.y>=_&&y.y<=v&&y!==r&&y!==o&&ys(a,c,l,h,u,d,y.x,y.y)&&ft(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;m&&m.z>=f;){if(m.x>=p&&m.x<=x&&m.y>=_&&m.y<=v&&m!==r&&m!==o&&ys(a,c,l,h,u,d,m.x,m.y)&&ft(m.prev,m,m.next)>=0)return!1;m=m.prevZ}for(;y&&y.z<=g;){if(y.x>=p&&y.x<=x&&y.y>=_&&y.y<=v&&y!==r&&y!==o&&ys(a,c,l,h,u,d,y.x,y.y)&&ft(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function AA(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!gu(r,s)&&t_(r,i,i.next,s)&&Jo(r,s)&&Jo(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),Zo(i),Zo(i.next),i=t=s),i=i.next}while(i!==t);return zr(i)}function RA(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&OA(o,a)){let l=n_(o,a);o=zr(o,o.next),l=zr(l,l.next),Ko(o,e,n,i,r,s,0),Ko(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function CA(t,e,n,i){const r=[];let s,o,a,l,u;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,u=e_(t,a,l,i,!1),u===u.next&&(u.steiner=!0),r.push(IA(u));for(r.sort(bA),s=0;s<r.length;s++)n=PA(r[s],n);return n}function bA(t,e){return t.x-e.x}function PA(t,e){const n=LA(t,e);if(!n)return e;const i=n_(n,t);return zr(i,i.next),zr(n,n.next)}function LA(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const d=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=s&&d>i&&(i=d,r=n.x<n.next.x?n:n.next,d===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,u=r.y;let c=1/0,h;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&ys(o<u?s:i,o,l,u,o<u?i:s,o,n.x,n.y)&&(h=Math.abs(o-n.y)/(s-n.x),Jo(n,t)&&(h<c||h===c&&(n.x>r.x||n.x===r.x&&DA(r,n)))&&(r=n,c=h)),n=n.next;while(n!==a);return r}function DA(t,e){return ft(t.prev,t,e.prev)<0&&ft(e.next,t,t.next)<0}function NA(t,e,n,i){let r=t;do r.z===0&&(r.z=kf(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,UA(r)}function UA(t){let e,n,i,r,s,o,a,l,u=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<u&&(a++,i=i.nextZ,!!i);e++);for(l=u;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,u*=2}while(o>1);return t}function kf(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function IA(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function ys(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function OA(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!FA(t,e)&&(Jo(t,e)&&Jo(e,t)&&zA(t,e)&&(ft(t.prev,t,e.prev)||ft(t,e.prev,e))||gu(t,e)&&ft(t.prev,t,t.next)>0&&ft(e.prev,e,e.next)>0)}function ft(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function gu(t,e){return t.x===e.x&&t.y===e.y}function t_(t,e,n,i){const r=Ja(ft(t,e,n)),s=Ja(ft(t,e,i)),o=Ja(ft(n,i,t)),a=Ja(ft(n,i,e));return!!(r!==s&&o!==a||r===0&&Ka(t,n,e)||s===0&&Ka(t,i,e)||o===0&&Ka(n,t,i)||a===0&&Ka(n,e,i))}function Ka(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Ja(t){return t>0?1:t<0?-1:0}function FA(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&t_(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Jo(t,e){return ft(t.prev,t,t.next)<0?ft(t,e,t.next)>=0&&ft(t,t.prev,e)>=0:ft(t,e,t.prev)<0||ft(t,t.next,e)<0}function zA(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function n_(t,e){const n=new Bf(t.i,t.x,t.y),i=new Bf(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function zm(t,e,n,i){const r=new Bf(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Zo(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Bf(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function kA(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class Po{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Po.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];km(e),Bm(i,e);let o=e.length;n.forEach(km);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,Bm(i,n[l]);const a=EA.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function km(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function Bm(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class qd extends Jn{constructor(e=new Qv([new ve(.5,.5),new ve(-.5,.5),new ve(-.5,-.5),new ve(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];o(u)}this.setAttribute("position",new yn(r,3)),this.setAttribute("uv",new yn(s,2)),this.computeVertexNormals();function o(a){const l=[],u=n.curveSegments!==void 0?n.curveSegments:12,c=n.steps!==void 0?n.steps:1,h=n.depth!==void 0?n.depth:1;let d=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,_=n.bevelSize!==void 0?n.bevelSize:p-.1,x=n.bevelOffset!==void 0?n.bevelOffset:0,v=n.bevelSegments!==void 0?n.bevelSegments:3;const f=n.extrudePath,g=n.UVGenerator!==void 0?n.UVGenerator:BA;let m,y=!1,T,S,M,b;f&&(m=f.getSpacedPoints(c),y=!0,d=!1,T=f.computeFrenetFrames(c,!1),S=new I,M=new I,b=new I),d||(v=0,p=0,_=0,x=0);const E=a.extractPoints(u);let w=E.shape;const U=E.holes;if(!Po.isClockWise(w)){w=w.reverse();for(let P=0,ae=U.length;P<ae;P++){const q=U[P];Po.isClockWise(q)&&(U[P]=q.reverse())}}const Q=Po.triangulateShape(w,U),D=w;for(let P=0,ae=U.length;P<ae;P++){const q=U[P];w=w.concat(q)}function O(P,ae,q){return ae||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(ae,q)}const G=w.length,Y=Q.length;function N(P,ae,q){let re,Z,be;const _e=P.x-ae.x,R=P.y-ae.y,A=q.x-P.x,k=q.y-P.y,ie=_e*_e+R*R,te=_e*k-R*A;if(Math.abs(te)>Number.EPSILON){const ee=Math.sqrt(ie),Re=Math.sqrt(A*A+k*k),pe=ae.x-R/ee,Ee=ae.y+_e/ee,Le=q.x-k/Re,ke=q.y+A/Re,ne=((Le-pe)*k-(ke-Ee)*A)/(_e*k-R*A);re=pe+_e*ne-P.x,Z=Ee+R*ne-P.y;const Je=re*re+Z*Z;if(Je<=2)return new ve(re,Z);be=Math.sqrt(Je/2)}else{let ee=!1;_e>Number.EPSILON?A>Number.EPSILON&&(ee=!0):_e<-Number.EPSILON?A<-Number.EPSILON&&(ee=!0):Math.sign(R)===Math.sign(k)&&(ee=!0),ee?(re=-R,Z=_e,be=Math.sqrt(ie)):(re=_e,Z=R,be=Math.sqrt(ie/2))}return new ve(re/be,Z/be)}const B=[];for(let P=0,ae=D.length,q=ae-1,re=P+1;P<ae;P++,q++,re++)q===ae&&(q=0),re===ae&&(re=0),B[P]=N(D[P],D[q],D[re]);const H=[];let $,K=B.concat();for(let P=0,ae=U.length;P<ae;P++){const q=U[P];$=[];for(let re=0,Z=q.length,be=Z-1,_e=re+1;re<Z;re++,be++,_e++)be===Z&&(be=0),_e===Z&&(_e=0),$[re]=N(q[re],q[be],q[_e]);H.push($),K=K.concat($)}for(let P=0;P<v;P++){const ae=P/v,q=p*Math.cos(ae*Math.PI/2),re=_*Math.sin(ae*Math.PI/2)+x;for(let Z=0,be=D.length;Z<be;Z++){const _e=O(D[Z],B[Z],re);de(_e.x,_e.y,-q)}for(let Z=0,be=U.length;Z<be;Z++){const _e=U[Z];$=H[Z];for(let R=0,A=_e.length;R<A;R++){const k=O(_e[R],$[R],re);de(k.x,k.y,-q)}}}const W=_+x;for(let P=0;P<G;P++){const ae=d?O(w[P],K[P],W):w[P];y?(M.copy(T.normals[0]).multiplyScalar(ae.x),S.copy(T.binormals[0]).multiplyScalar(ae.y),b.copy(m[0]).add(M).add(S),de(b.x,b.y,b.z)):de(ae.x,ae.y,0)}for(let P=1;P<=c;P++)for(let ae=0;ae<G;ae++){const q=d?O(w[ae],K[ae],W):w[ae];y?(M.copy(T.normals[P]).multiplyScalar(q.x),S.copy(T.binormals[P]).multiplyScalar(q.y),b.copy(m[P]).add(M).add(S),de(b.x,b.y,b.z)):de(q.x,q.y,h/c*P)}for(let P=v-1;P>=0;P--){const ae=P/v,q=p*Math.cos(ae*Math.PI/2),re=_*Math.sin(ae*Math.PI/2)+x;for(let Z=0,be=D.length;Z<be;Z++){const _e=O(D[Z],B[Z],re);de(_e.x,_e.y,h+q)}for(let Z=0,be=U.length;Z<be;Z++){const _e=U[Z];$=H[Z];for(let R=0,A=_e.length;R<A;R++){const k=O(_e[R],$[R],re);y?de(k.x,k.y+m[c-1].y,m[c-1].x+q):de(k.x,k.y,h+q)}}}J(),oe();function J(){const P=r.length/3;if(d){let ae=0,q=G*ae;for(let re=0;re<Y;re++){const Z=Q[re];le(Z[2]+q,Z[1]+q,Z[0]+q)}ae=c+v*2,q=G*ae;for(let re=0;re<Y;re++){const Z=Q[re];le(Z[0]+q,Z[1]+q,Z[2]+q)}}else{for(let ae=0;ae<Y;ae++){const q=Q[ae];le(q[2],q[1],q[0])}for(let ae=0;ae<Y;ae++){const q=Q[ae];le(q[0]+G*c,q[1]+G*c,q[2]+G*c)}}i.addGroup(P,r.length/3-P,0)}function oe(){const P=r.length/3;let ae=0;fe(D,ae),ae+=D.length;for(let q=0,re=U.length;q<re;q++){const Z=U[q];fe(Z,ae),ae+=Z.length}i.addGroup(P,r.length/3-P,1)}function fe(P,ae){let q=P.length;for(;--q>=0;){const re=q;let Z=q-1;Z<0&&(Z=P.length-1);for(let be=0,_e=c+v*2;be<_e;be++){const R=G*be,A=G*(be+1),k=ae+re+R,ie=ae+Z+R,te=ae+Z+A,ee=ae+re+A;Me(k,ie,te,ee)}}}function de(P,ae,q){l.push(P),l.push(ae),l.push(q)}function le(P,ae,q){xe(P),xe(ae),xe(q);const re=r.length/3,Z=g.generateTopUV(i,r,re-3,re-2,re-1);Ae(Z[0]),Ae(Z[1]),Ae(Z[2])}function Me(P,ae,q,re){xe(P),xe(ae),xe(re),xe(ae),xe(q),xe(re);const Z=r.length/3,be=g.generateSideWallUV(i,r,Z-6,Z-3,Z-2,Z-1);Ae(be[0]),Ae(be[1]),Ae(be[3]),Ae(be[1]),Ae(be[2]),Ae(be[3])}function xe(P){r.push(l[P*3+0]),r.push(l[P*3+1]),r.push(l[P*3+2])}function Ae(P){s.push(P.x),s.push(P.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return HA(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new zf[r.type]().fromJSON(r)),new qd(i,e.options)}}const BA={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],u=e[r*3],c=e[r*3+1];return[new ve(s,o),new ve(a,l),new ve(u,c)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],u=e[i*3],c=e[i*3+1],h=e[i*3+2],d=e[r*3],p=e[r*3+1],_=e[r*3+2],x=e[s*3],v=e[s*3+1],f=e[s*3+2];return Math.abs(a-c)<Math.abs(o-u)?[new ve(o,1-l),new ve(u,1-h),new ve(d,1-_),new ve(x,1-f)]:[new ve(a,1-l),new ve(c,1-h),new ve(p,1-_),new ve(v,1-f)]}};function HA(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class Gs extends Ks{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ev,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class i_ extends Ut{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class GA extends i_{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Pc=new yt,Hm=new I,Gm=new I;class VA{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vd,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Hm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Hm),Gm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Gm),n.updateMatrixWorld(),Pc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Pc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class WA extends VA{constructor(){super(new kv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class XA extends i_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new WA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class jA extends uA{constructor(e=10,n=10,i=4473924,r=8947848){i=new Fe(i),r=new Fe(r);const s=n/2,o=e/n,a=e/2,l=[],u=[];for(let d=0,p=0,_=-a;d<=n;d++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const x=d===s?i:r;x.toArray(u,p),p+=3,x.toArray(u,p),p+=3,x.toArray(u,p),p+=3,x.toArray(u,p),p+=3}const c=new Jn;c.setAttribute("position",new yn(l,3)),c.setAttribute("color",new yn(u,3));const h=new Yv({vertexColors:!0,toneMapped:!1});super(c,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bd);function Lc(t,e,n){return Math.min(n,Math.max(e,t))}function vu(t){const e=t.replace("#","");return{r:parseInt(e.substring(0,2),16)||0,g:parseInt(e.substring(2,4),16)||0,b:parseInt(e.substring(4,6),16)||0}}function Qo(t,e,n){const i=Lc(t.r*e,0,255)|0,r=Lc(t.g*e,0,255)|0,s=Lc(t.b*e,0,255)|0;return`rgba(${i},${r},${s},${n})`}function YA(t,e){return e==="concrete"?30:e==="marble"?6:e==="tile"?4:t==="roof"?26:t==="wall"?18:8}function qA(t,e){return t==="marble"?Math.max(.2,e-.45):t==="tile"?Math.max(.3,e-.3):e}function $A(t,e,n){const i=vu(e),r=n/8,s=n/4;t.strokeStyle=Qo(i,.5,.9),t.lineWidth=3;for(let a=0;a<=n;a+=r)t.beginPath(),t.moveTo(0,a),t.lineTo(n,a),t.stroke();let o=0;for(let a=0;a<n;a+=r){const l=o%2===0?0:s/2;for(let u=-s;u<=n+s;u+=s)t.beginPath(),t.moveTo(u+l,a),t.lineTo(u+l,a+r),t.stroke();o++}}function KA(t,e,n){const i=vu(e),r=n/4;t.strokeStyle=Qo(i,1.35,.85),t.lineWidth=3;for(let s=0;s<=4;s++)t.beginPath(),t.moveTo(s*r,0),t.lineTo(s*r,n),t.stroke(),t.beginPath(),t.moveTo(0,s*r),t.lineTo(n,s*r),t.stroke()}function JA(t,e,n){const i=vu(e),r=n/6;for(let s=0;s<n;s+=r){t.strokeStyle=Qo(i,.55,.85),t.lineWidth=2,t.beginPath(),t.moveTo(0,s),t.lineTo(n,s),t.stroke();for(let o=0;o<5;o++){const a=s+Math.random()*r,l=.85+Math.random()*.35;t.strokeStyle=Qo(i,l,.35),t.lineWidth=1,t.beginPath();const u=Math.random()*n*.6;t.moveTo(u,a),t.lineTo(u+n*(.2+Math.random()*.3),a),t.stroke()}}}function ZA(t,e,n){const i=vu(e);for(let r=0;r<4;r++){const s=r%2===0?1.4:.7;t.strokeStyle=Qo(i,s,.4),t.lineWidth=1+Math.random()*1.5,t.beginPath();let o=Math.random()*n,a=0;for(t.moveTo(o,a);a<n;){const l=o+(Math.random()-.5)*n*.3,u=a+n/6;t.quadraticCurveTo(o+(Math.random()-.5)*20,(a+u)/2,l,u),o=l,a=u}t.stroke()}}function QA(t,e,n,i){n==="brick"?$A(t,e,i):n==="tile"?KA(t,e,i):n==="wood"?JA(t,e,i):n==="marble"&&ZA(t,e,i)}function Vm(t,e=2.7,n=0){var d;if(!t.length)return{x:10,z:8,radius:12,targetY:1};let i=1/0,r=1/0,s=-1/0,o=-1/0,a=0;t.forEach(p=>{i=Math.min(i,p.gx),s=Math.max(s,p.gx+p.gw),r=Math.min(r,p.gy),o=Math.max(o,p.gy+p.gh),a=Math.max(a,p.floor??0)});const l=r_(t,e,0,n),u=((d=t.find(p=>(p.floor??0)===a))==null?void 0:d.wall_height)??e,c=l.get(a)+u+er,h=Math.max(s-i,o-r);return{x:(i+s)/2,z:(r+o)/2,radius:Math.max(h,c)*1.5+4,targetY:Math.max(1,c*.55)}}function r_(t,e,n=0,i=0){const r=Math.max(n,0,...t.map(a=>a.floor??0)),s=new Map;let o=0;for(let a=0;a<=r;a++){s.set(a,o);const l=t.find(c=>(c.floor??0)===a),u=(l==null?void 0:l.wall_height)??e;o+=u+er+i}return s}function Ps(t,e,n){return Math.min(n,Math.max(e,t))}function eR(t){if(t.points&&t.points.length>=3){const e=t.points;let n=0;for(let i=0;i<e.length;i++){const r=e[i],s=e[(i+1)%e.length];n+=r.x*s.y-s.x*r.y}return Math.abs(n)/2}return t.gw*t.gh}const xt=.15,en=.9,s_=2.05,jn=.9,Xl=.9,tR=.4,Dc=.6,er=.18,Vs=.22,vr=.35,vo=28*Math.PI/180,br=0,gi=.55,jl=.75,nR=.85,o_={bed:{label:"سرير",w:1.6,d:2,category:"غرفة نوم"},wardrobe:{label:"خزانة",w:1.2,d:.6,category:"غرفة نوم"},nightstand:{label:"كومودينو",w:.45,d:.4,category:"غرفة نوم"},sofa:{label:"أريكة",w:1.8,d:.85,category:"صالة"},armchair:{label:"كرسي بذراعين",w:.75,d:.75,category:"صالة"},tv_unit:{label:"وحدة تلفزيون",w:1.4,d:.4,category:"صالة"},dining_table:{label:"طاولة سفرة",w:1.6,d:.9,category:"صالة"},table:{label:"طاولة",w:1.4,d:.8,category:"عام"},chair:{label:"كرسي",w:.45,d:.45,category:"عام"},toilet:{label:"مرحاض",w:.4,d:.65,category:"حمام"},bathtub:{label:"بانيو",w:1.7,d:.75,category:"حمام"},shower:{label:"كابينة دش",w:.9,d:.9,category:"حمام"},sink:{label:"مغسلة حمام",w:.9,d:.55,category:"حمام"},kitchen_counter:{label:"كاونتر مطبخ",w:2,d:.6,category:"مطبخ"},stove:{label:"موقد",w:.6,d:.6,category:"مطبخ"},fridge:{label:"ثلاجة",w:.7,d:.7,category:"مطبخ"},desk:{label:"مكتب",w:1.2,d:.6,category:"مكتب"},bookshelf:{label:"مكتبة",w:.9,d:.3,category:"مكتب"}};function iR(t,e,n="plaster"){const r=document.createElement("canvas");r.width=256,r.height=256;const s=r.getContext("2d"),a=`#${new Fe(t).getHexString()}`;s.fillStyle=a,s.fillRect(0,0,256,256);const l=YA(e,n),u=s.getImageData(0,0,256,256),c=u.data;for(let d=0;d<c.length;d+=4){const p=(Math.random()-.5)*l;c[d]=Ps(c[d]+p,0,255),c[d+1]=Ps(c[d+1]+p,0,255),c[d+2]=Ps(c[d+2]+p,0,255)}if(s.putImageData(u,0,0),QA(s,a,n,256),e==="roof"&&n==="plaster"){s.strokeStyle="rgba(0,0,0,0.12)",s.lineWidth=1;for(let d=0;d<=256;d+=32)s.beginPath(),s.moveTo(0,d+.5),s.lineTo(256,d+.5),s.stroke()}const h=new qv(r);return h.wrapS=Ir,h.wrapT=Ir,h.needsUpdate=!0,h}function rR(t,e,n,i="plaster"){const r=`${n}:${i}:${e}`;let s=t.get(r);return s||(s=iR(e,n,i),t.set(r,s)),s}function sR(){const e=new Float32Array(16384);for(let u=0;u<e.length;u++)e[u]=Math.random();const n=new Float32Array(128*128);for(let u=0;u<128;u++)for(let c=0;c<128;c++){let h=0;for(let d=-1;d<=1;d++)for(let p=-1;p<=1;p++){const _=(c+p+128)%128,x=(u+d+128)%128;h+=e[x*128+_]}n[u*128+c]=h/9}const i=document.createElement("canvas");i.width=128,i.height=128;const r=i.getContext("2d"),s=r.createImageData(128,128),o=s.data,a=1.2;for(let u=0;u<128;u++)for(let c=0;c<128;c++){const h=n[u*128+(c-1+128)%128],d=n[u*128+(c+1)%128],p=n[(u-1+128)%128*128+c],_=n[(u+1)%128*128+c];let x=(h-d)*a,v=(p-_)*a;const f=1,g=Math.hypot(x,v,f),m=(u*128+c)*4;o[m]=(x/g*.5+.5)*255,o[m+1]=(v/g*.5+.5)*255,o[m+2]=(f/g*.5+.5)*255,o[m+3]=255}r.putImageData(s,0,0);const l=new qv(i);return l.wrapS=Ir,l.wrapT=Ir,l.needsUpdate=!0,l}function oR(t){const e="normal:wall";let n=t.get(e);return n||(n=sR(),t.set(e,n)),n}function kt(t,e,n,i,r,s,o="plaster"){const l=rR(t,e,n,o).clone();l.needsUpdate=!0;const u=1.2,c=Math.max(1,Math.round(i/u)),h=Math.max(1,Math.round(r/u));l.repeat.set(c,h);const d={map:l,roughness:qA(o,s)};if(n==="wall"){const p=oR(t).clone();p.needsUpdate=!0,p.repeat.set(c,h),d.normalMap=p,d.normalScale=new ve(.5,.5)}return new Gs(d)}function wt(t,e,n,i,r,s,o,a,l,u){const c=new Dn(new Hr(Math.max(n,.03),Math.max(i,.03),Math.max(r,.03)),l);return c.position.set(s,o+i/2,a),c.scale.y=.001,c.castShadow=!0,c.receiveShadow=!0,t.add(c),e.meshes.push({mesh:c,height:i,baseY:o,delay:u}),c}function aR(t,e,n){if(n)return t<=en+.4?[]:[{start:(t-en)/2,width:en,sill:0,openH:s_,isDoor:!0}];const i=Ps(1.3,.3,e-Xl-.25);if(i<=.3)return[];const r=t-2*tR;let s=0;if(r>=2*jn+Dc?s=2:r>=jn&&(s=1),s===0)return[];const o=s*jn+(s-1)*Dc,a=(t-o)/2,l=[];for(let u=0;u<s;u++)l.push({start:a+u*(jn+Dc),width:jn,sill:Xl,openH:i,isDoor:!1});return l}const Ss=1e-6,ss=(t,e)=>Math.abs(t-e)<Ss,Hf=.01;function lR(t){const e=[];for(let n=0;n<t.length;n++){const i=t[n],r=i.floor??0;for(let s=n+1;s<t.length;s++){const o=t[s];if((o.floor??0)===r){if(ss(o.gx,i.gx+i.gw)||ss(i.gx,o.gx+o.gw)){const a=Math.max(i.gy,o.gy),l=Math.min(i.gy+i.gh,o.gy+o.gh);l-a>Hf&&(ss(o.gx,i.gx+i.gw)?e.push({a:{room:i,wall:"right"},b:{room:o,wall:"left"},start:a,end:l}):e.push({a:{room:i,wall:"left"},b:{room:o,wall:"right"},start:a,end:l}))}if(ss(o.gy,i.gy+i.gh)||ss(i.gy,o.gy+o.gh)){const a=Math.max(i.gx,o.gx),l=Math.min(i.gx+i.gw,o.gx+o.gw);l-a>Hf&&(ss(o.gy,i.gy+i.gh)?e.push({a:{room:i,wall:"bottom"},b:{room:o,wall:"top"},start:a,end:l}):e.push({a:{room:i,wall:"top"},b:{room:o,wall:"bottom"},start:a,end:l}))}}}}return e}function a_(t){if(!t.length)return[];const e=t.slice().sort((i,r)=>i.start-r.start),n=[{...e[0]}];for(let i=1;i<e.length;i++){const r=e[i],s=n[n.length-1];r.start<=s.end+Ss?s.end=Math.max(s.end,r.end):n.push({...r})}return n}function l_(t,e,n=.02){const i=[];let r=0;return t.forEach(s=>{s.start>r+n&&i.push({start:r,end:s.start}),r=Math.max(r,s.end)}),e>r+n&&i.push({start:r,end:e}),i}function uR(t){const e=new Map,n=(r,s,o,a)=>{const l=`${r}:${s}`;e.has(l)||e.set(l,[]),e.get(l).push({start:o,end:a})};t.forEach(r=>{const{room:s,wall:o}=r.a,{room:a,wall:l}=r.b,u=o==="left"||o==="right"?s.gy:s.gx,c=l==="left"||l==="right"?a.gy:a.gx;n(s.id,o,r.start-u,r.end-u),n(a.id,l,r.start-c,r.end-c)});const i=new Map;return e.forEach((r,s)=>i.set(s,a_(r))),i}const Za=.02;function u_(t,e,n){return n!=null?`${t}:edge:${n}`:`${t}:${e}`}function Wm(t){if(t.points&&t.points.length>=3)return t.points.map((s,o)=>{const a=t.points[(o+1)%t.points.length];return{room:t,wall:null,edgeIndex:o,p1:s,p2:a,length:Math.hypot(a.x-s.x,a.y-s.y)}});const{gx:e,gy:n,gw:i,gh:r}=t;return[{room:t,wall:"top",edgeIndex:null,p1:{x:e,y:n},p2:{x:e+i,y:n},length:i},{room:t,wall:"bottom",edgeIndex:null,p1:{x:e,y:n+r},p2:{x:e+i,y:n+r},length:i},{room:t,wall:"left",edgeIndex:null,p1:{x:e,y:n},p2:{x:e,y:n+r},length:r},{room:t,wall:"right",edgeIndex:null,p1:{x:e+i,y:n},p2:{x:e+i,y:n+r},length:r}]}function cR(t,e){const n=t.length,i=e.length;if(!(n>Za)||!(i>Za))return null;const r=(t.p2.x-t.p1.x)/n,s=(t.p2.y-t.p1.y)/n,o=f=>Math.abs((f.x-t.p1.x)*s-(f.y-t.p1.y)*r);if(o(e.p1)>Za||o(e.p2)>Za)return null;const a=f=>(f.x-t.p1.x)*r+(f.y-t.p1.y)*s,l=a(e.p1),u=a(e.p2),c=Math.max(0,Math.min(l,u)),h=Math.min(n,Math.max(l,u));if(h-c<=Hf)return null;const d=u<l,p=f=>d?l-f:f-l,_=f=>Math.min(i,Math.max(0,f)),x=p(c),v=p(h);return{a:{start:c,end:h},b:{start:_(Math.min(x,v)),end:_(Math.max(x,v))},p1:{x:t.p1.x+r*c,y:t.p1.y+s*c},p2:{x:t.p1.x+r*h,y:t.p1.y+s*h},length:h-c,flipped:d}}function fR(t){const e=i=>!!(i.points&&i.points.length>=3),n=[];for(let i=0;i<t.length;i++){const r=t[i],s=r.floor??0;for(let o=i+1;o<t.length;o++){const a=t[o];(a.floor??0)===s&&(!e(r)&&!e(a)||Wm(r).forEach(l=>{Wm(a).forEach(u=>{const c=cR(l,u);c&&n.push({a:{room:r,wall:l.wall,edgeIndex:l.edgeIndex,start:c.a.start,end:c.a.end,edgeLength:l.length},b:{room:a,wall:u.wall,edgeIndex:u.edgeIndex,start:c.b.start,end:c.b.end,edgeLength:u.length},p1:c.p1,p2:c.p2,length:c.length,flipped:c.flipped})})}))}}return n}function dR(t,e){const n=new Map;return e.forEach(i=>{[i.a,i.b].forEach(r=>{const s=u_(r.room.id,r.wall,r.edgeIndex);n.has(s)||n.set(s,[]),n.get(s).push({start:r.start,end:r.end})})}),n.forEach((i,r)=>{t.set(r,a_([...t.get(r)||[],...i]))}),t}function Xm(t){const e=[];return t.forEach(n=>{e.some(i=>Math.abs(i.start-n.start)<.05)||e.push(n)}),e}function Yl(t,e,n){const i=t.kind==="door",r=i?en:jn,s=i?0:Xl,o=i?s_:Ps(1.3,.3,n-Xl-.25);return{start:Ps(Number(t.position)-r/2,0,Math.max(0,e-r)),width:r,sill:s,openH:o,isDoor:i}}function hR(t,e,n,i,r){return t==null?aR(n,i,r):t.filter(s=>s.wall===e).map(s=>Yl(s,n,i))}function jm(t,e,n,i,r,s){const{axis:o,u0:a,fixed:l,wallLength:u,wallHeight:c,openings:h,floorBaseY:d=0}=s,p=f=>o==="x"?{x:a+f,z:l}:{x:l,z:a+f},_=h.slice().sort((f,g)=>f.start-g.start);let x=0;const v=[];_.forEach(f=>{f.start>x+.02&&v.push({start:x,end:f.start}),x=Math.max(x,f.start+f.width)}),x<u-.02&&v.push({start:x,end:u}),v.forEach(f=>{const g=f.end-f.start;if(g<=.02)return;const m=(f.start+f.end)/2,y=p(m),T=o==="x"?g:xt,S=o==="x"?xt:g,M=kt(n,i,"wall",g,c,.85,r);wt(t,e,T,c,S,y.x,d,y.z,M,br)}),_.forEach(f=>{const g=f.start+f.width/2,m=p(g),y=o==="x"?f.width:xt,T=o==="x"?xt:f.width;if(f.sill>.02){const b=kt(n,i,"wall",f.width,f.sill,.85,r);wt(t,e,y,f.sill,T,m.x,d,m.z,b,br)}const S=f.sill+f.openH,M=c-S;if(M>.02){const b=kt(n,i,"wall",f.width,M,.85,r);wt(t,e,y,M,T,m.x,d+S,m.z,b,br)}if(f.isDoor){const b=new Gs({color:9132587,roughness:.7}),E=o==="x"?f.width-.06:.05,w=o==="x"?.05:f.width-.06;wt(t,e,E,f.openH,w,m.x,d,m.z,b,jl)}else{const b=new Gs({color:10475752,transparent:!0,opacity:.35,roughness:.05,metalness:.1,side:an}),E=o==="x"?f.width-.05:.03,w=o==="x"?.03:f.width-.05,U=wt(t,e,E,f.openH-.05,w,m.x,d+f.sill,m.z,b,jl);U.castShadow=!1}})}function pR(t,e,n,i,r,s,o,a,l,u,c,h){if(!c&&!h)return;if(c&&!h&&!i.points){if(i.roof_type==="gable"){mR(t,e,n,i,r,s,o,a,l,u);return}if(i.roof_type==="hip"){gR(t,e,n,i,r,s,o,l,u);return}}const p=`#${new Fe(o).multiplyScalar(.72).getHexString()}`,_=i.gw+Vs*2,x=i.gh+Vs*2,v=kt(n,p,"roof",_,x,.95);if(wt(t,e,_,er,x,l,s+r,u,v,gi),!c)return;const f=i.gw+xt,g=i.gh+xt,m=s+r+er,y=l-i.gw/2,T=l+i.gw/2,S=u-i.gh/2,M=u+i.gh/2,b=kt(n,p,"roof",f,vr,.95),E=kt(n,p,"roof",g,vr,.95);wt(t,e,f,vr,xt,l,m,S,b,gi),wt(t,e,f,vr,xt,l,m,M,b,gi),wt(t,e,xt,vr,g,y,m,u,E,gi),wt(t,e,xt,vr,g,T,m,u,E,gi)}function mR(t,e,n,i,r,s,o,a,l,u){const c=i.gw>=i.gh,h=(c?i.gh:i.gw)+Vs*2,d=(c?i.gw:i.gh)+Vs*2,p=h/2,_=p*Math.tan(vo),x=p/Math.cos(vo),v=s+r,g=`#${new Fe(o).multiplyScalar(.72).getHexString()}`,m=kt(n,g,"roof",x,d,.95);[-1,1].forEach(b=>{const E=new Er;E.position.set(l,v+_,u),c?E.rotation.x=b*vo:E.rotation.z=-b*vo,t.add(E);const w=c?d:x,U=c?x:d,z=c?0:b*x/2,Q=c?b*x/2:0;wt(E,e,w,er,U,z,0,Q,m,gi)});const y=c?i.gh:i.gw,T=(c?i.gw:i.gh)/2,S=10,M=kt(n,o,"wall",y,_,.85,a);[-1,1].forEach(b=>{const E=c?l+b*T:l,w=c?u:u+b*T;for(let U=0;U<S;U++){const z=U/S,Q=(U+1)/S,D=_/S,O=_*(z+Q)/2,G=y*(1-(z+Q)/2);wt(t,e,c?xt:G,D,c?G:xt,E,v+O-D/2,w,M,gi)}})}function Ym(t,e,n,i,r){const s=r/2,o=[t-n,-s,e-i],a=[t+n,-s,e-i],l=[t+n,-s,e+i],u=[t-n,-s,e+i],c=[t-(n-i),r-s,e],h=[t+(n-i),r-s,e],d=[u,l,h,u,h,c,a,o,c,a,c,h,o,u,c,l,a,h],p=new Jn;return p.setAttribute("position",new $n(new Float32Array(d.flat()),3)),p.computeVertexNormals(),p}function gR(t,e,n,i,r,s,o,a,l){const u=i.gw>=i.gh,c=(u?i.gh:i.gw)+Vs*2,h=(u?i.gw:i.gh)+Vs*2,d=c/2,p=h/2,_=d*Math.tan(vo),x=u?Ym(a,l,p,d,_):Ym(0,0,p,d,_);u||(x.rotateY(Math.PI/2),x.translate(a,0,l));const f=`#${new Fe(o).multiplyScalar(.72).getHexString()}`,g=kt(n,f,"roof",h,c,.95);g.side=an,Wf(t,e,x,g,s+r,_,gi)}function c_(t,e,n){switch(n){case 90:return{x:-e,z:t};case 180:return{x:-t,z:-e};case 270:return{x:e,z:-t};default:return{x:t,z:e}}}function It(t,e,n,i,r,s,o,a){const l=i.rotation||0,{x:u,z:c}=c_(a.cx,a.cz,l),h=l===90||l===270,d=h?a.d:a.w,p=h?a.w:a.d,_=kt(n,a.color,"wall",d,a.h,.75);wt(t,e,d,a.h,p,r+u,o+a.bottomY,s+c,_,nR)}function vR(t,e,n,i,r,s,o){const a=l=>It(t,e,n,i,r,s,o,l);a({cx:0,cz:0,w:1.6,d:2,h:.35,bottomY:0,color:"#8B5A2B"}),a({cx:0,cz:0,w:1.5,d:1.9,h:.18,bottomY:.35,color:"#EDE7DC"}),a({cx:0,cz:-.96,w:1.6,d:.08,h:.55,bottomY:.35,color:"#8B5A2B"})}function _R(t,e,n,i,r,s,o){const a=l=>It(t,e,n,i,r,s,o,l);a({cx:0,cz:0,w:1.8,d:.85,h:.4,bottomY:0,color:"#3B4454"}),a({cx:0,cz:-.35,w:1.8,d:.15,h:.35,bottomY:.4,color:"#3B4454"}),a({cx:-.825,cz:0,w:.15,d:.85,h:.55,bottomY:0,color:"#2C3444"}),a({cx:.825,cz:0,w:.15,d:.85,h:.55,bottomY:0,color:"#2C3444"})}function xR(t,e,n,i,r,s,o){const a=u=>It(t,e,n,i,r,s,o,u);a({cx:0,cz:0,w:1.4,d:.8,h:.05,bottomY:.7,color:"#6B4A32"}),[[-.65,-.35],[.65,-.35],[-.65,.35],[.65,.35]].forEach(([u,c])=>a({cx:u,cz:c,w:.06,d:.06,h:.7,bottomY:0,color:"#3A2A1E"}))}function yR(t,e,n,i,r,s,o){const a=l=>It(t,e,n,i,r,s,o,l);a({cx:0,cz:0,w:1.2,d:.6,h:1.85,bottomY:0,color:"#C9A876"}),a({cx:0,cz:0,w:1.2,d:.6,h:.05,bottomY:1.85,color:"#A9895C"})}function SR(t,e,n,i,r,s,o){const a=l=>It(t,e,n,i,r,s,o,l);a({cx:0,cz:0,w:.9,d:.55,h:.82,bottomY:0,color:"#E8ECF0"}),a({cx:0,cz:-.05,w:.55,d:.35,h:.08,bottomY:.75,color:"#B9C2CC"}),a({cx:0,cz:-.25,w:.9,d:.05,h:.35,bottomY:.82,color:"#E8ECF0"})}function MR(t,e,n,i,r,s,o){const a=l=>It(t,e,n,i,r,s,o,l);a({cx:0,cz:0,w:.45,d:.4,h:.48,bottomY:0,color:"#C9A876"}),a({cx:0,cz:0,w:.45,d:.4,h:.02,bottomY:.48,color:"#A9895C"})}function ER(t,e,n,i,r,s,o){const a=l=>It(t,e,n,i,r,s,o,l);a({cx:0,cz:0,w:.75,d:.75,h:.4,bottomY:0,color:"#3B4454"}),a({cx:0,cz:-.3,w:.75,d:.15,h:.35,bottomY:.4,color:"#3B4454"}),a({cx:-.3,cz:0,w:.15,d:.75,h:.5,bottomY:0,color:"#2C3444"}),a({cx:.3,cz:0,w:.15,d:.75,h:.5,bottomY:0,color:"#2C3444"})}function wR(t,e,n,i,r,s,o){const a=l=>It(t,e,n,i,r,s,o,l);a({cx:0,cz:0,w:1.4,d:.4,h:.45,bottomY:0,color:"#3B4454"}),a({cx:0,cz:-.15,w:1.1,d:.05,h:.65,bottomY:.45,color:"#1A1A1D"})}function TR(t,e,n,i,r,s,o){const a=u=>It(t,e,n,i,r,s,o,u);a({cx:0,cz:0,w:1.6,d:.9,h:.05,bottomY:.72,color:"#5A3D28"}),[[-.72,-.4],[.72,-.4],[-.72,.4],[.72,.4]].forEach(([u,c])=>a({cx:u,cz:c,w:.07,d:.07,h:.72,bottomY:0,color:"#3A2A1E"}))}function AR(t,e,n,i,r,s,o){const a=u=>It(t,e,n,i,r,s,o,u);a({cx:0,cz:0,w:.42,d:.42,h:.05,bottomY:.45,color:"#4A4A52"}),a({cx:0,cz:-.185,w:.42,d:.05,h:.4,bottomY:.45,color:"#4A4A52"}),[[-.17,-.17],[.17,-.17],[-.17,.17],[.17,.17]].forEach(([u,c])=>a({cx:u,cz:c,w:.04,d:.04,h:.45,bottomY:0,color:"#2C3444"}))}function RR(t,e,n,i,r,s,o){const a=l=>It(t,e,n,i,r,s,o,l);a({cx:0,cz:.08,w:.4,d:.5,h:.4,bottomY:0,color:"#F2F2F4"}),a({cx:0,cz:-.28,w:.38,d:.15,h:.35,bottomY:.4,color:"#F2F2F4"})}function CR(t,e,n,i,r,s,o){const a=l=>It(t,e,n,i,r,s,o,l);a({cx:0,cz:0,w:1.7,d:.75,h:.55,bottomY:0,color:"#F2F2F4"}),a({cx:0,cz:0,w:1.5,d:.55,h:.4,bottomY:.12,color:"#DCE3E8"})}function bR(t,e,n,i,r,s,o){const a=l=>It(t,e,n,i,r,s,o,l);a({cx:0,cz:0,w:.9,d:.9,h:.05,bottomY:0,color:"#DCE3E8"}),a({cx:-.44,cz:0,w:.03,d:.9,h:1.9,bottomY:.05,color:"#9FD8E8"}),a({cx:0,cz:-.44,w:.9,d:.03,h:1.9,bottomY:.05,color:"#9FD8E8"})}function PR(t,e,n,i,r,s,o){const a=l=>It(t,e,n,i,r,s,o,l);a({cx:0,cz:0,w:2,d:.6,h:.85,bottomY:0,color:"#DCDCE1"}),a({cx:0,cz:0,w:2,d:.62,h:.04,bottomY:.85,color:"#1A1A1D"})}function LR(t,e,n,i,r,s,o){const a=l=>It(t,e,n,i,r,s,o,l);a({cx:0,cz:0,w:.6,d:.6,h:.85,bottomY:0,color:"#DCDCE1"}),a({cx:0,cz:0,w:.55,d:.55,h:.03,bottomY:.85,color:"#1A1A1D"})}function DR(t,e,n,i,r,s,o){const a=l=>It(t,e,n,i,r,s,o,l);a({cx:0,cz:0,w:.7,d:.7,h:1.8,bottomY:0,color:"#E8ECF0"}),a({cx:.3,cz:-.36,w:.03,d:.1,h:.4,bottomY:.9,color:"#8E8E96"})}function NR(t,e,n,i,r,s,o){const a=u=>It(t,e,n,i,r,s,o,u);a({cx:0,cz:0,w:1.2,d:.6,h:.04,bottomY:.72,color:"#6B4A32"}),a({cx:.4,cz:0,w:.35,d:.55,h:.72,bottomY:0,color:"#4A4A52"}),[[-.55,-.25],[-.55,.25]].forEach(([u,c])=>a({cx:u,cz:c,w:.05,d:.05,h:.72,bottomY:0,color:"#3A2A1E"}))}function UR(t,e,n,i,r,s,o){const a=l=>It(t,e,n,i,r,s,o,l);a({cx:0,cz:0,w:.9,d:.3,h:1.8,bottomY:0,color:"#8B5A2B"}),[.5,1,1.5].forEach(l=>a({cx:0,cz:0,w:.85,d:.28,h:.03,bottomY:l,color:"#6B4A32"}))}function IR(t,e,n,i,r,s,o){switch(i.kind){case"bed":return vR(t,e,n,i,r,s,o);case"sofa":return _R(t,e,n,i,r,s,o);case"table":return xR(t,e,n,i,r,s,o);case"wardrobe":return yR(t,e,n,i,r,s,o);case"sink":return SR(t,e,n,i,r,s,o);case"nightstand":return MR(t,e,n,i,r,s,o);case"armchair":return ER(t,e,n,i,r,s,o);case"tv_unit":return wR(t,e,n,i,r,s,o);case"dining_table":return TR(t,e,n,i,r,s,o);case"chair":return AR(t,e,n,i,r,s,o);case"toilet":return RR(t,e,n,i,r,s,o);case"bathtub":return CR(t,e,n,i,r,s,o);case"shower":return bR(t,e,n,i,r,s,o);case"kitchen_counter":return PR(t,e,n,i,r,s,o);case"stove":return LR(t,e,n,i,r,s,o);case"fridge":return DR(t,e,n,i,r,s,o);case"desk":return NR(t,e,n,i,r,s,o);case"bookshelf":return UR(t,e,n,i,r,s,o);default:return}}const Gf=1,pl=.28,OR=.18,FR=.85;function zR(t){const e=Math.max(4,Math.round(t/OR));return{w:Gf,d:e*pl,numSteps:e}}function kR(t,e,n,i,r,s,o,a,l){const{d:u,numSteps:c}=zR(r),h=r/c,d=i.rotation||0,_=`#${new Fe(l).multiplyScalar(.85).getHexString()}`,x=d===90||d===270;for(let v=0;v<c;v++){const f=-u/2+(v+.5)*pl,g=(v+1)*h,{x:m,z:y}=c_(0,f,d),T=x?pl:Gf,S=x?Gf:pl,M=kt(n,_,"wall",T,g,.8);wt(t,e,T,g,S,s+m,a,o+y,M,FR)}}function Vf(t,e,n,i,r,s,o,a,l,u,c=[]){const h=o.x-s.x,d=o.y-s.y,p=Math.hypot(h,d);if(p<.02)return;const _=Math.atan2(h,d),x=(s.x+o.x)/2-u.x,v=(s.y+o.y)/2-u.z,f=new Er;f.position.set(x,l,v),f.rotation.y=_,t.add(f);const g=c.slice().sort((S,M)=>S.start-M.start),m=S=>S-p/2;let y=0;const T=[];g.forEach(S=>{S.start>y+.02&&T.push({start:y,end:S.start}),y=Math.max(y,S.start+S.width)}),y<p-.02&&T.push({start:y,end:p}),T.forEach(S=>{const M=S.end-S.start;if(M<=.02)return;const b=kt(n,i,"wall",M,a,.85,r);wt(f,e,xt,a,M,0,0,m((S.start+S.end)/2),b,br)}),g.forEach(S=>{const M=m(S.start+S.width/2);if(S.sill>.02){const w=kt(n,i,"wall",S.width,S.sill,.85,r);wt(f,e,xt,S.sill,S.width,0,0,M,w,br)}const b=S.sill+S.openH,E=a-b;if(E>.02){const w=kt(n,i,"wall",S.width,E,.85,r);wt(f,e,xt,E,S.width,0,b,M,w,br)}if(S.isDoor){const w=new Gs({color:9132587,roughness:.7});wt(f,e,.05,S.openH,S.width-.06,0,0,M,w,jl)}else{const w=new Gs({color:10475752,transparent:!0,opacity:.35,roughness:.05,metalness:.1,side:an}),U=wt(f,e,.03,S.openH-.05,S.width-.05,0,S.sill,M,w,jl);U.castShadow=!1}})}function qm(t,e,n){const i=new Qv;t.forEach((s,o)=>{const a=s.x-n.x,l=s.y-n.z;o===0?i.moveTo(a,l):i.lineTo(a,l)}),i.closePath();const r=new qd(i,{depth:e,bevelEnabled:!1,curveSegments:1});return r.translate(0,0,-e/2),r.rotateX(Math.PI/2),r}function Wf(t,e,n,i,r,s,o){const a=new Dn(n,i);return a.position.set(0,r+s/2,0),a.scale.y=.001,a.castShadow=!0,a.receiveShadow=!0,t.add(a),e.meshes.push({mesh:a,height:s,baseY:r,delay:o}),a}function BR(t,e,n,i,r,s,o,a,l,u,c,h=!1){const d=i.points;if(!d||d.length<3)return;const p=qm(d,.06,l),_=kt(n,i.color,"floor",4,4,.9,i.floor_material);_.side=an,Wf(t,e,p,_,s,.06,br);for(let m=0;m<d.length;m++){const y=d[m],T=d[(m+1)%d.length],S=Math.hypot(T.x-y.x,T.y-y.y),M=(i.openings||[]).filter(E=>E.edge_index===m).map(E=>Yl(E,S,r)),b=(c==null?void 0:c.get(u_(i.id,null,m)))||[];l_(b,S).forEach(E=>{const w=z=>({x:y.x+(T.x-y.x)*z/S,y:y.y+(T.y-y.y)*z/S}),U=M.filter(z=>z.start>=E.start-.02&&z.start+z.width<=E.end+.02).map(z=>({...z,start:z.start-E.start}));Vf(t,e,n,o,a,w(E.start),w(E.end),r,s,l,U)})}if(h||!i.has_roof&&!u)return;const v=`#${new Fe(o).multiplyScalar(.72).getHexString()}`,f=qm(d,er,l),g=kt(n,v,"roof",4,4,.95);if(g.side=an,Wf(t,e,f,g,s+r,er,gi),i.has_roof){const m=s+r+er;for(let y=0;y<d.length;y++)Vf(t,e,n,v,a,d[y],d[(y+1)%d.length],vr,m,l)}}const HR=[{wall:"top",axis:"x",doorFallback:!1},{wall:"bottom",axis:"x",doorFallback:!0},{wall:"left",axis:"z",doorFallback:!1},{wall:"right",axis:"z",doorFallback:!1}];function f_(t){var e,n,i;for((e=t.geometry)==null||e.dispose(),t.material&&((n=t.material.map)==null||n.dispose(),(i=t.material.normalMap)==null||i.dispose(),t.material.dispose());t.children.length;)f_(t.children.pop())}function GR(t,e){const n=(t.floor??0)+1,i=t.gx,r=t.gx+t.gw,s=t.gy,o=t.gy+t.gh;return e.some(a=>{if(a===t||(a.floor??0)!==n)return!1;const l=a.gx,u=a.gx+a.gw,c=a.gy,h=a.gy+a.gh;return i<u&&r>l&&s<h&&o>c})}function VR(t,e,n,i,r,s,o,a,l="plaster",u={}){const c=!!u.hideRoofs,h=u.floorGap??0;for(;t.children.length;)f_(t.children.pop());o.meshes=[];const d=e.filter(g=>!g.points),p=lR(d),_=fR(e),x=dR(uR(p),_),v=Math.max(0,...(n||[]).map(g=>(g.floor??0)+1)),f=r_(e,i,v,h);e.forEach(g=>{const m=g.floor??0,y=f.get(m),T=g.wall_height??i,S=g.wall_color??r,M=g.wall_material??l,b=GR(g,e);if(g.points){BR(t,o,a,g,T,y,S,M,s,b,x,c);return}const E=g.gx+g.gw/2-s.x,w=g.gy+g.gh/2-s.z,U=kt(a,g.color,"floor",g.gw,g.gh,.9,g.floor_material),z=new Dn(new Hr(g.gw,.06,g.gh),U);z.position.set(E,y+.03,w),z.receiveShadow=!0,t.add(z);const Q=g.gx-s.x,D=g.gx+g.gw-s.x,O=g.gy-s.z,G=g.gy+g.gh-s.z;HR.forEach(({wall:Y,axis:N,doorFallback:B})=>{const H=N==="x"?g.gw:g.gh,$=N==="x"?Q:O,K=Y==="top"?O:Y==="bottom"?G:Y==="left"?Q:D,W=x.get(`${g.id}:${Y}`)||[],J=l_(W,H);if(J.length===0)return;const oe=hR(g.openings,Y,H,T,B);J.forEach(fe=>{const de=fe.start<=Ss?xt/2:0,le=fe.end>=H-Ss?xt/2:0,Me=fe.end-fe.start+de+le,xe=$+fe.start-de,Ae=oe.filter(P=>P.start>=fe.start-.02&&P.start+P.width<=fe.end+.02).map(P=>({...P,start:P.start-fe.start+de}));jm(t,o,a,S,M,{axis:N,u0:xe,fixed:K,wallLength:Me,wallHeight:T,floorBaseY:y,openings:Ae})})}),pR(t,o,a,g,T,y,S,M,E,w,!c&&!!g.has_roof,!c&&b),(g.furniture||[]).forEach(Y=>{IR(t,o,a,Y,g.gx+Number(Y.x)-s.x,g.gy+Number(Y.y)-s.z,y)})}),p.forEach(g=>{const{room:m,wall:y}=g.a,{room:T,wall:S}=g.b,M=f.get(m.floor??0),b=m.wall_height??i,E=m.wall_color??r,w=m.wall_material??l,U=m.gx-s.x,z=m.gx+m.gw-s.x,Q=m.gy-s.z,D=m.gy+m.gh-s.z,O=y==="left"||y==="right"?"z":"x",G=O==="z"?m.gh:m.gw,Y=O==="z"?T.gh:T.gw,N=O==="z"?m.gy:m.gx,B=O==="z"?T.gy:T.gx,H=O==="z"?Q:U,$=O==="z"?y==="right"?z:U:y==="bottom"?D:Q,K=g.start-N,W=g.end-N,J=K<=Ss?xt/2:0,oe=W>=G-Ss?xt/2:0,fe=W-K+J+oe,de=H+K-J,le=(xe,Ae,P,ae)=>(xe.openings||[]).filter(q=>q.wall===Ae&&q.kind==="door").filter(q=>{const re=P+Number(q.position);return re-en/2>=g.start-.02&&re+en/2<=g.end+.02}).map(q=>{const re=Yl(q,ae,b);return{...re,start:P+re.start-g.start+J}}),Me=Xm([...le(m,y,N,G),...le(T,S,B,Y)]);jm(t,o,a,E,w,{axis:O,u0:de,fixed:$,wallLength:fe,wallHeight:b,floorBaseY:M,openings:Me})}),_.forEach(g=>{const m=g.a.room,y=f.get(m.floor??0),T=m.wall_height??i,S=m.wall_color??r,M=m.wall_material??l,b=(w,U)=>(w.room.openings||[]).filter(z=>(w.edgeIndex!=null?z.edge_index===w.edgeIndex:z.wall===w.wall)&&z.kind==="door").map(z=>Yl(z,w.edgeLength,T)).filter(z=>z.start>=w.start-.02&&z.start+z.width<=w.end+.02).map(z=>({...z,start:U&&g.flipped?w.end-(z.start+z.width):z.start-w.start})),E=Xm([...b(g.a,!1),...b(g.b,!0)]);Vf(t,o,a,S,M,g.p1,g.p2,T,y,s,E)}),(n||[]).forEach(g=>{const m=g.floor??0,y=f.get(m),T=f.get(m+1)-y;if(!(T>0))return;const S=Number(g.x)-s.x,M=Number(g.y)-s.z;kR(t,o,a,g,T,S,M,y,r)}),o.progress=0,o.playing=!0}const he=32;function ei(t,e=.5){return Math.round(t/e)*e}function Gi(t,e,n){return Math.min(n,Math.max(e,t))}function WR(t,e,n,i,r){return!n||!(n.width>0)||!(n.height>0)?{x:0,y:0}:{x:Gi((t-n.left)/n.width*i,0,i),y:Gi((e-n.top)/n.height*r,0,r)}}const XR=.3,jR=.22;function Xf(t,e,n,i,r,s){const o=r-n,a=s-i,l=o*o+a*a,u=l===0?0:Gi(((t-n)*o+(e-i)*a)/l,0,1),c=n+u*o,h=i+u*a;return{dist:Math.hypot(t-c,e-h),t:u}}function YR(t,e,n,i,r,s,o){let a=null;if(t.forEach(_=>{if(_.points){for(let v=0;v<_.points.length;v++){const f=_.points[v],g=_.points[(v+1)%_.points.length],m=Math.hypot(g.x-f.x,g.y-f.y),{dist:y,t:T}=Xf(e,n,f.x,f.y,g.x,g.y),S=T*m;(!a||y<a.dist)&&(a={dist:y,roomId:_.id,edgeIndex:v,length:m,rawPosition:S})}return}[{wall:"top",x1:_.gx,y1:_.gy,x2:_.gx+_.gw,y2:_.gy,length:_.gw},{wall:"bottom",x1:_.gx,y1:_.gy+_.gh,x2:_.gx+_.gw,y2:_.gy+_.gh,length:_.gw},{wall:"left",x1:_.gx,y1:_.gy,x2:_.gx,y2:_.gy+_.gh,length:_.gh},{wall:"right",x1:_.gx+_.gw,y1:_.gy,x2:_.gx+_.gw,y2:_.gy+_.gh,length:_.gh}].forEach(v=>{const{dist:f,t:g}=Xf(e,n,v.x1,v.y1,v.x2,v.y2),m=g*v.length;(!a||f<a.dist)&&(a={dist:f,roomId:_.id,wall:v.wall,length:v.length,rawPosition:m})})}),!a||a.dist>XR||a.length<i)return null;const l=i/2,u=Gi(a.rawPosition,l,a.length-l),c=a.wall==null;return(t.find(_=>_.id===a.roomId).openings||[]).filter(_=>(c?_.edge_index===a.edgeIndex:_.wall===a.wall)&&_.id!==o).some(_=>{const x=_.kind==="door"?en:jn;return u-l<_.position+x/2&&u+l>_.position-x/2})?null:c?{roomId:a.roomId,edgeIndex:a.edgeIndex,position:u}:{roomId:a.roomId,wall:a.wall,position:u}}function qR(t,e,n){let i=null;return t.forEach(r=>{(r.openings||[]).forEach(s=>{const o=s.kind==="door"?en:jn,a=_u(r,s,o),{dist:l}=Xf(e,n,a.x1,a.y1,a.x2,a.y2);(!i||l<i.dist)&&(i={dist:l,roomId:r.id,id:s.id,wall:s.wall,edgeIndex:s.edge_index,position:s.position,kind:s.kind})})}),!i||i.dist>jR?null:i}function _u(t,e,n){const i=n/2;if(t.points){const a=e.edgeIndex??e.edge_index,l=t.points[a],u=t.points[(a+1)%t.points.length],c=Math.hypot(u.x-l.x,u.y-l.y)||1,h=(e.position-i)/c,d=(e.position+i)/c;return{x1:l.x+(u.x-l.x)*h,y1:l.y+(u.y-l.y)*h,x2:l.x+(u.x-l.x)*d,y2:l.y+(u.y-l.y)*d}}const{wall:r,position:s}=e;if(r==="top"||r==="bottom"){const a=r==="top"?t.gy:t.gy+t.gh;return{x1:t.gx+s-i,y1:a,x2:t.gx+s+i,y2:a}}const o=r==="left"?t.gx:t.gx+t.gw;return{x1:o,y1:t.gy+s-i,x2:o,y2:t.gy+s+i}}const Qa=.35,Ni=.08;function d_(t,e,n){if(e.points)return;const{gx:i,gy:r,gw:s,gh:o}=e;t.save(),t.strokeStyle=n.line,t.fillStyle=n.text,t.lineWidth=1,t.font="10px 'IBM Plex Mono', monospace",t.textAlign="center";const a=(d,p,_,x)=>{t.beginPath(),t.moveTo(d*he,p*he),t.lineTo(_*he,x*he),t.stroke()},l=r-Qa;a(i,r,i,l-Ni),a(i+s,r,i+s,l-Ni),a(i,l,i+s,l),t.fillText(s.toFixed(2),(i+s/2)*he,(l-.06)*he);const u=r+o+Qa;a(i,r+o,i,u+Ni),a(i+s,r+o,i+s,u+Ni),a(i,u,i+s,u),t.fillText(s.toFixed(2),(i+s/2)*he,(u+.16)*he);const c=i-Qa;a(i,r,c-Ni,r),a(i,r+o,c-Ni,r+o),a(c,r,c,r+o),t.save(),t.translate(c*he-6,(r+o/2)*he),t.rotate(-Math.PI/2),t.fillText(o.toFixed(2),0,0),t.restore();const h=i+s+Qa;a(i+s,r,h+Ni,r),a(i+s,r+o,h+Ni,r+o),a(h,r,h,r+o),t.save(),t.translate(h*he+6,(r+o/2)*he),t.rotate(-Math.PI/2),t.fillText(o.toFixed(2),0,0),t.restore(),t.restore()}function $R(t){if(t.points&&t.points.length){const e=t.points.length;return{x:t.points.reduce((n,i)=>n+i.x,0)/e,y:t.points.reduce((n,i)=>n+i.y,0)/e}}return{x:t.gx+t.gw/2,y:t.gy+t.gh/2}}function h_(t,e,n,i){if(n.kind!=="door")return;const r=_u(e,n,en),s=r.x2-r.x1,o=r.y2-r.y1,a=Math.hypot(s,o);if(a<.01)return;const l={x:-o/a,y:s/a},u={x:o/a,y:-s/a},c=$R(e),h=(r.x1+r.x2)/2,d=(r.y1+r.y2)/2,p={x:c.x-h,y:c.y-d},_=l.x*p.x+l.y*p.y>=0?l:u,x=Math.atan2(o,s),v=Math.atan2(_.y,_.x);let f=v-x;for(;f>Math.PI;)f-=Math.PI*2;for(;f<=-Math.PI;)f+=Math.PI*2;const g=f<0,m=r.x1,y=r.y1;t.save(),t.strokeStyle=i,t.lineWidth=1,t.setLineDash([3,3]),t.beginPath(),t.arc(m*he,y*he,en*he,x,v,g),t.stroke(),t.setLineDash([]),t.beginPath(),t.moveTo(m*he,y*he),t.lineTo((m+en*Math.cos(v))*he,(y+en*Math.sin(v))*he),t.stroke(),t.restore()}function KR(t,e){const n=o_[t];if(!n)return{w:.5,d:.5};const i=e===90||e===270;return{w:i?n.d:n.w,d:i?n.w:n.d}}function JR(t,e,n){const i=document.createElement("canvas");i.width=e*he,i.height=n*he;const r=i.getContext("2d");r.fillStyle="#FFFFFF",r.fillRect(0,0,i.width,i.height);for(let s=0;s<=e;s++)r.strokeStyle=s%5===0?"#C7C7CC":"#EDEDF0",r.lineWidth=s%5===0?1.2:1,r.beginPath(),r.moveTo(s*he+.5,0),r.lineTo(s*he+.5,n*he),r.stroke();for(let s=0;s<=n;s++)r.strokeStyle=s%5===0?"#C7C7CC":"#EDEDF0",r.lineWidth=s%5===0?1.2:1,r.beginPath(),r.moveTo(0,s*he+.5),r.lineTo(e*he,s*he+.5),r.stroke();return t.forEach(s=>{const o=s.gx*he,a=s.gy*he,l=s.gw*he,u=s.gh*he;s.points&&s.points.length>=3?(r.beginPath(),s.points.forEach((c,h)=>{h===0?r.moveTo(c.x*he,c.y*he):r.lineTo(c.x*he,c.y*he)}),r.closePath(),r.fillStyle=s.color+"25",r.fill(),r.strokeStyle=s.color,r.lineWidth=2,r.stroke(),r.fillStyle="#1A1A1D",r.font="700 13px Tajawal, sans-serif",r.fillText(s.name,o+8,a+20),r.fillStyle="#68686E",r.font="11px 'IBM Plex Mono', monospace",r.fillText(`${eR(s).toFixed(1)} m²`,o+8,a+36)):(r.fillStyle=s.color+"25",r.fillRect(o,a,l,u),r.strokeStyle=s.color,r.lineWidth=2,r.strokeRect(o,a,l,u),r.fillStyle="#1A1A1D",r.font="700 13px Tajawal, sans-serif",r.fillText(s.name,o+8,a+20),r.fillStyle="#68686E",r.font="11px 'IBM Plex Mono', monospace",r.fillText(`${s.gw.toFixed(1)} × ${s.gh.toFixed(1)} m`,o+8,a+36),d_(r,s,{line:"#B45309",text:"#92400E"})),(s.openings||[]).forEach(c=>{const h=c.kind==="door"?en:jn,d=_u(s,c,h);r.strokeStyle=c.kind==="door"?"#8B5A2B":"#0EA5E9",r.lineWidth=5,r.beginPath(),r.moveTo(d.x1*he,d.y1*he),r.lineTo(d.x2*he,d.y2*he),r.stroke(),h_(r,s,c,"#8B5A2B")}),(s.furniture||[]).forEach(c=>{var x;const{w:h,d}=KR(c.kind,c.rotation||0),p=(s.gx+c.x-h/2)*he,_=(s.gy+c.y-d/2)*he;r.fillStyle="#A9895C25",r.fillRect(p,_,h*he,d*he),r.strokeStyle="#A9895C",r.lineWidth=1.5,r.strokeRect(p,_,h*he,d*he),r.fillStyle="#1A1A1D",r.font="10px Tajawal, sans-serif",r.textAlign="center",r.fillText(((x=o_[c.kind])==null?void 0:x.label)||"",p+h*he/2,_+d*he/2+3),r.textAlign="start"})}),i.toDataURL("image/png")}const Nc=.62,Uc=Math.PI/4;function ZR({rooms:t,stairs:e,wallHeight:n,wallColor:i,wallMaterial:r,autoRotate:s,dollhouse:o=!1,floorGap:a=0,t:l=u=>u}){const u=qe.useRef(null),c=qe.useRef({}),h=qe.useRef({autoRotate:s}),d=qe.useRef({maxRadius:50}),p=qe.useRef(o),_=qe.useRef(new Map),[x,v]=qe.useState(0);return qe.useEffect(()=>{h.current.autoRotate=s},[s]),qe.useEffect(()=>{const f=u.current,g=new aA;g.background=new Fe(15790322),g.fog=new Xd(15790322,22,60);const m=new bn(50,1,.1,200),y=new jv({antialias:!0});y.setPixelRatio(Math.min(window.devicePixelRatio,2)),y.shadowMap.enabled=!0,y.shadowMap.type=dv,f.appendChild(y.domElement),g.add(new GA(12572415,1711915,.95));const T=new XA(16773856,1);T.position.set(10,18,8),T.castShadow=!0,T.shadow.mapSize.set(2048,2048),T.shadow.bias=-.0015,g.add(T);const S=new Dn(new pu(300,300),new Gs({color:13948120,roughness:1}));S.rotation.x=-Math.PI/2,S.position.y=-.03,S.receiveShadow=!0,g.add(S);const M=new jA(300,150,10592682,13948120);M.position.y=-.02,g.add(M);const b=new Er;g.add(b);const E=Vm(t,n),w={theta:Uc,phi:o?Nc:1,radius:E.radius,target:new I(0,E.targetY,0)};function U(){const{theta:le,phi:Me,radius:xe,target:Ae}=w;m.position.set(Ae.x+xe*Math.sin(Me)*Math.sin(le),Ae.y+xe*Math.cos(Me),Ae.z+xe*Math.sin(Me)*Math.cos(le)),m.lookAt(Ae)}let z=!1,Q=0,D=0;const O=new Map;let G=null;function Y(){const[le,Me]=[...O.values()];return Math.hypot(le.x-Me.x,le.y-Me.y)}function N(le){O.set(le.pointerId,{x:le.clientX,y:le.clientY}),O.size===1?(z=!0,Q=le.clientX,D=le.clientY):O.size===2&&(z=!1,G=Y())}function B(le){if(O.has(le.pointerId))O.set(le.pointerId,{x:le.clientX,y:le.clientY});else if(!z)return;if(O.size>=2){const Ae=Y();G&&(w.radius=Gi(w.radius*(G/Ae),3,d.current.maxRadius),U()),G=Ae;return}if(!z)return;const Me=le.clientX-Q,xe=le.clientY-D;Q=le.clientX,D=le.clientY,w.theta-=Me*.006,w.phi=Gi(w.phi-xe*.006,.15,1.5),U()}function H(le){if(O.delete(le.pointerId),G=null,O.size===1){const[[,Me]]=O;z=!0,Q=Me.x,D=Me.y}else O.size===0&&(z=!1)}function $(le){le.preventDefault(),w.radius=Gi(w.radius*(1+le.deltaY*.001),3,d.current.maxRadius),U()}const K=y.domElement;K.style.cursor="grab",K.style.touchAction="none",K.addEventListener("pointerdown",N),window.addEventListener("pointermove",B),window.addEventListener("pointerup",H),window.addEventListener("pointercancel",H),K.addEventListener("wheel",$,{passive:!1});function W(){const le=f.clientWidth,Me=f.clientHeight;le===0||Me===0||(y.setSize(le,Me),m.aspect=le/Me,m.updateProjectionMatrix())}W();const J=new ResizeObserver(W);J.observe(f),U();const oe={progress:0,playing:!0,meshes:[]};let fe;function de(){fe=requestAnimationFrame(de),h.current.autoRotate&&!z&&(w.theta+=.0028,U()),oe.playing&&(oe.progress=Math.min(1,oe.progress+.025),oe.meshes.forEach(({mesh:le,height:Me,baseY:xe,delay:Ae})=>{const P=Gi((oe.progress-Ae)/(1-Ae),0,1),ae=1-Math.pow(1-P,3);le.scale.y=Math.max(ae,.001),le.position.y=xe+Me*ae/2}),oe.progress>=1&&(oe.playing=!1)),y.render(g,m)}return de(),c.current={scene:g,group:b,orbit:w,updateCamera:U,animState:oe,dirLight:T,center:E,defaultRadius:E.radius,defaultTargetY:E.targetY},d.current.maxRadius=Math.max(50,E.radius*2),()=>{cancelAnimationFrame(fe),K.removeEventListener("pointerdown",N),window.removeEventListener("pointermove",B),window.removeEventListener("pointerup",H),window.removeEventListener("pointercancel",H),K.removeEventListener("wheel",$),J.disconnect(),f.removeChild(y.domElement),y.dispose()}},[]),qe.useEffect(()=>{const f=c.current;if(f.group&&(VR(f.group,t,e,n,i,f.center,f.animState,_.current,r,{hideRoofs:o,floorGap:a}),f.dirLight)){const g=f.defaultRadius;f.dirLight.position.set(g*.6,Math.max(14,g*.9),g*.45);const m=f.dirLight.shadow.camera;m.left=-g,m.right=g,m.top=g,m.bottom=-g,m.near=1;const y=Math.max(n,...t.map(T=>T.wall_height??n));m.far=g*3+y*2,m.updateProjectionMatrix()}},[t,e,n,i,r,o,a]),qe.useEffect(()=>{var m;const f=c.current;if(!f.orbit||!f.updateCamera)return;const g=Vm(t,n,a);f.defaultRadius=g.radius,f.defaultTargetY=g.targetY,f.orbit.target.y=g.targetY,f.orbit.radius=g.radius,d.current.maxRadius=Math.max(50,g.radius*2),(m=f.scene)!=null&&m.fog&&(f.scene.fog.far=Math.max(60,g.radius*2.6)),o!==p.current&&(p.current=o,o&&(f.orbit.phi=Nc,f.orbit.theta=Uc)),f.updateCamera()},[o,a]),qe.useEffect(()=>{if(x===0)return;const f=c.current;f.orbit&&(f.orbit.theta=Uc,f.orbit.phi=o?Nc:1,f.orbit.radius=f.defaultRadius,f.orbit.target.y=f.defaultTargetY??f.orbit.target.y,f.updateCamera())},[x]),Te.jsxs("div",{style:{position:"relative",width:"100%",height:"100%"},children:[Te.jsx("div",{ref:u,style:{width:"100%",height:"100%"}}),Te.jsx("button",{type:"button",onClick:()=>v(f=>f+1),style:{position:"absolute",bottom:12,right:12,fontSize:12,fontWeight:600,color:"#e2e8f0",background:"rgba(15,23,42,0.9)",border:"1px solid #334155",borderRadius:8,padding:"6px 12px",cursor:"pointer"},children:l("Reset camera")})]})}const el=1.5,$m=["#cfd6cf","#d8cfc2","#c9d3df","#dccfd6","#cfd8d3"];function QR({rooms:t,gridW:e=20,gridH:n=16,mode:i,selectedRoomId:r,selectedOpening:s,onAddRoom:o,onMoveRoom:a,onResizeRoom:l,onSelectRoom:u,onAddOpening:c,onSelectOpening:h}){const d=qe.useRef(null),p=qe.useRef(null);function _(){const y=d.current;if(!y)return;const T=y.getContext("2d");T.clearRect(0,0,y.width,y.height),T.strokeStyle="#e5e7eb",T.lineWidth=1;for(let M=0;M<=e;M++)T.beginPath(),T.moveTo(M*he,0),T.lineTo(M*he,n*he),T.stroke();for(let M=0;M<=n;M++)T.beginPath(),T.moveTo(0,M*he),T.lineTo(e*he,M*he),T.stroke();t.forEach((M,b)=>{const E=M.id===r;if(T.fillStyle=M.color||$m[b%$m.length],T.fillRect(M.gx*he,M.gy*he,M.gw*he,M.gh*he),T.strokeStyle=E?"#c9a96e":"#4b5563",T.lineWidth=Math.max(2,xt*he),T.strokeRect(M.gx*he,M.gy*he,M.gw*he,M.gh*he),T.fillStyle="#1b1e22",T.font="13px sans-serif",T.textAlign="center",T.fillText(M.name,(M.gx+M.gw/2)*he,(M.gy+M.gh/2)*he),d_(T,M,{line:"#9ca3af",text:"#6b7280"}),(M.openings||[]).forEach(w=>{const U=w.kind==="door"?en:jn,z=_u(M,w,U),Q=s&&s.roomId===M.id&&s.openingId===w.id;T.save(),T.strokeStyle=Q?"#c9a96e":w.kind==="door"?"#8b5e34":"#3b82f6",T.lineWidth=Math.max(3,xt*he+2),T.beginPath(),T.moveTo(z.x1*he,z.y1*he),T.lineTo(z.x2*he,z.y2*he),T.stroke(),T.restore(),w.kind==="door"&&h_(T,M,w,Q?"#c9a96e":"#8b5e34")}),E){T.fillStyle="#c9a96e";const w=(M.gx+M.gw)*he,U=(M.gy+M.gh)*he;T.fillRect(w-6,U-6,12,12)}});const S=p.current;if(S&&S.kind==="new-room"){const M=Math.min(S.startX,S.curX),b=Math.min(S.startY,S.curY),E=Math.abs(S.curX-S.startX),w=Math.abs(S.curY-S.startY);T.strokeStyle="#c9a96e",T.setLineDash([6,4]),T.lineWidth=2,T.strokeRect(M*he,b*he,E*he,w*he),T.setLineDash([])}}qe.useEffect(_);function x(y){const T=d.current.getBoundingClientRect();return WR(y.clientX,y.clientY,T,e,n)}function v(y,T){return t.find(S=>y>=S.gx&&y<=S.gx+S.gw&&T>=S.gy&&T<=S.gy+S.gh)}function f(y){const{x:T,y:S}=x(y);if(i==="room"){p.current={kind:"new-room",startX:ei(T),startY:ei(S),curX:T,curY:S},_();return}if(i==="door"||i==="window"){const Q=YR(t,T,S,i==="door"?en:jn);Q&&c(Q.roomId,i,Q.wall,Q.position);return}const M=qR(t,T,S);if(M){h({roomId:M.roomId,openingId:M.id});return}h(null);const b=v(T,S);if(!b){u(null);return}u(b.id);const E=b.gx+b.gw,w=b.gy+b.gh,U=Math.abs(T-E)<.25&&Math.abs(S-w)<.25;p.current=U?{kind:"resize",roomId:b.id,startGx:b.gx,startGy:b.gy}:{kind:"move",roomId:b.id,offsetX:T-b.gx,offsetY:S-b.gy}}function g(y){const T=p.current;if(!T)return;const{x:S,y:M}=x(y);if(T.kind==="new-room"){T.curX=S,T.curY=M,_();return}if(T.kind==="move"){const b=t.find(U=>U.id===T.roomId);if(!b)return;const E=ei(Math.max(0,Math.min(e-b.gw,S-T.offsetX))),w=ei(Math.max(0,Math.min(n-b.gh,M-T.offsetY)));a(T.roomId,E,w);return}if(T.kind==="resize"){const b=ei(Math.max(el,S-T.startGx)),E=ei(Math.max(el,M-T.startGy));l(T.roomId,b,E)}}function m(){const y=p.current;if(y&&y.kind==="new-room"){const T=ei(Math.min(y.startX,y.curX)),S=ei(Math.min(y.startY,y.curY)),M=Math.max(el,ei(Math.abs(y.curX-y.startX))),b=Math.max(el,ei(Math.abs(y.curY-y.startY)));o({gx:T,gy:S,gw:M,gh:b})}p.current=null,_()}return Te.jsx("canvas",{ref:d,width:e*he,height:n*he,style:{background:"#fff",touchAction:"none",cursor:i==="select"?"default":"crosshair"},onPointerDown:f,onPointerMove:g,onPointerUp:m,onPointerLeave:m})}const e2=[{id:"select",label:"Select"},{id:"room",label:"Add Room"},{id:"door",label:"Add Door"},{id:"window",label:"Add Window"}],Ic=t=>({padding:"8px 14px",borderRadius:8,border:t?"2px solid #c9a96e":"1px solid #d1d5db",background:t?"#fdf6ea":"#fff",fontWeight:600,fontSize:13,cursor:"pointer"});function t2({t,mode:e,onModeChange:n,selectedRoom:i,onRenameRoom:r,onResizeRoomInputs:s,onDeleteRoom:o,selectedOpening:a,onDeleteOpening:l}){return Te.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:10,alignItems:"center",padding:"10px 14px",borderBottom:"1px solid #e5e7eb"},children:[e2.map(u=>Te.jsx("button",{type:"button",style:Ic(e===u.id),onClick:()=>n(u.id),children:t(u.label)},u.id)),i&&Te.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",marginInlineStart:12},children:[Te.jsx("input",{value:i.name,onChange:u=>r(i.id,u.target.value),style:{padding:"6px 10px",borderRadius:6,border:"1px solid #d1d5db",fontSize:13,width:140}}),Te.jsxs("label",{style:{fontSize:12,color:"#6b7280"},children:[t("W"),Te.jsx("input",{type:"number",step:"0.1",min:"1.5",value:i.gw,onChange:u=>s(i.id,parseFloat(u.target.value)||i.gw,i.gh),style:{width:60,marginInlineStart:4,padding:"4px 6px",borderRadius:6,border:"1px solid #d1d5db"}})]}),Te.jsxs("label",{style:{fontSize:12,color:"#6b7280"},children:[t("H"),Te.jsx("input",{type:"number",step:"0.1",min:"1.5",value:i.gh,onChange:u=>s(i.id,i.gw,parseFloat(u.target.value)||i.gh),style:{width:60,marginInlineStart:4,padding:"4px 6px",borderRadius:6,border:"1px solid #d1d5db"}})]}),Te.jsx("button",{type:"button",style:Ic(!1),onClick:()=>o(i.id),children:t("Delete Room")})]}),a&&Te.jsx("button",{type:"button",style:Ic(!1),onClick:()=>l(a.roomId,a.openingId),children:t("Delete Opening")})]})}let Km=0;function $d(t){return Km+=1,t+"_"+Date.now().toString(36)+"_"+Km}const n2=2.7,i2="#e8e2d8",r2="plaster";function p_(t){return{project:{id:null,name:t||"Untitled Project",wall_height:n2,wall_color:i2,wall_material:r2},rooms:[],stairs:[]}}function s2({name:t,gx:e,gy:n,gw:i,gh:r,color:s}){return{id:$d("room"),name:t||"Room",gx:e,gy:n,gw:i,gh:r,color:s||"#cfd6cf",floor:0,has_roof:!0,roof_type:"flat",openings:[],furniture:[]}}function o2(t,e,n){return{id:$d(t),kind:t,wall:e,position:n}}function a2(t,e){switch(e.type){case"SET_PROJECT":return e.project;case"SET_META":return{...t,project:{...t.project,...e.patch}};case"ADD_ROOM":return{...t,rooms:[...t.rooms,e.room]};case"UPDATE_ROOM":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,...e.patch}:n)};case"REMOVE_ROOM":return{...t,rooms:t.rooms.filter(n=>n.id!==e.roomId)};case"ADD_OPENING":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,openings:[...n.openings,o2(e.kind,e.wall,e.position)]}:n)};case"MOVE_OPENING":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,openings:n.openings.map(i=>i.id===e.openingId?{...i,wall:e.wall,position:e.position}:i)}:n)};case"REMOVE_OPENING":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,openings:n.openings.filter(i=>i.id!==e.openingId)}:n)};case"ADD_FURNITURE":{const n={id:$d("furn"),kind:e.kind,x:e.x,y:e.y,rotation:0};return{...t,rooms:t.rooms.map(i=>i.id===e.roomId?{...i,furniture:[...i.furniture,n]}:i)}}case"MOVE_FURNITURE":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,furniture:n.furniture.map(i=>i.id===e.furnitureId?{...i,x:e.x,y:e.y,rotation:e.rotation??i.rotation}:i)}:n)};case"REMOVE_FURNITURE":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,furniture:n.furniture.filter(i=>i.id!==e.furnitureId)}:n)};default:return t}}function l2(t){const[e,n]=qe.useReducer(a2,t||p_()),i=qe.useMemo(()=>({setProject:s=>n({type:"SET_PROJECT",project:s}),setMeta:s=>n({type:"SET_META",patch:s}),addRoom:s=>n({type:"ADD_ROOM",room:s}),updateRoom:(s,o)=>n({type:"UPDATE_ROOM",roomId:s,patch:o}),removeRoom:s=>n({type:"REMOVE_ROOM",roomId:s}),addOpening:(s,o,a,l)=>n({type:"ADD_OPENING",roomId:s,kind:o,wall:a,position:l}),moveOpening:(s,o,a,l)=>n({type:"MOVE_OPENING",roomId:s,openingId:o,wall:a,position:l}),removeOpening:(s,o)=>n({type:"REMOVE_OPENING",roomId:s,openingId:o}),addFurniture:(s,o,a,l)=>n({type:"ADD_FURNITURE",roomId:s,kind:o,x:a,y:l}),moveFurniture:(s,o,a,l,u)=>n({type:"MOVE_FURNITURE",roomId:s,furnitureId:o,x:a,y:l,rotation:u}),removeFurniture:(s,o)=>n({type:"REMOVE_FURNITURE",roomId:s,furnitureId:o})}),[]),r=qe.useCallback(s=>{const o=s2(s);return i.addRoom(o),o},[i]);return{project:e.project,rooms:e.rooms,stairs:e.stairs,actions:{...i,addRectRoom:r}}}function u2(t,e,n){return JR(t,e,n)}function c2({initialProject:t,projectId:e,onBack:n,onSave:i,t:r}){const{project:s,rooms:o,stairs:a,actions:l}=l2(t),[u,c]=qe.useState("select"),[h,d]=qe.useState(null),[p,_]=qe.useState(null),[x,v]=qe.useState(!1),[f,g]=qe.useState(""),m=o.find(S=>S.id===h)||null;async function y(){v(!0),g("");const S=await i(e,{project:s,rooms:o,stairs:a});return v(!1),g(S.ok?r("Saved"):S.error||r("Save failed")),setTimeout(()=>g(""),2500),S}function T(){const S=u2(o,20,16),M=document.createElement("a");M.href=S,M.download=(s.name||"floor-plan")+".png",M.click()}return Te.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh",fontFamily:"sans-serif"},children:[Te.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 14px",borderBottom:"1px solid #e5e7eb"},children:[Te.jsxs("button",{type:"button",onClick:n,style:{background:"none",border:"none",cursor:"pointer",fontSize:13,color:"#374151"},children:["← ",r("Projects")]}),Te.jsx("input",{value:s.name,onChange:S=>l.setMeta({name:S.target.value}),style:{fontWeight:800,fontSize:15,border:"none",textAlign:"center",flex:1}}),Te.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[Te.jsx("span",{style:{fontSize:12,color:"#6b7280"},children:f}),Te.jsx("button",{type:"button",onClick:T,style:{padding:"8px 14px",borderRadius:8,border:"1px solid #d1d5db",background:"#fff",fontWeight:700,fontSize:13,cursor:"pointer"},children:r("Export plan")}),Te.jsx("button",{type:"button",onClick:y,disabled:x,style:{padding:"8px 16px",borderRadius:8,border:"none",background:"#c9a96e",color:"#1b1e22",fontWeight:800,fontSize:13,cursor:"pointer",opacity:x?.6:1},children:r(x?"Saving…":"Save")})]})]}),Te.jsx(t2,{t:r,mode:u,onModeChange:c,selectedRoom:m,onRenameRoom:(S,M)=>l.updateRoom(S,{name:M}),onResizeRoomInputs:(S,M,b)=>l.updateRoom(S,{gw:M,gh:b}),onDeleteRoom:S=>{l.removeRoom(S),d(null)},selectedOpening:p,onDeleteOpening:(S,M)=>{l.removeOpening(S,M),_(null)}}),Te.jsxs("div",{style:{display:"flex",flex:1,minHeight:0},children:[Te.jsx("div",{style:{flex:1,overflow:"auto"},children:Te.jsx(QR,{rooms:o,mode:u,selectedRoomId:h,selectedOpening:p,onAddRoom:S=>l.addRectRoom(S),onMoveRoom:(S,M,b)=>l.updateRoom(S,{gx:M,gy:b}),onResizeRoom:(S,M,b)=>l.updateRoom(S,{gw:M,gh:b}),onSelectRoom:d,onAddOpening:l.addOpening,onSelectOpening:_})}),Te.jsx("div",{style:{flex:1},children:Te.jsx(ZR,{rooms:o,stairs:a,wallHeight:s.wall_height,wallColor:s.wall_color,wallMaterial:s.wall_material,t:r})})]})]})}const f2={"Lamsa Engineers":"لمسة للمهندسين","Please sign in to continue.":"الرجاء تسجيل الدخول للمتابعة.","Sign in":"تسجيل الدخول","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"صمّم مخططات أرضية كاملة، عاينها ثلاثي الأبعاد، وصدّر مستندات هندسية حقيقية.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"انتهى اشتراكك بقسم المهندسين. جدّد الاشتراك لمتابعة تصميم المخططات الكاملة.","Rectangular rooms, doors & windows, single-floor plans":"غرف مستطيلة، أبواب ونوافذ، مخططات بطابق واحد","Live 3D preview of your design":"معاينة ثلاثية الأبعاد حية لتصميمك","Printable floor plan export":"تصدير مخطط قابل للطباعة","Use Lamsa's existing furniture-styling tools per room":"استخدم أدوات تنسيق الأثاث الموجودة بلمسة لكل غرفة","/ year":"/ سنوياً","14-day free trial, cancel anytime":"تجربة مجانية لمدة 14 يوم، إلغاء بأي وقت","Starting…":"جارٍ البدء…","Start free trial":"ابدأ التجربة المجانية","Something went wrong, please try again":"حدث خطأ ما، حاول مرة أخرى","Your Projects":"مشاريعك","New Project":"مشروع جديد","No projects yet — create your first one.":"لا يوجد مشاريع بعد — أنشئ أول مشروع.",Delete:"حذف",Projects:"المشاريع",Saved:"تم الحفظ","Save failed":"فشل الحفظ","Export plan":"تصدير المخطط","Saving…":"جارٍ الحفظ…",Save:"حفظ",Select:"تحديد","Add Room":"إضافة غرفة","Add Door":"إضافة باب","Add Window":"إضافة نافذة","Delete Room":"حذف الغرفة","Delete Opening":"حذف الفتحة",W:"عرض",H:"ارتفاع","Reset camera":"إعادة ضبط الكاميرا","Untitled Project":"مشروع بدون اسم"},Jm={de:{"Lamsa Engineers":"Lamsa Ingenieure","Please sign in to continue.":"Bitte melde dich an, um fortzufahren.","Sign in":"Anmelden","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Entwirf komplette Grundrisse, sieh sie in 3D in der Vorschau und exportiere echte Architekturunterlagen.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Dein Zugang zu Engineers ist abgelaufen. Abonniere erneut, um weiter vollständige Grundrisse zu gestalten.","Rectangular rooms, doors & windows, single-floor plans":"Rechteckige Räume, Türen & Fenster, einstöckige Grundrisse","Live 3D preview of your design":"Live-3D-Vorschau deines Entwurfs","Printable floor plan export":"Druckbarer Grundriss-Export","Use Lamsa's existing furniture-styling tools per room":"Nutze Lamsas vorhandene Möbel-Styling-Tools für jeden Raum","/ year":"/ Jahr","14-day free trial, cancel anytime":"14 Tage kostenlos testen, jederzeit kündbar","Starting…":"Wird gestartet…","Start free trial":"Kostenlose Testphase starten","Something went wrong, please try again":"Etwas ist schiefgelaufen, bitte versuche es erneut","Your Projects":"Deine Projekte","New Project":"Neues Projekt","No projects yet — create your first one.":"Noch keine Projekte — erstelle dein erstes.",Delete:"Löschen",Projects:"Projekte",Saved:"Gespeichert","Save failed":"Speichern fehlgeschlagen","Export plan":"Plan exportieren","Saving…":"Wird gespeichert…",Save:"Speichern",Select:"Auswählen","Add Room":"Raum hinzufügen","Add Door":"Tür hinzufügen","Add Window":"Fenster hinzufügen","Delete Room":"Raum löschen","Delete Opening":"Öffnung löschen",W:"B",H:"H","Reset camera":"Kamera zurücksetzen","Untitled Project":"Unbenanntes Projekt"},es:{"Lamsa Engineers":"Lamsa Ingenieros","Please sign in to continue.":"Inicia sesión para continuar.","Sign in":"Iniciar sesión","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Diseña planos completos, previsualízalos en 3D y exporta documentos arquitectónicos reales.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Tu acceso a Engineers ha terminado. Suscríbete de nuevo para seguir diseñando planos completos.","Rectangular rooms, doors & windows, single-floor plans":"Habitaciones rectangulares, puertas y ventanas, planos de una sola planta","Live 3D preview of your design":"Vista previa 3D en vivo de tu diseño","Printable floor plan export":"Exportación de plano imprimible","Use Lamsa's existing furniture-styling tools per room":"Usa las herramientas de estilismo de muebles de Lamsa en cada habitación","/ year":"/ año","14-day free trial, cancel anytime":"14 días de prueba gratis, cancela cuando quieras","Starting…":"Iniciando…","Start free trial":"Iniciar prueba gratuita","Something went wrong, please try again":"Algo salió mal, inténtalo de nuevo","Your Projects":"Tus Proyectos","New Project":"Nuevo Proyecto","No projects yet — create your first one.":"Aún no hay proyectos — crea el primero.",Delete:"Eliminar",Projects:"Proyectos",Saved:"Guardado","Save failed":"Error al guardar","Export plan":"Exportar plano","Saving…":"Guardando…",Save:"Guardar",Select:"Seleccionar","Add Room":"Añadir Habitación","Add Door":"Añadir Puerta","Add Window":"Añadir Ventana","Delete Room":"Eliminar Habitación","Delete Opening":"Eliminar Apertura",W:"An",H:"Al","Reset camera":"Restablecer cámara","Untitled Project":"Proyecto sin título"},tr:{"Lamsa Engineers":"Lamsa Muhendisler","Please sign in to continue.":"Devam etmek icin giris yapin.","Sign in":"Giris Yap","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Tam kat planlari tasarlayin, 3D onizleme yapin ve gercek mimari belgeler disa aktarin.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Engineers erisiminiz sona erdi. Tam kat planlari tasarlamaya devam etmek icin tekrar abone olun.","Rectangular rooms, doors & windows, single-floor plans":"Dikdortgen odalar, kapilar ve pencereler, tek katli planlar","Live 3D preview of your design":"Tasariminizin canli 3D onizlemesi","Printable floor plan export":"Yazdirilabilir kat plani disa aktarma","Use Lamsa's existing furniture-styling tools per room":"Lamsa'nin mevcut mobilya stilizasyon araclarini her oda icin kullanin","/ year":"/ yil","14-day free trial, cancel anytime":"14 gunluk ucretsiz deneme, istediginiz zaman iptal edin","Starting…":"Basliyor…","Start free trial":"Ucretsiz denemeyi baslat","Something went wrong, please try again":"Bir sorun olustu, lutfen tekrar deneyin","Your Projects":"Projeleriniz","New Project":"Yeni Proje","No projects yet — create your first one.":"Henuz proje yok — ilkini olusturun.",Delete:"Sil",Projects:"Projeler",Saved:"Kaydedildi","Save failed":"Kaydetme basarisiz","Export plan":"Plani disa aktar","Saving…":"Kaydediliyor…",Save:"Kaydet",Select:"Sec","Add Room":"Oda Ekle","Add Door":"Kapi Ekle","Add Window":"Pencere Ekle","Delete Room":"Odayi Sil","Delete Opening":"Acikligi Sil",W:"G",H:"Y","Reset camera":"Kamerayi sifirla","Untitled Project":"Isimsiz Proje"},fr:{"Lamsa Engineers":"Lamsa Ingénieurs","Please sign in to continue.":"Veuillez vous connecter pour continuer.","Sign in":"Connexion","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Concevez des plans complets, prévisualisez-les en 3D et exportez de vrais documents architecturaux.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Votre accès à Engineers a expiré. Réabonnez-vous pour continuer à concevoir des plans complets.","Rectangular rooms, doors & windows, single-floor plans":"Pièces rectangulaires, portes et fenêtres, plans à un seul niveau","Live 3D preview of your design":"Aperçu 3D en direct de votre conception","Printable floor plan export":"Export de plan imprimable","Use Lamsa's existing furniture-styling tools per room":"Utilisez les outils de style de meubles existants de Lamsa pour chaque pièce","/ year":"/ an","14-day free trial, cancel anytime":"Essai gratuit de 14 jours, annulez à tout moment","Starting…":"Démarrage…","Start free trial":"Démarrer l'essai gratuit","Something went wrong, please try again":"Un problème est survenu, veuillez réessayer","Your Projects":"Vos Projets","New Project":"Nouveau Projet","No projects yet — create your first one.":"Aucun projet pour l'instant — créez le premier.",Delete:"Supprimer",Projects:"Projets",Saved:"Enregistré","Save failed":"Échec de l'enregistrement","Export plan":"Exporter le plan","Saving…":"Enregistrement…",Save:"Enregistrer",Select:"Sélectionner","Add Room":"Ajouter une pièce","Add Door":"Ajouter une porte","Add Window":"Ajouter une fenêtre","Delete Room":"Supprimer la pièce","Delete Opening":"Supprimer l'ouverture",W:"L",H:"H","Reset camera":"Réinitialiser la caméra","Untitled Project":"Projet sans titre"},it:{"Lamsa Engineers":"Lamsa Ingegneri","Please sign in to continue.":"Accedi per continuare.","Sign in":"Accedi","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Progetta planimetrie complete, visualizzale in anteprima 3D ed esporta veri documenti architettonici.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Il tuo accesso a Engineers è scaduto. Abbonati di nuovo per continuare a progettare planimetrie complete.","Rectangular rooms, doors & windows, single-floor plans":"Stanze rettangolari, porte e finestre, planimetrie a un piano","Live 3D preview of your design":"Anteprima 3D dal vivo del tuo progetto","Printable floor plan export":"Esportazione planimetria stampabile","Use Lamsa's existing furniture-styling tools per room":"Usa gli strumenti di stile mobili di Lamsa per ogni stanza","/ year":"/ anno","14-day free trial, cancel anytime":"Prova gratuita di 14 giorni, annulla quando vuoi","Starting…":"Avvio…","Start free trial":"Avvia la prova gratuita","Something went wrong, please try again":"Qualcosa è andato storto, riprova","Your Projects":"I Tuoi Progetti","New Project":"Nuovo Progetto","No projects yet — create your first one.":"Nessun progetto ancora — crea il primo.",Delete:"Elimina",Projects:"Progetti",Saved:"Salvato","Save failed":"Salvataggio non riuscito","Export plan":"Esporta planimetria","Saving…":"Salvataggio…",Save:"Salva",Select:"Seleziona","Add Room":"Aggiungi Stanza","Add Door":"Aggiungi Porta","Add Window":"Aggiungi Finestra","Delete Room":"Elimina Stanza","Delete Opening":"Elimina Apertura",W:"L",H:"A","Reset camera":"Reimposta fotocamera","Untitled Project":"Progetto senza titolo"},ru:{"Lamsa Engineers":"Lamsa Inzhenery","Please sign in to continue.":"Voydite, chtoby prodolzhit.","Sign in":"Vkhod","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Proektiruyte polnotsennye plany pomeshcheniy, prosmatrivayte ikh v 3D i eksportiruyte nastoyashchie arkhitekturnye dokumenty.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Vash dostup k Engineers zavershilsya. Oformite podpisku snova, chtoby prodolzhit proektirovat polnye plany.","Rectangular rooms, doors & windows, single-floor plans":"Pryamougolnye komnaty, dveri i okna, odnoetazhnye plany","Live 3D preview of your design":"Zhivoy 3D-predprosmotr vashego proekta","Printable floor plan export":"Eksport plana dlya pechati","Use Lamsa's existing furniture-styling tools per room":"Ispolzuyte sushchestvuyushchie instrumenty stilizatsii mebeli Lamsa dlya kazhdoy komnaty","/ year":"/ god","14-day free trial, cancel anytime":"14-dnevnyy besplatnyy probnyy period, otmena v lyuboy moment","Starting…":"Zapusk…","Start free trial":"Nachat besplatnyy probnyy period","Something went wrong, please try again":"Chto-to poshlo ne tak, poprobuyte snova","Your Projects":"Vashi Proekty","New Project":"Novyy Proekt","No projects yet — create your first one.":"Poka net proektov — sozdayte pervyy.",Delete:"Udalit",Projects:"Proekty",Saved:"Sokhraneno","Save failed":"Oshibka sokhraneniya","Export plan":"Eksportirovat plan","Saving…":"Sokhranenie…",Save:"Sokhranit",Select:"Vybrat","Add Room":"Dobavit Komnatu","Add Door":"Dobavit Dver","Add Window":"Dobavit Okno","Delete Room":"Udalit Komnatu","Delete Opening":"Udalit Proyom",W:"Sh",H:"V","Reset camera":"Sbrosit kameru","Untitled Project":"Proekt bez nazvaniya"}};function d2(){try{return localStorage.getItem("lamsa_lang")||"en"}catch{return"en"}}function h2(){const[t,e]=qe.useState(d2);qe.useEffect(()=>{document.documentElement.setAttribute("dir",t==="ar"?"rtl":"ltr"),document.documentElement.setAttribute("lang",t)},[t]),qe.useEffect(()=>{function i(r){r.key==="lamsa_lang"&&e(r.newValue||"en")}return window.addEventListener("storage",i),()=>window.removeEventListener("storage",i)},[]);const n=qe.useCallback(i=>t==="ar"?f2[i]||i:t==="en"?i:Jm[t]&&Jm[t][i]||i,[t]);return{lang:t,t:n}}function p2(t){return!!t&&(t.status==="active"||t.status==="trialing")}function m2(){const{t}=h2(),[e,n]=qe.useState("loading"),[i,r]=qe.useState(null),[s,o]=qe.useState([]),[a,l]=qe.useState(null);qe.useEffect(()=>{qy().then(_=>{if(_.status===401){n("signin");return}if(!_.ok||!_.data){n("signin");return}const x=_.data.engineerSubscription;if(r(x?x.status:null),!p2(x)){n("paywall");return}u()})},[]);function u(){$y().then(_=>{_.ok&&_.data&&o(_.data.projects||[]),n("list")})}function c(){l({projectId:null,project:p_(t("Untitled Project"))}),n("editor")}function h(_){Ky(_).then(x=>{if(x.status===403){n("paywall");return}!x.ok||!x.data||(l({projectId:_,project:x.data.project}),n("editor"))})}function d(_){Zy(_).then(()=>u())}async function p(_,x){const v=await Jy(_,x);return v.status===403?(n("paywall"),{ok:!1,error:"Engineers access required"}):(v.ok&&v.data&&l(f=>({...f,projectId:v.data.projectId})),v.ok?{ok:!0}:{ok:!1,error:v.data&&v.data.error||"Save failed"})}return e==="loading"?null:e==="signin"?Te.jsxs("div",{style:{maxWidth:420,margin:"100px auto",textAlign:"center",fontFamily:"sans-serif"},children:[Te.jsx("h1",{style:{fontSize:20,fontWeight:800,marginBottom:12},children:t("Lamsa Engineers")}),Te.jsx("p",{style:{color:"#6b7280",marginBottom:20},children:t("Please sign in to continue.")}),Te.jsx("a",{href:"/lamsa-auth.html?return=engineers/index.html",style:{display:"inline-block",background:"#c9a96e",color:"#1b1e22",padding:"12px 24px",borderRadius:10,fontWeight:800,textDecoration:"none"},children:t("Sign in")})]}):e==="paywall"?Te.jsx(eS,{status:i,t}):e==="editor"&&a?Te.jsx(c2,{initialProject:a.project,projectId:a.projectId,onBack:()=>u(),onSave:p,t}):Te.jsx(tS,{projects:s,onOpen:h,onCreate:c,onDelete:d,t})}cv(document.getElementById("root")).render(Te.jsx(O_.StrictMode,{children:Te.jsx(m2,{})}));
