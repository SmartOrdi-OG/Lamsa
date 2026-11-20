(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function ry(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ig={exports:{}},gu={},Ng={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var va=Symbol.for("react.element"),oy=Symbol.for("react.portal"),sy=Symbol.for("react.fragment"),ay=Symbol.for("react.strict_mode"),ly=Symbol.for("react.profiler"),uy=Symbol.for("react.provider"),cy=Symbol.for("react.context"),fy=Symbol.for("react.forward_ref"),dy=Symbol.for("react.suspense"),hy=Symbol.for("react.memo"),py=Symbol.for("react.lazy"),Ch=Symbol.iterator;function my(t){return t===null||typeof t!="object"?null:(t=Ch&&t[Ch]||t["@@iterator"],typeof t=="function"?t:null)}var Ug={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Og=Object.assign,Fg={};function ss(t,e,n){this.props=t,this.context=e,this.refs=Fg,this.updater=n||Ug}ss.prototype.isReactComponent={};ss.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ss.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function kg(){}kg.prototype=ss.prototype;function gd(t,e,n){this.props=t,this.context=e,this.refs=Fg,this.updater=n||Ug}var vd=gd.prototype=new kg;vd.constructor=gd;Og(vd,ss.prototype);vd.isPureReactComponent=!0;var Ph=Array.isArray,zg=Object.prototype.hasOwnProperty,_d={current:null},Bg={key:!0,ref:!0,__self:!0,__source:!0};function Hg(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)zg.call(e,i)&&!Bg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:va,type:t,key:o,ref:s,props:r,_owner:_d.current}}function gy(t,e){return{$$typeof:va,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function yd(t){return typeof t=="object"&&t!==null&&t.$$typeof===va}function vy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Lh=/\/+/g;function ju(t,e){return typeof t=="object"&&t!==null&&t.key!=null?vy(""+t.key):e.toString(36)}function El(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case va:case oy:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+ju(s,0):i,Ph(r)?(n="",t!=null&&(n=t.replace(Lh,"$&/")+"/"),El(r,e,n,"",function(u){return u})):r!=null&&(yd(r)&&(r=gy(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Lh,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",Ph(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+ju(o,a);s+=El(o,e,n,l,r)}else if(l=my(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+ju(o,a++),s+=El(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Aa(t,e,n){if(t==null)return t;var i=[],r=0;return El(t,i,"","",function(o){return e.call(n,o,r++)}),i}function _y(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ln={current:null},Ml={transition:null},yy={ReactCurrentDispatcher:ln,ReactCurrentBatchConfig:Ml,ReactCurrentOwner:_d};function Gg(){throw Error("act(...) is not supported in production builds of React.")}$e.Children={map:Aa,forEach:function(t,e,n){Aa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Aa(t,function(){e++}),e},toArray:function(t){return Aa(t,function(e){return e})||[]},only:function(t){if(!yd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$e.Component=ss;$e.Fragment=sy;$e.Profiler=ly;$e.PureComponent=gd;$e.StrictMode=ay;$e.Suspense=dy;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yy;$e.act=Gg;$e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Og({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=_d.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)zg.call(e,l)&&!Bg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:va,type:t.type,key:r,ref:o,props:i,_owner:s}};$e.createContext=function(t){return t={$$typeof:cy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:uy,_context:t},t.Consumer=t};$e.createElement=Hg;$e.createFactory=function(t){var e=Hg.bind(null,t);return e.type=t,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:fy,render:t}};$e.isValidElement=yd;$e.lazy=function(t){return{$$typeof:py,_payload:{_status:-1,_result:t},_init:_y}};$e.memo=function(t,e){return{$$typeof:hy,type:t,compare:e===void 0?null:e}};$e.startTransition=function(t){var e=Ml.transition;Ml.transition={};try{t()}finally{Ml.transition=e}};$e.unstable_act=Gg;$e.useCallback=function(t,e){return ln.current.useCallback(t,e)};$e.useContext=function(t){return ln.current.useContext(t)};$e.useDebugValue=function(){};$e.useDeferredValue=function(t){return ln.current.useDeferredValue(t)};$e.useEffect=function(t,e){return ln.current.useEffect(t,e)};$e.useId=function(){return ln.current.useId()};$e.useImperativeHandle=function(t,e,n){return ln.current.useImperativeHandle(t,e,n)};$e.useInsertionEffect=function(t,e){return ln.current.useInsertionEffect(t,e)};$e.useLayoutEffect=function(t,e){return ln.current.useLayoutEffect(t,e)};$e.useMemo=function(t,e){return ln.current.useMemo(t,e)};$e.useReducer=function(t,e,n){return ln.current.useReducer(t,e,n)};$e.useRef=function(t){return ln.current.useRef(t)};$e.useState=function(t){return ln.current.useState(t)};$e.useSyncExternalStore=function(t,e,n){return ln.current.useSyncExternalStore(t,e,n)};$e.useTransition=function(){return ln.current.useTransition()};$e.version="18.3.1";Ng.exports=$e;var Ce=Ng.exports;const xy=ry(Ce);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sy=Ce,Ey=Symbol.for("react.element"),My=Symbol.for("react.fragment"),wy=Object.prototype.hasOwnProperty,Ty=Sy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ay={key:!0,ref:!0,__self:!0,__source:!0};function Vg(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)wy.call(e,i)&&!Ay.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Ey,type:t,key:o,ref:s,props:r,_owner:Ty.current}}gu.Fragment=My;gu.jsx=Vg;gu.jsxs=Vg;Ig.exports=gu;var ae=Ig.exports,Wg={exports:{}},Rn={},Xg={exports:{}},jg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,F){var V=N.length;N.push(F);e:for(;0<V;){var te=V-1>>>1,oe=N[te];if(0<r(oe,F))N[te]=F,N[V]=oe,V=te;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var F=N[0],V=N.pop();if(V!==F){N[0]=V;e:for(var te=0,oe=N.length,Y=oe>>>1;te<Y;){var re=2*(te+1)-1,he=N[re],ge=re+1,pe=N[ge];if(0>r(he,V))ge<oe&&0>r(pe,he)?(N[te]=pe,N[ge]=V,te=ge):(N[te]=he,N[re]=V,te=re);else if(ge<oe&&0>r(pe,V))N[te]=pe,N[ge]=V,te=ge;else break e}}return F}function r(N,F){var V=N.sortIndex-F.sortIndex;return V!==0?V:N.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,h=null,d=3,p=!1,g=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var F=n(u);F!==null;){if(F.callback===null)i(u);else if(F.startTime<=N)i(u),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(u)}}function x(N){if(y=!1,m(N),!g)if(n(l)!==null)g=!0,z(A);else{var F=n(u);F!==null&&ie(x,F.startTime-N)}}function A(N,F){g=!1,y&&(y=!1,f(P),P=-1),p=!0;var V=d;try{for(m(F),h=n(l);h!==null&&(!(h.expirationTime>F)||N&&!U());){var te=h.callback;if(typeof te=="function"){h.callback=null,d=h.priorityLevel;var oe=te(h.expirationTime<=F);F=t.unstable_now(),typeof oe=="function"?h.callback=oe:h===n(l)&&i(l),m(F)}else i(l);h=n(l)}if(h!==null)var Y=!0;else{var re=n(u);re!==null&&ie(x,re.startTime-F),Y=!1}return Y}finally{h=null,d=V,p=!1}}var S=!1,w=null,P=-1,E=5,T=-1;function U(){return!(t.unstable_now()-T<E)}function W(){if(w!==null){var N=t.unstable_now();T=N;var F=!0;try{F=w(!0,N)}finally{F?ee():(S=!1,w=null)}}else S=!1}var ee;if(typeof _=="function")ee=function(){_(W)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,H=L.port2;L.port1.onmessage=W,ee=function(){H.postMessage(null)}}else ee=function(){v(W,0)};function z(N){w=N,S||(S=!0,ee())}function ie(N,F){P=v(function(){N(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,z(A))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(d){case 1:case 2:case 3:var F=3;break;default:F=d}var V=d;d=F;try{return N()}finally{d=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,F){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var V=d;d=N;try{return F()}finally{d=V}},t.unstable_scheduleCallback=function(N,F,V){var te=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?te+V:te):V=te,N){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=V+oe,N={id:c++,callback:F,priorityLevel:N,startTime:V,expirationTime:oe,sortIndex:-1},V>te?(N.sortIndex=V,e(u,N),n(l)===null&&N===n(u)&&(y?(f(P),P=-1):y=!0,ie(x,V-te))):(N.sortIndex=oe,e(l,N),g||p||(g=!0,z(A))),N},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(N){var F=d;return function(){var V=d;d=F;try{return N.apply(this,arguments)}finally{d=V}}}})(jg);Xg.exports=jg;var Ry=Xg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var by=Ce,An=Ry;function de(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yg=new Set,qs={};function qr(t,e){Yo(t,e),Yo(t+"Capture",e)}function Yo(t,e){for(qs[t]=e,t=0;t<e.length;t++)Yg.add(e[t])}var Ri=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sf=Object.prototype.hasOwnProperty,Cy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dh={},Ih={};function Py(t){return sf.call(Ih,t)?!0:sf.call(Dh,t)?!1:Cy.test(t)?Ih[t]=!0:(Dh[t]=!0,!1)}function Ly(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Dy(t,e,n,i){if(e===null||typeof e>"u"||Ly(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function un(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Wt[t]=new un(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Wt[e]=new un(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Wt[t]=new un(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Wt[t]=new un(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Wt[t]=new un(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Wt[t]=new un(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Wt[t]=new un(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Wt[t]=new un(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Wt[t]=new un(t,5,!1,t.toLowerCase(),null,!1,!1)});var xd=/[\-:]([a-z])/g;function Sd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(xd,Sd);Wt[e]=new un(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(xd,Sd);Wt[e]=new un(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(xd,Sd);Wt[e]=new un(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Wt[t]=new un(t,1,!1,t.toLowerCase(),null,!1,!1)});Wt.xlinkHref=new un("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Wt[t]=new un(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ed(t,e,n,i){var r=Wt.hasOwnProperty(e)?Wt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Dy(e,n,r,i)&&(n=null),i||r===null?Py(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Di=by.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ra=Symbol.for("react.element"),So=Symbol.for("react.portal"),Eo=Symbol.for("react.fragment"),Md=Symbol.for("react.strict_mode"),af=Symbol.for("react.profiler"),qg=Symbol.for("react.provider"),$g=Symbol.for("react.context"),wd=Symbol.for("react.forward_ref"),lf=Symbol.for("react.suspense"),uf=Symbol.for("react.suspense_list"),Td=Symbol.for("react.memo"),zi=Symbol.for("react.lazy"),Kg=Symbol.for("react.offscreen"),Nh=Symbol.iterator;function ms(t){return t===null||typeof t!="object"?null:(t=Nh&&t[Nh]||t["@@iterator"],typeof t=="function"?t:null)}var gt=Object.assign,Yu;function Ps(t){if(Yu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Yu=e&&e[1]||""}return`
`+Yu+t}var qu=!1;function $u(t,e){if(!t||qu)return"";qu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{qu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ps(t):""}function Iy(t){switch(t.tag){case 5:return Ps(t.type);case 16:return Ps("Lazy");case 13:return Ps("Suspense");case 19:return Ps("SuspenseList");case 0:case 2:case 15:return t=$u(t.type,!1),t;case 11:return t=$u(t.type.render,!1),t;case 1:return t=$u(t.type,!0),t;default:return""}}function cf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Eo:return"Fragment";case So:return"Portal";case af:return"Profiler";case Md:return"StrictMode";case lf:return"Suspense";case uf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case $g:return(t.displayName||"Context")+".Consumer";case qg:return(t._context.displayName||"Context")+".Provider";case wd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Td:return e=t.displayName||null,e!==null?e:cf(t.type)||"Memo";case zi:e=t._payload,t=t._init;try{return cf(t(e))}catch{}}return null}function Ny(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cf(e);case 8:return e===Md?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Uy(t){var e=Zg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ba(t){t._valueTracker||(t._valueTracker=Uy(t))}function Jg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Zg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ol(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ff(t,e){var n=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Uh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Qg(t,e){e=e.checked,e!=null&&Ed(t,"checked",e,!1)}function df(t,e){Qg(t,e);var n=ar(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?hf(t,e.type,n):e.hasOwnProperty("defaultValue")&&hf(t,e.type,ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Oh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function hf(t,e,n){(e!=="number"||Ol(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ls=Array.isArray;function Fo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ar(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function pf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(de(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Fh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(de(92));if(Ls(n)){if(1<n.length)throw Error(de(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ar(n)}}function e0(t,e){var n=ar(e.value),i=ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function kh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function t0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?t0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ca,n0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ca=Ca||document.createElement("div"),Ca.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ca.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $s(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Us={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oy=["Webkit","ms","Moz","O"];Object.keys(Us).forEach(function(t){Oy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Us[e]=Us[t]})});function i0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Us.hasOwnProperty(t)&&Us[t]?(""+e).trim():e+"px"}function r0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=i0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Fy=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gf(t,e){if(e){if(Fy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(de(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(de(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(de(61))}if(e.style!=null&&typeof e.style!="object")throw Error(de(62))}}function vf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _f=null;function Ad(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yf=null,ko=null,zo=null;function zh(t){if(t=xa(t)){if(typeof yf!="function")throw Error(de(280));var e=t.stateNode;e&&(e=Su(e),yf(t.stateNode,t.type,e))}}function o0(t){ko?zo?zo.push(t):zo=[t]:ko=t}function s0(){if(ko){var t=ko,e=zo;if(zo=ko=null,zh(t),e)for(t=0;t<e.length;t++)zh(e[t])}}function a0(t,e){return t(e)}function l0(){}var Ku=!1;function u0(t,e,n){if(Ku)return t(e,n);Ku=!0;try{return a0(t,e,n)}finally{Ku=!1,(ko!==null||zo!==null)&&(l0(),s0())}}function Ks(t,e){var n=t.stateNode;if(n===null)return null;var i=Su(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(de(231,e,typeof n));return n}var xf=!1;if(Ri)try{var gs={};Object.defineProperty(gs,"passive",{get:function(){xf=!0}}),window.addEventListener("test",gs,gs),window.removeEventListener("test",gs,gs)}catch{xf=!1}function ky(t,e,n,i,r,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Os=!1,Fl=null,kl=!1,Sf=null,zy={onError:function(t){Os=!0,Fl=t}};function By(t,e,n,i,r,o,s,a,l){Os=!1,Fl=null,ky.apply(zy,arguments)}function Hy(t,e,n,i,r,o,s,a,l){if(By.apply(this,arguments),Os){if(Os){var u=Fl;Os=!1,Fl=null}else throw Error(de(198));kl||(kl=!0,Sf=u)}}function $r(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function c0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bh(t){if($r(t)!==t)throw Error(de(188))}function Gy(t){var e=t.alternate;if(!e){if(e=$r(t),e===null)throw Error(de(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Bh(r),t;if(o===i)return Bh(r),e;o=o.sibling}throw Error(de(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(de(189))}}if(n.alternate!==i)throw Error(de(190))}if(n.tag!==3)throw Error(de(188));return n.stateNode.current===n?t:e}function f0(t){return t=Gy(t),t!==null?d0(t):null}function d0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=d0(t);if(e!==null)return e;t=t.sibling}return null}var h0=An.unstable_scheduleCallback,Hh=An.unstable_cancelCallback,Vy=An.unstable_shouldYield,Wy=An.unstable_requestPaint,Et=An.unstable_now,Xy=An.unstable_getCurrentPriorityLevel,Rd=An.unstable_ImmediatePriority,p0=An.unstable_UserBlockingPriority,zl=An.unstable_NormalPriority,jy=An.unstable_LowPriority,m0=An.unstable_IdlePriority,vu=null,li=null;function Yy(t){if(li&&typeof li.onCommitFiberRoot=="function")try{li.onCommitFiberRoot(vu,t,void 0,(t.current.flags&128)===128)}catch{}}var ei=Math.clz32?Math.clz32:Ky,qy=Math.log,$y=Math.LN2;function Ky(t){return t>>>=0,t===0?32:31-(qy(t)/$y|0)|0}var Pa=64,La=4194304;function Ds(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Bl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=Ds(a):(o&=s,o!==0&&(i=Ds(o)))}else s=n&~r,s!==0?i=Ds(s):o!==0&&(i=Ds(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ei(e),r=1<<n,i|=t[n],e&=~r;return i}function Zy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-ei(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=Zy(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Ef(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function g0(){var t=Pa;return Pa<<=1,!(Pa&4194240)&&(Pa=64),t}function Zu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _a(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ei(e),t[e]=n}function Qy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ei(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function bd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ei(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Qe=0;function v0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var _0,Cd,y0,x0,S0,Mf=!1,Da=[],qi=null,$i=null,Ki=null,Zs=new Map,Js=new Map,Hi=[],ex="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gh(t,e){switch(t){case"focusin":case"focusout":qi=null;break;case"dragenter":case"dragleave":$i=null;break;case"mouseover":case"mouseout":Ki=null;break;case"pointerover":case"pointerout":Zs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Js.delete(e.pointerId)}}function vs(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=xa(e),e!==null&&Cd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function tx(t,e,n,i,r){switch(e){case"focusin":return qi=vs(qi,t,e,n,i,r),!0;case"dragenter":return $i=vs($i,t,e,n,i,r),!0;case"mouseover":return Ki=vs(Ki,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Zs.set(o,vs(Zs.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Js.set(o,vs(Js.get(o)||null,t,e,n,i,r)),!0}return!1}function E0(t){var e=br(t.target);if(e!==null){var n=$r(e);if(n!==null){if(e=n.tag,e===13){if(e=c0(n),e!==null){t.blockedOn=e,S0(t.priority,function(){y0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=wf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);_f=i,n.target.dispatchEvent(i),_f=null}else return e=xa(n),e!==null&&Cd(e),t.blockedOn=n,!1;e.shift()}return!0}function Vh(t,e,n){wl(t)&&n.delete(e)}function nx(){Mf=!1,qi!==null&&wl(qi)&&(qi=null),$i!==null&&wl($i)&&($i=null),Ki!==null&&wl(Ki)&&(Ki=null),Zs.forEach(Vh),Js.forEach(Vh)}function _s(t,e){t.blockedOn===e&&(t.blockedOn=null,Mf||(Mf=!0,An.unstable_scheduleCallback(An.unstable_NormalPriority,nx)))}function Qs(t){function e(r){return _s(r,t)}if(0<Da.length){_s(Da[0],t);for(var n=1;n<Da.length;n++){var i=Da[n];i.blockedOn===t&&(i.blockedOn=null)}}for(qi!==null&&_s(qi,t),$i!==null&&_s($i,t),Ki!==null&&_s(Ki,t),Zs.forEach(e),Js.forEach(e),n=0;n<Hi.length;n++)i=Hi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Hi.length&&(n=Hi[0],n.blockedOn===null);)E0(n),n.blockedOn===null&&Hi.shift()}var Bo=Di.ReactCurrentBatchConfig,Hl=!0;function ix(t,e,n,i){var r=Qe,o=Bo.transition;Bo.transition=null;try{Qe=1,Pd(t,e,n,i)}finally{Qe=r,Bo.transition=o}}function rx(t,e,n,i){var r=Qe,o=Bo.transition;Bo.transition=null;try{Qe=4,Pd(t,e,n,i)}finally{Qe=r,Bo.transition=o}}function Pd(t,e,n,i){if(Hl){var r=wf(t,e,n,i);if(r===null)ac(t,e,i,Gl,n),Gh(t,i);else if(tx(r,t,e,n,i))i.stopPropagation();else if(Gh(t,i),e&4&&-1<ex.indexOf(t)){for(;r!==null;){var o=xa(r);if(o!==null&&_0(o),o=wf(t,e,n,i),o===null&&ac(t,e,i,Gl,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else ac(t,e,i,null,n)}}var Gl=null;function wf(t,e,n,i){if(Gl=null,t=Ad(i),t=br(t),t!==null)if(e=$r(t),e===null)t=null;else if(n=e.tag,n===13){if(t=c0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Gl=t,null}function M0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xy()){case Rd:return 1;case p0:return 4;case zl:case jy:return 16;case m0:return 536870912;default:return 16}default:return 16}}var Vi=null,Ld=null,Tl=null;function w0(){if(Tl)return Tl;var t,e=Ld,n=e.length,i,r="value"in Vi?Vi.value:Vi.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return Tl=r.slice(t,1<i?1-i:void 0)}function Al(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ia(){return!0}function Wh(){return!1}function bn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ia:Wh,this.isPropagationStopped=Wh,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ia)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ia)},persist:function(){},isPersistent:Ia}),e}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dd=bn(as),ya=gt({},as,{view:0,detail:0}),ox=bn(ya),Ju,Qu,ys,_u=gt({},ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Id,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ys&&(ys&&t.type==="mousemove"?(Ju=t.screenX-ys.screenX,Qu=t.screenY-ys.screenY):Qu=Ju=0,ys=t),Ju)},movementY:function(t){return"movementY"in t?t.movementY:Qu}}),Xh=bn(_u),sx=gt({},_u,{dataTransfer:0}),ax=bn(sx),lx=gt({},ya,{relatedTarget:0}),ec=bn(lx),ux=gt({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),cx=bn(ux),fx=gt({},as,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dx=bn(fx),hx=gt({},as,{data:0}),jh=bn(hx),px={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=gx[t])?!!e[t]:!1}function Id(){return vx}var _x=gt({},ya,{key:function(t){if(t.key){var e=px[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Id,charCode:function(t){return t.type==="keypress"?Al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yx=bn(_x),xx=gt({},_u,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yh=bn(xx),Sx=gt({},ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Id}),Ex=bn(Sx),Mx=gt({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),wx=bn(Mx),Tx=gt({},_u,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ax=bn(Tx),Rx=[9,13,27,32],Nd=Ri&&"CompositionEvent"in window,Fs=null;Ri&&"documentMode"in document&&(Fs=document.documentMode);var bx=Ri&&"TextEvent"in window&&!Fs,T0=Ri&&(!Nd||Fs&&8<Fs&&11>=Fs),qh=" ",$h=!1;function A0(t,e){switch(t){case"keyup":return Rx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function R0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Mo=!1;function Cx(t,e){switch(t){case"compositionend":return R0(e);case"keypress":return e.which!==32?null:($h=!0,qh);case"textInput":return t=e.data,t===qh&&$h?null:t;default:return null}}function Px(t,e){if(Mo)return t==="compositionend"||!Nd&&A0(t,e)?(t=w0(),Tl=Ld=Vi=null,Mo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return T0&&e.locale!=="ko"?null:e.data;default:return null}}var Lx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Lx[t.type]:e==="textarea"}function b0(t,e,n,i){o0(i),e=Vl(e,"onChange"),0<e.length&&(n=new Dd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ks=null,ea=null;function Dx(t){z0(t,0)}function yu(t){var e=Ao(t);if(Jg(e))return t}function Ix(t,e){if(t==="change")return e}var C0=!1;if(Ri){var tc;if(Ri){var nc="oninput"in document;if(!nc){var Zh=document.createElement("div");Zh.setAttribute("oninput","return;"),nc=typeof Zh.oninput=="function"}tc=nc}else tc=!1;C0=tc&&(!document.documentMode||9<document.documentMode)}function Jh(){ks&&(ks.detachEvent("onpropertychange",P0),ea=ks=null)}function P0(t){if(t.propertyName==="value"&&yu(ea)){var e=[];b0(e,ea,t,Ad(t)),u0(Dx,e)}}function Nx(t,e,n){t==="focusin"?(Jh(),ks=e,ea=n,ks.attachEvent("onpropertychange",P0)):t==="focusout"&&Jh()}function Ux(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yu(ea)}function Ox(t,e){if(t==="click")return yu(e)}function Fx(t,e){if(t==="input"||t==="change")return yu(e)}function kx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ni=typeof Object.is=="function"?Object.is:kx;function ta(t,e){if(ni(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!sf.call(e,r)||!ni(t[r],e[r]))return!1}return!0}function Qh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ep(t,e){var n=Qh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qh(n)}}function L0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?L0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function D0(){for(var t=window,e=Ol();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ol(t.document)}return e}function Ud(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function zx(t){var e=D0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&L0(n.ownerDocument.documentElement,n)){if(i!==null&&Ud(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=ep(n,o);var s=ep(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Bx=Ri&&"documentMode"in document&&11>=document.documentMode,wo=null,Tf=null,zs=null,Af=!1;function tp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Af||wo==null||wo!==Ol(i)||(i=wo,"selectionStart"in i&&Ud(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),zs&&ta(zs,i)||(zs=i,i=Vl(Tf,"onSelect"),0<i.length&&(e=new Dd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=wo)))}function Na(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var To={animationend:Na("Animation","AnimationEnd"),animationiteration:Na("Animation","AnimationIteration"),animationstart:Na("Animation","AnimationStart"),transitionend:Na("Transition","TransitionEnd")},ic={},I0={};Ri&&(I0=document.createElement("div").style,"AnimationEvent"in window||(delete To.animationend.animation,delete To.animationiteration.animation,delete To.animationstart.animation),"TransitionEvent"in window||delete To.transitionend.transition);function xu(t){if(ic[t])return ic[t];if(!To[t])return t;var e=To[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in I0)return ic[t]=e[n];return t}var N0=xu("animationend"),U0=xu("animationiteration"),O0=xu("animationstart"),F0=xu("transitionend"),k0=new Map,np="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cr(t,e){k0.set(t,e),qr(e,[t])}for(var rc=0;rc<np.length;rc++){var oc=np[rc],Hx=oc.toLowerCase(),Gx=oc[0].toUpperCase()+oc.slice(1);cr(Hx,"on"+Gx)}cr(N0,"onAnimationEnd");cr(U0,"onAnimationIteration");cr(O0,"onAnimationStart");cr("dblclick","onDoubleClick");cr("focusin","onFocus");cr("focusout","onBlur");cr(F0,"onTransitionEnd");Yo("onMouseEnter",["mouseout","mouseover"]);Yo("onMouseLeave",["mouseout","mouseover"]);Yo("onPointerEnter",["pointerout","pointerover"]);Yo("onPointerLeave",["pointerout","pointerover"]);qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Is="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Is));function ip(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Hy(i,e,void 0,t),t.currentTarget=null}function z0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;ip(r,a,u),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;ip(r,a,u),o=l}}}if(kl)throw t=Sf,kl=!1,Sf=null,t}function st(t,e){var n=e[Lf];n===void 0&&(n=e[Lf]=new Set);var i=t+"__bubble";n.has(i)||(B0(e,t,2,!1),n.add(i))}function sc(t,e,n){var i=0;e&&(i|=4),B0(n,t,i,e)}var Ua="_reactListening"+Math.random().toString(36).slice(2);function na(t){if(!t[Ua]){t[Ua]=!0,Yg.forEach(function(n){n!=="selectionchange"&&(Vx.has(n)||sc(n,!1,t),sc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ua]||(e[Ua]=!0,sc("selectionchange",!1,e))}}function B0(t,e,n,i){switch(M0(e)){case 1:var r=ix;break;case 4:r=rx;break;default:r=Pd}n=r.bind(null,e,n,t),r=void 0,!xf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ac(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=br(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}u0(function(){var u=o,c=Ad(n),h=[];e:{var d=k0.get(t);if(d!==void 0){var p=Dd,g=t;switch(t){case"keypress":if(Al(n)===0)break e;case"keydown":case"keyup":p=yx;break;case"focusin":g="focus",p=ec;break;case"focusout":g="blur",p=ec;break;case"beforeblur":case"afterblur":p=ec;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Xh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=ax;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Ex;break;case N0:case U0:case O0:p=cx;break;case F0:p=wx;break;case"scroll":p=ox;break;case"wheel":p=Ax;break;case"copy":case"cut":case"paste":p=dx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Yh}var y=(e&4)!==0,v=!y&&t==="scroll",f=y?d!==null?d+"Capture":null:d;y=[];for(var _=u,m;_!==null;){m=_;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,f!==null&&(x=Ks(_,f),x!=null&&y.push(ia(_,x,m)))),v)break;_=_.return}0<y.length&&(d=new p(d,g,null,n,c),h.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==_f&&(g=n.relatedTarget||n.fromElement)&&(br(g)||g[bi]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?br(g):null,g!==null&&(v=$r(g),g!==v||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(y=Xh,x="onMouseLeave",f="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(y=Yh,x="onPointerLeave",f="onPointerEnter",_="pointer"),v=p==null?d:Ao(p),m=g==null?d:Ao(g),d=new y(x,_+"leave",p,n,c),d.target=v,d.relatedTarget=m,x=null,br(c)===u&&(y=new y(f,_+"enter",g,n,c),y.target=m,y.relatedTarget=v,x=y),v=x,p&&g)t:{for(y=p,f=g,_=0,m=y;m;m=Jr(m))_++;for(m=0,x=f;x;x=Jr(x))m++;for(;0<_-m;)y=Jr(y),_--;for(;0<m-_;)f=Jr(f),m--;for(;_--;){if(y===f||f!==null&&y===f.alternate)break t;y=Jr(y),f=Jr(f)}y=null}else y=null;p!==null&&rp(h,d,p,y,!1),g!==null&&v!==null&&rp(h,v,g,y,!0)}}e:{if(d=u?Ao(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var A=Ix;else if(Kh(d))if(C0)A=Fx;else{A=Ux;var S=Nx}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(A=Ox);if(A&&(A=A(t,u))){b0(h,A,n,c);break e}S&&S(t,d,u),t==="focusout"&&(S=d._wrapperState)&&S.controlled&&d.type==="number"&&hf(d,"number",d.value)}switch(S=u?Ao(u):window,t){case"focusin":(Kh(S)||S.contentEditable==="true")&&(wo=S,Tf=u,zs=null);break;case"focusout":zs=Tf=wo=null;break;case"mousedown":Af=!0;break;case"contextmenu":case"mouseup":case"dragend":Af=!1,tp(h,n,c);break;case"selectionchange":if(Bx)break;case"keydown":case"keyup":tp(h,n,c)}var w;if(Nd)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Mo?A0(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(T0&&n.locale!=="ko"&&(Mo||P!=="onCompositionStart"?P==="onCompositionEnd"&&Mo&&(w=w0()):(Vi=c,Ld="value"in Vi?Vi.value:Vi.textContent,Mo=!0)),S=Vl(u,P),0<S.length&&(P=new jh(P,t,null,n,c),h.push({event:P,listeners:S}),w?P.data=w:(w=R0(n),w!==null&&(P.data=w)))),(w=bx?Cx(t,n):Px(t,n))&&(u=Vl(u,"onBeforeInput"),0<u.length&&(c=new jh("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=w))}z0(h,e)})}function ia(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Vl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Ks(t,n),o!=null&&i.unshift(ia(t,o,r)),o=Ks(t,e),o!=null&&i.push(ia(t,o,r))),t=t.return}return i}function Jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rp(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Ks(n,o),l!=null&&s.unshift(ia(n,l,a))):r||(l=Ks(n,o),l!=null&&s.push(ia(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Wx=/\r\n?/g,Xx=/\u0000|\uFFFD/g;function op(t){return(typeof t=="string"?t:""+t).replace(Wx,`
`).replace(Xx,"")}function Oa(t,e,n){if(e=op(e),op(t)!==e&&n)throw Error(de(425))}function Wl(){}var Rf=null,bf=null;function Cf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Pf=typeof setTimeout=="function"?setTimeout:void 0,jx=typeof clearTimeout=="function"?clearTimeout:void 0,sp=typeof Promise=="function"?Promise:void 0,Yx=typeof queueMicrotask=="function"?queueMicrotask:typeof sp<"u"?function(t){return sp.resolve(null).then(t).catch(qx)}:Pf;function qx(t){setTimeout(function(){throw t})}function lc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Qs(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Qs(e)}function Zi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ap(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ls=Math.random().toString(36).slice(2),ai="__reactFiber$"+ls,ra="__reactProps$"+ls,bi="__reactContainer$"+ls,Lf="__reactEvents$"+ls,$x="__reactListeners$"+ls,Kx="__reactHandles$"+ls;function br(t){var e=t[ai];if(e)return e;for(var n=t.parentNode;n;){if(e=n[bi]||n[ai]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ap(t);t!==null;){if(n=t[ai])return n;t=ap(t)}return e}t=n,n=t.parentNode}return null}function xa(t){return t=t[ai]||t[bi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ao(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(de(33))}function Su(t){return t[ra]||null}var Df=[],Ro=-1;function fr(t){return{current:t}}function lt(t){0>Ro||(t.current=Df[Ro],Df[Ro]=null,Ro--)}function ot(t,e){Ro++,Df[Ro]=t.current,t.current=e}var lr={},Qt=fr(lr),pn=fr(!1),kr=lr;function qo(t,e){var n=t.type.contextTypes;if(!n)return lr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function mn(t){return t=t.childContextTypes,t!=null}function Xl(){lt(pn),lt(Qt)}function lp(t,e,n){if(Qt.current!==lr)throw Error(de(168));ot(Qt,e),ot(pn,n)}function H0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(de(108,Ny(t)||"Unknown",r));return gt({},n,i)}function jl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||lr,kr=Qt.current,ot(Qt,t),ot(pn,pn.current),!0}function up(t,e,n){var i=t.stateNode;if(!i)throw Error(de(169));n?(t=H0(t,e,kr),i.__reactInternalMemoizedMergedChildContext=t,lt(pn),lt(Qt),ot(Qt,t)):lt(pn),ot(pn,n)}var yi=null,Eu=!1,uc=!1;function G0(t){yi===null?yi=[t]:yi.push(t)}function Zx(t){Eu=!0,G0(t)}function dr(){if(!uc&&yi!==null){uc=!0;var t=0,e=Qe;try{var n=yi;for(Qe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}yi=null,Eu=!1}catch(r){throw yi!==null&&(yi=yi.slice(t+1)),h0(Rd,dr),r}finally{Qe=e,uc=!1}}return null}var bo=[],Co=0,Yl=null,ql=0,Ln=[],Dn=0,zr=null,Ei=1,Mi="";function xr(t,e){bo[Co++]=ql,bo[Co++]=Yl,Yl=t,ql=e}function V0(t,e,n){Ln[Dn++]=Ei,Ln[Dn++]=Mi,Ln[Dn++]=zr,zr=t;var i=Ei;t=Mi;var r=32-ei(i)-1;i&=~(1<<r),n+=1;var o=32-ei(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,Ei=1<<32-ei(e)+r|n<<r|i,Mi=o+t}else Ei=1<<o|n<<r|i,Mi=t}function Od(t){t.return!==null&&(xr(t,1),V0(t,1,0))}function Fd(t){for(;t===Yl;)Yl=bo[--Co],bo[Co]=null,ql=bo[--Co],bo[Co]=null;for(;t===zr;)zr=Ln[--Dn],Ln[Dn]=null,Mi=Ln[--Dn],Ln[Dn]=null,Ei=Ln[--Dn],Ln[Dn]=null}var wn=null,Mn=null,ct=!1,Kn=null;function W0(t,e){var n=Fn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function cp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wn=t,Mn=Zi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wn=t,Mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=zr!==null?{id:Ei,overflow:Mi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Fn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wn=t,Mn=null,!0):!1;default:return!1}}function If(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Nf(t){if(ct){var e=Mn;if(e){var n=e;if(!cp(t,e)){if(If(t))throw Error(de(418));e=Zi(n.nextSibling);var i=wn;e&&cp(t,e)?W0(i,n):(t.flags=t.flags&-4097|2,ct=!1,wn=t)}}else{if(If(t))throw Error(de(418));t.flags=t.flags&-4097|2,ct=!1,wn=t}}}function fp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wn=t}function Fa(t){if(t!==wn)return!1;if(!ct)return fp(t),ct=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Cf(t.type,t.memoizedProps)),e&&(e=Mn)){if(If(t))throw X0(),Error(de(418));for(;e;)W0(t,e),e=Zi(e.nextSibling)}if(fp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(de(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mn=Zi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mn=null}}else Mn=wn?Zi(t.stateNode.nextSibling):null;return!0}function X0(){for(var t=Mn;t;)t=Zi(t.nextSibling)}function $o(){Mn=wn=null,ct=!1}function kd(t){Kn===null?Kn=[t]:Kn.push(t)}var Jx=Di.ReactCurrentBatchConfig;function xs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(de(309));var i=n.stateNode}if(!i)throw Error(de(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(de(284));if(!n._owner)throw Error(de(290,t))}return t}function ka(t,e){throw t=Object.prototype.toString.call(e),Error(de(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function dp(t){var e=t._init;return e(t._payload)}function j0(t){function e(f,_){if(t){var m=f.deletions;m===null?(f.deletions=[_],f.flags|=16):m.push(_)}}function n(f,_){if(!t)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=tr(f,_),f.index=0,f.sibling=null,f}function o(f,_,m){return f.index=m,t?(m=f.alternate,m!==null?(m=m.index,m<_?(f.flags|=2,_):m):(f.flags|=2,_)):(f.flags|=1048576,_)}function s(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,_,m,x){return _===null||_.tag!==6?(_=gc(m,f.mode,x),_.return=f,_):(_=r(_,m),_.return=f,_)}function l(f,_,m,x){var A=m.type;return A===Eo?c(f,_,m.props.children,x,m.key):_!==null&&(_.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===zi&&dp(A)===_.type)?(x=r(_,m.props),x.ref=xs(f,_,m),x.return=f,x):(x=Il(m.type,m.key,m.props,null,f.mode,x),x.ref=xs(f,_,m),x.return=f,x)}function u(f,_,m,x){return _===null||_.tag!==4||_.stateNode.containerInfo!==m.containerInfo||_.stateNode.implementation!==m.implementation?(_=vc(m,f.mode,x),_.return=f,_):(_=r(_,m.children||[]),_.return=f,_)}function c(f,_,m,x,A){return _===null||_.tag!==7?(_=Nr(m,f.mode,x,A),_.return=f,_):(_=r(_,m),_.return=f,_)}function h(f,_,m){if(typeof _=="string"&&_!==""||typeof _=="number")return _=gc(""+_,f.mode,m),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ra:return m=Il(_.type,_.key,_.props,null,f.mode,m),m.ref=xs(f,null,_),m.return=f,m;case So:return _=vc(_,f.mode,m),_.return=f,_;case zi:var x=_._init;return h(f,x(_._payload),m)}if(Ls(_)||ms(_))return _=Nr(_,f.mode,m,null),_.return=f,_;ka(f,_)}return null}function d(f,_,m,x){var A=_!==null?_.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return A!==null?null:a(f,_,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ra:return m.key===A?l(f,_,m,x):null;case So:return m.key===A?u(f,_,m,x):null;case zi:return A=m._init,d(f,_,A(m._payload),x)}if(Ls(m)||ms(m))return A!==null?null:c(f,_,m,x,null);ka(f,m)}return null}function p(f,_,m,x,A){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(m)||null,a(_,f,""+x,A);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ra:return f=f.get(x.key===null?m:x.key)||null,l(_,f,x,A);case So:return f=f.get(x.key===null?m:x.key)||null,u(_,f,x,A);case zi:var S=x._init;return p(f,_,m,S(x._payload),A)}if(Ls(x)||ms(x))return f=f.get(m)||null,c(_,f,x,A,null);ka(_,x)}return null}function g(f,_,m,x){for(var A=null,S=null,w=_,P=_=0,E=null;w!==null&&P<m.length;P++){w.index>P?(E=w,w=null):E=w.sibling;var T=d(f,w,m[P],x);if(T===null){w===null&&(w=E);break}t&&w&&T.alternate===null&&e(f,w),_=o(T,_,P),S===null?A=T:S.sibling=T,S=T,w=E}if(P===m.length)return n(f,w),ct&&xr(f,P),A;if(w===null){for(;P<m.length;P++)w=h(f,m[P],x),w!==null&&(_=o(w,_,P),S===null?A=w:S.sibling=w,S=w);return ct&&xr(f,P),A}for(w=i(f,w);P<m.length;P++)E=p(w,f,P,m[P],x),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?P:E.key),_=o(E,_,P),S===null?A=E:S.sibling=E,S=E);return t&&w.forEach(function(U){return e(f,U)}),ct&&xr(f,P),A}function y(f,_,m,x){var A=ms(m);if(typeof A!="function")throw Error(de(150));if(m=A.call(m),m==null)throw Error(de(151));for(var S=A=null,w=_,P=_=0,E=null,T=m.next();w!==null&&!T.done;P++,T=m.next()){w.index>P?(E=w,w=null):E=w.sibling;var U=d(f,w,T.value,x);if(U===null){w===null&&(w=E);break}t&&w&&U.alternate===null&&e(f,w),_=o(U,_,P),S===null?A=U:S.sibling=U,S=U,w=E}if(T.done)return n(f,w),ct&&xr(f,P),A;if(w===null){for(;!T.done;P++,T=m.next())T=h(f,T.value,x),T!==null&&(_=o(T,_,P),S===null?A=T:S.sibling=T,S=T);return ct&&xr(f,P),A}for(w=i(f,w);!T.done;P++,T=m.next())T=p(w,f,P,T.value,x),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?P:T.key),_=o(T,_,P),S===null?A=T:S.sibling=T,S=T);return t&&w.forEach(function(W){return e(f,W)}),ct&&xr(f,P),A}function v(f,_,m,x){if(typeof m=="object"&&m!==null&&m.type===Eo&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ra:e:{for(var A=m.key,S=_;S!==null;){if(S.key===A){if(A=m.type,A===Eo){if(S.tag===7){n(f,S.sibling),_=r(S,m.props.children),_.return=f,f=_;break e}}else if(S.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===zi&&dp(A)===S.type){n(f,S.sibling),_=r(S,m.props),_.ref=xs(f,S,m),_.return=f,f=_;break e}n(f,S);break}else e(f,S);S=S.sibling}m.type===Eo?(_=Nr(m.props.children,f.mode,x,m.key),_.return=f,f=_):(x=Il(m.type,m.key,m.props,null,f.mode,x),x.ref=xs(f,_,m),x.return=f,f=x)}return s(f);case So:e:{for(S=m.key;_!==null;){if(_.key===S)if(_.tag===4&&_.stateNode.containerInfo===m.containerInfo&&_.stateNode.implementation===m.implementation){n(f,_.sibling),_=r(_,m.children||[]),_.return=f,f=_;break e}else{n(f,_);break}else e(f,_);_=_.sibling}_=vc(m,f.mode,x),_.return=f,f=_}return s(f);case zi:return S=m._init,v(f,_,S(m._payload),x)}if(Ls(m))return g(f,_,m,x);if(ms(m))return y(f,_,m,x);ka(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,_!==null&&_.tag===6?(n(f,_.sibling),_=r(_,m),_.return=f,f=_):(n(f,_),_=gc(m,f.mode,x),_.return=f,f=_),s(f)):n(f,_)}return v}var Ko=j0(!0),Y0=j0(!1),$l=fr(null),Kl=null,Po=null,zd=null;function Bd(){zd=Po=Kl=null}function Hd(t){var e=$l.current;lt($l),t._currentValue=e}function Uf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ho(t,e){Kl=t,zd=Po=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(hn=!0),t.firstContext=null)}function Hn(t){var e=t._currentValue;if(zd!==t)if(t={context:t,memoizedValue:e,next:null},Po===null){if(Kl===null)throw Error(de(308));Po=t,Kl.dependencies={lanes:0,firstContext:t}}else Po=Po.next=t;return e}var Cr=null;function Gd(t){Cr===null?Cr=[t]:Cr.push(t)}function q0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Gd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ci(t,i)}function Ci(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Bi=!1;function Vd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ti(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ji(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ci(t,n)}return r=i.interleaved,r===null?(e.next=e,Gd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ci(t,n)}function Rl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,bd(t,n)}}function hp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Zl(t,e,n,i){var r=t.updateQueue;Bi=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var h=r.baseState;s=0,c=u=l=null,a=o;do{var d=a.lane,p=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,y=a;switch(d=e,p=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){h=g.call(p,h,d);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,d=typeof g=="function"?g.call(p,h,d):g,d==null)break e;h=gt({},h,d);break e;case 2:Bi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,s|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(c===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Hr|=s,t.lanes=s,t.memoizedState=h}}function pp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(de(191,r));r.call(i)}}}var Sa={},ui=fr(Sa),oa=fr(Sa),sa=fr(Sa);function Pr(t){if(t===Sa)throw Error(de(174));return t}function Wd(t,e){switch(ot(sa,e),ot(oa,t),ot(ui,Sa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:mf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=mf(e,t)}lt(ui),ot(ui,e)}function Zo(){lt(ui),lt(oa),lt(sa)}function K0(t){Pr(sa.current);var e=Pr(ui.current),n=mf(e,t.type);e!==n&&(ot(oa,t),ot(ui,n))}function Xd(t){oa.current===t&&(lt(ui),lt(oa))}var dt=fr(0);function Jl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var cc=[];function jd(){for(var t=0;t<cc.length;t++)cc[t]._workInProgressVersionPrimary=null;cc.length=0}var bl=Di.ReactCurrentDispatcher,fc=Di.ReactCurrentBatchConfig,Br=0,mt=null,Rt=null,Ut=null,Ql=!1,Bs=!1,aa=0,Qx=0;function jt(){throw Error(de(321))}function Yd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ni(t[n],e[n]))return!1;return!0}function qd(t,e,n,i,r,o){if(Br=o,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,bl.current=t===null||t.memoizedState===null?iS:rS,t=n(i,r),Bs){o=0;do{if(Bs=!1,aa=0,25<=o)throw Error(de(301));o+=1,Ut=Rt=null,e.updateQueue=null,bl.current=oS,t=n(i,r)}while(Bs)}if(bl.current=eu,e=Rt!==null&&Rt.next!==null,Br=0,Ut=Rt=mt=null,Ql=!1,e)throw Error(de(300));return t}function $d(){var t=aa!==0;return aa=0,t}function oi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?mt.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function Gn(){if(Rt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Rt.next;var e=Ut===null?mt.memoizedState:Ut.next;if(e!==null)Ut=e,Rt=t;else{if(t===null)throw Error(de(310));Rt=t,t={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},Ut===null?mt.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function la(t,e){return typeof e=="function"?e(t):e}function dc(t){var e=Gn(),n=e.queue;if(n===null)throw Error(de(311));n.lastRenderedReducer=t;var i=Rt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Br&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,s=i):l=l.next=h,mt.lanes|=c,Hr|=c}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=a,ni(i,e.memoizedState)||(hn=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,mt.lanes|=o,Hr|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function hc(t){var e=Gn(),n=e.queue;if(n===null)throw Error(de(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);ni(o,e.memoizedState)||(hn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function Z0(){}function J0(t,e){var n=mt,i=Gn(),r=e(),o=!ni(i.memoizedState,r);if(o&&(i.memoizedState=r,hn=!0),i=i.queue,Kd(tv.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,ua(9,ev.bind(null,n,i,r,e),void 0,null),kt===null)throw Error(de(349));Br&30||Q0(n,e,r)}return r}function Q0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ev(t,e,n,i){e.value=n,e.getSnapshot=i,nv(e)&&iv(t)}function tv(t,e,n){return n(function(){nv(e)&&iv(t)})}function nv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ni(t,n)}catch{return!0}}function iv(t){var e=Ci(t,1);e!==null&&ti(e,t,1,-1)}function mp(t){var e=oi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:t},e.queue=t,t=t.dispatch=nS.bind(null,mt,t),[e.memoizedState,t]}function ua(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function rv(){return Gn().memoizedState}function Cl(t,e,n,i){var r=oi();mt.flags|=t,r.memoizedState=ua(1|e,n,void 0,i===void 0?null:i)}function Mu(t,e,n,i){var r=Gn();i=i===void 0?null:i;var o=void 0;if(Rt!==null){var s=Rt.memoizedState;if(o=s.destroy,i!==null&&Yd(i,s.deps)){r.memoizedState=ua(e,n,o,i);return}}mt.flags|=t,r.memoizedState=ua(1|e,n,o,i)}function gp(t,e){return Cl(8390656,8,t,e)}function Kd(t,e){return Mu(2048,8,t,e)}function ov(t,e){return Mu(4,2,t,e)}function sv(t,e){return Mu(4,4,t,e)}function av(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function lv(t,e,n){return n=n!=null?n.concat([t]):null,Mu(4,4,av.bind(null,e,t),n)}function Zd(){}function uv(t,e){var n=Gn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Yd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function cv(t,e){var n=Gn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Yd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function fv(t,e,n){return Br&21?(ni(n,e)||(n=g0(),mt.lanes|=n,Hr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,hn=!0),t.memoizedState=n)}function eS(t,e){var n=Qe;Qe=n!==0&&4>n?n:4,t(!0);var i=fc.transition;fc.transition={};try{t(!1),e()}finally{Qe=n,fc.transition=i}}function dv(){return Gn().memoizedState}function tS(t,e,n){var i=er(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},hv(t))pv(e,n);else if(n=q0(t,e,n,i),n!==null){var r=an();ti(n,t,i,r),mv(n,e,i)}}function nS(t,e,n){var i=er(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(hv(t))pv(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,ni(a,s)){var l=e.interleaved;l===null?(r.next=r,Gd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=q0(t,e,r,i),n!==null&&(r=an(),ti(n,t,i,r),mv(n,e,i))}}function hv(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function pv(t,e){Bs=Ql=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function mv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,bd(t,n)}}var eu={readContext:Hn,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},iS={readContext:Hn,useCallback:function(t,e){return oi().memoizedState=[t,e===void 0?null:e],t},useContext:Hn,useEffect:gp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Cl(4194308,4,av.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Cl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Cl(4,2,t,e)},useMemo:function(t,e){var n=oi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=oi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=tS.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=oi();return t={current:t},e.memoizedState=t},useState:mp,useDebugValue:Zd,useDeferredValue:function(t){return oi().memoizedState=t},useTransition:function(){var t=mp(!1),e=t[0];return t=eS.bind(null,t[1]),oi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=oi();if(ct){if(n===void 0)throw Error(de(407));n=n()}else{if(n=e(),kt===null)throw Error(de(349));Br&30||Q0(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,gp(tv.bind(null,i,o,t),[t]),i.flags|=2048,ua(9,ev.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=oi(),e=kt.identifierPrefix;if(ct){var n=Mi,i=Ei;n=(i&~(1<<32-ei(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=aa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Qx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},rS={readContext:Hn,useCallback:uv,useContext:Hn,useEffect:Kd,useImperativeHandle:lv,useInsertionEffect:ov,useLayoutEffect:sv,useMemo:cv,useReducer:dc,useRef:rv,useState:function(){return dc(la)},useDebugValue:Zd,useDeferredValue:function(t){var e=Gn();return fv(e,Rt.memoizedState,t)},useTransition:function(){var t=dc(la)[0],e=Gn().memoizedState;return[t,e]},useMutableSource:Z0,useSyncExternalStore:J0,useId:dv,unstable_isNewReconciler:!1},oS={readContext:Hn,useCallback:uv,useContext:Hn,useEffect:Kd,useImperativeHandle:lv,useInsertionEffect:ov,useLayoutEffect:sv,useMemo:cv,useReducer:hc,useRef:rv,useState:function(){return hc(la)},useDebugValue:Zd,useDeferredValue:function(t){var e=Gn();return Rt===null?e.memoizedState=t:fv(e,Rt.memoizedState,t)},useTransition:function(){var t=hc(la)[0],e=Gn().memoizedState;return[t,e]},useMutableSource:Z0,useSyncExternalStore:J0,useId:dv,unstable_isNewReconciler:!1};function qn(t,e){if(t&&t.defaultProps){e=gt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Of(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:gt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var wu={isMounted:function(t){return(t=t._reactInternals)?$r(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=an(),r=er(t),o=Ti(i,r);o.payload=e,n!=null&&(o.callback=n),e=Ji(t,o,r),e!==null&&(ti(e,t,r,i),Rl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=an(),r=er(t),o=Ti(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Ji(t,o,r),e!==null&&(ti(e,t,r,i),Rl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=an(),i=er(t),r=Ti(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ji(t,r,i),e!==null&&(ti(e,t,i,n),Rl(e,t,i))}};function vp(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!ta(n,i)||!ta(r,o):!0}function gv(t,e,n){var i=!1,r=lr,o=e.contextType;return typeof o=="object"&&o!==null?o=Hn(o):(r=mn(e)?kr:Qt.current,i=e.contextTypes,o=(i=i!=null)?qo(t,r):lr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=wu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function _p(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&wu.enqueueReplaceState(e,e.state,null)}function Ff(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Vd(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Hn(o):(o=mn(e)?kr:Qt.current,r.context=qo(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Of(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&wu.enqueueReplaceState(r,r.state,null),Zl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Jo(t,e){try{var n="",i=e;do n+=Iy(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function pc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function kf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var sS=typeof WeakMap=="function"?WeakMap:Map;function vv(t,e,n){n=Ti(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){nu||(nu=!0,qf=i),kf(t,e)},n}function _v(t,e,n){n=Ti(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){kf(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){kf(t,e),typeof i!="function"&&(Qi===null?Qi=new Set([this]):Qi.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function yp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new sS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=xS.bind(null,t,e,n),e.then(t,t))}function xp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Sp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ti(-1,1),e.tag=2,Ji(n,e,1))),n.lanes|=1),t)}var aS=Di.ReactCurrentOwner,hn=!1;function on(t,e,n,i){e.child=t===null?Y0(e,null,n,i):Ko(e,t.child,n,i)}function Ep(t,e,n,i,r){n=n.render;var o=e.ref;return Ho(e,r),i=qd(t,e,n,i,o,r),n=$d(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(ct&&n&&Od(e),e.flags|=1,on(t,e,i,r),e.child)}function Mp(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!oh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,yv(t,e,o,i,r)):(t=Il(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ta,n(s,i)&&t.ref===e.ref)return Pi(t,e,r)}return e.flags|=1,t=tr(o,i),t.ref=e.ref,t.return=e,e.child=t}function yv(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(ta(o,i)&&t.ref===e.ref)if(hn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(hn=!0);else return e.lanes=t.lanes,Pi(t,e,r)}return zf(t,e,n,i,r)}function xv(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(Do,En),En|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ot(Do,En),En|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,ot(Do,En),En|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,ot(Do,En),En|=i;return on(t,e,r,n),e.child}function Sv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function zf(t,e,n,i,r){var o=mn(n)?kr:Qt.current;return o=qo(e,o),Ho(e,r),n=qd(t,e,n,i,o,r),i=$d(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(ct&&i&&Od(e),e.flags|=1,on(t,e,n,r),e.child)}function wp(t,e,n,i,r){if(mn(n)){var o=!0;jl(e)}else o=!1;if(Ho(e,r),e.stateNode===null)Pl(t,e),gv(e,n,i),Ff(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Hn(u):(u=mn(n)?kr:Qt.current,u=qo(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==u)&&_p(e,s,i,u),Bi=!1;var d=e.memoizedState;s.state=d,Zl(e,i,s,r),l=e.memoizedState,a!==i||d!==l||pn.current||Bi?(typeof c=="function"&&(Of(e,n,c,i),l=e.memoizedState),(a=Bi||vp(e,n,a,i,d,l,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,$0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:qn(e.type,a),s.props=u,h=e.pendingProps,d=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Hn(l):(l=mn(n)?kr:Qt.current,l=qo(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||d!==l)&&_p(e,s,i,l),Bi=!1,d=e.memoizedState,s.state=d,Zl(e,i,s,r);var g=e.memoizedState;a!==h||d!==g||pn.current||Bi?(typeof p=="function"&&(Of(e,n,p,i),g=e.memoizedState),(u=Bi||vp(e,n,u,i,d,g,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,g,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,g,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),s.props=i,s.state=g,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Bf(t,e,n,i,o,r)}function Bf(t,e,n,i,r,o){Sv(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&up(e,n,!1),Pi(t,e,o);i=e.stateNode,aS.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=Ko(e,t.child,null,o),e.child=Ko(e,null,a,o)):on(t,e,a,o),e.memoizedState=i.state,r&&up(e,n,!0),e.child}function Ev(t){var e=t.stateNode;e.pendingContext?lp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&lp(t,e.context,!1),Wd(t,e.containerInfo)}function Tp(t,e,n,i,r){return $o(),kd(r),e.flags|=256,on(t,e,n,i),e.child}var Hf={dehydrated:null,treeContext:null,retryLane:0};function Gf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Mv(t,e,n){var i=e.pendingProps,r=dt.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ot(dt,r&1),t===null)return Nf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ru(s,i,0,null),t=Nr(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Gf(n),e.memoizedState=Hf,t):Jd(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return lS(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=tr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=tr(a,o):(o=Nr(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?Gf(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Hf,i}return o=t.child,t=o.sibling,i=tr(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Jd(t,e){return e=Ru({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function za(t,e,n,i){return i!==null&&kd(i),Ko(e,t.child,null,n),t=Jd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function lS(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=pc(Error(de(422))),za(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=Ru({mode:"visible",children:i.children},r,0,null),o=Nr(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Ko(e,t.child,null,s),e.child.memoizedState=Gf(s),e.memoizedState=Hf,o);if(!(e.mode&1))return za(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(de(419)),i=pc(o,i,void 0),za(t,e,s,i)}if(a=(s&t.childLanes)!==0,hn||a){if(i=kt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Ci(t,r),ti(i,t,r,-1))}return rh(),i=pc(Error(de(421))),za(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=SS.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,Mn=Zi(r.nextSibling),wn=e,ct=!0,Kn=null,t!==null&&(Ln[Dn++]=Ei,Ln[Dn++]=Mi,Ln[Dn++]=zr,Ei=t.id,Mi=t.overflow,zr=e),e=Jd(e,i.children),e.flags|=4096,e)}function Ap(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Uf(t.return,e,n)}function mc(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function wv(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(on(t,e,i.children,n),i=dt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ap(t,n,e);else if(t.tag===19)Ap(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ot(dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Jl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),mc(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Jl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}mc(e,!0,n,null,o);break;case"together":mc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Pl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Hr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(de(153));if(e.child!==null){for(t=e.child,n=tr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=tr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function uS(t,e,n){switch(e.tag){case 3:Ev(e),$o();break;case 5:K0(e);break;case 1:mn(e.type)&&jl(e);break;case 4:Wd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ot($l,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ot(dt,dt.current&1),e.flags|=128,null):n&e.child.childLanes?Mv(t,e,n):(ot(dt,dt.current&1),t=Pi(t,e,n),t!==null?t.sibling:null);ot(dt,dt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return wv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ot(dt,dt.current),i)break;return null;case 22:case 23:return e.lanes=0,xv(t,e,n)}return Pi(t,e,n)}var Tv,Vf,Av,Rv;Tv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vf=function(){};Av=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Pr(ui.current);var o=null;switch(n){case"input":r=ff(t,r),i=ff(t,i),o=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),o=[];break;case"textarea":r=pf(t,r),i=pf(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Wl)}gf(n,i);var s;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(qs.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(qs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&st("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};Rv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ss(t,e){if(!ct)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function cS(t,e,n){var i=e.pendingProps;switch(Fd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return mn(e.type)&&Xl(),Yt(e),null;case 3:return i=e.stateNode,Zo(),lt(pn),lt(Qt),jd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Fa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Kn!==null&&(Zf(Kn),Kn=null))),Vf(t,e),Yt(e),null;case 5:Xd(e);var r=Pr(sa.current);if(n=e.type,t!==null&&e.stateNode!=null)Av(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(de(166));return Yt(e),null}if(t=Pr(ui.current),Fa(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[ai]=e,i[ra]=o,t=(e.mode&1)!==0,n){case"dialog":st("cancel",i),st("close",i);break;case"iframe":case"object":case"embed":st("load",i);break;case"video":case"audio":for(r=0;r<Is.length;r++)st(Is[r],i);break;case"source":st("error",i);break;case"img":case"image":case"link":st("error",i),st("load",i);break;case"details":st("toggle",i);break;case"input":Uh(i,o),st("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},st("invalid",i);break;case"textarea":Fh(i,o),st("invalid",i)}gf(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&Oa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Oa(i.textContent,a,t),r=["children",""+a]):qs.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&st("scroll",i)}switch(n){case"input":ba(i),Oh(i,o,!0);break;case"textarea":ba(i),kh(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Wl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=t0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[ai]=e,t[ra]=i,Tv(t,e,!1,!1),e.stateNode=t;e:{switch(s=vf(n,i),n){case"dialog":st("cancel",t),st("close",t),r=i;break;case"iframe":case"object":case"embed":st("load",t),r=i;break;case"video":case"audio":for(r=0;r<Is.length;r++)st(Is[r],t);r=i;break;case"source":st("error",t),r=i;break;case"img":case"image":case"link":st("error",t),st("load",t),r=i;break;case"details":st("toggle",t),r=i;break;case"input":Uh(t,i),r=ff(t,i),st("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),st("invalid",t);break;case"textarea":Fh(t,i),r=pf(t,i),st("invalid",t);break;default:r=i}gf(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?r0(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&n0(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&$s(t,l):typeof l=="number"&&$s(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(qs.hasOwnProperty(o)?l!=null&&o==="onScroll"&&st("scroll",t):l!=null&&Ed(t,o,l,s))}switch(n){case"input":ba(t),Oh(t,i,!1);break;case"textarea":ba(t),kh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ar(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?Fo(t,!!i.multiple,o,!1):i.defaultValue!=null&&Fo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Wl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yt(e),null;case 6:if(t&&e.stateNode!=null)Rv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(de(166));if(n=Pr(sa.current),Pr(ui.current),Fa(e)){if(i=e.stateNode,n=e.memoizedProps,i[ai]=e,(o=i.nodeValue!==n)&&(t=wn,t!==null))switch(t.tag){case 3:Oa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Oa(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ai]=e,e.stateNode=i}return Yt(e),null;case 13:if(lt(dt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ct&&Mn!==null&&e.mode&1&&!(e.flags&128))X0(),$o(),e.flags|=98560,o=!1;else if(o=Fa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(de(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(de(317));o[ai]=e}else $o(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yt(e),o=!1}else Kn!==null&&(Zf(Kn),Kn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||dt.current&1?bt===0&&(bt=3):rh())),e.updateQueue!==null&&(e.flags|=4),Yt(e),null);case 4:return Zo(),Vf(t,e),t===null&&na(e.stateNode.containerInfo),Yt(e),null;case 10:return Hd(e.type._context),Yt(e),null;case 17:return mn(e.type)&&Xl(),Yt(e),null;case 19:if(lt(dt),o=e.memoizedState,o===null)return Yt(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)Ss(o,!1);else{if(bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Jl(t),s!==null){for(e.flags|=128,Ss(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ot(dt,dt.current&1|2),e.child}t=t.sibling}o.tail!==null&&Et()>Qo&&(e.flags|=128,i=!0,Ss(o,!1),e.lanes=4194304)}else{if(!i)if(t=Jl(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ss(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ct)return Yt(e),null}else 2*Et()-o.renderingStartTime>Qo&&n!==1073741824&&(e.flags|=128,i=!0,Ss(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Et(),e.sibling=null,n=dt.current,ot(dt,i?n&1|2:n&1),e):(Yt(e),null);case 22:case 23:return ih(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?En&1073741824&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),null;case 24:return null;case 25:return null}throw Error(de(156,e.tag))}function fS(t,e){switch(Fd(e),e.tag){case 1:return mn(e.type)&&Xl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Zo(),lt(pn),lt(Qt),jd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Xd(e),null;case 13:if(lt(dt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(de(340));$o()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return lt(dt),null;case 4:return Zo(),null;case 10:return Hd(e.type._context),null;case 22:case 23:return ih(),null;case 24:return null;default:return null}}var Ba=!1,Zt=!1,dS=typeof WeakSet=="function"?WeakSet:Set,Te=null;function Lo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){yt(t,e,i)}else n.current=null}function Wf(t,e,n){try{n()}catch(i){yt(t,e,i)}}var Rp=!1;function hS(t,e){if(Rf=Hl,t=D0(),Ud(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=s+r),h!==o||i!==0&&h.nodeType!==3||(l=s+i),h.nodeType===3&&(s+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===r&&(a=s),d===o&&++c===i&&(l=s),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(bf={focusedElem:t,selectionRange:n},Hl=!1,Te=e;Te!==null;)if(e=Te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Te=t;else for(;Te!==null;){e=Te;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,v=g.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?y:qn(e.type,y),v);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(de(163))}}catch(x){yt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}return g=Rp,Rp=!1,g}function Hs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&Wf(e,n,o)}r=r.next}while(r!==i)}}function Tu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Xf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function bv(t){var e=t.alternate;e!==null&&(t.alternate=null,bv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ai],delete e[ra],delete e[Lf],delete e[$x],delete e[Kx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Cv(t){return t.tag===5||t.tag===3||t.tag===4}function bp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Cv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Wl));else if(i!==4&&(t=t.child,t!==null))for(jf(t,e,n),t=t.sibling;t!==null;)jf(t,e,n),t=t.sibling}function Yf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Yf(t,e,n),t=t.sibling;t!==null;)Yf(t,e,n),t=t.sibling}var Ht=null,$n=!1;function Ii(t,e,n){for(n=n.child;n!==null;)Pv(t,e,n),n=n.sibling}function Pv(t,e,n){if(li&&typeof li.onCommitFiberUnmount=="function")try{li.onCommitFiberUnmount(vu,n)}catch{}switch(n.tag){case 5:Zt||Lo(n,e);case 6:var i=Ht,r=$n;Ht=null,Ii(t,e,n),Ht=i,$n=r,Ht!==null&&($n?(t=Ht,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ht.removeChild(n.stateNode));break;case 18:Ht!==null&&($n?(t=Ht,n=n.stateNode,t.nodeType===8?lc(t.parentNode,n):t.nodeType===1&&lc(t,n),Qs(t)):lc(Ht,n.stateNode));break;case 4:i=Ht,r=$n,Ht=n.stateNode.containerInfo,$n=!0,Ii(t,e,n),Ht=i,$n=r;break;case 0:case 11:case 14:case 15:if(!Zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Wf(n,e,s),r=r.next}while(r!==i)}Ii(t,e,n);break;case 1:if(!Zt&&(Lo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){yt(n,e,a)}Ii(t,e,n);break;case 21:Ii(t,e,n);break;case 22:n.mode&1?(Zt=(i=Zt)||n.memoizedState!==null,Ii(t,e,n),Zt=i):Ii(t,e,n);break;default:Ii(t,e,n)}}function Cp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new dS),e.forEach(function(i){var r=ES.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Wn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Ht=a.stateNode,$n=!1;break e;case 3:Ht=a.stateNode.containerInfo,$n=!0;break e;case 4:Ht=a.stateNode.containerInfo,$n=!0;break e}a=a.return}if(Ht===null)throw Error(de(160));Pv(o,s,r),Ht=null,$n=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){yt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Lv(e,t),e=e.sibling}function Lv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wn(e,t),ri(t),i&4){try{Hs(3,t,t.return),Tu(3,t)}catch(y){yt(t,t.return,y)}try{Hs(5,t,t.return)}catch(y){yt(t,t.return,y)}}break;case 1:Wn(e,t),ri(t),i&512&&n!==null&&Lo(n,n.return);break;case 5:if(Wn(e,t),ri(t),i&512&&n!==null&&Lo(n,n.return),t.flags&32){var r=t.stateNode;try{$s(r,"")}catch(y){yt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Qg(r,o),vf(a,s);var u=vf(a,o);for(s=0;s<l.length;s+=2){var c=l[s],h=l[s+1];c==="style"?r0(r,h):c==="dangerouslySetInnerHTML"?n0(r,h):c==="children"?$s(r,h):Ed(r,c,h,u)}switch(a){case"input":df(r,o);break;case"textarea":e0(r,o);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?Fo(r,!!o.multiple,p,!1):d!==!!o.multiple&&(o.defaultValue!=null?Fo(r,!!o.multiple,o.defaultValue,!0):Fo(r,!!o.multiple,o.multiple?[]:"",!1))}r[ra]=o}catch(y){yt(t,t.return,y)}}break;case 6:if(Wn(e,t),ri(t),i&4){if(t.stateNode===null)throw Error(de(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(y){yt(t,t.return,y)}}break;case 3:if(Wn(e,t),ri(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Qs(e.containerInfo)}catch(y){yt(t,t.return,y)}break;case 4:Wn(e,t),ri(t);break;case 13:Wn(e,t),ri(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(th=Et())),i&4&&Cp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Zt=(u=Zt)||c,Wn(e,t),Zt=u):Wn(e,t),ri(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(Te=t,c=t.child;c!==null;){for(h=Te=c;Te!==null;){switch(d=Te,p=d.child,d.tag){case 0:case 11:case 14:case 15:Hs(4,d,d.return);break;case 1:Lo(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){yt(i,n,y)}}break;case 5:Lo(d,d.return);break;case 22:if(d.memoizedState!==null){Lp(h);continue}}p!==null?(p.return=d,Te=p):Lp(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{r=h.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=i0("display",s))}catch(y){yt(t,t.return,y)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){yt(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Wn(e,t),ri(t),i&4&&Cp(t);break;case 21:break;default:Wn(e,t),ri(t)}}function ri(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Cv(n)){var i=n;break e}n=n.return}throw Error(de(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&($s(r,""),i.flags&=-33);var o=bp(t);Yf(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=bp(t);jf(t,a,s);break;default:throw Error(de(161))}}catch(l){yt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function pS(t,e,n){Te=t,Dv(t)}function Dv(t,e,n){for(var i=(t.mode&1)!==0;Te!==null;){var r=Te,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||Ba;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Zt;a=Ba;var u=Zt;if(Ba=s,(Zt=l)&&!u)for(Te=r;Te!==null;)s=Te,l=s.child,s.tag===22&&s.memoizedState!==null?Dp(r):l!==null?(l.return=s,Te=l):Dp(r);for(;o!==null;)Te=o,Dv(o),o=o.sibling;Te=r,Ba=a,Zt=u}Pp(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,Te=o):Pp(t)}}function Pp(t){for(;Te!==null;){var e=Te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||Tu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:qn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&pp(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}pp(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Qs(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(de(163))}Zt||e.flags&512&&Xf(e)}catch(d){yt(e,e.return,d)}}if(e===t){Te=null;break}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}}function Lp(t){for(;Te!==null;){var e=Te;if(e===t){Te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Te=n;break}Te=e.return}}function Dp(t){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Tu(4,e)}catch(l){yt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var o=e.return;try{Xf(e)}catch(l){yt(e,o,l)}break;case 5:var s=e.return;try{Xf(e)}catch(l){yt(e,s,l)}}}catch(l){yt(e,e.return,l)}if(e===t){Te=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Te=a;break}Te=e.return}}var mS=Math.ceil,tu=Di.ReactCurrentDispatcher,Qd=Di.ReactCurrentOwner,zn=Di.ReactCurrentBatchConfig,Ke=0,kt=null,wt=null,Vt=0,En=0,Do=fr(0),bt=0,ca=null,Hr=0,Au=0,eh=0,Gs=null,cn=null,th=0,Qo=1/0,_i=null,nu=!1,qf=null,Qi=null,Ha=!1,Wi=null,iu=0,Vs=0,$f=null,Ll=-1,Dl=0;function an(){return Ke&6?Et():Ll!==-1?Ll:Ll=Et()}function er(t){return t.mode&1?Ke&2&&Vt!==0?Vt&-Vt:Jx.transition!==null?(Dl===0&&(Dl=g0()),Dl):(t=Qe,t!==0||(t=window.event,t=t===void 0?16:M0(t.type)),t):1}function ti(t,e,n,i){if(50<Vs)throw Vs=0,$f=null,Error(de(185));_a(t,n,i),(!(Ke&2)||t!==kt)&&(t===kt&&(!(Ke&2)&&(Au|=n),bt===4&&Gi(t,Vt)),gn(t,i),n===1&&Ke===0&&!(e.mode&1)&&(Qo=Et()+500,Eu&&dr()))}function gn(t,e){var n=t.callbackNode;Jy(t,e);var i=Bl(t,t===kt?Vt:0);if(i===0)n!==null&&Hh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Hh(n),e===1)t.tag===0?Zx(Ip.bind(null,t)):G0(Ip.bind(null,t)),Yx(function(){!(Ke&6)&&dr()}),n=null;else{switch(v0(i)){case 1:n=Rd;break;case 4:n=p0;break;case 16:n=zl;break;case 536870912:n=m0;break;default:n=zl}n=Bv(n,Iv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Iv(t,e){if(Ll=-1,Dl=0,Ke&6)throw Error(de(327));var n=t.callbackNode;if(Go()&&t.callbackNode!==n)return null;var i=Bl(t,t===kt?Vt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ru(t,i);else{e=i;var r=Ke;Ke|=2;var o=Uv();(kt!==t||Vt!==e)&&(_i=null,Qo=Et()+500,Ir(t,e));do try{_S();break}catch(a){Nv(t,a)}while(!0);Bd(),tu.current=o,Ke=r,wt!==null?e=0:(kt=null,Vt=0,e=bt)}if(e!==0){if(e===2&&(r=Ef(t),r!==0&&(i=r,e=Kf(t,r))),e===1)throw n=ca,Ir(t,0),Gi(t,i),gn(t,Et()),n;if(e===6)Gi(t,i);else{if(r=t.current.alternate,!(i&30)&&!gS(r)&&(e=ru(t,i),e===2&&(o=Ef(t),o!==0&&(i=o,e=Kf(t,o))),e===1))throw n=ca,Ir(t,0),Gi(t,i),gn(t,Et()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(de(345));case 2:Sr(t,cn,_i);break;case 3:if(Gi(t,i),(i&130023424)===i&&(e=th+500-Et(),10<e)){if(Bl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){an(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Pf(Sr.bind(null,t,cn,_i),e);break}Sr(t,cn,_i);break;case 4:if(Gi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-ei(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*mS(i/1960))-i,10<i){t.timeoutHandle=Pf(Sr.bind(null,t,cn,_i),i);break}Sr(t,cn,_i);break;case 5:Sr(t,cn,_i);break;default:throw Error(de(329))}}}return gn(t,Et()),t.callbackNode===n?Iv.bind(null,t):null}function Kf(t,e){var n=Gs;return t.current.memoizedState.isDehydrated&&(Ir(t,e).flags|=256),t=ru(t,e),t!==2&&(e=cn,cn=n,e!==null&&Zf(e)),t}function Zf(t){cn===null?cn=t:cn.push.apply(cn,t)}function gS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!ni(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gi(t,e){for(e&=~eh,e&=~Au,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ei(e),i=1<<n;t[n]=-1,e&=~i}}function Ip(t){if(Ke&6)throw Error(de(327));Go();var e=Bl(t,0);if(!(e&1))return gn(t,Et()),null;var n=ru(t,e);if(t.tag!==0&&n===2){var i=Ef(t);i!==0&&(e=i,n=Kf(t,i))}if(n===1)throw n=ca,Ir(t,0),Gi(t,e),gn(t,Et()),n;if(n===6)throw Error(de(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Sr(t,cn,_i),gn(t,Et()),null}function nh(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(Qo=Et()+500,Eu&&dr())}}function Gr(t){Wi!==null&&Wi.tag===0&&!(Ke&6)&&Go();var e=Ke;Ke|=1;var n=zn.transition,i=Qe;try{if(zn.transition=null,Qe=1,t)return t()}finally{Qe=i,zn.transition=n,Ke=e,!(Ke&6)&&dr()}}function ih(){En=Do.current,lt(Do)}function Ir(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,jx(n)),wt!==null)for(n=wt.return;n!==null;){var i=n;switch(Fd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Xl();break;case 3:Zo(),lt(pn),lt(Qt),jd();break;case 5:Xd(i);break;case 4:Zo();break;case 13:lt(dt);break;case 19:lt(dt);break;case 10:Hd(i.type._context);break;case 22:case 23:ih()}n=n.return}if(kt=t,wt=t=tr(t.current,null),Vt=En=e,bt=0,ca=null,eh=Au=Hr=0,cn=Gs=null,Cr!==null){for(e=0;e<Cr.length;e++)if(n=Cr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}Cr=null}return t}function Nv(t,e){do{var n=wt;try{if(Bd(),bl.current=eu,Ql){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ql=!1}if(Br=0,Ut=Rt=mt=null,Bs=!1,aa=0,Qd.current=null,n===null||n.return===null){bt=1,ca=e,wt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Vt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=xp(s);if(p!==null){p.flags&=-257,Sp(p,s,a,o,e),p.mode&1&&yp(o,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){yp(o,u,e),rh();break e}l=Error(de(426))}}else if(ct&&a.mode&1){var v=xp(s);if(v!==null){!(v.flags&65536)&&(v.flags|=256),Sp(v,s,a,o,e),kd(Jo(l,a));break e}}o=l=Jo(l,a),bt!==4&&(bt=2),Gs===null?Gs=[o]:Gs.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var f=vv(o,l,e);hp(o,f);break e;case 1:a=l;var _=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof _.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Qi===null||!Qi.has(m)))){o.flags|=65536,e&=-e,o.lanes|=e;var x=_v(o,a,e);hp(o,x);break e}}o=o.return}while(o!==null)}Fv(n)}catch(A){e=A,wt===n&&n!==null&&(wt=n=n.return);continue}break}while(!0)}function Uv(){var t=tu.current;return tu.current=eu,t===null?eu:t}function rh(){(bt===0||bt===3||bt===2)&&(bt=4),kt===null||!(Hr&268435455)&&!(Au&268435455)||Gi(kt,Vt)}function ru(t,e){var n=Ke;Ke|=2;var i=Uv();(kt!==t||Vt!==e)&&(_i=null,Ir(t,e));do try{vS();break}catch(r){Nv(t,r)}while(!0);if(Bd(),Ke=n,tu.current=i,wt!==null)throw Error(de(261));return kt=null,Vt=0,bt}function vS(){for(;wt!==null;)Ov(wt)}function _S(){for(;wt!==null&&!Vy();)Ov(wt)}function Ov(t){var e=zv(t.alternate,t,En);t.memoizedProps=t.pendingProps,e===null?Fv(t):wt=e,Qd.current=null}function Fv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=fS(n,e),n!==null){n.flags&=32767,wt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{bt=6,wt=null;return}}else if(n=cS(n,e,En),n!==null){wt=n;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=t}while(e!==null);bt===0&&(bt=5)}function Sr(t,e,n){var i=Qe,r=zn.transition;try{zn.transition=null,Qe=1,yS(t,e,n,i)}finally{zn.transition=r,Qe=i}return null}function yS(t,e,n,i){do Go();while(Wi!==null);if(Ke&6)throw Error(de(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(de(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(Qy(t,o),t===kt&&(wt=kt=null,Vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ha||(Ha=!0,Bv(zl,function(){return Go(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=zn.transition,zn.transition=null;var s=Qe;Qe=1;var a=Ke;Ke|=4,Qd.current=null,hS(t,n),Lv(n,t),zx(bf),Hl=!!Rf,bf=Rf=null,t.current=n,pS(n),Wy(),Ke=a,Qe=s,zn.transition=o}else t.current=n;if(Ha&&(Ha=!1,Wi=t,iu=r),o=t.pendingLanes,o===0&&(Qi=null),Yy(n.stateNode),gn(t,Et()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(nu)throw nu=!1,t=qf,qf=null,t;return iu&1&&t.tag!==0&&Go(),o=t.pendingLanes,o&1?t===$f?Vs++:(Vs=0,$f=t):Vs=0,dr(),null}function Go(){if(Wi!==null){var t=v0(iu),e=zn.transition,n=Qe;try{if(zn.transition=null,Qe=16>t?16:t,Wi===null)var i=!1;else{if(t=Wi,Wi=null,iu=0,Ke&6)throw Error(de(331));var r=Ke;for(Ke|=4,Te=t.current;Te!==null;){var o=Te,s=o.child;if(Te.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Te=u;Te!==null;){var c=Te;switch(c.tag){case 0:case 11:case 15:Hs(8,c,o)}var h=c.child;if(h!==null)h.return=c,Te=h;else for(;Te!==null;){c=Te;var d=c.sibling,p=c.return;if(bv(c),c===u){Te=null;break}if(d!==null){d.return=p,Te=d;break}Te=p}}}var g=o.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var v=y.sibling;y.sibling=null,y=v}while(y!==null)}}Te=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Te=s;else e:for(;Te!==null;){if(o=Te,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Hs(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,Te=f;break e}Te=o.return}}var _=t.current;for(Te=_;Te!==null;){s=Te;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,Te=m;else e:for(s=_;Te!==null;){if(a=Te,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Tu(9,a)}}catch(A){yt(a,a.return,A)}if(a===s){Te=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,Te=x;break e}Te=a.return}}if(Ke=r,dr(),li&&typeof li.onPostCommitFiberRoot=="function")try{li.onPostCommitFiberRoot(vu,t)}catch{}i=!0}return i}finally{Qe=n,zn.transition=e}}return!1}function Np(t,e,n){e=Jo(n,e),e=vv(t,e,1),t=Ji(t,e,1),e=an(),t!==null&&(_a(t,1,e),gn(t,e))}function yt(t,e,n){if(t.tag===3)Np(t,t,n);else for(;e!==null;){if(e.tag===3){Np(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Qi===null||!Qi.has(i))){t=Jo(n,t),t=_v(e,t,1),e=Ji(e,t,1),t=an(),e!==null&&(_a(e,1,t),gn(e,t));break}}e=e.return}}function xS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=an(),t.pingedLanes|=t.suspendedLanes&n,kt===t&&(Vt&n)===n&&(bt===4||bt===3&&(Vt&130023424)===Vt&&500>Et()-th?Ir(t,0):eh|=n),gn(t,e)}function kv(t,e){e===0&&(t.mode&1?(e=La,La<<=1,!(La&130023424)&&(La=4194304)):e=1);var n=an();t=Ci(t,e),t!==null&&(_a(t,e,n),gn(t,n))}function SS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),kv(t,n)}function ES(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(de(314))}i!==null&&i.delete(e),kv(t,n)}var zv;zv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pn.current)hn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return hn=!1,uS(t,e,n);hn=!!(t.flags&131072)}else hn=!1,ct&&e.flags&1048576&&V0(e,ql,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Pl(t,e),t=e.pendingProps;var r=qo(e,Qt.current);Ho(e,n),r=qd(null,e,i,t,r,n);var o=$d();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mn(i)?(o=!0,jl(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Vd(e),r.updater=wu,e.stateNode=r,r._reactInternals=e,Ff(e,i,t,n),e=Bf(null,e,i,!0,o,n)):(e.tag=0,ct&&o&&Od(e),on(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Pl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=wS(i),t=qn(i,t),r){case 0:e=zf(null,e,i,t,n);break e;case 1:e=wp(null,e,i,t,n);break e;case 11:e=Ep(null,e,i,t,n);break e;case 14:e=Mp(null,e,i,qn(i.type,t),n);break e}throw Error(de(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),zf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),wp(t,e,i,r,n);case 3:e:{if(Ev(e),t===null)throw Error(de(387));i=e.pendingProps,o=e.memoizedState,r=o.element,$0(t,e),Zl(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=Jo(Error(de(423)),e),e=Tp(t,e,i,n,r);break e}else if(i!==r){r=Jo(Error(de(424)),e),e=Tp(t,e,i,n,r);break e}else for(Mn=Zi(e.stateNode.containerInfo.firstChild),wn=e,ct=!0,Kn=null,n=Y0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($o(),i===r){e=Pi(t,e,n);break e}on(t,e,i,n)}e=e.child}return e;case 5:return K0(e),t===null&&Nf(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,Cf(i,r)?s=null:o!==null&&Cf(i,o)&&(e.flags|=32),Sv(t,e),on(t,e,s,n),e.child;case 6:return t===null&&Nf(e),null;case 13:return Mv(t,e,n);case 4:return Wd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ko(e,null,i,n):on(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),Ep(t,e,i,r,n);case 7:return on(t,e,e.pendingProps,n),e.child;case 8:return on(t,e,e.pendingProps.children,n),e.child;case 12:return on(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,ot($l,i._currentValue),i._currentValue=s,o!==null)if(ni(o.value,s)){if(o.children===r.children&&!pn.current){e=Pi(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Ti(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Uf(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(de(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Uf(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}on(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ho(e,n),r=Hn(r),i=i(r),e.flags|=1,on(t,e,i,n),e.child;case 14:return i=e.type,r=qn(i,e.pendingProps),r=qn(i.type,r),Mp(t,e,i,r,n);case 15:return yv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),Pl(t,e),e.tag=1,mn(i)?(t=!0,jl(e)):t=!1,Ho(e,n),gv(e,i,r),Ff(e,i,r,n),Bf(null,e,i,!0,t,n);case 19:return wv(t,e,n);case 22:return xv(t,e,n)}throw Error(de(156,e.tag))};function Bv(t,e){return h0(t,e)}function MS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(t,e,n,i){return new MS(t,e,n,i)}function oh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function wS(t){if(typeof t=="function")return oh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===wd)return 11;if(t===Td)return 14}return 2}function tr(t,e){var n=t.alternate;return n===null?(n=Fn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Il(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")oh(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Eo:return Nr(n.children,r,o,e);case Md:s=8,r|=8;break;case af:return t=Fn(12,n,e,r|2),t.elementType=af,t.lanes=o,t;case lf:return t=Fn(13,n,e,r),t.elementType=lf,t.lanes=o,t;case uf:return t=Fn(19,n,e,r),t.elementType=uf,t.lanes=o,t;case Kg:return Ru(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case qg:s=10;break e;case $g:s=9;break e;case wd:s=11;break e;case Td:s=14;break e;case zi:s=16,i=null;break e}throw Error(de(130,t==null?t:typeof t,""))}return e=Fn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function Nr(t,e,n,i){return t=Fn(7,t,i,e),t.lanes=n,t}function Ru(t,e,n,i){return t=Fn(22,t,i,e),t.elementType=Kg,t.lanes=n,t.stateNode={isHidden:!1},t}function gc(t,e,n){return t=Fn(6,t,null,e),t.lanes=n,t}function vc(t,e,n){return e=Fn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function TS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zu(0),this.expirationTimes=Zu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function sh(t,e,n,i,r,o,s,a,l){return t=new TS(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Fn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vd(o),t}function AS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:So,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Hv(t){if(!t)return lr;t=t._reactInternals;e:{if($r(t)!==t||t.tag!==1)throw Error(de(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(de(171))}if(t.tag===1){var n=t.type;if(mn(n))return H0(t,n,e)}return e}function Gv(t,e,n,i,r,o,s,a,l){return t=sh(n,i,!0,t,r,o,s,a,l),t.context=Hv(null),n=t.current,i=an(),r=er(n),o=Ti(i,r),o.callback=e??null,Ji(n,o,r),t.current.lanes=r,_a(t,r,i),gn(t,i),t}function bu(t,e,n,i){var r=e.current,o=an(),s=er(r);return n=Hv(n),e.context===null?e.context=n:e.pendingContext=n,e=Ti(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ji(r,e,s),t!==null&&(ti(t,r,s,o),Rl(t,r,s)),s}function ou(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Up(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ah(t,e){Up(t,e),(t=t.alternate)&&Up(t,e)}function RS(){return null}var Vv=typeof reportError=="function"?reportError:function(t){console.error(t)};function lh(t){this._internalRoot=t}Cu.prototype.render=lh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(de(409));bu(t,e,null,null)};Cu.prototype.unmount=lh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Gr(function(){bu(null,t,null,null)}),e[bi]=null}};function Cu(t){this._internalRoot=t}Cu.prototype.unstable_scheduleHydration=function(t){if(t){var e=x0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Hi.length&&e!==0&&e<Hi[n].priority;n++);Hi.splice(n,0,t),n===0&&E0(t)}};function uh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Pu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Op(){}function bS(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=ou(s);o.call(u)}}var s=Gv(e,i,t,0,null,!1,!1,"",Op);return t._reactRootContainer=s,t[bi]=s.current,na(t.nodeType===8?t.parentNode:t),Gr(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=ou(l);a.call(u)}}var l=sh(t,0,!1,null,null,!1,!1,"",Op);return t._reactRootContainer=l,t[bi]=l.current,na(t.nodeType===8?t.parentNode:t),Gr(function(){bu(e,l,n,i)}),l}function Lu(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=ou(s);a.call(l)}}bu(e,s,t,r)}else s=bS(n,e,t,r,i);return ou(s)}_0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ds(e.pendingLanes);n!==0&&(bd(e,n|1),gn(e,Et()),!(Ke&6)&&(Qo=Et()+500,dr()))}break;case 13:Gr(function(){var i=Ci(t,1);if(i!==null){var r=an();ti(i,t,1,r)}}),ah(t,1)}};Cd=function(t){if(t.tag===13){var e=Ci(t,134217728);if(e!==null){var n=an();ti(e,t,134217728,n)}ah(t,134217728)}};y0=function(t){if(t.tag===13){var e=er(t),n=Ci(t,e);if(n!==null){var i=an();ti(n,t,e,i)}ah(t,e)}};x0=function(){return Qe};S0=function(t,e){var n=Qe;try{return Qe=t,e()}finally{Qe=n}};yf=function(t,e,n){switch(e){case"input":if(df(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Su(i);if(!r)throw Error(de(90));Jg(i),df(i,r)}}}break;case"textarea":e0(t,n);break;case"select":e=n.value,e!=null&&Fo(t,!!n.multiple,e,!1)}};a0=nh;l0=Gr;var CS={usingClientEntryPoint:!1,Events:[xa,Ao,Su,o0,s0,nh]},Es={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},PS={bundleType:Es.bundleType,version:Es.version,rendererPackageName:Es.rendererPackageName,rendererConfig:Es.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Di.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=f0(t),t===null?null:t.stateNode},findFiberByHostInstance:Es.findFiberByHostInstance||RS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ga=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ga.isDisabled&&Ga.supportsFiber)try{vu=Ga.inject(PS),li=Ga}catch{}}Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CS;Rn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!uh(e))throw Error(de(200));return AS(t,e,null,n)};Rn.createRoot=function(t,e){if(!uh(t))throw Error(de(299));var n=!1,i="",r=Vv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=sh(t,1,!1,null,null,n,!1,i,r),t[bi]=e.current,na(t.nodeType===8?t.parentNode:t),new lh(e)};Rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(de(188)):(t=Object.keys(t).join(","),Error(de(268,t)));return t=f0(e),t=t===null?null:t.stateNode,t};Rn.flushSync=function(t){return Gr(t)};Rn.hydrate=function(t,e,n){if(!Pu(e))throw Error(de(200));return Lu(null,t,e,!0,n)};Rn.hydrateRoot=function(t,e,n){if(!uh(t))throw Error(de(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=Vv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Gv(e,null,t,1,n??null,r,!1,o,s),t[bi]=e.current,na(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Cu(e)};Rn.render=function(t,e,n){if(!Pu(e))throw Error(de(200));return Lu(null,t,e,!1,n)};Rn.unmountComponentAtNode=function(t){if(!Pu(t))throw Error(de(40));return t._reactRootContainer?(Gr(function(){Lu(null,null,t,!1,function(){t._reactRootContainer=null,t[bi]=null})}),!0):!1};Rn.unstable_batchedUpdates=nh;Rn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Pu(n))throw Error(de(200));if(t==null||t._reactInternals===void 0)throw Error(de(38));return Lu(t,e,n,!1,i)};Rn.version="18.3.1-next-f1338f8080-20240426";function Wv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wv)}catch(t){console.error(t)}}Wv(),Wg.exports=Rn;var LS=Wg.exports,Xv,Fp=LS;Xv=Fp.createRoot,Fp.hydrateRoot;async function us(t,e){const n=await fetch(t,{credentials:"include",...e});let i=null;try{i=await n.json()}catch{}return{ok:n.ok,status:n.status,data:i}}function DS(){return us("/api/me")}function IS(){return us("/api/me?view=engineer&list=1")}function NS(t){return us("/api/me?view=engineer&projectId="+encodeURIComponent(t))}function US(t,e){return us("/api/me",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"engineer_save",projectId:t||void 0,project:e})})}function OS(t){return us("/api/me",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"engineer_delete",projectId:t})})}function FS(){return us("/api/create-checkout-session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({kind:"engineer",plan:"annual",return_page:"engineers/index.html"})})}function kS({status:t,t:e}){const[n,i]=Ce.useState(!1),[r,o]=Ce.useState(null);async function s(){i(!0),o(null);const l=await FS();if(l.status===401){window.location.href="/lamsa-auth.html";return}if(!l.ok||!l.data||!l.data.url){o(l.data&&l.data.error||e("Something went wrong, please try again")),i(!1);return}window.location.href=l.data.url}const a=t==="canceled"||t==="past_due"||t==="unpaid";return ae.jsxs("div",{style:{maxWidth:480,margin:"80px auto",padding:24,textAlign:"center",fontFamily:"sans-serif"},children:[ae.jsx("h1",{style:{fontSize:24,fontWeight:900,marginBottom:8},children:e("Lamsa Engineers")}),ae.jsx("p",{style:{color:"#6b7280",marginBottom:24},children:e(a?"Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Design complete floor plans, preview them in 3D, and export real architectural deliverables.")}),ae.jsxs("ul",{style:{textAlign:"start",listStyle:"none",padding:0,marginBottom:28,color:"#374151",fontSize:14},children:[ae.jsxs("li",{children:["— ",e("Rectangular rooms, doors & windows, single-floor plans")]}),ae.jsxs("li",{children:["— ",e("Live 3D preview of your design")]}),ae.jsxs("li",{children:["— ",e("Printable floor plan export")]}),ae.jsxs("li",{children:["— ",e("Use Lamsa's existing furniture-styling tools per room")]})]}),ae.jsxs("div",{style:{fontSize:28,fontWeight:900,marginBottom:4},children:["$250",ae.jsxs("span",{style:{fontSize:14,fontWeight:600,color:"#6b7280"},children:[" ",e("/ year")]})]}),ae.jsx("div",{style:{fontSize:13,color:"#6b7280",marginBottom:20},children:e("14-day free trial, cancel anytime")}),ae.jsx("button",{type:"button",onClick:s,disabled:n,style:{width:"100%",background:"#c9a96e",color:"#1b1e22",border:"none",padding:16,borderRadius:14,fontSize:16,fontWeight:900,cursor:"pointer",opacity:n?.6:1},children:e(n?"Starting…":"Start free trial")}),r&&ae.jsx("div",{style:{color:"#e05555",fontSize:13,marginTop:10},children:r})]})}function zS({projects:t,onOpen:e,onCreate:n,onDelete:i,t:r}){return ae.jsxs("div",{style:{maxWidth:720,margin:"40px auto",padding:24,fontFamily:"sans-serif"},children:[ae.jsxs("a",{href:"/lamsa-bilingual.html",style:{display:"inline-flex",alignItems:"center",gap:6,color:"#6b7280",fontSize:13,fontWeight:700,textDecoration:"none",marginBottom:16},children:["← ",r("Back to Home")]}),ae.jsxs("div",{style:{display:"flex",flexWrap:"wrap",rowGap:10,justifyContent:"space-between",alignItems:"center",marginBottom:20},children:[ae.jsx("h1",{style:{fontSize:22,fontWeight:900},children:r("Your Projects")}),ae.jsxs("button",{type:"button",onClick:n,style:{background:"#c9a96e",color:"#1b1e22",border:"none",padding:"10px 18px",borderRadius:10,fontWeight:800,cursor:"pointer"},children:["+ ",r("New Project")]})]}),t.length===0&&ae.jsx("div",{style:{color:"#6b7280",textAlign:"center",padding:40},children:r("No projects yet — create your first one.")}),ae.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:14},children:t.map(o=>ae.jsxs("div",{style:{border:"1px solid #e5e7eb",borderRadius:12,padding:16,cursor:"pointer"},onClick:()=>e(o.id),children:[ae.jsx("div",{style:{fontWeight:800,marginBottom:6},children:o.name}),ae.jsx("div",{style:{fontSize:12,color:"#9ca3af",marginBottom:10},children:o.updatedAt?new Date(o.updatedAt).toLocaleDateString():""}),ae.jsx("button",{type:"button",onClick:s=>{s.stopPropagation(),i(o.id)},style:{fontSize:12,color:"#e05555",background:"none",border:"none",cursor:"pointer",padding:0},children:r("Delete")})]},o.id))})]})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ch="160",BS=0,kp=1,HS=2,jv=1,Yv=2,vi=3,ur=0,vn=1,fn=2,nr=0,Vo=1,zp=2,Bp=3,Hp=4,GS=5,Tr=100,VS=101,WS=102,Gp=103,Vp=104,XS=200,jS=201,YS=202,qS=203,Jf=204,Qf=205,$S=206,KS=207,ZS=208,JS=209,QS=210,eE=211,tE=212,nE=213,iE=214,rE=0,oE=1,sE=2,su=3,aE=4,lE=5,uE=6,cE=7,qv=0,fE=1,dE=2,ir=0,hE=1,pE=2,mE=3,gE=4,vE=5,_E=6,$v=300,es=301,ts=302,ed=303,td=304,Du=306,Vr=1e3,Zn=1001,nd=1002,sn=1003,Wp=1004,_c=1005,In=1006,yE=1007,fa=1008,rr=1009,xE=1010,SE=1011,fh=1012,Kv=1013,Xi=1014,ji=1015,da=1016,Zv=1017,Jv=1018,Ur=1020,EE=1021,Jn=1023,ME=1024,wE=1025,Or=1026,ns=1027,TE=1028,Qv=1029,AE=1030,e_=1031,t_=1033,yc=33776,xc=33777,Sc=33778,Ec=33779,Xp=35840,jp=35841,Yp=35842,qp=35843,n_=36196,$p=37492,Kp=37496,Zp=37808,Jp=37809,Qp=37810,em=37811,tm=37812,nm=37813,im=37814,rm=37815,om=37816,sm=37817,am=37818,lm=37819,um=37820,cm=37821,Mc=36492,fm=36494,dm=36495,RE=36283,hm=36284,pm=36285,mm=36286,i_=3e3,Fr=3001,bE=3200,CE=3201,r_=0,PE=1,On="",Gt="srgb",Li="srgb-linear",dh="display-p3",Iu="display-p3-linear",au="linear",at="srgb",lu="rec709",uu="p3",Qr=7680,gm=519,LE=512,DE=513,IE=514,o_=515,NE=516,UE=517,OE=518,FE=519,id=35044,vm="300 es",rd=1035,wi=2e3,cu=2001;class cs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wc=Math.PI/180,od=180/Math.PI;function Ai(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[t&255]+qt[t>>8&255]+qt[t>>16&255]+qt[t>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[n&63|128]+qt[n>>8&255]+"-"+qt[n>>16&255]+qt[n>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function Jt(t,e,n){return Math.max(e,Math.min(n,t))}function kE(t,e){return(t%e+e)%e}function Tc(t,e,n){return(1-n)*t+n*e}function _m(t){return(t&t-1)===0&&t!==0}function sd(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function xi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function tt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class me{constructor(e=0,n=0){me.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,n,i,r,o,s,a,l,u){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u)}set(e,n,i,r,o,s,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=o,c[5]=l,c[6]=i,c[7]=s,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],c=i[4],h=i[7],d=i[2],p=i[5],g=i[8],y=r[0],v=r[3],f=r[6],_=r[1],m=r[4],x=r[7],A=r[2],S=r[5],w=r[8];return o[0]=s*y+a*_+l*A,o[3]=s*v+a*m+l*S,o[6]=s*f+a*x+l*w,o[1]=u*y+c*_+h*A,o[4]=u*v+c*m+h*S,o[7]=u*f+c*x+h*w,o[2]=d*y+p*_+g*A,o[5]=d*v+p*m+g*S,o[8]=d*f+p*x+g*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*s*c-n*a*u-i*o*c+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=c*s-a*u,d=a*l-c*o,p=u*o-s*l,g=n*h+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=h*y,e[1]=(r*u-c*i)*y,e[2]=(a*i-r*s)*y,e[3]=d*y,e[4]=(c*n-r*l)*y,e[5]=(r*o-a*n)*y,e[6]=p*y,e[7]=(i*l-u*n)*y,e[8]=(s*n-i*o)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Ac.makeScale(e,n)),this}rotate(e){return this.premultiply(Ac.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ac.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ac=new Ye;function s_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function fu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function zE(){const t=fu("canvas");return t.style.display="block",t}const ym={};function Ws(t){t in ym||(ym[t]=!0,console.warn(t))}const xm=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Sm=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Va={[Li]:{transfer:au,primaries:lu,toReference:t=>t,fromReference:t=>t},[Gt]:{transfer:at,primaries:lu,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Iu]:{transfer:au,primaries:uu,toReference:t=>t.applyMatrix3(Sm),fromReference:t=>t.applyMatrix3(xm)},[dh]:{transfer:at,primaries:uu,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Sm),fromReference:t=>t.applyMatrix3(xm).convertLinearToSRGB()}},BE=new Set([Li,Iu]),et={enabled:!0,_workingColorSpace:Li,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!BE.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Va[e].toReference,r=Va[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Va[t].primaries},getTransfer:function(t){return t===On?au:Va[t].transfer}};function Wo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Rc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let eo;class a_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{eo===void 0&&(eo=fu("canvas")),eo.width=e.width,eo.height=e.height;const i=eo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=eo}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=fu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Wo(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Wo(n[i]/255)*255):n[i]=Wo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let HE=0;class l_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:HE++}),this.uuid=Ai(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(bc(r[s].image)):o.push(bc(r[s]))}else o=bc(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function bc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?a_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let GE=0;class _n extends cs{constructor(e=_n.DEFAULT_IMAGE,n=_n.DEFAULT_MAPPING,i=Zn,r=Zn,o=In,s=fa,a=Jn,l=rr,u=_n.DEFAULT_ANISOTROPY,c=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:GE++}),this.uuid=Ai(),this.name="",this.source=new l_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Fr?Gt:On),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$v)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vr:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case nd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vr:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case nd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Gt?Fr:i_}set encoding(e){Ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Fr?Gt:On}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=$v;_n.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,n=0,i=0,r=1){Ot.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],c=l[4],h=l[8],d=l[1],p=l[5],g=l[9],y=l[2],v=l[6],f=l[10];if(Math.abs(c-d)<.01&&Math.abs(h-y)<.01&&Math.abs(g-v)<.01){if(Math.abs(c+d)<.1&&Math.abs(h+y)<.1&&Math.abs(g+v)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const m=(u+1)/2,x=(p+1)/2,A=(f+1)/2,S=(c+d)/4,w=(h+y)/4,P=(g+v)/4;return m>x&&m>A?m<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(m),r=S/i,o=w/i):x>A?x<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(x),i=S/r,o=P/r):A<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(A),i=w/o,r=P/o),this.set(i,r,o,n),this}let _=Math.sqrt((v-g)*(v-g)+(h-y)*(h-y)+(d-c)*(d-c));return Math.abs(_)<.001&&(_=1),this.x=(v-g)/_,this.y=(h-y)/_,this.z=(d-c)/_,this.w=Math.acos((u+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class VE extends cs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ot(0,0,e,n),this.scissorTest=!1,this.viewport=new Ot(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Ws("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Fr?Gt:On),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new _n(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new l_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wr extends VE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class u_ extends _n{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class WE extends _n{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ea{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],u=i[r+1],c=i[r+2],h=i[r+3];const d=o[s+0],p=o[s+1],g=o[s+2],y=o[s+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=g,e[n+3]=y;return}if(h!==y||l!==d||u!==p||c!==g){let v=1-a;const f=l*d+u*p+c*g+h*y,_=f>=0?1:-1,m=1-f*f;if(m>Number.EPSILON){const A=Math.sqrt(m),S=Math.atan2(A,f*_);v=Math.sin(v*S)/A,a=Math.sin(a*S)/A}const x=a*_;if(l=l*v+d*x,u=u*v+p*x,c=c*v+g*x,h=h*v+y*x,v===1-a){const A=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=A,u*=A,c*=A,h*=A}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],h=o[s],d=o[s+1],p=o[s+2],g=o[s+3];return e[n]=a*g+c*h+l*p-u*d,e[n+1]=l*g+c*d+u*h-a*p,e[n+2]=u*g+c*p+a*d-l*h,e[n+3]=c*g-a*h-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),h=a(o/2),d=l(i/2),p=l(r/2),g=l(o/2);switch(s){case"XYZ":this._x=d*c*h+u*p*g,this._y=u*p*h-d*c*g,this._z=u*c*g+d*p*h,this._w=u*c*h-d*p*g;break;case"YXZ":this._x=d*c*h+u*p*g,this._y=u*p*h-d*c*g,this._z=u*c*g-d*p*h,this._w=u*c*h+d*p*g;break;case"ZXY":this._x=d*c*h-u*p*g,this._y=u*p*h+d*c*g,this._z=u*c*g+d*p*h,this._w=u*c*h-d*p*g;break;case"ZYX":this._x=d*c*h-u*p*g,this._y=u*p*h+d*c*g,this._z=u*c*g-d*p*h,this._w=u*c*h+d*p*g;break;case"YZX":this._x=d*c*h+u*p*g,this._y=u*p*h+d*c*g,this._z=u*c*g-d*p*h,this._w=u*c*h-d*p*g;break;case"XZY":this._x=d*c*h-u*p*g,this._y=u*p*h-d*c*g,this._z=u*c*g+d*p*h,this._w=u*c*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],u=n[2],c=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(o-u)*p,this._z=(s-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(c-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(o+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(o-u)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(s-r)/p,this._x=(o+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+s*a+r*u-o*l,this._y=r*c+s*l+o*a-i*u,this._z=o*c+s*u+i*l-r*a,this._w=s*c-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*o+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-n)*c)/u,d=Math.sin(n*c)/u;return this._w=s*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=o*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(o),i*Math.cos(o),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Em.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Em.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=2*(s*r-a*i),c=2*(a*n-o*r),h=2*(o*i-s*n);return this.x=n+l*u+s*h-a*c,this.y=i+l*c+a*u-o*h,this.z=r+l*h+o*c-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Cc.copy(this).projectOnVector(e),this.sub(Cc)}reflect(e){return this.sub(Cc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cc=new O,Em=new Ea;class Ma{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Xn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Xn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Xn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Xn):Xn.fromBufferAttribute(o,s),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wa.copy(i.boundingBox)),Wa.applyMatrix4(e.matrixWorld),this.union(Wa)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ms),Xa.subVectors(this.max,Ms),to.subVectors(e.a,Ms),no.subVectors(e.b,Ms),io.subVectors(e.c,Ms),Ni.subVectors(no,to),Ui.subVectors(io,no),mr.subVectors(to,io);let n=[0,-Ni.z,Ni.y,0,-Ui.z,Ui.y,0,-mr.z,mr.y,Ni.z,0,-Ni.x,Ui.z,0,-Ui.x,mr.z,0,-mr.x,-Ni.y,Ni.x,0,-Ui.y,Ui.x,0,-mr.y,mr.x,0];return!Pc(n,to,no,io,Xa)||(n=[1,0,0,0,1,0,0,0,1],!Pc(n,to,no,io,Xa))?!1:(ja.crossVectors(Ni,Ui),n=[ja.x,ja.y,ja.z],Pc(n,to,no,io,Xa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const di=[new O,new O,new O,new O,new O,new O,new O,new O],Xn=new O,Wa=new Ma,to=new O,no=new O,io=new O,Ni=new O,Ui=new O,mr=new O,Ms=new O,Xa=new O,ja=new O,gr=new O;function Pc(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){gr.fromArray(t,o);const a=r.x*Math.abs(gr.x)+r.y*Math.abs(gr.y)+r.z*Math.abs(gr.z),l=e.dot(gr),u=n.dot(gr),c=i.dot(gr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const XE=new Ma,ws=new O,Lc=new O;class Nu{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):XE.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ws.subVectors(e,this.center);const n=ws.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ws,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ws.copy(e.center).add(Lc)),this.expandByPoint(ws.copy(e.center).sub(Lc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hi=new O,Dc=new O,Ya=new O,Oi=new O,Ic=new O,qa=new O,Nc=new O;class c_{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=hi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,n),hi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Dc.copy(e).add(n).multiplyScalar(.5),Ya.copy(n).sub(e).normalize(),Oi.copy(this.origin).sub(Dc);const o=e.distanceTo(n)*.5,s=-this.direction.dot(Ya),a=Oi.dot(this.direction),l=-Oi.dot(Ya),u=Oi.lengthSq(),c=Math.abs(1-s*s);let h,d,p,g;if(c>0)if(h=s*l-a,d=s*a-l,g=o*c,h>=0)if(d>=-g)if(d<=g){const y=1/c;h*=y,d*=y,p=h*(h+s*d+2*a)+d*(s*h+d+2*l)+u}else d=o,h=Math.max(0,-(s*d+a)),p=-h*h+d*(d+2*l)+u;else d=-o,h=Math.max(0,-(s*d+a)),p=-h*h+d*(d+2*l)+u;else d<=-g?(h=Math.max(0,-(-s*o+a)),d=h>0?-o:Math.min(Math.max(-o,-l),o),p=-h*h+d*(d+2*l)+u):d<=g?(h=0,d=Math.min(Math.max(-o,-l),o),p=d*(d+2*l)+u):(h=Math.max(0,-(s*o+a)),d=h>0?o:Math.min(Math.max(-o,-l),o),p=-h*h+d*(d+2*l)+u);else d=s>0?-o:o,h=Math.max(0,-(s*d+a)),p=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Dc).addScaledVector(Ya,d),p}intersectSphere(e,n){hi.subVectors(e.center,this.origin);const i=hi.dot(this.direction),r=hi.dot(hi)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(o=(e.min.y-d.y)*c,s=(e.max.y-d.y)*c):(o=(e.max.y-d.y)*c,s=(e.min.y-d.y)*c),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,n,i,r,o){Ic.subVectors(n,e),qa.subVectors(i,e),Nc.crossVectors(Ic,qa);let s=this.direction.dot(Nc),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Oi.subVectors(this.origin,e);const l=a*this.direction.dot(qa.crossVectors(Oi,qa));if(l<0)return null;const u=a*this.direction.dot(Ic.cross(Oi));if(u<0||l+u>s)return null;const c=-a*Oi.dot(Nc);return c<0?null:this.at(c/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,n,i,r,o,s,a,l,u,c,h,d,p,g,y,v){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u,c,h,d,p,g,y,v)}set(e,n,i,r,o,s,a,l,u,c,h,d,p,g,y,v){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=o,f[5]=s,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=y,f[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ro.setFromMatrixColumn(e,0).length(),o=1/ro.setFromMatrixColumn(e,1).length(),s=1/ro.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(o),h=Math.sin(o);if(e.order==="XYZ"){const d=s*c,p=s*h,g=a*c,y=a*h;n[0]=l*c,n[4]=-l*h,n[8]=u,n[1]=p+g*u,n[5]=d-y*u,n[9]=-a*l,n[2]=y-d*u,n[6]=g+p*u,n[10]=s*l}else if(e.order==="YXZ"){const d=l*c,p=l*h,g=u*c,y=u*h;n[0]=d+y*a,n[4]=g*a-p,n[8]=s*u,n[1]=s*h,n[5]=s*c,n[9]=-a,n[2]=p*a-g,n[6]=y+d*a,n[10]=s*l}else if(e.order==="ZXY"){const d=l*c,p=l*h,g=u*c,y=u*h;n[0]=d-y*a,n[4]=-s*h,n[8]=g+p*a,n[1]=p+g*a,n[5]=s*c,n[9]=y-d*a,n[2]=-s*u,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const d=s*c,p=s*h,g=a*c,y=a*h;n[0]=l*c,n[4]=g*u-p,n[8]=d*u+y,n[1]=l*h,n[5]=y*u+d,n[9]=p*u-g,n[2]=-u,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const d=s*l,p=s*u,g=a*l,y=a*u;n[0]=l*c,n[4]=y-d*h,n[8]=g*h+p,n[1]=h,n[5]=s*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*h+g,n[10]=d-y*h}else if(e.order==="XZY"){const d=s*l,p=s*u,g=a*l,y=a*u;n[0]=l*c,n[4]=-h,n[8]=u*c,n[1]=d*h+y,n[5]=s*c,n[9]=p*h-g,n[2]=g*h-p,n[6]=a*c,n[10]=y*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jE,e,YE)}lookAt(e,n,i){const r=this.elements;return xn.subVectors(e,n),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Fi.crossVectors(i,xn),Fi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Fi.crossVectors(i,xn)),Fi.normalize(),$a.crossVectors(xn,Fi),r[0]=Fi.x,r[4]=$a.x,r[8]=xn.x,r[1]=Fi.y,r[5]=$a.y,r[9]=xn.y,r[2]=Fi.z,r[6]=$a.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],c=i[1],h=i[5],d=i[9],p=i[13],g=i[2],y=i[6],v=i[10],f=i[14],_=i[3],m=i[7],x=i[11],A=i[15],S=r[0],w=r[4],P=r[8],E=r[12],T=r[1],U=r[5],W=r[9],ee=r[13],L=r[2],H=r[6],z=r[10],ie=r[14],N=r[3],F=r[7],V=r[11],te=r[15];return o[0]=s*S+a*T+l*L+u*N,o[4]=s*w+a*U+l*H+u*F,o[8]=s*P+a*W+l*z+u*V,o[12]=s*E+a*ee+l*ie+u*te,o[1]=c*S+h*T+d*L+p*N,o[5]=c*w+h*U+d*H+p*F,o[9]=c*P+h*W+d*z+p*V,o[13]=c*E+h*ee+d*ie+p*te,o[2]=g*S+y*T+v*L+f*N,o[6]=g*w+y*U+v*H+f*F,o[10]=g*P+y*W+v*z+f*V,o[14]=g*E+y*ee+v*ie+f*te,o[3]=_*S+m*T+x*L+A*N,o[7]=_*w+m*U+x*H+A*F,o[11]=_*P+m*W+x*z+A*V,o[15]=_*E+m*ee+x*ie+A*te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],c=e[2],h=e[6],d=e[10],p=e[14],g=e[3],y=e[7],v=e[11],f=e[15];return g*(+o*l*h-r*u*h-o*a*d+i*u*d+r*a*p-i*l*p)+y*(+n*l*p-n*u*d+o*s*d-r*s*p+r*u*c-o*l*c)+v*(+n*u*h-n*a*p-o*s*h+i*s*p+o*a*c-i*u*c)+f*(-r*a*c-n*l*h+n*a*d+r*s*h-i*s*d+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=e[9],d=e[10],p=e[11],g=e[12],y=e[13],v=e[14],f=e[15],_=h*v*u-y*d*u+y*l*p-a*v*p-h*l*f+a*d*f,m=g*d*u-c*v*u-g*l*p+s*v*p+c*l*f-s*d*f,x=c*y*u-g*h*u+g*a*p-s*y*p-c*a*f+s*h*f,A=g*h*l-c*y*l-g*a*d+s*y*d+c*a*v-s*h*v,S=n*_+i*m+r*x+o*A;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/S;return e[0]=_*w,e[1]=(y*d*o-h*v*o-y*r*p+i*v*p+h*r*f-i*d*f)*w,e[2]=(a*v*o-y*l*o+y*r*u-i*v*u-a*r*f+i*l*f)*w,e[3]=(h*l*o-a*d*o-h*r*u+i*d*u+a*r*p-i*l*p)*w,e[4]=m*w,e[5]=(c*v*o-g*d*o+g*r*p-n*v*p-c*r*f+n*d*f)*w,e[6]=(g*l*o-s*v*o-g*r*u+n*v*u+s*r*f-n*l*f)*w,e[7]=(s*d*o-c*l*o+c*r*u-n*d*u-s*r*p+n*l*p)*w,e[8]=x*w,e[9]=(g*h*o-c*y*o-g*i*p+n*y*p+c*i*f-n*h*f)*w,e[10]=(s*y*o-g*a*o+g*i*u-n*y*u-s*i*f+n*a*f)*w,e[11]=(c*a*o-s*h*o-c*i*u+n*h*u+s*i*p-n*a*p)*w,e[12]=A*w,e[13]=(c*y*r-g*h*r+g*i*d-n*y*d-c*i*v+n*h*v)*w,e[14]=(g*a*r-s*y*r-g*i*l+n*y*l+s*i*v-n*a*v)*w,e[15]=(s*h*r-c*a*r+c*i*l-n*h*l-s*i*d+n*a*d)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,c=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*s,0,u*l-r*a,c*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,u=o+o,c=s+s,h=a+a,d=o*u,p=o*c,g=o*h,y=s*c,v=s*h,f=a*h,_=l*u,m=l*c,x=l*h,A=i.x,S=i.y,w=i.z;return r[0]=(1-(y+f))*A,r[1]=(p+x)*A,r[2]=(g-m)*A,r[3]=0,r[4]=(p-x)*S,r[5]=(1-(d+f))*S,r[6]=(v+_)*S,r[7]=0,r[8]=(g+m)*w,r[9]=(v-_)*w,r[10]=(1-(d+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=ro.set(r[0],r[1],r[2]).length();const s=ro.set(r[4],r[5],r[6]).length(),a=ro.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],jn.copy(this);const u=1/o,c=1/s,h=1/a;return jn.elements[0]*=u,jn.elements[1]*=u,jn.elements[2]*=u,jn.elements[4]*=c,jn.elements[5]*=c,jn.elements[6]*=c,jn.elements[8]*=h,jn.elements[9]*=h,jn.elements[10]*=h,n.setFromRotationMatrix(jn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=wi){const l=this.elements,u=2*o/(n-e),c=2*o/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let p,g;if(a===wi)p=-(s+o)/(s-o),g=-2*s*o/(s-o);else if(a===cu)p=-s/(s-o),g=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=wi){const l=this.elements,u=1/(n-e),c=1/(i-r),h=1/(s-o),d=(n+e)*u,p=(i+r)*c;let g,y;if(a===wi)g=(s+o)*h,y=-2*h;else if(a===cu)g=o*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ro=new O,jn=new xt,jE=new O(0,0,0),YE=new O(1,1,1),Fi=new O,$a=new O,xn=new O,Mm=new xt,wm=new Ea;class Uu{constructor(e=0,n=0,i=0,r=Uu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],c=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Jt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Mm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return wm.setFromEuler(this),this.setFromQuaternion(wm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Uu.DEFAULT_ORDER="XYZ";class f_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qE=0;const Tm=new O,oo=new Ea,pi=new xt,Ka=new O,Ts=new O,$E=new O,KE=new Ea,Am=new O(1,0,0),Rm=new O(0,1,0),bm=new O(0,0,1),ZE={type:"added"},JE={type:"removed"};class Ct extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qE++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new O,n=new Uu,i=new Ea,r=new O(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new Ye}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new f_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return oo.setFromAxisAngle(e,n),this.quaternion.multiply(oo),this}rotateOnWorldAxis(e,n){return oo.setFromAxisAngle(e,n),this.quaternion.premultiply(oo),this}rotateX(e){return this.rotateOnAxis(Am,e)}rotateY(e){return this.rotateOnAxis(Rm,e)}rotateZ(e){return this.rotateOnAxis(bm,e)}translateOnAxis(e,n){return Tm.copy(e).applyQuaternion(this.quaternion),this.position.add(Tm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Am,e)}translateY(e){return this.translateOnAxis(Rm,e)}translateZ(e){return this.translateOnAxis(bm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ka.copy(e):Ka.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Ts,Ka,this.up):pi.lookAt(Ka,Ts,this.up),this.quaternion.setFromRotationMatrix(pi),r&&(pi.extractRotation(r.matrixWorld),oo.setFromRotationMatrix(pi),this.quaternion.premultiply(oo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ZE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(JE)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,e,$E),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,KE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];o(e.shapes,h)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),c=s(e.images),h=s(e.shapes),d=s(e.skeletons),p=s(e.animations),g=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function s(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ct.DEFAULT_UP=new O(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new O,mi=new O,Uc=new O,gi=new O,so=new O,ao=new O,Cm=new O,Oc=new O,Fc=new O,kc=new O;let Za=!1;class Nn{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Yn.subVectors(e,n),r.cross(Yn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Yn.subVectors(r,n),mi.subVectors(i,n),Uc.subVectors(e,n);const s=Yn.dot(Yn),a=Yn.dot(mi),l=Yn.dot(Uc),u=mi.dot(mi),c=mi.dot(Uc),h=s*u-a*a;if(h===0)return o.set(0,0,0),null;const d=1/h,p=(u*l-a*c)*d,g=(s*c-a*l)*d;return o.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getUV(e,n,i,r,o,s,a,l){return Za===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Za=!0),this.getInterpolation(e,n,i,r,o,s,a,l)}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,gi.x),l.addScaledVector(s,gi.y),l.addScaledVector(a,gi.z),l)}static isFrontFacing(e,n,i,r){return Yn.subVectors(i,n),mi.subVectors(e,n),Yn.cross(mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Yn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Nn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,o){return Za===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Za=!0),Nn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}getInterpolation(e,n,i,r,o){return Nn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return Nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;so.subVectors(r,i),ao.subVectors(o,i),Oc.subVectors(e,i);const l=so.dot(Oc),u=ao.dot(Oc);if(l<=0&&u<=0)return n.copy(i);Fc.subVectors(e,r);const c=so.dot(Fc),h=ao.dot(Fc);if(c>=0&&h<=c)return n.copy(r);const d=l*h-c*u;if(d<=0&&l>=0&&c<=0)return s=l/(l-c),n.copy(i).addScaledVector(so,s);kc.subVectors(e,o);const p=so.dot(kc),g=ao.dot(kc);if(g>=0&&p<=g)return n.copy(o);const y=p*u-l*g;if(y<=0&&u>=0&&g<=0)return a=u/(u-g),n.copy(i).addScaledVector(ao,a);const v=c*g-p*h;if(v<=0&&h-c>=0&&p-g>=0)return Cm.subVectors(o,r),a=(h-c)/(h-c+(p-g)),n.copy(r).addScaledVector(Cm,a);const f=1/(v+y+d);return s=y*f,a=d*f,n.copy(i).addScaledVector(so,s).addScaledVector(ao,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const d_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},Ja={h:0,s:0,l:0};function zc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Fe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=kE(e,1),n=Jt(n,0,1),i=Jt(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=zc(s,o,e+1/3),this.g=zc(s,o,e),this.b=zc(s,o,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=Gt){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Gt){const i=d_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wo(e.r),this.g=Wo(e.g),this.b=Wo(e.b),this}copyLinearToSRGB(e){return this.r=Rc(e.r),this.g=Rc(e.g),this.b=Rc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return et.fromWorkingColorSpace($t.copy(this),e),Math.round(Jt($t.r*255,0,255))*65536+Math.round(Jt($t.g*255,0,255))*256+Math.round(Jt($t.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace($t.copy(this),n);const i=$t.r,r=$t.g,o=$t.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const c=(a+s)/2;if(a===s)l=0,u=0;else{const h=s-a;switch(u=c<=.5?h/(s+a):h/(2-s-a),s){case i:l=(r-o)/h+(r<o?6:0);break;case r:l=(o-i)/h+2;break;case o:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace($t.copy(this),n),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Gt){et.fromWorkingColorSpace($t.copy(this),e);const n=$t.r,i=$t.g,r=$t.b;return e!==Gt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+n,ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ki),e.getHSL(Ja);const i=Tc(ki.h,Ja.h,n),r=Tc(ki.s,Ja.s,n),o=Tc(ki.l,Ja.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new Fe;Fe.NAMES=d_;let QE=0;class Kr extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:QE++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=Vo,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jf,this.blendDst=Qf,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=su,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vo&&(i.blending=this.blending),this.side!==ur&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Jf&&(i.blendSrc=this.blendSrc),this.blendDst!==Qf&&(i.blendDst=this.blendDst),this.blendEquation!==Tr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==su&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class h_ extends Kr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new O,Qa=new me;class Bn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=id,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Qa.fromBufferAttribute(this,n),Qa.applyMatrix3(e),this.setXY(n,Qa.x,Qa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix3(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix4(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyNormalMatrix(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.transformDirection(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=xi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=tt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=xi(n,this.array)),n}setX(e,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=xi(n,this.array)),n}setY(e,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=xi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=xi(n,this.array)),n}setW(e,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=tt(n,this.array),i=tt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array),o=tt(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==id&&(e.usage=this.usage),e}}class p_ extends Bn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class m_ extends Bn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Tn extends Bn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let eM=0;const Pn=new xt,Bc=new Ct,lo=new O,Sn=new Ma,As=new Ma,Nt=new O;class Vn extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(s_(e)?m_:p_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Ye().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,n,i){return Pn.makeTranslation(e,n,i),this.applyMatrix4(Pn),this}scale(e,n,i){return Pn.makeScale(e,n,i),this.applyMatrix4(Pn),this}lookAt(e){return Bc.lookAt(e),Bc.updateMatrix(),this.applyMatrix4(Bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lo).negate(),this.translate(lo.x,lo.y,lo.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Tn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ma);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];Sn.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];As.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(Sn.min,As.min),Sn.expandByPoint(Nt),Nt.addVectors(Sn.max,As.max),Sn.expandByPoint(Nt)):(Sn.expandByPoint(As.min),Sn.expandByPoint(As.max))}Sn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Nt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Nt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Nt.fromBufferAttribute(a,u),l&&(lo.fromBufferAttribute(e,u),Nt.add(lo)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,o=n.normal.array,s=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let T=0;T<a;T++)u[T]=new O,c[T]=new O;const h=new O,d=new O,p=new O,g=new me,y=new me,v=new me,f=new O,_=new O;function m(T,U,W){h.fromArray(r,T*3),d.fromArray(r,U*3),p.fromArray(r,W*3),g.fromArray(s,T*2),y.fromArray(s,U*2),v.fromArray(s,W*2),d.sub(h),p.sub(h),y.sub(g),v.sub(g);const ee=1/(y.x*v.y-v.x*y.y);isFinite(ee)&&(f.copy(d).multiplyScalar(v.y).addScaledVector(p,-y.y).multiplyScalar(ee),_.copy(p).multiplyScalar(y.x).addScaledVector(d,-v.x).multiplyScalar(ee),u[T].add(f),u[U].add(f),u[W].add(f),c[T].add(_),c[U].add(_),c[W].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let T=0,U=x.length;T<U;++T){const W=x[T],ee=W.start,L=W.count;for(let H=ee,z=ee+L;H<z;H+=3)m(i[H+0],i[H+1],i[H+2])}const A=new O,S=new O,w=new O,P=new O;function E(T){w.fromArray(o,T*3),P.copy(w);const U=u[T];A.copy(U),A.sub(w.multiplyScalar(w.dot(U))).normalize(),S.crossVectors(P,U);const ee=S.dot(c[T])<0?-1:1;l[T*4]=A.x,l[T*4+1]=A.y,l[T*4+2]=A.z,l[T*4+3]=ee}for(let T=0,U=x.length;T<U;++T){const W=x[T],ee=W.start,L=W.count;for(let H=ee,z=ee+L;H<z;H+=3)E(i[H+0]),E(i[H+1]),E(i[H+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new O,o=new O,s=new O,a=new O,l=new O,u=new O,c=new O,h=new O;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),y=e.getX(d+1),v=e.getX(d+2);r.fromBufferAttribute(n,g),o.fromBufferAttribute(n,y),s.fromBufferAttribute(n,v),c.subVectors(s,o),h.subVectors(r,o),c.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,v),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(v,u.x,u.y,u.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),o.fromBufferAttribute(n,d+1),s.fromBufferAttribute(n,d+2),c.subVectors(s,o),h.subVectors(r,o),c.cross(h),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,h=a.normalized,d=new u.constructor(l.length*c);let p=0,g=0;for(let y=0,v=l.length;y<v;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*c;for(let f=0;f<c;f++)d[g++]=u[p++]}return new Bn(d,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Vn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let c=0,h=u.length;c<h;c++){const d=u[c],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,d=u.length;h<d;h++){const p=u[h];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const o=e.morphAttributes;for(const u in o){const c=[],h=o[u];for(let d=0,p=h.length;d<p;d++)c.push(h[d].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,c=s.length;u<c;u++){const h=s[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pm=new xt,vr=new c_,el=new Nu,Lm=new O,uo=new O,co=new O,fo=new O,Hc=new O,tl=new O,nl=new me,il=new me,rl=new me,Dm=new O,Im=new O,Nm=new O,ol=new O,sl=new O;class kn extends Ct{constructor(e=new Vn,n=new h_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){tl.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const c=a[l],h=o[l];c!==0&&(Hc.fromBufferAttribute(h,e),s?tl.addScaledVector(Hc,c):tl.addScaledVector(Hc.sub(n),c))}n.add(tl)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),el.copy(i.boundingSphere),el.applyMatrix4(o),vr.copy(e.ray).recast(e.near),!(el.containsPoint(vr.origin)===!1&&(vr.intersectSphere(el,Lm)===null||vr.origin.distanceToSquared(Lm)>(e.far-e.near)**2))&&(Pm.copy(o).invert(),vr.copy(e.ray).applyMatrix4(Pm),!(i.boundingBox!==null&&vr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,vr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,u=o.attributes.uv,c=o.attributes.uv1,h=o.attributes.normal,d=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,y=d.length;g<y;g++){const v=d[g],f=s[v.materialIndex],_=Math.max(v.start,p.start),m=Math.min(a.count,Math.min(v.start+v.count,p.start+p.count));for(let x=_,A=m;x<A;x+=3){const S=a.getX(x),w=a.getX(x+1),P=a.getX(x+2);r=al(this,f,e,i,u,c,h,S,w,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let v=g,f=y;v<f;v+=3){const _=a.getX(v),m=a.getX(v+1),x=a.getX(v+2);r=al(this,s,e,i,u,c,h,_,m,x),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,y=d.length;g<y;g++){const v=d[g],f=s[v.materialIndex],_=Math.max(v.start,p.start),m=Math.min(l.count,Math.min(v.start+v.count,p.start+p.count));for(let x=_,A=m;x<A;x+=3){const S=x,w=x+1,P=x+2;r=al(this,f,e,i,u,c,h,S,w,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let v=g,f=y;v<f;v+=3){const _=v,m=v+1,x=v+2;r=al(this,s,e,i,u,c,h,_,m,x),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}}function tM(t,e,n,i,r,o,s,a){let l;if(e.side===vn?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===ur,a),l===null)return null;sl.copy(a),sl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(sl);return u<n.near||u>n.far?null:{distance:u,point:sl.clone(),object:t}}function al(t,e,n,i,r,o,s,a,l,u){t.getVertexPosition(a,uo),t.getVertexPosition(l,co),t.getVertexPosition(u,fo);const c=tM(t,e,n,i,uo,co,fo,ol);if(c){r&&(nl.fromBufferAttribute(r,a),il.fromBufferAttribute(r,l),rl.fromBufferAttribute(r,u),c.uv=Nn.getInterpolation(ol,uo,co,fo,nl,il,rl,new me)),o&&(nl.fromBufferAttribute(o,a),il.fromBufferAttribute(o,l),rl.fromBufferAttribute(o,u),c.uv1=Nn.getInterpolation(ol,uo,co,fo,nl,il,rl,new me),c.uv2=c.uv1),s&&(Dm.fromBufferAttribute(s,a),Im.fromBufferAttribute(s,l),Nm.fromBufferAttribute(s,u),c.normal=Nn.getInterpolation(ol,uo,co,fo,Dm,Im,Nm,new O),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new O,materialIndex:0};Nn.getNormal(uo,co,fo,h.normal),c.face=h}return c}class Zr extends Vn{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],c=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,i,n,e,s,o,0),g("z","y","x",1,-1,i,n,-e,s,o,1),g("x","z","y",1,1,e,i,n,r,s,2),g("x","z","y",1,-1,e,i,-n,r,s,3),g("x","y","z",1,-1,e,n,i,r,o,4),g("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new Tn(u,3)),this.setAttribute("normal",new Tn(c,3)),this.setAttribute("uv",new Tn(h,2));function g(y,v,f,_,m,x,A,S,w,P,E){const T=x/w,U=A/P,W=x/2,ee=A/2,L=S/2,H=w+1,z=P+1;let ie=0,N=0;const F=new O;for(let V=0;V<z;V++){const te=V*U-ee;for(let oe=0;oe<H;oe++){const Y=oe*T-W;F[y]=Y*_,F[v]=te*m,F[f]=L,u.push(F.x,F.y,F.z),F[y]=0,F[v]=0,F[f]=S>0?1:-1,c.push(F.x,F.y,F.z),h.push(oe/w),h.push(1-V/P),ie+=1}}for(let V=0;V<P;V++)for(let te=0;te<w;te++){const oe=d+te+H*V,Y=d+te+H*(V+1),re=d+(te+1)+H*(V+1),he=d+(te+1)+H*V;l.push(oe,Y,he),l.push(Y,re,he),N+=6}a.addGroup(p,N,E),p+=N,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function is(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function rn(t){const e={};for(let n=0;n<t.length;n++){const i=is(t[n]);for(const r in i)e[r]=i[r]}return e}function nM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function g_(t){return t.getRenderTarget()===null?t.outputColorSpace:et.workingColorSpace}const iM={clone:is,merge:rn};var rM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xr extends Kr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rM,this.fragmentShader=oM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=is(e.uniforms),this.uniformsGroups=nM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class v_ extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=wi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Un extends v_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=od*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return od*2*Math.atan(Math.tan(wc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(wc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ho=-90,po=1;class sM extends Ct{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Un(ho,po,e,n);r.layers=this.layers,this.add(r);const o=new Un(ho,po,e,n);o.layers=this.layers,this.add(o);const s=new Un(ho,po,e,n);s.layers=this.layers,this.add(s);const a=new Un(ho,po,e,n);a.layers=this.layers,this.add(a);const l=new Un(ho,po,e,n);l.layers=this.layers,this.add(l);const u=new Un(ho,po,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const u of n)this.remove(u);if(e===wi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,u,c]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(h,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class __ extends _n{constructor(e,n,i,r,o,s,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:es,super(e,n,i,r,o,s,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class aM extends Wr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Ws("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Fr?Gt:On),this.texture=new __(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:In}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Zr(5,5,5),o=new Xr({name:"CubemapFromEquirect",uniforms:is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:nr});o.uniforms.tEquirect.value=n;const s=new kn(r,o),a=n.minFilter;return n.minFilter===fa&&(n.minFilter=In),new sM(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const Gc=new O,lM=new O,uM=new Ye;class Er{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Gc.subVectors(i,n).cross(lM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Gc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||uM.getNormalMatrix(e),r=this.coplanarPoint(Gc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new Nu,ll=new O;class hh{constructor(e=new Er,n=new Er,i=new Er,r=new Er,o=new Er,s=new Er){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=wi){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],u=r[4],c=r[5],h=r[6],d=r[7],p=r[8],g=r[9],y=r[10],v=r[11],f=r[12],_=r[13],m=r[14],x=r[15];if(i[0].setComponents(l-o,d-u,v-p,x-f).normalize(),i[1].setComponents(l+o,d+u,v+p,x+f).normalize(),i[2].setComponents(l+s,d+c,v+g,x+_).normalize(),i[3].setComponents(l-s,d-c,v-g,x-_).normalize(),i[4].setComponents(l-a,d-h,v-y,x-m).normalize(),n===wi)i[5].setComponents(l+a,d+h,v+y,x+m).normalize();else if(n===cu)i[5].setComponents(a,h,y,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(e){return _r.center.set(0,0,0),_r.radius=.7071067811865476,_r.applyMatrix4(e.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ll.x=r.normal.x>0?e.max.x:e.min.x,ll.y=r.normal.y>0?e.max.y:e.min.y,ll.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ll)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function y_(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function cM(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const h=u.array,d=u.usage,p=h.byteLength,g=t.createBuffer();t.bindBuffer(c,g),t.bufferData(c,h,d),u.onUploadCallback();let y;if(h instanceof Float32Array)y=t.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=t.SHORT;else if(h instanceof Uint32Array)y=t.UNSIGNED_INT;else if(h instanceof Int32Array)y=t.INT;else if(h instanceof Int8Array)y=t.BYTE;else if(h instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:p}}function o(u,c,h){const d=c.array,p=c._updateRange,g=c.updateRanges;if(t.bindBuffer(h,u),p.count===-1&&g.length===0&&t.bufferSubData(h,0,d),g.length!==0){for(let y=0,v=g.length;y<v;y++){const f=g[y];n?t.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):t.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}c.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):t.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);if(h===void 0)i.set(u,r(u,c));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(h.buffer,u,c),h.version=u.version}}return{get:s,remove:a,update:l}}class Ou extends Vn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,h=e/a,d=n/l,p=[],g=[],y=[],v=[];for(let f=0;f<c;f++){const _=f*d-s;for(let m=0;m<u;m++){const x=m*h-o;g.push(x,-_,0),y.push(0,0,1),v.push(m/a),v.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const m=_+u*f,x=_+u*(f+1),A=_+1+u*(f+1),S=_+1+u*f;p.push(m,x,S),p.push(x,A,S)}this.setIndex(p),this.setAttribute("position",new Tn(g,3)),this.setAttribute("normal",new Tn(y,3)),this.setAttribute("uv",new Tn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ou(e.width,e.height,e.widthSegments,e.heightSegments)}}var fM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dM=`#ifdef USE_ALPHAHASH
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
#endif`,hM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,gM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vM=`#ifdef USE_AOMAP
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
#endif`,_M=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yM=`#ifdef USE_BATCHING
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
#endif`,xM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,SM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,EM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,MM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wM=`#ifdef USE_IRIDESCENCE
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
#endif`,TM=`#ifdef USE_BUMPMAP
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
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,LM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,DM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,IM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,NM=`#define PI 3.141592653589793
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
} // validated`,UM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,OM=`vec3 transformedNormal = objectNormal;
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
#endif`,FM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HM="gl_FragColor = linearToOutputTexel( gl_FragColor );",GM=`
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
}`,VM=`#ifdef USE_ENVMAP
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
#endif`,WM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,XM=`#ifdef USE_ENVMAP
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
#endif`,jM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,YM=`#ifdef USE_ENVMAP
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
#endif`,qM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$M=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ZM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JM=`#ifdef USE_GRADIENTMAP
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
}`,QM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ew=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iw=`uniform bool receiveShadow;
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
#endif`,rw=`#ifdef USE_ENVMAP
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
#endif`,ow=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uw=`PhysicalMaterial material;
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
#endif`,cw=`struct PhysicalMaterial {
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
}`,fw=`
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
#endif`,dw=`#if defined( RE_IndirectDiffuse )
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
#endif`,hw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,vw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,_w=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sw=`#if defined( USE_POINTS_UV )
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
#endif`,Ew=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ww=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tw=`#ifdef USE_MORPHNORMALS
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
#endif`,Aw=`#ifdef USE_MORPHTARGETS
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
#endif`,Rw=`#ifdef USE_MORPHTARGETS
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
#endif`,bw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Iw=`#ifdef USE_NORMALMAP
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
#endif`,Nw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Uw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ow=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ww=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$w=`float getShadowMask() {
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
}`,Kw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zw=`#ifdef USE_SKINNING
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
#endif`,Jw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qw=`#ifdef USE_SKINNING
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
#endif`,e1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,r1=`#ifdef USE_TRANSMISSION
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
#endif`,o1=`#ifdef USE_TRANSMISSION
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
#endif`,s1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const c1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f1=`uniform sampler2D t2D;
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
}`,d1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,p1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g1=`#include <common>
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
}`,v1=`#if DEPTH_PACKING == 3200
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
}`,_1=`#define DISTANCE
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
}`,y1=`#define DISTANCE
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
}`,x1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E1=`uniform float scale;
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
}`,M1=`uniform vec3 diffuse;
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
}`,w1=`#include <common>
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
}`,T1=`uniform vec3 diffuse;
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
}`,A1=`#define LAMBERT
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
}`,R1=`#define LAMBERT
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
}`,b1=`#define MATCAP
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
}`,C1=`#define MATCAP
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
}`,P1=`#define NORMAL
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
}`,L1=`#define NORMAL
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
}`,D1=`#define PHONG
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
}`,I1=`#define PHONG
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
}`,N1=`#define STANDARD
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
}`,U1=`#define STANDARD
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
}`,O1=`#define TOON
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
}`,F1=`#define TOON
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
}`,k1=`uniform float size;
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
}`,z1=`uniform vec3 diffuse;
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
}`,B1=`#include <common>
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
}`,H1=`uniform vec3 color;
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
}`,G1=`uniform float rotation;
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
}`,V1=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:fM,alphahash_pars_fragment:dM,alphamap_fragment:hM,alphamap_pars_fragment:pM,alphatest_fragment:mM,alphatest_pars_fragment:gM,aomap_fragment:vM,aomap_pars_fragment:_M,batching_pars_vertex:yM,batching_vertex:xM,begin_vertex:SM,beginnormal_vertex:EM,bsdfs:MM,iridescence_fragment:wM,bumpmap_pars_fragment:TM,clipping_planes_fragment:AM,clipping_planes_pars_fragment:RM,clipping_planes_pars_vertex:bM,clipping_planes_vertex:CM,color_fragment:PM,color_pars_fragment:LM,color_pars_vertex:DM,color_vertex:IM,common:NM,cube_uv_reflection_fragment:UM,defaultnormal_vertex:OM,displacementmap_pars_vertex:FM,displacementmap_vertex:kM,emissivemap_fragment:zM,emissivemap_pars_fragment:BM,colorspace_fragment:HM,colorspace_pars_fragment:GM,envmap_fragment:VM,envmap_common_pars_fragment:WM,envmap_pars_fragment:XM,envmap_pars_vertex:jM,envmap_physical_pars_fragment:rw,envmap_vertex:YM,fog_vertex:qM,fog_pars_vertex:$M,fog_fragment:KM,fog_pars_fragment:ZM,gradientmap_pars_fragment:JM,lightmap_fragment:QM,lightmap_pars_fragment:ew,lights_lambert_fragment:tw,lights_lambert_pars_fragment:nw,lights_pars_begin:iw,lights_toon_fragment:ow,lights_toon_pars_fragment:sw,lights_phong_fragment:aw,lights_phong_pars_fragment:lw,lights_physical_fragment:uw,lights_physical_pars_fragment:cw,lights_fragment_begin:fw,lights_fragment_maps:dw,lights_fragment_end:hw,logdepthbuf_fragment:pw,logdepthbuf_pars_fragment:mw,logdepthbuf_pars_vertex:gw,logdepthbuf_vertex:vw,map_fragment:_w,map_pars_fragment:yw,map_particle_fragment:xw,map_particle_pars_fragment:Sw,metalnessmap_fragment:Ew,metalnessmap_pars_fragment:Mw,morphcolor_vertex:ww,morphnormal_vertex:Tw,morphtarget_pars_vertex:Aw,morphtarget_vertex:Rw,normal_fragment_begin:bw,normal_fragment_maps:Cw,normal_pars_fragment:Pw,normal_pars_vertex:Lw,normal_vertex:Dw,normalmap_pars_fragment:Iw,clearcoat_normal_fragment_begin:Nw,clearcoat_normal_fragment_maps:Uw,clearcoat_pars_fragment:Ow,iridescence_pars_fragment:Fw,opaque_fragment:kw,packing:zw,premultiplied_alpha_fragment:Bw,project_vertex:Hw,dithering_fragment:Gw,dithering_pars_fragment:Vw,roughnessmap_fragment:Ww,roughnessmap_pars_fragment:Xw,shadowmap_pars_fragment:jw,shadowmap_pars_vertex:Yw,shadowmap_vertex:qw,shadowmask_pars_fragment:$w,skinbase_vertex:Kw,skinning_pars_vertex:Zw,skinning_vertex:Jw,skinnormal_vertex:Qw,specularmap_fragment:e1,specularmap_pars_fragment:t1,tonemapping_fragment:n1,tonemapping_pars_fragment:i1,transmission_fragment:r1,transmission_pars_fragment:o1,uv_pars_fragment:s1,uv_pars_vertex:a1,uv_vertex:l1,worldpos_vertex:u1,background_vert:c1,background_frag:f1,backgroundCube_vert:d1,backgroundCube_frag:h1,cube_vert:p1,cube_frag:m1,depth_vert:g1,depth_frag:v1,distanceRGBA_vert:_1,distanceRGBA_frag:y1,equirect_vert:x1,equirect_frag:S1,linedashed_vert:E1,linedashed_frag:M1,meshbasic_vert:w1,meshbasic_frag:T1,meshlambert_vert:A1,meshlambert_frag:R1,meshmatcap_vert:b1,meshmatcap_frag:C1,meshnormal_vert:P1,meshnormal_frag:L1,meshphong_vert:D1,meshphong_frag:I1,meshphysical_vert:N1,meshphysical_frag:U1,meshtoon_vert:O1,meshtoon_frag:F1,points_vert:k1,points_frag:z1,shadow_vert:B1,shadow_frag:H1,sprite_vert:G1,sprite_frag:V1},_e={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},si={basic:{uniforms:rn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:rn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:rn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:rn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:rn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:rn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:rn([_e.points,_e.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:rn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:rn([_e.common,_e.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:rn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:rn([_e.sprite,_e.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:rn([_e.common,_e.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:rn([_e.lights,_e.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};si.physical={uniforms:rn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const ul={r:0,b:0,g:0};function W1(t,e,n,i,r,o,s){const a=new Fe(0);let l=o===!0?0:1,u,c,h=null,d=0,p=null;function g(v,f){let _=!1,m=f.isScene===!0?f.background:null;m&&m.isTexture&&(m=(f.backgroundBlurriness>0?n:e).get(m)),m===null?y(a,l):m&&m.isColor&&(y(m,1),_=!0);const x=t.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,s):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),m&&(m.isCubeTexture||m.mapping===Du)?(c===void 0&&(c=new kn(new Zr(1,1,1),new Xr({name:"BackgroundCubeMaterial",uniforms:is(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,S,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=m,c.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=et.getTransfer(m.colorSpace)!==at,(h!==m||d!==m.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=m,d=m.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):m&&m.isTexture&&(u===void 0&&(u=new kn(new Ou(2,2),new Xr({name:"BackgroundMaterial",uniforms:is(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=m,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=et.getTransfer(m.colorSpace)!==at,m.matrixAutoUpdate===!0&&m.updateMatrix(),u.material.uniforms.uvTransform.value.copy(m.matrix),(h!==m||d!==m.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=m,d=m.version,p=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function y(v,f){v.getRGB(ul,g_(t)),i.buffers.color.setClear(ul.r,ul.g,ul.b,f,s)}return{getClearColor:function(){return a},setClearColor:function(v,f=1){a.set(v),l=f,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,y(a,l)},render:g}}function X1(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},l=v(null);let u=l,c=!1;function h(L,H,z,ie,N){let F=!1;if(s){const V=y(ie,z,H);u!==V&&(u=V,p(u.object)),F=f(L,ie,z,N),F&&_(L,ie,z,N)}else{const V=H.wireframe===!0;(u.geometry!==ie.id||u.program!==z.id||u.wireframe!==V)&&(u.geometry=ie.id,u.program=z.id,u.wireframe=V,F=!0)}N!==null&&n.update(N,t.ELEMENT_ARRAY_BUFFER),(F||c)&&(c=!1,P(L,H,z,ie),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(N).buffer))}function d(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function p(L){return i.isWebGL2?t.bindVertexArray(L):o.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?t.deleteVertexArray(L):o.deleteVertexArrayOES(L)}function y(L,H,z){const ie=z.wireframe===!0;let N=a[L.id];N===void 0&&(N={},a[L.id]=N);let F=N[H.id];F===void 0&&(F={},N[H.id]=F);let V=F[ie];return V===void 0&&(V=v(d()),F[ie]=V),V}function v(L){const H=[],z=[],ie=[];for(let N=0;N<r;N++)H[N]=0,z[N]=0,ie[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:z,attributeDivisors:ie,object:L,attributes:{},index:null}}function f(L,H,z,ie){const N=u.attributes,F=H.attributes;let V=0;const te=z.getAttributes();for(const oe in te)if(te[oe].location>=0){const re=N[oe];let he=F[oe];if(he===void 0&&(oe==="instanceMatrix"&&L.instanceMatrix&&(he=L.instanceMatrix),oe==="instanceColor"&&L.instanceColor&&(he=L.instanceColor)),re===void 0||re.attribute!==he||he&&re.data!==he.data)return!0;V++}return u.attributesNum!==V||u.index!==ie}function _(L,H,z,ie){const N={},F=H.attributes;let V=0;const te=z.getAttributes();for(const oe in te)if(te[oe].location>=0){let re=F[oe];re===void 0&&(oe==="instanceMatrix"&&L.instanceMatrix&&(re=L.instanceMatrix),oe==="instanceColor"&&L.instanceColor&&(re=L.instanceColor));const he={};he.attribute=re,re&&re.data&&(he.data=re.data),N[oe]=he,V++}u.attributes=N,u.attributesNum=V,u.index=ie}function m(){const L=u.newAttributes;for(let H=0,z=L.length;H<z;H++)L[H]=0}function x(L){A(L,0)}function A(L,H){const z=u.newAttributes,ie=u.enabledAttributes,N=u.attributeDivisors;z[L]=1,ie[L]===0&&(t.enableVertexAttribArray(L),ie[L]=1),N[L]!==H&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,H),N[L]=H)}function S(){const L=u.newAttributes,H=u.enabledAttributes;for(let z=0,ie=H.length;z<ie;z++)H[z]!==L[z]&&(t.disableVertexAttribArray(z),H[z]=0)}function w(L,H,z,ie,N,F,V){V===!0?t.vertexAttribIPointer(L,H,z,N,F):t.vertexAttribPointer(L,H,z,ie,N,F)}function P(L,H,z,ie){if(i.isWebGL2===!1&&(L.isInstancedMesh||ie.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const N=ie.attributes,F=z.getAttributes(),V=H.defaultAttributeValues;for(const te in F){const oe=F[te];if(oe.location>=0){let Y=N[te];if(Y===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(Y=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(Y=L.instanceColor)),Y!==void 0){const re=Y.normalized,he=Y.itemSize,ge=n.get(Y);if(ge===void 0)continue;const pe=ge.buffer,k=ge.type,D=ge.bytesPerElement,ne=i.isWebGL2===!0&&(k===t.INT||k===t.UNSIGNED_INT||Y.gpuType===Kv);if(Y.isInterleavedBufferAttribute){const J=Y.data,b=J.stride,q=Y.offset;if(J.isInstancedInterleavedBuffer){for(let j=0;j<oe.locationSize;j++)A(oe.location+j,J.meshPerAttribute);L.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let j=0;j<oe.locationSize;j++)x(oe.location+j);t.bindBuffer(t.ARRAY_BUFFER,pe);for(let j=0;j<oe.locationSize;j++)w(oe.location+j,he/oe.locationSize,k,re,b*D,(q+he/oe.locationSize*j)*D,ne)}else{if(Y.isInstancedBufferAttribute){for(let J=0;J<oe.locationSize;J++)A(oe.location+J,Y.meshPerAttribute);L.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let J=0;J<oe.locationSize;J++)x(oe.location+J);t.bindBuffer(t.ARRAY_BUFFER,pe);for(let J=0;J<oe.locationSize;J++)w(oe.location+J,he/oe.locationSize,k,re,he*D,he/oe.locationSize*J*D,ne)}}else if(V!==void 0){const re=V[te];if(re!==void 0)switch(re.length){case 2:t.vertexAttrib2fv(oe.location,re);break;case 3:t.vertexAttrib3fv(oe.location,re);break;case 4:t.vertexAttrib4fv(oe.location,re);break;default:t.vertexAttrib1fv(oe.location,re)}}}}S()}function E(){W();for(const L in a){const H=a[L];for(const z in H){const ie=H[z];for(const N in ie)g(ie[N].object),delete ie[N];delete H[z]}delete a[L]}}function T(L){if(a[L.id]===void 0)return;const H=a[L.id];for(const z in H){const ie=H[z];for(const N in ie)g(ie[N].object),delete ie[N];delete H[z]}delete a[L.id]}function U(L){for(const H in a){const z=a[H];if(z[L.id]===void 0)continue;const ie=z[L.id];for(const N in ie)g(ie[N].object),delete ie[N];delete z[L.id]}}function W(){ee(),c=!0,u!==l&&(u=l,p(u.object))}function ee(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:W,resetDefaultState:ee,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:U,initAttributes:m,enableAttribute:x,disableUnusedAttributes:S}}function j1(t,e,n,i){const r=i.isWebGL2;let o;function s(c){o=c}function a(c,h){t.drawArrays(o,c,h),n.update(h,o,1)}function l(c,h,d){if(d===0)return;let p,g;if(r)p=t,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](o,c,h,d),n.update(h,o,d)}function u(c,h,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(c[g],h[g]);else{p.multiDrawArraysWEBGL(o,c,0,h,0,d);let g=0;for(let y=0;y<d;y++)g+=h[y];n.update(g,o,1)}}this.setMode=s,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function Y1(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=o(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=s||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),f=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),m=d>0,x=s||e.has("OES_texture_float"),A=m&&x,S=s?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:v,maxVaryings:f,maxFragmentUniforms:_,vertexTextures:m,floatFragmentTextures:x,floatVertexTextures:A,maxSamples:S}}function q1(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new Er,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){o=!0,c(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,d){n=c(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,y=h.clipIntersection,v=h.clipShadows,f=t.get(h);if(!r||g===null||g.length===0||o&&!v)o?c(null):u();else{const _=o?0:i,m=_*4;let x=f.clippingState||null;l.value=x,x=c(g,d,m,p);for(let A=0;A!==m;++A)x[A]=n[A];f.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(h,d,p,g){const y=h!==null?h.length:0;let v=null;if(y!==0){if(v=l.value,g!==!0||v===null){const f=p+y*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(v===null||v.length<f)&&(v=new Float32Array(f));for(let m=0,x=p;m!==y;++m,x+=4)s.copy(h[m]).applyMatrix4(_,a),s.normal.toArray(v,x),v[x+3]=s.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,v}}function $1(t){let e=new WeakMap;function n(s,a){return a===ed?s.mapping=es:a===td&&(s.mapping=ts),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===ed||a===td)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new aM(l.height/2);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",r),n(u.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class x_ extends v_{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Io=4,Um=[.125,.215,.35,.446,.526,.582],Ar=20,Vc=new x_,Om=new Fe;let Wc=null,Xc=0,jc=0;const Mr=(1+Math.sqrt(5))/2,mo=1/Mr,Fm=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Mr,mo),new O(0,Mr,-mo),new O(mo,0,Mr),new O(-mo,0,Mr),new O(Mr,mo,0),new O(-Mr,mo,0)];class km{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),jc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wc,Xc,jc),e.scissorTest=!1,cl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===es||e.mapping===ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),jc=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:In,minFilter:In,generateMipmaps:!1,type:da,format:Jn,colorSpace:Li,depthBuffer:!1},r=zm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zm(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=K1(o)),this._blurMaterial=Z1(o,e,n)}return r}_compileMaterial(e){const n=new kn(this._lodPlanes[0],e);this._renderer.compile(n,Vc)}_sceneToCubeUV(e,n,i,r){const a=new Un(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,d=c.toneMapping;c.getClearColor(Om),c.toneMapping=ir,c.autoClear=!1;const p=new h_({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),g=new kn(new Zr,p);let y=!1;const v=e.background;v?v.isColor&&(p.color.copy(v),e.background=null,y=!0):(p.color.copy(Om),y=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const m=this._cubeSize;cl(r,_*m,f>2?m:0,m,m),c.setRenderTarget(r),y&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=d,c.autoClear=h,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===es||e.mapping===ts;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bm());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new kn(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;cl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Vc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=Fm[(r-1)%Fm.length];this._blur(e,r-1,r,o,s)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new kn(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Ar-1),y=o/g,v=isFinite(o)?1+Math.floor(c*y):Ar;v>Ar&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Ar}`);const f=[];let _=0;for(let w=0;w<Ar;++w){const P=w/y,E=Math.exp(-P*P/2);f.push(E),w===0?_+=E:w<v&&(_+=2*E)}for(let w=0;w<f.length;w++)f[w]=f[w]/_;d.envMap.value=e.texture,d.samples.value=v,d.weights.value=f,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:m}=this;d.dTheta.value=g,d.mipInt.value=m-i;const x=this._sizeLods[r],A=3*x*(r>m-Io?r-m+Io:0),S=4*(this._cubeSize-x);cl(n,A,S,3*x,2*x),l.setRenderTarget(n),l.render(h,Vc)}}function K1(t){const e=[],n=[],i=[];let r=t;const o=t-Io+1+Um.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-Io?l=Um[s-t+Io-1]:s===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,h=1+u,d=[c,c,h,c,h,h,c,c,h,h,c,h],p=6,g=6,y=3,v=2,f=1,_=new Float32Array(y*g*p),m=new Float32Array(v*g*p),x=new Float32Array(f*g*p);for(let S=0;S<p;S++){const w=S%3*2/3-1,P=S>2?0:-1,E=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];_.set(E,y*g*S),m.set(d,v*g*S);const T=[S,S,S,S,S,S];x.set(T,f*g*S)}const A=new Vn;A.setAttribute("position",new Bn(_,y)),A.setAttribute("uv",new Bn(m,v)),A.setAttribute("faceIndex",new Bn(x,f)),e.push(A),r>Io&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function zm(t,e,n){const i=new Wr(t,e,n);return i.texture.mapping=Du,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function cl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Z1(t,e,n){const i=new Float32Array(Ar),r=new O(0,1,0);return new Xr({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ph(),fragmentShader:`

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
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Bm(){return new Xr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ph(),fragmentShader:`

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
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Hm(){return new Xr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function ph(){return`

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
	`}function J1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===ed||l===td,c=l===es||l===ts;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new km(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(u&&h&&h.height>0||c&&h&&r(h)){n===null&&(n=new km(t));const d=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",o),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function o(a){const l=a.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function Q1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function eT(t,e,n,i){const r={},o=new WeakMap;function s(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const y=d.morphAttributes[g];for(let v=0,f=y.length;v<f;v++)e.remove(y[v])}d.removeEventListener("dispose",s),delete r[d.id];const p=o.get(d);p&&(e.remove(p),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const y=p[g];for(let v=0,f=y.length;v<f;v++)e.update(y[v],t.ARRAY_BUFFER)}}function u(h){const d=[],p=h.index,g=h.attributes.position;let y=0;if(p!==null){const _=p.array;y=p.version;for(let m=0,x=_.length;m<x;m+=3){const A=_[m+0],S=_[m+1],w=_[m+2];d.push(A,S,S,w,w,A)}}else if(g!==void 0){const _=g.array;y=g.version;for(let m=0,x=_.length/3-1;m<x;m+=3){const A=m+0,S=m+1,w=m+2;d.push(A,S,S,w,w,A)}}else return;const v=new(s_(d)?m_:p_)(d,1);v.version=y;const f=o.get(h);f&&e.remove(f),o.set(h,v)}function c(h){const d=o.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&u(h)}else u(h);return o.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function tT(t,e,n,i){const r=i.isWebGL2;let o;function s(p){o=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function c(p,g){t.drawElements(o,g,a,p*l),n.update(g,o,1)}function h(p,g,y){if(y===0)return;let v,f;if(r)v=t,f="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[f](o,g,a,p*l,y),n.update(g,o,y)}function d(p,g,y){if(y===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let f=0;f<y;f++)this.render(p[f]/l,g[f]);else{v.multiDrawElementsWEBGL(o,g,0,a,p,0,y);let f=0;for(let _=0;_<y;_++)f+=g[_];n.update(f,o,1)}}this.setMode=s,this.setIndex=u,this.render=c,this.renderInstances=h,this.renderMultiDraw=d}function nT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function iT(t,e){return t[0]-e[0]}function rT(t,e){return Math.abs(e[1])-Math.abs(t[1])}function oT(t,e,n){const i={},r=new Float32Array(8),o=new WeakMap,s=new Ot,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,h){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,y=g!==void 0?g.length:0;let v=o.get(c);if(v===void 0||v.count!==y){let H=function(){ee.dispose(),o.delete(c),c.removeEventListener("dispose",H)};var p=H;v!==void 0&&v.texture.dispose();const m=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,A=c.morphAttributes.color!==void 0,S=c.morphAttributes.position||[],w=c.morphAttributes.normal||[],P=c.morphAttributes.color||[];let E=0;m===!0&&(E=1),x===!0&&(E=2),A===!0&&(E=3);let T=c.attributes.position.count*E,U=1;T>e.maxTextureSize&&(U=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const W=new Float32Array(T*U*4*y),ee=new u_(W,T,U,y);ee.type=ji,ee.needsUpdate=!0;const L=E*4;for(let z=0;z<y;z++){const ie=S[z],N=w[z],F=P[z],V=T*U*4*z;for(let te=0;te<ie.count;te++){const oe=te*L;m===!0&&(s.fromBufferAttribute(ie,te),W[V+oe+0]=s.x,W[V+oe+1]=s.y,W[V+oe+2]=s.z,W[V+oe+3]=0),x===!0&&(s.fromBufferAttribute(N,te),W[V+oe+4]=s.x,W[V+oe+5]=s.y,W[V+oe+6]=s.z,W[V+oe+7]=0),A===!0&&(s.fromBufferAttribute(F,te),W[V+oe+8]=s.x,W[V+oe+9]=s.y,W[V+oe+10]=s.z,W[V+oe+11]=F.itemSize===4?s.w:1)}}v={count:y,texture:ee,size:new me(T,U)},o.set(c,v),c.addEventListener("dispose",H)}let f=0;for(let m=0;m<d.length;m++)f+=d[m];const _=c.morphTargetsRelative?1:1-f;h.getUniforms().setValue(t,"morphTargetBaseInfluence",_),h.getUniforms().setValue(t,"morphTargetInfluences",d),h.getUniforms().setValue(t,"morphTargetsTexture",v.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",v.size)}else{const g=d===void 0?0:d.length;let y=i[c.id];if(y===void 0||y.length!==g){y=[];for(let x=0;x<g;x++)y[x]=[x,0];i[c.id]=y}for(let x=0;x<g;x++){const A=y[x];A[0]=x,A[1]=d[x]}y.sort(rT);for(let x=0;x<8;x++)x<g&&y[x][1]?(a[x][0]=y[x][0],a[x][1]=y[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(iT);const v=c.morphAttributes.position,f=c.morphAttributes.normal;let _=0;for(let x=0;x<8;x++){const A=a[x],S=A[0],w=A[1];S!==Number.MAX_SAFE_INTEGER&&w?(v&&c.getAttribute("morphTarget"+x)!==v[S]&&c.setAttribute("morphTarget"+x,v[S]),f&&c.getAttribute("morphNormal"+x)!==f[S]&&c.setAttribute("morphNormal"+x,f[S]),r[x]=w,_+=w):(v&&c.hasAttribute("morphTarget"+x)===!0&&c.deleteAttribute("morphTarget"+x),f&&c.hasAttribute("morphNormal"+x)===!0&&c.deleteAttribute("morphNormal"+x),r[x]=0)}const m=c.morphTargetsRelative?1:1-_;h.getUniforms().setValue(t,"morphTargetBaseInfluence",m),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function sT(t,e,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,c=l.geometry,h=e.get(l,c);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function s(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:s}}class S_ extends _n{constructor(e,n,i,r,o,s,a,l,u,c){if(c=c!==void 0?c:Or,c!==Or&&c!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Or&&(i=Xi),i===void 0&&c===ns&&(i=Ur),super(null,r,o,s,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const E_=new _n,M_=new S_(1,1);M_.compareFunction=o_;const w_=new u_,T_=new WE,A_=new __,Gm=[],Vm=[],Wm=new Float32Array(16),Xm=new Float32Array(9),jm=new Float32Array(4);function fs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=Gm[r];if(o===void 0&&(o=new Float32Array(r),Gm[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Lt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Fu(t,e){let n=Vm[e];n===void 0&&(n=new Int32Array(e),Vm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function aT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function lT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2fv(this.addr,e),Lt(n,e)}}function uT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pt(n,e))return;t.uniform3fv(this.addr,e),Lt(n,e)}}function cT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4fv(this.addr,e),Lt(n,e)}}function fT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;jm.set(i),t.uniformMatrix2fv(this.addr,!1,jm),Lt(n,i)}}function dT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Xm.set(i),t.uniformMatrix3fv(this.addr,!1,Xm),Lt(n,i)}}function hT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Wm.set(i),t.uniformMatrix4fv(this.addr,!1,Wm),Lt(n,i)}}function pT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function mT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2iv(this.addr,e),Lt(n,e)}}function gT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3iv(this.addr,e),Lt(n,e)}}function vT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4iv(this.addr,e),Lt(n,e)}}function _T(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function yT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2uiv(this.addr,e),Lt(n,e)}}function xT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3uiv(this.addr,e),Lt(n,e)}}function ST(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4uiv(this.addr,e),Lt(n,e)}}function ET(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const o=this.type===t.SAMPLER_2D_SHADOW?M_:E_;n.setTexture2D(e||o,r)}function MT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||T_,r)}function wT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||A_,r)}function TT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||w_,r)}function AT(t){switch(t){case 5126:return aT;case 35664:return lT;case 35665:return uT;case 35666:return cT;case 35674:return fT;case 35675:return dT;case 35676:return hT;case 5124:case 35670:return pT;case 35667:case 35671:return mT;case 35668:case 35672:return gT;case 35669:case 35673:return vT;case 5125:return _T;case 36294:return yT;case 36295:return xT;case 36296:return ST;case 35678:case 36198:case 36298:case 36306:case 35682:return ET;case 35679:case 36299:case 36307:return MT;case 35680:case 36300:case 36308:case 36293:return wT;case 36289:case 36303:case 36311:case 36292:return TT}}function RT(t,e){t.uniform1fv(this.addr,e)}function bT(t,e){const n=fs(e,this.size,2);t.uniform2fv(this.addr,n)}function CT(t,e){const n=fs(e,this.size,3);t.uniform3fv(this.addr,n)}function PT(t,e){const n=fs(e,this.size,4);t.uniform4fv(this.addr,n)}function LT(t,e){const n=fs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function DT(t,e){const n=fs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function IT(t,e){const n=fs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function NT(t,e){t.uniform1iv(this.addr,e)}function UT(t,e){t.uniform2iv(this.addr,e)}function OT(t,e){t.uniform3iv(this.addr,e)}function FT(t,e){t.uniform4iv(this.addr,e)}function kT(t,e){t.uniform1uiv(this.addr,e)}function zT(t,e){t.uniform2uiv(this.addr,e)}function BT(t,e){t.uniform3uiv(this.addr,e)}function HT(t,e){t.uniform4uiv(this.addr,e)}function GT(t,e,n){const i=this.cache,r=e.length,o=Fu(n,r);Pt(i,o)||(t.uniform1iv(this.addr,o),Lt(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||E_,o[s])}function VT(t,e,n){const i=this.cache,r=e.length,o=Fu(n,r);Pt(i,o)||(t.uniform1iv(this.addr,o),Lt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||T_,o[s])}function WT(t,e,n){const i=this.cache,r=e.length,o=Fu(n,r);Pt(i,o)||(t.uniform1iv(this.addr,o),Lt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||A_,o[s])}function XT(t,e,n){const i=this.cache,r=e.length,o=Fu(n,r);Pt(i,o)||(t.uniform1iv(this.addr,o),Lt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||w_,o[s])}function jT(t){switch(t){case 5126:return RT;case 35664:return bT;case 35665:return CT;case 35666:return PT;case 35674:return LT;case 35675:return DT;case 35676:return IT;case 5124:case 35670:return NT;case 35667:case 35671:return UT;case 35668:case 35672:return OT;case 35669:case 35673:return FT;case 5125:return kT;case 36294:return zT;case 36295:return BT;case 36296:return HT;case 35678:case 36198:case 36298:case 36306:case 35682:return GT;case 35679:case 36299:case 36307:return VT;case 35680:case 36300:case 36308:case 36293:return WT;case 36289:case 36303:case 36311:case 36292:return XT}}class YT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=AT(n.type)}}class qT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=jT(n.type)}}class $T{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const Yc=/(\w+)(\])?(\[|\.)?/g;function Ym(t,e){t.seq.push(e),t.map[e.id]=e}function KT(t,e,n){const i=t.name,r=i.length;for(Yc.lastIndex=0;;){const o=Yc.exec(i),s=Yc.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){Ym(n,u===void 0?new YT(a,t,e):new qT(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new $T(a),Ym(n,h)),n=h}}}class Nl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);KT(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function qm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const ZT=37297;let JT=0;function QT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function eA(t){const e=et.getPrimaries(et.workingColorSpace),n=et.getPrimaries(t);let i;switch(e===n?i="":e===uu&&n===lu?i="LinearDisplayP3ToLinearSRGB":e===lu&&n===uu&&(i="LinearSRGBToLinearDisplayP3"),t){case Li:case Iu:return[i,"LinearTransferOETF"];case Gt:case dh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function $m(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+QT(t.getShaderSource(e),s)}else return r}function tA(t,e){const n=eA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function nA(t,e){let n;switch(e){case hE:n="Linear";break;case pE:n="Reinhard";break;case mE:n="OptimizedCineon";break;case gE:n="ACESFilmic";break;case _E:n="AgX";break;case vE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function iA(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(No).join(`
`)}function rA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(No).join(`
`)}function oA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function sA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function No(t){return t!==""}function Km(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aA=/^[ \t]*#include +<([\w\d./]+)>/gm;function ad(t){return t.replace(aA,uA)}const lA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function uA(t,e){let n=Ve[e];if(n===void 0){const i=lA.get(e);if(i!==void 0)n=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ad(n)}const cA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jm(t){return t.replace(cA,fA)}function fA(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Qm(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===jv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Yv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function hA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case es:case ts:e="ENVMAP_TYPE_CUBE";break;case Du:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ts:e="ENVMAP_MODE_REFRACTION";break}return e}function mA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case qv:e="ENVMAP_BLENDING_MULTIPLY";break;case fE:e="ENVMAP_BLENDING_MIX";break;case dE:e="ENVMAP_BLENDING_ADD";break}return e}function gA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function vA(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=dA(n),u=hA(n),c=pA(n),h=mA(n),d=gA(n),p=n.isWebGL2?"":iA(n),g=rA(n),y=oA(o),v=r.createProgram();let f,_,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(No).join(`
`),f.length>0&&(f+=`
`),_=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(No).join(`
`),_.length>0&&(_+=`
`)):(f=[Qm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),_=[p,Qm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ir?"#define TONE_MAPPING":"",n.toneMapping!==ir?Ve.tonemapping_pars_fragment:"",n.toneMapping!==ir?nA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,tA("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(No).join(`
`)),s=ad(s),s=Km(s,n),s=Zm(s,n),a=ad(a),a=Km(a,n),a=Zm(a,n),s=Jm(s),a=Jm(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===vm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===vm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=m+f+s,A=m+_+a,S=qm(r,r.VERTEX_SHADER,x),w=qm(r,r.FRAGMENT_SHADER,A);r.attachShader(v,S),r.attachShader(v,w),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function P(W){if(t.debug.checkShaderErrors){const ee=r.getProgramInfoLog(v).trim(),L=r.getShaderInfoLog(S).trim(),H=r.getShaderInfoLog(w).trim();let z=!0,ie=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,S,w);else{const N=$m(r,S,"vertex"),F=$m(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+ee+`
`+N+`
`+F)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(L===""||H==="")&&(ie=!1);ie&&(W.diagnostics={runnable:z,programLog:ee,vertexShader:{log:L,prefix:f},fragmentShader:{log:H,prefix:_}})}r.deleteShader(S),r.deleteShader(w),E=new Nl(r,v),T=sA(r,v)}let E;this.getUniforms=function(){return E===void 0&&P(this),E};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let U=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(v,ZT)),U},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=JT++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=w,this}let _A=0;class yA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new xA(e),n.set(e,i)),i}}class xA{constructor(e){this.id=_A++,this.code=e,this.usedTimes=0}}function SA(t,e,n,i,r,o,s){const a=new f_,l=new yA,u=[],c=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return E===0?"uv":`uv${E}`}function v(E,T,U,W,ee){const L=W.fog,H=ee.geometry,z=E.isMeshStandardMaterial?W.environment:null,ie=(E.isMeshStandardMaterial?n:e).get(E.envMap||z),N=ie&&ie.mapping===Du?ie.image.height:null,F=g[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const V=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,te=V!==void 0?V.length:0;let oe=0;H.morphAttributes.position!==void 0&&(oe=1),H.morphAttributes.normal!==void 0&&(oe=2),H.morphAttributes.color!==void 0&&(oe=3);let Y,re,he,ge;if(F){const en=si[F];Y=en.vertexShader,re=en.fragmentShader}else Y=E.vertexShader,re=E.fragmentShader,l.update(E),he=l.getVertexShaderID(E),ge=l.getFragmentShaderID(E);const pe=t.getRenderTarget(),k=ee.isInstancedMesh===!0,D=ee.isBatchedMesh===!0,ne=!!E.map,J=!!E.matcap,b=!!ie,q=!!E.aoMap,j=!!E.lightMap,K=!!E.bumpMap,X=!!E.normalMap,Me=!!E.displacementMap,ye=!!E.emissiveMap,R=!!E.metalnessMap,M=!!E.roughnessMap,G=E.anisotropy>0,fe=E.clearcoat>0,ue=E.iridescence>0,le=E.sheen>0,be=E.transmission>0,xe=G&&!!E.anisotropyMap,Ae=fe&&!!E.clearcoatMap,De=fe&&!!E.clearcoatNormalMap,Be=fe&&!!E.clearcoatRoughnessMap,ce=ue&&!!E.iridescenceMap,Ze=ue&&!!E.iridescenceThicknessMap,qe=le&&!!E.sheenColorMap,ke=le&&!!E.sheenRoughnessMap,Le=!!E.specularMap,Re=!!E.specularColorMap,Ge=!!E.specularIntensityMap,Je=be&&!!E.transmissionMap,vt=be&&!!E.thicknessMap,Xe=!!E.gradientMap,ve=!!E.alphaMap,I=E.alphaTest>0,Se=!!E.alphaHash,Ee=!!E.extensions,Ue=!!H.attributes.uv1,Ie=!!H.attributes.uv2,nt=!!H.attributes.uv3;let it=ir;return E.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(it=t.toneMapping),{isWebGL2:c,shaderID:F,shaderType:E.type,shaderName:E.name,vertexShader:Y,fragmentShader:re,defines:E.defines,customVertexShaderID:he,customFragmentShaderID:ge,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:D,instancing:k,instancingColor:k&&ee.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:pe===null?t.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Li,map:ne,matcap:J,envMap:b,envMapMode:b&&ie.mapping,envMapCubeUVHeight:N,aoMap:q,lightMap:j,bumpMap:K,normalMap:X,displacementMap:d&&Me,emissiveMap:ye,normalMapObjectSpace:X&&E.normalMapType===PE,normalMapTangentSpace:X&&E.normalMapType===r_,metalnessMap:R,roughnessMap:M,anisotropy:G,anisotropyMap:xe,clearcoat:fe,clearcoatMap:Ae,clearcoatNormalMap:De,clearcoatRoughnessMap:Be,iridescence:ue,iridescenceMap:ce,iridescenceThicknessMap:Ze,sheen:le,sheenColorMap:qe,sheenRoughnessMap:ke,specularMap:Le,specularColorMap:Re,specularIntensityMap:Ge,transmission:be,transmissionMap:Je,thicknessMap:vt,gradientMap:Xe,opaque:E.transparent===!1&&E.blending===Vo,alphaMap:ve,alphaTest:I,alphaHash:Se,combine:E.combine,mapUv:ne&&y(E.map.channel),aoMapUv:q&&y(E.aoMap.channel),lightMapUv:j&&y(E.lightMap.channel),bumpMapUv:K&&y(E.bumpMap.channel),normalMapUv:X&&y(E.normalMap.channel),displacementMapUv:Me&&y(E.displacementMap.channel),emissiveMapUv:ye&&y(E.emissiveMap.channel),metalnessMapUv:R&&y(E.metalnessMap.channel),roughnessMapUv:M&&y(E.roughnessMap.channel),anisotropyMapUv:xe&&y(E.anisotropyMap.channel),clearcoatMapUv:Ae&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:De&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:ke&&y(E.sheenRoughnessMap.channel),specularMapUv:Le&&y(E.specularMap.channel),specularColorMapUv:Re&&y(E.specularColorMap.channel),specularIntensityMapUv:Ge&&y(E.specularIntensityMap.channel),transmissionMapUv:Je&&y(E.transmissionMap.channel),thicknessMapUv:vt&&y(E.thicknessMap.channel),alphaMapUv:ve&&y(E.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(X||G),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:Ue,vertexUv2s:Ie,vertexUv3s:nt,pointsUvs:ee.isPoints===!0&&!!H.attributes.uv&&(ne||ve),fog:!!L,useFog:E.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:ee.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:oe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:it,useLegacyLights:t._useLegacyLights,decodeVideoTexture:ne&&E.map.isVideoTexture===!0&&et.getTransfer(E.map.colorSpace)===at,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===fn,flipSided:E.side===vn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:Ee&&E.extensions.derivatives===!0,extensionFragDepth:Ee&&E.extensions.fragDepth===!0,extensionDrawBuffers:Ee&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ee&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ee&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function f(E){const T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(const U in E.defines)T.push(U),T.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(_(T,E),m(T,E),T.push(t.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function _(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function m(E,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),E.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function x(E){const T=g[E.type];let U;if(T){const W=si[T];U=iM.clone(W.uniforms)}else U=E.uniforms;return U}function A(E,T){let U;for(let W=0,ee=u.length;W<ee;W++){const L=u[W];if(L.cacheKey===T){U=L,++U.usedTimes;break}}return U===void 0&&(U=new vA(t,T,E,o),u.push(U)),U}function S(E){if(--E.usedTimes===0){const T=u.indexOf(E);u[T]=u[u.length-1],u.pop(),E.destroy()}}function w(E){l.remove(E)}function P(){l.dispose()}return{getParameters:v,getProgramCacheKey:f,getUniforms:x,acquireProgram:A,releaseProgram:S,releaseShaderCache:w,programs:u,dispose:P}}function EA(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function MA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function eg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function tg(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(h,d,p,g,y,v){let f=t[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:y,group:v},t[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=y,f.group=v),e++,f}function a(h,d,p,g,y,v){const f=s(h,d,p,g,y,v);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(h,d,p,g,y,v){const f=s(h,d,p,g,y,v);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function u(h,d){n.length>1&&n.sort(h||MA),i.length>1&&i.sort(d||eg),r.length>1&&r.sort(d||eg)}function c(){for(let h=e,d=t.length;h<d;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:c,sort:u}}function wA(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new tg,t.set(i,[s])):r>=o.length?(s=new tg,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function TA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new Fe};break;case"SpotLight":n={position:new O,direction:new O,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":n={color:new Fe,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function AA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let RA=0;function bA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function CA(t,e){const n=new TA,i=AA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new O);const o=new O,s=new xt,a=new xt;function l(c,h){let d=0,p=0,g=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let y=0,v=0,f=0,_=0,m=0,x=0,A=0,S=0,w=0,P=0,E=0;c.sort(bA);const T=h===!0?Math.PI:1;for(let W=0,ee=c.length;W<ee;W++){const L=c[W],H=L.color,z=L.intensity,ie=L.distance,N=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=H.r*z*T,p+=H.g*z*T,g+=H.b*z*T;else if(L.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(L.sh.coefficients[F],z);E++}else if(L.isDirectionalLight){const F=n.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity*T),L.castShadow){const V=L.shadow,te=i.get(L);te.shadowBias=V.bias,te.shadowNormalBias=V.normalBias,te.shadowRadius=V.radius,te.shadowMapSize=V.mapSize,r.directionalShadow[y]=te,r.directionalShadowMap[y]=N,r.directionalShadowMatrix[y]=L.shadow.matrix,x++}r.directional[y]=F,y++}else if(L.isSpotLight){const F=n.get(L);F.position.setFromMatrixPosition(L.matrixWorld),F.color.copy(H).multiplyScalar(z*T),F.distance=ie,F.coneCos=Math.cos(L.angle),F.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),F.decay=L.decay,r.spot[f]=F;const V=L.shadow;if(L.map&&(r.spotLightMap[w]=L.map,w++,V.updateMatrices(L),L.castShadow&&P++),r.spotLightMatrix[f]=V.matrix,L.castShadow){const te=i.get(L);te.shadowBias=V.bias,te.shadowNormalBias=V.normalBias,te.shadowRadius=V.radius,te.shadowMapSize=V.mapSize,r.spotShadow[f]=te,r.spotShadowMap[f]=N,S++}f++}else if(L.isRectAreaLight){const F=n.get(L);F.color.copy(H).multiplyScalar(z),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),r.rectArea[_]=F,_++}else if(L.isPointLight){const F=n.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity*T),F.distance=L.distance,F.decay=L.decay,L.castShadow){const V=L.shadow,te=i.get(L);te.shadowBias=V.bias,te.shadowNormalBias=V.normalBias,te.shadowRadius=V.radius,te.shadowMapSize=V.mapSize,te.shadowCameraNear=V.camera.near,te.shadowCameraFar=V.camera.far,r.pointShadow[v]=te,r.pointShadowMap[v]=N,r.pointShadowMatrix[v]=L.shadow.matrix,A++}r.point[v]=F,v++}else if(L.isHemisphereLight){const F=n.get(L);F.skyColor.copy(L.color).multiplyScalar(z*T),F.groundColor.copy(L.groundColor).multiplyScalar(z*T),r.hemi[m]=F,m++}}_>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_FLOAT_1,r.rectAreaLTC2=_e.LTC_FLOAT_2):(r.rectAreaLTC1=_e.LTC_HALF_1,r.rectAreaLTC2=_e.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_FLOAT_1,r.rectAreaLTC2=_e.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_HALF_1,r.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=g;const U=r.hash;(U.directionalLength!==y||U.pointLength!==v||U.spotLength!==f||U.rectAreaLength!==_||U.hemiLength!==m||U.numDirectionalShadows!==x||U.numPointShadows!==A||U.numSpotShadows!==S||U.numSpotMaps!==w||U.numLightProbes!==E)&&(r.directional.length=y,r.spot.length=f,r.rectArea.length=_,r.point.length=v,r.hemi.length=m,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=S,r.spotShadowMap.length=S,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=S+w-P,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=E,U.directionalLength=y,U.pointLength=v,U.spotLength=f,U.rectAreaLength=_,U.hemiLength=m,U.numDirectionalShadows=x,U.numPointShadows=A,U.numSpotShadows=S,U.numSpotMaps=w,U.numLightProbes=E,r.version=RA++)}function u(c,h){let d=0,p=0,g=0,y=0,v=0;const f=h.matrixWorldInverse;for(let _=0,m=c.length;_<m;_++){const x=c[_];if(x.isDirectionalLight){const A=r.directional[d];A.direction.setFromMatrixPosition(x.matrixWorld),o.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(f),d++}else if(x.isSpotLight){const A=r.spot[g];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(f),A.direction.setFromMatrixPosition(x.matrixWorld),o.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(f),g++}else if(x.isRectAreaLight){const A=r.rectArea[y];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(f),a.identity(),s.copy(x.matrixWorld),s.premultiply(f),a.extractRotation(s),A.halfWidth.set(x.width*.5,0,0),A.halfHeight.set(0,x.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),y++}else if(x.isPointLight){const A=r.point[p];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(f),p++}else if(x.isHemisphereLight){const A=r.hemi[v];A.direction.setFromMatrixPosition(x.matrixWorld),A.direction.transformDirection(f),v++}}}return{setup:l,setupView:u,state:r}}function ng(t,e){const n=new CA(t,e),i=[],r=[];function o(){i.length=0,r.length=0}function s(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function u(h){n.setupView(i,h)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:s,pushShadow:a}}function PA(t,e){let n=new WeakMap;function i(o,s=0){const a=n.get(o);let l;return a===void 0?(l=new ng(t,e),n.set(o,[l])):s>=a.length?(l=new ng(t,e),a.push(l)):l=a[s],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class LA extends Kr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class DA extends Kr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const IA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NA=`uniform sampler2D shadow_pass;
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
}`;function UA(t,e,n){let i=new hh;const r=new me,o=new me,s=new Ot,a=new LA({depthPacking:CE}),l=new DA,u={},c=n.maxTextureSize,h={[ur]:vn,[vn]:ur,[fn]:fn},d=new Xr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:IA,fragmentShader:NA}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Vn;g.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new kn(g,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jv;let f=this.type;this.render=function(S,w,P){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||S.length===0)return;const E=t.getRenderTarget(),T=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),W=t.state;W.setBlending(nr),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const ee=f!==vi&&this.type===vi,L=f===vi&&this.type!==vi;for(let H=0,z=S.length;H<z;H++){const ie=S[H],N=ie.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const F=N.getFrameExtents();if(r.multiply(F),o.copy(N.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(o.x=Math.floor(c/F.x),r.x=o.x*F.x,N.mapSize.x=o.x),r.y>c&&(o.y=Math.floor(c/F.y),r.y=o.y*F.y,N.mapSize.y=o.y)),N.map===null||ee===!0||L===!0){const te=this.type!==vi?{minFilter:sn,magFilter:sn}:{};N.map!==null&&N.map.dispose(),N.map=new Wr(r.x,r.y,te),N.map.texture.name=ie.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const V=N.getViewportCount();for(let te=0;te<V;te++){const oe=N.getViewport(te);s.set(o.x*oe.x,o.y*oe.y,o.x*oe.z,o.y*oe.w),W.viewport(s),N.updateMatrices(ie,te),i=N.getFrustum(),x(w,P,N.camera,ie,this.type)}N.isPointLightShadow!==!0&&this.type===vi&&_(N,P),N.needsUpdate=!1}f=this.type,v.needsUpdate=!1,t.setRenderTarget(E,T,U)};function _(S,w){const P=e.update(y);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Wr(r.x,r.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,t.setRenderTarget(S.mapPass),t.clear(),t.renderBufferDirect(w,null,P,d,y,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,t.setRenderTarget(S.map),t.clear(),t.renderBufferDirect(w,null,P,p,y,null)}function m(S,w,P,E){let T=null;const U=P.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(U!==void 0)T=U;else if(T=P.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const W=T.uuid,ee=w.uuid;let L=u[W];L===void 0&&(L={},u[W]=L);let H=L[ee];H===void 0&&(H=T.clone(),L[ee]=H,w.addEventListener("dispose",A)),T=H}if(T.visible=w.visible,T.wireframe=w.wireframe,E===vi?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:h[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,P.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const W=t.properties.get(T);W.light=P}return T}function x(S,w,P,E,T){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&T===vi)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,S.matrixWorld);const ee=e.update(S),L=S.material;if(Array.isArray(L)){const H=ee.groups;for(let z=0,ie=H.length;z<ie;z++){const N=H[z],F=L[N.materialIndex];if(F&&F.visible){const V=m(S,F,E,T);S.onBeforeShadow(t,S,w,P,ee,V,N),t.renderBufferDirect(P,null,ee,V,S,N),S.onAfterShadow(t,S,w,P,ee,V,N)}}}else if(L.visible){const H=m(S,L,E,T);S.onBeforeShadow(t,S,w,P,ee,H,null),t.renderBufferDirect(P,null,ee,H,S,null),S.onAfterShadow(t,S,w,P,ee,H,null)}}const W=S.children;for(let ee=0,L=W.length;ee<L;ee++)x(W[ee],w,P,E,T)}function A(S){S.target.removeEventListener("dispose",A);for(const P in u){const E=u[P],T=S.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}function OA(t,e,n){const i=n.isWebGL2;function r(){let I=!1;const Se=new Ot;let Ee=null;const Ue=new Ot(0,0,0,0);return{setMask:function(Ie){Ee!==Ie&&!I&&(t.colorMask(Ie,Ie,Ie,Ie),Ee=Ie)},setLocked:function(Ie){I=Ie},setClear:function(Ie,nt,it,Dt,en){en===!0&&(Ie*=Dt,nt*=Dt,it*=Dt),Se.set(Ie,nt,it,Dt),Ue.equals(Se)===!1&&(t.clearColor(Ie,nt,it,Dt),Ue.copy(Se))},reset:function(){I=!1,Ee=null,Ue.set(-1,0,0,0)}}}function o(){let I=!1,Se=null,Ee=null,Ue=null;return{setTest:function(Ie){Ie?D(t.DEPTH_TEST):ne(t.DEPTH_TEST)},setMask:function(Ie){Se!==Ie&&!I&&(t.depthMask(Ie),Se=Ie)},setFunc:function(Ie){if(Ee!==Ie){switch(Ie){case rE:t.depthFunc(t.NEVER);break;case oE:t.depthFunc(t.ALWAYS);break;case sE:t.depthFunc(t.LESS);break;case su:t.depthFunc(t.LEQUAL);break;case aE:t.depthFunc(t.EQUAL);break;case lE:t.depthFunc(t.GEQUAL);break;case uE:t.depthFunc(t.GREATER);break;case cE:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ee=Ie}},setLocked:function(Ie){I=Ie},setClear:function(Ie){Ue!==Ie&&(t.clearDepth(Ie),Ue=Ie)},reset:function(){I=!1,Se=null,Ee=null,Ue=null}}}function s(){let I=!1,Se=null,Ee=null,Ue=null,Ie=null,nt=null,it=null,Dt=null,en=null;return{setTest:function(rt){I||(rt?D(t.STENCIL_TEST):ne(t.STENCIL_TEST))},setMask:function(rt){Se!==rt&&!I&&(t.stencilMask(rt),Se=rt)},setFunc:function(rt,tn,ii){(Ee!==rt||Ue!==tn||Ie!==ii)&&(t.stencilFunc(rt,tn,ii),Ee=rt,Ue=tn,Ie=ii)},setOp:function(rt,tn,ii){(nt!==rt||it!==tn||Dt!==ii)&&(t.stencilOp(rt,tn,ii),nt=rt,it=tn,Dt=ii)},setLocked:function(rt){I=rt},setClear:function(rt){en!==rt&&(t.clearStencil(rt),en=rt)},reset:function(){I=!1,Se=null,Ee=null,Ue=null,Ie=null,nt=null,it=null,Dt=null,en=null}}}const a=new r,l=new o,u=new s,c=new WeakMap,h=new WeakMap;let d={},p={},g=new WeakMap,y=[],v=null,f=!1,_=null,m=null,x=null,A=null,S=null,w=null,P=null,E=new Fe(0,0,0),T=0,U=!1,W=null,ee=null,L=null,H=null,z=null;const ie=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,F=0;const V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(V)[1]),N=F>=1):V.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),N=F>=2);let te=null,oe={};const Y=t.getParameter(t.SCISSOR_BOX),re=t.getParameter(t.VIEWPORT),he=new Ot().fromArray(Y),ge=new Ot().fromArray(re);function pe(I,Se,Ee,Ue){const Ie=new Uint8Array(4),nt=t.createTexture();t.bindTexture(I,nt),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let it=0;it<Ee;it++)i&&(I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY)?t.texImage3D(Se,0,t.RGBA,1,1,Ue,0,t.RGBA,t.UNSIGNED_BYTE,Ie):t.texImage2D(Se+it,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ie);return nt}const k={};k[t.TEXTURE_2D]=pe(t.TEXTURE_2D,t.TEXTURE_2D,1),k[t.TEXTURE_CUBE_MAP]=pe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(k[t.TEXTURE_2D_ARRAY]=pe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),k[t.TEXTURE_3D]=pe(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),D(t.DEPTH_TEST),l.setFunc(su),ye(!1),R(kp),D(t.CULL_FACE),X(nr);function D(I){d[I]!==!0&&(t.enable(I),d[I]=!0)}function ne(I){d[I]!==!1&&(t.disable(I),d[I]=!1)}function J(I,Se){return p[I]!==Se?(t.bindFramebuffer(I,Se),p[I]=Se,i&&(I===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=Se),I===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=Se)),!0):!1}function b(I,Se){let Ee=y,Ue=!1;if(I)if(Ee=g.get(Se),Ee===void 0&&(Ee=[],g.set(Se,Ee)),I.isWebGLMultipleRenderTargets){const Ie=I.texture;if(Ee.length!==Ie.length||Ee[0]!==t.COLOR_ATTACHMENT0){for(let nt=0,it=Ie.length;nt<it;nt++)Ee[nt]=t.COLOR_ATTACHMENT0+nt;Ee.length=Ie.length,Ue=!0}}else Ee[0]!==t.COLOR_ATTACHMENT0&&(Ee[0]=t.COLOR_ATTACHMENT0,Ue=!0);else Ee[0]!==t.BACK&&(Ee[0]=t.BACK,Ue=!0);Ue&&(n.isWebGL2?t.drawBuffers(Ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ee))}function q(I){return v!==I?(t.useProgram(I),v=I,!0):!1}const j={[Tr]:t.FUNC_ADD,[VS]:t.FUNC_SUBTRACT,[WS]:t.FUNC_REVERSE_SUBTRACT};if(i)j[Gp]=t.MIN,j[Vp]=t.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(j[Gp]=I.MIN_EXT,j[Vp]=I.MAX_EXT)}const K={[XS]:t.ZERO,[jS]:t.ONE,[YS]:t.SRC_COLOR,[Jf]:t.SRC_ALPHA,[QS]:t.SRC_ALPHA_SATURATE,[ZS]:t.DST_COLOR,[$S]:t.DST_ALPHA,[qS]:t.ONE_MINUS_SRC_COLOR,[Qf]:t.ONE_MINUS_SRC_ALPHA,[JS]:t.ONE_MINUS_DST_COLOR,[KS]:t.ONE_MINUS_DST_ALPHA,[eE]:t.CONSTANT_COLOR,[tE]:t.ONE_MINUS_CONSTANT_COLOR,[nE]:t.CONSTANT_ALPHA,[iE]:t.ONE_MINUS_CONSTANT_ALPHA};function X(I,Se,Ee,Ue,Ie,nt,it,Dt,en,rt){if(I===nr){f===!0&&(ne(t.BLEND),f=!1);return}if(f===!1&&(D(t.BLEND),f=!0),I!==GS){if(I!==_||rt!==U){if((m!==Tr||S!==Tr)&&(t.blendEquation(t.FUNC_ADD),m=Tr,S=Tr),rt)switch(I){case Vo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case zp:t.blendFunc(t.ONE,t.ONE);break;case Bp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Hp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Vo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case zp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Bp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Hp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}x=null,A=null,w=null,P=null,E.set(0,0,0),T=0,_=I,U=rt}return}Ie=Ie||Se,nt=nt||Ee,it=it||Ue,(Se!==m||Ie!==S)&&(t.blendEquationSeparate(j[Se],j[Ie]),m=Se,S=Ie),(Ee!==x||Ue!==A||nt!==w||it!==P)&&(t.blendFuncSeparate(K[Ee],K[Ue],K[nt],K[it]),x=Ee,A=Ue,w=nt,P=it),(Dt.equals(E)===!1||en!==T)&&(t.blendColor(Dt.r,Dt.g,Dt.b,en),E.copy(Dt),T=en),_=I,U=!1}function Me(I,Se){I.side===fn?ne(t.CULL_FACE):D(t.CULL_FACE);let Ee=I.side===vn;Se&&(Ee=!Ee),ye(Ee),I.blending===Vo&&I.transparent===!1?X(nr):X(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const Ue=I.stencilWrite;u.setTest(Ue),Ue&&(u.setMask(I.stencilWriteMask),u.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),u.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),G(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?D(t.SAMPLE_ALPHA_TO_COVERAGE):ne(t.SAMPLE_ALPHA_TO_COVERAGE)}function ye(I){W!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),W=I)}function R(I){I!==BS?(D(t.CULL_FACE),I!==ee&&(I===kp?t.cullFace(t.BACK):I===HS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ne(t.CULL_FACE),ee=I}function M(I){I!==L&&(N&&t.lineWidth(I),L=I)}function G(I,Se,Ee){I?(D(t.POLYGON_OFFSET_FILL),(H!==Se||z!==Ee)&&(t.polygonOffset(Se,Ee),H=Se,z=Ee)):ne(t.POLYGON_OFFSET_FILL)}function fe(I){I?D(t.SCISSOR_TEST):ne(t.SCISSOR_TEST)}function ue(I){I===void 0&&(I=t.TEXTURE0+ie-1),te!==I&&(t.activeTexture(I),te=I)}function le(I,Se,Ee){Ee===void 0&&(te===null?Ee=t.TEXTURE0+ie-1:Ee=te);let Ue=oe[Ee];Ue===void 0&&(Ue={type:void 0,texture:void 0},oe[Ee]=Ue),(Ue.type!==I||Ue.texture!==Se)&&(te!==Ee&&(t.activeTexture(Ee),te=Ee),t.bindTexture(I,Se||k[I]),Ue.type=I,Ue.texture=Se)}function be(){const I=oe[te];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function xe(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Be(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ze(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function qe(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ke(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ge(I){he.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),he.copy(I))}function Je(I){ge.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),ge.copy(I))}function vt(I,Se){let Ee=h.get(Se);Ee===void 0&&(Ee=new WeakMap,h.set(Se,Ee));let Ue=Ee.get(I);Ue===void 0&&(Ue=t.getUniformBlockIndex(Se,I.name),Ee.set(I,Ue))}function Xe(I,Se){const Ue=h.get(Se).get(I);c.get(Se)!==Ue&&(t.uniformBlockBinding(Se,Ue,I.__bindingPointIndex),c.set(Se,Ue))}function ve(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},te=null,oe={},p={},g=new WeakMap,y=[],v=null,f=!1,_=null,m=null,x=null,A=null,S=null,w=null,P=null,E=new Fe(0,0,0),T=0,U=!1,W=null,ee=null,L=null,H=null,z=null,he.set(0,0,t.canvas.width,t.canvas.height),ge.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:D,disable:ne,bindFramebuffer:J,drawBuffers:b,useProgram:q,setBlending:X,setMaterial:Me,setFlipSided:ye,setCullFace:R,setLineWidth:M,setPolygonOffset:G,setScissorTest:fe,activeTexture:ue,bindTexture:le,unbindTexture:be,compressedTexImage2D:xe,compressedTexImage3D:Ae,texImage2D:Le,texImage3D:Re,updateUBOMapping:vt,uniformBlockBinding:Xe,texStorage2D:qe,texStorage3D:ke,texSubImage2D:De,texSubImage3D:Be,compressedTexSubImage2D:ce,compressedTexSubImage3D:Ze,scissor:Ge,viewport:Je,reset:ve}}function FA(t,e,n,i,r,o,s){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return p?new OffscreenCanvas(R,M):fu("canvas")}function y(R,M,G,fe){let ue=1;if((R.width>fe||R.height>fe)&&(ue=fe/Math.max(R.width,R.height)),ue<1||M===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const le=M?sd:Math.floor,be=le(ue*R.width),xe=le(ue*R.height);h===void 0&&(h=g(be,xe));const Ae=G?g(be,xe):h;return Ae.width=be,Ae.height=xe,Ae.getContext("2d").drawImage(R,0,0,be,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+be+"x"+xe+")."),Ae}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function v(R){return _m(R.width)&&_m(R.height)}function f(R){return a?!1:R.wrapS!==Zn||R.wrapT!==Zn||R.minFilter!==sn&&R.minFilter!==In}function _(R,M){return R.generateMipmaps&&M&&R.minFilter!==sn&&R.minFilter!==In}function m(R){t.generateMipmap(R)}function x(R,M,G,fe,ue=!1){if(a===!1)return M;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let le=M;if(M===t.RED&&(G===t.FLOAT&&(le=t.R32F),G===t.HALF_FLOAT&&(le=t.R16F),G===t.UNSIGNED_BYTE&&(le=t.R8)),M===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(le=t.R8UI),G===t.UNSIGNED_SHORT&&(le=t.R16UI),G===t.UNSIGNED_INT&&(le=t.R32UI),G===t.BYTE&&(le=t.R8I),G===t.SHORT&&(le=t.R16I),G===t.INT&&(le=t.R32I)),M===t.RG&&(G===t.FLOAT&&(le=t.RG32F),G===t.HALF_FLOAT&&(le=t.RG16F),G===t.UNSIGNED_BYTE&&(le=t.RG8)),M===t.RGBA){const be=ue?au:et.getTransfer(fe);G===t.FLOAT&&(le=t.RGBA32F),G===t.HALF_FLOAT&&(le=t.RGBA16F),G===t.UNSIGNED_BYTE&&(le=be===at?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(le=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(le=t.RGB5_A1)}return(le===t.R16F||le===t.R32F||le===t.RG16F||le===t.RG32F||le===t.RGBA16F||le===t.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function A(R,M,G){return _(R,G)===!0||R.isFramebufferTexture&&R.minFilter!==sn&&R.minFilter!==In?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function S(R){return R===sn||R===Wp||R===_c?t.NEAREST:t.LINEAR}function w(R){const M=R.target;M.removeEventListener("dispose",w),E(M),M.isVideoTexture&&c.delete(M)}function P(R){const M=R.target;M.removeEventListener("dispose",P),U(M)}function E(R){const M=i.get(R);if(M.__webglInit===void 0)return;const G=R.source,fe=d.get(G);if(fe){const ue=fe[M.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&T(R),Object.keys(fe).length===0&&d.delete(G)}i.remove(R)}function T(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const G=R.source,fe=d.get(G);delete fe[M.__cacheKey],s.memory.textures--}function U(R){const M=R.texture,G=i.get(R),fe=i.get(M);if(fe.__webglTexture!==void 0&&(t.deleteTexture(fe.__webglTexture),s.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(G.__webglFramebuffer[ue]))for(let le=0;le<G.__webglFramebuffer[ue].length;le++)t.deleteFramebuffer(G.__webglFramebuffer[ue][le]);else t.deleteFramebuffer(G.__webglFramebuffer[ue]);G.__webglDepthbuffer&&t.deleteRenderbuffer(G.__webglDepthbuffer[ue])}else{if(Array.isArray(G.__webglFramebuffer))for(let ue=0;ue<G.__webglFramebuffer.length;ue++)t.deleteFramebuffer(G.__webglFramebuffer[ue]);else t.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&t.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&t.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ue=0;ue<G.__webglColorRenderbuffer.length;ue++)G.__webglColorRenderbuffer[ue]&&t.deleteRenderbuffer(G.__webglColorRenderbuffer[ue]);G.__webglDepthRenderbuffer&&t.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ue=0,le=M.length;ue<le;ue++){const be=i.get(M[ue]);be.__webglTexture&&(t.deleteTexture(be.__webglTexture),s.memory.textures--),i.remove(M[ue])}i.remove(M),i.remove(R)}let W=0;function ee(){W=0}function L(){const R=W;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),W+=1,R}function H(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function z(R,M){const G=i.get(R);if(R.isVideoTexture&&Me(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const fe=R.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(G,R,M);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+M)}function ie(R,M){const G=i.get(R);if(R.version>0&&G.__version!==R.version){he(G,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+M)}function N(R,M){const G=i.get(R);if(R.version>0&&G.__version!==R.version){he(G,R,M);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+M)}function F(R,M){const G=i.get(R);if(R.version>0&&G.__version!==R.version){ge(G,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+M)}const V={[Vr]:t.REPEAT,[Zn]:t.CLAMP_TO_EDGE,[nd]:t.MIRRORED_REPEAT},te={[sn]:t.NEAREST,[Wp]:t.NEAREST_MIPMAP_NEAREST,[_c]:t.NEAREST_MIPMAP_LINEAR,[In]:t.LINEAR,[yE]:t.LINEAR_MIPMAP_NEAREST,[fa]:t.LINEAR_MIPMAP_LINEAR},oe={[LE]:t.NEVER,[FE]:t.ALWAYS,[DE]:t.LESS,[o_]:t.LEQUAL,[IE]:t.EQUAL,[OE]:t.GEQUAL,[NE]:t.GREATER,[UE]:t.NOTEQUAL};function Y(R,M,G){if(G?(t.texParameteri(R,t.TEXTURE_WRAP_S,V[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,V[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,V[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,te[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,te[M.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==Zn||M.wrapT!==Zn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,S(M.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,S(M.minFilter)),M.minFilter!==sn&&M.minFilter!==In&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,oe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const fe=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===sn||M.minFilter!==_c&&M.minFilter!==fa||M.type===ji&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===da&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(R,fe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function re(R,M){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",w));const fe=M.source;let ue=d.get(fe);ue===void 0&&(ue={},d.set(fe,ue));const le=H(M);if(le!==R.__cacheKey){ue[le]===void 0&&(ue[le]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,G=!0),ue[le].usedTimes++;const be=ue[R.__cacheKey];be!==void 0&&(ue[R.__cacheKey].usedTimes--,be.usedTimes===0&&T(M)),R.__cacheKey=le,R.__webglTexture=ue[le].texture}return G}function he(R,M,G){let fe=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(fe=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(fe=t.TEXTURE_3D);const ue=re(R,M),le=M.source;n.bindTexture(fe,R.__webglTexture,t.TEXTURE0+G);const be=i.get(le);if(le.version!==be.__version||ue===!0){n.activeTexture(t.TEXTURE0+G);const xe=et.getPrimaries(et.workingColorSpace),Ae=M.colorSpace===On?null:et.getPrimaries(M.colorSpace),De=M.colorSpace===On||xe===Ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const Be=f(M)&&v(M.image)===!1;let ce=y(M.image,Be,!1,r.maxTextureSize);ce=ye(M,ce);const Ze=v(ce)||a,qe=o.convert(M.format,M.colorSpace);let ke=o.convert(M.type),Le=x(M.internalFormat,qe,ke,M.colorSpace,M.isVideoTexture);Y(fe,M,Ze);let Re;const Ge=M.mipmaps,Je=a&&M.isVideoTexture!==!0&&Le!==n_,vt=be.__version===void 0||ue===!0,Xe=A(M,ce,Ze);if(M.isDepthTexture)Le=t.DEPTH_COMPONENT,a?M.type===ji?Le=t.DEPTH_COMPONENT32F:M.type===Xi?Le=t.DEPTH_COMPONENT24:M.type===Ur?Le=t.DEPTH24_STENCIL8:Le=t.DEPTH_COMPONENT16:M.type===ji&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Or&&Le===t.DEPTH_COMPONENT&&M.type!==fh&&M.type!==Xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Xi,ke=o.convert(M.type)),M.format===ns&&Le===t.DEPTH_COMPONENT&&(Le=t.DEPTH_STENCIL,M.type!==Ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Ur,ke=o.convert(M.type))),vt&&(Je?n.texStorage2D(t.TEXTURE_2D,1,Le,ce.width,ce.height):n.texImage2D(t.TEXTURE_2D,0,Le,ce.width,ce.height,0,qe,ke,null));else if(M.isDataTexture)if(Ge.length>0&&Ze){Je&&vt&&n.texStorage2D(t.TEXTURE_2D,Xe,Le,Ge[0].width,Ge[0].height);for(let ve=0,I=Ge.length;ve<I;ve++)Re=Ge[ve],Je?n.texSubImage2D(t.TEXTURE_2D,ve,0,0,Re.width,Re.height,qe,ke,Re.data):n.texImage2D(t.TEXTURE_2D,ve,Le,Re.width,Re.height,0,qe,ke,Re.data);M.generateMipmaps=!1}else Je?(vt&&n.texStorage2D(t.TEXTURE_2D,Xe,Le,ce.width,ce.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce.width,ce.height,qe,ke,ce.data)):n.texImage2D(t.TEXTURE_2D,0,Le,ce.width,ce.height,0,qe,ke,ce.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Je&&vt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Xe,Le,Ge[0].width,Ge[0].height,ce.depth);for(let ve=0,I=Ge.length;ve<I;ve++)Re=Ge[ve],M.format!==Jn?qe!==null?Je?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ve,0,0,0,Re.width,Re.height,ce.depth,qe,Re.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ve,Le,Re.width,Re.height,ce.depth,0,Re.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ve,0,0,0,Re.width,Re.height,ce.depth,qe,ke,Re.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ve,Le,Re.width,Re.height,ce.depth,0,qe,ke,Re.data)}else{Je&&vt&&n.texStorage2D(t.TEXTURE_2D,Xe,Le,Ge[0].width,Ge[0].height);for(let ve=0,I=Ge.length;ve<I;ve++)Re=Ge[ve],M.format!==Jn?qe!==null?Je?n.compressedTexSubImage2D(t.TEXTURE_2D,ve,0,0,Re.width,Re.height,qe,Re.data):n.compressedTexImage2D(t.TEXTURE_2D,ve,Le,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?n.texSubImage2D(t.TEXTURE_2D,ve,0,0,Re.width,Re.height,qe,ke,Re.data):n.texImage2D(t.TEXTURE_2D,ve,Le,Re.width,Re.height,0,qe,ke,Re.data)}else if(M.isDataArrayTexture)Je?(vt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Xe,Le,ce.width,ce.height,ce.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,qe,ke,ce.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,ce.width,ce.height,ce.depth,0,qe,ke,ce.data);else if(M.isData3DTexture)Je?(vt&&n.texStorage3D(t.TEXTURE_3D,Xe,Le,ce.width,ce.height,ce.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,qe,ke,ce.data)):n.texImage3D(t.TEXTURE_3D,0,Le,ce.width,ce.height,ce.depth,0,qe,ke,ce.data);else if(M.isFramebufferTexture){if(vt)if(Je)n.texStorage2D(t.TEXTURE_2D,Xe,Le,ce.width,ce.height);else{let ve=ce.width,I=ce.height;for(let Se=0;Se<Xe;Se++)n.texImage2D(t.TEXTURE_2D,Se,Le,ve,I,0,qe,ke,null),ve>>=1,I>>=1}}else if(Ge.length>0&&Ze){Je&&vt&&n.texStorage2D(t.TEXTURE_2D,Xe,Le,Ge[0].width,Ge[0].height);for(let ve=0,I=Ge.length;ve<I;ve++)Re=Ge[ve],Je?n.texSubImage2D(t.TEXTURE_2D,ve,0,0,qe,ke,Re):n.texImage2D(t.TEXTURE_2D,ve,Le,qe,ke,Re);M.generateMipmaps=!1}else Je?(vt&&n.texStorage2D(t.TEXTURE_2D,Xe,Le,ce.width,ce.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,qe,ke,ce)):n.texImage2D(t.TEXTURE_2D,0,Le,qe,ke,ce);_(M,Ze)&&m(fe),be.__version=le.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ge(R,M,G){if(M.image.length!==6)return;const fe=re(R,M),ue=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+G);const le=i.get(ue);if(ue.version!==le.__version||fe===!0){n.activeTexture(t.TEXTURE0+G);const be=et.getPrimaries(et.workingColorSpace),xe=M.colorSpace===On?null:et.getPrimaries(M.colorSpace),Ae=M.colorSpace===On||be===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const De=M.isCompressedTexture||M.image[0].isCompressedTexture,Be=M.image[0]&&M.image[0].isDataTexture,ce=[];for(let ve=0;ve<6;ve++)!De&&!Be?ce[ve]=y(M.image[ve],!1,!0,r.maxCubemapSize):ce[ve]=Be?M.image[ve].image:M.image[ve],ce[ve]=ye(M,ce[ve]);const Ze=ce[0],qe=v(Ze)||a,ke=o.convert(M.format,M.colorSpace),Le=o.convert(M.type),Re=x(M.internalFormat,ke,Le,M.colorSpace),Ge=a&&M.isVideoTexture!==!0,Je=le.__version===void 0||fe===!0;let vt=A(M,Ze,qe);Y(t.TEXTURE_CUBE_MAP,M,qe);let Xe;if(De){Ge&&Je&&n.texStorage2D(t.TEXTURE_CUBE_MAP,vt,Re,Ze.width,Ze.height);for(let ve=0;ve<6;ve++){Xe=ce[ve].mipmaps;for(let I=0;I<Xe.length;I++){const Se=Xe[I];M.format!==Jn?ke!==null?Ge?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,I,0,0,Se.width,Se.height,ke,Se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,I,Re,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,I,0,0,Se.width,Se.height,ke,Le,Se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,I,Re,Se.width,Se.height,0,ke,Le,Se.data)}}}else{Xe=M.mipmaps,Ge&&Je&&(Xe.length>0&&vt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,vt,Re,ce[0].width,ce[0].height));for(let ve=0;ve<6;ve++)if(Be){Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,ce[ve].width,ce[ve].height,ke,Le,ce[ve].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Re,ce[ve].width,ce[ve].height,0,ke,Le,ce[ve].data);for(let I=0;I<Xe.length;I++){const Ee=Xe[I].image[ve].image;Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,I+1,0,0,Ee.width,Ee.height,ke,Le,Ee.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,I+1,Re,Ee.width,Ee.height,0,ke,Le,Ee.data)}}else{Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,ke,Le,ce[ve]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Re,ke,Le,ce[ve]);for(let I=0;I<Xe.length;I++){const Se=Xe[I];Ge?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,I+1,0,0,ke,Le,Se.image[ve]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,I+1,Re,ke,Le,Se.image[ve])}}}_(M,qe)&&m(t.TEXTURE_CUBE_MAP),le.__version=ue.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function pe(R,M,G,fe,ue,le){const be=o.convert(G.format,G.colorSpace),xe=o.convert(G.type),Ae=x(G.internalFormat,be,xe,G.colorSpace);if(!i.get(M).__hasExternalTextures){const Be=Math.max(1,M.width>>le),ce=Math.max(1,M.height>>le);ue===t.TEXTURE_3D||ue===t.TEXTURE_2D_ARRAY?n.texImage3D(ue,le,Ae,Be,ce,M.depth,0,be,xe,null):n.texImage2D(ue,le,Ae,Be,ce,0,be,xe,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),X(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,fe,ue,i.get(G).__webglTexture,0,K(M)):(ue===t.TEXTURE_2D||ue>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,fe,ue,i.get(G).__webglTexture,le),n.bindFramebuffer(t.FRAMEBUFFER,null)}function k(R,M,G){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer&&!M.stencilBuffer){let fe=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(G||X(M)){const ue=M.depthTexture;ue&&ue.isDepthTexture&&(ue.type===ji?fe=t.DEPTH_COMPONENT32F:ue.type===Xi&&(fe=t.DEPTH_COMPONENT24));const le=K(M);X(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,fe,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,le,fe,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,fe,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(M.depthBuffer&&M.stencilBuffer){const fe=K(M);G&&X(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,t.DEPTH24_STENCIL8,M.width,M.height):X(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const fe=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ue=0;ue<fe.length;ue++){const le=fe[ue],be=o.convert(le.format,le.colorSpace),xe=o.convert(le.type),Ae=x(le.internalFormat,be,xe,le.colorSpace),De=K(M);G&&X(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,De,Ae,M.width,M.height):X(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,De,Ae,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Ae,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function D(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),z(M.depthTexture,0);const fe=i.get(M.depthTexture).__webglTexture,ue=K(M);if(M.depthTexture.format===Or)X(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,fe,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,fe,0);else if(M.depthTexture.format===ns)X(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,fe,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function ne(R){const M=i.get(R),G=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");D(M.__webglFramebuffer,R)}else if(G){M.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[fe]),M.__webglDepthbuffer[fe]=t.createRenderbuffer(),k(M.__webglDepthbuffer[fe],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),k(M.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function J(R,M,G){const fe=i.get(R);M!==void 0&&pe(fe.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&ne(R)}function b(R){const M=R.texture,G=i.get(R),fe=i.get(M);R.addEventListener("dispose",P),R.isWebGLMultipleRenderTargets!==!0&&(fe.__webglTexture===void 0&&(fe.__webglTexture=t.createTexture()),fe.__version=M.version,s.memory.textures++);const ue=R.isWebGLCubeRenderTarget===!0,le=R.isWebGLMultipleRenderTargets===!0,be=v(R)||a;if(ue){G.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(a&&M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[xe]=[];for(let Ae=0;Ae<M.mipmaps.length;Ae++)G.__webglFramebuffer[xe][Ae]=t.createFramebuffer()}else G.__webglFramebuffer[xe]=t.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let xe=0;xe<M.mipmaps.length;xe++)G.__webglFramebuffer[xe]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(le)if(r.drawBuffers){const xe=R.texture;for(let Ae=0,De=xe.length;Ae<De;Ae++){const Be=i.get(xe[Ae]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&X(R)===!1){const xe=le?M:[M];G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Ae=0;Ae<xe.length;Ae++){const De=xe[Ae];G.__webglColorRenderbuffer[Ae]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[Ae]);const Be=o.convert(De.format,De.colorSpace),ce=o.convert(De.type),Ze=x(De.internalFormat,Be,ce,De.colorSpace,R.isXRRenderTarget===!0),qe=K(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,qe,Ze,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,G.__webglColorRenderbuffer[Ae])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),k(G.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ue){n.bindTexture(t.TEXTURE_CUBE_MAP,fe.__webglTexture),Y(t.TEXTURE_CUBE_MAP,M,be);for(let xe=0;xe<6;xe++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let Ae=0;Ae<M.mipmaps.length;Ae++)pe(G.__webglFramebuffer[xe][Ae],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ae);else pe(G.__webglFramebuffer[xe],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);_(M,be)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(le){const xe=R.texture;for(let Ae=0,De=xe.length;Ae<De;Ae++){const Be=xe[Ae],ce=i.get(Be);n.bindTexture(t.TEXTURE_2D,ce.__webglTexture),Y(t.TEXTURE_2D,Be,be),pe(G.__webglFramebuffer,R,Be,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,0),_(Be,be)&&m(t.TEXTURE_2D)}n.unbindTexture()}else{let xe=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?xe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(xe,fe.__webglTexture),Y(xe,M,be),a&&M.mipmaps&&M.mipmaps.length>0)for(let Ae=0;Ae<M.mipmaps.length;Ae++)pe(G.__webglFramebuffer[Ae],R,M,t.COLOR_ATTACHMENT0,xe,Ae);else pe(G.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,xe,0);_(M,be)&&m(xe),n.unbindTexture()}R.depthBuffer&&ne(R)}function q(R){const M=v(R)||a,G=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let fe=0,ue=G.length;fe<ue;fe++){const le=G[fe];if(_(le,M)){const be=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,xe=i.get(le).__webglTexture;n.bindTexture(be,xe),m(be),n.unbindTexture()}}}function j(R){if(a&&R.samples>0&&X(R)===!1){const M=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],G=R.width,fe=R.height;let ue=t.COLOR_BUFFER_BIT;const le=[],be=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=i.get(R),Ae=R.isWebGLMultipleRenderTargets===!0;if(Ae)for(let De=0;De<M.length;De++)n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let De=0;De<M.length;De++){le.push(t.COLOR_ATTACHMENT0+De),R.depthBuffer&&le.push(be);const Be=xe.__ignoreDepthValues!==void 0?xe.__ignoreDepthValues:!1;if(Be===!1&&(R.depthBuffer&&(ue|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ue|=t.STENCIL_BUFFER_BIT)),Ae&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,xe.__webglColorRenderbuffer[De]),Be===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[be]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[be])),Ae){const ce=i.get(M[De]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ce,0)}t.blitFramebuffer(0,0,G,fe,0,0,G,fe,ue,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,le)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Ae)for(let De=0;De<M.length;De++){n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.RENDERBUFFER,xe.__webglColorRenderbuffer[De]);const Be=i.get(M[De]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.TEXTURE_2D,Be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}}function K(R){return Math.min(r.maxSamples,R.samples)}function X(R){const M=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Me(R){const M=s.render.frame;c.get(R)!==M&&(c.set(R,M),R.update())}function ye(R,M){const G=R.colorSpace,fe=R.format,ue=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===rd||G!==Li&&G!==On&&(et.getTransfer(G)===at?a===!1?e.has("EXT_sRGB")===!0&&fe===Jn?(R.format=rd,R.minFilter=In,R.generateMipmaps=!1):M=a_.sRGBToLinear(M):(fe!==Jn||ue!==rr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}this.allocateTextureUnit=L,this.resetTextureUnits=ee,this.setTexture2D=z,this.setTexture2DArray=ie,this.setTexture3D=N,this.setTextureCube=F,this.rebindTextures=J,this.setupRenderTarget=b,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=X}function kA(t,e,n){const i=n.isWebGL2;function r(o,s=On){let a;const l=et.getTransfer(s);if(o===rr)return t.UNSIGNED_BYTE;if(o===Zv)return t.UNSIGNED_SHORT_4_4_4_4;if(o===Jv)return t.UNSIGNED_SHORT_5_5_5_1;if(o===xE)return t.BYTE;if(o===SE)return t.SHORT;if(o===fh)return t.UNSIGNED_SHORT;if(o===Kv)return t.INT;if(o===Xi)return t.UNSIGNED_INT;if(o===ji)return t.FLOAT;if(o===da)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===EE)return t.ALPHA;if(o===Jn)return t.RGBA;if(o===ME)return t.LUMINANCE;if(o===wE)return t.LUMINANCE_ALPHA;if(o===Or)return t.DEPTH_COMPONENT;if(o===ns)return t.DEPTH_STENCIL;if(o===rd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===TE)return t.RED;if(o===Qv)return t.RED_INTEGER;if(o===AE)return t.RG;if(o===e_)return t.RG_INTEGER;if(o===t_)return t.RGBA_INTEGER;if(o===yc||o===xc||o===Sc||o===Ec)if(l===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===yc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===xc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Sc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Ec)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===yc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===xc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Sc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Ec)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Xp||o===jp||o===Yp||o===qp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===Xp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===jp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Yp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===qp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===n_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===$p||o===Kp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===$p)return l===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===Kp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Zp||o===Jp||o===Qp||o===em||o===tm||o===nm||o===im||o===rm||o===om||o===sm||o===am||o===lm||o===um||o===cm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===Zp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Jp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Qp)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===em)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===tm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===nm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===im)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===rm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===om)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===sm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===am)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===lm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===um)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===cm)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Mc||o===fm||o===dm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===Mc)return l===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===fm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===dm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===RE||o===hm||o===pm||o===mm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===Mc)return a.COMPRESSED_RED_RGTC1_EXT;if(o===hm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===pm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===mm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Ur?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:r}}class zA extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Lr extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BA={type:"move"};class qc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const y of e.hand.values()){const v=n.getJointPose(y,i),f=this._getHandJoint(u,y);v!==null&&(f.matrix.fromArray(v.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=v.radius),f.visible=v!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=c.position.distanceTo(h.position),p=.02,g=.005;u.inputState.pinching&&d>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(BA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Lr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class HA extends cs{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,u=null,c=null,h=null,d=null,p=null,g=null;const y=n.getContextAttributes();let v=null,f=null;const _=[],m=[],x=new me;let A=null;const S=new Un;S.layers.enable(1),S.viewport=new Ot;const w=new Un;w.layers.enable(2),w.viewport=new Ot;const P=[S,w],E=new zA;E.layers.enable(1),E.layers.enable(2);let T=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let re=_[Y];return re===void 0&&(re=new qc,_[Y]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Y){let re=_[Y];return re===void 0&&(re=new qc,_[Y]=re),re.getGripSpace()},this.getHand=function(Y){let re=_[Y];return re===void 0&&(re=new qc,_[Y]=re),re.getHandSpace()};function W(Y){const re=m.indexOf(Y.inputSource);if(re===-1)return;const he=_[re];he!==void 0&&(he.update(Y.inputSource,Y.frame,u||s),he.dispatchEvent({type:Y.type,data:Y.inputSource}))}function ee(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",L);for(let Y=0;Y<_.length;Y++){const re=m[Y];re!==null&&(m[Y]=null,_[Y].disconnect(re))}T=null,U=null,e.setRenderTarget(v),p=null,d=null,h=null,r=null,f=null,oe.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(x.width,x.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(Y){u=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",L),y.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(x),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const re={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Wr(p.framebufferWidth,p.framebufferHeight,{format:Jn,type:rr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let re=null,he=null,ge=null;y.depth&&(ge=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=y.stencil?ns:Or,he=y.stencil?Ur:Xi);const pe={colorFormat:n.RGBA8,depthFormat:ge,scaleFactor:o};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(pe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new Wr(d.textureWidth,d.textureHeight,{format:Jn,type:rr,depthTexture:new S_(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const k=e.properties.get(f);k.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(a),oe.setContext(r),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(Y){for(let re=0;re<Y.removed.length;re++){const he=Y.removed[re],ge=m.indexOf(he);ge>=0&&(m[ge]=null,_[ge].disconnect(he))}for(let re=0;re<Y.added.length;re++){const he=Y.added[re];let ge=m.indexOf(he);if(ge===-1){for(let k=0;k<_.length;k++)if(k>=m.length){m.push(he),ge=k;break}else if(m[k]===null){m[k]=he,ge=k;break}if(ge===-1)break}const pe=_[ge];pe&&pe.connect(he)}}const H=new O,z=new O;function ie(Y,re,he){H.setFromMatrixPosition(re.matrixWorld),z.setFromMatrixPosition(he.matrixWorld);const ge=H.distanceTo(z),pe=re.projectionMatrix.elements,k=he.projectionMatrix.elements,D=pe[14]/(pe[10]-1),ne=pe[14]/(pe[10]+1),J=(pe[9]+1)/pe[5],b=(pe[9]-1)/pe[5],q=(pe[8]-1)/pe[0],j=(k[8]+1)/k[0],K=D*q,X=D*j,Me=ge/(-q+j),ye=Me*-q;re.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ye),Y.translateZ(Me),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const R=D+Me,M=ne+Me,G=K-ye,fe=X+(ge-ye),ue=J*ne/M*R,le=b*ne/M*R;Y.projectionMatrix.makePerspective(G,fe,ue,le,R,M),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function N(Y,re){re===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(re.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;E.near=w.near=S.near=Y.near,E.far=w.far=S.far=Y.far,(T!==E.near||U!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),T=E.near,U=E.far);const re=Y.parent,he=E.cameras;N(E,re);for(let ge=0;ge<he.length;ge++)N(he[ge],re);he.length===2?ie(E,S,w):E.projectionMatrix.copy(S.projectionMatrix),F(Y,E,re)};function F(Y,re,he){he===null?Y.matrix.copy(re.matrixWorld):(Y.matrix.copy(he.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(re.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(re.projectionMatrix),Y.projectionMatrixInverse.copy(re.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=od*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)};let V=null;function te(Y,re){if(c=re.getViewerPose(u||s),g=re,c!==null){const he=c.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let ge=!1;he.length!==E.cameras.length&&(E.cameras.length=0,ge=!0);for(let pe=0;pe<he.length;pe++){const k=he[pe];let D=null;if(p!==null)D=p.getViewport(k);else{const J=h.getViewSubImage(d,k);D=J.viewport,pe===0&&(e.setRenderTargetTextures(f,J.colorTexture,d.ignoreDepthValues?void 0:J.depthStencilTexture),e.setRenderTarget(f))}let ne=P[pe];ne===void 0&&(ne=new Un,ne.layers.enable(pe),ne.viewport=new Ot,P[pe]=ne),ne.matrix.fromArray(k.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(k.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(D.x,D.y,D.width,D.height),pe===0&&(E.matrix.copy(ne.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ge===!0&&E.cameras.push(ne)}}for(let he=0;he<_.length;he++){const ge=m[he],pe=_[he];ge!==null&&pe!==void 0&&pe.update(ge,re,u||s)}V&&V(Y,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),g=null}const oe=new y_;oe.setAnimationLoop(te),this.setAnimationLoop=function(Y){V=Y},this.dispose=function(){}}}function GA(t,e){function n(v,f){v.matrixAutoUpdate===!0&&v.updateMatrix(),f.value.copy(v.matrix)}function i(v,f){f.color.getRGB(v.fogColor.value,g_(t)),f.isFog?(v.fogNear.value=f.near,v.fogFar.value=f.far):f.isFogExp2&&(v.fogDensity.value=f.density)}function r(v,f,_,m,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(v,f):f.isMeshToonMaterial?(o(v,f),h(v,f)):f.isMeshPhongMaterial?(o(v,f),c(v,f)):f.isMeshStandardMaterial?(o(v,f),d(v,f),f.isMeshPhysicalMaterial&&p(v,f,x)):f.isMeshMatcapMaterial?(o(v,f),g(v,f)):f.isMeshDepthMaterial?o(v,f):f.isMeshDistanceMaterial?(o(v,f),y(v,f)):f.isMeshNormalMaterial?o(v,f):f.isLineBasicMaterial?(s(v,f),f.isLineDashedMaterial&&a(v,f)):f.isPointsMaterial?l(v,f,_,m):f.isSpriteMaterial?u(v,f):f.isShadowMaterial?(v.color.value.copy(f.color),v.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(v,f){v.opacity.value=f.opacity,f.color&&v.diffuse.value.copy(f.color),f.emissive&&v.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(v.map.value=f.map,n(f.map,v.mapTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.bumpMap&&(v.bumpMap.value=f.bumpMap,n(f.bumpMap,v.bumpMapTransform),v.bumpScale.value=f.bumpScale,f.side===vn&&(v.bumpScale.value*=-1)),f.normalMap&&(v.normalMap.value=f.normalMap,n(f.normalMap,v.normalMapTransform),v.normalScale.value.copy(f.normalScale),f.side===vn&&v.normalScale.value.negate()),f.displacementMap&&(v.displacementMap.value=f.displacementMap,n(f.displacementMap,v.displacementMapTransform),v.displacementScale.value=f.displacementScale,v.displacementBias.value=f.displacementBias),f.emissiveMap&&(v.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,v.emissiveMapTransform)),f.specularMap&&(v.specularMap.value=f.specularMap,n(f.specularMap,v.specularMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest);const _=e.get(f).envMap;if(_&&(v.envMap.value=_,v.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=f.reflectivity,v.ior.value=f.ior,v.refractionRatio.value=f.refractionRatio),f.lightMap){v.lightMap.value=f.lightMap;const m=t._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=f.lightMapIntensity*m,n(f.lightMap,v.lightMapTransform)}f.aoMap&&(v.aoMap.value=f.aoMap,v.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,v.aoMapTransform))}function s(v,f){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,f.map&&(v.map.value=f.map,n(f.map,v.mapTransform))}function a(v,f){v.dashSize.value=f.dashSize,v.totalSize.value=f.dashSize+f.gapSize,v.scale.value=f.scale}function l(v,f,_,m){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,v.size.value=f.size*_,v.scale.value=m*.5,f.map&&(v.map.value=f.map,n(f.map,v.uvTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest)}function u(v,f){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,v.rotation.value=f.rotation,f.map&&(v.map.value=f.map,n(f.map,v.mapTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest)}function c(v,f){v.specular.value.copy(f.specular),v.shininess.value=Math.max(f.shininess,1e-4)}function h(v,f){f.gradientMap&&(v.gradientMap.value=f.gradientMap)}function d(v,f){v.metalness.value=f.metalness,f.metalnessMap&&(v.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,v.metalnessMapTransform)),v.roughness.value=f.roughness,f.roughnessMap&&(v.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,v.roughnessMapTransform)),e.get(f).envMap&&(v.envMapIntensity.value=f.envMapIntensity)}function p(v,f,_){v.ior.value=f.ior,f.sheen>0&&(v.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),v.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(v.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,v.sheenColorMapTransform)),f.sheenRoughnessMap&&(v.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,v.sheenRoughnessMapTransform))),f.clearcoat>0&&(v.clearcoat.value=f.clearcoat,v.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(v.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,v.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(v.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===vn&&v.clearcoatNormalScale.value.negate())),f.iridescence>0&&(v.iridescence.value=f.iridescence,v.iridescenceIOR.value=f.iridescenceIOR,v.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(v.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,v.iridescenceMapTransform)),f.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),f.transmission>0&&(v.transmission.value=f.transmission,v.transmissionSamplerMap.value=_.texture,v.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(v.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,v.transmissionMapTransform)),v.thickness.value=f.thickness,f.thicknessMap&&(v.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=f.attenuationDistance,v.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(v.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(v.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=f.specularIntensity,v.specularColor.value.copy(f.specularColor),f.specularColorMap&&(v.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,v.specularColorMapTransform)),f.specularIntensityMap&&(v.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,v.specularIntensityMapTransform))}function g(v,f){f.matcap&&(v.matcap.value=f.matcap)}function y(v,f){const _=e.get(f).light;v.referencePosition.value.setFromMatrixPosition(_.matrixWorld),v.nearDistance.value=_.shadow.camera.near,v.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function VA(t,e,n,i){let r={},o={},s=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,m){const x=m.program;i.uniformBlockBinding(_,x)}function u(_,m){let x=r[_.id];x===void 0&&(g(_),x=c(_),r[_.id]=x,_.addEventListener("dispose",v));const A=m.program;i.updateUBOMapping(_,A);const S=e.render.frame;o[_.id]!==S&&(d(_),o[_.id]=S)}function c(_){const m=h();_.__bindingPointIndex=m;const x=t.createBuffer(),A=_.__size,S=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,A,S),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,m,x),x}function h(){for(let _=0;_<a;_++)if(s.indexOf(_)===-1)return s.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const m=r[_.id],x=_.uniforms,A=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,m);for(let S=0,w=x.length;S<w;S++){const P=Array.isArray(x[S])?x[S]:[x[S]];for(let E=0,T=P.length;E<T;E++){const U=P[E];if(p(U,S,E,A)===!0){const W=U.__offset,ee=Array.isArray(U.value)?U.value:[U.value];let L=0;for(let H=0;H<ee.length;H++){const z=ee[H],ie=y(z);typeof z=="number"||typeof z=="boolean"?(U.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,W+L,U.__data)):z.isMatrix3?(U.__data[0]=z.elements[0],U.__data[1]=z.elements[1],U.__data[2]=z.elements[2],U.__data[3]=0,U.__data[4]=z.elements[3],U.__data[5]=z.elements[4],U.__data[6]=z.elements[5],U.__data[7]=0,U.__data[8]=z.elements[6],U.__data[9]=z.elements[7],U.__data[10]=z.elements[8],U.__data[11]=0):(z.toArray(U.__data,L),L+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,U.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,m,x,A){const S=_.value,w=m+"_"+x;if(A[w]===void 0)return typeof S=="number"||typeof S=="boolean"?A[w]=S:A[w]=S.clone(),!0;{const P=A[w];if(typeof S=="number"||typeof S=="boolean"){if(P!==S)return A[w]=S,!0}else if(P.equals(S)===!1)return P.copy(S),!0}return!1}function g(_){const m=_.uniforms;let x=0;const A=16;for(let w=0,P=m.length;w<P;w++){const E=Array.isArray(m[w])?m[w]:[m[w]];for(let T=0,U=E.length;T<U;T++){const W=E[T],ee=Array.isArray(W.value)?W.value:[W.value];for(let L=0,H=ee.length;L<H;L++){const z=ee[L],ie=y(z),N=x%A;N!==0&&A-N<ie.boundary&&(x+=A-N),W.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=x,x+=ie.storage}}}const S=x%A;return S>0&&(x+=A-S),_.__size=x,_.__cache={},this}function y(_){const m={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(m.boundary=4,m.storage=4):_.isVector2?(m.boundary=8,m.storage=8):_.isVector3||_.isColor?(m.boundary=16,m.storage=12):_.isVector4?(m.boundary=16,m.storage=16):_.isMatrix3?(m.boundary=48,m.storage=48):_.isMatrix4?(m.boundary=64,m.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),m}function v(_){const m=_.target;m.removeEventListener("dispose",v);const x=s.indexOf(m.__bindingPointIndex);s.splice(x,1),t.deleteBuffer(r[m.id]),delete r[m.id],delete o[m.id]}function f(){for(const _ in r)t.deleteBuffer(r[_]);s=[],r={},o={}}return{bind:l,update:u,dispose:f}}class R_{constructor(e={}){const{canvas:n=zE(),context:i=null,depth:r=!0,stencil:o=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=s;const p=new Uint32Array(4),g=new Int32Array(4);let y=null,v=null;const f=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gt,this._useLegacyLights=!1,this.toneMapping=ir,this.toneMappingExposure=1;const m=this;let x=!1,A=0,S=0,w=null,P=-1,E=null;const T=new Ot,U=new Ot;let W=null;const ee=new Fe(0);let L=0,H=n.width,z=n.height,ie=1,N=null,F=null;const V=new Ot(0,0,H,z),te=new Ot(0,0,H,z);let oe=!1;const Y=new hh;let re=!1,he=!1,ge=null;const pe=new xt,k=new me,D=new O,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function J(){return w===null?ie:1}let b=i;function q(C,B){for(let Z=0;Z<C.length;Z++){const Q=C[Z],$=n.getContext(Q,B);if($!==null)return $}return null}try{const C={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ch}`),n.addEventListener("webglcontextlost",ve,!1),n.addEventListener("webglcontextrestored",I,!1),n.addEventListener("webglcontextcreationerror",Se,!1),b===null){const B=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&B.shift(),b=q(B,C),b===null)throw q(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&b instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),b.getShaderPrecisionFormat===void 0&&(b.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let j,K,X,Me,ye,R,M,G,fe,ue,le,be,xe,Ae,De,Be,ce,Ze,qe,ke,Le,Re,Ge,Je;function vt(){j=new Q1(b),K=new Y1(b,j,e),j.init(K),Re=new kA(b,j,K),X=new OA(b,j,K),Me=new nT(b),ye=new EA,R=new FA(b,j,X,ye,K,Re,Me),M=new $1(m),G=new J1(m),fe=new cM(b,K),Ge=new X1(b,j,fe,K),ue=new eT(b,fe,Me,Ge),le=new sT(b,ue,fe,Me),qe=new oT(b,K,R),Be=new q1(ye),be=new SA(m,M,G,j,K,Ge,Be),xe=new GA(m,ye),Ae=new wA,De=new PA(j,K),Ze=new W1(m,M,G,X,le,d,l),ce=new UA(m,le,K),Je=new VA(b,Me,K,X),ke=new j1(b,j,Me,K),Le=new tT(b,j,Me,K),Me.programs=be.programs,m.capabilities=K,m.extensions=j,m.properties=ye,m.renderLists=Ae,m.shadowMap=ce,m.state=X,m.info=Me}vt();const Xe=new HA(m,b);this.xr=Xe,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const C=j.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=j.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(C){C!==void 0&&(ie=C,this.setSize(H,z,!1))},this.getSize=function(C){return C.set(H,z)},this.setSize=function(C,B,Z=!0){if(Xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=C,z=B,n.width=Math.floor(C*ie),n.height=Math.floor(B*ie),Z===!0&&(n.style.width=C+"px",n.style.height=B+"px"),this.setViewport(0,0,C,B)},this.getDrawingBufferSize=function(C){return C.set(H*ie,z*ie).floor()},this.setDrawingBufferSize=function(C,B,Z){H=C,z=B,ie=Z,n.width=Math.floor(C*Z),n.height=Math.floor(B*Z),this.setViewport(0,0,C,B)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(V)},this.setViewport=function(C,B,Z,Q){C.isVector4?V.set(C.x,C.y,C.z,C.w):V.set(C,B,Z,Q),X.viewport(T.copy(V).multiplyScalar(ie).floor())},this.getScissor=function(C){return C.copy(te)},this.setScissor=function(C,B,Z,Q){C.isVector4?te.set(C.x,C.y,C.z,C.w):te.set(C,B,Z,Q),X.scissor(U.copy(te).multiplyScalar(ie).floor())},this.getScissorTest=function(){return oe},this.setScissorTest=function(C){X.setScissorTest(oe=C)},this.setOpaqueSort=function(C){N=C},this.setTransparentSort=function(C){F=C},this.getClearColor=function(C){return C.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(C=!0,B=!0,Z=!0){let Q=0;if(C){let $=!1;if(w!==null){const we=w.texture.format;$=we===t_||we===e_||we===Qv}if($){const we=w.texture.type,Pe=we===rr||we===Xi||we===fh||we===Ur||we===Zv||we===Jv,Ne=Ze.getClearColor(),Oe=Ze.getClearAlpha(),We=Ne.r,ze=Ne.g,He=Ne.b;Pe?(p[0]=We,p[1]=ze,p[2]=He,p[3]=Oe,b.clearBufferuiv(b.COLOR,0,p)):(g[0]=We,g[1]=ze,g[2]=He,g[3]=Oe,b.clearBufferiv(b.COLOR,0,g))}else Q|=b.COLOR_BUFFER_BIT}B&&(Q|=b.DEPTH_BUFFER_BIT),Z&&(Q|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ve,!1),n.removeEventListener("webglcontextrestored",I,!1),n.removeEventListener("webglcontextcreationerror",Se,!1),Ae.dispose(),De.dispose(),ye.dispose(),M.dispose(),G.dispose(),le.dispose(),Ge.dispose(),Je.dispose(),be.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",en),Xe.removeEventListener("sessionend",rt),ge&&(ge.dispose(),ge=null),tn.stop()};function ve(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const C=Me.autoReset,B=ce.enabled,Z=ce.autoUpdate,Q=ce.needsUpdate,$=ce.type;vt(),Me.autoReset=C,ce.enabled=B,ce.autoUpdate=Z,ce.needsUpdate=Q,ce.type=$}function Se(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ee(C){const B=C.target;B.removeEventListener("dispose",Ee),Ue(B)}function Ue(C){Ie(C),ye.remove(C)}function Ie(C){const B=ye.get(C).programs;B!==void 0&&(B.forEach(function(Z){be.releaseProgram(Z)}),C.isShaderMaterial&&be.releaseShaderCache(C))}this.renderBufferDirect=function(C,B,Z,Q,$,we){B===null&&(B=ne);const Pe=$.isMesh&&$.matrixWorld.determinant()<0,Ne=ey(C,B,Z,Q,$);X.setMaterial(Q,Pe);let Oe=Z.index,We=1;if(Q.wireframe===!0){if(Oe=ue.getWireframeAttribute(Z),Oe===void 0)return;We=2}const ze=Z.drawRange,He=Z.attributes.position;let St=ze.start*We,yn=(ze.start+ze.count)*We;we!==null&&(St=Math.max(St,we.start*We),yn=Math.min(yn,(we.start+we.count)*We)),Oe!==null?(St=Math.max(St,0),yn=Math.min(yn,Oe.count)):He!=null&&(St=Math.max(St,0),yn=Math.min(yn,He.count));const It=yn-St;if(It<0||It===1/0)return;Ge.setup($,Q,Ne,Z,Oe);let fi,ft=ke;if(Oe!==null&&(fi=fe.get(Oe),ft=Le,ft.setIndex(fi)),$.isMesh)Q.wireframe===!0?(X.setLineWidth(Q.wireframeLinewidth*J()),ft.setMode(b.LINES)):ft.setMode(b.TRIANGLES);else if($.isLine){let je=Q.linewidth;je===void 0&&(je=1),X.setLineWidth(je*J()),$.isLineSegments?ft.setMode(b.LINES):$.isLineLoop?ft.setMode(b.LINE_LOOP):ft.setMode(b.LINE_STRIP)}else $.isPoints?ft.setMode(b.POINTS):$.isSprite&&ft.setMode(b.TRIANGLES);if($.isBatchedMesh)ft.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)ft.renderInstances(St,It,$.count);else if(Z.isInstancedBufferGeometry){const je=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Gu=Math.min(Z.instanceCount,je);ft.renderInstances(St,It,Gu)}else ft.render(St,It)};function nt(C,B,Z){C.transparent===!0&&C.side===fn&&C.forceSinglePass===!1?(C.side=vn,C.needsUpdate=!0,Ta(C,B,Z),C.side=ur,C.needsUpdate=!0,Ta(C,B,Z),C.side=fn):Ta(C,B,Z)}this.compile=function(C,B,Z=null){Z===null&&(Z=C),v=De.get(Z),v.init(),_.push(v),Z.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(v.pushLight($),$.castShadow&&v.pushShadow($))}),C!==Z&&C.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(v.pushLight($),$.castShadow&&v.pushShadow($))}),v.setupLights(m._useLegacyLights);const Q=new Set;return C.traverse(function($){const we=$.material;if(we)if(Array.isArray(we))for(let Pe=0;Pe<we.length;Pe++){const Ne=we[Pe];nt(Ne,Z,$),Q.add(Ne)}else nt(we,Z,$),Q.add(we)}),_.pop(),v=null,Q},this.compileAsync=function(C,B,Z=null){const Q=this.compile(C,B,Z);return new Promise($=>{function we(){if(Q.forEach(function(Pe){ye.get(Pe).currentProgram.isReady()&&Q.delete(Pe)}),Q.size===0){$(C);return}setTimeout(we,10)}j.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let it=null;function Dt(C){it&&it(C)}function en(){tn.stop()}function rt(){tn.start()}const tn=new y_;tn.setAnimationLoop(Dt),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(C){it=C,Xe.setAnimationLoop(C),C===null?tn.stop():tn.start()},Xe.addEventListener("sessionstart",en),Xe.addEventListener("sessionend",rt),this.render=function(C,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(B),B=Xe.getCamera()),C.isScene===!0&&C.onBeforeRender(m,C,B,w),v=De.get(C,_.length),v.init(),_.push(v),pe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Y.setFromProjectionMatrix(pe),he=this.localClippingEnabled,re=Be.init(this.clippingPlanes,he),y=Ae.get(C,f.length),y.init(),f.push(y),ii(C,B,0,m.sortObjects),y.finish(),m.sortObjects===!0&&y.sort(N,F),this.info.render.frame++,re===!0&&Be.beginShadows();const Z=v.state.shadowsArray;if(ce.render(Z,C,B),re===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ze.render(y,C),v.setupLights(m._useLegacyLights),B.isArrayCamera){const Q=B.cameras;for(let $=0,we=Q.length;$<we;$++){const Pe=Q[$];Mh(y,C,Pe,Pe.viewport)}}else Mh(y,C,B);w!==null&&(R.updateMultisampleRenderTarget(w),R.updateRenderTargetMipmap(w)),C.isScene===!0&&C.onAfterRender(m,C,B),Ge.resetDefaultState(),P=-1,E=null,_.pop(),_.length>0?v=_[_.length-1]:v=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function ii(C,B,Z,Q){if(C.visible===!1)return;if(C.layers.test(B.layers)){if(C.isGroup)Z=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(B);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Y.intersectsSprite(C)){Q&&D.setFromMatrixPosition(C.matrixWorld).applyMatrix4(pe);const Pe=le.update(C),Ne=C.material;Ne.visible&&y.push(C,Pe,Ne,Z,D.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Y.intersectsObject(C))){const Pe=le.update(C),Ne=C.material;if(Q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),D.copy(C.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),D.copy(Pe.boundingSphere.center)),D.applyMatrix4(C.matrixWorld).applyMatrix4(pe)),Array.isArray(Ne)){const Oe=Pe.groups;for(let We=0,ze=Oe.length;We<ze;We++){const He=Oe[We],St=Ne[He.materialIndex];St&&St.visible&&y.push(C,Pe,St,Z,D.z,He)}}else Ne.visible&&y.push(C,Pe,Ne,Z,D.z,null)}}const we=C.children;for(let Pe=0,Ne=we.length;Pe<Ne;Pe++)ii(we[Pe],B,Z,Q)}function Mh(C,B,Z,Q){const $=C.opaque,we=C.transmissive,Pe=C.transparent;v.setupLightsView(Z),re===!0&&Be.setGlobalState(m.clippingPlanes,Z),we.length>0&&Q_($,we,B,Z),Q&&X.viewport(T.copy(Q)),$.length>0&&wa($,B,Z),we.length>0&&wa(we,B,Z),Pe.length>0&&wa(Pe,B,Z),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function Q_(C,B,Z,Q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;const we=K.isWebGL2;ge===null&&(ge=new Wr(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")?da:rr,minFilter:fa,samples:we?4:0})),m.getDrawingBufferSize(k),we?ge.setSize(k.x,k.y):ge.setSize(sd(k.x),sd(k.y));const Pe=m.getRenderTarget();m.setRenderTarget(ge),m.getClearColor(ee),L=m.getClearAlpha(),L<1&&m.setClearColor(16777215,.5),m.clear();const Ne=m.toneMapping;m.toneMapping=ir,wa(C,Z,Q),R.updateMultisampleRenderTarget(ge),R.updateRenderTargetMipmap(ge);let Oe=!1;for(let We=0,ze=B.length;We<ze;We++){const He=B[We],St=He.object,yn=He.geometry,It=He.material,fi=He.group;if(It.side===fn&&St.layers.test(Q.layers)){const ft=It.side;It.side=vn,It.needsUpdate=!0,wh(St,Z,Q,yn,It,fi),It.side=ft,It.needsUpdate=!0,Oe=!0}}Oe===!0&&(R.updateMultisampleRenderTarget(ge),R.updateRenderTargetMipmap(ge)),m.setRenderTarget(Pe),m.setClearColor(ee,L),m.toneMapping=Ne}function wa(C,B,Z){const Q=B.isScene===!0?B.overrideMaterial:null;for(let $=0,we=C.length;$<we;$++){const Pe=C[$],Ne=Pe.object,Oe=Pe.geometry,We=Q===null?Pe.material:Q,ze=Pe.group;Ne.layers.test(Z.layers)&&wh(Ne,B,Z,Oe,We,ze)}}function wh(C,B,Z,Q,$,we){C.onBeforeRender(m,B,Z,Q,$,we),C.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(m,B,Z,Q,C,we),$.transparent===!0&&$.side===fn&&$.forceSinglePass===!1?($.side=vn,$.needsUpdate=!0,m.renderBufferDirect(Z,B,Q,$,C,we),$.side=ur,$.needsUpdate=!0,m.renderBufferDirect(Z,B,Q,$,C,we),$.side=fn):m.renderBufferDirect(Z,B,Q,$,C,we),C.onAfterRender(m,B,Z,Q,$,we)}function Ta(C,B,Z){B.isScene!==!0&&(B=ne);const Q=ye.get(C),$=v.state.lights,we=v.state.shadowsArray,Pe=$.state.version,Ne=be.getParameters(C,$.state,we,B,Z),Oe=be.getProgramCacheKey(Ne);let We=Q.programs;Q.environment=C.isMeshStandardMaterial?B.environment:null,Q.fog=B.fog,Q.envMap=(C.isMeshStandardMaterial?G:M).get(C.envMap||Q.environment),We===void 0&&(C.addEventListener("dispose",Ee),We=new Map,Q.programs=We);let ze=We.get(Oe);if(ze!==void 0){if(Q.currentProgram===ze&&Q.lightsStateVersion===Pe)return Ah(C,Ne),ze}else Ne.uniforms=be.getUniforms(C),C.onBuild(Z,Ne,m),C.onBeforeCompile(Ne,m),ze=be.acquireProgram(Ne,Oe),We.set(Oe,ze),Q.uniforms=Ne.uniforms;const He=Q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(He.clippingPlanes=Be.uniform),Ah(C,Ne),Q.needsLights=ny(C),Q.lightsStateVersion=Pe,Q.needsLights&&(He.ambientLightColor.value=$.state.ambient,He.lightProbe.value=$.state.probe,He.directionalLights.value=$.state.directional,He.directionalLightShadows.value=$.state.directionalShadow,He.spotLights.value=$.state.spot,He.spotLightShadows.value=$.state.spotShadow,He.rectAreaLights.value=$.state.rectArea,He.ltc_1.value=$.state.rectAreaLTC1,He.ltc_2.value=$.state.rectAreaLTC2,He.pointLights.value=$.state.point,He.pointLightShadows.value=$.state.pointShadow,He.hemisphereLights.value=$.state.hemi,He.directionalShadowMap.value=$.state.directionalShadowMap,He.directionalShadowMatrix.value=$.state.directionalShadowMatrix,He.spotShadowMap.value=$.state.spotShadowMap,He.spotLightMatrix.value=$.state.spotLightMatrix,He.spotLightMap.value=$.state.spotLightMap,He.pointShadowMap.value=$.state.pointShadowMap,He.pointShadowMatrix.value=$.state.pointShadowMatrix),Q.currentProgram=ze,Q.uniformsList=null,ze}function Th(C){if(C.uniformsList===null){const B=C.currentProgram.getUniforms();C.uniformsList=Nl.seqWithValue(B.seq,C.uniforms)}return C.uniformsList}function Ah(C,B){const Z=ye.get(C);Z.outputColorSpace=B.outputColorSpace,Z.batching=B.batching,Z.instancing=B.instancing,Z.instancingColor=B.instancingColor,Z.skinning=B.skinning,Z.morphTargets=B.morphTargets,Z.morphNormals=B.morphNormals,Z.morphColors=B.morphColors,Z.morphTargetsCount=B.morphTargetsCount,Z.numClippingPlanes=B.numClippingPlanes,Z.numIntersection=B.numClipIntersection,Z.vertexAlphas=B.vertexAlphas,Z.vertexTangents=B.vertexTangents,Z.toneMapping=B.toneMapping}function ey(C,B,Z,Q,$){B.isScene!==!0&&(B=ne),R.resetTextureUnits();const we=B.fog,Pe=Q.isMeshStandardMaterial?B.environment:null,Ne=w===null?m.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Li,Oe=(Q.isMeshStandardMaterial?G:M).get(Q.envMap||Pe),We=Q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ze=!!Z.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),He=!!Z.morphAttributes.position,St=!!Z.morphAttributes.normal,yn=!!Z.morphAttributes.color;let It=ir;Q.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(It=m.toneMapping);const fi=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ft=fi!==void 0?fi.length:0,je=ye.get(Q),Gu=v.state.lights;if(re===!0&&(he===!0||C!==E)){const Cn=C===E&&Q.id===P;Be.setState(Q,C,Cn)}let _t=!1;Q.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Gu.state.version||je.outputColorSpace!==Ne||$.isBatchedMesh&&je.batching===!1||!$.isBatchedMesh&&je.batching===!0||$.isInstancedMesh&&je.instancing===!1||!$.isInstancedMesh&&je.instancing===!0||$.isSkinnedMesh&&je.skinning===!1||!$.isSkinnedMesh&&je.skinning===!0||$.isInstancedMesh&&je.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&je.instancingColor===!1&&$.instanceColor!==null||je.envMap!==Oe||Q.fog===!0&&je.fog!==we||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Be.numPlanes||je.numIntersection!==Be.numIntersection)||je.vertexAlphas!==We||je.vertexTangents!==ze||je.morphTargets!==He||je.morphNormals!==St||je.morphColors!==yn||je.toneMapping!==It||K.isWebGL2===!0&&je.morphTargetsCount!==ft)&&(_t=!0):(_t=!0,je.__version=Q.version);let hr=je.currentProgram;_t===!0&&(hr=Ta(Q,B,$));let Rh=!1,ps=!1,Vu=!1;const Xt=hr.getUniforms(),pr=je.uniforms;if(X.useProgram(hr.program)&&(Rh=!0,ps=!0,Vu=!0),Q.id!==P&&(P=Q.id,ps=!0),Rh||E!==C){Xt.setValue(b,"projectionMatrix",C.projectionMatrix),Xt.setValue(b,"viewMatrix",C.matrixWorldInverse);const Cn=Xt.map.cameraPosition;Cn!==void 0&&Cn.setValue(b,D.setFromMatrixPosition(C.matrixWorld)),K.logarithmicDepthBuffer&&Xt.setValue(b,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Xt.setValue(b,"isOrthographic",C.isOrthographicCamera===!0),E!==C&&(E=C,ps=!0,Vu=!0)}if($.isSkinnedMesh){Xt.setOptional(b,$,"bindMatrix"),Xt.setOptional(b,$,"bindMatrixInverse");const Cn=$.skeleton;Cn&&(K.floatVertexTextures?(Cn.boneTexture===null&&Cn.computeBoneTexture(),Xt.setValue(b,"boneTexture",Cn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(Xt.setOptional(b,$,"batchingTexture"),Xt.setValue(b,"batchingTexture",$._matricesTexture,R));const Wu=Z.morphAttributes;if((Wu.position!==void 0||Wu.normal!==void 0||Wu.color!==void 0&&K.isWebGL2===!0)&&qe.update($,Z,hr),(ps||je.receiveShadow!==$.receiveShadow)&&(je.receiveShadow=$.receiveShadow,Xt.setValue(b,"receiveShadow",$.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(pr.envMap.value=Oe,pr.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),ps&&(Xt.setValue(b,"toneMappingExposure",m.toneMappingExposure),je.needsLights&&ty(pr,Vu),we&&Q.fog===!0&&xe.refreshFogUniforms(pr,we),xe.refreshMaterialUniforms(pr,Q,ie,z,ge),Nl.upload(b,Th(je),pr,R)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Nl.upload(b,Th(je),pr,R),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Xt.setValue(b,"center",$.center),Xt.setValue(b,"modelViewMatrix",$.modelViewMatrix),Xt.setValue(b,"normalMatrix",$.normalMatrix),Xt.setValue(b,"modelMatrix",$.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Cn=Q.uniformsGroups;for(let Xu=0,iy=Cn.length;Xu<iy;Xu++)if(K.isWebGL2){const bh=Cn[Xu];Je.update(bh,hr),Je.bind(bh,hr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return hr}function ty(C,B){C.ambientLightColor.needsUpdate=B,C.lightProbe.needsUpdate=B,C.directionalLights.needsUpdate=B,C.directionalLightShadows.needsUpdate=B,C.pointLights.needsUpdate=B,C.pointLightShadows.needsUpdate=B,C.spotLights.needsUpdate=B,C.spotLightShadows.needsUpdate=B,C.rectAreaLights.needsUpdate=B,C.hemisphereLights.needsUpdate=B}function ny(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(C,B,Z){ye.get(C.texture).__webglTexture=B,ye.get(C.depthTexture).__webglTexture=Z;const Q=ye.get(C);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=Z===void 0,Q.__autoAllocateDepthBuffer||j.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,B){const Z=ye.get(C);Z.__webglFramebuffer=B,Z.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(C,B=0,Z=0){w=C,A=B,S=Z;let Q=!0,$=null,we=!1,Pe=!1;if(C){const Oe=ye.get(C);Oe.__useDefaultFramebuffer!==void 0?(X.bindFramebuffer(b.FRAMEBUFFER,null),Q=!1):Oe.__webglFramebuffer===void 0?R.setupRenderTarget(C):Oe.__hasExternalTextures&&R.rebindTextures(C,ye.get(C.texture).__webglTexture,ye.get(C.depthTexture).__webglTexture);const We=C.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Pe=!0);const ze=ye.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ze[B])?$=ze[B][Z]:$=ze[B],we=!0):K.isWebGL2&&C.samples>0&&R.useMultisampledRTT(C)===!1?$=ye.get(C).__webglMultisampledFramebuffer:Array.isArray(ze)?$=ze[Z]:$=ze,T.copy(C.viewport),U.copy(C.scissor),W=C.scissorTest}else T.copy(V).multiplyScalar(ie).floor(),U.copy(te).multiplyScalar(ie).floor(),W=oe;if(X.bindFramebuffer(b.FRAMEBUFFER,$)&&K.drawBuffers&&Q&&X.drawBuffers(C,$),X.viewport(T),X.scissor(U),X.setScissorTest(W),we){const Oe=ye.get(C.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+B,Oe.__webglTexture,Z)}else if(Pe){const Oe=ye.get(C.texture),We=B||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Oe.__webglTexture,Z||0,We)}P=-1},this.readRenderTargetPixels=function(C,B,Z,Q,$,we,Pe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=ye.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ne=Ne[Pe]),Ne){X.bindFramebuffer(b.FRAMEBUFFER,Ne);try{const Oe=C.texture,We=Oe.format,ze=Oe.type;if(We!==Jn&&Re.convert(We)!==b.getParameter(b.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=ze===da&&(j.has("EXT_color_buffer_half_float")||K.isWebGL2&&j.has("EXT_color_buffer_float"));if(ze!==rr&&Re.convert(ze)!==b.getParameter(b.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===ji&&(K.isWebGL2||j.has("OES_texture_float")||j.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=C.width-Q&&Z>=0&&Z<=C.height-$&&b.readPixels(B,Z,Q,$,Re.convert(We),Re.convert(ze),we)}finally{const Oe=w!==null?ye.get(w).__webglFramebuffer:null;X.bindFramebuffer(b.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(C,B,Z=0){const Q=Math.pow(2,-Z),$=Math.floor(B.image.width*Q),we=Math.floor(B.image.height*Q);R.setTexture2D(B,0),b.copyTexSubImage2D(b.TEXTURE_2D,Z,0,0,C.x,C.y,$,we),X.unbindTexture()},this.copyTextureToTexture=function(C,B,Z,Q=0){const $=B.image.width,we=B.image.height,Pe=Re.convert(Z.format),Ne=Re.convert(Z.type);R.setTexture2D(Z,0),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,Z.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,Z.unpackAlignment),B.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,Q,C.x,C.y,$,we,Pe,Ne,B.image.data):B.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,Q,C.x,C.y,B.mipmaps[0].width,B.mipmaps[0].height,Pe,B.mipmaps[0].data):b.texSubImage2D(b.TEXTURE_2D,Q,C.x,C.y,Pe,Ne,B.image),Q===0&&Z.generateMipmaps&&b.generateMipmap(b.TEXTURE_2D),X.unbindTexture()},this.copyTextureToTexture3D=function(C,B,Z,Q,$=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=C.max.x-C.min.x+1,Pe=C.max.y-C.min.y+1,Ne=C.max.z-C.min.z+1,Oe=Re.convert(Q.format),We=Re.convert(Q.type);let ze;if(Q.isData3DTexture)R.setTexture3D(Q,0),ze=b.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)R.setTexture2DArray(Q,0),ze=b.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,Q.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,Q.unpackAlignment);const He=b.getParameter(b.UNPACK_ROW_LENGTH),St=b.getParameter(b.UNPACK_IMAGE_HEIGHT),yn=b.getParameter(b.UNPACK_SKIP_PIXELS),It=b.getParameter(b.UNPACK_SKIP_ROWS),fi=b.getParameter(b.UNPACK_SKIP_IMAGES),ft=Z.isCompressedTexture?Z.mipmaps[$]:Z.image;b.pixelStorei(b.UNPACK_ROW_LENGTH,ft.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ft.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,C.min.x),b.pixelStorei(b.UNPACK_SKIP_ROWS,C.min.y),b.pixelStorei(b.UNPACK_SKIP_IMAGES,C.min.z),Z.isDataTexture||Z.isData3DTexture?b.texSubImage3D(ze,$,B.x,B.y,B.z,we,Pe,Ne,Oe,We,ft.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),b.compressedTexSubImage3D(ze,$,B.x,B.y,B.z,we,Pe,Ne,Oe,ft.data)):b.texSubImage3D(ze,$,B.x,B.y,B.z,we,Pe,Ne,Oe,We,ft),b.pixelStorei(b.UNPACK_ROW_LENGTH,He),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,St),b.pixelStorei(b.UNPACK_SKIP_PIXELS,yn),b.pixelStorei(b.UNPACK_SKIP_ROWS,It),b.pixelStorei(b.UNPACK_SKIP_IMAGES,fi),$===0&&Q.generateMipmaps&&b.generateMipmap(ze),X.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?R.setTextureCube(C,0):C.isData3DTexture?R.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?R.setTexture2DArray(C,0):R.setTexture2D(C,0),X.unbindTexture()},this.resetState=function(){A=0,S=0,w=null,X.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===dh?"display-p3":"srgb",n.unpackColorSpace=et.workingColorSpace===Iu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Gt?Fr:i_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Fr?Gt:Li}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class WA extends R_{}WA.prototype.isWebGL1Renderer=!0;class mh{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Fe(e),this.near=n,this.far=i}clone(){return new mh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class XA extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class jA{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=id,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,o=this.stride;r<o;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new O;class du{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyMatrix4(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyNormalMatrix(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.transformDirection(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}setX(e,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=xi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=xi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=xi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=xi(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=tt(n,this.array),i=tt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array),o=tt(o,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)n.push(this.data.array[r+o])}return new Bn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new du(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)n.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class b_ extends Kr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let go;const Rs=new O,vo=new O,_o=new O,yo=new me,bs=new me,C_=new xt,fl=new O,Cs=new O,dl=new O,ig=new me,$c=new me,rg=new me;class YA extends Ct{constructor(e=new b_){if(super(),this.isSprite=!0,this.type="Sprite",go===void 0){go=new Vn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new jA(n,5);go.setIndex([0,1,2,0,2,3]),go.setAttribute("position",new du(i,3,0,!1)),go.setAttribute("uv",new du(i,2,3,!1))}this.geometry=go,this.material=e,this.center=new me(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vo.setFromMatrixScale(this.matrixWorld),C_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),_o.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vo.multiplyScalar(-_o.z);const i=this.material.rotation;let r,o;i!==0&&(o=Math.cos(i),r=Math.sin(i));const s=this.center;hl(fl.set(-.5,-.5,0),_o,s,vo,r,o),hl(Cs.set(.5,-.5,0),_o,s,vo,r,o),hl(dl.set(.5,.5,0),_o,s,vo,r,o),ig.set(0,0),$c.set(1,0),rg.set(1,1);let a=e.ray.intersectTriangle(fl,Cs,dl,!1,Rs);if(a===null&&(hl(Cs.set(-.5,.5,0),_o,s,vo,r,o),$c.set(0,1),a=e.ray.intersectTriangle(fl,dl,Cs,!1,Rs),a===null))return;const l=e.ray.origin.distanceTo(Rs);l<e.near||l>e.far||n.push({distance:l,point:Rs.clone(),uv:Nn.getInterpolation(Rs,fl,Cs,dl,ig,$c,rg,new me),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function hl(t,e,n,i,r,o){yo.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(bs.x=o*yo.x-r*yo.y,bs.y=r*yo.x+o*yo.y):bs.copy(yo),t.copy(e),t.x+=bs.x,t.y+=bs.y,t.applyMatrix4(C_)}class P_ extends Kr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const og=new O,sg=new O,ag=new xt,Kc=new c_,pl=new Nu;class qA extends Ct{constructor(e=new Vn,n=new P_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,o=n.count;r<o;r++)og.fromBufferAttribute(n,r-1),sg.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=og.distanceTo(sg);e.setAttribute("lineDistance",new Tn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pl.copy(i.boundingSphere),pl.applyMatrix4(r),pl.radius+=o,e.ray.intersectsSphere(pl)===!1)return;ag.copy(r).invert(),Kc.copy(e.ray).applyMatrix4(ag);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new O,c=new O,h=new O,d=new O,p=this.isLineSegments?2:1,g=i.index,v=i.attributes.position;if(g!==null){const f=Math.max(0,s.start),_=Math.min(g.count,s.start+s.count);for(let m=f,x=_-1;m<x;m+=p){const A=g.getX(m),S=g.getX(m+1);if(u.fromBufferAttribute(v,A),c.fromBufferAttribute(v,S),Kc.distanceSqToSegment(u,c,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(d);P<e.near||P>e.far||n.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,s.start),_=Math.min(v.count,s.start+s.count);for(let m=f,x=_-1;m<x;m+=p){if(u.fromBufferAttribute(v,m),c.fromBufferAttribute(v,m+1),Kc.distanceSqToSegment(u,c,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(d);S<e.near||S>e.far||n.push({distance:S,point:h.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}const lg=new O,ug=new O;class $A extends qA{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,o=n.count;r<o;r+=2)lg.fromBufferAttribute(n,r),ug.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+lg.distanceTo(ug);e.setAttribute("lineDistance",new Tn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gh extends _n{constructor(e,n,i,r,o,s,a,l,u){super(e,n,i,r,o,s,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ci{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),o=0;n.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),o+=i.distanceTo(r),n.push(o),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const o=i.length;let s;n?s=n:s=e*i[o-1];let a=0,l=o-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-s,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===s)return r/(o-1);const c=i[r],d=i[r+1]-c,p=(s-c)/d;return(r+p)/(o-1)}getTangent(e,n){let r=e-1e-4,o=e+1e-4;r<0&&(r=0),o>1&&(o=1);const s=this.getPoint(r),a=this.getPoint(o),l=n||(s.isVector2?new me:new O);return l.copy(a).sub(s).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new O,r=[],o=[],s=[],a=new O,l=new xt;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new O)}o[0]=new O,s[0]=new O;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),h<=u&&(u=h,i.set(0,1,0)),d<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),o[0].crossVectors(r[0],a),s[0].crossVectors(r[0],o[0]);for(let p=1;p<=e;p++){if(o[p]=o[p-1].clone(),s[p]=s[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Jt(r[p-1].dot(r[p]),-1,1));o[p].applyMatrix4(l.makeRotationAxis(a,g))}s[p].crossVectors(r[p],o[p])}if(n===!0){let p=Math.acos(Jt(o[0].dot(o[e]),-1,1));p/=e,r[0].dot(a.crossVectors(o[0],o[e]))>0&&(p=-p);for(let g=1;g<=e;g++)o[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),s[g].crossVectors(r[g],o[g])}return{tangents:r,normals:o,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class vh extends ci{constructor(e=0,n=0,i=1,r=1,o=0,s=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=o,this.aEndAngle=s,this.aClockwise=a,this.aRotation=l}getPoint(e,n){const i=n||new me,r=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const s=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=r;for(;o>r;)o-=r;o<Number.EPSILON&&(s?o=0:o=r),this.aClockwise===!0&&!s&&(o===r?o=-r:o=o-r);const a=this.aStartAngle+e*o;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=u-this.aY;l=d*c-p*h+this.aX,u=d*h+p*c+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class KA extends vh{constructor(e,n,i,r,o,s){super(e,n,i,i,r,o,s),this.isArcCurve=!0,this.type="ArcCurve"}}function _h(){let t=0,e=0,n=0,i=0;function r(o,s,a,l){t=o,e=a,n=-3*o+3*s-2*a-l,i=2*o-2*s+a+l}return{initCatmullRom:function(o,s,a,l,u){r(s,a,u*(a-o),u*(l-s))},initNonuniformCatmullRom:function(o,s,a,l,u,c,h){let d=(s-o)/u-(a-o)/(u+c)+(a-s)/c,p=(a-s)/c-(l-s)/(c+h)+(l-a)/h;d*=c,p*=c,r(s,a,d,p)},calc:function(o){const s=o*o,a=s*o;return t+e*o+n*s+i*a}}}const ml=new O,Zc=new _h,Jc=new _h,Qc=new _h;class ZA extends ci{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new O){const i=n,r=this.points,o=r.length,s=(o-(this.closed?0:1))*e;let a=Math.floor(s),l=s-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%o]:(ml.subVectors(r[0],r[1]).add(r[0]),u=ml);const h=r[a%o],d=r[(a+1)%o];if(this.closed||a+2<o?c=r[(a+2)%o]:(ml.subVectors(r[o-1],r[o-2]).add(r[o-1]),c=ml),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(u.distanceToSquared(h),p),y=Math.pow(h.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(c),p);y<1e-4&&(y=1),g<1e-4&&(g=y),v<1e-4&&(v=y),Zc.initNonuniformCatmullRom(u.x,h.x,d.x,c.x,g,y,v),Jc.initNonuniformCatmullRom(u.y,h.y,d.y,c.y,g,y,v),Qc.initNonuniformCatmullRom(u.z,h.z,d.z,c.z,g,y,v)}else this.curveType==="catmullrom"&&(Zc.initCatmullRom(u.x,h.x,d.x,c.x,this.tension),Jc.initCatmullRom(u.y,h.y,d.y,c.y,this.tension),Qc.initCatmullRom(u.z,h.z,d.z,c.z,this.tension));return i.set(Zc.calc(l),Jc.calc(l),Qc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new O().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function cg(t,e,n,i,r){const o=(i-e)*.5,s=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+o+s)*l+(-3*n+3*i-2*o-s)*a+o*t+n}function JA(t,e){const n=1-t;return n*n*e}function QA(t,e){return 2*(1-t)*t*e}function eR(t,e){return t*t*e}function Xs(t,e,n,i){return JA(t,e)+QA(t,n)+eR(t,i)}function tR(t,e){const n=1-t;return n*n*n*e}function nR(t,e){const n=1-t;return 3*n*n*t*e}function iR(t,e){return 3*(1-t)*t*t*e}function rR(t,e){return t*t*t*e}function js(t,e,n,i,r){return tR(t,e)+nR(t,n)+iR(t,i)+rR(t,r)}class L_ extends ci{constructor(e=new me,n=new me,i=new me,r=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new me){const i=n,r=this.v0,o=this.v1,s=this.v2,a=this.v3;return i.set(js(e,r.x,o.x,s.x,a.x),js(e,r.y,o.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class oR extends ci{constructor(e=new O,n=new O,i=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new O){const i=n,r=this.v0,o=this.v1,s=this.v2,a=this.v3;return i.set(js(e,r.x,o.x,s.x,a.x),js(e,r.y,o.y,s.y,a.y),js(e,r.z,o.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class D_ extends ci{constructor(e=new me,n=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new me){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new me){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sR extends ci{constructor(e=new O,n=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new O){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new O){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class I_ extends ci{constructor(e=new me,n=new me,i=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new me){const i=n,r=this.v0,o=this.v1,s=this.v2;return i.set(Xs(e,r.x,o.x,s.x),Xs(e,r.y,o.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class aR extends ci{constructor(e=new O,n=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new O){const i=n,r=this.v0,o=this.v1,s=this.v2;return i.set(Xs(e,r.x,o.x,s.x),Xs(e,r.y,o.y,s.y),Xs(e,r.z,o.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class N_ extends ci{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new me){const i=n,r=this.points,o=(r.length-1)*e,s=Math.floor(o),a=o-s,l=r[s===0?s:s-1],u=r[s],c=r[s>r.length-2?r.length-1:s+1],h=r[s>r.length-3?r.length-1:s+2];return i.set(cg(a,l.x,u.x,c.x,h.x),cg(a,l.y,u.y,c.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new me().fromArray(r))}return this}}var ld=Object.freeze({__proto__:null,ArcCurve:KA,CatmullRomCurve3:ZA,CubicBezierCurve:L_,CubicBezierCurve3:oR,EllipseCurve:vh,LineCurve:D_,LineCurve3:sR,QuadraticBezierCurve:I_,QuadraticBezierCurve3:aR,SplineCurve:N_});class lR extends ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ld[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let o=0;for(;o<r.length;){if(r[o]>=i){const s=r[o]-i,a=this.curves[o],l=a.getLength(),u=l===0?0:1-s/l;return a.getPointAt(u,n)}o++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,o=this.curves;r<o.length;r++){const s=o[r],a=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,l=s.getPoints(a);for(let u=0;u<l.length;u++){const c=l[u];i&&i.equals(c)||(n.push(c),i=c)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new ld[r.type]().fromJSON(r))}return this}}class fg extends lR{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new D_(this.currentPoint.clone(),new me(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const o=new I_(this.currentPoint.clone(),new me(e,n),new me(i,r));return this.curves.push(o),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,o,s){const a=new L_(this.currentPoint.clone(),new me(e,n),new me(i,r),new me(o,s));return this.curves.push(a),this.currentPoint.set(o,s),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new N_(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,o,s){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,o,s),this}absarc(e,n,i,r,o,s){return this.absellipse(e,n,i,i,r,o,s),this}ellipse(e,n,i,r,o,s,a,l){const u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+u,n+c,i,r,o,s,a,l),this}absellipse(e,n,i,r,o,s,a,l){const u=new vh(e,n,i,r,o,s,a,l);if(this.curves.length>0){const h=u.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(u);const c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class U_ extends fg{constructor(e){super(e),this.uuid=Ai(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new fg().fromJSON(r))}return this}}const uR={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let o=O_(t,0,r,n,!0);const s=[];if(!o||o.next===o.prev)return s;let a,l,u,c,h,d,p;if(i&&(o=pR(t,e,o,n)),t.length>80*n){a=u=t[0],l=c=t[1];for(let g=n;g<r;g+=n)h=t[g],d=t[g+1],h<a&&(a=h),d<l&&(l=d),h>u&&(u=h),d>c&&(c=d);p=Math.max(u-a,c-l),p=p!==0?32767/p:0}return ha(o,s,n,a,l,p,0),s}};function O_(t,e,n,i,r){let o,s;if(r===TR(t,e,n,i)>0)for(o=e;o<n;o+=i)s=dg(o,t[o],t[o+1],s);else for(o=n-i;o>=e;o-=i)s=dg(o,t[o],t[o+1],s);return s&&ku(s,s.next)&&(ma(s),s=s.next),s}function jr(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(ku(n,n.next)||pt(n.prev,n,n.next)===0)){if(ma(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function ha(t,e,n,i,r,o,s){if(!t)return;!s&&o&&yR(t,i,r,o);let a=t,l,u;for(;t.prev!==t.next;){if(l=t.prev,u=t.next,o?fR(t,i,r,o):cR(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(u.i/n|0),ma(t),t=u.next,a=u.next;continue}if(t=u,t===a){s?s===1?(t=dR(jr(t),e,n),ha(t,e,n,i,r,o,2)):s===2&&hR(t,e,n,i,r,o):ha(jr(t),e,n,i,r,o,1);break}}}function cR(t){const e=t.prev,n=t,i=t.next;if(pt(e,n,i)>=0)return!1;const r=e.x,o=n.x,s=i.x,a=e.y,l=n.y,u=i.y,c=r<o?r<s?r:s:o<s?o:s,h=a<l?a<u?a:u:l<u?l:u,d=r>o?r>s?r:s:o>s?o:s,p=a>l?a>u?a:u:l>u?l:u;let g=i.next;for(;g!==e;){if(g.x>=c&&g.x<=d&&g.y>=h&&g.y<=p&&Uo(r,a,o,l,s,u,g.x,g.y)&&pt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function fR(t,e,n,i){const r=t.prev,o=t,s=t.next;if(pt(r,o,s)>=0)return!1;const a=r.x,l=o.x,u=s.x,c=r.y,h=o.y,d=s.y,p=a<l?a<u?a:u:l<u?l:u,g=c<h?c<d?c:d:h<d?h:d,y=a>l?a>u?a:u:l>u?l:u,v=c>h?c>d?c:d:h>d?h:d,f=ud(p,g,e,n,i),_=ud(y,v,e,n,i);let m=t.prevZ,x=t.nextZ;for(;m&&m.z>=f&&x&&x.z<=_;){if(m.x>=p&&m.x<=y&&m.y>=g&&m.y<=v&&m!==r&&m!==s&&Uo(a,c,l,h,u,d,m.x,m.y)&&pt(m.prev,m,m.next)>=0||(m=m.prevZ,x.x>=p&&x.x<=y&&x.y>=g&&x.y<=v&&x!==r&&x!==s&&Uo(a,c,l,h,u,d,x.x,x.y)&&pt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;m&&m.z>=f;){if(m.x>=p&&m.x<=y&&m.y>=g&&m.y<=v&&m!==r&&m!==s&&Uo(a,c,l,h,u,d,m.x,m.y)&&pt(m.prev,m,m.next)>=0)return!1;m=m.prevZ}for(;x&&x.z<=_;){if(x.x>=p&&x.x<=y&&x.y>=g&&x.y<=v&&x!==r&&x!==s&&Uo(a,c,l,h,u,d,x.x,x.y)&&pt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function dR(t,e,n){let i=t;do{const r=i.prev,o=i.next.next;!ku(r,o)&&F_(r,i,i.next,o)&&pa(r,o)&&pa(o,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(o.i/n|0),ma(i),ma(i.next),i=t=o),i=i.next}while(i!==t);return jr(i)}function hR(t,e,n,i,r,o){let s=t;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&ER(s,a)){let l=k_(s,a);s=jr(s,s.next),l=jr(l,l.next),ha(s,e,n,i,r,o,0),ha(l,e,n,i,r,o,0);return}a=a.next}s=s.next}while(s!==t)}function pR(t,e,n,i){const r=[];let o,s,a,l,u;for(o=0,s=e.length;o<s;o++)a=e[o]*i,l=o<s-1?e[o+1]*i:t.length,u=O_(t,a,l,i,!1),u===u.next&&(u.steiner=!0),r.push(SR(u));for(r.sort(mR),o=0;o<r.length;o++)n=gR(r[o],n);return n}function mR(t,e){return t.x-e.x}function gR(t,e){const n=vR(t,e);if(!n)return e;const i=k_(n,t);return jr(i,i.next),jr(n,n.next)}function vR(t,e){let n=e,i=-1/0,r;const o=t.x,s=t.y;do{if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){const d=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=o&&d>i&&(i=d,r=n.x<n.next.x?n:n.next,d===o))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,u=r.y;let c=1/0,h;n=r;do o>=n.x&&n.x>=l&&o!==n.x&&Uo(s<u?o:i,s,l,u,s<u?i:o,s,n.x,n.y)&&(h=Math.abs(s-n.y)/(o-n.x),pa(n,t)&&(h<c||h===c&&(n.x>r.x||n.x===r.x&&_R(r,n)))&&(r=n,c=h)),n=n.next;while(n!==a);return r}function _R(t,e){return pt(t.prev,t,e.prev)<0&&pt(e.next,t,t.next)<0}function yR(t,e,n,i){let r=t;do r.z===0&&(r.z=ud(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,xR(r)}function xR(t){let e,n,i,r,o,s,a,l,u=1;do{for(n=t,t=null,o=null,s=0;n;){for(s++,i=n,a=0,e=0;e<u&&(a++,i=i.nextZ,!!i);e++);for(l=u;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),o?o.nextZ=r:t=r,r.prevZ=o,o=r;n=i}o.nextZ=null,u*=2}while(s>1);return t}function ud(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function SR(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Uo(t,e,n,i,r,o,s,a){return(r-s)*(e-a)>=(t-s)*(o-a)&&(t-s)*(i-a)>=(n-s)*(e-a)&&(n-s)*(o-a)>=(r-s)*(i-a)}function ER(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!MR(t,e)&&(pa(t,e)&&pa(e,t)&&wR(t,e)&&(pt(t.prev,t,e.prev)||pt(t,e.prev,e))||ku(t,e)&&pt(t.prev,t,t.next)>0&&pt(e.prev,e,e.next)>0)}function pt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function ku(t,e){return t.x===e.x&&t.y===e.y}function F_(t,e,n,i){const r=vl(pt(t,e,n)),o=vl(pt(t,e,i)),s=vl(pt(n,i,t)),a=vl(pt(n,i,e));return!!(r!==o&&s!==a||r===0&&gl(t,n,e)||o===0&&gl(t,i,e)||s===0&&gl(n,t,i)||a===0&&gl(n,e,i))}function gl(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function vl(t){return t>0?1:t<0?-1:0}function MR(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&F_(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function pa(t,e){return pt(t.prev,t,t.next)<0?pt(t,e,t.next)>=0&&pt(t,t.prev,e)>=0:pt(t,e,t.prev)<0||pt(t,t.next,e)<0}function wR(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,o=(t.y+e.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&r<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function k_(t,e){const n=new cd(t.i,t.x,t.y),i=new cd(e.i,e.x,e.y),r=t.next,o=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,o.next=i,i.prev=o,i}function dg(t,e,n,i){const r=new cd(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ma(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function cd(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function TR(t,e,n,i){let r=0;for(let o=e,s=n-i;o<n;o+=i)r+=(t[s]-t[o])*(t[o+1]+t[s+1]),s=o;return r}class Ys{static area(e){const n=e.length;let i=0;for(let r=n-1,o=0;o<n;r=o++)i+=e[r].x*e[o].y-e[o].x*e[r].y;return i*.5}static isClockWise(e){return Ys.area(e)<0}static triangulateShape(e,n){const i=[],r=[],o=[];hg(e),pg(i,e);let s=e.length;n.forEach(hg);for(let l=0;l<n.length;l++)r.push(s),s+=n[l].length,pg(i,n[l]);const a=uR.triangulate(i,r);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function hg(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function pg(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class yh extends Vn{constructor(e=new U_([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],o=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];s(u)}this.setAttribute("position",new Tn(r,3)),this.setAttribute("uv",new Tn(o,2)),this.computeVertexNormals();function s(a){const l=[],u=n.curveSegments!==void 0?n.curveSegments:12,c=n.steps!==void 0?n.steps:1,h=n.depth!==void 0?n.depth:1;let d=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,g=n.bevelSize!==void 0?n.bevelSize:p-.1,y=n.bevelOffset!==void 0?n.bevelOffset:0,v=n.bevelSegments!==void 0?n.bevelSegments:3;const f=n.extrudePath,_=n.UVGenerator!==void 0?n.UVGenerator:AR;let m,x=!1,A,S,w,P;f&&(m=f.getSpacedPoints(c),x=!0,d=!1,A=f.computeFrenetFrames(c,!1),S=new O,w=new O,P=new O),d||(v=0,p=0,g=0,y=0);const E=a.extractPoints(u);let T=E.shape;const U=E.holes;if(!Ys.isClockWise(T)){T=T.reverse();for(let b=0,q=U.length;b<q;b++){const j=U[b];Ys.isClockWise(j)&&(U[b]=j.reverse())}}const ee=Ys.triangulateShape(T,U),L=T;for(let b=0,q=U.length;b<q;b++){const j=U[b];T=T.concat(j)}function H(b,q,j){return q||console.error("THREE.ExtrudeGeometry: vec does not exist"),b.clone().addScaledVector(q,j)}const z=T.length,ie=ee.length;function N(b,q,j){let K,X,Me;const ye=b.x-q.x,R=b.y-q.y,M=j.x-b.x,G=j.y-b.y,fe=ye*ye+R*R,ue=ye*G-R*M;if(Math.abs(ue)>Number.EPSILON){const le=Math.sqrt(fe),be=Math.sqrt(M*M+G*G),xe=q.x-R/le,Ae=q.y+ye/le,De=j.x-G/be,Be=j.y+M/be,ce=((De-xe)*G-(Be-Ae)*M)/(ye*G-R*M);K=xe+ye*ce-b.x,X=Ae+R*ce-b.y;const Ze=K*K+X*X;if(Ze<=2)return new me(K,X);Me=Math.sqrt(Ze/2)}else{let le=!1;ye>Number.EPSILON?M>Number.EPSILON&&(le=!0):ye<-Number.EPSILON?M<-Number.EPSILON&&(le=!0):Math.sign(R)===Math.sign(G)&&(le=!0),le?(K=-R,X=ye,Me=Math.sqrt(fe)):(K=ye,X=R,Me=Math.sqrt(fe/2))}return new me(K/Me,X/Me)}const F=[];for(let b=0,q=L.length,j=q-1,K=b+1;b<q;b++,j++,K++)j===q&&(j=0),K===q&&(K=0),F[b]=N(L[b],L[j],L[K]);const V=[];let te,oe=F.concat();for(let b=0,q=U.length;b<q;b++){const j=U[b];te=[];for(let K=0,X=j.length,Me=X-1,ye=K+1;K<X;K++,Me++,ye++)Me===X&&(Me=0),ye===X&&(ye=0),te[K]=N(j[K],j[Me],j[ye]);V.push(te),oe=oe.concat(te)}for(let b=0;b<v;b++){const q=b/v,j=p*Math.cos(q*Math.PI/2),K=g*Math.sin(q*Math.PI/2)+y;for(let X=0,Me=L.length;X<Me;X++){const ye=H(L[X],F[X],K);pe(ye.x,ye.y,-j)}for(let X=0,Me=U.length;X<Me;X++){const ye=U[X];te=V[X];for(let R=0,M=ye.length;R<M;R++){const G=H(ye[R],te[R],K);pe(G.x,G.y,-j)}}}const Y=g+y;for(let b=0;b<z;b++){const q=d?H(T[b],oe[b],Y):T[b];x?(w.copy(A.normals[0]).multiplyScalar(q.x),S.copy(A.binormals[0]).multiplyScalar(q.y),P.copy(m[0]).add(w).add(S),pe(P.x,P.y,P.z)):pe(q.x,q.y,0)}for(let b=1;b<=c;b++)for(let q=0;q<z;q++){const j=d?H(T[q],oe[q],Y):T[q];x?(w.copy(A.normals[b]).multiplyScalar(j.x),S.copy(A.binormals[b]).multiplyScalar(j.y),P.copy(m[b]).add(w).add(S),pe(P.x,P.y,P.z)):pe(j.x,j.y,h/c*b)}for(let b=v-1;b>=0;b--){const q=b/v,j=p*Math.cos(q*Math.PI/2),K=g*Math.sin(q*Math.PI/2)+y;for(let X=0,Me=L.length;X<Me;X++){const ye=H(L[X],F[X],K);pe(ye.x,ye.y,h+j)}for(let X=0,Me=U.length;X<Me;X++){const ye=U[X];te=V[X];for(let R=0,M=ye.length;R<M;R++){const G=H(ye[R],te[R],K);x?pe(G.x,G.y+m[c-1].y,m[c-1].x+j):pe(G.x,G.y,h+j)}}}re(),he();function re(){const b=r.length/3;if(d){let q=0,j=z*q;for(let K=0;K<ie;K++){const X=ee[K];k(X[2]+j,X[1]+j,X[0]+j)}q=c+v*2,j=z*q;for(let K=0;K<ie;K++){const X=ee[K];k(X[0]+j,X[1]+j,X[2]+j)}}else{for(let q=0;q<ie;q++){const j=ee[q];k(j[2],j[1],j[0])}for(let q=0;q<ie;q++){const j=ee[q];k(j[0]+z*c,j[1]+z*c,j[2]+z*c)}}i.addGroup(b,r.length/3-b,0)}function he(){const b=r.length/3;let q=0;ge(L,q),q+=L.length;for(let j=0,K=U.length;j<K;j++){const X=U[j];ge(X,q),q+=X.length}i.addGroup(b,r.length/3-b,1)}function ge(b,q){let j=b.length;for(;--j>=0;){const K=j;let X=j-1;X<0&&(X=b.length-1);for(let Me=0,ye=c+v*2;Me<ye;Me++){const R=z*Me,M=z*(Me+1),G=q+K+R,fe=q+X+R,ue=q+X+M,le=q+K+M;D(G,fe,ue,le)}}}function pe(b,q,j){l.push(b),l.push(q),l.push(j)}function k(b,q,j){ne(b),ne(q),ne(j);const K=r.length/3,X=_.generateTopUV(i,r,K-3,K-2,K-1);J(X[0]),J(X[1]),J(X[2])}function D(b,q,j,K){ne(b),ne(q),ne(K),ne(q),ne(j),ne(K);const X=r.length/3,Me=_.generateSideWallUV(i,r,X-6,X-3,X-2,X-1);J(Me[0]),J(Me[1]),J(Me[3]),J(Me[1]),J(Me[2]),J(Me[3])}function ne(b){r.push(l[b*3+0]),r.push(l[b*3+1]),r.push(l[b*3+2])}function J(b){o.push(b.x),o.push(b.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return RR(n,i,e)}static fromJSON(e,n){const i=[];for(let o=0,s=e.shapes.length;o<s;o++){const a=n[e.shapes[o]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new ld[r.type]().fromJSON(r)),new yh(i,e.options)}}const AR={generateTopUV:function(t,e,n,i,r){const o=e[n*3],s=e[n*3+1],a=e[i*3],l=e[i*3+1],u=e[r*3],c=e[r*3+1];return[new me(o,s),new me(a,l),new me(u,c)]},generateSideWallUV:function(t,e,n,i,r,o){const s=e[n*3],a=e[n*3+1],l=e[n*3+2],u=e[i*3],c=e[i*3+1],h=e[i*3+2],d=e[r*3],p=e[r*3+1],g=e[r*3+2],y=e[o*3],v=e[o*3+1],f=e[o*3+2];return Math.abs(a-c)<Math.abs(s-u)?[new me(s,1-l),new me(u,1-h),new me(d,1-g),new me(y,1-f)]:[new me(a,1-l),new me(c,1-h),new me(p,1-g),new me(v,1-f)]}};function RR(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const o=t[i];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class rs extends Kr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=r_,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class z_ extends Ct{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class bR extends z_{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const ef=new xt,mg=new O,gg=new O;class CR{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hh,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;mg.setFromMatrixPosition(e.matrixWorld),n.position.copy(mg),gg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(gg),n.updateMatrixWorld(),ef.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ef),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ef)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class PR extends CR{constructor(){super(new x_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class LR extends z_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new PR}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class DR extends $A{constructor(e=10,n=10,i=4473924,r=8947848){i=new Fe(i),r=new Fe(r);const o=n/2,s=e/n,a=e/2,l=[],u=[];for(let d=0,p=0,g=-a;d<=n;d++,g+=s){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const y=d===o?i:r;y.toArray(u,p),p+=3,y.toArray(u,p),p+=3,y.toArray(u,p),p+=3,y.toArray(u,p),p+=3}const c=new Vn;c.setAttribute("position",new Tn(l,3)),c.setAttribute("color",new Tn(u,3));const h=new P_({vertexColors:!0,toneMapped:!1});super(c,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ch}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ch);function tf(t,e,n){return Math.min(n,Math.max(e,t))}function zu(t){const e=t.replace("#","");return{r:parseInt(e.substring(0,2),16)||0,g:parseInt(e.substring(2,4),16)||0,b:parseInt(e.substring(4,6),16)||0}}function ga(t,e,n){const i=tf(t.r*e,0,255)|0,r=tf(t.g*e,0,255)|0,o=tf(t.b*e,0,255)|0;return`rgba(${i},${r},${o},${n})`}function IR(t,e){return e==="concrete"?30:e==="marble"?6:e==="tile"?4:t==="roof"?26:t==="wall"?18:8}function NR(t,e){return t==="marble"?Math.max(.2,e-.45):t==="tile"?Math.max(.3,e-.3):e}function UR(t,e,n){const i=zu(e),r=n/8,o=n/4;t.strokeStyle=ga(i,.5,.9),t.lineWidth=3;for(let a=0;a<=n;a+=r)t.beginPath(),t.moveTo(0,a),t.lineTo(n,a),t.stroke();let s=0;for(let a=0;a<n;a+=r){const l=s%2===0?0:o/2;for(let u=-o;u<=n+o;u+=o)t.beginPath(),t.moveTo(u+l,a),t.lineTo(u+l,a+r),t.stroke();s++}}function OR(t,e,n){const i=zu(e),r=n/4;t.strokeStyle=ga(i,1.35,.85),t.lineWidth=3;for(let o=0;o<=4;o++)t.beginPath(),t.moveTo(o*r,0),t.lineTo(o*r,n),t.stroke(),t.beginPath(),t.moveTo(0,o*r),t.lineTo(n,o*r),t.stroke()}function FR(t,e,n){const i=zu(e),r=n/6;for(let o=0;o<n;o+=r){t.strokeStyle=ga(i,.55,.85),t.lineWidth=2,t.beginPath(),t.moveTo(0,o),t.lineTo(n,o),t.stroke();for(let s=0;s<5;s++){const a=o+Math.random()*r,l=.85+Math.random()*.35;t.strokeStyle=ga(i,l,.35),t.lineWidth=1,t.beginPath();const u=Math.random()*n*.6;t.moveTo(u,a),t.lineTo(u+n*(.2+Math.random()*.3),a),t.stroke()}}}function kR(t,e,n){const i=zu(e);for(let r=0;r<4;r++){const o=r%2===0?1.4:.7;t.strokeStyle=ga(i,o,.4),t.lineWidth=1+Math.random()*1.5,t.beginPath();let s=Math.random()*n,a=0;for(t.moveTo(s,a);a<n;){const l=s+(Math.random()-.5)*n*.3,u=a+n/6;t.quadraticCurveTo(s+(Math.random()-.5)*20,(a+u)/2,l,u),s=l,a=u}t.stroke()}}function zR(t,e,n,i){n==="brick"?UR(t,e,i):n==="tile"?OR(t,e,i):n==="wood"?FR(t,e,i):n==="marble"&&kR(t,e,i)}function vg(t,e=2.7,n=0){var d;if(!t.length)return{x:10,z:8,radius:12,targetY:1};let i=1/0,r=1/0,o=-1/0,s=-1/0,a=0;t.forEach(p=>{i=Math.min(i,p.gx),o=Math.max(o,p.gx+p.gw),r=Math.min(r,p.gy),s=Math.max(s,p.gy+p.gh),a=Math.max(a,p.floor??0)});const l=Bu(t,e,0,n),u=((d=t.find(p=>(p.floor??0)===a))==null?void 0:d.wall_height)??e,c=l.get(a)+u+or,h=Math.max(o-i,s-r);return{x:(i+o)/2,z:(r+s)/2,radius:Math.max(h,c)*1.5+4,targetY:Math.max(1,c*.55)}}function Bu(t,e,n=0,i=0){const r=Math.max(n,0,...t.map(a=>a.floor??0)),o=new Map;let s=0;for(let a=0;a<=r;a++){o.set(a,s);const l=t.find(c=>(c.floor??0)===a),u=(l==null?void 0:l.wall_height)??e;s+=u+or+i}return o}function Xo(t,e,n){return Math.min(n,Math.max(e,t))}function B_(t){if(t.points&&t.points.length>=3){const e=t.points;let n=0;for(let i=0;i<e.length;i++){const r=e[i],o=e[(i+1)%e.length];n+=r.x*o.y-o.x*r.y}return Math.abs(n)/2}return t.gw*t.gh}const ht=.15,Ft=.9,H_=2.05,dn=.9,hu=.9,Rr=.3,BR=.4,nf=.6,or=.18,os=.22,wr=.35,Ns=28*Math.PI/180,sr=0,Si=.55,pu=.75,HR=.85,G_={bed:{label:"سرير",w:1.6,d:2,category:"غرفة نوم"},wardrobe:{label:"خزانة",w:1.2,d:.6,category:"غرفة نوم"},nightstand:{label:"كومودينو",w:.45,d:.4,category:"غرفة نوم"},sofa:{label:"أريكة",w:1.8,d:.85,category:"صالة"},armchair:{label:"كرسي بذراعين",w:.75,d:.75,category:"صالة"},tv_unit:{label:"وحدة تلفزيون",w:1.4,d:.4,category:"صالة"},dining_table:{label:"طاولة سفرة",w:1.6,d:.9,category:"صالة"},table:{label:"طاولة",w:1.4,d:.8,category:"عام"},chair:{label:"كرسي",w:.45,d:.45,category:"عام"},toilet:{label:"مرحاض",w:.4,d:.65,category:"حمام"},bathtub:{label:"بانيو",w:1.7,d:.75,category:"حمام"},shower:{label:"كابينة دش",w:.9,d:.9,category:"حمام"},sink:{label:"مغسلة حمام",w:.9,d:.55,category:"حمام"},kitchen_counter:{label:"كاونتر مطبخ",w:2,d:.6,category:"مطبخ"},stove:{label:"موقد",w:.6,d:.6,category:"مطبخ"},fridge:{label:"ثلاجة",w:.7,d:.7,category:"مطبخ"},desk:{label:"مكتب",w:1.2,d:.6,category:"مكتب"},bookshelf:{label:"مكتبة",w:.9,d:.3,category:"مكتب"}};function GR(t,e,n="plaster"){const r=document.createElement("canvas");r.width=256,r.height=256;const o=r.getContext("2d"),a=`#${new Fe(t).getHexString()}`;o.fillStyle=a,o.fillRect(0,0,256,256);const l=IR(e,n),u=o.getImageData(0,0,256,256),c=u.data;for(let d=0;d<c.length;d+=4){const p=(Math.random()-.5)*l;c[d]=Xo(c[d]+p,0,255),c[d+1]=Xo(c[d+1]+p,0,255),c[d+2]=Xo(c[d+2]+p,0,255)}if(o.putImageData(u,0,0),zR(o,a,n,256),e==="roof"&&n==="plaster"){o.strokeStyle="rgba(0,0,0,0.12)",o.lineWidth=1;for(let d=0;d<=256;d+=32)o.beginPath(),o.moveTo(0,d+.5),o.lineTo(256,d+.5),o.stroke()}const h=new gh(r);return h.wrapS=Vr,h.wrapT=Vr,h.needsUpdate=!0,h}function VR(t,e,n,i="plaster"){const r=`${n}:${i}:${e}`;let o=t.get(r);return o||(o=GR(e,n,i),t.set(r,o)),o}function WR(){const e=new Float32Array(16384);for(let u=0;u<e.length;u++)e[u]=Math.random();const n=new Float32Array(128*128);for(let u=0;u<128;u++)for(let c=0;c<128;c++){let h=0;for(let d=-1;d<=1;d++)for(let p=-1;p<=1;p++){const g=(c+p+128)%128,y=(u+d+128)%128;h+=e[y*128+g]}n[u*128+c]=h/9}const i=document.createElement("canvas");i.width=128,i.height=128;const r=i.getContext("2d"),o=r.createImageData(128,128),s=o.data,a=1.2;for(let u=0;u<128;u++)for(let c=0;c<128;c++){const h=n[u*128+(c-1+128)%128],d=n[u*128+(c+1)%128],p=n[(u-1+128)%128*128+c],g=n[(u+1)%128*128+c];let y=(h-d)*a,v=(p-g)*a;const f=1,_=Math.hypot(y,v,f),m=(u*128+c)*4;s[m]=(y/_*.5+.5)*255,s[m+1]=(v/_*.5+.5)*255,s[m+2]=(f/_*.5+.5)*255,s[m+3]=255}r.putImageData(o,0,0);const l=new gh(i);return l.wrapS=Vr,l.wrapT=Vr,l.needsUpdate=!0,l}function XR(t){const e="normal:wall";let n=t.get(e);return n||(n=WR(),t.set(e,n)),n}function zt(t,e,n,i,r,o,s="plaster"){const l=VR(t,e,n,s).clone();l.needsUpdate=!0;const u=1.2,c=Math.max(1,Math.round(i/u)),h=Math.max(1,Math.round(r/u));l.repeat.set(c,h);const d={map:l,roughness:NR(s,o)};if(n==="wall"){const p=XR(t).clone();p.needsUpdate=!0,p.repeat.set(c,h),d.normalMap=p,d.normalScale=new me(.5,.5)}return new rs(d)}function Tt(t,e,n,i,r,o,s,a,l,u){const c=new kn(new Zr(Math.max(n,.03),Math.max(i,.03),Math.max(r,.03)),l);return c.position.set(o,s+i/2,a),c.scale.y=.001,c.castShadow=!0,c.receiveShadow=!0,t.add(c),e.meshes.push({mesh:c,height:i,baseY:s,delay:u}),c}function jR(t,e,n){if(n)return t<=Ft+.4?[]:[{start:(t-Ft)/2,width:Ft,sill:0,openH:H_,isDoor:!0}];const i=Xo(1.3,.3,e-hu-.25);if(i<=.3)return[];const r=t-2*BR;let o=0;if(r>=2*dn+nf?o=2:r>=dn&&(o=1),o===0)return[];const s=o*dn+(o-1)*nf,a=(t-s)/2,l=[];for(let u=0;u<o;u++)l.push({start:a+u*(dn+nf),width:dn,sill:hu,openH:i,isDoor:!1});return l}const Oo=1e-6,xo=(t,e)=>Math.abs(t-e)<Oo,fd=.01;function YR(t){const e=[];for(let n=0;n<t.length;n++){const i=t[n],r=i.floor??0;for(let o=n+1;o<t.length;o++){const s=t[o];if((s.floor??0)===r){if(xo(s.gx,i.gx+i.gw)||xo(i.gx,s.gx+s.gw)){const a=Math.max(i.gy,s.gy),l=Math.min(i.gy+i.gh,s.gy+s.gh);l-a>fd&&(xo(s.gx,i.gx+i.gw)?e.push({a:{room:i,wall:"right"},b:{room:s,wall:"left"},start:a,end:l}):e.push({a:{room:i,wall:"left"},b:{room:s,wall:"right"},start:a,end:l}))}if(xo(s.gy,i.gy+i.gh)||xo(i.gy,s.gy+s.gh)){const a=Math.max(i.gx,s.gx),l=Math.min(i.gx+i.gw,s.gx+s.gw);l-a>fd&&(xo(s.gy,i.gy+i.gh)?e.push({a:{room:i,wall:"bottom"},b:{room:s,wall:"top"},start:a,end:l}):e.push({a:{room:i,wall:"top"},b:{room:s,wall:"bottom"},start:a,end:l}))}}}}return e}function V_(t){if(!t.length)return[];const e=t.slice().sort((i,r)=>i.start-r.start),n=[{...e[0]}];for(let i=1;i<e.length;i++){const r=e[i],o=n[n.length-1];r.start<=o.end+Oo?o.end=Math.max(o.end,r.end):n.push({...r})}return n}function W_(t,e,n=.02){const i=[];let r=0;return t.forEach(o=>{o.start>r+n&&i.push({start:r,end:o.start}),r=Math.max(r,o.end)}),e>r+n&&i.push({start:r,end:e}),i}function qR(t){const e=new Map,n=(r,o,s,a)=>{const l=`${r}:${o}`;e.has(l)||e.set(l,[]),e.get(l).push({start:s,end:a})};t.forEach(r=>{const{room:o,wall:s}=r.a,{room:a,wall:l}=r.b,u=s==="left"||s==="right"?o.gy:o.gx,c=l==="left"||l==="right"?a.gy:a.gx;n(o.id,s,r.start-u,r.end-u),n(a.id,l,r.start-c,r.end-c)});const i=new Map;return e.forEach((r,o)=>i.set(o,V_(r))),i}const _l=.02;function X_(t,e,n){return n!=null?`${t}:edge:${n}`:`${t}:${e}`}function _g(t){if(t.points&&t.points.length>=3)return t.points.map((o,s)=>{const a=t.points[(s+1)%t.points.length];return{room:t,wall:null,edgeIndex:s,p1:o,p2:a,length:Math.hypot(a.x-o.x,a.y-o.y)}});const{gx:e,gy:n,gw:i,gh:r}=t;return[{room:t,wall:"top",edgeIndex:null,p1:{x:e,y:n},p2:{x:e+i,y:n},length:i},{room:t,wall:"bottom",edgeIndex:null,p1:{x:e,y:n+r},p2:{x:e+i,y:n+r},length:i},{room:t,wall:"left",edgeIndex:null,p1:{x:e,y:n},p2:{x:e,y:n+r},length:r},{room:t,wall:"right",edgeIndex:null,p1:{x:e+i,y:n},p2:{x:e+i,y:n+r},length:r}]}function $R(t,e){const n=t.length,i=e.length;if(!(n>_l)||!(i>_l))return null;const r=(t.p2.x-t.p1.x)/n,o=(t.p2.y-t.p1.y)/n,s=f=>Math.abs((f.x-t.p1.x)*o-(f.y-t.p1.y)*r);if(s(e.p1)>_l||s(e.p2)>_l)return null;const a=f=>(f.x-t.p1.x)*r+(f.y-t.p1.y)*o,l=a(e.p1),u=a(e.p2),c=Math.max(0,Math.min(l,u)),h=Math.min(n,Math.max(l,u));if(h-c<=fd)return null;const d=u<l,p=f=>d?l-f:f-l,g=f=>Math.min(i,Math.max(0,f)),y=p(c),v=p(h);return{a:{start:c,end:h},b:{start:g(Math.min(y,v)),end:g(Math.max(y,v))},p1:{x:t.p1.x+r*c,y:t.p1.y+o*c},p2:{x:t.p1.x+r*h,y:t.p1.y+o*h},length:h-c,flipped:d}}function KR(t){const e=i=>!!(i.points&&i.points.length>=3),n=[];for(let i=0;i<t.length;i++){const r=t[i],o=r.floor??0;for(let s=i+1;s<t.length;s++){const a=t[s];(a.floor??0)===o&&(!e(r)&&!e(a)||_g(r).forEach(l=>{_g(a).forEach(u=>{const c=$R(l,u);c&&n.push({a:{room:r,wall:l.wall,edgeIndex:l.edgeIndex,start:c.a.start,end:c.a.end,edgeLength:l.length},b:{room:a,wall:u.wall,edgeIndex:u.edgeIndex,start:c.b.start,end:c.b.end,edgeLength:u.length},p1:c.p1,p2:c.p2,length:c.length,flipped:c.flipped})})}))}}return n}function ZR(t,e){const n=new Map;return e.forEach(i=>{[i.a,i.b].forEach(r=>{const o=X_(r.room.id,r.wall,r.edgeIndex);n.has(o)||n.set(o,[]),n.get(o).push({start:r.start,end:r.end})})}),n.forEach((i,r)=>{t.set(r,V_([...t.get(r)||[],...i]))}),t}function yg(t){const e=[];return t.forEach(n=>{e.some(i=>Math.abs(i.start-n.start)<.05)||e.push(n)}),e}function mu(t,e,n){const i=t.kind==="door",r=i?Ft:dn,o=i?0:hu,s=i?H_:Xo(1.3,.3,n-hu-.25);return{start:Xo(Number(t.position)-r/2,0,Math.max(0,e-r)),width:r,sill:o,openH:s,isDoor:i}}function JR(t,e,n,i,r){return t==null?jR(n,i,r):t.filter(o=>o.wall===e).map(o=>mu(o,n,i))}function xg(t,e,n,i,r,o){const{axis:s,u0:a,fixed:l,wallLength:u,wallHeight:c,openings:h,floorBaseY:d=0}=o,p=f=>s==="x"?{x:a+f,z:l}:{x:l,z:a+f},g=h.slice().sort((f,_)=>f.start-_.start);let y=0;const v=[];g.forEach(f=>{f.start>y+.02&&v.push({start:y,end:f.start}),y=Math.max(y,f.start+f.width)}),y<u-.02&&v.push({start:y,end:u}),v.forEach(f=>{const _=f.end-f.start;if(_<=.02)return;const m=(f.start+f.end)/2,x=p(m),A=s==="x"?_:ht,S=s==="x"?ht:_,w=zt(n,i,"wall",_,c,.85,r);Tt(t,e,A,c,S,x.x,d,x.z,w,sr)}),g.forEach(f=>{const _=f.start+f.width/2,m=p(_),x=s==="x"?f.width:ht,A=s==="x"?ht:f.width;if(f.sill>.02){const P=zt(n,i,"wall",f.width,f.sill,.85,r);Tt(t,e,x,f.sill,A,m.x,d,m.z,P,sr)}const S=f.sill+f.openH,w=c-S;if(w>.02){const P=zt(n,i,"wall",f.width,w,.85,r);Tt(t,e,x,w,A,m.x,d+S,m.z,P,sr)}if(f.isDoor){const P=new rs({color:9132587,roughness:.7}),E=s==="x"?f.width-.06:.05,T=s==="x"?.05:f.width-.06;Tt(t,e,E,f.openH,T,m.x,d,m.z,P,pu)}else{const P=new rs({color:10475752,transparent:!0,opacity:.35,roughness:.05,metalness:.1,side:fn}),E=s==="x"?f.width-.05:.03,T=s==="x"?.03:f.width-.05,U=Tt(t,e,E,f.openH-.05,T,m.x,d+f.sill,m.z,P,pu);U.castShadow=!1}})}function QR(t,e,n,i,r,o,s,a,l,u,c,h){if(!c&&!h)return;if(c&&!h&&!i.points){if(i.roof_type==="gable"){eb(t,e,n,i,r,o,s,a,l,u);return}if(i.roof_type==="hip"){tb(t,e,n,i,r,o,s,l,u);return}}const p=`#${new Fe(s).multiplyScalar(.72).getHexString()}`,g=i.gw+os*2,y=i.gh+os*2,v=zt(n,p,"roof",g,y,.95);if(Tt(t,e,g,or,y,l,o+r,u,v,Si),!c)return;const f=i.gw+ht,_=i.gh+ht,m=o+r+or,x=l-i.gw/2,A=l+i.gw/2,S=u-i.gh/2,w=u+i.gh/2,P=zt(n,p,"roof",f,wr,.95),E=zt(n,p,"roof",_,wr,.95);Tt(t,e,f,wr,ht,l,m,S,P,Si),Tt(t,e,f,wr,ht,l,m,w,P,Si),Tt(t,e,ht,wr,_,x,m,u,E,Si),Tt(t,e,ht,wr,_,A,m,u,E,Si)}function eb(t,e,n,i,r,o,s,a,l,u){const c=i.gw>=i.gh,h=(c?i.gh:i.gw)+os*2,d=(c?i.gw:i.gh)+os*2,p=h/2,g=p*Math.tan(Ns),y=p/Math.cos(Ns),v=o+r,_=`#${new Fe(s).multiplyScalar(.72).getHexString()}`,m=zt(n,_,"roof",y,d,.95);[-1,1].forEach(P=>{const E=new Lr;E.position.set(l,v+g,u),c?E.rotation.x=P*Ns:E.rotation.z=-P*Ns,t.add(E);const T=c?d:y,U=c?y:d,W=c?0:P*y/2,ee=c?P*y/2:0;Tt(E,e,T,or,U,W,0,ee,m,Si)});const x=c?i.gh:i.gw,A=(c?i.gw:i.gh)/2,S=10,w=zt(n,s,"wall",x,g,.85,a);[-1,1].forEach(P=>{const E=c?l+P*A:l,T=c?u:u+P*A;for(let U=0;U<S;U++){const W=U/S,ee=(U+1)/S,L=g/S,H=g*(W+ee)/2,z=x*(1-(W+ee)/2);Tt(t,e,c?ht:z,L,c?z:ht,E,v+H-L/2,T,w,Si)}})}function Sg(t,e,n,i,r){const o=r/2,s=[t-n,-o,e-i],a=[t+n,-o,e-i],l=[t+n,-o,e+i],u=[t-n,-o,e+i],c=[t-(n-i),r-o,e],h=[t+(n-i),r-o,e],d=[u,l,h,u,h,c,a,s,c,a,c,h,s,u,c,l,a,h],p=new Vn;return p.setAttribute("position",new Bn(new Float32Array(d.flat()),3)),p.computeVertexNormals(),p}function tb(t,e,n,i,r,o,s,a,l){const u=i.gw>=i.gh,c=(u?i.gh:i.gw)+os*2,h=(u?i.gw:i.gh)+os*2,d=c/2,p=h/2,g=d*Math.tan(Ns),y=u?Sg(a,l,p,d,g):Sg(0,0,p,d,g);u||(y.rotateY(Math.PI/2),y.translate(a,0,l));const f=`#${new Fe(s).multiplyScalar(.72).getHexString()}`,_=zt(n,f,"roof",h,c,.95);_.side=fn,pd(t,e,y,_,o+r,g,Si)}function j_(t,e,n){switch(n){case 90:return{x:-e,z:t};case 180:return{x:-t,z:-e};case 270:return{x:e,z:-t};default:return{x:t,z:e}}}function Bt(t,e,n,i,r,o,s,a){const l=i.rotation||0,{x:u,z:c}=j_(a.cx,a.cz,l),h=l===90||l===270,d=h?a.d:a.w,p=h?a.w:a.d,g=zt(n,a.color,"wall",d,a.h,.75);Tt(t,e,d,a.h,p,r+u,s+a.bottomY,o+c,g,HR)}function nb(t,e,n,i,r,o,s){const a=l=>Bt(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:1.6,d:2,h:.35,bottomY:0,color:"#8B5A2B"}),a({cx:0,cz:0,w:1.5,d:1.9,h:.18,bottomY:.35,color:"#EDE7DC"}),a({cx:0,cz:-.96,w:1.6,d:.08,h:.55,bottomY:.35,color:"#8B5A2B"})}function ib(t,e,n,i,r,o,s){const a=l=>Bt(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:1.8,d:.85,h:.4,bottomY:0,color:"#3B4454"}),a({cx:0,cz:-.35,w:1.8,d:.15,h:.35,bottomY:.4,color:"#3B4454"}),a({cx:-.825,cz:0,w:.15,d:.85,h:.55,bottomY:0,color:"#2C3444"}),a({cx:.825,cz:0,w:.15,d:.85,h:.55,bottomY:0,color:"#2C3444"})}function rb(t,e,n,i,r,o,s){const a=u=>Bt(t,e,n,i,r,o,s,u);a({cx:0,cz:0,w:1.4,d:.8,h:.05,bottomY:.7,color:"#6B4A32"}),[[-.65,-.35],[.65,-.35],[-.65,.35],[.65,.35]].forEach(([u,c])=>a({cx:u,cz:c,w:.06,d:.06,h:.7,bottomY:0,color:"#3A2A1E"}))}function ob(t,e,n,i,r,o,s){const a=l=>Bt(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:1.2,d:.6,h:1.85,bottomY:0,color:"#C9A876"}),a({cx:0,cz:0,w:1.2,d:.6,h:.05,bottomY:1.85,color:"#A9895C"})}function sb(t,e,n,i,r,o,s){const a=l=>Bt(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:.9,d:.55,h:.82,bottomY:0,color:"#E8ECF0"}),a({cx:0,cz:-.05,w:.55,d:.35,h:.08,bottomY:.75,color:"#B9C2CC"}),a({cx:0,cz:-.25,w:.9,d:.05,h:.35,bottomY:.82,color:"#E8ECF0"})}function ab(t,e,n,i,r,o,s){const a=l=>Bt(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:.45,d:.4,h:.48,bottomY:0,color:"#C9A876"}),a({cx:0,cz:0,w:.45,d:.4,h:.02,bottomY:.48,color:"#A9895C"})}function lb(t,e,n,i,r,o,s){const a=l=>Bt(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:.75,d:.75,h:.4,bottomY:0,color:"#3B4454"}),a({cx:0,cz:-.3,w:.75,d:.15,h:.35,bottomY:.4,color:"#3B4454"}),a({cx:-.3,cz:0,w:.15,d:.75,h:.5,bottomY:0,color:"#2C3444"}),a({cx:.3,cz:0,w:.15,d:.75,h:.5,bottomY:0,color:"#2C3444"})}function ub(t,e,n,i,r,o,s){const a=l=>Bt(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:1.4,d:.4,h:.45,bottomY:0,color:"#3B4454"}),a({cx:0,cz:-.15,w:1.1,d:.05,h:.65,bottomY:.45,color:"#1A1A1D"})}function cb(t,e,n,i,r,o,s){const a=u=>Bt(t,e,n,i,r,o,s,u);a({cx:0,cz:0,w:1.6,d:.9,h:.05,bottomY:.72,color:"#5A3D28"}),[[-.72,-.4],[.72,-.4],[-.72,.4],[.72,.4]].forEach(([u,c])=>a({cx:u,cz:c,w:.07,d:.07,h:.72,bottomY:0,color:"#3A2A1E"}))}function fb(t,e,n,i,r,o,s){const a=u=>Bt(t,e,n,i,r,o,s,u);a({cx:0,cz:0,w:.42,d:.42,h:.05,bottomY:.45,color:"#4A4A52"}),a({cx:0,cz:-.185,w:.42,d:.05,h:.4,bottomY:.45,color:"#4A4A52"}),[[-.17,-.17],[.17,-.17],[-.17,.17],[.17,.17]].forEach(([u,c])=>a({cx:u,cz:c,w:.04,d:.04,h:.45,bottomY:0,color:"#2C3444"}))}function db(t,e,n,i,r,o,s){const a=l=>Bt(t,e,n,i,r,o,s,l);a({cx:0,cz:.08,w:.4,d:.5,h:.4,bottomY:0,color:"#F2F2F4"}),a({cx:0,cz:-.28,w:.38,d:.15,h:.35,bottomY:.4,color:"#F2F2F4"})}function hb(t,e,n,i,r,o,s){const a=l=>Bt(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:1.7,d:.75,h:.55,bottomY:0,color:"#F2F2F4"}),a({cx:0,cz:0,w:1.5,d:.55,h:.4,bottomY:.12,color:"#DCE3E8"})}function pb(t,e,n,i,r,o,s){const a=l=>Bt(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:.9,d:.9,h:.05,bottomY:0,color:"#DCE3E8"}),a({cx:-.44,cz:0,w:.03,d:.9,h:1.9,bottomY:.05,color:"#9FD8E8"}),a({cx:0,cz:-.44,w:.9,d:.03,h:1.9,bottomY:.05,color:"#9FD8E8"})}function mb(t,e,n,i,r,o,s){const a=l=>Bt(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:2,d:.6,h:.85,bottomY:0,color:"#DCDCE1"}),a({cx:0,cz:0,w:2,d:.62,h:.04,bottomY:.85,color:"#1A1A1D"})}function gb(t,e,n,i,r,o,s){const a=l=>Bt(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:.6,d:.6,h:.85,bottomY:0,color:"#DCDCE1"}),a({cx:0,cz:0,w:.55,d:.55,h:.03,bottomY:.85,color:"#1A1A1D"})}function vb(t,e,n,i,r,o,s){const a=l=>Bt(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:.7,d:.7,h:1.8,bottomY:0,color:"#E8ECF0"}),a({cx:.3,cz:-.36,w:.03,d:.1,h:.4,bottomY:.9,color:"#8E8E96"})}function _b(t,e,n,i,r,o,s){const a=u=>Bt(t,e,n,i,r,o,s,u);a({cx:0,cz:0,w:1.2,d:.6,h:.04,bottomY:.72,color:"#6B4A32"}),a({cx:.4,cz:0,w:.35,d:.55,h:.72,bottomY:0,color:"#4A4A52"}),[[-.55,-.25],[-.55,.25]].forEach(([u,c])=>a({cx:u,cz:c,w:.05,d:.05,h:.72,bottomY:0,color:"#3A2A1E"}))}function yb(t,e,n,i,r,o,s){const a=l=>Bt(t,e,n,i,r,o,s,l);a({cx:0,cz:0,w:.9,d:.3,h:1.8,bottomY:0,color:"#8B5A2B"}),[.5,1,1.5].forEach(l=>a({cx:0,cz:0,w:.85,d:.28,h:.03,bottomY:l,color:"#6B4A32"}))}function xb(t,e,n,i,r,o,s){switch(i.kind){case"bed":return nb(t,e,n,i,r,o,s);case"sofa":return ib(t,e,n,i,r,o,s);case"table":return rb(t,e,n,i,r,o,s);case"wardrobe":return ob(t,e,n,i,r,o,s);case"sink":return sb(t,e,n,i,r,o,s);case"nightstand":return ab(t,e,n,i,r,o,s);case"armchair":return lb(t,e,n,i,r,o,s);case"tv_unit":return ub(t,e,n,i,r,o,s);case"dining_table":return cb(t,e,n,i,r,o,s);case"chair":return fb(t,e,n,i,r,o,s);case"toilet":return db(t,e,n,i,r,o,s);case"bathtub":return hb(t,e,n,i,r,o,s);case"shower":return pb(t,e,n,i,r,o,s);case"kitchen_counter":return mb(t,e,n,i,r,o,s);case"stove":return gb(t,e,n,i,r,o,s);case"fridge":return vb(t,e,n,i,r,o,s);case"desk":return _b(t,e,n,i,r,o,s);case"bookshelf":return yb(t,e,n,i,r,o,s);default:return}}const dd=1,Ul=.28,Sb=.18,Eb=.85;function xh(t){const e=Math.max(4,Math.round(t/Sb));return{w:dd,d:e*Ul,numSteps:e}}function Mb(t,e,n,i,r,o,s,a,l){const{d:u,numSteps:c}=xh(r),h=r/c,d=i.rotation||0,g=`#${new Fe(l).multiplyScalar(.85).getHexString()}`,y=d===90||d===270;for(let v=0;v<c;v++){const f=-u/2+(v+.5)*Ul,_=(v+1)*h,{x:m,z:x}=j_(0,f,d),A=y?Ul:dd,S=y?dd:Ul,w=zt(n,g,"wall",A,_,.8);Tt(t,e,A,_,S,o+m,a,s+x,w,Eb)}}function hd(t,e,n,i,r,o,s,a,l,u,c=[]){const h=s.x-o.x,d=s.y-o.y,p=Math.hypot(h,d);if(p<.02)return;const g=Math.atan2(h,d),y=(o.x+s.x)/2-u.x,v=(o.y+s.y)/2-u.z,f=new Lr;f.position.set(y,l,v),f.rotation.y=g,t.add(f);const _=c.slice().sort((S,w)=>S.start-w.start),m=S=>S-p/2;let x=0;const A=[];_.forEach(S=>{S.start>x+.02&&A.push({start:x,end:S.start}),x=Math.max(x,S.start+S.width)}),x<p-.02&&A.push({start:x,end:p}),A.forEach(S=>{const w=S.end-S.start;if(w<=.02)return;const P=zt(n,i,"wall",w,a,.85,r);Tt(f,e,ht,a,w,0,0,m((S.start+S.end)/2),P,sr)}),_.forEach(S=>{const w=m(S.start+S.width/2);if(S.sill>.02){const T=zt(n,i,"wall",S.width,S.sill,.85,r);Tt(f,e,ht,S.sill,S.width,0,0,w,T,sr)}const P=S.sill+S.openH,E=a-P;if(E>.02){const T=zt(n,i,"wall",S.width,E,.85,r);Tt(f,e,ht,E,S.width,0,P,w,T,sr)}if(S.isDoor){const T=new rs({color:9132587,roughness:.7});Tt(f,e,.05,S.openH,S.width-.06,0,0,w,T,pu)}else{const T=new rs({color:10475752,transparent:!0,opacity:.35,roughness:.05,metalness:.1,side:fn}),U=Tt(f,e,.03,S.openH-.05,S.width-.05,0,S.sill,w,T,pu);U.castShadow=!1}})}function Eg(t,e,n){const i=new U_;t.forEach((o,s)=>{const a=o.x-n.x,l=o.y-n.z;s===0?i.moveTo(a,l):i.lineTo(a,l)}),i.closePath();const r=new yh(i,{depth:e,bevelEnabled:!1,curveSegments:1});return r.translate(0,0,-e/2),r.rotateX(Math.PI/2),r}function pd(t,e,n,i,r,o,s){const a=new kn(n,i);return a.position.set(0,r+o/2,0),a.scale.y=.001,a.castShadow=!0,a.receiveShadow=!0,t.add(a),e.meshes.push({mesh:a,height:o,baseY:r,delay:s}),a}function wb(t,e,n,i,r,o,s,a,l,u,c,h=!1){const d=i.points;if(!d||d.length<3)return;const p=Eg(d,.06,l),g=zt(n,i.color,"floor",4,4,.9,i.floor_material);g.side=fn,pd(t,e,p,g,o,.06,sr);for(let m=0;m<d.length;m++){const x=d[m],A=d[(m+1)%d.length],S=Math.hypot(A.x-x.x,A.y-x.y),w=(i.openings||[]).filter(E=>E.edge_index===m).map(E=>mu(E,S,r)),P=(c==null?void 0:c.get(X_(i.id,null,m)))||[];W_(P,S).forEach(E=>{const T=W=>({x:x.x+(A.x-x.x)*W/S,y:x.y+(A.y-x.y)*W/S}),U=w.filter(W=>W.start>=E.start-.02&&W.start+W.width<=E.end+.02).map(W=>({...W,start:W.start-E.start}));hd(t,e,n,s,a,T(E.start),T(E.end),r,o,l,U)})}if(h||!i.has_roof&&!u)return;const v=`#${new Fe(s).multiplyScalar(.72).getHexString()}`,f=Eg(d,or,l),_=zt(n,v,"roof",4,4,.95);if(_.side=fn,pd(t,e,f,_,o+r,or,Si),i.has_roof){const m=o+r+or;for(let x=0;x<d.length;x++)hd(t,e,n,v,a,d[x],d[(x+1)%d.length],wr,m,l)}}const Tb=[{wall:"top",axis:"x",doorFallback:!1},{wall:"bottom",axis:"x",doorFallback:!0},{wall:"left",axis:"z",doorFallback:!1},{wall:"right",axis:"z",doorFallback:!1}];function Y_(t){var e,n,i;for((e=t.geometry)==null||e.dispose(),t.material&&((n=t.material.map)==null||n.dispose(),(i=t.material.normalMap)==null||i.dispose(),t.material.dispose());t.children.length;)Y_(t.children.pop())}function Ab(t,e){const n=(t.floor??0)+1,i=t.gx,r=t.gx+t.gw,o=t.gy,s=t.gy+t.gh;return e.some(a=>{if(a===t||(a.floor??0)!==n)return!1;const l=a.gx,u=a.gx+a.gw,c=a.gy,h=a.gy+a.gh;return i<u&&r>l&&o<h&&s>c})}function Rb(t,e,n,i,r,o,s,a,l="plaster",u={}){const c=!!u.hideRoofs,h=u.floorGap??0,d=u.columns||[];for(;t.children.length;)Y_(t.children.pop());s.meshes=[];const p=e.filter(m=>!m.points),g=YR(p),y=KR(e),v=ZR(qR(g),y),f=Math.max(0,...(n||[]).map(m=>(m.floor??0)+1)),_=Bu(e,i,f,h);e.forEach(m=>{const x=m.floor??0,A=_.get(x),S=m.wall_height??i,w=m.wall_color??r,P=m.wall_material??l,E=Ab(m,e);if(m.points){wb(t,s,a,m,S,A,w,P,o,E,v,c);return}const T=m.gx+m.gw/2-o.x,U=m.gy+m.gh/2-o.z,W=zt(a,m.color,"floor",m.gw,m.gh,.9,m.floor_material),ee=new kn(new Zr(m.gw,.06,m.gh),W);ee.position.set(T,A+.03,U),ee.receiveShadow=!0,t.add(ee);const L=m.gx-o.x,H=m.gx+m.gw-o.x,z=m.gy-o.z,ie=m.gy+m.gh-o.z;Tb.forEach(({wall:N,axis:F,doorFallback:V})=>{const te=F==="x"?m.gw:m.gh,oe=F==="x"?L:z,Y=N==="top"?z:N==="bottom"?ie:N==="left"?L:H,re=v.get(`${m.id}:${N}`)||[],he=W_(re,te);if(he.length===0)return;const ge=JR(m.openings,N,te,S,V);he.forEach(pe=>{const k=pe.start<=Oo?ht/2:0,D=pe.end>=te-Oo?ht/2:0,ne=pe.end-pe.start+k+D,J=oe+pe.start-k,b=ge.filter(q=>q.start>=pe.start-.02&&q.start+q.width<=pe.end+.02).map(q=>({...q,start:q.start-pe.start+k}));xg(t,s,a,w,P,{axis:F,u0:J,fixed:Y,wallLength:ne,wallHeight:S,floorBaseY:A,openings:b})})}),QR(t,s,a,m,S,A,w,P,T,U,!c&&!!m.has_roof,!c&&E),(m.furniture||[]).forEach(N=>{xb(t,s,a,N,m.gx+Number(N.x)-o.x,m.gy+Number(N.y)-o.z,A)})}),g.forEach(m=>{const{room:x,wall:A}=m.a,{room:S,wall:w}=m.b,P=_.get(x.floor??0),E=x.wall_height??i,T=x.wall_color??r,U=x.wall_material??l,W=x.gx-o.x,ee=x.gx+x.gw-o.x,L=x.gy-o.z,H=x.gy+x.gh-o.z,z=A==="left"||A==="right"?"z":"x",ie=z==="z"?x.gh:x.gw,N=z==="z"?S.gh:S.gw,F=z==="z"?x.gy:x.gx,V=z==="z"?S.gy:S.gx,te=z==="z"?L:W,oe=z==="z"?A==="right"?ee:W:A==="bottom"?H:L,Y=m.start-F,re=m.end-F,he=Y<=Oo?ht/2:0,ge=re>=ie-Oo?ht/2:0,pe=re-Y+he+ge,k=te+Y-he,D=(J,b,q,j)=>(J.openings||[]).filter(K=>K.wall===b&&K.kind==="door").filter(K=>{const X=q+Number(K.position);return X-Ft/2>=m.start-.02&&X+Ft/2<=m.end+.02}).map(K=>{const X=mu(K,j,E);return{...X,start:q+X.start-m.start+he}}),ne=yg([...D(x,A,F,ie),...D(S,w,V,N)]);xg(t,s,a,T,U,{axis:z,u0:k,fixed:oe,wallLength:pe,wallHeight:E,floorBaseY:P,openings:ne})}),y.forEach(m=>{const x=m.a.room,A=_.get(x.floor??0),S=x.wall_height??i,w=x.wall_color??r,P=x.wall_material??l,E=(U,W)=>(U.room.openings||[]).filter(ee=>(U.edgeIndex!=null?ee.edge_index===U.edgeIndex:ee.wall===U.wall)&&ee.kind==="door").map(ee=>mu(ee,U.edgeLength,S)).filter(ee=>ee.start>=U.start-.02&&ee.start+ee.width<=U.end+.02).map(ee=>({...ee,start:W&&m.flipped?U.end-(ee.start+ee.width):ee.start-U.start})),T=yg([...E(m.a,!1),...E(m.b,!0)]);hd(t,s,a,w,P,m.p1,m.p2,S,A,o,T)}),(n||[]).forEach(m=>{const x=m.floor??0,A=_.get(x),S=_.get(x+1)-A;if(!(S>0))return;const w=Number(m.x)-o.x,P=Number(m.y)-o.z;Mb(t,s,a,m,S,w,P,A,r)}),d.forEach(m=>{const x=m.floor??0,A=_.get(x);if(A==null)return;const S=m.height??i,w=m.size??Rr,P=Number(m.x)-o.x,E=Number(m.y)-o.z,T=zt(a,"#9a9a9a","wall",w,S,.85,"concrete");Tt(t,s,w,S,w,P,A,E,T,sr)}),s.progress=0,s.playing=!0}const se=32;function ut(t,e=.5){return Math.round(t/e)*e}function Qn(t,e,n){return Math.min(n,Math.max(e,t))}function bb(t,e,n,i,r){return!n||!(n.width>0)||!(n.height>0)?{x:0,y:0}:{x:Qn((t-n.left)/n.width*i,0,i),y:Qn((e-n.top)/n.height*r,0,r)}}const Cb=["الطابق الأرضي","الطابق الأول","الطابق الثاني","الطابق الثالث","الطابق الرابع","الطابق الخامس","الطابق السادس","الطابق السابع","الطابق الثامن","الطابق التاسع","الطابق العاشر","الطابق الحادي عشر","الطابق الثاني عشر"];function Mg(t){return Cb[t]||`الطابق ${t}`}const Pb=12,Lb=.3,Db=.22;function md(t,e,n,i,r,o){const s=r-n,a=o-i,l=s*s+a*a,u=l===0?0:Qn(((t-n)*s+(e-i)*a)/l,0,1),c=n+u*s,h=i+u*a;return{dist:Math.hypot(t-c,e-h),t:u}}function Ib(t,e,n,i,r,o,s){let a=null;if(t.forEach(g=>{if(g.points){for(let v=0;v<g.points.length;v++){const f=g.points[v],_=g.points[(v+1)%g.points.length],m=Math.hypot(_.x-f.x,_.y-f.y),{dist:x,t:A}=md(e,n,f.x,f.y,_.x,_.y),S=A*m;(!a||x<a.dist)&&(a={dist:x,roomId:g.id,edgeIndex:v,length:m,rawPosition:S})}return}[{wall:"top",x1:g.gx,y1:g.gy,x2:g.gx+g.gw,y2:g.gy,length:g.gw},{wall:"bottom",x1:g.gx,y1:g.gy+g.gh,x2:g.gx+g.gw,y2:g.gy+g.gh,length:g.gw},{wall:"left",x1:g.gx,y1:g.gy,x2:g.gx,y2:g.gy+g.gh,length:g.gh},{wall:"right",x1:g.gx+g.gw,y1:g.gy,x2:g.gx+g.gw,y2:g.gy+g.gh,length:g.gh}].forEach(v=>{const{dist:f,t:_}=md(e,n,v.x1,v.y1,v.x2,v.y2),m=_*v.length;(!a||f<a.dist)&&(a={dist:f,roomId:g.id,wall:v.wall,length:v.length,rawPosition:m})})}),!a||a.dist>Lb||a.length<i)return null;const l=i/2,u=Qn(a.rawPosition,l,a.length-l),c=a.wall==null;return(t.find(g=>g.id===a.roomId).openings||[]).filter(g=>(c?g.edge_index===a.edgeIndex:g.wall===a.wall)&&g.id!==s).some(g=>{const y=g.kind==="door"?Ft:dn;return u-l<g.position+y/2&&u+l>g.position-y/2})?null:c?{roomId:a.roomId,edgeIndex:a.edgeIndex,position:u}:{roomId:a.roomId,wall:a.wall,position:u}}function Nb(t,e,n){let i=null;return t.forEach(r=>{(r.openings||[]).forEach(o=>{const s=o.kind==="door"?Ft:dn,a=ds(r,o,s),{dist:l}=md(e,n,a.x1,a.y1,a.x2,a.y2);(!i||l<i.dist)&&(i={dist:l,roomId:r.id,id:o.id,wall:o.wall,edgeIndex:o.edge_index,position:o.position,kind:o.kind})})}),!i||i.dist>Db?null:i}function ds(t,e,n){const i=n/2;if(t.points){const a=e.edgeIndex??e.edge_index,l=t.points[a],u=t.points[(a+1)%t.points.length],c=Math.hypot(u.x-l.x,u.y-l.y)||1,h=(e.position-i)/c,d=(e.position+i)/c;return{x1:l.x+(u.x-l.x)*h,y1:l.y+(u.y-l.y)*h,x2:l.x+(u.x-l.x)*d,y2:l.y+(u.y-l.y)*d}}const{wall:r,position:o}=e;if(r==="top"||r==="bottom"){const a=r==="top"?t.gy:t.gy+t.gh;return{x1:t.gx+o-i,y1:a,x2:t.gx+o+i,y2:a}}const s=r==="left"?t.gx:t.gx+t.gw;return{x1:s,y1:t.gy+o-i,x2:s,y2:t.gy+o+i}}const Yi=.35,Kt=.08;function q_(t,e,n){if(e.points)return;const{gx:i,gy:r,gw:o,gh:s}=e;t.save(),t.strokeStyle=n.line,t.fillStyle=n.text,t.lineWidth=1,t.font="10px 'IBM Plex Mono', monospace",t.textAlign="center";const a=(d,p,g,y)=>{t.beginPath(),t.moveTo(d*se,p*se),t.lineTo(g*se,y*se),t.stroke()},l=r-Yi;a(i,r,i,l-Kt),a(i+o,r,i+o,l-Kt),a(i,l,i+o,l),t.fillText(o.toFixed(2),(i+o/2)*se,(l-.06)*se);const u=r+s+Yi;a(i,r+s,i,u+Kt),a(i+o,r+s,i+o,u+Kt),a(i,u,i+o,u),t.fillText(o.toFixed(2),(i+o/2)*se,(u+.16)*se);const c=i-Yi;a(i,r,c-Kt,r),a(i,r+s,c-Kt,r+s),a(c,r,c,r+s),t.save(),t.translate(c*se-6,(r+s/2)*se),t.rotate(-Math.PI/2),t.fillText(s.toFixed(2),0,0),t.restore();const h=i+o+Yi;a(i+o,r,h+Kt,r),a(i+o,r+s,h+Kt,r+s),a(h,r,h,r+s),t.save(),t.translate(h*se+6,(r+s/2)*se),t.rotate(-Math.PI/2),t.fillText(s.toFixed(2),0,0),t.restore(),t.restore()}function $_(t){if(t.points&&t.points.length){const e=t.points.length;return{x:t.points.reduce((n,i)=>n+i.x,0)/e,y:t.points.reduce((n,i)=>n+i.y,0)/e}}return{x:t.gx+t.gw/2,y:t.gy+t.gh/2}}function K_(t,e,n,i){if(n.kind!=="door")return;const r=ds(e,n,Ft),o=r.x2-r.x1,s=r.y2-r.y1,a=Math.hypot(o,s);if(a<.01)return;const l={x:-s/a,y:o/a},u={x:s/a,y:-o/a},c=$_(e),h=(r.x1+r.x2)/2,d=(r.y1+r.y2)/2,p={x:c.x-h,y:c.y-d},g=l.x*p.x+l.y*p.y>=0?l:u,y=Math.atan2(s,o),v=Math.atan2(g.y,g.x);let f=v-y;for(;f>Math.PI;)f-=Math.PI*2;for(;f<=-Math.PI;)f+=Math.PI*2;const _=f<0,m=r.x1,x=r.y1;t.save(),t.strokeStyle=i,t.lineWidth=1,t.setLineDash([3,3]),t.beginPath(),t.arc(m*se,x*se,Ft*se,y,v,_),t.stroke(),t.setLineDash([]),t.beginPath(),t.moveTo(m*se,x*se),t.lineTo((m+Ft*Math.cos(v))*se,(x+Ft*Math.sin(v))*se),t.stroke(),t.restore()}function Ub(t,e,n,i,r,o,s,a){t.save(),t.strokeStyle=a,t.lineWidth=1;const l=Qn(s,2,16),u=o===90||o===270;for(let c=1;c<l;c++){if(t.beginPath(),u){const h=e+i*se*c/l;t.moveTo(h,n),t.lineTo(h,n+r*se)}else{const h=n+r*se*c/l;t.moveTo(e,h),t.lineTo(e+i*se,h)}t.stroke()}t.restore()}function Ob(t,e){const n=G_[t];if(!n)return{w:.5,d:.5};const i=e===90||e===270;return{w:i?n.d:n.w,d:i?n.w:n.d}}function Fb(t,e,n){let i=!1;for(let r=0,o=t.length-1;r<t.length;o=r++){const s=t[r].x,a=t[r].y,l=t[o].x,u=t[o].y;a>n!=u>n&&e<(l-s)*(n-a)/(u-a)+s&&(i=!i)}return i}const kb=.15;function Sh(t,e,n){const i=Bu(t,n,e+1);return i.get(e+1)-i.get(e)}function Hu(t,e){const{w:n,d:i}=xh(t),r=e===90||e===270;return{w:r?i:n,d:r?n:i}}function zb(t,e,n,i,r){let o=null;return t.forEach(s=>{const a=Sh(e,s.floor??0,n),l=s.rotation||0,{w:u,d:c}=Hu(a,l),h=s.x-u/2,d=s.x+u/2,p=s.y-c/2,g=s.y+c/2,y=Math.max(h-i,0,i-d),v=Math.max(p-r,0,r-g),f=Math.hypot(y,v);(!o||f<o.dist)&&(o={dist:f,id:s.id,floor:s.floor??0,x:s.x,y:s.y,rotation:l})}),!o||o.dist>kb?null:o}function wg(t,e,n,i,r,o){const{w:s,d:a}=Hu(r,o);if(t<s||e<a)return null;const l=s/2,u=a/2,c=Qn(n,l,t-l),h=Qn(i,u,e-u);return{x:c,y:h}}function Bb(t,e,n){const i=document.createElement("canvas");i.width=e*se,i.height=n*se;const r=i.getContext("2d");r.fillStyle="#FFFFFF",r.fillRect(0,0,i.width,i.height);for(let o=0;o<=e;o++)r.strokeStyle=o%5===0?"#C7C7CC":"#EDEDF0",r.lineWidth=o%5===0?1.2:1,r.beginPath(),r.moveTo(o*se+.5,0),r.lineTo(o*se+.5,n*se),r.stroke();for(let o=0;o<=n;o++)r.strokeStyle=o%5===0?"#C7C7CC":"#EDEDF0",r.lineWidth=o%5===0?1.2:1,r.beginPath(),r.moveTo(0,o*se+.5),r.lineTo(e*se,o*se+.5),r.stroke();return t.forEach(o=>{const s=o.gx*se,a=o.gy*se,l=o.gw*se,u=o.gh*se;o.points&&o.points.length>=3?(r.beginPath(),o.points.forEach((c,h)=>{h===0?r.moveTo(c.x*se,c.y*se):r.lineTo(c.x*se,c.y*se)}),r.closePath(),r.fillStyle=o.color+"25",r.fill(),r.strokeStyle=o.color,r.lineWidth=2,r.stroke(),r.fillStyle="#1A1A1D",r.font="700 13px Tajawal, sans-serif",r.fillText(o.name,s+8,a+20),r.fillStyle="#68686E",r.font="11px 'IBM Plex Mono', monospace",r.fillText(`${B_(o).toFixed(1)} m²`,s+8,a+36)):(r.fillStyle=o.color+"25",r.fillRect(s,a,l,u),r.strokeStyle=o.color,r.lineWidth=2,r.strokeRect(s,a,l,u),r.fillStyle="#1A1A1D",r.font="700 13px Tajawal, sans-serif",r.fillText(o.name,s+8,a+20),r.fillStyle="#68686E",r.font="11px 'IBM Plex Mono', monospace",r.fillText(`${o.gw.toFixed(1)} × ${o.gh.toFixed(1)} m`,s+8,a+36),q_(r,o,{line:"#B45309",text:"#92400E"})),(o.openings||[]).forEach(c=>{const h=c.kind==="door"?Ft:dn,d=ds(o,c,h);r.strokeStyle=c.kind==="door"?"#8B5A2B":"#0EA5E9",r.lineWidth=5,r.beginPath(),r.moveTo(d.x1*se,d.y1*se),r.lineTo(d.x2*se,d.y2*se),r.stroke(),K_(r,o,c,"#8B5A2B")}),(o.furniture||[]).forEach(c=>{var y;const{w:h,d}=Ob(c.kind,c.rotation||0),p=(o.gx+c.x-h/2)*se,g=(o.gy+c.y-d/2)*se;r.fillStyle="#A9895C25",r.fillRect(p,g,h*se,d*se),r.strokeStyle="#A9895C",r.lineWidth=1.5,r.strokeRect(p,g,h*se,d*se),r.fillStyle="#1A1A1D",r.font="10px Tajawal, sans-serif",r.textAlign="center",r.fillText(((y=G_[c.kind])==null?void 0:y.label)||"",p+h*se/2,g+d*se/2+3),r.textAlign="start"})}),i.toDataURL("image/png")}function Hb(t){const e=document.createElement("canvas"),n=e.getContext("2d"),i=40;n.font=`700 ${i}px Tajawal, sans-serif`;const r=n.measureText(t).width,o=22,s=14;e.width=Math.ceil(r+o*2),e.height=i+s*2,n.font=`700 ${i}px Tajawal, sans-serif`,n.fillStyle="rgba(17,20,26,0.72)";const a=14;n.beginPath(),n.moveTo(a,0),n.arcTo(e.width,0,e.width,e.height,a),n.arcTo(e.width,e.height,0,e.height,a),n.arcTo(0,e.height,0,0,a),n.arcTo(0,0,e.width,0,a),n.closePath(),n.fill(),n.fillStyle="#ffffff",n.textAlign="center",n.textBaseline="middle",n.fillText(t,e.width/2,e.height/2+2);const l=new gh(e);l.needsUpdate=!0;const u=new b_({map:l,depthWrite:!1,transparent:!0}),c=new YA(u),h=.014;return c.scale.set(e.width*h,e.height*h,1),c}const rf=.62,of=Math.PI/4,Gb=Ce.forwardRef(function({rooms:e,stairs:n,columns:i=[],wallHeight:r,wallColor:o,wallMaterial:s,autoRotate:a,dollhouse:l=!1,floorGap:u=0,renderView:c=!1,t:h=p=>p},d){const p=Ce.useRef(null),g=Ce.useRef({}),y=Ce.useRef({autoRotate:a}),v=Ce.useRef({maxRadius:50}),f=Ce.useRef(l),_=Ce.useRef(new Map),[m,x]=Ce.useState(0);return Ce.useEffect(()=>{y.current.autoRotate=a},[a]),Ce.useImperativeHandle(d,()=>({captureImage(A="image/jpeg",S=.92){const w=g.current;return!w.renderer||!w.scene||!w.camera?null:(w.renderer.render(w.scene,w.camera),w.renderer.domElement.toDataURL(A,S))}}),[]),Ce.useEffect(()=>{const A=p.current,S=new XA;S.background=new Fe(15790322),S.fog=new mh(15790322,22,60);const w=new Un(50,1,.1,200),P=new R_({antialias:!0});P.setPixelRatio(Math.min(window.devicePixelRatio,2)),P.shadowMap.enabled=!0,P.shadowMap.type=Yv,A.appendChild(P.domElement),S.add(new bR(12572415,1711915,.95));const E=new LR(16773856,1);E.position.set(10,18,8),E.castShadow=!0,E.shadow.mapSize.set(2048,2048),E.shadow.bias=-.0015,S.add(E);const T=new kn(new Ou(300,300),new rs({color:13948120,roughness:1}));T.rotation.x=-Math.PI/2,T.position.y=-.03,T.receiveShadow=!0,S.add(T);const U=new DR(300,150,10592682,13948120);U.position.y=-.02,S.add(U);const W=new Lr;S.add(W);const ee=vg(e,r),L={theta:of,phi:l?rf:1,radius:ee.radius,target:new O(0,ee.targetY,0)};function H(){const{theta:b,phi:q,radius:j,target:K}=L;w.position.set(K.x+j*Math.sin(q)*Math.sin(b),K.y+j*Math.cos(q),K.z+j*Math.sin(q)*Math.cos(b)),w.lookAt(K)}let z=!1,ie=0,N=0;const F=new Map;let V=null;function te(){const[b,q]=[...F.values()];return Math.hypot(b.x-q.x,b.y-q.y)}function oe(b){F.set(b.pointerId,{x:b.clientX,y:b.clientY}),F.size===1?(z=!0,ie=b.clientX,N=b.clientY):F.size===2&&(z=!1,V=te())}function Y(b){if(F.has(b.pointerId))F.set(b.pointerId,{x:b.clientX,y:b.clientY});else if(!z)return;if(F.size>=2){const K=te();V&&(L.radius=Qn(L.radius*(V/K),3,v.current.maxRadius),H()),V=K;return}if(!z)return;const q=b.clientX-ie,j=b.clientY-N;ie=b.clientX,N=b.clientY,L.theta-=q*.006,L.phi=Qn(L.phi-j*.006,.15,1.5),H()}function re(b){if(F.delete(b.pointerId),V=null,F.size===1){const[[,q]]=F;z=!0,ie=q.x,N=q.y}else F.size===0&&(z=!1)}function he(b){b.preventDefault(),L.radius=Qn(L.radius*(1+b.deltaY*.001),3,v.current.maxRadius),H()}const ge=P.domElement;ge.style.cursor="grab",ge.style.touchAction="none",ge.addEventListener("pointerdown",oe),window.addEventListener("pointermove",Y),window.addEventListener("pointerup",re),window.addEventListener("pointercancel",re),ge.addEventListener("wheel",he,{passive:!1});function pe(){const b=A.clientWidth,q=A.clientHeight;b===0||q===0||(P.setSize(b,q),w.aspect=b/q,w.updateProjectionMatrix())}pe();const k=new ResizeObserver(pe);k.observe(A),H();const D={progress:0,playing:!0,meshes:[]};let ne;function J(){ne=requestAnimationFrame(J),y.current.autoRotate&&!z&&(L.theta+=.0028,H()),D.playing&&(D.progress=Math.min(1,D.progress+.025),D.meshes.forEach(({mesh:b,height:q,baseY:j,delay:K})=>{const X=Qn((D.progress-K)/(1-K),0,1),Me=1-Math.pow(1-X,3);b.scale.y=Math.max(Me,.001),b.position.y=j+q*Me/2}),D.progress>=1&&(D.playing=!1)),P.render(S,w)}return J(),g.current={scene:S,group:W,orbit:L,updateCamera:H,animState:D,dirLight:E,renderer:P,camera:w,center:ee,defaultRadius:ee.radius,defaultTargetY:ee.targetY},v.current.maxRadius=Math.max(50,ee.radius*2),()=>{cancelAnimationFrame(ne),ge.removeEventListener("pointerdown",oe),window.removeEventListener("pointermove",Y),window.removeEventListener("pointerup",re),window.removeEventListener("pointercancel",re),ge.removeEventListener("wheel",he),k.disconnect(),A.removeChild(P.domElement),P.dispose()}},[]),Ce.useEffect(()=>{const A=g.current;if(!A.group)return;const S=c?"brick":s;if(Rb(A.group,e,n,r,o,A.center,A.animState,_.current,S,{hideRoofs:l,floorGap:u,columns:i}),c){const w=Bu(e,r,Math.max(0,...(n||[]).map(P=>(P.floor??0)+1)),u);e.forEach(P=>{if(!P.name)return;const E=P.wall_height??r,T=w.get(P.floor??0)??0,U=P.gx+P.gw/2-A.center.x,W=P.gy+P.gh/2-A.center.z,ee=Hb(P.name);ee.position.set(U,T+E*.55,W),A.group.add(ee)})}if(A.dirLight){const w=A.defaultRadius;A.dirLight.position.set(w*.6,Math.max(14,w*.9),w*.45);const P=A.dirLight.shadow.camera;P.left=-w,P.right=w,P.top=w,P.bottom=-w,P.near=1;const E=Math.max(r,...e.map(T=>T.wall_height??r));P.far=w*3+E*2,P.updateProjectionMatrix()}},[e,n,i,r,o,s,l,u,c]),Ce.useEffect(()=>{var w;const A=g.current;if(!A.orbit||!A.updateCamera)return;const S=vg(e,r,u);A.defaultRadius=S.radius,A.defaultTargetY=S.targetY,A.orbit.target.y=S.targetY,A.orbit.radius=S.radius,v.current.maxRadius=Math.max(50,S.radius*2),(w=A.scene)!=null&&w.fog&&(A.scene.fog.far=Math.max(60,S.radius*2.6)),l!==f.current&&(f.current=l,l&&(A.orbit.phi=rf,A.orbit.theta=of)),A.updateCamera()},[l,u]),Ce.useEffect(()=>{if(m===0)return;const A=g.current;A.orbit&&(A.orbit.theta=of,A.orbit.phi=l?rf:1,A.orbit.radius=A.defaultRadius,A.orbit.target.y=A.defaultTargetY??A.orbit.target.y,A.updateCamera())},[m]),ae.jsxs("div",{style:{position:"relative",width:"100%",height:"100%"},children:[ae.jsx("div",{ref:p,style:{width:"100%",height:"100%"}}),ae.jsx("button",{type:"button",onClick:()=>x(A=>A+1),style:{position:"absolute",bottom:12,right:12,fontSize:12,fontWeight:600,color:"#e2e8f0",background:"rgba(15,23,42,0.9)",border:"1px solid #334155",borderRadius:8,padding:"6px 12px",cursor:"pointer"},children:h("Reset camera")})]})}),Tg=24,yl=1.5,Ag=["#cfd6cf","#d8cfc2","#c9d3df","#dccfd6","#cfd8d3"];function Vb({rooms:t,stairs:e,columns:n=[],wallHeight:i,gridW:r=20,gridH:o=16,mode:s,activeFloor:a=0,selectedRoomId:l,selectedOpening:u,selectedStairId:c,selectedColumnId:h,onAddRoom:d,onAddPolygonRoom:p,onMoveRoom:g,onResizeRoom:y,onMovePolygonRoom:v,onSelectRoom:f,onAddOpening:_,onSelectOpening:m,onAddStair:x,onMoveStair:A,onSelectStair:S,onAddColumn:w,onMoveColumn:P,onSelectColumn:E}){const T=Ce.useRef(null),U=Ce.useRef(null),[W,ee]=Ce.useState(null),[L,H]=Ce.useState(null),z=t.filter(k=>(k.floor??0)===a),ie=e.filter(k=>(k.floor??0)===a),N=n.filter(k=>(k.floor??0)===a),F=Sh(t,a,i);Ce.useEffect(()=>{s!=="polygon"&&ee(null)},[s]),Ce.useEffect(()=>{function k(D){D.key==="Escape"&&W&&ee(null)}return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[W]);function V(k,D,ne,J){D.points?(k.beginPath(),D.points.forEach((b,q)=>{q===0?k.moveTo(b.x*se,b.y*se):k.lineTo(b.x*se,b.y*se)}),k.closePath(),k.fillStyle=J,k.fill(),k.strokeStyle=ne?"#c9a96e":"#4b5563",k.lineWidth=Math.max(2,ht*se),k.stroke()):(k.fillStyle=J,k.fillRect(D.gx*se,D.gy*se,D.gw*se,D.gh*se),k.strokeStyle=ne?"#c9a96e":"#4b5563",k.lineWidth=Math.max(2,ht*se),k.strokeRect(D.gx*se,D.gy*se,D.gw*se,D.gh*se))}function te(){const k=T.current;if(!k)return;const D=k.getContext("2d");D.clearRect(0,0,k.width,k.height),D.strokeStyle="#e5e7eb",D.lineWidth=1;for(let J=0;J<=r;J++)D.beginPath(),D.moveTo(J*se,0),D.lineTo(J*se,o*se),D.stroke();for(let J=0;J<=o;J++)D.beginPath(),D.moveTo(0,J*se),D.lineTo(r*se,J*se),D.stroke();z.forEach((J,b)=>{const q=J.id===l;V(D,J,q,J.color||Ag[b%Ag.length]);const j=J.points?J.points.reduce((X,Me)=>X+Me.x,0)/J.points.length:J.gx+J.gw/2,K=J.points?J.points.reduce((X,Me)=>X+Me.y,0)/J.points.length:J.gy+J.gh/2;if(D.fillStyle="#1b1e22",D.font="13px sans-serif",D.textAlign="center",D.fillText(J.name,j*se,K*se),q_(D,J,{line:"#9ca3af",text:"#6b7280"}),(J.openings||[]).forEach(X=>{const Me=X.kind==="door"?Ft:dn,ye=ds(J,X,Me),R=u&&u.roomId===J.id&&u.openingId===X.id;D.save(),D.strokeStyle=R?"#c9a96e":X.kind==="door"?"#8b5e34":"#3b82f6",D.lineWidth=Math.max(3,ht*se+2),D.beginPath(),D.moveTo(ye.x1*se,ye.y1*se),D.lineTo(ye.x2*se,ye.y2*se),D.stroke(),D.restore(),X.kind==="door"&&K_(D,J,X,R?"#c9a96e":"#8b5e34")}),q&&!J.points){D.fillStyle="#c9a96e";const X=(J.gx+J.gw)*se,Me=(J.gy+J.gh)*se;D.fillRect(X-6,Me-6,12,12)}}),ie.forEach(J=>{const b=J.rotation||0,{w:q,d:j}=Hu(F,b),K=J.id===c,X=(J.x-q/2)*se,Me=(J.y-j/2)*se;D.strokeStyle=K?"#c9a96e":"#6b5e3a",D.lineWidth=2,D.strokeRect(X,Me,q*se,j*se),Ub(D,X,Me,q,j,b,xh(F).numSteps,K?"#c9a96e":"#6b5e3a")}),N.forEach(J=>{const b=J.id===h,q=Rr/2;D.fillStyle=b?"#c9a96e":"#6b7280",D.fillRect((J.x-q)*se,(J.y-q)*se,Rr*se,Rr*se),D.strokeStyle="#374151",D.lineWidth=1,D.strokeRect((J.x-q)*se,(J.y-q)*se,Rr*se,Rr*se)}),W&&W.length&&(D.strokeStyle="#c9a96e",D.lineWidth=2,D.beginPath(),W.forEach((J,b)=>{b===0?D.moveTo(J.x*se,J.y*se):D.lineTo(J.x*se,J.y*se)}),L&&D.lineTo(L.x*se,L.y*se),D.stroke(),D.fillStyle="#c9a96e",W.forEach(J=>{D.beginPath(),D.arc(J.x*se,J.y*se,4,0,Math.PI*2),D.fill()}));const ne=U.current;if(ne&&ne.kind==="new-room"){const J=Math.min(ne.startX,ne.curX),b=Math.min(ne.startY,ne.curY),q=Math.abs(ne.curX-ne.startX),j=Math.abs(ne.curY-ne.startY);D.strokeStyle="#c9a96e",D.setLineDash([6,4]),D.lineWidth=2,D.strokeRect(J*se,b*se,q*se,j*se),D.setLineDash([])}}Ce.useEffect(te);function oe(k){const D=T.current.getBoundingClientRect();return bb(k.clientX,k.clientY,D,r,o)}function Y(){const k=T.current&&T.current.getBoundingClientRect();return!k||!k.width?Tg/se:Tg/(k.width/r)}function re(k,D){return z.find(ne=>ne.points?Fb(ne.points,k,D):k>=ne.gx&&k<=ne.gx+ne.gw&&D>=ne.gy&&D<=ne.gy+ne.gh)}function he(k){const{x:D,y:ne}=oe(k);if(s==="room"){U.current={kind:"new-room",startX:ut(D),startY:ut(ne),curX:D,curY:ne},te();return}if(s==="polygon"){const R={x:ut(D),y:ut(ne)};if(W&&W.length>=3){const M=W[0];if(Math.hypot(R.x-M.x,R.y-M.y)<=Y()){p(W),ee(null);return}}ee(M=>M?[...M,R]:[R]);return}if(s==="door"||s==="window"){const M=Ib(z,D,ne,s==="door"?Ft:dn);M&&_(M.roomId,s,M.wall,M.edgeIndex,M.position);return}if(s==="stairs"){const R=wg(r,o,ut(D),ut(ne),F,0);R&&x({floor:a,x:R.x,y:R.y,rotation:0});return}if(s==="column"){w({floor:a,x:ut(D),y:ut(ne)});return}const J=Nb(z,D,ne);if(J){m({roomId:J.roomId,openingId:J.id}),S(null),E(null);return}m(null);const b=zb(ie,t,i,D,ne);if(b){S(b.id),E(null),f(null),U.current={kind:"move-stair",stairId:b.id,offsetX:D-b.x,offsetY:ne-b.y,rotation:b.rotation};return}S(null);const q=Y(),j=N.find(R=>Math.hypot(D-R.x,ne-R.y)<=q);if(j){E(j.id),f(null),U.current={kind:"move-column",columnId:j.id,offsetX:D-j.x,offsetY:ne-j.y};return}E(null);const K=re(D,ne);if(!K){f(null);return}if(f(K.id),K.points){U.current={kind:"move-polygon",roomId:K.id,startPoints:K.points,offsetX:D,offsetY:ne};return}const X=K.gx+K.gw,Me=K.gy+K.gh,ye=Math.abs(D-X)<.25&&Math.abs(ne-Me)<.25;U.current=ye?{kind:"resize",roomId:K.id,startGx:K.gx,startGy:K.gy}:{kind:"move",roomId:K.id,offsetX:D-K.gx,offsetY:ne-K.gy}}function ge(k){if(s==="polygon"&&W){const{x:b,y:q}=oe(k);H({x:ut(b),y:ut(q)});return}const D=U.current;if(!D)return;const{x:ne,y:J}=oe(k);if(D.kind==="new-room"){D.curX=ne,D.curY=J,te();return}if(D.kind==="move"){const b=t.find(K=>K.id===D.roomId);if(!b)return;const q=ut(Math.max(0,Math.min(r-b.gw,ne-D.offsetX))),j=ut(Math.max(0,Math.min(o-b.gh,J-D.offsetY)));g(D.roomId,q,j);return}if(D.kind==="move-polygon"){const b=ut(ne-D.offsetX),q=ut(J-D.offsetY);if(b===0&&q===0)return;const j=D.startPoints.map(K=>({x:K.x+b,y:K.y+q}));v(D.roomId,j);return}if(D.kind==="resize"){const b=ut(Math.max(yl,ne-D.startGx)),q=ut(Math.max(yl,J-D.startGy));y(D.roomId,b,q);return}if(D.kind==="move-stair"){const b=wg(r,o,ut(ne-D.offsetX),ut(J-D.offsetY),F,D.rotation);b&&A(D.stairId,b.x,b.y,D.rotation);return}if(D.kind==="move-column"){const b=ut(Math.max(0,Math.min(r,ne-D.offsetX))),q=ut(Math.max(0,Math.min(o,J-D.offsetY)));P(D.columnId,b,q)}}function pe(){const k=U.current;if(k&&k.kind==="new-room"){const D=ut(Math.min(k.startX,k.curX)),ne=ut(Math.min(k.startY,k.curY)),J=Math.max(yl,ut(Math.abs(k.curX-k.startX))),b=Math.max(yl,ut(Math.abs(k.curY-k.startY)));d({gx:D,gy:ne,gw:J,gh:b,floor:a})}U.current=null,te()}return ae.jsx("canvas",{ref:T,width:r*se,height:o*se,style:{background:"#fff",touchAction:"none",cursor:s==="select"?"default":"crosshair",maxWidth:"100%",height:"auto",display:"block"},onPointerDown:he,onPointerMove:ge,onPointerUp:pe,onPointerLeave:pe})}const Wb=[{id:"select",label:"Select"},{id:"room",label:"Add Room"},{id:"polygon",label:"Add Polygon Room"},{id:"door",label:"Add Door"},{id:"window",label:"Add Window"},{id:"stairs",label:"Add Stairs"},{id:"column",label:"Add Column"}],yr=t=>({padding:"8px 14px",borderRadius:8,border:t?"2px solid #c9a96e":"1px solid #d1d5db",background:t?"#fdf6ea":"#fff",fontWeight:600,fontSize:13,cursor:"pointer"});function Rg(t,e){return e===0?t("Ground Floor"):t("Floor")+" "+e}function Xb({t,mode:e,onModeChange:n,selectedRoom:i,onRenameRoom:r,onResizeRoomInputs:o,onDeleteRoom:s,selectedOpening:a,onDeleteOpening:l,floorCount:u=1,activeFloor:c=0,onSetActiveFloor:h,onAddFloor:d,selectedStair:p,onDeleteStair:g,selectedColumn:y,onDeleteColumn:v}){return ae.jsxs("div",{style:{display:"flex",flexDirection:"column",borderBottom:"1px solid #e5e7eb"},children:[ae.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:6,alignItems:"center",padding:"8px 14px",borderBottom:"1px solid #f3f4f6"},children:[Array.from({length:u},(f,_)=>_).map(f=>ae.jsx("button",{type:"button",style:yr(f===c),onClick:()=>h&&h(f),title:Rg(t,f),children:Rg(t,f)},f)),u<Pb&&ae.jsxs("button",{type:"button",style:yr(!1),onClick:()=>d&&d(),children:["+ ",t("Add Floor")]})]}),ae.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:10,alignItems:"center",padding:"10px 14px"},children:[Wb.map(f=>ae.jsx("button",{type:"button",style:yr(e===f.id),onClick:()=>n(f.id),children:t(f.label)},f.id)),i&&ae.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",marginInlineStart:12},children:[ae.jsx("input",{value:i.name,onChange:f=>r(i.id,f.target.value),style:{padding:"6px 10px",borderRadius:6,border:"1px solid #d1d5db",fontSize:13,width:140}}),!i.points&&ae.jsxs(ae.Fragment,{children:[ae.jsxs("label",{style:{fontSize:12,color:"#6b7280"},children:[t("W"),ae.jsx("input",{type:"number",step:"0.1",min:"1.5",value:i.gw,onChange:f=>o(i.id,parseFloat(f.target.value)||i.gw,i.gh),style:{width:60,marginInlineStart:4,padding:"4px 6px",borderRadius:6,border:"1px solid #d1d5db"}})]}),ae.jsxs("label",{style:{fontSize:12,color:"#6b7280"},children:[t("H"),ae.jsx("input",{type:"number",step:"0.1",min:"1.5",value:i.gh,onChange:f=>o(i.id,i.gw,parseFloat(f.target.value)||i.gh),style:{width:60,marginInlineStart:4,padding:"4px 6px",borderRadius:6,border:"1px solid #d1d5db"}})]})]}),ae.jsx("button",{type:"button",style:yr(!1),onClick:()=>s(i.id),children:t("Delete Room")})]}),a&&ae.jsx("button",{type:"button",style:yr(!1),onClick:()=>l(a.roomId,a.openingId),children:t("Delete Opening")}),p&&ae.jsx("button",{type:"button",style:yr(!1),onClick:()=>g(p.id),children:t("Delete Stairs")}),y&&ae.jsx("button",{type:"button",style:yr(!1),onClick:()=>v(y.id),children:t("Delete Column")})]})]})}const jb=3e3,Yb=2*60*1e3,qb=`Transform this 3D render of an architectural floor plan into a professional, photorealistic architectural visualization of the exact same building.

CRITICAL — do not change anything structural: keep the exact same room layout, wall positions, door and window placement, staircases, columns, number of floors, and camera angle. Do not add, remove, move, or resize any structural element.

Only improve: make every material look real and tactile (genuine paint, wood, stone, brick, metal and glass), add realistic, professional architectural-visualization lighting with soft natural shadows, and photorealistic rendering quality, like a real estate marketing render.`,$b="This photo already shows a photorealistic architectural visualization. Your ONLY task is to further enhance photorealism, material detail, and lighting quality. Do NOT change the building layout, camera angle, or structural elements in any way — this is a quality-enhancement pass only.";function jo(t,e){return fetch(t,e).then(n=>n.json().then(i=>({ok:n.ok,status:n.status,data:i})))}function Kb(t){return t?Array.isArray(t.images)&&t.images.length?t.images:t.image&&t.image.url?[t.image]:t.output&&Array.isArray(t.output.images)&&t.output.images.length?t.output.images:t.response&&Array.isArray(t.response.images)&&t.response.images.length?t.response.images:t.data&&Array.isArray(t.data.images)&&t.data.images.length?t.data.images:null:null}function Z_(t,e,n){return new Promise((i,r)=>{function o(){if(Date.now()-n>=Yb){r(new Error("timeout"));return}jo("/api/status?request_id="+encodeURIComponent(t)+"&model="+encodeURIComponent(e)).then(s=>{if(!s.ok){r(new Error("status_error"));return}const a=(s.data.status||"").toString().toUpperCase();a==="COMPLETED"?jo("/api/status?request_id="+encodeURIComponent(t)+"&model="+encodeURIComponent(e)+"&mode=result&tool=engineers").then(l=>{if(!l.ok){r(new Error("result_error"));return}const u=Kb(l.data);i(u&&u.length?u[0]:null)}).catch(()=>r(new Error("connection_error"))):a==="FAILED"||a==="ERROR"?r(new Error("failed")):setTimeout(o,jb)}).catch(()=>r(new Error("connection_error")))}o()})}function Zb(t,e){return e?jo("/api/generate",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({prompt:$b,image_url:t.url,refine_token:e})}).then(n=>{if(!n.ok||!n.data||!Array.isArray(n.data.requests)||!n.data.requests.length)return t;const i=n.data.requests[0];return Z_(i.request_id,i.model,Date.now()).then(r=>r||t).catch(()=>t)}).catch(()=>t):Promise.resolve(t)}const xl={position:"fixed",inset:0,background:"rgba(0,0,0,0.9)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",padding:20,overflowY:"auto"},Sl={position:"relative",background:"#fff",borderRadius:20,padding:"28px 22px",maxWidth:420,width:"100%",textAlign:"center",boxShadow:"0 30px 70px -25px rgba(0,0,0,0.5)"};function Jb({captureImage:t,onClose:e,t:n}){const[i,r]=Ce.useState("loading"),[o,s]=Ce.useState(null),[a,l]=Ce.useState(""),[u,c]=Ce.useState(null);Ce.useEffect(()=>{let p=!1;async function g(){const y=t&&t();if(!y){p||(r("error"),l(n("Something went wrong, please try again")));return}try{const v=await jo("/api/upload",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({image_data:y,mime_type:"image/jpeg"})});if(p)return;if(!v.ok||!v.data||!v.data.url){r("error"),l(n("Image upload failed. Please try again."));return}const f=await jo("/api/generate",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({prompt:qb,image_url:v.data.url,num_images:1,guidance_scale:6.5,strength:.45})});if(p)return;if(f.status===401){window.location.href="/lamsa-auth.html?return=engineers/index.html";return}if(f.status===402){r("no_credits");return}if(!f.ok||!f.data||!Array.isArray(f.data.requests)||!f.data.requests.length){r("error"),l(n("Error generating image. Please try again."));return}const _=f.data.requests[0],m=f.data.refineToken,x=await Z_(_.request_id,_.model,Date.now());if(p)return;if(!x){r("error"),l(n("Error generating image. Please try again."));return}const A=await Zb(x,m);if(p)return;s(A.url),r("result")}catch{if(p)return;r("error"),l(n("Connection error. Please try again."))}}return g(),()=>{p=!0}},[]);function h(){o&&fetch("/api/download-image?url="+encodeURIComponent(o)+"&filename="+encodeURIComponent("lamsa-engineers-render.jpg")).then(p=>p.blob()).then(p=>{const g=URL.createObjectURL(p),y=document.createElement("a");y.href=g,y.download="lamsa-engineers-render.jpg",y.click(),setTimeout(()=>URL.revokeObjectURL(g),5e3)}).catch(()=>window.open(o,"_blank"))}function d(p){c(p),jo("/api/create-checkout-session",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({plan:p,return_page:"engineers/index.html"})}).then(g=>{if(g.status===401){window.location.href="/lamsa-auth.html?return=engineers/index.html";return}if(!g.ok||!g.data||!g.data.url){c(null);return}window.location.href=g.data.url}).catch(()=>c(null))}return i==="loading"?ae.jsx("div",{style:xl,children:ae.jsxs("div",{style:Sl,children:[ae.jsx("div",{style:{width:48,height:48,margin:"0 auto 18px",border:"4px solid #eef0f2",borderTopColor:"#c9a96e",borderRadius:"50%",animation:"lamsa-pr-spin 0.9s linear infinite"}}),ae.jsx("style",{children:"@keyframes lamsa-pr-spin { to { transform: rotate(360deg); } }"}),ae.jsx("div",{style:{fontSize:16,fontWeight:900,color:"#1b1e22",marginBottom:6},children:n("Turning your design into a photoreal render...")}),ae.jsx("div",{style:{fontSize:12.5,color:"#767d86"},children:n("Takes 20-40 seconds")})]})}):i==="error"?ae.jsx("div",{style:xl,children:ae.jsxs("div",{style:Sl,children:[ae.jsx("div",{style:{color:"#e05555",fontSize:14,fontWeight:700,marginBottom:18},children:a}),ae.jsx("button",{type:"button",onClick:e,style:{width:"100%",background:"transparent",border:"1px solid #dfe2e6",color:"#767d86",padding:10,borderRadius:10,fontSize:13,cursor:"pointer"},children:n("Close")})]})}):i==="no_credits"?ae.jsx("div",{style:xl,children:ae.jsxs("div",{style:{...Sl,maxWidth:440},children:[ae.jsx("div",{style:{fontSize:17,fontWeight:900,color:"#1b1e22",marginBottom:8},children:n("You're out of credits")}),ae.jsx("div",{style:{fontSize:13,color:"#6b7280",marginBottom:20},children:n("Subscribe to generate photoreal renders of your floor plans.")}),ae.jsxs("div",{style:{display:"flex",gap:10,marginBottom:14},children:[ae.jsxs("button",{type:"button",disabled:!!u,onClick:()=>d("weekly"),style:{flex:1,border:"1px solid #dfe2e6",borderRadius:14,padding:"14px 8px",background:"#fff",cursor:"pointer",opacity:u?.6:1},children:[ae.jsx("div",{style:{fontSize:13,fontWeight:900,color:"#1b1e22"},children:n("Weekly")}),ae.jsxs("div",{style:{fontSize:11,color:"#767d86",marginBottom:6},children:["10 ",n("credits")]}),ae.jsx("div",{style:{fontSize:15,fontWeight:900,color:"#1b1e22"},children:"€5.99"})]}),ae.jsxs("button",{type:"button",disabled:!!u,onClick:()=>d("monthly"),style:{flex:1,border:"2px solid #c9a96e",borderRadius:14,padding:"14px 8px",background:"#fdf6ea",cursor:"pointer",opacity:u?.6:1},children:[ae.jsx("div",{style:{fontSize:13,fontWeight:900,color:"#1b1e22"},children:n("Monthly")}),ae.jsxs("div",{style:{fontSize:11,color:"#767d86",marginBottom:6},children:["40 ",n("credits")]}),ae.jsx("div",{style:{fontSize:15,fontWeight:900,color:"#1b1e22"},children:"€14.99"})]})]}),ae.jsx("button",{type:"button",onClick:e,style:{width:"100%",background:"transparent",border:"none",color:"#767d86",padding:8,fontSize:13,cursor:"pointer"},children:n("Close")})]})}):ae.jsx("div",{style:xl,children:ae.jsxs("div",{style:{...Sl,maxWidth:460,textAlign:"start"},children:[ae.jsx("img",{src:o,alt:"",style:{width:"100%",borderRadius:12,display:"block",marginBottom:14}}),ae.jsxs("div",{style:{display:"flex",gap:10},children:[ae.jsx("button",{type:"button",onClick:h,style:{flex:1,background:"#c9a96e",color:"#1b1e22",border:"none",padding:14,borderRadius:10,fontWeight:900,fontSize:14,cursor:"pointer"},children:n("Download")}),ae.jsx("button",{type:"button",onClick:e,style:{flex:1,background:"transparent",border:"1px solid #dfe2e6",color:"#767d86",padding:14,borderRadius:10,fontSize:14,cursor:"pointer"},children:n("Close")})]})]})})}let bg=0;function hs(t){return bg+=1,t+"_"+Date.now().toString(36)+"_"+bg}const Qb=2.7,e2="#e8e2d8",t2="plaster";function J_(t){return{project:{id:null,name:t||"Untitled Project",wall_height:Qb,wall_color:e2,wall_material:t2},rooms:[],stairs:[],columns:[]}}function n2({name:t,gx:e,gy:n,gw:i,gh:r,color:o,floor:s=0}){return{id:hs("room"),name:t||"Room",gx:e,gy:n,gw:i,gh:r,color:o||"#cfd6cf",floor:s,has_roof:!0,roof_type:"flat",openings:[],furniture:[]}}function i2({name:t,points:e,color:n,floor:i=0}){const r=e.map(c=>c.x),o=e.map(c=>c.y),s=Math.min(...r),a=Math.min(...o),l=Math.max(...r)-s,u=Math.max(...o)-a;return{id:hs("room"),name:t||"Room",points:e,gx:s,gy:a,gw:l,gh:u,color:n||"#cfd6cf",floor:i,has_roof:!0,roof_type:"flat",openings:[],furniture:[]}}function r2({floor:t=0,x:e,y:n,rotation:i=0}){return{id:hs("stair"),floor:t,x:e,y:n,rotation:i}}function o2({floor:t=0,x:e,y:n}){return{id:hs("column"),floor:t,x:e,y:n}}function s2(t,e,n,i){const r={id:hs(t),kind:t,position:i};return n!=null?r.edge_index=n:r.wall=e,r}function a2(t,e){switch(e.type){case"SET_PROJECT":return e.project;case"SET_META":return{...t,project:{...t.project,...e.patch}};case"ADD_ROOM":return{...t,rooms:[...t.rooms,e.room]};case"UPDATE_ROOM":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,...e.patch}:n)};case"REMOVE_ROOM":return{...t,rooms:t.rooms.filter(n=>n.id!==e.roomId)};case"ADD_OPENING":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,openings:[...n.openings,s2(e.kind,e.wall,e.edgeIndex,e.position)]}:n)};case"MOVE_OPENING":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,openings:n.openings.map(i=>i.id===e.openingId?{...i,wall:e.wall,position:e.position}:i)}:n)};case"REMOVE_OPENING":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,openings:n.openings.filter(i=>i.id!==e.openingId)}:n)};case"ADD_FURNITURE":{const n={id:hs("furn"),kind:e.kind,x:e.x,y:e.y,rotation:0};return{...t,rooms:t.rooms.map(i=>i.id===e.roomId?{...i,furniture:[...i.furniture,n]}:i)}}case"MOVE_FURNITURE":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,furniture:n.furniture.map(i=>i.id===e.furnitureId?{...i,x:e.x,y:e.y,rotation:e.rotation??i.rotation}:i)}:n)};case"REMOVE_FURNITURE":return{...t,rooms:t.rooms.map(n=>n.id===e.roomId?{...n,furniture:n.furniture.filter(i=>i.id!==e.furnitureId)}:n)};case"ADD_STAIR":return{...t,stairs:[...t.stairs,e.stair]};case"MOVE_STAIR":return{...t,stairs:t.stairs.map(n=>n.id===e.stairId?{...n,x:e.x,y:e.y,rotation:e.rotation??n.rotation}:n)};case"REMOVE_STAIR":return{...t,stairs:t.stairs.filter(n=>n.id!==e.stairId)};case"ADD_COLUMN":return{...t,columns:[...t.columns||[],e.column]};case"MOVE_COLUMN":return{...t,columns:(t.columns||[]).map(n=>n.id===e.columnId?{...n,x:e.x,y:e.y}:n)};case"REMOVE_COLUMN":return{...t,columns:(t.columns||[]).filter(n=>n.id!==e.columnId)};default:return t}}function l2(t){const[e,n]=Ce.useReducer(a2,t||J_()),i=Ce.useMemo(()=>({setProject:s=>n({type:"SET_PROJECT",project:s}),setMeta:s=>n({type:"SET_META",patch:s}),addRoom:s=>n({type:"ADD_ROOM",room:s}),updateRoom:(s,a)=>n({type:"UPDATE_ROOM",roomId:s,patch:a}),removeRoom:s=>n({type:"REMOVE_ROOM",roomId:s}),addOpening:(s,a,l,u,c)=>n({type:"ADD_OPENING",roomId:s,kind:a,wall:l,edgeIndex:u,position:c}),moveOpening:(s,a,l,u)=>n({type:"MOVE_OPENING",roomId:s,openingId:a,wall:l,position:u}),removeOpening:(s,a)=>n({type:"REMOVE_OPENING",roomId:s,openingId:a}),addFurniture:(s,a,l,u)=>n({type:"ADD_FURNITURE",roomId:s,kind:a,x:l,y:u}),moveFurniture:(s,a,l,u,c)=>n({type:"MOVE_FURNITURE",roomId:s,furnitureId:a,x:l,y:u,rotation:c}),removeFurniture:(s,a)=>n({type:"REMOVE_FURNITURE",roomId:s,furnitureId:a}),addStair:s=>n({type:"ADD_STAIR",stair:s}),moveStair:(s,a,l,u)=>n({type:"MOVE_STAIR",stairId:s,x:a,y:l,rotation:u}),removeStair:s=>n({type:"REMOVE_STAIR",stairId:s}),addColumn:s=>n({type:"ADD_COLUMN",column:s}),moveColumn:(s,a,l)=>n({type:"MOVE_COLUMN",columnId:s,x:a,y:l}),removeColumn:s=>n({type:"REMOVE_COLUMN",columnId:s})}),[]),r=Ce.useCallback(s=>{const a=n2(s);return i.addRoom(a),a},[i]),o=Ce.useCallback(s=>{const a=i2(s);return i.addRoom(a),a},[i]);return{project:e.project,rooms:e.rooms,stairs:e.stairs,columns:e.columns||[],actions:{...i,addRectRoom:r,addPolygonRoom:o}}}function u2(t,e,n){return Bb(t,e,n)}const Cg={WALLS:7,DOORS:1,WINDOWS:5,DIMENSIONS:3,TEXT:7,STAIRS:8,COLUMNS:2};function Pg(t){let e=t*180/Math.PI;return e=e%360,e<0&&(e+=360),e}function At(t,e){return{x:t.x+e,y:-t.y}}function Yr(t,e,n,i){t.push(`0
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
0.0`)}function Eh(t,e,n,i){const r=["0","LWPOLYLINE","8",e,"90",String(n.length),"70","1"];n.forEach(o=>{r.push("10",String(o.x),"20",String(o.y))}),t.push(r.join(`
`))}function c2(t,e,n,i,r,o,s){t.push(`0
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
${s}`)}function Dr(t,e,n,i,r,o=0){const s=String(r).replace(/[\r\n]+/g," ");t.push(`0
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
${o}`)}function f2(t,e){const n=t.slice().sort((o,s)=>o.position-s.position);let i=0;const r=[];return n.forEach(o=>{const s=o.position-o.width/2,a=o.position+o.width/2;s>i+.02&&r.push([i,s]),i=Math.max(i,a)}),i<e-.02&&r.push([i,e]),r}function Lg(t,e,n,i,r){const o=n.x-e.x,s=n.y-e.y,a=Math.hypot(o,s);if(a<.02)return;const l=o/a,u=s/a,c=-u,h=l,d=ht/2;f2(i,a).forEach(([p,g])=>{const y=[{x:e.x+l*p-c*d,y:e.y+u*p-h*d},{x:e.x+l*g-c*d,y:e.y+u*g-h*d},{x:e.x+l*g+c*d,y:e.y+u*g+h*d},{x:e.x+l*p+c*d,y:e.y+u*p+h*d}].map(v=>At(v,r));Eh(t,"WALLS",y)})}function d2(t){const{gx:e,gy:n,gw:i,gh:r}=t;return[{wall:"top",p1:{x:e,y:n},p2:{x:e+i,y:n}},{wall:"bottom",p1:{x:e,y:n+r},p2:{x:e+i,y:n+r}},{wall:"left",p1:{x:e,y:n},p2:{x:e,y:n+r}},{wall:"right",p1:{x:e+i,y:n},p2:{x:e+i,y:n+r}}]}function h2(t,e,n,i){const r=ds(e,n,Ft),o=$_(e),s=At({x:r.x1,y:r.y1},i),a=At({x:r.x2,y:r.y2},i),l=At(o,i),u=a.x-s.x,c=a.y-s.y,h=Math.hypot(u,c);if(h<.01)return;const d={x:-c/h,y:u/h},p={x:c/h,y:-u/h},g=(s.x+a.x)/2,y=(s.y+a.y)/2,v={x:l.x-g,y:l.y-y},f=d.x*v.x+d.y*v.y>=0?d:p,_=Math.atan2(c,u),m=Math.atan2(f.y,f.x);let x=m-_;for(;x>Math.PI;)x-=Math.PI*2;for(;x<=-Math.PI;)x+=Math.PI*2;const A=x<0,S=A?m:_,w=A?_:m;c2(t,"DOORS",s.x,s.y,h,Pg(S),Pg(w));const P={x:s.x+h*Math.cos(m),y:s.y+h*Math.sin(m)};Yr(t,"DOORS",s,P)}function p2(t,e,n,i){const r=ds(e,n,dn);Yr(t,"WINDOWS",At({x:r.x1,y:r.y1},i),At({x:r.x2,y:r.y2},i))}function m2(t,e,n){const{gx:i,gy:r,gw:o,gh:s}=e,a=(p,g)=>At({x:p,y:g},n),l=(p,g,y,v)=>Yr(t,"DIMENSIONS",a(p,g),a(y,v)),u=r-Yi;l(i,r,i,u-Kt),l(i+o,r,i+o,u-Kt),l(i,u,i+o,u),Dr(t,"DIMENSIONS",a(i+o/2,u-.1),.14,o.toFixed(2));const c=r+s+Yi;l(i,r+s,i,c+Kt),l(i+o,r+s,i+o,c+Kt),l(i,c,i+o,c),Dr(t,"DIMENSIONS",a(i+o/2,c+.15),.14,o.toFixed(2));const h=i-Yi;l(i,r,h-Kt,r),l(i,r+s,h-Kt,r+s),l(h,r,h,r+s),Dr(t,"DIMENSIONS",a(h-.1,r+s/2),.14,s.toFixed(2),90);const d=i+o+Yi;l(i+o,r,d+Kt,r),l(i+o,r+s,d+Kt,r+s),l(d,r,d,r+s),Dr(t,"DIMENSIONS",a(d+.15,r+s/2),.14,s.toFixed(2),90)}function g2(t,e,n){const i=e.points?{x:Math.min(...e.points.map(r=>r.x)),y:Math.min(...e.points.map(r=>r.y))}:{x:e.gx,y:e.gy};Dr(t,"TEXT",At({x:i.x+.25,y:i.y+.5},n),.22,e.name),Dr(t,"TEXT",At({x:i.x+.25,y:i.y+.85},n),.14,`${B_(e).toFixed(1)} m2`)}function v2(t,e,n,i,r){n.forEach(o=>{const s=Sh(e,o.floor??0,i),a=o.rotation||0,{w:l,d:u}=Hu(s,a),c=o.x-l/2,h=o.x+l/2,d=o.y-u/2,p=o.y+u/2,g=[{x:c,y:d},{x:h,y:d},{x:h,y:p},{x:c,y:p}].map(f=>At(f,r));Eh(t,"STAIRS",g);const y=a===90||a===270,v=10;for(let f=1;f<v;f++)if(y){const _=c+l*f/v;Yr(t,"STAIRS",At({x:_,y:d},r),At({x:_,y:p},r))}else{const _=d+u*f/v;Yr(t,"STAIRS",At({x:c,y:_},r),At({x:h,y:_},r))}})}function _2(t,e,n){e.forEach(i=>{const o=(i.size??Rr)/2,s=i.x-o,a=i.x+o,l=i.y-o,u=i.y+o,c=[{x:s,y:l},{x:a,y:l},{x:a,y:u},{x:s,y:u}].map(h=>At(h,n));Eh(t,"COLUMNS",c),Yr(t,"COLUMNS",At({x:s,y:l},n),At({x:a,y:u},n)),Yr(t,"COLUMNS",At({x:s,y:u},n),At({x:a,y:l},n))})}function y2(t,e,n,i,r,o,s,a){const l=[];return Dr(l,"TEXT",At({x:0,y:-.7},o),.35,s),e.forEach(u=>{if(u.points&&u.points.length>=3){const c=u.points.length;for(let h=0;h<c;h++){const d=u.points[h],p=u.points[(h+1)%c],g=(u.openings||[]).filter(y=>y.edge_index===h).map(y=>({position:y.position,width:y.kind==="door"?Ft:dn}));Lg(l,d,p,g,o)}}else d2(u).forEach(({wall:c,p1:h,p2:d})=>{const p=(u.openings||[]).filter(g=>g.wall===c).map(g=>({position:g.position,width:g.kind==="door"?Ft:dn}));Lg(l,h,d,p,o)}),a&&m2(l,u,o);(u.openings||[]).forEach(c=>{c.kind==="door"?h2(l,u,c,o):p2(l,u,c,o)}),g2(l,u,o)}),v2(l,t,n,r,o),_2(l,i,o),l}function x2(t,e,n,i,r,o=!0){const s=Object.entries(Cg).map(([p,g])=>`0
LAYER
2
${p}
70
0
62
${g}
6
CONTINUOUS`).join(`
`),a=[];let l=0;const u=3;e.forEach(p=>{const g=n.filter(f=>(f.floor??0)===p.floorNum),y=(i||[]).filter(f=>(f.floor??0)===p.floorNum);a.push(...y2(t,p.rooms,g,y,r,l,p.label,o));const v=p.rooms.length?Math.max(...p.rooms.map(f=>f.points?Math.max(...f.points.map(_=>_.x)):f.gx+f.gw)):10;l+=v+u});const c=["0","SECTION","2","HEADER","9","$ACADVER","1","AC1021","9","$INSUNITS","70","6","0","ENDSEC"].join(`
`),h=["0","SECTION","2","TABLES","0","TABLE","2","LAYER","70",String(Object.keys(Cg).length),s,"0","ENDTAB","0","ENDSEC"].join(`
`),d=["0","SECTION","2","ENTITIES",...a,"0","ENDSEC"].join(`
`);return[c,h,d,"0","EOF"].join(`
`)+`
`}function S2({initialProject:t,projectId:e,onBack:n,onSave:i,t:r}){const{project:o,rooms:s,stairs:a,columns:l,actions:u}=l2(t),[c,h]=Ce.useState("select"),[d,p]=Ce.useState(0),[g,y]=Ce.useState(null),[v,f]=Ce.useState(null),[_,m]=Ce.useState(null),[x,A]=Ce.useState(null),[S,w]=Ce.useState(!1),[P,E]=Ce.useState(""),[T,U]=Ce.useState(!1),[W,ee]=Ce.useState(!1),[L,H]=Ce.useState(!1),z=Ce.useRef(null),[ie,N]=Ce.useState(()=>typeof window<"u"?window.innerWidth<900:!1);Ce.useEffect(()=>{function k(){N(window.innerWidth<900)}return window.addEventListener("resize",k),()=>window.removeEventListener("resize",k)},[]);const F=s.find(k=>k.id===g)||null,V=a.find(k=>k.id===_)||null,te=l.find(k=>k.id===x)||null,oe=Math.max(0,...s.map(k=>k.floor??0),...a.map(k=>(k.floor??0)+1),...l.map(k=>k.floor??0)),Y=Math.max(o.floor_count||1,oe+1);function re(){const k=Y+1;u.setMeta({floor_count:k}),p(Y)}async function he(){w(!0),E("");const k=await i(e,{project:o,rooms:s,stairs:a,columns:l});return w(!1),E(k.ok?r("Saved"):k.error||r("Save failed")),setTimeout(()=>E(""),2500),k}function ge(){const k=s.filter(X=>(X.floor??0)===d),D=u2(k,20,16),[,ne]=D.split(","),J=atob(ne),b=new Uint8Array(J.length);for(let X=0;X<J.length;X++)b[X]=J.charCodeAt(X);const q=new Blob([b],{type:"image/png"}),j=URL.createObjectURL(q),K=document.createElement("a");K.href=j,K.download=(o.name||"floor-plan")+"-"+Mg(d)+".png",K.click(),URL.revokeObjectURL(j)}function pe(){const k=Array.from({length:Y},(q,j)=>({floorNum:j,label:Mg(j),rooms:s.filter(K=>(K.floor??0)===j)})).filter(q=>q.rooms.length>0);if(!k.length)return;const D=x2(s,k,a,l,o.wall_height),ne=new Blob([D],{type:"application/dxf"}),J=URL.createObjectURL(ne),b=document.createElement("a");b.href=J,b.download=(o.name||"floor-plan")+".dxf",b.click(),URL.revokeObjectURL(J)}return ae.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh",fontFamily:"sans-serif",overflowX:"hidden"},children:[ae.jsxs("div",{style:{display:"flex",flexWrap:"wrap",rowGap:8,alignItems:"center",justifyContent:"space-between",padding:"10px 14px",borderBottom:"1px solid #e5e7eb"},children:[ae.jsxs("button",{type:"button",onClick:n,style:{background:"none",border:"none",cursor:"pointer",fontSize:13,color:"#374151"},children:["← ",r("Projects")]}),ae.jsx("input",{value:o.name,onChange:k=>u.setMeta({name:k.target.value}),style:{fontWeight:800,fontSize:15,border:"none",textAlign:"center",flex:"1 1 140px",minWidth:0}}),ae.jsxs("div",{style:{display:"flex",flexWrap:"wrap",rowGap:8,gap:8,alignItems:"center",justifyContent:"flex-end"},children:[ae.jsx("span",{style:{fontSize:12,color:"#6b7280"},children:P}),ae.jsxs("label",{style:{fontSize:12,color:"#6b7280",display:"flex",alignItems:"center",gap:4},children:[ae.jsx("input",{type:"checkbox",checked:T,onChange:k=>U(k.target.checked)}),r("Dollhouse view")]}),ae.jsxs("label",{style:{fontSize:12,color:"#6b7280",display:"flex",alignItems:"center",gap:4},children:[ae.jsx("input",{type:"checkbox",checked:W,onChange:k=>ee(k.target.checked)}),r("Render view")]}),ae.jsx("button",{type:"button",onClick:ge,style:{padding:"8px 14px",borderRadius:8,border:"1px solid #d1d5db",background:"#fff",fontWeight:700,fontSize:13,cursor:"pointer"},children:r("Export plan")}),ae.jsx("button",{type:"button",onClick:pe,style:{padding:"8px 14px",borderRadius:8,border:"1px solid #d1d5db",background:"#fff",fontWeight:700,fontSize:13,cursor:"pointer"},children:r("Export DXF")}),ae.jsx("button",{type:"button",onClick:()=>H(!0),title:r("Optional — uses 1 credit from your weekly/monthly plan"),style:{padding:"8px 14px",borderRadius:8,border:"1px solid #d1d5db",background:"#fff",fontWeight:700,fontSize:13,cursor:"pointer"},children:r("Generate realistic image")}),ae.jsx("button",{type:"button",onClick:he,disabled:S,style:{padding:"8px 16px",borderRadius:8,border:"none",background:"#c9a96e",color:"#1b1e22",fontWeight:800,fontSize:13,cursor:"pointer",opacity:S?.6:1},children:r(S?"Saving…":"Save")})]})]}),ae.jsx(Xb,{t:r,mode:c,onModeChange:h,selectedRoom:F,onRenameRoom:(k,D)=>u.updateRoom(k,{name:D}),onResizeRoomInputs:(k,D,ne)=>u.updateRoom(k,{gw:D,gh:ne}),onDeleteRoom:k=>{u.removeRoom(k),y(null)},selectedOpening:v,onDeleteOpening:(k,D)=>{u.removeOpening(k,D),f(null)},floorCount:Y,activeFloor:d,onSetActiveFloor:p,onAddFloor:re,selectedStair:V,onDeleteStair:k=>{u.removeStair(k),m(null)},selectedColumn:te,onDeleteColumn:k=>{u.removeColumn(k),A(null)}}),ae.jsxs("div",{style:{display:"flex",flexDirection:ie?"column":"row",flex:1,minHeight:0},children:[ae.jsx("div",{style:ie?{flex:"0 0 auto",maxHeight:"50%",overflow:"auto"}:{flex:1,overflow:"auto"},children:ae.jsx(Vb,{rooms:s,stairs:a,columns:l,wallHeight:o.wall_height,mode:c,activeFloor:d,selectedRoomId:g,selectedOpening:v,selectedStairId:_,selectedColumnId:x,onAddRoom:k=>u.addRectRoom(k),onAddPolygonRoom:k=>u.addPolygonRoom({points:k,floor:d}),onMoveRoom:(k,D,ne)=>u.updateRoom(k,{gx:D,gy:ne}),onResizeRoom:(k,D,ne)=>u.updateRoom(k,{gw:D,gh:ne}),onMovePolygonRoom:(k,D)=>{const ne=D.map(X=>X.x),J=D.map(X=>X.y),b=Math.min(...ne),q=Math.min(...J),j=Math.max(...ne)-b,K=Math.max(...J)-q;u.updateRoom(k,{points:D,gx:b,gy:q,gw:j,gh:K})},onSelectRoom:y,onAddOpening:u.addOpening,onSelectOpening:f,onAddStair:k=>u.addStair(r2(k)),onMoveStair:(k,D,ne,J)=>u.moveStair(k,D,ne,J),onSelectStair:m,onAddColumn:k=>u.addColumn(o2(k)),onMoveColumn:(k,D,ne)=>u.moveColumn(k,D,ne),onSelectColumn:A})}),ae.jsx("div",{style:{flex:1,minHeight:0},children:ae.jsx(Gb,{ref:z,rooms:s,stairs:a,columns:l,wallHeight:o.wall_height,wallColor:o.wall_color,wallMaterial:o.wall_material,t:r,dollhouse:T,floorGap:T?1.2:0,renderView:W})})]}),L&&ae.jsx(Jb,{captureImage:()=>z.current&&z.current.captureImage(),onClose:()=>H(!1),t:r})]})}const E2={"Lamsa Engineers":"لمسة للمهندسين","Please sign in to continue.":"الرجاء تسجيل الدخول للمتابعة.","Sign in":"تسجيل الدخول","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"صمّم مخططات أرضية كاملة، عاينها ثلاثي الأبعاد، وصدّر مستندات هندسية حقيقية.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"انتهى اشتراكك بقسم المهندسين. جدّد الاشتراك لمتابعة تصميم المخططات الكاملة.","Rectangular rooms, doors & windows, single-floor plans":"غرف مستطيلة، أبواب ونوافذ، مخططات بطابق واحد","Live 3D preview of your design":"معاينة ثلاثية الأبعاد حية لتصميمك","Printable floor plan export":"تصدير مخطط قابل للطباعة","Use Lamsa's existing furniture-styling tools per room":"استخدم أدوات تنسيق الأثاث الموجودة بلمسة لكل غرفة","/ year":"/ سنوياً","14-day free trial, cancel anytime":"تجربة مجانية لمدة 14 يوم، إلغاء بأي وقت","Starting…":"جارٍ البدء…","Start free trial":"ابدأ التجربة المجانية","Something went wrong, please try again":"حدث خطأ ما، حاول مرة أخرى","Your Projects":"مشاريعك","New Project":"مشروع جديد","No projects yet — create your first one.":"لا يوجد مشاريع بعد — أنشئ أول مشروع.",Delete:"حذف",Projects:"المشاريع",Saved:"تم الحفظ","Save failed":"فشل الحفظ","Export plan":"تصدير المخطط","Saving…":"جارٍ الحفظ…",Save:"حفظ",Select:"تحديد","Add Room":"إضافة غرفة","Add Door":"إضافة باب","Add Window":"إضافة نافذة","Delete Room":"حذف الغرفة","Delete Opening":"حذف الفتحة",W:"عرض",H:"ارتفاع","Reset camera":"إعادة ضبط الكاميرا","Untitled Project":"مشروع بدون اسم","Add Polygon Room":"إضافة غرفة بشكل حر","Add Stairs":"إضافة سلالم","Delete Stairs":"حذف السلالم","Add Column":"إضافة عمود","Delete Column":"حذف العمود","Ground Floor":"الطابق الأرضي",Floor:"الطابق","Add Floor":"إضافة طابق","Dollhouse view":"عرض مقطعي","Render view":"عرض فني","Export DXF":"تصدير DXF","Back to Home":"الرئيسية","Generate realistic image":"توليد صورة واقعية","Optional — uses 1 credit from your weekly/monthly plan":"اختياري — يستهلك كريدت واحد من رصيدك الأسبوعي أو الشهري","Turning your design into a photoreal render...":"عم نحوّل تصميمك لصورة واقعية...","Takes 20-40 seconds":"بياخد 20-40 ثانية",Close:"إغلاق","Image upload failed. Please try again.":"تعذّر رفع الصورة، حاول مرة أخرى","Error generating image. Please try again.":"حدث خطأ أثناء توليد الصورة، حاول مرة أخرى","Connection error. Please try again.":"خطأ بالاتصال، حاول مرة أخرى","You're out of credits":"نفد رصيدك من الكريدت","Subscribe to generate photoreal renders of your floor plans.":"اشترك لتوليد صور واقعية لمخططاتك",Weekly:"أسبوعي",Monthly:"شهري",credits:"كريدت",Download:"تحميل"},Dg={de:{"Lamsa Engineers":"Lamsa Ingenieure","Please sign in to continue.":"Bitte melde dich an, um fortzufahren.","Sign in":"Anmelden","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Entwirf komplette Grundrisse, sieh sie in 3D in der Vorschau und exportiere echte Architekturunterlagen.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Dein Zugang zu Engineers ist abgelaufen. Abonniere erneut, um weiter vollständige Grundrisse zu gestalten.","Rectangular rooms, doors & windows, single-floor plans":"Rechteckige Räume, Türen & Fenster, einstöckige Grundrisse","Live 3D preview of your design":"Live-3D-Vorschau deines Entwurfs","Printable floor plan export":"Druckbarer Grundriss-Export","Use Lamsa's existing furniture-styling tools per room":"Nutze Lamsas vorhandene Möbel-Styling-Tools für jeden Raum","/ year":"/ Jahr","14-day free trial, cancel anytime":"14 Tage kostenlos testen, jederzeit kündbar","Starting…":"Wird gestartet…","Start free trial":"Kostenlose Testphase starten","Something went wrong, please try again":"Etwas ist schiefgelaufen, bitte versuche es erneut","Your Projects":"Deine Projekte","New Project":"Neues Projekt","No projects yet — create your first one.":"Noch keine Projekte — erstelle dein erstes.",Delete:"Löschen",Projects:"Projekte",Saved:"Gespeichert","Save failed":"Speichern fehlgeschlagen","Export plan":"Plan exportieren","Saving…":"Wird gespeichert…",Save:"Speichern",Select:"Auswählen","Add Room":"Raum hinzufügen","Add Door":"Tür hinzufügen","Add Window":"Fenster hinzufügen","Delete Room":"Raum löschen","Delete Opening":"Öffnung löschen",W:"B",H:"H","Reset camera":"Kamera zurücksetzen","Untitled Project":"Unbenanntes Projekt","Add Polygon Room":"Freiform-Raum hinzufügen","Add Stairs":"Treppe hinzufügen","Delete Stairs":"Treppe löschen","Add Column":"Säule hinzufügen","Delete Column":"Säule löschen","Ground Floor":"Erdgeschoss",Floor:"Stockwerk","Add Floor":"Stockwerk hinzufügen","Dollhouse view":"Schnittansicht","Render view":"Render-Ansicht","Export DXF":"DXF exportieren","Back to Home":"Zurück zur Startseite","Generate realistic image":"Realistisches Bild erzeugen","Optional — uses 1 credit from your weekly/monthly plan":"Optional — verbraucht 1 Guthaben aus deinem Wochen-/Monatsabo","Turning your design into a photoreal render...":"Dein Entwurf wird in ein fotorealistisches Bild verwandelt...","Takes 20-40 seconds":"Dauert 20-40 Sekunden",Close:"Schließen","Image upload failed. Please try again.":"Bild-Upload fehlgeschlagen, bitte erneut versuchen","Error generating image. Please try again.":"Fehler bei der Bilderzeugung, bitte erneut versuchen","Connection error. Please try again.":"Verbindungsfehler, bitte erneut versuchen","You're out of credits":"Dein Guthaben ist aufgebraucht","Subscribe to generate photoreal renders of your floor plans.":"Abonniere, um fotorealistische Bilder deiner Grundrisse zu erzeugen.",Weekly:"Wöchentlich",Monthly:"Monatlich",credits:"Guthaben",Download:"Herunterladen"},es:{"Lamsa Engineers":"Lamsa Ingenieros","Please sign in to continue.":"Inicia sesión para continuar.","Sign in":"Iniciar sesión","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Diseña planos completos, previsualízalos en 3D y exporta documentos arquitectónicos reales.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Tu acceso a Engineers ha terminado. Suscríbete de nuevo para seguir diseñando planos completos.","Rectangular rooms, doors & windows, single-floor plans":"Habitaciones rectangulares, puertas y ventanas, planos de una sola planta","Live 3D preview of your design":"Vista previa 3D en vivo de tu diseño","Printable floor plan export":"Exportación de plano imprimible","Use Lamsa's existing furniture-styling tools per room":"Usa las herramientas de estilismo de muebles de Lamsa en cada habitación","/ year":"/ año","14-day free trial, cancel anytime":"14 días de prueba gratis, cancela cuando quieras","Starting…":"Iniciando…","Start free trial":"Iniciar prueba gratuita","Something went wrong, please try again":"Algo salió mal, inténtalo de nuevo","Your Projects":"Tus Proyectos","New Project":"Nuevo Proyecto","No projects yet — create your first one.":"Aún no hay proyectos — crea el primero.",Delete:"Eliminar",Projects:"Proyectos",Saved:"Guardado","Save failed":"Error al guardar","Export plan":"Exportar plano","Saving…":"Guardando…",Save:"Guardar",Select:"Seleccionar","Add Room":"Añadir Habitación","Add Door":"Añadir Puerta","Add Window":"Añadir Ventana","Delete Room":"Eliminar Habitación","Delete Opening":"Eliminar Apertura",W:"An",H:"Al","Reset camera":"Restablecer cámara","Untitled Project":"Proyecto sin título","Add Polygon Room":"Añadir Habitación de Forma Libre","Add Stairs":"Añadir Escaleras","Delete Stairs":"Eliminar Escaleras","Add Column":"Añadir Columna","Delete Column":"Eliminar Columna","Ground Floor":"Planta Baja",Floor:"Planta","Add Floor":"Añadir Planta","Dollhouse view":"Vista seccionada","Render view":"Vista renderizada","Export DXF":"Exportar DXF","Back to Home":"Volver al Inicio","Generate realistic image":"Generar imagen realista","Optional — uses 1 credit from your weekly/monthly plan":"Opcional — usa 1 crédito de tu plan semanal/mensual","Turning your design into a photoreal render...":"Convirtiendo tu diseño en una imagen fotorrealista...","Takes 20-40 seconds":"Tarda 20-40 segundos",Close:"Cerrar","Image upload failed. Please try again.":"Error al subir la imagen, inténtalo de nuevo","Error generating image. Please try again.":"Error al generar la imagen, inténtalo de nuevo","Connection error. Please try again.":"Error de conexión, inténtalo de nuevo","You're out of credits":"Te has quedado sin créditos","Subscribe to generate photoreal renders of your floor plans.":"Suscríbete para generar imágenes fotorrealistas de tus planos.",Weekly:"Semanal",Monthly:"Mensual",credits:"créditos",Download:"Descargar"},tr:{"Lamsa Engineers":"Lamsa Muhendisler","Please sign in to continue.":"Devam etmek icin giris yapin.","Sign in":"Giris Yap","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Tam kat planlari tasarlayin, 3D onizleme yapin ve gercek mimari belgeler disa aktarin.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Engineers erisiminiz sona erdi. Tam kat planlari tasarlamaya devam etmek icin tekrar abone olun.","Rectangular rooms, doors & windows, single-floor plans":"Dikdortgen odalar, kapilar ve pencereler, tek katli planlar","Live 3D preview of your design":"Tasariminizin canli 3D onizlemesi","Printable floor plan export":"Yazdirilabilir kat plani disa aktarma","Use Lamsa's existing furniture-styling tools per room":"Lamsa'nin mevcut mobilya stilizasyon araclarini her oda icin kullanin","/ year":"/ yil","14-day free trial, cancel anytime":"14 gunluk ucretsiz deneme, istediginiz zaman iptal edin","Starting…":"Basliyor…","Start free trial":"Ucretsiz denemeyi baslat","Something went wrong, please try again":"Bir sorun olustu, lutfen tekrar deneyin","Your Projects":"Projeleriniz","New Project":"Yeni Proje","No projects yet — create your first one.":"Henuz proje yok — ilkini olusturun.",Delete:"Sil",Projects:"Projeler",Saved:"Kaydedildi","Save failed":"Kaydetme basarisiz","Export plan":"Plani disa aktar","Saving…":"Kaydediliyor…",Save:"Kaydet",Select:"Sec","Add Room":"Oda Ekle","Add Door":"Kapi Ekle","Add Window":"Pencere Ekle","Delete Room":"Odayi Sil","Delete Opening":"Acikligi Sil",W:"G",H:"Y","Reset camera":"Kamerayi sifirla","Untitled Project":"Isimsiz Proje","Add Polygon Room":"Serbest Sekilli Oda Ekle","Add Stairs":"Merdiven Ekle","Delete Stairs":"Merdiveni Sil","Add Column":"Kolon Ekle","Delete Column":"Kolonu Sil","Ground Floor":"Zemin Kat",Floor:"Kat","Add Floor":"Kat Ekle","Dollhouse view":"Kesit Gorunumu","Render view":"Render Gorunumu","Export DXF":"DXF Disa Aktar","Back to Home":"Ana Sayfaya Don","Generate realistic image":"Gercekci Gorsel Olustur","Optional — uses 1 credit from your weekly/monthly plan":"Istege bagli — haftalik/aylik paketinizden 1 kredi kullanir","Turning your design into a photoreal render...":"Tasariminiz gercekci bir gorsele donusturuluyor...","Takes 20-40 seconds":"20-40 saniye surer",Close:"Kapat","Image upload failed. Please try again.":"Gorsel yuklenemedi, lutfen tekrar deneyin","Error generating image. Please try again.":"Gorsel olusturulurken hata olustu, lutfen tekrar deneyin","Connection error. Please try again.":"Baglanti hatasi, lutfen tekrar deneyin","You're out of credits":"Krediniz kalmadi","Subscribe to generate photoreal renders of your floor plans.":"Kat planlarinizin gercekci gorsellerini olusturmak icin abone olun.",Weekly:"Haftalik",Monthly:"Aylik",credits:"kredi",Download:"Indir"},fr:{"Lamsa Engineers":"Lamsa Ingénieurs","Please sign in to continue.":"Veuillez vous connecter pour continuer.","Sign in":"Connexion","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Concevez des plans complets, prévisualisez-les en 3D et exportez de vrais documents architecturaux.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Votre accès à Engineers a expiré. Réabonnez-vous pour continuer à concevoir des plans complets.","Rectangular rooms, doors & windows, single-floor plans":"Pièces rectangulaires, portes et fenêtres, plans à un seul niveau","Live 3D preview of your design":"Aperçu 3D en direct de votre conception","Printable floor plan export":"Export de plan imprimable","Use Lamsa's existing furniture-styling tools per room":"Utilisez les outils de style de meubles existants de Lamsa pour chaque pièce","/ year":"/ an","14-day free trial, cancel anytime":"Essai gratuit de 14 jours, annulez à tout moment","Starting…":"Démarrage…","Start free trial":"Démarrer l'essai gratuit","Something went wrong, please try again":"Un problème est survenu, veuillez réessayer","Your Projects":"Vos Projets","New Project":"Nouveau Projet","No projects yet — create your first one.":"Aucun projet pour l'instant — créez le premier.",Delete:"Supprimer",Projects:"Projets",Saved:"Enregistré","Save failed":"Échec de l'enregistrement","Export plan":"Exporter le plan","Saving…":"Enregistrement…",Save:"Enregistrer",Select:"Sélectionner","Add Room":"Ajouter une pièce","Add Door":"Ajouter une porte","Add Window":"Ajouter une fenêtre","Delete Room":"Supprimer la pièce","Delete Opening":"Supprimer l'ouverture",W:"L",H:"H","Reset camera":"Réinitialiser la caméra","Untitled Project":"Projet sans titre","Add Polygon Room":"Ajouter une pièce de forme libre","Add Stairs":"Ajouter un escalier","Delete Stairs":"Supprimer l'escalier","Add Column":"Ajouter un poteau","Delete Column":"Supprimer le poteau","Ground Floor":"Rez-de-chaussée",Floor:"Étage","Add Floor":"Ajouter un étage","Dollhouse view":"Vue en coupe","Render view":"Vue rendue","Export DXF":"Exporter en DXF","Back to Home":"Retour à l'accueil","Generate realistic image":"Générer une image réaliste","Optional — uses 1 credit from your weekly/monthly plan":"Optionnel — utilise 1 crédit de votre forfait hebdomadaire/mensuel","Turning your design into a photoreal render...":"Transformation de votre conception en image photoréaliste...","Takes 20-40 seconds":"Prend 20 à 40 secondes",Close:"Fermer","Image upload failed. Please try again.":"Échec de l'envoi de l'image, veuillez réessayer","Error generating image. Please try again.":"Erreur lors de la génération de l'image, veuillez réessayer","Connection error. Please try again.":"Erreur de connexion, veuillez réessayer","You're out of credits":"Vous n'avez plus de crédits","Subscribe to generate photoreal renders of your floor plans.":"Abonnez-vous pour générer des rendus photoréalistes de vos plans.",Weekly:"Hebdomadaire",Monthly:"Mensuel",credits:"crédits",Download:"Télécharger"},it:{"Lamsa Engineers":"Lamsa Ingegneri","Please sign in to continue.":"Accedi per continuare.","Sign in":"Accedi","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Progetta planimetrie complete, visualizzale in anteprima 3D ed esporta veri documenti architettonici.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Il tuo accesso a Engineers è scaduto. Abbonati di nuovo per continuare a progettare planimetrie complete.","Rectangular rooms, doors & windows, single-floor plans":"Stanze rettangolari, porte e finestre, planimetrie a un piano","Live 3D preview of your design":"Anteprima 3D dal vivo del tuo progetto","Printable floor plan export":"Esportazione planimetria stampabile","Use Lamsa's existing furniture-styling tools per room":"Usa gli strumenti di stile mobili di Lamsa per ogni stanza","/ year":"/ anno","14-day free trial, cancel anytime":"Prova gratuita di 14 giorni, annulla quando vuoi","Starting…":"Avvio…","Start free trial":"Avvia la prova gratuita","Something went wrong, please try again":"Qualcosa è andato storto, riprova","Your Projects":"I Tuoi Progetti","New Project":"Nuovo Progetto","No projects yet — create your first one.":"Nessun progetto ancora — crea il primo.",Delete:"Elimina",Projects:"Progetti",Saved:"Salvato","Save failed":"Salvataggio non riuscito","Export plan":"Esporta planimetria","Saving…":"Salvataggio…",Save:"Salva",Select:"Seleziona","Add Room":"Aggiungi Stanza","Add Door":"Aggiungi Porta","Add Window":"Aggiungi Finestra","Delete Room":"Elimina Stanza","Delete Opening":"Elimina Apertura",W:"L",H:"A","Reset camera":"Reimposta fotocamera","Untitled Project":"Progetto senza titolo","Add Polygon Room":"Aggiungi Stanza a Forma Libera","Add Stairs":"Aggiungi Scale","Delete Stairs":"Elimina Scale","Add Column":"Aggiungi Pilastro","Delete Column":"Elimina Pilastro","Ground Floor":"Piano Terra",Floor:"Piano","Add Floor":"Aggiungi Piano","Dollhouse view":"Vista in sezione","Render view":"Vista renderizzata","Export DXF":"Esporta DXF","Back to Home":"Torna alla Home","Generate realistic image":"Genera immagine realistica","Optional — uses 1 credit from your weekly/monthly plan":"Opzionale — usa 1 credito del tuo piano settimanale/mensile","Turning your design into a photoreal render...":"Trasformazione del tuo progetto in un rendering fotorealistico...","Takes 20-40 seconds":"Richiede 20-40 secondi",Close:"Chiudi","Image upload failed. Please try again.":"Caricamento dell'immagine non riuscito, riprova","Error generating image. Please try again.":"Errore durante la generazione dell'immagine, riprova","Connection error. Please try again.":"Errore di connessione, riprova","You're out of credits":"Hai esaurito i crediti","Subscribe to generate photoreal renders of your floor plans.":"Abbonati per generare rendering fotorealistici delle tue planimetrie.",Weekly:"Settimanale",Monthly:"Mensile",credits:"crediti",Download:"Scarica"},ru:{"Lamsa Engineers":"Lamsa Inzhenery","Please sign in to continue.":"Voydite, chtoby prodolzhit.","Sign in":"Vkhod","Design complete floor plans, preview them in 3D, and export real architectural deliverables.":"Proektiruyte polnotsennye plany pomeshcheniy, prosmatrivayte ikh v 3D i eksportiruyte nastoyashchie arkhitekturnye dokumenty.","Your Engineers access has ended. Subscribe again to continue designing full floor plans.":"Vash dostup k Engineers zavershilsya. Oformite podpisku snova, chtoby prodolzhit proektirovat polnye plany.","Rectangular rooms, doors & windows, single-floor plans":"Pryamougolnye komnaty, dveri i okna, odnoetazhnye plany","Live 3D preview of your design":"Zhivoy 3D-predprosmotr vashego proekta","Printable floor plan export":"Eksport plana dlya pechati","Use Lamsa's existing furniture-styling tools per room":"Ispolzuyte sushchestvuyushchie instrumenty stilizatsii mebeli Lamsa dlya kazhdoy komnaty","/ year":"/ god","14-day free trial, cancel anytime":"14-dnevnyy besplatnyy probnyy period, otmena v lyuboy moment","Starting…":"Zapusk…","Start free trial":"Nachat besplatnyy probnyy period","Something went wrong, please try again":"Chto-to poshlo ne tak, poprobuyte snova","Your Projects":"Vashi Proekty","New Project":"Novyy Proekt","No projects yet — create your first one.":"Poka net proektov — sozdayte pervyy.",Delete:"Udalit",Projects:"Proekty",Saved:"Sokhraneno","Save failed":"Oshibka sokhraneniya","Export plan":"Eksportirovat plan","Saving…":"Sokhranenie…",Save:"Sokhranit",Select:"Vybrat","Add Room":"Dobavit Komnatu","Add Door":"Dobavit Dver","Add Window":"Dobavit Okno","Delete Room":"Udalit Komnatu","Delete Opening":"Udalit Proyom",W:"Sh",H:"V","Reset camera":"Sbrosit kameru","Untitled Project":"Proekt bez nazvaniya","Add Polygon Room":"Dobavit Komnatu Svobodnoy Formy","Add Stairs":"Dobavit Lestnitsu","Delete Stairs":"Udalit Lestnitsu","Add Column":"Dobavit Kolonnu","Delete Column":"Udalit Kolonnu","Ground Floor":"Pervyy Etazh",Floor:"Etazh","Add Floor":"Dobavit Etazh","Dollhouse view":"Razrez doma","Render view":"Render vid","Export DXF":"Eksportirovat DXF","Back to Home":"Na glavnuyu","Generate realistic image":"Sozdat realistichnoe izobrazhenie","Optional — uses 1 credit from your weekly/monthly plan":"Neobyazatelno — ispolzuet 1 kredit iz vashego nedelnogo/mesyachnogo plana","Turning your design into a photoreal render...":"Prevrashchaem vash proekt v fotorealistichnoe izobrazhenie...","Takes 20-40 seconds":"Zanimaet 20-40 sekund",Close:"Zakryt","Image upload failed. Please try again.":"Ne udalos zagruzit izobrazhenie, poprobuyte snova","Error generating image. Please try again.":"Oshibka pri sozdanii izobrazheniya, poprobuyte snova","Connection error. Please try again.":"Oshibka soedineniya, poprobuyte snova","You're out of credits":"U vas konchilis kredity","Subscribe to generate photoreal renders of your floor plans.":"Oformite podpisku, chtoby sozdavat realistichnye izobrazheniya vashikh planov.",Weekly:"Nedelnyy",Monthly:"Mesyachnyy",credits:"kreditov",Download:"Skachat"}};function M2(){try{return localStorage.getItem("lamsa_lang")||"en"}catch{return"en"}}function w2(){const[t,e]=Ce.useState(M2);Ce.useEffect(()=>{document.documentElement.setAttribute("dir",t==="ar"?"rtl":"ltr"),document.documentElement.setAttribute("lang",t)},[t]),Ce.useEffect(()=>{function i(r){r.key==="lamsa_lang"&&e(r.newValue||"en")}return window.addEventListener("storage",i),()=>window.removeEventListener("storage",i)},[]);const n=Ce.useCallback(i=>t==="ar"?E2[i]||i:t==="en"?i:Dg[t]&&Dg[t][i]||i,[t]);return{lang:t,t:n}}function T2(t){return!!t&&(t.status==="active"||t.status==="trialing")}function A2(){const{t}=w2(),[e,n]=Ce.useState("loading"),[i,r]=Ce.useState(null),[o,s]=Ce.useState([]),[a,l]=Ce.useState(null);Ce.useEffect(()=>{DS().then(g=>{if(g.status===401){n("signin");return}if(!g.ok||!g.data){n("signin");return}const y=g.data.engineerSubscription;if(r(y?y.status:null),!T2(y)){n("paywall");return}u()})},[]);function u(){IS().then(g=>{g.ok&&g.data&&s(g.data.projects||[]),n("list")})}function c(){l({projectId:null,project:J_(t("Untitled Project"))}),n("editor")}function h(g){NS(g).then(y=>{if(y.status===403){n("paywall");return}!y.ok||!y.data||(l({projectId:g,project:y.data.project}),n("editor"))})}function d(g){OS(g).then(()=>u())}async function p(g,y){const v=await US(g,y);return v.status===403?(n("paywall"),{ok:!1,error:"Engineers access required"}):(v.ok&&v.data&&l(f=>({...f,projectId:v.data.projectId})),v.ok?{ok:!0}:{ok:!1,error:v.data&&v.data.error||"Save failed"})}return e==="loading"?null:e==="signin"?ae.jsxs("div",{style:{maxWidth:420,margin:"100px auto",textAlign:"center",fontFamily:"sans-serif"},children:[ae.jsx("h1",{style:{fontSize:20,fontWeight:800,marginBottom:12},children:t("Lamsa Engineers")}),ae.jsx("p",{style:{color:"#6b7280",marginBottom:20},children:t("Please sign in to continue.")}),ae.jsx("a",{href:"/lamsa-auth.html?return=engineers/index.html",style:{display:"inline-block",background:"#c9a96e",color:"#1b1e22",padding:"12px 24px",borderRadius:10,fontWeight:800,textDecoration:"none"},children:t("Sign in")})]}):e==="paywall"?ae.jsx(kS,{status:i,t}):e==="editor"&&a?ae.jsx(S2,{initialProject:a.project,projectId:a.projectId,onBack:()=>u(),onSave:p,t}):ae.jsx(zS,{projects:o,onOpen:h,onCreate:c,onDelete:d,t})}Xv(document.getElementById("root")).render(ae.jsx(xy.StrictMode,{children:ae.jsx(A2,{})}));
