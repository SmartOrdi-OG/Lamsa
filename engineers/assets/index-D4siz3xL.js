(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function ex(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Pg={exports:{}},hu={},Lg={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ga=Symbol.for("react.element"),tx=Symbol.for("react.portal"),nx=Symbol.for("react.fragment"),ix=Symbol.for("react.strict_mode"),rx=Symbol.for("react.profiler"),sx=Symbol.for("react.provider"),ox=Symbol.for("react.context"),ax=Symbol.for("react.forward_ref"),lx=Symbol.for("react.suspense"),ux=Symbol.for("react.memo"),cx=Symbol.for("react.lazy"),Ah=Symbol.iterator;function fx(t){return t===null||typeof t!="object"?null:(t=Ah&&t[Ah]||t["@@iterator"],typeof t=="function"?t:null)}var Dg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ig=Object.assign,Ng={};function ro(t,e,n){this.props=t,this.context=e,this.refs=Ng,this.updater=n||Dg}ro.prototype.isReactComponent={};ro.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ro.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ug(){}Ug.prototype=ro.prototype;function hd(t,e,n){this.props=t,this.context=e,this.refs=Ng,this.updater=n||Dg}var pd=hd.prototype=new Ug;pd.constructor=hd;Ig(pd,ro.prototype);pd.isPureReactComponent=!0;var Rh=Array.isArray,Fg=Object.prototype.hasOwnProperty,md={current:null},Og={key:!0,ref:!0,__self:!0,__source:!0};function zg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Fg.call(e,i)&&!Og.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ga,type:t,key:s,ref:o,props:r,_owner:md.current}}function dx(t,e){return{$$typeof:ga,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function gd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ga}function hx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ch=/\/+/g;function Vu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?hx(""+t.key):e.toString(36)}function xl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ga:case tx:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Vu(o,0):i,Rh(r)?(n="",t!=null&&(n=t.replace(Ch,"$&/")+"/"),xl(r,e,n,"",function(u){return u})):r!=null&&(gd(r)&&(r=dx(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Ch,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Rh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Vu(s,a);o+=xl(s,e,n,l,r)}else if(l=fx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Vu(s,a++),o+=xl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ta(t,e,n){if(t==null)return t;var i=[],r=0;return xl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function px(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ln={current:null},yl={transition:null},mx={ReactCurrentDispatcher:ln,ReactCurrentBatchConfig:yl,ReactCurrentOwner:md};function kg(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:Ta,forEach:function(t,e,n){Ta(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ta(t,function(){e++}),e},toArray:function(t){return Ta(t,function(e){return e})||[]},only:function(t){if(!gd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=ro;qe.Fragment=nx;qe.Profiler=rx;qe.PureComponent=hd;qe.StrictMode=ix;qe.Suspense=lx;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mx;qe.act=kg;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Ig({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=md.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Fg.call(e,l)&&!Og.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ga,type:t.type,key:r,ref:s,props:i,_owner:o}};qe.createContext=function(t){return t={$$typeof:ox,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:sx,_context:t},t.Consumer=t};qe.createElement=zg;qe.createFactory=function(t){var e=zg.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:ax,render:t}};qe.isValidElement=gd;qe.lazy=function(t){return{$$typeof:cx,_payload:{_status:-1,_result:t},_init:px}};qe.memo=function(t,e){return{$$typeof:ux,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=yl.transition;yl.transition={};try{t()}finally{yl.transition=e}};qe.unstable_act=kg;qe.useCallback=function(t,e){return ln.current.useCallback(t,e)};qe.useContext=function(t){return ln.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return ln.current.useDeferredValue(t)};qe.useEffect=function(t,e){return ln.current.useEffect(t,e)};qe.useId=function(){return ln.current.useId()};qe.useImperativeHandle=function(t,e,n){return ln.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return ln.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return ln.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return ln.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return ln.current.useReducer(t,e,n)};qe.useRef=function(t){return ln.current.useRef(t)};qe.useState=function(t){return ln.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return ln.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return ln.current.useTransition()};qe.version="18.3.1";Lg.exports=qe;var Ie=Lg.exports;const gx=ex(Ie);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vx=Ie,_x=Symbol.for("react.element"),xx=Symbol.for("react.fragment"),yx=Object.prototype.hasOwnProperty,Sx=vx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ex={key:!0,ref:!0,__self:!0,__source:!0};function Bg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)yx.call(e,i)&&!Ex.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:_x,type:t,key:s,ref:o,props:r,_owner:Sx.current}}hu.Fragment=xx;hu.jsx=Bg;hu.jsxs=Bg;Pg.exports=hu;var Ee=Pg.exports,Hg={exports:{}},Rn={},Gg={exports:{}},Vg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,O){var V=I.length;I.push(O);e:for(;0<V;){var ne=V-1>>>1,oe=I[ne];if(0<r(oe,O))I[ne]=O,I[V]=oe,V=ne;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var O=I[0],V=I.pop();if(V!==O){I[0]=V;e:for(var ne=0,oe=I.length,Y=oe>>>1;ne<Y;){var se=2*(ne+1)-1,X=I[se],he=se+1,ae=I[he];if(0>r(X,V))he<oe&&0>r(ae,X)?(I[ne]=ae,I[he]=V,ne=he):(I[ne]=X,I[se]=V,ne=se);else if(he<oe&&0>r(ae,V))I[ne]=ae,I[he]=V,ne=he;else break e}}return O}function r(I,O){var V=I.sortIndex-O.sortIndex;return V!==0?V:I.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,m=!1,g=!1,x=!1,v=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(I){for(var O=n(u);O!==null;){if(O.callback===null)i(u);else if(O.startTime<=I)i(u),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(u)}}function y(I){if(x=!1,p(I),!g)if(n(l)!==null)g=!0,G(R);else{var O=n(u);O!==null&&ee(y,O.startTime-I)}}function R(I,O){g=!1,x&&(x=!1,f(P),P=-1),m=!0;var V=d;try{for(p(O),h=n(l);h!==null&&(!(h.expirationTime>O)||I&&!N());){var ne=h.callback;if(typeof ne=="function"){h.callback=null,d=h.priorityLevel;var oe=ne(h.expirationTime<=O);O=t.unstable_now(),typeof oe=="function"?h.callback=oe:h===n(l)&&i(l),p(O)}else i(l);h=n(l)}if(h!==null)var Y=!0;else{var se=n(u);se!==null&&ee(y,se.startTime-O),Y=!1}return Y}finally{h=null,d=V,m=!1}}var S=!1,T=null,P=-1,E=5,w=-1;function N(){return!(t.unstable_now()-w<E)}function B(){if(T!==null){var I=t.unstable_now();w=I;var O=!0;try{O=T(!0,I)}finally{O?te():(S=!1,T=null)}}else S=!1}var te;if(typeof _=="function")te=function(){_(B)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,H=L.port2;L.port1.onmessage=B,te=function(){H.postMessage(null)}}else te=function(){v(B,0)};function G(I){T=I,S||(S=!0,te())}function ee(I,O){P=v(function(){I(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){g||m||(g=!0,G(R))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(d){case 1:case 2:case 3:var O=3;break;default:O=d}var V=d;d=O;try{return I()}finally{d=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,O){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var V=d;d=I;try{return O()}finally{d=V}},t.unstable_scheduleCallback=function(I,O,V){var ne=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?ne+V:ne):V=ne,I){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=V+oe,I={id:c++,callback:O,priorityLevel:I,startTime:V,expirationTime:oe,sortIndex:-1},V>ne?(I.sortIndex=V,e(u,I),n(l)===null&&I===n(u)&&(x?(f(P),P=-1):x=!0,ee(y,V-ne))):(I.sortIndex=oe,e(l,I),g||m||(g=!0,G(R))),I},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(I){var O=d;return function(){var V=d;d=O;try{return I.apply(this,arguments)}finally{d=V}}}})(Vg);Gg.exports=Vg;var Mx=Gg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wx=Ie,An=Mx;function pe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wg=new Set,Yo={};function $r(t,e){Xs(t,e),Xs(t+"Capture",e)}function Xs(t,e){for(Yo[t]=e,t=0;t<e.length;t++)Wg.add(e[t])}var Ri=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nf=Object.prototype.hasOwnProperty,Tx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bh={},Ph={};function Ax(t){return nf.call(Ph,t)?!0:nf.call(bh,t)?!1:Tx.test(t)?Ph[t]=!0:(bh[t]=!0,!1)}function Rx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Cx(t,e,n,i){if(e===null||typeof e>"u"||Rx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function un(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Wt[t]=new un(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Wt[e]=new un(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Wt[t]=new un(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Wt[t]=new un(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Wt[t]=new un(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Wt[t]=new un(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Wt[t]=new un(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Wt[t]=new un(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Wt[t]=new un(t,5,!1,t.toLowerCase(),null,!1,!1)});var vd=/[\-:]([a-z])/g;function _d(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(vd,_d);Wt[e]=new un(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(vd,_d);Wt[e]=new un(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(vd,_d);Wt[e]=new un(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Wt[t]=new un(t,1,!1,t.toLowerCase(),null,!1,!1)});Wt.xlinkHref=new un("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Wt[t]=new un(t,1,!1,t.toLowerCase(),null,!0,!0)});function xd(t,e,n,i){var r=Wt.hasOwnProperty(e)?Wt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Cx(e,n,r,i)&&(n=null),i||r===null?Ax(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Di=wx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Aa=Symbol.for("react.element"),ys=Symbol.for("react.portal"),Ss=Symbol.for("react.fragment"),yd=Symbol.for("react.strict_mode"),rf=Symbol.for("react.profiler"),Xg=Symbol.for("react.provider"),jg=Symbol.for("react.context"),Sd=Symbol.for("react.forward_ref"),sf=Symbol.for("react.suspense"),of=Symbol.for("react.suspense_list"),Ed=Symbol.for("react.memo"),ki=Symbol.for("react.lazy"),Yg=Symbol.for("react.offscreen"),Lh=Symbol.iterator;function po(t){return t===null||typeof t!="object"?null:(t=Lh&&t[Lh]||t["@@iterator"],typeof t=="function"?t:null)}var gt=Object.assign,Wu;function bo(t){if(Wu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Wu=e&&e[1]||""}return`
`+Wu+t}var Xu=!1;function ju(t,e){if(!t||Xu)return"";Xu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Xu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?bo(t):""}function bx(t){switch(t.tag){case 5:return bo(t.type);case 16:return bo("Lazy");case 13:return bo("Suspense");case 19:return bo("SuspenseList");case 0:case 2:case 15:return t=ju(t.type,!1),t;case 11:return t=ju(t.type.render,!1),t;case 1:return t=ju(t.type,!0),t;default:return""}}function af(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ss:return"Fragment";case ys:return"Portal";case rf:return"Profiler";case yd:return"StrictMode";case sf:return"Suspense";case of:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case jg:return(t.displayName||"Context")+".Consumer";case Xg:return(t._context.displayName||"Context")+".Provider";case Sd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ed:return e=t.displayName||null,e!==null?e:af(t.type)||"Memo";case ki:e=t._payload,t=t._init;try{return af(t(e))}catch{}}return null}function Px(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return af(e);case 8:return e===yd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $g(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Lx(t){var e=$g(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ra(t){t._valueTracker||(t._valueTracker=Lx(t))}function qg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=$g(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Il(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function lf(t,e){var n=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Dh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Kg(t,e){e=e.checked,e!=null&&xd(t,"checked",e,!1)}function uf(t,e){Kg(t,e);var n=ar(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?cf(t,e.type,n):e.hasOwnProperty("defaultValue")&&cf(t,e.type,ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ih(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function cf(t,e,n){(e!=="number"||Il(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Po=Array.isArray;function Fs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ar(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ff(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(pe(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Nh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(pe(92));if(Po(n)){if(1<n.length)throw Error(pe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ar(n)}}function Zg(t,e){var n=ar(e.value),i=ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Uh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Jg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function df(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Jg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ca,Qg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ca=Ca||document.createElement("div"),Ca.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ca.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $o(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var No={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dx=["Webkit","ms","Moz","O"];Object.keys(No).forEach(function(t){Dx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),No[e]=No[t]})});function e0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||No.hasOwnProperty(t)&&No[t]?(""+e).trim():e+"px"}function t0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=e0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Ix=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hf(t,e){if(e){if(Ix[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(pe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(pe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(pe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(pe(62))}}function pf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mf=null;function Md(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gf=null,Os=null,zs=null;function Fh(t){if(t=xa(t)){if(typeof gf!="function")throw Error(pe(280));var e=t.stateNode;e&&(e=_u(e),gf(t.stateNode,t.type,e))}}function n0(t){Os?zs?zs.push(t):zs=[t]:Os=t}function i0(){if(Os){var t=Os,e=zs;if(zs=Os=null,Fh(t),e)for(t=0;t<e.length;t++)Fh(e[t])}}function r0(t,e){return t(e)}function s0(){}var Yu=!1;function o0(t,e,n){if(Yu)return t(e,n);Yu=!0;try{return r0(t,e,n)}finally{Yu=!1,(Os!==null||zs!==null)&&(s0(),i0())}}function qo(t,e){var n=t.stateNode;if(n===null)return null;var i=_u(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(pe(231,e,typeof n));return n}var vf=!1;if(Ri)try{var mo={};Object.defineProperty(mo,"passive",{get:function(){vf=!0}}),window.addEventListener("test",mo,mo),window.removeEventListener("test",mo,mo)}catch{vf=!1}function Nx(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Uo=!1,Nl=null,Ul=!1,_f=null,Ux={onError:function(t){Uo=!0,Nl=t}};function Fx(t,e,n,i,r,s,o,a,l){Uo=!1,Nl=null,Nx.apply(Ux,arguments)}function Ox(t,e,n,i,r,s,o,a,l){if(Fx.apply(this,arguments),Uo){if(Uo){var u=Nl;Uo=!1,Nl=null}else throw Error(pe(198));Ul||(Ul=!0,_f=u)}}function qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function a0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Oh(t){if(qr(t)!==t)throw Error(pe(188))}function zx(t){var e=t.alternate;if(!e){if(e=qr(t),e===null)throw Error(pe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Oh(r),t;if(s===i)return Oh(r),e;s=s.sibling}throw Error(pe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(pe(189))}}if(n.alternate!==i)throw Error(pe(190))}if(n.tag!==3)throw Error(pe(188));return n.stateNode.current===n?t:e}function l0(t){return t=zx(t),t!==null?u0(t):null}function u0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=u0(t);if(e!==null)return e;t=t.sibling}return null}var c0=An.unstable_scheduleCallback,zh=An.unstable_cancelCallback,kx=An.unstable_shouldYield,Bx=An.unstable_requestPaint,Et=An.unstable_now,Hx=An.unstable_getCurrentPriorityLevel,wd=An.unstable_ImmediatePriority,f0=An.unstable_UserBlockingPriority,Fl=An.unstable_NormalPriority,Gx=An.unstable_LowPriority,d0=An.unstable_IdlePriority,pu=null,li=null;function Vx(t){if(li&&typeof li.onCommitFiberRoot=="function")try{li.onCommitFiberRoot(pu,t,void 0,(t.current.flags&128)===128)}catch{}}var ei=Math.clz32?Math.clz32:jx,Wx=Math.log,Xx=Math.LN2;function jx(t){return t>>>=0,t===0?32:31-(Wx(t)/Xx|0)|0}var ba=64,Pa=4194304;function Lo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ol(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Lo(a):(s&=o,s!==0&&(i=Lo(s)))}else o=n&~r,o!==0?i=Lo(o):s!==0&&(i=Lo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ei(e),r=1<<n,i|=t[n],e&=~r;return i}function Yx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $x(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ei(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Yx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function xf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function h0(){var t=ba;return ba<<=1,!(ba&4194240)&&(ba=64),t}function $u(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function va(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ei(e),t[e]=n}function qx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ei(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Td(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ei(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Qe=0;function p0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var m0,Ad,g0,v0,_0,yf=!1,La=[],$i=null,qi=null,Ki=null,Ko=new Map,Zo=new Map,Hi=[],Kx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kh(t,e){switch(t){case"focusin":case"focusout":$i=null;break;case"dragenter":case"dragleave":qi=null;break;case"mouseover":case"mouseout":Ki=null;break;case"pointerover":case"pointerout":Ko.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zo.delete(e.pointerId)}}function go(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=xa(e),e!==null&&Ad(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Zx(t,e,n,i,r){switch(e){case"focusin":return $i=go($i,t,e,n,i,r),!0;case"dragenter":return qi=go(qi,t,e,n,i,r),!0;case"mouseover":return Ki=go(Ki,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ko.set(s,go(Ko.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Zo.set(s,go(Zo.get(s)||null,t,e,n,i,r)),!0}return!1}function x0(t){var e=Cr(t.target);if(e!==null){var n=qr(e);if(n!==null){if(e=n.tag,e===13){if(e=a0(n),e!==null){t.blockedOn=e,_0(t.priority,function(){g0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Sf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);mf=i,n.target.dispatchEvent(i),mf=null}else return e=xa(n),e!==null&&Ad(e),t.blockedOn=n,!1;e.shift()}return!0}function Bh(t,e,n){Sl(t)&&n.delete(e)}function Jx(){yf=!1,$i!==null&&Sl($i)&&($i=null),qi!==null&&Sl(qi)&&(qi=null),Ki!==null&&Sl(Ki)&&(Ki=null),Ko.forEach(Bh),Zo.forEach(Bh)}function vo(t,e){t.blockedOn===e&&(t.blockedOn=null,yf||(yf=!0,An.unstable_scheduleCallback(An.unstable_NormalPriority,Jx)))}function Jo(t){function e(r){return vo(r,t)}if(0<La.length){vo(La[0],t);for(var n=1;n<La.length;n++){var i=La[n];i.blockedOn===t&&(i.blockedOn=null)}}for($i!==null&&vo($i,t),qi!==null&&vo(qi,t),Ki!==null&&vo(Ki,t),Ko.forEach(e),Zo.forEach(e),n=0;n<Hi.length;n++)i=Hi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Hi.length&&(n=Hi[0],n.blockedOn===null);)x0(n),n.blockedOn===null&&Hi.shift()}var ks=Di.ReactCurrentBatchConfig,zl=!0;function Qx(t,e,n,i){var r=Qe,s=ks.transition;ks.transition=null;try{Qe=1,Rd(t,e,n,i)}finally{Qe=r,ks.transition=s}}function ey(t,e,n,i){var r=Qe,s=ks.transition;ks.transition=null;try{Qe=4,Rd(t,e,n,i)}finally{Qe=r,ks.transition=s}}function Rd(t,e,n,i){if(zl){var r=Sf(t,e,n,i);if(r===null)rc(t,e,i,kl,n),kh(t,i);else if(Zx(r,t,e,n,i))i.stopPropagation();else if(kh(t,i),e&4&&-1<Kx.indexOf(t)){for(;r!==null;){var s=xa(r);if(s!==null&&m0(s),s=Sf(t,e,n,i),s===null&&rc(t,e,i,kl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else rc(t,e,i,null,n)}}var kl=null;function Sf(t,e,n,i){if(kl=null,t=Md(i),t=Cr(t),t!==null)if(e=qr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=a0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return kl=t,null}function y0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hx()){case wd:return 1;case f0:return 4;case Fl:case Gx:return 16;case d0:return 536870912;default:return 16}default:return 16}}var Vi=null,Cd=null,El=null;function S0(){if(El)return El;var t,e=Cd,n=e.length,i,r="value"in Vi?Vi.value:Vi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return El=r.slice(t,1<i?1-i:void 0)}function Ml(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Da(){return!0}function Hh(){return!1}function Cn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Da:Hh,this.isPropagationStopped=Hh,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Da)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Da)},persist:function(){},isPersistent:Da}),e}var so={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bd=Cn(so),_a=gt({},so,{view:0,detail:0}),ty=Cn(_a),qu,Ku,_o,mu=gt({},_a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_o&&(_o&&t.type==="mousemove"?(qu=t.screenX-_o.screenX,Ku=t.screenY-_o.screenY):Ku=qu=0,_o=t),qu)},movementY:function(t){return"movementY"in t?t.movementY:Ku}}),Gh=Cn(mu),ny=gt({},mu,{dataTransfer:0}),iy=Cn(ny),ry=gt({},_a,{relatedTarget:0}),Zu=Cn(ry),sy=gt({},so,{animationName:0,elapsedTime:0,pseudoElement:0}),oy=Cn(sy),ay=gt({},so,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ly=Cn(ay),uy=gt({},so,{data:0}),Vh=Cn(uy),cy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=dy[t])?!!e[t]:!1}function Pd(){return hy}var py=gt({},_a,{key:function(t){if(t.key){var e=cy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pd,charCode:function(t){return t.type==="keypress"?Ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),my=Cn(py),gy=gt({},mu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wh=Cn(gy),vy=gt({},_a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pd}),_y=Cn(vy),xy=gt({},so,{propertyName:0,elapsedTime:0,pseudoElement:0}),yy=Cn(xy),Sy=gt({},mu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ey=Cn(Sy),My=[9,13,27,32],Ld=Ri&&"CompositionEvent"in window,Fo=null;Ri&&"documentMode"in document&&(Fo=document.documentMode);var wy=Ri&&"TextEvent"in window&&!Fo,E0=Ri&&(!Ld||Fo&&8<Fo&&11>=Fo),Xh=" ",jh=!1;function M0(t,e){switch(t){case"keyup":return My.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function w0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Es=!1;function Ty(t,e){switch(t){case"compositionend":return w0(e);case"keypress":return e.which!==32?null:(jh=!0,Xh);case"textInput":return t=e.data,t===Xh&&jh?null:t;default:return null}}function Ay(t,e){if(Es)return t==="compositionend"||!Ld&&M0(t,e)?(t=S0(),El=Cd=Vi=null,Es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return E0&&e.locale!=="ko"?null:e.data;default:return null}}var Ry={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ry[t.type]:e==="textarea"}function T0(t,e,n,i){n0(i),e=Bl(e,"onChange"),0<e.length&&(n=new bd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Oo=null,Qo=null;function Cy(t){F0(t,0)}function gu(t){var e=Ts(t);if(qg(e))return t}function by(t,e){if(t==="change")return e}var A0=!1;if(Ri){var Ju;if(Ri){var Qu="oninput"in document;if(!Qu){var $h=document.createElement("div");$h.setAttribute("oninput","return;"),Qu=typeof $h.oninput=="function"}Ju=Qu}else Ju=!1;A0=Ju&&(!document.documentMode||9<document.documentMode)}function qh(){Oo&&(Oo.detachEvent("onpropertychange",R0),Qo=Oo=null)}function R0(t){if(t.propertyName==="value"&&gu(Qo)){var e=[];T0(e,Qo,t,Md(t)),o0(Cy,e)}}function Py(t,e,n){t==="focusin"?(qh(),Oo=e,Qo=n,Oo.attachEvent("onpropertychange",R0)):t==="focusout"&&qh()}function Ly(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gu(Qo)}function Dy(t,e){if(t==="click")return gu(e)}function Iy(t,e){if(t==="input"||t==="change")return gu(e)}function Ny(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ni=typeof Object.is=="function"?Object.is:Ny;function ea(t,e){if(ni(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!nf.call(e,r)||!ni(t[r],e[r]))return!1}return!0}function Kh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zh(t,e){var n=Kh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kh(n)}}function C0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?C0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function b0(){for(var t=window,e=Il();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Il(t.document)}return e}function Dd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Uy(t){var e=b0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&C0(n.ownerDocument.documentElement,n)){if(i!==null&&Dd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Zh(n,s);var o=Zh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Fy=Ri&&"documentMode"in document&&11>=document.documentMode,Ms=null,Ef=null,zo=null,Mf=!1;function Jh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mf||Ms==null||Ms!==Il(i)||(i=Ms,"selectionStart"in i&&Dd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),zo&&ea(zo,i)||(zo=i,i=Bl(Ef,"onSelect"),0<i.length&&(e=new bd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ms)))}function Ia(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ws={animationend:Ia("Animation","AnimationEnd"),animationiteration:Ia("Animation","AnimationIteration"),animationstart:Ia("Animation","AnimationStart"),transitionend:Ia("Transition","TransitionEnd")},ec={},P0={};Ri&&(P0=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function vu(t){if(ec[t])return ec[t];if(!ws[t])return t;var e=ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in P0)return ec[t]=e[n];return t}var L0=vu("animationend"),D0=vu("animationiteration"),I0=vu("animationstart"),N0=vu("transitionend"),U0=new Map,Qh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cr(t,e){U0.set(t,e),$r(e,[t])}for(var tc=0;tc<Qh.length;tc++){var nc=Qh[tc],Oy=nc.toLowerCase(),zy=nc[0].toUpperCase()+nc.slice(1);cr(Oy,"on"+zy)}cr(L0,"onAnimationEnd");cr(D0,"onAnimationIteration");cr(I0,"onAnimationStart");cr("dblclick","onDoubleClick");cr("focusin","onFocus");cr("focusout","onBlur");cr(N0,"onTransitionEnd");Xs("onMouseEnter",["mouseout","mouseover"]);Xs("onMouseLeave",["mouseout","mouseover"]);Xs("onPointerEnter",["pointerout","pointerover"]);Xs("onPointerLeave",["pointerout","pointerover"]);$r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$r("onBeforeInput",["compositionend","keypress","textInput","paste"]);$r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ky=new Set("cancel close invalid load scroll toggle".split(" ").concat(Do));function ep(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Ox(i,e,void 0,t),t.currentTarget=null}function F0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;ep(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;ep(r,a,u),s=l}}}if(Ul)throw t=_f,Ul=!1,_f=null,t}function ot(t,e){var n=e[Cf];n===void 0&&(n=e[Cf]=new Set);var i=t+"__bubble";n.has(i)||(O0(e,t,2,!1),n.add(i))}function ic(t,e,n){var i=0;e&&(i|=4),O0(n,t,i,e)}var Na="_reactListening"+Math.random().toString(36).slice(2);function ta(t){if(!t[Na]){t[Na]=!0,Wg.forEach(function(n){n!=="selectionchange"&&(ky.has(n)||ic(n,!1,t),ic(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Na]||(e[Na]=!0,ic("selectionchange",!1,e))}}function O0(t,e,n,i){switch(y0(e)){case 1:var r=Qx;break;case 4:r=ey;break;default:r=Rd}n=r.bind(null,e,n,t),r=void 0,!vf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function rc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Cr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}o0(function(){var u=s,c=Md(n),h=[];e:{var d=U0.get(t);if(d!==void 0){var m=bd,g=t;switch(t){case"keypress":if(Ml(n)===0)break e;case"keydown":case"keyup":m=my;break;case"focusin":g="focus",m=Zu;break;case"focusout":g="blur",m=Zu;break;case"beforeblur":case"afterblur":m=Zu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Gh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=iy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=_y;break;case L0:case D0:case I0:m=oy;break;case N0:m=yy;break;case"scroll":m=ty;break;case"wheel":m=Ey;break;case"copy":case"cut":case"paste":m=ly;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Wh}var x=(e&4)!==0,v=!x&&t==="scroll",f=x?d!==null?d+"Capture":null:d;x=[];for(var _=u,p;_!==null;){p=_;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,f!==null&&(y=qo(_,f),y!=null&&x.push(na(_,y,p)))),v)break;_=_.return}0<x.length&&(d=new m(d,g,null,n,c),h.push({event:d,listeners:x}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==mf&&(g=n.relatedTarget||n.fromElement)&&(Cr(g)||g[Ci]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=u,g=g?Cr(g):null,g!==null&&(v=qr(g),g!==v||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=u),m!==g)){if(x=Gh,y="onMouseLeave",f="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=Wh,y="onPointerLeave",f="onPointerEnter",_="pointer"),v=m==null?d:Ts(m),p=g==null?d:Ts(g),d=new x(y,_+"leave",m,n,c),d.target=v,d.relatedTarget=p,y=null,Cr(c)===u&&(x=new x(f,_+"enter",g,n,c),x.target=p,x.relatedTarget=v,y=x),v=y,m&&g)t:{for(x=m,f=g,_=0,p=x;p;p=Jr(p))_++;for(p=0,y=f;y;y=Jr(y))p++;for(;0<_-p;)x=Jr(x),_--;for(;0<p-_;)f=Jr(f),p--;for(;_--;){if(x===f||f!==null&&x===f.alternate)break t;x=Jr(x),f=Jr(f)}x=null}else x=null;m!==null&&tp(h,d,m,x,!1),g!==null&&v!==null&&tp(h,v,g,x,!0)}}e:{if(d=u?Ts(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var R=by;else if(Yh(d))if(A0)R=Iy;else{R=Ly;var S=Py}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(R=Dy);if(R&&(R=R(t,u))){T0(h,R,n,c);break e}S&&S(t,d,u),t==="focusout"&&(S=d._wrapperState)&&S.controlled&&d.type==="number"&&cf(d,"number",d.value)}switch(S=u?Ts(u):window,t){case"focusin":(Yh(S)||S.contentEditable==="true")&&(Ms=S,Ef=u,zo=null);break;case"focusout":zo=Ef=Ms=null;break;case"mousedown":Mf=!0;break;case"contextmenu":case"mouseup":case"dragend":Mf=!1,Jh(h,n,c);break;case"selectionchange":if(Fy)break;case"keydown":case"keyup":Jh(h,n,c)}var T;if(Ld)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Es?M0(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(E0&&n.locale!=="ko"&&(Es||P!=="onCompositionStart"?P==="onCompositionEnd"&&Es&&(T=S0()):(Vi=c,Cd="value"in Vi?Vi.value:Vi.textContent,Es=!0)),S=Bl(u,P),0<S.length&&(P=new Vh(P,t,null,n,c),h.push({event:P,listeners:S}),T?P.data=T:(T=w0(n),T!==null&&(P.data=T)))),(T=wy?Ty(t,n):Ay(t,n))&&(u=Bl(u,"onBeforeInput"),0<u.length&&(c=new Vh("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=T))}F0(h,e)})}function na(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=qo(t,n),s!=null&&i.unshift(na(t,s,r)),s=qo(t,e),s!=null&&i.push(na(t,s,r))),t=t.return}return i}function Jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function tp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=qo(n,s),l!=null&&o.unshift(na(n,l,a))):r||(l=qo(n,s),l!=null&&o.push(na(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var By=/\r\n?/g,Hy=/\u0000|\uFFFD/g;function np(t){return(typeof t=="string"?t:""+t).replace(By,`
`).replace(Hy,"")}function Ua(t,e,n){if(e=np(e),np(t)!==e&&n)throw Error(pe(425))}function Hl(){}var wf=null,Tf=null;function Af(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Rf=typeof setTimeout=="function"?setTimeout:void 0,Gy=typeof clearTimeout=="function"?clearTimeout:void 0,ip=typeof Promise=="function"?Promise:void 0,Vy=typeof queueMicrotask=="function"?queueMicrotask:typeof ip<"u"?function(t){return ip.resolve(null).then(t).catch(Wy)}:Rf;function Wy(t){setTimeout(function(){throw t})}function sc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Jo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Jo(e)}function Zi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function rp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var oo=Math.random().toString(36).slice(2),ai="__reactFiber$"+oo,ia="__reactProps$"+oo,Ci="__reactContainer$"+oo,Cf="__reactEvents$"+oo,Xy="__reactListeners$"+oo,jy="__reactHandles$"+oo;function Cr(t){var e=t[ai];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ci]||n[ai]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=rp(t);t!==null;){if(n=t[ai])return n;t=rp(t)}return e}t=n,n=t.parentNode}return null}function xa(t){return t=t[ai]||t[Ci],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ts(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(pe(33))}function _u(t){return t[ia]||null}var bf=[],As=-1;function fr(t){return{current:t}}function lt(t){0>As||(t.current=bf[As],bf[As]=null,As--)}function st(t,e){As++,bf[As]=t.current,t.current=e}var lr={},Qt=fr(lr),pn=fr(!1),zr=lr;function js(t,e){var n=t.type.contextTypes;if(!n)return lr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function mn(t){return t=t.childContextTypes,t!=null}function Gl(){lt(pn),lt(Qt)}function sp(t,e,n){if(Qt.current!==lr)throw Error(pe(168));st(Qt,e),st(pn,n)}function z0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(pe(108,Px(t)||"Unknown",r));return gt({},n,i)}function Vl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||lr,zr=Qt.current,st(Qt,t),st(pn,pn.current),!0}function op(t,e,n){var i=t.stateNode;if(!i)throw Error(pe(169));n?(t=z0(t,e,zr),i.__reactInternalMemoizedMergedChildContext=t,lt(pn),lt(Qt),st(Qt,t)):lt(pn),st(pn,n)}var xi=null,xu=!1,oc=!1;function k0(t){xi===null?xi=[t]:xi.push(t)}function Yy(t){xu=!0,k0(t)}function dr(){if(!oc&&xi!==null){oc=!0;var t=0,e=Qe;try{var n=xi;for(Qe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}xi=null,xu=!1}catch(r){throw xi!==null&&(xi=xi.slice(t+1)),c0(wd,dr),r}finally{Qe=e,oc=!1}}return null}var Rs=[],Cs=0,Wl=null,Xl=0,Ln=[],Dn=0,kr=null,Ei=1,Mi="";function yr(t,e){Rs[Cs++]=Xl,Rs[Cs++]=Wl,Wl=t,Xl=e}function B0(t,e,n){Ln[Dn++]=Ei,Ln[Dn++]=Mi,Ln[Dn++]=kr,kr=t;var i=Ei;t=Mi;var r=32-ei(i)-1;i&=~(1<<r),n+=1;var s=32-ei(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ei=1<<32-ei(e)+r|n<<r|i,Mi=s+t}else Ei=1<<s|n<<r|i,Mi=t}function Id(t){t.return!==null&&(yr(t,1),B0(t,1,0))}function Nd(t){for(;t===Wl;)Wl=Rs[--Cs],Rs[Cs]=null,Xl=Rs[--Cs],Rs[Cs]=null;for(;t===kr;)kr=Ln[--Dn],Ln[Dn]=null,Mi=Ln[--Dn],Ln[Dn]=null,Ei=Ln[--Dn],Ln[Dn]=null}var wn=null,Mn=null,ct=!1,Kn=null;function H0(t,e){var n=On(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ap(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wn=t,Mn=Zi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wn=t,Mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=kr!==null?{id:Ei,overflow:Mi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=On(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wn=t,Mn=null,!0):!1;default:return!1}}function Pf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Lf(t){if(ct){var e=Mn;if(e){var n=e;if(!ap(t,e)){if(Pf(t))throw Error(pe(418));e=Zi(n.nextSibling);var i=wn;e&&ap(t,e)?H0(i,n):(t.flags=t.flags&-4097|2,ct=!1,wn=t)}}else{if(Pf(t))throw Error(pe(418));t.flags=t.flags&-4097|2,ct=!1,wn=t}}}function lp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wn=t}function Fa(t){if(t!==wn)return!1;if(!ct)return lp(t),ct=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Af(t.type,t.memoizedProps)),e&&(e=Mn)){if(Pf(t))throw G0(),Error(pe(418));for(;e;)H0(t,e),e=Zi(e.nextSibling)}if(lp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(pe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mn=Zi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mn=null}}else Mn=wn?Zi(t.stateNode.nextSibling):null;return!0}function G0(){for(var t=Mn;t;)t=Zi(t.nextSibling)}function Ys(){Mn=wn=null,ct=!1}function Ud(t){Kn===null?Kn=[t]:Kn.push(t)}var $y=Di.ReactCurrentBatchConfig;function xo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(pe(309));var i=n.stateNode}if(!i)throw Error(pe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(pe(284));if(!n._owner)throw Error(pe(290,t))}return t}function Oa(t,e){throw t=Object.prototype.toString.call(e),Error(pe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function up(t){var e=t._init;return e(t._payload)}function V0(t){function e(f,_){if(t){var p=f.deletions;p===null?(f.deletions=[_],f.flags|=16):p.push(_)}}function n(f,_){if(!t)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=tr(f,_),f.index=0,f.sibling=null,f}function s(f,_,p){return f.index=p,t?(p=f.alternate,p!==null?(p=p.index,p<_?(f.flags|=2,_):p):(f.flags|=2,_)):(f.flags|=1048576,_)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,_,p,y){return _===null||_.tag!==6?(_=hc(p,f.mode,y),_.return=f,_):(_=r(_,p),_.return=f,_)}function l(f,_,p,y){var R=p.type;return R===Ss?c(f,_,p.props.children,y,p.key):_!==null&&(_.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===ki&&up(R)===_.type)?(y=r(_,p.props),y.ref=xo(f,_,p),y.return=f,y):(y=Pl(p.type,p.key,p.props,null,f.mode,y),y.ref=xo(f,_,p),y.return=f,y)}function u(f,_,p,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==p.containerInfo||_.stateNode.implementation!==p.implementation?(_=pc(p,f.mode,y),_.return=f,_):(_=r(_,p.children||[]),_.return=f,_)}function c(f,_,p,y,R){return _===null||_.tag!==7?(_=Nr(p,f.mode,y,R),_.return=f,_):(_=r(_,p),_.return=f,_)}function h(f,_,p){if(typeof _=="string"&&_!==""||typeof _=="number")return _=hc(""+_,f.mode,p),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Aa:return p=Pl(_.type,_.key,_.props,null,f.mode,p),p.ref=xo(f,null,_),p.return=f,p;case ys:return _=pc(_,f.mode,p),_.return=f,_;case ki:var y=_._init;return h(f,y(_._payload),p)}if(Po(_)||po(_))return _=Nr(_,f.mode,p,null),_.return=f,_;Oa(f,_)}return null}function d(f,_,p,y){var R=_!==null?_.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return R!==null?null:a(f,_,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Aa:return p.key===R?l(f,_,p,y):null;case ys:return p.key===R?u(f,_,p,y):null;case ki:return R=p._init,d(f,_,R(p._payload),y)}if(Po(p)||po(p))return R!==null?null:c(f,_,p,y,null);Oa(f,p)}return null}function m(f,_,p,y,R){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(p)||null,a(_,f,""+y,R);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Aa:return f=f.get(y.key===null?p:y.key)||null,l(_,f,y,R);case ys:return f=f.get(y.key===null?p:y.key)||null,u(_,f,y,R);case ki:var S=y._init;return m(f,_,p,S(y._payload),R)}if(Po(y)||po(y))return f=f.get(p)||null,c(_,f,y,R,null);Oa(_,y)}return null}function g(f,_,p,y){for(var R=null,S=null,T=_,P=_=0,E=null;T!==null&&P<p.length;P++){T.index>P?(E=T,T=null):E=T.sibling;var w=d(f,T,p[P],y);if(w===null){T===null&&(T=E);break}t&&T&&w.alternate===null&&e(f,T),_=s(w,_,P),S===null?R=w:S.sibling=w,S=w,T=E}if(P===p.length)return n(f,T),ct&&yr(f,P),R;if(T===null){for(;P<p.length;P++)T=h(f,p[P],y),T!==null&&(_=s(T,_,P),S===null?R=T:S.sibling=T,S=T);return ct&&yr(f,P),R}for(T=i(f,T);P<p.length;P++)E=m(T,f,P,p[P],y),E!==null&&(t&&E.alternate!==null&&T.delete(E.key===null?P:E.key),_=s(E,_,P),S===null?R=E:S.sibling=E,S=E);return t&&T.forEach(function(N){return e(f,N)}),ct&&yr(f,P),R}function x(f,_,p,y){var R=po(p);if(typeof R!="function")throw Error(pe(150));if(p=R.call(p),p==null)throw Error(pe(151));for(var S=R=null,T=_,P=_=0,E=null,w=p.next();T!==null&&!w.done;P++,w=p.next()){T.index>P?(E=T,T=null):E=T.sibling;var N=d(f,T,w.value,y);if(N===null){T===null&&(T=E);break}t&&T&&N.alternate===null&&e(f,T),_=s(N,_,P),S===null?R=N:S.sibling=N,S=N,T=E}if(w.done)return n(f,T),ct&&yr(f,P),R;if(T===null){for(;!w.done;P++,w=p.next())w=h(f,w.value,y),w!==null&&(_=s(w,_,P),S===null?R=w:S.sibling=w,S=w);return ct&&yr(f,P),R}for(T=i(f,T);!w.done;P++,w=p.next())w=m(T,f,P,w.value,y),w!==null&&(t&&w.alternate!==null&&T.delete(w.key===null?P:w.key),_=s(w,_,P),S===null?R=w:S.sibling=w,S=w);return t&&T.forEach(function(B){return e(f,B)}),ct&&yr(f,P),R}function v(f,_,p,y){if(typeof p=="object"&&p!==null&&p.type===Ss&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Aa:e:{for(var R=p.key,S=_;S!==null;){if(S.key===R){if(R=p.type,R===Ss){if(S.tag===7){n(f,S.sibling),_=r(S,p.props.children),_.return=f,f=_;break e}}else if(S.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===ki&&up(R)===S.type){n(f,S.sibling),_=r(S,p.props),_.ref=xo(f,S,p),_.return=f,f=_;break e}n(f,S);break}else e(f,S);S=S.sibling}p.type===Ss?(_=Nr(p.props.children,f.mode,y,p.key),_.return=f,f=_):(y=Pl(p.type,p.key,p.props,null,f.mode,y),y.ref=xo(f,_,p),y.return=f,f=y)}return o(f);case ys:e:{for(S=p.key;_!==null;){if(_.key===S)if(_.tag===4&&_.stateNode.containerInfo===p.containerInfo&&_.stateNode.implementation===p.implementation){n(f,_.sibling),_=r(_,p.children||[]),_.return=f,f=_;break e}else{n(f,_);break}else e(f,_);_=_.sibling}_=pc(p,f.mode,y),_.return=f,f=_}return o(f);case ki:return S=p._init,v(f,_,S(p._payload),y)}if(Po(p))return g(f,_,p,y);if(po(p))return x(f,_,p,y);Oa(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,_!==null&&_.tag===6?(n(f,_.sibling),_=r(_,p),_.return=f,f=_):(n(f,_),_=hc(p,f.mode,y),_.return=f,f=_),o(f)):n(f,_)}return v}var $s=V0(!0),W0=V0(!1),jl=fr(null),Yl=null,bs=null,Fd=null;function Od(){Fd=bs=Yl=null}function zd(t){var e=jl.current;lt(jl),t._currentValue=e}function Df(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Bs(t,e){Yl=t,Fd=bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(hn=!0),t.firstContext=null)}function Hn(t){var e=t._currentValue;if(Fd!==t)if(t={context:t,memoizedValue:e,next:null},bs===null){if(Yl===null)throw Error(pe(308));bs=t,Yl.dependencies={lanes:0,firstContext:t}}else bs=bs.next=t;return e}var br=null;function kd(t){br===null?br=[t]:br.push(t)}function X0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,kd(e)):(n.next=r.next,r.next=n),e.interleaved=n,bi(t,i)}function bi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Bi=!1;function Bd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function j0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ti(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ji(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,bi(t,n)}return r=i.interleaved,r===null?(e.next=e,kd(i)):(e.next=r.next,r.next=e),i.interleaved=e,bi(t,n)}function wl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Td(t,n)}}function cp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function $l(t,e,n,i){var r=t.updateQueue;Bi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,x=a;switch(d=e,m=n,x.tag){case 1:if(g=x.payload,typeof g=="function"){h=g.call(m,h,d);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,d=typeof g=="function"?g.call(m,h,d):g,d==null)break e;h=gt({},h,d);break e;case 2:Bi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(c===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Hr|=o,t.lanes=o,t.memoizedState=h}}function fp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(pe(191,r));r.call(i)}}}var ya={},ui=fr(ya),ra=fr(ya),sa=fr(ya);function Pr(t){if(t===ya)throw Error(pe(174));return t}function Hd(t,e){switch(st(sa,e),st(ra,t),st(ui,ya),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:df(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=df(e,t)}lt(ui),st(ui,e)}function qs(){lt(ui),lt(ra),lt(sa)}function Y0(t){Pr(sa.current);var e=Pr(ui.current),n=df(e,t.type);e!==n&&(st(ra,t),st(ui,n))}function Gd(t){ra.current===t&&(lt(ui),lt(ra))}var dt=fr(0);function ql(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ac=[];function Vd(){for(var t=0;t<ac.length;t++)ac[t]._workInProgressVersionPrimary=null;ac.length=0}var Tl=Di.ReactCurrentDispatcher,lc=Di.ReactCurrentBatchConfig,Br=0,mt=null,Rt=null,Ut=null,Kl=!1,ko=!1,oa=0,qy=0;function jt(){throw Error(pe(321))}function Wd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ni(t[n],e[n]))return!1;return!0}function Xd(t,e,n,i,r,s){if(Br=s,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Tl.current=t===null||t.memoizedState===null?Qy:eS,t=n(i,r),ko){s=0;do{if(ko=!1,oa=0,25<=s)throw Error(pe(301));s+=1,Ut=Rt=null,e.updateQueue=null,Tl.current=tS,t=n(i,r)}while(ko)}if(Tl.current=Zl,e=Rt!==null&&Rt.next!==null,Br=0,Ut=Rt=mt=null,Kl=!1,e)throw Error(pe(300));return t}function jd(){var t=oa!==0;return oa=0,t}function si(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?mt.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function Gn(){if(Rt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Rt.next;var e=Ut===null?mt.memoizedState:Ut.next;if(e!==null)Ut=e,Rt=t;else{if(t===null)throw Error(pe(310));Rt=t,t={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},Ut===null?mt.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function aa(t,e){return typeof e=="function"?e(t):e}function uc(t){var e=Gn(),n=e.queue;if(n===null)throw Error(pe(311));n.lastRenderedReducer=t;var i=Rt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Br&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,mt.lanes|=c,Hr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,ni(i,e.memoizedState)||(hn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,mt.lanes|=s,Hr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function cc(t){var e=Gn(),n=e.queue;if(n===null)throw Error(pe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ni(s,e.memoizedState)||(hn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function $0(){}function q0(t,e){var n=mt,i=Gn(),r=e(),s=!ni(i.memoizedState,r);if(s&&(i.memoizedState=r,hn=!0),i=i.queue,Yd(J0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,la(9,Z0.bind(null,n,i,r,e),void 0,null),zt===null)throw Error(pe(349));Br&30||K0(n,e,r)}return r}function K0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Z0(t,e,n,i){e.value=n,e.getSnapshot=i,Q0(e)&&ev(t)}function J0(t,e,n){return n(function(){Q0(e)&&ev(t)})}function Q0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ni(t,n)}catch{return!0}}function ev(t){var e=bi(t,1);e!==null&&ti(e,t,1,-1)}function dp(t){var e=si();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:t},e.queue=t,t=t.dispatch=Jy.bind(null,mt,t),[e.memoizedState,t]}function la(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function tv(){return Gn().memoizedState}function Al(t,e,n,i){var r=si();mt.flags|=t,r.memoizedState=la(1|e,n,void 0,i===void 0?null:i)}function yu(t,e,n,i){var r=Gn();i=i===void 0?null:i;var s=void 0;if(Rt!==null){var o=Rt.memoizedState;if(s=o.destroy,i!==null&&Wd(i,o.deps)){r.memoizedState=la(e,n,s,i);return}}mt.flags|=t,r.memoizedState=la(1|e,n,s,i)}function hp(t,e){return Al(8390656,8,t,e)}function Yd(t,e){return yu(2048,8,t,e)}function nv(t,e){return yu(4,2,t,e)}function iv(t,e){return yu(4,4,t,e)}function rv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function sv(t,e,n){return n=n!=null?n.concat([t]):null,yu(4,4,rv.bind(null,e,t),n)}function $d(){}function ov(t,e){var n=Gn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Wd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function av(t,e){var n=Gn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Wd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function lv(t,e,n){return Br&21?(ni(n,e)||(n=h0(),mt.lanes|=n,Hr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,hn=!0),t.memoizedState=n)}function Ky(t,e){var n=Qe;Qe=n!==0&&4>n?n:4,t(!0);var i=lc.transition;lc.transition={};try{t(!1),e()}finally{Qe=n,lc.transition=i}}function uv(){return Gn().memoizedState}function Zy(t,e,n){var i=er(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},cv(t))fv(e,n);else if(n=X0(t,e,n,i),n!==null){var r=an();ti(n,t,i,r),dv(n,e,i)}}function Jy(t,e,n){var i=er(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(cv(t))fv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ni(a,o)){var l=e.interleaved;l===null?(r.next=r,kd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=X0(t,e,r,i),n!==null&&(r=an(),ti(n,t,i,r),dv(n,e,i))}}function cv(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function fv(t,e){ko=Kl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function dv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Td(t,n)}}var Zl={readContext:Hn,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},Qy={readContext:Hn,useCallback:function(t,e){return si().memoizedState=[t,e===void 0?null:e],t},useContext:Hn,useEffect:hp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Al(4194308,4,rv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Al(4194308,4,t,e)},useInsertionEffect:function(t,e){return Al(4,2,t,e)},useMemo:function(t,e){var n=si();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=si();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Zy.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=si();return t={current:t},e.memoizedState=t},useState:dp,useDebugValue:$d,useDeferredValue:function(t){return si().memoizedState=t},useTransition:function(){var t=dp(!1),e=t[0];return t=Ky.bind(null,t[1]),si().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=si();if(ct){if(n===void 0)throw Error(pe(407));n=n()}else{if(n=e(),zt===null)throw Error(pe(349));Br&30||K0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,hp(J0.bind(null,i,s,t),[t]),i.flags|=2048,la(9,Z0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=si(),e=zt.identifierPrefix;if(ct){var n=Mi,i=Ei;n=(i&~(1<<32-ei(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=oa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=qy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},eS={readContext:Hn,useCallback:ov,useContext:Hn,useEffect:Yd,useImperativeHandle:sv,useInsertionEffect:nv,useLayoutEffect:iv,useMemo:av,useReducer:uc,useRef:tv,useState:function(){return uc(aa)},useDebugValue:$d,useDeferredValue:function(t){var e=Gn();return lv(e,Rt.memoizedState,t)},useTransition:function(){var t=uc(aa)[0],e=Gn().memoizedState;return[t,e]},useMutableSource:$0,useSyncExternalStore:q0,useId:uv,unstable_isNewReconciler:!1},tS={readContext:Hn,useCallback:ov,useContext:Hn,useEffect:Yd,useImperativeHandle:sv,useInsertionEffect:nv,useLayoutEffect:iv,useMemo:av,useReducer:cc,useRef:tv,useState:function(){return cc(aa)},useDebugValue:$d,useDeferredValue:function(t){var e=Gn();return Rt===null?e.memoizedState=t:lv(e,Rt.memoizedState,t)},useTransition:function(){var t=cc(aa)[0],e=Gn().memoizedState;return[t,e]},useMutableSource:$0,useSyncExternalStore:q0,useId:uv,unstable_isNewReconciler:!1};function $n(t,e){if(t&&t.defaultProps){e=gt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function If(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:gt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Su={isMounted:function(t){return(t=t._reactInternals)?qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=an(),r=er(t),s=Ti(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ji(t,s,r),e!==null&&(ti(e,t,r,i),wl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=an(),r=er(t),s=Ti(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ji(t,s,r),e!==null&&(ti(e,t,r,i),wl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=an(),i=er(t),r=Ti(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ji(t,r,i),e!==null&&(ti(e,t,i,n),wl(e,t,i))}};function pp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ea(n,i)||!ea(r,s):!0}function hv(t,e,n){var i=!1,r=lr,s=e.contextType;return typeof s=="object"&&s!==null?s=Hn(s):(r=mn(e)?zr:Qt.current,i=e.contextTypes,s=(i=i!=null)?js(t,r):lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Su,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function mp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Su.enqueueReplaceState(e,e.state,null)}function Nf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Bd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Hn(s):(s=mn(e)?zr:Qt.current,r.context=js(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(If(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Su.enqueueReplaceState(r,r.state,null),$l(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ks(t,e){try{var n="",i=e;do n+=bx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function fc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Uf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var nS=typeof WeakMap=="function"?WeakMap:Map;function pv(t,e,n){n=Ti(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ql||(Ql=!0,Xf=i),Uf(t,e)},n}function mv(t,e,n){n=Ti(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Uf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Uf(t,e),typeof i!="function"&&(Qi===null?Qi=new Set([this]):Qi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function gp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new nS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=gS.bind(null,t,e,n),e.then(t,t))}function vp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function _p(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ti(-1,1),e.tag=2,Ji(n,e,1))),n.lanes|=1),t)}var iS=Di.ReactCurrentOwner,hn=!1;function sn(t,e,n,i){e.child=t===null?W0(e,null,n,i):$s(e,t.child,n,i)}function xp(t,e,n,i,r){n=n.render;var s=e.ref;return Bs(e,r),i=Xd(t,e,n,i,s,r),n=jd(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(ct&&n&&Id(e),e.flags|=1,sn(t,e,i,r),e.child)}function yp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!nh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,gv(t,e,s,i,r)):(t=Pl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ea,n(o,i)&&t.ref===e.ref)return Pi(t,e,r)}return e.flags|=1,t=tr(s,i),t.ref=e.ref,t.return=e,e.child=t}function gv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ea(s,i)&&t.ref===e.ref)if(hn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(hn=!0);else return e.lanes=t.lanes,Pi(t,e,r)}return Ff(t,e,n,i,r)}function vv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(Ls,En),En|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,st(Ls,En),En|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,st(Ls,En),En|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,st(Ls,En),En|=i;return sn(t,e,r,n),e.child}function _v(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ff(t,e,n,i,r){var s=mn(n)?zr:Qt.current;return s=js(e,s),Bs(e,r),n=Xd(t,e,n,i,s,r),i=jd(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(ct&&i&&Id(e),e.flags|=1,sn(t,e,n,r),e.child)}function Sp(t,e,n,i,r){if(mn(n)){var s=!0;Vl(e)}else s=!1;if(Bs(e,r),e.stateNode===null)Rl(t,e),hv(e,n,i),Nf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Hn(u):(u=mn(n)?zr:Qt.current,u=js(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&mp(e,o,i,u),Bi=!1;var d=e.memoizedState;o.state=d,$l(e,i,o,r),l=e.memoizedState,a!==i||d!==l||pn.current||Bi?(typeof c=="function"&&(If(e,n,c,i),l=e.memoizedState),(a=Bi||pp(e,n,a,i,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,j0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:$n(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Hn(l):(l=mn(n)?zr:Qt.current,l=js(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&mp(e,o,i,l),Bi=!1,d=e.memoizedState,o.state=d,$l(e,i,o,r);var g=e.memoizedState;a!==h||d!==g||pn.current||Bi?(typeof m=="function"&&(If(e,n,m,i),g=e.memoizedState),(u=Bi||pp(e,n,u,i,d,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Of(t,e,n,i,s,r)}function Of(t,e,n,i,r,s){_v(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&op(e,n,!1),Pi(t,e,s);i=e.stateNode,iS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=$s(e,t.child,null,s),e.child=$s(e,null,a,s)):sn(t,e,a,s),e.memoizedState=i.state,r&&op(e,n,!0),e.child}function xv(t){var e=t.stateNode;e.pendingContext?sp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&sp(t,e.context,!1),Hd(t,e.containerInfo)}function Ep(t,e,n,i,r){return Ys(),Ud(r),e.flags|=256,sn(t,e,n,i),e.child}var zf={dehydrated:null,treeContext:null,retryLane:0};function kf(t){return{baseLanes:t,cachePool:null,transitions:null}}function yv(t,e,n){var i=e.pendingProps,r=dt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),st(dt,r&1),t===null)return Lf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=wu(o,i,0,null),t=Nr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=kf(n),e.memoizedState=zf,t):qd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return rS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=tr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=tr(a,s):(s=Nr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?kf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=zf,i}return s=t.child,t=s.sibling,i=tr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function qd(t,e){return e=wu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function za(t,e,n,i){return i!==null&&Ud(i),$s(e,t.child,null,n),t=qd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function rS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=fc(Error(pe(422))),za(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=wu({mode:"visible",children:i.children},r,0,null),s=Nr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&$s(e,t.child,null,o),e.child.memoizedState=kf(o),e.memoizedState=zf,s);if(!(e.mode&1))return za(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(pe(419)),i=fc(s,i,void 0),za(t,e,o,i)}if(a=(o&t.childLanes)!==0,hn||a){if(i=zt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,bi(t,r),ti(i,t,r,-1))}return th(),i=fc(Error(pe(421))),za(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=vS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Mn=Zi(r.nextSibling),wn=e,ct=!0,Kn=null,t!==null&&(Ln[Dn++]=Ei,Ln[Dn++]=Mi,Ln[Dn++]=kr,Ei=t.id,Mi=t.overflow,kr=e),e=qd(e,i.children),e.flags|=4096,e)}function Mp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Df(t.return,e,n)}function dc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Sv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(sn(t,e,i.children,n),i=dt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mp(t,n,e);else if(t.tag===19)Mp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(st(dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ql(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),dc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ql(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}dc(e,!0,n,null,s);break;case"together":dc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Rl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Hr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(pe(153));if(e.child!==null){for(t=e.child,n=tr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=tr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function sS(t,e,n){switch(e.tag){case 3:xv(e),Ys();break;case 5:Y0(e);break;case 1:mn(e.type)&&Vl(e);break;case 4:Hd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(jl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(dt,dt.current&1),e.flags|=128,null):n&e.child.childLanes?yv(t,e,n):(st(dt,dt.current&1),t=Pi(t,e,n),t!==null?t.sibling:null);st(dt,dt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Sv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(dt,dt.current),i)break;return null;case 22:case 23:return e.lanes=0,vv(t,e,n)}return Pi(t,e,n)}var Ev,Bf,Mv,wv;Ev=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bf=function(){};Mv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Pr(ui.current);var s=null;switch(n){case"input":r=lf(t,r),i=lf(t,i),s=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),s=[];break;case"textarea":r=ff(t,r),i=ff(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Hl)}hf(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Yo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Yo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ot("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};wv=function(t,e,n,i){n!==i&&(e.flags|=4)};function yo(t,e){if(!ct)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function oS(t,e,n){var i=e.pendingProps;switch(Nd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return mn(e.type)&&Gl(),Yt(e),null;case 3:return i=e.stateNode,qs(),lt(pn),lt(Qt),Vd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Fa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Kn!==null&&($f(Kn),Kn=null))),Bf(t,e),Yt(e),null;case 5:Gd(e);var r=Pr(sa.current);if(n=e.type,t!==null&&e.stateNode!=null)Mv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(pe(166));return Yt(e),null}if(t=Pr(ui.current),Fa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ai]=e,i[ia]=s,t=(e.mode&1)!==0,n){case"dialog":ot("cancel",i),ot("close",i);break;case"iframe":case"object":case"embed":ot("load",i);break;case"video":case"audio":for(r=0;r<Do.length;r++)ot(Do[r],i);break;case"source":ot("error",i);break;case"img":case"image":case"link":ot("error",i),ot("load",i);break;case"details":ot("toggle",i);break;case"input":Dh(i,s),ot("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ot("invalid",i);break;case"textarea":Nh(i,s),ot("invalid",i)}hf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ua(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ua(i.textContent,a,t),r=["children",""+a]):Yo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ot("scroll",i)}switch(n){case"input":Ra(i),Ih(i,s,!0);break;case"textarea":Ra(i),Uh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Hl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Jg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ai]=e,t[ia]=i,Ev(t,e,!1,!1),e.stateNode=t;e:{switch(o=pf(n,i),n){case"dialog":ot("cancel",t),ot("close",t),r=i;break;case"iframe":case"object":case"embed":ot("load",t),r=i;break;case"video":case"audio":for(r=0;r<Do.length;r++)ot(Do[r],t);r=i;break;case"source":ot("error",t),r=i;break;case"img":case"image":case"link":ot("error",t),ot("load",t),r=i;break;case"details":ot("toggle",t),r=i;break;case"input":Dh(t,i),r=lf(t,i),ot("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),ot("invalid",t);break;case"textarea":Nh(t,i),r=ff(t,i),ot("invalid",t);break;default:r=i}hf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?t0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Qg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&$o(t,l):typeof l=="number"&&$o(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Yo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ot("scroll",t):l!=null&&xd(t,s,l,o))}switch(n){case"input":Ra(t),Ih(t,i,!1);break;case"textarea":Ra(t),Uh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ar(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Fs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Fs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Hl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yt(e),null;case 6:if(t&&e.stateNode!=null)wv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(pe(166));if(n=Pr(sa.current),Pr(ui.current),Fa(e)){if(i=e.stateNode,n=e.memoizedProps,i[ai]=e,(s=i.nodeValue!==n)&&(t=wn,t!==null))switch(t.tag){case 3:Ua(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ua(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ai]=e,e.stateNode=i}return Yt(e),null;case 13:if(lt(dt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ct&&Mn!==null&&e.mode&1&&!(e.flags&128))G0(),Ys(),e.flags|=98560,s=!1;else if(s=Fa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(pe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(pe(317));s[ai]=e}else Ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yt(e),s=!1}else Kn!==null&&($f(Kn),Kn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||dt.current&1?Ct===0&&(Ct=3):th())),e.updateQueue!==null&&(e.flags|=4),Yt(e),null);case 4:return qs(),Bf(t,e),t===null&&ta(e.stateNode.containerInfo),Yt(e),null;case 10:return zd(e.type._context),Yt(e),null;case 17:return mn(e.type)&&Gl(),Yt(e),null;case 19:if(lt(dt),s=e.memoizedState,s===null)return Yt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)yo(s,!1);else{if(Ct!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ql(t),o!==null){for(e.flags|=128,yo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return st(dt,dt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Et()>Zs&&(e.flags|=128,i=!0,yo(s,!1),e.lanes=4194304)}else{if(!i)if(t=ql(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),yo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ct)return Yt(e),null}else 2*Et()-s.renderingStartTime>Zs&&n!==1073741824&&(e.flags|=128,i=!0,yo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Et(),e.sibling=null,n=dt.current,st(dt,i?n&1|2:n&1),e):(Yt(e),null);case 22:case 23:return eh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?En&1073741824&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),null;case 24:return null;case 25:return null}throw Error(pe(156,e.tag))}function aS(t,e){switch(Nd(e),e.tag){case 1:return mn(e.type)&&Gl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return qs(),lt(pn),lt(Qt),Vd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Gd(e),null;case 13:if(lt(dt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(pe(340));Ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return lt(dt),null;case 4:return qs(),null;case 10:return zd(e.type._context),null;case 22:case 23:return eh(),null;case 24:return null;default:return null}}var ka=!1,Zt=!1,lS=typeof WeakSet=="function"?WeakSet:Set,Te=null;function Ps(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){xt(t,e,i)}else n.current=null}function Hf(t,e,n){try{n()}catch(i){xt(t,e,i)}}var wp=!1;function uS(t,e){if(wf=zl,t=b0(),Dd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tf={focusedElem:t,selectionRange:n},zl=!1,Te=e;Te!==null;)if(e=Te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Te=t;else for(;Te!==null;){e=Te;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,v=g.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?x:$n(e.type,x),v);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(pe(163))}}catch(y){xt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}return g=wp,wp=!1,g}function Bo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Hf(e,n,s)}r=r.next}while(r!==i)}}function Eu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Gf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Tv(t){var e=t.alternate;e!==null&&(t.alternate=null,Tv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ai],delete e[ia],delete e[Cf],delete e[Xy],delete e[jy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Av(t){return t.tag===5||t.tag===3||t.tag===4}function Tp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Av(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Hl));else if(i!==4&&(t=t.child,t!==null))for(Vf(t,e,n),t=t.sibling;t!==null;)Vf(t,e,n),t=t.sibling}function Wf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Wf(t,e,n),t=t.sibling;t!==null;)Wf(t,e,n),t=t.sibling}var Ht=null,qn=!1;function Ii(t,e,n){for(n=n.child;n!==null;)Rv(t,e,n),n=n.sibling}function Rv(t,e,n){if(li&&typeof li.onCommitFiberUnmount=="function")try{li.onCommitFiberUnmount(pu,n)}catch{}switch(n.tag){case 5:Zt||Ps(n,e);case 6:var i=Ht,r=qn;Ht=null,Ii(t,e,n),Ht=i,qn=r,Ht!==null&&(qn?(t=Ht,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ht.removeChild(n.stateNode));break;case 18:Ht!==null&&(qn?(t=Ht,n=n.stateNode,t.nodeType===8?sc(t.parentNode,n):t.nodeType===1&&sc(t,n),Jo(t)):sc(Ht,n.stateNode));break;case 4:i=Ht,r=qn,Ht=n.stateNode.containerInfo,qn=!0,Ii(t,e,n),Ht=i,qn=r;break;case 0:case 11:case 14:case 15:if(!Zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Hf(n,e,o),r=r.next}while(r!==i)}Ii(t,e,n);break;case 1:if(!Zt&&(Ps(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){xt(n,e,a)}Ii(t,e,n);break;case 21:Ii(t,e,n);break;case 22:n.mode&1?(Zt=(i=Zt)||n.memoizedState!==null,Ii(t,e,n),Zt=i):Ii(t,e,n);break;default:Ii(t,e,n)}}function Ap(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new lS),e.forEach(function(i){var r=_S.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Wn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ht=a.stateNode,qn=!1;break e;case 3:Ht=a.stateNode.containerInfo,qn=!0;break e;case 4:Ht=a.stateNode.containerInfo,qn=!0;break e}a=a.return}if(Ht===null)throw Error(pe(160));Rv(s,o,r),Ht=null,qn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){xt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Cv(e,t),e=e.sibling}function Cv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wn(e,t),ri(t),i&4){try{Bo(3,t,t.return),Eu(3,t)}catch(x){xt(t,t.return,x)}try{Bo(5,t,t.return)}catch(x){xt(t,t.return,x)}}break;case 1:Wn(e,t),ri(t),i&512&&n!==null&&Ps(n,n.return);break;case 5:if(Wn(e,t),ri(t),i&512&&n!==null&&Ps(n,n.return),t.flags&32){var r=t.stateNode;try{$o(r,"")}catch(x){xt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Kg(r,s),pf(a,o);var u=pf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?t0(r,h):c==="dangerouslySetInnerHTML"?Qg(r,h):c==="children"?$o(r,h):xd(r,c,h,u)}switch(a){case"input":uf(r,s);break;case"textarea":Zg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Fs(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Fs(r,!!s.multiple,s.defaultValue,!0):Fs(r,!!s.multiple,s.multiple?[]:"",!1))}r[ia]=s}catch(x){xt(t,t.return,x)}}break;case 6:if(Wn(e,t),ri(t),i&4){if(t.stateNode===null)throw Error(pe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){xt(t,t.return,x)}}break;case 3:if(Wn(e,t),ri(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Jo(e.containerInfo)}catch(x){xt(t,t.return,x)}break;case 4:Wn(e,t),ri(t);break;case 13:Wn(e,t),ri(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Jd=Et())),i&4&&Ap(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Zt=(u=Zt)||c,Wn(e,t),Zt=u):Wn(e,t),ri(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(Te=t,c=t.child;c!==null;){for(h=Te=c;Te!==null;){switch(d=Te,m=d.child,d.tag){case 0:case 11:case 14:case 15:Bo(4,d,d.return);break;case 1:Ps(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(x){xt(i,n,x)}}break;case 5:Ps(d,d.return);break;case 22:if(d.memoizedState!==null){Cp(h);continue}}m!==null?(m.return=d,Te=m):Cp(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=e0("display",o))}catch(x){xt(t,t.return,x)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(x){xt(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Wn(e,t),ri(t),i&4&&Ap(t);break;case 21:break;default:Wn(e,t),ri(t)}}function ri(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Av(n)){var i=n;break e}n=n.return}throw Error(pe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&($o(r,""),i.flags&=-33);var s=Tp(t);Wf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Tp(t);Vf(t,a,o);break;default:throw Error(pe(161))}}catch(l){xt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function cS(t,e,n){Te=t,bv(t)}function bv(t,e,n){for(var i=(t.mode&1)!==0;Te!==null;){var r=Te,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ka;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Zt;a=ka;var u=Zt;if(ka=o,(Zt=l)&&!u)for(Te=r;Te!==null;)o=Te,l=o.child,o.tag===22&&o.memoizedState!==null?bp(r):l!==null?(l.return=o,Te=l):bp(r);for(;s!==null;)Te=s,bv(s),s=s.sibling;Te=r,ka=a,Zt=u}Rp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Te=s):Rp(t)}}function Rp(t){for(;Te!==null;){var e=Te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||Eu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:$n(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&fp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}fp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Jo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(pe(163))}Zt||e.flags&512&&Gf(e)}catch(d){xt(e,e.return,d)}}if(e===t){Te=null;break}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}}function Cp(t){for(;Te!==null;){var e=Te;if(e===t){Te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Te=n;break}Te=e.return}}function bp(t){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Eu(4,e)}catch(l){xt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){xt(e,r,l)}}var s=e.return;try{Gf(e)}catch(l){xt(e,s,l)}break;case 5:var o=e.return;try{Gf(e)}catch(l){xt(e,o,l)}}}catch(l){xt(e,e.return,l)}if(e===t){Te=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Te=a;break}Te=e.return}}var fS=Math.ceil,Jl=Di.ReactCurrentDispatcher,Kd=Di.ReactCurrentOwner,kn=Di.ReactCurrentBatchConfig,Ke=0,zt=null,wt=null,Vt=0,En=0,Ls=fr(0),Ct=0,ua=null,Hr=0,Mu=0,Zd=0,Ho=null,cn=null,Jd=0,Zs=1/0,_i=null,Ql=!1,Xf=null,Qi=null,Ba=!1,Wi=null,eu=0,Go=0,jf=null,Cl=-1,bl=0;function an(){return Ke&6?Et():Cl!==-1?Cl:Cl=Et()}function er(t){return t.mode&1?Ke&2&&Vt!==0?Vt&-Vt:$y.transition!==null?(bl===0&&(bl=h0()),bl):(t=Qe,t!==0||(t=window.event,t=t===void 0?16:y0(t.type)),t):1}function ti(t,e,n,i){if(50<Go)throw Go=0,jf=null,Error(pe(185));va(t,n,i),(!(Ke&2)||t!==zt)&&(t===zt&&(!(Ke&2)&&(Mu|=n),Ct===4&&Gi(t,Vt)),gn(t,i),n===1&&Ke===0&&!(e.mode&1)&&(Zs=Et()+500,xu&&dr()))}function gn(t,e){var n=t.callbackNode;$x(t,e);var i=Ol(t,t===zt?Vt:0);if(i===0)n!==null&&zh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&zh(n),e===1)t.tag===0?Yy(Pp.bind(null,t)):k0(Pp.bind(null,t)),Vy(function(){!(Ke&6)&&dr()}),n=null;else{switch(p0(i)){case 1:n=wd;break;case 4:n=f0;break;case 16:n=Fl;break;case 536870912:n=d0;break;default:n=Fl}n=Ov(n,Pv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Pv(t,e){if(Cl=-1,bl=0,Ke&6)throw Error(pe(327));var n=t.callbackNode;if(Hs()&&t.callbackNode!==n)return null;var i=Ol(t,t===zt?Vt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=tu(t,i);else{e=i;var r=Ke;Ke|=2;var s=Dv();(zt!==t||Vt!==e)&&(_i=null,Zs=Et()+500,Ir(t,e));do try{pS();break}catch(a){Lv(t,a)}while(!0);Od(),Jl.current=s,Ke=r,wt!==null?e=0:(zt=null,Vt=0,e=Ct)}if(e!==0){if(e===2&&(r=xf(t),r!==0&&(i=r,e=Yf(t,r))),e===1)throw n=ua,Ir(t,0),Gi(t,i),gn(t,Et()),n;if(e===6)Gi(t,i);else{if(r=t.current.alternate,!(i&30)&&!dS(r)&&(e=tu(t,i),e===2&&(s=xf(t),s!==0&&(i=s,e=Yf(t,s))),e===1))throw n=ua,Ir(t,0),Gi(t,i),gn(t,Et()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(pe(345));case 2:Sr(t,cn,_i);break;case 3:if(Gi(t,i),(i&130023424)===i&&(e=Jd+500-Et(),10<e)){if(Ol(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){an(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Rf(Sr.bind(null,t,cn,_i),e);break}Sr(t,cn,_i);break;case 4:if(Gi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ei(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*fS(i/1960))-i,10<i){t.timeoutHandle=Rf(Sr.bind(null,t,cn,_i),i);break}Sr(t,cn,_i);break;case 5:Sr(t,cn,_i);break;default:throw Error(pe(329))}}}return gn(t,Et()),t.callbackNode===n?Pv.bind(null,t):null}function Yf(t,e){var n=Ho;return t.current.memoizedState.isDehydrated&&(Ir(t,e).flags|=256),t=tu(t,e),t!==2&&(e=cn,cn=n,e!==null&&$f(e)),t}function $f(t){cn===null?cn=t:cn.push.apply(cn,t)}function dS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ni(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gi(t,e){for(e&=~Zd,e&=~Mu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ei(e),i=1<<n;t[n]=-1,e&=~i}}function Pp(t){if(Ke&6)throw Error(pe(327));Hs();var e=Ol(t,0);if(!(e&1))return gn(t,Et()),null;var n=tu(t,e);if(t.tag!==0&&n===2){var i=xf(t);i!==0&&(e=i,n=Yf(t,i))}if(n===1)throw n=ua,Ir(t,0),Gi(t,e),gn(t,Et()),n;if(n===6)throw Error(pe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Sr(t,cn,_i),gn(t,Et()),null}function Qd(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(Zs=Et()+500,xu&&dr())}}function Gr(t){Wi!==null&&Wi.tag===0&&!(Ke&6)&&Hs();var e=Ke;Ke|=1;var n=kn.transition,i=Qe;try{if(kn.transition=null,Qe=1,t)return t()}finally{Qe=i,kn.transition=n,Ke=e,!(Ke&6)&&dr()}}function eh(){En=Ls.current,lt(Ls)}function Ir(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Gy(n)),wt!==null)for(n=wt.return;n!==null;){var i=n;switch(Nd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Gl();break;case 3:qs(),lt(pn),lt(Qt),Vd();break;case 5:Gd(i);break;case 4:qs();break;case 13:lt(dt);break;case 19:lt(dt);break;case 10:zd(i.type._context);break;case 22:case 23:eh()}n=n.return}if(zt=t,wt=t=tr(t.current,null),Vt=En=e,Ct=0,ua=null,Zd=Mu=Hr=0,cn=Ho=null,br!==null){for(e=0;e<br.length;e++)if(n=br[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}br=null}return t}function Lv(t,e){do{var n=wt;try{if(Od(),Tl.current=Zl,Kl){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Kl=!1}if(Br=0,Ut=Rt=mt=null,ko=!1,oa=0,Kd.current=null,n===null||n.return===null){Ct=1,ua=e,wt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Vt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=vp(o);if(m!==null){m.flags&=-257,_p(m,o,a,s,e),m.mode&1&&gp(s,u,e),e=m,l=u;var g=e.updateQueue;if(g===null){var x=new Set;x.add(l),e.updateQueue=x}else g.add(l);break e}else{if(!(e&1)){gp(s,u,e),th();break e}l=Error(pe(426))}}else if(ct&&a.mode&1){var v=vp(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),_p(v,o,a,s,e),Ud(Ks(l,a));break e}}s=l=Ks(l,a),Ct!==4&&(Ct=2),Ho===null?Ho=[s]:Ho.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=pv(s,l,e);cp(s,f);break e;case 1:a=l;var _=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Qi===null||!Qi.has(p)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=mv(s,a,e);cp(s,y);break e}}s=s.return}while(s!==null)}Nv(n)}catch(R){e=R,wt===n&&n!==null&&(wt=n=n.return);continue}break}while(!0)}function Dv(){var t=Jl.current;return Jl.current=Zl,t===null?Zl:t}function th(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),zt===null||!(Hr&268435455)&&!(Mu&268435455)||Gi(zt,Vt)}function tu(t,e){var n=Ke;Ke|=2;var i=Dv();(zt!==t||Vt!==e)&&(_i=null,Ir(t,e));do try{hS();break}catch(r){Lv(t,r)}while(!0);if(Od(),Ke=n,Jl.current=i,wt!==null)throw Error(pe(261));return zt=null,Vt=0,Ct}function hS(){for(;wt!==null;)Iv(wt)}function pS(){for(;wt!==null&&!kx();)Iv(wt)}function Iv(t){var e=Fv(t.alternate,t,En);t.memoizedProps=t.pendingProps,e===null?Nv(t):wt=e,Kd.current=null}function Nv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=aS(n,e),n!==null){n.flags&=32767,wt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ct=6,wt=null;return}}else if(n=oS(n,e,En),n!==null){wt=n;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=t}while(e!==null);Ct===0&&(Ct=5)}function Sr(t,e,n){var i=Qe,r=kn.transition;try{kn.transition=null,Qe=1,mS(t,e,n,i)}finally{kn.transition=r,Qe=i}return null}function mS(t,e,n,i){do Hs();while(Wi!==null);if(Ke&6)throw Error(pe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(pe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(qx(t,s),t===zt&&(wt=zt=null,Vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ba||(Ba=!0,Ov(Fl,function(){return Hs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=kn.transition,kn.transition=null;var o=Qe;Qe=1;var a=Ke;Ke|=4,Kd.current=null,uS(t,n),Cv(n,t),Uy(Tf),zl=!!wf,Tf=wf=null,t.current=n,cS(n),Bx(),Ke=a,Qe=o,kn.transition=s}else t.current=n;if(Ba&&(Ba=!1,Wi=t,eu=r),s=t.pendingLanes,s===0&&(Qi=null),Vx(n.stateNode),gn(t,Et()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ql)throw Ql=!1,t=Xf,Xf=null,t;return eu&1&&t.tag!==0&&Hs(),s=t.pendingLanes,s&1?t===jf?Go++:(Go=0,jf=t):Go=0,dr(),null}function Hs(){if(Wi!==null){var t=p0(eu),e=kn.transition,n=Qe;try{if(kn.transition=null,Qe=16>t?16:t,Wi===null)var i=!1;else{if(t=Wi,Wi=null,eu=0,Ke&6)throw Error(pe(331));var r=Ke;for(Ke|=4,Te=t.current;Te!==null;){var s=Te,o=s.child;if(Te.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Te=u;Te!==null;){var c=Te;switch(c.tag){case 0:case 11:case 15:Bo(8,c,s)}var h=c.child;if(h!==null)h.return=c,Te=h;else for(;Te!==null;){c=Te;var d=c.sibling,m=c.return;if(Tv(c),c===u){Te=null;break}if(d!==null){d.return=m,Te=d;break}Te=m}}}var g=s.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var v=x.sibling;x.sibling=null,x=v}while(x!==null)}}Te=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Te=o;else e:for(;Te!==null;){if(s=Te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Bo(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Te=f;break e}Te=s.return}}var _=t.current;for(Te=_;Te!==null;){o=Te;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,Te=p;else e:for(o=_;Te!==null;){if(a=Te,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Eu(9,a)}}catch(R){xt(a,a.return,R)}if(a===o){Te=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Te=y;break e}Te=a.return}}if(Ke=r,dr(),li&&typeof li.onPostCommitFiberRoot=="function")try{li.onPostCommitFiberRoot(pu,t)}catch{}i=!0}return i}finally{Qe=n,kn.transition=e}}return!1}function Lp(t,e,n){e=Ks(n,e),e=pv(t,e,1),t=Ji(t,e,1),e=an(),t!==null&&(va(t,1,e),gn(t,e))}function xt(t,e,n){if(t.tag===3)Lp(t,t,n);else for(;e!==null;){if(e.tag===3){Lp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Qi===null||!Qi.has(i))){t=Ks(n,t),t=mv(e,t,1),e=Ji(e,t,1),t=an(),e!==null&&(va(e,1,t),gn(e,t));break}}e=e.return}}function gS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=an(),t.pingedLanes|=t.suspendedLanes&n,zt===t&&(Vt&n)===n&&(Ct===4||Ct===3&&(Vt&130023424)===Vt&&500>Et()-Jd?Ir(t,0):Zd|=n),gn(t,e)}function Uv(t,e){e===0&&(t.mode&1?(e=Pa,Pa<<=1,!(Pa&130023424)&&(Pa=4194304)):e=1);var n=an();t=bi(t,e),t!==null&&(va(t,e,n),gn(t,n))}function vS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Uv(t,n)}function _S(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(pe(314))}i!==null&&i.delete(e),Uv(t,n)}var Fv;Fv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pn.current)hn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return hn=!1,sS(t,e,n);hn=!!(t.flags&131072)}else hn=!1,ct&&e.flags&1048576&&B0(e,Xl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Rl(t,e),t=e.pendingProps;var r=js(e,Qt.current);Bs(e,n),r=Xd(null,e,i,t,r,n);var s=jd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mn(i)?(s=!0,Vl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Bd(e),r.updater=Su,e.stateNode=r,r._reactInternals=e,Nf(e,i,t,n),e=Of(null,e,i,!0,s,n)):(e.tag=0,ct&&s&&Id(e),sn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Rl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=yS(i),t=$n(i,t),r){case 0:e=Ff(null,e,i,t,n);break e;case 1:e=Sp(null,e,i,t,n);break e;case 11:e=xp(null,e,i,t,n);break e;case 14:e=yp(null,e,i,$n(i.type,t),n);break e}throw Error(pe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),Ff(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),Sp(t,e,i,r,n);case 3:e:{if(xv(e),t===null)throw Error(pe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,j0(t,e),$l(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ks(Error(pe(423)),e),e=Ep(t,e,i,n,r);break e}else if(i!==r){r=Ks(Error(pe(424)),e),e=Ep(t,e,i,n,r);break e}else for(Mn=Zi(e.stateNode.containerInfo.firstChild),wn=e,ct=!0,Kn=null,n=W0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ys(),i===r){e=Pi(t,e,n);break e}sn(t,e,i,n)}e=e.child}return e;case 5:return Y0(e),t===null&&Lf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Af(i,r)?o=null:s!==null&&Af(i,s)&&(e.flags|=32),_v(t,e),sn(t,e,o,n),e.child;case 6:return t===null&&Lf(e),null;case 13:return yv(t,e,n);case 4:return Hd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=$s(e,null,i,n):sn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),xp(t,e,i,r,n);case 7:return sn(t,e,e.pendingProps,n),e.child;case 8:return sn(t,e,e.pendingProps.children,n),e.child;case 12:return sn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,st(jl,i._currentValue),i._currentValue=o,s!==null)if(ni(s.value,o)){if(s.children===r.children&&!pn.current){e=Pi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ti(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Df(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(pe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Df(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}sn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Bs(e,n),r=Hn(r),i=i(r),e.flags|=1,sn(t,e,i,n),e.child;case 14:return i=e.type,r=$n(i,e.pendingProps),r=$n(i.type,r),yp(t,e,i,r,n);case 15:return gv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),Rl(t,e),e.tag=1,mn(i)?(t=!0,Vl(e)):t=!1,Bs(e,n),hv(e,i,r),Nf(e,i,r,n),Of(null,e,i,!0,t,n);case 19:return Sv(t,e,n);case 22:return vv(t,e,n)}throw Error(pe(156,e.tag))};function Ov(t,e){return c0(t,e)}function xS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(t,e,n,i){return new xS(t,e,n,i)}function nh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function yS(t){if(typeof t=="function")return nh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Sd)return 11;if(t===Ed)return 14}return 2}function tr(t,e){var n=t.alternate;return n===null?(n=On(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Pl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")nh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ss:return Nr(n.children,r,s,e);case yd:o=8,r|=8;break;case rf:return t=On(12,n,e,r|2),t.elementType=rf,t.lanes=s,t;case sf:return t=On(13,n,e,r),t.elementType=sf,t.lanes=s,t;case of:return t=On(19,n,e,r),t.elementType=of,t.lanes=s,t;case Yg:return wu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Xg:o=10;break e;case jg:o=9;break e;case Sd:o=11;break e;case Ed:o=14;break e;case ki:o=16,i=null;break e}throw Error(pe(130,t==null?t:typeof t,""))}return e=On(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Nr(t,e,n,i){return t=On(7,t,i,e),t.lanes=n,t}function wu(t,e,n,i){return t=On(22,t,i,e),t.elementType=Yg,t.lanes=n,t.stateNode={isHidden:!1},t}function hc(t,e,n){return t=On(6,t,null,e),t.lanes=n,t}function pc(t,e,n){return e=On(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function SS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$u(0),this.expirationTimes=$u(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$u(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ih(t,e,n,i,r,s,o,a,l){return t=new SS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=On(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bd(s),t}function ES(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ys,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function zv(t){if(!t)return lr;t=t._reactInternals;e:{if(qr(t)!==t||t.tag!==1)throw Error(pe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(pe(171))}if(t.tag===1){var n=t.type;if(mn(n))return z0(t,n,e)}return e}function kv(t,e,n,i,r,s,o,a,l){return t=ih(n,i,!0,t,r,s,o,a,l),t.context=zv(null),n=t.current,i=an(),r=er(n),s=Ti(i,r),s.callback=e??null,Ji(n,s,r),t.current.lanes=r,va(t,r,i),gn(t,i),t}function Tu(t,e,n,i){var r=e.current,s=an(),o=er(r);return n=zv(n),e.context===null?e.context=n:e.pendingContext=n,e=Ti(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ji(r,e,o),t!==null&&(ti(t,r,o,s),wl(t,r,o)),o}function nu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Dp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function rh(t,e){Dp(t,e),(t=t.alternate)&&Dp(t,e)}function MS(){return null}var Bv=typeof reportError=="function"?reportError:function(t){console.error(t)};function sh(t){this._internalRoot=t}Au.prototype.render=sh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(pe(409));Tu(t,e,null,null)};Au.prototype.unmount=sh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Gr(function(){Tu(null,t,null,null)}),e[Ci]=null}};function Au(t){this._internalRoot=t}Au.prototype.unstable_scheduleHydration=function(t){if(t){var e=v0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Hi.length&&e!==0&&e<Hi[n].priority;n++);Hi.splice(n,0,t),n===0&&x0(t)}};function oh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ru(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ip(){}function wS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=nu(o);s.call(u)}}var o=kv(e,i,t,0,null,!1,!1,"",Ip);return t._reactRootContainer=o,t[Ci]=o.current,ta(t.nodeType===8?t.parentNode:t),Gr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=nu(l);a.call(u)}}var l=ih(t,0,!1,null,null,!1,!1,"",Ip);return t._reactRootContainer=l,t[Ci]=l.current,ta(t.nodeType===8?t.parentNode:t),Gr(function(){Tu(e,l,n,i)}),l}function Cu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=nu(o);a.call(l)}}Tu(e,o,t,r)}else o=wS(n,e,t,r,i);return nu(o)}m0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Lo(e.pendingLanes);n!==0&&(Td(e,n|1),gn(e,Et()),!(Ke&6)&&(Zs=Et()+500,dr()))}break;case 13:Gr(function(){var i=bi(t,1);if(i!==null){var r=an();ti(i,t,1,r)}}),rh(t,1)}};Ad=function(t){if(t.tag===13){var e=bi(t,134217728);if(e!==null){var n=an();ti(e,t,134217728,n)}rh(t,134217728)}};g0=function(t){if(t.tag===13){var e=er(t),n=bi(t,e);if(n!==null){var i=an();ti(n,t,e,i)}rh(t,e)}};v0=function(){return Qe};_0=function(t,e){var n=Qe;try{return Qe=t,e()}finally{Qe=n}};gf=function(t,e,n){switch(e){case"input":if(uf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=_u(i);if(!r)throw Error(pe(90));qg(i),uf(i,r)}}}break;case"textarea":Zg(t,n);break;case"select":e=n.value,e!=null&&Fs(t,!!n.multiple,e,!1)}};r0=Qd;s0=Gr;var TS={usingClientEntryPoint:!1,Events:[xa,Ts,_u,n0,i0,Qd]},So={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},AS={bundleType:So.bundleType,version:So.version,rendererPackageName:So.rendererPackageName,rendererConfig:So.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Di.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=l0(t),t===null?null:t.stateNode},findFiberByHostInstance:So.findFiberByHostInstance||MS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ha=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ha.isDisabled&&Ha.supportsFiber)try{pu=Ha.inject(AS),li=Ha}catch{}}Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TS;Rn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!oh(e))throw Error(pe(200));return ES(t,e,null,n)};Rn.createRoot=function(t,e){if(!oh(t))throw Error(pe(299));var n=!1,i="",r=Bv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ih(t,1,!1,null,null,n,!1,i,r),t[Ci]=e.current,ta(t.nodeType===8?t.parentNode:t),new sh(e)};Rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(pe(188)):(t=Object.keys(t).join(","),Error(pe(268,t)));return t=l0(e),t=t===null?null:t.stateNode,t};Rn.flushSync=function(t){return Gr(t)};Rn.hydrate=function(t,e,n){if(!Ru(e))throw Error(pe(200));return Cu(null,t,e,!0,n)};Rn.hydrateRoot=function(t,e,n){if(!oh(t))throw Error(pe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Bv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=kv(e,null,t,1,n??null,r,!1,s,o),t[Ci]=e.current,ta(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Au(e)};Rn.render=function(t,e,n){if(!Ru(e))throw Error(pe(200));return Cu(null,t,e,!1,n)};Rn.unmountComponentAtNode=function(t){if(!Ru(t))throw Error(pe(40));return t._reactRootContainer?(Gr(function(){Cu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ci]=null})}),!0):!1};Rn.unstable_batchedUpdates=Qd;Rn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ru(n))throw Error(pe(200));if(t==null||t._reactInternals===void 0)throw Error(pe(38));return Cu(t,e,n,!1,i)};Rn.version="18.3.1-next-f1338f8080-20240426";function Hv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hv)}catch(t){console.error(t)}}Hv(),Hg.exports=Rn;var RS=Hg.exports,Gv,Np=RS;Gv=Np.createRoot,Np.hydrateRoot;async function ao(t,e){const n=await fetch(t,{credentials:"include",...e});let i=null;try{i=await n.json()}catch{}return{ok:n.ok,status:n.status,data:i}}function CS(){return ao("/api/me")}function bS(){return ao("/api/me?view=engineer&list=1")}function PS(t){return ao("/api/me?view=engineer&projectId="+encodeURIComponent(t))}function LS(t,e){return ao("/api/me",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"engineer_save",projectId:t||void 0,project:e})})}function DS(t){return ao("/api/me",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"engineer_delete",projectId:t})})}function IS(){return ao("/api/create-checkout-session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({kind:"engineer",plan:"annual",return_page:"engineers/index.html"})})}function NS({status:t,t:e}){const[n,i]=Ie.useState(!1),[r,s]=Ie.useState(null);async function o(){i(!0),s(null);const l=await IS();if(l.status===401){window.location.href="/lamsa-auth.html";return}if(!l.ok||!l.data||!l.data.url){s(l.data&&l.data.error||e("Something went wrong, please try again")),i(!1);return}window.location.href=l.data.url}const a=t==="canceled"||t==="past_due"||t==="unpaid";return Ee.jsxs("div",{style:{maxWidth:480,margin:"80px auto",padding:24,textAlign:"center",fontFamily:"sans-serif"},children:[Ee.jsx("h1",{style:{fontSize:24,fontWeight:900,marginBottom:8},children:e("Lamsa Engineers")}),Ee.jsx("p",{style:{color:"#6b7280",marginBottom:24},children:e(a?"Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Design complete floor plans, preview them in 3D, and export real architectural deliverables.")}),Ee.jsxs("ul",{style:{textAlign:"start",listStyle:"none",padding:0,marginBottom:28,color:"#374151",fontSize:14},children:[Ee.jsxs("li",{children:["— ",e("Rectangular rooms, doors & windows, single-floor plans")]}),Ee.jsxs("li",{children:["— ",e("Live 3D preview of your design")]}),Ee.jsxs("li",{children:["— ",e("Printable floor plan export")]}),Ee.jsxs("li",{children:["— ",e("Use Lamsa's existing furniture-styling tools per room")]})]}),Ee.jsxs("div",{style:{fontSize:28,fontWeight:900,marginBottom:4},children:["$250",Ee.jsxs("span",{style:{fontSize:14,fontWeight:600,color:"#6b7280"},children:[" ",e("/ year")]})]}),Ee.jsx("div",{style:{fontSize:13,color:"#6b7280",marginBottom:20},children:e("14-day free trial, cancel anytime")}),Ee.jsx("button",{type:"button",onClick:o,disabled:n,style:{width:"100%",background:"#c9a96e",color:"#1b1e22",border:"none",padding:16,borderRadius:14,fontSize:16,fontWeight:900,cursor:"pointer",opacity:n?.6:1},children:e(n?"Starting…":"Start free trial")}),r&&Ee.jsx("div",{style:{color:"#e05555",fontSize:13,marginTop:10},children:r})]})}function US({projects:t,onOpen:e,onCreate:n,onDelete:i,t:r}){return Ee.jsxs("div",{style:{maxWidth:720,margin:"40px auto",padding:24,fontFamily:"sans-serif"},children:[Ee.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20},children:[Ee.jsx("h1",{style:{fontSize:22,fontWeight:900},children:r("Your Projects")}),Ee.jsxs("button",{type:"button",onClick:n,style:{background:"#c9a96e",color:"#1b1e22",border:"none",padding:"10px 18px",borderRadius:10,fontWeight:800,cursor:"pointer"},children:["+ ",r("New Project")]})]}),t.length===0&&Ee.jsx("div",{style:{color:"#6b7280",textAlign:"center",padding:40},children:r("No projects yet — create your first one.")}),Ee.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:14},children:t.map(s=>Ee.jsxs("div",{style:{border:"1px solid #e5e7eb",borderRadius:12,padding:16,cursor:"pointer"},onClick:()=>e(s.id),children:[Ee.jsx("div",{style:{fontWeight:800,marginBottom:6},children:s.name}),Ee.jsx("div",{style:{fontSize:12,color:"#9ca3af",marginBottom:10},children:s.updatedAt?new Date(s.updatedAt).toLocaleDateString():""}),Ee.jsx("button",{type:"button",onClick:o=>{o.stopPropagation(),i(s.id)},style:{fontSize:12,color:"#e05555",background:"none",border:"none",cursor:"pointer",padding:0},children:r("Delete")})]},s.id))})]})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ah="160",FS=0,Up=1,OS=2,Vv=1,Wv=2,vi=3,ur=0,vn=1,fn=2,nr=0,Gs=1,Fp=2,Op=3,zp=4,zS=5,Tr=100,kS=101,BS=102,kp=103,Bp=104,HS=200,GS=201,VS=202,WS=203,qf=204,Kf=205,XS=206,jS=207,YS=208,$S=209,qS=210,KS=211,ZS=212,JS=213,QS=214,eE=0,tE=1,nE=2,iu=3,iE=4,rE=5,sE=6,oE=7,Xv=0,aE=1,lE=2,ir=0,uE=1,cE=2,fE=3,dE=4,hE=5,pE=6,jv=300,Js=301,Qs=302,Zf=303,Jf=304,bu=306,Vr=1e3,Zn=1001,Qf=1002,on=1003,Hp=1004,mc=1005,In=1006,mE=1007,ca=1008,rr=1009,gE=1010,vE=1011,lh=1012,Yv=1013,Xi=1014,ji=1015,fa=1016,$v=1017,qv=1018,Ur=1020,_E=1021,Jn=1023,xE=1024,yE=1025,Fr=1026,eo=1027,SE=1028,Kv=1029,EE=1030,Zv=1031,Jv=1033,gc=33776,vc=33777,_c=33778,xc=33779,Gp=35840,Vp=35841,Wp=35842,Xp=35843,Qv=36196,jp=37492,Yp=37496,$p=37808,qp=37809,Kp=37810,Zp=37811,Jp=37812,Qp=37813,em=37814,tm=37815,nm=37816,im=37817,rm=37818,sm=37819,om=37820,am=37821,yc=36492,lm=36494,um=36495,ME=36283,cm=36284,fm=36285,dm=36286,e_=3e3,Or=3001,wE=3200,TE=3201,t_=0,AE=1,Fn="",Gt="srgb",Li="srgb-linear",uh="display-p3",Pu="display-p3-linear",ru="linear",at="srgb",su="rec709",ou="p3",Qr=7680,hm=519,RE=512,CE=513,bE=514,n_=515,PE=516,LE=517,DE=518,IE=519,ed=35044,pm="300 es",td=1035,wi=2e3,au=2001;class lo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sc=Math.PI/180,nd=180/Math.PI;function Ai(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[t&255]+$t[t>>8&255]+$t[t>>16&255]+$t[t>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[n&63|128]+$t[n>>8&255]+"-"+$t[n>>16&255]+$t[n>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function Jt(t,e,n){return Math.max(e,Math.min(n,t))}function NE(t,e){return(t%e+e)%e}function Ec(t,e,n){return(1-n)*t+n*e}function mm(t){return(t&t-1)===0&&t!==0}function id(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function yi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function tt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class me{constructor(e=0,n=0){me.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,n,i,r,s,o,a,l,u){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],h=i[7],d=i[2],m=i[5],g=i[8],x=r[0],v=r[3],f=r[6],_=r[1],p=r[4],y=r[7],R=r[2],S=r[5],T=r[8];return s[0]=o*x+a*_+l*R,s[3]=o*v+a*p+l*S,s[6]=o*f+a*y+l*T,s[1]=u*x+c*_+h*R,s[4]=u*v+c*p+h*S,s[7]=u*f+c*y+h*T,s[2]=d*x+m*_+g*R,s[5]=d*v+m*p+g*S,s[8]=d*f+m*y+g*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=c*o-a*u,d=a*l-c*s,m=u*s-o*l,g=n*h+i*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(r*u-c*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(c*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=m*x,e[7]=(i*l-u*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Mc.makeScale(e,n)),this}rotate(e){return this.premultiply(Mc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Mc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mc=new Ye;function i_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function lu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function UE(){const t=lu("canvas");return t.style.display="block",t}const gm={};function Vo(t){t in gm||(gm[t]=!0,console.warn(t))}const vm=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),_m=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ga={[Li]:{transfer:ru,primaries:su,toReference:t=>t,fromReference:t=>t},[Gt]:{transfer:at,primaries:su,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Pu]:{transfer:ru,primaries:ou,toReference:t=>t.applyMatrix3(_m),fromReference:t=>t.applyMatrix3(vm)},[uh]:{transfer:at,primaries:ou,toReference:t=>t.convertSRGBToLinear().applyMatrix3(_m),fromReference:t=>t.applyMatrix3(vm).convertLinearToSRGB()}},FE=new Set([Li,Pu]),et={enabled:!0,_workingColorSpace:Li,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!FE.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ga[e].toReference,r=Ga[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ga[t].primaries},getTransfer:function(t){return t===Fn?ru:Ga[t].transfer}};function Vs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function wc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let es;class r_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{es===void 0&&(es=lu("canvas")),es.width=e.width,es.height=e.height;const i=es.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=es}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=lu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Vs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Vs(n[i]/255)*255):n[i]=Vs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let OE=0;class s_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:OE++}),this.uuid=Ai(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Tc(r[o].image)):s.push(Tc(r[o]))}else s=Tc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Tc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?r_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zE=0;class _n extends lo{constructor(e=_n.DEFAULT_IMAGE,n=_n.DEFAULT_MAPPING,i=Zn,r=Zn,s=In,o=ca,a=Jn,l=rr,u=_n.DEFAULT_ANISOTROPY,c=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=Ai(),this.name="",this.source=new s_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Vo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Or?Gt:Fn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vr:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case Qf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vr:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case Qf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Vo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Gt?Or:e_}set encoding(e){Vo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Or?Gt:Fn}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=jv;_n.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,n=0,i=0,r=1){Ft.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],h=l[8],d=l[1],m=l[5],g=l[9],x=l[2],v=l[6],f=l[10];if(Math.abs(c-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-v)<.01){if(Math.abs(c+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+v)<.1&&Math.abs(u+m+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const p=(u+1)/2,y=(m+1)/2,R=(f+1)/2,S=(c+d)/4,T=(h+x)/4,P=(g+v)/4;return p>y&&p>R?p<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(p),r=S/i,s=T/i):y>R?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=S/r,s=P/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=T/s,r=P/s),this.set(i,r,s,n),this}let _=Math.sqrt((v-g)*(v-g)+(h-x)*(h-x)+(d-c)*(d-c));return Math.abs(_)<.001&&(_=1),this.x=(v-g)/_,this.y=(h-x)/_,this.z=(d-c)/_,this.w=Math.acos((u+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kE extends lo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ft(0,0,e,n),this.scissorTest=!1,this.viewport=new Ft(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Vo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Or?Gt:Fn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new _n(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new s_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wr extends kE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class o_ extends _n{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class BE extends _n{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],h=i[r+3];const d=s[o+0],m=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=m,e[n+2]=g,e[n+3]=x;return}if(h!==x||l!==d||u!==m||c!==g){let v=1-a;const f=l*d+u*m+c*g+h*x,_=f>=0?1:-1,p=1-f*f;if(p>Number.EPSILON){const R=Math.sqrt(p),S=Math.atan2(R,f*_);v=Math.sin(v*S)/R,a=Math.sin(a*S)/R}const y=a*_;if(l=l*v+d*y,u=u*v+m*y,c=c*v+g*y,h=h*v+x*y,v===1-a){const R=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=R,u*=R,c*=R,h*=R}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],h=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return e[n]=a*g+c*h+l*m-u*d,e[n+1]=l*g+c*d+u*h-a*m,e[n+2]=u*g+c*m+a*d-l*h,e[n+3]=c*g-a*h-l*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),h=a(s/2),d=l(i/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*c*h+u*m*g,this._y=u*m*h-d*c*g,this._z=u*c*g+d*m*h,this._w=u*c*h-d*m*g;break;case"YXZ":this._x=d*c*h+u*m*g,this._y=u*m*h-d*c*g,this._z=u*c*g-d*m*h,this._w=u*c*h+d*m*g;break;case"ZXY":this._x=d*c*h-u*m*g,this._y=u*m*h+d*c*g,this._z=u*c*g+d*m*h,this._w=u*c*h-d*m*g;break;case"ZYX":this._x=d*c*h-u*m*g,this._y=u*m*h+d*c*g,this._z=u*c*g-d*m*h,this._w=u*c*h+d*m*g;break;case"YZX":this._x=d*c*h+u*m*g,this._y=u*m*h+d*c*g,this._z=u*c*g-d*m*h,this._w=u*c*h-d*m*g;break;case"XZY":this._x=d*c*h-u*m*g,this._y=u*m*h-d*c*g,this._z=u*c*g+d*m*h,this._w=u*c*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],h=n[10],d=i+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(c-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-n)*c)/u,d=Math.sin(n*c)/u;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(xm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(xm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*u+o*h-a*c,this.y=i+l*c+a*u-s*h,this.z=r+l*h+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ac.copy(this).projectOnVector(e),this.sub(Ac)}reflect(e){return this.sub(Ac.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ac=new F,xm=new Sa;class Ea{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Xn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Xn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Xn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xn):Xn.fromBufferAttribute(s,o),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Va.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Va.copy(i.boundingBox)),Va.applyMatrix4(e.matrixWorld),this.union(Va)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Eo),Wa.subVectors(this.max,Eo),ts.subVectors(e.a,Eo),ns.subVectors(e.b,Eo),is.subVectors(e.c,Eo),Ni.subVectors(ns,ts),Ui.subVectors(is,ns),mr.subVectors(ts,is);let n=[0,-Ni.z,Ni.y,0,-Ui.z,Ui.y,0,-mr.z,mr.y,Ni.z,0,-Ni.x,Ui.z,0,-Ui.x,mr.z,0,-mr.x,-Ni.y,Ni.x,0,-Ui.y,Ui.x,0,-mr.y,mr.x,0];return!Rc(n,ts,ns,is,Wa)||(n=[1,0,0,0,1,0,0,0,1],!Rc(n,ts,ns,is,Wa))?!1:(Xa.crossVectors(Ni,Ui),n=[Xa.x,Xa.y,Xa.z],Rc(n,ts,ns,is,Wa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const di=[new F,new F,new F,new F,new F,new F,new F,new F],Xn=new F,Va=new Ea,ts=new F,ns=new F,is=new F,Ni=new F,Ui=new F,mr=new F,Eo=new F,Wa=new F,Xa=new F,gr=new F;function Rc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){gr.fromArray(t,s);const a=r.x*Math.abs(gr.x)+r.y*Math.abs(gr.y)+r.z*Math.abs(gr.z),l=e.dot(gr),u=n.dot(gr),c=i.dot(gr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const HE=new Ea,Mo=new F,Cc=new F;class Lu{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):HE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mo.subVectors(e,this.center);const n=Mo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Mo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mo.copy(e.center).add(Cc)),this.expandByPoint(Mo.copy(e.center).sub(Cc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hi=new F,bc=new F,ja=new F,Fi=new F,Pc=new F,Ya=new F,Lc=new F;class a_{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=hi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,n),hi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){bc.copy(e).add(n).multiplyScalar(.5),ja.copy(n).sub(e).normalize(),Fi.copy(this.origin).sub(bc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ja),a=Fi.dot(this.direction),l=-Fi.dot(ja),u=Fi.lengthSq(),c=Math.abs(1-o*o);let h,d,m,g;if(c>0)if(h=o*l-a,d=o*a-l,g=s*c,h>=0)if(d>=-g)if(d<=g){const x=1/c;h*=x,d*=x,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+u}else d=s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;else d=-s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+u):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+u):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+u);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(bc).addScaledVector(ja,d),m}intersectSphere(e,n){hi.subVectors(e.center,this.origin);const i=hi.dot(this.direction),r=hi.dot(hi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,n,i,r,s){Pc.subVectors(n,e),Ya.subVectors(i,e),Lc.crossVectors(Pc,Ya);let o=this.direction.dot(Lc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fi.subVectors(this.origin,e);const l=a*this.direction.dot(Ya.crossVectors(Fi,Ya));if(l<0)return null;const u=a*this.direction.dot(Pc.cross(Fi));if(u<0||l+u>o)return null;const c=-a*Fi.dot(Lc);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,n,i,r,s,o,a,l,u,c,h,d,m,g,x,v){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,h,d,m,g,x,v)}set(e,n,i,r,s,o,a,l,u,c,h,d,m,g,x,v){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=h,f[14]=d,f[3]=m,f[7]=g,f[11]=x,f[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/rs.setFromMatrixColumn(e,0).length(),s=1/rs.setFromMatrixColumn(e,1).length(),o=1/rs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*c,m=o*h,g=a*c,x=a*h;n[0]=l*c,n[4]=-l*h,n[8]=u,n[1]=m+g*u,n[5]=d-x*u,n[9]=-a*l,n[2]=x-d*u,n[6]=g+m*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*c,m=l*h,g=u*c,x=u*h;n[0]=d+x*a,n[4]=g*a-m,n[8]=o*u,n[1]=o*h,n[5]=o*c,n[9]=-a,n[2]=m*a-g,n[6]=x+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*c,m=l*h,g=u*c,x=u*h;n[0]=d-x*a,n[4]=-o*h,n[8]=g+m*a,n[1]=m+g*a,n[5]=o*c,n[9]=x-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*c,m=o*h,g=a*c,x=a*h;n[0]=l*c,n[4]=g*u-m,n[8]=d*u+x,n[1]=l*h,n[5]=x*u+d,n[9]=m*u-g,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*u,g=a*l,x=a*u;n[0]=l*c,n[4]=x-d*h,n[8]=g*h+m,n[1]=h,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=m*h+g,n[10]=d-x*h}else if(e.order==="XZY"){const d=o*l,m=o*u,g=a*l,x=a*u;n[0]=l*c,n[4]=-h,n[8]=u*c,n[1]=d*h+x,n[5]=o*c,n[9]=m*h-g,n[2]=g*h-m,n[6]=a*c,n[10]=x*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(GE,e,VE)}lookAt(e,n,i){const r=this.elements;return yn.subVectors(e,n),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Oi.crossVectors(i,yn),Oi.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Oi.crossVectors(i,yn)),Oi.normalize(),$a.crossVectors(yn,Oi),r[0]=Oi.x,r[4]=$a.x,r[8]=yn.x,r[1]=Oi.y,r[5]=$a.y,r[9]=yn.y,r[2]=Oi.z,r[6]=$a.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],h=i[5],d=i[9],m=i[13],g=i[2],x=i[6],v=i[10],f=i[14],_=i[3],p=i[7],y=i[11],R=i[15],S=r[0],T=r[4],P=r[8],E=r[12],w=r[1],N=r[5],B=r[9],te=r[13],L=r[2],H=r[6],G=r[10],ee=r[14],I=r[3],O=r[7],V=r[11],ne=r[15];return s[0]=o*S+a*w+l*L+u*I,s[4]=o*T+a*N+l*H+u*O,s[8]=o*P+a*B+l*G+u*V,s[12]=o*E+a*te+l*ee+u*ne,s[1]=c*S+h*w+d*L+m*I,s[5]=c*T+h*N+d*H+m*O,s[9]=c*P+h*B+d*G+m*V,s[13]=c*E+h*te+d*ee+m*ne,s[2]=g*S+x*w+v*L+f*I,s[6]=g*T+x*N+v*H+f*O,s[10]=g*P+x*B+v*G+f*V,s[14]=g*E+x*te+v*ee+f*ne,s[3]=_*S+p*w+y*L+R*I,s[7]=_*T+p*N+y*H+R*O,s[11]=_*P+p*B+y*G+R*V,s[15]=_*E+p*te+y*ee+R*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],h=e[6],d=e[10],m=e[14],g=e[3],x=e[7],v=e[11],f=e[15];return g*(+s*l*h-r*u*h-s*a*d+i*u*d+r*a*m-i*l*m)+x*(+n*l*m-n*u*d+s*o*d-r*o*m+r*u*c-s*l*c)+v*(+n*u*h-n*a*m-s*o*h+i*o*m+s*a*c-i*u*c)+f*(-r*a*c-n*l*h+n*a*d+r*o*h-i*o*d+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=e[9],d=e[10],m=e[11],g=e[12],x=e[13],v=e[14],f=e[15],_=h*v*u-x*d*u+x*l*m-a*v*m-h*l*f+a*d*f,p=g*d*u-c*v*u-g*l*m+o*v*m+c*l*f-o*d*f,y=c*x*u-g*h*u+g*a*m-o*x*m-c*a*f+o*h*f,R=g*h*l-c*x*l-g*a*d+o*x*d+c*a*v-o*h*v,S=n*_+i*p+r*y+s*R;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/S;return e[0]=_*T,e[1]=(x*d*s-h*v*s-x*r*m+i*v*m+h*r*f-i*d*f)*T,e[2]=(a*v*s-x*l*s+x*r*u-i*v*u-a*r*f+i*l*f)*T,e[3]=(h*l*s-a*d*s-h*r*u+i*d*u+a*r*m-i*l*m)*T,e[4]=p*T,e[5]=(c*v*s-g*d*s+g*r*m-n*v*m-c*r*f+n*d*f)*T,e[6]=(g*l*s-o*v*s-g*r*u+n*v*u+o*r*f-n*l*f)*T,e[7]=(o*d*s-c*l*s+c*r*u-n*d*u-o*r*m+n*l*m)*T,e[8]=y*T,e[9]=(g*h*s-c*x*s-g*i*m+n*x*m+c*i*f-n*h*f)*T,e[10]=(o*x*s-g*a*s+g*i*u-n*x*u-o*i*f+n*a*f)*T,e[11]=(c*a*s-o*h*s-c*i*u+n*h*u+o*i*m-n*a*m)*T,e[12]=R*T,e[13]=(c*x*r-g*h*r+g*i*d-n*x*d-c*i*v+n*h*v)*T,e[14]=(g*a*r-o*x*r-g*i*l+n*x*l+o*i*v-n*a*v)*T,e[15]=(o*h*r-c*a*r+c*i*l-n*h*l-o*i*d+n*a*d)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,h=a+a,d=s*u,m=s*c,g=s*h,x=o*c,v=o*h,f=a*h,_=l*u,p=l*c,y=l*h,R=i.x,S=i.y,T=i.z;return r[0]=(1-(x+f))*R,r[1]=(m+y)*R,r[2]=(g-p)*R,r[3]=0,r[4]=(m-y)*S,r[5]=(1-(d+f))*S,r[6]=(v+_)*S,r[7]=0,r[8]=(g+p)*T,r[9]=(v-_)*T,r[10]=(1-(d+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=rs.set(r[0],r[1],r[2]).length();const o=rs.set(r[4],r[5],r[6]).length(),a=rs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],jn.copy(this);const u=1/s,c=1/o,h=1/a;return jn.elements[0]*=u,jn.elements[1]*=u,jn.elements[2]*=u,jn.elements[4]*=c,jn.elements[5]*=c,jn.elements[6]*=c,jn.elements[8]*=h,jn.elements[9]*=h,jn.elements[10]*=h,n.setFromRotationMatrix(jn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=wi){const l=this.elements,u=2*s/(n-e),c=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let m,g;if(a===wi)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===au)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=wi){const l=this.elements,u=1/(n-e),c=1/(i-r),h=1/(o-s),d=(n+e)*u,m=(i+r)*c;let g,x;if(a===wi)g=(o+s)*h,x=-2*h;else if(a===au)g=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const rs=new F,jn=new yt,GE=new F(0,0,0),VE=new F(1,1,1),Oi=new F,$a=new F,yn=new F,ym=new yt,Sm=new Sa;class Du{constructor(e=0,n=0,i=0,r=Du.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],h=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ym.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ym,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Sm.setFromEuler(this),this.setFromQuaternion(Sm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Du.DEFAULT_ORDER="XYZ";class l_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let WE=0;const Em=new F,ss=new Sa,pi=new yt,qa=new F,wo=new F,XE=new F,jE=new Sa,Mm=new F(1,0,0),wm=new F(0,1,0),Tm=new F(0,0,1),YE={type:"added"},$E={type:"removed"};class bt extends lo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new F,n=new Du,i=new Sa,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new Ye}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new l_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ss.setFromAxisAngle(e,n),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,n){return ss.setFromAxisAngle(e,n),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(Mm,e)}rotateY(e){return this.rotateOnAxis(wm,e)}rotateZ(e){return this.rotateOnAxis(Tm,e)}translateOnAxis(e,n){return Em.copy(e).applyQuaternion(this.quaternion),this.position.add(Em.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Mm,e)}translateY(e){return this.translateOnAxis(wm,e)}translateZ(e){return this.translateOnAxis(Tm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?qa.copy(e):qa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(wo,qa,this.up):pi.lookAt(qa,wo,this.up),this.quaternion.setFromRotationMatrix(pi),r&&(pi.extractRotation(r.matrixWorld),ss.setFromRotationMatrix(pi),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(YE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent($E)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,e,XE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,jE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}bt.DEFAULT_UP=new F(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new F,mi=new F,Dc=new F,gi=new F,os=new F,as=new F,Am=new F,Ic=new F,Nc=new F,Uc=new F;let Ka=!1;class Nn{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Yn.subVectors(e,n),r.cross(Yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Yn.subVectors(r,n),mi.subVectors(i,n),Dc.subVectors(e,n);const o=Yn.dot(Yn),a=Yn.dot(mi),l=Yn.dot(Dc),u=mi.dot(mi),c=mi.dot(Dc),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(u*l-a*c)*d,g=(o*c-a*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getUV(e,n,i,r,s,o,a,l){return Ka===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ka=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gi.x),l.addScaledVector(o,gi.y),l.addScaledVector(a,gi.z),l)}static isFrontFacing(e,n,i,r){return Yn.subVectors(i,n),mi.subVectors(e,n),Yn.cross(mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Yn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Nn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Ka===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ka=!0),Nn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Nn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;os.subVectors(r,i),as.subVectors(s,i),Ic.subVectors(e,i);const l=os.dot(Ic),u=as.dot(Ic);if(l<=0&&u<=0)return n.copy(i);Nc.subVectors(e,r);const c=os.dot(Nc),h=as.dot(Nc);if(c>=0&&h<=c)return n.copy(r);const d=l*h-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(os,o);Uc.subVectors(e,s);const m=os.dot(Uc),g=as.dot(Uc);if(g>=0&&m<=g)return n.copy(s);const x=m*u-l*g;if(x<=0&&u>=0&&g<=0)return a=u/(u-g),n.copy(i).addScaledVector(as,a);const v=c*g-m*h;if(v<=0&&h-c>=0&&m-g>=0)return Am.subVectors(s,r),a=(h-c)/(h-c+(m-g)),n.copy(r).addScaledVector(Am,a);const f=1/(v+x+d);return o=x*f,a=d*f,n.copy(i).addScaledVector(os,o).addScaledVector(as,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const u_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Za={h:0,s:0,l:0};function Fc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Oe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=NE(e,1),n=Jt(n,0,1),i=Jt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Fc(o,s,e+1/3),this.g=Fc(o,s,e),this.b=Fc(o,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=Gt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Gt){const i=u_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}copyLinearToSRGB(e){return this.r=wc(e.r),this.g=wc(e.g),this.b=wc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return et.fromWorkingColorSpace(qt.copy(this),e),Math.round(Jt(qt.r*255,0,255))*65536+Math.round(Jt(qt.g*255,0,255))*256+Math.round(Jt(qt.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace(qt.copy(this),n);const i=qt.r,r=qt.g,s=qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace(qt.copy(this),n),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Gt){et.fromWorkingColorSpace(qt.copy(this),e);const n=qt.r,i=qt.g,r=qt.b;return e!==Gt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+n,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(zi),e.getHSL(Za);const i=Ec(zi.h,Za.h,n),r=Ec(zi.s,Za.s,n),s=Ec(zi.l,Za.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new Oe;Oe.NAMES=u_;let qE=0;class Kr extends lo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qE++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=Gs,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qf,this.blendDst=Kf,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=iu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(i.blending=this.blending),this.side!==ur&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qf&&(i.blendSrc=this.blendSrc),this.blendDst!==Kf&&(i.blendDst=this.blendDst),this.blendEquation!==Tr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==iu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class c_ extends Kr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new F,Ja=new me;class Bn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ed,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ja.fromBufferAttribute(this,n),Ja.applyMatrix3(e),this.setXY(n,Ja.x,Ja.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix3(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix4(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyNormalMatrix(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.transformDirection(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=yi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=tt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=yi(n,this.array)),n}setX(e,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=yi(n,this.array)),n}setY(e,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=yi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=yi(n,this.array)),n}setW(e,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=tt(n,this.array),i=tt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array),s=tt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ed&&(e.usage=this.usage),e}}class f_ extends Bn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class d_ extends Bn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Tn extends Bn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let KE=0;const Pn=new yt,Oc=new bt,ls=new F,Sn=new Ea,To=new Ea,Nt=new F;class Vn extends lo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(i_(e)?d_:f_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,n,i){return Pn.makeTranslation(e,n,i),this.applyMatrix4(Pn),this}scale(e,n,i){return Pn.makeScale(e,n,i),this.applyMatrix4(Pn),this}lookAt(e){return Oc.lookAt(e),Oc.updateMatrix(),this.applyMatrix4(Oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Tn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ea);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];To.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(Sn.min,To.min),Sn.expandByPoint(Nt),Nt.addVectors(Sn.max,To.max),Sn.expandByPoint(Nt)):(Sn.expandByPoint(To.min),Sn.expandByPoint(To.max))}Sn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Nt.fromBufferAttribute(a,u),l&&(ls.fromBufferAttribute(e,u),Nt.add(ls)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let w=0;w<a;w++)u[w]=new F,c[w]=new F;const h=new F,d=new F,m=new F,g=new me,x=new me,v=new me,f=new F,_=new F;function p(w,N,B){h.fromArray(r,w*3),d.fromArray(r,N*3),m.fromArray(r,B*3),g.fromArray(o,w*2),x.fromArray(o,N*2),v.fromArray(o,B*2),d.sub(h),m.sub(h),x.sub(g),v.sub(g);const te=1/(x.x*v.y-v.x*x.y);isFinite(te)&&(f.copy(d).multiplyScalar(v.y).addScaledVector(m,-x.y).multiplyScalar(te),_.copy(m).multiplyScalar(x.x).addScaledVector(d,-v.x).multiplyScalar(te),u[w].add(f),u[N].add(f),u[B].add(f),c[w].add(_),c[N].add(_),c[B].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let w=0,N=y.length;w<N;++w){const B=y[w],te=B.start,L=B.count;for(let H=te,G=te+L;H<G;H+=3)p(i[H+0],i[H+1],i[H+2])}const R=new F,S=new F,T=new F,P=new F;function E(w){T.fromArray(s,w*3),P.copy(T);const N=u[w];R.copy(N),R.sub(T.multiplyScalar(T.dot(N))).normalize(),S.crossVectors(P,N);const te=S.dot(c[w])<0?-1:1;l[w*4]=R.x,l[w*4+1]=R.y,l[w*4+2]=R.z,l[w*4+3]=te}for(let w=0,N=y.length;w<N;++w){const B=y[w],te=B.start,L=B.count;for(let H=te,G=te+L;H<G;H+=3)E(i[H+0]),E(i[H+1]),E(i[H+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,u=new F,c=new F,h=new F;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),x=e.getX(d+1),v=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,v),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,v),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(v,u.x,u.y,u.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,h=a.normalized,d=new u.constructor(l.length*c);let m=0,g=0;for(let x=0,v=l.length;x<v;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*c;for(let f=0;f<c;f++)d[g++]=u[m++]}return new Bn(d,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Vn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,h=u.length;c<h;c++){const d=u[c],m=e(d,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,d=u.length;h<d;h++){const m=u[h];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],h=s[u];for(let d=0,m=h.length;d<m;d++)c.push(h[d].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rm=new yt,vr=new a_,Qa=new Lu,Cm=new F,us=new F,cs=new F,fs=new F,zc=new F,el=new F,tl=new me,nl=new me,il=new me,bm=new F,Pm=new F,Lm=new F,rl=new F,sl=new F;class zn extends bt{constructor(e=new Vn,n=new c_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){el.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],h=s[l];c!==0&&(zc.fromBufferAttribute(h,e),o?el.addScaledVector(zc,c):el.addScaledVector(zc.sub(n),c))}n.add(el)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qa.copy(i.boundingSphere),Qa.applyMatrix4(s),vr.copy(e.ray).recast(e.near),!(Qa.containsPoint(vr.origin)===!1&&(vr.intersectSphere(Qa,Cm)===null||vr.origin.distanceToSquared(Cm)>(e.far-e.near)**2))&&(Rm.copy(s).invert(),vr.copy(e.ray).applyMatrix4(Rm),!(i.boundingBox!==null&&vr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,vr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const v=d[g],f=o[v.materialIndex],_=Math.max(v.start,m.start),p=Math.min(a.count,Math.min(v.start+v.count,m.start+m.count));for(let y=_,R=p;y<R;y+=3){const S=a.getX(y),T=a.getX(y+1),P=a.getX(y+2);r=ol(this,f,e,i,u,c,h,S,T,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let v=g,f=x;v<f;v+=3){const _=a.getX(v),p=a.getX(v+1),y=a.getX(v+2);r=ol(this,o,e,i,u,c,h,_,p,y),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const v=d[g],f=o[v.materialIndex],_=Math.max(v.start,m.start),p=Math.min(l.count,Math.min(v.start+v.count,m.start+m.count));for(let y=_,R=p;y<R;y+=3){const S=y,T=y+1,P=y+2;r=ol(this,f,e,i,u,c,h,S,T,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let v=g,f=x;v<f;v+=3){const _=v,p=v+1,y=v+2;r=ol(this,o,e,i,u,c,h,_,p,y),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}}function ZE(t,e,n,i,r,s,o,a){let l;if(e.side===vn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ur,a),l===null)return null;sl.copy(a),sl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(sl);return u<n.near||u>n.far?null:{distance:u,point:sl.clone(),object:t}}function ol(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,us),t.getVertexPosition(l,cs),t.getVertexPosition(u,fs);const c=ZE(t,e,n,i,us,cs,fs,rl);if(c){r&&(tl.fromBufferAttribute(r,a),nl.fromBufferAttribute(r,l),il.fromBufferAttribute(r,u),c.uv=Nn.getInterpolation(rl,us,cs,fs,tl,nl,il,new me)),s&&(tl.fromBufferAttribute(s,a),nl.fromBufferAttribute(s,l),il.fromBufferAttribute(s,u),c.uv1=Nn.getInterpolation(rl,us,cs,fs,tl,nl,il,new me),c.uv2=c.uv1),o&&(bm.fromBufferAttribute(o,a),Pm.fromBufferAttribute(o,l),Lm.fromBufferAttribute(o,u),c.normal=Nn.getInterpolation(rl,us,cs,fs,bm,Pm,Lm,new F),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new F,materialIndex:0};Nn.getNormal(us,cs,fs,h.normal),c.face=h}return c}class Zr extends Vn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Tn(u,3)),this.setAttribute("normal",new Tn(c,3)),this.setAttribute("uv",new Tn(h,2));function g(x,v,f,_,p,y,R,S,T,P,E){const w=y/T,N=R/P,B=y/2,te=R/2,L=S/2,H=T+1,G=P+1;let ee=0,I=0;const O=new F;for(let V=0;V<G;V++){const ne=V*N-te;for(let oe=0;oe<H;oe++){const Y=oe*w-B;O[x]=Y*_,O[v]=ne*p,O[f]=L,u.push(O.x,O.y,O.z),O[x]=0,O[v]=0,O[f]=S>0?1:-1,c.push(O.x,O.y,O.z),h.push(oe/T),h.push(1-V/P),ee+=1}}for(let V=0;V<P;V++)for(let ne=0;ne<T;ne++){const oe=d+ne+H*V,Y=d+ne+H*(V+1),se=d+(ne+1)+H*(V+1),X=d+(ne+1)+H*V;l.push(oe,Y,X),l.push(Y,se,X),I+=6}a.addGroup(m,I,E),m+=I,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function to(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function rn(t){const e={};for(let n=0;n<t.length;n++){const i=to(t[n]);for(const r in i)e[r]=i[r]}return e}function JE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function h_(t){return t.getRenderTarget()===null?t.outputColorSpace:et.workingColorSpace}const QE={clone:to,merge:rn};var eM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xr extends Kr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eM,this.fragmentShader=tM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=to(e.uniforms),this.uniformsGroups=JE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class p_ extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=wi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Un extends p_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=nd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nd*2*Math.atan(Math.tan(Sc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Sc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ds=-90,hs=1;class nM extends bt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Un(ds,hs,e,n);r.layers=this.layers,this.add(r);const s=new Un(ds,hs,e,n);s.layers=this.layers,this.add(s);const o=new Un(ds,hs,e,n);o.layers=this.layers,this.add(o);const a=new Un(ds,hs,e,n);a.layers=this.layers,this.add(a);const l=new Un(ds,hs,e,n);l.layers=this.layers,this.add(l);const u=new Un(ds,hs,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===wi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===au)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(h,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class m_ extends _n{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:Js,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class iM extends Wr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Vo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Or?Gt:Fn),this.texture=new m_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:In}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Zr(5,5,5),s=new Xr({name:"CubemapFromEquirect",uniforms:to(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:nr});s.uniforms.tEquirect.value=n;const o=new zn(r,s),a=n.minFilter;return n.minFilter===ca&&(n.minFilter=In),new nM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const kc=new F,rM=new F,sM=new Ye;class Er{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=kc.subVectors(i,n).cross(rM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(kc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||sM.getNormalMatrix(e),r=this.coplanarPoint(kc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new Lu,al=new F;class ch{constructor(e=new Er,n=new Er,i=new Er,r=new Er,s=new Er,o=new Er){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=wi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],h=r[6],d=r[7],m=r[8],g=r[9],x=r[10],v=r[11],f=r[12],_=r[13],p=r[14],y=r[15];if(i[0].setComponents(l-s,d-u,v-m,y-f).normalize(),i[1].setComponents(l+s,d+u,v+m,y+f).normalize(),i[2].setComponents(l+o,d+c,v+g,y+_).normalize(),i[3].setComponents(l-o,d-c,v-g,y-_).normalize(),i[4].setComponents(l-a,d-h,v-x,y-p).normalize(),n===wi)i[5].setComponents(l+a,d+h,v+x,y+p).normalize();else if(n===au)i[5].setComponents(a,h,x,p).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(e){return _r.center.set(0,0,0),_r.radius=.7071067811865476,_r.applyMatrix4(e.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(al.x=r.normal.x>0?e.max.x:e.min.x,al.y=r.normal.y>0?e.max.y:e.min.y,al.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(al)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function g_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function oM(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const h=u.array,d=u.usage,m=h.byteLength,g=t.createBuffer();t.bindBuffer(c,g),t.bufferData(c,h,d),u.onUploadCallback();let x;if(h instanceof Float32Array)x=t.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=t.SHORT;else if(h instanceof Uint32Array)x=t.UNSIGNED_INT;else if(h instanceof Int32Array)x=t.INT;else if(h instanceof Int8Array)x=t.BYTE;else if(h instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:m}}function s(u,c,h){const d=c.array,m=c._updateRange,g=c.updateRanges;if(t.bindBuffer(h,u),m.count===-1&&g.length===0&&t.bufferSubData(h,0,d),g.length!==0){for(let x=0,v=g.length;x<v;x++){const f=g[x];n?t.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):t.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}c.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):t.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);if(h===void 0)i.set(u,r(u,c));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,u,c),h.version=u.version}}return{get:o,remove:a,update:l}}class Iu extends Vn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,h=e/a,d=n/l,m=[],g=[],x=[],v=[];for(let f=0;f<c;f++){const _=f*d-o;for(let p=0;p<u;p++){const y=p*h-s;g.push(y,-_,0),x.push(0,0,1),v.push(p/a),v.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const p=_+u*f,y=_+u*(f+1),R=_+1+u*(f+1),S=_+1+u*f;m.push(p,y,S),m.push(y,R,S)}this.setIndex(m),this.setAttribute("position",new Tn(g,3)),this.setAttribute("normal",new Tn(x,3)),this.setAttribute("uv",new Tn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Iu(e.width,e.height,e.widthSegments,e.heightSegments)}}var aM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lM=`#ifdef USE_ALPHAHASH
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
#endif`,uM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,dM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hM=`#ifdef USE_AOMAP
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
#endif`,pM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mM=`#ifdef USE_BATCHING
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
#endif`,gM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,vM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_M=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yM=`#ifdef USE_IRIDESCENCE
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
#endif`,SM=`#ifdef USE_BUMPMAP
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
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,MM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,AM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,RM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,CM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,bM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,PM=`#define PI 3.141592653589793
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
} // validated`,LM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,DM=`vec3 transformedNormal = objectNormal;
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
#endif`,IM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,UM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,FM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,OM="gl_FragColor = linearToOutputTexel( gl_FragColor );",zM=`
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
}`,kM=`#ifdef USE_ENVMAP
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
#endif`,BM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,HM=`#ifdef USE_ENVMAP
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
#endif`,GM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VM=`#ifdef USE_ENVMAP
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
#endif`,WM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,YM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$M=`#ifdef USE_GRADIENTMAP
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
}`,qM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,KM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,QM=`uniform bool receiveShadow;
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
#endif`,ew=`#ifdef USE_ENVMAP
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
#endif`,tw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sw=`PhysicalMaterial material;
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
#endif`,ow=`struct PhysicalMaterial {
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
}`,aw=`
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
#endif`,lw=`#if defined( RE_IndirectDiffuse )
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
#endif`,uw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,pw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vw=`#if defined( USE_POINTS_UV )
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
#endif`,_w=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sw=`#ifdef USE_MORPHNORMALS
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
#endif`,Ew=`#ifdef USE_MORPHTARGETS
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
#endif`,Mw=`#ifdef USE_MORPHTARGETS
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
#endif`,ww=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Aw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bw=`#ifdef USE_NORMALMAP
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
#endif`,Pw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Iw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ow=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ww=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xw=`float getShadowMask() {
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
}`,jw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yw=`#ifdef USE_SKINNING
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
#endif`,$w=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qw=`#ifdef USE_SKINNING
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
#endif`,Kw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,e1=`#ifdef USE_TRANSMISSION
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
#endif`,t1=`#ifdef USE_TRANSMISSION
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
#endif`,n1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const o1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,a1=`uniform sampler2D t2D;
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
}`,l1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,c1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d1=`#include <common>
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
}`,h1=`#if DEPTH_PACKING == 3200
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
}`,p1=`#define DISTANCE
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
}`,m1=`#define DISTANCE
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
}`,g1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_1=`uniform float scale;
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
}`,x1=`uniform vec3 diffuse;
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
}`,y1=`#include <common>
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
}`,S1=`uniform vec3 diffuse;
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
}`,E1=`#define LAMBERT
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
}`,M1=`#define LAMBERT
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
}`,w1=`#define MATCAP
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
}`,T1=`#define MATCAP
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
}`,A1=`#define NORMAL
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
}`,R1=`#define NORMAL
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
}`,C1=`#define PHONG
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
}`,b1=`#define PHONG
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
}`,P1=`#define STANDARD
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
}`,L1=`#define STANDARD
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
}`,D1=`#define TOON
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
}`,I1=`#define TOON
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
}`,N1=`uniform float size;
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
}`,U1=`uniform vec3 diffuse;
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
}`,F1=`#include <common>
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
}`,O1=`uniform vec3 color;
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
}`,z1=`uniform float rotation;
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
}`,k1=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:aM,alphahash_pars_fragment:lM,alphamap_fragment:uM,alphamap_pars_fragment:cM,alphatest_fragment:fM,alphatest_pars_fragment:dM,aomap_fragment:hM,aomap_pars_fragment:pM,batching_pars_vertex:mM,batching_vertex:gM,begin_vertex:vM,beginnormal_vertex:_M,bsdfs:xM,iridescence_fragment:yM,bumpmap_pars_fragment:SM,clipping_planes_fragment:EM,clipping_planes_pars_fragment:MM,clipping_planes_pars_vertex:wM,clipping_planes_vertex:TM,color_fragment:AM,color_pars_fragment:RM,color_pars_vertex:CM,color_vertex:bM,common:PM,cube_uv_reflection_fragment:LM,defaultnormal_vertex:DM,displacementmap_pars_vertex:IM,displacementmap_vertex:NM,emissivemap_fragment:UM,emissivemap_pars_fragment:FM,colorspace_fragment:OM,colorspace_pars_fragment:zM,envmap_fragment:kM,envmap_common_pars_fragment:BM,envmap_pars_fragment:HM,envmap_pars_vertex:GM,envmap_physical_pars_fragment:ew,envmap_vertex:VM,fog_vertex:WM,fog_pars_vertex:XM,fog_fragment:jM,fog_pars_fragment:YM,gradientmap_pars_fragment:$M,lightmap_fragment:qM,lightmap_pars_fragment:KM,lights_lambert_fragment:ZM,lights_lambert_pars_fragment:JM,lights_pars_begin:QM,lights_toon_fragment:tw,lights_toon_pars_fragment:nw,lights_phong_fragment:iw,lights_phong_pars_fragment:rw,lights_physical_fragment:sw,lights_physical_pars_fragment:ow,lights_fragment_begin:aw,lights_fragment_maps:lw,lights_fragment_end:uw,logdepthbuf_fragment:cw,logdepthbuf_pars_fragment:fw,logdepthbuf_pars_vertex:dw,logdepthbuf_vertex:hw,map_fragment:pw,map_pars_fragment:mw,map_particle_fragment:gw,map_particle_pars_fragment:vw,metalnessmap_fragment:_w,metalnessmap_pars_fragment:xw,morphcolor_vertex:yw,morphnormal_vertex:Sw,morphtarget_pars_vertex:Ew,morphtarget_vertex:Mw,normal_fragment_begin:ww,normal_fragment_maps:Tw,normal_pars_fragment:Aw,normal_pars_vertex:Rw,normal_vertex:Cw,normalmap_pars_fragment:bw,clearcoat_normal_fragment_begin:Pw,clearcoat_normal_fragment_maps:Lw,clearcoat_pars_fragment:Dw,iridescence_pars_fragment:Iw,opaque_fragment:Nw,packing:Uw,premultiplied_alpha_fragment:Fw,project_vertex:Ow,dithering_fragment:zw,dithering_pars_fragment:kw,roughnessmap_fragment:Bw,roughnessmap_pars_fragment:Hw,shadowmap_pars_fragment:Gw,shadowmap_pars_vertex:Vw,shadowmap_vertex:Ww,shadowmask_pars_fragment:Xw,skinbase_vertex:jw,skinning_pars_vertex:Yw,skinning_vertex:$w,skinnormal_vertex:qw,specularmap_fragment:Kw,specularmap_pars_fragment:Zw,tonemapping_fragment:Jw,tonemapping_pars_fragment:Qw,transmission_fragment:e1,transmission_pars_fragment:t1,uv_pars_fragment:n1,uv_pars_vertex:i1,uv_vertex:r1,worldpos_vertex:s1,background_vert:o1,background_frag:a1,backgroundCube_vert:l1,backgroundCube_frag:u1,cube_vert:c1,cube_frag:f1,depth_vert:d1,depth_frag:h1,distanceRGBA_vert:p1,distanceRGBA_frag:m1,equirect_vert:g1,equirect_frag:v1,linedashed_vert:_1,linedashed_frag:x1,meshbasic_vert:y1,meshbasic_frag:S1,meshlambert_vert:E1,meshlambert_frag:M1,meshmatcap_vert:w1,meshmatcap_frag:T1,meshnormal_vert:A1,meshnormal_frag:R1,meshphong_vert:C1,meshphong_frag:b1,meshphysical_vert:P1,meshphysical_frag:L1,meshtoon_vert:D1,meshtoon_frag:I1,points_vert:N1,points_frag:U1,shadow_vert:F1,shadow_frag:O1,sprite_vert:z1,sprite_frag:k1},ve={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},oi={basic:{uniforms:rn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:rn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:rn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:rn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:rn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:rn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:rn([ve.points,ve.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:rn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:rn([ve.common,ve.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:rn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:rn([ve.sprite,ve.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:rn([ve.common,ve.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:rn([ve.lights,ve.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};oi.physical={uniforms:rn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const ll={r:0,b:0,g:0};function B1(t,e,n,i,r,s,o){const a=new Oe(0);let l=s===!0?0:1,u,c,h=null,d=0,m=null;function g(v,f){let _=!1,p=f.isScene===!0?f.background:null;p&&p.isTexture&&(p=(f.backgroundBlurriness>0?n:e).get(p)),p===null?x(a,l):p&&p.isColor&&(x(p,1),_=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),p&&(p.isCubeTexture||p.mapping===bu)?(c===void 0&&(c=new zn(new Zr(1,1,1),new Xr({name:"BackgroundCubeMaterial",uniforms:to(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=p,c.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=et.getTransfer(p.colorSpace)!==at,(h!==p||d!==p.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,h=p,d=p.version,m=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):p&&p.isTexture&&(u===void 0&&(u=new zn(new Iu(2,2),new Xr({name:"BackgroundMaterial",uniforms:to(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=p,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=et.getTransfer(p.colorSpace)!==at,p.matrixAutoUpdate===!0&&p.updateMatrix(),u.material.uniforms.uvTransform.value.copy(p.matrix),(h!==p||d!==p.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,h=p,d=p.version,m=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function x(v,f){v.getRGB(ll,h_(t)),i.buffers.color.setClear(ll.r,ll.g,ll.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(v,f=1){a.set(v),l=f,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,x(a,l)},render:g}}function H1(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=v(null);let u=l,c=!1;function h(L,H,G,ee,I){let O=!1;if(o){const V=x(ee,G,H);u!==V&&(u=V,m(u.object)),O=f(L,ee,G,I),O&&_(L,ee,G,I)}else{const V=H.wireframe===!0;(u.geometry!==ee.id||u.program!==G.id||u.wireframe!==V)&&(u.geometry=ee.id,u.program=G.id,u.wireframe=V,O=!0)}I!==null&&n.update(I,t.ELEMENT_ARRAY_BUFFER),(O||c)&&(c=!1,P(L,H,G,ee),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(I).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(L){return i.isWebGL2?t.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?t.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function x(L,H,G){const ee=G.wireframe===!0;let I=a[L.id];I===void 0&&(I={},a[L.id]=I);let O=I[H.id];O===void 0&&(O={},I[H.id]=O);let V=O[ee];return V===void 0&&(V=v(d()),O[ee]=V),V}function v(L){const H=[],G=[],ee=[];for(let I=0;I<r;I++)H[I]=0,G[I]=0,ee[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:G,attributeDivisors:ee,object:L,attributes:{},index:null}}function f(L,H,G,ee){const I=u.attributes,O=H.attributes;let V=0;const ne=G.getAttributes();for(const oe in ne)if(ne[oe].location>=0){const se=I[oe];let X=O[oe];if(X===void 0&&(oe==="instanceMatrix"&&L.instanceMatrix&&(X=L.instanceMatrix),oe==="instanceColor"&&L.instanceColor&&(X=L.instanceColor)),se===void 0||se.attribute!==X||X&&se.data!==X.data)return!0;V++}return u.attributesNum!==V||u.index!==ee}function _(L,H,G,ee){const I={},O=H.attributes;let V=0;const ne=G.getAttributes();for(const oe in ne)if(ne[oe].location>=0){let se=O[oe];se===void 0&&(oe==="instanceMatrix"&&L.instanceMatrix&&(se=L.instanceMatrix),oe==="instanceColor"&&L.instanceColor&&(se=L.instanceColor));const X={};X.attribute=se,se&&se.data&&(X.data=se.data),I[oe]=X,V++}u.attributes=I,u.attributesNum=V,u.index=ee}function p(){const L=u.newAttributes;for(let H=0,G=L.length;H<G;H++)L[H]=0}function y(L){R(L,0)}function R(L,H){const G=u.newAttributes,ee=u.enabledAttributes,I=u.attributeDivisors;G[L]=1,ee[L]===0&&(t.enableVertexAttribArray(L),ee[L]=1),I[L]!==H&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,H),I[L]=H)}function S(){const L=u.newAttributes,H=u.enabledAttributes;for(let G=0,ee=H.length;G<ee;G++)H[G]!==L[G]&&(t.disableVertexAttribArray(G),H[G]=0)}function T(L,H,G,ee,I,O,V){V===!0?t.vertexAttribIPointer(L,H,G,I,O):t.vertexAttribPointer(L,H,G,ee,I,O)}function P(L,H,G,ee){if(i.isWebGL2===!1&&(L.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;p();const I=ee.attributes,O=G.getAttributes(),V=H.defaultAttributeValues;for(const ne in O){const oe=O[ne];if(oe.location>=0){let Y=I[ne];if(Y===void 0&&(ne==="instanceMatrix"&&L.instanceMatrix&&(Y=L.instanceMatrix),ne==="instanceColor"&&L.instanceColor&&(Y=L.instanceColor)),Y!==void 0){const se=Y.normalized,X=Y.itemSize,he=n.get(Y);if(he===void 0)continue;const ae=he.buffer,ie=he.type,U=he.bytesPerElement,W=i.isWebGL2===!0&&(ie===t.INT||ie===t.UNSIGNED_INT||Y.gpuType===Yv);if(Y.isInterleavedBufferAttribute){const j=Y.data,b=j.stride,$=Y.offset;if(j.isInstancedInterleavedBuffer){for(let J=0;J<oe.locationSize;J++)R(oe.location+J,j.meshPerAttribute);L.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let J=0;J<oe.locationSize;J++)y(oe.location+J);t.bindBuffer(t.ARRAY_BUFFER,ae);for(let J=0;J<oe.locationSize;J++)T(oe.location+J,X/oe.locationSize,ie,se,b*U,($+X/oe.locationSize*J)*U,W)}else{if(Y.isInstancedBufferAttribute){for(let j=0;j<oe.locationSize;j++)R(oe.location+j,Y.meshPerAttribute);L.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let j=0;j<oe.locationSize;j++)y(oe.location+j);t.bindBuffer(t.ARRAY_BUFFER,ae);for(let j=0;j<oe.locationSize;j++)T(oe.location+j,X/oe.locationSize,ie,se,X*U,X/oe.locationSize*j*U,W)}}else if(V!==void 0){const se=V[ne];if(se!==void 0)switch(se.length){case 2:t.vertexAttrib2fv(oe.location,se);break;case 3:t.vertexAttrib3fv(oe.location,se);break;case 4:t.vertexAttrib4fv(oe.location,se);break;default:t.vertexAttrib1fv(oe.location,se)}}}}S()}function E(){B();for(const L in a){const H=a[L];for(const G in H){const ee=H[G];for(const I in ee)g(ee[I].object),delete ee[I];delete H[G]}delete a[L]}}function w(L){if(a[L.id]===void 0)return;const H=a[L.id];for(const G in H){const ee=H[G];for(const I in ee)g(ee[I].object),delete ee[I];delete H[G]}delete a[L.id]}function N(L){for(const H in a){const G=a[H];if(G[L.id]===void 0)continue;const ee=G[L.id];for(const I in ee)g(ee[I].object),delete ee[I];delete G[L.id]}}function B(){te(),c=!0,u!==l&&(u=l,m(u.object))}function te(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:B,resetDefaultState:te,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:N,initAttributes:p,enableAttribute:y,disableUnusedAttributes:S}}function G1(t,e,n,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,h){t.drawArrays(s,c,h),n.update(h,s,1)}function l(c,h,d){if(d===0)return;let m,g;if(r)m=t,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,c,h,d),n.update(h,s,d)}function u(c,h,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(c[g],h[g]);else{m.multiDrawArraysWEBGL(s,c,0,h,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x];n.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function V1(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),f=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),p=d>0,y=o||e.has("OES_texture_float"),R=p&&y,S=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:v,maxVaryings:f,maxFragmentUniforms:_,vertexTextures:p,floatFragmentTextures:y,floatVertexTextures:R,maxSamples:S}}function W1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Er,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=c(h,d,0)},this.setState=function(h,d,m){const g=h.clippingPlanes,x=h.clipIntersection,v=h.clipShadows,f=t.get(h);if(!r||g===null||g.length===0||s&&!v)s?c(null):u();else{const _=s?0:i,p=_*4;let y=f.clippingState||null;l.value=y,y=c(g,d,p,m);for(let R=0;R!==p;++R)y[R]=n[R];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(h,d,m,g){const x=h!==null?h.length:0;let v=null;if(x!==0){if(v=l.value,g!==!0||v===null){const f=m+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(v===null||v.length<f)&&(v=new Float32Array(f));for(let p=0,y=m;p!==x;++p,y+=4)o.copy(h[p]).applyMatrix4(_,a),o.normal.toArray(v,y),v[y+3]=o.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,v}}function X1(t){let e=new WeakMap;function n(o,a){return a===Zf?o.mapping=Js:a===Jf&&(o.mapping=Qs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Zf||a===Jf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new iM(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class v_ extends p_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ds=4,Dm=[.125,.215,.35,.446,.526,.582],Ar=20,Bc=new v_,Im=new Oe;let Hc=null,Gc=0,Vc=0;const Mr=(1+Math.sqrt(5))/2,ps=1/Mr,Nm=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Mr,ps),new F(0,Mr,-ps),new F(ps,0,Mr),new F(-ps,0,Mr),new F(Mr,ps,0),new F(-Mr,ps,0)];class Um{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Hc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Vc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Om(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hc,Gc,Vc),e.scissorTest=!1,ul(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Js||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Vc=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:In,minFilter:In,generateMipmaps:!1,type:fa,format:Jn,colorSpace:Li,depthBuffer:!1},r=Fm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=j1(s)),this._blurMaterial=Y1(s,e,n)}return r}_compileMaterial(e){const n=new zn(this._lodPlanes[0],e);this._renderer.compile(n,Bc)}_sceneToCubeUV(e,n,i,r){const a=new Un(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,d=c.toneMapping;c.getClearColor(Im),c.toneMapping=ir,c.autoClear=!1;const m=new c_({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),g=new zn(new Zr,m);let x=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,x=!0):(m.color.copy(Im),x=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const p=this._cubeSize;ul(r,_*p,f>2?p:0,p,p),c.setRenderTarget(r),x&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=d,c.autoClear=h,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Js||e.mapping===Qs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Om());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new zn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ul(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Bc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Nm[(r-1)%Nm.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new zn(this._lodPlanes[r],u),d=u.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ar-1),x=s/g,v=isFinite(s)?1+Math.floor(c*x):Ar;v>Ar&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Ar}`);const f=[];let _=0;for(let T=0;T<Ar;++T){const P=T/x,E=Math.exp(-P*P/2);f.push(E),T===0?_+=E:T<v&&(_+=2*E)}for(let T=0;T<f.length;T++)f[T]=f[T]/_;d.envMap.value=e.texture,d.samples.value=v,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:p}=this;d.dTheta.value=g,d.mipInt.value=p-i;const y=this._sizeLods[r],R=3*y*(r>p-Ds?r-p+Ds:0),S=4*(this._cubeSize-y);ul(n,R,S,3*y,2*y),l.setRenderTarget(n),l.render(h,Bc)}}function j1(t){const e=[],n=[],i=[];let r=t;const s=t-Ds+1+Dm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ds?l=Dm[o-t+Ds-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,h=1+u,d=[c,c,h,c,h,h,c,c,h,h,c,h],m=6,g=6,x=3,v=2,f=1,_=new Float32Array(x*g*m),p=new Float32Array(v*g*m),y=new Float32Array(f*g*m);for(let S=0;S<m;S++){const T=S%3*2/3-1,P=S>2?0:-1,E=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];_.set(E,x*g*S),p.set(d,v*g*S);const w=[S,S,S,S,S,S];y.set(w,f*g*S)}const R=new Vn;R.setAttribute("position",new Bn(_,x)),R.setAttribute("uv",new Bn(p,v)),R.setAttribute("faceIndex",new Bn(y,f)),e.push(R),r>Ds&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Fm(t,e,n){const i=new Wr(t,e,n);return i.texture.mapping=bu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ul(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Y1(t,e,n){const i=new Float32Array(Ar),r=new F(0,1,0);return new Xr({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:fh(),fragmentShader:`

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
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Om(){return new Xr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fh(),fragmentShader:`

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
		`,blending:nr,depthTest:!1,depthWrite:!1})}function zm(){return new Xr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function fh(){return`

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
	`}function $1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Zf||l===Jf,c=l===Js||l===Qs;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new Um(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(u&&h&&h.height>0||c&&h&&r(h)){n===null&&(n=new Um(t));const d=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function q1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function K1(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let v=0,f=x.length;v<f;v++)e.remove(x[v])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const x=m[g];for(let v=0,f=x.length;v<f;v++)e.update(x[v],t.ARRAY_BUFFER)}}function u(h){const d=[],m=h.index,g=h.attributes.position;let x=0;if(m!==null){const _=m.array;x=m.version;for(let p=0,y=_.length;p<y;p+=3){const R=_[p+0],S=_[p+1],T=_[p+2];d.push(R,S,S,T,T,R)}}else if(g!==void 0){const _=g.array;x=g.version;for(let p=0,y=_.length/3-1;p<y;p+=3){const R=p+0,S=p+1,T=p+2;d.push(R,S,S,T,T,R)}}else return;const v=new(i_(d)?d_:f_)(d,1);v.version=x;const f=s.get(h);f&&e.remove(f),s.set(h,v)}function c(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function Z1(t,e,n,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,l;function u(m){a=m.type,l=m.bytesPerElement}function c(m,g){t.drawElements(s,g,a,m*l),n.update(g,s,1)}function h(m,g,x){if(x===0)return;let v,f;if(r)v=t,f="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[f](s,g,a,m*l,x),n.update(g,s,x)}function d(m,g,x){if(x===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let f=0;f<x;f++)this.render(m[f]/l,g[f]);else{v.multiDrawElementsWEBGL(s,g,0,a,m,0,x);let f=0;for(let _=0;_<x;_++)f+=g[_];n.update(f,s,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=h,this.renderMultiDraw=d}function J1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Q1(t,e){return t[0]-e[0]}function eT(t,e){return Math.abs(e[1])-Math.abs(t[1])}function tT(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Ft,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,h){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,x=g!==void 0?g.length:0;let v=s.get(c);if(v===void 0||v.count!==x){let H=function(){te.dispose(),s.delete(c),c.removeEventListener("dispose",H)};var m=H;v!==void 0&&v.texture.dispose();const p=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,R=c.morphAttributes.color!==void 0,S=c.morphAttributes.position||[],T=c.morphAttributes.normal||[],P=c.morphAttributes.color||[];let E=0;p===!0&&(E=1),y===!0&&(E=2),R===!0&&(E=3);let w=c.attributes.position.count*E,N=1;w>e.maxTextureSize&&(N=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const B=new Float32Array(w*N*4*x),te=new o_(B,w,N,x);te.type=ji,te.needsUpdate=!0;const L=E*4;for(let G=0;G<x;G++){const ee=S[G],I=T[G],O=P[G],V=w*N*4*G;for(let ne=0;ne<ee.count;ne++){const oe=ne*L;p===!0&&(o.fromBufferAttribute(ee,ne),B[V+oe+0]=o.x,B[V+oe+1]=o.y,B[V+oe+2]=o.z,B[V+oe+3]=0),y===!0&&(o.fromBufferAttribute(I,ne),B[V+oe+4]=o.x,B[V+oe+5]=o.y,B[V+oe+6]=o.z,B[V+oe+7]=0),R===!0&&(o.fromBufferAttribute(O,ne),B[V+oe+8]=o.x,B[V+oe+9]=o.y,B[V+oe+10]=o.z,B[V+oe+11]=O.itemSize===4?o.w:1)}}v={count:x,texture:te,size:new me(w,N)},s.set(c,v),c.addEventListener("dispose",H)}let f=0;for(let p=0;p<d.length;p++)f+=d[p];const _=c.morphTargetsRelative?1:1-f;h.getUniforms().setValue(t,"morphTargetBaseInfluence",_),h.getUniforms().setValue(t,"morphTargetInfluences",d),h.getUniforms().setValue(t,"morphTargetsTexture",v.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",v.size)}else{const g=d===void 0?0:d.length;let x=i[c.id];if(x===void 0||x.length!==g){x=[];for(let y=0;y<g;y++)x[y]=[y,0];i[c.id]=x}for(let y=0;y<g;y++){const R=x[y];R[0]=y,R[1]=d[y]}x.sort(eT);for(let y=0;y<8;y++)y<g&&x[y][1]?(a[y][0]=x[y][0],a[y][1]=x[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Q1);const v=c.morphAttributes.position,f=c.morphAttributes.normal;let _=0;for(let y=0;y<8;y++){const R=a[y],S=R[0],T=R[1];S!==Number.MAX_SAFE_INTEGER&&T?(v&&c.getAttribute("morphTarget"+y)!==v[S]&&c.setAttribute("morphTarget"+y,v[S]),f&&c.getAttribute("morphNormal"+y)!==f[S]&&c.setAttribute("morphNormal"+y,f[S]),r[y]=T,_+=T):(v&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),f&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const p=c.morphTargetsRelative?1:1-_;h.getUniforms().setValue(t,"morphTargetBaseInfluence",p),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function nT(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,h=e.get(l,c);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class __ extends _n{constructor(e,n,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:Fr,c!==Fr&&c!==eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Fr&&(i=Xi),i===void 0&&c===eo&&(i=Ur),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const x_=new _n,y_=new __(1,1);y_.compareFunction=n_;const S_=new o_,E_=new BE,M_=new m_,km=[],Bm=[],Hm=new Float32Array(16),Gm=new Float32Array(9),Vm=new Float32Array(4);function uo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=km[r];if(s===void 0&&(s=new Float32Array(r),km[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Lt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Nu(t,e){let n=Bm[e];n===void 0&&(n=new Int32Array(e),Bm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function iT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function rT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2fv(this.addr,e),Lt(n,e)}}function sT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pt(n,e))return;t.uniform3fv(this.addr,e),Lt(n,e)}}function oT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4fv(this.addr,e),Lt(n,e)}}function aT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Vm.set(i),t.uniformMatrix2fv(this.addr,!1,Vm),Lt(n,i)}}function lT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Gm.set(i),t.uniformMatrix3fv(this.addr,!1,Gm),Lt(n,i)}}function uT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Hm.set(i),t.uniformMatrix4fv(this.addr,!1,Hm),Lt(n,i)}}function cT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function fT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2iv(this.addr,e),Lt(n,e)}}function dT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3iv(this.addr,e),Lt(n,e)}}function hT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4iv(this.addr,e),Lt(n,e)}}function pT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function mT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2uiv(this.addr,e),Lt(n,e)}}function gT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3uiv(this.addr,e),Lt(n,e)}}function vT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4uiv(this.addr,e),Lt(n,e)}}function _T(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?y_:x_;n.setTexture2D(e||s,r)}function xT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||E_,r)}function yT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||M_,r)}function ST(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||S_,r)}function ET(t){switch(t){case 5126:return iT;case 35664:return rT;case 35665:return sT;case 35666:return oT;case 35674:return aT;case 35675:return lT;case 35676:return uT;case 5124:case 35670:return cT;case 35667:case 35671:return fT;case 35668:case 35672:return dT;case 35669:case 35673:return hT;case 5125:return pT;case 36294:return mT;case 36295:return gT;case 36296:return vT;case 35678:case 36198:case 36298:case 36306:case 35682:return _T;case 35679:case 36299:case 36307:return xT;case 35680:case 36300:case 36308:case 36293:return yT;case 36289:case 36303:case 36311:case 36292:return ST}}function MT(t,e){t.uniform1fv(this.addr,e)}function wT(t,e){const n=uo(e,this.size,2);t.uniform2fv(this.addr,n)}function TT(t,e){const n=uo(e,this.size,3);t.uniform3fv(this.addr,n)}function AT(t,e){const n=uo(e,this.size,4);t.uniform4fv(this.addr,n)}function RT(t,e){const n=uo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function CT(t,e){const n=uo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function bT(t,e){const n=uo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function PT(t,e){t.uniform1iv(this.addr,e)}function LT(t,e){t.uniform2iv(this.addr,e)}function DT(t,e){t.uniform3iv(this.addr,e)}function IT(t,e){t.uniform4iv(this.addr,e)}function NT(t,e){t.uniform1uiv(this.addr,e)}function UT(t,e){t.uniform2uiv(this.addr,e)}function FT(t,e){t.uniform3uiv(this.addr,e)}function OT(t,e){t.uniform4uiv(this.addr,e)}function zT(t,e,n){const i=this.cache,r=e.length,s=Nu(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||x_,s[o])}function kT(t,e,n){const i=this.cache,r=e.length,s=Nu(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||E_,s[o])}function BT(t,e,n){const i=this.cache,r=e.length,s=Nu(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||M_,s[o])}function HT(t,e,n){const i=this.cache,r=e.length,s=Nu(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||S_,s[o])}function GT(t){switch(t){case 5126:return MT;case 35664:return wT;case 35665:return TT;case 35666:return AT;case 35674:return RT;case 35675:return CT;case 35676:return bT;case 5124:case 35670:return PT;case 35667:case 35671:return LT;case 35668:case 35672:return DT;case 35669:case 35673:return IT;case 5125:return NT;case 36294:return UT;case 36295:return FT;case 36296:return OT;case 35678:case 36198:case 36298:case 36306:case 35682:return zT;case 35679:case 36299:case 36307:return kT;case 35680:case 36300:case 36308:case 36293:return BT;case 36289:case 36303:case 36311:case 36292:return HT}}class VT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=ET(n.type)}}class WT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=GT(n.type)}}class XT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Wc=/(\w+)(\])?(\[|\.)?/g;function Wm(t,e){t.seq.push(e),t.map[e.id]=e}function jT(t,e,n){const i=t.name,r=i.length;for(Wc.lastIndex=0;;){const s=Wc.exec(i),o=Wc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Wm(n,u===void 0?new VT(a,t,e):new WT(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new XT(a),Wm(n,h)),n=h}}}class Ll{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);jT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Xm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const YT=37297;let $T=0;function qT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function KT(t){const e=et.getPrimaries(et.workingColorSpace),n=et.getPrimaries(t);let i;switch(e===n?i="":e===ou&&n===su?i="LinearDisplayP3ToLinearSRGB":e===su&&n===ou&&(i="LinearSRGBToLinearDisplayP3"),t){case Li:case Pu:return[i,"LinearTransferOETF"];case Gt:case uh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function jm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+qT(t.getShaderSource(e),o)}else return r}function ZT(t,e){const n=KT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function JT(t,e){let n;switch(e){case uE:n="Linear";break;case cE:n="Reinhard";break;case fE:n="OptimizedCineon";break;case dE:n="ACESFilmic";break;case pE:n="AgX";break;case hE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function QT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Is).join(`
`)}function eA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Is).join(`
`)}function tA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function nA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Is(t){return t!==""}function Ym(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $m(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iA=/^[ \t]*#include +<([\w\d./]+)>/gm;function rd(t){return t.replace(iA,sA)}const rA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function sA(t,e){let n=Ve[e];if(n===void 0){const i=rA.get(e);if(i!==void 0)n=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return rd(n)}const oA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qm(t){return t.replace(oA,aA)}function aA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Km(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Vv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Wv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function uA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Js:case Qs:e="ENVMAP_TYPE_CUBE";break;case bu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Qs:e="ENVMAP_MODE_REFRACTION";break}return e}function fA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Xv:e="ENVMAP_BLENDING_MULTIPLY";break;case aE:e="ENVMAP_BLENDING_MIX";break;case lE:e="ENVMAP_BLENDING_ADD";break}return e}function dA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function hA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=lA(n),u=uA(n),c=cA(n),h=fA(n),d=dA(n),m=n.isWebGL2?"":QT(n),g=eA(n),x=tA(s),v=r.createProgram();let f,_,p=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Is).join(`
`),f.length>0&&(f+=`
`),_=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Is).join(`
`),_.length>0&&(_+=`
`)):(f=[Km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),_=[m,Km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ir?"#define TONE_MAPPING":"",n.toneMapping!==ir?Ve.tonemapping_pars_fragment:"",n.toneMapping!==ir?JT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,ZT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Is).join(`
`)),o=rd(o),o=Ym(o,n),o=$m(o,n),a=rd(a),a=Ym(a,n),a=$m(a,n),o=qm(o),a=qm(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===pm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===pm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=p+f+o,R=p+_+a,S=Xm(r,r.VERTEX_SHADER,y),T=Xm(r,r.FRAGMENT_SHADER,R);r.attachShader(v,S),r.attachShader(v,T),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function P(B){if(t.debug.checkShaderErrors){const te=r.getProgramInfoLog(v).trim(),L=r.getShaderInfoLog(S).trim(),H=r.getShaderInfoLog(T).trim();let G=!0,ee=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(G=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,S,T);else{const I=jm(r,S,"vertex"),O=jm(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+te+`
`+I+`
`+O)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(L===""||H==="")&&(ee=!1);ee&&(B.diagnostics={runnable:G,programLog:te,vertexShader:{log:L,prefix:f},fragmentShader:{log:H,prefix:_}})}r.deleteShader(S),r.deleteShader(T),E=new Ll(r,v),w=nA(r,v)}let E;this.getUniforms=function(){return E===void 0&&P(this),E};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(v,YT)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=$T++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=T,this}let pA=0;class mA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new gA(e),n.set(e,i)),i}}class gA{constructor(e){this.id=pA++,this.code=e,this.usedTimes=0}}function vA(t,e,n,i,r,s,o){const a=new l_,l=new mA,u=[],c=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return E===0?"uv":`uv${E}`}function v(E,w,N,B,te){const L=B.fog,H=te.geometry,G=E.isMeshStandardMaterial?B.environment:null,ee=(E.isMeshStandardMaterial?n:e).get(E.envMap||G),I=ee&&ee.mapping===bu?ee.image.height:null,O=g[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const V=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ne=V!==void 0?V.length:0;let oe=0;H.morphAttributes.position!==void 0&&(oe=1),H.morphAttributes.normal!==void 0&&(oe=2),H.morphAttributes.color!==void 0&&(oe=3);let Y,se,X,he;if(O){const en=oi[O];Y=en.vertexShader,se=en.fragmentShader}else Y=E.vertexShader,se=E.fragmentShader,l.update(E),X=l.getVertexShaderID(E),he=l.getFragmentShaderID(E);const ae=t.getRenderTarget(),ie=te.isInstancedMesh===!0,U=te.isBatchedMesh===!0,W=!!E.map,j=!!E.matcap,b=!!ee,$=!!E.aoMap,J=!!E.lightMap,re=!!E.bumpMap,Z=!!E.normalMap,Me=!!E.displacementMap,_e=!!E.emissiveMap,A=!!E.metalnessMap,M=!!E.roughnessMap,k=E.anisotropy>0,de=E.clearcoat>0,ce=E.iridescence>0,ue=E.sheen>0,Ce=E.transmission>0,xe=k&&!!E.anisotropyMap,Ae=de&&!!E.clearcoatMap,Le=de&&!!E.clearcoatNormalMap,Be=de&&!!E.clearcoatRoughnessMap,fe=ce&&!!E.iridescenceMap,Ze=ce&&!!E.iridescenceThicknessMap,$e=ue&&!!E.sheenColorMap,ze=ue&&!!E.sheenRoughnessMap,Pe=!!E.specularMap,Re=!!E.specularColorMap,Ge=!!E.specularIntensityMap,Je=Ce&&!!E.transmissionMap,vt=Ce&&!!E.thicknessMap,Xe=!!E.gradientMap,ge=!!E.alphaMap,D=E.alphaTest>0,ye=!!E.alphaHash,Se=!!E.extensions,Ue=!!H.attributes.uv1,De=!!H.attributes.uv2,nt=!!H.attributes.uv3;let it=ir;return E.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(it=t.toneMapping),{isWebGL2:c,shaderID:O,shaderType:E.type,shaderName:E.name,vertexShader:Y,fragmentShader:se,defines:E.defines,customVertexShaderID:X,customFragmentShaderID:he,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:U,instancing:ie,instancingColor:ie&&te.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ae===null?t.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Li,map:W,matcap:j,envMap:b,envMapMode:b&&ee.mapping,envMapCubeUVHeight:I,aoMap:$,lightMap:J,bumpMap:re,normalMap:Z,displacementMap:d&&Me,emissiveMap:_e,normalMapObjectSpace:Z&&E.normalMapType===AE,normalMapTangentSpace:Z&&E.normalMapType===t_,metalnessMap:A,roughnessMap:M,anisotropy:k,anisotropyMap:xe,clearcoat:de,clearcoatMap:Ae,clearcoatNormalMap:Le,clearcoatRoughnessMap:Be,iridescence:ce,iridescenceMap:fe,iridescenceThicknessMap:Ze,sheen:ue,sheenColorMap:$e,sheenRoughnessMap:ze,specularMap:Pe,specularColorMap:Re,specularIntensityMap:Ge,transmission:Ce,transmissionMap:Je,thicknessMap:vt,gradientMap:Xe,opaque:E.transparent===!1&&E.blending===Gs,alphaMap:ge,alphaTest:D,alphaHash:ye,combine:E.combine,mapUv:W&&x(E.map.channel),aoMapUv:$&&x(E.aoMap.channel),lightMapUv:J&&x(E.lightMap.channel),bumpMapUv:re&&x(E.bumpMap.channel),normalMapUv:Z&&x(E.normalMap.channel),displacementMapUv:Me&&x(E.displacementMap.channel),emissiveMapUv:_e&&x(E.emissiveMap.channel),metalnessMapUv:A&&x(E.metalnessMap.channel),roughnessMapUv:M&&x(E.roughnessMap.channel),anisotropyMapUv:xe&&x(E.anisotropyMap.channel),clearcoatMapUv:Ae&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Le&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:ze&&x(E.sheenRoughnessMap.channel),specularMapUv:Pe&&x(E.specularMap.channel),specularColorMapUv:Re&&x(E.specularColorMap.channel),specularIntensityMapUv:Ge&&x(E.specularIntensityMap.channel),transmissionMapUv:Je&&x(E.transmissionMap.channel),thicknessMapUv:vt&&x(E.thicknessMap.channel),alphaMapUv:ge&&x(E.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Z||k),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:Ue,vertexUv2s:De,vertexUv3s:nt,pointsUvs:te.isPoints===!0&&!!H.attributes.uv&&(W||ge),fog:!!L,useFog:E.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:te.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:oe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:it,useLegacyLights:t._useLegacyLights,decodeVideoTexture:W&&E.map.isVideoTexture===!0&&et.getTransfer(E.map.colorSpace)===at,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===fn,flipSided:E.side===vn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:Se&&E.extensions.derivatives===!0,extensionFragDepth:Se&&E.extensions.fragDepth===!0,extensionDrawBuffers:Se&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:Se&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Se&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function f(E){const w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(const N in E.defines)w.push(N),w.push(E.defines[N]);return E.isRawShaderMaterial===!1&&(_(w,E),p(w,E),w.push(t.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function _(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function p(E,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),E.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function y(E){const w=g[E.type];let N;if(w){const B=oi[w];N=QE.clone(B.uniforms)}else N=E.uniforms;return N}function R(E,w){let N;for(let B=0,te=u.length;B<te;B++){const L=u[B];if(L.cacheKey===w){N=L,++N.usedTimes;break}}return N===void 0&&(N=new hA(t,w,E,s),u.push(N)),N}function S(E){if(--E.usedTimes===0){const w=u.indexOf(E);u[w]=u[u.length-1],u.pop(),E.destroy()}}function T(E){l.remove(E)}function P(){l.dispose()}return{getParameters:v,getProgramCacheKey:f,getUniforms:y,acquireProgram:R,releaseProgram:S,releaseShaderCache:T,programs:u,dispose:P}}function _A(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function xA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Zm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Jm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,m,g,x,v){let f=t[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:x,group:v},t[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=x,f.group=v),e++,f}function a(h,d,m,g,x,v){const f=o(h,d,m,g,x,v);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):n.push(f)}function l(h,d,m,g,x,v){const f=o(h,d,m,g,x,v);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):n.unshift(f)}function u(h,d){n.length>1&&n.sort(h||xA),i.length>1&&i.sort(d||Zm),r.length>1&&r.sort(d||Zm)}function c(){for(let h=e,d=t.length;h<d;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function yA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Jm,t.set(i,[o])):r>=s.length?(o=new Jm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function SA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new Oe};break;case"SpotLight":n={position:new F,direction:new F,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":n={color:new Oe,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function EA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let MA=0;function wA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function TA(t,e){const n=new SA,i=EA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new F);const s=new F,o=new yt,a=new yt;function l(c,h){let d=0,m=0,g=0;for(let B=0;B<9;B++)r.probe[B].set(0,0,0);let x=0,v=0,f=0,_=0,p=0,y=0,R=0,S=0,T=0,P=0,E=0;c.sort(wA);const w=h===!0?Math.PI:1;for(let B=0,te=c.length;B<te;B++){const L=c[B],H=L.color,G=L.intensity,ee=L.distance,I=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=H.r*G*w,m+=H.g*G*w,g+=H.b*G*w;else if(L.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(L.sh.coefficients[O],G);E++}else if(L.isDirectionalLight){const O=n.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){const V=L.shadow,ne=i.get(L);ne.shadowBias=V.bias,ne.shadowNormalBias=V.normalBias,ne.shadowRadius=V.radius,ne.shadowMapSize=V.mapSize,r.directionalShadow[x]=ne,r.directionalShadowMap[x]=I,r.directionalShadowMatrix[x]=L.shadow.matrix,y++}r.directional[x]=O,x++}else if(L.isSpotLight){const O=n.get(L);O.position.setFromMatrixPosition(L.matrixWorld),O.color.copy(H).multiplyScalar(G*w),O.distance=ee,O.coneCos=Math.cos(L.angle),O.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),O.decay=L.decay,r.spot[f]=O;const V=L.shadow;if(L.map&&(r.spotLightMap[T]=L.map,T++,V.updateMatrices(L),L.castShadow&&P++),r.spotLightMatrix[f]=V.matrix,L.castShadow){const ne=i.get(L);ne.shadowBias=V.bias,ne.shadowNormalBias=V.normalBias,ne.shadowRadius=V.radius,ne.shadowMapSize=V.mapSize,r.spotShadow[f]=ne,r.spotShadowMap[f]=I,S++}f++}else if(L.isRectAreaLight){const O=n.get(L);O.color.copy(H).multiplyScalar(G),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),r.rectArea[_]=O,_++}else if(L.isPointLight){const O=n.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity*w),O.distance=L.distance,O.decay=L.decay,L.castShadow){const V=L.shadow,ne=i.get(L);ne.shadowBias=V.bias,ne.shadowNormalBias=V.normalBias,ne.shadowRadius=V.radius,ne.shadowMapSize=V.mapSize,ne.shadowCameraNear=V.camera.near,ne.shadowCameraFar=V.camera.far,r.pointShadow[v]=ne,r.pointShadowMap[v]=I,r.pointShadowMatrix[v]=L.shadow.matrix,R++}r.point[v]=O,v++}else if(L.isHemisphereLight){const O=n.get(L);O.skyColor.copy(L.color).multiplyScalar(G*w),O.groundColor.copy(L.groundColor).multiplyScalar(G*w),r.hemi[p]=O,p++}}_>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=g;const N=r.hash;(N.directionalLength!==x||N.pointLength!==v||N.spotLength!==f||N.rectAreaLength!==_||N.hemiLength!==p||N.numDirectionalShadows!==y||N.numPointShadows!==R||N.numSpotShadows!==S||N.numSpotMaps!==T||N.numLightProbes!==E)&&(r.directional.length=x,r.spot.length=f,r.rectArea.length=_,r.point.length=v,r.hemi.length=p,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=S,r.spotShadowMap.length=S,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=S+T-P,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=E,N.directionalLength=x,N.pointLength=v,N.spotLength=f,N.rectAreaLength=_,N.hemiLength=p,N.numDirectionalShadows=y,N.numPointShadows=R,N.numSpotShadows=S,N.numSpotMaps=T,N.numLightProbes=E,r.version=MA++)}function u(c,h){let d=0,m=0,g=0,x=0,v=0;const f=h.matrixWorldInverse;for(let _=0,p=c.length;_<p;_++){const y=c[_];if(y.isDirectionalLight){const R=r.directional[d];R.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(f),d++}else if(y.isSpotLight){const R=r.spot[g];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(f),R.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(f),g++}else if(y.isRectAreaLight){const R=r.rectArea[x];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(f),a.identity(),o.copy(y.matrixWorld),o.premultiply(f),a.extractRotation(o),R.halfWidth.set(y.width*.5,0,0),R.halfHeight.set(0,y.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const R=r.point[m];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(f),m++}else if(y.isHemisphereLight){const R=r.hemi[v];R.direction.setFromMatrixPosition(y.matrixWorld),R.direction.transformDirection(f),v++}}}return{setup:l,setupView:u,state:r}}function Qm(t,e){const n=new TA(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function u(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function AA(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Qm(t,e),n.set(s,[l])):o>=a.length?(l=new Qm(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class RA extends Kr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class CA extends Kr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PA=`uniform sampler2D shadow_pass;
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
}`;function LA(t,e,n){let i=new ch;const r=new me,s=new me,o=new Ft,a=new RA({depthPacking:TE}),l=new CA,u={},c=n.maxTextureSize,h={[ur]:vn,[vn]:ur,[fn]:fn},d=new Xr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:bA,fragmentShader:PA}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Vn;g.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new zn(g,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vv;let f=this.type;this.render=function(S,T,P){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||S.length===0)return;const E=t.getRenderTarget(),w=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),B=t.state;B.setBlending(nr),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const te=f!==vi&&this.type===vi,L=f===vi&&this.type!==vi;for(let H=0,G=S.length;H<G;H++){const ee=S[H],I=ee.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const O=I.getFrameExtents();if(r.multiply(O),s.copy(I.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/O.x),r.x=s.x*O.x,I.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/O.y),r.y=s.y*O.y,I.mapSize.y=s.y)),I.map===null||te===!0||L===!0){const ne=this.type!==vi?{minFilter:on,magFilter:on}:{};I.map!==null&&I.map.dispose(),I.map=new Wr(r.x,r.y,ne),I.map.texture.name=ee.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const V=I.getViewportCount();for(let ne=0;ne<V;ne++){const oe=I.getViewport(ne);o.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),B.viewport(o),I.updateMatrices(ee,ne),i=I.getFrustum(),y(T,P,I.camera,ee,this.type)}I.isPointLightShadow!==!0&&this.type===vi&&_(I,P),I.needsUpdate=!1}f=this.type,v.needsUpdate=!1,t.setRenderTarget(E,w,N)};function _(S,T){const P=e.update(x);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Wr(r.x,r.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,t.setRenderTarget(S.mapPass),t.clear(),t.renderBufferDirect(T,null,P,d,x,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,t.setRenderTarget(S.map),t.clear(),t.renderBufferDirect(T,null,P,m,x,null)}function p(S,T,P,E){let w=null;const N=P.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(N!==void 0)w=N;else if(w=P.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const B=w.uuid,te=T.uuid;let L=u[B];L===void 0&&(L={},u[B]=L);let H=L[te];H===void 0&&(H=w.clone(),L[te]=H,T.addEventListener("dispose",R)),w=H}if(w.visible=T.visible,w.wireframe=T.wireframe,E===vi?w.side=T.shadowSide!==null?T.shadowSide:T.side:w.side=T.shadowSide!==null?T.shadowSide:h[T.side],w.alphaMap=T.alphaMap,w.alphaTest=T.alphaTest,w.map=T.map,w.clipShadows=T.clipShadows,w.clippingPlanes=T.clippingPlanes,w.clipIntersection=T.clipIntersection,w.displacementMap=T.displacementMap,w.displacementScale=T.displacementScale,w.displacementBias=T.displacementBias,w.wireframeLinewidth=T.wireframeLinewidth,w.linewidth=T.linewidth,P.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const B=t.properties.get(w);B.light=P}return w}function y(S,T,P,E,w){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&w===vi)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,S.matrixWorld);const te=e.update(S),L=S.material;if(Array.isArray(L)){const H=te.groups;for(let G=0,ee=H.length;G<ee;G++){const I=H[G],O=L[I.materialIndex];if(O&&O.visible){const V=p(S,O,E,w);S.onBeforeShadow(t,S,T,P,te,V,I),t.renderBufferDirect(P,null,te,V,S,I),S.onAfterShadow(t,S,T,P,te,V,I)}}}else if(L.visible){const H=p(S,L,E,w);S.onBeforeShadow(t,S,T,P,te,H,null),t.renderBufferDirect(P,null,te,H,S,null),S.onAfterShadow(t,S,T,P,te,H,null)}}const B=S.children;for(let te=0,L=B.length;te<L;te++)y(B[te],T,P,E,w)}function R(S){S.target.removeEventListener("dispose",R);for(const P in u){const E=u[P],w=S.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}function DA(t,e,n){const i=n.isWebGL2;function r(){let D=!1;const ye=new Ft;let Se=null;const Ue=new Ft(0,0,0,0);return{setMask:function(De){Se!==De&&!D&&(t.colorMask(De,De,De,De),Se=De)},setLocked:function(De){D=De},setClear:function(De,nt,it,Dt,en){en===!0&&(De*=Dt,nt*=Dt,it*=Dt),ye.set(De,nt,it,Dt),Ue.equals(ye)===!1&&(t.clearColor(De,nt,it,Dt),Ue.copy(ye))},reset:function(){D=!1,Se=null,Ue.set(-1,0,0,0)}}}function s(){let D=!1,ye=null,Se=null,Ue=null;return{setTest:function(De){De?U(t.DEPTH_TEST):W(t.DEPTH_TEST)},setMask:function(De){ye!==De&&!D&&(t.depthMask(De),ye=De)},setFunc:function(De){if(Se!==De){switch(De){case eE:t.depthFunc(t.NEVER);break;case tE:t.depthFunc(t.ALWAYS);break;case nE:t.depthFunc(t.LESS);break;case iu:t.depthFunc(t.LEQUAL);break;case iE:t.depthFunc(t.EQUAL);break;case rE:t.depthFunc(t.GEQUAL);break;case sE:t.depthFunc(t.GREATER);break;case oE:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Se=De}},setLocked:function(De){D=De},setClear:function(De){Ue!==De&&(t.clearDepth(De),Ue=De)},reset:function(){D=!1,ye=null,Se=null,Ue=null}}}function o(){let D=!1,ye=null,Se=null,Ue=null,De=null,nt=null,it=null,Dt=null,en=null;return{setTest:function(rt){D||(rt?U(t.STENCIL_TEST):W(t.STENCIL_TEST))},setMask:function(rt){ye!==rt&&!D&&(t.stencilMask(rt),ye=rt)},setFunc:function(rt,tn,ii){(Se!==rt||Ue!==tn||De!==ii)&&(t.stencilFunc(rt,tn,ii),Se=rt,Ue=tn,De=ii)},setOp:function(rt,tn,ii){(nt!==rt||it!==tn||Dt!==ii)&&(t.stencilOp(rt,tn,ii),nt=rt,it=tn,Dt=ii)},setLocked:function(rt){D=rt},setClear:function(rt){en!==rt&&(t.clearStencil(rt),en=rt)},reset:function(){D=!1,ye=null,Se=null,Ue=null,De=null,nt=null,it=null,Dt=null,en=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,h=new WeakMap;let d={},m={},g=new WeakMap,x=[],v=null,f=!1,_=null,p=null,y=null,R=null,S=null,T=null,P=null,E=new Oe(0,0,0),w=0,N=!1,B=null,te=null,L=null,H=null,G=null;const ee=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,O=0;const V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(V)[1]),I=O>=1):V.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),I=O>=2);let ne=null,oe={};const Y=t.getParameter(t.SCISSOR_BOX),se=t.getParameter(t.VIEWPORT),X=new Ft().fromArray(Y),he=new Ft().fromArray(se);function ae(D,ye,Se,Ue){const De=new Uint8Array(4),nt=t.createTexture();t.bindTexture(D,nt),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let it=0;it<Se;it++)i&&(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)?t.texImage3D(ye,0,t.RGBA,1,1,Ue,0,t.RGBA,t.UNSIGNED_BYTE,De):t.texImage2D(ye+it,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,De);return nt}const ie={};ie[t.TEXTURE_2D]=ae(t.TEXTURE_2D,t.TEXTURE_2D,1),ie[t.TEXTURE_CUBE_MAP]=ae(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ie[t.TEXTURE_2D_ARRAY]=ae(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ie[t.TEXTURE_3D]=ae(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),U(t.DEPTH_TEST),l.setFunc(iu),_e(!1),A(Up),U(t.CULL_FACE),Z(nr);function U(D){d[D]!==!0&&(t.enable(D),d[D]=!0)}function W(D){d[D]!==!1&&(t.disable(D),d[D]=!1)}function j(D,ye){return m[D]!==ye?(t.bindFramebuffer(D,ye),m[D]=ye,i&&(D===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=ye),D===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=ye)),!0):!1}function b(D,ye){let Se=x,Ue=!1;if(D)if(Se=g.get(ye),Se===void 0&&(Se=[],g.set(ye,Se)),D.isWebGLMultipleRenderTargets){const De=D.texture;if(Se.length!==De.length||Se[0]!==t.COLOR_ATTACHMENT0){for(let nt=0,it=De.length;nt<it;nt++)Se[nt]=t.COLOR_ATTACHMENT0+nt;Se.length=De.length,Ue=!0}}else Se[0]!==t.COLOR_ATTACHMENT0&&(Se[0]=t.COLOR_ATTACHMENT0,Ue=!0);else Se[0]!==t.BACK&&(Se[0]=t.BACK,Ue=!0);Ue&&(n.isWebGL2?t.drawBuffers(Se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Se))}function $(D){return v!==D?(t.useProgram(D),v=D,!0):!1}const J={[Tr]:t.FUNC_ADD,[kS]:t.FUNC_SUBTRACT,[BS]:t.FUNC_REVERSE_SUBTRACT};if(i)J[kp]=t.MIN,J[Bp]=t.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(J[kp]=D.MIN_EXT,J[Bp]=D.MAX_EXT)}const re={[HS]:t.ZERO,[GS]:t.ONE,[VS]:t.SRC_COLOR,[qf]:t.SRC_ALPHA,[qS]:t.SRC_ALPHA_SATURATE,[YS]:t.DST_COLOR,[XS]:t.DST_ALPHA,[WS]:t.ONE_MINUS_SRC_COLOR,[Kf]:t.ONE_MINUS_SRC_ALPHA,[$S]:t.ONE_MINUS_DST_COLOR,[jS]:t.ONE_MINUS_DST_ALPHA,[KS]:t.CONSTANT_COLOR,[ZS]:t.ONE_MINUS_CONSTANT_COLOR,[JS]:t.CONSTANT_ALPHA,[QS]:t.ONE_MINUS_CONSTANT_ALPHA};function Z(D,ye,Se,Ue,De,nt,it,Dt,en,rt){if(D===nr){f===!0&&(W(t.BLEND),f=!1);return}if(f===!1&&(U(t.BLEND),f=!0),D!==zS){if(D!==_||rt!==N){if((p!==Tr||S!==Tr)&&(t.blendEquation(t.FUNC_ADD),p=Tr,S=Tr),rt)switch(D){case Gs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Fp:t.blendFunc(t.ONE,t.ONE);break;case Op:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case zp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Gs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Fp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Op:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case zp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,R=null,T=null,P=null,E.set(0,0,0),w=0,_=D,N=rt}return}De=De||ye,nt=nt||Se,it=it||Ue,(ye!==p||De!==S)&&(t.blendEquationSeparate(J[ye],J[De]),p=ye,S=De),(Se!==y||Ue!==R||nt!==T||it!==P)&&(t.blendFuncSeparate(re[Se],re[Ue],re[nt],re[it]),y=Se,R=Ue,T=nt,P=it),(Dt.equals(E)===!1||en!==w)&&(t.blendColor(Dt.r,Dt.g,Dt.b,en),E.copy(Dt),w=en),_=D,N=!1}function Me(D,ye){D.side===fn?W(t.CULL_FACE):U(t.CULL_FACE);let Se=D.side===vn;ye&&(Se=!Se),_e(Se),D.blending===Gs&&D.transparent===!1?Z(nr):Z(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const Ue=D.stencilWrite;u.setTest(Ue),Ue&&(u.setMask(D.stencilWriteMask),u.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),u.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),k(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?U(t.SAMPLE_ALPHA_TO_COVERAGE):W(t.SAMPLE_ALPHA_TO_COVERAGE)}function _e(D){B!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),B=D)}function A(D){D!==FS?(U(t.CULL_FACE),D!==te&&(D===Up?t.cullFace(t.BACK):D===OS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):W(t.CULL_FACE),te=D}function M(D){D!==L&&(I&&t.lineWidth(D),L=D)}function k(D,ye,Se){D?(U(t.POLYGON_OFFSET_FILL),(H!==ye||G!==Se)&&(t.polygonOffset(ye,Se),H=ye,G=Se)):W(t.POLYGON_OFFSET_FILL)}function de(D){D?U(t.SCISSOR_TEST):W(t.SCISSOR_TEST)}function ce(D){D===void 0&&(D=t.TEXTURE0+ee-1),ne!==D&&(t.activeTexture(D),ne=D)}function ue(D,ye,Se){Se===void 0&&(ne===null?Se=t.TEXTURE0+ee-1:Se=ne);let Ue=oe[Se];Ue===void 0&&(Ue={type:void 0,texture:void 0},oe[Se]=Ue),(Ue.type!==D||Ue.texture!==ye)&&(ne!==Se&&(t.activeTexture(Se),ne=Se),t.bindTexture(D,ye||ie[D]),Ue.type=D,Ue.texture=ye)}function Ce(){const D=oe[ne];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function xe(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Be(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ze(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $e(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ze(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ge(D){X.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),X.copy(D))}function Je(D){he.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),he.copy(D))}function vt(D,ye){let Se=h.get(ye);Se===void 0&&(Se=new WeakMap,h.set(ye,Se));let Ue=Se.get(D);Ue===void 0&&(Ue=t.getUniformBlockIndex(ye,D.name),Se.set(D,Ue))}function Xe(D,ye){const Ue=h.get(ye).get(D);c.get(ye)!==Ue&&(t.uniformBlockBinding(ye,Ue,D.__bindingPointIndex),c.set(ye,Ue))}function ge(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},ne=null,oe={},m={},g=new WeakMap,x=[],v=null,f=!1,_=null,p=null,y=null,R=null,S=null,T=null,P=null,E=new Oe(0,0,0),w=0,N=!1,B=null,te=null,L=null,H=null,G=null,X.set(0,0,t.canvas.width,t.canvas.height),he.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:U,disable:W,bindFramebuffer:j,drawBuffers:b,useProgram:$,setBlending:Z,setMaterial:Me,setFlipSided:_e,setCullFace:A,setLineWidth:M,setPolygonOffset:k,setScissorTest:de,activeTexture:ce,bindTexture:ue,unbindTexture:Ce,compressedTexImage2D:xe,compressedTexImage3D:Ae,texImage2D:Pe,texImage3D:Re,updateUBOMapping:vt,uniformBlockBinding:Xe,texStorage2D:$e,texStorage3D:ze,texSubImage2D:Le,texSubImage3D:Be,compressedTexSubImage2D:fe,compressedTexSubImage3D:Ze,scissor:Ge,viewport:Je,reset:ge}}function IA(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return m?new OffscreenCanvas(A,M):lu("canvas")}function x(A,M,k,de){let ce=1;if((A.width>de||A.height>de)&&(ce=de/Math.max(A.width,A.height)),ce<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ue=M?id:Math.floor,Ce=ue(ce*A.width),xe=ue(ce*A.height);h===void 0&&(h=g(Ce,xe));const Ae=k?g(Ce,xe):h;return Ae.width=Ce,Ae.height=xe,Ae.getContext("2d").drawImage(A,0,0,Ce,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Ce+"x"+xe+")."),Ae}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function v(A){return mm(A.width)&&mm(A.height)}function f(A){return a?!1:A.wrapS!==Zn||A.wrapT!==Zn||A.minFilter!==on&&A.minFilter!==In}function _(A,M){return A.generateMipmaps&&M&&A.minFilter!==on&&A.minFilter!==In}function p(A){t.generateMipmap(A)}function y(A,M,k,de,ce=!1){if(a===!1)return M;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ue=M;if(M===t.RED&&(k===t.FLOAT&&(ue=t.R32F),k===t.HALF_FLOAT&&(ue=t.R16F),k===t.UNSIGNED_BYTE&&(ue=t.R8)),M===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(ue=t.R8UI),k===t.UNSIGNED_SHORT&&(ue=t.R16UI),k===t.UNSIGNED_INT&&(ue=t.R32UI),k===t.BYTE&&(ue=t.R8I),k===t.SHORT&&(ue=t.R16I),k===t.INT&&(ue=t.R32I)),M===t.RG&&(k===t.FLOAT&&(ue=t.RG32F),k===t.HALF_FLOAT&&(ue=t.RG16F),k===t.UNSIGNED_BYTE&&(ue=t.RG8)),M===t.RGBA){const Ce=ce?ru:et.getTransfer(de);k===t.FLOAT&&(ue=t.RGBA32F),k===t.HALF_FLOAT&&(ue=t.RGBA16F),k===t.UNSIGNED_BYTE&&(ue=Ce===at?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT_4_4_4_4&&(ue=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(ue=t.RGB5_A1)}return(ue===t.R16F||ue===t.R32F||ue===t.RG16F||ue===t.RG32F||ue===t.RGBA16F||ue===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function R(A,M,k){return _(A,k)===!0||A.isFramebufferTexture&&A.minFilter!==on&&A.minFilter!==In?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function S(A){return A===on||A===Hp||A===mc?t.NEAREST:t.LINEAR}function T(A){const M=A.target;M.removeEventListener("dispose",T),E(M),M.isVideoTexture&&c.delete(M)}function P(A){const M=A.target;M.removeEventListener("dispose",P),N(M)}function E(A){const M=i.get(A);if(M.__webglInit===void 0)return;const k=A.source,de=d.get(k);if(de){const ce=de[M.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&w(A),Object.keys(de).length===0&&d.delete(k)}i.remove(A)}function w(A){const M=i.get(A);t.deleteTexture(M.__webglTexture);const k=A.source,de=d.get(k);delete de[M.__cacheKey],o.memory.textures--}function N(A){const M=A.texture,k=i.get(A),de=i.get(M);if(de.__webglTexture!==void 0&&(t.deleteTexture(de.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(k.__webglFramebuffer[ce]))for(let ue=0;ue<k.__webglFramebuffer[ce].length;ue++)t.deleteFramebuffer(k.__webglFramebuffer[ce][ue]);else t.deleteFramebuffer(k.__webglFramebuffer[ce]);k.__webglDepthbuffer&&t.deleteRenderbuffer(k.__webglDepthbuffer[ce])}else{if(Array.isArray(k.__webglFramebuffer))for(let ce=0;ce<k.__webglFramebuffer.length;ce++)t.deleteFramebuffer(k.__webglFramebuffer[ce]);else t.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&t.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&t.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let ce=0;ce<k.__webglColorRenderbuffer.length;ce++)k.__webglColorRenderbuffer[ce]&&t.deleteRenderbuffer(k.__webglColorRenderbuffer[ce]);k.__webglDepthRenderbuffer&&t.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ce=0,ue=M.length;ce<ue;ce++){const Ce=i.get(M[ce]);Ce.__webglTexture&&(t.deleteTexture(Ce.__webglTexture),o.memory.textures--),i.remove(M[ce])}i.remove(M),i.remove(A)}let B=0;function te(){B=0}function L(){const A=B;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),B+=1,A}function H(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function G(A,M){const k=i.get(A);if(A.isVideoTexture&&Me(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){const de=A.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(k,A,M);return}}n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+M)}function ee(A,M){const k=i.get(A);if(A.version>0&&k.__version!==A.version){X(k,A,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+M)}function I(A,M){const k=i.get(A);if(A.version>0&&k.__version!==A.version){X(k,A,M);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+M)}function O(A,M){const k=i.get(A);if(A.version>0&&k.__version!==A.version){he(k,A,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+M)}const V={[Vr]:t.REPEAT,[Zn]:t.CLAMP_TO_EDGE,[Qf]:t.MIRRORED_REPEAT},ne={[on]:t.NEAREST,[Hp]:t.NEAREST_MIPMAP_NEAREST,[mc]:t.NEAREST_MIPMAP_LINEAR,[In]:t.LINEAR,[mE]:t.LINEAR_MIPMAP_NEAREST,[ca]:t.LINEAR_MIPMAP_LINEAR},oe={[RE]:t.NEVER,[IE]:t.ALWAYS,[CE]:t.LESS,[n_]:t.LEQUAL,[bE]:t.EQUAL,[DE]:t.GEQUAL,[PE]:t.GREATER,[LE]:t.NOTEQUAL};function Y(A,M,k){if(k?(t.texParameteri(A,t.TEXTURE_WRAP_S,V[M.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,V[M.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,V[M.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,ne[M.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,ne[M.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==Zn||M.wrapT!==Zn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,S(M.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,S(M.minFilter)),M.minFilter!==on&&M.minFilter!==In&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,oe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const de=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===on||M.minFilter!==mc&&M.minFilter!==ca||M.type===ji&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===fa&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(A,de.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function se(A,M){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",T));const de=M.source;let ce=d.get(de);ce===void 0&&(ce={},d.set(de,ce));const ue=H(M);if(ue!==A.__cacheKey){ce[ue]===void 0&&(ce[ue]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ce[ue].usedTimes++;const Ce=ce[A.__cacheKey];Ce!==void 0&&(ce[A.__cacheKey].usedTimes--,Ce.usedTimes===0&&w(M)),A.__cacheKey=ue,A.__webglTexture=ce[ue].texture}return k}function X(A,M,k){let de=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(de=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(de=t.TEXTURE_3D);const ce=se(A,M),ue=M.source;n.bindTexture(de,A.__webglTexture,t.TEXTURE0+k);const Ce=i.get(ue);if(ue.version!==Ce.__version||ce===!0){n.activeTexture(t.TEXTURE0+k);const xe=et.getPrimaries(et.workingColorSpace),Ae=M.colorSpace===Fn?null:et.getPrimaries(M.colorSpace),Le=M.colorSpace===Fn||xe===Ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Be=f(M)&&v(M.image)===!1;let fe=x(M.image,Be,!1,r.maxTextureSize);fe=_e(M,fe);const Ze=v(fe)||a,$e=s.convert(M.format,M.colorSpace);let ze=s.convert(M.type),Pe=y(M.internalFormat,$e,ze,M.colorSpace,M.isVideoTexture);Y(de,M,Ze);let Re;const Ge=M.mipmaps,Je=a&&M.isVideoTexture!==!0&&Pe!==Qv,vt=Ce.__version===void 0||ce===!0,Xe=R(M,fe,Ze);if(M.isDepthTexture)Pe=t.DEPTH_COMPONENT,a?M.type===ji?Pe=t.DEPTH_COMPONENT32F:M.type===Xi?Pe=t.DEPTH_COMPONENT24:M.type===Ur?Pe=t.DEPTH24_STENCIL8:Pe=t.DEPTH_COMPONENT16:M.type===ji&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Fr&&Pe===t.DEPTH_COMPONENT&&M.type!==lh&&M.type!==Xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Xi,ze=s.convert(M.type)),M.format===eo&&Pe===t.DEPTH_COMPONENT&&(Pe=t.DEPTH_STENCIL,M.type!==Ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Ur,ze=s.convert(M.type))),vt&&(Je?n.texStorage2D(t.TEXTURE_2D,1,Pe,fe.width,fe.height):n.texImage2D(t.TEXTURE_2D,0,Pe,fe.width,fe.height,0,$e,ze,null));else if(M.isDataTexture)if(Ge.length>0&&Ze){Je&&vt&&n.texStorage2D(t.TEXTURE_2D,Xe,Pe,Ge[0].width,Ge[0].height);for(let ge=0,D=Ge.length;ge<D;ge++)Re=Ge[ge],Je?n.texSubImage2D(t.TEXTURE_2D,ge,0,0,Re.width,Re.height,$e,ze,Re.data):n.texImage2D(t.TEXTURE_2D,ge,Pe,Re.width,Re.height,0,$e,ze,Re.data);M.generateMipmaps=!1}else Je?(vt&&n.texStorage2D(t.TEXTURE_2D,Xe,Pe,fe.width,fe.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe.width,fe.height,$e,ze,fe.data)):n.texImage2D(t.TEXTURE_2D,0,Pe,fe.width,fe.height,0,$e,ze,fe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Je&&vt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Xe,Pe,Ge[0].width,Ge[0].height,fe.depth);for(let ge=0,D=Ge.length;ge<D;ge++)Re=Ge[ge],M.format!==Jn?$e!==null?Je?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,Re.width,Re.height,fe.depth,$e,Re.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ge,Pe,Re.width,Re.height,fe.depth,0,Re.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,Re.width,Re.height,fe.depth,$e,ze,Re.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ge,Pe,Re.width,Re.height,fe.depth,0,$e,ze,Re.data)}else{Je&&vt&&n.texStorage2D(t.TEXTURE_2D,Xe,Pe,Ge[0].width,Ge[0].height);for(let ge=0,D=Ge.length;ge<D;ge++)Re=Ge[ge],M.format!==Jn?$e!==null?Je?n.compressedTexSubImage2D(t.TEXTURE_2D,ge,0,0,Re.width,Re.height,$e,Re.data):n.compressedTexImage2D(t.TEXTURE_2D,ge,Pe,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?n.texSubImage2D(t.TEXTURE_2D,ge,0,0,Re.width,Re.height,$e,ze,Re.data):n.texImage2D(t.TEXTURE_2D,ge,Pe,Re.width,Re.height,0,$e,ze,Re.data)}else if(M.isDataArrayTexture)Je?(vt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Xe,Pe,fe.width,fe.height,fe.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,$e,ze,fe.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,fe.width,fe.height,fe.depth,0,$e,ze,fe.data);else if(M.isData3DTexture)Je?(vt&&n.texStorage3D(t.TEXTURE_3D,Xe,Pe,fe.width,fe.height,fe.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,$e,ze,fe.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,fe.width,fe.height,fe.depth,0,$e,ze,fe.data);else if(M.isFramebufferTexture){if(vt)if(Je)n.texStorage2D(t.TEXTURE_2D,Xe,Pe,fe.width,fe.height);else{let ge=fe.width,D=fe.height;for(let ye=0;ye<Xe;ye++)n.texImage2D(t.TEXTURE_2D,ye,Pe,ge,D,0,$e,ze,null),ge>>=1,D>>=1}}else if(Ge.length>0&&Ze){Je&&vt&&n.texStorage2D(t.TEXTURE_2D,Xe,Pe,Ge[0].width,Ge[0].height);for(let ge=0,D=Ge.length;ge<D;ge++)Re=Ge[ge],Je?n.texSubImage2D(t.TEXTURE_2D,ge,0,0,$e,ze,Re):n.texImage2D(t.TEXTURE_2D,ge,Pe,$e,ze,Re);M.generateMipmaps=!1}else Je?(vt&&n.texStorage2D(t.TEXTURE_2D,Xe,Pe,fe.width,fe.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,$e,ze,fe)):n.texImage2D(t.TEXTURE_2D,0,Pe,$e,ze,fe);_(M,Ze)&&p(de),Ce.__version=ue.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function he(A,M,k){if(M.image.length!==6)return;const de=se(A,M),ce=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+k);const ue=i.get(ce);if(ce.version!==ue.__version||de===!0){n.activeTexture(t.TEXTURE0+k);const Ce=et.getPrimaries(et.workingColorSpace),xe=M.colorSpace===Fn?null:et.getPrimaries(M.colorSpace),Ae=M.colorSpace===Fn||Ce===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Le=M.isCompressedTexture||M.image[0].isCompressedTexture,Be=M.image[0]&&M.image[0].isDataTexture,fe=[];for(let ge=0;ge<6;ge++)!Le&&!Be?fe[ge]=x(M.image[ge],!1,!0,r.maxCubemapSize):fe[ge]=Be?M.image[ge].image:M.image[ge],fe[ge]=_e(M,fe[ge]);const Ze=fe[0],$e=v(Ze)||a,ze=s.convert(M.format,M.colorSpace),Pe=s.convert(M.type),Re=y(M.internalFormat,ze,Pe,M.colorSpace),Ge=a&&M.isVideoTexture!==!0,Je=ue.__version===void 0||de===!0;let vt=R(M,Ze,$e);Y(t.TEXTURE_CUBE_MAP,M,$e);let Xe;if(Le){Ge&&Je&&n.texStorage2D(t.TEXTURE_CUBE_MAP,vt,Re,Ze.width,Ze.height);for(let ge=0;ge<6;ge++){Xe=fe[ge].mipmaps;for(let D=0;D<Xe.length;D++){const ye=Xe[D];M.format!==Jn?ze!==null?Ge?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,D,0,0,ye.width,ye.height,ze,ye.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,D,Re,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,D,0,0,ye.width,ye.height,ze,Pe,ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,D,Re,ye.width,ye.height,0,ze,Pe,ye.data)}}}else{Xe=M.mipmaps,Ge&&Je&&(Xe.length>0&&vt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,vt,Re,fe[0].width,fe[0].height));for(let ge=0;ge<6;ge++)if(Be){Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,fe[ge].width,fe[ge].height,ze,Pe,fe[ge].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Re,fe[ge].width,fe[ge].height,0,ze,Pe,fe[ge].data);for(let D=0;D<Xe.length;D++){const Se=Xe[D].image[ge].image;Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,D+1,0,0,Se.width,Se.height,ze,Pe,Se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,D+1,Re,Se.width,Se.height,0,ze,Pe,Se.data)}}else{Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ze,Pe,fe[ge]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Re,ze,Pe,fe[ge]);for(let D=0;D<Xe.length;D++){const ye=Xe[D];Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,D+1,0,0,ze,Pe,ye.image[ge]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,D+1,Re,ze,Pe,ye.image[ge])}}}_(M,$e)&&p(t.TEXTURE_CUBE_MAP),ue.__version=ce.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ae(A,M,k,de,ce,ue){const Ce=s.convert(k.format,k.colorSpace),xe=s.convert(k.type),Ae=y(k.internalFormat,Ce,xe,k.colorSpace);if(!i.get(M).__hasExternalTextures){const Be=Math.max(1,M.width>>ue),fe=Math.max(1,M.height>>ue);ce===t.TEXTURE_3D||ce===t.TEXTURE_2D_ARRAY?n.texImage3D(ce,ue,Ae,Be,fe,M.depth,0,Ce,xe,null):n.texImage2D(ce,ue,Ae,Be,fe,0,Ce,xe,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Z(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,de,ce,i.get(k).__webglTexture,0,re(M)):(ce===t.TEXTURE_2D||ce>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,de,ce,i.get(k).__webglTexture,ue),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ie(A,M,k){if(t.bindRenderbuffer(t.RENDERBUFFER,A),M.depthBuffer&&!M.stencilBuffer){let de=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(k||Z(M)){const ce=M.depthTexture;ce&&ce.isDepthTexture&&(ce.type===ji?de=t.DEPTH_COMPONENT32F:ce.type===Xi&&(de=t.DEPTH_COMPONENT24));const ue=re(M);Z(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,de,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,de,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,de,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(M.depthBuffer&&M.stencilBuffer){const de=re(M);k&&Z(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,t.DEPTH24_STENCIL8,M.width,M.height):Z(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const de=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ce=0;ce<de.length;ce++){const ue=de[ce],Ce=s.convert(ue.format,ue.colorSpace),xe=s.convert(ue.type),Ae=y(ue.internalFormat,Ce,xe,ue.colorSpace),Le=re(M);k&&Z(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,Ae,M.width,M.height):Z(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Le,Ae,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Ae,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function U(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G(M.depthTexture,0);const de=i.get(M.depthTexture).__webglTexture,ce=re(M);if(M.depthTexture.format===Fr)Z(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,de,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,de,0);else if(M.depthTexture.format===eo)Z(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,de,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function W(A){const M=i.get(A),k=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");U(M.__webglFramebuffer,A)}else if(k){M.__webglDepthbuffer=[];for(let de=0;de<6;de++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[de]),M.__webglDepthbuffer[de]=t.createRenderbuffer(),ie(M.__webglDepthbuffer[de],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),ie(M.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function j(A,M,k){const de=i.get(A);M!==void 0&&ae(de.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&W(A)}function b(A){const M=A.texture,k=i.get(A),de=i.get(M);A.addEventListener("dispose",P),A.isWebGLMultipleRenderTargets!==!0&&(de.__webglTexture===void 0&&(de.__webglTexture=t.createTexture()),de.__version=M.version,o.memory.textures++);const ce=A.isWebGLCubeRenderTarget===!0,ue=A.isWebGLMultipleRenderTargets===!0,Ce=v(A)||a;if(ce){k.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(a&&M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[xe]=[];for(let Ae=0;Ae<M.mipmaps.length;Ae++)k.__webglFramebuffer[xe][Ae]=t.createFramebuffer()}else k.__webglFramebuffer[xe]=t.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let xe=0;xe<M.mipmaps.length;xe++)k.__webglFramebuffer[xe]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(ue)if(r.drawBuffers){const xe=A.texture;for(let Ae=0,Le=xe.length;Ae<Le;Ae++){const Be=i.get(xe[Ae]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Z(A)===!1){const xe=ue?M:[M];k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Ae=0;Ae<xe.length;Ae++){const Le=xe[Ae];k.__webglColorRenderbuffer[Ae]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[Ae]);const Be=s.convert(Le.format,Le.colorSpace),fe=s.convert(Le.type),Ze=y(Le.internalFormat,Be,fe,Le.colorSpace,A.isXRRenderTarget===!0),$e=re(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,$e,Ze,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,k.__webglColorRenderbuffer[Ae])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),ie(k.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ce){n.bindTexture(t.TEXTURE_CUBE_MAP,de.__webglTexture),Y(t.TEXTURE_CUBE_MAP,M,Ce);for(let xe=0;xe<6;xe++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let Ae=0;Ae<M.mipmaps.length;Ae++)ae(k.__webglFramebuffer[xe][Ae],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ae);else ae(k.__webglFramebuffer[xe],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);_(M,Ce)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){const xe=A.texture;for(let Ae=0,Le=xe.length;Ae<Le;Ae++){const Be=xe[Ae],fe=i.get(Be);n.bindTexture(t.TEXTURE_2D,fe.__webglTexture),Y(t.TEXTURE_2D,Be,Ce),ae(k.__webglFramebuffer,A,Be,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,0),_(Be,Ce)&&p(t.TEXTURE_2D)}n.unbindTexture()}else{let xe=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?xe=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(xe,de.__webglTexture),Y(xe,M,Ce),a&&M.mipmaps&&M.mipmaps.length>0)for(let Ae=0;Ae<M.mipmaps.length;Ae++)ae(k.__webglFramebuffer[Ae],A,M,t.COLOR_ATTACHMENT0,xe,Ae);else ae(k.__webglFramebuffer,A,M,t.COLOR_ATTACHMENT0,xe,0);_(M,Ce)&&p(xe),n.unbindTexture()}A.depthBuffer&&W(A)}function $(A){const M=v(A)||a,k=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let de=0,ce=k.length;de<ce;de++){const ue=k[de];if(_(ue,M)){const Ce=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,xe=i.get(ue).__webglTexture;n.bindTexture(Ce,xe),p(Ce),n.unbindTexture()}}}function J(A){if(a&&A.samples>0&&Z(A)===!1){const M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],k=A.width,de=A.height;let ce=t.COLOR_BUFFER_BIT;const ue=[],Ce=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=i.get(A),Ae=A.isWebGLMultipleRenderTargets===!0;if(Ae)for(let Le=0;Le<M.length;Le++)n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Le=0;Le<M.length;Le++){ue.push(t.COLOR_ATTACHMENT0+Le),A.depthBuffer&&ue.push(Ce);const Be=xe.__ignoreDepthValues!==void 0?xe.__ignoreDepthValues:!1;if(Be===!1&&(A.depthBuffer&&(ce|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ce|=t.STENCIL_BUFFER_BIT)),Ae&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,xe.__webglColorRenderbuffer[Le]),Be===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Ce]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Ce])),Ae){const fe=i.get(M[Le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,fe,0)}t.blitFramebuffer(0,0,k,de,0,0,k,de,ce,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ue)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Ae)for(let Le=0;Le<M.length;Le++){n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,xe.__webglColorRenderbuffer[Le]);const Be=i.get(M[Le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,Be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}}function re(A){return Math.min(r.maxSamples,A.samples)}function Z(A){const M=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Me(A){const M=o.render.frame;c.get(A)!==M&&(c.set(A,M),A.update())}function _e(A,M){const k=A.colorSpace,de=A.format,ce=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===td||k!==Li&&k!==Fn&&(et.getTransfer(k)===at?a===!1?e.has("EXT_sRGB")===!0&&de===Jn?(A.format=td,A.minFilter=In,A.generateMipmaps=!1):M=r_.sRGBToLinear(M):(de!==Jn||ce!==rr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}this.allocateTextureUnit=L,this.resetTextureUnits=te,this.setTexture2D=G,this.setTexture2DArray=ee,this.setTexture3D=I,this.setTextureCube=O,this.rebindTextures=j,this.setupRenderTarget=b,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=W,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Z}function NA(t,e,n){const i=n.isWebGL2;function r(s,o=Fn){let a;const l=et.getTransfer(o);if(s===rr)return t.UNSIGNED_BYTE;if(s===$v)return t.UNSIGNED_SHORT_4_4_4_4;if(s===qv)return t.UNSIGNED_SHORT_5_5_5_1;if(s===gE)return t.BYTE;if(s===vE)return t.SHORT;if(s===lh)return t.UNSIGNED_SHORT;if(s===Yv)return t.INT;if(s===Xi)return t.UNSIGNED_INT;if(s===ji)return t.FLOAT;if(s===fa)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===_E)return t.ALPHA;if(s===Jn)return t.RGBA;if(s===xE)return t.LUMINANCE;if(s===yE)return t.LUMINANCE_ALPHA;if(s===Fr)return t.DEPTH_COMPONENT;if(s===eo)return t.DEPTH_STENCIL;if(s===td)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===SE)return t.RED;if(s===Kv)return t.RED_INTEGER;if(s===EE)return t.RG;if(s===Zv)return t.RG_INTEGER;if(s===Jv)return t.RGBA_INTEGER;if(s===gc||s===vc||s===_c||s===xc)if(l===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===gc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===vc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===_c)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===xc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===gc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===vc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===_c)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===xc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Gp||s===Vp||s===Wp||s===Xp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Gp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Vp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Wp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Xp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Qv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===jp||s===Yp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===jp)return l===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Yp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===$p||s===qp||s===Kp||s===Zp||s===Jp||s===Qp||s===em||s===tm||s===nm||s===im||s===rm||s===sm||s===om||s===am)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===$p)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===qp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Kp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Zp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Jp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Qp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===em)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===tm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===nm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===im)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===rm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===sm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===om)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===am)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===yc||s===lm||s===um)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===yc)return l===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===lm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===um)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ME||s===cm||s===fm||s===dm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===yc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===cm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===fm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===dm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ur?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class UA extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Lr extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FA={type:"move"};class Xc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const x of e.hand.values()){const v=n.getJointPose(x,i),f=this._getHandJoint(u,x);v!==null&&(f.matrix.fromArray(v.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=v.radius),f.visible=v!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=c.position.distanceTo(h.position),m=.02,g=.005;u.inputState.pinching&&d>m+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(FA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Lr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class OA extends lo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,d=null,m=null,g=null;const x=n.getContextAttributes();let v=null,f=null;const _=[],p=[],y=new me;let R=null;const S=new Un;S.layers.enable(1),S.viewport=new Ft;const T=new Un;T.layers.enable(2),T.viewport=new Ft;const P=[S,T],E=new UA;E.layers.enable(1),E.layers.enable(2);let w=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let se=_[Y];return se===void 0&&(se=new Xc,_[Y]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Y){let se=_[Y];return se===void 0&&(se=new Xc,_[Y]=se),se.getGripSpace()},this.getHand=function(Y){let se=_[Y];return se===void 0&&(se=new Xc,_[Y]=se),se.getHandSpace()};function B(Y){const se=p.indexOf(Y.inputSource);if(se===-1)return;const X=_[se];X!==void 0&&(X.update(Y.inputSource,Y.frame,u||o),X.dispatchEvent({type:Y.type,data:Y.inputSource}))}function te(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",L);for(let Y=0;Y<_.length;Y++){const se=p[Y];se!==null&&(p[Y]=null,_[Y].disconnect(se))}w=null,N=null,e.setRenderTarget(v),m=null,d=null,h=null,r=null,f=null,oe.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Y){u=Y},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",te),r.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const se={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,se),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new Wr(m.framebufferWidth,m.framebufferHeight,{format:Jn,type:rr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let se=null,X=null,he=null;x.depth&&(he=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,se=x.stencil?eo:Fr,X=x.stencil?Ur:Xi);const ae={colorFormat:n.RGBA8,depthFormat:he,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(ae),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new Wr(d.textureWidth,d.textureHeight,{format:Jn,type:rr,depthTexture:new __(d.textureWidth,d.textureHeight,X,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const ie=e.properties.get(f);ie.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),oe.setContext(r),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(Y){for(let se=0;se<Y.removed.length;se++){const X=Y.removed[se],he=p.indexOf(X);he>=0&&(p[he]=null,_[he].disconnect(X))}for(let se=0;se<Y.added.length;se++){const X=Y.added[se];let he=p.indexOf(X);if(he===-1){for(let ie=0;ie<_.length;ie++)if(ie>=p.length){p.push(X),he=ie;break}else if(p[ie]===null){p[ie]=X,he=ie;break}if(he===-1)break}const ae=_[he];ae&&ae.connect(X)}}const H=new F,G=new F;function ee(Y,se,X){H.setFromMatrixPosition(se.matrixWorld),G.setFromMatrixPosition(X.matrixWorld);const he=H.distanceTo(G),ae=se.projectionMatrix.elements,ie=X.projectionMatrix.elements,U=ae[14]/(ae[10]-1),W=ae[14]/(ae[10]+1),j=(ae[9]+1)/ae[5],b=(ae[9]-1)/ae[5],$=(ae[8]-1)/ae[0],J=(ie[8]+1)/ie[0],re=U*$,Z=U*J,Me=he/(-$+J),_e=Me*-$;se.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(_e),Y.translateZ(Me),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const A=U+Me,M=W+Me,k=re-_e,de=Z+(he-_e),ce=j*W/M*A,ue=b*W/M*A;Y.projectionMatrix.makePerspective(k,de,ce,ue,A,M),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function I(Y,se){se===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(se.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;E.near=T.near=S.near=Y.near,E.far=T.far=S.far=Y.far,(w!==E.near||N!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),w=E.near,N=E.far);const se=Y.parent,X=E.cameras;I(E,se);for(let he=0;he<X.length;he++)I(X[he],se);X.length===2?ee(E,S,T):E.projectionMatrix.copy(S.projectionMatrix),O(Y,E,se)};function O(Y,se,X){X===null?Y.matrix.copy(se.matrixWorld):(Y.matrix.copy(X.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(se.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(se.projectionMatrix),Y.projectionMatrixInverse.copy(se.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=nd*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)};let V=null;function ne(Y,se){if(c=se.getViewerPose(u||o),g=se,c!==null){const X=c.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let he=!1;X.length!==E.cameras.length&&(E.cameras.length=0,he=!0);for(let ae=0;ae<X.length;ae++){const ie=X[ae];let U=null;if(m!==null)U=m.getViewport(ie);else{const j=h.getViewSubImage(d,ie);U=j.viewport,ae===0&&(e.setRenderTargetTextures(f,j.colorTexture,d.ignoreDepthValues?void 0:j.depthStencilTexture),e.setRenderTarget(f))}let W=P[ae];W===void 0&&(W=new Un,W.layers.enable(ae),W.viewport=new Ft,P[ae]=W),W.matrix.fromArray(ie.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(ie.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(U.x,U.y,U.width,U.height),ae===0&&(E.matrix.copy(W.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),he===!0&&E.cameras.push(W)}}for(let X=0;X<_.length;X++){const he=p[X],ae=_[X];he!==null&&ae!==void 0&&ae.update(he,se,u||o)}V&&V(Y,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),g=null}const oe=new g_;oe.setAnimationLoop(ne),this.setAnimationLoop=function(Y){V=Y},this.dispose=function(){}}}function zA(t,e){function n(v,f){v.matrixAutoUpdate===!0&&v.updateMatrix(),f.value.copy(v.matrix)}function i(v,f){f.color.getRGB(v.fogColor.value,h_(t)),f.isFog?(v.fogNear.value=f.near,v.fogFar.value=f.far):f.isFogExp2&&(v.fogDensity.value=f.density)}function r(v,f,_,p,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(v,f):f.isMeshToonMaterial?(s(v,f),h(v,f)):f.isMeshPhongMaterial?(s(v,f),c(v,f)):f.isMeshStandardMaterial?(s(v,f),d(v,f),f.isMeshPhysicalMaterial&&m(v,f,y)):f.isMeshMatcapMaterial?(s(v,f),g(v,f)):f.isMeshDepthMaterial?s(v,f):f.isMeshDistanceMaterial?(s(v,f),x(v,f)):f.isMeshNormalMaterial?s(v,f):f.isLineBasicMaterial?(o(v,f),f.isLineDashedMaterial&&a(v,f)):f.isPointsMaterial?l(v,f,_,p):f.isSpriteMaterial?u(v,f):f.isShadowMaterial?(v.color.value.copy(f.color),v.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(v,f){v.opacity.value=f.opacity,f.color&&v.diffuse.value.copy(f.color),f.emissive&&v.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(v.map.value=f.map,n(f.map,v.mapTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.bumpMap&&(v.bumpMap.value=f.bumpMap,n(f.bumpMap,v.bumpMapTransform),v.bumpScale.value=f.bumpScale,f.side===vn&&(v.bumpScale.value*=-1)),f.normalMap&&(v.normalMap.value=f.normalMap,n(f.normalMap,v.normalMapTransform),v.normalScale.value.copy(f.normalScale),f.side===vn&&v.normalScale.value.negate()),f.displacementMap&&(v.displacementMap.value=f.displacementMap,n(f.displacementMap,v.displacementMapTransform),v.displacementScale.value=f.displacementScale,v.displacementBias.value=f.displacementBias),f.emissiveMap&&(v.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,v.emissiveMapTransform)),f.specularMap&&(v.specularMap.value=f.specularMap,n(f.specularMap,v.specularMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest);const _=e.get(f).envMap;if(_&&(v.envMap.value=_,v.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=f.reflectivity,v.ior.value=f.ior,v.refractionRatio.value=f.refractionRatio),f.lightMap){v.lightMap.value=f.lightMap;const p=t._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=f.lightMapIntensity*p,n(f.lightMap,v.lightMapTransform)}f.aoMap&&(v.aoMap.value=f.aoMap,v.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,v.aoMapTransform))}function o(v,f){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,f.map&&(v.map.value=f.map,n(f.map,v.mapTransform))}function a(v,f){v.dashSize.value=f.dashSize,v.totalSize.value=f.dashSize+f.gapSize,v.scale.value=f.scale}function l(v,f,_,p){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,v.size.value=f.size*_,v.scale.value=p*.5,f.map&&(v.map.value=f.map,n(f.map,v.uvTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest)}function u(v,f){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,v.rotation.value=f.rotation,f.map&&(v.map.value=f.map,n(f.map,v.mapTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest)}function c(v,f){v.specular.value.copy(f.specular),v.shininess.value=Math.max(f.shininess,1e-4)}function h(v,f){f.gradientMap&&(v.gradientMap.value=f.gradientMap)}function d(v,f){v.metalness.value=f.metalness,f.metalnessMap&&(v.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,v.metalnessMapTransform)),v.roughness.value=f.roughness,f.roughnessMap&&(v.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,v.roughnessMapTransform)),e.get(f).envMap&&(v.envMapIntensity.value=f.envMapIntensity)}function m(v,f,_){v.ior.value=f.ior,f.sheen>0&&(v.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),v.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(v.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,v.sheenColorMapTransform)),f.sheenRoughnessMap&&(v.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,v.sheenRoughnessMapTransform))),f.clearcoat>0&&(v.clearcoat.value=f.clearcoat,v.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(v.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,v.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(v.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===vn&&v.clearcoatNormalScale.value.negate())),f.iridescence>0&&(v.iridescence.value=f.iridescence,v.iridescenceIOR.value=f.iridescenceIOR,v.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(v.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,v.iridescenceMapTransform)),f.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),f.transmission>0&&(v.transmission.value=f.transmission,v.transmissionSamplerMap.value=_.texture,v.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(v.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,v.transmissionMapTransform)),v.thickness.value=f.thickness,f.thicknessMap&&(v.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=f.attenuationDistance,v.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(v.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(v.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=f.specularIntensity,v.specularColor.value.copy(f.specularColor),f.specularColorMap&&(v.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,v.specularColorMapTransform)),f.specularIntensityMap&&(v.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,v.specularIntensityMapTransform))}function g(v,f){f.matcap&&(v.matcap.value=f.matcap)}function x(v,f){const _=e.get(f).light;v.referencePosition.value.setFromMatrixPosition(_.matrixWorld),v.nearDistance.value=_.shadow.camera.near,v.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function kA(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,p){const y=p.program;i.uniformBlockBinding(_,y)}function u(_,p){let y=r[_.id];y===void 0&&(g(_),y=c(_),r[_.id]=y,_.addEventListener("dispose",v));const R=p.program;i.updateUBOMapping(_,R);const S=e.render.frame;s[_.id]!==S&&(d(_),s[_.id]=S)}function c(_){const p=h();_.__bindingPointIndex=p;const y=t.createBuffer(),R=_.__size,S=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,R,S),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,p,y),y}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const p=r[_.id],y=_.uniforms,R=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,p);for(let S=0,T=y.length;S<T;S++){const P=Array.isArray(y[S])?y[S]:[y[S]];for(let E=0,w=P.length;E<w;E++){const N=P[E];if(m(N,S,E,R)===!0){const B=N.__offset,te=Array.isArray(N.value)?N.value:[N.value];let L=0;for(let H=0;H<te.length;H++){const G=te[H],ee=x(G);typeof G=="number"||typeof G=="boolean"?(N.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,B+L,N.__data)):G.isMatrix3?(N.__data[0]=G.elements[0],N.__data[1]=G.elements[1],N.__data[2]=G.elements[2],N.__data[3]=0,N.__data[4]=G.elements[3],N.__data[5]=G.elements[4],N.__data[6]=G.elements[5],N.__data[7]=0,N.__data[8]=G.elements[6],N.__data[9]=G.elements[7],N.__data[10]=G.elements[8],N.__data[11]=0):(G.toArray(N.__data,L),L+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,B,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,p,y,R){const S=_.value,T=p+"_"+y;if(R[T]===void 0)return typeof S=="number"||typeof S=="boolean"?R[T]=S:R[T]=S.clone(),!0;{const P=R[T];if(typeof S=="number"||typeof S=="boolean"){if(P!==S)return R[T]=S,!0}else if(P.equals(S)===!1)return P.copy(S),!0}return!1}function g(_){const p=_.uniforms;let y=0;const R=16;for(let T=0,P=p.length;T<P;T++){const E=Array.isArray(p[T])?p[T]:[p[T]];for(let w=0,N=E.length;w<N;w++){const B=E[w],te=Array.isArray(B.value)?B.value:[B.value];for(let L=0,H=te.length;L<H;L++){const G=te[L],ee=x(G),I=y%R;I!==0&&R-I<ee.boundary&&(y+=R-I),B.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=ee.storage}}}const S=y%R;return S>0&&(y+=R-S),_.__size=y,_.__cache={},this}function x(_){const p={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(p.boundary=4,p.storage=4):_.isVector2?(p.boundary=8,p.storage=8):_.isVector3||_.isColor?(p.boundary=16,p.storage=12):_.isVector4?(p.boundary=16,p.storage=16):_.isMatrix3?(p.boundary=48,p.storage=48):_.isMatrix4?(p.boundary=64,p.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),p}function v(_){const p=_.target;p.removeEventListener("dispose",v);const y=o.indexOf(p.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[p.id]),delete r[p.id],delete s[p.id]}function f(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:f}}class w_{constructor(e={}){const{canvas:n=UE(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),g=new Int32Array(4);let x=null,v=null;const f=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gt,this._useLegacyLights=!1,this.toneMapping=ir,this.toneMappingExposure=1;const p=this;let y=!1,R=0,S=0,T=null,P=-1,E=null;const w=new Ft,N=new Ft;let B=null;const te=new Oe(0);let L=0,H=n.width,G=n.height,ee=1,I=null,O=null;const V=new Ft(0,0,H,G),ne=new Ft(0,0,H,G);let oe=!1;const Y=new ch;let se=!1,X=!1,he=null;const ae=new yt,ie=new me,U=new F,W={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function j(){return T===null?ee:1}let b=i;function $(C,z){for(let K=0;K<C.length;K++){const Q=C[K],q=n.getContext(Q,z);if(q!==null)return q}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ah}`),n.addEventListener("webglcontextlost",ge,!1),n.addEventListener("webglcontextrestored",D,!1),n.addEventListener("webglcontextcreationerror",ye,!1),b===null){const z=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&z.shift(),b=$(z,C),b===null)throw $(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&b instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),b.getShaderPrecisionFormat===void 0&&(b.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let J,re,Z,Me,_e,A,M,k,de,ce,ue,Ce,xe,Ae,Le,Be,fe,Ze,$e,ze,Pe,Re,Ge,Je;function vt(){J=new q1(b),re=new V1(b,J,e),J.init(re),Re=new NA(b,J,re),Z=new DA(b,J,re),Me=new J1(b),_e=new _A,A=new IA(b,J,Z,_e,re,Re,Me),M=new X1(p),k=new $1(p),de=new oM(b,re),Ge=new H1(b,J,de,re),ce=new K1(b,de,Me,Ge),ue=new nT(b,ce,de,Me),$e=new tT(b,re,A),Be=new W1(_e),Ce=new vA(p,M,k,J,re,Ge,Be),xe=new zA(p,_e),Ae=new yA,Le=new AA(J,re),Ze=new B1(p,M,k,Z,ue,d,l),fe=new LA(p,ue,re),Je=new kA(b,Me,re,Z),ze=new G1(b,J,Me,re),Pe=new Z1(b,J,Me,re),Me.programs=Ce.programs,p.capabilities=re,p.extensions=J,p.properties=_e,p.renderLists=Ae,p.shadowMap=fe,p.state=Z,p.info=Me}vt();const Xe=new OA(p,b);this.xr=Xe,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const C=J.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=J.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(C){C!==void 0&&(ee=C,this.setSize(H,G,!1))},this.getSize=function(C){return C.set(H,G)},this.setSize=function(C,z,K=!0){if(Xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=C,G=z,n.width=Math.floor(C*ee),n.height=Math.floor(z*ee),K===!0&&(n.style.width=C+"px",n.style.height=z+"px"),this.setViewport(0,0,C,z)},this.getDrawingBufferSize=function(C){return C.set(H*ee,G*ee).floor()},this.setDrawingBufferSize=function(C,z,K){H=C,G=z,ee=K,n.width=Math.floor(C*K),n.height=Math.floor(z*K),this.setViewport(0,0,C,z)},this.getCurrentViewport=function(C){return C.copy(w)},this.getViewport=function(C){return C.copy(V)},this.setViewport=function(C,z,K,Q){C.isVector4?V.set(C.x,C.y,C.z,C.w):V.set(C,z,K,Q),Z.viewport(w.copy(V).multiplyScalar(ee).floor())},this.getScissor=function(C){return C.copy(ne)},this.setScissor=function(C,z,K,Q){C.isVector4?ne.set(C.x,C.y,C.z,C.w):ne.set(C,z,K,Q),Z.scissor(N.copy(ne).multiplyScalar(ee).floor())},this.getScissorTest=function(){return oe},this.setScissorTest=function(C){Z.setScissorTest(oe=C)},this.setOpaqueSort=function(C){I=C},this.setTransparentSort=function(C){O=C},this.getClearColor=function(C){return C.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(C=!0,z=!0,K=!0){let Q=0;if(C){let q=!1;if(T!==null){const we=T.texture.format;q=we===Jv||we===Zv||we===Kv}if(q){const we=T.texture.type,be=we===rr||we===Xi||we===lh||we===Ur||we===$v||we===qv,Ne=Ze.getClearColor(),Fe=Ze.getClearAlpha(),We=Ne.r,ke=Ne.g,He=Ne.b;be?(m[0]=We,m[1]=ke,m[2]=He,m[3]=Fe,b.clearBufferuiv(b.COLOR,0,m)):(g[0]=We,g[1]=ke,g[2]=He,g[3]=Fe,b.clearBufferiv(b.COLOR,0,g))}else Q|=b.COLOR_BUFFER_BIT}z&&(Q|=b.DEPTH_BUFFER_BIT),K&&(Q|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ge,!1),n.removeEventListener("webglcontextrestored",D,!1),n.removeEventListener("webglcontextcreationerror",ye,!1),Ae.dispose(),Le.dispose(),_e.dispose(),M.dispose(),k.dispose(),ue.dispose(),Ge.dispose(),Je.dispose(),Ce.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",en),Xe.removeEventListener("sessionend",rt),he&&(he.dispose(),he=null),tn.stop()};function ge(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=Me.autoReset,z=fe.enabled,K=fe.autoUpdate,Q=fe.needsUpdate,q=fe.type;vt(),Me.autoReset=C,fe.enabled=z,fe.autoUpdate=K,fe.needsUpdate=Q,fe.type=q}function ye(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Se(C){const z=C.target;z.removeEventListener("dispose",Se),Ue(z)}function Ue(C){De(C),_e.remove(C)}function De(C){const z=_e.get(C).programs;z!==void 0&&(z.forEach(function(K){Ce.releaseProgram(K)}),C.isShaderMaterial&&Ce.releaseShaderCache(C))}this.renderBufferDirect=function(C,z,K,Q,q,we){z===null&&(z=W);const be=q.isMesh&&q.matrixWorld.determinant()<0,Ne=K_(C,z,K,Q,q);Z.setMaterial(Q,be);let Fe=K.index,We=1;if(Q.wireframe===!0){if(Fe=ce.getWireframeAttribute(K),Fe===void 0)return;We=2}const ke=K.drawRange,He=K.attributes.position;let St=ke.start*We,xn=(ke.start+ke.count)*We;we!==null&&(St=Math.max(St,we.start*We),xn=Math.min(xn,(we.start+we.count)*We)),Fe!==null?(St=Math.max(St,0),xn=Math.min(xn,Fe.count)):He!=null&&(St=Math.max(St,0),xn=Math.min(xn,He.count));const It=xn-St;if(It<0||It===1/0)return;Ge.setup(q,Q,Ne,K,Fe);let fi,ft=ze;if(Fe!==null&&(fi=de.get(Fe),ft=Pe,ft.setIndex(fi)),q.isMesh)Q.wireframe===!0?(Z.setLineWidth(Q.wireframeLinewidth*j()),ft.setMode(b.LINES)):ft.setMode(b.TRIANGLES);else if(q.isLine){let je=Q.linewidth;je===void 0&&(je=1),Z.setLineWidth(je*j()),q.isLineSegments?ft.setMode(b.LINES):q.isLineLoop?ft.setMode(b.LINE_LOOP):ft.setMode(b.LINE_STRIP)}else q.isPoints?ft.setMode(b.POINTS):q.isSprite&&ft.setMode(b.TRIANGLES);if(q.isBatchedMesh)ft.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)ft.renderInstances(St,It,q.count);else if(K.isInstancedBufferGeometry){const je=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ku=Math.min(K.instanceCount,je);ft.renderInstances(St,It,ku)}else ft.render(St,It)};function nt(C,z,K){C.transparent===!0&&C.side===fn&&C.forceSinglePass===!1?(C.side=vn,C.needsUpdate=!0,wa(C,z,K),C.side=ur,C.needsUpdate=!0,wa(C,z,K),C.side=fn):wa(C,z,K)}this.compile=function(C,z,K=null){K===null&&(K=C),v=Le.get(K),v.init(),_.push(v),K.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),C!==K&&C.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),v.setupLights(p._useLegacyLights);const Q=new Set;return C.traverse(function(q){const we=q.material;if(we)if(Array.isArray(we))for(let be=0;be<we.length;be++){const Ne=we[be];nt(Ne,K,q),Q.add(Ne)}else nt(we,K,q),Q.add(we)}),_.pop(),v=null,Q},this.compileAsync=function(C,z,K=null){const Q=this.compile(C,z,K);return new Promise(q=>{function we(){if(Q.forEach(function(be){_e.get(be).currentProgram.isReady()&&Q.delete(be)}),Q.size===0){q(C);return}setTimeout(we,10)}J.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let it=null;function Dt(C){it&&it(C)}function en(){tn.stop()}function rt(){tn.start()}const tn=new g_;tn.setAnimationLoop(Dt),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(C){it=C,Xe.setAnimationLoop(C),C===null?tn.stop():tn.start()},Xe.addEventListener("sessionstart",en),Xe.addEventListener("sessionend",rt),this.render=function(C,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(z),z=Xe.getCamera()),C.isScene===!0&&C.onBeforeRender(p,C,z,T),v=Le.get(C,_.length),v.init(),_.push(v),ae.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Y.setFromProjectionMatrix(ae),X=this.localClippingEnabled,se=Be.init(this.clippingPlanes,X),x=Ae.get(C,f.length),x.init(),f.push(x),ii(C,z,0,p.sortObjects),x.finish(),p.sortObjects===!0&&x.sort(I,O),this.info.render.frame++,se===!0&&Be.beginShadows();const K=v.state.shadowsArray;if(fe.render(K,C,z),se===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ze.render(x,C),v.setupLights(p._useLegacyLights),z.isArrayCamera){const Q=z.cameras;for(let q=0,we=Q.length;q<we;q++){const be=Q[q];yh(x,C,be,be.viewport)}}else yh(x,C,z);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),C.isScene===!0&&C.onAfterRender(p,C,z),Ge.resetDefaultState(),P=-1,E=null,_.pop(),_.length>0?v=_[_.length-1]:v=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function ii(C,z,K,Q){if(C.visible===!1)return;if(C.layers.test(z.layers)){if(C.isGroup)K=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(z);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Y.intersectsSprite(C)){Q&&U.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ae);const be=ue.update(C),Ne=C.material;Ne.visible&&x.push(C,be,Ne,K,U.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Y.intersectsObject(C))){const be=ue.update(C),Ne=C.material;if(Q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),U.copy(C.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),U.copy(be.boundingSphere.center)),U.applyMatrix4(C.matrixWorld).applyMatrix4(ae)),Array.isArray(Ne)){const Fe=be.groups;for(let We=0,ke=Fe.length;We<ke;We++){const He=Fe[We],St=Ne[He.materialIndex];St&&St.visible&&x.push(C,be,St,K,U.z,He)}}else Ne.visible&&x.push(C,be,Ne,K,U.z,null)}}const we=C.children;for(let be=0,Ne=we.length;be<Ne;be++)ii(we[be],z,K,Q)}function yh(C,z,K,Q){const q=C.opaque,we=C.transmissive,be=C.transparent;v.setupLightsView(K),se===!0&&Be.setGlobalState(p.clippingPlanes,K),we.length>0&&q_(q,we,z,K),Q&&Z.viewport(w.copy(Q)),q.length>0&&Ma(q,z,K),we.length>0&&Ma(we,z,K),be.length>0&&Ma(be,z,K),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function q_(C,z,K,Q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;const we=re.isWebGL2;he===null&&(he=new Wr(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?fa:rr,minFilter:ca,samples:we?4:0})),p.getDrawingBufferSize(ie),we?he.setSize(ie.x,ie.y):he.setSize(id(ie.x),id(ie.y));const be=p.getRenderTarget();p.setRenderTarget(he),p.getClearColor(te),L=p.getClearAlpha(),L<1&&p.setClearColor(16777215,.5),p.clear();const Ne=p.toneMapping;p.toneMapping=ir,Ma(C,K,Q),A.updateMultisampleRenderTarget(he),A.updateRenderTargetMipmap(he);let Fe=!1;for(let We=0,ke=z.length;We<ke;We++){const He=z[We],St=He.object,xn=He.geometry,It=He.material,fi=He.group;if(It.side===fn&&St.layers.test(Q.layers)){const ft=It.side;It.side=vn,It.needsUpdate=!0,Sh(St,K,Q,xn,It,fi),It.side=ft,It.needsUpdate=!0,Fe=!0}}Fe===!0&&(A.updateMultisampleRenderTarget(he),A.updateRenderTargetMipmap(he)),p.setRenderTarget(be),p.setClearColor(te,L),p.toneMapping=Ne}function Ma(C,z,K){const Q=z.isScene===!0?z.overrideMaterial:null;for(let q=0,we=C.length;q<we;q++){const be=C[q],Ne=be.object,Fe=be.geometry,We=Q===null?be.material:Q,ke=be.group;Ne.layers.test(K.layers)&&Sh(Ne,z,K,Fe,We,ke)}}function Sh(C,z,K,Q,q,we){C.onBeforeRender(p,z,K,Q,q,we),C.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),q.onBeforeRender(p,z,K,Q,C,we),q.transparent===!0&&q.side===fn&&q.forceSinglePass===!1?(q.side=vn,q.needsUpdate=!0,p.renderBufferDirect(K,z,Q,q,C,we),q.side=ur,q.needsUpdate=!0,p.renderBufferDirect(K,z,Q,q,C,we),q.side=fn):p.renderBufferDirect(K,z,Q,q,C,we),C.onAfterRender(p,z,K,Q,q,we)}function wa(C,z,K){z.isScene!==!0&&(z=W);const Q=_e.get(C),q=v.state.lights,we=v.state.shadowsArray,be=q.state.version,Ne=Ce.getParameters(C,q.state,we,z,K),Fe=Ce.getProgramCacheKey(Ne);let We=Q.programs;Q.environment=C.isMeshStandardMaterial?z.environment:null,Q.fog=z.fog,Q.envMap=(C.isMeshStandardMaterial?k:M).get(C.envMap||Q.environment),We===void 0&&(C.addEventListener("dispose",Se),We=new Map,Q.programs=We);let ke=We.get(Fe);if(ke!==void 0){if(Q.currentProgram===ke&&Q.lightsStateVersion===be)return Mh(C,Ne),ke}else Ne.uniforms=Ce.getUniforms(C),C.onBuild(K,Ne,p),C.onBeforeCompile(Ne,p),ke=Ce.acquireProgram(Ne,Fe),We.set(Fe,ke),Q.uniforms=Ne.uniforms;const He=Q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(He.clippingPlanes=Be.uniform),Mh(C,Ne),Q.needsLights=J_(C),Q.lightsStateVersion=be,Q.needsLights&&(He.ambientLightColor.value=q.state.ambient,He.lightProbe.value=q.state.probe,He.directionalLights.value=q.state.directional,He.directionalLightShadows.value=q.state.directionalShadow,He.spotLights.value=q.state.spot,He.spotLightShadows.value=q.state.spotShadow,He.rectAreaLights.value=q.state.rectArea,He.ltc_1.value=q.state.rectAreaLTC1,He.ltc_2.value=q.state.rectAreaLTC2,He.pointLights.value=q.state.point,He.pointLightShadows.value=q.state.pointShadow,He.hemisphereLights.value=q.state.hemi,He.directionalShadowMap.value=q.state.directionalShadowMap,He.directionalShadowMatrix.value=q.state.directionalShadowMatrix,He.spotShadowMap.value=q.state.spotShadowMap,He.spotLightMatrix.value=q.state.spotLightMatrix,He.spotLightMap.value=q.state.spotLightMap,He.pointShadowMap.value=q.state.pointShadowMap,He.pointShadowMatrix.value=q.state.pointShadowMatrix),Q.currentProgram=ke,Q.uniformsList=null,ke}function Eh(C){if(C.uniformsList===null){const z=C.currentProgram.getUniforms();C.uniformsList=Ll.seqWithValue(z.seq,C.uniforms)}return C.uniformsList}function Mh(C,z){const K=_e.get(C);K.outputColorSpace=z.outputColorSpace,K.batching=z.batching,K.instancing=z.instancing,K.instancingColor=z.instancingColor,K.skinning=z.skinning,K.morphTargets=z.morphTargets,K.morphNormals=z.morphNormals,K.morphColors=z.morphColors,K.morphTargetsCount=z.morphTargetsCount,K.numClippingPlanes=z.numClippingPlanes,K.numIntersection=z.numClipIntersection,K.vertexAlphas=z.vertexAlphas,K.vertexTangents=z.vertexTangents,K.toneMapping=z.toneMapping}function K_(C,z,K,Q,q){z.isScene!==!0&&(z=W),A.resetTextureUnits();const we=z.fog,be=Q.isMeshStandardMaterial?z.environment:null,Ne=T===null?p.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Li,Fe=(Q.isMeshStandardMaterial?k:M).get(Q.envMap||be),We=Q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ke=!!K.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),He=!!K.morphAttributes.position,St=!!K.morphAttributes.normal,xn=!!K.morphAttributes.color;let It=ir;Q.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(It=p.toneMapping);const fi=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ft=fi!==void 0?fi.length:0,je=_e.get(Q),ku=v.state.lights;if(se===!0&&(X===!0||C!==E)){const bn=C===E&&Q.id===P;Be.setState(Q,C,bn)}let _t=!1;Q.version===je.__version?(je.needsLights&&je.lightsStateVersion!==ku.state.version||je.outputColorSpace!==Ne||q.isBatchedMesh&&je.batching===!1||!q.isBatchedMesh&&je.batching===!0||q.isInstancedMesh&&je.instancing===!1||!q.isInstancedMesh&&je.instancing===!0||q.isSkinnedMesh&&je.skinning===!1||!q.isSkinnedMesh&&je.skinning===!0||q.isInstancedMesh&&je.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&je.instancingColor===!1&&q.instanceColor!==null||je.envMap!==Fe||Q.fog===!0&&je.fog!==we||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Be.numPlanes||je.numIntersection!==Be.numIntersection)||je.vertexAlphas!==We||je.vertexTangents!==ke||je.morphTargets!==He||je.morphNormals!==St||je.morphColors!==xn||je.toneMapping!==It||re.isWebGL2===!0&&je.morphTargetsCount!==ft)&&(_t=!0):(_t=!0,je.__version=Q.version);let hr=je.currentProgram;_t===!0&&(hr=wa(Q,z,q));let wh=!1,ho=!1,Bu=!1;const Xt=hr.getUniforms(),pr=je.uniforms;if(Z.useProgram(hr.program)&&(wh=!0,ho=!0,Bu=!0),Q.id!==P&&(P=Q.id,ho=!0),wh||E!==C){Xt.setValue(b,"projectionMatrix",C.projectionMatrix),Xt.setValue(b,"viewMatrix",C.matrixWorldInverse);const bn=Xt.map.cameraPosition;bn!==void 0&&bn.setValue(b,U.setFromMatrixPosition(C.matrixWorld)),re.logarithmicDepthBuffer&&Xt.setValue(b,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Xt.setValue(b,"isOrthographic",C.isOrthographicCamera===!0),E!==C&&(E=C,ho=!0,Bu=!0)}if(q.isSkinnedMesh){Xt.setOptional(b,q,"bindMatrix"),Xt.setOptional(b,q,"bindMatrixInverse");const bn=q.skeleton;bn&&(re.floatVertexTextures?(bn.boneTexture===null&&bn.computeBoneTexture(),Xt.setValue(b,"boneTexture",bn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(Xt.setOptional(b,q,"batchingTexture"),Xt.setValue(b,"batchingTexture",q._matricesTexture,A));const Hu=K.morphAttributes;if((Hu.position!==void 0||Hu.normal!==void 0||Hu.color!==void 0&&re.isWebGL2===!0)&&$e.update(q,K,hr),(ho||je.receiveShadow!==q.receiveShadow)&&(je.receiveShadow=q.receiveShadow,Xt.setValue(b,"receiveShadow",q.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(pr.envMap.value=Fe,pr.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),ho&&(Xt.setValue(b,"toneMappingExposure",p.toneMappingExposure),je.needsLights&&Z_(pr,Bu),we&&Q.fog===!0&&xe.refreshFogUniforms(pr,we),xe.refreshMaterialUniforms(pr,Q,ee,G,he),Ll.upload(b,Eh(je),pr,A)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Ll.upload(b,Eh(je),pr,A),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Xt.setValue(b,"center",q.center),Xt.setValue(b,"modelViewMatrix",q.modelViewMatrix),Xt.setValue(b,"normalMatrix",q.normalMatrix),Xt.setValue(b,"modelMatrix",q.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const bn=Q.uniformsGroups;for(let Gu=0,Q_=bn.length;Gu<Q_;Gu++)if(re.isWebGL2){const Th=bn[Gu];Je.update(Th,hr),Je.bind(Th,hr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return hr}function Z_(C,z){C.ambientLightColor.needsUpdate=z,C.lightProbe.needsUpdate=z,C.directionalLights.needsUpdate=z,C.directionalLightShadows.needsUpdate=z,C.pointLights.needsUpdate=z,C.pointLightShadows.needsUpdate=z,C.spotLights.needsUpdate=z,C.spotLightShadows.needsUpdate=z,C.rectAreaLights.needsUpdate=z,C.hemisphereLights.needsUpdate=z}function J_(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(C,z,K){_e.get(C.texture).__webglTexture=z,_e.get(C.depthTexture).__webglTexture=K;const Q=_e.get(C);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=K===void 0,Q.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,z){const K=_e.get(C);K.__webglFramebuffer=z,K.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(C,z=0,K=0){T=C,R=z,S=K;let Q=!0,q=null,we=!1,be=!1;if(C){const Fe=_e.get(C);Fe.__useDefaultFramebuffer!==void 0?(Z.bindFramebuffer(b.FRAMEBUFFER,null),Q=!1):Fe.__webglFramebuffer===void 0?A.setupRenderTarget(C):Fe.__hasExternalTextures&&A.rebindTextures(C,_e.get(C.texture).__webglTexture,_e.get(C.depthTexture).__webglTexture);const We=C.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(be=!0);const ke=_e.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ke[z])?q=ke[z][K]:q=ke[z],we=!0):re.isWebGL2&&C.samples>0&&A.useMultisampledRTT(C)===!1?q=_e.get(C).__webglMultisampledFramebuffer:Array.isArray(ke)?q=ke[K]:q=ke,w.copy(C.viewport),N.copy(C.scissor),B=C.scissorTest}else w.copy(V).multiplyScalar(ee).floor(),N.copy(ne).multiplyScalar(ee).floor(),B=oe;if(Z.bindFramebuffer(b.FRAMEBUFFER,q)&&re.drawBuffers&&Q&&Z.drawBuffers(C,q),Z.viewport(w),Z.scissor(N),Z.setScissorTest(B),we){const Fe=_e.get(C.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+z,Fe.__webglTexture,K)}else if(be){const Fe=_e.get(C.texture),We=z||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Fe.__webglTexture,K||0,We)}P=-1},this.readRenderTargetPixels=function(C,z,K,Q,q,we,be){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=_e.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&be!==void 0&&(Ne=Ne[be]),Ne){Z.bindFramebuffer(b.FRAMEBUFFER,Ne);try{const Fe=C.texture,We=Fe.format,ke=Fe.type;if(We!==Jn&&Re.convert(We)!==b.getParameter(b.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=ke===fa&&(J.has("EXT_color_buffer_half_float")||re.isWebGL2&&J.has("EXT_color_buffer_float"));if(ke!==rr&&Re.convert(ke)!==b.getParameter(b.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===ji&&(re.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=C.width-Q&&K>=0&&K<=C.height-q&&b.readPixels(z,K,Q,q,Re.convert(We),Re.convert(ke),we)}finally{const Fe=T!==null?_e.get(T).__webglFramebuffer:null;Z.bindFramebuffer(b.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(C,z,K=0){const Q=Math.pow(2,-K),q=Math.floor(z.image.width*Q),we=Math.floor(z.image.height*Q);A.setTexture2D(z,0),b.copyTexSubImage2D(b.TEXTURE_2D,K,0,0,C.x,C.y,q,we),Z.unbindTexture()},this.copyTextureToTexture=function(C,z,K,Q=0){const q=z.image.width,we=z.image.height,be=Re.convert(K.format),Ne=Re.convert(K.type);A.setTexture2D(K,0),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,K.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,K.unpackAlignment),z.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,Q,C.x,C.y,q,we,be,Ne,z.image.data):z.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,Q,C.x,C.y,z.mipmaps[0].width,z.mipmaps[0].height,be,z.mipmaps[0].data):b.texSubImage2D(b.TEXTURE_2D,Q,C.x,C.y,be,Ne,z.image),Q===0&&K.generateMipmaps&&b.generateMipmap(b.TEXTURE_2D),Z.unbindTexture()},this.copyTextureToTexture3D=function(C,z,K,Q,q=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=C.max.x-C.min.x+1,be=C.max.y-C.min.y+1,Ne=C.max.z-C.min.z+1,Fe=Re.convert(Q.format),We=Re.convert(Q.type);let ke;if(Q.isData3DTexture)A.setTexture3D(Q,0),ke=b.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)A.setTexture2DArray(Q,0),ke=b.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,Q.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,Q.unpackAlignment);const He=b.getParameter(b.UNPACK_ROW_LENGTH),St=b.getParameter(b.UNPACK_IMAGE_HEIGHT),xn=b.getParameter(b.UNPACK_SKIP_PIXELS),It=b.getParameter(b.UNPACK_SKIP_ROWS),fi=b.getParameter(b.UNPACK_SKIP_IMAGES),ft=K.isCompressedTexture?K.mipmaps[q]:K.image;b.pixelStorei(b.UNPACK_ROW_LENGTH,ft.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ft.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,C.min.x),b.pixelStorei(b.UNPACK_SKIP_ROWS,C.min.y),b.pixelStorei(b.UNPACK_SKIP_IMAGES,C.min.z),K.isDataTexture||K.isData3DTexture?b.texSubImage3D(ke,q,z.x,z.y,z.z,we,be,Ne,Fe,We,ft.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),b.compressedTexSubImage3D(ke,q,z.x,z.y,z.z,we,be,Ne,Fe,ft.data)):b.texSubImage3D(ke,q,z.x,z.y,z.z,we,be,Ne,Fe,We,ft),b.pixelStorei(b.UNPACK_ROW_LENGTH,He),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,St),b.pixelStorei(b.UNPACK_SKIP_PIXELS,xn),b.pixelStorei(b.UNPACK_SKIP_ROWS,It),b.pixelStorei(b.UNPACK_SKIP_IMAGES,fi),q===0&&Q.generateMipmaps&&b.generateMipmap(ke),Z.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?A.setTextureCube(C,0):C.isData3DTexture?A.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?A.setTexture2DArray(C,0):A.setTexture2D(C,0),Z.unbindTexture()},this.resetState=function(){R=0,S=0,T=null,Z.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===uh?"display-p3":"srgb",n.unpackColorSpace=et.workingColorSpace===Pu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Gt?Or:e_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Or?Gt:Li}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class BA extends w_{}BA.prototype.isWebGL1Renderer=!0;class dh{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Oe(e),this.near=n,this.far=i}clone(){return new dh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class HA extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class GA{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=ed,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new F;class uu{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyMatrix4(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyNormalMatrix(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.transformDirection(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}setX(e,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=yi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=yi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=yi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=yi(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=tt(n,this.array),i=tt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array),s=tt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Bn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new uu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class T_ extends Kr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ms;const Ao=new F,gs=new F,vs=new F,_s=new me,Ro=new me,A_=new yt,cl=new F,Co=new F,fl=new F,eg=new me,jc=new me,tg=new me;class VA extends bt{constructor(e=new T_){if(super(),this.isSprite=!0,this.type="Sprite",ms===void 0){ms=new Vn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new GA(n,5);ms.setIndex([0,1,2,0,2,3]),ms.setAttribute("position",new uu(i,3,0,!1)),ms.setAttribute("uv",new uu(i,2,3,!1))}this.geometry=ms,this.material=e,this.center=new me(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gs.setFromMatrixScale(this.matrixWorld),A_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),vs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gs.multiplyScalar(-vs.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;dl(cl.set(-.5,-.5,0),vs,o,gs,r,s),dl(Co.set(.5,-.5,0),vs,o,gs,r,s),dl(fl.set(.5,.5,0),vs,o,gs,r,s),eg.set(0,0),jc.set(1,0),tg.set(1,1);let a=e.ray.intersectTriangle(cl,Co,fl,!1,Ao);if(a===null&&(dl(Co.set(-.5,.5,0),vs,o,gs,r,s),jc.set(0,1),a=e.ray.intersectTriangle(cl,fl,Co,!1,Ao),a===null))return;const l=e.ray.origin.distanceTo(Ao);l<e.near||l>e.far||n.push({distance:l,point:Ao.clone(),uv:Nn.getInterpolation(Ao,cl,Co,fl,eg,jc,tg,new me),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function dl(t,e,n,i,r,s){_s.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Ro.x=s*_s.x-r*_s.y,Ro.y=r*_s.x+s*_s.y):Ro.copy(_s),t.copy(e),t.x+=Ro.x,t.y+=Ro.y,t.applyMatrix4(A_)}class R_ extends Kr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ng=new F,ig=new F,rg=new yt,Yc=new a_,hl=new Lu;class WA extends bt{constructor(e=new Vn,n=new R_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)ng.fromBufferAttribute(n,r-1),ig.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=ng.distanceTo(ig);e.setAttribute("lineDistance",new Tn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),hl.copy(i.boundingSphere),hl.applyMatrix4(r),hl.radius+=s,e.ray.intersectsSphere(hl)===!1)return;rg.copy(r).invert(),Yc.copy(e.ray).applyMatrix4(rg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new F,c=new F,h=new F,d=new F,m=this.isLineSegments?2:1,g=i.index,v=i.attributes.position;if(g!==null){const f=Math.max(0,o.start),_=Math.min(g.count,o.start+o.count);for(let p=f,y=_-1;p<y;p+=m){const R=g.getX(p),S=g.getX(p+1);if(u.fromBufferAttribute(v,R),c.fromBufferAttribute(v,S),Yc.distanceSqToSegment(u,c,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(d);P<e.near||P>e.far||n.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:p,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),_=Math.min(v.count,o.start+o.count);for(let p=f,y=_-1;p<y;p+=m){if(u.fromBufferAttribute(v,p),c.fromBufferAttribute(v,p+1),Yc.distanceSqToSegment(u,c,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(d);S<e.near||S>e.far||n.push({distance:S,point:h.clone().applyMatrix4(this.matrixWorld),index:p,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const sg=new F,og=new F;class XA extends WA{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)sg.fromBufferAttribute(n,r),og.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+sg.distanceTo(og);e.setAttribute("lineDistance",new Tn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hh extends _n{constructor(e,n,i,r,s,o,a,l,u){super(e,n,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ci{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],d=i[r+1]-c,m=(o-c)/d;return(r+m)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new me:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new F,r=[],s=[],o=[],a=new F,l=new yt;for(let m=0;m<=e;m++){const g=m/e;r[m]=this.getTangentAt(g,new F)}s[0]=new F,o[0]=new F;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),h<=u&&(u=h,i.set(0,1,0)),d<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Jt(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(r[m],s[m])}if(n===!0){let m=Math.acos(Jt(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],m*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ph extends ci{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n){const i=n||new me,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,m=u-this.aY;l=d*c-m*h+this.aX,u=d*h+m*c+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class jA extends ph{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function mh(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,h){let d=(o-s)/u-(a-s)/(u+c)+(a-o)/c,m=(a-o)/c-(l-o)/(c+h)+(l-a)/h;d*=c,m*=c,r(o,a,d,m)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const pl=new F,$c=new mh,qc=new mh,Kc=new mh;class YA extends ci{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new F){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:(pl.subVectors(r[0],r[1]).add(r[0]),u=pl);const h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(pl.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=pl),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(u.distanceToSquared(h),m),x=Math.pow(h.distanceToSquared(d),m),v=Math.pow(d.distanceToSquared(c),m);x<1e-4&&(x=1),g<1e-4&&(g=x),v<1e-4&&(v=x),$c.initNonuniformCatmullRom(u.x,h.x,d.x,c.x,g,x,v),qc.initNonuniformCatmullRom(u.y,h.y,d.y,c.y,g,x,v),Kc.initNonuniformCatmullRom(u.z,h.z,d.z,c.z,g,x,v)}else this.curveType==="catmullrom"&&($c.initCatmullRom(u.x,h.x,d.x,c.x,this.tension),qc.initCatmullRom(u.y,h.y,d.y,c.y,this.tension),Kc.initCatmullRom(u.z,h.z,d.z,c.z,this.tension));return i.set($c.calc(l),qc.calc(l),Kc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new F().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ag(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function $A(t,e){const n=1-t;return n*n*e}function qA(t,e){return 2*(1-t)*t*e}function KA(t,e){return t*t*e}function Wo(t,e,n,i){return $A(t,e)+qA(t,n)+KA(t,i)}function ZA(t,e){const n=1-t;return n*n*n*e}function JA(t,e){const n=1-t;return 3*n*n*t*e}function QA(t,e){return 3*(1-t)*t*t*e}function eR(t,e){return t*t*t*e}function Xo(t,e,n,i,r){return ZA(t,e)+JA(t,n)+QA(t,i)+eR(t,r)}class C_ extends ci{constructor(e=new me,n=new me,i=new me,r=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new me){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Xo(e,r.x,s.x,o.x,a.x),Xo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class tR extends ci{constructor(e=new F,n=new F,i=new F,r=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new F){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Xo(e,r.x,s.x,o.x,a.x),Xo(e,r.y,s.y,o.y,a.y),Xo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class b_ extends ci{constructor(e=new me,n=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new me){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new me){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nR extends ci{constructor(e=new F,n=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new F){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new F){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class P_ extends ci{constructor(e=new me,n=new me,i=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new me){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Wo(e,r.x,s.x,o.x),Wo(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class iR extends ci{constructor(e=new F,n=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new F){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Wo(e,r.x,s.x,o.x),Wo(e,r.y,s.y,o.y),Wo(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class L_ extends ci{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new me){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],c=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(ag(a,l.x,u.x,c.x,h.x),ag(a,l.y,u.y,c.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new me().fromArray(r))}return this}}var sd=Object.freeze({__proto__:null,ArcCurve:jA,CatmullRomCurve3:YA,CubicBezierCurve:C_,CubicBezierCurve3:tR,EllipseCurve:ph,LineCurve:b_,LineCurve3:nR,QuadraticBezierCurve:P_,QuadraticBezierCurve3:iR,SplineCurve:L_});class rR extends ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sd[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){const c=l[u];i&&i.equals(c)||(n.push(c),i=c)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new sd[r.type]().fromJSON(r))}return this}}class lg extends rR{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new b_(this.currentPoint.clone(),new me(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new P_(this.currentPoint.clone(),new me(e,n),new me(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new C_(this.currentPoint.clone(),new me(e,n),new me(i,r),new me(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new L_(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+u,n+c,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const u=new ph(e,n,i,r,s,o,a,l);if(this.curves.length>0){const h=u.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(u);const c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class D_ extends lg{constructor(e){super(e),this.uuid=Ai(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new lg().fromJSON(r))}return this}}const sR={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=I_(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,u,c,h,d,m;if(i&&(s=cR(t,e,s,n)),t.length>80*n){a=u=t[0],l=c=t[1];for(let g=n;g<r;g+=n)h=t[g],d=t[g+1],h<a&&(a=h),d<l&&(l=d),h>u&&(u=h),d>c&&(c=d);m=Math.max(u-a,c-l),m=m!==0?32767/m:0}return da(s,o,n,a,l,m,0),o}};function I_(t,e,n,i,r){let s,o;if(r===SR(t,e,n,i)>0)for(s=e;s<n;s+=i)o=ug(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=ug(s,t[s],t[s+1],o);return o&&Uu(o,o.next)&&(pa(o),o=o.next),o}function jr(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Uu(n,n.next)||pt(n.prev,n,n.next)===0)){if(pa(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function da(t,e,n,i,r,s,o){if(!t)return;!o&&s&&mR(t,i,r,s);let a=t,l,u;for(;t.prev!==t.next;){if(l=t.prev,u=t.next,s?aR(t,i,r,s):oR(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(u.i/n|0),pa(t),t=u.next,a=u.next;continue}if(t=u,t===a){o?o===1?(t=lR(jr(t),e,n),da(t,e,n,i,r,s,2)):o===2&&uR(t,e,n,i,r,s):da(jr(t),e,n,i,r,s,1);break}}}function oR(t){const e=t.prev,n=t,i=t.next;if(pt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,u=i.y,c=r<s?r<o?r:o:s<o?s:o,h=a<l?a<u?a:u:l<u?l:u,d=r>s?r>o?r:o:s>o?s:o,m=a>l?a>u?a:u:l>u?l:u;let g=i.next;for(;g!==e;){if(g.x>=c&&g.x<=d&&g.y>=h&&g.y<=m&&Ns(r,a,s,l,o,u,g.x,g.y)&&pt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function aR(t,e,n,i){const r=t.prev,s=t,o=t.next;if(pt(r,s,o)>=0)return!1;const a=r.x,l=s.x,u=o.x,c=r.y,h=s.y,d=o.y,m=a<l?a<u?a:u:l<u?l:u,g=c<h?c<d?c:d:h<d?h:d,x=a>l?a>u?a:u:l>u?l:u,v=c>h?c>d?c:d:h>d?h:d,f=od(m,g,e,n,i),_=od(x,v,e,n,i);let p=t.prevZ,y=t.nextZ;for(;p&&p.z>=f&&y&&y.z<=_;){if(p.x>=m&&p.x<=x&&p.y>=g&&p.y<=v&&p!==r&&p!==o&&Ns(a,c,l,h,u,d,p.x,p.y)&&pt(p.prev,p,p.next)>=0||(p=p.prevZ,y.x>=m&&y.x<=x&&y.y>=g&&y.y<=v&&y!==r&&y!==o&&Ns(a,c,l,h,u,d,y.x,y.y)&&pt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;p&&p.z>=f;){if(p.x>=m&&p.x<=x&&p.y>=g&&p.y<=v&&p!==r&&p!==o&&Ns(a,c,l,h,u,d,p.x,p.y)&&pt(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;y&&y.z<=_;){if(y.x>=m&&y.x<=x&&y.y>=g&&y.y<=v&&y!==r&&y!==o&&Ns(a,c,l,h,u,d,y.x,y.y)&&pt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function lR(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!Uu(r,s)&&N_(r,i,i.next,s)&&ha(r,s)&&ha(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),pa(i),pa(i.next),i=t=s),i=i.next}while(i!==t);return jr(i)}function uR(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&_R(o,a)){let l=U_(o,a);o=jr(o,o.next),l=jr(l,l.next),da(o,e,n,i,r,s,0),da(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function cR(t,e,n,i){const r=[];let s,o,a,l,u;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,u=I_(t,a,l,i,!1),u===u.next&&(u.steiner=!0),r.push(vR(u));for(r.sort(fR),s=0;s<r.length;s++)n=dR(r[s],n);return n}function fR(t,e){return t.x-e.x}function dR(t,e){const n=hR(t,e);if(!n)return e;const i=U_(n,t);return jr(i,i.next),jr(n,n.next)}function hR(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const d=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=s&&d>i&&(i=d,r=n.x<n.next.x?n:n.next,d===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,u=r.y;let c=1/0,h;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&Ns(o<u?s:i,o,l,u,o<u?i:s,o,n.x,n.y)&&(h=Math.abs(o-n.y)/(s-n.x),ha(n,t)&&(h<c||h===c&&(n.x>r.x||n.x===r.x&&pR(r,n)))&&(r=n,c=h)),n=n.next;while(n!==a);return r}function pR(t,e){return pt(t.prev,t,e.prev)<0&&pt(e.next,t,t.next)<0}function mR(t,e,n,i){let r=t;do r.z===0&&(r.z=od(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,gR(r)}function gR(t){let e,n,i,r,s,o,a,l,u=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<u&&(a++,i=i.nextZ,!!i);e++);for(l=u;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,u*=2}while(o>1);return t}function od(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function vR(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Ns(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function _R(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!xR(t,e)&&(ha(t,e)&&ha(e,t)&&yR(t,e)&&(pt(t.prev,t,e.prev)||pt(t,e.prev,e))||Uu(t,e)&&pt(t.prev,t,t.next)>0&&pt(e.prev,e,e.next)>0)}function pt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Uu(t,e){return t.x===e.x&&t.y===e.y}function N_(t,e,n,i){const r=gl(pt(t,e,n)),s=gl(pt(t,e,i)),o=gl(pt(n,i,t)),a=gl(pt(n,i,e));return!!(r!==s&&o!==a||r===0&&ml(t,n,e)||s===0&&ml(t,i,e)||o===0&&ml(n,t,i)||a===0&&ml(n,e,i))}function ml(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function gl(t){return t>0?1:t<0?-1:0}function xR(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&N_(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function ha(t,e){return pt(t.prev,t,t.next)<0?pt(t,e,t.next)>=0&&pt(t,t.prev,e)>=0:pt(t,e,t.prev)<0||pt(t,t.next,e)<0}function yR(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function U_(t,e){const n=new ad(t.i,t.x,t.y),i=new ad(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function ug(t,e,n,i){const r=new ad(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function pa(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function ad(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function SR(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class jo{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return jo.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];cg(e),fg(i,e);let o=e.length;n.forEach(cg);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,fg(i,n[l]);const a=sR.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function cg(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function fg(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class gh extends Vn{constructor(e=new D_([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];o(u)}this.setAttribute("position",new Tn(r,3)),this.setAttribute("uv",new Tn(s,2)),this.computeVertexNormals();function o(a){const l=[],u=n.curveSegments!==void 0?n.curveSegments:12,c=n.steps!==void 0?n.steps:1,h=n.depth!==void 0?n.depth:1;let d=n.bevelEnabled!==void 0?n.bevelEnabled:!0,m=n.bevelThickness!==void 0?n.bevelThickness:.2,g=n.bevelSize!==void 0?n.bevelSize:m-.1,x=n.bevelOffset!==void 0?n.bevelOffset:0,v=n.bevelSegments!==void 0?n.bevelSegments:3;const f=n.extrudePath,_=n.UVGenerator!==void 0?n.UVGenerator:ER;let p,y=!1,R,S,T,P;f&&(p=f.getSpacedPoints(c),y=!0,d=!1,R=f.computeFrenetFrames(c,!1),S=new F,T=new F,P=new F),d||(v=0,m=0,g=0,x=0);const E=a.extractPoints(u);let w=E.shape;const N=E.holes;if(!jo.isClockWise(w)){w=w.reverse();for(let b=0,$=N.length;b<$;b++){const J=N[b];jo.isClockWise(J)&&(N[b]=J.reverse())}}const te=jo.triangulateShape(w,N),L=w;for(let b=0,$=N.length;b<$;b++){const J=N[b];w=w.concat(J)}function H(b,$,J){return $||console.error("THREE.ExtrudeGeometry: vec does not exist"),b.clone().addScaledVector($,J)}const G=w.length,ee=te.length;function I(b,$,J){let re,Z,Me;const _e=b.x-$.x,A=b.y-$.y,M=J.x-b.x,k=J.y-b.y,de=_e*_e+A*A,ce=_e*k-A*M;if(Math.abs(ce)>Number.EPSILON){const ue=Math.sqrt(de),Ce=Math.sqrt(M*M+k*k),xe=$.x-A/ue,Ae=$.y+_e/ue,Le=J.x-k/Ce,Be=J.y+M/Ce,fe=((Le-xe)*k-(Be-Ae)*M)/(_e*k-A*M);re=xe+_e*fe-b.x,Z=Ae+A*fe-b.y;const Ze=re*re+Z*Z;if(Ze<=2)return new me(re,Z);Me=Math.sqrt(Ze/2)}else{let ue=!1;_e>Number.EPSILON?M>Number.EPSILON&&(ue=!0):_e<-Number.EPSILON?M<-Number.EPSILON&&(ue=!0):Math.sign(A)===Math.sign(k)&&(ue=!0),ue?(re=-A,Z=_e,Me=Math.sqrt(de)):(re=_e,Z=A,Me=Math.sqrt(de/2))}return new me(re/Me,Z/Me)}const O=[];for(let b=0,$=L.length,J=$-1,re=b+1;b<$;b++,J++,re++)J===$&&(J=0),re===$&&(re=0),O[b]=I(L[b],L[J],L[re]);const V=[];let ne,oe=O.concat();for(let b=0,$=N.length;b<$;b++){const J=N[b];ne=[];for(let re=0,Z=J.length,Me=Z-1,_e=re+1;re<Z;re++,Me++,_e++)Me===Z&&(Me=0),_e===Z&&(_e=0),ne[re]=I(J[re],J[Me],J[_e]);V.push(ne),oe=oe.concat(ne)}for(let b=0;b<v;b++){const $=b/v,J=m*Math.cos($*Math.PI/2),re=g*Math.sin($*Math.PI/2)+x;for(let Z=0,Me=L.length;Z<Me;Z++){const _e=H(L[Z],O[Z],re);ae(_e.x,_e.y,-J)}for(let Z=0,Me=N.length;Z<Me;Z++){const _e=N[Z];ne=V[Z];for(let A=0,M=_e.length;A<M;A++){const k=H(_e[A],ne[A],re);ae(k.x,k.y,-J)}}}const Y=g+x;for(let b=0;b<G;b++){const $=d?H(w[b],oe[b],Y):w[b];y?(T.copy(R.normals[0]).multiplyScalar($.x),S.copy(R.binormals[0]).multiplyScalar($.y),P.copy(p[0]).add(T).add(S),ae(P.x,P.y,P.z)):ae($.x,$.y,0)}for(let b=1;b<=c;b++)for(let $=0;$<G;$++){const J=d?H(w[$],oe[$],Y):w[$];y?(T.copy(R.normals[b]).multiplyScalar(J.x),S.copy(R.binormals[b]).multiplyScalar(J.y),P.copy(p[b]).add(T).add(S),ae(P.x,P.y,P.z)):ae(J.x,J.y,h/c*b)}for(let b=v-1;b>=0;b--){const $=b/v,J=m*Math.cos($*Math.PI/2),re=g*Math.sin($*Math.PI/2)+x;for(let Z=0,Me=L.length;Z<Me;Z++){const _e=H(L[Z],O[Z],re);ae(_e.x,_e.y,h+J)}for(let Z=0,Me=N.length;Z<Me;Z++){const _e=N[Z];ne=V[Z];for(let A=0,M=_e.length;A<M;A++){const k=H(_e[A],ne[A],re);y?ae(k.x,k.y+p[c-1].y,p[c-1].x+J):ae(k.x,k.y,h+J)}}}se(),X();function se(){const b=r.length/3;if(d){let $=0,J=G*$;for(let re=0;re<ee;re++){const Z=te[re];ie(Z[2]+J,Z[1]+J,Z[0]+J)}$=c+v*2,J=G*$;for(let re=0;re<ee;re++){const Z=te[re];ie(Z[0]+J,Z[1]+J,Z[2]+J)}}else{for(let $=0;$<ee;$++){const J=te[$];ie(J[2],J[1],J[0])}for(let $=0;$<ee;$++){const J=te[$];ie(J[0]+G*c,J[1]+G*c,J[2]+G*c)}}i.addGroup(b,r.length/3-b,0)}function X(){const b=r.length/3;let $=0;he(L,$),$+=L.length;for(let J=0,re=N.length;J<re;J++){const Z=N[J];he(Z,$),$+=Z.length}i.addGroup(b,r.length/3-b,1)}function he(b,$){let J=b.length;for(;--J>=0;){const re=J;let Z=J-1;Z<0&&(Z=b.length-1);for(let Me=0,_e=c+v*2;Me<_e;Me++){const A=G*Me,M=G*(Me+1),k=$+re+A,de=$+Z+A,ce=$+Z+M,ue=$+re+M;U(k,de,ce,ue)}}}function ae(b,$,J){l.push(b),l.push($),l.push(J)}function ie(b,$,J){W(b),W($),W(J);const re=r.length/3,Z=_.generateTopUV(i,r,re-3,re-2,re-1);j(Z[0]),j(Z[1]),j(Z[2])}function U(b,$,J,re){W(b),W($),W(re),W($),W(J),W(re);const Z=r.length/3,Me=_.generateSideWallUV(i,r,Z-6,Z-3,Z-2,Z-1);j(Me[0]),j(Me[1]),j(Me[3]),j(Me[1]),j(Me[2]),j(Me[3])}function W(b){r.push(l[b*3+0]),r.push(l[b*3+1]),r.push(l[b*3+2])}function j(b){s.push(b.x),s.push(b.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return MR(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new sd[r.type]().fromJSON(r)),new gh(i,e.options)}}const ER={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],u=e[r*3],c=e[r*3+1];return[new me(s,o),new me(a,l),new me(u,c)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],u=e[i*3],c=e[i*3+1],h=e[i*3+2],d=e[r*3],m=e[r*3+1],g=e[r*3+2],x=e[s*3],v=e[s*3+1],f=e[s*3+2];return Math.abs(a-c)<Math.abs(o-u)?[new me(o,1-l),new me(u,1-h),new me(d,1-g),new me(x,1-f)]:[new me(a,1-l),new me(c,1-h),new me(m,1-g),new me(v,1-f)]}};function MR(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class no extends Kr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=t_,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class F_ extends bt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class wR extends F_{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Zc=new yt,dg=new F,hg=new F;class TR{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ch,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;dg.setFromMatrixPosition(e.matrixWorld),n.position.copy(dg),hg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(hg),n.updateMatrixWorld(),Zc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Zc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class AR extends TR{constructor(){super(new v_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class RR extends F_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new AR}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class CR extends XA{constructor(e=10,n=10,i=4473924,r=8947848){i=new Oe(i),r=new Oe(r);const s=n/2,o=e/n,a=e/2,l=[],u=[];for(let d=0,m=0,g=-a;d<=n;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const x=d===s?i:r;x.toArray(u,m),m+=3,x.toArray(u,m),m+=3,x.toArray(u,m),m+=3,x.toArray(u,m),m+=3}const c=new Vn;c.setAttribute("position",new Tn(l,3)),c.setAttribute("color",new Tn(u,3));const h=new R_({vertexColors:!0,toneMapped:!1});super(c,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ah}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ah);function Jc(t,e,n){return Math.min(n,Math.max(e,t))}function Fu(t){const e=t.replace("#","");return{r:parseInt(e.substring(0,2),16)||0,g:parseInt(e.substring(2,4),16)||0,b:parseInt(e.substring(4,6),16)||0}}function ma(t,e,n){const i=Jc(t.r*e,0,255)|0,r=Jc(t.g*e,0,255)|0,s=Jc(t.b*e,0,255)|0;return`rgba(${i},${r},${s},${n})`}function bR(t,e){return e==="concrete"?30:e==="marble"?6:e==="tile"?4:t==="roof"?26:t==="wall"?18:8}function PR(t,e){return t==="marble"?Math.max(.2,e-.45):t==="tile"?Math.max(.3,e-.3):e}function LR(t,e,n){const i=Fu(e),r=n/8,s=n/4;t.strokeStyle=ma(i,.5,.9),t.lineWidth=3;for(let a=0;a<=n;a+=r)t.beginPath(),t.moveTo(0,a),t.lineTo(n,a),t.stroke();let o=0;for(let a=0;a<n;a+=r){const l=o%2===0?0:s/2;for(let u=-s;u<=n+s;u+=s)t.beginPath(),t.moveTo(u+l,a),t.lineTo(u+l,a+r),t.stroke();o++}}function DR(t,e,n){const i=Fu(e),r=n/4;t.strokeStyle=ma(i,1.35,.85),t.lineWidth=3;for(let s=0;s<=4;s++)t.beginPath(),t.moveTo(s*r,0),t.lineTo(s*r,n),t.stroke(),t.beginPath(),t.moveTo(0,s*r),t.lineTo(n,s*r),t.stroke()}function IR(t,e,n){const i=Fu(e),r=n/6;for(let s=0;s<n;s+=r){t.strokeStyle=ma(i,.55,.85),t.lineWidth=2,t.beginPath(),t.moveTo(0,s),t.lineTo(n,s),t.stroke();for(let o=0;o<5;o++){const a=s+Math.random()*r,l=.85+Math.random()*.35;t.strokeStyle=ma(i,l,.35),t.lineWidth=1,t.beginPath();const u=Math.random()*n*.6;t.moveTo(u,a),t.lineTo(u+n*(.2+Math.random()*.3),a),t.stroke()}}}function NR(t,e,n){const i=Fu(e);for(let r=0;r<4;r++){const s=r%2===0?1.4:.7;t.strokeStyle=ma(i,s,.4),t.lineWidth=1+Math.random()*1.5,t.beginPath();let o=Math.random()*n,a=0;for(t.moveTo(o,a);a<n;){const l=o+(Math.random()-.5)*n*.3,u=a+n/6;t.quadraticCurveTo(o+(Math.random()-.5)*20,(a+u)/2,l,u),o=l,a=u}t.stroke()}}function UR(t,e,n,i){n==="brick"?LR(t,e,i):n==="tile"?DR(t,e,i):n==="wood"?IR(t,e,i):n==="marble"&&NR(t,e,i)}function pg(t,e=2.7,n=0){var d;if(!t.length)return{x:10,z:8,radius:12,targetY:1};let i=1/0,r=1/0,s=-1/0,o=-1/0,a=0;t.forEach(m=>{i=Math.min(i,m.gx),s=Math.max(s,m.gx+m.gw),r=Math.min(r,m.gy),o=Math.max(o,m.gy+m.gh),a=Math.max(a,m.floor??0)});const l=Ou(t,e,0,n),u=((d=t.find(m=>(m.floor??0)===a))==null?void 0:d.wall_height)??e,c=l.get(a)+u+sr,h=Math.max(s-i,o-r);return{x:(i+s)/2,z:(r+o)/2,radius:Math.max(h,c)*1.5+4,targetY:Math.max(1,c*.55)}}function Ou(t,e,n=0,i=0){const r=Math.max(n,0,...t.map(a=>a.floor??0)),s=new Map;let o=0;for(let a=0;a<=r;a++){s.set(a,o);const l=t.find(c=>(c.floor??0)===a),u=(l==null?void 0:l.wall_height)??e;o+=u+sr+i}return s}function Ws(t,e,n){return Math.min(n,Math.max(e,t))}function O_(t){if(t.points&&t.points.length>=3){const e=t.points;let n=0;for(let i=0;i<e.length;i++){const r=e[i],s=e[(i+1)%e.length];n+=r.x*s.y-s.x*r.y}return Math.abs(n)/2}return t.gw*t.gh}const ht=.15,Ot=.9,z_=2.05,dn=.9,cu=.9,Rr=.3,FR=.4,Qc=.6,sr=.18,io=.22,wr=.35,Io=28*Math.PI/180,or=0,Si=.55,fu=.75,OR=.85,k_={bed:{label:"سرير",w:1.6,d:2,category:"غرفة نوم"},wardrobe:{label:"خزانة",w:1.2,d:.6,category:"غرفة نوم"},nightstand:{label:"كومودينو",w:.45,d:.4,category:"غرفة نوم"},sofa:{label:"أريكة",w:1.8,d:.85,category:"صالة"},armchair:{label:"كرسي بذراعين",w:.75,d:.75,category:"صالة"},tv_unit:{label:"وحدة تلفزيون",w:1.4,d:.4,category:"صالة"},dining_table:{label:"طاولة سفرة",w:1.6,d:.9,category:"صالة"},table:{label:"طاولة",w:1.4,d:.8,category:"عام"},chair:{label:"كرسي",w:.45,d:.45,category:"عام"},toilet:{label:"مرحاض",w:.4,d:.65,category:"حمام"},bathtub:{label:"بانيو",w:1.7,d:.75,category:"حمام"},shower:{label:"كابينة دش",w:.9,d:.9,category:"حمام"},sink:{label:"مغسلة حمام",w:.9,d:.55,category:"حمام"},kitchen_counter:{label:"كاونتر مطبخ",w:2,d:.6,category:"مطبخ"},stove:{label:"موقد",w:.6,d:.6,category:"مطبخ"},fridge:{label:"ثلاجة",w:.7,d:.7,category:"مطبخ"},desk:{label:"مكتب",w:1.2,d:.6,category:"مكتب"},bookshelf:{label:"مكتبة",w:.9,d:.3,category:"مكتب"}};function zR(t,e,n="plaster"){const r=document.createElement("canvas");r.width=256,r.height=256;const s=r.getContext("2d"),a=`#${new Oe(t).getHexString()}`;s.fillStyle=a,s.fillRect(0,0,256,256);const l=bR(e,n),u=s.getImageData(0,0,256,256),c=u.data;for(let d=0;d<c.length;d+=4){const m=(Math.random()-.5)*l;c[d]=Ws(c[d]+m,0,255),c[d+1]=Ws(c[d+1]+m,0,255),c[d+2]=Ws(c[d+2]+m,0,255)}if(s.putImageData(u,0,0),UR(s,a,n,256),e==="roof"&&n==="plaster"){s.strokeStyle="rgba(0,0,0,0.12)",s.lineWidth=1;for(let d=0;d<=256;d+=32)s.beginPath(),s.moveTo(0,d+.5),s.lineTo(256,d+.5),s.stroke()}const h=new hh(r);return h.wrapS=Vr,h.wrapT=Vr,h.needsUpdate=!0,h}function kR(t,e,n,i="plaster"){const r=`${n}:${i}:${e}`;let s=t.get(r);return s||(s=zR(e,n,i),t.set(r,s)),s}function BR(){const e=new Float32Array(16384);for(let u=0;u<e.length;u++)e[u]=Math.random();const n=new Float32Array(128*128);for(let u=0;u<128;u++)for(let c=0;c<128;c++){let h=0;for(let d=-1;d<=1;d++)for(let m=-1;m<=1;m++){const g=(c+m+128)%128,x=(u+d+128)%128;h+=e[x*128+g]}n[u*128+c]=h/9}const i=document.createElement("canvas");i.width=128,i.height=128;const r=i.getContext("2d"),s=r.createImageData(128,128),o=s.data,a=1.2;for(let u=0;u<128;u++)for(let c=0;c<128;c++){const h=n[u*128+(c-1+128)%128],d=n[u*128+(c+1)%128],m=n[(u-1+128)%128*128+c],g=n[(u+1)%128*128+c];let x=(h-d)*a,v=(m-g)*a;const f=1,_=Math.hypot(x,v,f),p=(u*128+c)*4;o[p]=(x/_*.5+.5)*255,o[p+1]=(v/_*.5+.5)*255,o[p+2]=(f/_*.5+.5)*255,o[p+3]=255}r.putImageData(s,0,0);const l=new hh(i);return l.wrapS=Vr,l.wrapT=Vr,l.needsUpdate=!0,l}function HR(t){const e="normal:wall";let n=t.get(e);return n||(n=BR(),t.set(e,n)),n}function kt(t,e,n,i,r,s,o="plaster"){const l=kR(t,e,n,o).clone();l.needsUpdate=!0;const u=1.2,c=Math.max(1,Math.round(i/u)),h=Math.max(1,Math.round(r/u));l.repeat.set(c,h);const d={map:l,roughness:PR(o,s)};if(n==="wall"){const m=HR(t).clone();m.needsUpdate=!0,m.repeat.set(c,h),d.normalMap=m,d.normalScale=new me(.5,.5)}return new no(d)}function Tt(t,e,n,i,r,s,o,a,l,u){const c=new zn(new Zr(Math.max(n,.03),Math.max(i,.03),Math.max(r,.03)),l);return c.position.set(s,o+i/2,a),c.scale.y=.001,c.castShadow=!0,c.receiveShadow=!0,t.add(c),e.meshes.push({mesh:c,height:i,baseY:o,delay:u}),c}function GR(t,e,n){if(n)return t<=Ot+.4?[]:[{start:(t-Ot)/2,width:Ot,sill:0,openH:z_,isDoor:!0}];const i=Ws(1.3,.3,e-cu-.25);if(i<=.3)return[];const r=t-2*FR;let s=0;if(r>=2*dn+Qc?s=2:r>=dn&&(s=1),s===0)return[];const o=s*dn+(s-1)*Qc,a=(t-o)/2,l=[];for(let u=0;u<s;u++)l.push({start:a+u*(dn+Qc),width:dn,sill:cu,openH:i,isDoor:!1});return l}const Us=1e-6,xs=(t,e)=>Math.abs(t-e)<Us,ld=.01;function VR(t){const e=[];for(let n=0;n<t.length;n++){const i=t[n],r=i.floor??0;for(let s=n+1;s<t.length;s++){const o=t[s];if((o.floor??0)===r){if(xs(o.gx,i.gx+i.gw)||xs(i.gx,o.gx+o.gw)){const a=Math.max(i.gy,o.gy),l=Math.min(i.gy+i.gh,o.gy+o.gh);l-a>ld&&(xs(o.gx,i.gx+i.gw)?e.push({a:{room:i,wall:"right"},b:{room:o,wall:"left"},start:a,end:l}):e.push({a:{room:i,wall:"left"},b:{room:o,wall:"right"},start:a,end:l}))}if(xs(o.gy,i.gy+i.gh)||xs(i.gy,o.gy+o.gh)){const a=Math.max(i.gx,o.gx),l=Math.min(i.gx+i.gw,o.gx+o.gw);l-a>ld&&(xs(o.gy,i.gy+i.gh)?e.push({a:{room:i,wall:"bottom"},b:{room:o,wall:"top"},start:a,end:l}):e.push({a:{room:i,wall:"top"},b:{room:o,wall:"bottom"},start:a,end:l}))}}}}return e}function B_(t){if(!t.length)return[];const e=t.slice().sort((i,r)=>i.start-r.start),n=[{...e[0]}];for(let i=1;i<e.length;i++){const r=e[i],s=n[n.length-1];r.start<=s.end+Us?s.end=Math.max(s.end,r.end):n.push({...r})}return n}function H_(t,e,n=.02){const i=[];let r=0;return t.forEach(s=>{s.start>r+n&&i.push({start:r,end:s.start}),r=Math.max(r,s.end)}),e>r+n&&i.push({start:r,end:e}),i}function WR(t){const e=new Map,n=(r,s,o,a)=>{const l=`${r}:${s}`;e.has(l)||e.set(l,[]),e.get(l).push({start:o,end:a})};t.forEach(r=>{const{room:s,wall:o}=r.a,{room:a,wall:l}=r.b,u=o==="left"||o==="right"?s.gy:s.gx,c=l==="left"||l==="right"?a.gy:a.gx;n(s.id,o,r.start-u,r.end-u),n(a.id,l,r.start-c,r.end-c)});const i=new Map;return e.forEach((r,s)=>i.set(s,B_(r))),i}const vl=.02;function G_(t,e,n){return n!=null?`${t}:edge:${n}`:`${t}:${e}`}function mg(t){if(t.points&&t.points.length>=3)return t.points.map((s,o)=>{const a=t.points[(o+1)%t.points.length];return{room:t,wall:null,edgeIndex:o,p1:s,p2:a,length:Math.hypot(a.x-s.x,a.y-s.y)}});const{gx:e,gy:n,gw:i,gh:r}=t;return[{room:t,wall:"top",edgeIndex:null,p1:{x:e,y:n},p2:{x:e+i,y:n},length:i},{room:t,wall:"bottom",edgeIndex:null,p1:{x:e,y:n+r},p2:{x:e+i,y:n+r},length:i},{room:t,wall:"left",edgeIndex:null,p1:{x:e,y:n},p2:{x:e,y:n+r},length:r},{room:t,wall:"right",edgeIndex:null,p1:{x:e+i,y:n},p2:{x:e+i,y:n+r},length:r}]}function XR(t,e){const n=t.length,i=e.length;if(!(n>vl)||!(i>vl))return null;const r=(t.p2.x-t.p1.x)/n,s=(t.p2.y-t.p1.y)/n,o=f=>Math.abs((f.x-t.p1.x)*s-(f.y-t.p1.y)*r);if(o(e.p1)>vl||o(e.p2)>vl)return null;const a=f=>(f.x-t.p1.x)*r+(f.y-t.p1.y)*s,l=a(e.p1),u=a(e.p2),c=Math.max(0,Math.min(l,u)),h=Math.min(n,Math.max(l,u));if(h-c<=ld)return null;const d=u<l,m=f=>d?l-f:f-l,g=f=>Math.min(i,Math.max(0,f)),x=m(c),v=m(h);return{a:{start:c,end:h},b:{start:g(Math.min(x,v)),end:g(Math.max(x,v))},p1:{x:t.p1.x+r*c,y:t.p1.y+s*c},p2:{x:t.p1.x+r*h,y:t.p1.y+s*h},length:h-c,flipped:d}}function jR(t){const e=i=>!!(i.points&&i.points.length>=3),n=[];for(let i=0;i<t.length;i++){const r=t[i],s=r.floor??0;for(let o=i+1;o<t.length;o++){const a=t[o];(a.floor??0)===s&&(!e(r)&&!e(a)||mg(r).forEach(l=>{mg(a).forEach(u=>{const c=XR(l,u);c&&n.push({a:{room:r,wall:l.wall,edgeIndex:l.edgeIndex,start:c.a.start,end:c.a.end,edgeLength:l.length},b:{room:a,wall:u.wall,edgeIndex:u.edgeIndex,start:c.b.start,end:c.b.end,edgeLength:u.length},p1:c.p1,p2:c.p2,length:c.length,flipped:c.flipped})})}))}}return n}function YR(t,e){const n=new Map;return e.forEach(i=>{[i.a,i.b].forEach(r=>{const s=G_(r.room.id,r.wall,r.edgeIndex);n.has(s)||n.set(s,[]),n.get(s).push({start:r.start,end:r.end})})}),n.forEach((i,r)=>{t.set(r,B_([...t.get(r)||[],...i]))}),t}function gg(t){const e=[];return t.forEach(n=>{e.some(i=>Math.abs(i.start-n.start)<.05)||e.push(n)}),e}function du(t,e,n){const i=t.kind==="door",r=i?Ot:dn,s=i?0:cu,o=i?z_:Ws(1.3,.3,n-cu-.25);return{start:Ws(Number(t.position)-r/2,0,Math.max(0,e-r)),width:r,sill:s,openH:o,isDoor:i}}function $R(t,e,n,i,r){return t==null?GR(n,i,r):t.filter(s=>s.wall===e).map(s=>du(s,n,i))}function vg(t,e,n,i,r,s){const{axis:o,u0:a,fixed:l,wallLength:u,wallHeight:c,openings:h,floorBaseY:d=0}=s,m=f=>o==="x"?{x:a+f,z:l}:{x:l,z:a+f},g=h.slice().sort((f,_)=>f.start-_.start);let x=0;const v=[];g.forEach(f=>{f.start>x+.02&&v.push({start:x,end:f.start}),x=Math.max(x,f.start+f.width)}),x<u-.02&&v.push({start:x,end:u}),v.forEach(f=>{const _=f.end-f.start;if(_<=.02)return;const p=(f.start+f.end)/2,y=m(p),R=o==="x"?_:ht,S=o==="x"?ht:_,T=kt(n,i,"wall",_,c,.85,r);Tt(t,e,R,c,S,y.x,d,y.z,T,or)}),g.forEach(f=>{const _=f.start+f.width/2,p=m(_),y=o==="x"?f.width:ht,R=o==="x"?ht:f.width;if(f.sill>.02){const P=kt(n,i,"wall",f.width,f.sill,.85,r);Tt(t,e,y,f.sill,R,p.x,d,p.z,P,or)}const S=f.sill+f.openH,T=c-S;if(T>.02){const P=kt(n,i,"wall",f.width,T,.85,r);Tt(t,e,y,T,R,p.x,d+S,p.z,P,or)}if(f.isDoor){const P=new no({color:9132587,roughness:.7}),E=o==="x"?f.width-.06:.05,w=o==="x"?.05:f.width-.06;Tt(t,e,E,f.openH,w,p.x,d,p.z,P,fu)}else{const P=new no({color:10475752,transparent:!0,opacity:.35,roughness:.05,metalness:.1,side:fn}),E=o==="x"?f.width-.05:.03,w=o==="x"?.03:f.width-.05,N=Tt(t,e,E,f.openH-.05,w,p.x,d+f.sill,p.z,P,fu);N.castShadow=!1}})}function qR(t,e,n,i,r,s,o,a,l,u,c,h){if(!c&&!h)return;if(c&&!h&&!i.points){if(i.roof_type==="gable"){KR(t,e,n,i,r,s,o,a,l,u);return}if(i.roof_type==="hip"){ZR(t,e,n,i,r,s,o,l,u);return}}const m=`#${new Oe(o).multiplyScalar(.72).getHexString()}`,g=i.gw+io*2,x=i.gh+io*2,v=kt(n,m,"roof",g,x,.95);if(Tt(t,e,g,sr,x,l,s+r,u,v,Si),!c)return;const f=i.gw+ht,_=i.gh+ht,p=s+r+sr,y=l-i.gw/2,R=l+i.gw/2,S=u-i.gh/2,T=u+i.gh/2,P=kt(n,m,"roof",f,wr,.95),E=kt(n,m,"roof",_,wr,.95);Tt(t,e,f,wr,ht,l,p,S,P,Si),Tt(t,e,f,wr,ht,l,p,T,P,Si),Tt(t,e,ht,wr,_,y,p,u,E,Si),Tt(t,e,ht,wr,_,R,p,u,E,Si)}function KR(t,e,n,i,r,s,o,a,l,u){const c=i.gw>=i.gh,h=(c?i.gh:i.gw)+io*2,d=(c?i.gw:i.gh)+io*2,m=h/2,g=m*Math.tan(Io),x=m/Math.cos(Io),v=s+r,_=`#${new Oe(o).multiplyScalar(.72).getHexString()}`,p=kt(n,_,"roof",x,d,.95);[-1,1].forEach(P=>{const E=new Lr;E.position.set(l,v+g,u),c?E.rotation.x=P*Io:E.rotation.z=-P*Io,t.add(E);const w=c?d:x,N=c?x:d,B=c?0:P*x/2,te=c?P*x/2:0;Tt(E,e,w,sr,N,B,0,te,p,Si)});const y=c?i.gh:i.gw,R=(c?i.gw:i.gh)/2,S=10,T=kt(n,o,"wall",y,g,.85,a);[-1,1].forEach(P=>{const E=c?l+P*R:l,w=c?u:u+P*R;for(let N=0;N<S;N++){const B=N/S,te=(N+1)/S,L=g/S,H=g*(B+te)/2,G=y*(1-(B+te)/2);Tt(t,e,c?ht:G,L,c?G:ht,E,v+H-L/2,w,T,Si)}})}function _g(t,e,n,i,r){const s=r/2,o=[t-n,-s,e-i],a=[t+n,-s,e-i],l=[t+n,-s,e+i],u=[t-n,-s,e+i],c=[t-(n-i),r-s,e],h=[t+(n-i),r-s,e],d=[u,l,h,u,h,c,a,o,c,a,c,h,o,u,c,l,a,h],m=new Vn;return m.setAttribute("position",new Bn(new Float32Array(d.flat()),3)),m.computeVertexNormals(),m}function ZR(t,e,n,i,r,s,o,a,l){const u=i.gw>=i.gh,c=(u?i.gh:i.gw)+io*2,h=(u?i.gw:i.gh)+io*2,d=c/2,m=h/2,g=d*Math.tan(Io),x=u?_g(a,l,m,d,g):_g(0,0,m,d,g);u||(x.rotateY(Math.PI/2),x.translate(a,0,l));const f=`#${new Oe(o).multiplyScalar(.72).getHexString()}`,_=kt(n,f,"roof",h,c,.95);_.side=fn,fd(t,e,x,_,s+r,g,Si)}function V_(t,e,n){switch(n){case 90:return{x:-e,z:t};case 180:return{x:-t,z:-e};case 270:return{x:e,z:-t};default:return{x:t,z:e}}}function Bt(t,e,n,i,r,s,o,a){const l=i.rotation||0,{x:u,z:c}=V_(a.cx,a.cz,l),h=l===90||l===270,d=h?a.d:a.w,m=h?a.w:a.d,g=kt(n,a.color,"wall",d,a.h,.75);Tt(t,e,d,a.h,m,r+u,o+a.bottomY,s+c,g,OR)}function JR(t,e,n,i,r,s,o){const a=l=>Bt(t,e,n,i,r,s,o,l);a({cx:0,cz:0,w:1.6,d:2,h:.35,bottomY:0,color:"#8B5A2B"}),a({cx:0,cz:0,w:1.5,d:1.9,h:.18,bottomY:.35,color:"#EDE7DC"}),a({cx:0,cz:-.96,w:1.6,d:.08,h:.55,bottomY:.35,color:"#8B5A2B"})}function QR(t,e,n,i,r,s,o){const a=l=>Bt(t,e,n,i,r,s,o,l);a({cx:0,cz:0,w:1.8,d:.85,h:.4,bottomY:0,color:"#3B4454"}),a({cx:0,cz:-.35,w:1.8,d:.15,h:.35,bottomY:.4,color:"#3B4454"}),a({cx:-.825,cz:0,w:.15,d:.85,h:.55,bottomY:0,color:"#2C3444"}),a({cx:.825,cz:0,w:.15,d:.85,h:.55,bottomY:0,color:"#2C3444"})}function e2(t,e,n,i,r,s,o){const a=u=>Bt(t,e,n,i,r,s,o,u);a({cx:0,cz:0,w:1.4,d:.8,h:.05,bottomY:.7,color:"#6B4A32"}),[[-.65,-.35],[.65,-.35],[-.65,.35],[.65,.35]].forEach(([u,c])=>a({cx:u,cz:c,w:.06,d:.06,h:.7,bottomY:0,color:"#3A2A1E"}))}function t2(t,e,n,i,r,s,o){const a=l=>Bt(t,e,n,i,r,s,o,l);a({cx:0,cz:0,w:1.2,d:.6,h:1.85,bottomY:0,color:"#C9A876"}),a({cx:0,cz:0,w:1.2,d:.6,h:.05,bottomY:1.85,color:"#A9895C"})}function n2(t,e,n,i,r,s,o){const a=l=>Bt(t,e,n,i,r,s,o,l);a({cx:0,cz:0,w:.9,d:.55,h:.82,bottomY:0,color:"#E8ECF0"}),a({cx:0,cz:-.05,w:.55,d:.35,h:.08,bottomY:.75,color:"#B9C2CC"}),a({cx:0,cz:-.25,w:.9,d:.05,h:.35,bottomY:.82,color:"#E8ECF0"})}function i2(t,e,n,i,r,s,o){const a=l=>Bt(t,e,n,i,r,s,o,l);a({cx:0,cz:0,w:.45,d:.4,h:.48,bottomY:0,color:"#C9A876"}),a({cx:0,cz:0,w:.45,d:.4,h:.02,bottomY:.48,color:"#A9895C"})}function r2(t,e,n,i,r,s,o){const a=l=>Bt(t,e,n,i,r,s,o,l);a({cx:0,cz:0,w:.75,d:.75,h:.4,bottomY:0,color:"#3B4454"}),a({cx:0,cz:-.3,w:.75,d:.15,h:.35,bottomY:.4,color:"#3B4454"}),a({cx:-.3,cz:0,w:.15,d:.75,h:.5,bottomY:0,color:"#2C3444"}),a({cx:.3,cz:0,w:.15,d:.75,h:.5,bottomY:0,color:"#2C3444"})}function s2(t,e,n,i,r,s,o){const a=l=>Bt(t,e,n,i,r,s,o,l);a({cx:0,cz:0,w:1.4,d:.4,h:.45,bottomY:0,color:"#3B4454"}),a({cx:0,cz:-.15,w:1.1,d:.05,h:.65,bottomY:.45,color:"#1A1A1D"})}function o2(t,e,n,i,r,s,o){const a=u=>Bt(t,e,n,i,r,s,o,u);a({cx:0,cz:0,w:1.6,d:.9,h:.05,bottomY:.72,color:"#5A3D28"}),[[-.72,-.4],[.72,-.4],[-.72,.4],[.72,.4]].forEach(([u,c])=>a({cx:u,cz:c,w:.07,d:.07,h:.72,bottomY:0,color:"#3A2A1E"}))}function a2(t,e,n,i,r,s,o){const a=u=>Bt(t,e,n,i,r,s,o,u);a({cx:0,cz:0,w:.42,d:.42,h:.05,bottomY:.45,color:"#4A4A52"}),a({cx:0,cz:-.185,w:.42,d:.05,h:.4,bottomY:.45,color:"#4A4A52"}),[[-.17,-.17],[.17,-.17],[-.17,.17],[.17,.17]].forEach(([u,c])=>a({cx:u,cz:c,w:.04,d:.04,h:.45,bottomY:0,color:"#2C3444"}))}function l2(t,e,n,i,r,s,o){const a=l=>Bt(t,e,n,i,r,s,o,l);a({cx:0,cz:.08,w:.4,d:.5,h:.4,bottomY:0,color:"#F2F2F4"}),a({cx:0,cz:-.28,w:.38,d:.15,h:.35,bottomY:.4,color:"#F2F2F4"})}function u2(t,e,n,i,r,s,o){const a=l=>Bt(t,e,n,i,r,s,o,l);a({cx:0,cz:0,w:1.7,d:.75,h:.55,bottomY:0,color:"#F2F2F4"}),a({cx:0,cz:0,w:1.5,d:.55,h:.4,bottomY:.12,color:"#DCE3E8"})}function c2(t,e,n,i,r,s,o){const a=l=>Bt(t,e,n,i,r,s,o,l);a({cx:0,cz:0,w:.9,d:.9,h:.05,bottomY:0,color:"#DCE3E8"}),a({cx:-.44,cz:0,w:.03,d:.9,h:1.9,bottomY:.05,color:"#9FD8E8"}),a({cx:0,cz:-.44,w:.9,d:.03,h:1.9,bottomY:.05,color:"#9FD8E8"})}function f2(t,e,n,i,r,s,o){const a=l=>Bt(t,e,n,i,r,s,o,l);a({cx:0,cz:0,w:2,d:.6,h:.85,bottomY:0,color:"#DCDCE1"}),a({cx:0,cz:0,w:2,d:.62,h:.04,bottomY:.85,color:"#1A1A1D"})}function d2(t,e,n,i,r,s,o){const a=l=>Bt(t,e,n,i,r,s,o,l);a({cx:0,cz:0,w:.6,d:.6,h:.85,bottomY:0,color:"#DCDCE1"}),a({cx:0,cz:0,w:.55,d:.55,h:.03,bottomY:.85,color:"#1A1A1D"})}function h2(t,e,n,i,r,s,o){const a=l=>Bt(t,e,n,i,r,s,o,l);a({cx:0,cz:0,w:.7,d:.7,h:1.8,bottomY:0,color:"#E8ECF0"}),a({cx:.3,cz:-.36,w:.03,d:.1,h:.4,bottomY:.9,color:"#8E8E96"})}function p2(t,e,n,i,r,s,o){const a=u=>Bt(t,e,n,i,r,s,o,u);a({cx:0,cz:0,w:1.2,d:.6,h:.04,bottomY:.72,color:"#6B4A32"}),a({cx:.4,cz:0,w:.35,d:.55,h:.72,bottomY:0,color:"#4A4A52"}),[[-.55,-.25],[-.55,.25]].forEach(([u,c])=>a({cx:u,cz:c,w:.05,d:.05,h:.72,bottomY:0,color:"#3A2A1E"}))}function m2(t,e,n,i,r,s,o){const a=l=>Bt(t,e,n,i,r,s,o,l);a({cx:0,cz:0,w:.9,d:.3,h:1.8,bottomY:0,color:"#8B5A2B"}),[.5,1,1.5].forEach(l=>a({cx:0,cz:0,w:.85,d:.28,h:.03,bottomY:l,color:"#6B4A32"}))}function g2(t,e,n,i,r,s,o){switch(i.kind){case"bed":return JR(t,e,n,i,r,s,o);case"sofa":return QR(t,e,n,i,r,s,o);case"table":return e2(t,e,n,i,r,s,o);case"wardrobe":return t2(t,e,n,i,r,s,o);case"sink":return n2(t,e,n,i,r,s,o);case"nightstand":return i2(t,e,n,i,r,s,o);case"armchair":return r2(t,e,n,i,r,s,o);case"tv_unit":return s2(t,e,n,i,r,s,o);case"dining_table":return o2(t,e,n,i,r,s,o);case"chair":return a2(t,e,n,i,r,s,o);case"toilet":return l2(t,e,n,i,r,s,o);case"bathtub":return u2(t,e,n,i,r,s,o);case"shower":return c2(t,e,n,i,r,s,o);case"kitchen_counter":return f2(t,e,n,i,r,s,o);case"stove":return d2(t,e,n,i,r,s,o);case"fridge":return h2(t,e,n,i,r,s,o);case"desk":return p2(t,e,n,i,r,s,o);case"bookshelf":return m2(t,e,n,i,r,s,o);default:return}}const ud=1,Dl=.28,v2=.18,_2=.85;function vh(t){const e=Math.max(4,Math.round(t/v2));return{w:ud,d:e*Dl,numSteps:e}}function x2(t,e,n,i,r,s,o,a,l){const{d:u,numSteps:c}=vh(r),h=r/c,d=i.rotation||0,g=`#${new Oe(l).multiplyScalar(.85).getHexString()}`,x=d===90||d===270;for(let v=0;v<c;v++){const f=-u/2+(v+.5)*Dl,_=(v+1)*h,{x:p,z:y}=V_(0,f,d),R=x?Dl:ud,S=x?ud:Dl,T=kt(n,g,"wall",R,_,.8);Tt(t,e,R,_,S,s+p,a,o+y,T,_2)}}function cd(t,e,n,i,r,s,o,a,l,u,c=[]){const h=o.x-s.x,d=o.y-s.y,m=Math.hypot(h,d);if(m<.02)return;const g=Math.atan2(h,d),x=(s.x+o.x)/2-u.x,v=(s.y+o.y)/2-u.z,f=new Lr;f.position.set(x,l,v),f.rotation.y=g,t.add(f);const _=c.slice().sort((S,T)=>S.start-T.start),p=S=>S-m/2;let y=0;const R=[];_.forEach(S=>{S.start>y+.02&&R.push({start:y,end:S.start}),y=Math.max(y,S.start+S.width)}),y<m-.02&&R.push({start:y,end:m}),R.forEach(S=>{const T=S.end-S.start;if(T<=.02)return;const P=kt(n,i,"wall",T,a,.85,r);Tt(f,e,ht,a,T,0,0,p((S.start+S.end)/2),P,or)}),_.forEach(S=>{const T=p(S.start+S.width/2);if(S.sill>.02){const w=kt(n,i,"wall",S.width,S.sill,.85,r);Tt(f,e,ht,S.sill,S.width,0,0,T,w,or)}const P=S.sill+S.openH,E=a-P;if(E>.02){const w=kt(n,i,"wall",S.width,E,.85,r);Tt(f,e,ht,E,S.width,0,P,T,w,or)}if(S.isDoor){const w=new no({color:9132587,roughness:.7});Tt(f,e,.05,S.openH,S.width-.06,0,0,T,w,fu)}else{const w=new no({color:10475752,transparent:!0,opacity:.35,roughness:.05,metalness:.1,side:fn}),N=Tt(f,e,.03,S.openH-.05,S.width-.05,0,S.sill,T,w,fu);N.castShadow=!1}})}function xg(t,e,n){const i=new D_;t.forEach((s,o)=>{const a=s.x-n.x,l=s.y-n.z;o===0?i.moveTo(a,l):i.lineTo(a,l)}),i.closePath();const r=new gh(i,{depth:e,bevelEnabled:!1,curveSegments:1});return r.translate(0,0,-e/2),r.rotateX(Math.PI/2),r}function fd(t,e,n,i,r,s,o){const a=new zn(n,i);return a.position.set(0,r+s/2,0),a.scale.y=.001,a.castShadow=!0,a.receiveShadow=!0,t.add(a),e.meshes.push({mesh:a,height:s,baseY:r,delay:o}),a}function y2(t,e,n,i,r,s,o,a,l,u,c,h=!1){const d=i.points;if(!d||d.length<3)return;const m=xg(d,.06,l),g=kt(n,i.color,"floor",4,4,.9,i.floor_material);g.side=fn,fd(t,e,m,g,s,.06,or);for(let p=0;p<d.length;p++){const y=d[p],R=d[(p+1)%d.length],S=Math.hypot(R.x-y.x,R.y-y.y),T=(i.openings||[]).filter(E=>E.edge_index===p).map(E=>du(E,S,r)),P=(c==null?void 0:c.get(G_(i.id,null,p)))||[];H_(P,S).forEach(E=>{const w=B=>({x:y.x+(R.x-y.x)*B/S,y:y.y+(R.y-y.y)*B/S}),N=T.filter(B=>B.start>=E.start-.02&&B.start+B.width<=E.end+.02).map(B=>({...B,start:B.start-E.start}));cd(t,e,n,o,a,w(E.start),w(E.end),r,s,l,N)})}if(h||!i.has_roof&&!u)return;const v=`#${new Oe(o).multiplyScalar(.72).getHexString()}`,f=xg(d,sr,l),_=kt(n,v,"roof",4,4,.95);if(_.side=fn,fd(t,e,f,_,s+r,sr,Si),i.has_roof){const p=s+r+sr;for(let y=0;y<d.length;y++)cd(t,e,n,v,a,d[y],d[(y+1)%d.length],wr,p,l)}}const S2=[{wall:"top",axis:"x",doorFallback:!1},{wall:"bottom",axis:"x",doorFallback:!0},{wall:"left",axis:"z",doorFallback:!1},{wall:"right",axis:"z",doorFallback:!1}];function W_(t){var e,n,i;for((e=t.geometry)==null||e.dispose(),t.material&&((n=t.material.map)==null||n.dispose(),(i=t.material.normalMap)==null||i.dispose(),t.material.dispose());t.children.length;)W_(t.children.pop())}function E2(t,e){const n=(t.floor??0)+1,i=t.gx,r=t.gx+t.gw,s=t.gy,o=t.gy+t.gh;return e.some(a=>{if(a===t||(a.floor??0)!==n)return!1;const l=a.gx,u=a.gx+a.gw,c=a.gy,h=a.gy+a.gh;return i<u&&r>l&&s<h&&o>c})}function M2(t,e,n,i,r,s,o,a,l="plaster",u={}){const c=!!u.hideRoofs,h=u.floorGap??0,d=u.columns||[];for(;t.children.length;)W_(t.children.pop());o.meshes=[];const m=e.filter(p=>!p.points),g=VR(m),x=jR(e),v=YR(WR(g),x),f=Math.max(0,...(n||[]).map(p=>(p.floor??0)+1)),_=Ou(e,i,f,h);e.forEach(p=>{const y=p.floor??0,R=_.get(y),S=p.wall_height??i,T=p.wall_color??r,P=p.wall_material??l,E=E2(p,e);if(p.points){y2(t,o,a,p,S,R,T,P,s,E,v,c);return}const w=p.gx+p.gw/2-s.x,N=p.gy+p.gh/2-s.z,B=kt(a,p.color,"floor",p.gw,p.gh,.9,p.floor_material),te=new zn(new Zr(p.gw,.06,p.gh),B);te.position.set(w,R+.03,N),te.receiveShadow=!0,t.add(te);const L=p.gx-s.x,H=p.gx+p.gw-s.x,G=p.gy-s.z,ee=p.gy+p.gh-s.z;S2.forEach(({wall:I,axis:O,doorFallback:V})=>{const ne=O==="x"?p.gw:p.gh,oe=O==="x"?L:G,Y=I==="top"?G:I==="bottom"?ee:I==="left"?L:H,se=v.get(`${p.id}:${I}`)||[],X=H_(se,ne);if(X.length===0)return;const he=$R(p.openings,I,ne,S,V);X.forEach(ae=>{const ie=ae.start<=Us?ht/2:0,U=ae.end>=ne-Us?ht/2:0,W=ae.end-ae.start+ie+U,j=oe+ae.start-ie,b=he.filter($=>$.start>=ae.start-.02&&$.start+$.width<=ae.end+.02).map($=>({...$,start:$.start-ae.start+ie}));vg(t,o,a,T,P,{axis:O,u0:j,fixed:Y,wallLength:W,wallHeight:S,floorBaseY:R,openings:b})})}),qR(t,o,a,p,S,R,T,P,w,N,!c&&!!p.has_roof,!c&&E),(p.furniture||[]).forEach(I=>{g2(t,o,a,I,p.gx+Number(I.x)-s.x,p.gy+Number(I.y)-s.z,R)})}),g.forEach(p=>{const{room:y,wall:R}=p.a,{room:S,wall:T}=p.b,P=_.get(y.floor??0),E=y.wall_height??i,w=y.wall_color??r,N=y.wall_material??l,B=y.gx-s.x,te=y.gx+y.gw-s.x,L=y.gy-s.z,H=y.gy+y.gh-s.z,G=R==="left"||R==="right"?"z":"x",ee=G==="z"?y.gh:y.gw,I=G==="z"?S.gh:S.gw,O=G==="z"?y.gy:y.gx,V=G==="z"?S.gy:S.gx,ne=G==="z"?L:B,oe=G==="z"?R==="right"?te:B:R==="bottom"?H:L,Y=p.start-O,se=p.end-O,X=Y<=Us?ht/2:0,he=se>=ee-Us?ht/2:0,ae=se-Y+X+he,ie=ne+Y-X,U=(j,b,$,J)=>(j.openings||[]).filter(re=>re.wall===b&&re.kind==="door").filter(re=>{const Z=$+Number(re.position);return Z-Ot/2>=p.start-.02&&Z+Ot/2<=p.end+.02}).map(re=>{const Z=du(re,J,E);return{...Z,start:$+Z.start-p.start+X}}),W=gg([...U(y,R,O,ee),...U(S,T,V,I)]);vg(t,o,a,w,N,{axis:G,u0:ie,fixed:oe,wallLength:ae,wallHeight:E,floorBaseY:P,openings:W})}),x.forEach(p=>{const y=p.a.room,R=_.get(y.floor??0),S=y.wall_height??i,T=y.wall_color??r,P=y.wall_material??l,E=(N,B)=>(N.room.openings||[]).filter(te=>(N.edgeIndex!=null?te.edge_index===N.edgeIndex:te.wall===N.wall)&&te.kind==="door").map(te=>du(te,N.edgeLength,S)).filter(te=>te.start>=N.start-.02&&te.start+te.width<=N.end+.02).map(te=>({...te,start:B&&p.flipped?N.end-(te.start+te.width):te.start-N.start})),w=gg([...E(p.a,!1),...E(p.b,!0)]);cd(t,o,a,T,P,p.p1,p.p2,S,R,s,w)}),(n||[]).forEach(p=>{const y=p.floor??0,R=_.get(y),S=_.get(y+1)-R;if(!(S>0))return;const T=Number(p.x)-s.x,P=Number(p.y)-s.z;x2(t,o,a,p,S,T,P,R,r)}),d.forEach(p=>{const y=p.floor??0,R=_.get(y);if(R==null)return;const S=p.height??i,T=p.size??Rr,P=Number(p.x)-s.x,E=Number(p.y)-s.z,w=kt(a,"#9a9a9a","wall",T,S,.85,"concrete");Tt(t,o,T,S,T,P,R,E,w,or)}),o.progress=0,o.playing=!0}const le=32;function ut(t,e=.5){return Math.round(t/e)*e}function Qn(t,e,n){return Math.min(n,Math.max(e,t))}function w2(t,e,n,i,r){return!n||!(n.width>0)||!(n.height>0)?{x:0,y:0}:{x:Qn((t-n.left)/n.width*i,0,i),y:Qn((e-n.top)/n.height*r,0,r)}}const T2=["الطابق الأرضي","الطابق الأول","الطابق الثاني","الطابق الثالث","الطابق الرابع","الطابق الخامس","الطابق السادس","الطابق السابع","الطابق الثامن","الطابق التاسع","الطابق العاشر","الطابق الحادي عشر","الطابق الثاني عشر"];function yg(t){return T2[t]||`الطابق ${t}`}const A2=12,R2=.3,C2=.22;function dd(t,e,n,i,r,s){const o=r-n,a=s-i,l=o*o+a*a,u=l===0?0:Qn(((t-n)*o+(e-i)*a)/l,0,1),c=n+u*o,h=i+u*a;return{dist:Math.hypot(t-c,e-h),t:u}}function b2(t,e,n,i,r,s,o){let a=null;if(t.forEach(g=>{if(g.points){for(let v=0;v<g.points.length;v++){const f=g.points[v],_=g.points[(v+1)%g.points.length],p=Math.hypot(_.x-f.x,_.y-f.y),{dist:y,t:R}=dd(e,n,f.x,f.y,_.x,_.y),S=R*p;(!a||y<a.dist)&&(a={dist:y,roomId:g.id,edgeIndex:v,length:p,rawPosition:S})}return}[{wall:"top",x1:g.gx,y1:g.gy,x2:g.gx+g.gw,y2:g.gy,length:g.gw},{wall:"bottom",x1:g.gx,y1:g.gy+g.gh,x2:g.gx+g.gw,y2:g.gy+g.gh,length:g.gw},{wall:"left",x1:g.gx,y1:g.gy,x2:g.gx,y2:g.gy+g.gh,length:g.gh},{wall:"right",x1:g.gx+g.gw,y1:g.gy,x2:g.gx+g.gw,y2:g.gy+g.gh,length:g.gh}].forEach(v=>{const{dist:f,t:_}=dd(e,n,v.x1,v.y1,v.x2,v.y2),p=_*v.length;(!a||f<a.dist)&&(a={dist:f,roomId:g.id,wall:v.wall,length:v.length,rawPosition:p})})}),!a||a.dist>R2||a.length<i)return null;const l=i/2,u=Qn(a.rawPosition,l,a.length-l),c=a.wall==null;return(t.find(g=>g.id===a.roomId).openings||[]).filter(g=>(c?g.edge_index===a.edgeIndex:g.wall===a.wall)&&g.id!==o).some(g=>{const x=g.kind==="door"?Ot:dn;return u-l<g.position+x/2&&u+l>g.position-x/2})?null:c?{roomId:a.roomId,edgeIndex:a.edgeIndex,position:u}:{roomId:a.roomId,wall:a.wall,position:u}}function P2(t,e,n){let i=null;return t.forEach(r=>{(r.openings||[]).forEach(s=>{const o=s.kind==="door"?Ot:dn,a=co(r,s,o),{dist:l}=dd(e,n,a.x1,a.y1,a.x2,a.y2);(!i||l<i.dist)&&(i={dist:l,roomId:r.id,id:s.id,wall:s.wall,edgeIndex:s.edge_index,position:s.position,kind:s.kind})})}),!i||i.dist>C2?null:i}function co(t,e,n){const i=n/2;if(t.points){const a=e.edgeIndex??e.edge_index,l=t.points[a],u=t.points[(a+1)%t.points.length],c=Math.hypot(u.x-l.x,u.y-l.y)||1,h=(e.position-i)/c,d=(e.position+i)/c;return{x1:l.x+(u.x-l.x)*h,y1:l.y+(u.y-l.y)*h,x2:l.x+(u.x-l.x)*d,y2:l.y+(u.y-l.y)*d}}const{wall:r,position:s}=e;if(r==="top"||r==="bottom"){const a=r==="top"?t.gy:t.gy+t.gh;return{x1:t.gx+s-i,y1:a,x2:t.gx+s+i,y2:a}}const o=r==="left"?t.gx:t.gx+t.gw;return{x1:o,y1:t.gy+s-i,x2:o,y2:t.gy+s+i}}const Yi=.35,Kt=.08;function X_(t,e,n){if(e.points)return;const{gx:i,gy:r,gw:s,gh:o}=e;t.save(),t.strokeStyle=n.line,t.fillStyle=n.text,t.lineWidth=1,t.font="10px 'IBM Plex Mono', monospace",t.textAlign="center";const a=(d,m,g,x)=>{t.beginPath(),t.moveTo(d*le,m*le),t.lineTo(g*le,x*le),t.stroke()},l=r-Yi;a(i,r,i,l-Kt),a(i+s,r,i+s,l-Kt),a(i,l,i+s,l),t.fillText(s.toFixed(2),(i+s/2)*le,(l-.06)*le);const u=r+o+Yi;a(i,r+o,i,u+Kt),a(i+s,r+o,i+s,u+Kt),a(i,u,i+s,u),t.fillText(s.toFixed(2),(i+s/2)*le,(u+.16)*le);const c=i-Yi;a(i,r,c-Kt,r),a(i,r+o,c-Kt,r+o),a(c,r,c,r+o),t.save(),t.translate(c*le-6,(r+o/2)*le),t.rotate(-Math.PI/2),t.fillText(o.toFixed(2),0,0),t.restore();const h=i+s+Yi;a(i+s,r,h+Kt,r),a(i+s,r+o,h+Kt,r+o),a(h,r,h,r+o),t.save(),t.translate(h*le+6,(r+o/2)*le),t.rotate(-Math.PI/2),t.fillText(o.toFixed(2),0,0),t.restore(),t.restore()}function j_(t){if(t.points&&t.points.length){const e=t.points.length;return{x:t.points.reduce((n,i)=>n+i.x,0)/e,y:t.points.reduce((n,i)=>n+i.y,0)/e}}return{x:t.gx+t.gw/2,y:t.gy+t.gh/2}}function Y_(t,e,n,i){if(n.kind!=="door")return;const r=co(e,n,Ot),s=r.x2-r.x1,o=r.y2-r.y1,a=Math.hypot(s,o);if(a<.01)return;const l={x:-o/a,y:s/a},u={x:o/a,y:-s/a},c=j_(e),h=(r.x1+r.x2)/2,d=(r.y1+r.y2)/2,m={x:c.x-h,y:c.y-d},g=l.x*m.x+l.y*m.y>=0?l:u,x=Math.atan2(o,s),v=Math.atan2(g.y,g.x);let f=v-x;for(;f>Math.PI;)f-=Math.PI*2;for(;f<=-Math.PI;)f+=Math.PI*2;const _=f<0,p=r.x1,y=r.y1;t.save(),t.strokeStyle=i,t.lineWidth=1,t.setLineDash([3,3]),t.beginPath(),t.arc(p*le,y*le,Ot*le,x,v,_),t.stroke(),t.setLineDash([]),t.beginPath(),t.moveTo(p*le,y*le),t.lineTo((p+Ot*Math.cos(v))*le,(y+Ot*Math.sin(v))*le),t.stroke(),t.restore()}function L2(t,e,n,i,r,s,o,a){t.save(),t.strokeStyle=a,t.lineWidth=1;const l=Qn(o,2,16),u=s===90||s===270;for(let c=1;c<l;c++){if(t.beginPath(),u){const h=e+i*le*c/l;t.moveTo(h,n),t.lineTo(h,n+r*le)}else{const h=n+r*le*c/l;t.moveTo(e,h),t.lineTo(e+i*le,h)}t.stroke()}t.restore()}function D2(t,e){const n=k_[t];if(!n)return{w:.5,d:.5};const i=e===90||e===270;return{w:i?n.d:n.w,d:i?n.w:n.d}}function I2(t,e,n){let i=!1;for(let r=0,s=t.length-1;r<t.length;s=r++){const o=t[r].x,a=t[r].y,l=t[s].x,u=t[s].y;a>n!=u>n&&e<(l-o)*(n-a)/(u-a)+o&&(i=!i)}return i}const N2=.15;function _h(t,e,n){const i=Ou(t,n,e+1);return i.get(e+1)-i.get(e)}function zu(t,e){const{w:n,d:i}=vh(t),r=e===90||e===270;return{w:r?i:n,d:r?n:i}}function U2(t,e,n,i,r){let s=null;return t.forEach(o=>{const a=_h(e,o.floor??0,n),l=o.rotation||0,{w:u,d:c}=zu(a,l),h=o.x-u/2,d=o.x+u/2,m=o.y-c/2,g=o.y+c/2,x=Math.max(h-i,0,i-d),v=Math.max(m-r,0,r-g),f=Math.hypot(x,v);(!s||f<s.dist)&&(s={dist:f,id:o.id,floor:o.floor??0,x:o.x,y:o.y,rotation:l})}),!s||s.dist>N2?null:s}function Sg(t,e,n,i,r,s){const{w:o,d:a}=zu(r,s);if(t<o||e<a)return null;const l=o/2,u=a/2,c=Qn(n,l,t-l),h=Qn(i,u,e-u);return{x:c,y:h}}function F2(t,e,n){const i=document.createElement("canvas");i.width=e*le,i.height=n*le;const r=i.getContext("2d");r.fillStyle="#FFFFFF",r.fillRect(0,0,i.width,i.height);for(let s=0;s<=e;s++)r.strokeStyle=s%5===0?"#C7C7CC":"#EDEDF0",r.lineWidth=s%5===0?1.2:1,r.beginPath(),r.moveTo(s*le+.5,0),r.lineTo(s*le+.5,n*le),r.stroke();for(let s=0;s<=n;s++)r.strokeStyle=s%5===0?"#C7C7CC":"#EDEDF0",r.lineWidth=s%5===0?1.2:1,r.beginPath(),r.moveTo(0,s*le+.5),r.lineTo(e*le,s*le+.5),r.stroke();return t.forEach(s=>{const o=s.gx*le,a=s.gy*le,l=s.gw*le,u=s.gh*le;s.points&&s.points.length>=3?(r.beginPath(),s.points.forEach((c,h)=>{h===0?r.moveTo(c.x*le,c.y*le):r.lineTo(c.x*le,c.y*le)}),r.closePath(),r.fillStyle=s.color+"25",r.fill(),r.strokeStyle=s.color,r.lineWidth=2,r.stroke(),r.fillStyle="#1A1A1D",r.font="700 13px Tajawal, sans-serif",r.fillText(s.name,o+8,a+20),r.fillStyle="#68686E",r.font="11px 'IBM Plex Mono', monospace",r.fillText(`${O_(s).toFixed(1)} m²`,o+8,a+36)):(r.fillStyle=s.color+"25",r.fillRect(o,a,l,u),r.strokeStyle=s.color,r.lineWidth=2,r.strokeRect(o,a,l,u),r.fillStyle="#1A1A1D",r.font="700 13px Tajawal, sans-serif",r.fillText(s.name,o+8,a+20),r.fillStyle="#68686E",r.font="11px 'IBM Plex Mono', monospace",r.fillText(`${s.gw.toFixed(1)} × ${s.gh.toFixed(1)} m`,o+8,a+36),X_(r,s,{line:"#B45309",text:"#92400E"})),(s.openings||[]).forEach(c=>{const h=c.kind==="door"?Ot:dn,d=co(s,c,h);r.strokeStyle=c.kind==="door"?"#8B5A2B":"#0EA5E9",r.lineWidth=5,r.beginPath(),r.moveTo(d.x1*le,d.y1*le),r.lineTo(d.x2*le,d.y2*le),r.stroke(),Y_(r,s,c,"#8B5A2B")}),(s.furniture||[]).forEach(c=>{var x;const{w:h,d}=D2(c.kind,c.rotation||0),m=(s.gx+c.x-h/2)*le,g=(s.gy+c.y-d/2)*le;r.fillStyle="#A9895C25",r.fillRect(m,g,h*le,d*le),r.strokeStyle="#A9895C",r.lineWidth=1.5,r.strokeRect(m,g,h*le,d*le),r.fillStyle="#1A1A1D",r.font="10px Tajawal, sans-serif",r.textAlign="center",r.fillText(((x=k_[c.kind])==null?void 0:x.label)||"",m+h*le/2,g+d*le/2+3),r.textAlign="start"})}),i.toDataURL("image/png")}function O2(t){const e=document.createElement("canvas"),n=e.getContext("2d"),i=40;n.font=`700 ${i}px Tajawal, sans-serif`;const r=n.measureText(t).width,s=22,o=14;e.width=Math.ceil(r+s*2),e.height=i+o*2,n.font=`700 ${i}px Tajawal, sans-serif`,n.fillStyle="rgba(17,20,26,0.72)";const a=14;n.beginPath(),n.moveTo(a,0),n.arcTo(e.width,0,e.width,e.height,a),n.arcTo(e.width,e.height,0,e.height,a),n.arcTo(0,e.height,0,0,a),n.arcTo(0,0,e.width,0,a),n.closePath(),n.fill(),n.fillStyle="#ffffff",n.textAlign="center",n.textBaseline="middle",n.fillText(t,e.width/2,e.height/2+2);const l=new hh(e);l.needsUpdate=!0;const u=new T_({map:l,depthWrite:!1,transparent:!0}),c=new VA(u),h=.014;return c.scale.set(e.width*h,e.height*h,1),c}const ef=.62,tf=Math.PI/4;function z2({rooms:t,stairs:e,columns:n=[],wallHeight:i,wallColor:r,wallMaterial:s,autoRotate:o,dollhouse:a=!1,floorGap:l=0,renderView:u=!1,t:c=h=>h}){const h=Ie.useRef(null),d=Ie.useRef({}),m=Ie.useRef({autoRotate:o}),g=Ie.useRef({maxRadius:50}),x=Ie.useRef(a),v=Ie.useRef(new Map),[f,_]=Ie.useState(0);return Ie.useEffect(()=>{m.current.autoRotate=o},[o]),Ie.useEffect(()=>{const p=h.current,y=new HA;y.background=new Oe(15790322),y.fog=new dh(15790322,22,60);const R=new Un(50,1,.1,200),S=new w_({antialias:!0});S.setPixelRatio(Math.min(window.devicePixelRatio,2)),S.shadowMap.enabled=!0,S.shadowMap.type=Wv,p.appendChild(S.domElement),y.add(new wR(12572415,1711915,.95));const T=new RR(16773856,1);T.position.set(10,18,8),T.castShadow=!0,T.shadow.mapSize.set(2048,2048),T.shadow.bias=-.0015,y.add(T);const P=new zn(new Iu(300,300),new no({color:13948120,roughness:1}));P.rotation.x=-Math.PI/2,P.position.y=-.03,P.receiveShadow=!0,y.add(P);const E=new CR(300,150,10592682,13948120);E.position.y=-.02,y.add(E);const w=new Lr;y.add(w);const N=pg(t,i),B={theta:tf,phi:a?ef:1,radius:N.radius,target:new F(0,N.targetY,0)};function te(){const{theta:W,phi:j,radius:b,target:$}=B;R.position.set($.x+b*Math.sin(j)*Math.sin(W),$.y+b*Math.cos(j),$.z+b*Math.sin(j)*Math.cos(W)),R.lookAt($)}let L=!1,H=0,G=0;const ee=new Map;let I=null;function O(){const[W,j]=[...ee.values()];return Math.hypot(W.x-j.x,W.y-j.y)}function V(W){ee.set(W.pointerId,{x:W.clientX,y:W.clientY}),ee.size===1?(L=!0,H=W.clientX,G=W.clientY):ee.size===2&&(L=!1,I=O())}function ne(W){if(ee.has(W.pointerId))ee.set(W.pointerId,{x:W.clientX,y:W.clientY});else if(!L)return;if(ee.size>=2){const $=O();I&&(B.radius=Qn(B.radius*(I/$),3,g.current.maxRadius),te()),I=$;return}if(!L)return;const j=W.clientX-H,b=W.clientY-G;H=W.clientX,G=W.clientY,B.theta-=j*.006,B.phi=Qn(B.phi-b*.006,.15,1.5),te()}function oe(W){if(ee.delete(W.pointerId),I=null,ee.size===1){const[[,j]]=ee;L=!0,H=j.x,G=j.y}else ee.size===0&&(L=!1)}function Y(W){W.preventDefault(),B.radius=Qn(B.radius*(1+W.deltaY*.001),3,g.current.maxRadius),te()}const se=S.domElement;se.style.cursor="grab",se.style.touchAction="none",se.addEventListener("pointerdown",V),window.addEventListener("pointermove",ne),window.addEventListener("pointerup",oe),window.addEventListener("pointercancel",oe),se.addEventListener("wheel",Y,{passive:!1});function X(){const W=p.clientWidth,j=p.clientHeight;W===0||j===0||(S.setSize(W,j),R.aspect=W/j,R.updateProjectionMatrix())}X();const he=new ResizeObserver(X);he.observe(p),te();const ae={progress:0,playing:!0,meshes:[]};let ie;function U(){ie=requestAnimationFrame(U),m.current.autoRotate&&!L&&(B.theta+=.0028,te()),ae.playing&&(ae.progress=Math.min(1,ae.progress+.025),ae.meshes.forEach(({mesh:W,height:j,baseY:b,delay:$})=>{const J=Qn((ae.progress-$)/(1-$),0,1),re=1-Math.pow(1-J,3);W.scale.y=Math.max(re,.001),W.position.y=b+j*re/2}),ae.progress>=1&&(ae.playing=!1)),S.render(y,R)}return U(),d.current={scene:y,group:w,orbit:B,updateCamera:te,animState:ae,dirLight:T,center:N,defaultRadius:N.radius,defaultTargetY:N.targetY},g.current.maxRadius=Math.max(50,N.radius*2),()=>{cancelAnimationFrame(ie),se.removeEventListener("pointerdown",V),window.removeEventListener("pointermove",ne),window.removeEventListener("pointerup",oe),window.removeEventListener("pointercancel",oe),se.removeEventListener("wheel",Y),he.disconnect(),p.removeChild(S.domElement),S.dispose()}},[]),Ie.useEffect(()=>{const p=d.current;if(!p.group)return;const y=u?"brick":s;if(M2(p.group,t,e,i,r,p.center,p.animState,v.current,y,{hideRoofs:a,floorGap:l,columns:n}),u){const R=Ou(t,i,Math.max(0,...(e||[]).map(S=>(S.floor??0)+1)),l);t.forEach(S=>{if(!S.name)return;const T=S.wall_height??i,P=R.get(S.floor??0)??0,E=S.gx+S.gw/2-p.center.x,w=S.gy+S.gh/2-p.center.z,N=O2(S.name);N.position.set(E,P+T*.55,w),p.group.add(N)})}if(p.dirLight){const R=p.defaultRadius;p.dirLight.position.set(R*.6,Math.max(14,R*.9),R*.45);const S=p.dirLight.shadow.camera;S.left=-R,S.right=R,S.top=R,S.bottom=-R,S.near=1;const T=Math.max(i,...t.map(P=>P.wall_height??i));S.far=R*3+T*2,S.updateProjectionMatrix()}},[t,e,n,i,r,s,a,l,u]),Ie.useEffect(()=>{var R;const p=d.current;if(!p.orbit||!p.updateCamera)return;const y=pg(t,i,l);p.defaultRadius=y.radius,p.defaultTargetY=y.targetY,p.orbit.target.y=y.targetY,p.orbit.radius=y.radius,g.current.maxRadius=Math.max(50,y.radius*2),(R=p.scene)!=null&&R.fog&&(p.scene.fog.far=Math.max(60,y.radius*2.6)),a!==x.current&&(x.current=a,a&&(p.orbit.phi=ef,p.orbit.theta=tf)),p.updateCamera()},[a,l]),Ie.useEffect(()=>{if(f===0)return;const p=d.current;p.orbit&&(p.orbit.theta=tf,p.orbit.phi=a?ef:1,p.orbit.radius=p.defaultRadius,p.orbit.target.y=p.defaultTargetY??p.orbit.target.y,p.updateCamera())},[f]),Ee.jsxs("div",{style:{position:"relative",width:"100%",height:"100%"},children:[Ee.jsx("div",{ref:h,style:{width:"100%",height:"100%"}}),Ee.jsx("button",{type:"button",onClick:()=>_(p=>p+1),style:{position:"absolute",bottom:12,right:12,fontSize:12,fontWeight:600,color:"#e2e8f0",background:"rgba(15,23,42,0.9)",border:"1px solid #334155",borderRadius:8,padding:"6px 12px",cursor:"pointer"},children:c("Reset camera")})]})}const Eg=24,_l=1.5,Mg=["#cfd6cf","#d8cfc2","#c9d3df","#dccfd6","#cfd8d3"];function k2({rooms:t,stairs:e,columns:n=[],wallHeight:i,gridW:r=20,gridH:s=16,mode:o,activeFloor:a=0,selectedRoomId:l,selectedOpening:u,selectedStairId:c,selectedColumnId:h,onAddRoom:d,onAddPolygonRoom:m,onMoveRoom:g,onResizeRoom:x,onMovePolygonRoom:v,onSelectRoom:f,onAddOpening:_,onSelectOpening:p,onAddStair:y,onMoveStair:R,onSelectStair:S,onAddColumn:T,onMoveColumn:P,onSelectColumn:E}){const w=Ie.useRef(null),N=Ie.useRef(null),[B,te]=Ie.useState(null),[L,H]=Ie.useState(null),G=t.filter(ie=>(ie.floor??0)===a),ee=e.filter(ie=>(ie.floor??0)===a),I=n.filter(ie=>(ie.floor??0)===a),O=_h(t,a,i);Ie.useEffect(()=>{o!=="polygon"&&te(null)},[o]),Ie.useEffect(()=>{function ie(U){U.key==="Escape"&&B&&te(null)}return window.addEventListener("keydown",ie),()=>window.removeEventListener("keydown",ie)},[B]);function V(ie,U,W,j){U.points?(ie.beginPath(),U.points.forEach((b,$)=>{$===0?ie.moveTo(b.x*le,b.y*le):ie.lineTo(b.x*le,b.y*le)}),ie.closePath(),ie.fillStyle=j,ie.fill(),ie.strokeStyle=W?"#c9a96e":"#4b5563",ie.lineWidth=Math.max(2,ht*le),ie.stroke()):(ie.fillStyle=j,ie.fillRect(U.gx*le,U.gy*le,U.gw*le,U.gh*le),ie.strokeStyle=W?"#c9a96e":"#4b5563",ie.lineWidth=Math.max(2,ht*le),ie.strokeRect(U.gx*le,U.gy*le,U.gw*le,U.gh*le))}function ne(){const ie=w.current;if(!ie)return;const U=ie.getContext("2d");U.clearRect(0,0,ie.width,ie.height),U.strokeStyle="#e5e7eb",U.lineWidth=1;for(let j=0;j<=r;j++)U.beginPath(),U.moveTo(j*le,0),U.lineTo(j*le,s*le),U.stroke();for(let j=0;j<=s;j++)U.beginPath(),U.moveTo(0,j*le),U.lineTo(r*le,j*le),U.stroke();G.forEach((j,b)=>{const $=j.id===l;V(U,j,$,j.color||Mg[b%Mg.length]);const J=j.points?j.points.reduce((Z,Me)=>Z+Me.x,0)/j.points.length:j.gx+j.gw/2,re=j.points?j.points.reduce((Z,Me)=>Z+Me.y,0)/j.points.length:j.gy+j.gh/2;if(U.fillStyle="#1b1e22",U.font="13px sans-serif",U.textAlign="center",U.fillText(j.name,J*le,re*le),X_(U,j,{line:"#9ca3af",text:"#6b7280"}),(j.openings||[]).forEach(Z=>{const Me=Z.kind==="door"?Ot:dn,_e=co(j,Z,Me),A=u&&u.roomId===j.id&&u.openingId===Z.id;U.save(),U.strokeStyle=A?"#c9a96e":Z.kind==="door"?"#8b5e34":"#3b82f6",U.lineWidth=Math.max(3,ht*le+2),U.beginPath(),U.moveTo(_e.x1*le,_e.y1*le),U.lineTo(_e.x2*le,_e.y2*le),U.stroke(),U.restore(),Z.kind==="door"&&Y_(U,j,Z,A?"#c9a96e":"#8b5e34")}),$&&!j.points){U.fillStyle="#c9a96e";const Z=(j.gx+j.gw)*le,Me=(j.gy+j.gh)*le;U.fillRect(Z-6,Me-6,12,12)}}),ee.forEach(j=>{const b=j.rotation||0,{w:$,d:J}=zu(O,b),re=j.id===c,Z=(j.x-$/2)*le,Me=(j.y-J/2)*le;U.strokeStyle=re?"#c9a96e":"#6b5e3a",U.lineWidth=2,U.strokeRect(Z,Me,$*le,J*le),L2(U,Z,Me,$,J,b,vh(O).numSteps,re?"#c9a96e":"#6b5e3a")}),I.forEach(j=>{const b=j.id===h,$=Rr/2;U.fillStyle=b?"#c9a96e":"#6b7280",U.fillRect((j.x-$)*le,(j.y-$)*le,Rr*le,Rr*le),U.strokeStyle="#374151",U.lineWidth=1,U.strokeRect((j.x-$)*le,(j.y-$)*le,Rr*le,Rr*le)}),B&&B.length&&(U.strokeStyle="#c9a96e",U.lineWidth=2,U.beginPath(),B.forEach((j,b)=>{b===0?U.moveTo(j.x*le,j.y*le):U.lineTo(j.x*le,j.y*le)}),L&&U.lineTo(L.x*le,L.y*le),U.stroke(),U.fillStyle="#c9a96e",B.forEach(j=>{U.beginPath(),U.arc(j.x*le,j.y*le,4,0,Math.PI*2),U.fill()}));const W=N.current;if(W&&W.kind==="new-room"){const j=Math.min(W.startX,W.curX),b=Math.min(W.startY,W.curY),$=Math.abs(W.curX-W.startX),J=Math.abs(W.curY-W.startY);U.strokeStyle="#c9a96e",U.setLineDash([6,4]),U.lineWidth=2,U.strokeRect(j*le,b*le,$*le,J*le),U.setLineDash([])}}Ie.useEffect(ne);function oe(ie){const U=w.current.getBoundingClientRect();return w2(ie.clientX,ie.clientY,U,r,s)}function Y(){const ie=w.current&&w.current.getBoundingClientRect();return!ie||!ie.width?Eg/le:Eg/(ie.width/r)}function se(ie,U){return G.find(W=>W.points?I2(W.points,ie,U):ie>=W.gx&&ie<=W.gx+W.gw&&U>=W.gy&&U<=W.gy+W.gh)}function X(ie){const{x:U,y:W}=oe(ie);if(o==="room"){N.current={kind:"new-room",startX:ut(U),startY:ut(W),curX:U,curY:W},ne();return}if(o==="polygon"){const A={x:ut(U),y:ut(W)};if(B&&B.length>=3){const M=B[0];if(Math.hypot(A.x-M.x,A.y-M.y)<=Y()){m(B),te(null);return}}te(M=>M?[...M,A]:[A]);return}if(o==="door"||o==="window"){const M=b2(G,U,W,o==="door"?Ot:dn);M&&_(M.roomId,o,M.wall,M.edgeIndex,M.position);return}if(o==="stairs"){const A=Sg(r,s,ut(U),ut(W),O,0);A&&y({floor:a,x:A.x,y:A.y,rotation:0});return}if(o==="column"){T({floor:a,x:ut(U),y:ut(W)});return}const j=P2(G,U,W);if(j){p({roomId:j.roomId,openingId:j.id}),S(null),E(null);return}p(null);const b=U2(ee,t,i,U,W);if(b){S(b.id),E(null),f(null),N.current={kind:"move-stair",stairId:b.id,offsetX:U-b.x,offsetY:W-b.y,rotation:b.rotation};return}S(null);const $=Y(),J=I.find(A=>Math.hypot(U-A.x,W-A.y)<=$);if(J){E(J.id),f(null),N.current={kind:"move-column",columnId:J.id,offsetX:U-J.x,offsetY:W-J.y};return}E(null);const re=se(U,W);if(!re){f(null);return}if(f(re.id),re.points){N.current={kind:"move-polygon",roomId:re.id,startPoints:re.points,offsetX:U,offsetY:W};return}const Z=re.gx+re.gw,Me=re.gy+re.gh,_e=Math.abs(U-Z)<.25&&Math.abs(W-Me)<.25;N.current=_e?{kind:"resize",roomId:re.id,startGx:re.gx,startGy:re.gy}:{kind:"move",roomId:re.id,offsetX:U-re.gx,offsetY:W-re.gy}}function he(ie){if(o==="polygon"&&B){const{x:b,y:$}=oe(ie);H({x:ut(b),y:ut($)});return}const U=N.current;if(!U)return;const{x:W,y:j}=oe(ie);if(U.kind==="new-room"){U.curX=W,U.curY=j,ne();return}if(U.kind==="move"){const b=t.find(re=>re.id===U.roomId);if(!b)return;const $=ut(Math.max(0,Math.min(r-b.gw,W-U.offsetX))),J=ut(Math.max(0,Math.min(s-b.gh,j-U.offsetY)));g(U.roomId,$,J);return}if(U.kind==="move-polygon"){const b=ut(W-U.offsetX),$=ut(j-U.offsetY);if(b===0&&$===0)return;const J=U.startPoints.map(re=>({x:re.x+b,y:re.y+$}));v(U.roomId,J);return}if(U.kind==="resize"){const b=ut(Math.max(_l,W-U.startGx)),$=ut(Math.max(_l,j-U.startGy));x(U.roomId,b,$);return}if(U.kind==="move-stair"){const b=Sg(r,s,ut(W-U.offsetX),ut(j-U.offsetY),O,U.rotation);b&&R(U.stairId,b.x,b.y,U.rotation);return}if(U.kind==="move-column"){const b=ut(Math.max(0,Math.min(r,W-U.offsetX))),$=ut(Math.max(0,Math.min(s,j-U.offsetY)));P(U.columnId,b,$)}}function ae(){const ie=N.current;if(ie&&ie.kind==="new-room"){const U=ut(Math.min(ie.startX,ie.curX)),W=ut(Math.min(ie.startY,ie.curY)),j=Math.max(_l,ut(Math.abs(ie.curX-ie.startX))),b=Math.max(_l,ut(Math.abs(ie.curY-ie.startY)));d({gx:U,gy:W,gw:j,gh:b,floor:a})}N.current=null,ne()}return Ee.jsx("canvas",{ref:w,width:r*le,height:s*le,style:{background:"#fff",touchAction:"none",cursor:o==="select"?"default":"crosshair",maxWidth:"100%",height:"auto",display:"block"},onPointerDown:X,onPointerMove:he,onPointerUp:ae,onPointerLeave:ae})}const B2=[{id:"select",label:"Select"},{id:"room",label:"Add Room"},{id:"polygon",label:"Add Polygon Room"},{id:"door",label:"Add Door"},{id:"window",label:"Add Window"},{id:"stairs",label:"Add Stairs"},{id:"column",label:"Add Column"}],xr=t=>({padding:"8px 14px",borderRadius:8,border:t?"2px solid #c9a96e":"1px solid #d1d5db",background:t?"#fdf6ea":"#fff",fontWeight:600,fontSize:13,cursor:"pointer"});function wg(t,e){return e===0?t("Ground Floor"):t("Floor")+" "+e}function H2({t,mode:e,onModeChange:n,selectedRoom:i,onRenameRoom:r,onResizeRoomInputs:s,onDeleteRoom:o,selectedOpening:a,onDeleteOpening:l,floorCount:u=1,activeFloor:c=0,onSetActiveFloor:h,onAddFloor:d,selectedStair:m,onDeleteStair:g,selectedColumn:x,onDeleteColumn:v}){return Ee.jsxs("div",{style:{display:"flex",flexDirection:"column",borderBottom:"1px solid #e5e7eb"},children:[Ee.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:6,alignItems:"center",padding:"8px 14px",borderBottom:"1px solid #f3f4f6"},children:[Array.from({length:u},(f,_)=>_).map(f=>Ee.jsx("button",{type:"button",style:xr(f===c),onClick:()=>h&&h(f),title:wg(t,f),children:wg(t,f)},f)),u<A2&&Ee.jsxs("button",{type:"button",style:xr(!1),onClick:()=>d&&d(),children:["+ ",t("Add Floor")]})]}),Ee.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:10,alignItems:"center",padding:"10px 14px"},children:[B2.map(f=>Ee.jsx("button",{type:"button",style:xr(e===f.id),onClick:()=>n(f.id),children:t(f.label)},f.id)),i&&Ee.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",marginInlineStart:12},children:[Ee.jsx("input",{value:i.name,onChange:f=>r(i.id,f.target.value),style:{padding:"6px 10px",borderRadius:6,border:"1px solid #d1d5db",fontSize:13,width:140}}),!i.points&&Ee.jsxs(Ee.Fragment,{children:[Ee.jsxs("label",{style:{fontSize:12,color:"#6b7280"},children:[t("W"),Ee.jsx("input",{type:"number",step:"0.1",min:"1.5",value:i.gw,onChange:f=>s(i.id,parseFloat(f.target.value)||i.gw,i.gh),style:{width:60,marginInlineStart:4,padding:"4px 6px",borderRadius:6,border:"1px solid #d1d5db"}})]}),Ee.jsxs("label",{style:{fontSize:12,color:"#6b7280"},children:[t("H"),Ee.jsx("input",{type:"number",step:"0.1",min:"1.5",value:i.gh,onChange:f=>s(i.id,i.gw,parseFloat(f.target.value)||i.gh),style:{width:60,marginInlineStart:4,padding:"4px 6px",borderRadius:6,border:"1px solid #d1d5db"}})]})]}),Ee.jsx("button",{type:"button",style:xr(!1),onClick:()=>o(i.id),children:t("Delete Room")})]}),a&&Ee.jsx("button",{type:"button",style:xr(!1),onClick:()=>l(a.roomId,a.openingId),children:t("Delete Opening")}),m&&Ee.jsx("button",{type:"button",style:xr(!1),onClick:()=>g(m.id),children:t("Delete Stairs")}),x&&Ee.jsx("button",{type:"button",style:xr(!1),onClick:()=>v(x.id),children:t("Delete Column")})]})]})}let Tg=0;function fo(t){return Tg+=1,t+"_"+Date.now().toString(36)+"_"+Tg}const G2=2.7,V2="#e8e2d8",W2="plaster";function $_(t){return{project:{id:null,name:t||"Untitled Project",wall_height:G2,wall_color:V2,wall_material:W2},rooms:[],stairs:[],columns:[]}}function X2({name:t,gx:e,gy:n,gw:i,gh:r,color:s,floor:o=0}){return{id:fo("room"),name:t||"Room",gx:e,gy:n,gw:i,gh:r,color:s||"#cfd6cf",floor:o,has_roof:!0,roof_type:"flat",openings:[],furniture:[]}}function j2({name:t,points:e,color:n,floor:i=0}){const r=e.map(c=>c.x),s=e.map(c=>c.y),o=Math.min(...r),a=Math.min(...s),l=Math.max(...r)-o,u=Math.max(...s)-a;return{id:fo("room"),name:t||"Room",points:e,gx:o,gy:a,gw:l,gh:u,color:n||"#cfd6cf",floor:i,has_roof:!0,roof_type:"flat",openings:[],furniture:[]}}function Y2({floor:t=0,x:e,y:n,rotation:i=0}){return{id:fo("stair"),floor:t,x:e,y:n,rotation:i}}function $2({floor:t=0,x:e,y:n}){return{id:fo("column"),floor:t,x:e,y:n}}function q2(t,e,n,i){const r={id:fo(t),kind:t,position:i};return n!=null?r.edge_index=n:r.wall=e,r}function K2(t,e){switch(e.type){case"SET_PROJECT":return e.project;case"SET_META":return{...t,project:{...t.project,...e.patch}};case"ADD_ROOM":return{...t,rooms:[...t.rooms,e.room]};case"UPDATE_ROOM":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,...e.patch}:n)};case"REMOVE_ROOM":return{...t,rooms:t.rooms.filter(n=>n.id!==e.roomId)};case"ADD_OPENING":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,openings:[...n.openings,q2(e.kind,e.wall,e.edgeIndex,e.position)]}:n)};case"MOVE_OPENING":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,openings:n.openings.map(i=>i.id===e.openingId?{...i,wall:e.wall,position:e.position}:i)}:n)};case"REMOVE_OPENING":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,openings:n.openings.filter(i=>i.id!==e.openingId)}:n)};case"ADD_FURNITURE":{const n={id:fo("furn"),kind:e.kind,x:e.x,y:e.y,rotation:0};return{...t,rooms:t.rooms.map(i=>i.id===e.roomId?{...i,furniture:[...i.furniture,n]}:i)}}case"MOVE_FURNITURE":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,furniture:n.furniture.map(i=>i.id===e.furnitureId?{...i,x:e.x,y:e.y,rotation:e.rotation??i.rotation}:i)}:n)};case"REMOVE_FURNITURE":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,furniture:n.furniture.filter(i=>i.id!==e.furnitureId)}:n)};case"ADD_STAIR":return{...t,stairs:[...t.stairs,e.stair]};case"MOVE_STAIR":return{...t,stairs:t.stairs.map(n=>n.id===e.stairId?{...n,x:e.x,y:e.y,rotation:e.rotation??n.rotation}:n)};case"REMOVE_STAIR":return{...t,stairs:t.stairs.filter(n=>n.id!==e.stairId)};case"ADD_COLUMN":return{...t,columns:[...t.columns||[],e.column]};case"MOVE_COLUMN":return{...t,columns:(t.columns||[]).map(n=>n.id===e.columnId?{...n,x:e.x,y:e.y}:n)};case"REMOVE_COLUMN":return{...t,columns:(t.columns||[]).filter(n=>n.id!==e.columnId)};default:return t}}function Z2(t){const[e,n]=Ie.useReducer(K2,t||$_()),i=Ie.useMemo(()=>({setProject:o=>n({type:"SET_PROJECT",project:o}),setMeta:o=>n({type:"SET_META",patch:o}),addRoom:o=>n({type:"ADD_ROOM",room:o}),updateRoom:(o,a)=>n({type:"UPDATE_ROOM",roomId:o,patch:a}),removeRoom:o=>n({type:"REMOVE_ROOM",roomId:o}),addOpening:(o,a,l,u,c)=>n({type:"ADD_OPENING",roomId:o,kind:a,wall:l,edgeIndex:u,position:c}),moveOpening:(o,a,l,u)=>n({type:"MOVE_OPENING",roomId:o,openingId:a,wall:l,position:u}),removeOpening:(o,a)=>n({type:"REMOVE_OPENING",roomId:o,openingId:a}),addFurniture:(o,a,l,u)=>n({type:"ADD_FURNITURE",roomId:o,kind:a,x:l,y:u}),moveFurniture:(o,a,l,u,c)=>n({type:"MOVE_FURNITURE",roomId:o,furnitureId:a,x:l,y:u,rotation:c}),removeFurniture:(o,a)=>n({type:"REMOVE_FURNITURE",roomId:o,furnitureId:a}),addStair:o=>n({type:"ADD_STAIR",stair:o}),moveStair:(o,a,l,u)=>n({type:"MOVE_STAIR",stairId:o,x:a,y:l,rotation:u}),removeStair:o=>n({type:"REMOVE_STAIR",stairId:o}),addColumn:o=>n({type:"ADD_COLUMN",column:o}),moveColumn:(o,a,l)=>n({type:"MOVE_COLUMN",columnId:o,x:a,y:l}),removeColumn:o=>n({type:"REMOVE_COLUMN",columnId:o})}),[]),r=Ie.useCallback(o=>{const a=X2(o);return i.addRoom(a),a},[i]),s=Ie.useCallback(o=>{const a=j2(o);return i.addRoom(a),a},[i]);return{project:e.project,rooms:e.rooms,stairs:e.stairs,columns:e.columns||[],actions:{...i,addRectRoom:r,addPolygonRoom:s}}}function J2(t,e,n){return F2(t,e,n)}const Ag={WALLS:7,DOORS:1,WINDOWS:5,DIMENSIONS:3,TEXT:7,STAIRS:8,COLUMNS:2};function Rg(t){let e=t*180/Math.PI;return e=e%360,e<0&&(e+=360),e}function At(t,e){return{x:t.x+e,y:-t.y}}function Yr(t,e,n,i){t.push(`0
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
0.0`)}function xh(t,e,n,i){const r=["0","LWPOLYLINE","8",e,"90",String(n.length),"70","1"];n.forEach(s=>{r.push("10",String(s.x),"20",String(s.y))}),t.push(r.join(`
`))}function Q2(t,e,n,i,r,s,o){t.push(`0
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
${s}
51
${o}`)}function Dr(t,e,n,i,r,s=0){const o=String(r).replace(/[\r\n]+/g," ");t.push(`0
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
${o}
50
${s}`)}function eC(t,e){const n=t.slice().sort((s,o)=>s.position-o.position);let i=0;const r=[];return n.forEach(s=>{const o=s.position-s.width/2,a=s.position+s.width/2;o>i+.02&&r.push([i,o]),i=Math.max(i,a)}),i<e-.02&&r.push([i,e]),r}function Cg(t,e,n,i,r){const s=n.x-e.x,o=n.y-e.y,a=Math.hypot(s,o);if(a<.02)return;const l=s/a,u=o/a,c=-u,h=l,d=ht/2;eC(i,a).forEach(([m,g])=>{const x=[{x:e.x+l*m-c*d,y:e.y+u*m-h*d},{x:e.x+l*g-c*d,y:e.y+u*g-h*d},{x:e.x+l*g+c*d,y:e.y+u*g+h*d},{x:e.x+l*m+c*d,y:e.y+u*m+h*d}].map(v=>At(v,r));xh(t,"WALLS",x)})}function tC(t){const{gx:e,gy:n,gw:i,gh:r}=t;return[{wall:"top",p1:{x:e,y:n},p2:{x:e+i,y:n}},{wall:"bottom",p1:{x:e,y:n+r},p2:{x:e+i,y:n+r}},{wall:"left",p1:{x:e,y:n},p2:{x:e,y:n+r}},{wall:"right",p1:{x:e+i,y:n},p2:{x:e+i,y:n+r}}]}function nC(t,e,n,i){const r=co(e,n,Ot),s=j_(e),o=At({x:r.x1,y:r.y1},i),a=At({x:r.x2,y:r.y2},i),l=At(s,i),u=a.x-o.x,c=a.y-o.y,h=Math.hypot(u,c);if(h<.01)return;const d={x:-c/h,y:u/h},m={x:c/h,y:-u/h},g=(o.x+a.x)/2,x=(o.y+a.y)/2,v={x:l.x-g,y:l.y-x},f=d.x*v.x+d.y*v.y>=0?d:m,_=Math.atan2(c,u),p=Math.atan2(f.y,f.x);let y=p-_;for(;y>Math.PI;)y-=Math.PI*2;for(;y<=-Math.PI;)y+=Math.PI*2;const R=y<0,S=R?p:_,T=R?_:p;Q2(t,"DOORS",o.x,o.y,h,Rg(S),Rg(T));const P={x:o.x+h*Math.cos(p),y:o.y+h*Math.sin(p)};Yr(t,"DOORS",o,P)}function iC(t,e,n,i){const r=co(e,n,dn);Yr(t,"WINDOWS",At({x:r.x1,y:r.y1},i),At({x:r.x2,y:r.y2},i))}function rC(t,e,n){const{gx:i,gy:r,gw:s,gh:o}=e,a=(m,g)=>At({x:m,y:g},n),l=(m,g,x,v)=>Yr(t,"DIMENSIONS",a(m,g),a(x,v)),u=r-Yi;l(i,r,i,u-Kt),l(i+s,r,i+s,u-Kt),l(i,u,i+s,u),Dr(t,"DIMENSIONS",a(i+s/2,u-.1),.14,s.toFixed(2));const c=r+o+Yi;l(i,r+o,i,c+Kt),l(i+s,r+o,i+s,c+Kt),l(i,c,i+s,c),Dr(t,"DIMENSIONS",a(i+s/2,c+.15),.14,s.toFixed(2));const h=i-Yi;l(i,r,h-Kt,r),l(i,r+o,h-Kt,r+o),l(h,r,h,r+o),Dr(t,"DIMENSIONS",a(h-.1,r+o/2),.14,o.toFixed(2),90);const d=i+s+Yi;l(i+s,r,d+Kt,r),l(i+s,r+o,d+Kt,r+o),l(d,r,d,r+o),Dr(t,"DIMENSIONS",a(d+.15,r+o/2),.14,o.toFixed(2),90)}function sC(t,e,n){const i=e.points?{x:Math.min(...e.points.map(r=>r.x)),y:Math.min(...e.points.map(r=>r.y))}:{x:e.gx,y:e.gy};Dr(t,"TEXT",At({x:i.x+.25,y:i.y+.5},n),.22,e.name),Dr(t,"TEXT",At({x:i.x+.25,y:i.y+.85},n),.14,`${O_(e).toFixed(1)} m2`)}function oC(t,e,n,i,r){n.forEach(s=>{const o=_h(e,s.floor??0,i),a=s.rotation||0,{w:l,d:u}=zu(o,a),c=s.x-l/2,h=s.x+l/2,d=s.y-u/2,m=s.y+u/2,g=[{x:c,y:d},{x:h,y:d},{x:h,y:m},{x:c,y:m}].map(f=>At(f,r));xh(t,"STAIRS",g);const x=a===90||a===270,v=10;for(let f=1;f<v;f++)if(x){const _=c+l*f/v;Yr(t,"STAIRS",At({x:_,y:d},r),At({x:_,y:m},r))}else{const _=d+u*f/v;Yr(t,"STAIRS",At({x:c,y:_},r),At({x:h,y:_},r))}})}function aC(t,e,n){e.forEach(i=>{const s=(i.size??Rr)/2,o=i.x-s,a=i.x+s,l=i.y-s,u=i.y+s,c=[{x:o,y:l},{x:a,y:l},{x:a,y:u},{x:o,y:u}].map(h=>At(h,n));xh(t,"COLUMNS",c),Yr(t,"COLUMNS",At({x:o,y:l},n),At({x:a,y:u},n)),Yr(t,"COLUMNS",At({x:o,y:u},n),At({x:a,y:l},n))})}function lC(t,e,n,i,r,s,o,a){const l=[];return Dr(l,"TEXT",At({x:0,y:-.7},s),.35,o),e.forEach(u=>{if(u.points&&u.points.length>=3){const c=u.points.length;for(let h=0;h<c;h++){const d=u.points[h],m=u.points[(h+1)%c],g=(u.openings||[]).filter(x=>x.edge_index===h).map(x=>({position:x.position,width:x.kind==="door"?Ot:dn}));Cg(l,d,m,g,s)}}else tC(u).forEach(({wall:c,p1:h,p2:d})=>{const m=(u.openings||[]).filter(g=>g.wall===c).map(g=>({position:g.position,width:g.kind==="door"?Ot:dn}));Cg(l,h,d,m,s)}),a&&rC(l,u,s);(u.openings||[]).forEach(c=>{c.kind==="door"?nC(l,u,c,s):iC(l,u,c,s)}),sC(l,u,s)}),oC(l,t,n,r,s),aC(l,i,s),l}function uC(t,e,n,i,r,s=!0){const o=Object.entries(Ag).map(([m,g])=>`0
LAYER
2
${m}
70
0
62
${g}
6
CONTINUOUS`).join(`
`),a=[];let l=0;const u=3;e.forEach(m=>{const g=n.filter(f=>(f.floor??0)===m.floorNum),x=(i||[]).filter(f=>(f.floor??0)===m.floorNum);a.push(...lC(t,m.rooms,g,x,r,l,m.label,s));const v=m.rooms.length?Math.max(...m.rooms.map(f=>f.points?Math.max(...f.points.map(_=>_.x)):f.gx+f.gw)):10;l+=v+u});const c=["0","SECTION","2","HEADER","9","$ACADVER","1","AC1021","9","$INSUNITS","70","6","0","ENDSEC"].join(`
`),h=["0","SECTION","2","TABLES","0","TABLE","2","LAYER","70",String(Object.keys(Ag).length),o,"0","ENDTAB","0","ENDSEC"].join(`
`),d=["0","SECTION","2","ENTITIES",...a,"0","ENDSEC"].join(`
`);return[c,h,d,"0","EOF"].join(`
`)+`
`}function cC({initialProject:t,projectId:e,onBack:n,onSave:i,t:r}){const{project:s,rooms:o,stairs:a,columns:l,actions:u}=Z2(t),[c,h]=Ie.useState("select"),[d,m]=Ie.useState(0),[g,x]=Ie.useState(null),[v,f]=Ie.useState(null),[_,p]=Ie.useState(null),[y,R]=Ie.useState(null),[S,T]=Ie.useState(!1),[P,E]=Ie.useState(""),[w,N]=Ie.useState(!1),[B,te]=Ie.useState(!1),[L,H]=Ie.useState(()=>typeof window<"u"?window.innerWidth<900:!1);Ie.useEffect(()=>{function X(){H(window.innerWidth<900)}return window.addEventListener("resize",X),()=>window.removeEventListener("resize",X)},[]);const G=o.find(X=>X.id===g)||null,ee=a.find(X=>X.id===_)||null,I=l.find(X=>X.id===y)||null,O=Math.max(0,...o.map(X=>X.floor??0),...a.map(X=>(X.floor??0)+1),...l.map(X=>X.floor??0)),V=Math.max(s.floor_count||1,O+1);function ne(){const X=V+1;u.setMeta({floor_count:X}),m(V)}async function oe(){T(!0),E("");const X=await i(e,{project:s,rooms:o,stairs:a,columns:l});return T(!1),E(X.ok?r("Saved"):X.error||r("Save failed")),setTimeout(()=>E(""),2500),X}function Y(){const X=o.filter($=>($.floor??0)===d),he=J2(X,20,16),[,ae]=he.split(","),ie=atob(ae),U=new Uint8Array(ie.length);for(let $=0;$<ie.length;$++)U[$]=ie.charCodeAt($);const W=new Blob([U],{type:"image/png"}),j=URL.createObjectURL(W),b=document.createElement("a");b.href=j,b.download=(s.name||"floor-plan")+"-"+yg(d)+".png",b.click(),URL.revokeObjectURL(j)}function se(){const X=Array.from({length:V},(W,j)=>({floorNum:j,label:yg(j),rooms:o.filter(b=>(b.floor??0)===j)})).filter(W=>W.rooms.length>0);if(!X.length)return;const he=uC(o,X,a,l,s.wall_height),ae=new Blob([he],{type:"application/dxf"}),ie=URL.createObjectURL(ae),U=document.createElement("a");U.href=ie,U.download=(s.name||"floor-plan")+".dxf",U.click(),URL.revokeObjectURL(ie)}return Ee.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh",fontFamily:"sans-serif",overflowX:"hidden"},children:[Ee.jsxs("div",{style:{display:"flex",flexWrap:"wrap",rowGap:8,alignItems:"center",justifyContent:"space-between",padding:"10px 14px",borderBottom:"1px solid #e5e7eb"},children:[Ee.jsxs("button",{type:"button",onClick:n,style:{background:"none",border:"none",cursor:"pointer",fontSize:13,color:"#374151"},children:["← ",r("Projects")]}),Ee.jsx("input",{value:s.name,onChange:X=>u.setMeta({name:X.target.value}),style:{fontWeight:800,fontSize:15,border:"none",textAlign:"center",flex:"1 1 140px",minWidth:0}}),Ee.jsxs("div",{style:{display:"flex",flexWrap:"wrap",rowGap:8,gap:8,alignItems:"center",justifyContent:"flex-end"},children:[Ee.jsx("span",{style:{fontSize:12,color:"#6b7280"},children:P}),Ee.jsxs("label",{style:{fontSize:12,color:"#6b7280",display:"flex",alignItems:"center",gap:4},children:[Ee.jsx("input",{type:"checkbox",checked:w,onChange:X=>N(X.target.checked)}),r("Dollhouse view")]}),Ee.jsxs("label",{style:{fontSize:12,color:"#6b7280",display:"flex",alignItems:"center",gap:4},children:[Ee.jsx("input",{type:"checkbox",checked:B,onChange:X=>te(X.target.checked)}),r("Render view")]}),Ee.jsx("button",{type:"button",onClick:Y,style:{padding:"8px 14px",borderRadius:8,border:"1px solid #d1d5db",background:"#fff",fontWeight:700,fontSize:13,cursor:"pointer"},children:r("Export plan")}),Ee.jsx("button",{type:"button",onClick:se,style:{padding:"8px 14px",borderRadius:8,border:"1px solid #d1d5db",background:"#fff",fontWeight:700,fontSize:13,cursor:"pointer"},children:r("Export DXF")}),Ee.jsx("button",{type:"button",onClick:oe,disabled:S,style:{padding:"8px 16px",borderRadius:8,border:"none",background:"#c9a96e",color:"#1b1e22",fontWeight:800,fontSize:13,cursor:"pointer",opacity:S?.6:1},children:r(S?"Saving…":"Save")})]})]}),Ee.jsx(H2,{t:r,mode:c,onModeChange:h,selectedRoom:G,onRenameRoom:(X,he)=>u.updateRoom(X,{name:he}),onResizeRoomInputs:(X,he,ae)=>u.updateRoom(X,{gw:he,gh:ae}),onDeleteRoom:X=>{u.removeRoom(X),x(null)},selectedOpening:v,onDeleteOpening:(X,he)=>{u.removeOpening(X,he),f(null)},floorCount:V,activeFloor:d,onSetActiveFloor:m,onAddFloor:ne,selectedStair:ee,onDeleteStair:X=>{u.removeStair(X),p(null)},selectedColumn:I,onDeleteColumn:X=>{u.removeColumn(X),R(null)}}),Ee.jsxs("div",{style:{display:"flex",flexDirection:L?"column":"row",flex:1,minHeight:0},children:[Ee.jsx("div",{style:L?{flex:"0 0 auto",maxHeight:"50%",overflow:"auto"}:{flex:1,overflow:"auto"},children:Ee.jsx(k2,{rooms:o,stairs:a,columns:l,wallHeight:s.wall_height,mode:c,activeFloor:d,selectedRoomId:g,selectedOpening:v,selectedStairId:_,selectedColumnId:y,onAddRoom:X=>u.addRectRoom(X),onAddPolygonRoom:X=>u.addPolygonRoom({points:X,floor:d}),onMoveRoom:(X,he,ae)=>u.updateRoom(X,{gx:he,gy:ae}),onResizeRoom:(X,he,ae)=>u.updateRoom(X,{gw:he,gh:ae}),onMovePolygonRoom:(X,he)=>{const ae=he.map($=>$.x),ie=he.map($=>$.y),U=Math.min(...ae),W=Math.min(...ie),j=Math.max(...ae)-U,b=Math.max(...ie)-W;u.updateRoom(X,{points:he,gx:U,gy:W,gw:j,gh:b})},onSelectRoom:x,onAddOpening:u.addOpening,onSelectOpening:f,onAddStair:X=>u.addStair(Y2(X)),onMoveStair:(X,he,ae,ie)=>u.moveStair(X,he,ae,ie),onSelectStair:p,onAddColumn:X=>u.addColumn($2(X)),onMoveColumn:(X,he,ae)=>u.moveColumn(X,he,ae),onSelectColumn:R})}),Ee.jsx("div",{style:{flex:1,minHeight:0},children:Ee.jsx(z2,{rooms:o,stairs:a,columns:l,wallHeight:s.wall_height,wallColor:s.wall_color,wallMaterial:s.wall_material,t:r,dollhouse:w,floorGap:w?1.2:0,renderView:B})})]})]})}const fC={"Lamsa Engineers":"لمسة للمهندسين","Please sign in to continue.":"الرجاء تسجيل الدخول للمتابعة.","Sign in":"تسجيل الدخول","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"صمّم مخططات أرضية كاملة، عاينها ثلاثي الأبعاد، وصدّر مستندات هندسية حقيقية.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"انتهى اشتراكك بقسم المهندسين. جدّد الاشتراك لمتابعة تصميم المخططات الكاملة.","Rectangular rooms, doors & windows, single-floor plans":"غرف مستطيلة، أبواب ونوافذ، مخططات بطابق واحد","Live 3D preview of your design":"معاينة ثلاثية الأبعاد حية لتصميمك","Printable floor plan export":"تصدير مخطط قابل للطباعة","Use Lamsa's existing furniture-styling tools per room":"استخدم أدوات تنسيق الأثاث الموجودة بلمسة لكل غرفة","/ year":"/ سنوياً","14-day free trial, cancel anytime":"تجربة مجانية لمدة 14 يوم، إلغاء بأي وقت","Starting…":"جارٍ البدء…","Start free trial":"ابدأ التجربة المجانية","Something went wrong, please try again":"حدث خطأ ما، حاول مرة أخرى","Your Projects":"مشاريعك","New Project":"مشروع جديد","No projects yet — create your first one.":"لا يوجد مشاريع بعد — أنشئ أول مشروع.",Delete:"حذف",Projects:"المشاريع",Saved:"تم الحفظ","Save failed":"فشل الحفظ","Export plan":"تصدير المخطط","Saving…":"جارٍ الحفظ…",Save:"حفظ",Select:"تحديد","Add Room":"إضافة غرفة","Add Door":"إضافة باب","Add Window":"إضافة نافذة","Delete Room":"حذف الغرفة","Delete Opening":"حذف الفتحة",W:"عرض",H:"ارتفاع","Reset camera":"إعادة ضبط الكاميرا","Untitled Project":"مشروع بدون اسم","Add Polygon Room":"إضافة غرفة بشكل حر","Add Stairs":"إضافة سلالم","Delete Stairs":"حذف السلالم","Add Column":"إضافة عمود","Delete Column":"حذف العمود","Ground Floor":"الطابق الأرضي",Floor:"الطابق","Add Floor":"إضافة طابق","Dollhouse view":"عرض مقطعي","Render view":"عرض فني","Export DXF":"تصدير DXF"},bg={de:{"Lamsa Engineers":"Lamsa Ingenieure","Please sign in to continue.":"Bitte melde dich an, um fortzufahren.","Sign in":"Anmelden","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Entwirf komplette Grundrisse, sieh sie in 3D in der Vorschau und exportiere echte Architekturunterlagen.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Dein Zugang zu Engineers ist abgelaufen. Abonniere erneut, um weiter vollständige Grundrisse zu gestalten.","Rectangular rooms, doors & windows, single-floor plans":"Rechteckige Räume, Türen & Fenster, einstöckige Grundrisse","Live 3D preview of your design":"Live-3D-Vorschau deines Entwurfs","Printable floor plan export":"Druckbarer Grundriss-Export","Use Lamsa's existing furniture-styling tools per room":"Nutze Lamsas vorhandene Möbel-Styling-Tools für jeden Raum","/ year":"/ Jahr","14-day free trial, cancel anytime":"14 Tage kostenlos testen, jederzeit kündbar","Starting…":"Wird gestartet…","Start free trial":"Kostenlose Testphase starten","Something went wrong, please try again":"Etwas ist schiefgelaufen, bitte versuche es erneut","Your Projects":"Deine Projekte","New Project":"Neues Projekt","No projects yet — create your first one.":"Noch keine Projekte — erstelle dein erstes.",Delete:"Löschen",Projects:"Projekte",Saved:"Gespeichert","Save failed":"Speichern fehlgeschlagen","Export plan":"Plan exportieren","Saving…":"Wird gespeichert…",Save:"Speichern",Select:"Auswählen","Add Room":"Raum hinzufügen","Add Door":"Tür hinzufügen","Add Window":"Fenster hinzufügen","Delete Room":"Raum löschen","Delete Opening":"Öffnung löschen",W:"B",H:"H","Reset camera":"Kamera zurücksetzen","Untitled Project":"Unbenanntes Projekt","Add Polygon Room":"Freiform-Raum hinzufügen","Add Stairs":"Treppe hinzufügen","Delete Stairs":"Treppe löschen","Add Column":"Säule hinzufügen","Delete Column":"Säule löschen","Ground Floor":"Erdgeschoss",Floor:"Stockwerk","Add Floor":"Stockwerk hinzufügen","Dollhouse view":"Schnittansicht","Render view":"Render-Ansicht","Export DXF":"DXF exportieren"},es:{"Lamsa Engineers":"Lamsa Ingenieros","Please sign in to continue.":"Inicia sesión para continuar.","Sign in":"Iniciar sesión","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Diseña planos completos, previsualízalos en 3D y exporta documentos arquitectónicos reales.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Tu acceso a Engineers ha terminado. Suscríbete de nuevo para seguir diseñando planos completos.","Rectangular rooms, doors & windows, single-floor plans":"Habitaciones rectangulares, puertas y ventanas, planos de una sola planta","Live 3D preview of your design":"Vista previa 3D en vivo de tu diseño","Printable floor plan export":"Exportación de plano imprimible","Use Lamsa's existing furniture-styling tools per room":"Usa las herramientas de estilismo de muebles de Lamsa en cada habitación","/ year":"/ año","14-day free trial, cancel anytime":"14 días de prueba gratis, cancela cuando quieras","Starting…":"Iniciando…","Start free trial":"Iniciar prueba gratuita","Something went wrong, please try again":"Algo salió mal, inténtalo de nuevo","Your Projects":"Tus Proyectos","New Project":"Nuevo Proyecto","No projects yet — create your first one.":"Aún no hay proyectos — crea el primero.",Delete:"Eliminar",Projects:"Proyectos",Saved:"Guardado","Save failed":"Error al guardar","Export plan":"Exportar plano","Saving…":"Guardando…",Save:"Guardar",Select:"Seleccionar","Add Room":"Añadir Habitación","Add Door":"Añadir Puerta","Add Window":"Añadir Ventana","Delete Room":"Eliminar Habitación","Delete Opening":"Eliminar Apertura",W:"An",H:"Al","Reset camera":"Restablecer cámara","Untitled Project":"Proyecto sin título","Add Polygon Room":"Añadir Habitación de Forma Libre","Add Stairs":"Añadir Escaleras","Delete Stairs":"Eliminar Escaleras","Add Column":"Añadir Columna","Delete Column":"Eliminar Columna","Ground Floor":"Planta Baja",Floor:"Planta","Add Floor":"Añadir Planta","Dollhouse view":"Vista seccionada","Render view":"Vista renderizada","Export DXF":"Exportar DXF"},tr:{"Lamsa Engineers":"Lamsa Muhendisler","Please sign in to continue.":"Devam etmek icin giris yapin.","Sign in":"Giris Yap","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Tam kat planlari tasarlayin, 3D onizleme yapin ve gercek mimari belgeler disa aktarin.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Engineers erisiminiz sona erdi. Tam kat planlari tasarlamaya devam etmek icin tekrar abone olun.","Rectangular rooms, doors & windows, single-floor plans":"Dikdortgen odalar, kapilar ve pencereler, tek katli planlar","Live 3D preview of your design":"Tasariminizin canli 3D onizlemesi","Printable floor plan export":"Yazdirilabilir kat plani disa aktarma","Use Lamsa's existing furniture-styling tools per room":"Lamsa'nin mevcut mobilya stilizasyon araclarini her oda icin kullanin","/ year":"/ yil","14-day free trial, cancel anytime":"14 gunluk ucretsiz deneme, istediginiz zaman iptal edin","Starting…":"Basliyor…","Start free trial":"Ucretsiz denemeyi baslat","Something went wrong, please try again":"Bir sorun olustu, lutfen tekrar deneyin","Your Projects":"Projeleriniz","New Project":"Yeni Proje","No projects yet — create your first one.":"Henuz proje yok — ilkini olusturun.",Delete:"Sil",Projects:"Projeler",Saved:"Kaydedildi","Save failed":"Kaydetme basarisiz","Export plan":"Plani disa aktar","Saving…":"Kaydediliyor…",Save:"Kaydet",Select:"Sec","Add Room":"Oda Ekle","Add Door":"Kapi Ekle","Add Window":"Pencere Ekle","Delete Room":"Odayi Sil","Delete Opening":"Acikligi Sil",W:"G",H:"Y","Reset camera":"Kamerayi sifirla","Untitled Project":"Isimsiz Proje","Add Polygon Room":"Serbest Sekilli Oda Ekle","Add Stairs":"Merdiven Ekle","Delete Stairs":"Merdiveni Sil","Add Column":"Kolon Ekle","Delete Column":"Kolonu Sil","Ground Floor":"Zemin Kat",Floor:"Kat","Add Floor":"Kat Ekle","Dollhouse view":"Kesit Gorunumu","Render view":"Render Gorunumu","Export DXF":"DXF Disa Aktar"},fr:{"Lamsa Engineers":"Lamsa Ingénieurs","Please sign in to continue.":"Veuillez vous connecter pour continuer.","Sign in":"Connexion","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Concevez des plans complets, prévisualisez-les en 3D et exportez de vrais documents architecturaux.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Votre accès à Engineers a expiré. Réabonnez-vous pour continuer à concevoir des plans complets.","Rectangular rooms, doors & windows, single-floor plans":"Pièces rectangulaires, portes et fenêtres, plans à un seul niveau","Live 3D preview of your design":"Aperçu 3D en direct de votre conception","Printable floor plan export":"Export de plan imprimable","Use Lamsa's existing furniture-styling tools per room":"Utilisez les outils de style de meubles existants de Lamsa pour chaque pièce","/ year":"/ an","14-day free trial, cancel anytime":"Essai gratuit de 14 jours, annulez à tout moment","Starting…":"Démarrage…","Start free trial":"Démarrer l'essai gratuit","Something went wrong, please try again":"Un problème est survenu, veuillez réessayer","Your Projects":"Vos Projets","New Project":"Nouveau Projet","No projects yet — create your first one.":"Aucun projet pour l'instant — créez le premier.",Delete:"Supprimer",Projects:"Projets",Saved:"Enregistré","Save failed":"Échec de l'enregistrement","Export plan":"Exporter le plan","Saving…":"Enregistrement…",Save:"Enregistrer",Select:"Sélectionner","Add Room":"Ajouter une pièce","Add Door":"Ajouter une porte","Add Window":"Ajouter une fenêtre","Delete Room":"Supprimer la pièce","Delete Opening":"Supprimer l'ouverture",W:"L",H:"H","Reset camera":"Réinitialiser la caméra","Untitled Project":"Projet sans titre","Add Polygon Room":"Ajouter une pièce de forme libre","Add Stairs":"Ajouter un escalier","Delete Stairs":"Supprimer l'escalier","Add Column":"Ajouter un poteau","Delete Column":"Supprimer le poteau","Ground Floor":"Rez-de-chaussée",Floor:"Étage","Add Floor":"Ajouter un étage","Dollhouse view":"Vue en coupe","Render view":"Vue rendue","Export DXF":"Exporter en DXF"},it:{"Lamsa Engineers":"Lamsa Ingegneri","Please sign in to continue.":"Accedi per continuare.","Sign in":"Accedi","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Progetta planimetrie complete, visualizzale in anteprima 3D ed esporta veri documenti architettonici.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Il tuo accesso a Engineers è scaduto. Abbonati di nuovo per continuare a progettare planimetrie complete.","Rectangular rooms, doors & windows, single-floor plans":"Stanze rettangolari, porte e finestre, planimetrie a un piano","Live 3D preview of your design":"Anteprima 3D dal vivo del tuo progetto","Printable floor plan export":"Esportazione planimetria stampabile","Use Lamsa's existing furniture-styling tools per room":"Usa gli strumenti di stile mobili di Lamsa per ogni stanza","/ year":"/ anno","14-day free trial, cancel anytime":"Prova gratuita di 14 giorni, annulla quando vuoi","Starting…":"Avvio…","Start free trial":"Avvia la prova gratuita","Something went wrong, please try again":"Qualcosa è andato storto, riprova","Your Projects":"I Tuoi Progetti","New Project":"Nuovo Progetto","No projects yet — create your first one.":"Nessun progetto ancora — crea il primo.",Delete:"Elimina",Projects:"Progetti",Saved:"Salvato","Save failed":"Salvataggio non riuscito","Export plan":"Esporta planimetria","Saving…":"Salvataggio…",Save:"Salva",Select:"Seleziona","Add Room":"Aggiungi Stanza","Add Door":"Aggiungi Porta","Add Window":"Aggiungi Finestra","Delete Room":"Elimina Stanza","Delete Opening":"Elimina Apertura",W:"L",H:"A","Reset camera":"Reimposta fotocamera","Untitled Project":"Progetto senza titolo","Add Polygon Room":"Aggiungi Stanza a Forma Libera","Add Stairs":"Aggiungi Scale","Delete Stairs":"Elimina Scale","Add Column":"Aggiungi Pilastro","Delete Column":"Elimina Pilastro","Ground Floor":"Piano Terra",Floor:"Piano","Add Floor":"Aggiungi Piano","Dollhouse view":"Vista in sezione","Render view":"Vista renderizzata","Export DXF":"Esporta DXF"},ru:{"Lamsa Engineers":"Lamsa Inzhenery","Please sign in to continue.":"Voydite, chtoby prodolzhit.","Sign in":"Vkhod","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Proektiruyte polnotsennye plany pomeshcheniy, prosmatrivayte ikh v 3D i eksportiruyte nastoyashchie arkhitekturnye dokumenty.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Vash dostup k Engineers zavershilsya. Oformite podpisku snova, chtoby prodolzhit proektirovat polnye plany.","Rectangular rooms, doors & windows, single-floor plans":"Pryamougolnye komnaty, dveri i okna, odnoetazhnye plany","Live 3D preview of your design":"Zhivoy 3D-predprosmotr vashego proekta","Printable floor plan export":"Eksport plana dlya pechati","Use Lamsa's existing furniture-styling tools per room":"Ispolzuyte sushchestvuyushchie instrumenty stilizatsii mebeli Lamsa dlya kazhdoy komnaty","/ year":"/ god","14-day free trial, cancel anytime":"14-dnevnyy besplatnyy probnyy period, otmena v lyuboy moment","Starting…":"Zapusk…","Start free trial":"Nachat besplatnyy probnyy period","Something went wrong, please try again":"Chto-to poshlo ne tak, poprobuyte snova","Your Projects":"Vashi Proekty","New Project":"Novyy Proekt","No projects yet — create your first one.":"Poka net proektov — sozdayte pervyy.",Delete:"Udalit",Projects:"Proekty",Saved:"Sokhraneno","Save failed":"Oshibka sokhraneniya","Export plan":"Eksportirovat plan","Saving…":"Sokhranenie…",Save:"Sokhranit",Select:"Vybrat","Add Room":"Dobavit Komnatu","Add Door":"Dobavit Dver","Add Window":"Dobavit Okno","Delete Room":"Udalit Komnatu","Delete Opening":"Udalit Proyom",W:"Sh",H:"V","Reset camera":"Sbrosit kameru","Untitled Project":"Proekt bez nazvaniya","Add Polygon Room":"Dobavit Komnatu Svobodnoy Formy","Add Stairs":"Dobavit Lestnitsu","Delete Stairs":"Udalit Lestnitsu","Add Column":"Dobavit Kolonnu","Delete Column":"Udalit Kolonnu","Ground Floor":"Pervyy Etazh",Floor:"Etazh","Add Floor":"Dobavit Etazh","Dollhouse view":"Razrez doma","Render view":"Render vid","Export DXF":"Eksportirovat DXF"}};function dC(){try{return localStorage.getItem("lamsa_lang")||"en"}catch{return"en"}}function hC(){const[t,e]=Ie.useState(dC);Ie.useEffect(()=>{document.documentElement.setAttribute("dir",t==="ar"?"rtl":"ltr"),document.documentElement.setAttribute("lang",t)},[t]),Ie.useEffect(()=>{function i(r){r.key==="lamsa_lang"&&e(r.newValue||"en")}return window.addEventListener("storage",i),()=>window.removeEventListener("storage",i)},[]);const n=Ie.useCallback(i=>t==="ar"?fC[i]||i:t==="en"?i:bg[t]&&bg[t][i]||i,[t]);return{lang:t,t:n}}function pC(t){return!!t&&(t.status==="active"||t.status==="trialing")}function mC(){const{t}=hC(),[e,n]=Ie.useState("loading"),[i,r]=Ie.useState(null),[s,o]=Ie.useState([]),[a,l]=Ie.useState(null);Ie.useEffect(()=>{CS().then(g=>{if(g.status===401){n("signin");return}if(!g.ok||!g.data){n("signin");return}const x=g.data.engineerSubscription;if(r(x?x.status:null),!pC(x)){n("paywall");return}u()})},[]);function u(){bS().then(g=>{g.ok&&g.data&&o(g.data.projects||[]),n("list")})}function c(){l({projectId:null,project:$_(t("Untitled Project"))}),n("editor")}function h(g){PS(g).then(x=>{if(x.status===403){n("paywall");return}!x.ok||!x.data||(l({projectId:g,project:x.data.project}),n("editor"))})}function d(g){DS(g).then(()=>u())}async function m(g,x){const v=await LS(g,x);return v.status===403?(n("paywall"),{ok:!1,error:"Engineers access required"}):(v.ok&&v.data&&l(f=>({...f,projectId:v.data.projectId})),v.ok?{ok:!0}:{ok:!1,error:v.data&&v.data.error||"Save failed"})}return e==="loading"?null:e==="signin"?Ee.jsxs("div",{style:{maxWidth:420,margin:"100px auto",textAlign:"center",fontFamily:"sans-serif"},children:[Ee.jsx("h1",{style:{fontSize:20,fontWeight:800,marginBottom:12},children:t("Lamsa Engineers")}),Ee.jsx("p",{style:{color:"#6b7280",marginBottom:20},children:t("Please sign in to continue.")}),Ee.jsx("a",{href:"/lamsa-auth.html?return=engineers/index.html",style:{display:"inline-block",background:"#c9a96e",color:"#1b1e22",padding:"12px 24px",borderRadius:10,fontWeight:800,textDecoration:"none"},children:t("Sign in")})]}):e==="paywall"?Ee.jsx(NS,{status:i,t}):e==="editor"&&a?Ee.jsx(cC,{initialProject:a.project,projectId:a.projectId,onBack:()=>u(),onSave:m,t}):Ee.jsx(US,{projects:s,onOpen:h,onCreate:c,onDelete:d,t})}Gv(document.getElementById("root")).render(Ee.jsx(gx.StrictMode,{children:Ee.jsx(mC,{})}));
