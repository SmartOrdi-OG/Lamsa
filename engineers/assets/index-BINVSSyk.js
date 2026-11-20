(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function U_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var fg={exports:{}},eu={},dg={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oa=Symbol.for("react.element"),F_=Symbol.for("react.portal"),O_=Symbol.for("react.fragment"),z_=Symbol.for("react.strict_mode"),k_=Symbol.for("react.profiler"),B_=Symbol.for("react.provider"),H_=Symbol.for("react.context"),G_=Symbol.for("react.forward_ref"),V_=Symbol.for("react.suspense"),W_=Symbol.for("react.memo"),X_=Symbol.for("react.lazy"),uh=Symbol.iterator;function j_(t){return t===null||typeof t!="object"?null:(t=uh&&t[uh]||t["@@iterator"],typeof t=="function"?t:null)}var hg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pg=Object.assign,mg={};function qs(t,e,n){this.props=t,this.context=e,this.refs=mg,this.updater=n||hg}qs.prototype.isReactComponent={};qs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};qs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function gg(){}gg.prototype=qs.prototype;function Zf(t,e,n){this.props=t,this.context=e,this.refs=mg,this.updater=n||hg}var Jf=Zf.prototype=new gg;Jf.constructor=Zf;pg(Jf,qs.prototype);Jf.isPureReactComponent=!0;var ch=Array.isArray,vg=Object.prototype.hasOwnProperty,Qf={current:null},_g={key:!0,ref:!0,__self:!0,__source:!0};function xg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)vg.call(e,i)&&!_g.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:oa,type:t,key:s,ref:o,props:r,_owner:Qf.current}}function Y_(t,e){return{$$typeof:oa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ed(t){return typeof t=="object"&&t!==null&&t.$$typeof===oa}function q_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var fh=/\/+/g;function bu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?q_(""+t.key):e.toString(36)}function al(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case oa:case F_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+bu(o,0):i,ch(r)?(n="",t!=null&&(n=t.replace(fh,"$&/")+"/"),al(r,e,n,"",function(u){return u})):r!=null&&(ed(r)&&(r=Y_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(fh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",ch(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+bu(s,a);o+=al(s,e,n,l,r)}else if(l=j_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+bu(s,a++),o+=al(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ga(t,e,n){if(t==null)return t;var i=[],r=0;return al(t,i,"","",function(s){return e.call(n,s,r++)}),i}function $_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var on={current:null},ll={transition:null},K_={ReactCurrentDispatcher:on,ReactCurrentBatchConfig:ll,ReactCurrentOwner:Qf};function yg(){throw Error("act(...) is not supported in production builds of React.")}$e.Children={map:ga,forEach:function(t,e,n){ga(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ga(t,function(){e++}),e},toArray:function(t){return ga(t,function(e){return e})||[]},only:function(t){if(!ed(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$e.Component=qs;$e.Fragment=O_;$e.Profiler=k_;$e.PureComponent=Zf;$e.StrictMode=z_;$e.Suspense=V_;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K_;$e.act=yg;$e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=pg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Qf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)vg.call(e,l)&&!_g.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:oa,type:t.type,key:r,ref:s,props:i,_owner:o}};$e.createContext=function(t){return t={$$typeof:H_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:B_,_context:t},t.Consumer=t};$e.createElement=xg;$e.createFactory=function(t){var e=xg.bind(null,t);return e.type=t,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:G_,render:t}};$e.isValidElement=ed;$e.lazy=function(t){return{$$typeof:X_,_payload:{_status:-1,_result:t},_init:$_}};$e.memo=function(t,e){return{$$typeof:W_,type:t,compare:e===void 0?null:e}};$e.startTransition=function(t){var e=ll.transition;ll.transition={};try{t()}finally{ll.transition=e}};$e.unstable_act=yg;$e.useCallback=function(t,e){return on.current.useCallback(t,e)};$e.useContext=function(t){return on.current.useContext(t)};$e.useDebugValue=function(){};$e.useDeferredValue=function(t){return on.current.useDeferredValue(t)};$e.useEffect=function(t,e){return on.current.useEffect(t,e)};$e.useId=function(){return on.current.useId()};$e.useImperativeHandle=function(t,e,n){return on.current.useImperativeHandle(t,e,n)};$e.useInsertionEffect=function(t,e){return on.current.useInsertionEffect(t,e)};$e.useLayoutEffect=function(t,e){return on.current.useLayoutEffect(t,e)};$e.useMemo=function(t,e){return on.current.useMemo(t,e)};$e.useReducer=function(t,e,n){return on.current.useReducer(t,e,n)};$e.useRef=function(t){return on.current.useRef(t)};$e.useState=function(t){return on.current.useState(t)};$e.useSyncExternalStore=function(t,e,n){return on.current.useSyncExternalStore(t,e,n)};$e.useTransition=function(){return on.current.useTransition()};$e.version="18.3.1";dg.exports=$e;var Ne=dg.exports;const Z_=U_(Ne);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J_=Ne,Q_=Symbol.for("react.element"),ex=Symbol.for("react.fragment"),tx=Object.prototype.hasOwnProperty,nx=J_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ix={key:!0,ref:!0,__self:!0,__source:!0};function Sg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)tx.call(e,i)&&!ix.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Q_,type:t,key:s,ref:o,props:r,_owner:nx.current}}eu.Fragment=ex;eu.jsx=Sg;eu.jsxs=Sg;fg.exports=eu;var Se=fg.exports,Eg={exports:{}},An={},Mg={exports:{}},wg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,L){var B=F.length;F.push(L);e:for(;0<B;){var O=B-1>>>1,b=F[O];if(0<r(b,L))F[O]=L,F[B]=b,B=O;else break e}}function n(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var L=F[0],B=F.pop();if(B!==L){F[0]=B;e:for(var O=0,b=F.length,U=b>>>1;O<U;){var z=2*(O+1)-1,K=F[z],Q=z+1,oe=F[Q];if(0>r(K,B))Q<b&&0>r(oe,K)?(F[O]=oe,F[Q]=B,O=Q):(F[O]=K,F[z]=B,O=z);else if(Q<b&&0>r(oe,B))F[O]=oe,F[Q]=B,O=Q;else break e}}return L}function r(F,L){var B=F.sortIndex-L.sortIndex;return B!==0?B:F.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,p=!1,v=!1,x=!1,_=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(F){for(var L=n(u);L!==null;){if(L.callback===null)i(u);else if(L.startTime<=F)i(u),L.sortIndex=L.expirationTime,e(l,L);else break;L=n(u)}}function y(F){if(x=!1,m(F),!v)if(n(l)!==null)v=!0,j(C);else{var L=n(u);L!==null&&Z(y,L.startTime-F)}}function C(F,L){v=!1,x&&(x=!1,f(D),D=-1),p=!0;var B=d;try{for(m(L),h=n(l);h!==null&&(!(h.expirationTime>L)||F&&!k());){var O=h.callback;if(typeof O=="function"){h.callback=null,d=h.priorityLevel;var b=O(h.expirationTime<=L);L=t.unstable_now(),typeof b=="function"?h.callback=b:h===n(l)&&i(l),m(L)}else i(l);h=n(l)}if(h!==null)var U=!0;else{var z=n(u);z!==null&&Z(y,z.startTime-L),U=!1}return U}finally{h=null,d=B,p=!1}}var E=!1,T=null,D=-1,S=5,M=-1;function k(){return!(t.unstable_now()-M<S)}function W(){if(T!==null){var F=t.unstable_now();M=F;var L=!0;try{L=T(!0,F)}finally{L?te():(E=!1,T=null)}}else E=!1}var te;if(typeof g=="function")te=function(){g(W)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,H=I.port2;I.port1.onmessage=W,te=function(){H.postMessage(null)}}else te=function(){_(W,0)};function j(F){T=F,E||(E=!0,te())}function Z(F,L){D=_(function(){F(t.unstable_now())},L)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,j(C))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(F){switch(d){case 1:case 2:case 3:var L=3;break;default:L=d}var B=d;d=L;try{return F()}finally{d=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,L){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var B=d;d=F;try{return L()}finally{d=B}},t.unstable_scheduleCallback=function(F,L,B){var O=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?O+B:O):B=O,F){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=B+b,F={id:c++,callback:L,priorityLevel:F,startTime:B,expirationTime:b,sortIndex:-1},B>O?(F.sortIndex=B,e(u,F),n(l)===null&&F===n(u)&&(x?(f(D),D=-1):x=!0,Z(y,B-O))):(F.sortIndex=b,e(l,F),v||p||(v=!0,j(C))),F},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(F){var L=d;return function(){var B=d;d=L;try{return F.apply(this,arguments)}finally{d=B}}}})(wg);Mg.exports=wg;var rx=Mg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sx=Ne,Tn=rx;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Tg=new Set,Fo={};function Gr(t,e){Us(t,e),Us(t+"Capture",e)}function Us(t,e){for(Fo[t]=e,t=0;t<e.length;t++)Tg.add(e[t])}var wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hc=Object.prototype.hasOwnProperty,ox=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dh={},hh={};function ax(t){return Hc.call(hh,t)?!0:Hc.call(dh,t)?!1:ox.test(t)?hh[t]=!0:(dh[t]=!0,!1)}function lx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ux(t,e,n,i){if(e===null||typeof e>"u"||lx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function an(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Gt[t]=new an(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Gt[e]=new an(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Gt[t]=new an(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Gt[t]=new an(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Gt[t]=new an(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Gt[t]=new an(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Gt[t]=new an(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Gt[t]=new an(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Gt[t]=new an(t,5,!1,t.toLowerCase(),null,!1,!1)});var td=/[\-:]([a-z])/g;function nd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(td,nd);Gt[e]=new an(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(td,nd);Gt[e]=new an(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(td,nd);Gt[e]=new an(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Gt[t]=new an(t,1,!1,t.toLowerCase(),null,!1,!1)});Gt.xlinkHref=new an("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Gt[t]=new an(t,1,!1,t.toLowerCase(),null,!0,!0)});function id(t,e,n,i){var r=Gt.hasOwnProperty(e)?Gt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ux(e,n,r,i)&&(n=null),i||r===null?ax(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var bi=sx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),cs=Symbol.for("react.portal"),fs=Symbol.for("react.fragment"),rd=Symbol.for("react.strict_mode"),Gc=Symbol.for("react.profiler"),Ag=Symbol.for("react.provider"),Rg=Symbol.for("react.context"),sd=Symbol.for("react.forward_ref"),Vc=Symbol.for("react.suspense"),Wc=Symbol.for("react.suspense_list"),od=Symbol.for("react.memo"),Fi=Symbol.for("react.lazy"),Cg=Symbol.for("react.offscreen"),ph=Symbol.iterator;function ro(t){return t===null||typeof t!="object"?null:(t=ph&&t[ph]||t["@@iterator"],typeof t=="function"?t:null)}var pt=Object.assign,Pu;function _o(t){if(Pu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Pu=e&&e[1]||""}return`
`+Pu+t}var Lu=!1;function Du(t,e){if(!t||Lu)return"";Lu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Lu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?_o(t):""}function cx(t){switch(t.tag){case 5:return _o(t.type);case 16:return _o("Lazy");case 13:return _o("Suspense");case 19:return _o("SuspenseList");case 0:case 2:case 15:return t=Du(t.type,!1),t;case 11:return t=Du(t.type.render,!1),t;case 1:return t=Du(t.type,!0),t;default:return""}}function Xc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case fs:return"Fragment";case cs:return"Portal";case Gc:return"Profiler";case rd:return"StrictMode";case Vc:return"Suspense";case Wc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Rg:return(t.displayName||"Context")+".Consumer";case Ag:return(t._context.displayName||"Context")+".Provider";case sd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case od:return e=t.displayName||null,e!==null?e:Xc(t.type)||"Memo";case Fi:e=t._payload,t=t._init;try{return Xc(t(e))}catch{}}return null}function fx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xc(e);case 8:return e===rd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function bg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function dx(t){var e=bg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _a(t){t._valueTracker||(t._valueTracker=dx(t))}function Pg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=bg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Sl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function jc(t,e){var n=e.checked;return pt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function mh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Lg(t,e){e=e.checked,e!=null&&id(t,"checked",e,!1)}function Yc(t,e){Lg(t,e);var n=ir(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?qc(t,e.type,n):e.hasOwnProperty("defaultValue")&&qc(t,e.type,ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function gh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function qc(t,e,n){(e!=="number"||Sl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var xo=Array.isArray;function As(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ir(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function $c(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return pt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function vh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(xo(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ir(n)}}function Dg(t,e){var n=ir(e.value),i=ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function _h(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ig(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ig(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xa,Ng=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(xa=xa||document.createElement("div"),xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Oo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Mo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hx=["Webkit","ms","Moz","O"];Object.keys(Mo).forEach(function(t){hx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Mo[e]=Mo[t]})});function Ug(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Mo.hasOwnProperty(t)&&Mo[t]?(""+e).trim():e+"px"}function Fg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Ug(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var px=pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zc(t,e){if(e){if(px[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function Jc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qc=null;function ad(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ef=null,Rs=null,Cs=null;function xh(t){if(t=ua(t)){if(typeof ef!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=su(e),ef(t.stateNode,t.type,e))}}function Og(t){Rs?Cs?Cs.push(t):Cs=[t]:Rs=t}function zg(){if(Rs){var t=Rs,e=Cs;if(Cs=Rs=null,xh(t),e)for(t=0;t<e.length;t++)xh(e[t])}}function kg(t,e){return t(e)}function Bg(){}var Iu=!1;function Hg(t,e,n){if(Iu)return t(e,n);Iu=!0;try{return kg(t,e,n)}finally{Iu=!1,(Rs!==null||Cs!==null)&&(Bg(),zg())}}function zo(t,e){var n=t.stateNode;if(n===null)return null;var i=su(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var tf=!1;if(wi)try{var so={};Object.defineProperty(so,"passive",{get:function(){tf=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{tf=!1}function mx(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var wo=!1,El=null,Ml=!1,nf=null,gx={onError:function(t){wo=!0,El=t}};function vx(t,e,n,i,r,s,o,a,l){wo=!1,El=null,mx.apply(gx,arguments)}function _x(t,e,n,i,r,s,o,a,l){if(vx.apply(this,arguments),wo){if(wo){var u=El;wo=!1,El=null}else throw Error(ce(198));Ml||(Ml=!0,nf=u)}}function Vr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Gg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function yh(t){if(Vr(t)!==t)throw Error(ce(188))}function xx(t){var e=t.alternate;if(!e){if(e=Vr(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return yh(r),t;if(s===i)return yh(r),e;s=s.sibling}throw Error(ce(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function Vg(t){return t=xx(t),t!==null?Wg(t):null}function Wg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Wg(t);if(e!==null)return e;t=t.sibling}return null}var Xg=Tn.unstable_scheduleCallback,Sh=Tn.unstable_cancelCallback,yx=Tn.unstable_shouldYield,Sx=Tn.unstable_requestPaint,xt=Tn.unstable_now,Ex=Tn.unstable_getCurrentPriorityLevel,ld=Tn.unstable_ImmediatePriority,jg=Tn.unstable_UserBlockingPriority,wl=Tn.unstable_NormalPriority,Mx=Tn.unstable_LowPriority,Yg=Tn.unstable_IdlePriority,tu=null,ai=null;function wx(t){if(ai&&typeof ai.onCommitFiberRoot=="function")try{ai.onCommitFiberRoot(tu,t,void 0,(t.current.flags&128)===128)}catch{}}var Zn=Math.clz32?Math.clz32:Rx,Tx=Math.log,Ax=Math.LN2;function Rx(t){return t>>>=0,t===0?32:31-(Tx(t)/Ax|0)|0}var ya=64,Sa=4194304;function yo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Tl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=yo(a):(s&=o,s!==0&&(i=yo(s)))}else o=n&~r,o!==0?i=yo(o):s!==0&&(i=yo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Zn(e),r=1<<n,i|=t[n],e&=~r;return i}function Cx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Zn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Cx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function rf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function qg(){var t=ya;return ya<<=1,!(ya&4194240)&&(ya=64),t}function Nu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function aa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Zn(e),t[e]=n}function Px(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Zn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function ud(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Zn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Qe=0;function $g(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Kg,cd,Zg,Jg,Qg,sf=!1,Ea=[],Xi=null,ji=null,Yi=null,ko=new Map,Bo=new Map,zi=[],Lx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Eh(t,e){switch(t){case"focusin":case"focusout":Xi=null;break;case"dragenter":case"dragleave":ji=null;break;case"mouseover":case"mouseout":Yi=null;break;case"pointerover":case"pointerout":ko.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(e.pointerId)}}function oo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ua(e),e!==null&&cd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Dx(t,e,n,i,r){switch(e){case"focusin":return Xi=oo(Xi,t,e,n,i,r),!0;case"dragenter":return ji=oo(ji,t,e,n,i,r),!0;case"mouseover":return Yi=oo(Yi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ko.set(s,oo(ko.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Bo.set(s,oo(Bo.get(s)||null,t,e,n,i,r)),!0}return!1}function e0(t){var e=Er(t.target);if(e!==null){var n=Vr(e);if(n!==null){if(e=n.tag,e===13){if(e=Gg(n),e!==null){t.blockedOn=e,Qg(t.priority,function(){Zg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ul(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=of(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Qc=i,n.target.dispatchEvent(i),Qc=null}else return e=ua(n),e!==null&&cd(e),t.blockedOn=n,!1;e.shift()}return!0}function Mh(t,e,n){ul(t)&&n.delete(e)}function Ix(){sf=!1,Xi!==null&&ul(Xi)&&(Xi=null),ji!==null&&ul(ji)&&(ji=null),Yi!==null&&ul(Yi)&&(Yi=null),ko.forEach(Mh),Bo.forEach(Mh)}function ao(t,e){t.blockedOn===e&&(t.blockedOn=null,sf||(sf=!0,Tn.unstable_scheduleCallback(Tn.unstable_NormalPriority,Ix)))}function Ho(t){function e(r){return ao(r,t)}if(0<Ea.length){ao(Ea[0],t);for(var n=1;n<Ea.length;n++){var i=Ea[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Xi!==null&&ao(Xi,t),ji!==null&&ao(ji,t),Yi!==null&&ao(Yi,t),ko.forEach(e),Bo.forEach(e),n=0;n<zi.length;n++)i=zi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<zi.length&&(n=zi[0],n.blockedOn===null);)e0(n),n.blockedOn===null&&zi.shift()}var bs=bi.ReactCurrentBatchConfig,Al=!0;function Nx(t,e,n,i){var r=Qe,s=bs.transition;bs.transition=null;try{Qe=1,fd(t,e,n,i)}finally{Qe=r,bs.transition=s}}function Ux(t,e,n,i){var r=Qe,s=bs.transition;bs.transition=null;try{Qe=4,fd(t,e,n,i)}finally{Qe=r,bs.transition=s}}function fd(t,e,n,i){if(Al){var r=of(t,e,n,i);if(r===null)Wu(t,e,i,Rl,n),Eh(t,i);else if(Dx(r,t,e,n,i))i.stopPropagation();else if(Eh(t,i),e&4&&-1<Lx.indexOf(t)){for(;r!==null;){var s=ua(r);if(s!==null&&Kg(s),s=of(t,e,n,i),s===null&&Wu(t,e,i,Rl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Wu(t,e,i,null,n)}}var Rl=null;function of(t,e,n,i){if(Rl=null,t=ad(i),t=Er(t),t!==null)if(e=Vr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Gg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Rl=t,null}function t0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ex()){case ld:return 1;case jg:return 4;case wl:case Mx:return 16;case Yg:return 536870912;default:return 16}default:return 16}}var Bi=null,dd=null,cl=null;function n0(){if(cl)return cl;var t,e=dd,n=e.length,i,r="value"in Bi?Bi.value:Bi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return cl=r.slice(t,1<i?1-i:void 0)}function fl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ma(){return!0}function wh(){return!1}function Rn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ma:wh,this.isPropagationStopped=wh,this}return pt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ma)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ma)},persist:function(){},isPersistent:Ma}),e}var $s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hd=Rn($s),la=pt({},$s,{view:0,detail:0}),Fx=Rn(la),Uu,Fu,lo,nu=pt({},la,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==lo&&(lo&&t.type==="mousemove"?(Uu=t.screenX-lo.screenX,Fu=t.screenY-lo.screenY):Fu=Uu=0,lo=t),Uu)},movementY:function(t){return"movementY"in t?t.movementY:Fu}}),Th=Rn(nu),Ox=pt({},nu,{dataTransfer:0}),zx=Rn(Ox),kx=pt({},la,{relatedTarget:0}),Ou=Rn(kx),Bx=pt({},$s,{animationName:0,elapsedTime:0,pseudoElement:0}),Hx=Rn(Bx),Gx=pt({},$s,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Vx=Rn(Gx),Wx=pt({},$s,{data:0}),Ah=Rn(Wx),Xx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Yx[t])?!!e[t]:!1}function pd(){return qx}var $x=pt({},la,{key:function(t){if(t.key){var e=Xx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=fl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?jx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pd,charCode:function(t){return t.type==="keypress"?fl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Kx=Rn($x),Zx=pt({},nu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rh=Rn(Zx),Jx=pt({},la,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pd}),Qx=Rn(Jx),ey=pt({},$s,{propertyName:0,elapsedTime:0,pseudoElement:0}),ty=Rn(ey),ny=pt({},nu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),iy=Rn(ny),ry=[9,13,27,32],md=wi&&"CompositionEvent"in window,To=null;wi&&"documentMode"in document&&(To=document.documentMode);var sy=wi&&"TextEvent"in window&&!To,i0=wi&&(!md||To&&8<To&&11>=To),Ch=" ",bh=!1;function r0(t,e){switch(t){case"keyup":return ry.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function s0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ds=!1;function oy(t,e){switch(t){case"compositionend":return s0(e);case"keypress":return e.which!==32?null:(bh=!0,Ch);case"textInput":return t=e.data,t===Ch&&bh?null:t;default:return null}}function ay(t,e){if(ds)return t==="compositionend"||!md&&r0(t,e)?(t=n0(),cl=dd=Bi=null,ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return i0&&e.locale!=="ko"?null:e.data;default:return null}}var ly={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ph(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ly[t.type]:e==="textarea"}function o0(t,e,n,i){Og(i),e=Cl(e,"onChange"),0<e.length&&(n=new hd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ao=null,Go=null;function uy(t){v0(t,0)}function iu(t){var e=ms(t);if(Pg(e))return t}function cy(t,e){if(t==="change")return e}var a0=!1;if(wi){var zu;if(wi){var ku="oninput"in document;if(!ku){var Lh=document.createElement("div");Lh.setAttribute("oninput","return;"),ku=typeof Lh.oninput=="function"}zu=ku}else zu=!1;a0=zu&&(!document.documentMode||9<document.documentMode)}function Dh(){Ao&&(Ao.detachEvent("onpropertychange",l0),Go=Ao=null)}function l0(t){if(t.propertyName==="value"&&iu(Go)){var e=[];o0(e,Go,t,ad(t)),Hg(uy,e)}}function fy(t,e,n){t==="focusin"?(Dh(),Ao=e,Go=n,Ao.attachEvent("onpropertychange",l0)):t==="focusout"&&Dh()}function dy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return iu(Go)}function hy(t,e){if(t==="click")return iu(e)}function py(t,e){if(t==="input"||t==="change")return iu(e)}function my(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ei=typeof Object.is=="function"?Object.is:my;function Vo(t,e){if(ei(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Hc.call(e,r)||!ei(t[r],e[r]))return!1}return!0}function Ih(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nh(t,e){var n=Ih(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ih(n)}}function u0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?u0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function c0(){for(var t=window,e=Sl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Sl(t.document)}return e}function gd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function gy(t){var e=c0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&u0(n.ownerDocument.documentElement,n)){if(i!==null&&gd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Nh(n,s);var o=Nh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var vy=wi&&"documentMode"in document&&11>=document.documentMode,hs=null,af=null,Ro=null,lf=!1;function Uh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lf||hs==null||hs!==Sl(i)||(i=hs,"selectionStart"in i&&gd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ro&&Vo(Ro,i)||(Ro=i,i=Cl(af,"onSelect"),0<i.length&&(e=new hd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=hs)))}function wa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ps={animationend:wa("Animation","AnimationEnd"),animationiteration:wa("Animation","AnimationIteration"),animationstart:wa("Animation","AnimationStart"),transitionend:wa("Transition","TransitionEnd")},Bu={},f0={};wi&&(f0=document.createElement("div").style,"AnimationEvent"in window||(delete ps.animationend.animation,delete ps.animationiteration.animation,delete ps.animationstart.animation),"TransitionEvent"in window||delete ps.transitionend.transition);function ru(t){if(Bu[t])return Bu[t];if(!ps[t])return t;var e=ps[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in f0)return Bu[t]=e[n];return t}var d0=ru("animationend"),h0=ru("animationiteration"),p0=ru("animationstart"),m0=ru("transitionend"),g0=new Map,Fh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(t,e){g0.set(t,e),Gr(e,[t])}for(var Hu=0;Hu<Fh.length;Hu++){var Gu=Fh[Hu],_y=Gu.toLowerCase(),xy=Gu[0].toUpperCase()+Gu.slice(1);or(_y,"on"+xy)}or(d0,"onAnimationEnd");or(h0,"onAnimationIteration");or(p0,"onAnimationStart");or("dblclick","onDoubleClick");or("focusin","onFocus");or("focusout","onBlur");or(m0,"onTransitionEnd");Us("onMouseEnter",["mouseout","mouseover"]);Us("onMouseLeave",["mouseout","mouseover"]);Us("onPointerEnter",["pointerout","pointerover"]);Us("onPointerLeave",["pointerout","pointerover"]);Gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yy=new Set("cancel close invalid load scroll toggle".split(" ").concat(So));function Oh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,_x(i,e,void 0,t),t.currentTarget=null}function v0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Oh(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Oh(r,a,u),s=l}}}if(Ml)throw t=nf,Ml=!1,nf=null,t}function st(t,e){var n=e[hf];n===void 0&&(n=e[hf]=new Set);var i=t+"__bubble";n.has(i)||(_0(e,t,2,!1),n.add(i))}function Vu(t,e,n){var i=0;e&&(i|=4),_0(n,t,i,e)}var Ta="_reactListening"+Math.random().toString(36).slice(2);function Wo(t){if(!t[Ta]){t[Ta]=!0,Tg.forEach(function(n){n!=="selectionchange"&&(yy.has(n)||Vu(n,!1,t),Vu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ta]||(e[Ta]=!0,Vu("selectionchange",!1,e))}}function _0(t,e,n,i){switch(t0(e)){case 1:var r=Nx;break;case 4:r=Ux;break;default:r=fd}n=r.bind(null,e,n,t),r=void 0,!tf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Wu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Er(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Hg(function(){var u=s,c=ad(n),h=[];e:{var d=g0.get(t);if(d!==void 0){var p=hd,v=t;switch(t){case"keypress":if(fl(n)===0)break e;case"keydown":case"keyup":p=Kx;break;case"focusin":v="focus",p=Ou;break;case"focusout":v="blur",p=Ou;break;case"beforeblur":case"afterblur":p=Ou;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Th;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=zx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Qx;break;case d0:case h0:case p0:p=Hx;break;case m0:p=ty;break;case"scroll":p=Fx;break;case"wheel":p=iy;break;case"copy":case"cut":case"paste":p=Vx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Rh}var x=(e&4)!==0,_=!x&&t==="scroll",f=x?d!==null?d+"Capture":null:d;x=[];for(var g=u,m;g!==null;){m=g;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,f!==null&&(y=zo(g,f),y!=null&&x.push(Xo(g,y,m)))),_)break;g=g.return}0<x.length&&(d=new p(d,v,null,n,c),h.push({event:d,listeners:x}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Qc&&(v=n.relatedTarget||n.fromElement)&&(Er(v)||v[Ti]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?Er(v):null,v!==null&&(_=Vr(v),v!==_||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(x=Th,y="onMouseLeave",f="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=Rh,y="onPointerLeave",f="onPointerEnter",g="pointer"),_=p==null?d:ms(p),m=v==null?d:ms(v),d=new x(y,g+"leave",p,n,c),d.target=_,d.relatedTarget=m,y=null,Er(c)===u&&(x=new x(f,g+"enter",v,n,c),x.target=m,x.relatedTarget=_,y=x),_=y,p&&v)t:{for(x=p,f=v,g=0,m=x;m;m=Xr(m))g++;for(m=0,y=f;y;y=Xr(y))m++;for(;0<g-m;)x=Xr(x),g--;for(;0<m-g;)f=Xr(f),m--;for(;g--;){if(x===f||f!==null&&x===f.alternate)break t;x=Xr(x),f=Xr(f)}x=null}else x=null;p!==null&&zh(h,d,p,x,!1),v!==null&&_!==null&&zh(h,_,v,x,!0)}}e:{if(d=u?ms(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var C=cy;else if(Ph(d))if(a0)C=py;else{C=dy;var E=fy}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=hy);if(C&&(C=C(t,u))){o0(h,C,n,c);break e}E&&E(t,d,u),t==="focusout"&&(E=d._wrapperState)&&E.controlled&&d.type==="number"&&qc(d,"number",d.value)}switch(E=u?ms(u):window,t){case"focusin":(Ph(E)||E.contentEditable==="true")&&(hs=E,af=u,Ro=null);break;case"focusout":Ro=af=hs=null;break;case"mousedown":lf=!0;break;case"contextmenu":case"mouseup":case"dragend":lf=!1,Uh(h,n,c);break;case"selectionchange":if(vy)break;case"keydown":case"keyup":Uh(h,n,c)}var T;if(md)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else ds?r0(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(i0&&n.locale!=="ko"&&(ds||D!=="onCompositionStart"?D==="onCompositionEnd"&&ds&&(T=n0()):(Bi=c,dd="value"in Bi?Bi.value:Bi.textContent,ds=!0)),E=Cl(u,D),0<E.length&&(D=new Ah(D,t,null,n,c),h.push({event:D,listeners:E}),T?D.data=T:(T=s0(n),T!==null&&(D.data=T)))),(T=sy?oy(t,n):ay(t,n))&&(u=Cl(u,"onBeforeInput"),0<u.length&&(c=new Ah("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=T))}v0(h,e)})}function Xo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Cl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=zo(t,n),s!=null&&i.unshift(Xo(t,s,r)),s=zo(t,e),s!=null&&i.push(Xo(t,s,r))),t=t.return}return i}function Xr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=zo(n,s),l!=null&&o.unshift(Xo(n,l,a))):r||(l=zo(n,s),l!=null&&o.push(Xo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Sy=/\r\n?/g,Ey=/\u0000|\uFFFD/g;function kh(t){return(typeof t=="string"?t:""+t).replace(Sy,`
`).replace(Ey,"")}function Aa(t,e,n){if(e=kh(e),kh(t)!==e&&n)throw Error(ce(425))}function bl(){}var uf=null,cf=null;function ff(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var df=typeof setTimeout=="function"?setTimeout:void 0,My=typeof clearTimeout=="function"?clearTimeout:void 0,Bh=typeof Promise=="function"?Promise:void 0,wy=typeof queueMicrotask=="function"?queueMicrotask:typeof Bh<"u"?function(t){return Bh.resolve(null).then(t).catch(Ty)}:df;function Ty(t){setTimeout(function(){throw t})}function Xu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ho(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ho(e)}function qi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Hh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ks=Math.random().toString(36).slice(2),oi="__reactFiber$"+Ks,jo="__reactProps$"+Ks,Ti="__reactContainer$"+Ks,hf="__reactEvents$"+Ks,Ay="__reactListeners$"+Ks,Ry="__reactHandles$"+Ks;function Er(t){var e=t[oi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ti]||n[oi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Hh(t);t!==null;){if(n=t[oi])return n;t=Hh(t)}return e}t=n,n=t.parentNode}return null}function ua(t){return t=t[oi]||t[Ti],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ms(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function su(t){return t[jo]||null}var pf=[],gs=-1;function ar(t){return{current:t}}function at(t){0>gs||(t.current=pf[gs],pf[gs]=null,gs--)}function rt(t,e){gs++,pf[gs]=t.current,t.current=e}var rr={},Zt=ar(rr),hn=ar(!1),Ir=rr;function Fs(t,e){var n=t.type.contextTypes;if(!n)return rr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function pn(t){return t=t.childContextTypes,t!=null}function Pl(){at(hn),at(Zt)}function Gh(t,e,n){if(Zt.current!==rr)throw Error(ce(168));rt(Zt,e),rt(hn,n)}function x0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,fx(t)||"Unknown",r));return pt({},n,i)}function Ll(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||rr,Ir=Zt.current,rt(Zt,t),rt(hn,hn.current),!0}function Vh(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=x0(t,e,Ir),i.__reactInternalMemoizedMergedChildContext=t,at(hn),at(Zt),rt(Zt,t)):at(hn),rt(hn,n)}var _i=null,ou=!1,ju=!1;function y0(t){_i===null?_i=[t]:_i.push(t)}function Cy(t){ou=!0,y0(t)}function lr(){if(!ju&&_i!==null){ju=!0;var t=0,e=Qe;try{var n=_i;for(Qe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}_i=null,ou=!1}catch(r){throw _i!==null&&(_i=_i.slice(t+1)),Xg(ld,lr),r}finally{Qe=e,ju=!1}}return null}var vs=[],_s=0,Dl=null,Il=0,Pn=[],Ln=0,Nr=null,yi=1,Si="";function mr(t,e){vs[_s++]=Il,vs[_s++]=Dl,Dl=t,Il=e}function S0(t,e,n){Pn[Ln++]=yi,Pn[Ln++]=Si,Pn[Ln++]=Nr,Nr=t;var i=yi;t=Si;var r=32-Zn(i)-1;i&=~(1<<r),n+=1;var s=32-Zn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,yi=1<<32-Zn(e)+r|n<<r|i,Si=s+t}else yi=1<<s|n<<r|i,Si=t}function vd(t){t.return!==null&&(mr(t,1),S0(t,1,0))}function _d(t){for(;t===Dl;)Dl=vs[--_s],vs[_s]=null,Il=vs[--_s],vs[_s]=null;for(;t===Nr;)Nr=Pn[--Ln],Pn[Ln]=null,Si=Pn[--Ln],Pn[Ln]=null,yi=Pn[--Ln],Pn[Ln]=null}var Mn=null,En=null,lt=!1,jn=null;function E0(t,e){var n=Un(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Mn=t,En=qi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Mn=t,En=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Nr!==null?{id:yi,overflow:Si}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Un(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Mn=t,En=null,!0):!1;default:return!1}}function mf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gf(t){if(lt){var e=En;if(e){var n=e;if(!Wh(t,e)){if(mf(t))throw Error(ce(418));e=qi(n.nextSibling);var i=Mn;e&&Wh(t,e)?E0(i,n):(t.flags=t.flags&-4097|2,lt=!1,Mn=t)}}else{if(mf(t))throw Error(ce(418));t.flags=t.flags&-4097|2,lt=!1,Mn=t}}}function Xh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Mn=t}function Ra(t){if(t!==Mn)return!1;if(!lt)return Xh(t),lt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ff(t.type,t.memoizedProps)),e&&(e=En)){if(mf(t))throw M0(),Error(ce(418));for(;e;)E0(t,e),e=qi(e.nextSibling)}if(Xh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){En=qi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}En=null}}else En=Mn?qi(t.stateNode.nextSibling):null;return!0}function M0(){for(var t=En;t;)t=qi(t.nextSibling)}function Os(){En=Mn=null,lt=!1}function xd(t){jn===null?jn=[t]:jn.push(t)}var by=bi.ReactCurrentBatchConfig;function uo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function Ca(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function jh(t){var e=t._init;return e(t._payload)}function w0(t){function e(f,g){if(t){var m=f.deletions;m===null?(f.deletions=[g],f.flags|=16):m.push(g)}}function n(f,g){if(!t)return null;for(;g!==null;)e(f,g),g=g.sibling;return null}function i(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function r(f,g){return f=Ji(f,g),f.index=0,f.sibling=null,f}function s(f,g,m){return f.index=m,t?(m=f.alternate,m!==null?(m=m.index,m<g?(f.flags|=2,g):m):(f.flags|=2,g)):(f.flags|=1048576,g)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,g,m,y){return g===null||g.tag!==6?(g=Qu(m,f.mode,y),g.return=f,g):(g=r(g,m),g.return=f,g)}function l(f,g,m,y){var C=m.type;return C===fs?c(f,g,m.props.children,y,m.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Fi&&jh(C)===g.type)?(y=r(g,m.props),y.ref=uo(f,g,m),y.return=f,y):(y=_l(m.type,m.key,m.props,null,f.mode,y),y.ref=uo(f,g,m),y.return=f,y)}function u(f,g,m,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==m.containerInfo||g.stateNode.implementation!==m.implementation?(g=ec(m,f.mode,y),g.return=f,g):(g=r(g,m.children||[]),g.return=f,g)}function c(f,g,m,y,C){return g===null||g.tag!==7?(g=Cr(m,f.mode,y,C),g.return=f,g):(g=r(g,m),g.return=f,g)}function h(f,g,m){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Qu(""+g,f.mode,m),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case va:return m=_l(g.type,g.key,g.props,null,f.mode,m),m.ref=uo(f,null,g),m.return=f,m;case cs:return g=ec(g,f.mode,m),g.return=f,g;case Fi:var y=g._init;return h(f,y(g._payload),m)}if(xo(g)||ro(g))return g=Cr(g,f.mode,m,null),g.return=f,g;Ca(f,g)}return null}function d(f,g,m,y){var C=g!==null?g.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:a(f,g,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case va:return m.key===C?l(f,g,m,y):null;case cs:return m.key===C?u(f,g,m,y):null;case Fi:return C=m._init,d(f,g,C(m._payload),y)}if(xo(m)||ro(m))return C!==null?null:c(f,g,m,y,null);Ca(f,m)}return null}function p(f,g,m,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(m)||null,a(g,f,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case va:return f=f.get(y.key===null?m:y.key)||null,l(g,f,y,C);case cs:return f=f.get(y.key===null?m:y.key)||null,u(g,f,y,C);case Fi:var E=y._init;return p(f,g,m,E(y._payload),C)}if(xo(y)||ro(y))return f=f.get(m)||null,c(g,f,y,C,null);Ca(g,y)}return null}function v(f,g,m,y){for(var C=null,E=null,T=g,D=g=0,S=null;T!==null&&D<m.length;D++){T.index>D?(S=T,T=null):S=T.sibling;var M=d(f,T,m[D],y);if(M===null){T===null&&(T=S);break}t&&T&&M.alternate===null&&e(f,T),g=s(M,g,D),E===null?C=M:E.sibling=M,E=M,T=S}if(D===m.length)return n(f,T),lt&&mr(f,D),C;if(T===null){for(;D<m.length;D++)T=h(f,m[D],y),T!==null&&(g=s(T,g,D),E===null?C=T:E.sibling=T,E=T);return lt&&mr(f,D),C}for(T=i(f,T);D<m.length;D++)S=p(T,f,D,m[D],y),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?D:S.key),g=s(S,g,D),E===null?C=S:E.sibling=S,E=S);return t&&T.forEach(function(k){return e(f,k)}),lt&&mr(f,D),C}function x(f,g,m,y){var C=ro(m);if(typeof C!="function")throw Error(ce(150));if(m=C.call(m),m==null)throw Error(ce(151));for(var E=C=null,T=g,D=g=0,S=null,M=m.next();T!==null&&!M.done;D++,M=m.next()){T.index>D?(S=T,T=null):S=T.sibling;var k=d(f,T,M.value,y);if(k===null){T===null&&(T=S);break}t&&T&&k.alternate===null&&e(f,T),g=s(k,g,D),E===null?C=k:E.sibling=k,E=k,T=S}if(M.done)return n(f,T),lt&&mr(f,D),C;if(T===null){for(;!M.done;D++,M=m.next())M=h(f,M.value,y),M!==null&&(g=s(M,g,D),E===null?C=M:E.sibling=M,E=M);return lt&&mr(f,D),C}for(T=i(f,T);!M.done;D++,M=m.next())M=p(T,f,D,M.value,y),M!==null&&(t&&M.alternate!==null&&T.delete(M.key===null?D:M.key),g=s(M,g,D),E===null?C=M:E.sibling=M,E=M);return t&&T.forEach(function(W){return e(f,W)}),lt&&mr(f,D),C}function _(f,g,m,y){if(typeof m=="object"&&m!==null&&m.type===fs&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case va:e:{for(var C=m.key,E=g;E!==null;){if(E.key===C){if(C=m.type,C===fs){if(E.tag===7){n(f,E.sibling),g=r(E,m.props.children),g.return=f,f=g;break e}}else if(E.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Fi&&jh(C)===E.type){n(f,E.sibling),g=r(E,m.props),g.ref=uo(f,E,m),g.return=f,f=g;break e}n(f,E);break}else e(f,E);E=E.sibling}m.type===fs?(g=Cr(m.props.children,f.mode,y,m.key),g.return=f,f=g):(y=_l(m.type,m.key,m.props,null,f.mode,y),y.ref=uo(f,g,m),y.return=f,f=y)}return o(f);case cs:e:{for(E=m.key;g!==null;){if(g.key===E)if(g.tag===4&&g.stateNode.containerInfo===m.containerInfo&&g.stateNode.implementation===m.implementation){n(f,g.sibling),g=r(g,m.children||[]),g.return=f,f=g;break e}else{n(f,g);break}else e(f,g);g=g.sibling}g=ec(m,f.mode,y),g.return=f,f=g}return o(f);case Fi:return E=m._init,_(f,g,E(m._payload),y)}if(xo(m))return v(f,g,m,y);if(ro(m))return x(f,g,m,y);Ca(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,g!==null&&g.tag===6?(n(f,g.sibling),g=r(g,m),g.return=f,f=g):(n(f,g),g=Qu(m,f.mode,y),g.return=f,f=g),o(f)):n(f,g)}return _}var zs=w0(!0),T0=w0(!1),Nl=ar(null),Ul=null,xs=null,yd=null;function Sd(){yd=xs=Ul=null}function Ed(t){var e=Nl.current;at(Nl),t._currentValue=e}function vf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ps(t,e){Ul=t,yd=xs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(dn=!0),t.firstContext=null)}function zn(t){var e=t._currentValue;if(yd!==t)if(t={context:t,memoizedValue:e,next:null},xs===null){if(Ul===null)throw Error(ce(308));xs=t,Ul.dependencies={lanes:0,firstContext:t}}else xs=xs.next=t;return e}var Mr=null;function Md(t){Mr===null?Mr=[t]:Mr.push(t)}function A0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Md(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ai(t,i)}function Ai(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Oi=!1;function wd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function R0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Mi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function $i(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ai(t,n)}return r=i.interleaved,r===null?(e.next=e,Md(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ai(t,n)}function dl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ud(t,n)}}function Yh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Fl(t,e,n,i){var r=t.updateQueue;Oi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,x=a;switch(d=e,p=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){h=v.call(p,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,d=typeof v=="function"?v.call(p,h,d):v,d==null)break e;h=pt({},h,d);break e;case 2:Oi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(c===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Fr|=o,t.lanes=o,t.memoizedState=h}}function qh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var ca={},li=ar(ca),Yo=ar(ca),qo=ar(ca);function wr(t){if(t===ca)throw Error(ce(174));return t}function Td(t,e){switch(rt(qo,e),rt(Yo,t),rt(li,ca),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Kc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Kc(e,t)}at(li),rt(li,e)}function ks(){at(li),at(Yo),at(qo)}function C0(t){wr(qo.current);var e=wr(li.current),n=Kc(e,t.type);e!==n&&(rt(Yo,t),rt(li,n))}function Ad(t){Yo.current===t&&(at(li),at(Yo))}var ct=ar(0);function Ol(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yu=[];function Rd(){for(var t=0;t<Yu.length;t++)Yu[t]._workInProgressVersionPrimary=null;Yu.length=0}var hl=bi.ReactCurrentDispatcher,qu=bi.ReactCurrentBatchConfig,Ur=0,ht=null,wt=null,Dt=null,zl=!1,Co=!1,$o=0,Py=0;function Wt(){throw Error(ce(321))}function Cd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ei(t[n],e[n]))return!1;return!0}function bd(t,e,n,i,r,s){if(Ur=s,ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,hl.current=t===null||t.memoizedState===null?Ny:Uy,t=n(i,r),Co){s=0;do{if(Co=!1,$o=0,25<=s)throw Error(ce(301));s+=1,Dt=wt=null,e.updateQueue=null,hl.current=Fy,t=n(i,r)}while(Co)}if(hl.current=kl,e=wt!==null&&wt.next!==null,Ur=0,Dt=wt=ht=null,zl=!1,e)throw Error(ce(300));return t}function Pd(){var t=$o!==0;return $o=0,t}function ri(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?ht.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function kn(){if(wt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=Dt===null?ht.memoizedState:Dt.next;if(e!==null)Dt=e,wt=t;else{if(t===null)throw Error(ce(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Dt===null?ht.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function Ko(t,e){return typeof e=="function"?e(t):e}function $u(t){var e=kn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=wt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ur&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,ht.lanes|=c,Fr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,ei(i,e.memoizedState)||(dn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ht.lanes|=s,Fr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ku(t){var e=kn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ei(s,e.memoizedState)||(dn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function b0(){}function P0(t,e){var n=ht,i=kn(),r=e(),s=!ei(i.memoizedState,r);if(s&&(i.memoizedState=r,dn=!0),i=i.queue,Ld(I0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Dt!==null&&Dt.memoizedState.tag&1){if(n.flags|=2048,Zo(9,D0.bind(null,n,i,r,e),void 0,null),Ut===null)throw Error(ce(349));Ur&30||L0(n,e,r)}return r}function L0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function D0(t,e,n,i){e.value=n,e.getSnapshot=i,N0(e)&&U0(t)}function I0(t,e,n){return n(function(){N0(e)&&U0(t)})}function N0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ei(t,n)}catch{return!0}}function U0(t){var e=Ai(t,1);e!==null&&Jn(e,t,1,-1)}function $h(t){var e=ri();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ko,lastRenderedState:t},e.queue=t,t=t.dispatch=Iy.bind(null,ht,t),[e.memoizedState,t]}function Zo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function F0(){return kn().memoizedState}function pl(t,e,n,i){var r=ri();ht.flags|=t,r.memoizedState=Zo(1|e,n,void 0,i===void 0?null:i)}function au(t,e,n,i){var r=kn();i=i===void 0?null:i;var s=void 0;if(wt!==null){var o=wt.memoizedState;if(s=o.destroy,i!==null&&Cd(i,o.deps)){r.memoizedState=Zo(e,n,s,i);return}}ht.flags|=t,r.memoizedState=Zo(1|e,n,s,i)}function Kh(t,e){return pl(8390656,8,t,e)}function Ld(t,e){return au(2048,8,t,e)}function O0(t,e){return au(4,2,t,e)}function z0(t,e){return au(4,4,t,e)}function k0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function B0(t,e,n){return n=n!=null?n.concat([t]):null,au(4,4,k0.bind(null,e,t),n)}function Dd(){}function H0(t,e){var n=kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Cd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function G0(t,e){var n=kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Cd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function V0(t,e,n){return Ur&21?(ei(n,e)||(n=qg(),ht.lanes|=n,Fr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,dn=!0),t.memoizedState=n)}function Ly(t,e){var n=Qe;Qe=n!==0&&4>n?n:4,t(!0);var i=qu.transition;qu.transition={};try{t(!1),e()}finally{Qe=n,qu.transition=i}}function W0(){return kn().memoizedState}function Dy(t,e,n){var i=Zi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},X0(t))j0(e,n);else if(n=A0(t,e,n,i),n!==null){var r=sn();Jn(n,t,i,r),Y0(n,e,i)}}function Iy(t,e,n){var i=Zi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(X0(t))j0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ei(a,o)){var l=e.interleaved;l===null?(r.next=r,Md(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=A0(t,e,r,i),n!==null&&(r=sn(),Jn(n,t,i,r),Y0(n,e,i))}}function X0(t){var e=t.alternate;return t===ht||e!==null&&e===ht}function j0(t,e){Co=zl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Y0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ud(t,n)}}var kl={readContext:zn,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useInsertionEffect:Wt,useLayoutEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useMutableSource:Wt,useSyncExternalStore:Wt,useId:Wt,unstable_isNewReconciler:!1},Ny={readContext:zn,useCallback:function(t,e){return ri().memoizedState=[t,e===void 0?null:e],t},useContext:zn,useEffect:Kh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,pl(4194308,4,k0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return pl(4194308,4,t,e)},useInsertionEffect:function(t,e){return pl(4,2,t,e)},useMemo:function(t,e){var n=ri();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ri();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Dy.bind(null,ht,t),[i.memoizedState,t]},useRef:function(t){var e=ri();return t={current:t},e.memoizedState=t},useState:$h,useDebugValue:Dd,useDeferredValue:function(t){return ri().memoizedState=t},useTransition:function(){var t=$h(!1),e=t[0];return t=Ly.bind(null,t[1]),ri().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ht,r=ri();if(lt){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),Ut===null)throw Error(ce(349));Ur&30||L0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Kh(I0.bind(null,i,s,t),[t]),i.flags|=2048,Zo(9,D0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ri(),e=Ut.identifierPrefix;if(lt){var n=Si,i=yi;n=(i&~(1<<32-Zn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=$o++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Py++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Uy={readContext:zn,useCallback:H0,useContext:zn,useEffect:Ld,useImperativeHandle:B0,useInsertionEffect:O0,useLayoutEffect:z0,useMemo:G0,useReducer:$u,useRef:F0,useState:function(){return $u(Ko)},useDebugValue:Dd,useDeferredValue:function(t){var e=kn();return V0(e,wt.memoizedState,t)},useTransition:function(){var t=$u(Ko)[0],e=kn().memoizedState;return[t,e]},useMutableSource:b0,useSyncExternalStore:P0,useId:W0,unstable_isNewReconciler:!1},Fy={readContext:zn,useCallback:H0,useContext:zn,useEffect:Ld,useImperativeHandle:B0,useInsertionEffect:O0,useLayoutEffect:z0,useMemo:G0,useReducer:Ku,useRef:F0,useState:function(){return Ku(Ko)},useDebugValue:Dd,useDeferredValue:function(t){var e=kn();return wt===null?e.memoizedState=t:V0(e,wt.memoizedState,t)},useTransition:function(){var t=Ku(Ko)[0],e=kn().memoizedState;return[t,e]},useMutableSource:b0,useSyncExternalStore:P0,useId:W0,unstable_isNewReconciler:!1};function Wn(t,e){if(t&&t.defaultProps){e=pt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function _f(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:pt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var lu={isMounted:function(t){return(t=t._reactInternals)?Vr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=sn(),r=Zi(t),s=Mi(i,r);s.payload=e,n!=null&&(s.callback=n),e=$i(t,s,r),e!==null&&(Jn(e,t,r,i),dl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=sn(),r=Zi(t),s=Mi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=$i(t,s,r),e!==null&&(Jn(e,t,r,i),dl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=sn(),i=Zi(t),r=Mi(n,i);r.tag=2,e!=null&&(r.callback=e),e=$i(t,r,i),e!==null&&(Jn(e,t,i,n),dl(e,t,i))}};function Zh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Vo(n,i)||!Vo(r,s):!0}function q0(t,e,n){var i=!1,r=rr,s=e.contextType;return typeof s=="object"&&s!==null?s=zn(s):(r=pn(e)?Ir:Zt.current,i=e.contextTypes,s=(i=i!=null)?Fs(t,r):rr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=lu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Jh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&lu.enqueueReplaceState(e,e.state,null)}function xf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},wd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=zn(s):(s=pn(e)?Ir:Zt.current,r.context=Fs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(_f(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&lu.enqueueReplaceState(r,r.state,null),Fl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Bs(t,e){try{var n="",i=e;do n+=cx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Zu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function yf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Oy=typeof WeakMap=="function"?WeakMap:Map;function $0(t,e,n){n=Mi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Hl||(Hl=!0,Pf=i),yf(t,e)},n}function K0(t,e,n){n=Mi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){yf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){yf(t,e),typeof i!="function"&&(Ki===null?Ki=new Set([this]):Ki.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Qh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Oy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Zy.bind(null,t,e,n),e.then(t,t))}function ep(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function tp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Mi(-1,1),e.tag=2,$i(n,e,1))),n.lanes|=1),t)}var zy=bi.ReactCurrentOwner,dn=!1;function tn(t,e,n,i){e.child=t===null?T0(e,null,n,i):zs(e,t.child,n,i)}function np(t,e,n,i,r){n=n.render;var s=e.ref;return Ps(e,r),i=bd(t,e,n,i,s,r),n=Pd(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(lt&&n&&vd(e),e.flags|=1,tn(t,e,i,r),e.child)}function ip(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Bd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Z0(t,e,s,i,r)):(t=_l(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Vo,n(o,i)&&t.ref===e.ref)return Ri(t,e,r)}return e.flags|=1,t=Ji(s,i),t.ref=e.ref,t.return=e,e.child=t}function Z0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Vo(s,i)&&t.ref===e.ref)if(dn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(dn=!0);else return e.lanes=t.lanes,Ri(t,e,r)}return Sf(t,e,n,i,r)}function J0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(Ss,Sn),Sn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,rt(Ss,Sn),Sn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,rt(Ss,Sn),Sn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,rt(Ss,Sn),Sn|=i;return tn(t,e,r,n),e.child}function Q0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Sf(t,e,n,i,r){var s=pn(n)?Ir:Zt.current;return s=Fs(e,s),Ps(e,r),n=bd(t,e,n,i,s,r),i=Pd(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(lt&&i&&vd(e),e.flags|=1,tn(t,e,n,r),e.child)}function rp(t,e,n,i,r){if(pn(n)){var s=!0;Ll(e)}else s=!1;if(Ps(e,r),e.stateNode===null)ml(t,e),q0(e,n,i),xf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=zn(u):(u=pn(n)?Ir:Zt.current,u=Fs(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Jh(e,o,i,u),Oi=!1;var d=e.memoizedState;o.state=d,Fl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||hn.current||Oi?(typeof c=="function"&&(_f(e,n,c,i),l=e.memoizedState),(a=Oi||Zh(e,n,a,i,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,R0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Wn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=zn(l):(l=pn(n)?Ir:Zt.current,l=Fs(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Jh(e,o,i,l),Oi=!1,d=e.memoizedState,o.state=d,Fl(e,i,o,r);var v=e.memoizedState;a!==h||d!==v||hn.current||Oi?(typeof p=="function"&&(_f(e,n,p,i),v=e.memoizedState),(u=Oi||Zh(e,n,u,i,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Ef(t,e,n,i,s,r)}function Ef(t,e,n,i,r,s){Q0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Vh(e,n,!1),Ri(t,e,s);i=e.stateNode,zy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=zs(e,t.child,null,s),e.child=zs(e,null,a,s)):tn(t,e,a,s),e.memoizedState=i.state,r&&Vh(e,n,!0),e.child}function ev(t){var e=t.stateNode;e.pendingContext?Gh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Gh(t,e.context,!1),Td(t,e.containerInfo)}function sp(t,e,n,i,r){return Os(),xd(r),e.flags|=256,tn(t,e,n,i),e.child}var Mf={dehydrated:null,treeContext:null,retryLane:0};function wf(t){return{baseLanes:t,cachePool:null,transitions:null}}function tv(t,e,n){var i=e.pendingProps,r=ct.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),rt(ct,r&1),t===null)return gf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=fu(o,i,0,null),t=Cr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=wf(n),e.memoizedState=Mf,t):Id(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return ky(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ji(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ji(a,s):(s=Cr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?wf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Mf,i}return s=t.child,t=s.sibling,i=Ji(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Id(t,e){return e=fu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ba(t,e,n,i){return i!==null&&xd(i),zs(e,t.child,null,n),t=Id(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ky(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Zu(Error(ce(422))),ba(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=fu({mode:"visible",children:i.children},r,0,null),s=Cr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&zs(e,t.child,null,o),e.child.memoizedState=wf(o),e.memoizedState=Mf,s);if(!(e.mode&1))return ba(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ce(419)),i=Zu(s,i,void 0),ba(t,e,o,i)}if(a=(o&t.childLanes)!==0,dn||a){if(i=Ut,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ai(t,r),Jn(i,t,r,-1))}return kd(),i=Zu(Error(ce(421))),ba(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Jy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,En=qi(r.nextSibling),Mn=e,lt=!0,jn=null,t!==null&&(Pn[Ln++]=yi,Pn[Ln++]=Si,Pn[Ln++]=Nr,yi=t.id,Si=t.overflow,Nr=e),e=Id(e,i.children),e.flags|=4096,e)}function op(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),vf(t.return,e,n)}function Ju(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function nv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(tn(t,e,i.children,n),i=ct.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&op(t,n,e);else if(t.tag===19)op(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(rt(ct,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ol(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ju(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ol(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ju(e,!0,n,null,s);break;case"together":Ju(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ml(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ri(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Fr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=Ji(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ji(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function By(t,e,n){switch(e.tag){case 3:ev(e),Os();break;case 5:C0(e);break;case 1:pn(e.type)&&Ll(e);break;case 4:Td(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;rt(Nl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(rt(ct,ct.current&1),e.flags|=128,null):n&e.child.childLanes?tv(t,e,n):(rt(ct,ct.current&1),t=Ri(t,e,n),t!==null?t.sibling:null);rt(ct,ct.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return nv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),rt(ct,ct.current),i)break;return null;case 22:case 23:return e.lanes=0,J0(t,e,n)}return Ri(t,e,n)}var iv,Tf,rv,sv;iv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Tf=function(){};rv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,wr(li.current);var s=null;switch(n){case"input":r=jc(t,r),i=jc(t,i),s=[];break;case"select":r=pt({},r,{value:void 0}),i=pt({},i,{value:void 0}),s=[];break;case"textarea":r=$c(t,r),i=$c(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=bl)}Zc(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Fo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Fo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&st("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};sv=function(t,e,n,i){n!==i&&(e.flags|=4)};function co(t,e){if(!lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Hy(t,e,n){var i=e.pendingProps;switch(_d(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return pn(e.type)&&Pl(),Xt(e),null;case 3:return i=e.stateNode,ks(),at(hn),at(Zt),Rd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ra(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jn!==null&&(If(jn),jn=null))),Tf(t,e),Xt(e),null;case 5:Ad(e);var r=wr(qo.current);if(n=e.type,t!==null&&e.stateNode!=null)rv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return Xt(e),null}if(t=wr(li.current),Ra(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[oi]=e,i[jo]=s,t=(e.mode&1)!==0,n){case"dialog":st("cancel",i),st("close",i);break;case"iframe":case"object":case"embed":st("load",i);break;case"video":case"audio":for(r=0;r<So.length;r++)st(So[r],i);break;case"source":st("error",i);break;case"img":case"image":case"link":st("error",i),st("load",i);break;case"details":st("toggle",i);break;case"input":mh(i,s),st("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},st("invalid",i);break;case"textarea":vh(i,s),st("invalid",i)}Zc(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Aa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Aa(i.textContent,a,t),r=["children",""+a]):Fo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&st("scroll",i)}switch(n){case"input":_a(i),gh(i,s,!0);break;case"textarea":_a(i),_h(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=bl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ig(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[oi]=e,t[jo]=i,iv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Jc(n,i),n){case"dialog":st("cancel",t),st("close",t),r=i;break;case"iframe":case"object":case"embed":st("load",t),r=i;break;case"video":case"audio":for(r=0;r<So.length;r++)st(So[r],t);r=i;break;case"source":st("error",t),r=i;break;case"img":case"image":case"link":st("error",t),st("load",t),r=i;break;case"details":st("toggle",t),r=i;break;case"input":mh(t,i),r=jc(t,i),st("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=pt({},i,{value:void 0}),st("invalid",t);break;case"textarea":vh(t,i),r=$c(t,i),st("invalid",t);break;default:r=i}Zc(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Fg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ng(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Oo(t,l):typeof l=="number"&&Oo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Fo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&st("scroll",t):l!=null&&id(t,s,l,o))}switch(n){case"input":_a(t),gh(t,i,!1);break;case"textarea":_a(t),_h(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ir(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?As(t,!!i.multiple,s,!1):i.defaultValue!=null&&As(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=bl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xt(e),null;case 6:if(t&&e.stateNode!=null)sv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=wr(qo.current),wr(li.current),Ra(e)){if(i=e.stateNode,n=e.memoizedProps,i[oi]=e,(s=i.nodeValue!==n)&&(t=Mn,t!==null))switch(t.tag){case 3:Aa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Aa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[oi]=e,e.stateNode=i}return Xt(e),null;case 13:if(at(ct),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(lt&&En!==null&&e.mode&1&&!(e.flags&128))M0(),Os(),e.flags|=98560,s=!1;else if(s=Ra(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[oi]=e}else Os(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xt(e),s=!1}else jn!==null&&(If(jn),jn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ct.current&1?At===0&&(At=3):kd())),e.updateQueue!==null&&(e.flags|=4),Xt(e),null);case 4:return ks(),Tf(t,e),t===null&&Wo(e.stateNode.containerInfo),Xt(e),null;case 10:return Ed(e.type._context),Xt(e),null;case 17:return pn(e.type)&&Pl(),Xt(e),null;case 19:if(at(ct),s=e.memoizedState,s===null)return Xt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)co(s,!1);else{if(At!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ol(t),o!==null){for(e.flags|=128,co(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return rt(ct,ct.current&1|2),e.child}t=t.sibling}s.tail!==null&&xt()>Hs&&(e.flags|=128,i=!0,co(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ol(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),co(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!lt)return Xt(e),null}else 2*xt()-s.renderingStartTime>Hs&&n!==1073741824&&(e.flags|=128,i=!0,co(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xt(),e.sibling=null,n=ct.current,rt(ct,i?n&1|2:n&1),e):(Xt(e),null);case 22:case 23:return zd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Sn&1073741824&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function Gy(t,e){switch(_d(e),e.tag){case 1:return pn(e.type)&&Pl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ks(),at(hn),at(Zt),Rd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ad(e),null;case 13:if(at(ct),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));Os()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return at(ct),null;case 4:return ks(),null;case 10:return Ed(e.type._context),null;case 22:case 23:return zd(),null;case 24:return null;default:return null}}var Pa=!1,$t=!1,Vy=typeof WeakSet=="function"?WeakSet:Set,we=null;function ys(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){vt(t,e,i)}else n.current=null}function Af(t,e,n){try{n()}catch(i){vt(t,e,i)}}var ap=!1;function Wy(t,e){if(uf=Al,t=c0(),gd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(cf={focusedElem:t,selectionRange:n},Al=!1,we=e;we!==null;)if(e=we,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,we=t;else for(;we!==null;){e=we;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,_=v.memoizedState,f=e.stateNode,g=f.getSnapshotBeforeUpdate(e.elementType===e.type?x:Wn(e.type,x),_);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(y){vt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,we=t;break}we=e.return}return v=ap,ap=!1,v}function bo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Af(e,n,s)}r=r.next}while(r!==i)}}function uu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Rf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ov(t){var e=t.alternate;e!==null&&(t.alternate=null,ov(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[oi],delete e[jo],delete e[hf],delete e[Ay],delete e[Ry])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function av(t){return t.tag===5||t.tag===3||t.tag===4}function lp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||av(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=bl));else if(i!==4&&(t=t.child,t!==null))for(Cf(t,e,n),t=t.sibling;t!==null;)Cf(t,e,n),t=t.sibling}function bf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(bf(t,e,n),t=t.sibling;t!==null;)bf(t,e,n),t=t.sibling}var zt=null,Xn=!1;function Pi(t,e,n){for(n=n.child;n!==null;)lv(t,e,n),n=n.sibling}function lv(t,e,n){if(ai&&typeof ai.onCommitFiberUnmount=="function")try{ai.onCommitFiberUnmount(tu,n)}catch{}switch(n.tag){case 5:$t||ys(n,e);case 6:var i=zt,r=Xn;zt=null,Pi(t,e,n),zt=i,Xn=r,zt!==null&&(Xn?(t=zt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):zt.removeChild(n.stateNode));break;case 18:zt!==null&&(Xn?(t=zt,n=n.stateNode,t.nodeType===8?Xu(t.parentNode,n):t.nodeType===1&&Xu(t,n),Ho(t)):Xu(zt,n.stateNode));break;case 4:i=zt,r=Xn,zt=n.stateNode.containerInfo,Xn=!0,Pi(t,e,n),zt=i,Xn=r;break;case 0:case 11:case 14:case 15:if(!$t&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Af(n,e,o),r=r.next}while(r!==i)}Pi(t,e,n);break;case 1:if(!$t&&(ys(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){vt(n,e,a)}Pi(t,e,n);break;case 21:Pi(t,e,n);break;case 22:n.mode&1?($t=(i=$t)||n.memoizedState!==null,Pi(t,e,n),$t=i):Pi(t,e,n);break;default:Pi(t,e,n)}}function up(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Vy),e.forEach(function(i){var r=Qy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Bn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:zt=a.stateNode,Xn=!1;break e;case 3:zt=a.stateNode.containerInfo,Xn=!0;break e;case 4:zt=a.stateNode.containerInfo,Xn=!0;break e}a=a.return}if(zt===null)throw Error(ce(160));lv(s,o,r),zt=null,Xn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){vt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)uv(e,t),e=e.sibling}function uv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bn(e,t),ii(t),i&4){try{bo(3,t,t.return),uu(3,t)}catch(x){vt(t,t.return,x)}try{bo(5,t,t.return)}catch(x){vt(t,t.return,x)}}break;case 1:Bn(e,t),ii(t),i&512&&n!==null&&ys(n,n.return);break;case 5:if(Bn(e,t),ii(t),i&512&&n!==null&&ys(n,n.return),t.flags&32){var r=t.stateNode;try{Oo(r,"")}catch(x){vt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Lg(r,s),Jc(a,o);var u=Jc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Fg(r,h):c==="dangerouslySetInnerHTML"?Ng(r,h):c==="children"?Oo(r,h):id(r,c,h,u)}switch(a){case"input":Yc(r,s);break;case"textarea":Dg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?As(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?As(r,!!s.multiple,s.defaultValue,!0):As(r,!!s.multiple,s.multiple?[]:"",!1))}r[jo]=s}catch(x){vt(t,t.return,x)}}break;case 6:if(Bn(e,t),ii(t),i&4){if(t.stateNode===null)throw Error(ce(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){vt(t,t.return,x)}}break;case 3:if(Bn(e,t),ii(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ho(e.containerInfo)}catch(x){vt(t,t.return,x)}break;case 4:Bn(e,t),ii(t);break;case 13:Bn(e,t),ii(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Fd=xt())),i&4&&up(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?($t=(u=$t)||c,Bn(e,t),$t=u):Bn(e,t),ii(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(we=t,c=t.child;c!==null;){for(h=we=c;we!==null;){switch(d=we,p=d.child,d.tag){case 0:case 11:case 14:case 15:bo(4,d,d.return);break;case 1:ys(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){vt(i,n,x)}}break;case 5:ys(d,d.return);break;case 22:if(d.memoizedState!==null){fp(h);continue}}p!==null?(p.return=d,we=p):fp(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ug("display",o))}catch(x){vt(t,t.return,x)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(x){vt(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Bn(e,t),ii(t),i&4&&up(t);break;case 21:break;default:Bn(e,t),ii(t)}}function ii(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(av(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Oo(r,""),i.flags&=-33);var s=lp(t);bf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=lp(t);Cf(t,a,o);break;default:throw Error(ce(161))}}catch(l){vt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Xy(t,e,n){we=t,cv(t)}function cv(t,e,n){for(var i=(t.mode&1)!==0;we!==null;){var r=we,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Pa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||$t;a=Pa;var u=$t;if(Pa=o,($t=l)&&!u)for(we=r;we!==null;)o=we,l=o.child,o.tag===22&&o.memoizedState!==null?dp(r):l!==null?(l.return=o,we=l):dp(r);for(;s!==null;)we=s,cv(s),s=s.sibling;we=r,Pa=a,$t=u}cp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,we=s):cp(t)}}function cp(t){for(;we!==null;){var e=we;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$t||uu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!$t)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Wn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&qh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}qh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Ho(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}$t||e.flags&512&&Rf(e)}catch(d){vt(e,e.return,d)}}if(e===t){we=null;break}if(n=e.sibling,n!==null){n.return=e.return,we=n;break}we=e.return}}function fp(t){for(;we!==null;){var e=we;if(e===t){we=null;break}var n=e.sibling;if(n!==null){n.return=e.return,we=n;break}we=e.return}}function dp(t){for(;we!==null;){var e=we;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{uu(4,e)}catch(l){vt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){vt(e,r,l)}}var s=e.return;try{Rf(e)}catch(l){vt(e,s,l)}break;case 5:var o=e.return;try{Rf(e)}catch(l){vt(e,o,l)}}}catch(l){vt(e,e.return,l)}if(e===t){we=null;break}var a=e.sibling;if(a!==null){a.return=e.return,we=a;break}we=e.return}}var jy=Math.ceil,Bl=bi.ReactCurrentDispatcher,Nd=bi.ReactCurrentOwner,On=bi.ReactCurrentBatchConfig,Ke=0,Ut=null,Mt=null,Bt=0,Sn=0,Ss=ar(0),At=0,Jo=null,Fr=0,cu=0,Ud=0,Po=null,un=null,Fd=0,Hs=1/0,vi=null,Hl=!1,Pf=null,Ki=null,La=!1,Hi=null,Gl=0,Lo=0,Lf=null,gl=-1,vl=0;function sn(){return Ke&6?xt():gl!==-1?gl:gl=xt()}function Zi(t){return t.mode&1?Ke&2&&Bt!==0?Bt&-Bt:by.transition!==null?(vl===0&&(vl=qg()),vl):(t=Qe,t!==0||(t=window.event,t=t===void 0?16:t0(t.type)),t):1}function Jn(t,e,n,i){if(50<Lo)throw Lo=0,Lf=null,Error(ce(185));aa(t,n,i),(!(Ke&2)||t!==Ut)&&(t===Ut&&(!(Ke&2)&&(cu|=n),At===4&&ki(t,Bt)),mn(t,i),n===1&&Ke===0&&!(e.mode&1)&&(Hs=xt()+500,ou&&lr()))}function mn(t,e){var n=t.callbackNode;bx(t,e);var i=Tl(t,t===Ut?Bt:0);if(i===0)n!==null&&Sh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Sh(n),e===1)t.tag===0?Cy(hp.bind(null,t)):y0(hp.bind(null,t)),wy(function(){!(Ke&6)&&lr()}),n=null;else{switch($g(i)){case 1:n=ld;break;case 4:n=jg;break;case 16:n=wl;break;case 536870912:n=Yg;break;default:n=wl}n=_v(n,fv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function fv(t,e){if(gl=-1,vl=0,Ke&6)throw Error(ce(327));var n=t.callbackNode;if(Ls()&&t.callbackNode!==n)return null;var i=Tl(t,t===Ut?Bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Vl(t,i);else{e=i;var r=Ke;Ke|=2;var s=hv();(Ut!==t||Bt!==e)&&(vi=null,Hs=xt()+500,Rr(t,e));do try{$y();break}catch(a){dv(t,a)}while(!0);Sd(),Bl.current=s,Ke=r,Mt!==null?e=0:(Ut=null,Bt=0,e=At)}if(e!==0){if(e===2&&(r=rf(t),r!==0&&(i=r,e=Df(t,r))),e===1)throw n=Jo,Rr(t,0),ki(t,i),mn(t,xt()),n;if(e===6)ki(t,i);else{if(r=t.current.alternate,!(i&30)&&!Yy(r)&&(e=Vl(t,i),e===2&&(s=rf(t),s!==0&&(i=s,e=Df(t,s))),e===1))throw n=Jo,Rr(t,0),ki(t,i),mn(t,xt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:gr(t,un,vi);break;case 3:if(ki(t,i),(i&130023424)===i&&(e=Fd+500-xt(),10<e)){if(Tl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){sn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=df(gr.bind(null,t,un,vi),e);break}gr(t,un,vi);break;case 4:if(ki(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Zn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=xt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*jy(i/1960))-i,10<i){t.timeoutHandle=df(gr.bind(null,t,un,vi),i);break}gr(t,un,vi);break;case 5:gr(t,un,vi);break;default:throw Error(ce(329))}}}return mn(t,xt()),t.callbackNode===n?fv.bind(null,t):null}function Df(t,e){var n=Po;return t.current.memoizedState.isDehydrated&&(Rr(t,e).flags|=256),t=Vl(t,e),t!==2&&(e=un,un=n,e!==null&&If(e)),t}function If(t){un===null?un=t:un.push.apply(un,t)}function Yy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ei(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ki(t,e){for(e&=~Ud,e&=~cu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Zn(e),i=1<<n;t[n]=-1,e&=~i}}function hp(t){if(Ke&6)throw Error(ce(327));Ls();var e=Tl(t,0);if(!(e&1))return mn(t,xt()),null;var n=Vl(t,e);if(t.tag!==0&&n===2){var i=rf(t);i!==0&&(e=i,n=Df(t,i))}if(n===1)throw n=Jo,Rr(t,0),ki(t,e),mn(t,xt()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,gr(t,un,vi),mn(t,xt()),null}function Od(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(Hs=xt()+500,ou&&lr())}}function Or(t){Hi!==null&&Hi.tag===0&&!(Ke&6)&&Ls();var e=Ke;Ke|=1;var n=On.transition,i=Qe;try{if(On.transition=null,Qe=1,t)return t()}finally{Qe=i,On.transition=n,Ke=e,!(Ke&6)&&lr()}}function zd(){Sn=Ss.current,at(Ss)}function Rr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,My(n)),Mt!==null)for(n=Mt.return;n!==null;){var i=n;switch(_d(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Pl();break;case 3:ks(),at(hn),at(Zt),Rd();break;case 5:Ad(i);break;case 4:ks();break;case 13:at(ct);break;case 19:at(ct);break;case 10:Ed(i.type._context);break;case 22:case 23:zd()}n=n.return}if(Ut=t,Mt=t=Ji(t.current,null),Bt=Sn=e,At=0,Jo=null,Ud=cu=Fr=0,un=Po=null,Mr!==null){for(e=0;e<Mr.length;e++)if(n=Mr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Mr=null}return t}function dv(t,e){do{var n=Mt;try{if(Sd(),hl.current=kl,zl){for(var i=ht.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}zl=!1}if(Ur=0,Dt=wt=ht=null,Co=!1,$o=0,Nd.current=null,n===null||n.return===null){At=1,Jo=e,Mt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=ep(o);if(p!==null){p.flags&=-257,tp(p,o,a,s,e),p.mode&1&&Qh(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){Qh(s,u,e),kd();break e}l=Error(ce(426))}}else if(lt&&a.mode&1){var _=ep(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),tp(_,o,a,s,e),xd(Bs(l,a));break e}}s=l=Bs(l,a),At!==4&&(At=2),Po===null?Po=[s]:Po.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=$0(s,l,e);Yh(s,f);break e;case 1:a=l;var g=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ki===null||!Ki.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=K0(s,a,e);Yh(s,y);break e}}s=s.return}while(s!==null)}mv(n)}catch(C){e=C,Mt===n&&n!==null&&(Mt=n=n.return);continue}break}while(!0)}function hv(){var t=Bl.current;return Bl.current=kl,t===null?kl:t}function kd(){(At===0||At===3||At===2)&&(At=4),Ut===null||!(Fr&268435455)&&!(cu&268435455)||ki(Ut,Bt)}function Vl(t,e){var n=Ke;Ke|=2;var i=hv();(Ut!==t||Bt!==e)&&(vi=null,Rr(t,e));do try{qy();break}catch(r){dv(t,r)}while(!0);if(Sd(),Ke=n,Bl.current=i,Mt!==null)throw Error(ce(261));return Ut=null,Bt=0,At}function qy(){for(;Mt!==null;)pv(Mt)}function $y(){for(;Mt!==null&&!yx();)pv(Mt)}function pv(t){var e=vv(t.alternate,t,Sn);t.memoizedProps=t.pendingProps,e===null?mv(t):Mt=e,Nd.current=null}function mv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Gy(n,e),n!==null){n.flags&=32767,Mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{At=6,Mt=null;return}}else if(n=Hy(n,e,Sn),n!==null){Mt=n;return}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=t}while(e!==null);At===0&&(At=5)}function gr(t,e,n){var i=Qe,r=On.transition;try{On.transition=null,Qe=1,Ky(t,e,n,i)}finally{On.transition=r,Qe=i}return null}function Ky(t,e,n,i){do Ls();while(Hi!==null);if(Ke&6)throw Error(ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Px(t,s),t===Ut&&(Mt=Ut=null,Bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||La||(La=!0,_v(wl,function(){return Ls(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=On.transition,On.transition=null;var o=Qe;Qe=1;var a=Ke;Ke|=4,Nd.current=null,Wy(t,n),uv(n,t),gy(cf),Al=!!uf,cf=uf=null,t.current=n,Xy(n),Sx(),Ke=a,Qe=o,On.transition=s}else t.current=n;if(La&&(La=!1,Hi=t,Gl=r),s=t.pendingLanes,s===0&&(Ki=null),wx(n.stateNode),mn(t,xt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Hl)throw Hl=!1,t=Pf,Pf=null,t;return Gl&1&&t.tag!==0&&Ls(),s=t.pendingLanes,s&1?t===Lf?Lo++:(Lo=0,Lf=t):Lo=0,lr(),null}function Ls(){if(Hi!==null){var t=$g(Gl),e=On.transition,n=Qe;try{if(On.transition=null,Qe=16>t?16:t,Hi===null)var i=!1;else{if(t=Hi,Hi=null,Gl=0,Ke&6)throw Error(ce(331));var r=Ke;for(Ke|=4,we=t.current;we!==null;){var s=we,o=s.child;if(we.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(we=u;we!==null;){var c=we;switch(c.tag){case 0:case 11:case 15:bo(8,c,s)}var h=c.child;if(h!==null)h.return=c,we=h;else for(;we!==null;){c=we;var d=c.sibling,p=c.return;if(ov(c),c===u){we=null;break}if(d!==null){d.return=p,we=d;break}we=p}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var _=x.sibling;x.sibling=null,x=_}while(x!==null)}}we=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,we=o;else e:for(;we!==null;){if(s=we,s.flags&2048)switch(s.tag){case 0:case 11:case 15:bo(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,we=f;break e}we=s.return}}var g=t.current;for(we=g;we!==null;){o=we;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,we=m;else e:for(o=g;we!==null;){if(a=we,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:uu(9,a)}}catch(C){vt(a,a.return,C)}if(a===o){we=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,we=y;break e}we=a.return}}if(Ke=r,lr(),ai&&typeof ai.onPostCommitFiberRoot=="function")try{ai.onPostCommitFiberRoot(tu,t)}catch{}i=!0}return i}finally{Qe=n,On.transition=e}}return!1}function pp(t,e,n){e=Bs(n,e),e=$0(t,e,1),t=$i(t,e,1),e=sn(),t!==null&&(aa(t,1,e),mn(t,e))}function vt(t,e,n){if(t.tag===3)pp(t,t,n);else for(;e!==null;){if(e.tag===3){pp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ki===null||!Ki.has(i))){t=Bs(n,t),t=K0(e,t,1),e=$i(e,t,1),t=sn(),e!==null&&(aa(e,1,t),mn(e,t));break}}e=e.return}}function Zy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=sn(),t.pingedLanes|=t.suspendedLanes&n,Ut===t&&(Bt&n)===n&&(At===4||At===3&&(Bt&130023424)===Bt&&500>xt()-Fd?Rr(t,0):Ud|=n),mn(t,e)}function gv(t,e){e===0&&(t.mode&1?(e=Sa,Sa<<=1,!(Sa&130023424)&&(Sa=4194304)):e=1);var n=sn();t=Ai(t,e),t!==null&&(aa(t,e,n),mn(t,n))}function Jy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),gv(t,n)}function Qy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),gv(t,n)}var vv;vv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||hn.current)dn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return dn=!1,By(t,e,n);dn=!!(t.flags&131072)}else dn=!1,lt&&e.flags&1048576&&S0(e,Il,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ml(t,e),t=e.pendingProps;var r=Fs(e,Zt.current);Ps(e,n),r=bd(null,e,i,t,r,n);var s=Pd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pn(i)?(s=!0,Ll(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,wd(e),r.updater=lu,e.stateNode=r,r._reactInternals=e,xf(e,i,t,n),e=Ef(null,e,i,!0,s,n)):(e.tag=0,lt&&s&&vd(e),tn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ml(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=tS(i),t=Wn(i,t),r){case 0:e=Sf(null,e,i,t,n);break e;case 1:e=rp(null,e,i,t,n);break e;case 11:e=np(null,e,i,t,n);break e;case 14:e=ip(null,e,i,Wn(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),Sf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),rp(t,e,i,r,n);case 3:e:{if(ev(e),t===null)throw Error(ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,R0(t,e),Fl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Bs(Error(ce(423)),e),e=sp(t,e,i,n,r);break e}else if(i!==r){r=Bs(Error(ce(424)),e),e=sp(t,e,i,n,r);break e}else for(En=qi(e.stateNode.containerInfo.firstChild),Mn=e,lt=!0,jn=null,n=T0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Os(),i===r){e=Ri(t,e,n);break e}tn(t,e,i,n)}e=e.child}return e;case 5:return C0(e),t===null&&gf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,ff(i,r)?o=null:s!==null&&ff(i,s)&&(e.flags|=32),Q0(t,e),tn(t,e,o,n),e.child;case 6:return t===null&&gf(e),null;case 13:return tv(t,e,n);case 4:return Td(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=zs(e,null,i,n):tn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),np(t,e,i,r,n);case 7:return tn(t,e,e.pendingProps,n),e.child;case 8:return tn(t,e,e.pendingProps.children,n),e.child;case 12:return tn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,rt(Nl,i._currentValue),i._currentValue=o,s!==null)if(ei(s.value,o)){if(s.children===r.children&&!hn.current){e=Ri(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Mi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),vf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ce(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),vf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}tn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ps(e,n),r=zn(r),i=i(r),e.flags|=1,tn(t,e,i,n),e.child;case 14:return i=e.type,r=Wn(i,e.pendingProps),r=Wn(i.type,r),ip(t,e,i,r,n);case 15:return Z0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),ml(t,e),e.tag=1,pn(i)?(t=!0,Ll(e)):t=!1,Ps(e,n),q0(e,i,r),xf(e,i,r,n),Ef(null,e,i,!0,t,n);case 19:return nv(t,e,n);case 22:return J0(t,e,n)}throw Error(ce(156,e.tag))};function _v(t,e){return Xg(t,e)}function eS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Un(t,e,n,i){return new eS(t,e,n,i)}function Bd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function tS(t){if(typeof t=="function")return Bd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sd)return 11;if(t===od)return 14}return 2}function Ji(t,e){var n=t.alternate;return n===null?(n=Un(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function _l(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Bd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case fs:return Cr(n.children,r,s,e);case rd:o=8,r|=8;break;case Gc:return t=Un(12,n,e,r|2),t.elementType=Gc,t.lanes=s,t;case Vc:return t=Un(13,n,e,r),t.elementType=Vc,t.lanes=s,t;case Wc:return t=Un(19,n,e,r),t.elementType=Wc,t.lanes=s,t;case Cg:return fu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ag:o=10;break e;case Rg:o=9;break e;case sd:o=11;break e;case od:o=14;break e;case Fi:o=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=Un(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Cr(t,e,n,i){return t=Un(7,t,i,e),t.lanes=n,t}function fu(t,e,n,i){return t=Un(22,t,i,e),t.elementType=Cg,t.lanes=n,t.stateNode={isHidden:!1},t}function Qu(t,e,n){return t=Un(6,t,null,e),t.lanes=n,t}function ec(t,e,n){return e=Un(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function nS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nu(0),this.expirationTimes=Nu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Hd(t,e,n,i,r,s,o,a,l){return t=new nS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Un(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wd(s),t}function iS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function xv(t){if(!t)return rr;t=t._reactInternals;e:{if(Vr(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(pn(n))return x0(t,n,e)}return e}function yv(t,e,n,i,r,s,o,a,l){return t=Hd(n,i,!0,t,r,s,o,a,l),t.context=xv(null),n=t.current,i=sn(),r=Zi(n),s=Mi(i,r),s.callback=e??null,$i(n,s,r),t.current.lanes=r,aa(t,r,i),mn(t,i),t}function du(t,e,n,i){var r=e.current,s=sn(),o=Zi(r);return n=xv(n),e.context===null?e.context=n:e.pendingContext=n,e=Mi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=$i(r,e,o),t!==null&&(Jn(t,r,o,s),dl(t,r,o)),o}function Wl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function mp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gd(t,e){mp(t,e),(t=t.alternate)&&mp(t,e)}function rS(){return null}var Sv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vd(t){this._internalRoot=t}hu.prototype.render=Vd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));du(t,e,null,null)};hu.prototype.unmount=Vd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Or(function(){du(null,t,null,null)}),e[Ti]=null}};function hu(t){this._internalRoot=t}hu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Jg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<zi.length&&e!==0&&e<zi[n].priority;n++);zi.splice(n,0,t),n===0&&e0(t)}};function Wd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function pu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function gp(){}function sS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Wl(o);s.call(u)}}var o=yv(e,i,t,0,null,!1,!1,"",gp);return t._reactRootContainer=o,t[Ti]=o.current,Wo(t.nodeType===8?t.parentNode:t),Or(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Wl(l);a.call(u)}}var l=Hd(t,0,!1,null,null,!1,!1,"",gp);return t._reactRootContainer=l,t[Ti]=l.current,Wo(t.nodeType===8?t.parentNode:t),Or(function(){du(e,l,n,i)}),l}function mu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Wl(o);a.call(l)}}du(e,o,t,r)}else o=sS(n,e,t,r,i);return Wl(o)}Kg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=yo(e.pendingLanes);n!==0&&(ud(e,n|1),mn(e,xt()),!(Ke&6)&&(Hs=xt()+500,lr()))}break;case 13:Or(function(){var i=Ai(t,1);if(i!==null){var r=sn();Jn(i,t,1,r)}}),Gd(t,1)}};cd=function(t){if(t.tag===13){var e=Ai(t,134217728);if(e!==null){var n=sn();Jn(e,t,134217728,n)}Gd(t,134217728)}};Zg=function(t){if(t.tag===13){var e=Zi(t),n=Ai(t,e);if(n!==null){var i=sn();Jn(n,t,e,i)}Gd(t,e)}};Jg=function(){return Qe};Qg=function(t,e){var n=Qe;try{return Qe=t,e()}finally{Qe=n}};ef=function(t,e,n){switch(e){case"input":if(Yc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=su(i);if(!r)throw Error(ce(90));Pg(i),Yc(i,r)}}}break;case"textarea":Dg(t,n);break;case"select":e=n.value,e!=null&&As(t,!!n.multiple,e,!1)}};kg=Od;Bg=Or;var oS={usingClientEntryPoint:!1,Events:[ua,ms,su,Og,zg,Od]},fo={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},aS={bundleType:fo.bundleType,version:fo.version,rendererPackageName:fo.rendererPackageName,rendererConfig:fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Vg(t),t===null?null:t.stateNode},findFiberByHostInstance:fo.findFiberByHostInstance||rS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Da=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Da.isDisabled&&Da.supportsFiber)try{tu=Da.inject(aS),ai=Da}catch{}}An.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oS;An.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wd(e))throw Error(ce(200));return iS(t,e,null,n)};An.createRoot=function(t,e){if(!Wd(t))throw Error(ce(299));var n=!1,i="",r=Sv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Hd(t,1,!1,null,null,n,!1,i,r),t[Ti]=e.current,Wo(t.nodeType===8?t.parentNode:t),new Vd(e)};An.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=Vg(e),t=t===null?null:t.stateNode,t};An.flushSync=function(t){return Or(t)};An.hydrate=function(t,e,n){if(!pu(e))throw Error(ce(200));return mu(null,t,e,!0,n)};An.hydrateRoot=function(t,e,n){if(!Wd(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Sv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=yv(e,null,t,1,n??null,r,!1,s,o),t[Ti]=e.current,Wo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new hu(e)};An.render=function(t,e,n){if(!pu(e))throw Error(ce(200));return mu(null,t,e,!1,n)};An.unmountComponentAtNode=function(t){if(!pu(t))throw Error(ce(40));return t._reactRootContainer?(Or(function(){mu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ti]=null})}),!0):!1};An.unstable_batchedUpdates=Od;An.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!pu(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return mu(t,e,n,!1,i)};An.version="18.3.1-next-f1338f8080-20240426";function Ev(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ev)}catch(t){console.error(t)}}Ev(),Eg.exports=An;var lS=Eg.exports,Mv,vp=lS;Mv=vp.createRoot,vp.hydrateRoot;async function Zs(t,e){const n=await fetch(t,{credentials:"include",...e});let i=null;try{i=await n.json()}catch{}return{ok:n.ok,status:n.status,data:i}}function uS(){return Zs("/api/me")}function cS(){return Zs("/api/me?view=engineer&list=1")}function fS(t){return Zs("/api/me?view=engineer&projectId="+encodeURIComponent(t))}function dS(t,e){return Zs("/api/me",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"engineer_save",projectId:t||void 0,project:e})})}function hS(t){return Zs("/api/me",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"engineer_delete",projectId:t})})}function pS(){return Zs("/api/create-checkout-session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({kind:"engineer",plan:"annual",return_page:"engineers/index.html"})})}function mS({status:t,t:e}){const[n,i]=Ne.useState(!1),[r,s]=Ne.useState(null);async function o(){i(!0),s(null);const l=await pS();if(l.status===401){window.location.href="/lamsa-auth.html";return}if(!l.ok||!l.data||!l.data.url){s(l.data&&l.data.error||e("Something went wrong, please try again")),i(!1);return}window.location.href=l.data.url}const a=t==="canceled"||t==="past_due"||t==="unpaid";return Se.jsxs("div",{style:{maxWidth:480,margin:"80px auto",padding:24,textAlign:"center",fontFamily:"sans-serif"},children:[Se.jsx("h1",{style:{fontSize:24,fontWeight:900,marginBottom:8},children:e("Lamsa Engineers")}),Se.jsx("p",{style:{color:"#6b7280",marginBottom:24},children:e(a?"Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Design complete floor plans, preview them in 3D, and export real architectural deliverables.")}),Se.jsxs("ul",{style:{textAlign:"start",listStyle:"none",padding:0,marginBottom:28,color:"#374151",fontSize:14},children:[Se.jsxs("li",{children:["— ",e("Rectangular rooms, doors & windows, single-floor plans")]}),Se.jsxs("li",{children:["— ",e("Live 3D preview of your design")]}),Se.jsxs("li",{children:["— ",e("Printable floor plan export")]}),Se.jsxs("li",{children:["— ",e("Use Lamsa's existing furniture-styling tools per room")]})]}),Se.jsxs("div",{style:{fontSize:28,fontWeight:900,marginBottom:4},children:["$250",Se.jsxs("span",{style:{fontSize:14,fontWeight:600,color:"#6b7280"},children:[" ",e("/ year")]})]}),Se.jsx("div",{style:{fontSize:13,color:"#6b7280",marginBottom:20},children:e("14-day free trial, cancel anytime")}),Se.jsx("button",{type:"button",onClick:o,disabled:n,style:{width:"100%",background:"#c9a96e",color:"#1b1e22",border:"none",padding:16,borderRadius:14,fontSize:16,fontWeight:900,cursor:"pointer",opacity:n?.6:1},children:e(n?"Starting…":"Start free trial")}),r&&Se.jsx("div",{style:{color:"#e05555",fontSize:13,marginTop:10},children:r})]})}function gS({projects:t,onOpen:e,onCreate:n,onDelete:i,t:r}){return Se.jsxs("div",{style:{maxWidth:720,margin:"40px auto",padding:24,fontFamily:"sans-serif"},children:[Se.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20},children:[Se.jsx("h1",{style:{fontSize:22,fontWeight:900},children:r("Your Projects")}),Se.jsxs("button",{type:"button",onClick:n,style:{background:"#c9a96e",color:"#1b1e22",border:"none",padding:"10px 18px",borderRadius:10,fontWeight:800,cursor:"pointer"},children:["+ ",r("New Project")]})]}),t.length===0&&Se.jsx("div",{style:{color:"#6b7280",textAlign:"center",padding:40},children:r("No projects yet — create your first one.")}),Se.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:14},children:t.map(s=>Se.jsxs("div",{style:{border:"1px solid #e5e7eb",borderRadius:12,padding:16,cursor:"pointer"},onClick:()=>e(s.id),children:[Se.jsx("div",{style:{fontWeight:800,marginBottom:6},children:s.name}),Se.jsx("div",{style:{fontSize:12,color:"#9ca3af",marginBottom:10},children:s.updatedAt?new Date(s.updatedAt).toLocaleDateString():""}),Se.jsx("button",{type:"button",onClick:o=>{o.stopPropagation(),i(s.id)},style:{fontSize:12,color:"#e05555",background:"none",border:"none",cursor:"pointer",padding:0},children:r("Delete")})]},s.id))})]})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xd="160",vS=0,_p=1,_S=2,wv=1,Tv=2,gi=3,sr=0,gn=1,cn=2,Qi=0,Ds=1,xp=2,yp=3,Sp=4,xS=5,yr=100,yS=101,SS=102,Ep=103,Mp=104,ES=200,MS=201,wS=202,TS=203,Nf=204,Uf=205,AS=206,RS=207,CS=208,bS=209,PS=210,LS=211,DS=212,IS=213,NS=214,US=0,FS=1,OS=2,Xl=3,zS=4,kS=5,BS=6,HS=7,Av=0,GS=1,VS=2,er=0,WS=1,XS=2,jS=3,YS=4,qS=5,$S=6,Rv=300,Gs=301,Vs=302,Ff=303,Of=304,gu=306,zr=1e3,qn=1001,zf=1002,nn=1003,wp=1004,tc=1005,Dn=1006,KS=1007,Qo=1008,tr=1009,ZS=1010,JS=1011,jd=1012,Cv=1013,Gi=1014,Vi=1015,ea=1016,bv=1017,Pv=1018,br=1020,QS=1021,$n=1023,eE=1024,tE=1025,Pr=1026,Ws=1027,nE=1028,Lv=1029,iE=1030,Dv=1031,Iv=1033,nc=33776,ic=33777,rc=33778,sc=33779,Tp=35840,Ap=35841,Rp=35842,Cp=35843,Nv=36196,bp=37492,Pp=37496,Lp=37808,Dp=37809,Ip=37810,Np=37811,Up=37812,Fp=37813,Op=37814,zp=37815,kp=37816,Bp=37817,Hp=37818,Gp=37819,Vp=37820,Wp=37821,oc=36492,Xp=36494,jp=36495,rE=36283,Yp=36284,qp=36285,$p=36286,Uv=3e3,Lr=3001,sE=3200,oE=3201,Fv=0,aE=1,Nn="",kt="srgb",Ci="srgb-linear",Yd="display-p3",vu="display-p3-linear",jl="linear",ot="srgb",Yl="rec709",ql="p3",jr=7680,Kp=519,lE=512,uE=513,cE=514,Ov=515,fE=516,dE=517,hE=518,pE=519,Zp=35044,Jp="300 es",kf=1035,Ei=2e3,$l=2001;class Js{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ac=Math.PI/180,Bf=180/Math.PI;function Qs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[t&255]+jt[t>>8&255]+jt[t>>16&255]+jt[t>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[n&63|128]+jt[n>>8&255]+"-"+jt[n>>16&255]+jt[n>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function Kt(t,e,n){return Math.max(e,Math.min(n,t))}function mE(t,e){return(t%e+e)%e}function lc(t,e,n){return(1-n)*t+n*e}function Qp(t){return(t&t-1)===0&&t!==0}function Hf(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ho(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ln(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ye{constructor(e=0,n=0){ye.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,n,i,r,s,o,a,l,u){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],h=i[7],d=i[2],p=i[5],v=i[8],x=r[0],_=r[3],f=r[6],g=r[1],m=r[4],y=r[7],C=r[2],E=r[5],T=r[8];return s[0]=o*x+a*g+l*C,s[3]=o*_+a*m+l*E,s[6]=o*f+a*y+l*T,s[1]=u*x+c*g+h*C,s[4]=u*_+c*m+h*E,s[7]=u*f+c*y+h*T,s[2]=d*x+p*g+v*C,s[5]=d*_+p*m+v*E,s[8]=d*f+p*y+v*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=c*o-a*u,d=a*l-c*s,p=u*s-o*l,v=n*h+i*d+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=h*x,e[1]=(r*u-c*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(c*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-u*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(uc.makeScale(e,n)),this}rotate(e){return this.premultiply(uc.makeRotation(-e)),this}translate(e,n){return this.premultiply(uc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const uc=new Ye;function zv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Kl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function gE(){const t=Kl("canvas");return t.style.display="block",t}const em={};function Do(t){t in em||(em[t]=!0,console.warn(t))}const tm=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),nm=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ia={[Ci]:{transfer:jl,primaries:Yl,toReference:t=>t,fromReference:t=>t},[kt]:{transfer:ot,primaries:Yl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[vu]:{transfer:jl,primaries:ql,toReference:t=>t.applyMatrix3(nm),fromReference:t=>t.applyMatrix3(tm)},[Yd]:{transfer:ot,primaries:ql,toReference:t=>t.convertSRGBToLinear().applyMatrix3(nm),fromReference:t=>t.applyMatrix3(tm).convertLinearToSRGB()}},vE=new Set([Ci,vu]),et={enabled:!0,_workingColorSpace:Ci,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!vE.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ia[e].toReference,r=Ia[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ia[t].primaries},getTransfer:function(t){return t===Nn?jl:Ia[t].transfer}};function Is(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function cc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Yr;class kv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Yr===void 0&&(Yr=Kl("canvas")),Yr.width=e.width,Yr.height=e.height;const i=Yr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Yr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Kl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Is(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Is(n[i]/255)*255):n[i]=Is(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _E=0;class Bv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=Qs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(fc(r[o].image)):s.push(fc(r[o]))}else s=fc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function fc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?kv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xE=0;class vn extends Js{constructor(e=vn.DEFAULT_IMAGE,n=vn.DEFAULT_MAPPING,i=qn,r=qn,s=Dn,o=Qo,a=$n,l=tr,u=vn.DEFAULT_ANISOTROPY,c=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=Qs(),this.name="",this.source=new Bv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Do("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Lr?kt:Nn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zr:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case zf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zr:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case zf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Do("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===kt?Lr:Uv}set encoding(e){Do("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Lr?kt:Nn}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Rv;vn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,n=0,i=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],h=l[8],d=l[1],p=l[5],v=l[9],x=l[2],_=l[6],f=l[10];if(Math.abs(c-d)<.01&&Math.abs(h-x)<.01&&Math.abs(v-_)<.01){if(Math.abs(c+d)<.1&&Math.abs(h+x)<.1&&Math.abs(v+_)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const m=(u+1)/2,y=(p+1)/2,C=(f+1)/2,E=(c+d)/4,T=(h+x)/4,D=(v+_)/4;return m>y&&m>C?m<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(m),r=E/i,s=T/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=E/r,s=D/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=T/s,r=D/s),this.set(i,r,s,n),this}let g=Math.sqrt((_-v)*(_-v)+(h-x)*(h-x)+(d-c)*(d-c));return Math.abs(g)<.001&&(g=1),this.x=(_-v)/g,this.y=(h-x)/g,this.z=(d-c)/g,this.w=Math.acos((u+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yE extends Js{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new It(0,0,e,n),this.scissorTest=!1,this.viewport=new It(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Do("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Lr?kt:Nn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new vn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Bv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kr extends yE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Hv extends vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class SE extends vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],h=i[r+3];const d=s[o+0],p=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=v,e[n+3]=x;return}if(h!==x||l!==d||u!==p||c!==v){let _=1-a;const f=l*d+u*p+c*v+h*x,g=f>=0?1:-1,m=1-f*f;if(m>Number.EPSILON){const C=Math.sqrt(m),E=Math.atan2(C,f*g);_=Math.sin(_*E)/C,a=Math.sin(a*E)/C}const y=a*g;if(l=l*_+d*y,u=u*_+p*y,c=c*_+v*y,h=h*_+x*y,_===1-a){const C=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=C,u*=C,c*=C,h*=C}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],h=s[o],d=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+c*h+l*p-u*d,e[n+1]=l*v+c*d+u*h-a*p,e[n+2]=u*v+c*p+a*d-l*h,e[n+3]=c*v-a*h-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),h=a(s/2),d=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*c*h+u*p*v,this._y=u*p*h-d*c*v,this._z=u*c*v+d*p*h,this._w=u*c*h-d*p*v;break;case"YXZ":this._x=d*c*h+u*p*v,this._y=u*p*h-d*c*v,this._z=u*c*v-d*p*h,this._w=u*c*h+d*p*v;break;case"ZXY":this._x=d*c*h-u*p*v,this._y=u*p*h+d*c*v,this._z=u*c*v+d*p*h,this._w=u*c*h-d*p*v;break;case"ZYX":this._x=d*c*h-u*p*v,this._y=u*p*h+d*c*v,this._z=u*c*v-d*p*h,this._w=u*c*h+d*p*v;break;case"YZX":this._x=d*c*h+u*p*v,this._y=u*p*h+d*c*v,this._z=u*c*v-d*p*h,this._w=u*c*h-d*p*v;break;case"XZY":this._x=d*c*h-u*p*v,this._y=u*p*h-d*c*v,this._z=u*c*v+d*p*h,this._w=u*c*h+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-n)*c)/u,d=Math.sin(n*c)/u;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,n=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(im.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(im.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*u+o*h-a*c,this.y=i+l*c+a*u-s*h,this.z=r+l*h+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return dc.copy(this).projectOnVector(e),this.sub(dc)}reflect(e){return this.sub(dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dc=new G,im=new fa;class da{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Hn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Hn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Hn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hn):Hn.fromBufferAttribute(s,o),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Na.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Na.copy(i.boundingBox)),Na.applyMatrix4(e.matrixWorld),this.union(Na)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(po),Ua.subVectors(this.max,po),qr.subVectors(e.a,po),$r.subVectors(e.b,po),Kr.subVectors(e.c,po),Li.subVectors($r,qr),Di.subVectors(Kr,$r),fr.subVectors(qr,Kr);let n=[0,-Li.z,Li.y,0,-Di.z,Di.y,0,-fr.z,fr.y,Li.z,0,-Li.x,Di.z,0,-Di.x,fr.z,0,-fr.x,-Li.y,Li.x,0,-Di.y,Di.x,0,-fr.y,fr.x,0];return!hc(n,qr,$r,Kr,Ua)||(n=[1,0,0,0,1,0,0,0,1],!hc(n,qr,$r,Kr,Ua))?!1:(Fa.crossVectors(Li,Di),n=[Fa.x,Fa.y,Fa.z],hc(n,qr,$r,Kr,Ua))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fi=[new G,new G,new G,new G,new G,new G,new G,new G],Hn=new G,Na=new da,qr=new G,$r=new G,Kr=new G,Li=new G,Di=new G,fr=new G,po=new G,Ua=new G,Fa=new G,dr=new G;function hc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){dr.fromArray(t,s);const a=r.x*Math.abs(dr.x)+r.y*Math.abs(dr.y)+r.z*Math.abs(dr.z),l=e.dot(dr),u=n.dot(dr),c=i.dot(dr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const EE=new da,mo=new G,pc=new G;class _u{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):EE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mo.subVectors(e,this.center);const n=mo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(mo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mo.copy(e.center).add(pc)),this.expandByPoint(mo.copy(e.center).sub(pc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const di=new G,mc=new G,Oa=new G,Ii=new G,gc=new G,za=new G,vc=new G;class Gv{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=di.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,n),di.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){mc.copy(e).add(n).multiplyScalar(.5),Oa.copy(n).sub(e).normalize(),Ii.copy(this.origin).sub(mc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Oa),a=Ii.dot(this.direction),l=-Ii.dot(Oa),u=Ii.lengthSq(),c=Math.abs(1-o*o);let h,d,p,v;if(c>0)if(h=o*l-a,d=o*a-l,v=s*c,h>=0)if(d>=-v)if(d<=v){const x=1/c;h*=x,d*=x,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+u}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;else d<=-v?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+u):d<=v?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+u);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(mc).addScaledVector(Oa,d),p}intersectSphere(e,n){di.subVectors(e.center,this.origin);const i=di.dot(this.direction),r=di.dot(di)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,n,i,r,s){gc.subVectors(n,e),za.subVectors(i,e),vc.crossVectors(gc,za);let o=this.direction.dot(vc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,e);const l=a*this.direction.dot(za.crossVectors(Ii,za));if(l<0)return null;const u=a*this.direction.dot(gc.cross(Ii));if(u<0||l+u>o)return null;const c=-a*Ii.dot(vc);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,n,i,r,s,o,a,l,u,c,h,d,p,v,x,_){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,h,d,p,v,x,_)}set(e,n,i,r,s,o,a,l,u,c,h,d,p,v,x,_){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=h,f[14]=d,f[3]=p,f[7]=v,f[11]=x,f[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Zr.setFromMatrixColumn(e,0).length(),s=1/Zr.setFromMatrixColumn(e,1).length(),o=1/Zr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*c,p=o*h,v=a*c,x=a*h;n[0]=l*c,n[4]=-l*h,n[8]=u,n[1]=p+v*u,n[5]=d-x*u,n[9]=-a*l,n[2]=x-d*u,n[6]=v+p*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*c,p=l*h,v=u*c,x=u*h;n[0]=d+x*a,n[4]=v*a-p,n[8]=o*u,n[1]=o*h,n[5]=o*c,n[9]=-a,n[2]=p*a-v,n[6]=x+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*c,p=l*h,v=u*c,x=u*h;n[0]=d-x*a,n[4]=-o*h,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*c,n[9]=x-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*c,p=o*h,v=a*c,x=a*h;n[0]=l*c,n[4]=v*u-p,n[8]=d*u+x,n[1]=l*h,n[5]=x*u+d,n[9]=p*u-v,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*u,v=a*l,x=a*u;n[0]=l*c,n[4]=x-d*h,n[8]=v*h+p,n[1]=h,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*h+v,n[10]=d-x*h}else if(e.order==="XZY"){const d=o*l,p=o*u,v=a*l,x=a*u;n[0]=l*c,n[4]=-h,n[8]=u*c,n[1]=d*h+x,n[5]=o*c,n[9]=p*h-v,n[2]=v*h-p,n[6]=a*c,n[10]=x*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ME,e,wE)}lookAt(e,n,i){const r=this.elements;return xn.subVectors(e,n),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Ni.crossVectors(i,xn),Ni.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Ni.crossVectors(i,xn)),Ni.normalize(),ka.crossVectors(xn,Ni),r[0]=Ni.x,r[4]=ka.x,r[8]=xn.x,r[1]=Ni.y,r[5]=ka.y,r[9]=xn.y,r[2]=Ni.z,r[6]=ka.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],h=i[5],d=i[9],p=i[13],v=i[2],x=i[6],_=i[10],f=i[14],g=i[3],m=i[7],y=i[11],C=i[15],E=r[0],T=r[4],D=r[8],S=r[12],M=r[1],k=r[5],W=r[9],te=r[13],I=r[2],H=r[6],j=r[10],Z=r[14],F=r[3],L=r[7],B=r[11],O=r[15];return s[0]=o*E+a*M+l*I+u*F,s[4]=o*T+a*k+l*H+u*L,s[8]=o*D+a*W+l*j+u*B,s[12]=o*S+a*te+l*Z+u*O,s[1]=c*E+h*M+d*I+p*F,s[5]=c*T+h*k+d*H+p*L,s[9]=c*D+h*W+d*j+p*B,s[13]=c*S+h*te+d*Z+p*O,s[2]=v*E+x*M+_*I+f*F,s[6]=v*T+x*k+_*H+f*L,s[10]=v*D+x*W+_*j+f*B,s[14]=v*S+x*te+_*Z+f*O,s[3]=g*E+m*M+y*I+C*F,s[7]=g*T+m*k+y*H+C*L,s[11]=g*D+m*W+y*j+C*B,s[15]=g*S+m*te+y*Z+C*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],h=e[6],d=e[10],p=e[14],v=e[3],x=e[7],_=e[11],f=e[15];return v*(+s*l*h-r*u*h-s*a*d+i*u*d+r*a*p-i*l*p)+x*(+n*l*p-n*u*d+s*o*d-r*o*p+r*u*c-s*l*c)+_*(+n*u*h-n*a*p-s*o*h+i*o*p+s*a*c-i*u*c)+f*(-r*a*c-n*l*h+n*a*d+r*o*h-i*o*d+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=e[9],d=e[10],p=e[11],v=e[12],x=e[13],_=e[14],f=e[15],g=h*_*u-x*d*u+x*l*p-a*_*p-h*l*f+a*d*f,m=v*d*u-c*_*u-v*l*p+o*_*p+c*l*f-o*d*f,y=c*x*u-v*h*u+v*a*p-o*x*p-c*a*f+o*h*f,C=v*h*l-c*x*l-v*a*d+o*x*d+c*a*_-o*h*_,E=n*g+i*m+r*y+s*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=g*T,e[1]=(x*d*s-h*_*s-x*r*p+i*_*p+h*r*f-i*d*f)*T,e[2]=(a*_*s-x*l*s+x*r*u-i*_*u-a*r*f+i*l*f)*T,e[3]=(h*l*s-a*d*s-h*r*u+i*d*u+a*r*p-i*l*p)*T,e[4]=m*T,e[5]=(c*_*s-v*d*s+v*r*p-n*_*p-c*r*f+n*d*f)*T,e[6]=(v*l*s-o*_*s-v*r*u+n*_*u+o*r*f-n*l*f)*T,e[7]=(o*d*s-c*l*s+c*r*u-n*d*u-o*r*p+n*l*p)*T,e[8]=y*T,e[9]=(v*h*s-c*x*s-v*i*p+n*x*p+c*i*f-n*h*f)*T,e[10]=(o*x*s-v*a*s+v*i*u-n*x*u-o*i*f+n*a*f)*T,e[11]=(c*a*s-o*h*s-c*i*u+n*h*u+o*i*p-n*a*p)*T,e[12]=C*T,e[13]=(c*x*r-v*h*r+v*i*d-n*x*d-c*i*_+n*h*_)*T,e[14]=(v*a*r-o*x*r-v*i*l+n*x*l+o*i*_-n*a*_)*T,e[15]=(o*h*r-c*a*r+c*i*l-n*h*l-o*i*d+n*a*d)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,h=a+a,d=s*u,p=s*c,v=s*h,x=o*c,_=o*h,f=a*h,g=l*u,m=l*c,y=l*h,C=i.x,E=i.y,T=i.z;return r[0]=(1-(x+f))*C,r[1]=(p+y)*C,r[2]=(v-m)*C,r[3]=0,r[4]=(p-y)*E,r[5]=(1-(d+f))*E,r[6]=(_+g)*E,r[7]=0,r[8]=(v+m)*T,r[9]=(_-g)*T,r[10]=(1-(d+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Zr.set(r[0],r[1],r[2]).length();const o=Zr.set(r[4],r[5],r[6]).length(),a=Zr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gn.copy(this);const u=1/s,c=1/o,h=1/a;return Gn.elements[0]*=u,Gn.elements[1]*=u,Gn.elements[2]*=u,Gn.elements[4]*=c,Gn.elements[5]*=c,Gn.elements[6]*=c,Gn.elements[8]*=h,Gn.elements[9]*=h,Gn.elements[10]*=h,n.setFromRotationMatrix(Gn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ei){const l=this.elements,u=2*s/(n-e),c=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let p,v;if(a===Ei)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===$l)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ei){const l=this.elements,u=1/(n-e),c=1/(i-r),h=1/(o-s),d=(n+e)*u,p=(i+r)*c;let v,x;if(a===Ei)v=(o+s)*h,x=-2*h;else if(a===$l)v=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Zr=new G,Gn=new yt,ME=new G(0,0,0),wE=new G(1,1,1),Ni=new G,ka=new G,xn=new G,rm=new yt,sm=new fa;class xu{constructor(e=0,n=0,i=0,r=xu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return rm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return sm.setFromEuler(this),this.setFromQuaternion(sm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xu.DEFAULT_ORDER="XYZ";class Vv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let TE=0;const om=new G,Jr=new fa,hi=new yt,Ba=new G,go=new G,AE=new G,RE=new fa,am=new G(1,0,0),lm=new G(0,1,0),um=new G(0,0,1),CE={type:"added"},bE={type:"removed"};class Ft extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:TE++}),this.uuid=Qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new G,n=new xu,i=new fa,r=new G(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new Ye}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Jr.setFromAxisAngle(e,n),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(e,n){return Jr.setFromAxisAngle(e,n),this.quaternion.premultiply(Jr),this}rotateX(e){return this.rotateOnAxis(am,e)}rotateY(e){return this.rotateOnAxis(lm,e)}rotateZ(e){return this.rotateOnAxis(um,e)}translateOnAxis(e,n){return om.copy(e).applyQuaternion(this.quaternion),this.position.add(om.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(am,e)}translateY(e){return this.translateOnAxis(lm,e)}translateZ(e){return this.translateOnAxis(um,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ba.copy(e):Ba.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(go,Ba,this.up):hi.lookAt(Ba,go,this.up),this.quaternion.setFromRotationMatrix(hi),r&&(hi.extractRotation(r.matrixWorld),Jr.setFromRotationMatrix(hi),this.quaternion.premultiply(Jr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(CE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(bE)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,e,AE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,RE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ft.DEFAULT_UP=new G(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new G,pi=new G,_c=new G,mi=new G,Qr=new G,es=new G,cm=new G,xc=new G,yc=new G,Sc=new G;let Ha=!1;class Yn{constructor(e=new G,n=new G,i=new G){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Vn.subVectors(e,n),r.cross(Vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Vn.subVectors(r,n),pi.subVectors(i,n),_c.subVectors(e,n);const o=Vn.dot(Vn),a=Vn.dot(pi),l=Vn.dot(_c),u=pi.dot(pi),c=pi.dot(_c),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(u*l-a*c)*d,v=(o*c-a*l)*d;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getUV(e,n,i,r,s,o,a,l){return Ha===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ha=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,mi.x),l.addScaledVector(o,mi.y),l.addScaledVector(a,mi.z),l)}static isFrontFacing(e,n,i,r){return Vn.subVectors(i,n),pi.subVectors(e,n),Vn.cross(pi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Vn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Yn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Ha===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ha=!0),Yn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Yn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Qr.subVectors(r,i),es.subVectors(s,i),xc.subVectors(e,i);const l=Qr.dot(xc),u=es.dot(xc);if(l<=0&&u<=0)return n.copy(i);yc.subVectors(e,r);const c=Qr.dot(yc),h=es.dot(yc);if(c>=0&&h<=c)return n.copy(r);const d=l*h-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(Qr,o);Sc.subVectors(e,s);const p=Qr.dot(Sc),v=es.dot(Sc);if(v>=0&&p<=v)return n.copy(s);const x=p*u-l*v;if(x<=0&&u>=0&&v<=0)return a=u/(u-v),n.copy(i).addScaledVector(es,a);const _=c*v-p*h;if(_<=0&&h-c>=0&&p-v>=0)return cm.subVectors(s,r),a=(h-c)/(h-c+(p-v)),n.copy(r).addScaledVector(cm,a);const f=1/(_+x+d);return o=x*f,a=d*f,n.copy(i).addScaledVector(Qr,o).addScaledVector(es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},Ga={h:0,s:0,l:0};function Ec(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=mE(e,1),n=Kt(n,0,1),i=Kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Ec(o,s,e+1/3),this.g=Ec(o,s,e),this.b=Ec(o,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=kt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=kt){const i=Wv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}copyLinearToSRGB(e){return this.r=cc(e.r),this.g=cc(e.g),this.b=cc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return et.fromWorkingColorSpace(Yt.copy(this),e),Math.round(Kt(Yt.r*255,0,255))*65536+Math.round(Kt(Yt.g*255,0,255))*256+Math.round(Kt(Yt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace(Yt.copy(this),n);const i=Yt.r,r=Yt.g,s=Yt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace(Yt.copy(this),n),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=kt){et.fromWorkingColorSpace(Yt.copy(this),e);const n=Yt.r,i=Yt.g,r=Yt.b;return e!==kt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ui),this.setHSL(Ui.h+e,Ui.s+n,Ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ui),e.getHSL(Ga);const i=lc(Ui.h,Ga.h,n),r=lc(Ui.s,Ga.s,n),s=lc(Ui.l,Ga.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new ze;ze.NAMES=Wv;let PE=0;class eo extends Js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=Qs(),this.name="",this.type="Material",this.blending=Ds,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nf,this.blendDst=Uf,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Xl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(i.blending=this.blending),this.side!==sr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Nf&&(i.blendSrc=this.blendSrc),this.blendDst!==Uf&&(i.blendDst=this.blendDst),this.blendEquation!==yr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==jr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==jr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Xv extends eo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Av,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new G,Va=new ye;class Qn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Zp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Va.fromBufferAttribute(this,n),Va.applyMatrix3(e),this.setXY(n,Va.x,Va.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ho(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ln(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ho(n,this.array)),n}setX(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ho(n,this.array)),n}setY(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ho(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ho(n,this.array)),n}setW(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array),s=ln(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zp&&(e.usage=this.usage),e}}class jv extends Qn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Yv extends Qn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class wn extends Qn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let LE=0;const bn=new yt,Mc=new Ft,ts=new G,yn=new da,vo=new da,Lt=new G;class ti extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:LE++}),this.uuid=Qs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zv(e)?Yv:jv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,n,i){return bn.makeTranslation(e,n,i),this.applyMatrix4(bn),this}scale(e,n,i){return bn.makeScale(e,n,i),this.applyMatrix4(bn),this}lookAt(e){return Mc.lookAt(e),Mc.updateMatrix(),this.applyMatrix4(Mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new wn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new da);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _u);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];vo.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(yn.min,vo.min),yn.expandByPoint(Lt),Lt.addVectors(yn.max,vo.max),yn.expandByPoint(Lt)):(yn.expandByPoint(vo.min),yn.expandByPoint(vo.max))}yn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Lt.fromBufferAttribute(a,u),l&&(ts.fromBufferAttribute(e,u),Lt.add(ts)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let M=0;M<a;M++)u[M]=new G,c[M]=new G;const h=new G,d=new G,p=new G,v=new ye,x=new ye,_=new ye,f=new G,g=new G;function m(M,k,W){h.fromArray(r,M*3),d.fromArray(r,k*3),p.fromArray(r,W*3),v.fromArray(o,M*2),x.fromArray(o,k*2),_.fromArray(o,W*2),d.sub(h),p.sub(h),x.sub(v),_.sub(v);const te=1/(x.x*_.y-_.x*x.y);isFinite(te)&&(f.copy(d).multiplyScalar(_.y).addScaledVector(p,-x.y).multiplyScalar(te),g.copy(p).multiplyScalar(x.x).addScaledVector(d,-_.x).multiplyScalar(te),u[M].add(f),u[k].add(f),u[W].add(f),c[M].add(g),c[k].add(g),c[W].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let M=0,k=y.length;M<k;++M){const W=y[M],te=W.start,I=W.count;for(let H=te,j=te+I;H<j;H+=3)m(i[H+0],i[H+1],i[H+2])}const C=new G,E=new G,T=new G,D=new G;function S(M){T.fromArray(s,M*3),D.copy(T);const k=u[M];C.copy(k),C.sub(T.multiplyScalar(T.dot(k))).normalize(),E.crossVectors(D,k);const te=E.dot(c[M])<0?-1:1;l[M*4]=C.x,l[M*4+1]=C.y,l[M*4+2]=C.z,l[M*4+3]=te}for(let M=0,k=y.length;M<k;++M){const W=y[M],te=W.start,I=W.count;for(let H=te,j=te+I;H<j;H+=3)S(i[H+0]),S(i[H+1]),S(i[H+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new G,s=new G,o=new G,a=new G,l=new G,u=new G,c=new G,h=new G;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),x=e.getX(d+1),_=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,_),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,_),a.add(c),l.add(c),u.add(c),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(_,u.x,u.y,u.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Lt.fromBufferAttribute(e,n),Lt.normalize(),e.setXYZ(n,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,h=a.normalized,d=new u.constructor(l.length*c);let p=0,v=0;for(let x=0,_=l.length;x<_;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*c;for(let f=0;f<c;f++)d[v++]=u[p++]}return new Qn(d,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ti,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,h=u.length;c<h;c++){const d=u[c],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,d=u.length;h<d;h++){const p=u[h];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],h=s[u];for(let d=0,p=h.length;d<p;d++)c.push(h[d].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fm=new yt,hr=new Gv,Wa=new _u,dm=new G,ns=new G,is=new G,rs=new G,wc=new G,Xa=new G,ja=new ye,Ya=new ye,qa=new ye,hm=new G,pm=new G,mm=new G,$a=new G,Ka=new G;class Fn extends Ft{constructor(e=new ti,n=new Xv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Xa.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],h=s[l];c!==0&&(wc.fromBufferAttribute(h,e),o?Xa.addScaledVector(wc,c):Xa.addScaledVector(wc.sub(n),c))}n.add(Xa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wa.copy(i.boundingSphere),Wa.applyMatrix4(s),hr.copy(e.ray).recast(e.near),!(Wa.containsPoint(hr.origin)===!1&&(hr.intersectSphere(Wa,dm)===null||hr.origin.distanceToSquared(dm)>(e.far-e.near)**2))&&(fm.copy(s).invert(),hr.copy(e.ray).applyMatrix4(fm),!(i.boundingBox!==null&&hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,hr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const _=d[v],f=o[_.materialIndex],g=Math.max(_.start,p.start),m=Math.min(a.count,Math.min(_.start+_.count,p.start+p.count));for(let y=g,C=m;y<C;y+=3){const E=a.getX(y),T=a.getX(y+1),D=a.getX(y+2);r=Za(this,f,e,i,u,c,h,E,T,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let _=v,f=x;_<f;_+=3){const g=a.getX(_),m=a.getX(_+1),y=a.getX(_+2);r=Za(this,o,e,i,u,c,h,g,m,y),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const _=d[v],f=o[_.materialIndex],g=Math.max(_.start,p.start),m=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let y=g,C=m;y<C;y+=3){const E=y,T=y+1,D=y+2;r=Za(this,f,e,i,u,c,h,E,T,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let _=v,f=x;_<f;_+=3){const g=_,m=_+1,y=_+2;r=Za(this,o,e,i,u,c,h,g,m,y),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}}}function DE(t,e,n,i,r,s,o,a){let l;if(e.side===gn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===sr,a),l===null)return null;Ka.copy(a),Ka.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Ka);return u<n.near||u>n.far?null:{distance:u,point:Ka.clone(),object:t}}function Za(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,ns),t.getVertexPosition(l,is),t.getVertexPosition(u,rs);const c=DE(t,e,n,i,ns,is,rs,$a);if(c){r&&(ja.fromBufferAttribute(r,a),Ya.fromBufferAttribute(r,l),qa.fromBufferAttribute(r,u),c.uv=Yn.getInterpolation($a,ns,is,rs,ja,Ya,qa,new ye)),s&&(ja.fromBufferAttribute(s,a),Ya.fromBufferAttribute(s,l),qa.fromBufferAttribute(s,u),c.uv1=Yn.getInterpolation($a,ns,is,rs,ja,Ya,qa,new ye),c.uv2=c.uv1),o&&(hm.fromBufferAttribute(o,a),pm.fromBufferAttribute(o,l),mm.fromBufferAttribute(o,u),c.normal=Yn.getInterpolation($a,ns,is,rs,hm,pm,mm,new G),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new G,materialIndex:0};Yn.getNormal(ns,is,rs,h.normal),c.face=h}return c}class Wr extends ti{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],h=[];let d=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new wn(u,3)),this.setAttribute("normal",new wn(c,3)),this.setAttribute("uv",new wn(h,2));function v(x,_,f,g,m,y,C,E,T,D,S){const M=y/T,k=C/D,W=y/2,te=C/2,I=E/2,H=T+1,j=D+1;let Z=0,F=0;const L=new G;for(let B=0;B<j;B++){const O=B*k-te;for(let b=0;b<H;b++){const U=b*M-W;L[x]=U*g,L[_]=O*m,L[f]=I,u.push(L.x,L.y,L.z),L[x]=0,L[_]=0,L[f]=E>0?1:-1,c.push(L.x,L.y,L.z),h.push(b/T),h.push(1-B/D),Z+=1}}for(let B=0;B<D;B++)for(let O=0;O<T;O++){const b=d+O+H*B,U=d+O+H*(B+1),z=d+(O+1)+H*(B+1),K=d+(O+1)+H*B;l.push(b,U,K),l.push(U,z,K),F+=6}a.addGroup(p,F,S),p+=F,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function en(t){const e={};for(let n=0;n<t.length;n++){const i=Xs(t[n]);for(const r in i)e[r]=i[r]}return e}function IE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function qv(t){return t.getRenderTarget()===null?t.outputColorSpace:et.workingColorSpace}const NE={clone:Xs,merge:en};var UE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Br extends eo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=UE,this.fragmentShader=FE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=IE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class $v extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=Ei}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class In extends $v{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Bf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ac*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bf*2*Math.atan(Math.tan(ac*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ac*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ss=-90,os=1;class OE extends Ft{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new In(ss,os,e,n);r.layers=this.layers,this.add(r);const s=new In(ss,os,e,n);s.layers=this.layers,this.add(s);const o=new In(ss,os,e,n);o.layers=this.layers,this.add(o);const a=new In(ss,os,e,n);a.layers=this.layers,this.add(a);const l=new In(ss,os,e,n);l.layers=this.layers,this.add(l);const u=new In(ss,os,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$l)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(h,d,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Kv extends vn{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:Gs,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zE extends kr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Do("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Lr?kt:Nn),this.texture=new Kv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Dn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Wr(5,5,5),s=new Br({name:"CubemapFromEquirect",uniforms:Xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:Qi});s.uniforms.tEquirect.value=n;const o=new Fn(r,s),a=n.minFilter;return n.minFilter===Qo&&(n.minFilter=Dn),new OE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Tc=new G,kE=new G,BE=new Ye;class vr{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Tc.subVectors(i,n).cross(kE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Tc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||BE.getNormalMatrix(e),r=this.coplanarPoint(Tc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pr=new _u,Ja=new G;class qd{constructor(e=new vr,n=new vr,i=new vr,r=new vr,s=new vr,o=new vr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ei){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],h=r[6],d=r[7],p=r[8],v=r[9],x=r[10],_=r[11],f=r[12],g=r[13],m=r[14],y=r[15];if(i[0].setComponents(l-s,d-u,_-p,y-f).normalize(),i[1].setComponents(l+s,d+u,_+p,y+f).normalize(),i[2].setComponents(l+o,d+c,_+v,y+g).normalize(),i[3].setComponents(l-o,d-c,_-v,y-g).normalize(),i[4].setComponents(l-a,d-h,_-x,y-m).normalize(),n===Ei)i[5].setComponents(l+a,d+h,_+x,y+m).normalize();else if(n===$l)i[5].setComponents(a,h,x,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(e){return pr.center.set(0,0,0),pr.radius=.7071067811865476,pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ja.x=r.normal.x>0?e.max.x:e.min.x,Ja.y=r.normal.y>0?e.max.y:e.min.y,Ja.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ja)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function HE(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const h=u.array,d=u.usage,p=h.byteLength,v=t.createBuffer();t.bindBuffer(c,v),t.bufferData(c,h,d),u.onUploadCallback();let x;if(h instanceof Float32Array)x=t.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=t.SHORT;else if(h instanceof Uint32Array)x=t.UNSIGNED_INT;else if(h instanceof Int32Array)x=t.INT;else if(h instanceof Int8Array)x=t.BYTE;else if(h instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:p}}function s(u,c,h){const d=c.array,p=c._updateRange,v=c.updateRanges;if(t.bindBuffer(h,u),p.count===-1&&v.length===0&&t.bufferSubData(h,0,d),v.length!==0){for(let x=0,_=v.length;x<_;x++){const f=v[x];n?t.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):t.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}c.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):t.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);if(h===void 0)i.set(u,r(u,c));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,u,c),h.version=u.version}}return{get:o,remove:a,update:l}}class yu extends ti{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,h=e/a,d=n/l,p=[],v=[],x=[],_=[];for(let f=0;f<c;f++){const g=f*d-o;for(let m=0;m<u;m++){const y=m*h-s;v.push(y,-g,0),x.push(0,0,1),_.push(m/a),_.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<a;g++){const m=g+u*f,y=g+u*(f+1),C=g+1+u*(f+1),E=g+1+u*f;p.push(m,y,E),p.push(y,C,E)}this.setIndex(p),this.setAttribute("position",new wn(v,3)),this.setAttribute("normal",new wn(x,3)),this.setAttribute("uv",new wn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yu(e.width,e.height,e.widthSegments,e.heightSegments)}}var GE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,VE=`#ifdef USE_ALPHAHASH
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
#endif`,WE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,XE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jE=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,YE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qE=`#ifdef USE_AOMAP
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
#endif`,$E=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KE=`#ifdef USE_BATCHING
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
#endif`,ZE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,JE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,QE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tM=`#ifdef USE_IRIDESCENCE
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
#endif`,nM=`#ifdef USE_BUMPMAP
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
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,cM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fM=`#define PI 3.141592653589793
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
} // validated`,dM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hM=`vec3 transformedNormal = objectNormal;
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
#endif`,pM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_M="gl_FragColor = linearToOutputTexel( gl_FragColor );",xM=`
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
}`,yM=`#ifdef USE_ENVMAP
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
#endif`,SM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,EM=`#ifdef USE_ENVMAP
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
#endif`,MM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wM=`#ifdef USE_ENVMAP
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
#endif`,TM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,RM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bM=`#ifdef USE_GRADIENTMAP
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
}`,PM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,LM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,IM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NM=`uniform bool receiveShadow;
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
#endif`,UM=`#ifdef USE_ENVMAP
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
#endif`,FM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,BM=`PhysicalMaterial material;
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
#endif`,HM=`struct PhysicalMaterial {
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
}`,GM=`
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
#endif`,VM=`#if defined( RE_IndirectDiffuse )
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
#endif`,WM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,qM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$M=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ZM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,JM=`#if defined( USE_POINTS_UV )
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
#endif`,QM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ew=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nw=`#ifdef USE_MORPHNORMALS
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
#endif`,iw=`#ifdef USE_MORPHTARGETS
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
#endif`,rw=`#ifdef USE_MORPHTARGETS
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
#endif`,sw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ow=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,aw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cw=`#ifdef USE_NORMALMAP
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
#endif`,fw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_w=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ew=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ww=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Aw=`float getShadowMask() {
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
}`,Rw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cw=`#ifdef USE_SKINNING
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
#endif`,bw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pw=`#ifdef USE_SKINNING
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
#endif`,Lw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Iw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Uw=`#ifdef USE_TRANSMISSION
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
#endif`,Fw=`#ifdef USE_TRANSMISSION
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
#endif`,Ow=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gw=`uniform sampler2D t2D;
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
}`,Vw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ww=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yw=`#include <common>
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
}`,qw=`#if DEPTH_PACKING == 3200
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
}`,$w=`#define DISTANCE
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
}`,Kw=`#define DISTANCE
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
}`,Zw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qw=`uniform float scale;
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
}`,e1=`uniform vec3 diffuse;
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
}`,t1=`#include <common>
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
}`,n1=`uniform vec3 diffuse;
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
}`,i1=`#define LAMBERT
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
}`,r1=`#define LAMBERT
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
}`,s1=`#define MATCAP
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
}`,o1=`#define MATCAP
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
}`,a1=`#define NORMAL
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
}`,l1=`#define NORMAL
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
}`,u1=`#define PHONG
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
}`,c1=`#define PHONG
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
}`,f1=`#define STANDARD
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
}`,d1=`#define STANDARD
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
}`,h1=`#define TOON
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
}`,p1=`#define TOON
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
}`,m1=`uniform float size;
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
}`,g1=`uniform vec3 diffuse;
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
}`,v1=`#include <common>
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
}`,_1=`uniform vec3 color;
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
}`,x1=`uniform float rotation;
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
}`,y1=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:GE,alphahash_pars_fragment:VE,alphamap_fragment:WE,alphamap_pars_fragment:XE,alphatest_fragment:jE,alphatest_pars_fragment:YE,aomap_fragment:qE,aomap_pars_fragment:$E,batching_pars_vertex:KE,batching_vertex:ZE,begin_vertex:JE,beginnormal_vertex:QE,bsdfs:eM,iridescence_fragment:tM,bumpmap_pars_fragment:nM,clipping_planes_fragment:iM,clipping_planes_pars_fragment:rM,clipping_planes_pars_vertex:sM,clipping_planes_vertex:oM,color_fragment:aM,color_pars_fragment:lM,color_pars_vertex:uM,color_vertex:cM,common:fM,cube_uv_reflection_fragment:dM,defaultnormal_vertex:hM,displacementmap_pars_vertex:pM,displacementmap_vertex:mM,emissivemap_fragment:gM,emissivemap_pars_fragment:vM,colorspace_fragment:_M,colorspace_pars_fragment:xM,envmap_fragment:yM,envmap_common_pars_fragment:SM,envmap_pars_fragment:EM,envmap_pars_vertex:MM,envmap_physical_pars_fragment:UM,envmap_vertex:wM,fog_vertex:TM,fog_pars_vertex:AM,fog_fragment:RM,fog_pars_fragment:CM,gradientmap_pars_fragment:bM,lightmap_fragment:PM,lightmap_pars_fragment:LM,lights_lambert_fragment:DM,lights_lambert_pars_fragment:IM,lights_pars_begin:NM,lights_toon_fragment:FM,lights_toon_pars_fragment:OM,lights_phong_fragment:zM,lights_phong_pars_fragment:kM,lights_physical_fragment:BM,lights_physical_pars_fragment:HM,lights_fragment_begin:GM,lights_fragment_maps:VM,lights_fragment_end:WM,logdepthbuf_fragment:XM,logdepthbuf_pars_fragment:jM,logdepthbuf_pars_vertex:YM,logdepthbuf_vertex:qM,map_fragment:$M,map_pars_fragment:KM,map_particle_fragment:ZM,map_particle_pars_fragment:JM,metalnessmap_fragment:QM,metalnessmap_pars_fragment:ew,morphcolor_vertex:tw,morphnormal_vertex:nw,morphtarget_pars_vertex:iw,morphtarget_vertex:rw,normal_fragment_begin:sw,normal_fragment_maps:ow,normal_pars_fragment:aw,normal_pars_vertex:lw,normal_vertex:uw,normalmap_pars_fragment:cw,clearcoat_normal_fragment_begin:fw,clearcoat_normal_fragment_maps:dw,clearcoat_pars_fragment:hw,iridescence_pars_fragment:pw,opaque_fragment:mw,packing:gw,premultiplied_alpha_fragment:vw,project_vertex:_w,dithering_fragment:xw,dithering_pars_fragment:yw,roughnessmap_fragment:Sw,roughnessmap_pars_fragment:Ew,shadowmap_pars_fragment:Mw,shadowmap_pars_vertex:ww,shadowmap_vertex:Tw,shadowmask_pars_fragment:Aw,skinbase_vertex:Rw,skinning_pars_vertex:Cw,skinning_vertex:bw,skinnormal_vertex:Pw,specularmap_fragment:Lw,specularmap_pars_fragment:Dw,tonemapping_fragment:Iw,tonemapping_pars_fragment:Nw,transmission_fragment:Uw,transmission_pars_fragment:Fw,uv_pars_fragment:Ow,uv_pars_vertex:zw,uv_vertex:kw,worldpos_vertex:Bw,background_vert:Hw,background_frag:Gw,backgroundCube_vert:Vw,backgroundCube_frag:Ww,cube_vert:Xw,cube_frag:jw,depth_vert:Yw,depth_frag:qw,distanceRGBA_vert:$w,distanceRGBA_frag:Kw,equirect_vert:Zw,equirect_frag:Jw,linedashed_vert:Qw,linedashed_frag:e1,meshbasic_vert:t1,meshbasic_frag:n1,meshlambert_vert:i1,meshlambert_frag:r1,meshmatcap_vert:s1,meshmatcap_frag:o1,meshnormal_vert:a1,meshnormal_frag:l1,meshphong_vert:u1,meshphong_frag:c1,meshphysical_vert:f1,meshphysical_frag:d1,meshtoon_vert:h1,meshtoon_frag:p1,points_vert:m1,points_frag:g1,shadow_vert:v1,shadow_frag:_1,sprite_vert:x1,sprite_frag:y1},me={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},si={basic:{uniforms:en([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:en([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:en([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:en([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:en([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:en([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:en([me.points,me.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:en([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:en([me.common,me.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:en([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:en([me.sprite,me.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:en([me.common,me.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:en([me.lights,me.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};si.physical={uniforms:en([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Qa={r:0,b:0,g:0};function S1(t,e,n,i,r,s,o){const a=new ze(0);let l=s===!0?0:1,u,c,h=null,d=0,p=null;function v(_,f){let g=!1,m=f.isScene===!0?f.background:null;m&&m.isTexture&&(m=(f.backgroundBlurriness>0?n:e).get(m)),m===null?x(a,l):m&&m.isColor&&(x(m,1),g=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),m&&(m.isCubeTexture||m.mapping===gu)?(c===void 0&&(c=new Fn(new Wr(1,1,1),new Br({name:"BackgroundCubeMaterial",uniforms:Xs(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=m,c.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=et.getTransfer(m.colorSpace)!==ot,(h!==m||d!==m.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=m,d=m.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):m&&m.isTexture&&(u===void 0&&(u=new Fn(new yu(2,2),new Br({name:"BackgroundMaterial",uniforms:Xs(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=m,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=et.getTransfer(m.colorSpace)!==ot,m.matrixAutoUpdate===!0&&m.updateMatrix(),u.material.uniforms.uvTransform.value.copy(m.matrix),(h!==m||d!==m.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=m,d=m.version,p=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null))}function x(_,f){_.getRGB(Qa,qv(t)),i.buffers.color.setClear(Qa.r,Qa.g,Qa.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(_,f=1){a.set(_),l=f,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,x(a,l)},render:v}}function E1(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=_(null);let u=l,c=!1;function h(I,H,j,Z,F){let L=!1;if(o){const B=x(Z,j,H);u!==B&&(u=B,p(u.object)),L=f(I,Z,j,F),L&&g(I,Z,j,F)}else{const B=H.wireframe===!0;(u.geometry!==Z.id||u.program!==j.id||u.wireframe!==B)&&(u.geometry=Z.id,u.program=j.id,u.wireframe=B,L=!0)}F!==null&&n.update(F,t.ELEMENT_ARRAY_BUFFER),(L||c)&&(c=!1,D(I,H,j,Z),F!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(F).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(I){return i.isWebGL2?t.bindVertexArray(I):s.bindVertexArrayOES(I)}function v(I){return i.isWebGL2?t.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function x(I,H,j){const Z=j.wireframe===!0;let F=a[I.id];F===void 0&&(F={},a[I.id]=F);let L=F[H.id];L===void 0&&(L={},F[H.id]=L);let B=L[Z];return B===void 0&&(B=_(d()),L[Z]=B),B}function _(I){const H=[],j=[],Z=[];for(let F=0;F<r;F++)H[F]=0,j[F]=0,Z[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:j,attributeDivisors:Z,object:I,attributes:{},index:null}}function f(I,H,j,Z){const F=u.attributes,L=H.attributes;let B=0;const O=j.getAttributes();for(const b in O)if(O[b].location>=0){const z=F[b];let K=L[b];if(K===void 0&&(b==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),b==="instanceColor"&&I.instanceColor&&(K=I.instanceColor)),z===void 0||z.attribute!==K||K&&z.data!==K.data)return!0;B++}return u.attributesNum!==B||u.index!==Z}function g(I,H,j,Z){const F={},L=H.attributes;let B=0;const O=j.getAttributes();for(const b in O)if(O[b].location>=0){let z=L[b];z===void 0&&(b==="instanceMatrix"&&I.instanceMatrix&&(z=I.instanceMatrix),b==="instanceColor"&&I.instanceColor&&(z=I.instanceColor));const K={};K.attribute=z,z&&z.data&&(K.data=z.data),F[b]=K,B++}u.attributes=F,u.attributesNum=B,u.index=Z}function m(){const I=u.newAttributes;for(let H=0,j=I.length;H<j;H++)I[H]=0}function y(I){C(I,0)}function C(I,H){const j=u.newAttributes,Z=u.enabledAttributes,F=u.attributeDivisors;j[I]=1,Z[I]===0&&(t.enableVertexAttribArray(I),Z[I]=1),F[I]!==H&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,H),F[I]=H)}function E(){const I=u.newAttributes,H=u.enabledAttributes;for(let j=0,Z=H.length;j<Z;j++)H[j]!==I[j]&&(t.disableVertexAttribArray(j),H[j]=0)}function T(I,H,j,Z,F,L,B){B===!0?t.vertexAttribIPointer(I,H,j,F,L):t.vertexAttribPointer(I,H,j,Z,F,L)}function D(I,H,j,Z){if(i.isWebGL2===!1&&(I.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const F=Z.attributes,L=j.getAttributes(),B=H.defaultAttributeValues;for(const O in L){const b=L[O];if(b.location>=0){let U=F[O];if(U===void 0&&(O==="instanceMatrix"&&I.instanceMatrix&&(U=I.instanceMatrix),O==="instanceColor"&&I.instanceColor&&(U=I.instanceColor)),U!==void 0){const z=U.normalized,K=U.itemSize,Q=n.get(U);if(Q===void 0)continue;const oe=Q.buffer,ae=Q.type,he=Q.bytesPerElement,fe=i.isWebGL2===!0&&(ae===t.INT||ae===t.UNSIGNED_INT||U.gpuType===Cv);if(U.isInterleavedBufferAttribute){const ge=U.data,P=ge.stride,de=U.offset;if(ge.isInstancedInterleavedBuffer){for(let J=0;J<b.locationSize;J++)C(b.location+J,ge.meshPerAttribute);I.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let J=0;J<b.locationSize;J++)y(b.location+J);t.bindBuffer(t.ARRAY_BUFFER,oe);for(let J=0;J<b.locationSize;J++)T(b.location+J,K/b.locationSize,ae,z,P*he,(de+K/b.locationSize*J)*he,fe)}else{if(U.isInstancedBufferAttribute){for(let ge=0;ge<b.locationSize;ge++)C(b.location+ge,U.meshPerAttribute);I.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let ge=0;ge<b.locationSize;ge++)y(b.location+ge);t.bindBuffer(t.ARRAY_BUFFER,oe);for(let ge=0;ge<b.locationSize;ge++)T(b.location+ge,K/b.locationSize,ae,z,K*he,K/b.locationSize*ge*he,fe)}}else if(B!==void 0){const z=B[O];if(z!==void 0)switch(z.length){case 2:t.vertexAttrib2fv(b.location,z);break;case 3:t.vertexAttrib3fv(b.location,z);break;case 4:t.vertexAttrib4fv(b.location,z);break;default:t.vertexAttrib1fv(b.location,z)}}}}E()}function S(){W();for(const I in a){const H=a[I];for(const j in H){const Z=H[j];for(const F in Z)v(Z[F].object),delete Z[F];delete H[j]}delete a[I]}}function M(I){if(a[I.id]===void 0)return;const H=a[I.id];for(const j in H){const Z=H[j];for(const F in Z)v(Z[F].object),delete Z[F];delete H[j]}delete a[I.id]}function k(I){for(const H in a){const j=a[H];if(j[I.id]===void 0)continue;const Z=j[I.id];for(const F in Z)v(Z[F].object),delete Z[F];delete j[I.id]}}function W(){te(),c=!0,u!==l&&(u=l,p(u.object))}function te(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:W,resetDefaultState:te,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfProgram:k,initAttributes:m,enableAttribute:y,disableUnusedAttributes:E}}function M1(t,e,n,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,h){t.drawArrays(s,c,h),n.update(h,s,1)}function l(c,h,d){if(d===0)return;let p,v;if(r)p=t,v="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[v](s,c,h,d),n.update(h,s,d)}function u(c,h,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<d;v++)this.render(c[v],h[v]);else{p.multiDrawArraysWEBGL(s,c,0,h,0,d);let v=0;for(let x=0;x<d;x++)v+=h[x];n.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function w1(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),f=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),m=d>0,y=o||e.has("OES_texture_float"),C=m&&y,E=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:_,maxVaryings:f,maxFragmentUniforms:g,vertexTextures:m,floatFragmentTextures:y,floatVertexTextures:C,maxSamples:E}}function T1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new vr,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=c(h,d,0)},this.setState=function(h,d,p){const v=h.clippingPlanes,x=h.clipIntersection,_=h.clipShadows,f=t.get(h);if(!r||v===null||v.length===0||s&&!_)s?c(null):u();else{const g=s?0:i,m=g*4;let y=f.clippingState||null;l.value=y,y=c(v,d,m,p);for(let C=0;C!==m;++C)y[C]=n[C];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(h,d,p,v){const x=h!==null?h.length:0;let _=null;if(x!==0){if(_=l.value,v!==!0||_===null){const f=p+x*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(_===null||_.length<f)&&(_=new Float32Array(f));for(let m=0,y=p;m!==x;++m,y+=4)o.copy(h[m]).applyMatrix4(g,a),o.normal.toArray(_,y),_[y+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,_}}function A1(t){let e=new WeakMap;function n(o,a){return a===Ff?o.mapping=Gs:a===Of&&(o.mapping=Vs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ff||a===Of)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new zE(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Jv extends $v{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Es=4,gm=[.125,.215,.35,.446,.526,.582],Sr=20,Ac=new Jv,vm=new ze;let Rc=null,Cc=0,bc=0;const _r=(1+Math.sqrt(5))/2,as=1/_r,_m=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,_r,as),new G(0,_r,-as),new G(as,0,_r),new G(-as,0,_r),new G(_r,as,0),new G(-_r,as,0)];class xm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Rc=this._renderer.getRenderTarget(),Cc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Em(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Rc,Cc,bc),e.scissorTest=!1,el(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Gs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rc=this._renderer.getRenderTarget(),Cc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:ea,format:$n,colorSpace:Ci,depthBuffer:!1},r=ym(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ym(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=R1(s)),this._blurMaterial=C1(s,e,n)}return r}_compileMaterial(e){const n=new Fn(this._lodPlanes[0],e);this._renderer.compile(n,Ac)}_sceneToCubeUV(e,n,i,r){const a=new In(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,d=c.toneMapping;c.getClearColor(vm),c.toneMapping=er,c.autoClear=!1;const p=new Xv({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),v=new Fn(new Wr,p);let x=!1;const _=e.background;_?_.isColor&&(p.color.copy(_),e.background=null,x=!0):(p.color.copy(vm),x=!0);for(let f=0;f<6;f++){const g=f%3;g===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):g===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const m=this._cubeSize;el(r,g*m,f>2?m:0,m,m),c.setRenderTarget(r),x&&c.render(v,a),c.render(e,a)}v.geometry.dispose(),v.material.dispose(),c.toneMapping=d,c.autoClear=h,e.background=_}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Gs||e.mapping===Vs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Em()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Fn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;el(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Ac)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=_m[(r-1)%_m.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new Fn(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Sr-1),x=s/v,_=isFinite(s)?1+Math.floor(c*x):Sr;_>Sr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Sr}`);const f=[];let g=0;for(let T=0;T<Sr;++T){const D=T/x,S=Math.exp(-D*D/2);f.push(S),T===0?g+=S:T<_&&(g+=2*S)}for(let T=0;T<f.length;T++)f[T]=f[T]/g;d.envMap.value=e.texture,d.samples.value=_,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:m}=this;d.dTheta.value=v,d.mipInt.value=m-i;const y=this._sizeLods[r],C=3*y*(r>m-Es?r-m+Es:0),E=4*(this._cubeSize-y);el(n,C,E,3*y,2*y),l.setRenderTarget(n),l.render(h,Ac)}}function R1(t){const e=[],n=[],i=[];let r=t;const s=t-Es+1+gm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Es?l=gm[o-t+Es-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,h=1+u,d=[c,c,h,c,h,h,c,c,h,h,c,h],p=6,v=6,x=3,_=2,f=1,g=new Float32Array(x*v*p),m=new Float32Array(_*v*p),y=new Float32Array(f*v*p);for(let E=0;E<p;E++){const T=E%3*2/3-1,D=E>2?0:-1,S=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];g.set(S,x*v*E),m.set(d,_*v*E);const M=[E,E,E,E,E,E];y.set(M,f*v*E)}const C=new ti;C.setAttribute("position",new Qn(g,x)),C.setAttribute("uv",new Qn(m,_)),C.setAttribute("faceIndex",new Qn(y,f)),e.push(C),r>Es&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function ym(t,e,n){const i=new kr(t,e,n);return i.texture.mapping=gu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function el(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function C1(t,e,n){const i=new Float32Array(Sr),r=new G(0,1,0);return new Br({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$d(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Sm(){return new Br({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$d(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Em(){return new Br({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function $d(){return`

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
	`}function b1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Ff||l===Of,c=l===Gs||l===Vs;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new xm(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(u&&h&&h.height>0||c&&h&&r(h)){n===null&&(n=new xm(t));const d=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function P1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function L1(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const x=d.morphAttributes[v];for(let _=0,f=x.length;_<f;_++)e.remove(x[_])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const v in d)e.update(d[v],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const v in p){const x=p[v];for(let _=0,f=x.length;_<f;_++)e.update(x[_],t.ARRAY_BUFFER)}}function u(h){const d=[],p=h.index,v=h.attributes.position;let x=0;if(p!==null){const g=p.array;x=p.version;for(let m=0,y=g.length;m<y;m+=3){const C=g[m+0],E=g[m+1],T=g[m+2];d.push(C,E,E,T,T,C)}}else if(v!==void 0){const g=v.array;x=v.version;for(let m=0,y=g.length/3-1;m<y;m+=3){const C=m+0,E=m+1,T=m+2;d.push(C,E,E,T,T,C)}}else return;const _=new(zv(d)?Yv:jv)(d,1);_.version=x;const f=s.get(h);f&&e.remove(f),s.set(h,_)}function c(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function D1(t,e,n,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function c(p,v){t.drawElements(s,v,a,p*l),n.update(v,s,1)}function h(p,v,x){if(x===0)return;let _,f;if(r)_=t,f="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[f](s,v,a,p*l,x),n.update(v,s,x)}function d(p,v,x){if(x===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let f=0;f<x;f++)this.render(p[f]/l,v[f]);else{_.multiDrawElementsWEBGL(s,v,0,a,p,0,x);let f=0;for(let g=0;g<x;g++)f+=v[g];n.update(f,s,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=h,this.renderMultiDraw=d}function I1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function N1(t,e){return t[0]-e[0]}function U1(t,e){return Math.abs(e[1])-Math.abs(t[1])}function F1(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new It,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,h){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const v=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,x=v!==void 0?v.length:0;let _=s.get(c);if(_===void 0||_.count!==x){let H=function(){te.dispose(),s.delete(c),c.removeEventListener("dispose",H)};var p=H;_!==void 0&&_.texture.dispose();const m=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,C=c.morphAttributes.color!==void 0,E=c.morphAttributes.position||[],T=c.morphAttributes.normal||[],D=c.morphAttributes.color||[];let S=0;m===!0&&(S=1),y===!0&&(S=2),C===!0&&(S=3);let M=c.attributes.position.count*S,k=1;M>e.maxTextureSize&&(k=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const W=new Float32Array(M*k*4*x),te=new Hv(W,M,k,x);te.type=Vi,te.needsUpdate=!0;const I=S*4;for(let j=0;j<x;j++){const Z=E[j],F=T[j],L=D[j],B=M*k*4*j;for(let O=0;O<Z.count;O++){const b=O*I;m===!0&&(o.fromBufferAttribute(Z,O),W[B+b+0]=o.x,W[B+b+1]=o.y,W[B+b+2]=o.z,W[B+b+3]=0),y===!0&&(o.fromBufferAttribute(F,O),W[B+b+4]=o.x,W[B+b+5]=o.y,W[B+b+6]=o.z,W[B+b+7]=0),C===!0&&(o.fromBufferAttribute(L,O),W[B+b+8]=o.x,W[B+b+9]=o.y,W[B+b+10]=o.z,W[B+b+11]=L.itemSize===4?o.w:1)}}_={count:x,texture:te,size:new ye(M,k)},s.set(c,_),c.addEventListener("dispose",H)}let f=0;for(let m=0;m<d.length;m++)f+=d[m];const g=c.morphTargetsRelative?1:1-f;h.getUniforms().setValue(t,"morphTargetBaseInfluence",g),h.getUniforms().setValue(t,"morphTargetInfluences",d),h.getUniforms().setValue(t,"morphTargetsTexture",_.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",_.size)}else{const v=d===void 0?0:d.length;let x=i[c.id];if(x===void 0||x.length!==v){x=[];for(let y=0;y<v;y++)x[y]=[y,0];i[c.id]=x}for(let y=0;y<v;y++){const C=x[y];C[0]=y,C[1]=d[y]}x.sort(U1);for(let y=0;y<8;y++)y<v&&x[y][1]?(a[y][0]=x[y][0],a[y][1]=x[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(N1);const _=c.morphAttributes.position,f=c.morphAttributes.normal;let g=0;for(let y=0;y<8;y++){const C=a[y],E=C[0],T=C[1];E!==Number.MAX_SAFE_INTEGER&&T?(_&&c.getAttribute("morphTarget"+y)!==_[E]&&c.setAttribute("morphTarget"+y,_[E]),f&&c.getAttribute("morphNormal"+y)!==f[E]&&c.setAttribute("morphNormal"+y,f[E]),r[y]=T,g+=T):(_&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),f&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const m=c.morphTargetsRelative?1:1-g;h.getUniforms().setValue(t,"morphTargetBaseInfluence",m),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function O1(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,h=e.get(l,c);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class Qv extends vn{constructor(e,n,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:Pr,c!==Pr&&c!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Pr&&(i=Gi),i===void 0&&c===Ws&&(i=br),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const e_=new vn,t_=new Qv(1,1);t_.compareFunction=Ov;const n_=new Hv,i_=new SE,r_=new Kv,Mm=[],wm=[],Tm=new Float32Array(16),Am=new Float32Array(9),Rm=new Float32Array(4);function to(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Mm[r];if(s===void 0&&(s=new Float32Array(r),Mm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ct(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Su(t,e){let n=wm[e];n===void 0&&(n=new Int32Array(e),wm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function z1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function k1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),Ct(n,e)}}function B1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),Ct(n,e)}}function H1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),Ct(n,e)}}function G1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ct(n,e)}else{if(Rt(n,i))return;Rm.set(i),t.uniformMatrix2fv(this.addr,!1,Rm),Ct(n,i)}}function V1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ct(n,e)}else{if(Rt(n,i))return;Am.set(i),t.uniformMatrix3fv(this.addr,!1,Am),Ct(n,i)}}function W1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ct(n,e)}else{if(Rt(n,i))return;Tm.set(i),t.uniformMatrix4fv(this.addr,!1,Tm),Ct(n,i)}}function X1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function j1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),Ct(n,e)}}function Y1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),Ct(n,e)}}function q1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),Ct(n,e)}}function $1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function K1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),Ct(n,e)}}function Z1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),Ct(n,e)}}function J1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),Ct(n,e)}}function Q1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?t_:e_;n.setTexture2D(e||s,r)}function eT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||i_,r)}function tT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||r_,r)}function nT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||n_,r)}function iT(t){switch(t){case 5126:return z1;case 35664:return k1;case 35665:return B1;case 35666:return H1;case 35674:return G1;case 35675:return V1;case 35676:return W1;case 5124:case 35670:return X1;case 35667:case 35671:return j1;case 35668:case 35672:return Y1;case 35669:case 35673:return q1;case 5125:return $1;case 36294:return K1;case 36295:return Z1;case 36296:return J1;case 35678:case 36198:case 36298:case 36306:case 35682:return Q1;case 35679:case 36299:case 36307:return eT;case 35680:case 36300:case 36308:case 36293:return tT;case 36289:case 36303:case 36311:case 36292:return nT}}function rT(t,e){t.uniform1fv(this.addr,e)}function sT(t,e){const n=to(e,this.size,2);t.uniform2fv(this.addr,n)}function oT(t,e){const n=to(e,this.size,3);t.uniform3fv(this.addr,n)}function aT(t,e){const n=to(e,this.size,4);t.uniform4fv(this.addr,n)}function lT(t,e){const n=to(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function uT(t,e){const n=to(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function cT(t,e){const n=to(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function fT(t,e){t.uniform1iv(this.addr,e)}function dT(t,e){t.uniform2iv(this.addr,e)}function hT(t,e){t.uniform3iv(this.addr,e)}function pT(t,e){t.uniform4iv(this.addr,e)}function mT(t,e){t.uniform1uiv(this.addr,e)}function gT(t,e){t.uniform2uiv(this.addr,e)}function vT(t,e){t.uniform3uiv(this.addr,e)}function _T(t,e){t.uniform4uiv(this.addr,e)}function xT(t,e,n){const i=this.cache,r=e.length,s=Su(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||e_,s[o])}function yT(t,e,n){const i=this.cache,r=e.length,s=Su(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||i_,s[o])}function ST(t,e,n){const i=this.cache,r=e.length,s=Su(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||r_,s[o])}function ET(t,e,n){const i=this.cache,r=e.length,s=Su(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||n_,s[o])}function MT(t){switch(t){case 5126:return rT;case 35664:return sT;case 35665:return oT;case 35666:return aT;case 35674:return lT;case 35675:return uT;case 35676:return cT;case 5124:case 35670:return fT;case 35667:case 35671:return dT;case 35668:case 35672:return hT;case 35669:case 35673:return pT;case 5125:return mT;case 36294:return gT;case 36295:return vT;case 36296:return _T;case 35678:case 36198:case 36298:case 36306:case 35682:return xT;case 35679:case 36299:case 36307:return yT;case 35680:case 36300:case 36308:case 36293:return ST;case 36289:case 36303:case 36311:case 36292:return ET}}class wT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=iT(n.type)}}class TT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=MT(n.type)}}class AT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Pc=/(\w+)(\])?(\[|\.)?/g;function Cm(t,e){t.seq.push(e),t.map[e.id]=e}function RT(t,e,n){const i=t.name,r=i.length;for(Pc.lastIndex=0;;){const s=Pc.exec(i),o=Pc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Cm(n,u===void 0?new wT(a,t,e):new TT(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new AT(a),Cm(n,h)),n=h}}}class xl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);RT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function bm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const CT=37297;let bT=0;function PT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function LT(t){const e=et.getPrimaries(et.workingColorSpace),n=et.getPrimaries(t);let i;switch(e===n?i="":e===ql&&n===Yl?i="LinearDisplayP3ToLinearSRGB":e===Yl&&n===ql&&(i="LinearSRGBToLinearDisplayP3"),t){case Ci:case vu:return[i,"LinearTransferOETF"];case kt:case Yd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Pm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+PT(t.getShaderSource(e),o)}else return r}function DT(t,e){const n=LT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function IT(t,e){let n;switch(e){case WS:n="Linear";break;case XS:n="Reinhard";break;case jS:n="OptimizedCineon";break;case YS:n="ACESFilmic";break;case $S:n="AgX";break;case qS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function NT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ms).join(`
`)}function UT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ms).join(`
`)}function FT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function OT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ms(t){return t!==""}function Lm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gf(t){return t.replace(zT,BT)}const kT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function BT(t,e){let n=Ve[e];if(n===void 0){const i=kT.get(e);if(i!==void 0)n=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Gf(n)}const HT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Im(t){return t.replace(HT,GT)}function GT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Nm(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function VT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===wv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Tv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function WT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Gs:case Vs:e="ENVMAP_TYPE_CUBE";break;case gu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function XT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Vs:e="ENVMAP_MODE_REFRACTION";break}return e}function jT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Av:e="ENVMAP_BLENDING_MULTIPLY";break;case GS:e="ENVMAP_BLENDING_MIX";break;case VS:e="ENVMAP_BLENDING_ADD";break}return e}function YT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function qT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=VT(n),u=WT(n),c=XT(n),h=jT(n),d=YT(n),p=n.isWebGL2?"":NT(n),v=UT(n),x=FT(s),_=r.createProgram();let f,g,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ms).join(`
`),f.length>0&&(f+=`
`),g=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ms).join(`
`),g.length>0&&(g+=`
`)):(f=[Nm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),g=[p,Nm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==er?"#define TONE_MAPPING":"",n.toneMapping!==er?Ve.tonemapping_pars_fragment:"",n.toneMapping!==er?IT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,DT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ms).join(`
`)),o=Gf(o),o=Lm(o,n),o=Dm(o,n),a=Gf(a),a=Lm(a,n),a=Dm(a,n),o=Im(o),a=Im(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,f=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,g=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Jp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Jp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=m+f+o,C=m+g+a,E=bm(r,r.VERTEX_SHADER,y),T=bm(r,r.FRAGMENT_SHADER,C);r.attachShader(_,E),r.attachShader(_,T),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function D(W){if(t.debug.checkShaderErrors){const te=r.getProgramInfoLog(_).trim(),I=r.getShaderInfoLog(E).trim(),H=r.getShaderInfoLog(T).trim();let j=!0,Z=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,E,T);else{const F=Pm(r,E,"vertex"),L=Pm(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+te+`
`+F+`
`+L)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(I===""||H==="")&&(Z=!1);Z&&(W.diagnostics={runnable:j,programLog:te,vertexShader:{log:I,prefix:f},fragmentShader:{log:H,prefix:g}})}r.deleteShader(E),r.deleteShader(T),S=new xl(r,_),M=OT(r,_)}let S;this.getUniforms=function(){return S===void 0&&D(this),S};let M;this.getAttributes=function(){return M===void 0&&D(this),M};let k=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=r.getProgramParameter(_,CT)),k},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=bT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=T,this}let $T=0;class KT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new ZT(e),n.set(e,i)),i}}class ZT{constructor(e){this.id=$T++,this.code=e,this.usedTimes=0}}function JT(t,e,n,i,r,s,o){const a=new Vv,l=new KT,u=[],c=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return S===0?"uv":`uv${S}`}function _(S,M,k,W,te){const I=W.fog,H=te.geometry,j=S.isMeshStandardMaterial?W.environment:null,Z=(S.isMeshStandardMaterial?n:e).get(S.envMap||j),F=Z&&Z.mapping===gu?Z.image.height:null,L=v[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const B=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,O=B!==void 0?B.length:0;let b=0;H.morphAttributes.position!==void 0&&(b=1),H.morphAttributes.normal!==void 0&&(b=2),H.morphAttributes.color!==void 0&&(b=3);let U,z,K,Q;if(L){const Jt=si[L];U=Jt.vertexShader,z=Jt.fragmentShader}else U=S.vertexShader,z=S.fragmentShader,l.update(S),K=l.getVertexShaderID(S),Q=l.getFragmentShaderID(S);const oe=t.getRenderTarget(),ae=te.isInstancedMesh===!0,he=te.isBatchedMesh===!0,fe=!!S.map,ge=!!S.matcap,P=!!Z,de=!!S.aoMap,J=!!S.lightMap,ue=!!S.bumpMap,ee=!!S.normalMap,be=!!S.displacementMap,Ee=!!S.emissiveMap,A=!!S.metalnessMap,w=!!S.roughnessMap,X=S.anisotropy>0,le=S.clearcoat>0,re=S.iridescence>0,ne=S.sheen>0,Re=S.transmission>0,ve=X&&!!S.anisotropyMap,Te=le&&!!S.clearcoatMap,Le=le&&!!S.clearcoatNormalMap,Be=le&&!!S.clearcoatRoughnessMap,se=re&&!!S.iridescenceMap,Ze=re&&!!S.iridescenceThicknessMap,qe=ne&&!!S.sheenColorMap,Oe=ne&&!!S.sheenRoughnessMap,Pe=!!S.specularMap,Ae=!!S.specularColorMap,Ge=!!S.specularIntensityMap,Je=Re&&!!S.transmissionMap,mt=Re&&!!S.thicknessMap,Xe=!!S.gradientMap,pe=!!S.alphaMap,N=S.alphaTest>0,_e=!!S.alphaHash,xe=!!S.extensions,Ue=!!H.attributes.uv1,De=!!H.attributes.uv2,tt=!!H.attributes.uv3;let nt=er;return S.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(nt=t.toneMapping),{isWebGL2:c,shaderID:L,shaderType:S.type,shaderName:S.name,vertexShader:U,fragmentShader:z,defines:S.defines,customVertexShaderID:K,customFragmentShaderID:Q,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:he,instancing:ae,instancingColor:ae&&te.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Ci,map:fe,matcap:ge,envMap:P,envMapMode:P&&Z.mapping,envMapCubeUVHeight:F,aoMap:de,lightMap:J,bumpMap:ue,normalMap:ee,displacementMap:d&&be,emissiveMap:Ee,normalMapObjectSpace:ee&&S.normalMapType===aE,normalMapTangentSpace:ee&&S.normalMapType===Fv,metalnessMap:A,roughnessMap:w,anisotropy:X,anisotropyMap:ve,clearcoat:le,clearcoatMap:Te,clearcoatNormalMap:Le,clearcoatRoughnessMap:Be,iridescence:re,iridescenceMap:se,iridescenceThicknessMap:Ze,sheen:ne,sheenColorMap:qe,sheenRoughnessMap:Oe,specularMap:Pe,specularColorMap:Ae,specularIntensityMap:Ge,transmission:Re,transmissionMap:Je,thicknessMap:mt,gradientMap:Xe,opaque:S.transparent===!1&&S.blending===Ds,alphaMap:pe,alphaTest:N,alphaHash:_e,combine:S.combine,mapUv:fe&&x(S.map.channel),aoMapUv:de&&x(S.aoMap.channel),lightMapUv:J&&x(S.lightMap.channel),bumpMapUv:ue&&x(S.bumpMap.channel),normalMapUv:ee&&x(S.normalMap.channel),displacementMapUv:be&&x(S.displacementMap.channel),emissiveMapUv:Ee&&x(S.emissiveMap.channel),metalnessMapUv:A&&x(S.metalnessMap.channel),roughnessMapUv:w&&x(S.roughnessMap.channel),anisotropyMapUv:ve&&x(S.anisotropyMap.channel),clearcoatMapUv:Te&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Le&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&x(S.sheenRoughnessMap.channel),specularMapUv:Pe&&x(S.specularMap.channel),specularColorMapUv:Ae&&x(S.specularColorMap.channel),specularIntensityMapUv:Ge&&x(S.specularIntensityMap.channel),transmissionMapUv:Je&&x(S.transmissionMap.channel),thicknessMapUv:mt&&x(S.thicknessMap.channel),alphaMapUv:pe&&x(S.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ee||X),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:Ue,vertexUv2s:De,vertexUv3s:tt,pointsUvs:te.isPoints===!0&&!!H.attributes.uv&&(fe||pe),fog:!!I,useFog:S.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:te.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:b,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&k.length>0,shadowMapType:t.shadowMap.type,toneMapping:nt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:fe&&S.map.isVideoTexture===!0&&et.getTransfer(S.map.colorSpace)===ot,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===cn,flipSided:S.side===gn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:xe&&S.extensions.derivatives===!0,extensionFragDepth:xe&&S.extensions.fragDepth===!0,extensionDrawBuffers:xe&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:xe&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xe&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const k in S.defines)M.push(k),M.push(S.defines[k]);return S.isRawShaderMaterial===!1&&(g(M,S),m(M,S),M.push(t.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function g(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function m(S,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const M=v[S.type];let k;if(M){const W=si[M];k=NE.clone(W.uniforms)}else k=S.uniforms;return k}function C(S,M){let k;for(let W=0,te=u.length;W<te;W++){const I=u[W];if(I.cacheKey===M){k=I,++k.usedTimes;break}}return k===void 0&&(k=new qT(t,M,S,s),u.push(k)),k}function E(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function T(S){l.remove(S)}function D(){l.dispose()}return{getParameters:_,getProgramCacheKey:f,getUniforms:y,acquireProgram:C,releaseProgram:E,releaseShaderCache:T,programs:u,dispose:D}}function QT(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function eA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Um(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Fm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,p,v,x,_){let f=t[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:v,renderOrder:h.renderOrder,z:x,group:_},t[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=v,f.renderOrder=h.renderOrder,f.z=x,f.group=_),e++,f}function a(h,d,p,v,x,_){const f=o(h,d,p,v,x,_);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(h,d,p,v,x,_){const f=o(h,d,p,v,x,_);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function u(h,d){n.length>1&&n.sort(h||eA),i.length>1&&i.sort(d||Um),r.length>1&&r.sort(d||Um)}function c(){for(let h=e,d=t.length;h<d;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function tA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Fm,t.set(i,[o])):r>=s.length?(o=new Fm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function nA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new G,color:new ze};break;case"SpotLight":n={position:new G,direction:new G,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":n={color:new ze,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=n,n}}}function iA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let rA=0;function sA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function oA(t,e){const n=new nA,i=iA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new G);const s=new G,o=new yt,a=new yt;function l(c,h){let d=0,p=0,v=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let x=0,_=0,f=0,g=0,m=0,y=0,C=0,E=0,T=0,D=0,S=0;c.sort(sA);const M=h===!0?Math.PI:1;for(let W=0,te=c.length;W<te;W++){const I=c[W],H=I.color,j=I.intensity,Z=I.distance,F=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=H.r*j*M,p+=H.g*j*M,v+=H.b*j*M;else if(I.isLightProbe){for(let L=0;L<9;L++)r.probe[L].addScaledVector(I.sh.coefficients[L],j);S++}else if(I.isDirectionalLight){const L=n.get(I);if(L.color.copy(I.color).multiplyScalar(I.intensity*M),I.castShadow){const B=I.shadow,O=i.get(I);O.shadowBias=B.bias,O.shadowNormalBias=B.normalBias,O.shadowRadius=B.radius,O.shadowMapSize=B.mapSize,r.directionalShadow[x]=O,r.directionalShadowMap[x]=F,r.directionalShadowMatrix[x]=I.shadow.matrix,y++}r.directional[x]=L,x++}else if(I.isSpotLight){const L=n.get(I);L.position.setFromMatrixPosition(I.matrixWorld),L.color.copy(H).multiplyScalar(j*M),L.distance=Z,L.coneCos=Math.cos(I.angle),L.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),L.decay=I.decay,r.spot[f]=L;const B=I.shadow;if(I.map&&(r.spotLightMap[T]=I.map,T++,B.updateMatrices(I),I.castShadow&&D++),r.spotLightMatrix[f]=B.matrix,I.castShadow){const O=i.get(I);O.shadowBias=B.bias,O.shadowNormalBias=B.normalBias,O.shadowRadius=B.radius,O.shadowMapSize=B.mapSize,r.spotShadow[f]=O,r.spotShadowMap[f]=F,E++}f++}else if(I.isRectAreaLight){const L=n.get(I);L.color.copy(H).multiplyScalar(j),L.halfWidth.set(I.width*.5,0,0),L.halfHeight.set(0,I.height*.5,0),r.rectArea[g]=L,g++}else if(I.isPointLight){const L=n.get(I);if(L.color.copy(I.color).multiplyScalar(I.intensity*M),L.distance=I.distance,L.decay=I.decay,I.castShadow){const B=I.shadow,O=i.get(I);O.shadowBias=B.bias,O.shadowNormalBias=B.normalBias,O.shadowRadius=B.radius,O.shadowMapSize=B.mapSize,O.shadowCameraNear=B.camera.near,O.shadowCameraFar=B.camera.far,r.pointShadow[_]=O,r.pointShadowMap[_]=F,r.pointShadowMatrix[_]=I.shadow.matrix,C++}r.point[_]=L,_++}else if(I.isHemisphereLight){const L=n.get(I);L.skyColor.copy(I.color).multiplyScalar(j*M),L.groundColor.copy(I.groundColor).multiplyScalar(j*M),r.hemi[m]=L,m++}}g>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=v;const k=r.hash;(k.directionalLength!==x||k.pointLength!==_||k.spotLength!==f||k.rectAreaLength!==g||k.hemiLength!==m||k.numDirectionalShadows!==y||k.numPointShadows!==C||k.numSpotShadows!==E||k.numSpotMaps!==T||k.numLightProbes!==S)&&(r.directional.length=x,r.spot.length=f,r.rectArea.length=g,r.point.length=_,r.hemi.length=m,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=E+T-D,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=S,k.directionalLength=x,k.pointLength=_,k.spotLength=f,k.rectAreaLength=g,k.hemiLength=m,k.numDirectionalShadows=y,k.numPointShadows=C,k.numSpotShadows=E,k.numSpotMaps=T,k.numLightProbes=S,r.version=rA++)}function u(c,h){let d=0,p=0,v=0,x=0,_=0;const f=h.matrixWorldInverse;for(let g=0,m=c.length;g<m;g++){const y=c[g];if(y.isDirectionalLight){const C=r.directional[d];C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(f),d++}else if(y.isSpotLight){const C=r.spot[v];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(f),C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(f),v++}else if(y.isRectAreaLight){const C=r.rectArea[x];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(f),a.identity(),o.copy(y.matrixWorld),o.premultiply(f),a.extractRotation(o),C.halfWidth.set(y.width*.5,0,0),C.halfHeight.set(0,y.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const C=r.point[p];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const C=r.hemi[_];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(f),_++}}}return{setup:l,setupView:u,state:r}}function Om(t,e){const n=new oA(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function u(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function aA(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Om(t,e),n.set(s,[l])):o>=a.length?(l=new Om(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class lA extends eo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uA extends eo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fA=`uniform sampler2D shadow_pass;
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
}`;function dA(t,e,n){let i=new qd;const r=new ye,s=new ye,o=new It,a=new lA({depthPacking:oE}),l=new uA,u={},c=n.maxTextureSize,h={[sr]:gn,[gn]:sr,[cn]:cn},d=new Br({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:cA,fragmentShader:fA}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new ti;v.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Fn(v,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wv;let f=this.type;this.render=function(E,T,D){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||E.length===0)return;const S=t.getRenderTarget(),M=t.getActiveCubeFace(),k=t.getActiveMipmapLevel(),W=t.state;W.setBlending(Qi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const te=f!==gi&&this.type===gi,I=f===gi&&this.type!==gi;for(let H=0,j=E.length;H<j;H++){const Z=E[H],F=Z.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const L=F.getFrameExtents();if(r.multiply(L),s.copy(F.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/L.x),r.x=s.x*L.x,F.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/L.y),r.y=s.y*L.y,F.mapSize.y=s.y)),F.map===null||te===!0||I===!0){const O=this.type!==gi?{minFilter:nn,magFilter:nn}:{};F.map!==null&&F.map.dispose(),F.map=new kr(r.x,r.y,O),F.map.texture.name=Z.name+".shadowMap",F.camera.updateProjectionMatrix()}t.setRenderTarget(F.map),t.clear();const B=F.getViewportCount();for(let O=0;O<B;O++){const b=F.getViewport(O);o.set(s.x*b.x,s.y*b.y,s.x*b.z,s.y*b.w),W.viewport(o),F.updateMatrices(Z,O),i=F.getFrustum(),y(T,D,F.camera,Z,this.type)}F.isPointLightShadow!==!0&&this.type===gi&&g(F,D),F.needsUpdate=!1}f=this.type,_.needsUpdate=!1,t.setRenderTarget(S,M,k)};function g(E,T){const D=e.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new kr(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(T,null,D,d,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(T,null,D,p,x,null)}function m(E,T,D,S){let M=null;const k=D.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(k!==void 0)M=k;else if(M=D.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const W=M.uuid,te=T.uuid;let I=u[W];I===void 0&&(I={},u[W]=I);let H=I[te];H===void 0&&(H=M.clone(),I[te]=H,T.addEventListener("dispose",C)),M=H}if(M.visible=T.visible,M.wireframe=T.wireframe,S===gi?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:h[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const W=t.properties.get(M);W.light=D}return M}function y(E,T,D,S,M){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===gi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,E.matrixWorld);const te=e.update(E),I=E.material;if(Array.isArray(I)){const H=te.groups;for(let j=0,Z=H.length;j<Z;j++){const F=H[j],L=I[F.materialIndex];if(L&&L.visible){const B=m(E,L,S,M);E.onBeforeShadow(t,E,T,D,te,B,F),t.renderBufferDirect(D,null,te,B,E,F),E.onAfterShadow(t,E,T,D,te,B,F)}}}else if(I.visible){const H=m(E,I,S,M);E.onBeforeShadow(t,E,T,D,te,H,null),t.renderBufferDirect(D,null,te,H,E,null),E.onAfterShadow(t,E,T,D,te,H,null)}}const W=E.children;for(let te=0,I=W.length;te<I;te++)y(W[te],T,D,S,M)}function C(E){E.target.removeEventListener("dispose",C);for(const D in u){const S=u[D],M=E.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}function hA(t,e,n){const i=n.isWebGL2;function r(){let N=!1;const _e=new It;let xe=null;const Ue=new It(0,0,0,0);return{setMask:function(De){xe!==De&&!N&&(t.colorMask(De,De,De,De),xe=De)},setLocked:function(De){N=De},setClear:function(De,tt,nt,bt,Jt){Jt===!0&&(De*=bt,tt*=bt,nt*=bt),_e.set(De,tt,nt,bt),Ue.equals(_e)===!1&&(t.clearColor(De,tt,nt,bt),Ue.copy(_e))},reset:function(){N=!1,xe=null,Ue.set(-1,0,0,0)}}}function s(){let N=!1,_e=null,xe=null,Ue=null;return{setTest:function(De){De?he(t.DEPTH_TEST):fe(t.DEPTH_TEST)},setMask:function(De){_e!==De&&!N&&(t.depthMask(De),_e=De)},setFunc:function(De){if(xe!==De){switch(De){case US:t.depthFunc(t.NEVER);break;case FS:t.depthFunc(t.ALWAYS);break;case OS:t.depthFunc(t.LESS);break;case Xl:t.depthFunc(t.LEQUAL);break;case zS:t.depthFunc(t.EQUAL);break;case kS:t.depthFunc(t.GEQUAL);break;case BS:t.depthFunc(t.GREATER);break;case HS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}xe=De}},setLocked:function(De){N=De},setClear:function(De){Ue!==De&&(t.clearDepth(De),Ue=De)},reset:function(){N=!1,_e=null,xe=null,Ue=null}}}function o(){let N=!1,_e=null,xe=null,Ue=null,De=null,tt=null,nt=null,bt=null,Jt=null;return{setTest:function(it){N||(it?he(t.STENCIL_TEST):fe(t.STENCIL_TEST))},setMask:function(it){_e!==it&&!N&&(t.stencilMask(it),_e=it)},setFunc:function(it,Qt,ni){(xe!==it||Ue!==Qt||De!==ni)&&(t.stencilFunc(it,Qt,ni),xe=it,Ue=Qt,De=ni)},setOp:function(it,Qt,ni){(tt!==it||nt!==Qt||bt!==ni)&&(t.stencilOp(it,Qt,ni),tt=it,nt=Qt,bt=ni)},setLocked:function(it){N=it},setClear:function(it){Jt!==it&&(t.clearStencil(it),Jt=it)},reset:function(){N=!1,_e=null,xe=null,Ue=null,De=null,tt=null,nt=null,bt=null,Jt=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,h=new WeakMap;let d={},p={},v=new WeakMap,x=[],_=null,f=!1,g=null,m=null,y=null,C=null,E=null,T=null,D=null,S=new ze(0,0,0),M=0,k=!1,W=null,te=null,I=null,H=null,j=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,L=0;const B=t.getParameter(t.VERSION);B.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(B)[1]),F=L>=1):B.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),F=L>=2);let O=null,b={};const U=t.getParameter(t.SCISSOR_BOX),z=t.getParameter(t.VIEWPORT),K=new It().fromArray(U),Q=new It().fromArray(z);function oe(N,_e,xe,Ue){const De=new Uint8Array(4),tt=t.createTexture();t.bindTexture(N,tt),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let nt=0;nt<xe;nt++)i&&(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)?t.texImage3D(_e,0,t.RGBA,1,1,Ue,0,t.RGBA,t.UNSIGNED_BYTE,De):t.texImage2D(_e+nt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,De);return tt}const ae={};ae[t.TEXTURE_2D]=oe(t.TEXTURE_2D,t.TEXTURE_2D,1),ae[t.TEXTURE_CUBE_MAP]=oe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ae[t.TEXTURE_2D_ARRAY]=oe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ae[t.TEXTURE_3D]=oe(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),he(t.DEPTH_TEST),l.setFunc(Xl),Ee(!1),A(_p),he(t.CULL_FACE),ee(Qi);function he(N){d[N]!==!0&&(t.enable(N),d[N]=!0)}function fe(N){d[N]!==!1&&(t.disable(N),d[N]=!1)}function ge(N,_e){return p[N]!==_e?(t.bindFramebuffer(N,_e),p[N]=_e,i&&(N===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=_e),N===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=_e)),!0):!1}function P(N,_e){let xe=x,Ue=!1;if(N)if(xe=v.get(_e),xe===void 0&&(xe=[],v.set(_e,xe)),N.isWebGLMultipleRenderTargets){const De=N.texture;if(xe.length!==De.length||xe[0]!==t.COLOR_ATTACHMENT0){for(let tt=0,nt=De.length;tt<nt;tt++)xe[tt]=t.COLOR_ATTACHMENT0+tt;xe.length=De.length,Ue=!0}}else xe[0]!==t.COLOR_ATTACHMENT0&&(xe[0]=t.COLOR_ATTACHMENT0,Ue=!0);else xe[0]!==t.BACK&&(xe[0]=t.BACK,Ue=!0);Ue&&(n.isWebGL2?t.drawBuffers(xe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(xe))}function de(N){return _!==N?(t.useProgram(N),_=N,!0):!1}const J={[yr]:t.FUNC_ADD,[yS]:t.FUNC_SUBTRACT,[SS]:t.FUNC_REVERSE_SUBTRACT};if(i)J[Ep]=t.MIN,J[Mp]=t.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(J[Ep]=N.MIN_EXT,J[Mp]=N.MAX_EXT)}const ue={[ES]:t.ZERO,[MS]:t.ONE,[wS]:t.SRC_COLOR,[Nf]:t.SRC_ALPHA,[PS]:t.SRC_ALPHA_SATURATE,[CS]:t.DST_COLOR,[AS]:t.DST_ALPHA,[TS]:t.ONE_MINUS_SRC_COLOR,[Uf]:t.ONE_MINUS_SRC_ALPHA,[bS]:t.ONE_MINUS_DST_COLOR,[RS]:t.ONE_MINUS_DST_ALPHA,[LS]:t.CONSTANT_COLOR,[DS]:t.ONE_MINUS_CONSTANT_COLOR,[IS]:t.CONSTANT_ALPHA,[NS]:t.ONE_MINUS_CONSTANT_ALPHA};function ee(N,_e,xe,Ue,De,tt,nt,bt,Jt,it){if(N===Qi){f===!0&&(fe(t.BLEND),f=!1);return}if(f===!1&&(he(t.BLEND),f=!0),N!==xS){if(N!==g||it!==k){if((m!==yr||E!==yr)&&(t.blendEquation(t.FUNC_ADD),m=yr,E=yr),it)switch(N){case Ds:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case xp:t.blendFunc(t.ONE,t.ONE);break;case yp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Sp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ds:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case xp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case yp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Sp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,C=null,T=null,D=null,S.set(0,0,0),M=0,g=N,k=it}return}De=De||_e,tt=tt||xe,nt=nt||Ue,(_e!==m||De!==E)&&(t.blendEquationSeparate(J[_e],J[De]),m=_e,E=De),(xe!==y||Ue!==C||tt!==T||nt!==D)&&(t.blendFuncSeparate(ue[xe],ue[Ue],ue[tt],ue[nt]),y=xe,C=Ue,T=tt,D=nt),(bt.equals(S)===!1||Jt!==M)&&(t.blendColor(bt.r,bt.g,bt.b,Jt),S.copy(bt),M=Jt),g=N,k=!1}function be(N,_e){N.side===cn?fe(t.CULL_FACE):he(t.CULL_FACE);let xe=N.side===gn;_e&&(xe=!xe),Ee(xe),N.blending===Ds&&N.transparent===!1?ee(Qi):ee(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const Ue=N.stencilWrite;u.setTest(Ue),Ue&&(u.setMask(N.stencilWriteMask),u.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),u.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),X(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?he(t.SAMPLE_ALPHA_TO_COVERAGE):fe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(N){W!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),W=N)}function A(N){N!==vS?(he(t.CULL_FACE),N!==te&&(N===_p?t.cullFace(t.BACK):N===_S?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):fe(t.CULL_FACE),te=N}function w(N){N!==I&&(F&&t.lineWidth(N),I=N)}function X(N,_e,xe){N?(he(t.POLYGON_OFFSET_FILL),(H!==_e||j!==xe)&&(t.polygonOffset(_e,xe),H=_e,j=xe)):fe(t.POLYGON_OFFSET_FILL)}function le(N){N?he(t.SCISSOR_TEST):fe(t.SCISSOR_TEST)}function re(N){N===void 0&&(N=t.TEXTURE0+Z-1),O!==N&&(t.activeTexture(N),O=N)}function ne(N,_e,xe){xe===void 0&&(O===null?xe=t.TEXTURE0+Z-1:xe=O);let Ue=b[xe];Ue===void 0&&(Ue={type:void 0,texture:void 0},b[xe]=Ue),(Ue.type!==N||Ue.texture!==_e)&&(O!==xe&&(t.activeTexture(xe),O=xe),t.bindTexture(N,_e||ae[N]),Ue.type=N,Ue.texture=_e)}function Re(){const N=b[O];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ve(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Be(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ze(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function qe(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Oe(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ae(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ge(N){K.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),K.copy(N))}function Je(N){Q.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),Q.copy(N))}function mt(N,_e){let xe=h.get(_e);xe===void 0&&(xe=new WeakMap,h.set(_e,xe));let Ue=xe.get(N);Ue===void 0&&(Ue=t.getUniformBlockIndex(_e,N.name),xe.set(N,Ue))}function Xe(N,_e){const Ue=h.get(_e).get(N);c.get(_e)!==Ue&&(t.uniformBlockBinding(_e,Ue,N.__bindingPointIndex),c.set(_e,Ue))}function pe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},O=null,b={},p={},v=new WeakMap,x=[],_=null,f=!1,g=null,m=null,y=null,C=null,E=null,T=null,D=null,S=new ze(0,0,0),M=0,k=!1,W=null,te=null,I=null,H=null,j=null,K.set(0,0,t.canvas.width,t.canvas.height),Q.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:he,disable:fe,bindFramebuffer:ge,drawBuffers:P,useProgram:de,setBlending:ee,setMaterial:be,setFlipSided:Ee,setCullFace:A,setLineWidth:w,setPolygonOffset:X,setScissorTest:le,activeTexture:re,bindTexture:ne,unbindTexture:Re,compressedTexImage2D:ve,compressedTexImage3D:Te,texImage2D:Pe,texImage3D:Ae,updateUBOMapping:mt,uniformBlockBinding:Xe,texStorage2D:qe,texStorage3D:Oe,texSubImage2D:Le,texSubImage3D:Be,compressedTexSubImage2D:se,compressedTexSubImage3D:Ze,scissor:Ge,viewport:Je,reset:pe}}function pA(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,w){return p?new OffscreenCanvas(A,w):Kl("canvas")}function x(A,w,X,le){let re=1;if((A.width>le||A.height>le)&&(re=le/Math.max(A.width,A.height)),re<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ne=w?Hf:Math.floor,Re=ne(re*A.width),ve=ne(re*A.height);h===void 0&&(h=v(Re,ve));const Te=X?v(Re,ve):h;return Te.width=Re,Te.height=ve,Te.getContext("2d").drawImage(A,0,0,Re,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Re+"x"+ve+")."),Te}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function _(A){return Qp(A.width)&&Qp(A.height)}function f(A){return a?!1:A.wrapS!==qn||A.wrapT!==qn||A.minFilter!==nn&&A.minFilter!==Dn}function g(A,w){return A.generateMipmaps&&w&&A.minFilter!==nn&&A.minFilter!==Dn}function m(A){t.generateMipmap(A)}function y(A,w,X,le,re=!1){if(a===!1)return w;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ne=w;if(w===t.RED&&(X===t.FLOAT&&(ne=t.R32F),X===t.HALF_FLOAT&&(ne=t.R16F),X===t.UNSIGNED_BYTE&&(ne=t.R8)),w===t.RED_INTEGER&&(X===t.UNSIGNED_BYTE&&(ne=t.R8UI),X===t.UNSIGNED_SHORT&&(ne=t.R16UI),X===t.UNSIGNED_INT&&(ne=t.R32UI),X===t.BYTE&&(ne=t.R8I),X===t.SHORT&&(ne=t.R16I),X===t.INT&&(ne=t.R32I)),w===t.RG&&(X===t.FLOAT&&(ne=t.RG32F),X===t.HALF_FLOAT&&(ne=t.RG16F),X===t.UNSIGNED_BYTE&&(ne=t.RG8)),w===t.RGBA){const Re=re?jl:et.getTransfer(le);X===t.FLOAT&&(ne=t.RGBA32F),X===t.HALF_FLOAT&&(ne=t.RGBA16F),X===t.UNSIGNED_BYTE&&(ne=Re===ot?t.SRGB8_ALPHA8:t.RGBA8),X===t.UNSIGNED_SHORT_4_4_4_4&&(ne=t.RGBA4),X===t.UNSIGNED_SHORT_5_5_5_1&&(ne=t.RGB5_A1)}return(ne===t.R16F||ne===t.R32F||ne===t.RG16F||ne===t.RG32F||ne===t.RGBA16F||ne===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function C(A,w,X){return g(A,X)===!0||A.isFramebufferTexture&&A.minFilter!==nn&&A.minFilter!==Dn?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function E(A){return A===nn||A===wp||A===tc?t.NEAREST:t.LINEAR}function T(A){const w=A.target;w.removeEventListener("dispose",T),S(w),w.isVideoTexture&&c.delete(w)}function D(A){const w=A.target;w.removeEventListener("dispose",D),k(w)}function S(A){const w=i.get(A);if(w.__webglInit===void 0)return;const X=A.source,le=d.get(X);if(le){const re=le[w.__cacheKey];re.usedTimes--,re.usedTimes===0&&M(A),Object.keys(le).length===0&&d.delete(X)}i.remove(A)}function M(A){const w=i.get(A);t.deleteTexture(w.__webglTexture);const X=A.source,le=d.get(X);delete le[w.__cacheKey],o.memory.textures--}function k(A){const w=A.texture,X=i.get(A),le=i.get(w);if(le.__webglTexture!==void 0&&(t.deleteTexture(le.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(X.__webglFramebuffer[re]))for(let ne=0;ne<X.__webglFramebuffer[re].length;ne++)t.deleteFramebuffer(X.__webglFramebuffer[re][ne]);else t.deleteFramebuffer(X.__webglFramebuffer[re]);X.__webglDepthbuffer&&t.deleteRenderbuffer(X.__webglDepthbuffer[re])}else{if(Array.isArray(X.__webglFramebuffer))for(let re=0;re<X.__webglFramebuffer.length;re++)t.deleteFramebuffer(X.__webglFramebuffer[re]);else t.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&t.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&t.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let re=0;re<X.__webglColorRenderbuffer.length;re++)X.__webglColorRenderbuffer[re]&&t.deleteRenderbuffer(X.__webglColorRenderbuffer[re]);X.__webglDepthRenderbuffer&&t.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let re=0,ne=w.length;re<ne;re++){const Re=i.get(w[re]);Re.__webglTexture&&(t.deleteTexture(Re.__webglTexture),o.memory.textures--),i.remove(w[re])}i.remove(w),i.remove(A)}let W=0;function te(){W=0}function I(){const A=W;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),W+=1,A}function H(A){const w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.colorSpace),w.join()}function j(A,w){const X=i.get(A);if(A.isVideoTexture&&be(A),A.isRenderTargetTexture===!1&&A.version>0&&X.__version!==A.version){const le=A.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(X,A,w);return}}n.bindTexture(t.TEXTURE_2D,X.__webglTexture,t.TEXTURE0+w)}function Z(A,w){const X=i.get(A);if(A.version>0&&X.__version!==A.version){K(X,A,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,X.__webglTexture,t.TEXTURE0+w)}function F(A,w){const X=i.get(A);if(A.version>0&&X.__version!==A.version){K(X,A,w);return}n.bindTexture(t.TEXTURE_3D,X.__webglTexture,t.TEXTURE0+w)}function L(A,w){const X=i.get(A);if(A.version>0&&X.__version!==A.version){Q(X,A,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture,t.TEXTURE0+w)}const B={[zr]:t.REPEAT,[qn]:t.CLAMP_TO_EDGE,[zf]:t.MIRRORED_REPEAT},O={[nn]:t.NEAREST,[wp]:t.NEAREST_MIPMAP_NEAREST,[tc]:t.NEAREST_MIPMAP_LINEAR,[Dn]:t.LINEAR,[KS]:t.LINEAR_MIPMAP_NEAREST,[Qo]:t.LINEAR_MIPMAP_LINEAR},b={[lE]:t.NEVER,[pE]:t.ALWAYS,[uE]:t.LESS,[Ov]:t.LEQUAL,[cE]:t.EQUAL,[hE]:t.GEQUAL,[fE]:t.GREATER,[dE]:t.NOTEQUAL};function U(A,w,X){if(X?(t.texParameteri(A,t.TEXTURE_WRAP_S,B[w.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,B[w.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,B[w.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,O[w.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,O[w.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(w.wrapS!==qn||w.wrapT!==qn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,E(w.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,E(w.minFilter)),w.minFilter!==nn&&w.minFilter!==Dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,b[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const le=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===nn||w.minFilter!==tc&&w.minFilter!==Qo||w.type===Vi&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===ea&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(t.texParameterf(A,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function z(A,w){let X=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",T));const le=w.source;let re=d.get(le);re===void 0&&(re={},d.set(le,re));const ne=H(w);if(ne!==A.__cacheKey){re[ne]===void 0&&(re[ne]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,X=!0),re[ne].usedTimes++;const Re=re[A.__cacheKey];Re!==void 0&&(re[A.__cacheKey].usedTimes--,Re.usedTimes===0&&M(w)),A.__cacheKey=ne,A.__webglTexture=re[ne].texture}return X}function K(A,w,X){let le=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(le=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(le=t.TEXTURE_3D);const re=z(A,w),ne=w.source;n.bindTexture(le,A.__webglTexture,t.TEXTURE0+X);const Re=i.get(ne);if(ne.version!==Re.__version||re===!0){n.activeTexture(t.TEXTURE0+X);const ve=et.getPrimaries(et.workingColorSpace),Te=w.colorSpace===Nn?null:et.getPrimaries(w.colorSpace),Le=w.colorSpace===Nn||ve===Te?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Be=f(w)&&_(w.image)===!1;let se=x(w.image,Be,!1,r.maxTextureSize);se=Ee(w,se);const Ze=_(se)||a,qe=s.convert(w.format,w.colorSpace);let Oe=s.convert(w.type),Pe=y(w.internalFormat,qe,Oe,w.colorSpace,w.isVideoTexture);U(le,w,Ze);let Ae;const Ge=w.mipmaps,Je=a&&w.isVideoTexture!==!0&&Pe!==Nv,mt=Re.__version===void 0||re===!0,Xe=C(w,se,Ze);if(w.isDepthTexture)Pe=t.DEPTH_COMPONENT,a?w.type===Vi?Pe=t.DEPTH_COMPONENT32F:w.type===Gi?Pe=t.DEPTH_COMPONENT24:w.type===br?Pe=t.DEPTH24_STENCIL8:Pe=t.DEPTH_COMPONENT16:w.type===Vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Pr&&Pe===t.DEPTH_COMPONENT&&w.type!==jd&&w.type!==Gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Gi,Oe=s.convert(w.type)),w.format===Ws&&Pe===t.DEPTH_COMPONENT&&(Pe=t.DEPTH_STENCIL,w.type!==br&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=br,Oe=s.convert(w.type))),mt&&(Je?n.texStorage2D(t.TEXTURE_2D,1,Pe,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Pe,se.width,se.height,0,qe,Oe,null));else if(w.isDataTexture)if(Ge.length>0&&Ze){Je&&mt&&n.texStorage2D(t.TEXTURE_2D,Xe,Pe,Ge[0].width,Ge[0].height);for(let pe=0,N=Ge.length;pe<N;pe++)Ae=Ge[pe],Je?n.texSubImage2D(t.TEXTURE_2D,pe,0,0,Ae.width,Ae.height,qe,Oe,Ae.data):n.texImage2D(t.TEXTURE_2D,pe,Pe,Ae.width,Ae.height,0,qe,Oe,Ae.data);w.generateMipmaps=!1}else Je?(mt&&n.texStorage2D(t.TEXTURE_2D,Xe,Pe,se.width,se.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,qe,Oe,se.data)):n.texImage2D(t.TEXTURE_2D,0,Pe,se.width,se.height,0,qe,Oe,se.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Je&&mt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Xe,Pe,Ge[0].width,Ge[0].height,se.depth);for(let pe=0,N=Ge.length;pe<N;pe++)Ae=Ge[pe],w.format!==$n?qe!==null?Je?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,pe,0,0,0,Ae.width,Ae.height,se.depth,qe,Ae.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,pe,Pe,Ae.width,Ae.height,se.depth,0,Ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?n.texSubImage3D(t.TEXTURE_2D_ARRAY,pe,0,0,0,Ae.width,Ae.height,se.depth,qe,Oe,Ae.data):n.texImage3D(t.TEXTURE_2D_ARRAY,pe,Pe,Ae.width,Ae.height,se.depth,0,qe,Oe,Ae.data)}else{Je&&mt&&n.texStorage2D(t.TEXTURE_2D,Xe,Pe,Ge[0].width,Ge[0].height);for(let pe=0,N=Ge.length;pe<N;pe++)Ae=Ge[pe],w.format!==$n?qe!==null?Je?n.compressedTexSubImage2D(t.TEXTURE_2D,pe,0,0,Ae.width,Ae.height,qe,Ae.data):n.compressedTexImage2D(t.TEXTURE_2D,pe,Pe,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?n.texSubImage2D(t.TEXTURE_2D,pe,0,0,Ae.width,Ae.height,qe,Oe,Ae.data):n.texImage2D(t.TEXTURE_2D,pe,Pe,Ae.width,Ae.height,0,qe,Oe,Ae.data)}else if(w.isDataArrayTexture)Je?(mt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Xe,Pe,se.width,se.height,se.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,qe,Oe,se.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,se.width,se.height,se.depth,0,qe,Oe,se.data);else if(w.isData3DTexture)Je?(mt&&n.texStorage3D(t.TEXTURE_3D,Xe,Pe,se.width,se.height,se.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,qe,Oe,se.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,se.width,se.height,se.depth,0,qe,Oe,se.data);else if(w.isFramebufferTexture){if(mt)if(Je)n.texStorage2D(t.TEXTURE_2D,Xe,Pe,se.width,se.height);else{let pe=se.width,N=se.height;for(let _e=0;_e<Xe;_e++)n.texImage2D(t.TEXTURE_2D,_e,Pe,pe,N,0,qe,Oe,null),pe>>=1,N>>=1}}else if(Ge.length>0&&Ze){Je&&mt&&n.texStorage2D(t.TEXTURE_2D,Xe,Pe,Ge[0].width,Ge[0].height);for(let pe=0,N=Ge.length;pe<N;pe++)Ae=Ge[pe],Je?n.texSubImage2D(t.TEXTURE_2D,pe,0,0,qe,Oe,Ae):n.texImage2D(t.TEXTURE_2D,pe,Pe,qe,Oe,Ae);w.generateMipmaps=!1}else Je?(mt&&n.texStorage2D(t.TEXTURE_2D,Xe,Pe,se.width,se.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,qe,Oe,se)):n.texImage2D(t.TEXTURE_2D,0,Pe,qe,Oe,se);g(w,Ze)&&m(le),Re.__version=ne.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function Q(A,w,X){if(w.image.length!==6)return;const le=z(A,w),re=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+X);const ne=i.get(re);if(re.version!==ne.__version||le===!0){n.activeTexture(t.TEXTURE0+X);const Re=et.getPrimaries(et.workingColorSpace),ve=w.colorSpace===Nn?null:et.getPrimaries(w.colorSpace),Te=w.colorSpace===Nn||Re===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Le=w.isCompressedTexture||w.image[0].isCompressedTexture,Be=w.image[0]&&w.image[0].isDataTexture,se=[];for(let pe=0;pe<6;pe++)!Le&&!Be?se[pe]=x(w.image[pe],!1,!0,r.maxCubemapSize):se[pe]=Be?w.image[pe].image:w.image[pe],se[pe]=Ee(w,se[pe]);const Ze=se[0],qe=_(Ze)||a,Oe=s.convert(w.format,w.colorSpace),Pe=s.convert(w.type),Ae=y(w.internalFormat,Oe,Pe,w.colorSpace),Ge=a&&w.isVideoTexture!==!0,Je=ne.__version===void 0||le===!0;let mt=C(w,Ze,qe);U(t.TEXTURE_CUBE_MAP,w,qe);let Xe;if(Le){Ge&&Je&&n.texStorage2D(t.TEXTURE_CUBE_MAP,mt,Ae,Ze.width,Ze.height);for(let pe=0;pe<6;pe++){Xe=se[pe].mipmaps;for(let N=0;N<Xe.length;N++){const _e=Xe[N];w.format!==$n?Oe!==null?Ge?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,N,0,0,_e.width,_e.height,Oe,_e.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,N,Ae,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,N,0,0,_e.width,_e.height,Oe,Pe,_e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,N,Ae,_e.width,_e.height,0,Oe,Pe,_e.data)}}}else{Xe=w.mipmaps,Ge&&Je&&(Xe.length>0&&mt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,mt,Ae,se[0].width,se[0].height));for(let pe=0;pe<6;pe++)if(Be){Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,se[pe].width,se[pe].height,Oe,Pe,se[pe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Ae,se[pe].width,se[pe].height,0,Oe,Pe,se[pe].data);for(let N=0;N<Xe.length;N++){const xe=Xe[N].image[pe].image;Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,N+1,0,0,xe.width,xe.height,Oe,Pe,xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,N+1,Ae,xe.width,xe.height,0,Oe,Pe,xe.data)}}else{Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Oe,Pe,se[pe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Ae,Oe,Pe,se[pe]);for(let N=0;N<Xe.length;N++){const _e=Xe[N];Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,N+1,0,0,Oe,Pe,_e.image[pe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,N+1,Ae,Oe,Pe,_e.image[pe])}}}g(w,qe)&&m(t.TEXTURE_CUBE_MAP),ne.__version=re.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function oe(A,w,X,le,re,ne){const Re=s.convert(X.format,X.colorSpace),ve=s.convert(X.type),Te=y(X.internalFormat,Re,ve,X.colorSpace);if(!i.get(w).__hasExternalTextures){const Be=Math.max(1,w.width>>ne),se=Math.max(1,w.height>>ne);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,ne,Te,Be,se,w.depth,0,Re,ve,null):n.texImage2D(re,ne,Te,Be,se,0,Re,ve,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),ee(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,le,re,i.get(X).__webglTexture,0,ue(w)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,le,re,i.get(X).__webglTexture,ne),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ae(A,w,X){if(t.bindRenderbuffer(t.RENDERBUFFER,A),w.depthBuffer&&!w.stencilBuffer){let le=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(X||ee(w)){const re=w.depthTexture;re&&re.isDepthTexture&&(re.type===Vi?le=t.DEPTH_COMPONENT32F:re.type===Gi&&(le=t.DEPTH_COMPONENT24));const ne=ue(w);ee(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,le,w.width,w.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,le,w.width,w.height)}else t.renderbufferStorage(t.RENDERBUFFER,le,w.width,w.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(w.depthBuffer&&w.stencilBuffer){const le=ue(w);X&&ee(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,t.DEPTH24_STENCIL8,w.width,w.height):ee(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,t.DEPTH24_STENCIL8,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const le=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let re=0;re<le.length;re++){const ne=le[re],Re=s.convert(ne.format,ne.colorSpace),ve=s.convert(ne.type),Te=y(ne.internalFormat,Re,ve,ne.colorSpace),Le=ue(w);X&&ee(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,Te,w.width,w.height):ee(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Le,Te,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,Te,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function he(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),j(w.depthTexture,0);const le=i.get(w.depthTexture).__webglTexture,re=ue(w);if(w.depthTexture.format===Pr)ee(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0);else if(w.depthTexture.format===Ws)ee(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function fe(A){const w=i.get(A),X=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");he(w.__webglFramebuffer,A)}else if(X){w.__webglDepthbuffer=[];for(let le=0;le<6;le++)n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[le]),w.__webglDepthbuffer[le]=t.createRenderbuffer(),ae(w.__webglDepthbuffer[le],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),ae(w.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function ge(A,w,X){const le=i.get(A);w!==void 0&&oe(le.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),X!==void 0&&fe(A)}function P(A){const w=A.texture,X=i.get(A),le=i.get(w);A.addEventListener("dispose",D),A.isWebGLMultipleRenderTargets!==!0&&(le.__webglTexture===void 0&&(le.__webglTexture=t.createTexture()),le.__version=w.version,o.memory.textures++);const re=A.isWebGLCubeRenderTarget===!0,ne=A.isWebGLMultipleRenderTargets===!0,Re=_(A)||a;if(re){X.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(a&&w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[ve]=[];for(let Te=0;Te<w.mipmaps.length;Te++)X.__webglFramebuffer[ve][Te]=t.createFramebuffer()}else X.__webglFramebuffer[ve]=t.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let ve=0;ve<w.mipmaps.length;ve++)X.__webglFramebuffer[ve]=t.createFramebuffer()}else X.__webglFramebuffer=t.createFramebuffer();if(ne)if(r.drawBuffers){const ve=A.texture;for(let Te=0,Le=ve.length;Te<Le;Te++){const Be=i.get(ve[Te]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&ee(A)===!1){const ve=ne?w:[w];X.__webglMultisampledFramebuffer=t.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Te=0;Te<ve.length;Te++){const Le=ve[Te];X.__webglColorRenderbuffer[Te]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,X.__webglColorRenderbuffer[Te]);const Be=s.convert(Le.format,Le.colorSpace),se=s.convert(Le.type),Ze=y(Le.internalFormat,Be,se,Le.colorSpace,A.isXRRenderTarget===!0),qe=ue(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,qe,Ze,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,X.__webglColorRenderbuffer[Te])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(X.__webglDepthRenderbuffer=t.createRenderbuffer(),ae(X.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){n.bindTexture(t.TEXTURE_CUBE_MAP,le.__webglTexture),U(t.TEXTURE_CUBE_MAP,w,Re);for(let ve=0;ve<6;ve++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let Te=0;Te<w.mipmaps.length;Te++)oe(X.__webglFramebuffer[ve][Te],A,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Te);else oe(X.__webglFramebuffer[ve],A,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);g(w,Re)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ne){const ve=A.texture;for(let Te=0,Le=ve.length;Te<Le;Te++){const Be=ve[Te],se=i.get(Be);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),U(t.TEXTURE_2D,Be,Re),oe(X.__webglFramebuffer,A,Be,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,0),g(Be,Re)&&m(t.TEXTURE_2D)}n.unbindTexture()}else{let ve=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ve=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ve,le.__webglTexture),U(ve,w,Re),a&&w.mipmaps&&w.mipmaps.length>0)for(let Te=0;Te<w.mipmaps.length;Te++)oe(X.__webglFramebuffer[Te],A,w,t.COLOR_ATTACHMENT0,ve,Te);else oe(X.__webglFramebuffer,A,w,t.COLOR_ATTACHMENT0,ve,0);g(w,Re)&&m(ve),n.unbindTexture()}A.depthBuffer&&fe(A)}function de(A){const w=_(A)||a,X=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let le=0,re=X.length;le<re;le++){const ne=X[le];if(g(ne,w)){const Re=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ve=i.get(ne).__webglTexture;n.bindTexture(Re,ve),m(Re),n.unbindTexture()}}}function J(A){if(a&&A.samples>0&&ee(A)===!1){const w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],X=A.width,le=A.height;let re=t.COLOR_BUFFER_BIT;const ne=[],Re=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=i.get(A),Te=A.isWebGLMultipleRenderTargets===!0;if(Te)for(let Le=0;Le<w.length;Le++)n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Le=0;Le<w.length;Le++){ne.push(t.COLOR_ATTACHMENT0+Le),A.depthBuffer&&ne.push(Re);const Be=ve.__ignoreDepthValues!==void 0?ve.__ignoreDepthValues:!1;if(Be===!1&&(A.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),Te&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ve.__webglColorRenderbuffer[Le]),Be===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Re]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Re])),Te){const se=i.get(w[Le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,se,0)}t.blitFramebuffer(0,0,X,le,0,0,X,le,re,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ne)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Te)for(let Le=0;Le<w.length;Le++){n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,ve.__webglColorRenderbuffer[Le]);const Be=i.get(w[Le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,Be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}}function ue(A){return Math.min(r.maxSamples,A.samples)}function ee(A){const w=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function be(A){const w=o.render.frame;c.get(A)!==w&&(c.set(A,w),A.update())}function Ee(A,w){const X=A.colorSpace,le=A.format,re=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===kf||X!==Ci&&X!==Nn&&(et.getTransfer(X)===ot?a===!1?e.has("EXT_sRGB")===!0&&le===$n?(A.format=kf,A.minFilter=Dn,A.generateMipmaps=!1):w=kv.sRGBToLinear(w):(le!==$n||re!==tr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),w}this.allocateTextureUnit=I,this.resetTextureUnits=te,this.setTexture2D=j,this.setTexture2DArray=Z,this.setTexture3D=F,this.setTextureCube=L,this.rebindTextures=ge,this.setupRenderTarget=P,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=ee}function mA(t,e,n){const i=n.isWebGL2;function r(s,o=Nn){let a;const l=et.getTransfer(o);if(s===tr)return t.UNSIGNED_BYTE;if(s===bv)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Pv)return t.UNSIGNED_SHORT_5_5_5_1;if(s===ZS)return t.BYTE;if(s===JS)return t.SHORT;if(s===jd)return t.UNSIGNED_SHORT;if(s===Cv)return t.INT;if(s===Gi)return t.UNSIGNED_INT;if(s===Vi)return t.FLOAT;if(s===ea)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===QS)return t.ALPHA;if(s===$n)return t.RGBA;if(s===eE)return t.LUMINANCE;if(s===tE)return t.LUMINANCE_ALPHA;if(s===Pr)return t.DEPTH_COMPONENT;if(s===Ws)return t.DEPTH_STENCIL;if(s===kf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===nE)return t.RED;if(s===Lv)return t.RED_INTEGER;if(s===iE)return t.RG;if(s===Dv)return t.RG_INTEGER;if(s===Iv)return t.RGBA_INTEGER;if(s===nc||s===ic||s===rc||s===sc)if(l===ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===nc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ic)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===rc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===sc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===nc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ic)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===rc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===sc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Tp||s===Ap||s===Rp||s===Cp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Tp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ap)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Rp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Cp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Nv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===bp||s===Pp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===bp)return l===ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Pp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Lp||s===Dp||s===Ip||s===Np||s===Up||s===Fp||s===Op||s===zp||s===kp||s===Bp||s===Hp||s===Gp||s===Vp||s===Wp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Lp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Dp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ip)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Np)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Up)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Fp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Op)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===zp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===kp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Bp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Hp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Gp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Vp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Wp)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===oc||s===Xp||s===jp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===oc)return l===ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Xp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===jp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===rE||s===Yp||s===qp||s===$p)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===oc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Yp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===qp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===$p)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===br?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class gA extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Tr extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vA={type:"move"};class Lc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const x of e.hand.values()){const _=n.getJointPose(x,i),f=this._getHandJoint(u,x);_!==null&&(f.matrix.fromArray(_.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=_.radius),f.visible=_!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=c.position.distanceTo(h.position),p=.02,v=.005;u.inputState.pinching&&d>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Tr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class _A extends Js{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,d=null,p=null,v=null;const x=n.getContextAttributes();let _=null,f=null;const g=[],m=[],y=new ye;let C=null;const E=new In;E.layers.enable(1),E.viewport=new It;const T=new In;T.layers.enable(2),T.viewport=new It;const D=[E,T],S=new gA;S.layers.enable(1),S.layers.enable(2);let M=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let z=g[U];return z===void 0&&(z=new Lc,g[U]=z),z.getTargetRaySpace()},this.getControllerGrip=function(U){let z=g[U];return z===void 0&&(z=new Lc,g[U]=z),z.getGripSpace()},this.getHand=function(U){let z=g[U];return z===void 0&&(z=new Lc,g[U]=z),z.getHandSpace()};function W(U){const z=m.indexOf(U.inputSource);if(z===-1)return;const K=g[z];K!==void 0&&(K.update(U.inputSource,U.frame,u||o),K.dispatchEvent({type:U.type,data:U.inputSource}))}function te(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",I);for(let U=0;U<g.length;U++){const z=m[U];z!==null&&(m[U]=null,g[U].disconnect(z))}M=null,k=null,e.setRenderTarget(_),p=null,d=null,h=null,r=null,f=null,b.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(U){u=U},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",te),r.addEventListener("inputsourceschange",I),x.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const z={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,z),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new kr(p.framebufferWidth,p.framebufferHeight,{format:$n,type:tr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let z=null,K=null,Q=null;x.depth&&(Q=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,z=x.stencil?Ws:Pr,K=x.stencil?br:Gi);const oe={colorFormat:n.RGBA8,depthFormat:Q,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(oe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new kr(d.textureWidth,d.textureHeight,{format:$n,type:tr,depthTexture:new Qv(d.textureWidth,d.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const ae=e.properties.get(f);ae.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),b.setContext(r),b.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function I(U){for(let z=0;z<U.removed.length;z++){const K=U.removed[z],Q=m.indexOf(K);Q>=0&&(m[Q]=null,g[Q].disconnect(K))}for(let z=0;z<U.added.length;z++){const K=U.added[z];let Q=m.indexOf(K);if(Q===-1){for(let ae=0;ae<g.length;ae++)if(ae>=m.length){m.push(K),Q=ae;break}else if(m[ae]===null){m[ae]=K,Q=ae;break}if(Q===-1)break}const oe=g[Q];oe&&oe.connect(K)}}const H=new G,j=new G;function Z(U,z,K){H.setFromMatrixPosition(z.matrixWorld),j.setFromMatrixPosition(K.matrixWorld);const Q=H.distanceTo(j),oe=z.projectionMatrix.elements,ae=K.projectionMatrix.elements,he=oe[14]/(oe[10]-1),fe=oe[14]/(oe[10]+1),ge=(oe[9]+1)/oe[5],P=(oe[9]-1)/oe[5],de=(oe[8]-1)/oe[0],J=(ae[8]+1)/ae[0],ue=he*de,ee=he*J,be=Q/(-de+J),Ee=be*-de;z.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(Ee),U.translateZ(be),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const A=he+be,w=fe+be,X=ue-Ee,le=ee+(Q-Ee),re=ge*fe/w*A,ne=P*fe/w*A;U.projectionMatrix.makePerspective(X,le,re,ne,A,w),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}function F(U,z){z===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(z.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(r===null)return;S.near=T.near=E.near=U.near,S.far=T.far=E.far=U.far,(M!==S.near||k!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),M=S.near,k=S.far);const z=U.parent,K=S.cameras;F(S,z);for(let Q=0;Q<K.length;Q++)F(K[Q],z);K.length===2?Z(S,E,T):S.projectionMatrix.copy(E.projectionMatrix),L(U,S,z)};function L(U,z,K){K===null?U.matrix.copy(z.matrixWorld):(U.matrix.copy(K.matrixWorld),U.matrix.invert(),U.matrix.multiply(z.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(z.projectionMatrix),U.projectionMatrixInverse.copy(z.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=Bf*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(U){l=U,d!==null&&(d.fixedFoveation=U),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=U)};let B=null;function O(U,z){if(c=z.getViewerPose(u||o),v=z,c!==null){const K=c.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let Q=!1;K.length!==S.cameras.length&&(S.cameras.length=0,Q=!0);for(let oe=0;oe<K.length;oe++){const ae=K[oe];let he=null;if(p!==null)he=p.getViewport(ae);else{const ge=h.getViewSubImage(d,ae);he=ge.viewport,oe===0&&(e.setRenderTargetTextures(f,ge.colorTexture,d.ignoreDepthValues?void 0:ge.depthStencilTexture),e.setRenderTarget(f))}let fe=D[oe];fe===void 0&&(fe=new In,fe.layers.enable(oe),fe.viewport=new It,D[oe]=fe),fe.matrix.fromArray(ae.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(ae.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(he.x,he.y,he.width,he.height),oe===0&&(S.matrix.copy(fe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Q===!0&&S.cameras.push(fe)}}for(let K=0;K<g.length;K++){const Q=m[K],oe=g[K];Q!==null&&oe!==void 0&&oe.update(Q,z,u||o)}B&&B(U,z),z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:z}),v=null}const b=new Zv;b.setAnimationLoop(O),this.setAnimationLoop=function(U){B=U},this.dispose=function(){}}}function xA(t,e){function n(_,f){_.matrixAutoUpdate===!0&&_.updateMatrix(),f.value.copy(_.matrix)}function i(_,f){f.color.getRGB(_.fogColor.value,qv(t)),f.isFog?(_.fogNear.value=f.near,_.fogFar.value=f.far):f.isFogExp2&&(_.fogDensity.value=f.density)}function r(_,f,g,m,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(_,f):f.isMeshToonMaterial?(s(_,f),h(_,f)):f.isMeshPhongMaterial?(s(_,f),c(_,f)):f.isMeshStandardMaterial?(s(_,f),d(_,f),f.isMeshPhysicalMaterial&&p(_,f,y)):f.isMeshMatcapMaterial?(s(_,f),v(_,f)):f.isMeshDepthMaterial?s(_,f):f.isMeshDistanceMaterial?(s(_,f),x(_,f)):f.isMeshNormalMaterial?s(_,f):f.isLineBasicMaterial?(o(_,f),f.isLineDashedMaterial&&a(_,f)):f.isPointsMaterial?l(_,f,g,m):f.isSpriteMaterial?u(_,f):f.isShadowMaterial?(_.color.value.copy(f.color),_.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(_,f){_.opacity.value=f.opacity,f.color&&_.diffuse.value.copy(f.color),f.emissive&&_.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(_.map.value=f.map,n(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,n(f.alphaMap,_.alphaMapTransform)),f.bumpMap&&(_.bumpMap.value=f.bumpMap,n(f.bumpMap,_.bumpMapTransform),_.bumpScale.value=f.bumpScale,f.side===gn&&(_.bumpScale.value*=-1)),f.normalMap&&(_.normalMap.value=f.normalMap,n(f.normalMap,_.normalMapTransform),_.normalScale.value.copy(f.normalScale),f.side===gn&&_.normalScale.value.negate()),f.displacementMap&&(_.displacementMap.value=f.displacementMap,n(f.displacementMap,_.displacementMapTransform),_.displacementScale.value=f.displacementScale,_.displacementBias.value=f.displacementBias),f.emissiveMap&&(_.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,_.emissiveMapTransform)),f.specularMap&&(_.specularMap.value=f.specularMap,n(f.specularMap,_.specularMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest);const g=e.get(f).envMap;if(g&&(_.envMap.value=g,_.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=f.reflectivity,_.ior.value=f.ior,_.refractionRatio.value=f.refractionRatio),f.lightMap){_.lightMap.value=f.lightMap;const m=t._useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=f.lightMapIntensity*m,n(f.lightMap,_.lightMapTransform)}f.aoMap&&(_.aoMap.value=f.aoMap,_.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,_.aoMapTransform))}function o(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,f.map&&(_.map.value=f.map,n(f.map,_.mapTransform))}function a(_,f){_.dashSize.value=f.dashSize,_.totalSize.value=f.dashSize+f.gapSize,_.scale.value=f.scale}function l(_,f,g,m){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.size.value=f.size*g,_.scale.value=m*.5,f.map&&(_.map.value=f.map,n(f.map,_.uvTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,n(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function u(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.rotation.value=f.rotation,f.map&&(_.map.value=f.map,n(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,n(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function c(_,f){_.specular.value.copy(f.specular),_.shininess.value=Math.max(f.shininess,1e-4)}function h(_,f){f.gradientMap&&(_.gradientMap.value=f.gradientMap)}function d(_,f){_.metalness.value=f.metalness,f.metalnessMap&&(_.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,_.metalnessMapTransform)),_.roughness.value=f.roughness,f.roughnessMap&&(_.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,_.roughnessMapTransform)),e.get(f).envMap&&(_.envMapIntensity.value=f.envMapIntensity)}function p(_,f,g){_.ior.value=f.ior,f.sheen>0&&(_.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),_.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(_.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,_.sheenColorMapTransform)),f.sheenRoughnessMap&&(_.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,_.sheenRoughnessMapTransform))),f.clearcoat>0&&(_.clearcoat.value=f.clearcoat,_.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(_.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,_.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(_.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===gn&&_.clearcoatNormalScale.value.negate())),f.iridescence>0&&(_.iridescence.value=f.iridescence,_.iridescenceIOR.value=f.iridescenceIOR,_.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(_.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,_.iridescenceMapTransform)),f.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),f.transmission>0&&(_.transmission.value=f.transmission,_.transmissionSamplerMap.value=g.texture,_.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(_.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,_.transmissionMapTransform)),_.thickness.value=f.thickness,f.thicknessMap&&(_.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=f.attenuationDistance,_.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(_.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(_.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=f.specularIntensity,_.specularColor.value.copy(f.specularColor),f.specularColorMap&&(_.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,_.specularColorMapTransform)),f.specularIntensityMap&&(_.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,f){f.matcap&&(_.matcap.value=f.matcap)}function x(_,f){const g=e.get(f).light;_.referencePosition.value.setFromMatrixPosition(g.matrixWorld),_.nearDistance.value=g.shadow.camera.near,_.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function yA(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,m){const y=m.program;i.uniformBlockBinding(g,y)}function u(g,m){let y=r[g.id];y===void 0&&(v(g),y=c(g),r[g.id]=y,g.addEventListener("dispose",_));const C=m.program;i.updateUBOMapping(g,C);const E=e.render.frame;s[g.id]!==E&&(d(g),s[g.id]=E)}function c(g){const m=h();g.__bindingPointIndex=m;const y=t.createBuffer(),C=g.__size,E=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,C,E),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,m,y),y}function h(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const m=r[g.id],y=g.uniforms,C=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,m);for(let E=0,T=y.length;E<T;E++){const D=Array.isArray(y[E])?y[E]:[y[E]];for(let S=0,M=D.length;S<M;S++){const k=D[S];if(p(k,E,S,C)===!0){const W=k.__offset,te=Array.isArray(k.value)?k.value:[k.value];let I=0;for(let H=0;H<te.length;H++){const j=te[H],Z=x(j);typeof j=="number"||typeof j=="boolean"?(k.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,W+I,k.__data)):j.isMatrix3?(k.__data[0]=j.elements[0],k.__data[1]=j.elements[1],k.__data[2]=j.elements[2],k.__data[3]=0,k.__data[4]=j.elements[3],k.__data[5]=j.elements[4],k.__data[6]=j.elements[5],k.__data[7]=0,k.__data[8]=j.elements[6],k.__data[9]=j.elements[7],k.__data[10]=j.elements[8],k.__data[11]=0):(j.toArray(k.__data,I),I+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,k.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,m,y,C){const E=g.value,T=m+"_"+y;if(C[T]===void 0)return typeof E=="number"||typeof E=="boolean"?C[T]=E:C[T]=E.clone(),!0;{const D=C[T];if(typeof E=="number"||typeof E=="boolean"){if(D!==E)return C[T]=E,!0}else if(D.equals(E)===!1)return D.copy(E),!0}return!1}function v(g){const m=g.uniforms;let y=0;const C=16;for(let T=0,D=m.length;T<D;T++){const S=Array.isArray(m[T])?m[T]:[m[T]];for(let M=0,k=S.length;M<k;M++){const W=S[M],te=Array.isArray(W.value)?W.value:[W.value];for(let I=0,H=te.length;I<H;I++){const j=te[I],Z=x(j),F=y%C;F!==0&&C-F<Z.boundary&&(y+=C-F),W.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=y,y+=Z.storage}}}const E=y%C;return E>0&&(y+=C-E),g.__size=y,g.__cache={},this}function x(g){const m={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(m.boundary=4,m.storage=4):g.isVector2?(m.boundary=8,m.storage=8):g.isVector3||g.isColor?(m.boundary=16,m.storage=12):g.isVector4?(m.boundary=16,m.storage=16):g.isMatrix3?(m.boundary=48,m.storage=48):g.isMatrix4?(m.boundary=64,m.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),m}function _(g){const m=g.target;m.removeEventListener("dispose",_);const y=o.indexOf(m.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[m.id]),delete r[m.id],delete s[m.id]}function f(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:u,dispose:f}}class s_{constructor(e={}){const{canvas:n=gE(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),v=new Int32Array(4);let x=null,_=null;const f=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this._useLegacyLights=!1,this.toneMapping=er,this.toneMappingExposure=1;const m=this;let y=!1,C=0,E=0,T=null,D=-1,S=null;const M=new It,k=new It;let W=null;const te=new ze(0);let I=0,H=n.width,j=n.height,Z=1,F=null,L=null;const B=new It(0,0,H,j),O=new It(0,0,H,j);let b=!1;const U=new qd;let z=!1,K=!1,Q=null;const oe=new yt,ae=new ye,he=new G,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ge(){return T===null?Z:1}let P=i;function de(R,V){for(let q=0;q<R.length;q++){const $=R[q],Y=n.getContext($,V);if(Y!==null)return Y}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Xd}`),n.addEventListener("webglcontextlost",pe,!1),n.addEventListener("webglcontextrestored",N,!1),n.addEventListener("webglcontextcreationerror",_e,!1),P===null){const V=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&V.shift(),P=de(V,R),P===null)throw de(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let J,ue,ee,be,Ee,A,w,X,le,re,ne,Re,ve,Te,Le,Be,se,Ze,qe,Oe,Pe,Ae,Ge,Je;function mt(){J=new P1(P),ue=new w1(P,J,e),J.init(ue),Ae=new mA(P,J,ue),ee=new hA(P,J,ue),be=new I1(P),Ee=new QT,A=new pA(P,J,ee,Ee,ue,Ae,be),w=new A1(m),X=new b1(m),le=new HE(P,ue),Ge=new E1(P,J,le,ue),re=new L1(P,le,be,Ge),ne=new O1(P,re,le,be),qe=new F1(P,ue,A),Be=new T1(Ee),Re=new JT(m,w,X,J,ue,Ge,Be),ve=new xA(m,Ee),Te=new tA,Le=new aA(J,ue),Ze=new S1(m,w,X,ee,ne,d,l),se=new dA(m,ne,ue),Je=new yA(P,be,ue,ee),Oe=new M1(P,J,be,ue),Pe=new D1(P,J,be,ue),be.programs=Re.programs,m.capabilities=ue,m.extensions=J,m.properties=Ee,m.renderLists=Te,m.shadowMap=se,m.state=ee,m.info=be}mt();const Xe=new _A(m,P);this.xr=Xe,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const R=J.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=J.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(R){R!==void 0&&(Z=R,this.setSize(H,j,!1))},this.getSize=function(R){return R.set(H,j)},this.setSize=function(R,V,q=!0){if(Xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=R,j=V,n.width=Math.floor(R*Z),n.height=Math.floor(V*Z),q===!0&&(n.style.width=R+"px",n.style.height=V+"px"),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(H*Z,j*Z).floor()},this.setDrawingBufferSize=function(R,V,q){H=R,j=V,Z=q,n.width=Math.floor(R*q),n.height=Math.floor(V*q),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(M)},this.getViewport=function(R){return R.copy(B)},this.setViewport=function(R,V,q,$){R.isVector4?B.set(R.x,R.y,R.z,R.w):B.set(R,V,q,$),ee.viewport(M.copy(B).multiplyScalar(Z).floor())},this.getScissor=function(R){return R.copy(O)},this.setScissor=function(R,V,q,$){R.isVector4?O.set(R.x,R.y,R.z,R.w):O.set(R,V,q,$),ee.scissor(k.copy(O).multiplyScalar(Z).floor())},this.getScissorTest=function(){return b},this.setScissorTest=function(R){ee.setScissorTest(b=R)},this.setOpaqueSort=function(R){F=R},this.setTransparentSort=function(R){L=R},this.getClearColor=function(R){return R.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(R=!0,V=!0,q=!0){let $=0;if(R){let Y=!1;if(T!==null){const Me=T.texture.format;Y=Me===Iv||Me===Dv||Me===Lv}if(Y){const Me=T.texture.type,Ce=Me===tr||Me===Gi||Me===jd||Me===br||Me===bv||Me===Pv,Ie=Ze.getClearColor(),Fe=Ze.getClearAlpha(),We=Ie.r,ke=Ie.g,He=Ie.b;Ce?(p[0]=We,p[1]=ke,p[2]=He,p[3]=Fe,P.clearBufferuiv(P.COLOR,0,p)):(v[0]=We,v[1]=ke,v[2]=He,v[3]=Fe,P.clearBufferiv(P.COLOR,0,v))}else $|=P.COLOR_BUFFER_BIT}V&&($|=P.DEPTH_BUFFER_BIT),q&&($|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",N,!1),n.removeEventListener("webglcontextcreationerror",_e,!1),Te.dispose(),Le.dispose(),Ee.dispose(),w.dispose(),X.dispose(),ne.dispose(),Ge.dispose(),Je.dispose(),Re.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",Jt),Xe.removeEventListener("sessionend",it),Q&&(Q.dispose(),Q=null),Qt.stop()};function pe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=be.autoReset,V=se.enabled,q=se.autoUpdate,$=se.needsUpdate,Y=se.type;mt(),be.autoReset=R,se.enabled=V,se.autoUpdate=q,se.needsUpdate=$,se.type=Y}function _e(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function xe(R){const V=R.target;V.removeEventListener("dispose",xe),Ue(V)}function Ue(R){De(R),Ee.remove(R)}function De(R){const V=Ee.get(R).programs;V!==void 0&&(V.forEach(function(q){Re.releaseProgram(q)}),R.isShaderMaterial&&Re.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,q,$,Y,Me){V===null&&(V=fe);const Ce=Y.isMesh&&Y.matrixWorld.determinant()<0,Ie=L_(R,V,q,$,Y);ee.setMaterial($,Ce);let Fe=q.index,We=1;if($.wireframe===!0){if(Fe=re.getWireframeAttribute(q),Fe===void 0)return;We=2}const ke=q.drawRange,He=q.attributes.position;let _t=ke.start*We,_n=(ke.start+ke.count)*We;Me!==null&&(_t=Math.max(_t,Me.start*We),_n=Math.min(_n,(Me.start+Me.count)*We)),Fe!==null?(_t=Math.max(_t,0),_n=Math.min(_n,Fe.count)):He!=null&&(_t=Math.max(_t,0),_n=Math.min(_n,He.count));const Pt=_n-_t;if(Pt<0||Pt===1/0)return;Ge.setup(Y,$,Ie,q,Fe);let ci,ut=Oe;if(Fe!==null&&(ci=le.get(Fe),ut=Pe,ut.setIndex(ci)),Y.isMesh)$.wireframe===!0?(ee.setLineWidth($.wireframeLinewidth*ge()),ut.setMode(P.LINES)):ut.setMode(P.TRIANGLES);else if(Y.isLine){let je=$.linewidth;je===void 0&&(je=1),ee.setLineWidth(je*ge()),Y.isLineSegments?ut.setMode(P.LINES):Y.isLineLoop?ut.setMode(P.LINE_LOOP):ut.setMode(P.LINE_STRIP)}else Y.isPoints?ut.setMode(P.POINTS):Y.isSprite&&ut.setMode(P.TRIANGLES);if(Y.isBatchedMesh)ut.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)ut.renderInstances(_t,Pt,Y.count);else if(q.isInstancedBufferGeometry){const je=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Tu=Math.min(q.instanceCount,je);ut.renderInstances(_t,Pt,Tu)}else ut.render(_t,Pt)};function tt(R,V,q){R.transparent===!0&&R.side===cn&&R.forceSinglePass===!1?(R.side=gn,R.needsUpdate=!0,ma(R,V,q),R.side=sr,R.needsUpdate=!0,ma(R,V,q),R.side=cn):ma(R,V,q)}this.compile=function(R,V,q=null){q===null&&(q=R),_=Le.get(q),_.init(),g.push(_),q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),R!==q&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),_.setupLights(m._useLegacyLights);const $=new Set;return R.traverse(function(Y){const Me=Y.material;if(Me)if(Array.isArray(Me))for(let Ce=0;Ce<Me.length;Ce++){const Ie=Me[Ce];tt(Ie,q,Y),$.add(Ie)}else tt(Me,q,Y),$.add(Me)}),g.pop(),_=null,$},this.compileAsync=function(R,V,q=null){const $=this.compile(R,V,q);return new Promise(Y=>{function Me(){if($.forEach(function(Ce){Ee.get(Ce).currentProgram.isReady()&&$.delete(Ce)}),$.size===0){Y(R);return}setTimeout(Me,10)}J.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let nt=null;function bt(R){nt&&nt(R)}function Jt(){Qt.stop()}function it(){Qt.start()}const Qt=new Zv;Qt.setAnimationLoop(bt),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(R){nt=R,Xe.setAnimationLoop(R),R===null?Qt.stop():Qt.start()},Xe.addEventListener("sessionstart",Jt),Xe.addEventListener("sessionend",it),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(V),V=Xe.getCamera()),R.isScene===!0&&R.onBeforeRender(m,R,V,T),_=Le.get(R,g.length),_.init(),g.push(_),oe.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),U.setFromProjectionMatrix(oe),K=this.localClippingEnabled,z=Be.init(this.clippingPlanes,K),x=Te.get(R,f.length),x.init(),f.push(x),ni(R,V,0,m.sortObjects),x.finish(),m.sortObjects===!0&&x.sort(F,L),this.info.render.frame++,z===!0&&Be.beginShadows();const q=_.state.shadowsArray;if(se.render(q,R,V),z===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ze.render(x,R),_.setupLights(m._useLegacyLights),V.isArrayCamera){const $=V.cameras;for(let Y=0,Me=$.length;Y<Me;Y++){const Ce=$[Y];ih(x,R,Ce,Ce.viewport)}}else ih(x,R,V);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(m,R,V),Ge.resetDefaultState(),D=-1,S=null,g.pop(),g.length>0?_=g[g.length-1]:_=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function ni(R,V,q,$){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||U.intersectsSprite(R)){$&&he.setFromMatrixPosition(R.matrixWorld).applyMatrix4(oe);const Ce=ne.update(R),Ie=R.material;Ie.visible&&x.push(R,Ce,Ie,q,he.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||U.intersectsObject(R))){const Ce=ne.update(R),Ie=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),he.copy(R.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),he.copy(Ce.boundingSphere.center)),he.applyMatrix4(R.matrixWorld).applyMatrix4(oe)),Array.isArray(Ie)){const Fe=Ce.groups;for(let We=0,ke=Fe.length;We<ke;We++){const He=Fe[We],_t=Ie[He.materialIndex];_t&&_t.visible&&x.push(R,Ce,_t,q,he.z,He)}}else Ie.visible&&x.push(R,Ce,Ie,q,he.z,null)}}const Me=R.children;for(let Ce=0,Ie=Me.length;Ce<Ie;Ce++)ni(Me[Ce],V,q,$)}function ih(R,V,q,$){const Y=R.opaque,Me=R.transmissive,Ce=R.transparent;_.setupLightsView(q),z===!0&&Be.setGlobalState(m.clippingPlanes,q),Me.length>0&&P_(Y,Me,V,q),$&&ee.viewport(M.copy($)),Y.length>0&&pa(Y,V,q),Me.length>0&&pa(Me,V,q),Ce.length>0&&pa(Ce,V,q),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function P_(R,V,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const Me=ue.isWebGL2;Q===null&&(Q=new kr(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?ea:tr,minFilter:Qo,samples:Me?4:0})),m.getDrawingBufferSize(ae),Me?Q.setSize(ae.x,ae.y):Q.setSize(Hf(ae.x),Hf(ae.y));const Ce=m.getRenderTarget();m.setRenderTarget(Q),m.getClearColor(te),I=m.getClearAlpha(),I<1&&m.setClearColor(16777215,.5),m.clear();const Ie=m.toneMapping;m.toneMapping=er,pa(R,q,$),A.updateMultisampleRenderTarget(Q),A.updateRenderTargetMipmap(Q);let Fe=!1;for(let We=0,ke=V.length;We<ke;We++){const He=V[We],_t=He.object,_n=He.geometry,Pt=He.material,ci=He.group;if(Pt.side===cn&&_t.layers.test($.layers)){const ut=Pt.side;Pt.side=gn,Pt.needsUpdate=!0,rh(_t,q,$,_n,Pt,ci),Pt.side=ut,Pt.needsUpdate=!0,Fe=!0}}Fe===!0&&(A.updateMultisampleRenderTarget(Q),A.updateRenderTargetMipmap(Q)),m.setRenderTarget(Ce),m.setClearColor(te,I),m.toneMapping=Ie}function pa(R,V,q){const $=V.isScene===!0?V.overrideMaterial:null;for(let Y=0,Me=R.length;Y<Me;Y++){const Ce=R[Y],Ie=Ce.object,Fe=Ce.geometry,We=$===null?Ce.material:$,ke=Ce.group;Ie.layers.test(q.layers)&&rh(Ie,V,q,Fe,We,ke)}}function rh(R,V,q,$,Y,Me){R.onBeforeRender(m,V,q,$,Y,Me),R.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(m,V,q,$,R,Me),Y.transparent===!0&&Y.side===cn&&Y.forceSinglePass===!1?(Y.side=gn,Y.needsUpdate=!0,m.renderBufferDirect(q,V,$,Y,R,Me),Y.side=sr,Y.needsUpdate=!0,m.renderBufferDirect(q,V,$,Y,R,Me),Y.side=cn):m.renderBufferDirect(q,V,$,Y,R,Me),R.onAfterRender(m,V,q,$,Y,Me)}function ma(R,V,q){V.isScene!==!0&&(V=fe);const $=Ee.get(R),Y=_.state.lights,Me=_.state.shadowsArray,Ce=Y.state.version,Ie=Re.getParameters(R,Y.state,Me,V,q),Fe=Re.getProgramCacheKey(Ie);let We=$.programs;$.environment=R.isMeshStandardMaterial?V.environment:null,$.fog=V.fog,$.envMap=(R.isMeshStandardMaterial?X:w).get(R.envMap||$.environment),We===void 0&&(R.addEventListener("dispose",xe),We=new Map,$.programs=We);let ke=We.get(Fe);if(ke!==void 0){if($.currentProgram===ke&&$.lightsStateVersion===Ce)return oh(R,Ie),ke}else Ie.uniforms=Re.getUniforms(R),R.onBuild(q,Ie,m),R.onBeforeCompile(Ie,m),ke=Re.acquireProgram(Ie,Fe),We.set(Fe,ke),$.uniforms=Ie.uniforms;const He=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(He.clippingPlanes=Be.uniform),oh(R,Ie),$.needsLights=I_(R),$.lightsStateVersion=Ce,$.needsLights&&(He.ambientLightColor.value=Y.state.ambient,He.lightProbe.value=Y.state.probe,He.directionalLights.value=Y.state.directional,He.directionalLightShadows.value=Y.state.directionalShadow,He.spotLights.value=Y.state.spot,He.spotLightShadows.value=Y.state.spotShadow,He.rectAreaLights.value=Y.state.rectArea,He.ltc_1.value=Y.state.rectAreaLTC1,He.ltc_2.value=Y.state.rectAreaLTC2,He.pointLights.value=Y.state.point,He.pointLightShadows.value=Y.state.pointShadow,He.hemisphereLights.value=Y.state.hemi,He.directionalShadowMap.value=Y.state.directionalShadowMap,He.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,He.spotShadowMap.value=Y.state.spotShadowMap,He.spotLightMatrix.value=Y.state.spotLightMatrix,He.spotLightMap.value=Y.state.spotLightMap,He.pointShadowMap.value=Y.state.pointShadowMap,He.pointShadowMatrix.value=Y.state.pointShadowMatrix),$.currentProgram=ke,$.uniformsList=null,ke}function sh(R){if(R.uniformsList===null){const V=R.currentProgram.getUniforms();R.uniformsList=xl.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function oh(R,V){const q=Ee.get(R);q.outputColorSpace=V.outputColorSpace,q.batching=V.batching,q.instancing=V.instancing,q.instancingColor=V.instancingColor,q.skinning=V.skinning,q.morphTargets=V.morphTargets,q.morphNormals=V.morphNormals,q.morphColors=V.morphColors,q.morphTargetsCount=V.morphTargetsCount,q.numClippingPlanes=V.numClippingPlanes,q.numIntersection=V.numClipIntersection,q.vertexAlphas=V.vertexAlphas,q.vertexTangents=V.vertexTangents,q.toneMapping=V.toneMapping}function L_(R,V,q,$,Y){V.isScene!==!0&&(V=fe),A.resetTextureUnits();const Me=V.fog,Ce=$.isMeshStandardMaterial?V.environment:null,Ie=T===null?m.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ci,Fe=($.isMeshStandardMaterial?X:w).get($.envMap||Ce),We=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ke=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),He=!!q.morphAttributes.position,_t=!!q.morphAttributes.normal,_n=!!q.morphAttributes.color;let Pt=er;$.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Pt=m.toneMapping);const ci=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ut=ci!==void 0?ci.length:0,je=Ee.get($),Tu=_.state.lights;if(z===!0&&(K===!0||R!==S)){const Cn=R===S&&$.id===D;Be.setState($,R,Cn)}let gt=!1;$.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Tu.state.version||je.outputColorSpace!==Ie||Y.isBatchedMesh&&je.batching===!1||!Y.isBatchedMesh&&je.batching===!0||Y.isInstancedMesh&&je.instancing===!1||!Y.isInstancedMesh&&je.instancing===!0||Y.isSkinnedMesh&&je.skinning===!1||!Y.isSkinnedMesh&&je.skinning===!0||Y.isInstancedMesh&&je.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&je.instancingColor===!1&&Y.instanceColor!==null||je.envMap!==Fe||$.fog===!0&&je.fog!==Me||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Be.numPlanes||je.numIntersection!==Be.numIntersection)||je.vertexAlphas!==We||je.vertexTangents!==ke||je.morphTargets!==He||je.morphNormals!==_t||je.morphColors!==_n||je.toneMapping!==Pt||ue.isWebGL2===!0&&je.morphTargetsCount!==ut)&&(gt=!0):(gt=!0,je.__version=$.version);let ur=je.currentProgram;gt===!0&&(ur=ma($,V,Y));let ah=!1,io=!1,Au=!1;const Vt=ur.getUniforms(),cr=je.uniforms;if(ee.useProgram(ur.program)&&(ah=!0,io=!0,Au=!0),$.id!==D&&(D=$.id,io=!0),ah||S!==R){Vt.setValue(P,"projectionMatrix",R.projectionMatrix),Vt.setValue(P,"viewMatrix",R.matrixWorldInverse);const Cn=Vt.map.cameraPosition;Cn!==void 0&&Cn.setValue(P,he.setFromMatrixPosition(R.matrixWorld)),ue.logarithmicDepthBuffer&&Vt.setValue(P,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Vt.setValue(P,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,io=!0,Au=!0)}if(Y.isSkinnedMesh){Vt.setOptional(P,Y,"bindMatrix"),Vt.setOptional(P,Y,"bindMatrixInverse");const Cn=Y.skeleton;Cn&&(ue.floatVertexTextures?(Cn.boneTexture===null&&Cn.computeBoneTexture(),Vt.setValue(P,"boneTexture",Cn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(Vt.setOptional(P,Y,"batchingTexture"),Vt.setValue(P,"batchingTexture",Y._matricesTexture,A));const Ru=q.morphAttributes;if((Ru.position!==void 0||Ru.normal!==void 0||Ru.color!==void 0&&ue.isWebGL2===!0)&&qe.update(Y,q,ur),(io||je.receiveShadow!==Y.receiveShadow)&&(je.receiveShadow=Y.receiveShadow,Vt.setValue(P,"receiveShadow",Y.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(cr.envMap.value=Fe,cr.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),io&&(Vt.setValue(P,"toneMappingExposure",m.toneMappingExposure),je.needsLights&&D_(cr,Au),Me&&$.fog===!0&&ve.refreshFogUniforms(cr,Me),ve.refreshMaterialUniforms(cr,$,Z,j,Q),xl.upload(P,sh(je),cr,A)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(xl.upload(P,sh(je),cr,A),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Vt.setValue(P,"center",Y.center),Vt.setValue(P,"modelViewMatrix",Y.modelViewMatrix),Vt.setValue(P,"normalMatrix",Y.normalMatrix),Vt.setValue(P,"modelMatrix",Y.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Cn=$.uniformsGroups;for(let Cu=0,N_=Cn.length;Cu<N_;Cu++)if(ue.isWebGL2){const lh=Cn[Cu];Je.update(lh,ur),Je.bind(lh,ur)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ur}function D_(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function I_(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,V,q){Ee.get(R.texture).__webglTexture=V,Ee.get(R.depthTexture).__webglTexture=q;const $=Ee.get(R);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=q===void 0,$.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,V){const q=Ee.get(R);q.__webglFramebuffer=V,q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,q=0){T=R,C=V,E=q;let $=!0,Y=null,Me=!1,Ce=!1;if(R){const Fe=Ee.get(R);Fe.__useDefaultFramebuffer!==void 0?(ee.bindFramebuffer(P.FRAMEBUFFER,null),$=!1):Fe.__webglFramebuffer===void 0?A.setupRenderTarget(R):Fe.__hasExternalTextures&&A.rebindTextures(R,Ee.get(R.texture).__webglTexture,Ee.get(R.depthTexture).__webglTexture);const We=R.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ce=!0);const ke=Ee.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ke[V])?Y=ke[V][q]:Y=ke[V],Me=!0):ue.isWebGL2&&R.samples>0&&A.useMultisampledRTT(R)===!1?Y=Ee.get(R).__webglMultisampledFramebuffer:Array.isArray(ke)?Y=ke[q]:Y=ke,M.copy(R.viewport),k.copy(R.scissor),W=R.scissorTest}else M.copy(B).multiplyScalar(Z).floor(),k.copy(O).multiplyScalar(Z).floor(),W=b;if(ee.bindFramebuffer(P.FRAMEBUFFER,Y)&&ue.drawBuffers&&$&&ee.drawBuffers(R,Y),ee.viewport(M),ee.scissor(k),ee.setScissorTest(W),Me){const Fe=Ee.get(R.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+V,Fe.__webglTexture,q)}else if(Ce){const Fe=Ee.get(R.texture),We=V||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Fe.__webglTexture,q||0,We)}D=-1},this.readRenderTargetPixels=function(R,V,q,$,Y,Me,Ce){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Ee.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){ee.bindFramebuffer(P.FRAMEBUFFER,Ie);try{const Fe=R.texture,We=Fe.format,ke=Fe.type;if(We!==$n&&Ae.convert(We)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=ke===ea&&(J.has("EXT_color_buffer_half_float")||ue.isWebGL2&&J.has("EXT_color_buffer_float"));if(ke!==tr&&Ae.convert(ke)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===Vi&&(ue.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-$&&q>=0&&q<=R.height-Y&&P.readPixels(V,q,$,Y,Ae.convert(We),Ae.convert(ke),Me)}finally{const Fe=T!==null?Ee.get(T).__webglFramebuffer:null;ee.bindFramebuffer(P.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(R,V,q=0){const $=Math.pow(2,-q),Y=Math.floor(V.image.width*$),Me=Math.floor(V.image.height*$);A.setTexture2D(V,0),P.copyTexSubImage2D(P.TEXTURE_2D,q,0,0,R.x,R.y,Y,Me),ee.unbindTexture()},this.copyTextureToTexture=function(R,V,q,$=0){const Y=V.image.width,Me=V.image.height,Ce=Ae.convert(q.format),Ie=Ae.convert(q.type);A.setTexture2D(q,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,q.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,q.unpackAlignment),V.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,$,R.x,R.y,Y,Me,Ce,Ie,V.image.data):V.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,$,R.x,R.y,V.mipmaps[0].width,V.mipmaps[0].height,Ce,V.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,$,R.x,R.y,Ce,Ie,V.image),$===0&&q.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),ee.unbindTexture()},this.copyTextureToTexture3D=function(R,V,q,$,Y=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=R.max.x-R.min.x+1,Ce=R.max.y-R.min.y+1,Ie=R.max.z-R.min.z+1,Fe=Ae.convert($.format),We=Ae.convert($.type);let ke;if($.isData3DTexture)A.setTexture3D($,0),ke=P.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)A.setTexture2DArray($,0),ke=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,$.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,$.unpackAlignment);const He=P.getParameter(P.UNPACK_ROW_LENGTH),_t=P.getParameter(P.UNPACK_IMAGE_HEIGHT),_n=P.getParameter(P.UNPACK_SKIP_PIXELS),Pt=P.getParameter(P.UNPACK_SKIP_ROWS),ci=P.getParameter(P.UNPACK_SKIP_IMAGES),ut=q.isCompressedTexture?q.mipmaps[Y]:q.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,ut.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ut.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,R.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,R.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,R.min.z),q.isDataTexture||q.isData3DTexture?P.texSubImage3D(ke,Y,V.x,V.y,V.z,Me,Ce,Ie,Fe,We,ut.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(ke,Y,V.x,V.y,V.z,Me,Ce,Ie,Fe,ut.data)):P.texSubImage3D(ke,Y,V.x,V.y,V.z,Me,Ce,Ie,Fe,We,ut),P.pixelStorei(P.UNPACK_ROW_LENGTH,He),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,_t),P.pixelStorei(P.UNPACK_SKIP_PIXELS,_n),P.pixelStorei(P.UNPACK_SKIP_ROWS,Pt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ci),Y===0&&$.generateMipmaps&&P.generateMipmap(ke),ee.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?A.setTextureCube(R,0):R.isData3DTexture?A.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?A.setTexture2DArray(R,0):A.setTexture2D(R,0),ee.unbindTexture()},this.resetState=function(){C=0,E=0,T=null,ee.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Yd?"display-p3":"srgb",n.unpackColorSpace=et.workingColorSpace===vu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===kt?Lr:Uv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Lr?kt:Ci}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class SA extends s_{}SA.prototype.isWebGL1Renderer=!0;class Kd{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new ze(e),this.near=n,this.far=i}clone(){return new Kd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class EA extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class o_ extends eo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zm=new G,km=new G,Bm=new yt,Dc=new Gv,tl=new _u;class MA extends Ft{constructor(e=new ti,n=new o_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)zm.fromBufferAttribute(n,r-1),km.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=zm.distanceTo(km);e.setAttribute("lineDistance",new wn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),tl.copy(i.boundingSphere),tl.applyMatrix4(r),tl.radius+=s,e.ray.intersectsSphere(tl)===!1)return;Bm.copy(r).invert(),Dc.copy(e.ray).applyMatrix4(Bm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new G,c=new G,h=new G,d=new G,p=this.isLineSegments?2:1,v=i.index,_=i.attributes.position;if(v!==null){const f=Math.max(0,o.start),g=Math.min(v.count,o.start+o.count);for(let m=f,y=g-1;m<y;m+=p){const C=v.getX(m),E=v.getX(m+1);if(u.fromBufferAttribute(_,C),c.fromBufferAttribute(_,E),Dc.distanceSqToSegment(u,c,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||n.push({distance:D,point:h.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),g=Math.min(_.count,o.start+o.count);for(let m=f,y=g-1;m<y;m+=p){if(u.fromBufferAttribute(_,m),c.fromBufferAttribute(_,m+1),Dc.distanceSqToSegment(u,c,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(d);E<e.near||E>e.far||n.push({distance:E,point:h.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Hm=new G,Gm=new G;class wA extends MA{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Hm.fromBufferAttribute(n,r),Gm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Hm.distanceTo(Gm);e.setAttribute("lineDistance",new wn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class a_ extends vn{constructor(e,n,i,r,s,o,a,l,u){super(e,n,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ui{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],d=i[r+1]-c,p=(o-c)/d;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new ye:new G);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new G,r=[],s=[],o=[],a=new G,l=new yt;for(let p=0;p<=e;p++){const v=p/e;r[p]=this.getTangentAt(v,new G)}s[0]=new G,o[0]=new G;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),h<=u&&(u=h,i.set(0,1,0)),d<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(Kt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,v))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Kt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],p*v)),o[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Zd extends ui{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n){const i=n||new ye,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=u-this.aY;l=d*c-p*h+this.aX,u=d*h+p*c+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class TA extends Zd{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Jd(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,h){let d=(o-s)/u-(a-s)/(u+c)+(a-o)/c,p=(a-o)/c-(l-o)/(c+h)+(l-a)/h;d*=c,p*=c,r(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const nl=new G,Ic=new Jd,Nc=new Jd,Uc=new Jd;class AA extends ui{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new G){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:(nl.subVectors(r[0],r[1]).add(r[0]),u=nl);const h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(nl.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=nl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(u.distanceToSquared(h),p),x=Math.pow(h.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(c),p);x<1e-4&&(x=1),v<1e-4&&(v=x),_<1e-4&&(_=x),Ic.initNonuniformCatmullRom(u.x,h.x,d.x,c.x,v,x,_),Nc.initNonuniformCatmullRom(u.y,h.y,d.y,c.y,v,x,_),Uc.initNonuniformCatmullRom(u.z,h.z,d.z,c.z,v,x,_)}else this.curveType==="catmullrom"&&(Ic.initCatmullRom(u.x,h.x,d.x,c.x,this.tension),Nc.initCatmullRom(u.y,h.y,d.y,c.y,this.tension),Uc.initCatmullRom(u.z,h.z,d.z,c.z,this.tension));return i.set(Ic.calc(l),Nc.calc(l),Uc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new G().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Vm(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function RA(t,e){const n=1-t;return n*n*e}function CA(t,e){return 2*(1-t)*t*e}function bA(t,e){return t*t*e}function Io(t,e,n,i){return RA(t,e)+CA(t,n)+bA(t,i)}function PA(t,e){const n=1-t;return n*n*n*e}function LA(t,e){const n=1-t;return 3*n*n*t*e}function DA(t,e){return 3*(1-t)*t*t*e}function IA(t,e){return t*t*t*e}function No(t,e,n,i,r){return PA(t,e)+LA(t,n)+DA(t,i)+IA(t,r)}class l_ extends ui{constructor(e=new ye,n=new ye,i=new ye,r=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new ye){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(No(e,r.x,s.x,o.x,a.x),No(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class NA extends ui{constructor(e=new G,n=new G,i=new G,r=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new G){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(No(e,r.x,s.x,o.x,a.x),No(e,r.y,s.y,o.y,a.y),No(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class u_ extends ui{constructor(e=new ye,n=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new ye){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new ye){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class UA extends ui{constructor(e=new G,n=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new G){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new G){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class c_ extends ui{constructor(e=new ye,n=new ye,i=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new ye){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Io(e,r.x,s.x,o.x),Io(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class FA extends ui{constructor(e=new G,n=new G,i=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new G){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Io(e,r.x,s.x,o.x),Io(e,r.y,s.y,o.y),Io(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class f_ extends ui{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new ye){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],c=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(Vm(a,l.x,u.x,c.x,h.x),Vm(a,l.y,u.y,c.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new ye().fromArray(r))}return this}}var Vf=Object.freeze({__proto__:null,ArcCurve:TA,CatmullRomCurve3:AA,CubicBezierCurve:l_,CubicBezierCurve3:NA,EllipseCurve:Zd,LineCurve:u_,LineCurve3:UA,QuadraticBezierCurve:c_,QuadraticBezierCurve3:FA,SplineCurve:f_});class OA extends ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vf[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){const c=l[u];i&&i.equals(c)||(n.push(c),i=c)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new Vf[r.type]().fromJSON(r))}return this}}class Wm extends OA{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new u_(this.currentPoint.clone(),new ye(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new c_(this.currentPoint.clone(),new ye(e,n),new ye(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new l_(this.currentPoint.clone(),new ye(e,n),new ye(i,r),new ye(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new f_(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+u,n+c,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const u=new Zd(e,n,i,r,s,o,a,l);if(this.curves.length>0){const h=u.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(u);const c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class d_ extends Wm{constructor(e){super(e),this.uuid=Qs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new Wm().fromJSON(r))}return this}}const zA={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=h_(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,u,c,h,d,p;if(i&&(s=VA(t,e,s,n)),t.length>80*n){a=u=t[0],l=c=t[1];for(let v=n;v<r;v+=n)h=t[v],d=t[v+1],h<a&&(a=h),d<l&&(l=d),h>u&&(u=h),d>c&&(c=d);p=Math.max(u-a,c-l),p=p!==0?32767/p:0}return ta(s,o,n,a,l,p,0),o}};function h_(t,e,n,i,r){let s,o;if(r===eR(t,e,n,i)>0)for(s=e;s<n;s+=i)o=Xm(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=Xm(s,t[s],t[s+1],o);return o&&Eu(o,o.next)&&(ia(o),o=o.next),o}function Hr(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Eu(n,n.next)||dt(n.prev,n,n.next)===0)){if(ia(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function ta(t,e,n,i,r,s,o){if(!t)return;!o&&s&&qA(t,i,r,s);let a=t,l,u;for(;t.prev!==t.next;){if(l=t.prev,u=t.next,s?BA(t,i,r,s):kA(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(u.i/n|0),ia(t),t=u.next,a=u.next;continue}if(t=u,t===a){o?o===1?(t=HA(Hr(t),e,n),ta(t,e,n,i,r,s,2)):o===2&&GA(t,e,n,i,r,s):ta(Hr(t),e,n,i,r,s,1);break}}}function kA(t){const e=t.prev,n=t,i=t.next;if(dt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,u=i.y,c=r<s?r<o?r:o:s<o?s:o,h=a<l?a<u?a:u:l<u?l:u,d=r>s?r>o?r:o:s>o?s:o,p=a>l?a>u?a:u:l>u?l:u;let v=i.next;for(;v!==e;){if(v.x>=c&&v.x<=d&&v.y>=h&&v.y<=p&&ws(r,a,s,l,o,u,v.x,v.y)&&dt(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function BA(t,e,n,i){const r=t.prev,s=t,o=t.next;if(dt(r,s,o)>=0)return!1;const a=r.x,l=s.x,u=o.x,c=r.y,h=s.y,d=o.y,p=a<l?a<u?a:u:l<u?l:u,v=c<h?c<d?c:d:h<d?h:d,x=a>l?a>u?a:u:l>u?l:u,_=c>h?c>d?c:d:h>d?h:d,f=Wf(p,v,e,n,i),g=Wf(x,_,e,n,i);let m=t.prevZ,y=t.nextZ;for(;m&&m.z>=f&&y&&y.z<=g;){if(m.x>=p&&m.x<=x&&m.y>=v&&m.y<=_&&m!==r&&m!==o&&ws(a,c,l,h,u,d,m.x,m.y)&&dt(m.prev,m,m.next)>=0||(m=m.prevZ,y.x>=p&&y.x<=x&&y.y>=v&&y.y<=_&&y!==r&&y!==o&&ws(a,c,l,h,u,d,y.x,y.y)&&dt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;m&&m.z>=f;){if(m.x>=p&&m.x<=x&&m.y>=v&&m.y<=_&&m!==r&&m!==o&&ws(a,c,l,h,u,d,m.x,m.y)&&dt(m.prev,m,m.next)>=0)return!1;m=m.prevZ}for(;y&&y.z<=g;){if(y.x>=p&&y.x<=x&&y.y>=v&&y.y<=_&&y!==r&&y!==o&&ws(a,c,l,h,u,d,y.x,y.y)&&dt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function HA(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!Eu(r,s)&&p_(r,i,i.next,s)&&na(r,s)&&na(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),ia(i),ia(i.next),i=t=s),i=i.next}while(i!==t);return Hr(i)}function GA(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ZA(o,a)){let l=m_(o,a);o=Hr(o,o.next),l=Hr(l,l.next),ta(o,e,n,i,r,s,0),ta(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function VA(t,e,n,i){const r=[];let s,o,a,l,u;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,u=h_(t,a,l,i,!1),u===u.next&&(u.steiner=!0),r.push(KA(u));for(r.sort(WA),s=0;s<r.length;s++)n=XA(r[s],n);return n}function WA(t,e){return t.x-e.x}function XA(t,e){const n=jA(t,e);if(!n)return e;const i=m_(n,t);return Hr(i,i.next),Hr(n,n.next)}function jA(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const d=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=s&&d>i&&(i=d,r=n.x<n.next.x?n:n.next,d===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,u=r.y;let c=1/0,h;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&ws(o<u?s:i,o,l,u,o<u?i:s,o,n.x,n.y)&&(h=Math.abs(o-n.y)/(s-n.x),na(n,t)&&(h<c||h===c&&(n.x>r.x||n.x===r.x&&YA(r,n)))&&(r=n,c=h)),n=n.next;while(n!==a);return r}function YA(t,e){return dt(t.prev,t,e.prev)<0&&dt(e.next,t,t.next)<0}function qA(t,e,n,i){let r=t;do r.z===0&&(r.z=Wf(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,$A(r)}function $A(t){let e,n,i,r,s,o,a,l,u=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<u&&(a++,i=i.nextZ,!!i);e++);for(l=u;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,u*=2}while(o>1);return t}function Wf(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function KA(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function ws(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function ZA(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!JA(t,e)&&(na(t,e)&&na(e,t)&&QA(t,e)&&(dt(t.prev,t,e.prev)||dt(t,e.prev,e))||Eu(t,e)&&dt(t.prev,t,t.next)>0&&dt(e.prev,e,e.next)>0)}function dt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Eu(t,e){return t.x===e.x&&t.y===e.y}function p_(t,e,n,i){const r=rl(dt(t,e,n)),s=rl(dt(t,e,i)),o=rl(dt(n,i,t)),a=rl(dt(n,i,e));return!!(r!==s&&o!==a||r===0&&il(t,n,e)||s===0&&il(t,i,e)||o===0&&il(n,t,i)||a===0&&il(n,e,i))}function il(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function rl(t){return t>0?1:t<0?-1:0}function JA(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&p_(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function na(t,e){return dt(t.prev,t,t.next)<0?dt(t,e,t.next)>=0&&dt(t,t.prev,e)>=0:dt(t,e,t.prev)<0||dt(t,t.next,e)<0}function QA(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function m_(t,e){const n=new Xf(t.i,t.x,t.y),i=new Xf(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function Xm(t,e,n,i){const r=new Xf(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ia(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Xf(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function eR(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class Uo{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Uo.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];jm(e),Ym(i,e);let o=e.length;n.forEach(jm);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,Ym(i,n[l]);const a=zA.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function jm(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function Ym(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Qd extends ti{constructor(e=new d_([new ye(.5,.5),new ye(-.5,.5),new ye(-.5,-.5),new ye(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];o(u)}this.setAttribute("position",new wn(r,3)),this.setAttribute("uv",new wn(s,2)),this.computeVertexNormals();function o(a){const l=[],u=n.curveSegments!==void 0?n.curveSegments:12,c=n.steps!==void 0?n.steps:1,h=n.depth!==void 0?n.depth:1;let d=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,v=n.bevelSize!==void 0?n.bevelSize:p-.1,x=n.bevelOffset!==void 0?n.bevelOffset:0,_=n.bevelSegments!==void 0?n.bevelSegments:3;const f=n.extrudePath,g=n.UVGenerator!==void 0?n.UVGenerator:tR;let m,y=!1,C,E,T,D;f&&(m=f.getSpacedPoints(c),y=!0,d=!1,C=f.computeFrenetFrames(c,!1),E=new G,T=new G,D=new G),d||(_=0,p=0,v=0,x=0);const S=a.extractPoints(u);let M=S.shape;const k=S.holes;if(!Uo.isClockWise(M)){M=M.reverse();for(let P=0,de=k.length;P<de;P++){const J=k[P];Uo.isClockWise(J)&&(k[P]=J.reverse())}}const te=Uo.triangulateShape(M,k),I=M;for(let P=0,de=k.length;P<de;P++){const J=k[P];M=M.concat(J)}function H(P,de,J){return de||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(de,J)}const j=M.length,Z=te.length;function F(P,de,J){let ue,ee,be;const Ee=P.x-de.x,A=P.y-de.y,w=J.x-P.x,X=J.y-P.y,le=Ee*Ee+A*A,re=Ee*X-A*w;if(Math.abs(re)>Number.EPSILON){const ne=Math.sqrt(le),Re=Math.sqrt(w*w+X*X),ve=de.x-A/ne,Te=de.y+Ee/ne,Le=J.x-X/Re,Be=J.y+w/Re,se=((Le-ve)*X-(Be-Te)*w)/(Ee*X-A*w);ue=ve+Ee*se-P.x,ee=Te+A*se-P.y;const Ze=ue*ue+ee*ee;if(Ze<=2)return new ye(ue,ee);be=Math.sqrt(Ze/2)}else{let ne=!1;Ee>Number.EPSILON?w>Number.EPSILON&&(ne=!0):Ee<-Number.EPSILON?w<-Number.EPSILON&&(ne=!0):Math.sign(A)===Math.sign(X)&&(ne=!0),ne?(ue=-A,ee=Ee,be=Math.sqrt(le)):(ue=Ee,ee=A,be=Math.sqrt(le/2))}return new ye(ue/be,ee/be)}const L=[];for(let P=0,de=I.length,J=de-1,ue=P+1;P<de;P++,J++,ue++)J===de&&(J=0),ue===de&&(ue=0),L[P]=F(I[P],I[J],I[ue]);const B=[];let O,b=L.concat();for(let P=0,de=k.length;P<de;P++){const J=k[P];O=[];for(let ue=0,ee=J.length,be=ee-1,Ee=ue+1;ue<ee;ue++,be++,Ee++)be===ee&&(be=0),Ee===ee&&(Ee=0),O[ue]=F(J[ue],J[be],J[Ee]);B.push(O),b=b.concat(O)}for(let P=0;P<_;P++){const de=P/_,J=p*Math.cos(de*Math.PI/2),ue=v*Math.sin(de*Math.PI/2)+x;for(let ee=0,be=I.length;ee<be;ee++){const Ee=H(I[ee],L[ee],ue);oe(Ee.x,Ee.y,-J)}for(let ee=0,be=k.length;ee<be;ee++){const Ee=k[ee];O=B[ee];for(let A=0,w=Ee.length;A<w;A++){const X=H(Ee[A],O[A],ue);oe(X.x,X.y,-J)}}}const U=v+x;for(let P=0;P<j;P++){const de=d?H(M[P],b[P],U):M[P];y?(T.copy(C.normals[0]).multiplyScalar(de.x),E.copy(C.binormals[0]).multiplyScalar(de.y),D.copy(m[0]).add(T).add(E),oe(D.x,D.y,D.z)):oe(de.x,de.y,0)}for(let P=1;P<=c;P++)for(let de=0;de<j;de++){const J=d?H(M[de],b[de],U):M[de];y?(T.copy(C.normals[P]).multiplyScalar(J.x),E.copy(C.binormals[P]).multiplyScalar(J.y),D.copy(m[P]).add(T).add(E),oe(D.x,D.y,D.z)):oe(J.x,J.y,h/c*P)}for(let P=_-1;P>=0;P--){const de=P/_,J=p*Math.cos(de*Math.PI/2),ue=v*Math.sin(de*Math.PI/2)+x;for(let ee=0,be=I.length;ee<be;ee++){const Ee=H(I[ee],L[ee],ue);oe(Ee.x,Ee.y,h+J)}for(let ee=0,be=k.length;ee<be;ee++){const Ee=k[ee];O=B[ee];for(let A=0,w=Ee.length;A<w;A++){const X=H(Ee[A],O[A],ue);y?oe(X.x,X.y+m[c-1].y,m[c-1].x+J):oe(X.x,X.y,h+J)}}}z(),K();function z(){const P=r.length/3;if(d){let de=0,J=j*de;for(let ue=0;ue<Z;ue++){const ee=te[ue];ae(ee[2]+J,ee[1]+J,ee[0]+J)}de=c+_*2,J=j*de;for(let ue=0;ue<Z;ue++){const ee=te[ue];ae(ee[0]+J,ee[1]+J,ee[2]+J)}}else{for(let de=0;de<Z;de++){const J=te[de];ae(J[2],J[1],J[0])}for(let de=0;de<Z;de++){const J=te[de];ae(J[0]+j*c,J[1]+j*c,J[2]+j*c)}}i.addGroup(P,r.length/3-P,0)}function K(){const P=r.length/3;let de=0;Q(I,de),de+=I.length;for(let J=0,ue=k.length;J<ue;J++){const ee=k[J];Q(ee,de),de+=ee.length}i.addGroup(P,r.length/3-P,1)}function Q(P,de){let J=P.length;for(;--J>=0;){const ue=J;let ee=J-1;ee<0&&(ee=P.length-1);for(let be=0,Ee=c+_*2;be<Ee;be++){const A=j*be,w=j*(be+1),X=de+ue+A,le=de+ee+A,re=de+ee+w,ne=de+ue+w;he(X,le,re,ne)}}}function oe(P,de,J){l.push(P),l.push(de),l.push(J)}function ae(P,de,J){fe(P),fe(de),fe(J);const ue=r.length/3,ee=g.generateTopUV(i,r,ue-3,ue-2,ue-1);ge(ee[0]),ge(ee[1]),ge(ee[2])}function he(P,de,J,ue){fe(P),fe(de),fe(ue),fe(de),fe(J),fe(ue);const ee=r.length/3,be=g.generateSideWallUV(i,r,ee-6,ee-3,ee-2,ee-1);ge(be[0]),ge(be[1]),ge(be[3]),ge(be[1]),ge(be[2]),ge(be[3])}function fe(P){r.push(l[P*3+0]),r.push(l[P*3+1]),r.push(l[P*3+2])}function ge(P){s.push(P.x),s.push(P.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return nR(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Vf[r.type]().fromJSON(r)),new Qd(i,e.options)}}const tR={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],u=e[r*3],c=e[r*3+1];return[new ye(s,o),new ye(a,l),new ye(u,c)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],u=e[i*3],c=e[i*3+1],h=e[i*3+2],d=e[r*3],p=e[r*3+1],v=e[r*3+2],x=e[s*3],_=e[s*3+1],f=e[s*3+2];return Math.abs(a-c)<Math.abs(o-u)?[new ye(o,1-l),new ye(u,1-h),new ye(d,1-v),new ye(x,1-f)]:[new ye(a,1-l),new ye(c,1-h),new ye(p,1-v),new ye(_,1-f)]}};function nR(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class js extends eo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fv,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class g_ extends Ft{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class iR extends g_{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Fc=new yt,qm=new G,$m=new G;class rR{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qd,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;qm.setFromMatrixPosition(e.matrixWorld),n.position.copy(qm),$m.setFromMatrixPosition(e.target.matrixWorld),n.lookAt($m),n.updateMatrixWorld(),Fc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Fc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class sR extends rR{constructor(){super(new Jv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oR extends g_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new sR}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class aR extends wA{constructor(e=10,n=10,i=4473924,r=8947848){i=new ze(i),r=new ze(r);const s=n/2,o=e/n,a=e/2,l=[],u=[];for(let d=0,p=0,v=-a;d<=n;d++,v+=o){l.push(-a,0,v,a,0,v),l.push(v,0,-a,v,0,a);const x=d===s?i:r;x.toArray(u,p),p+=3,x.toArray(u,p),p+=3,x.toArray(u,p),p+=3,x.toArray(u,p),p+=3}const c=new ti;c.setAttribute("position",new wn(l,3)),c.setAttribute("color",new wn(u,3));const h=new o_({vertexColors:!0,toneMapped:!1});super(c,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xd);function Oc(t,e,n){return Math.min(n,Math.max(e,t))}function Mu(t){const e=t.replace("#","");return{r:parseInt(e.substring(0,2),16)||0,g:parseInt(e.substring(2,4),16)||0,b:parseInt(e.substring(4,6),16)||0}}function ra(t,e,n){const i=Oc(t.r*e,0,255)|0,r=Oc(t.g*e,0,255)|0,s=Oc(t.b*e,0,255)|0;return`rgba(${i},${r},${s},${n})`}function lR(t,e){return e==="concrete"?30:e==="marble"?6:e==="tile"?4:t==="roof"?26:t==="wall"?18:8}function uR(t,e){return t==="marble"?Math.max(.2,e-.45):t==="tile"?Math.max(.3,e-.3):e}function cR(t,e,n){const i=Mu(e),r=n/8,s=n/4;t.strokeStyle=ra(i,.5,.9),t.lineWidth=3;for(let a=0;a<=n;a+=r)t.beginPath(),t.moveTo(0,a),t.lineTo(n,a),t.stroke();let o=0;for(let a=0;a<n;a+=r){const l=o%2===0?0:s/2;for(let u=-s;u<=n+s;u+=s)t.beginPath(),t.moveTo(u+l,a),t.lineTo(u+l,a+r),t.stroke();o++}}function fR(t,e,n){const i=Mu(e),r=n/4;t.strokeStyle=ra(i,1.35,.85),t.lineWidth=3;for(let s=0;s<=4;s++)t.beginPath(),t.moveTo(s*r,0),t.lineTo(s*r,n),t.stroke(),t.beginPath(),t.moveTo(0,s*r),t.lineTo(n,s*r),t.stroke()}function dR(t,e,n){const i=Mu(e),r=n/6;for(let s=0;s<n;s+=r){t.strokeStyle=ra(i,.55,.85),t.lineWidth=2,t.beginPath(),t.moveTo(0,s),t.lineTo(n,s),t.stroke();for(let o=0;o<5;o++){const a=s+Math.random()*r,l=.85+Math.random()*.35;t.strokeStyle=ra(i,l,.35),t.lineWidth=1,t.beginPath();const u=Math.random()*n*.6;t.moveTo(u,a),t.lineTo(u+n*(.2+Math.random()*.3),a),t.stroke()}}}function hR(t,e,n){const i=Mu(e);for(let r=0;r<4;r++){const s=r%2===0?1.4:.7;t.strokeStyle=ra(i,s,.4),t.lineWidth=1+Math.random()*1.5,t.beginPath();let o=Math.random()*n,a=0;for(t.moveTo(o,a);a<n;){const l=o+(Math.random()-.5)*n*.3,u=a+n/6;t.quadraticCurveTo(o+(Math.random()-.5)*20,(a+u)/2,l,u),o=l,a=u}t.stroke()}}function pR(t,e,n,i){n==="brick"?cR(t,e,i):n==="tile"?fR(t,e,i):n==="wood"?dR(t,e,i):n==="marble"&&hR(t,e,i)}function Km(t,e=2.7,n=0){var d;if(!t.length)return{x:10,z:8,radius:12,targetY:1};let i=1/0,r=1/0,s=-1/0,o=-1/0,a=0;t.forEach(p=>{i=Math.min(i,p.gx),s=Math.max(s,p.gx+p.gw),r=Math.min(r,p.gy),o=Math.max(o,p.gy+p.gh),a=Math.max(a,p.floor??0)});const l=eh(t,e,0,n),u=((d=t.find(p=>(p.floor??0)===a))==null?void 0:d.wall_height)??e,c=l.get(a)+u+nr,h=Math.max(s-i,o-r);return{x:(i+s)/2,z:(r+o)/2,radius:Math.max(h,c)*1.5+4,targetY:Math.max(1,c*.55)}}function eh(t,e,n=0,i=0){const r=Math.max(n,0,...t.map(a=>a.floor??0)),s=new Map;let o=0;for(let a=0;a<=r;a++){s.set(a,o);const l=t.find(c=>(c.floor??0)===a),u=(l==null?void 0:l.wall_height)??e;o+=u+nr+i}return s}function Ns(t,e,n){return Math.min(n,Math.max(e,t))}function v_(t){if(t.points&&t.points.length>=3){const e=t.points;let n=0;for(let i=0;i<e.length;i++){const r=e[i],s=e[(i+1)%e.length];n+=r.x*s.y-s.x*r.y}return Math.abs(n)/2}return t.gw*t.gh}const ft=.15,Nt=.9,__=2.05,fn=.9,Zl=.9,mR=.4,zc=.6,nr=.18,Ys=.22,xr=.35,Eo=28*Math.PI/180,Dr=0,xi=.55,Jl=.75,gR=.85,x_={bed:{label:"سرير",w:1.6,d:2,category:"غرفة نوم"},wardrobe:{label:"خزانة",w:1.2,d:.6,category:"غرفة نوم"},nightstand:{label:"كومودينو",w:.45,d:.4,category:"غرفة نوم"},sofa:{label:"أريكة",w:1.8,d:.85,category:"صالة"},armchair:{label:"كرسي بذراعين",w:.75,d:.75,category:"صالة"},tv_unit:{label:"وحدة تلفزيون",w:1.4,d:.4,category:"صالة"},dining_table:{label:"طاولة سفرة",w:1.6,d:.9,category:"صالة"},table:{label:"طاولة",w:1.4,d:.8,category:"عام"},chair:{label:"كرسي",w:.45,d:.45,category:"عام"},toilet:{label:"مرحاض",w:.4,d:.65,category:"حمام"},bathtub:{label:"بانيو",w:1.7,d:.75,category:"حمام"},shower:{label:"كابينة دش",w:.9,d:.9,category:"حمام"},sink:{label:"مغسلة حمام",w:.9,d:.55,category:"حمام"},kitchen_counter:{label:"كاونتر مطبخ",w:2,d:.6,category:"مطبخ"},stove:{label:"موقد",w:.6,d:.6,category:"مطبخ"},fridge:{label:"ثلاجة",w:.7,d:.7,category:"مطبخ"},desk:{label:"مكتب",w:1.2,d:.6,category:"مكتب"},bookshelf:{label:"مكتبة",w:.9,d:.3,category:"مكتب"}};function vR(t,e,n="plaster"){const r=document.createElement("canvas");r.width=256,r.height=256;const s=r.getContext("2d"),a=`#${new ze(t).getHexString()}`;s.fillStyle=a,s.fillRect(0,0,256,256);const l=lR(e,n),u=s.getImageData(0,0,256,256),c=u.data;for(let d=0;d<c.length;d+=4){const p=(Math.random()-.5)*l;c[d]=Ns(c[d]+p,0,255),c[d+1]=Ns(c[d+1]+p,0,255),c[d+2]=Ns(c[d+2]+p,0,255)}if(s.putImageData(u,0,0),pR(s,a,n,256),e==="roof"&&n==="plaster"){s.strokeStyle="rgba(0,0,0,0.12)",s.lineWidth=1;for(let d=0;d<=256;d+=32)s.beginPath(),s.moveTo(0,d+.5),s.lineTo(256,d+.5),s.stroke()}const h=new a_(r);return h.wrapS=zr,h.wrapT=zr,h.needsUpdate=!0,h}function _R(t,e,n,i="plaster"){const r=`${n}:${i}:${e}`;let s=t.get(r);return s||(s=vR(e,n,i),t.set(r,s)),s}function xR(){const e=new Float32Array(16384);for(let u=0;u<e.length;u++)e[u]=Math.random();const n=new Float32Array(128*128);for(let u=0;u<128;u++)for(let c=0;c<128;c++){let h=0;for(let d=-1;d<=1;d++)for(let p=-1;p<=1;p++){const v=(c+p+128)%128,x=(u+d+128)%128;h+=e[x*128+v]}n[u*128+c]=h/9}const i=document.createElement("canvas");i.width=128,i.height=128;const r=i.getContext("2d"),s=r.createImageData(128,128),o=s.data,a=1.2;for(let u=0;u<128;u++)for(let c=0;c<128;c++){const h=n[u*128+(c-1+128)%128],d=n[u*128+(c+1)%128],p=n[(u-1+128)%128*128+c],v=n[(u+1)%128*128+c];let x=(h-d)*a,_=(p-v)*a;const f=1,g=Math.hypot(x,_,f),m=(u*128+c)*4;o[m]=(x/g*.5+.5)*255,o[m+1]=(_/g*.5+.5)*255,o[m+2]=(f/g*.5+.5)*255,o[m+3]=255}r.putImageData(s,0,0);const l=new a_(i);return l.wrapS=zr,l.wrapT=zr,l.needsUpdate=!0,l}function yR(t){const e="normal:wall";let n=t.get(e);return n||(n=xR(),t.set(e,n)),n}function Ht(t,e,n,i,r,s,o="plaster"){const l=_R(t,e,n,o).clone();l.needsUpdate=!0;const u=1.2,c=Math.max(1,Math.round(i/u)),h=Math.max(1,Math.round(r/u));l.repeat.set(c,h);const d={map:l,roughness:uR(o,s)};if(n==="wall"){const p=yR(t).clone();p.needsUpdate=!0,p.repeat.set(c,h),d.normalMap=p,d.normalScale=new ye(.5,.5)}return new js(d)}function Tt(t,e,n,i,r,s,o,a,l,u){const c=new Fn(new Wr(Math.max(n,.03),Math.max(i,.03),Math.max(r,.03)),l);return c.position.set(s,o+i/2,a),c.scale.y=.001,c.castShadow=!0,c.receiveShadow=!0,t.add(c),e.meshes.push({mesh:c,height:i,baseY:o,delay:u}),c}function SR(t,e,n){if(n)return t<=Nt+.4?[]:[{start:(t-Nt)/2,width:Nt,sill:0,openH:__,isDoor:!0}];const i=Ns(1.3,.3,e-Zl-.25);if(i<=.3)return[];const r=t-2*mR;let s=0;if(r>=2*fn+zc?s=2:r>=fn&&(s=1),s===0)return[];const o=s*fn+(s-1)*zc,a=(t-o)/2,l=[];for(let u=0;u<s;u++)l.push({start:a+u*(fn+zc),width:fn,sill:Zl,openH:i,isDoor:!1});return l}const Ts=1e-6,ls=(t,e)=>Math.abs(t-e)<Ts,jf=.01;function ER(t){const e=[];for(let n=0;n<t.length;n++){const i=t[n],r=i.floor??0;for(let s=n+1;s<t.length;s++){const o=t[s];if((o.floor??0)===r){if(ls(o.gx,i.gx+i.gw)||ls(i.gx,o.gx+o.gw)){const a=Math.max(i.gy,o.gy),l=Math.min(i.gy+i.gh,o.gy+o.gh);l-a>jf&&(ls(o.gx,i.gx+i.gw)?e.push({a:{room:i,wall:"right"},b:{room:o,wall:"left"},start:a,end:l}):e.push({a:{room:i,wall:"left"},b:{room:o,wall:"right"},start:a,end:l}))}if(ls(o.gy,i.gy+i.gh)||ls(i.gy,o.gy+o.gh)){const a=Math.max(i.gx,o.gx),l=Math.min(i.gx+i.gw,o.gx+o.gw);l-a>jf&&(ls(o.gy,i.gy+i.gh)?e.push({a:{room:i,wall:"bottom"},b:{room:o,wall:"top"},start:a,end:l}):e.push({a:{room:i,wall:"top"},b:{room:o,wall:"bottom"},start:a,end:l}))}}}}return e}function y_(t){if(!t.length)return[];const e=t.slice().sort((i,r)=>i.start-r.start),n=[{...e[0]}];for(let i=1;i<e.length;i++){const r=e[i],s=n[n.length-1];r.start<=s.end+Ts?s.end=Math.max(s.end,r.end):n.push({...r})}return n}function S_(t,e,n=.02){const i=[];let r=0;return t.forEach(s=>{s.start>r+n&&i.push({start:r,end:s.start}),r=Math.max(r,s.end)}),e>r+n&&i.push({start:r,end:e}),i}function MR(t){const e=new Map,n=(r,s,o,a)=>{const l=`${r}:${s}`;e.has(l)||e.set(l,[]),e.get(l).push({start:o,end:a})};t.forEach(r=>{const{room:s,wall:o}=r.a,{room:a,wall:l}=r.b,u=o==="left"||o==="right"?s.gy:s.gx,c=l==="left"||l==="right"?a.gy:a.gx;n(s.id,o,r.start-u,r.end-u),n(a.id,l,r.start-c,r.end-c)});const i=new Map;return e.forEach((r,s)=>i.set(s,y_(r))),i}const sl=.02;function E_(t,e,n){return n!=null?`${t}:edge:${n}`:`${t}:${e}`}function Zm(t){if(t.points&&t.points.length>=3)return t.points.map((s,o)=>{const a=t.points[(o+1)%t.points.length];return{room:t,wall:null,edgeIndex:o,p1:s,p2:a,length:Math.hypot(a.x-s.x,a.y-s.y)}});const{gx:e,gy:n,gw:i,gh:r}=t;return[{room:t,wall:"top",edgeIndex:null,p1:{x:e,y:n},p2:{x:e+i,y:n},length:i},{room:t,wall:"bottom",edgeIndex:null,p1:{x:e,y:n+r},p2:{x:e+i,y:n+r},length:i},{room:t,wall:"left",edgeIndex:null,p1:{x:e,y:n},p2:{x:e,y:n+r},length:r},{room:t,wall:"right",edgeIndex:null,p1:{x:e+i,y:n},p2:{x:e+i,y:n+r},length:r}]}function wR(t,e){const n=t.length,i=e.length;if(!(n>sl)||!(i>sl))return null;const r=(t.p2.x-t.p1.x)/n,s=(t.p2.y-t.p1.y)/n,o=f=>Math.abs((f.x-t.p1.x)*s-(f.y-t.p1.y)*r);if(o(e.p1)>sl||o(e.p2)>sl)return null;const a=f=>(f.x-t.p1.x)*r+(f.y-t.p1.y)*s,l=a(e.p1),u=a(e.p2),c=Math.max(0,Math.min(l,u)),h=Math.min(n,Math.max(l,u));if(h-c<=jf)return null;const d=u<l,p=f=>d?l-f:f-l,v=f=>Math.min(i,Math.max(0,f)),x=p(c),_=p(h);return{a:{start:c,end:h},b:{start:v(Math.min(x,_)),end:v(Math.max(x,_))},p1:{x:t.p1.x+r*c,y:t.p1.y+s*c},p2:{x:t.p1.x+r*h,y:t.p1.y+s*h},length:h-c,flipped:d}}function TR(t){const e=i=>!!(i.points&&i.points.length>=3),n=[];for(let i=0;i<t.length;i++){const r=t[i],s=r.floor??0;for(let o=i+1;o<t.length;o++){const a=t[o];(a.floor??0)===s&&(!e(r)&&!e(a)||Zm(r).forEach(l=>{Zm(a).forEach(u=>{const c=wR(l,u);c&&n.push({a:{room:r,wall:l.wall,edgeIndex:l.edgeIndex,start:c.a.start,end:c.a.end,edgeLength:l.length},b:{room:a,wall:u.wall,edgeIndex:u.edgeIndex,start:c.b.start,end:c.b.end,edgeLength:u.length},p1:c.p1,p2:c.p2,length:c.length,flipped:c.flipped})})}))}}return n}function AR(t,e){const n=new Map;return e.forEach(i=>{[i.a,i.b].forEach(r=>{const s=E_(r.room.id,r.wall,r.edgeIndex);n.has(s)||n.set(s,[]),n.get(s).push({start:r.start,end:r.end})})}),n.forEach((i,r)=>{t.set(r,y_([...t.get(r)||[],...i]))}),t}function Jm(t){const e=[];return t.forEach(n=>{e.some(i=>Math.abs(i.start-n.start)<.05)||e.push(n)}),e}function Ql(t,e,n){const i=t.kind==="door",r=i?Nt:fn,s=i?0:Zl,o=i?__:Ns(1.3,.3,n-Zl-.25);return{start:Ns(Number(t.position)-r/2,0,Math.max(0,e-r)),width:r,sill:s,openH:o,isDoor:i}}function RR(t,e,n,i,r){return t==null?SR(n,i,r):t.filter(s=>s.wall===e).map(s=>Ql(s,n,i))}function Qm(t,e,n,i,r,s){const{axis:o,u0:a,fixed:l,wallLength:u,wallHeight:c,openings:h,floorBaseY:d=0}=s,p=f=>o==="x"?{x:a+f,z:l}:{x:l,z:a+f},v=h.slice().sort((f,g)=>f.start-g.start);let x=0;const _=[];v.forEach(f=>{f.start>x+.02&&_.push({start:x,end:f.start}),x=Math.max(x,f.start+f.width)}),x<u-.02&&_.push({start:x,end:u}),_.forEach(f=>{const g=f.end-f.start;if(g<=.02)return;const m=(f.start+f.end)/2,y=p(m),C=o==="x"?g:ft,E=o==="x"?ft:g,T=Ht(n,i,"wall",g,c,.85,r);Tt(t,e,C,c,E,y.x,d,y.z,T,Dr)}),v.forEach(f=>{const g=f.start+f.width/2,m=p(g),y=o==="x"?f.width:ft,C=o==="x"?ft:f.width;if(f.sill>.02){const D=Ht(n,i,"wall",f.width,f.sill,.85,r);Tt(t,e,y,f.sill,C,m.x,d,m.z,D,Dr)}const E=f.sill+f.openH,T=c-E;if(T>.02){const D=Ht(n,i,"wall",f.width,T,.85,r);Tt(t,e,y,T,C,m.x,d+E,m.z,D,Dr)}if(f.isDoor){const D=new js({color:9132587,roughness:.7}),S=o==="x"?f.width-.06:.05,M=o==="x"?.05:f.width-.06;Tt(t,e,S,f.openH,M,m.x,d,m.z,D,Jl)}else{const D=new js({color:10475752,transparent:!0,opacity:.35,roughness:.05,metalness:.1,side:cn}),S=o==="x"?f.width-.05:.03,M=o==="x"?.03:f.width-.05,k=Tt(t,e,S,f.openH-.05,M,m.x,d+f.sill,m.z,D,Jl);k.castShadow=!1}})}function CR(t,e,n,i,r,s,o,a,l,u,c,h){if(!c&&!h)return;if(c&&!h&&!i.points){if(i.roof_type==="gable"){bR(t,e,n,i,r,s,o,a,l,u);return}if(i.roof_type==="hip"){PR(t,e,n,i,r,s,o,l,u);return}}const p=`#${new ze(o).multiplyScalar(.72).getHexString()}`,v=i.gw+Ys*2,x=i.gh+Ys*2,_=Ht(n,p,"roof",v,x,.95);if(Tt(t,e,v,nr,x,l,s+r,u,_,xi),!c)return;const f=i.gw+ft,g=i.gh+ft,m=s+r+nr,y=l-i.gw/2,C=l+i.gw/2,E=u-i.gh/2,T=u+i.gh/2,D=Ht(n,p,"roof",f,xr,.95),S=Ht(n,p,"roof",g,xr,.95);Tt(t,e,f,xr,ft,l,m,E,D,xi),Tt(t,e,f,xr,ft,l,m,T,D,xi),Tt(t,e,ft,xr,g,y,m,u,S,xi),Tt(t,e,ft,xr,g,C,m,u,S,xi)}function bR(t,e,n,i,r,s,o,a,l,u){const c=i.gw>=i.gh,h=(c?i.gh:i.gw)+Ys*2,d=(c?i.gw:i.gh)+Ys*2,p=h/2,v=p*Math.tan(Eo),x=p/Math.cos(Eo),_=s+r,g=`#${new ze(o).multiplyScalar(.72).getHexString()}`,m=Ht(n,g,"roof",x,d,.95);[-1,1].forEach(D=>{const S=new Tr;S.position.set(l,_+v,u),c?S.rotation.x=D*Eo:S.rotation.z=-D*Eo,t.add(S);const M=c?d:x,k=c?x:d,W=c?0:D*x/2,te=c?D*x/2:0;Tt(S,e,M,nr,k,W,0,te,m,xi)});const y=c?i.gh:i.gw,C=(c?i.gw:i.gh)/2,E=10,T=Ht(n,o,"wall",y,v,.85,a);[-1,1].forEach(D=>{const S=c?l+D*C:l,M=c?u:u+D*C;for(let k=0;k<E;k++){const W=k/E,te=(k+1)/E,I=v/E,H=v*(W+te)/2,j=y*(1-(W+te)/2);Tt(t,e,c?ft:j,I,c?j:ft,S,_+H-I/2,M,T,xi)}})}function eg(t,e,n,i,r){const s=r/2,o=[t-n,-s,e-i],a=[t+n,-s,e-i],l=[t+n,-s,e+i],u=[t-n,-s,e+i],c=[t-(n-i),r-s,e],h=[t+(n-i),r-s,e],d=[u,l,h,u,h,c,a,o,c,a,c,h,o,u,c,l,a,h],p=new ti;return p.setAttribute("position",new Qn(new Float32Array(d.flat()),3)),p.computeVertexNormals(),p}function PR(t,e,n,i,r,s,o,a,l){const u=i.gw>=i.gh,c=(u?i.gh:i.gw)+Ys*2,h=(u?i.gw:i.gh)+Ys*2,d=c/2,p=h/2,v=d*Math.tan(Eo),x=u?eg(a,l,p,d,v):eg(0,0,p,d,v);u||(x.rotateY(Math.PI/2),x.translate(a,0,l));const f=`#${new ze(o).multiplyScalar(.72).getHexString()}`,g=Ht(n,f,"roof",h,c,.95);g.side=cn,$f(t,e,x,g,s+r,v,xi)}function M_(t,e,n){switch(n){case 90:return{x:-e,z:t};case 180:return{x:-t,z:-e};case 270:return{x:e,z:-t};default:return{x:t,z:e}}}function Ot(t,e,n,i,r,s,o,a){const l=i.rotation||0,{x:u,z:c}=M_(a.cx,a.cz,l),h=l===90||l===270,d=h?a.d:a.w,p=h?a.w:a.d,v=Ht(n,a.color,"wall",d,a.h,.75);Tt(t,e,d,a.h,p,r+u,o+a.bottomY,s+c,v,gR)}function LR(t,e,n,i,r,s,o){const a=l=>Ot(t,e,n,i,r,s,o,l);a({cx:0,cz:0,w:1.6,d:2,h:.35,bottomY:0,color:"#8B5A2B"}),a({cx:0,cz:0,w:1.5,d:1.9,h:.18,bottomY:.35,color:"#EDE7DC"}),a({cx:0,cz:-.96,w:1.6,d:.08,h:.55,bottomY:.35,color:"#8B5A2B"})}function DR(t,e,n,i,r,s,o){const a=l=>Ot(t,e,n,i,r,s,o,l);a({cx:0,cz:0,w:1.8,d:.85,h:.4,bottomY:0,color:"#3B4454"}),a({cx:0,cz:-.35,w:1.8,d:.15,h:.35,bottomY:.4,color:"#3B4454"}),a({cx:-.825,cz:0,w:.15,d:.85,h:.55,bottomY:0,color:"#2C3444"}),a({cx:.825,cz:0,w:.15,d:.85,h:.55,bottomY:0,color:"#2C3444"})}function IR(t,e,n,i,r,s,o){const a=u=>Ot(t,e,n,i,r,s,o,u);a({cx:0,cz:0,w:1.4,d:.8,h:.05,bottomY:.7,color:"#6B4A32"}),[[-.65,-.35],[.65,-.35],[-.65,.35],[.65,.35]].forEach(([u,c])=>a({cx:u,cz:c,w:.06,d:.06,h:.7,bottomY:0,color:"#3A2A1E"}))}function NR(t,e,n,i,r,s,o){const a=l=>Ot(t,e,n,i,r,s,o,l);a({cx:0,cz:0,w:1.2,d:.6,h:1.85,bottomY:0,color:"#C9A876"}),a({cx:0,cz:0,w:1.2,d:.6,h:.05,bottomY:1.85,color:"#A9895C"})}function UR(t,e,n,i,r,s,o){const a=l=>Ot(t,e,n,i,r,s,o,l);a({cx:0,cz:0,w:.9,d:.55,h:.82,bottomY:0,color:"#E8ECF0"}),a({cx:0,cz:-.05,w:.55,d:.35,h:.08,bottomY:.75,color:"#B9C2CC"}),a({cx:0,cz:-.25,w:.9,d:.05,h:.35,bottomY:.82,color:"#E8ECF0"})}function FR(t,e,n,i,r,s,o){const a=l=>Ot(t,e,n,i,r,s,o,l);a({cx:0,cz:0,w:.45,d:.4,h:.48,bottomY:0,color:"#C9A876"}),a({cx:0,cz:0,w:.45,d:.4,h:.02,bottomY:.48,color:"#A9895C"})}function OR(t,e,n,i,r,s,o){const a=l=>Ot(t,e,n,i,r,s,o,l);a({cx:0,cz:0,w:.75,d:.75,h:.4,bottomY:0,color:"#3B4454"}),a({cx:0,cz:-.3,w:.75,d:.15,h:.35,bottomY:.4,color:"#3B4454"}),a({cx:-.3,cz:0,w:.15,d:.75,h:.5,bottomY:0,color:"#2C3444"}),a({cx:.3,cz:0,w:.15,d:.75,h:.5,bottomY:0,color:"#2C3444"})}function zR(t,e,n,i,r,s,o){const a=l=>Ot(t,e,n,i,r,s,o,l);a({cx:0,cz:0,w:1.4,d:.4,h:.45,bottomY:0,color:"#3B4454"}),a({cx:0,cz:-.15,w:1.1,d:.05,h:.65,bottomY:.45,color:"#1A1A1D"})}function kR(t,e,n,i,r,s,o){const a=u=>Ot(t,e,n,i,r,s,o,u);a({cx:0,cz:0,w:1.6,d:.9,h:.05,bottomY:.72,color:"#5A3D28"}),[[-.72,-.4],[.72,-.4],[-.72,.4],[.72,.4]].forEach(([u,c])=>a({cx:u,cz:c,w:.07,d:.07,h:.72,bottomY:0,color:"#3A2A1E"}))}function BR(t,e,n,i,r,s,o){const a=u=>Ot(t,e,n,i,r,s,o,u);a({cx:0,cz:0,w:.42,d:.42,h:.05,bottomY:.45,color:"#4A4A52"}),a({cx:0,cz:-.185,w:.42,d:.05,h:.4,bottomY:.45,color:"#4A4A52"}),[[-.17,-.17],[.17,-.17],[-.17,.17],[.17,.17]].forEach(([u,c])=>a({cx:u,cz:c,w:.04,d:.04,h:.45,bottomY:0,color:"#2C3444"}))}function HR(t,e,n,i,r,s,o){const a=l=>Ot(t,e,n,i,r,s,o,l);a({cx:0,cz:.08,w:.4,d:.5,h:.4,bottomY:0,color:"#F2F2F4"}),a({cx:0,cz:-.28,w:.38,d:.15,h:.35,bottomY:.4,color:"#F2F2F4"})}function GR(t,e,n,i,r,s,o){const a=l=>Ot(t,e,n,i,r,s,o,l);a({cx:0,cz:0,w:1.7,d:.75,h:.55,bottomY:0,color:"#F2F2F4"}),a({cx:0,cz:0,w:1.5,d:.55,h:.4,bottomY:.12,color:"#DCE3E8"})}function VR(t,e,n,i,r,s,o){const a=l=>Ot(t,e,n,i,r,s,o,l);a({cx:0,cz:0,w:.9,d:.9,h:.05,bottomY:0,color:"#DCE3E8"}),a({cx:-.44,cz:0,w:.03,d:.9,h:1.9,bottomY:.05,color:"#9FD8E8"}),a({cx:0,cz:-.44,w:.9,d:.03,h:1.9,bottomY:.05,color:"#9FD8E8"})}function WR(t,e,n,i,r,s,o){const a=l=>Ot(t,e,n,i,r,s,o,l);a({cx:0,cz:0,w:2,d:.6,h:.85,bottomY:0,color:"#DCDCE1"}),a({cx:0,cz:0,w:2,d:.62,h:.04,bottomY:.85,color:"#1A1A1D"})}function XR(t,e,n,i,r,s,o){const a=l=>Ot(t,e,n,i,r,s,o,l);a({cx:0,cz:0,w:.6,d:.6,h:.85,bottomY:0,color:"#DCDCE1"}),a({cx:0,cz:0,w:.55,d:.55,h:.03,bottomY:.85,color:"#1A1A1D"})}function jR(t,e,n,i,r,s,o){const a=l=>Ot(t,e,n,i,r,s,o,l);a({cx:0,cz:0,w:.7,d:.7,h:1.8,bottomY:0,color:"#E8ECF0"}),a({cx:.3,cz:-.36,w:.03,d:.1,h:.4,bottomY:.9,color:"#8E8E96"})}function YR(t,e,n,i,r,s,o){const a=u=>Ot(t,e,n,i,r,s,o,u);a({cx:0,cz:0,w:1.2,d:.6,h:.04,bottomY:.72,color:"#6B4A32"}),a({cx:.4,cz:0,w:.35,d:.55,h:.72,bottomY:0,color:"#4A4A52"}),[[-.55,-.25],[-.55,.25]].forEach(([u,c])=>a({cx:u,cz:c,w:.05,d:.05,h:.72,bottomY:0,color:"#3A2A1E"}))}function qR(t,e,n,i,r,s,o){const a=l=>Ot(t,e,n,i,r,s,o,l);a({cx:0,cz:0,w:.9,d:.3,h:1.8,bottomY:0,color:"#8B5A2B"}),[.5,1,1.5].forEach(l=>a({cx:0,cz:0,w:.85,d:.28,h:.03,bottomY:l,color:"#6B4A32"}))}function $R(t,e,n,i,r,s,o){switch(i.kind){case"bed":return LR(t,e,n,i,r,s,o);case"sofa":return DR(t,e,n,i,r,s,o);case"table":return IR(t,e,n,i,r,s,o);case"wardrobe":return NR(t,e,n,i,r,s,o);case"sink":return UR(t,e,n,i,r,s,o);case"nightstand":return FR(t,e,n,i,r,s,o);case"armchair":return OR(t,e,n,i,r,s,o);case"tv_unit":return zR(t,e,n,i,r,s,o);case"dining_table":return kR(t,e,n,i,r,s,o);case"chair":return BR(t,e,n,i,r,s,o);case"toilet":return HR(t,e,n,i,r,s,o);case"bathtub":return GR(t,e,n,i,r,s,o);case"shower":return VR(t,e,n,i,r,s,o);case"kitchen_counter":return WR(t,e,n,i,r,s,o);case"stove":return XR(t,e,n,i,r,s,o);case"fridge":return jR(t,e,n,i,r,s,o);case"desk":return YR(t,e,n,i,r,s,o);case"bookshelf":return qR(t,e,n,i,r,s,o);default:return}}const Yf=1,yl=.28,KR=.18,ZR=.85;function th(t){const e=Math.max(4,Math.round(t/KR));return{w:Yf,d:e*yl,numSteps:e}}function JR(t,e,n,i,r,s,o,a,l){const{d:u,numSteps:c}=th(r),h=r/c,d=i.rotation||0,v=`#${new ze(l).multiplyScalar(.85).getHexString()}`,x=d===90||d===270;for(let _=0;_<c;_++){const f=-u/2+(_+.5)*yl,g=(_+1)*h,{x:m,z:y}=M_(0,f,d),C=x?yl:Yf,E=x?Yf:yl,T=Ht(n,v,"wall",C,g,.8);Tt(t,e,C,g,E,s+m,a,o+y,T,ZR)}}function qf(t,e,n,i,r,s,o,a,l,u,c=[]){const h=o.x-s.x,d=o.y-s.y,p=Math.hypot(h,d);if(p<.02)return;const v=Math.atan2(h,d),x=(s.x+o.x)/2-u.x,_=(s.y+o.y)/2-u.z,f=new Tr;f.position.set(x,l,_),f.rotation.y=v,t.add(f);const g=c.slice().sort((E,T)=>E.start-T.start),m=E=>E-p/2;let y=0;const C=[];g.forEach(E=>{E.start>y+.02&&C.push({start:y,end:E.start}),y=Math.max(y,E.start+E.width)}),y<p-.02&&C.push({start:y,end:p}),C.forEach(E=>{const T=E.end-E.start;if(T<=.02)return;const D=Ht(n,i,"wall",T,a,.85,r);Tt(f,e,ft,a,T,0,0,m((E.start+E.end)/2),D,Dr)}),g.forEach(E=>{const T=m(E.start+E.width/2);if(E.sill>.02){const M=Ht(n,i,"wall",E.width,E.sill,.85,r);Tt(f,e,ft,E.sill,E.width,0,0,T,M,Dr)}const D=E.sill+E.openH,S=a-D;if(S>.02){const M=Ht(n,i,"wall",E.width,S,.85,r);Tt(f,e,ft,S,E.width,0,D,T,M,Dr)}if(E.isDoor){const M=new js({color:9132587,roughness:.7});Tt(f,e,.05,E.openH,E.width-.06,0,0,T,M,Jl)}else{const M=new js({color:10475752,transparent:!0,opacity:.35,roughness:.05,metalness:.1,side:cn}),k=Tt(f,e,.03,E.openH-.05,E.width-.05,0,E.sill,T,M,Jl);k.castShadow=!1}})}function tg(t,e,n){const i=new d_;t.forEach((s,o)=>{const a=s.x-n.x,l=s.y-n.z;o===0?i.moveTo(a,l):i.lineTo(a,l)}),i.closePath();const r=new Qd(i,{depth:e,bevelEnabled:!1,curveSegments:1});return r.translate(0,0,-e/2),r.rotateX(Math.PI/2),r}function $f(t,e,n,i,r,s,o){const a=new Fn(n,i);return a.position.set(0,r+s/2,0),a.scale.y=.001,a.castShadow=!0,a.receiveShadow=!0,t.add(a),e.meshes.push({mesh:a,height:s,baseY:r,delay:o}),a}function QR(t,e,n,i,r,s,o,a,l,u,c,h=!1){const d=i.points;if(!d||d.length<3)return;const p=tg(d,.06,l),v=Ht(n,i.color,"floor",4,4,.9,i.floor_material);v.side=cn,$f(t,e,p,v,s,.06,Dr);for(let m=0;m<d.length;m++){const y=d[m],C=d[(m+1)%d.length],E=Math.hypot(C.x-y.x,C.y-y.y),T=(i.openings||[]).filter(S=>S.edge_index===m).map(S=>Ql(S,E,r)),D=(c==null?void 0:c.get(E_(i.id,null,m)))||[];S_(D,E).forEach(S=>{const M=W=>({x:y.x+(C.x-y.x)*W/E,y:y.y+(C.y-y.y)*W/E}),k=T.filter(W=>W.start>=S.start-.02&&W.start+W.width<=S.end+.02).map(W=>({...W,start:W.start-S.start}));qf(t,e,n,o,a,M(S.start),M(S.end),r,s,l,k)})}if(h||!i.has_roof&&!u)return;const _=`#${new ze(o).multiplyScalar(.72).getHexString()}`,f=tg(d,nr,l),g=Ht(n,_,"roof",4,4,.95);if(g.side=cn,$f(t,e,f,g,s+r,nr,xi),i.has_roof){const m=s+r+nr;for(let y=0;y<d.length;y++)qf(t,e,n,_,a,d[y],d[(y+1)%d.length],xr,m,l)}}const e2=[{wall:"top",axis:"x",doorFallback:!1},{wall:"bottom",axis:"x",doorFallback:!0},{wall:"left",axis:"z",doorFallback:!1},{wall:"right",axis:"z",doorFallback:!1}];function w_(t){var e,n,i;for((e=t.geometry)==null||e.dispose(),t.material&&((n=t.material.map)==null||n.dispose(),(i=t.material.normalMap)==null||i.dispose(),t.material.dispose());t.children.length;)w_(t.children.pop())}function t2(t,e){const n=(t.floor??0)+1,i=t.gx,r=t.gx+t.gw,s=t.gy,o=t.gy+t.gh;return e.some(a=>{if(a===t||(a.floor??0)!==n)return!1;const l=a.gx,u=a.gx+a.gw,c=a.gy,h=a.gy+a.gh;return i<u&&r>l&&s<h&&o>c})}function n2(t,e,n,i,r,s,o,a,l="plaster",u={}){const c=!!u.hideRoofs,h=u.floorGap??0;for(;t.children.length;)w_(t.children.pop());o.meshes=[];const d=e.filter(g=>!g.points),p=ER(d),v=TR(e),x=AR(MR(p),v),_=Math.max(0,...(n||[]).map(g=>(g.floor??0)+1)),f=eh(e,i,_,h);e.forEach(g=>{const m=g.floor??0,y=f.get(m),C=g.wall_height??i,E=g.wall_color??r,T=g.wall_material??l,D=t2(g,e);if(g.points){QR(t,o,a,g,C,y,E,T,s,D,x,c);return}const S=g.gx+g.gw/2-s.x,M=g.gy+g.gh/2-s.z,k=Ht(a,g.color,"floor",g.gw,g.gh,.9,g.floor_material),W=new Fn(new Wr(g.gw,.06,g.gh),k);W.position.set(S,y+.03,M),W.receiveShadow=!0,t.add(W);const te=g.gx-s.x,I=g.gx+g.gw-s.x,H=g.gy-s.z,j=g.gy+g.gh-s.z;e2.forEach(({wall:Z,axis:F,doorFallback:L})=>{const B=F==="x"?g.gw:g.gh,O=F==="x"?te:H,b=Z==="top"?H:Z==="bottom"?j:Z==="left"?te:I,U=x.get(`${g.id}:${Z}`)||[],z=S_(U,B);if(z.length===0)return;const K=RR(g.openings,Z,B,C,L);z.forEach(Q=>{const oe=Q.start<=Ts?ft/2:0,ae=Q.end>=B-Ts?ft/2:0,he=Q.end-Q.start+oe+ae,fe=O+Q.start-oe,ge=K.filter(P=>P.start>=Q.start-.02&&P.start+P.width<=Q.end+.02).map(P=>({...P,start:P.start-Q.start+oe}));Qm(t,o,a,E,T,{axis:F,u0:fe,fixed:b,wallLength:he,wallHeight:C,floorBaseY:y,openings:ge})})}),CR(t,o,a,g,C,y,E,T,S,M,!c&&!!g.has_roof,!c&&D),(g.furniture||[]).forEach(Z=>{$R(t,o,a,Z,g.gx+Number(Z.x)-s.x,g.gy+Number(Z.y)-s.z,y)})}),p.forEach(g=>{const{room:m,wall:y}=g.a,{room:C,wall:E}=g.b,T=f.get(m.floor??0),D=m.wall_height??i,S=m.wall_color??r,M=m.wall_material??l,k=m.gx-s.x,W=m.gx+m.gw-s.x,te=m.gy-s.z,I=m.gy+m.gh-s.z,H=y==="left"||y==="right"?"z":"x",j=H==="z"?m.gh:m.gw,Z=H==="z"?C.gh:C.gw,F=H==="z"?m.gy:m.gx,L=H==="z"?C.gy:C.gx,B=H==="z"?te:k,O=H==="z"?y==="right"?W:k:y==="bottom"?I:te,b=g.start-F,U=g.end-F,z=b<=Ts?ft/2:0,K=U>=j-Ts?ft/2:0,Q=U-b+z+K,oe=B+b-z,ae=(fe,ge,P,de)=>(fe.openings||[]).filter(J=>J.wall===ge&&J.kind==="door").filter(J=>{const ue=P+Number(J.position);return ue-Nt/2>=g.start-.02&&ue+Nt/2<=g.end+.02}).map(J=>{const ue=Ql(J,de,D);return{...ue,start:P+ue.start-g.start+z}}),he=Jm([...ae(m,y,F,j),...ae(C,E,L,Z)]);Qm(t,o,a,S,M,{axis:H,u0:oe,fixed:O,wallLength:Q,wallHeight:D,floorBaseY:T,openings:he})}),v.forEach(g=>{const m=g.a.room,y=f.get(m.floor??0),C=m.wall_height??i,E=m.wall_color??r,T=m.wall_material??l,D=(M,k)=>(M.room.openings||[]).filter(W=>(M.edgeIndex!=null?W.edge_index===M.edgeIndex:W.wall===M.wall)&&W.kind==="door").map(W=>Ql(W,M.edgeLength,C)).filter(W=>W.start>=M.start-.02&&W.start+W.width<=M.end+.02).map(W=>({...W,start:k&&g.flipped?M.end-(W.start+W.width):W.start-M.start})),S=Jm([...D(g.a,!1),...D(g.b,!0)]);qf(t,o,a,E,T,g.p1,g.p2,C,y,s,S)}),(n||[]).forEach(g=>{const m=g.floor??0,y=f.get(m),C=f.get(m+1)-y;if(!(C>0))return;const E=Number(g.x)-s.x,T=Number(g.y)-s.z;JR(t,o,a,g,C,E,T,y,r)}),o.progress=0,o.playing=!0}const ie=32;function Et(t,e=.5){return Math.round(t/e)*e}function Kn(t,e,n){return Math.min(n,Math.max(e,t))}function i2(t,e,n,i,r){return!n||!(n.width>0)||!(n.height>0)?{x:0,y:0}:{x:Kn((t-n.left)/n.width*i,0,i),y:Kn((e-n.top)/n.height*r,0,r)}}const r2=["الطابق الأرضي","الطابق الأول","الطابق الثاني","الطابق الثالث","الطابق الرابع","الطابق الخامس","الطابق السادس","الطابق السابع","الطابق الثامن","الطابق التاسع","الطابق العاشر","الطابق الحادي عشر","الطابق الثاني عشر"];function ng(t){return r2[t]||`الطابق ${t}`}const s2=12,o2=.3,a2=.22;function Kf(t,e,n,i,r,s){const o=r-n,a=s-i,l=o*o+a*a,u=l===0?0:Kn(((t-n)*o+(e-i)*a)/l,0,1),c=n+u*o,h=i+u*a;return{dist:Math.hypot(t-c,e-h),t:u}}function l2(t,e,n,i,r,s,o){let a=null;if(t.forEach(v=>{if(v.points){for(let _=0;_<v.points.length;_++){const f=v.points[_],g=v.points[(_+1)%v.points.length],m=Math.hypot(g.x-f.x,g.y-f.y),{dist:y,t:C}=Kf(e,n,f.x,f.y,g.x,g.y),E=C*m;(!a||y<a.dist)&&(a={dist:y,roomId:v.id,edgeIndex:_,length:m,rawPosition:E})}return}[{wall:"top",x1:v.gx,y1:v.gy,x2:v.gx+v.gw,y2:v.gy,length:v.gw},{wall:"bottom",x1:v.gx,y1:v.gy+v.gh,x2:v.gx+v.gw,y2:v.gy+v.gh,length:v.gw},{wall:"left",x1:v.gx,y1:v.gy,x2:v.gx,y2:v.gy+v.gh,length:v.gh},{wall:"right",x1:v.gx+v.gw,y1:v.gy,x2:v.gx+v.gw,y2:v.gy+v.gh,length:v.gh}].forEach(_=>{const{dist:f,t:g}=Kf(e,n,_.x1,_.y1,_.x2,_.y2),m=g*_.length;(!a||f<a.dist)&&(a={dist:f,roomId:v.id,wall:_.wall,length:_.length,rawPosition:m})})}),!a||a.dist>o2||a.length<i)return null;const l=i/2,u=Kn(a.rawPosition,l,a.length-l),c=a.wall==null;return(t.find(v=>v.id===a.roomId).openings||[]).filter(v=>(c?v.edge_index===a.edgeIndex:v.wall===a.wall)&&v.id!==o).some(v=>{const x=v.kind==="door"?Nt:fn;return u-l<v.position+x/2&&u+l>v.position-x/2})?null:c?{roomId:a.roomId,edgeIndex:a.edgeIndex,position:u}:{roomId:a.roomId,wall:a.wall,position:u}}function u2(t,e,n){let i=null;return t.forEach(r=>{(r.openings||[]).forEach(s=>{const o=s.kind==="door"?Nt:fn,a=no(r,s,o),{dist:l}=Kf(e,n,a.x1,a.y1,a.x2,a.y2);(!i||l<i.dist)&&(i={dist:l,roomId:r.id,id:s.id,wall:s.wall,edgeIndex:s.edge_index,position:s.position,kind:s.kind})})}),!i||i.dist>a2?null:i}function no(t,e,n){const i=n/2;if(t.points){const a=e.edgeIndex??e.edge_index,l=t.points[a],u=t.points[(a+1)%t.points.length],c=Math.hypot(u.x-l.x,u.y-l.y)||1,h=(e.position-i)/c,d=(e.position+i)/c;return{x1:l.x+(u.x-l.x)*h,y1:l.y+(u.y-l.y)*h,x2:l.x+(u.x-l.x)*d,y2:l.y+(u.y-l.y)*d}}const{wall:r,position:s}=e;if(r==="top"||r==="bottom"){const a=r==="top"?t.gy:t.gy+t.gh;return{x1:t.gx+s-i,y1:a,x2:t.gx+s+i,y2:a}}const o=r==="left"?t.gx:t.gx+t.gw;return{x1:o,y1:t.gy+s-i,x2:o,y2:t.gy+s+i}}const Wi=.35,qt=.08;function T_(t,e,n){if(e.points)return;const{gx:i,gy:r,gw:s,gh:o}=e;t.save(),t.strokeStyle=n.line,t.fillStyle=n.text,t.lineWidth=1,t.font="10px 'IBM Plex Mono', monospace",t.textAlign="center";const a=(d,p,v,x)=>{t.beginPath(),t.moveTo(d*ie,p*ie),t.lineTo(v*ie,x*ie),t.stroke()},l=r-Wi;a(i,r,i,l-qt),a(i+s,r,i+s,l-qt),a(i,l,i+s,l),t.fillText(s.toFixed(2),(i+s/2)*ie,(l-.06)*ie);const u=r+o+Wi;a(i,r+o,i,u+qt),a(i+s,r+o,i+s,u+qt),a(i,u,i+s,u),t.fillText(s.toFixed(2),(i+s/2)*ie,(u+.16)*ie);const c=i-Wi;a(i,r,c-qt,r),a(i,r+o,c-qt,r+o),a(c,r,c,r+o),t.save(),t.translate(c*ie-6,(r+o/2)*ie),t.rotate(-Math.PI/2),t.fillText(o.toFixed(2),0,0),t.restore();const h=i+s+Wi;a(i+s,r,h+qt,r),a(i+s,r+o,h+qt,r+o),a(h,r,h,r+o),t.save(),t.translate(h*ie+6,(r+o/2)*ie),t.rotate(-Math.PI/2),t.fillText(o.toFixed(2),0,0),t.restore(),t.restore()}function A_(t){if(t.points&&t.points.length){const e=t.points.length;return{x:t.points.reduce((n,i)=>n+i.x,0)/e,y:t.points.reduce((n,i)=>n+i.y,0)/e}}return{x:t.gx+t.gw/2,y:t.gy+t.gh/2}}function R_(t,e,n,i){if(n.kind!=="door")return;const r=no(e,n,Nt),s=r.x2-r.x1,o=r.y2-r.y1,a=Math.hypot(s,o);if(a<.01)return;const l={x:-o/a,y:s/a},u={x:o/a,y:-s/a},c=A_(e),h=(r.x1+r.x2)/2,d=(r.y1+r.y2)/2,p={x:c.x-h,y:c.y-d},v=l.x*p.x+l.y*p.y>=0?l:u,x=Math.atan2(o,s),_=Math.atan2(v.y,v.x);let f=_-x;for(;f>Math.PI;)f-=Math.PI*2;for(;f<=-Math.PI;)f+=Math.PI*2;const g=f<0,m=r.x1,y=r.y1;t.save(),t.strokeStyle=i,t.lineWidth=1,t.setLineDash([3,3]),t.beginPath(),t.arc(m*ie,y*ie,Nt*ie,x,_,g),t.stroke(),t.setLineDash([]),t.beginPath(),t.moveTo(m*ie,y*ie),t.lineTo((m+Nt*Math.cos(_))*ie,(y+Nt*Math.sin(_))*ie),t.stroke(),t.restore()}function c2(t,e,n,i,r,s,o,a){t.save(),t.strokeStyle=a,t.lineWidth=1;const l=Kn(o,2,16),u=s===90||s===270;for(let c=1;c<l;c++){if(t.beginPath(),u){const h=e+i*ie*c/l;t.moveTo(h,n),t.lineTo(h,n+r*ie)}else{const h=n+r*ie*c/l;t.moveTo(e,h),t.lineTo(e+i*ie,h)}t.stroke()}t.restore()}function f2(t,e){const n=x_[t];if(!n)return{w:.5,d:.5};const i=e===90||e===270;return{w:i?n.d:n.w,d:i?n.w:n.d}}function d2(t,e,n){let i=!1;for(let r=0,s=t.length-1;r<t.length;s=r++){const o=t[r].x,a=t[r].y,l=t[s].x,u=t[s].y;a>n!=u>n&&e<(l-o)*(n-a)/(u-a)+o&&(i=!i)}return i}const h2=.15;function nh(t,e,n){const i=eh(t,n,e+1);return i.get(e+1)-i.get(e)}function wu(t,e){const{w:n,d:i}=th(t),r=e===90||e===270;return{w:r?i:n,d:r?n:i}}function p2(t,e,n,i,r){let s=null;return t.forEach(o=>{const a=nh(e,o.floor??0,n),l=o.rotation||0,{w:u,d:c}=wu(a,l),h=o.x-u/2,d=o.x+u/2,p=o.y-c/2,v=o.y+c/2,x=Math.max(h-i,0,i-d),_=Math.max(p-r,0,r-v),f=Math.hypot(x,_);(!s||f<s.dist)&&(s={dist:f,id:o.id,floor:o.floor??0,x:o.x,y:o.y,rotation:l})}),!s||s.dist>h2?null:s}function ig(t,e,n,i,r,s){const{w:o,d:a}=wu(r,s);if(t<o||e<a)return null;const l=o/2,u=a/2,c=Kn(n,l,t-l),h=Kn(i,u,e-u);return{x:c,y:h}}function m2(t,e,n){const i=document.createElement("canvas");i.width=e*ie,i.height=n*ie;const r=i.getContext("2d");r.fillStyle="#FFFFFF",r.fillRect(0,0,i.width,i.height);for(let s=0;s<=e;s++)r.strokeStyle=s%5===0?"#C7C7CC":"#EDEDF0",r.lineWidth=s%5===0?1.2:1,r.beginPath(),r.moveTo(s*ie+.5,0),r.lineTo(s*ie+.5,n*ie),r.stroke();for(let s=0;s<=n;s++)r.strokeStyle=s%5===0?"#C7C7CC":"#EDEDF0",r.lineWidth=s%5===0?1.2:1,r.beginPath(),r.moveTo(0,s*ie+.5),r.lineTo(e*ie,s*ie+.5),r.stroke();return t.forEach(s=>{const o=s.gx*ie,a=s.gy*ie,l=s.gw*ie,u=s.gh*ie;s.points&&s.points.length>=3?(r.beginPath(),s.points.forEach((c,h)=>{h===0?r.moveTo(c.x*ie,c.y*ie):r.lineTo(c.x*ie,c.y*ie)}),r.closePath(),r.fillStyle=s.color+"25",r.fill(),r.strokeStyle=s.color,r.lineWidth=2,r.stroke(),r.fillStyle="#1A1A1D",r.font="700 13px Tajawal, sans-serif",r.fillText(s.name,o+8,a+20),r.fillStyle="#68686E",r.font="11px 'IBM Plex Mono', monospace",r.fillText(`${v_(s).toFixed(1)} m²`,o+8,a+36)):(r.fillStyle=s.color+"25",r.fillRect(o,a,l,u),r.strokeStyle=s.color,r.lineWidth=2,r.strokeRect(o,a,l,u),r.fillStyle="#1A1A1D",r.font="700 13px Tajawal, sans-serif",r.fillText(s.name,o+8,a+20),r.fillStyle="#68686E",r.font="11px 'IBM Plex Mono', monospace",r.fillText(`${s.gw.toFixed(1)} × ${s.gh.toFixed(1)} m`,o+8,a+36),T_(r,s,{line:"#B45309",text:"#92400E"})),(s.openings||[]).forEach(c=>{const h=c.kind==="door"?Nt:fn,d=no(s,c,h);r.strokeStyle=c.kind==="door"?"#8B5A2B":"#0EA5E9",r.lineWidth=5,r.beginPath(),r.moveTo(d.x1*ie,d.y1*ie),r.lineTo(d.x2*ie,d.y2*ie),r.stroke(),R_(r,s,c,"#8B5A2B")}),(s.furniture||[]).forEach(c=>{var x;const{w:h,d}=f2(c.kind,c.rotation||0),p=(s.gx+c.x-h/2)*ie,v=(s.gy+c.y-d/2)*ie;r.fillStyle="#A9895C25",r.fillRect(p,v,h*ie,d*ie),r.strokeStyle="#A9895C",r.lineWidth=1.5,r.strokeRect(p,v,h*ie,d*ie),r.fillStyle="#1A1A1D",r.font="10px Tajawal, sans-serif",r.textAlign="center",r.fillText(((x=x_[c.kind])==null?void 0:x.label)||"",p+h*ie/2,v+d*ie/2+3),r.textAlign="start"})}),i.toDataURL("image/png")}const kc=.62,Bc=Math.PI/4;function g2({rooms:t,stairs:e,wallHeight:n,wallColor:i,wallMaterial:r,autoRotate:s,dollhouse:o=!1,floorGap:a=0,t:l=u=>u}){const u=Ne.useRef(null),c=Ne.useRef({}),h=Ne.useRef({autoRotate:s}),d=Ne.useRef({maxRadius:50}),p=Ne.useRef(o),v=Ne.useRef(new Map),[x,_]=Ne.useState(0);return Ne.useEffect(()=>{h.current.autoRotate=s},[s]),Ne.useEffect(()=>{const f=u.current,g=new EA;g.background=new ze(15790322),g.fog=new Kd(15790322,22,60);const m=new In(50,1,.1,200),y=new s_({antialias:!0});y.setPixelRatio(Math.min(window.devicePixelRatio,2)),y.shadowMap.enabled=!0,y.shadowMap.type=Tv,f.appendChild(y.domElement),g.add(new iR(12572415,1711915,.95));const C=new oR(16773856,1);C.position.set(10,18,8),C.castShadow=!0,C.shadow.mapSize.set(2048,2048),C.shadow.bias=-.0015,g.add(C);const E=new Fn(new yu(300,300),new js({color:13948120,roughness:1}));E.rotation.x=-Math.PI/2,E.position.y=-.03,E.receiveShadow=!0,g.add(E);const T=new aR(300,150,10592682,13948120);T.position.y=-.02,g.add(T);const D=new Tr;g.add(D);const S=Km(t,n),M={theta:Bc,phi:o?kc:1,radius:S.radius,target:new G(0,S.targetY,0)};function k(){const{theta:ae,phi:he,radius:fe,target:ge}=M;m.position.set(ge.x+fe*Math.sin(he)*Math.sin(ae),ge.y+fe*Math.cos(he),ge.z+fe*Math.sin(he)*Math.cos(ae)),m.lookAt(ge)}let W=!1,te=0,I=0;const H=new Map;let j=null;function Z(){const[ae,he]=[...H.values()];return Math.hypot(ae.x-he.x,ae.y-he.y)}function F(ae){H.set(ae.pointerId,{x:ae.clientX,y:ae.clientY}),H.size===1?(W=!0,te=ae.clientX,I=ae.clientY):H.size===2&&(W=!1,j=Z())}function L(ae){if(H.has(ae.pointerId))H.set(ae.pointerId,{x:ae.clientX,y:ae.clientY});else if(!W)return;if(H.size>=2){const ge=Z();j&&(M.radius=Kn(M.radius*(j/ge),3,d.current.maxRadius),k()),j=ge;return}if(!W)return;const he=ae.clientX-te,fe=ae.clientY-I;te=ae.clientX,I=ae.clientY,M.theta-=he*.006,M.phi=Kn(M.phi-fe*.006,.15,1.5),k()}function B(ae){if(H.delete(ae.pointerId),j=null,H.size===1){const[[,he]]=H;W=!0,te=he.x,I=he.y}else H.size===0&&(W=!1)}function O(ae){ae.preventDefault(),M.radius=Kn(M.radius*(1+ae.deltaY*.001),3,d.current.maxRadius),k()}const b=y.domElement;b.style.cursor="grab",b.style.touchAction="none",b.addEventListener("pointerdown",F),window.addEventListener("pointermove",L),window.addEventListener("pointerup",B),window.addEventListener("pointercancel",B),b.addEventListener("wheel",O,{passive:!1});function U(){const ae=f.clientWidth,he=f.clientHeight;ae===0||he===0||(y.setSize(ae,he),m.aspect=ae/he,m.updateProjectionMatrix())}U();const z=new ResizeObserver(U);z.observe(f),k();const K={progress:0,playing:!0,meshes:[]};let Q;function oe(){Q=requestAnimationFrame(oe),h.current.autoRotate&&!W&&(M.theta+=.0028,k()),K.playing&&(K.progress=Math.min(1,K.progress+.025),K.meshes.forEach(({mesh:ae,height:he,baseY:fe,delay:ge})=>{const P=Kn((K.progress-ge)/(1-ge),0,1),de=1-Math.pow(1-P,3);ae.scale.y=Math.max(de,.001),ae.position.y=fe+he*de/2}),K.progress>=1&&(K.playing=!1)),y.render(g,m)}return oe(),c.current={scene:g,group:D,orbit:M,updateCamera:k,animState:K,dirLight:C,center:S,defaultRadius:S.radius,defaultTargetY:S.targetY},d.current.maxRadius=Math.max(50,S.radius*2),()=>{cancelAnimationFrame(Q),b.removeEventListener("pointerdown",F),window.removeEventListener("pointermove",L),window.removeEventListener("pointerup",B),window.removeEventListener("pointercancel",B),b.removeEventListener("wheel",O),z.disconnect(),f.removeChild(y.domElement),y.dispose()}},[]),Ne.useEffect(()=>{const f=c.current;if(f.group&&(n2(f.group,t,e,n,i,f.center,f.animState,v.current,r,{hideRoofs:o,floorGap:a}),f.dirLight)){const g=f.defaultRadius;f.dirLight.position.set(g*.6,Math.max(14,g*.9),g*.45);const m=f.dirLight.shadow.camera;m.left=-g,m.right=g,m.top=g,m.bottom=-g,m.near=1;const y=Math.max(n,...t.map(C=>C.wall_height??n));m.far=g*3+y*2,m.updateProjectionMatrix()}},[t,e,n,i,r,o,a]),Ne.useEffect(()=>{var m;const f=c.current;if(!f.orbit||!f.updateCamera)return;const g=Km(t,n,a);f.defaultRadius=g.radius,f.defaultTargetY=g.targetY,f.orbit.target.y=g.targetY,f.orbit.radius=g.radius,d.current.maxRadius=Math.max(50,g.radius*2),(m=f.scene)!=null&&m.fog&&(f.scene.fog.far=Math.max(60,g.radius*2.6)),o!==p.current&&(p.current=o,o&&(f.orbit.phi=kc,f.orbit.theta=Bc)),f.updateCamera()},[o,a]),Ne.useEffect(()=>{if(x===0)return;const f=c.current;f.orbit&&(f.orbit.theta=Bc,f.orbit.phi=o?kc:1,f.orbit.radius=f.defaultRadius,f.orbit.target.y=f.defaultTargetY??f.orbit.target.y,f.updateCamera())},[x]),Se.jsxs("div",{style:{position:"relative",width:"100%",height:"100%"},children:[Se.jsx("div",{ref:u,style:{width:"100%",height:"100%"}}),Se.jsx("button",{type:"button",onClick:()=>_(f=>f+1),style:{position:"absolute",bottom:12,right:12,fontSize:12,fontWeight:600,color:"#e2e8f0",background:"rgba(15,23,42,0.9)",border:"1px solid #334155",borderRadius:8,padding:"6px 12px",cursor:"pointer"},children:l("Reset camera")})]})}const ol=1.5,rg=["#cfd6cf","#d8cfc2","#c9d3df","#dccfd6","#cfd8d3"],v2=.35;function _2({rooms:t,stairs:e,wallHeight:n,gridW:i=20,gridH:r=16,mode:s,activeFloor:o=0,selectedRoomId:a,selectedOpening:l,selectedStairId:u,onAddRoom:c,onAddPolygonRoom:h,onMoveRoom:d,onResizeRoom:p,onMovePolygonRoom:v,onSelectRoom:x,onAddOpening:_,onSelectOpening:f,onAddStair:g,onMoveStair:m,onSelectStair:y}){const C=Ne.useRef(null),E=Ne.useRef(null),[T,D]=Ne.useState(null),[S,M]=Ne.useState(null),k=t.filter(O=>(O.floor??0)===o),W=e.filter(O=>(O.floor??0)===o),te=nh(t,o,n);Ne.useEffect(()=>{s!=="polygon"&&D(null)},[s]),Ne.useEffect(()=>{function O(b){b.key==="Escape"&&T&&D(null)}return window.addEventListener("keydown",O),()=>window.removeEventListener("keydown",O)},[T]);function I(O,b,U,z){b.points?(O.beginPath(),b.points.forEach((K,Q)=>{Q===0?O.moveTo(K.x*ie,K.y*ie):O.lineTo(K.x*ie,K.y*ie)}),O.closePath(),O.fillStyle=z,O.fill(),O.strokeStyle=U?"#c9a96e":"#4b5563",O.lineWidth=Math.max(2,ft*ie),O.stroke()):(O.fillStyle=z,O.fillRect(b.gx*ie,b.gy*ie,b.gw*ie,b.gh*ie),O.strokeStyle=U?"#c9a96e":"#4b5563",O.lineWidth=Math.max(2,ft*ie),O.strokeRect(b.gx*ie,b.gy*ie,b.gw*ie,b.gh*ie))}function H(){const O=C.current;if(!O)return;const b=O.getContext("2d");b.clearRect(0,0,O.width,O.height),b.strokeStyle="#e5e7eb",b.lineWidth=1;for(let z=0;z<=i;z++)b.beginPath(),b.moveTo(z*ie,0),b.lineTo(z*ie,r*ie),b.stroke();for(let z=0;z<=r;z++)b.beginPath(),b.moveTo(0,z*ie),b.lineTo(i*ie,z*ie),b.stroke();k.forEach((z,K)=>{const Q=z.id===a;I(b,z,Q,z.color||rg[K%rg.length]);const oe=z.points?z.points.reduce((he,fe)=>he+fe.x,0)/z.points.length:z.gx+z.gw/2,ae=z.points?z.points.reduce((he,fe)=>he+fe.y,0)/z.points.length:z.gy+z.gh/2;if(b.fillStyle="#1b1e22",b.font="13px sans-serif",b.textAlign="center",b.fillText(z.name,oe*ie,ae*ie),T_(b,z,{line:"#9ca3af",text:"#6b7280"}),(z.openings||[]).forEach(he=>{const fe=he.kind==="door"?Nt:fn,ge=no(z,he,fe),P=l&&l.roomId===z.id&&l.openingId===he.id;b.save(),b.strokeStyle=P?"#c9a96e":he.kind==="door"?"#8b5e34":"#3b82f6",b.lineWidth=Math.max(3,ft*ie+2),b.beginPath(),b.moveTo(ge.x1*ie,ge.y1*ie),b.lineTo(ge.x2*ie,ge.y2*ie),b.stroke(),b.restore(),he.kind==="door"&&R_(b,z,he,P?"#c9a96e":"#8b5e34")}),Q&&!z.points){b.fillStyle="#c9a96e";const he=(z.gx+z.gw)*ie,fe=(z.gy+z.gh)*ie;b.fillRect(he-6,fe-6,12,12)}}),W.forEach(z=>{const K=z.rotation||0,{w:Q,d:oe}=wu(te,K),ae=z.id===u,he=(z.x-Q/2)*ie,fe=(z.y-oe/2)*ie;b.strokeStyle=ae?"#c9a96e":"#6b5e3a",b.lineWidth=2,b.strokeRect(he,fe,Q*ie,oe*ie),c2(b,he,fe,Q,oe,K,th(te).numSteps,ae?"#c9a96e":"#6b5e3a")}),T&&T.length&&(b.strokeStyle="#c9a96e",b.lineWidth=2,b.beginPath(),T.forEach((z,K)=>{K===0?b.moveTo(z.x*ie,z.y*ie):b.lineTo(z.x*ie,z.y*ie)}),S&&b.lineTo(S.x*ie,S.y*ie),b.stroke(),b.fillStyle="#c9a96e",T.forEach(z=>{b.beginPath(),b.arc(z.x*ie,z.y*ie,4,0,Math.PI*2),b.fill()}));const U=E.current;if(U&&U.kind==="new-room"){const z=Math.min(U.startX,U.curX),K=Math.min(U.startY,U.curY),Q=Math.abs(U.curX-U.startX),oe=Math.abs(U.curY-U.startY);b.strokeStyle="#c9a96e",b.setLineDash([6,4]),b.lineWidth=2,b.strokeRect(z*ie,K*ie,Q*ie,oe*ie),b.setLineDash([])}}Ne.useEffect(H);function j(O){const b=C.current.getBoundingClientRect();return i2(O.clientX,O.clientY,b,i,r)}function Z(O,b){return k.find(U=>U.points?d2(U.points,O,b):O>=U.gx&&O<=U.gx+U.gw&&b>=U.gy&&b<=U.gy+U.gh)}function F(O){const{x:b,y:U}=j(O);if(s==="room"){E.current={kind:"new-room",startX:Et(b),startY:Et(U),curX:b,curY:U},H();return}if(s==="polygon"){const fe={x:Et(b),y:Et(U)};if(T&&T.length>=3){const ge=T[0];if(Math.hypot(fe.x-ge.x,fe.y-ge.y)<=v2){h(T),D(null);return}}D(ge=>ge?[...ge,fe]:[fe]);return}if(s==="door"||s==="window"){const ge=l2(k,b,U,s==="door"?Nt:fn);ge&&_(ge.roomId,s,ge.wall,ge.edgeIndex,ge.position);return}if(s==="stairs"){const fe=ig(i,r,Et(b),Et(U),te,0);fe&&g({floor:o,x:fe.x,y:fe.y,rotation:0});return}const z=u2(k,b,U);if(z){f({roomId:z.roomId,openingId:z.id}),y(null);return}f(null);const K=p2(W,t,n,b,U);if(K){y(K.id),x(null),E.current={kind:"move-stair",stairId:K.id,offsetX:b-K.x,offsetY:U-K.y,rotation:K.rotation};return}y(null);const Q=Z(b,U);if(!Q){x(null);return}if(x(Q.id),Q.points){E.current={kind:"move-polygon",roomId:Q.id,startPoints:Q.points,offsetX:b,offsetY:U};return}const oe=Q.gx+Q.gw,ae=Q.gy+Q.gh,he=Math.abs(b-oe)<.25&&Math.abs(U-ae)<.25;E.current=he?{kind:"resize",roomId:Q.id,startGx:Q.gx,startGy:Q.gy}:{kind:"move",roomId:Q.id,offsetX:b-Q.gx,offsetY:U-Q.gy}}function L(O){if(s==="polygon"&&T){const{x:K,y:Q}=j(O);M({x:Et(K),y:Et(Q)});return}const b=E.current;if(!b)return;const{x:U,y:z}=j(O);if(b.kind==="new-room"){b.curX=U,b.curY=z,H();return}if(b.kind==="move"){const K=t.find(ae=>ae.id===b.roomId);if(!K)return;const Q=Et(Math.max(0,Math.min(i-K.gw,U-b.offsetX))),oe=Et(Math.max(0,Math.min(r-K.gh,z-b.offsetY)));d(b.roomId,Q,oe);return}if(b.kind==="move-polygon"){const K=Et(U-b.offsetX),Q=Et(z-b.offsetY);if(K===0&&Q===0)return;const oe=b.startPoints.map(ae=>({x:ae.x+K,y:ae.y+Q}));v(b.roomId,oe);return}if(b.kind==="resize"){const K=Et(Math.max(ol,U-b.startGx)),Q=Et(Math.max(ol,z-b.startGy));p(b.roomId,K,Q);return}if(b.kind==="move-stair"){const K=ig(i,r,Et(U-b.offsetX),Et(z-b.offsetY),te,b.rotation);K&&m(b.stairId,K.x,K.y,b.rotation)}}function B(){const O=E.current;if(O&&O.kind==="new-room"){const b=Et(Math.min(O.startX,O.curX)),U=Et(Math.min(O.startY,O.curY)),z=Math.max(ol,Et(Math.abs(O.curX-O.startX))),K=Math.max(ol,Et(Math.abs(O.curY-O.startY)));c({gx:b,gy:U,gw:z,gh:K,floor:o})}E.current=null,H()}return Se.jsx("canvas",{ref:C,width:i*ie,height:r*ie,style:{background:"#fff",touchAction:"none",cursor:s==="select"?"default":"crosshair",maxWidth:"100%",height:"auto",display:"block"},onPointerDown:F,onPointerMove:L,onPointerUp:B,onPointerLeave:B})}const x2=[{id:"select",label:"Select"},{id:"room",label:"Add Room"},{id:"polygon",label:"Add Polygon Room"},{id:"door",label:"Add Door"},{id:"window",label:"Add Window"},{id:"stairs",label:"Add Stairs"}],us=t=>({padding:"8px 14px",borderRadius:8,border:t?"2px solid #c9a96e":"1px solid #d1d5db",background:t?"#fdf6ea":"#fff",fontWeight:600,fontSize:13,cursor:"pointer"});function sg(t,e){return e===0?t("Ground Floor"):t("Floor")+" "+e}function y2({t,mode:e,onModeChange:n,selectedRoom:i,onRenameRoom:r,onResizeRoomInputs:s,onDeleteRoom:o,selectedOpening:a,onDeleteOpening:l,floorCount:u=1,activeFloor:c=0,onSetActiveFloor:h,onAddFloor:d,selectedStair:p,onDeleteStair:v}){return Se.jsxs("div",{style:{display:"flex",flexDirection:"column",borderBottom:"1px solid #e5e7eb"},children:[Se.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:6,alignItems:"center",padding:"8px 14px",borderBottom:"1px solid #f3f4f6"},children:[Array.from({length:u},(x,_)=>_).map(x=>Se.jsx("button",{type:"button",style:us(x===c),onClick:()=>h&&h(x),title:sg(t,x),children:sg(t,x)},x)),u<s2&&Se.jsxs("button",{type:"button",style:us(!1),onClick:()=>d&&d(),children:["+ ",t("Add Floor")]})]}),Se.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:10,alignItems:"center",padding:"10px 14px"},children:[x2.map(x=>Se.jsx("button",{type:"button",style:us(e===x.id),onClick:()=>n(x.id),children:t(x.label)},x.id)),i&&Se.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",marginInlineStart:12},children:[Se.jsx("input",{value:i.name,onChange:x=>r(i.id,x.target.value),style:{padding:"6px 10px",borderRadius:6,border:"1px solid #d1d5db",fontSize:13,width:140}}),!i.points&&Se.jsxs(Se.Fragment,{children:[Se.jsxs("label",{style:{fontSize:12,color:"#6b7280"},children:[t("W"),Se.jsx("input",{type:"number",step:"0.1",min:"1.5",value:i.gw,onChange:x=>s(i.id,parseFloat(x.target.value)||i.gw,i.gh),style:{width:60,marginInlineStart:4,padding:"4px 6px",borderRadius:6,border:"1px solid #d1d5db"}})]}),Se.jsxs("label",{style:{fontSize:12,color:"#6b7280"},children:[t("H"),Se.jsx("input",{type:"number",step:"0.1",min:"1.5",value:i.gh,onChange:x=>s(i.id,i.gw,parseFloat(x.target.value)||i.gh),style:{width:60,marginInlineStart:4,padding:"4px 6px",borderRadius:6,border:"1px solid #d1d5db"}})]})]}),Se.jsx("button",{type:"button",style:us(!1),onClick:()=>o(i.id),children:t("Delete Room")})]}),a&&Se.jsx("button",{type:"button",style:us(!1),onClick:()=>l(a.roomId,a.openingId),children:t("Delete Opening")}),p&&Se.jsx("button",{type:"button",style:us(!1),onClick:()=>v(p.id),children:t("Delete Stairs")})]})]})}let og=0;function ha(t){return og+=1,t+"_"+Date.now().toString(36)+"_"+og}const S2=2.7,E2="#e8e2d8",M2="plaster";function C_(t){return{project:{id:null,name:t||"Untitled Project",wall_height:S2,wall_color:E2,wall_material:M2},rooms:[],stairs:[]}}function w2({name:t,gx:e,gy:n,gw:i,gh:r,color:s,floor:o=0}){return{id:ha("room"),name:t||"Room",gx:e,gy:n,gw:i,gh:r,color:s||"#cfd6cf",floor:o,has_roof:!0,roof_type:"flat",openings:[],furniture:[]}}function T2({name:t,points:e,color:n,floor:i=0}){const r=e.map(c=>c.x),s=e.map(c=>c.y),o=Math.min(...r),a=Math.min(...s),l=Math.max(...r)-o,u=Math.max(...s)-a;return{id:ha("room"),name:t||"Room",points:e,gx:o,gy:a,gw:l,gh:u,color:n||"#cfd6cf",floor:i,has_roof:!0,roof_type:"flat",openings:[],furniture:[]}}function A2({floor:t=0,x:e,y:n,rotation:i=0}){return{id:ha("stair"),floor:t,x:e,y:n,rotation:i}}function R2(t,e,n,i){const r={id:ha(t),kind:t,position:i};return n!=null?r.edge_index=n:r.wall=e,r}function C2(t,e){switch(e.type){case"SET_PROJECT":return e.project;case"SET_META":return{...t,project:{...t.project,...e.patch}};case"ADD_ROOM":return{...t,rooms:[...t.rooms,e.room]};case"UPDATE_ROOM":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,...e.patch}:n)};case"REMOVE_ROOM":return{...t,rooms:t.rooms.filter(n=>n.id!==e.roomId)};case"ADD_OPENING":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,openings:[...n.openings,R2(e.kind,e.wall,e.edgeIndex,e.position)]}:n)};case"MOVE_OPENING":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,openings:n.openings.map(i=>i.id===e.openingId?{...i,wall:e.wall,position:e.position}:i)}:n)};case"REMOVE_OPENING":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,openings:n.openings.filter(i=>i.id!==e.openingId)}:n)};case"ADD_FURNITURE":{const n={id:ha("furn"),kind:e.kind,x:e.x,y:e.y,rotation:0};return{...t,rooms:t.rooms.map(i=>i.id===e.roomId?{...i,furniture:[...i.furniture,n]}:i)}}case"MOVE_FURNITURE":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,furniture:n.furniture.map(i=>i.id===e.furnitureId?{...i,x:e.x,y:e.y,rotation:e.rotation??i.rotation}:i)}:n)};case"REMOVE_FURNITURE":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,furniture:n.furniture.filter(i=>i.id!==e.furnitureId)}:n)};case"ADD_STAIR":return{...t,stairs:[...t.stairs,e.stair]};case"MOVE_STAIR":return{...t,stairs:t.stairs.map(n=>n.id===e.stairId?{...n,x:e.x,y:e.y,rotation:e.rotation??n.rotation}:n)};case"REMOVE_STAIR":return{...t,stairs:t.stairs.filter(n=>n.id!==e.stairId)};default:return t}}function b2(t){const[e,n]=Ne.useReducer(C2,t||C_()),i=Ne.useMemo(()=>({setProject:o=>n({type:"SET_PROJECT",project:o}),setMeta:o=>n({type:"SET_META",patch:o}),addRoom:o=>n({type:"ADD_ROOM",room:o}),updateRoom:(o,a)=>n({type:"UPDATE_ROOM",roomId:o,patch:a}),removeRoom:o=>n({type:"REMOVE_ROOM",roomId:o}),addOpening:(o,a,l,u,c)=>n({type:"ADD_OPENING",roomId:o,kind:a,wall:l,edgeIndex:u,position:c}),moveOpening:(o,a,l,u)=>n({type:"MOVE_OPENING",roomId:o,openingId:a,wall:l,position:u}),removeOpening:(o,a)=>n({type:"REMOVE_OPENING",roomId:o,openingId:a}),addFurniture:(o,a,l,u)=>n({type:"ADD_FURNITURE",roomId:o,kind:a,x:l,y:u}),moveFurniture:(o,a,l,u,c)=>n({type:"MOVE_FURNITURE",roomId:o,furnitureId:a,x:l,y:u,rotation:c}),removeFurniture:(o,a)=>n({type:"REMOVE_FURNITURE",roomId:o,furnitureId:a}),addStair:o=>n({type:"ADD_STAIR",stair:o}),moveStair:(o,a,l,u)=>n({type:"MOVE_STAIR",stairId:o,x:a,y:l,rotation:u}),removeStair:o=>n({type:"REMOVE_STAIR",stairId:o})}),[]),r=Ne.useCallback(o=>{const a=w2(o);return i.addRoom(a),a},[i]),s=Ne.useCallback(o=>{const a=T2(o);return i.addRoom(a),a},[i]);return{project:e.project,rooms:e.rooms,stairs:e.stairs,actions:{...i,addRectRoom:r,addPolygonRoom:s}}}function P2(t,e,n){return m2(t,e,n)}const ag={WALLS:7,DOORS:1,WINDOWS:5,DIMENSIONS:3,TEXT:7,STAIRS:8};function lg(t){let e=t*180/Math.PI;return e=e%360,e<0&&(e+=360),e}function rn(t,e){return{x:t.x+e,y:-t.y}}function sa(t,e,n,i){t.push(`0
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
0.0`)}function b_(t,e,n,i){const r=["0","LWPOLYLINE","8",e,"90",String(n.length),"70","1"];n.forEach(s=>{r.push("10",String(s.x),"20",String(s.y))}),t.push(r.join(`
`))}function L2(t,e,n,i,r,s,o){t.push(`0
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
${o}`)}function Ar(t,e,n,i,r,s=0){const o=String(r).replace(/[\r\n]+/g," ");t.push(`0
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
${s}`)}function D2(t,e){const n=t.slice().sort((s,o)=>s.position-o.position);let i=0;const r=[];return n.forEach(s=>{const o=s.position-s.width/2,a=s.position+s.width/2;o>i+.02&&r.push([i,o]),i=Math.max(i,a)}),i<e-.02&&r.push([i,e]),r}function ug(t,e,n,i,r){const s=n.x-e.x,o=n.y-e.y,a=Math.hypot(s,o);if(a<.02)return;const l=s/a,u=o/a,c=-u,h=l,d=ft/2;D2(i,a).forEach(([p,v])=>{const x=[{x:e.x+l*p-c*d,y:e.y+u*p-h*d},{x:e.x+l*v-c*d,y:e.y+u*v-h*d},{x:e.x+l*v+c*d,y:e.y+u*v+h*d},{x:e.x+l*p+c*d,y:e.y+u*p+h*d}].map(_=>rn(_,r));b_(t,"WALLS",x)})}function I2(t){const{gx:e,gy:n,gw:i,gh:r}=t;return[{wall:"top",p1:{x:e,y:n},p2:{x:e+i,y:n}},{wall:"bottom",p1:{x:e,y:n+r},p2:{x:e+i,y:n+r}},{wall:"left",p1:{x:e,y:n},p2:{x:e,y:n+r}},{wall:"right",p1:{x:e+i,y:n},p2:{x:e+i,y:n+r}}]}function N2(t,e,n,i){const r=no(e,n,Nt),s=A_(e),o=rn({x:r.x1,y:r.y1},i),a=rn({x:r.x2,y:r.y2},i),l=rn(s,i),u=a.x-o.x,c=a.y-o.y,h=Math.hypot(u,c);if(h<.01)return;const d={x:-c/h,y:u/h},p={x:c/h,y:-u/h},v=(o.x+a.x)/2,x=(o.y+a.y)/2,_={x:l.x-v,y:l.y-x},f=d.x*_.x+d.y*_.y>=0?d:p,g=Math.atan2(c,u),m=Math.atan2(f.y,f.x);let y=m-g;for(;y>Math.PI;)y-=Math.PI*2;for(;y<=-Math.PI;)y+=Math.PI*2;const C=y<0,E=C?m:g,T=C?g:m;L2(t,"DOORS",o.x,o.y,h,lg(E),lg(T));const D={x:o.x+h*Math.cos(m),y:o.y+h*Math.sin(m)};sa(t,"DOORS",o,D)}function U2(t,e,n,i){const r=no(e,n,fn);sa(t,"WINDOWS",rn({x:r.x1,y:r.y1},i),rn({x:r.x2,y:r.y2},i))}function F2(t,e,n){const{gx:i,gy:r,gw:s,gh:o}=e,a=(p,v)=>rn({x:p,y:v},n),l=(p,v,x,_)=>sa(t,"DIMENSIONS",a(p,v),a(x,_)),u=r-Wi;l(i,r,i,u-qt),l(i+s,r,i+s,u-qt),l(i,u,i+s,u),Ar(t,"DIMENSIONS",a(i+s/2,u-.1),.14,s.toFixed(2));const c=r+o+Wi;l(i,r+o,i,c+qt),l(i+s,r+o,i+s,c+qt),l(i,c,i+s,c),Ar(t,"DIMENSIONS",a(i+s/2,c+.15),.14,s.toFixed(2));const h=i-Wi;l(i,r,h-qt,r),l(i,r+o,h-qt,r+o),l(h,r,h,r+o),Ar(t,"DIMENSIONS",a(h-.1,r+o/2),.14,o.toFixed(2),90);const d=i+s+Wi;l(i+s,r,d+qt,r),l(i+s,r+o,d+qt,r+o),l(d,r,d,r+o),Ar(t,"DIMENSIONS",a(d+.15,r+o/2),.14,o.toFixed(2),90)}function O2(t,e,n){const i=e.points?{x:Math.min(...e.points.map(r=>r.x)),y:Math.min(...e.points.map(r=>r.y))}:{x:e.gx,y:e.gy};Ar(t,"TEXT",rn({x:i.x+.25,y:i.y+.5},n),.22,e.name),Ar(t,"TEXT",rn({x:i.x+.25,y:i.y+.85},n),.14,`${v_(e).toFixed(1)} m2`)}function z2(t,e,n,i,r){n.forEach(s=>{const o=nh(e,s.floor??0,i),a=s.rotation||0,{w:l,d:u}=wu(o,a),c=s.x-l/2,h=s.x+l/2,d=s.y-u/2,p=s.y+u/2,v=[{x:c,y:d},{x:h,y:d},{x:h,y:p},{x:c,y:p}].map(f=>rn(f,r));b_(t,"STAIRS",v);const x=a===90||a===270,_=10;for(let f=1;f<_;f++)if(x){const g=c+l*f/_;sa(t,"STAIRS",rn({x:g,y:d},r),rn({x:g,y:p},r))}else{const g=d+u*f/_;sa(t,"STAIRS",rn({x:c,y:g},r),rn({x:h,y:g},r))}})}function k2(t,e,n,i,r,s,o){const a=[];return Ar(a,"TEXT",rn({x:0,y:-.7},r),.35,s),e.forEach(l=>{if(l.points&&l.points.length>=3){const u=l.points.length;for(let c=0;c<u;c++){const h=l.points[c],d=l.points[(c+1)%u],p=(l.openings||[]).filter(v=>v.edge_index===c).map(v=>({position:v.position,width:v.kind==="door"?Nt:fn}));ug(a,h,d,p,r)}}else I2(l).forEach(({wall:u,p1:c,p2:h})=>{const d=(l.openings||[]).filter(p=>p.wall===u).map(p=>({position:p.position,width:p.kind==="door"?Nt:fn}));ug(a,c,h,d,r)}),o&&F2(a,l,r);(l.openings||[]).forEach(u=>{u.kind==="door"?N2(a,l,u,r):U2(a,l,u,r)}),O2(a,l,r)}),z2(a,t,n,i,r),a}function B2(t,e,n,i,r=!0){const s=Object.entries(ag).map(([d,p])=>`0
LAYER
2
${d}
70
0
62
${p}
6
CONTINUOUS`).join(`
`),o=[];let a=0;const l=3;e.forEach(d=>{const p=n.filter(x=>(x.floor??0)===d.floorNum);o.push(...k2(t,d.rooms,p,i,a,d.label,r));const v=d.rooms.length?Math.max(...d.rooms.map(x=>x.points?Math.max(...x.points.map(_=>_.x)):x.gx+x.gw)):10;a+=v+l});const u=["0","SECTION","2","HEADER","9","$ACADVER","1","AC1021","9","$INSUNITS","70","6","0","ENDSEC"].join(`
`),c=["0","SECTION","2","TABLES","0","TABLE","2","LAYER","70",String(Object.keys(ag).length),s,"0","ENDTAB","0","ENDSEC"].join(`
`),h=["0","SECTION","2","ENTITIES",...o,"0","ENDSEC"].join(`
`);return[u,c,h,"0","EOF"].join(`
`)+`
`}function H2({initialProject:t,projectId:e,onBack:n,onSave:i,t:r}){const{project:s,rooms:o,stairs:a,actions:l}=b2(t),[u,c]=Ne.useState("select"),[h,d]=Ne.useState(0),[p,v]=Ne.useState(null),[x,_]=Ne.useState(null),[f,g]=Ne.useState(null),[m,y]=Ne.useState(!1),[C,E]=Ne.useState(""),[T,D]=Ne.useState(!1),[S,M]=Ne.useState(()=>typeof window<"u"?window.innerWidth<900:!1);Ne.useEffect(()=>{function L(){M(window.innerWidth<900)}return window.addEventListener("resize",L),()=>window.removeEventListener("resize",L)},[]);const k=o.find(L=>L.id===p)||null,W=a.find(L=>L.id===f)||null,te=Math.max(0,...o.map(L=>L.floor??0),...a.map(L=>(L.floor??0)+1)),I=Math.max(s.floor_count||1,te+1);function H(){const L=I+1;l.setMeta({floor_count:L}),d(I)}async function j(){y(!0),E("");const L=await i(e,{project:s,rooms:o,stairs:a});return y(!1),E(L.ok?r("Saved"):L.error||r("Save failed")),setTimeout(()=>E(""),2500),L}function Z(){const L=o.filter(b=>(b.floor??0)===h),B=P2(L,20,16),O=document.createElement("a");O.href=B,O.download=(s.name||"floor-plan")+"-"+ng(h)+".png",O.click()}function F(){const L=Array.from({length:I},(z,K)=>({floorNum:K,label:ng(K),rooms:o.filter(Q=>(Q.floor??0)===K)})).filter(z=>z.rooms.length>0);if(!L.length)return;const B=B2(o,L,a,s.wall_height),O=new Blob([B],{type:"application/dxf"}),b=URL.createObjectURL(O),U=document.createElement("a");U.href=b,U.download=(s.name||"floor-plan")+".dxf",U.click(),URL.revokeObjectURL(b)}return Se.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh",fontFamily:"sans-serif"},children:[Se.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 14px",borderBottom:"1px solid #e5e7eb"},children:[Se.jsxs("button",{type:"button",onClick:n,style:{background:"none",border:"none",cursor:"pointer",fontSize:13,color:"#374151"},children:["← ",r("Projects")]}),Se.jsx("input",{value:s.name,onChange:L=>l.setMeta({name:L.target.value}),style:{fontWeight:800,fontSize:15,border:"none",textAlign:"center",flex:1}}),Se.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[Se.jsx("span",{style:{fontSize:12,color:"#6b7280"},children:C}),Se.jsxs("label",{style:{fontSize:12,color:"#6b7280",display:"flex",alignItems:"center",gap:4},children:[Se.jsx("input",{type:"checkbox",checked:T,onChange:L=>D(L.target.checked)}),r("Dollhouse view")]}),Se.jsx("button",{type:"button",onClick:Z,style:{padding:"8px 14px",borderRadius:8,border:"1px solid #d1d5db",background:"#fff",fontWeight:700,fontSize:13,cursor:"pointer"},children:r("Export plan")}),Se.jsx("button",{type:"button",onClick:F,style:{padding:"8px 14px",borderRadius:8,border:"1px solid #d1d5db",background:"#fff",fontWeight:700,fontSize:13,cursor:"pointer"},children:r("Export DXF")}),Se.jsx("button",{type:"button",onClick:j,disabled:m,style:{padding:"8px 16px",borderRadius:8,border:"none",background:"#c9a96e",color:"#1b1e22",fontWeight:800,fontSize:13,cursor:"pointer",opacity:m?.6:1},children:r(m?"Saving…":"Save")})]})]}),Se.jsx(y2,{t:r,mode:u,onModeChange:c,selectedRoom:k,onRenameRoom:(L,B)=>l.updateRoom(L,{name:B}),onResizeRoomInputs:(L,B,O)=>l.updateRoom(L,{gw:B,gh:O}),onDeleteRoom:L=>{l.removeRoom(L),v(null)},selectedOpening:x,onDeleteOpening:(L,B)=>{l.removeOpening(L,B),_(null)},floorCount:I,activeFloor:h,onSetActiveFloor:d,onAddFloor:H,selectedStair:W,onDeleteStair:L=>{l.removeStair(L),g(null)}}),Se.jsxs("div",{style:{display:"flex",flexDirection:S?"column":"row",flex:1,minHeight:0},children:[Se.jsx("div",{style:S?{flex:"0 0 auto",maxHeight:"50%",overflow:"auto"}:{flex:1,overflow:"auto"},children:Se.jsx(_2,{rooms:o,stairs:a,wallHeight:s.wall_height,mode:u,activeFloor:h,selectedRoomId:p,selectedOpening:x,selectedStairId:f,onAddRoom:L=>l.addRectRoom(L),onAddPolygonRoom:L=>l.addPolygonRoom({points:L,floor:h}),onMoveRoom:(L,B,O)=>l.updateRoom(L,{gx:B,gy:O}),onResizeRoom:(L,B,O)=>l.updateRoom(L,{gw:B,gh:O}),onMovePolygonRoom:(L,B)=>{const O=B.map(oe=>oe.x),b=B.map(oe=>oe.y),U=Math.min(...O),z=Math.min(...b),K=Math.max(...O)-U,Q=Math.max(...b)-z;l.updateRoom(L,{points:B,gx:U,gy:z,gw:K,gh:Q})},onSelectRoom:v,onAddOpening:l.addOpening,onSelectOpening:_,onAddStair:L=>l.addStair(A2(L)),onMoveStair:(L,B,O,b)=>l.moveStair(L,B,O,b),onSelectStair:g})}),Se.jsx("div",{style:{flex:1,minHeight:0},children:Se.jsx(g2,{rooms:o,stairs:a,wallHeight:s.wall_height,wallColor:s.wall_color,wallMaterial:s.wall_material,t:r,dollhouse:T,floorGap:T?1.2:0})})]})]})}const G2={"Lamsa Engineers":"لمسة للمهندسين","Please sign in to continue.":"الرجاء تسجيل الدخول للمتابعة.","Sign in":"تسجيل الدخول","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"صمّم مخططات أرضية كاملة، عاينها ثلاثي الأبعاد، وصدّر مستندات هندسية حقيقية.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"انتهى اشتراكك بقسم المهندسين. جدّد الاشتراك لمتابعة تصميم المخططات الكاملة.","Rectangular rooms, doors & windows, single-floor plans":"غرف مستطيلة، أبواب ونوافذ، مخططات بطابق واحد","Live 3D preview of your design":"معاينة ثلاثية الأبعاد حية لتصميمك","Printable floor plan export":"تصدير مخطط قابل للطباعة","Use Lamsa's existing furniture-styling tools per room":"استخدم أدوات تنسيق الأثاث الموجودة بلمسة لكل غرفة","/ year":"/ سنوياً","14-day free trial, cancel anytime":"تجربة مجانية لمدة 14 يوم، إلغاء بأي وقت","Starting…":"جارٍ البدء…","Start free trial":"ابدأ التجربة المجانية","Something went wrong, please try again":"حدث خطأ ما، حاول مرة أخرى","Your Projects":"مشاريعك","New Project":"مشروع جديد","No projects yet — create your first one.":"لا يوجد مشاريع بعد — أنشئ أول مشروع.",Delete:"حذف",Projects:"المشاريع",Saved:"تم الحفظ","Save failed":"فشل الحفظ","Export plan":"تصدير المخطط","Saving…":"جارٍ الحفظ…",Save:"حفظ",Select:"تحديد","Add Room":"إضافة غرفة","Add Door":"إضافة باب","Add Window":"إضافة نافذة","Delete Room":"حذف الغرفة","Delete Opening":"حذف الفتحة",W:"عرض",H:"ارتفاع","Reset camera":"إعادة ضبط الكاميرا","Untitled Project":"مشروع بدون اسم","Add Polygon Room":"إضافة غرفة بشكل حر","Add Stairs":"إضافة سلالم","Delete Stairs":"حذف السلالم","Ground Floor":"الطابق الأرضي",Floor:"الطابق","Add Floor":"إضافة طابق","Dollhouse view":"عرض مقطعي","Export DXF":"تصدير DXF"},cg={de:{"Lamsa Engineers":"Lamsa Ingenieure","Please sign in to continue.":"Bitte melde dich an, um fortzufahren.","Sign in":"Anmelden","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Entwirf komplette Grundrisse, sieh sie in 3D in der Vorschau und exportiere echte Architekturunterlagen.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Dein Zugang zu Engineers ist abgelaufen. Abonniere erneut, um weiter vollständige Grundrisse zu gestalten.","Rectangular rooms, doors & windows, single-floor plans":"Rechteckige Räume, Türen & Fenster, einstöckige Grundrisse","Live 3D preview of your design":"Live-3D-Vorschau deines Entwurfs","Printable floor plan export":"Druckbarer Grundriss-Export","Use Lamsa's existing furniture-styling tools per room":"Nutze Lamsas vorhandene Möbel-Styling-Tools für jeden Raum","/ year":"/ Jahr","14-day free trial, cancel anytime":"14 Tage kostenlos testen, jederzeit kündbar","Starting…":"Wird gestartet…","Start free trial":"Kostenlose Testphase starten","Something went wrong, please try again":"Etwas ist schiefgelaufen, bitte versuche es erneut","Your Projects":"Deine Projekte","New Project":"Neues Projekt","No projects yet — create your first one.":"Noch keine Projekte — erstelle dein erstes.",Delete:"Löschen",Projects:"Projekte",Saved:"Gespeichert","Save failed":"Speichern fehlgeschlagen","Export plan":"Plan exportieren","Saving…":"Wird gespeichert…",Save:"Speichern",Select:"Auswählen","Add Room":"Raum hinzufügen","Add Door":"Tür hinzufügen","Add Window":"Fenster hinzufügen","Delete Room":"Raum löschen","Delete Opening":"Öffnung löschen",W:"B",H:"H","Reset camera":"Kamera zurücksetzen","Untitled Project":"Unbenanntes Projekt","Add Polygon Room":"Freiform-Raum hinzufügen","Add Stairs":"Treppe hinzufügen","Delete Stairs":"Treppe löschen","Ground Floor":"Erdgeschoss",Floor:"Stockwerk","Add Floor":"Stockwerk hinzufügen","Dollhouse view":"Schnittansicht","Export DXF":"DXF exportieren"},es:{"Lamsa Engineers":"Lamsa Ingenieros","Please sign in to continue.":"Inicia sesión para continuar.","Sign in":"Iniciar sesión","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Diseña planos completos, previsualízalos en 3D y exporta documentos arquitectónicos reales.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Tu acceso a Engineers ha terminado. Suscríbete de nuevo para seguir diseñando planos completos.","Rectangular rooms, doors & windows, single-floor plans":"Habitaciones rectangulares, puertas y ventanas, planos de una sola planta","Live 3D preview of your design":"Vista previa 3D en vivo de tu diseño","Printable floor plan export":"Exportación de plano imprimible","Use Lamsa's existing furniture-styling tools per room":"Usa las herramientas de estilismo de muebles de Lamsa en cada habitación","/ year":"/ año","14-day free trial, cancel anytime":"14 días de prueba gratis, cancela cuando quieras","Starting…":"Iniciando…","Start free trial":"Iniciar prueba gratuita","Something went wrong, please try again":"Algo salió mal, inténtalo de nuevo","Your Projects":"Tus Proyectos","New Project":"Nuevo Proyecto","No projects yet — create your first one.":"Aún no hay proyectos — crea el primero.",Delete:"Eliminar",Projects:"Proyectos",Saved:"Guardado","Save failed":"Error al guardar","Export plan":"Exportar plano","Saving…":"Guardando…",Save:"Guardar",Select:"Seleccionar","Add Room":"Añadir Habitación","Add Door":"Añadir Puerta","Add Window":"Añadir Ventana","Delete Room":"Eliminar Habitación","Delete Opening":"Eliminar Apertura",W:"An",H:"Al","Reset camera":"Restablecer cámara","Untitled Project":"Proyecto sin título","Add Polygon Room":"Añadir Habitación de Forma Libre","Add Stairs":"Añadir Escaleras","Delete Stairs":"Eliminar Escaleras","Ground Floor":"Planta Baja",Floor:"Planta","Add Floor":"Añadir Planta","Dollhouse view":"Vista seccionada","Export DXF":"Exportar DXF"},tr:{"Lamsa Engineers":"Lamsa Muhendisler","Please sign in to continue.":"Devam etmek icin giris yapin.","Sign in":"Giris Yap","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Tam kat planlari tasarlayin, 3D onizleme yapin ve gercek mimari belgeler disa aktarin.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Engineers erisiminiz sona erdi. Tam kat planlari tasarlamaya devam etmek icin tekrar abone olun.","Rectangular rooms, doors & windows, single-floor plans":"Dikdortgen odalar, kapilar ve pencereler, tek katli planlar","Live 3D preview of your design":"Tasariminizin canli 3D onizlemesi","Printable floor plan export":"Yazdirilabilir kat plani disa aktarma","Use Lamsa's existing furniture-styling tools per room":"Lamsa'nin mevcut mobilya stilizasyon araclarini her oda icin kullanin","/ year":"/ yil","14-day free trial, cancel anytime":"14 gunluk ucretsiz deneme, istediginiz zaman iptal edin","Starting…":"Basliyor…","Start free trial":"Ucretsiz denemeyi baslat","Something went wrong, please try again":"Bir sorun olustu, lutfen tekrar deneyin","Your Projects":"Projeleriniz","New Project":"Yeni Proje","No projects yet — create your first one.":"Henuz proje yok — ilkini olusturun.",Delete:"Sil",Projects:"Projeler",Saved:"Kaydedildi","Save failed":"Kaydetme basarisiz","Export plan":"Plani disa aktar","Saving…":"Kaydediliyor…",Save:"Kaydet",Select:"Sec","Add Room":"Oda Ekle","Add Door":"Kapi Ekle","Add Window":"Pencere Ekle","Delete Room":"Odayi Sil","Delete Opening":"Acikligi Sil",W:"G",H:"Y","Reset camera":"Kamerayi sifirla","Untitled Project":"Isimsiz Proje","Add Polygon Room":"Serbest Sekilli Oda Ekle","Add Stairs":"Merdiven Ekle","Delete Stairs":"Merdiveni Sil","Ground Floor":"Zemin Kat",Floor:"Kat","Add Floor":"Kat Ekle","Dollhouse view":"Kesit Gorunumu","Export DXF":"DXF Disa Aktar"},fr:{"Lamsa Engineers":"Lamsa Ingénieurs","Please sign in to continue.":"Veuillez vous connecter pour continuer.","Sign in":"Connexion","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Concevez des plans complets, prévisualisez-les en 3D et exportez de vrais documents architecturaux.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Votre accès à Engineers a expiré. Réabonnez-vous pour continuer à concevoir des plans complets.","Rectangular rooms, doors & windows, single-floor plans":"Pièces rectangulaires, portes et fenêtres, plans à un seul niveau","Live 3D preview of your design":"Aperçu 3D en direct de votre conception","Printable floor plan export":"Export de plan imprimable","Use Lamsa's existing furniture-styling tools per room":"Utilisez les outils de style de meubles existants de Lamsa pour chaque pièce","/ year":"/ an","14-day free trial, cancel anytime":"Essai gratuit de 14 jours, annulez à tout moment","Starting…":"Démarrage…","Start free trial":"Démarrer l'essai gratuit","Something went wrong, please try again":"Un problème est survenu, veuillez réessayer","Your Projects":"Vos Projets","New Project":"Nouveau Projet","No projects yet — create your first one.":"Aucun projet pour l'instant — créez le premier.",Delete:"Supprimer",Projects:"Projets",Saved:"Enregistré","Save failed":"Échec de l'enregistrement","Export plan":"Exporter le plan","Saving…":"Enregistrement…",Save:"Enregistrer",Select:"Sélectionner","Add Room":"Ajouter une pièce","Add Door":"Ajouter une porte","Add Window":"Ajouter une fenêtre","Delete Room":"Supprimer la pièce","Delete Opening":"Supprimer l'ouverture",W:"L",H:"H","Reset camera":"Réinitialiser la caméra","Untitled Project":"Projet sans titre","Add Polygon Room":"Ajouter une pièce de forme libre","Add Stairs":"Ajouter un escalier","Delete Stairs":"Supprimer l'escalier","Ground Floor":"Rez-de-chaussée",Floor:"Étage","Add Floor":"Ajouter un étage","Dollhouse view":"Vue en coupe","Export DXF":"Exporter en DXF"},it:{"Lamsa Engineers":"Lamsa Ingegneri","Please sign in to continue.":"Accedi per continuare.","Sign in":"Accedi","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Progetta planimetrie complete, visualizzale in anteprima 3D ed esporta veri documenti architettonici.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Il tuo accesso a Engineers è scaduto. Abbonati di nuovo per continuare a progettare planimetrie complete.","Rectangular rooms, doors & windows, single-floor plans":"Stanze rettangolari, porte e finestre, planimetrie a un piano","Live 3D preview of your design":"Anteprima 3D dal vivo del tuo progetto","Printable floor plan export":"Esportazione planimetria stampabile","Use Lamsa's existing furniture-styling tools per room":"Usa gli strumenti di stile mobili di Lamsa per ogni stanza","/ year":"/ anno","14-day free trial, cancel anytime":"Prova gratuita di 14 giorni, annulla quando vuoi","Starting…":"Avvio…","Start free trial":"Avvia la prova gratuita","Something went wrong, please try again":"Qualcosa è andato storto, riprova","Your Projects":"I Tuoi Progetti","New Project":"Nuovo Progetto","No projects yet — create your first one.":"Nessun progetto ancora — crea il primo.",Delete:"Elimina",Projects:"Progetti",Saved:"Salvato","Save failed":"Salvataggio non riuscito","Export plan":"Esporta planimetria","Saving…":"Salvataggio…",Save:"Salva",Select:"Seleziona","Add Room":"Aggiungi Stanza","Add Door":"Aggiungi Porta","Add Window":"Aggiungi Finestra","Delete Room":"Elimina Stanza","Delete Opening":"Elimina Apertura",W:"L",H:"A","Reset camera":"Reimposta fotocamera","Untitled Project":"Progetto senza titolo","Add Polygon Room":"Aggiungi Stanza a Forma Libera","Add Stairs":"Aggiungi Scale","Delete Stairs":"Elimina Scale","Ground Floor":"Piano Terra",Floor:"Piano","Add Floor":"Aggiungi Piano","Dollhouse view":"Vista in sezione","Export DXF":"Esporta DXF"},ru:{"Lamsa Engineers":"Lamsa Inzhenery","Please sign in to continue.":"Voydite, chtoby prodolzhit.","Sign in":"Vkhod","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Proektiruyte polnotsennye plany pomeshcheniy, prosmatrivayte ikh v 3D i eksportiruyte nastoyashchie arkhitekturnye dokumenty.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Vash dostup k Engineers zavershilsya. Oformite podpisku snova, chtoby prodolzhit proektirovat polnye plany.","Rectangular rooms, doors & windows, single-floor plans":"Pryamougolnye komnaty, dveri i okna, odnoetazhnye plany","Live 3D preview of your design":"Zhivoy 3D-predprosmotr vashego proekta","Printable floor plan export":"Eksport plana dlya pechati","Use Lamsa's existing furniture-styling tools per room":"Ispolzuyte sushchestvuyushchie instrumenty stilizatsii mebeli Lamsa dlya kazhdoy komnaty","/ year":"/ god","14-day free trial, cancel anytime":"14-dnevnyy besplatnyy probnyy period, otmena v lyuboy moment","Starting…":"Zapusk…","Start free trial":"Nachat besplatnyy probnyy period","Something went wrong, please try again":"Chto-to poshlo ne tak, poprobuyte snova","Your Projects":"Vashi Proekty","New Project":"Novyy Proekt","No projects yet — create your first one.":"Poka net proektov — sozdayte pervyy.",Delete:"Udalit",Projects:"Proekty",Saved:"Sokhraneno","Save failed":"Oshibka sokhraneniya","Export plan":"Eksportirovat plan","Saving…":"Sokhranenie…",Save:"Sokhranit",Select:"Vybrat","Add Room":"Dobavit Komnatu","Add Door":"Dobavit Dver","Add Window":"Dobavit Okno","Delete Room":"Udalit Komnatu","Delete Opening":"Udalit Proyom",W:"Sh",H:"V","Reset camera":"Sbrosit kameru","Untitled Project":"Proekt bez nazvaniya","Add Polygon Room":"Dobavit Komnatu Svobodnoy Formy","Add Stairs":"Dobavit Lestnitsu","Delete Stairs":"Udalit Lestnitsu","Ground Floor":"Pervyy Etazh",Floor:"Etazh","Add Floor":"Dobavit Etazh","Dollhouse view":"Razrez doma","Export DXF":"Eksportirovat DXF"}};function V2(){try{return localStorage.getItem("lamsa_lang")||"en"}catch{return"en"}}function W2(){const[t,e]=Ne.useState(V2);Ne.useEffect(()=>{document.documentElement.setAttribute("dir",t==="ar"?"rtl":"ltr"),document.documentElement.setAttribute("lang",t)},[t]),Ne.useEffect(()=>{function i(r){r.key==="lamsa_lang"&&e(r.newValue||"en")}return window.addEventListener("storage",i),()=>window.removeEventListener("storage",i)},[]);const n=Ne.useCallback(i=>t==="ar"?G2[i]||i:t==="en"?i:cg[t]&&cg[t][i]||i,[t]);return{lang:t,t:n}}function X2(t){return!!t&&(t.status==="active"||t.status==="trialing")}function j2(){const{t}=W2(),[e,n]=Ne.useState("loading"),[i,r]=Ne.useState(null),[s,o]=Ne.useState([]),[a,l]=Ne.useState(null);Ne.useEffect(()=>{uS().then(v=>{if(v.status===401){n("signin");return}if(!v.ok||!v.data){n("signin");return}const x=v.data.engineerSubscription;if(r(x?x.status:null),!X2(x)){n("paywall");return}u()})},[]);function u(){cS().then(v=>{v.ok&&v.data&&o(v.data.projects||[]),n("list")})}function c(){l({projectId:null,project:C_(t("Untitled Project"))}),n("editor")}function h(v){fS(v).then(x=>{if(x.status===403){n("paywall");return}!x.ok||!x.data||(l({projectId:v,project:x.data.project}),n("editor"))})}function d(v){hS(v).then(()=>u())}async function p(v,x){const _=await dS(v,x);return _.status===403?(n("paywall"),{ok:!1,error:"Engineers access required"}):(_.ok&&_.data&&l(f=>({...f,projectId:_.data.projectId})),_.ok?{ok:!0}:{ok:!1,error:_.data&&_.data.error||"Save failed"})}return e==="loading"?null:e==="signin"?Se.jsxs("div",{style:{maxWidth:420,margin:"100px auto",textAlign:"center",fontFamily:"sans-serif"},children:[Se.jsx("h1",{style:{fontSize:20,fontWeight:800,marginBottom:12},children:t("Lamsa Engineers")}),Se.jsx("p",{style:{color:"#6b7280",marginBottom:20},children:t("Please sign in to continue.")}),Se.jsx("a",{href:"/lamsa-auth.html?return=engineers/index.html",style:{display:"inline-block",background:"#c9a96e",color:"#1b1e22",padding:"12px 24px",borderRadius:10,fontWeight:800,textDecoration:"none"},children:t("Sign in")})]}):e==="paywall"?Se.jsx(mS,{status:i,t}):e==="editor"&&a?Se.jsx(H2,{initialProject:a.project,projectId:a.projectId,onBack:()=>u(),onSave:p,t}):Se.jsx(gS,{projects:s,onOpen:h,onCreate:c,onDelete:d,t})}Mv(document.getElementById("root")).render(Se.jsx(Z_.StrictMode,{children:Se.jsx(j2,{})}));
